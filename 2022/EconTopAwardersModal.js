// https://www.redditstatic.com/desktop2x/EconTopAwardersModal.fb074bedf295e7d468bd.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconTopAwardersModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var a = r("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const r = Object(a.a)(e),
					n = parseInt(r) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function a(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return a
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var a, n = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(a || (a = {}));
			const s = "USD",
				o = "ETH",
				c = "COINS",
				i = [o, "BTC"],
				d = [c, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => n.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => n.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => n.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var a = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = r("./src/lib/currency/centsToDollars/index.ts"),
				s = r("./src/lib/currency/currencies.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = a.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: n
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const s = Number(e);
					return Object(i.c)() ? r ? Object(o.b)(s) : new Intl.NumberFormat(t, n).format(s) : m(s, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = a.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : s.c),
						type: v = t.type || (t.currency ? u(t.currency) : s.b.Real)
					} = t, x = Number(e), h = String(e);
					switch (v) {
						case s.b.Reddit: {
							const e = s.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(x) + " " + t : m(x, o, r, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(c.d)(h, l) + " " + b
							}
							const e = Number(Object(c.c)(h, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : m(e, o, r, b)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(n.a)(h, f));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...d
							}).format(e) : m(e, o, r, b)
						}
					}
				},
				m = (e, t, r, a) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(r)) + (a ? " " + a : "")
				},
				u = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
				p = e => {
					switch (e) {
						case s.b.Crypto:
							return s.d;
						case s.b.Reddit:
							return s.a;
						case s.b.Real:
						default:
							return s.c
					}
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return ae
			})), r.d(t, "b", (function() {
				return oe
			})), r.d(t, "e", (function() {
				return ce
			})), r.d(t, "a", (function() {
				return ie
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/get.js"),
				s = r.n(n),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/apiRequestState.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/constants/modals.ts"),
				u = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts"),
				v = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = (e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
				endpoint: Object(v.a)(Object(x.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.mb.GET,
				data: r
			});
			var I = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				g = r("./src/reddit/models/SubredditModeration/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				N = r("./src/reddit/selectors/activeModalId.ts"),
				E = r("./src/reddit/selectors/bannedUser.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/subredditModeration/constants.ts"),
				y = r("./src/lib/initializeClient/installReducer.ts"),
				C = r("./node_modules/redux/es/redux.js");
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.s:
					case j.r:
						return null;
					case j.q:
						return t.payload;
					default:
						return e
				}
			};
			const U = {};
			var k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.s: {
							const {
								subredditId: r,
								fetchedToken: a
							} = t.payload, n = Object(g.e)(r, a);
							return {
								...e,
								[n]: !0
							}
						}
						case j.r:
						case j.q: {
							const {
								subredditId: r,
								fetchedToken: a
							} = t.payload, n = Object(g.e)(r, a);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				A = Object(C.c)({
					error: P,
					pending: k
				});
			const S = {};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								fetchedToken: r,
								subredditId: a
							} = t.payload, n = Object(g.e)(a, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				M = r("./src/reddit/actions/inContextModeration.ts");
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.a:
						return t.payload;
					default:
						return e
				}
			};
			const F = {};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				L = r("./node_modules/icepick/icepick.js");
			const R = {};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.p:
					case j.r: {
						const {
							subredditId: r,
							bannedUsers: a
						} = t.payload;
						return Object(L.merge)(e, {
							[r]: a
						})
					}
					case j.w: {
						const {
							subredditId: r,
							userId: a
						} = t.payload;
						return Object(L.unsetIn)(e, [r, a])
					}
					default:
						return e
				}
			};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.v:
					case j.u:
						return null;
					case j.t:
						return t.payload;
					default:
						return e
				}
			};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.v:
							return !0;
						case j.u:
						case j.t:
							return !1;
						default:
							return e
					}
				},
				G = Object(C.c)({
					error: W,
					pending: z
				});
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.v:
						case j.t:
							return null;
						case j.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				q = Object(C.c)({
					api: G,
					result: K
				});
			const Q = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								subredditId: r,
								bannedUserIds: a
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...a]
							} : {
								...e,
								[r]: a
							}
						}
						case j.w: {
							const {
								subredditId: r,
								userId: a
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== a)
							}
						}
						case j.p: {
							const {
								subredditId: r,
								bannedUserIds: a
							} = t.payload, n = a[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				X = Object(C.c)({
					api: A,
					fetchedTokens: B,
					inContext: T,
					loadMore: H,
					models: D,
					search: q,
					userOrder: Z
				});
			Object(y.a)({
				features: {
					banned: X
				}
			});
			const Y = Object(o.a)(j.s),
				J = Object(o.a)(j.r),
				V = Object(o.a)(j.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, a, n) => {
						let {
							apiContext: s
						} = n;
						const o = a(),
							c = t.after || "",
							i = Object(g.e)(e, c),
							d = o.features.banned.fetchedTokens[i];
						if (o.features.banned.api.pending[i] || d) return;
						r(Y({
							subredditId: e,
							fetchedToken: c
						}));
						const l = o.subreddits.models[e].name,
							m = await h(s(), l, t);
						m.ok ? r(J({
							...m.body,
							fetchedToken: c
						})) : r(V({
							subredditId: e,
							fetchedToken: c
						}))
					}
				},
				ee = Object(o.a)(j.v),
				te = Object(o.a)(j.u),
				re = Object(o.a)(j.t),
				ae = (e, t) => async (r, a, n) => {
					let {
						apiContext: s
					} = n;
					const o = a().subreddits.models[e].name,
						c = {
							username: Object(I.a)(t)
						};
					r(ee());
					const i = await h(s(), o, c);
					i.ok ? r(te(i.body)) : r(re(i.error))
				}, ne = Object(o.a)(j.p), se = Object(o.a)(j.w), oe = (e, t, r) => async (n, o, i) => {
					let {
						apiContext: d
					} = i;
					const m = o(),
						v = m.subreddits.models[e].url,
						x = m.subreddits.models[e].name;
					t.username = Object(I.a)(t.username), n(Object(c.h)(r));
					const g = await ((e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.mb.POST,
						data: {
							api_type: "json",
							ban_reason: r.reason,
							ban_message: r.banMessage,
							duration: r.duration,
							name: r.username,
							note: r.modNote,
							ban_context: r.contextId,
							type: "banned"
						}
					}))(d(), v, t);
					if (g.ok) {
						n(Object(c.e)(r));
						const e = {
							username: t.username
						};
						n(Object(l.f)({
							kind: _.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await h(d(), x, e);
						s.ok && n(ne(s.body))
					} else {
						n(Object(c.f)(r, g.error));
						const e = s()(g, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (r, n, o) => {
					let {
						apiContext: c
					} = o;
					const i = n().subreddits.models[e].url,
						d = await ((e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.mb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(c(), i, t);
					if (d.ok) r(se({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: _.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(d, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (r, a) => {
					const n = a();
					await Promise.all([(async () => {
						if (!Object(N.b)(m.a.BAN_USER)(n) && !Object(w.S)(n, {
								subredditId: e
							})) {
							const t = Object(w.V)(n, {
								subredditId: e
							});
							await r(Object(d.o)(t.name))
						}
					})(), (async () => {
						const a = Object(O.Ab)(n, {
							userName: t
						});
						if (!a) return;
						const s = Object(E.h)(n, {
							subredditId: e
						});
						s && s[a.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(i.i)(m.a.BAN_USER))
				}
		},
		"./src/reddit/components/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/components/Admin/index.m.less"),
				i = r.n(c),
				d = r("./src/lib/constants/icons.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				m = r("./src/reddit/constants/experiments.ts"),
				u = r("./src/reddit/helpers/chooseVariant/index.ts");
			const p = e => Object(u.c)(e, {
				experimentEligibilitySelector: u.a,
				experimentName: m.a
			});
			t.a = () => {
				return Object(o.e)(p) ? s.a.createElement("span", {
					className: i.a.admin
				}, a.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : s.a.createElement(l.a, {
					name: d.a.admin,
					isFilled: !0,
					className: i.a.adminIcon,
					title: a.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var a, n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/actions/chat/toggle.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(a || (a = {}));
			const m = e => {
				let {
					onStartChat: t,
					text: r,
					className: n,
					sendEvent: o,
					contextId: c,
					priority: i,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					eventSource: f,
					onClick: b,
					onAddUserToQuickReplyList: v,
					children: x,
					style: h
				} = e;
				return s.a.createElement(d.t, {
					onClick: e => {
						if (b && b(e), t(), f === a.awardNotification) return v();
						o(Object(l.b)(c))
					},
					className: n,
					text: r,
					priority: i,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					style: h
				}, x)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: a
				} = t;
				return {
					onStartChat: () => {
						e(Object(c.b)(a, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(c.a)(a))
					}
				}
			});
			t.b = u(Object(i.c)(m))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(a.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e(1), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2pf8RDPiuLI11feFkyJfzL",
				rank: "C6yq8ik3t6MjtQo2ydsVQ",
				icon: "hmt4YTjn1UkTBP0j-yqKO",
				text: "erHzuL7lOcIsOZRJFi0Ab",
				name: "_1ZbORZi2Ps08zKjxVdM-_O",
				score: "_2run8DYGOjw8M-mRZIHPh5",
				cta: "_23fX84eyay1eyi8y1QD82",
				giftIcon: "_19IVO8CX5HqwA9LJGZ3ni4"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less": function(e, t, r) {
			e.exports = {
				awarder: "_3WyMnKxtBhvXwCnMKXO7BT"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less": function(e, t, r) {
			e.exports = {
				winner: "_14h4WLAmaXglzXtkdGBV60",
				iconContainer: "_1K0xQSCqkgTZhrjq9B2JjB",
				iconWithBorder: "HFi2HvywaYoUETbnXBiV0",
				rank: "gBgkEGJTqu828VrLjP4GY",
				winner1: "_1i0r2VkvzMeFv1QM2MLL0S",
				winner2: "_3mdPqaOiJQsRf5hRnlkrP6",
				winner3: "_1D2u2915axrF7XBM259lDo",
				winnerPlaceholder: "_2WvSa3DFzfwX3Mr3vZ9jkQ",
				icon: "_3iZA-fG9UG3Xa8kXU0x6iv",
				name: "_2Gq1opbxAW64HEQKSsc5TS",
				hoverCardWrapper: "_2mh2gW6yIBCx2s_pL7UKzX",
				score: "_2nY21lzw3wRpMT9lN2mgyA",
				coinIcon: "_29wjryAiJEoczrIw3gPrQT"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1NrpBgoPY-jeGboQdLnvIe",
				winner: "_3nP2WbvmZaXT9gXgbtpMki",
				flexContainer: "ncY6G2KCOOZsDVUyPD9VW"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_1Tb71v-nk7jl8mM2pfbKoj",
				inner: "_3xEuO2MIqPwCicFbSkMcWI",
				modalHeader: "_36er-mpof_BaWTVN_TWKqT",
				modalFooter: "_2F2fWBQxPjhmwG45FMi25h",
				closeIcon: "HRbaOHBNeGJUV9Qh8Rc37",
				title: "zHtFl3sbU36WRMN6Be40E",
				modalContent: "_2HG1iLo9-CdVYmLLLndnB9",
				awardBadgesContainer: "_1BPRycwQx99vehhnRZXSA3",
				winners: "_2YxzmCK7Mj8BYf7UJgew2t",
				list: "ySZcSwZubFvVMLsm0divW",
				anonymousRank: "_22KEUnU_pUoXK8eMBIslUU",
				loader: "_1lL8d_-Oef0beR_egQRJIB",
				youWon: "_15bmMYA8DM0-goiez42DqV",
				youWonIcon: "_3RSMc-yrpBqx7jTkoUoR-g",
				info: "_252HKsT-2R8kkJ8ODCsnoY",
				infoTitle: "refUN3owiLeJKrQdwqSwy",
				infoDesc: "CsTUw6jGsvRz_SCQklwY",
				topAwardedIcon: "-dI9fh7gqtv5MBcdLqi6T",
				cta: "_1BimPhzHA4u9JsAYPgBQmK",
				giftIcon: "_3dojyNA2PoZc7SaIZvnjRv"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/trackers/topAwarded.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/actions/gold/modals.ts"),
				f = r("./src/reddit/contexts/InsideOverlay.tsx"),
				b = r("./src/reddit/contexts/Post/index.tsx"),
				v = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				x = r("./src/reddit/selectors/gold/topAwarded.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/actions/gold/topAwarded.ts"),
				_ = r("./src/reddit/actions/modal.ts"),
				N = r("./src/reddit/components/AwardBadges/index.tsx"),
				E = r("./src/reddit/components/PostTopMeta/index.tsx"),
				w = r("./src/reddit/controls/Button/index.tsx"),
				O = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				y = r("./src/reddit/icons/svgs/Close/index.tsx"),
				C = r("./src/reddit/icons/svgs/TopAwarded/index.tsx");
			var P = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 88 88",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M67.819 86.757h-47.62a5.5 5.5 0 01-5.5-5.5V67.78a5.5 5.5 0 015.5-5.5h1.973a5.497 5.497 0 014.3-5.006l7.03-1.554-.643-2.936c-.262-.243-.521-.487-.778-.73C9.915 48.723 0 36.348 0 12.167a5.5 5.5 0 015.5-5.5h10.148a5.5 5.5 0 015.355-4.243h46.012a5.5 5.5 0 015.355 4.243H82.5a5.5 5.5 0 015.5 5.5c0 24.184-9.91 36.556-32.064 39.886-.256.243-.515.487-.777.73l-.644 2.94 7.014 1.55a5.5 5.5 0 014.3 5.006h1.99a5.5 5.5 0 015.5 5.5v13.478a5.5 5.5 0 01-5.5 5.5z",
					fill: "#000"
				}), n.a.createElement("path", {
					d: "M67.819 67.778v13.479h-47.62V67.778h47.619z",
					fill: "#A06A42"
				}), n.a.createElement("path", {
					d: "M67.545 12.167H82.5c0 21.936-8.538 32.134-29.106 34.684a60.003 60.003 0 006.331-7.426C70.95 36.909 76.494 29.278 76.494 17.3H67.63a39.754 39.754 0 00-.085-5.133zM11.523 17.3c0 11.978 5.527 19.61 16.769 22.125a60.02 60.02 0 006.331 7.426C14.056 44.3 5.5 34.103 5.5 12.167h14.972a39.735 39.735 0 00-.085 5.133h-8.864z",
					fill: "#FEB331"
				}), n.a.createElement("path", {
					d: "M16.269 17.3h4.118a39.733 39.733 0 01.085-5.133h-4.117a43.897 43.897 0 00-.086 5.133zM67.544 12.167c.137 1.745.172 3.456.086 5.133h4.117a44.32 44.32 0 00-.083-5.133h-4.12zM28.292 39.425a25.257 25.257 0 01-6.315-2.327 51.637 51.637 0 002.965 4.734 61.823 61.823 0 002.975 3.795c2.08.513 4.303.926 6.706 1.224a60.007 60.007 0 01-6.331-7.426zM66.045 37.092c-1.87.987-3.94 1.8-6.32 2.333a60.007 60.007 0 01-6.331 7.426 57.435 57.435 0 006.706-1.224 62.408 62.408 0 002.99-3.813 51.472 51.472 0 002.955-4.722z",
					fill: "#A06A42"
				}), n.a.createElement("path", {
					d: "M67.63 17.3c-.359 8.008-3.096 15.349-7.905 22.125a60.02 60.02 0 01-6.33 7.426 79.536 79.536 0 01-3.235 3.046l-2.19 10.01 12.371 2.738v5.133H27.66v-5.133l12.389-2.738-2.19-10.01a79.536 79.536 0 01-3.235-3.046 60.028 60.028 0 01-6.33-7.426c-4.809-6.776-7.547-14.117-7.906-22.125a39.734 39.734 0 01.085-5.133c.103-1.386.291-2.806.531-4.244h46.012c.24 1.438.427 2.858.53 4.244.137 1.745.171 3.456.086 5.133z",
					fill: "#FEB331"
				}), n.a.createElement("path", {
					d: "M48.212 43.095c.875-.782 6.688-6.003 9.052-9.813 8.184-13.195 5.99-24.246 5.804-25.359H34.623c-.435 7.939 1.651 18.806 5.581 27.482 3.214 7.095 5.63 18.961 5.63 18.961l2.378-11.271z",
					fill: "#FFD635"
				}), n.a.createElement("path", {
					d: "M47.366 35.734c5.776-8.664 9.212-17.356 8.648-27.81H42.538c-1.3 9.27 1.737 18.54 4.827 27.81z",
					fill: "#FFF1B6"
				}), n.a.createElement("path", {
					d: "M40.047 59.907L27.66 62.645H60.34L47.97 59.907h-7.923z",
					fill: "#FFD635"
				}), n.a.createElement("path", {
					d: "M67.015 8.354c-3.835 1.297-7.669 1.975-11.503 2.432-3.835.495-7.669.628-11.503.683-3.834-.063-7.669-.195-11.503-.692-3.834-.459-7.669-1.133-11.503-2.423v-.367l23.006-.183 23.006.183v.367z",
					fill: "#fff"
				}), n.a.createElement("path", {
					d: "M54.9 21.778c2.19 0 3.964-2.649 3.964-5.916 0-3.267-1.774-5.916-3.963-5.916-2.19 0-3.964 2.649-3.964 5.916 0 3.267 1.775 5.916 3.964 5.916z",
					fill: "#fff"
				}), n.a.createElement("path", {
					d: "M43.165 59.203c-.245-4.12-1.642-8.053-3.502-11.636-1.83-3.509-4.684-6.651-6.774-10.425-2.116-3.731-3.995-7.584-4.838-11.82-.901-4.256-.893-8.525-.366-12.72l.365-.037c1.36 4.045 2.159 8.074 3.449 11.833 1.396 3.744 2.387 7.72 4.038 11.38 1.579 3.683 4.115 6.998 5.779 11.034 1.497 3.971 2.456 8.189 2.215 12.391h-.366z",
					fill: "#A06A42"
				}), n.a.createElement("path", {
					d: "M16.355 12.766c-.905 1.298-1.81 1.976-2.714 2.432-.904.496-1.809.629-2.713.683-.905-.062-1.81-.195-2.714-.692-.905-.458-1.81-1.133-2.714-2.423V12.4l5.428-.183 5.427.183v.366zM82.5 12.766c-.905 1.298-1.81 1.976-2.714 2.432-.904.496-1.809.629-2.713.683-.905-.062-1.81-.195-2.714-.692-.905-.458-1.81-1.133-2.714-2.423V12.4l5.428-.183 5.427.183v.366z",
					fill: "#FFF1B6"
				})),
				U = r("./node_modules/lodash/noop.js"),
				k = r.n(U),
				A = r("./src/lib/currency/currencies.ts"),
				S = r("./src/lib/localizeCurrency/index.ts"),
				B = r("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				M = r("./src/reddit/components/UserIcon/index.tsx"),
				T = r("./src/reddit/hooks/useLocale.ts"),
				F = r("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less"),
				H = r.n(F);
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js"), R = (e, t) => t ? L._("{userName} (you)", [L._param("userName", e)], {
				hk: "vsIHp"
			}) : e;
			var D = function(e) {
					const {
						awarder: t,
						className: r,
						currentUserId: a,
						onCtaClick: s,
						showCta: o
					} = e, {
						rank: c,
						redditor: d,
						score: l
					} = t, m = Object(T.a)(), u = !d.profile;
					return n.a.createElement("div", {
						className: Object(i.a)(H.a.container, r)
					}, n.a.createElement("div", {
						className: H.a.rank
					}, c || "-"), n.a.createElement(M.a, {
						className: H.a.icon,
						iconUrl: d.icon ? d.icon.url : void 0,
						isNSFW: !!d.profile && d.profile.isNsfw,
						userName: d.name
					}), n.a.createElement("div", {
						className: H.a.text
					}, n.a.createElement("h3", {
						className: H.a.name
					}, u ? d.name : n.a.createElement(B.a, {
						user: d.name,
						tooltipId: `topawarder--userhovercard--${d.name}`,
						sendHoverCardEvent: k.a
					}, R(d.name, d.id === a))), l > 0 && n.a.createElement("span", {
						className: H.a.score
					}, Object(S.b)(l, {
						locale: m,
						type: A.b.Reddit,
						currency: A.a
					}))), o && n.a.createElement("button", {
						className: H.a.cta,
						onClick: s
					}, n.a.createElement(j.a, {
						className: H.a.giftIcon
					}), L._("Award", null, {
						hk: "4BW9Zq"
					})))
				},
				W = r("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less"),
				z = r.n(W);
			const G = 8;
			var K = function(e) {
					const {
						awarders: t,
						className: r,
						currentRank: a,
						currentUserId: s,
						hideAddAwardButton: o,
						onGild: c
					} = e;
					return t.length ? n.a.createElement("div", {
						className: Object(i.a)(r, z.a.container)
					}, a && (!a.rank || a.rank > G) && n.a.createElement(D, {
						className: z.a.awarder,
						currentUserId: s,
						awarder: a,
						key: a.redditor.id,
						showCta: !o,
						onCtaClick: c
					}), t.map(e => n.a.createElement(D, {
						className: z.a.awarder,
						currentUserId: s,
						awarder: e,
						key: e.redditor.id,
						showCta: !o && s === e.redditor.id,
						onCtaClick: c
					}))) : null
				},
				q = r("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				Q = r("./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less"),
				Z = r.n(Q);
			var X = function(e) {
					const {
						showScore: t,
						awarder: r,
						className: a,
						rank: s
					} = e, o = r && !r.redditor.profile, c = r ? r.redditor.name : "—";
					return n.a.createElement("div", {
						className: Object(i.a)(a, Z.a.winner, Z.a[`winner${s}`], {
							[Z.a.winnerPlaceholder]: !r
						})
					}, n.a.createElement("div", {
						className: Z.a.iconContainer
					}, n.a.createElement("div", {
						className: Z.a.iconWithBorder
					}, r && n.a.createElement(M.a, {
						className: Z.a.icon,
						iconUrl: r.redditor.icon ? r.redditor.icon.url : void 0,
						isNSFW: !!r.redditor.profile && r.redditor.profile.isNsfw,
						userName: c
					})), n.a.createElement("div", {
						className: Z.a.rank
					}, s)), n.a.createElement("h3", {
						className: Z.a.name
					}, r && !o ? n.a.createElement(B.a, {
						user: c,
						tooltipId: `topawarderwinner-userhovercard--${c}`,
						sendHoverCardEvent: k.a,
						wrapperClassName: Z.a.hoverCardWrapper
					}, c) : c), r && t && n.a.createElement("div", {
						className: Z.a.score
					}, n.a.createElement(q.a, {
						className: Z.a.coinIcon
					}), r.score))
				},
				Y = r("./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less"),
				J = r.n(Y);
			var V = function(e) {
					const {
						awarders: t,
						className: r,
						showScores: a
					} = e;
					if (!t.length) return null;
					const s = [t[0], t[1] || void 0, t[2] || void 0];
					return n.a.createElement("div", {
						className: Object(i.a)(r, J.a.container, {
							[J.a.flexContainer]: s.length < 3
						})
					}, s.map((e, t) => n.a.createElement(X, {
						showScore: a,
						className: J.a.winner,
						awarder: e,
						rank: t + 1,
						key: t
					})))
				},
				$ = r("./src/reddit/components/Econ/TopAwardersModal/index.m.less"),
				ee = r.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ae = 7, ne = Object(o.a)(e => e, x.a, x.c, x.e, I.k, (e, t, r, a, n) => {
				if (!t) return {
					anonymousRank: void 0,
					currentPostId: t,
					currentRank: void 0,
					currentUser: n,
					error: r,
					list: void 0,
					pending: a,
					post: null
				};
				const s = Object(h.G)(e, {
						postId: t
					}),
					o = Object(x.b)(e, t),
					c = Object(x.d)(e, t),
					i = [];
				let d, l = -1;
				return c && c.forEach((e, t) => {
					if (!e.redditor.profile) return d = e, void(l = t);
					const r = l < 0 ? e : {
						...e,
						rank: e.rank - 1
					};
					i.push(r)
				}), {
					anonymousRank: d,
					currentPostId: t,
					currentRank: o,
					currentUser: n,
					error: r,
					list: i,
					pending: a,
					post: s
				}
			}), se = Object(s.b)(ne);
			const oe = Object(c.a)(se(Object(f.b)((function(e) {
				const {
					anonymousRank: t,
					currentPostId: r,
					currentRank: o,
					currentUser: c,
					post: i,
					list: f,
					pending: x
				} = e, h = Object(s.d)(), I = Object(u.a)();
				Object(a.useEffect)(() => {
					r && h(Object(g.a)(r))
				}, [r, h]), Object(a.useEffect)(() => {
					r && I(Object(m.c)(r))
				}, [r, I]);
				const U = () => h(Object(_.g)(d.a.ECON_TOP_AWARDERS)),
					k = () => {
						if (r) {
							const e = Object(l.d)(l.a.GildingFlow, !0);
							I(Object(m.b)()), h(Object(p.d)({
								thingId: r,
								correlationId: e
							}))
						}
					};
				if (!r || !i) return U(), null;
				const A = c && c.id === i.authorId,
					S = !i.isGildable || !!A,
					B = i.topAwardedType === v.a.Active,
					M = i.topAwardedType === v.a.Inactive,
					T = !x && !!f && !!f.length,
					F = !x && f && !f.length && i && B;
				return n.a.createElement("div", {
					className: ee.a.inner
				}, n.a.createElement("div", {
					className: ee.a.modalHeader
				}, n.a.createElement(y.a, {
					className: ee.a.closeIcon,
					onClick: U
				}), n.a.createElement("h3", {
					className: ee.a.title
				}, re._("Top Awarders", null, {
					hk: "3hzpI8"
				}))), n.a.createElement("div", {
					className: ee.a.modalContent
				}, n.a.createElement("div", {
					className: ee.a.awardBadgesContainer
				}, n.a.createElement(b.a, {
					postId: i.id
				}, n.a.createElement(N.a, {
					awardsCountInView: ae,
					awardsPlaqueStyle: !0,
					hideCta: !0,
					hideTopAwardedBadge: !0,
					tooltipType: E.c.TopAwardedModal,
					thing: i
				}))), x && n.a.createElement(O.a, {
					className: ee.a.loader,
					sizePx: 60
				}), T && M && o && 1 === o.rank && n.a.createElement("div", {
					className: ee.a.youWon
				}, re._("You won 1st place!", null, {
					hk: "1MxirM"
				}), n.a.createElement(P, {
					className: ee.a.youWonIcon
				})), T && n.a.createElement(V, {
					className: ee.a.winners,
					awarders: f,
					showScores: M
				}), T && M && (!o || o && 1 !== o.rank) && n.a.createElement("div", {
					className: ee.a.info
				}, n.a.createElement("h3", {
					className: ee.a.infoTitle
				}, re._("Top Awarded Post", null, {
					hk: "1BJ1We"
				})), n.a.createElement("span", {
					className: ee.a.infoDesc
				}, re._("This is a historic Top Awarded post. Give Awards to newer posts to add your name to the list!", null, {
					hk: "2U5vPa"
				})), n.a.createElement(C.a, {
					className: ee.a.topAwardedIcon
				})), F && n.a.createElement("div", {
					className: ee.a.info
				}, n.a.createElement(C.a, {
					className: ee.a.topAwardedIcon
				}), n.a.createElement("h3", {
					className: ee.a.infoTitle
				}, re._("Get on the board", null, {
					hk: "RVDeW"
				})), n.a.createElement("span", {
					className: ee.a.infoDesc
				}, re._("Award publicly and your username will show up on this leaderboard!", null, {
					hk: "3reZYa"
				})), n.a.createElement(w.l, {
					className: ee.a.cta,
					onClick: k
				}, n.a.createElement(j.a, {
					className: ee.a.giftIcon
				}), re._("Give Award", null, {
					hk: "2sa45i"
				}))), T && i && B && n.a.createElement(K, {
					awarders: f,
					className: ee.a.list,
					currentRank: o,
					currentUserId: c && c.id,
					hideAddAwardButton: S,
					onGild: k
				}), !x && B && t && n.a.createElement("div", {
					className: ee.a.anonymousRank
				}, re._("Anonymous redditors have awarded for {score} Coins", [re._param("score", t.score.toLocaleString())], {
					hk: "11BYuy"
				}))), n.a.createElement("div", {
					className: ee.a.modalFooter
				}))
			}))));
			t.default = e => n.a.createElement(oe, te({}, e, {
				className: Object(i.a)(e.className, ee.a.modal)
			}))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/ImageInput/index.tsx"),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				m = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(u);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: a,
					isProfileCard: u,
					isLoading: f,
					imageUrl: b,
					onFileSelected: v
				} = e;
				const x = Object(s.e)(m.a);
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.Container, a)
				}, n.a.createElement("label", {
					className: p.a.HitBox
				}, n.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? n.a.createElement("img", {
					alt: t,
					className: p.a.Image,
					src: b
				}) : r), n.a.createElement(c.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						v(e, t)
					},
					isPending: x ? f : void 0
				}), !f && n.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: u
					})
				}, n.a.createElement(d.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), f && n.a.createElement(i.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				i = r("./src/reddit/actions/tooltip.ts"),
				d = r("./src/reddit/helpers/author.ts"),
				l = r("./src/reddit/helpers/isPost.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				u = r("./src/reddit/selectors/gold/awardIcon.ts"),
				p = r("./src/reddit/selectors/moderatorPermissions.ts"),
				f = r("./src/reddit/selectors/modUserNotes.ts"),
				b = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/structuredStyles.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/tooltip.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/selectors/userFlair.ts"),
				N = r("./src/reddit/selectors/userPrefs.ts"),
				E = r("./src/reddit/selectors/platform.ts"),
				w = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				O = r("./node_modules/fbt/lib/FbtPublic.js"),
				j = r("./src/config.ts"),
				y = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = r("./src/lib/lessComponent.tsx"),
				P = r("./src/lib/prettyPrintNumber/index.ts"),
				U = r("./src/reddit/components/Admin/index.tsx"),
				k = r("./src/reddit/components/ChatButton/index.tsx"),
				A = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				B = r("./src/reddit/components/SubscribeButton/index.tsx"),
				M = r("./src/reddit/components/UserIcon/index.tsx"),
				T = r("./src/reddit/controls/Button/index.tsx"),
				F = r("./src/reddit/endpoints/profile/info.ts"),
				H = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				L = r("./src/reddit/icons/fonts/Info/index.tsx"),
				R = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				D = r("./src/reddit/models/Gold/Award.ts"),
				W = r("./src/reddit/models/User/index.ts"),
				z = r("./src/reddit/components/HumanDate/index.tsx"),
				G = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				K = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				q = r("./src/reddit/actions/inContextModeration.ts"),
				Q = r("./src/reddit/actions/modal.ts"),
				Z = r("./src/reddit/actions/subredditModeration/ban.ts"),
				X = r("./src/reddit/constants/modals.ts"),
				Y = r("./src/reddit/components/Hovercards/helpers.ts"),
				J = r("./src/reddit/icons/fonts/index.tsx"),
				V = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				$ = r("./src/reddit/selectors/bannedUser.ts"),
				ee = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				te = r.n(ee);
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ae = Object(o.c)({
				hasModMailPermissions: Object(p.b)(V.c.mail),
				isUserBanned: (e, t) => !!Object($.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(g.Ab)(e, {
					userName: t.username
				})
			});
			class ne extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: a,
						onUnbanUser: s,
						sendEvent: o,
						toggleBanModal: c,
						toggleMuteModal: i
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, a ? n.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(H.e(t))
						}
					}, n.a.createElement(J.a, {
						name: "ban",
						isFilled: !0,
						className: te.a.icon
					}), re._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							c(), o(H.a(t))
						}
					}, n.a.createElement(J.a, {
						name: "ban",
						className: te.a.icon
					}), re._("Ban User", null, {
						hk: "3OhuLx"
					})), r && n.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							i(), o(H.d(t))
						}
					}, n.a.createElement(J.a, {
						name: "mod_mute",
						className: te.a.icon
					}), re._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var se = Object(s.b)(ae, (e, t) => {
					let {
						username: r,
						subredditId: a,
						contextId: n
					} = t;
					return {
						onUnbanUser: t => e(Object(Z.e)(a, t)),
						requestUserBanInfo: () => e(Object(Z.c)(a, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(q.c)({
								username: r,
								subredditId: a,
								contextId: n
							})), e(Object(Z.a)(a, r))
						},
						toggleMuteModal: () => {
							e(Object(q.d)({
								username: r,
								subredditId: a,
								contextId: n
							})), e(Object(Q.i)(X.a.MUTE_USER))
						}
					}
				})(ne),
				oe = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ce
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ie = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(oe.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(Y.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(H.c(e.contextId))
					}
				}, n.a.createElement(J.a, {
					name: "tag",
					className: te.a.icon
				}), ce._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = r.n(de);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = C.a.wrapped(M.a, "UserIcon", le.a),
				pe = C.a.wrapped(B.a, "SubscribeButton", le.a),
				fe = C.a.wrapped(k.b, "ChatButton", le.a),
				be = C.a.wrapped(R.a, "PremiumIcon", le.a),
				ve = C.a.wrapped(y.a, "UserNameLink", le.a),
				xe = C.a.div("UserNameMetaData", le.a),
				he = C.a.div("MetaDataItem", le.a),
				Ie = C.a.div("Bullet", le.a),
				ge = C.a.div("UserNameContainer", le.a),
				_e = C.a.div("KarmaGrid", le.a),
				Ne = C.a.div("GenericKarma", le.a),
				Ee = C.a.a("InfoLink", le.a),
				we = C.a.div("KarmaCount", le.a),
				Oe = C.a.div("GenericKarmaLabel", le.a),
				je = C.a.div("BannerImage", le.a),
				ye = C.a.div("UserContainer", le.a),
				Ce = C.a.div("BottomSpacer", le.a),
				Pe = C.a.div("Container", le.a),
				Ue = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(ve, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && n.a.createElement(y.a, {
					to: "/premium"
				}, n.a.createElement(be, null)), e.user.isEmployee && n.a.createElement(U.a, null)), n.a.createElement(xe, null, n.a.createElement(he, null, `u/${e.userName}`, n.a.createElement(Ie, null, "•")), n.a.createElement(he, null, (e.user.createdUtc || e.user.created) && n.a.createElement(z.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				ke = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...F.a,
						...t
					};
					return n.a.createElement(_e, null, n.a.createElement(Ne, null, n.a.createElement(we, null, Object(P.b)(r.fromPosts)), n.a.createElement(Oe, null, O.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [O.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(Ne, null, n.a.createElement(we, null, Object(P.b)(r.fromComments)), n.a.createElement(Oe, null, O.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [O.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), n.a.createElement(Ne, null, n.a.createElement(we, null, Object(P.b)(r.fromAwardsReceived)), n.a.createElement(Oe, null, O.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [O.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), n.a.createElement(Ee, {
						href: D.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(L.a, {
						className: le.a.infoIcon
					})))), n.a.createElement(Ne, null, n.a.createElement(we, null, Object(P.b)(r.fromAwardsGiven)), n.a.createElement(Oe, null, O.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [O.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), n.a.createElement(Ee, {
						href: D.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(L.a, {
						className: le.a.infoIcon
					})))))
				},
				Ae = e => {
					var t, r;
					const {
						className: a,
						contextId: s,
						currentUser: o,
						hideNSFWPref: c,
						hoverId: i,
						isLoggedIn: d,
						onClickSnoovatar: l,
						moderatorPermissions: m,
						prefersReducedAnimations: u,
						profile: p,
						sendEvent: f,
						style: b,
						subredditId: v,
						topAwardIcon: x,
						userName: h,
						user: I,
						userFlair: g,
						isCurrentUserBanned: _,
						userProfileStyles: N,
						acceptChats: E,
						isCommentAuthorBlocked: w
					} = e;
					if (!I) return n.a.createElement(Pe, {
						style: b
					});
					const y = !!o && Object(W.e)(o) === h,
						C = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						P = I.accountIcon || `${j.a.assetPath}/img/snoo_user_placeholder.png`,
						U = null == m ? void 0 : m.flair,
						k = null == m ? void 0 : m.access,
						S = (null == g ? void 0 : g.templateIds) && (null === (t = null == g ? void 0 : g.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						B = null === (r = null == g ? void 0 : g.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: M
						} = I,
						F = !!I.snoovatarFullBodyAsset,
						L = I.isNSFW && c;
					let R;
					return R = F ? !L && N && N.bannerBackgroundImage || void 0 : L ? `${j.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(Pe, {
						className: a,
						id: i,
						style: b
					}, !F && R && n.a.createElement(je, {
						style: {
							backgroundImage: `url('${R}')`
						}
					}), n.a.createElement(ye, null, F ? n.a.createElement(K.a, {
						isHovercard: !0,
						bannerBackgroundImage: R,
						compact: !0,
						currentUserHasSnoovatar: C,
						isEmployee: I.isEmployee,
						isGold: I.isGold,
						isNSFW: I.isNSFW,
						isOwnProfile: y,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!u,
						snoovatarUrl: I.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: I.created,
						username: h,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(ge, null, n.a.createElement(ue, {
						iconUrl: P,
						isNSFW: I.isNSFW,
						userName: h
					}), n.a.createElement(Ue, {
						title: null == p ? void 0 : p.title,
						user: I,
						userName: h
					})), n.a.createElement(ke, {
						user: I
					}), M && n.a.createElement(G.a, {
						recentAwardings: M,
						topAwardIcon: x,
						username: h
					}), d && !y && !_ && E && !w && n.a.createElement(fe, {
						contextId: s,
						priority: T.c.Secondary,
						userId: I.id,
						text: O.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), I.hasUserProfile && !_ && !w && !y && I.enableFollowers && n.a.createElement(pe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(H.h)(e ? "unfollow" : "follow", s),
						isFullWidth: !0,
						small: !0
					})), k && s && !y && v && n.a.createElement(se, {
						contextId: s,
						subredditId: v,
						sendEvent: f,
						username: h
					}), U && s && S && B && v && n.a.createElement(ie, {
						contextId: s,
						subredditId: v,
						sendEvent: f,
						username: h
					}), n.a.createElement(A.i, {
						contextId: s,
						subredditId: v,
						user: I
					}), !(k || d) && n.a.createElement(Ce, null))
				},
				Se = Object(S.a)(Ae),
				Be = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return n.a.createElement(Se, me({
						isOpen: t
					}, e))
				};
			Be.WrappedComponent = Ae;
			var Me = Be;
			const Te = Object(o.c)({
					activeTooltipId: I.a,
					currentUser: g.k,
					isLoggedIn: g.Q,
					hideNSFWPref: g.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(p.n)(e, {
							subredditId: r
						}) : void 0
					},
					prefersReducedAnimations: N.d,
					profile: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(v.k)(e, {
							profileName: r
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(u.e)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: g.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(_.d)(e, {
							subredditId: r
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(h.o)(t) && Object(h.gb)(e, t),
					userProfileStyles: (e, t) => Object(x.m)(e, Object(v.n)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(v.i)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						const a = Object(E.e)(e),
							n = r || a && Object(h.G)(e, a.name);
						return !!n && Object(p.i)(e, n)
					},
					trophyCase: (e, t) => Object(v.s)(e, Object(v.n)(e, t.userName)),
					isNightMode: g.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(l.a)(t.contextId) ? Object(b.G)(e, {
							postId: t.contextId
						}) : Object(m.b)(e, {
							commentId: t.contextId
						});
						return Object(f.b)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(h.hb)(e, {
							identifier: {
								name: r,
								type: "profile"
							}
						})
					}
				}),
				Fe = Object(s.b)(Te, (e, t) => ({
					onClickSnoovatar: () => e(Object(c.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(i.i)())
				}));
			t.a = Fe(e => e.isModWithUserNotesPermissions ? n.a.createElement(w.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId,
				user: e.user,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed,
				trophyCase: e.trophyCase,
				isNightMode: e.isNightMode,
				lastAuthorModNote: e.lastAuthorModNote,
				userIsSubscriber: e.userIsSubscriber
			}) : Object(d.a)(e.userName) ? null : n.a.createElement(Me, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(c.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(s.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, n.a.createElement(o.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, r) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m"
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				i = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: a,
						totalCount: c
					} = t, l = a.description ? a.description : a.name;
					return n.a.createElement("a", {
						className: i.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${r}/gilded`
					}, n.a.createElement("div", {
						className: i.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: i.a.icon,
						src: e
					}), c > 1 && n.a.createElement("span", {
						className: i.a.count
					}, `+${Object(o.b)(c-1)}`)), n.a.createElement("div", {
						className: i.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", a.name), d._plural(c)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/models/Image/index.tsx"),
				c = r("./src/reddit/components/EditableImage/index.tsx"),
				i = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(l);
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: n,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? s.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(i.e)(r) === d ? s.a.createElement(c.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && n ? null : u
				}
			}
			t.a = Object(d.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const c = Object(n.c)({
					currentUser: o.k,
					hideNSFWPref: o.F
				}),
				i = Object(a.b)(c, e => ({
					imageUpdateRequested: (t, r) => e(Object(s.C)(t, r))
				}));
			t.a = i
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var a = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/react-router/esm/react-router.js"),
				i = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				v = r.n(b);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(c.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: c,
					post: b,
					share: h
				} = e;
				const I = Object(l.b)(),
					g = Object(o.d)(),
					_ = b && b.id,
					N = b && b.voteState;
				let E = null;
				_ || (E = t ? "user_hovercard" : "profile_overview");
				const w = Object(n.useCallback)(() => I(Object(u.h)(t ? "user_hovercard" : "profile_overview", r)), [t, I, r]);
				return s.a.createElement(m.t, {
					onClick: () => {
						c ? (I(u.i), _ && N === f.a.notVoted && g(Object(i.kb)(_))) : w();
						const e = c ? "postify" : "copy";
						g(Object(d.b)({
							clickSource: E,
							share: h,
							source: e
						}))
					},
					className: Object(a.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: c
					}),
					isFullWidth: !0
				}, s.a.createElement(p.a, {
					className: Object(a.a)({
						[v.a.shirtIcon]: !c,
						[v.a.avatarPostButtonShirtIcon]: c
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
					className: v.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				i = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(d);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: a,
					isOwnProfile: d,
					onClick: u
				} = e;
				return n.a.createElement(o.t, {
					onClick: u,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !r && d,
						[l.a.compactButtonLayout]: t
					}, a)
				}, r ? n.a.createElement(i.a, {
					className: l.a.shirtIcon
				}) : n.a.createElement("div", {
					className: l.a.shirtIcon
				}), r ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : d ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? n.a.createElement("div", {
					className: l.a.chevronIcon
				}) : n.a.createElement(c.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = r.n(i),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: a,
					editMode: i,
					isDeletingBanner: l,
					onDeleteBanner: u
				} = e;
				return n.a.createElement("div", {
					className: d.a.bannerWrapper
				}, n.a.createElement(c.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: a
				}), i && t && (l ? n.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : n.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: u
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: a,
					userCreated: i,
					username: d,
					...l
				} = e;
				const m = r ? n.a.createElement(n.a.Fragment, null, "u/", d, " · ", n.a.createElement(o.d, {
					seconds: i,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return a ? n.a.createElement(s.default, c({}, l, {
					className: t,
					to: a
				}), m) : n.a.createElement("span", c({}, l, {
					className: t
				}), m)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				l = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				p = r.n(u);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const f = 25;

			function b(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function v(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const x = b("particleDelay", p.a),
				h = b("particleX", p.a),
				I = b("particleFloat", p.a),
				g = () => {
					const e = v(h),
						t = v(I),
						r = v(x);
					return Object(n.a)(p.a.particle, e, t, r)
				};
			class _ extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < f; t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						role: "presentation",
						className: p.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: `${g()}`
					})
				}
			}
			var N = _;
			const E = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: s,
					prefersReducedAnimations: u,
					origin: f
				} = e;
				const b = Object(c.e)(m.b),
					v = s && Object(l.d)(s) && b,
					x = f === d.a.Profile,
					h = f === d.a.Hovercard;
				return v ? o.a.createElement("div", {
					className: Object(n.a)({
						[p.a.profileTreatment]: x,
						[p.a.hovercardTreatment]: h
					})
				}, o.a.createElement("div", {
					className: p.a.nftProfileUnitContainer
				}, o.a.createElement(i.a, {
					className: p.a.nftProfileUnit,
					imageUrl: s,
					origin: f
				}))) : o.a.createElement("div", {
					className: Object(n.a)(p.a.snoovatarContainer, t)
				}, r && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: p.a.topGlow
				}), o.a.createElement("div", {
					className: p.a.bottomGlow
				}), !u && o.a.createElement(N, null)), o.a.createElement("img", {
					className: Object(n.a)(p.a.snoovatar, {
						[p.a.premiumGlow]: r
					}),
					src: s,
					alt: a.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var a = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				c = r("./src/reddit/components/Admin/index.tsx"),
				i = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = r.n(l);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: s,
					isGold: l,
					isNSFW: u
				} = e;
				return o.a.createElement("h1", {
					className: m.a.snoovatarUserTitle
				}, t || r, l && o.a.createElement("a", {
					title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${a.a.redditUrl}/premium`
				}, o.a.createElement(d.a, {
					className: m.a.snoovatarPremiumIcon
				})), s && o.a.createElement(c.a, null), u && o.a.createElement(i.a, {
					className: m.a.snoovatarNsfwIcon,
					title: n.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				b = r.n(f),
				v = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				x = r.n(v),
				h = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				I = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: a,
					editMode: f,
					isDeletingBanner: v,
					isEmployee: g,
					isGold: _,
					isNSFW: N,
					isOwnProfile: E,
					onClickSnoovatar: w,
					onDeleteBanner: O,
					prefersReducedAnimations: j,
					snoovatarUrl: y,
					title: C,
					userCreated: P,
					username: U,
					url: k,
					isHovercard: A
				} = e;
				const S = Object(s.e)(e => !E && !!y && Object(d.f)(e));
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(u.a, {
					bannerBackgroundImage: t,
					editMode: !!f,
					isNSFW: N,
					username: U,
					isDeletingBanner: !!v,
					onDeleteBanner: O
				}), !f && E && n.a.createElement(o.default, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, n.a.createElement(i.a, {
					name: "settings",
					className: x.a.settingsIcon
				})), n.a.createElement(h.a, {
					isGold: _,
					snoovatarUrl: y,
					prefersReducedAnimations: j,
					origin: A ? c.a.Hovercard : c.a.Profile
				}), n.a.createElement(I.a, {
					isEmployee: g,
					isGold: _,
					isNSFW: N,
					title: C,
					username: U
				}), n.a.createElement(p.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: U,
					userCreated: P,
					url: k
				}), (E || !a && !!y) && n.a.createElement(l.a, {
					compact: r,
					currentUserHasSnoovatar: a,
					isOwnProfile: E,
					onClick: w
				}), S && n.a.createElement(m.a, {
					username: U,
					isHovercard: !!A,
					share: {
						username: U
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			class s extends n.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = r || a;
					return n.a.createElement("div", {
						className: e.className
					}, r && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: a = 10
				} = e;
				return n.a.createElement("div", {
					className: Object(s.a)(c.a.loadingIcon, r, {
						[c.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${a}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			const a = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var a = r("./node_modules/bignumber.js/bignumber.js"),
				n = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new a.BigNumber(e),
					n = new a.BigNumber(t || 1);
				return r.dividedToIntegerBy(n).toString()
			}

			function o(e, t) {
				return Object(n.b)(parseInt(s(e, t), 10))
			}

			function c(e, t) {
				const r = new a.BigNumber(e),
					n = new a.BigNumber(t || 1);
				return r.multipliedBy(n).toFixed(0)
			}

			function i(e) {
				const t = new a.BigNumber(e),
					r = new a.BigNumber("1e18");
				return t.dividedBy(r).toString()
			}
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			}));
			var a = r("./src/reddit/selectors/telemetry.ts");
			const n = () => e => ({
					...Object(a.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				s = () => e => ({
					...Object(a.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(a.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var c;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(c || (c = {}));
			const i = e => t => {
				const r = Object(a.n)(t);
				return {
					...r,
					source: "marketplace",
					action: "view",
					noun: "product_detail_page",
					actionInfo: {
						...r.actionInfo,
						reason: e,
						pageType: "product_detail_page"
					}
				}
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/icons/fonts/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement(s.a, o({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, r) {},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, r) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				c = r.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), n.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), n.a.createElement("path", {
				className: Object(s.a)(c.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), n.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), n.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), n.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), n.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), n.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), n.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#EC0623"
			}), n.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			var a = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: a.ze
					}) === a.Qd)
				},
				o = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: a.Ae
				}) === a.Qd
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconTopAwardersModal.fb074bedf295e7d468bd.js.map