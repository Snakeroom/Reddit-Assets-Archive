// https://www.redditstatic.com/desktop2x/AuthorHovercard.2483ca52a0e47b9421bc.js
// Retrieved at 8/17/2022, 6:50:04 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/intlSupport.ts");

			function o(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: o,
					locale: i = r.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const d = new Date(e * a.Sb);
				return s.a ? new Intl.DateTimeFormat(i, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(d) : d.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					a = new Date(e * (n ? 1 : 1e3));
				return a.toLocaleString(t, {
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
				return re
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return de
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/get.js"),
				s = n.n(a),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/subreddit.ts"),
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
				method: m.jb.GET,
				data: n
			});
			var O = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = n("./src/reddit/models/SubredditModeration/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/activeModalId.ts"),
				N = n("./src/reddit/selectors/bannedUser.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
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
			const P = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.s: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(_.e)(n, r);
							return {
								...e,
								[a]: !0
							}
						}
						case j.r:
						case j.q: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(_.e)(n, r);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				S = Object(y.c)({
					error: w,
					pending: U
				});
			const A = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, a = Object(_.e)(r, n);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				B = n("./src/reddit/actions/inContextModeration.ts");
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.a:
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
				F = n("./node_modules/icepick/icepick.js");
			const H = {};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.p:
					case j.r: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(F.merge)(e, {
							[n]: r
						})
					}
					case j.w: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(F.unsetIn)(e, [n, r])
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
			var K = function() {
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
					pending: K
				});
			var Z = function() {
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
				J = Object(y.c)({
					api: G,
					result: Z
				});
			const q = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
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
						case j.w: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case j.p: {
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
					api: S,
					fetchedTokens: M,
					inContext: T,
					loadMore: D,
					models: R,
					search: J,
					userOrder: z
				});
			Object(E.a)({
				features: {
					banned: Q
				}
			});
			const V = Object(o.a)(j.s),
				X = Object(o.a)(j.r),
				Y = Object(o.a)(j.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, r, a) => {
						let {
							apiContext: s
						} = a;
						const o = r(),
							i = t.after || "",
							d = Object(_.e)(e, i),
							c = o.features.banned.fetchedTokens[d];
						if (o.features.banned.api.pending[d] || c) return;
						n(V({
							subredditId: e,
							fetchedToken: i
						}));
						const l = o.subreddits.models[e].name,
							u = await x(s(), l, t);
						u.ok ? n(X({
							...u.body,
							fetchedToken: i
						})) : n(Y({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				ee = Object(o.a)(j.v),
				te = Object(o.a)(j.u),
				ne = Object(o.a)(j.t),
				re = (e, t) => async (n, r, a) => {
					let {
						apiContext: s
					} = a;
					const o = r().subreddits.models[e].name,
						i = {
							username: Object(O.a)(t)
						};
					n(ee());
					const d = await x(s(), o, i);
					d.ok ? n(te(d.body)) : n(ne(d.error))
				}, ae = Object(o.a)(j.p), se = Object(o.a)(j.w), oe = (e, t, n) => async (a, o, d) => {
					let {
						apiContext: c
					} = d;
					const u = o(),
						h = u.subreddits.models[e].url,
						v = u.subreddits.models[e].name;
					t.username = Object(O.a)(t.username), a(Object(i.h)(n));
					const _ = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
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
					if (_.ok) {
						a(Object(i.e)(n));
						const e = {
							username: t.username
						};
						a(Object(l.f)({
							kind: g.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await x(c(), v, e);
						s.ok && a(ae(s.body))
					} else {
						a(Object(i.f)(n, _.error));
						const e = s()(_, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(l.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, a, o) => {
					let {
						apiContext: i
					} = o;
					const d = a().subreddits.models[e].url,
						c = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
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
						kind: g.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, r) => {
					const a = r();
					await Promise.all([(async () => {
						if (!Object(I.b)(u.a.BAN_USER)(a) && !Object(C.S)(a, {
								subredditId: e
							})) {
							const t = Object(C.V)(a, {
								subredditId: e
							});
							await n(Object(c.o)(t.name))
						}
					})(), (async () => {
						const r = Object(k.Ab)(a, {
							userName: t
						});
						if (!r) return;
						const s = Object(N.h)(a, {
							subredditId: e
						});
						s && s[r.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
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
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const m = (e, t, n) => Object(d.a)(Object(c.a)(e, [l.a]), {
				endpoint: Object(u.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.jb.GET,
				data: n
			});
			var b = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				p = n("./src/reddit/models/SubredditModeration/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(a.a)(v.Y),
				O = Object(a.a)(v.W),
				_ = Object(a.a)(v.V),
				g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, r, a) => {
						let {
							apiContext: s
						} = a;
						const o = r(),
							i = t.after || "",
							d = Object(p.e)(e, i),
							c = o.pages.modHub.muted.fetchedTokens[d];
						if (o.pages.modHub.muted.api.pending[d] || c) return;
						n(x({
							subredditId: e,
							fetchedToken: i
						}));
						const l = o.subreddits.models[e].name,
							u = await m(s(), l, t);
						u.ok ? n(O({
							...u.body,
							fetchedToken: i
						})) : n(_({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				I = Object(a.a)(v.bb),
				N = Object(a.a)(v.ab),
				C = Object(a.a)(v.Z),
				k = (e, t) => async (n, r, a) => {
					let {
						apiContext: s
					} = a;
					const o = r().subreddits.models[e].name,
						i = {
							username: Object(b.a)(t)
						};
					n(I());
					const d = await m(s(), o, i);
					d.ok ? n(N(d.body)) : n(C(d.error))
				}, j = Object(a.a)(v.X), E = Object(a.a)(v.cb), y = (e, t) => async (n, a, s) => {
					let {
						apiContext: u
					} = s;
					const m = a().subreddits.models[e].url,
						b = await ((e, t, n) => Object(d.a)(Object(c.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.jb.POST,
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
						O = v.subreddits.models[e].name;
					t = Object(b.a)(t);
					const _ = await ((e, t, n, r) => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.jb.POST,
						data: {
							api_type: "json",
							name: n,
							note: r,
							type: "muted"
						}
					}))(p(), x, t, n);
					if (_.ok) {
						const e = {
							username: t
						};
						a(Object(h.f)({
							kind: f.b.SuccessMod,
							text: r.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const n = await m(p(), O, e);
						n.ok && a(j(n.body))
					} else {
						const e = o()(_, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
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
		"./src/reddit/components/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Admin/index.m.less"),
				d = n.n(i),
				c = n("./src/lib/constants/icons.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts");
			const b = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(o.e)(b) ? s.a.createElement("span", {
					className: d.a.admin
				}, r.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : s.a.createElement(l.a, {
					name: c.a.admin,
					isFilled: !0,
					className: d.a.adminIcon,
					title: r.fbt._("Reddit admin", null, {
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
				return r
			}));
			var r, a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: n,
					className: a,
					sendEvent: o,
					contextId: i,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: p,
					onClick: f,
					onAddUserToQuickReplyList: h,
					children: v,
					style: x
				} = e;
				return s.a.createElement(c.t, {
					onClick: e => {
						if (f && f(e), t(), p === r.awardNotification) return h();
						o(Object(l.b)(i))
					},
					className: a,
					text: n,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					style: x
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: r
				} = t;
				return {
					onStartChat: () => {
						e(Object(i.b)(r, n))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(i.a)(r))
					}
				}
			});
			t.b = m(Object(d.c)(u))
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
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				O = Object(c.a)(e => {
					const {
						children: t,
						className: n,
						style: r,
						caretPosition: a,
						caretColor: o,
						onClick: i,
						hideCaret: c
					} = e;
					return s.a.createElement("div", {
						onClick: i,
						className: Object(d.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === a,
							[f.a.caretOnLeft]: "left" === a,
							[f.a.caretOnRight]: "right" === a,
							[f.a.caretOnBottom]: "bottom" === a,
							[f.a.hideCaret]: c
						}),
						style: {
							...r,
							"--contentTooltip-caretColor": o && o[a] ? o[a] : Object(m.a)(e).body
						}
					}, t)
				}),
				_ = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(b.b)(n)(e)
					}
				}),
				g = Object(u.a)(O, [r.a.Click, r.a.Keydown]),
				I = Object(o.b)(_);
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
					return s.a.createElement(g, h({}, this.props, {
						caretPosition: r,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = I(N)
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
				importAsync: () => Promise.all([n.e(1), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = n("./src/reddit/components/EditableImage/index.m.less"),
				b = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: n,
					className: r,
					isProfileCard: m,
					isLoading: p,
					imageUrl: f,
					onFileSelected: h
				} = e;
				const v = Object(s.e)(u.a);
				return a.a.createElement("div", {
					className: Object(o.a)(b.a.Container, r)
				}, a.a.createElement("label", {
					className: b.a.HitBox
				}, a.a.createElement("span", {
					className: b.a.ImageContainer,
					role: "presentation"
				}, f ? a.a.createElement("img", {
					alt: t,
					className: b.a.Image,
					src: f
				}) : n), a.a.createElement(i.a, {
					className: b.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						h(e, t)
					},
					isPending: v ? p : void 0
				}), !p && a.a.createElement("div", {
					className: Object(o.a)(b.a.EditButton, {
						[b.a.profileCard]: m
					})
				}, a.a.createElement(c.a, {
					name: "add_media",
					className: b.a.EditIcon
				}))), p && a.a.createElement(d.a, {
					className: b.a.LoadingIcon,
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
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/helpers/author.ts"),
				l = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/selectors/commentSelector.ts"),
				m = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				p = n("./src/reddit/selectors/modUserNotes.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/userFlair.ts"),
				I = n("./src/reddit/selectors/userPrefs.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				C = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/config.ts"),
				E = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = n("./src/lib/lessComponent.tsx"),
				w = n("./src/lib/prettyPrintNumber/index.ts"),
				P = n("./src/reddit/components/Admin/index.tsx"),
				U = n("./src/reddit/components/ChatButton/index.tsx"),
				S = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				M = n("./src/reddit/components/SubscribeButton/index.tsx"),
				B = n("./src/reddit/components/UserIcon/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/endpoints/profile/info.ts"),
				D = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				F = n("./src/reddit/icons/fonts/Info/index.tsx"),
				H = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				R = n("./src/reddit/models/Gold/Award.ts"),
				W = n("./src/reddit/models/User/index.ts"),
				K = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				Z = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				J = n("./src/reddit/actions/inContextModeration.ts"),
				q = n("./src/reddit/actions/modal.ts"),
				z = n("./src/reddit/actions/subredditModeration/ban.ts"),
				Q = n("./src/reddit/constants/modals.ts"),
				V = n("./src/reddit/components/Hovercards/helpers.ts"),
				X = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				$ = n("./src/reddit/selectors/bannedUser.ts"),
				ee = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = Object(o.c)({
				hasModMailPermissions: Object(b.b)(Y.c.mail),
				isUserBanned: (e, t) => !!Object($.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(_.Ab)(e, {
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
						toggleMuteModal: d
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, r ? a.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(D.e(t))
						}
					}, a.a.createElement(X.a, {
						name: "ban",
						isFilled: !0,
						className: te.a.icon
					}), ne._("Unban User", null, {
						hk: "1aASyW"
					})) : a.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							i(), o(D.a(t))
						}
					}, a.a.createElement(X.a, {
						name: "ban",
						className: te.a.icon
					}), ne._("Ban User", null, {
						hk: "3OhuLx"
					})), n && a.a.createElement(V.a, {
						role: "button",
						onClick: () => {
							d(), o(D.d(t))
						}
					}, a.a.createElement(X.a, {
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
						onUnbanUser: t => e(Object(z.e)(r, t)),
						requestUserBanInfo: () => e(Object(z.c)(r, {
							username: n
						})),
						toggleBanModal: () => {
							e(Object(J.c)({
								username: n,
								subredditId: r,
								contextId: a
							})), e(Object(z.a)(r, n))
						},
						toggleMuteModal: () => {
							e(Object(J.d)({
								username: n,
								subredditId: r,
								contextId: a
							})), e(Object(q.i)(Q.a.MUTE_USER))
						}
					}
				})(ae),
				oe = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(oe.g)(t.subredditId, t.username))
				}))(e => a.a.createElement(V.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(D.c(e.contextId))
					}
				}, a.a.createElement(X.a, {
					name: "tag",
					className: te.a.icon
				}), ie._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ce = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = n.n(ce);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const me = y.a.wrapped(B.a, "UserIcon", le.a),
				be = y.a.wrapped(M.a, "SubscribeButton", le.a),
				pe = y.a.wrapped(U.b, "ChatButton", le.a),
				fe = y.a.wrapped(H.a, "PremiumIcon", le.a),
				he = y.a.wrapped(E.a, "UserNameLink", le.a),
				ve = y.a.div("UserNameMetaData", le.a),
				xe = y.a.div("MetaDataItem", le.a),
				Oe = y.a.div("Bullet", le.a),
				_e = y.a.div("UserNameContainer", le.a),
				ge = y.a.div("KarmaGrid", le.a),
				Ie = y.a.div("GenericKarma", le.a),
				Ne = y.a.a("InfoLink", le.a),
				Ce = y.a.div("KarmaCount", le.a),
				ke = y.a.div("GenericKarmaLabel", le.a),
				je = y.a.div("BannerImage", le.a),
				Ee = y.a.div("UserContainer", le.a),
				ye = y.a.div("BottomSpacer", le.a),
				we = y.a.div("Container", le.a),
				Pe = e => a.a.createElement("div", null, a.a.createElement("div", null, a.a.createElement(he, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && a.a.createElement(E.a, {
					to: "/premium"
				}, a.a.createElement(fe, null)), e.user.isEmployee && a.a.createElement(P.a, null)), a.a.createElement(ve, null, a.a.createElement(xe, null, `u/${e.userName}`, a.a.createElement(Oe, null, "•")), a.a.createElement(xe, null, (e.user.createdUtc || e.user.created) && a.a.createElement(K.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ue = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...L.a,
						...t
					};
					return a.a.createElement(ge, null, a.a.createElement(Ie, null, a.a.createElement(Ce, null, Object(w.b)(n.fromPosts)), a.a.createElement(ke, null, k.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [k.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), a.a.createElement(Ie, null, a.a.createElement(Ce, null, Object(w.b)(n.fromComments)), a.a.createElement(ke, null, k.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [k.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), a.a.createElement(Ie, null, a.a.createElement(Ce, null, Object(w.b)(n.fromAwardsReceived)), a.a.createElement(ke, null, k.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [k.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), a.a.createElement(Ne, {
						href: R.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(F.a, {
						className: le.a.infoIcon
					})))), a.a.createElement(Ie, null, a.a.createElement(Ce, null, Object(w.b)(n.fromAwardsGiven)), a.a.createElement(ke, null, k.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [k.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), a.a.createElement(Ne, {
						href: R.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(F.a, {
						className: le.a.infoIcon
					})))))
				},
				Se = e => {
					var t, n;
					const {
						className: r,
						contextId: s,
						currentUser: o,
						hideNSFWPref: i,
						hoverId: d,
						isLoggedIn: c,
						onClickSnoovatar: l,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: b,
						sendEvent: p,
						style: f,
						subredditId: h,
						topAwardIcon: v,
						userName: x,
						user: O,
						userFlair: _,
						isCurrentUserBanned: g,
						userProfileStyles: I,
						acceptChats: N,
						isCommentAuthorBlocked: C
					} = e;
					if (!O) return a.a.createElement(we, {
						style: f
					});
					const E = !!o && Object(W.e)(o) === x,
						y = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						w = O.accountIcon || `${j.a.assetPath}/img/snoo_user_placeholder.png`,
						P = null == u ? void 0 : u.flair,
						U = null == u ? void 0 : u.access,
						A = (null == _ ? void 0 : _.templateIds) && (null === (t = null == _ ? void 0 : _.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						M = null === (n = null == _ ? void 0 : _.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: B
						} = O,
						L = !!O.snoovatarFullBodyAsset,
						F = O.isNSFW && i;
					let H;
					return H = L ? !F && I && I.bannerBackgroundImage || void 0 : F ? `${j.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, a.a.createElement(we, {
						className: r,
						id: d,
						style: f
					}, !L && H && a.a.createElement(je, {
						style: {
							backgroundImage: `url('${H}')`
						}
					}), a.a.createElement(Ee, null, L ? a.a.createElement(Z.a, {
						isHovercard: !0,
						bannerBackgroundImage: H,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: O.isEmployee,
						isGold: O.isGold,
						isNSFW: O.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: O.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: O.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : a.a.createElement(_e, null, a.a.createElement(me, {
						iconUrl: w,
						isNSFW: O.isNSFW,
						userName: x
					}), a.a.createElement(Pe, {
						title: null == b ? void 0 : b.title,
						user: O,
						userName: x
					})), a.a.createElement(Ue, {
						user: O
					}), B && a.a.createElement(G.a, {
						recentAwardings: B,
						topAwardIcon: v,
						username: x
					}), c && !E && !g && N && !C && a.a.createElement(pe, {
						contextId: s,
						priority: T.c.Secondary,
						userId: O.id,
						text: k.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), O.hasUserProfile && !g && !C && !E && O.enableFollowers && a.a.createElement(be, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(D.h)(e ? "unfollow" : "follow", s),
						isFullWidth: !0,
						small: !0
					})), U && s && !E && h && a.a.createElement(se, {
						contextId: s,
						subredditId: h,
						sendEvent: p,
						username: x
					}), P && s && A && M && h && a.a.createElement(de, {
						contextId: s,
						subredditId: h,
						sendEvent: p,
						username: x
					}), a.a.createElement(S.i, {
						contextId: s,
						subredditId: h,
						user: O
					}), !(U || c) && a.a.createElement(ye, null))
				},
				Ae = Object(A.a)(Se),
				Me = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return a.a.createElement(Ae, ue({
						isOpen: t
					}, e))
				};
			Me.WrappedComponent = Se;
			var Be = Me;
			const Te = Object(o.c)({
					activeTooltipId: O.a,
					currentUser: _.k,
					isLoggedIn: _.Q,
					hideNSFWPref: _.F,
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
					user: _.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(g.d)(e, {
							subredditId: n
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(x.o)(t) && Object(x.gb)(e, t),
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
						const r = Object(N.e)(e),
							a = n || r && Object(x.G)(e, r.name);
						return !!a && Object(b.i)(e, a)
					},
					trophyCase: (e, t) => Object(h.s)(e, Object(h.n)(e, t.userName)),
					isNightMode: _.db,
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
						return Object(x.hb)(e, {
							identifier: {
								name: n,
								type: "profile"
							}
						})
					}
				}),
				Le = Object(s.b)(Te, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Le(e => e.isModWithUserNotesPermissions ? a.a.createElement(C.b, {
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
			}) : Object(c.a)(e.userName) ? null : a.a.createElement(Be, {
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/profile/index.ts"),
				i = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/helpers/isComment.ts"),
				u = n("./src/reddit/helpers/isPost.ts"),
				m = n("./src/reddit/helpers/trackers/modNote.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/actions/subreddit.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/lib/localStorageAvailable/index.ts"),
				x = n("./src/reddit/helpers/localStorage/index.ts"),
				O = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/constants/keycodes.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/controls/Checkbox/index.tsx"),
				N = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/ModUserNotes/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				y = n.n(E),
				w = n("./src/redditGQL/types.ts");
			const P = Object(h.a)(O.b),
				U = ["NONE", w.w.AbuseWarning, w.w.SpamWarning, w.w.SpamWatch, w.w.SolidContributor, w.w.HelpfulUser],
				S = {
					...k.f,
					NONE: () => f.fbt._("None", null, {
						hk: "2r9MPM"
					})
				};
			var A = e => {
					const {
						className: t,
						filter: n,
						subredditId: o,
						userId: d,
						thingId: l
					} = e, [m, b] = Object(r.useState)(), [p, h] = Object(r.useState)(!0), [O, E] = Object(r.useState)(""), [w, A] = Object(r.useState)(!1), M = Object(s.e)(j.db);
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
						if (Object(v.a)()) {
							const e = Object(x.B)("modnote-draft");
							E(e && e[d] ? e[d] : "")
						}
					}, [d]);
					const B = Object(s.d)(),
						T = Object(r.useCallback)(e => {
							E(e), Object(x.Hb)("modnote-draft", {
								[d]: e
							})
						}, [E, d]),
						L = Object(r.useCallback)(e => {
							e.stopPropagation(), B(Object(i.a)(o, d, O, n, m, p ? l : void 0)), b(void 0), T("")
						}, [B, o, T, O, d, m, p, l, n]),
						D = Object(r.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== _.a.Enter || e.shiftKey || (e.preventDefault(), L(e))
						}, [L]),
						F = m ? S[m]() : S.NONE(),
						H = m ? m && Object(C.b)(k.e[m], {
							isFilled: !0
						}) : void 0,
						R = m && k.d[m];
					return a.a.createElement("div", {
						className: Object(c.a)(t)
					}, a.a.createElement("div", {
						className: y.a.meta
					}, a.a.createElement("span", {
						className: y.a.labelContainer,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement("label", {
						className: y.a.labelText,
						htmlFor: "label"
					}, f.fbt._("Label", null, {
						hk: "39tjG1"
					})), a.a.createElement(N.b, {
						id: "labelSelector",
						className: y.a.dropdown,
						displayText: F,
						buttonIcon: H ? a.a.createElement(H, {
							className: y.a.labelIcon,
							style: {
								...R && {
									color: R
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: U.map(e => {
							const t = S[e](),
								n = "NONE" === e ? void 0 : Object(C.b)(k.e[e], {
									isFilled: !0
								}),
								r = k.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !m : m === e,
								...n && {
									icon: a.a.createElement(n, {
										className: y.a.labelIcon,
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
						buttonClassName: y.a.dropdownButton,
						menuItemsClassName: y.a.menuItems,
						menuOptionClassName: y.a.menuOption
					})), a.a.createElement("span", {
						className: y.a.checkboxContainer
					}, a.a.createElement(I.a, {
						className: y.a.checkbox,
						isCheckboxSelected: p,
						toggleCheckbox: () => h(!p)
					}), l && Object(u.a)(l) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), a.a.createElement("span", {
						className: y.a.textareaContainer
					}, a.a.createElement("textarea", {
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(c.a)(y.a.textarea, {
							[y.a.isNightMode]: M
						}),
						onChange: e => T(e.target.value),
						onKeyDown: D,
						onClick: e => e.stopPropagation(),
						placeholder: f.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: O,
						maxLength: 250
					}), a.a.createElement(P, {
						isOpen: w
					}, a.a.createElement("div", {
						className: y.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), a.a.createElement("div", {
						className: y.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), a.a.createElement(g.t, {
						className: Object(c.a)(y.a.sendButton, {
							[y.a.isNightMode]: M,
							[y.a.isDisabled]: 0 === O.length
						}),
						disabled: 0 === O.length,
						Icon: () => a.a.createElement(C.a, {
							className: Object(c.a)(y.a.iconSend, {
								[y.a.isDisabled]: 0 === O.length
							}),
							name: "send",
							isFilled: !0
						}),
						size: g.d.XS,
						iconPosition: g.h.C,
						onClick: L,
						onMouseEnter: () => A(!0),
						onMouseLeave: () => A(!1),
						style: 0 === O.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				M = n("./src/reddit/selectors/modUserNotes.ts"),
				B = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/components/SubredditIcon/index.tsx"),
				L = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				D = n.n(L);
			const F = [w.o.All, w.o.Note, w.o.Invite, w.o.Ban, w.o.Mute, w.o.ContentChange, w.o.Removal, w.o.Approval, w.o.Spam, w.o.ModAction],
				H = {
					[w.o.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[w.o.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[w.o.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[w.o.Ban]: () => f.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[w.o.Mute]: () => f.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[w.o.ContentChange]: () => f.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[w.o.Removal]: () => f.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[w.o.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[w.o.ModAction]: () => f.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[w.o.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				R = {
					[w.o.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[w.o.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[w.o.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[w.o.Ban]: () => f.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[w.o.Mute]: () => f.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[w.o.ContentChange]: () => f.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[w.o.Removal]: () => f.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[w.o.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[w.o.ModAction]: () => f.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[w.o.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var W = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						onChangeSubredditId: i,
						filter: d,
						onChangeFilter: l,
						onChangeView: u
					} = e, p = Object(b.a)(), h = Object(s.e)(e => Object(B.r)(e, void 0)), v = Object(s.e)(e => Object(M.a)(e, o, n)), x = h.find(e => e.id === n), O = R[d](), _ = Object(C.b)("back_fill"), g = Object(r.useCallback)(() => p(Object(m.m)({
						userId: o,
						subredditId: n
					})), [o, n, p]), I = Object(r.useCallback)(e => {
						i(e.value), p(Object(m.t)({
							userId: o,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [o, n, p, i]), k = Object(r.useCallback)(() => p(Object(m.n)({
						userId: o,
						subredditId: n
					})), [o, n, p]), j = Object(r.useCallback)(e => {
						l(e.value), p(Object(m.u)({
							userId: o,
							subredditId: n,
							filteredType: e.value
						}))
					}, [o, n, p, l]);
					return v ? a.a.createElement("div", {
						className: Object(c.a)(t, D.a.wrapper),
						role: "navigation"
					}, a.a.createElement("div", {
						className: D.a.backWrapper
					}, a.a.createElement("button", {
						"aria-label": f.fbt._("Back", null, {
							hk: "3ojpRo"
						}),
						className: D.a.backButton,
						onClick: u
					}, a.a.createElement(_, null))), x && h.length && a.a.createElement("div", {
						className: D.a.subredditsWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement(N.b, {
						id: "subredditFilter",
						className: D.a.subreddits,
						buttonClassName: D.a.dropdownButton,
						buttonIcon: a.a.createElement(T.b, {
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
							icon: a.a.createElement(T.b, {
								className: D.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: g,
						onSelect: I,
						showSelectedCheckmark: !0
					})), a.a.createElement("div", {
						className: D.a.typesWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement(N.b, {
						id: "typeFilter",
						className: D.a.types,
						buttonClassName: D.a.dropdownButton,
						menuItemsClassName: D.a.menuItems,
						menuOptionClassName: D.a.menuOption,
						displayText: O,
						options: F.map(e => ({
							displayText: H[e](),
							icon: v[w.o.All] ? a.a.createElement("span", {
								className: D.a.typeCountIconInDropdown
							}, a.a.createElement("span", {
								className: D.a.typeCountIconInDropdownInner
							}, v[e])) : void 0,
							value: e,
							isSelected: e === d
						})),
						onOpen: k,
						onSelect: j,
						showSelectedCheckmark: !0
					}))) : null
				},
				K = n("./src/lib/fastdom/index.ts"),
				G = n("./src/lib/constants/colors.ts"),
				Z = n("./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less"),
				J = n.n(Z),
				q = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less"),
				z = n.n(q);
			const Q = {
					[w.n.AddRemovalReason]: "remove",
					[w.n.AcceptModeratorInvite]: "mod",
					[w.n.AddContributor]: "user",
					[w.n.ApproveLink]: "approve",
					[w.n.ApproveComment]: "approve",
					[w.n.AddContributor]: "user",
					[w.n.AddModerator]: "mod",
					[w.n.BanUser]: "ban",
					[w.n.InviteModerator]: "mod",
					[w.n.MuteUser]: "mod_mute",
					[w.n.RemoveComment]: "remove",
					[w.n.RemoveContributor]: "block",
					[w.n.RemoveLink]: "remove",
					[w.n.RemoveModerator]: "unmod",
					[w.n.RemoveWikiContributor]: "wiki_ban",
					[w.n.SpamComment]: "spam",
					[w.n.SpamLink]: "spam",
					[w.n.Spoiler]: "spoiler",
					[w.n.Sticky]: "pin",
					[w.n.UnbanUser]: "unban",
					[w.n.UninviteModerator]: "unmod",
					[w.n.UnmuteUser]: "mod_unmute",
					[w.n.Unspoiler]: "spoiler",
					[w.n.Unsticky]: "unpin",
					[w.n.WikiBanned]: "wiki_ban",
					[w.n.WikiContributor]: "wiki",
					[w.n.WikiUnbanned]: "wiki_unban"
				},
				V = {
					[w.w.BotBan]: "bot",
					[w.w.PermaBan]: "block"
				};
			var X = e => {
					const {
						className: t,
						actionType: n,
						label: r
					} = e, s = n ? Q[n] || "mod" : r && V[r] || "user_note";
					if (!s) return null;
					const o = Object(C.b)(s);
					return a.a.createElement(o, {
						className: Object(c.a)(t, z.a.icon)
					})
				},
				Y = n("./src/reddit/selectors/activeModalId.ts"),
				$ = n("./src/reddit/actions/modal.ts"),
				ee = n("./src/reddit/hooks/useLocale.ts"),
				te = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ne = n("./src/reddit/controls/InternalLink/index.tsx"),
				re = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less"),
				ae = n.n(re);
			var se = e => {
					const {
						className: t,
						deleteClassName: n,
						modNote: o,
						onClickUsername: d,
						subredditId: l
					} = e, u = Object(s.d)(), {
						user: p,
						id: h,
						itemType: v
					} = o, x = `ModUserNote--Modal--DeleteConfirmation--${h}`, O = Object(b.a)(), _ = Object(r.useCallback)(() => u(Object($.i)(x)), [u, x]), g = Object(r.useCallback)(() => {
						v && u(Object(i.b)(l, p.id, h, v)), O(Object(m.b)({
							subredditId: l,
							modNote: o
						}))
					}, [u, p.id, h, v, l, O, o]), I = Object(r.useCallback)(() => {
						v && u(Object(i.b)(l, p.id, h, v)), O(Object(m.c)({
							subredditId: l,
							modNote: o
						}))
					}, [u, p.id, h, v, l, O, o]), N = Object(r.useCallback)(() => {
						_(), O(Object(m.j)({
							subredditId: l,
							modNote: o
						}))
					}, [l, O, o, _]), C = Object(s.e)(e => Object(Y.a)(e) === x), k = Object(ee.a)(), j = new Intl.DateTimeFormat(k, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(o.createdAt)), E = o.itemType === w.p.Note;
					return a.a.createElement("div", {
						className: Object(c.a)(t, ae.a.metadata)
					}, o.operator && a.a.createElement(ne.default, {
						className: ae.a.operator,
						to: `/user/${o.operator.displayName}/`,
						onClick: d
					}, "u/", o.operator.displayName), a.a.createElement("span", {
						className: ae.a.createdDate
					}, f.fbt._("on {createdDate}", [f.fbt._param("createdDate", j)], {
						hk: "2VoP7K"
					})), E && a.a.createElement(a.a.Fragment, null, a.a.createElement("button", {
						className: Object(c.a)(n, ae.a.deleteButton),
						onClick: N
					}, f.fbt._("Delete", null, {
						hk: "4lt26q"
					})), C && a.a.createElement(te.a, {
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
						onCancel: g,
						toggleModal: _,
						withOverlay: !0
					})))
				},
				oe = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				ie = n.n(oe);
			var de = e => {
					let {
						className: t,
						modNote: n,
						onClickLinked: r
					} = e;
					var o, i;
					const d = Object(s.e)(j.db),
						l = "label" in n && n.label || k.c,
						u = "note" in n ? n.note : void 0,
						m = Object(C.b)(k.e[l || "bot"], {
							isFilled: !0
						}),
						b = ![k.c, w.w.BotBan, w.w.PermaBan].includes(l),
						p = n.postInfo ? null === (o = n.postInfo) || void 0 === o ? void 0 : o.permalink : n.commentInfo ? null === (i = n.commentInfo) || void 0 === i ? void 0 : i.permalink : void 0,
						f = Object(C.b)("external_link_fill");
					return u ? a.a.createElement("div", {
						className: Object(c.a)(t, ie.a.modNote),
						onClick: e => e.stopPropagation(),
						style: l ? {
							backgroundColor: d ? k.b[l] : k.a[l]
						} : {}
					}, b && a.a.createElement("div", {
						className: ie.a.header
					}, a.a.createElement(m, {
						className: ie.a.labelIcon,
						style: {
							color: k.d[l]
						}
					}), a.a.createElement("span", {
						className: ie.a.label
					}, k.f[l]())), u && a.a.createElement("div", {
						className: ie.a.note
					}, u), p && a.a.createElement("a", {
						className: ie.a.link,
						href: p || "",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: r
					}, a.a.createElement(f, {
						className: ie.a.linkIcon
					}))) : null
				},
				ce = n("./src/lib/constants/index.ts"),
				le = n("./src/lib/prettyPrintNumber/index.ts"),
				ue = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				me = n.n(ue);
			var be = e => {
					let {
						className: t,
						postInfo: n,
						commentInfo: r,
						onClick: s
					} = e;
					var o, i, d, l;
					if (!n && !r) return null;
					if (r && "Comment" !== r.__typename) return a.a.createElement("div", {
						className: Object(c.a)(t, me.a.preview)
					}, a.a.createElement("div", {
						className: me.a.content
					}, a.a.createElement("h6", {
						className: me.a.title
					}, ce.Lb)));
					const u = n ? n.permalink : r ? r.permalink : void 0,
						m = (null == n ? void 0 : n.title) || (null === (i = null === (o = r) || void 0 === o ? void 0 : o.content) || void 0 === i ? void 0 : i.markdown),
						b = n ? n.score || 0 : r && r.score || 0,
						p = (null == n ? void 0 : n.commentCount) || 0;
					return a.a.createElement("a", {
						className: Object(c.a)(t, me.a.preview),
						href: u || "",
						onClick: s,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement("div", {
						className: me.a.content
					}, m && a.a.createElement("h6", {
						className: me.a.title
					}, m), a.a.createElement("div", {
						className: me.a.meta
					}, a.a.createElement("span", null, f.fbt._({
						"*": "{pointsCount} Points",
						_1: "{pointsCount} Point"
					}, [f.fbt._param("pointsCount", Object(le.b)(b)), f.fbt._plural(b)], {
						hk: "47CFCp"
					})), !!p && a.a.createElement(a.a.Fragment, null, " · ", a.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(p, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (d = null == n ? void 0 : n.thumbnail) || void 0 === d ? void 0 : d.url) && a.a.createElement("div", {
						className: me.a.thumbnail
					}, a.a.createElement("img", {
						className: me.a.thumbnailImage,
						src: null === (l = n.thumbnail) || void 0 === l ? void 0 : l.url
					})))
				},
				pe = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				fe = n.n(pe);
			const he = {
					[w.n.AddRemovalReason]: e => {
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
					[w.n.BanUser]: e => {
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
					[w.n.AcceptModeratorInvite]: () => f.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[w.n.AddContributor]: () => f.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[w.n.AddModerator]: () => f.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[w.n.ApproveComment]: () => f.fbt._("Comment was approved", null, {
						hk: "3yCRAS"
					}),
					[w.n.ApproveLink]: () => f.fbt._("Post was approved", null, {
						hk: "6tcjn"
					}),
					[w.n.BanUser]: e => {
						const {
							banReason: t
						} = e;
						return t
					},
					[w.n.AddRemovalReason]: e => {
						const {
							description: t
						} = e;
						return t
					},
					[w.n.InviteModerator]: () => f.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[w.n.MuteUser]: () => f.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[w.n.RemoveComment]: () => f.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[w.n.RemoveContributor]: () => f.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[w.n.RemoveLink]: () => f.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[w.n.RemoveModerator]: () => f.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[w.n.RemoveWikiContributor]: () => f.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[w.n.SpamComment]: () => f.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[w.n.SpamLink]: () => f.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[w.n.Spoiler]: () => f.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[w.n.Sticky]: () => f.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[w.n.UnbanUser]: () => f.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[w.n.UninviteModerator]: () => f.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[w.n.UnmuteUser]: () => f.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[w.n.Unspoiler]: () => f.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[w.n.Unsticky]: () => f.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[w.n.WikiBanned]: () => f.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[w.n.WikiContributor]: () => f.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[w.n.WikiUnbanned]: () => f.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				xe = {
					[w.w.BotBan]: () => f.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[w.w.PermaBan]: () => f.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var Oe = e => {
				const {
					className: t,
					modNote: n
				} = e, {
					actionType: r
				} = n, {
					label: s
				} = n, o = r ? ve[r] ? ve[r](n) : null : s && xe[s] ? xe[s]() : null, i = r && he[r] ? he[r](n) : null;
				return a.a.createElement(a.a.Fragment, null, i ? a.a.createElement("h4", {
					className: Object(c.a)(t, fe.a.subTitle)
				}, i) : null, o ? a.a.createElement("h3", {
					className: Object(c.a)(t, fe.a.title)
				}, o) : null)
			};
			var _e = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, r = Object(s.e)(j.db), o = Object(b.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return a.a.createElement("div", {
						className: Object(c.a)(J.a.wrapper, e.className)
					}, a.a.createElement("div", {
						key: "aa",
						className: J.a.iconWrapper,
						style: {
							background: r ? G.a.orca700 : G.a.narwhal100
						}
					}, a.a.createElement(X, {
						className: J.a.icon,
						actionType: t.actionType,
						label: t.label
					})), a.a.createElement("div", {
						className: J.a.content,
						key: "ba"
					}, a.a.createElement(Oe, {
						modNote: t,
						className: J.a.title
					}), a.a.createElement(de, {
						className: J.a.note,
						modNote: t,
						onClickLinked: () => o(Object(m.d)({
							subredditId: n,
							modNote: t
						}))
					}), a.a.createElement(se, {
						className: J.a.metaData,
						deleteClassName: J.a.metaDataDelete,
						subredditId: n,
						modNote: t,
						onClickUsername: () => o(Object(m.q)({
							subredditId: n,
							modNote: t
						}))
					}), i && a.a.createElement(be, {
						className: J.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => o(Object(m.h)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				ge = n("./src/reddit/hooks/useScrollGradient.ts"),
				Ie = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				Ne = n.n(Ie);
			var Ce = e => {
					const t = {
							[w.o.Note]: f.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[w.o.Approval]: f.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[w.o.Removal]: f.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[w.o.Ban]: f.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[w.o.Mute]: f.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[w.o.Invite]: f.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[w.o.Spam]: f.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[w.o.ContentChange]: f.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[w.o.ModAction]: f.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[w.o.All]: f.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[w.o.Note]: "user_note",
							[w.o.Approval]: "approve",
							[w.o.Removal]: "remove",
							[w.o.Ban]: "ban",
							[w.o.Mute]: "mod_mute",
							[w.o.Invite]: "user",
							[w.o.Spam]: "spam",
							[w.o.ContentChange]: "pin",
							[w.o.ModAction]: "mod",
							[w.o.All]: "mod"
						},
						{
							className: r,
							subredditId: o,
							userId: i,
							filter: d
						} = e,
						l = Object(s.e)(e => Object(j.zb)(e, {
							userId: i
						})),
						u = Object(s.e)(e => Object(B.V)(e, {
							subredditId: o
						})),
						m = t[d],
						b = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", m)], {
							hk: "1NhVUh"
						}),
						p = u && l ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", l.username), f.fbt._param("subreddit name", u.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(C.b)(n[d]);
					return a.a.createElement("div", {
						className: Object(c.a)(r, Ne.a.container)
					}, a.a.createElement(h, {
						className: Ne.a.icon
					}), a.a.createElement("p", {
						className: Ne.a.mainLine
					}, `${b} ${p}`), d === w.o.Note && a.a.createElement("p", {
						className: Ne.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				ke = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				je = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				Ee = n.n(je),
				ye = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var we = e => a.a.createElement("div", {
					className: Object(c.a)(Ee.a.wrapper, e.className)
				}, a.a.createElement("div", {
					key: "d",
					className: Object(c.a)(Ee.a.icon, Object(ye.a)(e))
				}), a.a.createElement("div", {
					key: "e",
					className: Ee.a.content
				}, a.a.createElement("div", {
					key: "ea",
					className: Object(c.a)(Ee.a.title, Object(ye.b)(e))
				}), a.a.createElement("div", {
					key: "eb",
					className: Object(c.a)(Ee.a.body, Object(ye.b)(e))
				}), a.a.createElement("div", {
					key: "ec",
					className: Object(c.a)(Ee.a.meta, Object(ye.b)(e))
				}))),
				Pe = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				Ue = n.n(Pe);
			var Se = e => {
					const {
						className: t,
						isLoading: n,
						apiError: r,
						onTryAgain: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(t, Ue.a.placeholder)
					}, a.a.createElement(we, {
						className: Ue.a.placeholderLine,
						isLoading: n
					}), a.a.createElement(we, {
						className: Ue.a.placeholderLine,
						isLoading: n
					}), a.a.createElement(we, {
						className: Ue.a.placeholderLine,
						isLoading: n
					}), !!r && a.a.createElement(ke.a, {
						apiError: r,
						onTryAgain: s
					}))
				},
				Ae = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				Me = n.n(Ae);
			var Be = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						filter: d
					} = e, l = Object(s.d)(), u = Object(s.e)(j.db), [m, b] = Object(r.useState)(!0);
					Object(r.useEffect)(() => {
						setTimeout(() => b(!1), 0)
					}, []);
					const {
						container: p,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(ge.b)(!1, ge.a.Top), v = Object(s.e)(e => Object(M.f)(e, {
						subredditId: n,
						userId: o,
						filter: d
					})), x = Object(s.e)(e => Object(M.d)(e, {
						subredditId: n,
						userId: o,
						filter: d
					})), O = Object(s.e)(e => Object(M.e)(e, {
						subredditId: n,
						userId: o,
						filter: d
					})), _ = Object(s.e)(M.c), g = !!v.length, I = !!x && !O && !_, N = Object(r.useCallback)(e => l(Object(i.f)({
						subredditId: n,
						userId: o,
						filter: d,
						before: e
					})), [l, n, o, d]), C = Object(r.useCallback)(() => {
						K.a.read(() => {
							if (null == p ? void 0 : p.current) {
								h();
								const e = p.current,
									{
										scrollTop: t,
										offsetHeight: n,
										scrollHeight: r
									} = e;
								1.25 * n - r >= t && I && !O && N(x)
							}
						})
					}, [I, O, x, N, h, p]);
					return a.a.createElement(a.a.Fragment, null, g && a.a.createElement("div", {
						className: Object(c.a)(t, Me.a.wrapper)
					}, a.a.createElement("div", {
						className: Object(c.a)(Me.a.scrollGradient, {
							[Me.a.visible]: I || O || f,
							[Me.a.isNightMode]: u
						})
					}), a.a.createElement("div", {
						className: Me.a.list,
						ref: p,
						onScroll: C
					}, v.map(e => a.a.createElement(_e, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (O || _) && a.a.createElement(Se, {
						isLoading: O,
						apiError: _,
						onTryAgain: () => {
							x && N(x)
						}
					}))), !g && !O && !m && a.a.createElement(Ce, {
						className: Object(c.a)(t, Me.a.wrapper, Me.a.noItems),
						subredditId: n,
						userId: o,
						filter: d
					}), !g && (O || m) && a.a.createElement("div", {
						className: Object(c.a)(t, Me.a.wrapper)
					}))
				},
				Te = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Le = n.n(Te);
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
						[x, O] = Object(r.useState)(h || w.o.All),
						[_, g] = Object(r.useState)(o),
						I = Object(s.e)(j.db),
						N = Object(b.a)(),
						C = e => {
							t(Object(i.f)({
								subredditId: _,
								userId: d,
								filter: x,
								...e
							}))
						},
						k = x === w.o.All || x === w.o.Note;
					Object(r.useEffect)(() => {
						C(), t(Object(p.q)())
					}, []);
					const E = {
						subredditId: o,
						userId: d,
						...v && Object(l.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(u.a)(v) ? {
							postId: v
						} : null
					};
					return Object(r.useEffect)(() => (N(Object(m.y)(E)), () => N(Object(m.s)(E))), []), a.a.createElement("div", {
						className: Object(c.a)(n, Le.a.wrapper, {
							[Le.a.isNightMode]: I
						}),
						onClick: e => e.stopPropagation()
					}, a.a.createElement(W, {
						className: Le.a.filters,
						subredditId: _,
						userId: d,
						onChangeSubredditId: e => {
							g(e), C({
								subredditId: e
							})
						},
						filter: x,
						onChangeFilter: e => {
							O(e), C({
								filter: e
							})
						},
						onChangeView: f
					}), a.a.createElement(Be, {
						className: Le.a.list,
						subredditId: _,
						userId: d,
						filter: x
					}), k && a.a.createElement(A, {
						className: Le.a.form,
						filter: x,
						subredditId: o,
						userId: d,
						thingId: v
					}))
				},
				He = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Re = n("./src/config.ts"),
				We = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Ke = n("./src/lib/opener/index.ts"),
				Ge = n("./src/reddit/helpers/author.ts"),
				Ze = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				Je = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				qe = n("./src/reddit/components/Admin/index.tsx"),
				ze = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				Qe = n.n(ze);
			var Ve = e => a.a.createElement("img", {
					className: Object(c.a)(e.className, Qe.a.anonymousSnoovatar),
					src: `${Re.a.assetPath}/img/anonymous_snoo.png`
				}),
				Xe = n("./src/reddit/components/ChatButton/index.tsx"),
				Ye = n("./src/reddit/components/HumanDate/index.tsx"),
				$e = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				et = n("./src/reddit/components/ModNoteItem/index.tsx"),
				tt = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				nt = n("./src/reddit/components/SubscribeButton/index.tsx"),
				rt = n("./src/reddit/components/UserIcon/index.tsx"),
				at = n("./src/reddit/endpoints/profile/info.ts"),
				st = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				ot = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				it = n("./src/reddit/models/User/index.ts"),
				dt = n("./src/reddit/selectors/gold/awardIcon.ts"),
				ct = n("./src/reddit/constants/modals.ts"),
				lt = n("./src/reddit/actions/inContextModeration.ts"),
				ut = n("./src/reddit/actions/subredditModeration/index.ts"),
				mt = n("./src/reddit/actions/subredditModeration/ban.ts"),
				bt = n("./src/reddit/actions/subredditModeration/mute.ts"),
				pt = n("./src/reddit/actions/userFlair/index.ts"),
				ft = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ht = n("./src/reddit/selectors/bannedUser.ts"),
				vt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				xt = n("./src/reddit/selectors/muted.ts"),
				Ot = n("./src/reddit/selectors/subredditModeration.ts"),
				_t = n("./src/reddit/selectors/userFlair.ts"),
				gt = n("./src/reddit/components/Hovercards/helpers.ts"),
				It = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less"),
				Nt = n.n(It);
			const {
				fbt: Ct
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var kt;
			! function(e) {
				e.ModLog = "ModLog", e.Ban = "Ban", e.Unban = "Unban", e.AddNote = "AddNote", e.Mute = "Mute", e.Unmute = "Unmute", e.Flair = "Flair", e.Modmail = "Modmail"
			}(kt || (kt = {}));
			var jt = e => {
					var t, n;
					const o = Object(b.a)(),
						i = Object(s.d)(),
						{
							className: d,
							contextId: c,
							subredditId: l,
							username: u,
							onChangeView: p
						} = e,
						f = Object(s.e)(e => l ? Object(_t.d)(e, {
							subredditId: l
						}) : void 0),
						h = !!(null == f ? void 0 : f.templateIds) && (null === (t = null == f ? void 0 : f.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						v = !!(null === (n = null == f ? void 0 : f.displaySettings) || void 0 === n ? void 0 : n.isEnabled),
						x = Object(s.e)(t => Object(vt.b)(ft.c.access)(t, e)),
						O = Object(s.e)(t => Object(vt.b)(ft.c.mail)(t, e)),
						_ = Object(s.e)(t => Object(vt.b)(ft.c.flair)(t, e)),
						g = Object(s.e)(e => Object(j.Ab)(e, {
							userName: u
						})),
						I = Object(s.e)(e => !!Object(ht.b)(e, {
							subredditId: l,
							username: u
						})),
						N = Object(s.e)(e => Object(xt.a)(e, l, g.id)),
						k = Object(s.e)(e => Object(Ot.g)(e, l, g.id)),
						E = Object(s.e)(j.k),
						y = !!E && Object(it.e)(E) === u,
						P = Object(s.e)(e => l ? e.subreddits.models[l] : null),
						U = Object(s.e)(e => {
							if (c) return Object(M.g)(e, g.id, l, w.o.All)
						}),
						S = Object(r.useCallback)(() => {
							i(Object(ut.g)(l))
						}, [i, l]),
						A = Object(r.useCallback)(() => {
							i(Object(mt.c)(l, {
								username: u
							}))
						}, [i, l, u]),
						B = Object(r.useCallback)(() => {
							i(Object(mt.e)(l, g.id)), o(Ze.e(c))
						}, [g.id, l, i, c, o]),
						T = Object(r.useCallback)(() => {
							i(Object(lt.c)({
								username: u,
								subredditId: l,
								contextId: c
							})), i(Object(mt.a)(l, u)), o(Ze.a(c))
						}, [o, i, u, l, c]),
						L = Object(r.useCallback)(() => {
							i(Object(bt.b)(l))
						}, [i, l]),
						D = Object(r.useCallback)(() => {
							i(Object(lt.d)({
								username: u,
								subredditId: l,
								contextId: c
							})), i(Object($.i)(ct.a.MUTE_USER)), o(Ze.d(c))
						}, [o, i, u, l, c]),
						F = Object(r.useCallback)(() => {
							i(Object(bt.d)(l, g.id)), o(Ze.f(c))
						}, [o, i, g.id, l, c]),
						H = Object(r.useCallback)(() => {
							i(Object(pt.g)(l, u)), o(Ze.c(c))
						}, [o, i, u, l, c]),
						R = Object(r.useCallback)(() => l && o(Object(m.l)({
							subredditId: l,
							userId: g.id
						})), [l, g, o]),
						W = Object(r.useCallback)(e => {
							e.stopPropagation(), p && p(), l && o(Object(m.k)({
								subredditId: l,
								userId: g.id
							}))
						}, [l, g, o, p]),
						K = Object(r.useCallback)(e => {
							e.stopPropagation(), p && p(w.o.Note), l && o(Object(m.a)({
								subredditId: l,
								userId: g.id
							}))
						}, [l, g, o, p]);
					if (Object(r.useEffect)(() => {
							g && (S(), L(), !g.isSuspended && A())
						}, [g]), !g) return null;
					const G = P && u ? `?toSubredditName=${P.name}&toUserName=${u}` : "",
						Z = {
							[kt.ModLog]: x,
							[kt.Ban]: !g.isSuspended && x && !y && I,
							[kt.Unban]: !g.isSuspended && x && !y && !I,
							[kt.AddNote]: x,
							[kt.Mute]: !g.isSuspended && !N && !k && !y && x && O,
							[kt.Unmute]: !g.isSuspended && N && !k && !y && x && O,
							[kt.Flair]: _ && h && v,
							[kt.Modmail]: O
						};
					return a.a.createElement("div", {
						className: d
					}, Z[kt.ModLog] && a.a.createElement(gt.a, {
						role: "button",
						onClick: W,
						className: Nt.a.item
					}, a.a.createElement(C.a, {
						name: "mod",
						className: Nt.a.icon
					}), Ct._("User Mod Log", null, {
						hk: "2PiT0s"
					}), !!U && a.a.createElement("span", {
						className: Nt.a.notesCount
					}, U)), Z[kt.AddNote] && a.a.createElement(gt.a, {
						role: "button",
						onClick: K,
						className: Nt.a.item
					}, a.a.createElement(C.a, {
						name: "user_note",
						className: Nt.a.icon
					}), Ct._("Add Note", null, {
						hk: "34JqdA"
					})), Z[kt.Ban] && a.a.createElement(gt.a, {
						role: "button",
						onClick: B,
						className: Nt.a.item
					}, a.a.createElement(C.a, {
						name: "unban",
						className: Nt.a.icon
					}), Ct._("Unban User", null, {
						hk: "1aASyW"
					})), Z[kt.Unban] && a.a.createElement(gt.a, {
						role: "button",
						onClick: T,
						className: Nt.a.item
					}, a.a.createElement(C.a, {
						name: "ban",
						className: Nt.a.icon
					}), Ct._("Ban User", null, {
						hk: "3OhuLx"
					})), Z[kt.Mute] && a.a.createElement(gt.a, {
						role: "button",
						onClick: D,
						className: Nt.a.item
					}, a.a.createElement(C.a, {
						name: "mod_mute",
						className: Nt.a.icon
					}), Ct._("Mute User", null, {
						hk: "3MCujH"
					})), Z[kt.Unmute] && a.a.createElement(gt.a, {
						role: "button",
						onClick: F,
						className: Nt.a.item
					}, a.a.createElement(C.a, {
						name: "mod_unmute",
						className: Nt.a.icon
					}), Ct._("Unmute User", null, {
						hk: "sBvvx"
					})), Z[kt.Flair] && a.a.createElement(gt.a, {
						role: "button",
						onClick: H,
						className: Nt.a.item
					}, a.a.createElement(C.a, {
						name: "tag",
						className: Nt.a.icon
					}), Ct._("Edit user flair", null, {
						hk: "4mTxM"
					})), Z[kt.Modmail] && a.a.createElement(gt.a, {
						role: "button",
						className: Nt.a.item
					}, a.a.createElement("a", {
						href: `https://mod.reddit.com/mail/create${G}`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: R,
						className: Nt.a.userActionItemInner
					}, a.a.createElement(C.a, {
						name: "mod_mail",
						className: Nt.a.icon
					}), Ct._("Send modmail", null, {
						hk: "ZUN0n"
					}))))
				},
				Et = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				yt = n.n(Et);
			const wt = e => {
					var t, n;
					return a.a.createElement("div", {
						className: yt.a.userDetails
					}, a.a.createElement("div", null, a.a.createElement(We.a, {
						className: yt.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && a.a.createElement(a.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isGold && a.a.createElement(We.a, {
						to: "/premium"
					}, a.a.createElement(ot.a, {
						className: yt.a.PremiumIcon
					})), e.user.isEmployee && a.a.createElement(qe.a, null), e.user.isNSFW && a.a.createElement(st.a, {
						className: yt.a.nsfwIcon,
						title: f.fbt._("NSFW - Adult Content", null, {
							hk: "2Iw7mN"
						})
					})), a.a.createElement("div", {
						className: yt.a.UserNameMetaData
					}, a.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, `u/${e.user.username}`, a.a.createElement("div", {
						className: yt.a.Bullet
					}, "•")), a.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ye.d, {
						seconds: e.user.createdUtc || e.user.created
					}), a.a.createElement("div", {
						className: yt.a.Bullet
					}, "•"))), a.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(le.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				Pt = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: r,
						prefersReducedAnimations: s
					} = e, o = {
						...at.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return a.a.createElement("div", {
						className: yt.a.userInfoGrid
					}, a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(o.fromPosts)), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(o.fromComments)), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(o.fromAwardsReceived)), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(o.fromAwardsGiven)), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), r.length > 0 && (e => a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("div", {
						className: yt.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = a.a.createElement("img", {
							className: yt.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name,
							key: `${e.id}-icon`
						});
						return e.url ? a.a.createElement("a", {
							target: Ke.d.BLANK,
							rel: Ke.c,
							href: e.url,
							key: e.id
						}, n) : n
					})), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(r), i && ((e, t) => a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("div", {
						className: yt.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var r, s;
						if (!(n >= 3)) return a.a.createElement("img", {
							alt: null !== (r = null == e ? void 0 : e.description) && void 0 !== r ? r : null == e ? void 0 : e.name,
							key: null !== (s = null == e ? void 0 : e.description) && void 0 !== s ? s : null == e ? void 0 : e.name,
							className: yt.a.recentAwardOrTropyIcon,
							src: Object(dt.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, s))
				};
			var Ut = e => {
					var t;
					const {
						contextId: n,
						currentUser: s,
						hideNSFWPref: o,
						hoverId: i,
						isLoggedIn: d,
						isNightMode: l,
						moderatorPermissions: u,
						style: p,
						userName: h,
						user: v,
						isCurrentUserBanned: x,
						userProfileStyles: O,
						acceptChats: _,
						isCommentAuthorBlocked: g,
						trophyCase: I,
						lastAuthorModNote: N,
						userIsSubscriber: C,
						subredditId: k,
						prefersReducedAnimations: j,
						onChangeView: E
					} = e, y = Object(b.a)();
					if (Object(r.useEffect)(() => {
							v && k && y(Object(m.x)({
								subredditId: k,
								userId: v.id
							}))
						}, [v, k]), !v) return a.a.createElement("div", {
						style: p
					});
					const w = !!s && Object(it.e)(s) === h,
						P = d && !w && !x && _ && !g,
						U = v.hasUserProfile && !x && !g && !w && v.enableFollowers,
						S = null == u ? void 0 : u.access,
						A = v.isNSFW && o ? `${Re.a.assetPath}/img/user-info-banner.png` : (null == O ? void 0 : O.bannerBackgroundImage) ? O.bannerBackgroundImage : v.bannerImage,
						M = l ? "##D7DADC" : "#0079D3",
						B = l ? "#121212" : "#FFF";
					return a.a.createElement("div", {
						className: yt.a.Container,
						id: i,
						style: {
							backgroundColor: B,
							...p
						}
					}, a.a.createElement("div", {
						className: yt.a.UserContainer
					}, a.a.createElement("div", {
						className: yt.a.BannerImage,
						style: A ? {
							backgroundImage: `url('${A}')`
						} : {}
					}), a.a.createElement("div", {
						className: yt.a.snoovatarContainer
					}, v.snoovatarFullBodyAsset ? a.a.createElement(tt.a, {
						className: yt.a.snoovatar,
						isGold: v.isGold,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						prefersReducedAnimations: !!j,
						origin: Je.a.Hovercard
					}) : (null === (t = v.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? a.a.createElement("div", {
						className: yt.a.anonymousSnoovatar
					}, a.a.createElement(Ve, null)) : a.a.createElement(rt.a, {
						className: yt.a.UserIcon,
						iconUrl: v.accountIcon,
						isNSFW: v.isNSFW,
						userName: h
					}))), a.a.createElement(wt, {
						user: v,
						userName: h
					}), a.a.createElement(ne.default, {
						className: yt.a.profileLink,
						to: `/user/${h}/`
					}, f.fbt._("View full profile", null, {
						hk: "2s4Gmf"
					})), a.a.createElement("div", {
						className: yt.a.profileButtonGroup
					}, P && a.a.createElement(Xe.b, {
						className: Object(c.a)(yt.a.ChatButton, yt.a.profileButtonLeft, {
							[yt.a.onlyButton]: !U
						}),
						contextId: n,
						userId: v.id,
						text: f.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0,
						style: {
							color: B,
							backgroundColor: M
						}
					}), U && a.a.createElement(nt.a, {
						className: Object(c.a)(yt.a.SubscribeButton, yt.a.profileButtonRight, {
							[yt.a.onlyButton]: !P
						}),
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(Ze.h)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0,
						style: {
							color: C ? "#D7DADC" : B,
							backgroundColor: M,
							width: 144
						}
					})), a.a.createElement(Pt, {
						user: v,
						trophyCase: I || [],
						prefersReducedAnimations: !!j
					}), S && N && a.a.createElement(et.b, {
						className: yt.a.lastModNote,
						modNote: N,
						subredditId: k || "",
						onClick: e => {
							e.stopPropagation(), E()
						},
						context: et.a.ModIdCard
					}), n && k && h && !Object(Ge.a)(h) && a.a.createElement(jt, {
						contextId: n,
						subredditId: k,
						username: h,
						onChangeView: E
					}), a.a.createElement($e.i, {
						contextId: n,
						subredditId: k,
						user: v
					}), a.a.createElement("div", {
						className: yt.a.BottomSpacer
					}))
				},
				St = n("./src/reddit/hooks/useGqlContext.ts"),
				At = n("./src/lib/makeGqlRequest/index.ts"),
				Mt = n("./src/redditGQL/operations/ProxyAuthor.json");

			function Bt() {
				return (Bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var Tt = e => {
				const t = Object(s.d)(),
					n = Object(St.a)(),
					i = Object(Ge.a)(e.userName),
					[d, c] = Object(r.useState)(i ? void 0 : e.userName);
				Object(r.useEffect)(() => {
					i && (async () => {
						if (!e.contextId) return;
						const r = await ((e, t) => Object(At.a)(e, {
							...Mt,
							variables: {
								thingId: t,
								isPost: Object(u.a)(t)
							}
						}))(n(), e.contextId);
						if (r.ok) {
							const e = r.body,
								n = e.data.commentById || e.data.postInfoById,
								a = n && "DeletedComment" !== n.__typename ? n.moderationInfo.proxyAuthor : void 0;
							a && a.displayName && (c(a.displayName), t(Object(o.d)(a.displayName)))
						}
					})()
				}, [d]);
				const l = Object(s.e)(e => d && Object(j.Ab)(e, {
					userName: d
				}));
				return i ? d && l ? a.a.createElement(Dt, Bt({}, e, {
					userName: d,
					user: l
				})) : a.a.createElement("div", null) : a.a.createElement(Dt, e)
			};

			function Lt() {
				return (Lt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = e => {
					var t, n, c;
					const l = Object(s.e)(d.c),
						u = !!(null == l ? void 0 : l.isModNotesView),
						[m, b] = Object(r.useState)(!u),
						[p, f] = Object(r.useState)(w.o.All),
						h = Object(s.d)();
					Object(r.useEffect)(() => {
						h(Object(o.d)(e.userName))
					}, [h, e.userName]);
					const v = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (c = e.lastAuthorModNote) || void 0 === c ? void 0 : c.user.id : e.user.id;
					Object(r.useEffect)(() => {
						e.subredditId && v && h(Object(i.d)(e.subredditId, v))
					}, [h, e.subredditId, v]);
					const x = Object(r.useCallback)(e => {
						b(!m), f(e || w.o.All)
					}, [m, b]);
					return !m && e.subredditId && v ? a.a.createElement(Fe, {
						className: yt.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: v,
						onChangeView: x,
						defaultTypeFilter: p,
						thingId: e.contextId
					}) : a.a.createElement(Ut, Lt({}, e, {
						onChangeView: x
					}))
				},
				Ft = {
					height: 710,
					width: 340
				},
				Ht = e => a.a.createElement(He.a, {
					className: yt.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					tooltipSizeEstimate: Ft,
					hideCaret: !0
				}, a.a.createElement(Tt, e));
			Ht.WrappedComponent = Dt;
			t.default = Ht
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/Hovercards/helpers.ts"),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class b extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(u.g)(this.props.postOrComment.id))
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
					}, e.children), a.a.createElement(d.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: r,
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				d = e => e.alwaysShowChildren ? a.a.createElement(a.a.Fragment, null, e.children) : null;
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
				container: "_1sbZnfdaxhCOFVUCJ3Z75m"
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
				return v
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var i = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const i = Object(o.a)(),
						d = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : i
						};
					return a.a.createElement(a.a.Fragment, null, Object(s.d)(t, d))
				},
				d = n("./src/lib/humanizeDate/index.ts");
			var c = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const s = Object(o.a)(),
						i = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : s
						};
					return a.a.createElement(a.a.Fragment, null, Object(d.a)(t, i))
				},
				l = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				u = n("./src/lib/constants/index.ts");
			var m = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const r = Object(o.a)(),
						s = null != n ? n : r;
					return a.a.createElement(a.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
						const n = e * u.Sb;
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
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function f(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function h(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.DEFAULT_LOCALE;
				const a = Object(p.e)(e, t),
					s = new Date(e * u.Sb);
				let o;
				if (a === p.a.Live || n) return b.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return a === p.a.Future ? o = Object(p.d)(e) ? b.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? f(s, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, r) : a === p.a.Past && (o = Object(p.d)(e) ? b.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : f(s, r)), `${o} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,r)}`
			}
			var v = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: s
				} = e;
				const i = Object(o.a)(),
					d = null != s ? s : i;
				return a.a.createElement(a.a.Fragment, null, h(t, n, r, d))
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => a.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				v = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return a.a.createElement(f, {
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
				O = Object(d.a)(v, [i.a.Click, i.a.Keydown]),
				_ = Object(d.a)(h, [i.a.Click, i.a.Keydown]),
				g = Object(s.b)(x);
			t.c = g(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? a.a.createElement(O, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : a.a.createElement(_, b({}, e, {
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
				return r
			}));
			var r, a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/trackers/modNote.ts"),
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
			}(r || (r = {}));
			t.b = e => {
				var t, n, r;
				const s = Object(i.e)(h.db),
					{
						className: v,
						modNote: O,
						onClick: _,
						subredditId: g,
						context: I
					} = e,
					N = "label" in O && O.label || f.c,
					C = "note" in O ? O.note : void 0,
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
					}).format(new Date(O.createdAt)),
					y = O.commentInfo,
					{
						postInfo: w
					} = O,
					P = w ? w.permalink : y ? y.permalink : void 0,
					U = Object(p.b)("external_link"),
					S = Object(l.a)();
				return o.a.createElement("div", {
					className: Object(d.a)(v, x.a.modNote),
					onClick: e => {
						e.stopPropagation(), _ && _(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === I && c.e || "ModIdCard" === I && c.i;
							e && S(e({
								modNote: O,
								subredditId: g
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
				}, o.a.createElement(m.default, {
					className: x.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === I && c.o || "ModIdCard" === I && c.p;
							e && S(e({
								modNote: O,
								subredditId: g
							}))
						})()
					},
					to: `/user/${null===(t=O.operator)||void 0===t?void 0:t.displayName}/`
				}, o.a.createElement(u.a, {
					className: x.a.userIcon,
					userName: (null === (n = O.operator) || void 0 === n ? void 0 : n.displayName) || "",
					isNSFW: !1
				}), "u/", null === (r = O.operator) || void 0 === r ? void 0 : r.displayName), o.a.createElement("span", {
					className: x.a.createdDate
				}, a.fbt._("on {createdDate}", [a.fbt._param("createdDate", E)], {
					hk: "2VoP7K"
				})), P && o.a.createElement("a", {
					className: x.a.link,
					href: P || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === I && c.f || "ModIdCard" === I && c.g;
							e && S(e({
								modNote: O,
								subredditId: g
							}))
						})()
					}
				}, o.a.createElement(U, {
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const n = Object(s.a)(e, t);
				class r extends a.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return a.a.createElement(n, d({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(r)
			}
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/helpers/describeApiError/index.ts"),
				d = n("./src/reddit/components/PostList/index.m.less"),
				c = n.n(d);
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
					className: c.a.somethingWrong
				}, s.a.createElement("div", {
					className: c.a.somethingWrongText
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
				s = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends a.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: i
					} = t, l = r.description ? r.description : r.name;
					return a.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${n}/gilded`
					}, a.a.createElement("div", {
						className: d.a.iconColumn
					}, a.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), i > 1 && a.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(i-1)}`)), a.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", r.name), c._plural(i)], {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				d = n("./src/reddit/models/User/index.ts"),
				c = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
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
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? s.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(d.e)(n) === c ? s.a.createElement(i.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && a ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(a.c)({
					currentUser: o.k,
					hideNSFWPref: o.F
				}),
				d = Object(r.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(s.C)(t, n))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/snoovatarModal.ts"),
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
				const O = Object(l.b)(),
					_ = Object(o.d)(),
					g = f && f.id,
					I = f && f.voteState;
				let N = null;
				g || (N = t ? "user_hovercard" : "profile_overview");
				const C = Object(a.useCallback)(() => O(Object(m.h)(t ? "user_hovercard" : "profile_overview", n)), [t, O, n]);
				return s.a.createElement(u.t, {
					onClick: () => {
						i ? (O(m.i), g && I === p.a.notVoted && _(Object(d.kb)(g))) : C();
						const e = i ? "postify" : "copy";
						_(Object(c.b)({
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
				d = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: n,
					className: r,
					isOwnProfile: c,
					onClick: m
				} = e;
				return a.a.createElement(o.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !n && c,
						[l.a.compactButtonLayout]: t
					}, r)
				}, n ? a.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : a.a.createElement("div", {
					className: l.a.shirtIcon
				}), n ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : c ? u._("Create Avatar", null, {
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
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = n.n(d),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: n,
					username: r,
					editMode: d,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return a.a.createElement("div", {
					className: c.a.bannerWrapper
				}, a.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: n,
					userName: r
				}), d && t && (l ? a.a.createElement(s.a, {
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
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: n,
					url: r,
					userCreated: d,
					username: c,
					...l
				} = e;
				const u = n ? a.a.createElement(a.a.Fragment, null, "u/", c, " · ", a.a.createElement(o.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
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
				return N
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				c = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
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
				O = f("particleFloat", b.a),
				_ = () => {
					const e = h(x),
						t = h(O),
						n = h(v);
					return Object(a.a)(b.a.particle, e, t, n)
				};
			class g extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < p; t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						role: "presentation",
						className: b.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: `${_()}`
					})
				}
			}
			var I = g;
			const N = e => {
				let {
					className: t,
					isGold: n,
					snoovatarUrl: s,
					prefersReducedAnimations: m,
					origin: p
				} = e;
				const f = Object(i.e)(u.b),
					h = s && Object(l.d)(s) && f,
					v = p === c.a.Profile,
					x = p === c.a.Hovercard;
				return h ? o.a.createElement("div", {
					className: Object(a.a)({
						[b.a.profileTreatment]: v,
						[b.a.hovercardTreatment]: x
					})
				}, o.a.createElement("div", {
					className: b.a.nftProfileUnitContainer
				}, o.a.createElement(d.a, {
					className: b.a.nftProfileUnit,
					imageUrl: s,
					origin: p
				}))) : o.a.createElement("div", {
					className: Object(a.a)(b.a.snoovatarContainer, t)
				}, n && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: b.a.topGlow
				}), o.a.createElement("div", {
					className: b.a.bottomGlow
				}), !m && o.a.createElement(I, null)), o.a.createElement("img", {
					className: Object(a.a)(b.a.snoovatar, {
						[b.a.premiumGlow]: n
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
				i = n("./src/reddit/components/Admin/index.tsx"),
				d = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
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
				}, t || n, l && o.a.createElement("a", {
					title: a.fbt._("{username} has Reddit Premium", [a.fbt._param("username", n)], {
						hk: "3Fylv"
					}),
					href: `${r.a.redditUrl}/premium`
				}, o.a.createElement(c.a, {
					className: u.a.snoovatarPremiumIcon
				})), s && o.a.createElement(i.a, null), m && o.a.createElement(d.a, {
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				f = n.n(p),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				v = n.n(h),
				x = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				O = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: n,
					currentUserHasSnoovatar: r,
					editMode: p,
					isDeletingBanner: h,
					isEmployee: _,
					isGold: g,
					isNSFW: I,
					isOwnProfile: N,
					onClickSnoovatar: C,
					onDeleteBanner: k,
					prefersReducedAnimations: j,
					snoovatarUrl: E,
					title: y,
					userCreated: w,
					username: P,
					url: U,
					isHovercard: S
				} = e;
				const A = Object(s.e)(e => !N && !!E && Object(c.f)(e));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: I,
					username: P,
					isDeletingBanner: !!h,
					onDeleteBanner: k
				}), !p && N && a.a.createElement(o.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, a.a.createElement(d.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), a.a.createElement(x.a, {
					isGold: g,
					snoovatarUrl: E,
					prefersReducedAnimations: j,
					origin: S ? i.a.Hovercard : i.a.Profile
				}), a.a.createElement(O.a, {
					isEmployee: _,
					isGold: g,
					isNSFW: I,
					title: y,
					username: P
				}), a.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: P,
					userCreated: w,
					url: U
				}), (N || !r && !!E) && a.a.createElement(l.a, {
					compact: n,
					currentUserHasSnoovatar: r,
					isOwnProfile: N,
					onClick: C
				}), A && a.a.createElement(u.a, {
					username: P,
					isHovercard: !!S,
					share: {
						username: P
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
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = n.n(d),
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
						className: Object(l.a)(a.className, c.a.BaseButton),
						size: r ? o.d.S : o.d.M
					}))
				},
				p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
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
						className: Object(l.a)(i.className, c.a.BaseButton),
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
						style: d
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: a,
						isFullWidth: o,
						style: d
					};
					return this.props.userIsSubscriber ? s.a.createElement(f, u({}, c, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(b, u({}, c, {
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
				d = n.n(i);
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
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
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
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
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
					return e.map((e, s) => a.a.createElement(d.b, {
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
						menuItemsClassName: d,
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
					}, p), n), f ? null : b ? a.a.createElement(c.a, {
						sizePx: 8,
						className: o.a.loadingIcon
					}) : a.a.createElement(l.a, {
						name: "caret_down"
					})), a.a.createElement("div", {
						className: Object(i.a)(o.a.menuItems, d, {
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
					case a.I.AUTHORIZATION_ERROR:
						return n ? r.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : r.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case a.I.VALIDATION_ERROR:
						return r.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case a.I.NOT_FOUND_ERROR:
						return r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case a.I.SERVER_ERROR:
						return r.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case a.I.LIKELY_UBLOCK_ERROR:
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
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				s = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var i;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(i || (i = {}));
			const d = e => t => {
				const n = Object(r.n)(t);
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
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(s.e)(o.j) || a.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? a.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || a.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? a.DEFAULT_LOCALE : e
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
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			var r, a = n("./node_modules/react/index.js");

			function s(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Bottom;
				const [n, s] = Object(a.useState)(e), o = Object(a.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: n,
					calculateGradientVisibility: () => {
						const e = o.current;
						if (!e) return;
						const n = e.getBoundingClientRect().height,
							{
								scrollHeight: a,
								scrollTop: i
							} = e,
							d = Math.ceil(i + n) >= a,
							c = Math.ceil(n - i) >= a,
							l = t === r.Bottom ? d : c;
						s(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(r || (r = {}))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			})
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
				return d
			})), n.d(t, "a", (function() {
				return c
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
				d = {
					[s.w.BotBan]: "#1717604F",
					[s.w.PermaBan]: "#3E0A514F",
					[s.w.Ban]: "#5B00414F",
					[s.w.AbuseWarning]: "#6D001A4F",
					[s.w.SpamWarning]: "#5423134F",
					[s.w.SpamWatch]: "#3A26194F",
					[s.w.SolidContributor]: "#0044414F",
					[s.w.HelpfulUser]: "#02315C4F",
					[o]: "#242424"
				},
				c = {
					[s.w.BotBan]: "#CCD7FF",
					[s.w.PermaBan]: "#F3CCFF",
					[s.w.Ban]: "#FFC9D2",
					[s.w.AbuseWarning]: "#FFD5AE",
					[s.w.SpamWarning]: "#FFF494",
					[s.w.SpamWatch]: "#EAD5A2",
					[s.w.SolidContributor]: "#CBFD9A",
					[s.w.HelpfulUser]: "#A6EDFF",
					[o]: "#E6E6E6"
				},
				l = {
					[s.w.BotBan]: "bot_fill",
					[s.w.PermaBan]: "bot_fill",
					[s.w.Ban]: "ban_fill",
					[s.w.AbuseWarning]: "spoiler_fill",
					[s.w.SpamWarning]: "spoiler_fill",
					[s.w.SpamWatch]: "nsfw_language_fill",
					[s.w.SolidContributor]: "new_fill",
					[s.w.HelpfulUser]: "peace_fill",
					[o]: "user_note_fill"
				},
				u = {
					[s.w.BotBan]: "#5349DA",
					[s.w.PermaBan]: "#9C3CAC",
					[s.w.Ban]: "#DE107F",
					[s.w.AbuseWarning]: "#FB133A",
					[s.w.SpamWarning]: "#E79800",
					[s.w.SpamWatch]: "#9C6926",
					[s.w.SolidContributor]: "#00A368",
					[s.w.HelpfulUser]: "#006DC6",
					[o]: "#818384"
				},
				m = {
					[s.w.BotBan]: () => r.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[s.w.PermaBan]: () => r.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[s.w.Ban]: () => r.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[s.w.AbuseWarning]: () => r.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[s.w.SpamWarning]: () => r.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[s.w.SpamWatch]: () => r.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[s.w.SolidContributor]: () => r.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[s.w.HelpfulUser]: () => r.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				b = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId
		},
		"./src/reddit/models/inboxBanner/index.ts": function(e, t, n) {
			"use strict";
			var r, a;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.IOS = "IOS_APP", e.ANDROID = "ANDROID_APP", e.DESKTOP = "DESKTOP_APP"
				}(r || (r = {})),
				function(e) {
					e.GOTO = "goto", e.DISMISS = "dismiss"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
					return !(Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: r.ve
					}) === r.Nd)
				},
				o = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.we
				}) === r.Nd
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
				return O
			})), n.d(t, "f", (function() {
				return _
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
				d = (e, t) => {
					let {
						subredditId: n,
						beforeEditable: r,
						afterEditable: s
					} = t;
					const o = Object(a.e)(n, s, r),
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
				O = (e, t) => {
					const n = Object(a.e)(t.subredditId, t.afterEditable, t.beforeEditable);
					return !!e.pages.modHub.moderators.editableUserOrder.api.pending[n]
				},
				_ = Object(r.a)((e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.2483ca52a0e47b9421bc.js.map