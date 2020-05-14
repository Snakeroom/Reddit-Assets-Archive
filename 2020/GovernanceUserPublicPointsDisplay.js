// https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.b33969c38ca8903bc595.js
// Retrieved at 5/14/2020, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceUserPublicPointsDisplay"], {
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
					d = new r.BigNumber("100").multipliedBy(o);
				return new r.BigNumber(d).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "j", (function() {
				return q
			})), n.d(t, "c", (function() {
				return D
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var l = n("./src/reddit/endpoints/governance/poll.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				j = n("./src/reddit/actions/governance/constants.ts"),
				O = n("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(s.a)(j.b),
				y = Object(s.a)(j.c),
				v = Object(s.a)(j.d),
				h = Object(s.a)(j.e),
				k = Object(s.a)(j.f),
				I = (Object(s.a)(j.g), Object(s.a)(j.h), Object(s.a)(j.i)),
				_ = Object(s.a)(j.j),
				w = Object(s.a)(j.k),
				N = Object(s.a)(j.l),
				P = Object(s.a)(j.r),
				T = Object(s.a)(j.s),
				E = Object(s.a)(j.t),
				U = Object(s.a)(j.u),
				G = Object(s.a)(j.v),
				S = Object(s.a)(j.w),
				B = Object(s.a)(j.x),
				C = Object(s.a)(j.y),
				A = (e, t) => async (n, r, s) => {
					let o, {
							apiContext: d,
							gqlContext: i
						} = s,
						a = r().polls.models[e];
					if (n(w({
							pollId: e
						})), (o = a.type === m.a.GA ? await Object(l.c)(i(), e, t) : await Object(l.b)(d(), a.subredditId, e, t)).ok) {
						if (a.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(k({
								pollId: a.id,
								optionId: t,
								options: e
							}))
						} else n(N(o.body));
						const s = r();
						if ((a = s.polls.models[e]) && Object(m.d)(a)) {
							const {
								postId: e
							} = a, t = s.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(c.cb)(e))
						}
					} else n(_({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(O.a)(n, o.error || o.errors[0].messsage)
				}, H = (e, t) => async (n, s, c) => {
					let {
						apiContext: l
					} = c;
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
							endpoint: "".concat(a.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(l(), Object.assign({}, e, {
						contentId: b
					}));
					m.ok ? (n(U(Object.assign({}, m.body, {
						subredditId: e.subredditId
					}))), n(Object(i.e)({
						kind: p.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(o.a)(e.amount)), r.fbt._param("tokenName", Object(g.p)(s(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(d.f)())) : (n(P({
						error: m.error
					})), Object(O.a)(n, m.error))
				}, q = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(S());
					const o = await Object(b.a)(s(), e);
					o.ok ? t(B(o.body)) : t(G({
						error: o.error
					}))
				}, D = (e, t) => async (n, s, o) => {
					let {
						apiContext: d
					} = o;
					n(v());
					const c = await
					function(e, t, n) {
						return Object(u.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(a.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(d(), e, t);
					c.ok ? (n(B({
						[t]: c.body
					})), n(Object(i.e)({
						kind: p.b.SuccessCommunity,
						text: e ? r.fbt._("You have successfully opted out of receiving {tokenName}", [r.fbt._param("tokenName", Object(g.p)(s(), {
							subredditId: t
						}))], {
							hk: "2GTi3T"
						}) : r.fbt._("You have opted into receiving {tokenName}", [r.fbt._param("tokenName", Object(g.p)(s(), {
							subredditId: t
						}))], {
							hk: "2Xx98N"
						})
					}))) : Object(O.a)(n, c.error)
				}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/reddit/components/Governance/Token/index.m.less"),
				l = n.n(u);
			const b = Object(d.c)({
				tokenSymbol: a.q
			});
			t.a = Object(o.b)(b)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(c.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return s.a.createElement("div", {
						className: Object(i.a)(l.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: n
				})
			}))
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				token: "_3nQr7AT1U0w1HdVk-xepUB",
				tokenFilled: "_3d-Rpbq-Qb88tf5D_s1rsj",
				tokenGrey: "pvn75ouWnsoKK4l_QS9yI",
				amount: "_3nhTfmUMmYib8x61No0h3r",
				container: "_15KjTxLhBmrJE79nlBUuxb",
				tippable: "_2pUuGtsqXDTCxGGGGr-NXT"
			}
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/governance/index.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/featureFlags/component.tsx"),
				p = n("./src/reddit/helpers/governance/tokens.ts"),
				f = n("./src/reddit/selectors/economics.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				O = n("./node_modules/reselect/es/index.js"),
				x = n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),
				y = n.n(x);
			const v = Object(O.c)({
				language: j.P,
				publicWallet: g.i,
				tippingEnabled: b.d.spTipping,
				tokenDisplayConversion: g.o,
				tokenName: g.p,
				useCrypto: g.k,
				userOptedOut: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(f.G)(e, n)
				}
			});
			t.default = Object(m.a)("spPublicPoints", Object(d.b)(v, e => ({
				onHideTooltip: () => e(Object(a.i)()),
				onShowTooltip: t => e(Object(a.f)({
					tooltipId: t
				})),
				onTip: (t, n, r) => e(Object(i.h)({
					recipient: t,
					contentId: n,
					publicAddress: r
				}))
			}))((function(e) {
				if (e.userOptedOut) return null;
				const {
					contentId: t,
					metaSeparator: n,
					publicWallet: s,
					subredditId: d,
					tippingEnabled: i,
					tokenDisplayConversion: a,
					tokenName: b,
					useCrypto: m,
					username: f
				} = e, g = s && s.amount || void 0;
				if (!g) return null;
				const j = "public-wallets-".concat(f, "-").concat(d, "-").concat(t),
					O = s && s.publicAddress;
				if (m && !O) return null;
				const x = Object(p.c)(g, a);
				return o.a.createElement("div", {
					className: Object(c.a)(e.className, y.a.container, {
						[y.a.tippable]: i
					}),
					id: j,
					onClick: t => {
						i && (t.stopPropagation(), e.onTip(e.username, e.contentId, O))
					},
					onMouseEnter: () => e.onShowTooltip(j),
					onMouseLeave: () => e.onHideTooltip(),
					title: i ? "" : r.fbt._("{username} has {amount} {token name}", [r.fbt._param("username", e.username), r.fbt._param("amount", x), r.fbt._param("token name", b)], {
						hk: "6WL3V"
					})
				}, o.a.createElement(u.a, {
					className: y.a.tokenFilled,
					subredditId: e.subredditId
				}), o.a.createElement(u.a, {
					grey: !0,
					className: y.a.tokenGrey,
					subredditId: e.subredditId
				}), o.a.createElement("span", {
					className: y.a.amount
				}, x), n, i && o.a.createElement(l.c, {
					caretOnTop: !0,
					tooltipId: j,
					text: r.fbt._("Tip {username} with {tokenname}", [r.fbt._param("username", e.username), r.fbt._param("tokenname", b)], {
						hk: "2Raj4F"
					})
				}))
			})))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function c(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function i(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function a(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
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
				d = n("./src/graphql/operations/PollVote.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				u = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function l(e, t, n, r) {
				return Object(u.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
				})
			}
			const b = (e, t, n) => Object(c.a)(e, Object.assign({}, d, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function m(e, t) {
				return Object(u.a)(Object(i.a)(e, [a.a]), {
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
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
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

			function c(e, t) {
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
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};

			function a(e, t, n) {
				const r = Object(d.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r
					} = e, o = i(e, ["featureEnabled"]);
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.dividedBy(s).decimalPlaces(2).toString()
			}

			function d(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function c(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
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
				return g
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "k", (function() {
				return T
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				d = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = n("./src/reddit/selectors/postCreations.ts");
			const i = [],
				a = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = I(e, {
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
					const n = h(e, t);
					if (n) return n.mainHeader
				},
				m = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(c.g)(e);
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
				j = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				O = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || i
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				v = (e, t) => {
					const n = N(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				k = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				I = (e, t) => {
					const n = k(e, t);
					return n && n.walletProvider
				},
				_ = (e, t) => {
					const n = I(e, t),
						r = k(e, t);
					return n && n.provider || r && r.provider
				},
				w = (e, t) => {
					const n = _(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				N = (e, t) => {
					const n = I(e, t),
						r = _(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						d = o && o.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				P = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = I(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				T = (e, t) => {
					const n = k(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.b33969c38ca8903bc595.js.map