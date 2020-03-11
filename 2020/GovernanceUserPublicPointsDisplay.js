// https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.6d6aa5ca7835cb34a405.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
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
					c = new r.BigNumber("100").multipliedBy(o);
				return new r.BigNumber(c).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/app/strings/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
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
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "j", (function() {
				return H
			})), n.d(t, "c", (function() {
				return q
			}));
			const x = Object(s.a)(j.b),
				v = Object(s.a)(j.c),
				y = Object(s.a)(j.d),
				I = Object(s.a)(j.e),
				h = Object(s.a)(j.f),
				w = (Object(s.a)(j.g), Object(s.a)(j.h), Object(s.a)(j.i)),
				k = Object(s.a)(j.j),
				P = Object(s.a)(j.k),
				N = Object(s.a)(j.l),
				_ = Object(s.a)(j.r),
				T = Object(s.a)(j.s),
				E = Object(s.a)(j.t),
				S = Object(s.a)(j.u),
				U = Object(s.a)(j.v),
				G = Object(s.a)(j.w),
				C = Object(s.a)(j.x),
				B = Object(s.a)(j.y),
				A = (e, t) => async (n, r, s) => {
					let o, {
							apiContext: c,
							gqlContext: i
						} = s,
						a = r().polls.models[e];
					if (n(P({
							pollId: e
						})), (o = a.type === m.a.GA ? await Object(l.c)(i(), e, t) : await Object(l.b)(c(), a.subredditId, e, t)).ok) {
						if (a.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(h({
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
							t && t.voteState === f.a.notVoted && n(Object(d.X)(e))
						}
					} else n(k({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(O.a)(n, o.error || o.errors[0].messsage)
				}, D = (e, t) => async (n, s, d) => {
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
							endpoint: "".concat(a.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(l(), Object.assign({}, e, {
						contentId: b
					}));
					if (m.ok) {
						const d = s().user.language;
						n(S(Object.assign({}, m.body, {
							subredditId: e.subredditId
						}))), n(Object(i.e)({
							kind: p.b.SuccessCommunity,
							text: Object(r.a)(d, "gov.transferSuccess", {
								amount: Object(o.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.p)(s(), {
									subredditId: e.subredditId
								})
							})
						})), t && n(Object(c.f)())
					} else n(_({
						error: m.error
					})), Object(O.a)(n, m.error)
				}, H = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(G());
					const o = await Object(b.a)(s(), e);
					o.ok ? t(C(o.body)) : t(U({
						error: o.error
					}))
				}, q = (e, t) => async (n, s, o) => {
					let {
						apiContext: c
					} = o;
					n(y());
					const d = await
					function(e, t, n) {
						return Object(u.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(a.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(c(), e, t);
					if (d.ok) {
						n(C({
							[t]: d.body
						}));
						const o = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						n(Object(i.e)({
							kind: p.b.SuccessCommunity,
							text: Object(r.a)(s().user.language, o, {
								tokenName: Object(g.p)(s(), {
									subredditId: t
								})
							})
						}))
					} else Object(O.a)(n, d.error)
				}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				i = n("./src/reddit/selectors/gov.ts");
			const a = Object(c.c)({
				tokenSymbol: i.q
			});
			t.a = Object(o.b)(a)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(d.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				token: "_3nQr7AT1U0w1HdVk-xepUB",
				tokenGrey: "pvn75ouWnsoKK4l_QS9yI",
				tokenFilled: "_3d-Rpbq-Qb88tf5D_s1rsj",
				amount: "_3nhTfmUMmYib8x61No0h3r",
				container: "_15KjTxLhBmrJE79nlBUuxb",
				tippable: "_2pUuGtsqXDTCxGGGGr-NXT"
			}
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/app/strings/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/governance/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				b = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				j = n("./src/reddit/selectors/gov.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),
				v = n.n(x);
			const y = Object(c.c)({
				language: O.O,
				publicWallet: j.i,
				tippingEnabled: m.d.spTipping,
				tokenDisplayConversion: j.o,
				tokenName: j.p,
				useCrypto: j.k,
				userOptedOut: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(g.D)(e, n)
				}
			});
			t.default = Object(p.a)("spPublicPoints", Object(o.b)(y, e => ({
				onHideTooltip: () => e(Object(u.i)()),
				onShowTooltip: t => e(Object(u.f)({
					tooltipId: t
				})),
				onTip: (t, n, r) => e(Object(a.h)({
					recipient: t,
					contentId: n,
					publicAddress: r
				}))
			}))((function(e) {
				if (e.userOptedOut) return null;
				const {
					contentId: t,
					publicWallet: n,
					subredditId: r,
					tippingEnabled: o,
					tokenDisplayConversion: c,
					useCrypto: a,
					username: u
				} = e, m = n && n.amount || void 0;
				if (!m) return null;
				const p = "public-wallets-".concat(u, "-").concat(r, "-").concat(t),
					g = n && n.publicAddress;
				return a && !g ? null : s.a.createElement("div", {
					className: Object(i.a)(e.className, v.a.container, {
						[v.a.tippable]: o
					}),
					id: p,
					onClick: t => {
						o && (t.stopPropagation(), e.onTip(e.username, e.contentId, g))
					},
					onMouseEnter: () => e.onShowTooltip(p),
					onMouseLeave: () => e.onHideTooltip()
				}, s.a.createElement(l.a, {
					className: v.a.tokenFilled,
					subredditId: e.subredditId
				}), s.a.createElement(l.a, {
					grey: !0,
					className: v.a.tokenGrey,
					subredditId: e.subredditId
				}), s.a.createElement("span", {
					className: v.a.amount
				}, Object(f.c)(m, c)), o && s.a.createElement(b.c, {
					caretOnTop: !0,
					tooltipId: p,
					text: Object(d.a)(e.language, "gov.tipText", {
						tokenName: e.tokenName,
						username: e.username
					})
				}))
			})))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
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
				c = n("./src/graphql/operations/PollVote.json"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				u = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function l(e, t, n, r) {
				return Object(u.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
				})
			}
			const b = (e, t, n) => Object(d.a)(e, Object.assign({}, c, {
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
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.cb.GET
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
					method: s.cb.POST,
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
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/featureFlags/index.ts"),
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
				const r = Object(c.c)({
					featureEnabled: t => d.d[e](t)
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
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.dividedBy(s).decimalPlaces(2).toString()
			}

			function c(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function d(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const d = new Set(["pollstest", "whatssnoo"]),
				i = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				a = e => d.has((Object(o.e)(e) || "").toLowerCase()) || i.has((Object(o.e)(e) || "").toLowerCase()) && Object(s.c)(e, {
					experimentEligibilitySelector: c.G,
					experimentName: r.ab
				}) === r.hb.Enabled
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
				return v
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "k", (function() {
				return T
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				c = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				d = n("./src/reddit/selectors/postCreations.ts");
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
					const r = w(e, {
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
					} : a
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(c.a)(e)) {
						const t = Object(d.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
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
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				y = (e, t) => {
					const n = N(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				I = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				h = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				w = (e, t) => {
					const n = h(e, t);
					return n && n.walletProvider
				},
				k = (e, t) => {
					const n = w(e, t),
						r = h(e, t);
					return n && n.provider || r && r.provider
				},
				P = (e, t) => {
					const n = k(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				N = (e, t) => {
					const n = w(e, t),
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
				_ = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = w(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				T = (e, t) => {
					const n = h(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.6d6aa5ca7835cb34a405.js.map