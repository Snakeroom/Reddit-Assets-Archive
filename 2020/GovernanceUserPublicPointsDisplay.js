// https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.5cc91befe9b5388a38a4.js
// Retrieved at 1/17/2020, 9:30:20 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceUserPublicPointsDisplay"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
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
				p = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
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
				return k
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "j", (function() {
				return q
			})), n.d(t, "c", (function() {
				return B
			}));
			const x = Object(s.a)(j.b),
				v = Object(s.a)(j.c),
				y = Object(s.a)(j.d),
				I = Object(s.a)(j.e),
				h = Object(s.a)(j.f),
				k = (Object(s.a)(j.g), Object(s.a)(j.h), Object(s.a)(j.i)),
				w = Object(s.a)(j.j),
				P = Object(s.a)(j.k),
				_ = Object(s.a)(j.l),
				N = Object(s.a)(j.r),
				E = Object(s.a)(j.s),
				S = Object(s.a)(j.t),
				T = Object(s.a)(j.u),
				C = Object(s.a)(j.v),
				U = Object(s.a)(j.w),
				G = Object(s.a)(j.x),
				A = Object(s.a)(j.y),
				D = (e, t) => async (n, r, s) => {
					let o, {
							apiContext: c,
							gqlContext: i
						} = s,
						a = r().polls.models[e];
					if (n(P({
							pollId: e
						})), (o = a.type === p.a.GA ? await Object(l.c)(i(), e, t) : await Object(l.b)(c(), a.subredditId, e, t)).ok) {
						if (a.type === p.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(h({
								pollId: a.id,
								optionId: t,
								options: e
							}))
						} else n(_(o.body));
						const s = r();
						if ((a = s.polls.models[e]) && Object(p.d)(a)) {
							const {
								postId: e
							} = a, t = s.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(d.N)(e))
						}
					} else n(w({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(O.a)(n, o.error || o.errors[0].messsage)
				}, H = (e, t) => async (n, s, d) => {
					let {
						apiContext: l
					} = d;
					n(S());
					const b = s().transfers.communityPoints.contentId || void 0,
						p = await
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
					if (p.ok) {
						const d = s().user.language;
						n(T(Object.assign({}, p.body, {
							subredditId: e.subredditId
						}))), n(Object(i.e)({
							kind: m.b.SuccessCommunity,
							text: Object(r.a)(d, "gov.transferSuccess", {
								amount: Object(o.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(s(), {
									subredditId: e.subredditId
								})
							})
						})), t && n(Object(c.f)())
					} else n(N({
						error: p.error
					})), Object(O.a)(n, p.error)
				}, q = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(U());
					const o = await Object(b.a)(s(), e);
					o.ok ? t(G(o.body)) : t(C({
						error: o.error
					}))
				}, B = (e, t) => async (n, s, o) => {
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
						n(G({
							[t]: d.body
						}));
						const o = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						n(Object(i.e)({
							kind: m.b.SuccessCommunity,
							text: Object(r.a)(s().user.language, o, {
								tokenName: Object(g.o)(s(), {
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
				tokenSymbol: i.p
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
				p = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/featureFlags/component.tsx"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				j = n("./src/reddit/selectors/gov.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),
				v = n.n(x);
			const y = Object(c.c)({
				language: O.S,
				publicWallet: j.i,
				tippingEnabled: p.d.spTipping,
				tokenDisplayConversion: j.n,
				tokenName: j.o,
				useCrypto: j.r,
				userOptedOut: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(g.A)(e, n)
				}
			});
			t.default = Object(m.a)("spPublicPoints", Object(o.b)(y, e => ({
				onHideTooltip: () => e(Object(u.h)()),
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
				} = e, p = n && n.amount || void 0;
				if (!p) return null;
				const m = "public-wallets-".concat(u, "-").concat(r, "-").concat(t),
					g = n && n.publicAddress;
				return a && !g ? null : s.a.createElement("div", {
					className: Object(i.a)(e.className, v.a.container, {
						[v.a.tippable]: o
					}),
					id: m,
					onClick: t => {
						o && (t.stopPropagation(), e.onTip(e.username, e.contentId, g))
					},
					onMouseEnter: () => e.onShowTooltip(m),
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
				}, Object(f.c)(p, c)), o && s.a.createElement(b.c, {
					caretOnTop: !0,
					tooltipId: m,
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
				return p
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

			function p(e, t) {
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
						featureEnabled: r,
						dispatch: o
					} = e, c = i(e, ["featureEnabled", "dispatch"]);
					return r ? s.a.createElement(t, c) : void 0 !== n ? s.a.createElement(n, c) : null
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
				i = new Set([""]),
				a = e => d.has((Object(o.e)(e) || "").toLowerCase()) || i.has((Object(o.e)(e) || "").toLowerCase()) && Object(s.c)(e, {
					experimentEligibilitySelector: c.J,
					experimentName: r.cb
				}) === r.jb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "r", (function() {
				return N
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				c = n("./src/reddit/selectors/experiments/pollsGA.ts");
			const d = [],
				i = {},
				a = {
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
				l = (e, t) => {
					const n = y(e, t);
					if (n) return n.mainHeader
				},
				b = (e, t) => {
					const n = y(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = y(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					if (Object(c.a)(e)) return !0;
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
					return n && e.subreddits.gov.releaseNotes[n] || d
				},
				O = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				v = (e, t) => {
					const n = P(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				I = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				h = (e, t) => {
					const n = I(e, t);
					return n && n.walletProvider
				},
				k = (e, t) => {
					const n = h(e, t),
						r = I(e, t);
					return n && n.provider || r && r.provider
				},
				w = (e, t) => {
					const n = k(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				P = (e, t) => {
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
				_ = (e, t) => {
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
				N = (e, t) => {
					const n = I(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.5cc91befe9b5388a38a4.js.map