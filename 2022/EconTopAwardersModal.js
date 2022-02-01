// https://www.redditstatic.com/desktop2x/EconTopAwardersModal.784fb8780dda7ee3b3d8.js
// Retrieved at 2/1/2022, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconTopAwardersModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var r = a("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const a = Object(r.a)(e),
					n = parseInt(a) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			a.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return r
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "d", (function() {
				return o
			})), a.d(t, "a", (function() {
				return d
			})), a.d(t, "f", (function() {
				return i
			})), a.d(t, "g", (function() {
				return c
			})), a.d(t, "e", (function() {
				return l
			}));
			var r, n = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(r || (r = {}));
			const s = "USD",
				o = "ETH",
				d = "COINS",
				i = [o, "BTC"],
				c = [d, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
		"./src/lib/localizeCurrency/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return l
			}));
			var r = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = a("./src/lib/currency/centsToDollars/index.ts"),
				s = a("./src/lib/currency/currencies.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				d = a("./src/reddit/helpers/governance/tokens.ts"),
				i = a("./src/reddit/constants/intlSupport.ts");
			const c = (e, {
					locale: t = r.DEFAULT_LOCALE,
					pretty: a,
					formatOptions: n
				} = {}) => {
					const s = Number(e);
					return Object(i.c)() ? a ? Object(o.b)(s) : new Intl.NumberFormat(t, n).format(s) : m(s, a, t)
				},
				l = (e, t = {}) => {
					const {
						locale: a = r.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: c,
						displayConversion: l,
						forceDecimals: h,
						currency: b = t.currency || (t.type ? p(t.type) : s.c),
						type: f = t.type || (t.currency ? u(t.currency) : s.b.Real)
					} = t, w = Number(e), v = String(e);
					switch (f) {
						case s.b.Reddit: {
							const e = s.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								currencyDisplay: "symbol",
								...c
							}).format(w) + " " + t : m(w, o, a, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(d.c)(v, l) + " " + b
							}
							const e = Number(Object(d.b)(v, l));
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...c
							}).format(e) : m(e, o, a, b)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(n.a)(v, h));
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...c
							}).format(e) : m(e, o, a, b)
						}
					}
				},
				m = (e, t, a, r) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(a)) + (r ? " " + r : "")
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
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			})), a.d(t, "b", (function() {
				return c
			}));
			var r = a("./src/lib/makeActionCreator/index.ts"),
				n = a("./src/reddit/actions/modal.ts"),
				s = a("./src/reddit/constants/modals.ts"),
				o = a("./src/reddit/actions/gold/constants.ts");
			const d = Object(r.a)(o.mb),
				i = Object(r.a)(o.t),
				c = e => async t => {
					await t(i({
						id: e
					})), t(Object(n.h)(s.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/reddit/actions/toaster.ts"),
				o = a("./src/reddit/models/Toast/index.ts"),
				d = a("./src/reddit/endpoints/gold/communityAwards.ts"),
				i = a("./src/reddit/actions/gold/constants.ts");
			const c = Object(n.a)(i.lb),
				l = e => async (t, a, {
					apiContext: n
				}) => {
					t(c());
					try {
						if ((await Object(d.e)(n(), e.id)).error) throw new Error;
						await t(Object(s.f)({
							kind: o.b.SuccessAward,
							duration: s.a,
							text: r.fbt._("{award name} Award successfully reported for review.", [r.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (i) {
						await t(Object(s.f)({
							kind: o.b.Error,
							duration: s.a,
							text: r.fbt._("Something went wrong. The report could not be created at this time.", null, {
								hk: "1ewigu"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/gold/topAwarded.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return p
			})), a.d(t, "b", (function() {
				return b
			}));
			var r = a("./src/lib/env/index.ts"),
				n = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				o = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/endpoints/gold/topAwarded.ts"),
				i = a("./src/reddit/actions/modal.ts"),
				c = a("./src/reddit/actions/gold/constants.ts");
			Object(n.a)(c.ub), Object(n.a)(c.tb), Object(n.a)(c.sb);
			const l = Object(n.a)(c.xb),
				m = Object(n.a)(c.wb),
				u = Object(n.a)(c.vb),
				p = (e, t = 25) => async (a, n, {
					gqlContext: o
				}) => {
					if (!n().users.topAwarders.list.length) {
						a(l());
						try {
							const r = await Object(d.b)(o(), {
									top: t,
									postId: e
								}),
								n = r.body;
							if (r.ok) await a(m({
								postId: e,
								...n.data.postInfoById.topAwarders
							}));
							else if (n.errors && n.errors.length) throw new Error(n.errors.map(e => e.message).join("; "))
						} catch (i) {
							Object(r.b)() || console.error(i), s.c.captureMessage(i), a(u(i.message))
						}
					}
				}, h = Object(n.a)(c.yb), b = e => async (t, a) => {
					t(h({
						postId: e
					})), t(Object(i.h)(o.a.ECON_TOP_AWARDERS))
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "d", (function() {
				return d
			}));
			var r = a("./src/lib/makeActionCreator/index.ts");
			const n = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				o = Object(r.a)(n),
				d = Object(r.a)(s)
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return $
			})), a.d(t, "d", (function() {
				return re
			})), a.d(t, "b", (function() {
				return oe
			})), a.d(t, "e", (function() {
				return de
			})), a.d(t, "a", (function() {
				return ie
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/get.js"),
				s = a.n(n),
				o = a("./src/lib/makeActionCreator/index.ts"),
				d = a("./src/reddit/actions/apiRequestState.ts"),
				i = a("./src/reddit/actions/modal.ts"),
				c = a("./src/reddit/actions/subreddit.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				m = a("./src/reddit/constants/modals.ts"),
				u = a("./src/lib/constants/index.ts"),
				p = a("./src/lib/makeApiRequest/index.ts"),
				h = a("./src/lib/omitHeaders/index.ts"),
				b = a("./src/reddit/constants/headers.ts"),
				f = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				w = a("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, a) => Object(p.a)(Object(h.a)(e, [b.a]), {
				endpoint: Object(f.a)(Object(w.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.jb.GET,
				data: a
			});
			var g = a("./src/reddit/helpers/normalizeUsername/index.tsx"),
				x = a("./src/reddit/models/SubredditModeration/index.ts"),
				A = a("./src/reddit/models/Toast/index.ts"),
				E = a("./src/reddit/selectors/activeModalId.ts"),
				I = a("./src/reddit/selectors/bannedUser.ts"),
				O = a("./src/reddit/selectors/subreddit.ts"),
				_ = a("./src/reddit/selectors/user.ts"),
				C = a("./src/reddit/actions/subredditModeration/constants.ts"),
				j = a("./src/lib/initializeClient/installReducer.ts"),
				N = a("./node_modules/redux/es/redux.js");
			var y = (e = null, t) => {
				switch (t.type) {
					case C.o:
					case C.n:
						return null;
					case C.m:
						return t.payload;
					default:
						return e
				}
			};
			const k = {};
			var T = (e = k, t) => {
					switch (t.type) {
						case C.o: {
							const {
								subredditId: a,
								fetchedToken: r
							} = t.payload, n = Object(x.d)(a, r);
							return {
								...e,
								[n]: !0
							}
						}
						case C.n:
						case C.m: {
							const {
								subredditId: a,
								fetchedToken: r
							} = t.payload, n = Object(x.d)(a, r);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				P = Object(N.c)({
					error: y,
					pending: T
				});
			const S = {};
			var M = (e = S, t) => {
					switch (t.type) {
						case C.n: {
							const {
								fetchedToken: a,
								subredditId: r
							} = t.payload, n = Object(x.d)(r, a);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				B = a("./src/reddit/actions/inContextModeration.ts");
			var U = (e = null, t) => {
				switch (t.type) {
					case B.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var H = (e = L, t) => {
					switch (t.type) {
						case C.n: {
							const {
								subredditId: e,
								after: a
							} = t.payload;
							return {
								[e]: a
							}
						}
						default:
							return e
					}
				},
				F = a("./node_modules/icepick/icepick.js");
			const R = {};
			var D = (e = R, t) => {
				switch (t.type) {
					case C.l:
					case C.n: {
						const {
							subredditId: a,
							bannedUsers: r
						} = t.payload;
						return Object(F.merge)(e, {
							[a]: r
						})
					}
					case C.s: {
						const {
							subredditId: a,
							userId: r
						} = t.payload;
						return Object(F.unsetIn)(e, [a, r])
					}
					default:
						return e
				}
			};
			var G = (e = null, t) => {
				switch (t.type) {
					case C.r:
					case C.q:
						return null;
					case C.p:
						return t.payload;
					default:
						return e
				}
			};
			var W = (e = !1, t) => {
					switch (t.type) {
						case C.r:
							return !0;
						case C.q:
						case C.p:
							return !1;
						default:
							return e
					}
				},
				z = Object(N.c)({
					error: G,
					pending: W
				});
			var q = (e = null, t) => {
					switch (t.type) {
						case C.r:
						case C.p:
							return null;
						case C.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				K = Object(N.c)({
					api: z,
					result: q
				});
			const Q = {};
			var J = (e = Q, t) => {
					switch (t.type) {
						case C.n: {
							const {
								subredditId: a,
								bannedUserIds: r
							} = t.payload;
							return e[a] ? {
								...e,
								[a]: [...e[a], ...r]
							} : {
								...e,
								[a]: r
							}
						}
						case C.s: {
							const {
								subredditId: a,
								userId: r
							} = t.payload;
							return {
								[a]: e[a].filter(e => e !== r)
							}
						}
						case C.l: {
							const {
								subredditId: a,
								bannedUserIds: r
							} = t.payload, n = r[0];
							return n && e[a] && -1 === e[a].indexOf(n) ? {
								[a]: [n, ...e[a]]
							} : e
						}
						default:
							return e
					}
				},
				V = Object(N.c)({
					api: P,
					fetchedTokens: M,
					inContext: U,
					loadMore: H,
					models: D,
					search: K,
					userOrder: J
				});
			Object(j.a)({
				features: {
					banned: V
				}
			});
			const Y = Object(o.a)(C.o),
				Z = Object(o.a)(C.n),
				X = Object(o.a)(C.m),
				$ = (e, t = {}) => async (a, r, {
					apiContext: n
				}) => {
					const s = r(),
						o = t.after || "",
						d = Object(x.d)(e, o),
						i = s.features.banned.fetchedTokens[d];
					if (s.features.banned.api.pending[d] || i) return;
					a(Y({
						subredditId: e,
						fetchedToken: o
					}));
					const c = s.subreddits.models[e].name,
						l = await v(n(), c, t);
					l.ok ? a(Z({
						...l.body,
						fetchedToken: o
					})) : a(X({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(C.r), te = Object(o.a)(C.q), ae = Object(o.a)(C.p), re = (e, t) => async (a, r, {
					apiContext: n
				}) => {
					const s = r().subreddits.models[e].name,
						o = {
							username: Object(g.a)(t)
						};
					a(ee());
					const d = await v(n(), s, o);
					d.ok ? a(te(d.body)) : a(ae(d.error))
				}, ne = Object(o.a)(C.l), se = Object(o.a)(C.s), oe = (e, t, a) => async (n, o, {
					apiContext: i
				}) => {
					const c = o(),
						m = c.subreddits.models[e].url,
						f = c.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), n(Object(d.h)(a));
					const w = await ((e, t, a) => Object(p.a)(Object(h.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.jb.POST,
						data: {
							api_type: "json",
							ban_reason: a.reason,
							ban_message: a.banMessage,
							duration: a.duration,
							name: a.username,
							note: a.modNote,
							ban_context: a.contextId,
							type: "banned"
						}
					}))(i(), m, t);
					if (w.ok) {
						n(Object(d.e)(a));
						const e = {
							username: t.username
						};
						n(Object(l.f)({
							kind: A.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await v(i(), f, e);
						s.ok && n(ne(s.body))
					} else {
						n(Object(d.f)(a, w.error));
						const e = s()(w, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: A.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (a, n, {
					apiContext: o
				}) => {
					const d = n().subreddits.models[e].url,
						i = await ((e, t, a) => Object(p.a)(Object(h.a)(e, [b.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.jb.POST,
							data: {
								api_type: "json",
								id: a,
								type: "banned"
							}
						}))(o(), d, t);
					if (i.ok) a(se({
						subredditId: e,
						userId: t
					})), a(Object(l.f)({
						kind: A.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(i, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(l.f)({
							kind: A.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (a, r) => {
					const n = r();
					await Promise.all([(async () => {
						if (!Object(E.b)(m.a.BAN_USER)(n) && !Object(O.O)(n, {
								subredditId: e
							})) {
							const t = Object(O.R)(n, {
								subredditId: e
							});
							await a(Object(c.o)(t.name))
						}
					})(), (async () => {
						const r = Object(_.rb)(n, {
							userName: t
						});
						if (!r) return;
						const s = Object(I.h)(n, {
							subredditId: e
						});
						s && s[r.id] || await a($(e, {
							username: t
						}))
					})()]), a(Object(i.i)(m.a.BAN_USER))
				}
		},
		"./src/reddit/components/AwardBadges/AddAwardPill/index.m.less": function(e, t, a) {
			e.exports = {
				addAwardPill: "_3Wf5TsmUR8Qf8nr0fDHjur",
				giftIcon: "eQZZIJf9NTq5MBV2285S2"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPill/index.m.less": function(e, t, a) {
			e.exports = {
				awardPillContainer: "yW-ely1Ik8KTYTO9TSOSa",
				awardPill: "q2KM5tcmhqOBd4ElRihZQ",
				userGiven: "_1HqRbG571qt3Nk2zj_W3TS",
				imageContainer: "_1rwi4ljDNaPtYUiOiXomov",
				count: "_1YpK2GgjHXEnSEetPdXV17",
				awardIcon: "_2lnLb-ItT6LeziBNeQZx8I",
				hidden: "_3JxvBqAeBggcg7vHXhdVlS",
				animationIcon: "_2qKgWPWPiz4EnwPhDH9jaU",
				elasticShrink: "_1nKXGUCyFMbujKJCUr7v1F",
				fadeIn: "_3Unh28GaDqT2GLqHAD02_S"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less": function(e, t, a) {
			e.exports = {
				awardBadges: "_1wgnb6w6OJogtEV2N4B3lD",
				noAwards: "_1pZRAWakamwUD9Urx217oC",
				multiline: "_3c1kr0TjcknQSAP9naDKGv",
				spacer: "_1FZ8jCjLuxoHLtbgJDekEU",
				clickablePlaqueItem: "_2PVXBodfFt50jjk5ydPpWY",
				"focus-visible": "_3JCIceLNhOdJUR_ABw_M2V",
				focusVisible: "_3JCIceLNhOdJUR_ABw_M2V"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less": function(e, t, a) {
			e.exports = {
				buttonContainer: "DInSK-8C_3_wtp8rkyyk_",
				right: "_3h4h05agLr2A_NU_Rf3yCn",
				scrollButton: "_2MU8EpOTDEghV1ecmq37UZ",
				"focus-visible": "_38NFrOkGDKwQs4baFR_XWF",
				focusVisible: "_38NFrOkGDKwQs4baFR_XWF",
				chevronIcon: "uPrjAc1vFe8cn_-JitBDg"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less": function(e, t, a) {
			e.exports = {
				awardBadges: "_3XoW0oYd5806XiOr24gGdb",
				badgeButton: "_1vpnHb2bSTD6BcgVKisnPT",
				visibilityEffect: "_3vGYJIJIswDD8YOAMWGC4N",
				icon: "_3zozqOs5cvNd2uvuIiu2_L",
				showAllButton: "_1tAFPduILh7Zse0gkxT4vj"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less": function(e, t, a) {
			e.exports = {
				awardItem: "_2OYwDdghtXEuTF67C95YLY",
				awardIcon: "n08B7PrU01wzgZYIh-s7N",
				animate: "f18KwJcHh9SCfKw_W3Dm2",
				awardBounce: "_3bDgD_5hXKabLRqOe9sXRi"
			}
		},
		"./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less": function(e, t, a) {
			e.exports = {
				reportStepButton: "_2ke5Q4KsrJWi6sCDENRwI2"
			}
		},
		"./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less": function(e, t, a) {
			e.exports = {
				pill: "AavtiP0APDAhqwl7opcvC",
				iconContainer: "_2NhWk2-d-tn8oC0A-k_Ss-",
				awardIcon: "_20LMDg4_PtezakicbNPSfn",
				awardsPlaqueStyle: "qntP0rU06Z8LVP6TKmQHQ",
				"focus-visible": "qbP9Qnm2Qru28YDgfefpw",
				focusVisible: "qbP9Qnm2Qru28YDgfefpw"
			}
		},
		"./src/reddit/components/AwardBadges/index.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/actions/gold/giveAward.ts"),
				c = a("./src/redditGQL/operations/HideAwardOnTarget.json"),
				l = a("./src/lib/makeActionCreator/index.ts"),
				m = a("./src/lib/makeGqlRequest/index.ts"),
				u = a("./src/reddit/actions/gold/constants.ts"),
				p = a("./src/reddit/actions/toaster.ts"),
				h = a("./src/reddit/models/Toast/index.ts");
			const b = Object(l.a)(u.D),
				f = ({
					awardId: e,
					thingId: t
				}) => async (a, n, {
					gqlContext: s
				}) => {
					a(b({
						awardId: e,
						thingId: t
					}));
					const o = r.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
						hk: "10OvOz"
					});
					try {
						(await ((e, t, a) => Object(m.a)(e, {
							...c,
							variables: {
								awardId: t,
								targetId: a
							}
						}))(s(), e, t)).error && a(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: o
						}))
					} catch (d) {
						a(Object(p.f)({
							kind: h.b.Error,
							duration: p.a,
							text: o
						}))
					}
				};
			var w = a("./src/reddit/actions/gold/modals.ts"),
				v = a("./src/reddit/actions/modal.ts"),
				g = a("./src/reddit/actions/tooltip.ts"),
				x = a("./src/reddit/helpers/correlationIdTracker.ts"),
				A = a("./src/reddit/helpers/isPost.ts"),
				E = a("./src/reddit/helpers/trackers/gild.ts"),
				I = a("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = a("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = a("./src/reddit/models/Gold/Award.ts"),
				C = a("./src/reddit/selectors/activeModalId.ts"),
				j = a("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				N = a("./src/reddit/selectors/gold/awardIcon.ts"),
				y = a("./src/reddit/contexts/Post/index.tsx"),
				k = a("./src/reddit/contexts/User/index.tsx"),
				T = a("./node_modules/lodash/debounce.js"),
				P = a.n(T),
				S = a("./src/lib/classNames/index.ts"),
				M = a("./src/lib/fastdom/index.ts"),
				B = a("./src/reddit/models/Gold/TopAwarded/index.ts"),
				U = a("./src/reddit/icons/fonts/Gift/index.tsx"),
				L = a("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				H = a.n(L);
			var F = s.a.memo(e => s.a.createElement("button", {
					className: Object(S.a)(e.className, H.a.addAwardPill),
					name: r.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, s.a.createElement(U.a, {
					className: H.a.giftIcon
				}))),
				R = a("./src/reddit/helpers/awards/getAwardItemId.ts"),
				D = a("./src/higherOrderComponents/makeAsync.tsx"),
				G = a("./src/lib/loadWithRetries/index.ts");
			var W = Object(D.a)({
					getComponent: () => Object(G.a)(() => a.e("AwardTooltip").then(a.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = a("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				q = a.n(z);
			const K = 3500,
				Q = 500;
			class J extends s.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = s.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: a,
							triggerOverlayAnimation: r
						} = this.props;
						e.id !== _.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (r(a), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, K)))
					}, this.handleOnClick = () => {
						const {
							onAddAward: e,
							award: t
						} = this.props;
						e(t.id === _.g ? void 0 : t.id)
					}, this.handleMouseEnter = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						this.hoverTimer = setTimeout(() => {
							e(t), this.setState({
								hoverStateTriggered: !0
							})
						}, Q)
					}, this.handleMouseLeave = () => {
						const {
							onHideTooltip: e
						} = this.props;
						this.state.hoverStateTriggered && (e(), this.setState({
							hoverStateTriggered: !1
						})), this.hoverTimer && (clearTimeout(this.hoverTimer), this.hoverTimer = void 0)
					}, this.handleHideAward = () => {
						const {
							onHideAward: e,
							award: t
						} = this.props;
						e(t)
					}, this.handleOpenReportFlow = () => {
						const {
							onOpenReportFlow: e,
							award: t
						} = this.props;
						e(t)
					}, this.state = {
						hoverStateTriggered: !1,
						shouldAnimate: !1,
						userGiven: !1
					}
				}
				componentDidMount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.addEventListener("awardAdded", this.triggerAnimation)
				}
				componentWillUnmount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.removeEventListener("awardAdded", this.triggerAnimation)
				}
				render() {
					const {
						award: e,
						className: t,
						count: a,
						giveAwardAnimationIconUrl: r,
						pillIconUrl: n,
						post: o,
						tooltipId: d
					} = this.props, {
						userGiven: i,
						shouldAnimate: c
					} = this.state, l = Object(R.a)(e.id, o.id);
					return s.a.createElement("span", {
						className: q.a.awardPillContainer,
						id: d,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, s.a.createElement("button", {
						className: Object(S.a)(t, q.a.awardPill, {
							[q.a.userGiven]: i
						}),
						onClick: this.handleOnClick
					}, s.a.createElement("span", {
						className: q.a.imageContainer
					}, s.a.createElement("img", {
						alt: e.name,
						className: Object(S.a)(q.a.awardIcon, {
							[q.a.hidden]: c
						}),
						id: l,
						ref: this.imageRef,
						src: n
					}), c && s.a.createElement("img", {
						alt: e.name,
						className: q.a.animationIcon,
						src: r
					})), s.a.createElement("span", {
						className: q.a.count
					}, a.toLocaleString())), s.a.createElement(W, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: o,
						tooltipId: d
					}))
				}
			}
			var V = J,
				Y = a("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Z = a("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				X = a.n(Z);
			var $ = s.a.memo(e => {
				const {
					className: t,
					direction: a,
					onClick: n
				} = e, o = "right" === a, d = r.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), i = r.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return s.a.createElement("div", {
					className: Object(S.a)(X.a.buttonContainer, {
						[X.a.right]: o
					}, t)
				}, s.a.createElement("button", {
					className: X.a.scrollButton,
					name: o ? i : d,
					onClick: n
				}, s.a.createElement(Y.a, {
					className: X.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let a = `${Object(A.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (a = `${a}--${t}`), a
			};
			var te = a("./src/reddit/helpers/trackers/topAwarded.ts"),
				ae = a("./src/reddit/hooks/useTracking.ts"),
				re = a("./src/reddit/actions/gold/topAwarded.ts"),
				ne = a("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				se = a("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				oe = a.n(se);
			const {
				fbt: de
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var ie = e => {
					const t = Object(o.d)(),
						a = Object(ae.a)();
					return s.a.createElement("button", {
						className: Object(S.a)(oe.a.pill, e.className, {
							[oe.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: r
							} = e.post;
							a(Object(te.a)(r)), t(Object(re.b)(r))
						}
					}, s.a.createElement("span", {
						className: oe.a.iconContainer
					}, s.a.createElement(ne.a, {
						className: oe.a.awardIcon
					})), s.a.createElement("span", null, de._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = a("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = a.n(ce);
			const me = 11,
				ue = 100;
			class pe extends s.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = s.a.createRef(), this.handleResize = P()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: a
						} = this.props, r = t || me;
						if (e.length < r - 4) return;
						if (a) return;
						const n = this.plaqueRef.current;
						if (!n) return;
						const s = n.scrollLeft > 0,
							o = n.scrollLeft < n.scrollWidth - n.clientWidth;
						this.setState({
							canScrollLeft: s,
							canScrollRight: o
						})
					}, this.handleScrollLeft = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							a = e.scrollLeft - (t - ue);
						this.scrollPlaqueTo(a)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							a = e.scrollLeft + (t - ue);
						this.scrollPlaqueTo(a)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), M.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const a = document.getElementById(e);
							if (!a) return;
							const r = t.getBoundingClientRect(),
								n = a.getBoundingClientRect();
							if (n.left < r.left || n.right > r.right) {
								const e = n.left + (t.scrollLeft - r.left) - ue;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || me,
						a = e.awards.length > t;
					this.state = {
						canScrollLeft: !1,
						canScrollRight: a && !e.multiline
					}
				}
				shouldComponentUpdate(e, t) {
					if (this.props.awards !== e.awards) {
						const t = this.props.awards.reduce((e, t) => (e[t.id] = (this.props.post.awardCountsById || {})[t.id], e), {});
						if (e.awards.reduce((a, r) => {
								const n = t[r.id],
									s = (e.post.awardCountsById || {})[r.id];
								return a || n !== s
							}, !1)) return !0
					}
					if (this.props.post.id !== e.post.id) return !0;
					for (const a in this.state)
						if (this.state[a] !== t[a]) return !0;
					return this.props.post.topAwardedType !== e.post.topAwardedType
				}
				componentDidUpdate(e) {
					this.props.awards.length !== e.awards.length && this.handlePlaquePositionChange()
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				scrollPlaqueTo(e) {
					const {
						prefersReducedMotion: t
					} = this.props, a = t ? "auto" : "smooth", r = this.plaqueRef.current;
					if (!r) return;
					const n = r.clientWidth,
						s = r.scrollWidth - n,
						o = Math.min(Math.max(0, e), s);
					this.setState({
						canScrollLeft: o > 0,
						canScrollRight: o < s
					}), r.scrollTo({
						left: o,
						top: 0,
						behavior: a
					})
				}
				render() {
					const {
						awards: e,
						className: t,
						hideAddAwardButton: a,
						hideTopAwardedBadge: r,
						icons: n,
						isInEconLeaderboardsExperiment: o,
						multiline: d,
						post: i,
						prefersReducedMotion: c,
						onAddAward: l,
						onHideAward: m,
						onHideTooltip: u,
						onOpenReportFlow: p,
						onShowTooltip: h,
						tooltipType: b
					} = this.props, {
						canScrollLeft: f,
						canScrollRight: w
					} = this.state, v = e.length > 0, g = ee(i.id, b);
					return s.a.createElement("div", {
						className: Object(S.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !v,
							[le.a.multiline]: d
						}),
						ref: this.plaqueRef
					}, f && s.a.createElement($, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (i.topAwardedType === B.a.Active || i.topAwardedType === B.a.Inactive) && !r && o && s.a.createElement(ie, {
						awardsPlaqueStyle: !0,
						post: i
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = i, a = t[e.id], r = n.icon32[e.id], o = n.icon128[e.id];
						return s.a.createElement(V, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: a,
							giveAwardAnimationIconUrl: o,
							key: e.id,
							onAddAward: l,
							onHideAward: m,
							onOpenReportFlow: p,
							onHideTooltip: u,
							onShowTooltip: h,
							pillIconUrl: r,
							post: i,
							prefersReducedMotion: c,
							tooltipId: `${g}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !a && s.a.createElement(F, {
						className: le.a.clickablePlaqueItem,
						onAddAward: l
					}), !d && s.a.createElement("div", {
						className: le.a.spacer
					}), w && s.a.createElement($, {
						direction: "right",
						onClick: this.handleScrollRight
					}))
				}
			}
			var he = pe,
				be = a("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				fe = a.n(be);
			const {
				fbt: we
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class ve extends s.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = s.a.createRef(), this.handleAwardAddedEvent = () => {
						this.setState({
							animate: !0
						}), setTimeout(() => this.setState({
							animate: !1
						}), 1e3)
					}, this.onShowTooltip = () => {
						const {
							onShowTooltip: e,
							tooltipId: t
						} = this.props;
						return e(t)
					}, this.state = {
						animate: !1
					}
				}
				componentDidMount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.addEventListener("awardAdded", this.handleAwardAddedEvent)
				}
				componentWillUnmount() {
					const e = this.imageRef ? this.imageRef.current : null;
					e && e.removeEventListener("awardAdded", this.handleAwardAddedEvent)
				}
				renderModAwardName() {
					const {
						award: e,
						count: t
					} = this.props;
					return s.a.createElement(s.a.Fragment, null, t > 1 && " • ", we._("{award-name} Award", [we._param("award-name", e.name)], {
						hk: "2QpjYF"
					}))
				}
				render() {
					const {
						award: e,
						className: t,
						count: a,
						iconClassName: r,
						iconUrl: n,
						onHideAward: o,
						onHideTooltip: d,
						onOpenReportFlow: i,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: m
					} = this.props;
					if (a <= 0) return null;
					const u = e.awardType === _.f.Moderator,
						p = Object(R.a)(e.id, c.id),
						h = "container" === m;
					return s.a.createElement("span", {
						className: Object(S.a)(fe.a.awardItem, t),
						id: h ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: d
					}, s.a.createElement("span", {
						id: h ? "" : l
					}, s.a.createElement("img", {
						alt: e.name,
						className: Object(S.a)(fe.a.awardIcon, {
							[fe.a.animate]: this.state.animate
						}, r),
						id: p,
						ref: this.imageRef,
						src: n
					})), s.a.createElement("span", null, a > 1 && a, u && this.renderModAwardName()), s.a.createElement(W, {
						award: e,
						onHideAward: () => o(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => i(e)
					}))
				}
			}
			var ge = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				xe = a("./src/reddit/icons/fonts/index.tsx"),
				Ae = a("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Ee = a.n(Ae);
			var Ie = e => {
				const {
					className: t,
					onClick: a
				} = e;
				return s.a.createElement("button", {
					className: Object(S.a)(t, Ee.a.badgeButton, Ee.a.visibilityEffect),
					onClick: a
				}, s.a.createElement(xe.a, {
					name: "award",
					className: Ee.a.icon
				}))
			};
			var Oe, _e = e => {
					const {
						awards: t,
						className: a,
						hideBadgeButton: n,
						hideTopAwardedBadge: o,
						icons: d,
						isInEconLeaderboardsExperiment: i,
						onAddAward: c,
						onHideAward: l,
						onOpenReportFlow: m,
						onHideTooltip: u,
						onShowAllAwards: p,
						onShowTooltip: h,
						showAllAwards: b,
						tooltipType: f,
						thing: w
					} = e, v = ee(w.id, f), g = `${v}-view-all`;
					let x = [];
					x = b ? t : t.length > 5 ? t.slice(0, 4) : t;
					const E = !n && w.isGildable && t.length > 0,
						I = t.length > x.length ? t.slice(x.length).reduce((e, t) => e + (w.awardCountsById && w.awardCountsById[t.id] || 0), 0) : 0,
						O = r.fbt._("& {hidden award count} More", [r.fbt._param("hidden award count", I.toLocaleString())], {
							hk: "1OnmAi"
						});
					return s.a.createElement("div", {
						className: Object(S.a)(Ee.a.awardBadges, a)
					}, Object(A.a)(w.id) && (w.topAwardedType === B.a.Active || w.topAwardedType === B.a.Inactive) && !o && i && s.a.createElement(ie, {
						post: w
					}), x.map(e => {
						const t = w.awardCountsById ? w.awardCountsById[e.id] : 0,
							a = d.icon32[e.id];
						return s.a.createElement(ve, {
							award: e,
							count: t,
							iconUrl: a,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: m,
							onHideTooltip: u,
							onShowTooltip: h,
							postOrComment: w,
							tooltipId: `${v}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), I > 0 && s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
						"data-click-id": "awards",
						id: g,
						className: Ee.a.showAllButton,
						onClick: p,
						onMouseEnter: () => h(g),
						onMouseLeave: u
					}, O), s.a.createElement(ge.c, {
						tooltipId: g,
						text: r.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), E && s.a.createElement(Ie, {
						onClick: c
					}))
				},
				Ce = a("./src/reddit/actions/gold/reportAward.ts"),
				je = a("./src/reddit/controls/Button/index.tsx"),
				Ne = a("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				ye = a.n(Ne);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(Oe || (Oe = {}));
			var ke = e => {
				const t = Object(ae.a)(),
					[a, d] = Object(n.useState)(e.award.awardType === _.f.Global ? Oe.FLAG_USAGE : Oe.BEGIN),
					i = Object(o.d)(),
					c = () => {
						a === Oe.BEGIN ? t(Object(E.clickCancelAwardReportFlow)(e.award, e.thing.id)) : a === Oe.REPORT_COMMUNITY_AWARD ? t(Object(E.clickCancelReportAward)(e.award, e.thing.id)) : a === Oe.FLAG_USAGE && t(Object(E.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(E.clickConfirmReportAward)(e.award, e.thing.id)), i(Object(Ce.a)(e.award)), e.onClose()
					},
					m = () => {
						t(Object(E.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), i(Object(p.f)(Object(p.e)(r.fbt._("{award name} Award successfully flagged for review.", [r.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), h.b.SuccessAward))), e.onClose()
					},
					u = s.a.createElement(s.a.Fragment, null, s.a.createElement(je.o, {
						onClick: () => {
							t(Object(E.clickReportAward)(e.award, e.thing.id)), d(Oe.REPORT_COMMUNITY_AWARD)
						},
						className: ye.a.reportStepButton
					}, r.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), s.a.createElement(je.o, {
						onClick: () => {
							t(Object(E.clickFlagAwardUsage)(e.award, e.thing.id)), d(Oe.FLAG_USAGE)
						},
						className: ye.a.reportStepButton
					}, r.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (a) {
					case Oe.BEGIN:
						return s.a.createElement(I.a, {
							withOverlay: !0,
							hideCancelButton: !0,
							onConfirm: c,
							onCancel: c,
							onClose: c,
							headerText: r.fbt._("What's Wrong?", null, {
								hk: "JqSAe"
							}),
							actionText: r.fbt._("Cancel", null, {
								hk: "370pdF"
							}),
							modalText: u
						});
					case Oe.REPORT_COMMUNITY_AWARD:
						return s.a.createElement(I.a, {
							withOverlay: !0,
							onConfirm: l,
							onCancel: c,
							onClose: c,
							headerText: r.fbt._("Report Community Award", null, {
								hk: "3T6dhH"
							}),
							actionText: r.fbt._("Report Award", null, {
								hk: "dHwed"
							}),
							modalText: r.fbt._("Do you want to report the {award name} Award?", [r.fbt._param("award name", e.award.name)], {
								hk: "4by1t"
							})
						});
					case Oe.FLAG_USAGE:
						return s.a.createElement(I.a, {
							withOverlay: !0,
							onConfirm: m,
							onCancel: c,
							onClose: c,
							headerText: r.fbt._("Flag Award Usage", null, {
								hk: "395heU"
							}),
							actionText: r.fbt._("Flag Award Usage", null, {
								hk: "24B1WV"
							}),
							modalText: r.fbt._("Is the {award name} Award inappropriate on this content? Reddit uses this information to improve the awarding experience and remove awards that are being misused.", [r.fbt._param("award name", e.award.name)], {
								hk: "3P3dMP"
							})
						})
				}
			};
			const Te = [32, 128],
				Pe = Object(d.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(C.a)(e),
					isInEconLeaderboardsExperiment: j.b
				}),
				Se = e => Object(A.a)(e.id) ? e.postId : e.id,
				Me = Object(o.b)(Pe, (e, {
					thing: t
				}) => ({
					hideAward: a => e(f({
						awardId: a,
						thingId: Se(t)
					})),
					onAddAward: (a, r) => {
						const n = Se(t);
						return e(Object(w.d)({
							awardId: r,
							correlationId: a,
							thingId: n
						}))
					},
					onHideTooltip: () => e(Object(g.i)()),
					onShowTooltip: t => e(Object(g.f)({
						tooltipId: t
					})),
					onToggleHideAwardModal: () => e(Object(v.i)("AwardBadges--Modal--HideAwardConfirmation")),
					triggerOverlayAnimation: () => e(Object(i.b)(Se(t)))
				}));
			class Be extends s.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(x.e)(x.a.GildingFlow, !0),
							{
								onAddAward: r,
								sendEvent: n,
								thing: s
							} = this.props;
						r(t, e);
						const {
							clickAddAward: o
						} = await Promise.resolve().then(a.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(o(s.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: r,
							thing: n
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: s
						} = await Promise.resolve().then(a.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(s(e, n.id)), r()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: r
						} = this.state, {
							clickConfirmHideAward: n
						} = await Promise.resolve().then(a.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						r && (e(n(r, t.id)), this.props.hideAward(r.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: r
						} = this.state, {
							clickCancelHideAward: n
						} = await Promise.resolve().then(a.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						r && e(n(r, t.id))
					}, this.handleShowTooltip = e => {
						const {
							onShowTooltip: t
						} = this.props;
						t(e)
					}, this.handleHideTooltip = () => {
						const {
							onHideTooltip: e
						} = this.props;
						e()
					}, this.handleOpenReportFlow = e => {
						this.props.sendEvent(Object(E.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
							reportingAward: e
						})
					}, this.state = {
						selectedAward: null,
						showAllAwards: !1,
						reportingAward: null
					}
				}
				render() {
					const {
						allAwards: e,
						awardsCountInView: t,
						awardsPlaqueStyle: a,
						className: n,
						currentUser: o,
						hideCta: d,
						hideTopAwardedBadge: i,
						isConfirmModalOpen: c,
						isInEconLeaderboardsExperiment: l,
						isLoggedIn: m,
						isPostDetail: u,
						onHideTooltip: p,
						onShowTooltip: h,
						onToggleHideAwardModal: b,
						prefs: f,
						thing: w,
						triggerOverlayAnimation: v,
						tooltipType: g
					} = this.props, {
						showAllAwards: x
					} = this.state, E = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, O = Object.keys(w.awardCountsById || {}), C = Object(_.r)(O.map(t => e[t]).filter(Boolean)), j = {};
					for (const r of Te) {
						const e = {};
						j[`icon${r}`] = e;
						for (const t of C) e[t.id] = Object(N.c)({
							award: t,
							postOrComment: w,
							size: r,
							prefersReducedMotion: E
						})
					}
					const y = !!o && o.id === w.authorId;
					return s.a.createElement(s.a.Fragment, null, a ? s.a.createElement(he, {
						awards: C,
						awardsCountInView: t,
						className: n,
						hideAddAwardButton: d || !w.isGildable || y,
						hideTopAwardedBadge: i,
						icons: j,
						isInEconLeaderboardsExperiment: l,
						multiline: !!u,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: this.handleHideTooltip,
						onShowTooltip: this.handleShowTooltip,
						post: w,
						prefersReducedMotion: E,
						tooltipType: g,
						triggerOverlayAnimation: v
					}) : s.a.createElement(_e, {
						awards: C,
						className: n,
						hideBadgeButton: d || !m,
						hideTopAwardedBadge: i,
						icons: j,
						isInEconLeaderboardsExperiment: l,
						onAddAward: this.handleAddAward,
						onHideAward: this.handleHideAward,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideTooltip: p,
						onShowAllAwards: this.handleShowAllAwards,
						onShowTooltip: h,
						showAllAwards: x || !!u,
						thing: w,
						tooltipType: g
					}), c && o && this.state.selectedAward && s.a.createElement(I.a, {
						actionText: r.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: y ? Object(A.a)(w.id) ? r.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : r.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(A.a)(w.id) ? r.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : r.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [r.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: b,
						withOverlay: !0
					}), this.state.reportingAward && s.a.createElement(ke, {
						award: this.state.reportingAward,
						thing: w,
						onClose: () => this.setState({
							reportingAward: null
						})
					}))
				}
			}
			t.a = Object(k.c)(Object(y.e)(Me(Object(O.c)(Be))))
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var r, n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/reddit/actions/chat/toggle.ts"),
				i = a("./src/reddit/components/TrackingHelper/index.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: a,
				sendEvent: n,
				contextId: o,
				priority: d,
				Icon: i,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: h,
				onAddUserToQuickReplyList: b,
				children: f
			}) => {
				return s.a.createElement(c.t, {
					onClick: t => {
						if (h && h(t), e(), p === r.awardNotification) return b();
						n(Object(l.b)(o))
					},
					className: a,
					text: t,
					priority: d,
					Icon: i,
					redditStyle: m,
					isFullWidth: u
				}, f)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: a
			}) => ({
				onStartChat: () => {
					e(Object(d.b)(a, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(d.a)(a))
				}
			}));
			t.b = u(Object(i.c)(m))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, a) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = a("./src/reddit/controls/TextButton/index.tsx"),
				c = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = a("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = a.n(l);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => s.a.createElement(d.e, null, s.a.createElement(d.i, null, s.a.createElement(c.a, null, s.a.createElement(d.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(d.b, null)))), s.a.createElement(d.l, null, s.a.createElement(d.p, {
				className: m.a.ModalText
			}, e.modalText)), s.a.createElement(d.g, null, !e.hideCancelButton && s.a.createElement(d.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(d.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less": function(e, t, a) {
			e.exports = {
				awarder: "_3WyMnKxtBhvXwCnMKXO7BT"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1NrpBgoPY-jeGboQdLnvIe",
				winner: "_3nP2WbvmZaXT9gXgbtpMki",
				flexContainer: "ncY6G2KCOOZsDVUyPD9VW"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/TopAwardersModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/constants/modals.ts"),
				l = a("./src/reddit/helpers/correlationIdTracker.ts"),
				m = a("./src/reddit/helpers/trackers/topAwarded.ts"),
				u = a("./src/reddit/hooks/useTracking.ts"),
				p = a("./src/reddit/actions/gold/modals.ts"),
				h = a("./src/reddit/contexts/InsideOverlay.tsx"),
				b = a("./src/reddit/contexts/Post/index.tsx"),
				f = a("./src/reddit/models/Gold/TopAwarded/index.ts"),
				w = a("./src/reddit/selectors/gold/topAwarded.ts"),
				v = a("./src/reddit/selectors/posts.ts"),
				g = a("./src/reddit/selectors/user.ts"),
				x = a("./src/reddit/actions/gold/topAwarded.ts"),
				A = a("./src/reddit/actions/modal.ts"),
				E = a("./src/reddit/components/AwardBadges/index.tsx"),
				I = a("./src/reddit/components/PostTopMeta/index.tsx"),
				O = a("./src/reddit/controls/Button/index.tsx"),
				_ = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = a("./src/reddit/icons/fonts/Gift/index.tsx"),
				j = a("./src/reddit/icons/svgs/Close/index.tsx"),
				N = a("./src/reddit/icons/svgs/TopAwarded/index.tsx");
			var y = e => n.a.createElement("svg", {
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
				k = a("./node_modules/lodash/noop.js"),
				T = a.n(k),
				P = a("./src/lib/currency/currencies.ts"),
				S = a("./src/lib/localizeCurrency/index.ts"),
				M = a("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				B = a("./src/reddit/components/UserIcon/index.tsx"),
				U = a("./src/reddit/hooks/useLocale.ts"),
				L = a("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less"),
				H = a.n(L);
			const {
				fbt: F
			} = a("./node_modules/fbt/lib/FbtPublic.js"), R = (e, t) => t ? F._("{userName} (you)", [F._param("userName", e)], {
				hk: "vsIHp"
			}) : e;
			var D = function(e) {
					const {
						awarder: t,
						className: a,
						currentUserId: r,
						onCtaClick: s,
						showCta: o
					} = e, {
						rank: d,
						redditor: c,
						score: l
					} = t, m = Object(U.a)(), u = !c.profile;
					return n.a.createElement("div", {
						className: Object(i.a)(H.a.container, a)
					}, n.a.createElement("div", {
						className: H.a.rank
					}, d || "-"), n.a.createElement(B.a, {
						className: H.a.icon,
						iconUrl: c.icon ? c.icon.url : void 0,
						isNSFW: !!c.profile && c.profile.isNsfw,
						userName: c.name
					}), n.a.createElement("div", {
						className: H.a.text
					}, n.a.createElement("h3", {
						className: H.a.name
					}, u ? c.name : n.a.createElement(M.a, {
						user: c.name,
						tooltipId: `topawarder--userhovercard--${c.name}`,
						sendHoverCardEvent: T.a
					}, R(c.name, c.id === r))), l > 0 && n.a.createElement("span", {
						className: H.a.score
					}, Object(S.b)(l, {
						locale: m,
						type: P.b.Reddit,
						currency: P.a
					}))), o && n.a.createElement("button", {
						className: H.a.cta,
						onClick: s
					}, n.a.createElement(C.a, {
						className: H.a.giftIcon
					}), F._("Award", null, {
						hk: "4BW9Zq"
					})))
				},
				G = a("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less"),
				W = a.n(G);
			const z = 8;
			var q = function(e) {
					const {
						awarders: t,
						className: a,
						currentRank: r,
						currentUserId: s,
						hideAddAwardButton: o,
						onGild: d
					} = e;
					return t.length ? n.a.createElement("div", {
						className: Object(i.a)(a, W.a.container)
					}, r && (!r.rank || r.rank > z) && n.a.createElement(D, {
						className: W.a.awarder,
						currentUserId: s,
						awarder: r,
						key: r.redditor.id,
						showCta: !o,
						onCtaClick: d
					}), t.map(e => n.a.createElement(D, {
						className: W.a.awarder,
						currentUserId: s,
						awarder: e,
						key: e.redditor.id,
						showCta: !o && s === e.redditor.id,
						onCtaClick: d
					}))) : null
				},
				K = a("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				Q = a("./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less"),
				J = a.n(Q);
			var V = function(e) {
					const {
						showScore: t,
						awarder: a,
						className: r,
						rank: s
					} = e, o = a && !a.redditor.profile, d = a ? a.redditor.name : "—";
					return n.a.createElement("div", {
						className: Object(i.a)(r, J.a.winner, J.a[`winner${s}`], {
							[J.a.winnerPlaceholder]: !a
						})
					}, n.a.createElement("div", {
						className: J.a.iconContainer
					}, n.a.createElement("div", {
						className: J.a.iconWithBorder
					}, a && n.a.createElement(B.a, {
						className: J.a.icon,
						iconUrl: a.redditor.icon ? a.redditor.icon.url : void 0,
						isNSFW: !!a.redditor.profile && a.redditor.profile.isNsfw,
						userName: d
					})), n.a.createElement("div", {
						className: J.a.rank
					}, s)), n.a.createElement("h3", {
						className: J.a.name
					}, a && !o ? n.a.createElement(M.a, {
						user: d,
						tooltipId: `topawarderwinner-userhovercard--${d}`,
						sendHoverCardEvent: T.a,
						wrapperClassName: J.a.hoverCardWrapper
					}, d) : d), a && t && n.a.createElement("div", {
						className: J.a.score
					}, n.a.createElement(K.a, {
						className: J.a.coinIcon
					}), a.score))
				},
				Y = a("./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less"),
				Z = a.n(Y);
			var X = function(e) {
					const {
						awarders: t,
						className: a,
						showScores: r
					} = e;
					if (!t.length) return null;
					const s = [t[0], t[1] || void 0, t[2] || void 0];
					return n.a.createElement("div", {
						className: Object(i.a)(a, Z.a.container, {
							[Z.a.flexContainer]: s.length < 3
						})
					}, s.map((e, t) => n.a.createElement(V, {
						showScore: r,
						className: Z.a.winner,
						awarder: e,
						rank: t + 1,
						key: t
					})))
				},
				$ = a("./src/reddit/components/Econ/TopAwardersModal/index.m.less"),
				ee = a.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ae
			} = a("./node_modules/fbt/lib/FbtPublic.js"), re = 7, ne = Object(o.a)(e => e, w.a, w.c, w.e, g.k, (e, t, a, r, n) => {
				if (!t) return {
					anonymousRank: void 0,
					currentPostId: t,
					currentRank: void 0,
					currentUser: n,
					error: a,
					list: void 0,
					pending: r,
					post: null
				};
				const s = Object(v.H)(e, {
						postId: t
					}),
					o = Object(w.b)(e, t),
					d = Object(w.d)(e, t),
					i = [];
				let c, l = -1;
				return d && d.forEach((e, t) => {
					if (!e.redditor.profile) return c = e, void(l = t);
					const a = l < 0 ? e : {
						...e,
						rank: e.rank - 1
					};
					i.push(a)
				}), {
					anonymousRank: c,
					currentPostId: t,
					currentRank: o,
					currentUser: n,
					error: a,
					list: i,
					pending: r,
					post: s
				}
			}), se = Object(s.b)(ne);
			const oe = Object(d.a)(se(Object(h.b)((function(e) {
				const {
					anonymousRank: t,
					currentPostId: a,
					currentRank: o,
					currentUser: d,
					post: i,
					list: h,
					pending: w
				} = e, v = Object(s.d)(), g = Object(u.a)();
				Object(r.useEffect)(() => {
					a && v(Object(x.a)(a))
				}, [a, v]), Object(r.useEffect)(() => {
					a && g(Object(m.c)(a))
				}, [a, g]);
				const k = () => v(Object(A.g)(c.a.ECON_TOP_AWARDERS)),
					T = () => {
						if (a) {
							const e = Object(l.e)(l.a.GildingFlow, !0);
							g(Object(m.b)()), v(Object(p.d)({
								thingId: a,
								correlationId: e
							}))
						}
					};
				if (!a || !i) return k(), null;
				const P = d && d.id === i.authorId,
					S = !i.isGildable || !!P,
					M = i.topAwardedType === f.a.Active,
					B = i.topAwardedType === f.a.Inactive,
					U = !w && !!h && !!h.length,
					L = !w && h && !h.length && i && M;
				return n.a.createElement("div", {
					className: ee.a.inner
				}, n.a.createElement("div", {
					className: ee.a.modalHeader
				}, n.a.createElement(j.a, {
					className: ee.a.closeIcon,
					onClick: k
				}), n.a.createElement("h3", {
					className: ee.a.title
				}, ae._("Top Awarders", null, {
					hk: "3hzpI8"
				}))), n.a.createElement("div", {
					className: ee.a.modalContent
				}, n.a.createElement("div", {
					className: ee.a.awardBadgesContainer
				}, n.a.createElement(b.a, {
					postId: i.id
				}, n.a.createElement(E.a, {
					awardsCountInView: re,
					awardsPlaqueStyle: !0,
					hideCta: !0,
					hideTopAwardedBadge: !0,
					tooltipType: I.c.TopAwardedModal,
					thing: i
				}))), w && n.a.createElement(_.a, {
					className: ee.a.loader,
					sizePx: 60
				}), U && B && o && 1 === o.rank && n.a.createElement("div", {
					className: ee.a.youWon
				}, ae._("You won 1st place!", null, {
					hk: "1MxirM"
				}), n.a.createElement(y, {
					className: ee.a.youWonIcon
				})), U && n.a.createElement(X, {
					className: ee.a.winners,
					awarders: h,
					showScores: B
				}), U && B && (!o || o && 1 !== o.rank) && n.a.createElement("div", {
					className: ee.a.info
				}, n.a.createElement("h3", {
					className: ee.a.infoTitle
				}, ae._("Top Awarded Post", null, {
					hk: "1BJ1We"
				})), n.a.createElement("span", {
					className: ee.a.infoDesc
				}, ae._("This is a historic Top Awarded post. Give Awards to newer posts to add your name to the list!", null, {
					hk: "2U5vPa"
				})), n.a.createElement(N.a, {
					className: ee.a.topAwardedIcon
				})), L && n.a.createElement("div", {
					className: ee.a.info
				}, n.a.createElement(N.a, {
					className: ee.a.topAwardedIcon
				}), n.a.createElement("h3", {
					className: ee.a.infoTitle
				}, ae._("Get on the board", null, {
					hk: "RVDeW"
				})), n.a.createElement("span", {
					className: ee.a.infoDesc
				}, ae._("Award publicly and your username will show up on this leaderboard!", null, {
					hk: "3reZYa"
				})), n.a.createElement(O.l, {
					className: ee.a.cta,
					onClick: T
				}, n.a.createElement(C.a, {
					className: ee.a.giftIcon
				}), ae._("Give Award", null, {
					hk: "2sa45i"
				}))), U && i && M && n.a.createElement(q, {
					awarders: h,
					className: ee.a.list,
					currentRank: o,
					currentUserId: d && d.id,
					hideAddAwardButton: S,
					onGild: T
				}), !w && M && t && n.a.createElement("div", {
					className: ee.a.anonymousRank
				}, ae._("Anonymous redditors have awarded for {score} Coins", [ae._param("score", t.score.toLocaleString())], {
					hk: "11BYuy"
				}))), n.a.createElement("div", {
					className: ee.a.modalFooter
				}))
			}))));
			t.default = e => n.a.createElement(oe, te({}, e, {
				className: Object(i.a)(e.className, ee.a.modal)
			}))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/controls/ImageInput/index.tsx"),
				i = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = a("./src/reddit/icons/fonts/index.tsx"),
				l = a("./src/reddit/models/ApiRequestState/index.ts"),
				m = a("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = a("./src/reddit/components/EditableImage/index.m.less"),
				p = a.n(u);
			const {
				fbt: h
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: a,
				isProfileCard: r,
				isLoading: u,
				imageUrl: h,
				onFileSelected: b
			}) => {
				const f = Object(s.e)(m.a);
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.Container, a)
				}, n.a.createElement("label", {
					className: p.a.HitBox
				}, n.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, h ? n.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: h
				}) : t), n.a.createElement(d.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						b(e, t)
					},
					isPending: f ? u : void 0
				}), !u && n.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: r
					})
				}, n.a.createElement(c.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), u && n.a.createElement(i.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				d = a("./src/reddit/actions/snoovatarModal.ts"),
				i = a("./src/reddit/actions/tooltip.ts"),
				c = a("./src/reddit/selectors/gold/awardIcon.ts"),
				l = a("./src/reddit/selectors/meta.ts"),
				m = a("./src/reddit/selectors/moderatorPermissions.ts"),
				u = a("./src/reddit/selectors/profile.ts"),
				p = a("./src/reddit/selectors/structuredStyles.ts"),
				h = a("./src/reddit/selectors/subreddit.ts"),
				b = a("./src/reddit/selectors/tooltip.ts"),
				f = a("./src/reddit/selectors/user.ts"),
				w = a("./src/reddit/selectors/userFlair.ts"),
				v = a("./src/reddit/selectors/userPrefs.ts"),
				g = a("./node_modules/fbt/lib/FbtPublic.js"),
				x = a("./src/config.ts"),
				A = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = a("./src/lib/lessComponent.tsx"),
				I = a("./src/lib/prettyPrintNumber/index.ts"),
				O = a("./src/reddit/components/ChatButton/index.tsx"),
				_ = a("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = a("./src/reddit/components/SubscribeButton/index.tsx"),
				N = a("./src/reddit/components/UserIcon/index.tsx"),
				y = a("./src/reddit/endpoints/profile/info.ts"),
				k = a("./src/reddit/helpers/trackers/authorHovercard.ts"),
				T = a("./src/reddit/icons/fonts/Info/index.tsx"),
				P = a("./src/reddit/icons/svgs/Admin/index.tsx");
			var S = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				M = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = a("./src/reddit/models/Gold/Award.ts"),
				U = a("./src/reddit/models/User/index.ts"),
				L = a("./src/reddit/components/HumanDate/index.tsx"),
				H = a("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				F = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				R = a("./src/reddit/actions/inContextModeration.ts"),
				D = a("./src/reddit/actions/modal.ts"),
				G = a("./src/reddit/actions/subredditModeration/ban.ts"),
				W = a("./src/reddit/constants/modals.ts"),
				z = a("./src/reddit/components/Hovercards/helpers.ts"),
				q = a("./src/reddit/icons/fonts/index.tsx"),
				K = a("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Q = a("./src/reddit/selectors/bannedUser.ts"),
				J = a("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				V = a.n(J);
			const {
				fbt: Y
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Z = Object(o.c)({
				hasModMailPermissions: Object(m.b)(K.c.mail),
				isUserBanned: (e, t) => !!Object(Q.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.rb)(e, {
					userName: t.username
				})
			});
			class X extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: a,
						isUserBanned: r,
						onUnbanUser: s,
						sendEvent: o,
						toggleBanModal: d,
						toggleMuteModal: i
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, r ? n.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(k.e(t))
						}
					}, n.a.createElement(q.a, {
						name: "ban",
						isFilled: !0,
						className: V.a.icon
					}), Y._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							d(), o(k.a(t))
						}
					}, n.a.createElement(q.a, {
						name: "ban",
						className: V.a.icon
					}), Y._("Ban User", null, {
						hk: "3OhuLx"
					})), a && n.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), o(k.d(t))
						}
					}, n.a.createElement(q.a, {
						name: "mod_mute",
						className: V.a.icon
					}), Y._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(s.b)(Z, (e, {
					username: t,
					subredditId: a,
					contextId: r
				}) => ({
					onUnbanUser: t => e(Object(G.e)(a, t)),
					requestUserBanInfo: () => e(Object(G.c)(a, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(R.c)({
							username: t,
							subredditId: a,
							contextId: r
						})), e(Object(G.a)(a, t))
					},
					toggleMuteModal: () => {
						e(Object(R.d)({
							username: t,
							subredditId: a,
							contextId: r
						})), e(Object(D.i)(W.a.MUTE_USER))
					}
				}))(X),
				ee = a("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var ae = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(k.c(e.contextId))
					}
				}, n.a.createElement(q.a, {
					name: "tag",
					className: V.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				re = a("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ne = a.n(re);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = E.a.wrapped(N.a, "UserIcon", ne.a),
				de = E.a.wrapped(j.a, "SubscribeButton", ne.a),
				ie = E.a.wrapped(O.b, "ChatButton", ne.a),
				ce = E.a.wrapped(S, "KarmaIcon", ne.a),
				le = E.a.wrapped(M.a, "PremiumIcon", ne.a),
				me = E.a.wrapped(A.a, "UserNameLink", ne.a),
				ue = E.a.div("UserNameMetaData", ne.a),
				pe = E.a.div("MetaDataItem", ne.a),
				he = E.a.div("Bullet", ne.a),
				be = E.a.div("UserNameContainer", ne.a),
				fe = E.a.div("UserInfoContainer", ne.a),
				we = E.a.div("PostKarma", ne.a),
				ve = E.a.div("CommentKarma", ne.a),
				ge = E.a.div("KarmaGrid", ne.a),
				xe = E.a.div("GenericKarma", ne.a),
				Ae = E.a.a("InfoLink", ne.a),
				Ee = E.a.div("KarmaCount", ne.a),
				Ie = E.a.div("KarmaLabel", ne.a),
				Oe = E.a.div("GenericKarmaLabel", ne.a),
				_e = E.a.div("BannerImage", ne.a),
				Ce = E.a.div("UserContainer", ne.a),
				je = E.a.div("BottomSpacer", ne.a),
				Ne = E.a.div("Container", ne.a),
				ye = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(me, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && n.a.createElement(P.a, {
					className: ne.a.adminIcon,
					title: g.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && n.a.createElement(A.a, {
					to: "/premium"
				}, n.a.createElement(le, null))), n.a.createElement(ue, null, e.user.username && n.a.createElement(pe, null, e.user.username, n.a.createElement(he, null, "•")), n.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && n.a.createElement(L.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				ke = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: a
						}
					} = e, r = {
						...y.a,
						...a
					};
					return t ? n.a.createElement(ge, null, n.a.createElement(xe, null, n.a.createElement(Ee, null, Object(I.b)(r.fromPosts)), n.a.createElement(Oe, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(xe, null, n.a.createElement(Ee, null, Object(I.b)(r.fromComments)), n.a.createElement(Oe, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), n.a.createElement(xe, null, n.a.createElement(Ee, null, Object(I.b)(r.fromAwardsReceived)), n.a.createElement(Oe, null, g.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [g.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), n.a.createElement(Ae, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(T.a, {
						className: ne.a.infoIcon
					})))), n.a.createElement(xe, null, n.a.createElement(Ee, null, Object(I.b)(r.fromAwardsGiven)), n.a.createElement(Oe, null, g.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [g.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), n.a.createElement(Ae, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(T.a, {
						className: ne.a.infoIcon
					}))))) : n.a.createElement(fe, null, n.a.createElement(ce, null), n.a.createElement(we, null, n.a.createElement(Ee, null, Object(I.b)(r.fromPosts)), n.a.createElement(Ie, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(ve, null, n.a.createElement(Ee, null, Object(I.b)(r.fromComments)), n.a.createElement(Ie, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Te = e => {
					const {
						className: t,
						contextId: a,
						currentUser: r,
						hideNSFWPref: s,
						hoverId: o,
						isLoggedIn: d,
						onClickSnoovatar: i,
						origin: c,
						moderatorPermissions: l,
						prefersReducedAnimations: m,
						sendEvent: u,
						showAwardKarma: p,
						style: h,
						subredditId: b,
						topAwardIcon: f,
						userName: w,
						user: v,
						userFlair: A,
						userIsBanned: E,
						userProfileStyles: I,
						acceptChats: O,
						isCommentAuthorBlocked: C
					} = e;
					if (!v) return n.a.createElement(Ne, {
						style: h
					});
					const j = !!r && Object(U.e)(r) === w,
						N = !!(null == r ? void 0 : r.snoovatarFullBodyAsset),
						y = v.accountIcon || `${x.a.assetPath}/img/snoo_user_placeholder.png`,
						T = l && l.flair,
						P = l && l.access,
						S = A && A.templateIds && A.templateIds.length > 0,
						M = A && A.displaySettings && A.displaySettings.isEnabled,
						{
							awardedLastMonth: B
						} = v,
						L = !!v.snoovatarFullBodyAsset,
						R = v.isNSFW && s;
					let D;
					return D = L ? !R && I && I.bannerBackgroundImage || void 0 : R ? `${x.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(Ne, {
						className: t,
						id: o,
						style: h
					}, !L && D && n.a.createElement(_e, {
						style: {
							backgroundImage: `url('${D}')`
						}
					}), n.a.createElement(Ce, null, L ? n.a.createElement(F.a, {
						isHovercard: !0,
						bannerBackgroundImage: D,
						compact: !0,
						currentUserHasSnoovatar: N,
						isEmployee: v.isEmployee,
						isGold: v.isGold,
						isNSFW: v.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: i,
						prefersReducedAnimations: !!m,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						title: null,
						userCreated: v.created,
						username: w,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(be, null, n.a.createElement(oe, {
						iconUrl: y,
						isNSFW: v.isNSFW,
						userName: w
					}), n.a.createElement(ye, {
						origin: c,
						user: v,
						userName: w
					})), n.a.createElement(ke, {
						showAwardKarma: p,
						user: v
					}), B && n.a.createElement(H.a, {
						recentAwardings: B,
						topAwardIcon: f,
						username: w
					}), d && !j && !E && O && !C && n.a.createElement(ie, {
						contextId: a,
						userId: v.id,
						text: g.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), v.hasUserProfile && !E && !C && !j && v.enableFollowers && n.a.createElement(de, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(k.g)(e ? "unfollow" : "follow", a),
						isFullWidth: !0,
						small: !0
					})), P && a && !j && b && n.a.createElement($, {
						contextId: a,
						subredditId: b,
						sendEvent: u,
						username: w
					}), T && a && S && M && b && n.a.createElement(ae, {
						contextId: a,
						subredditId: b,
						sendEvent: u,
						username: w
					}), n.a.createElement(_.i, {
						contextId: a,
						subredditId: b,
						user: v
					}), !(P || d) && n.a.createElement(je, null))
				},
				Pe = Object(C.a)(Te),
				Se = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return n.a.createElement(Pe, se({
						isOpen: t
					}, e))
				};
			Se.WrappedComponent = Te;
			var Me = Se;
			const Be = Object(o.c)({
					activeTooltipId: b.a,
					currentUser: f.k,
					isLoggedIn: f.J,
					hideNSFWPref: f.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(m.m)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: v.c,
					showAwardKarma: (e, t) => {
						return Object(b.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(c.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: f.rb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(w.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(h.l)(t) && Object(h.cb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(u.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const a = Object(u.h)(e, {
							profileName: t.userName
						});
						return !a || a.acceptChats
					}
				}),
				Ue = Object(s.b)(Be, (e, t) => ({
					onClickSnoovatar: () => e(Object(d.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(i.i)())
				}));
			t.a = Ue(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, n.a.createElement(Me, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, a) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = a("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = a("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(d.c)(e => {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, a) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
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
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
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
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, a) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return x
			})), a.d(t, "b", (function() {
				return A
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/lessComponent.tsx"),
				o = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/actions/profile/index.ts"),
				c = a("./src/reddit/actions/tooltip.ts"),
				l = a("./src/reddit/selectors/tooltip.ts");
			const m = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var u = Object(o.b)(m, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(i.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = a("./src/reddit/actions/subreddit.ts");
			const h = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var b = Object(o.b)(h, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var a;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (a = t.onShow) || void 0 === a || a.call(t)
					}
				})),
				f = a("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				w = a.n(f);
			class v extends n.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return n.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const g = s.a.wrapped(v, "HoverDiv", w.a),
				x = u(g),
				A = b(g)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, a) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			})), a.d(t, "b", (function() {
				return i
			}));
			var r = a("./src/lib/lessComponent.tsx"),
				n = a("./src/reddit/layout/row/Inline/index.tsx"),
				s = a("./src/reddit/components/Hovercards/helpers.m.less"),
				o = a.n(s);
			const d = r.a.wrapped(n.a, "UserActionItem", o.a),
				i = e => {
					const {
						author: t,
						itemId: a,
						subredditName: r,
						tooltipIdPrefix: n,
						tooltipType: s
					} = e;
					let o = n;
					return a && (o = `${o}--${a}`), s && (o = `${o}--${s}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/config.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				d = a("./src/reddit/components/ProfileIdCard/index.m.less"),
				i = a.n(d);
			const {
				fbt: c
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class l extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: a
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: d
					} = t, l = r.description ? r.description : r.name;
					return n.a.createElement("a", {
						className: i.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${a}/gilded`
					}, n.a.createElement("div", {
						className: i.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: i.a.icon,
						src: e
					}), d > 1 && n.a.createElement("span", {
						className: i.a.count
					}, `+${Object(o.b)(d-1)}`)), n.a.createElement("div", {
						className: i.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", r.name), c._plural(d)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, a) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/reddit/models/Image/index.tsx"),
				d = a("./src/reddit/components/EditableImage/index.tsx"),
				i = a("./src/reddit/models/User/index.ts"),
				c = a("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = a.n(l);
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const a = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(a, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: a,
						hideNSFWPref: n,
						isNSFW: o,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? s.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return a && Object(i.e)(a) === c ? s.a.createElement(d.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && n ? null : u
				}
			}
			t.a = Object(c.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react-redux/es/index.js"),
				n = a("./node_modules/reselect/es/index.js"),
				s = a("./src/reddit/actions/preferences.ts"),
				o = a("./src/reddit/selectors/user.ts");
			const d = Object(n.c)({
					currentUser: o.k,
					hideNSFWPref: o.C
				}),
				i = Object(r.b)(d, e => ({
					imageUpdateRequested: (t, a) => e(Object(s.C)(t, a))
				}));
			t.a = i
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, a) {
			"use strict";
			var r = a("./src/lib/classNames/index.ts"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/react-router/esm/react-router.js"),
				i = a("./src/reddit/actions/post.ts"),
				c = a("./src/reddit/actions/snoovatarModal.ts"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				m = a("./src/reddit/controls/Button/index.tsx"),
				u = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = a("./src/reddit/icons/svgs/Shirt/index.tsx"),
				h = a("./src/reddit/models/Vote/index.ts"),
				b = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = a.n(b);
			const {
				fbt: w
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: a,
				post: d,
				share: b
			}) => {
				const v = Object(l.b)(),
					g = Object(o.d)(),
					x = d && d.id,
					A = d && d.voteState;
				let E = null;
				x || (E = e ? "user_hovercard" : "profile_overview");
				const I = Object(n.useCallback)(() => v(Object(u.g)(e ? "user_hovercard" : "profile_overview", t)), [e, v, t]);
				return s.a.createElement(m.t, {
					onClick: () => {
						a ? (v(u.h), x && A === h.a.notVoted && g(Object(i.jb)(x))) : I();
						const e = a ? "postify" : "copy";
						g(Object(c.b)({
							clickSource: E,
							share: b,
							source: e
						}))
					},
					className: Object(r.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, s.a.createElement(p.a, {
					className: Object(r.a)({
						[f.a.shirtIcon]: !a,
						[f.a.avatarPostButtonShirtIcon]: a
					})
				}), w._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
					className: f.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/Button/index.tsx"),
				d = a("./src/reddit/icons/fonts/index.tsx"),
				i = a("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = a.n(c);
			const {
				fbt: m
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: a,
				isOwnProfile: r,
				onClick: c
			}) {
				return n.a.createElement(o.t, {
					onClick: c,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && r,
						[l.a.compactButtonLayout]: e
					}, a)
				}, t ? n.a.createElement(i.a, {
					className: l.a.shirtIcon
				}) : n.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : r ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? n.a.createElement("div", {
					className: l.a.chevronIcon
				}) : n.a.createElement(d.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, a) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = a("./src/reddit/icons/svgs/Close/index.tsx"),
				d = a("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				i = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = a.n(i),
				l = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = a.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: a,
				editMode: r,
				isDeletingBanner: i,
				onDeleteBanner: l
			}) {
				return n.a.createElement("div", {
					className: c.a.bannerWrapper
				}, n.a.createElement(d.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: a
				}), r && e && (i ? n.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : n.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/controls/InternalLink/index.tsx"),
				o = a("./src/reddit/components/HumanDate/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: i
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: a,
				userCreated: r,
				username: i,
				...c
			}) {
				const l = t ? n.a.createElement(n.a.Fragment, null, "u/", i, " · ", n.a.createElement(o.d, {
					seconds: r,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${i}`;
				return a ? n.a.createElement(s.a, d({}, c, {
					className: e,
					to: a
				}), l) : n.a.createElement("span", d({}, c, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, a) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, a) {
			"use strict";
			var r = a("./src/config.ts"),
				n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				d = a("./src/reddit/icons/svgs/Admin/index.tsx"),
				i = a("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = a("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = a.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: a,
				isGold: s,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, a && o.a.createElement(d.a, {
				className: m.a.snoovatarAdminIcon,
				title: n.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), s && o.a.createElement("a", {
				title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${r.a.redditUrl}/premium`
			}, o.a.createElement(c.a, {
				className: m.a.snoovatarPremiumIcon
			})), l && o.a.createElement(i.a, {
				className: m.a.snoovatarNsfwIcon,
				title: n.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/controls/InternalLink/index.tsx"),
				i = a("./src/reddit/icons/fonts/index.tsx"),
				c = a("./src/reddit/selectors/experiments/econ/index.ts"),
				l = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				m = a("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				h = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				b = a.n(h);
			const f = 25;

			function w(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function v(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const g = w("particleDelay", b.a),
				x = w("particleX", b.a),
				A = w("particleFloat", b.a),
				E = () => {
					const e = v(x),
						t = v(A),
						a = v(g);
					return Object(o.a)(b.a.particle, e, t, a)
				};
			class I extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < f; t++) e.push(this.createParticle(t));
					return n.a.createElement("div", {
						role: "presentation",
						className: b.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return n.a.createElement("div", {
						key: e,
						className: `${E()}`
					})
				}
			}
			var O = I,
				_ = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				C = a.n(_),
				j = a("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: a,
				editMode: r,
				isDeletingBanner: h,
				isEmployee: f,
				isGold: w,
				isNSFW: v,
				isOwnProfile: g,
				onClickSnoovatar: x,
				onDeleteBanner: A,
				prefersReducedAnimations: E,
				snoovatarUrl: I,
				title: _,
				userCreated: N,
				username: y,
				url: k,
				isHovercard: T
			}) => {
				const P = Object(s.e)(e => !g && !!I && Object(c.g)(e));
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(u.a, {
					bannerBackgroundImage: e,
					editMode: !!r,
					isNSFW: v,
					username: y,
					isDeletingBanner: !!h,
					onDeleteBanner: A
				}), n.a.createElement("div", {
					className: b.a.snoovatarContainer
				}, w && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: b.a.topGlow
				}), n.a.createElement("div", {
					className: b.a.bottomGlow
				}), !E && n.a.createElement(O, null)), n.a.createElement("img", {
					className: Object(o.a)(b.a.snoovatar, {
						[b.a.premiumGlow]: w
					}),
					src: I || void 0
				})), !r && g && n.a.createElement(d.a, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, n.a.createElement(i.a, {
					name: "settings",
					className: C.a.settingsIcon
				})), n.a.createElement(j.a, {
					isEmployee: f,
					isGold: w,
					isNSFW: v,
					title: _,
					username: y
				}), n.a.createElement(p.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: y,
					userCreated: N,
					url: k
				}), (g || !a && !!I) && n.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: a,
					isOwnProfile: g,
					onClick: x
				}), P && n.a.createElement(m.a, {
					username: y,
					isHovercard: !!T,
					share: {
						username: y
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, a) {
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
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			class s extends n.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							a = this.props.multiple ? [...t] : t[0];
						this.props.onChange(a), this.setState(() => ({
							value: a
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
					} = this, a = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, s = a || r;
					return n.a.createElement("div", {
						className: e.className
					}, a && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: a,
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, a) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = a.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => n.a.createElement("div", {
				className: Object(s.a)(d.a.loadingIcon, t, {
					[d.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return A
			})), a.d(t, "n", (function() {
				return E
			})), a.d(t, "a", (function() {
				return I
			})), a.d(t, "c", (function() {
				return O
			})), a.d(t, "b", (function() {
				return _
			})), a.d(t, "k", (function() {
				return C
			})), a.d(t, "l", (function() {
				return j
			})), a.d(t, "j", (function() {
				return N
			})), a.d(t, "f", (function() {
				return y
			})), a.d(t, "g", (function() {
				return k
			})), a.d(t, "m", (function() {
				return T
			})), a.d(t, "h", (function() {
				return P
			})), a.d(t, "i", (function() {
				return S
			})), a.d(t, "e", (function() {
				return M
			}));
			var r = a("./src/lib/constants/index.ts"),
				n = a("./src/lib/makeApiRequest/index.ts"),
				s = a("./src/lib/makeGqlRequest/index.ts"),
				o = a("./src/lib/omitHeaders/index.ts"),
				d = a("./src/lib/uploadToS3/index.ts"),
				i = a("./src/redditGQL/operations/AwardSheetInfo.json"),
				c = a("./src/redditGQL/operations/AwardSheetInfoForProfile.json"),
				l = a("./src/redditGQL/operations/CreateCommunityAward.json"),
				m = a("./src/redditGQL/operations/CreateGlobalAward.json"),
				u = a("./src/redditGQL/operations/CreateModAward.json"),
				p = a("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				h = a("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				b = a("./src/redditGQL/operations/GlobalAwards.json"),
				f = a("./src/redditGQL/operations/ManageableAwards.json"),
				w = a("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				v = a("./src/redditGQL/operations/RemoveCommunityAward.json"),
				g = a("./src/reddit/constants/headers.ts"),
				x = a("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const A = (e, t, a, s) => {
					const d = {
						subreddit: t,
						filepath: a,
						mimetype: s
					};
					return Object(n.a)(Object(o.a)(e, [g.a]), {
						method: r.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: d
					})
				},
				E = async (e, t) => Object(d.a)(t, e), I = (e, t, a, r, n, o, d, i, c) => Object(s.a)(e, {
					...l,
					variables: {
						coinPrice: d,
						iconHeight: o,
						iconWidth: n,
						iconUrl: r,
						name: a,
						subredditId: t,
						startsAt: i,
						endsAt: c
					}
				}), O = (e, t, a, r, n, o, d, i, c) => Object(s.a)(e, {
					...u,
					variables: {
						iconHeight: o,
						iconWidth: n,
						iconUrl: r,
						monthsOfPremium: d,
						name: a,
						subredditId: t,
						startsAt: i,
						endsAt: c
					}
				}), _ = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: a,
					context: r,
					daysOfDripExtension: n,
					daysOfPremium: o,
					description: d,
					endsAt: i,
					giverCoinReward: c,
					iconFormat: l,
					iconHeight: u,
					iconUrl: p,
					iconWidth: h,
					isNew: b,
					name: f,
					pennyPrice: w,
					pennyDonate: v,
					startsAt: g,
					subredditCoinReward: x
				}) => Object(s.a)(r, {
					...m,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: u,
						iconWidth: h,
						iconUrl: p,
						isNew: b,
						daysOfPremium: o,
						daysOfDripExtension: n,
						description: d,
						coinPrice: t,
						coinReward: a,
						name: f,
						pennyPrice: w,
						pennyDonate: v,
						giverCoinReward: c,
						startsAt: g,
						endsAt: i,
						subredditCoinReward: x
					}
				}), C = (e, t) => Object(s.a)(e, {
					...f,
					variables: {
						subredditId: t
					}
				}), j = (e, t) => Object(s.a)(e, {
					...w,
					variables: {
						profileName: t
					}
				}), N = e => Object(s.a)(e, {
					...b
				}), y = (e, t, a) => Object(s.a)(e, {
					...i,
					variables: {
						subredditId: t,
						thingId: a,
						includeGroup: !0
					}
				}), k = (e, t, a) => Object(s.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: a,
						includeGroup: !0
					}
				}), T = (e, t) => Object(s.a)(e, {
					...v,
					variables: {
						awardId: t
					}
				}), P = (e, t, a) => Object(s.a)(e, {
					...p,
					variables: {
						awardId: t,
						subredditId: a
					}
				}), S = (e, t, a) => Object(s.a)(e, {
					...h,
					variables: {
						awardId: t,
						subredditId: a
					}
				}), M = async (e, t, a) => {
					const s = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(o.a)(e, [g.a]), {
						method: r.jb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: s
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(x.a)(e)
					})
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "a", (function() {
				return d
			}));
			var r = a("./node_modules/bignumber.js/bignumber.js"),
				n = a("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const a = new r.BigNumber(e),
					n = new r.BigNumber(t || 1);
				return a.dividedToIntegerBy(n).toString()
			}

			function o(e, t) {
				return Object(n.b)(parseInt(s(e, t), 10))
			}

			function d(e, t) {
				const a = new r.BigNumber(e),
					n = new r.BigNumber(t || 1);
				return a.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			})), a.d(t, "c", (function() {
				return c
			})), a.d(t, "b", (function() {
				return l
			}));
			var r = a("./src/reddit/helpers/correlationIdTracker.ts"),
				n = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				s = a("./src/reddit/selectors/gold/topAwarded.ts"),
				o = a("./src/reddit/selectors/telemetry.ts");
			const d = (e, t = {}) => ({
					...Object(n.h)(e, t),
					correlationId: Object(r.e)(r.a.GildingFlow, !1),
					profile: o.P(e),
					subreddit: o.hb(e)
				}),
				i = e => t => ({
					source: "post",
					action: "click",
					noun: "award_spotlight_banner",
					...d(t, {
						thingId: e
					})
				}),
				c = e => t => ({
					source: "post_awards_leaderboard",
					action: "view",
					noun: "page",
					...d(t, {
						thingId: e
					})
				}),
				l = () => e => ({
					source: "post_awards_leaderboard",
					action: "click",
					noun: "give_gold",
					...d(e, {
						thingId: Object(s.a)(e) || void 0
					})
				})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(s.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(s.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, a) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Admin/index.m.less"),
				d = a.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(s.a)(e.className, d.a.admin, {
					[d.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, a) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Chevron/index.m.less"),
				d = a.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(s.a)(d.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, a) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				d = a.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				className: Object(s.a)(d.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), n.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), n.a.createElement("path", {
				className: Object(s.a)(d.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), n.a.createElement("path", {
				className: Object(s.a)(d.a.shadow, e.shadowClassName),
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
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
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
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
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
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = function({
				className: e
			}) {
				return n.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M22.5 22.866h-21a1.5 1.5 0 01-1.5-1.5v-7.329c0-.59.34-1.1.835-1.345v-7.23a1.5 1.5 0 011.5-1.5h4.943v-1.65a1.5 1.5 0 011.5-1.5h6.444a1.5 1.5 0 011.5 1.5v4.363h4.943a1.5 1.5 0 011.5 1.5v4.517c.495.245.835.755.835 1.345v7.329a1.5 1.5 0 01-1.5 1.5z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M22.5 18.971h-21v2.395h21V18.97z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M22.5 14.037h-21v5.119h21v-5.119z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M21.665 14.66v3.178h-6.443V12.85h6.443v1.812zM8.779 10.136v7.702H2.335v-7.702H8.78z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M15.222 17.838v.348H8.779V6.987h6.443v10.852z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M16.244 12.85h-1.022v4.988h1.022V12.85zM8.779 10.136H7.756v7.702H8.78v-7.702z",
				fill: "#FEB331"
			}), n.a.createElement("path", {
				d: "M15.734 12.85h-.512v4.988h.512V12.85zM8.78 10.136h-.512v7.702h.512v-7.702z",
				fill: "#F76B0B"
			}), n.a.createElement("path", {
				d: "M21.665 8.175h-6.443v4.674h6.443V8.175zM8.779 5.462H2.335v4.674H8.78V5.462z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M15.222 2.313H8.779v4.674h6.443V2.312z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M16.244 8.175h-1.022v4.674h1.022V8.175zM8.779 5.462H7.756v4.674H8.78V5.462z",
				fill: "#DB5003"
			}), n.a.createElement("path", {
				d: "M11.752 11.577h-.063l-1.143.772v-1.038l1.206-.822h1.206v4.742h-1.206v-3.654zM5.326 12.403c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.502-.537-.502-.367 0-.584.25-.584.592H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.477h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#FFF1B6"
			}), n.a.createElement("path", {
				d: "M11.752 11.13h-.063l-1.143.771v-1.038l1.206-.822h1.206v4.742h-1.206V11.13zM5.326 11.955c.916 0 1.462.496 1.462 1.174 0 .469-.208.779-.84 1.349l-.778.705v.052h1.665v.784H3.826v-.672l1.415-1.28c.489-.447.57-.617.57-.85 0-.275-.191-.503-.537-.503-.367 0-.584.25-.584.593H3.77c0-.804.633-1.352 1.557-1.352zM18.267 15.029h.412c.272 0 .448-.159.448-.39 0-.218-.167-.379-.443-.379-.29 0-.466.154-.479.415h-.744c.011-.617.5-1.025 1.263-1.025.753 0 1.165.394 1.162.873 0 .388-.25.644-.6.726v.042c.462.065.73.352.73.775 0 .575-.548.971-1.321.971-.764 0-1.283-.412-1.312-1.044h.78c.01.247.211.4.52.4.3 0 .502-.162.502-.405 0-.253-.192-.407-.506-.407h-.412v-.552z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M15.222 6.08H8.779v.907h6.443V6.08zM22.5 19.156h-21v.907h21v-.907zM21.665 12.866h-5.931l.51-.907h5.421v.907zM8.268 10.136H2.336v-.907h5.42l.512.907z",
				fill: "#FFFCD9"
			}))
		},
		"./src/reddit/models/Gold/TopAwarded/index.ts": function(e, t, a) {
			"use strict";
			var r;
			a.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Active = "ACTIVE", e.Inactive = "INACTIVE"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return o
			})), a.d(t, "a", (function() {
				return d
			}));
			var r = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/helpers/chooseVariant/index.ts"),
				s = a("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: s.J,
						experimentName: r.yc
					});
					return !(!t || Object(r.qf)(t))
				},
				d = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: s.J,
						experimentName: r.yc
					}) === r.dd.ListingEnabled
				}
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "e", (function() {
				return n
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "d", (function() {
				return o
			})), a.d(t, "b", (function() {
				return d
			}));
			const r = e => e.users.topAwarders.currentPostId,
				n = e => e.users.topAwarders.api.pending,
				s = e => e.users.topAwarders.api.error,
				o = (e, t) => e.users.topAwarders.list[t],
				d = (e, t) => e.users.topAwarders.currentRank[t]
		},
		"./src/redditGQL/operations/AwardSheetInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"e1be3a261389"}')
		},
		"./src/redditGQL/operations/AwardSheetInfoForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"3a33281f30db"}')
		},
		"./src/redditGQL/operations/CreateCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"38852e4f82b0"}')
		},
		"./src/redditGQL/operations/CreateGlobalAward.json": function(e) {
			e.exports = JSON.parse('{"id":"c11324579f8c"}')
		},
		"./src/redditGQL/operations/CreateModAward.json": function(e) {
			e.exports = JSON.parse('{"id":"a04c85b4e964"}')
		},
		"./src/redditGQL/operations/DisableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"689f37138ede"}')
		},
		"./src/redditGQL/operations/EnableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"3c2210d8ba4b"}')
		},
		"./src/redditGQL/operations/GlobalAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"16101a740cd7"}')
		},
		"./src/redditGQL/operations/HideAwardOnTarget.json": function(e) {
			e.exports = JSON.parse('{"id":"4e43964bff6f"}')
		},
		"./src/redditGQL/operations/ManageableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"bce139cc4904"}')
		},
		"./src/redditGQL/operations/ManageableAwardsForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"f2dc00a6f019"}')
		},
		"./src/redditGQL/operations/RemoveCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"973872832463"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconTopAwardersModal.784fb8780dda7ee3b3d8.js.map