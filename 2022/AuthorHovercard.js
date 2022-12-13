// https://www.redditstatic.com/desktop2x/AuthorHovercard.036489073c476e53a6c6.js
// Retrieved at 12/13/2022, 10:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/lib/constants/colors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = {
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
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/intlSupport.ts");

			function s(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: s,
					locale: i = a.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * r.Xb);
				return o.a ? new Intl.DateTimeFormat(i, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					r = new Date(e * (n ? 1 : 1e3));
				return r.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return ae
			})), n.d(t, "b", (function() {
				return se
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				o = n.n(r),
				s = n("./src/lib/makeActionCreator/index.ts"),
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
				method: m.ob.GET,
				data: n
			});
			var _ = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				g = n("./src/reddit/models/SubredditModeration/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/bannedUser.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/subredditModeration/constants.ts"),
				E = n("./src/lib/initializeClient/installReducer.ts"),
				y = n("./node_modules/redux/es/redux.js");
			var w = function() {
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
			const S = {};
			var P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.s: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(g.e)(n, a);
							return {
								...e,
								[r]: !0
							}
						}
						case j.r:
						case j.q: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(g.e)(n, a);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				U = Object(y.c)({
					error: w,
					pending: P
				});
			const M = {};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								fetchedToken: n,
								subredditId: a
							} = t.payload, r = Object(g.e)(a, n);
							return {
								...e,
								[r]: !0
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
			const L = {};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
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
					case j.p:
					case j.r: {
						const {
							subredditId: n,
							bannedUsers: a
						} = t.payload;
						return Object(D.merge)(e, {
							[n]: a
						})
					}
					case j.w: {
						const {
							subredditId: n,
							userId: a
						} = t.payload;
						return Object(D.unsetIn)(e, [n, a])
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
				G = Object(y.c)({
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
				Z = Object(y.c)({
					api: G,
					result: K
				});
			const J = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								subredditId: n,
								bannedUserIds: a
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...a]
							} : {
								...e,
								[n]: a
							}
						}
						case j.w: {
							const {
								subredditId: n,
								userId: a
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== a)
							}
						}
						case j.p: {
							const {
								subredditId: n,
								bannedUserIds: a
							} = t.payload, r = a[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				q = Object(y.c)({
					api: U,
					fetchedTokens: B,
					inContext: T,
					loadMore: H,
					models: R,
					search: Z,
					userOrder: Q
				});
			Object(E.a)({
				features: {
					banned: q
				}
			});
			const V = Object(s.a)(j.s),
				X = Object(s.a)(j.r),
				Y = Object(s.a)(j.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, a, r) => {
						let {
							apiContext: o
						} = r;
						const s = a(),
							i = t.after || "",
							c = Object(g.e)(e, i),
							d = s.features.banned.fetchedTokens[c];
						if (s.features.banned.api.pending[c] || d) return;
						n(V({
							subredditId: e,
							fetchedToken: i
						}));
						const l = s.subreddits.models[e].name,
							u = await x(o(), l, t);
						u.ok ? n(X({
							...u.body,
							fetchedToken: i
						})) : n(Y({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				ee = Object(s.a)(j.v),
				te = Object(s.a)(j.u),
				ne = Object(s.a)(j.t),
				ae = (e, t) => async (n, a, r) => {
					let {
						apiContext: o
					} = r;
					const s = a().subreddits.models[e].name,
						i = {
							username: Object(_.a)(t)
						};
					n(ee());
					const c = await x(o(), s, i);
					c.ok ? n(te(c.body)) : n(ne(c.error))
				}, re = Object(s.a)(j.p), oe = Object(s.a)(j.w), se = (e, t, n) => async (r, s, c) => {
					let {
						apiContext: d
					} = c;
					const u = s(),
						v = u.subreddits.models[e].url,
						g = u.subreddits.models[e].name;
					t.username = Object(_.a)(t.username), r(Object(i.h)(n));
					const I = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: Object(h.a)(`${e.apiUrl}${t}api/friend`),
						method: m.ob.POST,
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
					if (I.ok) {
						r(Object(i.e)(n));
						const e = {
							username: t.username
						};
						r(Object(l.f)({
							kind: C.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const o = await x(d(), g, e);
						o.ok && r(re(o.body))
					} else {
						r(Object(i.f)(n, I.error));
						const e = o()(I, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const c = r().subreddits.models[e].url,
						d = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: Object(h.a)(`${e.apiUrl}${t}api/unfriend`),
							method: m.ob.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(i(), c, t);
					if (d.ok) n(oe({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: C.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = o()(d, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, a) => {
					const r = a();
					await Promise.all([(async () => {
						if (!Object(I.b)(u.a.BAN_USER)(r) && !Object(N.V)(r, {
								subredditId: e
							})) {
							const t = Object(N.Y)(r, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const a = Object(k.Cb)(r, {
							userName: t
						});
						if (!a) return;
						const o = Object(O.h)(r, {
							subredditId: e
						});
						o && o[a.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(c.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return w
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./node_modules/lodash/get.js"),
				s = n.n(o),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const m = (e, t, n) => Object(c.a)(Object(d.a)(e, [l.a]), {
				endpoint: Object(u.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.ob.GET,
				data: n
			});
			var b = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				p = n("./src/reddit/models/SubredditModeration/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(r.a)(v.Y),
				_ = Object(r.a)(v.W),
				g = Object(r.a)(v.V),
				C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, a, r) => {
						let {
							apiContext: o
						} = r;
						const s = a(),
							i = t.after || "",
							c = Object(p.e)(e, i),
							d = s.pages.modHub.muted.fetchedTokens[c];
						if (s.pages.modHub.muted.api.pending[c] || d) return;
						n(x({
							subredditId: e,
							fetchedToken: i
						}));
						const l = s.subreddits.models[e].name,
							u = await m(o(), l, t);
						u.ok ? n(_({
							...u.body,
							fetchedToken: i
						})) : n(g({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				I = Object(r.a)(v.bb),
				O = Object(r.a)(v.ab),
				N = Object(r.a)(v.Z),
				k = (e, t) => async (n, a, r) => {
					let {
						apiContext: o
					} = r;
					const s = a().subreddits.models[e].name,
						i = {
							username: Object(b.a)(t)
						};
					n(I());
					const c = await m(o(), s, i);
					c.ok ? n(O(c.body)) : n(N(c.error))
				}, j = Object(r.a)(v.X), E = Object(r.a)(v.cb), y = (e, t) => async (n, r, o) => {
					let {
						apiContext: u
					} = o;
					const m = r().subreddits.models[e].url,
						b = await ((e, t, n) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.ob.POST,
							data: {
								api_type: "json",
								id: n,
								type: "muted"
							}
						}))(u(), m, t);
					if (b.ok) n(E({
						subredditId: e,
						userId: t
					}));
					else {
						const e = s()(b, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(h.f)({
							kind: f.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, w = (e, t, n) => async (r, o, u) => {
					let {
						apiContext: p
					} = u;
					const v = o(),
						x = v.subreddits.models[e].url,
						_ = v.subreddits.models[e].name;
					t = Object(b.a)(t);
					const g = await ((e, t, n, a) => Object(c.a)(Object(d.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.ob.POST,
						data: {
							api_type: "json",
							name: n,
							note: a,
							type: "muted"
						}
					}))(p(), x, t, n);
					if (g.ok) {
						const e = {
							username: t
						};
						r(Object(h.f)({
							kind: f.b.SuccessMod,
							text: a.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const n = await m(p(), _, e);
						n.ok && r(j(n.body))
					} else {
						const e = s()(g, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(h.f)({
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
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var a = n("./src/lib/loadableAction/index.ts");
			const r = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				s = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: a,
					unreadCount: i,
					testId: d
				} = e;
				return n ? r.a.createElement("span", {
					className: Object(o.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: a || i < 1
					}),
					"data-testid": d
				}, a || i < 1 ? "" : Object(s.b)(i)) : null
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/components/CCM/ModUserNoteWithIcon/LinkIcon/index.m.less"),
				c = n.n(i);
			t.a = e => {
				const t = Object(s.b)("external_link");
				return r.a.createElement("a", {
					className: Object(o.a)(c.a.link, e.className),
					href: e.linkUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e.onClick
				}, r.a.createElement(t, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/hooks/useTracking.ts"),
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
					modNote: g,
					onClickUsername: C,
					shouldShowDelete: I,
					shouldShowUserIcon: O,
					subredditId: N
				} = e, k = Object(o.d)(), {
					user: j,
					id: E,
					itemType: y
				} = g, w = `ModUserNote--Modal--DeleteConfirmation--${E}`, S = Object(s.a)(), P = Object(a.useCallback)(() => k(Object(u.i)(w)), [k, w]), U = Object(a.useCallback)(() => {
					S(Object(l.b)({
						subredditId: N,
						modNote: g
					}))
				}, [N, S, g]), M = Object(a.useCallback)(() => {
					y && k(Object(m.b)(N, j.id, E, y)), S(Object(l.c)({
						subredditId: N,
						modNote: g
					}))
				}, [k, j.id, E, y, N, S, g]), B = Object(a.useCallback)(() => {
					P(), S(Object(l.j)({
						subredditId: N,
						modNote: g
					}))
				}, [N, S, g, P]), A = Object(o.e)(e => Object(d.a)(e) === w), T = Object(b.a)(), L = new Intl.DateTimeFormat(T, {
					month: "short",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric"
				}).format(new Date(g.createdAt)), H = g.itemType === p.A.Note && I;
				return r.a.createElement("div", {
					className: Object(c.a)(n, _.a.metadata)
				}, g.operator && r.a.createElement(v.default, {
					className: _.a.operator,
					to: `/user/${g.operator.displayName}/`,
					onClick: C
				}, O && r.a.createElement(h.a, {
					className: _.a.userIcon,
					userName: (null === (t = g.operator) || void 0 === t ? void 0 : t.displayName) || "",
					isNSFW: !1
				}), "u/", g.operator.displayName), r.a.createElement("span", {
					className: _.a.createdDate
				}, i.fbt._("on {createdDate}", [i.fbt._param("createdDate", L)], {
					hk: "2VoP7K"
				})), H && r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(c.a)(x, _.a.deleteButton),
					onClick: B
				}, i.fbt._("Delete", null, {
					hk: "4lt26q"
				})), A && r.a.createElement(f.a, {
					actionText: i.fbt._("Yes, Delete", null, {
						hk: "3kB0Hd"
					}),
					headerText: i.fbt._("Delete this note?", null, {
						hk: "bGAxq"
					}),
					modalText: i.fbt._("This mod note will be permanently deleted.", null, {
						hk: "DFQi2"
					}),
					onConfirm: M,
					onCancel: U,
					toggleModal: P,
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				s = n("./src/reddit/models/ModUserNotes/index.ts"),
				i = n("./src/redditGQL/types.ts"),
				c = n("./src/reddit/components/CCM/ModUserNoteWithIcon/NoteLabeledText/index.m.less"),
				d = n.n(c);
			t.a = e => {
				let {
					modNote: t
				} = e;
				const n = "label" in t && t.label || s.c,
					a = "note" in t ? t.note : void 0,
					c = Object(o.b)(s.e[n || "bot"], {
						isFilled: !0
					}),
					l = ![s.c, i.H.BotBan, i.H.PermaBan].includes(n);
				return a ? r.a.createElement(r.a.Fragment, null, l && r.a.createElement("div", {
					className: d.a.header
				}, r.a.createElement(c, {
					className: d.a.labelIcon,
					style: {
						color: s.d[n]
					}
				}), r.a.createElement("span", {
					className: d.a.label
				}, s.f[n]())), a && r.a.createElement("div", {
					className: d.a.note
				}, a)) : null
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
				placeholder: "_3-sGeUnsIgXQm_508XtRHY",
				noItems: "_1osKgUHuMPNNsYRF1Bd0_I",
				scrollGradient: "_72ObW2wBjbXoTSi59wOzl",
				isNightMode: "_2MqCtsP8hs56kDig68mUp4",
				visible: "_24AkSaJPPcm6Slwa5ld221"
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
				return a
			}));
			var a, r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(a || (a = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: n,
					className: r,
					sendEvent: s,
					contextId: i,
					priority: c,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: p,
					onClick: f,
					onAddUserToQuickReplyList: h,
					children: v,
					style: x
				} = e;
				return o.a.createElement(d.t, {
					onClick: e => {
						if (f && f(e), t(), p === a.awardNotification) return h();
						s(Object(l.b)(i))
					},
					className: r,
					text: n,
					priority: c,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					style: x
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(s.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: a
				} = t;
				return {
					onStartChat: () => {
						e(Object(i.b)(a, n))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(i.a)(a))
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
			var a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
						style: a,
						caretPosition: r,
						caretColor: s,
						onClick: i,
						hideCaret: d
					} = e;
					return o.a.createElement("div", {
						onClick: i,
						className: Object(c.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === r,
							[f.a.caretOnLeft]: "left" === r,
							[f.a.caretOnRight]: "right" === r,
							[f.a.caretOnBottom]: "bottom" === r,
							[f.a.hideCaret]: d
						}),
						style: {
							...a,
							"--contentTooltip-caretColor": s && s[r] ? s[r] : Object(m.a)(e).body
						}
					}, t)
				}),
				g = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(b.b)(n)(e)
					}
				}),
				C = Object(u.a)(_, [a.a.Click, a.a.Keydown]),
				I = Object(s.b)(g);
			class O extends o.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						l.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const a = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let r = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									r = window.innerHeight - a.bottom > t.height;
									break;
								case "left":
									r = a.left > t.width;
									break;
								case "right":
									r = a.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									r = a.top > t.height
							}
							this.setState({
								position: r ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
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
						caretPosition: a
					} = this.getPositions(e);
					return o.a.createElement(C, h({}, this.props, {
						caretPosition: a,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = I(O)
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
			t.a = r
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/ImageInput/index.tsx"),
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
					className: a,
					isProfileCard: l,
					isLoading: m,
					imageUrl: b,
					onFileSelected: p
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(u.a.Container, a)
				}, r.a.createElement("label", {
					className: u.a.HitBox
				}, r.a.createElement("span", {
					className: u.a.ImageContainer,
					role: "presentation"
				}, b ? r.a.createElement("img", {
					alt: t,
					className: u.a.Image,
					src: b
				}) : n), r.a.createElement(s.a, {
					className: u.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(d.b)();
						p(e, t)
					},
					isPending: m
				}), !m && r.a.createElement("div", {
					className: Object(o.a)(u.a.EditButton, {
						[u.a.profileCard]: l
					})
				}, r.a.createElement(c.a, {
					name: "add_media",
					className: u.a.EditIcon
				}))), m && r.a.createElement(i.a, {
					className: u.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/snoovatarModal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/helpers/author.ts"),
				l = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/selectors/commentSelector.ts"),
				m = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				p = n("./src/reddit/selectors/modUserNotes.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/selectors/userFlair.ts"),
				I = n("./src/reddit/selectors/userPrefs.ts"),
				O = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/config.ts"),
				E = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = n("./src/lib/lessComponent.tsx"),
				w = n("./src/lib/prettyPrintNumber/index.ts"),
				S = n("./src/reddit/components/ChatButton/index.tsx"),
				P = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				U = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				M = n("./src/reddit/components/SubscribeButton/index.tsx"),
				B = n("./src/reddit/components/UserIcon/index.tsx"),
				A = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/endpoints/profile/info.ts"),
				L = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				H = n("./src/reddit/icons/fonts/Info/index.tsx"),
				D = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				F = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				R = n("./src/reddit/models/Gold/Award.ts"),
				W = n("./src/reddit/models/User/index.ts"),
				z = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				K = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				Z = n("./src/reddit/actions/inContextModeration.ts"),
				J = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/actions/subredditModeration/ban.ts"),
				q = n("./src/reddit/constants/modals.ts"),
				V = n("./src/reddit/components/Hovercards/helpers.ts"),
				X = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				$ = n("./src/reddit/selectors/bannedUser.ts"),
				ee = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ae = Object(s.c)({
				hasModMailPermissions: Object(b.b)(Y.c.mail),
				isUserBanned: (e, t) => !!Object($.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(g.Cb)(e, {
					userName: t.username
				})
			});
			class re extends r.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: a,
						onUnbanUser: o,
						sendEvent: s,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, a ? r.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							o(this.props.user.id), s(L.e(t))
						}
					}, r.a.createElement(X.a, {
						name: "ban",
						isFilled: !0,
						className: te.a.icon
					}), ne._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							i(), s(L.a(t))
						}
					}, r.a.createElement(X.a, {
						name: "ban",
						className: te.a.icon
					}), ne._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							c(), s(L.d(t))
						}
					}, r.a.createElement(X.a, {
						name: "mod_mute",
						className: te.a.icon
					}), ne._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var oe = Object(o.b)(ae, (e, t) => {
					let {
						username: n,
						subredditId: a,
						contextId: r
					} = t;
					return {
						onUnbanUser: t => e(Object(Q.e)(a, t)),
						requestUserBanInfo: () => e(Object(Q.c)(a, {
							username: n
						})),
						toggleBanModal: () => {
							e(Object(Z.c)({
								username: n,
								subredditId: a,
								contextId: r
							})), e(Object(Q.a)(a, n))
						},
						toggleMuteModal: () => {
							e(Object(Z.d)({
								username: n,
								subredditId: a,
								contextId: r
							})), e(Object(J.i)(q.a.MUTE_USER))
						}
					}
				})(re),
				se = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ce = Object(o.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(se.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(V.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(L.c(e.contextId))
					}
				}, r.a.createElement(X.a, {
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const me = y.a.wrapped(B.a, "UserIcon", le.a),
				be = y.a.wrapped(M.a, "SubscribeButton", le.a),
				pe = y.a.wrapped(S.b, "ChatButton", le.a),
				fe = y.a.wrapped(F.a, "PremiumIcon", le.a),
				he = y.a.wrapped(E.a, "UserNameLink", le.a),
				ve = y.a.div("UserNameMetaData", le.a),
				xe = y.a.div("MetaDataItem", le.a),
				_e = y.a.div("Bullet", le.a),
				ge = y.a.div("UserNameContainer", le.a),
				Ce = y.a.div("KarmaGrid", le.a),
				Ie = y.a.div("GenericKarma", le.a),
				Oe = y.a.a("InfoLink", le.a),
				Ne = y.a.div("KarmaCount", le.a),
				ke = y.a.div("GenericKarmaLabel", le.a),
				je = y.a.div("BannerImage", le.a),
				Ee = y.a.div("UserContainer", le.a),
				ye = y.a.div("BottomSpacer", le.a),
				we = y.a.div("Container", le.a),
				Se = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(he, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && r.a.createElement(D.a, {
					className: le.a.adminIcon,
					title: k.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(E.a, {
					to: "/premium"
				}, r.a.createElement(fe, null))), r.a.createElement(ve, null, r.a.createElement(xe, null, `u/${e.userName}`, r.a.createElement(_e, null, "•")), r.a.createElement(xe, null, (e.user.createdUtc || e.user.created) && r.a.createElement(z.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Pe = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...T.a,
						...t
					};
					return r.a.createElement(Ce, null, r.a.createElement(Ie, null, r.a.createElement(Ne, null, Object(w.b)(n.fromPosts)), r.a.createElement(ke, null, k.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [k.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(Ie, null, r.a.createElement(Ne, null, Object(w.b)(n.fromComments)), r.a.createElement(ke, null, k.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [k.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), r.a.createElement(Ie, null, r.a.createElement(Ne, null, Object(w.b)(n.fromAwardsReceived)), r.a.createElement(ke, null, k.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [k.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), r.a.createElement(Oe, {
						href: R.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(H.a, {
						className: le.a.infoIcon
					})))), r.a.createElement(Ie, null, r.a.createElement(Ne, null, Object(w.b)(n.fromAwardsGiven)), r.a.createElement(ke, null, k.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [k.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), r.a.createElement(Oe, {
						href: R.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(H.a, {
						className: le.a.infoIcon
					})))))
				},
				Ue = e => {
					var t, n;
					const {
						className: a,
						contextId: o,
						currentUser: s,
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
						userFlair: g,
						isCurrentUserBanned: C,
						userProfileStyles: I,
						acceptChats: O,
						isCommentAuthorBlocked: N
					} = e;
					if (!_) return r.a.createElement(we, {
						style: f
					});
					const E = !!s && Object(W.e)(s) === x,
						y = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						w = _.accountIcon || `${j.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						U = null == u ? void 0 : u.access,
						M = (null == g ? void 0 : g.templateIds) && (null === (t = null == g ? void 0 : g.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						B = null === (n = null == g ? void 0 : g.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: T
						} = _,
						H = !!_.snoovatarFullBodyAsset,
						D = _.isNSFW && i;
					let F;
					return F = H ? !D && I && I.bannerBackgroundImage || void 0 : D ? `${j.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(we, {
						className: a,
						id: c,
						style: f
					}, !H && F && r.a.createElement(je, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), r.a.createElement(Ee, null, H ? r.a.createElement(K.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: _.isEmployee,
						isGold: _.isGold,
						isNSFW: _.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: _.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: _.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(ge, null, r.a.createElement(me, {
						iconUrl: w,
						isNSFW: _.isNSFW,
						userName: x
					}), r.a.createElement(Se, {
						title: null == b ? void 0 : b.title,
						user: _,
						userName: x
					})), r.a.createElement(Pe, {
						user: _
					}), T && r.a.createElement(G.a, {
						recentAwardings: T,
						topAwardIcon: v,
						username: x
					}), d && !E && !C && O && !N && r.a.createElement(pe, {
						contextId: o,
						priority: A.c.Secondary,
						userId: _.id,
						text: k.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), _.hasUserProfile && !C && !N && !E && _.enableFollowers && r.a.createElement(be, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(L.h)(e ? "unfollow" : "follow", o),
						isFullWidth: !0,
						small: !0
					})), U && o && !E && h && r.a.createElement(oe, {
						contextId: o,
						subredditId: h,
						sendEvent: p,
						username: x
					}), S && o && M && B && h && r.a.createElement(ce, {
						contextId: o,
						subredditId: h,
						sendEvent: p,
						username: x
					}), r.a.createElement(P.i, {
						contextId: o,
						subredditId: h,
						user: _
					}), !(U || d) && r.a.createElement(ye, null))
				},
				Me = Object(U.a)(Ue),
				Be = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Me, ue({
						isOpen: t
					}, e))
				};
			Be.WrappedComponent = Ue;
			var Ae = Be;
			const Te = Object(s.c)({
					activeTooltipId: _.a,
					currentUser: g.m,
					isLoggedIn: g.S,
					hideNSFWPref: g.H,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(b.n)(e, {
							subredditId: n
						}) : void 0
					},
					prefersReducedAnimations: I.d,
					profile: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(h.k)(e, {
							profileName: n
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(m.e)(e, {
							userName: n,
							minSize: 32
						})
					},
					user: g.Cb,
					userFlair: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(C.d)(e, {
							subredditId: n
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(x.p)(t) && Object(x.jb)(e, t),
					userProfileStyles: (e, t) => Object(v.m)(e, Object(h.o)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(h.i)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						const a = Object(O.e)(e),
							r = n || a && Object(x.I)(e, a.name);
						return !!r && Object(b.i)(e, r)
					},
					trophyCase: (e, t) => Object(h.t)(e, Object(h.o)(e, t.userName)),
					isNightMode: g.fb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(l.a)(t.contextId) ? Object(f.G)(e, {
							postId: t.contextId
						}) : Object(u.c)(e, {
							commentId: t.contextId
						});
						return Object(p.b)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(x.kb)(e, {
							identifier: {
								name: n,
								type: "profile"
							}
						})
					}
				}),
				Le = Object(o.b)(Te, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Le(e => e.isModWithUserNotesPermissions ? r.a.createElement(N.b, {
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
			}) : Object(d.a)(e.userName) ? null : r.a.createElement(Ae, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/actions/profile/index.ts"),
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
				g = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = n("./src/reddit/constants/keycodes.ts"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/controls/Checkbox/index.tsx"),
				N = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/reddit/models/ModUserNotes/index.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				w = n.n(y),
				S = n("./src/redditGQL/types.ts");
			const P = Object(h.a)(g.b),
				U = ["NONE", S.H.AbuseWarning, S.H.SpamWarning, S.H.SpamWatch, S.H.SolidContributor, S.H.HelpfulUser],
				M = {
					...j.f,
					NONE: () => f.fbt._("None", null, {
						hk: "2r9MPM"
					})
				};
			var B = e => {
					const {
						className: t,
						filter: n,
						subredditId: s,
						userId: c,
						thingId: l
					} = e, [m, b] = Object(a.useState)(), [p, h] = Object(a.useState)(!0), [g, y] = Object(a.useState)(""), [S, B] = Object(a.useState)(!1), A = Object(o.e)(E.fb);
					Object(a.useEffect)(() => {
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
					}, []), Object(a.useEffect)(() => {
						if (Object(x.a)()) {
							const e = Object(_.B)("modnote-draft");
							y(e && e[c] ? e[c] : "")
						}
					}, [c]);
					const T = Object(o.d)(),
						L = Object(a.useCallback)(e => {
							y(e), Object(_.Eb)("modnote-draft", {
								[c]: e
							})
						}, [y, c]),
						H = Object(a.useCallback)(e => {
							e.stopPropagation(), T(Object(i.a)(s, c, g, n, m, p ? l : void 0)), b(void 0), L("")
						}, [T, s, L, g, c, m, p, l, n]),
						D = Object(a.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== C.a.Enter || e.shiftKey || (e.preventDefault(), H(e))
						}, [H]),
						F = m ? M[m]() : M.NONE(),
						R = m ? m && Object(k.b)(j.e[m], {
							isFilled: !0
						}) : void 0,
						W = m && j.d[m];
					return r.a.createElement("div", {
						className: Object(d.a)(t)
					}, r.a.createElement("div", {
						className: w.a.meta
					}, r.a.createElement("span", {
						className: w.a.labelContainer,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, r.a.createElement("label", {
						className: w.a.labelText,
						htmlFor: "label"
					}, f.fbt._("Label", null, {
						hk: "39tjG1"
					})), r.a.createElement(N.b, {
						id: "labelSelector",
						className: w.a.dropdown,
						displayText: F,
						buttonIcon: R ? r.a.createElement(R, {
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
							const t = M[e](),
								n = "NONE" === e ? void 0 : Object(k.b)(j.e[e], {
									isFilled: !0
								}),
								a = j.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !m : m === e,
								...n && {
									icon: r.a.createElement(n, {
										className: w.a.labelIcon,
										style: {
											color: a,
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
					})), r.a.createElement("span", {
						className: w.a.checkboxContainer
					}, r.a.createElement(O.a, {
						className: w.a.checkbox,
						isCheckboxSelected: p,
						toggleCheckbox: () => h(!p)
					}), l && Object(u.a)(l) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), r.a.createElement("span", {
						className: w.a.textareaContainer
					}, r.a.createElement("textarea", {
						autoFocus: !0,
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(d.a)(w.a.textarea, {
							[w.a.isNightMode]: A
						}),
						onChange: e => L(e.target.value),
						onKeyDown: D,
						onClick: e => e.stopPropagation(),
						placeholder: f.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: g,
						maxLength: 250
					}), r.a.createElement(P, {
						isOpen: S
					}, r.a.createElement("div", {
						className: w.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), r.a.createElement("div", {
						className: w.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), r.a.createElement(I.t, {
						className: Object(d.a)(w.a.sendButton, {
							[w.a.isNightMode]: A,
							[w.a.isDisabled]: 0 === g.length
						}),
						disabled: 0 === g.length,
						Icon: () => r.a.createElement(k.a, {
							className: Object(d.a)(w.a.iconSend, {
								[w.a.isDisabled]: 0 === g.length
							}),
							name: v.a.send,
							isFilled: !0
						}),
						size: I.d.XS,
						iconPosition: I.h.C,
						onClick: H,
						onMouseEnter: () => B(!0),
						onMouseLeave: () => B(!1),
						style: 0 === g.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				A = n("./src/reddit/selectors/modUserNotes.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				L = n("./src/reddit/components/SubredditIcon/index.tsx"),
				H = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				D = n.n(H);
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
						userId: s,
						onChangeSubredditId: i,
						filter: c,
						onChangeFilter: l,
						onChangeView: u
					} = e, p = Object(b.a)(), h = Object(o.e)(e => Object(T.s)(e, void 0)), v = Object(o.e)(e => Object(A.a)(e, s, n)), x = h.find(e => e.id === n), _ = W[c](), g = Object(k.b)("back_fill"), C = Object(a.useCallback)(() => p(Object(m.m)({
						userId: s,
						subredditId: n
					})), [s, n, p]), I = Object(a.useCallback)(e => {
						i(e.value), p(Object(m.t)({
							userId: s,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [s, n, p, i]), O = Object(a.useCallback)(() => p(Object(m.n)({
						userId: s,
						subredditId: n
					})), [s, n, p]), j = Object(a.useCallback)(e => {
						l(e.value), p(Object(m.u)({
							userId: s,
							subredditId: n,
							filteredType: e.value
						}))
					}, [s, n, p, l]);
					return v ? r.a.createElement("div", {
						className: Object(d.a)(t, D.a.wrapper),
						role: "navigation"
					}, r.a.createElement("div", {
						className: D.a.backWrapper
					}, r.a.createElement("button", {
						"aria-label": f.fbt._("Back", null, {
							hk: "3ojpRo"
						}),
						className: D.a.backButton,
						onClick: u
					}, r.a.createElement(g, null))), x && h.length && r.a.createElement("div", {
						className: D.a.subredditsWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, r.a.createElement(N.b, {
						id: "subredditFilter",
						className: D.a.subreddits,
						buttonClassName: D.a.dropdownButton,
						buttonIcon: r.a.createElement(L.b, {
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
							icon: r.a.createElement(L.b, {
								className: D.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: C,
						onSelect: I,
						showSelectedCheckmark: !0
					})), r.a.createElement("div", {
						className: D.a.typesWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, r.a.createElement(N.b, {
						id: "typeFilter",
						className: D.a.types,
						buttonClassName: D.a.dropdownButton,
						menuItemsClassName: D.a.menuItems,
						menuOptionClassName: D.a.menuOption,
						displayText: _,
						options: F.map(e => ({
							displayText: R[e](),
							icon: v[S.z.All] ? r.a.createElement("span", {
								className: D.a.typeCountIconInDropdown
							}, r.a.createElement("span", {
								className: D.a.typeCountIconInDropdownInner
							}, v[e])) : void 0,
							value: e,
							isSelected: e === c
						})),
						onOpen: O,
						onSelect: j,
						showSelectedCheckmark: !0
					}))) : null
				},
				G = n("./src/lib/fastdom/index.ts"),
				K = n("./src/lib/constants/colors.ts"),
				Z = n("./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less"),
				J = n.n(Z),
				Q = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less"),
				q = n.n(Q);
			const V = {
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
				X = {
					[S.H.BotBan]: "bot",
					[S.H.PermaBan]: "block"
				};
			var Y = e => {
					const {
						className: t,
						actionType: n,
						label: a
					} = e, o = n ? V[n] || "mod" : a && X[a] || "user_note";
					if (!o) return null;
					const s = Object(k.b)(o);
					return r.a.createElement(s, {
						className: Object(d.a)(t, q.a.icon)
					})
				},
				$ = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.tsx"),
				ee = n("./src/reddit/components/CCM/ModUserNoteWithIcon/LinkIcon/index.tsx"),
				te = n("./src/reddit/components/CCM/ModUserNoteWithIcon/NoteLabeledText/index.tsx"),
				ne = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				ae = n.n(ne);
			var re = e => {
					let {
						className: t,
						modNote: n,
						onClickLinked: a
					} = e;
					var s, i;
					const c = Object(o.e)(E.fb),
						l = "label" in n && n.label || j.c,
						u = "note" in n ? n.note : void 0,
						m = n.postInfo ? null === (s = n.postInfo) || void 0 === s ? void 0 : s.permalink : n.commentInfo ? null === (i = n.commentInfo) || void 0 === i ? void 0 : i.permalink : void 0;
					return u ? r.a.createElement("div", {
						className: Object(d.a)(t, ae.a.modNote),
						onClick: e => e.stopPropagation(),
						style: l ? {
							backgroundColor: c ? j.b[l] : j.a[l]
						} : {}
					}, r.a.createElement(te.a, {
						modNote: n
					}), m && r.a.createElement(ee.a, {
						className: ae.a.link,
						linkUrl: m,
						onClick: a
					})) : null
				},
				oe = n("./src/lib/constants/index.ts"),
				se = n("./src/lib/prettyPrintNumber/index.ts"),
				ie = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				ce = n.n(ie);
			var de = e => {
					let {
						className: t,
						postInfo: n,
						commentInfo: a,
						onClick: o
					} = e;
					var s, i, c, l;
					if (!n && !a) return null;
					if (a && "Comment" !== a.__typename) return r.a.createElement("div", {
						className: Object(d.a)(t, ce.a.preview)
					}, r.a.createElement("div", {
						className: ce.a.content
					}, r.a.createElement("h6", {
						className: ce.a.title
					}, oe.Qb)));
					const u = n ? n.permalink : a ? a.permalink : void 0,
						m = (null == n ? void 0 : n.title) || (null === (i = null === (s = a) || void 0 === s ? void 0 : s.content) || void 0 === i ? void 0 : i.markdown),
						b = n ? n.score || 0 : a && a.score || 0,
						p = (null == n ? void 0 : n.commentCount) || 0;
					return r.a.createElement("a", {
						className: Object(d.a)(t, ce.a.preview),
						href: u || "",
						onClick: o,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement("div", {
						className: ce.a.content
					}, m && r.a.createElement("h6", {
						className: ce.a.title
					}, m), r.a.createElement("div", {
						className: ce.a.meta
					}, r.a.createElement("span", null, f.fbt._({
						"*": "{pointsCount} Points",
						_1: "{pointsCount} Point"
					}, [f.fbt._param("pointsCount", Object(se.b)(b)), f.fbt._plural(b)], {
						hk: "47CFCp"
					})), !!p && r.a.createElement(r.a.Fragment, null, " · ", r.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(p, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (c = null == n ? void 0 : n.thumbnail) || void 0 === c ? void 0 : c.url) && r.a.createElement("div", {
						className: ce.a.thumbnail
					}, r.a.createElement("img", {
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
					actionType: a
				} = n, {
					label: o
				} = n, s = a ? be[a] ? be[a](n) : null : o && pe[o] ? pe[o]() : null, i = a && me[a] ? me[a](n) : null;
				return r.a.createElement(r.a.Fragment, null, i ? r.a.createElement("h4", {
					className: Object(d.a)(t, ue.a.subTitle)
				}, i) : null, s ? r.a.createElement("h3", {
					className: Object(d.a)(t, ue.a.title)
				}, s) : null)
			};
			var he = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, a = Object(o.e)(E.fb), s = Object(b.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return r.a.createElement("div", {
						className: Object(d.a)(J.a.wrapper, e.className)
					}, r.a.createElement("div", {
						key: "aa",
						className: J.a.iconWrapper,
						style: {
							background: a ? K.a.orca700 : K.a.narwhal100
						}
					}, r.a.createElement(Y, {
						className: J.a.icon,
						actionType: t.actionType,
						label: t.label
					})), r.a.createElement("div", {
						className: J.a.content,
						key: "ba"
					}, r.a.createElement(fe, {
						modNote: t,
						className: J.a.title
					}), r.a.createElement(re, {
						className: J.a.note,
						modNote: t,
						onClickLinked: () => s(Object(m.d)({
							subredditId: n,
							modNote: t
						}))
					}), r.a.createElement($.a, {
						className: J.a.metaData,
						deleteClassName: J.a.metaDataDelete,
						shouldShowDelete: !0,
						subredditId: n,
						modNote: t,
						onClickUsername: () => s(Object(m.q)({
							subredditId: n,
							modNote: t
						}))
					}), i && r.a.createElement(de, {
						className: J.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => s(Object(m.h)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				ve = n("./src/reddit/hooks/useScrollGradient.ts"),
				xe = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				_e = n.n(xe);
			var ge = e => {
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
							className: a,
							subredditId: s,
							userId: i,
							filter: c
						} = e,
						l = Object(o.e)(e => Object(E.Bb)(e, {
							userId: i
						})),
						u = Object(o.e)(e => Object(T.Y)(e, {
							subredditId: s
						})),
						m = t[c],
						b = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", m)], {
							hk: "1NhVUh"
						}),
						p = u && l ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", l.username), f.fbt._param("subreddit name", u.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(k.b)(n[c]);
					return r.a.createElement("div", {
						className: Object(d.a)(a, _e.a.container)
					}, r.a.createElement(h, {
						className: _e.a.icon
					}), r.a.createElement("p", {
						className: _e.a.mainLine
					}, `${b} ${p}`), c === S.z.Note && r.a.createElement("p", {
						className: _e.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				Ce = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				Ie = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				Oe = n.n(Ie),
				Ne = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var ke = e => r.a.createElement("div", {
					className: Object(d.a)(Oe.a.wrapper, e.className)
				}, r.a.createElement("div", {
					key: "d",
					className: Object(d.a)(Oe.a.icon, Object(Ne.a)(e))
				}), r.a.createElement("div", {
					key: "e",
					className: Oe.a.content
				}, r.a.createElement("div", {
					key: "ea",
					className: Object(d.a)(Oe.a.title, Object(Ne.b)(e))
				}), r.a.createElement("div", {
					key: "eb",
					className: Object(d.a)(Oe.a.body, Object(Ne.b)(e))
				}), r.a.createElement("div", {
					key: "ec",
					className: Object(d.a)(Oe.a.meta, Object(Ne.b)(e))
				}))),
				je = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				Ee = n.n(je);
			var ye = e => {
					const {
						className: t,
						isLoading: n,
						apiError: a,
						onTryAgain: o
					} = e;
					return r.a.createElement("div", {
						className: Object(d.a)(t, Ee.a.placeholder)
					}, r.a.createElement(ke, {
						className: Ee.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(ke, {
						className: Ee.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(ke, {
						className: Ee.a.placeholderLine,
						isLoading: n
					}), !!a && r.a.createElement(Ce.a, {
						apiError: a,
						onTryAgain: o
					}))
				},
				we = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				Se = n.n(we);
			var Pe = e => {
					const {
						className: t,
						subredditId: n,
						userId: s,
						filter: c
					} = e, l = Object(o.d)(), u = Object(o.e)(E.fb), [m, b] = Object(a.useState)(!0);
					Object(a.useEffect)(() => {
						setTimeout(() => b(!1), 0)
					}, []);
					const {
						container: p,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(ve.b)(!1, ve.a.Top), v = Object(o.e)(e => Object(A.f)(e, {
						subredditId: n,
						userId: s,
						filter: c
					})), x = Object(o.e)(e => Object(A.d)(e, {
						subredditId: n,
						userId: s,
						filter: c
					})), _ = Object(o.e)(e => Object(A.e)(e, {
						subredditId: n,
						userId: s,
						filter: c
					})), g = Object(o.e)(A.c), C = !!v.length, I = !!x && !_ && !g, O = Object(a.useCallback)(e => l(Object(i.f)({
						subredditId: n,
						userId: s,
						filter: c,
						before: e
					})), [l, n, s, c]), N = Object(a.useCallback)(() => {
						G.a.read(() => {
							if (null == p ? void 0 : p.current) {
								h();
								const e = p.current,
									{
										scrollTop: t,
										offsetHeight: n,
										scrollHeight: a
									} = e;
								1.25 * n - a >= t && I && !_ && O(x)
							}
						})
					}, [I, _, x, O, h, p]);
					return r.a.createElement(r.a.Fragment, null, C && r.a.createElement("div", {
						className: Object(d.a)(t, Se.a.wrapper)
					}, r.a.createElement("div", {
						className: Object(d.a)(Se.a.scrollGradient, {
							[Se.a.visible]: I || _ || f,
							[Se.a.isNightMode]: u
						})
					}), r.a.createElement("div", {
						className: Se.a.list,
						ref: p,
						onScroll: N
					}, v.map(e => r.a.createElement(he, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (_ || g) && r.a.createElement(ye, {
						isLoading: _,
						apiError: g,
						onTryAgain: () => {
							x && O(x)
						}
					}))), !C && !_ && !m && r.a.createElement(ge, {
						className: Object(d.a)(t, Se.a.wrapper, Se.a.noItems),
						subredditId: n,
						userId: s,
						filter: c
					}), !C && (_ || m) && r.a.createElement("div", {
						className: Object(d.a)(t, Se.a.wrapper)
					}))
				},
				Ue = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Me = n.n(Ue);
			const {
				fbt: Be
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ae = e => {
					const t = Object(o.d)(),
						{
							className: n,
							subredditId: s,
							userId: c,
							onChangeView: f,
							defaultTypeFilter: h,
							thingId: v
						} = e,
						[x, _] = Object(a.useState)(h || S.z.All),
						[g, C] = Object(a.useState)(s),
						I = Object(o.e)(E.fb),
						O = Object(b.a)(),
						N = e => {
							t(Object(i.f)({
								subredditId: g,
								userId: c,
								filter: x,
								...e
							}))
						},
						k = x === S.z.All || x === S.z.Note;
					Object(a.useEffect)(() => {
						N({
							forceLoad: !0
						}), t(Object(p.q)())
					}, []);
					const j = {
						subredditId: s,
						userId: c,
						...v && Object(l.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(u.a)(v) ? {
							postId: v
						} : null
					};
					return Object(a.useEffect)(() => (O(Object(m.y)(j)), () => O(Object(m.s)(j))), []), r.a.createElement("div", {
						className: Object(d.a)(n, Me.a.wrapper, {
							[Me.a.isNightMode]: I
						}),
						onClick: e => e.stopPropagation()
					}, r.a.createElement(z, {
						className: Me.a.filters,
						subredditId: g,
						userId: c,
						onChangeSubredditId: e => {
							C(e), N({
								subredditId: e,
								forceLoad: !0
							})
						},
						filter: x,
						onChangeFilter: e => {
							_(e), N({
								filter: e,
								forceLoad: !0
							})
						},
						onChangeView: f
					}), r.a.createElement(Pe, {
						className: Me.a.list,
						subredditId: g,
						userId: c,
						filter: x
					}), k && r.a.createElement(B, {
						className: Me.a.form,
						filter: x,
						subredditId: s,
						userId: c,
						thingId: v
					}))
				},
				Te = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Le = n("./src/config.ts"),
				He = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				De = n("./src/lib/opener/index.ts"),
				Fe = n("./src/reddit/helpers/author.ts"),
				Re = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				We = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				ze = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				Ge = n.n(ze);
			var Ke = e => r.a.createElement("img", {
					className: Object(d.a)(e.className, Ge.a.anonymousSnoovatar),
					src: `${Le.a.assetPath}/img/anonymous_snoo.png`
				}),
				Ze = n("./src/reddit/components/ChatButton/index.tsx"),
				Je = n("./src/reddit/components/HumanDate/index.tsx"),
				Qe = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				qe = n("./src/reddit/components/ModNoteItem/index.tsx"),
				Ve = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				Xe = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Ye = n("./src/reddit/components/UserIcon/index.tsx"),
				$e = n("./src/reddit/controls/InternalLink/index.tsx"),
				et = n("./src/reddit/endpoints/profile/info.ts"),
				tt = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				nt = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				at = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				rt = n("./src/reddit/models/User/index.ts"),
				ot = n("./src/reddit/selectors/gold/awardIcon.ts"),
				st = n("./src/reddit/constants/modals.ts"),
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
				gt = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less"),
				Ct = n.n(gt);
			const {
				fbt: It
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ot;
			! function(e) {
				e.ModLog = "ModLog", e.Ban = "Ban", e.Unban = "Unban", e.AddNote = "AddNote", e.Mute = "Mute", e.Unmute = "Unmute", e.Flair = "Flair", e.Modmail = "Modmail"
			}(Ot || (Ot = {}));
			var Nt = e => {
					var t, n;
					const s = Object(b.a)(),
						i = Object(o.d)(),
						{
							className: c,
							contextId: d,
							subredditId: l,
							username: u,
							onChangeView: p
						} = e,
						f = Object(o.e)(e => l ? Object(xt.d)(e, {
							subredditId: l
						}) : void 0),
						h = !!(null == f ? void 0 : f.templateIds) && (null === (t = null == f ? void 0 : f.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						v = !!(null === (n = null == f ? void 0 : f.displaySettings) || void 0 === n ? void 0 : n.isEnabled),
						x = Object(o.e)(t => Object(ft.b)(bt.c.access)(t, e)),
						_ = Object(o.e)(t => Object(ft.b)(bt.c.mail)(t, e)),
						g = Object(o.e)(t => Object(ft.b)(bt.c.flair)(t, e)),
						C = Object(o.e)(e => Object(E.Cb)(e, {
							userName: u
						})),
						I = Object(o.e)(e => !!Object(pt.b)(e, {
							subredditId: l,
							username: u
						})),
						O = Object(o.e)(e => Object(ht.a)(e, l, C.id)),
						N = Object(o.e)(e => Object(vt.g)(e, l, C.id)),
						j = Object(o.e)(E.m),
						y = !!j && Object(rt.e)(j) === u,
						w = Object(o.e)(e => l ? e.subreddits.models[l] : null),
						P = Object(o.e)(e => {
							if (d) return Object(A.g)(e, C.id, l, S.z.All)
						}),
						U = Object(a.useCallback)(() => {
							i(Object(dt.g)(l))
						}, [i, l]),
						M = Object(a.useCallback)(() => {
							i(Object(lt.c)(l, {
								username: u
							}))
						}, [i, l, u]),
						B = Object(a.useCallback)(() => {
							i(Object(lt.e)(l, C.id)), s(Re.e(d))
						}, [C.id, l, i, d, s]),
						T = Object(a.useCallback)(() => {
							i(Object(it.c)({
								username: u,
								subredditId: l,
								contextId: d
							})), i(Object(lt.a)(l, u)), s(Re.a(d))
						}, [s, i, u, l, d]),
						L = Object(a.useCallback)(() => {
							i(Object(ut.b)(l))
						}, [i, l]),
						H = Object(a.useCallback)(() => {
							i(Object(it.d)({
								username: u,
								subredditId: l,
								contextId: d
							})), i(Object(ct.i)(st.a.MUTE_USER)), s(Re.d(d))
						}, [s, i, u, l, d]),
						D = Object(a.useCallback)(() => {
							i(Object(ut.d)(l, C.id)), s(Re.f(d))
						}, [s, i, C.id, l, d]),
						F = Object(a.useCallback)(() => {
							i(Object(mt.g)(l, u)), s(Re.c(d))
						}, [s, i, u, l, d]),
						R = Object(a.useCallback)(() => l && s(Object(m.l)({
							subredditId: l,
							userId: C.id
						})), [l, C, s]),
						W = Object(a.useCallback)(e => {
							e.stopPropagation(), p && p(), l && s(Object(m.k)({
								subredditId: l,
								userId: C.id
							}))
						}, [l, C, s, p]),
						z = Object(a.useCallback)(e => {
							e.stopPropagation(), p && p(S.z.Note), l && s(Object(m.a)({
								subredditId: l,
								userId: C.id
							}))
						}, [l, C, s, p]);
					if (Object(a.useEffect)(() => {
							C && (U(), L(), !C.isSuspended && M())
						}, [C]), !C) return null;
					const G = w && u ? `?toSubredditName=${w.name}&toUserName=${u}` : "",
						K = {
							[Ot.ModLog]: x,
							[Ot.Ban]: !C.isSuspended && x && !y && I,
							[Ot.Unban]: !C.isSuspended && x && !y && !I,
							[Ot.AddNote]: x,
							[Ot.Mute]: !C.isSuspended && !O && !N && !y && x && _,
							[Ot.Unmute]: !C.isSuspended && O && !N && !y && x && _,
							[Ot.Flair]: g && h && v,
							[Ot.Modmail]: _
						};
					return r.a.createElement("div", {
						className: c
					}, K[Ot.ModLog] && r.a.createElement(_t.a, {
						role: "button",
						onClick: W,
						className: Ct.a.item
					}, r.a.createElement(k.a, {
						name: "mod",
						className: Ct.a.icon
					}), It._("User Mod Log", null, {
						hk: "2PiT0s"
					}), !!P && r.a.createElement("span", {
						className: Ct.a.notesCount
					}, P)), K[Ot.AddNote] && r.a.createElement(_t.a, {
						role: "button",
						onClick: z,
						className: Ct.a.item
					}, r.a.createElement(k.a, {
						name: "user_note",
						className: Ct.a.icon
					}), It._("Add Note", null, {
						hk: "34JqdA"
					})), K[Ot.Ban] && r.a.createElement(_t.a, {
						role: "button",
						onClick: B,
						className: Ct.a.item
					}, r.a.createElement(k.a, {
						name: "unban",
						className: Ct.a.icon
					}), It._("Unban User", null, {
						hk: "1aASyW"
					})), K[Ot.Unban] && r.a.createElement(_t.a, {
						role: "button",
						onClick: T,
						className: Ct.a.item
					}, r.a.createElement(k.a, {
						name: "ban",
						className: Ct.a.icon
					}), It._("Ban User", null, {
						hk: "3OhuLx"
					})), K[Ot.Mute] && r.a.createElement(_t.a, {
						role: "button",
						onClick: H,
						className: Ct.a.item
					}, r.a.createElement(k.a, {
						name: "mod_mute",
						className: Ct.a.icon
					}), It._("Mute User", null, {
						hk: "3MCujH"
					})), K[Ot.Unmute] && r.a.createElement(_t.a, {
						role: "button",
						onClick: D,
						className: Ct.a.item
					}, r.a.createElement(k.a, {
						name: "mod_unmute",
						className: Ct.a.icon
					}), It._("Unmute User", null, {
						hk: "sBvvx"
					})), K[Ot.Flair] && r.a.createElement(_t.a, {
						role: "button",
						onClick: F,
						className: Ct.a.item
					}, r.a.createElement(k.a, {
						name: "tag",
						className: Ct.a.icon
					}), It._("Edit user flair", null, {
						hk: "4mTxM"
					})), K[Ot.Modmail] && r.a.createElement(_t.a, {
						role: "button",
						className: Ct.a.item
					}, r.a.createElement("a", {
						href: `https://mod.reddit.com/mail/create${G}`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: R,
						className: Ct.a.userActionItemInner
					}, r.a.createElement(k.a, {
						name: "mod_mail",
						className: Ct.a.icon
					}), It._("Send modmail", null, {
						hk: "ZUN0n"
					}))))
				},
				kt = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				jt = n.n(kt);
			const Et = e => {
					var t, n;
					return r.a.createElement("div", {
						className: jt.a.userDetails
					}, r.a.createElement("div", null, r.a.createElement(He.a, {
						className: jt.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && r.a.createElement(r.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isEmployee && r.a.createElement(tt.a, {
						className: jt.a.adminIcon,
						title: f.fbt._("Reddit admin", null, {
							hk: "15wBTE"
						})
					}), e.user.isGold && r.a.createElement(He.a, {
						to: "/premium"
					}, r.a.createElement(at.a, {
						className: jt.a.PremiumIcon
					})), e.user.isNSFW && r.a.createElement(nt.a, {
						className: jt.a.nsfwIcon,
						title: f.fbt._("NSFW - Adult Content", null, {
							hk: "2Iw7mN"
						})
					})), r.a.createElement("div", {
						className: jt.a.UserNameMetaData
					}, r.a.createElement("div", {
						className: jt.a.MetaDataItem
					}, `u/${e.user.username}`, r.a.createElement("div", {
						className: jt.a.Bullet
					}, "•")), r.a.createElement("div", {
						className: jt.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && r.a.createElement(r.a.Fragment, null, r.a.createElement(Je.d, {
						seconds: e.user.createdUtc || e.user.created
					}), r.a.createElement("div", {
						className: jt.a.Bullet
					}, "•"))), r.a.createElement("div", {
						className: jt.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(se.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				yt = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: a,
						prefersReducedAnimations: o
					} = e, s = {
						...et.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return r.a.createElement("div", {
						className: jt.a.userInfoGrid
					}, r.a.createElement("div", {
						className: jt.a.col
					}, r.a.createElement("span", {
						className: jt.a.count
					}, Object(se.b)(s.fromPosts)), r.a.createElement("span", {
						className: jt.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), r.a.createElement("div", {
						className: jt.a.col
					}, r.a.createElement("span", {
						className: jt.a.count
					}, Object(se.b)(s.fromComments)), r.a.createElement("span", {
						className: jt.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), r.a.createElement("div", {
						className: jt.a.col
					}, r.a.createElement("span", {
						className: jt.a.count
					}, Object(se.b)(s.fromAwardsReceived)), r.a.createElement("span", {
						className: jt.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), r.a.createElement("div", {
						className: jt.a.col
					}, r.a.createElement("span", {
						className: jt.a.count
					}, Object(se.b)(s.fromAwardsGiven)), r.a.createElement("span", {
						className: jt.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), a.length > 0 && (e => r.a.createElement("div", {
						className: jt.a.col
					}, r.a.createElement("div", {
						className: jt.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = r.a.createElement("img", {
							className: jt.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name,
							key: `${e.id}-icon`
						});
						return e.url ? r.a.createElement("a", {
							target: De.d.BLANK,
							rel: De.c,
							href: e.url,
							key: e.id
						}, n) : n
					})), r.a.createElement("span", {
						className: jt.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(a), i && ((e, t) => r.a.createElement("div", {
						className: jt.a.col
					}, r.a.createElement("div", {
						className: jt.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var a, o;
						if (!(n >= 3)) return r.a.createElement("img", {
							alt: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : null == e ? void 0 : e.name,
							key: null !== (o = null == e ? void 0 : e.description) && void 0 !== o ? o : null == e ? void 0 : e.name,
							className: jt.a.recentAwardOrTropyIcon,
							src: Object(ot.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), r.a.createElement("span", {
						className: jt.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, o))
				};
			var wt = e => {
					var t;
					const {
						contextId: n,
						currentUser: o,
						hideNSFWPref: s,
						hoverId: i,
						isLoggedIn: c,
						isNightMode: l,
						moderatorPermissions: u,
						style: p,
						userName: h,
						user: v,
						isCurrentUserBanned: x,
						userProfileStyles: _,
						acceptChats: g,
						isCommentAuthorBlocked: C,
						trophyCase: I,
						lastAuthorModNote: O,
						userIsSubscriber: N,
						subredditId: k,
						prefersReducedAnimations: j,
						onChangeView: E
					} = e, y = Object(b.a)();
					if (Object(a.useEffect)(() => {
							v && k && y(Object(m.x)({
								subredditId: k,
								userId: v.id
							}))
						}, [v, k]), !v) return r.a.createElement("div", {
						style: p
					});
					const w = !!o && Object(rt.e)(o) === h,
						S = c && !w && !x && g && !C,
						P = v.hasUserProfile && !x && !C && !w && v.enableFollowers,
						U = null == u ? void 0 : u.access,
						M = v.isNSFW && s ? `${Le.a.assetPath}/img/user-info-banner.png` : (null == _ ? void 0 : _.bannerBackgroundImage) ? _.bannerBackgroundImage : v.bannerImage,
						B = l ? "##D7DADC" : "#0079D3",
						A = l ? "#121212" : "#FFF";
					return r.a.createElement("div", {
						className: jt.a.Container,
						id: i,
						style: {
							backgroundColor: A,
							...p
						}
					}, r.a.createElement("div", {
						className: jt.a.UserContainer
					}, r.a.createElement("div", {
						className: jt.a.BannerImage,
						style: M ? {
							backgroundImage: `url('${M}')`
						} : {}
					}), r.a.createElement("div", {
						className: jt.a.snoovatarContainer
					}, v.snoovatarFullBodyAsset ? r.a.createElement(Ve.a, {
						className: jt.a.snoovatar,
						isGold: v.isGold,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						prefersReducedAnimations: !!j,
						origin: We.a.Hovercard
					}) : (null === (t = v.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? r.a.createElement("div", {
						className: jt.a.anonymousSnoovatar
					}, r.a.createElement(Ke, null)) : r.a.createElement(Ye.a, {
						className: jt.a.UserIcon,
						iconUrl: v.accountIcon,
						isNSFW: v.isNSFW,
						userName: h
					}))), r.a.createElement(Et, {
						user: v,
						userName: h
					}), r.a.createElement($e.default, {
						className: jt.a.profileLink,
						to: `/user/${h}/`
					}, f.fbt._("View full profile", null, {
						hk: "2s4Gmf"
					})), r.a.createElement("div", {
						className: jt.a.profileButtonGroup
					}, S && r.a.createElement(Ze.b, {
						className: Object(d.a)(jt.a.ChatButton, jt.a.profileButtonLeft, {
							[jt.a.onlyButton]: !P
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
						}
					}), P && r.a.createElement(Xe.a, {
						className: Object(d.a)(jt.a.SubscribeButton, jt.a.profileButtonRight, {
							[jt.a.onlyButton]: !S
						}),
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(Re.h)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0,
						style: {
							color: N ? "#D7DADC" : A,
							backgroundColor: B,
							width: 144
						}
					})), r.a.createElement(yt, {
						user: v,
						trophyCase: I || [],
						prefersReducedAnimations: !!j
					}), U && O && r.a.createElement(qe.b, {
						className: jt.a.lastModNote,
						modNote: O,
						subredditId: k || "",
						onClick: e => {
							e.stopPropagation(), E()
						},
						context: qe.a.ModIdCard
					}), n && k && h && !Object(Fe.a)(h) && r.a.createElement(Nt, {
						contextId: n,
						subredditId: k,
						username: h,
						onChangeView: E
					}), r.a.createElement(Qe.i, {
						contextId: n,
						subredditId: k,
						user: v
					}), r.a.createElement("div", {
						className: jt.a.BottomSpacer
					}))
				},
				St = n("./src/reddit/hooks/useGqlContext.ts"),
				Pt = n("./src/lib/makeGqlRequest/index.ts"),
				Ut = n("./src/redditGQL/operations/ProxyAuthor.json");

			function Mt() {
				return (Mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Bt = e => {
				const t = Object(o.d)(),
					n = Object(St.a)(),
					i = Object(Fe.a)(e.userName),
					[c, d] = Object(a.useState)(i ? void 0 : e.userName);
				Object(a.useEffect)(() => {
					i && (async () => {
						if (!e.contextId) return;
						const a = await ((e, t) => Object(Pt.a)(e, {
							...Ut,
							variables: {
								thingId: t,
								isPost: Object(u.a)(t)
							}
						}))(n(), e.contextId);
						if (a.ok) {
							const e = a.body,
								n = e.data.commentById || e.data.postInfoById,
								r = n && "DeletedComment" !== n.__typename ? n.moderationInfo.proxyAuthor : void 0;
							r && r.displayName && (d(r.displayName), t(Object(s.d)(r.displayName)))
						}
					})()
				}, [c]);
				const l = Object(o.e)(e => c && Object(E.Cb)(e, {
					userName: c
				}));
				return i ? c && l ? r.a.createElement(Tt, Mt({}, e, {
					userName: c,
					user: l
				})) : r.a.createElement("div", null) : r.a.createElement(Tt, e)
			};

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Tt = e => {
					var t, n, d;
					const l = Object(o.e)(c.c),
						u = !!(null == l ? void 0 : l.isModNotesView),
						m = null == l ? void 0 : l.modNotesFilter,
						[b, p] = Object(a.useState)(!u),
						[f, h] = Object(a.useState)(m || S.z.All),
						v = Object(o.d)();
					Object(a.useEffect)(() => {
						v(Object(s.d)(e.userName))
					}, [v, e.userName]);
					const x = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (d = e.lastAuthorModNote) || void 0 === d ? void 0 : d.user.id : e.user.id;
					Object(a.useEffect)(() => {
						e.subredditId && x && v(Object(i.d)(e.subredditId, x))
					}, [v, e.subredditId, x]);
					const _ = Object(a.useCallback)(e => {
						p(!b), h(e || S.z.All)
					}, [b, p]);
					return !b && e.subredditId && x ? r.a.createElement(Ae, {
						className: jt.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: x,
						onChangeView: _,
						defaultTypeFilter: f,
						thingId: e.contextId
					}) : r.a.createElement(wt, At({}, e, {
						onChangeView: _
					}))
				},
				Lt = {
					height: 710,
					width: 340
				},
				Ht = e => r.a.createElement(Te.a, {
					className: jt.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					tooltipSizeEstimate: Lt,
					hideCaret: !0
				}, r.a.createElement(Bt, e));
			Ht.WrappedComponent = Tt;
			t.default = Ht
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/components/Hovercards/helpers.ts"),
				s = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const u = e => {
				var t;
				return (null === (t = e.belongsTo) || void 0 === t ? void 0 : t.id) || e.subredditId
			};
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(l.g)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || c.a,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`, a = e.author || e.postOrComment.author;
					return r.a.createElement(s.a, {
						authorOrSubredditName: a,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, r.a.createElement("div", {
						id: t
					}, e.children), r.a.createElement(i.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: u(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: a,
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? r.a.createElement(r.a.Fragment, null, e.children) : null;
			t.b = Object(o.a)({
				ErrorComponent: c,
				getComponent: () => Object(s.a)(() => n.e("AuthorHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
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
		"./src/reddit/components/HumanDate/HumanDate.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/humanizeDate/index.ts"),
				s = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var a;
				const i = Object(s.a)(),
					c = {
						...n,
						locale: null !== (a = n.locale) && void 0 !== a ? a : i
					};
				return r.a.createElement(r.a.Fragment, null, Object(o.a)(t, c))
			}
		},
		"./src/reddit/components/HumanDate/HumanDateTime.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./src/lib/constants/index.ts");
			var i = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					locale: n
				} = e;
				const a = Object(i.a)(),
					c = null != n ? n : a;
				return r.a.createElement(r.a.Fragment, null, function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.DEFAULT_LOCALE;
					const n = e * s.Xb;
					return new Date(n).toLocaleString(t, {
						weekday: "short",
						month: "short",
						year: "numeric",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZoneName: "long"
					})
				}(t, c))
			}
		},
		"./src/reddit/components/HumanDate/TimeAgo.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/timeAgo/index.ts"),
				s = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var a;
				const i = Object(s.a)(),
					c = {
						...n,
						locale: null !== (a = n.locale) && void 0 !== a ? a : i
					};
				return r.a.createElement(r.a.Fragment, null, Object(o.d)(t, c))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a.a
			})), n.d(t, "a", (function() {
				return r.a
			})), n.d(t, "b", (function() {
				return o.a
			})), n.d(t, "c", (function() {
				return f
			}));
			var a = n("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				r = n("./src/reddit/components/HumanDate/HumanDate.tsx"),
				o = n("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/eventTools/index.ts");

			function m(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function b(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.DEFAULT_LOCALE;
				const r = Object(u.e)(e, t),
					o = new Date(e * l.Xb);
				let s;
				if (r === u.a.Live || n) return d.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === u.a.Future ? s = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(u.b)(e) >= 5 ? m(o, a) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, a) : r === u.a.Past && (s = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : m(o, a)), `${s} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,a)}`
			}
			var p = n("./src/reddit/hooks/useLocale.ts");
			var f = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: a,
					locale: r
				} = e;
				const o = Object(p.a)(),
					s = null != r ? r : o;
				return i.a.createElement(i.a.Fragment, null, b(t, n, a, s))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
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
			const g = e => {
				let {
					isFromMiniInbox: t,
					banner: n,
					userId: h
				} = e;
				var v, x, g, C, I, O, N, k, j, E, y, w, S, P, U, M, B;
				const A = Object(o.d)(),
					T = Object(m.a)(),
					[L, H, D] = function(e, t, n) {
						const [r, o] = Object(a.useState)(Object(u.q)(e, t) || 0), s = Object(a.useCallback)(() => {
							o(r + 1), Object(u.xb)(e, t, r + 1)
						}, []), i = Object(a.useCallback)(() => {
							n > 0 && (o(n), Object(u.xb)(e, t, n))
						}, []);
						return [r, s, i]
					}(h, n.notificationName, (null === (v = n.persistence) || void 0 === v ? void 0 : v.maxViews) || 0),
					[F, R] = Object(a.useState)(!1),
					[W, z] = Object(a.useState)(!1),
					G = Object(o.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = f(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(a.useEffect)(() => {
					H(), t ? (T(Object(l.B)(n.notificationName)), T(Object(l.C)(n.notificationName))) : (T(Object(l.p)(n.notificationName)), T(Object(l.q)(n.notificationName)))
				}, []);
				const K = null === (x = null == n ? void 0 : n.persistence) || void 0 === x ? void 0 : x.maxViews;
				if (!n || K && L > K) return null;
				const Z = !!(null == n ? void 0 : n.primaryCta),
					J = !!(null == n ? void 0 : n.secondaryCta),
					Q = !!(null == n ? void 0 : n.titleImage),
					q = !!(null == n ? void 0 : n.thumbnailImageUrl),
					V = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (D(), A(Object(c.a)(n.notificationName)))
					},
					X = {
						backgroundColor: F ? null === (g = null == n ? void 0 : n.primaryCta) || void 0 === g ? void 0 : g.colors.hoverHex : null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.backgroundHex,
						color: null === (I = null == n ? void 0 : n.primaryCta) || void 0 === I ? void 0 : I.text.colorText,
						borderColor: null === (O = null == n ? void 0 : n.primaryCta) || void 0 === O ? void 0 : O.colors.borderHex
					},
					Y = {
						backgroundColor: W ? null === (N = null == n ? void 0 : n.secondaryCta) || void 0 === N ? void 0 : N.colors.hoverHex : null === (k = null == n ? void 0 : n.secondaryCta) || void 0 === k ? void 0 : k.colors.backgroundHex,
						color: null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.text.colorText,
						borderColor: null === (E = null == n ? void 0 : n.secondaryCta) || void 0 === E ? void 0 : E.colors.borderHex
					};
				return G ? null : r.a.createElement("div", {
					className: _.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), V(), T(t ? Object(l.A)(n.notificationName, l.b.BANNER) : Object(l.o)(n.notificationName, l.b.BANNER))
					}
				}, r.a.createElement("div", {
					className: _.a.Content
				}, r.a.createElement("div", {
					className: _.a.Heading
				}, Q ? r.a.createElement("img", {
					className: _.a.TitleIcon,
					src: n.titleImage
				}) : r.a.createElement("div", {
					className: _.a.Title,
					style: {
						color: null === (y = n.titleText) || void 0 === y ? void 0 : y.colorText
					}
				}, null === (w = n.titleText) || void 0 === w ? void 0 : w.text)), r.a.createElement("div", {
					className: _.a.Body
				}, r.a.createElement("div", {
					className: _.a.BodyText,
					style: {
						color: null === (S = n.bodyText) || void 0 === S ? void 0 : S.colorText
					}
				}, null === (P = n.bodyText) || void 0 === P ? void 0 : P.text), q && r.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: _.a.Thumbnail
				})), Z || J && r.a.createElement("div", {
					className: Object(s.a)(_.a.ActionButtons, {
						[_.a.noMargin]: q
					})
				}, Z && r.a.createElement(d.t, {
					text: null === (U = n.primaryCta) || void 0 === U ? void 0 : U.text.text,
					priority: d.c.Tertiary,
					size: d.d.XS,
					onClick: e => {
						var a;
						e.stopPropagation(), (null === (a = n.primaryCta) || void 0 === a ? void 0 : a.actionType) === p.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), V(), T(t ? Object(l.A)(n.notificationName, l.b.CTA_1) : Object(l.o)(n.notificationName, l.b.CTA_1))
					},
					style: {
						...X
					},
					onMouseEnter: () => R(!0),
					onMouseLeave: () => R(!1)
				}), J && r.a.createElement(d.t, {
					text: null === (M = n.secondaryCta) || void 0 === M ? void 0 : M.text.text,
					priority: d.c.Plain,
					size: d.d.XS,
					className: _.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === p.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), V(), T(t ? Object(l.A)(n.notificationName, l.b.CTA_2) : Object(l.o)(n.notificationName, l.b.CTA_2)))
					},
					style: {
						...Y
					},
					onMouseEnter: () => z(!0),
					onMouseLeave: () => z(!1)
				}))), (null === (B = n.persistence) || void 0 === B ? void 0 : B.isDismissible) && r.a.createElement(d.t, {
					Icon: Object(b.b)("close_fill"),
					className: _.a.CloseButton,
					size: d.d.XXS,
					iconClassName: _.a.CloseButtonIcon,
					priority: d.c.Plain,
					onClick: e => {
						e.stopPropagation(), V(), T(t ? Object(l.A)(n.notificationName, l.b.DISMISS) : Object(l.o)(n.notificationName, l.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(o.e)(h),
					a = Object(o.e)(v.k);
				return (null == n ? void 0 : n.length) && a ? r.a.createElement(r.a.Fragment, null, null == n ? void 0 : n.map(e => r.a.createElement(g, {
					banner: e,
					isFromMiniInbox: t,
					key: e.notificationName,
					userId: a
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
				hotPotatoBanner: "_2oy7Xi4NUleUcHtb8YDZh7",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return V
			})), n.d(t, "b", (function() {
				return ee
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/notifications/index.ts"),
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
				g = n.n(_);
			var C = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: a,
					descriptionText: r,
					primaryButtonText: s,
					titleText: i,
					onClose: d,
					onClick: l
				} = e;
				const u = Object(v.a)();
				return o.a.createElement("div", {
					className: Object(c.a)(g.a.banner, t)
				}, o.a.createElement("div", {
					className: g.a.bannerTitleContainer
				}, i && o.a.createElement("h4", {
					className: g.a.bannerTitle
				}, i), a && o.a.createElement(f.t, {
					onClick: e => {
						d && d(e), u(Object(h.r)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(x.b)("close_fill"),
					className: Object(c.a)(g.a.closeIcon, g.a.closeButton),
					size: f.d.XXS,
					priority: f.c.Plain
				})), r && o.a.createElement("p", {
					className: g.a.bannerDescription
				}, r), o.a.createElement("div", {
					className: g.a.bannerButtonsContainer
				}, s && o.a.createElement(f.t, {
					text: s,
					priority: f.c.Tertiary,
					className: Object(c.a)(g.a.button, g.a.primaryButton),
					size: f.d.XS,
					onClick: e => {
						l && l(e), u(Object(h.r)({
							dnPromptAction: "cta"
						}))
					}
				}), n && o.a.createElement(f.t, {
					text: n,
					onClick: e => {
						d && d(e), u(Object(h.r)({
							dnPromptAction: "refuse"
						}))
					},
					priority: f.c.Plain,
					size: f.d.XS,
					className: Object(c.a)(g.a.button, g.a.closeButton)
				})))
			};
			const I = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return o.a.createElement(C, {
					className: g.a.dnPromptBanner,
					titleText: a.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: e => {
						e.stopPropagation(), t()
					},
					closeIcon: !0,
					primaryButtonText: a.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: a.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: e => {
						n(), t()
					}
				})
			};
			var O = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				N = n("./src/reddit/components/ResizeSensor/index.tsx"),
				k = n("./src/reddit/components/InboxTooltip/index.m.less"),
				j = n.n(k);
			const E = 3;
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= E) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: a,
						hideSubredditNotifications: r,
						blockAwarder: s,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, b = i + 1 <= E;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: j.a.notificationResizeWrapper
					}, o.a.createElement(O.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: a,
						hideSubredditNotifications: r,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: s
					}), !!b && o.a.createElement(N.a, {
						onResize: this.handleResize
					})))
				}
			}
			var w = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				S = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const U = {},
				M = "",
				B = 0,
				A = "200px",
				T = "250px",
				L = "270px",
				H = 100,
				D = .5,
				F = 5,
				R = 50,
				W = 55;
			class z extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: U,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > B && this.props.setActiveOverflowMenuId(M)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: a
						} = this.props, r = t || n, o = window.innerHeight - R - 2 * W - (r ? H : 0);
						let s = 0;
						for (const i in e) s += e[i];
						return 0 === s ? r ? T : a ? A : L : (r && (s += H), o < s && (s = o + (r ? H : 0)), s)
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
						} = this.state, n = t + F, a = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: a
						})
					}, this.renderNotifications = () => {
						const e = b()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: a,
								notifications: r
							} = this.props,
							s = r.length > n + F;
						return (a && r.length > 0 && s ? r.slice(0, n + 1) : r).map((n, a) => o.a.createElement(y, P({}, e, {
							index: a,
							key: a,
							notification: n,
							notificationHeight: t[a],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: a,
							notifications: r
						} = this.props;
						if (e.isIntersecting) {
							const e = r.length > this.state.currentNotificationCursorIndex + F;
							this.props.notifications.length > 0 && a && e ? this.updateCurrentCursorIndex() : t && n({
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
						isPending: a,
						notifications: r,
						setDesktopNotificationsPromptSeen: s,
						showBrowserNotificationsPermissionSettings: i
					} = this.props, c = !(!r || !r.length), d = this.getContainerHeight(), l = r.length > this.state.currentNotificationCursorIndex + F;
					return o.a.createElement("div", {
						className: j.a.notificationList,
						ref: this.container,
						style: c ? {
							height: d,
							maxHeight: d
						} : {
							minHeight: A
						}
					}, !a && o.a.createElement("div", {
						className: j.a.notificationBannerContainer
					}, t && o.a.createElement(I, {
						onTurnOnBrowserNotifications: i,
						onClose: s
					}), o.a.createElement(p.a, {
						isFromMiniInbox: !0
					})), !c && a && o.a.createElement(w.a, null), !c && !a && o.a.createElement(S.a, {
						inTooltip: !0
					}), c && this.renderNotifications(), n && c && !a && (e || l) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: D
					}, o.a.createElement("div", null)))
				}
			}
			var G = n("./src/reddit/constants/localStorage.ts"),
				K = n("./src/reddit/controls/InternalLink/index.tsx"),
				Z = n("./src/reddit/hooks/useLocalStorage.ts");
			var J = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Q = n("./src/reddit/helpers/localStorage/index.ts");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const V = [],
				X = d.a.div("StyledDropdown", j.a),
				Y = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: s,
						markAllAsRead: i,
						messagesBadgeCount: d,
						sendInboxClickSettings: u
					} = e;
					const m = !!d,
						b = Object(r.useCallback)(() => {
							n(), s()
						}, [n, s]),
						p = Object(r.useCallback)(() => {
							u(), s()
						}, [u, s]);
					return o.a.createElement("nav", {
						className: j.a.topNav
					}, o.a.createElement("span", {
						className: j.a.topNavTitle
					}, a.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && o.a.createElement("span", {
						className: j.a.topNavLinks
					}, o.a.createElement("span", {
						className: j.a.messagesLinkContainer
					}, o.a.createElement(K.default, {
						className: Object(c.a)(j.a.messagesLink, {
							[j.a.mActive]: m
						}),
						onClick: b,
						to: m ? "/message/unread" : "/message/messages"
					}, a.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(l.a, {
						className: j.a.badgeCount,
						isActive: m,
						unreadCount: d
					}))), o.a.createElement("button", {
						className: j.a.navLink,
						onClick: i
					}, o.a.createElement(x.a, {
						name: "mark_read",
						className: j.a.icon
					})), o.a.createElement(K.default, {
						className: j.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, o.a.createElement(x.a, {
						name: "settings",
						className: j.a.icon
					}))))
				},
				$ = e => o.a.createElement("div", {
					className: j.a.bottomBar
				}, o.a.createElement(K.default, {
					className: j.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, a.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ee = e => {
					const t = Object(v.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: a,
							isPending: c,
							messagesBadgeCount: d,
							notifications: l,
							hideTooltip: u,
							isHotPotatoEnabled: m,
							isInboxPolicyBannerEnabled: b,
							isLoggedIn: p,
							isPushNotificationsSupported: f,
							userId: x
						} = e,
						[_, g] = Object(J.a)(x),
						[C, I] = function(e) {
							const [t, n] = Object(r.useState)(() => Object(Q.t)(e));
							return [t, Object(r.useCallback)(() => {
								n(!0), Object(Q.yb)(e)
							}, [e])]
						}(x),
						[O, N] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [a, r] = Object(Z.a)(t, []);
							return [-1 !== a.indexOf(n), () => {
								r([...a, n])
							}]
						}({
							key: G.b.HOT_POTATO_BANNER_SEEN,
							userId: x
						}),
						k = !(!l || !l.length),
						E = Object(s.a)(),
						y = E === i.a.Closed || E === i.a.Default || E === i.a.Denied,
						w = f && y && !_;
					return o.a.createElement(X, null, o.a.createElement("div", {
						className: j.a.tooltipContainer
					}, o.a.createElement(Y, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(h.h)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(h.w)({
								badgeCount: a,
								tab: h.f.Messages
							})), t(Object(h.i)()), n()
						},
						sendInboxClickSettings: () => t(Object(h.n)(h.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), o.a.createElement(z, q({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: g,
						isDNInboxPromptBannerEnabled: w,
						isInboxPrivacyPolicyBannerEnabled: b && !C,
						setInboxPrivacyPolicyBannerSeen: I,
						isHotPotatoEnabled: m && !O,
						setHotPotatoBannerSeen: N
					})), (k || c) && o.a.createElement($, {
						sendInboxClickSeeAll: () => t(Object(h.m)()),
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
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return v
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => r.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				v = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return r.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				x = Object(s.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				_ = Object(c.a)(v, [i.a.Click, i.a.Keydown]),
				g = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				C = Object(o.b)(x);
			t.c = C(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(_, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(g, b({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
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
				return a
			}));
			var a, r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
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
			}(a || (a = {}));
			t.b = e => {
				const t = Object(s.e)(p.fb),
					{
						className: n,
						modNote: a,
						onClick: r,
						subredditId: f,
						context: v
					} = e,
					x = "label" in a && a.label || b.c,
					_ = a.commentInfo,
					{
						postInfo: g
					} = a,
					C = g ? g.permalink : _ ? _.permalink : void 0,
					I = Object(d.a)();
				return o.a.createElement("div", {
					className: Object(i.a)(n, h.a.modNote),
					onClick: e => {
						e.stopPropagation(), r && r(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === v && c.e || "ModIdCard" === v && c.i;
							e && I(e({
								modNote: a,
								subredditId: f
							}))
						})()
					},
					style: x ? {
						backgroundColor: t ? b.b[x] : b.a[x]
					} : {}
				}, o.a.createElement(m.a, {
					modNote: a
				}), o.a.createElement("div", {
					className: h.a.metadataContainer
				}, o.a.createElement(u.a, {
					className: h.a.metadata,
					modNote: a,
					shouldShowUserIcon: !0,
					subredditId: f,
					onClickUsername: () => {
						const e = "LastAuthorUserNoteTooltip" === v && c.o || "ModIdCard" === v && c.p;
						e && I(e({
							modNote: a,
							subredditId: f
						}))
					}
				}), C && o.a.createElement(l.a, {
					className: h.a.link,
					linkUrl: C,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === v && c.f || "ModIdCard" === v && c.g;
							e && I(e({
								modNote: a,
								subredditId: f
							}))
						})()
					}
				})))
			}
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
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
			t.a = r
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				s = n.n(o);
			const i = () => r.a.createElement("li", {
					className: s.a.placeholderWrapper
				}, r.a.createElement("span", {
					className: s.a.placeholderAvatar
				}), r.a.createElement("span", {
					className: s.a.placeholderContent
				})),
				c = () => r.a.createElement("ol", null, r.a.createElement(i, null), r.a.createElement(i, null), r.a.createElement(i, null))
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
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				s = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(o.a)(e, t);
				class a extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(s.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(n, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(a)
			}
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/helpers/describeApiError/index.ts"),
				c = n("./src/reddit/components/PostList/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: n
				} = e;
				let r = a.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (r = Object(i.a)({
					apiError: n,
					isLoggedOut: !1
				})), o.a.createElement("div", {
					className: d.a.somethingWrong
				}, o.a.createElement("div", {
					className: d.a.somethingWrongText
				}, r), t && o.a.createElement(s.l, {
					onClick: t
				}, a.fbt._("Try again", null, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/config.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends r.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: a,
						totalCount: i
					} = t, l = a.description ? a.description : a.name;
					return r.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${o.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && r.a.createElement("span", {
						className: c.a.count
					}, `+${Object(s.b)(i-1)}`)), r.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", a.name), d._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(s.e)(e);
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
						hideNSFWPref: r,
						isNSFW: s,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? o.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === d ? o.a.createElement(i.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : s && r ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/preferences.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: s.m,
					hideNSFWPref: s.H
				}),
				c = Object(a.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(o.C)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
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
					g = Object(s.d)(),
					C = f && f.id,
					I = f && f.voteState;
				let O = null;
				C || (O = t ? "user_hovercard" : "profile_overview");
				const N = Object(r.useCallback)(() => _(Object(m.h)(t ? "user_hovercard" : "profile_overview", n)), [t, _, n]);
				return o.a.createElement(u.t, {
					onClick: () => {
						i ? (_(m.i), C && I === p.a.notVoted && g(Object(c.jb)(C))) : N();
						const e = i ? "postify" : "copy";
						g(Object(d.b)({
							clickSource: O,
							share: x,
							source: e
						}))
					},
					className: Object(a.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, o.a.createElement(b.a, {
					className: Object(a.a)({
						[h.a.shirtIcon]: !i,
						[h.a.avatarPostButtonShirtIcon]: i
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/Button/index.tsx"),
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
					className: a,
					isOwnProfile: d,
					onClick: m
				} = e;
				return r.a.createElement(s.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(o.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !n && d,
						[l.a.compactButtonLayout]: t
					}, a)
				}, n ? r.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : r.a.createElement("div", {
					className: l.a.shirtIcon
				}), n ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : d ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), n ? r.a.createElement("div", {
					className: l.a.chevronIcon
				}) : r.a.createElement(i.a, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				s = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = n.n(c),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: n,
					username: a,
					editMode: c,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return r.a.createElement("div", {
					className: d.a.bannerWrapper
				}, r.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: n,
					userName: a
				}), c && t && (l ? r.a.createElement(o.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : r.a.createElement(s.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
					url: a,
					userCreated: c,
					username: d,
					...l
				} = e;
				const u = n ? r.a.createElement(r.a.Fragment, null, "u/", d, " · ", r.a.createElement(s.d, {
					seconds: c,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return a ? r.a.createElement(o.default, i({}, l, {
					className: t,
					to: a
				}), u) : r.a.createElement("span", i({}, l, {
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
				return C
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				c = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const m = 25;

			function b(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function p(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const f = b("particleDelay", u.a),
				h = b("particleX", u.a),
				v = b("particleFloat", u.a),
				x = () => {
					const e = p(h),
						t = p(v),
						n = p(f);
					return Object(r.a)(u.a.particle, e, t, n)
				};
			class _ extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < m; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: u.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${x()}`
					})
				}
			}
			var g = _;
			const C = e => {
				let {
					className: t,
					isGold: n,
					snoovatarUrl: o,
					prefersReducedAnimations: l,
					origin: m
				} = e;
				const b = o && Object(d.d)(o),
					p = m === c.a.Profile,
					f = m === c.a.Hovercard;
				return b ? s.a.createElement("div", {
					className: Object(r.a)({
						[u.a.profileTreatment]: p,
						[u.a.hovercardTreatment]: f
					})
				}, s.a.createElement("div", {
					className: u.a.nftProfileUnitContainer
				}, s.a.createElement(i.a, {
					className: u.a.nftProfileUnit,
					imageUrl: o,
					origin: m
				}))) : s.a.createElement("div", {
					className: Object(r.a)(u.a.snoovatarContainer, t)
				}, n && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: u.a.topGlow
				}), s.a.createElement("div", {
					className: u.a.bottomGlow
				}), !l && s.a.createElement(g, null)), s.a.createElement("img", {
					className: Object(r.a)(u.a.snoovatar, {
						[u.a.premiumGlow]: n
					}),
					src: o,
					alt: a.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = e => {
				let {
					title: t,
					username: n,
					isEmployee: o,
					isGold: l,
					isNSFW: m
				} = e;
				return s.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || n, o && s.a.createElement(i.a, {
					className: u.a.snoovatarAdminIcon,
					title: r.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), l && s.a.createElement("a", {
					title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", n)], {
						hk: "3Fylv"
					}),
					href: `${a.a.redditUrl}/premium`
				}, s.a.createElement(d.a, {
					className: u.a.snoovatarPremiumIcon
				})), m && s.a.createElement(c.a, {
					className: u.a.snoovatarNsfwIcon,
					title: r.fbt._("NSFW - Adult Content", null, {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
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
					currentUserHasSnoovatar: a,
					editMode: p,
					isDeletingBanner: h,
					isEmployee: g,
					isGold: C,
					isNSFW: I,
					isOwnProfile: O,
					onClickSnoovatar: N,
					onDeleteBanner: k,
					prefersReducedAnimations: j,
					snoovatarUrl: E,
					title: y,
					userCreated: w,
					username: S,
					url: P,
					isHovercard: U
				} = e;
				const M = Object(o.e)(e => !O && !!E && Object(d.d)(e));
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: I,
					username: S,
					isDeletingBanner: !!h,
					onDeleteBanner: k
				}), !p && O && r.a.createElement(s.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, r.a.createElement(c.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), r.a.createElement(x.a, {
					isGold: C,
					snoovatarUrl: E,
					prefersReducedAnimations: j,
					origin: U ? i.a.Hovercard : i.a.Profile
				}), r.a.createElement(_.a, {
					isEmployee: g,
					isGold: C,
					isNSFW: I,
					title: y,
					username: S
				}), r.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: w,
					url: P
				}), (O || !a && !!E) && r.a.createElement(l.a, {
					compact: n,
					currentUserHasSnoovatar: a,
					isOwnProfile: O,
					onClick: N
				}), M && r.a.createElement(u.a, {
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : s.c.Plain,
				b = e => {
					let {
						border: t,
						priority: n,
						small: a,
						...r
					} = e;
					return o.a.createElement(s.t, u({}, r, {
						priority: m(s.c.Primary, t, n),
						className: Object(l.a)(r.className, d.a.BaseButton),
						size: a ? s.d.S : s.d.M
					}))
				},
				p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? a.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : a.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? a.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : a.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: a,
						small: r,
						...i
					} = e;
					return o.a.createElement(s.t, u({}, i, {
						priority: m(s.c.Secondary, n, a),
						className: Object(l.a)(i.className, d.a.BaseButton),
						size: r ? s.d.S : s.d.M,
						text: p(t)
					}))
				};
			class h extends o.a.Component {
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
						priority: a,
						small: r = !1,
						isFullWidth: s = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: a,
						small: r,
						isFullWidth: s,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(b, u({}, d, {
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
			var a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(a.c)(o.a))
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(s.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = r.a.createRef(), this.menuItems = r.a.createRef(), this.containerRef = r.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: a
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), a(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
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
							const n = this.menuItems.current.getElementsByClassName(s.a.menuOption);
							for (let a = 0; a < n.length; a++) e.relatedTarget === n[a] && (t = !0)
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
							const t = this.menuItems.current.getElementsByClassName(s.a.menuOption);
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
					const e = this.menuItems.current.getElementsByClassName(s.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n,
						menuOptionClassName: a
					} = this.props;
					return e.map((e, o) => r.a.createElement(c.b, {
						key: o + e.displayText,
						className: Object(i.a)(s.a.menuOption, a, {
							[s.a.topics]: n
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
						isCompactStyle: a,
						isTopicsStyle: o,
						menuItemsClassName: c,
						name: m,
						isSaving: b,
						buttonIcon: p,
						disabled: f
					} = this.props, {
						isOpen: h
					} = this.state;
					return r.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(s.a.dropdownMenu, t, {
							[s.a.topics]: o
						})
					}, r.a.createElement("button", {
						onClick: f ? void 0 : this.handleDropdownClick,
						className: Object(i.a)(e, s.a.selector, {
							[s.a.compact]: a
						}, {
							[s.a.topics]: o
						}, {
							[s.a.disabled]: f
						}),
						name: m,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: f ? void 0 : this.handleDropdownBlur,
						onKeyDown: f ? void 0 : this.handleDropdownKeyDown
					}, r.a.createElement("span", {
						className: s.a.selectorContent,
						tabIndex: -1
					}, p && r.a.createElement("span", {
						className: s.a.buttonIcon
					}, p), n), f ? null : b ? r.a.createElement(d.a, {
						sizePx: 8,
						className: s.a.loadingIcon
					}) : r.a.createElement(l.a, {
						name: "caret_down"
					})), r.a.createElement("div", {
						className: Object(i.a)(s.a.menuItems, c, {
							[s.a.topics]: o,
							[s.a.isClosed]: !h
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
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			class o extends r.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, o = n || a;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(s);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: a = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${a}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");

			function o(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case r.L.AUTHORIZATION_ERROR:
						return n ? a.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : a.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case r.L.VALIDATION_ERROR:
						return a.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case r.L.NOT_FOUND_ERROR:
						return a.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case r.L.SERVER_ERROR:
						return a.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case r.L.LIKELY_UBLOCK_ERROR:
						return a.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return a.fbt._("Something went wrong. Just don't panic.", null, {
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
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(r);
			const s = e => {
					let {
						isLoading: t
					} = e;
					return Object(a.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(a.a)(o.a.loadingBar, s(e))
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
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
			var a = n("./src/reddit/selectors/avatarPushcard.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				s = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var c;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(c || (c = {}));
			const d = e => t => {
					const n = Object(r.o)(t);
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
				l = (e, t, n) => o => {
					const s = Object(a.a)(o).id;
					return {
						...Object(r.o)(o),
						source: e,
						action: t,
						noun: n,
						goldPurchase: {
							offerContext: s
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
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(a.useState)(Object(r.s)(e));
				return [t, Object(a.useCallback)(() => {
					n(!0), Object(r.ob)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(o.e)(s.j) || r.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || r.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(o.e)(s.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var a, r = n("./node_modules/react/index.js");

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Bottom;
				const [n, o] = Object(r.useState)(e), s = Object(r.useRef)(null);
				return {
					container: s,
					isScrollGradientVisible: n,
					calculateGradientVisibility: () => {
						const e = s.current;
						if (!e) return;
						const n = e.getBoundingClientRect().height,
							{
								scrollHeight: r,
								scrollTop: i
							} = e,
							c = Math.ceil(i + n) >= r,
							d = Math.ceil(n - i) >= r,
							l = t === a.Bottom ? c : d;
						o(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(a || (a = {}))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), r.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#EC0623"
			}), r.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/ModUserNotes/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/redditGQL/types.ts");
			const s = "DEFAULT_MOD_NOTE",
				i = (e, t) => `LAST_AUTHOR_MOD_NOTE-${e}${t?"-overlay":""}`,
				c = {
					[o.H.BotBan]: "#1717604F",
					[o.H.PermaBan]: "#3E0A514F",
					[o.H.Ban]: "#5B00414F",
					[o.H.AbuseWarning]: "#6D001A4F",
					[o.H.SpamWarning]: "#5423134F",
					[o.H.SpamWatch]: "#3A26194F",
					[o.H.SolidContributor]: "#0044414F",
					[o.H.HelpfulUser]: "#02315C4F",
					[s]: "#242424"
				},
				d = {
					[o.H.BotBan]: "#CCD7FF",
					[o.H.PermaBan]: "#F3CCFF",
					[o.H.Ban]: "#FFC9D2",
					[o.H.AbuseWarning]: "#FFD5AE",
					[o.H.SpamWarning]: "#FFF494",
					[o.H.SpamWatch]: "#EAD5A2",
					[o.H.SolidContributor]: "#CBFD9A",
					[o.H.HelpfulUser]: "#A6EDFF",
					[s]: "#E6E6E6"
				},
				l = {
					[o.H.BotBan]: "bot_fill",
					[o.H.PermaBan]: "bot_fill",
					[o.H.Ban]: "ban_fill",
					[o.H.AbuseWarning]: "spoiler_fill",
					[o.H.SpamWarning]: "spoiler_fill",
					[o.H.SpamWatch]: "nsfw_language_fill",
					[o.H.SolidContributor]: "new_fill",
					[o.H.HelpfulUser]: "peace_fill",
					[s]: "user_note_fill"
				},
				u = {
					[o.H.BotBan]: "#5349DA",
					[o.H.PermaBan]: "#9C3CAC",
					[o.H.Ban]: "#DE107F",
					[o.H.AbuseWarning]: "#FB133A",
					[o.H.SpamWarning]: "#E79800",
					[o.H.SpamWatch]: "#9C6926",
					[o.H.SolidContributor]: "#00A368",
					[o.H.HelpfulUser]: "#006DC6",
					[s]: "#818384"
				},
				m = {
					[o.H.BotBan]: () => a.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[o.H.PermaBan]: () => a.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[o.H.Ban]: () => a.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[o.H.AbuseWarning]: () => a.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[o.H.SpamWarning]: () => a.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[o.H.SpamWatch]: () => a.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[o.H.SolidContributor]: () => a.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[o.H.HelpfulUser]: () => a.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				b = e => Object(r.a)(e.id) ? e.belongsTo.id : e.subredditId
		},
		"./src/reddit/models/inboxBanner/index.ts": function(e, t, n) {
			"use strict";
			var a, r;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.IOS = "IOS_APP", e.ANDROID = "ANDROID_APP", e.DESKTOP = "DESKTOP_APP"
				}(a || (a = {})),
				function(e) {
					e.GOTO = "goto", e.DISMISS = "dismiss"
				}(r || (r = {}))
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/helpers/trackers/inbox.ts"),
				s = n("./src/reddit/hooks/useTracking.ts"),
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
				const a = `/${f}`,
					o = {
						to: a,
						kind: l.b.InternalLink
					},
					s = r.a.createElement(u.default, {
						to: a,
						target: "_blank",
						rel: "noopener noreferrer",
						className: b.a.subredditLinkR,
						onClick: n
					}, f);
				return r.a.createElement("div", {
					className: Object(c.a)(b.a.emptyState, b.a.karmaView, {
						[b.a.inNotificationsPage]: !t
					})
				}, r.a.createElement("img", {
					src: `${d.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: i.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(c.a)(b.a.avatarImage, {
						[b.a.inTooltip]: t
					})
				}), r.a.createElement("h1", {
					className: Object(c.a)(b.a.emptyTitle, {
						[b.a.inTooltip]: t
					})
				}, i.fbt._("You don’t have any activity yet", null, {
					hk: "43tvWW"
				})), r.a.createElement("p", {
					className: b.a.emptyDescription
				}, i.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [i.fbt._param("Link: to popular subreddit", s)], {
					hk: "1WOK4T"
				})), r.a.createElement(l.t, p({
					className: b.a.emptyStateButton,
					onClick: n,
					text: `Visit ${f}`
				}, o)))
			};
			t.a = e => {
				let {
					inTooltip: t
				} = e;
				const n = Object(s.a)();
				return r.a.createElement(h, {
					inTooltip: t,
					onBtnClick: (e => () => n(Object(o.s)({
						actionInfoType: e
					})))(o.a.Karma)
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
		"./src/reddit/selectors/avatarPushcard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/helpers/localStorage/index.ts"),
				s = n("./src/reddit/reducers/features/avatar/index.ts"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const c = e => {
					var t, n, a;
					return null === (a = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === a ? void 0 : a.pushcard
				},
				d = Object(a.a)(c, i.b, (e, t) => {
					if (!e || !t) return null;
					const {
						id: n,
						eventViews: a
					} = Object(o.x)();
					return n === e.id && a > e.maxViews ? null : e
				}),
				l = Object(a.a)(d, e => {
					if (!e) return null;
					const {
						id: t,
						lastInteractionTimestamp: n
					} = Object(o.x)();
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
			var a = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.models[n]
				},
				c = (e, t) => {
					let {
						subredditId: n,
						username: a
					} = t;
					const r = Object(s.Cb)(e, {
						userName: a
					});
					if (!r) return;
					const o = i(e, {
						subredditId: n
					});
					return o ? o[r.id] : void 0
				},
				d = Object(a.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const a = e.features.banned.userOrder[n];
					return a ? a.map(t => e.features.banned.models[n][t]) : r.a
				}),
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const a = Object(o.e)(n);
					return e.features.banned.api.pending[a]
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
			var a = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				pages: {
					modHub: s.a
				}
			});
			const i = [],
				c = Object(a.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const a = e.pages.modHub.muted.userOrder[n];
					return a ? a.map(t => e.pages.modHub.muted.models[n][t]) : i
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const a = Object(r.e)(n);
					return !!e.pages.modHub.muted.api.pending[a]
				},
				l = (e, t, n) => !!e.pages.modHub.muted.models[t] && !!e.pages.modHub.muted.models[t][n],
				u = e => !!e.pages.modHub.muted.search.api.pending,
				m = e => e.pages.modHub.muted.search.result,
				b = e => {
					var t, n, a;
					return null === (a = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === a ? void 0 : a.inContext
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
				return s
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
				return g
			}));
			var a = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/SubredditModeration/index.ts");
			const o = [],
				s = Object(a.a)((e, t) => {
					let {
						subredditId: n,
						before: a,
						after: o
					} = t;
					const s = Object(r.e)(n, o, a),
						i = e.pages.modHub.moderators.userOrder.data[n] && e.pages.modHub.moderators.userOrder.data[n][s];
					return i ? i.map(t => e.pages.modHub.moderators.models[n][t]) : []
				}),
				i = (e, t, n) => !!e.pages.modHub.moderators.models[t] && !!e.pages.modHub.moderators.models[t][n],
				c = (e, t) => {
					let {
						subredditId: n,
						beforeEditable: a,
						afterEditable: o
					} = t;
					const s = Object(r.e)(n, o, a),
						i = e.pages.modHub.moderators.editableUserOrder.data[n] && e.pages.modHub.moderators.editableUserOrder.data[n][s];
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
					const n = Object(r.e)(t.subredditId, t.after, t.before);
					return !!e.pages.modHub.moderators.userOrder.api.pending[n]
				},
				_ = (e, t) => {
					const n = Object(r.e)(t.subredditId, t.afterEditable, t.beforeEditable);
					return !!e.pages.modHub.moderators.editableUserOrder.api.pending[n]
				},
				g = Object(a.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const a = e.pages.modHub.moderators.invitedModerators.userOrder[n];
					return a ? a.map(t => e.pages.modHub.moderators.invitedModerators.models[n][t]) : o
				})
		},
		"./src/redditGQL/operations/ProxyAuthor.json": function(e) {
			e.exports = JSON.parse('{"id":"695a72c78215"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.036489073c476e53a6c6.js.map