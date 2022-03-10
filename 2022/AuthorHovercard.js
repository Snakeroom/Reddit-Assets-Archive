// https://www.redditstatic.com/desktop2x/AuthorHovercard.fdb6acc79f8687b01454.js
// Retrieved at 3/10/2022, 5:50:03 PM by Reddit Dataminer v1.0.0
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

			function s(e, {
				showDay: t,
				useUtc: n,
				shortMonths: s,
				locale: o = a.D
			} = {}) {
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
			t.a = (e, t = a.D) => {
				return new Date(1e3 * e).toLocaleString(t, {
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
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const r = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				o = Object(a.a)(r),
				i = Object(a.a)(s)
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
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return p
			}));
			const a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				d = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				m = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				p = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
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
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.jb.GET,
				data: n
			});
			var I = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				N = n("./src/reddit/models/SubredditModeration/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/bannedUser.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				y = n("./node_modules/redux/es/redux.js");
			var w = (e = null, t) => {
				switch (t.type) {
					case E.o:
					case E.n:
						return null;
					case E.m:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var S = (e = P, t) => {
					switch (t.type) {
						case E.o: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(N.e)(n, a);
							return {
								...e,
								[r]: !0
							}
						}
						case E.n:
						case E.m: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(N.e)(n, a);
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
					pending: S
				});
			const A = {};
			var M = (e = A, t) => {
					switch (t.type) {
						case E.n: {
							const {
								fetchedToken: n,
								subredditId: a
							} = t.payload, r = Object(N.e)(a, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				B = n("./src/reddit/actions/inContextModeration.ts");
			var T = (e = null, t) => {
				switch (t.type) {
					case B.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var D = (e = L, t) => {
					switch (t.type) {
						case E.n: {
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
			var H = (e = R, t) => {
				switch (t.type) {
					case E.l:
					case E.n: {
						const {
							subredditId: n,
							bannedUsers: a
						} = t.payload;
						return Object(F.merge)(e, {
							[n]: a
						})
					}
					case E.s: {
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
			var W = (e = null, t) => {
				switch (t.type) {
					case E.r:
					case E.q:
						return null;
					case E.p:
						return t.payload;
					default:
						return e
				}
			};
			var q = (e = !1, t) => {
					switch (t.type) {
						case E.r:
							return !0;
						case E.q:
						case E.p:
							return !1;
						default:
							return e
					}
				},
				K = Object(y.c)({
					error: W,
					pending: q
				});
			var G = (e = null, t) => {
					switch (t.type) {
						case E.r:
						case E.p:
							return null;
						case E.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				Z = Object(y.c)({
					api: K,
					result: G
				});
			const J = {};
			var z = (e = J, t) => {
					switch (t.type) {
						case E.n: {
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
						case E.s: {
							const {
								subredditId: n,
								userId: a
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== a)
							}
						}
						case E.l: {
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
				Q = Object(y.c)({
					api: U,
					fetchedTokens: M,
					inContext: T,
					loadMore: D,
					models: H,
					search: Z,
					userOrder: z
				});
			Object(j.a)({
				features: {
					banned: Q
				}
			});
			const V = Object(o.a)(E.o),
				X = Object(o.a)(E.n),
				Y = Object(o.a)(E.m),
				$ = (e, t = {}) => async (n, a, {
					apiContext: r
				}) => {
					const s = a(),
						o = t.after || "",
						i = Object(N.e)(e, o),
						c = s.features.banned.fetchedTokens[i];
					if (s.features.banned.api.pending[i] || c) return;
					n(V({
						subredditId: e,
						fetchedToken: o
					}));
					const d = s.subreddits.models[e].name,
						l = await x(r(), d, t);
					l.ok ? n(X({
						...l.body,
						fetchedToken: o
					})) : n(Y({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(E.r), te = Object(o.a)(E.q), ne = Object(o.a)(E.p), ae = (e, t) => async (n, a, {
					apiContext: r
				}) => {
					const s = a().subreddits.models[e].name,
						o = {
							username: Object(I.a)(t)
						};
					n(ee());
					const i = await x(r(), s, o);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, re = Object(o.a)(E.l), se = Object(o.a)(E.s), oe = (e, t, n) => async (r, o, {
					apiContext: c
				}) => {
					const d = o(),
						m = d.subreddits.models[e].url,
						h = d.subreddits.models[e].name;
					t.username = Object(I.a)(t.username), r(Object(i.h)(n));
					const v = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
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
					}))(c(), m, t);
					if (v.ok) {
						r(Object(i.e)(n));
						const e = {
							username: t.username
						};
						r(Object(l.f)({
							kind: _.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await x(c(), h, e);
						s.ok && r(re(s.body))
					} else {
						r(Object(i.f)(n, v.error));
						const e = s()(v, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const i = r().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), i, t);
					if (c.ok) n(se({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: _.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, a) => {
					const r = a();
					await Promise.all([(async () => {
						if (!Object(k.b)(m.a.BAN_USER)(r) && !Object(g.P)(r, {
								subredditId: e
							})) {
							const t = Object(g.S)(r, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const a = Object(O.wb)(r, {
							userName: t
						});
						if (!a) return;
						const s = Object(C.h)(r, {
							subredditId: e
						});
						s && s[a.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(c.i)(m.a.BAN_USER))
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
				operator: "_3mkZJiG1HSCl4dWJD3SJX7",
				createdDate: "_3DKC-l35UqIQdbPaQm6M_T",
				deleteButton: "_3xGgEou3qoyvyHtklgaVwR"
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
				title: "_2ghDKWDpLbqs07Hculyc4f"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "CaQnYM63MUs5K_AUdPb4I",
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
				menuItems: "KQvgghskz0EWs7oUOt5cY",
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
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(a || (a = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: r,
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: f,
				children: h,
				style: v
			}) => {
				return s.a.createElement(d.t, {
					onClick: t => {
						if (b && b(t), e(), p === a.awardNotification) return f();
						r(Object(l.b)(o))
					},
					className: n,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: m,
					isFullWidth: u,
					style: v
				}, h)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(n))
				}
			}));
			t.b = u(Object(c.c)(m))
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
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				b = n("./src/reddit/components/ContentTooltip/index.m.less"),
				f = n.n(b);

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
				I = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: a,
						caretPosition: r,
						caretColor: o,
						onClick: i,
						hideCaret: d,
						...l
					} = e;
					return s.a.createElement("div", h({
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
							"--contentTooltip-caretColor": o && o[r] ? o[r] : Object(u.a)(e).body
						}
					}, l), t)
				}),
				N = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				_ = Object(m.a)(I, [a.a.Click, a.a.Keydown]),
				k = Object(o.b)(N);
			class C extends s.a.Component {
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
					return s.a.createElement(_, h({}, this.props, {
						caretPosition: a,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = k(C)
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
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				m = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = n("./src/reddit/components/EditableImage/index.m.less"),
				p = n.n(u);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: n,
				isProfileCard: a,
				isLoading: u,
				imageUrl: b,
				onFileSelected: f
			}) => {
				const h = Object(s.e)(m.a);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.Container, n)
				}, r.a.createElement("label", {
					className: p.a.HitBox
				}, r.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? r.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), r.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: h ? u : void 0
				}), !u && r.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: a
					})
				}, r.a.createElement(d.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), u && r.a.createElement(c.a, {
					className: p.a.LoadingIcon,
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
				i = n("./src/reddit/actions/inContextModeration.ts"),
				c = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/actions/subredditModeration/ban.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/selectors/bannedUser.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				f = n("./src/reddit/selectors/gold/awardIcon.ts"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				v = n("./src/reddit/selectors/modUserNotes.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				I = n("./src/reddit/selectors/profile.ts"),
				N = n("./src/reddit/selectors/structuredStyles.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/userFlair.ts"),
				O = n("./src/reddit/selectors/userPrefs.ts"),
				E = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/config.ts"),
				w = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = n("./src/lib/lessComponent.tsx"),
				S = n("./src/lib/prettyPrintNumber/index.ts"),
				U = n("./src/reddit/components/ChatButton/index.tsx"),
				A = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				B = n("./src/reddit/components/SubscribeButton/index.tsx"),
				T = n("./src/reddit/components/UserIcon/index.tsx"),
				L = n("./src/reddit/endpoints/profile/info.ts"),
				D = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				F = n("./src/reddit/icons/fonts/Info/index.tsx"),
				R = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				H = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				W = n("./src/reddit/models/Gold/Award.ts"),
				q = n("./src/reddit/models/User/index.ts"),
				K = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				Z = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				J = n("./src/reddit/actions/modal.ts"),
				z = n("./src/reddit/constants/modals.ts"),
				Q = n("./src/reddit/components/Hovercards/helpers.ts"),
				V = n("./src/reddit/icons/fonts/index.tsx"),
				X = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Y = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				$ = n.n(Y);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = Object(o.c)({
				hasModMailPermissions: Object(h.b)(X.c.mail),
				isUserBanned: (e, t) => !!Object(u.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(C.wb)(e, {
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
						toggleMuteModal: c
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, a ? r.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(D.e(t))
						}
					}, r.a.createElement(V.a, {
						name: "ban",
						isFilled: !0,
						className: $.a.icon
					}), ee._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							i(), o(D.a(t))
						}
					}, r.a.createElement(V.a, {
						name: "ban",
						className: $.a.icon
					}), ee._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							c(), o(D.d(t))
						}
					}, r.a.createElement(V.a, {
						name: "mod_mute",
						className: $.a.icon
					}), ee._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ae = Object(s.b)(te, (e, {
					username: t,
					subredditId: n,
					contextId: a
				}) => ({
					onUnbanUser: t => e(Object(d.e)(n, t)),
					requestUserBanInfo: () => e(Object(d.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(i.c)({
							username: t,
							subredditId: n,
							contextId: a
						})), e(Object(d.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(i.d)({
							username: t,
							subredditId: n,
							contextId: a
						})), e(Object(J.i)(z.a.MUTE_USER))
					}
				}))(ne),
				re = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(re.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(Q.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(D.c(e.contextId))
					}
				}, r.a.createElement(V.a, {
					name: "tag",
					className: $.a.icon
				}), se._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ie = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ce = n.n(ie);

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const le = P.a.wrapped(T.a, "UserIcon", ce.a),
				me = P.a.wrapped(B.a, "SubscribeButton", ce.a),
				ue = P.a.wrapped(U.b, "ChatButton", ce.a),
				pe = P.a.wrapped(H.a, "PremiumIcon", ce.a),
				be = P.a.wrapped(w.a, "UserNameLink", ce.a),
				fe = P.a.div("UserNameMetaData", ce.a),
				he = P.a.div("MetaDataItem", ce.a),
				ve = P.a.div("Bullet", ce.a),
				xe = P.a.div("UserNameContainer", ce.a),
				Ie = P.a.div("KarmaGrid", ce.a),
				Ne = P.a.div("GenericKarma", ce.a),
				_e = P.a.a("InfoLink", ce.a),
				ke = P.a.div("KarmaCount", ce.a),
				Ce = P.a.div("GenericKarmaLabel", ce.a),
				ge = P.a.div("BannerImage", ce.a),
				Oe = P.a.div("UserContainer", ce.a),
				Ee = P.a.div("BottomSpacer", ce.a),
				je = P.a.div("Container", ce.a),
				ye = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(be, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && r.a.createElement(R.a, {
					className: ce.a.adminIcon,
					title: j.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(w.a, {
					to: "/premium"
				}, r.a.createElement(pe, null))), r.a.createElement(fe, null, r.a.createElement(he, null, `u/${e.userName}`, r.a.createElement(ve, null, "•")), r.a.createElement(he, null, (e.user.createdUtc || e.user.created) && r.a.createElement(K.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				we = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...L.a,
						...t
					};
					return r.a.createElement(Ie, null, r.a.createElement(Ne, null, r.a.createElement(ke, null, Object(S.b)(n.fromPosts)), r.a.createElement(Ce, null, j.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [j.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(Ne, null, r.a.createElement(ke, null, Object(S.b)(n.fromComments)), r.a.createElement(Ce, null, j.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [j.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), r.a.createElement(Ne, null, r.a.createElement(ke, null, Object(S.b)(n.fromAwardsReceived)), r.a.createElement(Ce, null, j.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [j.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), r.a.createElement(_e, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(F.a, {
						className: ce.a.infoIcon
					})))), r.a.createElement(Ne, null, r.a.createElement(ke, null, Object(S.b)(n.fromAwardsGiven)), r.a.createElement(Ce, null, j.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [j.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), r.a.createElement(_e, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(F.a, {
						className: ce.a.infoIcon
					})))))
				},
				Pe = e => {
					var t, n;
					const {
						className: a,
						contextId: s,
						currentUser: o,
						hideNSFWPref: i,
						hoverId: c,
						isLoggedIn: d,
						onClickSnoovatar: l,
						moderatorPermissions: m,
						prefersReducedAnimations: u,
						profile: p,
						sendEvent: b,
						style: f,
						subredditId: h,
						topAwardIcon: v,
						userName: x,
						user: I,
						userFlair: N,
						isCurrentUserBanned: _,
						userProfileStyles: k,
						acceptChats: C,
						isCommentAuthorBlocked: g
					} = e;
					if (!I) return r.a.createElement(je, {
						style: f
					});
					const O = !!o && Object(q.e)(o) === x,
						E = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						w = I.accountIcon || `${y.a.assetPath}/img/snoo_user_placeholder.png`,
						P = null == m ? void 0 : m.flair,
						S = null == m ? void 0 : m.access,
						U = (null == N ? void 0 : N.templateIds) && (null === (t = null == N ? void 0 : N.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						M = null === (n = null == N ? void 0 : N.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: B
						} = I,
						T = !!I.snoovatarFullBodyAsset,
						L = I.isNSFW && i;
					let F;
					return F = T ? !L && k && k.bannerBackgroundImage || void 0 : L ? `${y.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(je, {
						className: a,
						id: c,
						style: f
					}, !T && F && r.a.createElement(ge, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), r.a.createElement(Oe, null, T ? r.a.createElement(Z.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: E,
						isEmployee: I.isEmployee,
						isGold: I.isGold,
						isNSFW: I.isNSFW,
						isOwnProfile: O,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!u,
						snoovatarUrl: I.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: I.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(xe, null, r.a.createElement(le, {
						iconUrl: w,
						isNSFW: I.isNSFW,
						userName: x
					}), r.a.createElement(ye, {
						title: null == p ? void 0 : p.title,
						user: I,
						userName: x
					})), r.a.createElement(we, {
						user: I
					}), B && r.a.createElement(G.a, {
						recentAwardings: B,
						topAwardIcon: v,
						username: x
					}), d && !O && !_ && C && !g && r.a.createElement(ue, {
						contextId: s,
						userId: I.id,
						text: j.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), I.hasUserProfile && !_ && !g && !O && I.enableFollowers && r.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(D.g)(e ? "unfollow" : "follow", s),
						isFullWidth: !0,
						small: !0
					})), S && s && !O && h && r.a.createElement(ae, {
						contextId: s,
						subredditId: h,
						sendEvent: b,
						username: x
					}), P && s && U && M && h && r.a.createElement(oe, {
						contextId: s,
						subredditId: h,
						sendEvent: b,
						username: x
					}), r.a.createElement(A.i, {
						contextId: s,
						subredditId: h,
						user: I
					}), !(S || d) && r.a.createElement(Ee, null))
				},
				Se = Object(M.a)(Pe),
				Ue = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Se, de({
						isOpen: t
					}, e))
				};
			Ue.WrappedComponent = Pe;
			var Ae = Ue;
			const Me = Object(o.c)({
					activeTooltipId: k.a,
					currentUser: C.k,
					isLoggedIn: C.O,
					hideNSFWPref: C.E,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(h.m)(e, {
						subredditId: t
					}) : void 0,
					prefersReducedAnimations: O.c,
					profile: (e, {
						userName: t
					}) => Object(I.j)(e, {
						profileName: t
					}),
					topAwardIcon: (e, {
						userName: t
					}) => Object(f.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: C.wb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(g.d)(e, {
						subredditId: t
					}) : void 0,
					isCurrentUserBanned: (e, t) => !!Object(_.l)(t) && Object(_.db)(e, t),
					userProfileStyles: (e, t) => Object(N.m)(e, Object(I.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(I.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isInModNotesExperiment: (e, {
						subredditId: t
					}) => Object(b.a)(e, t),
					trophyCase: (e, t) => Object(I.r)(e, Object(I.m)(e, t.userName)),
					isNightMode: C.bb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(m.a)(t.contextId) ? Object(x.G)(e, {
							postId: t.contextId
						}) : Object(p.b)(e, {
							commentId: t.contextId
						});
						return Object(v.a)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, {
						userName: t
					}) => Object(_.eb)(e, {
						identifier: {
							name: t,
							type: "profile"
						}
					}),
					isUserBanned: (e, {
						subredditId: t,
						userName: n
					}) => !!t && !!Object(u.b)(e, {
						subredditId: t,
						username: n
					}),
					totalModNoteCount: (e, t) => {
						if (!t.contextId) return;
						const n = Object(m.a)(t.contextId) ? Object(x.G)(e, {
							postId: t.contextId
						}) : Object(p.b)(e, {
							commentId: t.contextId
						});
						return Object(v.f)(e, null == n ? void 0 : n.authorId, t.subredditId)
					}
				}),
				Be = Object(s.b)(Me, (e, t) => ({
					onClickSnoovatar: () => e(Object(c.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onUnbanUser: n => t.subredditId && e(Object(d.e)(t.subredditId, n)),
					toggleBanModal: () => {
						t.subredditId && t.contextId && (e(Object(i.c)({
							username: t.userName,
							subredditId: t.subredditId,
							contextId: t.contextId
						})), e(Object(d.a)(t.subredditId, t.userName)))
					}
				}));
			t.a = Be(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: () => !e.isInModNotesExperiment && e.onHideTooltip && e.onHideTooltip()
			}, e.isInModNotesExperiment ? r.a.createElement(E.b, {
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
			}) : r.a.createElement(Ae, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
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
				UserActionLink: "_21AFzfeZA9uU-k2elqKe9",
				userActionLink: "_21AFzfeZA9uU-k2elqKe9",
				Container: "_13TK74mTO68JHd1rIx54V4",
				container: "_13TK74mTO68JHd1rIx54V4",
				adminIcon: "_6aKOTkErJXqNqi2z_zzvW",
				profileLink: "zD_YW4RUg8ZJlTGaTVlP1",
				profileButtonGroup: "_2ItHX7a-KsG3uDHp58gZXx",
				centerSingleButton: "_1kc6pvVVauBg2lk0QF7cKQ",
				profileButtonLeft: "VqFzwo5tna6ZZCAXrmTyk",
				profileButtonRight: "_2CZKdAmdaG7IaMmeQEX8Xn",
				onlyButton: "_2SiwcVk9z35uhm2h71elH0",
				buttonRow: "_3hCbA9jgrYlWHfetLa3HIP",
				modButtonLeft: "_2GZqHEOZWgLBaSsKh6hCEz",
				modButtonRight: "Odb_82okMRmFWPVShPJSI",
				notesNumber: "_3EObjQJdtQg_sBFofqbtUh",
				modNoteSection: "_2KuBq6dy50QHyaL59rfhE1",
				modNoteLabel: "Db-RfxrfaQQZZ_PVHa6C9",
				modNoteLabelText: "_1rJ0zo2KALlsPFThQjAm8o",
				modNoteButton: "_2gL8vxmS2VwBFVDZwWOEWV",
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
				i = n("./src/reddit/selectors/tooltip.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/helpers/isPost.ts"),
				m = n("./src/reddit/helpers/trackers/modNote.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/actions/subreddit.ts"),
				b = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = n("./src/reddit/constants/keycodes.ts"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				N = n("./src/reddit/controls/Checkbox/index.tsx"),
				_ = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/models/ModUserNotes/index.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				E = n.n(O),
				j = n("./src/redditGQL/types.ts");
			const y = Object(h.a)(v.b),
				w = ["NONE", j.q.AbuseWarning, j.q.SpamWarning, j.q.SpamWatch, j.q.SolidContributor, j.q.HelpfulUser],
				P = {
					...C.f,
					NONE: () => f.fbt._("None", null, {
						hk: "2r9MPM"
					})
				};
			var S = e => {
					const {
						className: t,
						filter: n,
						subredditId: o,
						userId: i,
						thingId: d
					} = e, [m, u] = Object(a.useState)(), [p, h] = Object(a.useState)(!0), [v, O] = Object(a.useState)(""), [j, S] = Object(a.useState)(!1), U = Object(s.e)(g.bb);
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
					}, []);
					const A = Object(s.d)(),
						M = Object(a.useCallback)(e => {
							e.stopPropagation(), A(Object(b.a)(o, i, v, n, m, p ? d : void 0)), u(void 0), O("")
						}, [A, o, v, i, m, p, d, n]),
						B = Object(a.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== x.a.Enter || e.shiftKey || (e.preventDefault(), M(e))
						}, [M]),
						T = m ? P[m]() : P.NONE(),
						L = m ? m && Object(k.b)(C.e[m], {
							isFilled: !0
						}) : void 0,
						D = m && C.d[m];
					return r.a.createElement("div", {
						className: Object(c.a)(t)
					}, r.a.createElement("div", {
						className: E.a.meta
					}, r.a.createElement("span", {
						className: E.a.labelContainer
					}, r.a.createElement("label", {
						className: E.a.labelText,
						htmlFor: "label"
					}, f.fbt._("Label", null, {
						hk: "39tjG1"
					})), r.a.createElement(_.b, {
						id: "labelSelector",
						className: E.a.dropdown,
						displayText: T,
						buttonIcon: L ? r.a.createElement(L, {
							className: E.a.labelIcon,
							style: {
								...D && {
									color: D
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: w.map(e => {
							const t = P[e](),
								n = "NONE" === e ? void 0 : Object(k.b)(C.e[e], {
									isFilled: !0
								}),
								a = C.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !m : m === e,
								...n && {
									icon: r.a.createElement(n, {
										className: E.a.labelIcon,
										style: {
											color: a,
											fontSize: "15px",
											lineHeight: "15px"
										}
									})
								}
							}
						}),
						onSelect: e => "NONE" === e.value ? u(void 0) : u(e.value),
						buttonClassName: E.a.dropdownButton,
						menuItemsClassName: E.a.menuItems,
						isModNotesStyle: !0
					})), r.a.createElement("span", {
						className: E.a.checkboxContainer
					}, r.a.createElement(N.a, {
						className: E.a.checkbox,
						isCheckboxSelected: p,
						toggleCheckbox: () => h(!p)
					}), d && Object(l.a)(d) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), r.a.createElement("span", {
						className: E.a.textareaContainer
					}, r.a.createElement("textarea", {
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(c.a)(E.a.textarea, {
							[E.a.isNightMode]: U
						}),
						onChange: e => O(e.target.value),
						onKeyDown: B,
						onClick: e => e.stopPropagation(),
						placeholder: f.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: v,
						maxLength: 250
					}), r.a.createElement(y, {
						isOpen: j
					}, r.a.createElement("div", {
						className: E.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), r.a.createElement("div", {
						className: E.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), r.a.createElement(I.t, {
						className: Object(c.a)(E.a.sendButton, {
							[E.a.isNightMode]: U,
							[E.a.isDisabled]: 0 === v.length
						}),
						disabled: 0 === v.length,
						Icon: () => r.a.createElement(k.a, {
							className: Object(c.a)(E.a.iconSend, {
								[E.a.isDisabled]: 0 === v.length
							}),
							name: "send",
							isFilled: !0
						}),
						size: I.d.XS,
						iconPosition: I.h.C,
						onClick: M,
						onMouseEnter: () => S(!0),
						onMouseLeave: () => S(!1),
						style: 0 === v.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				U = n("./src/reddit/selectors/subreddit.ts"),
				A = n("./src/reddit/components/SubredditIcon/index.tsx"),
				M = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				B = n.n(M);
			const T = [j.k.All, j.k.Note, j.k.Invite, j.k.Ban, j.k.Mute, j.k.ContentChange, j.k.Removal, j.k.Approval, j.k.Spam, j.k.ModAction],
				L = {
					[j.k.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[j.k.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[j.k.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[j.k.Ban]: () => f.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[j.k.Mute]: () => f.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[j.k.ContentChange]: () => f.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[j.k.Removal]: () => f.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[j.k.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[j.k.ModAction]: () => f.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[j.k.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				D = {
					[j.k.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[j.k.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[j.k.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[j.k.Ban]: () => f.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[j.k.Mute]: () => f.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[j.k.ContentChange]: () => f.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[j.k.Removal]: () => f.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[j.k.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[j.k.ModAction]: () => f.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[j.k.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var F = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						onChangeSubredditId: i,
						filter: d,
						onChangeFilter: l,
						onChangeView: p
					} = e, b = Object(u.a)(), h = Object(s.e)(e => Object(U.o)(e, void 0)), v = h.find(e => e.id === n), x = D[d](), I = Object(k.b)("back_fill"), N = Object(a.useCallback)(() => b(Object(m.k)({
						userId: o,
						subredditId: n
					})), [o, n, b]), C = Object(a.useCallback)(e => {
						i(e.value), b(Object(m.s)({
							userId: o,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [o, n, b, i]), g = Object(a.useCallback)(() => b(Object(m.l)({
						userId: o,
						subredditId: n
					})), [o, n, b]), O = Object(a.useCallback)(e => {
						l(e.value), b(Object(m.t)({
							userId: o,
							subredditId: n,
							filteredType: e.value
						}))
					}, [o, n, b, l]);
					return r.a.createElement("div", {
						className: Object(c.a)(t, B.a.wrapper),
						role: "navigation"
					}, r.a.createElement("div", {
						className: B.a.backWrapper
					}, r.a.createElement("button", {
						"aria-label": f.fbt._("Back", null, {
							hk: "3ojpRo"
						}),
						className: B.a.backButton,
						onClick: p
					}, r.a.createElement(I, null))), v && h.length && r.a.createElement("div", {
						className: B.a.subredditsWrapper
					}, r.a.createElement(_.b, {
						id: "subredditFilter",
						className: B.a.subreddits,
						buttonClassName: B.a.dropdownButton,
						buttonIcon: r.a.createElement(A.b, {
							className: B.a.subredditIcon,
							subredditOrProfile: v
						}),
						disabled: 1 === h.length,
						menuItemsClassName: B.a.menuItems,
						menuOptionClassName: B.a.menuOption,
						displayText: `r/${v.name}`,
						options: h.map(e => ({
							displayText: `r/${e.name}`,
							value: e.id,
							isSelected: e.id === n,
							icon: r.a.createElement(A.b, {
								className: B.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: N,
						onSelect: C,
						showSelectedCheckmark: !0
					})), r.a.createElement("div", {
						className: B.a.typesWrapper
					}, r.a.createElement(_.b, {
						id: "typeFilter",
						className: B.a.types,
						buttonClassName: B.a.dropdownButton,
						menuItemsClassName: B.a.menuItems,
						menuOptionClassName: B.a.menuOption,
						displayText: x,
						options: T.map(e => ({
							displayText: L[e](),
							value: e,
							isSelected: e === d
						})),
						onOpen: g,
						onSelect: O,
						showSelectedCheckmark: !0
					})))
				},
				R = n("./src/lib/fastdom/index.ts"),
				H = n("./src/lib/constants/colors.ts"),
				W = n("./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less"),
				q = n.n(W),
				K = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less"),
				G = n.n(K);
			const Z = {
					[j.j.AcceptModeratorInvite]: "mod",
					[j.j.AddContributor]: "user",
					[j.j.AddModerator]: "mod",
					[j.j.BanUser]: "ban",
					[j.j.InviteModerator]: "mod",
					[j.j.MuteUser]: "mod_mute",
					[j.j.RemoveComment]: "remove",
					[j.j.RemoveContributor]: "block",
					[j.j.RemoveLink]: "remove",
					[j.j.RemoveModerator]: "unmod",
					[j.j.RemoveWikiContributor]: "wiki_ban",
					[j.j.SpamComment]: "spam",
					[j.j.SpamLink]: "spam",
					[j.j.Spoiler]: "spoiler",
					[j.j.Sticky]: "pin",
					[j.j.UnbanUser]: "unban",
					[j.j.UninviteModerator]: "unmod",
					[j.j.UnmuteUser]: "mod_unmute",
					[j.j.Unspoiler]: "spoiler",
					[j.j.Unsticky]: "unpin",
					[j.j.WikiBanned]: "wiki_ban",
					[j.j.WikiContributor]: "wiki",
					[j.j.WikiUnbanned]: "wiki_unban"
				},
				J = {
					[j.q.Ban]: "ban",
					[j.q.BotBan]: "bot",
					[j.q.PermaBan]: "block"
				};
			var z = e => {
					const {
						className: t,
						actionType: n,
						label: a
					} = e, s = n ? Z[n] || "mod" : a && J[a] || "user_note";
					if (!s) return null;
					const o = Object(k.b)(s);
					return r.a.createElement(o, {
						className: Object(c.a)(t, G.a.icon)
					})
				},
				Q = n("./src/reddit/controls/InternalLink/index.tsx"),
				V = n("./src/reddit/hooks/useLocale.ts"),
				X = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less"),
				Y = n.n(X);
			var $ = e => {
					const {
						className: t,
						modNote: n,
						onClickUsername: a
					} = e, s = Object(V.a)(), o = new Intl.DateTimeFormat(s, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(n.createdAt));
					return r.a.createElement("div", {
						className: Object(c.a)(t, Y.a.metadata)
					}, n.operator && r.a.createElement(Q.a, {
						className: Y.a.operator,
						to: `/user/${n.operator.displayName}/`,
						onClick: a
					}, "u/", n.operator.displayName), r.a.createElement("span", {
						className: Y.a.createdDate
					}, f.fbt._("on {createdDate}", [f.fbt._param("createdDate", o)], {
						hk: "2VoP7K"
					})))
				},
				ee = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				te = n.n(ee);
			var ne = ({
					className: e,
					modNote: t,
					onClickLinked: n
				}) => {
					var a, o;
					const i = Object(s.e)(g.bb),
						d = "label" in t && t.label || C.c,
						l = "note" in t ? t.note : void 0,
						m = Object(k.b)(C.e[d || "bot"], {
							isFilled: !0
						}),
						u = ![C.c, j.q.BotBan, j.q.PermaBan, j.q.Ban].includes(d),
						p = t.postInfo ? null === (a = t.postInfo) || void 0 === a ? void 0 : a.permalink : t.commentInfo ? null === (o = t.commentInfo) || void 0 === o ? void 0 : o.permalink : void 0,
						b = Object(k.b)("external_link_fill");
					return l ? r.a.createElement("div", {
						className: Object(c.a)(e, te.a.modNote),
						onClick: e => e.stopPropagation(),
						style: d ? {
							backgroundColor: i ? C.b[d] : C.a[d]
						} : {}
					}, u && r.a.createElement("div", {
						className: te.a.header
					}, r.a.createElement(m, {
						className: te.a.labelIcon,
						style: {
							color: C.d[d]
						}
					}), r.a.createElement("span", {
						className: te.a.label
					}, C.f[d]())), l && r.a.createElement("div", {
						className: te.a.note
					}, l), p && r.a.createElement("a", {
						className: te.a.link,
						href: p || "",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: n
					}, r.a.createElement(b, {
						className: te.a.linkIcon
					}))) : null
				},
				ae = n("./src/lib/constants/index.ts"),
				re = n("./src/lib/prettyPrintNumber/index.ts"),
				se = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				oe = n.n(se);
			var ie = ({
					className: e,
					postInfo: t,
					commentInfo: n,
					onClick: a
				}) => {
					var s, o, i, d;
					if (!t && !n) return null;
					if (n && "Comment" !== n.__typename) return r.a.createElement("div", {
						className: Object(c.a)(e, oe.a.preview)
					}, r.a.createElement("div", {
						className: oe.a.content
					}, r.a.createElement("h6", {
						className: oe.a.title
					}, ae.Lb)));
					const l = t ? t.permalink : n ? n.permalink : void 0,
						m = (null == t ? void 0 : t.title) || (null === (o = null === (s = n) || void 0 === s ? void 0 : s.content) || void 0 === o ? void 0 : o.markdown),
						u = t ? t.score || 0 : n && n.score || 0,
						p = (null == t ? void 0 : t.commentCount) || 0;
					return r.a.createElement("a", {
						className: Object(c.a)(e, oe.a.preview),
						href: l || "",
						onClick: a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement("div", {
						className: oe.a.content
					}, m && r.a.createElement("h6", {
						className: oe.a.title
					}, m), r.a.createElement("div", {
						className: oe.a.meta
					}, r.a.createElement("span", null, f.fbt._({
						"*": "{pointsCount} Points",
						_1: "{pointsCount} Point"
					}, [f.fbt._param("pointsCount", Object(re.b)(u)), f.fbt._plural(u)], {
						hk: "47CFCp"
					})), !!p && r.a.createElement(r.a.Fragment, null, " · ", r.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(p, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (i = null == t ? void 0 : t.thumbnail) || void 0 === i ? void 0 : i.url) && r.a.createElement("div", {
						className: oe.a.thumbnail
					}, r.a.createElement("img", {
						className: oe.a.thumbnailImage,
						src: null === (d = t.thumbnail) || void 0 === d ? void 0 : d.url
					})))
				},
				ce = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				de = n.n(ce);
			const le = {
					[j.j.AcceptModeratorInvite]: () => f.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[j.j.AddContributor]: () => f.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[j.j.AddModerator]: () => f.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[j.j.BanUser]: () => f.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[j.j.InviteModerator]: () => f.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[j.j.MuteUser]: () => f.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[j.j.RemoveComment]: () => f.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[j.j.RemoveContributor]: () => f.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[j.j.RemoveLink]: () => f.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[j.j.RemoveModerator]: () => f.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[j.j.RemoveWikiContributor]: () => f.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[j.j.SpamComment]: () => f.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[j.j.SpamLink]: () => f.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[j.j.Spoiler]: () => f.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[j.j.Sticky]: () => f.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[j.j.UnbanUser]: () => f.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[j.j.UninviteModerator]: () => f.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[j.j.UnmuteUser]: () => f.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[j.j.Unspoiler]: () => f.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[j.j.Unsticky]: () => f.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[j.j.WikiBanned]: () => f.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[j.j.WikiContributor]: () => f.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[j.j.WikiUnbanned]: () => f.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				me = {
					[j.q.Ban]: () => f.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[j.q.BotBan]: () => f.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[j.q.PermaBan]: () => f.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var ue = e => {
				const {
					className: t,
					actionType: n,
					label: a
				} = e, s = n ? le[n] ? le[n]() : null : a && me[a] ? me[a]() : null;
				return s ? r.a.createElement("h3", {
					className: Object(c.a)(t, de.a.title)
				}, s) : null
			};
			var pe = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, a = Object(s.e)(g.bb), o = Object(u.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return r.a.createElement("div", {
						className: Object(c.a)(q.a.wrapper, e.className)
					}, r.a.createElement("div", {
						key: "aa",
						className: q.a.iconWrapper,
						style: {
							background: a ? H.a.orca700 : H.a.narwhal100
						}
					}, r.a.createElement(z, {
						className: q.a.icon,
						actionType: t.actionType,
						label: t.label
					})), r.a.createElement("div", {
						className: q.a.content,
						key: "ba"
					}, r.a.createElement(ue, {
						actionType: t.actionType,
						label: t.label,
						className: q.a.title
					}), r.a.createElement(ne, {
						className: q.a.note,
						modNote: t,
						onClickLinked: () => o(Object(m.c)({
							subredditId: n,
							modNote: t
						}))
					}), r.a.createElement($, {
						className: q.a.metaData,
						subredditId: n,
						modNote: t,
						onClickUsername: () => o(Object(m.o)({
							subredditId: n,
							modNote: t
						}))
					}), i && r.a.createElement(ie, {
						className: q.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => o(Object(m.g)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				be = n("./src/reddit/hooks/useScrollGradient.ts"),
				fe = n("./src/reddit/selectors/modUserNotes.ts"),
				he = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				ve = n.n(he);
			var xe = e => {
					const t = {
							[j.k.Note]: f.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[j.k.Approval]: f.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[j.k.Removal]: f.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[j.k.Ban]: f.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[j.k.Mute]: f.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[j.k.Invite]: f.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[j.k.Spam]: f.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[j.k.ContentChange]: f.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[j.k.ModAction]: f.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[j.k.All]: f.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[j.k.Note]: "user_note",
							[j.k.Approval]: "approve",
							[j.k.Removal]: "remove",
							[j.k.Ban]: "ban",
							[j.k.Mute]: "mod_mute",
							[j.k.Invite]: "user",
							[j.k.Spam]: "spam",
							[j.k.ContentChange]: "pin",
							[j.k.ModAction]: "mod",
							[j.k.All]: "mod"
						},
						{
							className: a,
							subredditId: o,
							userId: i,
							filter: d
						} = e,
						l = Object(s.e)(e => Object(g.vb)(e, {
							userId: i
						})),
						m = Object(s.e)(e => Object(U.S)(e, {
							subredditId: o
						})),
						u = t[d],
						p = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", u)], {
							hk: "1NhVUh"
						}),
						b = m && l ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", l.username), f.fbt._param("subreddit name", m.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(k.b)(n[d]);
					return r.a.createElement("div", {
						className: Object(c.a)(a, ve.a.container)
					}, r.a.createElement(h, {
						className: ve.a.icon
					}), r.a.createElement("p", {
						className: ve.a.mainLine
					}, `${p} ${b}`), d === j.k.Note && r.a.createElement("p", {
						className: ve.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				Ie = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				Ne = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				_e = n.n(Ne),
				ke = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var Ce = e => r.a.createElement("div", {
					className: Object(c.a)(_e.a.wrapper, e.className)
				}, r.a.createElement("div", {
					key: "d",
					className: Object(c.a)(_e.a.icon, Object(ke.a)(e))
				}), r.a.createElement("div", {
					key: "e",
					className: _e.a.content
				}, r.a.createElement("div", {
					key: "ea",
					className: Object(c.a)(_e.a.title, Object(ke.b)(e))
				}), r.a.createElement("div", {
					key: "eb",
					className: Object(c.a)(_e.a.body, Object(ke.b)(e))
				}), r.a.createElement("div", {
					key: "ec",
					className: Object(c.a)(_e.a.meta, Object(ke.b)(e))
				}))),
				ge = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				Oe = n.n(ge);
			var Ee = e => {
					const {
						className: t,
						isLoading: n,
						apiError: a,
						onTryAgain: s
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)(t, Oe.a.placeholder)
					}, r.a.createElement(Ce, {
						className: Oe.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(Ce, {
						className: Oe.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(Ce, {
						className: Oe.a.placeholderLine,
						isLoading: n
					}), !!a && r.a.createElement(Ie.a, {
						apiError: a,
						onTryAgain: s
					}))
				},
				je = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				ye = n.n(je);
			var we = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						filter: i
					} = e, d = Object(s.d)(), l = Object(s.e)(g.bb), [m, u] = Object(a.useState)(!0);
					Object(a.useEffect)(() => {
						setTimeout(() => u(!1), 0)
					}, []);
					const {
						container: p,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(be.b)(!1, be.a.Top), v = Object(s.e)(e => Object(fe.e)(e, {
						subredditId: n,
						userId: o,
						filter: i
					})), x = Object(s.e)(e => Object(fe.c)(e, {
						subredditId: n,
						userId: o,
						filter: i
					})), I = Object(s.e)(e => Object(fe.d)(e, {
						subredditId: n,
						userId: o,
						filter: i
					})), N = Object(s.e)(fe.b), _ = !!v.length, k = !!x && !I && !N, C = e => d(Object(b.e)({
						subredditId: n,
						userId: o,
						filter: i,
						before: e
					}));
					return r.a.createElement(r.a.Fragment, null, _ && r.a.createElement("div", {
						className: Object(c.a)(t, ye.a.wrapper)
					}, r.a.createElement("div", {
						className: Object(c.a)(ye.a.scrollGradient, {
							[ye.a.visible]: k || I || f,
							[ye.a.isNightMode]: l
						})
					}), r.a.createElement("div", {
						className: ye.a.list,
						ref: p,
						onScroll: () => {
							R.a.read(() => {
								if (null == p ? void 0 : p.current) {
									h();
									const e = p.current,
										{
											scrollTop: t,
											offsetHeight: n,
											scrollHeight: a
										} = e;
									n - a >= t && k && !I && C(x)
								}
							})
						}
					}, v.map(e => r.a.createElement(pe, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (I || N) && r.a.createElement(Ee, {
						isLoading: I,
						apiError: N,
						onTryAgain: () => {
							x && C(x)
						}
					}))), !_ && !I && !m && r.a.createElement(xe, {
						className: Object(c.a)(t, ye.a.wrapper, ye.a.noItems),
						subredditId: n,
						userId: o,
						filter: i
					}), !_ && (I || m) && r.a.createElement("div", {
						className: Object(c.a)(t, ye.a.wrapper)
					}))
				},
				Pe = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Se = n.n(Pe);
			const {
				fbt: Ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ae = e => {
					const t = Object(s.d)(),
						{
							className: n,
							subredditId: o,
							userId: i,
							onChangeView: f,
							defaultTypeFilter: h,
							thingId: v
						} = e,
						[x, I] = Object(a.useState)(h || j.k.All),
						[N, _] = Object(a.useState)(o),
						k = Object(s.e)(g.bb),
						C = Object(u.a)(),
						O = e => {
							t(Object(b.e)({
								subredditId: N,
								userId: i,
								filter: x,
								...e
							}))
						},
						E = x === j.k.All || x === j.k.Note;
					Object(a.useEffect)(() => {
						O(), t(Object(p.q)())
					}, []);
					const y = {
						subredditId: o,
						userId: i,
						...v && Object(d.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(l.a)(v) ? {
							postId: v
						} : null
					};
					return Object(a.useEffect)(() => (C(Object(m.x)(y)), () => C(Object(m.r)(y))), []), r.a.createElement("div", {
						className: Object(c.a)(n, Se.a.wrapper, {
							[Se.a.isNightMode]: k
						}),
						onClick: e => e.stopPropagation()
					}, r.a.createElement(F, {
						className: Se.a.filters,
						subredditId: N,
						userId: i,
						onChangeSubredditId: e => {
							_(e), O({
								subredditId: e
							})
						},
						filter: x,
						onChangeFilter: e => {
							I(e), O({
								filter: e
							})
						},
						onChangeView: f
					}), r.a.createElement(we, {
						className: Se.a.list,
						subredditId: N,
						userId: i,
						filter: x
					}), E && r.a.createElement(S, {
						className: Se.a.form,
						filter: x,
						subredditId: o,
						userId: i,
						thingId: v
					}))
				},
				Me = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Be = n("./src/config.ts"),
				Te = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Le = n("./src/lib/opener/index.ts"),
				De = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				Fe = n.n(De);
			var Re = e => r.a.createElement("img", {
					className: Object(c.a)(e.className, Fe.a.anonymousSnoovatar),
					src: `${Be.a.assetPath}/img/anonymous_snoo.png`
				}),
				He = n("./src/reddit/components/ChatButton/index.tsx"),
				We = n("./src/reddit/components/HumanDate/index.tsx"),
				qe = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ke = n("./src/reddit/components/ModNoteItem/index.tsx"),
				Ge = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Ze = n("./src/reddit/components/UserIcon/index.tsx"),
				Je = n("./src/reddit/endpoints/profile/info.ts"),
				ze = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				Qe = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				Ve = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				Xe = n("./src/reddit/models/User/index.ts"),
				Ye = n("./src/reddit/selectors/gold/awardIcon.ts"),
				$e = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				et = n.n($e);
			const tt = e => {
					var t, n;
					return r.a.createElement("div", {
						className: et.a.userDetails
					}, r.a.createElement("div", null, r.a.createElement(Te.a, {
						className: et.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && r.a.createElement(r.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isEmployee && r.a.createElement(Qe.a, {
						className: et.a.adminIcon,
						title: f.fbt._("Reddit admin", null, {
							hk: "15wBTE"
						})
					}), e.user.isGold && r.a.createElement(Te.a, {
						to: "/premium"
					}, r.a.createElement(Ve.a, {
						className: et.a.PremiumIcon
					}))), r.a.createElement("div", {
						className: et.a.UserNameMetaData
					}, r.a.createElement("div", {
						className: et.a.MetaDataItem
					}, `u/${e.user.username}`, r.a.createElement("div", {
						className: et.a.Bullet
					}, "•")), r.a.createElement("div", {
						className: et.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && r.a.createElement(r.a.Fragment, null, r.a.createElement(We.d, {
						seconds: e.user.createdUtc || e.user.created
					}), r.a.createElement("div", {
						className: et.a.Bullet
					}, "•"))), r.a.createElement("div", {
						className: et.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(re.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				nt = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: a,
						prefersReducedAnimations: s
					} = e, o = {
						...Je.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return r.a.createElement("div", {
						className: et.a.userInfoGrid
					}, r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("span", {
						className: et.a.count
					}, Object(re.b)(o.fromPosts)), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("span", {
						className: et.a.count
					}, Object(re.b)(o.fromComments)), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("span", {
						className: et.a.count
					}, Object(re.b)(o.fromAwardsReceived)), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("span", {
						className: et.a.count
					}, Object(re.b)(o.fromAwardsGiven)), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), a.length > 0 && (e => r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("div", {
						className: et.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = r.a.createElement("img", {
							className: et.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name
						});
						return r.a.createElement(r.a.Fragment, null, e.url ? r.a.createElement("a", {
							target: Le.d.BLANK,
							rel: Le.c,
							href: e.url
						}, n) : n)
					})), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(a), i && ((e, t) => r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("div", {
						className: et.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var a, s;
						if (!(n >= 3)) return r.a.createElement("img", {
							alt: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : null == e ? void 0 : e.name,
							key: null !== (s = null == e ? void 0 : e.description) && void 0 !== s ? s : null == e ? void 0 : e.name,
							className: et.a.recentAwardOrTropyIcon,
							src: Object(Ye.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, s))
				};
			var at = e => {
				var t;
				const {
					contextId: n,
					currentUser: o,
					hideNSFWPref: i,
					hoverId: d,
					isLoggedIn: l,
					isNightMode: p,
					moderatorPermissions: b,
					style: h,
					userName: v,
					user: x,
					isCurrentUserBanned: N,
					userProfileStyles: _,
					acceptChats: k,
					isCommentAuthorBlocked: C,
					trophyCase: g,
					lastAuthorModNote: O,
					userIsSubscriber: E,
					onUnbanUser: y,
					subredditId: w,
					toggleBanModal: P,
					isUserBanned: S,
					prefersReducedAnimations: U,
					totalModNoteCount: A,
					onChangeView: M,
					onHideTooltip: B
				} = e, T = Object(u.a)(), L = Object(s.e)(e => w ? e.subreddits.models[w] : null);
				Object(a.useEffect)(() => {
					x && w && T(Object(m.w)({
						subredditId: w,
						userId: x.id
					}))
				}, [x, w]);
				const D = Object(a.useCallback)(() => w && T(Object(m.j)({
						subredditId: w,
						userId: x.id
					})), [w, x, T]),
					F = Object(a.useCallback)(() => {
						S ? y && y(x.id) : (B && B(), P && P()), w && T(Object(m.b)({
							subredditId: w,
							userId: x.id
						}))
					}, [w, x, S, T, B, y, P]),
					R = Object(a.useCallback)(e => {
						M(e), w && T(Object(m.i)({
							subredditId: w,
							userId: x.id
						}))
					}, [w, x, T, M]),
					H = Object(a.useCallback)(e => {
						M(e, j.k.Note), w && T(Object(m.a)({
							subredditId: w,
							userId: x.id
						}))
					}, [w, x, T, M]),
					W = Object(a.useCallback)(e => {
						M(e), w && T(Object(m.p)({
							subredditId: w,
							userId: x.id
						}))
					}, [w, x, T, M]);
				if (!x) return r.a.createElement("div", {
					style: h
				});
				const q = !!o && Object(Xe.e)(o) === v,
					K = l && !q && !N && k && !C,
					G = x.hasUserProfile && !N && !C && !q && x.enableFollowers,
					Z = null == b ? void 0 : b.access,
					J = null == b ? void 0 : b.mail,
					z = Z && n && !q && w,
					V = x.isNSFW && i ? `${Be.a.assetPath}/img/user-info-banner.png` : (null == _ ? void 0 : _.bannerBackgroundImage) ? _.bannerBackgroundImage : x.bannerImage,
					X = p ? "##D7DADC" : "#0079D3",
					Y = p ? "#121212" : "#FFF",
					$ = p ? "#1E1E1E" : "#EDEFF1",
					ee = p ? "#D7DADC" : "#1A1A1B",
					te = L && v ? `?toSubredditName=${L.name}&toUserName=${v}` : "";
				return r.a.createElement("div", {
					className: et.a.Container,
					id: d,
					onClick: e => e.stopPropagation(),
					style: {
						backgroundColor: Y,
						...h
					}
				}, r.a.createElement("div", {
					className: et.a.UserContainer
				}, r.a.createElement("div", {
					className: et.a.BannerImage,
					style: V ? {
						backgroundImage: `url('${V}')`
					} : {}
				}), r.a.createElement("div", {
					className: et.a.snoovatarContainer
				}, x.snoovatarFullBodyAsset ? r.a.createElement("img", {
					className: et.a.snoovatar,
					src: x.snoovatarFullBodyAsset
				}) : (null === (t = x.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? r.a.createElement("div", {
					className: et.a.anonymousSnoovatar
				}, r.a.createElement(Re, null)) : r.a.createElement(Ze.a, {
					className: et.a.UserIcon,
					iconUrl: x.accountIcon,
					isNSFW: x.isNSFW,
					userName: v
				}))), r.a.createElement(tt, {
					user: x,
					userName: v
				}), r.a.createElement(Q.a, {
					className: et.a.profileLink,
					to: `/user/${v}/`
				}, f.fbt._("View full profile", null, {
					hk: "2s4Gmf"
				})), r.a.createElement("div", {
					className: et.a.profileButtonGroup
				}, K && r.a.createElement(He.b, {
					className: Object(c.a)(et.a.ChatButton, et.a.profileButtonLeft, {
						[et.a.onlyButton]: !G
					}),
					contextId: n,
					userId: x.id,
					text: f.fbt._("Start Chat", null, {
						hk: "2mfqRE"
					}),
					isFullWidth: !0,
					style: {
						color: Y,
						backgroundColor: X
					}
				}), G && r.a.createElement(Ge.a, {
					className: Object(c.a)(et.a.SubscribeButton, et.a.profileButtonRight, {
						[et.a.onlyButton]: !K
					}),
					identifier: {
						name: e.user.username,
						type: "profile"
					},
					getEventFactory: e => Object(ze.g)(e ? "unfollow" : "follow", n),
					isFullWidth: !0,
					small: !0,
					style: {
						color: E ? "#D7DADC" : Y,
						backgroundColor: X,
						width: 144
					}
				})), r.a.createElement(nt, {
					user: x,
					trophyCase: g || [],
					prefersReducedAnimations: !!U
				}), (J || z) && r.a.createElement("div", {
					className: et.a.buttonRow
				}, J && r.a.createElement(I.t, {
					className: Object(c.a)(et.a.modButtonLeft, {
						[et.a.onlyButton]: !z
					}),
					href: `https://mod.reddit.com/mail/create${te}`,
					target: "_blank",
					rel: "noopener noreferrer",
					kind: I.b.ExternalLink,
					priority: I.c.Plain,
					style: {
						backgroundColor: $,
						color: ee
					},
					onClick: D
				}, f.fbt._("Send Modmail", null, {
					hk: "2KDZJi"
				})), z && r.a.createElement(I.t, {
					className: Object(c.a)(et.a.modButtonRight, {
						[et.a.onlyButton]: !J
					}),
					onClick: F,
					priority: I.c.Plain,
					style: {
						backgroundColor: $,
						color: ee
					}
				}, S ? f.fbt._("Unban", null, {
					hk: "2bKwSa"
				}) : f.fbt._("Ban", null, {
					hk: "1lIetx"
				}))), Z && r.a.createElement("div", {
					className: et.a.buttonRow
				}, r.a.createElement(I.t, {
					className: et.a.modButtonLeft,
					onClick: R,
					priority: I.c.Plain,
					style: {
						backgroundColor: $,
						color: ee
					}
				}, r.a.createElement("span", {
					className: et.a.notesText
				}, f.fbt._("User Mod Log", null, {
					hk: "2PiT0s"
				})), !!A && r.a.createElement("span", {
					className: et.a.notesNumber
				}, A, " ")), r.a.createElement(I.t, {
					className: et.a.modButtonRight,
					onClick: H,
					priority: I.c.Plain,
					style: {
						backgroundColor: $,
						color: ee
					}
				}, f.fbt._("Add Note", null, {
					hk: "34JqdA"
				}))), Z && O && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: et.a.modNoteSection
				}, r.a.createElement("hr", null), r.a.createElement("div", {
					className: et.a.modNoteLabel
				}, r.a.createElement("span", {
					className: et.a.modNoteLabelText,
					style: {
						backgroundColor: Y
					}
				}, f.fbt._("Latest mod note", null, {
					hk: "3D5qr4"
				})), r.a.createElement(I.t, {
					className: et.a.modNoteButton,
					onClick: W,
					priority: I.c.PlainLink,
					style: {
						backgroundColor: Y
					}
				}, f.fbt._("View all", null, {
					hk: "2WT026"
				})))), r.a.createElement(Ke.b, {
					className: et.a.lastModNote,
					modNote: O,
					subredditId: w || "",
					onClick: e => M(e),
					context: Ke.a.ModIdCard
				})), r.a.createElement(qe.i, {
					contextId: n,
					subredditId: w,
					user: x
				}), r.a.createElement("div", {
					className: et.a.BottomSpacer
				}))
			};

			function rt() {
				return (rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const st = e => {
					var t, n, c;
					const d = Object(s.e)(i.c),
						l = !!(null == d ? void 0 : d.isModNotesView),
						[m, u] = Object(a.useState)(!l),
						[p, b] = Object(a.useState)(j.k.All),
						f = Object(s.d)();
					Object(a.useEffect)(() => {
						f(Object(o.d)(e.userName))
					}, [f, e.userName]);
					const h = Object(a.useCallback)((e, t) => {
							e.stopPropagation(), u(!m), b(t || j.k.All)
						}, [m, u]),
						v = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (c = e.lastAuthorModNote) || void 0 === c ? void 0 : c.user.id : e.user.id;
					return !m && e.subredditId && v ? r.a.createElement(Ae, {
						className: et.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: v,
						onChangeView: h,
						defaultTypeFilter: p,
						thingId: e.contextId
					}) : r.a.createElement(at, rt({}, e, {
						onChangeView: h
					}))
				},
				ot = e => r.a.createElement(Me.a, {
					className: et.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					hideCaret: !0
				}, r.a.createElement(st, e));
			ot.WrappedComponent = st;
			t.default = ot
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/Hovercards/helpers.ts"),
				m = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/shortcuts.ts"),
				b = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/helpers/isPost.ts"),
				h = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				v = n("./src/reddit/hooks/useIsOverlay.ts"),
				x = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				N = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				_ = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx");
			t.default = ({
				author: e,
				children: t,
				className: n,
				collapsed: k,
				hoverDivClassName: C,
				isCommentAuthorBlocked: g,
				postOrComment: O,
				tooltipIdPrefix: E,
				tooltipType: j
			}) => {
				const y = Object(u.b)(),
					w = Object(r.useCallback)(() => y(Object(h.f)(O.id)), [O, y]),
					P = Object(v.a)(),
					S = e || O.author,
					U = Object(l.b)({
						author: S,
						itemId: O.id,
						tooltipIdPrefix: E || _.a,
						tooltipType: j
					}),
					A = (e => Object(f.a)(e.id) ? e.belongsTo.id : e.subredditId)(O),
					M = Object(o.d)(),
					B = Object(o.e)(e => Object(x.a)(e, A)),
					T = Object(o.e)(I.a),
					L = Object(r.useCallback)(() => B && M(Object(c.c)(A, O.authorId)), [M, O, A, B]),
					D = Object(r.useCallback)(async () => {
						B && (await M(Object(i.d)(S)), L(), M(U === T ? Object(d.i)() : Object(d.f)({
							tooltipId: U
						})))
					}, [M, L, T, U, B, S]);
				Object(r.useEffect)(() => {
					if (B && U === T && !P) {
						const e = document.getElementById(p.b);
						e && (e.style.pointerEvents = "none")
					}
				}, [B, U, T, P]);
				const F = Object(r.useCallback)(e => {
					T === U && M(Object(d.i)());
					const t = document.getElementById(p.b);
					t && (t.style.pointerEvents = "inherit")
				}, [M, T, U]);
				Object(r.useEffect)(() => {
					if (B) return window.addEventListener("click", F), () => {
						window.removeEventListener("click", F)
					}
				}, [B, F]);
				const R = Object(r.useCallback)(e => {
						e.stopPropagation(), Object(b.a)(e).hasNewTabModifier ? window.open(`${a.a.redditUrl}/u/${S}`, "_blank") : D()
					}, [S, D]),
					H = `${U}-hover-id`;
				return s.a.createElement(m.a, {
					authorOrSubredditName: S,
					className: C,
					hoverId: H,
					sendHoverEvent: w,
					tooltipId: U,
					onClick: B ? e => R(e) : void 0,
					onHover: L,
					onlyLeaveOnClick: !0
				}, t, s.a.createElement(N.a, {
					className: n,
					contextId: O.id,
					hoverId: H,
					sendEvent: y,
					subredditId: A,
					tooltipId: U,
					tooltipType: j,
					userName: S,
					isCommentAuthorBlocked: g,
					collapsed: k
				}))
			}
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
				c = e => e.alwaysShowChildren ? r.a.createElement(r.a.Fragment, null, e.children) : null;
			t.b = Object(s.a)({
				ErrorComponent: c,
				getComponent: () => Object(o.a)(() => Promise.all([n.e("AuthorHovercard~Reddit"), n.e("AuthorHovercard")]).then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
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
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var i = function({
					seconds: e,
					...t
				}) {
					var n;
					const a = Object(o.a)(),
						i = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : a
						};
					return r.a.createElement(r.a.Fragment, null, Object(s.d)(e, i))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const a = Object(o.a)(),
						s = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : a
						};
					return r.a.createElement(r.a.Fragment, null, Object(c.a)(e, s))
				},
				l = n("./src/lib/constants/index.ts");
			var m = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(o.a)(),
						a = null != t ? t : n;
					return r.a.createElement(r.a.Fragment, null, function(e, t = l.D) {
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
					}(e, a))
				},
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e, t = l.D) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, n = !1, a = l.D) {
				const r = Object(p.e)(e, t),
					s = new Date(e * l.Sb);
				let o;
				if (r === p.a.Live || n) return u.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === p.a.Future ? o = Object(p.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(s, a) : function(e, t = l.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, a) : r === p.a.Past && (o = Object(p.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(s, a)), `${o} @ ${function(e,t=l.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,a)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: a
			}) {
				const s = Object(o.a)(),
					i = null != a ? a : s;
				return r.a.createElement(r.a.Fragment, null, f(e, t, n, i))
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
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = n.n(l),
				u = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const b = u.a.div("Text", m.a),
				f = u.a.div("BottomText", m.a),
				h = e => r.a.createElement(b, {
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
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				I = Object(c.a)(v, [i.a.Click, i.a.Keydown]),
				N = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				_ = Object(s.b)(x);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(I, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(N, p({}, e, {
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
				deleteButton: "xqKTVgMXnrQEGC3NlgRNr",
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
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/helpers/trackers/modNote.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/components/UserIcon/index.tsx"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/hooks/useLocale.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ModUserNotes/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/ModNoteItem/index.m.less"),
				x = n.n(v);
			! function(e) {
				e.LastAuthorUserNoteTooltip = "LastAuthorUserNoteTooltip", e.ModIdCard = "ModIdCard"
			}(a || (a = {}));
			t.b = e => {
				var t, n, a;
				const s = Object(i.e)(h.bb),
					{
						className: v,
						modNote: I,
						onClick: N,
						subredditId: _,
						context: k
					} = e,
					C = "label" in I && I.label || f.c,
					g = "note" in I ? I.note : void 0,
					O = Object(b.b)(f.e[C || "bot"], {
						isFilled: !0
					}),
					E = Object(p.a)(),
					j = new Intl.DateTimeFormat(E, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(I.createdAt)),
					y = I.commentInfo,
					{
						postInfo: w
					} = I,
					P = w ? w.permalink : y ? y.permalink : void 0,
					S = Object(b.b)("external_link"),
					U = Object(l.a)();
				return o.a.createElement("div", {
					className: Object(c.a)(v, x.a.modNote),
					onClick: e => {
						e.stopPropagation(), N && N(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === k && d.d || "ModIdCard" === k && d.h;
							e && U(e({
								modNote: I,
								subredditId: _
							}))
						})()
					},
					style: C ? {
						backgroundColor: s ? f.b[C] : f.a[C]
					} : {}
				}, C !== f.c && o.a.createElement("div", {
					className: x.a.header
				}, o.a.createElement("div", {
					className: x.a.label
				}, o.a.createElement(O, {
					className: x.a.labelIcon,
					style: {
						color: f.d[C],
						fontSize: "15px",
						lineHeight: "15px"
					}
				}), f.f[C]())), g && o.a.createElement("div", {
					className: Object(c.a)(x.a.note, {
						[x.a.noLabel]: C === f.c
					})
				}, g), o.a.createElement("div", {
					className: x.a.metadata
				}, o.a.createElement(u.a, {
					className: x.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === k && d.m || "ModIdCard" === k && d.n;
							e && U(e({
								modNote: I,
								subredditId: _
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
				}, r.fbt._("on {createdDate}", [r.fbt._param("createdDate", j)], {
					hk: "2VoP7K"
				})), P && o.a.createElement("a", {
					className: x.a.link,
					href: P || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === k && d.e || "ModIdCard" === k && d.f;
							e && U(e({
								modNote: I,
								subredditId: _
							}))
						})()
					}
				}, o.a.createElement(S, {
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
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
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
						return r.a.createElement(n, c({}, this.props, {
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
				})), s.a.createElement("div", {
					className: d.a.somethingWrong
				}, s.a.createElement("div", {
					className: d.a.somethingWrongText
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
						href: `${s.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && r.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), r.a.createElement("div", {
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
				s = n.n(r),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
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
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? s.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === d ? s.a.createElement(i.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && r ? null : u
				}
			}
			t.a = Object(d.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: o.k,
					hideNSFWPref: o.E
				}),
				c = Object(a.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(s.C)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = n.n(f);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: n,
				post: i,
				share: f
			}) => {
				const x = Object(l.b)(),
					I = Object(o.d)(),
					N = i && i.id,
					_ = i && i.voteState;
				let k = null;
				N || (k = e ? "user_hovercard" : "profile_overview");
				const C = Object(r.useCallback)(() => x(Object(u.g)(e ? "user_hovercard" : "profile_overview", t)), [e, x, t]);
				return s.a.createElement(m.t, {
					onClick: () => {
						n ? (x(u.h), N && _ === b.a.notVoted && I(Object(c.jb)(N))) : C();
						const e = n ? "postify" : "copy";
						I(Object(d.b)({
							clickSource: k,
							share: f,
							source: e
						}))
					},
					className: Object(a.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, s.a.createElement(p.a, {
					className: Object(a.a)({
						[h.a.shirtIcon]: !n,
						[h.a.avatarPostButtonShirtIcon]: n
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
				c = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(d);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: n,
				isOwnProfile: a,
				onClick: d
			}) {
				return r.a.createElement(o.t, {
					onClick: d,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && a,
						[l.a.compactButtonLayout]: e
					}, n)
				}, t ? r.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : r.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : a ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? r.a.createElement("div", {
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
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = n.n(c),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = n.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: a,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return r.a.createElement("div", {
					className: d.a.bannerWrapper
				}, r.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), a && e && (c ? r.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : r.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: l
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
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: a,
				username: c,
				...d
			}) {
				const l = t ? r.a.createElement(r.a.Fragment, null, "u/", c, " · ", r.a.createElement(o.d, {
					seconds: a,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? r.a.createElement(s.a, i({}, d, {
					className: e,
					to: n
				}), l) : r.a.createElement("span", i({}, d, {
					className: e
				}), l)
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
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = n.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: s,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, n && o.a.createElement(i.a, {
				className: m.a.snoovatarAdminIcon,
				title: r.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), s && o.a.createElement("a", {
				title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${a.a.redditUrl}/premium`
			}, o.a.createElement(d.a, {
				className: m.a.snoovatarPremiumIcon
			})), l && o.a.createElement(c.a, {
				className: m.a.snoovatarNsfwIcon,
				title: r.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
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
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/selectors/experiments/econ/index.ts"),
				u = n("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				x = n.n(v);
			const I = 25;

			function N(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function _(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const k = N("particleDelay", x.a),
				C = N("particleX", x.a),
				g = N("particleFloat", x.a),
				O = () => {
					const e = _(C),
						t = _(g),
						n = _(k);
					return Object(o.a)(x.a.particle, e, t, n)
				};
			class E extends r.a.Component {
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
						className: `${O()}`
					})
				}
			}
			var j = E,
				y = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				w = n.n(y),
				P = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: a,
				isDeletingBanner: v,
				isEmployee: I,
				isGold: N,
				isNSFW: _,
				isOwnProfile: k,
				onClickSnoovatar: C,
				onDeleteBanner: g,
				prefersReducedAnimations: O,
				snoovatarUrl: E,
				title: y,
				userCreated: S,
				username: U,
				url: A,
				isHovercard: M
			}) => {
				const B = Object(s.e)(e => !k && !!E && Object(m.g)(e)),
					T = Object(s.e)(u.b),
					L = E && Object(d.e)(E) && T;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
					bannerBackgroundImage: e,
					editMode: !!a,
					isNSFW: _,
					username: U,
					isDeletingBanner: !!v,
					onDeleteBanner: g
				}), L ? r.a.createElement("div", {
					className: x.a.nftProfileUnitContainer
				}, r.a.createElement(i.a, {
					className: x.a.nftProfileUnit,
					imageUrl: E
				})) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: x.a.snoovatarContainer
				}, N && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: x.a.topGlow
				}), r.a.createElement("div", {
					className: x.a.bottomGlow
				}), !O && r.a.createElement(j, null)), r.a.createElement("img", {
					className: Object(o.a)(x.a.snoovatar, {
						[x.a.premiumGlow]: N
					}),
					src: E || void 0
				})), !a && k && r.a.createElement(c.a, {
					to: "/settings/profile",
					className: x.a.snoovatarSettingsLink
				}, r.a.createElement(l.a, {
					name: "settings",
					className: w.a.settingsIcon
				}))), r.a.createElement(P.a, {
					isEmployee: I,
					isGold: N,
					isNSFW: _,
					title: y,
					username: U
				}), r.a.createElement(h.a, {
					className: x.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: U,
					userCreated: S,
					url: A
				}), (k || !n && !!E) && r.a.createElement(p.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: k,
					onClick: C
				}), B && r.a.createElement(b.a, {
					username: U,
					isHovercard: !!M,
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
				c = n.n(i);
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
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
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
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(b);

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
					return e.href ? o.a.createElement(c.a, h({}, t, {
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
					}), e.showDropdownTriangle && o.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle,
					[f.a.modNotes]: t.isModNotesStyle
				});
				return o.a.createElement(v, h({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
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
				modNotes: "_19418fPEhBETWYOoZDCwE0",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				isModNotesStyle: "_3X4Y2xTs4XH5VgeZ7w-cv5",
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
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
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
						menuOptionClassName: a,
						isModNotesStyle: s
					} = this.props;
					return e.map((e, d) => r.a.createElement(c.b, {
						key: d + e.displayText,
						className: Object(i.a)(o.a.menuOption, a, {
							[o.a.topics]: n,
							[o.a.modNotes]: s
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isModNotesStyle: s,
						isTopicsStyle: n
					}, s ? r.a.createElement("span", {
						className: o.a.modNotes
					}, e.icon && e.icon, e.displayText) : r.a.createElement(r.a.Fragment, null, e.icon && e.icon, e.displayText)))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: a,
						isModNotesStyle: s,
						isTopicsStyle: c,
						menuItemsClassName: u,
						name: p,
						isSaving: b,
						buttonIcon: f,
						disabled: h
					} = this.props, {
						isOpen: v
					} = this.state;
					return r.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(o.a.dropdownMenu, t, {
							[o.a.topics]: c
						})
					}, r.a.createElement("button", {
						onClick: h ? void 0 : this.handleDropdownClick,
						className: Object(i.a)(e, o.a.selector, {
							[o.a.compact]: a
						}, {
							[o.a.topics]: c
						}, {
							[o.a.modNotes]: s
						}, {
							[o.a.disabled]: h
						}),
						name: p,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: h ? void 0 : this.handleDropdownBlur,
						onKeyDown: h ? void 0 : this.handleDropdownKeyDown
					}, r.a.createElement("span", {
						className: o.a.selectorContent,
						tabIndex: -1
					}, f && r.a.createElement("span", {
						className: Object(i.a)(o.a.buttonIcon, {
							[o.a.isModNotesStyle]: s
						})
					}, f), n), h ? null : b ? r.a.createElement(d.a, {
						sizePx: 8,
						className: o.a.loadingIcon
					}) : r.a.createElement(l.a, {
						name: "caret_down"
					})), r.a.createElement("div", {
						className: Object(i.a)(o.a.menuItems, u, {
							[o.a.topics]: c,
							[o.a.isClosed]: !v && s,
							[o.a.isModNotesStyle]: s
						}),
						onMouseDown: m,
						ref: this.menuItems
					}, !h && v && this.getDropdownMenuItems()))
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
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(s.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
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

			function s({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case r.I.AUTHORIZATION_ERROR:
						return t ? a.fbt._("You might need to be logged in to do that.", null, {
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
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, n) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
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
			const o = ({
					isLoading: e
				}) => Object(a.a)(s.a.loadingBackground, {
					[s.a["m-loading"]]: e
				}),
				i = e => Object(a.a)(s.a.loadingBar, o(e))
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/InsideOverlay.tsx");

			function s() {
				return Object(a.useContext)(r.a)
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
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
			const c = () => {
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

			function s(e, t = a.Bottom) {
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
							c = Math.ceil(i + n) >= r,
							d = Math.ceil(n - i) >= r,
							l = t === a.Bottom ? c : d;
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
			t.a = function({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
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
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/reddit/helpers/isPost.ts"),
				s = n("./src/redditGQL/types.ts");
			const o = "DEFAULT_MOD_NOTE",
				i = (e, t) => `LAST_AUTHOR_MOD_NOTE-${e}${t?"-overlay":""}`,
				c = {
					[s.q.BotBan]: "#1717604F",
					[s.q.PermaBan]: "#3E0A514F",
					[s.q.Ban]: "#5B00414F",
					[s.q.AbuseWarning]: "#6D001A4F",
					[s.q.SpamWarning]: "#5423134F",
					[s.q.SpamWatch]: "#3A26194F",
					[s.q.SolidContributor]: "#0044414F",
					[s.q.HelpfulUser]: "#02315C4F",
					[o]: "#242424"
				},
				d = {
					[s.q.BotBan]: "#CCD7FF",
					[s.q.PermaBan]: "#F3CCFF",
					[s.q.Ban]: "#FFC9D2",
					[s.q.AbuseWarning]: "#FFD5AE",
					[s.q.SpamWarning]: "#FFF494",
					[s.q.SpamWatch]: "#EAD5A2",
					[s.q.SolidContributor]: "#CBFD9A",
					[s.q.HelpfulUser]: "#A6EDFF",
					[o]: "#E6E6E6"
				},
				l = {
					[s.q.BotBan]: "ban_fill",
					[s.q.PermaBan]: "bot_fill",
					[s.q.Ban]: "bot_fill",
					[s.q.AbuseWarning]: "spoiler_fill",
					[s.q.SpamWarning]: "spoiler_fill",
					[s.q.SpamWatch]: "nsfw_language_fill",
					[s.q.SolidContributor]: "new_fill",
					[s.q.HelpfulUser]: "peace_fill",
					[o]: "user_note_fill"
				},
				m = {
					[s.q.BotBan]: "#5349DA",
					[s.q.PermaBan]: "#9C3CAC",
					[s.q.Ban]: "#DE107F",
					[s.q.AbuseWarning]: "#FB133A",
					[s.q.SpamWarning]: "#E79800",
					[s.q.SpamWatch]: "#9C6926",
					[s.q.SolidContributor]: "#00A368",
					[s.q.HelpfulUser]: "#006DC6",
					[o]: "#818384"
				},
				u = {
					[s.q.BotBan]: () => a.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[s.q.PermaBan]: () => a.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[s.q.Ban]: () => a.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[s.q.AbuseWarning]: () => a.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[s.q.SpamWarning]: () => a.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[s.q.SpamWatch]: () => a.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[s.q.SolidContributor]: () => a.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[s.q.HelpfulUser]: () => a.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				p = e => Object(r.a)(e.id) ? e.belongsTo.id : e.subredditId
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
					experimentName: a.t
				}) === a.w.Enabled,
				o = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.Ac
				}) === a.Zc
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.fdb6acc79f8687b01454.js.map