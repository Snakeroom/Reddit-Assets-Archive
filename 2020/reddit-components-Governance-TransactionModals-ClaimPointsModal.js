// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.09945cbc54268726a496.js
// Retrieved at 10/20/2020, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ClaimPointsModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return s(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function a(e, t) {
				const n = new s.BigNumber(e),
					a = new s.BigNumber(t),
					r = new s.BigNumber(n.dividedBy(a)),
					o = new s.BigNumber("100").multipliedBy(r);
				return new s.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "h", (function() {
				return R
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/governance/poll.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				p = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/gov.ts"),
				f = n("./src/reddit/actions/governance/constants.ts"),
				x = n("./src/reddit/actions/governance/errorToast.ts");
			const j = Object(a.a)(f.b),
				O = Object(a.a)(f.c),
				g = Object(a.a)(f.e),
				C = (Object(a.a)(f.f), Object(a.a)(f.g), Object(a.a)(f.h)),
				E = Object(a.a)(f.i),
				_ = Object(a.a)(f.j),
				w = Object(a.a)(f.k),
				N = Object(a.a)(f.q),
				I = Object(a.a)(f.r),
				y = Object(a.a)(f.s),
				T = Object(a.a)(f.t),
				M = Object(a.a)(f.u),
				k = Object(a.a)(f.v),
				S = Object(a.a)(f.w),
				A = Object(a.a)(f.x),
				P = (e, t) => async (n, s, a) => {
					let r, {
							apiContext: o,
							gqlContext: i
						} = a,
						l = s().polls.models[e];
					if (n(_({
							pollId: e
						})), (r = l.type === p.a.GA ? await Object(d.c)(i(), e, t) : await Object(d.b)(o(), l.subredditId, e, t)).ok) {
						if (l.type === p.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							n(g({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(w(r.body));
						const a = s();
						if ((l = a.polls.models[e]) && Object(p.d)(l)) {
							const {
								postId: e
							} = l, t = a.posts.models[e];
							t && t.voteState === h.a.notVoted && n(Object(c.S)(e))
						}
					} else n(E({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(x.a)(n, r.error || r.errors[0].messsage)
				}, B = (e, t) => async (n, a, c) => {
					let {
						apiContext: d
					} = c;
					n(y());
					const m = a().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(u.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(l.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(d(), Object.assign(Object.assign({}, e), {
						contentId: m
					}));
					p.ok ? (n(T(Object.assign(Object.assign({}, p.body), {
						subredditId: e.subredditId
					}))), n(Object(i.e)({
						kind: b.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(r.a)(e.amount)), s.fbt._param("tokenName", Object(v.p)(a(), {
							subredditId: e.subredditId
						})), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(N({
						error: p.error
					})), Object(x.a)(n, p.error))
				}, R = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					t(k());
					const r = await Object(m.a)(a(), e);
					r.ok ? t(S(r.body)) : t(M({
						error: r.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4,
					s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e5;
				return async (a, r, o) => new Promise((c, i) => {
					const d = Date.now() + s,
						l = () => {
							i(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > d) return l();
							const s = Date.now();
							await e(a, r, o);
							const m = await t(r);
							if (m) c();
							else if (!1 === m) i();
							else {
								Date.now() + Math.max(n - (Date.now() - s), 0) < d ? setTimeout(u, n) : l()
							}
						};
					setTimeout(u, n)
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
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				c = n.n(o);

			function i(e) {
				return a.a.createElement("div", {
					className: c.a.overview
				}, e.image, a.a.createElement("div", {
					className: c.a.description
				}, a.a.createElement("div", {
					className: c.a.grid
				}, a.a.createElement("div", {
					className: c.a.descriptionTitle,
					title: e.title
				}, e.title), a.a.createElement("div", {
					className: c.a.amountCell
				}, a.a.createElement(r.a, {
					amount: e.pointsAmount,
					className: c.a.amount,
					subredditId: e.subredditId
				})), a.a.createElement("div", {
					className: c.a.descriptionSubtitle
				}, e.subtitle), a.a.createElement("div", {
					className: c.a.amountSubtext
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
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es7.promise.finally.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/economics/claims/constants.ts");
			const u = Object(d.a)(l.a),
				m = Object(d.a)(l.b);
			var p = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				b = n("./src/reddit/actions/governance/index.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/actions/util/pollActionForSuccess.ts"),
				f = n("./src/reddit/endpoints/governance/crypto.ts"),
				x = n("./src/reddit/helpers/crypto/transactions.ts"),
				j = n("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				O = n("./src/reddit/helpers/governance/tokens.ts"),
				g = n("./src/reddit/helpers/trackers/crypto.ts"),
				C = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/economics.ts"),
				w = n("./src/reddit/selectors/gov.ts"),
				N = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				I = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				y = n("./src/reddit/components/SubredditIcon/index.tsx"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				k = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				S = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less"),
				A = n.n(S);

			function P(e) {
				const t = Object(o.d)(t => Object(_.l)(t, e)),
					n = t && t.pointsToClaim;
				if (!n) throw new Error("Expected claim amount to approve");
				const a = Object(o.d)(t => Object(T.T)(t, e)),
					c = Object(o.d)(t => Object(w.p)(t, e));
				return r.a.createElement(k.a, {
					subredditId: e.subredditId,
					image: r.a.createElement(y.b, {
						className: A.a.subredditIcon,
						subredditOrProfile: a
					}),
					title: s.fbt._("Claim {pointsName}", [s.fbt._param("pointsName", c)], {
						hk: "zLhei"
					}),
					subtitle: s.fbt._("For your contributions to {subredditName}", [s.fbt._param("subredditName", a.displayText)], {
						hk: "tFIxU"
					}),
					pointsAmount: n
				})
			}
			const B = e => r.a.createElement(M.b, {
				values: [
					[s.fbt._("Karma earned", null, {
						hk: "46NXlD"
					}), e.transaction.arguments[2]],
					[Object(M.c)(), e.transaction.arguments[1]],
					[Object(M.a)(), e.transaction.contractAddress]
				]
			});
			t.default = Object(i.a)((function(e) {
				const {
					onClose: t,
					subredditId: n
				} = e, a = Object(o.c)(), i = Object(C.a)(), {
					currentPointsAmount: d,
					nextPointsClaim: l,
					pointsName: y,
					tokenConversion: T,
					walletProvider: M
				} = Object(o.d)(Object(c.c)({
					currentPointsAmount: t => Object(w.h)(t, e),
					nextPointsClaim: t => Object(_.l)(t, e),
					pointsName: t => Object(w.p)(t, e),
					tokenConversion: t => Object(w.o)(t, e),
					walletProvider: t => Object(w.t)(t, e)
				}));
				if (!l) throw new Error("No available claim to make");
				if (!l.address) return r.a.createElement(N.a, {
					onClose: t
				});
				if (!M) throw new Error("No wallet provider");
				const k = Object(x.a)(M.extra.contracts.distribution.address, l.round, l.address, l.userKarma, l.signature),
					S = e => {
						i(Object(g.a)("points_claim", n, A, e))
					},
					A = Object(O.b)(l.pointsToClaim, T);
				return r.a.createElement(I.a, {
					approvalOverview: r.a.createElement(P, {
						subredditId: n
					}),
					approvalDetails: r.a.createElement(B, {
						transaction: k
					}),
					onClose: t,
					onTransactionSuccess: async e => {
						t(), a(Object(h.e)(Object(h.d)(s.fbt._("Processing claim...", null, {
							hk: "46c8dF"
						}), E.b.SuccessCommunity))), a(m({
							subredditId: n
						})), async function(e, t, n, s, a) {
							await Object(j.a)(t, n), await e(Object(v.a)(Object(b.h)({
								subredditId: s
							}), async e => {
								const t = Object(w.h)(e(), {
									subredditId: s
								});
								return a !== t || null
							})), await e(Object(p.b)({
								forceFetch: !0
							}))
						}(a, M, e.hash, n, d).then(() => {
							i(Object(g.b)("points_claim", n, A)), a(function(e) {
								return Object(h.e)(Object(h.d)(s.fbt._("Your {pointsName} are ready!", [s.fbt._param("pointsName", e)], {
									hk: "2LpLml"
								}), E.b.SuccessCommunityGreen))
							}(y))
						}).catch(e => {
							S(e.toString()), a(function(e) {
								return Object(h.e)(Object(h.d)(s.fbt._("Failed to claim your {pointsName}. Try again later", [s.fbt._param("pointsName", e)], {
									hk: "ch1Bl"
								}), E.b.Error))
							}(y))
						}).finally(() => {
							a(u({
								subredditId: n
							}))
						})
					},
					onTransactionFailure: S,
					subredditId: n,
					transaction: k,
					transactionIntent: Object(f.b)(n)
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
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				m = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				p = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const v = Object(o.c)({
					userId: e => {
						const t = Object(l.i)(e);
						return t ? t.id : ""
					}
				}),
				f = Object(r.b)(v)((function(e) {
					const {
						onClose: t,
						userId: n
					} = e;
					return a.a.createElement("div", {
						className: b.a.container
					}, a.a.createElement("header", {
						className: b.a.header
					}, a.a.createElement("div", {
						className: b.a.title
					}, h._("Create Your Vault on Your Smartphone", null, {
						hk: "247Dqn"
					})), a.a.createElement(d.a, {
						className: b.a.closeButton,
						onClick: t
					})), a.a.createElement("div", {
						className: b.a.body
					}, a.a.createElement("section", {
						className: b.a.leftSection
					}, a.a.createElement("div", {
						className: b.a.sectionHeader
					}, h._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), a.a.createElement("div", {
						className: b.a.content
					}, a.a.createElement(u.a, {
						index: "1"
					}, h._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), a.a.createElement(u.a, {
						index: "2"
					}, h._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), a.a.createElement(u.a, {
						index: "3"
					}, h._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), a.a.createElement(u.a, {
						index: "4"
					}, h._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), a.a.createElement("section", {
						className: b.a.rightSection
					}, a.a.createElement(m.a, {
						url: Object(i.a)("http://www.reddit.com/vault/", {
							u: n
						}),
						scale: 5
					}))))
				}));
			t.b = Object(c.a)(f)
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
				a = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(a),
				o = n("./node_modules/raf/index.js"),
				c = n.n(o),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/selectors/activeModalId.ts"),
				h = n("./src/higherOrderComponents/asModal/index.tsx"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				j = n.n(x);
			var O = Object(h.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: j.a.wrapper
					}, d.a.createElement(f.a, {
						className: j.a.titleRow
					}, n), d.a.createElement("div", {
						className: j.a.detailsContainer
					}, t), d.a.createElement(f.a, {
						className: j.a.buttonRow
					}, d.a.createElement(v.i, {
						className: j.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				C = n.n(g);
			const E = Object(u.c)({
				activeModalId: b.a
			});
			class _ extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
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
						errorModalBody: a,
						errorModalTitle: r = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: c,
						textHasOverflowed: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(C.a.wrapper, n)
					}, d.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, o), t === c && d.a.createElement(O, {
						onConfirmed: this.toggleModal,
						title: r
					}, a || e))
				}
			}
			const w = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(_),
				N = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: a,
						messages: r = []
					} = e, o = r.length ? r : a ? [a] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(w, {
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
			t.b = w
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
				return b
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/controls/ErrorText/index.tsx"),
				i = n("./src/reddit/icons/svgs/Plus/index.tsx"),
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
			var p = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const b = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				v = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: o
					} = e, c = p(e, ["label", "children", "inputRef", "className"]), i = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, a.a.createElement(b, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, c)), e.label && a.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: o,
						className: c,
						redditStyle: i
					} = e, d = p(e, ["label", "children", "inputRef", "isInvalid", "className", "redditStyle"]), l = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, c, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: i
						}),
						onClick: h
					}, a.a.createElement(b, m({
						innerRef: s
					}, d)), e.label && a.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				x = e => a.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(i.a, {
					className: u.a.plus
				}));
			var j;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(j || (j = {}));
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: j.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: j.REMOVE,
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
						errors: r = []
					} = this.props;
					return e.map((e, o) => a.a.createElement(v, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!r[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(d.b, {
						className: u.a.trash
					})), !!r[o] && a.a.createElement(c.b, {
						className: u.a.errorText
					}, r[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: o,
						disabled: c
					} = this.props;
					this.focusedInput = null;
					const i = !(!!s && n.length >= s) && !c;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && i && a.a.createElement(x, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && i && a.a.createElement(x, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/lodash/get.js"),
				a = n.n(s),
				r = n("./src/config.ts"),
				o = n("./src/graphql/operations/PollVote.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
				})
			}
			const m = (e, t, n) => Object(c.a)(e, Object.assign(Object.assign({}, o), {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function p(e, t) {
				return Object(l.a)(Object(i.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						title: a()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: a()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				a = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: a.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: s
						})
					}
					return e
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: a.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js");

			function a(e, t) {
				const [n, a] = Object(s.useState)(e);
				return [n, e => {
					t.current && a(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = n.n(o);
			const i = e => a.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.09945cbc54268726a496.js.map