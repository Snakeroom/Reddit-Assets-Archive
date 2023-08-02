// https://www.redditstatic.com/desktop2x/AuthorHovercard.cd82460f93f0da756dca.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/lib/constants/colors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = {
				alien500: "#3690ea",
				alien600: "#006dc6",
				berry300: "#e4abff",
				berry500: "#b44ac0",
				berry600: "#9c3cac",
				mango500: "#ffd635",
				mango600: "#ff6600",
				mint600: "#009eaa",
				narwhal100: "#f1f23f5",
				narwhal200: "#e9ebed",
				narwhal300: "#d4d7d9",
				narwhal600: "#989ca0",
				narwhal700: "#898d90",
				orangeRed600: "#fb133a",
				orangeRed700: "#be0039",
				orca50: "#5a5c5e",
				orca200: "#464748",
				orca300: "#3a3a3a",
				orca600: "#242424",
				orca700: "#1E1E1E",
				periwinkle300: "#94b3ff",
				periwinkle500: "#6a5cff",
				periwinkle600: "#5349da",
				sakura500: "#ff3881",
				error: "#ea0027",
				white: "#ffffff",
				black: "#000000",
				nightTone1: "#282829",
				nightTone2: "#343536",
				nightTone3: "#3A3A3C",
				nightTone4: "#D8DADC",
				nightTone5: "#1A232C",
				nightTone6: "#29292A"
			}
		},
		"./src/reddit/actions/chat/toggle.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/actions/matrixChat/index.ts");
			const a = e => async t => {
				t(Object(r.f)(e))
			}
		},
		"./src/reddit/actions/matrixChat/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			const r = "MATRIX_CHAT_SET_URL",
				a = "MATRIX_CHAT_RESET_ACTIVE_CHAT",
				s = "MATRIX_CHAT_SET_STATE",
				o = "MATRIX_CHAT_START_CHAT_WITH_USER",
				i = "MATRIX_CHAT_SET_NOTIFICATIONS_COUNT"
		},
		"./src/reddit/actions/matrixChat/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "b", (function() {
				return v
			}));
			var r, a = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/reducers/features/matrixChat/index.ts");

			function c(e) {
				return Object(a.c)(s.q.CHAT, s.z.CHAT_CONTAINER_SIZE_KEY, e)
			}

			function d(e) {
				switch (e) {
					case r.EMBED:
						return i.b.NORMAL;
					case r.MINIMIZED:
						return i.b.MINIMIZED;
					default:
						return i.b.CLOSED
				}
			}! function(e) {
				e.EMBED = "embed", e.FULL = "full", e.HIDDEN = "hidden", e.MINIMIZED = "minimized"
			}(r || (r = {}));
			var l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/actions/matrixChat/constants.ts");
			const m = Object(o.a)(u.d),
				b = Object(o.a)(u.a),
				p = e => (t, n) => {
					const o = n(),
						d = Object(l.k)(o);
					if (d) {
						const t = c(d),
							n = function(e) {
								switch (e) {
									case i.b.NORMAL:
										return r.EMBED;
									case i.b.MINIMIZED:
										return r.MINIMIZED;
									default:
										return r.HIDDEN
								}
							}(e.state);
						Object(a.d)(t, n, s.wc)
					}
					return t({
						type: u.c,
						payload: e
					})
				},
				f = Object(o.a)(u.b),
				h = Object(o.a)(u.e),
				v = e => async t => {
					const n = c(e),
						r = Object(a.b)(n);
					r && t(p({
						state: d(r)
					}))
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/get.js"),
				s = n.n(a),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.nb.GET,
				data: n
			});
			var _ = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				C = n("./src/reddit/models/SubredditModeration/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				N = n("./src/reddit/selectors/bannedUser.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				y = n("./node_modules/redux/es/redux.js");
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.s:
					case E.r:
						return null;
					case E.q:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.s: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(C.e)(n, r);
							return {
								...e,
								[a]: !0
							}
						}
						case E.r:
						case E.q: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(C.e)(n, r);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				U = Object(y.c)({
					error: w,
					pending: M
				});
			const P = {};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.r: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, a = Object(C.e)(r, n);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				A = n("./src/reddit/actions/inContextModeration.ts");
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.a:
						return t.payload;
					default:
						return e
				}
			};
			const H = {};
			var L = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.r: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				D = n("./node_modules/icepick/icepick.js");
			const F = {};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.p:
					case E.r: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(D.merge)(e, {
							[n]: r
						})
					}
					case E.w: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(D.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.v:
					case E.u:
						return null;
					case E.t:
						return t.payload;
					default:
						return e
				}
			};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.v:
							return !0;
						case E.u:
						case E.t:
							return !1;
						default:
							return e
					}
				},
				G = Object(y.c)({
					error: W,
					pending: z
				});
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.v:
						case E.t:
							return null;
						case E.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				K = Object(y.c)({
					api: G,
					result: Z
				});
			const J = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.r: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case E.w: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case E.p: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload, a = r[0];
							return a && e[n] && -1 === e[n].indexOf(a) ? {
								[n]: [a, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Q = Object(y.c)({
					api: U,
					fetchedTokens: B,
					inContext: T,
					loadMore: L,
					models: R,
					search: K,
					userOrder: q
				});
			Object(j.a)({
				features: {
					banned: Q
				}
			});
			const X = Object(o.a)(E.s),
				V = Object(o.a)(E.r),
				Y = Object(o.a)(E.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, r, a) => {
						let {
							apiContext: s
						} = a;
						const o = r(),
							i = t.after || "",
							c = Object(C.e)(e, i),
							d = o.features.banned.fetchedTokens[c];
						if (o.features.banned.api.pending[c] || d) return;
						n(X({
							subredditId: e,
							fetchedToken: i
						}));
						const l = o.subreddits.models[e].name,
							u = await x(s(), l, t);
						u.ok ? n(V({
							...u.body,
							fetchedToken: i
						})) : n(Y({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				ee = Object(o.a)(E.v),
				te = Object(o.a)(E.u),
				ne = Object(o.a)(E.t),
				re = (e, t) => async (n, r, a) => {
					let {
						apiContext: s
					} = a;
					const o = r().subreddits.models[e].name,
						i = {
							username: Object(_.a)(t)
						};
					n(ee());
					const c = await x(s(), o, i);
					c.ok ? n(te(c.body)) : n(ne(c.error))
				}, ae = Object(o.a)(E.p), se = Object(o.a)(E.w), oe = (e, t, n) => async (a, o, c) => {
					let {
						apiContext: d
					} = c;
					const u = o(),
						v = u.subreddits.models[e].url,
						C = u.subreddits.models[e].name;
					t.username = Object(_.a)(t.username), a(Object(i.h)(n));
					const g = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: Object(h.a)(`${e.apiUrl}${t}api/friend`),
						method: m.nb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(d(), v, t);
					if (g.ok) {
						a(Object(i.e)(n));
						const e = {
							username: t.username
						};
						a(Object(l.f)({
							kind: I.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await x(d(), C, e);
						s.ok && a(ae(s.body))
					} else {
						a(Object(i.f)(n, g.error));
						const e = s()(g, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(l.f)({
							kind: I.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, a, o) => {
					let {
						apiContext: i
					} = o;
					const c = a().subreddits.models[e].url,
						d = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: Object(h.a)(`${e.apiUrl}${t}api/unfriend`),
							method: m.nb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(i(), c, t);
					if (d.ok) n(se({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: I.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(d, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: I.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, r) => {
					const a = r();
					await Promise.all([(async () => {
						if (!Object(g.b)(u.a.BAN_USER)(a) && !Object(O.U)(a, {
								subredditId: e
							})) {
							const t = Object(O.X)(a, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const r = Object(k.Db)(a, {
							userName: t
						});
						if (!r) return;
						const s = Object(N.h)(a, {
							subredditId: e
						});
						s && s[r.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(c.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./node_modules/lodash/get.js"),
				o = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const m = (e, t, n) => Object(c.a)(Object(d.a)(e, [l.a]), {
				endpoint: Object(u.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.nb.GET,
				data: n
			});
			var b = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				p = n("./src/reddit/models/SubredditModeration/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(a.a)(v.Y),
				_ = Object(a.a)(v.W),
				C = Object(a.a)(v.V),
				I = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, r, a) => {
						let {
							apiContext: s
						} = a;
						const o = r(),
							i = t.after || "",
							c = Object(p.e)(e, i),
							d = o.pages.modHub.muted.fetchedTokens[c];
						if (o.pages.modHub.muted.api.pending[c] || d) return;
						n(x({
							subredditId: e,
							fetchedToken: i
						}));
						const l = o.subreddits.models[e].name,
							u = await m(s(), l, t);
						u.ok ? n(_({
							...u.body,
							fetchedToken: i
						})) : n(C({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				g = Object(a.a)(v.bb),
				N = Object(a.a)(v.ab),
				O = Object(a.a)(v.Z),
				k = (e, t) => async (n, r, a) => {
					let {
						apiContext: s
					} = a;
					const o = r().subreddits.models[e].name,
						i = {
							username: Object(b.a)(t)
						};
					n(g());
					const c = await m(s(), o, i);
					c.ok ? n(N(c.body)) : n(O(c.error))
				}, E = Object(a.a)(v.X), j = Object(a.a)(v.cb), y = (e, t) => async (n, a, s) => {
					let {
						apiContext: u
					} = s;
					const m = a().subreddits.models[e].url,
						b = await ((e, t, n) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.nb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "muted"
							}
						}))(u(), m, t);
					if (b.ok) n(j({
						subredditId: e,
						userId: t
					}));
					else {
						const e = o()(b, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(h.f)({
							kind: f.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, w = (e, t, n) => async (a, s, u) => {
					let {
						apiContext: p
					} = u;
					const v = s(),
						x = v.subreddits.models[e].url,
						_ = v.subreddits.models[e].name;
					t = Object(b.a)(t);
					const C = await ((e, t, n, r) => Object(c.a)(Object(d.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.nb.POST,
						data: {
							api_type: "json",
							name: n,
							note: r,
							type: "muted"
						}
					}))(p(), x, t, n);
					if (C.ok) {
						const e = {
							username: t
						};
						a(Object(h.f)({
							kind: f.b.SuccessMod,
							text: r.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const n = await m(p(), _, e);
						n.ok && a(E(n.body))
					} else {
						const e = o()(C, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(h.f)({
							kind: f.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const a = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				s = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				o = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/AnonymousSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				anonymousSnoovatar: "_20-K6l0lfYbSa7us2I9PHH"
			}
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: r,
					unreadCount: i,
					testId: d
				} = e;
				return n ? a.a.createElement("span", {
					className: Object(s.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: r || i < 1
					}),
					"data-testid": d
				}, r || i < 1 ? "" : Object(o.b)(i)) : null
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "bB2dVpEvw7ZW_71r6UOG8"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/LinkIcon/index.m.less": function(e, t, n) {
			e.exports = {
				linkIcon: "_2sD9TJ9u16l-c0te-dTdGd"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/LinkIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/components/CCM/ModUserNoteWithIcon/LinkIcon/index.m.less"),
				c = n.n(i);
			t.a = e => {
				const t = Object(o.b)("external_link");
				return a.a.createElement("a", {
					className: Object(s.a)(c.a.link, e.className),
					href: e.linkUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e.onClick
				}, a.a.createElement(t, {
					className: c.a.linkIcon
				}))
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metadata: "Q0CnEiiTYWW90JwBPi-3X",
				deleteButton: "_3xGgEou3qoyvyHtklgaVwR",
				operator: "_3mkZJiG1HSCl4dWJD3SJX7",
				createdDate: "_3DKC-l35UqIQdbPaQm6M_T",
				userIcon: "_1EQPlMscZuMqwdEddympoR"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/activeModalId.ts"),
				l = n("./src/reddit/helpers/trackers/modNote.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				b = n("./src/reddit/hooks/useLocale.ts"),
				p = n("./src/redditGQL/types.ts"),
				f = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/UserIcon/index.tsx"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less"),
				_ = n.n(x);
			t.a = e => {
				var t;
				const {
					className: n,
					deleteClassName: x,
					modNote: C,
					onClickUsername: I,
					shouldShowDelete: g,
					shouldShowUserIcon: N,
					subredditId: O
				} = e, k = Object(s.d)(), {
					user: E,
					id: j,
					itemType: y
				} = C, w = `ModUserNote--Modal--DeleteConfirmation--${j}`, S = Object(o.a)(), M = Object(r.useCallback)(() => k(Object(u.i)(w)), [k, w]), U = Object(r.useCallback)(() => {
					S(Object(l.b)({
						subredditId: O,
						modNote: C
					}))
				}, [O, S, C]), P = Object(r.useCallback)(() => {
					y && k(Object(m.b)(O, E.id, j, y)), S(Object(l.c)({
						subredditId: O,
						modNote: C
					}))
				}, [k, E.id, j, y, O, S, C]), B = Object(r.useCallback)(() => {
					M(), S(Object(l.j)({
						subredditId: O,
						modNote: C
					}))
				}, [O, S, C, M]), A = Object(s.e)(e => Object(d.a)(e) === w), T = Object(b.a)(), H = new Intl.DateTimeFormat(T, {
					month: "short",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric"
				}).format(new Date(C.createdAt)), L = C.itemType === p.A.Note && g;
				return a.a.createElement("div", {
					className: Object(c.a)(n, _.a.metadata)
				}, C.operator && a.a.createElement(v.default, {
					className: _.a.operator,
					to: `/user/${C.operator.displayName}/`,
					onClick: I
				}, N && a.a.createElement(h.a, {
					className: _.a.userIcon,
					userName: (null === (t = C.operator) || void 0 === t ? void 0 : t.displayName) || "",
					isNSFW: !1
				}), "u/", C.operator.displayName), a.a.createElement("span", {
					className: _.a.createdDate
				}, i.fbt._("on {createdDate}", [i.fbt._param("createdDate", H)], {
					hk: "2VoP7K"
				})), L && a.a.createElement(a.a.Fragment, null, a.a.createElement("button", {
					className: Object(c.a)(x, _.a.deleteButton),
					onClick: B
				}, i.fbt._("Delete", null, {
					hk: "4lt26q"
				})), A && a.a.createElement(f.a, {
					actionText: i.fbt._("Yes, Delete", null, {
						hk: "3kB0Hd"
					}),
					headerText: i.fbt._("Delete this note?", null, {
						hk: "bGAxq"
					}),
					modalText: i.fbt._("This mod note will be permanently deleted.", null, {
						hk: "DFQi2"
					}),
					onConfirm: P,
					onCancel: U,
					toggleModal: M,
					withOverlay: !0
				})))
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less": function(e, t, n) {
			e.exports = {
				modNote: "mmlDYQNFwnacB-N5KZvv_",
				link: "gSyoge47CLjhrl32kLMGn"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/NoteLabeledText/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3hiYGoi3Vu4LyfvVOlMZcW",
				labelIcon: "_2eTjg2aoICUGQm_8asj04C",
				label: "E4q4Yx4JzJgDXXNirDocx",
				note: "_3ePON7WCMU0Fi11blkHDzm"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/NoteLabeledText/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/icons/fonts/index.tsx"),
				o = n("./src/reddit/models/ModUserNotes/index.ts"),
				i = n("./src/redditGQL/types.ts"),
				c = n("./src/reddit/components/CCM/ModUserNoteWithIcon/NoteLabeledText/index.m.less"),
				d = n.n(c);
			t.a = e => {
				let {
					modNote: t
				} = e;
				const n = "label" in t && t.label || o.c,
					r = "note" in t ? t.note : void 0,
					c = Object(s.b)(o.e[n || "bot"], {
						isFilled: !0
					}),
					l = ![o.c, i.H.BotBan, i.H.PermaBan].includes(n);
				return r ? a.a.createElement(a.a.Fragment, null, l && a.a.createElement("div", {
					className: d.a.header
				}, a.a.createElement(c, {
					className: d.a.labelIcon,
					style: {
						color: o.d[n]
					}
				}), a.a.createElement("span", {
					className: d.a.label
				}, o.f[n]())), r && a.a.createElement("div", {
					className: d.a.note
				}, r)) : null
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less": function(e, t, n) {
			e.exports = {
				preview: "_2RVfC6XoxmZ5L6yGdjU91R",
				content: "_3ocjiEI9r7MkUsvZO52el7",
				title: "_1j_ZTH4J8r-tNYrNGn_bed",
				meta: "a0R63ORQiAFMcpzP9Im4F",
				thumbnail: "_2_LP9oUG6aMx3RyIsOfCFZ",
				thumbnailImage: "nIP-thAc2i064e0xdkn2u"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less": function(e, t, n) {
			e.exports = {
				subTitle: "_2LOJP8maz9pW8zXyMtz5sa",
				title: "_2ghDKWDpLbqs07Hculyc4f"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "CaQnYM63MUs5K_AUdPb4I",
				metaDataDelete: "_3vGkMGJX0nPPypdPZGvDMy",
				iconWrapper: "_24S3uB-ZwBcv31bRddztjA",
				icon: "-QuBNgk76BLP5G6G4JQB0",
				content: "_3AdrMbwRSdnVCKNxuFQ2Ae",
				title: "_2LpAnZOGjbvru1cU_RpprE",
				note: "_1gJlmWV6LFLzxY2nTlIjZF",
				preview: "MR_BMgork7-7u12v1SLQl"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less": function(e, t, n) {
			e.exports = {
				meta: "_3LK6PIrYUOTakj8Oa9zfeG",
				labelIcon: "_1mGSMIJiFUj6-wF_hy95Pw",
				labelContainer: "_1DqxMhjEHO-PDFRloAL02h",
				labelText: "_2ABDDZ2KYLN6XI0r7v2BZ",
				dropdownButton: "_3YOQ8MrcsaFOPnrJ9vJ38N",
				modnotesOptionFont: "wuQr-NOAF8Ifnfl2i6p9I",
				menuItems: "KQvgghskz0EWs7oUOt5cY",
				menuOption: "_1rGSFi2ie8yFVlUyKQh_Gg",
				checkboxContainer: "_3RSENeTp3TB1S5Ebv4F7Wp",
				checkbox: "_2nMCU8IlwLCEwZXDL58OgL",
				textareaContainer: "_2xiccSlpB0M1gMRclXYbtH",
				textarea: "_3IL33qLZEq_kMic2xNXqVx",
				isNightMode: "_AaroTNaPfLTTd3XBnzfR",
				sendButton: "_1L8QdOb7z1QnQ3Pt0c6CWE",
				iconSend: "_3u5AC03L-pMeyBy-khCaia",
				infoTooltip: "_2rwCe3cHmxw26sTZWV6kzJ",
				tooltipDescription: "_2l9R2_P526f55NMhnBLSp3",
				isDisabled: "UpDN41nqog9YftJ4D8XKL"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesFilter/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_3Qj4lxAJmSAmvzZb0eGrz8",
				backWrapper: "_16JGWUWt6p7BC5jcVlM0Mi",
				typesWrapper: "_2Qaq7jENWKWxoPtO726HMq",
				backButton: "_3U6m3nQRN1ZbweXmCL7SXa",
				subredditsWrapper: "vJ02X8S36wHe7HQpeXwFZ",
				subreddits: "_188PdsfZXzf4aAwvswpajb",
				menuItems: "_2wW26j56zDhw9q7Kf-kNLg",
				subredditIcon: "_1EOsnEFJscM_E3klUy44OG",
				subredditIconInDropdown: "_3bUA6CuqXJm7QpEsxwShR9",
				types: "_1tn7-H1f65OAs2iaDdRtHJ",
				dropdownButton: "_1qouEKkYk1WW0Cv-m9SRWc",
				menuOption: "_2b0kgVBRKg4jZMW9zXrnf",
				typeCountIconInDropdown: "_2Lj2TZbibxKaigLPgsSHsg",
				typeCountIconInDropdownInner: "Tp3zQBPZ2SeMhW2ViijAT"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2PXMmZbuLWhc02IiNu8l3u",
				icon: "J_nQuCRg09QbZrmCOf7W0",
				mainLine: "_3tdpXeaGsCYUEOW1Tko1e7",
				miscLine: "_1t8aDepR0l-g-5GgS83NKD"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_3Hl9Z-fVhvX5HdGlKr91wB",
				icon: "_1xa6wIO9s2wvZOofQEctTK",
				content: "L3M_zrCEd_GzIgSt6pVEh",
				title: "_1JE6dH6dlP16-rDD0FHloc",
				body: "_2Wqt24_s4z08PwNZWuqZA5",
				meta: "_3S_7rAW6EUGArYDHXP0EC4"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less": function(e, t, n) {
			e.exports = {
				placeholder: "_381kKRTi7ZSebjoGPOqX_a"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesList/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_39LeXGlb0gpoKt6FA4VwZ4",
				list: "_1I3aQLT0UPB1rtvXOUjiRH",
				listInner: "_6lxC2p8szZmzDun4lOvFL",
				placeholder: "_3-sGeUnsIgXQm_508XtRHY",
				noItems: "_1osKgUHuMPNNsYRF1Bd0_I",
				scrollGradient: "_72ObW2wBjbXoTSi59wOzl",
				isNightMode: "_2MqCtsP8hs56kDig68mUp4"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_1DIByzTLNmffaPKGXlT51R",
				isNightMode: "MtFyFbAukLeze_nZ6RRTL",
				filters: "_1KZRkPAlAAyjDIEx5bCilQ",
				list: "_2Fk0BPi3Ad9gGP7iswG5nH",
				form: "_3cO6Ka7Pxa76xv_sjseMJQ"
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: n,
					className: r,
					sendEvent: a,
					contextId: o,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m,
					eventSource: b,
					onClick: p,
					children: f,
					style: h
				} = e;
				return s.a.createElement(d.t, {
					onClick: e => {
						p && p(e), t(), a(Object(l.b)(o))
					},
					className: r,
					text: n,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m,
					style: h
				}, f)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, t) => {
				let {
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(i.a)(n))
					}
				}
			});
			t.b = m(Object(c.c)(u))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/fastdom/index.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/selectors/tooltip.ts"),
				p = n("./src/reddit/components/ContentTooltip/index.m.less"),
				f = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = {
					height: 200,
					width: 200
				},
				x = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				_ = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: r,
						caretPosition: a,
						caretColor: o,
						onClick: i,
						hideCaret: d
					} = e;
					return s.a.createElement("div", {
						onClick: i,
						className: Object(c.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === a,
							[f.a.caretOnLeft]: "left" === a,
							[f.a.caretOnRight]: "right" === a,
							[f.a.caretOnBottom]: "bottom" === a,
							[f.a.hideCaret]: d
						}),
						style: {
							...r,
							"--contentTooltip-caretColor": o && o[a] ? o[a] : Object(m.a)(e).body
						}
					}, t)
				}),
				C = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(b.b)(n)(e)
					}
				}),
				I = Object(u.a)(_, [r.a.Click, r.a.Keydown]),
				g = Object(o.b)(C);
			class N extends s.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						l.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const r = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let a = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									a = window.innerHeight - r.bottom > t.height;
									break;
								case "left":
									a = r.left > t.width;
									break;
								case "right":
									a = r.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									a = r.top > t.height
							}
							this.setState({
								position: a ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: n,
						caretPosition: r
					} = this.getPositions(e);
					return s.a.createElement(I, h({}, this.props, {
						caretPosition: r,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = g(N)
		},
		"./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
				resolved: {},
				chunkName: () => "CollectiblesShowcaseUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), n.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), n.e("CollectiblesShowcaseUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), n.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/models/ApiRequestState/index.ts"),
				l = n("./src/reddit/components/EditableImage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: n,
					className: r,
					isProfileCard: l,
					isLoading: m,
					imageUrl: b,
					onFileSelected: p
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(u.a.Container, r)
				}, a.a.createElement("label", {
					className: u.a.HitBox
				}, a.a.createElement("span", {
					className: u.a.ImageContainer,
					role: "presentation"
				}, b ? a.a.createElement("img", {
					alt: t,
					className: u.a.Image,
					src: b
				}) : n), a.a.createElement(o.a, {
					className: u.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(d.b)();
						p(e, t)
					},
					isPending: m
				}), !m && a.a.createElement("div", {
					className: Object(s.a)(u.a.EditButton, {
						[u.a.profileCard]: l
					})
				}, a.a.createElement(c.a, {
					name: "add_media",
					className: u.a.EditIcon
				}))), m && a.a.createElement(i.a, {
					className: u.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/snoovatarModal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/helpers/author.ts"),
				l = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/trackers/marketplace/display-collectibles.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/experiments/econ/index.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				h = n("./src/reddit/selectors/modUserNotes.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/profile.ts"),
				_ = n("./src/reddit/selectors/structuredStyles.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/selectors/userFlair.ts"),
				O = n("./src/reddit/selectors/userPrefs.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				E = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/config.ts"),
				w = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				S = n("./src/lib/lessComponent.tsx"),
				M = n("./src/lib/prettyPrintNumber/index.ts"),
				U = n("./src/reddit/components/ChatButton/index.tsx"),
				P = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				B = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				A = n("./src/reddit/components/SubscribeButton/index.tsx"),
				T = n("./src/reddit/components/UserIcon/index.tsx"),
				H = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/endpoints/profile/info.ts"),
				D = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				F = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				R = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				W = n("./src/reddit/models/User/index.ts"),
				z = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				Z = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				K = n("./src/reddit/actions/inContextModeration.ts"),
				J = n("./src/reddit/actions/modal.ts"),
				q = n("./src/reddit/actions/subredditModeration/ban.ts"),
				Q = n("./src/reddit/constants/modals.ts"),
				X = n("./src/reddit/components/Hovercards/helpers.ts"),
				V = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				$ = n("./src/reddit/selectors/bannedUser.ts"),
				ee = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = Object(o.c)({
				hasModMailPermissions: Object(f.b)(Y.c.mail),
				isUserBanned: (e, t) => !!Object($.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(g.Db)(e, {
					userName: t.username
				})
			});
			class ae extends a.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: r,
						onUnbanUser: s,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, r ? a.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(D.e(t))
						}
					}, a.a.createElement(V.a, {
						name: "ban",
						isFilled: !0,
						className: te.a.icon
					}), ne._("Unban User", null, {
						hk: "1aASyW"
					})) : a.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							i(), o(D.a(t))
						}
					}, a.a.createElement(V.a, {
						name: "ban",
						className: te.a.icon
					}), ne._("Ban User", null, {
						hk: "3OhuLx"
					})), n && a.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							c(), o(D.d(t))
						}
					}, a.a.createElement(V.a, {
						name: "mod_mute",
						className: te.a.icon
					}), ne._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var se = Object(s.b)(re, (e, t) => {
					let {
						username: n,
						subredditId: r,
						contextId: a
					} = t;
					return {
						onUnbanUser: t => e(Object(q.e)(r, t)),
						requestUserBanInfo: () => e(Object(q.c)(r, {
							username: n
						})),
						toggleBanModal: () => {
							e(Object(K.c)({
								username: n,
								subredditId: r,
								contextId: a
							})), e(Object(q.a)(r, n))
						},
						toggleMuteModal: () => {
							e(Object(K.d)({
								username: n,
								subredditId: r,
								contextId: a
							})), e(Object(J.i)(Q.a.MUTE_USER))
						}
					}
				})(ae),
				oe = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ce = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(oe.g)(t.subredditId, t.username))
				}))(e => a.a.createElement(X.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(D.c(e.contextId))
					}
				}, a.a.createElement(V.a, {
					name: "tag",
					className: te.a.icon
				}), ie._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = n.n(de);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const me = S.a.wrapped(T.a, "UserIcon", le.a),
				be = S.a.wrapped(A.a, "SubscribeButton", le.a),
				pe = S.a.wrapped(U.b, "ChatButton", le.a),
				fe = S.a.wrapped(R.a, "PremiumIcon", le.a),
				he = S.a.wrapped(w.a, "UserNameLink", le.a),
				ve = S.a.div("UserNameMetaData", le.a),
				xe = S.a.div("MetaDataItem", le.a),
				_e = S.a.div("Bullet", le.a),
				Ce = S.a.div("UserNameContainer", le.a),
				Ie = S.a.div("KarmaGrid", le.a),
				ge = S.a.div("GenericKarma", le.a),
				Ne = S.a.div("KarmaCount", le.a),
				Oe = S.a.div("GenericKarmaLabel", le.a),
				ke = S.a.div("BannerImage", le.a),
				Ee = S.a.div("UserContainer", le.a),
				je = S.a.div("BottomSpacer", le.a),
				ye = S.a.div("Container", le.a),
				we = e => a.a.createElement("div", null, a.a.createElement("div", null, a.a.createElement(he, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && a.a.createElement(F.a, {
					className: le.a.adminIcon,
					title: j.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && a.a.createElement(w.a, {
					to: "/premium"
				}, a.a.createElement(fe, null))), a.a.createElement(ve, null, a.a.createElement(xe, null, `u/${e.userName}`, a.a.createElement(_e, null, "•")), a.a.createElement(xe, null, (e.user.createdUtc || e.user.created) && a.a.createElement(z.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...L.a,
						...t
					};
					return a.a.createElement(Ie, null, a.a.createElement(ge, null, a.a.createElement(Ne, null, Object(M.b)(n.fromPosts)), a.a.createElement(Oe, null, j.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [j.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), a.a.createElement(ge, null, a.a.createElement(Ne, null, Object(M.b)(n.fromComments)), a.a.createElement(Oe, null, j.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [j.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Me = e => {
					var t, n;
					const {
						className: r,
						contextId: s,
						currentUser: o,
						hideNSFWPref: i,
						hoverId: c,
						isLoggedIn: d,
						onClickSnoovatar: l,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: b,
						sendEvent: p,
						style: f,
						subredditId: h,
						topAwardIcon: v,
						userName: x,
						user: _,
						userFlair: C,
						isCurrentUserBanned: I,
						userProfileStyles: g,
						acceptChats: N,
						isCommentAuthorBlocked: O
					} = e;
					if (!_) return a.a.createElement(ye, {
						style: f
					});
					const k = !!o && Object(W.e)(o) === x,
						E = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						w = _.accountIcon || `${y.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						M = null == u ? void 0 : u.access,
						U = (null == C ? void 0 : C.templateIds) && (null === (t = null == C ? void 0 : C.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						B = null === (n = null == C ? void 0 : C.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: A
						} = _,
						T = !!_.snoovatarFullBodyAsset,
						L = _.isNSFW && i;
					let F;
					return F = T ? !L && g && g.bannerBackgroundImage || void 0 : L ? `${y.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, a.a.createElement(ye, {
						className: r,
						id: c,
						style: f
					}, !T && F && a.a.createElement(ke, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), a.a.createElement(Ee, null, T ? a.a.createElement(Z.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: E,
						isEmployee: _.isEmployee,
						isGold: _.isGold,
						isNSFW: _.isNSFW,
						isOwnProfile: k,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: _.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: _.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : a.a.createElement(Ce, null, a.a.createElement(me, {
						iconUrl: w,
						isNSFW: _.isNSFW,
						userName: x
					}), a.a.createElement(we, {
						title: null == b ? void 0 : b.title,
						user: _,
						userName: x
					})), a.a.createElement(Se, {
						user: _
					}), A && a.a.createElement(G.a, {
						recentAwardings: A,
						topAwardIcon: v,
						username: x
					}), d && !k && !I && N && !O && a.a.createElement(pe, {
						contextId: s,
						priority: H.c.Secondary,
						userId: _.id,
						text: j.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0,
						pageType: "user_hovercard"
					}), _.hasUserProfile && !I && !O && !k && _.enableFollowers && a.a.createElement(be, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(D.h)(e ? "unfollow" : "follow", s),
						isFullWidth: !0,
						small: !0
					})), M && s && !k && h && a.a.createElement(se, {
						contextId: s,
						subredditId: h,
						sendEvent: p,
						username: x
					}), S && s && U && B && h && a.a.createElement(ce, {
						contextId: s,
						subredditId: h,
						sendEvent: p,
						username: x
					}), a.a.createElement(P.i, {
						contextId: s,
						subredditId: h,
						user: _
					}), !(M || d) && a.a.createElement(je, null))
				},
				Ue = Object(B.a)(Me),
				Pe = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return a.a.createElement(Ue, ue({
						isOpen: t
					}, e))
				};
			Pe.WrappedComponent = Me;
			var Be = Pe;
			const Ae = Object(o.c)({
					activeTooltipId: I.a,
					currentUser: g.m,
					isLoggedIn: g.S,
					hideNSFWPref: g.H,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(f.n)(e, {
							subredditId: n
						}) : void 0
					},
					prefersReducedAnimations: O.d,
					profile: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(x.k)(e, {
							profileName: n
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(p.e)(e, {
							userName: n,
							minSize: 32
						})
					},
					user: g.Db,
					userFlair: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(N.d)(e, {
							subredditId: n
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(C.p)(t) && Object(C.ib)(e, t),
					userProfileStyles: (e, t) => Object(_.m)(e, Object(x.o)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(x.i)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						const r = Object(k.e)(e),
							a = n || r && Object(C.I)(e, r.name);
						return !!a && Object(f.i)(e, a)
					},
					trophyCase: (e, t) => Object(x.t)(e, Object(x.o)(e, t.userName)),
					isNightMode: g.fb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(l.a)(t.contextId) ? Object(v.F)(e, {
							postId: t.contextId
						}) : Object(m.c)(e, {
							commentId: t.contextId
						});
						return Object(h.b)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(C.jb)(e, {
							identifier: {
								name: n,
								type: "profile"
							}
						})
					}
				}),
				Te = Object(s.b)(Ae, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(c.i)())
				})),
				He = e => e.isModWithUserNotesPermissions ? a.a.createElement(E.b, {
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
				}) : Object(d.a)(e.userName) ? null : a.a.createElement(Be, {
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
				});
			t.a = Te(e => {
				const t = Object(s.e)(b.p);
				return Object(r.useEffect)(() => {
					e.user && Object(u.a)({
						sendEvent: e.sendEvent,
						user: e.user,
						pageType: "user_hovercard",
						isDisplayCollectiblesEnabled: t
					})
				}, [e.user]), a.a.createElement(He, e)
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_38xW2NIhe5x7Ip4DsESiDu",
				icon: "_2ZHHn_3SE1hdLbw0G-XfIX",
				userActionItemInner: "_3xTsY9LoZw_EzkMMdKnazw",
				notesCount: "_1KOj-NtM3O6M8hDbwiqXtq"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				ModUserNotesTooltipContainer: "_1xMLExpk6fjc6IeleL33__",
				modUserNotesTooltipContainer: "_1xMLExpk6fjc6IeleL33__",
				ModUserNotesWrapper: "_1lCrSQLjP_rjV7gFHNw2Ww",
				modUserNotesWrapper: "_1lCrSQLjP_rjV7gFHNw2Ww",
				ChatButton: "_1KGlxZr4v5X8KO13lbfZkH",
				chatButton: "_1KGlxZr4v5X8KO13lbfZkH",
				UserIcon: "tbDtmAzcWjdFI11DABSSE",
				userIcon: "tbDtmAzcWjdFI11DABSSE",
				SubscribeButton: "W_LVLAHMsyjUPbF5V1gne",
				subscribeButton: "W_LVLAHMsyjUPbF5V1gne",
				nsfwIcon: "_2ZgdtnNoCxPx1lQXhD6RCl",
				PremiumIcon: "_7TFRzyp4qxsQbq7wGXtal",
				premiumIcon: "_7TFRzyp4qxsQbq7wGXtal",
				Token: "_2AUnbdNeTs57gr51hD5HZs",
				token: "_2AUnbdNeTs57gr51hD5HZs",
				UserNameLink: "_2-lNSakHMUsw7JJvZEaUoC",
				userNameLink: "_2-lNSakHMUsw7JJvZEaUoC",
				UserNameMetaData: "_2JJXxZgWKcnUbov2J1C1G3",
				userNameMetaData: "_2JJXxZgWKcnUbov2J1C1G3",
				GildedLastMonthDisplay: "_2ZBEIFpn6l5Qlf51owMxnH",
				gildedLastMonthDisplay: "_2ZBEIFpn6l5Qlf51owMxnH",
				Bullet: "_1CtoPJ9zL_DPCHjPhY1Hsv",
				bullet: "_1CtoPJ9zL_DPCHjPhY1Hsv",
				MetaDataItem: "_1wuEdqaYgDUYdo7_iYospO",
				metaDataItem: "_1wuEdqaYgDUYdo7_iYospO",
				userInfoGrid: "_3a21y2eUAmkxDk558i6QgH",
				col: "_3KN0zcev-Tcx2ZKUOTwqAW",
				count: "_18UK58kvBxqUzL1TlF2qu_",
				label: "_3QwHvGUhCVXeT24GSUKIlx",
				recentAwardOrIconContainer: "_3LqvFQ1BS5zB89Vd8qlasl",
				recentAwardOrTropyIcon: "_1Z4qF31srXcMg3H1REZvd8",
				BannerImage: "_3ZVh9OT49Up2cKlH5oG86P",
				bannerImage: "_3ZVh9OT49Up2cKlH5oG86P",
				BottomSpacer: "GZx_ZWPCv3FF3EYsvlegn",
				bottomSpacer: "GZx_ZWPCv3FF3EYsvlegn",
				Container: "_13TK74mTO68JHd1rIx54V4",
				container: "_13TK74mTO68JHd1rIx54V4",
				adminIcon: "_6aKOTkErJXqNqi2z_zzvW",
				profileLink: "zD_YW4RUg8ZJlTGaTVlP1",
				profileButtonGroup: "_2ItHX7a-KsG3uDHp58gZXx",
				centerSingleButton: "_1kc6pvVVauBg2lk0QF7cKQ",
				profileButtonLeft: "VqFzwo5tna6ZZCAXrmTyk",
				profileButtonRight: "_2CZKdAmdaG7IaMmeQEX8Xn",
				onlyButton: "_2SiwcVk9z35uhm2h71elH0",
				lastModNote: "_1vxe7WcOQITcKCr697jFQO",
				userDetails: "_2UWOWC-UT--m_9xjQIiKIh",
				snoovatarContainer: "bwcDA8NnSXG_MemuHe_BD",
				snoovatar: "_25zVI0tC-SP9CyY5ElAA1g",
				anonymousSnoovatar: "_2wTPjx2BoBSkrl3M-RkvPr"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "TooltipContainer", (function() {
				return Tt
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/profile/index.ts"),
				i = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				c = n("./src/reddit/selectors/tooltip.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/helpers/isComment.ts"),
				u = n("./src/reddit/helpers/isPost.ts"),
				m = n("./src/reddit/helpers/trackers/modNote.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/actions/subreddit.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/lib/constants/icons.ts"),
				x = n("./src/lib/localStorageAvailable/index.ts"),
				_ = n("./src/reddit/helpers/localStorage/index.ts"),
				C = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = n("./src/reddit/constants/keycodes.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				N = n("./src/reddit/controls/Checkbox/index.tsx"),
				O = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/models/ModUserNotes/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				w = n.n(y),
				S = n("./src/redditGQL/types.ts");
			const M = Object(h.a)(C.b),
				U = ["NONE", S.H.AbuseWarning, S.H.SpamWarning, S.H.SpamWatch, S.H.SolidContributor, S.H.HelpfulUser],
				P = {
					...E.f,
					NONE: () => f.fbt._("None", null, {
						hk: "2r9MPM"
					})
				};
			var B = e => {
					const {
						className: t,
						filter: n,
						subredditId: o,
						userId: c,
						thingId: l
					} = e, [m, b] = Object(r.useState)(), [p, h] = Object(r.useState)(!0), [C, y] = Object(r.useState)(""), [S, B] = Object(r.useState)(!1), A = Object(s.e)(j.fb);
					Object(r.useEffect)(() => {
						const e = e => {
							e.style.height = "inherit";
							const t = e.scrollHeight - 34;
							e.style.height = `${t}px`
						};
						return document.addEventListener("input", t => {
							const n = null == t ? void 0 : t.target;
							"textarea" === (null == n ? void 0 : n.tagName.toLowerCase()) && e(t.target)
						}, !1), () => {
							document.removeEventListener("input", t => {
								const n = null == t ? void 0 : t.target;
								"textarea" === (null == n ? void 0 : n.tagName.toLowerCase()) && e(t.target)
							}, !1)
						}
					}, []), Object(r.useEffect)(() => {
						if (Object(x.a)()) {
							const e = Object(_.F)("modnote-draft");
							y(e && e[c] ? e[c] : "")
						}
					}, [c]);
					const T = Object(s.d)(),
						H = Object(r.useCallback)(e => {
							y(e), Object(_.Jb)("modnote-draft", {
								[c]: e
							})
						}, [y, c]),
						L = Object(r.useCallback)(e => {
							e.stopPropagation(), T(Object(i.a)(o, c, C, n, m, p ? l : void 0)), b(void 0), H("")
						}, [T, o, H, C, c, m, p, l, n]),
						D = Object(r.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== I.a.Enter || e.shiftKey || (e.preventDefault(), L(e))
						}, [L]),
						F = m ? P[m]() : P.NONE(),
						R = m ? m && Object(k.b)(E.e[m], {
							isFilled: !0
						}) : void 0,
						W = m && E.d[m];
					return a.a.createElement("div", {
						className: Object(d.a)(t)
					}, a.a.createElement("div", {
						className: w.a.meta
					}, a.a.createElement("span", {
						className: w.a.labelContainer,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement("label", {
						className: w.a.labelText,
						htmlFor: "label"
					}, f.fbt._("Label", null, {
						hk: "39tjG1"
					})), a.a.createElement(O.b, {
						id: "labelSelector",
						className: w.a.dropdown,
						displayText: F,
						buttonIcon: R ? a.a.createElement(R, {
							className: w.a.labelIcon,
							style: {
								...W && {
									color: W
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: U.map(e => {
							const t = P[e](),
								n = "NONE" === e ? void 0 : Object(k.b)(E.e[e], {
									isFilled: !0
								}),
								r = E.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !m : m === e,
								...n && {
									icon: a.a.createElement(n, {
										className: w.a.labelIcon,
										style: {
											color: r,
											fontSize: "15px",
											lineHeight: "15px"
										}
									})
								}
							}
						}),
						onSelect: e => "NONE" === e.value ? b(void 0) : b(e.value),
						buttonClassName: w.a.dropdownButton,
						menuItemsClassName: w.a.menuItems,
						menuOptionClassName: w.a.menuOption
					})), a.a.createElement("span", {
						className: w.a.checkboxContainer
					}, a.a.createElement(N.a, {
						className: w.a.checkbox,
						isCheckboxSelected: p,
						toggleCheckbox: () => h(!p)
					}), l && Object(u.a)(l) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), a.a.createElement("span", {
						className: w.a.textareaContainer
					}, a.a.createElement("textarea", {
						autoFocus: !0,
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(d.a)(w.a.textarea, {
							[w.a.isNightMode]: A
						}),
						onChange: e => H(e.target.value),
						onKeyDown: D,
						onClick: e => e.stopPropagation(),
						placeholder: f.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: C,
						maxLength: 250
					}), a.a.createElement(M, {
						isOpen: S
					}, a.a.createElement("div", {
						className: w.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), a.a.createElement("div", {
						className: w.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), a.a.createElement(g.t, {
						className: Object(d.a)(w.a.sendButton, {
							[w.a.isNightMode]: A,
							[w.a.isDisabled]: 0 === C.length
						}),
						disabled: 0 === C.length,
						Icon: () => a.a.createElement(k.a, {
							className: Object(d.a)(w.a.iconSend, {
								[w.a.isDisabled]: 0 === C.length
							}),
							name: v.a.send,
							isFilled: !0
						}),
						size: g.d.XS,
						iconPosition: g.h.C,
						onClick: L,
						onMouseEnter: () => B(!0),
						onMouseLeave: () => B(!1),
						style: 0 === C.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				A = n("./src/reddit/selectors/modUserNotes.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				H = n("./src/reddit/components/SubredditIcon/index.tsx"),
				L = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				D = n.n(L);
			const F = [S.z.All, S.z.Note, S.z.Invite, S.z.Ban, S.z.Mute, S.z.ContentChange, S.z.Removal, S.z.Approval, S.z.Spam, S.z.ModAction],
				R = {
					[S.z.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[S.z.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[S.z.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[S.z.Ban]: () => f.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[S.z.Mute]: () => f.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[S.z.ContentChange]: () => f.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[S.z.Removal]: () => f.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[S.z.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[S.z.ModAction]: () => f.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[S.z.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				W = {
					[S.z.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[S.z.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[S.z.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[S.z.Ban]: () => f.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[S.z.Mute]: () => f.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[S.z.ContentChange]: () => f.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[S.z.Removal]: () => f.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[S.z.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[S.z.ModAction]: () => f.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[S.z.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var z = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						onChangeSubredditId: i,
						filter: c,
						onChangeFilter: l,
						onChangeView: u
					} = e, p = Object(b.a)(), h = Object(s.e)(e => Object(T.s)(e, void 0)), v = Object(s.e)(e => Object(A.a)(e, o, n)), x = h.find(e => e.id === n), _ = W[c](), C = Object(k.b)("back_fill"), I = Object(r.useCallback)(() => p(Object(m.m)({
						userId: o,
						subredditId: n
					})), [o, n, p]), g = Object(r.useCallback)(e => {
						i(e.value), p(Object(m.t)({
							userId: o,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [o, n, p, i]), N = Object(r.useCallback)(() => p(Object(m.n)({
						userId: o,
						subredditId: n
					})), [o, n, p]), E = Object(r.useCallback)(e => {
						l(e.value), p(Object(m.u)({
							userId: o,
							subredditId: n,
							filteredType: e.value
						}))
					}, [o, n, p, l]);
					return v ? a.a.createElement("div", {
						className: Object(d.a)(t, D.a.wrapper),
						role: "navigation"
					}, a.a.createElement("div", {
						className: D.a.backWrapper
					}, a.a.createElement("button", {
						"aria-label": f.fbt._("Back", null, {
							hk: "3ojpRo"
						}),
						className: D.a.backButton,
						onClick: u
					}, a.a.createElement(C, null))), x && h.length && a.a.createElement("div", {
						className: D.a.subredditsWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement(O.b, {
						id: "subredditFilter",
						className: D.a.subreddits,
						buttonClassName: D.a.dropdownButton,
						buttonIcon: a.a.createElement(H.b, {
							className: D.a.subredditIcon,
							subredditOrProfile: x
						}),
						disabled: 1 === h.length,
						menuItemsClassName: D.a.menuItems,
						menuOptionClassName: D.a.menuOption,
						displayText: `r/${x.name}`,
						options: h.map(e => ({
							displayText: `r/${e.name}`,
							value: e.id,
							isSelected: e.id === n,
							icon: a.a.createElement(H.b, {
								className: D.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: I,
						onSelect: g,
						showSelectedCheckmark: !0
					})), a.a.createElement("div", {
						className: D.a.typesWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement(O.b, {
						id: "typeFilter",
						className: D.a.types,
						buttonClassName: D.a.dropdownButton,
						menuItemsClassName: D.a.menuItems,
						menuOptionClassName: D.a.menuOption,
						displayText: _,
						options: F.map(e => ({
							displayText: R[e](),
							icon: v[S.z.All] ? a.a.createElement("span", {
								className: D.a.typeCountIconInDropdown
							}, a.a.createElement("span", {
								className: D.a.typeCountIconInDropdownInner
							}, v[e])) : void 0,
							value: e,
							isSelected: e === c
						})),
						onOpen: N,
						onSelect: E,
						showSelectedCheckmark: !0
					}))) : null
				},
				G = n("./src/lib/fastdom/index.ts"),
				Z = n("./src/lib/constants/colors.ts"),
				K = n("./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less"),
				J = n.n(K),
				q = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less"),
				Q = n.n(q);
			const X = {
					[S.y.AddRemovalReason]: "remove",
					[S.y.AcceptModeratorInvite]: "mod",
					[S.y.AddContributor]: "user",
					[S.y.ApproveLink]: "approve",
					[S.y.ApproveComment]: "approve",
					[S.y.AddContributor]: "user",
					[S.y.AddModerator]: "mod",
					[S.y.BanUser]: "ban",
					[S.y.InviteModerator]: "mod",
					[S.y.MuteUser]: "mod_mute",
					[S.y.RemoveComment]: "remove",
					[S.y.RemoveContributor]: "block",
					[S.y.RemoveLink]: "remove",
					[S.y.RemoveModerator]: "unmod",
					[S.y.RemoveWikiContributor]: "wiki_ban",
					[S.y.SpamComment]: "spam",
					[S.y.SpamLink]: "spam",
					[S.y.Spoiler]: "spoiler",
					[S.y.Sticky]: "pin",
					[S.y.UnbanUser]: "unban",
					[S.y.UninviteModerator]: "unmod",
					[S.y.UnmuteUser]: "mod_unmute",
					[S.y.Unspoiler]: "spoiler",
					[S.y.Unsticky]: "unpin",
					[S.y.WikiBanned]: "wiki_ban",
					[S.y.WikiContributor]: "wiki",
					[S.y.WikiUnbanned]: "wiki_unban"
				},
				V = {
					[S.H.BotBan]: "bot",
					[S.H.PermaBan]: "block"
				};
			var Y = e => {
					const {
						className: t,
						actionType: n,
						label: r
					} = e, s = n ? X[n] || "mod" : r && V[r] || "user_note";
					if (!s) return null;
					const o = Object(k.b)(s);
					return a.a.createElement(o, {
						className: Object(d.a)(t, Q.a.icon)
					})
				},
				$ = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.tsx"),
				ee = n("./src/reddit/components/CCM/ModUserNoteWithIcon/LinkIcon/index.tsx"),
				te = n("./src/reddit/components/CCM/ModUserNoteWithIcon/NoteLabeledText/index.tsx"),
				ne = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				re = n.n(ne);
			var ae = e => {
					let {
						className: t,
						modNote: n,
						onClickLinked: r
					} = e;
					var o, i;
					const c = Object(s.e)(j.fb),
						l = "label" in n && n.label || E.c,
						u = "note" in n ? n.note : void 0,
						m = n.postInfo ? null === (o = n.postInfo) || void 0 === o ? void 0 : o.permalink : n.commentInfo ? null === (i = n.commentInfo) || void 0 === i ? void 0 : i.permalink : void 0;
					return u ? a.a.createElement("div", {
						className: Object(d.a)(t, re.a.modNote),
						onClick: e => e.stopPropagation(),
						style: l ? {
							backgroundColor: c ? E.b[l] : E.a[l]
						} : {}
					}, a.a.createElement(te.a, {
						modNote: n
					}), m && a.a.createElement(ee.a, {
						className: re.a.link,
						linkUrl: m,
						onClick: r
					})) : null
				},
				se = n("./src/lib/constants/index.ts"),
				oe = n("./src/lib/prettyPrintNumber/index.ts"),
				ie = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				ce = n.n(ie);
			var de = e => {
					let {
						className: t,
						postInfo: n,
						commentInfo: r,
						onClick: s
					} = e;
					var o, i, c, l;
					if (!n && !r) return null;
					if (r && "Comment" !== r.__typename) return a.a.createElement("div", {
						className: Object(d.a)(t, ce.a.preview)
					}, a.a.createElement("div", {
						className: ce.a.content
					}, a.a.createElement("h6", {
						className: ce.a.title
					}, se.Qb)));
					const u = n ? n.permalink : r ? r.permalink : void 0,
						m = (null == n ? void 0 : n.title) || (null === (i = null === (o = r) || void 0 === o ? void 0 : o.content) || void 0 === i ? void 0 : i.markdown),
						b = n ? n.score || 0 : r && r.score || 0,
						p = (null == n ? void 0 : n.commentCount) || 0;
					return a.a.createElement("a", {
						className: Object(d.a)(t, ce.a.preview),
						href: u || "",
						onClick: s,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement("div", {
						className: ce.a.content
					}, m && a.a.createElement("h6", {
						className: ce.a.title
					}, m), a.a.createElement("div", {
						className: ce.a.meta
					}, a.a.createElement("span", null, f.fbt._({
						"*": "{pointsCount} Points",
						_1: "{pointsCount} Point"
					}, [f.fbt._param("pointsCount", Object(oe.b)(b)), f.fbt._plural(b)], {
						hk: "47CFCp"
					})), !!p && a.a.createElement(a.a.Fragment, null, " · ", a.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(p, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (c = null == n ? void 0 : n.thumbnail) || void 0 === c ? void 0 : c.url) && a.a.createElement("div", {
						className: ce.a.thumbnail
					}, a.a.createElement("img", {
						className: ce.a.thumbnailImage,
						src: null === (l = n.thumbnail) || void 0 === l ? void 0 : l.url
					})))
				},
				le = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				ue = n.n(le);
			const me = {
					[S.y.AddRemovalReason]: e => {
						const {
							commentInfo: t
						} = e, {
							postInfo: n
						} = e;
						return t ? f.fbt._("Removal reason applied to comment", null, {
							hk: "2LWZ5d"
						}) : n ? f.fbt._("Removal reason applied to post", null, {
							hk: "e3hBx"
						}) : void 0
					},
					[S.y.BanUser]: e => {
						const {
							banDays: t,
							isPermanentBan: n
						} = e;
						return n ? f.fbt._("Permanently banned", null, {
							hk: "1JdZQ8"
						}) : t ? f.fbt._({
							"*": "Banned for {number} days",
							_1: "Banned for 1 day"
						}, [f.fbt._plural(t, "number")], {
							hk: "lfWrr"
						}) : f.fbt._("Banned", null, {
							hk: "4gqwg7"
						})
					}
				},
				be = {
					[S.y.AcceptModeratorInvite]: () => f.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[S.y.AddContributor]: () => f.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[S.y.AddModerator]: () => f.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[S.y.ApproveComment]: () => f.fbt._("Comment was approved", null, {
						hk: "3yCRAS"
					}),
					[S.y.ApproveLink]: () => f.fbt._("Post was approved", null, {
						hk: "6tcjn"
					}),
					[S.y.BanUser]: e => {
						const {
							banReason: t
						} = e;
						return t
					},
					[S.y.AddRemovalReason]: e => {
						const {
							description: t
						} = e;
						return t
					},
					[S.y.InviteModerator]: () => f.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[S.y.MuteUser]: () => f.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[S.y.RemoveComment]: () => f.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[S.y.RemoveContributor]: () => f.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[S.y.RemoveLink]: () => f.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[S.y.RemoveModerator]: () => f.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[S.y.RemoveWikiContributor]: () => f.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[S.y.SpamComment]: () => f.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[S.y.SpamLink]: () => f.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[S.y.Spoiler]: () => f.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[S.y.Sticky]: () => f.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[S.y.UnbanUser]: () => f.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[S.y.UninviteModerator]: () => f.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[S.y.UnmuteUser]: () => f.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[S.y.Unspoiler]: () => f.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[S.y.Unsticky]: () => f.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[S.y.WikiBanned]: () => f.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[S.y.WikiContributor]: () => f.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[S.y.WikiUnbanned]: () => f.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				pe = {
					[S.H.BotBan]: () => f.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[S.H.PermaBan]: () => f.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var fe = e => {
				const {
					className: t,
					modNote: n
				} = e, {
					actionType: r
				} = n, {
					label: s
				} = n, o = r ? be[r] ? be[r](n) : null : s && pe[s] ? pe[s]() : null, i = r && me[r] ? me[r](n) : null;
				return a.a.createElement(a.a.Fragment, null, i ? a.a.createElement("h4", {
					className: Object(d.a)(t, ue.a.subTitle)
				}, i) : null, o ? a.a.createElement("h3", {
					className: Object(d.a)(t, ue.a.title)
				}, o) : null)
			};
			var he = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, r = Object(s.e)(j.fb), o = Object(b.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return a.a.createElement("div", {
						className: Object(d.a)(J.a.wrapper, e.className)
					}, a.a.createElement("div", {
						key: "aa",
						className: J.a.iconWrapper,
						style: {
							background: r ? Z.a.orca700 : Z.a.narwhal100
						}
					}, a.a.createElement(Y, {
						className: J.a.icon,
						actionType: t.actionType,
						label: t.label
					})), a.a.createElement("div", {
						className: J.a.content,
						key: "ba"
					}, a.a.createElement(fe, {
						modNote: t,
						className: J.a.title
					}), a.a.createElement(ae, {
						className: J.a.note,
						modNote: t,
						onClickLinked: () => o(Object(m.d)({
							subredditId: n,
							modNote: t
						}))
					}), a.a.createElement($.a, {
						className: J.a.metaData,
						deleteClassName: J.a.metaDataDelete,
						shouldShowDelete: !0,
						subredditId: n,
						modNote: t,
						onClickUsername: () => o(Object(m.q)({
							subredditId: n,
							modNote: t
						}))
					}), i && a.a.createElement(de, {
						className: J.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => o(Object(m.h)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				ve = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				xe = n.n(ve);
			var _e = e => {
					const t = {
							[S.z.Note]: f.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[S.z.Approval]: f.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[S.z.Removal]: f.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[S.z.Ban]: f.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[S.z.Mute]: f.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[S.z.Invite]: f.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[S.z.Spam]: f.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[S.z.ContentChange]: f.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[S.z.ModAction]: f.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[S.z.All]: f.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[S.z.Note]: "user_note",
							[S.z.Approval]: "approve",
							[S.z.Removal]: "remove",
							[S.z.Ban]: "ban",
							[S.z.Mute]: "mod_mute",
							[S.z.Invite]: "user",
							[S.z.Spam]: "spam",
							[S.z.ContentChange]: "pin",
							[S.z.ModAction]: "mod",
							[S.z.All]: "mod"
						},
						{
							className: r,
							subredditId: o,
							userId: i,
							filter: c
						} = e,
						l = Object(s.e)(e => Object(j.Cb)(e, {
							userId: i
						})),
						u = Object(s.e)(e => Object(T.X)(e, {
							subredditId: o
						})),
						m = t[c],
						b = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", m)], {
							hk: "1NhVUh"
						}),
						p = u && l ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", l.username), f.fbt._param("subreddit name", u.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(k.b)(n[c]);
					return a.a.createElement("div", {
						className: Object(d.a)(r, xe.a.container)
					}, a.a.createElement(h, {
						className: xe.a.icon
					}), a.a.createElement("p", {
						className: xe.a.mainLine
					}, `${b} ${p}`), c === S.z.Note && a.a.createElement("p", {
						className: xe.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				Ce = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				Ie = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				ge = n.n(Ie),
				Ne = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var Oe = e => a.a.createElement("div", {
					className: Object(d.a)(ge.a.wrapper, e.className)
				}, a.a.createElement("div", {
					key: "d",
					className: Object(d.a)(ge.a.icon, Object(Ne.a)(e))
				}), a.a.createElement("div", {
					key: "e",
					className: ge.a.content
				}, a.a.createElement("div", {
					key: "ea",
					className: Object(d.a)(ge.a.title, Object(Ne.b)(e))
				}), a.a.createElement("div", {
					key: "eb",
					className: Object(d.a)(ge.a.body, Object(Ne.b)(e))
				}), a.a.createElement("div", {
					key: "ec",
					className: Object(d.a)(ge.a.meta, Object(Ne.b)(e))
				}))),
				ke = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				Ee = n.n(ke);
			var je = e => {
					const {
						className: t,
						isLoading: n,
						apiError: r,
						onTryAgain: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(t, Ee.a.placeholder)
					}, a.a.createElement(Oe, {
						className: Ee.a.placeholderLine,
						isLoading: n
					}), a.a.createElement(Oe, {
						className: Ee.a.placeholderLine,
						isLoading: n
					}), a.a.createElement(Oe, {
						className: Ee.a.placeholderLine,
						isLoading: n
					}), !!r && a.a.createElement(Ce.a, {
						apiError: r,
						onTryAgain: s
					}))
				},
				ye = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				we = n.n(ye);
			var Se = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						filter: c
					} = e, l = Object(s.d)(), u = Object(s.e)(j.fb), [m, b] = Object(r.useState)(!0);
					Object(r.useEffect)(() => {
						setTimeout(() => b(!1), 0)
					}, []);
					const p = Object(r.useRef)(null),
						f = Object(s.e)(e => Object(A.f)(e, {
							subredditId: n,
							userId: o,
							filter: c
						})),
						h = Object(s.e)(e => Object(A.d)(e, {
							subredditId: n,
							userId: o,
							filter: c
						})),
						v = Object(s.e)(e => Object(A.e)(e, {
							subredditId: n,
							userId: o,
							filter: c
						})),
						x = Object(s.e)(A.c),
						_ = !!f.length,
						[C, I] = Object(r.useState)(!1);
					Object(r.useEffect)(() => {
						G.a.read(() => {
							if (!C && !v && _ && (null == p ? void 0 : p.current)) {
								const e = p.current,
									{
										clientHeight: t,
										scrollHeight: n
									} = e;
								n > t && (p.current.scrollTo({
									top: n - t
								}), I(!0))
							}
						})
					}, [v, _, p, C]);
					const g = !!h && !v && !x,
						N = Object(r.useCallback)(e => l(Object(i.f)({
							subredditId: n,
							userId: o,
							filter: c,
							before: e
						})), [l, n, o, c]),
						O = Object(r.useCallback)(() => {
							G.a.read(() => {
								if (null == p ? void 0 : p.current) {
									const e = p.current,
										{
											scrollTop: t,
											offsetHeight: n
										} = e;
									.25 * n >= t && g && !v && N(h)
								}
							})
						}, [g, v, h, N, p]);
					return a.a.createElement(a.a.Fragment, null, _ && a.a.createElement("div", {
						className: Object(d.a)(t, we.a.wrapper)
					}, a.a.createElement("div", {
						className: Object(d.a)(we.a.scrollGradient, {
							[we.a.isNightMode]: u
						})
					}), a.a.createElement("div", {
						className: we.a.list,
						ref: p,
						onScroll: O
					}, a.a.createElement("div", {
						className: we.a.listInner
					}, f.map(e => a.a.createElement(he, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (v || x) && a.a.createElement(je, {
						isLoading: v,
						apiError: x,
						onTryAgain: () => {
							h && N(h)
						}
					})))), !_ && !v && !m && a.a.createElement(_e, {
						className: Object(d.a)(t, we.a.wrapper, we.a.noItems),
						subredditId: n,
						userId: o,
						filter: c
					}), !_ && (v || m) && a.a.createElement("div", {
						className: Object(d.a)(t, we.a.wrapper)
					}))
				},
				Me = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Ue = n.n(Me);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Be = e => {
					const t = Object(s.d)(),
						{
							className: n,
							subredditId: o,
							userId: c,
							onChangeView: f,
							defaultTypeFilter: h,
							thingId: v
						} = e,
						[x, _] = Object(r.useState)(h || S.z.All),
						[C, I] = Object(r.useState)(o),
						g = Object(s.e)(j.fb),
						N = Object(b.a)(),
						O = e => {
							t(Object(i.f)({
								subredditId: C,
								userId: c,
								filter: x,
								...e
							}))
						},
						k = x === S.z.All || x === S.z.Note;
					Object(r.useEffect)(() => {
						O({
							forceLoad: !0
						}), t(Object(p.q)())
					}, []);
					const E = {
						subredditId: o,
						userId: c,
						...v && Object(l.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(u.a)(v) ? {
							postId: v
						} : null
					};
					return Object(r.useEffect)(() => (N(Object(m.y)(E)), () => N(Object(m.s)(E))), []), a.a.createElement("div", {
						className: Object(d.a)(n, Ue.a.wrapper, {
							[Ue.a.isNightMode]: g
						}),
						onClick: e => e.stopPropagation()
					}, a.a.createElement(z, {
						className: Ue.a.filters,
						subredditId: C,
						userId: c,
						onChangeSubredditId: e => {
							I(e), O({
								subredditId: e,
								forceLoad: !0
							})
						},
						filter: x,
						onChangeFilter: e => {
							_(e), O({
								filter: e,
								forceLoad: !0
							})
						},
						onChangeView: f
					}), a.a.createElement(Se, {
						className: Ue.a.list,
						subredditId: C,
						userId: c,
						filter: x
					}), k && a.a.createElement(B, {
						className: Ue.a.form,
						filter: x,
						subredditId: o,
						userId: c,
						thingId: v
					}))
				},
				Ae = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Te = n("./src/config.ts"),
				He = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Le = n("./src/lib/opener/index.ts"),
				De = n("./src/reddit/helpers/author.ts"),
				Fe = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				Re = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				We = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				ze = n.n(We);
			var Ge = e => a.a.createElement("img", {
					className: Object(d.a)(e.className, ze.a.anonymousSnoovatar),
					src: `${Te.a.assetPath}/img/anonymous_snoo.png`
				}),
				Ze = n("./src/reddit/components/ChatButton/index.tsx"),
				Ke = n("./src/reddit/components/HumanDate/index.tsx"),
				Je = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				qe = n("./src/reddit/components/ModNoteItem/index.tsx"),
				Qe = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				Xe = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Ve = n("./src/reddit/components/UserIcon/index.tsx"),
				Ye = n("./src/reddit/controls/InternalLink/index.tsx"),
				$e = n("./src/reddit/endpoints/profile/info.ts"),
				et = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				tt = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				nt = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				rt = n("./src/reddit/models/User/index.ts"),
				at = n("./src/reddit/selectors/experiments/econ/index.ts"),
				st = n("./src/reddit/selectors/gold/awardIcon.ts"),
				ot = n("./src/reddit/constants/modals.ts"),
				it = n("./src/reddit/actions/inContextModeration.ts"),
				ct = n("./src/reddit/actions/modal.ts"),
				dt = n("./src/reddit/actions/subredditModeration/index.ts"),
				lt = n("./src/reddit/actions/subredditModeration/ban.ts"),
				ut = n("./src/reddit/actions/subredditModeration/mute.ts"),
				mt = n("./src/reddit/actions/userFlair/index.ts"),
				bt = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				pt = n("./src/reddit/selectors/bannedUser.ts"),
				ft = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ht = n("./src/reddit/selectors/muted.ts"),
				vt = n("./src/reddit/selectors/subredditModeration.ts"),
				xt = n("./src/reddit/selectors/userFlair.ts"),
				_t = n("./src/reddit/components/Hovercards/helpers.ts"),
				Ct = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less"),
				It = n.n(Ct);
			const {
				fbt: gt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Nt;
			! function(e) {
				e.ModLog = "ModLog", e.Ban = "Ban", e.Unban = "Unban", e.AddNote = "AddNote", e.Mute = "Mute", e.Unmute = "Unmute", e.Flair = "Flair", e.Modmail = "Modmail"
			}(Nt || (Nt = {}));
			var Ot = e => {
					var t, n;
					const o = Object(b.a)(),
						i = Object(s.d)(),
						{
							className: c,
							contextId: d,
							subredditId: l,
							username: u,
							onChangeView: p
						} = e,
						f = Object(s.e)(e => l ? Object(xt.d)(e, {
							subredditId: l
						}) : void 0),
						h = !!(null == f ? void 0 : f.templateIds) && (null === (t = null == f ? void 0 : f.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						v = !!(null === (n = null == f ? void 0 : f.displaySettings) || void 0 === n ? void 0 : n.isEnabled),
						x = Object(s.e)(t => Object(ft.b)(bt.c.access)(t, e)),
						_ = Object(s.e)(t => Object(ft.b)(bt.c.mail)(t, e)),
						C = Object(s.e)(t => Object(ft.b)(bt.c.flair)(t, e)),
						I = Object(s.e)(e => Object(j.Db)(e, {
							userName: u
						})),
						g = Object(s.e)(e => !!Object(pt.b)(e, {
							subredditId: l,
							username: u
						})),
						N = Object(s.e)(e => Object(ht.a)(e, l, I.id)),
						O = Object(s.e)(e => Object(vt.g)(e, l, I.id)),
						E = Object(s.e)(j.m),
						y = !!E && Object(rt.e)(E) === u,
						w = Object(s.e)(e => l ? e.subreddits.models[l] : null),
						M = Object(s.e)(e => {
							if (d) return Object(A.g)(e, I.id, l, S.z.All)
						}),
						U = Object(r.useCallback)(() => {
							i(Object(dt.g)(l))
						}, [i, l]),
						P = Object(r.useCallback)(() => {
							i(Object(lt.c)(l, {
								username: u
							}))
						}, [i, l, u]),
						B = Object(r.useCallback)(() => {
							i(Object(lt.e)(l, I.id)), o(Fe.e(d))
						}, [I.id, l, i, d, o]),
						T = Object(r.useCallback)(() => {
							i(Object(it.c)({
								username: u,
								subredditId: l,
								contextId: d
							})), i(Object(lt.a)(l, u)), o(Fe.a(d))
						}, [o, i, u, l, d]),
						H = Object(r.useCallback)(() => {
							i(Object(ut.b)(l))
						}, [i, l]),
						L = Object(r.useCallback)(() => {
							i(Object(it.d)({
								username: u,
								subredditId: l,
								contextId: d
							})), i(Object(ct.i)(ot.a.MUTE_USER)), o(Fe.d(d))
						}, [o, i, u, l, d]),
						D = Object(r.useCallback)(() => {
							i(Object(ut.d)(l, I.id)), o(Fe.f(d))
						}, [o, i, I.id, l, d]),
						F = Object(r.useCallback)(() => {
							i(Object(mt.g)(l, u)), o(Fe.c(d))
						}, [o, i, u, l, d]),
						R = Object(r.useCallback)(() => l && o(Object(m.l)({
							subredditId: l,
							userId: I.id
						})), [l, I, o]),
						W = Object(r.useCallback)(e => {
							e.stopPropagation(), p && p(), l && o(Object(m.k)({
								subredditId: l,
								userId: I.id
							}))
						}, [l, I, o, p]),
						z = Object(r.useCallback)(e => {
							e.stopPropagation(), p && p(S.z.Note), l && o(Object(m.a)({
								subredditId: l,
								userId: I.id
							}))
						}, [l, I, o, p]);
					if (Object(r.useEffect)(() => {
							I && (U(), H(), !I.isSuspended && P())
						}, [I]), !I) return null;
					const G = w && u ? `?toSubredditName=${w.name}&toUserName=${u}` : "",
						Z = {
							[Nt.ModLog]: x,
							[Nt.Ban]: !I.isSuspended && x && !y && g,
							[Nt.Unban]: !I.isSuspended && x && !y && !g,
							[Nt.AddNote]: x,
							[Nt.Mute]: !I.isSuspended && !N && !O && !y && x && _,
							[Nt.Unmute]: !I.isSuspended && N && !O && !y && x && _,
							[Nt.Flair]: C && h && v,
							[Nt.Modmail]: _
						};
					return a.a.createElement("div", {
						className: c
					}, Z[Nt.ModLog] && a.a.createElement(_t.a, {
						role: "button",
						onClick: W,
						className: It.a.item
					}, a.a.createElement(k.a, {
						name: "mod",
						className: It.a.icon
					}), gt._("User Mod Log", null, {
						hk: "2PiT0s"
					}), !!M && a.a.createElement("span", {
						className: It.a.notesCount
					}, M)), Z[Nt.AddNote] && a.a.createElement(_t.a, {
						role: "button",
						onClick: z,
						className: It.a.item
					}, a.a.createElement(k.a, {
						name: "user_note",
						className: It.a.icon
					}), gt._("Add Note", null, {
						hk: "34JqdA"
					})), Z[Nt.Ban] && a.a.createElement(_t.a, {
						role: "button",
						onClick: B,
						className: It.a.item
					}, a.a.createElement(k.a, {
						name: "unban",
						className: It.a.icon
					}), gt._("Unban User", null, {
						hk: "1aASyW"
					})), Z[Nt.Unban] && a.a.createElement(_t.a, {
						role: "button",
						onClick: T,
						className: It.a.item
					}, a.a.createElement(k.a, {
						name: "ban",
						className: It.a.icon
					}), gt._("Ban User", null, {
						hk: "3OhuLx"
					})), Z[Nt.Mute] && a.a.createElement(_t.a, {
						role: "button",
						onClick: L,
						className: It.a.item
					}, a.a.createElement(k.a, {
						name: "mod_mute",
						className: It.a.icon
					}), gt._("Mute User", null, {
						hk: "3MCujH"
					})), Z[Nt.Unmute] && a.a.createElement(_t.a, {
						role: "button",
						onClick: D,
						className: It.a.item
					}, a.a.createElement(k.a, {
						name: "mod_unmute",
						className: It.a.icon
					}), gt._("Unmute User", null, {
						hk: "sBvvx"
					})), Z[Nt.Flair] && a.a.createElement(_t.a, {
						role: "button",
						onClick: F,
						className: It.a.item
					}, a.a.createElement(k.a, {
						name: "tag",
						className: It.a.icon
					}), gt._("Edit user flair", null, {
						hk: "4mTxM"
					})), Z[Nt.Modmail] && a.a.createElement(_t.a, {
						role: "button",
						className: It.a.item
					}, a.a.createElement("a", {
						href: `https://mod.reddit.com/mail/create${G}`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: R,
						className: It.a.userActionItemInner
					}, a.a.createElement(k.a, {
						name: "mod_mail",
						className: It.a.icon
					}), gt._("Send modmail", null, {
						hk: "ZUN0n"
					}))))
				},
				kt = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				Et = n.n(kt);
			const jt = e => {
					var t, n;
					return a.a.createElement("div", {
						className: Et.a.userDetails
					}, a.a.createElement("div", null, a.a.createElement(He.a, {
						className: Et.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && a.a.createElement(a.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isEmployee && a.a.createElement(et.a, {
						className: Et.a.adminIcon,
						title: f.fbt._("Reddit admin", null, {
							hk: "15wBTE"
						})
					}), e.user.isGold && a.a.createElement(He.a, {
						to: "/premium"
					}, a.a.createElement(nt.a, {
						className: Et.a.PremiumIcon
					})), e.user.isNSFW && a.a.createElement(tt.a, {
						className: Et.a.nsfwIcon,
						title: f.fbt._("NSFW - Adult Content", null, {
							hk: "2Iw7mN"
						})
					})), a.a.createElement("div", {
						className: Et.a.UserNameMetaData
					}, a.a.createElement("div", {
						className: Et.a.MetaDataItem
					}, `u/${e.user.username}`, a.a.createElement("div", {
						className: Et.a.Bullet
					}, "•")), a.a.createElement("div", {
						className: Et.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ke.d, {
						seconds: e.user.createdUtc || e.user.created
					}), a.a.createElement("div", {
						className: Et.a.Bullet
					}, "•"))), a.a.createElement("div", {
						className: Et.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(oe.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				yt = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: r,
						prefersReducedAnimations: o
					} = e, i = {
						...$e.a,
						...n
					}, c = null == t ? void 0 : t.topAward, d = Object(s.e)(at.d);
					return a.a.createElement("div", {
						className: Et.a.userInfoGrid
					}, a.a.createElement("div", {
						className: Et.a.col
					}, a.a.createElement("span", {
						className: Et.a.count
					}, Object(oe.b)(i.fromPosts)), a.a.createElement("span", {
						className: Et.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), a.a.createElement("div", {
						className: Et.a.col
					}, a.a.createElement("span", {
						className: Et.a.count
					}, Object(oe.b)(i.fromComments)), a.a.createElement("span", {
						className: Et.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), !d && a.a.createElement("div", {
						className: Et.a.col
					}, a.a.createElement("span", {
						className: Et.a.count
					}, Object(oe.b)(i.fromAwardsReceived)), a.a.createElement("span", {
						className: Et.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), !d && a.a.createElement("div", {
						className: Et.a.col
					}, a.a.createElement("span", {
						className: Et.a.count
					}, Object(oe.b)(i.fromAwardsGiven)), a.a.createElement("span", {
						className: Et.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), r.length > 0 && (e => a.a.createElement("div", {
						className: Et.a.col
					}, a.a.createElement("div", {
						className: Et.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = a.a.createElement("img", {
							className: Et.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name,
							key: `${e.id}-icon`
						});
						return e.url ? a.a.createElement("a", {
							target: Le.d.BLANK,
							rel: Le.c,
							href: e.url,
							key: e.id
						}, n) : n
					})), a.a.createElement("span", {
						className: Et.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(r), !d && c && ((e, t) => a.a.createElement("div", {
						className: Et.a.col
					}, a.a.createElement("div", {
						className: Et.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var r, s;
						if (!(n >= 3)) return a.a.createElement("img", {
							alt: null !== (r = null == e ? void 0 : e.description) && void 0 !== r ? r : null == e ? void 0 : e.name,
							key: null !== (s = null == e ? void 0 : e.description) && void 0 !== s ? s : null == e ? void 0 : e.name,
							className: Et.a.recentAwardOrTropyIcon,
							src: Object(st.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), a.a.createElement("span", {
						className: Et.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(c, o))
				};
			var wt = e => {
					var t;
					const {
						contextId: n,
						currentUser: s,
						hideNSFWPref: o,
						hoverId: i,
						isLoggedIn: c,
						isNightMode: l,
						moderatorPermissions: u,
						style: p,
						userName: h,
						user: v,
						isCurrentUserBanned: x,
						userProfileStyles: _,
						acceptChats: C,
						isCommentAuthorBlocked: I,
						trophyCase: g,
						lastAuthorModNote: N,
						userIsSubscriber: O,
						subredditId: k,
						prefersReducedAnimations: E,
						onChangeView: j
					} = e, y = Object(b.a)();
					if (Object(r.useEffect)(() => {
							v && k && y(Object(m.x)({
								subredditId: k,
								userId: v.id
							}))
						}, [v, k]), !v) return a.a.createElement("div", {
						style: p
					});
					const w = !!s && Object(rt.e)(s) === h,
						S = c && !w && !x && C && !I,
						M = v.hasUserProfile && !x && !I && !w && v.enableFollowers,
						U = null == u ? void 0 : u.access,
						P = v.isNSFW && o ? `${Te.a.assetPath}/img/user-info-banner.png` : (null == _ ? void 0 : _.bannerBackgroundImage) ? _.bannerBackgroundImage : v.bannerImage,
						B = l ? "##D7DADC" : "#0079D3",
						A = l ? "#121212" : "#FFF";
					return a.a.createElement("div", {
						className: Et.a.Container,
						id: i,
						style: {
							backgroundColor: A,
							...p
						}
					}, a.a.createElement("div", {
						className: Et.a.UserContainer
					}, a.a.createElement("div", {
						className: Et.a.BannerImage,
						style: P ? {
							backgroundImage: `url('${P}')`
						} : {}
					}), a.a.createElement("div", {
						className: Et.a.snoovatarContainer
					}, v.snoovatarFullBodyAsset ? a.a.createElement(Qe.a, {
						className: Et.a.snoovatar,
						isGold: v.isGold,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						prefersReducedAnimations: !!E,
						origin: Re.a.Hovercard,
						userName: h
					}) : (null === (t = v.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? a.a.createElement("div", {
						className: Et.a.anonymousSnoovatar
					}, a.a.createElement(Ge, null)) : a.a.createElement(Ve.a, {
						className: Et.a.UserIcon,
						iconUrl: v.accountIcon,
						isNSFW: v.isNSFW,
						userName: h
					}))), a.a.createElement(jt, {
						user: v,
						userName: h
					}), a.a.createElement(Ye.default, {
						className: Et.a.profileLink,
						to: `/user/${h}/`
					}, f.fbt._("View full profile", null, {
						hk: "2s4Gmf"
					})), a.a.createElement("div", {
						className: Et.a.profileButtonGroup
					}, S && a.a.createElement(Ze.b, {
						className: Object(d.a)(Et.a.ChatButton, Et.a.profileButtonLeft, {
							[Et.a.onlyButton]: !M
						}),
						contextId: n,
						userId: v.id,
						text: f.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0,
						style: {
							color: A,
							backgroundColor: B
						},
						pageType: "user_hovercard"
					}), M && a.a.createElement(Xe.a, {
						className: Object(d.a)(Et.a.SubscribeButton, Et.a.profileButtonRight, {
							[Et.a.onlyButton]: !S
						}),
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(Fe.h)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0,
						style: {
							color: O ? "#D7DADC" : A,
							backgroundColor: B,
							width: 144
						}
					})), a.a.createElement(yt, {
						user: v,
						trophyCase: g || [],
						prefersReducedAnimations: !!E
					}), U && N && a.a.createElement(qe.b, {
						className: Et.a.lastModNote,
						modNote: N,
						subredditId: k || "",
						onClick: e => {
							e.stopPropagation(), j()
						},
						context: qe.a.ModIdCard
					}), n && k && h && !Object(De.a)(h) && a.a.createElement(Ot, {
						contextId: n,
						subredditId: k,
						username: h,
						onChangeView: j
					}), a.a.createElement(Je.i, {
						contextId: n,
						subredditId: k,
						user: v
					}), a.a.createElement("div", {
						className: Et.a.BottomSpacer
					}))
				},
				St = n("./src/reddit/hooks/useGqlContext.ts"),
				Mt = n("./src/lib/makeGqlRequest/index.ts"),
				Ut = n("./src/redditGQL/operations/ProxyAuthor.json");

			function Pt() {
				return (Pt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var Bt = e => {
				const t = Object(s.d)(),
					n = Object(St.a)(),
					i = Object(De.a)(e.userName),
					[c, d] = Object(r.useState)(i ? void 0 : e.userName);
				Object(r.useEffect)(() => {
					i && (async () => {
						if (!e.contextId) return;
						const r = await ((e, t) => Object(Mt.a)(e, {
							...Ut,
							variables: {
								thingId: t,
								isPost: Object(u.a)(t)
							}
						}))(n(), e.contextId);
						if (r.ok) {
							const e = r.body,
								n = e.data.commentById || e.data.postInfoById,
								a = n && "DeletedComment" !== n.__typename ? n.moderationInfo.proxyAuthor : void 0;
							a && a.displayName && (d(a.displayName), t(Object(o.d)(a.displayName)))
						}
					})()
				}, [c]);
				const l = Object(s.e)(e => c && Object(j.Db)(e, {
					userName: c
				}));
				return i ? c && l ? a.a.createElement(Tt, Pt({}, e, {
					userName: c,
					user: l
				})) : a.a.createElement("div", null) : a.a.createElement(Tt, e)
			};

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Tt = e => {
					var t, n, d;
					const l = Object(s.e)(c.c),
						u = !!(null == l ? void 0 : l.isModNotesView),
						m = null == l ? void 0 : l.modNotesFilter,
						[b, p] = Object(r.useState)(!u),
						[f, h] = Object(r.useState)(m || S.z.All),
						v = Object(s.d)();
					Object(r.useEffect)(() => {
						v(Object(o.d)(e.userName))
					}, [v, e.userName]);
					const x = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (d = e.lastAuthorModNote) || void 0 === d ? void 0 : d.user.id : e.user.id;
					Object(r.useEffect)(() => {
						e.subredditId && x && v(Object(i.d)(e.subredditId, x))
					}, [v, e.subredditId, x]);
					const _ = Object(r.useCallback)(e => {
						p(!b), h(e || S.z.All)
					}, [b, p]);
					return !b && e.subredditId && x ? a.a.createElement(Be, {
						className: Et.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: x,
						onChangeView: _,
						defaultTypeFilter: f,
						thingId: e.contextId
					}) : a.a.createElement(wt, At({}, e, {
						onChangeView: _
					}))
				},
				Ht = {
					height: 710,
					width: 340
				},
				Lt = e => a.a.createElement(Ae.a, {
					className: Et.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					tooltipSizeEstimate: Ht,
					hideCaret: !0
				}, a.a.createElement(Bt, e));
			Lt.WrappedComponent = Tt;
			t.default = Lt
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/Hovercards/helpers.ts"),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const u = e => {
				var t;
				return (null === (t = e.belongsTo) || void 0 === t ? void 0 : t.id) || e.subredditId
			};
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => {
						this.props.sendEvent(Object(l.g)(this.props.postOrComment.id))
					}
				}
				render() {
					const {
						props: e
					} = this, t = Object(s.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || c.a,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`, r = e.author || e.postOrComment.author;
					return a.a.createElement(o.a, {
						authorOrSubredditName: r,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, a.a.createElement("div", {
						id: t
					}, e.children), a.a.createElement(i.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: u(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: r,
						isCommentAuthorBlocked: e.isCommentAuthorBlocked,
						collapsed: e.collapsed
					}))
				}
			}
			t.default = Object(d.c)(m)
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? a.a.createElement(a.a.Fragment, null, e.children) : null;
			t.b = Object(s.a)({
				ErrorComponent: c,
				getComponent: () => Object(o.a)(() => n.e("AuthorHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
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
		"./src/reddit/components/InboxBanner/CommonBanner.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "FjkUHssa96HMV17_qcQt6",
				wrapper: "FjkUHssa96HMV17_qcQt6",
				Content: "_27ZWqn-n6gBKDTqLbt0uk1",
				content: "_27ZWqn-n6gBKDTqLbt0uk1",
				Heading: "ZtxCbLGmd-U6DH5-RsBJV",
				heading: "ZtxCbLGmd-U6DH5-RsBJV",
				Title: "_2Iz2pxeBTmtn5cilveUdwj",
				title: "_2Iz2pxeBTmtn5cilveUdwj",
				TitleIcon: "_3wZ9NKCStyQ9_XMz6jRbkL",
				titleIcon: "_3wZ9NKCStyQ9_XMz6jRbkL",
				Body: "_2GYO5AeH0SYqV0W_IYw7C_",
				body: "_2GYO5AeH0SYqV0W_IYw7C_",
				BodyText: "_1Tw_Z3ZCizARHq8mDvXtJp",
				bodyText: "_1Tw_Z3ZCizARHq8mDvXtJp",
				Thumbnail: "_3VFSVmukKEY-C06RJldU7n",
				thumbnail: "_3VFSVmukKEY-C06RJldU7n",
				ActionButtons: "_45hSSzyMPM5pmBx74E25U",
				actionButtons: "_45hSSzyMPM5pmBx74E25U",
				noMargin: "aaIwLr1Mbi15Al1BCmB8w",
				CloseButton: "_3xbx2cMOI83xtKSIZfzaeW",
				closeButton: "_3xbx2cMOI83xtKSIZfzaeW",
				SecondaryButton: "_1cOP2U6TmJgXE_lLuvdAk",
				secondaryButton: "_1cOP2U6TmJgXE_lLuvdAk",
				CloseButtonIcon: "_3uR0NalufS44rp_5yMF15w",
				closeButtonIcon: "_3uR0NalufS44rp_5yMF15w"
			}
		},
		"./src/reddit/components/InboxBanner/CommonBanner.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/opener/index.ts"),
				c = n("./src/reddit/actions/inboxBanner/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/inbox.ts"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/models/inboxBanner/index.ts");
			const f = e => e.notificationsInbox.banner,
				h = e => {
					return f(e).banners
				};
			var v = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/InboxBanner/CommonBanner.m.less"),
				_ = n.n(x);
			const C = e => {
				let {
					isFromMiniInbox: t,
					banner: n,
					userId: h
				} = e;
				var v, x, C, I, g, N, O, k, E, j, y, w, S, M, U, P, B;
				const A = Object(s.d)(),
					T = Object(m.a)(),
					[H, L, D] = function(e, t, n) {
						const [a, s] = Object(r.useState)(Object(u.s)(e, t) || 0), o = Object(r.useCallback)(() => {
							s(a + 1), Object(u.Bb)(e, t, a + 1)
						}, []), i = Object(r.useCallback)(() => {
							n > 0 && (s(n), Object(u.Bb)(e, t, n))
						}, []);
						return [a, o, i]
					}(h, n.notificationName, (null === (v = n.persistence) || void 0 === v ? void 0 : v.maxViews) || 0),
					[F, R] = Object(r.useState)(!1),
					[W, z] = Object(r.useState)(!1),
					G = Object(s.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = f(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(r.useEffect)(() => {
					L(), t ? (T(Object(l.y)(n.notificationName)), T(Object(l.z)(n.notificationName))) : (T(Object(l.o)(n.notificationName)), T(Object(l.p)(n.notificationName)))
				}, []);
				const Z = null === (x = null == n ? void 0 : n.persistence) || void 0 === x ? void 0 : x.maxViews;
				if (!n || Z && H > Z) return null;
				const K = !!(null == n ? void 0 : n.primaryCta),
					J = !!(null == n ? void 0 : n.secondaryCta),
					q = !!(null == n ? void 0 : n.titleImage),
					Q = !!(null == n ? void 0 : n.thumbnailImageUrl),
					X = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (D(), A(Object(c.a)(n.notificationName)))
					},
					V = {
						backgroundColor: F ? null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.hoverHex : null === (I = null == n ? void 0 : n.primaryCta) || void 0 === I ? void 0 : I.colors.backgroundHex,
						color: null === (g = null == n ? void 0 : n.primaryCta) || void 0 === g ? void 0 : g.text.colorText,
						borderColor: null === (N = null == n ? void 0 : n.primaryCta) || void 0 === N ? void 0 : N.colors.borderHex
					},
					Y = {
						backgroundColor: W ? null === (O = null == n ? void 0 : n.secondaryCta) || void 0 === O ? void 0 : O.colors.hoverHex : null === (k = null == n ? void 0 : n.secondaryCta) || void 0 === k ? void 0 : k.colors.backgroundHex,
						color: null === (E = null == n ? void 0 : n.secondaryCta) || void 0 === E ? void 0 : E.text.colorText,
						borderColor: null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.colors.borderHex
					};
				return G ? null : a.a.createElement("div", {
					className: _.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), X(), T(t ? Object(l.x)(n.notificationName, l.b.BANNER) : Object(l.n)(n.notificationName, l.b.BANNER))
					}
				}, a.a.createElement("div", {
					className: _.a.Content
				}, a.a.createElement("div", {
					className: _.a.Heading
				}, q ? a.a.createElement("img", {
					className: _.a.TitleIcon,
					src: n.titleImage
				}) : a.a.createElement("div", {
					className: _.a.Title,
					style: {
						color: null === (y = n.titleText) || void 0 === y ? void 0 : y.colorText
					}
				}, null === (w = n.titleText) || void 0 === w ? void 0 : w.text)), a.a.createElement("div", {
					className: _.a.Body
				}, a.a.createElement("div", {
					className: _.a.BodyText,
					style: {
						color: null === (S = n.bodyText) || void 0 === S ? void 0 : S.colorText
					}
				}, null === (M = n.bodyText) || void 0 === M ? void 0 : M.text), Q && a.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: _.a.Thumbnail
				})), K || J && a.a.createElement("div", {
					className: Object(o.a)(_.a.ActionButtons, {
						[_.a.noMargin]: Q
					})
				}, K && a.a.createElement(d.t, {
					text: null === (U = n.primaryCta) || void 0 === U ? void 0 : U.text.text,
					priority: d.c.Tertiary,
					size: d.d.XS,
					onClick: e => {
						var r;
						e.stopPropagation(), (null === (r = n.primaryCta) || void 0 === r ? void 0 : r.actionType) === p.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), X(), T(t ? Object(l.x)(n.notificationName, l.b.CTA_1) : Object(l.n)(n.notificationName, l.b.CTA_1))
					},
					style: {
						...V
					},
					onMouseEnter: () => R(!0),
					onMouseLeave: () => R(!1)
				}), J && a.a.createElement(d.t, {
					text: null === (P = n.secondaryCta) || void 0 === P ? void 0 : P.text.text,
					priority: d.c.Plain,
					size: d.d.XS,
					className: _.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === p.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), X(), T(t ? Object(l.x)(n.notificationName, l.b.CTA_2) : Object(l.n)(n.notificationName, l.b.CTA_2)))
					},
					style: {
						...Y
					},
					onMouseEnter: () => z(!0),
					onMouseLeave: () => z(!1)
				}))), (null === (B = n.persistence) || void 0 === B ? void 0 : B.isDismissible) && a.a.createElement(d.t, {
					Icon: Object(b.b)("close_fill"),
					className: _.a.CloseButton,
					size: d.d.XXS,
					iconClassName: _.a.CloseButtonIcon,
					priority: d.c.Plain,
					onClick: e => {
						e.stopPropagation(), X(), T(t ? Object(l.x)(n.notificationName, l.b.DISMISS) : Object(l.n)(n.notificationName, l.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(s.e)(h),
					r = Object(s.e)(v.k);
				return (null == n ? void 0 : n.length) && r ? a.a.createElement(a.a.Fragment, null, null == n ? void 0 : n.map(e => a.a.createElement(C, {
					banner: e,
					isFromMiniInbox: t,
					key: e.notificationName,
					userId: r
				}))) : null
			}
		},
		"./src/reddit/components/InboxBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineLink: "_3vOO3WyD7yteL4Rr9E1i2y",
				banner: "_34mO86zNIysmcISYIe8gVT",
				bannerTitleContainer: "rh7yf_ejK6H75L6jZkb6C",
				bannerTitle: "V_VLkmdSrXqz92-5vad5F",
				bannerDescription: "_1vbdR0mal1nPuuTOZIemLg",
				closeButton: "-Fi_Lr4OQ6XfCIiufmgxa",
				bannerButtonsContainer: "_1a9VL63O5el1YN7RuPoDLy",
				button: "_1mejKTw8yWGmudymV6GufX",
				primaryButton: "_1mR2YFl21PdJDX9T7ykA7c",
				welcomeBanner: "_3QWgBcfZuqQ6TlxZa6uYkS",
				dnPromptBanner: "_3IIpKn1IlCXgko4sLMEie1",
				policyBanner: "GLgkxGZkPymWBWeRISXBe",
				modalHeader: "_2Ggqgl_RyXu2U-mPYZSaCk",
				modalTitle: "_2C3YUpN8pGzseZOBK0tl0I",
				modalCloseIcon: "_2BTQI8_1TIwwfdecOP_j6o",
				modalListItem: "-sXLpWAGj2HMFvzRvH_bC",
				modalListIcon: "_3UO2hA0CsOqKl1bYybPZGs",
				garlicBreadBanner: "SVn8TtBVFQ-GZUhog511q",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return X
			})), n.d(t, "b", (function() {
				return ee
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/notifications/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				b = n.n(m),
				p = n("./src/reddit/components/InboxBanner/CommonBanner.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/inbox.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/components/InboxBanner/index.m.less"),
				C = n.n(_);
			var I = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: r,
					descriptionText: a,
					primaryButtonText: o,
					titleText: i,
					onClose: d,
					onClick: l
				} = e;
				const u = Object(v.a)();
				return s.a.createElement("div", {
					className: Object(c.a)(C.a.banner, t)
				}, s.a.createElement("div", {
					className: C.a.bannerTitleContainer
				}, i && s.a.createElement("h4", {
					className: C.a.bannerTitle
				}, i), r && s.a.createElement(f.t, {
					onClick: e => {
						d && d(e), u(Object(h.q)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(x.b)("close_fill"),
					className: Object(c.a)(C.a.closeIcon, C.a.closeButton),
					size: f.d.XXS,
					priority: f.c.Plain
				})), a && s.a.createElement("p", {
					className: C.a.bannerDescription
				}, a), s.a.createElement("div", {
					className: C.a.bannerButtonsContainer
				}, o && s.a.createElement(f.t, {
					text: o,
					priority: f.c.Tertiary,
					className: Object(c.a)(C.a.button, C.a.primaryButton),
					size: f.d.XS,
					onClick: e => {
						l && l(e), u(Object(h.q)({
							dnPromptAction: "cta"
						}))
					}
				}), n && s.a.createElement(f.t, {
					text: n,
					onClick: e => {
						d && d(e), u(Object(h.q)({
							dnPromptAction: "refuse"
						}))
					},
					priority: f.c.Plain,
					size: f.d.XS,
					className: Object(c.a)(C.a.button, C.a.closeButton)
				})))
			};
			const g = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return s.a.createElement(I, {
					className: C.a.dnPromptBanner,
					titleText: r.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: e => {
						e.stopPropagation(), t()
					},
					closeIcon: !0,
					primaryButtonText: r.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: r.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: e => {
						n(), t()
					}
				})
			};
			var N = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				O = n("./src/reddit/components/ResizeSensor/index.tsx"),
				k = n("./src/reddit/components/InboxTooltip/index.m.less"),
				E = n.n(k);
			const j = 3;
			class y extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = s.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= j) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: r,
						hideSubredditNotifications: a,
						blockAwarder: o,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, b = i + 1 <= j;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						ref: this.ref,
						className: E.a.notificationResizeWrapper
					}, s.a.createElement(N.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: r,
						hideSubredditNotifications: a,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: o
					}), !!b && s.a.createElement(O.a, {
						onResize: this.handleResize
					})))
				}
			}
			var w = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				S = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = {},
				P = "",
				B = 0,
				A = "200px",
				T = "250px",
				H = "270px",
				L = 100,
				D = .5,
				F = 5,
				R = 50,
				W = 55;
			class z extends s.a.Component {
				constructor() {
					super(...arguments), this.container = s.a.createRef(), this.state = {
						notificationHeights: U,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > B && this.props.setActiveOverflowMenuId(P)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: r
						} = this.props, a = t || n, s = window.innerHeight - R - 2 * W - (a ? L : 0);
						let o = 0;
						for (const i in e) o += e[i];
						return 0 === o ? a ? T : r ? A : H : (a && (o += L), s < o && (o = s + (a ? L : 0)), o)
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.updateCurrentCursorIndex = () => {
						const {
							notifications: e
						} = this.props, {
							currentNotificationCursorIndex: t
						} = this.state, n = t + F, r = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: r
						})
					}, this.renderNotifications = () => {
						const e = b()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: r,
								notifications: a
							} = this.props,
							o = a.length > n + F;
						return (r && a.length > 0 && o ? a.slice(0, n + 1) : a).map((n, r) => s.a.createElement(y, M({}, e, {
							index: r,
							key: r,
							notification: n,
							notificationHeight: t[r],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: r,
							notifications: a
						} = this.props;
						if (e.isIntersecting) {
							const e = a.length > this.state.currentNotificationCursorIndex + F;
							this.props.notifications.length > 0 && r && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: F
							})
						}
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						hasNextPage: e,
						isDNInboxPromptBannerEnabled: t,
						isInboxInfiniteScrollEnabled: n,
						isPending: r,
						notifications: a,
						setDesktopNotificationsPromptSeen: o,
						showBrowserNotificationsPermissionSettings: i
					} = this.props, c = !(!a || !a.length), d = this.getContainerHeight(), l = a.length > this.state.currentNotificationCursorIndex + F;
					return s.a.createElement("div", {
						className: E.a.notificationList,
						ref: this.container,
						style: c ? {
							height: d,
							maxHeight: d
						} : {
							minHeight: A
						}
					}, !r && s.a.createElement("div", {
						className: E.a.notificationBannerContainer
					}, t && s.a.createElement(g, {
						onTurnOnBrowserNotifications: i,
						onClose: o
					}), s.a.createElement(p.a, {
						isFromMiniInbox: !0
					})), !c && r && s.a.createElement(w.a, null), !c && !r && s.a.createElement(S.a, {
						inTooltip: !0
					}), c && this.renderNotifications(), n && c && !r && (e || l) && s.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: D
					}, s.a.createElement("div", null)))
				}
			}
			var G = n("./src/reddit/constants/localStorage.ts"),
				Z = n("./src/reddit/controls/InternalLink/index.tsx"),
				K = n("./src/reddit/hooks/useLocalStorage.ts");
			var J = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				q = n("./src/reddit/helpers/localStorage/index.ts");

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [],
				V = d.a.div("StyledDropdown", E.a),
				Y = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: o,
						markAllAsRead: i,
						messagesBadgeCount: d,
						sendInboxClickSettings: u
					} = e;
					const m = !!d,
						b = Object(a.useCallback)(() => {
							n(), o()
						}, [n, o]),
						p = Object(a.useCallback)(() => {
							u(), o()
						}, [u, o]);
					return s.a.createElement("nav", {
						className: E.a.topNav
					}, s.a.createElement("span", {
						className: E.a.topNavTitle
					}, r.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && s.a.createElement("span", {
						className: E.a.topNavLinks
					}, s.a.createElement("span", {
						className: E.a.messagesLinkContainer
					}, s.a.createElement(Z.default, {
						className: Object(c.a)(E.a.messagesLink, {
							[E.a.mActive]: m
						}),
						onClick: b,
						to: m ? "/message/unread" : "/message/messages"
					}, r.fbt._("Messages", null, {
						hk: "hulKY"
					}), s.a.createElement(l.a, {
						className: E.a.badgeCount,
						isActive: m,
						unreadCount: d
					}))), s.a.createElement("button", {
						className: E.a.navLink,
						onClick: i
					}, s.a.createElement(x.a, {
						name: "mark_read",
						className: E.a.icon
					})), s.a.createElement(Z.default, {
						className: E.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, s.a.createElement(x.a, {
						name: "settings",
						className: E.a.icon
					}))))
				},
				$ = e => s.a.createElement("div", {
					className: E.a.bottomBar
				}, s.a.createElement(Z.default, {
					className: E.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, r.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ee = e => {
					const t = Object(v.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: r,
							isPending: c,
							messagesBadgeCount: d,
							notifications: l,
							hideTooltip: u,
							isGarlicBreadEnabled: m,
							isInboxPolicyBannerEnabled: b,
							isLoggedIn: p,
							isPushNotificationsSupported: f,
							userId: x
						} = e,
						[_, C] = Object(J.a)(x),
						[I, g] = function(e) {
							const [t, n] = Object(a.useState)(() => Object(q.w)(e));
							return [t, Object(a.useCallback)(() => {
								n(!0), Object(q.Cb)(e)
							}, [e])]
						}(x),
						[N, O] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [r, a] = Object(K.a)(t, []);
							return [-1 !== r.indexOf(n), () => {
								a([...r, n])
							}]
						}({
							key: G.b.GARLIC_BREAD_BANNER_SEEN,
							userId: x
						}),
						k = !(!l || !l.length),
						j = Object(o.a)(),
						y = j === i.a.Closed || j === i.a.Default || j === i.a.Denied,
						w = f && y && !_;
					return s.a.createElement(V, null, s.a.createElement("div", {
						className: E.a.tooltipContainer
					}, s.a.createElement(Y, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(h.g)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(h.t)({
								badgeCount: r,
								tab: h.f.Messages
							})), t(Object(h.h)()), n()
						},
						sendInboxClickSettings: () => t(Object(h.m)(h.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), s.a.createElement(z, Q({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: C,
						isDNInboxPromptBannerEnabled: w,
						isInboxPrivacyPolicyBannerEnabled: b && !I,
						setInboxPrivacyPolicyBannerSeen: g,
						isGarlicBreadEnabled: m && !N,
						setGarlicBreadBannerSeen: O
					})), (k || c) && s.a.createElement($, {
						sendInboxClickSeeAll: () => t(Object(h.l)()),
						onBarClick: u
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				icon: "_3pDOQfbIbQuT4PBwPGp85E",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				notificationBannerContainer: "_2prSjBmU3TS_Liup8DFR-2",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv"
			}
		},
		"./src/reddit/components/ModNoteItem/index.m.less": function(e, t, n) {
			e.exports = {
				modNote: "pGw5f7WKM2dO9R0Aotv_x",
				metadataContainer: "CYDdrcSbk6kboc66uF_7m",
				metadata: "OtVR2-taBTlpgc-PYOW3y",
				link: "_2Dl07XZ7LNM7tsrbGG4Ym1"
			}
		},
		"./src/reddit/components/ModNoteItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/trackers/modNote.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/components/CCM/ModUserNoteWithIcon/LinkIcon/index.tsx"),
				u = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.tsx"),
				m = n("./src/reddit/components/CCM/ModUserNoteWithIcon/NoteLabeledText/index.tsx"),
				b = n("./src/reddit/models/ModUserNotes/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/ModNoteItem/index.m.less"),
				h = n.n(f);
			! function(e) {
				e.LastAuthorUserNoteTooltip = "LastAuthorUserNoteTooltip", e.ModIdCard = "ModIdCard"
			}(r || (r = {}));
			t.b = e => {
				const t = Object(o.e)(p.fb),
					{
						className: n,
						modNote: r,
						onClick: a,
						subredditId: f,
						context: v
					} = e,
					x = "label" in r && r.label || b.c,
					_ = r.commentInfo,
					{
						postInfo: C
					} = r,
					I = C ? C.permalink : _ ? _.permalink : void 0,
					g = Object(d.a)();
				return s.a.createElement("div", {
					className: Object(i.a)(n, h.a.modNote),
					onClick: e => {
						e.stopPropagation(), a && a(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === v && c.e || "ModIdCard" === v && c.i;
							e && g(e({
								modNote: r,
								subredditId: f
							}))
						})()
					},
					style: x ? {
						backgroundColor: t ? b.b[x] : b.a[x]
					} : {}
				}, s.a.createElement(m.a, {
					modNote: r
				}), s.a.createElement("div", {
					className: h.a.metadataContainer
				}, s.a.createElement(u.a, {
					className: h.a.metadata,
					modNote: r,
					shouldShowUserIcon: !0,
					subredditId: f,
					onClickUsername: () => {
						const e = "LastAuthorUserNoteTooltip" === v && c.o || "ModIdCard" === v && c.p;
						e && g(e({
							modNote: r,
							subredditId: f
						}))
					}
				}), I && s.a.createElement(l.a, {
					className: h.a.link,
					linkUrl: I,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === v && c.f || "ModIdCard" === v && c.g;
							e && g(e({
								modNote: r,
								subredditId: f
							}))
						})()
					}
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/NotificationUnit/index.m.less"),
				o = n.n(s);
			const i = () => a.a.createElement("li", {
					className: o.a.placeholderWrapper
				}, a.a.createElement("span", {
					className: o.a.placeholderAvatar
				}), a.a.createElement("span", {
					className: o.a.placeholderContent
				})),
				c = () => a.a.createElement("ol", null, a.a.createElement(i, null), a.a.createElement(i, null), a.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				inAppNotification: "_3U799isaNx88b2pVv1S7m1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				TitleWrapper: "_3D7vaSdKwBK4pdvYmH0ib",
				titleWrapper: "_3D7vaSdKwBK4pdvYmH0ib",
				title: "_180jOSBDwwE60X5UR8zt3-",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				isFullWidth: "_36xH7NkS9uRrlN87iMo6Bw",
				isUnread: "_2svu3lh5YfWQmYfACdB2J5",
				replyIcon: "_3LbCSOW9yuZK_CHzTuR9M5",
				postIcon: "_102yZEdZMcXLlu2Ri0KD9O",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/helpers/describeApiError/index.ts"),
				c = n("./src/reddit/components/PostList/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: n
				} = e;
				let a = r.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (a = Object(i.a)({
					apiError: n,
					isLoggedOut: !1
				})), s.a.createElement("div", {
					className: d.a.somethingWrong
				}, s.a.createElement("div", {
					className: d.a.somethingWrongText
				}, a), t && s.a.createElement(o.l, {
					onClick: t
				}, r.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			}
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, n) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/config.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/selectors/experiments/econ/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				if (Object(s.e)(c.d)) return null;
				const {
					topAwardIcon: t,
					recentAwardings: n,
					username: r
				} = e;
				if (!n.topAward) return null;
				const {
					topAward: d,
					totalCount: m
				} = n, b = d.description ? d.description : d.name;
				return a.a.createElement("a", {
					className: l.a.AwardedLastMonth,
					href: `${o.a.oldRedditUrl}/user/${r}/gilded`
				}, a.a.createElement("div", {
					className: l.a.iconColumn
				}, a.a.createElement("img", {
					alt: b,
					className: l.a.icon,
					src: t
				}), m > 1 && a.a.createElement("span", {
					className: l.a.count
				}, `+${Object(i.b)(m-1)}`)), a.a.createElement("div", {
					className: l.a.textColumn
				}, u._({
					"*": "Received the {award-name} Award and more in the past 30 days",
					_1: "Received the {award-name} Award in the past 30 days"
				}, [u._param("award-name", d.name), u._plural(m)], {
					hk: "16MJHe"
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
						hideNSFWPref: a,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? s.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === d ? s.a.createElement(i.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && a ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(a.c)({
					currentUser: o.m,
					hideNSFWPref: o.H
				}),
				c = Object(r.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(s.B)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				b = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				p = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = n.n(f);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(e => {
				let {
					isHovercard: t,
					username: n,
					isAvatarPost: i,
					post: f,
					share: x
				} = e;
				const _ = Object(l.b)(),
					C = Object(o.d)(),
					I = f && f.id,
					g = f && f.voteState;
				let N = null;
				I || (N = t ? "user_hovercard" : "profile_overview");
				const O = Object(a.useCallback)(() => _(Object(m.h)(t ? "user_hovercard" : "profile_overview", n)), [t, _, n]);
				return s.a.createElement(u.t, {
					onClick: () => {
						i ? (_(m.i), I && g === p.a.notVoted && C(Object(c.ib)(I))) : O();
						const e = i ? "postify" : "copy";
						C(Object(d.b)({
							clickSource: N,
							share: x,
							source: e
						}))
					},
					className: Object(r.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, s.a.createElement(b.a, {
					className: Object(r.a)({
						[h.a.shirtIcon]: !i,
						[h.a.avatarPostButtonShirtIcon]: i
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
					className: h.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: n,
					className: r,
					isOwnProfile: d,
					onClick: m
				} = e;
				return a.a.createElement(o.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !n && d,
						[l.a.compactButtonLayout]: t
					}, r)
				}, n ? a.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : a.a.createElement("div", {
					className: l.a.shirtIcon
				}), n ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : d ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), n ? a.a.createElement("div", {
					className: l.a.chevronIcon
				}) : a.a.createElement(i.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = n.n(c),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: n,
					username: r,
					editMode: c,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return a.a.createElement("div", {
					className: d.a.bannerWrapper
				}, a.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: n,
					userName: r
				}), c && t && (l ? a.a.createElement(s.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : a.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: n,
					url: r,
					userCreated: c,
					username: d,
					...l
				} = e;
				const u = n ? a.a.createElement(a.a.Fragment, null, "u/", d, " · ", a.a.createElement(o.d, {
					seconds: c,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return r ? a.a.createElement(s.default, i({}, l, {
					className: t,
					to: r
				}), u) : a.a.createElement("span", i({}, l, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/async.ts"),
				d = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				l = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				u = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = n("./src/reddit/selectors/experiments/econ/index.ts"),
				b = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				p = n.n(b);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const f = 25;

			function h(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function v(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const x = h("particleDelay", p.a),
				_ = h("particleX", p.a),
				C = h("particleFloat", p.a),
				I = () => {
					const e = v(_),
						t = v(C),
						n = v(x);
					return Object(a.a)(p.a.particle, e, t, n)
				};
			class g extends o.a.Component {
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
						className: `${I()}`
					})
				}
			}
			var N = g;
			const O = e => {
				let {
					className: t,
					isGold: n,
					snoovatarUrl: s,
					prefersReducedAnimations: b,
					origin: f,
					userName: h
				} = e;
				const v = s && Object(u.d)(s),
					x = f === l.a.Profile,
					_ = f === l.a.Hovercard,
					C = Object(i.e)(m.p);
				return v ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(a.a)({
						[p.a.profileTreatment]: x,
						[p.a.hovercardTreatment]: _
					})
				}, o.a.createElement("div", {
					className: Object(a.a)(p.a.nftProfileUnitContainer, {
						[p.a.nftProfileUnitContainerWithoutCta]: C
					})
				}, o.a.createElement(d.a, {
					className: p.a.nftProfileUnit,
					imageUrl: s,
					origin: f,
					showDetailsCta: !C
				}))), C && o.a.createElement("div", {
					className: p.a.showcase
				}, o.a.createElement(c.a, {
					origin: f,
					userName: h
				}))) : o.a.createElement("div", {
					className: Object(a.a)(p.a.snoovatarContainer, t)
				}, n && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: p.a.topGlow
				}), o.a.createElement("div", {
					className: p.a.bottomGlow
				}), !b && o.a.createElement(N, null)), o.a.createElement("img", {
					className: Object(a.a)(p.a.snoovatar, {
						[p.a.premiumGlow]: n
					}),
					src: s,
					alt: r.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = e => {
				let {
					title: t,
					username: n,
					isEmployee: s,
					isGold: l,
					isNSFW: m
				} = e;
				return o.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || n, s && o.a.createElement(i.a, {
					className: u.a.snoovatarAdminIcon,
					title: a.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), l && o.a.createElement("a", {
					title: a.fbt._("{username} has Reddit Premium", [a.fbt._param("username", n)], {
						hk: "3Fylv"
					}),
					href: `${r.a.redditUrl}/premium`
				}, o.a.createElement(d.a, {
					className: u.a.snoovatarPremiumIcon
				})), m && o.a.createElement(c.a, {
					className: u.a.snoovatarNsfwIcon,
					title: a.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnitContainerWithoutCta: "_3BzIc6FzgAGGhbAOD7PPEr",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
				showcase: "_rvftTJBQnr_blLyFQjK1",
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				f = n.n(p),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				v = n.n(h),
				x = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				_ = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: n,
					currentUserHasSnoovatar: r,
					editMode: p,
					isDeletingBanner: h,
					isEmployee: C,
					isGold: I,
					isNSFW: g,
					isOwnProfile: N,
					onClickSnoovatar: O,
					onDeleteBanner: k,
					prefersReducedAnimations: E,
					snoovatarUrl: j,
					title: y,
					userCreated: w,
					username: S,
					url: M,
					isHovercard: U
				} = e;
				const P = Object(s.e)(e => !N && !!j && Object(d.g)(e));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: g,
					username: S,
					isDeletingBanner: !!h,
					onDeleteBanner: k
				}), !p && N && a.a.createElement(o.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, a.a.createElement(c.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), a.a.createElement(x.a, {
					isGold: I,
					snoovatarUrl: j,
					prefersReducedAnimations: E,
					origin: U ? i.a.Hovercard : i.a.Profile,
					userName: S
				}), a.a.createElement(_.a, {
					isEmployee: C,
					isGold: I,
					isNSFW: g,
					title: y,
					username: S
				}), a.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: w,
					url: M
				}), (N || !r && !!j) && a.a.createElement(l.a, {
					compact: n,
					currentUserHasSnoovatar: r,
					isOwnProfile: N,
					onClick: O
				}), P && a.a.createElement(u.a, {
					username: S,
					isHovercard: !!U,
					share: {
						username: S
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				b = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...a
					} = e;
					return s.a.createElement(o.t, u({}, a, {
						priority: m(o.c.Primary, t, n),
						className: Object(l.a)(a.className, d.a.BaseButton),
						size: r ? o.d.S : o.d.M
					}))
				},
				p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: a,
						...i
					} = e;
					return s.a.createElement(o.t, u({}, i, {
						priority: m(o.c.Secondary, n, r),
						className: Object(l.a)(i.className, d.a.BaseButton),
						size: a ? o.d.S : o.d.M,
						text: p(t)
					}))
				};
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: r,
						small: a = !1,
						isFullWidth: o = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: a,
						isFullWidth: o,
						style: c
					};
					return this.props.userIsSubscriber ? s.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(b, u({}, d, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(a.a)(Object(r.c)(s.a))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, a.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(s.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				disabled: "FVIZ8GUq5tMGZlJ7y28ll",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = a.a.createRef(), this.menuItems = a.a.createRef(), this.containerRef = a.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: r
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), r(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), e.stopPropagation(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const n = this.menuItems.current.getElementsByClassName(o.a.menuOption);
							for (let r = 0; r < n.length; r++) e.relatedTarget === n[r] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(o.a.menuOption);
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(o.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n,
						menuOptionClassName: r
					} = this.props;
					return e.map((e, s) => a.a.createElement(c.b, {
						key: s + e.displayText,
						className: Object(i.a)(o.a.menuOption, r, {
							[o.a.topics]: n
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.icon && e.icon, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: r,
						isTopicsStyle: s,
						menuItemsClassName: c,
						name: m,
						isSaving: b,
						buttonIcon: p,
						disabled: f
					} = this.props, {
						isOpen: h
					} = this.state;
					return a.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(o.a.dropdownMenu, t, {
							[o.a.topics]: s
						})
					}, a.a.createElement("button", {
						onClick: f ? void 0 : this.handleDropdownClick,
						className: Object(i.a)(e, o.a.selector, {
							[o.a.compact]: r
						}, {
							[o.a.topics]: s
						}, {
							[o.a.disabled]: f
						}),
						name: m,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: f ? void 0 : this.handleDropdownBlur,
						onKeyDown: f ? void 0 : this.handleDropdownKeyDown
					}, a.a.createElement("span", {
						className: o.a.selectorContent,
						tabIndex: -1
					}, p && a.a.createElement("span", {
						className: o.a.buttonIcon
					}, p), n), f ? null : b ? a.a.createElement(d.a, {
						sizePx: 8,
						className: o.a.loadingIcon
					}) : a.a.createElement(l.a, {
						name: "caret_down"
					})), a.a.createElement("div", {
						className: Object(i.a)(o.a.menuItems, c, {
							[o.a.topics]: s,
							[o.a.isClosed]: !h
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, !f && h && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			class s extends a.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
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
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, s = n || r;
					return a.a.createElement("div", {
						className: e.className
					}, n && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && a.a.createElement("input", {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");

			function s(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case a.J.AUTHORIZATION_ERROR:
						return n ? r.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : r.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case a.J.VALIDATION_ERROR:
						return r.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case a.J.NOT_FOUND_ERROR:
						return r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case a.J.SERVER_ERROR:
						return r.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case a.J.LIKELY_UBLOCK_ERROR:
						return r.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return r.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = n.n(a);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(s.a.loadingBackground, {
						[s.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(s.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/authorHovercard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			}));
			var r = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => ({
					comment: t && Object(r.a)(t) ? a.j({
						state: e,
						commentId: t
					}) : null,
					post: t ? a.M(e, t) : null,
					profile: a.V(e, t),
					screen: a.eb(e),
					snoovatar: t ? a.kb(e, t) : null,
					user: a.ub(e)
				}),
				o = (e, t) => n => ({
					source: "user_hovercard",
					action: "click",
					noun: e,
					...s(n, t)
				}),
				i = e => t => ({
					source: "user_hovercard",
					action: "view",
					noun: "hover_user_hovercard",
					...s(t, e)
				}),
				c = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "mute_dialog_in_context",
					...s(t, e)
				}),
				d = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "unmute_dialog_in_context",
					...s(t, e)
				}),
				l = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "ban_dialog_in_context",
					...s(t, e)
				}),
				u = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "unban_user_in_context",
					...s(t, e)
				}),
				m = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "change_user_flair_in_context",
					userSubreddit: a.wb(t),
					...s(t, e)
				}),
				b = e => t => ({
					source: a.V(t) ? "user_profile" : "user_hovercard",
					action: "click",
					noun: "create_chat",
					...e && s(t, e)
				})
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return h
			}));
			var r = n("./src/reddit/selectors/avatarPushcard.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					...Object(a.q)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(a.q)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(a.q)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var c;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(c || (c = {}));
			const d = e => t => {
					const n = Object(a.q)(t);
					return {
						...n,
						source: "marketplace",
						action: "view",
						noun: "product_detail_page",
						actionInfo: {
							...n.actionInfo,
							reason: e,
							pageType: "product_detail_page"
						}
					}
				},
				l = (e, t, n) => s => {
					const o = Object(r.a)(s).id;
					return {
						...Object(a.q)(s),
						source: e,
						action: t,
						noun: n,
						goldPurchase: {
							offerContext: o
						}
					}
				},
				u = l("marketplace_top_nav", "view", "achievement_icon"),
				m = l("marketplace_top_nav", "click", "achievement_icon"),
				b = l("user_drawer", "view", "pushcard"),
				p = l("user_drawer", "click", "pushcard"),
				f = l("user_drawer", "dismiss", "pushcard"),
				h = l("user_drawer", "dismiss_confirm", "pushcard")
		},
		"./src/reddit/helpers/trackers/marketplace/display-collectibles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				a = n("./src/reddit/helpers/trackers/snoovatar.ts");
			const s = e => {
				let {
					sendEvent: t,
					user: n,
					pageType: s,
					isDisplayCollectiblesEnabled: o
				} = e;
				const i = Object(r.b)(n.accountIcon);
				o && i || t(Object(a.m)({
					user: n,
					pageType: s,
					userHasNft: i
				}))
			}
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				a = n("./src/reddit/helpers/localStorage/index.ts");

			function s(e) {
				const [t, n] = Object(r.useState)(Object(a.v)(e));
				return [t, Object(r.useCallback)(() => {
					n(!0), Object(a.sb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				a = n("./src/reddit/contexts/ApiContext.tsx");

			function s() {
				const {
					gqlContext: e
				} = Object(r.useContext)(a.a);
				return e
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), a.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, a.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), a.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				stopColor: "#EC0623"
			}), a.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", {
					fill: "inherit"
				}, a.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/ModUserNotes/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/reddit/helpers/isPost.ts"),
				s = n("./src/redditGQL/types.ts");
			const o = "DEFAULT_MOD_NOTE",
				i = (e, t) => `LAST_AUTHOR_MOD_NOTE-${e}${t?"-overlay":""}`,
				c = {
					[s.H.BotBan]: "#1717604F",
					[s.H.PermaBan]: "#3E0A514F",
					[s.H.Ban]: "#5B00414F",
					[s.H.AbuseWarning]: "#6D001A4F",
					[s.H.SpamWarning]: "#5423134F",
					[s.H.SpamWatch]: "#3A26194F",
					[s.H.SolidContributor]: "#0044414F",
					[s.H.HelpfulUser]: "#02315C4F",
					[o]: "#242424"
				},
				d = {
					[s.H.BotBan]: "#CCD7FF",
					[s.H.PermaBan]: "#F3CCFF",
					[s.H.Ban]: "#FFC9D2",
					[s.H.AbuseWarning]: "#FFD5AE",
					[s.H.SpamWarning]: "#FFF494",
					[s.H.SpamWatch]: "#EAD5A2",
					[s.H.SolidContributor]: "#CBFD9A",
					[s.H.HelpfulUser]: "#A6EDFF",
					[o]: "#E6E6E6"
				},
				l = {
					[s.H.BotBan]: "bot_fill",
					[s.H.PermaBan]: "bot_fill",
					[s.H.Ban]: "ban_fill",
					[s.H.AbuseWarning]: "spoiler_fill",
					[s.H.SpamWarning]: "spoiler_fill",
					[s.H.SpamWatch]: "nsfw_language_fill",
					[s.H.SolidContributor]: "new_fill",
					[s.H.HelpfulUser]: "peace_fill",
					[o]: "user_note_fill"
				},
				u = {
					[s.H.BotBan]: "#5349DA",
					[s.H.PermaBan]: "#9C3CAC",
					[s.H.Ban]: "#DE107F",
					[s.H.AbuseWarning]: "#FB133A",
					[s.H.SpamWarning]: "#E79800",
					[s.H.SpamWatch]: "#9C6926",
					[s.H.SolidContributor]: "#00A368",
					[s.H.HelpfulUser]: "#006DC6",
					[o]: "#818384"
				},
				m = {
					[s.H.BotBan]: () => r.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[s.H.PermaBan]: () => r.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[s.H.Ban]: () => r.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[s.H.AbuseWarning]: () => r.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[s.H.SpamWarning]: () => r.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[s.H.SpamWatch]: () => r.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[s.H.SolidContributor]: () => r.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[s.H.HelpfulUser]: () => r.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				b = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/helpers/trackers/inbox.ts"),
				o = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/config.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				b = n.n(m);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var h = e => {
				let {
					inTooltip: t,
					onBtnClick: n
				} = e;
				const r = `/${f}`,
					s = {
						to: r,
						kind: l.b.InternalLink
					},
					o = a.a.createElement(u.default, {
						to: r,
						target: "_blank",
						rel: "noopener noreferrer",
						className: b.a.subredditLinkR,
						onClick: n
					}, f);
				return a.a.createElement("div", {
					className: Object(c.a)(b.a.emptyState, b.a.karmaView, {
						[b.a.inNotificationsPage]: !t
					})
				}, a.a.createElement("img", {
					src: `${d.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: i.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(c.a)(b.a.avatarImage, {
						[b.a.inTooltip]: t
					})
				}), a.a.createElement("h1", {
					className: Object(c.a)(b.a.emptyTitle, {
						[b.a.inTooltip]: t
					})
				}, i.fbt._("You don’t have any activity yet", null, {
					hk: "43tvWW"
				})), a.a.createElement("p", {
					className: b.a.emptyDescription
				}, i.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [i.fbt._param("Link: to popular subreddit", o)], {
					hk: "1WOK4T"
				})), a.a.createElement(l.t, p({
					className: b.a.emptyStateButton,
					onClick: n,
					text: `Visit ${f}`
				}, s)))
			};
			t.a = e => {
				let {
					inTooltip: t
				} = e;
				const n = Object(o.a)();
				return a.a.createElement(h, {
					inTooltip: t,
					onBtnClick: (e => () => n(Object(s.r)({
						actionInfoType: e
					})))(s.a.Karma)
				})
			}
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less": function(e, t, n) {
			e.exports = {
				emptyState: "_3B_EfQMwEiEzc_9vEdVplz",
				emptyStateLoggedOutContainer: "_3AcDG0KjCxs3H1UW_4ajNf",
				emptyStateDivider: "bfJNAfRJ7wvCVMJIHbVa-",
				karmaView: "_3eBLRjkIDT-8Hobfrj_UTz",
				inNotificationsPage: "_2upiES-f8azWSz_UdoeHE7",
				avatarImage: "mGm_bo7f-d7T6Ax_UEs_l",
				inTooltip: "JBKRJW6IC_gf5qQ_mqb4A",
				catsImageWrapper: "odMqhFpc4xkpus4jHz_9f",
				cat: "_13uS-SsNmI2cGGsq2rpP8O",
				top: "_29krHC0w9xxlGw1mBpwNHU",
				bottom: "_3VkvX9EbwQAVQJ3qEl_wzw",
				cloud: "_3yAL94u5AxUY-JhhHIPNuU",
				yummy: "_2TY8uYFieKTHl7jN_vmcYR",
				memesImageWrapper: "jaQ0krPJ6FkjLU-VDMGNq",
				shrek: "_1f1-1KlOtH3uQKPHzkGdDI",
				star: "_2mEU_pG_y9L4CaC7zihby0",
				inBottom: "_1kfecAwlZWu6be_WDfvh-P",
				inCenter: "_4DkJv1On5ORUXrwzznhqE",
				inTop: "_1lJAHwdJYzqn-69JkG-HJQ",
				emptyStateButton: "_1_kVxSQ5_eQNTfI-Y89mu4",
				loggedOutState: "_3uw_OsQCi8zOpS3fha4JEF",
				emptyStateWithBanner: "_1L4nSUqK39ZB-E1-MXtBve",
				emptyTitle: "_36brOzjH6sE_rgnTt-hcL1",
				emptyDescription: "Ae79bDDbZ2U_G-wqwA71z",
				subredditLinkR: "_9DV1fqkU31oi8pfSQxzjw",
				BellOutline: "_23NDu_VaLgaSWVzKHs-Gfa",
				bellOutline: "_23NDu_VaLgaSWVzKHs-Gfa"
			}
		},
		"./src/reddit/reducers/features/matrixChat/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var r, a = n("./src/config.ts"),
				s = n("./src/reddit/actions/matrixChat/constants.ts");
			! function(e) {
				e[e.CLOSED = 0] = "CLOSED", e[e.NORMAL = 1] = "NORMAL", e[e.MINIMIZED = 2] = "MINIMIZED"
			}(r || (r = {}));
			const o = {
					state: r.CLOSED,
					url: a.a.matrixChatUrl
				},
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.d:
							const {
								url: n
							} = t.payload;
							return {
								...e, url: n
							};
						case s.c:
							const {
								state: a
							} = t.payload;
							return {
								...e, state: a
							};
						case s.a:
							return {
								...e, activeUserId: void 0
							};
						case s.b:
							const {
								count: o
							} = t.payload;
							return {
								...e, notificationsCount: o
							};
						case s.e:
							const i = t.payload;
							return {
								...e, state: r.NORMAL, activeUserId: i
							};
						default:
							return e
					}
				}
		},
		"./src/reddit/selectors/avatarPushcard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/helpers/localStorage/index.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts");
			Object(a.a)({
				features: {
					avatar: o.a
				}
			});
			const c = e => {
					var t, n, r;
					return null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.pushcard
				},
				d = Object(r.a)(c, i.b, (e, t) => {
					if (!e || !t) return null;
					const {
						id: n,
						eventViews: r
					} = Object(s.B)();
					return n === e.id && r > e.maxViews ? null : e
				}),
				l = Object(r.a)(d, e => {
					if (!e) return null;
					const {
						id: t,
						lastInteractionTimestamp: n
					} = Object(s.B)();
					return t === e.id && n > 0 ? null : e.banner
				})
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				s = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.models[n]
				},
				c = (e, t) => {
					let {
						subredditId: n,
						username: r
					} = t;
					const a = Object(o.Db)(e, {
						userName: r
					});
					if (!a) return;
					const s = i(e, {
						subredditId: n
					});
					return s ? s[a.id] : void 0
				},
				d = Object(r.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.features.banned.userOrder[n];
					return r ? r.map(t => e.features.banned.models[n][t]) : a.a
				}),
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(s.e)(n);
					return e.features.banned.api.pending[r]
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.loadMore[n]
				},
				m = e => e.features.banned.search.api.pending,
				b = e => e.features.banned.search.result,
				p = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/models/SubredditModeration/index.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(s.a)({
				pages: {
					modHub: o.a
				}
			});
			const i = [],
				c = Object(r.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.pages.modHub.muted.userOrder[n];
					return r ? r.map(t => e.pages.modHub.muted.models[n][t]) : i
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(a.e)(n);
					return !!e.pages.modHub.muted.api.pending[r]
				},
				l = (e, t, n) => !!e.pages.modHub.muted.models[t] && !!e.pages.modHub.muted.models[t][n],
				u = e => !!e.pages.modHub.muted.search.api.pending,
				m = e => e.pages.modHub.muted.search.result,
				b = e => {
					var t, n, r;
					return null === (r = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === r ? void 0 : r.inContext
				},
				p = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.muted.loadMore[n]
				}
		},
		"./src/reddit/selectors/subredditModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return C
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/models/SubredditModeration/index.ts");
			const s = [],
				o = Object(r.a)((e, t) => {
					let {
						subredditId: n,
						before: r,
						after: s
					} = t;
					const o = Object(a.e)(n, s, r),
						i = e.pages.modHub.moderators.userOrder.data[n] && e.pages.modHub.moderators.userOrder.data[n][o];
					return i ? i.map(t => e.pages.modHub.moderators.models[n][t]) : []
				}),
				i = (e, t, n) => !!e.pages.modHub.moderators.models[t] && !!e.pages.modHub.moderators.models[t][n],
				c = (e, t) => {
					let {
						subredditId: n,
						beforeEditable: r,
						afterEditable: s
					} = t;
					const o = Object(a.e)(n, s, r),
						i = e.pages.modHub.moderators.editableUserOrder.data[n] && e.pages.modHub.moderators.editableUserOrder.data[n][o];
					return i ? i.map(t => e.pages.modHub.moderators.editableModerators[n][t]) : []
				},
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.editableModerators[n] || null
				},
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.models[n] || null
				},
				u = e => !!e.pages.modHub.moderators.search.api.pending,
				m = e => e.pages.modHub.moderators.search.result,
				b = (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!e.pages.modHub.moderators.invitePending[n]
				},
				p = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreModerators[n] && e.pages.modHub.moderators.loadMoreModerators[n].after
				},
				f = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreModerators[n] && e.pages.modHub.moderators.loadMoreModerators[n].before
				},
				h = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreEditableModerators[n] && e.pages.modHub.moderators.loadMoreEditableModerators[n].after
				},
				v = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreEditableModerators[n] && e.pages.modHub.moderators.loadMoreEditableModerators[n].before
				},
				x = (e, t) => {
					const n = Object(a.e)(t.subredditId, t.after, t.before);
					return !!e.pages.modHub.moderators.userOrder.api.pending[n]
				},
				_ = (e, t) => {
					const n = Object(a.e)(t.subredditId, t.afterEditable, t.beforeEditable);
					return !!e.pages.modHub.moderators.editableUserOrder.api.pending[n]
				},
				C = Object(r.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.pages.modHub.moderators.invitedModerators.userOrder[n];
					return r ? r.map(t => e.pages.modHub.moderators.invitedModerators.models[n][t]) : s
				})
		},
		"./src/redditGQL/operations/ProxyAuthor.json": function(e) {
			e.exports = JSON.parse('{"id":"695a72c78215"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.cd82460f93f0da756dca.js.map