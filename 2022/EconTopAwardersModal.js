// https://www.redditstatic.com/desktop2x/EconTopAwardersModal.96d7e66d8ab702a2b8b4.js
// Retrieved at 3/2/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
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
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "e", (function() {
				return l
			}));
			var a, n = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(a || (a = {}));
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
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			}));
			var a = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = r("./src/lib/currency/centsToDollars/index.ts"),
				s = r("./src/lib/currency/currencies.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const c = (e, {
					locale: t = a.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: n
				} = {}) => {
					const s = Number(e);
					return Object(i.c)() ? r ? Object(o.b)(s) : new Intl.NumberFormat(t, n).format(s) : m(s, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = a.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: c,
						displayConversion: l,
						forceDecimals: b,
						currency: h = t.currency || (t.type ? p(t.type) : s.c),
						type: f = t.type || (t.currency ? u(t.currency) : s.b.Real)
					} = t, w = Number(e), v = String(e);
					switch (f) {
						case s.b.Reddit: {
							const e = s.e[h],
								t = e ? e() : h;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...c
							}).format(w) + " " + t : m(w, o, r, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(d.c)(v, l) + " " + h
							}
							const e = Number(Object(d.b)(v, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...c
							}).format(e) : m(e, o, r, h)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(n.a)(v, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...c
							}).format(e) : m(e, o, r, h)
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
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/gold/constants.ts");
			const d = Object(a.a)(o.mb),
				i = Object(a.a)(o.t),
				c = e => async t => {
					await t(i({
						id: e
					})), t(Object(n.h)(s.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/gold/reportAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/communityAwards.ts"),
				i = r("./src/reddit/actions/gold/constants.ts");
			const c = Object(n.a)(i.lb),
				l = e => async (t, r, {
					apiContext: n
				}) => {
					t(c());
					try {
						if ((await Object(d.e)(n(), e.id)).error) throw new Error;
						await t(Object(s.f)({
							kind: o.b.SuccessAward,
							duration: s.a,
							text: a.fbt._("{award name} Award successfully reported for review.", [a.fbt._param("award name", e.name)], {
								hk: "1fHb5Q"
							})
						}))
					} catch (i) {
						await t(Object(s.f)({
							kind: o.b.Error,
							duration: s.a,
							text: a.fbt._("Something went wrong. The report could not be created at this time.", null, {
								hk: "1ewigu"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return h
			}));
			var a = r("./src/lib/env/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)(c.ub), Object(n.a)(c.tb), Object(n.a)(c.sb);
			const l = Object(n.a)(c.xb),
				m = Object(n.a)(c.wb),
				u = Object(n.a)(c.vb),
				p = (e, t = 25) => async (r, n, {
					gqlContext: o
				}) => {
					if (!n().users.topAwarders.list.length) {
						r(l());
						try {
							const a = await Object(d.b)(o(), {
									top: t,
									postId: e
								}),
								n = a.body;
							if (a.ok) await r(m({
								postId: e,
								...n.data.postInfoById.topAwarders
							}));
							else if (n.errors && n.errors.length) throw new Error(n.errors.map(e => e.message).join("; "))
						} catch (i) {
							Object(a.b)() || console.error(i), s.c.captureMessage(i), r(u(i.message))
						}
					}
				}, b = Object(n.a)(c.yb), h = e => async (t, r) => {
					t(b({
						postId: e
					})), t(Object(i.h)(o.a.ECON_TOP_AWARDERS))
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var a = r("./src/lib/makeActionCreator/index.ts");
			const n = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				o = Object(a.a)(n),
				d = Object(a.a)(s)
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
				return de
			})), r.d(t, "a", (function() {
				return ie
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/get.js"),
				s = r.n(n),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/apiRequestState.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/constants/modals.ts"),
				u = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				h = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				w = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(f.a)(Object(w.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.jb.GET,
				data: r
			});
			var g = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				x = r("./src/reddit/models/SubredditModeration/index.ts"),
				A = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/activeModalId.ts"),
				E = r("./src/reddit/selectors/bannedUser.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/actions/subredditModeration/constants.ts"),
				j = r("./src/lib/initializeClient/installReducer.ts"),
				N = r("./node_modules/redux/es/redux.js");
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
			var P = (e = k, t) => {
					switch (t.type) {
						case C.o: {
							const {
								subredditId: r,
								fetchedToken: a
							} = t.payload, n = Object(x.e)(r, a);
							return {
								...e,
								[n]: !0
							}
						}
						case C.n:
						case C.m: {
							const {
								subredditId: r,
								fetchedToken: a
							} = t.payload, n = Object(x.e)(r, a);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(N.c)({
					error: y,
					pending: P
				});
			const S = {};
			var U = (e = S, t) => {
					switch (t.type) {
						case C.n: {
							const {
								fetchedToken: r,
								subredditId: a
							} = t.payload, n = Object(x.e)(a, r);
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
			var B = (e = null, t) => {
				switch (t.type) {
					case M.a:
						return t.payload;
					default:
						return e
				}
			};
			const F = {};
			var L = (e = F, t) => {
					switch (t.type) {
						case C.n: {
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
				R = r("./node_modules/icepick/icepick.js");
			const H = {};
			var D = (e = H, t) => {
				switch (t.type) {
					case C.l:
					case C.n: {
						const {
							subredditId: r,
							bannedUsers: a
						} = t.payload;
						return Object(R.merge)(e, {
							[r]: a
						})
					}
					case C.s: {
						const {
							subredditId: r,
							userId: a
						} = t.payload;
						return Object(R.unsetIn)(e, [r, a])
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
				Q = Object(N.c)({
					api: z,
					result: q
				});
			const K = {};
			var J = (e = K, t) => {
					switch (t.type) {
						case C.n: {
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
						case C.s: {
							const {
								subredditId: r,
								userId: a
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== a)
							}
						}
						case C.l: {
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
				V = Object(N.c)({
					api: T,
					fetchedTokens: U,
					inContext: B,
					loadMore: L,
					models: D,
					search: Q,
					userOrder: J
				});
			Object(j.a)({
				features: {
					banned: V
				}
			});
			const Y = Object(o.a)(C.o),
				X = Object(o.a)(C.n),
				Z = Object(o.a)(C.m),
				$ = (e, t = {}) => async (r, a, {
					apiContext: n
				}) => {
					const s = a(),
						o = t.after || "",
						d = Object(x.e)(e, o),
						i = s.features.banned.fetchedTokens[d];
					if (s.features.banned.api.pending[d] || i) return;
					r(Y({
						subredditId: e,
						fetchedToken: o
					}));
					const c = s.subreddits.models[e].name,
						l = await v(n(), c, t);
					l.ok ? r(X({
						...l.body,
						fetchedToken: o
					})) : r(Z({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(C.r), te = Object(o.a)(C.q), re = Object(o.a)(C.p), ae = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const s = a().subreddits.models[e].name,
						o = {
							username: Object(g.a)(t)
						};
					r(ee());
					const d = await v(n(), s, o);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, ne = Object(o.a)(C.l), se = Object(o.a)(C.s), oe = (e, t, r) => async (n, o, {
					apiContext: i
				}) => {
					const c = o(),
						m = c.subreddits.models[e].url,
						f = c.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), n(Object(d.h)(r));
					const w = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.jb.POST,
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
					}))(i(), m, t);
					if (w.ok) {
						n(Object(d.e)(r));
						const e = {
							username: t.username
						};
						n(Object(l.f)({
							kind: A.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await v(i(), f, e);
						s.ok && n(ne(s.body))
					} else {
						n(Object(d.f)(r, w.error));
						const e = s()(w, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: A.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const d = n().subreddits.models[e].url,
						i = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.jb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(o(), d, t);
					if (i.ok) r(se({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: A.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(i, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: A.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (r, a) => {
					const n = a();
					await Promise.all([(async () => {
						if (!Object(I.b)(m.a.BAN_USER)(n) && !Object(O.P)(n, {
								subredditId: e
							})) {
							const t = Object(O.S)(n, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const a = Object(_.wb)(n, {
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
		"./src/reddit/components/AwardBadges/AddAwardPill/index.m.less": function(e, t, r) {
			e.exports = {
				addAwardPill: "_3Wf5TsmUR8Qf8nr0fDHjur",
				giftIcon: "eQZZIJf9NTq5MBV2285S2"
			}
		},
		"./src/reddit/components/AwardBadges/AwardPill/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less": function(e, t, r) {
			e.exports = {
				buttonContainer: "DInSK-8C_3_wtp8rkyyk_",
				right: "_3h4h05agLr2A_NU_Rf3yCn",
				scrollButton: "_2MU8EpOTDEghV1ecmq37UZ",
				"focus-visible": "_38NFrOkGDKwQs4baFR_XWF",
				focusVisible: "_38NFrOkGDKwQs4baFR_XWF",
				chevronIcon: "uPrjAc1vFe8cn_-JitBDg"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less": function(e, t, r) {
			e.exports = {
				awardBadges: "_3XoW0oYd5806XiOr24gGdb",
				badgeButton: "_1vpnHb2bSTD6BcgVKisnPT",
				visibilityEffect: "_3vGYJIJIswDD8YOAMWGC4N",
				icon: "_3zozqOs5cvNd2uvuIiu2_L",
				showAllButton: "_1tAFPduILh7Zse0gkxT4vj"
			}
		},
		"./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less": function(e, t, r) {
			e.exports = {
				awardItem: "_2OYwDdghtXEuTF67C95YLY",
				awardIcon: "n08B7PrU01wzgZYIh-s7N",
				animate: "f18KwJcHh9SCfKw_W3Dm2",
				awardBounce: "_3bDgD_5hXKabLRqOe9sXRi"
			}
		},
		"./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less": function(e, t, r) {
			e.exports = {
				reportStepButton: "_2ke5Q4KsrJWi6sCDENRwI2"
			}
		},
		"./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less": function(e, t, r) {
			e.exports = {
				pill: "AavtiP0APDAhqwl7opcvC",
				iconContainer: "_2NhWk2-d-tn8oC0A-k_Ss-",
				awardIcon: "_20LMDg4_PtezakicbNPSfn",
				awardsPlaqueStyle: "qntP0rU06Z8LVP6TKmQHQ",
				"focus-visible": "qbP9Qnm2Qru28YDgfefpw",
				focusVisible: "qbP9Qnm2Qru28YDgfefpw"
			}
		},
		"./src/reddit/components/AwardBadges/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/gold/giveAward.ts"),
				c = r("./src/redditGQL/operations/HideAwardOnTarget.json"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/reddit/actions/gold/constants.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/models/Toast/index.ts");
			const h = Object(l.a)(u.D),
				f = ({
					awardId: e,
					thingId: t
				}) => async (r, n, {
					gqlContext: s
				}) => {
					r(h({
						awardId: e,
						thingId: t
					}));
					const o = a.fbt._("Something went wrong. The Award could not be hidden at this time.", null, {
						hk: "10OvOz"
					});
					try {
						(await ((e, t, r) => Object(m.a)(e, {
							...c,
							variables: {
								awardId: t,
								targetId: r
							}
						}))(s(), e, t)).error && r(Object(p.f)({
							kind: b.b.Error,
							duration: p.a,
							text: o
						}))
					} catch (d) {
						r(Object(p.f)({
							kind: b.b.Error,
							duration: p.a,
							text: o
						}))
					}
				};
			var w = r("./src/reddit/actions/gold/modals.ts"),
				v = r("./src/reddit/actions/modal.ts"),
				g = r("./src/reddit/actions/tooltip.ts"),
				x = r("./src/reddit/helpers/correlationIdTracker.ts"),
				A = r("./src/reddit/helpers/isPost.ts"),
				I = r("./src/reddit/helpers/trackers/gild.ts"),
				E = r("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = r("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = r("./src/reddit/models/Gold/Award.ts"),
				C = r("./src/reddit/selectors/activeModalId.ts"),
				j = r("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				N = r("./src/reddit/selectors/gold/awardIcon.ts"),
				y = r("./src/reddit/contexts/Post/index.tsx"),
				k = r("./src/reddit/contexts/User/index.tsx"),
				P = r("./node_modules/lodash/debounce.js"),
				T = r.n(P),
				S = r("./src/lib/classNames/index.ts"),
				U = r("./src/lib/fastdom/index.ts"),
				M = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				B = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				F = r("./src/reddit/components/AwardBadges/AddAwardPill/index.m.less"),
				L = r.n(F);
			var R = s.a.memo(e => s.a.createElement("button", {
					className: Object(S.a)(e.className, L.a.addAwardPill),
					name: a.fbt._("Give award", null, {
						hk: "dQR06"
					}),
					onClick: e.onAddAward
				}, s.a.createElement(B.a, {
					className: L.a.giftIcon
				}))),
				H = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				D = r("./src/higherOrderComponents/makeAsync.tsx"),
				G = r("./src/lib/loadWithRetries/index.ts");
			var W = Object(D.a)({
					getComponent: () => Object(G.a)(() => r.e("AwardTooltip").then(r.bind(null, "./src/reddit/components/AwardTooltip/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = r("./src/reddit/components/AwardBadges/AwardPill/index.m.less"),
				q = r.n(z);
			const Q = 3500,
				K = 500;
			class J extends s.a.PureComponent {
				constructor(e) {
					super(e), this.imageRef = s.a.createRef(), this.triggerAnimation = () => {
						const {
							award: e,
							prefersReducedMotion: t,
							tooltipId: r,
							triggerOverlayAnimation: a
						} = this.props;
						e.id !== _.g && (this.setState({
							userGiven: !0,
							shouldAnimate: !t
						}), t || (a(r), setTimeout(() => {
							this.setState({
								shouldAnimate: !1
							})
						}, Q)))
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
						}, K)
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
						count: r,
						giveAwardAnimationIconUrl: a,
						pillIconUrl: n,
						post: o,
						tooltipId: d
					} = this.props, {
						userGiven: i,
						shouldAnimate: c
					} = this.state, l = Object(H.a)(e.id, o.id);
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
						src: a
					})), s.a.createElement("span", {
						className: q.a.count
					}, r.toLocaleString())), s.a.createElement(W, {
						award: e,
						onOpenReportFlow: this.handleOpenReportFlow,
						onHideAward: this.handleHideAward,
						postOrComment: o,
						tooltipId: d
					}))
				}
			}
			var V = J,
				Y = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				X = r("./src/reddit/components/AwardBadges/AwardPlaqueScrollButton/index.m.less"),
				Z = r.n(X);
			var $ = s.a.memo(e => {
				const {
					className: t,
					direction: r,
					onClick: n
				} = e, o = "right" === r, d = a.fbt._("Scroll left", null, {
					hk: "3MibS1"
				}), i = a.fbt._("Scroll right", null, {
					hk: "3xdEc5"
				});
				return s.a.createElement("div", {
					className: Object(S.a)(Z.a.buttonContainer, {
						[Z.a.right]: o
					}, t)
				}, s.a.createElement("button", {
					className: Z.a.scrollButton,
					name: o ? i : d,
					onClick: n
				}, s.a.createElement(Y.a, {
					className: Z.a.chevronIcon
				})))
			});
			const ee = (e, t) => {
				let r = `${Object(A.a)(e)?"Post":"Comment"}AwardBadges--${e}`;
				return t && (r = `${r}--${t}`), r
			};
			var te = r("./src/reddit/helpers/trackers/topAwarded.ts"),
				re = r("./src/reddit/hooks/useTracking.ts"),
				ae = r("./src/reddit/actions/gold/topAwarded.ts"),
				ne = r("./src/reddit/icons/svgs/TopAwarded/index.tsx"),
				se = r("./src/reddit/components/AwardBadges/TopAwardedPill/index.m.less"),
				oe = r.n(se);
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ie = e => {
					const t = Object(o.d)(),
						r = Object(re.a)();
					return s.a.createElement("button", {
						className: Object(S.a)(oe.a.pill, e.className, {
							[oe.a.awardsPlaqueStyle]: !!e.awardsPlaqueStyle
						}),
						onClick: () => {
							const {
								postId: a
							} = e.post;
							r(Object(te.a)(a)), t(Object(ae.b)(a))
						}
					}, s.a.createElement("span", {
						className: oe.a.iconContainer
					}, s.a.createElement(ne.a, {
						className: oe.a.awardIcon
					})), s.a.createElement("span", null, de._("Top Awarded", null, {
						hk: "49Ol5i"
					})))
				},
				ce = r("./src/reddit/components/AwardBadges/AwardPlaqueBadges/index.m.less"),
				le = r.n(ce);
			const me = 11,
				ue = 100;
			class pe extends s.a.Component {
				constructor(e) {
					super(e), this.plaqueRef = s.a.createRef(), this.handleResize = T()(() => {
						this.handlePlaquePositionChange()
					}, 300), this.handlePlaquePositionChange = () => {
						const {
							awards: e,
							awardsCountInView: t,
							multiline: r
						} = this.props, a = t || me;
						if (e.length < a - 4) return;
						if (r) return;
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
							r = e.scrollLeft - (t - ue);
						this.scrollPlaqueTo(r)
					}, this.handleScrollRight = () => {
						const e = this.plaqueRef.current;
						if (!e) return;
						const t = e.clientWidth,
							r = e.scrollLeft + (t - ue);
						this.scrollPlaqueTo(r)
					}, this.handleTriggerAnimation = e => {
						this.props.triggerOverlayAnimation(), U.a.read(() => {
							const t = this.plaqueRef.current;
							if (!t) return;
							const r = document.getElementById(e);
							if (!r) return;
							const a = t.getBoundingClientRect(),
								n = r.getBoundingClientRect();
							if (n.left < a.left || n.right > a.right) {
								const e = n.left + (t.scrollLeft - a.left) - ue;
								this.scrollPlaqueTo(e)
							}
						})
					};
					const t = e.awardsCountInView || me,
						r = e.awards.length > t;
					this.state = {
						canScrollLeft: !1,
						canScrollRight: r && !e.multiline
					}
				}
				shouldComponentUpdate(e, t) {
					if (this.props.awards !== e.awards) {
						const t = this.props.awards.reduce((e, t) => (e[t.id] = (this.props.post.awardCountsById || {})[t.id], e), {});
						if (e.awards.reduce((r, a) => {
								const n = t[a.id],
									s = (e.post.awardCountsById || {})[a.id];
								return r || n !== s
							}, !1)) return !0
					}
					if (this.props.post.id !== e.post.id) return !0;
					for (const r in this.state)
						if (this.state[r] !== t[r]) return !0;
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
					} = this.props, r = t ? "auto" : "smooth", a = this.plaqueRef.current;
					if (!a) return;
					const n = a.clientWidth,
						s = a.scrollWidth - n,
						o = Math.min(Math.max(0, e), s);
					this.setState({
						canScrollLeft: o > 0,
						canScrollRight: o < s
					}), a.scrollTo({
						left: o,
						top: 0,
						behavior: r
					})
				}
				render() {
					const {
						awards: e,
						className: t,
						hideAddAwardButton: r,
						hideTopAwardedBadge: a,
						icons: n,
						isInEconLeaderboardsExperiment: o,
						multiline: d,
						post: i,
						prefersReducedMotion: c,
						onAddAward: l,
						onHideAward: m,
						onHideTooltip: u,
						onOpenReportFlow: p,
						onShowTooltip: b,
						tooltipType: h
					} = this.props, {
						canScrollLeft: f,
						canScrollRight: w
					} = this.state, v = e.length > 0, g = ee(i.id, h);
					return s.a.createElement("div", {
						className: Object(S.a)(le.a.awardBadges, t, {
							[le.a.noAwards]: !v,
							[le.a.multiline]: d
						}),
						ref: this.plaqueRef
					}, f && s.a.createElement($, {
						direction: "left",
						onClick: this.handleScrollLeft
					}), (i.topAwardedType === M.a.Active || i.topAwardedType === M.a.Inactive) && !a && o && s.a.createElement(ie, {
						awardsPlaqueStyle: !0,
						post: i
					}), e.map(e => {
						const {
							awardCountsById: t = {}
						} = i, r = t[e.id], a = n.icon32[e.id], o = n.icon128[e.id];
						return s.a.createElement(V, {
							award: e,
							className: le.a.clickablePlaqueItem,
							count: r,
							giveAwardAnimationIconUrl: o,
							key: e.id,
							onAddAward: l,
							onHideAward: m,
							onOpenReportFlow: p,
							onHideTooltip: u,
							onShowTooltip: b,
							pillIconUrl: a,
							post: i,
							prefersReducedMotion: c,
							tooltipId: `${g}-${e.id}`,
							triggerOverlayAnimation: this.handleTriggerAnimation
						})
					}), !r && s.a.createElement(R, {
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
			var be = pe,
				he = r("./src/reddit/components/AwardBadges/ClassicAwardItem/index.m.less"),
				fe = r.n(he);
			const {
				fbt: we
			} = r("./node_modules/fbt/lib/FbtPublic.js");
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
						count: r,
						iconClassName: a,
						iconUrl: n,
						onHideAward: o,
						onHideTooltip: d,
						onOpenReportFlow: i,
						postOrComment: c,
						tooltipId: l,
						tooltipLocation: m
					} = this.props;
					if (r <= 0) return null;
					const u = e.awardType === _.f.Moderator,
						p = Object(H.a)(e.id, c.id),
						b = "container" === m;
					return s.a.createElement("span", {
						className: Object(S.a)(fe.a.awardItem, t),
						id: b ? l : "",
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: d
					}, s.a.createElement("span", {
						id: b ? "" : l
					}, s.a.createElement("img", {
						alt: e.name,
						className: Object(S.a)(fe.a.awardIcon, {
							[fe.a.animate]: this.state.animate
						}, a),
						id: p,
						ref: this.imageRef,
						src: n
					})), s.a.createElement("span", null, r > 1 && r, u && this.renderModAwardName()), s.a.createElement(W, {
						award: e,
						onHideAward: () => o(e),
						postOrComment: c,
						tooltipId: l,
						onOpenReportFlow: () => i(e)
					}))
				}
			}
			var ge = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				xe = r("./src/reddit/icons/fonts/index.tsx"),
				Ae = r("./src/reddit/components/AwardBadges/ClassicAwardBadges/index.m.less"),
				Ie = r.n(Ae);
			var Ee = e => {
				const {
					className: t,
					onClick: r
				} = e;
				return s.a.createElement("button", {
					className: Object(S.a)(t, Ie.a.badgeButton, Ie.a.visibilityEffect),
					onClick: r
				}, s.a.createElement(xe.a, {
					name: "award",
					className: Ie.a.icon
				}))
			};
			var Oe, _e = e => {
					const {
						awards: t,
						className: r,
						hideBadgeButton: n,
						hideTopAwardedBadge: o,
						icons: d,
						isInEconLeaderboardsExperiment: i,
						onAddAward: c,
						onHideAward: l,
						onOpenReportFlow: m,
						onHideTooltip: u,
						onShowAllAwards: p,
						onShowTooltip: b,
						showAllAwards: h,
						tooltipType: f,
						thing: w
					} = e, v = ee(w.id, f), g = `${v}-view-all`;
					let x = [];
					x = h ? t : t.length > 5 ? t.slice(0, 4) : t;
					const I = !n && w.isGildable && t.length > 0,
						E = t.length > x.length ? t.slice(x.length).reduce((e, t) => e + (w.awardCountsById && w.awardCountsById[t.id] || 0), 0) : 0,
						O = a.fbt._("& {hidden award count} More", [a.fbt._param("hidden award count", E.toLocaleString())], {
							hk: "1OnmAi"
						});
					return s.a.createElement("div", {
						className: Object(S.a)(Ie.a.awardBadges, r)
					}, Object(A.a)(w.id) && (w.topAwardedType === M.a.Active || w.topAwardedType === M.a.Inactive) && !o && i && s.a.createElement(ie, {
						post: w
					}), x.map(e => {
						const t = w.awardCountsById ? w.awardCountsById[e.id] : 0,
							r = d.icon32[e.id];
						return s.a.createElement(ve, {
							award: e,
							count: t,
							iconUrl: r,
							key: e.id,
							onHideAward: l,
							onOpenReportFlow: m,
							onHideTooltip: u,
							onShowTooltip: b,
							postOrComment: w,
							tooltipId: `${v}-${e.id}`,
							tooltipLocation: "icon"
						})
					}), E > 0 && s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
						"data-click-id": "awards",
						id: g,
						className: Ie.a.showAllButton,
						onClick: p,
						onMouseEnter: () => b(g),
						onMouseLeave: u
					}, O), s.a.createElement(ge.c, {
						tooltipId: g,
						text: a.fbt._("View all Awards", null, {
							hk: "3JL2sD"
						})
					})), I && s.a.createElement(Ee, {
						onClick: c
					}))
				},
				Ce = r("./src/reddit/actions/gold/reportAward.ts"),
				je = r("./src/reddit/controls/Button/index.tsx"),
				Ne = r("./src/reddit/components/AwardBadges/FlagAwardModal/index.m.less"),
				ye = r.n(Ne);
			! function(e) {
				e[e.BEGIN = 0] = "BEGIN", e[e.REPORT_COMMUNITY_AWARD = 1] = "REPORT_COMMUNITY_AWARD", e[e.FLAG_USAGE = 2] = "FLAG_USAGE"
			}(Oe || (Oe = {}));
			var ke = e => {
				const t = Object(re.a)(),
					[r, d] = Object(n.useState)(e.award.awardType === _.f.Global ? Oe.FLAG_USAGE : Oe.BEGIN),
					i = Object(o.d)(),
					c = () => {
						r === Oe.BEGIN ? t(Object(I.clickCancelAwardReportFlow)(e.award, e.thing.id)) : r === Oe.REPORT_COMMUNITY_AWARD ? t(Object(I.clickCancelReportAward)(e.award, e.thing.id)) : r === Oe.FLAG_USAGE && t(Object(I.clickCancelFlagAwardUsage)(e.award, e.thing.id)), e.onClose()
					},
					l = () => {
						t(Object(I.clickConfirmReportAward)(e.award, e.thing.id)), i(Object(Ce.a)(e.award)), e.onClose()
					},
					m = () => {
						t(Object(I.clickConfirmFlagAwardUsage)(e.award, e.thing.id)), i(Object(p.f)(Object(p.e)(a.fbt._("{award name} Award successfully flagged for review.", [a.fbt._param("award name", e.award.name)], {
							hk: "24QeOL"
						}), b.b.SuccessAward))), e.onClose()
					},
					u = s.a.createElement(s.a.Fragment, null, s.a.createElement(je.o, {
						onClick: () => {
							t(Object(I.clickReportAward)(e.award, e.thing.id)), d(Oe.REPORT_COMMUNITY_AWARD)
						},
						className: ye.a.reportStepButton
					}, a.fbt._("This community award violates Reddit's rules.", null, {
						hk: "2ObuGq"
					})), s.a.createElement(je.o, {
						onClick: () => {
							t(Object(I.clickFlagAwardUsage)(e.award, e.thing.id)), d(Oe.FLAG_USAGE)
						},
						className: ye.a.reportStepButton
					}, a.fbt._("This award is being used inappropriately.", null, {
						hk: "Y8giW"
					})));
				switch (r) {
					case Oe.BEGIN:
						return s.a.createElement(E.a, {
							withOverlay: !0,
							hideCancelButton: !0,
							onConfirm: c,
							onCancel: c,
							onClose: c,
							headerText: a.fbt._("What's Wrong?", null, {
								hk: "JqSAe"
							}),
							actionText: a.fbt._("Cancel", null, {
								hk: "370pdF"
							}),
							modalText: u
						});
					case Oe.REPORT_COMMUNITY_AWARD:
						return s.a.createElement(E.a, {
							withOverlay: !0,
							onConfirm: l,
							onCancel: c,
							onClose: c,
							headerText: a.fbt._("Report Community Award", null, {
								hk: "3T6dhH"
							}),
							actionText: a.fbt._("Report Award", null, {
								hk: "dHwed"
							}),
							modalText: a.fbt._("Do you want to report the {award name} Award?", [a.fbt._param("award name", e.award.name)], {
								hk: "4by1t"
							})
						});
					case Oe.FLAG_USAGE:
						return s.a.createElement(E.a, {
							withOverlay: !0,
							onConfirm: m,
							onCancel: c,
							onClose: c,
							headerText: a.fbt._("Flag Award Usage", null, {
								hk: "395heU"
							}),
							actionText: a.fbt._("Flag Award Usage", null, {
								hk: "24B1WV"
							}),
							modalText: a.fbt._("Is the {award name} Award inappropriate on this content? Reddit uses this information to improve the awarding experience and remove awards that are being misused.", [a.fbt._param("award name", e.award.name)], {
								hk: "3P3dMP"
							})
						})
				}
			};
			const Pe = [32, 128],
				Te = Object(d.c)({
					allAwards: e => e.awards.models,
					isConfirmModalOpen: e => "AwardBadges--Modal--HideAwardConfirmation" === Object(C.a)(e),
					isInEconLeaderboardsExperiment: j.b
				}),
				Se = e => Object(A.a)(e.id) ? e.postId : e.id,
				Ue = Object(o.b)(Te, (e, {
					thing: t
				}) => ({
					hideAward: r => e(f({
						awardId: r,
						thingId: Se(t)
					})),
					onAddAward: (r, a) => {
						const n = Se(t);
						return e(Object(w.d)({
							awardId: a,
							correlationId: r,
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
			class Me extends s.a.Component {
				constructor(e) {
					super(e), this.handleAddAward = async e => {
						const t = Object(x.e)(x.a.GildingFlow, !0),
							{
								onAddAward: a,
								sendEvent: n,
								thing: s
							} = this.props;
						a(t, e);
						const {
							clickAddAward: o
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(o(s.id))
					}, this.handleShowAllAwards = () => {
						this.setState({
							showAllAwards: !0
						})
					}, this.handleHideAward = async e => {
						const {
							sendEvent: t,
							onToggleHideAwardModal: a,
							thing: n
						} = this.props;
						this.setState({
							selectedAward: e
						});
						const {
							clickHideAward: s
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						t(s(e, n.id)), a()
					}, this.handleHideAwardConfirmed = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: a
						} = this.state, {
							clickConfirmHideAward: n
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a && (e(n(a, t.id)), this.props.hideAward(a.id))
					}, this.handleHideAwardCanceled = async () => {
						const {
							sendEvent: e,
							thing: t
						} = this.props, {
							selectedAward: a
						} = this.state, {
							clickCancelHideAward: n
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a && e(n(a, t.id))
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
						this.props.sendEvent(Object(I.clickAwardReportFlow)(e, this.props.thing.id)), this.setState({
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
						awardsPlaqueStyle: r,
						className: n,
						currentUser: o,
						hideCta: d,
						hideTopAwardedBadge: i,
						isConfirmModalOpen: c,
						isInEconLeaderboardsExperiment: l,
						isLoggedIn: m,
						isPostDetail: u,
						onHideTooltip: p,
						onShowTooltip: b,
						onToggleHideAwardModal: h,
						prefs: f,
						thing: w,
						triggerOverlayAnimation: v,
						tooltipType: g
					} = this.props, {
						showAllAwards: x
					} = this.state, I = f.reduceAnimationsFromAwards || "undefined" != typeof window && !!window.matchMedia("(prefers-reduced-motion)").matches, O = Object.keys(w.awardCountsById || {}), C = Object(_.r)(O.map(t => e[t]).filter(Boolean)), j = {};
					for (const a of Pe) {
						const e = {};
						j[`icon${a}`] = e;
						for (const t of C) e[t.id] = Object(N.c)({
							award: t,
							postOrComment: w,
							size: a,
							prefersReducedMotion: I
						})
					}
					const y = !!o && o.id === w.authorId;
					return s.a.createElement(s.a.Fragment, null, r ? s.a.createElement(be, {
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
						prefersReducedMotion: I,
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
						onShowTooltip: b,
						showAllAwards: x || !!u,
						thing: w,
						tooltipType: g
					}), c && o && this.state.selectedAward && s.a.createElement(E.a, {
						actionText: a.fbt._("Hide", null, {
							hk: "4FKnfB"
						}),
						modalText: y ? Object(A.a)(w.id) ? a.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your post?", [a.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "4a7Cbu"
						}) : a.fbt._("The award giver(s) will be notified that you have hidden their {awardName} award. This action cannot be undone. Are you sure you want to hide awards of this type from your comment?", [a.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "294BlY"
						}) : Object(A.a)(w.id) ? a.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the post?", [a.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "3LQVs7"
						}) : a.fbt._("The award giver(s) and recipient will be notified that a moderator has hidden the {awardName} award. Are you sure you want to hide this award from the comment?", [a.fbt._param("awardName", this.state.selectedAward.name)], {
							hk: "qlfga"
						}),
						onConfirm: this.handleHideAwardConfirmed,
						onCancel: this.handleHideAwardCanceled,
						toggleModal: h,
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
			t.a = Object(k.c)(Object(y.e)(Ue(Object(O.c)(Me))))
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var a, n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/chat/toggle.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(a || (a = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: n,
				contextId: o,
				priority: d,
				Icon: i,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: h,
				children: f,
				style: w
			}) => {
				return s.a.createElement(c.t, {
					onClick: t => {
						if (b && b(t), e(), p === a.awardNotification) return h();
						n(Object(l.b)(o))
					},
					className: r,
					text: t,
					priority: d,
					Icon: i,
					redditStyle: m,
					isFullWidth: u,
					style: w
				}, f)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(d.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(d.a)(r))
				}
			}));
			t.b = u(Object(i.c)(m))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, r) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = r("./src/reddit/controls/TextButton/index.tsx"),
				c = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = r("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = r.n(l);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => s.a.createElement(d.e, null, s.a.createElement(d.i, null, s.a.createElement(c.a, null, s.a.createElement(d.q, null, e.headerText || a.fbt._("Confirm", null, {
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
			}, e.cancelActionText || a.fbt._("Cancel", null, {
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
				importAsync: () => Promise.all([r.e("vendors~NftProfileUnit"), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/trackers/topAwarded.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/actions/gold/modals.ts"),
				b = r("./src/reddit/contexts/InsideOverlay.tsx"),
				h = r("./src/reddit/contexts/Post/index.tsx"),
				f = r("./src/reddit/models/Gold/TopAwarded/index.ts"),
				w = r("./src/reddit/selectors/gold/topAwarded.ts"),
				v = r("./src/reddit/selectors/posts.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/actions/gold/topAwarded.ts"),
				A = r("./src/reddit/actions/modal.ts"),
				I = r("./src/reddit/components/AwardBadges/index.tsx"),
				E = r("./src/reddit/components/PostTopMeta/index.tsx"),
				O = r("./src/reddit/controls/Button/index.tsx"),
				_ = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				j = r("./src/reddit/icons/svgs/Close/index.tsx"),
				N = r("./src/reddit/icons/svgs/TopAwarded/index.tsx");
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
				k = r("./node_modules/lodash/noop.js"),
				P = r.n(k),
				T = r("./src/lib/currency/currencies.ts"),
				S = r("./src/lib/localizeCurrency/index.ts"),
				U = r("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				M = r("./src/reddit/components/UserIcon/index.tsx"),
				B = r("./src/reddit/hooks/useLocale.ts"),
				F = r("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less"),
				L = r.n(F);
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = (e, t) => t ? R._("{userName} (you)", [R._param("userName", e)], {
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
						rank: d,
						redditor: c,
						score: l
					} = t, m = Object(B.a)(), u = !c.profile;
					return n.a.createElement("div", {
						className: Object(i.a)(L.a.container, r)
					}, n.a.createElement("div", {
						className: L.a.rank
					}, d || "-"), n.a.createElement(M.a, {
						className: L.a.icon,
						iconUrl: c.icon ? c.icon.url : void 0,
						isNSFW: !!c.profile && c.profile.isNsfw,
						userName: c.name
					}), n.a.createElement("div", {
						className: L.a.text
					}, n.a.createElement("h3", {
						className: L.a.name
					}, u ? c.name : n.a.createElement(U.a, {
						user: c.name,
						tooltipId: `topawarder--userhovercard--${c.name}`,
						sendHoverCardEvent: P.a
					}, H(c.name, c.id === a))), l > 0 && n.a.createElement("span", {
						className: L.a.score
					}, Object(S.b)(l, {
						locale: m,
						type: T.b.Reddit,
						currency: T.a
					}))), o && n.a.createElement("button", {
						className: L.a.cta,
						onClick: s
					}, n.a.createElement(C.a, {
						className: L.a.giftIcon
					}), R._("Award", null, {
						hk: "4BW9Zq"
					})))
				},
				G = r("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less"),
				W = r.n(G);
			const z = 8;
			var q = function(e) {
					const {
						awarders: t,
						className: r,
						currentRank: a,
						currentUserId: s,
						hideAddAwardButton: o,
						onGild: d
					} = e;
					return t.length ? n.a.createElement("div", {
						className: Object(i.a)(r, W.a.container)
					}, a && (!a.rank || a.rank > z) && n.a.createElement(D, {
						className: W.a.awarder,
						currentUserId: s,
						awarder: a,
						key: a.redditor.id,
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
				Q = r("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				K = r("./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less"),
				J = r.n(K);
			var V = function(e) {
					const {
						showScore: t,
						awarder: r,
						className: a,
						rank: s
					} = e, o = r && !r.redditor.profile, d = r ? r.redditor.name : "—";
					return n.a.createElement("div", {
						className: Object(i.a)(a, J.a.winner, J.a[`winner${s}`], {
							[J.a.winnerPlaceholder]: !r
						})
					}, n.a.createElement("div", {
						className: J.a.iconContainer
					}, n.a.createElement("div", {
						className: J.a.iconWithBorder
					}, r && n.a.createElement(M.a, {
						className: J.a.icon,
						iconUrl: r.redditor.icon ? r.redditor.icon.url : void 0,
						isNSFW: !!r.redditor.profile && r.redditor.profile.isNsfw,
						userName: d
					})), n.a.createElement("div", {
						className: J.a.rank
					}, s)), n.a.createElement("h3", {
						className: J.a.name
					}, r && !o ? n.a.createElement(U.a, {
						user: d,
						tooltipId: `topawarderwinner-userhovercard--${d}`,
						sendHoverCardEvent: P.a,
						wrapperClassName: J.a.hoverCardWrapper
					}, d) : d), r && t && n.a.createElement("div", {
						className: J.a.score
					}, n.a.createElement(Q.a, {
						className: J.a.coinIcon
					}), r.score))
				},
				Y = r("./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less"),
				X = r.n(Y);
			var Z = function(e) {
					const {
						awarders: t,
						className: r,
						showScores: a
					} = e;
					if (!t.length) return null;
					const s = [t[0], t[1] || void 0, t[2] || void 0];
					return n.a.createElement("div", {
						className: Object(i.a)(r, X.a.container, {
							[X.a.flexContainer]: s.length < 3
						})
					}, s.map((e, t) => n.a.createElement(V, {
						showScore: a,
						className: X.a.winner,
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ae = 7, ne = Object(o.a)(e => e, w.a, w.c, w.e, g.k, (e, t, r, a, n) => {
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
				const s = Object(v.G)(e, {
						postId: t
					}),
					o = Object(w.b)(e, t),
					d = Object(w.d)(e, t),
					i = [];
				let c, l = -1;
				return d && d.forEach((e, t) => {
					if (!e.redditor.profile) return c = e, void(l = t);
					const r = l < 0 ? e : {
						...e,
						rank: e.rank - 1
					};
					i.push(r)
				}), {
					anonymousRank: c,
					currentPostId: t,
					currentRank: o,
					currentUser: n,
					error: r,
					list: i,
					pending: a,
					post: s
				}
			}), se = Object(s.b)(ne);
			const oe = Object(d.a)(se(Object(b.b)((function(e) {
				const {
					anonymousRank: t,
					currentPostId: r,
					currentRank: o,
					currentUser: d,
					post: i,
					list: b,
					pending: w
				} = e, v = Object(s.d)(), g = Object(u.a)();
				Object(a.useEffect)(() => {
					r && v(Object(x.a)(r))
				}, [r, v]), Object(a.useEffect)(() => {
					r && g(Object(m.c)(r))
				}, [r, g]);
				const k = () => v(Object(A.g)(c.a.ECON_TOP_AWARDERS)),
					P = () => {
						if (r) {
							const e = Object(l.e)(l.a.GildingFlow, !0);
							g(Object(m.b)()), v(Object(p.d)({
								thingId: r,
								correlationId: e
							}))
						}
					};
				if (!r || !i) return k(), null;
				const T = d && d.id === i.authorId,
					S = !i.isGildable || !!T,
					U = i.topAwardedType === f.a.Active,
					M = i.topAwardedType === f.a.Inactive,
					B = !w && !!b && !!b.length,
					F = !w && b && !b.length && i && U;
				return n.a.createElement("div", {
					className: ee.a.inner
				}, n.a.createElement("div", {
					className: ee.a.modalHeader
				}, n.a.createElement(j.a, {
					className: ee.a.closeIcon,
					onClick: k
				}), n.a.createElement("h3", {
					className: ee.a.title
				}, re._("Top Awarders", null, {
					hk: "3hzpI8"
				}))), n.a.createElement("div", {
					className: ee.a.modalContent
				}, n.a.createElement("div", {
					className: ee.a.awardBadgesContainer
				}, n.a.createElement(h.a, {
					postId: i.id
				}, n.a.createElement(I.a, {
					awardsCountInView: ae,
					awardsPlaqueStyle: !0,
					hideCta: !0,
					hideTopAwardedBadge: !0,
					tooltipType: E.c.TopAwardedModal,
					thing: i
				}))), w && n.a.createElement(_.a, {
					className: ee.a.loader,
					sizePx: 60
				}), B && M && o && 1 === o.rank && n.a.createElement("div", {
					className: ee.a.youWon
				}, re._("You won 1st place!", null, {
					hk: "1MxirM"
				}), n.a.createElement(y, {
					className: ee.a.youWonIcon
				})), B && n.a.createElement(Z, {
					className: ee.a.winners,
					awarders: b,
					showScores: M
				}), B && M && (!o || o && 1 !== o.rank) && n.a.createElement("div", {
					className: ee.a.info
				}, n.a.createElement("h3", {
					className: ee.a.infoTitle
				}, re._("Top Awarded Post", null, {
					hk: "1BJ1We"
				})), n.a.createElement("span", {
					className: ee.a.infoDesc
				}, re._("This is a historic Top Awarded post. Give Awards to newer posts to add your name to the list!", null, {
					hk: "2U5vPa"
				})), n.a.createElement(N.a, {
					className: ee.a.topAwardedIcon
				})), F && n.a.createElement("div", {
					className: ee.a.info
				}, n.a.createElement(N.a, {
					className: ee.a.topAwardedIcon
				}), n.a.createElement("h3", {
					className: ee.a.infoTitle
				}, re._("Get on the board", null, {
					hk: "RVDeW"
				})), n.a.createElement("span", {
					className: ee.a.infoDesc
				}, re._("Award publicly and your username will show up on this leaderboard!", null, {
					hk: "3reZYa"
				})), n.a.createElement(O.l, {
					className: ee.a.cta,
					onClick: P
				}, n.a.createElement(C.a, {
					className: ee.a.giftIcon
				}), re._("Give Award", null, {
					hk: "2sa45i"
				}))), B && i && U && n.a.createElement(q, {
					awarders: b,
					className: ee.a.list,
					currentRank: o,
					currentUserId: d && d.id,
					hideAddAwardButton: S,
					onGild: P
				}), !w && U && t && n.a.createElement("div", {
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
				d = r("./src/reddit/controls/ImageInput/index.tsx"),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				m = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(u);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: r,
				isProfileCard: a,
				isLoading: u,
				imageUrl: b,
				onFileSelected: h
			}) => {
				const f = Object(s.e)(m.a);
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.Container, r)
				}, n.a.createElement("label", {
					className: p.a.HitBox
				}, n.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? n.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), n.a.createElement(d.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						h(e, t)
					},
					isPending: f ? u : void 0
				}), !u && n.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: a
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
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/inContextModeration.ts"),
				i = r("./src/reddit/actions/snoovatarModal.ts"),
				c = r("./src/reddit/actions/subredditModeration/ban.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				m = r("./src/reddit/helpers/isPost.ts"),
				u = r("./src/reddit/selectors/bannedUser.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/experiments/cnc/index.ts"),
				h = r("./src/reddit/selectors/gold/awardIcon.ts"),
				f = r("./src/reddit/selectors/moderatorPermissions.ts"),
				w = r("./src/reddit/selectors/modUserNotes.ts"),
				v = r("./src/reddit/selectors/posts.ts"),
				g = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/structuredStyles.ts"),
				A = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/tooltip.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/selectors/userFlair.ts"),
				_ = r("./src/reddit/selectors/userPrefs.ts"),
				C = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				j = r("./node_modules/fbt/lib/FbtPublic.js"),
				N = r("./src/config.ts"),
				y = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				k = r("./src/lib/lessComponent.tsx"),
				P = r("./src/lib/prettyPrintNumber/index.ts"),
				T = r("./src/reddit/components/ChatButton/index.tsx"),
				S = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				U = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				M = r("./src/reddit/components/SubscribeButton/index.tsx"),
				B = r("./src/reddit/components/UserIcon/index.tsx"),
				F = r("./src/reddit/endpoints/profile/info.ts"),
				L = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				R = r("./src/reddit/icons/fonts/Info/index.tsx"),
				H = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				D = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				G = r("./src/reddit/models/Gold/Award.ts"),
				W = r("./src/reddit/models/User/index.ts"),
				z = r("./src/reddit/components/HumanDate/index.tsx"),
				q = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				Q = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				K = r("./src/reddit/actions/modal.ts"),
				J = r("./src/reddit/constants/modals.ts"),
				V = r("./src/reddit/components/Hovercards/helpers.ts"),
				Y = r("./src/reddit/icons/fonts/index.tsx"),
				X = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Z = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				$ = r.n(Z);
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js"), te = Object(o.c)({
				hasModMailPermissions: Object(f.b)(X.c.mail),
				isUserBanned: (e, t) => !!Object(u.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(E.wb)(e, {
					userName: t.username
				})
			});
			class re extends n.a.Component {
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
						toggleBanModal: d,
						toggleMuteModal: i
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, a ? n.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(L.e(t))
						}
					}, n.a.createElement(Y.a, {
						name: "ban",
						isFilled: !0,
						className: $.a.icon
					}), ee._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							d(), o(L.a(t))
						}
					}, n.a.createElement(Y.a, {
						name: "ban",
						className: $.a.icon
					}), ee._("Ban User", null, {
						hk: "3OhuLx"
					})), r && n.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							i(), o(L.d(t))
						}
					}, n.a.createElement(Y.a, {
						name: "mod_mute",
						className: $.a.icon
					}), ee._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ae = Object(s.b)(te, (e, {
					username: t,
					subredditId: r,
					contextId: a
				}) => ({
					onUnbanUser: t => e(Object(c.e)(r, t)),
					requestUserBanInfo: () => e(Object(c.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(d.c)({
							username: t,
							subredditId: r,
							contextId: a
						})), e(Object(c.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(d.d)({
							username: t,
							subredditId: r,
							contextId: a
						})), e(Object(K.i)(J.a.MUTE_USER))
					}
				}))(re),
				ne = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: se
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ne.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(V.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(L.c(e.contextId))
					}
				}, n.a.createElement(Y.a, {
					name: "tag",
					className: $.a.icon
				}), se._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ie = r.n(de);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const le = k.a.wrapped(B.a, "UserIcon", ie.a),
				me = k.a.wrapped(M.a, "SubscribeButton", ie.a),
				ue = k.a.wrapped(T.b, "ChatButton", ie.a),
				pe = k.a.wrapped(D.a, "PremiumIcon", ie.a),
				be = k.a.wrapped(y.a, "UserNameLink", ie.a),
				he = k.a.div("UserNameMetaData", ie.a),
				fe = k.a.div("MetaDataItem", ie.a),
				we = k.a.div("Bullet", ie.a),
				ve = k.a.div("UserNameContainer", ie.a),
				ge = k.a.div("KarmaGrid", ie.a),
				xe = k.a.div("GenericKarma", ie.a),
				Ae = k.a.a("InfoLink", ie.a),
				Ie = k.a.div("KarmaCount", ie.a),
				Ee = k.a.div("GenericKarmaLabel", ie.a),
				Oe = k.a.div("BannerImage", ie.a),
				_e = k.a.div("UserContainer", ie.a),
				Ce = k.a.div("BottomSpacer", ie.a),
				je = k.a.div("Container", ie.a),
				Ne = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(be, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && n.a.createElement(H.a, {
					className: ie.a.adminIcon,
					title: j.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && n.a.createElement(y.a, {
					to: "/premium"
				}, n.a.createElement(pe, null))), n.a.createElement(he, null, n.a.createElement(fe, null, `u/${e.userName}`, n.a.createElement(we, null, "•")), n.a.createElement(fe, null, (e.user.createdUtc || e.user.created) && n.a.createElement(z.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				ye = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...F.a,
						...t
					};
					return n.a.createElement(ge, null, n.a.createElement(xe, null, n.a.createElement(Ie, null, Object(P.b)(r.fromPosts)), n.a.createElement(Ee, null, j.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [j.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(xe, null, n.a.createElement(Ie, null, Object(P.b)(r.fromComments)), n.a.createElement(Ee, null, j.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [j.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), n.a.createElement(xe, null, n.a.createElement(Ie, null, Object(P.b)(r.fromAwardsReceived)), n.a.createElement(Ee, null, j.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [j.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), n.a.createElement(Ae, {
						href: G.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(R.a, {
						className: ie.a.infoIcon
					})))), n.a.createElement(xe, null, n.a.createElement(Ie, null, Object(P.b)(r.fromAwardsGiven)), n.a.createElement(Ee, null, j.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [j.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), n.a.createElement(Ae, {
						href: G.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(R.a, {
						className: ie.a.infoIcon
					})))))
				},
				ke = e => {
					var t, r;
					const {
						className: a,
						contextId: s,
						currentUser: o,
						hideNSFWPref: d,
						hoverId: i,
						isLoggedIn: c,
						onClickSnoovatar: l,
						moderatorPermissions: m,
						prefersReducedAnimations: u,
						profile: p,
						sendEvent: b,
						style: h,
						subredditId: f,
						topAwardIcon: w,
						userName: v,
						user: g,
						userFlair: x,
						isCurrentUserBanned: A,
						userProfileStyles: I,
						acceptChats: E,
						isCommentAuthorBlocked: O
					} = e;
					if (!g) return n.a.createElement(je, {
						style: h
					});
					const _ = !!o && Object(W.e)(o) === v,
						C = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						y = g.accountIcon || `${N.a.assetPath}/img/snoo_user_placeholder.png`,
						k = null == m ? void 0 : m.flair,
						P = null == m ? void 0 : m.access,
						T = (null == x ? void 0 : x.templateIds) && (null === (t = null == x ? void 0 : x.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						U = null === (r = null == x ? void 0 : x.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: M
						} = g,
						B = !!g.snoovatarFullBodyAsset,
						F = g.isNSFW && d;
					let R;
					return R = B ? !F && I && I.bannerBackgroundImage || void 0 : F ? `${N.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(je, {
						className: a,
						id: i,
						style: h
					}, !B && R && n.a.createElement(Oe, {
						style: {
							backgroundImage: `url('${R}')`
						}
					}), n.a.createElement(_e, null, B ? n.a.createElement(Q.a, {
						isHovercard: !0,
						bannerBackgroundImage: R,
						compact: !0,
						currentUserHasSnoovatar: C,
						isEmployee: g.isEmployee,
						isGold: g.isGold,
						isNSFW: g.isNSFW,
						isOwnProfile: _,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!u,
						snoovatarUrl: g.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: g.created,
						username: v,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(ve, null, n.a.createElement(le, {
						iconUrl: y,
						isNSFW: g.isNSFW,
						userName: v
					}), n.a.createElement(Ne, {
						title: null == p ? void 0 : p.title,
						user: g,
						userName: v
					})), n.a.createElement(ye, {
						user: g
					}), M && n.a.createElement(q.a, {
						recentAwardings: M,
						topAwardIcon: w,
						username: v
					}), c && !_ && !A && E && !O && n.a.createElement(ue, {
						contextId: s,
						userId: g.id,
						text: j.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), g.hasUserProfile && !A && !O && !_ && g.enableFollowers && n.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(L.g)(e ? "unfollow" : "follow", s),
						isFullWidth: !0,
						small: !0
					})), P && s && !_ && f && n.a.createElement(ae, {
						contextId: s,
						subredditId: f,
						sendEvent: b,
						username: v
					}), k && s && T && U && f && n.a.createElement(oe, {
						contextId: s,
						subredditId: f,
						sendEvent: b,
						username: v
					}), n.a.createElement(S.i, {
						contextId: s,
						subredditId: f,
						user: g
					}), !(P || c) && n.a.createElement(Ce, null))
				},
				Pe = Object(U.a)(ke),
				Te = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return n.a.createElement(Pe, ce({
						isOpen: t
					}, e))
				};
			Te.WrappedComponent = ke;
			var Se = Te;
			const Ue = Object(o.c)({
					activeTooltipId: I.a,
					currentUser: E.k,
					isLoggedIn: E.O,
					hideNSFWPref: E.E,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(f.m)(e, {
						subredditId: t
					}) : void 0,
					prefersReducedAnimations: _.c,
					profile: (e, {
						userName: t
					}) => Object(g.j)(e, {
						profileName: t
					}),
					topAwardIcon: (e, {
						userName: t
					}) => Object(h.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: E.wb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(O.d)(e, {
						subredditId: t
					}) : void 0,
					isCurrentUserBanned: (e, t) => !!Object(A.l)(t) && Object(A.db)(e, t),
					userProfileStyles: (e, t) => Object(x.m)(e, Object(g.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(g.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isInModNotesExperiment: (e, {
						subredditId: t
					}) => Object(b.b)(e, t),
					trophyCase: (e, t) => Object(g.r)(e, Object(g.m)(e, t.userName)),
					isNightMode: E.bb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(m.a)(t.contextId) ? Object(v.G)(e, {
							postId: t.contextId
						}) : Object(p.b)(e, {
							commentId: t.contextId
						});
						return Object(w.a)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, {
						userName: t
					}) => Object(A.eb)(e, {
						identifier: {
							name: t,
							type: "profile"
						}
					}),
					isUserBanned: (e, {
						subredditId: t,
						userName: r
					}) => !!t && !!Object(u.b)(e, {
						subredditId: t,
						username: r
					}),
					totalModNoteCount: (e, t) => {
						if (!t.contextId) return;
						const r = Object(m.a)(t.contextId) ? Object(v.G)(e, {
							postId: t.contextId
						}) : Object(p.b)(e, {
							commentId: t.contextId
						});
						return Object(w.f)(e, null == r ? void 0 : r.authorId, t.subredditId)
					}
				}),
				Me = Object(s.b)(Ue, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onUnbanUser: r => t.subredditId && e(Object(c.e)(t.subredditId, r)),
					toggleBanModal: () => {
						t.subredditId && t.contextId && (e(Object(d.c)({
							username: t.userName,
							subredditId: t.subredditId,
							contextId: t.contextId
						})), e(Object(c.a)(t.subredditId, t.userName)))
					}
				}));
			t.a = Me(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: () => !e.isInModNotesExperiment && e.onHideTooltip && e.onHideTooltip()
			}, e.isInModNotesExperiment ? n.a.createElement(C.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
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
				userIsSubscriber: e.userIsSubscriber,
				isUserBanned: e.isUserBanned,
				toggleBanModal: e.toggleBanModal,
				onUnbanUser: e.onUnbanUser,
				totalModNoteCount: e.totalModNoteCount,
				onHideTooltip: e.onHideTooltip
			}) : n.a.createElement(Se, {
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
			})))
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
				d = r("./src/reddit/components/TrackingHelper/index.tsx");
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
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				i = r.n(d);
			const {
				fbt: c
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
						totalCount: d
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
					}), d > 1 && n.a.createElement("span", {
						className: i.a.count
					}, `+${Object(o.b)(d-1)}`)), n.a.createElement("div", {
						className: i.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", a.name), c._plural(d)], {
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
				d = r("./src/reddit/components/EditableImage/index.tsx"),
				i = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
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
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? s.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(i.e)(r) === c ? s.a.createElement(d.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", c)], {
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
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(n.c)({
					currentUser: o.k,
					hideNSFWPref: o.E
				}),
				i = Object(a.b)(d, e => ({
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
				d = r("./node_modules/react-router/esm/react-router.js"),
				i = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = r("./src/reddit/models/Vote/index.ts"),
				h = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = r.n(h);
			const {
				fbt: w
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: r,
				post: d,
				share: h
			}) => {
				const v = Object(l.b)(),
					g = Object(o.d)(),
					x = d && d.id,
					A = d && d.voteState;
				let I = null;
				x || (I = e ? "user_hovercard" : "profile_overview");
				const E = Object(n.useCallback)(() => v(Object(u.g)(e ? "user_hovercard" : "profile_overview", t)), [e, v, t]);
				return s.a.createElement(m.t, {
					onClick: () => {
						r ? (v(u.h), x && A === b.a.notVoted && g(Object(i.jb)(x))) : E();
						const e = r ? "postify" : "copy";
						g(Object(c.b)({
							clickSource: I,
							share: h,
							source: e
						}))
					},
					className: Object(a.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: r
					}),
					isFullWidth: !0
				}, s.a.createElement(p.a, {
					className: Object(a.a)({
						[f.a.shirtIcon]: !r,
						[f.a.avatarPostButtonShirtIcon]: r
					})
				}), w._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
					className: f.a.chevronIcon
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
				d = r("./src/reddit/icons/fonts/index.tsx"),
				i = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(c);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: r,
				isOwnProfile: a,
				onClick: c
			}) {
				return n.a.createElement(o.t, {
					onClick: c,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && a,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? n.a.createElement(i.a, {
					className: l.a.shirtIcon
				}) : n.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : a ? m._("Create Avatar", null, {
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
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(i),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: a,
				isDeletingBanner: i,
				onDeleteBanner: l
			}) {
				return n.a.createElement("div", {
					className: c.a.bannerWrapper
				}, n.a.createElement(d.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), a && e && (i ? n.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : n.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
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
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: a,
				username: i,
				...c
			}) {
				const l = t ? n.a.createElement(n.a.Fragment, null, "u/", i, " · ", n.a.createElement(o.d, {
					seconds: a,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${i}`;
				return r ? n.a.createElement(s.a, d({}, c, {
					className: e,
					to: r
				}), l) : n.a.createElement("span", d({}, c, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var a = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				d = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				i = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = r.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: r,
				isGold: s,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, r && o.a.createElement(d.a, {
				className: m.a.snoovatarAdminIcon,
				title: n.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), s && o.a.createElement("a", {
				title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${a.a.redditUrl}/premium`
			}, o.a.createElement(c.a, {
				className: m.a.snoovatarPremiumIcon
			})), l && o.a.createElement(i.a, {
				className: m.a.snoovatarNsfwIcon,
				title: n.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
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
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				p = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				b = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				h = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				f = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				w = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				v = r.n(w);
			const g = 25;

			function x(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function A(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const I = x("particleDelay", v.a),
				E = x("particleX", v.a),
				O = x("particleFloat", v.a),
				_ = () => {
					const e = A(E),
						t = A(O),
						r = A(I);
					return Object(o.a)(v.a.particle, e, t, r)
				};
			class C extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < g; t++) e.push(this.createParticle(t));
					return n.a.createElement("div", {
						role: "presentation",
						className: v.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return n.a.createElement("div", {
						key: e,
						className: `${_()}`
					})
				}
			}
			var j = C,
				N = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				y = r.n(N),
				k = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: a,
				isDeletingBanner: w,
				isEmployee: g,
				isGold: x,
				isNSFW: A,
				isOwnProfile: I,
				onClickSnoovatar: E,
				onDeleteBanner: O,
				prefersReducedAnimations: _,
				snoovatarUrl: C,
				title: N,
				userCreated: P,
				username: T,
				url: S,
				isHovercard: U
			}) => {
				const M = Object(s.e)(e => !I && !!C && Object(m.g)(e)),
					B = Object(s.e)(u.b),
					F = C && Object(c.e)(C) && B;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(h.a, {
					bannerBackgroundImage: e,
					editMode: !!a,
					isNSFW: A,
					username: T,
					isDeletingBanner: !!w,
					onDeleteBanner: O
				}), F ? n.a.createElement("div", {
					className: v.a.nftProfileUnitContainer
				}, n.a.createElement(d.a, {
					className: v.a.nftProfileUnit,
					imageUrl: C
				})) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: v.a.snoovatarContainer
				}, x && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: v.a.topGlow
				}), n.a.createElement("div", {
					className: v.a.bottomGlow
				}), !_ && n.a.createElement(j, null)), n.a.createElement("img", {
					className: Object(o.a)(v.a.snoovatar, {
						[v.a.premiumGlow]: x
					}),
					src: C || void 0
				})), !a && I && n.a.createElement(i.a, {
					to: "/settings/profile",
					className: v.a.snoovatarSettingsLink
				}, n.a.createElement(l.a, {
					name: "settings",
					className: y.a.settingsIcon
				}))), n.a.createElement(k.a, {
					isEmployee: g,
					isGold: x,
					isNSFW: A,
					title: N,
					username: T
				}), n.a.createElement(f.a, {
					className: v.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: T,
					userCreated: P,
					url: S
				}), (I || !r && !!C) && n.a.createElement(p.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: I,
					onClick: E
				}), M && n.a.createElement(b.a, {
					username: T,
					isHovercard: !!U,
					share: {
						username: T
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
				d = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => n.a.createElement("div", {
				className: Object(s.a)(d.a.loadingIcon, t, {
					[d.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return A
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "m", (function() {
				return P
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "e", (function() {
				return U
			}));
			var a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/lib/uploadToS3/index.ts"),
				i = r("./src/redditGQL/operations/AwardSheetInfo.json"),
				c = r("./src/redditGQL/operations/AwardSheetInfoForProfile.json"),
				l = r("./src/redditGQL/operations/CreateCommunityAward.json"),
				m = r("./src/redditGQL/operations/CreateGlobalAward.json"),
				u = r("./src/redditGQL/operations/CreateModAward.json"),
				p = r("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				b = r("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				h = r("./src/redditGQL/operations/GlobalAwards.json"),
				f = r("./src/redditGQL/operations/ManageableAwards.json"),
				w = r("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				v = r("./src/redditGQL/operations/RemoveCommunityAward.json"),
				g = r("./src/reddit/constants/headers.ts"),
				x = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const A = (e, t, r, s) => {
					const d = {
						subreddit: t,
						filepath: r,
						mimetype: s
					};
					return Object(n.a)(Object(o.a)(e, [g.a]), {
						method: a.jb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: d
					})
				},
				I = async (e, t) => Object(d.a)(t, e), E = (e, t, r, a, n, o, d, i, c) => Object(s.a)(e, {
					...l,
					variables: {
						coinPrice: d,
						iconHeight: o,
						iconWidth: n,
						iconUrl: a,
						name: r,
						subredditId: t,
						startsAt: i,
						endsAt: c
					}
				}), O = (e, t, r, a, n, o, d, i, c) => Object(s.a)(e, {
					...u,
					variables: {
						iconHeight: o,
						iconWidth: n,
						iconUrl: a,
						monthsOfPremium: d,
						name: r,
						subredditId: t,
						startsAt: i,
						endsAt: c
					}
				}), _ = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: r,
					context: a,
					daysOfDripExtension: n,
					daysOfPremium: o,
					description: d,
					endsAt: i,
					giverCoinReward: c,
					iconFormat: l,
					iconHeight: u,
					iconUrl: p,
					iconWidth: b,
					isNew: h,
					name: f,
					pennyPrice: w,
					pennyDonate: v,
					startsAt: g,
					subredditCoinReward: x
				}) => Object(s.a)(a, {
					...m,
					variables: {
						awardSubType: e,
						iconFormat: l,
						iconHeight: u,
						iconWidth: b,
						iconUrl: p,
						isNew: h,
						daysOfPremium: o,
						daysOfDripExtension: n,
						description: d,
						coinPrice: t,
						coinReward: r,
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
					...h
				}), y = (e, t, r) => Object(s.a)(e, {
					...i,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), k = (e, t, r) => Object(s.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), P = (e, t) => Object(s.a)(e, {
					...v,
					variables: {
						awardId: t
					}
				}), T = (e, t, r) => Object(s.a)(e, {
					...p,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), S = (e, t, r) => Object(s.a)(e, {
					...b,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), U = async (e, t, r) => {
					const s = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(o.a)(e, [g.a]), {
						method: a.jb.POST,
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
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			const a = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
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

			function d(e, t) {
				const r = new a.BigNumber(e),
					n = new a.BigNumber(t || 1);
				return r.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			}));
			var a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				s = r("./src/reddit/selectors/gold/topAwarded.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t = {}) => ({
					...Object(n.h)(e, t),
					correlationId: Object(a.e)(a.a.GildingFlow, !1),
					profile: o.S(e),
					subreddit: o.jb(e)
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
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(s.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(s.a, null, e.desc))
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
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				d = r.n(o);
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
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, r) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				d = r.n(o);
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
				d = r.n(o);
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
		"./src/reddit/icons/svgs/TopAwarded/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
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
		"./src/reddit/models/Gold/TopAwarded/index.ts": function(e, t, r) {
			"use strict";
			var a;
			r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Active = "ACTIVE", e.Inactive = "INACTIVE"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			var a = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: a.t
				}) === a.w.Enabled,
				o = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: a.Dc
				}) === a.dd
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var a = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				s = r("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: s.O,
						experimentName: a.Bc
					});
					return !(!t || Object(a.xf)(t))
				},
				d = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: s.O,
						experimentName: a.Bc
					}) === a.id.ListingEnabled
				}
		},
		"./src/reddit/selectors/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			const a = e => e.users.topAwarders.currentPostId,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconTopAwardersModal.96d7e66d8ab702a2b8b4.js.map