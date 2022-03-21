// https://www.redditstatic.com/desktop2x/AuthorHovercard.0623a246acaaa6486286.js
// Retrieved at 3/21/2022, 2:30:04 PM by Reddit Dataminer v1.0.0
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
				return l
			})), n.d(t, "h", (function() {
				return d
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
				l = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				d = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
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
				l = n("./src/reddit/actions/subreddit.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
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
				_ = n("./src/reddit/models/SubredditModeration/index.ts"),
				N = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/bannedUser.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/user.ts"),
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
			const S = {};
			var P = (e = S, t) => {
					switch (t.type) {
						case E.o: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(_.e)(n, a);
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
							} = t.payload, r = Object(_.e)(n, a);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				M = Object(y.c)({
					error: w,
					pending: P
				});
			const U = {};
			var A = (e = U, t) => {
					switch (t.type) {
						case E.n: {
							const {
								fetchedToken: n,
								subredditId: a
							} = t.payload, r = Object(_.e)(a, n);
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
			var B = (e = null, t) => {
				switch (t.type) {
					case T.a:
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
			var K = (e = !1, t) => {
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
				G = Object(y.c)({
					error: W,
					pending: K
				});
			var Z = (e = null, t) => {
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
				J = Object(y.c)({
					api: G,
					result: Z
				});
			const q = {};
			var z = (e = q, t) => {
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
				X = Object(y.c)({
					api: M,
					fetchedTokens: A,
					inContext: B,
					loadMore: D,
					models: H,
					search: J,
					userOrder: z
				});
			Object(j.a)({
				features: {
					banned: X
				}
			});
			const Q = Object(o.a)(E.o),
				V = Object(o.a)(E.n),
				Y = Object(o.a)(E.m),
				$ = (e, t = {}) => async (n, a, {
					apiContext: r
				}) => {
					const s = a(),
						o = t.after || "",
						i = Object(_.e)(e, o),
						c = s.features.banned.fetchedTokens[i];
					if (s.features.banned.api.pending[i] || c) return;
					n(Q({
						subredditId: e,
						fetchedToken: o
					}));
					const l = s.subreddits.models[e].name,
						d = await x(r(), l, t);
					d.ok ? n(V({
						...d.body,
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
					const l = o(),
						m = l.subreddits.models[e].url,
						h = l.subreddits.models[e].name;
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
						r(Object(d.f)({
							kind: N.b.SuccessMod,
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
						r(Object(d.f)({
							kind: N.b.Error,
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
					})), n(Object(d.f)({
						kind: N.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(d.f)({
							kind: N.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, a) => {
					const r = a();
					await Promise.all([(async () => {
						if (!Object(C.b)(m.a.BAN_USER)(r) && !Object(g.P)(r, {
								subredditId: e
							})) {
							const t = Object(g.S)(r, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const a = Object(k.wb)(r, {
							userName: t
						});
						if (!a) return;
						const s = Object(O.h)(r, {
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
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/authorHovercard.ts");
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
				return s.a.createElement(l.t, {
					onClick: t => {
						if (b && b(t), e(), p === a.awardNotification) return f();
						r(Object(d.b)(o))
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
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(d);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => s.a.createElement(i.e, null, s.a.createElement(i.i, null, s.a.createElement(l.a, null, s.a.createElement(i.q, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
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
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/fastdom/index.ts"),
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
				I = Object(l.a)(e => {
					const {
						children: t,
						className: n,
						style: a,
						caretPosition: r,
						caretColor: o,
						onClick: i,
						hideCaret: l,
						...d
					} = e;
					return s.a.createElement("div", h({
						onClick: i,
						className: Object(c.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === r,
							[f.a.caretOnLeft]: "left" === r,
							[f.a.caretOnRight]: "right" === r,
							[f.a.caretOnBottom]: "bottom" === r,
							[f.a.hideCaret]: l
						}),
						style: {
							...a,
							"--contentTooltip-caretColor": o && o[r] ? o[r] : Object(u.a)(e).body
						}
					}, d), t)
				}),
				_ = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				N = Object(m.a)(I, [a.a.Click, a.a.Keydown]),
				C = Object(o.b)(_);
			class O extends s.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						d.a.read(() => {
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
					return s.a.createElement(N, h({}, this.props, {
						caretPosition: a,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = C(O)
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
				l = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/models/ApiRequestState/index.ts"),
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
						const t = Object(d.b)();
						f(e, t)
					},
					isPending: h ? u : void 0
				}), !u && r.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: a
					})
				}, r.a.createElement(l.a, {
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
				i = n("./src/reddit/actions/snoovatarModal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/selectors/commentSelector.ts"),
				m = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				u = n("./src/reddit/selectors/gold/awardIcon.ts"),
				p = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/selectors/modUserNotes.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/selectors/userFlair.ts"),
				C = n("./src/reddit/selectors/userPrefs.ts"),
				O = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				k = n("./src/config.ts"),
				E = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = n("./src/lib/lessComponent.tsx"),
				y = n("./src/lib/prettyPrintNumber/index.ts"),
				w = n("./src/reddit/components/ChatButton/index.tsx"),
				S = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				P = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				M = n("./src/reddit/components/SubscribeButton/index.tsx"),
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
				X = n("./src/reddit/icons/fonts/index.tsx"),
				Q = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				V = n("./src/reddit/selectors/bannedUser.ts"),
				Y = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				$ = n.n(Y);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = Object(o.c)({
				hasModMailPermissions: Object(p.b)(Q.c.mail),
				isUserBanned: (e, t) => !!Object(V.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(_.wb)(e, {
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
					}, a ? r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(T.e(t))
						}
					}, r.a.createElement(X.a, {
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
					}, r.a.createElement(X.a, {
						name: "ban",
						className: $.a.icon
					}), ee._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							c(), o(T.d(t))
						}
					}, r.a.createElement(X.a, {
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
					onUnbanUser: t => e(Object(J.e)(n, t)),
					requestUserBanInfo: () => e(Object(J.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(G.c)({
							username: t,
							subredditId: n,
							contextId: a
						})), e(Object(J.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(G.d)({
							username: t,
							subredditId: n,
							contextId: a
						})), e(Object(Z.i)(q.a.MUTE_USER))
					}
				}))(ne),
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
				}, r.a.createElement(X.a, {
					name: "tag",
					className: $.a.icon
				}), se._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ie = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ce = n.n(ie);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const de = j.a.wrapped(U.a, "UserIcon", ce.a),
				me = j.a.wrapped(M.a, "SubscribeButton", ce.a),
				ue = j.a.wrapped(w.b, "ChatButton", ce.a),
				pe = j.a.wrapped(D.a, "PremiumIcon", ce.a),
				be = j.a.wrapped(E.a, "UserNameLink", ce.a),
				fe = j.a.div("UserNameMetaData", ce.a),
				he = j.a.div("MetaDataItem", ce.a),
				ve = j.a.div("Bullet", ce.a),
				xe = j.a.div("UserNameContainer", ce.a),
				Ie = j.a.div("KarmaGrid", ce.a),
				_e = j.a.div("GenericKarma", ce.a),
				Ne = j.a.a("InfoLink", ce.a),
				Ce = j.a.div("KarmaCount", ce.a),
				Oe = j.a.div("GenericKarmaLabel", ce.a),
				ge = j.a.div("BannerImage", ce.a),
				ke = j.a.div("UserContainer", ce.a),
				Ee = j.a.div("BottomSpacer", ce.a),
				je = j.a.div("Container", ce.a),
				ye = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(be, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && r.a.createElement(L.a, {
					className: ce.a.adminIcon,
					title: g.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(E.a, {
					to: "/premium"
				}, r.a.createElement(pe, null))), r.a.createElement(fe, null, r.a.createElement(he, null, `u/${e.userName}`, r.a.createElement(ve, null, "•")), r.a.createElement(he, null, (e.user.createdUtc || e.user.created) && r.a.createElement(H.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				we = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...A.a,
						...t
					};
					return r.a.createElement(Ie, null, r.a.createElement(_e, null, r.a.createElement(Ce, null, Object(y.b)(n.fromPosts)), r.a.createElement(Oe, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(_e, null, r.a.createElement(Ce, null, Object(y.b)(n.fromComments)), r.a.createElement(Oe, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), r.a.createElement(_e, null, r.a.createElement(Ce, null, Object(y.b)(n.fromAwardsReceived)), r.a.createElement(Oe, null, g.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [g.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), r.a.createElement(Ne, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(B.a, {
						className: ce.a.infoIcon
					})))), r.a.createElement(_e, null, r.a.createElement(Ce, null, Object(y.b)(n.fromAwardsGiven)), r.a.createElement(Oe, null, g.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [g.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), r.a.createElement(Ne, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(B.a, {
						className: ce.a.infoIcon
					})))))
				},
				Se = e => {
					var t, n;
					const {
						className: a,
						contextId: s,
						currentUser: o,
						hideNSFWPref: i,
						hoverId: c,
						isLoggedIn: l,
						onClickSnoovatar: d,
						moderatorPermissions: m,
						prefersReducedAnimations: u,
						profile: p,
						sendEvent: b,
						style: f,
						subredditId: h,
						topAwardIcon: v,
						userName: x,
						user: I,
						userFlair: _,
						isCurrentUserBanned: N,
						userProfileStyles: C,
						acceptChats: O,
						isCommentAuthorBlocked: E
					} = e;
					if (!I) return r.a.createElement(je, {
						style: f
					});
					const j = !!o && Object(R.e)(o) === x,
						y = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						w = I.accountIcon || `${k.a.assetPath}/img/snoo_user_placeholder.png`,
						P = null == m ? void 0 : m.flair,
						M = null == m ? void 0 : m.access,
						U = (null == _ ? void 0 : _.templateIds) && (null === (t = null == _ ? void 0 : _.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						A = null === (n = null == _ ? void 0 : _.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: B
						} = I,
						L = !!I.snoovatarFullBodyAsset,
						D = I.isNSFW && i;
					let F;
					return F = L ? !D && C && C.bannerBackgroundImage || void 0 : D ? `${k.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(je, {
						className: a,
						id: c,
						style: f
					}, !L && F && r.a.createElement(ge, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), r.a.createElement(ke, null, L ? r.a.createElement(K.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: I.isEmployee,
						isGold: I.isGold,
						isNSFW: I.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: () => d && d(),
						prefersReducedAnimations: !!u,
						snoovatarUrl: I.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: I.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(xe, null, r.a.createElement(de, {
						iconUrl: w,
						isNSFW: I.isNSFW,
						userName: x
					}), r.a.createElement(ye, {
						title: null == p ? void 0 : p.title,
						user: I,
						userName: x
					})), r.a.createElement(we, {
						user: I
					}), B && r.a.createElement(W.a, {
						recentAwardings: B,
						topAwardIcon: v,
						username: x
					}), l && !j && !N && O && !E && r.a.createElement(ue, {
						contextId: s,
						userId: I.id,
						text: g.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), I.hasUserProfile && !N && !E && !j && I.enableFollowers && r.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(T.g)(e ? "unfollow" : "follow", s),
						isFullWidth: !0,
						small: !0
					})), M && s && !j && h && r.a.createElement(ae, {
						contextId: s,
						subredditId: h,
						sendEvent: b,
						username: x
					}), P && s && U && A && h && r.a.createElement(oe, {
						contextId: s,
						subredditId: h,
						sendEvent: b,
						username: x
					}), r.a.createElement(S.i, {
						contextId: s,
						subredditId: h,
						user: I
					}), !(M || l) && r.a.createElement(Ee, null))
				},
				Pe = Object(P.a)(Se),
				Me = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Pe, le({
						isOpen: t
					}, e))
				};
			Me.WrappedComponent = Se;
			var Ue = Me;
			const Ae = Object(o.c)({
					activeTooltipId: I.a,
					currentUser: _.k,
					isLoggedIn: _.O,
					hideNSFWPref: _.E,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(p.m)(e, {
						subredditId: t
					}) : void 0,
					prefersReducedAnimations: C.c,
					profile: (e, {
						userName: t
					}) => Object(h.j)(e, {
						profileName: t
					}),
					topAwardIcon: (e, {
						userName: t
					}) => Object(u.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: _.wb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(N.d)(e, {
						subredditId: t
					}) : void 0,
					isCurrentUserBanned: (e, t) => !!Object(x.l)(t) && Object(x.db)(e, t),
					userProfileStyles: (e, t) => Object(v.m)(e, Object(h.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(h.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isInModNotesExperiment: (e, {
						subredditId: t
					}) => Object(m.a)(e, t),
					trophyCase: (e, t) => Object(h.r)(e, Object(h.m)(e, t.userName)),
					isNightMode: _.bb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(l.a)(t.contextId) ? Object(f.G)(e, {
							postId: t.contextId
						}) : Object(d.b)(e, {
							commentId: t.contextId
						});
						return Object(b.a)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, {
						userName: t
					}) => Object(x.eb)(e, {
						identifier: {
							name: t,
							type: "profile"
						}
					})
				}),
				Te = Object(s.b)(Ae, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Te(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: () => !e.isInModNotesExperiment && e.onHideTooltip && e.onHideTooltip()
			}, e.isInModNotesExperiment ? r.a.createElement(O.b, {
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
			})))
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
				c = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				m = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/trackers/modNote.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/actions/subreddit.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/lib/localStorageAvailable/index.ts"),
				x = n("./src/reddit/helpers/localStorage/index.ts"),
				I = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/constants/keycodes.ts"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/controls/Checkbox/index.tsx"),
				O = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/ModUserNotes/index.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				y = n.n(j),
				w = n("./src/redditGQL/types.ts");
			const S = Object(h.a)(I.b),
				P = ["NONE", w.r.AbuseWarning, w.r.SpamWarning, w.r.SpamWatch, w.r.SolidContributor, w.r.HelpfulUser],
				M = {
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
						userId: c,
						thingId: d
					} = e, [u, p] = Object(a.useState)(), [b, h] = Object(a.useState)(!0), [I, j] = Object(a.useState)(""), [w, U] = Object(a.useState)(!1), A = Object(s.e)(E.bb);
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
							const e = Object(x.D)("modnote-draft");
							j(e && e[c] ? e[c] : "")
						}
					}, [c]);
					const T = Object(s.d)(),
						B = Object(a.useCallback)(e => {
							j(e), Object(x.Ib)("modnote-draft", {
								[c]: e
							})
						}, [j, c]),
						L = Object(a.useCallback)(e => {
							e.stopPropagation(), T(Object(i.a)(o, c, I, n, u, b ? d : void 0)), p(void 0), B("")
						}, [T, o, B, I, c, u, b, d, n]),
						D = Object(a.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== _.a.Enter || e.shiftKey || (e.preventDefault(), L(e))
						}, [L]),
						F = u ? M[u]() : M.NONE(),
						R = u ? u && Object(g.b)(k.e[u], {
							isFilled: !0
						}) : void 0,
						H = u && k.d[u];
					return r.a.createElement("div", {
						className: Object(l.a)(t)
					}, r.a.createElement("div", {
						className: y.a.meta
					}, r.a.createElement("span", {
						className: y.a.labelContainer
					}, r.a.createElement("label", {
						className: y.a.labelText,
						htmlFor: "label"
					}, f.fbt._("Label", null, {
						hk: "39tjG1"
					})), r.a.createElement(O.b, {
						id: "labelSelector",
						className: y.a.dropdown,
						displayText: F,
						buttonIcon: R ? r.a.createElement(R, {
							className: y.a.labelIcon,
							style: {
								...H && {
									color: H
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: P.map(e => {
							const t = M[e](),
								n = "NONE" === e ? void 0 : Object(g.b)(k.e[e], {
									isFilled: !0
								}),
								a = k.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !u : u === e,
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
						onSelect: e => "NONE" === e.value ? p(void 0) : p(e.value),
						buttonClassName: y.a.dropdownButton,
						menuItemsClassName: y.a.menuItems,
						isModNotesStyle: !0
					})), r.a.createElement("span", {
						className: y.a.checkboxContainer
					}, r.a.createElement(C.a, {
						className: y.a.checkbox,
						isCheckboxSelected: b,
						toggleCheckbox: () => h(!b)
					}), d && Object(m.a)(d) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), r.a.createElement("span", {
						className: y.a.textareaContainer
					}, r.a.createElement("textarea", {
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(l.a)(y.a.textarea, {
							[y.a.isNightMode]: A
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
						isOpen: w
					}, r.a.createElement("div", {
						className: y.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), r.a.createElement("div", {
						className: y.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), r.a.createElement(N.t, {
						className: Object(l.a)(y.a.sendButton, {
							[y.a.isNightMode]: A,
							[y.a.isDisabled]: 0 === I.length
						}),
						disabled: 0 === I.length,
						Icon: () => r.a.createElement(g.a, {
							className: Object(l.a)(y.a.iconSend, {
								[y.a.isDisabled]: 0 === I.length
							}),
							name: "send",
							isFilled: !0
						}),
						size: N.d.XS,
						iconPosition: N.h.C,
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
			const D = [w.k.All, w.k.Note, w.k.Invite, w.k.Ban, w.k.Mute, w.k.ContentChange, w.k.Removal, w.k.Approval, w.k.Spam, w.k.ModAction],
				F = {
					[w.k.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[w.k.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[w.k.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[w.k.Ban]: () => f.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[w.k.Mute]: () => f.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[w.k.ContentChange]: () => f.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[w.k.Removal]: () => f.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[w.k.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[w.k.ModAction]: () => f.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[w.k.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				R = {
					[w.k.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[w.k.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[w.k.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[w.k.Ban]: () => f.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[w.k.Mute]: () => f.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[w.k.ContentChange]: () => f.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[w.k.Removal]: () => f.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[w.k.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[w.k.ModAction]: () => f.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[w.k.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var H = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						onChangeSubredditId: i,
						filter: c,
						onChangeFilter: d,
						onChangeView: m
					} = e, b = Object(p.a)(), h = Object(s.e)(e => Object(A.o)(e, void 0)), v = h.find(e => e.id === n), x = R[c](), I = Object(g.b)("back_fill"), _ = Object(a.useCallback)(() => b(Object(u.j)({
						userId: o,
						subredditId: n
					})), [o, n, b]), N = Object(a.useCallback)(e => {
						i(e.value), b(Object(u.q)({
							userId: o,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [o, n, b, i]), C = Object(a.useCallback)(() => b(Object(u.k)({
						userId: o,
						subredditId: n
					})), [o, n, b]), k = Object(a.useCallback)(e => {
						d(e.value), b(Object(u.r)({
							userId: o,
							subredditId: n,
							filteredType: e.value
						}))
					}, [o, n, b, d]);
					return r.a.createElement("div", {
						className: Object(l.a)(t, L.a.wrapper),
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
						className: L.a.subredditsWrapper
					}, r.a.createElement(O.b, {
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
						onOpen: _,
						onSelect: N,
						showSelectedCheckmark: !0
					})), r.a.createElement("div", {
						className: L.a.typesWrapper
					}, r.a.createElement(O.b, {
						id: "typeFilter",
						className: L.a.types,
						buttonClassName: L.a.dropdownButton,
						menuItemsClassName: L.a.menuItems,
						menuOptionClassName: L.a.menuOption,
						displayText: x,
						options: D.map(e => ({
							displayText: F[e](),
							value: e,
							isSelected: e === c
						})),
						onOpen: C,
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
					[w.j.AcceptModeratorInvite]: "mod",
					[w.j.AddContributor]: "user",
					[w.j.ApproveLink]: "approve",
					[w.j.ApproveComment]: "approve",
					[w.j.AddContributor]: "user",
					[w.j.AddModerator]: "mod",
					[w.j.BanUser]: "ban",
					[w.j.InviteModerator]: "mod",
					[w.j.MuteUser]: "mod_mute",
					[w.j.RemoveComment]: "remove",
					[w.j.RemoveContributor]: "block",
					[w.j.RemoveLink]: "remove",
					[w.j.RemoveModerator]: "unmod",
					[w.j.RemoveWikiContributor]: "wiki_ban",
					[w.j.SpamComment]: "spam",
					[w.j.SpamLink]: "spam",
					[w.j.Spoiler]: "spoiler",
					[w.j.Sticky]: "pin",
					[w.j.UnbanUser]: "unban",
					[w.j.UninviteModerator]: "unmod",
					[w.j.UnmuteUser]: "mod_unmute",
					[w.j.Unspoiler]: "spoiler",
					[w.j.Unsticky]: "unpin",
					[w.j.WikiBanned]: "wiki_ban",
					[w.j.WikiContributor]: "wiki",
					[w.j.WikiUnbanned]: "wiki_unban"
				},
				X = {
					[w.r.Ban]: "ban",
					[w.r.BotBan]: "bot",
					[w.r.PermaBan]: "block"
				};
			var Q = e => {
					const {
						className: t,
						actionType: n,
						label: a
					} = e, s = n ? z[n] || "mod" : a && X[a] || "user_note";
					if (!s) return null;
					const o = Object(g.b)(s);
					return r.a.createElement(o, {
						className: Object(l.a)(t, q.a.icon)
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
						onClickUsername: c,
						subredditId: d
					} = e, m = Object(s.d)(), {
						user: u,
						id: p,
						itemType: b
					} = o, h = `ModUserNote--Modal--DeleteConfirmation--${p}`, v = Object(a.useCallback)(() => b && m(Object(i.b)(d, u.id, p, b)), [m, u.id, p, b, d]), x = Object(a.useCallback)(() => m(Object(Y.i)(h)), [m, h]), I = Object(s.e)(e => Object(V.a)(e) === h), _ = Object($.a)(), N = new Intl.DateTimeFormat(_, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(o.createdAt)), C = o.itemType === w.l.Note;
					return r.a.createElement("div", {
						className: Object(l.a)(t, ae.a.metadata)
					}, o.operator && r.a.createElement(te.a, {
						className: ae.a.operator,
						to: `/user/${o.operator.displayName}/`,
						onClick: c
					}, "u/", o.operator.displayName), r.a.createElement("span", {
						className: ae.a.createdDate
					}, f.fbt._("on {createdDate}", [f.fbt._param("createdDate", N)], {
						hk: "2VoP7K"
					})), C && r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						className: Object(l.a)(n, ae.a.deleteButton),
						onClick: x
					}, f.fbt._("Delete", null, {
						hk: "4lt26q"
					})), I && r.a.createElement(ee.a, {
						actionText: f.fbt._("Yes, Delete", null, {
							hk: "3kB0Hd"
						}),
						headerText: f.fbt._("Delete this note?", null, {
							hk: "bGAxq"
						}),
						modalText: f.fbt._("This mod note will be permanently deleted.", null, {
							hk: "DFQi2"
						}),
						onConfirm: v,
						toggleModal: x,
						withOverlay: !0
					})))
				},
				se = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				oe = n.n(se);
			var ie = ({
					className: e,
					modNote: t,
					onClickLinked: n
				}) => {
					var a, o;
					const i = Object(s.e)(E.bb),
						c = "label" in t && t.label || k.c,
						d = "note" in t ? t.note : void 0,
						m = Object(g.b)(k.e[c || "bot"], {
							isFilled: !0
						}),
						u = ![k.c, w.r.BotBan, w.r.PermaBan, w.r.Ban].includes(c),
						p = t.postInfo ? null === (a = t.postInfo) || void 0 === a ? void 0 : a.permalink : t.commentInfo ? null === (o = t.commentInfo) || void 0 === o ? void 0 : o.permalink : void 0,
						b = Object(g.b)("external_link_fill");
					return d ? r.a.createElement("div", {
						className: Object(l.a)(e, oe.a.modNote),
						onClick: e => e.stopPropagation(),
						style: c ? {
							backgroundColor: i ? k.b[c] : k.a[c]
						} : {}
					}, u && r.a.createElement("div", {
						className: oe.a.header
					}, r.a.createElement(m, {
						className: oe.a.labelIcon,
						style: {
							color: k.d[c]
						}
					}), r.a.createElement("span", {
						className: oe.a.label
					}, k.f[c]())), d && r.a.createElement("div", {
						className: oe.a.note
					}, d), p && r.a.createElement("a", {
						className: oe.a.link,
						href: p || "",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: n
					}, r.a.createElement(b, {
						className: oe.a.linkIcon
					}))) : null
				},
				ce = n("./src/lib/constants/index.ts"),
				le = n("./src/lib/prettyPrintNumber/index.ts"),
				de = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				me = n.n(de);
			var ue = ({
					className: e,
					postInfo: t,
					commentInfo: n,
					onClick: a
				}) => {
					var s, o, i, c;
					if (!t && !n) return null;
					if (n && "Comment" !== n.__typename) return r.a.createElement("div", {
						className: Object(l.a)(e, me.a.preview)
					}, r.a.createElement("div", {
						className: me.a.content
					}, r.a.createElement("h6", {
						className: me.a.title
					}, ce.Lb)));
					const d = t ? t.permalink : n ? n.permalink : void 0,
						m = (null == t ? void 0 : t.title) || (null === (o = null === (s = n) || void 0 === s ? void 0 : s.content) || void 0 === o ? void 0 : o.markdown),
						u = t ? t.score || 0 : n && n.score || 0,
						p = (null == t ? void 0 : t.commentCount) || 0;
					return r.a.createElement("a", {
						className: Object(l.a)(e, me.a.preview),
						href: d || "",
						onClick: a,
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
					}, [f.fbt._param("pointsCount", Object(le.b)(u)), f.fbt._plural(u)], {
						hk: "47CFCp"
					})), !!p && r.a.createElement(r.a.Fragment, null, " · ", r.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(p, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (i = null == t ? void 0 : t.thumbnail) || void 0 === i ? void 0 : i.url) && r.a.createElement("div", {
						className: me.a.thumbnail
					}, r.a.createElement("img", {
						className: me.a.thumbnailImage,
						src: null === (c = t.thumbnail) || void 0 === c ? void 0 : c.url
					})))
				},
				pe = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				be = n.n(pe);
			const fe = {
					[w.j.AcceptModeratorInvite]: () => f.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[w.j.AddContributor]: () => f.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[w.j.AddModerator]: () => f.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[w.j.ApproveComment]: () => f.fbt._("Comment was approved", null, {
						hk: "3yCRAS"
					}),
					[w.j.ApproveLink]: () => f.fbt._("Post was approved", null, {
						hk: "6tcjn"
					}),
					[w.j.BanUser]: () => f.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[w.j.InviteModerator]: () => f.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[w.j.MuteUser]: () => f.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[w.j.RemoveComment]: () => f.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[w.j.RemoveContributor]: () => f.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[w.j.RemoveLink]: () => f.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[w.j.RemoveModerator]: () => f.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[w.j.RemoveWikiContributor]: () => f.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[w.j.SpamComment]: () => f.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[w.j.SpamLink]: () => f.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[w.j.Spoiler]: () => f.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[w.j.Sticky]: () => f.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[w.j.UnbanUser]: () => f.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[w.j.UninviteModerator]: () => f.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[w.j.UnmuteUser]: () => f.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[w.j.Unspoiler]: () => f.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[w.j.Unsticky]: () => f.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[w.j.WikiBanned]: () => f.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[w.j.WikiContributor]: () => f.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[w.j.WikiUnbanned]: () => f.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				he = {
					[w.r.Ban]: () => f.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[w.r.BotBan]: () => f.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[w.r.PermaBan]: () => f.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var ve = e => {
				const {
					className: t,
					actionType: n,
					label: a
				} = e, s = n ? fe[n] ? fe[n]() : null : a && he[a] ? he[a]() : null;
				return s ? r.a.createElement("h3", {
					className: Object(l.a)(t, be.a.title)
				}, s) : null
			};
			var xe = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, a = Object(s.e)(E.bb), o = Object(p.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return r.a.createElement("div", {
						className: Object(l.a)(Z.a.wrapper, e.className)
					}, r.a.createElement("div", {
						key: "aa",
						className: Z.a.iconWrapper,
						style: {
							background: a ? K.a.orca700 : K.a.narwhal100
						}
					}, r.a.createElement(Q, {
						className: Z.a.icon,
						actionType: t.actionType,
						label: t.label
					})), r.a.createElement("div", {
						className: Z.a.content,
						key: "ba"
					}, r.a.createElement(ve, {
						actionType: t.actionType,
						label: t.label,
						className: Z.a.title
					}), r.a.createElement(ie, {
						className: Z.a.note,
						modNote: t,
						onClickLinked: () => o(Object(u.b)({
							subredditId: n,
							modNote: t
						}))
					}), r.a.createElement(re, {
						className: Z.a.metaData,
						deleteClassName: Z.a.metaDataDelete,
						subredditId: n,
						modNote: t,
						onClickUsername: () => o(Object(u.n)({
							subredditId: n,
							modNote: t
						}))
					}), i && r.a.createElement(ue, {
						className: Z.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => o(Object(u.f)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				Ie = n("./src/reddit/hooks/useScrollGradient.ts"),
				_e = n("./src/reddit/selectors/modUserNotes.ts"),
				Ne = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				Ce = n.n(Ne);
			var Oe = e => {
					const t = {
							[w.k.Note]: f.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[w.k.Approval]: f.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[w.k.Removal]: f.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[w.k.Ban]: f.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[w.k.Mute]: f.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[w.k.Invite]: f.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[w.k.Spam]: f.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[w.k.ContentChange]: f.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[w.k.ModAction]: f.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[w.k.All]: f.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[w.k.Note]: "user_note",
							[w.k.Approval]: "approve",
							[w.k.Removal]: "remove",
							[w.k.Ban]: "ban",
							[w.k.Mute]: "mod_mute",
							[w.k.Invite]: "user",
							[w.k.Spam]: "spam",
							[w.k.ContentChange]: "pin",
							[w.k.ModAction]: "mod",
							[w.k.All]: "mod"
						},
						{
							className: a,
							subredditId: o,
							userId: i,
							filter: c
						} = e,
						d = Object(s.e)(e => Object(E.vb)(e, {
							userId: i
						})),
						m = Object(s.e)(e => Object(A.S)(e, {
							subredditId: o
						})),
						u = t[c],
						p = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", u)], {
							hk: "1NhVUh"
						}),
						b = m && d ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", d.username), f.fbt._param("subreddit name", m.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(g.b)(n[c]);
					return r.a.createElement("div", {
						className: Object(l.a)(a, Ce.a.container)
					}, r.a.createElement(h, {
						className: Ce.a.icon
					}), r.a.createElement("p", {
						className: Ce.a.mainLine
					}, `${p} ${b}`), c === w.k.Note && r.a.createElement("p", {
						className: Ce.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				ge = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				ke = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				Ee = n.n(ke),
				je = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var ye = e => r.a.createElement("div", {
					className: Object(l.a)(Ee.a.wrapper, e.className)
				}, r.a.createElement("div", {
					key: "d",
					className: Object(l.a)(Ee.a.icon, Object(je.a)(e))
				}), r.a.createElement("div", {
					key: "e",
					className: Ee.a.content
				}, r.a.createElement("div", {
					key: "ea",
					className: Object(l.a)(Ee.a.title, Object(je.b)(e))
				}), r.a.createElement("div", {
					key: "eb",
					className: Object(l.a)(Ee.a.body, Object(je.b)(e))
				}), r.a.createElement("div", {
					key: "ec",
					className: Object(l.a)(Ee.a.meta, Object(je.b)(e))
				}))),
				we = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				Se = n.n(we);
			var Pe = e => {
					const {
						className: t,
						isLoading: n,
						apiError: a,
						onTryAgain: s
					} = e;
					return r.a.createElement("div", {
						className: Object(l.a)(t, Se.a.placeholder)
					}, r.a.createElement(ye, {
						className: Se.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(ye, {
						className: Se.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(ye, {
						className: Se.a.placeholderLine,
						isLoading: n
					}), !!a && r.a.createElement(ge.a, {
						apiError: a,
						onTryAgain: s
					}))
				},
				Me = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				Ue = n.n(Me);
			var Ae = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						filter: c
					} = e, d = Object(s.d)(), m = Object(s.e)(E.bb), [u, p] = Object(a.useState)(!0);
					Object(a.useEffect)(() => {
						setTimeout(() => p(!1), 0)
					}, []);
					const {
						container: b,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(Ie.b)(!1, Ie.a.Top), v = Object(s.e)(e => Object(_e.e)(e, {
						subredditId: n,
						userId: o,
						filter: c
					})), x = Object(s.e)(e => Object(_e.c)(e, {
						subredditId: n,
						userId: o,
						filter: c
					})), I = Object(s.e)(e => Object(_e.d)(e, {
						subredditId: n,
						userId: o,
						filter: c
					})), _ = Object(s.e)(_e.b), N = !!v.length, C = !!x && !I && !_, O = e => d(Object(i.f)({
						subredditId: n,
						userId: o,
						filter: c,
						before: e
					}));
					return r.a.createElement(r.a.Fragment, null, N && r.a.createElement("div", {
						className: Object(l.a)(t, Ue.a.wrapper)
					}, r.a.createElement("div", {
						className: Object(l.a)(Ue.a.scrollGradient, {
							[Ue.a.visible]: C || I || f,
							[Ue.a.isNightMode]: m
						})
					}), r.a.createElement("div", {
						className: Ue.a.list,
						ref: b,
						onScroll: () => {
							W.a.read(() => {
								if (null == b ? void 0 : b.current) {
									h();
									const e = b.current,
										{
											scrollTop: t,
											offsetHeight: n,
											scrollHeight: a
										} = e;
									n - a >= t && C && !I && O(x)
								}
							})
						}
					}, v.map(e => r.a.createElement(xe, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (I || _) && r.a.createElement(Pe, {
						isLoading: I,
						apiError: _,
						onTryAgain: () => {
							x && O(x)
						}
					}))), !N && !I && !u && r.a.createElement(Oe, {
						className: Object(l.a)(t, Ue.a.wrapper, Ue.a.noItems),
						subredditId: n,
						userId: o,
						filter: c
					}), !N && (I || u) && r.a.createElement("div", {
						className: Object(l.a)(t, Ue.a.wrapper)
					}))
				},
				Te = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Be = n.n(Te);
			const {
				fbt: Le
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var De = e => {
					const t = Object(s.d)(),
						{
							className: n,
							subredditId: o,
							userId: c,
							onChangeView: f,
							defaultTypeFilter: h,
							thingId: v
						} = e,
						[x, I] = Object(a.useState)(h || w.k.All),
						[_, N] = Object(a.useState)(o),
						C = Object(s.e)(E.bb),
						O = Object(p.a)(),
						g = e => {
							t(Object(i.f)({
								subredditId: _,
								userId: c,
								filter: x,
								...e
							}))
						},
						k = x === w.k.All || x === w.k.Note;
					Object(a.useEffect)(() => {
						g(), t(Object(b.q)())
					}, []);
					const j = {
						subredditId: o,
						userId: c,
						...v && Object(d.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(m.a)(v) ? {
							postId: v
						} : null
					};
					return Object(a.useEffect)(() => (O(Object(u.v)(j)), () => O(Object(u.p)(j))), []), r.a.createElement("div", {
						className: Object(l.a)(n, Be.a.wrapper, {
							[Be.a.isNightMode]: C
						}),
						onClick: e => e.stopPropagation()
					}, r.a.createElement(H, {
						className: Be.a.filters,
						subredditId: _,
						userId: c,
						onChangeSubredditId: e => {
							N(e), g({
								subredditId: e
							})
						},
						filter: x,
						onChangeFilter: e => {
							I(e), g({
								filter: e
							})
						},
						onChangeView: f
					}), r.a.createElement(Ae, {
						className: Be.a.list,
						subredditId: _,
						userId: c,
						filter: x
					}), k && r.a.createElement(U, {
						className: Be.a.form,
						filter: x,
						subredditId: o,
						userId: c,
						thingId: v
					}))
				},
				Fe = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Re = n("./src/config.ts"),
				He = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				We = n("./src/lib/opener/index.ts"),
				Ke = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				Ge = n.n(Ke);
			var Ze = e => r.a.createElement("img", {
					className: Object(l.a)(e.className, Ge.a.anonymousSnoovatar),
					src: `${Re.a.assetPath}/img/anonymous_snoo.png`
				}),
				Je = n("./src/reddit/components/ChatButton/index.tsx"),
				qe = n("./src/reddit/components/HumanDate/index.tsx"),
				ze = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Xe = n("./src/reddit/components/ModNoteItem/index.tsx"),
				Qe = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Ve = n("./src/reddit/components/UserIcon/index.tsx"),
				Ye = n("./src/reddit/endpoints/profile/info.ts"),
				$e = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				et = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				tt = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				nt = n("./src/reddit/models/User/index.ts"),
				at = n("./src/reddit/selectors/gold/awardIcon.ts"),
				rt = n("./src/reddit/constants/modals.ts"),
				st = n("./src/reddit/actions/inContextModeration.ts"),
				ot = n("./src/reddit/actions/subredditModeration/ban.ts"),
				it = n("./src/reddit/actions/userFlair/index.ts"),
				ct = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				lt = n("./src/reddit/selectors/bannedUser.ts"),
				dt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				mt = n("./src/reddit/selectors/userFlair.ts"),
				ut = n("./src/reddit/components/Hovercards/helpers.ts"),
				pt = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less"),
				bt = n.n(pt);
			const {
				fbt: ft
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ht;
			! function(e) {
				e.ModLog = "ModLog", e.Ban = "Ban", e.Unban = "Unban", e.AddNote = "AddNote", e.Mute = "Mute", e.Flair = "Flair", e.Modmail = "Modmail"
			}(ht || (ht = {}));
			var vt = e => {
					var t, n;
					const o = Object(p.a)(),
						i = Object(s.d)(),
						{
							className: c,
							contextId: l,
							subredditId: d,
							username: m,
							onChangeView: b
						} = e,
						f = Object(s.e)(e => d ? Object(mt.d)(e, {
							subredditId: d
						}) : void 0),
						h = !!(null == f ? void 0 : f.templateIds) && (null === (t = null == f ? void 0 : f.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						v = !!(null === (n = null == f ? void 0 : f.displaySettings) || void 0 === n ? void 0 : n.isEnabled),
						x = Object(s.e)(t => Object(dt.b)(ct.c.access)(t, e)),
						I = Object(s.e)(t => Object(dt.b)(ct.c.mail)(t, e)),
						_ = Object(s.e)(t => Object(dt.b)(ct.c.flair)(t, e)),
						N = Object(s.e)(e => !!Object(lt.b)(e, {
							subredditId: d,
							username: m
						})),
						C = Object(s.e)(e => Object(E.wb)(e, {
							userName: m
						})),
						O = Object(s.e)(E.k),
						k = !!O && Object(nt.e)(O) === m,
						j = Object(s.e)(e => d ? e.subreddits.models[d] : null),
						y = Object(s.e)(e => {
							if (l) return Object(_e.f)(e, C.id, d)
						}),
						S = Object(a.useCallback)(() => {
							i(Object(ot.c)(d, {
								username: m
							})), o($e.e(l))
						}, [o, i, d, m, l]),
						P = Object(a.useCallback)(() => i(Object(ot.e)(d, C.id)), [C.id, d, i]),
						M = Object(a.useCallback)(() => {
							i(Object(st.c)({
								username: m,
								subredditId: d,
								contextId: l
							})), i(Object(ot.a)(d, m)), o($e.a(l))
						}, [o, i, m, d, l]),
						U = Object(a.useCallback)(() => {
							i(Object(st.d)({
								username: m,
								subredditId: d,
								contextId: l
							})), i(Object(Y.i)(rt.a.MUTE_USER)), o($e.d(l))
						}, [o, i, m, d, l]),
						A = Object(a.useCallback)(() => {
							i(Object(it.g)(d, m)), o($e.c(l))
						}, [o, i, m, d, l]),
						T = Object(a.useCallback)(() => d && o(Object(u.i)({
							subredditId: d,
							userId: C.id
						})), [d, C, o]),
						B = Object(a.useCallback)(e => {
							e.stopPropagation(), b && b(), d && o(Object(u.h)({
								subredditId: d,
								userId: C.id
							}))
						}, [d, C, o, b]),
						L = Object(a.useCallback)(e => {
							e.stopPropagation(), b && b(w.k.Note), d && o(Object(u.a)({
								subredditId: d,
								userId: C.id
							}))
						}, [d, C, o, b]);
					if (Object(a.useEffect)(() => {
							C && !C.isSuspended && S()
						}, []), !C) return null;
					const D = j && m ? `?toSubredditName=${j.name}&toUserName=${m}` : "",
						F = {
							[ht.ModLog]: x,
							[ht.Ban]: !C.isSuspended && x && !k && N,
							[ht.Unban]: !C.isSuspended && x && !k && !N,
							[ht.AddNote]: x,
							[ht.Mute]: x && !k && I,
							[ht.Flair]: _ && h && v,
							[ht.Modmail]: I
						};
					return r.a.createElement("div", {
						className: c
					}, F[ht.ModLog] && r.a.createElement(ut.a, {
						role: "button",
						onClick: B,
						className: bt.a.item
					}, r.a.createElement(g.a, {
						name: "mod",
						className: bt.a.icon
					}), ft._("User Mod Log", null, {
						hk: "2PiT0s"
					}), !!y && r.a.createElement("span", {
						className: bt.a.notesCount
					}, y)), F[ht.AddNote] && r.a.createElement(ut.a, {
						role: "button",
						onClick: L,
						className: bt.a.item
					}, r.a.createElement(g.a, {
						name: "user_note",
						className: bt.a.icon
					}), ft._("Add Note", null, {
						hk: "34JqdA"
					})), F[ht.Ban] && r.a.createElement(ut.a, {
						role: "button",
						onClick: P,
						className: bt.a.item
					}, r.a.createElement(g.a, {
						name: "unban",
						className: bt.a.icon
					}), ft._("Unban User", null, {
						hk: "1aASyW"
					})), F[ht.Unban] && r.a.createElement(ut.a, {
						role: "button",
						onClick: M,
						className: bt.a.item
					}, r.a.createElement(g.a, {
						name: "ban",
						className: bt.a.icon
					}), ft._("Ban User", null, {
						hk: "3OhuLx"
					})), F[ht.Mute] && r.a.createElement(ut.a, {
						role: "button",
						onClick: U,
						className: bt.a.item
					}, r.a.createElement(g.a, {
						name: "mod_mute",
						className: bt.a.icon
					}), ft._("Mute User", null, {
						hk: "3MCujH"
					})), F[ht.Flair] && r.a.createElement(ut.a, {
						role: "button",
						onClick: A,
						className: bt.a.item
					}, r.a.createElement(g.a, {
						name: "tag",
						className: bt.a.icon
					}), ft._("Edit user flair", null, {
						hk: "4mTxM"
					})), F[ht.Modmail] && r.a.createElement(ut.a, {
						role: "button",
						className: bt.a.item
					}, r.a.createElement("a", {
						href: `https://mod.reddit.com/mail/create${D}`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: T,
						className: bt.a.userActionItemInner
					}, r.a.createElement(g.a, {
						name: "mod_mail",
						className: bt.a.icon
					}), ft._("Send modmail", null, {
						hk: "ZUN0n"
					}))))
				},
				xt = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				It = n.n(xt);
			const _t = e => {
					var t, n;
					return r.a.createElement("div", {
						className: It.a.userDetails
					}, r.a.createElement("div", null, r.a.createElement(He.a, {
						className: It.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && r.a.createElement(r.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isEmployee && r.a.createElement(et.a, {
						className: It.a.adminIcon,
						title: f.fbt._("Reddit admin", null, {
							hk: "15wBTE"
						})
					}), e.user.isGold && r.a.createElement(He.a, {
						to: "/premium"
					}, r.a.createElement(tt.a, {
						className: It.a.PremiumIcon
					}))), r.a.createElement("div", {
						className: It.a.UserNameMetaData
					}, r.a.createElement("div", {
						className: It.a.MetaDataItem
					}, `u/${e.user.username}`, r.a.createElement("div", {
						className: It.a.Bullet
					}, "•")), r.a.createElement("div", {
						className: It.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && r.a.createElement(r.a.Fragment, null, r.a.createElement(qe.d, {
						seconds: e.user.createdUtc || e.user.created
					}), r.a.createElement("div", {
						className: It.a.Bullet
					}, "•"))), r.a.createElement("div", {
						className: It.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(le.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				Nt = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: a,
						prefersReducedAnimations: s
					} = e, o = {
						...Ye.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return r.a.createElement("div", {
						className: It.a.userInfoGrid
					}, r.a.createElement("div", {
						className: It.a.col
					}, r.a.createElement("span", {
						className: It.a.count
					}, Object(le.b)(o.fromPosts)), r.a.createElement("span", {
						className: It.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), r.a.createElement("div", {
						className: It.a.col
					}, r.a.createElement("span", {
						className: It.a.count
					}, Object(le.b)(o.fromComments)), r.a.createElement("span", {
						className: It.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), r.a.createElement("div", {
						className: It.a.col
					}, r.a.createElement("span", {
						className: It.a.count
					}, Object(le.b)(o.fromAwardsReceived)), r.a.createElement("span", {
						className: It.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), r.a.createElement("div", {
						className: It.a.col
					}, r.a.createElement("span", {
						className: It.a.count
					}, Object(le.b)(o.fromAwardsGiven)), r.a.createElement("span", {
						className: It.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), a.length > 0 && (e => r.a.createElement("div", {
						className: It.a.col
					}, r.a.createElement("div", {
						className: It.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = r.a.createElement("img", {
							className: It.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name
						});
						return r.a.createElement(r.a.Fragment, null, e.url ? r.a.createElement("a", {
							target: We.d.BLANK,
							rel: We.c,
							href: e.url
						}, n) : n)
					})), r.a.createElement("span", {
						className: It.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(a), i && ((e, t) => r.a.createElement("div", {
						className: It.a.col
					}, r.a.createElement("div", {
						className: It.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var a, s;
						if (!(n >= 3)) return r.a.createElement("img", {
							alt: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : null == e ? void 0 : e.name,
							key: null !== (s = null == e ? void 0 : e.description) && void 0 !== s ? s : null == e ? void 0 : e.name,
							className: It.a.recentAwardOrTropyIcon,
							src: Object(at.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), r.a.createElement("span", {
						className: It.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, s))
				};
			var Ct = e => {
				var t;
				const {
					contextId: n,
					currentUser: s,
					hideNSFWPref: o,
					hoverId: i,
					isLoggedIn: c,
					isNightMode: d,
					moderatorPermissions: m,
					style: b,
					userName: h,
					user: v,
					isCurrentUserBanned: x,
					userProfileStyles: I,
					acceptChats: _,
					isCommentAuthorBlocked: N,
					trophyCase: C,
					lastAuthorModNote: O,
					userIsSubscriber: g,
					subredditId: k,
					prefersReducedAnimations: E,
					onChangeView: j
				} = e, y = Object(p.a)();
				if (Object(a.useEffect)(() => {
						v && k && y(Object(u.u)({
							subredditId: k,
							userId: v.id
						}))
					}, [v, k]), !v) return r.a.createElement("div", {
					style: b
				});
				const w = !!s && Object(nt.e)(s) === h,
					S = c && !w && !x && _ && !N,
					P = v.hasUserProfile && !x && !N && !w && v.enableFollowers,
					M = null == m ? void 0 : m.access,
					U = v.isNSFW && o ? `${Re.a.assetPath}/img/user-info-banner.png` : (null == I ? void 0 : I.bannerBackgroundImage) ? I.bannerBackgroundImage : v.bannerImage,
					A = d ? "##D7DADC" : "#0079D3",
					T = d ? "#121212" : "#FFF";
				return r.a.createElement("div", {
					className: It.a.Container,
					id: i,
					style: {
						backgroundColor: T,
						...b
					}
				}, r.a.createElement("div", {
					className: It.a.UserContainer
				}, r.a.createElement("div", {
					className: It.a.BannerImage,
					style: U ? {
						backgroundImage: `url('${U}')`
					} : {}
				}), r.a.createElement("div", {
					className: It.a.snoovatarContainer
				}, v.snoovatarFullBodyAsset ? r.a.createElement("img", {
					className: It.a.snoovatar,
					src: v.snoovatarFullBodyAsset
				}) : (null === (t = v.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? r.a.createElement("div", {
					className: It.a.anonymousSnoovatar
				}, r.a.createElement(Ze, null)) : r.a.createElement(Ve.a, {
					className: It.a.UserIcon,
					iconUrl: v.accountIcon,
					isNSFW: v.isNSFW,
					userName: h
				}))), r.a.createElement(_t, {
					user: v,
					userName: h
				}), r.a.createElement(te.a, {
					className: It.a.profileLink,
					to: `/user/${h}/`
				}, f.fbt._("View full profile", null, {
					hk: "2s4Gmf"
				})), r.a.createElement("div", {
					className: It.a.profileButtonGroup
				}, S && r.a.createElement(Je.b, {
					className: Object(l.a)(It.a.ChatButton, It.a.profileButtonLeft, {
						[It.a.onlyButton]: !P
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
				}), P && r.a.createElement(Qe.a, {
					className: Object(l.a)(It.a.SubscribeButton, It.a.profileButtonRight, {
						[It.a.onlyButton]: !S
					}),
					identifier: {
						name: e.user.username,
						type: "profile"
					},
					getEventFactory: e => Object($e.g)(e ? "unfollow" : "follow", n),
					isFullWidth: !0,
					small: !0,
					style: {
						color: g ? "#D7DADC" : T,
						backgroundColor: A,
						width: 144
					}
				})), r.a.createElement(Nt, {
					user: v,
					trophyCase: C || [],
					prefersReducedAnimations: !!E
				}), M && O && r.a.createElement(Xe.b, {
					className: It.a.lastModNote,
					modNote: O,
					subredditId: k || "",
					onClick: e => {
						e.stopPropagation(), j()
					},
					context: Xe.a.ModIdCard
				}), n && k && h && r.a.createElement(vt, {
					contextId: n,
					subredditId: k,
					username: h,
					onChangeView: j
				}), r.a.createElement(ze.i, {
					contextId: n,
					subredditId: k,
					user: v
				}), r.a.createElement("div", {
					className: It.a.BottomSpacer
				}))
			};

			function Ot() {
				return (Ot = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const gt = e => {
					var t, n, l;
					const d = Object(s.e)(c.c),
						m = !!(null == d ? void 0 : d.isModNotesView),
						[u, p] = Object(a.useState)(!m),
						[b, f] = Object(a.useState)(w.k.All),
						h = Object(s.d)();
					Object(a.useEffect)(() => {
						h(Object(o.d)(e.userName))
					}, [h, e.userName]);
					const v = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (l = e.lastAuthorModNote) || void 0 === l ? void 0 : l.user.id : e.user.id;
					Object(a.useEffect)(() => {
						e.subredditId && v && h(Object(i.d)(e.subredditId, v))
					}, [h, e.subredditId, v]);
					const x = Object(a.useCallback)(e => {
						p(!u), f(e || w.k.All)
					}, [u, p]);
					return !u && e.subredditId && v ? r.a.createElement(De, {
						className: It.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: v,
						onChangeView: x,
						defaultTypeFilter: b,
						thingId: e.contextId
					}) : r.a.createElement(Ct, Ot({}, e, {
						onChangeView: x
					}))
				},
				kt = e => r.a.createElement(Fe.a, {
					className: It.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					hideCaret: !0
				}, r.a.createElement(gt, e));
			kt.WrappedComponent = gt;
			t.default = kt
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/components/Hovercards/helpers.ts"),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				l = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const u = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class p extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(m.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(s.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || l.a,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`, a = e.author || e.postOrComment.author;
					return r.a.createElement(o.a, {
						authorOrSubredditName: a,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, r.a.createElement(c.a, {
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
			t.default = Object(d.c)(p)
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
				return l
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
			var l = function({
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
				d = n("./src/lib/constants/index.ts");
			var m = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(o.a)(),
						a = null != t ? t : n;
					return r.a.createElement(r.a.Fragment, null, function(e, t = d.D) {
						const n = e * d.Sb;
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

			function b(e, t = d.D) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, n = !1, a = d.D) {
				const r = Object(p.e)(e, t),
					s = new Date(e * d.Sb);
				let o;
				if (r === p.a.Live || n) return u.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === p.a.Future ? o = Object(p.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(s, a) : function(e, t = d.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, a) : r === p.a.Past && (o = Object(p.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(s, a)), `${o} @ ${function(e,t=d.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,a)}`
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
				l = n("./src/reddit/selectors/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = n.n(d),
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
					}) => Object(l.b)(t)(e)
				}),
				I = Object(c.a)(v, [i.a.Click, i.a.Keydown]),
				_ = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				N = Object(s.b)(x);
			t.c = N(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(I, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(_, p({}, e, {
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
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/helpers/trackers/modNote.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
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
						onClick: _,
						subredditId: N,
						context: C
					} = e,
					O = "label" in I && I.label || f.c,
					g = "note" in I ? I.note : void 0,
					k = Object(b.b)(f.e[O || "bot"], {
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
					S = w ? w.permalink : y ? y.permalink : void 0,
					P = Object(b.b)("external_link"),
					M = Object(d.a)();
				return o.a.createElement("div", {
					className: Object(c.a)(v, x.a.modNote),
					onClick: e => {
						e.stopPropagation(), _ && _(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === C && l.c || "ModIdCard" === C && l.g;
							e && M(e({
								modNote: I,
								subredditId: N
							}))
						})()
					},
					style: O ? {
						backgroundColor: s ? f.b[O] : f.a[O]
					} : {}
				}, O !== f.c && o.a.createElement("div", {
					className: x.a.header
				}, o.a.createElement("div", {
					className: x.a.label
				}, o.a.createElement(k, {
					className: x.a.labelIcon,
					style: {
						color: f.d[O],
						fontSize: "15px",
						lineHeight: "15px"
					}
				}), f.f[O]())), g && o.a.createElement("div", {
					className: Object(c.a)(x.a.note, {
						[x.a.noLabel]: O === f.c
					})
				}, g), o.a.createElement("div", {
					className: x.a.metadata
				}, o.a.createElement(u.a, {
					className: x.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === C && l.l || "ModIdCard" === C && l.m;
							e && M(e({
								modNote: I,
								subredditId: N
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
				})), S && o.a.createElement("a", {
					className: x.a.link,
					href: S || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === C && l.d || "ModIdCard" === C && l.e;
							e && M(e({
								modNote: I,
								subredditId: N
							}))
						})()
					}
				}, o.a.createElement(P, {
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
				return l
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

			function l(e, t) {
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
				l = n.n(c);
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
					className: l.a.somethingWrong
				}, s.a.createElement("div", {
					className: l.a.somethingWrongText
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
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class d extends r.a.PureComponent {
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
					} = t, d = a.description ? a.description : a.name;
					return r.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: d,
						className: c.a.icon,
						src: e
					}), i > 1 && r.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), r.a.createElement("div", {
						className: c.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", a.name), l._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = d
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
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = n.n(d);
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
						userName: l
					} = this.props, {
						isUpdating: d
					} = this.state, u = e ? s.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === l ? s.a.createElement(i.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: d,
						onFileSelected: this.updateProfileIcon
					}, u) : o && r ? null : u
				}
			}
			t.a = Object(l.a)(u)
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
				l = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
				const x = Object(d.b)(),
					I = Object(o.d)(),
					_ = i && i.id,
					N = i && i.voteState;
				let C = null;
				_ || (C = e ? "user_hovercard" : "profile_overview");
				const O = Object(r.useCallback)(() => x(Object(u.g)(e ? "user_hovercard" : "profile_overview", t)), [e, x, t]);
				return s.a.createElement(m.t, {
					onClick: () => {
						n ? (x(u.h), _ && N === b.a.notVoted && I(Object(c.kb)(_))) : O();
						const e = n ? "postify" : "copy";
						I(Object(l.b)({
							clickSource: C,
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
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				d = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: n,
				isOwnProfile: a,
				onClick: l
			}) {
				return r.a.createElement(o.t, {
					onClick: l,
					isFullWidth: !0,
					className: Object(s.a)(d.a.snoovatarButton, {
						[d.a.snoovatarExtraPadding]: !t && a,
						[d.a.compactButtonLayout]: e
					}, n)
				}, t ? r.a.createElement(c.a, {
					className: d.a.shirtIcon
				}) : r.a.createElement("div", {
					className: d.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : a ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? r.a.createElement("div", {
					className: d.a.chevronIcon
				}) : r.a.createElement(i.a, {
					name: "caret_right",
					className: d.a.chevronIcon
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
				l = n.n(c),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = n.n(d);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: a,
				isDeletingBanner: c,
				onDeleteBanner: d
			}) {
				return r.a.createElement("div", {
					className: l.a.bannerWrapper
				}, r.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), a && e && (c ? r.a.createElement(s.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : r.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: d
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
				...l
			}) {
				const d = t ? r.a.createElement(r.a.Fragment, null, "u/", c, " · ", r.a.createElement(o.d, {
					seconds: a,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? r.a.createElement(s.a, i({}, l, {
					className: e,
					to: n
				}), d) : r.a.createElement("span", i({}, l, {
					className: e
				}), d)
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
				l = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = n.n(d);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: s,
				isNSFW: d
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
			}, o.a.createElement(l.a, {
				className: m.a.snoovatarPremiumIcon
			})), d && o.a.createElement(c.a, {
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
				l = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/selectors/experiments/econ/index.ts"),
				u = n("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				x = n.n(v);
			const I = 25;

			function _(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function N(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const C = _("particleDelay", x.a),
				O = _("particleX", x.a),
				g = _("particleFloat", x.a),
				k = () => {
					const e = N(O),
						t = N(g),
						n = N(C);
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
						className: `${k()}`
					})
				}
			}
			var j = E,
				y = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				w = n.n(y),
				S = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: a,
				isDeletingBanner: v,
				isEmployee: I,
				isGold: _,
				isNSFW: N,
				isOwnProfile: C,
				onClickSnoovatar: O,
				onDeleteBanner: g,
				prefersReducedAnimations: k,
				snoovatarUrl: E,
				title: y,
				userCreated: P,
				username: M,
				url: U,
				isHovercard: A
			}) => {
				const T = Object(s.e)(e => !C && !!E && Object(m.g)(e)),
					B = Object(s.e)(u.b),
					L = E && Object(l.e)(E) && B;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
					bannerBackgroundImage: e,
					editMode: !!a,
					isNSFW: N,
					username: M,
					isDeletingBanner: !!v,
					onDeleteBanner: g
				}), L ? r.a.createElement("div", {
					className: x.a.nftProfileUnitContainer
				}, r.a.createElement(i.a, {
					className: x.a.nftProfileUnit,
					imageUrl: E
				})) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: x.a.snoovatarContainer
				}, _ && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: x.a.topGlow
				}), r.a.createElement("div", {
					className: x.a.bottomGlow
				}), !k && r.a.createElement(j, null)), r.a.createElement("img", {
					className: Object(o.a)(x.a.snoovatar, {
						[x.a.premiumGlow]: _
					}),
					src: E || void 0
				})), !a && C && r.a.createElement(c.a, {
					to: "/settings/profile",
					className: x.a.snoovatarSettingsLink
				}, r.a.createElement(d.a, {
					name: "settings",
					className: w.a.settingsIcon
				}))), r.a.createElement(S.a, {
					isEmployee: I,
					isGold: _,
					isNSFW: N,
					title: y,
					username: M
				}), r.a.createElement(h.a, {
					className: x.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: M,
					userCreated: P,
					url: U
				}), (C || !n && !!E) && r.a.createElement(p.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: C,
					onClick: O
				}), T && r.a.createElement(b.a, {
					username: M,
					isHovercard: !!A,
					share: {
						username: M
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
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
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
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(d.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(l.a, {
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
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx");
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
					return e.map((e, l) => r.a.createElement(c.b, {
						key: l + e.displayText,
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
					}, f), n), h ? null : b ? r.a.createElement(l.a, {
						sizePx: 8,
						className: o.a.loadingIcon
					}) : r.a.createElement(d.a, {
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
							l = Math.ceil(n - i) >= r,
							d = t === a.Bottom ? c : l;
						s(!d)
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
				return l
			})), n.d(t, "e", (function() {
				return d
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
				l = {
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
				d = {
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
					experimentName: a.Dc
				}) === a.dd
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			}));
			var a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = Object(a.a)(c.V, c.M, (e, t) => !e && !t),
				d = Object(a.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: l,
					experimentName: s.yd
				}), e => Boolean(e)),
				m = e => Object(o.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: s.yd
				}),
				u = Object(a.a)(i.d, m, (e, t) => (null == e ? void 0 : e.toLocaleLowerCase()) === (null == t ? void 0 : t.toLocaleLowerCase())),
				p = Object(a.a)(i.r, d, u, (e, t, n) => t && e === r.Nb.SUBREDDIT && n),
				b = e => Boolean(Object(o.c)(e, {
					experimentEligibilitySelector: p,
					experimentName: s.yd
				}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.0623a246acaaa6486286.js.map