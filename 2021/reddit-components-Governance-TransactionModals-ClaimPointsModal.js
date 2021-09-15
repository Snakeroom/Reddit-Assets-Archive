// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.7cddc59a79168dd49b81.js
// Retrieved at 9/15/2021, 6:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ClaimPointsModal"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function r(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t),
					a = new s.BigNumber(n.dividedBy(r)),
					o = new s.BigNumber("100").multipliedBy(a);
				return new s.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(r.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "h", (function() {
				return R
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/redditGQL/operations/PollVote.json"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/crypto/points.ts"),
				h = n("./src/reddit/actions/governance/constants.ts"),
				C = n("./src/reddit/actions/governance/errorToast.ts");
			const j = Object(r.a)(h.b),
				O = Object(r.a)(h.c),
				g = Object(r.a)(h.e),
				w = (Object(r.a)(h.f), Object(r.a)(h.g), Object(r.a)(h.h)),
				E = Object(r.a)(h.i),
				_ = Object(r.a)(h.j),
				N = Object(r.a)(h.k),
				I = Object(r.a)(h.q),
				y = Object(r.a)(h.r),
				T = Object(r.a)(h.s),
				M = Object(r.a)(h.t),
				k = Object(r.a)(h.u),
				S = Object(r.a)(h.v),
				A = Object(r.a)(h.w),
				P = Object(r.a)(h.x),
				B = (e, t) => async (n, s, {
					apiContext: r,
					gqlContext: a
				}) => {
					let o, c = s().polls.models[e];
					if (n(_({
							pollId: e
						})), (o = c.type === u.a.GA ? await ((e, t, n) => Object(l.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(a(), e, t) : await
							function(e, t, n, s) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${s}`
								})
							}(r(), c.subredditId, e, t)).ok) {
						if (c.type === u.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(g({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(N(o.body));
						const r = s();
						if ((c = r.polls.models[e]) && Object(u.d)(c)) {
							const {
								postId: e
							} = c, t = r.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.db)(e))
						}
					} else n(E({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(C.a)(n, o.error || o.errors[0].messsage)
				}, D = (e, t) => async (n, r, {
					apiContext: i
				}) => {
					var l;
					n(T());
					const u = r().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(p.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: u
					});
					m.ok ? (n(M({
						...m.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: x.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(a.a)(e.amount)), s.fbt._param("tokenName", (null === (l = Object(v.b)(r(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(I({
						error: m.error
					})), Object(C.a)(n, m.error))
				}, R = e => async (t, n, {
					apiContext: s
				}) => {
					t(S());
					const r = await Object(b.a)(s(), e);
					r.ok ? t(A(r.body)) : t(k({
						error: r.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, n) {
			"use strict";

			function s(e, t, n = 3e4, s = 3e5) {
				return async (r, a, o) => new Promise((i, c) => {
					const d = Date.now() + s,
						l = () => {
							c(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > d) return l();
							const s = Date.now();
							await e(r, a, o);
							const m = await t(a);
							if (m) i();
							else if (!1 === m) c();
							else {
								Date.now() + Math.max(n - (Date.now() - s), 0) < d ? setTimeout(u, n) : l()
							}
						};
					u()
				})
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less": function(e, t, n) {
			e.exports = {
				overview: "_3vbYFraj9qRr9wXp4mcPUn",
				description: "_1SZ6yxzmSfQKpV9QOquYaR",
				grid: "jh8B-AY4740kpxlHw2YDW",
				descriptionTitle: "iGBU2u1c8RwaU1r6hphWt",
				amountSubtext: "_28HHYVa7-RIY6X_ZjCpCAb",
				descriptionSubtitle: "_3nbUm4QjlldCfIOsi_zYWh",
				amountCell: "ftLHNRLY2TdwcJtKSvldG",
				amount: "_3sfSvH2g-yH3GQObK-yNFD"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				i = n.n(o);

			function c(e) {
				return r.a.createElement("div", {
					className: i.a.overview
				}, e.image, r.a.createElement("div", {
					className: i.a.description
				}, r.a.createElement("div", {
					className: i.a.grid
				}, r.a.createElement("div", {
					className: i.a.descriptionTitle,
					title: e.title
				}, e.title), r.a.createElement("div", {
					className: i.a.amountCell
				}, r.a.createElement(a.a, {
					amount: e.pointsAmount,
					className: i.a.amount,
					subredditId: e.subredditId
				})), r.a.createElement("div", {
					className: i.a.descriptionSubtitle
				}, e.subtitle), r.a.createElement("div", {
					className: i.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "_3OT024bIB7-_eUL8vmIzMN"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/economics/claims/constants.ts");
			const u = Object(d.a)(l.a),
				m = Object(d.a)(l.b);
			var p = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				b = n("./src/reddit/actions/governance/index.ts"),
				x = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/util/pollActionForSuccess.ts"),
				v = n("./src/reddit/endpoints/governance/crypto.ts"),
				h = n("./src/reddit/helpers/crypto/transactions.ts"),
				C = n("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				j = n("./src/reddit/helpers/governance/tokens.ts"),
				O = n("./src/reddit/helpers/trackers/crypto.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/crypto/claims.ts"),
				_ = n("./src/reddit/selectors/crypto/points.ts"),
				N = n("./src/reddit/selectors/gov.ts"),
				I = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				y = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				T = n("./src/reddit/components/SubredditIcon/index.tsx"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				S = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				A = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less"),
				P = n.n(A);

			function B(e) {
				const {
					subredditId: t,
					pointsDetails: n
				} = e, r = Object(o.e)(t => Object(E.b)(t, e)), i = r && r.pointsToClaim;
				if (!i) throw new Error("Expected claim amount to approve");
				const c = Object(o.e)(t => Object(M.Q)(t, e));
				return a.a.createElement(S.a, {
					subredditId: t,
					image: a.a.createElement(T.b, {
						className: P.a.subredditIcon,
						subredditOrProfile: c
					}),
					title: s.fbt._("Claim {pointsName}", [s.fbt._param("pointsName", n.name)], {
						hk: "zLhei"
					}),
					subtitle: s.fbt._("For your contributions to {subredditName}", [s.fbt._param("subredditName", c.displayText)], {
						hk: "tFIxU"
					}),
					pointsAmount: i
				})
			}
			const D = e => a.a.createElement(k.b, {
				values: [
					[s.fbt._("Karma earned", null, {
						hk: "46NXlD"
					}), e.transaction.arguments[2]],
					[Object(k.c)(), e.transaction.arguments[1]],
					[Object(k.a)(), e.transaction.contractAddress]
				]
			});
			t.default = Object(c.a)((function(e) {
				const {
					onClose: t,
					subredditId: n
				} = e, r = Object(o.d)(), c = Object(g.a)(), {
					currentPointsAmount: d,
					nextPointsClaim: l,
					pointsDetails: T
				} = Object(o.e)(Object(i.c)({
					currentPointsAmount: t => Object(N.e)(t, e),
					nextPointsClaim: t => Object(E.b)(t, e),
					pointsDetails: t => Object(_.b)(t, e.subredditId)
				}));
				if (!T || !l) throw new Error("No available claim to make");
				if (!l.address) return a.a.createElement(I.a, {
					onClose: t
				});
				const M = Object(h.b)(T.contracts.distribution.address, l.round, l.address, l.userKarma, l.signature),
					k = e => {
						c(Object(O.c)("points_claim", n, T.displayConversion, e))
					},
					S = Object(j.b)(l.pointsToClaim, T.displayConversion);
				return a.a.createElement(y.a, {
					approvalOverview: a.a.createElement(B, {
						pointsDetails: T,
						subredditId: n
					}),
					approvalDetails: a.a.createElement(D, {
						transaction: M
					}),
					onClose: t,
					onTransactionSuccess: async e => {
						t(), r(Object(x.f)(Object(x.e)(s.fbt._("Processing claim...", null, {
							hk: "46c8dF"
						}), w.b.SuccessCommunity))), r(m({
							subredditId: n
						})), async function(e, t, n, s, r) {
							await Object(C.a)(t, n), await e(Object(f.a)(Object(b.h)({
								subredditId: s
							}), async e => {
								const t = Object(N.e)(e(), {
									subredditId: s
								});
								return r !== t || null
							})), await e(Object(p.b)({
								forceFetch: !0
							}))
						}(r, T, e.hash, n, d).then(() => {
							c(Object(O.d)("points_claim", n, S)), r(function(e) {
								return Object(x.f)(Object(x.e)(s.fbt._("Your {pointsName} are ready!", [s.fbt._param("pointsName", e)], {
									hk: "2LpLml"
								}), w.b.SuccessCommunityGreen))
							}(T.name))
						}).catch(e => {
							k(e.toString()), r(function(e) {
								return Object(x.f)(Object(x.e)(s.fbt._("Failed to claim your {pointsName}. Try again later", [s.fbt._param("pointsName", e)], {
									hk: "ch1Bl"
								}), w.b.Error))
							}(T.name))
						}).finally(() => {
							r(u({
								subredditId: n
							}))
						})
					},
					onTransactionFailure: k,
					subredditId: n,
					transaction: M,
					transactionIntent: Object(v.c)(n)
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3RwZXlqQ-Iin-F-rL6IYG4",
				header: "_2jRdJa8cJJOIUqpk7tjmJM",
				title: "c4tRBYxcJYSuTBRs4uJBu",
				closeButton: "_23b4K8MIubjQq2ix5KI8QR",
				body: "_1WFLRa1qVzmEB1vs-gujyU",
				leftSection: "I4Uc5svBBVMAC3Gv3cumu",
				sectionHeader: "_2zaE6P94B156zFeiUyAHGj",
				content: "_1Yqz3rGaFmyEoxy_Wc_MrB",
				rightSection: "_-4IOB0_BjX0SdDgbB8E5e"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				m = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				p = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				b = n.n(p);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const f = Object(o.c)({
					userId: e => {
						const t = Object(l.k)(e);
						return t ? t.id : ""
					}
				}),
				v = Object(a.b)(f)((function(e) {
					const {
						onClose: t,
						userId: n
					} = e;
					return r.a.createElement("div", {
						className: b.a.container
					}, r.a.createElement("header", {
						className: b.a.header
					}, r.a.createElement("div", {
						className: b.a.title
					}, x._("Create Your Vault on Your Smartphone", null, {
						hk: "247Dqn"
					})), r.a.createElement(d.a, {
						className: b.a.closeButton,
						onClick: t
					})), r.a.createElement("div", {
						className: b.a.body
					}, r.a.createElement("section", {
						className: b.a.leftSection
					}, r.a.createElement("div", {
						className: b.a.sectionHeader
					}, x._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), r.a.createElement("div", {
						className: b.a.content
					}, r.a.createElement(u.a, {
						index: "1"
					}, x._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), r.a.createElement(u.a, {
						index: "2"
					}, x._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), r.a.createElement(u.a, {
						index: "3"
					}, x._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), r.a.createElement(u.a, {
						index: "4"
					}, x._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), r.a.createElement("section", {
						className: b.a.rightSection
					}, r.a.createElement(m.a, {
						url: Object(c.a)("http://www.reddit.com/vault/", {
							u: n
						}),
						scale: 5
					}))))
				}));
			t.b = Object(i.a)(v)
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(s.createContext)(o);

			function c(e) {
				const t = t => r.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: s
				}) => r.a.createElement(e, a({
					apiContext: n,
					gqlContext: s
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "c", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(r),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				C = n.n(h);
			var j = Object(x.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: C.a.wrapper
					}, d.a.createElement(v.a, {
						className: C.a.titleRow
					}, n), d.a.createElement("div", {
						className: C.a.detailsContainer
					}, t), d.a.createElement(v.a, {
						className: C.a.buttonRow
					}, d.a.createElement(f.k, {
						className: C.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				O = n("./src/reddit/controls/ErrorText/index.m.less"),
				g = n.n(O);
			const w = Object(u.c)({
				activeModalId: b.a
			});
			class E extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: n,
						errorModalBody: r,
						errorModalTitle: a = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(g.a.wrapper, n)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && d.a.createElement(j, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const _ = Object(l.b)(w, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(E),
				N = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: a = []
					} = e, o = a.length ? a : r ? [r] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(_, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				I = e => d.a.createElement(N, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = _
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				x = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, r.a.createElement(p, m({
						innerRef: s
					}, d)), e.label && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				v = e => r.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var h;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(h || (h = {}));
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: h.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: h.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: s,
						errors: a = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(x, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, r.a.createElement(d.b, {
						className: u.a.trash
					})), !!a[o] && r.a.createElement(i.b, {
						className: u.a.errorText
					}, a[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && n.length >= s) && !i;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && r.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/config.ts"),
				r = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: r.ib.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: s
						}
					}
					return e
				})
			}

			function i(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}`,
					method: r.ib.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");

			function r(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function a(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(r).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e, t) {
				const [n, r] = Object(s.useState)(e);
				return [n, e => {
					t.current && r(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const c = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("inlineRow", a.a)
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				a = {},
				o = (e, t) => {
					const n = p(e, t);
					if (n) return n.mainHeader
				},
				i = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = d(e, t),
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				u = (e, t) => {
					const n = d(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(s.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || r
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.7cddc59a79168dd49b81.js.map