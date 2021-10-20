// https://www.redditstatic.com/desktop2x/ModerationPages~Settings~SubredditWiki.f4ed058b553413e4fd0f.js
// Retrieved at 10/20/2021, 5:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages~Settings~SubredditWiki"], {
		"./src/reddit/actions/pages/shared.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				n = r("./src/reddit/helpers/routeKey/index.ts"),
				a = r("./src/reddit/helpers/trackers/screenview.ts"),
				o = r("./src/telemetry/index.ts"),
				i = r("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const r = t(),
					{
						currentPage: d
					} = r.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(s.a)(r),
					m = Object(n.b)(c, r, l);
				m && o.c.has(m) && Object(a.k)(c, r, i.TimerType.InApp, o.c.end(m))
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return se
			})), r.d(t, "b", (function() {
				return oe
			})), r.d(t, "e", (function() {
				return ie
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/get.js"),
				a = r.n(n),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/constants/modals.ts"),
				u = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				v = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = (e, t, r) => Object(p.a)(Object(b.a)(e, [v.a]), {
				endpoint: Object(f.a)(Object(x.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.ib.GET,
				data: r
			});
			var I = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = r("./src/reddit/models/SubredditModeration/index.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				C = r("./src/reddit/selectors/activeModalId.ts"),
				E = r("./src/reddit/selectors/bannedUser.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/actions/subredditModeration/constants.ts"),
				N = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./node_modules/redux/es/redux.js");
			var k = (e = null, t) => {
				switch (t.type) {
					case O.o:
					case O.n:
						return null;
					case O.m:
						return t.payload;
					default:
						return e
				}
			};
			const U = {};
			var P = (e = U, t) => {
					switch (t.type) {
						case O.o: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(_.d)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case O.n:
						case O.m: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(_.d)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				S = Object(y.c)({
					error: k,
					pending: P
				});
			const B = {};
			var L = (e = B, t) => {
					switch (t.type) {
						case O.n: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, n = Object(_.d)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				A = r("./src/reddit/actions/inContextModeration.ts");
			var H = (e = null, t) => {
				switch (t.type) {
					case A.a:
						return t.payload;
					default:
						return e
				}
			};
			const M = {};
			var F = (e = M, t) => {
					switch (t.type) {
						case O.n: {
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
				T = r("./node_modules/icepick/icepick.js");
			const D = {};
			var K = (e = D, t) => {
				switch (t.type) {
					case O.l:
					case O.n: {
						const {
							subredditId: r,
							bannedUsers: s
						} = t.payload;
						return Object(T.merge)(e, {
							[r]: s
						})
					}
					case O.s: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(T.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var R = (e = null, t) => {
				switch (t.type) {
					case O.r:
					case O.q:
						return null;
					case O.p:
						return t.payload;
					default:
						return e
				}
			};
			var W = (e = !1, t) => {
					switch (t.type) {
						case O.r:
							return !0;
						case O.q:
						case O.p:
							return !1;
						default:
							return e
					}
				},
				Z = Object(y.c)({
					error: R,
					pending: W
				});
			var z = (e = null, t) => {
					switch (t.type) {
						case O.r:
						case O.p:
							return null;
						case O.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				J = Object(y.c)({
					api: Z,
					result: z
				});
			const G = {};
			var Y = (e = G, t) => {
					switch (t.type) {
						case O.n: {
							const {
								subredditId: r,
								bannedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case O.s: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case O.l: {
							const {
								subredditId: r,
								bannedUserIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				Q = Object(y.c)({
					api: S,
					fetchedTokens: L,
					inContext: H,
					loadMore: F,
					models: K,
					search: J,
					userOrder: Y
				});
			Object(N.a)({
				features: {
					banned: Q
				}
			});
			const q = Object(o.a)(O.o),
				X = Object(o.a)(O.n),
				V = Object(o.a)(O.m),
				$ = (e, t = {}) => async (r, s, {
					apiContext: n
				}) => {
					const a = s(),
						o = t.after || "",
						i = Object(_.d)(e, o),
						d = a.features.banned.fetchedTokens[i];
					if (a.features.banned.api.pending[i] || d) return;
					r(q({
						subredditId: e,
						fetchedToken: o
					}));
					const c = a.subreddits.models[e].name,
						l = await h(n(), c, t);
					l.ok ? r(X({
						...l.body,
						fetchedToken: o
					})) : r(V({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(O.r), te = Object(o.a)(O.q), re = Object(o.a)(O.p), se = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const a = s().subreddits.models[e].name,
						o = {
							username: Object(I.a)(t)
						};
					r(ee());
					const i = await h(n(), a, o);
					i.ok ? r(te(i.body)) : r(re(i.error))
				}, ne = Object(o.a)(O.l), ae = Object(o.a)(O.s), oe = (e, t, r) => async (n, o, {
					apiContext: d
				}) => {
					const c = o(),
						m = c.subreddits.models[e].url,
						f = c.subreddits.models[e].name;
					t.username = Object(I.a)(t.username), n(Object(i.h)(r));
					const x = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [v.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.ib.POST,
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
					}))(d(), m, t);
					if (x.ok) {
						n(Object(i.e)(r));
						const e = {
							username: t.username
						};
						n(Object(l.f)({
							kind: g.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await h(d(), f, e);
						a.ok && n(ne(a.body))
					} else {
						n(Object(i.f)(r, x.error));
						const e = a()(x, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const i = n().subreddits.models[e].url,
						d = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [v.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.ib.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(o(), i, t);
					if (d.ok) r(ae({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: g.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(d, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, s) => {
					const n = s();
					await Promise.all([(async () => {
						if (!Object(C.b)(m.a.BAN_USER)(n) && !Object(j.N)(n, {
								subredditId: e
							})) {
							const t = Object(j.Q)(n, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const s = Object(w.nb)(n, {
							userName: t
						});
						if (!s) return;
						const a = Object(E.h)(n, {
							subredditId: e
						});
						a && a[s.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(d.i)(m.a.BAN_USER))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: n,
				contextId: o,
				priority: i,
				Icon: d,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: v,
				children: f
			}) => {
				return a.a.createElement(c.s, {
					onClick: t => {
						if (b && b(t), e(), p === s.awardNotification) return v();
						n(Object(l.b)(o))
					},
					className: r,
					text: t,
					priority: i,
					Icon: d,
					redditStyle: m,
					isFullWidth: u
				}, f)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(r))
				}
			}));
			t.b = u(Object(d.c)(m))
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/ImageInput/index.tsx"),
				d = r("./src/reddit/controls/LoadingIcon/index.tsx"),
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
				isProfileCard: s,
				isLoading: u,
				imageUrl: b,
				onFileSelected: v
			}) => {
				const f = Object(a.e)(m.a);
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
				}) : t), n.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						v(e, t)
					},
					isPending: f ? u : void 0
				}), !u && n.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: s
					})
				}, n.a.createElement(c.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), u && n.a.createElement(d.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/selectors/gold/awardIcon.ts"),
				l = r("./src/reddit/selectors/meta.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/selectors/structuredStyles.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/tooltip.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/selectors/userFlair.ts"),
				h = r("./src/reddit/selectors/userPrefs.ts"),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./src/config.ts"),
				g = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = r("./src/lib/lessComponent.tsx"),
				E = r("./src/lib/prettyPrintNumber/index.ts"),
				j = r("./src/reddit/components/ChatButton/index.tsx"),
				w = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				N = r("./src/reddit/components/SubscribeButton/index.tsx"),
				y = r("./src/reddit/components/UserIcon/index.tsx"),
				k = r("./src/reddit/endpoints/profile/info.ts"),
				U = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				P = r("./src/reddit/icons/fonts/Info/index.tsx"),
				S = r("./src/reddit/icons/svgs/Admin/index.tsx");
			var B = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				L = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				A = r("./src/reddit/models/Gold/Award.ts"),
				H = r("./src/reddit/models/User/index.ts"),
				M = r("./src/reddit/components/HumanDate/index.tsx"),
				F = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				T = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				D = r("./src/reddit/actions/inContextModeration.ts"),
				K = r("./src/reddit/actions/modal.ts"),
				R = r("./src/reddit/actions/subredditModeration/ban.ts"),
				W = r("./src/reddit/constants/modals.ts"),
				Z = r("./src/reddit/components/Hovercards/helpers.ts"),
				z = r("./src/reddit/icons/fonts/index.tsx"),
				J = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				G = r("./src/reddit/selectors/bannedUser.ts"),
				Y = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Q = r.n(Y);
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), X = Object(o.c)({
				hasModMailPermissions: Object(m.b)(J.c.mail),
				isUserBanned: (e, t) => !!Object(G.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.nb)(e, {
					userName: t.username
				})
			});
			class V extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: s,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: d
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, s ? n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(U.e(t))
						}
					}, n.a.createElement(z.a, {
						name: "ban",
						isFilled: !0,
						className: Q.a.icon
					}), q._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							i(), o(U.a(t))
						}
					}, n.a.createElement(z.a, {
						name: "ban",
						className: Q.a.icon
					}), q._("Ban User", null, {
						hk: "3OhuLx"
					})), r && n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							d(), o(U.d(t))
						}
					}, n.a.createElement(z.a, {
						name: "mod_mute",
						className: Q.a.icon
					}), q._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(a.b)(X, (e, {
					username: t,
					subredditId: r,
					contextId: s
				}) => ({
					onUnbanUser: t => e(Object(R.e)(r, t)),
					requestUserBanInfo: () => e(Object(R.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(D.c)({
							username: t,
							subredditId: r,
							contextId: s
						})), e(Object(R.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(D.d)({
							username: t,
							subredditId: r,
							contextId: s
						})), e(Object(K.i)(W.a.MUTE_USER))
					}
				}))(V),
				ee = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var re = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(Z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(U.c(e.contextId))
					}
				}, n.a.createElement(z.a, {
					name: "tag",
					className: Q.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				se = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ne = r.n(se);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = C.a.wrapped(y.a, "UserIcon", ne.a),
				ie = C.a.wrapped(N.a, "SubscribeButton", ne.a),
				de = C.a.wrapped(j.b, "ChatButton", ne.a),
				ce = C.a.wrapped(B, "KarmaIcon", ne.a),
				le = C.a.wrapped(L.a, "PremiumIcon", ne.a),
				me = C.a.wrapped(g.a, "UserNameLink", ne.a),
				ue = C.a.div("UserNameMetaData", ne.a),
				pe = C.a.div("MetaDataItem", ne.a),
				be = C.a.div("Bullet", ne.a),
				ve = C.a.div("UserNameContainer", ne.a),
				fe = C.a.div("UserInfoContainer", ne.a),
				xe = C.a.div("PostKarma", ne.a),
				he = C.a.div("CommentKarma", ne.a),
				Ie = C.a.div("KarmaGrid", ne.a),
				_e = C.a.div("GenericKarma", ne.a),
				ge = C.a.a("InfoLink", ne.a),
				Ce = C.a.div("KarmaCount", ne.a),
				Ee = C.a.div("KarmaLabel", ne.a),
				je = C.a.div("GenericKarmaLabel", ne.a),
				we = C.a.div("BannerImage", ne.a),
				Oe = C.a.div("UserContainer", ne.a),
				Ne = C.a.div("BottomSpacer", ne.a),
				ye = C.a.div("Container", ne.a),
				ke = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(me, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && n.a.createElement(S.a, {
					className: ne.a.adminIcon,
					title: I.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && n.a.createElement(g.a, {
					to: "/premium"
				}, n.a.createElement(le, null))), n.a.createElement(ue, null, e.user.username && n.a.createElement(pe, null, e.user.username, n.a.createElement(be, null, "•")), n.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && n.a.createElement(M.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ue = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: r
						}
					} = e, s = {
						...k.a,
						...r
					};
					return t ? n.a.createElement(Ie, null, n.a.createElement(_e, null, n.a.createElement(Ce, null, Object(E.b)(s.fromPosts)), n.a.createElement(je, null, I.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [I.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(_e, null, n.a.createElement(Ce, null, Object(E.b)(s.fromComments)), n.a.createElement(je, null, I.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [I.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))), n.a.createElement(_e, null, n.a.createElement(Ce, null, Object(E.b)(s.fromAwardsReceived)), n.a.createElement(je, null, I.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [I.fbt._plural(s.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), n.a.createElement(ge, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(P.a, {
						className: ne.a.infoIcon
					})))), n.a.createElement(_e, null, n.a.createElement(Ce, null, Object(E.b)(s.fromAwardsGiven)), n.a.createElement(je, null, I.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [I.fbt._plural(s.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), n.a.createElement(ge, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(P.a, {
						className: ne.a.infoIcon
					}))))) : n.a.createElement(fe, null, n.a.createElement(ce, null), n.a.createElement(xe, null, n.a.createElement(Ce, null, Object(E.b)(s.fromPosts)), n.a.createElement(Ee, null, I.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [I.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(he, null, n.a.createElement(Ce, null, Object(E.b)(s.fromComments)), n.a.createElement(Ee, null, I.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [I.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Pe = e => {
					const {
						className: t,
						contextId: r,
						currentUser: s,
						hideNSFWPref: a,
						hoverId: o,
						isLoggedIn: i,
						onClickSnoovatar: d,
						origin: c,
						moderatorPermissions: l,
						prefersReducedAnimations: m,
						sendEvent: u,
						showAwardKarma: p,
						style: b,
						subredditId: v,
						topAwardIcon: f,
						userName: x,
						user: h,
						userFlair: g,
						userIsBanned: C,
						userProfileStyles: E,
						acceptChats: j,
						isCommentAuthorBlocked: O
					} = e;
					if (!h) return n.a.createElement(ye, {
						style: b
					});
					const N = !!s && Object(H.e)(s) === x,
						y = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						k = h.accountIcon || `${_.a.assetPath}/img/snoo_user_placeholder.png`,
						P = l && l.flair,
						S = l && l.access,
						B = g && g.templateIds && g.templateIds.length > 0,
						L = g && g.displaySettings && g.displaySettings.isEnabled,
						{
							awardedLastMonth: A
						} = h,
						M = !!h.snoovatarFullBodyAsset,
						D = h.isNSFW && a;
					let K;
					return K = M ? !D && E && E.bannerBackgroundImage || void 0 : D ? `${_.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(ye, {
						className: t,
						id: o,
						style: b
					}, !M && K && n.a.createElement(we, {
						style: {
							backgroundImage: `url('${K}')`
						}
					}), n.a.createElement(Oe, null, M ? n.a.createElement(T.a, {
						isHovercard: !0,
						bannerBackgroundImage: K,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: h.isEmployee,
						isGold: h.isGold,
						isNSFW: h.isNSFW,
						isOwnProfile: N,
						onClickSnoovatar: d,
						prefersReducedAnimations: !!m,
						snoovatarUrl: h.snoovatarFullBodyAsset,
						title: null,
						userCreated: h.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(ve, null, n.a.createElement(oe, {
						iconUrl: k,
						isNSFW: h.isNSFW,
						userName: x
					}), n.a.createElement(ke, {
						origin: c,
						user: h,
						userName: x
					})), n.a.createElement(Ue, {
						showAwardKarma: p,
						user: h
					}), A && n.a.createElement(F.a, {
						recentAwardings: A,
						topAwardIcon: f,
						username: x
					}), i && !N && !C && j && !O && n.a.createElement(de, {
						contextId: r,
						userId: h.id,
						text: I.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), h.hasUserProfile && !C && !O && !N && h.enableFollowers && n.a.createElement(ie, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(U.g)(e ? "unfollow" : "follow", r),
						isFullWidth: !0,
						small: !0
					})), S && r && !N && v && n.a.createElement($, {
						contextId: r,
						subredditId: v,
						sendEvent: u,
						username: x
					}), P && r && B && L && v && n.a.createElement(re, {
						contextId: r,
						subredditId: v,
						sendEvent: u,
						username: x
					}), n.a.createElement(w.i, {
						contextId: r,
						subredditId: v,
						user: h
					}), !(S || i) && n.a.createElement(Ne, null))
				},
				Se = Object(O.a)(Pe),
				Be = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return n.a.createElement(Se, ae({
						isOpen: t
					}, e))
				};
			Be.WrappedComponent = Pe;
			var Le = Be;
			const Ae = Object(o.c)({
					activeTooltipId: v.a,
					currentUser: f.k,
					isLoggedIn: f.K,
					hideNSFWPref: f.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(m.m)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: h.c,
					showAwardKarma: (e, t) => {
						return Object(v.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(c.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: f.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(x.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.m)(t) && Object(b.bb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(u.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(u.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				He = Object(a.b)(Ae, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = He(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, n.a.createElement(Le, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(a.a, {
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
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return g
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const m = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var u = Object(o.b)(m, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var r;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				f = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				x = r.n(f);
			class h extends n.a.Component {
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
			const I = a.a.wrapped(h, "HoverDiv", x.a),
				_ = u(I),
				g = v(I)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(a);
			const i = s.a.wrapped(n.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: s,
						tooltipIdPrefix: n,
						tooltipType: a
					} = e;
					let o = n;
					return r && (o = `${o}--${r}`), a && (o = `${o}--${a}`), t && (o = `${o}--${t}`), s && (o = `${o}--${s}`), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(i);
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
						topAward: s,
						totalCount: i
					} = t, l = s.description ? s.description : s.name;
					return n.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, n.a.createElement("div", {
						className: d.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), i > 1 && n.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(i-1)}`)), n.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", s.name), c._plural(i)], {
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(l);
			class u extends a.a.Component {
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
					} = this.state, u = e ? a.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === c ? a.a.createElement(i.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", c)], {
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
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = Object(n.c)({
					currentUser: o.k,
					hideNSFWPref: o.C
				}),
				d = Object(s.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.z)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(c);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: r,
				isOwnProfile: s,
				onClick: c
			}) {
				return n.a.createElement(o.s, {
					onClick: c,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && s,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? n.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : n.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : s ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? n.a.createElement("div", {
					className: l.a.chevronIcon
				}) : n.a.createElement(i.a, {
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: s,
				isDeletingBanner: d,
				onDeleteBanner: l
			}) {
				return n.a.createElement("div", {
					className: c.a.bannerWrapper
				}, n.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), s && e && (d ? n.a.createElement(a.a, {
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: s,
				username: d,
				...c
			}) {
				const l = t ? n.a.createElement(n.a.Fragment, null, "u/", d, " · ", n.a.createElement(o.d, {
					seconds: s,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return r ? n.a.createElement(a.a, i({}, c, {
					className: e,
					to: r
				}), l) : n.a.createElement("span", i({}, c, {
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
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = r.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: r,
				isGold: a,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, r && o.a.createElement(i.a, {
				className: m.a.snoovatarAdminIcon,
				title: n.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), a && o.a.createElement("a", {
				title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${s.a.redditUrl}/premium`
			}, o.a.createElement(c.a, {
				className: m.a.snoovatarPremiumIcon
			})), l && o.a.createElement(d.a, {
				className: m.a.snoovatarNsfwIcon,
				title: n.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				v = r.n(b);
			const f = 25;

			function x(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const I = x("particleDelay", v.a),
				_ = x("particleX", v.a),
				g = x("particleFloat", v.a),
				C = () => {
					const e = h(_),
						t = h(g),
						r = h(I);
					return Object(o.a)(v.a.particle, e, t, r)
				};
			class E extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < f; t++) e.push(this.createParticle(t));
					return n.a.createElement("div", {
						role: "presentation",
						className: v.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return n.a.createElement("div", {
						key: e,
						className: `${C()}`
					})
				}
			}
			var j = E,
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				O = r.n(w),
				N = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: s,
				isDeletingBanner: b,
				isEmployee: f,
				isGold: x,
				isNSFW: h,
				isOwnProfile: I,
				onClickSnoovatar: _,
				onDeleteBanner: g,
				prefersReducedAnimations: C,
				snoovatarUrl: E,
				title: w,
				userCreated: y,
				username: k,
				url: U,
				isHovercard: P
			}) => {
				const S = Object(a.e)(e => !I && !!E && Object(c.h)(e));
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(u.a, {
					bannerBackgroundImage: e,
					editMode: !!s,
					isNSFW: h,
					username: k,
					isDeletingBanner: !!b,
					onDeleteBanner: g
				}), n.a.createElement("div", {
					className: v.a.snoovatarContainer
				}, x && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: v.a.topGlow
				}), n.a.createElement("div", {
					className: v.a.bottomGlow
				}), !C && n.a.createElement(j, null)), n.a.createElement("img", {
					className: Object(o.a)(v.a.snoovatar, {
						[v.a.premiumGlow]: x
					}),
					src: E || void 0
				})), !s && I && n.a.createElement(i.a, {
					to: "/settings/profile",
					className: v.a.snoovatarSettingsLink
				}, n.a.createElement(d.a, {
					name: "settings",
					className: O.a.settingsIcon
				})), n.a.createElement(N.a, {
					isEmployee: f,
					isGold: x,
					isNSFW: h,
					title: w,
					username: k
				}), n.a.createElement(p.a, {
					className: v.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: k,
					userCreated: y,
					url: U
				}), (I || !r && !!E) && n.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: I,
					onClick: _
				}), S && n.a.createElement(m.a, {
					username: k,
					isHovercard: !!P,
					share: {
						username: k
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
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, r) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = r("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = r.n(d),
				l = r("./src/lib/classNames/index.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = (e, t, r) => null != r ? r : t ? e : o.b.Plain,
				p = ({
					border: e,
					priority: t,
					small: r,
					...s
				}) => a.a.createElement(o.s, m({}, s, {
					priority: u(o.b.Primary, e, t),
					className: Object(l.a)(s.className, c.a.BaseButton),
					size: r ? o.c.S : o.c.M
				})),
				b = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				v = ({
					buttonType: e,
					border: t,
					priority: r,
					small: s,
					...n
				}) => a.a.createElement(o.s, m({}, n, {
					priority: u(o.b.Secondary, t, r),
					className: Object(l.a)(n.className, c.a.BaseButton),
					size: s ? o.c.S : o.c.M,
					text: b(e)
				}));
			class f extends a.a.Component {
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
						id: r,
						priority: s,
						small: n = !1,
						isFullWidth: o = !1
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: n,
						isFullWidth: o
					};
					return this.props.userIsSubscriber ? a.a.createElement(v, m({}, d, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(p, m({}, d, {
						id: r
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const n = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => a[n({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/TrackingHelper/index.tsx"),
				n = r("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = r("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(s.c)(a.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/subscription/index.ts"),
				o = r("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				i = r("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(n.c)({
				isInJoinOptimizationsExperiment: e => Object(o.a)(e) || Object(o.b)(e) || Object(o.c)(e) || Object(o.d)(e),
				userIsSubscriber: i.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, r) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/index.tsx"),
				i = r("./src/reddit/controls/Checkbox/index.m.less"),
				d = r.n(i);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(a.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			}));
			var s = r("./node_modules/lodash/throttle.js"),
				n = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = r("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = r("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = r("./src/reddit/controls/Dropdown/index.m.less"),
				p = r.n(u),
				b = r("./src/reddit/controls/Dropdown/row.m.less"),
				v = r.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
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
					}, r = Object(i.a)(v.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(d.a, f({}, t, {
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
						className: r
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(v.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(m.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: r
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(v.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(l.a, {
						className: v.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const r = Object(i.a)(v.a.row, e, {
					[v.a.mIsInteractive]: !t.noHover,
					[v.a.mIsSelected]: t.isSelected,
					[v.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(x, f({
					className: r
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, r) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			class a extends n.a.Component {
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
					} = this, r = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, a = r || s;
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
					}), (!a || e.multiple || void 0 !== e.isPending && !e.isPending) && n.a.createElement("input", {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = r.n(a);
			t.a = s.a.wrapped(n.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = r.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages~Settings~SubredditWiki.f4ed058b553413e4fd0f.js.map