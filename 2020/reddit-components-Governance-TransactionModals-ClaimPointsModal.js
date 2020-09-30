// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.e76cf9f19ffc020db94a.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ClaimPointsModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var a = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return a(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new a.BigNumber(e),
					s = new a.BigNumber(t),
					r = new a.BigNumber(n.dividedBy(s)),
					o = new a.BigNumber("100").multipliedBy(r);
				return new a.BigNumber(o).toNumber()
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
				return T
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "h", (function() {
				return D
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
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
				x = n("./src/reddit/actions/governance/constants.ts"),
				f = n("./src/reddit/actions/governance/errorToast.ts");
			const j = Object(s.a)(x.b),
				O = Object(s.a)(x.c),
				g = Object(s.a)(x.e),
				C = (Object(s.a)(x.f), Object(s.a)(x.g), Object(s.a)(x.h)),
				E = Object(s.a)(x.i),
				_ = Object(s.a)(x.j),
				w = Object(s.a)(x.k),
				N = Object(s.a)(x.q),
				T = Object(s.a)(x.r),
				M = Object(s.a)(x.s),
				y = Object(s.a)(x.t),
				I = Object(s.a)(x.u),
				k = Object(s.a)(x.v),
				S = Object(s.a)(x.w),
				P = Object(s.a)(x.x),
				A = (e, t) => async (n, a, s) => {
					let r, {
							apiContext: o,
							gqlContext: i
						} = s,
						l = a().polls.models[e];
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
						const s = a();
						if ((l = s.polls.models[e]) && Object(p.d)(l)) {
							const {
								postId: e
							} = l, t = s.posts.models[e];
							t && t.voteState === h.a.notVoted && n(Object(c.S)(e))
						}
					} else n(E({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(f.a)(n, r.error || r.errors[0].messsage)
				}, R = (e, t) => async (n, s, c) => {
					let {
						apiContext: d
					} = c;
					n(M());
					const m = s().transfers.communityPoints.contentId || void 0,
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
					p.ok ? (n(y(Object.assign(Object.assign({}, p.body), {
						subredditId: e.subredditId
					}))), n(Object(i.e)({
						kind: b.b.SuccessCommunity,
						text: a.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [a.fbt._param("amount", Object(r.a)(e.amount)), a.fbt._param("tokenName", Object(v.q)(s(), {
							subredditId: e.subredditId
						})), a.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(N({
						error: p.error
					})), Object(f.a)(n, p.error))
				}, D = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					t(k());
					const r = await Object(m.a)(s(), e);
					r.ok ? t(S(r.body)) : t(I({
						error: r.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, n) {
			"use strict";

			function a(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4,
					a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e5;
				return async (s, r, o) => new Promise((c, i) => {
					const d = Date.now() + a,
						l = () => {
							i(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > d) return l();
							const a = Date.now();
							await e(s, r, o);
							const m = await t(r);
							if (m) c();
							else if (!1 === m) i();
							else {
								Date.now() + Math.max(n - (Date.now() - a), 0) < d ? setTimeout(u, n) : l()
							}
						};
					setTimeout(u, n)
				})
			}
			n.d(t, "a", (function() {
				return a
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				c = n.n(o);

			function i(e) {
				return s.a.createElement("div", {
					className: c.a.overview
				}, e.image, s.a.createElement("div", {
					className: c.a.description
				}, s.a.createElement("div", {
					className: c.a.grid
				}, s.a.createElement("div", {
					className: c.a.descriptionTitle,
					title: e.title
				}, e.title), s.a.createElement("div", {
					className: c.a.amountCell
				}, s.a.createElement(r.a, {
					amount: e.pointsAmount,
					className: c.a.amount,
					subredditId: e.subredditId
				})), s.a.createElement("div", {
					className: c.a.descriptionSubtitle
				}, e.subtitle), s.a.createElement("div", {
					className: c.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				o = n.n(r);
			const c = e => s.a.createElement("div", {
				className: o.a.bullet
			}, s.a.createElement("div", {
				className: o.a.circle
			}, e.index), e.children)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/qrcode/lib/browser.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class d extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dataURL: null
					}
				}
				componentDidMount() {
					this.updateDataURL()
				}
				componentDidUpdate(e) {
					e.url !== this.props.url && this.updateDataURL()
				}
				async updateDataURL() {
					const e = await s.a.toDataURL(this.props.url, {
						color: {
							dark: this.props.color || Object(i.a)(this.props).button,
							light: Object(i.a)(this.props).body
						},
						margin: 0,
						width: 176
					});
					this.setState({
						dataURL: e
					})
				}
				render() {
					const {
						dataURL: e
					} = this.state;
					return e ? o.a.createElement("img", {
						src: e
					}) : null
				}
			}
			t.a = Object(c.a)(d)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "zf2hn2CERT9hR1pMinJ8F",
				header: "_3Qbr92L8VyuinXjEu3tL3Z",
				title: "_3bzQcWx2T0t87zOlgxrRKU",
				closeButton: "_22lrdZNOZAr7T7zmwmjUvJ",
				body: "_3Gcx8rw4-_lVDd-C1xmCEi",
				leftSection: "_3YqVpshpU6XQk203i6QdDy",
				sectionHeader: "_1ubUpPIvDdZW-u31PFTQzQ",
				content: "_1vBcEJHUketYOZJIkZpJEH",
				bullet: "_1NkUPpb7srAhbim5_nyFUH",
				circle: "_3dmqOAtE4YgxGinHtv6QZs",
				rightSection: "_2KqtJ5hLjiAZnv3xLL4_M6",
				qrCode: "_14NzP1hK14fTKLhwIn2aDG",
				amount: "yAJDmHckBS4VSNkr7oGi4"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				i = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(r.a)((function(e) {
				const {
					amount: t,
					content: n,
					header: a,
					onClose: r,
					qrUrl: i,
					title: l
				} = e;
				return s.a.createElement("div", {
					className: d.a.container
				}, s.a.createElement("header", {
					className: d.a.header
				}, s.a.createElement("div", {
					className: d.a.title
				}, l), s.a.createElement(o.a, {
					className: d.a.closeButton,
					onClick: r
				})), s.a.createElement("div", {
					className: d.a.body
				}, s.a.createElement("section", {
					className: d.a.leftSection
				}, s.a.createElement("div", {
					className: d.a.sectionHeader
				}, a), s.a.createElement("div", {
					className: d.a.content
				}, n)), s.a.createElement("section", {
					className: d.a.rightSection
				}, s.a.createElement("div", {
					className: d.a.qrCode
				}, s.a.createElement(c.a, {
					url: i
				})), t && s.a.createElement("div", {
					className: d.a.amount
				}, t))))
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "_3OT024bIB7-_eUL8vmIzMN"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.m.less": function(e, t, n) {
			e.exports = {
				rewardHeader: "_1G2tc9zzZoWyPlmgbfEbNd",
				rewardAmount: "_1iauUKWv86BGc1Ur7VZkL2",
				tokenIcon: "_2-m4V7jUjzyAqG3Oltl12R",
				rewardTotal: "_7M2lpeEwSt_0bvlNYJYVi"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es7.promise.finally.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				x = n("./src/reddit/endpoints/governance/crypto.ts"),
				f = n("./src/reddit/featureFlags/component.tsx"),
				j = n("./src/reddit/helpers/crypto/transactions.ts"),
				O = n("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				g = n("./src/reddit/helpers/governance/tokens.ts"),
				C = n("./src/reddit/helpers/trackers/crypto.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/economics.ts"),
				N = n("./src/reddit/selectors/gov.ts"),
				T = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				M = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				y = n("./src/reddit/components/SubredditIcon/index.tsx"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				S = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				P = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less"),
				A = n.n(P);

			function R(e) {
				const t = Object(o.d)(t => Object(w.l)(t, e)),
					n = t && t.pointsToClaim;
				if (!n) throw new Error("Expected claim amount to approve");
				const s = Object(o.d)(t => Object(I.S)(t, e)),
					c = Object(o.d)(t => Object(N.q)(t, e));
				return r.a.createElement(S.a, {
					subredditId: e.subredditId,
					image: r.a.createElement(y.b, {
						className: A.a.subredditIcon,
						subredditOrProfile: s
					}),
					title: a.fbt._("Claim {pointsName}", [a.fbt._param("pointsName", c)], {
						hk: "zLhei"
					}),
					subtitle: a.fbt._("For your contributions to {subredditName}", [a.fbt._param("subredditName", s.displayText)], {
						hk: "tFIxU"
					}),
					pointsAmount: n
				})
			}
			const D = e => r.a.createElement(k.b, {
				values: [
					[a.fbt._("Karma earned", null, {
						hk: "46NXlD"
					}), e.transaction.arguments[2]],
					[Object(k.c)(), e.transaction.arguments[1]],
					[Object(k.a)(), e.transaction.contractAddress]
				]
			});
			var G = n("./src/lib/addQueryParams/index.ts"),
				B = n("./src/lib/prettyPrintNumber/index.ts"),
				U = n("./src/reddit/components/Governance/Token/index.tsx"),
				V = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				L = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				q = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.m.less"),
				H = n.n(q);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const W = Object(c.c)({
				nextAvailablePointsClaim: w.l,
				tokenDisplayConversion: N.p,
				tokenName: N.q,
				userId: e => {
					const t = Object(V.i)(e);
					return t ? t.id : ""
				}
			});
			var Z = Object(i.a)(Object(o.b)(W)((function(e) {
				const {
					nextAvailablePointsClaim: t,
					onClose: n,
					subredditId: a,
					tokenDisplayConversion: s,
					tokenName: o,
					userId: c
				} = e;
				return r.a.createElement(F.a, {
					onClose: n,
					title: Y._("Claim Your Points", null, {
						hk: "2j1Z6u"
					}),
					header: Y._("Use mobile app to create a Reddit Vault and claim your points", null, {
						hk: "2A4Q2x"
					}),
					content: r.a.createElement(r.a.Fragment, null, r.a.createElement(L.a, {
						index: "1"
					}, Y._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), r.a.createElement(L.a, {
						index: "2"
					}, Y._("Log in to your current Reddit account", null, {
						hk: "2eOEgM"
					})), r.a.createElement(L.a, {
						index: "3"
					}, Y._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), r.a.createElement(L.a, {
						index: "4"
					}, Y._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "nnWfa"
					}))),
					qrUrl: Object(G.a)("http://www.reddit.com/vault/claim", {
						u: c,
						s: a
					}),
					amount: r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.rewardHeader
					}, Y._("Your Reward", null, {
						hk: "JniAQ"
					})), r.a.createElement("div", {
						className: H.a.rewardAmount
					}, r.a.createElement("div", null, r.a.createElement(U.a, {
						className: H.a.tokenIcon,
						subredditId: a
					})), r.a.createElement("div", {
						className: H.a.rewardTotal
					}, Object(B.a)(Object(g.b)(t && t.pointsToClaim || "0", s)), " ", o)))
				})
			})));
			t.default = Object(f.a)("spWebTransactions", Object(i.a)((function(e) {
				const {
					onClose: t,
					subredditId: n
				} = e, s = Object(o.c)(), i = Object(E.a)(), {
					currentPointsAmount: d,
					nextPointsClaim: l,
					pointsName: f,
					tokenConversion: y,
					walletProvider: I
				} = Object(o.d)(Object(c.c)({
					currentPointsAmount: t => Object(N.h)(t, e),
					nextPointsClaim: t => Object(w.l)(t, e),
					pointsName: t => Object(N.q)(t, e),
					tokenConversion: t => Object(N.p)(t, e),
					walletProvider: t => Object(N.u)(t, e)
				}));
				if (!l) throw new Error("No available claim to make");
				if (!l.address) return r.a.createElement(T.a, {
					onClose: t
				});
				if (!I) throw new Error("No wallet provider");
				const k = Object(j.a)(I.extra.contracts.distribution.address, l.round, l.address, l.userKarma, l.signature),
					S = e => {
						i(Object(C.a)("points_claim", n, P, e))
					},
					P = Object(g.b)(l.pointsToClaim, y);
				return r.a.createElement(M.a, {
					approvalOverview: r.a.createElement(R, {
						subredditId: n
					}),
					approvalDetails: r.a.createElement(D, {
						transaction: k
					}),
					onClose: t,
					onTransactionSuccess: async e => {
						t(), s(Object(h.e)(Object(h.d)(a.fbt._("Processing claim...", null, {
							hk: "46c8dF"
						}), _.b.SuccessCommunity))), s(m({
							subredditId: n
						})), async function(e, t, n, a, s) {
							await Object(O.a)(t, n), await e(Object(v.a)(Object(b.h)({
								subredditId: a
							}), async e => {
								const t = Object(N.h)(e(), {
									subredditId: a
								});
								return s !== t || null
							})), await e(Object(p.b)({
								forceFetch: !0
							}))
						}(s, I, e.hash, n, d).then(() => {
							i(Object(C.b)("points_claim", n, P)), s(function(e) {
								return Object(h.e)(Object(h.d)(a.fbt._("Your {pointsName} are ready!", [a.fbt._param("pointsName", e)], {
									hk: "2LpLml"
								}), _.b.SuccessCommunityGreen))
							}(f))
						}).catch(e => {
							S(e.toString()), s(function(e) {
								return Object(h.e)(Object(h.d)(a.fbt._("Failed to claim your {pointsName}. Try again later", [a.fbt._param("pointsName", e)], {
									hk: "ch1Bl"
								}), _.b.Error))
							}(f))
						}).finally(() => {
							s(u({
								subredditId: n
							}))
						})
					},
					onTransactionFailure: S,
					subredditId: n,
					transaction: k,
					transactionIntent: Object(x.b)(n)
				})
			})), Z)
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				u = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const p = Object(o.c)({
					userId: e => {
						const t = Object(d.i)(e);
						return t ? t.id : ""
					}
				}),
				b = Object(r.b)(p)((function(e) {
					const {
						onClose: t,
						userId: n
					} = e;
					return s.a.createElement(l.a, {
						onClose: t,
						title: m._("Create Your Vault on Your Smartphone", null, {
							hk: "247Dqn"
						}),
						header: m._("Use the mobile app to create a Vault", null, {
							hk: "4DKtAt"
						}),
						content: s.a.createElement(s.a.Fragment, null, s.a.createElement(u.a, {
							index: "1"
						}, m._("Get the official Reddit app for iOS or Android", null, {
							hk: "420pUH"
						})), s.a.createElement(u.a, {
							index: "2"
						}, m._("Log in to your Reddit account", null, {
							hk: "3G7IZ2"
						})), s.a.createElement(u.a, {
							index: "3"
						}, m._("Open your Camera, scan the QR code & follow the URL", null, {
							hk: "FWSNM"
						})), s.a.createElement(u.a, {
							index: "4"
						}, m._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
							hk: "3C5vxO"
						}))),
						qrUrl: Object(i.a)("http://www.reddit.com/vault/", {
							u: n
						})
					})
				}));
			t.b = Object(c.a)(b)
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
				return T
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
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
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				j = n.n(f);
			var O = Object(h.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: j.a.wrapper
					}, d.a.createElement(x.a, {
						className: j.a.titleRow
					}, n), d.a.createElement("div", {
						className: j.a.detailsContainer
					}, t), d.a.createElement(x.a, {
						className: j.a.buttonRow
					}, d.a.createElement(v.i, {
						className: j.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
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
						errorModalBody: s,
						errorModalTitle: r = a.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = a.fbt._("More", null, {
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
					}, s || e))
				}
			}
			const w = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(_),
				N = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: a,
						fallbackMessage: s,
						messages: r = []
					} = e, o = r.length ? r : s ? [s] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(w, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				T = e => d.a.createElement(N, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
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
				return x
			})), n.d(t, "d", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
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
						inputRef: a,
						className: o
					} = e, c = p(e, ["label", "children", "inputRef", "className"]), i = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, s.a.createElement(b, m({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, c)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						isInvalid: o,
						className: c,
						redditStyle: i
					} = e, d = p(e, ["label", "children", "inputRef", "isInvalid", "className", "redditStyle"]), l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, c, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: i
						}),
						onClick: h
					}, s.a.createElement(b, m({
						innerRef: a
					}, d)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				f = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(i.a, {
					className: u.a.plus
				}));
			var j;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(j || (j = {}));
			class O extends s.a.Component {
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
						placeholder: a,
						errors: r = []
					} = this.props;
					return e.map((e, o) => s.a.createElement(v, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!r[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, s.a.createElement(d.b, {
						className: u.a.trash
					})), !!r[o] && s.a.createElement(c.b, {
						className: u.a.errorText
					}, r[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: a,
						addValueText: o,
						disabled: c
					} = this.props;
					this.focusedInput = null;
					const i = !(!!a && n.length >= a) && !c;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && i && s.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && i && s.a.createElement(f, {
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
			var a = n("./node_modules/lodash/get.js"),
				s = n.n(a),
				r = n("./src/config.ts"),
				o = n("./src/graphql/operations/PollVote.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, a) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(a)
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
						title: s()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: s()(e.body, ["data", "children", 0, "data", "permalink"], "")
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
			var a = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(a.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							a = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: a
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
					endpoint: "".concat(a.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.db.POST,
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
				return s
			}));
			var a = n("./node_modules/react/index.js");

			function s(e, t) {
				const [n, s] = Object(a.useState)(e);
				return [n, e => {
					t.current && s(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = n.n(o);
			const i = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.e76cf9f19ffc020db94a.js.map