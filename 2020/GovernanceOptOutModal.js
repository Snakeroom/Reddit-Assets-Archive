// https://www.redditstatic.com/desktop2x/GovernanceOptOutModal.4dd8b62ec7860fd66dde.js
// Retrieved at 4/23/2020, 1:20:06 PM by Reddit Dataminer v1.0.0
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
					a = new r.BigNumber("100").multipliedBy(o);
				return new r.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "c", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var l = n("./src/reddit/endpoints/governance/poll.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/gov.ts"),
				g = n("./src/reddit/actions/governance/constants.ts"),
				j = n("./src/reddit/actions/governance/errorToast.ts");
			const v = Object(s.a)(g.b),
				x = Object(s.a)(g.c),
				h = Object(s.a)(g.d),
				k = Object(s.a)(g.e),
				y = Object(s.a)(g.f),
				_ = (Object(s.a)(g.g), Object(s.a)(g.h), Object(s.a)(g.i)),
				N = Object(s.a)(g.j),
				I = Object(s.a)(g.k),
				w = Object(s.a)(g.l),
				P = Object(s.a)(g.r),
				C = Object(s.a)(g.s),
				E = Object(s.a)(g.t),
				T = Object(s.a)(g.u),
				M = Object(s.a)(g.v),
				G = Object(s.a)(g.w),
				U = Object(s.a)(g.x),
				A = Object(s.a)(g.y),
				B = (e, t) => async (n, r, s) => {
					let o, {
							apiContext: a,
							gqlContext: c
						} = s,
						i = r().polls.models[e];
					if (n(I({
							pollId: e
						})), (o = i.type === m.a.GA ? await Object(l.c)(c(), e, t) : await Object(l.b)(a(), i.subredditId, e, t)).ok) {
						if (i.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(y({
								pollId: i.id,
								optionId: t,
								options: e
							}))
						} else n(w(o.body));
						const s = r();
						if ((i = s.polls.models[e]) && Object(m.d)(i)) {
							const {
								postId: e
							} = i, t = s.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(d.ab)(e))
						}
					} else n(N({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(j.a)(n, o.error || o.errors[0].messsage)
				}, H = (e, t) => async (n, s, d) => {
					let {
						apiContext: l
					} = d;
					n(E());
					const b = s().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(u.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(i.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(l(), Object.assign({}, e, {
						contentId: b
					}));
					m.ok ? (n(T(Object.assign({}, m.body, {
						subredditId: e.subredditId
					}))), n(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(o.a)(e.amount)), r.fbt._param("tokenName", Object(O.p)(s(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(P({
						error: m.error
					})), Object(j.a)(n, m.error))
				}, S = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(G());
					const o = await Object(b.a)(s(), e);
					o.ok ? t(U(o.body)) : t(M({
						error: o.error
					}))
				}, L = (e, t) => async (n, s, o) => {
					let {
						apiContext: a
					} = o;
					n(h());
					const d = await
					function(e, t, n) {
						return Object(u.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(i.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(a(), e, t);
					d.ok ? (n(U({
						[t]: d.body
					})), n(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: e ? r.fbt._("You have successfully opted out of receiving {tokenName}", [r.fbt._param("tokenName", Object(O.p)(s(), {
							subredditId: t
						}))], {
							hk: "2GTi3T"
						}) : r.fbt._("You have opted into receiving {tokenName}", [r.fbt._param("tokenName", Object(O.p)(s(), {
							subredditId: t
						}))], {
							hk: "2Xx98N"
						})
					}))) : Object(j.a)(n, d.error)
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
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				u = n.n(i);
			t.a = Object(o.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(d.f)()), n && n()
					}
				}
			})((function(e) {
				return s.a.createElement(c.a, {
					className: Object(a.a)(u.a.closeIcon, e.className),
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
				a = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				d = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(d);

			function i(e) {
				return s.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, s.a.createElement("div", {
					className: c.a.title
				}, e.children), s.a.createElement(a.a, null))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/selectors/gov.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/actions/governance/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/components/Governance/OptOutModal/Controls/index.m.less"),
				O = n.n(f);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var j = Object(a.b)(null, (e, t) => {
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
					return o.a.createElement("div", {
						className: Object(l.a)(O.a.container, e.className)
					}, o.a.createElement(p.f, {
						className: O.a.buttonSpacing,
						onClick: e.onOptOut
					}, g._("opt-out", null, {
						hk: "6ogtt"
					})), o.a.createElement(p.i, {
						onClick: e.onCancel
					}, g._("cancel", null, {
						hk: "3dEGge"
					})))
				})),
				v = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function x(e) {
				const {
					tokenName: t
				} = e;
				return o.a.createElement(v.a, {
					className: e.className
				}, r.fbt._("Opt-out of receiving {tokenName}", [r.fbt._param("tokenName", t)], {
					hk: "3MASBg"
				}))
			}
			var h = n("./src/reddit/components/Governance/OptOutModal/index.m.less"),
				k = n.n(h);
			const y = e => o.a.createElement("li", {
					className: k.a.bullet
				}, e),
				_ = Object(u.c)({
					language: e => e.user.language,
					subreddit: c.q,
					tokenName: (e, t) => {
						let {
							pageLayer: n
						} = t;
						const r = Object(c.q)(e, {
							pageLayer: n
						});
						return Object(i.p)(e, {
							subredditId: r ? r.id : void 0
						})
					}
				}),
				N = Object(a.b)(_),
				I = Object(c.t)();
			t.default = Object(d.a)(I(N((function(e) {
				if (!e.subreddit) return null;
				const {
					tokenName: t
				} = e;
				return o.a.createElement("div", {
					className: k.a.container
				}, o.a.createElement(x, {
					className: k.a.title,
					language: e.language,
					subredditId: e.subreddit.id,
					tokenName: e.tokenName
				}), o.a.createElement("div", {
					className: k.a.explanation
				}, r.fbt._("{tokenName} reward posters, commenters, and moderators for their contributions to the subreddit. They are distributed weekly and used to weight your vote on polls. By opting-out, you agree that:", [r.fbt._param("tokenName", t)], {
					hk: "48Snaz"
				})), o.a.createElement("ul", {
					className: k.a.list
				}, y(r.fbt._("You will no longer receive {tokenName} in {subredditName}.", [r.fbt._param("tokenName", t), r.fbt._param("subredditName", e.subreddit.name)], {
					hk: "36BpPn"
				})), y(r.fbt._("Your username will no longer appear in the Distribution Lists each week.", null, {
					hk: "3Xja6u"
				})), y(r.fbt._("You will keep the {tokenName} you already have.", [r.fbt._param("tokenName", t)], {
					hk: "EkbZE"
				}))), o.a.createElement(j, {
					className: k.a.controls,
					subredditId: e.subreddit.id
				}))
			}))))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case r.Ethereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function d(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function c(e, t, n) {
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
				return l
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/graphql/operations/PollVote.json"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				u = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function l(e, t, n, r) {
				return Object(u.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
				})
			}
			const b = (e, t, n) => Object(d.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function m(e, t) {
				return Object(u.a)(Object(c.a)(e, [i.a]), {
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
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.ab.GET
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

			function d(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.ab.POST,
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
				return l
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "k", (function() {
				return C
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				d = n("./src/reddit/selectors/postCreations.ts");
			const c = [],
				i = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = _(e, {
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
					const n = k(e, t);
					if (n) return n.mainHeader
				},
				m = (e, t) => {
					const n = k(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = k(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				O = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(d.g)(e);
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
				j = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || c
				},
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				h = (e, t) => {
					const n = w(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				k = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				y = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				_ = (e, t) => {
					const n = y(e, t);
					return n && n.walletProvider
				},
				N = (e, t) => {
					const n = _(e, t),
						r = y(e, t);
					return n && n.provider || r && r.provider
				},
				I = (e, t) => {
					const n = N(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				w = (e, t) => {
					const n = _(e, t),
						r = N(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						a = o && o.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				P = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = _(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				C = (e, t) => {
					const n = y(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceOptOutModal.4dd8b62ec7860fd66dde.js.map