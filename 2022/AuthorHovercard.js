// https://www.redditstatic.com/desktop2x/AuthorHovercard.9b84696eddb8e46f410e.js
// Retrieved at 4/12/2022, 1:50:04 PM by Reddit Dataminer v1.0.0
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
			var a = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/intlSupport.ts");

			function s(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: s,
					locale: o = a.D
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const i = new Date(e * a.Sb);
				return r.a ? new Intl.DateTimeFormat(o, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(i) : i.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.D;
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
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return b
			}));
			const a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				d = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				c = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				m = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				b = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return ae
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return de
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.jb.GET,
				data: n
			});
			var I = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				g = n("./src/reddit/models/SubredditModeration/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				N = n("./src/reddit/selectors/bannedUser.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/subredditModeration/constants.ts"),
				E = n("./src/lib/initializeClient/installReducer.ts"),
				w = n("./node_modules/redux/es/redux.js");
			var y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.o:
					case j.n:
						return null;
					case j.m:
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
						case j.o: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(g.e)(n, a);
							return {
								...e,
								[r]: !0
							}
						}
						case j.n:
						case j.m: {
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
				P = Object(w.c)({
					error: y,
					pending: M
				});
			const U = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.n: {
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
				T = n("./src/reddit/actions/inContextModeration.ts");
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.a:
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
						case j.n: {
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
				F = n("./node_modules/icepick/icepick.js");
			const R = {};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.l:
					case j.n: {
						const {
							subredditId: n,
							bannedUsers: a
						} = t.payload;
						return Object(F.merge)(e, {
							[n]: a
						})
					}
					case j.s: {
						const {
							subredditId: n,
							userId: a
						} = t.payload;
						return Object(F.unsetIn)(e, [n, a])
					}
					default:
						return e
				}
			};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.r:
					case j.q:
						return null;
					case j.p:
						return t.payload;
					default:
						return e
				}
			};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r:
							return !0;
						case j.q:
						case j.p:
							return !1;
						default:
							return e
					}
				},
				G = Object(w.c)({
					error: W,
					pending: K
				});
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r:
						case j.p:
							return null;
						case j.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				J = Object(w.c)({
					api: G,
					result: Z
				});
			const q = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.n: {
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
						case j.s: {
							const {
								subredditId: n,
								userId: a
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== a)
							}
						}
						case j.l: {
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
				Q = Object(w.c)({
					api: P,
					fetchedTokens: A,
					inContext: B,
					loadMore: D,
					models: H,
					search: J,
					userOrder: z
				});
			Object(E.a)({
				features: {
					banned: Q
				}
			});
			const X = Object(o.a)(j.o),
				V = Object(o.a)(j.n),
				Y = Object(o.a)(j.m),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, a, r) => {
						let {
							apiContext: s
						} = r;
						const o = a(),
							i = t.after || "",
							d = Object(g.e)(e, i),
							c = o.features.banned.fetchedTokens[d];
						if (o.features.banned.api.pending[d] || c) return;
						n(X({
							subredditId: e,
							fetchedToken: i
						}));
						const l = o.subreddits.models[e].name,
							m = await x(s(), l, t);
						m.ok ? n(V({
							...m.body,
							fetchedToken: i
						})) : n(Y({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				ee = Object(o.a)(j.r),
				te = Object(o.a)(j.q),
				ne = Object(o.a)(j.p),
				ae = (e, t) => async (n, a, r) => {
					let {
						apiContext: s
					} = r;
					const o = a().subreddits.models[e].name,
						i = {
							username: Object(I.a)(t)
						};
					n(ee());
					const d = await x(s(), o, i);
					d.ok ? n(te(d.body)) : n(ne(d.error))
				}, re = Object(o.a)(j.l), se = Object(o.a)(j.s), oe = (e, t, n) => async (r, o, d) => {
					let {
						apiContext: c
					} = d;
					const m = o(),
						h = m.subreddits.models[e].url,
						v = m.subreddits.models[e].name;
					t.username = Object(I.a)(t.username), r(Object(i.h)(n));
					const g = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.jb.POST,
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
					}))(c(), h, t);
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
						const s = await x(c(), v, e);
						s.ok && r(re(s.body))
					} else {
						r(Object(i.f)(n, g.error));
						const e = s()(g, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: O.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, r, o) => {
					let {
						apiContext: i
					} = o;
					const d = r().subreddits.models[e].url,
						c = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(i(), d, t);
					if (c.ok) n(se({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: O.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: O.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, a) => {
					const r = a();
					await Promise.all([(async () => {
						if (!Object(_.b)(m.a.BAN_USER)(r) && !Object(C.P)(r, {
								subredditId: e
							})) {
							const t = Object(C.S)(r, {
								subredditId: e
							});
							await n(Object(c.o)(t.name))
						}
					})(), (async () => {
						const a = Object(k.Ab)(r, {
							userName: t
						});
						if (!a) return;
						const s = Object(N.h)(r, {
							subredditId: e
						});
						s && s[a.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(d.i)(m.a.BAN_USER))
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "a", (function() {
				return y
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./node_modules/lodash/get.js"),
				o = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t, n) => Object(d.a)(Object(c.a)(e, [l.a]), {
				endpoint: Object(m.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.jb.GET,
				data: n
			});
			var b = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				p = n("./src/reddit/models/SubredditModeration/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(r.a)(v.U),
				I = Object(r.a)(v.S),
				g = Object(r.a)(v.R),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, a, r) => {
						let {
							apiContext: s
						} = r;
						const o = a(),
							i = t.after || "",
							d = Object(p.e)(e, i),
							c = o.pages.modHub.muted.fetchedTokens[d];
						if (o.pages.modHub.muted.api.pending[d] || c) return;
						n(x({
							subredditId: e,
							fetchedToken: i
						}));
						const l = o.subreddits.models[e].name,
							m = await u(s(), l, t);
						m.ok ? n(I({
							...m.body,
							fetchedToken: i
						})) : n(g({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				_ = Object(r.a)(v.X),
				N = Object(r.a)(v.W),
				C = Object(r.a)(v.V),
				k = (e, t) => async (n, a, r) => {
					let {
						apiContext: s
					} = r;
					const o = a().subreddits.models[e].name,
						i = {
							username: Object(b.a)(t)
						};
					n(_());
					const d = await u(s(), o, i);
					d.ok ? n(N(d.body)) : n(C(d.error))
				}, j = Object(r.a)(v.T), E = Object(r.a)(v.Y), w = (e, t) => async (n, r, s) => {
					let {
						apiContext: m
					} = s;
					const u = r().subreddits.models[e].url,
						b = await ((e, t, n) => Object(d.a)(Object(c.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "muted"
							}
						}))(m(), u, t);
					if (b.ok) n(E({
						subredditId: e,
						userId: t
					}));
					else {
						const e = o()(b, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(h.f)({
							kind: f.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, y = (e, t, n) => async (r, s, m) => {
					let {
						apiContext: p
					} = m;
					const v = s(),
						x = v.subreddits.models[e].url,
						I = v.subreddits.models[e].name;
					t = Object(b.a)(t);
					const g = await ((e, t, n, a) => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.jb.POST,
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
						const n = await u(p(), I, e);
						n.ok && r(j(n.body))
					} else {
						const e = o()(g, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
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
		"./src/reddit/components/AnonymousSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				anonymousSnoovatar: "_20-K6l0lfYbSa7us2I9PHH"
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
				menuOption: "_2b0kgVBRKg4jZMW9zXrnf"
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
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(a || (a = {}));
			const m = e => {
				let {
					onStartChat: t,
					text: n,
					className: r,
					sendEvent: o,
					contextId: i,
					priority: d,
					Icon: m,
					redditStyle: u,
					isFullWidth: b,
					eventSource: p,
					onClick: f,
					onAddUserToQuickReplyList: h,
					children: v,
					style: x
				} = e;
				return s.a.createElement(c.t, {
					onClick: e => {
						if (f && f(e), t(), p === a.awardNotification) return h();
						o(Object(l.b)(i))
					},
					className: r,
					text: n,
					priority: d,
					Icon: m,
					redditStyle: u,
					isFullWidth: b,
					style: x
				}, v)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, t) => {
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
			t.b = u(Object(d.c)(m))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(l);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => s.a.createElement(i.e, null, s.a.createElement(i.i, null, s.a.createElement(c.a, null, s.a.createElement(i.q, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(i.b, null)))), s.a.createElement(i.l, null, s.a.createElement(i.p, {
				className: m.a.ModalText
			}, e.modalText)), s.a.createElement(i.g, null, !e.hideCancelButton && s.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(i.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
				I = Object(c.a)(e => {
					const {
						children: t,
						className: n,
						style: a,
						caretPosition: r,
						caretColor: o,
						onClick: i,
						hideCaret: c
					} = e;
					return s.a.createElement("div", {
						onClick: i,
						className: Object(d.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === r,
							[f.a.caretOnLeft]: "left" === r,
							[f.a.caretOnRight]: "right" === r,
							[f.a.caretOnBottom]: "bottom" === r,
							[f.a.hideCaret]: c
						}),
						style: {
							...a,
							"--contentTooltip-caretColor": o && o[r] ? o[r] : Object(u.a)(e).body
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
				O = Object(m.a)(I, [a.a.Click, a.a.Keydown]),
				_ = Object(o.b)(g);
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
					return s.a.createElement(O, h({}, this.props, {
						caretPosition: a,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = _(N)
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
				importAsync: () => Promise.all([n.e("vendors~NftProfileUnit"), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				m = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = n("./src/reddit/components/EditableImage/index.m.less"),
				b = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: n,
					className: a,
					isProfileCard: u,
					isLoading: p,
					imageUrl: f,
					onFileSelected: h
				} = e;
				const v = Object(s.e)(m.a);
				return r.a.createElement("div", {
					className: Object(o.a)(b.a.Container, a)
				}, r.a.createElement("label", {
					className: b.a.HitBox
				}, r.a.createElement("span", {
					className: b.a.ImageContainer,
					role: "presentation"
				}, f ? r.a.createElement("img", {
					alt: t,
					className: b.a.Image,
					src: f
				}) : n), r.a.createElement(i.a, {
					className: b.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						h(e, t)
					},
					isPending: v ? p : void 0
				}), !p && r.a.createElement("div", {
					className: Object(o.a)(b.a.EditButton, {
						[b.a.profileCard]: u
					})
				}, r.a.createElement(c.a, {
					name: "add_media",
					className: b.a.EditIcon
				}))), p && r.a.createElement(d.a, {
					className: b.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/selectors/commentSelector.ts"),
				m = n("./src/reddit/selectors/gold/awardIcon.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/selectors/modUserNotes.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/userFlair.ts"),
				O = n("./src/reddit/selectors/userPrefs.ts"),
				_ = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				C = n("./node_modules/fbt/lib/FbtPublic.js"),
				k = n("./src/config.ts"),
				j = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = n("./src/lib/lessComponent.tsx"),
				w = n("./src/lib/prettyPrintNumber/index.ts"),
				y = n("./src/reddit/components/ChatButton/index.tsx"),
				S = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				P = n("./src/reddit/components/SubscribeButton/index.tsx"),
				U = n("./src/reddit/components/UserIcon/index.tsx"),
				A = n("./src/reddit/endpoints/profile/info.ts"),
				T = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				B = n("./src/reddit/icons/fonts/Info/index.tsx"),
				L = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				D = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				F = n("./src/reddit/models/Gold/Award.ts"),
				R = n("./src/reddit/models/User/index.ts"),
				H = n("./src/reddit/components/HumanDate/index.tsx"),
				W = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				K = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				G = n("./src/reddit/actions/inContextModeration.ts"),
				Z = n("./src/reddit/actions/modal.ts"),
				J = n("./src/reddit/actions/subredditModeration/ban.ts"),
				q = n("./src/reddit/constants/modals.ts"),
				z = n("./src/reddit/components/Hovercards/helpers.ts"),
				Q = n("./src/reddit/icons/fonts/index.tsx"),
				X = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				V = n("./src/reddit/selectors/bannedUser.ts"),
				Y = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				$ = n.n(Y);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = Object(o.c)({
				hasModMailPermissions: Object(u.b)(X.c.mail),
				isUserBanned: (e, t) => !!Object(V.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(I.Ab)(e, {
					userName: t.username
				})
			});
			class ne extends r.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: a,
						onUnbanUser: s,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: d
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, a ? r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(T.e(t))
						}
					}, r.a.createElement(Q.a, {
						name: "ban",
						isFilled: !0,
						className: $.a.icon
					}), ee._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), o(T.a(t))
						}
					}, r.a.createElement(Q.a, {
						name: "ban",
						className: $.a.icon
					}), ee._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							d(), o(T.d(t))
						}
					}, r.a.createElement(Q.a, {
						name: "mod_mute",
						className: $.a.icon
					}), ee._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ae = Object(s.b)(te, (e, t) => {
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
							e(Object(G.c)({
								username: n,
								subredditId: a,
								contextId: r
							})), e(Object(J.a)(a, n))
						},
						toggleMuteModal: () => {
							e(Object(G.d)({
								username: n,
								subredditId: a,
								contextId: r
							})), e(Object(Z.i)(q.a.MUTE_USER))
						}
					}
				})(ne),
				re = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(re.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(T.c(e.contextId))
					}
				}, r.a.createElement(Q.a, {
					name: "tag",
					className: $.a.icon
				}), se._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ie = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				de = n.n(ie);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const le = E.a.wrapped(U.a, "UserIcon", de.a),
				me = E.a.wrapped(P.a, "SubscribeButton", de.a),
				ue = E.a.wrapped(y.b, "ChatButton", de.a),
				be = E.a.wrapped(D.a, "PremiumIcon", de.a),
				pe = E.a.wrapped(j.a, "UserNameLink", de.a),
				fe = E.a.div("UserNameMetaData", de.a),
				he = E.a.div("MetaDataItem", de.a),
				ve = E.a.div("Bullet", de.a),
				xe = E.a.div("UserNameContainer", de.a),
				Ie = E.a.div("KarmaGrid", de.a),
				ge = E.a.div("GenericKarma", de.a),
				Oe = E.a.a("InfoLink", de.a),
				_e = E.a.div("KarmaCount", de.a),
				Ne = E.a.div("GenericKarmaLabel", de.a),
				Ce = E.a.div("BannerImage", de.a),
				ke = E.a.div("UserContainer", de.a),
				je = E.a.div("BottomSpacer", de.a),
				Ee = E.a.div("Container", de.a),
				we = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(pe, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && r.a.createElement(L.a, {
					className: de.a.adminIcon,
					title: C.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(j.a, {
					to: "/premium"
				}, r.a.createElement(be, null))), r.a.createElement(fe, null, r.a.createElement(he, null, `u/${e.userName}`, r.a.createElement(ve, null, "•")), r.a.createElement(he, null, (e.user.createdUtc || e.user.created) && r.a.createElement(H.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				ye = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...A.a,
						...t
					};
					return r.a.createElement(Ie, null, r.a.createElement(ge, null, r.a.createElement(_e, null, Object(w.b)(n.fromPosts)), r.a.createElement(Ne, null, C.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [C.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(ge, null, r.a.createElement(_e, null, Object(w.b)(n.fromComments)), r.a.createElement(Ne, null, C.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [C.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), r.a.createElement(ge, null, r.a.createElement(_e, null, Object(w.b)(n.fromAwardsReceived)), r.a.createElement(Ne, null, C.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [C.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), r.a.createElement(Oe, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(B.a, {
						className: de.a.infoIcon
					})))), r.a.createElement(ge, null, r.a.createElement(_e, null, Object(w.b)(n.fromAwardsGiven)), r.a.createElement(Ne, null, C.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [C.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), r.a.createElement(Oe, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(B.a, {
						className: de.a.infoIcon
					})))))
				},
				Se = e => {
					var t, n;
					const {
						className: a,
						contextId: s,
						currentUser: o,
						hideNSFWPref: i,
						hoverId: d,
						isLoggedIn: c,
						onClickSnoovatar: l,
						moderatorPermissions: m,
						prefersReducedAnimations: u,
						profile: b,
						sendEvent: p,
						style: f,
						subredditId: h,
						topAwardIcon: v,
						userName: x,
						user: I,
						userFlair: g,
						isCurrentUserBanned: O,
						userProfileStyles: _,
						acceptChats: N,
						isCommentAuthorBlocked: j
					} = e;
					if (!I) return r.a.createElement(Ee, {
						style: f
					});
					const E = !!o && Object(R.e)(o) === x,
						w = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						y = I.accountIcon || `${k.a.assetPath}/img/snoo_user_placeholder.png`,
						M = null == m ? void 0 : m.flair,
						P = null == m ? void 0 : m.access,
						U = (null == g ? void 0 : g.templateIds) && (null === (t = null == g ? void 0 : g.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						A = null === (n = null == g ? void 0 : g.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: B
						} = I,
						L = !!I.snoovatarFullBodyAsset,
						D = I.isNSFW && i;
					let F;
					return F = L ? !D && _ && _.bannerBackgroundImage || void 0 : D ? `${k.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(Ee, {
						className: a,
						id: d,
						style: f
					}, !L && F && r.a.createElement(Ce, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), r.a.createElement(ke, null, L ? r.a.createElement(K.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: w,
						isEmployee: I.isEmployee,
						isGold: I.isGold,
						isNSFW: I.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!u,
						snoovatarUrl: I.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: I.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(xe, null, r.a.createElement(le, {
						iconUrl: y,
						isNSFW: I.isNSFW,
						userName: x
					}), r.a.createElement(we, {
						title: null == b ? void 0 : b.title,
						user: I,
						userName: x
					})), r.a.createElement(ye, {
						user: I
					}), B && r.a.createElement(W.a, {
						recentAwardings: B,
						topAwardIcon: v,
						username: x
					}), c && !E && !O && N && !j && r.a.createElement(ue, {
						contextId: s,
						userId: I.id,
						text: C.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), I.hasUserProfile && !O && !j && !E && I.enableFollowers && r.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(T.h)(e ? "unfollow" : "follow", s),
						isFullWidth: !0,
						small: !0
					})), P && s && !E && h && r.a.createElement(ae, {
						contextId: s,
						subredditId: h,
						sendEvent: p,
						username: x
					}), M && s && U && A && h && r.a.createElement(oe, {
						contextId: s,
						subredditId: h,
						sendEvent: p,
						username: x
					}), r.a.createElement(S.i, {
						contextId: s,
						subredditId: h,
						user: I
					}), !(P || c) && r.a.createElement(je, null))
				},
				Me = Object(M.a)(Se),
				Pe = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Me, ce({
						isOpen: t
					}, e))
				};
			Pe.WrappedComponent = Se;
			var Ue = Pe;
			const Ae = Object(o.c)({
					activeTooltipId: x.a,
					currentUser: I.k,
					isLoggedIn: I.Q,
					hideNSFWPref: I.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(u.n)(e, {
							subredditId: n
						}) : void 0
					},
					prefersReducedAnimations: O.c,
					profile: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(f.j)(e, {
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
					user: I.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(g.d)(e, {
							subredditId: n
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(v.l)(t) && Object(v.db)(e, t),
					userProfileStyles: (e, t) => Object(h.m)(e, Object(f.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(f.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						const a = Object(_.e)(e),
							r = n || a && Object(v.D)(e, a.name);
						return !!r && Object(u.i)(e, r)
					},
					trophyCase: (e, t) => Object(f.r)(e, Object(f.m)(e, t.userName)),
					isNightMode: I.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(c.a)(t.contextId) ? Object(p.G)(e, {
							postId: t.contextId
						}) : Object(l.b)(e, {
							commentId: t.contextId
						});
						return Object(b.a)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(v.eb)(e, {
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
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Te(e => e.isModWithUserNotesPermissions ? r.a.createElement(N.b, {
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
			}) : r.a.createElement(Ue, {
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
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/profile/index.ts"),
				i = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/helpers/isComment.ts"),
				m = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/trackers/modNote.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/actions/subreddit.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/lib/localStorageAvailable/index.ts"),
				x = n("./src/reddit/helpers/localStorage/index.ts"),
				I = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				g = n("./src/reddit/constants/keycodes.ts"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Checkbox/index.tsx"),
				N = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/ModUserNotes/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				w = n.n(E),
				y = n("./src/redditGQL/types.ts");
			const S = Object(h.a)(I.b),
				M = ["NONE", y.r.AbuseWarning, y.r.SpamWarning, y.r.SpamWatch, y.r.SolidContributor, y.r.HelpfulUser],
				P = {
					...k.f,
					NONE: () => f.fbt._("None", null, {
						hk: "2r9MPM"
					})
				};
			var U = e => {
					const {
						className: t,
						filter: n,
						subredditId: o,
						userId: d,
						thingId: l
					} = e, [u, b] = Object(a.useState)(), [p, h] = Object(a.useState)(!0), [I, E] = Object(a.useState)(""), [y, U] = Object(a.useState)(!1), A = Object(s.e)(j.db);
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
							E(e && e[d] ? e[d] : "")
						}
					}, [d]);
					const T = Object(s.d)(),
						B = Object(a.useCallback)(e => {
							E(e), Object(x.Fb)("modnote-draft", {
								[d]: e
							})
						}, [E, d]),
						L = Object(a.useCallback)(e => {
							e.stopPropagation(), T(Object(i.a)(o, d, I, n, u, p ? l : void 0)), b(void 0), B("")
						}, [T, o, B, I, d, u, p, l, n]),
						D = Object(a.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== g.a.Enter || e.shiftKey || (e.preventDefault(), L(e))
						}, [L]),
						F = u ? P[u]() : P.NONE(),
						R = u ? u && Object(C.b)(k.e[u], {
							isFilled: !0
						}) : void 0,
						H = u && k.d[u];
					return r.a.createElement("div", {
						className: Object(c.a)(t)
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
								...H && {
									color: H
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: M.map(e => {
							const t = P[e](),
								n = "NONE" === e ? void 0 : Object(C.b)(k.e[e], {
									isFilled: !0
								}),
								a = k.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !u : u === e,
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
					}, r.a.createElement(_.a, {
						className: w.a.checkbox,
						isCheckboxSelected: p,
						toggleCheckbox: () => h(!p)
					}), l && Object(m.a)(l) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), r.a.createElement("span", {
						className: w.a.textareaContainer
					}, r.a.createElement("textarea", {
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(c.a)(w.a.textarea, {
							[w.a.isNightMode]: A
						}),
						onChange: e => B(e.target.value),
						onKeyDown: D,
						onClick: e => e.stopPropagation(),
						placeholder: f.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: I,
						maxLength: 250
					}), r.a.createElement(S, {
						isOpen: y
					}, r.a.createElement("div", {
						className: w.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), r.a.createElement("div", {
						className: w.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), r.a.createElement(O.t, {
						className: Object(c.a)(w.a.sendButton, {
							[w.a.isNightMode]: A,
							[w.a.isDisabled]: 0 === I.length
						}),
						disabled: 0 === I.length,
						Icon: () => r.a.createElement(C.a, {
							className: Object(c.a)(w.a.iconSend, {
								[w.a.isDisabled]: 0 === I.length
							}),
							name: "send",
							isFilled: !0
						}),
						size: O.d.XS,
						iconPosition: O.h.C,
						onClick: L,
						onMouseEnter: () => U(!0),
						onMouseLeave: () => U(!1),
						style: 0 === I.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				A = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/components/SubredditIcon/index.tsx"),
				B = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				L = n.n(B);
			const D = [y.k.All, y.k.Note, y.k.Invite, y.k.Ban, y.k.Mute, y.k.ContentChange, y.k.Removal, y.k.Approval, y.k.Spam, y.k.ModAction],
				F = {
					[y.k.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[y.k.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[y.k.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[y.k.Ban]: () => f.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[y.k.Mute]: () => f.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[y.k.ContentChange]: () => f.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[y.k.Removal]: () => f.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[y.k.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[y.k.ModAction]: () => f.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[y.k.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				R = {
					[y.k.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[y.k.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[y.k.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[y.k.Ban]: () => f.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[y.k.Mute]: () => f.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[y.k.ContentChange]: () => f.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[y.k.Removal]: () => f.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[y.k.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[y.k.ModAction]: () => f.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[y.k.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var H = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						onChangeSubredditId: i,
						filter: d,
						onChangeFilter: l,
						onChangeView: m
					} = e, p = Object(b.a)(), h = Object(s.e)(e => Object(A.o)(e, void 0)), v = h.find(e => e.id === n), x = R[d](), I = Object(C.b)("back_fill"), g = Object(a.useCallback)(() => p(Object(u.m)({
						userId: o,
						subredditId: n
					})), [o, n, p]), O = Object(a.useCallback)(e => {
						i(e.value), p(Object(u.t)({
							userId: o,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [o, n, p, i]), _ = Object(a.useCallback)(() => p(Object(u.n)({
						userId: o,
						subredditId: n
					})), [o, n, p]), k = Object(a.useCallback)(e => {
						l(e.value), p(Object(u.u)({
							userId: o,
							subredditId: n,
							filteredType: e.value
						}))
					}, [o, n, p, l]);
					return r.a.createElement("div", {
						className: Object(c.a)(t, L.a.wrapper),
						role: "navigation"
					}, r.a.createElement("div", {
						className: L.a.backWrapper
					}, r.a.createElement("button", {
						"aria-label": f.fbt._("Back", null, {
							hk: "3ojpRo"
						}),
						className: L.a.backButton,
						onClick: m
					}, r.a.createElement(I, null))), v && h.length && r.a.createElement("div", {
						className: L.a.subredditsWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, r.a.createElement(N.b, {
						id: "subredditFilter",
						className: L.a.subreddits,
						buttonClassName: L.a.dropdownButton,
						buttonIcon: r.a.createElement(T.b, {
							className: L.a.subredditIcon,
							subredditOrProfile: v
						}),
						disabled: 1 === h.length,
						menuItemsClassName: L.a.menuItems,
						menuOptionClassName: L.a.menuOption,
						displayText: `r/${v.name}`,
						options: h.map(e => ({
							displayText: `r/${e.name}`,
							value: e.id,
							isSelected: e.id === n,
							icon: r.a.createElement(T.b, {
								className: L.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: g,
						onSelect: O,
						showSelectedCheckmark: !0
					})), r.a.createElement("div", {
						className: L.a.typesWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, r.a.createElement(N.b, {
						id: "typeFilter",
						className: L.a.types,
						buttonClassName: L.a.dropdownButton,
						menuItemsClassName: L.a.menuItems,
						menuOptionClassName: L.a.menuOption,
						displayText: x,
						options: D.map(e => ({
							displayText: F[e](),
							value: e,
							isSelected: e === d
						})),
						onOpen: _,
						onSelect: k,
						showSelectedCheckmark: !0
					})))
				},
				W = n("./src/lib/fastdom/index.ts"),
				K = n("./src/lib/constants/colors.ts"),
				G = n("./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less"),
				Z = n.n(G),
				J = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less"),
				q = n.n(J);
			const z = {
					[y.j.AddRemovalReason]: "remove",
					[y.j.AcceptModeratorInvite]: "mod",
					[y.j.AddContributor]: "user",
					[y.j.ApproveLink]: "approve",
					[y.j.ApproveComment]: "approve",
					[y.j.AddContributor]: "user",
					[y.j.AddModerator]: "mod",
					[y.j.BanUser]: "ban",
					[y.j.InviteModerator]: "mod",
					[y.j.MuteUser]: "mod_mute",
					[y.j.RemoveComment]: "remove",
					[y.j.RemoveContributor]: "block",
					[y.j.RemoveLink]: "remove",
					[y.j.RemoveModerator]: "unmod",
					[y.j.RemoveWikiContributor]: "wiki_ban",
					[y.j.SpamComment]: "spam",
					[y.j.SpamLink]: "spam",
					[y.j.Spoiler]: "spoiler",
					[y.j.Sticky]: "pin",
					[y.j.UnbanUser]: "unban",
					[y.j.UninviteModerator]: "unmod",
					[y.j.UnmuteUser]: "mod_unmute",
					[y.j.Unspoiler]: "spoiler",
					[y.j.Unsticky]: "unpin",
					[y.j.WikiBanned]: "wiki_ban",
					[y.j.WikiContributor]: "wiki",
					[y.j.WikiUnbanned]: "wiki_unban"
				},
				Q = {
					[y.r.Ban]: "ban",
					[y.r.BotBan]: "bot",
					[y.r.PermaBan]: "block"
				};
			var X = e => {
					const {
						className: t,
						actionType: n,
						label: a
					} = e, s = n ? z[n] || "mod" : a && Q[a] || "user_note";
					if (!s) return null;
					const o = Object(C.b)(s);
					return r.a.createElement(o, {
						className: Object(c.a)(t, q.a.icon)
					})
				},
				V = n("./src/reddit/selectors/activeModalId.ts"),
				Y = n("./src/reddit/actions/modal.ts"),
				$ = n("./src/reddit/hooks/useLocale.ts"),
				ee = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				te = n("./src/reddit/controls/InternalLink/index.tsx"),
				ne = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less"),
				ae = n.n(ne);
			var re = e => {
					const {
						className: t,
						deleteClassName: n,
						modNote: o,
						onClickUsername: d,
						subredditId: l
					} = e, m = Object(s.d)(), {
						user: p,
						id: h,
						itemType: v
					} = o, x = `ModUserNote--Modal--DeleteConfirmation--${h}`, I = Object(b.a)(), g = Object(a.useCallback)(() => m(Object(Y.i)(x)), [m, x]), O = Object(a.useCallback)(() => {
						v && m(Object(i.b)(l, p.id, h, v)), I(Object(u.b)({
							subredditId: l,
							modNote: o
						}))
					}, [m, p.id, h, v, l, I, o]), _ = Object(a.useCallback)(() => {
						v && m(Object(i.b)(l, p.id, h, v)), I(Object(u.c)({
							subredditId: l,
							modNote: o
						}))
					}, [m, p.id, h, v, l, I, o]), N = Object(a.useCallback)(() => {
						g(), I(Object(u.j)({
							subredditId: l,
							modNote: o
						}))
					}, [l, I, o, g]), C = Object(s.e)(e => Object(V.a)(e) === x), k = Object($.a)(), j = new Intl.DateTimeFormat(k, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(o.createdAt)), E = o.itemType === y.l.Note;
					return r.a.createElement("div", {
						className: Object(c.a)(t, ae.a.metadata)
					}, o.operator && r.a.createElement(te.a, {
						className: ae.a.operator,
						to: `/user/${o.operator.displayName}/`,
						onClick: d
					}, "u/", o.operator.displayName), r.a.createElement("span", {
						className: ae.a.createdDate
					}, f.fbt._("on {createdDate}", [f.fbt._param("createdDate", j)], {
						hk: "2VoP7K"
					})), E && r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						className: Object(c.a)(n, ae.a.deleteButton),
						onClick: N
					}, f.fbt._("Delete", null, {
						hk: "4lt26q"
					})), C && r.a.createElement(ee.a, {
						actionText: f.fbt._("Yes, Delete", null, {
							hk: "3kB0Hd"
						}),
						headerText: f.fbt._("Delete this note?", null, {
							hk: "bGAxq"
						}),
						modalText: f.fbt._("This mod note will be permanently deleted.", null, {
							hk: "DFQi2"
						}),
						onConfirm: _,
						onCancel: O,
						toggleModal: g,
						withOverlay: !0
					})))
				},
				se = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				oe = n.n(se);
			var ie = e => {
					let {
						className: t,
						modNote: n,
						onClickLinked: a
					} = e;
					var o, i;
					const d = Object(s.e)(j.db),
						l = "label" in n && n.label || k.c,
						m = "note" in n ? n.note : void 0,
						u = Object(C.b)(k.e[l || "bot"], {
							isFilled: !0
						}),
						b = ![k.c, y.r.BotBan, y.r.PermaBan, y.r.Ban].includes(l),
						p = n.postInfo ? null === (o = n.postInfo) || void 0 === o ? void 0 : o.permalink : n.commentInfo ? null === (i = n.commentInfo) || void 0 === i ? void 0 : i.permalink : void 0,
						f = Object(C.b)("external_link_fill");
					return m ? r.a.createElement("div", {
						className: Object(c.a)(t, oe.a.modNote),
						onClick: e => e.stopPropagation(),
						style: l ? {
							backgroundColor: d ? k.b[l] : k.a[l]
						} : {}
					}, b && r.a.createElement("div", {
						className: oe.a.header
					}, r.a.createElement(u, {
						className: oe.a.labelIcon,
						style: {
							color: k.d[l]
						}
					}), r.a.createElement("span", {
						className: oe.a.label
					}, k.f[l]())), m && r.a.createElement("div", {
						className: oe.a.note
					}, m), p && r.a.createElement("a", {
						className: oe.a.link,
						href: p || "",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: a
					}, r.a.createElement(f, {
						className: oe.a.linkIcon
					}))) : null
				},
				de = n("./src/lib/constants/index.ts"),
				ce = n("./src/lib/prettyPrintNumber/index.ts"),
				le = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				me = n.n(le);
			var ue = e => {
					let {
						className: t,
						postInfo: n,
						commentInfo: a,
						onClick: s
					} = e;
					var o, i, d, l;
					if (!n && !a) return null;
					if (a && "Comment" !== a.__typename) return r.a.createElement("div", {
						className: Object(c.a)(t, me.a.preview)
					}, r.a.createElement("div", {
						className: me.a.content
					}, r.a.createElement("h6", {
						className: me.a.title
					}, de.Lb)));
					const m = n ? n.permalink : a ? a.permalink : void 0,
						u = (null == n ? void 0 : n.title) || (null === (i = null === (o = a) || void 0 === o ? void 0 : o.content) || void 0 === i ? void 0 : i.markdown),
						b = n ? n.score || 0 : a && a.score || 0,
						p = (null == n ? void 0 : n.commentCount) || 0;
					return r.a.createElement("a", {
						className: Object(c.a)(t, me.a.preview),
						href: m || "",
						onClick: s,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement("div", {
						className: me.a.content
					}, u && r.a.createElement("h6", {
						className: me.a.title
					}, u), r.a.createElement("div", {
						className: me.a.meta
					}, r.a.createElement("span", null, f.fbt._({
						"*": "{pointsCount} Points",
						_1: "{pointsCount} Point"
					}, [f.fbt._param("pointsCount", Object(ce.b)(b)), f.fbt._plural(b)], {
						hk: "47CFCp"
					})), !!p && r.a.createElement(r.a.Fragment, null, " · ", r.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(p, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (d = null == n ? void 0 : n.thumbnail) || void 0 === d ? void 0 : d.url) && r.a.createElement("div", {
						className: me.a.thumbnail
					}, r.a.createElement("img", {
						className: me.a.thumbnailImage,
						src: null === (l = n.thumbnail) || void 0 === l ? void 0 : l.url
					})))
				},
				be = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				pe = n.n(be);
			const fe = {
					[y.j.AddRemovalReason]: e => {
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
					[y.j.BanUser]: e => {
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
				he = {
					[y.j.AcceptModeratorInvite]: () => f.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[y.j.AddContributor]: () => f.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[y.j.AddModerator]: () => f.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[y.j.ApproveComment]: () => f.fbt._("Comment was approved", null, {
						hk: "3yCRAS"
					}),
					[y.j.ApproveLink]: () => f.fbt._("Post was approved", null, {
						hk: "6tcjn"
					}),
					[y.j.BanUser]: e => {
						const {
							banReason: t
						} = e;
						return t
					},
					[y.j.AddRemovalReason]: e => {
						const {
							description: t
						} = e;
						return t
					},
					[y.j.InviteModerator]: () => f.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[y.j.MuteUser]: () => f.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[y.j.RemoveComment]: () => f.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[y.j.RemoveContributor]: () => f.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[y.j.RemoveLink]: () => f.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[y.j.RemoveModerator]: () => f.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[y.j.RemoveWikiContributor]: () => f.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[y.j.SpamComment]: () => f.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[y.j.SpamLink]: () => f.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[y.j.Spoiler]: () => f.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[y.j.Sticky]: () => f.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[y.j.UnbanUser]: () => f.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[y.j.UninviteModerator]: () => f.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[y.j.UnmuteUser]: () => f.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[y.j.Unspoiler]: () => f.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[y.j.Unsticky]: () => f.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[y.j.WikiBanned]: () => f.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[y.j.WikiContributor]: () => f.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[y.j.WikiUnbanned]: () => f.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				ve = {
					[y.r.Ban]: () => f.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[y.r.BotBan]: () => f.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[y.r.PermaBan]: () => f.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var xe = e => {
				const {
					className: t,
					modNote: n
				} = e, {
					actionType: a
				} = n, {
					label: s
				} = n, o = a ? he[a] ? he[a](n) : null : s && ve[s] ? ve[s]() : null, i = a && fe[a] ? fe[a](n) : null;
				return r.a.createElement(r.a.Fragment, null, i ? r.a.createElement("h4", {
					className: Object(c.a)(t, pe.a.subTitle)
				}, i) : null, o ? r.a.createElement("h3", {
					className: Object(c.a)(t, pe.a.title)
				}, o) : null)
			};
			var Ie = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, a = Object(s.e)(j.db), o = Object(b.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return r.a.createElement("div", {
						className: Object(c.a)(Z.a.wrapper, e.className)
					}, r.a.createElement("div", {
						key: "aa",
						className: Z.a.iconWrapper,
						style: {
							background: a ? K.a.orca700 : K.a.narwhal100
						}
					}, r.a.createElement(X, {
						className: Z.a.icon,
						actionType: t.actionType,
						label: t.label
					})), r.a.createElement("div", {
						className: Z.a.content,
						key: "ba"
					}, r.a.createElement(xe, {
						modNote: t,
						className: Z.a.title
					}), r.a.createElement(ie, {
						className: Z.a.note,
						modNote: t,
						onClickLinked: () => o(Object(u.d)({
							subredditId: n,
							modNote: t
						}))
					}), r.a.createElement(re, {
						className: Z.a.metaData,
						deleteClassName: Z.a.metaDataDelete,
						subredditId: n,
						modNote: t,
						onClickUsername: () => o(Object(u.q)({
							subredditId: n,
							modNote: t
						}))
					}), i && r.a.createElement(ue, {
						className: Z.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => o(Object(u.h)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				ge = n("./src/reddit/hooks/useScrollGradient.ts"),
				Oe = n("./src/reddit/selectors/modUserNotes.ts"),
				_e = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				Ne = n.n(_e);
			var Ce = e => {
					const t = {
							[y.k.Note]: f.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[y.k.Approval]: f.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[y.k.Removal]: f.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[y.k.Ban]: f.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[y.k.Mute]: f.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[y.k.Invite]: f.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[y.k.Spam]: f.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[y.k.ContentChange]: f.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[y.k.ModAction]: f.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[y.k.All]: f.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[y.k.Note]: "user_note",
							[y.k.Approval]: "approve",
							[y.k.Removal]: "remove",
							[y.k.Ban]: "ban",
							[y.k.Mute]: "mod_mute",
							[y.k.Invite]: "user",
							[y.k.Spam]: "spam",
							[y.k.ContentChange]: "pin",
							[y.k.ModAction]: "mod",
							[y.k.All]: "mod"
						},
						{
							className: a,
							subredditId: o,
							userId: i,
							filter: d
						} = e,
						l = Object(s.e)(e => Object(j.zb)(e, {
							userId: i
						})),
						m = Object(s.e)(e => Object(A.S)(e, {
							subredditId: o
						})),
						u = t[d],
						b = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", u)], {
							hk: "1NhVUh"
						}),
						p = m && l ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", l.username), f.fbt._param("subreddit name", m.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(C.b)(n[d]);
					return r.a.createElement("div", {
						className: Object(c.a)(a, Ne.a.container)
					}, r.a.createElement(h, {
						className: Ne.a.icon
					}), r.a.createElement("p", {
						className: Ne.a.mainLine
					}, `${b} ${p}`), d === y.k.Note && r.a.createElement("p", {
						className: Ne.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				ke = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				je = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				Ee = n.n(je),
				we = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var ye = e => r.a.createElement("div", {
					className: Object(c.a)(Ee.a.wrapper, e.className)
				}, r.a.createElement("div", {
					key: "d",
					className: Object(c.a)(Ee.a.icon, Object(we.a)(e))
				}), r.a.createElement("div", {
					key: "e",
					className: Ee.a.content
				}, r.a.createElement("div", {
					key: "ea",
					className: Object(c.a)(Ee.a.title, Object(we.b)(e))
				}), r.a.createElement("div", {
					key: "eb",
					className: Object(c.a)(Ee.a.body, Object(we.b)(e))
				}), r.a.createElement("div", {
					key: "ec",
					className: Object(c.a)(Ee.a.meta, Object(we.b)(e))
				}))),
				Se = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				Me = n.n(Se);
			var Pe = e => {
					const {
						className: t,
						isLoading: n,
						apiError: a,
						onTryAgain: s
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)(t, Me.a.placeholder)
					}, r.a.createElement(ye, {
						className: Me.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(ye, {
						className: Me.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(ye, {
						className: Me.a.placeholderLine,
						isLoading: n
					}), !!a && r.a.createElement(ke.a, {
						apiError: a,
						onTryAgain: s
					}))
				},
				Ue = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				Ae = n.n(Ue);
			var Te = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						filter: d
					} = e, l = Object(s.d)(), m = Object(s.e)(j.db), [u, b] = Object(a.useState)(!0);
					Object(a.useEffect)(() => {
						setTimeout(() => b(!1), 0)
					}, []);
					const {
						container: p,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(ge.b)(!1, ge.a.Top), v = Object(s.e)(e => Object(Oe.e)(e, {
						subredditId: n,
						userId: o,
						filter: d
					})), x = Object(s.e)(e => Object(Oe.c)(e, {
						subredditId: n,
						userId: o,
						filter: d
					})), I = Object(s.e)(e => Object(Oe.d)(e, {
						subredditId: n,
						userId: o,
						filter: d
					})), g = Object(s.e)(Oe.b), O = !!v.length, _ = !!x && !I && !g, N = e => l(Object(i.f)({
						subredditId: n,
						userId: o,
						filter: d,
						before: e
					}));
					return r.a.createElement(r.a.Fragment, null, O && r.a.createElement("div", {
						className: Object(c.a)(t, Ae.a.wrapper)
					}, r.a.createElement("div", {
						className: Object(c.a)(Ae.a.scrollGradient, {
							[Ae.a.visible]: _ || I || f,
							[Ae.a.isNightMode]: m
						})
					}), r.a.createElement("div", {
						className: Ae.a.list,
						ref: p,
						onScroll: () => {
							W.a.read(() => {
								if (null == p ? void 0 : p.current) {
									h();
									const e = p.current,
										{
											scrollTop: t,
											offsetHeight: n,
											scrollHeight: a
										} = e;
									n - a >= t && _ && !I && N(x)
								}
							})
						}
					}, v.map(e => r.a.createElement(Ie, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (I || g) && r.a.createElement(Pe, {
						isLoading: I,
						apiError: g,
						onTryAgain: () => {
							x && N(x)
						}
					}))), !O && !I && !u && r.a.createElement(Ce, {
						className: Object(c.a)(t, Ae.a.wrapper, Ae.a.noItems),
						subredditId: n,
						userId: o,
						filter: d
					}), !O && (I || u) && r.a.createElement("div", {
						className: Object(c.a)(t, Ae.a.wrapper)
					}))
				},
				Be = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Le = n.n(Be);
			const {
				fbt: De
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Fe = e => {
					const t = Object(s.d)(),
						{
							className: n,
							subredditId: o,
							userId: d,
							onChangeView: f,
							defaultTypeFilter: h,
							thingId: v
						} = e,
						[x, I] = Object(a.useState)(h || y.k.All),
						[g, O] = Object(a.useState)(o),
						_ = Object(s.e)(j.db),
						N = Object(b.a)(),
						C = e => {
							t(Object(i.f)({
								subredditId: g,
								userId: d,
								filter: x,
								...e
							}))
						},
						k = x === y.k.All || x === y.k.Note;
					Object(a.useEffect)(() => {
						C(), t(Object(p.q)())
					}, []);
					const E = {
						subredditId: o,
						userId: d,
						...v && Object(l.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(m.a)(v) ? {
							postId: v
						} : null
					};
					return Object(a.useEffect)(() => (N(Object(u.y)(E)), () => N(Object(u.s)(E))), []), r.a.createElement("div", {
						className: Object(c.a)(n, Le.a.wrapper, {
							[Le.a.isNightMode]: _
						}),
						onClick: e => e.stopPropagation()
					}, r.a.createElement(H, {
						className: Le.a.filters,
						subredditId: g,
						userId: d,
						onChangeSubredditId: e => {
							O(e), C({
								subredditId: e
							})
						},
						filter: x,
						onChangeFilter: e => {
							I(e), C({
								filter: e
							})
						},
						onChangeView: f
					}), r.a.createElement(Te, {
						className: Le.a.list,
						subredditId: g,
						userId: d,
						filter: x
					}), k && r.a.createElement(U, {
						className: Le.a.form,
						filter: x,
						subredditId: o,
						userId: d,
						thingId: v
					}))
				},
				Re = n("./src/reddit/components/ContentTooltip/index.tsx"),
				He = n("./src/config.ts"),
				We = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Ke = n("./src/lib/opener/index.ts"),
				Ge = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				Ze = n.n(Ge);
			var Je = e => r.a.createElement("img", {
					className: Object(c.a)(e.className, Ze.a.anonymousSnoovatar),
					src: `${He.a.assetPath}/img/anonymous_snoo.png`
				}),
				qe = n("./src/reddit/components/ChatButton/index.tsx"),
				ze = n("./src/reddit/components/HumanDate/index.tsx"),
				Qe = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Xe = n("./src/reddit/components/ModNoteItem/index.tsx"),
				Ve = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Ye = n("./src/reddit/components/UserIcon/index.tsx"),
				$e = n("./src/reddit/endpoints/profile/info.ts"),
				et = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				tt = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				nt = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				at = n("./src/reddit/models/User/index.ts"),
				rt = n("./src/reddit/selectors/gold/awardIcon.ts"),
				st = n("./src/reddit/constants/modals.ts"),
				ot = n("./src/reddit/actions/inContextModeration.ts"),
				it = n("./src/reddit/actions/subredditModeration/index.ts"),
				dt = n("./src/reddit/actions/subredditModeration/ban.ts"),
				ct = n("./src/reddit/actions/subredditModeration/mute.ts"),
				lt = n("./src/reddit/actions/userFlair/index.ts"),
				mt = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ut = n("./src/reddit/selectors/bannedUser.ts"),
				bt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				pt = n("./src/reddit/selectors/muted.ts"),
				ft = n("./src/reddit/selectors/subredditModeration.ts"),
				ht = n("./src/reddit/selectors/userFlair.ts"),
				vt = n("./src/reddit/components/Hovercards/helpers.ts"),
				xt = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less"),
				It = n.n(xt);
			const {
				fbt: gt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ot;
			! function(e) {
				e.ModLog = "ModLog", e.Ban = "Ban", e.Unban = "Unban", e.AddNote = "AddNote", e.Mute = "Mute", e.Unmute = "Unmute", e.Flair = "Flair", e.Modmail = "Modmail"
			}(Ot || (Ot = {}));
			var _t = e => {
					var t, n;
					const o = Object(b.a)(),
						i = Object(s.d)(),
						{
							className: d,
							contextId: c,
							subredditId: l,
							username: m,
							onChangeView: p
						} = e,
						f = Object(s.e)(e => l ? Object(ht.d)(e, {
							subredditId: l
						}) : void 0),
						h = !!(null == f ? void 0 : f.templateIds) && (null === (t = null == f ? void 0 : f.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						v = !!(null === (n = null == f ? void 0 : f.displaySettings) || void 0 === n ? void 0 : n.isEnabled),
						x = Object(s.e)(t => Object(bt.b)(mt.c.access)(t, e)),
						I = Object(s.e)(t => Object(bt.b)(mt.c.mail)(t, e)),
						g = Object(s.e)(t => Object(bt.b)(mt.c.flair)(t, e)),
						O = Object(s.e)(e => Object(j.Ab)(e, {
							userName: m
						})),
						_ = Object(s.e)(e => !!Object(ut.b)(e, {
							subredditId: l,
							username: m
						})),
						N = Object(s.e)(e => Object(pt.a)(e, l, O.id)),
						k = Object(s.e)(e => Object(ft.g)(e, l, O.id)),
						E = Object(s.e)(j.k),
						w = !!E && Object(at.e)(E) === m,
						S = Object(s.e)(e => l ? e.subreddits.models[l] : null),
						M = Object(s.e)(e => {
							if (c) return Object(Oe.f)(e, O.id, l)
						}),
						P = Object(a.useCallback)(() => {
							i(Object(it.g)(l))
						}, [i, l]),
						U = Object(a.useCallback)(() => {
							i(Object(dt.c)(l, {
								username: m
							}))
						}, [i, l, m]),
						A = Object(a.useCallback)(() => {
							i(Object(dt.e)(l, O.id)), o(et.e(c))
						}, [O.id, l, i, c, o]),
						T = Object(a.useCallback)(() => {
							i(Object(ot.c)({
								username: m,
								subredditId: l,
								contextId: c
							})), i(Object(dt.a)(l, m)), o(et.a(c))
						}, [o, i, m, l, c]),
						B = Object(a.useCallback)(() => {
							i(Object(ct.b)(l))
						}, [i, l]),
						L = Object(a.useCallback)(() => {
							i(Object(ot.d)({
								username: m,
								subredditId: l,
								contextId: c
							})), i(Object(Y.i)(st.a.MUTE_USER)), o(et.d(c))
						}, [o, i, m, l, c]),
						D = Object(a.useCallback)(() => {
							i(Object(ct.d)(l, O.id)), o(et.f(c))
						}, [o, i, O.id, l, c]),
						F = Object(a.useCallback)(() => {
							i(Object(lt.g)(l, m)), o(et.c(c))
						}, [o, i, m, l, c]),
						R = Object(a.useCallback)(() => l && o(Object(u.l)({
							subredditId: l,
							userId: O.id
						})), [l, O, o]),
						H = Object(a.useCallback)(e => {
							e.stopPropagation(), p && p(), l && o(Object(u.k)({
								subredditId: l,
								userId: O.id
							}))
						}, [l, O, o, p]),
						W = Object(a.useCallback)(e => {
							e.stopPropagation(), p && p(y.k.Note), l && o(Object(u.a)({
								subredditId: l,
								userId: O.id
							}))
						}, [l, O, o, p]);
					if (Object(a.useEffect)(() => {
							O && (P(), B(), !O.isSuspended && U())
						}, [O]), !O) return null;
					const K = S && m ? `?toSubredditName=${S.name}&toUserName=${m}` : "",
						G = {
							[Ot.ModLog]: x,
							[Ot.Ban]: !O.isSuspended && x && !w && _,
							[Ot.Unban]: !O.isSuspended && x && !w && !_,
							[Ot.AddNote]: x,
							[Ot.Mute]: !O.isSuspended && !N && !k && !w && x && I,
							[Ot.Unmute]: !O.isSuspended && N && !k && !w && x && I,
							[Ot.Flair]: g && h && v,
							[Ot.Modmail]: I
						};
					return r.a.createElement("div", {
						className: d
					}, G[Ot.ModLog] && r.a.createElement(vt.a, {
						role: "button",
						onClick: H,
						className: It.a.item
					}, r.a.createElement(C.a, {
						name: "mod",
						className: It.a.icon
					}), gt._("User Mod Log", null, {
						hk: "2PiT0s"
					}), !!M && r.a.createElement("span", {
						className: It.a.notesCount
					}, M)), G[Ot.AddNote] && r.a.createElement(vt.a, {
						role: "button",
						onClick: W,
						className: It.a.item
					}, r.a.createElement(C.a, {
						name: "user_note",
						className: It.a.icon
					}), gt._("Add Note", null, {
						hk: "34JqdA"
					})), G[Ot.Ban] && r.a.createElement(vt.a, {
						role: "button",
						onClick: A,
						className: It.a.item
					}, r.a.createElement(C.a, {
						name: "unban",
						className: It.a.icon
					}), gt._("Unban User", null, {
						hk: "1aASyW"
					})), G[Ot.Unban] && r.a.createElement(vt.a, {
						role: "button",
						onClick: T,
						className: It.a.item
					}, r.a.createElement(C.a, {
						name: "ban",
						className: It.a.icon
					}), gt._("Ban User", null, {
						hk: "3OhuLx"
					})), G[Ot.Mute] && r.a.createElement(vt.a, {
						role: "button",
						onClick: L,
						className: It.a.item
					}, r.a.createElement(C.a, {
						name: "mod_mute",
						className: It.a.icon
					}), gt._("Mute User", null, {
						hk: "3MCujH"
					})), G[Ot.Unmute] && r.a.createElement(vt.a, {
						role: "button",
						onClick: D,
						className: It.a.item
					}, r.a.createElement(C.a, {
						name: "mod_unmute",
						className: It.a.icon
					}), gt._("Unmute User", null, {
						hk: "sBvvx"
					})), G[Ot.Flair] && r.a.createElement(vt.a, {
						role: "button",
						onClick: F,
						className: It.a.item
					}, r.a.createElement(C.a, {
						name: "tag",
						className: It.a.icon
					}), gt._("Edit user flair", null, {
						hk: "4mTxM"
					})), G[Ot.Modmail] && r.a.createElement(vt.a, {
						role: "button",
						className: It.a.item
					}, r.a.createElement("a", {
						href: `https://mod.reddit.com/mail/create${K}`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: R,
						className: It.a.userActionItemInner
					}, r.a.createElement(C.a, {
						name: "mod_mail",
						className: It.a.icon
					}), gt._("Send modmail", null, {
						hk: "ZUN0n"
					}))))
				},
				Nt = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				Ct = n.n(Nt);
			const kt = e => {
					var t, n;
					return r.a.createElement("div", {
						className: Ct.a.userDetails
					}, r.a.createElement("div", null, r.a.createElement(We.a, {
						className: Ct.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && r.a.createElement(r.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isEmployee && r.a.createElement(tt.a, {
						className: Ct.a.adminIcon,
						title: f.fbt._("Reddit admin", null, {
							hk: "15wBTE"
						})
					}), e.user.isGold && r.a.createElement(We.a, {
						to: "/premium"
					}, r.a.createElement(nt.a, {
						className: Ct.a.PremiumIcon
					}))), r.a.createElement("div", {
						className: Ct.a.UserNameMetaData
					}, r.a.createElement("div", {
						className: Ct.a.MetaDataItem
					}, `u/${e.user.username}`, r.a.createElement("div", {
						className: Ct.a.Bullet
					}, "•")), r.a.createElement("div", {
						className: Ct.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ze.d, {
						seconds: e.user.createdUtc || e.user.created
					}), r.a.createElement("div", {
						className: Ct.a.Bullet
					}, "•"))), r.a.createElement("div", {
						className: Ct.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(ce.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				jt = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: a,
						prefersReducedAnimations: s
					} = e, o = {
						...$e.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return r.a.createElement("div", {
						className: Ct.a.userInfoGrid
					}, r.a.createElement("div", {
						className: Ct.a.col
					}, r.a.createElement("span", {
						className: Ct.a.count
					}, Object(ce.b)(o.fromPosts)), r.a.createElement("span", {
						className: Ct.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), r.a.createElement("div", {
						className: Ct.a.col
					}, r.a.createElement("span", {
						className: Ct.a.count
					}, Object(ce.b)(o.fromComments)), r.a.createElement("span", {
						className: Ct.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), r.a.createElement("div", {
						className: Ct.a.col
					}, r.a.createElement("span", {
						className: Ct.a.count
					}, Object(ce.b)(o.fromAwardsReceived)), r.a.createElement("span", {
						className: Ct.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), r.a.createElement("div", {
						className: Ct.a.col
					}, r.a.createElement("span", {
						className: Ct.a.count
					}, Object(ce.b)(o.fromAwardsGiven)), r.a.createElement("span", {
						className: Ct.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), a.length > 0 && (e => r.a.createElement("div", {
						className: Ct.a.col
					}, r.a.createElement("div", {
						className: Ct.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = r.a.createElement("img", {
							className: Ct.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name,
							key: `${e.id}-icon`
						});
						return e.url ? r.a.createElement("a", {
							target: Ke.d.BLANK,
							rel: Ke.c,
							href: e.url,
							key: e.id
						}, n) : n
					})), r.a.createElement("span", {
						className: Ct.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(a), i && ((e, t) => r.a.createElement("div", {
						className: Ct.a.col
					}, r.a.createElement("div", {
						className: Ct.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var a, s;
						if (!(n >= 3)) return r.a.createElement("img", {
							alt: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : null == e ? void 0 : e.name,
							key: null !== (s = null == e ? void 0 : e.description) && void 0 !== s ? s : null == e ? void 0 : e.name,
							className: Ct.a.recentAwardOrTropyIcon,
							src: Object(rt.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), r.a.createElement("span", {
						className: Ct.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, s))
				};
			var Et = e => {
				var t;
				const {
					contextId: n,
					currentUser: s,
					hideNSFWPref: o,
					hoverId: i,
					isLoggedIn: d,
					isNightMode: l,
					moderatorPermissions: m,
					style: p,
					userName: h,
					user: v,
					isCurrentUserBanned: x,
					userProfileStyles: I,
					acceptChats: g,
					isCommentAuthorBlocked: O,
					trophyCase: _,
					lastAuthorModNote: N,
					userIsSubscriber: C,
					subredditId: k,
					prefersReducedAnimations: j,
					onChangeView: E
				} = e, w = Object(b.a)();
				if (Object(a.useEffect)(() => {
						v && k && w(Object(u.x)({
							subredditId: k,
							userId: v.id
						}))
					}, [v, k]), !v) return r.a.createElement("div", {
					style: p
				});
				const y = !!s && Object(at.e)(s) === h,
					S = d && !y && !x && g && !O,
					M = v.hasUserProfile && !x && !O && !y && v.enableFollowers,
					P = null == m ? void 0 : m.access,
					U = v.isNSFW && o ? `${He.a.assetPath}/img/user-info-banner.png` : (null == I ? void 0 : I.bannerBackgroundImage) ? I.bannerBackgroundImage : v.bannerImage,
					A = l ? "##D7DADC" : "#0079D3",
					T = l ? "#121212" : "#FFF";
				return r.a.createElement("div", {
					className: Ct.a.Container,
					id: i,
					style: {
						backgroundColor: T,
						...p
					}
				}, r.a.createElement("div", {
					className: Ct.a.UserContainer
				}, r.a.createElement("div", {
					className: Ct.a.BannerImage,
					style: U ? {
						backgroundImage: `url('${U}')`
					} : {}
				}), r.a.createElement("div", {
					className: Ct.a.snoovatarContainer
				}, v.snoovatarFullBodyAsset ? r.a.createElement("img", {
					className: Ct.a.snoovatar,
					src: v.snoovatarFullBodyAsset
				}) : (null === (t = v.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? r.a.createElement("div", {
					className: Ct.a.anonymousSnoovatar
				}, r.a.createElement(Je, null)) : r.a.createElement(Ye.a, {
					className: Ct.a.UserIcon,
					iconUrl: v.accountIcon,
					isNSFW: v.isNSFW,
					userName: h
				}))), r.a.createElement(kt, {
					user: v,
					userName: h
				}), r.a.createElement(te.a, {
					className: Ct.a.profileLink,
					to: `/user/${h}/`
				}, f.fbt._("View full profile", null, {
					hk: "2s4Gmf"
				})), r.a.createElement("div", {
					className: Ct.a.profileButtonGroup
				}, S && r.a.createElement(qe.b, {
					className: Object(c.a)(Ct.a.ChatButton, Ct.a.profileButtonLeft, {
						[Ct.a.onlyButton]: !M
					}),
					contextId: n,
					userId: v.id,
					text: f.fbt._("Start Chat", null, {
						hk: "2mfqRE"
					}),
					isFullWidth: !0,
					style: {
						color: T,
						backgroundColor: A
					}
				}), M && r.a.createElement(Ve.a, {
					className: Object(c.a)(Ct.a.SubscribeButton, Ct.a.profileButtonRight, {
						[Ct.a.onlyButton]: !S
					}),
					identifier: {
						name: e.user.username,
						type: "profile"
					},
					getEventFactory: e => Object(et.h)(e ? "unfollow" : "follow", n),
					isFullWidth: !0,
					small: !0,
					style: {
						color: C ? "#D7DADC" : T,
						backgroundColor: A,
						width: 144
					}
				})), r.a.createElement(jt, {
					user: v,
					trophyCase: _ || [],
					prefersReducedAnimations: !!j
				}), P && N && r.a.createElement(Xe.b, {
					className: Ct.a.lastModNote,
					modNote: N,
					subredditId: k || "",
					onClick: e => {
						e.stopPropagation(), E()
					},
					context: Xe.a.ModIdCard
				}), n && k && h && r.a.createElement(_t, {
					contextId: n,
					subredditId: k,
					username: h,
					onChangeView: E
				}), r.a.createElement(Qe.i, {
					contextId: n,
					subredditId: k,
					user: v
				}), r.a.createElement("div", {
					className: Ct.a.BottomSpacer
				}))
			};

			function wt() {
				return (wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const yt = e => {
					var t, n, c;
					const l = Object(s.e)(d.c),
						m = !!(null == l ? void 0 : l.isModNotesView),
						[u, b] = Object(a.useState)(!m),
						[p, f] = Object(a.useState)(y.k.All),
						h = Object(s.d)();
					Object(a.useEffect)(() => {
						h(Object(o.d)(e.userName))
					}, [h, e.userName]);
					const v = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (c = e.lastAuthorModNote) || void 0 === c ? void 0 : c.user.id : e.user.id;
					Object(a.useEffect)(() => {
						e.subredditId && v && h(Object(i.d)(e.subredditId, v))
					}, [h, e.subredditId, v]);
					const x = Object(a.useCallback)(e => {
						b(!u), f(e || y.k.All)
					}, [u, b]);
					return !u && e.subredditId && v ? r.a.createElement(Fe, {
						className: Ct.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: v,
						onChangeView: x,
						defaultTypeFilter: p,
						thingId: e.contextId
					}) : r.a.createElement(Et, wt({}, e, {
						onChangeView: x
					}))
				},
				St = {
					height: 710,
					width: 340
				},
				Mt = e => r.a.createElement(Re.a, {
					className: Ct.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					tooltipSizeEstimate: St,
					hideCaret: !0
				}, r.a.createElement(yt, e));
			Mt.WrappedComponent = yt;
			t.default = Mt
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/components/Hovercards/helpers.ts"),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const u = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(m.g)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(s.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || c.a,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`, a = e.author || e.postOrComment.author;
					return r.a.createElement(o.a, {
						authorOrSubredditName: a,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, r.a.createElement("div", {
						id: t
					}, e.children), r.a.createElement(d.a, {
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
			t.default = Object(l.c)(b)
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				d = e => e.alwaysShowChildren ? r.a.createElement(r.a.Fragment, null, e.children) : null;
			t.b = Object(s.a)({
				ErrorComponent: d,
				getComponent: () => Object(o.a)(() => Promise.all([n.e("AuthorHovercard~Reddit"), n.e("AuthorHovercard")]).then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: d
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
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var i = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var a;
					const i = Object(o.a)(),
						d = {
							...n,
							locale: null !== (a = n.locale) && void 0 !== a ? a : i
						};
					return r.a.createElement(r.a.Fragment, null, Object(s.d)(t, d))
				},
				d = n("./src/lib/humanizeDate/index.ts");
			var c = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var a;
					const s = Object(o.a)(),
						i = {
							...n,
							locale: null !== (a = n.locale) && void 0 !== a ? a : s
						};
					return r.a.createElement(r.a.Fragment, null, Object(d.a)(t, i))
				},
				l = n("./src/lib/constants/index.ts");
			var m = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const a = Object(o.a)(),
						s = null != n ? n : a;
					return r.a.createElement(r.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.D;
						const n = e * l.Sb;
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
					}(t, s))
				},
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/eventTools/index.ts");

			function p(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.D;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.D;
				const r = Object(b.e)(e, t),
					s = new Date(e * l.Sb);
				let o;
				if (r === b.a.Live || n) return u.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === b.a.Future ? o = Object(b.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(b.b)(e) >= 5 ? p(s, a) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.D;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, a) : r === b.a.Past && (o = Object(b.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : p(s, a)), `${o} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.D;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,a)}`
			}
			var h = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: a,
					locale: s
				} = e;
				const i = Object(o.a)(),
					d = null != s ? s : i;
				return r.a.createElement(r.a.Fragment, null, f(t, n, a, d))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
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
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = n.n(l),
				u = n("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = u.a.div("Text", m.a),
				f = u.a.div("BottomText", m.a),
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
				x = Object(o.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(c.b)(n)(e)
					}
				}),
				I = Object(d.a)(v, [i.a.Click, i.a.Keydown]),
				g = Object(d.a)(h, [i.a.Click, i.a.Keydown]),
				O = Object(s.b)(x);
			t.c = O(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(I, b({}, e, {
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/trackers/modNote.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/components/UserIcon/index.tsx"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
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
				const s = Object(i.e)(h.db),
					{
						className: v,
						modNote: I,
						onClick: g,
						subredditId: O,
						context: _
					} = e,
					N = "label" in I && I.label || f.c,
					C = "note" in I ? I.note : void 0,
					k = Object(p.b)(f.e[N || "bot"], {
						isFilled: !0
					}),
					j = Object(b.a)(),
					E = new Intl.DateTimeFormat(j, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(I.createdAt)),
					w = I.commentInfo,
					{
						postInfo: y
					} = I,
					S = y ? y.permalink : w ? w.permalink : void 0,
					M = Object(p.b)("external_link"),
					P = Object(l.a)();
				return o.a.createElement("div", {
					className: Object(d.a)(v, x.a.modNote),
					onClick: e => {
						e.stopPropagation(), g && g(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === _ && c.e || "ModIdCard" === _ && c.i;
							e && P(e({
								modNote: I,
								subredditId: O
							}))
						})()
					},
					style: N ? {
						backgroundColor: s ? f.b[N] : f.a[N]
					} : {}
				}, N !== f.c && o.a.createElement("div", {
					className: x.a.header
				}, o.a.createElement("div", {
					className: x.a.label
				}, o.a.createElement(k, {
					className: x.a.labelIcon,
					style: {
						color: f.d[N],
						fontSize: "15px",
						lineHeight: "15px"
					}
				}), f.f[N]())), C && o.a.createElement("div", {
					className: Object(d.a)(x.a.note, {
						[x.a.noLabel]: N === f.c
					})
				}, C), o.a.createElement("div", {
					className: x.a.metadata
				}, o.a.createElement(u.a, {
					className: x.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === _ && c.o || "ModIdCard" === _ && c.p;
							e && P(e({
								modNote: I,
								subredditId: O
							}))
						})()
					},
					to: `/user/${null===(t=I.operator)||void 0===t?void 0:t.displayName}/`
				}, o.a.createElement(m.a, {
					className: x.a.userIcon,
					userName: (null === (n = I.operator) || void 0 === n ? void 0 : n.displayName) || "",
					isNSFW: !1
				}), "u/", null === (a = I.operator) || void 0 === a ? void 0 : a.displayName), o.a.createElement("span", {
					className: x.a.createdDate
				}, r.fbt._("on {createdDate}", [r.fbt._param("createdDate", E)], {
					hk: "2VoP7K"
				})), S && o.a.createElement("a", {
					className: x.a.link,
					href: S || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === _ && c.f || "ModIdCard" === _ && c.g;
							e && P(e({
								modNote: I,
								subredditId: O
							}))
						})()
					}
				}, o.a.createElement(M, {
					className: x.a.linkIcon,
					style: {
						color: s ? "white" : "black",
						fontSize: "14px",
						opacity: .3
					}
				}))))
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const n = Object(s.a)(e, t);
				class a extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(n, d({}, this.props, {
							container: this.state.container,
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
				s = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/helpers/describeApiError/index.ts"),
				d = n("./src/reddit/components/PostList/index.m.less"),
				c = n.n(d);
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
				})), s.a.createElement("div", {
					className: c.a.somethingWrong
				}, s.a.createElement("div", {
					className: c.a.somethingWrongText
				}, r), t && s.a.createElement(o.l, {
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
				s = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = n.n(i);
			const {
				fbt: c
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
						className: d.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: d.a.iconColumn
					}, r.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), i > 1 && r.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(i-1)}`)), r.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", a.name), c._plural(i)], {
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
				s = n.n(r),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				d = n("./src/reddit/models/User/index.ts"),
				c = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = n.n(l);
			class u extends s.a.Component {
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
						hideNSFWPref: r,
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
					return n && Object(d.e)(n) === c ? s.a.createElement(i.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && r ? null : u
				}
			}
			t.a = Object(c.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: o.k,
					hideNSFWPref: o.F
				}),
				d = Object(a.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(s.C)(t, n))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/snoovatar.ts"),
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
				const I = Object(l.b)(),
					g = Object(o.d)(),
					O = f && f.id,
					_ = f && f.voteState;
				let N = null;
				O || (N = t ? "user_hovercard" : "profile_overview");
				const C = Object(r.useCallback)(() => I(Object(u.g)(t ? "user_hovercard" : "profile_overview", n)), [t, I, n]);
				return s.a.createElement(m.t, {
					onClick: () => {
						i ? (I(u.h), O && _ === p.a.notVoted && g(Object(d.kb)(O))) : C();
						const e = i ? "postify" : "copy";
						g(Object(c.b)({
							clickSource: N,
							share: x,
							source: e
						}))
					},
					className: Object(a.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, s.a.createElement(b.a, {
					className: Object(a.a)({
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(c);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: n,
					className: a,
					isOwnProfile: c,
					onClick: u
				} = e;
				return r.a.createElement(o.t, {
					onClick: u,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !n && c,
						[l.a.compactButtonLayout]: t
					}, a)
				}, n ? r.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : r.a.createElement("div", {
					className: l.a.shirtIcon
				}), n ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : c ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
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
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = n.n(d),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = n.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: n,
					username: a,
					editMode: d,
					isDeletingBanner: l,
					onDeleteBanner: u
				} = e;
				return r.a.createElement("div", {
					className: c.a.bannerWrapper
				}, r.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: n,
					userName: a
				}), d && t && (l ? r.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : r.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: u
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/components/HumanDate/index.tsx");

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
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: n,
					url: a,
					userCreated: d,
					username: c,
					...l
				} = e;
				const m = n ? r.a.createElement(r.a.Fragment, null, "u/", c, " · ", r.a.createElement(o.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return a ? r.a.createElement(s.a, i({}, l, {
					className: t,
					to: a
				}), m) : r.a.createElement("span", i({}, l, {
					className: t
				}), m)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = n.n(l);
			t.a = e => {
				let {
					title: t,
					username: n,
					isEmployee: s,
					isGold: l,
					isNSFW: u
				} = e;
				return o.a.createElement("h1", {
					className: m.a.snoovatarUserTitle
				}, t || n, s && o.a.createElement(i.a, {
					className: m.a.snoovatarAdminIcon,
					title: r.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), l && o.a.createElement("a", {
					title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", n)], {
						hk: "3Fylv"
					}),
					href: `${a.a.redditUrl}/premium`
				}, o.a.createElement(c.a, {
					className: m.a.snoovatarPremiumIcon
				})), u && o.a.createElement(d.a, {
					className: m.a.snoovatarNsfwIcon,
					title: r.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/selectors/experiments/econ/index.ts"),
				u = n("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				x = n.n(v);
			const I = 25;

			function g(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function O(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const _ = g("particleDelay", x.a),
				N = g("particleX", x.a),
				C = g("particleFloat", x.a),
				k = () => {
					const e = O(N),
						t = O(C),
						n = O(_);
					return Object(o.a)(x.a.particle, e, t, n)
				};
			class j extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < I; t++) e.push(this.createParticle(t));
					return r.a.createElement("div", {
						role: "presentation",
						className: x.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return r.a.createElement("div", {
						key: e,
						className: `${k()}`
					})
				}
			}
			var E = j,
				w = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				y = n.n(w),
				S = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: n,
					currentUserHasSnoovatar: a,
					editMode: v,
					isDeletingBanner: I,
					isEmployee: g,
					isGold: O,
					isNSFW: _,
					isOwnProfile: N,
					onClickSnoovatar: C,
					onDeleteBanner: k,
					prefersReducedAnimations: j,
					snoovatarUrl: w,
					title: M,
					userCreated: P,
					username: U,
					url: A,
					isHovercard: T
				} = e;
				const B = Object(s.e)(e => !N && !!w && Object(m.g)(e)),
					L = Object(s.e)(u.b),
					D = w && Object(c.e)(w) && L;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
					bannerBackgroundImage: t,
					editMode: !!v,
					isNSFW: _,
					username: U,
					isDeletingBanner: !!I,
					onDeleteBanner: k
				}), D ? r.a.createElement("div", {
					className: x.a.nftProfileUnitContainer
				}, r.a.createElement(i.a, {
					className: x.a.nftProfileUnit,
					imageUrl: w
				})) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: x.a.snoovatarContainer
				}, O && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: x.a.topGlow
				}), r.a.createElement("div", {
					className: x.a.bottomGlow
				}), !j && r.a.createElement(E, null)), r.a.createElement("img", {
					className: Object(o.a)(x.a.snoovatar, {
						[x.a.premiumGlow]: O
					}),
					src: w || void 0
				})), !v && N && r.a.createElement(d.a, {
					to: "/settings/profile",
					className: x.a.snoovatarSettingsLink
				}, r.a.createElement(l.a, {
					name: "settings",
					className: y.a.settingsIcon
				}))), r.a.createElement(S.a, {
					isEmployee: g,
					isGold: O,
					isNSFW: _,
					title: M,
					username: U
				}), r.a.createElement(h.a, {
					className: x.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: U,
					userCreated: P,
					url: A
				}), (N || !a && !!w) && r.a.createElement(b.a, {
					compact: n,
					currentUserHasSnoovatar: a,
					isOwnProfile: N,
					onClick: C
				}), B && r.a.createElement(p.a, {
					username: U,
					isHovercard: !!T,
					share: {
						username: U
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
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(s.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var a = n("./node_modules/lodash/throttle.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				b = n.n(u),
				p = n("./src/reddit/controls/Dropdown/row.m.less"),
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
			class v extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(d.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(m.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(c.a, {
						className: b.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const a = Object(i.a)(f.a.row, t, {
					[f.a.mIsInteractive]: !n.noHover,
					[f.a.mIsSelected]: n.isSelected,
					[f.a.topics]: n.isTopicsStyle
				});
				return o.a.createElement(v, h({
					className: a
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
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
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const m = e => {
				e.preventDefault()
			};
			class u extends r.a.Component {
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
							const n = this.menuItems.current.getElementsByClassName(o.a.menuOption);
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
						menuOptionClassName: a
					} = this.props;
					return e.map((e, s) => r.a.createElement(d.b, {
						key: s + e.displayText,
						className: Object(i.a)(o.a.menuOption, a, {
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
						isCompactStyle: a,
						isTopicsStyle: s,
						menuItemsClassName: d,
						name: u,
						isSaving: b,
						buttonIcon: p,
						disabled: f
					} = this.props, {
						isOpen: h
					} = this.state;
					return r.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(o.a.dropdownMenu, t, {
							[o.a.topics]: s
						})
					}, r.a.createElement("button", {
						onClick: f ? void 0 : this.handleDropdownClick,
						className: Object(i.a)(e, o.a.selector, {
							[o.a.compact]: a
						}, {
							[o.a.topics]: s
						}, {
							[o.a.disabled]: f
						}),
						name: u,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: f ? void 0 : this.handleDropdownBlur,
						onKeyDown: f ? void 0 : this.handleDropdownKeyDown
					}, r.a.createElement("span", {
						className: o.a.selectorContent,
						tabIndex: -1
					}, p && r.a.createElement("span", {
						className: o.a.buttonIcon
					}, p), n), f ? null : b ? r.a.createElement(c.a, {
						sizePx: 8,
						className: o.a.loadingIcon
					}) : r.a.createElement(l.a, {
						name: "caret_down"
					})), r.a.createElement("div", {
						className: Object(i.a)(o.a.menuItems, d, {
							[o.a.topics]: s,
							[o.a.isClosed]: !h
						}),
						onMouseDown: m,
						ref: this.menuItems
					}, !f && h && this.getDropdownMenuItems()))
				}
			}
			t.b = u
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			class s extends r.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = n || a;
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
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: a = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${a}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(s);
			t.a = a.a.wrapped(r.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");

			function s(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case r.I.AUTHORIZATION_ERROR:
						return n ? a.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : a.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case r.I.VALIDATION_ERROR:
						return a.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case r.I.NOT_FOUND_ERROR:
						return a.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case r.I.SERVER_ERROR:
						return a.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case r.I.LIKELY_UBLOCK_ERROR:
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
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/env/index.ts"),
				r = n("./src/reddit/helpers/parseUrl.ts");
			const s = ["old", "new", "en", "www", "np", "m"],
				o = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(a.a)() ? [window.location.host] : []].concat("").concat(s.map((function(e) {
					return e + ".reddit.com"
				}))).concat(s.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				d = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: o.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function c(e, t) {
				const n = d[e];
				if (!d) throw new Error("Could not find reddit URL spec: " + e);
				const a = Object(r.a)(t);
				if (!a) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || o).indexOf(a.hostname)) return;
				const s = a.pathname.match(n.pathname);
				if (s) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = s[n + 1], e
						}), {})
					}
				}
			}

			function l(e) {
				return (e.match(new RegExp(r.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(d).some((function(n) {
						return t = c(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
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
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = n.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(a.a)(s.a.loadingBackground, {
						[s.a["m-loading"]]: t
					})
				},
				i = e => Object(a.a)(s.a.loadingBar, o(e))
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(s.e)(o.i) || r.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || r.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			};
			t.a = i;
			const d = () => {
				const e = i(),
					t = Object(s.e)(o.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			}));
			var a, r = n("./node_modules/react/index.js");

			function s(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Bottom;
				const [n, s] = Object(r.useState)(e), o = Object(r.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: n,
					calculateGradientVisibility: () => {
						const e = o.current;
						if (!e) return;
						const n = e.getBoundingClientRect().height,
							{
								scrollHeight: r,
								scrollTop: i
							} = e,
							d = Math.ceil(i + n) >= r,
							c = Math.ceil(n - i) >= r,
							l = t === a.Bottom ? d : c;
						s(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(a || (a = {}))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
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
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, i.a.admin, {
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
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
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return b
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/reddit/helpers/isPost.ts"),
				s = n("./src/redditGQL/types.ts");
			const o = "DEFAULT_MOD_NOTE",
				i = (e, t) => `LAST_AUTHOR_MOD_NOTE-${e}${t?"-overlay":""}`,
				d = {
					[s.r.BotBan]: "#1717604F",
					[s.r.PermaBan]: "#3E0A514F",
					[s.r.Ban]: "#5B00414F",
					[s.r.AbuseWarning]: "#6D001A4F",
					[s.r.SpamWarning]: "#5423134F",
					[s.r.SpamWatch]: "#3A26194F",
					[s.r.SolidContributor]: "#0044414F",
					[s.r.HelpfulUser]: "#02315C4F",
					[o]: "#242424"
				},
				c = {
					[s.r.BotBan]: "#CCD7FF",
					[s.r.PermaBan]: "#F3CCFF",
					[s.r.Ban]: "#FFC9D2",
					[s.r.AbuseWarning]: "#FFD5AE",
					[s.r.SpamWarning]: "#FFF494",
					[s.r.SpamWatch]: "#EAD5A2",
					[s.r.SolidContributor]: "#CBFD9A",
					[s.r.HelpfulUser]: "#A6EDFF",
					[o]: "#E6E6E6"
				},
				l = {
					[s.r.BotBan]: "ban_fill",
					[s.r.PermaBan]: "bot_fill",
					[s.r.Ban]: "bot_fill",
					[s.r.AbuseWarning]: "spoiler_fill",
					[s.r.SpamWarning]: "spoiler_fill",
					[s.r.SpamWatch]: "nsfw_language_fill",
					[s.r.SolidContributor]: "new_fill",
					[s.r.HelpfulUser]: "peace_fill",
					[o]: "user_note_fill"
				},
				m = {
					[s.r.BotBan]: "#5349DA",
					[s.r.PermaBan]: "#9C3CAC",
					[s.r.Ban]: "#DE107F",
					[s.r.AbuseWarning]: "#FB133A",
					[s.r.SpamWarning]: "#E79800",
					[s.r.SpamWatch]: "#9C6926",
					[s.r.SolidContributor]: "#00A368",
					[s.r.HelpfulUser]: "#006DC6",
					[o]: "#818384"
				},
				u = {
					[s.r.BotBan]: () => a.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[s.r.PermaBan]: () => a.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[s.r.Ban]: () => a.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[s.r.AbuseWarning]: () => a.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[s.r.SpamWarning]: () => a.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[s.r.SpamWatch]: () => a.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[s.r.SolidContributor]: () => a.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[s.r.HelpfulUser]: () => a.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				b = e => Object(r.a)(e.id) ? e.belongsTo.id : e.subredditId
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.u
				}) === a.x.Enabled,
				o = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.Jc
				}) === a.kd
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			}));
			var a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				m = Object(a.a)(c.X, c.O, (e, t) => !(e || t)),
				u = e => {
					if (!m(e)) return;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: s.Dd,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				b = e => {
					var t;
					const n = u(e);
					if (!n) return !1;
					let a = Object(d.r)(e),
						s = Object(d.d)(e);
					if ("undefined" != typeof window && !s) {
						const e = Object(i.a)("subreddit", window.location.href);
						(s = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (a = r.Nb.SUBREDDIT)
					}
					if (s && n) {
						const e = (null == s ? void 0 : s.toLocaleLowerCase()) === n;
						return a === r.Nb.SUBREDDIT && e
					}
					return !1
				},
				p = e => !!u(e) && Object(o.c)(e, {
					experimentEligibilitySelector: m,
					experimentName: s.Ed,
					expEventOverride: !1
				}) !== s.Fd.Readonly
		},
		"./src/reddit/selectors/subredditModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "n", (function() {
				return u
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
				return I
			})), n.d(t, "f", (function() {
				return g
			}));
			var a = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/SubredditModeration/index.ts");
			const s = [],
				o = Object(a.a)((e, t) => {
					let {
						subredditId: n,
						before: a,
						after: s
					} = t;
					const o = Object(r.e)(n, s, a),
						i = e.pages.modHub.moderators.userOrder.data[n] && e.pages.modHub.moderators.userOrder.data[n][o];
					return i ? i.map(t => e.pages.modHub.moderators.models[n][t]) : []
				}),
				i = (e, t, n) => !!e.pages.modHub.moderators.models[t] && !!e.pages.modHub.moderators.models[t][n],
				d = (e, t) => {
					let {
						subredditId: n,
						beforeEditable: a,
						afterEditable: s
					} = t;
					const o = Object(r.e)(n, s, a),
						i = e.pages.modHub.moderators.editableUserOrder.data[n] && e.pages.modHub.moderators.editableUserOrder.data[n][o];
					return i ? i.map(t => e.pages.modHub.moderators.editableModerators[n][t]) : []
				},
				c = (e, t) => {
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
				m = e => !!e.pages.modHub.moderators.search.api.pending,
				u = e => e.pages.modHub.moderators.search.result,
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
				I = (e, t) => {
					const n = Object(r.e)(t.subredditId, t.afterEditable, t.beforeEditable);
					return !!e.pages.modHub.moderators.editableUserOrder.api.pending[n]
				},
				g = Object(a.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const a = e.pages.modHub.moderators.invitedModerators.userOrder[n];
					return a ? a.map(t => e.pages.modHub.moderators.invitedModerators.models[n][t]) : s
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.9b84696eddb8e46f410e.js.map