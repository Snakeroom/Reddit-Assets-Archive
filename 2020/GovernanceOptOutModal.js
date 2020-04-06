// https://www.redditstatic.com/desktop2x/GovernanceOptOutModal.2982134d05712d6356a1.js
// Retrieved at 4/6/2020, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceOptOutModal"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t),
					o = new r.BigNumber(n.dividedBy(s)),
					c = new r.BigNumber("100").multipliedBy(o);
				return new r.BigNumber(c).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "c", (function() {
				return L
			}));
			var r = n("./src/app/strings/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			var u = n("./src/reddit/endpoints/governance/poll.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/gov.ts"),
				g = n("./src/reddit/actions/governance/constants.ts"),
				x = n("./src/reddit/actions/governance/errorToast.ts");
			const j = Object(s.a)(g.b),
				v = Object(s.a)(g.c),
				y = Object(s.a)(g.d),
				I = Object(s.a)(g.e),
				N = Object(s.a)(g.f),
				h = (Object(s.a)(g.g), Object(s.a)(g.h), Object(s.a)(g.i)),
				k = Object(s.a)(g.j),
				w = Object(s.a)(g.k),
				_ = Object(s.a)(g.l),
				C = Object(s.a)(g.r),
				P = Object(s.a)(g.s),
				E = Object(s.a)(g.t),
				M = Object(s.a)(g.u),
				T = Object(s.a)(g.v),
				U = Object(s.a)(g.w),
				G = Object(s.a)(g.x),
				B = Object(s.a)(g.y),
				H = (e, t) => async (n, r, s) => {
					let o, {
							apiContext: c,
							gqlContext: d
						} = s,
						i = r().polls.models[e];
					if (n(w({
							pollId: e
						})), (o = i.type === m.a.GA ? await Object(u.c)(d(), e, t) : await Object(u.b)(c(), i.subredditId, e, t)).ok) {
						if (i.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(N({
								pollId: i.id,
								optionId: t,
								options: e
							}))
						} else n(_(o.body));
						const s = r();
						if ((i = s.polls.models[e]) && Object(m.d)(i)) {
							const {
								postId: e
							} = i, t = s.posts.models[e];
							t && t.voteState === O.a.notVoted && n(Object(a.ab)(e))
						}
					} else n(k({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(x.a)(n, o.error || o.errors[0].messsage)
				}, A = (e, t) => async (n, s, a) => {
					let {
						apiContext: u
					} = a;
					n(E());
					const b = s().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(i.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: b
					}));
					if (m.ok) {
						const a = s().user.language;
						n(M(Object.assign({}, m.body, {
							subredditId: e.subredditId
						}))), n(Object(d.e)({
							kind: p.b.SuccessCommunity,
							text: Object(r.a)(a, "gov.transferSuccess", {
								amount: Object(o.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(f.p)(s(), {
									subredditId: e.subredditId
								})
							})
						})), t && n(Object(c.f)())
					} else n(C({
						error: m.error
					})), Object(x.a)(n, m.error)
				}, S = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(U());
					const o = await Object(b.a)(s(), e);
					o.ok ? t(G(o.body)) : t(T({
						error: o.error
					}))
				}, L = (e, t) => async (n, s, o) => {
					let {
						apiContext: c
					} = o;
					n(y());
					const a = await
					function(e, t, n) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(i.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(c(), e, t);
					if (a.ok) {
						n(G({
							[t]: a.body
						}));
						const o = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						n(Object(d.e)({
							kind: p.b.SuccessCommunity,
							text: Object(r.a)(s().user.language, o, {
								tokenName: Object(f.p)(s(), {
									subredditId: t
								})
							})
						}))
					} else Object(x.a)(n, a.error)
				}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(i);
			t.a = Object(o.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(a.f)()), n && n()
					}
				}
			})((function(e) {
				return s.a.createElement(d.a, {
					className: Object(c.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				a = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(a);

			function i(e) {
				return s.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className)
				}, s.a.createElement("div", {
					className: d.a.title
				}, e.children), s.a.createElement(c.a, null))
			}
		},
		"./src/reddit/components/Governance/OptOutModal/Controls/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Py8-R5_Ch5dmMVZhhkBvH",
				buttonSpacing: "_1DZgxN00_kCiZhzMTySdod"
			}
		},
		"./src/reddit/components/Governance/OptOutModal/index.m.less": function(e, t, n) {
			e.exports = {
				addendum: "_2PxEMQooPHbLQ_OeFrrsAt",
				bullet: "r5k3MU5mOBmW__MuSDOAT",
				container: "_2RbrmsiBs085ABb7VKY8cl",
				controls: "rz80pUKU6RLvMAHtHITpP",
				explanation: "_275CHpIR4XYT0ncEiswr3X",
				link: "_1jCUZnhm2H0hvzGvkL0LhU",
				list: "mIWTRR4CHFrHObf31pZUW",
				title: "_1_TfP9mwMMMXkjz0yiyPAD"
			}
		},
		"./src/reddit/components/Governance/OptOutModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/app/strings/index.ts"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/actions/governance/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/i18n/components.tsx"),
				f = n("./src/reddit/components/Governance/OptOutModal/Controls/index.m.less"),
				g = n.n(f);
			var x = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						onCancel: () => e(Object(m.f)()),
						onOptOut: async () => {
							await e(Object(b.c)(!0, n)), e(Object(m.f)())
						}
					}
				})((function(e) {
					return s.a.createElement("div", {
						className: Object(u.a)(g.a.container, e.className)
					}, s.a.createElement(p.f, {
						className: g.a.buttonSpacing,
						onClick: e.onOptOut
					}, s.a.createElement(O.c, null, "opt-out")), s.a.createElement(p.i, {
						onClick: e.onCancel
					}, s.a.createElement(O.c, null, "cancel")))
				})),
				j = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function v(e) {
				const {
					tokenName: t
				} = e;
				return s.a.createElement(j.a, {
					className: e.className
				}, Object(a.a)(e.language, "polls.optOutModalTitle", {
					tokenName: t
				}))
			}
			var y = n("./src/reddit/components/Governance/OptOutModal/index.m.less"),
				I = n.n(y);
			const N = e => s.a.createElement("li", {
					className: I.a.bullet
				}, e),
				h = Object(c.c)({
					language: e => e.user.language,
					subreddit: i.q,
					tokenName: (e, t) => {
						let {
							pageLayer: n
						} = t;
						const r = Object(i.q)(e, {
							pageLayer: n
						});
						return Object(l.p)(e, {
							subredditId: r ? r.id : void 0
						})
					}
				}),
				k = Object(o.b)(h),
				w = Object(i.t)();
			t.default = Object(d.a)(w(k((function(e) {
				if (!e.subreddit) return null;
				const {
					tokenName: t
				} = e;
				return s.a.createElement("div", {
					className: I.a.container
				}, s.a.createElement(v, {
					className: I.a.title,
					language: e.language,
					subredditId: e.subreddit.id,
					tokenName: e.tokenName
				}), s.a.createElement("div", {
					className: I.a.explanation
				}, Object(a.a)(e.language, "polls.optOutExplanation", {
					tokenName: t
				})), s.a.createElement("ul", {
					className: I.a.list
				}, N(Object(a.a)(e.language, "polls.optOutBullet1", {
					tokenName: t,
					subredditName: e.subreddit.displayText
				})), N(Object(a.a)(e.language, "polls.optOutBullet2")), N(Object(a.a)(e.language, "polls.optOutBullet3", {
					tokenName: t
				}))), s.a.createElement(x, {
					className: I.a.controls,
					subredditId: e.subreddit.id
				}))
			}))))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return i
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
				switch (e) {
					case r.Ethereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function a(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function d(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function i(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(r || (r = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				c = n("./src/graphql/operations/PollVote.json"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, r) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
				})
			}
			const b = (e, t, n) => Object(a.a)(e, Object.assign({}, c, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function m(e, t) {
				return Object(l.a)(Object(d.a)(e, [i.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
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
				return c
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.bb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return Object.assign({}, e, {
							body: r
						})
					}
					return e
				})
			}

			function a(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.bb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "k", (function() {
				return P
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				c = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				a = n("./src/reddit/selectors/postCreations.ts");
			const d = [],
				i = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = h(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				b = (e, t) => {
					const n = I(e, t);
					if (n) return n.mainHeader
				},
				m = (e, t) => {
					const n = I(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = I(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				O = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					if (Object(c.a)(e)) {
						const t = Object(a.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const n = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return n && !e
					}
					return n
				},
				g = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				x = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || d
				},
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				y = (e, t) => {
					const n = _(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				I = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				N = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				h = (e, t) => {
					const n = N(e, t);
					return n && n.walletProvider
				},
				k = (e, t) => {
					const n = h(e, t),
						r = N(e, t);
					return n && n.provider || r && r.provider
				},
				w = (e, t) => {
					const n = k(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				_ = (e, t) => {
					const n = h(e, t),
						r = k(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						c = o && o.unlocked;
					return c && {
						address: c.address,
						symbol: c.token || "",
						decimals: c.decimals || 18,
						image: c.image
					}
				},
				C = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = h(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const n = N(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceOptOutModal.2982134d05712d6356a1.js.map