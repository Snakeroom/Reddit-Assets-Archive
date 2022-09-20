// https://www.redditstatic.com/desktop2x/AuthorHovercard.7e804ef7ac6e21d6983f.js
// Retrieved at 9/20/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
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
				const c = new Date(e * r.Vb);
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
				method: m.mb.GET,
				data: n
			});
			var _ = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				g = n("./src/reddit/models/SubredditModeration/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/bannedUser.ts"),
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
			const B = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
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
				M = n("./src/reddit/actions/inContextModeration.ts");
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
			const L = {};
			var D = function() {
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
				H = n("./node_modules/icepick/icepick.js");
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
						return Object(H.merge)(e, {
							[n]: a
						})
					}
					case j.w: {
						const {
							subredditId: n,
							userId: a
						} = t.payload;
						return Object(H.unsetIn)(e, [n, a])
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
			var q = function() {
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
					pending: q
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
				z = Object(y.c)({
					api: G,
					result: K
				});
			const Z = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
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
				V = Object(y.c)({
					api: U,
					fetchedTokens: A,
					inContext: T,
					loadMore: D,
					models: R,
					search: z,
					userOrder: J
				});
			Object(E.a)({
				features: {
					banned: V
				}
			});
			const Q = Object(s.a)(j.s),
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
						n(Q({
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
						h = u.subreddits.models[e].url,
						v = u.subreddits.models[e].name;
					t.username = Object(_.a)(t.username), r(Object(i.h)(n));
					const g = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.mb.POST,
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
					}))(d(), h, t);
					if (g.ok) {
						r(Object(i.e)(n));
						const e = {
							username: t.username
						};
						r(Object(l.f)({
							kind: O.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const o = await x(d(), v, e);
						o.ok && r(re(o.body))
					} else {
						r(Object(i.f)(n, g.error));
						const e = o()(g, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: O.b.Error,
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
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.mb.POST,
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
						kind: O.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = o()(d, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: O.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, a) => {
					const r = a();
					await Promise.all([(async () => {
						if (!Object(I.b)(u.a.BAN_USER)(r) && !Object(N.T)(r, {
								subredditId: e
							})) {
							const t = Object(N.W)(r, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const a = Object(k.Ab)(r, {
							userName: t
						});
						if (!a) return;
						const o = Object(C.h)(r, {
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
				return O
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
				method: i.mb.GET,
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
				O = function(e) {
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
				C = Object(r.a)(v.ab),
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
					c.ok ? n(C(c.body)) : n(N(c.error))
				}, j = Object(r.a)(v.X), E = Object(r.a)(v.cb), y = (e, t) => async (n, r, o) => {
					let {
						apiContext: u
					} = o;
					const m = r().subreddits.models[e].url,
						b = await ((e, t, n) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.mb.POST,
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
						method: i.mb.POST,
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
		"./src/reddit/components/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Admin/index.m.less"),
				c = n.n(i),
				d = n("./src/lib/constants/icons.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts");
			const b = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(s.e)(b) ? o.a.createElement("span", {
					className: c.a.admin
				}, a.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : o.a.createElement(l.a, {
					name: d.a.admin,
					isFilled: !0,
					className: c.a.adminIcon,
					title: a.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
			}
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
					unreadCount: i
				} = e;
				return n ? r.a.createElement("span", {
					className: Object(o.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: a || i < 1
					})
				}, a || i < 1 ? "" : Object(s.b)(i)) : null
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "bB2dVpEvw7ZW_71r6UOG8"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metadata: "Q0CnEiiTYWW90JwBPi-3X",
				deleteButton: "_3xGgEou3qoyvyHtklgaVwR",
				operator: "_3mkZJiG1HSCl4dWJD3SJX7",
				createdDate: "_3DKC-l35UqIQdbPaQm6M_T"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less": function(e, t, n) {
			e.exports = {
				modNote: "mmlDYQNFwnacB-N5KZvv_",
				header: "_4ra95MsgSxPMAVM7PYu-s",
				labelIcon: "_1saX7rKk2uqdc-BaHVjS1I",
				label: "-tYwDwCFmjp1G1ManCHOz",
				note: "MRqZyzVQKqS7T9bLbg4NY",
				link: "gSyoge47CLjhrl32kLMGn",
				linkIcon: "_1MN__3DySGLJpLjQoS8Fuk"
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
				O = Object(u.a)(_, [a.a.Click, a.a.Keydown]),
				I = Object(s.b)(g);
			class C extends o.a.Component {
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
					return o.a.createElement(O, h({}, this.props, {
						caretPosition: a,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = I(C)
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
				importAsync: () => Promise.all([n.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1befd72a"), n.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), n.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), n.e(0), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
				O = n("./src/reddit/selectors/userFlair.ts"),
				I = n("./src/reddit/selectors/userPrefs.ts"),
				C = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/config.ts"),
				E = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = n("./src/lib/lessComponent.tsx"),
				w = n("./src/lib/prettyPrintNumber/index.ts"),
				S = n("./src/reddit/components/Admin/index.tsx"),
				P = n("./src/reddit/components/ChatButton/index.tsx"),
				U = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				B = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				A = n("./src/reddit/components/SubscribeButton/index.tsx"),
				M = n("./src/reddit/components/UserIcon/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/endpoints/profile/info.ts"),
				D = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				H = n("./src/reddit/icons/fonts/Info/index.tsx"),
				F = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				R = n("./src/reddit/models/Gold/Award.ts"),
				W = n("./src/reddit/models/User/index.ts"),
				q = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				K = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				z = n("./src/reddit/actions/inContextModeration.ts"),
				Z = n("./src/reddit/actions/modal.ts"),
				J = n("./src/reddit/actions/subredditModeration/ban.ts"),
				V = n("./src/reddit/constants/modals.ts"),
				Q = n("./src/reddit/components/Hovercards/helpers.ts"),
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
				user: (e, t) => Object(g.Ab)(e, {
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
					}, a ? r.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							o(this.props.user.id), s(D.e(t))
						}
					}, r.a.createElement(X.a, {
						name: "ban",
						isFilled: !0,
						className: te.a.icon
					}), ne._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							i(), s(D.a(t))
						}
					}, r.a.createElement(X.a, {
						name: "ban",
						className: te.a.icon
					}), ne._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							c(), s(D.d(t))
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
						onUnbanUser: t => e(Object(J.e)(a, t)),
						requestUserBanInfo: () => e(Object(J.c)(a, {
							username: n
						})),
						toggleBanModal: () => {
							e(Object(z.c)({
								username: n,
								subredditId: a,
								contextId: r
							})), e(Object(J.a)(a, n))
						},
						toggleMuteModal: () => {
							e(Object(z.d)({
								username: n,
								subredditId: a,
								contextId: r
							})), e(Object(Z.i)(V.a.MUTE_USER))
						}
					}
				})(re),
				se = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ce = Object(o.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(se.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(Q.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(D.c(e.contextId))
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
			const me = y.a.wrapped(M.a, "UserIcon", le.a),
				be = y.a.wrapped(A.a, "SubscribeButton", le.a),
				pe = y.a.wrapped(P.b, "ChatButton", le.a),
				fe = y.a.wrapped(F.a, "PremiumIcon", le.a),
				he = y.a.wrapped(E.a, "UserNameLink", le.a),
				ve = y.a.div("UserNameMetaData", le.a),
				xe = y.a.div("MetaDataItem", le.a),
				_e = y.a.div("Bullet", le.a),
				ge = y.a.div("UserNameContainer", le.a),
				Oe = y.a.div("KarmaGrid", le.a),
				Ie = y.a.div("GenericKarma", le.a),
				Ce = y.a.a("InfoLink", le.a),
				Ne = y.a.div("KarmaCount", le.a),
				ke = y.a.div("GenericKarmaLabel", le.a),
				je = y.a.div("BannerImage", le.a),
				Ee = y.a.div("UserContainer", le.a),
				ye = y.a.div("BottomSpacer", le.a),
				we = y.a.div("Container", le.a),
				Se = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(he, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && r.a.createElement(E.a, {
					to: "/premium"
				}, r.a.createElement(fe, null)), e.user.isEmployee && r.a.createElement(S.a, null)), r.a.createElement(ve, null, r.a.createElement(xe, null, `u/${e.userName}`, r.a.createElement(_e, null, "•")), r.a.createElement(xe, null, (e.user.createdUtc || e.user.created) && r.a.createElement(q.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Pe = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...L.a,
						...t
					};
					return r.a.createElement(Oe, null, r.a.createElement(Ie, null, r.a.createElement(Ne, null, Object(w.b)(n.fromPosts)), r.a.createElement(ke, null, k.fbt._({
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
					}), r.a.createElement(Ce, {
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
					}), r.a.createElement(Ce, {
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
						isCurrentUserBanned: O,
						userProfileStyles: I,
						acceptChats: C,
						isCommentAuthorBlocked: N
					} = e;
					if (!_) return r.a.createElement(we, {
						style: f
					});
					const E = !!s && Object(W.e)(s) === x,
						y = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						w = _.accountIcon || `${j.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						P = null == u ? void 0 : u.access,
						B = (null == g ? void 0 : g.templateIds) && (null === (t = null == g ? void 0 : g.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						A = null === (n = null == g ? void 0 : g.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: M
						} = _,
						L = !!_.snoovatarFullBodyAsset,
						H = _.isNSFW && i;
					let F;
					return F = L ? !H && I && I.bannerBackgroundImage || void 0 : H ? `${j.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(we, {
						className: a,
						id: c,
						style: f
					}, !L && F && r.a.createElement(je, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), r.a.createElement(Ee, null, L ? r.a.createElement(K.a, {
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
					}), M && r.a.createElement(G.a, {
						recentAwardings: M,
						topAwardIcon: v,
						username: x
					}), d && !E && !O && C && !N && r.a.createElement(pe, {
						contextId: o,
						priority: T.c.Secondary,
						userId: _.id,
						text: k.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), _.hasUserProfile && !O && !N && !E && _.enableFollowers && r.a.createElement(be, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(D.h)(e ? "unfollow" : "follow", o),
						isFullWidth: !0,
						small: !0
					})), P && o && !E && h && r.a.createElement(oe, {
						contextId: o,
						subredditId: h,
						sendEvent: p,
						username: x
					}), S && o && B && A && h && r.a.createElement(ce, {
						contextId: o,
						subredditId: h,
						sendEvent: p,
						username: x
					}), r.a.createElement(U.i, {
						contextId: o,
						subredditId: h,
						user: _
					}), !(P || d) && r.a.createElement(ye, null))
				},
				Be = Object(B.a)(Ue),
				Ae = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Be, ue({
						isOpen: t
					}, e))
				};
			Ae.WrappedComponent = Ue;
			var Me = Ae;
			const Te = Object(s.c)({
					activeTooltipId: _.a,
					currentUser: g.k,
					isLoggedIn: g.Q,
					hideNSFWPref: g.F,
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
					user: g.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(O.d)(e, {
							subredditId: n
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(x.o)(t) && Object(x.hb)(e, t),
					userProfileStyles: (e, t) => Object(v.m)(e, Object(h.n)(e, t.userName)),
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
						const a = Object(C.e)(e),
							r = n || a && Object(x.G)(e, a.name);
						return !!r && Object(b.i)(e, r)
					},
					trophyCase: (e, t) => Object(h.s)(e, Object(h.n)(e, t.userName)),
					isNightMode: g.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(l.a)(t.contextId) ? Object(f.G)(e, {
							postId: t.contextId
						}) : Object(u.b)(e, {
							commentId: t.contextId
						});
						return Object(p.b)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(x.ib)(e, {
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
			}) : Object(d.a)(e.userName) ? null : r.a.createElement(Me, {
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
				return Dt
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
				v = n("./src/lib/localStorageAvailable/index.ts"),
				x = n("./src/reddit/helpers/localStorage/index.ts"),
				_ = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				g = n("./src/reddit/constants/keycodes.ts"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/controls/Checkbox/index.tsx"),
				C = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				N = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/ModUserNotes/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				y = n.n(E),
				w = n("./src/redditGQL/types.ts");
			const S = Object(h.a)(_.b),
				P = ["NONE", w.y.AbuseWarning, w.y.SpamWarning, w.y.SpamWatch, w.y.SolidContributor, w.y.HelpfulUser],
				U = {
					...k.f,
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
					} = e, [m, b] = Object(a.useState)(), [p, h] = Object(a.useState)(!0), [_, E] = Object(a.useState)(""), [w, B] = Object(a.useState)(!1), A = Object(o.e)(j.db);
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
						if (Object(v.a)()) {
							const e = Object(x.B)("modnote-draft");
							E(e && e[c] ? e[c] : "")
						}
					}, [c]);
					const M = Object(o.d)(),
						T = Object(a.useCallback)(e => {
							E(e), Object(x.Hb)("modnote-draft", {
								[c]: e
							})
						}, [E, c]),
						L = Object(a.useCallback)(e => {
							e.stopPropagation(), M(Object(i.a)(s, c, _, n, m, p ? l : void 0)), b(void 0), T("")
						}, [M, s, T, _, c, m, p, l, n]),
						D = Object(a.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== g.a.Enter || e.shiftKey || (e.preventDefault(), L(e))
						}, [L]),
						H = m ? U[m]() : U.NONE(),
						F = m ? m && Object(N.b)(k.e[m], {
							isFilled: !0
						}) : void 0,
						R = m && k.d[m];
					return r.a.createElement("div", {
						className: Object(d.a)(t)
					}, r.a.createElement("div", {
						className: y.a.meta
					}, r.a.createElement("span", {
						className: y.a.labelContainer,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, r.a.createElement("label", {
						className: y.a.labelText,
						htmlFor: "label"
					}, f.fbt._("Label", null, {
						hk: "39tjG1"
					})), r.a.createElement(C.b, {
						id: "labelSelector",
						className: y.a.dropdown,
						displayText: H,
						buttonIcon: F ? r.a.createElement(F, {
							className: y.a.labelIcon,
							style: {
								...R && {
									color: R
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: P.map(e => {
							const t = U[e](),
								n = "NONE" === e ? void 0 : Object(N.b)(k.e[e], {
									isFilled: !0
								}),
								a = k.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !m : m === e,
								...n && {
									icon: r.a.createElement(n, {
										className: y.a.labelIcon,
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
						buttonClassName: y.a.dropdownButton,
						menuItemsClassName: y.a.menuItems,
						menuOptionClassName: y.a.menuOption
					})), r.a.createElement("span", {
						className: y.a.checkboxContainer
					}, r.a.createElement(I.a, {
						className: y.a.checkbox,
						isCheckboxSelected: p,
						toggleCheckbox: () => h(!p)
					}), l && Object(u.a)(l) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), r.a.createElement("span", {
						className: y.a.textareaContainer
					}, r.a.createElement("textarea", {
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(d.a)(y.a.textarea, {
							[y.a.isNightMode]: A
						}),
						onChange: e => T(e.target.value),
						onKeyDown: D,
						onClick: e => e.stopPropagation(),
						placeholder: f.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: _,
						maxLength: 250
					}), r.a.createElement(S, {
						isOpen: w
					}, r.a.createElement("div", {
						className: y.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), r.a.createElement("div", {
						className: y.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), r.a.createElement(O.t, {
						className: Object(d.a)(y.a.sendButton, {
							[y.a.isNightMode]: A,
							[y.a.isDisabled]: 0 === _.length
						}),
						disabled: 0 === _.length,
						Icon: () => r.a.createElement(N.a, {
							className: Object(d.a)(y.a.iconSend, {
								[y.a.isDisabled]: 0 === _.length
							}),
							name: "send",
							isFilled: !0
						}),
						size: O.d.XS,
						iconPosition: O.h.C,
						onClick: L,
						onMouseEnter: () => B(!0),
						onMouseLeave: () => B(!1),
						style: 0 === _.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				A = n("./src/reddit/selectors/modUserNotes.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/components/SubredditIcon/index.tsx"),
				L = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				D = n.n(L);
			const H = [w.q.All, w.q.Note, w.q.Invite, w.q.Ban, w.q.Mute, w.q.ContentChange, w.q.Removal, w.q.Approval, w.q.Spam, w.q.ModAction],
				F = {
					[w.q.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[w.q.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[w.q.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[w.q.Ban]: () => f.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[w.q.Mute]: () => f.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[w.q.ContentChange]: () => f.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[w.q.Removal]: () => f.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[w.q.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[w.q.ModAction]: () => f.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[w.q.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				R = {
					[w.q.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[w.q.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[w.q.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[w.q.Ban]: () => f.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[w.q.Mute]: () => f.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[w.q.ContentChange]: () => f.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[w.q.Removal]: () => f.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[w.q.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[w.q.ModAction]: () => f.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[w.q.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var W = e => {
					const {
						className: t,
						subredditId: n,
						userId: s,
						onChangeSubredditId: i,
						filter: c,
						onChangeFilter: l,
						onChangeView: u
					} = e, p = Object(b.a)(), h = Object(o.e)(e => Object(M.r)(e, void 0)), v = Object(o.e)(e => Object(A.a)(e, s, n)), x = h.find(e => e.id === n), _ = R[c](), g = Object(N.b)("back_fill"), O = Object(a.useCallback)(() => p(Object(m.m)({
						userId: s,
						subredditId: n
					})), [s, n, p]), I = Object(a.useCallback)(e => {
						i(e.value), p(Object(m.t)({
							userId: s,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [s, n, p, i]), k = Object(a.useCallback)(() => p(Object(m.n)({
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
					}, r.a.createElement(C.b, {
						id: "subredditFilter",
						className: D.a.subreddits,
						buttonClassName: D.a.dropdownButton,
						buttonIcon: r.a.createElement(T.b, {
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
							icon: r.a.createElement(T.b, {
								className: D.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: O,
						onSelect: I,
						showSelectedCheckmark: !0
					})), r.a.createElement("div", {
						className: D.a.typesWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, r.a.createElement(C.b, {
						id: "typeFilter",
						className: D.a.types,
						buttonClassName: D.a.dropdownButton,
						menuItemsClassName: D.a.menuItems,
						menuOptionClassName: D.a.menuOption,
						displayText: _,
						options: H.map(e => ({
							displayText: F[e](),
							icon: v[w.q.All] ? r.a.createElement("span", {
								className: D.a.typeCountIconInDropdown
							}, r.a.createElement("span", {
								className: D.a.typeCountIconInDropdownInner
							}, v[e])) : void 0,
							value: e,
							isSelected: e === c
						})),
						onOpen: k,
						onSelect: j,
						showSelectedCheckmark: !0
					}))) : null
				},
				q = n("./src/lib/fastdom/index.ts"),
				G = n("./src/lib/constants/colors.ts"),
				K = n("./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less"),
				z = n.n(K),
				Z = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less"),
				J = n.n(Z);
			const V = {
					[w.p.AddRemovalReason]: "remove",
					[w.p.AcceptModeratorInvite]: "mod",
					[w.p.AddContributor]: "user",
					[w.p.ApproveLink]: "approve",
					[w.p.ApproveComment]: "approve",
					[w.p.AddContributor]: "user",
					[w.p.AddModerator]: "mod",
					[w.p.BanUser]: "ban",
					[w.p.InviteModerator]: "mod",
					[w.p.MuteUser]: "mod_mute",
					[w.p.RemoveComment]: "remove",
					[w.p.RemoveContributor]: "block",
					[w.p.RemoveLink]: "remove",
					[w.p.RemoveModerator]: "unmod",
					[w.p.RemoveWikiContributor]: "wiki_ban",
					[w.p.SpamComment]: "spam",
					[w.p.SpamLink]: "spam",
					[w.p.Spoiler]: "spoiler",
					[w.p.Sticky]: "pin",
					[w.p.UnbanUser]: "unban",
					[w.p.UninviteModerator]: "unmod",
					[w.p.UnmuteUser]: "mod_unmute",
					[w.p.Unspoiler]: "spoiler",
					[w.p.Unsticky]: "unpin",
					[w.p.WikiBanned]: "wiki_ban",
					[w.p.WikiContributor]: "wiki",
					[w.p.WikiUnbanned]: "wiki_unban"
				},
				Q = {
					[w.y.BotBan]: "bot",
					[w.y.PermaBan]: "block"
				};
			var X = e => {
					const {
						className: t,
						actionType: n,
						label: a
					} = e, o = n ? V[n] || "mod" : a && Q[a] || "user_note";
					if (!o) return null;
					const s = Object(N.b)(o);
					return r.a.createElement(s, {
						className: Object(d.a)(t, J.a.icon)
					})
				},
				Y = n("./src/reddit/selectors/activeModalId.ts"),
				$ = n("./src/reddit/actions/modal.ts"),
				ee = n("./src/reddit/hooks/useLocale.ts"),
				te = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ne = n("./src/reddit/controls/InternalLink/index.tsx"),
				ae = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less"),
				re = n.n(ae);
			var oe = e => {
					const {
						className: t,
						deleteClassName: n,
						modNote: s,
						onClickUsername: c,
						subredditId: l
					} = e, u = Object(o.d)(), {
						user: p,
						id: h,
						itemType: v
					} = s, x = `ModUserNote--Modal--DeleteConfirmation--${h}`, _ = Object(b.a)(), g = Object(a.useCallback)(() => u(Object($.i)(x)), [u, x]), O = Object(a.useCallback)(() => {
						_(Object(m.b)({
							subredditId: l,
							modNote: s
						}))
					}, [l, _, s]), I = Object(a.useCallback)(() => {
						v && u(Object(i.b)(l, p.id, h, v)), _(Object(m.c)({
							subredditId: l,
							modNote: s
						}))
					}, [u, p.id, h, v, l, _, s]), C = Object(a.useCallback)(() => {
						g(), _(Object(m.j)({
							subredditId: l,
							modNote: s
						}))
					}, [l, _, s, g]), N = Object(o.e)(e => Object(Y.a)(e) === x), k = Object(ee.a)(), j = new Intl.DateTimeFormat(k, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(s.createdAt)), E = s.itemType === w.r.Note;
					return r.a.createElement("div", {
						className: Object(d.a)(t, re.a.metadata)
					}, s.operator && r.a.createElement(ne.default, {
						className: re.a.operator,
						to: `/user/${s.operator.displayName}/`,
						onClick: c
					}, "u/", s.operator.displayName), r.a.createElement("span", {
						className: re.a.createdDate
					}, f.fbt._("on {createdDate}", [f.fbt._param("createdDate", j)], {
						hk: "2VoP7K"
					})), E && r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						className: Object(d.a)(n, re.a.deleteButton),
						onClick: C
					}, f.fbt._("Delete", null, {
						hk: "4lt26q"
					})), N && r.a.createElement(te.a, {
						actionText: f.fbt._("Yes, Delete", null, {
							hk: "3kB0Hd"
						}),
						headerText: f.fbt._("Delete this note?", null, {
							hk: "bGAxq"
						}),
						modalText: f.fbt._("This mod note will be permanently deleted.", null, {
							hk: "DFQi2"
						}),
						onConfirm: I,
						onCancel: O,
						toggleModal: g,
						withOverlay: !0
					})))
				},
				se = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				ie = n.n(se);
			var ce = e => {
					let {
						className: t,
						modNote: n,
						onClickLinked: a
					} = e;
					var s, i;
					const c = Object(o.e)(j.db),
						l = "label" in n && n.label || k.c,
						u = "note" in n ? n.note : void 0,
						m = Object(N.b)(k.e[l || "bot"], {
							isFilled: !0
						}),
						b = ![k.c, w.y.BotBan, w.y.PermaBan].includes(l),
						p = n.postInfo ? null === (s = n.postInfo) || void 0 === s ? void 0 : s.permalink : n.commentInfo ? null === (i = n.commentInfo) || void 0 === i ? void 0 : i.permalink : void 0,
						f = Object(N.b)("external_link_fill");
					return u ? r.a.createElement("div", {
						className: Object(d.a)(t, ie.a.modNote),
						onClick: e => e.stopPropagation(),
						style: l ? {
							backgroundColor: c ? k.b[l] : k.a[l]
						} : {}
					}, b && r.a.createElement("div", {
						className: ie.a.header
					}, r.a.createElement(m, {
						className: ie.a.labelIcon,
						style: {
							color: k.d[l]
						}
					}), r.a.createElement("span", {
						className: ie.a.label
					}, k.f[l]())), u && r.a.createElement("div", {
						className: ie.a.note
					}, u), p && r.a.createElement("a", {
						className: ie.a.link,
						href: p || "",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: a
					}, r.a.createElement(f, {
						className: ie.a.linkIcon
					}))) : null
				},
				de = n("./src/lib/constants/index.ts"),
				le = n("./src/lib/prettyPrintNumber/index.ts"),
				ue = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				me = n.n(ue);
			var be = e => {
					let {
						className: t,
						postInfo: n,
						commentInfo: a,
						onClick: o
					} = e;
					var s, i, c, l;
					if (!n && !a) return null;
					if (a && "Comment" !== a.__typename) return r.a.createElement("div", {
						className: Object(d.a)(t, me.a.preview)
					}, r.a.createElement("div", {
						className: me.a.content
					}, r.a.createElement("h6", {
						className: me.a.title
					}, de.Ob)));
					const u = n ? n.permalink : a ? a.permalink : void 0,
						m = (null == n ? void 0 : n.title) || (null === (i = null === (s = a) || void 0 === s ? void 0 : s.content) || void 0 === i ? void 0 : i.markdown),
						b = n ? n.score || 0 : a && a.score || 0,
						p = (null == n ? void 0 : n.commentCount) || 0;
					return r.a.createElement("a", {
						className: Object(d.a)(t, me.a.preview),
						href: u || "",
						onClick: o,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement("div", {
						className: me.a.content
					}, m && r.a.createElement("h6", {
						className: me.a.title
					}, m), r.a.createElement("div", {
						className: me.a.meta
					}, r.a.createElement("span", null, f.fbt._({
						"*": "{pointsCount} Points",
						_1: "{pointsCount} Point"
					}, [f.fbt._param("pointsCount", Object(le.b)(b)), f.fbt._plural(b)], {
						hk: "47CFCp"
					})), !!p && r.a.createElement(r.a.Fragment, null, " · ", r.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(p, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (c = null == n ? void 0 : n.thumbnail) || void 0 === c ? void 0 : c.url) && r.a.createElement("div", {
						className: me.a.thumbnail
					}, r.a.createElement("img", {
						className: me.a.thumbnailImage,
						src: null === (l = n.thumbnail) || void 0 === l ? void 0 : l.url
					})))
				},
				pe = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				fe = n.n(pe);
			const he = {
					[w.p.AddRemovalReason]: e => {
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
					[w.p.BanUser]: e => {
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
				ve = {
					[w.p.AcceptModeratorInvite]: () => f.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[w.p.AddContributor]: () => f.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[w.p.AddModerator]: () => f.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[w.p.ApproveComment]: () => f.fbt._("Comment was approved", null, {
						hk: "3yCRAS"
					}),
					[w.p.ApproveLink]: () => f.fbt._("Post was approved", null, {
						hk: "6tcjn"
					}),
					[w.p.BanUser]: e => {
						const {
							banReason: t
						} = e;
						return t
					},
					[w.p.AddRemovalReason]: e => {
						const {
							description: t
						} = e;
						return t
					},
					[w.p.InviteModerator]: () => f.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[w.p.MuteUser]: () => f.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[w.p.RemoveComment]: () => f.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[w.p.RemoveContributor]: () => f.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[w.p.RemoveLink]: () => f.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[w.p.RemoveModerator]: () => f.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[w.p.RemoveWikiContributor]: () => f.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[w.p.SpamComment]: () => f.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[w.p.SpamLink]: () => f.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[w.p.Spoiler]: () => f.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[w.p.Sticky]: () => f.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[w.p.UnbanUser]: () => f.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[w.p.UninviteModerator]: () => f.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[w.p.UnmuteUser]: () => f.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[w.p.Unspoiler]: () => f.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[w.p.Unsticky]: () => f.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[w.p.WikiBanned]: () => f.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[w.p.WikiContributor]: () => f.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[w.p.WikiUnbanned]: () => f.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				xe = {
					[w.y.BotBan]: () => f.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[w.y.PermaBan]: () => f.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var _e = e => {
				const {
					className: t,
					modNote: n
				} = e, {
					actionType: a
				} = n, {
					label: o
				} = n, s = a ? ve[a] ? ve[a](n) : null : o && xe[o] ? xe[o]() : null, i = a && he[a] ? he[a](n) : null;
				return r.a.createElement(r.a.Fragment, null, i ? r.a.createElement("h4", {
					className: Object(d.a)(t, fe.a.subTitle)
				}, i) : null, s ? r.a.createElement("h3", {
					className: Object(d.a)(t, fe.a.title)
				}, s) : null)
			};
			var ge = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, a = Object(o.e)(j.db), s = Object(b.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return r.a.createElement("div", {
						className: Object(d.a)(z.a.wrapper, e.className)
					}, r.a.createElement("div", {
						key: "aa",
						className: z.a.iconWrapper,
						style: {
							background: a ? G.a.orca700 : G.a.narwhal100
						}
					}, r.a.createElement(X, {
						className: z.a.icon,
						actionType: t.actionType,
						label: t.label
					})), r.a.createElement("div", {
						className: z.a.content,
						key: "ba"
					}, r.a.createElement(_e, {
						modNote: t,
						className: z.a.title
					}), r.a.createElement(ce, {
						className: z.a.note,
						modNote: t,
						onClickLinked: () => s(Object(m.d)({
							subredditId: n,
							modNote: t
						}))
					}), r.a.createElement(oe, {
						className: z.a.metaData,
						deleteClassName: z.a.metaDataDelete,
						subredditId: n,
						modNote: t,
						onClickUsername: () => s(Object(m.q)({
							subredditId: n,
							modNote: t
						}))
					}), i && r.a.createElement(be, {
						className: z.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => s(Object(m.h)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				Oe = n("./src/reddit/hooks/useScrollGradient.ts"),
				Ie = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				Ce = n.n(Ie);
			var Ne = e => {
					const t = {
							[w.q.Note]: f.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[w.q.Approval]: f.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[w.q.Removal]: f.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[w.q.Ban]: f.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[w.q.Mute]: f.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[w.q.Invite]: f.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[w.q.Spam]: f.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[w.q.ContentChange]: f.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[w.q.ModAction]: f.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[w.q.All]: f.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[w.q.Note]: "user_note",
							[w.q.Approval]: "approve",
							[w.q.Removal]: "remove",
							[w.q.Ban]: "ban",
							[w.q.Mute]: "mod_mute",
							[w.q.Invite]: "user",
							[w.q.Spam]: "spam",
							[w.q.ContentChange]: "pin",
							[w.q.ModAction]: "mod",
							[w.q.All]: "mod"
						},
						{
							className: a,
							subredditId: s,
							userId: i,
							filter: c
						} = e,
						l = Object(o.e)(e => Object(j.zb)(e, {
							userId: i
						})),
						u = Object(o.e)(e => Object(M.W)(e, {
							subredditId: s
						})),
						m = t[c],
						b = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", m)], {
							hk: "1NhVUh"
						}),
						p = u && l ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", l.username), f.fbt._param("subreddit name", u.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(N.b)(n[c]);
					return r.a.createElement("div", {
						className: Object(d.a)(a, Ce.a.container)
					}, r.a.createElement(h, {
						className: Ce.a.icon
					}), r.a.createElement("p", {
						className: Ce.a.mainLine
					}, `${b} ${p}`), c === w.q.Note && r.a.createElement("p", {
						className: Ce.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				ke = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				je = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				Ee = n.n(je),
				ye = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var we = e => r.a.createElement("div", {
					className: Object(d.a)(Ee.a.wrapper, e.className)
				}, r.a.createElement("div", {
					key: "d",
					className: Object(d.a)(Ee.a.icon, Object(ye.a)(e))
				}), r.a.createElement("div", {
					key: "e",
					className: Ee.a.content
				}, r.a.createElement("div", {
					key: "ea",
					className: Object(d.a)(Ee.a.title, Object(ye.b)(e))
				}), r.a.createElement("div", {
					key: "eb",
					className: Object(d.a)(Ee.a.body, Object(ye.b)(e))
				}), r.a.createElement("div", {
					key: "ec",
					className: Object(d.a)(Ee.a.meta, Object(ye.b)(e))
				}))),
				Se = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				Pe = n.n(Se);
			var Ue = e => {
					const {
						className: t,
						isLoading: n,
						apiError: a,
						onTryAgain: o
					} = e;
					return r.a.createElement("div", {
						className: Object(d.a)(t, Pe.a.placeholder)
					}, r.a.createElement(we, {
						className: Pe.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(we, {
						className: Pe.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(we, {
						className: Pe.a.placeholderLine,
						isLoading: n
					}), !!a && r.a.createElement(ke.a, {
						apiError: a,
						onTryAgain: o
					}))
				},
				Be = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				Ae = n.n(Be);
			var Me = e => {
					const {
						className: t,
						subredditId: n,
						userId: s,
						filter: c
					} = e, l = Object(o.d)(), u = Object(o.e)(j.db), [m, b] = Object(a.useState)(!0);
					Object(a.useEffect)(() => {
						setTimeout(() => b(!1), 0)
					}, []);
					const {
						container: p,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(Oe.b)(!1, Oe.a.Top), v = Object(o.e)(e => Object(A.f)(e, {
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
					})), g = Object(o.e)(A.c), O = !!v.length, I = !!x && !_ && !g, C = Object(a.useCallback)(e => l(Object(i.f)({
						subredditId: n,
						userId: s,
						filter: c,
						before: e
					})), [l, n, s, c]), N = Object(a.useCallback)(() => {
						q.a.read(() => {
							if (null == p ? void 0 : p.current) {
								h();
								const e = p.current,
									{
										scrollTop: t,
										offsetHeight: n,
										scrollHeight: a
									} = e;
								1.25 * n - a >= t && I && !_ && C(x)
							}
						})
					}, [I, _, x, C, h, p]);
					return r.a.createElement(r.a.Fragment, null, O && r.a.createElement("div", {
						className: Object(d.a)(t, Ae.a.wrapper)
					}, r.a.createElement("div", {
						className: Object(d.a)(Ae.a.scrollGradient, {
							[Ae.a.visible]: I || _ || f,
							[Ae.a.isNightMode]: u
						})
					}), r.a.createElement("div", {
						className: Ae.a.list,
						ref: p,
						onScroll: N
					}, v.map(e => r.a.createElement(ge, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (_ || g) && r.a.createElement(Ue, {
						isLoading: _,
						apiError: g,
						onTryAgain: () => {
							x && C(x)
						}
					}))), !O && !_ && !m && r.a.createElement(Ne, {
						className: Object(d.a)(t, Ae.a.wrapper, Ae.a.noItems),
						subredditId: n,
						userId: s,
						filter: c
					}), !O && (_ || m) && r.a.createElement("div", {
						className: Object(d.a)(t, Ae.a.wrapper)
					}))
				},
				Te = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Le = n.n(Te);
			const {
				fbt: De
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var He = e => {
					const t = Object(o.d)(),
						{
							className: n,
							subredditId: s,
							userId: c,
							onChangeView: f,
							defaultTypeFilter: h,
							thingId: v
						} = e,
						[x, _] = Object(a.useState)(h || w.q.All),
						[g, O] = Object(a.useState)(s),
						I = Object(o.e)(j.db),
						C = Object(b.a)(),
						N = e => {
							t(Object(i.f)({
								subredditId: g,
								userId: c,
								filter: x,
								...e
							}))
						},
						k = x === w.q.All || x === w.q.Note;
					Object(a.useEffect)(() => {
						N({
							forceLoad: !0
						}), t(Object(p.q)())
					}, []);
					const E = {
						subredditId: s,
						userId: c,
						...v && Object(l.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(u.a)(v) ? {
							postId: v
						} : null
					};
					return Object(a.useEffect)(() => (C(Object(m.y)(E)), () => C(Object(m.s)(E))), []), r.a.createElement("div", {
						className: Object(d.a)(n, Le.a.wrapper, {
							[Le.a.isNightMode]: I
						}),
						onClick: e => e.stopPropagation()
					}, r.a.createElement(W, {
						className: Le.a.filters,
						subredditId: g,
						userId: c,
						onChangeSubredditId: e => {
							O(e), N({
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
					}), r.a.createElement(Me, {
						className: Le.a.list,
						subredditId: g,
						userId: c,
						filter: x
					}), k && r.a.createElement(B, {
						className: Le.a.form,
						filter: x,
						subredditId: s,
						userId: c,
						thingId: v
					}))
				},
				Fe = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Re = n("./src/config.ts"),
				We = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				qe = n("./src/lib/opener/index.ts"),
				Ge = n("./src/reddit/helpers/author.ts"),
				Ke = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				ze = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				Ze = n("./src/reddit/components/Admin/index.tsx"),
				Je = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				Ve = n.n(Je);
			var Qe = e => r.a.createElement("img", {
					className: Object(d.a)(e.className, Ve.a.anonymousSnoovatar),
					src: `${Re.a.assetPath}/img/anonymous_snoo.png`
				}),
				Xe = n("./src/reddit/components/ChatButton/index.tsx"),
				Ye = n("./src/reddit/components/HumanDate/index.tsx"),
				$e = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				et = n("./src/reddit/components/ModNoteItem/index.tsx"),
				tt = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				nt = n("./src/reddit/components/SubscribeButton/index.tsx"),
				at = n("./src/reddit/components/UserIcon/index.tsx"),
				rt = n("./src/reddit/endpoints/profile/info.ts"),
				ot = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				st = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				it = n("./src/reddit/models/User/index.ts"),
				ct = n("./src/reddit/selectors/gold/awardIcon.ts"),
				dt = n("./src/reddit/constants/modals.ts"),
				lt = n("./src/reddit/actions/inContextModeration.ts"),
				ut = n("./src/reddit/actions/subredditModeration/index.ts"),
				mt = n("./src/reddit/actions/subredditModeration/ban.ts"),
				bt = n("./src/reddit/actions/subredditModeration/mute.ts"),
				pt = n("./src/reddit/actions/userFlair/index.ts"),
				ft = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ht = n("./src/reddit/selectors/bannedUser.ts"),
				vt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				xt = n("./src/reddit/selectors/muted.ts"),
				_t = n("./src/reddit/selectors/subredditModeration.ts"),
				gt = n("./src/reddit/selectors/userFlair.ts"),
				Ot = n("./src/reddit/components/Hovercards/helpers.ts"),
				It = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less"),
				Ct = n.n(It);
			const {
				fbt: Nt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var kt;
			! function(e) {
				e.ModLog = "ModLog", e.Ban = "Ban", e.Unban = "Unban", e.AddNote = "AddNote", e.Mute = "Mute", e.Unmute = "Unmute", e.Flair = "Flair", e.Modmail = "Modmail"
			}(kt || (kt = {}));
			var jt = e => {
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
						f = Object(o.e)(e => l ? Object(gt.d)(e, {
							subredditId: l
						}) : void 0),
						h = !!(null == f ? void 0 : f.templateIds) && (null === (t = null == f ? void 0 : f.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						v = !!(null === (n = null == f ? void 0 : f.displaySettings) || void 0 === n ? void 0 : n.isEnabled),
						x = Object(o.e)(t => Object(vt.b)(ft.c.access)(t, e)),
						_ = Object(o.e)(t => Object(vt.b)(ft.c.mail)(t, e)),
						g = Object(o.e)(t => Object(vt.b)(ft.c.flair)(t, e)),
						O = Object(o.e)(e => Object(j.Ab)(e, {
							userName: u
						})),
						I = Object(o.e)(e => !!Object(ht.b)(e, {
							subredditId: l,
							username: u
						})),
						C = Object(o.e)(e => Object(xt.a)(e, l, O.id)),
						k = Object(o.e)(e => Object(_t.g)(e, l, O.id)),
						E = Object(o.e)(j.k),
						y = !!E && Object(it.e)(E) === u,
						S = Object(o.e)(e => l ? e.subreddits.models[l] : null),
						P = Object(o.e)(e => {
							if (d) return Object(A.g)(e, O.id, l, w.q.All)
						}),
						U = Object(a.useCallback)(() => {
							i(Object(ut.g)(l))
						}, [i, l]),
						B = Object(a.useCallback)(() => {
							i(Object(mt.c)(l, {
								username: u
							}))
						}, [i, l, u]),
						M = Object(a.useCallback)(() => {
							i(Object(mt.e)(l, O.id)), s(Ke.e(d))
						}, [O.id, l, i, d, s]),
						T = Object(a.useCallback)(() => {
							i(Object(lt.c)({
								username: u,
								subredditId: l,
								contextId: d
							})), i(Object(mt.a)(l, u)), s(Ke.a(d))
						}, [s, i, u, l, d]),
						L = Object(a.useCallback)(() => {
							i(Object(bt.b)(l))
						}, [i, l]),
						D = Object(a.useCallback)(() => {
							i(Object(lt.d)({
								username: u,
								subredditId: l,
								contextId: d
							})), i(Object($.i)(dt.a.MUTE_USER)), s(Ke.d(d))
						}, [s, i, u, l, d]),
						H = Object(a.useCallback)(() => {
							i(Object(bt.d)(l, O.id)), s(Ke.f(d))
						}, [s, i, O.id, l, d]),
						F = Object(a.useCallback)(() => {
							i(Object(pt.g)(l, u)), s(Ke.c(d))
						}, [s, i, u, l, d]),
						R = Object(a.useCallback)(() => l && s(Object(m.l)({
							subredditId: l,
							userId: O.id
						})), [l, O, s]),
						W = Object(a.useCallback)(e => {
							e.stopPropagation(), p && p(), l && s(Object(m.k)({
								subredditId: l,
								userId: O.id
							}))
						}, [l, O, s, p]),
						q = Object(a.useCallback)(e => {
							e.stopPropagation(), p && p(w.q.Note), l && s(Object(m.a)({
								subredditId: l,
								userId: O.id
							}))
						}, [l, O, s, p]);
					if (Object(a.useEffect)(() => {
							O && (U(), L(), !O.isSuspended && B())
						}, [O]), !O) return null;
					const G = S && u ? `?toSubredditName=${S.name}&toUserName=${u}` : "",
						K = {
							[kt.ModLog]: x,
							[kt.Ban]: !O.isSuspended && x && !y && I,
							[kt.Unban]: !O.isSuspended && x && !y && !I,
							[kt.AddNote]: x,
							[kt.Mute]: !O.isSuspended && !C && !k && !y && x && _,
							[kt.Unmute]: !O.isSuspended && C && !k && !y && x && _,
							[kt.Flair]: g && h && v,
							[kt.Modmail]: _
						};
					return r.a.createElement("div", {
						className: c
					}, K[kt.ModLog] && r.a.createElement(Ot.a, {
						role: "button",
						onClick: W,
						className: Ct.a.item
					}, r.a.createElement(N.a, {
						name: "mod",
						className: Ct.a.icon
					}), Nt._("User Mod Log", null, {
						hk: "2PiT0s"
					}), !!P && r.a.createElement("span", {
						className: Ct.a.notesCount
					}, P)), K[kt.AddNote] && r.a.createElement(Ot.a, {
						role: "button",
						onClick: q,
						className: Ct.a.item
					}, r.a.createElement(N.a, {
						name: "user_note",
						className: Ct.a.icon
					}), Nt._("Add Note", null, {
						hk: "34JqdA"
					})), K[kt.Ban] && r.a.createElement(Ot.a, {
						role: "button",
						onClick: M,
						className: Ct.a.item
					}, r.a.createElement(N.a, {
						name: "unban",
						className: Ct.a.icon
					}), Nt._("Unban User", null, {
						hk: "1aASyW"
					})), K[kt.Unban] && r.a.createElement(Ot.a, {
						role: "button",
						onClick: T,
						className: Ct.a.item
					}, r.a.createElement(N.a, {
						name: "ban",
						className: Ct.a.icon
					}), Nt._("Ban User", null, {
						hk: "3OhuLx"
					})), K[kt.Mute] && r.a.createElement(Ot.a, {
						role: "button",
						onClick: D,
						className: Ct.a.item
					}, r.a.createElement(N.a, {
						name: "mod_mute",
						className: Ct.a.icon
					}), Nt._("Mute User", null, {
						hk: "3MCujH"
					})), K[kt.Unmute] && r.a.createElement(Ot.a, {
						role: "button",
						onClick: H,
						className: Ct.a.item
					}, r.a.createElement(N.a, {
						name: "mod_unmute",
						className: Ct.a.icon
					}), Nt._("Unmute User", null, {
						hk: "sBvvx"
					})), K[kt.Flair] && r.a.createElement(Ot.a, {
						role: "button",
						onClick: F,
						className: Ct.a.item
					}, r.a.createElement(N.a, {
						name: "tag",
						className: Ct.a.icon
					}), Nt._("Edit user flair", null, {
						hk: "4mTxM"
					})), K[kt.Modmail] && r.a.createElement(Ot.a, {
						role: "button",
						className: Ct.a.item
					}, r.a.createElement("a", {
						href: `https://mod.reddit.com/mail/create${G}`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: R,
						className: Ct.a.userActionItemInner
					}, r.a.createElement(N.a, {
						name: "mod_mail",
						className: Ct.a.icon
					}), Nt._("Send modmail", null, {
						hk: "ZUN0n"
					}))))
				},
				Et = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				yt = n.n(Et);
			const wt = e => {
					var t, n;
					return r.a.createElement("div", {
						className: yt.a.userDetails
					}, r.a.createElement("div", null, r.a.createElement(We.a, {
						className: yt.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && r.a.createElement(r.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isGold && r.a.createElement(We.a, {
						to: "/premium"
					}, r.a.createElement(st.a, {
						className: yt.a.PremiumIcon
					})), e.user.isEmployee && r.a.createElement(Ze.a, null), e.user.isNSFW && r.a.createElement(ot.a, {
						className: yt.a.nsfwIcon,
						title: f.fbt._("NSFW - Adult Content", null, {
							hk: "2Iw7mN"
						})
					})), r.a.createElement("div", {
						className: yt.a.UserNameMetaData
					}, r.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, `u/${e.user.username}`, r.a.createElement("div", {
						className: yt.a.Bullet
					}, "•")), r.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && r.a.createElement(r.a.Fragment, null, r.a.createElement(Ye.d, {
						seconds: e.user.createdUtc || e.user.created
					}), r.a.createElement("div", {
						className: yt.a.Bullet
					}, "•"))), r.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(le.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				St = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: a,
						prefersReducedAnimations: o
					} = e, s = {
						...rt.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return r.a.createElement("div", {
						className: yt.a.userInfoGrid
					}, r.a.createElement("div", {
						className: yt.a.col
					}, r.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(s.fromPosts)), r.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), r.a.createElement("div", {
						className: yt.a.col
					}, r.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(s.fromComments)), r.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), r.a.createElement("div", {
						className: yt.a.col
					}, r.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(s.fromAwardsReceived)), r.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), r.a.createElement("div", {
						className: yt.a.col
					}, r.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(s.fromAwardsGiven)), r.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), a.length > 0 && (e => r.a.createElement("div", {
						className: yt.a.col
					}, r.a.createElement("div", {
						className: yt.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = r.a.createElement("img", {
							className: yt.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name,
							key: `${e.id}-icon`
						});
						return e.url ? r.a.createElement("a", {
							target: qe.d.BLANK,
							rel: qe.c,
							href: e.url,
							key: e.id
						}, n) : n
					})), r.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(a), i && ((e, t) => r.a.createElement("div", {
						className: yt.a.col
					}, r.a.createElement("div", {
						className: yt.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var a, o;
						if (!(n >= 3)) return r.a.createElement("img", {
							alt: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : null == e ? void 0 : e.name,
							key: null !== (o = null == e ? void 0 : e.description) && void 0 !== o ? o : null == e ? void 0 : e.name,
							className: yt.a.recentAwardOrTropyIcon,
							src: Object(ct.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), r.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, o))
				};
			var Pt = e => {
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
						isCommentAuthorBlocked: O,
						trophyCase: I,
						lastAuthorModNote: C,
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
					const w = !!o && Object(it.e)(o) === h,
						S = c && !w && !x && g && !O,
						P = v.hasUserProfile && !x && !O && !w && v.enableFollowers,
						U = null == u ? void 0 : u.access,
						B = v.isNSFW && s ? `${Re.a.assetPath}/img/user-info-banner.png` : (null == _ ? void 0 : _.bannerBackgroundImage) ? _.bannerBackgroundImage : v.bannerImage,
						A = l ? "##D7DADC" : "#0079D3",
						M = l ? "#121212" : "#FFF";
					return r.a.createElement("div", {
						className: yt.a.Container,
						id: i,
						style: {
							backgroundColor: M,
							...p
						}
					}, r.a.createElement("div", {
						className: yt.a.UserContainer
					}, r.a.createElement("div", {
						className: yt.a.BannerImage,
						style: B ? {
							backgroundImage: `url('${B}')`
						} : {}
					}), r.a.createElement("div", {
						className: yt.a.snoovatarContainer
					}, v.snoovatarFullBodyAsset ? r.a.createElement(tt.a, {
						className: yt.a.snoovatar,
						isGold: v.isGold,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						prefersReducedAnimations: !!j,
						origin: ze.a.Hovercard
					}) : (null === (t = v.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? r.a.createElement("div", {
						className: yt.a.anonymousSnoovatar
					}, r.a.createElement(Qe, null)) : r.a.createElement(at.a, {
						className: yt.a.UserIcon,
						iconUrl: v.accountIcon,
						isNSFW: v.isNSFW,
						userName: h
					}))), r.a.createElement(wt, {
						user: v,
						userName: h
					}), r.a.createElement(ne.default, {
						className: yt.a.profileLink,
						to: `/user/${h}/`
					}, f.fbt._("View full profile", null, {
						hk: "2s4Gmf"
					})), r.a.createElement("div", {
						className: yt.a.profileButtonGroup
					}, S && r.a.createElement(Xe.b, {
						className: Object(d.a)(yt.a.ChatButton, yt.a.profileButtonLeft, {
							[yt.a.onlyButton]: !P
						}),
						contextId: n,
						userId: v.id,
						text: f.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0,
						style: {
							color: M,
							backgroundColor: A
						}
					}), P && r.a.createElement(nt.a, {
						className: Object(d.a)(yt.a.SubscribeButton, yt.a.profileButtonRight, {
							[yt.a.onlyButton]: !S
						}),
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(Ke.h)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0,
						style: {
							color: N ? "#D7DADC" : M,
							backgroundColor: A,
							width: 144
						}
					})), r.a.createElement(St, {
						user: v,
						trophyCase: I || [],
						prefersReducedAnimations: !!j
					}), U && C && r.a.createElement(et.b, {
						className: yt.a.lastModNote,
						modNote: C,
						subredditId: k || "",
						onClick: e => {
							e.stopPropagation(), E()
						},
						context: et.a.ModIdCard
					}), n && k && h && !Object(Ge.a)(h) && r.a.createElement(jt, {
						contextId: n,
						subredditId: k,
						username: h,
						onChangeView: E
					}), r.a.createElement($e.i, {
						contextId: n,
						subredditId: k,
						user: v
					}), r.a.createElement("div", {
						className: yt.a.BottomSpacer
					}))
				},
				Ut = n("./src/reddit/hooks/useGqlContext.ts"),
				Bt = n("./src/lib/makeGqlRequest/index.ts"),
				At = n("./src/redditGQL/operations/ProxyAuthor.json");

			function Mt() {
				return (Mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Tt = e => {
				const t = Object(o.d)(),
					n = Object(Ut.a)(),
					i = Object(Ge.a)(e.userName),
					[c, d] = Object(a.useState)(i ? void 0 : e.userName);
				Object(a.useEffect)(() => {
					i && (async () => {
						if (!e.contextId) return;
						const a = await ((e, t) => Object(Bt.a)(e, {
							...At,
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
				const l = Object(o.e)(e => c && Object(j.Ab)(e, {
					userName: c
				}));
				return i ? c && l ? r.a.createElement(Dt, Mt({}, e, {
					userName: c,
					user: l
				})) : r.a.createElement("div", null) : r.a.createElement(Dt, e)
			};

			function Lt() {
				return (Lt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = e => {
					var t, n, d;
					const l = Object(o.e)(c.c),
						u = !!(null == l ? void 0 : l.isModNotesView),
						[m, b] = Object(a.useState)(!u),
						[p, f] = Object(a.useState)(w.q.All),
						h = Object(o.d)();
					Object(a.useEffect)(() => {
						h(Object(s.d)(e.userName))
					}, [h, e.userName]);
					const v = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (d = e.lastAuthorModNote) || void 0 === d ? void 0 : d.user.id : e.user.id;
					Object(a.useEffect)(() => {
						e.subredditId && v && h(Object(i.d)(e.subredditId, v))
					}, [h, e.subredditId, v]);
					const x = Object(a.useCallback)(e => {
						b(!m), f(e || w.q.All)
					}, [m, b]);
					return !m && e.subredditId && v ? r.a.createElement(He, {
						className: yt.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: v,
						onChangeView: x,
						defaultTypeFilter: p,
						thingId: e.contextId
					}) : r.a.createElement(Pt, Lt({}, e, {
						onChangeView: x
					}))
				},
				Ht = {
					height: 710,
					width: 340
				},
				Ft = e => r.a.createElement(Fe.a, {
					className: yt.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					tooltipSizeEstimate: Ht,
					hideCaret: !0
				}, r.a.createElement(Tt, e));
			Ft.WrappedComponent = Dt;
			t.default = Ft
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/components/Hovercards/helpers.ts"),
				s = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(u.g)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || d.a,
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
					}, e.children), r.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: a,
						isCommentAuthorBlocked: e.isCommentAuthorBlocked,
						collapsed: e.collapsed
					}))
				}
			}
			t.default = Object(l.c)(b)
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
				container: "_1sbZnfdaxhCOFVUCJ3Z75m"
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
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c.a
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/timeAgo/index.ts"),
				s = n("./src/reddit/hooks/useLocale.ts");
			var i = function(e) {
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
				},
				c = n("./src/reddit/components/HumanDate/HumanDate.tsx"),
				d = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				l = n("./src/lib/constants/index.ts");
			var u = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const a = Object(s.a)(),
						o = null != n ? n : a;
					return r.a.createElement(r.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.DEFAULT_LOCALE;
						const n = e * l.Vb;
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
					}(t, o))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/eventTools/index.ts");

			function p(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.DEFAULT_LOCALE;
				const r = Object(b.e)(e, t),
					o = new Date(e * l.Vb);
				let s;
				if (r === b.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === b.a.Future ? s = Object(b.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(b.b)(e) >= 5 ? p(o, a) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, a) : r === b.a.Past && (s = Object(b.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : p(o, a)), `${s} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,a)}`
			}
			var h = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: a,
					locale: o
				} = e;
				const i = Object(s.a)(),
					c = null != o ? o : i;
				return r.a.createElement(r.a.Fragment, null, f(t, n, a, c))
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
				var v, x, g, O, I, C, N, k, j, E, y, w, S, P, U, B, A;
				const M = Object(o.d)(),
					T = Object(m.a)(),
					[L, D, H] = function(e, t, n) {
						const [r, o] = Object(a.useState)(Object(u.r)(e, t) || 0), s = Object(a.useCallback)(() => {
							o(r + 1), Object(u.Ab)(e, t, r + 1)
						}, []), i = Object(a.useCallback)(() => {
							n > 0 && (o(n), Object(u.Ab)(e, t, n))
						}, []);
						return [r, s, i]
					}(h, n.notificationName, (null === (v = n.persistence) || void 0 === v ? void 0 : v.maxViews) || 0),
					[F, R] = Object(a.useState)(!1),
					[W, q] = Object(a.useState)(!1),
					G = Object(o.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = f(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(a.useEffect)(() => {
					D(), t ? (T(Object(l.B)(n.notificationName)), T(Object(l.C)(n.notificationName))) : (T(Object(l.p)(n.notificationName)), T(Object(l.q)(n.notificationName)))
				}, []);
				const K = null === (x = null == n ? void 0 : n.persistence) || void 0 === x ? void 0 : x.maxViews;
				if (!n || K && L > K) return null;
				const z = !!(null == n ? void 0 : n.primaryCta),
					Z = !!(null == n ? void 0 : n.secondaryCta),
					J = !!(null == n ? void 0 : n.titleImage),
					V = !!(null == n ? void 0 : n.thumbnailImageUrl),
					Q = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (H(), M(Object(c.a)(n.notificationName)))
					},
					X = {
						backgroundColor: F ? null === (g = null == n ? void 0 : n.primaryCta) || void 0 === g ? void 0 : g.colors.hoverHex : null === (O = null == n ? void 0 : n.primaryCta) || void 0 === O ? void 0 : O.colors.backgroundHex,
						color: null === (I = null == n ? void 0 : n.primaryCta) || void 0 === I ? void 0 : I.text.colorText,
						borderColor: null === (C = null == n ? void 0 : n.primaryCta) || void 0 === C ? void 0 : C.colors.borderHex
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
						e.stopPropagation(), Object(i.e)(n.linkUrl, "_blank"), Q(), T(t ? Object(l.A)(n.notificationName, l.b.BANNER) : Object(l.o)(n.notificationName, l.b.BANNER))
					}
				}, r.a.createElement("div", {
					className: _.a.Content
				}, r.a.createElement("div", {
					className: _.a.Heading
				}, J ? r.a.createElement("img", {
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
				}, null === (P = n.bodyText) || void 0 === P ? void 0 : P.text), V && r.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: _.a.Thumbnail
				})), z || Z && r.a.createElement("div", {
					className: Object(s.a)(_.a.ActionButtons, {
						[_.a.noMargin]: V
					})
				}, z && r.a.createElement(d.t, {
					text: null === (U = n.primaryCta) || void 0 === U ? void 0 : U.text.text,
					priority: d.c.Tertiary,
					size: d.d.XS,
					onClick: e => {
						var a;
						e.stopPropagation(), (null === (a = n.primaryCta) || void 0 === a ? void 0 : a.actionType) === p.a.GOTO && n.primaryCta.url && Object(i.e)(n.primaryCta.url, "_blank"), Q(), T(t ? Object(l.A)(n.notificationName, l.b.CTA_1) : Object(l.o)(n.notificationName, l.b.CTA_1))
					},
					style: {
						...X
					},
					onMouseEnter: () => R(!0),
					onMouseLeave: () => R(!1)
				}), Z && r.a.createElement(d.t, {
					text: null === (B = n.secondaryCta) || void 0 === B ? void 0 : B.text.text,
					priority: d.c.Plain,
					size: d.d.XS,
					className: _.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === p.a.GOTO && n.secondaryCta.url && Object(i.e)(n.secondaryCta.url, "_blank"), Q(), T(t ? Object(l.A)(n.notificationName, l.b.CTA_2) : Object(l.o)(n.notificationName, l.b.CTA_2)))
					},
					style: {
						...Y
					},
					onMouseEnter: () => q(!0),
					onMouseLeave: () => q(!1)
				}))), (null === (A = n.persistence) || void 0 === A ? void 0 : A.isDismissible) && r.a.createElement(d.t, {
					Icon: Object(b.b)("close_fill"),
					className: _.a.CloseButton,
					size: d.d.XXS,
					iconClassName: _.a.CloseButtonIcon,
					priority: d.c.Plain,
					onClick: e => {
						e.stopPropagation(), Q(), T(t ? Object(l.A)(n.notificationName, l.b.DISMISS) : Object(l.o)(n.notificationName, l.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(o.e)(h),
					a = Object(o.e)(v.i);
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
				return Q
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
			var O = e => {
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
				return o.a.createElement(O, {
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
			var C = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
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
					}, o.a.createElement(C.a, {
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
				B = "",
				A = 0,
				M = "200px",
				T = "250px",
				L = "270px",
				D = 100,
				H = .5,
				F = 5,
				R = 50,
				W = 55;
			class q extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: U,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > A && this.props.setActiveOverflowMenuId(B)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: a
						} = this.props, r = t || n, o = window.innerHeight - R - 2 * W - (r ? D : 0);
						let s = 0;
						for (const i in e) s += e[i];
						return 0 === s ? r ? T : a ? M : L : (r && (s += D), o < s && (s = o + (r ? D : 0)), s)
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
							minHeight: M
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
						threshold: H
					}, o.a.createElement("div", null)))
				}
			}
			var G = n("./src/reddit/constants/localStorage.ts"),
				K = n("./src/reddit/controls/InternalLink/index.tsx"),
				z = n("./src/reddit/hooks/useLocalStorage.ts");
			var Z = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				J = n("./src/reddit/helpers/localStorage/index.ts");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Q = [],
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
						[_, g] = Object(Z.a)(x),
						[O, I] = function(e) {
							const [t, n] = Object(r.useState)(() => Object(J.u)(e));
							return [t, Object(r.useCallback)(() => {
								n(!0), Object(J.Bb)(e)
							}, [e])]
						}(x),
						[C, N] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [a, r] = Object(z.a)(t, []);
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
					}), o.a.createElement(q, V({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: g,
						isDNInboxPromptBannerEnabled: w,
						isInboxPrivacyPolicyBannerEnabled: b && !O,
						setInboxPrivacyPolicyBannerSeen: I,
						isHotPotatoEnabled: m && !C,
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
				O = Object(o.b)(x);
			t.c = O(e => {
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
				header: "_3fOY2z5qmhIMTA5pHRw3HR",
				label: "_1s8o7TA7uhyKDAg_gBrROJ",
				labelIcon: "Z6i_tRKSyOfgORihc8AE2",
				note: "_16zfBhiOYAW7fHRK1jNOh",
				noLabel: "_1AvILjWpUTsm2yDYqIToxg",
				metadata: "OtVR2-taBTlpgc-PYOW3y",
				operatorBlock: "_15WP0iKlbJ_q8GgQVkCs0c",
				userIcon: "_399VmO76IeqVl7VMLjAdBG",
				createdDate: "_1wtfZke59yzfGrkBaSwBaO",
				link: "_2Dl07XZ7LNM7tsrbGG4Ym1"
			}
		},
		"./src/reddit/components/ModNoteItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var a, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/helpers/trackers/modNote.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/components/UserIcon/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/hooks/useLocale.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ModUserNotes/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/ModNoteItem/index.m.less"),
				x = n.n(v);
			! function(e) {
				e.LastAuthorUserNoteTooltip = "LastAuthorUserNoteTooltip", e.ModIdCard = "ModIdCard"
			}(a || (a = {}));
			t.b = e => {
				var t, n, a;
				const o = Object(i.e)(h.db),
					{
						className: v,
						modNote: _,
						onClick: g,
						subredditId: O,
						context: I
					} = e,
					C = "label" in _ && _.label || f.c,
					N = "note" in _ ? _.note : void 0,
					k = Object(p.b)(f.e[C || "bot"], {
						isFilled: !0
					}),
					j = Object(b.a)(),
					E = new Intl.DateTimeFormat(j, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(_.createdAt)),
					y = _.commentInfo,
					{
						postInfo: w
					} = _,
					S = w ? w.permalink : y ? y.permalink : void 0,
					P = Object(p.b)("external_link"),
					U = Object(l.a)();
				return s.a.createElement("div", {
					className: Object(c.a)(v, x.a.modNote),
					onClick: e => {
						e.stopPropagation(), g && g(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === I && d.e || "ModIdCard" === I && d.i;
							e && U(e({
								modNote: _,
								subredditId: O
							}))
						})()
					},
					style: C ? {
						backgroundColor: o ? f.b[C] : f.a[C]
					} : {}
				}, C !== f.c && s.a.createElement("div", {
					className: x.a.header
				}, s.a.createElement("div", {
					className: x.a.label
				}, s.a.createElement(k, {
					className: x.a.labelIcon,
					style: {
						color: f.d[C],
						fontSize: "15px",
						lineHeight: "15px"
					}
				}), f.f[C]())), N && s.a.createElement("div", {
					className: Object(c.a)(x.a.note, {
						[x.a.noLabel]: C === f.c
					})
				}, N), s.a.createElement("div", {
					className: x.a.metadata
				}, s.a.createElement(m.default, {
					className: x.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === I && d.o || "ModIdCard" === I && d.p;
							e && U(e({
								modNote: _,
								subredditId: O
							}))
						})()
					},
					to: `/user/${null===(t=_.operator)||void 0===t?void 0:t.displayName}/`
				}, s.a.createElement(u.a, {
					className: x.a.userIcon,
					userName: (null === (n = _.operator) || void 0 === n ? void 0 : n.displayName) || "",
					isNSFW: !1
				}), "u/", null === (a = _.operator) || void 0 === a ? void 0 : a.displayName), s.a.createElement("span", {
					className: x.a.createdDate
				}, r.fbt._("on {createdDate}", [r.fbt._param("createdDate", E)], {
					hk: "2VoP7K"
				})), S && s.a.createElement("a", {
					className: x.a.link,
					href: S || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === I && d.f || "ModIdCard" === I && d.g;
							e && U(e({
								modNote: _,
								subredditId: O
							}))
						})()
					}
				}, s.a.createElement(P, {
					className: x.a.linkIcon,
					style: {
						color: o ? "white" : "black",
						fontSize: "14px",
						opacity: .3
					}
				}))))
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
					currentUser: s.k,
					hideNSFWPref: s.F
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
					O = f && f.id,
					I = f && f.voteState;
				let C = null;
				O || (C = t ? "user_hovercard" : "profile_overview");
				const N = Object(r.useCallback)(() => _(Object(m.h)(t ? "user_hovercard" : "profile_overview", n)), [t, _, n]);
				return o.a.createElement(u.t, {
					onClick: () => {
						i ? (_(m.i), O && I === p.a.notVoted && g(Object(c.kb)(O))) : N();
						const e = i ? "postify" : "copy";
						g(Object(d.b)({
							clickSource: C,
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
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				l = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				b = n.n(m);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const p = 25;

			function f(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = f("particleDelay", b.a),
				x = f("particleX", b.a),
				_ = f("particleFloat", b.a),
				g = () => {
					const e = h(x),
						t = h(_),
						n = h(v);
					return Object(r.a)(b.a.particle, e, t, n)
				};
			class O extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < p; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: b.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${g()}`
					})
				}
			}
			var I = O;
			const C = e => {
				let {
					className: t,
					isGold: n,
					snoovatarUrl: o,
					prefersReducedAnimations: m,
					origin: p
				} = e;
				const f = Object(i.e)(u.b),
					h = o && Object(l.d)(o) && f,
					v = p === d.a.Profile,
					x = p === d.a.Hovercard;
				return h ? s.a.createElement("div", {
					className: Object(r.a)({
						[b.a.profileTreatment]: v,
						[b.a.hovercardTreatment]: x
					})
				}, s.a.createElement("div", {
					className: b.a.nftProfileUnitContainer
				}, s.a.createElement(c.a, {
					className: b.a.nftProfileUnit,
					imageUrl: o,
					origin: p
				}))) : s.a.createElement("div", {
					className: Object(r.a)(b.a.snoovatarContainer, t)
				}, n && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: b.a.topGlow
				}), s.a.createElement("div", {
					className: b.a.bottomGlow
				}), !m && s.a.createElement(I, null)), s.a.createElement("img", {
					className: Object(r.a)(b.a.snoovatar, {
						[b.a.premiumGlow]: n
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
				i = n("./src/reddit/components/Admin/index.tsx"),
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
				}, t || n, l && s.a.createElement("a", {
					title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", n)], {
						hk: "3Fylv"
					}),
					href: `${a.a.redditUrl}/premium`
				}, s.a.createElement(d.a, {
					className: u.a.snoovatarPremiumIcon
				})), o && s.a.createElement(i.a, null), m && s.a.createElement(c.a, {
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
					isGold: O,
					isNSFW: I,
					isOwnProfile: C,
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
				const B = Object(o.e)(e => !C && !!E && Object(d.e)(e));
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: I,
					username: S,
					isDeletingBanner: !!h,
					onDeleteBanner: k
				}), !p && C && r.a.createElement(s.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, r.a.createElement(c.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), r.a.createElement(x.a, {
					isGold: O,
					snoovatarUrl: E,
					prefersReducedAnimations: j,
					origin: U ? i.a.Hovercard : i.a.Profile
				}), r.a.createElement(_.a, {
					isEmployee: g,
					isGold: O,
					isNSFW: I,
					title: y,
					username: S
				}), r.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: w,
					url: P
				}), (C || !a && !!E) && r.a.createElement(l.a, {
					compact: n,
					currentUserHasSnoovatar: a,
					isOwnProfile: C,
					onClick: N
				}), B && r.a.createElement(u.a, {
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
					case r.J.AUTHORIZATION_ERROR:
						return n ? a.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : a.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case r.J.VALIDATION_ERROR:
						return a.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case r.J.NOT_FOUND_ERROR:
						return a.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case r.J.SERVER_ERROR:
						return a.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case r.J.LIKELY_UBLOCK_ERROR:
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
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			}));
			var a = n("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
					...Object(a.o)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(a.o)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				s = () => e => ({
					...Object(a.o)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var i;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(i || (i = {}));
			const c = e => t => {
				const n = Object(a.o)(t);
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
			}
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(a.useState)(Object(r.t)(e));
				return [t, Object(a.useCallback)(() => {
					n(!0), Object(r.qb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(a.useContext)(r.a);
				return e
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
					[o.y.BotBan]: "#1717604F",
					[o.y.PermaBan]: "#3E0A514F",
					[o.y.Ban]: "#5B00414F",
					[o.y.AbuseWarning]: "#6D001A4F",
					[o.y.SpamWarning]: "#5423134F",
					[o.y.SpamWatch]: "#3A26194F",
					[o.y.SolidContributor]: "#0044414F",
					[o.y.HelpfulUser]: "#02315C4F",
					[s]: "#242424"
				},
				d = {
					[o.y.BotBan]: "#CCD7FF",
					[o.y.PermaBan]: "#F3CCFF",
					[o.y.Ban]: "#FFC9D2",
					[o.y.AbuseWarning]: "#FFD5AE",
					[o.y.SpamWarning]: "#FFF494",
					[o.y.SpamWatch]: "#EAD5A2",
					[o.y.SolidContributor]: "#CBFD9A",
					[o.y.HelpfulUser]: "#A6EDFF",
					[s]: "#E6E6E6"
				},
				l = {
					[o.y.BotBan]: "bot_fill",
					[o.y.PermaBan]: "bot_fill",
					[o.y.Ban]: "ban_fill",
					[o.y.AbuseWarning]: "spoiler_fill",
					[o.y.SpamWarning]: "spoiler_fill",
					[o.y.SpamWatch]: "nsfw_language_fill",
					[o.y.SolidContributor]: "new_fill",
					[o.y.HelpfulUser]: "peace_fill",
					[s]: "user_note_fill"
				},
				u = {
					[o.y.BotBan]: "#5349DA",
					[o.y.PermaBan]: "#9C3CAC",
					[o.y.Ban]: "#DE107F",
					[o.y.AbuseWarning]: "#FB133A",
					[o.y.SpamWarning]: "#E79800",
					[o.y.SpamWatch]: "#9C6926",
					[o.y.SolidContributor]: "#00A368",
					[o.y.HelpfulUser]: "#006DC6",
					[s]: "#818384"
				},
				m = {
					[o.y.BotBan]: () => a.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[o.y.PermaBan]: () => a.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[o.y.Ban]: () => a.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[o.y.AbuseWarning]: () => a.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[o.y.SpamWarning]: () => a.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[o.y.SpamWatch]: () => a.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[o.y.SolidContributor]: () => a.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[o.y.HelpfulUser]: () => a.fbt._("Helpful", null, {
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
					const r = Object(s.Ab)(e, {
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
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return !(Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: a.te
					}) === a.Kd)
				},
				s = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.ue
				}) === a.Kd
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.7e804ef7ac6e21d6983f.js.map