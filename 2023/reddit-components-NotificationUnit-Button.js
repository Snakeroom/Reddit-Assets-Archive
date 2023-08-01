// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.19b83532e8a36f2d0214.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./node_modules/lodash/map.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayMap.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseMap.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (r(e) ? o : i)(e, s(t, 3))
			}
		},
		"./src/reddit/actions/chat/toggle.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/actions/matrixChat/index.ts");
			const s = e => async t => {
				t(Object(o.f)(e))
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: n,
					className: o,
					sendEvent: s,
					contextId: r,
					priority: a,
					Icon: c,
					redditStyle: u,
					isFullWidth: m,
					eventSource: h,
					onClick: v,
					children: _,
					style: p
				} = e;
				return i.a.createElement(d.t, {
					onClick: e => {
						v && v(e), t(), s(Object(l.b)(r))
					},
					className: o,
					text: n,
					priority: a,
					Icon: c,
					redditStyle: u,
					isFullWidth: m,
					style: p
				}, _)
			};
			u.displayName = "ChatButton";
			const m = Object(r.b)(null, (e, t) => {
				let {
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(a.a)(n))
					}
				}
			});
			t.b = m(Object(c.c)(u))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				u = n("./src/reddit/constants/things.ts");
			const m = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var h = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/graphql/helpers.ts"),
				_ = n("./src/reddit/helpers/trackers/inbox.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/NotificationInbox/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/components/NotificationUnit/index.m.less"),
				y = n.n(x);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = {
				kind: b.b.Error,
				text: g._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			t.default = e => {
				var t, n, o, b, x, C, I, N, O, j;
				const w = Object(i.d)(),
					{
						context: S,
						deeplinkUrl: F,
						isFullWidth: E,
						isUnread: D,
						isNightMode: P,
						notificationId: U,
						onEvent: B
					} = e,
					M = null == S ? void 0 : S.messageType,
					A = M === f.a.CommentReply,
					L = M === f.a.SubredditRecommendation,
					R = M === f.a.LifecyclePostSuggestions,
					W = null === (t = null == S ? void 0 : S.post) || void 0 === t ? void 0 : t.permalink;
				let T = null === (n = null == S ? void 0 : S.comment) || void 0 === n ? void 0 : n.id,
					H = (null === (o = null == S ? void 0 : S.post) || void 0 === o ? void 0 : o.id) || (null === (x = null === (b = null == S ? void 0 : S.comment) || void 0 === b ? void 0 : b.postInfo) || void 0 === x ? void 0 : x.id);
				const K = null === (C = null == S ? void 0 : S.subreddit) || void 0 === C ? void 0 : C.id,
					$ = null === (N = null === (I = null == S ? void 0 : S.awarding) || void 0 === I ? void 0 : I.award) || void 0 === N ? void 0 : N.id,
					q = null === (j = null === (O = null == S ? void 0 : S.awarding) || void 0 === O ? void 0 : O.awarder) || void 0 === j ? void 0 : j.id;
				if (M === f.a.CommentFollow || M === f.a.PostFollow) {
					const e = (e => {
						const t = {},
							{
								pathname: n
							} = new URL(e);
						if (!n) return t;
						const o = n.match(m);
						if (!o) return t;
						const [s, i, r, a] = o.slice(1);
						return i && "r" === s && (t.subredditName = i), r && (t.postId = `${u.b}${r}`), a && (t.commentId = `${u.a}${a}`), t
					})(F);
					H = e.postId, T = e.commentId
				} else M !== f.a.PostReply && M !== f.a.LifecyclePostSuggestions || (T = U);
				const V = e => {
					if (H && T) {
						const e = Object(a.a)(H, T, Object(v.c)(F)),
							t = {
								parentCommentId: T,
								commentsPageKey: e
							};
						w(Object(c.h)(t)), B({
							position: _.d.SECOND
						})
					} else e.preventDefault(), w(Object(d.f)(k))
				};
				return (() => {
					switch (M) {
						case f.a.HFNSubredditInterestingPost:
						case f.a.LifecyclePostSuggestions:
						case f.a.SubredditRecommendation: {
							const e = R;
							if (!L && !e) return null;
							const t = e => {
									W ? B({
										position: _.d.SECOND,
										postId: H,
										subredditId: K
									}) : (e.preventDefault(), w(Object(d.f)(k)))
								},
								n = g._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return s.a.createElement(h.t, {
								onClick: t,
								isFullWidth: E,
								priority: h.c.Tertiary,
								redditStyle: !0,
								className: Object(r.a)(y.a.notificationButton, {
									[y.a.isUnread]: D,
									[y.a.isNightMode]: P,
									[y.a.isFullWidth]: E
								})
							}, s.a.createElement(p.a, {
								name: "text_post",
								className: y.a.postIcon
							}), g._("{check out button}", [g._param("check out button", n)], {
								hk: "4DDMme"
							}))
						}
						case f.a.PostReply:
						case f.a.CommentReply:
						case f.a.PostFollow:
						case f.a.CommentFollow: {
							const e = A;
							return A || e ? s.a.createElement(h.t, {
								onClick: V,
								kind: h.b.InternalLink,
								to: F,
								isFullWidth: E,
								priority: h.c.Tertiary,
								redditStyle: !0,
								className: Object(r.a)(y.a.notificationButton, {
									[y.a.isUnread]: D,
									[y.a.isNightMode]: P,
									[y.a.isFullWidth]: E
								})
							}, s.a.createElement(p.a, {
								name: "reply",
								className: y.a.replyIcon
							}), g._("Reply Back", null, {
								hk: "3JWTvx"
							})) : null
						}
						case f.a.AwardReceived: {
							if (!q) return null;
							const e = e => {
								e.preventDefault(), q ? B({
									position: _.d.SECOND,
									awardId: $
								}) : w(Object(d.f)(k))
							};
							return s.a.createElement(l.b, {
								userId: q,
								contextId: q,
								onClick: e,
								isFullWidth: E,
								priority: h.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(r.a)(y.a.notificationButton, {
									[y.a.isUnread]: D,
									[y.a.isNightMode]: P,
									[y.a.isFullWidth]: E
								}),
								pageType: "notification"
							}, s.a.createElement(p.a, {
								name: "chat_new",
								className: y.a.replyIcon
							}), g._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case f.a.UpvotePost:
						case f.a.UpvoteComment:
						case f.a.UsernameMention:
						case f.a.PrivateMessage:
						case f.a.UserNewFollower:
						case f.a.ChatMessage:
						case f.a.CakeDay:
						case f.a.ChatRequest:
						case f.a.ChatAcceptInvite:
						case f.a.HFNSubredditInterestingPost:
						case f.a.OneOff:
						case f.a.ModeratedSrViralCommentPost:
						default:
							return null
					}
				})()
			}
		},
		"./src/reddit/helpers/trackers/authorHovercard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "g", (function() {
				return a
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
				return h
			}));
			var o = n("./src/reddit/helpers/isComment.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => ({
					comment: t && Object(o.a)(t) ? s.j({
						state: e,
						commentId: t
					}) : null,
					post: t ? s.M(e, t) : null,
					profile: s.V(e, t),
					screen: s.eb(e),
					snoovatar: t ? s.kb(e, t) : null,
					user: s.ub(e)
				}),
				r = (e, t) => n => ({
					source: "user_hovercard",
					action: "click",
					noun: e,
					...i(n, t)
				}),
				a = e => t => ({
					source: "user_hovercard",
					action: "view",
					noun: "hover_user_hovercard",
					...i(t, e)
				}),
				c = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "mute_dialog_in_context",
					...i(t, e)
				}),
				d = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "unmute_dialog_in_context",
					...i(t, e)
				}),
				l = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "ban_dialog_in_context",
					...i(t, e)
				}),
				u = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "unban_user_in_context",
					...i(t, e)
				}),
				m = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "change_user_flair_in_context",
					userSubreddit: s.wb(t),
					...i(t, e)
				}),
				h = e => t => ({
					source: s.V(t) ? "user_profile" : "user_hovercard",
					action: "click",
					noun: "create_chat",
					...e && i(t, e)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.19b83532e8a36f2d0214.js.map