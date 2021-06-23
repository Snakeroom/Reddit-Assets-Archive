// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.3dedee5aa2d0c352e420.js
// Retrieved at 6/23/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./src/reddit/components/ChatButton/index.tsx": function(t, o, e) {
			"use strict";
			e.d(o, "a", (function() {
				return n
			}));
			var n, i = e("./node_modules/react/index.js"),
				c = e.n(i),
				d = e("./node_modules/react-redux/es/index.js"),
				r = e("./src/reddit/actions/chat/toggle.ts"),
				s = e("./src/reddit/components/TrackingHelper/index.tsx"),
				a = e("./src/reddit/controls/Button/index.tsx"),
				l = e("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(t) {
				t.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const E = ({
				onStartChat: t,
				text: o,
				className: e,
				sendEvent: i,
				contextId: d,
				priority: r,
				Icon: s,
				redditStyle: E,
				isFullWidth: u,
				eventSource: N,
				onClick: T,
				onAddUserToQuickReplyList: x
			}) => {
				return c.a.createElement(a.q, {
					onClick: o => {
						if (T && T(o), t(), N === n.awardNotification) return x();
						i(Object(l.b)(d))
					},
					className: e,
					text: o,
					priority: r,
					Icon: s,
					redditStyle: E,
					isFullWidth: u
				})
			};
			E.displayName = "ChatButton";
			const u = Object(d.b)(null, (t, {
				contextId: o,
				userId: e
			}) => ({
				onStartChat: () => {
					t(Object(r.b)(e, o))
				},
				onAddUserToQuickReplyList: () => {
					t(Object(r.a)(e))
				}
			}));
			o.b = u(Object(s.c)(E))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(t, o, e) {
			"use strict";
			e.r(o);
			var n = e("./node_modules/fbt/lib/FbtPublic.js"),
				i = e("./node_modules/react/index.js"),
				c = e.n(i),
				d = e("./src/lib/lessComponent.tsx"),
				r = e("./src/reddit/components/ChatButton/index.tsx"),
				s = e("./src/reddit/controls/Button/index.tsx"),
				a = t => c.a.createElement("svg", {
					className: t.className,
					viewBox: "0 0 16 16"
				}, c.a.createElement("path", {
					d: "M10.625 8.656h-1.97v1.97c0 .36-.293.655-.655.655-.362 0-.656-.293-.656-.655v-1.97h-1.97c-.36 0-.655-.293-.655-.655 0-.362.293-.656.655-.656h1.97v-1.97c0-.36.293-.655.655-.655.362 0 .656.293.656.655v1.97h1.97c.36 0 .655.293.655.655 0 .362-.293.656-.655.656M8 1C4.14 1 1 4.14 1 8c0 1.222.317 2.372.87 3.373l-.824 2.476c-.105.313-.024.66.21.894.167.167.39.256.62.256.09 0 .185-.015.275-.045l2.478-.825c1 .553 2.15.87 3.372.87 3.86 0 7-3.14 7-7s-3.14-7-7-7"
				})),
				l = e("./src/reddit/models/NotificationInbox/index.ts"),
				E = e("./src/reddit/components/NotificationUnit/index.m.less"),
				u = e.n(E);
			const N = d.a.wrapped(r.b, "NotificationButton", u.a);
			o.default = t => (t => {
				const {
					messageType: o,
					notificationUserId: e,
					isFullWidth: i,
					onClick: d
				} = t;
				switch (o) {
					case l.a.AwardReceived:
						return e && c.a.createElement(N, {
							userId: e,
							contextId: e,
							Icon: a,
							text: n.fbt._("Say thanks", null, {
								hk: "2FzJoo"
							}),
							priority: s.b.Secondary,
							redditStyle: !0,
							isFullWidth: i,
							onClick: t => d && d(t),
							eventSource: r.a.awardNotification
						}) || null;
					default:
						return null
				}
			})(t)
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(t, o, e) {
			"use strict";
			var n, i, c, d;
			e.d(o, "a", (function() {
					return n
				})), e.d(o, "b", (function() {
					return i
				})), e.d(o, "c", (function() {
					return c
				})),
				function(t) {
					t.AwardReceived = "AWARD_RECEIVED", t.CakeDay = "CAKE_DAY", t.ChatMessage = "CHAT_MESSAGE", t.CommentFollow = "COMMENT_FOLLOW", t.CommentReply = "COMMENT_REPLY", t.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", t.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", t.PostFollow = "POST_FOLLOW", t.PostReply = "POST_REPLY", t.PrivateMessage = "PRIVATE_MESSAGE", t.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", t.ThreadReplies = "THREAD_REPLIES", t.TopLevelComment = "TOP_LEVEL_COMMENT", t.UpvoteComment = "UPVOTE_COMMENT", t.UpvotePost = "UPVOTE_POST", t.UsernameMention = "USERNAME_MENTION", t.UserNewFollower = "USER_NEW_FOLLOWER"
				}(n || (n = {})),
				function(t) {
					t.Award = "AWARD", t.Bell = "BELL", t.Chat = "CHAT", t.Comment = "COMMENT", t.Heart = "HEART", t.Live = "LIVE", t.NotifyAll = "NOTIFY_ALL", t.Redditor = "REDDITOR", t.Reply = "REPLY", t.SortLive = "SORT_LIVE", t.SortRising = "SORT_RISING", t.SortTop = "SORT_TOP", t.Trophy = "TROPHY", t.Upvote = "UPVOTE"
				}(i || (i = {})),
				function(t) {
					t.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", t.ContentTakedown = " CONTENT_TAKEDOWN", t.Author = "AUTHOR", t.Moderator = "MODERATOR", t.CommunityOps = "COMMUNITY_OPS", t.AntiEvilOps = "ANTI_EVIL_OPS", t.Reddit = "REDDIT", t.Deleted = "DELETED", t.AutomodFiltered = "AUTOMOD_FILTERED"
				}(c || (c = {})),
				function(t) {
					t.InboxNotification = "InboxNotification", t.InboxNotificationContext = "InboxNotificationContext", t.NotificationIcon = "NotificationIcon", t.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", t.BasicInboxNotificationContext = "BasicInboxNotificationContext", t.CommentInboxNotificationContext = "CommentInboxNotificationContext", t.PostInboxNotificationContext = "PostInboxNotificationContext", t.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", t.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(d || (d = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.3dedee5aa2d0c352e420.js.map