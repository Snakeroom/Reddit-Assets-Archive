// https://www.redditstatic.com/desktop2x/Chat~Governance~Reddit.7168cb34769cb7ce2825.js
// Retrieved at 6/9/2020, 3:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Chat~Governance~Reddit"], {
		"./assets/fonts/IBMPlexSans/font.less": function(e, t, i) {},
		"./assets/fonts/NotoSans/font.less": function(e, t, i) {},
		"./src/chat/actions/container.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "SIZE_CHANGED", (function() {
				return s
			})), i.d(t, "sizeChanged", (function() {
				return o
			})), i.d(t, "popoutOpened", (function() {
				return d
			}));
			var n = i("./src/chat/constants/container.ts"),
				r = i("./src/lib/makeActionCreator/index.ts");
			const s = "CONTAINER__SIZE_CHANGED",
				o = Object(r.a)(s),
				d = () => async (e, t, i) => {
					let {
						apiContext: r
					} = i;
					const {
						currentPage: s
					} = t().platform;
					if (!s) throw new Error("Could not open pop-out: current page not defined");
					window.open(s.url, "_blank", "width=1024, height=768"), e(o(n.a.MINIMIZED))
				}
		},
		"./src/chat/actions/promo/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			}));
			const n = "PROMO__DISPLAY_PROMO",
				r = "PROMO__HIDE_PROMO"
		},
		"./src/chat/constants/channelRemovalReason.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.DEFAULT = "default", e.BANNED = "banned", e.KICKED = "kicked"
				}(n || (n = {}))
		},
		"./src/chat/constants/channels.ts": function(e, t, i) {
			"use strict";
			var n, r;
			i.d(t, "b", (function() {
					return n
				})), i.d(t, "a", (function() {
					return r
				})), i.d(t, "g", (function() {
					return s
				})), i.d(t, "f", (function() {
					return o
				})), i.d(t, "d", (function() {
					return d
				})), i.d(t, "e", (function() {
					return l
				})), i.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.JOINED = "JOINED", e.INVITED = "INVITED", e.PARTIAL = "PARTIAL", e.UNSORTED = "NONE"
				}(n || (n = {})),
				function(e) {
					e.BLOCK = "block", e.CREATE = "create", e.DECLINE_REQUEST = "decline", e.INVITE_MEMBERS = "invite", e.INVITE_MEMBERS_CONFIRMATION = "invite_confirmation", e.DENY = "deny", e.LEAVE = "leave", e.LOCK_CHANNEL_CONFIRMATION = "lock_confirmation", e.VIEW_JOIN = "join", e.VIEW_MEMBERS = "members", e.VIEW_NSFW_CONFIRMATION = "nsfw", e.VIEW_PRIVATE = "private", e.VIEW_INVITE = "invited"
				}(r || (r = {}));
			const s = [r.DENY, r.VIEW_JOIN, r.VIEW_PRIVATE];
			var o;
			! function(e) {
				e.NonSuper = "nonsuper", e.Super = "super"
			}(o || (o = {}));
			const d = 30,
				l = 99;
			var a;
			! function(e) {
				e.All = "all", e.UnreadMessages = "unread_message_count_only", e.Off = "off"
			}(a || (a = {}))
		},
		"./src/chat/constants/container.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			}));
			const n = {
					EMBED: "embed",
					FULL: "full",
					HIDDEN: "hidden",
					MINIMIZED: "minimized"
				},
				r = {
					embed: {
						width: 560,
						height: 380
					},
					full: {
						width: void 0,
						height: void 0
					},
					hidden: {
						width: 0,
						height: 0
					},
					minimized: {
						width: 126,
						height: 40
					}
				}
		},
		"./src/chat/constants/messages.ts": function(e, t, i) {
			"use strict";
			var n, r, s;
			i.d(t, "c", (function() {
					return n
				})), i.d(t, "b", (function() {
					return r
				})), i.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.ADMIN = "admin", e.USER = "user", e.PENDING = "pending"
				}(n || (n = {})),
				function(e) {
					e.TEXT = "text", e.POST = "post", e.EMBED = "embedCollection", e.SNOOMOJI = "snoomoji"
				}(r || (r = {})),
				function(e) {
					e.DELETE = "delete", e.REPORT = "report"
				}(s || (s = {}))
		},
		"./src/chat/constants/sendbird.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			}));
			const n = "sendbird_group_channel_";
			var r;
			! function(e) {
				e.Open = "OPEN", e.Closed = "CLOSED", e.Pending = "PENDING"
			}(r || (r = {}))
		},
		"./src/chat/customMiddleware/containerSize.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return g
			})), i.d(t, "c", (function() {
				return b
			}));
			var n = i("./node_modules/lodash/once.js"),
				r = i.n(n),
				s = i("./src/lib/cache/index.ts"),
				o = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/messageIframeParent/index.ts"),
				l = i("./src/chat/actions/container.ts"),
				a = i("./src/chat/constants/container.ts"),
				u = i("./src/chat/customMiddleware/noop.ts"),
				c = i("./src/chat/selectors/app.ts");
			const _ = a.a.HIDDEN,
				m = a.a.HIDDEN,
				p = e => e && a.b[e] && e !== a.a.FULL && e || _ || m;
			let h;
			const f = e => Object(d.a)({
					type: "resize.chat",
					data: {
						size: e,
						dimensions: a.b[e]
					}
				}),
				g = r()(e => {
					const t = e.getState(),
						i = Object(c.d)(t),
						n = b(t.user.account && t.user.account.id);
					let r;
					r = t.meta.isRedesign && n ? a.a.MINIMIZED : t.meta.isRedesign ? m : i ? _ : a.a.FULL, e.dispatch(Object(l.sizeChanged)(r)), f(r)
				}),
				b = e => {
					h = Object(s.b)(o.o.CHAT, "container_size", e || "unknown");
					const t = Object(s.a)(h);
					return !(!t || t === a.a.HIDDEN)
				};
			t.a = e => {
				if ("undefined" == typeof window) return u.a;
				const t = e.getState(),
					{
						user: {
							account: i
						}
					} = t,
					n = i && i.id || "unknown";
				return h = Object(s.b)(o.o.CHAT, "container_size", n), window.addEventListener("storage", e => {
					switch (e.key) {
						case h:
							0
					}
				}), e => t => {
					const i = e(t);
					switch (t.type) {
						case l.SIZE_CHANGED: {
							const e = p(t.payload);
							(e => {
								Object(s.c)(h, e, o.Xb)
							})(e), f(e);
							break
						}
					}
					return i
				}
			}
		},
		"./src/chat/customMiddleware/noop.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			const n = e => t => e(t)
		},
		"./src/chat/endpoints/sendbird/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return c
			})), i.d(t, "h", (function() {
				return _
			})), i.d(t, "g", (function() {
				return m
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "m", (function() {
				return h
			})), i.d(t, "k", (function() {
				return f
			})), i.d(t, "a", (function() {
				return g
			})), i.d(t, "i", (function() {
				return b
			})), i.d(t, "f", (function() {
				return w
			})), i.d(t, "l", (function() {
				return y
			})), i.d(t, "b", (function() {
				return v
			})), i.d(t, "j", (function() {
				return T
			})), i.d(t, "d", (function() {
				return S
			})), i.d(t, "n", (function() {
				return E
			}));
			var n = i("./src/config.ts"),
				r = i("./src/lib/constants/index.ts"),
				s = i("./src/lib/makeApiRequest/index.ts"),
				o = i("./src/lib/omitHeaders/index.ts"),
				d = i("./src/reddit/constants/headers.ts"),
				l = i("./src/chat/models/Channel/utils/index.ts");
			const a = "".concat("api/v1", "/sendbird"),
				u = {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				c = async e => Object(s.a)(Object(o.a)(e, [d.a]), {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/config"),
					method: r.bb.GET
				}), _ = async (e, t) => Object(s.a)(e, {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/me"),
					method: r.bb.GET
				}), m = async (e, t, i) => Object(s.a)(e, {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/contacts?limit=").concat(i),
					method: r.bb.GET
				}), p = async (e, t, i, o) => Object(s.a)(e, {
					data: {
						users: i,
						name: o
					},
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/group_channels"),
					method: r.bb.POST,
					headers: u
				}), h = async (e, t) => {
					const i = {};
					return t && (i.channel_url = t), Object(s.a)(e, {
						endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/opt_in"),
						data: i,
						method: r.bb.POST,
						headers: u
					})
				}, f = async (e, t, i, o) => Object(s.a)(e, {
					data: {
						users: i
					},
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/group_channels/").concat(o, "/invite"),
					method: r.bb.POST,
					withCredentials: !0,
					headers: u
				}), g = async (e, t, i) => Object(s.a)(e, {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/group_channels/").concat(i, "/accept"),
					method: r.bb.PUT,
					withCredentials: !0
				}), b = async (e, t) => Object(s.a)(Object(o.a)(e, [d.a]), {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/unread_message_count"),
					method: r.bb.GET,
					headers: u
				}), w = async (e, t) => Object(s.a)(e, {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/channels/recommended"),
					method: r.bb.GET,
					headers: u
				}), y = async (e, t, i, o) => Object(s.a)(e, {
					data: {
						channel_url: i,
						subreddit: o
					},
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(a, "/join"),
					method: r.bb.POST,
					headers: u
				}), v = (e, t, i) => Object(s.a)(e, {
					data: i,
					method: r.bb.POST,
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/ban"),
					headers: u
				}), T = (e, t, i) => Object(s.a)(e, {
					data: {
						channel_url: Object(l.a)(t),
						modqueue_message_id: i
					},
					method: r.bb.PUT,
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/message/report"),
					headers: u
				}), S = (e, t, i) => Object(s.a)(e, {
					data: {
						channel_url: Object(l.a)(t),
						modqueue_message_id: i
					},
					method: r.bb.DELETE,
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/message/report"),
					headers: u
				}), E = (e, t, i, o, d) => Object(s.a)(e, {
					data: {
						channel_id: Object(l.a)(t),
						invitee_id: i,
						inviter_id: o,
						reason: d
					},
					method: r.bb.POST,
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/report/invite"),
					headers: u
				})
		},
		"./src/chat/helpers/errors.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return InvalidValueError
			})), i.d(t, "b", (function() {
				return n
			}));
			class InvalidValueError extends Error {
				constructor(e, t) {
					super("Invalid Value: '".concat(e, " is ").concat(t, "'"))
				}
			}
			const n = e => {
				0
			}
		},
		"./src/chat/helpers/unreadCount.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			})), i.d(t, "a", (function() {
				return o
			}));
			var n = i("./src/chat/models/Promo/index.ts");
			const r = {
					basicChannelCount: {
						count: 0,
						unread: !1
					},
					subredditChannelCount: {
						count: 0,
						unread: !1
					}
				},
				s = e => {
					const t = {};
					for (const i in e) t[i] = {
						count: e[i],
						unread: !!e[i]
					};
					return Object.assign({}, r, t)
				},
				o = (e, t) => {
					const {
						basicChannelCount: i,
						subredditChannelCount: r
					} = s(e), o = Object(n.d)(t), d = Object(n.e)(o), l = i.count;
					return {
						count: l,
						unread: d || !!l || !!r.count
					}
				}
		},
		"./src/chat/helpers/urls/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "minimizeUrl", (function() {
				return o
			})), i.d(t, "rootUrl", (function() {
				return d
			})), i.d(t, "basicChannelRootUrl", (function() {
				return l
			})), i.d(t, "channelUrl", (function() {
				return u
			})), i.d(t, "channelAction", (function() {
				return c
			})), i.d(t, "channelUserIdUrl", (function() {
				return _
			})), i.d(t, "getShortChannelUrl", (function() {
				return m
			})), i.d(t, "inviteMessageActionUrl", (function() {
				return p
			})), i.d(t, "messageActionUrl", (function() {
				return h
			})), i.d(t, "userActionUrl", (function() {
				return f
			})), i.d(t, "getSubredditFromUrl", (function() {
				return g
			})), i.d(t, "viewProfileUrl", (function() {
				return b
			})), i.d(t, "banUserUrl", (function() {
				return w
			})), i.d(t, "getChannelUrl", (function() {
				return y
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var n = i("./src/config.ts"),
				r = i("./node_modules/query-string/index.js"),
				s = i("./src/chat/constants/channels.ts");
			const o = "/chat/minimize/",
				d = "/chat/",
				l = "channel",
				a = e => e ? (e => "r/".concat(String(e).toLowerCase(), "/").concat(l))(e) : l,
				u = (e, t) => "/chat/".concat(a(t), "/").concat(e),
				c = (e, t, i) => "/chat/".concat(a(i), "/").concat(e, "/").concat(t),
				_ = e => "/chat/user_id/".concat(e),
				m = e => "".concat(n.a.shortUrl, "/").concat(l, "/").concat(e),
				p = (e, t, i, n) => ({
					pathname: "".concat(c(e, i, n), "/invite/").concat(t),
					state: {
						isOverlay: !0
					}
				}),
				h = (e, t, i, n) => ({
					pathname: "".concat(c(e, i, n), "/message/").concat(t),
					state: {
						isOverlay: !0
					}
				}),
				f = (e, t, i, n, s) => "".concat(c(e, i, n), "/user/").concat(t).concat(s ? "?" + Object(r.stringify)(s) : ""),
				g = e => new RegExp("reddit.com").test(e) ? e.replace(/^.+reddit.com(\/r\/.+?\/).*$/g, "$1") : "",
				b = e => "".concat(n.a.redditUrl, "/user/").concat(e),
				w = e => "".concat(n.a.redditUrl, "/r/").concat(e, "/about/banned"),
				y = (e, t) => {
					const {
						channelId: i,
						channelState: n
					} = e, {
						INVITED: r,
						PARTIAL: o,
						JOINED: l
					} = s.b, {
						VIEW_JOIN: a,
						VIEW_INVITE: _
					} = s.a;
					switch (n) {
						case r:
							return c(i, _, t);
						case o:
							return c(i, a, t);
						case l:
							return u(i, t);
						default:
							return d
					}
				}
		},
		"./src/chat/models/Channel/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "f", (function() {
				return c
			})), i.d(t, "e", (function() {
				return _
			})), i.d(t, "d", (function() {
				return m
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "b", (function() {
				return h
			}));
			var n, r = i("./src/chat/constants/channels.ts"),
				s = i("./src/chat/models/Channel/subreddit.ts"),
				o = i("./src/chat/models/Channel/utils/index.ts"),
				d = i("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				l = i("./src/chat/models/Message/index.ts"),
				a = i("./src/chat/models/User/inviter.ts"),
				u = i("./src/chat/models/User/member.ts");
			! function(e) {
				e[e.Direct = 0] = "Direct", e[e.Group = 1] = "Group", e[e.Subreddit = 2] = "Subreddit"
			}(n || (n = {}));
			r.b.UNSORTED, n.Direct;

			function c(e) {
				let t;
				const i = Object(o.d)(e);
				return i === n.Subreddit && (t = Object(s.b)(e)), i !== n.Direct && i !== n.Group && t || (t = function(e, t) {
					const {
						coverUrl: i,
						createdAt: r,
						customType: s,
						data: c,
						memberCount: _,
						name: f,
						isDistinct: g,
						unreadMessageCount: b,
						unreadMentionCount: w,
						myCountPreference: y,
						inviter: v,
						lastMessage: T,
						members: S,
						url: E,
						myMemberState: F,
						isFrozen: I,
						myMutedState: O,
						myRole: j
					} = e;
					return {
						channelId: Object(d.a)(E),
						channelSendbirdUrl: E,
						channelState: Object(o.b)(t, F),
						coverUrl: i,
						createdAt: Number(r),
						customType: s,
						data: c,
						maxLengthMessage: -1,
						memberCount: _,
						name: f,
						isFrozen: I,
						isModerator: p(j),
						isUserMuted: h(O),
						isMuted: m(y),
						inviter: Object(a.a)(v),
						type: g ? n.Direct : n.Group,
						lastMessage: T ? Object(l.b)(T) : void 0,
						unreadMessageCount: b,
						unreadMentionCount: w,
						members: Object(u.a)(S),
						fetchingFirstMessage: !1,
						fetchingMessages: !1,
						fetchingMessagesError: !1,
						hasMoreMessages: !1,
						isMessageListLoaded: !1
					}
				}(e)), t
			}

			function _(e) {
				const t = {};
				for (let i = 0, n = e.length; i < n; i++) {
					const n = c(e[i]);
					n && (t[n.channelId] = n)
				}
				return t
			}
			const m = e => e === r.c.Off,
				p = e => "operator" === e,
				h = e => "muted" === e
		},
		"./src/chat/models/Channel/subreddit.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return c
			})), i.d(t, "b", (function() {
				return _
			})), i.d(t, "c", (function() {
				return m
			})), i.d(t, "a", (function() {
				return h
			}));
			var n = i("./src/chat/constants/channels.ts"),
				r = i("./src/chat/models/Channel/index.ts"),
				s = i("./src/chat/models/Channel/utils/index.ts"),
				o = i("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				d = i("./src/chat/models/Message/index.ts"),
				l = i("./src/chat/models/Subreddit/index.ts"),
				a = i("./src/chat/models/User/inviter.ts"),
				u = i("./src/chat/models/User/member.ts");
			const c = e => {
				try {
					if (!e) return;
					const t = JSON.parse(e);
					if (t) {
						const {
							room_description: e,
							subreddit: i
						} = t, n = i && i.id;
						if (i && n) return {
							subredditId: n,
							subreddit: Object(l.b)(i),
							description: e || ""
						}
					}
				} catch (t) {
					return void 0
				}
			};

			function _(e, t) {
				const {
					coverUrl: i,
					createdAt: n,
					customType: l,
					data: _,
					memberCount: m,
					name: p,
					unreadMessageCount: h,
					unreadMentionCount: f,
					inviter: g,
					isPublic: b,
					lastMessage: w,
					members: y,
					url: v,
					myMemberState: T,
					isFrozen: S,
					myCountPreference: E,
					myMutedState: F,
					myRole: I
				} = e, O = c(_);
				if (!O) return;
				const {
					description: j,
					subreddit: B,
					subredditId: x
				} = O;
				return {
					channelId: Object(o.a)(v),
					channelSendbirdUrl: v,
					channelState: Object(s.b)(t, T),
					coverUrl: i,
					createdAt: Number(n),
					customType: l,
					data: _,
					maxLengthMessage: -1,
					memberCount: m,
					name: p,
					isPublic: b,
					isFrozen: S,
					isModerator: Object(r.c)(I),
					isMuted: Object(r.d)(E),
					isUserMuted: Object(r.b)(F),
					inviter: Object(a.a)(g),
					type: r.a.Subreddit,
					lastMessage: w ? Object(d.b)(w) : void 0,
					unreadMessageCount: h,
					unreadMentionCount: f,
					members: Object(u.a)(y),
					fetchingFirstMessage: !1,
					fetchingMessages: !1,
					fetchingMessagesError: !1,
					hasMoreMessages: !1,
					isMessageListLoaded: !1,
					customData: {
						description: j.trim(),
						subreddit: B,
						subredditId: x
					}
				}
			}

			function m(e, t) {
				const i = {};
				return e.forEach(e => {
					const n = _(e, t);
					n && (i[n.channelId] = n)
				}), {
					channels: i
				}
			}
			const p = e => {
				if (e && e.url && e.name && e.subreddit && e.subreddit.id && e.description && e.member_count) return {
					channelId: Object(o.a)(e.url),
					channelSendbirdUrl: e.url,
					channelState: n.b.PARTIAL,
					fetchingMessages: !1,
					fetchingMessagesError: !1,
					hasMoreMessages: !1,
					isMessageListLoaded: !1,
					fetchingFirstMessage: !1,
					name: e.name,
					type: r.a.Subreddit,
					memberCount: e.member_count,
					customData: {
						subredditId: e.subreddit.id,
						description: e.description
					}
				}
			};

			function h(e) {
				const t = {};
				return e.forEach(e => {
					if (e) {
						const i = p(e);
						i && (t[i.channelId] = i)
					}
				}), {
					channels: t
				}
			}
		},
		"./src/chat/models/Channel/utils/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return p
			})), i.d(t, "e", (function() {
				return h
			})), i.d(t, "c", (function() {
				return f
			})), i.d(t, "b", (function() {
				return g
			})), i.d(t, "d", (function() {
				return b
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = i("./node_modules/lodash/keyBy.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/pickBy.js"),
				o = i.n(s),
				d = i("./node_modules/lodash/sortBy.js"),
				l = i.n(d),
				a = i("./node_modules/lodash/toArray.js"),
				u = i.n(a),
				c = i("./src/chat/constants/channels.ts"),
				_ = i("./src/chat/constants/sendbird.ts"),
				m = i("./src/chat/models/Channel/index.ts");
			const p = e => _.a + e,
				h = (e, t) => r()(l()(u()(e), t), "channelId");

			function f(e, t) {
				return o()(e, e => t.includes(e.type))
			}

			function g(e, t) {
				return (e || t || c.b.UNSORTED).toUpperCase()
			}

			function b(e) {
				const t = e.custom_type || e.customType;
				if ("string" == typeof t) {
					const e = t.split("_");
					switch (e.length && e[0]) {
						case "direct":
							return m.a.Direct;
						case "subreddit":
							return m.a.Subreddit;
						case "group":
							return m.a.Group
					}
				}
				return "boolean" == typeof e.is_super && e.is_super || "boolean" == typeof e.isSuper && e.isSuper ? m.a.Subreddit : "boolean" == typeof e.is_distinct && e.is_distinct || "boolean" == typeof e.isDistinct && e.isDistinct ? m.a.Direct : m.a.Group
			}
		},
		"./src/chat/models/Channel/utils/removeSendbirdPrefix.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = i("./src/chat/constants/sendbird.ts");
			t.a = e => e.replace(n.a, "")
		},
		"./src/chat/models/Message/adapter.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return h
			})), i.d(t, "c", (function() {
				return g
			})), i.d(t, "a", (function() {
				return b
			}));
			var n = i("./node_modules/lodash/isObject.js"),
				r = i.n(n),
				s = i("./src/chat/constants/messages.ts"),
				o = i("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				d = i("./src/chat/helpers/errors.ts");
			var l = i("./src/chat/helpers/urls/index.ts");
			const a = {
					text: e => ({
						type: s.b.TEXT,
						value: e
					}),
					post: e => ({
						type: s.b.POST,
						value: e,
						subreddit: Object(l.getSubredditFromUrl)(e)
					}),
					embedCollection: e => {
						const {
							url: t,
							embed: i
						} = function(e, t) {
							try {
								return JSON.parse(e)
							} catch (i) {
								return Object(d.b)(i), t
							}
						}(e, {
							embed: void 0,
							url: ""
						});
						if (t) return {
							type: s.b.EMBED,
							value: t,
							embed: i
						}
					},
					snoomoji: e => ({
						type: s.b.SNOOMOJI,
						value: e
					})
				},
				{
					TEXT: u,
					POST: c,
					EMBED: _,
					SNOOMOJI: m
				} = s.b,
				p = e => {
					let t = {};
					try {
						const i = JSON.parse(e);
						i && i.v1 && (t = i.v1)
					} catch (i) {}
					return r()(t) || (t = {}), t
				},
				h = e => p(e).clientMessageId || "",
				f = e => ({
					channelIsPublic: e.channel_is_public,
					channelName: e.channel_name,
					channelId: e.channel_url && Object(o.a)(e.channel_url),
					messageId: e.message_id,
					messageValue: e.message_value,
					messageCreatedAt: e.message_created_at,
					reason: e.reason,
					reportedUserId: e.reported_user_id,
					reportedUserName: e.reported_user_name,
					subredditId: e.subreddit_id,
					subredditName: e.subreddit_name,
					actions: Object.assign({}, e.actions && e.actions.deleted && {
						deleted: {
							status: e.actions.deleted.status,
							userId: e.actions.deleted.user_id,
							userName: e.actions.deleted.user_name,
							updatedTs: e.actions.deleted.updated_ts
						}
					}, e.actions && e.actions.ignored && {
						ignored: {
							status: e.actions.ignored.status,
							userId: e.actions.ignored.user_id,
							userName: e.actions.ignored.user_name,
							updatedTs: e.actions.ignored.updated_ts
						}
					})
				}),
				g = (e, t) => {
					const i = p(t);
					return Object.assign({}, ((e, t) => {
						if (t.snoomoji) return a[m](t.snoomoji);
						if (t.embed_data && t.embed_data.url) return a[c](t.embed_data.url);
						if (t.embed_collection) {
							const e = a[_](t.embed_collection);
							if (e) return e
						} else if (e) return a[u](e);
						return a[u]("")
					})(e, i), {
						clientMessageId: h(t),
						highlights: i.highlights || []
					}, i.report && {
						report: f(i.report)
					})
				},
				b = function(e, t, i) {
					let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
					return {
						v1: Object.assign({
							clientMessageId: i,
							highlights: n
						}, t === m ? {
							snoomoji: e
						} : {}, t === c ? {
							embed_data: {
								url: e
							}
						} : {}, t === _ ? {
							embed_collection: e
						} : {})
					}
				}
		},
		"./src/chat/models/Message/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return c
			})), i.d(t, "a", (function() {
				return _
			}));
			var n = i("./node_modules/uuid/v4.js"),
				r = i.n(n),
				s = i("./src/chat/constants/messages.ts"),
				o = i("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				d = i("./src/chat/models/Message/adapter.ts"),
				l = i("./src/chat/selectors/messages.ts"),
				a = i("./src/chat/selectors/user.ts");

			function u(e) {
				if (e && e.messageType === s.c.USER) {
					return e.sender
				}
			}

			function c(e) {
				if (e && e.messageType === s.c.USER) {
					const {
						channelUrl: t,
						messageType: i,
						messageId: n,
						createdAt: r,
						updatedAt: l,
						channelType: a,
						message: c,
						data: _,
						customType: m
					} = e;
					return {
						channelId: Object(o.a)(t),
						channelSendbirdUrl: t,
						messageType: s.c[i],
						messageId: n,
						createdAt: r,
						updatedAt: l,
						channelType: a,
						data: _,
						messageData: Object(d.c)(c, _),
						sender: u(e),
						customType: m
					}
				}
			}

			function _(e, t, i, n) {
				const o = r()(),
					u = Object(l.c)(e, i),
					c = JSON.stringify(Object(d.a)(i, n, o, u));
				return {
					channelId: t,
					clientMessageId: o,
					createdAt: (new Date).getTime(),
					data: c,
					messageData: Object(d.c)(i, c),
					messageType: s.c.PENDING,
					error: !1,
					sender: {
						nickname: Object(a.b)(e),
						userId: Object(a.a)(e)
					}
				}
			}
		},
		"./src/chat/models/Promo/index.ts": function(e, t, i) {
			"use strict";
			var n, r, s;
			i.d(t, "a", (function() {
					return n
				})), i.d(t, "b", (function() {
					return r
				})), i.d(t, "c", (function() {
					return s
				})), i.d(t, "d", (function() {
					return o
				})), i.d(t, "e", (function() {
					return d
				})),
				function(e) {
					e.SubredditChatFtux = "displaySubredditChatFtux"
				}(n || (n = {})),
				function(e) {
					e.NSFWWarning = "displayNSFWWarning"
				}(r || (r = {})),
				function(e) {
					e.LegacyNSFWWarning = "nsfwWarning", e.LegacySubredditChatFtux = "firstTimeUserExp"
				}(s || (s = {}));
			const o = e => {
					const t = {};
					for (const i in e) switch (i) {
						case n.SubredditChatFtux:
							t[i] = e[i]
					}
					return t
				},
				d = e => {
					for (const t in e)
						if (!0 === e[t]) return !0;
					return !1
				}
		},
		"./src/chat/models/Subreddit/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			}));
			var n = i("./src/chat/models/Channel/subreddit.ts");

			function r(e) {
				const {
					id: t,
					name: i,
					description: n,
					icon_img: r,
					key_color: s,
					nsfw: o
				} = e;
				return {
					id: t,
					name: i,
					description: n,
					iconImg: r,
					keyColor: s,
					nsfw: o
				}
			}

			function s(e) {
				const t = {};
				return e.forEach(e => {
					if (e && e.subreddit) {
						const i = r(e.subreddit);
						t[i.id] = i
					}
				}), t
			}

			function o(e) {
				const t = {};
				return e.forEach(e => {
					const i = Object(n.d)(e.data);
					if (i) {
						const {
							subreddit: e
						} = i;
						e && (t[e.id] = e)
					}
				}), t
			}
		},
		"./src/chat/models/User/inviter.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			})), i.d(t, "a", (function() {
				return o
			}));
			const n = "t2_1qwk",
				r = "reddit";

			function s(e) {
				if (e) return {
					id: e.user_id,
					name: e.nickname
				}
			}

			function o(e) {
				return {
					id: e ? e.userId : n,
					name: e ? e.nickname : r
				}
			}
		},
		"./src/chat/models/User/member.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var n = i("./node_modules/lodash/isArray.js"),
				r = i.n(n);
			const s = e => r()(e) && e.map(e => ({
				id: e.user_id || e.userId,
				isOnline: e.is_online || e.isOnline,
				lastSeenAt: e.last_seen_at || e.lastSeenAt,
				name: e.nickname,
				profileUrl: e.profile_url || e.profileUrl,
				state: e.state,
				isBlockedByMe: e.isBlockedByMe
			})).filter(Boolean) || []
		},
		"./src/chat/reducers/subscribe.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			}));
			const n = (e, t) => t,
				r = (e, t) => () => t(e.getState().lastAction)
		},
		"./src/chat/selectors/app.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return d
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "f", (function() {
				return a
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "a", (function() {
				return _
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/isEmpty.js"),
				s = i.n(r),
				o = i("./src/chat/constants/container.ts");
			const d = e => e.container.size === o.a.HIDDEN,
				l = e => e.container.size === o.a.EMBED || e.container.size === o.a.FULL,
				a = e => !(!(e.user.account && e.sendbird.session.active && e.sendbird.sdk.initialized && e.channels.firstLoaded) || c(e)),
				u = e => window.parent !== window || !!(e && e.meta && e.meta.isRedesign),
				c = e => {
					if (!e.user.account) return n.fbt._("Sign in, please.", null, {
						hk: "3cGIp8"
					})
				},
				_ = e => !s()(e.user.experiments)
		},
		"./src/chat/selectors/channels.ts": function(e, t, i) {
			"use strict";
			i.d(t, "n", (function() {
				return h
			})), i.d(t, "r", (function() {
				return f
			})), i.d(t, "s", (function() {
				return g
			})), i.d(t, "t", (function() {
				return b
			})), i.d(t, "p", (function() {
				return v
			})), i.d(t, "h", (function() {
				return T
			})), i.d(t, "k", (function() {
				return S
			})), i.d(t, "l", (function() {
				return E
			})), i.d(t, "w", (function() {
				return F
			})), i.d(t, "x", (function() {
				return I
			})), i.d(t, "m", (function() {
				return O
			})), i.d(t, "j", (function() {
				return j
			})), i.d(t, "u", (function() {
				return B
			})), i.d(t, "b", (function() {
				return x
			})), i.d(t, "O", (function() {
				return R
			})), i.d(t, "g", (function() {
				return k
			})), i.d(t, "f", (function() {
				return C
			})), i.d(t, "y", (function() {
				return N
			})), i.d(t, "z", (function() {
				return P
			})), i.d(t, "A", (function() {
				return L
			})), i.d(t, "E", (function() {
				return A
			})), i.d(t, "e", (function() {
				return D
			})), i.d(t, "P", (function() {
				return G
			})), i.d(t, "F", (function() {
				return M
			})), i.d(t, "C", (function() {
				return U
			})), i.d(t, "c", (function() {
				return q
			})), i.d(t, "G", (function() {
				return H
			})), i.d(t, "H", (function() {
				return V
			})), i.d(t, "J", (function() {
				return W
			})), i.d(t, "I", (function() {
				return z
			})), i.d(t, "i", (function() {
				return K
			})), i.d(t, "v", (function() {
				return Q
			})), i.d(t, "o", (function() {
				return J
			})), i.d(t, "K", (function() {
				return Y
			})), i.d(t, "a", (function() {
				return X
			})), i.d(t, "L", (function() {
				return Z
			})), i.d(t, "D", (function() {
				return $
			})), i.d(t, "d", (function() {
				return ee
			})), i.d(t, "q", (function() {
				return te
			})), i.d(t, "M", (function() {
				return ie
			})), i.d(t, "N", (function() {
				return ne
			})), i.d(t, "B", (function() {
				return re
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/lodash/flatten.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/sortBy.js"),
				o = i.n(s),
				d = i("./node_modules/lodash/toArray.js"),
				l = i.n(d),
				a = i("./node_modules/lodash/uniqBy.js"),
				u = i.n(a),
				c = i("./node_modules/lodash/values.js"),
				_ = i.n(c),
				m = i("./src/chat/constants/channelRemovalReason.ts"),
				p = i("./src/chat/constants/channels.ts");
			i("./src/chat/models/Channel/index.ts");
			const h = e => e.channels.invited.sortedKeys.length,
				f = e => e.channels.joined.sortedKeys.length,
				g = e => r()(l()(e.channels.subreddit.joined.sortedKeys)).length,
				b = (e, t, i) => {
					const n = t && _()(t.channels) || i || [],
						s = (e => {
							const {
								models: t,
								subreddit: {
									joined: i
								}
							} = e.channels;
							return r()(_()(i.sortedKeys)).map(e => t[e])
						})(e),
						o = u()([...s, ...n], e => e.channelId),
						d = w(e, o);
					return y(e, d)
				},
				w = (e, t) => {
					const i = e.subreddits.models;
					return o()(t, [e => i[e.customData.subredditId].name.toLowerCase()], e => e.name.toLowerCase())
				},
				y = (e, t) => {
					const i = e.subreddits.models;
					return t.reduce((e, t) => {
						const {
							channelId: n,
							customData: {
								subredditId: r
							}
						} = t, s = i[r].name.toLowerCase();
						return e[s] = e[s] || [], e[s].push(n), e
					}, {})
				},
				v = e => e.channels.subreddit.invited.sortedKeys.length,
				T = (e, t) => t ? e.channels.models[t] : void 0,
				S = e => {
					const {
						currentPage: t
					} = e.platform, i = t && t.urlParams.channelId;
					if (i) return T(e, i)
				},
				E = e => {
					const t = S(e);
					if (t && t.channelState === p.b.JOINED) return t
				},
				F = e => {
					const {
						channelId: t
					} = e.channels.selected;
					if (t) return T(e, t)
				},
				I = e => e.channels.selected && e.channels.selected.channelId,
				O = e => S(e) || F(e),
				j = (e, t) => {
					const i = t || O(e);
					return i && i.members && i.members.map(e => e.id)
				},
				B = e => {
					const {
						user: t
					} = e, i = O(e);
					if (i && i.members) return i.members.filter(e => e.id !== t.account.id)
				},
				x = (e, t) => {
					const i = B(e);
					return !(!i || !i.find(e => !!t[e.id].isNSFW))
				},
				R = e => {
					return !!E(e)
				},
				k = e => {
					const t = B(e);
					return t && t.filter(e => e.isBlockedByMe)
				},
				C = e => {
					const t = [],
						i = e.user.account.id;
					return _()(e.channels.models).forEach(e => {
						if (e && e.members) {
							const n = e.members.filter(e => e.id !== i).map(e => e.id);
							n.length && t.push(n)
						}
					}), t.length && t
				},
				N = e => _()(e.messages.models).filter(t => t.channelId === e.channels.selected.channelId),
				P = e => _()(e.messages.pending).filter(t => t.channelId === e.channels.selected.channelId),
				L = (e, t) => {
					const i = F(e);
					return i && i[t]
				},
				A = e => e.channels.joined.hasMoreChannels,
				D = e => e.channels.joined.fetchingChannels,
				G = e => e.channels.joined.sortedKeys.map(t => e.channels.models[t]),
				M = e => e.channels.inviteListExpanded,
				U = e => e.channels.invited.hasMoreChannels,
				q = e => e.channels.invited.fetchingChannels,
				H = e => e.channels.invited.sortedKeys.map(t => e.channels.models[t]),
				V = e => {
					const t = F(e);
					return t && t.inviter && t.inviter.name
				},
				W = e => {
					const t = S(e);
					return !(!t || !t.isMessageListLoaded)
				},
				z = e => e.channels.isCreatingChannel,
				K = e => {
					const t = F(e);
					return t && t.channelState
				},
				Q = e => {
					const {
						sortedKeys: t
					} = e.channels.subreddit.recommended, i = t.map(t => e.channels.models[t]);
					let n = [];
					return i && i.length && (n = i.filter(e => !(!e || e.channelState === p.b.JOINED))), n
				},
				J = e => {
					const {
						sortedKeys: t
					} = e.channels.subreddit.invited;
					return t && t.map(t => e.channels.models[t])
				},
				Y = (e, t) => !(!t || !e.channels.subreddit.recommended.sortedKeys.includes(t)),
				X = e => {
					const t = S(e);
					return !(!t || !t.isModerator)
				},
				Z = (e, t) => {
					const i = T(e, t);
					return !(!i || !Y(e, t) || i.channelState === p.b.JOINED)
				},
				$ = e => e.channels.subreddit.invited.hasMoreChannels,
				ee = e => e.channels.subreddit.invited.fetchingChannels,
				te = (e, t) => {
					if (t) return e.channels.subreddit.kicked.sortedKeys.includes(t) ? m.a.KICKED : e.channels.subreddit.banned.sortedKeys.includes(t) ? m.a.BANNED : m.a.DEFAULT
				},
				ie = e => {
					const t = O(e);
					return !(!t || !t.isFrozen)
				},
				ne = e => {
					const t = O(e);
					return !(!t || !t.isMuted)
				},
				re = e => {
					const t = O(e);
					return t && t.customData && t.customData.subreddit && t.customData.subreddit.id
				}
		},
		"./src/chat/selectors/messages.ts": function(e, t, i) {
			"use strict";
			i.d(t, "j", (function() {
				return d
			})), i.d(t, "i", (function() {
				return l
			})), i.d(t, "d", (function() {
				return a
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "f", (function() {
				return c
			})), i.d(t, "g", (function() {
				return _
			})), i.d(t, "h", (function() {
				return m
			})), i.d(t, "b", (function() {
				return p
			})), i.d(t, "c", (function() {
				return h
			})), i.d(t, "a", (function() {
				return f
			})), i.d(t, "k", (function() {
				return g
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/linkMatchers/customLinks.ts"),
				r = i("./src/chat/helpers/unreadCount.ts"),
				s = i("./src/chat/selectors/channels.ts"),
				o = i("./src/chat/selectors/promos.ts");
			const d = e => {
					const t = Object(s.n)(e);
					return e.messages.unread.basicChannelCount - t || 0
				},
				l = e => e.messages.unread,
				a = (e, t) => {
					if (t) return e.messages.models[t]
				},
				u = (e, t) => {
					const i = a(e, t);
					return i && i.sender
				},
				c = (e, t) => {
					const i = u(e, t);
					return i && i.userId
				},
				_ = (e, t) => {
					const i = a(e, t);
					return i && i.messageData.type
				},
				m = (e, t) => e.messages.pending[t],
				p = e => {
					const t = Object(s.k)(e);
					if (t && t.firstMessageId) return e.messages.models[t.firstMessageId]
				},
				h = (e, t) => {
					const i = Object(s.a)(e);
					return Object.keys(n.b).map(e => i && t.includes("@" + n.b[e]) && n.b[e]).filter(e => e)
				},
				f = e => {
					const t = l(e),
						i = Object(o.b)(e);
					return Object(r.a)(t, i)
				},
				g = e => {
					const t = l(e);
					return Object(r.b)(t)
				}
		},
		"./src/chat/selectors/promos.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			}));
			const n = e => e.promos,
				r = e => e.promos.displaySubredditChatFtux,
				s = e => e.promos.displayNSFWWarning
		},
		"./src/chat/selectors/user.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "f", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			}));
			const n = e => e.user.account.id,
				r = e => e.user.account.name,
				s = e => !!e.user.account,
				o = e => e.user.session,
				d = e => !!e.user.account && e.user.account.seenSubredditChatFtux,
				l = e => e.user.account
		},
		"./src/config.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/env/index.ts");
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var r = i("./src/telemetry/models/App.ts");
			const s = {
				https: "true" === {}.HTTPS,
				accountManagerOrigin: (Object(n.b)(), "https://www.reddit.com"),
				adsPath: {}.ADS_URL || "/api/request_promo.json",
				dfpSlotPrefix: {}.DFP_SLOT_PREFIX || "/32173961/desktop",
				dfpRefreshSlotId: "/32173961/Desktop-Refresh",
				dfpRefreshSlotTestSubreddit: "askreddit",
				dfpRefreshSlotInterval: 24e4,
				apiHeaders: (e => e.split(";").reduce((e, t) => {
					if (t && t.indexOf("=") > 0) {
						const [i, n] = t.split("=");
						e[i.trim()] = n.trim()
					}
					return e
				}, {}))({}.API_HEADERS || ""),
				apiPassThroughHeaders: (e => e.length <= 0 ? [] : e.split(";"))({}.API_PASS_THROUGH_HEADERS || ""),
				appName: {}.APP_NAME || "desktop2x",
				assetPath: "https://www.redditstatic.com/desktop2x",
				cookieDomain: ".reddit.com",
				giphyApiKey: "k2kwyMA6VeyHM6ZRT96OXDGaersnx73Z",
				mediaUrl: "https://www.redditmedia.com",
				port: {}.PORT ? parseInt({}.PORT) : 8888,
				postErrorsUrl: "/errors",
				redditUrl: "https://www.reddit.com",
				apiUrl: "https://www.reddit.com",
				redirectUri: {}.REDIRECT_URI || "https://m.reddit.com/oauth2/token",
				redditHelpUrl: {
					chat: "https://www.reddithelp.com/en/categories/using-reddit/chat",
					modHelpCenter: "https://mods.reddithelp.com/",
					submitRequest: {
						copyrightDmca: "https://www.reddithelp.com/en/submit-request/copyright-dmca",
						trademarkViolation: "https://www.reddithelp.com/en/submit-request/trademark-violation-form"
					},
					privacyQuestions: "https://www.reddithelp.com/en/categories/privacy"
				},
				gatewayUrl: "https://gateway.reddit.com",
				metaUrl: {}.META_URL || "https://meta-api.reddit.com",
				muxApiKey: "mcpf0hehcbo78k9u67arfer8a",
				oauthUrl: "https://oauth.reddit.com",
				gqlUrl: "https://gql.reddit.com",
				sendbirdServiceUrl: "https://s.reddit.com",
				sendbirdAppId: "2515BDA8-9D3A-47CF-9325-330BC37ADA13",
				snoovatarUrl: "https://snoovatar.reddit.com",
				shortUrl: {}.SHORT_URL || "https://s.reddit.com",
				streamingApiUrl: "https://strapi.reddit.com",
				embedlyApiKey: {}.EMBEDLY_KEY || "522baf40bd3911e08d854040d3dc5c07",
				pushNotificationApplicationServerKey: {}.PUSH_NOTIFICATION_APPLICATION_SERVER_KEY || "BJ2nJR9HeBwCWe4s7bKfKgWZkx2Q8Q59yBdSVLxWIhPaWuzHDUxQ2YJnhLvbAVujWBZYuQv60V6a6oipSw09FT0",
				ogImage: "https://www.redditstatic.com/icon.png",
				oldRedditUrl: "https://old.reddit.com",
				processingImageUrl: "https://www.redditstatic.com/image-processing.png",
				processingAvatarImageUrl: "https://www.redditstatic.com/avatars",
				sentryClientPublicURL: "https://6b5ce051b2ed4032bd906af3de0630cd@oops.redditmedia.com/11",
				statsdHost: {}.STATSD_HOST,
				statsdPort: {}.STATSD_PORT,
				statsdDebug: (e => {
					try {
						return !!JSON.parse(e)
					} catch (t) {
						return !1
					}
				})({}.STATSD_DEBUG || ""),
				statsdPrefix: {}.STATSD_PREFIX || "",
				statsdSocketTimeout: parseInt({}.STATSD_TIMEOUT || "100"),
				recaptchaSitekey: {}.RECAPTCHA_SITEKEY || "6LeTnxkTAAAAAN9QEuDZRpn90WwKk_R1TRW_g-JC",
				gtmContainerId: {}.GTM_CONTAINER_ID || "GTM-5XVNS82",
				adblockId: "a2ba06a4-a2ec-4182-b295-c15ffe5f1181",
				logSample: {
					request404: .1,
					request500URIError: 5,
					serverSetCookieAfterRes: 10,
					failToSetLOID: 10,
					tooManyRequests: .05
				},
				telemetry: {
					appName: {
						profilesR2: Object(n.b)() ? r.TelemetryAppName.web : r.TelemetryAppName.webDev,
						redesign: Object(n.b)() ? r.TelemetryAppName.web2x : r.TelemetryAppName.web2xDev,
						redesignR2: Object(n.b)() ? r.TelemetryAppName.desktop2x : r.TelemetryAppName.desktop2xDev,
						chat2x: Object(n.b)() ? r.TelemetryAppName.web2x : r.TelemetryAppName.web2xDev,
						chatR2: Object(n.b)() ? r.TelemetryAppName.web : r.TelemetryAppName.webDev
					},
					postConsumedThreshold: 2e3,
					commentConsumedThreshold: 2e3,
					commentSampleRate: .01,
					programmaticAdSampleRate: .1
				},
				stripe: {
					apiKey: Object(n.b)() || Object(n.c)() ? "pk_live_sD8LeDtVnlJwAGf51jLygWpH" : "pk_test_Me5fd06PSuMkMF5YnwuMfFf4",
					economyKey: Object(n.b)() ? "pk_live_tF9aUVWi0EYaLI2PlX64Bg2x" : "pk_test_JdtxSeAF4NWzMbtc7R7PshMT",
					powerupsKey: "pk_test_EyWNxJN8RF8fgMXy1VvJbt7I"
				},
				paypal: {
					apiKey: {}.PAYPAL_API_KEY || (Object(n.b)() || Object(n.c)() ? "AXHUGZNCrshqynIpOLkQjqlsrA26Knvf4EB5w1RKfsdxKdsA5WSNo9H_Gng6plKyc48qGhXtmwcYahRy" : "AXH6yPVeFV8sxT1zMvzr8NyPMXx_YkYui1XCy3btQ_s1Zz2R68JC57PqQ2mrj6la-G8y-7UmZyKVsDaR"),
					braintreeApiKey: {}.BRAINTREE_PAYPAL_KEY || (Object(n.b)() ? "Aflf49iitQXbetXO8Ufm6q7zjADO-15_X1tzZqv-hveq4htWjHYNxEmrtB0s0yyyLOCG_ceCB-32EtdY" : "AXH6yPVeFV8sxT1zMvzr8NyPMXx_YkYui1XCy3btQ_s1Zz2R68JC57PqQ2mrj6la-G8y-7UmZyKVsDaR"),
					env: {}.PAYPAL_API_KEY || Object(n.b)() || Object(n.c)() ? "production" : "sandbox",
					buttons: {
						premium: "LAYT3KA5EVVTJ",
						coins500: "SNCZX9LADYMT4",
						coins1100: "6P6X4LTAKNDGG",
						coins1800: "2P5FZYZL42NME",
						coins7200: "W8BKWZXBSWZGC",
						coins40000: "Y9LZ5M2W6VT3A",
						coinsGild500: "BPVKB5BY8HXRA",
						coinsGild1100: "TPGZ3HZ3KE5TS",
						coinsGild1800: "YXZDTMAGNMMEA",
						coinsGild7200: "MQDLLC4FBNSZG",
						coinsGild40000: "T3RL7U6STH7WL"
					}
				},
				reCaptchaEnterprise: {
					siteKey: {}.RECAPTCHA_ENTERPRISE_SITE_KEY || "6LfRNvoUAAAAAKgEWIXbpPkMWcboc1n1gAeXq7lP"
				},
				releaseNotesSubredditMap: {}.RELEASE_NOTES_SUB_MAP ? JSON.parse({}.RELEASE_NOTES_SUB_MAP) : void 0
			};
			t.a = s
		},
		"./src/i18n/translatedFbts lazy recursive ^\\.\\/.*\\.json$": function(e, t, i) {
			var n = {
				"./en-US.json": ["./src/i18n/translatedFbts/en-US.json", "translations/en-US-json"]
			};

			function r(e) {
				if (!i.o(n, e)) return Promise.resolve().then((function() {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}));
				var t = n[e],
					r = t[0];
				return i.e(t[1]).then((function() {
					return i.t(r, 3)
				}))
			}
			r.keys = function() {
				return Object.keys(n)
			}, r.id = "./src/i18n/translatedFbts lazy recursive ^\\.\\/.*\\.json$", e.exports = r
		},
		"./src/lib/CSSVariableProvider/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return h
			})), i.d(t, "a", (function() {
				return I
			})), i.d(t, "b", (function() {
				return j
			})), i.d(t, "e", (function() {
				return B
			})), i.d(t, "d", (function() {
				return x
			}));
			var n = i("./node_modules/lodash/once.js"),
				r = i.n(n),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				d = i("./node_modules/react-dom/index.js"),
				l = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/domUtils/index.ts"),
				u = i("./src/lib/fastdom/index.ts"),
				c = i("./src/lib/LRUCache/index.ts"),
				_ = (i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.array.sort.js"), i("./node_modules/core-js/modules/es6.regexp.to-string.js"), i("./node_modules/lodash/isPlainObject.js")),
				m = i.n(_),
				p = i("./src/lib/isUrl/index.ts");
			const h = !0,
				f = e => {
					const t = [];
					return function e(i) {
						let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
						for (const r in i) {
							const s = i[r],
								o = "".concat(n, "-").concat(r);
							!0 !== s && !1 !== s && (null == s ? t.push([o, "initial"]) : "string" == typeof s ? Object(p.a)(s) ? t.push([o, 'url("'.concat(s, '")')]) : t.push([o, s]) : "number" == typeof s && t.push([o, s.toString()]), Array.isArray(s) || m()(s) && e(s, o))
						}
					}(e), g(t)
				},
				g = e => e.sort((e, t) => b(e[0], t[0])),
				b = (e, t) => e === t ? 0 : e < t ? -1 : 1,
				w = (e, t) => {
					if (e === t) return !0;
					if (e.length !== t.length) return !1;
					for (let i = 0; i < e.length; i++) {
						const n = e[i],
							r = t[i];
						if (n[0] !== r[0] || n[1] !== r[1]) return !1
					}
					return !0
				},
				y = e => e.replace(/[^\-a-zA-Z0-9_]/g, ""),
				v = (e, t) => {
					let i = "";
					for (let r = 0; r < e.length; r++) {
						const [t, n] = e[r];
						i += "-".concat(t, ": ").concat(n, ";")
					}
					const n = t === h ? ":root" : ".".concat(y(t));
					return "".concat(n, " { ").concat(i, " }")
				};
			class T {
				constructor(e, t, i) {
					this.isRootOrUniqueClassName = e, this.theme = t, this.cssVarPairs = i || f(t), this.cssVarDefinitions = v(this.cssVarPairs, e)
				}
				updatedRecord(e, t) {
					if (this.isRootOrUniqueClassName !== e) return new T(e, t);
					if (this.theme === t) return this;
					const i = f(t);
					return w(this.cssVarPairs, i) ? this : new T(e, t, i)
				}
				isEqual(e) {
					return this === e || this.isRootOrUniqueClassName === e.isRootOrUniqueClassName && (this.theme === e.theme || w(this.cssVarPairs, e.cssVarPairs))
				}
			}
			const S = () => ({
					contextCache: new c.a(5),
					rootContext: void 0
				}),
				E = S(),
				F = o.a.createContext(E);
			class I extends o.a.Component {
				constructor(e) {
					super(e), this.contextValue = S()
				}
				render() {
					return o.a.createElement(F.Provider, {
						value: this.contextValue
					}, this.props.children)
				}
			}
			const O = o.a.createContext(""),
				j = o.a.createContext({});
			class B extends o.a.Component {
				constructor(e, t) {
					if (super(e, t), !t) throw new Error("CSSVariableProvider must be wrapped in a CSSVPCoordinatorContextProvider");
					const {
						isRootOrUniqueClassName: i,
						theme: n
					} = e, r = this.getRecordFromContext(i), s = void 0 === r ? new T(i, n) : r.updatedRecord(i, n);
					r && r.isEqual(s) || this.setRecordOnContext(i, s), this.cssVarRecord = s
				}
				componentDidMount() {
					B.polyfillCSSVarsIfNeeded()
				}
				updateCssVarRecord(e) {
					const t = this.getRecordFromContext(e.isRootOrUniqueClassName),
						i = t || this.cssVarRecord,
						n = i.updatedRecord(e.isRootOrUniqueClassName, e.theme);
					t && n.isEqual(i) || this.setRecordOnContext(e.isRootOrUniqueClassName, n), n.isEqual(this.cssVarRecord) || (this.cssVarRecord = n)
				}
				getRecordFromContext(e) {
					return e === h ? this.context.rootContext : this.context.contextCache.get(e)
				}
				setRecordOnContext(e, t) {
					e === h ? this.context.rootContext = t : this.context.contextCache.set(e, t)
				}
				render() {
					this.updateCssVarRecord(this.props);
					const {
						className: e,
						isRootOrUniqueClassName: t,
						theme: i
					} = this.props, n = t === h ? "" : y(t);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: this.cssVarRecord.cssVarDefinitions
						}
					}), o.a.createElement(j.Provider, {
						value: i
					}, o.a.createElement(O.Provider, {
						value: n
					}, o.a.createElement("div", {
						className: Object(l.a)(e, n)
					}, this.props.children))))
				}
			}
			B.contextType = F, B.polyfillCSSVarsIfNeeded = r()(() => {
				u.a.read(() => {
					Object(a.e)() || i.e("vendors~css-vars-ponyfill").then(i.bind(null, "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js")).then(e => {
						let {
							default: t
						} = e;
						t({
							fixNestedCalc: !1,
							onlyLegacy: !0,
							updateURLs: !1,
							watch: !0
						})
					})
				})
			});
			const x = (e, t, i) => Object(d.createPortal)(o.a.createElement(O.Consumer, null, t => o.a.createElement("div", {
				className: y(t)
			}, e)), t, i)
		},
		"./src/lib/DeprecatedBrowserProvider/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return T
			})), i.d(t, "b", (function() {
				return E
			}));
			var n = i("./node_modules/react/index.js"),
				r = i.n(n),
				s = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./node_modules/ua-parser-js/src/ua-parser.js"),
				l = i.n(d);
			const a = "Apple",
				u = "iOS",
				c = "https://www.google.com/chrome/",
				_ = "https://www.microsoft.com/windows/microsoft-edge",
				m = "https://www.mozilla.org/firefox/",
				p = "https://www.apple.com/safari/",
				h = "https://www.opera.com",
				f = "https://www.ucweb.com",
				g = {
					isDeprecated: !1,
					updateLink: null
				};
			var b = i("./src/reddit/selectors/platform.ts"),
				w = i("./src/reddit/selectors/responsiveSettings.ts");
			const y = Object(o.c)({
					isResponsiveSettingsEnabled: e => Object(w.a)(e, {
						pageLayer: Object(b.b)(e)
					})
				}),
				v = Object(s.b)(y),
				T = r.a.createContext(g);
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.contextValue = function(e, t) {
						if (!e) return g;
						const i = new l.a(e),
							n = i.getDevice(),
							r = i.getOS();
						if (!t && (n && n.vendor === a || r && r.name === u)) return {
							isDeprecated: !0,
							updateLink: null
						};
						let s = g.isDeprecated,
							o = g.updateLink;
						const d = i.getBrowser();
						switch (d.name) {
							case "Chrome":
							case "Chrome Headless":
							case "Chrome WebView":
								s = parseInt(d.version || "") < 49, o = c;
								break;
							case "Edge":
								s = parseInt(d.version || "") < 15, o = _;
								break;
							case "Firefox":
								s = parseInt(d.version || "") < 45, o = m;
								break;
							case "IE":
							case "Mobile IE":
								s = !0, o = _;
								break;
							case "Safari":
							case "Mobile Safari":
								s = parseInt(d.version || "") < 11, o = p;
								break;
							case "Opera":
								s = parseInt(d.version || "") < 35, o = h;
								break;
							case "UCBrowser":
								s = parseFloat((d.version || "").slice(0, 5)) < 11.5, o = f
						}
						return {
							isDeprecated: s,
							updateLink: o
						}
					}(e.userAgent, e.isResponsiveSettingsEnabled)
				}
				render() {
					return r.a.createElement(T.Provider, {
						value: this.contextValue
					}, this.props.children)
				}
			}
			const E = v(S)
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			}));
			const n = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class r {
				constructor(e) {
					this.active = !1, this.onKeyDown = e => {
						if ("Tab" === e.key || 9 === e.keyCode) {
							const [t, i] = this.getTabbableNodes();
							if (!t || !i) return;
							e.shiftKey && e.target === t ? (e.preventDefault(), this.tryToFocusNode(i)) : e.shiftKey || e.target !== i || (e.preventDefault(), this.tryToFocusNode(t))
						}
					}, this.container = e
				}
				activate() {
					this.active || (this.active = !0, document.addEventListener("keydown", this.onKeyDown, !0))
				}
				deactivate() {
					this.active && (document.removeEventListener("keydown", this.onKeyDown, !0), this.active = !1)
				}
				getTabbableNodes() {
					const e = this.container.querySelectorAll(n);
					return [e[0], e[e.length - 1]]
				}
				tryToFocusNode(e) {
					e !== document.activeElement && e.focus && e.focus()
				}
			}
		},
		"./src/lib/LRUCache/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			class n {
				constructor(e, t) {
					this.next = null, this.prev = null, this.value = e, this.key = t
				}
			}
			class r {
				constructor(e) {
					this.head = null, this.tail = null, this.data = {}, this.maxSize = e, this.currentSize = 0
				}
				get(e) {
					const t = this.data[e];
					if (void 0 !== t) return this._removeNodeFromList(t), this._setHeadNode(t), t.value
				}
				set(e, t) {
					let i = this.data[e];
					return void 0 === i ? (this.currentSize === this.maxSize ? (i = this.tail, this._removeNodeFromList(i), this.data[i.key] = void 0, i.key = e, i.value = t) : (i = new n(t, e), this.currentSize += 1), this.data[e] = i) : this._removeNodeFromList(i), this._setHeadNode(i), this
				}
				remove(e) {
					const t = this.data[e];
					return void 0 !== t && (this._removeNodeFromList(t), this.data[e] = void 0, this.currentSize -= 1), this
				}
				_removeNodeFromList(e) {
					e.prev ? e.prev.next = e.next : (this.head = e.next, this.head && (this.head.prev = null)), e.next ? e.next.prev = e.prev : (this.tail = e.prev, this.tail && (this.tail.next = null))
				}
				_setHeadNode(e) {
					e !== this.head && (e.next = this.head, e.prev = null, null !== this.head && (this.head.prev = e), this.head = e, null === this.tail && (this.tail = e))
				}
			}
		},
		"./src/lib/addQueryParams/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = i("./node_modules/lodash/isNil.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/pickBy.js"),
				o = i.n(s),
				d = i("./node_modules/node-libs-browser/node_modules/url/url.js"),
				l = i.n(d),
				a = i("./src/lib/extractQueryParams/index.ts");
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			t.a = (e, t) => {
				const i = l.a.parse(e),
					n = o()(t, e => !r()(e));
				return i.query = Object.assign({}, function(e) {
					const t = {};
					for (const i of e.keys()) "string" == typeof i && (t[i] = e.get(i));
					return t
				}(Object(a.a)(e)), n), i.search = void 0, l.a.format(i)
			}
		},
		"./src/lib/apiErrorHelpers.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return d
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "c", (function() {
				return c
			}));
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/sample/index.ts"),
				s = i("./src/reddit/models/Subreddit/index.ts");
			i("./src/config.ts");
			const o = () => !0,
				d = (e, t, d) => {
					const a = t.allowErrorLogging || o;
					if (!(e => {
							const t = l(e);
							switch (t) {
								case 401:
									return Object(r.a)(5);
								case 403:
								case 404: {
									const t = e.body && e.body.reason;
									switch ("string" == typeof t ? t.toUpperCase() : "") {
										case s.c.BannedSubreddit:
										case s.c.GoldSubreddit:
										case s.c.PrivateSubreddit:
										case s.c.QuarantinedSubreddit:
										case s.c.ForbiddenSubreddit:
											return !1;
										default:
											return !0
									}
								}
								default:
									return !!t
							}
						})(d) || !a(d)) return;
					const u = l(d); {
						const {
							sendErrorToServer: r
						} = i("./src/lib/logs/errors.ts");
						r({
							context: e,
							statusCode: u,
							endpoint: t.endpoint,
							error: d.error,
							type: n.q.API
						})
					}
				},
				l = e => e.status || e.error && e.error.status || void 0,
				a = function() {
					for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
					return e => {
						const i = l(e);
						return t.indexOf(i) < 0
					}
				},
				u = {
					400: n.D.BAD_REQUEST,
					401: n.D.AUTHENTICATION_ERROR,
					403: n.D.AUTHORIZATION_ERROR,
					404: n.D.NOT_FOUND_ERROR,
					451: n.D.BLOCKED_FOR_LEGAL_REASONS
				},
				c = e => u[e] || n.D.VALIDATION_ERROR
		},
		"./src/lib/areUrlsEqual/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/history/esm/history.js"),
				r = i("./node_modules/lodash/isEqual.js"),
				s = i.n(r);
			const o = e => (e => Object.assign({}, e, {
				hash: ""
			}))(Object(n.c)(e));
			t.a = (e, t) => s()(o(e), o(t))
		},
		"./src/lib/cache/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return o
			})), i.d(t, "a", (function() {
				return d
			})), i.d(t, "c", (function() {
				return l
			}));
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/redditId/index.ts"),
				s = i("./src/lib/cache/localStorage/index.ts");
			n.I, n.Yb;
			const o = (e, t, i) => e + "." + t + (i ? "{" + Object(r.b)(i, n.wb.Account) + "}" : ""),
				d = s.a,
				l = s.b
		},
		"./src/lib/cache/localStorage/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return o
			}));
			var n = i("./src/lib/logs/console.ts"),
				r = i("./src/lib/safeJSONParse/index.ts");
			const s = e => {
					let t;
					try {
						if (!(t = localStorage.getItem(e))) return
					} catch (s) {
						return void Object(n.a)(s, 'localStorage cache get("'.concat(e, '") error'))
					}
					const i = Object(r.a)(t);
					if (i) {
						if (!(i.expires < Date.now())) return i.value
					} else Object(n.a)(void 0, 'localStorage cache get("'.concat(e, '") error parsing: ').concat(i))
				},
				o = (e, t, i) => {
					const r = {
						expires: "number" == typeof i ? Date.now() + i : i.getTime(),
						value: t
					};
					try {
						return localStorage.setItem(e, JSON.stringify(r)), !0
					} catch (s) {
						Object(n.a)(s, 'localStorage cache set("'.concat(e, '") error'))
					}
					return !1
				}
		},
		"./src/lib/classNames/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/lodash/isNil.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/isObject.js"),
				o = i.n(s),
				d = i("./node_modules/lodash/isString.js"),
				l = i.n(d);

			function a() {
				const e = [];
				for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
				for (const s of i) r()(s) || (l()(s) ? e.push(s) : Array.isArray(s) ? e.push(a(...s)) : o()(s) && e.push(a(...Object.keys(s).filter(e => !!s[e]))));
				return e.join(" ")
			}
		},
		"./src/lib/consoleAdvert/index.ts": function(e, t, i) {
			console.log("\n                  ,d\"=≥,.,qOp,\n                 ,7'  ''²$(  )\n                ,7'      '?q$7'\n             ..,$$,.\n   ,.  .,,--***²\"\"²***--,,.  .,\n ²   ,p²''              ''²q,   ²\n:  ,7'                      '7,  :\n ' $      ,db,      ,db,      $ '\n  '$      ²$$²      ²$$²      $'    Using Reddit at work? Work for Reddit.\n  '$                          $'        https://www.reddit.com/jobs\n   '$.     .,        ,.     .$'\n    'b,     '²«»«»«»²'     ,d'\n     '²?bn,,          ,,nd?²'\n       ,7$ ''²²²²²²²²'' $7,\n     ,² ²$              $² ²,\n     $  :$              $:  $\n     $   $              $   $\n     'b  q:            :p  d'\n      '²«?$.          .$?»²'\n         'b            d'\n       ,²²'?,.      .,?'²²,\n      ²==--≥²²==--==²²≤--==²\n")
		},
		"./src/lib/constants/cookie.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "c", (function() {
				return s
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "g", (function() {
				return a
			})), i.d(t, "h", (function() {
				return u
			})), i.d(t, "i", (function() {
				return c
			}));
			const n = "loid",
				r = "loidcreated",
				s = "mod_mode_enabled",
				o = "token",
				d = "session_tracker",
				l = "reddaid",
				a = "reddit_session",
				u = "d2_token",
				c = "wpsn"
		},
		"./src/lib/constants/euCookiePolicy.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			}));
			const n = 3,
				r = ["AT", "BE", "BG", "BL", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GF", "GG", "GI", "GP", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MF", "MQ", "MT", "NL", "NO", "PL", "PM", "PT", "RE", "RO", "SE", "SI", "SK", "UK", "YT"],
				s = ["AT", "AU", "BE", "BG", "BR", "CA", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "NL", "PH", "PL", "PT", "RO", "SE", "SI", "SK"]
		},
		"./src/lib/constants/headers.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "d", (function() {
				return s
			})), i.d(t, "b", (function() {
				return o
			}));
			const n = "x-reddit-loid",
				r = "x-reddit-session",
				s = "set-cookie",
				o = "x-reddaid"
		},
		"./src/lib/constants/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "y", (function() {
				return d
			})), i.d(t, "p", (function() {
				return l
			})), i.d(t, "l", (function() {
				return a
			})), i.d(t, "wb", (function() {
				return u
			})), i.d(t, "Sb", (function() {
				return c
			})), i.d(t, "o", (function() {
				return _
			})), i.d(t, "j", (function() {
				return m
			})), i.d(t, "i", (function() {
				return p
			})), i.d(t, "xb", (function() {
				return h
			})), i.d(t, "m", (function() {
				return f
			})), i.d(t, "D", (function() {
				return g
			})), i.d(t, "v", (function() {
				return b
			})), i.d(t, "Nb", (function() {
				return w
			})), i.d(t, "H", (function() {
				return y
			})), i.d(t, "N", (function() {
				return v
			})), i.d(t, "P", (function() {
				return T
			})), i.d(t, "O", (function() {
				return S
			})), i.d(t, "kb", (function() {
				return E
			})), i.d(t, "r", (function() {
				return F
			})), i.d(t, "t", (function() {
				return I
			})), i.d(t, "u", (function() {
				return O
			})), i.d(t, "Ub", (function() {
				return j
			})), i.d(t, "s", (function() {
				return B
			})), i.d(t, "Jb", (function() {
				return x
			})), i.d(t, "Bb", (function() {
				return R
			})), i.d(t, "Zb", (function() {
				return C
			})), i.d(t, "Kb", (function() {
				return N
			})), i.d(t, "Lb", (function() {
				return P
			})), i.d(t, "ac", (function() {
				return A
			})), i.d(t, "Ab", (function() {
				return D
			})), i.d(t, "jb", (function() {
				return G
			})), i.d(t, "ib", (function() {
				return M
			})), i.d(t, "Qb", (function() {
				return U
			})), i.d(t, "Rb", (function() {
				return q
			})), i.d(t, "Cb", (function() {
				return H
			})), i.d(t, "Vb", (function() {
				return V
			})), i.d(t, "gb", (function() {
				return W
			})), i.d(t, "eb", (function() {
				return z
			})), i.d(t, "a", (function() {
				return K
			})), i.d(t, "b", (function() {
				return Q
			})), i.d(t, "Y", (function() {
				return J
			})), i.d(t, "W", (function() {
				return Y
			})), i.d(t, "Z", (function() {
				return X
			})), i.d(t, "X", (function() {
				return Z
			})), i.d(t, "S", (function() {
				return $
			})), i.d(t, "Q", (function() {
				return ee
			})), i.d(t, "R", (function() {
				return te
			})), i.d(t, "V", (function() {
				return ie
			})), i.d(t, "L", (function() {
				return ne
			})), i.d(t, "Wb", (function() {
				return re
			})), i.d(t, "J", (function() {
				return se
			})), i.d(t, "G", (function() {
				return oe
			})), i.d(t, "B", (function() {
				return de
			})), i.d(t, "g", (function() {
				return le
			})), i.d(t, "Fb", (function() {
				return ae
			})), i.d(t, "Eb", (function() {
				return ue
			})), i.d(t, "ob", (function() {
				return _e
			})), i.d(t, "rb", (function() {
				return me
			})), i.d(t, "sb", (function() {
				return he
			})), i.d(t, "tb", (function() {
				return fe
			})), i.d(t, "U", (function() {
				return ge
			})), i.d(t, "z", (function() {
				return be
			})), i.d(t, "A", (function() {
				return we
			})), i.d(t, "yb", (function() {
				return ye
			})), i.d(t, "Db", (function() {
				return Te
			})), i.d(t, "cb", (function() {
				return Se
			})), i.d(t, "I", (function() {
				return Ee
			})), i.d(t, "w", (function() {
				return Fe
			})), i.d(t, "Xb", (function() {
				return Ie
			})), i.d(t, "db", (function() {
				return Oe
			})), i.d(t, "Yb", (function() {
				return je
			})), i.d(t, "bb", (function() {
				return Be
			})), i.d(t, "d", (function() {
				return xe
			})), i.d(t, "e", (function() {
				return Re
			})), i.d(t, "h", (function() {
				return ke
			})), i.d(t, "n", (function() {
				return Ce
			})), i.d(t, "c", (function() {
				return Ne
			})), i.d(t, "f", (function() {
				return Pe
			})), i.d(t, "zb", (function() {
				return Le
			})), i.d(t, "M", (function() {
				return Ae
			})), i.d(t, "qb", (function() {
				return De
			})), i.d(t, "pb", (function() {
				return Ge
			})), i.d(t, "nb", (function() {
				return Me
			})), i.d(t, "Ib", (function() {
				return Ue
			})), i.d(t, "hb", (function() {
				return qe
			})), i.d(t, "Hb", (function() {
				return He
			})), i.d(t, "C", (function() {
				return Ve
			})), i.d(t, "E", (function() {
				return We
			})), i.d(t, "q", (function() {
				return ze
			})), i.d(t, "Tb", (function() {
				return Ke
			})), i.d(t, "Ob", (function() {
				return Qe
			})), i.d(t, "Pb", (function() {
				return Je
			})), i.d(t, "fb", (function() {
				return Ye
			})), i.d(t, "Mb", (function() {
				return Xe
			})), i.d(t, "K", (function() {
				return Ze
			})), i.d(t, "Gb", (function() {
				return $e
			})), i.d(t, "F", (function() {
				return et
			})), i.d(t, "lb", (function() {
				return tt
			})), i.d(t, "x", (function() {
				return nt
			})), i.d(t, "k", (function() {
				return rt
			})), i.d(t, "vb", (function() {
				return st
			})), i.d(t, "ub", (function() {
				return ot
			})), i.d(t, "mb", (function() {
				return dt
			})), i.d(t, "T", (function() {
				return lt
			})), i.d(t, "ab", (function() {
				return at
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./src/config.ts"),
				s = i("./node_modules/lodash/values.js"),
				o = i.n(s);
			const d = "en",
				l = {
					ACKNOWLEDGEMENTS: "Acknowledgements",
					APPEAL: "Appeal",
					COINS: "Coins",
					COINS_MOBILE: "CoinsMobile",
					COLLECTION_COMMENTS_PAGE: "CollectionCommentsPage",
					COMMENTS_PAGE: "CommentsPage",
					EMPTY: "Empty",
					DASHBOARD: "UiDashboard",
					FRONTPAGE: "Frontpage",
					GEOTAGGING: "Geotagging",
					META_COMMUNITY_POINTS_LEARN_MORE_PAGE: "MetaCommunityPointsLearnMorePage",
					META_MEMBERSHIP_PAYWALL_PAGE: "MetaMemberhipPaywallPage",
					MULTIREDDIT: "Multireddit",
					OVER18: "Over18",
					POST_CREATION: "PostCreation",
					POST_DRAFT: "PostDraft",
					SETTINGS: "Settings",
					PROFILE: "Profile",
					PROFILE_BETA_CONFIRMATION_PAGE: "ProfileBetaConfirmationPage",
					PROFILE_COMMENTS: "ProfileComments",
					PROFILE_COMMENTS_PAGE: "ProfileCommentsPage",
					PROFILE_HOMEPAGE: "ProfileHomepage",
					PROFILE_POST_COMMENTS: "ProfilePostComments",
					PROFILE_POSTS: "ProfilePosts",
					PROFILE_PRIVACY: "ProfilePrivacy",
					PROFILE_PRIVATE: "ProfilePrivate",
					PROFILE_SNOOBUILDER: "ProfileSnoobuilder",
					R2_PROFILE_MODERATION: "R2ProfileModeration",
					PROFILE_MODERATION: "ProfileModeration",
					PROFILE_SETTINGS: "ProfileSettings",
					PROFILE_OVERVIEW: "ProfileOverview",
					PUBLIC_ACCESS_NETWORK: "PublicAccessNetwork",
					REPORT_PAGE: "ReportPage",
					R2_COMMENTS_PAGE: "R2CommentsPage",
					R2_LISTING: "R2Listing",
					SEARCH_RESULTS: "SearchResults",
					STRUCTURED_STYLES: "StructuredStyles",
					SUBREDDIT: "Subreddit",
					SUBREDDIT_CREATION: "SubredditCreation",
					SUBREDDIT_LEADERBOARD: "SubredditLeaderboard",
					SUBREDDIT_SETTINGS: "SubredditSettings",
					SUBREDDIT_WIKI: "SubredditWiki",
					TOPIC: "Topic",
					MOD_LISTING: "ModListing",
					MODERATION_PAGES: "ModerationPages",
					MODQUEUE_PAGES: "ModQueuePages",
					INBOX_PAGES: "InboxPages",
					CHAT: "ChatPage",
					CHAT_INVITE: "ChatInvite",
					CHAT_EMPTY: "ChatEmpty",
					CHAT_CREATE: "ChatCreate",
					CHAT_MEMBERS: "ChatMembers",
					CHAT_MINIMIZE: "ChatMinimize",
					CHAT_TEST: "ChatTest",
					PREMIUM: "Premium",
					FRAMED_GILD: "FramedGild",
					FRAMED_MODAL: "FramedModal",
					EXPORT_THEME: "ExportTheme",
					IMPORT_THEME: "ImportTheme",
					POLL: "Poll",
					USER_DATA_REQUEST: "UserDataRequestPage"
				};
			var a;
			! function(e) {
				e.Profiles = "r2d2", e.Redesign = "whitespace", e.Chat = "chat", e.Backend = "server", e.Governance = "governance"
			}(a || (a = {}));
			new Set(Object.keys(a).map(e => a[e]));
			var u;
			! function(e) {
				e.Comment = "t1", e.CommentLoadMore = "loadMore", e.CommentContinueThread = "continueThread", e.Account = "t2", e.Post = "t3", e.Subreddit = "t5"
			}(u || (u = {}));
			const c = "u_",
				_ = {
					CHAT: "chat"
				},
				m = "AUTHORIZATION_ERROR",
				p = "AUTHENTICATION_ERROR",
				h = "RATELIMIT",
				f = "BLOCKED_FOR_LEGAL_REASONS",
				g = {
					AUTHENTICATION_ERROR: p,
					AUTHORIZATION_ERROR: m,
					BAD_CAPTCHA_ERROR: "BAD_CAPTCHA",
					BAD_REQUEST: "BAD_REQUEST",
					BANNED_FROM_SUBREDDIT: "BANNED_FROM_SUBREDDIT",
					CREDIT_CARD_FAILURE: "CREDIT_CARD_FAILURE",
					CREDIT_CARD_FAILURE_GENERIC: "CREDIT_CARD_FAILURE_GENERIC",
					INVALID_PREMIUM_AMOUNT: "INVALID_PREMIUM_AMOUNT",
					LIKELY_UBLOCK_ERROR: "LIKELY_UBLOCK_ERROR",
					NO_STRIPE_SUBSCRIPTION: "NO_STRIPE_SUBSCRIPTION",
					NO_TEXT: "NO_TEXT",
					NO_URL: "NO_URL",
					NO_USER: "NO_USER",
					NOT_FOUND_ERROR: "NOT_FOUND_ERROR",
					SERVER_ERROR: "SERVER_ERROR",
					SUBMIT_VALIDATION_ERROR: "SUBMIT_VALIDATION_ERROR",
					UNKNOWN_ERROR: "UNKNOWN_ERROR",
					USER_DOESNT_EXIST: "USER_DOESNT_EXIST",
					USER_REQUIRED_ERROR: "USER_REQUIRED",
					VALIDATION_ERROR: "VALIDATION_ERROR",
					RATELIMIT: h,
					BLOCKED_FOR_LEGAL_REASONS: f
				};
			var b, w;
			! function(e) {
				e.Everywhere = "GLOBAL", e.UnitedStates = "US", e.Argentina = "AR", e.Australia = "AU", e.Bulgaria = "BG", e.Canada = "CA", e.Chile = "CL", e.Colombia = "CO", e.Croatia = "HR", e.CzechRepublic = "CZ", e.Finland = "FI", e.Greece = "GR", e.Hungary = "HU", e.Iceland = "IS", e.India = "IN", e.Ireland = "IE", e.Japan = "JP", e.Malaysia = "MY", e.Mexico = "MX", e.NewZealand = "NZ", e.Philippines = "PH", e.Poland = "PL", e.Portugal = "PT", e.PuertoRico = "PR", e.Romania = "RO", e.Serbia = "RS", e.Singapore = "SG", e.Sweden = "SE", e.Taiwan = "TW", e.Thailand = "TH", e.Turkey = "TR", e.UnitedKingdom = "GB"
			}(b || (b = {})),
			function(e) {
				e.AllStates = "", e.Alaska = "AK", e.Alabama = "AL", e.Arkansas = "AR", e.Arizona = "AZ", e.California = "CA", e.Colorado = "CO", e.Connecticut = "CT", e.DistrictOfColumbia = "DC", e.Delaware = "DE", e.Florida = "FL", e.Georgia = "GA", e.Hawaii = "HI", e.Iowa = "IA", e.Idaho = "ID", e.Illinois = "IL", e.Indiana = "IN", e.Kansas = "KS", e.Kentucky = "KY", e.Louisiana = "LA", e.Massachusetts = "MA", e.Maryland = "MD", e.Maine = "ME", e.Michigan = "MI", e.Minnesota = "MN", e.Missouri = "MO", e.Mississippi = "MS", e.Montana = "MT", e.NorthCarolina = "NC", e.NorthDakota = "ND", e.Nebraska = "NE", e.NewHampshire = "NH", e.NewJersey = "NJ", e.NewMexico = "NM", e.Nevada = "NV", e.NewYork = "NY", e.Ohio = "OH", e.Oklahoma = "OK", e.Oregon = "OR", e.Pennsylvania = "PA", e.RhodeIsland = "RI", e.SouthCarolina = "SC", e.SouthDakota = "SD", e.Tennessee = "TN", e.Texas = "TX", e.Utah = "UT", e.Virginia = "VA", e.Vermont = "VT", e.Washington = "WA", e.Wisconsin = "WI", e.WestVirginia = "WV", e.Wyoming = "WY"
			}(w || (w = {}));
			const y = {
					BEST: "BEST",
					HOT: "HOT",
					NEW: "NEW",
					RISING: "RISING",
					CONTROVERSIAL: "CONTROVERSIAL",
					TOP: "TOP"
				},
				v = {
					BEST: "best",
					HOT: "hot",
					NEW: "new",
					RISING: "rising",
					CONTROVERSIAL: "controversial",
					TOP: "top",
					GILDED: "gilded"
				};
			var T;
			! function(e) {
				e.Best = "best", e.Hot = "hot", e.New = "new", e.ControversialHour = "controversial_hour", e.ControversialDay = "controversial_day", e.ControversialWeek = "controversial_week", e.ControversialMonth = "controversial_month", e.ControversialYear = "controversial_year", e.ControversialAll = "controversial_all", e.TopHour = "top_hour", e.TopDay = "top_day", e.TopWeek = "top_week", e.TopMonth = "top_month", e.TopYear = "top_year", e.TopAll = "top_all", e.Rising = "rising", e.Gilded = "gilded"
			}(T || (T = {}));
			const S = v.HOT,
				E = v.BEST,
				F = (new Set(o()(v)), {
					CONFIDENCE: "confidence",
					TOP: "top",
					NEW: "new",
					CONTROVERSIAL: "controversial",
					OLD: "old",
					RANDOM: "random",
					QA: "qa",
					LIVE: "live",
					CHAT: "chat"
				}),
				I = {
					confidence: () => n.fbt._("best", null, {
						hk: "1lngJF"
					}),
					top: () => n.fbt._("top", null, {
						hk: "3dS2pz"
					}),
					new: () => n.fbt._("new", null, {
						hk: "1qXhXd"
					}),
					controversial: () => n.fbt._("controversial", null, {
						hk: "1eadsB"
					}),
					old: () => n.fbt._("old", null, {
						hk: "100gqw"
					}),
					qa: () => n.fbt._("q&a", null, {
						hk: "2pXYJX"
					}),
					live: () => n.fbt._("live (beta)", null, {
						hk: "1I81g1"
					}),
					chat: () => n.fbt._("chat view (beta)", null, {
						hk: "497J3V"
					})
				};
			var O;
			! function(e) {
				e.Chat = "chat", e.Comment = "comment"
			}(O || (O = {}));
			const j = new Set(o()(F).filter(e => e !== F.CHAT)),
				B = F.CONFIDENCE;
			var x;
			! function(e) {
				e.Comments = "comments", e.Hot = "hot", e.New = "new", e.Relevance = "relevance", e.Top = "top"
			}(x || (x = {}));
			const R = x.Relevance,
				k = new Set([x.Comments, x.Hot, x.New, x.Relevance, x.Top]);

			function C(e) {
				return k.has(e)
			}
			var N, P;
			! function(e) {
				e.ToGlobal = "unrestrict_scope_to_global", e.ToSubreddit = "restrict_scope_to_subreddit"
			}(N || (N = {})),
			function(e) {
				e.Posts = "link", e.Subreddits = "sr", e.Users = "user"
			}(P || (P = {}));
			const L = new Set([P.Posts, P.Subreddits, P.Users]);

			function A(e) {
				return L.has(e)
			}
			const D = ["author", "flair", "nsfw", "self", "selftext", "site", "subreddit", "title", "url"],
				G = "OverviewConversations",
				M = "OverviewChrono",
				U = {
					DAY: "day",
					HOUR: "hour",
					WEEK: "week",
					MONTH: "month",
					YEAR: "year",
					ALL: "all"
				},
				q = "day",
				H = "all",
				V = (U.DAY, new Set(o()(U))),
				W = 5,
				z = {
					CROSSPOST: "crosspost",
					TEXT: "text",
					IMAGE: "image",
					VIDEO: "video",
					EMBED: "embed",
					GIFVIDEO: "gifvideo"
				},
				K = new Set(["image/png", "image/gif", "image/jpeg"]),
				Q = new Set(["video/mp4", "video/quicktime"]),
				J = 60,
				Y = 900,
				X = 1048576,
				Z = 1024 * X,
				$ = 20 * X,
				ee = 100 * X,
				te = 20,
				ie = 5,
				ne = "INVALID_MEDIA_TYPE_ERROR",
				re = "VIDEO_SIZE_LIMIT_EXCEEDED_ERROR",
				se = "IMAGE_SIZE_LIMIT_EXCEEDED_ERROR",
				oe = "GIF_SIZE_LIMIT_EXCEEDED_ERROR",
				de = {
					ADMIN: "admin",
					MODERATOR: "moderator",
					ALUMNI_ADMIN: "special",
					NONE: ""
				},
				le = {
					[de.MODERATOR]: "yes",
					[de.NONE]: "no",
					[de.ADMIN]: "admin"
				},
				ae = 21,
				ue = 3,
				ce = {
					HOT: "hot",
					NEW: "new",
					TOP: "top",
					CONTROVERSIAL: "controversial"
				},
				_e = [ce.NEW, ce.HOT, ce.TOP],
				me = [ce.NEW, ce.HOT, ce.TOP],
				pe = {
					HOT: "hot",
					NEW: "new",
					TOP: "top",
					CONTROVERSIAL: "controversial"
				},
				he = (new Set(o()(ce)), new Set(o()(pe)), ce.NEW),
				fe = U.ALL,
				ge = (new Set(o()({
					OVERVIEW: "overview",
					POSTS: "posts",
					COMMENTS: "comments"
				})), 4),
				be = "[deleted]",
				we = "[deleted]",
				ye = "[removed]";
			var ve;
			! function(e) {
				e[e.subreddit = 0] = "subreddit", e[e.on = 1] = "on", e[e.off = 2] = "off"
			}(ve || (ve = {}));
			const Te = 1e3,
				Se = 60 * Te,
				Ee = 60 * Se,
				Fe = 24 * Ee,
				Ie = 7 * Fe,
				Oe = 30 * Fe,
				je = 365 * Fe,
				Be = {
					HEAD: "head",
					GET: "get",
					POST: "post",
					PUT: "put",
					PATCH: "patch",
					DELETE: "delete"
				},
				xe = 900,
				Re = [300, 250],
				ke = [Re, [300, 600]],
				Ce = [Re],
				Ne = {
					ABOVE_THE_FOLD: "atf",
					BELOW_THE_FOLD: "btf"
				},
				Pe = {
					HOUSE_AD: "house_ad",
					PROGRAMMATIC_AD: "programmatic_ad",
					SWITCH_HOUSE_AD: "switch_house_ad"
				},
				Le = {
					ACKNOWLEDGEMENTS: "acknowledgements",
					APPEAL: "appeal",
					INDEX: "index",
					LISTING: "listing",
					COLLECTION_COMMENTS: "collectionComments",
					COMMENTS: "comments",
					DASHBOARD: "dashboard",
					DUPLICATES: "duplicates",
					EXPLORE: "explore",
					EMAIL_VERIFICATION: "emailVerification",
					GEOTAGGING: "geotagging",
					META_COMMUNITY_POINTS_LEARN_MORE_PAGE: "metaCommunityPointsLearnMorePage",
					META_MEMBERSHIP_PAYWALL_PAGE: "metaMembershipPaywallPage",
					MULTIREDDIT: "multireddit",
					SETTINGS: "settings",
					SETTINGS_REDIRECT: "settingsRedirect",
					OVER18: "over18",
					ORIGINAL_CONTENT_REDIRECT: "originalContentRedirect",
					POST_CREATION: "postCreation",
					POST_DRAFT: "postDraft",
					PROFILE: "profile",
					PROFILE_BETA_CONFIRMATION: "profileBetaConfirmation",
					PROFILE_COMMENTS: "profileComments",
					PROFILE_HOMEPAGE: "profileHomepage",
					PROFILE_ME: "profileMe",
					PROFILE_MODERATION: "profileModeration",
					PROFILE_OVERVIEW: "profileOverview",
					PROFILE_POST_COMMENTS: "profilePostComments",
					PROFILE_POSTS: "profilePosts",
					PROFILE_PRIVACY: "profilePrivacy",
					PROFILE_PRIVATE: "profilePrivate",
					PROFILE_REDIRECT: "profileRedirect",
					PROFILE_SETTINGS: "profileSettings",
					PROFILE_SNOOBUILDER: "profileSnoobuilder",
					PROFILE_SUBMITTED: "profileSumitted",
					PUBLIC_ACCESS_NETWORK: "rpan",
					SEARCH_RESULTS: "searchResults",
					SUBREDDIT: "subreddit",
					SUBREDDIT_CREATION: "subredditCreation",
					SUBREDDIT_LEADERBOARD: "subredditLeaderboard",
					SUBREDDIT_SETTINGS: "subredditSettings",
					SUBREDDIT_WIKI: "subredditWiki",
					TOPIC: "topic",
					MOD_LISTING: "modListing",
					MODERATION_PAGES: "moderationPages",
					MODQUEUE_PAGES: "modQueuePages",
					INBOX_PAGES: "inboxPages",
					CHAT: "chat",
					CHAT_INVITE: "ChatInvite",
					CHAT_EMPTY: "chatEmpty",
					CHAT_CREATE: "chatCreate",
					CHAT_MEMBERS: "chatMembers",
					CHAT_MINIMIZE: "chatMinimize",
					CHAT_TEST: "chatTest",
					COINS: "coins",
					COINS_MOBILE: "coinsMobile",
					PREMIUM: "premium",
					FRAMED_GILD: "framedGild",
					FRAMED_MODAL: "framedModal",
					REPORT: "report",
					POLL: "poll",
					USER_DATA_REQUEST: "userDataRequest"
				},
				Ae = new Set([Le.INDEX, Le.LISTING, Le.MULTIREDDIT, Le.SEARCH_RESULTS, Le.SUBREDDIT, Le.PROFILE, Le.PROFILE_COMMENTS, Le.PROFILE_OVERVIEW, Le.PROFILE_POSTS, Le.PROFILE_PRIVATE, Le.TOPIC]),
				De = new Set([Le.PROFILE, Le.PROFILE_COMMENTS, Le.PROFILE_HOMEPAGE, Le.PROFILE_POST_COMMENTS, Le.PROFILE_PRIVACY, Le.PROFILE_ME, Le.PROFILE_MODERATION, Le.PROFILE_OVERVIEW, Le.PROFILE_POSTS, Le.PROFILE_PRIVATE, Le.PROFILE_SETTINGS, Le.PROFILE_REDIRECT]),
				Ge = new Set([Le.PROFILE_OVERVIEW, Le.PROFILE_POSTS, Le.PROFILE_PRIVATE]),
				Me = new Set([Le.PROFILE_COMMENTS, Le.PROFILE_OVERVIEW, Le.PROFILE_POSTS, Le.PROFILE_PRIVATE]),
				Ue = new Set([Le.INDEX, Le.LISTING, Le.MULTIREDDIT, Le.SUBREDDIT]),
				qe = {
					PROFILE: "profile",
					WEBSITE: "website"
				},
				He = {
					CROSSPOST: "crosspost",
					IMAGE_ONLY: "imageOnly",
					LINK_ONLY: "linkOnly",
					MEDIA: "media",
					POLL: "poll",
					POST: "post"
				},
				Ve = new Set([He.IMAGE_ONLY, He.LINK_ONLY, He.POST]),
				We = 27,
				ze = {
					NOT_ALLOWED_ACCESS: "not-allowed-access",
					LOGGEDIN_HAS_REDESIGN_COOKIE: "loggedin_has_redesign_cookie",
					API: "api",
					JS: "js",
					GQL: "gql"
				},
				Ke = new Set(o()(ze));
			var Qe, Je, Ye, Xe;
			! function(e) {
				e.Awards = "awards", e.Muted = "muted", e.Badges = "badges", e.Banned = "banned", e.ChatSettings = "chat", e.Contributors = "contributors", e.Emojis = "emojis", e.Emotes = "emotes", e.EventPostContent = "eventposts", e.Moderators = "moderators", e.SubredditRules = "rules", e.Removal = "removal", e.Modqueue = "modqueue", e.Reports = "reports", e.Spam = "spam", e.Unmoderated = "unmoderated", e.Edited = "edited", e.PostFlair = "postflair", e.PostRequirements = "settings", e.Modlog = "log", e.Flair = "flair", e.CommunitySettings = "edit", e.UserFlair = "userflair", e.Wiki = "wiki", e.WikiContributors = "wikicontributors", e.WikiBanned = "wikibanned", e.Traffic = "traffic", e.ScheduledPostContent = "scheduledposts", e.Streaming = "streaming", e.SubredditContent = "content"
			}(Qe || (Qe = {})),
			function(e) {
				e.Community = "community", e.Safety = "safety", e.Posts = "posts", e.Wikis = "wikis"
			}(Je || (Je = {})),
			function(e) {
				e.Edited = "edited", e.Modqueue = "modqueue", e.Reports = "reports", e.Spam = "spam", e.Unmoderated = "unmoderated"
			}(Ye || (Ye = {})),
			function(e) {
				e.Account = "account", e.Messaging = "messaging", e.Profile = "profile", e.Privacy = "privacy", e.Notifications = "notifications", e.Feed = "feed", e.Gold = "gold", e.Payments = "payments", e.Premium = "premium", e.Creator = "creator", e.SpecialMembership = "special"
			}(Xe || (Xe = {}));
			const Ze = {
					ALL: "inbox",
					UNREAD: "unread",
					MESSAGES: "messages",
					COMMENT_REPLIES: "comments",
					POST_REPLIES: "selfreply",
					USERNAME_MENTIONS: "mentions",
					COMPOSE: "compose",
					SENT: "sent",
					MODERATOR: "moderator"
				},
				$e = "snoomoji",
				et = Math.ceil(1e3 / 60);
			var tt, it;
			! function(e) {
				e.TITLE = "title", e.BODY = "body", e.LINK = "link", e.FLAIR = "flair"
			}(tt || (tt = {})),
			function(e) {
				e.On = "1", e.Off = "0"
			}(it || (it = {}));
			const nt = {
					domain: r.a.cookieDomain,
					secure: r.a.https,
					httpOnly: !1
				},
				rt = "AutoModerator",
				st = "paypal",
				ot = "creditCard",
				dt = 599,
				lt = 150,
				at = " …"
		},
		"./src/lib/copyToClipboard/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/logs/console.ts");
			t.a = e => {
				const t = document.body.scrollTop,
					i = document.body.scrollLeft,
					r = document.createElement("textarea");
				r.value = e, document.body.appendChild(r), r.select();
				try {
					document.execCommand("copy")
				} catch (s) {
					return Object(n.a)(s, "Failed to copy text: ".concat(e)), !1
				}
				return document.body.removeChild(r), document.body.scrollTop = t, document.body.scrollLeft = i, !0
			}
		},
		"./src/lib/createSignature/index.ts": function(e, t, i) {
			"use strict";
			(function(e) {
				i("./node_modules/core-js/modules/es6.regexp.to-string.js");
				var n = i("./node_modules/crypto-browserify/index.js"),
					r = i.n(n);
				const s = 7;
				t.a = (t, i) => {
					const n = function(t, i) {
							const n = new ArrayBuffer(s),
								r = new DataView(n);
							return r.setUint8(0, t), r.setUint32(3, i, !0), e.from(n)
						}(1, Date.now() / 1e3 + 86400),
						o = function(t, i, n) {
							const s = r.a.createHmac("sha256", t),
								o = e.from(n).toString(),
								d = e.from(o),
								l = e.concat([i, d]);
							return s.update(l), s.digest()
						}(i, n, t),
						d = e.concat([n, o]);
					return e.from(d).toString("base64")
				}
			}).call(this, i("./node_modules/buffer/index.js").Buffer)
		},
		"./src/lib/domUtils/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return d
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "e", (function() {
				return a
			})), i.d(t, "f", (function() {
				return u
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "a", (function() {
				return _
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = i("./node_modules/lodash/isNil.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/once.js"),
				o = i.n(s);
			const d = () => document && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement),
				l = (e, t) => {
					r()(e) || (e === document ? window.scrollTo(0, t) : e.scrollTop = t)
				},
				a = o()(() => {
					{
						const e = window.CSS && window.CSS.supports.bind(window.CSS) || window.supportsCSS;
						return !!e && (e("--f:0") || e("--f", 0))
					}
				}),
				u = () => {
					let e = !1;
					try {
						const t = Object.defineProperty({}, "passive", {
							get() {
								e = !0
							}
						});
						window.addEventListener("test", null, t)
					} catch (t) {}
					return e
				},
				c = o()(() => {
					const e = {},
						t = "search tel url email datetime date month week time datetime-local number range color".split(" "); {
						const i = "1)";
						let n, r, s;
						const o = document.documentElement;
						if (!o) return !1;
						const d = document.createElement("input");
						for (let l = 0; l < t.length; l++) d.setAttribute("type", n = t[l]), (s = "text" !== d.type && "style" in d) && (d.value = i, d.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && void 0 !== d.style.webkitAppearance ? (o.appendChild(d), s = (r = document.defaultView).getComputedStyle && "textfield" !== r.getComputedStyle(d, null).webkitAppearance && 0 !== d.offsetHeight, o.removeChild(d)) : /^(search|tel)$/.test(n) || (s = /^(url|email)$/.test(n) ? d.checkValidity && !1 === d.checkValidity() : d.value !== i)), e[t[l]] = !!s;
						return e
					}
				}),
				_ = e => {
					if (e) {
						const t = document.getElementById(e);
						t && t.focus()
					}
				}
		},
		"./src/lib/env/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			}));
			const n = () => !0,
				r = () => !1,
				s = () => !n()
		},
		"./src/lib/eventTools/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "e", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			}));
			var n, r = i("./src/lib/constants/index.ts");

			function s(e, t) {
				const i = e * r.Db,
					s = t * r.Db,
					o = Date.now();
				return o < i ? n.Future : o >= i && o <= s ? n.Live : n.Past
			}

			function o(e, t) {
				return s(e, t) === n.Future
			}

			function d(e) {
				return function(e, t) {
					const i = e / t;
					return i >= 0 ? Math.floor(i) : Math.ceil(i)
				}(e * r.Db - Date.now(), r.w)
			}

			function l(e) {
				const t = e * r.Db,
					i = new Date,
					n = new Date(t);
				return i.getFullYear() === n.getFullYear() && i.getMonth() === n.getMonth() && i.getDate() === n.getDate()
			}! function(e) {
				e.Future = "before", e.Live = "now", e.Past = "after"
			}(n || (n = {}))
		},
		"./src/lib/extractQueryParams/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = "";

			function r(e) {
				if (!e) return new Map;
				const t = e.split("?")[1] || "",
					[i] = t.split("#");
				if (!i) return new Map;
				const r = {},
					s = i.split("&").map((e, t) => {
						const [i, s] = e.split("=");
						try {
							const e = s ? decodeURIComponent(s) : n;
							return r[i] = (r[i] || []).concat(t), [i, e]
						} catch (o) {
							return [i, n]
						}
					}).reduce((e, t, i, n) => {
						const s = t[0],
							o = r[s];
						if (!o || o[0] !== i) return e;
						const d = r[s].map(e => n[e][1]);
						if (d.length) {
							const t = d.join(",");
							e.push([s, t])
						}
						return e
					}, []);
				return new Map(s)
			}
		},
		"./src/lib/fastdom/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react-dom/index.js");
			const r = e => setTimeout(() => {
				throw e
			});
			var s;
			! function(e) {
				e.Read = "READ", e.Write = "WRITE"
			}(s || (s = {}));
			t.a = new class {
				constructor() {
					this.reads = [], this.writes = [], this.batchScheduled = !1, this.executeBatch = () => {
						this.runTasks(this.reads, s.Read), Object(n.unstable_batchedUpdates)(() => {
							this.runTasks(this.writes, s.Write)
						}), this.batchScheduled = !1, this.hasTasks() && this.scheduleBatch()
					}
				}
				read(e) {
					return this.reads.push(e), this.scheduleBatch(), e
				}
				write(e) {
					return this.writes.push(e), this.scheduleBatch(), e
				}
				clear(e) {
					e && (this.removeInplace(e, this.reads), this.removeInplace(e, this.writes))
				}
				removeInplace(e, t) {
					let i = t.indexOf(e);
					for (; i > -1;) t.splice(i, 1), i = t.indexOf(e)
				}
				scheduleBatch() {
					this.batchScheduled || (requestAnimationFrame(this.executeBatch), this.batchScheduled = !0)
				}
				hasTasks() {
					return this.reads.length || this.writes.length
				}
				runTasks(e, t) {
					let i;
					for (; i = e.shift();) this.runTask(i, t)
				}
				runTask(e, t) {
					try {
						e()
					} catch (i) {
						0,
						r(i)
					}
				}
			}
		},
		"./src/lib/formatEmojiName/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return s
			}));
			const n = ":",
				r = /^:[A-Za-z0-9_-]{1,24}:$/;

			function s(e) {
				return r.test(e) ? e : "".concat(n).concat(e).concat(n)
			}
		},
		"./src/lib/getParsedUserAgent/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return s
			})), i.d(t, "g", (function() {
				return o
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "b", (function() {
				return l
			})), i.d(t, "d", (function() {
				return a
			})), i.d(t, "f", (function() {
				return u
			})), i.d(t, "a", (function() {
				return c
			}));
			var n = i("./node_modules/ua-parser-js/src/ua-parser.js"),
				r = i.n(n);
			const s = e => "mobile" === c(e).device.type,
				o = e => "tablet" === c(e).device.type,
				d = e => !s(e) && !o(e),
				l = e => "Chrome" === c(e).browser.name,
				a = e => "Firefox" === c(e).browser.name,
				u = e => "Opera" === c(e).browser.name;

			function c(e) {
				return new r.a(e).getResult()
			}
		},
		"./src/lib/initializeClient/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return H
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/core-js/modules/es6.regexp.constructor.js"), i("./node_modules/core-js/modules/es6.regexp.match.js"), i("./node_modules/core-js/modules/es6.regexp.search.js"), i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = i("./node_modules/@sentry/browser/esm/sdk.js"),
				s = i("./node_modules/@sentry/browser/esm/index.js"),
				o = i("./node_modules/@sentry/minimal/esm/index.js"),
				d = i("./node_modules/fbt/lib/FbtPublic.js"),
				l = i("./node_modules/history/esm/history.js"),
				a = i("./node_modules/js-cookie/src/js.cookie.js"),
				u = i.n(a),
				c = i("./node_modules/raf/index.js"),
				_ = i.n(c),
				m = i("./node_modules/react/index.js"),
				p = i.n(m),
				h = i("./node_modules/react-dom/index.js"),
				f = i.n(h),
				g = i("./node_modules/react-redux/es/index.js"),
				b = i("./node_modules/react-router-redux/es/index.js"),
				w = i("./node_modules/redux/es/redux.js"),
				y = (i("./node_modules/redux-immutable-state-invariant/dist/index.js"), i("./src/config.ts"));
			i("./src/lib/consoleAdvert/index.ts");
			const v = "mov-2-h";
			i("./node_modules/core-js/modules/es6.symbol.js");
			var T = i("./node_modules/react-router/esm/react-router.js");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var i = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (i[n[r]] = e[n[r]])
				}
				return i
			};

			function F(e) {
				let {
					loadingPage: t,
					routes: i
				} = e;
				return i.map(e => (function(e, t) {
					var {
						component: i
					} = e, n = E(e, ["component"]);
					const r = {
						component: e => void 0 !== i ? p.a.createElement(i, S({}, e, {
							fallback: t
						})) : null,
						exact: n.exact,
						path: n.path
					};
					return p.a.createElement(T.d, S({
						key: Array.isArray(n.path) ? n.path[0] : n.path
					}, r))
				})(e, t))
			}
			var I = e => t => p.a.createElement(T.e, {
					history: e,
					children: t.children
				}),
				O = i("./src/lib/CSSVariableProvider/index.tsx"),
				j = i("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				B = i("./src/lib/logs/errors.ts"),
				x = i("./src/lib/performanceTimings/index.tsx"),
				R = i("./src/lib/sample/index.ts"),
				k = i("./src/lib/sentry/index.ts"),
				C = i("./src/reddit/helpers/localStorage/index.ts"),
				N = i("./src/lib/logSafeJSONStringify/index.ts");
			const P = e => setTimeout(() => {
					throw e
				}, 0),
				L = new Set(["displayText", "email", "profileId", "url"].map(e => e.toLowerCase()));
			var A = e => t => i => n => {
				"object" == typeof n && k.c.addBreadcrumb({
					message: n.type,
					category: "redux-action"
				});
				const r = i(n),
					s = t.getState();
				return k.c.setExtra("pageInfo", JSON.parse(Object(N.a)(s.platform))), k.c.setUser(JSON.parse(Object(N.a)(s.user, L))), !e && r instanceof Promise && r.catch(P), r
			};
			const D = !1;

			function G(e) {
				return "ChunkLoadError" !== e.type || Object(R.a)(1)
			}
			_.a.polyfill();
			const M = () => {
					if (!(() => {
							try {
								return window.history.state || {}
							} catch (e) {
								return {}
							}
						})().key && window.history && window.history.replaceState && window.history.replaceState) {
						const e = Math.random().toString(36).substr(2, 6),
							t = "".concat(window.location.pathname).concat(window.location.search).concat(window.location.hash);
						window.history.replaceState({
							key: e
						}, "", t)
					}
				},
				U = () => {
					(document.cookie.match(/loid=/g) || []).length > 1 && (u.a.set("loid", "", {
						expires: 0,
						path: "/"
					}), u.a.set("loid_created", "", {
						expires: 0,
						path: "/"
					}))
				},
				q = (e, t, i) => {
					console.log("%cStarting Raven %crelease %c".concat("720c680-production") + " %cpublic url %c".concat(y.a.sentryClientPublicURL), "color: #7E53C1", "color: #7E53C1", "color: #FFB000", "color: #7E53C1", "color: #FFB000");
					let n = [];
					n = [new RegExp("^".concat(y.a.assetPath), "i")];
					r.e({
						attachStacktrace: !0,
						dsn: y.a.sentryClientPublicURL,
						whitelistUrls: n,
						release: "720c680-production",
						environment: "production",
						ignoreErrors: ["$ is not defined"],
						integrations: [...Object(k.d)(), new s.Integrations.Breadcrumbs({
							console: !1
						}), new s.Integrations.GlobalHandlers({
							onerror: !0,
							onunhandledrejection: !1
						})],
						beforeSend: e => (e = Object(k.b)(e)).exception && e.exception.values && (e.exception.values = e.exception.values.filter(G), 0 === e.exception.values.length) ? null : (Object(B.sendRavenError)(i(), e), Object(k.e)(e))
					}), t.tags && o.j(t.tags), o.i("app", e)
				};
			async function H(e) {
				let t;
				Object(x.e)(x.b.InitClientStart), document.documentElement && "object" == typeof document.documentElement && "string" == typeof document.documentElement.innerHTML && (t = document.documentElement.innerHTML.length);
				const r = Object(n.b)(() => {}, {
					namespace: e.appName
				});
				U(), M();
				const s = e.history || Object(l.a)();
				let a = e => e.children;
				e.raven && (q(e.appName, e.raven, e.apiContext), a = class extends p.a.Component {
					componentDidCatch(e, t) {
						o.l(i => {
							i.setExtra("info", t), o.c(e)
						}), this.setState({
							errorInfo: t
						})
					}
					render() {
						return this.props.children
					}
				});
				const u = null === window.onunhandledrejection;
				window.onunhandledrejection = e => {
					try {
						o.l(t => {
							t.setExtra("reason", JSON.stringify(e.reason)), o.d("Unhandled rejection: ".concat(e.reason))
						})
					} catch (t) {
						o.l(i => {
							i.setExtra("lastChance", t.message), o.d("Unhandled rejection: ".concat(e.reason))
						})
					}
				};
				const c = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : e => e,
					_ = [!1, Object(b.d)(s), ...e.customMiddleware || []].filter(Boolean);
				e.raven && _.unshift(A(u));
				let m = window.___r || {};
				delete window.___r;
				const h = document.getElementById("data");
				h && h.parentNode && h.parentNode.removeChild(h), e.modifyInitialData && (m = e.modifyInitialData({
					initialData: m,
					browserHistory: s
				}));
				const y = Object(w.e)(e.reducers, m, Object(w.d)(Object(w.a)(..._), c, e.storeEnhancer || (e => e))),
					T = async function() {
						const e = {
							"en-US": {}
						};
						let t = document.documentElement.getAttribute("lang") || "en-US";
						if ("en-US" !== t) try {
							const n = (await i("./src/i18n/translatedFbts lazy recursive ^\\.\\/.*\\.json$")("./".concat(t, ".json"))).default;
							for (const t in n) e[t] = n[t]
						} catch (n) {
							t = "en-US"
						}
						e[t] || (t = "en-US"), d.IntlViewerContext.locale = t, Object(d.init)({
							translations: e
						})
					}(), S = m.user && m.user.account ? m.user.account.id : null;
				Object(C.C)(S);
				const {
					routes: E
				} = e;
				let B = {};
				e.preRender && (B = e.preRender({
					browserHistory: s,
					routes: E,
					store: y,
					flags: {
						DEBUG: D,
						SUPPORTS_REJECTION_EVENTS: u
					}
				})), Object(x.e)(x.b.CreateRouteCompsStart);
				const R = F({
					routes: E,
					loadingPage: e.staticPages ? e.staticPages.loading : void 0
				});
				return await r, Object(x.e)(x.b.ReactHydrateStart), await T,
					function(e) {
						const t = Array.from(e.getElementsByClassName(v));
						for (const i of t) document.head.appendChild(i), i.classList.remove(v)
					}(e.target), await new Promise(t => (e.ssr ? f.a.hydrate : f.a.render)(p.a.createElement(a, null, p.a.createElement(g.a, {
						store: y
					}, p.a.createElement(O.a, null, p.a.createElement(j.b, {
						userAgent: m.meta.userAgent
					}, e.appFactory(I(s), R))))), e.target, t)), Object(x.e)(x.b.ReactHydrateEnd), e.postRender && e.postRender({
						browserHistory: s,
						routes: E,
						serverDocumentLength: t,
						store: y,
						localStorageData: B.localStorageData
					}), Object(x.e)(x.b.InitClientEnd), {
						store: y
					}
			}
		},
		"./src/lib/isAdHocMultireddit/index.ts": function(e, t, i) {
			"use strict";
			const n = /^(all|mod)(\b|$)/;
			t.a = e => {
				const t = e.toLowerCase();
				return !n.test(t) && (t.indexOf("+") > -1 && -1 === t.indexOf("-"))
			}
		},
		"./src/lib/isFakeSubreddit/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/reddit/constants/page.ts");
			const r = [n.a, n.c.Frontpage, n.c.All, n.c.Mod, n.c.Friends, n.c.Popular, n.c.Topic].concat(["random", "randnsfw", "myrandom"]);
			t.a = e => {
				const t = e.toLowerCase();
				return r.includes(t) || t.indexOf("+") > -1 || t.indexOf("-") > -1
			}
		},
		"./src/lib/isPinnedAdminPost/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/constants/index.ts");
			t.a = (e, t) => e && t === n.B.ADMIN
		},
		"./src/lib/isUrl/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			const n = /^https?:/;

			function r(e) {
				return n.test(e)
			}
		},
		"./src/lib/linkMatchers/customLinks.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "a", (function() {
				return c
			})), i.d(t, "f", (function() {
				return _
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.regexp.constructor.js"), i("./node_modules/core-js/modules/es6.regexp.match.js");
			const n = /\s/,
				r = (e, t) => (i, r, s) => {
					if (r > e.length) {
						const t = i[r - e.length - 1];
						if (!t.match(n)) {
							if ("/" !== t) return 0; {
								const t = r - e.length - 2;
								if (t >= 0 && !i[t].match(n)) return 0
							}
						}
					}
					const o = i.slice(r);
					return "" === o || (t.test(o) ? o.match(t)[0].length : 0)
				};
			var s, o;
			! function(e) {
				e.All = "all", e.Here = "here"
			}(s || (s = {})),
			function(e) {
				e.subreddit = "r/", e.subredditFull = "/r/", e.profile = "u/", e.profileFull = "/u/", e.mention = "@"
			}(o || (o = {}));
			const d = new RegExp("^[A-Za-z0-9][A-Za-z0-9_]{0,20}\\b"),
				l = new RegExp("^@".concat(s.All), "i"),
				a = new RegExp("^[A-Za-z0-9_-]{0,20}"),
				u = new RegExp("^/?(u|r)/", "i"),
				c = new RegExp("^/?(u/|@)", "i"),
				_ = o.subreddit,
				m = {
					subreddit: {
						prefix: o.subreddit,
						config: {
							validate: r(o.subreddit, d),
							normalize(e) {
								const t = e.url.replace(u, "");
								!t && e.lastIndex--, e.url = "/r/" + t
							}
						}
					},
					profile: {
						prefix: o.profile,
						config: {
							validate: r(o.profile, a),
							normalize(e) {
								const t = e.url.replace(u, "");
								!t && e.lastIndex--, e.url = "/user/" + t
							}
						}
					},
					mention: {
						prefix: o.mention,
						config: {
							validate: r(o.mention, a),
							normalize(e) {
								if (l.test(e.text)) e.url = "";
								else {
									const t = e.url.replace(c, "");
									!t && e.lastIndex--, e.url = "/user/" + t
								}
							}
						}
					}
				},
				p = {
					subredditFull: {
						prefix: o.subredditFull,
						config: m.subreddit.config
					},
					profileFull: {
						prefix: o.profileFull,
						config: m.profile.config
					}
				},
				h = Object.assign({}, m, p);
			t.g = h
		},
		"./src/lib/listingSort/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "c", (function() {
				return d
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./src/lib/constants/index.ts");
			const r = e => e === n.N.TOP || e === n.N.CONTROVERSIAL,
				s = e => {
					let {
						timeSort: t
					} = e;
					return (t = r(e.sort) ? t || n.Rb : void 0) === e.timeSort ? e : Object.assign({}, e, {
						timeSort: t
					})
				},
				o = e => {
					const [t, i] = e.split("_");
					return s({
						sort: t,
						timeSort: i
					})
				},
				d = e => {
					const {
						sort: t,
						timeSort: i
					} = s(e);
					return t + (i ? "_".concat(i) : "")
				}
		},
		"./src/lib/loadWithRetries/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/promise-retry/index.js"),
				r = i.n(n);
			t.a = e => r()(e, {
				minTimeout: 1500,
				maxTimeout: 3e5
			})
		},
		"./src/lib/localStorageAvailable/index.ts": function(e, t, i) {
			"use strict";
			t.a = () => {
				try {
					if ("undefined" != typeof localStorage && (localStorage.setItem("reddit_local_storage_feature_test", "yes"), "yes" === localStorage.getItem("reddit_local_storage_feature_test"))) return !0
				} catch (e) {
					return !1
				}
				return !1
			}
		},
		"./src/lib/logSafeJSONStringify/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/constants/cookie.ts");
			const r = new Set(["password", "password2", "passwd", "passwd2", "pass", "pass2", "pw", "pw2", "accessToken", "refreshToken", "set-cookie", "cookie", "x-reddit-session", "redditSessionCookie", n.d, n.g, n.h, "authorization"].map(e => e.toLowerCase()));
			t.a = function(e, t) {
				try {
					return JSON.stringify(e, (e, i) => r.has(e.toLowerCase()) ? "<REDACTED />" : t && t.has(e.toLowerCase()) ? "<REDACTED />" : i)
				} catch (i) {
					return JSON.stringify({
						invalidLogJSON: "error trying to serialize logSafeJSON. circular json likely."
					})
				}
			}
		},
		"./src/lib/logs/console.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return o
			}));
			var n;
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./src/lib/logSafeJSONStringify/index.ts");
			! function(e) {
				e.Warn = "WARN", e.Error = "ERROR"
			}(n || (n = {}));
			const r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.Error;
					i === n.Warn ? e ? console.warn(t, e) : console.warn(t) : e ? console.error(t, e) : console.error(t)
				},
				s = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					r(e, t, n.Error)
				},
				o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					r(e, t, n.Warn)
				}
		},
		"./src/lib/logs/errors.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "sendErrorToServer", (function() {
				return c
			})), i.d(t, "sendRavenError", (function() {
				return _
			}));
			var n = i("./node_modules/lodash/get.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/throttle.js"),
				o = i.n(s),
				d = i("./src/config.ts"),
				l = i("./src/lib/constants/index.ts"),
				a = i("./src/lib/logSafeJSONStringify/index.ts"),
				u = i("./src/lib/makeRequest/index.ts");
			const c = o()(e => {
					let {
						context: t,
						endpoint: i,
						error: n,
						settings: r,
						statusCode: s,
						type: o
					} = e;
					return Object(u.b)({
						endpoint: d.a.postErrorsUrl,
						method: l.bb.POST,
						data: {
							endpoint: i,
							settings: r,
							statusCode: s,
							type: o,
							releaseClient: "720c680-production",
							appName: t.statsAppName,
							error: n ? JSON.parse(Object(a.a)(n)) : void 0
						},
						type: "json"
					})
				}, 2e3, {
					leading: !0,
					trailing: !0
				}),
				_ = (e, t) => {
					const i = t.extra && l.Tb.has(t.extra.errorType) ? t.extra.errorType : l.q.JS,
						n = (t.breadcrumbs || []).reverse();
					if (r()(n, "0.data.url") === d.a.postErrorsUrl && r()(n, "1.data.url") === d.a.postErrorsUrl) return;
					const s = r()(t, "exception.values[0]");
					let o, a = [];
					s ? (o = s.type + ": " + s.value, a = r()(s, "stacktrace.frames", [])) : (o = t.message, a = r()(t, "stacktrace.frames", []));
					const u = {
						isLoggedOut: !r()(t, "user.account"),
						url: r()(t, "extra.pageInfo.currentPage.url"),
						_: o,
						stacktrace: a.slice(0, 8),
						breadcrumbs: n.slice(0, 8),
						tags: t.tags
					};
					c({
						context: e,
						error: u,
						type: i,
						settings: t.settings
					})
				}
		},
		"./src/lib/logs/timing.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "c", (function() {
				return _
			}));
			i("./node_modules/core-js/modules/es6.symbol.js"), i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeRequest/index.ts"),
				s = i("./src/lib/performance.js");
			const o = .1;

			function d() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
				return Math.random() > e
			}

			function l() {
				if (!s.a || !s.a.timing) return;
				const e = s.a.timing,
					t = {};

				function i(i, n, r) {
					if (!e[n] || !e[r]) return;
					const s = e[n],
						o = e[r] - s;
					0 !== o && (t[i] = o)
				}
				return i("redirectTiming", "redirectStart", "redirectEnd"), i("startTiming", "fetchStart", "domainLookupStart"), i("dnsTiming", "domainLookupStart", "domainLookupEnd"), i("tcpTiming", "connectStart", "connectEnd"), i("httpsTiming", "secureConnectionStart", "connectEnd"), i("requestTiming", "requestStart", "responseStart"), i("responseTiming", "responseStart", "responseEnd"), i("domLoadingTiming", "domLoading", "domInteractive"), i("domInteractiveTiming", "domInteractive", "domContentLoadedEventStart"), i("domContentLoadedTiming", "domContentLoadedEventStart", "domContentLoadedEventEnd"), t
			}

			function a(e) {
				return Object(r.b)({
					method: n.bb.POST,
					endpoint: "/timings",
					data: {
						rum: e
					},
					type: "json"
				})
			}
			let u = !0;

			function c(e) {
				if (!u) return;
				if (u = !1, d()) return;
				if (!e) return;
				const {
					meta: t,
					duration: i
				} = e;
				if (!t || !t.name) return;
				const {
					name: n
				} = t;
				a({
					actionName: "d2.client.".concat(n),
					routeTiming: i
				})
			}
			const _ = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
				return (n, r) => {
					const s = Date.now();
					if (i && !r) return e(t, n, s - i), i = 0;
					t = n, i = s
				}
			}
		},
		"./src/lib/makeActionCreator/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), t.a = function(e) {
				return t => ({
					type: e,
					payload: t
				})
			};
			const n = e => (t, i) => ({
				type: e[t],
				payload: i
			})
		},
		"./src/lib/makeApiRequest/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return b
			}));
			var n = i("./node_modules/lodash/isEmpty.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				d = i("./node_modules/node-libs-browser/node_modules/url/url.js"),
				l = i.n(d),
				a = i("./src/lib/addQueryParams/index.ts"),
				u = i("./src/lib/apiErrorHelpers.ts"),
				c = i("./src/lib/constants/index.ts"),
				_ = i("./src/lib/constants/headers.ts"),
				m = i("./src/lib/makeRequest/index.ts"),
				p = i("./src/lib/sentry/index.ts"),
				h = i("./src/config.ts"),
				f = i("./src/reddit/singleton/tracing/index.ts");
			const g = (e, t) => {
				const i = Object.assign({}, t, {
					headers: Object.assign({}, t.headers || {}, e.headers)
				});
				(0 === i.endpoint.indexOf(h.a.sendbirdServiceUrl) || (0 === i.endpoint.indexOf(h.a.redditUrl) || i.endpoint.indexOf(h.a.oauthUrl), 0)) && (i.headers = o()(i.headers, [_.a, _.c])), 0 !== i.endpoint.indexOf(h.a.gatewayUrl) && (i.headers = o()(i.headers, [_.b])), t.withoutRedditHeaders && (i.headers = o()(i.headers, [_.a, _.c, _.b]));
				let n = {};
				0 !== i.endpoint.indexOf(h.a.gatewayUrl) && 0 !== i.endpoint.indexOf(h.a.redditUrl) && 0 !== i.endpoint.indexOf(h.a.apiUrl) && 0 !== i.endpoint.indexOf(h.a.oauthUrl) || (n = f.b.getTracingHeadersWithSecret()), i.headers = Object.assign({}, i.headers, n);
				const {
					host: r,
					protocol: s
				} = l.a.parse(i.endpoint), d = "".concat(s, "//").concat(r), u = t.method === c.bb.GET ? "data" : "query", m = {};
				switch (d !== e.apiUrl && d !== h.a.redditUrl || (m.raw_json = 1, m.gilding_detail = 1), typeof i[u]) {
					case "undefined":
						i[u] = m;
						break;
					case "object":
						i[u] = Object.assign({}, i[u], m);
						break;
					case "string":
						i[u] = Object(a.a)(i[u], m)
				}
				return i
			};

			function b(e, t) {
				const i = t.traceRequestName || "api_call";
				return f.b.recordRpcSpanAsync(i, async () => {
					const i = g(e, t);
					return e.onBeforeRequest(i), Object(m.b)(i).then(i => {
						if (e.onResponse(i, {
								allowSetEmptyLoid: t.allowSetEmptyLoid
							}), !i.ok) return Object(u.b)(e, t, i), !i.status || i.status >= 500 ? Object.assign({}, i, {
							error: {
								fields: [],
								type: c.D.SERVER_ERROR
							}
						}) : i.status >= 400 ? Array.isArray(i.body) ? Object.assign({}, i, {
							error: {
								fields: i.body,
								type: Object(u.c)(i.status)
							}
						}) : i.body && i.body.fields ? Object.assign({}, i, {
							error: {
								fields: i.body.fields.map(e => ({
									field: e,
									msg: i.body.explanation
								})),
								type: Object(u.c)(i.status)
							}
						}) : i.body && i.body.json && i.body.json.errors ? Object.assign({}, i, {
							ok: !1,
							error: {
								type: Object(u.c)(i.status),
								fields: i.body.json.errors.map(e => ({
									field: e[0],
									msg: e[1]
								}))
							}
						}) : i.body && i.body.error && i.body.error.extra ? Object.assign({}, i, {
							ok: !1,
							error: {
								type: "gov",
								fields: [{
									field: "gov",
									msg: i.body.error
								}]
							}
						}) : Object.assign({}, i, {
							error: {
								type: Object(u.c)(i.status)
							}
						}) : Object.assign({}, i, {
							error: {
								type: Object(u.c)(i.status)
							}
						});
						if (!r()(i.body && i.body.json && i.body.json.errors)) {
							const e = i.body.json.errors[0];
							return e[2] ? Object.assign({}, i, {
								ok: !1,
								error: {
									type: e[0],
									fields: [{
										field: e[2],
										msg: e[1]
									}]
								}
							}) : Object.assign({}, i, {
								ok: !1,
								error: {
									type: c.D.VALIDATION_ERROR,
									fields: i.body.json.errors.map(e => ({
										field: e[0],
										msg: e[1]
									}))
								}
							})
						}
						return Object.assign({}, i, {
							error: null
						})
					}).catch(e => (p.c.captureMessage(e), m.a))
				})
			}
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let i = e;
				return "/" !== i.substr(-1) && (i += "/"), i += Object(n.c)(t)
			}
		},
		"./src/lib/makeCommentsPageKey/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.array.sort.js");
			t.a = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					n = "commentsPage--[post:'".concat(e, "']");
				return t && (n += "--[rootComment:'".concat(t, "']")), i && (i.sort && i.hasSortParam && (n += "--[sort:'".concat(i.sort, "']")), i.context && (n += "--[context:".concat(i.context, "]")), i.depth && (n += "--[depth:".concat(i.depth, "]"))), n
			}
		},
		"./src/lib/makeListingKey/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./src/lib/isAdHocMultireddit/index.ts"),
				r = i("./src/lib/isFakeSubreddit/index.ts");
			const s = e => e.includes("--[sort:");
			t.a = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					s = e || "";
				return Object(r.a)(s) && Object(n.a)(s) && (s = s.split("+").sort().join("+")), t && (s += "--[sort:'".concat(t, "']")), i.after && (s += "--[after:'".concat(i.after, "']")), i.before && (s += "--[before:'".concat(i.before, "']")), i.category && (s += "--[category:'".concat(i.category, "']")), i.categoryId && (s += "--[category:'".concat(i.categoryId, "']")), i.t && (s += "--[t:'".concat(i.t, "']")), i.geo_filter && (s += "--[geo_filter:'".concat(i.geo_filter, "']")), i.isOtherDiscussions && (s += "--[onOtherDiscussions]"), i.subredditName && (s += "--[subredditName:'".concat(i.subredditName, "']")), i.topicSlug && (s += "--[topic:'".concat(i.topicSlug, "']")), s.toLowerCase()
			}
		},
		"./src/lib/makePostCreationPageKey/index.ts": function(e, t, i) {
			"use strict";

			function n(e) {
				let t = "PostCreationPage";
				return e.subredditName && (t += "--[subreddit:".concat(e.subredditName, "]")), e.profileName && (t += "--[profile:".concat(e.profileName, "]")), e.collectionId && (t += "--[collection:".concat(e.collectionId, "]")), t
			}
			i.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/makeRequest/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			})), i.d(t, "b", (function() {
				return _
			}));
			var n = i("./node_modules/lodash/get.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/isNil.js"),
				o = i.n(s),
				d = i("./node_modules/superagent/lib/client.js"),
				l = i.n(d),
				a = i("./src/lib/constants/index.ts");
			i("./src/lib/logs/console.ts");
			l.a.parse["application/xml"] = e => e;
			const u = {
					error: null,
					ok: !1,
					status: -1,
					body: {},
					headers: {},
					details: ""
				},
				c = (e, t) => {
					switch (e) {
						case a.bb.PUT:
							return l.a.put(t);
						case a.bb.POST:
							return l.a.post(t);
						case a.bb.DELETE:
							return l.a.delete(t);
						case a.bb.PATCH:
							return l.a.patch(t);
						case a.bb.GET:
							return l.a.get(t);
						default:
							return l.a[e](t)
					}
				};

			function _(e) {
				let {
					data: t,
					endpoint: i,
					headers: n,
					method: s,
					redirects: d,
					withCredentials: _,
					query: m,
					type: p = "form",
					setup: h,
					sync: f = !1,
					timeoutMs: g
				} = e;
				return new Promise(e => {
					let b = c(s, i);
					if ("number" == typeof g && b.timeout(g), _ && b.withCredentials(), p && (b = b.type(p)), null !== p && b.type(p), s === a.bb.GET ? t && (b = b.query(t)) : (m && (b = b.query(m)), t && (b = b.send(t))), n && b.set(n), o()(d) || b.redirects(d), h && (b = h(b)), f) {
						const {
							_end: e
						} = b;
						b._end = () => {
							const t = l.a.getXHR;
							l.a.getXHR = () => {
								const e = t();
								l.a.getXHR = t;
								const {
									open: i
								} = e;
								return e.open = function() {
									for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
									return n.length >= 3 && (n[2] = !1), i.apply(e, Array.from(n))
								}, e
							}, e.call(b)
						}
					}
					b.end((t, i) => {
						if (t) e(Object.assign({}, u, {
							body: r()(t, "response.body", {}),
							error: t,
							status: t.status,
							headers: r()(t, "response.headers", {})
						}));
						else {
							const t = i.body && i.body.json && i.body.json.data ? i.body.json.data.details : "";
							e(Object.assign({}, u, {
								body: i.body,
								ok: !0,
								status: i.status,
								headers: i.header,
								details: t
							}))
						}
					})
				})
			}
		},
		"./src/lib/matchRoute/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			}));
			var n = i("./node_modules/history/esm/history.js"),
				r = i("./node_modules/lodash/fromPairs.js"),
				s = i.n(r),
				o = i("./node_modules/react-router/esm/react-router.js"),
				d = i("./src/lib/extractQueryParams/index.ts");

			function l(e, t, i) {
				const r = Object(n.g)(e);
				for (const n of t) {
					const t = Object(o.h)(r.pathname, n);
					if (t) {
						if (i && n.routePredicate && !n.routePredicate(i)) continue;
						const r = s()([...Object(d.a)(e)]);
						return {
							match: Object.assign({}, t, {
								queryParams: r
							}),
							route: n
						}
					}
				}
			}
		},
		"./src/lib/messageIframeParent/index.ts": function(e, t, i) {
			"use strict";
			t.a = function(e, t) {
				let {
					type: i,
					data: n = {}
				} = e, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "*";
				if (window.parent !== window) {
					const e = {
						type: t ? "".concat(i, ".").concat(t) : i,
						data: n
					};
					window.parent.postMessage(JSON.stringify(e), r)
				}
			}
		},
		"./src/lib/objectSelector/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return o
			}));
			var n = i("./node_modules/lodash/isEqual.js"),
				r = i.n(n);

			function s(e) {
				let t = null;
				return (i, n) => {
					const s = e(i, n);
					return r()(s, t) ? t : (t = s, s)
				}
			}
			const o = e => {
				const t = s(e);
				return e => t(e, null)
			}
		},
		"./src/lib/omitHeaders/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/lodash/omit.js"),
				r = i.n(n);
			t.a = (e, t) => Object.assign({}, e, {
				headers: r()(e.headers, t)
			})
		},
		"./src/lib/opener/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			}));
			const n = {
					SELF: "_self",
					BLANK: "_blank",
					PARENT: "_parent",
					TOP: "_top"
				},
				r = "noopener",
				s = "noreferrer",
				o = "nofollow",
				d = "ugc",
				l = "".concat(r, " ").concat(s),
				a = "".concat(r, " ").concat(o, " ").concat(d);
			t.d = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.SELF,
					i = arguments.length > 2 ? arguments[2] : void 0;
				if (t === n.BLANK) {
					const n = window.open("", t, i);
					null != n ? (n.opener = null, n.location.href = e) : window.location.href = e
				} else window.location.href = e
			}
		},
		"./src/lib/pageTitle.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "d", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return a
			})), i.d(t, "g", (function() {
				return u
			})), i.d(t, "h", (function() {
				return c
			})), i.d(t, "i", (function() {
				return _
			})), i.d(t, "j", (function() {
				return m
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js");
			const r = () => n.fbt._("Coins", null, {
					hk: "2mS3S7"
				}),
				s = (e, t) => n.fbt._("{postTitle}: {subreddit}", [n.fbt._param("postTitle", e), n.fbt._param("subreddit", t)], {
					hk: "2IfXU7"
				}),
				o = () => n.fbt._("reddit: the front page of the internet", null, {
					hk: "2oF1yC"
				}),
				d = () => n.fbt._("Moderation Queue", null, {
					hk: "48r06Q"
				}),
				l = () => n.fbt._("Reddit Premium", null, {
					hk: "4wp0Ea"
				}),
				a = () => n.fbt._("Reddit Public Access Network", null, {
					hk: "2YXUi4"
				}),
				u = () => n.fbt._("Reddit Settings", null, {
					hk: "4f8xQM"
				}),
				c = e => n.fbt._("Submit to {subreddit}", [n.fbt._param("subreddit", e)], {
					hk: "1sykEm"
				}),
				_ = () => n.fbt._("Create Community", null, {
					hk: "utpVC"
				}),
				m = () => n.fbt._("Today’s Top Communities", null, {
					hk: "2dcUEX"
				})
		},
		"./src/lib/performance.js": function(e, t, i) {
			"use strict";
			(function(e) {
				const i = e.performance || e.webkitPerformance || e.msPerformance || e.mozPerformance;
				t.a = i
			}).call(this, i("./node_modules/webpack/buildin/global.js"))
		},
		"./src/lib/performanceTimings/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return d
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "f", (function() {
				return _
			})), i.d(t, "g", (function() {
				return m
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "d", (function() {
				return f
			})), i.d(t, "a", (function() {
				return h
			})), i.d(t, "h", (function() {
				return g
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/telemetry/helpers/sendTiming.ts"),
				s = i("./src/lib/performance.js");
			const o = "object" == typeof s.a && !!s.a.mark && !!s.a.measure && !!s.a.getEntriesByType;
			var d, l;
			! function(e) {
				e.ResponseStart = "responseStart", e.FetchStart = "fetchStart", e.HeadTagStart = "head_tag_start", e.AppHTMLStart = "app_html_start", e.AdsDotJSFetchStart = "ads_dot_js_fetch_start", e.ReduxJSONStart = "redux_json_start", e.JSDepsFetchStart = "js_deps_fetch_start", e.EntryPointStart = "entry_point_start", e.InitClientStart = "init_client_start", e.CreateRouteCompsStart = "create_route_components_start", e.ReactHydrateStart = "react_hydrate_start", e.ReactHydrateEnd = "react_hydrate_end", e.InitClientEnd = "init_client_end", e.FirstPostTitleImageLoaded = "first_post_title_image_loaded"
			}(d || (d = {})),
			function(e) {
				e.TimeToFirstByte = "Time_To_First_Byte", e.HeadTagParse = "Head_Tag_Parse", e.AppHTMLParse = "App_HTML_Parse", e.AdsDotJSFetchParse = "Ads_Dot_JS_Fetch_Parse", e.ReduxBootstrapJSONParse = "Redux_Bootstrap_JSON_Parse", e.JSDepsFetchToEntryPoint = "JS_Fetch_To_Entry_Point", e.EntryPointToInitClient = "Entry_To_Init_Client", e.InitClientPreamble = "Initailize_Client_Preamble", e.CreateRouteComponents = "Creat_Route_Components", e.ReactHydrate = "React_Hydrate", e.InitClientPostamble = "Initailize_Client_Postamble", e.NavigationToFirstPostTitleVisible = "NavigationStart_To_FirstPostTitleVisible", e.NavigationToInitClientFinished = "NavigationStart_To_InitClientFinished"
			}(l || (l = {}));
			const a = Object.keys(l).reduce((e, t) => (e[l[t]] = !0, e), {}),
				u = e => {
					o && s.a.mark(e)
				},
				c = [{
					name: l.TimeToFirstByte,
					start: d.FetchStart,
					end: d.ResponseStart
				}, {
					name: l.HeadTagParse,
					start: d.HeadTagStart,
					end: d.AppHTMLStart
				}, {
					name: l.AppHTMLParse,
					start: d.AppHTMLStart,
					end: d.AdsDotJSFetchStart
				}, {
					name: l.AdsDotJSFetchParse,
					start: d.AdsDotJSFetchStart,
					end: d.ReduxJSONStart
				}, {
					name: l.ReduxBootstrapJSONParse,
					start: d.ReduxJSONStart,
					end: d.JSDepsFetchStart
				}, {
					name: l.JSDepsFetchToEntryPoint,
					start: d.JSDepsFetchStart,
					end: d.EntryPointStart
				}, {
					name: l.EntryPointToInitClient,
					start: d.EntryPointStart,
					end: d.InitClientStart
				}, {
					name: l.InitClientPreamble,
					start: d.InitClientStart,
					end: d.CreateRouteCompsStart
				}, {
					name: l.CreateRouteComponents,
					start: d.CreateRouteCompsStart,
					end: d.ReactHydrateStart
				}, {
					name: l.ReactHydrate,
					start: d.ReactHydrateStart,
					end: d.ReactHydrateEnd
				}, {
					name: l.InitClientPostamble,
					start: d.ReactHydrateEnd,
					end: d.InitClientEnd
				}, {
					name: l.NavigationToFirstPostTitleVisible,
					start: d.FetchStart,
					end: d.FirstPostTitleImageLoaded
				}, {
					name: l.NavigationToInitClientFinished,
					start: d.FetchStart,
					end: d.InitClientEnd
				}],
				_ = e => {
					if (!o) return null;
					c.forEach(e => (e => {
						if (o) try {
							const {
								name: t,
								start: i,
								end: n
							} = e;
							s.a.measure(t, i, n)
						} catch (t) {
							0
						}
					})(e));
					const t = s.a.getEntriesByType("measure").filter(e => !!a[e.name]).reduce((e, t) => {
						const {
							name: i,
							duration: n
						} = t;
						return e[i] = Math.floor(n), e
					}, {});
					return "number" == typeof e && (t.serverDocumentLength = e), Object.keys(t).length ? t : null
				},
				m = (e, t) => {
					t && Object(r.a)(n.l.Redesign, {
						meta: e,
						data: t,
						type: "perf"
					})
				};
			var p, h;

			function f(e, t) {
				const i = function() {
					if (!s.a || !s.a.timing) return null;
					const e = s.a.timing,
						t = {
							timeToFirstByte: e.responseStart - e.requestStart,
							timeToInteractive: e.domInteractive - e.requestStart
						};
					if (s.a.getEntriesByType) {
						const e = s.a.getEntriesByType("paint");
						if (e.length) {
							const i = e.find(e => "first-contentful-paint" === e.name);
							i && (t.timeToFirstContentfulPaint = i.startTime)
						}
					}
					return t
				}();
				if (!i) return;
				const o = {
					name: e,
					isLoggedIn: t
				};
				Object(r.a)(n.l.Redesign, {
					data: i,
					meta: o,
					type: "perf"
				})
			}

			function g(e, t, i) {
				0
			}! function(e) {
				e.CommentsPage = "comments-page", e.FrontPage = "frontpage", e.Subreddit = "subreddit"
			}(p || (p = {})),
			function(e) {
				e.apiTiming = "apiTiming", e.gqlFetchTiming = "gqlFetchTiming", e.gqlNormalizationTiming = "gqlNormalizationTiming", e.gqlExperimentFetch = "gqlExperimentFetchTiming", e.serverSideRender = "serverSideRender", e.setupTiming = "setupTiming"
			}(h || (h = {}))
		},
		"./src/lib/permalinkToOverlayLocation/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/history/esm/history.js"),
				r = i("./src/lib/LRUCache/index.ts"),
				s = i("./src/reddit/constants/history.ts"),
				o = i("./src/reddit/helpers/path/index.ts");
			const d = new r.a(250);
			t.a = (e, t) => {
				let i;
				if (!(i = d.get(e + t))) {
					const r = Object(o.b)(e);
					(i = Object(n.c)(r)).state = Object.assign({}, i.state, {
						[s.a.IsOverlay]: !0,
						[s.a.ScrollOnLoad]: t
					}), d.set(e + t, i)
				}
				return i
			}
		},
		"./src/lib/permanentCookieOptions.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/constants/index.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
				const t = new Date;
				return t.setFullYear(t.getFullYear() + e), Object.assign({}, n.x, {
					expires: t
				})
			}
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return c
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js"), i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.regexp.split.js");
			const n = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				r = 1e3,
				s = 100 * r,
				o = 10 * s,
				d = 100 * o,
				l = 10 * d,
				a = 100 * l,
				u = 51;

			function c(e, t) {
				return t ? n(e.toString()) : e >= a - u ? "".concat(Math.floor(e / l), "b") : e >= l - u && e < a - u ? "".concat((e / l).toFixed(1), "b") : e >= d - u && e < l - u ? "".concat(Math.floor(e / o), "m") : e >= o - u && e < d - u ? "".concat((e / o).toFixed(1), "m") : e >= s - u && e < o - u ? "".concat(Math.floor(e / r), "k") : e >= r && e < s - u ? "".concat((e / r).toFixed(1), "k") : String(e)
			}
		},
		"./src/lib/redditId/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "c", (function() {
				return s
			})), i.d(t, "b", (function() {
				return o
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const n = /(?:t(\d+)_)?([a-z0-9]+)/;

			function r(e) {
				return parseInt(s(e), 36)
			}

			function s(e) {
				const t = n.exec(e);
				return t ? t[2] : ""
			}

			function o(e, t) {
				return "number" == typeof e ? "".concat(t, "_").concat(e.toString(36)) : "".concat(t, "_").concat(s(e))
			}
		},
		"./src/lib/reducers/addAuthentication/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/reddit/actions/session.ts");
			t.a = (e, t) => (function() {
				let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
					r = arguments.length > 1 ? arguments[1] : void 0;
				switch (r.type) {
					case n.c:
					case n.d:
						return t;
					default:
						return e(i, r)
				}
			})
		},
		"./src/lib/safeJSONParse/index.ts": function(e, t, i) {
			"use strict";

			function n(e) {
				try {
					return JSON.parse(e)
				} catch (t) {}
			}
			i.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/sample/index.ts": function(e, t, i) {
			"use strict";

			function n(e) {
				return !(e <= 0) && (e >= 100 || 100 * Math.random() <= e)
			}
			i.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/scheduler/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return s
			}));
			var n = i("./node_modules/request-idle-callback/index.js");
			class r {
				constructor(e) {
					let {
						cb: t,
						args: i
					} = e;
					this.cb = t, this.args = i, this.next = null
				}
				execute() {
					this.cb.apply(null, this.args)
				}
			}

			function s() {
				let e = null,
					t = null,
					i = null;
				const r = () => {
						null === i && (i = Object(n.requestIdleCallback)(s))
					},
					s = t => {
						let n = 0;
						for (;
							(t.timeRemaining() > n || t.didTimeout) && null !== e;) {
							const i = t.timeRemaining();
							e.execute(), e = e.next, n = i - t.timeRemaining()
						}
						i = null, null !== e && r()
					};
				return {
					enqueue(i) {
						null === e ? (e = i, t = i) : (null !== t && (t.next = i), t = i), r()
					},
					clear() {
						Object(n.cancelIdleCallback)(i), i = null, e = null
					},
					flush() {
						for (null !== i && (Object(n.cancelIdleCallback)(i), i = null); null !== e;) e.execute(), e = e.next
					}
				}
			}
		},
		"./src/lib/search/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "c", (function() {
				return l
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = i("./node_modules/decode-uri-component/index.js"),
				r = i.n(n),
				s = i("./src/lib/addQueryParams/index.ts");
			const o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					return r()(e)
				},
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					return encodeURIComponent(e)
				},
				l = (e, t, i) => {
					return Object(s.a)(e, i).replace(/(\?|&)(q=)([^&]*)/, (e, i, n) => e ? "".concat(i).concat(n).concat(t) : e)
				}
		},
		"./src/lib/sentry/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			})), i.d(t, "b", (function() {
				return l
			})), i.d(t, "e", (function() {
				return a
			})), i.d(t, "d", (function() {
				return u
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/core-js/modules/es6.symbol.js");
			var n = i("./node_modules/@sentry/integrations/esm/dedupe.js"),
				r = i("./node_modules/@sentry/integrations/esm/rewriteframes.js"),
				s = function(e, t) {
					var i = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (i[n[r]] = e[n[r]])
					}
					return i
				};
			let o;

			function d(e, t) {
				e.addEventProcessor(e => (e.settings = t, e))
			}

			function l(e) {
				return JSON.parse(JSON.stringify(e))
			}

			function a(e) {
				const {
					settings: t
				} = e;
				return s(e, ["settings"])
			}

			function u() {
				const e = /^webpack(-internal)?\:\/\/\//;
				return [new n.a, new r.a({
					iteratee: t => (t.filename && (t.filename = t.filename.replace(e, "")), t.abs_path && (t.abs_path = t.abs_path.replace(e, "")), t)
				})]
			}
			o = i("./node_modules/@sentry/browser/esm/index.js"), t.c = o
		},
		"./src/lib/timeAgo/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return u
			})), i.d(t, "e", (function() {
				return c
			})), i.d(t, "c", (function() {
				return _
			})), i.d(t, "a", (function() {
				return m
			})), i.d(t, "b", (function() {
				return p
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./src/lib/constants/index.ts");
			const s = {
					[r.cb]: r.Db,
					[r.I]: r.cb,
					[r.w]: r.I,
					[r.db]: r.w,
					[r.Yb]: r.db
				},
				o = {
					[r.Db]: e => n.fbt._({
						"*": "{number} seconds ago",
						_1: "1 second ago"
					}, [n.fbt._plural(e, "number")], {
						hk: "rJZ1O"
					}),
					[r.cb]: e => n.fbt._({
						"*": "{number} minutes ago",
						_1: "1 minute ago"
					}, [n.fbt._plural(e, "number")], {
						hk: "4yGI4N"
					}),
					[r.I]: e => n.fbt._({
						"*": "{number} hours ago",
						_1: "1 hour ago"
					}, [n.fbt._plural(e, "number")], {
						hk: "1Fr9Xx"
					}),
					[r.w]: e => n.fbt._({
						"*": "{number} days ago",
						_1: "1 day ago"
					}, [n.fbt._plural(e, "number")], {
						hk: "4lK3UT"
					}),
					[r.db]: e => n.fbt._({
						"*": "{number} months ago",
						_1: "1 month ago"
					}, [n.fbt._plural(e, "number")], {
						hk: "32PB2y"
					}),
					[r.Yb]: e => n.fbt._({
						"*": "{number} years ago",
						_1: "1 year ago"
					}, [n.fbt._plural(e, "number")], {
						hk: "S0Gnf"
					})
				},
				d = {
					[r.Db]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "1wpxaX"
					}),
					[r.cb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "3XgTJP"
					}),
					[r.I]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "2e5Zug"
					}),
					[r.w]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "1M1jhY"
					})
				},
				l = {
					[r.Db]: e => n.fbt._("{amount}s ago", [n.fbt._param("amount", String(e))], {
						hk: "g6jbi"
					}),
					[r.cb]: e => n.fbt._("{amount}m ago", [n.fbt._param("amount", String(e))], {
						hk: "3fMUq7"
					}),
					[r.I]: e => n.fbt._("{amount}h ago", [n.fbt._param("amount", String(e))], {
						hk: "1HZHiX"
					}),
					[r.w]: e => n.fbt._("{amount}d ago", [n.fbt._param("amount", String(e))], {
						hk: "3WIJYN"
					})
				},
				a = {
					[r.Db]: e => n.fbt._("{amount}s left", [n.fbt._param("amount", String(e))], {
						hk: "1ZSXLq"
					}),
					[r.cb]: e => n.fbt._("{amount}m left", [n.fbt._param("amount", String(e))], {
						hk: "1Oe8PO"
					}),
					[r.I]: e => n.fbt._("{amount}h left", [n.fbt._param("amount", String(e))], {
						hk: "1z3Oub"
					}),
					[r.w]: e => n.fbt._("{amount}d left", [n.fbt._param("amount", String(e))], {
						hk: "3d5R8E"
					})
				};

			function u(e) {
				const t = Date.now(),
					i = Math.abs(t - 1e3 * e);
				if (i < r.cb) return n.fbt._("just now", null, {
					hk: "WMsPx"
				}).toString();
				for (const n of [r.I, r.w, r.db, r.Yb])
					if (i < n) {
						const e = Math.floor(i / s[n]);
						return o[s[n]](e).toString()
					} const d = Math.floor(i / r.Yb);
				return o[r.Yb](d).toString()
			}

			function c(e) {
				const t = Date.now(),
					i = "number" == typeof e ? e : new Date(e).valueOf();
				return Math.trunc(Math.abs(t - i) / r.I)
			}

			function _(e) {
				const t = Date.now(),
					i = "number" == typeof e ? e : new Date(e).valueOf(),
					n = Math.abs(t - 1e3 * i);
				return Math.floor(n / r.w)
			}

			function m(e, t) {
				const i = Date.now(),
					o = Math.abs(i - 1e3 * e),
					a = new Date(1e3 * e),
					u = new Date(i);
				if (o < r.cb) return n.fbt._("now", null, {
					hk: "1hZvPT"
				}).toString();
				if (o < r.Xb)
					for (const n of [r.I, r.w, r.db])
						if (o < n) {
							const e = Math.floor(o / s[n]);
							return (t ? d : l)[s[n]](e).toString()
						} return a.getFullYear() !== u.getFullYear() ? a.toLocaleDateString() : new Intl.DateTimeFormat("default", {
					month: "short",
					day: "numeric"
				}).format(a)
			}

			function p(e) {
				const t = Date.now(),
					i = Math.abs(1e3 * e - t),
					o = new Date(1e3 * e),
					d = new Date(t);
				if (i < r.db)
					for (const n of [r.I, r.w, r.db])
						if (i < n) {
							const e = Math.floor(i / s[n]);
							return a[s[n]](e).toString()
						} if (o.getFullYear() !== d.getFullYear()) {
					const e = o.toLocaleDateString();
					return n.fbt._("Expires {Expiration date}", [n.fbt._param("Expiration date", e)], {
						hk: "4nE1rV"
					}).toString()
				}
				return new Intl.DateTimeFormat("default", {
					month: "short",
					day: "numeric"
				}).format(o)
			}
		},
		"./src/lib/truncateText/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			i("./node_modules/core-js/modules/es7.string.trim-right.js"), i("./node_modules/core-js/modules/es6.regexp.replace.js");
			const n = /\s*[,-:;\u2013\u2014]\s*$/;

			function r(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				if (e.length <= t || t < 0) return e;
				if ((e = e.trim().replace(/\s+/g, " ")).length <= t) return e;
				t -= i.length;
				let r = e.lastIndexOf(" ", t);
				return r = r > 0 ? r : t, e.slice(0, r).replace(n, "").trimRight() + i
			}
		},
		"./src/polyfill.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/uuid/v4.js"),
				r = i.n(n);
			const s = {},
				o = 6,
				d = r()().slice(-o);
			class l {
				constructor(e) {
					e = String(e);
					const t = "$BroadcastChannel$".concat(e, "$");
					s[t] = s[t] || [], s[t].push(this), this.name = e, this._id = t, this._closed = !1, this._mc = new MessageChannel, this._mc.port1.start(), this._mc.port2.start(), window.addEventListener("storage", e => {
						if (e.storageArea !== window.localStorage) return;
						if (!e.key || !e.newValue) return;
						if (e.key.substring(0, t.length) !== t) return;
						if (e.key.substring(t.length, t.length + o) === d) return;
						const i = JSON.parse(e.newValue);
						this._mc.port2.postMessage(i)
					})
				}
				postMessage(e) {
					if (this._closed) {
						const e = new Error;
						throw e.name = "InvalidStateError", e
					}
					const t = JSON.stringify(e),
						i = "".concat(this._id).concat(d, "$").concat(r()());
					window.localStorage.setItem(i, t), setTimeout(() => {
						window.localStorage.removeItem(i)
					}, 100), s[this._id].forEach(e => {
						e !== this && e._mc.port2.postMessage(JSON.parse(t))
					})
				}
				close() {
					if (this._closed) return;
					this._closed = !0, this._mc.port1.close(), this._mc.port2.close();
					const e = s[this._id].indexOf(this);
					s[this._id].splice(e, 1)
				}
				get onmessage() {
					return this._mc.port1.onmessage
				}
				set onmessage(e) {
					this._mc.port1.onmessage = e
				}
				get onmessageerror() {
					return () => {}
				}
				set onmessageerror(e) {}
				addEventListener(e, t, i) {
					return this._mc.port1.addEventListener(e, t, i)
				}
				removeEventListener(e, t, i) {
					return this._mc.port1.removeEventListener(e, t, i)
				}
				dispatchEvent(e) {
					return this._mc.port1.dispatchEvent(e)
				}
			}
			"undefined" != typeof window && (window.BroadcastChannel = window.BroadcastChannel || l)
		},
		"./src/reddit/actions/focusedVerticals/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return n
			})), i.d(t, "h", (function() {
				return r
			})), i.d(t, "e", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "j", (function() {
				return l
			})), i.d(t, "i", (function() {
				return a
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "a", (function() {
				return c
			})), i.d(t, "b", (function() {
				return _
			}));
			const n = "FOCUSED_VERTICAL_LOADED",
				r = "FOCUSED_VERTICAL_PENDING",
				s = "FOCUSED_VERTICAL_FAILED",
				o = "FOCUSED_VERTICAL_DATA_RESET",
				d = "FOCUSED_VERTICAL_LAST_ENV_RESET",
				l = "SHOW_DU",
				a = "HIDE_DU",
				u = 237,
				c = "community_desc_with_posts_geo",
				_ = "community_desc_with_posts_geo"
		},
		"./src/reddit/actions/otherDiscussions/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return r
			})), i.d(t, "e", (function() {
				return s
			})), i.d(t, "a", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "c", (function() {
				return l
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = i("./src/lib/constants/index.ts");
			const r = e => e.includes("/".concat(n.zb.DUPLICATES, "/")),
				s = e => e.replace("/comments/", "/duplicates/"),
				o = "OTHER_DISCUSSIONS_POSTS_FAILED",
				d = "OTHER_DISCUSSIONS_POSTS_LOADED",
				l = "OTHER_DISCUSSIONS_POSTS_PENDING"
		},
		"./src/reddit/actions/overlayEvents.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "d", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return a
			}));
			var n = i("./src/lib/makeActionCreator/index.ts");
			const r = "OVERLAY_EVENTS__MOUSE_CLICK",
				s = "OVERLAY_EVENTS__ESCAPE_PRESSED",
				o = "OVERLAY_EVENTS__WINDOW_RESIZED",
				d = Object(n.a)(s),
				l = Object(n.a)(r),
				a = Object(n.a)(o)
		},
		"./src/reddit/actions/publicAccessNetwork/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "D", (function() {
				return r
			})), i.d(t, "X", (function() {
				return s
			})), i.d(t, "W", (function() {
				return o
			})), i.d(t, "N", (function() {
				return d
			})), i.d(t, "v", (function() {
				return l
			})), i.d(t, "w", (function() {
				return a
			})), i.d(t, "E", (function() {
				return u
			})), i.d(t, "G", (function() {
				return c
			})), i.d(t, "F", (function() {
				return _
			})), i.d(t, "s", (function() {
				return m
			})), i.d(t, "t", (function() {
				return p
			})), i.d(t, "x", (function() {
				return h
			})), i.d(t, "L", (function() {
				return f
			})), i.d(t, "K", (function() {
				return g
			})), i.d(t, "M", (function() {
				return b
			})), i.d(t, "y", (function() {
				return w
			})), i.d(t, "J", (function() {
				return y
			})), i.d(t, "u", (function() {
				return v
			})), i.d(t, "H", (function() {
				return T
			})), i.d(t, "I", (function() {
				return S
			})), i.d(t, "C", (function() {
				return E
			})), i.d(t, "A", (function() {
				return F
			})), i.d(t, "T", (function() {
				return I
			})), i.d(t, "B", (function() {
				return O
			})), i.d(t, "b", (function() {
				return j
			})), i.d(t, "r", (function() {
				return B
			})), i.d(t, "z", (function() {
				return x
			})), i.d(t, "R", (function() {
				return R
			})), i.d(t, "m", (function() {
				return k
			})), i.d(t, "l", (function() {
				return C
			})), i.d(t, "d", (function() {
				return N
			})), i.d(t, "e", (function() {
				return P
			})), i.d(t, "f", (function() {
				return L
			})), i.d(t, "g", (function() {
				return A
			})), i.d(t, "j", (function() {
				return D
			})), i.d(t, "c", (function() {
				return G
			})), i.d(t, "h", (function() {
				return M
			})), i.d(t, "k", (function() {
				return U
			})), i.d(t, "p", (function() {
				return q
			})), i.d(t, "q", (function() {
				return H
			})), i.d(t, "Y", (function() {
				return V
			})), i.d(t, "V", (function() {
				return W
			})), i.d(t, "U", (function() {
				return z
			})), i.d(t, "a", (function() {
				return K
			})), i.d(t, "P", (function() {
				return Q
			})), i.d(t, "i", (function() {
				return J
			})), i.d(t, "o", (function() {
				return Y
			})), i.d(t, "n", (function() {
				return X
			})), i.d(t, "O", (function() {
				return Z
			})), i.d(t, "Q", (function() {
				return $
			})), i.d(t, "S", (function() {
				return ee
			}));
			var n = i("./src/config.ts");
			const r = "RPAN__REMOVE_STREAM_FROM_HISTORY",
				s = "RPAN__VISIT_STREAM",
				o = -1,
				d = "RPAN__RESET_HISTORY",
				l = "RPAN__RECEIVE_GLOBAL_CONFIG",
				a = "RPAN__RECEIVE_SUBREDDIT_CONFIG",
				u = "RPAN__REQUEST_CONFIG",
				c = "RPAN__REQUEST_CONFIG_FAILED",
				_ = "RPAN__REQUEST_CONFIG_CANCELED",
				m = "RPAN__RECEIVE_HLS_STREAM_ENDED",
				p = "RPAN__RECEIVE_HLS_STREAM_REMOVED",
				h = "RPAN__RECEIVE_STREAM_MODEL",
				f = "RPAN__REQUEST_STREAM_MODEL",
				g = "RPAN__REQUEST_STREAM_FAILED",
				b = "RPAN__REQUEST_STREAM_MODEL_BATCH",
				w = "RPAN__RECEIVE_STREAM_MODEL_BATCH",
				y = "RPAN__REQUEST_STREAM_BATCH_FAILED",
				v = "RPAN__RECEIVE_RECOMMENDED_VIEWER_SUBREDDITS",
				T = "RPAN__REQUEST_RECOMMENDED_VIEWER_SUBREDDITS",
				S = "RPAN__REQUEST_RECOMMENDED_VIEWER_SUBREDDITS_FAILED",
				E = "RPAN__RECEIVE_VOTE",
				F = "RPAN__RECEIVE_THEATER_SETTINGS",
				I = "RPAN__UPDATE_VIDEO_TIMESTAMP",
				O = "RPAN__RECEIVE_USER_SETTINGS",
				j = "RPAN__BATCH_OP",
				B = "RPAN__RECEIVE_DISCOVERY_UNIT_THUMBNAILS",
				x = "RPAN__RECEIVE_STREAM_PREVIEWS",
				R = "RPAN__SEND_HEARTBEAT",
				k = 0,
				C = 9999,
				N = 30,
				P = 6,
				L = 5,
				A = 15,
				D = 5,
				G = 57,
				M = 60,
				U = 7e3,
				q = 1e3,
				H = 400,
				V = 1e3,
				W = "https://watch.redd.it/",
				z = ".m3u8",
				K = 3e4,
				Q = ("".concat(n.a.assetPath, "/img/trending-placeholder.png"), "home"),
				J = 3,
				Y = 500,
				X = 2e3,
				Z = "".concat(n.a.redditUrl, "/r/").concat("pan"),
				$ = "https://www.redditinc.com/policies/broadcasting-content-policy",
				ee = ("".concat(n.a.assetPath, "/img/rpan-broadcast-over.png"), "".concat(n.a.assetPath, "/img/rpan-broadcast-over-thumbnail.png"))
		},
		"./src/reddit/actions/session.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return s
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "b", (function() {
				return u
			})), i.d(t, "g", (function() {
				return m
			})), i.d(t, "h", (function() {
				return h
			}));
			var n = i("./src/lib/makeActionCreator/index.ts"),
				r = i("./src/reddit/endpoints/session/index.ts");
			const s = "SESSION__USER_AUTHENTICATED",
				o = "SESSION__USER_LOGGED_OUT",
				d = "SESSION__USER_REAUTHENTICATED",
				l = "SESSION__USER_REFRESH_FAILED",
				a = "SESSION__LOAT_RECEIVED",
				u = "SESSION__LOAT_REFRESHED",
				c = (Object(n.a)(s), Object(n.a)(d)),
				_ = Object(n.a)(o),
				m = (Object(n.a)(l), () => async (e, t, i) => {
					let {
						apiContext: n
					} = i;
					const s = t().user.session;
					if (s) {
						const t = await Object(r.b)(n(), s);
						if (t.ok) {
							const i = t.body;
							i.unsafeLoggedOut ? (s.unsafeLoggedOut || e(_()), e(p(i))) : e(c(i))
						}
					}
				}),
				p = (Object(n.a)(a), Object(n.a)(u)),
				h = () => async (e, t, i) => {
					let {
						apiContext: n
					} = i;
					await Object(r.a)(n())
				}
		},
		"./src/reddit/components/RichTextEditor/RTEState/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return u
			})), i.d(t, "a", (function() {
				return f
			}));
			var n = i("./node_modules/lodash/isEqual.js"),
				r = i.n(n),
				s = i("./node_modules/uuid/v4.js"),
				o = i.n(s),
				d = i("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				l = i("./src/reddit/models/RichTextJson/index.ts");
			let a;
			const u = e => a = e,
				c = () => {
					if (!a) throw new Error("DraftHelpers must be initialized!");
					return a
				},
				_ = () => o()().slice(-6),
				m = /\S/,
				p = e => e && e.document && Array.isArray(e.document);
			class h {
				static hasContent(e) {
					if (e.isBound) {
						return e.editorState.getCurrentContent().getBlockMap().some(e => !!e && (Object(d.t)(e.getType()) || Object(d.v)(e.getType()) || m.test(e.getText())))
					}
					return !Object(l.F)(e.initialRTJSON)
				}
				static getTextLength(e) {
					return e.isBound ? e.editorState.getCurrentContent().getPlainText().length : 0
				}
				static getRawText(e) {
					if (e.isBound) return e.editorState.getCurrentContent().getPlainText()
				}
				static isContentEqual(e, t) {
					if (e.isBound && t.isBound) {
						return e.editorState.getCurrentContent() === t.editorState.getCurrentContent()
					}
					return !e.isBound && !t.isBound && r()(e.initialRTJSON, t.initialRTJSON)
				}
				static toRichTextJSON(e, t) {
					if (e.isBound) {
						const i = e.editorState.getCurrentContent();
						return {
							document: c().draftToRTFJson(i, t)
						}
					}
					return e.initialRTJSON
				}
				static getPendingThumbnailUploads(e, t) {
					if (e.isBound) {
						const {
							editorState: i
						} = e;
						return c().getPendingThumbnailUploads(i.getCurrentContent(), t)
					}
				}
				static getMediaCount(e) {
					if (e.isBound) {
						const {
							editorState: t
						} = e;
						return c().getMediaCount(t.getCurrentContent())
					}
					return {
						gifvideo: 0,
						image: 0,
						video: 0,
						total: 0
					}
				}
				static isAllMediaUploaded(e, t) {
					if (e.isBound) {
						const i = e.editorState.getCurrentContent();
						return c().isAllMediaUploaded(i, t)
					}
					return !0
				}
			}
			h.createInitial = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return p(e) ? {
					isBound: !1,
					editorKey: _(),
					initialRTJSON: e,
					mediaMetadataMap: t
				} : (console.warn("invalid RTJSON", e), h.createInitial())
			};
			const f = h
		},
		"./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts": function(e, t, i) {
			"use strict";
			i.d(t, "k", (function() {
				return n
			})), i.d(t, "g", (function() {
				return r
			})), i.d(t, "r", (function() {
				return o
			})), i.d(t, "n", (function() {
				return d
			})), i.d(t, "m", (function() {
				return l
			})), i.d(t, "h", (function() {
				return a
			})), i.d(t, "i", (function() {
				return u
			})), i.d(t, "s", (function() {
				return c
			})), i.d(t, "e", (function() {
				return _
			})), i.d(t, "p", (function() {
				return m
			})), i.d(t, "f", (function() {
				return p
			})), i.d(t, "q", (function() {
				return h
			})), i.d(t, "l", (function() {
				return f
			})), i.d(t, "v", (function() {
				return g
			})), i.d(t, "j", (function() {
				return b
			})), i.d(t, "u", (function() {
				return w
			})), i.d(t, "a", (function() {
				return y
			})), i.d(t, "o", (function() {
				return v
			})), i.d(t, "t", (function() {
				return T
			})), i.d(t, "b", (function() {
				return S
			})), i.d(t, "d", (function() {
				return E
			})), i.d(t, "c", (function() {
				return F
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = {
					BOLD: "BOLD",
					ITALIC: "ITALIC",
					SPOILER: "SPOILER",
					STRIKETHROUGH: "STRIKETHROUGH",
					SUBSCRIPT: "SUBSCRIPT",
					SUPERSCRIPT: "SUPERSCRIPT",
					UNDERLINE: "UNDERLINE",
					MONOSPACE: "MONOSPACE",
					HIGHLIGHT: "HIGHLIGHT"
				},
				r = {
					H1: "header-one",
					H2: "header-two",
					H3: "header-three",
					H4: "header-four",
					H5: "header-five",
					H6: "header-six"
				},
				s = new Set(["header-one", "header-two", "header-three", "header-four", "header-five", "header-six"]),
				o = e => s.has(e),
				d = "unstyled",
				l = {
					"header-one": 1,
					"header-two": 2,
					"header-three": 3,
					"header-four": 4,
					"header-five": 5,
					"header-six": 6
				},
				a = {
					1: "header-one",
					2: "header-two",
					3: "header-two",
					4: "header-two",
					5: "header-two",
					6: "header-two"
				},
				u = {
					ORDERED: "ordered-list-item",
					UNORDERED: "unordered-list-item"
				},
				c = e => "ordered-list-item" === e || "unordered-list-item" === e,
				_ = "blockquote",
				m = e => e === _,
				p = "code-block",
				h = e => e === p,
				f = "table-cell",
				g = e => e === f,
				b = "media-caption",
				w = e => e === b,
				y = "atomic",
				v = e => e === y,
				T = e => v(e) || w(e),
				S = Object.assign({
					CODE_BLOCK: p,
					BLOCK_QUOTE: _,
					ATOMIC_BLOCK: y,
					ORDERED_LIST: u.ORDERED,
					TABLE_CELL: f,
					UNORDERED_LIST: u.UNORDERED,
					UNSTYLED: d,
					MEDIA_CAPTION: b
				}, r),
				E = [d, _, f, u.ORDERED, u.UNORDERED],
				F = [d, _, u.ORDERED, u.UNORDERED]
		},
		"./src/reddit/constants/adEvents.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e[e.Impression = 1] = "Impression", e[e.Click = 2] = "Click", e[e.CommentsView = 3] = "CommentsView", e[e.Upvote = 4] = "Upvote", e[e.Downvote = 5] = "Downvote", e[e.CommentSubmitted = 6] = "CommentSubmitted", e[e.ViewableImpression = 7] = "ViewableImpression", e[e.CommentUpvote = 8] = "CommentUpvote", e[e.CommentDownvote = 9] = "CommentDownvote", e[e.VendorFullyInView = 10] = "VendorFullyInView", e[e.VendorFullyInViewSeconds5 = 11] = "VendorFullyInViewSeconds5", e[e.VendorFullyInViewSeconds15 = 12] = "VendorFullyInViewSeconds15", e[e.GroupMViewable = 13] = "GroupMViewable", e[e.Unload = 14] = "Unload", e[e.VideoViewableImpression = 100] = "VideoViewableImpression", e[e.VideoFullyViewableImpression = 101] = "VideoFullyViewableImpression", e[e.VideoPlayedWithSound = 102] = "VideoPlayedWithSound", e[e.VideoPlayedExpanded = 103] = "VideoPlayedExpanded", e[e.VideoWatched25 = 104] = "VideoWatched25", e[e.VideoWatched50 = 105] = "VideoWatched50", e[e.VideoWatched75 = 106] = "VideoWatched75", e[e.VideoWatched95 = 107] = "VideoWatched95", e[e.VideoWatched100 = 108] = "VideoWatched100", e[e.VideoStarted = 109] = "VideoStarted", e[e.VideoWatchedSeconds3 = 110] = "VideoWatchedSeconds3", e[e.VideoWatchedSeconds5 = 111] = "VideoWatchedSeconds5", e[e.VideoWatchedSeconds10 = 112] = "VideoWatchedSeconds10", e[e.VideoGroupMViewable = 113] = "VideoGroupMViewable", e[e.VideoVendorFullyViewable50 = 114] = "VideoVendorFullyViewable50", e[e.MRCVideoViewableImpression = 115] = "MRCVideoViewableImpression"
				}(n || (n = {}))
		},
		"./src/reddit/constants/blade.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "a", (function() {
				return l
			})), i.d(t, "i", (function() {
				return a
			})), i.d(t, "h", (function() {
				return c
			})), i.d(t, "g", (function() {
				return _
			})), i.d(t, "f", (function() {
				return m
			})), i.d(t, "j", (function() {
				return p
			})), i.d(t, "e", (function() {
				return f
			}));
			var n, r, s = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./src/config.ts");
			! function(e) {
				e.NameAndIcon = "nameAndIcon", e.Banner = "banner", e.Global = "global"
			}(n || (n = {})),
			function(e) {
				e.Appearance = "community_appearance", e.Main = "community_mod_tools", e.MenuLinks = "menu_links", e.PostFlairManagement = "postflairmanagement", e.Structure = "community_structure", e.UserFlairManagement = "userflairmanagement", e.Widgets = "community_widgets"
			}(r || (r = {}));
			const d = {
					global: "theme",
					nameAndIcon: "name_icon",
					banner: "banner",
					menu: "menu",
					post: "posts",
					exportImport: "export_import",
					menuLinks: "menu_links",
					widgets: "widgets",
					addWidget: "add_widget",
					editWidget: "edit_widget",
					newWidget: "new_widget",
					reorderWidgets: "reorder_widgets",
					main: "main",
					css: "css",
					idCard: "id_card"
				},
				l = {
					global: r.Appearance,
					nameAndIcon: r.Appearance,
					banner: r.Appearance,
					menu: r.Appearance,
					post: r.Appearance,
					exportImport: r.Appearance,
					menuLinks: r.Appearance,
					widgets: r.Appearance,
					addWidget: r.Widgets,
					editWidget: r.Widgets,
					newWidget: r.Widgets,
					reorderWidgets: r.Widgets,
					main: r.Main,
					css: r.Appearance,
					idCard: "id_card"
				},
				a = {
					button: "button_widget",
					calendar: "calendar_widget",
					custom: "custom_widget",
					image: "image_widget",
					"id-card": "id_card",
					moderators: "moderators_widget",
					"community-list": "community_list_widget",
					"subreddit-rules": "rules_widget",
					textarea: "text_widget",
					"post-flair": "post_flair_widget"
				};
			var u;
			! function(e) {
				e.Add = "add", e.AssignOwnOff = "assign_own_off", e.AssignOwnOn = "assign_own_on", e.Edit = "edit", e.EnableOff = "enable_off", e.EnableOn = "enable_on", e.Remove = "remove", e.Reorder = "reorder"
			}(u || (u = {}));
			const c = {
					primaryColor: r.Appearance,
					highlightColor: r.Appearance,
					backgroundColor: r.Appearance,
					postTitleColor: r.Appearance,
					postBackgroundColor: r.Appearance,
					postDownvoteCountColor: r.Appearance,
					postUpvoteCountColor: r.Appearance,
					bannerBackgroundColor: r.Appearance,
					bannerOverlayColor: r.Appearance,
					menuBackgroundColor: r.Appearance,
					menuLinkColorActive: r.Appearance,
					menuLinkColorInactive: r.Appearance,
					menuLinkColorHover: r.Appearance,
					mobileKeyColor: r.Appearance,
					sidebarWidgetBackgroundColor: r.Widgets,
					sidebarWidgetHeaderColor: r.Widgets,
					submenuBackgroundColor: r.Appearance,
					buttonWidgetButtonColor: r.Widgets,
					buttonWidgetTextColor: r.Widgets,
					buttonWidgetFillColor: r.Widgets,
					buttonWidgetHoverButtonColor: r.Widgets,
					buttonWidgetHoverTextColor: r.Widgets,
					buttonWidgetHoverFillColor: r.Widgets
				},
				_ = {
					primaryColor: d.global,
					highlightColor: d.global,
					backgroundColor: d.global,
					postTitleColor: d.post,
					postBackgroundColor: d.post,
					postDownvoteCountColor: d.post,
					postUpvoteCountColor: d.post,
					bannerBackgroundColor: d.banner,
					bannerOverlayColor: d.banner,
					menuBackgroundColor: d.menu,
					menuLinkColorActive: d.menu,
					menuLinkColorInactive: d.menu,
					menuLinkColorHover: d.menu,
					mobileKeyColor: void 0,
					sidebarWidgetBackgroundColor: d.widgets,
					sidebarWidgetHeaderColor: d.widgets,
					submenuBackgroundColor: d.menu,
					buttonWidgetButtonColor: d.widgets,
					buttonWidgetTextColor: d.widgets,
					buttonWidgetFillColor: d.widgets,
					buttonWidgetHoverButtonColor: d.widgets,
					buttonWidgetHoverTextColor: d.widgets,
					buttonWidgetHoverFillColor: d.widgets
				},
				m = {
					main: () => s.fbt._("Back to mod tools", null, {
						hk: "1guMLb"
					}),
					global: () => s.fbt._("Color theme", null, {
						hk: "1I2aAx"
					}),
					banner: () => s.fbt._("Banner", null, {
						hk: "2dndoU"
					}),
					menu: () => s.fbt._("Menu", null, {
						hk: "2Pk5Cr"
					}),
					nameAndIcon: () => s.fbt._("Name & icon", null, {
						hk: "35BKW5"
					}),
					post: () => s.fbt._("Posts", null, {
						hk: "2lz5Zh"
					}),
					exportImport: () => s.fbt._("Manage themes", null, {
						hk: "3JIztr"
					}),
					widgets: () => s.fbt._("Sidebar widgets", null, {
						hk: "1qjncj"
					}),
					addWidget: () => s.fbt._("Add widget", null, {
						hk: "43u3IF"
					}),
					newWidget: () => s.fbt._("New widget", null, {
						hk: "2cXd2M"
					}),
					editWidget: () => s.fbt._("Edit widget", null, {
						hk: "1ZiXVl"
					}),
					menuLinks: () => s.fbt._("Menu links", null, {
						hk: "3SqTA5"
					}),
					css: () => "",
					reorderWidgets: () => "",
					idCard: () => ""
				},
				p = {
					button: () => s.fbt._("Button", null, {
						hk: "3SHU34"
					}),
					"subreddit-rules": () => s.fbt._("Rules", null, {
						hk: "7pEZ"
					}),
					textarea: () => s.fbt._("Textarea", null, {
						hk: "3cLKEP"
					}),
					image: () => s.fbt._("Images", null, {
						hk: "1NsC47"
					}),
					"community-list": () => s.fbt._("Community list", null, {
						hk: "13K5M4"
					}),
					calendar: () => s.fbt._("Calendar", null, {
						hk: "4nqD1o"
					}),
					custom: () => s.fbt._("Custom", null, {
						hk: "4sag5Y"
					}),
					"id-card": () => s.fbt._("ID Card", null, {
						hk: "3RSm35"
					}),
					"post-flair": () => s.fbt._("Post flair", null, {
						hk: "NclBb"
					})
				},
				h = e => "".concat(o.a.redditHelpUrl.modHelpCenter, "hc/en-us/articles/").concat(e),
				f = {
					exportImport: h("360008722771-Customize-Appearance-overview"),
					global: h("360008551632-Color-theme"),
					nameAndIcon: h("360008805651-Name-icon"),
					banner: h("360010112892-Banner"),
					menu: h("360010387851-Menu"),
					post: h("360010192832-Posts"),
					menuLinks: h("360010442571-Menu-Links"),
					widgets: h("360010364372-Sidebar-Widgets")
				}
		},
		"./src/reddit/constants/categories.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "a", (function() {
				return d
			})), i.d(t, "d", (function() {
				return u
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n, r = i("./src/reddit/helpers/name/index.ts");
			! function(e) {
				e.Advice = "advice", e.Animals = "animals", e.Art = "art", e.DIY = "dIY", e.Electronics = "electronics", e.Entertainment = "entertainment", e.Fashion = "fashion", e.Food = "food", e.Funny = "funny", e.Gaming = "gaming", e.Health = "health", e.Memes = "memes", e.Music = "music", e.News = "news", e.Outdoors = "outdoors", e.Photography = "photography", e.PicsAndGifs = "picsAndGifs", e.Relationships = "relationships", e.Science = "science", e.Sports = "sports", e.Tv = "tv", e.Tech = "tech", e.Travel = "travel", e.VideoGames = "videoGames", e.Videos = "videos", e.Vroom = "vroom", e.Writing = "writing"
			}(n || (n = {}));
			const s = e => {
					let t = "";
					for (let i = 0; i < e.length; i++) t += e[i], i < e.length - 1 && (t += "+");
					return t
				},
				o = e => "/r/".concat(s(e), "/"),
				d = ["#FAAF2A", "#96DE50", "#F9862D", "#2EA1EA", "#297ACA", "#4DCF65", "#96DE50", "#F9862D", "#FAAF2A", "#297ACA", "#2EA1EA", "#2EA1EA", "#37D2BB", "#4DCF65", "#297ACB", "#96DE50", "#F9862D", "#FAAF2A", "#297ACA", "#2EA1EA", "#297ACA", "#37D2BB", "#96DE50", "#37D2BB", "#4DCF65", "#37D2BB", "#F9862D"],
				l = /\s/g,
				a = /&/g,
				u = e => e ? Object(r.f)(e).replace(l, "_").replace(a, "and") : ""
		},
		"./src/reddit/constants/chat.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return n
			})), i.d(t, "f", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return o
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			}));
			const n = {
				public: "room_public",
				private: "room_private"
			};
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			const s = 140,
				o = 30,
				d = 10,
				l = 500;
			var a;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(a || (a = {}))
		},
		"./src/reddit/constants/colors.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return s
			}));
			var n = i("./node_modules/polished/dist/polished.es.js");
			const r = {
					admin: "#EA0027",
					adminEmeritus: "#BE1337",
					alienblue: "#0079D3",
					approved: "#46D160",
					black: "#000000",
					chat: "#000000",
					dayModeActionIcon: "#878A8C",
					defaultFlair: "#DADADA",
					downvote: "#7193FF",
					gold: "#DDBD37",
					info: "#FFF7E6",
					locked: "#FFD635",
					lightboxHeaderBg: "#030303",
					lightboxHeaderText: "#D7DADC",
					moderator: "#75D377",
					notice: "#FF8617",
					nsfw: "#FF585B",
					op: "#24A0ED",
					orangered: "#FF4500",
					overlayBackground: Object(n.g)("#1c1c1c", .9),
					overlayReportFlow: Object(n.g)("#1a1a1b", .6),
					quarantine: "#FFB000",
					removed: "#FF585B",
					reported: "#FFB000",
					restricted: "#0DD3BB",
					snoo: "#FF4500",
					spoiler: "#000000",
					tooltip: "#373C3F",
					transparent: "#00000000",
					twitter: "#1DA1F2",
					upvote: "#FF4500",
					warning: "#EA0027",
					white: "#FFFFFF"
				},
				s = "transparent"
		},
		"./src/reddit/constants/comments.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Comment = "comment", e.MoreComments = "moreComments", e.ContinueThread = "continueThread"
				}(n || (n = {}))
		},
		"./src/reddit/constants/covid.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			})), i.d(t, "a", (function() {
				return o
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./src/reddit/models/Live/index.ts");
			const s = ["coronavirus", "covid", "cv19", "pandemic"],
				o = {
					id: "COVID_SEARCH",
					icon: r.a.Snoo,
					title: n.fbt._("Stay informed", null, {
						hk: "3HKOH"
					}),
					description: n.fbt._("To get the latest updates on COVID-19 and information on how to stay safe and healthy, visit the Centers for Disease Control and Prevention (CDC).", null, {
						hk: "2glecH"
					}),
					url: "https://www.cdc.gov/",
					callToAction: n.fbt._("Visit CDC.gov", null, {
						hk: "2hVXRi"
					}),
					maxImpressionsCount: Number.MAX_SAFE_INTEGER,
					iconUrl: null,
					experimentName: null
				}
		},
		"./src/reddit/constants/experiments.ts": function(e, t, i) {
			"use strict";
			i.d(t, "mc", (function() {
				return n
			})), i.d(t, "m", (function() {
				return r
			})), i.d(t, "Rb", (function() {
				return s
			})), i.d(t, "lc", (function() {
				return o
			})), i.d(t, "bc", (function() {
				return d
			})), i.d(t, "o", (function() {
				return l
			})), i.d(t, "n", (function() {
				return a
			})), i.d(t, "qb", (function() {
				return u
			})), i.d(t, "Ib", (function() {
				return c
			})), i.d(t, "Bb", (function() {
				return _
			})), i.d(t, "Cb", (function() {
				return m
			})), i.d(t, "Fb", (function() {
				return p
			})), i.d(t, "Gb", (function() {
				return h
			})), i.d(t, "Hb", (function() {
				return f
			})), i.d(t, "r", (function() {
				return g
			})), i.d(t, "F", (function() {
				return b
			})), i.d(t, "hb", (function() {
				return w
			})), i.d(t, "ib", (function() {
				return y
			})), i.d(t, "jb", (function() {
				return v
			})), i.d(t, "Jb", (function() {
				return T
			})), i.d(t, "Yb", (function() {
				return S
			})), i.d(t, "Zb", (function() {
				return E
			})), i.d(t, "Q", (function() {
				return F
			})), i.d(t, "P", (function() {
				return I
			})), i.d(t, "O", (function() {
				return O
			})), i.d(t, "t", (function() {
				return j
			})), i.d(t, "ac", (function() {
				return B
			})), i.d(t, "E", (function() {
				return x
			})), i.d(t, "D", (function() {
				return R
			})), i.d(t, "qc", (function() {
				return k
			})), i.d(t, "p", (function() {
				return C
			})), i.d(t, "Wb", (function() {
				return N
			})), i.d(t, "lb", (function() {
				return P
			})), i.d(t, "nb", (function() {
				return L
			})), i.d(t, "mb", (function() {
				return A
			})), i.d(t, "kb", (function() {
				return D
			})), i.d(t, "ob", (function() {
				return G
			})), i.d(t, "sc", (function() {
				return M
			})), i.d(t, "G", (function() {
				return U
			})), i.d(t, "c", (function() {
				return q
			})), i.d(t, "d", (function() {
				return H
			})), i.d(t, "q", (function() {
				return V
			})), i.d(t, "R", (function() {
				return W
			})), i.d(t, "k", (function() {
				return z
			})), i.d(t, "Xb", (function() {
				return K
			})), i.d(t, "N", (function() {
				return Q
			})), i.d(t, "tc", (function() {
				return J
			})), i.d(t, "B", (function() {
				return Y
			})), i.d(t, "Z", (function() {
				return X
			})), i.d(t, "cb", (function() {
				return Z
			})), i.d(t, "C", (function() {
				return $
			})), i.d(t, "s", (function() {
				return ee
			})), i.d(t, "g", (function() {
				return te
			})), i.d(t, "h", (function() {
				return ie
			})), i.d(t, "bb", (function() {
				return ne
			})), i.d(t, "ab", (function() {
				return re
			})), i.d(t, "S", (function() {
				return se
			})), i.d(t, "Eb", (function() {
				return oe
			})), i.d(t, "Y", (function() {
				return de
			})), i.d(t, "H", (function() {
				return le
			})), i.d(t, "V", (function() {
				return ae
			})), i.d(t, "W", (function() {
				return ue
			})), i.d(t, "Tb", (function() {
				return ce
			})), i.d(t, "pb", (function() {
				return _e
			})), i.d(t, "f", (function() {
				return me
			})), i.d(t, "X", (function() {
				return pe
			})), i.d(t, "Sb", (function() {
				return he
			})), i.d(t, "xc", (function() {
				return ge
			})), i.d(t, "rb", (function() {
				return Ee
			})), i.d(t, "sb", (function() {
				return Fe
			})), i.d(t, "pc", (function() {
				return Be
			})), i.d(t, "u", (function() {
				return xe
			})), i.d(t, "oc", (function() {
				return Re
			})), i.d(t, "Ub", (function() {
				return Ce
			})), i.d(t, "zb", (function() {
				return Ne
			})), i.d(t, "gc", (function() {
				return Pe
			})), i.d(t, "v", (function() {
				return Le
			})), i.d(t, "Pb", (function() {
				return Ae
			})), i.d(t, "Mb", (function() {
				return De
			})), i.d(t, "Nb", (function() {
				return Me
			})), i.d(t, "Db", (function() {
				return Ue
			})), i.d(t, "Ob", (function() {
				return qe
			})), i.d(t, "M", (function() {
				return ze
			})), i.d(t, "Qb", (function() {
				return Qe
			})), i.d(t, "dc", (function() {
				return Je
			})), i.d(t, "ec", (function() {
				return Ye
			})), i.d(t, "nc", (function() {
				return Ze
			})), i.d(t, "Kb", (function() {
				return $e
			})), i.d(t, "gb", (function() {
				return et
			})), i.d(t, "z", (function() {
				return tt
			})), i.d(t, "fc", (function() {
				return it
			})), i.d(t, "K", (function() {
				return nt
			})), i.d(t, "J", (function() {
				return rt
			})), i.d(t, "rc", (function() {
				return st
			})), i.d(t, "w", (function() {
				return ot
			})), i.d(t, "ub", (function() {
				return lt
			})), i.d(t, "wb", (function() {
				return at
			})), i.d(t, "vb", (function() {
				return ut
			})), i.d(t, "tb", (function() {
				return ct
			})), i.d(t, "xb", (function() {
				return _t
			})), i.d(t, "uc", (function() {
				return pt
			})), i.d(t, "L", (function() {
				return ht
			})), i.d(t, "a", (function() {
				return ft
			})), i.d(t, "b", (function() {
				return gt
			})), i.d(t, "x", (function() {
				return bt
			})), i.d(t, "l", (function() {
				return yt
			})), i.d(t, "cc", (function() {
				return vt
			})), i.d(t, "T", (function() {
				return Tt
			})), i.d(t, "vc", (function() {
				return St
			})), i.d(t, "I", (function() {
				return Et
			})), i.d(t, "fb", (function() {
				return Ft
			})), i.d(t, "y", (function() {
				return Ot
			})), i.d(t, "j", (function() {
				return jt
			})), i.d(t, "U", (function() {
				return Bt
			})), i.d(t, "Lb", (function() {
				return xt
			})), i.d(t, "A", (function() {
				return Rt
			})), i.d(t, "Vb", (function() {
				return kt
			})), i.d(t, "yb", (function() {
				return Ct
			})), i.d(t, "i", (function() {
				return Nt
			})), i.d(t, "eb", (function() {
				return Pt
			})), i.d(t, "e", (function() {
				return At
			})), i.d(t, "db", (function() {
				return Dt
			})), i.d(t, "wc", (function() {
				return Gt
			})), i.d(t, "Ab", (function() {
				return Mt
			})), i.d(t, "ic", (function() {
				return Ut
			})), i.d(t, "hc", (function() {
				return qt
			})), i.d(t, "jc", (function() {
				return Ht
			})), i.d(t, "kc", (function() {
				return Vt
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = "typeahead_redesign",
				r = "categories_entrypoint_redesign",
				s = "rails_search_results_follow_button",
				o = "trends_all_platforms",
				d = "subreddit_top_content",
				l = "chat_posts_rollout_web",
				a = "chat_posts_holdout",
				u = "guest_survey_1",
				c = "desktop_seo_post_v2_truncate",
				_ = "mux_sampling_a",
				m = "mux_sampling_b",
				p = "desktop_seo_post_v2_comment_depth",
				h = "desktop_seo_post_v2_declutter",
				f = "desktop_seo_post_v2_id_card",
				g = "collapse_pinned_comments",
				b = "d2x_shell_render_mitigation",
				w = "gold_extended_awards_tooltip",
				y = "d2x_rpan_award_live_preview",
				v = "d2x_gold_subreddit_powerups",
				T = "rpan_entry_point",
				S = "streaming_subreddit_integration",
				E = "streaming_ui_refresh_viewer",
				F = "desktop_guest_exp_top_posts",
				I = "desktop_guest_exp_post_height",
				O = "desktop_frontpage_signup_v1",
				j = "create_polls_painted_door",
				B = "subreddit_mention_d2x",
				x = "d2x_gql_subreddit_page",
				R = "d2x_gql_subreddit_more_posts",
				k = "up_and_coming_leaderboard",
				C = "web_chat_simple_reply",
				N = "d2x_server_load_listing_below",
				P = "guest_post_page_null_self_text",
				L = "guest_post_page_self_text",
				A = "guest_post_page_qa_desc",
				D = "guest_post_page_long_titles",
				G = "guest_post_page_short_titles",
				M = "desktop_video_buffer_reduction",
				U = "d2x_sso",
				q = "ae_crisis_text_line_v1",
				H = "ae_report_user_profile",
				V = "d2x_client_tracing",
				W = "desktop_user_moderation_prompts",
				z = "d2x_best_sort_popular",
				K = "snoovatar_d2x_embed",
				Q = "d2x_descriptive_alt_text",
				J = "viewer_feed_the_meter",
				Y = "d2x_ads_card_view_holdout",
				X = "econ_highlight_tags_web",
				Z = "d2x_edit_profile_images_inline",
				$ = "d2x_comments_page_ads",
				ee = "d2x_comment_box_design",
				te = "d2x_avatar_in_comments_loggedin",
				ie = "d2x_avatar_in_comments_loggedout",
				ne = "econ_new_user_targeted_offer",
				re = "econ_lapsed_user_targeted_offer",
				se = "down_to_chat_kill_switch_web",
				oe = "post_level_crowd_control",
				de = "econ_comment_highlight_animation_web",
				le = "d2x_sso_settings",
				ae = "econ_web_awards_plaque",
				ue = "econ_karma_award_score",
				ce = "rpan_subreddit_id_web2x",
				_e = "guest_d2x_subreddit_subreddit_links_user",
				me = "d2x_announcement_tool_v2",
				pe = "econ_award_sheet_v2_web",
				he = "recaptcha_enterprise";
			var fe;
			! function(e) {
				e.Control1 = "control_1", e.Control2 = "control_2"
			}(fe || (fe = {}));
			const ge = e => e === fe.Control1 || e === fe.Control2;
			var be, we, ye, ve, Te, Se, Ee, Fe, Ie, Oe, je, Be, xe, Re, ke, Ce, Ne, Pe, Le, Ae, De, Ge, Me, Ue, qe, He, Ve, We, ze, Ke, Qe, Je, Ye, Xe, Ze, $e, et, tt, it, nt, rt, st, ot, dt, lt, at, ut, ct, _t, mt, pt, ht, ft, gt, bt, wt, yt, vt, Tt, St, Et, Ft, It, Ot, jt, Bt, xt, Rt, kt, Ct, Nt, Pt, Lt;
			! function(e) {
				e.Enabled = "enabled"
			}(be || (be = {})),
			function(e) {
				e.Enabled = "enabled"
			}(we || (we = {})),
			function(e) {
				e.Enabled = "enabled"
			}(ye || (ye = {})),
			function(e) {
				e.Enabled = "enabled"
			}(ve || (ve = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Te || (Te = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Se || (Se = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Ee || (Ee = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Fe || (Fe = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Ie || (Ie = {})),
			function(e) {
				e.Variant1 = "variant_1", e.Variant2 = "variant_2", e.Variant3 = "variant_3"
			}(Oe || (Oe = {})),
			function(e) {
				e.Variant1 = "variant_1", e.Variant2 = "variant_2", e.Variant3 = "variant_3"
			}(je || (je = {})),
			function(e) {
				e.Treatment1 = "treatment_1"
			}(Be || (Be = {})),
			function(e) {
				e.Treatment1 = "treatment_1"
			}(xe || (xe = {})),
			function(e) {
				e.Holdout = "holdout", e.AdHoldout = "ad_holdout"
			}(Re || (Re = {})),
			function(e) {
				e.TestTreatment1 = "toast", e.TestTreatment2 = "popup", e.TestTreatment3 = "knoxses"
			}(ke || (ke = {})),
			function(e) {
				e.Treatment1 = "treatment_1"
			}(Ce || (Ce = {})),
			function(e) {
				e.On = "on"
			}(Ne || (Ne = {})),
			function(e) {
				e.ShowTopContent = "show_top_content"
			}(Pe || (Pe = {})),
			function(e) {
				e.Rollout = "enabled", e.Holdout = "holdout"
			}(Le || (Le = {})),
			function(e) {
				e.Truncate = "truncate", e.SmallBanner = "small_banner", e.Both = "both"
			}(Ae || (Ae = {})),
			function(e) {
				e.Max1 = "max_1", e.Max2 = "max_2"
			}(De || (De = {})),
			function(e) {
				e.Treatment1 = "treatment_1", e.Treatment2 = "treatment_2"
			}(Ge || (Ge = {})),
			function(e) {
				e.NoActions = "no_actions", e.NoAds = "no_ads", e.NoWidgets = "no_widgets", e.Combined = "combined"
			}(Me || (Me = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Ue || (Ue = {})),
			function(e) {
				e.IdCard = "id_card", e.RailSwap = "rail_swap"
			}(qe || (qe = {})),
			function(e) {
				e.Narrow = "narrow", e.NarrowCard = "narrow_card"
			}(He || (He = {})),
			function(e) {
				e.Lightbox = "lightbox"
			}(Ve || (Ve = {})),
			function(e) {
				e.Enabled = "enabled"
			}(We || (We = {})),
			function(e) {
				e.ShellRendered = "shell_rendered"
			}(ze || (ze = {})),
			function(e) {
				e.Variant1 = "variant_1"
			}(Ke || (Ke = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Qe || (Qe = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Je || (Je = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Ye || (Ye = {})),
			function(e) {
				e.TopicsAndDescriptionRequired = "all_required", e.NoneRequired = "none_required"
			}(Xe || (Xe = {})),
			function(e) {
				e.NoCommunityWidgets = "no_community_widgets", e.NoRulesModerators = "no_rules_moderators", e.RelatedPostsDu = "related_posts_du"
			}(Ze || (Ze = {})),
			function(e) {
				e.MediumHeight = "medium_height", e.OnlyTitles = "only_titles"
			}($e || ($e = {})),
			function(e) {
				e.CurrentThrottled = "current_throttled", e.CurrentUnthrottled = "current_unthrottled", e.CurrentUnthrottledCopy = "current_unthrottled_copy", e.NewPageUnthrottledCopy = "new_page_unthrottled_copy", e.NewPageUnthrottledCopyFields = "new_page_unthrottled_copy_fields", e.NewPopUnthrottledCopy = "new_pop_unthrottled_copy"
			}(et || (et = {})),
			function(e) {
				e.Treatment = "treatment"
			}(tt || (tt = {})),
			function(e) {
				e.SmIcon = "sm_icon", e.SmIconHc = "sm_icon_hc"
			}(it || (it = {})),
			function(e) {
				e.Enabled = "enabled"
			}(nt || (nt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(rt || (rt = {})),
			function(e) {
				e.All = "all"
			}(st || (st = {})),
			function(e) {
				e.Enabled = "enabled"
			}(ot || (ot = {})),
			function(e) {
				e.Treatment = "treatment"
			}(dt || (dt = {})),
			function(e) {
				e.Metadata = "metadata"
			}(lt || (lt = {})),
			function(e) {
				e.SelfText = "self_text"
			}(at || (at = {})),
			function(e) {
				e.PostDescription = "post_description", e.TopComment = "top_comment"
			}(ut || (ut = {})),
			function(e) {
				e.TruncTitleSubBrand = "trunc_title_sub_brand", e.TruncTitleReddit = "trunc_title_reddit", e.TruncTitleSub = "trunc_title_sub"
			}(ct || (ct = {})),
			function(e) {
				e.TitleSubPtypeBrand = "title_sub_ptype_brand", e.TitleSubPtypeCom = "title_sub_ptype_com"
			}(_t || (_t = {})),
			function(e) {
				e.Enabled = "enabled"
			}(mt || (mt = {})),
			function(e) {
				e.BufferTwoSeconds = "2_sec_buffer", e.BufferFiveSeconds = "5_sec_buffer", e.BufferTenSeconds = "10_sec_buffer"
			}(pt || (pt = {})),
			function(e) {
				e.SSO = "sso", e.USERNAME_CHANGE = "username_change"
			}(ht || (ht = {})),
			function(e) {
				e.Enabled = "enabled"
			}(ft || (ft = {})),
			function(e) {
				e.Enabled = "enabled"
			}(gt || (gt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(bt || (bt = {})),
			function(e) {
				e.Prompt = "prompt", e.Survey = "survey"
			}(wt || (wt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(yt || (yt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(vt || (vt = {})),
			function(e) {
				e.All = "all", e.PostImageAltText = "post_image_alt_text", e.SubredditImageAltText = "subreddit_image_alt_text"
			}(Tt || (Tt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(St || (St = {})),
			function(e) {
				e.Treatment = "treatment"
			}(Et || (Et = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Ft || (Ft = {})),
			function(e) {
				e.Enabled = "enabled"
			}(It || (It = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Ot || (Ot = {})),
			function(e) {
				e.Active = "active"
			}(jt || (jt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Bt || (Bt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(xt || (xt = {})),
			function(e) {
				e.SSO = "sso"
			}(Rt || (Rt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(kt || (kt = {})),
			function(e) {
				e.LinkModule = "link_module"
			}(Ct || (Ct = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Nt || (Nt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Pt || (Pt = {})),
			function(e) {
				e.Enabled = "enabled"
			}(Lt || (Lt = {}));
			const At = {
					[he]: [Lt.Enabled],
					[me]: [Nt.Enabled],
					[_e]: [Ct.LinkModule],
					[ce]: [kt.Enabled],
					[oe]: [xt.Enabled],
					[le]: [Rt.SSO],
					[se]: [Bt.Enabled],
					[Z]: [Ft.Enabled],
					[ue]: [ve.Enabled],
					[de]: [Te.Enabled],
					[ae]: [Ie.Enabled],
					[pe]: [Pt.Enabled],
					[ne]: [Oe.Variant1, Oe.Variant2, Oe.Variant3],
					[re]: [je.Variant1, je.Variant2, je.Variant3],
					[Q]: [Tt.All, Tt.PostImageAltText, Tt.SubredditImageAltText],
					[z]: [yt.Enabled],
					[W]: [wt.Prompt, wt.Survey],
					[X]: [Se.Enabled],
					[q]: [ft.Enabled],
					[U]: [ht.SSO, ht.USERNAME_CHANGE],
					[M]: [pt.BufferTwoSeconds, pt.BufferFiveSeconds, pt.BufferTenSeconds],
					polls_ga: [mt.Enabled],
					[D]: [ct.TruncTitleSubBrand, ct.TruncTitleReddit, ct.TruncTitleSub],
					[G]: [_t.TitleSubPtypeBrand, _t.TitleSubPtypeCom],
					[N]: [dt.Treatment],
					[P]: [lt.Metadata],
					[L]: [at.SelfText],
					[A]: [ut.PostDescription, ut.TopComment],
					[k]: [st.All],
					[B]: [it.SmIcon, it.SmIconHc],
					[x]: [nt.Enabled],
					[R]: [rt.Enabled],
					[j]: [tt.Treatment],
					[O]: [et.CurrentThrottled, et.CurrentUnthrottled, et.CurrentUnthrottledCopy, et.NewPageUnthrottledCopy, et.NewPageUnthrottledCopyFields, et.NewPopUnthrottledCopy],
					[I]: [$e.OnlyTitles, $e.MediumHeight],
					[F]: [Ze.NoCommunityWidgets, Ze.NoRulesModerators, Ze.RelatedPostsDu],
					community_creation_topics: [Xe.TopicsAndDescriptionRequired, Xe.NoneRequired],
					[T]: [Qe.Enabled],
					[S]: [Je.Enabled],
					[E]: [Ye.Enabled],
					[C]: [ot.Enabled],
					[w]: [be.Enabled],
					gold_premium_indicator: [ye.Enabled],
					[y]: [Ee.Enabled],
					[v]: [Fe.Enabled],
					[g]: [We.Enabled],
					desktop_seo_post_v2_lightbox: [Ve.Lightbox],
					desktop_seo_post_v2_narrow: [He.Narrow, He.NarrowCard],
					[f]: [qe.IdCard, qe.RailSwap],
					[h]: [Me.NoActions, Me.NoAds, Me.NoWidgets, Me.Combined],
					[p]: [De.Max1, De.Max2],
					[c]: [Ae.Truncate, Ae.SmallBanner, Ae.Both],
					[u]: [Ne.On],
					[o]: [Re.Holdout, Re.AdHoldout],
					[n]: [Be.Treatment1],
					[r]: [xe.Treatment1],
					[s]: [Ce.Treatment1],
					[d]: [Pe.ShowTopContent],
					[l]: [Le.Rollout],
					[a]: [Le.Holdout],
					[_]: [Ue.Enabled],
					[m]: [Ue.Enabled],
					[K]: [vt.Enabled],
					[J]: [St.Enabled],
					[Y]: [Et.Treatment],
					[$]: [It.Enabled],
					[ee]: [Ot.Enabled],
					[te]: [jt.Active],
					[ie]: [jt.Active],
					[V]: [bt.Enabled]
				},
				Dt = new Set([O, u, N, B, ie, U, _e]),
				Gt = e => e.reduce((e, t, i) => (e[t] = i + 1, e), {}),
				Mt = Gt(["NFL", "Discussion", "Relationships", "Sports", "Gaming", "News", "Beauty", "Health & Fitness", "Learning", "Parenting", "Tech", "Crypto", "Science", "Video Games", "TV", "Popcorn", "Vroom", "Food", "Outdoors", "Fashion", "Books & Writing", "Art & Design", "Nostalgia", "Music", "Travel", "Photography", "Funny", "Wholesome", "Memes", "Aww", "Pics & Gifs", "Mindblowing", "Videos", "Cringe", "Schadenfreude"]),
				Ut = 50,
				qt = 41,
				Ht = 20,
				Vt = " …"
		},
		"./src/reddit/constants/featureThrottling.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var n = i("./src/reddit/constants/experiments.ts"),
				r = i("./src/reddit/models/FeatureThrottling/index.ts");
			const s = {
				[n.O]: (e => ({
					times: e,
					type: r.b.TimesPerSession
				}))(1)
			}
		},
		"./src/reddit/constants/flair.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return s
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "b", (function() {
				return a
			})), i.d(t, "a", (function() {
				return u
			})), i.d(t, "e", (function() {
				return c
			})), i.d(t, "h", (function() {
				return _
			}));
			var n = i("./src/reddit/constants/colors.ts"),
				r = i("./src/reddit/models/Flair/index.ts");
			const s = 64,
				o = 10,
				d = 10,
				l = 100,
				a = d * (l + 1),
				u = {
					backgroundColor: n.a.defaultFlair,
					id: "",
					modOnly: !1,
					textColor: r.e.Dark,
					textEditable: !1,
					richtext: [],
					text: "",
					type: r.f.Richtext
				},
				c = "t3_flairPreviewExamplePost",
				_ = 350
		},
		"./src/reddit/constants/headers.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			const n = "reddit-user_id"
		},
		"./src/reddit/constants/history.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.IsOverlay = "isOverlay", e.ScrollOnLoad = "scrollOnLoad", e.CloseLocation = "closeLocation", e.JustLoggedIn = "JustLoggedIn", e.JustLoggedOut = "JustLoggedOut"
				}(n || (n = {}))
		},
		"./src/reddit/constants/listings.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "c", (function() {
				return s
			}));
			i("./node_modules/core-js/modules/es6.regexp.match.js"), i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/fbt/lib/FbtPublic.js");
			const n = new Set(["friends", "random"]);
			var r;
			! function(e) {
				e.All = "all", e.Home = "home", e.Rpan = "rpan", e.Popular = "popular", e.SubredditCreation = "subredditCreation", e.SubredditLeaderboard = "subredditLeaderboard", e.Topic = "topic"
			}(r || (r = {}));
			const s = {
				[r.Home]: "/",
				[r.Popular]: "/r/popular/",
				[r.All]: "/r/all/",
				[r.Rpan]: "/rpan/",
				[r.SubredditCreation]: "/subreddits/create",
				[r.SubredditLeaderboard]: "/subreddits/leaderboard/",
				[r.Topic]: "/t/"
			}
		},
		"./src/reddit/constants/localStorage.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "c", (function() {
				return s
			})), i.d(t, "d", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "g", (function() {
				return a
			})), i.d(t, "h", (function() {
				return u
			})), i.d(t, "i", (function() {
				return c
			})), i.d(t, "j", (function() {
				return _
			})), i.d(t, "k", (function() {
				return m
			})), i.d(t, "l", (function() {
				return p
			})), i.d(t, "m", (function() {
				return h
			})), i.d(t, "n", (function() {
				return f
			})), i.d(t, "o", (function() {
				return g
			})), i.d(t, "p", (function() {
				return b
			})), i.d(t, "s", (function() {
				return w
			})), i.d(t, "r", (function() {
				return y
			})), i.d(t, "t", (function() {
				return v
			})), i.d(t, "u", (function() {
				return T
			})), i.d(t, "v", (function() {
				return S
			})), i.d(t, "w", (function() {
				return E
			})), i.d(t, "x", (function() {
				return F
			})), i.d(t, "y", (function() {
				return I
			})), i.d(t, "q", (function() {
				return O
			})), i.d(t, "z", (function() {
				return j
			}));
			const n = "announcement-banner-seen-store",
				r = "announcement-banner-seen-store-v2",
				s = "banner_dismissed_store",
				o = "breaking_news_disabled_store",
				d = "categories-ranking-store",
				l = "create_polls_painted_door_dismissed_store",
				a = "desktop-notifications",
				u = "disclaimer_store",
				c = "editor-mode-hint",
				_ = "email-collection-reprompt-store",
				m = "feature-throttling-store",
				p = "FOCUS_VERTICAL_VARIANT",
				h = "gild_defaults_store",
				f = "inline-id-card-primary-topic-tooltip-store",
				g = "inline-edit-edu-tooltip-store",
				b = "local_persisted_experiments_store",
				w = "mod-onboarding-store",
				y = "modal_dismissed_store",
				v = "post-chain-dismissal-store",
				T = "post-chain-store",
				S = "post-creation-edu-tooltip-store",
				E = "profile-pinned-posts-store",
				F = "recent_searches",
				I = "rpan-user-settings-store",
				O = "low-activity-call-to-action-store",
				j = "sso_user_ids"
		},
		"./src/reddit/constants/page.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "e", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "g", (function() {
				return a
			}));
			const n = "(frontpage)",
				r = "(modListing)",
				s = "(modListingFiltered)";
			var o;
			! function(e) {
				e.Frontpage = "frontpage", e.All = "all", e.Mod = "mod", e.Friends = "friends", e.Popular = "popular", e.PostDetail = "postDetail", e.Topic = "topic", e.OtherDiscussions = "otherDiscussions"
			}(o || (o = {}));
			const d = o.Frontpage,
				l = o.Popular;
			var a;
			! function(e) {
				e[e.Top = 0] = "Top", e[e.Posts = 1] = "Posts", e[e.Listings = 2] = "Listings"
			}(a || (a = {}))
		},
		"./src/reddit/constants/parameters.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "d", (function() {
				return s
			})), i.d(t, "f", (function() {
				return o
			})), i.d(t, "h", (function() {
				return d
			})), i.d(t, "i", (function() {
				return l
			})), i.d(t, "l", (function() {
				return a
			})), i.d(t, "m", (function() {
				return u
			})), i.d(t, "n", (function() {
				return c
			})), i.d(t, "o", (function() {
				return _
			})), i.d(t, "c", (function() {
				return m
			})), i.d(t, "p", (function() {
				return p
			})), i.d(t, "r", (function() {
				return h
			})), i.d(t, "t", (function() {
				return f
			})), i.d(t, "g", (function() {
				return g
			})), i.d(t, "u", (function() {
				return b
			})), i.d(t, "v", (function() {
				return w
			})), i.d(t, "s", (function() {
				return y
			})), i.d(t, "w", (function() {
				return v
			})), i.d(t, "x", (function() {
				return T
			})), i.d(t, "y", (function() {
				return S
			})), i.d(t, "e", (function() {
				return E
			})), i.d(t, "k", (function() {
				return F
			})), i.d(t, "j", (function() {
				return I
			})), i.d(t, "q", (function() {
				return O
			}));
			const n = "category",
				r = "category_name",
				s = "draft",
				o = "f",
				d = "include_over_18",
				l = "is_multi",
				a = "moderator",
				u = "action",
				c = "newUser",
				_ = "q",
				m = "connected_account",
				p = "restrict_sr",
				h = "sort",
				f = "t",
				g = "geo_filter",
				b = "verified",
				w = "verifiedEmail",
				y = "source",
				v = "v",
				T = "v2",
				S = "show_source",
				E = "feature",
				F = ["ad", "adHash", "clickUrl", f, E],
				I = ["after", "before"],
				O = ["ad", "include_over_18", "q", "restrict_sr", "sort", "t", "type", E, l, n, r, y]
		},
		"./src/reddit/constants/postCollection.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "a", (function() {
				return r
			})), i.d(t, "c", (function() {
				return s
			}));
			const n = 160,
				r = 120,
				s = 50
		},
		"./src/reddit/constants/postLayout.ts": function(e, t, i) {
			"use strict";
			var n, r;
			i.d(t, "g", (function() {
					return n
				})), i.d(t, "d", (function() {
					return r
				})), i.d(t, "e", (function() {
					return s
				})), i.d(t, "b", (function() {
					return o
				})), i.d(t, "f", (function() {
					return d
				})), i.d(t, "c", (function() {
					return l
				})), i.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Large = "LARGE", e.Medium = "MEDIUM", e.Classic = "CLASSIC", e.Compact = "COMPACT"
				}(n || (n = {})),
				function(e) {
					e.Card = "card", e.Classic = "classic", e.Compact = "compact"
				}(r || (r = {}));
			const s = {
					[n.Large]: r.Card,
					[n.Medium]: r.Card,
					[n.Classic]: r.Classic,
					[n.Compact]: r.Compact
				},
				o = {
					[r.Card]: n.Large,
					[r.Classic]: n.Classic,
					[r.Compact]: n.Compact
				},
				d = 8,
				l = {
					[r.Card]: d,
					[r.Classic]: 16,
					[r.Compact]: 25
				},
				a = 25
		},
		"./src/reddit/constants/posts.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "c", (function() {
				return s
			}));
			const n = {
					SUBREDDIT: "subreddit",
					PROFILE: "profile"
				},
				r = {
					r: n.SUBREDDIT,
					user: n.PROFILE
				},
				s = 5
		},
		"./src/reddit/constants/theme.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "a", (function() {
				return r
			}));
			const n = {
					REDDIT: "REDDIT",
					NIGHT: "NIGHT"
				},
				r = n.REDDIT
		},
		"./src/reddit/constants/things.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			}));
			const n = "t1_",
				r = "t3_"
		},
		"./src/reddit/constants/topic.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./src/reddit/constants/listings.ts");
			const r = e => "".concat(n.c[n.b.Topic]).concat(e.toLowerCase(), "/")
		},
		"./src/reddit/constants/wiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "m", (function() {
				return n
			})), i.d(t, "i", (function() {
				return r
			})), i.d(t, "j", (function() {
				return s
			})), i.d(t, "h", (function() {
				return o
			})), i.d(t, "k", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "l", (function() {
				return a
			})), i.d(t, "a", (function() {
				return u
			})), i.d(t, "g", (function() {
				return c
			})), i.d(t, "d", (function() {
				return _
			})), i.d(t, "b", (function() {
				return m
			})), i.d(t, "f", (function() {
				return p
			})), i.d(t, "c", (function() {
				return h
			}));
			var n;
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.Create = "create", e.Edit = "edit", e.Revisions = "revisions", e.Settings = "settings"
			}(n || (n = {}));
			const r = "index",
				s = "pages",
				o = "config/automoderator",
				d = "config/post_removal_message",
				l = "reddit.com",
				a = ["config/description", "config/sidebar", "config/stylesheet", "config/submit_text"],
				u = "fromWikiEditButton",
				c = 256,
				_ = 128,
				m = new Set(["edit", "revisions", "settings", "discussions", "revisions", "pages", "create"]),
				p = new Set(["reddit", "config", "special"]),
				h = 3
		},
		"./src/reddit/contexts/PageLayer/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "t", (function() {
				return d
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/react/index.js"),
				r = i.n(n),
				s = i("./src/reddit/contexts/PageLayer/selectors.ts");
			i.d(t, "b", (function() {
				return s.a
			})), i.d(t, "c", (function() {
				return s.c
			})), i.d(t, "d", (function() {
				return s.d
			})), i.d(t, "e", (function() {
				return s.f
			})), i.d(t, "f", (function() {
				return s.g
			})), i.d(t, "g", (function() {
				return s.h
			})), i.d(t, "h", (function() {
				return s.i
			})), i.d(t, "i", (function() {
				return s.j
			})), i.d(t, "j", (function() {
				return s.k
			})), i.d(t, "k", (function() {
				return s.l
			})), i.d(t, "l", (function() {
				return s.m
			})), i.d(t, "m", (function() {
				return s.n
			})), i.d(t, "n", (function() {
				return s.o
			})), i.d(t, "o", (function() {
				return s.p
			})), i.d(t, "p", (function() {
				return s.q
			})), i.d(t, "q", (function() {
				return s.r
			})), i.d(t, "r", (function() {
				return s.s
			})), i.d(t, "s", (function() {
				return s.t
			})), i.d(t, "u", (function() {
				return s.u
			})), i.d(t, "v", (function() {
				return s.v
			})), i.d(t, "w", (function() {
				return s.w
			})), i.d(t, "x", (function() {
				return s.x
			})), i.d(t, "y", (function() {
				return s.y
			})), i.d(t, "z", (function() {
				return s.z
			})), i.d(t, "A", (function() {
				return s.A
			})), i.d(t, "B", (function() {
				return s.B
			})), i.d(t, "C", (function() {
				return s.C
			})), i.d(t, "D", (function() {
				return s.D
			})), i.d(t, "E", (function() {
				return s.E
			})), i.d(t, "F", (function() {
				return s.F
			})), i.d(t, "G", (function() {
				return s.G
			})), i.d(t, "H", (function() {
				return s.H
			})), i.d(t, "I", (function() {
				return s.I
			})), i.d(t, "J", (function() {
				return s.J
			})), i.d(t, "K", (function() {
				return s.K
			})), i.d(t, "L", (function() {
				return s.L
			})), i.d(t, "M", (function() {
				return s.M
			})), i.d(t, "N", (function() {
				return s.N
			})), i.d(t, "O", (function() {
				return s.O
			})), i.d(t, "P", (function() {
				return s.P
			})), i.d(t, "Q", (function() {
				return s.Q
			})), i.d(t, "R", (function() {
				return s.R
			})), i.d(t, "S", (function() {
				return s.S
			})), i.d(t, "T", (function() {
				return s.T
			})), i.d(t, "U", (function() {
				return s.U
			})), i.d(t, "V", (function() {
				return s.V
			})), i.d(t, "W", (function() {
				return s.W
			})), i.d(t, "X", (function() {
				return s.X
			}));
			const o = r.a.createContext(null);

			function d(e) {
				return t => (class extends r.a.Component {
					constructor() {
						super(...arguments), this.renderChildren = i => {
							const n = Object.assign({}, this.props, function(e, t) {
								return void 0 !== t ? Object.keys(t).reduce((i, n) => (i[n] = t[n](e), i), {}) : {
									pageLayer: e
								}
							}(i, e));
							return r.a.createElement(t, n)
						}
					}
					render() {
						return r.a.createElement(o.Consumer, null, this.renderChildren)
					}
				})
			}
		},
		"./src/reddit/contexts/PageLayer/selectors.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return C
			})), i.d(t, "y", (function() {
				return N
			})), i.d(t, "E", (function() {
				return P
			})), i.d(t, "M", (function() {
				return L
			})), i.d(t, "O", (function() {
				return A
			})), i.d(t, "x", (function() {
				return D
			})), i.d(t, "C", (function() {
				return G
			})), i.d(t, "A", (function() {
				return M
			})), i.d(t, "U", (function() {
				return U
			})), i.d(t, "w", (function() {
				return q
			})), i.d(t, "v", (function() {
				return H
			})), i.d(t, "z", (function() {
				return V
			})), i.d(t, "L", (function() {
				return W
			})), i.d(t, "H", (function() {
				return z
			})), i.d(t, "D", (function() {
				return K
			})), i.d(t, "I", (function() {
				return J
			})), i.d(t, "F", (function() {
				return Y
			})), i.d(t, "K", (function() {
				return X
			})), i.d(t, "J", (function() {
				return Z
			})), i.d(t, "c", (function() {
				return $
			})), i.d(t, "a", (function() {
				return ee
			})), i.d(t, "t", (function() {
				return te
			})), i.d(t, "d", (function() {
				return ie
			})), i.d(t, "o", (function() {
				return ne
			})), i.d(t, "r", (function() {
				return re
			})), i.d(t, "n", (function() {
				return se
			})), i.d(t, "p", (function() {
				return oe
			})), i.d(t, "q", (function() {
				return de
			})), i.d(t, "G", (function() {
				return le
			})), i.d(t, "i", (function() {
				return ae
			})), i.d(t, "j", (function() {
				return ue
			})), i.d(t, "k", (function() {
				return ce
			})), i.d(t, "l", (function() {
				return _e
			})), i.d(t, "B", (function() {
				return me
			})), i.d(t, "h", (function() {
				return pe
			})), i.d(t, "Q", (function() {
				return he
			})), i.d(t, "S", (function() {
				return fe
			})), i.d(t, "V", (function() {
				return ge
			})), i.d(t, "X", (function() {
				return be
			})), i.d(t, "N", (function() {
				return we
			})), i.d(t, "P", (function() {
				return ye
			})), i.d(t, "s", (function() {
				return ve
			})), i.d(t, "R", (function() {
				return Te
			})), i.d(t, "b", (function() {
				return Se
			})), i.d(t, "u", (function() {
				return Ee
			})), i.d(t, "T", (function() {
				return Fe
			})), i.d(t, "g", (function() {
				return Ie
			})), i.d(t, "m", (function() {
				return Oe
			})), i.d(t, "W", (function() {
				return je
			})), i.d(t, "e", (function() {
				return Be
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = i("./node_modules/lodash/isEmpty.js"),
				r = i.n(n),
				s = i("./node_modules/reselect/es/index.js"),
				o = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/isFakeSubreddit/index.ts"),
				l = i("./src/lib/objectSelector/index.ts"),
				a = i("./src/lib/search/index.ts"),
				u = i("./src/reddit/constants/categories.tsx"),
				c = i("./src/reddit/constants/covid.ts"),
				_ = i("./src/reddit/constants/page.ts"),
				m = i("./src/reddit/constants/parameters.ts"),
				p = i("./src/reddit/constants/postLayout.ts"),
				h = i("./src/reddit/constants/posts.ts");
			const f = {
				access: !0,
				config: !0,
				flair: !0,
				mail: !0,
				posts: !0,
				wiki: !0,
				chatConfig: !0,
				chatOperator: !0,
				all: !0
			};
			var g = i("./src/reddit/helpers/flair.ts"),
				b = (i("./node_modules/core-js/modules/es6.array.sort.js"), i("./src/lib/listingSort/index.ts")),
				w = i("./src/lib/makeListingKey/index.ts"),
				y = i("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				v = i("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				T = i("./src/reddit/selectors/frontpage.ts");
			var S = (e, t) => {
					const {
						routeMatch: i,
						urlParams: n,
						queryParams: r
					} = t;
					if (!i) return;
					const s = (e => {
						const {
							routeMatch: t,
							urlParams: i,
							queryParams: n
						} = e;
						if (!t) return;
						let r = "";
						switch (t.route.meta.name) {
							case o.zb.PROFILE_COMMENTS:
							case o.zb.PROFILE_POSTS:
								r = n.sort;
								break;
							default:
								r = i.sort
						}
						return r || void 0
					})(t);
					switch (i.route.meta.name) {
						case o.zb.INDEX:
						case o.zb.LISTING:
							return s || Object(T.a)(e);
						case o.zb.SUBREDDIT: {
							const t = n,
								{
									subredditName: i
								} = t,
								s = Object(y.a)(t, e),
								d = Object(w.a)(i, s, r),
								l = e.listings.postOrder.listingSort[d];
							if (l) {
								const {
									sort: e
								} = Object(b.d)(l.sort);
								return e
							}
							return i === _.f && Object(v.a)(e) ? o.kb : o.O
						}
						default:
							return s || o.O
					}
				},
				E = i("./src/reddit/models/Flair/index.ts"),
				F = i("./src/reddit/models/Image/index.tsx"),
				I = i("./src/reddit/selectors/multireddit.ts"),
				O = i("./src/reddit/selectors/postCollection.ts"),
				j = i("./src/reddit/selectors/postDraft.ts"),
				B = i("./src/reddit/selectors/profile.ts"),
				x = i("./src/reddit/selectors/subreddit.ts"),
				R = i("./src/reddit/selectors/subredditModeration.ts"),
				k = i("./src/reddit/selectors/user.ts");
			const C = e => e ? e.url : "",
				N = e => !!(e && e.routeMatch && o.p.FRONTPAGE.includes(e.routeMatch.route.chunk)),
				P = e => e && e.routeMatch && [o.p.FRONTPAGE, o.p.MULTIREDDIT, o.p.SUBREDDIT].includes(e.routeMatch.route.chunk),
				L = e => !(!e || !e.meta || e.meta.name !== o.zb.TOPIC),
				A = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (!i || !P(i) || !i.routeMatch) return null;
					const {
						match: n
					} = i.routeMatch, r = n.params.subredditName;
					if (!r) return null;
					const s = Object(x.z)(e, {
						subredditName: r
					});
					return s ? s.name : r
				},
				D = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = A(e, {
						pageLayer: i
					});
					return !!n && Object(d.a)(n)
				},
				G = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = A(e, {
							pageLayer: i
						}),
						r = N(i),
						s = Object(k.H)(e);
					return n === _.f || !s && r
				},
				M = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = A(e, {
						pageLayer: i
					});
					return !(n && !Object(d.a)(n))
				},
				U = e => {
					if (!e || !e.routeMatch) return;
					const {
						route: t
					} = e.routeMatch;
					return t.meta.name
				},
				q = e => !(!e || !e.meta || e.meta.name !== o.zb.COMMENTS),
				H = e => !!(e && e.meta && e.meta.name === o.zb.COMMENTS && e.urlParams.partialCommentId),
				V = e => !(!e || !e.meta || e.meta.name !== o.zb.SEARCH_RESULTS || e.urlParams.subredditName),
				W = e => !!(e && e.meta && e.meta.name === o.zb.SEARCH_RESULTS && e.urlParams.subredditName),
				z = e => !(!e || !e.meta || e.meta.name !== o.zb.COMMENTS || h.b[e.urlParams.routePrefix] !== h.a.PROFILE),
				K = e => !(!e || !e.meta || e.meta.name !== o.zb.POST_CREATION),
				Q = e => !(!e || !e.meta || e.meta.name !== o.zb.POST_DRAFT),
				J = e => !!(e && e.meta && o.pb.has(e.meta.name)),
				Y = e => !!(e && e.meta && o.nb.has(e.meta.name)),
				X = e => !!(e && e.meta && o.Ib.has(e.meta.name)),
				Z = e => !(!e || !e.meta || o.zb.SETTINGS !== e.meta.name),
				$ = e => {
					const t = e && e.urlParams;
					if (!t) return;
					const {
						multiredditName: i,
						username: n
					} = t;
					return {
						multiredditName: i,
						username: n
					}
				},
				ee = e => {
					const t = e && e.urlParams;
					return t ? t.categoryName : void 0
				},
				te = e => {
					const t = e && e.urlParams;
					return t ? t.topicSlug : void 0
				},
				ie = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = $(i);
					if (!n) return null;
					const {
						multiredditName: r,
						username: s
					} = n;
					return r ? Object(I.d)(e, {
						multiredditName: r,
						username: s
					}) : null
				},
				ne = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (Q(i)) {
						const t = Ee(i);
						return Object(j.e)(e, {
							draftId: t
						})
					}
					const n = i && i.urlParams;
					return n ? n.subredditName : void 0
				},
				re = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (i && i.urlParams && h.b[i.urlParams.routePrefix] === h.a.PROFILE) return null;
					const n = ne(e, {
						pageLayer: i
					});
					return n ? Object(x.z)(e, {
						subredditName: n
					}) : null
				},
				se = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = ne(e, {
						pageLayer: i
					});
					return n ? Object(x.E)(e, n) : null
				},
				oe = (e, t) => re(e, t) || ce(e, t),
				de = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = ((e, t) => {
						let {
							pageLayer: i
						} = t;
						const n = se(e, {
							pageLayer: i
						});
						return n ? e.postFlair[n] : null
					})(e, {
						pageLayer: i
					});
					return n ? n.displaySettings.position : E.b.Right
				},
				le = e => !!(e && e.routeMatch && o.qb.has(e.routeMatch.route.meta.name)) || z(e) || (e => !(!e || !e.meta || e.meta.name !== o.zb.COLLECTION_COMMENTS || h.b[e.urlParams.routePrefix] !== h.a.PROFILE))(e),
				ae = e => {
					const t = e && e.urlParams;
					return t ? t.profileName : void 0
				},
				ue = e => {
					if (e && e.routeMatch && U(e) === o.zb.PROFILE_PRIVATE) return e.routeMatch.match.params.listingType
				},
				ce = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = z(i) ? ne(e, {
						pageLayer: i
					}) : ae(i);
					return n ? Object(B.j)(e, {
						profileName: n
					}) : null
				},
				_e = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = z(i) ? ne(e, {
						pageLayer: i
					}) : ae(i);
					return n ? Object(k.eb)(e, {
						userName: n
					}) : null
				},
				me = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = ce(e, {
							pageLayer: i
						}),
						r = Object(k.i)(e),
						s = r && (r.username ? r.username : r.displayText);
					return !(!s || !n || s !== n.name)
				},
				pe = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (me(e, {
							pageLayer: i
						})) return f
				},
				he = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (!i) return;
					const {
						key: n
					} = i;
					return e.platform.referrers[n]
				},
				fe = e => e ? e.queryParams : {},
				ge = e => {
					const t = U(e);
					if (e && t && t === o.zb.SEARCH_RESULTS) return e.queryParams[m.b] ? Object(a.a)(e.queryParams[m.b]) : Object(a.a)(e.queryParams[m.o])
				},
				be = e => e ? e.url : "",
				we = (e, t) => {
					let i, {
						pageLayer: n
					} = t;
					if (void 0 !== (i = void 0 === n ? e.platform.currentPage : n)) {
						const t = U(i);
						if (t === o.zb.POST_CREATION) return p.g.Large;
						if (t === o.zb.SUBREDDIT_WIKI) return p.g.Classic;
						if (t === o.zb.EXPLORE) return p.g.Classic;
						if (t === o.zb.TOPIC) return e.user.prefs.layout ? p.b[e.user.prefs.layout] : p.g.Large;
						if (t === o.zb.PROFILE_SNOOBUILDER) return p.g.Classic;
						if (t === o.zb.SUBREDDIT && e.user.prefs.rememberCommunityLayout) {
							const t = ((e, t) => {
								let {
									pageLayer: i
								} = t;
								const n = se(e, {
									pageLayer: i
								});
								if (n) {
									const t = e.user.prefs.subreddit[n];
									if (t && t.layout) return t.layout
								}
								return null
							})(e, {
								pageLayer: n
							});
							if (t) return p.b[t]
						}
						if (o.qb.has(t)) {
							if (t === o.zb.PROFILE_OVERVIEW) return p.g.Large;
							return ye(e, {
								pageLayer: n
							}) ? t === o.zb.PROFILE_POSTS || t === o.zb.PROFILE_PRIVATE ? p.g.Classic : p.g.Compact : p.g.Classic
						}
					}
					return e.user.prefs.layout ? p.b[e.user.prefs.layout] : p.g.Classic
				},
				ye = (e, t) => {
					let {
						pageLayer: i
					} = t;
					return !!Object(R.t)(e) || !(!i || !i.meta) && i.meta.name === o.zb.MODQUEUE_PAGES
				},
				ve = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = se(e, {
						pageLayer: i
					});
					if (!n) return !0;
					const r = e.subreddits.about[n];
					return !r || r.showMedia
				},
				Te = Object(l.a)((e, t) => {
					let {
						pageLayer: i,
						postId: n,
						flairStyleTemplateDraft: r
					} = t;
					const s = e.posts.models[n];
					if (!s) return;
					const d = s.flair.find(e => Object(g.p)(e.type));
					if (!d || void 0 === d.templateId) return;
					const l = se(e, {
						pageLayer: i
					});
					if (!l || l !== s.belongsTo.id) return;
					if (!e.structuredStyles.models[l]) return;
					const a = e.structuredStyles.flairTemplate,
						u = !!r;
					if (i && i.meta && i.meta.name === o.zb.MODERATION_PAGES && !r) return;
					let c = r || a.models[d.templateId];
					if (!c) return;
					const _ = !u && Object(k.S)(e),
						m = i && i.locationState && i.locationState.isOverlay;
					if (_ || m) {
						if (!c.postPlaceholderImage) return;
						c = {
							postPlaceholderImage: c.postPlaceholderImage
						}
					}
					return Object.keys(c).filter(e => c[e] !== F.c).reduce((e, t) => (e[t] = c[t], e), {})
				}),
				Se = (e, t) => {
					let {
						pageLayer: i
					} = t;
					return i ? S(e, i) : void 0
				},
				Ee = e => {
					if (e) return Q(e) ? e.urlParams.draftId : e.queryParams.draft
				},
				Fe = e => e && e.queryParams || {},
				Ie = (e, t) => {
					let {
						pageLayer: i
					} = t;
					const n = (e => e ? e.queryParams.collection : void 0)(i);
					return n ? Object(O.r)(e, {
						collectionId: n
					}) : void 0
				},
				Oe = Object(s.a)(ne, e => e.categories.models, e => e.subreddits.models, e => e.subreddits.byCategory, (e, t, i, n) => {
					if (!e) return;
					const s = Object.keys(t).find(t => {
						const s = n[t];
						if (r()(s)) return !1;
						const o = s.map(e => i[e].name);
						return !r()(o) && Object(u.b)(o) === e
					});
					return s ? t[s] : void 0
				}),
				je = e => {
					const t = ge(e);
					return !!t && !!c.b.filter(e => t.toLowerCase().includes(e)).length
				},
				Be = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (i && i.title) return i.title; {
						const t = e.platform.currentPage,
							i = e.platform.metas;
						if (t && i) {
							const e = i[t.key];
							if (e) return e.title
						}
						return null
					}
				}
		},
		"./src/reddit/endpoints/session/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			})), i.d(t, "a", (function() {
				return u
			}));
			var n = i("./src/lib/apiErrorHelpers.ts"),
				r = i("./src/lib/constants/index.ts"),
				s = i("./src/lib/makeApiRequest/index.ts"),
				o = i("./src/lib/omitHeaders/index.ts"),
				d = i("./src/reddit/constants/headers.ts");
			const l = Object(n.a)(400),
				a = (e, t) => Object(s.a)(e, {
					allowErrorLogging: l,
					data: t,
					endpoint: "/refreshproxy",
					method: r.bb.POST
				}),
				u = e => Object(s.a)(Object(o.a)(e, [d.a]), {
					endpoint: "/api/v2/issue_session",
					method: r.bb.GET
				})
		},
		"./src/reddit/featureFlags/communityTopics.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			})), i.d(t, "a", (function() {
				return d
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/reddit/models/User/index.ts"),
				r = i("./src/reddit/selectors/user.ts");
			const s = () => !0,
				o = new Set(["0perspective", "coachzzz", "flash_55", "mikapp", "ggalex", "jdawg1000", "hidehidehidden", "ringrob"]),
				d = e => {
					if (!e.user.account) return !1;
					const t = Object(n.e)(e.user.account).toLowerCase();
					return Object(r.E)(e) && o.has(t)
				}
		},
		"./src/reddit/featureFlags/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return v
			})), i.d(t, "a", (function() {
				return T
			})), i.d(t, "f", (function() {
				return S
			})), i.d(t, "g", (function() {
				return F
			})), i.d(t, "b", (function() {
				return I
			})), i.d(t, "c", (function() {
				return O
			})), i.d(t, "e", (function() {
				return j
			}));
			i("./node_modules/core-js/modules/es6.regexp.match.js"), i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = i("./node_modules/lodash/isNil.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/mapValues.js"),
				o = i.n(s),
				d = i("./src/lib/constants/euCookiePolicy.ts"),
				l = i("./src/lib/getParsedUserAgent/index.ts"),
				a = i("./src/reddit/featureFlags/utils.ts"),
				u = i("./src/reddit/featureFlags/communityTopics.ts"),
				c = i("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = i("./src/reddit/selectors/platform.ts"),
				m = i("./src/reddit/selectors/subreddit.ts");
			const p = new Set(["ZombieSubreddits", "scheduled_posts_test", "gameofthrones", "LateShow", "WritingPrompts", "DCFU", "FlashTV", "supergirlTV", "TheOrville", "BuffaloBills", "rbny", "seahawks", "Mariners", "NASCAR", "BlackOps4", "CODZombies", "LabourUK", "StreetOutlaws", "pokemon", "pokemontrades", "SVExchange", "brakebills", "askhistorianspanel", "ClashRoyale", "Brawlstars", "CasualConversation", "tf2", "SCP", "DankMemesFromSite19", "TitansTV", "youngjustice", "DCDoomPatrol", "swampthingtv", "HarleyQuinnTV", "StargirlDCU", "Pigifs", "MovieDetails", "FruitsBasket", "Charleston", "TeraOnline", "indianapolis", "warhawk", "lounge", "GetMotivated", "Stormlight_Archive", "Cosmere", "brandonsanderson", "thelegendarium", "StarWarsBattlefront", "SandersForPresident", "cincinnati", "girlsfrontline", "Romania", "ClevelandIndians", "shortcuts", "HomePod", "Snooful", "slovenia", "TheGita", "TheMahabharata", "TheRamayana", "AnthemTheGame", "Games", "chile", "TheMandalorianTV", "LokiTV", "WANDAVISION", "CassianAndor", "OnePunchMan", "india", "xxketo4u2", "xxKetoOver50", "TheVoice", "nfl", "mac", "blackmirror", "appletv", "Psephology", "AppleArcade", "AppleTVPlus", "overwatch", "dankmemes", "arg", "slideforreddit", "TacoBell", "MonsterHunter", "shadownet", "shadownetwork", "TheFantasyInn", "GameDevs", "musicproduction", "PromoteYourMusic", "HipHopCollabs", "SpotifyPlaylists", "puppy101", "HauntingOfHillHouse", "SecularTarot", "StandardPoodles", "F1FeederSeries", "FormulaE", "TohokuJapan", "ketoscience", "TechnicalDeathMetal", "DebateAnAtheist", "KetoNews", "manatees", "BillHsomething", "chromatics", "cerner", "911FOX", "MarvelAvengersProject", "PantheonMMO", "Superman", "batman", "DCcomics", "discworld", "panelshow", "panelshows", "intothebadlands", "dndnext", "FireEmblemHeroes", "fireemblem", "streetwear", "svc518", "Mississauga", "rupaulsdragrace", "SpoiledDragRace", "RPDR_UK", "Jaguars", "alteredcarbon", "Letterkenny", "DarkSaint", "kotobukiya", "MegamiDevice", "FrameArms", "BoomBeach", "GolfClash", "WomensSoccer", "problemgambling", "gambling", "hamiltonmusical", "GoNets", "summonerswar", "eagles", "Arrow", "BlackLightning", "boardgames", "BoardGameExchange", "kosovo", "angelsbaseball", "orangecounty", "Socialism", "PaisosCatalans", "Amsterdam", "ElectricForest", "bassnectar", "nfrealmusic", "sillyrosster", "PS4Pro", "PSVR", "PS5", "comptia", "starwarscanon", "projectfi", "android_beta", "Sekiro", "Nioh", "denvernuggets", "giantbomb", "titanfolk", "attackontitan", "residentevil", "maryland", "traaaaaaannnnnnnnnns", "WeAreNotAsking", "redditvision_sc", "redditvision_nf", "urbanplanning", "valveindex", "HiTMAN", "Competitiveoverwatch", "ProjectRunway", "sitecore", "aem", "YangForPresidentHQ", "MaddenMobileForums", "InsiderMemeTrading", "CommentAwardsForum", "AsianBeautyAdvice", "NewOrleans", "malefashionadvice", "HBOGameofThrones", "AskBibleScholars", "EMS", "NewToEMS", "ItalyInformatica", "antiassholedesign", "BleachBraveSouls", "selectivemutism", "weddingplanning", "INDYCAR", "leagueoflegends", "Albania", "westcoasteagles", "CitiesSkylines", "Comcast_Xfinity", "AssassinsCreed", "iOSProgramming", "MarvelStudios", "cryptocurrency", "BostonUprising", "HarryPotterWU", "Gnomesinthings", "TheSilphRoad", "SpaceXLounge", "FinalFantasy", "the_revolupun", "pathfinder2e", "Drugs", "retrogaming", "FallenOrder", "TaylorSwift", "Dachschaden", "pathofexile", "BoneAppleTea", "MarioKartWii", "bostontrees", "MAMMJ", "NYCtrees", "chitrees", "Philippines", "boottoobig", "thedivision", "travisscott", "jitakyoei", "shieldbro", "islamabad", "CarletonU", "Charlotte", "BestDisney", "Arithmancy", "sysadmin", "progmetal", "discgolf", "adultswim", "greenday", "Rainbow6", "TibiaMMO", "gaybros", "bangtan", "Splatoon", "zerocarb", "Aleague", "phoenix", "xcxheads", "judocss", "Cloud9", "asoiaf", "alttpr", "spacex", "csgo", "ffxiv", "MMA", "Gwent", "NBA2k", "Colts", "MCPE", "Gunpla", "Muse", "disney", "eddit", "excel", "Bestbuy", "judo", "SubredditDrama", "TrollYChromosome", "stepschallenge", "survivor", "whatssnoo", "DotA2", "wtwave", "Paladins", "GreenBayPackers", "SAO_RisingSteel", "SwagBucks", "StarWars", "JustNotRight", "britisharmy", "RoleReversal", "DogsAndDesserts", "AjaxAmsterdam", "QTCinderella", "MissouriPolitics", "theworldofchertia", "FFBraveExvius", "algeria", "lodestone_testing", "crohnsdisease", "mildlybrokenvoice", "mensrestroom", "ScheduledPostBETA", "SanFranciscoAnalog", "vegansnacks", "snoobie101", "Coronavirus", "WomEng", "RedditModCouncil", "PS4", "Stadia", "amsterdam2", "Amsterdam3", "CoronavirusCA", "Yarn", "WuhanNews", "CalgaryFlames", "WitchesVsPatriarchy", "wvpmods", "BrawlStarsCompetitive", "Midlothian", "SiouxFalls", "Miscarriage", "PlayStationNow", "PS5", "PhotographyRU", "Coronavirus", "chile", "CallMeKevin", "churchofchrist", "Edinburgh", "HomeschoolRecovery", "AdultChildren", "dauntless", "nbl", "GalaxyA50", "NativePlantGardening", "croatia", "bih", "GRE", "GMAT", "askmath", "Open_Holes", "ultimate", "cambook", "OrangeredCorps"].map(e => e.toLowerCase()));
			var h = i("./src/reddit/selectors/responsiveSettings.ts");
			const f = new Set(["20plus", "3amjokes", "3DCGI", "5ToubunNoHanayome", "actuallesbians", "addictingtunes", "ADHD", "Africa", "AgainstHateSubreddits", "ainbow", "AlternativeIdol", "AmazonforaPenny", "amitheasshole", "analog", "androidcirclejerk", "angelsbaseball", "anime_mods", "AnimeAnarchy", "animeevenwithcontext", "AnimeFunny", "AnimeLounging", "AnimeMeta", "animenocontext", "animenorules", "Animesuggest", "animeworldproblems", "AnnArbor", "AntiEvilPlayground", "apple", "appropriatzzycow", "aquarium", "arabs", "arizona", "Artifact", "asianpeople", "ask_transgender", "askaconservative", "askadmins", "askcarsales", "AskMen", "AskScienceFiction", "askwomen", "askwomenadvice", "asoiaf", "Astros", "Austin", "AwesomeDesktops", "awwnime2", "AzureLane", "BabyYoda", "badhistory", "Bahrain", "baseball", "bassnectar", "battlebots", "BattlefieldV", "bayarea", "beermoney", "Bestbuy", "bestoflegaladvice", "bestofmoderation", "bestoftalk", "BethesdaSoftworks", "BetteReddit", "BigBoobsGW", "Birmingham", "birthday", "bisexual", "blackfellas", "BlackLadiesFitness", "blackpeopletwitter", "blessedcomments", "Bloomberg2020", "BokuNoHeroAcademia", "boottoobig", "brasil", "Braves", "brisbane", "Browns", "buildapcsales", "bureaucracyporn", "butchlesbians", "canada", "CarletonU", "cars", "CarsFallingFromTheSky", "CasualConversation", "Catalunya", "CatsWithDogs", "Charleston", "Charlotte", "chattest", "ChemicalReactionVids", "chessporn", "chicago", "China", "Chonkers", "christianity", "CircleOfTrustInvite", "circumcision", "ClevelandIndians", "collapse", "CollegeStationJobs", "ColonisingReddit", "Colorado", "Columbus", "CombatFootage", "comics", "CommonMisconceptions", "conspiratorialskeptic", "ContraPoints", "controversialiama", "convopolis", "coversongs", "cowardicejerk", "cowboys", "coys", "CryptoCurrency", "cursedcomments", "cursedsubreddits", "Dallas", "dankchristianmemes", "dankmemes", "darknet", "DarlingInTheFranxx", "dauntless", "democrats", "Denver", "Detroit", "DigitalEconomy", "discordapp", "disney", "disneyvacation", "DividedWeSitandrelax", "DnD", "Dogfree", "dogmonching", "dogswithjobs", "DontPostPI", "DoofusoftheWeek", "DotA2", "DuelLinks", "dystopianfuture", "Ebook", "edutainment", "ElectricForest", "ElPaso", "Enough_Sanders_Spam", "EnoughTrumpSpam", "Epstein", "ethfinance", "EthFinanceTesting", "europe", "exmormon", "ExMuslim", "FanMV", "Fantasy", "feemagers", "ffxiv", "fireemblem", "FireEmblemHeroes", "Fitness", "flightsim", "florida", "flying", "ForEquity", "foreskin_restoration", "formula1", "FortniteCompetitive", "freemasonry", "fuckthesepeople", "FulfillmentByAmazon", "futurology", "GalaxyA50", "GamerGhazi", "games", "gaming", "gatesopencomeonin", "GenderCritical", "georgefloydriots", "GiftIdeas", "Gifts", "GloriousSunRays", "GoldandBlack", "googlemapsshenanigans", "GooglePixel", "greece", "GreenAndPleasant", "GreenBayPackers", "Habs", "hackintosh", "HaveWeMet", "heat", "held818", "helpingyouu", "helpus", "hinduism", "HinduVegans", "historymemes", "hockey", "hugthecameraman", "ImaginaryCharacters2", "ImaginaryLandscapes2", "ImaginaryMonsters2", "immigration", "inceptianime", "IndiaSpeaks", "insaneparents", "insanityWPC", "Iowa", "iphone", "iranian", "ItalyInformatica", "ItHadToBeBrazil", "jailbreak", "JARTEM", "JoeBiden", "JustBootThings", "JustMoeThings", "JUSTNOFAMILY", "Justnofil", "JUSTNOMIL", "kansaw", "Konosuba", "kpop", "leagueoflegends", "learnchinese", "lebanon", "legaladvice", "LegalAdviceXPosts", "LetterstoJNMIL", "lgbt", "lifeisstrange", "linux", "livepd", "london", "losangeles", "LosAngelesRams", "MadeMeSmile", "makeupaddiction", "malefashion", "mariners", "MarioKartWii", "markistest", "marvelstudios", "medicine", "Megumin", "melbourne", "meta", "metafirstworldanarchy", "metaIFTA", "Miami", "Military", "Minecraft", "minneapolis", "Mistakes", "MobileAL", "Moderation", "modernwarfare", "modevaluation", "ModRants", "ModReviews", "Moescene", "MonsterHunterWorld", "MorbidReality", "motogp", "MtF", "MurderedByWords", "myneedstheground", "MysteryDungeon", "mysubs", "NASCAR", "NederlandseMemes", "Neverwinter", "NewOrleans", "nfl", "NintendoSwitch", "NotMyJob", "nottheonion", "notUS", "nova", "NoveltyHell", "noveltyhub", "NPR", "nra", "omad", "omaha", "ontario", "OpenWiki", "OutsideBugReports", "overpricedprebuilt", "Palestine", "Panelshow", "pathofexile", "pcgaming", "pelotoncycle", "PennStateUniversity", "PeopleSellingMirrors", "personalfinance", "Pete_Buttigieg", "Pewdiepiesubmissions", "phoenix", "pittsburgh", "PlayMe", "plexshares", "PokeFics", "Policechases", "politicalhumor", "PoliticalMemes", "politics", "Polska", "polyamory", "popcornwatch", "Portland", "potholes", "prettygoodof", "ProductIAMA", "project_earth", "Pub05", "Pub08", "PuertoRico", "QATrustedUser", "Rabbits", "RADAL", "rage", "Rainbow6", "RateSubreddits", "razer", "ReasonableFantasy", "RedditLeak", "redditmysteries", "redesign", "ReformedHumor", "RelationshipLeftovers", "relationships", "reportspamsubs", "Republic_Of_Anime", "republicanmemes", "researchpapers", "RocketLeagueEsports", "rockets", "rollerblading", "Romania", "runescape", "rupaulsdragrace", "rust", "Sacramento", "SaltLakeCity", "SandersForPresident", "sandiego", "saskatchewan", "ScenesFromAHat", "science", "scifi", "SCP", "Scrubs", "Seattle", "SeattleWA", "selfie", "serendipitymairead", "sheffield", "shirtcolors", "ShittyEndings", "ShittyIFTA", "shittyinspiringquotes", "Silverbugs", "slc", "SmugIdeologyMan", "socialism", "softwaregore", "SonicTheHedgehog", "southafrica", "soymilkadventures", "Spokane", "SRmeta", "Stadia", "startrek", "Steam", "stlouisblues", "SubredditReviews", "SuggestBooks", "SwagBucks", "syriancivilwar", "Tallahassee", "technicallythetruth", "techsupportmcgyver", "teenagers", "teslamotors", "testqqqqqq", "Texans", "TheBukuProject", "TheSimpsons", "TheWalkingDeadGame", "thewallstreet", "theydidthemonstermath", "Threesome", "tifu", "titanfolk", "todayilearned", "toonmusic", "tormodsfanfiction", "Toronto", "Toyota", "traaaaaaannnnnnnnnns", "trans", "transsupport", "transtimelines", "TrollXChromosomes", "TrueCrimeDiscussion", "TrueSyncretic", "truetruebestof2012", "trump", "TrumpCriticizesTrump", "tuesday", "Turkey", "twice", "TwoXChromosomes", "ukpolitics", "unitedkingdom", "UnsolvedMysteries", "UpliftingComments", "USMC", "vaporents", "vedicastrology", "vegaslocals", "velvethippos", "vexillology", "Virginia", "Vive", "voodoo", "wallstreetbets", "washingtonDC", "weeklyreddit", "weightroom", "WorstOfModeration", "writingprompts", "z_r", "zelda"].map(e => e.toLowerCase())),
				g = new Set(["uzitest", "testingtesting127", "kpkrunal"]);
			var b = i("./src/reddit/featureFlags/subredditPoints.ts");
			const w = new Set(["askaliberal", "asktransgender", "askwomen", "bisexual", "blackladies", "exchristian", "exmormon", "gendercynical", "girlgamers", "neoliberal", "nothowgirlswork", "progresspics", "subredditdrama", "teenagers", "thegirlsurvivalguide", "thequickbrowncorgi", "traaaaaaannnnnnnnnns", "transpositive", "trollxchromosomes", "twoxchromosomes"]),
				y = {
					introModal: Object(a.d)(a.g),
					markdownMode: a.g,
					modQueue: Object(a.e)(a.g, a.h),
					spBadges: b.c,
					spClaimablePoints: b.d,
					spCustomBadges: b.f,
					spCustomCrypto: b.g,
					spCommunityTipJar: b.e,
					spEmotes: b.h,
					spEmotesModTools: b.i,
					spFavoriteCreators: b.j,
					spGiphy: b.k,
					spGovPolls: b.l,
					spHarberger: b.m,
					spKarmaPoints: b.n,
					spLeaderboard: b.o,
					spLoadtest: b.p,
					spPoints: b.q,
					spPolls: b.r,
					spPremium: b.s,
					spPremiumSubscriptions: b.t,
					spPremiumUpsells: b.u,
					spPublicPoints: b.v,
					spSpinoffs: b.w,
					spStellarWalletRegistration: b.x,
					spSupport: b.y,
					spTipping: b.z,
					spTopTippers: b.A,
					spWalletRegistrationBanner: b.B,
					scheduledPosts: Object(a.e)(a.g, e => {
						const t = Object(_.e)(e),
							i = !!t && Object(c.e)(e, {
								subredditId: Object(m.E)(e, t)
							});
						return !!t && i && p.has(t.toLowerCase())
					}),
					communityTopics: u.b,
					adminCommunityTopics: u.a,
					rteVideoPoster: a.g,
					devAndStagingWatermark: a.g,
					fpsMeter: a.k,
					rabbitHole: a.k,
					measureScrollFPS: a.h,
					showVerboseErrors: Object(a.e)(a.g, a.h),
					uappBanner: a.k,
					experiments: Object(a.a)(a.i, Object(a.d)(a.f)),
					enableGraphQl: a.i,
					importExportThemes: a.h,
					flairRestrictions: a.l,
					newPostRequirements: a.l,
					superbOwl: a.j,
					enableShadowMode: Object(a.c)(0),
					pushNotificationsBrowserSupported: e => {
						const t = navigator.userAgent,
							i = Object(l.a)(t).browser.version;
						if (!i) return !1;
						let n;
						try {
							n = i.split(/[^\d]/)[0]
						} catch (r) {
							return !1
						}
						return !(!Object(l.c)(t) && !Object(h.a)(e, {
							pageLayer: Object(_.b)(e)
						})) && (!!(Object(l.b)(t) && parseInt(n) >= 50) || (!!(Object(l.d)(t) && parseInt(n) > 52) || !!(Object(l.f)(t) && parseInt(n) >= 27)))
					},
					enableCrowdControlMode: e => !1,
					enableCrowdControlLevel: e => {
						const t = Object(_.e)(e);
						return !!t && f.has(t.toLowerCase())
					},
					enableToxicityWarning: e => {
						const t = Object(_.e)(e);
						return !!t && w.has(t.toLowerCase())
					},
					snoovatar30: a.g,
					geoSubredditRecommendationDULoggedIn: a.l,
					geoSubredditRecommendationDULoggedOut: a.l,
					subredditInlineEditing: a.l,
					modToMemberShare: e => {
						const t = Object(_.e)(e);
						return !!t && g.has(t.toLowerCase())
					},
					subredditMentionD2xExperiment: a.l,
					privacySettingLocationBasedRecommendations: a.l,
					langSelect: Object(a.e)(a.g, a.h),
					reCaptchaEnterprise: Object(a.e)(a.g, a.h, Object(a.d)(Object(a.b)(...d.b))),
					__requiredDoNotRemove: a.k
				},
				v = o()(y, (e, t) => i => {
					const n = i.featureFlags.overrides[t];
					return r()(n) ? e(i) : n
				}),
				T = Object.keys(y),
				S = e => e.filter(e => "__requiredDoNotRemove" !== e),
				E = /^feature_(.*)$/i,
				F = e => {
					const t = e.match(E);
					if (null !== t) return t[1]
				},
				I = "FEATURES__FEATURE_SET",
				O = "FEATURES__FEATURE_TOGGLED",
				j = e => {
					let {
						featureName: t
					} = e;
					return (e, i) => {
						const n = (0, v[t])(i());
						e((e => {
							let {
								featureName: t,
								currentValue: i
							} = e;
							return {
								type: O,
								payload: {
									featureName: t,
									currentValue: i
								}
							}
						})({
							featureName: t,
							currentValue: n
						}))
					}
				}
		},
		"./src/reddit/featureFlags/profileCollections.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/reddit/models/User/index.ts");
			const r = new Set(["0perspective", "almondparfitt", "almondparfitt", "avocadoast", "chtorrr", "coachzzz", "crowd__pleaser", "dadintech", "flash_55", "igabeup", "kalluraya", "kp-krunal", "kpkrunal", "lakelly000", "sodypop", "vlkoti", "wokata", "wting", "mynameizkhan", "mattkula", "wokata", "vladkonon", "jamiewu683", "casualwill", "Mother_of_Memes", "hardleyjeannite", "recklessmaterialism", "toyotausa", "allierightmeow", "shotteh22", "adsforthewin", "cheepono_foundation", "captainenergy"]),
				s = e => {
					if (!e.user.account) return !1;
					const t = Object(n.e)(e.user.account).toLowerCase();
					return r.has(t)
				}
		},
		"./src/reddit/featureFlags/subredditPoints.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return v
			})), i.d(t, "b", (function() {
				return j
			})), i.d(t, "c", (function() {
				return R
			})), i.d(t, "d", (function() {
				return k
			})), i.d(t, "f", (function() {
				return C
			})), i.d(t, "g", (function() {
				return N
			})), i.d(t, "e", (function() {
				return P
			})), i.d(t, "h", (function() {
				return L
			})), i.d(t, "i", (function() {
				return A
			})), i.d(t, "j", (function() {
				return D
			})), i.d(t, "k", (function() {
				return G
			})), i.d(t, "l", (function() {
				return M
			})), i.d(t, "m", (function() {
				return U
			})), i.d(t, "n", (function() {
				return q
			})), i.d(t, "o", (function() {
				return H
			})), i.d(t, "p", (function() {
				return V
			})), i.d(t, "q", (function() {
				return W
			})), i.d(t, "r", (function() {
				return z
			})), i.d(t, "s", (function() {
				return K
			})), i.d(t, "t", (function() {
				return Q
			})), i.d(t, "u", (function() {
				return J
			})), i.d(t, "v", (function() {
				return Y
			})), i.d(t, "w", (function() {
				return X
			})), i.d(t, "x", (function() {
				return Z
			})), i.d(t, "z", (function() {
				return $
			})), i.d(t, "B", (function() {
				return ee
			})), i.d(t, "y", (function() {
				return te
			})), i.d(t, "A", (function() {
				return ie
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/reddit/selectors/platform.ts");
			const r = new Set(["daonuts", "ethtrader", "karma_chameleon", "pointsrtesty", "stellartest"]),
				s = new Set(["cryptocurrency", "cryptocurrencytest", "fortnitebr", "funkygoose", "gigapoints", "pointsnitebr"]),
				o = new Set(["badgesroyaletest", "fortnitebr", "funkygoose"]),
				d = new Set(["daonuts", "ethtrader", "stellartest"]),
				l = new Set(["funkygoose"]),
				a = new Set(["badgesroyaletest", "cryptocurrency", "cryptocurrencytest", "fortnitebr", "funkygoose", "gigapoints", "pointsnitebr"]),
				u = new Set(["fortnitebr", "funkygoose"]),
				c = new Set(["funkygoose"]),
				_ = new Set(["badgesroyaletest", "daonuts", "cryptocurrency", "cryptocurrencytest", "ethtrader", "fortnitebr", "funkygoose", "gigapoints", "pointsnitebr", "stellartest"]),
				m = new Set(["daonuts", "ethtrader", "funkygoose", "funkygooseeggs", "karma_chameleon", "modtestmeyourpoints", "mountainbiking", "nr4madastest", "pointsrtesty", "project_kairos", "qameplease", "stellar", "stellartest"]),
				p = new Set(["daonuts", "ethtrader", "funkygoose", "stellar"]),
				h = new Set(["badgesroyaletest", "fortnitebr"]),
				f = new Set(["badgesroyaletest", "cryptocurrency", "cryptocurrencytest", "daonuts", "ethtrader", "fortnitebr", "funkygoose", "gigapoints", "pointsnitebr", "stellar", "stellartest"]),
				g = new Set([]),
				b = new Set(["cryptocurrency", "cryptocurrencytest", "daonuts", "ethtrader", "fortnitebr", "funkygoose", "funkygooseeggs", "gigapoints", "karma_chameleon", "modtestmeyourpoints", "mountainbiking", "nr4madastest", "pointsnitebr", "pointsrtesty", "project_kairos", "qameplease", "stellar", "stellartest"]),
				w = new Set(["cryptocurrency", "cryptocurrencytest", "daonuts", "ethtrader", "fortnitebr", "funkygoose", "funkygooseeggs", "gigapoints", "karma_chameleon", "modtestmeyourpoints", "mountainbiking", "nr4madastest", "pointsnitebr", "pointsrtesty", "project_kairos", "qameplease", "stellar", "stellartest"]),
				y = new Set(["badgesroyaletest", "cryptocurrency", "cryptocurrencytest", "daonuts", "ethtrader", "fortnitebr", "funkygoose", "gigapoints", "pointsnitebr", "stellartest"]),
				v = new Set(["badgesroyaletest", "cryptocurrency", "cryptocurrencytest", "daonuts", "ethtrader", "fortnitebr", "funkygoose", "gigapoints", "pointsnitebr", "stellartest"]),
				T = new Set(["badgesroyaletest", "fortnitebr", "funkygoose"]),
				S = new Set(["cryptocurrency", "cryptocurrencytest", "daonuts", "ethtrader", "fortnitebr", "funkygoose", "gigapoints", "mountainbiking", "pointsnitebr", "stellar", "stellartest"]),
				E = new Set(["funkygoose"]),
				F = new Set(["badgesroyaletest", "cryptocurrency", "cryptocurrencytest", "daonuts", "ethtrader", "fortnitebr", "funkygoose", "gigapoints", "pointsnitebr", "shittymorph", "stellartest"]),
				I = new Set(["daonuts", "ethtrader", "funkygoose", "mountainbiking", "stellar", "stellartest"]),
				O = new Set(["funkygoose"]),
				j = new Set(["stellar", "stellartest"]),
				B = new Set(["daonuts", "ethtrader"]),
				x = function() {
					for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
					return e => {
						const i = Object(n.e)(e);
						if (i) {
							for (const e of t)
								if (!e.has(i.toLowerCase())) return !1;
							return !0
						}
						return !1
					}
				},
				R = x(b, r),
				k = x(s),
				C = x(o),
				N = x(d),
				P = x(F, l),
				L = x(a),
				A = x(u),
				D = x(F, c),
				G = x(_),
				M = x(b, w, m),
				U = x(b, p),
				q = x(h),
				H = x(f),
				V = x(g),
				W = x(b),
				z = x(b, w),
				K = x(F, y),
				Q = x(F, v),
				J = x(F, T),
				Y = x(S),
				X = x(b, E),
				Z = x(j),
				$ = x(S, I),
				ee = x(B),
				te = x(F),
				ie = x(F, O)
		},
		"./src/reddit/featureFlags/utils.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "c", (function() {
				return u
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "l", (function() {
				return _
			})), i.d(t, "k", (function() {
				return m
			})), i.d(t, "f", (function() {
				return p
			})), i.d(t, "h", (function() {
				return h
			})), i.d(t, "g", (function() {
				return f
			})), i.d(t, "i", (function() {
				return g
			})), i.d(t, "j", (function() {
				return b
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/crypto-js/sha256.js"),
				r = i.n(n);
			var s = i("./src/reddit/selectors/runTimeEnvVars.ts"),
				o = i("./src/reddit/selectors/user.ts");
			const d = e => t => !e(t),
				l = function() {
					for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
					return e => t.some(t => t(e))
				},
				a = function() {
					for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
					return e => t.every(t => t(e))
				},
				u = e => t => ((e, t) => {
					let {
						user: i
					} = e;
					if (0 === t) return !1;
					const n = i && i.loid.loid;
					return !!n && parseInt(r()(n).toString(), 16) % 1e3 < 10 * t
				})(t, e),
				c = function() {
					for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
					return e => t.some(t => t === e.meta.country)
				},
				_ = e => !0,
				m = e => !1,
				p = e => !1,
				h = o.E,
				f = l(p, s.c),
				g = e => !!e.user.session,
				b = ((e, t) => i => {
					const n = i.meta.pageloadServerTime;
					return n > e && n < t
				})(15492132e5, 15492561e5)
		},
		"./src/reddit/helpers/canonicalUrls.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return f
			})), i.d(t, "d", (function() {
				return g
			})), i.d(t, "a", (function() {
				return b
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "e", (function() {
				return v
			})), i.d(t, "f", (function() {
				return T
			}));
			i("./node_modules/core-js/modules/es6.array.sort.js"), i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = i("./node_modules/react-router-redux/es/index.js"),
				r = i("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = i.n(r),
				o = i("./src/lib/addQueryParams/index.ts"),
				d = i("./src/lib/isAdHocMultireddit/index.ts"),
				l = i("./src/lib/isFakeSubreddit/index.ts"),
				a = i("./src/reddit/actions/otherDiscussions/constants.ts"),
				u = i("./src/reddit/constants/topic.ts"),
				c = i("./src/reddit/models/Comment/index.ts"),
				_ = i("./src/reddit/models/Post/index.ts"),
				m = (i("./src/reddit/selectors/meta.ts"), i("./src/reddit/selectors/multireddit.ts")),
				p = i("./src/reddit/selectors/subreddit.ts");
			const h = (e, t, i, r, s) => {
					const d = Object(o.a)(i, r),
						l = e.platform && e.platform.currentPage && e.platform.currentPage.locationState || void 0;
					t(Object(n.c)(d, l))
				},
				f = (e, t, i) => {
					const {
						params: n,
						queryParams: r,
						url: s
					} = i, {
						multiredditName: o,
						username: d
					} = n, l = Object(m.g)(e, {
						multiredditName: o,
						username: d
					});
					if (!l) return;
					const a = s === l,
						u = s.endsWith("/");
					if (a && u) return;
					const c = u ? s : "".concat(s, "/"),
						_ = a ? c : "".concat(l).concat(c.substr(l.length));
					h(e, t, _, r)
				},
				g = (e, t, i) => {
					const {
						params: n,
						queryParams: r,
						url: s
					} = i, {
						subredditName: o
					} = n;
					if (o) {
						const i = "/user/".concat(o, "/"),
							n = s.endsWith("/"),
							d = Object(p.b)(e, {
								profileName: o
							});
						if (!d) return;
						const l = i === d;
						if (l && n) return;
						const a = n ? s : "".concat(s, "/"),
							u = l ? a : a.replace(i, d);
						h(e, t, u, r)
					}
				},
				b = (e, t) => {
					let i;
					if (Object(l.a)(t) && Object(d.a)(t)) {
						const {
							subredditIds: n
						} = Object(m.a)(e, {
							listingName: t
						});
						if (!n) return;
						const r = Object(p.Y)(e, {
							subredditIds: n
						}).map(e => e.name).sort().join("+");
						i = "/r/".concat(r, "/")
					}
					return i
				},
				w = (e, t, i) => {
					const {
						params: n,
						queryParams: r,
						url: o
					} = i, {
						partialCommentId: d,
						partialPostId: l
					} = n, u = d ? Object(c.e)(d) : "", m = l ? Object(_.m)(l) : "";
					if (u) {
						const i = e.comments.models[u];
						if (!i) return;
						const n = s.a.parse(i.permalink).pathname;
						n && n !== o && h(e, t, n, r)
					} else if (m) {
						const n = e.posts.models[m];
						if (!n) return;
						const d = s.a.parse(n.permalink).pathname,
							l = Object(a.d)(i.path),
							u = d && l ? Object(a.e)(d) : d;
						d && d !== o && !l ? h(e, t, d, r) : u && u !== Object(a.e)(o) && l && h(e, t, u, r)
					}
				},
				y = e => e.replace(/\/$/, ""),
				v = (e, t, i) => {
					const {
						params: n,
						queryParams: r,
						url: s
					} = i, {
						subredditName: o
					} = n;
					if (o) {
						const i = "/r/".concat(o, "/"),
							n = s.endsWith("/");
						let a = s;
						if (Object(l.a)(o) && Object(d.a)(o)) {
							const t = b(e, o);
							t && (a = a.replace(y(i), y(t)))
						} else {
							const t = Object(p.d)(e, {
								subredditName: o
							});
							if (!t) return;
							const r = (Object(l.a)(o) ? i.toLowerCase() : i) === t;
							if (r && n) return;
							const d = n ? s : "".concat(s, "/");
							a = r ? d : d.replace(y(i), y(t))
						}
						a !== s && h(e, t, a, r)
					}
				},
				T = (e, t, i) => {
					const {
						params: n,
						queryParams: r,
						url: s
					} = i, o = Object(u.a)(n.topicSlug), d = o !== s;
					return d && h(e, t, o, r), d
				}
		},
		"./src/reddit/helpers/chooseVariant/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return h
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "c", (function() {
				return y
			})), i.d(t, "d", (function() {
				return v
			}));
			var n = i("./node_modules/reselect/es/index.js"),
				r = i("./src/reddit/constants/experiments.ts"),
				s = i("./src/reddit/helpers/featureThrottling/store/index.ts"),
				o = i("./src/reddit/selectors/experiments/index.ts"),
				d = i("./src/reddit/selectors/platform.ts"),
				l = i("./src/reddit/selectors/telemetry.ts"),
				a = i("./src/telemetry/index.ts"),
				u = i("./src/telemetry/models/Event.ts");
			const c = (e, t, i, n) => {
					Object(a.a)(Object.assign({
						action: u.c.Expose,
						actionInfo: void 0,
						app: l.app(),
						experiment: i,
						noun: u.d.UserId,
						referrer: void 0,
						request: t,
						session: void 0,
						source: u.e.Experiment,
						user: e
					}, n))
				},
				_ = (e, t) => {
					const i = l.request(e),
						n = Object(o.d)(e);
					n && (i.canonical_url = n);
					const r = Object(o.b)(e, t),
						s = void 0 !== r,
						c = Object(o.c)(e, t);
					let _;
					s ? _ = {
						id: -1,
						isOverride: !0,
						name: t.experimentName,
						variant: r,
						version: "-1"
					} : c && (_ = Object.assign({}, c, {
						isOverride: !1
					}));
					const m = Object(d.n)(e),
						p = m ? l.post(e, m) : void 0;
					Object(a.a)({
						source: u.e.Experiment,
						action: u.c.Expose,
						noun: u.d.CanonicalUrl,
						actionInfo: void 0,
						app: l.app(),
						experiment: _,
						post: p,
						request: i,
						referrer: void 0,
						session: void 0,
						subreddit: l.subreddit(e),
						user: l.user(e)
					})
				};
			var m = i("./src/server/helpers/seoMetadata.tsx");
			const p = (e, t) => {
					if (!t.experimentEligibilitySelector(e)) return !1;
					if (t.isThrottled && s.a.isFeatureThrottled(t.experimentName)) return !1;
					if (t.throttledVariants) {
						const i = ((e, t) => {
								const i = Object(o.c)(e, t),
									n = Object(o.b)(e, t);
								return void 0 !== n ? n : i && i.name || void 0
							})(e, t),
							n = i && t.throttledVariants[i];
						if (n && s.a.isFeatureThrottled(n)) return !1
					}
					return !0
				},
				h = () => !0,
				f = {},
				g = {},
				b = [r.n, r.o],
				w = Object(n.a)((e, t) => e, o.c, o.b, p, (e, t) => t.expEventOverride, (e, t) => t.experimentName, (e, t, i, n, r, s) => {
					if (!n) return;
					const o = Object(m.a)(e) || "",
						d = g[o] || {};
					if (!t) return i && d[s] !== i && !1 !== r && (_(e, {
						experimentName: s
					}), d[s] = i, g[o] = d), i;
					const l = t.name,
						a = void 0 !== i ? i : t.variant;
					if (a) {
						d[l] === a || !1 === r || (_(e, {
							experimentName: s
						}), d[s] = a, g[o] = d)
					}
					return a
				}),
				y = Object(n.a)(o.c, o.b, e => l.user(e), e => l.request(e), (e, t) => t.expEventOverride, (e, t) => t.customPayloadMaker && t.customPayloadMaker(e), p, (e, t) => t.experimentName, (function(e, t, i, n, r) {
					let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
						o = arguments.length > 6 ? arguments[6] : void 0,
						d = arguments.length > 7 ? arguments[7] : void 0;
					if (!o) return;
					if (!e) return t && !1 !== r && f[d] !== t && !b.includes(d) && (c(i, n, {
						id: -1,
						isOverride: !0,
						name: d,
						variant: t,
						version: "-1"
					}, s), f[d] = t), t;
					const l = e.name,
						{
							id: a
						} = e,
						u = void 0 !== t,
						_ = u ? t : e.variant;
					if (_) {
						const t = -1 === a,
							o = f[l] === _;
						t || o || !1 === r || b.includes(d) || (c(i, n, Object.assign({}, e, {
							isOverride: u,
							variant: _
						}), s), f[l] = _)
					}
					return u ? t : _
				})),
				v = (e, t) => {
					const i = l.user(e),
						n = l.request(e),
						r = Object(o.c)(e, t),
						s = Object(o.b)(e, t),
						d = void 0 !== s;
					if (r) {
						const e = d ? s : r.variant;
						e && c(i, n, Object.assign({}, r, {
							isOverride: d,
							variant: e
						}), {})
					}
				}
		},
		"./src/reddit/helpers/correlationIdTracker.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			})), i.d(t, "b", (function() {
				return a
			}));
			var n, r = i("./node_modules/uuid/v4.js"),
				s = i.n(r);
			! function(e) {
				e.AwardCreationFlow = "AwardCreationFlow", e.AwardDeletionFlow = "AwardDeletionFlow", e.Explore = "Explore", e.GildingFlow = "GildingFlow", e.GiftPremiumFlow = "GiftPremiumFlow", e.GoldPayment = "GoldPayment", e.PostComposer = "PostComposer", e.PremiumSettings = "PremiumSettings", e.SearchResults = "SearchResults", e.VideoView = "VideoView"
			}(n || (n = {}));
			const o = {},
				d = e => o[e],
				l = e => o[e] = s()(),
				a = e => o[e] = void 0
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "d", (function() {
				return a
			})), i.d(t, "i", (function() {
				return u
			})), i.d(t, "c", (function() {
				return c
			})), i.d(t, "b", (function() {
				return _
			})), i.d(t, "e", (function() {
				return m
			})), i.d(t, "h", (function() {
				return p
			})), i.d(t, "a", (function() {
				return h
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/lodash/map.js"),
				r = i.n(n),
				s = i("./src/lib/FocusTrap/index.ts");
			const o = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				d = e => {
					let t = e;
					do {
						if (o(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				l = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				a = () => l() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
				})() : null,
				u = (e, t) => {
					const i = document.createRange();
					return i.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, i) < 0 && e.compareBoundaryPoints(Range.START_TO_END, i) > 0
				},
				c = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const i = t.getRangeAt(0);
					if (!u(i, e)) return;
					const {
						startContainer: n,
						startOffset: r,
						endContainer: s,
						endOffset: o
					} = i, d = document.createRange();
					d.selectNode(e);
					let l = !0;
					if (-1 === d.compareBoundaryPoints(Range.START_TO_START, i) && (d.setStart(n, r), l = !1), 1 === d.compareBoundaryPoints(Range.END_TO_END, i) && (d.setEnd(s, o), l = !1), l) return [e];
					const a = document.createElement("div");
					return a.appendChild(d.cloneContents()), [...a.childNodes]
				},
				_ = (e, t, i) => {
					let n = e;
					for (; n && (!i || !i(n));) {
						if (n && t(n)) return n;
						n = n.parentElement
					}
				},
				m = e => e && e.parentElement && _(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				p = e => {
					if (!e || e.hidden) return !0;
					if (window.getComputedStyle) {
						const t = window.getComputedStyle(e);
						if ("none" === t.display || "hidden" === t.visibility) return !0
					}
					return !!e.parentElement && p(e.parentElement)
				},
				h = e => {
					e.querySelectorAll(s.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/featureThrottling/store/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/uuid/v4.js"),
				r = i.n(n),
				s = i("./src/reddit/constants/featureThrottling.ts"),
				o = i("./src/reddit/helpers/localStorage/index.ts"),
				d = i("./node_modules/lodash/uniq.js"),
				l = i.n(d),
				a = i("./node_modules/reselect/es/index.js"),
				u = i("./src/reddit/models/FeatureThrottling/index.ts");
			const c = [],
				_ = (e, t, i) => {
					switch (e.type) {
						case u.b.TimesPerPeriod: {
							const i = Date.now() - e.period;
							return t.filter(e => e.when >= i).length < e.times
						}
						case u.b.TimesPerSession:
							return t.filter(e => e.sessionId === i).length < e.times;
						case u.b.TimesTotal:
							return t.length < e.times;
						case u.b.NthSession:
							return l()([...t.map(e => e.sessionId), i]).length % e.nth == 0;
						case u.b.Combined:
							return (e.op === u.a.And ? Array.prototype.every : Array.prototype.some).call(e.configs, e => _(e, t, i));
						default:
							return !1
					}
				},
				m = Object(a.a)((e, t) => t.name, (e, t) => t.sessionId, (e, t) => s.a[t.name], (e, t) => e[t.name] || c, (e, t, i, n) => {
					if (!i) return !1;
					try {
						return _(i, n, t)
					} catch (r) {
						return !1
					}
				}),
				p = (e, t) => !m(e, t);
			const h = new class {
				constructor() {
					this.isReady = !1, this.listeners = new Set, this.sessionId = "", this.throttlingData = {}, this.subscribe = e => {
						this.listeners.has(e) || (this.listeners.add(e), this.isReady && e(this.throttlingData))
					}, this.unsubscribe = e => {
						this.listeners.delete(e)
					}, this.persistToLSAndNotify = e => {
						Object(o.M)(this.throttlingData), this.notifyAll(e)
					}, this.isFeatureThrottled = e => !!this.isReady && p(this.throttlingData, {
						name: e,
						sessionId: this.sessionId
					}), this.throttleFeature = e => {
						s.a[e] && !this.isFeatureThrottled(e) && (this.throttlingData = Object.assign({}, this.throttlingData, {
							[e]: [...this.throttlingData[e] || [], {
								sessionId: this.sessionId,
								when: Date.now()
							}]
						}), this.persistToLSAndNotify(e))
					}, this.resetFeature = e => {
						s.a[e] && (this.throttlingData = Object.assign({}, this.throttlingData, {
							[e]: []
						}), this.persistToLSAndNotify(e))
					}
				}
				initialize() {
					const e = Object(o.k)();
					if (!e) return;
					const t = Object.keys(s.a);
					let i = !1;
					Object.keys(e).forEach(n => {
						t.includes(n) || (delete e[n], i = !0)
					}), i && Object(o.M)(e), this.throttlingData = e, this.sessionId = r()(), this.isReady = !0, this.notifyAll()
				}
				notifyAll(e) {
					this.isReady && this.listeners.forEach(t => {
						t(this.throttlingData, e)
					})
				}
			};
			t.a = h
		},
		"./src/reddit/helpers/flair.ts": function(e, t, i) {
			"use strict";
			i.d(t, "p", (function() {
				return c
			})), i.d(t, "g", (function() {
				return m
			})), i.d(t, "i", (function() {
				return p
			})), i.d(t, "o", (function() {
				return h
			})), i.d(t, "a", (function() {
				return f
			})), i.d(t, "q", (function() {
				return g
			})), i.d(t, "n", (function() {
				return w
			})), i.d(t, "h", (function() {
				return y
			})), i.d(t, "c", (function() {
				return S
			})), i.d(t, "b", (function() {
				return E
			})), i.d(t, "l", (function() {
				return F
			})), i.d(t, "f", (function() {
				return O
			})), i.d(t, "d", (function() {
				return j
			})), i.d(t, "r", (function() {
				return x
			})), i.d(t, "k", (function() {
				return R
			})), i.d(t, "m", (function() {
				return k
			})), i.d(t, "j", (function() {
				return C
			})), i.d(t, "e", (function() {
				return N
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/isEqual.js"),
				s = i.n(r),
				o = i("./src/lib/addQueryParams/index.ts"),
				d = i("./src/lib/formatEmojiName/index.ts"),
				l = i("./src/reddit/constants/colors.ts"),
				a = i("./src/reddit/constants/flair.ts"),
				u = i("./src/reddit/models/Flair/index.ts");
			const c = e => e === u.f.Text || e === u.f.Richtext || e === u.f.Image || e === u.f.Meta,
				_ = e => e.e === u.c.Emoji ? Object(d.b)(e.a) : e.t,
				m = e => e.type === u.f.Richtext ? e.richtext.map(_).join("") : e.text || "",
				p = e => m(e).length,
				h = (e, t) => m(e) === m(t),
				f = e => !e.allowableContent || e.allowableContent === u.a.Emoji || e.allowableContent === u.a.All,
				g = e => !e.allowableContent || e.allowableContent === u.a.Text || e.allowableContent === u.a.All,
				b = e => !!e.find(e => e.e === u.c.Text),
				w = e => e.type === u.f.Richtext ? b(e.richtext) : !!e.text,
				y = e => e.type === u.f.Richtext ? e.richtext.reduce((e, t) => t.e === u.c.Emoji ? e + 1 : e, 0) : 0,
				v = e => ({
					e: u.c.Text,
					t: e
				}),
				T = (e, t) => ({
					e: u.c.Emoji,
					a: e,
					u: t
				}),
				S = function(e) {
					let t, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return t = e.type === u.f.Richtext ? {
						backgroundColor: e.backgroundColor,
						cssClass: e.cssClass,
						richtext: e.richtext,
						templateId: e.id,
						textColor: e.textColor,
						type: e.type
					} : {
						backgroundColor: e.backgroundColor,
						cssClass: e.cssClass,
						templateId: e.id,
						text: e.text,
						textColor: e.textColor,
						type: e.type
					}, i && (t = j({
						flair: t,
						template: e
					})), t
				},
				E = () => {
					return {
						backgroundColor: l.a.defaultFlair,
						text: "",
						textColor: u.e.Dark,
						type: u.f.Text
					}
				},
				F = e => {
					let {
						maxEmojis: t
					} = e;
					if ("string" == typeof t) {
						const e = parseInt(t, 10);
						return Number.isInteger(e) ? e : a.d
					}
					return "number" == typeof t ? t : a.d
				},
				I = (e, t) => {
					if (t >= e.length) return e;
					let i = e,
						n = -1,
						r = 0,
						s = -1;
					for (let o = 0; o < e.length; o++)
						if (e[o].e === u.c.Emoji)
							if (++r === t) s = o;
							else if (r > t) {
						n = s + 1;
						break
					}
					if (n >= 0) {
						i = e.slice(0, n);
						let t = "";
						for (let i = n; i < e.length; i++) t += _(e[i]);
						i.push(v(t))
					}
					return i
				},
				O = (e, t) => {
					const i = e.type === u.f.Richtext ? e.richtext : [],
						n = m(e);
					return Object.assign({}, t, {
						type: e.type,
						richtext: i,
						text: n
					})
				},
				j = e => {
					const {
						flair: t,
						template: i,
						ignoreTextAllowance: n = !1
					} = e, r = !!n || g(i);
					let s = t;
					if (t.type === u.f.Richtext) {
						let e = t.richtext;
						e = f(i) ? I(e, F(i)) : I(e, 0), !r && b(e) && (e = e.filter(e => e.e !== u.c.Text)), e !== t.richtext && (s = Object.assign({}, t, {
							richtext: e
						}))
					} else t.text && !r && (s = Object.assign({}, t, {
						text: ""
					}));
					return s
				},
				B = () => !0,
				x = function(e, t) {
					let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : B;
					const {
						emojis: n,
						snoomojis: r
					} = t, o = e.type === u.f.Richtext ? e.richtext : [v(e.text)], l = [];
					return o.forEach(e => {
						if (e.e === u.c.Text) {
							e.t.split(/(:[-\w]+:)/).forEach(e => {
								if (!e) return;
								if (d.a.test(e)) {
									const t = e,
										s = t.slice(1, -1),
										o = n[s] || r[s];
									if (o && i(o)) {
										const e = T(t, o.url);
										return void l.push(e)
									}
								}
								const t = l[l.length - 1];
								t && t.e === u.c.Text ? t.t += e : l.push(v(e))
							})
						} else l.push(e)
					}), s()(l, o) ? e : Object.assign({}, e, {
						type: u.f.Richtext,
						richtext: l
					})
				},
				R = e => {
					const t = F(e);
					return e.allowableContent === u.a.Emoji ? n.fbt._({
						"*": "Allows up to {number} emojis only",
						_1: "Allows up to 1 emoji only"
					}, [n.fbt._plural(t, "number")], {
						hk: "3377Jj"
					}) : e.allowableContent === u.a.Text ? n.fbt._("Allows text only", null, {
						hk: "49lmsO"
					}) : n.fbt._({
						"*": "Allows text and up to {number} emojis",
						_1: "Allows text and up to 1 emoji"
					}, [n.fbt._plural(t, "number")], {
						hk: "2xjY7a"
					})
				},
				k = function(e, t) {
					let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
					const r = p(e),
						s = g(t),
						o = f(t);
					if (0 === r && !i.allowBlank) return s && o ? n.fbt._("Error: text or emoji is required", null, {
						hk: "1xtECb"
					}) : o ? n.fbt._("Error: emoji is required", null, {
						hk: "4t0Hum"
					}) : n.fbt._("Error: text is required", null, {
						hk: "2VMFwd"
					});
					if (r > a.g && !i.allowOverflow) return n.fbt._("Error: character limit exceeded", null, {
						hk: "2ejRbH"
					});
					const d = F(t),
						l = y(e);
					return !s && w(e) ? n.fbt._("Error: Only emojis allowed", null, {
						hk: "4edtZW"
					}) : !o && l > 0 ? n.fbt._("Error: Emojis aren't allowed", null, {
						hk: "40qrwM"
					}) : l > d ? n.fbt._({
						"*": "Error: Exceeds {number} emojis limit",
						_1: "Error: Exceeds 1 emoji limit"
					}, [n.fbt._plural(d, "number")], {
						hk: "m0uE6"
					}) : void 0
				},
				C = e => 'flair_name:"'.concat(m(e), '"'),
				N = (e, t) => Object(o.a)(e, {
					f: t
				})
		},
		"./src/reddit/helpers/getCommentsPageSort/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/extractQueryParams/index.ts"),
				s = i("./node_modules/lodash/fromPairs.js"),
				o = i.n(s),
				d = i("./src/reddit/constants/parameters.ts"),
				l = i("./src/reddit/selectors/experiments/chatPost.ts"),
				a = i("./src/reddit/selectors/user.ts");
			t.a = (e, t) => {
				const {
					user: i
				} = e, s = t && e.posts.models[t], u = s && s.suggestedSort ? s.suggestedSort : "", c = !!i && Object(a.A)(e);
				let _, m = n.s,
					p = !1;
				i && i.prefs && (_ = i.prefs.defaultCommentSort), c ? m = _ : u ? m = u : _ && (m = _);
				const h = (e => {
						const t = e.platform.currentPage && e.platform.currentPage.url;
						return t && o()([...Object(r.a)(t)]) || new Set([])
					})(e),
					f = d.r in h ? h[d.r] : "";
				return (n.Ub.has(f) ? f : m) === f && (m = f), f && (p = !0), Object(l.d)(e, {
					postId: t
				}) && (m = n.r.CHAT, p = !1), {
					hasSortParam: p,
					sortToUse: m
				}
			}
		},
		"./src/reddit/helpers/getPostFromRouteMatch/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = i("./src/reddit/models/Post/index.ts"),
				r = i("./src/lib/constants/index.ts");
			t.a = (e, t) => {
				if (!t) {
					const {
						currentPage: i
					} = e.platform;
					if (!i) return null;
					t = i.routeMatch
				}
				const {
					name: i
				} = t.route.meta;
				if (i === r.zb.COMMENTS || i === r.zb.DUPLICATES) {
					const {
						partialPostId: i
					} = t.match.params, r = Object(n.m)(i);
					return e.posts.models[r]
				}
				return null
			}
		},
		"./src/reddit/helpers/getRichTextContent/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return c
			})), i.d(t, "b", (function() {
				return _
			})), i.d(t, "d", (function() {
				return m
			}));
			var n = i("./src/lib/env/index.ts"),
				r = i("./src/lib/sentry/index.ts"),
				s = i("./src/reddit/helpers/isComment.ts"),
				o = i("./src/reddit/models/RichTextJson/index.ts"),
				d = (i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./src/reddit/models/RichTextJson/nodeMakers.ts"));
			const l = {
				document: "[Unable to render content]".split("\n").map(e => Object(d.l)([Object(d.s)(e, null)]))
			};
			const a = (e, t) => {
					const i = Object(s.a)(t.id),
						o = "getRichTextContent: ".concat(e, " (in ").concat(i ? "comment" : "post", ")");
					r.c.withScope(e => {
						e.setExtra("info", {
							id: t.id,
							permalink: t.permalink,
							media: t.media
						}), e.setTag("rtjson", "getting_content"), r.c.captureMessage(o)
					}), Object(n.b)() || console.log("".concat(t.id, ": ").concat(o))
				},
				u = function(e, t) {
					let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					const n = void 0 === t ? l : t,
						r = e.media;
					if (!r) return i && a("Media object is missing", e), n;
					if ("rtjson" !== r.type) return i && a("Media object type is not rtjson", e), n;
					const s = r.richtextContent;
					return s ? Array.isArray(s.document) ? s : (i && a("Invalid richtextContent document", e), n) : (i && a("Missing richtextContent property", e), n)
				},
				c = e => !!u(e, null, !1),
				_ = e => {
					const t = u(e, null, !1);
					if (!t) return;
					const i = t.document,
						n = [];
					return i.forEach(e => {
						if (e.e === o.u) {
							e.c.forEach(e => {
								e.e === o.A && n.push(e.t)
							})
						}
					}), 0 !== n.length ? n.join(" ") : void 0
				},
				m = e => {
					const t = u(e, null, !1);
					if (!t) return !1;
					const i = t.document,
						n = [];
					if (i.length > 0) {
						const e = i[0];
						if (e.e === o.u) {
							if (e.c.forEach(e => {
									e.e === o.A && n.push(e.t)
								}), n.length > 0 && n.join("").trim().length > 0) return !0
						}
					}
					return !1
				};
			t.a = u
		},
		"./src/reddit/helpers/getS3KeyFromUrl/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = i.n(n);
			t.a = e => {
				const {
					pathname: t = ""
				} = r.a.parse(e);
				return t.startsWith("/") ? t.slice(1) : t
			}
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, i) => {
				let r, s, o, d, l, a;
				return e ? e.quarantinedSubreddit ? (s = n.a.QuarantinedSubreddit, d = e.quarantineMessage, l = e.quarantineMessageHtml, a = e.quarantineRequiresEmail) : e.privateSubreddit ? (s = n.a.PrivateSubreddit, o = e.subredditDescription) : e.goldSubreddit ? s = n.a.GoldSubreddit : e.subredditBanned ? (s = n.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? s = n.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (s = n.a.SubredditBlockedForLegalReason) : t && (s = n.a.Nsfw), s && i ? {
					banMessage: r,
					contentGateType: s,
					subredditDescription: o,
					subredditName: i,
					quarantineMessage: d,
					quarantineMessageHtml: l,
					quarantineRequiresEmail: a
				} : void 0
			}
		},
		"./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./src/config.ts"),
				r = i("./src/reddit/models/StructuredStyles/index.ts");
			const s = {};
			t.a = e => e.subredditOrProfile ? {
				url: e.shouldHideNsfwIcon && e.subredditOrProfile.isNSFW ? "".concat(n.a.assetPath, "/img/avatar_over18.png") : e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url,
				color: Object(r.i)(e.subredditOrProfile)
			} : s
		},
		"./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/isFakeSubreddit/index.ts"),
				s = i("./src/reddit/constants/page.ts"),
				o = i("./src/reddit/selectors/experiments/bestSortPopular.ts");
			t.a = (e, t) => {
				const {
					sort: i,
					subredditName: d
				} = e;
				return i || (!d || Object(r.a)(d) ? d === s.f && Object(o.a)(t) ? n.kb : n.O : void 0)
			}
		},
		"./src/reddit/helpers/getSubredditUrl/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/isFakeSubreddit/index.ts");
			t.a = e => e && !Object(n.a)(e.name) ? e.url : ""
		},
		"./src/reddit/helpers/imagePreview/index.ts": function(e, t, i) {
			"use strict";

			function n(e) {
				if ("string" == typeof e) return e;
				if (e && window.URL && window.URL.createObjectURL) try {
					return window.URL.createObjectURL(e)
				} catch (t) {}
				return ""
			}

			function r(e) {
				e && window.URL && window.URL.revokeObjectURL && window.URL.revokeObjectURL(e)
			}
			async function s(e) {
				return new Promise((t, i) => {
					const n = new Image;
					n.onload = () => {
						t({
							width: n.width,
							height: n.height
						})
					}, n.onerror = e => i(e), n.src = e
				})
			}
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/isComment.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			}));
			var n = i("./src/reddit/constants/things.ts");

			function r(e) {
				if (!e) return !1;
				return e.substring(0, 3) === n.a
			}
			const s = e => r(e.id);
			t.a = r
		},
		"./src/reddit/helpers/isPost.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return s
			}));
			var n = i("./src/reddit/constants/things.ts");

			function r(e) {
				if (!e) return !1;
				return e.substring(0, 3) === n.b
			}
			const s = e => r(e.id);
			t.a = r
		},
		"./src/reddit/helpers/localStorage/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "R", (function() {
				return g
			})), i.d(t, "o", (function() {
				return b
			})), i.d(t, "p", (function() {
				return w
			})), i.d(t, "C", (function() {
				return y
			})), i.d(t, "U", (function() {
				return F
			})), i.d(t, "D", (function() {
				return I
			})), i.d(t, "s", (function() {
				return O
			})), i.d(t, "G", (function() {
				return j
			})), i.d(t, "f", (function() {
				return B
			})), i.d(t, "x", (function() {
				return x
			})), i.d(t, "Z", (function() {
				return R
			})), i.d(t, "E", (function() {
				return k
			})), i.d(t, "K", (function() {
				return C
			})), i.d(t, "h", (function() {
				return N
			})), i.d(t, "l", (function() {
				return A
			})), i.d(t, "O", (function() {
				return D
			})), i.d(t, "w", (function() {
				return U
			})), i.d(t, "Y", (function() {
				return q
			})), i.d(t, "X", (function() {
				return W
			})), i.d(t, "v", (function() {
				return z
			})), i.d(t, "W", (function() {
				return K
			})), i.d(t, "u", (function() {
				return Q
			})), i.d(t, "e", (function() {
				return J
			})), i.d(t, "d", (function() {
				return Y
			})), i.d(t, "F", (function() {
				return X
			})), i.d(t, "n", (function() {
				return Z
			})), i.d(t, "Q", (function() {
				return $
			})), i.d(t, "z", (function() {
				return ee
			})), i.d(t, "J", (function() {
				return te
			})), i.d(t, "i", (function() {
				return ie
			})), i.d(t, "L", (function() {
				return ne
			})), i.d(t, "T", (function() {
				return re
			})), i.d(t, "r", (function() {
				return se
			})), i.d(t, "t", (function() {
				return oe
			})), i.d(t, "a", (function() {
				return de
			})), i.d(t, "A", (function() {
				return le
			})), i.d(t, "V", (function() {
				return ae
			})), i.d(t, "j", (function() {
				return ue
			})), i.d(t, "b", (function() {
				return ce
			})), i.d(t, "c", (function() {
				return _e
			})), i.d(t, "y", (function() {
				return me
			})), i.d(t, "N", (function() {
				return pe
			})), i.d(t, "H", (function() {
				return he
			})), i.d(t, "m", (function() {
				return ge
			})), i.d(t, "P", (function() {
				return be
			})), i.d(t, "ab", (function() {
				return we
			})), i.d(t, "k", (function() {
				return ye
			})), i.d(t, "M", (function() {
				return ve
			})), i.d(t, "g", (function() {
				return Te
			})), i.d(t, "I", (function() {
				return Se
			})), i.d(t, "q", (function() {
				return Fe
			})), i.d(t, "S", (function() {
				return Ie
			})), i.d(t, "B", (function() {
				return Oe
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/localStorageAvailable/index.ts"),
				r = i("./src/lib/timeAgo/index.ts"),
				s = i("./node_modules/lodash/isEqual.js"),
				o = i.n(s),
				d = i("./node_modules/lodash/isObjectLike.js"),
				l = i.n(d),
				a = i("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = i("./src/reddit/constants/localStorage.ts");
			const c = [u.e, u.p];
			var _ = i("./src/reddit/models/Search/index.ts"),
				m = i("./node_modules/uuid/v4.js"),
				p = i.n(m);
			const h = (e, t) => {
					const i = e.getItem(t);
					if (i) return JSON.parse(i)
				},
				f = (e, t, i) => e.setItem(t, JSON.stringify(i)),
				g = (e, t) => {
					window.localStorage && f(window.localStorage, e, t)
				},
				b = e => h(localStorage, e),
				w = () => {
					const e = {};
					for (const i of c) {
						const n = localStorage.getItem(i);
						if (n) try {
							const t = JSON.parse(n);
							e[i] = t
						} catch (t) {}
					}
					return e
				},
				y = e => {
					const t = /(t2_\w+)/;
					let i = [];
					try {
						i = Object.keys(localStorage)
					} catch (r) {
						return
					}
					const n = i.filter((function(i) {
						const n = t.exec(i);
						if (n && n[1] !== e) return !0
					}));
					try {
						for (let e = 0, t = n.length; e < t; e++) localStorage.removeItem(n[e])
					} catch (r) {
						return
					}
				},
				v = (e, t, i, n) => {
					const r = h(e, t) || {};
					return r[i] = n, f(e, t, r)
				},
				T = (e, t, i, n, r) => {
					const s = h(e, t) || {};
					return l()(s[i]) || (s[i] = {}), s[i][r] = n, f(e, t, s)
				},
				S = (e, t, i) => {
					const n = h(e, t);
					return !!n && !0 === n[i]
				},
				E = (e, t, i, n) => {
					const r = h(e, t);
					return !(!r || !r[i]) && !0 === r[i][n]
				},
				F = (e, t) => v(localStorage, u.r, e, t),
				I = e => ((e, t, i) => {
					const n = h(e, t) || {};
					return delete n[i], f(e, t, n)
				})(localStorage, u.r, e),
				O = e => S(localStorage, u.r, e),
				j = (e, t, i) => T(localStorage, u.c, e, t, i),
				B = (e, t) => E(localStorage, u.c, e, t),
				x = e => ((e, t, i) => {
					const n = h(e, i);
					let r = n ? n[t] : [];
					return r = r.map(e => e.id && e.section ? e : Object.assign({}, e, {
						section: _.c.recent,
						id: p()()
					}))
				})(localStorage, u.x, e),
				R = (e, t) => ((e, t, i, n) => {
					let r = (h(e, n) || {})[t] || [],
						s = -1;
					r = r.map((e, t) => {
						const n = e.id === i.id || e.searchQuery === i.searchQuery && e.subredditOrProfileRestrictedName === i.subredditOrProfileRestrictedName;
						return -1 === s && n && (s = t), e.id && e.section ? e : Object.assign({}, e, {
							id: p()(),
							section: _.c.recent
						})
					}), -1 !== s && r.splice(s, 1), r.length >= 5 && (r = r.slice(0, 4));
					const o = {
						[u.x]: r
					};
					return r.unshift(i), f(e, n, o), r
				})(localStorage, u.x, e, t),
				k = (e, t) => ((e, t, i, n) => {
					const r = h(e, n);
					let s = [];
					if (r && r[t]) {
						s = r[t].filter(e => !o()(e, i));
						const d = {
							[u.x]: s
						};
						f(e, n, d)
					}
					return s
				})(localStorage, u.x, e, t),
				C = (e, t) => ((e, t, i, n) => {
					const r = h(e, t) || {};
					return r[i] = n, f(e, t, r)
				})(localStorage, u.h, e, t),
				N = e => ((e, t, i) => {
					const n = h(e, t);
					return !!n && !0 === n[i]
				})(localStorage, u.h, e),
				P = e => !!G(e),
				L = e => {
					M(e, "1")
				},
				A = () => {
					const e = b(u.m);
					return !(!e || !0 !== e.anonymous)
				},
				D = e => {
					g(u.m, {
						anonymous: e
					})
				},
				G = e => Object(n.a)() && localStorage.getItem(e) || "",
				M = (e, t) => {
					Object(n.a)() && localStorage.setItem(e, t)
				},
				U = () => P(u.w),
				q = () => L(u.w),
				H = e => g(u.v, e),
				V = () => {
					const e = b(u.v);
					if (e) return e;
					const t = P("post-creation-event-tooltip-store");
					t && localStorage.removeItem("post-creation-event-tooltip-store");
					const i = P("post-creation-collection-tooltip-store");
					i && localStorage.removeItem("post-creation-collection-tooltip-store");
					const n = {
						collectionShowTimesLeft: i ? 0 : 3,
						eventShowTimesLeft: t ? 0 : 3
					};
					return H(n), n
				},
				W = e => {
					const t = V();
					H(Object.assign({}, t, {
						eventShowTimesLeft: e
					}))
				},
				z = () => V().eventShowTimesLeft,
				K = e => {
					const t = V();
					H(Object.assign({}, t, {
						collectionShowTimesLeft: e
					}))
				},
				Q = () => V().collectionShowTimesLeft,
				J = () => b(u.b) || {},
				Y = e => {
					const t = b(u.b);
					return t && t[e] || 0
				},
				X = (e, t) => {
					const i = J();
					g(u.b, Object.assign({}, i, {
						[e]: t
					}))
				},
				Z = e => {
					const t = b(u.a);
					return t && t.id === e ? t.count : 0
				},
				$ = (e, t) => {
					g(u.a, {
						id: e,
						count: t
					})
				},
				ee = () => {
					const e = G(u.g);
					return e ? "1" === e : void 0
				},
				te = e => {
					M(u.g, e ? "1" : "0")
				},
				ie = () => parseInt(G(u.i)) || 0,
				ne = e => M(u.i, String(e)),
				re = (e, t, i) => T(localStorage, u.s, e, t, i),
				se = (e, t) => E(localStorage, u.s, e, t),
				oe = () => {
					try {
						return b(u.u) || {}
					} catch (e) {
						return {}
					}
				},
				de = (e, t) => {
					const i = Object.assign({}, oe(), {
						[e]: {
							postId: e,
							subredditId: t,
							when: Date.now()
						}
					});
					g(u.u, i)
				},
				le = () => 1 === b(u.t),
				ae = e => g(u.t, e ? 1 : 0),
				ue = () => b(u.j) || 0,
				ce = () => {
					g(u.j, 3)
				},
				_e = () => {
					const e = ue();
					0 !== e && g(u.j, e - 1)
				},
				me = () => () => {
					const e = Date.now(),
						t = b("".concat(u.l, "_").concat(a.a));
					return !!t && (t < e && e < t + 2592e6)
				},
				pe = () => () => {
					const e = Date.now();
					g("".concat(u.l, "_").concat(a.a), e)
				},
				he = e => {
					g(u.e, e)
				},
				fe = {
					dismissed: !1,
					seen: 0
				},
				ge = () => {
					if (!Object(n.a)()) return !1;
					localStorage.removeItem(u.o);
					const e = b(u.n);
					return !!e && (e.dismissed || e.seen >= 5)
				},
				be = () => {
					Object(n.a)() && g(u.n, {
						dismissed: !0,
						seen: 0
					})
				},
				we = () => {
					const e = b(u.n) || fe;
					g(u.n, Object.assign({}, e, {
						seen: Math.min(e.seen + 1, 5)
					}))
				},
				ye = () => b(u.k),
				ve = e => {
					g(u.k, e)
				},
				Te = () => P(u.f),
				Se = () => L(u.f),
				Ee = () => {
					try {
						return b(u.q)
					} catch (e) {
						return
					}
				},
				Fe = () => {
					const e = Ee();
					if (!e) return !1;
					const t = Object(r.c)(Math.floor(new Date(e.dismissedAt).valueOf() / 1e3));
					return 3 === e.dismissedTimes || 1 === e.dismissedTimes && t <= 3 || 2 === e.dismissedTimes && t <= 7
				},
				Ie = () => {
					const e = Ee(),
						t = e ? e.dismissedTimes + 1 : 1;
					g(u.q, {
						dismissedTimes: t,
						dismissedAt: (new Date).toISOString()
					})
				},
				Oe = e => {
					if (Object(n.a)()) {
						const t = (() => {
							try {
								return b(u.z)
							} catch (e) {
								return
							}
						})();
						return t && t.some(t => t === e)
					}
				}
		},
		"./src/reddit/helpers/media/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return s
			})), i.d(t, "l", (function() {
				return o
			})), i.d(t, "k", (function() {
				return d
			})), i.d(t, "j", (function() {
				return l
			})), i.d(t, "f", (function() {
				return a
			})), i.d(t, "i", (function() {
				return u
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "c", (function() {
				return m
			})), i.d(t, "m", (function() {
				return h
			})), i.d(t, "d", (function() {
				return g
			})), i.d(t, "h", (function() {
				return b
			})), i.d(t, "e", (function() {
				return w
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/reddit/models/Media/index.ts");

			function s(e) {
				return new Promise((t, i) => {
					try {
						const n = new FileReader;
						n.onloadend = e => {
							try {
								const i = e.target.result,
									n = new Uint8Array(i).subarray(0, 4);
								let r = "";
								for (let e = 0; e < n.length; e++) r += n[e].toString(16);
								const s = function(e) {
									switch (e) {
										case "89504e47":
											return "image/png";
										case "47494638":
											return "image/gif";
										default:
											return "ffd8ff" === e.slice(0, 6) ? "image/jpeg" : null
									}
								}(r);
								t(s)
							} catch (n) {
								i(n)
							}
						}, n.readAsArrayBuffer(e)
					} catch (n) {
						i(n)
					}
				})
			}
			const o = e => e.startsWith("video/"),
				d = e => e.startsWith("image/"),
				l = e => "image/gif" === e,
				a = e => {
					if (e) return o(e) ? "video" : d(e) ? "image" : void 0
				},
				u = e => n.a.has(e) || n.b.has(e),
				c = e => window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(e) : null;

			function _(e, t) {
				try {
					return new File([e], t, {
						type: e.type,
						lastModified: Date.now()
					})
				} catch (i) {
					const n = new Blob([e], {
						type: e.type
					});
					return Object.assign(n, {
						name: t,
						lastModified: Date.now()
					}), n
				}
			}

			function m(e) {
				const t = atob(e.split(",")[1]),
					i = e.split(",")[0].split(":")[1].split(";")[0],
					n = new Uint8Array(t.length);
				for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
				return new Blob([n], {
					type: i
				})
			}
			const p = (e, t, i) => {
					e.addEventListener(t, n => (e.removeEventListener(t, i), i(n)))
				},
				h = (e, t) => new Promise((i, n) => {
					const r = () => {
						e.readyState >= 2 && i(e)
					};
					p(e, "error", () => {
						n(new Error("Invalid video source"))
					}), ["loadedmetadata", "loadeddata", "suspend"].forEach(t => p(e, t, r)), e.src = t, r()
				}),
				f = (e, t) => new Promise(i => {
					p(e, "seeked", () => i(e)), e.currentTime = t
				});
			async function g(e, t, i) {
				let n = e.currentTime;
				for (; null !== n;) {
					await f(e, n), t.height = e.videoHeight, t.width = e.videoWidth;
					const r = t.getContext("2d");
					r && r.drawImage(e, 0, 0), n = i({
						dataUrl: t.toDataURL(),
						time: e.currentTime
					})
				}
			}
			async function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const i = document.createElement("video");
				let n;
				if (await h(i, e), t) {
					i.currentTime = 0;
					const e = document.createElement("canvas");
					await g(i, e, e => (n = e, null))
				}
				return {
					width: i.videoWidth,
					height: i.videoHeight,
					duration: i.duration,
					firstFrame: n
				}
			}
			const w = (e, t, i) => {
				if (e.media && (e.media.type === r.n.IMAGE || e.media.type === r.n.GIFVIDEO)) {
					const n = e.media.resolutions;
					for (let e = 0; e < n.length; e++) {
						const r = n[e];
						if (r.width >= t || r.height >= i) return r
					}
				}
				if (e.thumbnail && !e.isNSFW && !e.isSpoiler) {
					const n = e.thumbnail,
						r = n && n.width || 0,
						s = n && n.height || 0;
					if (r >= t || s >= i) return e.thumbnail
				}
				return null
			}
		},
		"./src/reddit/helpers/name/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "b", (function() {
				return l
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "e", (function() {
				return _
			})), i.d(t, "a", (function() {
				return m
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/es6.regexp.replace.js"), i("./node_modules/lodash/capitalize.js");
			const n = /^(r|u)?\//i,
				r = /^r\//i,
				s = /^u\//i,
				o = e => e.replace(n, ""),
				d = e => o(e.toLowerCase().trim()),
				l = e => "r/".concat(o(e)),
				a = e => "u/".concat(o(e)),
				u = e => n.test(e),
				c = e => r.test(e),
				_ = e => s.test(e),
				m = (e, t) => !((e, t) => u(e) && u(t) && e[0].toLowerCase() !== t[0].toLowerCase())(e, t) && d(e) === d(t)
		},
		"./src/reddit/helpers/path/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return o
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = i("./node_modules/path-browserify/index.js"),
				r = i.n(n);
			const s = (e, t) => r.a.join(r.a.sep, e || "", t),
				o = e => e.replace(/^.*\/\/[^\/]+/, "")
		},
		"./src/reddit/helpers/postCollection.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			const n = e => !!e.collectionIds && e.collectionIds.length >= 1
		},
		"./src/reddit/helpers/postEvent.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			const n = e => e && !!e.eventInfo
		},
		"./src/reddit/helpers/publicAccessNetwork/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "g", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			})), i.d(t, "f", (function() {
				return a
			})), i.d(t, "b", (function() {
				return u
			})), i.d(t, "c", (function() {
				return c
			}));
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/reddit/constants/things.ts");
			const s = e => e.startsWith(r.b) ? e.slice(3) : e,
				o = e => e.startsWith(r.b) ? e : "".concat(r.b).concat(e),
				d = e => "/".concat(n.zb.PUBLIC_ACCESS_NETWORK).concat(e ? "/".concat(s(e)) : ""),
				l = () => "/".concat(n.zb.PUBLIC_ACCESS_NETWORK, "/"),
				a = e => "".concat(l(), "r/").concat(e, "/"),
				u = (e, t) => t ? "".concat(a(t)).concat(s(e)) : d(e),
				c = e => {
					let {
						post: t
					} = e;
					return u(t.id, t.subreddit.name)
				}
		},
		"./src/reddit/models/Comment/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return a
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "b", (function() {
				return c
			}));
			var n, r, s = i("./src/lib/constants/index.ts"),
				o = i("./src/reddit/constants/comments.ts"),
				d = i("./src/reddit/constants/things.ts");
			! function(e) {
				e.User = "user", e.Moderator = "moderator"
			}(n || (n = {})),
			function(e) {
				e.None = "", e.Friend = "F", e.Submitter = "S", e.Moderator = "M", e.Admin = "A", e.Alumni = "special", e.Cake = "cake"
			}(r || (r = {}));
			const l = e => "".concat(d.a).concat(e && e.toLowerCase()),
				a = e => ({
					id: e,
					type: o.a.Comment
				}),
				u = e => e.author === s.z;
			var c;
			! function(e) {
				e.DeletedComment = "DeletedComment", e.Comment = "Comment"
			}(c || (c = {}))
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(n || (n = {}))
		},
		"./src/reddit/models/FeatureThrottling/index.ts": function(e, t, i) {
			"use strict";
			var n, r;
			i.d(t, "b", (function() {
					return n
				})), i.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e[e.TimesPerSession = 0] = "TimesPerSession", e[e.TimesTotal = 1] = "TimesTotal", e[e.TimesPerPeriod = 2] = "TimesPerPeriod", e[e.NthSession = 3] = "NthSession", e[e.Combined = 4] = "Combined"
				}(n || (n = {})),
				function(e) {
					e.And = "and", e.Or = "or"
				}(r || (r = {}))
		},
		"./src/reddit/models/Flair/index.ts": function(e, t, i) {
			"use strict";
			var n, r, s, o, d, l, a, u;
			i.d(t, "c", (function() {
					return n
				})), i.d(t, "f", (function() {
					return r
				})), i.d(t, "e", (function() {
					return s
				})), i.d(t, "a", (function() {
					return o
				})), i.d(t, "d", (function() {
					return d
				})), i.d(t, "b", (function() {
					return l
				})), i.d(t, "h", (function() {
					return a
				})), i.d(t, "g", (function() {
					return u
				})),
				function(e) {
					e.Text = "text", e.Emoji = "emoji"
				}(n || (n = {})),
				function(e) {
					e.Image = "image", e.Meta = "meta", e.Nsfw = "nsfw", e.Oc = "oc", e.Richtext = "richtext", e.Spoiler = "spoiler", e.Text = "text", e.Quarantined = "quarantined"
				}(r || (r = {})),
				function(e) {
					e.Dark = "dark", e.Light = "light"
				}(s || (s = {})),
				function(e) {
					e.Text = "text", e.Emoji = "emoji", e.All = "all"
				}(o || (o = {})),
				function(e) {
					e.UserFlair = "USER_FLAIR", e.LinkFlair = "LINK_FLAIR"
				}(d || (d = {})),
				function(e) {
					e.Left = "left", e.Right = "right"
				}(l || (l = {})),
				function(e) {
					e.Dark = "DARK", e.Light = "LIGHT"
				}(a || (a = {})),
				function(e) {
					e.RIGHT = "RIGHT", e.LEFT = "LEFT"
				}(u || (u = {}))
		},
		"./src/reddit/models/Gold/Powerups/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			}));
			var n, r = i("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.First = 1] = "First", e[e.Second = 2] = "Second"
			}(n || (n = {}));
			n.Second;
			var s;
			! function(e) {
				e.SdVideo = "SD_VIDEO", e.HdVideo = "HD_VIDEO", e.CommentsWithGifs = "COMMENTS_WITH_GIFS", e.CommentsWithEmoji = "COMMENTS_WITH_EMOJI", e.PostsImageUpload = "POSTS_IMAGE_UPLOAD"
			}(s || (s = {}));
			const o = {
					[s.SdVideo]: r.fbt._("720p SD Videos", null, {
						hk: "2fAsdM"
					}),
					[s.HdVideo]: r.fbt._("HD video", null, {
						hk: "2LKEks"
					}),
					[s.CommentsWithGifs]: r.fbt._("Gifs in comments", null, {
						hk: "2zfRvk"
					}),
					[s.CommentsWithEmoji]: r.fbt._("Snoomojis", null, {
						hk: "1arNaj"
					}),
					[s.PostsImageUpload]: r.fbt._("Upload images", null, {
						hk: "DLmVt"
					})
				},
				d = {
					[s.SdVideo]: "",
					[s.HdVideo]: "",
					[s.CommentsWithGifs]: "",
					[s.CommentsWithEmoji]: "",
					[s.PostsImageUpload]: ""
				}
		},
		"./src/reddit/models/GqlTopLevelField.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Comment = "Comment", e.Multireddit = "Multireddit", e.PostInfo = "PostInfo", e.Profile = "Profile", e.RedditorInfo = "RedditorInfo", e.Subreddit = "Subreddit", e.UnavailableSubreddit = "UnavailableSubreddit"
				}(n || (n = {}))
		},
		"./src/reddit/models/Image/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "j", (function() {
				return u
			})), i.d(t, "i", (function() {
				return c
			})), i.d(t, "h", (function() {
				return _
			})), i.d(t, "f", (function() {
				return p
			})), i.d(t, "e", (function() {
				return h
			})), i.d(t, "g", (function() {
				return f
			})), i.d(t, "l", (function() {
				return g
			})), i.d(t, "m", (function() {
				return b
			})), i.d(t, "n", (function() {
				return w
			})), i.d(t, "o", (function() {
				return y
			})), i.d(t, "k", (function() {
				return v
			})), i.d(t, "d", (function() {
				return T
			}));
			var n, r = i("./node_modules/uuid/v4.js"),
				s = i.n(r),
				o = i("./src/config.ts"),
				d = i("./src/reddit/helpers/imagePreview/index.ts");
			! function(e) {
				e.Pending = "pending", e.NotUploaded = "not-uploaded", e.TempUploaded = "temp-uploaded", e.Uploaded = "uploaded", e.FailedToUpload = "failed-to-upload", e.Saved = "saved", e.Invalid = "invalid"
			}(n || (n = {}));
			const l = o.a.processingImageUrl;
			var a;

			function u(e) {
				return e.kind === n.Uploaded
			}

			function c(e) {
				switch (e.kind) {
					case n.Pending:
					case n.Saved:
					case n.Invalid:
						return !1;
					default:
						return !0
				}
			}

			function _(e) {
				switch (e.kind) {
					case n.TempUploaded:
					case n.Uploaded:
					case n.Saved:
						return !0;
					default:
						return !1
				}
			}
			async function m(e) {
				const t = Object(d.b)(e),
					i = s()();
				let n = 0,
					r = 0;
				if (t) {
					const e = await Object(d.a)(t);
					n = e.width, r = e.height
				}
				return {
					file: e,
					height: r,
					id: i,
					url: t,
					width: n
				}
			}
			async function p(e) {
				const t = await m(e);
				return Object.assign({}, t, {
					kind: n.Pending
				})
			}
			async function h(e) {
				const t = await m(e);
				return Object.assign({}, t, {
					kind: n.NotUploaded
				})
			}

			function f(e) {
				return Object.assign({}, e, {
					kind: n.Saved,
					id: s()()
				})
			}

			function g(e, t) {
				return {
					kind: n.Invalid,
					file: e.file,
					height: e.height,
					id: e.id,
					url: e.url,
					width: e.width,
					errorString: t
				}
			}

			function b(e) {
				return Object.assign({}, e, {
					kind: n.NotUploaded
				})
			}

			function w(e, t, i, r) {
				return {
					kind: n.TempUploaded,
					file: e.file,
					width: e.width,
					height: e.height,
					id: e.id,
					url: t,
					websocketUrl: i,
					context: r
				}
			}

			function y(e, t) {
				return Object(d.c)(e.url), {
					kind: n.Uploaded,
					width: e.width,
					height: e.height,
					id: e.id,
					url: t
				}
			}

			function v(e, t) {
				return {
					error: t,
					file: e.file,
					height: e.height,
					id: e.id,
					kind: n.FailedToUpload,
					url: e.url,
					width: e.width
				}
			}

			function T(e) {
				Object(d.c)(e.url)
			}! function(e) {
				e[e.Profiles = 0] = "Profiles", e[e.StructuredStyles = 1] = "StructuredStyles", e[e.Widgets = 2] = "Widgets", e[e.FlairTemplates = 3] = "FlairTemplates"
			}(a || (a = {}))
		},
		"./src/reddit/models/Live/index.ts": function(e, t, i) {
			"use strict";
			var n, r;
			i.d(t, "b", (function() {
					return n
				})), i.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Ama = "ama", e.Announcement = "announcement", e.Document = "document", e.Moderation = "moderation", e.Snoo = "snoo"
				}(n || (n = {})),
				function(e) {
					e.Ama = "AMA", e.Announcement = "ANNOUNCEMENT", e.Document = "DOCUMENT", e.Moderation = "MODERATION", e.Snoo = "SNOO"
				}(r || (r = {}))
		},
		"./src/reddit/models/Media/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "t", (function() {
				return n
			})), i.d(t, "D", (function() {
				return o
			})), i.d(t, "E", (function() {
				return d
			})), i.d(t, "B", (function() {
				return l
			})), i.d(t, "A", (function() {
				return a
			})), i.d(t, "C", (function() {
				return u
			})), i.d(t, "n", (function() {
				return c
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "i", (function() {
				return m
			})), i.d(t, "j", (function() {
				return p
			})), i.d(t, "k", (function() {
				return h
			})), i.d(t, "l", (function() {
				return f
			})), i.d(t, "w", (function() {
				return g
			})), i.d(t, "c", (function() {
				return b
			})), i.d(t, "m", (function() {
				return w
			})), i.d(t, "o", (function() {
				return y
			})), i.d(t, "p", (function() {
				return v
			})), i.d(t, "e", (function() {
				return T
			})), i.d(t, "f", (function() {
				return S
			})), i.d(t, "r", (function() {
				return E
			})), i.d(t, "s", (function() {
				return F
			})), i.d(t, "h", (function() {
				return I
			})), i.d(t, "b", (function() {
				return O
			})), i.d(t, "q", (function() {
				return j
			})), i.d(t, "v", (function() {
				return B
			})), i.d(t, "u", (function() {
				return x
			})), i.d(t, "d", (function() {
				return R
			})), i.d(t, "g", (function() {
				return k
			})), i.d(t, "x", (function() {
				return C
			})), i.d(t, "z", (function() {
				return N
			})), i.d(t, "y", (function() {
				return P
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r = i("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = i.n(r);
			! function(e) {
				e.YouTube = "YouTube", e.Vimeo = "Vimeo", e.BandCamp = "BandCamp", e.Gfycat = "Gfycat", e.GfycatOld = "gfycat", e.Giphy = "Giphy", e.Imgur = "Imgur", e.RedGIFS = "RedGIFS", e.SoundCloud = "SoundCloud", e.Spotify = "Spotify", e.Streamable = "Streamable", e.Twitch = "Twitch.tv", e.Twitter = "Twitter", e.IFrameEmbed = "iframe embed"
			}(n || (n = {}));
			const o = e => "text" === e.type,
				d = e => "video" === e.type,
				l = e => "rpan" === e.type,
				a = e => "image" === e.type,
				u = e => "rtjson" === e.type,
				c = {
					TEXT: "text",
					VIDEO: "video",
					IMAGE: "image",
					EMBED: "embed",
					GIFVIDEO: "gifvideo",
					RTJSON: "rtjson",
					LIVEVIDEO: "rpan"
				},
				_ = new Set([c.TEXT, c.IMAGE, c.RTJSON]),
				m = 512,
				p = 250,
				h = 60,
				f = 0,
				g = 608,
				b = .5625,
				w = 869,
				y = 273,
				v = 486,
				T = 700,
				S = 822,
				E = 363,
				F = 645,
				I = new Set([n.Gfycat, n.GfycatOld, n.Giphy, n.RedGIFS, n.SoundCloud, n.Spotify, n.Twitter, n.Vimeo, n.YouTube]),
				O = new Set([n.BandCamp, n.Gfycat, n.GfycatOld, n.Giphy, n.Imgur, n.RedGIFS, n.SoundCloud, n.Spotify, n.Streamable, n.Twitch, n.Twitter, n.YouTube, n.Vimeo]),
				j = new Set([n.SoundCloud, n.Spotify, n.Streamable, n.Twitter, n.Vimeo, n.YouTube]),
				B = new Set([n.Gfycat, n.GfycatOld, n.Imgur, n.RedGIFS]),
				x = ["gif", "jpeg", "jpg", "png", "tiff"],
				R = new Set([c.VIDEO, c.GIFVIDEO, c.EMBED, c.LIVEVIDEO]);
			var k, C;
			! function(e) {
				e.Mute = "mute", e.Pause = "pause", e.Play = "play"
			}(k || (k = {})),
			function(e) {
				e.Pause = "pauseVideo", e.Play = "playVideo", e.Mute = "mute"
			}(C || (C = {}));
			const N = e => e.source ? e.source.url : e.media && e.media.type !== c.VIDEO && e.media.type !== c.LIVEVIDEO && e.media.content ? e.media.content : "",
				P = e => {
					if (!d(e)) return;
					const t = e;
					let i;
					if (t.hlsUrl) i = t.hlsUrl;
					else {
						if (!t.dashUrl) return;
						i = t.dashUrl
					}
					return (e => {
						const t = s.a.parse(e);
						if (t && t.pathname) return t.pathname.split("/")[1]
					})(i)
				}
		},
		"./src/reddit/models/ModeratingSubreddits/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return o
			})), i.d(t, "a", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r = i("./node_modules/lodash/snakeCase.js"),
				s = i.n(r);
			! function(e) {
				e.access = "access", e.config = "config", e.flair = "flair", e.mail = "mail", e.posts = "posts", e.wiki = "wiki", e.chatConfig = "chatConfig", e.chatOperator = "chatOperator", e.all = "all"
			}(n || (n = {}));
			const o = Object.freeze({
					all: !0,
					access: !0,
					chatConfig: !0,
					chatOperator: !0,
					config: !0,
					flair: !0,
					mail: !0,
					posts: !0,
					wiki: !0
				}),
				d = o,
				l = e => {
					return Object.keys(e).map(t => (e[t] ? "+" : "-") + s()(t)).join(",")
				}
		},
		"./src/reddit/models/Multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "d", (function() {
				return s
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "a", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "h", (function() {
				return a
			})), i.d(t, "i", (function() {
				return u
			})), i.d(t, "g", (function() {
				return c
			}));
			const n = 50,
				r = 500,
				s = 2;
			var o, d;

			function l(e) {
				return "string" == typeof e.url
			}! function(e) {
				e.Hidden = "hidden", e.Private = "private", e.Public = "public"
			}(o || (o = {})),
			function(e) {
				e.TooShort = "tooshort", e.SameName = "samename", e.Generic = "generic"
			}(d || (d = {}));
			const a = (e, t) => "/user/".concat(e, "/m/").concat(t, "/").toLowerCase(),
				u = e => /^\/user\/([^/]+)\//.exec(e)[1];

			function c(e) {
				return !!e.subredditIds || !!e.profileIds
			}
		},
		"./src/reddit/models/NewStructuredStyles/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return c
			})), i.d(t, "c", (function() {
				return v
			})), i.d(t, "a", (function() {
				return E
			})), i.d(t, "b", (function() {
				return F
			}));
			var n = i("./node_modules/polished/dist/polished.es.js"),
				r = i("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				s = i("./src/reddit/constants/colors.ts");
			const o = {
					borderRadius: "24",
					customSize: "32",
					padding: "6",
					size: "24"
				},
				d = {
					highlight: "#E9F5FD",
					metaText: "#787C7E",
					metaTextAlpha50: Object(n.g)("#787C7E", .5),
					metaTextShaded80: Object(n.i)(.8, "#787C7E"),
					placeholder: "#D3D6DA",
					postIcon: "#878A8C",
					postLine: "#D3D6DA",
					report: "#FFF7E5"
				},
				l = Object.assign({}, d, {
					postLineShaded80: Object(n.i)(.8, d.postLine),
					postLineShaded90: Object(n.i)(.9, d.postLine)
				}),
				a = {
					body: "#FFFFFF",
					bodyFade: "#FFFFFF00",
					bodyText: "#1A1A1B",
					actionIcon: "#878A8C",
					navIcon: "#1A1A1B",
					errorText: "#FF0000",
					field: "#F6F7F8",
					fieldFade: "#F6F7F800",
					flair: "#EDEFF1",
					inactive: "#EDEFF1",
					line: "#EDEFF1",
					lightText: "#FFFFFF",
					linkText: "#0079D3",
					monospaceColor: "#FF006D",
					pageHeader: "#0079D3",
					postFlairText: "#1A1A1B",
					blackoutSnooFace: "#FFF"
				},
				u = (e, t, i) => Object(n.c)(i, (e => e ? "#FFFFFF" : "#000000")(t), e),
				c = (e, t) => u(e, t, .2),
				_ = Object.assign({}, a, {
					actionIconAlpha20: Object(n.g)(a.actionIcon, .2),
					actionIconAlpha50: Object(n.g)(a.actionIcon, .5),
					actionIconShaded80: Object(n.i)(.8, a.actionIcon),
					bodyAlpha50: Object(n.g)(a.body, .5),
					bodyAlpha80: Object(n.g)(a.body, .8),
					bodyShaded80: Object(n.i)(.8, a.body),
					bodyTinted50: Object(n.j)(.5, a.body),
					bodyTinted80: Object(n.j)(.8, a.body),
					bodyText: a.bodyText,
					bodyTextAlpha03: Object(n.g)(a.bodyText, .03),
					bodyTextAlpha20: Object(n.g)(a.bodyText, .2),
					bodyTextShaded20: Object(n.i)(.2, a.bodyText),
					bodyTextTinted20: Object(n.j)(.2, a.bodyText),
					lineShaded80: Object(n.i)(.8, a.line),
					lineShaded90: Object(n.i)(.9, a.line),
					lightTextAlpha75: Object(n.g)(a.lightText, .75),
					linkTextAlpha80: Object(n.g)(a.linkText, .5),
					linkTextShaded80: Object(n.i)(.8, a.linkText),
					linkTextTinted80: Object(n.j)(.8, a.linkText),
					linkTextWithBody: Object(n.c)(.75, a.linkText, a.body),
					navIconFaded10: Object(n.g)(a.navIcon, .1)
				}),
				m = {
					downvote: s.a.downvote,
					downvoteShaded80: Object(n.i)(.8, s.a.downvote),
					downvoteTinted80: Object(n.j)(.8, s.a.downvote),
					upvote: s.a.upvote,
					upvoteShaded80: Object(n.i)(.8, s.a.upvote),
					upvoteTinted80: Object(n.j)(.8, s.a.upvote)
				},
				p = {
					active: "#24A0ED",
					banner: {
						backgroundColor: "#24A0ED",
						backgroundImage: void 0,
						backgroundImagePosition: "cover",
						communityNameFormat: "slashtag",
						iconColor: "#24A0ED",
						iconImage: void 0,
						iconDimensions: o,
						lineHeight: "38",
						height: 64,
						positionedImage: void 0,
						positionedImageHeight: 48,
						positionedImageAlignment: "cover",
						secondaryBannerPositionedImage: void 0,
						showCommunityIcon: !0
					},
					button: "#0079D3",
					buttonShaded80: Object(n.i)(.8, "#0079D3"),
					canvas: "#DAE0E6",
					menu: "#FFFFFF",
					menuActiveText: "#0079D3",
					menuInactiveText: "#0079D3",
					metaText: l.metaText,
					metaTextAlpha50: l.metaTextAlpha50,
					metaTextShaded80: l.metaTextShaded80,
					navBar: {
						activeLink: l.highlight,
						activeSubmenuCaret: "#24A0ED",
						activeSubmenuLink: "#24A0ED",
						backgroundColor: "#24A0ED",
						backgroundImage: void 0,
						hoverLink: l.highlight,
						inactiveLink: _.inactive,
						inactiveSubmenuCaret: Object(n.h)(.6, "#24A0ED"),
						inactiveSubmenuLink: Object(n.h)(.6, "#24A0ED"),
						submenuBackgroundColor: Object(n.h)(.93, "#24A0ED"),
						useOverlay: !1
					},
					post: "#FFFFFF",
					postFlairText: "#1A1A1B",
					titleText: "#1A1A1B",
					voteText: Object.assign({}, m, {
						base: "#878A8C"
					}),
					voteIcons: {
						upvoteActive: void 0,
						upvoteInactive: void 0,
						downvoteActive: void 0,
						downvoteInactive: void 0
					},
					widgetColors: {
						sidebarWidgetBackgroundColor: "#FFFFFF",
						sidebarWidgetBorderColor: c("#FFFFFF", !1),
						sidebarWidgetHeaderColor: "#FFFFFF",
						sidebarWidgetHeaderColorAlpha60: Object(n.g)("#FFFFFF", .6),
						sidebarWidgetTextColor: "#1A1A1B",
						sidebarWidgetTextColorShaded80: Object(n.i)(.8, "#1A1A1B"),
						sidebarWidgetTitleColor: "#1A1A1B",
						lineColor: Object(r.b)("#1A1A1B")
					}
				},
				h = Object.assign({}, p, {
					postTransparent20: Object(n.l)(.2, p.post),
					postError: Object(n.c)(.1, "#FF0000", p.post),
					activeAlpha10: Object(n.g)(p.active, .1),
					activeAlpha50: Object(n.g)(p.active, .5),
					activeLight60: Object(n.h)(.6, p.active),
					activeTinted05: Object(n.j)(.05, p.active),
					activeShaded80: Object(n.i)(.8, p.active),
					activeShaded90: Object(n.i)(.9, p.active),
					buttonAlpha05: Object(n.g)(p.button, .05),
					buttonAlpha10: Object(n.g)(p.button, .1),
					buttonAlpha20: Object(n.g)(p.button, .2),
					buttonAlpha40: Object(n.g)(p.button, .4),
					buttonAlpha50: Object(n.g)(p.button, .5),
					buttonAlpha80: Object(n.g)(p.button, .8),
					buttonShaded80: Object(n.i)(.8, p.button),
					buttonTinted20: Object(n.j)(.2, p.button),
					buttonTinted50: Object(n.j)(.5, p.button),
					buttonTinted80: Object(n.j)(.8, p.button),
					postTinted20: Object(n.j)(.2, p.post)
				}),
				f = {
					actionIcon: "#818384",
					body: "#1A1A1B",
					bodyFade: "#1A1A1B00",
					bodyText: "#D7DADC",
					button: "#D7DADC",
					buttonShaded80: Object(n.i)(.8, "#D7DADC"),
					canvas: "#030303",
					errorText: "#FF0000",
					field: "#272729",
					fieldFade: "#27272900",
					highlight: "#17232D",
					inactive: "#343536",
					lightText: "#FFFFFF",
					line: "#343536",
					lineShaded80: Object(n.i)(.8, "#343536"),
					lineShaded90: Object(n.i)(.9, "#343536"),
					linkText: "#4FBCFF",
					menu: "#030303",
					menuActiveText: "#D7DADC",
					menuInactiveText: "#D7DADC",
					metaText: "#818384",
					metaTextAlpha50: Object(n.g)("#818384", .5),
					metaTextShaded80: Object(n.i)(.8, "#818384"),
					monospaceColor: "#5291f8",
					navIcon: "#D7DADC",
					pageHeader: "#818384",
					placeholder: "#3A3A3C",
					post: "#1A1A1B",
					postFlairText: "#FFFFFF",
					postIcon: "#818384",
					postLine: "#343536",
					postLineShaded80: Object(n.i)(.8, "#343536"),
					postLineShaded90: Object(n.i)(.9, "#343536"),
					report: "#1C1402",
					titleText: "#D7DADC",
					voteText: Object.assign({}, m, {
						base: "#818384"
					}),
					voteIcons: {
						upvoteActive: void 0,
						upvoteInactive: void 0,
						downvoteActive: void 0,
						downvoteInactive: void 0
					},
					widgetColors: {
						sidebarWidgetBackgroundColor: "#1A1A1B",
						sidebarWidgetBorderColor: c("#1A1A1B", !0),
						sidebarWidgetHeaderColor: "#1A1A1B",
						sidebarWidgetHeaderColorAlpha60: Object(n.g)("#1A1A1B", .6),
						sidebarWidgetTextColor: "#D7DADC",
						sidebarWidgetTextColorShaded80: Object(n.i)(.8, "#D7DADC"),
						sidebarWidgetTitleColor: "#818384",
						lineColor: "#343536"
					},
					blackoutSnooFace: "#D7DADC"
				},
				g = Object.assign({}, f, {
					actionIconAlpha20: Object(n.g)(f.actionIcon, .2),
					actionIconAlpha50: Object(n.g)(f.actionIcon, .5),
					actionIconShaded80: Object(n.i)(.8, f.actionIcon),
					bodyAlpha50: Object(n.g)(f.body, .5),
					bodyAlpha80: Object(n.g)(f.body, .8),
					bodyShaded80: Object(n.i)(.8, f.body),
					bodyTinted50: Object(n.j)(.5, f.body),
					bodyTinted80: Object(n.j)(.8, f.body),
					bodyTextAlpha03: Object(n.g)(f.bodyText, .03),
					bodyTextAlpha20: Object(n.g)(f.bodyText, .2),
					bodyTextShaded20: Object(n.i)(.2, f.bodyText),
					bodyTextTinted20: Object(n.j)(.2, f.bodyText),
					buttonAlpha05: Object(n.g)(f.button, .05),
					buttonAlpha10: Object(n.g)(f.button, .1),
					buttonAlpha20: Object(n.g)(f.button, .2),
					buttonAlpha40: Object(n.g)(f.button, .4),
					buttonAlpha50: Object(n.g)(f.button, .5),
					buttonAlpha80: Object(n.g)(f.button, .8),
					buttonShaded80: Object(n.i)(.8, f.button),
					buttonTinted20: Object(n.j)(.2, f.button),
					buttonTinted50: Object(n.j)(.5, f.button),
					buttonTinted80: Object(n.j)(.8, f.button),
					lightTextAlpha75: Object(n.g)("#FFFFFF", .75),
					navIconFaded10: Object(n.g)(f.navIcon, .1),
					linkTextAlpha80: Object(n.g)(f.linkText, .5),
					linkTextShaded80: Object(n.i)(.8, f.linkText),
					linkTextTinted80: Object(n.j)(.8, f.linkText),
					linkTextWithBody: Object(n.c)(.75, f.linkText, f.body),
					postTransparent20: Object(n.l)(.2, f.post),
					postError: Object(n.c)(.1, "#FF0000", f.post),
					postTinted20: Object(n.j)(.2, f.post)
				}),
				b = {
					lineShadedNinety: Object(n.i)(.9, g.line),
					primaryButtonShadedEighty: Object(n.i)(.8, g.button),
					primaryButtonTintedEighty: Object(n.j)(.8, g.button),
					primaryButtonTintedSixty: Object(n.j)(.6, g.button),
					primaryButtonTintedFifty: Object(n.j)(.5, g.button)
				},
				w = {
					active: "#0079D3",
					banner: {
						backgroundColor: "#24A0ED",
						backgroundImage: void 0,
						backgroundImagePosition: "cover",
						communityNameFormat: "slashtag",
						iconColor: "#24A0ED",
						iconImage: void 0,
						iconDimensions: o,
						lineHeight: "38",
						height: 64,
						positionedImage: void 0,
						positionedImageHeight: 48,
						positionedImageAlignment: "cover",
						secondaryBannerPositionedImage: void 0,
						showCommunityIcon: !0
					},
					flair: "#343536",
					navBar: {
						activeLink: l.highlight,
						activeSubmenuCaret: "#D7DADC",
						activeSubmenuLink: "#D7DADC",
						backgroundColor: "#030303",
						backgroundImage: void 0,
						hoverLink: "#D7DADC",
						inactiveLink: "#D7DADC",
						inactiveSubmenuCaret: "#D7DADC",
						inactiveSubmenuLink: "#D7DADC",
						submenuBackgroundColor: "#1A1A1B",
						useOverlay: !1
					}
				},
				y = Object.assign({}, w, {
					activeAlpha10: Object(n.g)(w.active, .1),
					activeAlpha50: Object(n.g)(w.active, .1),
					activeLight60: Object(n.h)(.6, w.active),
					activeTinted05: Object(n.j)(.05, w.active),
					activeShaded80: Object(n.i)(.8, w.active),
					activeShaded90: Object(n.i)(.9, w.active)
				}),
				v = (e, t, i) => i ? T(e) : S(e, t),
				T = e => Object.assign({}, F, {
					activeAlpha10: e.active ? Object(n.g)(e.active, .1) : y.activeAlpha10,
					activeAlpha50: e.active ? Object(n.g)(e.active, .5) : y.activeAlpha50,
					activeLight60: e.active ? Object(n.h)(.6, e.active) : y.activeLight60,
					activeTinted05: e.active ? Object(n.j)(.05, e.active) : y.activeTinted05,
					activeShaded80: e.active ? Object(n.i)(.8, e.active) : y.activeShaded80,
					activeShaded90: e.active ? Object(n.i)(.9, e.active) : y.activeShaded90,
					banner: e.banner || y.banner,
					navBar: e.navBar || y.navBar
				}),
				S = (e, t) => {
					let i;
					if (e.post) {
						const r = u(e.post, !1, .89),
							s = u(e.post, !1, .2);
						(i = Object.assign({}, _, t, e, {
							bodyText: r,
							bodyTextAlpha03: Object(n.g)(r, .03),
							bodyTextAlpha20: Object(n.g)(r, .2),
							bodyTextShaded20: Object(n.i)(.2, r),
							bodyTextTinted20: Object(n.j)(.2, r),
							activeAlpha10: e.active ? Object(n.g)(e.active, .1) : h.activeAlpha10,
							activeAlpha50: e.active ? Object(n.g)(e.active, .5) : h.activeAlpha50,
							activeLight60: e.active ? Object(n.h)(.6, e.active) : h.activeLight60,
							activeTinted05: e.active ? Object(n.j)(.05, e.active) : h.activeTinted05,
							activeShaded80: e.active ? Object(n.i)(.8, e.active) : h.activeShaded80,
							activeShaded90: e.active ? Object(n.i)(.9, e.active) : h.activeShaded90,
							buttonAlpha05: e.button ? Object(n.g)(e.button, .05) : h.buttonAlpha05,
							buttonAlpha10: e.button ? Object(n.g)(e.button, .1) : h.buttonAlpha10,
							buttonAlpha20: e.button ? Object(n.g)(e.button, .2) : h.buttonAlpha20,
							buttonAlpha40: e.button ? Object(n.g)(e.button, .4) : h.buttonAlpha40,
							buttonAlpha50: e.button ? Object(n.g)(e.button, .5) : h.buttonAlpha50,
							buttonAlpha80: e.button ? Object(n.g)(e.button, .8) : h.buttonAlpha80,
							buttonShaded80: e.button ? Object(n.i)(.8, e.button) : h.buttonShaded80,
							buttonTinted20: e.button ? Object(n.j)(.2, e.button) : p.button,
							buttonTinted50: e.button ? Object(n.j)(.5, e.button) : h.buttonTinted50,
							buttonTinted80: e.button ? Object(n.j)(.8, e.button) : h.buttonTinted80,
							metaText: u(e.post, !1, .51),
							placeholder: u(e.post, !1, .16),
							postError: Object(n.c)(.1, "#FF0000", e.post),
							postIcon: u(e.post, !1, .46),
							postLine: s,
							postLineShaded80: Object(n.i)(.8, s),
							postLineShaded90: Object(n.i)(.9, s),
							postTransparent20: Object(n.l)(.2, e.post),
							postTinted20: Object(n.j)(.2, e.post),
							report: Object(n.c)(.1, "#FFB000", e.post)
						})).voteText.base = u(e.post, !1, .46), e.active ? i.highlight = Object(n.c)(.1, e.active, e.post) : i.highlight = u(e.post, !1, .1)
					} else(i = Object.assign({}, e, _, {
						active: h.active,
						postTransparent20: Object(n.l)(.2, h.post),
						postError: Object(n.c)(.1, "#FF0000", h.post),
						activeAlpha10: h.activeAlpha10,
						activeAlpha50: h.activeAlpha50,
						activeLight60: h.activeLight60,
						activeTinted05: h.activeTinted05,
						activeShaded80: h.activeShaded80,
						activeShaded90: h.activeShaded90
					})).voteText.base = h.voteText.base;
					return i
				},
				E = Object.assign({}, h, l, _),
				F = Object.assign({}, y, b, g)
		},
		"./src/reddit/models/Post/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "g", (function() {
				return r
			})), i.d(t, "m", (function() {
				return a
			})), i.d(t, "n", (function() {
				return u
			})), i.d(t, "h", (function() {
				return c
			})), i.d(t, "f", (function() {
				return _
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "a", (function() {
				return h
			})), i.d(t, "e", (function() {
				return f
			})), i.d(t, "d", (function() {
				return g
			})), i.d(t, "j", (function() {
				return b
			})), i.d(t, "l", (function() {
				return w
			})), i.d(t, "i", (function() {
				return y
			})), i.d(t, "k", (function() {
				return v
			}));
			var n, r, s = i("./src/reddit/constants/posts.ts"),
				o = i("./src/reddit/constants/things.ts"),
				d = i("./src/reddit/models/PublicAccessNetwork/index.ts"),
				l = i("./src/lib/constants/index.ts");
			! function(e) {
				e.Chat = "CHAT", e.Comment = "COMMENT"
			}(n || (n = {})),
			function(e) {
				e.AntiEvilOps = "anti_evil_ops", e.Author = "author", e.AuthorDeleted = "deleted", e.AutomodFiltered = "automod_filtered", e.CommunityOps = "community_ops", e.ContentTakedown = "content_takedown", e.CopyrightTakedown = "copyright_takedown", e.Moderator = "moderator", e.Reddit = "reddit"
			}(r || (r = {}));
			const a = e => "".concat(o.b).concat(e && e.toLowerCase()),
				u = e => e.startsWith(o.b) ? e.substr(o.b.length) : e,
				c = e => e === l.z;
			var _, m, p, h, f, g;
			! function(e) {
				e.AdPost = "AdPost", e.DeletedProfilePost = "DeletedProfilePost", e.DeletedSubredditPost = "DeletedSubredditPost", e.ProfilePost = "ProfilePost", e.SubredditPost = "SubredditPost"
			}(_ || (_ = {})),
			function(e) {
				e.MOD_APPROVED = "MOD_APPROVED", e.MOD_REMOVED = "MOD_REMOVED", e.MOD_SPAMMED = "MOD_SPAMMED", e.ADMIN_REMOVED = "ADMIN_REMOVED", e.ADMIN_APPROVED = "ADMIN_APPROVED", e.ADMIN_SPAMMED = "ADMIN_SPAMMED"
			}(m || (m = {})),
			function(e) {
				e.ImageAsset = "ImageAsset", e.VideoAsset = "VideoAsset"
			}(p || (p = {})),
			function(e) {
				e.Post = "POST", e.Comment = "COMMENT"
			}(h || (h = {})),
			function(e) {
				e.Embed = "EMBED", e.Image = "IMAGE", e.Video = "VIDEO", e.Gifvideo = "GIFVIDEO", e.RPAN = "RPAN"
			}(f || (f = {})),
			function(e) {
				e.Richtext = "RICHTEXT", e.Markdown = "MARKDOWN"
			}(g || (g = {}));
			const b = e => e.belongsTo.type === s.a.PROFILE,
				w = e => e.belongsTo.type === s.a.SUBREDDIT,
				y = e => !!e.source && Object(d.a)(e.source.url),
				v = e => e.isStickied && !e.isSponsored
		},
		"./src/reddit/models/PostCollection/index.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.TIMELINE = "TIMELINE", e.GALLERY = "GALLERY"
				}(n || (n = {}))
		},
		"./src/reddit/models/PostCreationForm/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "m", (function() {
				return r
			})), i.d(t, "n", (function() {
				return s
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "r", (function() {
				return d
			})), i.d(t, "v", (function() {
				return a
			})), i.d(t, "h", (function() {
				return u
			})), i.d(t, "g", (function() {
				return c
			})), i.d(t, "k", (function() {
				return _
			})), i.d(t, "l", (function() {
				return m
			})), i.d(t, "p", (function() {
				return p
			})), i.d(t, "q", (function() {
				return h
			})), i.d(t, "j", (function() {
				return f
			})), i.d(t, "d", (function() {
				return g
			})), i.d(t, "a", (function() {
				return b
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "c", (function() {
				return y
			})), i.d(t, "f", (function() {
				return v
			})), i.d(t, "o", (function() {
				return T
			})), i.d(t, "s", (function() {
				return S
			})), i.d(t, "t", (function() {
				return E
			})), i.d(t, "u", (function() {
				return F
			})), i.d(t, "i", (function() {
				return I
			}));
			var n = i("./src/reddit/models/Upload/index.ts");
			const r = Object(n.e)(n.b.POST_CREATION_MEDIA),
				s = Object(n.e)(n.b.POST_CREATION_VIDEO_POSTER),
				o = {
					isProfile: !1,
					name: ""
				};
			var d;
			! function(e) {
				e[e.Post = 0] = "Post", e[e.Draft = 1] = "Draft", e[e.ScheduledPost = 2] = "ScheduledPost"
			}(d || (d = {}));
			const l = ["title", "body", "link", "flair"],
				a = e => l.includes(e);
			var u, c, _, m, p, h, f;
			! function(e) {
				e.MARKDOWN = "markdown", e.RICH_TEXT = "richtext"
			}(u || (u = {})),
			function(e) {
				e.POST_CREATION = "POST_CREATION", e.POST_EDITING = "POST_EDITING"
			}(c || (c = {})),
			function(e) {
				e.CLICK = "click", e.TYPE = "type"
			}(_ || (_ = {})),
			function(e) {
				e.TITLE = "title", e.BODY = "body", e.URL = "url"
			}(m || (m = {})),
			function(e) {
				e.CROSSPOST = "crosspost", e.LINK = "link", e.RICH_TEXT = "richText", e.MARKDOWN = "markdown", e.MEDIA = "media", e.VIDEO_GIF = "videogif", e.SELF = "self", e.POLL = "poll"
			}(p || (p = {})),
			function(e) {
				e.ImageWillBeRemoved = "SrChangePrompt_ImageWillBeRemoved", e.VideoWillBeRemovedMediaNotAllowed = "SrChangePrompt_VideoWillBeRemovedMediaNotAllowed", e.VideoWillBeRemovedTooLongForGif = "SrChangePrompt_VideoWillBeRemovedTooLongForGif"
			}(h || (h = {})),
			function(e) {
				e.POST_OVERFLOW_MENU = "postOverflowMenu", e.COLLECTION_INFO_POST = "colletionInfoPost"
			}(f || (f = {}));
			const g = "POST_DRAFTS_MODAL_ID",
				b = "COLLECTIONS_LIST_MODAL_ID",
				w = "CREATE_COLLECTION_MODAL_ID",
				y = "DISCARD_POST_ON_CREATE_POST_MODAL_ID",
				v = "EVENT_SCHEDULE_PICKER_MODAL_ID",
				T = "POST_SCHEDULE_PICKER_MODAL_ID",
				S = (e, t, i) => "".concat(v, "-[postId: ").concat(e, "]-isOverlay[").concat(t, "]-pos[").concat(i, "]"),
				E = (e, t) => "".concat(b, "-[postId: ").concat(e, "]-isOverlay[").concat(t, "]"),
				F = (e, t) => "".concat(w, "-[postId: ").concat(e, "]-isOverlay[").concat(t, "]");
			var I;
			! function(e) {
				e.Now = "now", e.AtEventTime = "atEventTime"
			}(I || (I = {}))
		},
		"./src/reddit/models/PostDraft/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return o
			}));
			var n, r, s = i("./src/lib/constants/index.ts");
			! function(e) {
				e[e.Image = 0] = "Image", e[e.Link = 1] = "Link", e[e.Markdown = 2] = "Markdown", e[e.RichText = 3] = "RichText", e[e.Video = 4] = "Video"
			}(n || (n = {})),
			function(e) {
				e[e.replyToPost = 0] = "replyToPost", e[e.replyToComment = 1] = "replyToComment", e[e.edit = 2] = "edit"
			}(r || (r = {}));
			const o = {
				[n.Image]: s.Hb.MEDIA,
				[n.Link]: s.Hb.LINK_ONLY,
				[n.Markdown]: s.Hb.POST,
				[n.RichText]: s.Hb.POST,
				[n.Video]: s.Hb.MEDIA
			}
		},
		"./src/reddit/models/PostRequirements/index.ts": function(e, t, i) {
			"use strict";
			var n, r;
			i.d(t, "b", (function() {
					return n
				})), i.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.None = "NONE", e.Whitelist = "WHITELIST", e.Blacklist = "BLACKLIST"
				}(n || (n = {})),
				function(e) {
					e.None = "NONE", e.Required = "REQUIRED", e.NotAllowed = "NOT_ALLOWED"
				}(r || (r = {}))
		},
		"./src/reddit/models/Profile/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			var n;
			! function(e) {
				e.Downvoted = "downvoted", e.Hidden = "hidden", e.Saved = "saved", e.Upvoted = "upvoted", e.ReceivedGildings = "gilded", e.GivenGildings = "given"
			}(n || (n = {}))
		},
		"./src/reddit/models/Profile/mock.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var n = i("./src/config.ts"),
				r = i("./src/reddit/models/Subreddit/index.ts");
			const s = {
				t5_100: {
					id: "t5_100",
					isNSFW: !1,
					displayText: "u/cfb",
					name: "cfb",
					title: "CFB Title",
					type: r.d.User,
					url: "/user/cfb",
					subscribers: 1,
					icon: {
						url: "".concat(n.a.assetPath, "/img/placeholder_gradient_light-280.png"),
						width: 120,
						height: 120
					}
				},
				t5_200: {
					id: "t5_200",
					isNSFW: !1,
					displayText: "u/test",
					name: "test",
					title: "Test User Title",
					type: r.d.User,
					url: "/user/test",
					subscribers: 10,
					icon: {
						url: "".concat(n.a.assetPath, "/img/placeholder_gradient_light-280.png"),
						width: 120,
						height: 120
					}
				},
				t5_300: {
					id: "t5_200",
					isNSFW: !1,
					displayText: "u/shitty_watercolour",
					name: "shitty_watercolour",
					title: "Shitty_Watercolour Title",
					type: r.d.User,
					url: "/user/shitty_watercolour",
					subscribers: 20,
					icon: {
						url: "".concat(n.a.assetPath, "/img/placeholder_gradient_light-280.png"),
						width: 120,
						height: 120
					}
				}
			}
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "a", (function() {
				return s
			}));
			var n, r = i("./src/reddit/actions/publicAccessNetwork/constants.ts");
			! function(e) {
				e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
			}(n || (n = {}));
			const s = e => !!e && e.toLowerCase().startsWith(r.V) && e.toLowerCase().endsWith(r.U)
		},
		"./src/reddit/models/RichTextJson/index.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "j", (function() {
					return n
				})), i.d(t, "A", (function() {
					return r
				})), i.d(t, "w", (function() {
					return s
				})), i.d(t, "n", (function() {
					return o
				})), i.d(t, "o", (function() {
					return d
				})), i.d(t, "g", (function() {
					return l
				})), i.d(t, "v", (function() {
					return a
				})), i.d(t, "y", (function() {
					return u
				})), i.d(t, "B", (function() {
					return c
				})), i.d(t, "C", (function() {
					return _
				})), i.d(t, "x", (function() {
					return m
				})), i.d(t, "u", (function() {
					return p
				})), i.d(t, "k", (function() {
					return h
				})), i.d(t, "l", (function() {
					return f
				})), i.d(t, "b", (function() {
					return g
				})), i.d(t, "c", (function() {
					return b
				})), i.d(t, "q", (function() {
					return w
				})), i.d(t, "p", (function() {
					return y
				})), i.d(t, "e", (function() {
					return v
				})), i.d(t, "f", (function() {
					return T
				})), i.d(t, "d", (function() {
					return S
				})), i.d(t, "z", (function() {
					return E
				})), i.d(t, "h", (function() {
					return F
				})), i.d(t, "m", (function() {
					return I
				})), i.d(t, "s", (function() {
					return j
				})), i.d(t, "a", (function() {
					return B
				})), i.d(t, "r", (function() {
					return x
				})), i.d(t, "D", (function() {
					return R
				})), i.d(t, "t", (function() {
					return k
				})), i.d(t, "i", (function() {
					return C
				})), i.d(t, "F", (function() {
					return N
				})), i.d(t, "E", (function() {
					return P
				})),
				function(e) {
					e[e.bold = 1] = "bold", e[e.italic = 2] = "italic", e[e.underline = 4] = "underline", e[e.strikethrough = 8] = "strikethrough", e[e.subscript = 16] = "subscript", e[e.superscript = 32] = "superscript", e[e.monospace = 64] = "monospace"
				}(n || (n = {}));
			const r = "text",
				s = "raw",
				o = "br",
				d = "link",
				l = "c/",
				a = "p/",
				u = "r/",
				c = "u/",
				_ = "@",
				m = "spoilertext",
				p = "par",
				h = "h",
				f = "hr",
				g = "blockquote",
				b = "code",
				w = "li",
				y = "list",
				v = "L",
				T = "R",
				S = "C",
				E = "table",
				F = "embed",
				I = "img";
			var O;
			! function(e) {
				e.Valid = "valid", e.Unprocessed = "unprocessed", e.Failed = "failed", e.Invalid = "invalid"
			}(O || (O = {}));
			const j = "Image",
				B = "gif",
				x = "AnimatedImage",
				R = "video",
				k = "RedditVideo",
				C = {
					document: []
				},
				N = e => !e || !e.document || (e => 0 === e.length || 1 === e.length && (e => "par" === e.e && (!e.c || 0 === e.c.length))(e[0]))(e.document),
				P = (e, t) => {
					const i = e && e[t];
					if (i && (!i.status || i.status === O.Valid)) return i
				}
		},
		"./src/reddit/models/RichTextJson/nodeMakers.ts": function(e, t, i) {
			"use strict";
			i.d(t, "s", (function() {
				return r
			})), i.d(t, "m", (function() {
				return s
			})), i.d(t, "i", (function() {
				return o
			})), i.d(t, "n", (function() {
				return d
			})), i.d(t, "o", (function() {
				return l
			})), i.d(t, "t", (function() {
				return a
			})), i.d(t, "l", (function() {
				return u
			})), i.d(t, "f", (function() {
				return c
			})), i.d(t, "c", (function() {
				return _
			})), i.d(t, "d", (function() {
				return m
			})), i.d(t, "j", (function() {
				return p
			})), i.d(t, "k", (function() {
				return h
			})), i.d(t, "q", (function() {
				return f
			})), i.d(t, "p", (function() {
				return g
			})), i.d(t, "r", (function() {
				return b
			})), i.d(t, "g", (function() {
				return w
			})), i.d(t, "b", (function() {
				return y
			})), i.d(t, "u", (function() {
				return v
			})), i.d(t, "e", (function() {
				return T
			})), i.d(t, "h", (function() {
				return S
			})), i.d(t, "a", (function() {
				return E
			}));
			var n = i("./src/reddit/models/RichTextJson/index.ts");
			const r = (e, t) => Object.assign({
					e: n.A,
					t: e
				}, t ? {
					f: t
				} : null),
				s = e => ({
					e: n.w,
					t: e
				}),
				o = (e, t, i) => Object.assign({
					e: n.o,
					t: e,
					u: t
				}, i ? {
					f: i
				} : null),
				d = e => ({
					e: n.x,
					c: [r(e, null)]
				}),
				l = (e, t) => ({
					e: n.y,
					t: e,
					l: t
				}),
				a = (e, t) => ({
					e: n.B,
					t: e,
					l: t
				}),
				u = e => ({
					e: n.u,
					c: e
				}),
				c = (e, t) => ({
					e: n.k,
					l: e,
					c: t
				}),
				_ = e => ({
					e: n.b,
					c: e
				}),
				m = e => ({
					e: "code",
					c: e
				}),
				p = e => ({
					e: n.q,
					c: e
				}),
				h = (e, t) => ({
					e: n.p,
					c: e,
					o: t
				}),
				f = (e, t) => Object.assign({
					c: e
				}, t ? {
					a: t
				} : {}),
				g = e => ({
					c: e
				}),
				b = (e, t) => ({
					e: n.z,
					h: e,
					c: t
				}),
				w = (e, t) => ({
					e: n.m,
					id: e,
					c: t
				}),
				y = (e, t) => ({
					e: n.a,
					id: e,
					c: t
				}),
				v = (e, t, i, r) => Object.assign({
					e: n.D,
					id: e,
					c: t,
					gifify: r
				}, i ? {
					p: w(i)
				} : {}),
				T = (e, t) => "image/gif" === t ? {
					e: n.a,
					id: e
				} : {
					e: n.m,
					id: e
				},
				S = () => ({
					e: n.n
				}),
				E = {
					e: n.u,
					c: [{
						e: n.A,
						t: ""
					}]
				}
		},
		"./src/reddit/models/Search/index.ts": function(e, t, i) {
			"use strict";
			var n, r;
			i.d(t, "c", (function() {
					return n
				})), i.d(t, "b", (function() {
					return r
				})), i.d(t, "a", (function() {
					return s
				})), i.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.trending = "trending", e.typeahead = "typeahead", e.recent = "recent"
				}(n || (n = {})),
				function(e) {
					e.subredditOrProfile = "subredditOrProfile", e.text = "text"
				}(r || (r = {}));
			const s = {
					searchQuery: "",
					section: n.recent,
					type: r.text
				},
				o = e => ({
					displayInfo: {
						iconUrl: e.icon.url,
						isNSFW: e.isNSFW,
						subredditOrProfileName: e.name,
						subscribers: e.subscribers
					},
					id: e.id,
					isProfile: e.displayText.startsWith("u/"),
					isSubreddit: e.displayText.startsWith("r/"),
					isTypeaheadSuggestion: !0,
					searchQuery: e.displayText,
					section: n.typeahead,
					type: r.subredditOrProfile
				})
		},
		"./src/reddit/models/StructuredStyles/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return s
			})), i.d(t, "a", (function() {
				return l
			})), i.d(t, "l", (function() {
				return u
			})), i.d(t, "j", (function() {
				return b
			})), i.d(t, "i", (function() {
				return w
			})), i.d(t, "h", (function() {
				return v
			})), i.d(t, "c", (function() {
				return T
			})), i.d(t, "k", (function() {
				return S
			})), i.d(t, "b", (function() {
				return E
			})), i.d(t, "d", (function() {
				return F
			})), i.d(t, "e", (function() {
				return I
			})), i.d(t, "f", (function() {
				return O
			}));
			var n = i("./node_modules/polished/dist/polished.es.js"),
				r = i("./src/reddit/models/Image/index.tsx");
			const s = "reddit-user_id",
				o = {
					primaryColor: "#0079D3",
					highlightColor: "#0079D3",
					postTitleColor: "#222222",
					backgroundColor: "#DAE0E6",
					postBackgroundColor: "#FFFFFF",
					postDownvoteCountColor: "#7193FF",
					postUpvoteCountColor: "#FF4500"
				},
				d = {
					bannerBackgroundColor: void 0,
					bannerOverlayColor: void 0,
					menuBackgroundColor: void 0,
					menuLinkColorActive: void 0,
					menuLinkColorInactive: void 0,
					menuLinkColorHover: void 0,
					mobileKeyColor: void 0,
					sidebarWidgetBackgroundColor: void 0,
					sidebarWidgetHeaderColor: void 0,
					submenuBackgroundColor: void 0
				};
			var l;
			! function(e) {
				e.ButtonWidgetButtonColor = "buttonWidgetButtonColor", e.ButtonWidgetTextColor = "buttonWidgetTextColor", e.ButtonWidgetFillColor = "buttonWidgetFillColor", e.ButtonWidgetHoverColor = "buttonWidgetHoverButtonColor", e.ButtonWidgetHoverTextColor = "buttonWidgetHoverTextColor", e.ButtonWidgetHoverFillColor = "buttonWidgetHoverFillColor"
			}(l || (l = {}));
			const a = {
				backgroundImage: void 0,
				bannerBackgroundImage: void 0,
				bannerPositionedImage: void 0,
				communityIcon: void 0,
				menuBackgroundImage: void 0,
				mobileBannerImage: void 0,
				postBackgroundImage: void 0,
				postDownvoteIconActive: void 0,
				postDownvoteIconInactive: void 0,
				postPlaceholderImage: void 0,
				postUpvoteIconActive: void 0,
				postUpvoteIconInactive: void 0,
				secondaryBannerPositionedImage: void 0
			};

			function u(e) {
				return e in a
			}
			const c = {
				menuBackgroundOpacity: 70
			};
			const _ = {
				backgroundImagePosition: "cover",
				bannerBackgroundImagePosition: "cover",
				bannerPositionedImagePosition: "left",
				postBackgroundImagePosition: "cover",
				postPlaceholderImagePosition: "cover"
			};
			const m = {
				postVoteIcons: "default",
				submenuBackgroundStyle: "default"
			};
			const p = {
				bannerHeight: "small"
			};
			const h = {
				bannerShowCommunityIcon: "show"
			};
			const f = {
				bannerCommunityNameFormat: "slashtag"
			};
			const g = {
				menuPosition: "default"
			};
			const b = e => {
					const t = Object.assign({}, T);
					for (const i in t) t[i] = i in e ? e[i] : null;
					return t
				},
				w = e => e.primaryColor || e.mobileKeyColor || o.primaryColor,
				y = {
					highlightColor: e => e.highlightColor ? e.highlightColor : e.mobileKeyColor ? Object(n.a)(.2, e.mobileKeyColor) : o.highlightColor,
					primaryColor: w,
					sidebarWidgetHeaderColor: e => e.sidebarWidgetHeaderColor || e.primaryColor || e.mobileKeyColor || o.primaryColor,
					sidebarWidgetBackgroundColor: e => e.sidebarWidgetBackgroundColor || o.postBackgroundColor
				},
				v = (e, t) => {
					const i = {};
					for (const n in T) {
						if (t && n in t) {
							if (null != t[n]) {
								i[n] = t[n];
								continue
							}
						} else if (n in y) {
							const t = y[n](e);
							if (null != t) {
								i[n] = t;
								continue
							}
						}
						n in e && null != e[n] && e[n] !== r.c ? i[n] = e[n] : i[n] = T[n]
					}
					return i
				},
				T = Object.assign({}, d, o, a, c, _, m, p, h, f, g),
				S = e => Object.assign({}, e, {
					bannerBackgroundColor: e.bannerBackgroundColor || Object(n.h)(.6, e.primaryColor),
					menuLinkColorActive: e.menuLinkColorActive || e.highlightColor,
					menuLinkColorInactive: e.menuLinkColorInactive || e.primaryColor,
					menuLinkColorHover: e.menuLinkColorHover || e.highlightColor,
					menuBackgroundColor: e.menuBackgroundColor || Object(n.h)(.93, e.primaryColor),
					submenuBackgroundColor: e.submenuBackgroundColor || Object(n.h)(.93, e.primaryColor),
					bannerOverlayColor: e.bannerOverlayColor || e.primaryColor
				}),
				E = ["#EA0027", "#FF4500", "#FFB000", "#FFD635", "#94E044", "#46D160", "#0DD3BB", "#00A6A5", "#B8001F", "#CC3600", "#CC8B00", "#CCAC2B", "#73AD34", "#349E48", "#0AA18F", "#007373", "#0079D3", "#014980", "#7193FF", "#FF66AC", "#9E8D49", "#DDBD37", "#EDEFF1", "#373C3F", "#005BA1", "#0266B3", "#5A74CC", "#CC5289", "#6B6031", "#AB912B", "#BBBDBF", "#646D73"],
				F = "#EDEFF1",
				I = "postBackgroundImage",
				O = "postPlaceholderImage"
		},
		"./src/reddit/models/Subreddit/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "g", (function() {
				return d
			})), i.d(t, "h", (function() {
				return l
			})), i.d(t, "f", (function() {
				return a
			})), i.d(t, "a", (function() {
				return u
			})), i.d(t, "e", (function() {
				return c
			}));
			var n, r, s, o = i("./src/reddit/models/GqlTopLevelField.ts");
			! function(e) {
				e.BannedSubreddit = "BANNED", e.GoldSubreddit = "GOLD", e.PrivateSubreddit = "PRIVATE", e.QuarantinedSubreddit = "QUARANTINED", e.NotFoundSubreddit = "NOT_FOUND", e.ForbiddenSubreddit = "FORBIDDEN"
			}(n || (n = {})),
			function(e) {
				e.Archived = "archived", e.EmployeesOnly = "employees_only", e.GoldOnly = "gold_only", e.GoldRestricted = "gold_restricted", e.Private = "private", e.Public = "public", e.Restricted = "restricted", e.User = "user"
			}(r || (r = {})),
			function(e) {
				e.Unknown = "UNKNOWN", e.Private = "PRIVATE", e.GoldOnly = "GOLD_ONLY", e.Banned = "BANNED", e.Quarantined = "QUARANTINED"
			}(s || (s = {}));
			const d = e => "__typename" in e && e.__typename === o.a.UnavailableSubreddit,
				l = e => "__typename" in e && e.__typename === o.a.UnavailableSubreddit,
				a = e => e.type === r.User;
			var u;

			function c(e) {
				return !!e && (e.originalContentTagEnabled || !!e.contentCategory)
			}! function(e) {
				e.Image = "IMAGE", e.Link = "LINK", e.Spoiler = "SPOILER", e.Text = "TEXT", e.Video = "VIDEO", e.Poll = "POLL"
			}(u || (u = {}))
		},
		"./src/reddit/models/Subreddit/mock.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			}));
			var n = i("./src/config.ts"),
				r = i("./src/reddit/models/Subreddit/index.ts"),
				s = i("./src/reddit/models/WhitelistStatus/index.ts");
			const o = {
				t5_1: {
					id: "t5_1",
					displayText: "r/cfb",
					name: "cfb",
					title: "CFB Title",
					type: r.d.Public,
					url: "/r/cfb",
					icon: {
						url: "".concat(n.a.assetPath, "/img/placeholder_gradient_light-280.png"),
						width: 120,
						height: 120
					},
					subscribers: 14343103,
					wls: s.a.ALL_ADS,
					isNSFW: !1
				},
				t5_2: {
					id: "t5_2",
					displayText: "r/test",
					name: "test",
					title: "Test Title",
					type: r.d.Private,
					url: "/r/test",
					icon: {
						url: "".concat(n.a.assetPath, "/img/placeholder_gradient_light-280.png"),
						width: 120,
						height: 120
					},
					subscribers: 1,
					wls: void 0,
					isNSFW: !1
				},
				t5_3: {
					id: "t5_2",
					displayText: "r/test",
					name: "test",
					title: "Gold Title",
					type: r.d.GoldOnly,
					url: "/r/test",
					icon: {
						url: "".concat(n.a.assetPath, "/img/placeholder_gradient_light-280.png"),
						width: 120,
						height: 120
					},
					subscribers: 1,
					wls: void 0,
					isNSFW: !1
				}
			}
		},
		"./src/reddit/models/SubredditAutocomplete/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			}));
			var n, r = i("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				s = i("./src/reddit/models/User/index.ts");
			! function(e) {
				e[e.OWN_PROFILE = 0] = "OWN_PROFILE", e[e.SUBSCRIBED_TO_SUBREDDIT = 1] = "SUBSCRIBED_TO_SUBREDDIT", e[e.OTHER_SUBREDDIT = 2] = "OTHER_SUBREDDIT", e[e.MODERATED_SUBREDDIT = 3] = "MODERATED_SUBREDDIT"
			}(n || (n = {}));
			const o = (e, t) => d(e, n.SUBSCRIBED_TO_SUBREDDIT, t),
				d = (e, t, i) => {
					const {
						color: n,
						url: s
					} = Object(r.a)({
						shouldHideNsfwIcon: i,
						subredditOrProfile: e
					});
					return {
						iconUrl: s,
						id: e.id,
						isNsfw: e.isNSFW,
						name: e.name,
						primaryColor: n,
						subscribers: e.subscribers,
						type: t
					}
				},
				l = e => ({
					iconUrl: e.accountIcon,
					id: e.id,
					name: Object(s.e)(e),
					type: n.OWN_PROFILE
				})
		},
		"./src/reddit/models/SubredditModeration/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			})), i.d(t, "d", (function() {
				return o
			}));
			const n = 999;
			var r;
			! function(e) {
				e.Editable = "editable", e.Invited = "invited"
			}(r || (r = {}));
			const s = {
					searchTerm: null,
					userId: null,
					username: null
				},
				o = (e, t, i) => "".concat(e, "-").concat(((e, t) => t || e || "1")(i, t))
		},
		"./src/reddit/models/SubredditRestrictions/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "e", (function() {
				return s
			})), i.d(t, "f", (function() {
				return o
			})), i.d(t, "d", (function() {
				return l
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "g", (function() {
				return u
			}));
			var n, r, s, o, d = i("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Create = "create", e.Draft = "draft"
			}(n || (n = {})),
			function(e) {
				e.Comment = "comment_composer", e.IdCard = "id_card", e.PostSubmission = "post_submission"
			}(r || (r = {})),
			function(e) {
				e.PostAndComment = "post and comment", e.Post = "post", e.Comment = "comment", e.View = "view"
			}(s || (s = {})),
			function(e) {
				e.Post = "restrictPosting", e.Comment = "restrictCommenting"
			}(o || (o = {}));
			const l = {
					[s.Post]: () => d.fbt._("post", null, {
						hk: "3jbs05"
					}),
					[s.Comment]: () => d.fbt._("comment", null, {
						hk: "1b6xGG"
					}),
					[s.PostAndComment]: () => d.fbt._("post and comment", null, {
						hk: "2Wxjcu"
					})
				},
				a = {
					[n.Create]: () => d.fbt._("create", null, {
						hk: "2nFG0L"
					}),
					[n.Draft]: () => d.fbt._("draft", null, {
						hk: "1LrMyG"
					})
				},
				u = e => d.fbt._("Anyone can view this community, but only approved users can {restrictionType}", [d.fbt._param("restrictionType", e && l[e] && l[e]() || l[s.Post]())], {
					hk: "43LL8D"
				})
		},
		"./src/reddit/models/Theme/NewColorSystem/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return s
			})), i.d(t, "b", (function() {
				return o
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "a", (function() {
				return l
			}));
			var n = i("./node_modules/polished/dist/polished.es.js"),
				r = i("./src/reddit/models/NewStructuredStyles/index.ts");
			const s = {
				borderRadius: "32",
				customSize: "52",
				padding: "10",
				size: "36"
			};

			function o(e) {
				return Object(n.l)(.93, e)
			}

			function d(e, t, i) {
				return Object(r.c)(e, t, i)
			}

			function l(e) {
				return e.redditStyle || e["data-redditstyle"] ? e.theme.newRedditTheme : e.theme.newCommunityTheme
			}
		},
		"./src/reddit/models/Theme/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "g", (function() {
				return p
			})), i.d(t, "f", (function() {
				return S
			})), i.d(t, "c", (function() {
				return O
			})), i.d(t, "i", (function() {
				return B
			})), i.d(t, "h", (function() {
				return x
			})), i.d(t, "b", (function() {
				return R
			})), i.d(t, "d", (function() {
				return k
			}));
			var n = i("./node_modules/polished/dist/polished.es.js"),
				r = i("./src/reddit/constants/theme.ts"),
				s = i("./src/reddit/models/NewStructuredStyles/index.ts"),
				o = i("./src/reddit/models/StructuredStyles/index.ts");
			var d = i("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const l = {
					small: 64,
					medium: 128,
					large: 192
				},
				a = {
					show: !0,
					hide: !1
				};

			function u(e, t, i) {
				if ("pretty" === i) return [e];
				if ("slashtag" === i) {
					if (t) {
						const e = t.indexOf("/");
						return [t.slice(0, e + 1), t.slice(e + 1)]
					}
					return ["r/", e]
				}
				return null
			}
			const c = e => {
					switch (e) {
						case "cover":
							return "no-repeat center / cover";
						case "tiled":
							return "repeat center top";
						case "centered":
							return "no-repeat center top";
						default:
							return ""
					}
				},
				_ = (e, t) => {
					const i = t / 100,
						r = Object(n.e)(e);
					return r.alpha = i, Object(n.k)(r)
				},
				m = (e, t) => Object(n.h)(e, t),
				p = (e, t, i) => t ? [e, "url(".concat(t, ")"), c(i)].filter(Boolean).join(" ") : e,
				h = (o.c, {}),
				f = {
					borderRadius: "24",
					customSize: "32",
					padding: "6",
					size: "24"
				},
				g = e => "overlay" === e.menuPosition ? e.bannerOverlayColor ? _(e.bannerOverlayColor, e.menuBackgroundOpacity) : _(e.primaryColor, e.menuBackgroundOpacity) : "default" === e.menuPosition ? e.menuBackgroundColor || m(.93, e.primaryColor) : void 0,
				b = e => "custom" === e.submenuBackgroundStyle ? e.submenuBackgroundColor || m(.93, e.primaryColor) : e.menuBackgroundColor || m(.93, e.primaryColor),
				w = e => {
					let t = l[e.bannerHeight];
					return "overlay" === e.menuPosition && (t += 36), t
				},
				y = e => parseInt(l[e]) - 16,
				v = {
					shouldShowNSFWContent: !1,
					emojiWidth: void 0,
					emojiHeight: void 0
				},
				T = (e, t) => Object(n.i)(e, t),
				S = e => e && Object(n.b)(e) < .5 ? s.a.body : s.a.bodyText,
				E = (e, t) => Object(n.j)(e, t),
				F = (e, t) => Object(n.l)(e, t),
				I = e => {
					return Object(n.b)(e) > .9 ? Object(n.a)(.1, e) : e
				},
				O = B(o.c, v);

			function j(e) {
				return e.bannerBackgroundColor || m(.6, e.primaryColor) || s.a.banner.backgroundColor
			}

			function B(e, t) {
				const i = e.highlightColor ? I(e.highlightColor) : s.a.linkText,
					r = S(e.sidebarWidgetBackgroundColor || s.a.widgetColors.sidebarWidgetBackgroundColor),
					o = e.sidebarWidgetBackgroundColor || s.a.widgetColors.sidebarWidgetBackgroundColor,
					l = i,
					u = Object.assign({}, s.a.voteText);
				if (e.postUpvoteCountColor) {
					const t = e.postUpvoteCountColor;
					u.upvote = t, u.upvoteShaded80 = Object(n.i)(.8, t), u.upvoteTinted80 = Object(n.j)(.8, t)
				}
				if (e.postDownvoteCountColor) {
					const t = e.postDownvoteCountColor;
					u.downvote = t, u.downvoteShaded80 = Object(n.i)(.8, t), u.downvoteTinted80 = Object(n.j)(.8, t)
				}
				return {
					subredditContext: t,
					communityTheme: {},
					newCommunityTheme: Object(d.c)({
						active: e.primaryColor,
						activeShaded80: T(.8, e.primaryColor),
						activeShaded90: T(.9, e.primaryColor),
						banner: {
							backgroundColor: j(e),
							backgroundImage: e.bannerBackgroundImage,
							backgroundImagePosition: e.bannerBackgroundImagePosition,
							communityNameFormat: e.bannerCommunityNameFormat,
							iconColor: e.primaryColor,
							iconImage: e.communityIcon,
							iconDimensions: "small" === e.bannerHeight ? f : d.d,
							lineHeight: "small" === e.bannerHeight ? "38" : "60",
							height: w(e),
							positionedImage: e.bannerPositionedImage,
							positionedImageHeight: y(e.bannerHeight),
							positionedImageAlignment: e.bannerPositionedImagePosition,
							secondaryBannerPositionedImage: e.secondaryBannerPositionedImage,
							showCommunityIcon: a[e.bannerShowCommunityIcon]
						},
						button: i,
						buttonShaded80: T(.8, i),
						canvas: e.backgroundColor || s.a.canvas,
						canvasImgUrl: e.backgroundImage,
						canvasImgPosition: e.backgroundImagePosition,
						lineShadedNinety: T(.9, s.a.line),
						linkText: l,
						linkTextAlpha80: Object(n.g)(l, .5),
						linkTextShaded80: T(.8, l),
						linkTextTinted80: E(.8, l),
						menu: e.menuBackgroundColor || s.a.menu,
						menuActiveText: e.menuLinkColorActive || s.a.menuActiveText,
						menuInactiveText: e.menuLinkColorInactive || s.a.menuInactiveText,
						navBar: {
							activeLink: e.menuLinkColorActive || e.highlightColor,
							activeSubmenuCaret: e.primaryColor,
							activeSubmenuLink: e.primaryColor,
							backgroundColor: g(e) || "",
							backgroundImage: "overlay" !== e.menuPosition ? e.menuBackgroundImage : void 0,
							hoverLink: e.menuLinkColorHover || e.highlightColor,
							inactiveLink: e.menuLinkColorInactive || e.primaryColor,
							inactiveSubmenuCaret: m(.6, e.primaryColor),
							inactiveSubmenuLink: m(.6, e.primaryColor),
							submenuBackgroundColor: b(e),
							useOverlay: "overlay" === e.menuPosition
						},
						post: !e.postBackgroundColor || t.isOverlay || t.isCommentsPage ? s.a.post : e.postBackgroundColor,
						primaryButtonShadedEighty: T(.8, e.primaryColor || s.a.button),
						primaryButtonTintedEighty: E(.8, e.primaryColor || s.a.button),
						primaryButtonTintedSixty: E(.6, e.primaryColor || s.a.button),
						primaryButtonTintedFifty: E(.5, e.primaryColor || s.a.button),
						titleText: e.postTitleColor && !t.isOverlay ? e.postTitleColor : s.a.titleText,
						textTransparentizedEighty: F(.8, s.a.bodyText),
						voteText: u,
						voteIcons: {
							upvoteActive: "custom" === e.postVoteIcons ? e.postUpvoteIconActive : void 0,
							upvoteInactive: "custom" === e.postVoteIcons ? e.postUpvoteIconInactive : void 0,
							downvoteActive: "custom" === e.postVoteIcons ? e.postDownvoteIconActive : void 0,
							downvoteInactive: "custom" === e.postVoteIcons ? e.postDownvoteIconInactive : void 0
						},
						widgetColors: {
							sidebarWidgetBackgroundColor: o,
							sidebarWidgetBorderColor: Object(s.d)(o, !1),
							sidebarWidgetHeaderColor: e.sidebarWidgetHeaderColor || s.a.widgetColors.sidebarWidgetHeaderColor,
							sidebarWidgetHeaderColorAlpha60: e.sidebarWidgetHeaderColor && Object(n.g)(e.sidebarWidgetHeaderColor, .6) || Object(n.g)(s.a.widgetColors.sidebarWidgetHeaderColor, .6),
							sidebarWidgetTextColor: r,
							sidebarWidgetTextColorShaded80: Object(n.i)(.8, r),
							sidebarWidgetTitleColor: S(e.sidebarWidgetHeaderColor || s.a.widgetColors.sidebarWidgetHeaderColor),
							lineColor: Object(d.b)(S(o))
						}
					}, {
						backgroundImage: t.isOverlay ? void 0 : e.postBackgroundImage,
						backgroundImagePosition: e.postBackgroundImagePosition,
						placeholderImage: e.postPlaceholderImage,
						placeholderImagePosition: e.postPlaceholderImagePosition
					}, !1),
					redditTheme: h,
					newRedditTheme: Object(d.c)(s.a, {}, !1)
				}
			}

			function x(e, t) {
				return {
					subredditContext: t,
					communityTheme: {},
					newCommunityTheme: Object(d.c)({
						banner: {
							backgroundColor: Object(n.i)(.9, e.bannerBackgroundColor || m(.6, e.primaryColor) || s.b.banner.backgroundColor),
							backgroundImage: e.bannerBackgroundImage,
							backgroundImagePosition: e.bannerBackgroundImagePosition,
							communityNameFormat: e.bannerCommunityNameFormat,
							iconColor: e.primaryColor,
							iconImage: e.communityIcon,
							iconDimensions: "small" === e.bannerHeight ? f : d.d,
							lineHeight: "small" === e.bannerHeight ? "38" : "60",
							height: w(e),
							positionedImage: e.bannerPositionedImage,
							positionedImageHeight: y(e.bannerHeight),
							positionedImageAlignment: e.bannerPositionedImagePosition,
							secondaryBannerPositionedImage: e.secondaryBannerPositionedImage,
							showCommunityIcon: a[e.bannerShowCommunityIcon]
						},
						voteIcons: {
							upvoteActive: "custom" === e.postVoteIcons ? e.postUpvoteIconActive : void 0,
							upvoteInactive: "custom" === e.postVoteIcons ? e.postUpvoteIconInactive : void 0,
							downvoteActive: "custom" === e.postVoteIcons ? e.postDownvoteIconActive : void 0,
							downvoteInactive: "custom" === e.postVoteIcons ? e.postDownvoteIconInactive : void 0
						},
						widgetColors: s.b.widgetColors
					}, {
						backgroundImage: void 0,
						backgroundImagePosition: void 0,
						placeholderImage: e.postPlaceholderImage,
						placeholderImagePosition: e.postPlaceholderImagePosition
					}, !0),
					redditTheme: h,
					newRedditTheme: Object(d.c)(s.b, {}, !0)
				}
			}
			const R = x(o.c, v),
				k = {
					[r.b.REDDIT]: O,
					[r.b.NIGHT]: R
				}
		},
		"./src/reddit/models/Upload/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return r
			})), i.d(t, "e", (function() {
				return s
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "a", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = i("./src/reddit/helpers/getS3KeyFromUrl/index.ts");
			const r = {
					POST_CREATION_MEDIA: "POST_CREATION_MEDIA",
					POST_CREATION_VIDEO_POSTER: "POST_CREATION_VIDEO_POSTER",
					RTE_MEDIA: "RTE_MEDIA"
				},
				s = (e, t) => t ? "".concat(e).concat("/").concat(t) : e,
				o = e => Object(n.a)(e).split("/").slice(-1)[0],
				d = {
					PENDING: "PENDING",
					UPLOADING: "UPLOADING",
					SUCCESS: "SUCCESS",
					FAILED: "FAILED",
					CANCELED: "CANCELED"
				},
				l = e => {
					let {
						status: t
					} = e;
					return t === d.PENDING || t === d.UPLOADING
				}
		},
		"./src/reddit/models/User/index.ts": function(e, t, i) {
			"use strict";
			var n;
			i.d(t, "a", (function() {
					return r
				})), i.d(t, "e", (function() {
					return s
				})), i.d(t, "d", (function() {
					return o
				})), i.d(t, "c", (function() {
					return d
				})), i.d(t, "b", (function() {
					return l
				})),
				function(e) {
					e.Favorites = "favorites", e.Multis = "multis", e.Moderating = "moderating", e.Subscriptions = "subscriptions", e.Profiles = "profiles"
				}(n || (n = {}));
			const r = {
					favorites: !1,
					multis: !1,
					moderating: !1,
					subscriptions: !1,
					profiles: !1
				},
				s = e => {
					const t = e.username || e.displayText;
					if (!t) throw new Error("Invalid username!");
					return t
				},
				o = e => {
					const t = 1e3 * e.created;
					if (t) return new Date(t).getTime()
				};
			var d, l;
			! function(e) {
				e.AvailableRedditor = "Redditor", e.DeletedRedditor = "DeletedRedditor", e.UnavailableRedditor = "UnavailableRedditor"
			}(d || (d = {})),
			function(e) {
				e.BLANK = "BLANK", e.CONFIDENCE = "CONFIDENCE", e.CONTROVERSIAL = "CONTROVERSIAL", e.LIVE = "LIVE", e.NEW = "NEW", e.OLD = "OLD", e.QA = "QA", e.RANDOM = "RANDOM", e.TOP = "TOP"
			}(l || (l = {}))
		},
		"./src/reddit/models/WhitelistStatus/index.ts": function(e, t, i) {
			"use strict";
			var n, r;
			i.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e[e.NO_ADS = 0] = "NO_ADS", e[e.HOUSE_ONLY = 1] = "HOUSE_ONLY", e[e.PROMO_ADULT_NSFW = 3] = "PROMO_ADULT_NSFW", e[e.PROMO_ALL = 5] = "PROMO_ALL", e[e.ALL_ADS = 6] = "ALL_ADS"
				}(n || (n = {})),
				function(e) {
					e.NO_ADS = "NO_ADS", e.HOUSE_ONLY = "HOUSE_ONLY", e.PROMO_SPECIFIED = "PROMO_SPECIFIED", e.PROMO_ADULT_NSFW = "PROMO_ADULT_NSFW", e.PROMO_ADULT = "PROMO_ADULT", e.PROMO_ALL = "PROMO_ALL", e.ALL_ADS = "ALL_ADS"
				}(r || (r = {}))
		},
		"./src/reddit/models/Widgets/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return s
			})), i.d(t, "m", (function() {
				return o
			})), i.d(t, "f", (function() {
				return u
			})), i.d(t, "a", (function() {
				return c
			})), i.d(t, "b", (function() {
				return _
			})), i.d(t, "s", (function() {
				return h
			})), i.d(t, "n", (function() {
				return f
			})), i.d(t, "e", (function() {
				return g
			})), i.d(t, "d", (function() {
				return y
			})), i.d(t, "i", (function() {
				return S
			})), i.d(t, "h", (function() {
				return E
			})), i.d(t, "j", (function() {
				return F
			})), i.d(t, "g", (function() {
				return I
			})), i.d(t, "r", (function() {
				return A
			})), i.d(t, "k", (function() {
				return D
			})), i.d(t, "l", (function() {
				return G
			})), i.d(t, "p", (function() {
				return M
			})), i.d(t, "o", (function() {
				return U
			})), i.d(t, "q", (function() {
				return q
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./src/reddit/models/Subreddit/index.ts");
			const s = 1,
				o = () => ({
					backgroundColor: null,
					headerColor: null
				}),
				d = () => ({
					id: null,
					kind: "textarea",
					shortName: "",
					text: "",
					textHtml: void 0,
					styles: o()
				}),
				l = e => {
					return {
						id: e.id,
						kind: e.kind,
						text: e.text,
						shortName: e.shortName,
						styles: e.styles
					}
				},
				a = () => ({
					currentlyViewingCount: 0,
					currentlyViewingText: "",
					description: "",
					id: null,
					kind: "id-card",
					shortName: "Community details",
					subscribersCount: 0,
					subscribersText: "",
					styles: o()
				});
			var u;
			! function(e) {
				e.Text = "text", e.Image = "image"
			}(u || (u = {}));
			const c = 32,
				_ = 288,
				m = e => {
					return {
						id: e.id,
						kind: e.kind,
						shortName: e.shortName,
						description: e.description,
						buttons: e.buttons,
						styles: e.styles
					}
				},
				p = () => ({
					id: null,
					kind: "button",
					shortName: "",
					description: null,
					descriptionHtml: null,
					buttons: [],
					styles: o()
				}),
				h = () => ({
					kind: u.Text,
					text: "",
					url: "",
					color: "#000000",
					hoverState: void 0
				}),
				f = e => e.kind === u.Image ? e.linkUrl : e.url,
				g = {
					FULL: "full",
					COMPACT: "compact"
				},
				b = e => {
					return {
						id: e.id,
						display: e.display,
						kind: e.kind,
						subreddit: e.subreddit,
						shortName: "Subreddit Rules",
						styles: e.styles
					}
				},
				w = () => ({
					id: null,
					kind: "subreddit-rules",
					display: "full",
					data: [],
					subreddit: "",
					shortName: "Subreddit Rules",
					styles: o()
				});
			var y;
			! function(e) {
				e.Cloud = "cloud", e.List = "list"
			}(y || (y = {}));
			const v = () => ({
					id: null,
					kind: "post-flair",
					display: y.List,
					order: [],
					shortName: "",
					styles: o(),
					templates: {}
				}),
				T = e => {
					return {
						id: e.id,
						display: e.display,
						kind: e.kind,
						order: e.order,
						shortName: e.shortName,
						styles: e.styles
					}
				},
				S = (e, t) => {
					const i = {
						id: e.id,
						displayText: e.displayText,
						name: e.name,
						subscribers: e.subscribers,
						iconUrl: e.icon && e.icon.url,
						isSubscribed: !1,
						type: "subreddit",
						primaryColor: e.primaryColor,
						isNSFW: e.isNSFW
					};
					return t && t.publicDescription && (i.description = t.publicDescription), t && t.bannerBackgroundImage && (i.bannerBackgroundImage = t.bannerBackgroundImage), t && t.bannerBackgroundColor && (i.bannerBackgroundColor = t.bannerBackgroundColor), i
				},
				E = e => ({
					id: e.id,
					name: e.name,
					subscribers: e.subscribers,
					iconUrl: e && e.icon.url,
					type: "profile",
					isNSFW: e.isNSFW
				}),
				F = e => Object(r.f)(e) ? E(e) : S(e),
				I = e => ({
					iconUrl: e.iconUrl,
					id: e.id,
					name: e.name,
					subscribers: e.subscribers,
					primaryColor: e.primaryColor,
					type: "subreddit",
					isNSFW: e.isNsfw || !1
				}),
				O = e => {
					const t = e.data.map(e => e.name),
						i = Object.assign({}, e);
					return i.data = t, i
				},
				j = () => ({
					id: null,
					kind: "community-list",
					shortName: "",
					data: [],
					description: "",
					styles: o()
				}),
				B = () => ({
					id: null,
					kind: "calendar",
					shortName: "",
					configuration: {
						numEvents: 10,
						showDate: !0,
						showTime: !0,
						showTitle: !0,
						showLocation: !0,
						showDescription: !0
					},
					configuredAtUTC: null,
					data: [],
					googleCalendarId: "",
					moderator: null,
					requiresSync: !0,
					synchronizedAtUTC: null,
					styles: o()
				}),
				x = e => {
					return {
						id: e.id,
						kind: e.kind,
						shortName: e.shortName,
						googleCalendarId: e.googleCalendarId,
						moderator: e.moderator,
						requiresSync: e.requiresSync,
						configuredAtUTC: e.configuredAtUTC,
						configuration: Object.assign({}, e.configuration, {
							numEvents: e.configuration.numEvents || 10
						}),
						data: e.data,
						styles: e.styles
					}
				},
				R = e => (e.data.forEach((function(e) {
					void 0 === e.linkUrl && (e.linkUrl = "")
				})), e),
				k = () => ({
					data: [],
					id: null,
					kind: "image",
					shortName: ""
				}),
				C = () => ({
					id: null,
					kind: "custom",
					shortName: "",
					text: "",
					css: "",
					height: null,
					imageData: []
				}),
				N = e => ({
					id: e.id,
					kind: e.kind,
					shortName: e.shortName,
					text: e.text,
					css: e.css,
					height: e.height,
					imageData: e.imageData
				}),
				P = e => ({
					id: e.id,
					kind: e.kind,
					styles: e.styles
				}),
				L = () => ({
					id: null,
					kind: "menu",
					data: [],
					showWiki: !1
				});

			function A(e) {
				return "widgetId" in e
			}

			function D(e) {
				switch (e.kind) {
					case "subreddit-rules":
						return b(e);
					case "community-list":
						return O(e);
					case "image":
						return R(e);
					case "calendar":
						return x(e);
					case "textarea":
						return l(e);
					case "button":
						return m(e);
					case "custom":
						return N(e);
					case "moderators":
						return P(e);
					case "post-flair":
						return T(e);
					default:
						return e
				}
			}

			function G(e) {
				switch (e) {
					case "textarea":
						return d();
					case "button":
						return p();
					case "subreddit-rules":
						return w();
					case "image":
						return k();
					case "community-list":
						return j();
					case "calendar":
						return B();
					case "menu":
						return L();
					case "custom":
						return C();
					case "id-card":
						return a();
					case "post-flair":
						return v();
					default:
						throw new Error("Unknown widget type encountered")
				}
			}

			function M(e) {
				switch (e) {
					case "button":
						return n.fbt._("Button", null, {
							hk: "HgC1C"
						});
					case "calendar":
						return n.fbt._("Calendar", null, {
							hk: "ikzne"
						});
					case "community-list":
						return n.fbt._("Community list", null, {
							hk: "2KybEl"
						});
					case "custom":
						return n.fbt._("Custom", null, {
							hk: "4fliIM"
						});
					case "id-card":
						return n.fbt._("ID Card", null, {
							hk: "qYWnZ"
						});
					case "image":
						return n.fbt._("Images", null, {
							hk: "3IdoS0"
						});
					case "moderators":
						return n.fbt._("Moderators", null, {
							hk: "22G5Vw"
						});
					case "menu":
						return n.fbt._("structuredStyles widgets menu label", null, {
							hk: "38QOec"
						});
					case "post-flair":
						return n.fbt._("Post flair", null, {
							hk: "2iqHRS"
						});
					case "subreddit-rules":
						return n.fbt._("Rules", null, {
							hk: "1GxTNW"
						});
					case "textarea":
						return n.fbt._("Textarea", null, {
							hk: "14tyaE"
						})
				}
			}

			function U(e) {
				switch (e) {
					case "button":
						return n.fbt._("A widget for buttons...", null, {
							hk: "3gJsQp"
						});
					case "calendar":
						return n.fbt._("Add a calendar for events, etc.", null, {
							hk: "2RqtNI"
						});
					case "community-list":
						return n.fbt._("Recommended, related communities, etc.", null, {
							hk: "2KQCPp"
						});
					case "custom":
						return n.fbt._("Experimental: custom visuals with CSS", null, {
							hk: "14Pc95"
						});
					case "id-card":
						return n.fbt._("Community Description", null, {
							hk: "2vhNN2"
						});
					case "image":
						return n.fbt._("Art display, more cat pics, etc.", null, {
							hk: "2buUWv"
						});
					case "moderators":
						return n.fbt._("structuredStyles widgets moderators description", null, {
							hk: "2B8iNe"
						});
					case "menu":
						return n.fbt._("structuredStyles widgets menu description", null, {
							hk: "2Ljjwx"
						});
					case "post-flair":
						return n.fbt._("Display post flair for easy searching", null, {
							hk: "2KuxtA"
						});
					case "subreddit-rules":
						return n.fbt._("Rules for your community", null, {
							hk: "14w8VP"
						});
					case "textarea":
						return n.fbt._("Announcements, quick links, etc.", null, {
							hk: "1jQHO6"
						})
				}
			}

			function q(e) {
				switch (e.kind) {
					case "textarea":
					case "button":
					case "image":
					case "subreddit-rules":
					case "community-list":
					case "calendar":
					case "custom":
					case "id-card":
					case "post-flair":
						return e.shortName;
					default:
						return e.kind
				}
			}
			var H;
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(H || (H = {}))
		},
		"./src/reddit/routes/postCreation/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			}));
			const n = "/submit",
				r = "/r/:subredditName/submit",
				s = "/user/:profileName/submit"
		},
		"./src/reddit/selectors/ads.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "a", (function() {
				return r
			}));
			const n = e => e.ads,
				r = (e, t) => e.ads[t]
		},
		"./src/reddit/selectors/comments.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return _
			})), i.d(t, "d", (function() {
				return m
			})), i.d(t, "v", (function() {
				return p
			})), i.d(t, "x", (function() {
				return h
			})), i.d(t, "y", (function() {
				return f
			})), i.d(t, "k", (function() {
				return b
			})), i.d(t, "g", (function() {
				return w
			})), i.d(t, "F", (function() {
				return y
			})), i.d(t, "o", (function() {
				return v
			})), i.d(t, "p", (function() {
				return T
			})), i.d(t, "j", (function() {
				return S
			})), i.d(t, "l", (function() {
				return E
			})), i.d(t, "n", (function() {
				return F
			})), i.d(t, "h", (function() {
				return I
			})), i.d(t, "a", (function() {
				return O
			})), i.d(t, "b", (function() {
				return j
			})), i.d(t, "r", (function() {
				return B
			})), i.d(t, "m", (function() {
				return x
			})), i.d(t, "u", (function() {
				return R
			})), i.d(t, "z", (function() {
				return k
			})), i.d(t, "H", (function() {
				return C
			})), i.d(t, "t", (function() {
				return N
			})), i.d(t, "B", (function() {
				return P
			})), i.d(t, "C", (function() {
				return L
			})), i.d(t, "D", (function() {
				return A
			})), i.d(t, "s", (function() {
				return D
			})), i.d(t, "e", (function() {
				return G
			})), i.d(t, "w", (function() {
				return M
			})), i.d(t, "I", (function() {
				return U
			})), i.d(t, "f", (function() {
				return q
			})), i.d(t, "i", (function() {
				return H
			})), i.d(t, "E", (function() {
				return V
			})), i.d(t, "A", (function() {
				return W
			})), i.d(t, "G", (function() {
				return z
			})), i.d(t, "q", (function() {
				return K
			})), i.d(t, "J", (function() {
				return Q
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/lodash/values.js"),
				r = i.n(n),
				s = i("./src/lib/constants/index.ts"),
				o = i("./src/lib/makeCommentPermalink/index.ts"),
				d = i("./src/lib/objectSelector/index.ts"),
				l = i("./src/reddit/constants/comments.ts"),
				a = i("./src/reddit/models/Post/index.ts"),
				u = i("./src/reddit/selectors/posts.ts"),
				c = i("./src/reddit/selectors/subreddit.ts");
			const _ = (e, t) => {
					let {
						commentsPageKey: i
					} = t;
					return e.commentsPage.api.error[i]
				},
				m = (e, t) => {
					let {
						commentsPageKey: i
					} = t;
					return e.commentsPage.api.pending[i]
				},
				p = (e, t) => {
					let {
						commentsPageKey: i
					} = t;
					return e.commentsPage.api.fullyLoaded[i]
				},
				h = (e, t) => e.commentsPage.keyToHeadCommentId[t.commentsPageKey],
				f = (e, t) => {
					const i = h(e, t);
					if (i) return F(e, {
						commentId: i
					})
				},
				g = [],
				b = Object(d.a)((e, t) => {
					const i = f(e, t),
						n = i && i.id;
					if (!n) return g;
					const {
						commentsPageKey: r
					} = t, s = e.commentsPage.keyToCommentThreadLinkSets[r], o = [];
					let d = {
						id: n,
						type: l.a.Comment
					};
					do {
						o.push(d), d = s[d.id].next
					} while (d);
					return o
				}),
				w = (e, t) => h(e, t) ? e.commentsPage.keyToChatCommentLinks[t.commentsPageKey] : [],
				y = (e, t) => {
					let {
						commentsPageKey: i
					} = t;
					const n = e.commentsPage.keyToPostId[i];
					return n ? e.posts.models[n] : null
				},
				v = (e, t) => {
					let {
						commentId: i,
						commentLink: n,
						commentsPageKey: r
					} = t;
					const s = e.commentsPage.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : i ? s[i] : null : null
				},
				T = (e, t) => {
					let {
						commentsPageKey: i
					} = t;
					return e.commentsPage.keyToCommentThreadLinkSets[i]
				},
				S = (e, t) => {
					const i = t.commentsPageKey ? v(e, t) : null;
					return i ? i.depth : null
				},
				E = (e, t) => {
					let {
						commentLink: i
					} = t;
					const {
						id: n,
						type: r
					} = i;
					switch (r) {
						case l.a.Comment:
							return e.comments.models[n];
						case l.a.MoreComments:
							return e.moreComments.models[n];
						case l.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				F = (e, t) => {
					let {
						commentId: i
					} = t;
					return i ? e.comments.models[i] : void 0
				},
				I = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, i = Object(a.m)(t);
						return Array.from(new Set(Object.keys(e.comments.models).filter(t => e.comments.models[t].postId === i && e.comments.models[t].author !== s.z).map(t => e.comments.models[t].author)))
					}
					return []
				},
				O = (e, t) => {
					let {
						commentsPageKey: i
					} = t;
					return e.comments.collapsed[i]
				},
				j = e => e.moreComments.models,
				B = e => e.comments.models,
				x = (e, t) => {
					let {
						commentId: i
					} = t;
					const n = F(e, {
						commentId: i
					});
					return n ? Object(o.a)(Object(u.M)(e, n), i) : ""
				},
				R = (e, t) => {
					let {
						commentId: i
					} = t;
					return !!(i && e.comments.focused && e.comments.focused[i])
				},
				k = (e, t) => {
					let {
						commentId: i,
						commentsPageKey: n
					} = t;
					return !!(i && e.comments.isEditing[n] && e.comments.isEditing[n][i])
				},
				C = (e, t) => {
					let {
						commentId: i,
						commentsPageKey: n
					} = t;
					return !!(i && e.comments.replyFormOpen[n] && e.comments.replyFormOpen[n][i])
				},
				N = (e, t) => {
					let {
						commentsPageKey: i
					} = t;
					const n = i && e.comments.replyFormOpen[i] || {},
						r = Object.keys(n).find(e => n[e]),
						s = F(e, {
							commentId: r
						}),
						o = s && S(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: i
						});
					if (s && "number" == typeof o) return Object.assign({}, s, {
						depth: o
					})
				},
				P = (e, t) => {
					let {
						moreCommentsId: i
					} = t;
					return e.moreComments.models[i]
				},
				L = (e, t) => {
					let {
						moreCommentsId: i
					} = t;
					return !!e.moreComments.api.pending[i]
				},
				A = (e, t) => {
					let {
						commentsPageKey: i
					} = t;
					const n = e.commentsPage.keyToPostId[i];
					if (n) {
						const t = r()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				D = (e, t) => {
					let {
						id: i
					} = t;
					return e.continueThreads.models[i]
				},
				G = (e, t) => {
					let {
						commentId: i
					} = t;
					const n = i ? e.comments.models[i] : void 0;
					if (!n) return null;
					const r = e.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				M = (e, t) => {
					let {
						draftKey: i
					} = t;
					return !!e.comments.submit.error[i]
				},
				U = (e, t) => {
					let {
						draftKey: i
					} = t;
					const n = e.comments.submit.error[i];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				q = (e, t) => {
					let {
						draftKey: i
					} = t;
					const n = e.comments.drafts[i];
					return !!n && n.autofocusDisabled
				},
				H = (e, t) => {
					let {
						draftKey: i
					} = t;
					return e.comments.drafts[i]
				},
				V = (e, t) => {
					let {
						commentId: i
					} = t;
					const n = i ? e.comments.submit.error[i] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				W = (e, t) => {
					let {
						commentId: i
					} = t;
					return !!i && e.comments.submit.pending[i]
				},
				z = (e, t) => {
					let {
						commentId: i
					} = t;
					return !!i && e.comments.models[i].sendReplies
				},
				K = e => e.comments.visitHighlightFilter,
				Q = (e, t) => {
					const i = F(e, t);
					if (i) return Object(c.V)(e, i)
				}
		},
		"./src/reddit/selectors/experiments/bestSortPopular.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var n = i("./src/reddit/constants/experiments.ts"),
				r = i("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.k
			}) === n.l.Enabled
		},
		"./src/reddit/selectors/experiments/chatPost.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return a
			})), i.d(t, "b", (function() {
				return u
			})), i.d(t, "e", (function() {
				return m
			})), i.d(t, "d", (function() {
				return p
			})), i.d(t, "a", (function() {
				return h
			})), i.d(t, "g", (function() {
				return f
			})), i.d(t, "f", (function() {
				return g
			}));
			var n = i("./src/reddit/constants/experiments.ts"),
				r = i("./src/reddit/contexts/PageLayer/selectors.ts"),
				s = i("./src/reddit/helpers/chooseVariant/index.ts"),
				o = i("./src/reddit/models/Post/index.ts"),
				d = i("./src/reddit/selectors/moderatorPermissions.ts"),
				l = i("./src/reddit/selectors/posts.ts");
			const a = (e, t) => {
					const i = t && e.subreddits.models[t];
					return Boolean(i && i.isChatPostFeatureEnabled)
				},
				u = (e, t) => {
					const i = t && e.subreddits.models[t];
					return Boolean(i && i.allowChatPostCreation)
				},
				c = e => Object(s.c)(e, {
					experimentName: n.n,
					experimentEligibilitySelector: s.a
				}) === n.v.Holdout,
				_ = e => Object(s.c)(e, {
					experimentName: n.o,
					experimentEligibilitySelector: s.a
				}) === n.v.Rollout,
				m = (e, t) => {
					let {
						postId: i
					} = t;
					const n = !!i && Object(l.O)(e, {
						postId: i
					});
					return !!n && n.discussionType === o.b.Chat
				},
				p = (e, t) => {
					let {
						postId: i
					} = t;
					const n = m(e, {
							postId: i
						}),
						r = !!i && !!Object(d.i)(e, {
							postId: i
						}),
						s = _(e),
						o = !c(e) || r;
					return n && s && o
				},
				h = (e, t) => {
					const i = t.subredditId || Object(r.n)(e, t),
						n = a(e, i),
						s = u(e, i),
						o = !!i && Object(d.g)(e, {
							subredditId: i
						});
					return !!_(e) && (!!n && (!!o || !c(e) && s))
				},
				f = (e, t, i) => {
					if (t && _(e)) {
						if (i && c(e)) return;
						Object(s.d)(e, {
							experimentName: n.n
						})
					}
				},
				g = e => n.w.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.p
				})
		},
		"./src/reddit/selectors/experiments/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return d
			})), i.d(t, "b", (function() {
				return a
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "a", (function() {
				return c
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/env/index.ts"),
				r = i("./node_modules/reselect/es/index.js"),
				s = i("./src/reddit/constants/experiments.ts"),
				o = i("./src/reddit/selectors/user.ts");
			const d = Object(r.a)(e => e.page && e.user ? e.user.experiments.models.concat(e.page.experiments.models) : [], (e, t) => t.experimentName, (e, t) => e.find(e => {
					let {
						name: i
					} = e;
					return i.toLowerCase() === t.toLowerCase()
				})),
				l = (e, t) => Object(n.a)() || e && e.isEmployee || s.db.has(t.toLowerCase()),
				a = (e, t) => {
					let {
						experimentName: i
					} = t;
					const n = Object(o.i)(e);
					return l(n, i) && e.experimentOverrides ? e.experimentOverrides[i.toLowerCase()] : void 0
				},
				u = e => e.page.experiments.canonicalUrl,
				c = e => {
					const t = Object(o.i)(e);
					return e.user.experiments.models.concat(e.page.experiments.models, Object.keys(e.experimentOverrides).reduce((i, n) => (l(t, n) && i.push({
						id: 0,
						name: n,
						variant: e.experimentOverrides[n] || ""
					}), i), []))
				}
		},
		"./src/reddit/selectors/experiments/postSeo.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return f
			})), i.d(t, "l", (function() {
				return g
			})), i.d(t, "j", (function() {
				return b
			})), i.d(t, "k", (function() {
				return w
			})), i.d(t, "a", (function() {
				return y
			})), i.d(t, "g", (function() {
				return v
			})), i.d(t, "c", (function() {
				return T
			})), i.d(t, "d", (function() {
				return S
			})), i.d(t, "i", (function() {
				return E
			})), i.d(t, "h", (function() {
				return F
			})), i.d(t, "m", (function() {
				return I
			})), i.d(t, "b", (function() {
				return O
			})), i.d(t, "e", (function() {
				return j
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = i("./node_modules/reselect/es/index.js"),
				r = i("./src/reddit/constants/experiments.ts"),
				s = i("./src/reddit/contexts/PageLayer/index.tsx"),
				o = i("./src/reddit/helpers/chooseVariant/index.ts"),
				d = i("./src/reddit/models/Media/index.ts"),
				l = i("./src/reddit/models/Post/index.ts"),
				a = i("./src/reddit/selectors/meta.ts"),
				u = i("./src/server/helpers/seoMetadata.tsx");
			const c = e => e.page.experiments.canonicalUrl === Object(u.a)(e);
			var _ = i("./src/reddit/selectors/posts.ts"),
				m = i("./src/reddit/selectors/user.ts");
			const p = Object(n.a)(a.n, e => {
					return "reddit.com" !== e.split(".").splice(1).join(".")
				}),
				h = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (!i) return !1;
					if (!Object(s.w)(i) || Object(s.H)(i)) return !1;
					const {
						partialPostId: n
					} = !!i && i.urlParams;
					if (!n) return !1;
					const r = n && Object(l.m)(n),
						o = Object(_.O)(e, {
							postId: r
						});
					if (!o) return !1;
					const a = !!o.media && o.media.type === d.n.IMAGE,
						u = Object(s.q)(e, {
							pageLayer: i
						});
					if (!u) return !1;
					const m = u.communityIcon || u.icon.url;
					return a && !!m && c(e)
				},
				f = Object(n.a)(m.H, p, (e, t) => !e && t),
				g = e => {
					const t = p(e);
					return Object(o.c)(e, {
						experimentName: r.Ib,
						experimentEligibilitySelector: e => !Object(m.H)(e) && t
					})
				},
				b = e => {
					const t = p(e);
					return Object(o.c)(e, {
						experimentName: r.Fb,
						experimentEligibilitySelector: () => t
					})
				},
				w = e => {
					const t = p(e);
					return Object(o.c)(e, {
						experimentName: r.Hb,
						experimentEligibilitySelector: () => t
					})
				},
				y = e => e === r.Ob.IdCard,
				v = e => e === r.Ob.RailSwap,
				T = e => Object(o.b)(e, {
					experimentEligibilitySelector: c,
					experimentName: r.lb
				}) === r.ub.Metadata,
				S = e => Object(o.b)(e, {
					experimentEligibilitySelector: c,
					experimentName: r.nb
				}) === r.wb.SelfText,
				E = e => Object(o.b)(e, {
					experimentEligibilitySelector: c,
					experimentName: r.mb
				}),
				F = e => Object(o.b)(e, {
					experimentEligibilitySelector: c,
					experimentName: r.kb
				}),
				I = e => Object(o.b)(e, {
					experimentEligibilitySelector: c,
					experimentName: r.ob
				}),
				O = (e, t) => {
					const i = Object(o.b)(e, {
						experimentEligibilitySelector: e => h(e, t),
						experimentName: r.N
					});
					return i === r.T.PostImageAltText || i === r.T.All
				},
				j = (e, t) => {
					const i = Object(o.b)(e, {
						experimentEligibilitySelector: e => h(e, t),
						experimentName: r.N
					});
					return i === r.T.SubredditImageAltText || i === r.T.All
				}
		},
		"./src/reddit/selectors/frontpage.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/reddit/selectors/experiments/bestSortPopular.ts");
			const s = e => e.user && e.user.session && !e.user.session.unsafeLoggedOut || Object(r.a)(e) ? n.N.BEST : n.N.HOT
		},
		"./src/reddit/selectors/gold/powerups.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return r
			})), i.d(t, "f", (function() {
				return s
			})), i.d(t, "g", (function() {
				return o
			})), i.d(t, "h", (function() {
				return d
			})), i.d(t, "a", (function() {
				return l
			})), i.d(t, "j", (function() {
				return a
			})), i.d(t, "k", (function() {
				return u
			})), i.d(t, "i", (function() {
				return c
			})), i.d(t, "d", (function() {
				return _
			})), i.d(t, "c", (function() {
				return m
			})), i.d(t, "b", (function() {
				return p
			}));
			var n = i("./src/reddit/models/Gold/Powerups/index.ts");
			const r = (e, t) => {
					let {
						subredditId: i,
						benefit: n
					} = t;
					const r = o(e, {
						subredditId: i
					});
					if (!r) return !1;
					const {
						tier: s
					} = r, d = r.tiersInfo.find(e => e.tier === s);
					return !!d && d.benefits.includes(n)
				},
				s = (e, t) => {
					let {
						subredditId: i
					} = t;
					const r = o(e, {
						subredditId: i
					});
					if (!r) return !1;
					const s = !!r && r.tiersInfo.find(e => e.tier === r.tier),
						d = s ? s.benefits : void 0;
					return !!d && d.some(e => e === n.a.HdVideo || e === n.a.SdVideo || e === n.a.PostsImageUpload)
				},
				o = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.powerups[i]
				},
				d = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.powerupTopSupporters[i]
				},
				l = e => e.goldPurchase.powerupsPurchaseModal.purchaseCompleted,
				a = e => e.user.powerups.data,
				u = e => e.user.powerups.fetched,
				c = e => e.user.powerups.allocationByKey,
				_ = e => e.goldPurchase.powerupsPurchaseModal.powerupsCount,
				m = e => e.goldPurchase.powerupsPurchaseModal.isAnonymous,
				p = e => e.goldPurchase.powerupsPurchaseModal.freeReallocation.pending
		},
		"./src/reddit/selectors/listings.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return r
			})), i.d(t, "d", (function() {
				return s
			})), i.d(t, "g", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "a", (function() {
				return l
			})), i.d(t, "b", (function() {
				return a
			})), i.d(t, "h", (function() {
				return c
			})), i.d(t, "i", (function() {
				return _
			})), i.d(t, "f", (function() {
				return m
			})), i.d(t, "j", (function() {
				return p
			}));
			var n = i("./src/lib/objectSelector/index.ts");
			const r = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.listings.postOrder.api.error[i]
				},
				s = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.listings.postOrder.api.pending[i]
				},
				o = (e, t) => e.listings.postOrder.loadMore[t.listingKey],
				d = (e, t) => {
					let {
						listingKey: i,
						token: n
					} = t;
					return e.listings.postOrder.fetchedTokens[i][n]
				},
				l = e => e.listings.activeKey,
				a = Object(n.a)((e, t) => {
					let {
						postId: i
					} = t;
					const n = l(e);
					if (!n) return;
					const r = e.listings.postOrder.ids[n];
					if (!r) return;
					const s = e.posts.models,
						o = u({
							listings: r,
							posts: s,
							postId: i,
							dir: "next"
						}),
						d = u({
							listings: r,
							posts: s,
							postId: i,
							dir: "prev"
						}),
						a = e.posts.models[d];
					return {
						nextPost: e.posts.models[o],
						prevPost: a
					}
				}),
				u = e => {
					let {
						listings: t,
						posts: i,
						postId: n,
						dir: r
					} = e;
					const s = t.indexOf(n);
					if (s < 0) return null;
					let o, d = s;
					do {
						o = t[d += "prev" === r ? -1 : 1]
					} while (i[o] && i[o].isBlank);
					return o
				},
				c = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.listings.listingOrder.api.pending[i]
				},
				_ = (e, t) => {
					let {
						listingKey: i,
						token: n
					} = t;
					return e.listings.listingOrder.fetchedTokens[i][n]
				},
				m = (e, t) => {
					let {
						listingKey: i
					} = t;
					return !!e.listings.listingOrder.fetchedTokens[i]
				},
				p = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.listings.listingOrder.loadMore[i]
				}
		},
		"./src/reddit/selectors/media.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			}));
			const n = e => e.mediaPlayback.isMuted,
				r = e => e.mediaPlayback.volume
		},
		"./src/reddit/selectors/meta.ts": function(e, t, i) {
			"use strict";
			i.d(t, "l", (function() {
				return o
			})), i.d(t, "a", (function() {
				return d
			})), i.d(t, "b", (function() {
				return l
			})), i.d(t, "m", (function() {
				return a
			})), i.d(t, "c", (function() {
				return u
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "e", (function() {
				return _
			})), i.d(t, "i", (function() {
				return m
			})), i.d(t, "g", (function() {
				return p
			})), i.d(t, "h", (function() {
				return h
			})), i.d(t, "k", (function() {
				return f
			})), i.d(t, "n", (function() {
				return g
			})), i.d(t, "f", (function() {
				return b
			})), i.d(t, "j", (function() {
				return w
			}));
			var n = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/constants/euCookiePolicy.ts"),
				s = i("./src/lib/getParsedUserAgent/index.ts");
			const o = e => "".concat(e.meta.protocol, "://").concat(e.meta.domain),
				d = e => e.meta.city,
				l = e => e.meta.country,
				a = e => e.meta.region,
				u = e => e.meta.crawler,
				c = e => e.meta.isBot,
				_ = Object(n.a)(e => e.meta.userAgent, e => Object(s.b)(e)),
				m = Object(n.a)(e => e.meta.userAgent, e => Object(s.f)(e)),
				p = Object(n.a)(e => e.meta.userAgent, e => Object(s.d)(e)),
				h = Object(n.a)(e => e.meta.userAgent, s.e),
				f = Object(n.a)(e => e.meta.userAgent, s.g),
				g = e => e.meta && e.meta.sessionReferrerDomain,
				b = e => e.meta.country && r.a.includes(e.meta.country) || !1,
				w = e => e.meta.isSessionSeo
		},
		"./src/reddit/selectors/moderatorPermissions.ts": function(e, t, i) {
			"use strict";
			i.d(t, "h", (function() {
				return a
			})), i.d(t, "i", (function() {
				return u
			})), i.d(t, "j", (function() {
				return c
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "k", (function() {
				return m
			})), i.d(t, "d", (function() {
				return h
			})), i.d(t, "f", (function() {
				return f
			})), i.d(t, "e", (function() {
				return g
			})), i.d(t, "c", (function() {
				return b
			})), i.d(t, "g", (function() {
				return w
			})), i.d(t, "b", (function() {
				return y
			}));
			var n = i("./node_modules/lodash/values.js"),
				r = i.n(n),
				s = i("./src/lib/objectSelector/index.ts"),
				o = i("./src/reddit/models/ModeratingSubreddits/index.ts"),
				d = i("./src/reddit/selectors/posts.ts");
			const l = e => !!(e.user && e.user.account && e.user.account.isAdmin),
				a = e => !!(e.user && e.user.account && e.user.account.isMod) || l(e),
				u = (e, t) => {
					if (l(e)) return o.b;
					const i = Object(d.O)(e, t);
					if (!i) return null;
					const n = i.belongsTo.id;
					return e.moderatingSubreddits[n]
				},
				c = (e, t) => l(e) ? o.b : e.moderatingSubreddits[t.subredditId],
				_ = e => (t, i) => {
					if (l(t)) return !0;
					const n = c(t, i);
					return !(!n || !n[e])
				},
				m = Object(s.a)((e => t => {
					const i = l(t),
						n = [];
					for (const r in t.moderatingSubreddits) {
						const s = t.moderatingSubreddits[r];
						(i || s && s[e]) && (t.subreddits.models[r] ? n.push(t.subreddits.models[r]) : t.profiles.models[r] && n.push(t.profiles.models[r]))
					}
					return n
				})(o.c.posts)),
				p = e => t => {
					if (l(t)) return !0;
					for (const i in t.moderatingSubreddits) {
						const n = t.moderatingSubreddits[i];
						if (n && n[e]) return !0
					}
					return !1
				},
				h = _(o.c.flair),
				f = _(o.c.wiki),
				g = _(o.c.posts),
				b = (p(o.c.flair), p(o.c.posts)),
				w = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.moderatingSubreddits[i];
					return l(e) || !(!n || !r()(n).some(e => e))
				},
				y = (e, t) => {
					let {
						postId: i
					} = t;
					const n = u(e, {
						postId: i
					});
					return !!n && n.posts
				}
		},
		"./src/reddit/selectors/multireddit.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return h
			})), i.d(t, "h", (function() {
				return f
			})), i.d(t, "i", (function() {
				return g
			})), i.d(t, "d", (function() {
				return b
			})), i.d(t, "j", (function() {
				return w
			})), i.d(t, "g", (function() {
				return y
			})), i.d(t, "f", (function() {
				return v
			})), i.d(t, "e", (function() {
				return T
			})), i.d(t, "b", (function() {
				return S
			})), i.d(t, "c", (function() {
				return E
			})), i.d(t, "k", (function() {
				return F
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/sortBy.js"),
				s = i.n(r),
				o = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/objectSelector/index.ts"),
				l = i("./src/reddit/models/Multireddit/index.ts"),
				a = i("./src/reddit/models/User/index.ts"),
				u = i("./src/reddit/models/Widgets/index.ts"),
				c = i("./src/reddit/selectors/profile.ts"),
				_ = i("./src/reddit/selectors/subreddit.ts"),
				m = i("./src/reddit/selectors/user.ts");
			const p = [],
				h = Object(d.a)((e, t) => {
					let {
						listingName: i
					} = t;
					const r = (e => e.replace(/\++/g, "+").replace(/^\+/, "").replace(/\+$/, ""))(i.toLowerCase()).split("+"),
						s = r.filter(e => !e.startsWith(o.Sb)).map(t => Object(_.E)(e, t)).filter(e => void 0 !== e),
						d = r.filter(e => e.startsWith(o.Sb)).map(t => Object(c.m)(e, t.slice(2))).filter(e => void 0 !== e),
						l = [...s.map(t => e.subreddits.models[t].name), ...d.map(t => e.profiles.models[t].name)].join(", ");
					return {
						displayText: "".concat(n.fbt._("Posts from {subredditNames}", [n.fbt._param("subredditNames", l)], {
							hk: "1YeYEE"
						})),
						profileIds: d,
						subredditIds: s
					}
				}),
				f = e => e.multireddits.api.forUser.fetched,
				g = e => e.multireddits.api.forUser.pending,
				b = (e, t) => {
					let {
						multiredditName: i,
						username: n
					} = t;
					if (!n) {
						if (!e.user.account) return null;
						const {
							displayText: t
						} = e.user.account;
						n = t
					}
					const r = Object(l.h)(n, i);
					return e.multireddits.models[r]
				},
				w = Object(d.a)(e => {
					const {
						account: t
					} = e.user;
					if (!t) return p;
					const {
						id: i
					} = t, n = e.multireddits.byUserId[i];
					return n ? n.map(t => e.multireddits.models[t]) : p
				}),
				y = (e, t) => {
					let {
						multiredditName: i,
						username: n
					} = t;
					if (n) {
						const t = b(e, {
							multiredditName: i,
							username: n
						});
						return t ? "/user/".concat(n, "/m/").concat(t.name) : ""
					}
					const {
						account: r
					} = e.user;
					if (!r) return "";
					const s = b(e, {
						multiredditName: i
					});
					return s ? "/me/m/".concat(s.name) : ""
				},
				v = (e, t) => {
					let {
						multiredditName: i,
						username: r
					} = t;
					if (!r) {
						const {
							account: t
						} = e.user;
						if (!t) return "";
						r = Object(a.e)(t)
					}
					const s = Object(l.h)(r, i),
						o = e.multireddits.models[s];
					return o ? "".concat(n.fbt._("{displayText} subreddits curated by {userpath}", [n.fbt._param("displayText", o.displayText), n.fbt._param("userpath", "u/" + r)], {
						hk: "38iTbH"
					})) : ""
				},
				T = (e, t) => e.multireddits.models[t],
				S = Object(d.a)((e, t) => {
					let {
						subredditIds: i,
						profileIds: n
					} = t;
					const r = [];
					let o = [...i && i.reduce((t, i) => {
						const n = Object(_.Q)(e, {
							subredditId: i
						});
						return n ? [...t, n] : (r.push(i), t)
					}, []) || [], ...n && n.map(t => Object(c.p)(e, {
						profileId: t
					})) || []].filter(e => !!e).map(t => {
						const i = Object(u.j)(t);
						return i.isSubscribed = Object(_.bb)(e, {
							identifier: {
								type: i.type,
								name: i.name
							}
						}), i
					});
					if (r) {
						const t = r.map(t => e.subreddits.communityInfo[t]).filter(e => !!e);
						o.push(...t), o = s()(o, e => e.name.toLowerCase())
					}
					return o
				}),
				E = (e, t) => {
					const i = Object(m.i)(e),
						n = Object(l.i)(t);
					return !!i && (i.displayText || "").toLowerCase() === n.toLowerCase()
				},
				F = Object(d.a)((e, t) => {
					let {
						multireddit: i
					} = t;
					return Object(l.f)(i) && e.multireddits.recommendations[i.url] && e.multireddits.recommendations[i.url].length ? e.multireddits.recommendations[i.url].map(t => Object(u.i)(e.subreddits.models[t])) : []
				})
		},
		"./src/reddit/selectors/platform.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return o
			})), i.d(t, "l", (function() {
				return d
			})), i.d(t, "q", (function() {
				return l
			})), i.d(t, "j", (function() {
				return a
			})), i.d(t, "o", (function() {
				return u
			})), i.d(t, "h", (function() {
				return c
			})), i.d(t, "g", (function() {
				return _
			})), i.d(t, "i", (function() {
				return m
			})), i.d(t, "k", (function() {
				return p
			})), i.d(t, "c", (function() {
				return h
			})), i.d(t, "p", (function() {
				return f
			})), i.d(t, "d", (function() {
				return g
			})), i.d(t, "e", (function() {
				return b
			})), i.d(t, "f", (function() {
				return w
			})), i.d(t, "m", (function() {
				return y
			})), i.d(t, "a", (function() {
				return v
			})), i.d(t, "r", (function() {
				return T
			})), i.d(t, "n", (function() {
				return S
			}));
			i("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/reddit/models/Post/index.ts"),
				s = (i("./src/reddit/selectors/multireddit.ts"), i("./src/reddit/selectors/subreddit.ts"));
			const o = e => e.platform.currentPage,
				d = e => e.platform.lastPage,
				l = e => {
					if (!e.platform.currentPage || !e.platform.currentPage.routeMatch) return null;
					const {
						route: t
					} = e.platform.currentPage.routeMatch;
					return t.meta.name
				},
				a = e => e.platform.currentPage && e.platform.currentPage.routeMatch && [n.p.FRONTPAGE, n.p.MULTIREDDIT, n.p.SUBREDDIT].includes(e.platform.currentPage.routeMatch.route.chunk),
				u = e => !!(e.platform.lastPage && e.platform.lastPage.locationState && e.platform.lastPage.locationState.isOverlay),
				c = e => !!(e.platform && e.platform.currentPage && e.platform.currentPage.locationState && e.platform.currentPage.locationState.isOverlay),
				_ = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.zb.COMMENTS && e.platform.currentPage.meta.name !== n.zb.DUPLICATES),
				m = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.zb.POST_CREATION),
				p = e => !!(e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === n.zb.COMMENTS && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.routePrefix && "user" === e.platform.currentPage.urlParams.routePrefix),
				h = e => e.platform && e.platform.currentPage && e.platform.currentPage.status,
				f = e => e.platform && e.platform.currentPage && e.platform.currentPage.queryParams,
				g = e => {
					const t = b(e);
					return t ? Object(s.E)(e, t) : null
				},
				b = e => {
					const t = e.platform.currentPage && e.platform.currentPage.urlParams;
					return t ? t.subredditName : null
				},
				w = e => {
					const t = b(e);
					return t ? Object(s.z)(e, {
						subredditName: t
					}) : null
				},
				y = (e, t) => {
					let {
						page: i
					} = t;
					const n = i && i.routeMatch;
					if (!n) return;
					const {
						partialPostId: s
					} = n.match.params;
					return e.posts.models[Object(r.m)(s)]
				},
				v = e => e.platform.allowNavigationCallback,
				T = e => e.platform.currentPage ? e.platform.currentPage.url : "",
				S = e => {
					const t = e.platform.currentPage;
					if (t && t.routeMatch) {
						const {
							params: e
						} = t.routeMatch.match;
						if (e && e.partialPostId) return Object(r.m)(e.partialPostId)
					}
					return ""
				}
		},
		"./src/reddit/selectors/postCollection.ts": function(e, t, i) {
			"use strict";
			i.d(t, "j", (function() {
				return b
			})), i.d(t, "d", (function() {
				return w
			})), i.d(t, "s", (function() {
				return y
			})), i.d(t, "t", (function() {
				return v
			})), i.d(t, "r", (function() {
				return T
			})), i.d(t, "o", (function() {
				return S
			})), i.d(t, "l", (function() {
				return E
			})), i.d(t, "q", (function() {
				return F
			})), i.d(t, "p", (function() {
				return I
			})), i.d(t, "n", (function() {
				return j
			})), i.d(t, "w", (function() {
				return B
			})), i.d(t, "v", (function() {
				return x
			})), i.d(t, "h", (function() {
				return R
			})), i.d(t, "c", (function() {
				return k
			})), i.d(t, "m", (function() {
				return C
			})), i.d(t, "i", (function() {
				return N
			})), i.d(t, "k", (function() {
				return P
			})), i.d(t, "f", (function() {
				return L
			})), i.d(t, "b", (function() {
				return A
			})), i.d(t, "a", (function() {
				return D
			})), i.d(t, "u", (function() {
				return G
			})), i.d(t, "g", (function() {
				return M
			})), i.d(t, "e", (function() {
				return U
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/eventTools/index.ts"),
				s = i("./src/reddit/constants/postCollection.ts"),
				o = i("./src/reddit/featureFlags/profileCollections.ts"),
				d = i("./src/reddit/helpers/media/index.ts"),
				l = i("./src/reddit/models/Media/index.ts"),
				a = i("./src/reddit/models/PostCollection/index.ts"),
				u = i("./src/reddit/models/Subreddit/index.ts"),
				c = i("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = i("./src/reddit/selectors/posts.ts"),
				m = i("./src/reddit/selectors/structuredStyles.ts"),
				p = i("./src/reddit/selectors/subreddit.ts"),
				h = i("./src/reddit/selectors/user.ts"),
				f = i("./src/reddit/selectors/profile.ts");
			const g = [],
				b = (e, t) => {
					let {
						postId: i
					} = t;
					const n = Object(_.O)(e, {
						postId: i
					});
					let s = !1;
					if (n && n.eventInfo) {
						const {
							eventStart: e,
							eventEnd: t,
							eventIsLive: i
						} = n.eventInfo;
						if (!i) {
							s = Object(r.e)(e, t) === r.a.Future
						}
					}
					return s
				},
				w = (e, t) => {
					let {
						collectionId: i
					} = t;
					const n = T(e, {
						collectionId: i
					});
					if (!n || !n.id) return "";
					const r = Object(p.c)(e, n.subredditId);
					return r && i ? "".concat(r, "submit?collection=").concat(i) : ""
				},
				y = (e, t, i) => {
					if (i && !Object(o.a)(e)) return !1;
					if (!(i ? Object(h.L)(e, t) : Object(c.g)(e, {
							subredditId: Object(p.E)(e, t)
						}))) return !1;
					const n = i ? Object(p.p)(e, t) : Object(p.w)(e, {
						subredditName: t
					});
					return !(!n || !n.collectionsEnabled)
				},
				v = (e, t) => {
					let {
						collectionId: i
					} = t;
					const n = T(e, {
						collectionId: i
					});
					if (!n) return !1;
					const r = Object(p.Q)(e, {
						subredditId: n.subredditId
					}) || Object(f.p)(e, {
						profileId: n.subredditId
					});
					return y(e, r.name, r.type === u.d.User)
				},
				T = (e, t) => {
					let {
						collectionId: i
					} = t;
					return e.postCollection.models[i]
				},
				S = (e, t) => {
					let {
						postId: i
					} = t;
					const n = e.posts.models[i],
						{
							collectionIds: r
						} = n,
						s = r ? r[0] : null;
					return s && e.postCollection.models[s] || null
				},
				E = (e, t) => {
					let {
						postId: i
					} = t;
					const n = e.posts.models[i],
						{
							collectionIds: r
						} = n;
					return !!(r ? r[0] : null)
				},
				F = (e, t) => {
					let {
						collectionId: i
					} = t;
					const n = T(e, {
						collectionId: i
					});
					return n ? n.primaryPostId : null
				},
				I = (e, t) => {
					let {
						collectionId: i
					} = t;
					const n = T(e, {
						collectionId: i
					});
					if (!n) return null;
					const r = n.postIds || [];
					return Object(_.S)(e, {
						postIds: r
					})
				},
				O = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.postCollection.subredditToIds[i]
				},
				j = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = O(e, {
						subredditId: i
					});
					return !(!n || !n.length)
				},
				B = Object(n.a)(O, e => e.postCollection.models, (e, t) => e ? e.map(e => t[e]).filter(Boolean) : g),
				x = (e, t) => {
					const i = O(e, t);
					return i ? i.length : 0
				},
				R = e => e.creations.api.collection.createOrUpdate.pending,
				k = e => e.creations.api.collection.createOrUpdate.error,
				C = e => e.postCollection.api.pending.reorderPending,
				N = e => e.postCollection.api.pending.updateDescriptionPending,
				P = e => e.postCollection.api.pending.updateLayoutPending,
				L = e => e && e.displayLayout || a.a.TIMELINE,
				A = (e, t) => {
					let {
						collectionId: i
					} = t;
					return L(e.postCollection.models[i])
				},
				D = (e, t) => {
					let {
						postId: i
					} = t;
					return L(S(e, {
						postId: i
					}))
				},
				G = (e, t) => {
					let {
						collectionId: i
					} = t;
					return !(!((e, t) => {
						let {
							collectionId: i
						} = t;
						const n = T(e, {
							collectionId: i
						});
						if (!n || !n.id) return;
						const r = n.subredditId,
							s = Object(m.l)(e, {
								subredditId: r
							});
						return s && !!s.postPlaceholderImage
					})(e, {
						collectionId: i
					}) && !((e, t) => {
						let {
							collectionId: i
						} = t;
						const n = I(e, {
							collectionId: i
						});
						if (!n || !Object.keys(n).length) return;
						let r = 0;
						for (const s in n) {
							const e = n[s];
							e && e.thumbnail.width && e.thumbnail.height && (r += 1)
						}
						return r >= Object.keys(n).length - r
					})(e, {
						collectionId: i
					}))
				},
				M = e => {
					if (!e || e.type === l.n.RTJSON || e.type === l.n.TEXT || e.type === l.n.LIVEVIDEO) return null;
					const t = e.obfuscated;
					return t ? {
						url: t,
						width: e.width,
						height: e.height
					} : null
				},
				U = (e, t) => {
					let {
						postId: i
					} = t;
					const n = Object(_.O)(e, {
						postId: i
					});
					let r = null;
					return n && (n.media && n.media.type !== l.n.GIFVIDEO && (r = Object(d.e)(n, 2 * s.b, 2 * s.a) || Object(d.e)(n, s.b, s.a)), !r && n.thumbnail && n.thumbnail.width && n.thumbnail.height && (r = n.thumbnail, (n.isNSFW || n.isSpoiler) && (r = M(n.media)))), r
				}
		},
		"./src/reddit/selectors/postCreations.ts": function(e, t, i) {
			"use strict";
			i.d(t, "r", (function() {
				return x
			})), i.d(t, "s", (function() {
				return R
			})), i.d(t, "G", (function() {
				return k
			})), i.d(t, "n", (function() {
				return P
			})), i.d(t, "B", (function() {
				return L
			})), i.d(t, "Q", (function() {
				return A
			})), i.d(t, "cb", (function() {
				return D
			})), i.d(t, "L", (function() {
				return G
			})), i.d(t, "N", (function() {
				return M
			})), i.d(t, "g", (function() {
				return U
			})), i.d(t, "f", (function() {
				return q
			})), i.d(t, "ab", (function() {
				return H
			})), i.d(t, "d", (function() {
				return V
			})), i.d(t, "a", (function() {
				return W
			})), i.d(t, "C", (function() {
				return z
			})), i.d(t, "P", (function() {
				return K
			})), i.d(t, "j", (function() {
				return Q
			})), i.d(t, "h", (function() {
				return J
			})), i.d(t, "i", (function() {
				return Y
			})), i.d(t, "k", (function() {
				return X
			})), i.d(t, "l", (function() {
				return Z
			})), i.d(t, "A", (function() {
				return $
			})), i.d(t, "D", (function() {
				return ee
			})), i.d(t, "H", (function() {
				return te
			})), i.d(t, "E", (function() {
				return ie
			})), i.d(t, "o", (function() {
				return ne
			})), i.d(t, "S", (function() {
				return re
			})), i.d(t, "Y", (function() {
				return se
			})), i.d(t, "q", (function() {
				return oe
			})), i.d(t, "m", (function() {
				return de
			})), i.d(t, "eb", (function() {
				return le
			})), i.d(t, "W", (function() {
				return ae
			})), i.d(t, "F", (function() {
				return ue
			})), i.d(t, "z", (function() {
				return ce
			})), i.d(t, "bb", (function() {
				return _e
			})), i.d(t, "db", (function() {
				return me
			})), i.d(t, "X", (function() {
				return pe
			})), i.d(t, "I", (function() {
				return he
			})), i.d(t, "J", (function() {
				return fe
			})), i.d(t, "K", (function() {
				return ge
			})), i.d(t, "V", (function() {
				return be
			})), i.d(t, "O", (function() {
				return we
			})), i.d(t, "y", (function() {
				return ye
			})), i.d(t, "x", (function() {
				return ve
			})), i.d(t, "u", (function() {
				return Te
			})), i.d(t, "v", (function() {
				return Se
			})), i.d(t, "t", (function() {
				return Ee
			})), i.d(t, "w", (function() {
				return Fe
			})), i.d(t, "M", (function() {
				return Ie
			})), i.d(t, "p", (function() {
				return Oe
			})), i.d(t, "b", (function() {
				return je
			})), i.d(t, "T", (function() {
				return Be
			})), i.d(t, "Z", (function() {
				return xe
			})), i.d(t, "e", (function() {
				return Re
			})), i.d(t, "R", (function() {
				return ke
			})), i.d(t, "U", (function() {
				return Ce
			})), i.d(t, "c", (function() {
				return Ne
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/reselect/es/index.js"),
				s = i("./src/lib/constants/index.ts"),
				o = i("./src/lib/makePostCreationPageKey/index.ts"),
				d = i("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				l = i("./src/reddit/constants/posts.ts"),
				a = i("./src/reddit/contexts/PageLayer/index.tsx"),
				u = i("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = i("./src/reddit/featureFlags/index.ts"),
				_ = i("./src/reddit/featureFlags/profileCollections.ts"),
				m = i("./src/reddit/helpers/getSubredditUrl/index.ts"),
				p = i("./src/reddit/helpers/media/index.ts"),
				h = i("./src/reddit/helpers/name/index.ts"),
				f = i("./src/reddit/helpers/path/index.ts"),
				g = i("./src/reddit/models/PostCreationForm/index.ts"),
				b = i("./src/reddit/models/PostRequirements/index.ts"),
				w = i("./src/reddit/models/Subreddit/index.ts"),
				y = i("./src/reddit/models/Upload/index.ts"),
				v = i("./src/reddit/routes/postCreation/constants.ts"),
				T = i("./src/reddit/selectors/gold/powerups.ts"),
				S = i("./src/reddit/selectors/platform.ts"),
				E = i("./src/reddit/selectors/postFlair.ts"),
				F = i("./src/reddit/selectors/postRequirements.ts"),
				I = i("./src/reddit/selectors/posts.ts"),
				O = (i("./src/reddit/selectors/runTimeEnvVars.ts"), i("./src/reddit/selectors/subreddit.ts")),
				j = i("./src/reddit/selectors/subredditAutocomplete.ts"),
				B = i("./src/reddit/selectors/user.ts");
			const x = e => {
					const {
						api: t
					} = e.creations, {
						apiError: i,
						pollError: n,
						validationError: r
					} = t.post.submit.error;
					return !!(i || r || t.editor.mediaUpload.error || n)
				},
				R = e => {
					const {
						submitValidationError: t
					} = e.creations.api.post.submit.error;
					return !!t
				},
				k = e => null !== e.creations.formData.postSchedule,
				C = e => (e && e.fields || []).map(e => e.msg),
				N = e => e && "extra" in e ? Object.keys(e.extra).map(t => e.extra[t]) : [],
				P = Object(r.a)(e => e.creations.api.post.submit.error, e => e.creations.api.editor.mediaUpload.error, (e, t) => {
					const {
						apiError: i,
						validationError: n,
						pollError: r
					} = e;
					return [...C(i), ...C(n), ...C(t), ...N(r)]
				}),
				L = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (!i || !Object(a.D)(i)) return !1;
					const {
						subredditName: n,
						profileName: r
					} = i.urlParams, s = Object(o.a)({
						subredditName: n,
						profileName: r
					});
					return !!e.creations.api.page.pending[s]
				},
				A = e => D(e) || G(e),
				D = e => e.creations.api.post.submit.pending,
				G = e => e.creations.api.editor.mediaUpload.pending,
				M = e => e.creations.api.post.submit.error.needsCaptcha,
				U = Object(r.a)(B.i, S.f, e => {
					const t = Object(S.e)(e);
					if (t) {
						const i = Object(j.d)(e, {
							substring: t
						});
						if (i) return i.subreddits.find(e => Object(h.a)(e.name, t))
					}
				}, e => {
					const t = Object(S.f)(e);
					return t && Object(O.y)(e, {
						subredditName: t.name
					})
				}, e => e.platform.currentPage, (e, t, i, n, r) => {
					const {
						profileName: s = "",
						subredditName: o = ""
					} = r && r.urlParams || {};
					if (s) return {
						isProfile: !0,
						name: e && e.username || Object(h.f)(s),
						id: e && e.id || void 0
					}; {
						const {
							name: e = Object(h.f)(o),
							id: r = ""
						} = t || i || {};
						return {
							isProfile: !1,
							allowedPostTypes: n,
							id: r || void 0,
							name: e
						}
					}
				}),
				q = e => {
					const t = U(e);
					return t.name ? t.isProfile ? Object(_.a)(e) ? Object(O.p)(e, t.name) : null : Object(O.w)(e, {
						subredditName: t.name
					}) : null
				},
				H = e => e.creations.formData.submissionType,
				V = e => {
					const t = U(e),
						i = Object(S.f)(e),
						n = H(e),
						r = !!i && Object(T.f)(e, {
							subredditId: i.id
						}),
						o = !!i && i.isNSFW;
					if (n === s.Hb.MEDIA && o && !r) return !1;
					if (t.isProfile) return Object(B.L)(e, t.name);
					if (!t.id) return !1;
					const d = e.moderatingSubreddits[t.id];
					return !!d && (e => Object.keys(e).some(t => !0 === e[t]))(d)
				},
				W = Object(r.a)(H, S.f, U, V, e => {
					const t = Object(S.d)(e);
					return !!t && Object(T.f)(e, {
						subredditId: t
					})
				}, (e, t, i, n, r) => {
					if (e === s.Hb.POLL) return e;
					const {
						allowedPostTypes: o
					} = i, d = !!t && t.isNSFW;
					if (n && (!d || e !== s.Hb.MEDIA || r) || !o) return e;
					const l = [o.text && s.Hb.POST, (o.images || o.videos) && (!d || r) && s.Hb.MEDIA, o.links && s.Hb.LINK_ONLY, s.Hb.CROSSPOST].filter(Boolean);
					return l.indexOf(e) >= 0 ? e : l[0]
				}),
				z = (e, t) => {
					let {
						postId: i
					} = t;
					return e.creations.postEditing.postId === i
				},
				K = e => e.creations.api.post.update.pending,
				Q = e => !!e.creations.api.post.update.error,
				J = e => e.creations.formState.editorMode || g.h.RICH_TEXT,
				Y = Object(r.a)(e => e.creations.api.post.update.error, e => C(e)),
				X = e => e.creations.postEditing.draft.markdown,
				Z = e => e.creations.postEditing.draft.rte,
				$ = e => e.creations.formData.isChatPost,
				ee = e => e.creations.formData.isNSFW,
				te = e => e.creations.formData.isSpoiler,
				ie = e => {
					const {
						isOC: t
					} = e.creations.formData, i = q(e);
					if (i) {
						if (!Object(w.e)(i)) return !1;
						if (i.allOriginalContent) return !0
					}
					return t
				},
				ne = e => e.creations.formData.eventSchedule || void 0,
				re = e => e.creations.formData.postSchedule || void 0,
				se = e => c.d.scheduledPosts(e),
				oe = Object(r.a)(e => e.creations.formData.flair, e => {
					const t = Object(S.d)(e);
					return t ? Object(E.d)(e, {
						subredditId: t
					}) : null
				}, (e, t) => e && e.templateId && t && t.templateIds.includes(e.templateId) ? e : null),
				de = e => e.creations.formState.editorMode || e.user.prefs.editorMode,
				le = e => e.creations.formData.title,
				ae = e => e.creations.formData.sendReplies,
				ue = e => e.creations.formData.isPublicLink,
				ce = e => e.creations.formState.isChanged,
				_e = e => e.creations.formState.submitMode,
				me = e => {
					const {
						name: t
					} = U(e);
					return Object(F.b)(e, {
						subredditName: t
					})
				},
				pe = Object(r.a)(V, me, (e, t) => e || !t || t.bodyRestrictionPolicy !== b.a.NotAllowed),
				he = e => e.creations.formData.body.link,
				fe = e => e.creations.formData.body.markdown,
				ge = Object(r.a)(e => e.creations.formData.body.media, e => e.uploads[g.m], U, (e, t, i) => {
					if (!t) return;
					const r = Object(p.f)(t.metadata.mimetype),
						{
							allowedPostTypes: s
						} = i;
					let o, {
						isMakeGif: d = !1
					} = e && e.video || {};
					if (s) {
						const e = i.name;
						s.images ? s.videos || (o = "".concat(n.fbt._("Video auto converted to GIF because {subredditName} is an image only subreddit", [n.fbt._param("subredditName", "r/".concat(e))], {
							hk: "4g01YI"
						})), d = !0) : (o = "".concat(n.fbt._("Video cannot be converted to GIF because {subredditName} is a video only subreddit", [n.fbt._param("subredditName", "r/".concat(e))], {
							hk: "2RVHSt"
						})), d = !1)
					}
					return {
						file: t.file,
						status: t.status,
						url: t.url,
						mediaType: r || void 0,
						video: "video" === r ? Object.assign({
							thumbnail: {
								time: 0,
								url: t.metadata.videoFirstFrameUrl
							}
						}, e && e.video || {}, {
							duration: t.metadata.videoDuration || 0,
							isMakeGif: d,
							makeGifDisableReason: o
						}) : void 0
					}
				}),
				be = e => e.creations.formData.body.rte,
				we = e => e.creations.formData.nextSubreddit,
				ye = e => {
					return !!le(e).trim()
				},
				ve = e => {
					const t = be(e);
					return d.a.hasContent(t)
				},
				Te = e => {
					return !!fe(e).trim()
				},
				Se = e => {
					const t = ge(e);
					return !!t && !!t.file && t.status !== y.a.FAILED
				},
				Ee = e => {
					return !!he(e).trim()
				},
				Fe = e => ye(e) || ve(e) || Te(e) || Se(e) || Ee(e),
				Ie = e => e.creations.formState.modalId || e.activeModalId,
				Oe = (e, t) => {
					let {
						field: i
					} = t;
					switch (i) {
						case s.lb.TITLE:
							return {
								title: le(e)
							};
						case s.lb.BODY:
							if (de(e) === g.h.RICH_TEXT) {
								const t = be(e);
								return {
									rtjson: d.a.toRichTextJSON(t, e.uploads).document
								}
							}
							return {
								selftext: fe(e).trim()
							};
						case s.lb.LINK: {
							const t = he(e);
							if (!t) return;
							return {
								url: t
							}
						}
						case s.lb.FLAIR: {
							const t = oe(e);
							return {
								flairId: t ? t.templateId : void 0
							}
						}
						default:
							return
					}
				},
				je = (e, t) => {
					const i = U(e),
						n = oe(e),
						r = $(e),
						s = ee(e),
						o = ie(e),
						d = te(e),
						l = ae(e),
						a = le(e),
						u = ue(e);
					return {
						collectionId: e.platform.currentPage.queryParams.collection,
						destSubreddit: i,
						draftId: t,
						flair: n,
						isChatPost: r,
						isNSFW: s,
						isOC: o,
						isSpoiler: d,
						sendReplies: l,
						title: a,
						isPublicLink: u
					}
				},
				Be = (e, t) => {
					const i = je(e, t.draftId);
					if (!i || !i.destSubreddit.name) return;
					const n = (e => e.creations.formData.recaptcha)(e),
						r = Ce(e, t),
						o = ne(e),
						l = Object.assign({}, i, {
							eventSchedule: o,
							gRecaptchaResponse: n,
							postToTwitter: r,
							validate_on_submit: !0
						}),
						a = de(e),
						u = he(e),
						c = fe(e),
						_ = ge(e),
						m = be(e),
						p = pe(e),
						h = W(e),
						{
							uploads: f
						} = e,
						{
							sourcePostId: b
						} = t;
					if (h === s.Hb.LINK_ONLY && u) return Object.assign({}, l, {
						url: u,
						kind: g.p.LINK
					});
					if (h === s.Hb.MEDIA && _) {
						const {
							mediaType: e = "image",
							video: t
						} = _, i = f[g.n], n = "video" === e ? i.url : null;
						return Object.assign({}, l, {
							mediaType: e,
							videoThumbnailUrl: n,
							kind: g.p.MEDIA,
							url: _.url || "",
							makeGif: !!t && t.isMakeGif
						})
					}
					if ((h === s.Hb.POST || h === s.Hb.POLL) && a === g.h.MARKDOWN) return Object.assign({}, l, {
						kind: g.p.MARKDOWN,
						markdown: p ? c : ""
					});
					if ((h === s.Hb.POST || h === s.Hb.POLL) && a === g.h.RICH_TEXT) {
						const e = p && d.a.hasContent(m) ? d.a.toRichTextJSON(m, f).document : [];
						return Object.assign({}, l, {
							kind: g.p.RICH_TEXT,
							document: e
						})
					}
					return h === s.Hb.CROSSPOST && b ? Object.assign({}, l, {
						kind: g.p.CROSSPOST,
						sourcePostId: b
					}) : void 0
				},
				xe = (e, t) => {
					let {
						sourcePostId: i
					} = t;
					return i ? Object(I.f)(e, {
						postId: i
					}) : void 0
				},
				Re = e => {
					const t = ge(e);
					switch (W(e)) {
						case s.Hb.LINK_ONLY:
							return "link";
						case s.Hb.MEDIA:
							return t && "image" !== t.mediaType && t.video ? t.video.isMakeGif ? "videogif" : "video" : "image";
						default:
							return "self"
					}
				},
				ke = (e, t) => {
					let {
						pageLayer: i
					} = t;
					if (!i) return v.b;
					const n = Object(a.q)(e, {
						pageLayer: i
					});
					if (n) return Object(f.a)(Object(m.a)(n), v.b);
					const r = Object(a.j)(e, {
						pageLayer: i
					});
					return r && Object(a.B)(e, {
						pageLayer: i
					}) && Object(B.f)(e) ? Object(f.a)(r.url, v.b) : v.b
				},
				Ce = (e, t) => {
					const i = Object(u.p)(e, t);
					return (!i || !i.isQuarantined) && e.creations.formData.postToTwitter
				},
				Ne = e => {
					const t = U(e);
					if (!t.id || t.isProfile) return !1;
					const i = {
						id: t.id,
						type: l.a.SUBREDDIT
					};
					return Object(E.b)(e, i, !0, !0)
				}
		},
		"./src/reddit/selectors/postDraft.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return p
			})), i.d(t, "d", (function() {
				return h
			})), i.d(t, "e", (function() {
				return f
			})), i.d(t, "b", (function() {
				return g
			})), i.d(t, "f", (function() {
				return b
			})), i.d(t, "g", (function() {
				return y
			})), i.d(t, "a", (function() {
				return v
			})), i.d(t, "h", (function() {
				return T
			})), i.d(t, "i", (function() {
				return S
			}));
			i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./src/config.ts"),
				r = i("./node_modules/lodash/values.js"),
				s = i.n(r),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/constants/index.ts"),
				l = i("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				a = i("./src/reddit/models/PostCreationForm/index.ts"),
				u = i("./src/reddit/models/PostDraft/index.ts"),
				c = i("./src/reddit/selectors/postCreations.ts"),
				_ = i("./src/reddit/selectors/subreddit.ts"),
				m = i("./src/reddit/selectors/user.ts");
			const p = Object(o.a)(e => e.creations.drafts, e => s()(e).sort((e, t) => {
					const i = e.modified || e.created;
					return (t.modified || t.created) - i
				})),
				h = (e, t) => {
					let {
						draftId: i
					} = t;
					return i ? e.creations.drafts[i] : null
				},
				f = (e, t) => {
					const i = h(e, t);
					if (i && i.subredditId) {
						const t = Object(_.Q)(e, {
							subredditId: i.subredditId
						});
						return t ? t.name : void 0
					}
				},
				g = e => e.creations.api.draft.listing.pending,
				b = e => {
					const {
						api: t
					} = e.creations, {
						apiError: i,
						validationError: n
					} = t.draft.save.error;
					return !(!i && !n)
				},
				w = e => (e && e.fields || []).map(e => e.msg),
				y = (Object(o.a)(e => e.creations.api.draft.save.error, e => {
					const {
						apiError: t,
						validationError: i
					} = e;
					return [...w(t), ...w(i)]
				}), e => e.creations.api.draft.save.pending),
				v = (e, t) => e.creations.api.draft.deleteDraft.pending[t] || !1,
				T = (e, t) => {
					const i = Object(c.b)(e, t);
					if (!i) return;
					const n = Object(c.m)(e),
						r = Object(c.I)(e),
						s = Object(c.J)(e),
						o = Object(c.V)(e),
						_ = Object(c.X)(e),
						m = Object(c.a)(e),
						{
							uploads: p
						} = e;
					if (m === d.Hb.LINK_ONLY) return Object.assign({}, i, {
						body: r,
						kind: u.b.Link
					});
					if (m === d.Hb.POST && n === a.h.MARKDOWN) return Object.assign({}, i, {
						body: _ ? s : "",
						kind: u.b.Markdown
					});
					if (m === d.Hb.POST && n === a.h.RICH_TEXT) {
						const e = _ ? l.a.toRichTextJSON(o, p).document : [];
						return Object.assign({}, i, {
							body: e,
							kind: u.b.RichText
						})
					}
				},
				S = (e, t) => {
					let {
						draftId: i
					} = t;
					const r = Object(m.i)(e);
					return i && r ? "".concat(n.a.redditUrl, "/user/").concat(r.displayText, "/draft/").concat(i) : ""
				}
		},
		"./src/reddit/selectors/postFlair.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return u
			})), i.d(t, "c", (function() {
				return c
			})), i.d(t, "e", (function() {
				return _
			})), i.d(t, "b", (function() {
				return m
			})), i.d(t, "a", (function() {
				return p
			}));
			var n = i("./src/lib/objectSelector/index.ts"),
				r = i("./src/reddit/constants/posts.ts"),
				s = i("./src/reddit/helpers/flair.ts"),
				o = i("./src/reddit/models/Flair/index.ts"),
				d = i("./src/reddit/selectors/moderatorPermissions.ts"),
				l = i("./src/reddit/selectors/posts.ts"),
				a = i("./src/reddit/selectors/user.ts");
			const u = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.postFlair[i]
				},
				c = (e, t) => {
					let {
						subredditId: i
					} = t;
					return !e.postFlair[i] || e.postFlair[i].displaySettings.isEnabled
				},
				_ = Object(n.a)((e, t) => {
					let {
						subredditId: i
					} = t;
					const n = u(e, {
						subredditId: i
					});
					if (n) return {
						type: o.d.LinkFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				m = function(e, t, i) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					if (t.type === r.a.PROFILE) return !1;
					const s = t.id,
						o = c(e, {
							subredditId: s
						});
					if (!o) return !1;
					const l = u(e, {
						subredditId: s
					});
					if (!l) return !1;
					if (n) {
						if (!!!(l.templateIds && l.templateIds.length > 0)) return !1
					}
					const a = Object(d.d)(e, {
						subredditId: s
					});
					if (a) return !0;
					const {
						canAssignOwn: _
					} = l.permissions;
					return _ && i
				},
				p = (e, t) => {
					let {
						postId: i
					} = t;
					const n = Object(l.O)(e, {
						postId: i
					});
					if (!n) return !1;
					const r = n.flair.some(e => Object(s.p)(e.type)),
						o = Object(a.hb)(e, {
							post: n
						});
					return m(e, n.belongsTo, o, !r)
				}
		},
		"./src/reddit/selectors/postRequirements.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			}));
			const n = (e, t) => {
					let {
						subredditName: i
					} = t;
					return e.postRequirements.api.fetch.pending[i.toLowerCase()] || !1
				},
				r = (e, t) => {
					let {
						subredditName: i
					} = t;
					return e.postRequirements.models[i.toLowerCase()]
				}
		},
		"./src/reddit/selectors/posts.ts": function(e, t, i) {
			"use strict";
			i.d(t, "l", (function() {
				return O
			})), i.d(t, "o", (function() {
				return j
			})), i.d(t, "H", (function() {
				return B
			})), i.d(t, "i", (function() {
				return x
			})), i.d(t, "U", (function() {
				return k
			})), i.d(t, "T", (function() {
				return C
			})), i.d(t, "j", (function() {
				return N
			})), i.d(t, "O", (function() {
				return P
			})), i.d(t, "J", (function() {
				return L
			})), i.d(t, "I", (function() {
				return A
			})), i.d(t, "d", (function() {
				return D
			})), i.d(t, "f", (function() {
				return G
			})), i.d(t, "R", (function() {
				return M
			})), i.d(t, "h", (function() {
				return U
			})), i.d(t, "b", (function() {
				return q
			})), i.d(t, "eb", (function() {
				return H
			})), i.d(t, "N", (function() {
				return V
			})), i.d(t, "S", (function() {
				return W
			})), i.d(t, "Z", (function() {
				return K
			})), i.d(t, "bb", (function() {
				return Q
			})), i.d(t, "c", (function() {
				return J
			})), i.d(t, "e", (function() {
				return Y
			})), i.d(t, "m", (function() {
				return X
			})), i.d(t, "r", (function() {
				return Z
			})), i.d(t, "F", (function() {
				return $
			})), i.d(t, "L", (function() {
				return ee
			})), i.d(t, "M", (function() {
				return te
			})), i.d(t, "Q", (function() {
				return ie
			})), i.d(t, "D", (function() {
				return ne
			})), i.d(t, "X", (function() {
				return re
			})), i.d(t, "P", (function() {
				return oe
			})), i.d(t, "E", (function() {
				return de
			})), i.d(t, "x", (function() {
				return le
			})), i.d(t, "p", (function() {
				return ae
			})), i.d(t, "z", (function() {
				return ue
			})), i.d(t, "Y", (function() {
				return ce
			})), i.d(t, "s", (function() {
				return _e
			})), i.d(t, "t", (function() {
				return me
			})), i.d(t, "y", (function() {
				return pe
			})), i.d(t, "w", (function() {
				return he
			})), i.d(t, "q", (function() {
				return fe
			})), i.d(t, "v", (function() {
				return ge
			})), i.d(t, "u", (function() {
				return be
			})), i.d(t, "W", (function() {
				return we
			})), i.d(t, "a", (function() {
				return ye
			})), i.d(t, "G", (function() {
				return ve
			})), i.d(t, "V", (function() {
				return Te
			})), i.d(t, "n", (function() {
				return Se
			})), i.d(t, "db", (function() {
				return Ee
			})), i.d(t, "K", (function() {
				return Fe
			})), i.d(t, "k", (function() {
				return Ie
			})), i.d(t, "C", (function() {
				return je
			})), i.d(t, "A", (function() {
				return xe
			})), i.d(t, "B", (function() {
				return Re
			})), i.d(t, "g", (function() {
				return Ce
			})), i.d(t, "cb", (function() {
				return Ne
			})), i.d(t, "ab", (function() {
				return Pe
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/lodash/camelCase.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/isEmpty.js"),
				o = i.n(s),
				d = i("./node_modules/lodash/uniqBy.js"),
				l = i.n(d),
				a = i("./node_modules/reselect/es/index.js"),
				u = i("./src/lib/isPinnedAdminPost/index.ts"),
				c = i("./src/lib/objectSelector/index.ts"),
				_ = i("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = i("./src/reddit/constants/posts.ts"),
				p = i("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				h = i("./src/reddit/models/Media/index.ts"),
				f = i("./src/reddit/models/Subreddit/index.ts"),
				g = i("./src/reddit/models/Widgets/index.ts"),
				b = (i("./src/reddit/models/Profile/mock.ts"), i("./src/reddit/models/Subreddit/mock.ts"), i("./src/reddit/helpers/flair.ts")),
				w = i("./src/reddit/models/Flair/index.ts"),
				y = i("./src/reddit/selectors/ads.ts"),
				v = i("./src/reddit/selectors/media.ts"),
				T = i("./src/reddit/selectors/profile.ts"),
				S = i("./src/reddit/selectors/subreddit.ts"),
				E = i("./src/reddit/selectors/user.ts"),
				F = i("./src/reddit/selectors/video.ts");
			const I = [],
				O = (e, t) => {
					let {
						postId: i
					} = t;
					return e.posts.models[i].media && (e.posts.models[i].media.type === h.n.EMBED || e.posts.models[i].media.type === h.n.IMAGE)
				},
				j = (e, t) => {
					let {
						postId: i
					} = t;
					return e.posts.models[i].media && e.posts.models[i].media.type === h.n.GIFVIDEO
				},
				B = Object(c.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const n = e.posts.models;
					return R(e, {
						listingKey: i
					}).filter(e => {
						const t = n[e];
						return t && !t.hidden
					})
				}),
				x = Object(a.a)(e => e.posts.models, e => Object.keys(e).filter(t => e[t].hidden)),
				R = Object(c.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return [...e.listings.postOrder.ids[i] || []]
				}),
				k = Object(c.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return B(e, {
						listingKey: i
					}).map(t => e.posts.models[t])
				}),
				C = (e, t) => {
					let {
						listingKey: i
					} = t;
					const n = k(e, {
						listingKey: i
					});
					return n ? n.length : 0
				},
				N = (e, t) => {
					let {
						postId: i
					} = t;
					return !!e.shortcuts.activePostId && i === e.shortcuts.activePostId
				},
				P = (e, t) => {
					let {
						postId: i
					} = t;
					return e.posts.models[i]
				},
				L = (e, t) => {
					let {
						postId: i
					} = t;
					return P(e, {
						postId: i
					}).isLocked
				},
				A = (e, t) => {
					let {
						postId: i
					} = t;
					return P(e, {
						postId: i
					}).isArchived
				},
				D = (e, t) => {
					let {
						postId: i
					} = t;
					const n = P(e, {
						postId: i
					});
					if (n && n.crosspostRootId) return P(e, {
						postId: n.crosspostRootId
					}) || void 0
				},
				G = (e, t) => {
					let {
						postId: i
					} = t;
					return D(e, {
						postId: i
					}) || P(e, {
						postId: i
					}) || void 0
				},
				M = e => e.posts.models,
				U = () => {
					return [1, 50, 100].reduce((e, t) => (e[t] = {
						maxContinuousTime: 0,
						totalTime: 0
					}, e), {})
				},
				q = Object(a.a)(e => e, (e, t) => P(e, {
					postId: t
				}), y.a, (e, t) => e.posts.pixelMetadata[t] || U(), (e, t, i, n) => {
					const r = Object.assign({}, n);
					if (i && !r.timeImpressionViewed && (r.timeImpressionViewed = i.adImpression), i && (r.isGroupMViewable = !!i.groupMViewable), i) {
						const e = Object.keys(i).length;
						r.eventGlobalCount = e
					}
					if (t && t.media && Object(h.E)(t.media)) {
						const i = Object(F.i)(e, {
								postId: t.id
							}),
							n = Object(F.h)(e, {
								postId: t.id
							});
						r.videoData = {
							isVideo: !0,
							videoDuration: i ? i.length : 0,
							videoVolume: Math.floor(100 * (Object(v.b)(e) || 0)),
							cumulativeViewedTime: n || 0
						}
					}
					return r
				}),
				H = e => {
					return [1, 50, 100].reduce((e, t) => {
						const i = e[t];
						if (i && i.timeAdEntered) {
							const n = i.totalTime || 0,
								r = Date.now() - i.timeAdEntered,
								s = i.maxContinuousTime || 0;
							e[t] = {
								totalTime: n + r,
								maxContinuousTime: Math.max(s, r)
							}
						}
						return e
					}, Object.assign({}, e))
				},
				V = (e, t) => H(q(e, t)),
				W = Object(c.a)((e, t) => {
					let {
						postIds: i
					} = t;
					const n = e.posts.models,
						r = {};
					return i.map(e => {
						r[e] = n[e]
					}), r
				}),
				z = Object(a.a)(e => e.posts.models, B, (e, t) => t.limit, (e, t, i) => {
					let n = t;
					return i && (n = t.slice(0, i)), n.reduce((t, i) => (t[i] = e[i], t), {})
				}),
				K = Object(c.a)((e, t) => {
					const i = z(e, t),
						n = {},
						r = e.posts.models;
					return Object.keys(i).forEach(e => {
						const {
							crosspostRootId: t
						} = i[e];
						t && (n[t] = r[t])
					}), Object.assign({}, i, n)
				}),
				Q = (e, t) => {
					let {
						postId: i
					} = t;
					const n = P(e, {
						postId: i
					});
					if (!n) return;
					const {
						belongsTo: r
					} = n;
					return r.type === m.a.PROFILE ? e.profiles.models[r.id] || !1 : e.subreddits.models[r.id] || !1
				},
				J = (e, t) => {
					let {
						postId: i
					} = t;
					const n = Q(e, {
						postId: i
					});
					if (n) return Object(f.f)(n) ? Object(g.h)(n) : Object(g.i)(n)
				},
				Y = (e, t) => {
					let {
						postId: i
					} = t;
					const n = P(e, {
						postId: i
					});
					return n && n.crosspostRootId ? Q(e, {
						postId: n.crosspostRootId
					}) : null
				},
				X = (e, t) => {
					let {
						postId: i
					} = t;
					return e.posts.expanded[i]
				},
				Z = (e, t) => {
					let {
						postId: i
					} = t;
					const n = P(e, {
						postId: i
					});
					return n && n.isMeta
				},
				$ = (e, t) => {
					let {
						postId: i
					} = t;
					const n = P(e, {
						postId: i
					});
					return n && n.contestMode
				},
				ee = (e, t) => {
					let {
						postId: i
					} = t;
					if (!i) return "";
					const n = P(e, {
						postId: i
					});
					return n && n.liveCommentsWebsocket ? n.liveCommentsWebsocket : ""
				},
				te = (e, t) => {
					let {
						postId: i
					} = t;
					if (!i) return "";
					const n = P(e, {
						postId: i
					});
					if (!n) return "";
					let r = n.permalink;
					if (n.media && Object(h.B)(n.media)) {
						const {
							id: t,
							type: i
						} = n.belongsTo, s = "subreddit" === i ? e.subreddits.models[t] : null;
						r = s ? Object(p.b)(n.id, s.name) : Object(p.b)(n.id)
					}
					return r
				},
				ie = (e, t) => {
					let {
						postId: i
					} = t;
					if (!i) return null;
					const n = te(e, {
						postId: i
					});
					return Object(_.a)(n)
				},
				ne = (e, t) => {
					let {
						postId: i
					} = t;
					if (!i) return 0;
					return P(e, {
						postId: i
					}).numDuplicates || 0
				},
				re = Object(c.a)(e => {
					return e.posts.recent.map(t => e.posts.models[t]).filter(e => !!e)
				}),
				se = e => (t, i) => {
					let {
						postId: n
					} = i;
					if (!n) return !1;
					const r = P(t, {
						postId: n
					});
					return !!r && !!r[e]
				},
				oe = (e, t) => {
					let {
						postId: i
					} = t;
					if (!i) return null;
					const n = P(e, {
						postId: i
					});
					return n && n.belongsTo.type !== m.a.PROFILE ? Object(S.G)(e, {
						identifier: n.belongsTo
					}) : null
				},
				de = (e, t) => t.postCategories,
				le = se("saved"),
				ae = se("hidden"),
				ue = se("isSponsored"),
				ce = se("sendReplies"),
				_e = se("isNSFW"),
				me = se("isOriginalContent"),
				pe = se("isSpoiler"),
				he = (e, t) => {
					let {
						postId: i
					} = t;
					const n = P(e, {
							postId: i
						}),
						r = Object(T.m)(e, n.author),
						s = e.profiles.pinnedPosts.data[r];
					return !!s && s.includes(i)
				},
				fe = (e, t, i) => {
					const n = Object(T.m)(e, i),
						r = e.profiles.pinnedPosts.initialData[n];
					return !!r && r.includes(t)
				},
				ge = (e, t, i) => {
					const n = Object(T.m)(e, i),
						r = e.profiles.pinnedPosts.data[n];
					return !!r && r.includes(t)
				},
				be = (e, t) => he(e, t) !== ((e, t) => {
					let {
						postId: i
					} = t;
					const n = P(e, {
							postId: i
						}),
						r = Object(T.m)(e, n.author),
						s = e.profiles.pinnedPosts.pending[r];
					return !!s && s.includes(i)
				})(e, t),
				we = Object(c.a)((e, t) => {
					const i = Object(T.m)(e, t.profileName);
					return e.profiles.pinnedPosts.data[i] || []
				}),
				ye = (e, t) => {
					const i = Object(T.m)(e, t.profileName);
					return !!e.profiles.pinnedPosts.data[i]
				},
				ve = (e, t) => {
					const i = P(e, {
							postId: t
						}),
						n = (new Date).getTime();
					return !!i && (n - i.created) / 1e3 / 60 / 60 < 24
				},
				Te = Object(c.a)((e, t) => {
					const i = B(e, t);
					return t.excludePinnedPosts ? i.filter(t => !he(e, {
						postId: t
					})) : i
				}),
				Se = (e, t) => {
					let {
						profileName: i
					} = t;
					const n = we(e, {
						profileName: i
					});
					if (!n.length) return !1;
					const [r] = n, s = P(e, {
						postId: r
					});
					return !!s && (!(i.toLowerCase() === s.author.toLowerCase()) && Object(u.a)(!0, s.distinguishType))
				},
				Ee = Object(c.a)((e, t) => {
					const {
						models: i
					} = e.posts;
					return t.filter(e => {
						const t = i[e];
						return !!t && !t.isBlank && !t.hidden
					})
				}),
				Fe = (e, t, i, n) => {
					const r = B(e, {
						listingKey: t
					});
					if (n) {
						const t = Object(S.E)(e, i);
						if (t) {
							if (!!e.subreddits.appliedFilters.meta[t]) {
								const t = e.posts.metaMap;
								return r.filter(e => !!t[e])
							}
						}
					}
					return r
				},
				Ie = (e, t) => {
					const i = P(e, t);
					if (!i || i.belongsTo.type === m.a.SUBREDDIT) return !1;
					const n = Q(e, t);
					return !!n && Object(E.L)(e, n.name)
				},
				Oe = Object(a.a)((e, t) => t.postId, B, (e, t) => {
					const i = t.indexOf(e);
					return i >= 0 ? t[i + 1] : void 0
				}),
				je = Object(a.a)(Oe, e => e.posts.models, (e, t) => e && t[e] || void 0),
				Be = (Object(a.a)((e, t) => k(e, t), (e, t) => Object(S.r)(e, t), (e, t) => {
					const i = (e => {
							const t = {};
							return e.map(e => {
								e.flair && e.flair.map(e => {
									const i = Object(b.g)(e),
										n = r()(i),
										s = n && t.hasOwnProperty(n);
									e.type !== w.f.Spoiler && e.type !== w.f.Nsfw && (s || (t[n] = Object.assign({}, e, {
										id: n
									})))
								})
							}), o()(t) ? I : Object.values(t)
						})(e),
						n = (e => {
							const t = e.find(e => "post-flair" === e.kind),
								i = t && t.templates,
								n = {};
							for (const s in i) {
								const e = i[s],
									t = Object(b.g)(e),
									o = r()(t);
								o && n.hasOwnProperty(o) || (n[o] = Object.assign({}, e, {
									id: o
								}))
							}
							return o()(n) ? I : Object.values(n)
						})(t);
					return l()([...i, ...n], "id")
				}), e => e.posts.modToMemberShare),
				xe = e => {
					const t = Be(e);
					return t ? P(e, {
						postId: t
					}) : null
				},
				Re = e => {
					const t = Be(e);
					return t && Q(e, {
						postId: t
					}) || null
				},
				ke = e => e.posts.crowdControl,
				Ce = e => {
					const t = ke(e);
					return t ? P(e, {
						postId: t
					}) : null
				},
				Ne = e => {
					const t = ke(e);
					if (!t) return;
					const i = P(e, {
						postId: t
					});
					return Object(S.W)(e, i.belongsTo.id)
				},
				Pe = e => {
					const t = ke(e);
					if (!t) return;
					const i = P(e, {
							postId: t
						}),
						n = Object(S.S)(e, i.belongsTo.id);
					return n ? n.crowdControlLevel : void 0
				}
		},
		"./src/reddit/selectors/profile.ts": function(e, t, i) {
			"use strict";
			i.d(t, "p", (function() {
				return _
			})), i.d(t, "j", (function() {
				return m
			})), i.d(t, "i", (function() {
				return p
			})), i.d(t, "m", (function() {
				return f
			})), i.d(t, "a", (function() {
				return g
			})), i.d(t, "b", (function() {
				return b
			})), i.d(t, "f", (function() {
				return w
			})), i.d(t, "q", (function() {
				return y
			})), i.d(t, "h", (function() {
				return v
			})), i.d(t, "g", (function() {
				return T
			})), i.d(t, "k", (function() {
				return S
			})), i.d(t, "l", (function() {
				return E
			})), i.d(t, "n", (function() {
				return F
			})), i.d(t, "o", (function() {
				return I
			})), i.d(t, "r", (function() {
				return O
			})), i.d(t, "c", (function() {
				return j
			})), i.d(t, "d", (function() {
				return B
			})), i.d(t, "e", (function() {
				return x
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/reselect/es/index.js"),
				s = i("./src/lib/objectSelector/index.ts"),
				o = i("./src/lib/pageTitle.ts"),
				d = i("./src/reddit/models/Multireddit/index.ts"),
				l = i("./src/reddit/models/User/index.ts"),
				a = i("./src/reddit/selectors/subreddit.ts"),
				u = i("./src/reddit/selectors/user.ts");
			const c = [],
				_ = (e, t) => {
					let {
						profileId: i
					} = t;
					return e.profiles.models[i]
				},
				m = (e, t) => {
					let {
						profileName: i
					} = t;
					return e.profiles.models[f(e, i)]
				},
				p = (e, t) => e.profiles.models[t],
				h = Object(r.a)(e => e.profiles.models, e => {
					const t = {};
					for (const i in e) {
						const n = e[i];
						t[n.name.toLowerCase()] = n.id
					}
					return t
				}),
				f = (e, t) => h(e)[t ? t.toLowerCase() : ""],
				g = (e, t) => {
					let {
						profileName: i
					} = t;
					const {
						pending: n
					} = e.profiles.moderated.api;
					return !!(i && i in n) && n[i.toLowerCase()]
				},
				b = (e, t) => {
					let {
						profileName: i
					} = t;
					const {
						pending: n
					} = e.profiles.multireddits.api;
					return !!(i && i in n) && n[i.toLowerCase()]
				},
				w = (e, t) => {
					let {
						profileName: i
					} = t;
					const n = Object(u.i)(e);
					if (!n || !i) return !1;
					const r = Object(l.e)(n);
					return F(e, {
						profileName: r
					}).some(e => e.name.toLowerCase() === i.toLowerCase())
				},
				y = (e, t) => {
					let {
						profileName: i
					} = t;
					const r = m(e, {
						profileName: i
					});
					return r && "".concat(n.fbt._("{profileTitleOrName} ({displayText}) - Reddit", [n.fbt._param("profileTitleOrName", r.title || r.name), n.fbt._param("displayText", r.displayText)], {
						hk: "1MLLB8"
					})) || "".concat(Object(o.c)())
				},
				v = (e, t) => {
					let {
						profileName: i
					} = t;
					const n = f(e, i);
					return e.profiles.about[n]
				},
				T = (e, t) => e.profiles.about[t],
				S = Object(s.a)((e, t) => {
					let {
						profileName: i
					} = t;
					return void 0 !== e.profiles.moderated.models[i ? i.toLowerCase() : ""]
				}),
				E = (e, t) => {
					let {
						profileName: i
					} = t;
					return void 0 !== e.profiles.multireddits.pageInfo[i ? i.toLowerCase() : ""]
				},
				F = Object(s.a)((e, t) => {
					let {
						profileName: i
					} = t;
					const n = e.profiles.moderated.models[i ? i.toLowerCase() : ""];
					if (!n) return c;
					const r = [];
					return n.forEach(t => {
						Object(a.Q)(e, {
							subredditId: t
						}) ? r.push(Object(a.Q)(e, {
							subredditId: t
						})) : _(e, {
							profileId: t
						}) && r.push(_(e, {
							profileId: t
						}))
					}), r
				}),
				I = Object(r.a)((e, t) => {
					const i = Object(u.eb)(e, {
						userName: t.profileName
					});
					return i ? e.multireddits.byUserId[i.id] : null
				}, e => e.multireddits.models, (e, t) => e ? e.map(e => t[e]).filter(e => e.visibility === d.e.Public) : null),
				O = Object(r.a)(e => e.trophies, e => e.profiles.trophyCases, (e, t) => t, (e, t, i) => {
					const n = t[i];
					return n ? n.map(t => e[t]) : []
				}),
				j = (e, t) => {
					let {
						extraCommentsId: i
					} = t;
					return e.profileOverviewPage.conversations.extraComments.models[i]
				},
				B = (e, t) => {
					let {
						profileName: i
					} = t;
					return e.profiles.moderated.pageInfo[i] ? e.profiles.moderated.pageInfo[i].hasNextPage : void 0
				},
				x = (e, t) => {
					let {
						profileName: i
					} = t;
					return !!e.profiles.multireddits.pageInfo[i] && e.profiles.multireddits.pageInfo[i].hasNextPage
				}
		},
		"./src/reddit/selectors/profileComments.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "b", (function() {
				return u
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "c", (function() {
				return _
			}));
			var n = i("./node_modules/lodash/set.js"),
				r = i.n(n),
				s = i("./src/lib/objectSelector/index.ts"),
				o = i("./src/reddit/selectors/comments.ts");
			const d = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profileCommentsPage.commentIds[i] || []
				},
				l = Object(s.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const n = Object(o.r)(e);
					return d(e, {
						listingKey: i
					}).reduce((e, t) => r()(e, t, n[t].postId), {})
				}),
				a = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profileCommentsPage.api.error[i]
				},
				u = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profileCommentsPage.api.pending[i]
				},
				c = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profileCommentsPage.loadMore[i]
				},
				_ = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profileCommentsPage.fetchedTokens[i]
				}
		},
		"./src/reddit/selectors/responsiveSettings.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			}));
			i("./node_modules/core-js/modules/es6.regexp.match.js"), i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./src/lib/constants/index.ts"),
				r = i("./src/reddit/contexts/PageLayer/index.tsx"),
				s = i("./src/reddit/selectors/meta.ts"),
				o = i("./src/reddit/selectors/user.ts");
			const d = new Set([n.Mb.Creator, n.Mb.Messaging, n.Mb.Payments, n.Mb.SpecialMembership]),
				l = (e, t) => !(!Object(s.h)(e) && !Object(s.k)(e)) && (!(!Object(o.G)(e) && !Object(o.H)(e)) && (!!Object(r.J)(t.pageLayer) && (!(!t.pageLayer || !t.pageLayer.routeMatch) && !d.has(t.pageLayer.routeMatch.match.params.page))))
		},
		"./src/reddit/selectors/runTimeEnvVars.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return s
			}));
			i("./src/lib/constants/index.ts");
			const n = e => e.runTimeEnvVars.staging,
				r = e => n(e),
				s = e => e.runTimeEnvVars.startTimeInMillis
		},
		"./src/reddit/selectors/structuredStyles.ts": function(e, t, i) {
			"use strict";
			i.d(t, "j", (function() {
				return c
			})), i.d(t, "l", (function() {
				return _
			})), i.d(t, "p", (function() {
				return m
			})), i.d(t, "q", (function() {
				return g
			})), i.d(t, "c", (function() {
				return b
			})), i.d(t, "h", (function() {
				return w
			})), i.d(t, "g", (function() {
				return y
			})), i.d(t, "d", (function() {
				return v
			})), i.d(t, "o", (function() {
				return T
			})), i.d(t, "f", (function() {
				return S
			})), i.d(t, "n", (function() {
				return E
			})), i.d(t, "b", (function() {
				return F
			})), i.d(t, "e", (function() {
				return I
			})), i.d(t, "i", (function() {
				return O
			})), i.d(t, "k", (function() {
				return j
			})), i.d(t, "a", (function() {
				return B
			})), i.d(t, "m", (function() {
				return x
			}));
			var n = i("./node_modules/lodash/isEqual.js"),
				r = i.n(n),
				s = i("./node_modules/reselect/es/index.js"),
				o = i("./src/lib/objectSelector/index.ts"),
				d = i("./src/reddit/models/StructuredStyles/index.ts"),
				l = i("./src/reddit/selectors/platform.ts"),
				a = i("./src/reddit/selectors/subreddit.ts"),
				u = i("./src/reddit/selectors/user.ts");
			const c = e => e.structuredStyles.isEditing,
				_ = (e, t) => e.structuredStyles.models[t.subredditId],
				m = Object(s.a)(_, e => Object(d.h)(e)),
				p = e => e.structuredStyles.draft,
				h = {},
				f = Object(o.a)((e, t) => {
					const i = Object(a.Q)(e, t),
						n = ((e, t) => {
							const i = _(e, t);
							if (i) return {
								url: i.communityIcon,
								color: i.primaryColor
							}
						})(e, t);
					return n && n.url ? Object.assign({}, n, {
						altText: i && i.displayText
					}) : ((e, t) => e && e.icon ? {
						altText: e.displayText,
						url: e.icon.url,
						color: t
					} : h)(i, n ? n.color : void 0)
				}),
				g = (e, t) => {
					const i = Object(a.E)(e, t.subredditName);
					return i ? f(e, {
						subredditId: i
					}) : h
				},
				b = e => {
					const t = Object(l.d)(e);
					return t ? f(e, {
						subredditId: t
					}) : h
				},
				w = (e, t) => {
					const i = e.structuredStyles.imagePreviews[t.name];
					if (i && i in e.imageUploads) return e.imageUploads[i]
				},
				y = Object(o.a)(e => {
					const t = e.structuredStyles.imagePreviews,
						i = {};
					for (const n in t) {
						const t = w(e, {
							name: n
						});
						t && (i[n] = t.url)
					}
					return i
				}),
				v = (e, t) => p(e)[t.name],
				T = e => e.structuredStyles.models,
				S = e => e.structuredStyles.flairTemplate.models,
				E = (e, t) => e.structuredStyles.models[t],
				F = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.structuredStyles.models[i];
					return n && n.communityIcon ? n.communityIcon : null
				},
				I = e => e.structuredStyles.exportStyles.pending,
				O = e => e.structuredStyles.isBladeEditorDirty,
				j = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.subreddits.about[i],
						r = n && n.quarantinePermissions;
					return !!r && !r.styles
				},
				B = Object(s.a)(c, O, p, (e, t) => t.subredditId && _(e, {
					subredditId: t.subredditId
				}), (e, t, i, n) => !(!e || !i) && (t || !r()(i, n))),
				x = (e, t) => {
					if (Object(u.cb)(e)) return !0;
					if (t) {
						const i = t.subredditId || t.subredditName && Object(a.E)(e, t.subredditName);
						if (i && Object(u.bb)(e, {
								subredditId: i
							})) return !0
					}
					return !1
				}
		},
		"./src/reddit/selectors/subreddit.ts": function(e, t, i) {
			"use strict";
			i.d(t, "Y", (function() {
				return y
			})), i.d(t, "b", (function() {
				return v
			})), i.d(t, "d", (function() {
				return S
			})), i.d(t, "c", (function() {
				return E
			})), i.d(t, "G", (function() {
				return F
			})), i.d(t, "K", (function() {
				return I
			})), i.d(t, "J", (function() {
				return O
			})), i.d(t, "X", (function() {
				return j
			})), i.d(t, "Q", (function() {
				return B
			})), i.d(t, "V", (function() {
				return x
			})), i.d(t, "Z", (function() {
				return R
			})), i.d(t, "bb", (function() {
				return k
			})), i.d(t, "o", (function() {
				return N
			})), i.d(t, "h", (function() {
				return P
			})), i.d(t, "q", (function() {
				return L
			})), i.d(t, "ab", (function() {
				return G
			})), i.d(t, "z", (function() {
				return M
			})), i.d(t, "a", (function() {
				return U
			})), i.d(t, "E", (function() {
				return q
			})), i.d(t, "F", (function() {
				return V
			})), i.d(t, "j", (function() {
				return W
			})), i.d(t, "w", (function() {
				return z
			})), i.d(t, "v", (function() {
				return K
			})), i.d(t, "p", (function() {
				return Q
			})), i.d(t, "H", (function() {
				return J
			})), i.d(t, "I", (function() {
				return Y
			})), i.d(t, "T", (function() {
				return X
			})), i.d(t, "P", (function() {
				return Z
			})), i.d(t, "M", (function() {
				return $
			})), i.d(t, "N", (function() {
				return ee
			})), i.d(t, "O", (function() {
				return te
			})), i.d(t, "D", (function() {
				return ie
			})), i.d(t, "y", (function() {
				return ne
			})), i.d(t, "B", (function() {
				return re
			})), i.d(t, "A", (function() {
				return se
			})), i.d(t, "r", (function() {
				return oe
			})), i.d(t, "m", (function() {
				return de
			})), i.d(t, "e", (function() {
				return le
			})), i.d(t, "g", (function() {
				return ae
			})), i.d(t, "l", (function() {
				return ue
			})), i.d(t, "i", (function() {
				return ce
			})), i.d(t, "n", (function() {
				return _e
			})), i.d(t, "k", (function() {
				return me
			})), i.d(t, "x", (function() {
				return pe
			})), i.d(t, "f", (function() {
				return he
			})), i.d(t, "W", (function() {
				return fe
			})), i.d(t, "S", (function() {
				return ge
			})), i.d(t, "R", (function() {
				return be
			})), i.d(t, "C", (function() {
				return we
			})), i.d(t, "U", (function() {
				return ye
			})), i.d(t, "t", (function() {
				return ve
			})), i.d(t, "s", (function() {
				return Te
			})), i.d(t, "u", (function() {
				return Se
			})), i.d(t, "L", (function() {
				return Ee
			}));
			i("./node_modules/core-js/modules/es6.array.sort.js"), i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/constants/index.ts"),
				s = i("./src/lib/isFakeSubreddit/index.ts"),
				o = i("./src/lib/objectSelector/index.ts"),
				d = i("./src/lib/pageTitle.ts"),
				l = i("./src/reddit/constants/posts.ts"),
				a = i("./src/reddit/helpers/isPost.ts"),
				u = (i("./src/reddit/models/Profile/mock.ts"), i("./src/reddit/models/Subreddit/index.ts")),
				c = (i("./src/reddit/models/Subreddit/mock.ts"), i("./src/reddit/models/SubredditRestrictions/index.ts")),
				_ = i("./src/reddit/models/Widgets/index.ts"),
				m = i("./src/reddit/selectors/comments.ts"),
				p = i("./src/reddit/selectors/moderatorPermissions.ts"),
				h = i("./src/reddit/selectors/platform.ts"),
				f = i("./src/reddit/selectors/posts.ts"),
				g = i("./src/reddit/selectors/profile.ts"),
				b = i("./src/reddit/selectors/user.ts");
			const w = [],
				y = Object(o.a)((e, t) => {
					let {
						subredditIds: i
					} = t;
					if (0 === i.length) return w;
					const n = [];
					return i.forEach(t => {
						const i = e.subreddits.models[t];
						i && n.push(i)
					}), n
				}),
				v = (e, t) => {
					let {
						profileName: i
					} = t;
					if (!i) return null;
					const n = Object(g.j)(e, i);
					return n ? n.url : "/user/".concat(i, "/")
				},
				T = (e, t) => {
					const i = t.toLowerCase();
					return e ? e.url : Object(s.a)(i) ? "/r/" + i + "/" : null
				},
				S = (e, t) => {
					let {
						subredditName: i
					} = t;
					if (!i) return null;
					const n = q(e, i),
						r = B(e, {
							subredditId: n
						});
					return T(r, i)
				},
				E = (e, t) => {
					const i = B(e, {
						subredditId: t
					});
					if (i) return T(i, i.name) || "";
					const n = Object(g.p)(e, {
						profileId: t
					});
					return n ? n.url : ""
				},
				F = (e, t) => {
					let {
						identifier: i
					} = t;
					return i.type === l.a.PROFILE ? e.profiles.about[i.id] || {} : e.subreddits.about[i.id]
				},
				I = (e, t) => {
					let {
						identifier: i
					} = t;
					return i.type === l.a.PROFILE ? e.profiles.models[i.id] || !1 : e.subreddits.models[i.id] || !1
				},
				O = (e, t) => {
					let {
						identifier: i
					} = t;
					return i.type === l.a.PROFILE ? Object(g.m)(e, i.name) || null : q(e, i.name) || null
				},
				j = e => e.subreddits.models,
				B = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.models[i] || !1
				},
				x = (e, t) => {
					const i = B(e, t);
					if (i) return i.type
				},
				R = e => e.subreddits.trending,
				k = function(e, t) {
					let {
						identifier: i
					} = t, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const r = O(e, {
						identifier: i
					});
					if (!r) return n;
					const s = F(e, {
						identifier: {
							id: r,
							type: i.type
						}
					});
					return s && Object(b.H)(e) ? !!s.userIsSubscriber : i.type === l.a.SUBREDDIT ? e.subscriptions.subredditOrder.indexOf(r) > -1 : e.subscriptions.profileOrder.indexOf(r) > -1
				},
				C = (e, t) => {
					let {
						subredditName: i,
						action: n
					} = t;
					const r = z(e, {
						subredditName: i
					});
					return !!(r && n && (Object(p.g)(e, {
						subredditId: q(e, i)
					}) || r.userIsContributor || n === c.e.Post && !1 === r.restrictPosting || n === c.e.Comment && !1 === r.restrictCommenting))
				},
				N = e => {
					const t = Object(h.f)(e);
					if (t && "restricted" === t.type) {
						const i = pe(e)[t.id];
						if (i) return i.restrictCommenting && i.restrictPosting ? c.e.PostAndComment : i.restrictCommenting ? c.e.Comment : c.e.Post
					}
					return c.e.View
				},
				P = (e, t) => {
					const i = Object(h.f)(e),
						n = Object(b.H)(e),
						s = 3 * r.w,
						o = Date.now() - s;
					if (i && n && "restricted" === i.type) {
						if (C(e, {
								subredditName: i.name,
								action: t
							})) return !1;
						const n = Object(b.kb)(e).subreddit[i.id];
						if ((n ? n.isContributorRequestTimestamp : 0) > o) return !0
					}
					return !1
				},
				L = (e, t) => {
					const i = Object(h.f)(e);
					if (Object(b.H)(e) && i && "restricted" === i.type) {
						const n = !C(e, {
								subredditName: i.name,
								action: t
							}),
							r = !P(e);
						if (n && r) return !0
					}
					return !1
				},
				A = Object(n.a)(e => e.subreddits.models, e => {
					const t = {};
					for (const i in e) {
						const n = e[i];
						n.type !== u.d.User && (t[n.name.toLowerCase()] = n.id)
					}
					return t
				}),
				D = Object(n.a)(e => e.subreddits.unavailableModels, e => {
					const t = {};
					for (const i in e) {
						const n = e[i];
						t[n.name.toLowerCase()] = n.id
					}
					return t
				}),
				G = (e, t) => {
					let {
						subredditName: i
					} = t;
					return e.subreddits.unavailableModels[((e, t) => D(e)[t ? t.toLowerCase() : ""])(e, i)]
				},
				M = (e, t) => {
					let {
						subredditName: i
					} = t;
					return e.subreddits.models[q(e, i)]
				},
				U = (e, t) => {
					let {
						subredditName: i
					} = t;
					return M(e, {
						subredditName: i
					}) || G(e, {
						subredditName: i
					})
				},
				q = (e, t) => A(e)[t ? t.toLowerCase() : ""],
				H = Object(n.a)(e => e.subreddits.communityInfo, e => {
					const t = {};
					for (const i in e) {
						const n = e[i];
						n.id && (t[n.name.toLowerCase()] = n.id)
					}
					return t
				}),
				V = (e, t) => H(e)[t ? t.toLowerCase() : ""],
				W = e => {
					const t = Object(h.e)(e);
					return t ? z(e, {
						subredditName: t
					}) : null
				},
				z = (e, t) => {
					let {
						subredditName: i
					} = t;
					return e.subreddits.about[q(e, i)]
				},
				K = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.about[i]
				},
				Q = (e, t) => {
					const i = Object(g.j)(e, {
						profileName: t
					});
					return i ? e.subreddits.about[i.id] : void 0
				},
				J = (e, t) => {
					let {
						commentId: i
					} = t;
					const n = Object(m.n)(e, {
						commentId: i
					});
					if (!n) return;
					const r = n.subredditId;
					return e.profiles.models[r] || e.subreddits.models[r]
				},
				Y = (e, t) => {
					let {
						thingId: i
					} = t;
					if (Object(a.a)(i)) {
						const t = Object(f.O)(e, {
							postId: i
						});
						if (!t) return;
						return I(e, {
							identifier: t.belongsTo
						})
					}
					return J(e, {
						commentId: i
					})
				},
				X = (e, t) => {
					let {
						subredditName: i
					} = t;
					const n = M(e, {
						subredditName: i
					});
					return n && n.title || Object(d.c)().toString()
				},
				Z = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.rules[i] ? e.subreddits.rules[i].rules : w
				},
				$ = Object(o.a)((e, t) => {
					let {
						subredditId: i
					} = t;
					return e.subreddits.rules[i] ? e.subreddits.rules[i].rules.map(e => e.shortName) : w
				}),
				ee = (e, t) => {
					let {
						subredditId: i
					} = t;
					return !!e.subreddits.rules[i]
				},
				te = e => e.subreddits.api.rules,
				ie = (e, t) => {
					let {
						subredditId: i
					} = t;
					return !!e.subreddits.models[i] && !!e.subreddits.models[i].freeFormReports
				},
				ne = (e, t) => {
					let {
						subredditName: i
					} = t;
					const n = z(e, {
						subredditName: i
					});
					return n && n.allowedPostTypes
				},
				re = (e, t) => {
					let {
						subredditName: i
					} = t;
					const n = z(e, {
						subredditName: i
					});
					return n && n.coins
				},
				se = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.subreddits.about[i];
					return n && n.coins
				},
				oe = (e, t) => {
					let {
						subredditName: i
					} = t;
					const n = q(e, i),
						r = e.widgets.sidebar[n],
						s = [],
						o = e.widgets.moderatorIds[n],
						d = e.widgets.models[o];
					let l = !1;
					return r && r.forEach((function(t) {
						e.widgets.models[t] && (s.push(e.widgets.models[t]), t === o && (l = !0))
					})), d && !l && s.push(d), s
				},
				de = (e, t) => {
					return B(e, t).name === r.Gb
				},
				le = (Object(o.a)(e => {
					const {
						order: t
					} = e.subreddits.moderated, i = e.subreddits.models;
					return t && t.length ? t.map(e => i[e]) : []
				}), (e, t) => {
					let {
						subredditId: i
					} = t;
					return !!e.subredditChannels.api.whitelist[i]
				}),
				ae = Object(o.a)((e, t) => y(e, t).map(e => Object(_.i)(e))),
				ue = e => e.subreddits.api.create.pending,
				ce = e => e.subreddits.api.create.error.apiError,
				_e = (e, t) => {
					let {
						subredditId: i
					} = t;
					return !(!e.subreddits.about[i] || !e.subreddits.about[i].usingNewModmail)
				},
				me = (e, t) => {
					let {
						postId: i
					} = t;
					const n = e.posts.models[i].belongsTo.id;
					return !!e.subreddits.rules[n]
				},
				pe = e => e.subreddits.about,
				he = Object(o.a)(Object(n.a)(y, pe, (e, t) => {
					const i = [];
					return e.forEach(e => {
						e.type === u.d.Public && i.push(Object(_.i)(e, t[e.id]))
					}), i
				})),
				fe = (e, t) => e.subreddits.models[t].url,
				ge = (e, t) => e.subreddits.settings[t],
				be = e => e.subreddits.api.settings.pending,
				we = (e, t) => {
					let {
						subredditId: i
					} = t, n = e.user.prefs.sort;
					if (e.user.prefs.rememberCommunitySort) {
						const t = e.user.prefs.subreddit[i];
						t && t.sort && (n = t.sort)
					}
					return n
				},
				ye = (e, t) => {
					let {
						subredditName: i
					} = t;
					return e.subreddits.topContent[i.toLowerCase()]
				},
				ve = (e, t) => e.subreddits.api.similar.pending[t.key] || !1,
				Te = (e, t) => e.subreddits.similar[t.key] || w,
				Se = (e, t) => {
					const i = Te(e, t);
					return y(e, {
						subredditIds: i
					})
				},
				Ee = (e, t) => e.subreddits.rankings[t],
				Fe = Object(n.a)((e, t) => e.subreddits.onboarding[t.key] || w, e => e.subreddits.models, (e, t) => e.map(e => t[e]).filter(Boolean));
			Object(n.a)(Fe, e => e.map(e => e.name))
		},
		"./src/reddit/selectors/subredditAutocomplete.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return f
			})), i.d(t, "b", (function() {
				return g
			})), i.d(t, "c", (function() {
				return w
			})), i.d(t, "a", (function() {
				return E
			})), i.d(t, "e", (function() {
				return F
			}));
			i("./node_modules/core-js/modules/es6.symbol.js");
			var n = i("./node_modules/lodash/isNil.js"),
				r = i.n(n),
				s = i("./node_modules/reselect/es/index.js"),
				o = i("./src/reddit/helpers/name/index.ts"),
				d = i("./src/reddit/models/Subreddit/index.ts"),
				l = i("./src/reddit/models/SubredditAutocomplete/index.ts"),
				a = i("./src/reddit/models/User/index.ts"),
				u = i("./src/reddit/selectors/subscriptions.ts"),
				c = i("./src/reddit/selectors/user.ts");
			var _ = function(e, t) {
				var i = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (i[n[r]] = e[n[r]])
				}
				return i
			};
			const m = (e, t) => t.substring.toLowerCase(),
				p = (e, t) => {
					let {
						substring: i
					} = t;
					return Object(o.e)(i) ? "" : Object(o.f)(i)
				},
				h = (e, t) => {
					for (let i = e.length; i > 0; i--)
						if (!1 === t(e.slice(0, i))) return
				},
				f = Object(s.a)(p, e => e.subredditAutocomplete.models, (e, t) => {
					let i = null;
					return h(e, e => {
						if (t.hasOwnProperty(e)) return i = t[e], !1
					}), i
				}),
				g = Object(s.a)(p, f, (e, t) => !e || !r()(t) && 0 === t.subreddits.length),
				b = Object(s.a)(u.d, c.z, (e, t) => e.map(e => Object(l.c)(e, t))),
				w = Object(s.a)(p, f, g, e => e.subredditAutocomplete.api.pending, (e, t, i, n) => {
					if (i) return !1;
					let r = !1;
					return h(e, e => n.hasOwnProperty(e) ? (r = n[e], !1) : (!t || t.key !== e) && void 0), r
				}),
				y = Object(s.a)(p, u.d, (e, t) => t.filter(t => -1 !== t.name.toLowerCase().indexOf(e))),
				v = Object(s.a)(m, (e, t) => t.includeUserProfile, c.i, (e, t, i) => {
					if (!t || r()(i) || Object(o.d)(e)) return null;
					const n = Object(o.f)(Object(a.e)(i)),
						s = Object(o.f)(e);
					return n.includes(s) ? Object(l.d)(i) : null
				}),
				T = Object(s.a)(m, (e, t) => t.allowCrosspostableOnly, v, f, y, e => e.subreddits.crosspostable.ids, c.z, (e, t, i, n, r, s, d) => {
					const a = [];
					if (i && a.push(i), Object(o.e)(e)) return a;
					const u = {};
					return r.forEach(e => {
						const i = Object(l.c)(e, d);
						t && !s[e.id] && (i.disabled = !0), u[i.name] = i, a.push(i)
					}), n && n.subreddits.forEach(e => {
						const {
							communityIcon: i,
							icon: n,
							isCrosspostDestination: r,
							name: s
						} = e, o = _(e, ["communityIcon", "icon", "isCrosspostDestination", "name"]), d = i || n, c = t && !1 === r;
						u[s] || a.push(Object.assign({}, o, {
							disabled: c,
							iconUrl: d,
							name: s,
							type: l.a.OTHER_SUBREDDIT
						}))
					}), a
				}),
				S = Object(s.a)(m, c.h, (e, t) => {
					const i = Object(o.f)(e);
					return t.filter(e => {
						let {
							name: t
						} = e;
						return t.toLowerCase().includes(i)
					})
				}),
				E = (Object(s.a)(m, v, S, (e, t) => t.partnerConnectionSafeOnly, c.z, (e, t, i, n, r) => {
					const s = [];
					if (t && s.push(t), Object(o.e)(e)) return s;
					let a = i;
					return n && (a = i.filter(e => (e.type === d.d.Public || e.type === d.d.Restricted) && !e.isQuarantined && !e.isNSFW && e.subscribers < 2e5)), s.push(...a.map(e => Object(l.b)(e, l.a.MODERATED_SUBREDDIT, r))), s
				}), Object(s.c)({
					suggestedItems: T,
					fallbackItems: b,
					isAllDataRetrieved: g,
					isPending: w
				})),
				F = Object(s.a)(f, y, (e, t) => t.multireddit.subredditIds || [], c.z, (e, t, i, n) => {
					const r = [],
						s = {};
					return t.forEach(e => {
						const t = Object(l.c)(e, n);
						s[t.name] = t, t.id && i.indexOf(t.id) < 0 && r.push(t)
					}), e && e.subreddits.forEach(e => {
						const {
							communityIcon: t,
							icon: n,
							name: o
						} = e, d = _(e, ["communityIcon", "icon", "name"]), a = t || n;
						!s[o] && i.indexOf(e.id) < 0 && r.push(Object.assign({}, d, {
							iconUrl: a,
							name: o,
							type: l.a.OTHER_SUBREDDIT
						}))
					}), r
				})
		},
		"./src/reddit/selectors/subredditChannel.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "d", (function() {
				return a
			})), i.d(t, "c", (function() {
				return u
			})), i.d(t, "b", (function() {
				return c
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/lodash/values.js"),
				r = i.n(n),
				s = i("./src/reddit/selectors/user.ts");
			const o = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.subredditChannels.models;
					return Object.keys(n).map(e => n[e]).filter(e => e.subredditId === i)
				},
				d = (e, t) => {
					let {
						subredditId: i
					} = t;
					return !(!1 !== e.subredditChannels.api.pending[i] || !1 !== e.subredditChannels.api.error[i])
				},
				l = (e, t) => {
					let {
						subredditId: i
					} = t;
					return void 0 === e.subredditChannels.api.pending[i] && !d(e, {
						subredditId: i
					}) && Object(s.H)(e)
				},
				a = e => {
					const {
						models: t
					} = e.subredditChannels;
					return Object.keys(t).map(e => t[e] && t[e].name)
				},
				u = (e, t) => {
					const i = r()(e.subredditChannels.models);
					return i.length && i.find(e => {
						let {
							channelId: i
						} = e;
						return i === t
					}) || void 0
				},
				c = e => {
					const t = e.subredditChannels.selected;
					if (t) {
						return r()(e.subredditChannels.models).find(e => e.channelId === t)
					}
				}
		},
		"./src/reddit/selectors/subredditModeration.ts": function(e, t, i) {
			"use strict";
			i.d(t, "m", (function() {
				return d
			})), i.d(t, "g", (function() {
				return l
			})), i.d(t, "i", (function() {
				return a
			})), i.d(t, "h", (function() {
				return u
			})), i.d(t, "j", (function() {
				return c
			})), i.d(t, "k", (function() {
				return _
			})), i.d(t, "l", (function() {
				return m
			})), i.d(t, "f", (function() {
				return p
			})), i.d(t, "w", (function() {
				return h
			})), i.d(t, "o", (function() {
				return f
			})), i.d(t, "r", (function() {
				return g
			})), i.d(t, "B", (function() {
				return b
			})), i.d(t, "z", (function() {
				return w
			})), i.d(t, "A", (function() {
				return y
			})), i.d(t, "u", (function() {
				return v
			})), i.d(t, "x", (function() {
				return T
			})), i.d(t, "y", (function() {
				return S
			})), i.d(t, "p", (function() {
				return E
			})), i.d(t, "q", (function() {
				return F
			})), i.d(t, "v", (function() {
				return I
			})), i.d(t, "n", (function() {
				return O
			})), i.d(t, "s", (function() {
				return j
			})), i.d(t, "H", (function() {
				return B
			})), i.d(t, "D", (function() {
				return x
			})), i.d(t, "F", (function() {
				return R
			})), i.d(t, "G", (function() {
				return k
			})), i.d(t, "C", (function() {
				return C
			})), i.d(t, "E", (function() {
				return N
			})), i.d(t, "c", (function() {
				return P
			})), i.d(t, "d", (function() {
				return L
			})), i.d(t, "e", (function() {
				return A
			})), i.d(t, "b", (function() {
				return D
			})), i.d(t, "a", (function() {
				return G
			})), i.d(t, "t", (function() {
				return M
			}));
			i("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = i("./src/lib/objectSelector/index.ts"),
				r = i("./src/reddit/models/SubredditModeration/index.ts"),
				s = i("./src/reddit/selectors/user.ts");
			const o = [],
				d = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.banned.models[i]
				},
				l = (e, t) => {
					let {
						subredditId: i,
						username: n
					} = t;
					const r = Object(s.eb)(e, {
						userName: n
					});
					if (!r) return;
					const o = d(e, {
						subredditId: i
					});
					return o ? o[r.id] : void 0
				},
				a = Object(n.a)((e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.banned.userOrder[i];
					return n ? n.map(t => e.banned.models[i][t]) : o
				}),
				u = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = Object(r.d)(i);
					return e.banned.api.pending[n]
				},
				c = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.banned.loadMore[i]
				},
				_ = e => e.banned.search.api.pending,
				m = e => e.banned.search.result,
				p = e => e.banned.inContext,
				h = Object(n.a)((e, t) => {
					let {
						subredditId: i,
						before: n,
						after: s
					} = t;
					const o = Object(r.d)(i, s, n),
						d = e.moderators.userOrder.data[i] && e.moderators.userOrder.data[i][o];
					return d ? d.map(t => e.moderators.models[i][t]) : []
				}),
				f = (e, t) => {
					let {
						subredditId: i,
						beforeEditable: n,
						afterEditable: s
					} = t;
					const o = Object(r.d)(i, s, n),
						d = e.moderators.editableUserOrder.data[i] && e.moderators.editableUserOrder.data[i][o];
					return d ? d.map(t => e.moderators.editableModerators[i][t]) : []
				},
				g = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.moderators.editableModerators[i] || null
				},
				b = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.moderators.models[i] || null
				},
				w = e => e.moderators.search.api.pending,
				y = e => e.moderators.search.result,
				v = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.moderators.invitePending[i]
				},
				T = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.moderators.loadMoreModerators[i] && e.moderators.loadMoreModerators[i].after
				},
				S = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.moderators.loadMoreModerators[i] && e.moderators.loadMoreModerators[i].before
				},
				E = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.moderators.loadMoreEditableModerators[i] && e.moderators.loadMoreEditableModerators[i].after
				},
				F = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.moderators.loadMoreEditableModerators[i] && e.moderators.loadMoreEditableModerators[i].before
				},
				I = (e, t) => {
					const i = Object(r.d)(t.subredditId, t.after, t.before);
					return e.moderators.userOrder.api.pending[i]
				},
				O = (e, t) => {
					const i = Object(r.d)(t.subredditId, t.afterEditable, t.beforeEditable);
					return e.moderators.editableUserOrder.api.pending[i]
				},
				j = Object(n.a)((e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.moderators.invitedModerators.userOrder[i];
					return n ? n.map(t => e.moderators.invitedModerators.models[i][t]) : o
				}),
				B = Object(n.a)((e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.muted.userOrder[i];
					return n ? n.map(t => e.muted.models[i][t]) : o
				}),
				x = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = Object(r.d)(i);
					return e.muted.api.pending[n]
				},
				R = e => e.muted.search.api.pending,
				k = e => e.muted.search.result,
				C = e => e.muted.inContext,
				N = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.muted.loadMore[i]
				},
				P = e => e.approvedSubmitters.search.api.pending,
				L = e => e.approvedSubmitters.search.result,
				A = Object(n.a)((e, t) => {
					let {
						subredditId: i
					} = t;
					const n = e.approvedSubmitters.userOrder[i];
					return n ? n.map(t => e.approvedSubmitters.models[i][t]) : o
				}),
				D = (e, t) => {
					let {
						subredditId: i
					} = t;
					return e.approvedSubmitters.loadMore[i]
				},
				G = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = Object(r.d)(i);
					return e.approvedSubmitters.api.pending[n]
				},
				M = e => !!Object(s.H)(e) && e.modModeEnabled
		},
		"./src/reddit/selectors/subredditSettings.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var n = i("./node_modules/reselect/es/index.js"),
				r = i("./src/reddit/selectors/user.ts");
			const s = Object(n.a)(r.i, e => e.subreddits.settings, (e, t) => {
				if (e && e.profileId) return t[e.profileId]
			})
		},
		"./src/reddit/selectors/subscriptions.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "a", (function() {
				return u
			})), i.d(t, "b", (function() {
				return c
			}));
			var n = i("./node_modules/reselect/es/index.js"),
				r = i("./src/reddit/constants/posts.ts"),
				s = i("./src/lib/objectSelector/index.ts");
			const o = e => e.subscriptions.api.fetched,
				d = Object(s.a)(e => {
					const {
						profileOrder: t,
						subredditOrder: i
					} = e.subscriptions;
					return [...i, ...t]
				}),
				l = (Object(s.a)(e => {
					const {
						profileOrder: t,
						subredditOrder: i
					} = e.subscriptions, n = t ? t.map(e => ({
						id: e,
						type: r.a.PROFILE
					})) : [];
					return (i ? i.map(e => ({
						id: e,
						type: r.a.SUBREDDIT
					})) : []).concat(n)
				}), Object(s.a)(Object(n.a)(e => e.subreddits.models, e => e.subscriptions.subredditOrder, (e, t) => {
					if (!t || !t.length) return [];
					const i = [];
					for (const n of t) e[n] && i.push(e[n]);
					return i
				}))),
				a = Object(s.a)(Object(n.a)(e => e.profiles.models, e => e.subscriptions.profileOrder, (e, t) => {
					if (!t || !t.length) return [];
					return t.map(t => e[t])
				})),
				u = e => e.subscriptions.favoriteSubredditOrder,
				c = (Object(s.a)(e => {
					const {
						favoriteSubredditOrder: t,
						favoriteProfileOrder: i
					} = e.subscriptions, n = e.subreddits.models, r = e.profiles.models, s = t ? t.map(e => n[e]) : [], o = i ? i.map(e => r[e]) : [];
					return s.concat(o)
				}), Object(n.a)(e => e.subscriptions.profileOrder, e => e.subscriptions.subredditOrder, (e, t) => e.length + t.length))
		},
		"./src/reddit/selectors/telemetry.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "getPageTypeFromRouteMatch", (function() {
				return ne
			})), i.d(t, "getRelativePostOrder", (function() {
				return oe
			})), i.d(t, "getAbsoluteOrder", (function() {
				return de
			})), i.d(t, "actionInfo", (function() {
				return le
			})), i.d(t, "chatPostActionInfo", (function() {
				return ae
			})), i.d(t, "previousPageActionInfo", (function() {
				return ue
			})), i.d(t, "app", (function() {
				return ce
			})), i.d(t, "getCommentSortType", (function() {
				return _e
			})), i.d(t, "comment", (function() {
				return me
			})), i.d(t, "userSubreddit", (function() {
				return he
			})), i.d(t, "defaults", (function() {
				return fe
			})), i.d(t, "experiment", (function() {
				return ge
			})), i.d(t, "mediaActionInfo", (function() {
				return be
			})), i.d(t, "videoCorrelationId", (function() {
				return we
			})), i.d(t, "poll", (function() {
				return Te
			})), i.d(t, "post", (function() {
				return Se
			})), i.d(t, "currentPost", (function() {
				return Ee
			})), i.d(t, "listing", (function() {
				return Fe
			})), i.d(t, "profileComments", (function() {
				return Ie
			})), i.d(t, "media", (function() {
				return Oe
			})), i.d(t, "videoPlayerMaxTimeServed", (function() {
				return je
			})), i.d(t, "videoPlayerFirstFrameTimer", (function() {
				return Be
			})), i.d(t, "profileById", (function() {
				return xe
			})), i.d(t, "profileByPostOrCommentId", (function() {
				return Re
			})), i.d(t, "referrer", (function() {
				return ke
			})), i.d(t, "screen", (function() {
				return Ce
			})), i.d(t, "session", (function() {
				return Ne
			})), i.d(t, "customFeed", (function() {
				return Pe
			})), i.d(t, "customFeedByPath", (function() {
				return Le
			})), i.d(t, "profile", (function() {
				return Ae
			})), i.d(t, "subreddit", (function() {
				return De
			})), i.d(t, "subredditById", (function() {
				return Ge
			})), i.d(t, "subredditByName", (function() {
				return Me
			})), i.d(t, "subredditByPostOrCommentId", (function() {
				return Ue
			})), i.d(t, "timer", (function() {
				return qe
			})), i.d(t, "user", (function() {
				return He
			})), i.d(t, "widget", (function() {
				return Ve
			})), i.d(t, "request", (function() {
				return We
			})), i.d(t, "requestWithParams", (function() {
				return ze
			})), i.d(t, "adblock", (function() {
				return Ke
			})), i.d(t, "domTimer", (function() {
				return Qe
			})), i.d(t, "oauth", (function() {
				return Je
			})), i.d(t, "numberChannels", (function() {
				return Ye
			})), i.d(t, "channel", (function() {
				return Xe
			})), i.d(t, "SearchDropdownNouns", (function() {
				return Ze
			})), i.d(t, "StructureType", (function() {
				return $e
			})), i.d(t, "OriginElement", (function() {
				return et
			})), i.d(t, "search", (function() {
				return tt
			})), i.d(t, "discoveryUnit", (function() {
				return it
			})), i.d(t, "smartSearch", (function() {
				return nt
			})), i.d(t, "metaSearch", (function() {
				return rt
			})), i.d(t, "postFlairClickToSearch", (function() {
				return st
			})), i.d(t, "currentProfileModelSelector", (function() {
				return ot
			})), i.d(t, "notification", (function() {
				return dt
			})), i.d(t, "postEventI13nSelector", (function() {
				return lt
			})), i.d(t, "postCollectionI13nByCollectionIdSelector", (function() {
				return ut
			})), i.d(t, "postCollectionI13nSelector", (function() {
				return ct
			})), i.d(t, "topicMetadata", (function() {
				return mt
			})), i.d(t, "topicMetaSearch", (function() {
				return pt
			})), i.d(t, "topicFields", (function() {
				return ht
			}));
			i("./node_modules/core-js/modules/es6.regexp.split.js"), i("./node_modules/core-js/modules/es6.array.sort.js"), i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = i("./node_modules/js-cookie/src/js.cookie.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/trimStart.js"),
				o = i.n(s),
				d = i("./node_modules/lodash/values.js"),
				l = i.n(d),
				a = i("./node_modules/reselect/es/index.js"),
				u = i("./node_modules/node-libs-browser/node_modules/url/url.js"),
				c = i.n(u),
				_ = i("./src/config.ts"),
				m = i("./src/lib/constants/index.ts"),
				p = i("./src/lib/constants/cookie.ts"),
				h = i("./src/lib/eventTools/index.ts"),
				f = i("./src/lib/isAdHocMultireddit/index.ts"),
				g = i("./src/lib/isFakeSubreddit/index.ts"),
				b = i("./src/reddit/constants/adEvents.ts"),
				w = i("./src/reddit/constants/blade.ts"),
				y = i("./src/reddit/constants/chat.ts"),
				v = i("./src/reddit/constants/wiki.ts"),
				T = i("./src/reddit/contexts/PageLayer/index.tsx"),
				S = i("./src/reddit/helpers/dom/index.ts");
			const E = () => !document.getElementById(_.a.adblockId);
			let F;
			(F = document.createElement("div")).className = "promotedlink", F.style.height = F.style.width = "1px", F.style.position = "absolute", F.style.left = "-1000000px", F.style.display = "block", document.body.appendChild(F);
			const I = () => E() ? !S.h(F) : null;
			var O = i("./src/reddit/helpers/correlationIdTracker.ts"),
				j = i("./src/reddit/constants/posts.ts"),
				B = i("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				x = i("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				R = i("./src/reddit/helpers/getRichTextContent/index.ts"),
				k = i("./src/reddit/helpers/isPost.ts"),
				C = i("./src/reddit/helpers/postCollection.ts"),
				N = i("./src/reddit/helpers/postEvent.ts"),
				P = i("./src/reddit/models/Media/index.ts"),
				L = i("./src/reddit/models/Post/index.ts"),
				A = i("./src/reddit/models/Profile/index.ts"),
				D = i("./src/reddit/selectors/experiments/index.ts"),
				G = i("./src/reddit/selectors/experiments/chatPost.ts"),
				M = i("./src/reddit/selectors/listings.ts"),
				U = i("./src/reddit/selectors/platform.ts"),
				q = i("./src/reddit/selectors/postCollection.ts"),
				H = i("./src/reddit/selectors/posts.ts"),
				V = i("./src/reddit/selectors/profile.ts"),
				W = i("./src/reddit/selectors/profileComments.ts"),
				z = i("./src/reddit/models/Multireddit/index.ts"),
				K = i("./src/reddit/models/User/index.ts"),
				Q = i("./src/reddit/selectors/multireddit.ts"),
				J = i("./src/reddit/selectors/structuredStyles.ts"),
				Y = i("./src/reddit/selectors/subreddit.ts"),
				X = i("./src/reddit/selectors/subredditChannel.ts"),
				Z = i("./src/reddit/selectors/subredditSettings.ts"),
				$ = i("./src/reddit/selectors/topic.ts"),
				ee = i("./src/reddit/selectors/user.ts"),
				te = i("./src/server/helpers/seoMetadata.tsx"),
				ie = i("./src/telemetry/models/Timer.ts");
			const ne = e => {
					switch (e.route && e.route.meta && e.route.meta.name) {
						case m.zb.INDEX:
							return "home";
						case m.zb.PROFILE_OVERVIEW:
							return "profile_overview";
						case m.zb.PROFILE_COMMENTS:
							return "profile_comments";
						case m.zb.PROFILE_POSTS:
							return "profile_posts";
						case m.zb.PROFILE:
						case m.zb.PROFILE_BETA_CONFIRMATION:
						case m.zb.PROFILE_MODERATION:
						case m.zb.PROFILE_POST_COMMENTS:
						case m.zb.PROFILE_PRIVACY:
						case m.zb.PROFILE_SETTINGS:
							return "profile";
						case m.zb.PROFILE_PRIVATE: {
							const {
								listingType: t
							} = e.match.params;
							switch (t) {
								case A.a.Downvoted:
									return "profile_downvoted";
								case A.a.Hidden:
									return "profile_hidden";
								case A.a.Upvoted:
									return "profile_upvoted";
								case A.a.Saved:
									return "profile_saved";
								case A.a.ReceivedGildings:
									return "profile_gilded";
								case A.a.GivenGildings:
									return "profile_gilded_given"
							}
							break
						}
						case m.zb.COMMENTS:
						case m.zb.DUPLICATES:
							return e.match.params.partialCommentId ? "single_comment_thread" : "post_detail";
						case m.zb.LISTING:
						case m.zb.SUBREDDIT: {
							const {
								subredditName: t
							} = e.match.params;
							if (!t) return "home";
							if (Object(g.a)(t) && Object(f.a)(t)) return "custom_feed";
							switch (t.toLowerCase()) {
								case "popular":
									return "popular";
								case "all":
									return "all";
								default:
									return "community"
							}
						}
						case m.zb.SUBREDDIT_SETTINGS:
							return "subreddit_settings";
						case m.zb.POST_CREATION:
							return e.match.queryParams && e.match.queryParams.source_id ? "crosspost_submit" : "post_submit";
						case m.zb.SEARCH_RESULTS:
							return "search_results";
						case m.zb.MODERATION_PAGES: {
							const t = e.match.params.pageName;
							return "scheduledposts" === t ? "scheduled_posts" : "eventposts" === t ? "event_posts" : "moderation_pages_".concat(t)
						}
						case m.zb.MODQUEUE_PAGES: {
							const t = e.match.params.pageName;
							return "modqueue" === t ? "modqueue_queue" : "modqueue_".concat(t)
						}
						case m.zb.MULTIREDDIT:
							return "custom_feed";
						case m.zb.POST_DRAFT:
							return "draft_detail";
						case m.zb.PUBLIC_ACCESS_NETWORK:
							return "stream_player";
						case m.zb.EXPLORE:
							return "explore";
						case m.zb.MOD_LISTING:
							return "r_mod";
						case m.zb.SUBREDDIT_CREATION:
							return "subreddit_creation";
						case m.zb.SUBREDDIT_WIKI:
							return "subreddit_wiki";
						case m.zb.SETTINGS: {
							const t = e.match.params.page;
							return t ? "settings_".concat(t) : "settings_account"
						}
						case m.zb.META_MEMBERSHIP_PAYWALL_PAGE:
							return "special_membership_paywall";
						case m.zb.SUBREDDIT_LEADERBOARD:
							return "leaderboard";
						case m.zb.TOPIC:
							return "topic";
						case m.zb.GEOTAGGING:
							return "crowdsource_feed_geo";
						default:
							return
					}
				},
				re = e => {
					const t = e.routeMatch;
					return ne(t)
				},
				se = e => {
					if (e.isMeta) return "poll";
					if (!e.media) return "link";
					if (Object(L.i)(e)) return "stream";
					switch (e.media.type) {
						case "gifvideo":
							return "gif";
						case "embed":
							return "link";
						default:
							return e.media.type
					}
				},
				oe = (e, t, i) => {
					const n = e.listings.postOrder.ids[i];
					return n.indexOf(t) >= 0 ? n.indexOf(t) : null
				},
				de = (e, t, i) => {
					const n = e.listings.postOrder.ids[i];
					return n.indexOf(t) >= 0 ? n.indexOf(t) + m.gb : null
				},
				le = (e, t) => Object.assign({
					pageType: e.platform.currentPage ? re(e.platform.currentPage) : void 0
				}, t),
				ae = e => {
					const t = Object(U.f)(e),
						i = !!t && Object(G.a)(e, {
							subredditId: t.id
						});
					return le(e, {
						type: i ? "chat_enabled" : void 0
					})
				},
				ue = (e, t) => Object.assign({
					pageType: e.platform.lastPage ? re(e.platform.lastPage) : void 0
				}, t),
				ce = () => ({
					name: _.a.telemetry.appName.redesign
				}),
				_e = (e, t) => {
					if (e.platform.currentPage) {
						const {
							sortToUse: i
						} = Object(B.a)(e, t);
						if (i === m.r.CHAT) return m.u.Chat
					}
					return m.u.Comment
				},
				me = (e, t) => {
					const i = e.comments.models[t];
					if (i) {
						const {
							awardCountsById: t
						} = i, n = t ? Object.keys(t).reduce((e, i) => e + t[i], 0) : null;
						return {
							id: i.id,
							postId: i.postId,
							parentId: i.parentId,
							bodyText: Object(R.a)(i),
							authorId: i.authorId,
							numberGildings: n,
							score: i.score,
							created: i.created,
							type: _e(e, i.postId)
						}
					}
					return null
				},
				pe = e => {
					let t = !1;
					return Object.keys(e).forEach(i => {
						e[i] && (t = !0)
					}), t
				},
				he = e => {
					const t = Object(U.f)(e),
						i = t && e.moderatingSubreddits[t.id];
					let n;
					if (Object(ee.H)(e) && t) {
						const i = e.subscriptions.subredditOrder.includes(t.id),
							r = e.subreddits.about[t.id] && e.subreddits.about[t.id].userIsSubscriber;
						n = i || r
					} else n = null;
					return {
						isMod: !!i,
						modAccess: i ? i.access : null,
						modConfig: i ? i.config : null,
						modFlair: i ? i.flair : null,
						modFull: i ? i.all : null,
						modMail: i ? i.mail : null,
						modNone: i ? !pe(i) : null,
						modPost: i ? i.posts : null,
						modWiki: i ? i.wiki : null,
						isSubscriber: n
					}
				},
				fe = e => Object.assign({
					actionInfo: le(e),
					app: ce(),
					referrer: ke(e),
					request: We(e),
					session: Ne(e),
					screen: Ce(e),
					user: He(e)
				}, ht(e)),
				ge = (e, t) => {
					const i = Object(D.c)(e, {
							experimentName: t
						}),
						n = Object(D.b)(e, {
							experimentName: t
						});
					if (!i) return n ? {
						id: -1,
						isOverride: !0,
						name: t,
						variant: n,
						version: "-1"
					} : null;
					const r = void 0 !== n,
						s = r ? n : i.variant;
					return s ? Object.assign({}, i, {
						isOverride: r,
						variant: s
					}) : null
				},
				be = (e, t) => {
					const i = e.posts.video.fullscreen,
						n = e.platform.currentPage ? re(e.platform.currentPage) : void 0;
					return {
						pageType: i === t ? "fullscreen" : n
					}
				},
				we = () => Object(O.c)(O.a.VideoView),
				ye = new Map,
				ve = e => {
					let {
						state: t,
						post: i
					} = e;
					const n = Object(M.a)(t);
					if (!n) return;
					let r;
					ye.has(n) ? r = ye.get(n) : (ye.set(n, new Map), (r = ye.get(n)).set("postIdToDistanceFromAdMapping", new Map));
					const s = r.get("postIdToDistanceFromAdMapping");
					if (s.has(i.id)) return s.get(i.id);
					const o = t.listings.postOrder.ids[n];
					if (!o) return;
					const d = r.get("lastPostIndex");
					let l = r.get("lastAdIndex"),
						a = d ? d + 1 : 0;
					for (; a < o.length; a += 1) {
						const e = t.posts.models[o[a]];
						if (e && !e.hidden && !e.isBlank) {
							const t = l ? a - l - 1 : void 0;
							s.set(e.id, t), e.isSponsored && (l = a)
						}
					}
					return r.set("lastPostIndex", a), r.set("lastAdIndex", l), s.get(i.id)
				},
				Te = (e, t, i, n) => {
					const r = e.polls.models[t];
					if (r) return Object.assign({
						options: r.options.map(e => e.text.substring(0, 80)),
						optionsLength: r.options.length
					}, i && void 0 !== n ? {
						userVote: n
					} : void 0)
				},
				Se = (e, t, i) => {
					const n = e.posts.models[t] || e.comments.models[t] && e.posts.models[e.comments.models[t].postId];
					if (n) {
						const {
							source: t
						} = n, r = _e(e, n.id), s = n.events.find(e => e.type === b.a.Impression), o = s && s.url.match(/\?q=([^&]+)/);
						return {
							commentType: r,
							contentDuration: i || void 0,
							createdTimestamp: n.created,
							domain: n.domain,
							id: n.postId,
							nsfw: n.isNSFW,
							score: n.score,
							spoiler: n.isSpoiler,
							title: n.title,
							type: se(n),
							upvoteRatio: n.upvoteRatio ? n.upvoteRatio : void 0,
							url: t ? t.url : void 0,
							promoted: n.isSponsored,
							impressionId: o ? o[1] : void 0,
							numberPostsFromAd: ve({
								state: e,
								post: n
							})
						}
					}
					if (Object(k.a)(t)) {
						return {
							id: t,
							commentType: _e(e, t)
						}
					}
					return null
				},
				Ee = e => {
					const t = Object(x.a)(e);
					return t ? Se(e, t.id) : null
				},
				Fe = (e, t, i) => {
					const n = t && e.listings.postOrder.ids[t];
					return {
						depth: i && i.depth,
						length: n ? n.length : void 0,
						links: n ? n.map(t => e.posts.models[t].id) : void 0,
						oldSort: i && i.oldSort,
						sort: i && i.sort,
						sortTime: i && i.sortTime || void 0,
						source: i && i.source
					}
				},
				Ie = (e, t) => {
					const i = Object(W.f)(e, {
						listingKey: t
					});
					return i ? {
						length: i.length,
						links: i.map(t => e.comments.models[t].id)
					} : null
				},
				Oe = (e, t, i) => {
					const n = e.posts.models[t];
					if (void 0 === n) return null;
					const r = {};
					if (r.id = n.postId, n.media && "v.redd.it" === n.domain) {
						const e = Object(P.y)(n.media);
						e && (r.id = e)
					}
					if (i) r.loadTime = i;
					else {
						const i = e.posts.video.loadTimes[t];
						i && i.start && i.playable && (r.loadTime = Math.round(i.playable - i.start))
					}
					const s = e.posts.video.metadata[t];
					s && s.id === t && (r.height = s.originalHeight, r.width = s.originalWidth, r.orientation = r.height > r.width ? "portrait" : "landscape", r.duration = s.length);
					const o = e.posts.video.time[t];
					return o && (r.time = Math.round(o.currentTime)), r
				},
				je = (e, t) => {
					if (void 0 === e.posts.models[t]) return null;
					const i = {},
						n = e.posts.video.time[t];
					return n && (i.maxTimeServed = Math.round(n.maxTimeServed)), i
				},
				Be = (e, t) => {
					if (void 0 === e.posts.models[t]) return;
					const i = {
							type: ie.TimerType.VideoFirstFrame
						},
						n = e.posts.video.loadTimes[t];
					return n && n.start && (n.playable ? i.millis = Math.round(n.playable - n.start) : i.millis = Math.round(performance.now() - n.start)), i
				},
				xe = (e, t) => {
					const i = e.profiles.models[t];
					return i && {
						id: i.id,
						name: i.name
					}
				},
				Re = (e, t) => {
					const i = e.posts.models[t],
						n = e.comments.models[t];
					return i ? xe(e, i.belongsTo.id) : n ? xe(e, n.subredditId) : null
				},
				ke = e => {
					let t = e.platform.currentPage ? e.platform.referrers[e.platform.currentPage.key] : null;
					if (t) {
						let {
							hostname: i
						} = c.a.parse(t);
						if (!i || t.startsWith("/")) {
							let n = e.meta.protocol;
							i = e.meta.domain, n && i || (n = window.location.protocol, i = window.location.hostname), n = n.endsWith(":") ? n : "".concat(n, ":"), t = "".concat(n, "//").concat(i).concat(t)
						}
						return {
							domain: i,
							url: t
						}
					}
					return null
				},
				Ce = (e, t) => {
					const i = Object(T.N)(e, {});
					let n;
					Object(U.g)(e) && (n = Object(U.h)(e) ? "lightbox" : "post_detail");
					let r = "default";
					return e.user && e.user.prefs && e.user.prefs.nightmode && (r = "nightmode"), {
						layout: i,
						viewType: n,
						scrollPosition: t,
						theme: r
					}
				},
				Ne = e => {
					const t = r.a.get(p.f),
						i = (e.user.sessionTracker || t).split("."),
						n = i[0],
						s = parseInt(i[2], 10);
					let o = {};
					const {
						sessionReferrer: d
					} = e.platform;
					if (d) {
						const {
							hostname: e
						} = c.a.parse(d);
						o = {
							referrerDomain: e,
							referrerUrl: d
						}
					}
					return Object.assign({
						id: n,
						createdTimestamp: s
					}, o)
				},
				Pe = e => {
					const {
						pageType: t
					} = le(e);
					if (!e.platform.currentPage) return null;
					if ("custom_feed" === t) {
						const {
							multiredditName: t,
							username: i
						} = e.platform.currentPage.urlParams;
						return Le(e, Object(z.h)(i, t))
					}
					return null
				},
				Le = (e, t) => {
					const i = Object(Q.e)(e, t);
					return i ? {
						id: "/user/".concat(i.ownerId, "/m/").concat(i.name, "/"),
						isNsfw: i.isNSFW,
						numberFollowers: i.followerCount,
						numberSubreddits: i.subredditCount,
						ownerId: i.ownerId,
						visibility: i.visibility
					} : null
				},
				Ae = e => {
					const {
						pageType: t
					} = le(e);
					if (!e.platform.currentPage) return null;
					if (t && t.includes("profile")) {
						const {
							profileName: t
						} = e.platform.currentPage.urlParams;
						if (t) {
							const i = t.toLowerCase(),
								n = Object(V.m)(e, i);
							return n ? {
								id: n,
								name: i,
								type: "default"
							} : null
						}
					} else if ("post_detail" === t) {
						const {
							subredditName: t
						} = e.platform.currentPage.urlParams;
						if (t) {
							const i = t.toLowerCase(),
								n = Object(V.m)(e, i),
								r = xe(e, n);
							return r && r.name && r.name.toLowerCase() === i ? {
								id: n,
								name: i,
								type: "default"
							} : null
						}
					}
					return null
				},
				De = e => {
					const {
						pageType: t
					} = le(e);
					if (!e.platform.currentPage) return null;
					if ("post_submit" === t) {
						const t = e.platform.currentPage.urlParams.subredditName;
						if (t) {
							const i = t.toLowerCase(),
								n = Object(Y.E)(e, i),
								r = Object(Y.Q)(e, {
									subredditId: n
								}),
								s = e.subreddits.about[n];
							return n && r ? {
								id: n,
								name: i,
								numberCoins: s ? s.coins : 0
							} : null
						}
						return null
					}
					if ("community" === t || "subreddit_settings" === t || "subreddit_wiki" === t || "special_membership_paywall" === t || t && t.includes("moderation_pages")) {
						let i = e.platform.currentPage.urlParams.subredditName;
						i || "subreddit_wiki" !== t || (i = v.e), i = i.toLowerCase();
						const n = Object(Y.E)(e, i),
							r = Object(Y.Q)(e, {
								subredditId: n
							}),
							s = e.subreddits.about[n];
						return n && r ? {
							id: n,
							name: i,
							numberCoins: s ? s.coins : 0
						} : null
					}
					if ("post_detail" === t || "single_comment_thread" === t) {
						if (e.platform.currentPage.urlParams.subredditName) {
							const t = e.platform.currentPage.urlParams.subredditName.toLowerCase(),
								i = Object(Y.E)(e, t),
								n = Object(Y.Q)(e, {
									subredditId: i
								}),
								r = e.subreddits.about[i];
							return i && n ? {
								id: i,
								name: t,
								numberCoins: r ? r.coins : 0
							} : null
						} {
							const {
								partialPostId: t
							} = e.platform.currentPage.urlParams, i = Object(L.m)(t), n = e.posts.models[i];
							if (!n) return null;
							const r = ((e, t) => {
								const {
									type: i,
									id: n
								} = t;
								return i === j.a.PROFILE ? e.profiles.models[n] : e.subreddits.models[n]
							})(e, n.belongsTo);
							if (!r) return null;
							const s = e.subreddits.about[r.id];
							return {
								id: r.id,
								name: r.name.toLowerCase(),
								numberCoins: s ? s.coins : 0
							}
						}
					}
					if ("search_results" === t) {
						if ("string" != typeof e.platform.currentPage.urlParams.subredditName) return null;
						const t = e.platform.currentPage.urlParams.subredditName.toLowerCase(),
							i = Object(Y.E)(e, t),
							n = Object(Y.Q)(e, {
								subredditId: i
							}),
							r = e.subreddits.about[i];
						return i && n ? {
							id: i,
							name: t,
							numberCoins: r ? r.coins : 0
						} : null
					}
					if ("stream_player" === t) {
						const t = e.platform.currentPage.urlParams.subreddit;
						if (!t) return null;
						const i = Object(Y.E)(e, t.toLowerCase()),
							n = Object(Y.Q)(e, {
								subredditId: i
							}),
							r = e.subreddits.about[i];
						return n && i ? {
							id: i,
							name: t,
							numberCoins: r ? r.coins : 0
						} : null
					}
					return null
				},
				Ge = (e, t) => {
					const i = e.subreddits.models[t],
						n = e.subreddits.about[t];
					return i && {
						id: i.id,
						name: i.name.toLowerCase(),
						numberCoins: n ? n.coins : 0
					}
				},
				Me = (e, t) => {
					const i = Object(Y.E)(e, t),
						n = Object(Y.Q)(e, {
							subredditId: i
						}),
						r = e.subreddits.about[n.id];
					return n && {
						id: n.id,
						name: n.name.toLowerCase(),
						numberCoins: r ? r.coins : 0
					}
				},
				Ue = (e, t) => {
					const i = e.posts.models[t],
						n = e.comments.models[t];
					return i ? Ge(e, i.belongsTo.id) : n ? Ge(e, n.subredditId) : null
				},
				qe = (e, t) => e && t ? {
					type: e,
					millis: t
				} : null,
				He = Object(a.a)(ee.i, e => e.user.loid, ee.q, (e, t, i) => Object.assign({
					id: e ? e.id : t.loid ? "".concat(m.wb.Account, "_").concat(o()(t.loid, "0")) : null,
					isAdmin: !!e && e.isEmployee,
					isLoggedIn: !!e,
					cookieCreatedTimestamp: parseInt(t.loidCreated) || null,
					createdTimestamp: e ? 1e3 * e.created : null
				}, e ? {
					hasPremium: e.isGold,
					isPremiumSubscriber: i,
					numberCoins: e.coins || 0,
					numberPremiumDaysRemaining: e.goldExpiration ? Math.max(Math.ceil((1e3 * e.goldExpiration - Date.now()) / m.w), 0) : 0
				} : null)),
				Ve = (e, t) => {
					let {
						subredditId: i,
						widgetKind: n
					} = t;
					const r = {
							targetSubredditId: i
						},
						s = e.subreddits.models[i];
					s && s.name && (r.targetSubredditName = s.name);
					const o = n && w.i[n];
					return o && (r.type = o), r
				},
				We = e => {
					const t = e.meta.domain,
						i = e.platform.currentPage ? "".concat(e.meta.protocol, "://").concat(t).concat(e.platform.currentPage.url) : void 0,
						n = Object(te.a)(e) || void 0,
						r = e.meta.userAgent ? e.meta.userAgent : void 0;
					return {
						base_url: i,
						canonical_url: n,
						domain: t,
						reddaid: e.user.reddaid,
						user_agent: r
					}
				},
				ze = e => {
					const t = e.platform.currentPage ? e.platform.currentPage.url.split("?") : [],
						[i, n] = t,
						{
							domain: r,
							protocol: s
						} = e.meta,
						o = s && r && i ? "".concat(s, "://").concat(r).concat(i) : void 0,
						d = Object(te.a)(e) || void 0,
						l = e.meta.userAgent ? e.meta.userAgent : void 0;
					return {
						base_url: o,
						canonical_url: d,
						domain: r,
						reddaid: e.user.reddaid,
						user_agent: l,
						parameters: n
					}
				},
				Ke = e => ({
					enabled: E(),
					acceptableAds: I()
				}),
				Qe = e => ({}),
				Je = e => ({}),
				Ye = e => {
					const t = l()(e.subredditChannels.models);
					return {
						number_channels: t && t.length
					}
				},
				Xe = (e, t) => {
					const i = Object(X.c)(e, t);
					if (!i) return null;
					const {
						type: n,
						membersCount: r,
						channelSendbirdUrl: s
					} = i;
					return {
						id: s,
						type: y.e[n],
						number_members: r
					}
				};
			var Ze, $e, et;
			! function(e) {
				e.Recent = "recent_search", e.Trending = "trending_search", e.TypeaheadSubreddit = "search_results_subreddit", e.TypeaheadProfile = "search_results_profile"
			}(Ze || (Ze = {})),
			function(e) {
				e.Recent = "history", e.Search = "search", e.Topics = "topics", e.Trending = "trending", e.PromotedTrend = "promoted_trend"
			}($e || ($e = {})),
			function(e) {
				e.SearchBar = "search_bar"
			}(et || (et = {}));
			const tt = (e, t) => {
					let i, n;
					if (t.eventType && t.id) {
						let r;
						switch (t.eventType) {
							case "subreddit":
								r = Ge(e, t.id);
								break;
							case "post":
								r = Ue(e, t.id);
								break;
							case "profile":
								r = xe(e, t.id)
						}
						r && (i = r.name, n = r.id)
					}
					return {
						originPageType: e.platform.currentPage ? re(e.platform.currentPage) : void 0,
						query: t.q ? decodeURIComponent(t.q) : t.q,
						range: t.t,
						sort: t.sort,
						structureType: t.structureType,
						subredditId: n,
						subredditName: i
					}
				},
				it = e => ({
					id: e.name,
					name: e.name,
					type: e.type
				}),
				nt = (e, t) => {
					const i = e.platform.currentPage ? re(e.platform.currentPage) : void 0;
					return {
						originElement: et.SearchBar,
						originPageType: i,
						query: t.searchQuery,
						typeaheadActive: !0
					}
				},
				rt = e => ({
					displayQuery: e.displayQuery,
					rawQuery: e.rawQuery,
					structureType: e.structureType,
					sort: e.sort,
					range: e.t,
					subredditId: e.subredditId,
					subredditName: e.subredditName,
					postFlairName: e.postFlairName,
					metaFlairId: e.metaFlairId,
					metaFlairName: e.metaFlairName
				}),
				st = (e, t) => {
					let i, n;
					if (t.eventType && t.id) {
						let r;
						switch (t.eventType) {
							case "subreddit":
								r = Ge(e, t.id);
								break;
							case "post":
								r = Ue(e, t.id);
								break;
							case "profile":
								r = xe(e, t.id)
						}
						r && (i = r.name, n = r.id)
					}
					const r = e.platform.currentPage ? re(e.platform.currentPage) : void 0,
						s = {
							originElement: t.originElement,
							originPageType: r,
							subredditName: i,
							subredditId: n
						};
					return t.postFlairName ? s.postFlairName = t.postFlairName : t.metaFlairName && (s.metaFlairName = t.metaFlairName), s
				},
				ot = Object(a.a)(ee.i, e => e, (e, t) => {
					if (!e || !e.profileId) return;
					const i = Object(V.i)(t, e.profileId),
						n = Object(V.g)(t, e.profileId),
						r = Object(J.n)(t, e.profileId),
						s = Object(Z.a)(t),
						o = Object(ee.kb)(t),
						d = r && r.bannerBackgroundImage;
					return {
						id: e.id,
						name: Object(K.e)(e),
						type: "default",
						display_name: i ? i.title : void 0,
						about: n ? n.publicDescription : void 0,
						avatar_url: e.accountIcon,
						cover_url: "string" == typeof d ? d : void 0,
						nsfw: i ? i.isNSFW : void 0,
						content_visible: s ? s.contentVisible : void 0,
						communities_visible: o ? o.showActiveCommunities : void 0
					}
				}),
				dt = (e, t, i) => {
					const n = {};
					return n.id = t, n.type = i ? i.toLowerCase() : void 0, n
				},
				lt = (e, t) => {
					let i, {
						postId: n
					} = t;
					const r = Object(H.O)(e, {
						postId: n
					});
					if (r && Object(N.a)(r) && r.eventInfo) {
						const {
							eventStart: e,
							eventEnd: t
						} = r.eventInfo;
						i = {
							eventState: Object(h.e)(e, t),
							eventStartTimestamp: e,
							eventEndTimestamp: t
						}
					} else i = void 0;
					return i
				},
				at = e => {
					if (!e) return;
					const {
						id: t,
						title: i,
						author: n,
						postIds: r
					} = e;
					return {
						id: t,
						title: i,
						authorId: n || "",
						postIds: r,
						displayLayout: Object(q.f)(e).toLowerCase()
					}
				},
				ut = (e, t) => {
					let {
						collectionId: i
					} = t;
					return at(Object(q.r)(e, {
						collectionId: i
					}))
				},
				ct = (e, t) => {
					let {
						postId: i
					} = t;
					const n = Object(H.O)(e, {
						postId: i
					});
					if (n && Object(C.a)(n)) {
						const t = Object(q.o)(e, {
							postId: i
						});
						return t ? at(t) : void 0
					}
				},
				_t = e => {
					const t = e.platform.currentPage && e.platform.currentPage.urlParams.topicSlug;
					return t && Object($.a)(e, {
						topicSlug: t
					})
				},
				mt = Object(a.a)(_t, e => e ? Object.assign({
					id: e.id
				}, e.namePlural && {
					displayName: e.namePlural
				}) : null),
				pt = Object(a.a)(_t, e => e ? {
					range: "all",
					sort: m.Jb.Relevance,
					structureType: $e.Topics
				} : null),
				ht = Object(a.a)(mt, pt, e => e.platform.currentPage && re(e.platform.currentPage), (e, t, i) => "topic" === i ? {
					metaSearch: t,
					topicMetadata: e
				} : null)
		},
		"./src/reddit/selectors/topic.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "d", (function() {
				return _
			})), i.d(t, "b", (function() {
				return m
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/reselect/es/index.js"),
				s = i("./src/reddit/selectors/subreddit.ts");
			const o = Object(r.a)(e => e.topics.models, e => {
					const t = {};
					for (const i of Object.keys(e)) {
						const n = e[i];
						t[n.slug.toLowerCase()] = n.id
					}
					return t
				}),
				d = (e, t) => {
					let {
						topicSlug: i
					} = t;
					return e.topics.models[((e, t) => t ? o(e)[t.toLowerCase()] : void 0)(e, i)]
				},
				l = function(e, t) {
					let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = d(e, {
						topicSlug: t
					});
					if (!n) return "";
					const r = i ? n.name : n.namePlural;
					return r || ""
				},
				a = [],
				u = Object(r.a)(d, s.X, (e, t) => e ? e.subredditIds.map(e => t[e]) : a),
				c = (Object(r.a)(u, e => e.map(e => e && e.name)), (e, t) => {
					let {
						topicSlug: i
					} = t;
					return l(e, i, !0)
				}),
				_ = Object(r.a)(c, e => e && n.fbt._("{topic name} on Reddit", [n.fbt._param("topic name", e)], {
					hk: "1hchAs"
				})),
				m = Object(r.a)(c, e => e && n.fbt._("Find the best posts and communities about {topic name} on Reddit", [n.fbt._param("topic name", e)], {
					hk: "DunIF"
				}))
		},
		"./src/reddit/selectors/user.ts": function(e, t, i) {
			"use strict";
			i.d(t, "n", (function() {
				return b
			})), i.d(t, "p", (function() {
				return w
			})), i.d(t, "o", (function() {
				return y
			})), i.d(t, "q", (function() {
				return v
			})), i.d(t, "r", (function() {
				return T
			})), i.d(t, "v", (function() {
				return S
			})), i.d(t, "t", (function() {
				return E
			})), i.d(t, "Q", (function() {
				return F
			})), i.d(t, "H", (function() {
				return I
			})), i.d(t, "O", (function() {
				return O
			})), i.d(t, "x", (function() {
				return j
			})), i.d(t, "l", (function() {
				return B
			})), i.d(t, "i", (function() {
				return x
			})), i.d(t, "g", (function() {
				return R
			})), i.d(t, "d", (function() {
				return k
			})), i.d(t, "u", (function() {
				return C
			})), i.d(t, "kb", (function() {
				return N
			})), i.d(t, "a", (function() {
				return P
			})), i.d(t, "S", (function() {
				return L
			})), i.d(t, "T", (function() {
				return A
			})), i.d(t, "m", (function() {
				return D
			})), i.d(t, "b", (function() {
				return G
			})), i.d(t, "z", (function() {
				return M
			})), i.d(t, "A", (function() {
				return U
			})), i.d(t, "V", (function() {
				return q
			})), i.d(t, "U", (function() {
				return H
			})), i.d(t, "k", (function() {
				return V
			})), i.d(t, "P", (function() {
				return W
			})), i.d(t, "N", (function() {
				return z
			})), i.d(t, "Y", (function() {
				return K
			})), i.d(t, "cb", (function() {
				return Q
			})), i.d(t, "bb", (function() {
				return J
			})), i.d(t, "E", (function() {
				return Y
			})), i.d(t, "G", (function() {
				return X
			})), i.d(t, "I", (function() {
				return Z
			})), i.d(t, "y", (function() {
				return $
			})), i.d(t, "B", (function() {
				return ee
			})), i.d(t, "Z", (function() {
				return te
			})), i.d(t, "eb", (function() {
				return ie
			})), i.d(t, "W", (function() {
				return ne
			})), i.d(t, "X", (function() {
				return re
			})), i.d(t, "e", (function() {
				return se
			})), i.d(t, "hb", (function() {
				return oe
			})), i.d(t, "ab", (function() {
				return de
			})), i.d(t, "s", (function() {
				return le
			})), i.d(t, "db", (function() {
				return ae
			})), i.d(t, "C", (function() {
				return ue
			})), i.d(t, "L", (function() {
				return ce
			})), i.d(t, "j", (function() {
				return _e
			})), i.d(t, "R", (function() {
				return me
			})), i.d(t, "fb", (function() {
				return pe
			})), i.d(t, "f", (function() {
				return he
			})), i.d(t, "jb", (function() {
				return fe
			})), i.d(t, "K", (function() {
				return ge
			})), i.d(t, "h", (function() {
				return be
			})), i.d(t, "M", (function() {
				return we
			})), i.d(t, "F", (function() {
				return ye
			})), i.d(t, "D", (function() {
				return ve
			})), i.d(t, "c", (function() {
				return Te
			})), i.d(t, "w", (function() {
				return Se
			})), i.d(t, "ib", (function() {
				return Ee
			})), i.d(t, "gb", (function() {
				return Fe
			})), i.d(t, "J", (function() {
				return Ie
			}));
			var n = i("./node_modules/lodash/find.js"),
				r = i.n(n),
				s = i("./node_modules/lodash/pick.js"),
				o = i.n(s),
				d = i("./node_modules/lodash/values.js"),
				l = i.n(d),
				a = i("./node_modules/reselect/es/index.js"),
				u = i("./src/lib/constants/index.ts"),
				c = i("./src/lib/objectSelector/index.ts"),
				_ = i("./src/reddit/models/User/index.ts"),
				m = i("./src/reddit/selectors/platform.ts"),
				p = i("./src/reddit/selectors/profile.ts"),
				h = i("./src/reddit/selectors/runTimeEnvVars.ts");
			const f = [],
				g = {},
				b = e => e.user.account ? e.user.account.goldExpiration : null,
				w = e => !!e.user.account && e.user.account.isGold,
				y = e => !!e.user.account && e.user.account.hasAndroidSubscription,
				v = e => !!e.user.account && e.user.account.hasGoldSubscription,
				T = e => !!e.user.account && e.user.account.hasIOSSubscription,
				S = e => !!e.user.account && e.user.account.hasStripeSubscription,
				E = e => !!e.user.account && e.user.account.hasPaypalSubscription,
				F = e => e.user.language,
				I = e => !!e.user.account,
				O = e => !!e.user.session && !e.user.session.unsafeLoggedOut,
				j = e => !!e.user.account && e.user.account.hasVerifiedEmail,
				B = e => e.user.account ? e.user.account.email : null,
				x = e => e.user.account,
				R = Object(a.a)(e => e.user.account, e => e && e.id),
				k = e => {
					const t = x(e);
					return t && t.coins || 0
				},
				C = e => {
					const t = x(e);
					return !!t && t.seenRedesignModal
				},
				N = e => e.user.prefs,
				P = e => e.user.prefs.allowClickTracking || !I(e),
				L = e => e.user.prefs.nightmode,
				A = e => !!e.user.prefs.nightmodeTempUpdated,
				D = e => e.user.prefs.geopopular,
				G = e => e.user.prefs && e.user.prefs.autoplayVideo,
				M = e => e.user.prefs.hideNSFW,
				U = e => N(e).ignoreSuggestedSort,
				q = e => N(e).over18,
				H = e => N(e).openPostInNewTab,
				V = e => N(e).emailDigests,
				W = e => e.user.prefs.labelNSFW,
				z = e => {
					const t = e.user.prefs ? e.user.prefs.topContentTimesDismissed : 0;
					if (t < 1) return !1;
					if (t < 2) {
						const t = Date.now() - u.Xb;
						if ((e.user.prefs ? e.user.prefs.topContentDismissalTime : 0) < t) return !1
					} else if (t < 3) {
						const t = Date.now() - 2 * u.Xb;
						if ((e.user.prefs ? e.user.prefs.topContentDismissalTime : 0) < t) return !1
					}
					return !0
				},
				K = e => e.user.prefs.rememberCommunityLayout,
				Q = e => !N(e).stylesEnabled,
				J = (e, t) => {
					let {
						subredditId: i
					} = t;
					const n = N(e).subreddit[i];
					return !!n && !n.stylesEnabled
				},
				Y = e => !!e.user.temporaryGQL.isEmployee,
				X = e => !!e.user.temporaryGQL.isLoggedIn,
				Z = e => {
					const t = x(e);
					return !!t && t.isMod
				},
				$ = e => {
					const t = x(e);
					return !!t && !t.isEmployee && t.isGold
				},
				ee = e => {
					const t = x(e);
					return !!t && t.inRedesignBeta
				},
				te = e => {
					const t = x(e);
					return !!t && t.seenGiveAwardTooltip
				},
				ie = (e, t) => {
					let {
						userName: i
					} = t;
					return e.users.models[i.toLowerCase()]
				},
				ne = (e, t) => {
					let {
						userId: i
					} = t;
					const n = ((e, t) => {
						let {
							userId: i
						} = t;
						return r()(l()(e.users.models), e => e.id === i)
					})(e, {
						userId: i
					});
					return n ? n.profileId : void 0
				},
				re = (e, t) => {
					let {
						userName: i
					} = t;
					const n = ie(e, {
						userName: i
					});
					return n ? n.profileId : void 0
				},
				se = (e, t) => {
					const i = t ? t.toLowerCase() : "";
					return t && e.contentGate[i] ? e.contentGate[i] : null
				},
				oe = (e, t) => {
					const i = x(e),
						n = t.post || t.postId && e.posts.models[t.postId];
					return !(!i || !n) && Object(_.e)(i) === n.author
				},
				de = e => {
					const t = x(e);
					if (t) {
						return (Object(_.d)(t) || (new Date).getTime()) < (new Date).getTime() - u.db && (t.postKarma >= 5 || t.commentKarma >= 10)
					}
					return !1
				},
				le = e => e.user.sessionRefreshFailed,
				ae = Object(c.a)(e => {
					if (!e.user || !e.user.account) return;
					const t = o()(e.user.account, ["hasUnreadOldModmail", "hasUnreadMail", "hasUnreadModmail", "hasUnreadMessages", "hasUnreadNotifs", "inboxCount"]);
					return e.platform.currentPage && e.platform.currentPage.routeMatch && Object(m.q)(e) === u.zb.INBOX_PAGES && e.user.prefs.markMessagesRead && (t.inboxCount = 0), t
				}),
				ue = e => {
					const t = ae(e, g);
					return t && t.inboxCount
				},
				ce = (e, t) => {
					const i = x(e);
					if (i) {
						return Object(_.e)(i).toLowerCase() === t.toLowerCase()
					}
					return !1
				},
				_e = e => e.user.drafts && e.user.drafts.count || 0,
				me = e => e.user.drafts && e.user.drafts.limit || 20,
				pe = (e, t) => {
					let {
						userName: i
					} = t;
					const n = ie(e, {
						userName: i
					});
					return !!n && !!n.hasUserProfile
				},
				he = e => {
					const t = x(e);
					return !!t && t.hasUserProfile
				},
				fe = Object(a.a)(e => e.user.account, e => e.users.models, (e, t) => t, (e, t, i) => {
					const n = i.toLowerCase();
					return e && Object(_.e)(e) === n ? e : t[n]
				}),
				ge = e => {
					return Object(h.a)(e) - parseInt(e.user.loid.loidCreated) < u.w
				},
				be = e => {
					const t = x(e);
					if (!t) return f;
					const i = Object(_.e)(t);
					return Object(p.n)(e, {
						profileName: i
					})
				},
				we = e => {
					const t = x(e);
					return !!t && (t.isSuspended && !t.isFPR)
				},
				ye = e => {
					const t = x(e);
					return !!t && t.isFPR
				},
				ve = (e, t) => e.user.accountSettings["".concat(t)].api.pending,
				Te = e => e.user.accountSettings.changeEmail.api.error,
				Se = e => e.user && e.user.account && e.user.account.isPasswordSet,
				Ee = e => e.user && e.user.account && e.user.account.linkedIdentities,
				Fe = e => e.user && e.user.account && e.user.account.id,
				Ie = e => !!e.user.account && e.user.account.isNameEditable
		},
		"./src/reddit/selectors/video.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "e", (function() {
				return r
			})), i.d(t, "b", (function() {
				return s
			})), i.d(t, "f", (function() {
				return o
			})), i.d(t, "g", (function() {
				return d
			})), i.d(t, "i", (function() {
				return l
			})), i.d(t, "j", (function() {
				return a
			})), i.d(t, "k", (function() {
				return u
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "h", (function() {
				return _
			})), i.d(t, "c", (function() {
				return m
			}));
			const n = (e, t) => {
					let {
						postId: i
					} = t;
					return !!e.posts.video.buffering[i]
				},
				r = (e, t) => {
					let {
						postId: i
					} = t;
					return !e.posts.video.buffering[i] && !!e.posts.video.playing[i]
				},
				s = (e, t) => {
					let {
						postId: i
					} = t;
					return !!e.posts.video.consumed[i]
				},
				o = (e, t) => {
					let {
						postId: i
					} = t;
					return !!e.posts.video.playing[i]
				},
				d = (e, t) => {
					let {
						postId: i
					} = t;
					return e.posts.video.loadTimes[i]
				},
				l = (e, t) => {
					let {
						postId: i
					} = t;
					return e.posts.video.metadata[i]
				},
				a = (e, t) => {
					let {
						postId: i
					} = t;
					return !!e.posts.video.loadable[i]
				},
				u = (e, t) => {
					let {
						postId: i
					} = t;
					return !!e.posts.video.started[i]
				},
				c = (e, t) => {
					let {
						postId: i
					} = t;
					if (!i) return null;
					const n = e.posts.video.time[i];
					return n ? n.currentTime / 1e3 : null
				},
				_ = (e, t) => {
					let {
						postId: i
					} = t;
					if (!i) return null;
					const n = e.posts.video.time[i];
					return n ? n.maxTimeServed : null
				},
				m = (e, t) => {
					let {
						postId: i
					} = t;
					return e.posts.video.continuousViewStartedAt[i] || 0
				}
		},
		"./src/reddit/singleton/tracing/clientSideHttpLogger.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/crypto-js/hmac-sha256.js"),
				r = i.n(n),
				s = i("./node_modules/zipkin-transport-http/lib/index.js");
			const o = window && window.fetch;
			class d extends s.HttpLogger {
				constructor(e) {
					super(e), this.headers = {
						"Content-Type": "application/json"
					}, this.queue = [], this.fetchImplementation = o, this.key = e.key, this.secret = e.secret
				}
				processQueue() {
					if (this.queue.length > 0) {
						const e = "[".concat(this.queue.join(","), "]");
						if (!this.key || !this.secret) return;
						const t = r()(e, this.secret).toString(),
							i = Object.assign({}, this.headers, {
								"X-Signature": "key=".concat(this.key, ", mac=").concat(t)
							});
						this.headers = i, super.processQueue(this.fetchImplementation)
					}
				}
			}
			t.a = d
		},
		"./src/reddit/singleton/tracing/index.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/reddit/singleton/tracing/tracer.ts");
			i.d(t, "a", (function() {
				return n.a
			}));
			let r = n.b;
			t.b = r
		},
		"./src/reddit/singleton/tracing/tracer.ts": function(e, t, i) {
			"use strict";
			(function(e) {
				i.d(t, "a", (function() {
					return l
				}));
				i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/core-js/modules/es6.regexp.to-string.js");
				var n = i("./node_modules/zipkin/es/index.js"),
					r = i("./src/reddit/singleton/tracing/clientSideHttpLogger.ts"),
					s = i("./src/lib/createSignature/index.ts");
				const o = "Local",
					d = "Remote";
				var l, a;
				! function(e) {
					e.HttpMethod = "http.method", e.HttpUrl = "http.url", e.HttpStatusCode = "http.status_code"
				}(l || (l = {})),
				function(e) {
					e.TraceId = "X-Trace", e.SpanId = "X-Span", e.ParentSpanId = "X-Parent", e.Sampled = "X-Sampled", e.Flags = "X-Flags", e.Hmac = "X-Trace-Hmac", e.Secret = "x-trace-secret"
				}(a || (a = {}));
				class u {
					constructor(e) {
						let {
							traceId: t,
							timestamp: i,
							annotation: n
						} = e;
						this.traceId = t, this.timestamp = i, this.annotation = n
					}
				}

				function c() {
					let e = "";
					for (let t = 0; t < 16; t++) {
						e += "0123456789" [Math.floor(10 * Math.random())]
					}
					return e
				}
				const _ = 5e3;
				const m = new class {
					constructor() {
						this.isEnabled = !1, this.serviceName = "desktop2x", this.shouldRecordTrace = !1, this.context = new n.ExplicitContext, this.consoleRecorder = new n.ConsoleRecorder, this.shouldRecordTrace = !0, this.recorder = new n.BatchRecorder({
							logger: new r.a({
								endpoint: "https://diagnostics.redditmedia.com/spans",
								jsonEncoder: n.jsonEncoder.JSON_V1,
								timeout: _,
								key: "d2x",
								secret: "f45658cb24214a5d9f9579da9fc808ea"
							})
						})
					}
					enableTracing() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						this.isEnabled = e
					}
					getSampledValue(e) {
						return e.sampled.getOrElse(!1) ? "1" : "0"
					}
					getTracingHeaders() {
						const e = this.getCurrentTraceId(),
							t = this.getTraceHmac();
						if (!(this.isEnabled && this.shouldRecordTrace && e && t)) return {};
						let i = "";
						return e.parentSpanId.ifPresent(e => i = e), i ? {
							[a.TraceId]: e.traceId.toString(),
							[a.ParentSpanId]: i,
							[a.SpanId]: e.spanId.toString(),
							[a.Sampled]: this.getSampledValue(e),
							[a.Flags]: "0",
							[a.Hmac]: t
						} : {}
					}
					getTracingHeadersWithSecret() {
						return this.getTracingHeaders()
					}
					getTraceHmac() {
						const t = this.getCurrentTraceId();
						if (!t) return null;
						let i = "";
						if (t.parentSpanId.ifPresent(e => i = e), !i) return null;
						const n = t.isDebug() ? 1 : 0,
							r = [t.traceId.toString(), i, t.spanId.toString(), this.getSampledValue(t), n].join("-"),
							o = "MHQmvfC2IB7ADUbzJXqTjPVzJ4lLaljDwonReqQq";
						return Object(s.a)(r, e.from(o).toString("base64"))
					}
					getCurrentTraceId() {
						return this.isEnabled ? this.context.getContext() : null
					}
					createTraceFromId(e) {
						return new n.TraceId({
							traceId: e,
							parentId: n.option.None,
							spanId: e,
							sampled: new n.option.Some(!0),
							debug: !1
						})
					}
					createRootSpanId() {
						const e = c();
						return this.createTraceFromId(e)
					}
					createChildSpanId() {
						const e = this.context.getContext();
						return new n.TraceId({
							traceId: e.traceId,
							parentId: e ? n.option.fromNullable(e.spanId.toString()) : n.option.None,
							spanId: c(),
							sampled: new n.option.Some(!0),
							debug: !1
						})
					}
					setParent(e) {
						this.context.setContext(e)
					}
					recordTraceAnnotation(e, t) {
						this.shouldRecordTrace && e && this.recorder.record(new u({
							traceId: e,
							timestamp: 1e3 * Date.now(),
							annotation: t
						}))
					}
					recordPerformanceTimings(e, t, i) {
						const r = this.createChildSpanId();
						this.recordServiceName(r, this.serviceName), this.recordBinary(r, "operation", o), this.recorder.record(new u({
							traceId: r,
							timestamp: 1e3 * t,
							annotation: new n.Annotation.LocalOperationStart(e)
						})), this.recorder.record(new u({
							traceId: r,
							timestamp: 1e3 * i,
							annotation: new n.Annotation.LocalOperationStop
						}))
					}
					recordServiceName(e, t) {
						this.recordTraceAnnotation(e, new n.Annotation.ServiceName(t))
					}
					recordBinary(e, t, i) {
						this.recordTraceAnnotation(e, new n.Annotation.BinaryAnnotation(t, i))
					}
					recordLocalSpan(e, t) {
						let i;
						if (!this.isEnabled) return t();
						const r = this.createChildSpanId();
						return this.recordServiceName(r, this.serviceName), this.recordBinary(r, o, e), this.recordTraceAnnotation(r, new n.Annotation.LocalOperationStart(e)), this.context.scoped(() => {
							this.setParent(r), i = t()
						}), this.recordTraceAnnotation(r, new n.Annotation.LocalOperationStop), i
					}
					async recordAsyncSpan(e, t) {
						let i, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						if (!this.isEnabled) return i = await t();
						const s = this.createChildSpanId();
						if (this.recordServiceName(s, this.serviceName), this.recordBinary(s, "operation", r ? d : o), this.recordTraceAnnotation(s, new n.Annotation.LocalOperationStart(e)), r && this.recordTraceAnnotation(s, new n.Annotation.ClientSend), await this.context.scoped(async () => {
								this.setParent(s), i = await t()
							}), r && (this.recordTraceAnnotation(s, new n.Annotation.ClientRecv), i && (i.status && this.recordBinary(s, l.HttpStatusCode, i.status), i.error))) {
							const e = i.error;
							this.recordBinary(s, "error", e.type)
						}
						return this.recordTraceAnnotation(s, new n.Annotation.LocalOperationStop), i
					}
					async recordLocalSpanAsync(e, t) {
						return await this.recordAsyncSpan(e, t)
					}
					async recordRpcSpanAsync(e, t) {
						return await this.recordAsyncSpan(e, t, !0)
					}
					async recordRequest(e, t, i) {
						let r;
						if (!this.isEnabled) return r = await i();
						const s = this.getCurrentTraceId() || this.createRootSpanId();
						return Object.keys(t).forEach(e => {
							this.recordBinary(s, e, t[e])
						}), this.recordServiceName(s, this.serviceName), this.recordTraceAnnotation(s, new n.Annotation.LocalOperationStart(e)), await this.context.scoped(async () => {
							this.setParent(s), r = await i()
						}), this.recordTraceAnnotation(s, new n.Annotation.LocalOperationStop), r
					}
				};
				t.b = m
			}).call(this, i("./node_modules/buffer/index.js").Buffer)
		},
		"./src/reduxMiddleware/apiContext.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = i("./node_modules/lodash/omit.js"),
				r = i.n(n),
				s = i("./node_modules/set-cookie-parser/lib/set-cookie.js"),
				o = i.n(s),
				d = i("./src/lib/constants/index.ts"),
				l = i("./src/lib/constants/cookie.ts"),
				a = i("./src/lib/constants/headers.ts");
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			const u = e => e.version < 1 ? e.loid : "".concat(e.loid, ".").concat(e.version, ".").concat(e.loidCreated, ".").concat(e.blob),
				c = (e, t) => {
					if (e.includes(".")) {
						const [t, i, n, r] = e.split(".");
						return {
							blob: r,
							loid: t,
							loidCreated: n,
							version: parseInt(i, 10)
						}
					}
					return {
						blob: "",
						loid: e,
						loidCreated: t || (new Date).toISOString(),
						version: 0
					}
				};
			var _ = i("./src/lib/permanentCookieOptions.ts"),
				m = i("./src/lib/sample/index.ts"),
				p = i("./src/lib/sentry/index.ts"),
				h = i("./src/config.ts"),
				f = i("./src/lib/makeRequest/index.ts");

			function g(e) {
				Object(f.b)({
					method: d.bb.POST,
					endpoint: "/setreddaidcounter",
					data: {
						appName: e.statsAppName
					},
					type: "json"
				})
			}
			const b = () => {},
				w = () => {},
				y = (e, t, i, n) => {
					e.set(t, i, n)
				};

			function v(e, t, i, n) {
				return (r, s) => {
					const d = {
							domain: h.a.cookieDomain
						},
						f = t.getState(),
						b = u(f.user.loid),
						w = f.user.sessionTracker,
						v = f.user.reddaid,
						T = a.a in r.headers || a.c in r.headers || a.b in r.headers;
					let S = e.get(l.b);
					const E = _.a;
					if (T) {
						if (s.allowSetEmptyLoid && a.a in r.headers) {
							const n = c(r.headers[a.a], S),
								s = E();
							y(e, l.a, r.headers[a.a], s), t.dispatch(i.loidReceived(n))
						}
						if (a.c in r.headers) {
							const n = r.headers[a.c],
								s = d;
							y(e, l.f, n, s), t.dispatch(i.sessionTrackerReceived(n))
						}
						if (a.b in r.headers) {
							const s = r.headers[a.b];
							y(e, l.e, s, d), t.dispatch(i.reddaidReceived(s)), g(n)
						}
					} else if (a.d in r.headers) {
						const u = o()(r.headers[a.d]).map(e => ({
							[e.name]: e.value
						})).reduce((e, t) => Object.assign({}, e, t), {});
						if (l.b in u && (S = u[l.b]), l.a in u)
							if (s.allowSetEmptyLoid && !b) {
								const n = u[l.a],
									r = c(n, S),
									s = E();
								y(e, l.a, n, s), t.dispatch(i.loidReceived(r))
							} else b || Object(m.a)(h.a.logSample.failToSetLOID) && p.c.captureMessage("LOID failing to be set on user without LOID");
						if (l.f in u) {
							const n = u[l.f];
							if (n !== w) {
								const r = d;
								y(e, l.f, n, r), t.dispatch(i.sessionTrackerReceived(n))
							}
						}
						if (l.e in u) {
							const r = u[l.e];
							r !== v && (y(e, l.e, r, d), t.dispatch(i.reddaidReceived(r)), g(n))
						}
					}
				}
			}
			t.a = e => {
				let {
					actionDispatchers: t,
					authHeaders: i = {},
					cookies: n,
					onBeforeRequestFactory: s,
					customApiContextGenerator: o,
					receivedActions: d,
					statsAppName: l
				} = e, c = {
					apiUrl: h.a.apiUrl,
					headers: {},
					onBeforeRequest: b,
					onResponse: w,
					statsAppName: l
				};
				return {
					apiContext: o ? o(c, n) : () => c,
					middleware: e => {
						c.onResponse === w && (c = Object.assign({}, c, {
							onResponse: v(n, e, t, c)
						})), s && (c = Object.assign({}, c, {
							onBeforeRequest: s(e)
						}));
						const o = e.getState(),
							l = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								const i = Object.keys(t);
								return (n, s) => {
									switch (s.type) {
										case e.loidReceived:
											return s.payload.loid ? Object.assign({}, n, {
												headers: Object.assign({}, n.headers, {
													[a.a]: u(s.payload)
												})
											}) : n;
										case e.sessionTrackerReceived:
											return Object.assign({}, n, {
												headers: Object.assign({}, n.headers, {
													[a.c]: s.payload
												})
											});
										case e.reddaidReceived:
											return Object.assign({}, n, {
												headers: Object.assign({}, n.headers, {
													[a.b]: s.payload
												})
											});
										case e.userAuthenticated:
										case e.userReauthenticated:
											return Object.assign({}, n, {
												apiUrl: h.a.oauthUrl,
												headers: Object.assign({}, t, n.headers, {
													Authorization: "Bearer ".concat(s.payload.accessToken)
												})
											});
										case e.userLoggedOut:
											return Object.assign({}, n, {
												apiUrl: h.a.apiUrl,
												headers: r()(n.headers, [...i, "Authorization"])
											});
										case e.headersReceived:
											return Object.assign({}, n, {
												headers: Object.assign({}, n.headers, s.payload.headers)
											});
										default:
											return n
									}
								}
							}(d, i);
						return o.user.account && (c = l(c, {
							type: d.userAuthenticated,
							payload: o.user.session
						})), o.user.loid.loid && (c = l(c, {
							type: d.loidReceived,
							payload: o.user.loid
						})), o.user.sessionTracker && (c = l(c, {
							type: d.sessionTrackerReceived,
							payload: o.user.sessionTracker
						})), o.user.reddaid && (c = l(c, {
							type: d.reddaidReceived,
							payload: o.user.reddaid
						})), e => t => (c = l(c, t), e(t))
					}
				}
			}
		},
		"./src/server/helpers/seoMetadata.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return T
			})), i.d(t, "b", (function() {
				return S
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js"), i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/fbt/lib/FbtPublic.js"), i("./node_modules/react/index.js");
			var n = i("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = i.n(n),
				s = i("./src/config.ts"),
				o = i("./src/lib/constants/index.ts"),
				d = (i("./src/lib/addQueryParams/index.ts"), i("./src/lib/isAdHocMultireddit/index.ts")),
				l = i("./src/lib/isFakeSubreddit/index.ts"),
				a = (i("./src/lib/makeCommentsPageKey/index.ts"), i("./src/lib/prettyPrintNumber/index.ts"), i("./src/lib/truncateText/index.ts"), i("./src/reddit/constants/experiments.ts"), i("./src/reddit/constants/page.ts"), i("./src/reddit/constants/topic.ts")),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				c = i("./src/reddit/helpers/canonicalUrls.ts"),
				_ = (i("./src/reddit/helpers/getRichTextContent/index.ts"), i("./src/reddit/helpers/getSubredditErrorProps/index.ts")),
				m = (i("./src/reddit/helpers/publicAccessNetwork/index.ts"), i("./src/reddit/models/Comment/index.ts"), i("./src/reddit/models/Post/index.ts")),
				p = (i("./src/reddit/models/PublicAccessNetwork/index.ts"), i("./src/reddit/selectors/comments.ts"), i("./src/reddit/selectors/experiments/postSeo.ts"), i("./src/reddit/selectors/multireddit.ts"), i("./src/reddit/selectors/platform.ts")),
				h = i("./src/reddit/selectors/postCollection.ts"),
				f = i("./src/reddit/selectors/posts.ts"),
				g = i("./src/reddit/selectors/profile.ts"),
				b = (i("./src/reddit/selectors/structuredStyles.ts"), i("./src/reddit/selectors/subreddit.ts")),
				w = (i("./src/reddit/selectors/topic.ts"), i("./src/reddit/selectors/user.ts"));
			i("./src/reddit/models/Media/index.ts");
			const y = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				v = e => e.endsWith("/") ? e : "".concat(e, "/"),
				T = e => {
					const t = Object(p.b)(e);
					if (!t) return null;
					const i = Object(p.q)(e);
					switch (i) {
						case o.zb.INDEX:
						case o.zb.LISTING:
							return t.routeMatch && t.routeMatch.route.chunk === o.p.FRONTPAGE ? v(s.a.redditUrl) : null;
						case o.zb.SUBREDDIT:
							const {
								subredditName: n
							} = t.urlParams, u = n && Object(b.d)(e, {
								subredditName: n
							});
							if (Object(l.a)(n) && Object(d.a)(n)) {
								const t = Object(c.a)(e, n);
								return t ? s.a.redditUrl + t : null
							}
							return u ? "".concat(s.a.redditUrl).concat(u) : null;
						case o.zb.COMMENTS:
						case o.zb.DUPLICATES:
							const {
								partialPostId: _
							} = t.urlParams, p = _ && Object(m.m)(_), w = p && Object(f.M)(e, {
								postId: p
							});
							return w ? "".concat(s.a.redditUrl).concat(r.a.parse(w).path) : null;
						case o.zb.PROFILE_OVERVIEW:
						case o.zb.PROFILE_POSTS:
						case o.zb.PROFILE_COMMENTS:
							const {
								profileName: y
							} = t.urlParams, T = Object(g.j)(e, {
								profileName: y
							});
							let S = "";
							return i === o.zb.PROFILE_POSTS ? S = "posts/" : i === o.zb.PROFILE_COMMENTS && (S = "comments/"), T && T.url ? "".concat(s.a.redditUrl).concat(r.a.parse(T.url).path).concat(S) : null;
						case o.zb.COLLECTION_COMMENTS:
							const {
								collectionId: E
							} = t.urlParams, F = E && Object(h.r)(e, {
								collectionId: E
							}), I = F && F.permalink;
							return I ? "".concat(s.a.redditUrl).concat(r.a.parse(v(I)).path) : null;
						case o.zb.SUBREDDIT_LEADERBOARD:
							return t.routeMatch && t.routeMatch.route.chunk === o.p.SUBREDDIT_LEADERBOARD ? "".concat(s.a.redditUrl, "/subreddits/leaderboard/") : null;
						case o.zb.TOPIC:
							const {
								topicSlug: O
							} = t.urlParams;
							return O ? "".concat(s.a.redditUrl).concat(Object(a.a)(O)) : null;
						default:
							return null
					}
				},
				S = (e, t) => {
					if (t.head) {
						let i = t.querySelector("meta[name='robots']");
						const n = E(e),
							{
								head: r
							} = t;
						n ? (i || ((i = t.createElement("meta")).name = "robots", r.appendChild(i)), i.content = n) : i && (i.remove ? i.remove() : i.parentNode ? i.parentNode.removeChild(i) : r.removeChild && r.removeChild(i))
					}
				},
				E = e => {
					const {
						currentPage: t
					} = e.platform, i = Object(p.q)(e), n = Object(p.c)(e), r = y.has(n), s = Object(u.k)(e, {
						pageLayer: t
					}), d = !(!s || !s.hideFromRobots), l = F(e), a = t && t.isRobotIndexable, c = i === o.zb.COMMENTS || i === o.zb.COLLECTION_COMMENTS, _ = !(!t || !t.urlParams.partialCommentId), m = i === o.zb.SEARCH_RESULTS || i === o.zb.SUBREDDIT_LEADERBOARD || c && _;
					return d || r || l || (!1 === a || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				F = e => {
					let t = !1;
					const i = Object(p.e)(e);
					if (i) {
						const n = Object(w.e)(e, i);
						t = !!Object(_.a)(n, !1, i)
					}
					return t
				}
		},
		"./src/telemetry/eventSchemas/action_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ActionInfo = function(e) {
					this.page_type = null, this.pane_name = null, this.position = null, this.success = null, this.count = null, this.retried = null, this.reason = null, this.setting_value = null, this.type = null, this.relative_position = null, e && (void 0 !== e.page_type && null !== e.page_type && (this.page_type = e.page_type), void 0 !== e.pane_name && null !== e.pane_name && (this.pane_name = e.pane_name), void 0 !== e.position && null !== e.position && (this.position = e.position), void 0 !== e.success && null !== e.success && (this.success = e.success), void 0 !== e.count && null !== e.count && (this.count = e.count), void 0 !== e.retried && null !== e.retried && (this.retried = e.retried), void 0 !== e.reason && null !== e.reason && (this.reason = e.reason), void 0 !== e.setting_value && null !== e.setting_value && (this.setting_value = e.setting_value), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.relative_position && null !== e.relative_position && (this.relative_position = e.relative_position))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("ActionInfo"), null !== this.page_type && void 0 !== this.page_type && (e.writeFieldBegin("page_type", r.Type.STRING, 1), e.writeString(this.page_type), e.writeFieldEnd()), null !== this.pane_name && void 0 !== this.pane_name && (e.writeFieldBegin("pane_name", r.Type.STRING, 2), e.writeString(this.pane_name), e.writeFieldEnd()), null !== this.position && void 0 !== this.position && (e.writeFieldBegin("position", r.Type.I64, 3), e.writeI64(this.position), e.writeFieldEnd()), null !== this.success && void 0 !== this.success && (e.writeFieldBegin("success", r.Type.BOOL, 4), e.writeBool(this.success), e.writeFieldEnd()), null !== this.count && void 0 !== this.count && (e.writeFieldBegin("count", r.Type.I64, 5), e.writeI64(this.count), e.writeFieldEnd()), null !== this.retried && void 0 !== this.retried && (e.writeFieldBegin("retried", r.Type.BOOL, 6), e.writeBool(this.retried), e.writeFieldEnd()), null !== this.reason && void 0 !== this.reason && (e.writeFieldBegin("reason", r.Type.STRING, 7), e.writeString(this.reason), e.writeFieldEnd()), null !== this.setting_value && void 0 !== this.setting_value && (e.writeFieldBegin("setting_value", r.Type.STRING, 8), e.writeString(this.setting_value), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 9), e.writeString(this.type), e.writeFieldEnd()), null !== this.relative_position && void 0 !== this.relative_position && (e.writeFieldBegin("relative_position", r.Type.I64, 10), e.writeI64(this.relative_position), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Expand = function(e) {
				this.provider = null, e && void 0 !== e.provider && null !== e.provider && (this.provider = e.provider)
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Expand"), null !== this.provider && void 0 !== this.provider && (e.writeFieldBegin("provider", r.Type.STRING, 1), e.writeString(this.provider), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.Widget = function(e) {
				this.target_subreddit_name = null, this.target_subreddit_id = null, this.type = null, e && (void 0 !== e.target_subreddit_name && null !== e.target_subreddit_name && (this.target_subreddit_name = e.target_subreddit_name), void 0 !== e.target_subreddit_id && null !== e.target_subreddit_id && (this.target_subreddit_id = e.target_subreddit_id), void 0 !== e.type && null !== e.type && (this.type = e.type))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("Widget"), null !== this.target_subreddit_name && void 0 !== this.target_subreddit_name && (e.writeFieldBegin("target_subreddit_name", r.Type.STRING, 1), e.writeString(this.target_subreddit_name), e.writeFieldEnd()), null !== this.target_subreddit_id && void 0 !== this.target_subreddit_id && (e.writeFieldBegin("target_subreddit_id", r.Type.STRING, 2), e.writeString(this.target_subreddit_id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.Share = function(e) {
				this.target = null, this.id = null, e && (void 0 !== e.target && null !== e.target && (this.target = e.target), void 0 !== e.id && null !== e.id && (this.id = e.id))
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("Share"), null !== this.target && void 0 !== this.target && (e.writeFieldBegin("target", r.Type.STRING, 1), e.writeString(this.target), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 2), e.writeString(this.id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/ad_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Ad = function(e) {
					this.id = null, this.name = null, this.click_url = null, this.third_party_trackers = null, this.configured_status = null, this.effective_status = null, this.admin_approval = null, this.click_trackers = null, this.classifications = null, this.rejection_reason = null, this.preview_expiry_timestamp = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.click_url && null !== e.click_url && (this.click_url = e.click_url), void 0 !== e.third_party_trackers && null !== e.third_party_trackers && (this.third_party_trackers = r.copyList(e.third_party_trackers, [null])), void 0 !== e.configured_status && null !== e.configured_status && (this.configured_status = e.configured_status), void 0 !== e.effective_status && null !== e.effective_status && (this.effective_status = e.effective_status), void 0 !== e.admin_approval && null !== e.admin_approval && (this.admin_approval = e.admin_approval), void 0 !== e.click_trackers && null !== e.click_trackers && (this.click_trackers = r.copyList(e.click_trackers, [null])), void 0 !== e.classifications && null !== e.classifications && (this.classifications = r.copyList(e.classifications, [null])), void 0 !== e.rejection_reason && null !== e.rejection_reason && (this.rejection_reason = e.rejection_reason), void 0 !== e.preview_expiry_timestamp && null !== e.preview_expiry_timestamp && (this.preview_expiry_timestamp = e.preview_expiry_timestamp))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Ad"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.click_url && void 0 !== this.click_url && (e.writeFieldBegin("click_url", r.Type.STRING, 3), e.writeString(this.click_url), e.writeFieldEnd()), null !== this.third_party_trackers && void 0 !== this.third_party_trackers) {
					for (var t in e.writeFieldBegin("third_party_trackers", r.Type.LIST, 4), e.writeListBegin(r.Type.STRING, this.third_party_trackers.length), this.third_party_trackers) this.third_party_trackers.hasOwnProperty(t) && (t = this.third_party_trackers[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.configured_status && void 0 !== this.configured_status && (e.writeFieldBegin("configured_status", r.Type.STRING, 5), e.writeString(this.configured_status), e.writeFieldEnd()), null !== this.effective_status && void 0 !== this.effective_status && (e.writeFieldBegin("effective_status", r.Type.STRING, 6), e.writeString(this.effective_status), e.writeFieldEnd()), null !== this.admin_approval && void 0 !== this.admin_approval && (e.writeFieldBegin("admin_approval", r.Type.STRING, 7), e.writeString(this.admin_approval), e.writeFieldEnd()), null !== this.click_trackers && void 0 !== this.click_trackers) {
					for (var i in e.writeFieldBegin("click_trackers", r.Type.LIST, 8), e.writeListBegin(r.Type.STRING, this.click_trackers.length), this.click_trackers) this.click_trackers.hasOwnProperty(i) && (i = this.click_trackers[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.classifications && void 0 !== this.classifications) {
					for (var n in e.writeFieldBegin("classifications", r.Type.LIST, 9), e.writeListBegin(r.Type.STRING, this.classifications.length), this.classifications) this.classifications.hasOwnProperty(n) && (n = this.classifications[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.rejection_reason && void 0 !== this.rejection_reason && (e.writeFieldBegin("rejection_reason", r.Type.STRING, 10), e.writeString(this.rejection_reason), e.writeFieldEnd()), null !== this.preview_expiry_timestamp && void 0 !== this.preview_expiry_timestamp && (e.writeFieldBegin("preview_expiry_timestamp", r.Type.I64, 11), e.writeI64(this.preview_expiry_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Programmatic = function(e) {
				this.ad_unit = null, this.count = null, this.partner = null, this.type = null, e && (void 0 !== e.ad_unit && null !== e.ad_unit && (this.ad_unit = e.ad_unit), void 0 !== e.count && null !== e.count && (this.count = e.count), void 0 !== e.partner && null !== e.partner && (this.partner = e.partner), void 0 !== e.type && null !== e.type && (this.type = e.type))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Programmatic"), null !== this.ad_unit && void 0 !== this.ad_unit && (e.writeFieldBegin("ad_unit", r.Type.STRING, 1), e.writeString(this.ad_unit), e.writeFieldEnd()), null !== this.count && void 0 !== this.count && (e.writeFieldBegin("count", r.Type.I64, 2), e.writeI64(this.count), e.writeFieldEnd()), null !== this.partner && void 0 !== this.partner && (e.writeFieldBegin("partner", r.Type.STRING, 3), e.writeString(this.partner), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 4), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adblock_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Adblock = function(e) {
					this.enabled = null, this.acceptable_ads = null, e && (void 0 !== e.enabled && null !== e.enabled && (this.enabled = e.enabled), void 0 !== e.acceptable_ads && null !== e.acceptable_ads && (this.acceptable_ads = e.acceptable_ads))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Adblock"), null !== this.enabled && void 0 !== this.enabled && (e.writeFieldBegin("enabled", r.Type.BOOL, 1), e.writeBool(this.enabled), e.writeFieldEnd()), null !== this.acceptable_ads && void 0 !== this.acceptable_ads && (e.writeFieldBegin("acceptable_ads", r.Type.BOOL, 2), e.writeBool(this.acceptable_ads), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adcampaign_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.AdCampaign = function(e) {
					this.id = null, this.name = null, this.objective = null, this.configured_status = null, this.effective_status = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.objective && null !== e.objective && (this.objective = e.objective), void 0 !== e.configured_status && null !== e.configured_status && (this.configured_status = e.configured_status), void 0 !== e.effective_status && null !== e.effective_status && (this.effective_status = e.effective_status))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("AdCampaign"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.objective && void 0 !== this.objective && (e.writeFieldBegin("objective", r.Type.STRING, 3), e.writeString(this.objective), e.writeFieldEnd()), null !== this.configured_status && void 0 !== this.configured_status && (e.writeFieldBegin("configured_status", r.Type.STRING, 4), e.writeString(this.configured_status), e.writeFieldEnd()), null !== this.effective_status && void 0 !== this.effective_status && (e.writeFieldBegin("effective_status", r.Type.STRING, 5), e.writeString(this.effective_status), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adevent_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.AdRequest = function(e) {
					this.number_min_distance = null, this.first_chunk = null, this.post_links = null, this.placement = null, this.platform = null, this.slots = null, e && (void 0 !== e.number_min_distance && null !== e.number_min_distance && (this.number_min_distance = e.number_min_distance), void 0 !== e.first_chunk && null !== e.first_chunk && (this.first_chunk = e.first_chunk), void 0 !== e.post_links && null !== e.post_links && (this.post_links = r.copyList(e.post_links, [null])), void 0 !== e.placement && null !== e.placement && (this.placement = e.placement), void 0 !== e.platform && null !== e.platform && (this.platform = e.platform), void 0 !== e.slots && null !== e.slots && (this.slots = r.copyList(e.slots, [null])))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("AdRequest"), null !== this.number_min_distance && void 0 !== this.number_min_distance && (e.writeFieldBegin("number_min_distance", r.Type.I64, 1), e.writeI64(this.number_min_distance), e.writeFieldEnd()), null !== this.first_chunk && void 0 !== this.first_chunk && (e.writeFieldBegin("first_chunk", r.Type.BOOL, 2), e.writeBool(this.first_chunk), e.writeFieldEnd()), null !== this.post_links && void 0 !== this.post_links) {
					for (var t in e.writeFieldBegin("post_links", r.Type.LIST, 3), e.writeListBegin(r.Type.STRING, this.post_links.length), this.post_links) this.post_links.hasOwnProperty(t) && (t = this.post_links[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.placement && void 0 !== this.placement && (e.writeFieldBegin("placement", r.Type.STRING, 4), e.writeString(this.placement), e.writeFieldEnd()), null !== this.platform && void 0 !== this.platform && (e.writeFieldBegin("platform", r.Type.STRING, 5), e.writeString(this.platform), e.writeFieldEnd()), null !== this.slots && void 0 !== this.slots) {
					for (var i in e.writeFieldBegin("slots", r.Type.LIST, 6), e.writeListBegin(r.Type.STRING, this.slots.length), this.slots) this.slots.hasOwnProperty(i) && (i = this.slots[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.AdDecision = function(e) {
				this.hide_gold = null, this.hide_mod = null, this.hide_news = null, this.hide_whitelist = null, this.hide_sort = null, this.hide_experiment = null, this.hide_other = null, this.hide_source_post = null, e && (void 0 !== e.hide_gold && null !== e.hide_gold && (this.hide_gold = e.hide_gold), void 0 !== e.hide_mod && null !== e.hide_mod && (this.hide_mod = e.hide_mod), void 0 !== e.hide_news && null !== e.hide_news && (this.hide_news = e.hide_news), void 0 !== e.hide_whitelist && null !== e.hide_whitelist && (this.hide_whitelist = e.hide_whitelist), void 0 !== e.hide_sort && null !== e.hide_sort && (this.hide_sort = e.hide_sort), void 0 !== e.hide_experiment && null !== e.hide_experiment && (this.hide_experiment = e.hide_experiment), void 0 !== e.hide_other && null !== e.hide_other && (this.hide_other = e.hide_other), void 0 !== e.hide_source_post && null !== e.hide_source_post && (this.hide_source_post = e.hide_source_post))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("AdDecision"), null !== this.hide_gold && void 0 !== this.hide_gold && (e.writeFieldBegin("hide_gold", r.Type.BOOL, 1), e.writeBool(this.hide_gold), e.writeFieldEnd()), null !== this.hide_mod && void 0 !== this.hide_mod && (e.writeFieldBegin("hide_mod", r.Type.BOOL, 2), e.writeBool(this.hide_mod), e.writeFieldEnd()), null !== this.hide_news && void 0 !== this.hide_news && (e.writeFieldBegin("hide_news", r.Type.BOOL, 3), e.writeBool(this.hide_news), e.writeFieldEnd()), null !== this.hide_whitelist && void 0 !== this.hide_whitelist && (e.writeFieldBegin("hide_whitelist", r.Type.BOOL, 4), e.writeBool(this.hide_whitelist), e.writeFieldEnd()), null !== this.hide_sort && void 0 !== this.hide_sort && (e.writeFieldBegin("hide_sort", r.Type.BOOL, 5), e.writeBool(this.hide_sort), e.writeFieldEnd()), null !== this.hide_experiment && void 0 !== this.hide_experiment && (e.writeFieldBegin("hide_experiment", r.Type.BOOL, 6), e.writeBool(this.hide_experiment), e.writeFieldEnd()), null !== this.hide_other && void 0 !== this.hide_other && (e.writeFieldBegin("hide_other", r.Type.BOOL, 7), e.writeBool(this.hide_other), e.writeFieldEnd()), null !== this.hide_source_post && void 0 !== this.hide_source_post && (e.writeFieldBegin("hide_source_post", r.Type.BOOL, 8), e.writeBool(this.hide_source_post), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.AdPush = function(e) {
				this.push_whitelist = null, this.push_nsfw = null, this.push_keyword = null, this.push_other = null, this.direction = null, this.first_ad = null, e && (void 0 !== e.push_whitelist && null !== e.push_whitelist && (this.push_whitelist = e.push_whitelist), void 0 !== e.push_nsfw && null !== e.push_nsfw && (this.push_nsfw = e.push_nsfw), void 0 !== e.push_keyword && null !== e.push_keyword && (this.push_keyword = e.push_keyword), void 0 !== e.push_other && null !== e.push_other && (this.push_other = e.push_other), void 0 !== e.direction && null !== e.direction && (this.direction = e.direction), void 0 !== e.first_ad && null !== e.first_ad && (this.first_ad = e.first_ad))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("AdPush"), null !== this.push_whitelist && void 0 !== this.push_whitelist && (e.writeFieldBegin("push_whitelist", r.Type.BOOL, 1), e.writeBool(this.push_whitelist), e.writeFieldEnd()), null !== this.push_nsfw && void 0 !== this.push_nsfw && (e.writeFieldBegin("push_nsfw", r.Type.BOOL, 2), e.writeBool(this.push_nsfw), e.writeFieldEnd()), null !== this.push_keyword && void 0 !== this.push_keyword && (e.writeFieldBegin("push_keyword", r.Type.STRING, 3), e.writeString(this.push_keyword), e.writeFieldEnd()), null !== this.push_other && void 0 !== this.push_other && (e.writeFieldBegin("push_other", r.Type.BOOL, 4), e.writeBool(this.push_other), e.writeFieldEnd()), null !== this.direction && void 0 !== this.direction && (e.writeFieldBegin("direction", r.Type.STRING, 5), e.writeString(this.direction), e.writeFieldEnd()), null !== this.first_ad && void 0 !== this.first_ad && (e.writeFieldBegin("first_ad", r.Type.BOOL, 6), e.writeBool(this.first_ad), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.AdBrandSafety = function(e) {
				this.tier = null, this.tier_reason_rall = null, this.tier_reason_sort = null, this.tier_reason_whitelist = null, e && (void 0 !== e.tier && null !== e.tier && (this.tier = e.tier), void 0 !== e.tier_reason_rall && null !== e.tier_reason_rall && (this.tier_reason_rall = e.tier_reason_rall), void 0 !== e.tier_reason_sort && null !== e.tier_reason_sort && (this.tier_reason_sort = e.tier_reason_sort), void 0 !== e.tier_reason_whitelist && null !== e.tier_reason_whitelist && (this.tier_reason_whitelist = e.tier_reason_whitelist))
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("AdBrandSafety"), null !== this.tier && void 0 !== this.tier && (e.writeFieldBegin("tier", r.Type.STRING, 1), e.writeString(this.tier), e.writeFieldEnd()), null !== this.tier_reason_rall && void 0 !== this.tier_reason_rall && (e.writeFieldBegin("tier_reason_rall", r.Type.BOOL, 2), e.writeBool(this.tier_reason_rall), e.writeFieldEnd()), null !== this.tier_reason_sort && void 0 !== this.tier_reason_sort && (e.writeFieldBegin("tier_reason_sort", r.Type.BOOL, 3), e.writeBool(this.tier_reason_sort), e.writeFieldEnd()), null !== this.tier_reason_whitelist && void 0 !== this.tier_reason_whitelist && (e.writeFieldBegin("tier_reason_whitelist", r.Type.BOOL, 4), e.writeBool(this.tier_reason_whitelist), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adgroup_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.AdGroup = function(e) {
					this.id = null, this.start_timestamp = null, this.end_timestamp = null, this.priority = null, this.bid_type = null, this.bid_value = null, this.goal_type = null, this.goal_value = null, this.schedule_json = null, this.cap_type = null, this.lifetime_cap_value = null, this.daily_cap_value = null, this.frequeny_caps_json = null, this.use_default_frequency_cap = null, this.configured_status = null, this.effective_status = null, this.name = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.priority && null !== e.priority && (this.priority = e.priority), void 0 !== e.bid_type && null !== e.bid_type && (this.bid_type = e.bid_type), void 0 !== e.bid_value && null !== e.bid_value && (this.bid_value = e.bid_value), void 0 !== e.goal_type && null !== e.goal_type && (this.goal_type = e.goal_type), void 0 !== e.goal_value && null !== e.goal_value && (this.goal_value = e.goal_value), void 0 !== e.schedule_json && null !== e.schedule_json && (this.schedule_json = r.copyList(e.schedule_json, [null])), void 0 !== e.cap_type && null !== e.cap_type && (this.cap_type = e.cap_type), void 0 !== e.lifetime_cap_value && null !== e.lifetime_cap_value && (this.lifetime_cap_value = e.lifetime_cap_value), void 0 !== e.daily_cap_value && null !== e.daily_cap_value && (this.daily_cap_value = e.daily_cap_value), void 0 !== e.frequeny_caps_json && null !== e.frequeny_caps_json && (this.frequeny_caps_json = r.copyList(e.frequeny_caps_json, [null])), void 0 !== e.use_default_frequency_cap && null !== e.use_default_frequency_cap && (this.use_default_frequency_cap = e.use_default_frequency_cap), void 0 !== e.configured_status && null !== e.configured_status && (this.configured_status = e.configured_status), void 0 !== e.effective_status && null !== e.effective_status && (this.effective_status = e.effective_status), void 0 !== e.name && null !== e.name && (this.name = e.name))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("AdGroup"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", r.Type.I64, 2), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", r.Type.I64, 3), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.priority && void 0 !== this.priority && (e.writeFieldBegin("priority", r.Type.STRING, 4), e.writeString(this.priority), e.writeFieldEnd()), null !== this.bid_type && void 0 !== this.bid_type && (e.writeFieldBegin("bid_type", r.Type.STRING, 5), e.writeString(this.bid_type), e.writeFieldEnd()), null !== this.bid_value && void 0 !== this.bid_value && (e.writeFieldBegin("bid_value", r.Type.I64, 6), e.writeI64(this.bid_value), e.writeFieldEnd()), null !== this.goal_type && void 0 !== this.goal_type && (e.writeFieldBegin("goal_type", r.Type.STRING, 7), e.writeString(this.goal_type), e.writeFieldEnd()), null !== this.goal_value && void 0 !== this.goal_value && (e.writeFieldBegin("goal_value", r.Type.I64, 8), e.writeI64(this.goal_value), e.writeFieldEnd()), null !== this.schedule_json && void 0 !== this.schedule_json) {
					for (var t in e.writeFieldBegin("schedule_json", r.Type.LIST, 9), e.writeListBegin(r.Type.STRING, this.schedule_json.length), this.schedule_json) this.schedule_json.hasOwnProperty(t) && (t = this.schedule_json[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.cap_type && void 0 !== this.cap_type && (e.writeFieldBegin("cap_type", r.Type.STRING, 10), e.writeString(this.cap_type), e.writeFieldEnd()), null !== this.lifetime_cap_value && void 0 !== this.lifetime_cap_value && (e.writeFieldBegin("lifetime_cap_value", r.Type.I64, 11), e.writeI64(this.lifetime_cap_value), e.writeFieldEnd()), null !== this.daily_cap_value && void 0 !== this.daily_cap_value && (e.writeFieldBegin("daily_cap_value", r.Type.I64, 12), e.writeI64(this.daily_cap_value), e.writeFieldEnd()), null !== this.frequeny_caps_json && void 0 !== this.frequeny_caps_json) {
					for (var i in e.writeFieldBegin("frequeny_caps_json", r.Type.LIST, 13), e.writeListBegin(r.Type.STRING, this.frequeny_caps_json.length), this.frequeny_caps_json) this.frequeny_caps_json.hasOwnProperty(i) && (i = this.frequeny_caps_json[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.use_default_frequency_cap && void 0 !== this.use_default_frequency_cap && (e.writeFieldBegin("use_default_frequency_cap", r.Type.BOOL, 14), e.writeBool(this.use_default_frequency_cap), e.writeFieldEnd()), null !== this.configured_status && void 0 !== this.configured_status && (e.writeFieldBegin("configured_status", r.Type.STRING, 15), e.writeString(this.configured_status), e.writeFieldEnd()), null !== this.effective_status && void 0 !== this.effective_status && (e.writeFieldBegin("effective_status", r.Type.STRING, 16), e.writeString(this.effective_status), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 17), e.writeString(this.name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/admin_action_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.AdminAction = function(e) {
					this.password_dump_id = null, this.number_password_dump_credentials = null, this.takedown_id = null, this.removal_type = null, this.removal_is_restorable = null, this.notes = null, this.process_notes = null, this.timeout_duration = null, this.template_type = null, e && (void 0 !== e.password_dump_id && null !== e.password_dump_id && (this.password_dump_id = e.password_dump_id), void 0 !== e.number_password_dump_credentials && null !== e.number_password_dump_credentials && (this.number_password_dump_credentials = e.number_password_dump_credentials), void 0 !== e.takedown_id && null !== e.takedown_id && (this.takedown_id = e.takedown_id), void 0 !== e.removal_type && null !== e.removal_type && (this.removal_type = e.removal_type), void 0 !== e.removal_is_restorable && null !== e.removal_is_restorable && (this.removal_is_restorable = e.removal_is_restorable), void 0 !== e.notes && null !== e.notes && (this.notes = e.notes), void 0 !== e.process_notes && null !== e.process_notes && (this.process_notes = e.process_notes), void 0 !== e.timeout_duration && null !== e.timeout_duration && (this.timeout_duration = e.timeout_duration), void 0 !== e.template_type && null !== e.template_type && (this.template_type = e.template_type))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("AdminAction"), null !== this.password_dump_id && void 0 !== this.password_dump_id && (e.writeFieldBegin("password_dump_id", r.Type.STRING, 1), e.writeString(this.password_dump_id), e.writeFieldEnd()), null !== this.number_password_dump_credentials && void 0 !== this.number_password_dump_credentials && (e.writeFieldBegin("number_password_dump_credentials", r.Type.I32, 2), e.writeI32(this.number_password_dump_credentials), e.writeFieldEnd()), null !== this.takedown_id && void 0 !== this.takedown_id && (e.writeFieldBegin("takedown_id", r.Type.STRING, 3), e.writeString(this.takedown_id), e.writeFieldEnd()), null !== this.removal_type && void 0 !== this.removal_type && (e.writeFieldBegin("removal_type", r.Type.STRING, 4), e.writeString(this.removal_type), e.writeFieldEnd()), null !== this.removal_is_restorable && void 0 !== this.removal_is_restorable && (e.writeFieldBegin("removal_is_restorable", r.Type.BOOL, 5), e.writeBool(this.removal_is_restorable), e.writeFieldEnd()), null !== this.notes && void 0 !== this.notes && (e.writeFieldBegin("notes", r.Type.STRING, 6), e.writeString(this.notes), e.writeFieldEnd()), null !== this.process_notes && void 0 !== this.process_notes && (e.writeFieldBegin("process_notes", r.Type.STRING, 7), e.writeString(this.process_notes), e.writeFieldEnd()), null !== this.timeout_duration && void 0 !== this.timeout_duration && (e.writeFieldBegin("timeout_duration", r.Type.I32, 8), e.writeI32(this.timeout_duration), e.writeFieldEnd()), null !== this.template_type && void 0 !== this.template_type && (e.writeFieldBegin("template_type", r.Type.STRING, 9), e.writeString(this.template_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.NCMECReport = function(e) {
				this.id = null, this.classification_type = null, this.post_id = null, this.file_viewed_by_admin = null, this.user_id = null, this.email_verified = null, this.email_verified_timestamp = null, this.account_created_timestamp = null, this.account_registration_proxy = null, this.account_added_note = null, this.permalink = null, this.content_url = null, this.content_is_reddit_hosted = null, this.post_created_timestamp = null, this.post_possible_proxy = null, this.filename = null, this.content_publicly_available = null, this.report_added_note = null, this.post_added_note = null, this.is_live_stream = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.classification_type && null !== e.classification_type && (this.classification_type = e.classification_type), void 0 !== e.post_id && null !== e.post_id && (this.post_id = e.post_id), void 0 !== e.file_viewed_by_admin && null !== e.file_viewed_by_admin && (this.file_viewed_by_admin = e.file_viewed_by_admin), void 0 !== e.user_id && null !== e.user_id && (this.user_id = e.user_id), void 0 !== e.email_verified && null !== e.email_verified && (this.email_verified = e.email_verified), void 0 !== e.email_verified_timestamp && null !== e.email_verified_timestamp && (this.email_verified_timestamp = e.email_verified_timestamp), void 0 !== e.account_created_timestamp && null !== e.account_created_timestamp && (this.account_created_timestamp = e.account_created_timestamp), void 0 !== e.account_registration_proxy && null !== e.account_registration_proxy && (this.account_registration_proxy = e.account_registration_proxy), void 0 !== e.account_added_note && null !== e.account_added_note && (this.account_added_note = e.account_added_note), void 0 !== e.permalink && null !== e.permalink && (this.permalink = e.permalink), void 0 !== e.content_url && null !== e.content_url && (this.content_url = e.content_url), void 0 !== e.content_is_reddit_hosted && null !== e.content_is_reddit_hosted && (this.content_is_reddit_hosted = e.content_is_reddit_hosted), void 0 !== e.post_created_timestamp && null !== e.post_created_timestamp && (this.post_created_timestamp = e.post_created_timestamp), void 0 !== e.post_possible_proxy && null !== e.post_possible_proxy && (this.post_possible_proxy = e.post_possible_proxy), void 0 !== e.filename && null !== e.filename && (this.filename = e.filename), void 0 !== e.content_publicly_available && null !== e.content_publicly_available && (this.content_publicly_available = e.content_publicly_available), void 0 !== e.report_added_note && null !== e.report_added_note && (this.report_added_note = e.report_added_note), void 0 !== e.post_added_note && null !== e.post_added_note && (this.post_added_note = e.post_added_note), void 0 !== e.is_live_stream && null !== e.is_live_stream && (this.is_live_stream = e.is_live_stream))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("NCMECReport"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.I32, 1), e.writeI32(this.id), e.writeFieldEnd()), null !== this.classification_type && void 0 !== this.classification_type && (e.writeFieldBegin("classification_type", r.Type.STRING, 2), e.writeString(this.classification_type), e.writeFieldEnd()), null !== this.post_id && void 0 !== this.post_id && (e.writeFieldBegin("post_id", r.Type.STRING, 3), e.writeString(this.post_id), e.writeFieldEnd()), null !== this.file_viewed_by_admin && void 0 !== this.file_viewed_by_admin && (e.writeFieldBegin("file_viewed_by_admin", r.Type.BOOL, 4), e.writeBool(this.file_viewed_by_admin), e.writeFieldEnd()), null !== this.user_id && void 0 !== this.user_id && (e.writeFieldBegin("user_id", r.Type.STRING, 5), e.writeString(this.user_id), e.writeFieldEnd()), null !== this.email_verified && void 0 !== this.email_verified && (e.writeFieldBegin("email_verified", r.Type.BOOL, 6), e.writeBool(this.email_verified), e.writeFieldEnd()), null !== this.email_verified_timestamp && void 0 !== this.email_verified_timestamp && (e.writeFieldBegin("email_verified_timestamp", r.Type.I64, 7), e.writeI64(this.email_verified_timestamp), e.writeFieldEnd()), null !== this.account_created_timestamp && void 0 !== this.account_created_timestamp && (e.writeFieldBegin("account_created_timestamp", r.Type.I64, 8), e.writeI64(this.account_created_timestamp), e.writeFieldEnd()), null !== this.account_registration_proxy && void 0 !== this.account_registration_proxy && (e.writeFieldBegin("account_registration_proxy", r.Type.BOOL, 9), e.writeBool(this.account_registration_proxy), e.writeFieldEnd()), null !== this.account_added_note && void 0 !== this.account_added_note && (e.writeFieldBegin("account_added_note", r.Type.STRING, 10), e.writeString(this.account_added_note), e.writeFieldEnd()), null !== this.permalink && void 0 !== this.permalink && (e.writeFieldBegin("permalink", r.Type.STRING, 11), e.writeString(this.permalink), e.writeFieldEnd()), null !== this.content_url && void 0 !== this.content_url && (e.writeFieldBegin("content_url", r.Type.STRING, 12), e.writeString(this.content_url), e.writeFieldEnd()), null !== this.content_is_reddit_hosted && void 0 !== this.content_is_reddit_hosted && (e.writeFieldBegin("content_is_reddit_hosted", r.Type.BOOL, 13), e.writeBool(this.content_is_reddit_hosted), e.writeFieldEnd()), null !== this.post_created_timestamp && void 0 !== this.post_created_timestamp && (e.writeFieldBegin("post_created_timestamp", r.Type.I64, 14), e.writeI64(this.post_created_timestamp), e.writeFieldEnd()), null !== this.post_possible_proxy && void 0 !== this.post_possible_proxy && (e.writeFieldBegin("post_possible_proxy", r.Type.BOOL, 15), e.writeBool(this.post_possible_proxy), e.writeFieldEnd()), null !== this.filename && void 0 !== this.filename && (e.writeFieldBegin("filename", r.Type.STRING, 16), e.writeString(this.filename), e.writeFieldEnd()), null !== this.content_publicly_available && void 0 !== this.content_publicly_available && (e.writeFieldBegin("content_publicly_available", r.Type.BOOL, 17), e.writeBool(this.content_publicly_available), e.writeFieldEnd()), null !== this.report_added_note && void 0 !== this.report_added_note && (e.writeFieldBegin("report_added_note", r.Type.STRING, 18), e.writeString(this.report_added_note), e.writeFieldEnd()), null !== this.post_added_note && void 0 !== this.post_added_note && (e.writeFieldBegin("post_added_note", r.Type.STRING, 19), e.writeString(this.post_added_note), e.writeFieldEnd()), null !== this.is_live_stream && void 0 !== this.is_live_stream && (e.writeFieldBegin("is_live_stream", r.Type.BOOL, 20), e.writeBool(this.is_live_stream), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.CSAIMedia = function(e) {
				this.tracking_id = null, this.match = null, this.violation_types = null, this.violation_source = null, this.error_message = null, this.error_code = null, this.destination_queue_name = null, this.origin_queue_name = null, this.media_url = null, this.retry_media_url = null, e && (void 0 !== e.tracking_id && null !== e.tracking_id && (this.tracking_id = e.tracking_id), void 0 !== e.match && null !== e.match && (this.match = e.match), void 0 !== e.violation_types && null !== e.violation_types && (this.violation_types = r.copyList(e.violation_types, [null])), void 0 !== e.violation_source && null !== e.violation_source && (this.violation_source = e.violation_source), void 0 !== e.error_message && null !== e.error_message && (this.error_message = e.error_message), void 0 !== e.error_code && null !== e.error_code && (this.error_code = e.error_code), void 0 !== e.destination_queue_name && null !== e.destination_queue_name && (this.destination_queue_name = e.destination_queue_name), void 0 !== e.origin_queue_name && null !== e.origin_queue_name && (this.origin_queue_name = e.origin_queue_name), void 0 !== e.media_url && null !== e.media_url && (this.media_url = e.media_url), void 0 !== e.retry_media_url && null !== e.retry_media_url && (this.retry_media_url = e.retry_media_url))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				if (e.writeStructBegin("CSAIMedia"), null !== this.tracking_id && void 0 !== this.tracking_id && (e.writeFieldBegin("tracking_id", r.Type.STRING, 1), e.writeString(this.tracking_id), e.writeFieldEnd()), null !== this.match && void 0 !== this.match && (e.writeFieldBegin("match", r.Type.BOOL, 2), e.writeBool(this.match), e.writeFieldEnd()), null !== this.violation_types && void 0 !== this.violation_types) {
					for (var t in e.writeFieldBegin("violation_types", r.Type.LIST, 3), e.writeListBegin(r.Type.STRING, this.violation_types.length), this.violation_types) this.violation_types.hasOwnProperty(t) && (t = this.violation_types[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.violation_source && void 0 !== this.violation_source && (e.writeFieldBegin("violation_source", r.Type.STRING, 4), e.writeString(this.violation_source), e.writeFieldEnd()), null !== this.error_message && void 0 !== this.error_message && (e.writeFieldBegin("error_message", r.Type.STRING, 5), e.writeString(this.error_message), e.writeFieldEnd()), null !== this.error_code && void 0 !== this.error_code && (e.writeFieldBegin("error_code", r.Type.I32, 6), e.writeI32(this.error_code), e.writeFieldEnd()), null !== this.destination_queue_name && void 0 !== this.destination_queue_name && (e.writeFieldBegin("destination_queue_name", r.Type.STRING, 7), e.writeString(this.destination_queue_name), e.writeFieldEnd()), null !== this.origin_queue_name && void 0 !== this.origin_queue_name && (e.writeFieldBegin("origin_queue_name", r.Type.STRING, 8), e.writeString(this.origin_queue_name), e.writeFieldEnd()), null !== this.media_url && void 0 !== this.media_url && (e.writeFieldBegin("media_url", r.Type.STRING, 9), e.writeString(this.media_url), e.writeFieldEnd()), null !== this.retry_media_url && void 0 !== this.retry_media_url && (e.writeFieldBegin("retry_media_url", r.Type.STRING, 10), e.writeString(this.retry_media_url), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.CSAIContentReport = function(e) {
				this.reported_url = null, this.content_url = null, this.target_id = null, this.target_type = null, this.tracking_id = null, this.removed_by_user_type = null, this.content_type = null, this.removed_by_user_id = null, this.subreddit_id = null, this.original_queue_id = null, this.dest_queue_id = null, this.confirmed_csai = null, this.ncmec_report_number = null, this.reporter_id = null, this.permalink = null, e && (void 0 !== e.reported_url && null !== e.reported_url && (this.reported_url = e.reported_url), void 0 !== e.content_url && null !== e.content_url && (this.content_url = e.content_url), void 0 !== e.target_id && null !== e.target_id && (this.target_id = e.target_id), void 0 !== e.target_type && null !== e.target_type && (this.target_type = e.target_type), void 0 !== e.tracking_id && null !== e.tracking_id && (this.tracking_id = e.tracking_id), void 0 !== e.removed_by_user_type && null !== e.removed_by_user_type && (this.removed_by_user_type = e.removed_by_user_type), void 0 !== e.content_type && null !== e.content_type && (this.content_type = e.content_type), void 0 !== e.removed_by_user_id && null !== e.removed_by_user_id && (this.removed_by_user_id = e.removed_by_user_id), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.original_queue_id && null !== e.original_queue_id && (this.original_queue_id = e.original_queue_id), void 0 !== e.dest_queue_id && null !== e.dest_queue_id && (this.dest_queue_id = e.dest_queue_id), void 0 !== e.confirmed_csai && null !== e.confirmed_csai && (this.confirmed_csai = e.confirmed_csai), void 0 !== e.ncmec_report_number && null !== e.ncmec_report_number && (this.ncmec_report_number = e.ncmec_report_number), void 0 !== e.reporter_id && null !== e.reporter_id && (this.reporter_id = e.reporter_id), void 0 !== e.permalink && null !== e.permalink && (this.permalink = e.permalink))
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("CSAIContentReport"), null !== this.reported_url && void 0 !== this.reported_url && (e.writeFieldBegin("reported_url", r.Type.STRING, 1), e.writeString(this.reported_url), e.writeFieldEnd()), null !== this.content_url && void 0 !== this.content_url && (e.writeFieldBegin("content_url", r.Type.STRING, 2), e.writeString(this.content_url), e.writeFieldEnd()), null !== this.target_id && void 0 !== this.target_id && (e.writeFieldBegin("target_id", r.Type.STRING, 3), e.writeString(this.target_id), e.writeFieldEnd()), null !== this.target_type && void 0 !== this.target_type && (e.writeFieldBegin("target_type", r.Type.STRING, 4), e.writeString(this.target_type), e.writeFieldEnd()), null !== this.tracking_id && void 0 !== this.tracking_id && (e.writeFieldBegin("tracking_id", r.Type.STRING, 5), e.writeString(this.tracking_id), e.writeFieldEnd()), null !== this.removed_by_user_type && void 0 !== this.removed_by_user_type && (e.writeFieldBegin("removed_by_user_type", r.Type.STRING, 6), e.writeString(this.removed_by_user_type), e.writeFieldEnd()), null !== this.content_type && void 0 !== this.content_type && (e.writeFieldBegin("content_type", r.Type.STRING, 7), e.writeString(this.content_type), e.writeFieldEnd()), null !== this.removed_by_user_id && void 0 !== this.removed_by_user_id && (e.writeFieldBegin("removed_by_user_id", r.Type.STRING, 8), e.writeString(this.removed_by_user_id), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", r.Type.STRING, 9), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.original_queue_id && void 0 !== this.original_queue_id && (e.writeFieldBegin("original_queue_id", r.Type.STRING, 10), e.writeString(this.original_queue_id), e.writeFieldEnd()), null !== this.dest_queue_id && void 0 !== this.dest_queue_id && (e.writeFieldBegin("dest_queue_id", r.Type.STRING, 11), e.writeString(this.dest_queue_id), e.writeFieldEnd()), null !== this.confirmed_csai && void 0 !== this.confirmed_csai && (e.writeFieldBegin("confirmed_csai", r.Type.BOOL, 12), e.writeBool(this.confirmed_csai), e.writeFieldEnd()), null !== this.ncmec_report_number && void 0 !== this.ncmec_report_number && (e.writeFieldBegin("ncmec_report_number", r.Type.I64, 13), e.writeI64(this.ncmec_report_number), e.writeFieldEnd()), null !== this.reporter_id && void 0 !== this.reporter_id && (e.writeFieldBegin("reporter_id", r.Type.STRING, 14), e.writeString(this.reporter_id), e.writeFieldEnd()), null !== this.permalink && void 0 !== this.permalink && (e.writeFieldBegin("permalink", r.Type.STRING, 15), e.writeString(this.permalink), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var a = e.exports.RerouteRule = function(e) {
				this.id = null, this.ticket_type = null, this.priority = null, this.target_queue_id = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.ticket_type && null !== e.ticket_type && (this.ticket_type = e.ticket_type), void 0 !== e.priority && null !== e.priority && (this.priority = e.priority), void 0 !== e.target_queue_id && null !== e.target_queue_id && (this.target_queue_id = e.target_queue_id))
			};
			a.prototype = {}, a.prototype.write = function(e) {
				e.writeStructBegin("RerouteRule"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.ticket_type && void 0 !== this.ticket_type && (e.writeFieldBegin("ticket_type", r.Type.STRING, 2), e.writeString(this.ticket_type), e.writeFieldEnd()), null !== this.priority && void 0 !== this.priority && (e.writeFieldBegin("priority", r.Type.I32, 3), e.writeI32(this.priority), e.writeFieldEnd()), null !== this.target_queue_id && void 0 !== this.target_queue_id && (e.writeFieldBegin("target_queue_id", r.Type.STRING, 4), e.writeString(this.target_queue_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var u = e.exports.ReddarQueue = function(e) {
				this.id = null, this.type = null, this.ticket_type = null, this.group_type = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.ticket_type && null !== e.ticket_type && (this.ticket_type = e.ticket_type), void 0 !== e.group_type && null !== e.group_type && (this.group_type = e.group_type))
			};
			u.prototype = {}, u.prototype.write = function(e) {
				e.writeStructBegin("ReddarQueue"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.ticket_type && void 0 !== this.ticket_type && (e.writeFieldBegin("ticket_type", r.Type.STRING, 3), e.writeString(this.ticket_type), e.writeFieldEnd()), null !== this.group_type && void 0 !== this.group_type && (e.writeFieldBegin("group_type", r.Type.STRING, 4), e.writeString(this.group_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/admin_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Admin = function(e) {
					if (this.id = null, this.name = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.name && null !== e.name && (this.name = e.name)
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Admin"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adtargeting_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/adtypedefs_types.js"), e.exports = {}, e.exports.AdTargeting = function(e) {
					this.geolocations = null, this.excluded_geolocations = null, this.excluded_keywords = null, this.interests = null, this.excluded_interests = null, this.communities = null, this.excluded_communities = null, this.devices_json = null, this.placements_json = null, this.advanced = null, this.custom_audience_ids = null, this.excluded_custom_audience_ids = null, this.expand_targeting = null, e && (void 0 !== e.geolocations && null !== e.geolocations && (this.geolocations = r.copyList(e.geolocations, [null])), void 0 !== e.excluded_geolocations && null !== e.excluded_geolocations && (this.excluded_geolocations = r.copyList(e.excluded_geolocations, [null])), void 0 !== e.excluded_keywords && null !== e.excluded_keywords && (this.excluded_keywords = r.copyList(e.excluded_keywords, [null])), void 0 !== e.interests && null !== e.interests && (this.interests = r.copyList(e.interests, [null])), void 0 !== e.excluded_interests && null !== e.excluded_interests && (this.excluded_interests = r.copyList(e.excluded_interests, [null])), void 0 !== e.communities && null !== e.communities && (this.communities = r.copyList(e.communities, [null])), void 0 !== e.excluded_communities && null !== e.excluded_communities && (this.excluded_communities = r.copyList(e.excluded_communities, [null])), void 0 !== e.devices_json && null !== e.devices_json && (this.devices_json = r.copyList(e.devices_json, [null])), void 0 !== e.placements_json && null !== e.placements_json && (this.placements_json = r.copyList(e.placements_json, [null])), void 0 !== e.advanced && null !== e.advanced && (this.advanced = e.advanced), void 0 !== e.custom_audience_ids && null !== e.custom_audience_ids && (this.custom_audience_ids = r.copyList(e.custom_audience_ids, [null])), void 0 !== e.excluded_custom_audience_ids && null !== e.excluded_custom_audience_ids && (this.excluded_custom_audience_ids = r.copyList(e.excluded_custom_audience_ids, [null])), void 0 !== e.expand_targeting && null !== e.expand_targeting && (this.expand_targeting = e.expand_targeting))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("AdTargeting"), null !== this.geolocations && void 0 !== this.geolocations) {
					for (var t in e.writeFieldBegin("geolocations", r.Type.LIST, 1), e.writeListBegin(r.Type.STRING, this.geolocations.length), this.geolocations) this.geolocations.hasOwnProperty(t) && (t = this.geolocations[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_geolocations && void 0 !== this.excluded_geolocations) {
					for (var i in e.writeFieldBegin("excluded_geolocations", r.Type.LIST, 2), e.writeListBegin(r.Type.STRING, this.excluded_geolocations.length), this.excluded_geolocations) this.excluded_geolocations.hasOwnProperty(i) && (i = this.excluded_geolocations[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_keywords && void 0 !== this.excluded_keywords) {
					for (var n in e.writeFieldBegin("excluded_keywords", r.Type.LIST, 3), e.writeListBegin(r.Type.STRING, this.excluded_keywords.length), this.excluded_keywords) this.excluded_keywords.hasOwnProperty(n) && (n = this.excluded_keywords[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.interests && void 0 !== this.interests) {
					for (var s in e.writeFieldBegin("interests", r.Type.LIST, 4), e.writeListBegin(r.Type.STRING, this.interests.length), this.interests) this.interests.hasOwnProperty(s) && (s = this.interests[s], e.writeString(s));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_interests && void 0 !== this.excluded_interests) {
					for (var o in e.writeFieldBegin("excluded_interests", r.Type.LIST, 5), e.writeListBegin(r.Type.STRING, this.excluded_interests.length), this.excluded_interests) this.excluded_interests.hasOwnProperty(o) && (o = this.excluded_interests[o], e.writeString(o));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.communities && void 0 !== this.communities) {
					for (var d in e.writeFieldBegin("communities", r.Type.LIST, 6), e.writeListBegin(r.Type.STRING, this.communities.length), this.communities) this.communities.hasOwnProperty(d) && (d = this.communities[d], e.writeString(d));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_communities && void 0 !== this.excluded_communities) {
					for (var l in e.writeFieldBegin("excluded_communities", r.Type.LIST, 7), e.writeListBegin(r.Type.STRING, this.excluded_communities.length), this.excluded_communities) this.excluded_communities.hasOwnProperty(l) && (l = this.excluded_communities[l], e.writeString(l));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.devices_json && void 0 !== this.devices_json) {
					for (var a in e.writeFieldBegin("devices_json", r.Type.LIST, 8), e.writeListBegin(r.Type.STRING, this.devices_json.length), this.devices_json) this.devices_json.hasOwnProperty(a) && (a = this.devices_json[a], e.writeString(a));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.placements_json && void 0 !== this.placements_json) {
					for (var u in e.writeFieldBegin("placements_json", r.Type.LIST, 9), e.writeListBegin(r.Type.STRING, this.placements_json.length), this.placements_json) this.placements_json.hasOwnProperty(u) && (u = this.placements_json[u], e.writeString(u));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.advanced && void 0 !== this.advanced && (e.writeFieldBegin("advanced", r.Type.STRING, 10), e.writeString(this.advanced), e.writeFieldEnd()), null !== this.custom_audience_ids && void 0 !== this.custom_audience_ids) {
					for (var c in e.writeFieldBegin("custom_audience_ids", r.Type.LIST, 11), e.writeListBegin(r.Type.STRING, this.custom_audience_ids.length), this.custom_audience_ids) this.custom_audience_ids.hasOwnProperty(c) && (c = this.custom_audience_ids[c], e.writeString(c));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.excluded_custom_audience_ids && void 0 !== this.excluded_custom_audience_ids) {
					for (var _ in e.writeFieldBegin("excluded_custom_audience_ids", r.Type.LIST, 12), e.writeListBegin(r.Type.STRING, this.excluded_custom_audience_ids.length), this.excluded_custom_audience_ids) this.excluded_custom_audience_ids.hasOwnProperty(_) && (_ = this.excluded_custom_audience_ids[_], e.writeString(_));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.expand_targeting && void 0 !== this.expand_targeting && (e.writeFieldBegin("expand_targeting", r.Type.BOOL, 13), e.writeBool(this.expand_targeting), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/adtypedefs_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js");
			n.Thrift, n.Q, i("./node_modules/node-int64/Int64.js"), e.exports = {}
		},
		"./src/telemetry/eventSchemas/announcement_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), e.exports = {}, e.exports.Announcement = function(e) {
					this.id = null, this.title = null, this.body = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.body && null !== e.body && (this.body = e.body))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Announcement"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), null !== this.body && void 0 !== this.body && (e.writeFieldBegin("body", r.Type.STRING, 3), e.writeString(this.body), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/audit_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), i("./src/telemetry/eventSchemas/audittypedefs_types.js"), e.exports = {}, e.exports.ReddarAudit = function(e) {
					this.id = null, this.auditor_id = null, this.ticket_ids = null, this.included_queues = null, this.included_agent_ids = null, this.included_range_start_timestamp = null, this.included_range_end_timestamp = null, this.percent_tickets_included = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.auditor_id && null !== e.auditor_id && (this.auditor_id = e.auditor_id), void 0 !== e.ticket_ids && null !== e.ticket_ids && (this.ticket_ids = r.copyList(e.ticket_ids, [null])), void 0 !== e.included_queues && null !== e.included_queues && (this.included_queues = r.copyList(e.included_queues, [null])), void 0 !== e.included_agent_ids && null !== e.included_agent_ids && (this.included_agent_ids = r.copyList(e.included_agent_ids, [null])), void 0 !== e.included_range_start_timestamp && null !== e.included_range_start_timestamp && (this.included_range_start_timestamp = e.included_range_start_timestamp), void 0 !== e.included_range_end_timestamp && null !== e.included_range_end_timestamp && (this.included_range_end_timestamp = e.included_range_end_timestamp), void 0 !== e.percent_tickets_included && null !== e.percent_tickets_included && (this.percent_tickets_included = e.percent_tickets_included))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("ReddarAudit"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.auditor_id && void 0 !== this.auditor_id && (e.writeFieldBegin("auditor_id", r.Type.STRING, 2), e.writeString(this.auditor_id), e.writeFieldEnd()), null !== this.ticket_ids && void 0 !== this.ticket_ids) {
					for (var t in e.writeFieldBegin("ticket_ids", r.Type.LIST, 3), e.writeListBegin(r.Type.STRING, this.ticket_ids.length), this.ticket_ids) this.ticket_ids.hasOwnProperty(t) && (t = this.ticket_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.included_queues && void 0 !== this.included_queues) {
					for (var i in e.writeFieldBegin("included_queues", r.Type.LIST, 4), e.writeListBegin(r.Type.STRING, this.included_queues.length), this.included_queues) this.included_queues.hasOwnProperty(i) && (i = this.included_queues[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.included_agent_ids && void 0 !== this.included_agent_ids) {
					for (var n in e.writeFieldBegin("included_agent_ids", r.Type.LIST, 5), e.writeListBegin(r.Type.STRING, this.included_agent_ids.length), this.included_agent_ids) this.included_agent_ids.hasOwnProperty(n) && (n = this.included_agent_ids[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.included_range_start_timestamp && void 0 !== this.included_range_start_timestamp && (e.writeFieldBegin("included_range_start_timestamp", r.Type.I64, 6), e.writeI64(this.included_range_start_timestamp), e.writeFieldEnd()), null !== this.included_range_end_timestamp && void 0 !== this.included_range_end_timestamp && (e.writeFieldBegin("included_range_end_timestamp", r.Type.I64, 7), e.writeI64(this.included_range_end_timestamp), e.writeFieldEnd()), null !== this.percent_tickets_included && void 0 !== this.percent_tickets_included && (e.writeFieldBegin("percent_tickets_included", r.Type.DOUBLE, 8), e.writeDouble(this.percent_tickets_included), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.ReddarAuditTicket = function(e) {
				this.id = null, this.audit_id = null, this.auditor_id = null, this.ticket_id = null, this.agent_id = null, this.qa_user_action = null, this.qa_content_action = null, this.qa_policy = null, this.qa_message = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.audit_id && null !== e.audit_id && (this.audit_id = e.audit_id), void 0 !== e.auditor_id && null !== e.auditor_id && (this.auditor_id = e.auditor_id), void 0 !== e.ticket_id && null !== e.ticket_id && (this.ticket_id = e.ticket_id), void 0 !== e.agent_id && null !== e.agent_id && (this.agent_id = e.agent_id), void 0 !== e.qa_user_action && null !== e.qa_user_action && (this.qa_user_action = e.qa_user_action), void 0 !== e.qa_content_action && null !== e.qa_content_action && (this.qa_content_action = e.qa_content_action), void 0 !== e.qa_policy && null !== e.qa_policy && (this.qa_policy = e.qa_policy), void 0 !== e.qa_message && null !== e.qa_message && (this.qa_message = e.qa_message))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("ReddarAuditTicket"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.audit_id && void 0 !== this.audit_id && (e.writeFieldBegin("audit_id", r.Type.STRING, 2), e.writeString(this.audit_id), e.writeFieldEnd()), null !== this.auditor_id && void 0 !== this.auditor_id && (e.writeFieldBegin("auditor_id", r.Type.STRING, 3), e.writeString(this.auditor_id), e.writeFieldEnd()), null !== this.ticket_id && void 0 !== this.ticket_id && (e.writeFieldBegin("ticket_id", r.Type.STRING, 4), e.writeString(this.ticket_id), e.writeFieldEnd()), null !== this.agent_id && void 0 !== this.agent_id && (e.writeFieldBegin("agent_id", r.Type.STRING, 5), e.writeString(this.agent_id), e.writeFieldEnd()), null !== this.qa_user_action && void 0 !== this.qa_user_action && (e.writeFieldBegin("qa_user_action", r.Type.STRING, 6), e.writeString(this.qa_user_action), e.writeFieldEnd()), null !== this.qa_content_action && void 0 !== this.qa_content_action && (e.writeFieldBegin("qa_content_action", r.Type.STRING, 7), e.writeString(this.qa_content_action), e.writeFieldEnd()), null !== this.qa_policy && void 0 !== this.qa_policy && (e.writeFieldBegin("qa_policy", r.Type.STRING, 8), e.writeString(this.qa_policy), e.writeFieldEnd()), null !== this.qa_message && void 0 !== this.qa_message && (e.writeFieldBegin("qa_message", r.Type.STRING, 9), e.writeString(this.qa_message), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/audittypedefs_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js");
			n.Thrift, n.Q, i("./node_modules/node-int64/Int64.js"), e.exports = {}
		},
		"./src/telemetry/eventSchemas/banner_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Banner = function(e) {
					if (this.id = null, this.button_text = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.button_text && null !== e.button_text && (this.button_text = e.button_text)
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Banner"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.button_text && void 0 !== this.button_text && (e.writeFieldBegin("button_text", r.Type.STRING, 2), e.writeString(this.button_text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/billinginfo_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/adtypedefs_types.js"), e.exports = {}, e.exports.BillingInfo = function(e) {
					this.balance = null, this.billing_threshold = null, this.credit = null, this.max_billing_threshold = null, this.total_refund_pennies = null, this.available_freebies = null, this.spent_freebies = null, e && (void 0 !== e.balance && null !== e.balance && (this.balance = e.balance), void 0 !== e.billing_threshold && null !== e.billing_threshold && (this.billing_threshold = e.billing_threshold), void 0 !== e.credit && null !== e.credit && (this.credit = e.credit), void 0 !== e.max_billing_threshold && null !== e.max_billing_threshold && (this.max_billing_threshold = e.max_billing_threshold), void 0 !== e.total_refund_pennies && null !== e.total_refund_pennies && (this.total_refund_pennies = e.total_refund_pennies), void 0 !== e.available_freebies && null !== e.available_freebies && (this.available_freebies = e.available_freebies), void 0 !== e.spent_freebies && null !== e.spent_freebies && (this.spent_freebies = e.spent_freebies))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("BillingInfo"), null !== this.balance && void 0 !== this.balance && (e.writeFieldBegin("balance", r.Type.I64, 1), e.writeI64(this.balance), e.writeFieldEnd()), null !== this.billing_threshold && void 0 !== this.billing_threshold && (e.writeFieldBegin("billing_threshold", r.Type.I64, 2), e.writeI64(this.billing_threshold), e.writeFieldEnd()), null !== this.credit && void 0 !== this.credit && (e.writeFieldBegin("credit", r.Type.I64, 3), e.writeI64(this.credit), e.writeFieldEnd()), null !== this.max_billing_threshold && void 0 !== this.max_billing_threshold && (e.writeFieldBegin("max_billing_threshold", r.Type.I64, 4), e.writeI64(this.max_billing_threshold), e.writeFieldEnd()), null !== this.total_refund_pennies && void 0 !== this.total_refund_pennies && (e.writeFieldBegin("total_refund_pennies", r.Type.I64, 5), e.writeI64(this.total_refund_pennies), e.writeFieldEnd()), null !== this.available_freebies && void 0 !== this.available_freebies && (e.writeFieldBegin("available_freebies", r.Type.I64, 6), e.writeI64(this.available_freebies), e.writeFieldEnd()), null !== this.spent_freebies && void 0 !== this.spent_freebies && (e.writeFieldBegin("spent_freebies", r.Type.I64, 7), e.writeI64(this.spent_freebies), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/bot_detection_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.BotDetection = function(e) {
					this.provider = null, this.website_action = null, this.recaptcha_score = null, e && (void 0 !== e.provider && null !== e.provider && (this.provider = e.provider), void 0 !== e.website_action && null !== e.website_action && (this.website_action = e.website_action), void 0 !== e.recaptcha_score && null !== e.recaptcha_score && (this.recaptcha_score = e.recaptcha_score))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("BotDetection"), null !== this.provider && void 0 !== this.provider && (e.writeFieldBegin("provider", r.Type.STRING, 1), e.writeString(this.provider), e.writeFieldEnd()), null !== this.website_action && void 0 !== this.website_action && (e.writeFieldBegin("website_action", r.Type.STRING, 2), e.writeString(this.website_action), e.writeFieldEnd()), null !== this.recaptcha_score && void 0 !== this.recaptcha_score && (e.writeFieldBegin("recaptcha_score", r.Type.DOUBLE, 3), e.writeDouble(this.recaptcha_score), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/brand_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Brand = function(e) {
					if (this.id = null, this.status = null, this.created_timestamp = null, this.click_attribution_window = null, this.view_attribution_window = null, this.attribution_type = null, this.default_payment_profile_id = null, this.payment_profile_ids = null, this.admin_approval = null, this.account_type = null, this.pay_by_invoice = null, this.feature_flags = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.click_attribution_window && null !== e.click_attribution_window && (this.click_attribution_window = e.click_attribution_window), void 0 !== e.view_attribution_window && null !== e.view_attribution_window && (this.view_attribution_window = e.view_attribution_window), void 0 !== e.attribution_type && null !== e.attribution_type && (this.attribution_type = e.attribution_type), void 0 !== e.default_payment_profile_id && null !== e.default_payment_profile_id && (this.default_payment_profile_id = e.default_payment_profile_id), void 0 !== e.payment_profile_ids && null !== e.payment_profile_ids && (this.payment_profile_ids = r.copyList(e.payment_profile_ids, [null])), void 0 !== e.admin_approval && null !== e.admin_approval && (this.admin_approval = e.admin_approval), void 0 !== e.account_type && null !== e.account_type && (this.account_type = e.account_type), void 0 !== e.pay_by_invoice && null !== e.pay_by_invoice && (this.pay_by_invoice = e.pay_by_invoice), void 0 !== e.feature_flags && null !== e.feature_flags && (this.feature_flags = r.copyList(e.feature_flags, [null]))
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Brand"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 2), e.writeString(this.status), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 3), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.click_attribution_window && void 0 !== this.click_attribution_window && (e.writeFieldBegin("click_attribution_window", r.Type.STRING, 4), e.writeString(this.click_attribution_window), e.writeFieldEnd()), null !== this.view_attribution_window && void 0 !== this.view_attribution_window && (e.writeFieldBegin("view_attribution_window", r.Type.STRING, 5), e.writeString(this.view_attribution_window), e.writeFieldEnd()), null !== this.attribution_type && void 0 !== this.attribution_type && (e.writeFieldBegin("attribution_type", r.Type.STRING, 6), e.writeString(this.attribution_type), e.writeFieldEnd()), null !== this.default_payment_profile_id && void 0 !== this.default_payment_profile_id && (e.writeFieldBegin("default_payment_profile_id", r.Type.STRING, 7), e.writeString(this.default_payment_profile_id), e.writeFieldEnd()), null !== this.payment_profile_ids && void 0 !== this.payment_profile_ids) {
					for (var t in e.writeFieldBegin("payment_profile_ids", r.Type.LIST, 8), e.writeListBegin(r.Type.STRING, this.payment_profile_ids.length), this.payment_profile_ids) this.payment_profile_ids.hasOwnProperty(t) && (t = this.payment_profile_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.admin_approval && void 0 !== this.admin_approval && (e.writeFieldBegin("admin_approval", r.Type.STRING, 9), e.writeString(this.admin_approval), e.writeFieldEnd()), null !== this.account_type && void 0 !== this.account_type && (e.writeFieldBegin("account_type", r.Type.STRING, 10), e.writeString(this.account_type), e.writeFieldEnd()), null !== this.pay_by_invoice && void 0 !== this.pay_by_invoice && (e.writeFieldBegin("pay_by_invoice", r.Type.BOOL, 11), e.writeBool(this.pay_by_invoice), e.writeFieldEnd()), null !== this.feature_flags && void 0 !== this.feature_flags) {
					for (var i in e.writeFieldBegin("feature_flags", r.Type.LIST, 12), e.writeListBegin(r.Type.STRING, this.feature_flags.length), this.feature_flags) this.feature_flags.hasOwnProperty(i) && (i = this.feature_flags[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/broadcast_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Broadcast = function(e) {
					this.unique_watchers = null, this.max_concurrent_watchers = null, this.duration_ms = null, this.time_remaining_ms = null, this.time_added_ms = null, this.stream_state = null, this.heartbeat_length_ms = null, this.concurrent_user_count = null, e && (void 0 !== e.unique_watchers && null !== e.unique_watchers && (this.unique_watchers = e.unique_watchers), void 0 !== e.max_concurrent_watchers && null !== e.max_concurrent_watchers && (this.max_concurrent_watchers = e.max_concurrent_watchers), void 0 !== e.duration_ms && null !== e.duration_ms && (this.duration_ms = e.duration_ms), void 0 !== e.time_remaining_ms && null !== e.time_remaining_ms && (this.time_remaining_ms = e.time_remaining_ms), void 0 !== e.time_added_ms && null !== e.time_added_ms && (this.time_added_ms = e.time_added_ms), void 0 !== e.stream_state && null !== e.stream_state && (this.stream_state = e.stream_state), void 0 !== e.heartbeat_length_ms && null !== e.heartbeat_length_ms && (this.heartbeat_length_ms = e.heartbeat_length_ms), void 0 !== e.concurrent_user_count && null !== e.concurrent_user_count && (this.concurrent_user_count = e.concurrent_user_count))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Broadcast"), null !== this.unique_watchers && void 0 !== this.unique_watchers && (e.writeFieldBegin("unique_watchers", r.Type.I64, 1), e.writeI64(this.unique_watchers), e.writeFieldEnd()), null !== this.max_concurrent_watchers && void 0 !== this.max_concurrent_watchers && (e.writeFieldBegin("max_concurrent_watchers", r.Type.I64, 2), e.writeI64(this.max_concurrent_watchers), e.writeFieldEnd()), null !== this.duration_ms && void 0 !== this.duration_ms && (e.writeFieldBegin("duration_ms", r.Type.I64, 3), e.writeI64(this.duration_ms), e.writeFieldEnd()), null !== this.time_remaining_ms && void 0 !== this.time_remaining_ms && (e.writeFieldBegin("time_remaining_ms", r.Type.I64, 4), e.writeI64(this.time_remaining_ms), e.writeFieldEnd()), null !== this.time_added_ms && void 0 !== this.time_added_ms && (e.writeFieldBegin("time_added_ms", r.Type.I64, 5), e.writeI64(this.time_added_ms), e.writeFieldEnd()), null !== this.stream_state && void 0 !== this.stream_state && (e.writeFieldBegin("stream_state", r.Type.STRING, 6), e.writeString(this.stream_state), e.writeFieldEnd()), null !== this.heartbeat_length_ms && void 0 !== this.heartbeat_length_ms && (e.writeFieldBegin("heartbeat_length_ms", r.Type.I64, 7), e.writeI64(this.heartbeat_length_ms), e.writeFieldEnd()), null !== this.concurrent_user_count && void 0 !== this.concurrent_user_count && (e.writeFieldBegin("concurrent_user_count", r.Type.I64, 8), e.writeI64(this.concurrent_user_count), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/bulk_action_job_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.BulkActionJob = function(e) {
					if (this.id = null, this.bigquery_job_id = null, this.reason = null, this.actions = null, this.target_type = null, this.target_count = null, this.target_limit = null, this.status = null, this.requires_manual_review = null, this.user_id = null, this.targets = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.bigquery_job_id && null !== e.bigquery_job_id && (this.bigquery_job_id = e.bigquery_job_id), void 0 !== e.reason && null !== e.reason && (this.reason = e.reason), void 0 !== e.actions && null !== e.actions && (this.actions = r.copyList(e.actions, [null])), void 0 !== e.target_type && null !== e.target_type && (this.target_type = e.target_type), void 0 !== e.target_count && null !== e.target_count && (this.target_count = e.target_count), void 0 !== e.target_limit && null !== e.target_limit && (this.target_limit = e.target_limit), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.requires_manual_review && null !== e.requires_manual_review && (this.requires_manual_review = e.requires_manual_review), void 0 !== e.user_id && null !== e.user_id && (this.user_id = e.user_id), void 0 !== e.targets && null !== e.targets && (this.targets = r.copyList(e.targets, [null]))
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("BulkActionJob"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.bigquery_job_id && void 0 !== this.bigquery_job_id && (e.writeFieldBegin("bigquery_job_id", r.Type.STRING, 2), e.writeString(this.bigquery_job_id), e.writeFieldEnd()), null !== this.reason && void 0 !== this.reason && (e.writeFieldBegin("reason", r.Type.STRING, 3), e.writeString(this.reason), e.writeFieldEnd()), null !== this.actions && void 0 !== this.actions) {
					for (var t in e.writeFieldBegin("actions", r.Type.LIST, 4), e.writeListBegin(r.Type.STRING, this.actions.length), this.actions) this.actions.hasOwnProperty(t) && (t = this.actions[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.target_type && void 0 !== this.target_type && (e.writeFieldBegin("target_type", r.Type.STRING, 5), e.writeString(this.target_type), e.writeFieldEnd()), null !== this.target_count && void 0 !== this.target_count && (e.writeFieldBegin("target_count", r.Type.I32, 6), e.writeI32(this.target_count), e.writeFieldEnd()), null !== this.target_limit && void 0 !== this.target_limit && (e.writeFieldBegin("target_limit", r.Type.I32, 7), e.writeI32(this.target_limit), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 8), e.writeString(this.status), e.writeFieldEnd()), null !== this.requires_manual_review && void 0 !== this.requires_manual_review && (e.writeFieldBegin("requires_manual_review", r.Type.BOOL, 9), e.writeBool(this.requires_manual_review), e.writeFieldEnd()), null !== this.user_id && void 0 !== this.user_id && (e.writeFieldBegin("user_id", r.Type.STRING, 10), e.writeString(this.user_id), e.writeFieldEnd()), null !== this.targets && void 0 !== this.targets) {
					for (var i in e.writeFieldBegin("targets", r.Type.LIST, 11), e.writeListBegin(r.Type.STRING, this.targets.length), this.targets) this.targets.hasOwnProperty(i) && (i = this.targets[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/businessinfo_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), e.exports = {}, e.exports.BusinessInfo = function(e) {
					this.name = null, this.industry = null, this.subvertical = null, this.country = null, e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.industry && null !== e.industry && (this.industry = e.industry), void 0 !== e.subvertical && null !== e.subvertical && (this.subvertical = e.subvertical), void 0 !== e.country && null !== e.country && (this.country = e.country))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("BusinessInfo"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), null !== this.industry && void 0 !== this.industry && (e.writeFieldBegin("industry", r.Type.STRING, 2), e.writeString(this.industry), e.writeFieldEnd()), null !== this.subvertical && void 0 !== this.subvertical && (e.writeFieldBegin("subvertical", r.Type.STRING, 3), e.writeString(this.subvertical), e.writeFieldEnd()), null !== this.country && void 0 !== this.country && (e.writeFieldBegin("country", r.Type.STRING, 4), e.writeString(this.country), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/carousel_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Carousel = function(e) {
					if (this.id = null, this.type = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						if (this.id = e.id, void 0 === e.type || null === e.type) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field type is unset!");
						this.type = e.type
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Carousel"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/category_header_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CategoryHeader = function(e) {
					if (this.id = null, this.name = null, this.subreddit_ids = null, this.subreddit_names = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						if (this.id = e.id, void 0 === e.name || null === e.name) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
						this.name = e.name, void 0 !== e.subreddit_ids && null !== e.subreddit_ids && (this.subreddit_ids = r.copyList(e.subreddit_ids, [null])), void 0 !== e.subreddit_names && null !== e.subreddit_names && (this.subreddit_names = r.copyList(e.subreddit_names, [null]))
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("CategoryHeader"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.subreddit_ids && void 0 !== this.subreddit_ids) {
					for (var t in e.writeFieldBegin("subreddit_ids", r.Type.LIST, 3), e.writeListBegin(r.Type.STRING, this.subreddit_ids.length), this.subreddit_ids) this.subreddit_ids.hasOwnProperty(t) && (t = this.subreddit_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.subreddit_names && void 0 !== this.subreddit_names) {
					for (var i in e.writeFieldBegin("subreddit_names", r.Type.LIST, 4), e.writeListBegin(r.Type.STRING, this.subreddit_names.length), this.subreddit_names) this.subreddit_names.hasOwnProperty(i) && (i = this.subreddit_names[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/chat_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Chat = function(e) {
					this.blocked_user_id = null, this.id = null, this.type = null, this.existing_channel = null, this.image_upload_method = null, this.user_added_method = null, this.invitation_id = null, this.invitation_type = null, this.members = null, this.invitation_preview_type = null, this.message_type = null, this.number_channels = null, this.number_pending_invites = null, this.number_members = null, this.number_unreads = null, this.reported_user_id = null, this.sender_user_id = null, this.invitation_timestamp = null, this.message_length = null, this.recipient_user_id = null, this.number_blocked_users = null, this.request_name = null, this.is_member = null, this.shown_history = null, this.message_id = null, this.report_reason = null, this.message_body = null, this.channel_name = null, e && (void 0 !== e.blocked_user_id && null !== e.blocked_user_id && (this.blocked_user_id = e.blocked_user_id), void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.existing_channel && null !== e.existing_channel && (this.existing_channel = e.existing_channel), void 0 !== e.image_upload_method && null !== e.image_upload_method && (this.image_upload_method = e.image_upload_method), void 0 !== e.user_added_method && null !== e.user_added_method && (this.user_added_method = e.user_added_method), void 0 !== e.invitation_id && null !== e.invitation_id && (this.invitation_id = e.invitation_id), void 0 !== e.invitation_type && null !== e.invitation_type && (this.invitation_type = e.invitation_type), void 0 !== e.members && null !== e.members && (this.members = r.copyList(e.members, [null])), void 0 !== e.invitation_preview_type && null !== e.invitation_preview_type && (this.invitation_preview_type = e.invitation_preview_type), void 0 !== e.message_type && null !== e.message_type && (this.message_type = e.message_type), void 0 !== e.number_channels && null !== e.number_channels && (this.number_channels = e.number_channels), void 0 !== e.number_pending_invites && null !== e.number_pending_invites && (this.number_pending_invites = e.number_pending_invites), void 0 !== e.number_members && null !== e.number_members && (this.number_members = e.number_members), void 0 !== e.number_unreads && null !== e.number_unreads && (this.number_unreads = e.number_unreads), void 0 !== e.reported_user_id && null !== e.reported_user_id && (this.reported_user_id = e.reported_user_id), void 0 !== e.sender_user_id && null !== e.sender_user_id && (this.sender_user_id = e.sender_user_id), void 0 !== e.invitation_timestamp && null !== e.invitation_timestamp && (this.invitation_timestamp = e.invitation_timestamp), void 0 !== e.message_length && null !== e.message_length && (this.message_length = e.message_length), void 0 !== e.recipient_user_id && null !== e.recipient_user_id && (this.recipient_user_id = e.recipient_user_id), void 0 !== e.number_blocked_users && null !== e.number_blocked_users && (this.number_blocked_users = e.number_blocked_users), void 0 !== e.request_name && null !== e.request_name && (this.request_name = e.request_name), void 0 !== e.is_member && null !== e.is_member && (this.is_member = e.is_member), void 0 !== e.shown_history && null !== e.shown_history && (this.shown_history = e.shown_history), void 0 !== e.message_id && null !== e.message_id && (this.message_id = e.message_id), void 0 !== e.report_reason && null !== e.report_reason && (this.report_reason = e.report_reason), void 0 !== e.message_body && null !== e.message_body && (this.message_body = e.message_body), void 0 !== e.channel_name && null !== e.channel_name && (this.channel_name = e.channel_name))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Chat"), null !== this.blocked_user_id && void 0 !== this.blocked_user_id && (e.writeFieldBegin("blocked_user_id", r.Type.STRING, 1), e.writeString(this.blocked_user_id), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 2), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), null !== this.existing_channel && void 0 !== this.existing_channel && (e.writeFieldBegin("existing_channel", r.Type.BOOL, 4), e.writeBool(this.existing_channel), e.writeFieldEnd()), null !== this.image_upload_method && void 0 !== this.image_upload_method && (e.writeFieldBegin("image_upload_method", r.Type.STRING, 5), e.writeString(this.image_upload_method), e.writeFieldEnd()), null !== this.user_added_method && void 0 !== this.user_added_method && (e.writeFieldBegin("user_added_method", r.Type.STRING, 6), e.writeString(this.user_added_method), e.writeFieldEnd()), null !== this.invitation_id && void 0 !== this.invitation_id && (e.writeFieldBegin("invitation_id", r.Type.STRING, 7), e.writeString(this.invitation_id), e.writeFieldEnd()), null !== this.invitation_type && void 0 !== this.invitation_type && (e.writeFieldBegin("invitation_type", r.Type.STRING, 8), e.writeString(this.invitation_type), e.writeFieldEnd()), null !== this.members && void 0 !== this.members) {
					for (var t in e.writeFieldBegin("members", r.Type.LIST, 9), e.writeListBegin(r.Type.STRING, this.members.length), this.members) this.members.hasOwnProperty(t) && (t = this.members[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.invitation_preview_type && void 0 !== this.invitation_preview_type && (e.writeFieldBegin("invitation_preview_type", r.Type.STRING, 10), e.writeString(this.invitation_preview_type), e.writeFieldEnd()), null !== this.message_type && void 0 !== this.message_type && (e.writeFieldBegin("message_type", r.Type.STRING, 11), e.writeString(this.message_type), e.writeFieldEnd()), null !== this.number_channels && void 0 !== this.number_channels && (e.writeFieldBegin("number_channels", r.Type.I64, 12), e.writeI64(this.number_channels), e.writeFieldEnd()), null !== this.number_pending_invites && void 0 !== this.number_pending_invites && (e.writeFieldBegin("number_pending_invites", r.Type.I64, 13), e.writeI64(this.number_pending_invites), e.writeFieldEnd()), null !== this.number_members && void 0 !== this.number_members && (e.writeFieldBegin("number_members", r.Type.I64, 14), e.writeI64(this.number_members), e.writeFieldEnd()), null !== this.number_unreads && void 0 !== this.number_unreads && (e.writeFieldBegin("number_unreads", r.Type.I64, 15), e.writeI64(this.number_unreads), e.writeFieldEnd()), null !== this.reported_user_id && void 0 !== this.reported_user_id && (e.writeFieldBegin("reported_user_id", r.Type.STRING, 16), e.writeString(this.reported_user_id), e.writeFieldEnd()), null !== this.sender_user_id && void 0 !== this.sender_user_id && (e.writeFieldBegin("sender_user_id", r.Type.STRING, 17), e.writeString(this.sender_user_id), e.writeFieldEnd()), null !== this.invitation_timestamp && void 0 !== this.invitation_timestamp && (e.writeFieldBegin("invitation_timestamp", r.Type.I64, 18), e.writeI64(this.invitation_timestamp), e.writeFieldEnd()), null !== this.message_length && void 0 !== this.message_length && (e.writeFieldBegin("message_length", r.Type.I64, 19), e.writeI64(this.message_length), e.writeFieldEnd()), null !== this.recipient_user_id && void 0 !== this.recipient_user_id && (e.writeFieldBegin("recipient_user_id", r.Type.STRING, 20), e.writeString(this.recipient_user_id), e.writeFieldEnd()), null !== this.number_blocked_users && void 0 !== this.number_blocked_users && (e.writeFieldBegin("number_blocked_users", r.Type.I64, 21), e.writeI64(this.number_blocked_users), e.writeFieldEnd()), null !== this.request_name && void 0 !== this.request_name && (e.writeFieldBegin("request_name", r.Type.STRING, 22), e.writeString(this.request_name), e.writeFieldEnd()), null !== this.is_member && void 0 !== this.is_member && (e.writeFieldBegin("is_member", r.Type.BOOL, 23), e.writeBool(this.is_member), e.writeFieldEnd()), null !== this.shown_history && void 0 !== this.shown_history && (e.writeFieldBegin("shown_history", r.Type.BOOL, 24), e.writeBool(this.shown_history), e.writeFieldEnd()), null !== this.message_id && void 0 !== this.message_id && (e.writeFieldBegin("message_id", r.Type.I64, 25), e.writeI64(this.message_id), e.writeFieldEnd()), null !== this.report_reason && void 0 !== this.report_reason && (e.writeFieldBegin("report_reason", r.Type.STRING, 26), e.writeString(this.report_reason), e.writeFieldEnd()), null !== this.message_body && void 0 !== this.message_body && (e.writeFieldBegin("message_body", r.Type.STRING, 27), e.writeString(this.message_body), e.writeFieldEnd()), null !== this.channel_name && void 0 !== this.channel_name && (e.writeFieldBegin("channel_name", r.Type.STRING, 28), e.writeString(this.channel_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.ChatHomeFeedBoosting = function(e) {
				this.subreddit_ids = null, this.post_ids = null, this.positions = null, this.original_positions = null, e && (void 0 !== e.subreddit_ids && null !== e.subreddit_ids && (this.subreddit_ids = r.copyList(e.subreddit_ids, [null])), void 0 !== e.post_ids && null !== e.post_ids && (this.post_ids = r.copyList(e.post_ids, [null])), void 0 !== e.positions && null !== e.positions && (this.positions = r.copyList(e.positions, [null])), void 0 !== e.original_positions && null !== e.original_positions && (this.original_positions = r.copyList(e.original_positions, [null])))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				if (e.writeStructBegin("ChatHomeFeedBoosting"), null !== this.subreddit_ids && void 0 !== this.subreddit_ids) {
					for (var t in e.writeFieldBegin("subreddit_ids", r.Type.LIST, 1), e.writeListBegin(r.Type.STRING, this.subreddit_ids.length), this.subreddit_ids) this.subreddit_ids.hasOwnProperty(t) && (t = this.subreddit_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.post_ids && void 0 !== this.post_ids) {
					for (var i in e.writeFieldBegin("post_ids", r.Type.LIST, 2), e.writeListBegin(r.Type.STRING, this.post_ids.length), this.post_ids) this.post_ids.hasOwnProperty(i) && (i = this.post_ids[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.positions && void 0 !== this.positions) {
					for (var n in e.writeFieldBegin("positions", r.Type.LIST, 3), e.writeListBegin(r.Type.I32, this.positions.length), this.positions) this.positions.hasOwnProperty(n) && (n = this.positions[n], e.writeI32(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.original_positions && void 0 !== this.original_positions) {
					for (var s in e.writeFieldBegin("original_positions", r.Type.LIST, 4), e.writeListBegin(r.Type.I32, this.original_positions.length), this.original_positions) this.original_positions.hasOwnProperty(s) && (s = this.original_positions[s], e.writeI32(s));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/comment_draft_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CommentDraft = function(e) {
					this.body_text = null, e && void 0 !== e.body_text && null !== e.body_text && (this.body_text = e.body_text)
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("CommentDraft"), null !== this.body_text && void 0 !== this.body_text && (e.writeFieldBegin("body_text", r.Type.STRING, 1), e.writeString(this.body_text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/content_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Post = function(e) {
					this.id = null, this.type = null, this.title = null, this.nsfw = null, this.spoiler = null, this.url = null, this.domain = null, this.body_text = null, this.created_timestamp = null, this.promoted = null, this.author_id = null, this.content_duration = null, this.archived = null, this.crosspost_root_id = null, this.number_gildings = null, this.original_content = null, this.flair = null, this.score = null, this.upvote_ratio = null, this.impression_id = null, this.number_posts_from_ad = null, this.is_event = null, this.is_scheduled = null, this.submit_scheduled_timestamp = null, this.is_automated = null, this.comment_type = null, this.number_comments = null, this.subreddit_id = null, this.subreddit_name = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.nsfw && null !== e.nsfw && (this.nsfw = e.nsfw), void 0 !== e.spoiler && null !== e.spoiler && (this.spoiler = e.spoiler), void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.domain && null !== e.domain && (this.domain = e.domain), void 0 !== e.body_text && null !== e.body_text && (this.body_text = e.body_text), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.promoted && null !== e.promoted && (this.promoted = e.promoted), void 0 !== e.author_id && null !== e.author_id && (this.author_id = e.author_id), void 0 !== e.content_duration && null !== e.content_duration && (this.content_duration = e.content_duration), void 0 !== e.archived && null !== e.archived && (this.archived = e.archived), void 0 !== e.crosspost_root_id && null !== e.crosspost_root_id && (this.crosspost_root_id = e.crosspost_root_id), void 0 !== e.number_gildings && null !== e.number_gildings && (this.number_gildings = e.number_gildings), void 0 !== e.original_content && null !== e.original_content && (this.original_content = e.original_content), void 0 !== e.flair && null !== e.flair && (this.flair = e.flair), void 0 !== e.score && null !== e.score && (this.score = e.score), void 0 !== e.upvote_ratio && null !== e.upvote_ratio && (this.upvote_ratio = e.upvote_ratio), void 0 !== e.impression_id && null !== e.impression_id && (this.impression_id = e.impression_id), void 0 !== e.number_posts_from_ad && null !== e.number_posts_from_ad && (this.number_posts_from_ad = e.number_posts_from_ad), void 0 !== e.is_event && null !== e.is_event && (this.is_event = e.is_event), void 0 !== e.is_scheduled && null !== e.is_scheduled && (this.is_scheduled = e.is_scheduled), void 0 !== e.submit_scheduled_timestamp && null !== e.submit_scheduled_timestamp && (this.submit_scheduled_timestamp = e.submit_scheduled_timestamp), void 0 !== e.is_automated && null !== e.is_automated && (this.is_automated = e.is_automated), void 0 !== e.comment_type && null !== e.comment_type && (this.comment_type = e.comment_type), void 0 !== e.number_comments && null !== e.number_comments && (this.number_comments = e.number_comments), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Post"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 3), e.writeString(this.title), e.writeFieldEnd()), null !== this.nsfw && void 0 !== this.nsfw && (e.writeFieldBegin("nsfw", r.Type.BOOL, 4), e.writeBool(this.nsfw), e.writeFieldEnd()), null !== this.spoiler && void 0 !== this.spoiler && (e.writeFieldBegin("spoiler", r.Type.BOOL, 5), e.writeBool(this.spoiler), e.writeFieldEnd()), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", r.Type.STRING, 6), e.writeString(this.url), e.writeFieldEnd()), null !== this.domain && void 0 !== this.domain && (e.writeFieldBegin("domain", r.Type.STRING, 7), e.writeString(this.domain), e.writeFieldEnd()), null !== this.body_text && void 0 !== this.body_text && (e.writeFieldBegin("body_text", r.Type.STRING, 8), e.writeString(this.body_text), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 9), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.promoted && void 0 !== this.promoted && (e.writeFieldBegin("promoted", r.Type.BOOL, 10), e.writeBool(this.promoted), e.writeFieldEnd()), null !== this.author_id && void 0 !== this.author_id && (e.writeFieldBegin("author_id", r.Type.STRING, 11), e.writeString(this.author_id), e.writeFieldEnd()), null !== this.content_duration && void 0 !== this.content_duration && (e.writeFieldBegin("content_duration", r.Type.I64, 12), e.writeI64(this.content_duration), e.writeFieldEnd()), null !== this.archived && void 0 !== this.archived && (e.writeFieldBegin("archived", r.Type.BOOL, 13), e.writeBool(this.archived), e.writeFieldEnd()), null !== this.crosspost_root_id && void 0 !== this.crosspost_root_id && (e.writeFieldBegin("crosspost_root_id", r.Type.STRING, 14), e.writeString(this.crosspost_root_id), e.writeFieldEnd()), null !== this.number_gildings && void 0 !== this.number_gildings && (e.writeFieldBegin("number_gildings", r.Type.I64, 15), e.writeI64(this.number_gildings), e.writeFieldEnd()), null !== this.original_content && void 0 !== this.original_content && (e.writeFieldBegin("original_content", r.Type.BOOL, 16), e.writeBool(this.original_content), e.writeFieldEnd()), null !== this.flair && void 0 !== this.flair && (e.writeFieldBegin("flair", r.Type.STRING, 17), e.writeString(this.flair), e.writeFieldEnd()), null !== this.score && void 0 !== this.score && (e.writeFieldBegin("score", r.Type.I64, 18), e.writeI64(this.score), e.writeFieldEnd()), null !== this.upvote_ratio && void 0 !== this.upvote_ratio && (e.writeFieldBegin("upvote_ratio", r.Type.DOUBLE, 19), e.writeDouble(this.upvote_ratio), e.writeFieldEnd()), null !== this.impression_id && void 0 !== this.impression_id && (e.writeFieldBegin("impression_id", r.Type.STRING, 20), e.writeString(this.impression_id), e.writeFieldEnd()), null !== this.number_posts_from_ad && void 0 !== this.number_posts_from_ad && (e.writeFieldBegin("number_posts_from_ad", r.Type.I64, 21), e.writeI64(this.number_posts_from_ad), e.writeFieldEnd()), null !== this.is_event && void 0 !== this.is_event && (e.writeFieldBegin("is_event", r.Type.BOOL, 22), e.writeBool(this.is_event), e.writeFieldEnd()), null !== this.is_scheduled && void 0 !== this.is_scheduled && (e.writeFieldBegin("is_scheduled", r.Type.BOOL, 23), e.writeBool(this.is_scheduled), e.writeFieldEnd()), null !== this.submit_scheduled_timestamp && void 0 !== this.submit_scheduled_timestamp && (e.writeFieldBegin("submit_scheduled_timestamp", r.Type.I64, 24), e.writeI64(this.submit_scheduled_timestamp), e.writeFieldEnd()), null !== this.is_automated && void 0 !== this.is_automated && (e.writeFieldBegin("is_automated", r.Type.BOOL, 25), e.writeBool(this.is_automated), e.writeFieldEnd()), null !== this.comment_type && void 0 !== this.comment_type && (e.writeFieldBegin("comment_type", r.Type.STRING, 26), e.writeString(this.comment_type), e.writeFieldEnd()), null !== this.number_comments && void 0 !== this.number_comments && (e.writeFieldBegin("number_comments", r.Type.I64, 27), e.writeI64(this.number_comments), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", r.Type.STRING, 28), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", r.Type.STRING, 29), e.writeString(this.subreddit_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Listing = function(e) {
				this.length = null, this.links = null, this.sort = null, this.sort_time_filter = null, this.min_rank = null, this.max_rank = null, this.geo_filter = null, this.source = null, this.old_sort = null, this.depth = null, this.cursor = null, this.cursor_returned = null, this.aggregator = null, this.metadata = null, e && (void 0 !== e.length && null !== e.length && (this.length = e.length), void 0 !== e.links && null !== e.links && (this.links = r.copyList(e.links, [null])), void 0 !== e.sort && null !== e.sort && (this.sort = e.sort), void 0 !== e.sort_time_filter && null !== e.sort_time_filter && (this.sort_time_filter = e.sort_time_filter), void 0 !== e.min_rank && null !== e.min_rank && (this.min_rank = e.min_rank), void 0 !== e.max_rank && null !== e.max_rank && (this.max_rank = e.max_rank), void 0 !== e.geo_filter && null !== e.geo_filter && (this.geo_filter = e.geo_filter), void 0 !== e.source && null !== e.source && (this.source = e.source), void 0 !== e.old_sort && null !== e.old_sort && (this.old_sort = e.old_sort), void 0 !== e.depth && null !== e.depth && (this.depth = e.depth), void 0 !== e.cursor && null !== e.cursor && (this.cursor = e.cursor), void 0 !== e.cursor_returned && null !== e.cursor_returned && (this.cursor_returned = e.cursor_returned), void 0 !== e.aggregator && null !== e.aggregator && (this.aggregator = e.aggregator), void 0 !== e.metadata && null !== e.metadata && (this.metadata = e.metadata))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				if (e.writeStructBegin("Listing"), null !== this.length && void 0 !== this.length && (e.writeFieldBegin("length", r.Type.I64, 1), e.writeI64(this.length), e.writeFieldEnd()), null !== this.links && void 0 !== this.links) {
					for (var t in e.writeFieldBegin("links", r.Type.LIST, 2), e.writeListBegin(r.Type.STRING, this.links.length), this.links) this.links.hasOwnProperty(t) && (t = this.links[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.sort && void 0 !== this.sort && (e.writeFieldBegin("sort", r.Type.STRING, 3), e.writeString(this.sort), e.writeFieldEnd()), null !== this.sort_time_filter && void 0 !== this.sort_time_filter && (e.writeFieldBegin("sort_time_filter", r.Type.STRING, 4), e.writeString(this.sort_time_filter), e.writeFieldEnd()), null !== this.min_rank && void 0 !== this.min_rank && (e.writeFieldBegin("min_rank", r.Type.I64, 5), e.writeI64(this.min_rank), e.writeFieldEnd()), null !== this.max_rank && void 0 !== this.max_rank && (e.writeFieldBegin("max_rank", r.Type.I64, 6), e.writeI64(this.max_rank), e.writeFieldEnd()), null !== this.geo_filter && void 0 !== this.geo_filter && (e.writeFieldBegin("geo_filter", r.Type.STRING, 7), e.writeString(this.geo_filter), e.writeFieldEnd()), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", r.Type.STRING, 8), e.writeString(this.source), e.writeFieldEnd()), null !== this.old_sort && void 0 !== this.old_sort && (e.writeFieldBegin("old_sort", r.Type.STRING, 9), e.writeString(this.old_sort), e.writeFieldEnd()), null !== this.depth && void 0 !== this.depth && (e.writeFieldBegin("depth", r.Type.I64, 10), e.writeI64(this.depth), e.writeFieldEnd()), null !== this.cursor && void 0 !== this.cursor && (e.writeFieldBegin("cursor", r.Type.STRING, 11), e.writeString(this.cursor), e.writeFieldEnd()), null !== this.cursor_returned && void 0 !== this.cursor_returned && (e.writeFieldBegin("cursor_returned", r.Type.STRING, 12), e.writeString(this.cursor_returned), e.writeFieldEnd()), null !== this.aggregator && void 0 !== this.aggregator && (e.writeFieldBegin("aggregator", r.Type.STRING, 13), e.writeString(this.aggregator), e.writeFieldEnd()), null !== this.metadata && void 0 !== this.metadata && (e.writeFieldBegin("metadata", r.Type.STRING, 14), e.writeString(this.metadata), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.Comment = function(e) {
				this.id = null, this.post_id = null, this.parent_id = null, this.body_text = null, this.author_id = null, this.number_gildings = null, this.score = null, this.upvote_ratio = null, this.created_timestamp = null, this.type = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.post_id && null !== e.post_id && (this.post_id = e.post_id), void 0 !== e.parent_id && null !== e.parent_id && (this.parent_id = e.parent_id), void 0 !== e.body_text && null !== e.body_text && (this.body_text = e.body_text), void 0 !== e.author_id && null !== e.author_id && (this.author_id = e.author_id), void 0 !== e.number_gildings && null !== e.number_gildings && (this.number_gildings = e.number_gildings), void 0 !== e.score && null !== e.score && (this.score = e.score), void 0 !== e.upvote_ratio && null !== e.upvote_ratio && (this.upvote_ratio = e.upvote_ratio), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.type && null !== e.type && (this.type = e.type))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("Comment"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.post_id && void 0 !== this.post_id && (e.writeFieldBegin("post_id", r.Type.STRING, 2), e.writeString(this.post_id), e.writeFieldEnd()), null !== this.parent_id && void 0 !== this.parent_id && (e.writeFieldBegin("parent_id", r.Type.STRING, 3), e.writeString(this.parent_id), e.writeFieldEnd()), null !== this.body_text && void 0 !== this.body_text && (e.writeFieldBegin("body_text", r.Type.STRING, 4), e.writeString(this.body_text), e.writeFieldEnd()), null !== this.author_id && void 0 !== this.author_id && (e.writeFieldBegin("author_id", r.Type.STRING, 5), e.writeString(this.author_id), e.writeFieldEnd()), null !== this.number_gildings && void 0 !== this.number_gildings && (e.writeFieldBegin("number_gildings", r.Type.I64, 6), e.writeI64(this.number_gildings), e.writeFieldEnd()), null !== this.score && void 0 !== this.score && (e.writeFieldBegin("score", r.Type.I64, 7), e.writeI64(this.score), e.writeFieldEnd()), null !== this.upvote_ratio && void 0 !== this.upvote_ratio && (e.writeFieldBegin("upvote_ratio", r.Type.DOUBLE, 8), e.writeDouble(this.upvote_ratio), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 9), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 10), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.CommentComposer = function(e) {
				this.editor_mode = null, e && void 0 !== e.editor_mode && null !== e.editor_mode && (this.editor_mode = e.editor_mode)
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("CommentComposer"), null !== this.editor_mode && void 0 !== this.editor_mode && (e.writeFieldBegin("editor_mode", r.Type.STRING, 1), e.writeString(this.editor_mode), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var a = e.exports.Notification = function(e) {
				if (this.id = null, this.process_notes = null, this.dropped = null, this.type = null, this.title = null, this.body = null, e) {
					if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					this.id = e.id, void 0 !== e.process_notes && null !== e.process_notes && (this.process_notes = e.process_notes), void 0 !== e.dropped && null !== e.dropped && (this.dropped = e.dropped), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.body && null !== e.body && (this.body = e.body)
				}
			};
			a.prototype = {}, a.prototype.write = function(e) {
				e.writeStructBegin("Notification"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.process_notes && void 0 !== this.process_notes && (e.writeFieldBegin("process_notes", r.Type.STRING, 2), e.writeString(this.process_notes), e.writeFieldEnd()), null !== this.dropped && void 0 !== this.dropped && (e.writeFieldBegin("dropped", r.Type.BOOL, 3), e.writeBool(this.dropped), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 4), e.writeString(this.type), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 5), e.writeString(this.title), e.writeFieldEnd()), null !== this.body && void 0 !== this.body && (e.writeFieldBegin("body", r.Type.STRING, 6), e.writeString(this.body), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var u = e.exports.Media = function(e) {
				this.width = null, this.height = null, this.load_time = null, this.id = null, this.orientation = null, this.duration = null, this.time = null, this.pinned = null, this.max_time_served = null, this.mimetype = null, this.size = null, this.url = null, this.source = null, this.upload_duration = null, this.file_name = null, this.type = null, this.thumbnail_url = null, this.cdn_name = null, this.cdn_region = null, this.destination_region = null, this.preview_url = null, this.stream_public_id = null, this.stream_private_id = null, this.stream_ended_timestamp = null, this.md5 = null, e && (void 0 !== e.width && null !== e.width && (this.width = e.width), void 0 !== e.height && null !== e.height && (this.height = e.height), void 0 !== e.load_time && null !== e.load_time && (this.load_time = e.load_time), void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.orientation && null !== e.orientation && (this.orientation = e.orientation), void 0 !== e.duration && null !== e.duration && (this.duration = e.duration), void 0 !== e.time && null !== e.time && (this.time = e.time), void 0 !== e.pinned && null !== e.pinned && (this.pinned = e.pinned), void 0 !== e.max_time_served && null !== e.max_time_served && (this.max_time_served = e.max_time_served), void 0 !== e.mimetype && null !== e.mimetype && (this.mimetype = e.mimetype), void 0 !== e.size && null !== e.size && (this.size = e.size), void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.source && null !== e.source && (this.source = e.source), void 0 !== e.upload_duration && null !== e.upload_duration && (this.upload_duration = e.upload_duration), void 0 !== e.file_name && null !== e.file_name && (this.file_name = e.file_name), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.thumbnail_url && null !== e.thumbnail_url && (this.thumbnail_url = e.thumbnail_url), void 0 !== e.cdn_name && null !== e.cdn_name && (this.cdn_name = e.cdn_name), void 0 !== e.cdn_region && null !== e.cdn_region && (this.cdn_region = e.cdn_region), void 0 !== e.destination_region && null !== e.destination_region && (this.destination_region = e.destination_region), void 0 !== e.preview_url && null !== e.preview_url && (this.preview_url = e.preview_url), void 0 !== e.stream_public_id && null !== e.stream_public_id && (this.stream_public_id = e.stream_public_id), void 0 !== e.stream_private_id && null !== e.stream_private_id && (this.stream_private_id = e.stream_private_id), void 0 !== e.stream_ended_timestamp && null !== e.stream_ended_timestamp && (this.stream_ended_timestamp = e.stream_ended_timestamp), void 0 !== e.md5 && null !== e.md5 && (this.md5 = e.md5))
			};
			u.prototype = {}, u.prototype.write = function(e) {
				e.writeStructBegin("Media"), null !== this.width && void 0 !== this.width && (e.writeFieldBegin("width", r.Type.I64, 1), e.writeI64(this.width), e.writeFieldEnd()), null !== this.height && void 0 !== this.height && (e.writeFieldBegin("height", r.Type.I64, 2), e.writeI64(this.height), e.writeFieldEnd()), null !== this.load_time && void 0 !== this.load_time && (e.writeFieldBegin("load_time", r.Type.I64, 3), e.writeI64(this.load_time), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 4), e.writeString(this.id), e.writeFieldEnd()), null !== this.orientation && void 0 !== this.orientation && (e.writeFieldBegin("orientation", r.Type.STRING, 5), e.writeString(this.orientation), e.writeFieldEnd()), null !== this.duration && void 0 !== this.duration && (e.writeFieldBegin("duration", r.Type.I64, 6), e.writeI64(this.duration), e.writeFieldEnd()), null !== this.time && void 0 !== this.time && (e.writeFieldBegin("time", r.Type.I64, 7), e.writeI64(this.time), e.writeFieldEnd()), null !== this.pinned && void 0 !== this.pinned && (e.writeFieldBegin("pinned", r.Type.BOOL, 8), e.writeBool(this.pinned), e.writeFieldEnd()), null !== this.max_time_served && void 0 !== this.max_time_served && (e.writeFieldBegin("max_time_served", r.Type.I64, 9), e.writeI64(this.max_time_served), e.writeFieldEnd()), null !== this.mimetype && void 0 !== this.mimetype && (e.writeFieldBegin("mimetype", r.Type.STRING, 10), e.writeString(this.mimetype), e.writeFieldEnd()), null !== this.size && void 0 !== this.size && (e.writeFieldBegin("size", r.Type.I64, 11), e.writeI64(this.size), e.writeFieldEnd()), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", r.Type.STRING, 12), e.writeString(this.url), e.writeFieldEnd()), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", r.Type.STRING, 13), e.writeString(this.source), e.writeFieldEnd()), null !== this.upload_duration && void 0 !== this.upload_duration && (e.writeFieldBegin("upload_duration", r.Type.I64, 14), e.writeI64(this.upload_duration), e.writeFieldEnd()), null !== this.file_name && void 0 !== this.file_name && (e.writeFieldBegin("file_name", r.Type.STRING, 15), e.writeString(this.file_name), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 16), e.writeString(this.type), e.writeFieldEnd()), null !== this.thumbnail_url && void 0 !== this.thumbnail_url && (e.writeFieldBegin("thumbnail_url", r.Type.STRING, 17), e.writeString(this.thumbnail_url), e.writeFieldEnd()), null !== this.cdn_name && void 0 !== this.cdn_name && (e.writeFieldBegin("cdn_name", r.Type.STRING, 18), e.writeString(this.cdn_name), e.writeFieldEnd()), null !== this.cdn_region && void 0 !== this.cdn_region && (e.writeFieldBegin("cdn_region", r.Type.STRING, 19), e.writeString(this.cdn_region), e.writeFieldEnd()), null !== this.destination_region && void 0 !== this.destination_region && (e.writeFieldBegin("destination_region", r.Type.STRING, 20), e.writeString(this.destination_region), e.writeFieldEnd()), null !== this.preview_url && void 0 !== this.preview_url && (e.writeFieldBegin("preview_url", r.Type.STRING, 21), e.writeString(this.preview_url), e.writeFieldEnd()), null !== this.stream_public_id && void 0 !== this.stream_public_id && (e.writeFieldBegin("stream_public_id", r.Type.STRING, 22), e.writeString(this.stream_public_id), e.writeFieldEnd()), null !== this.stream_private_id && void 0 !== this.stream_private_id && (e.writeFieldBegin("stream_private_id", r.Type.STRING, 23), e.writeString(this.stream_private_id), e.writeFieldEnd()), null !== this.stream_ended_timestamp && void 0 !== this.stream_ended_timestamp && (e.writeFieldBegin("stream_ended_timestamp", r.Type.I64, 24), e.writeI64(this.stream_ended_timestamp), e.writeFieldEnd()), null !== this.md5 && void 0 !== this.md5 && (e.writeFieldBegin("md5", r.Type.STRING, 25), e.writeString(this.md5), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var c = e.exports.PostComposer = function(e) {
				this.type = null, this.input_type = null, this.text_type = null, this.final_status = null, this.editor_mode = null, this.post_scheduled = null, this.submit_scheduled_timestamp = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.input_type && null !== e.input_type && (this.input_type = e.input_type), void 0 !== e.text_type && null !== e.text_type && (this.text_type = e.text_type), void 0 !== e.final_status && null !== e.final_status && (this.final_status = e.final_status), void 0 !== e.editor_mode && null !== e.editor_mode && (this.editor_mode = e.editor_mode), void 0 !== e.post_scheduled && null !== e.post_scheduled && (this.post_scheduled = e.post_scheduled), void 0 !== e.submit_scheduled_timestamp && null !== e.submit_scheduled_timestamp && (this.submit_scheduled_timestamp = e.submit_scheduled_timestamp))
			};
			c.prototype = {}, c.prototype.write = function(e) {
				e.writeStructBegin("PostComposer"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.input_type && void 0 !== this.input_type && (e.writeFieldBegin("input_type", r.Type.STRING, 2), e.writeString(this.input_type), e.writeFieldEnd()), null !== this.text_type && void 0 !== this.text_type && (e.writeFieldBegin("text_type", r.Type.STRING, 3), e.writeString(this.text_type), e.writeFieldEnd()), null !== this.final_status && void 0 !== this.final_status && (e.writeFieldBegin("final_status", r.Type.STRING, 4), e.writeString(this.final_status), e.writeFieldEnd()), null !== this.editor_mode && void 0 !== this.editor_mode && (e.writeFieldBegin("editor_mode", r.Type.STRING, 5), e.writeString(this.editor_mode), e.writeFieldEnd()), null !== this.post_scheduled && void 0 !== this.post_scheduled && (e.writeFieldBegin("post_scheduled", r.Type.BOOL, 6), e.writeBool(this.post_scheduled), e.writeFieldEnd()), null !== this.submit_scheduled_timestamp && void 0 !== this.submit_scheduled_timestamp && (e.writeFieldBegin("submit_scheduled_timestamp", r.Type.I64, 7), e.writeI64(this.submit_scheduled_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var _ = e.exports.Onboarding = function(e) {
				this.id = null, this.action_source = null, this.process_notes = null, this.number_subreddits_selected = null, this.subreddits_selected = null, this.user_name = null, this.recommended_user_name = null, this.start_timestamp = null, this.end_timestamp = null, this.category_position = null, this.category_name = null, this.subreddit_name = null, this.subreddit_position = null, this.subreddit_is_selected = null, this.subreddits_already_selected = null, this.successful = null, this.semantic_version = null, this.landing_page = null, this.valid_email_submitted = null, this.pre_selected = null, this.passed_captcha = null, this.captcha_num_screens = null, this.personalized_subreddits = null, this.similar_subreddits = null, this.number_subreddits = null, this.is_similar_subreddit = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.action_source && null !== e.action_source && (this.action_source = e.action_source), void 0 !== e.process_notes && null !== e.process_notes && (this.process_notes = e.process_notes), void 0 !== e.number_subreddits_selected && null !== e.number_subreddits_selected && (this.number_subreddits_selected = e.number_subreddits_selected), void 0 !== e.subreddits_selected && null !== e.subreddits_selected && (this.subreddits_selected = r.copyList(e.subreddits_selected, [null])), void 0 !== e.user_name && null !== e.user_name && (this.user_name = e.user_name), void 0 !== e.recommended_user_name && null !== e.recommended_user_name && (this.recommended_user_name = e.recommended_user_name), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.category_position && null !== e.category_position && (this.category_position = e.category_position), void 0 !== e.category_name && null !== e.category_name && (this.category_name = e.category_name), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name), void 0 !== e.subreddit_position && null !== e.subreddit_position && (this.subreddit_position = e.subreddit_position), void 0 !== e.subreddit_is_selected && null !== e.subreddit_is_selected && (this.subreddit_is_selected = e.subreddit_is_selected), void 0 !== e.subreddits_already_selected && null !== e.subreddits_already_selected && (this.subreddits_already_selected = e.subreddits_already_selected), void 0 !== e.successful && null !== e.successful && (this.successful = e.successful), void 0 !== e.semantic_version && null !== e.semantic_version && (this.semantic_version = e.semantic_version), void 0 !== e.landing_page && null !== e.landing_page && (this.landing_page = e.landing_page), void 0 !== e.valid_email_submitted && null !== e.valid_email_submitted && (this.valid_email_submitted = e.valid_email_submitted), void 0 !== e.pre_selected && null !== e.pre_selected && (this.pre_selected = e.pre_selected), void 0 !== e.passed_captcha && null !== e.passed_captcha && (this.passed_captcha = e.passed_captcha), void 0 !== e.captcha_num_screens && null !== e.captcha_num_screens && (this.captcha_num_screens = e.captcha_num_screens), void 0 !== e.personalized_subreddits && null !== e.personalized_subreddits && (this.personalized_subreddits = e.personalized_subreddits), void 0 !== e.similar_subreddits && null !== e.similar_subreddits && (this.similar_subreddits = r.copyList(e.similar_subreddits, [null])), void 0 !== e.number_subreddits && null !== e.number_subreddits && (this.number_subreddits = e.number_subreddits), void 0 !== e.is_similar_subreddit && null !== e.is_similar_subreddit && (this.is_similar_subreddit = e.is_similar_subreddit))
			};
			_.prototype = {}, _.prototype.write = function(e) {
				if (e.writeStructBegin("Onboarding"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.action_source && void 0 !== this.action_source && (e.writeFieldBegin("action_source", r.Type.STRING, 6), e.writeString(this.action_source), e.writeFieldEnd()), null !== this.process_notes && void 0 !== this.process_notes && (e.writeFieldBegin("process_notes", r.Type.STRING, 7), e.writeString(this.process_notes), e.writeFieldEnd()), null !== this.number_subreddits_selected && void 0 !== this.number_subreddits_selected && (e.writeFieldBegin("number_subreddits_selected", r.Type.I64, 8), e.writeI64(this.number_subreddits_selected), e.writeFieldEnd()), null !== this.subreddits_selected && void 0 !== this.subreddits_selected) {
					for (var t in e.writeFieldBegin("subreddits_selected", r.Type.LIST, 9), e.writeListBegin(r.Type.STRING, this.subreddits_selected.length), this.subreddits_selected) this.subreddits_selected.hasOwnProperty(t) && (t = this.subreddits_selected[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.user_name && void 0 !== this.user_name && (e.writeFieldBegin("user_name", r.Type.STRING, 10), e.writeString(this.user_name), e.writeFieldEnd()), null !== this.recommended_user_name && void 0 !== this.recommended_user_name && (e.writeFieldBegin("recommended_user_name", r.Type.BOOL, 11), e.writeBool(this.recommended_user_name), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", r.Type.I64, 12), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", r.Type.I64, 13), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.category_position && void 0 !== this.category_position && (e.writeFieldBegin("category_position", r.Type.I64, 14), e.writeI64(this.category_position), e.writeFieldEnd()), null !== this.category_name && void 0 !== this.category_name && (e.writeFieldBegin("category_name", r.Type.STRING, 15), e.writeString(this.category_name), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", r.Type.STRING, 16), e.writeString(this.subreddit_name), e.writeFieldEnd()), null !== this.subreddit_position && void 0 !== this.subreddit_position && (e.writeFieldBegin("subreddit_position", r.Type.I64, 17), e.writeI64(this.subreddit_position), e.writeFieldEnd()), null !== this.subreddit_is_selected && void 0 !== this.subreddit_is_selected && (e.writeFieldBegin("subreddit_is_selected", r.Type.BOOL, 18), e.writeBool(this.subreddit_is_selected), e.writeFieldEnd()), null !== this.subreddits_already_selected && void 0 !== this.subreddits_already_selected && (e.writeFieldBegin("subreddits_already_selected", r.Type.I64, 19), e.writeI64(this.subreddits_already_selected), e.writeFieldEnd()), null !== this.successful && void 0 !== this.successful && (e.writeFieldBegin("successful", r.Type.BOOL, 20), e.writeBool(this.successful), e.writeFieldEnd()), null !== this.semantic_version && void 0 !== this.semantic_version && (e.writeFieldBegin("semantic_version", r.Type.STRING, 21), e.writeString(this.semantic_version), e.writeFieldEnd()), null !== this.landing_page && void 0 !== this.landing_page && (e.writeFieldBegin("landing_page", r.Type.STRING, 22), e.writeString(this.landing_page), e.writeFieldEnd()), null !== this.valid_email_submitted && void 0 !== this.valid_email_submitted && (e.writeFieldBegin("valid_email_submitted", r.Type.BOOL, 23), e.writeBool(this.valid_email_submitted), e.writeFieldEnd()), null !== this.pre_selected && void 0 !== this.pre_selected && (e.writeFieldBegin("pre_selected", r.Type.BOOL, 24), e.writeBool(this.pre_selected), e.writeFieldEnd()), null !== this.passed_captcha && void 0 !== this.passed_captcha && (e.writeFieldBegin("passed_captcha", r.Type.BOOL, 25), e.writeBool(this.passed_captcha), e.writeFieldEnd()), null !== this.captcha_num_screens && void 0 !== this.captcha_num_screens && (e.writeFieldBegin("captcha_num_screens", r.Type.I64, 26), e.writeI64(this.captcha_num_screens), e.writeFieldEnd()), null !== this.personalized_subreddits && void 0 !== this.personalized_subreddits && (e.writeFieldBegin("personalized_subreddits", r.Type.I64, 27), e.writeI64(this.personalized_subreddits), e.writeFieldEnd()), null !== this.similar_subreddits && void 0 !== this.similar_subreddits) {
					for (var i in e.writeFieldBegin("similar_subreddits", r.Type.LIST, 28), e.writeListBegin(r.Type.STRING, this.similar_subreddits.length), this.similar_subreddits) this.similar_subreddits.hasOwnProperty(i) && (i = this.similar_subreddits[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_subreddits && void 0 !== this.number_subreddits && (e.writeFieldBegin("number_subreddits", r.Type.I64, 29), e.writeI64(this.number_subreddits), e.writeFieldEnd()), null !== this.is_similar_subreddit && void 0 !== this.is_similar_subreddit && (e.writeFieldBegin("is_similar_subreddit", r.Type.BOOL, 30), e.writeBool(this.is_similar_subreddit), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var m = e.exports.DiscoveryUnit = function(e) {
				if (this.type = null, this.id = null, this.title = null, this.name = null, this.items = null, e) {
					if (void 0 === e.type || null === e.type) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field type is unset!");
					if (this.type = e.type, void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					if (this.id = e.id, void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 === e.name || null === e.name) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
					this.name = e.name, void 0 !== e.items && null !== e.items && (this.items = r.copyList(e.items, [null]))
				}
			};
			m.prototype = {}, m.prototype.write = function(e) {
				if (e.writeStructBegin("DiscoveryUnit"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 9), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 10), e.writeString(this.title), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 11), e.writeString(this.name), e.writeFieldEnd()), null !== this.items && void 0 !== this.items) {
					for (var t in e.writeFieldBegin("items", r.Type.LIST, 12), e.writeListBegin(r.Type.STRING, this.items.length), this.items) this.items.hasOwnProperty(t) && (t = this.items[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			};
			var p = e.exports.Message = function(e) {
				if (this.id = null, this.recipient_id = null, this.recipient_type = null, this.sender_type = null, this.body = null, this.subject = null, this.created_timestamp = null, this.first_message_id = null, this.parent_message_id = null, this.source_page = null, this.filtered_by_recipient = null, this.type = null, e) {
					if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					this.id = e.id, void 0 !== e.recipient_id && null !== e.recipient_id && (this.recipient_id = e.recipient_id), void 0 !== e.recipient_type && null !== e.recipient_type && (this.recipient_type = e.recipient_type), void 0 !== e.sender_type && null !== e.sender_type && (this.sender_type = e.sender_type), void 0 !== e.body && null !== e.body && (this.body = e.body), void 0 !== e.subject && null !== e.subject && (this.subject = e.subject), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.first_message_id && null !== e.first_message_id && (this.first_message_id = e.first_message_id), void 0 !== e.parent_message_id && null !== e.parent_message_id && (this.parent_message_id = e.parent_message_id), void 0 !== e.source_page && null !== e.source_page && (this.source_page = e.source_page), void 0 !== e.filtered_by_recipient && null !== e.filtered_by_recipient && (this.filtered_by_recipient = e.filtered_by_recipient), void 0 !== e.type && null !== e.type && (this.type = e.type)
				}
			};
			p.prototype = {}, p.prototype.write = function(e) {
				e.writeStructBegin("Message"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.recipient_id && void 0 !== this.recipient_id && (e.writeFieldBegin("recipient_id", r.Type.STRING, 2), e.writeString(this.recipient_id), e.writeFieldEnd()), null !== this.recipient_type && void 0 !== this.recipient_type && (e.writeFieldBegin("recipient_type", r.Type.STRING, 3), e.writeString(this.recipient_type), e.writeFieldEnd()), null !== this.sender_type && void 0 !== this.sender_type && (e.writeFieldBegin("sender_type", r.Type.STRING, 4), e.writeString(this.sender_type), e.writeFieldEnd()), null !== this.body && void 0 !== this.body && (e.writeFieldBegin("body", r.Type.STRING, 5), e.writeString(this.body), e.writeFieldEnd()), null !== this.subject && void 0 !== this.subject && (e.writeFieldBegin("subject", r.Type.STRING, 6), e.writeString(this.subject), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 7), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.first_message_id && void 0 !== this.first_message_id && (e.writeFieldBegin("first_message_id", r.Type.STRING, 8), e.writeString(this.first_message_id), e.writeFieldEnd()), null !== this.parent_message_id && void 0 !== this.parent_message_id && (e.writeFieldBegin("parent_message_id", r.Type.STRING, 9), e.writeString(this.parent_message_id), e.writeFieldEnd()), null !== this.source_page && void 0 !== this.source_page && (e.writeFieldBegin("source_page", r.Type.STRING, 10), e.writeString(this.source_page), e.writeFieldEnd()), null !== this.filtered_by_recipient && void 0 !== this.filtered_by_recipient && (e.writeFieldBegin("filtered_by_recipient", r.Type.BOOL, 11), e.writeBool(this.filtered_by_recipient), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 12), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var h = e.exports.News = function(e) {
				this.topic_id = null, this.topic_name = null, this.subtopic_id = null, this.subtopic_name = null, e && (void 0 !== e.topic_id && null !== e.topic_id && (this.topic_id = e.topic_id), void 0 !== e.topic_name && null !== e.topic_name && (this.topic_name = e.topic_name), void 0 !== e.subtopic_id && null !== e.subtopic_id && (this.subtopic_id = e.subtopic_id), void 0 !== e.subtopic_name && null !== e.subtopic_name && (this.subtopic_name = e.subtopic_name))
			};
			h.prototype = {}, h.prototype.write = function(e) {
				e.writeStructBegin("News"), null !== this.topic_id && void 0 !== this.topic_id && (e.writeFieldBegin("topic_id", r.Type.STRING, 1), e.writeString(this.topic_id), e.writeFieldEnd()), null !== this.topic_name && void 0 !== this.topic_name && (e.writeFieldBegin("topic_name", r.Type.STRING, 2), e.writeString(this.topic_name), e.writeFieldEnd()), null !== this.subtopic_id && void 0 !== this.subtopic_id && (e.writeFieldBegin("subtopic_id", r.Type.STRING, 3), e.writeString(this.subtopic_id), e.writeFieldEnd()), null !== this.subtopic_name && void 0 !== this.subtopic_name && (e.writeFieldBegin("subtopic_name", r.Type.STRING, 4), e.writeString(this.subtopic_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var f = e.exports.Edit = function(e) {
				this.previous_body_text = null, e && void 0 !== e.previous_body_text && null !== e.previous_body_text && (this.previous_body_text = e.previous_body_text)
			};
			f.prototype = {}, f.prototype.write = function(e) {
				e.writeStructBegin("Edit"), null !== this.previous_body_text && void 0 !== this.previous_body_text && (e.writeFieldBegin("previous_body_text", r.Type.STRING, 1), e.writeString(this.previous_body_text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var g = e.exports.PostEvent = function(e) {
				this.type = null, this.event_state = null, this.event_start_timestamp = null, this.event_end_timestamp = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.event_state && null !== e.event_state && (this.event_state = e.event_state), void 0 !== e.event_start_timestamp && null !== e.event_start_timestamp && (this.event_start_timestamp = e.event_start_timestamp), void 0 !== e.event_end_timestamp && null !== e.event_end_timestamp && (this.event_end_timestamp = e.event_end_timestamp))
			};
			g.prototype = {}, g.prototype.write = function(e) {
				e.writeStructBegin("PostEvent"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.event_state && void 0 !== this.event_state && (e.writeFieldBegin("event_state", r.Type.STRING, 2), e.writeString(this.event_state), e.writeFieldEnd()), null !== this.event_start_timestamp && void 0 !== this.event_start_timestamp && (e.writeFieldBegin("event_start_timestamp", r.Type.I64, 3), e.writeI64(this.event_start_timestamp), e.writeFieldEnd()), null !== this.event_end_timestamp && void 0 !== this.event_end_timestamp && (e.writeFieldBegin("event_end_timestamp", r.Type.I64, 4), e.writeI64(this.event_end_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var b = e.exports.PostCollection = function(e) {
				this.id = null, this.title = null, this.author_id = null, this.post_ids = null, this.display_layout = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.author_id && null !== e.author_id && (this.author_id = e.author_id), void 0 !== e.post_ids && null !== e.post_ids && (this.post_ids = r.copyList(e.post_ids, [null])), void 0 !== e.display_layout && null !== e.display_layout && (this.display_layout = e.display_layout))
			};
			b.prototype = {}, b.prototype.write = function(e) {
				if (e.writeStructBegin("PostCollection"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), null !== this.author_id && void 0 !== this.author_id && (e.writeFieldBegin("author_id", r.Type.STRING, 4), e.writeString(this.author_id), e.writeFieldEnd()), null !== this.post_ids && void 0 !== this.post_ids) {
					for (var t in e.writeFieldBegin("post_ids", r.Type.LIST, 5), e.writeListBegin(r.Type.STRING, this.post_ids.length), this.post_ids) this.post_ids.hasOwnProperty(t) && (t = this.post_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.display_layout && void 0 !== this.display_layout && (e.writeFieldBegin("display_layout", r.Type.STRING, 6), e.writeString(this.display_layout), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var w = e.exports.Vote = function(e) {
				this.affects_karma = null, this.affects_score = null, e && (void 0 !== e.affects_karma && null !== e.affects_karma && (this.affects_karma = e.affects_karma), void 0 !== e.affects_score && null !== e.affects_score && (this.affects_score = e.affects_score))
			};
			w.prototype = {}, w.prototype.write = function(e) {
				e.writeStructBegin("Vote"), null !== this.affects_karma && void 0 !== this.affects_karma && (e.writeFieldBegin("affects_karma", r.Type.BOOL, 1), e.writeBool(this.affects_karma), e.writeFieldEnd()), null !== this.affects_score && void 0 !== this.affects_score && (e.writeFieldBegin("affects_score", r.Type.BOOL, 2), e.writeBool(this.affects_score), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/crawler_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Crawler = function(e) {
					this.name = null, e && void 0 !== e.name && null !== e.name && (this.name = e.name)
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Crawler"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/crowd_control_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CrowdControl = function(e) {
					this.collapse_reasons = null, this.rating_threshold = null, e && (void 0 !== e.collapse_reasons && null !== e.collapse_reasons && (this.collapse_reasons = r.copyList(e.collapse_reasons, [null])), void 0 !== e.rating_threshold && null !== e.rating_threshold && (this.rating_threshold = e.rating_threshold))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("CrowdControl"), null !== this.collapse_reasons && void 0 !== this.collapse_reasons) {
					for (var t in e.writeFieldBegin("collapse_reasons", r.Type.LIST, 1), e.writeListBegin(r.Type.STRING, this.collapse_reasons.length), this.collapse_reasons) this.collapse_reasons.hasOwnProperty(t) && (t = this.collapse_reasons[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.rating_threshold && void 0 !== this.rating_threshold && (e.writeFieldBegin("rating_threshold", r.Type.STRING, 2), e.writeString(this.rating_threshold), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/crowd_source_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CrowdSource = function(e) {
					this.place_id = null, this.geo_country = null, this.geo_region = null, this.geo_city = null, this.old_place_id = null, this.old_geo_country = null, this.old_geo_region = null, this.old_geo_city = null, e && (void 0 !== e.place_id && null !== e.place_id && (this.place_id = e.place_id), void 0 !== e.geo_country && null !== e.geo_country && (this.geo_country = e.geo_country), void 0 !== e.geo_region && null !== e.geo_region && (this.geo_region = e.geo_region), void 0 !== e.geo_city && null !== e.geo_city && (this.geo_city = e.geo_city), void 0 !== e.old_place_id && null !== e.old_place_id && (this.old_place_id = e.old_place_id), void 0 !== e.old_geo_country && null !== e.old_geo_country && (this.old_geo_country = e.old_geo_country), void 0 !== e.old_geo_region && null !== e.old_geo_region && (this.old_geo_region = e.old_geo_region), void 0 !== e.old_geo_city && null !== e.old_geo_city && (this.old_geo_city = e.old_geo_city))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("CrowdSource"), null !== this.place_id && void 0 !== this.place_id && (e.writeFieldBegin("place_id", r.Type.STRING, 1), e.writeString(this.place_id), e.writeFieldEnd()), null !== this.geo_country && void 0 !== this.geo_country && (e.writeFieldBegin("geo_country", r.Type.STRING, 2), e.writeString(this.geo_country), e.writeFieldEnd()), null !== this.geo_region && void 0 !== this.geo_region && (e.writeFieldBegin("geo_region", r.Type.STRING, 3), e.writeString(this.geo_region), e.writeFieldEnd()), null !== this.geo_city && void 0 !== this.geo_city && (e.writeFieldBegin("geo_city", r.Type.STRING, 4), e.writeString(this.geo_city), e.writeFieldEnd()), null !== this.old_place_id && void 0 !== this.old_place_id && (e.writeFieldBegin("old_place_id", r.Type.STRING, 5), e.writeString(this.old_place_id), e.writeFieldEnd()), null !== this.old_geo_country && void 0 !== this.old_geo_country && (e.writeFieldBegin("old_geo_country", r.Type.STRING, 6), e.writeString(this.old_geo_country), e.writeFieldEnd()), null !== this.old_geo_region && void 0 !== this.old_geo_region && (e.writeFieldBegin("old_geo_region", r.Type.STRING, 7), e.writeString(this.old_geo_region), e.writeFieldEnd()), null !== this.old_geo_city && void 0 !== this.old_geo_city && (e.writeFieldBegin("old_geo_city", r.Type.STRING, 8), e.writeString(this.old_geo_city), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/custom_feed_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.CustomFeed = function(e) {
					this.id = null, this.owner_id = null, this.number_subreddits = null, this.number_followers = null, this.is_nsfw = null, this.cover_art_url = null, this.visibility = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.owner_id && null !== e.owner_id && (this.owner_id = e.owner_id), void 0 !== e.number_subreddits && null !== e.number_subreddits && (this.number_subreddits = e.number_subreddits), void 0 !== e.number_followers && null !== e.number_followers && (this.number_followers = e.number_followers), void 0 !== e.is_nsfw && null !== e.is_nsfw && (this.is_nsfw = e.is_nsfw), void 0 !== e.cover_art_url && null !== e.cover_art_url && (this.cover_art_url = e.cover_art_url), void 0 !== e.visibility && null !== e.visibility && (this.visibility = e.visibility))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("CustomFeed"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.owner_id && void 0 !== this.owner_id && (e.writeFieldBegin("owner_id", r.Type.STRING, 2), e.writeString(this.owner_id), e.writeFieldEnd()), null !== this.number_subreddits && void 0 !== this.number_subreddits && (e.writeFieldBegin("number_subreddits", r.Type.I32, 3), e.writeI32(this.number_subreddits), e.writeFieldEnd()), null !== this.number_followers && void 0 !== this.number_followers && (e.writeFieldBegin("number_followers", r.Type.I32, 4), e.writeI32(this.number_followers), e.writeFieldEnd()), null !== this.is_nsfw && void 0 !== this.is_nsfw && (e.writeFieldBegin("is_nsfw", r.Type.BOOL, 5), e.writeBool(this.is_nsfw), e.writeFieldEnd()), null !== this.cover_art_url && void 0 !== this.cover_art_url && (e.writeFieldBegin("cover_art_url", r.Type.STRING, 6), e.writeString(this.cover_art_url), e.writeFieldEnd()), null !== this.visibility && void 0 !== this.visibility && (e.writeFieldBegin("visibility", r.Type.STRING, 7), e.writeString(this.visibility), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/device_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Screen = function(e) {
					this.width = null, this.height = null, this.viewport_width = null, this.viewport_height = null, this.view_type = null, this.theme = null, this.in_focus = null, this.browser_tab_id = null, this.scroll_position = null, this.app_font_size_delta = null, this.ios_font_size = null, this.android_font_size = null, this.auto_dark_mode = null, e && (void 0 !== e.width && null !== e.width && (this.width = e.width), void 0 !== e.height && null !== e.height && (this.height = e.height), void 0 !== e.viewport_width && null !== e.viewport_width && (this.viewport_width = e.viewport_width), void 0 !== e.viewport_height && null !== e.viewport_height && (this.viewport_height = e.viewport_height), void 0 !== e.view_type && null !== e.view_type && (this.view_type = e.view_type), void 0 !== e.theme && null !== e.theme && (this.theme = e.theme), void 0 !== e.in_focus && null !== e.in_focus && (this.in_focus = e.in_focus), void 0 !== e.browser_tab_id && null !== e.browser_tab_id && (this.browser_tab_id = e.browser_tab_id), void 0 !== e.scroll_position && null !== e.scroll_position && (this.scroll_position = e.scroll_position), void 0 !== e.app_font_size_delta && null !== e.app_font_size_delta && (this.app_font_size_delta = e.app_font_size_delta), void 0 !== e.ios_font_size && null !== e.ios_font_size && (this.ios_font_size = e.ios_font_size), void 0 !== e.android_font_size && null !== e.android_font_size && (this.android_font_size = e.android_font_size), void 0 !== e.auto_dark_mode && null !== e.auto_dark_mode && (this.auto_dark_mode = e.auto_dark_mode))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Screen"), null !== this.width && void 0 !== this.width && (e.writeFieldBegin("width", r.Type.I32, 1), e.writeI32(this.width), e.writeFieldEnd()), null !== this.height && void 0 !== this.height && (e.writeFieldBegin("height", r.Type.I32, 2), e.writeI32(this.height), e.writeFieldEnd()), null !== this.viewport_width && void 0 !== this.viewport_width && (e.writeFieldBegin("viewport_width", r.Type.I32, 3), e.writeI32(this.viewport_width), e.writeFieldEnd()), null !== this.viewport_height && void 0 !== this.viewport_height && (e.writeFieldBegin("viewport_height", r.Type.I32, 4), e.writeI32(this.viewport_height), e.writeFieldEnd()), null !== this.view_type && void 0 !== this.view_type && (e.writeFieldBegin("view_type", r.Type.STRING, 5), e.writeString(this.view_type), e.writeFieldEnd()), null !== this.theme && void 0 !== this.theme && (e.writeFieldBegin("theme", r.Type.STRING, 6), e.writeString(this.theme), e.writeFieldEnd()), null !== this.in_focus && void 0 !== this.in_focus && (e.writeFieldBegin("in_focus", r.Type.BOOL, 7), e.writeBool(this.in_focus), e.writeFieldEnd()), null !== this.browser_tab_id && void 0 !== this.browser_tab_id && (e.writeFieldBegin("browser_tab_id", r.Type.STRING, 8), e.writeString(this.browser_tab_id), e.writeFieldEnd()), null !== this.scroll_position && void 0 !== this.scroll_position && (e.writeFieldBegin("scroll_position", r.Type.I32, 9), e.writeI32(this.scroll_position), e.writeFieldEnd()), null !== this.app_font_size_delta && void 0 !== this.app_font_size_delta && (e.writeFieldBegin("app_font_size_delta", r.Type.I32, 10), e.writeI32(this.app_font_size_delta), e.writeFieldEnd()), null !== this.ios_font_size && void 0 !== this.ios_font_size && (e.writeFieldBegin("ios_font_size", r.Type.STRING, 11), e.writeString(this.ios_font_size), e.writeFieldEnd()), null !== this.android_font_size && void 0 !== this.android_font_size && (e.writeFieldBegin("android_font_size", r.Type.DOUBLE, 12), e.writeDouble(this.android_font_size), e.writeFieldEnd()), null !== this.auto_dark_mode && void 0 !== this.auto_dark_mode && (e.writeFieldBegin("auto_dark_mode", r.Type.STRING, 13), e.writeString(this.auto_dark_mode), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Platform = function(e) {
				this.name = null, this.device_id = null, this.device_name = null, this.os_name = null, this.os_version = null, this.browser_name = null, this.browser_version = null, this.fingerprint = null, this.fingerprint_created_timestamp = null, e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.device_id && null !== e.device_id && (this.device_id = e.device_id), void 0 !== e.device_name && null !== e.device_name && (this.device_name = e.device_name), void 0 !== e.os_name && null !== e.os_name && (this.os_name = e.os_name), void 0 !== e.os_version && null !== e.os_version && (this.os_version = e.os_version), void 0 !== e.browser_name && null !== e.browser_name && (this.browser_name = e.browser_name), void 0 !== e.browser_version && null !== e.browser_version && (this.browser_version = e.browser_version), void 0 !== e.fingerprint && null !== e.fingerprint && (this.fingerprint = e.fingerprint), void 0 !== e.fingerprint_created_timestamp && null !== e.fingerprint_created_timestamp && (this.fingerprint_created_timestamp = e.fingerprint_created_timestamp))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Platform"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), null !== this.device_id && void 0 !== this.device_id && (e.writeFieldBegin("device_id", r.Type.STRING, 2), e.writeString(this.device_id), e.writeFieldEnd()), null !== this.device_name && void 0 !== this.device_name && (e.writeFieldBegin("device_name", r.Type.STRING, 3), e.writeString(this.device_name), e.writeFieldEnd()), null !== this.os_name && void 0 !== this.os_name && (e.writeFieldBegin("os_name", r.Type.STRING, 4), e.writeString(this.os_name), e.writeFieldEnd()), null !== this.os_version && void 0 !== this.os_version && (e.writeFieldBegin("os_version", r.Type.STRING, 5), e.writeString(this.os_version), e.writeFieldEnd()), null !== this.browser_name && void 0 !== this.browser_name && (e.writeFieldBegin("browser_name", r.Type.STRING, 6), e.writeString(this.browser_name), e.writeFieldEnd()), null !== this.browser_version && void 0 !== this.browser_version && (e.writeFieldBegin("browser_version", r.Type.STRING, 7), e.writeString(this.browser_version), e.writeFieldEnd()), null !== this.fingerprint && void 0 !== this.fingerprint && (e.writeFieldBegin("fingerprint", r.Type.STRING, 8), e.writeString(this.fingerprint), e.writeFieldEnd()), null !== this.fingerprint_created_timestamp && void 0 !== this.fingerprint_created_timestamp && (e.writeFieldBegin("fingerprint_created_timestamp", r.Type.I64, 9), e.writeI64(this.fingerprint_created_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.App = function(e) {
				if (this.version = null, this.name = null, this.install_timestamp = null, e) {
					if (void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 === e.name || null === e.name) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
					this.name = e.name, void 0 !== e.install_timestamp && null !== e.install_timestamp && (this.install_timestamp = e.install_timestamp)
				}
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("App"), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", r.Type.STRING, 1), e.writeString(this.version), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.install_timestamp && void 0 !== this.install_timestamp && (e.writeFieldBegin("install_timestamp", r.Type.I64, 3), e.writeI64(this.install_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/domain_ban_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.DomainBan = function(e) {
					this.url = null, this.markdown = null, this.no_email = null, this.shame = null, this.disable_approve = null, this.ban_message = null, this.shame_message = null, this.regex = null, this.inspector_exempt_regex = null, this.submit_banned = null, e && (void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.markdown && null !== e.markdown && (this.markdown = e.markdown), void 0 !== e.no_email && null !== e.no_email && (this.no_email = e.no_email), void 0 !== e.shame && null !== e.shame && (this.shame = e.shame), void 0 !== e.disable_approve && null !== e.disable_approve && (this.disable_approve = e.disable_approve), void 0 !== e.ban_message && null !== e.ban_message && (this.ban_message = e.ban_message), void 0 !== e.shame_message && null !== e.shame_message && (this.shame_message = e.shame_message), void 0 !== e.regex && null !== e.regex && (this.regex = e.regex), void 0 !== e.inspector_exempt_regex && null !== e.inspector_exempt_regex && (this.inspector_exempt_regex = e.inspector_exempt_regex), void 0 !== e.submit_banned && null !== e.submit_banned && (this.submit_banned = e.submit_banned))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("DomainBan"), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", r.Type.STRING, 1), e.writeString(this.url), e.writeFieldEnd()), null !== this.markdown && void 0 !== this.markdown && (e.writeFieldBegin("markdown", r.Type.BOOL, 2), e.writeBool(this.markdown), e.writeFieldEnd()), null !== this.no_email && void 0 !== this.no_email && (e.writeFieldBegin("no_email", r.Type.BOOL, 3), e.writeBool(this.no_email), e.writeFieldEnd()), null !== this.shame && void 0 !== this.shame && (e.writeFieldBegin("shame", r.Type.BOOL, 4), e.writeBool(this.shame), e.writeFieldEnd()), null !== this.disable_approve && void 0 !== this.disable_approve && (e.writeFieldBegin("disable_approve", r.Type.BOOL, 5), e.writeBool(this.disable_approve), e.writeFieldEnd()), null !== this.ban_message && void 0 !== this.ban_message && (e.writeFieldBegin("ban_message", r.Type.STRING, 6), e.writeString(this.ban_message), e.writeFieldEnd()), null !== this.shame_message && void 0 !== this.shame_message && (e.writeFieldBegin("shame_message", r.Type.STRING, 7), e.writeString(this.shame_message), e.writeFieldEnd()), null !== this.regex && void 0 !== this.regex && (e.writeFieldBegin("regex", r.Type.STRING, 8), e.writeString(this.regex), e.writeFieldEnd()), null !== this.inspector_exempt_regex && void 0 !== this.inspector_exempt_regex && (e.writeFieldBegin("inspector_exempt_regex", r.Type.STRING, 9), e.writeString(this.inspector_exempt_regex), e.writeFieldEnd()), null !== this.submit_banned && void 0 !== this.submit_banned && (e.writeFieldBegin("submit_banned", r.Type.BOOL, 10), e.writeBool(this.submit_banned), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/econ_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Purchase = function(e) {
					this.type = null, this.order_id = null, this.product_type = null, this.product_id = null, this.product_version = null, this.subscription_id = null, this.count = null, this.price_micros = null, this.currency = null, this.days_remaining = null, this.count_remaining = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.order_id && null !== e.order_id && (this.order_id = e.order_id), void 0 !== e.product_type && null !== e.product_type && (this.product_type = e.product_type), void 0 !== e.product_id && null !== e.product_id && (this.product_id = e.product_id), void 0 !== e.product_version && null !== e.product_version && (this.product_version = e.product_version), void 0 !== e.subscription_id && null !== e.subscription_id && (this.subscription_id = e.subscription_id), void 0 !== e.count && null !== e.count && (this.count = e.count), void 0 !== e.price_micros && null !== e.price_micros && (this.price_micros = e.price_micros), void 0 !== e.currency && null !== e.currency && (this.currency = e.currency), void 0 !== e.days_remaining && null !== e.days_remaining && (this.days_remaining = e.days_remaining), void 0 !== e.count_remaining && null !== e.count_remaining && (this.count_remaining = e.count_remaining))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Purchase"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.order_id && void 0 !== this.order_id && (e.writeFieldBegin("order_id", r.Type.STRING, 2), e.writeString(this.order_id), e.writeFieldEnd()), null !== this.product_type && void 0 !== this.product_type && (e.writeFieldBegin("product_type", r.Type.STRING, 3), e.writeString(this.product_type), e.writeFieldEnd()), null !== this.product_id && void 0 !== this.product_id && (e.writeFieldBegin("product_id", r.Type.STRING, 4), e.writeString(this.product_id), e.writeFieldEnd()), null !== this.product_version && void 0 !== this.product_version && (e.writeFieldBegin("product_version", r.Type.I32, 5), e.writeI32(this.product_version), e.writeFieldEnd()), null !== this.subscription_id && void 0 !== this.subscription_id && (e.writeFieldBegin("subscription_id", r.Type.STRING, 6), e.writeString(this.subscription_id), e.writeFieldEnd()), null !== this.count && void 0 !== this.count && (e.writeFieldBegin("count", r.Type.I64, 7), e.writeI64(this.count), e.writeFieldEnd()), null !== this.price_micros && void 0 !== this.price_micros && (e.writeFieldBegin("price_micros", r.Type.I64, 8), e.writeI64(this.price_micros), e.writeFieldEnd()), null !== this.currency && void 0 !== this.currency && (e.writeFieldBegin("currency", r.Type.STRING, 9), e.writeString(this.currency), e.writeFieldEnd()), null !== this.days_remaining && void 0 !== this.days_remaining && (e.writeFieldBegin("days_remaining", r.Type.I32, 10), e.writeI32(this.days_remaining), e.writeFieldEnd()), null !== this.count_remaining && void 0 !== this.count_remaining && (e.writeFieldBegin("count_remaining", r.Type.I64, 11), e.writeI64(this.count_remaining), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/email_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Email = function(e) {
					this.subject_line = null, this.preview_text = null, this.type = null, this.header_text = null, this.post_has_thumbnail = null, this.listing_source = null, e && (void 0 !== e.subject_line && null !== e.subject_line && (this.subject_line = e.subject_line), void 0 !== e.preview_text && null !== e.preview_text && (this.preview_text = e.preview_text), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.header_text && null !== e.header_text && (this.header_text = e.header_text), void 0 !== e.post_has_thumbnail && null !== e.post_has_thumbnail && (this.post_has_thumbnail = e.post_has_thumbnail), void 0 !== e.listing_source && null !== e.listing_source && (this.listing_source = e.listing_source))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Email"), null !== this.subject_line && void 0 !== this.subject_line && (e.writeFieldBegin("subject_line", r.Type.STRING, 1), e.writeString(this.subject_line), e.writeFieldEnd()), null !== this.preview_text && void 0 !== this.preview_text && (e.writeFieldBegin("preview_text", r.Type.STRING, 2), e.writeString(this.preview_text), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), null !== this.header_text && void 0 !== this.header_text && (e.writeFieldBegin("header_text", r.Type.STRING, 4), e.writeString(this.header_text), e.writeFieldEnd()), null !== this.post_has_thumbnail && void 0 !== this.post_has_thumbnail && (e.writeFieldBegin("post_has_thumbnail", r.Type.BOOL, 5), e.writeBool(this.post_has_thumbnail), e.writeFieldEnd()), null !== this.listing_source && void 0 !== this.listing_source && (e.writeFieldBegin("listing_source", r.Type.STRING, 6), e.writeString(this.listing_source), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/event_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/action_types.js")),
				o = i("./src/telemetry/eventSchemas/adevent_types.js"),
				d = i("./src/telemetry/eventSchemas/brand_types.js"),
				l = i("./src/telemetry/eventSchemas/category_header_types.js"),
				a = i("./src/telemetry/eventSchemas/content_types.js"),
				u = i("./src/telemetry/eventSchemas/device_types.js"),
				c = i("./src/telemetry/eventSchemas/request_types.js"),
				_ = i("./src/telemetry/eventSchemas/session_types.js"),
				m = i("./src/telemetry/eventSchemas/subreddit_types.js"),
				p = i("./src/telemetry/eventSchemas/timer_types.js"),
				h = (i("./src/telemetry/eventSchemas/typedefs_types.js"), i("./src/telemetry/eventSchemas/user_types.js")),
				f = i("./src/telemetry/eventSchemas/chat_types.js"),
				g = i("./src/telemetry/eventSchemas/security_types.js"),
				b = i("./src/telemetry/eventSchemas/midas_types.js"),
				w = i("./src/telemetry/eventSchemas/experiment_types.js"),
				y = i("./src/telemetry/eventSchemas/notification_types.js"),
				v = i("./src/telemetry/eventSchemas/search_types.js"),
				T = i("./src/telemetry/eventSchemas/admin_types.js"),
				S = i("./src/telemetry/eventSchemas/admin_action_types.js"),
				E = i("./src/telemetry/eventSchemas/ticket_types.js"),
				F = i("./src/telemetry/eventSchemas/gold_types.js"),
				I = i("./src/telemetry/eventSchemas/payment_types.js"),
				O = i("./src/telemetry/eventSchemas/outbound_types.js"),
				j = i("./src/telemetry/eventSchemas/carousel_types.js"),
				B = i("./src/telemetry/eventSchemas/adblock_types.js"),
				x = i("./src/telemetry/eventSchemas/email_types.js"),
				R = i("./src/telemetry/eventSchemas/metaflair_types.js"),
				k = i("./src/telemetry/eventSchemas/grapeshot_classification_types.js"),
				C = i("./src/telemetry/eventSchemas/post_draft_types.js"),
				N = i("./src/telemetry/eventSchemas/setting_types.js"),
				P = i("./src/telemetry/eventSchemas/visibility_types.js"),
				L = i("./src/telemetry/eventSchemas/webhook_types.js"),
				A = i("./src/telemetry/eventSchemas/relevance_types.js"),
				D = i("./src/telemetry/eventSchemas/report_types.js"),
				G = i("./src/telemetry/eventSchemas/metasearch_types.js"),
				M = i("./src/telemetry/eventSchemas/postflair_types.js"),
				U = i("./src/telemetry/eventSchemas/thirdpartybadge_types.js"),
				q = i("./src/telemetry/eventSchemas/banner_types.js"),
				H = i("./src/telemetry/eventSchemas/tooltip_types.js"),
				V = i("./src/telemetry/eventSchemas/upload_types.js"),
				W = i("./src/telemetry/eventSchemas/live_thread_types.js"),
				z = i("./src/telemetry/eventSchemas/popup_types.js"),
				K = i("./src/telemetry/eventSchemas/moderator_types.js"),
				Q = i("./src/telemetry/eventSchemas/userflair_types.js"),
				J = i("./src/telemetry/eventSchemas/topic_tag_types.js"),
				Y = i("./src/telemetry/eventSchemas/res_types.js"),
				X = (i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/adcampaign_types.js")),
				Z = i("./src/telemetry/eventSchemas/ad_types.js"),
				$ = i("./src/telemetry/eventSchemas/adgroup_types.js"),
				ee = i("./src/telemetry/eventSchemas/adtargeting_types.js"),
				te = i("./src/telemetry/eventSchemas/businessinfo_types.js"),
				ie = i("./src/telemetry/eventSchemas/billinginfo_types.js"),
				ne = i("./src/telemetry/eventSchemas/crawler_types.js"),
				re = i("./src/telemetry/eventSchemas/custom_feed_types.js"),
				se = i("./src/telemetry/eventSchemas/pwa_types.js"),
				oe = i("./src/telemetry/eventSchemas/seo_types.js"),
				de = i("./src/telemetry/eventSchemas/funding_instrument_types.js"),
				le = i("./src/telemetry/eventSchemas/perspective_types.js"),
				ae = i("./src/telemetry/eventSchemas/comment_draft_types.js"),
				ue = i("./src/telemetry/eventSchemas/ml_model_types.js"),
				ce = i("./src/telemetry/eventSchemas/topic_metadata_types.js"),
				_e = i("./src/telemetry/eventSchemas/domain_ban_types.js"),
				me = i("./src/telemetry/eventSchemas/legal_export_request_types.js"),
				pe = i("./src/telemetry/eventSchemas/post_requirement_types.js"),
				he = i("./src/telemetry/eventSchemas/target_ip_types.js"),
				fe = i("./src/telemetry/eventSchemas/crowd_control_types.js"),
				ge = i("./src/telemetry/eventSchemas/scheduled_post_types.js"),
				be = i("./src/telemetry/eventSchemas/poll_types.js"),
				we = i("./src/telemetry/eventSchemas/audit_types.js"),
				ye = i("./src/telemetry/eventSchemas/spamurai_types.js"),
				ve = i("./src/telemetry/eventSchemas/bulk_action_job_types.js"),
				Te = i("./src/telemetry/eventSchemas/geo_block_types.js"),
				Se = i("./src/telemetry/eventSchemas/imposter_types.js"),
				Ee = i("./src/telemetry/eventSchemas/broadcast_types.js"),
				Fe = i("./src/telemetry/eventSchemas/survey_types.js"),
				Ie = i("./src/telemetry/eventSchemas/playback_types.js"),
				Oe = i("./src/telemetry/eventSchemas/bot_detection_types.js"),
				je = i("./src/telemetry/eventSchemas/crowd_source_types.js"),
				Be = i("./src/telemetry/eventSchemas/announcement_types.js"),
				xe = i("./src/telemetry/eventSchemas/econ_types.js"),
				Re = i("./src/telemetry/eventSchemas/powerups_types.js"),
				ke = e.exports = {},
				Ce = e.exports.Event = function(e) {
					if (this.source = null, this.action = null, this.noun = null, this.endpoint_timestamp = null, this.client_timestamp = null, this.uuid = null, this.utc_offset = null, this.correlation_id = null, this.screenview_id = null, this.post = null, this.listing = null, this.comment = null, this.notification = null, this.oauth = null, this.screen = null, this.app = null, this.platform = null, this.request = null, this.referrer = null, this.dom_timer = null, this.user = null, this.user_preferences = null, this.subreddit = null, this.session = null, this.action_info = null, this.expand = null, this.media = null, this.chat = null, this.post_composer = null, this.widget = null, this.profile = null, this.onboarding = null, this.timer = null, this.tfa = null, this.api_response = null, this.api = null, this.discovery_unit = null, this.experiment = null, this.share = null, this.user_subreddit = null, this.notification_request = null, this.search = null, this.message = null, this.admin = null, this.ticket = null, this.mailroom_request = null, this.comment_composer = null, this.gold_purchase = null, this.payment = null, this.news = null, this.outbound = null, this.click_test = null, this.carousel = null, this.adblock = null, this.email = null, this.metaflair = null, this.post_draft = null, this.setting = null, this.visibility = null, this.webhook = null, this.relevance_model = null, this.meta_search = null, this.post_flair = null, this.admin_action = null, this.zipkin = null, this.edit = null, this.post_event = null, this.post_collection = null, this.third_party_badge = null, this.brand = null, this.messenger_request = null, this.banner = null, this.tooltip = null, this.upload = null, this.csai_media = null, this.category_header = null, this.report = null, this.live_thread = null, this.ad_request = null, this.ad_decision = null, this.ad_push = null, this.vote = null, this.popup = null, this.mod_action = null, this.user_flair = null, this.topic_tag = null, this.res = null, this.ad = null, this.ad_campaign = null, this.ad_group = null, this.ad_targeting = null, this.business_info = null, this.billing_info = null, this.reddar_ticket = null, this.zendesk_ticket = null, this.target_user = null, this.crawler = null, this.response = null, this.custom_feed = null, this.pwa = null, this.seo = null, this.ncmec_report = null, this.funding_instrument = null, this.grapeshot_classification = null, this.perspective = null, this.comment_draft = null, this.target_post = null, this.ml_model = null, this.topic_metadata = null, this.chat_home_feed_boosting = null, this.domain_ban = null, this.legal_export_request = null, this.post_requirement = null, this.target_ip = null, this.crowd_control = null, this.reddar_ticket_content = null, this.scheduled_post = null, this.poll = null, this.reddar_audit = null, this.reddar_audit_ticket = null, this.target_subreddit = null, this.spamurai_action = null, this.ad_brand_safety = null, this.bulk_action_job = null, this.target_comment = null, this.target_message = null, this.reroute_rule = null, this.reddar_queue = null, this.geo_block = null, this.programmatic = null, this.csai_content_report = null, this.imposter = null, this.broadcast = null, this.survey = null, this.playback = null, this.bot_detection = null, this.crowd_source = null, this.announcement = null, this.purchase = null, this.powerups = null, this.geo = null, this.user_legacy_id = null, this.content_metadata = null, this.url_parsed = null, this.link_sharing = null, this.create_request_timestamp = null, this.inferred = null, this.event_hmac_key = null, this.batch_load_id = null, e) {
						if (void 0 === e.source || null === e.source) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field source is unset!");
						if (this.source = e.source, void 0 === e.action || null === e.action) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field action is unset!");
						if (this.action = e.action, void 0 === e.noun || null === e.noun) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field noun is unset!");
						if (this.noun = e.noun, void 0 !== e.endpoint_timestamp && null !== e.endpoint_timestamp && (this.endpoint_timestamp = e.endpoint_timestamp), void 0 === e.client_timestamp || null === e.client_timestamp) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field client_timestamp is unset!");
						if (this.client_timestamp = e.client_timestamp, void 0 === e.uuid || null === e.uuid) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field uuid is unset!");
						this.uuid = e.uuid, void 0 !== e.utc_offset && null !== e.utc_offset && (this.utc_offset = e.utc_offset), void 0 !== e.correlation_id && null !== e.correlation_id && (this.correlation_id = e.correlation_id), void 0 !== e.screenview_id && null !== e.screenview_id && (this.screenview_id = e.screenview_id), void 0 !== e.post && null !== e.post && (this.post = new a.Post(e.post)), void 0 !== e.listing && null !== e.listing && (this.listing = new a.Listing(e.listing)), void 0 !== e.comment && null !== e.comment && (this.comment = new a.Comment(e.comment)), void 0 !== e.notification && null !== e.notification && (this.notification = new a.Notification(e.notification)), void 0 !== e.oauth && null !== e.oauth && (this.oauth = new c.Oauth(e.oauth)), void 0 !== e.screen && null !== e.screen && (this.screen = new u.Screen(e.screen)), void 0 !== e.app && null !== e.app && (this.app = new u.App(e.app)), void 0 !== e.platform && null !== e.platform && (this.platform = new u.Platform(e.platform)), void 0 !== e.request && null !== e.request && (this.request = new c.Request(e.request)), void 0 !== e.referrer && null !== e.referrer && (this.referrer = new c.Referrer(e.referrer)), void 0 !== e.dom_timer && null !== e.dom_timer && (this.dom_timer = new p.DOMTimers(e.dom_timer)), void 0 !== e.user && null !== e.user && (this.user = new h.User(e.user)), void 0 !== e.user_preferences && null !== e.user_preferences && (this.user_preferences = new h.UserPreferences(e.user_preferences)), void 0 !== e.subreddit && null !== e.subreddit && (this.subreddit = new m.Subreddit(e.subreddit)), void 0 !== e.session && null !== e.session && (this.session = new _.Session(e.session)), void 0 !== e.action_info && null !== e.action_info && (this.action_info = new s.ActionInfo(e.action_info)), void 0 !== e.expand && null !== e.expand && (this.expand = new s.Expand(e.expand)), void 0 !== e.media && null !== e.media && (this.media = new a.Media(e.media)), void 0 !== e.chat && null !== e.chat && (this.chat = new f.Chat(e.chat)), void 0 !== e.post_composer && null !== e.post_composer && (this.post_composer = new a.PostComposer(e.post_composer)), void 0 !== e.widget && null !== e.widget && (this.widget = new s.Widget(e.widget)), void 0 !== e.profile && null !== e.profile && (this.profile = new m.Profile(e.profile)), void 0 !== e.onboarding && null !== e.onboarding && (this.onboarding = new a.Onboarding(e.onboarding)), void 0 !== e.timer && null !== e.timer && (this.timer = new p.Timer(e.timer)), void 0 !== e.tfa && null !== e.tfa && (this.tfa = new g.TwoFactorAuth(e.tfa)), void 0 !== e.api_response && null !== e.api_response && (this.api_response = new c.ApiResponse(e.api_response)), void 0 !== e.api && null !== e.api && (this.api = new c.Api(e.api)), void 0 !== e.discovery_unit && null !== e.discovery_unit && (this.discovery_unit = new a.DiscoveryUnit(e.discovery_unit)), void 0 !== e.experiment && null !== e.experiment && (this.experiment = new w.Experiment(e.experiment)), void 0 !== e.share && null !== e.share && (this.share = new s.Share(e.share)), void 0 !== e.user_subreddit && null !== e.user_subreddit && (this.user_subreddit = new h.UserSubreddit(e.user_subreddit)), void 0 !== e.notification_request && null !== e.notification_request && (this.notification_request = new y.NotificationRequest(e.notification_request)), void 0 !== e.search && null !== e.search && (this.search = new v.Search(e.search)), void 0 !== e.message && null !== e.message && (this.message = new a.Message(e.message)), void 0 !== e.admin && null !== e.admin && (this.admin = new T.Admin(e.admin)), void 0 !== e.ticket && null !== e.ticket && (this.ticket = new E.Ticket(e.ticket)), void 0 !== e.mailroom_request && null !== e.mailroom_request && (this.mailroom_request = new y.MailroomRequest(e.mailroom_request)), void 0 !== e.comment_composer && null !== e.comment_composer && (this.comment_composer = new a.CommentComposer(e.comment_composer)), void 0 !== e.gold_purchase && null !== e.gold_purchase && (this.gold_purchase = new F.GoldPurchase(e.gold_purchase)), void 0 !== e.payment && null !== e.payment && (this.payment = new I.Payment(e.payment)), void 0 !== e.news && null !== e.news && (this.news = new a.News(e.news)), void 0 !== e.outbound && null !== e.outbound && (this.outbound = new O.Outbound(e.outbound)), void 0 !== e.click_test && null !== e.click_test && (this.click_test = new w.ClickTest(e.click_test)), void 0 !== e.carousel && null !== e.carousel && (this.carousel = new j.Carousel(e.carousel)), void 0 !== e.adblock && null !== e.adblock && (this.adblock = new B.Adblock(e.adblock)), void 0 !== e.email && null !== e.email && (this.email = new x.Email(e.email)), void 0 !== e.metaflair && null !== e.metaflair && (this.metaflair = new R.MetaFlair(e.metaflair)), void 0 !== e.post_draft && null !== e.post_draft && (this.post_draft = new C.PostDraft(e.post_draft)), void 0 !== e.setting && null !== e.setting && (this.setting = new N.Setting(e.setting)), void 0 !== e.visibility && null !== e.visibility && (this.visibility = new P.Visibility(e.visibility)), void 0 !== e.webhook && null !== e.webhook && (this.webhook = new L.Webhook(e.webhook)), void 0 !== e.relevance_model && null !== e.relevance_model && (this.relevance_model = new A.RelevanceModel(e.relevance_model)), void 0 !== e.meta_search && null !== e.meta_search && (this.meta_search = new G.MetaSearch(e.meta_search)), void 0 !== e.post_flair && null !== e.post_flair && (this.post_flair = new M.PostFlair(e.post_flair)), void 0 !== e.admin_action && null !== e.admin_action && (this.admin_action = new S.AdminAction(e.admin_action)), void 0 !== e.zipkin && null !== e.zipkin && (this.zipkin = new c.Zipkin(e.zipkin)), void 0 !== e.edit && null !== e.edit && (this.edit = new a.Edit(e.edit)), void 0 !== e.post_event && null !== e.post_event && (this.post_event = new a.PostEvent(e.post_event)), void 0 !== e.post_collection && null !== e.post_collection && (this.post_collection = new a.PostCollection(e.post_collection)), void 0 !== e.third_party_badge && null !== e.third_party_badge && (this.third_party_badge = new U.ThirdPartyBadge(e.third_party_badge)), void 0 !== e.brand && null !== e.brand && (this.brand = new d.Brand(e.brand)), void 0 !== e.messenger_request && null !== e.messenger_request && (this.messenger_request = new y.MessengerRequest(e.messenger_request)), void 0 !== e.banner && null !== e.banner && (this.banner = new q.Banner(e.banner)), void 0 !== e.tooltip && null !== e.tooltip && (this.tooltip = new H.Tooltip(e.tooltip)), void 0 !== e.upload && null !== e.upload && (this.upload = new V.Upload(e.upload)), void 0 !== e.csai_media && null !== e.csai_media && (this.csai_media = new S.CSAIMedia(e.csai_media)), void 0 !== e.category_header && null !== e.category_header && (this.category_header = new l.CategoryHeader(e.category_header)), void 0 !== e.report && null !== e.report && (this.report = new D.Report(e.report)), void 0 !== e.live_thread && null !== e.live_thread && (this.live_thread = new W.LiveThread(e.live_thread)), void 0 !== e.ad_request && null !== e.ad_request && (this.ad_request = new o.AdRequest(e.ad_request)), void 0 !== e.ad_decision && null !== e.ad_decision && (this.ad_decision = new o.AdDecision(e.ad_decision)), void 0 !== e.ad_push && null !== e.ad_push && (this.ad_push = new o.AdPush(e.ad_push)), void 0 !== e.vote && null !== e.vote && (this.vote = new a.Vote(e.vote)), void 0 !== e.popup && null !== e.popup && (this.popup = new z.Popup(e.popup)), void 0 !== e.mod_action && null !== e.mod_action && (this.mod_action = new K.ModAction(e.mod_action)), void 0 !== e.user_flair && null !== e.user_flair && (this.user_flair = new Q.UserFlair(e.user_flair)), void 0 !== e.topic_tag && null !== e.topic_tag && (this.topic_tag = new J.TopicTag(e.topic_tag)), void 0 !== e.res && null !== e.res && (this.res = new Y.RES(e.res)), void 0 !== e.ad && null !== e.ad && (this.ad = new Z.Ad(e.ad)), void 0 !== e.ad_campaign && null !== e.ad_campaign && (this.ad_campaign = new X.AdCampaign(e.ad_campaign)), void 0 !== e.ad_group && null !== e.ad_group && (this.ad_group = new $.AdGroup(e.ad_group)), void 0 !== e.ad_targeting && null !== e.ad_targeting && (this.ad_targeting = new ee.AdTargeting(e.ad_targeting)), void 0 !== e.business_info && null !== e.business_info && (this.business_info = new te.BusinessInfo(e.business_info)), void 0 !== e.billing_info && null !== e.billing_info && (this.billing_info = new ie.BillingInfo(e.billing_info)), void 0 !== e.reddar_ticket && null !== e.reddar_ticket && (this.reddar_ticket = new E.ReddarTicket(e.reddar_ticket)), void 0 !== e.zendesk_ticket && null !== e.zendesk_ticket && (this.zendesk_ticket = new E.ZendeskTicket(e.zendesk_ticket)), void 0 !== e.target_user && null !== e.target_user && (this.target_user = new h.User(e.target_user)), void 0 !== e.crawler && null !== e.crawler && (this.crawler = new ne.Crawler(e.crawler)), void 0 !== e.response && null !== e.response && (this.response = new c.Response(e.response)), void 0 !== e.custom_feed && null !== e.custom_feed && (this.custom_feed = new re.CustomFeed(e.custom_feed)), void 0 !== e.pwa && null !== e.pwa && (this.pwa = new se.PWA(e.pwa)), void 0 !== e.seo && null !== e.seo && (this.seo = new oe.SEO(e.seo)), void 0 !== e.ncmec_report && null !== e.ncmec_report && (this.ncmec_report = new S.NCMECReport(e.ncmec_report)), void 0 !== e.funding_instrument && null !== e.funding_instrument && (this.funding_instrument = new de.FundingInstrument(e.funding_instrument)), void 0 !== e.grapeshot_classification && null !== e.grapeshot_classification && (this.grapeshot_classification = new k.GrapeshotClassification(e.grapeshot_classification)), void 0 !== e.perspective && null !== e.perspective && (this.perspective = new le.Perspective(e.perspective)), void 0 !== e.comment_draft && null !== e.comment_draft && (this.comment_draft = new ae.CommentDraft(e.comment_draft)), void 0 !== e.target_post && null !== e.target_post && (this.target_post = new a.Post(e.target_post)), void 0 !== e.ml_model && null !== e.ml_model && (this.ml_model = new ue.MLModel(e.ml_model)), void 0 !== e.topic_metadata && null !== e.topic_metadata && (this.topic_metadata = new ce.TopicMetadata(e.topic_metadata)), void 0 !== e.chat_home_feed_boosting && null !== e.chat_home_feed_boosting && (this.chat_home_feed_boosting = new f.ChatHomeFeedBoosting(e.chat_home_feed_boosting)), void 0 !== e.domain_ban && null !== e.domain_ban && (this.domain_ban = new _e.DomainBan(e.domain_ban)), void 0 !== e.legal_export_request && null !== e.legal_export_request && (this.legal_export_request = new me.LegalExportRequest(e.legal_export_request)), void 0 !== e.post_requirement && null !== e.post_requirement && (this.post_requirement = new pe.PostRequirement(e.post_requirement)), void 0 !== e.target_ip && null !== e.target_ip && (this.target_ip = new he.TargetIP(e.target_ip)), void 0 !== e.crowd_control && null !== e.crowd_control && (this.crowd_control = new fe.CrowdControl(e.crowd_control)), void 0 !== e.reddar_ticket_content && null !== e.reddar_ticket_content && (this.reddar_ticket_content = new E.ReddarTicketContent(e.reddar_ticket_content)), void 0 !== e.scheduled_post && null !== e.scheduled_post && (this.scheduled_post = new ge.ScheduledPost(e.scheduled_post)), void 0 !== e.poll && null !== e.poll && (this.poll = new be.Poll(e.poll)), void 0 !== e.reddar_audit && null !== e.reddar_audit && (this.reddar_audit = new we.ReddarAudit(e.reddar_audit)), void 0 !== e.reddar_audit_ticket && null !== e.reddar_audit_ticket && (this.reddar_audit_ticket = new we.ReddarAuditTicket(e.reddar_audit_ticket)), void 0 !== e.target_subreddit && null !== e.target_subreddit && (this.target_subreddit = new m.Subreddit(e.target_subreddit)), void 0 !== e.spamurai_action && null !== e.spamurai_action && (this.spamurai_action = new ye.SpamuraiAction(e.spamurai_action)), void 0 !== e.ad_brand_safety && null !== e.ad_brand_safety && (this.ad_brand_safety = new o.AdBrandSafety(e.ad_brand_safety)), void 0 !== e.bulk_action_job && null !== e.bulk_action_job && (this.bulk_action_job = new ve.BulkActionJob(e.bulk_action_job)), void 0 !== e.target_comment && null !== e.target_comment && (this.target_comment = new a.Comment(e.target_comment)), void 0 !== e.target_message && null !== e.target_message && (this.target_message = new a.Message(e.target_message)), void 0 !== e.reroute_rule && null !== e.reroute_rule && (this.reroute_rule = new S.RerouteRule(e.reroute_rule)), void 0 !== e.reddar_queue && null !== e.reddar_queue && (this.reddar_queue = new S.ReddarQueue(e.reddar_queue)), void 0 !== e.geo_block && null !== e.geo_block && (this.geo_block = new Te.GeoBlock(e.geo_block)), void 0 !== e.programmatic && null !== e.programmatic && (this.programmatic = new Z.Programmatic(e.programmatic)), void 0 !== e.csai_content_report && null !== e.csai_content_report && (this.csai_content_report = new S.CSAIContentReport(e.csai_content_report)), void 0 !== e.imposter && null !== e.imposter && (this.imposter = new Se.Imposter(e.imposter)), void 0 !== e.broadcast && null !== e.broadcast && (this.broadcast = new Ee.Broadcast(e.broadcast)), void 0 !== e.survey && null !== e.survey && (this.survey = new Fe.Survey(e.survey)), void 0 !== e.playback && null !== e.playback && (this.playback = new Ie.Playback(e.playback)), void 0 !== e.bot_detection && null !== e.bot_detection && (this.bot_detection = new Oe.BotDetection(e.bot_detection)), void 0 !== e.crowd_source && null !== e.crowd_source && (this.crowd_source = new je.CrowdSource(e.crowd_source)), void 0 !== e.announcement && null !== e.announcement && (this.announcement = new Be.Announcement(e.announcement)), void 0 !== e.purchase && null !== e.purchase && (this.purchase = new xe.Purchase(e.purchase)), void 0 !== e.powerups && null !== e.powerups && (this.powerups = new Re.Powerups(e.powerups)), void 0 !== e.geo && null !== e.geo && (this.geo = new b.Geo(e.geo)), void 0 !== e.user_legacy_id && null !== e.user_legacy_id && (this.user_legacy_id = e.user_legacy_id), void 0 !== e.content_metadata && null !== e.content_metadata && (this.content_metadata = new b.ContentMetadata(e.content_metadata)), void 0 !== e.url_parsed && null !== e.url_parsed && (this.url_parsed = new b.UrlParsed(e.url_parsed)), void 0 !== e.link_sharing && null !== e.link_sharing && (this.link_sharing = new b.LinkSharing(e.link_sharing)), void 0 !== e.create_request_timestamp && null !== e.create_request_timestamp && (this.create_request_timestamp = e.create_request_timestamp), void 0 !== e.inferred && null !== e.inferred && (this.inferred = new b.Inferred(e.inferred)), void 0 !== e.event_hmac_key && null !== e.event_hmac_key && (this.event_hmac_key = e.event_hmac_key), void 0 !== e.batch_load_id && null !== e.batch_load_id && (this.batch_load_id = e.batch_load_id)
					}
				};
			Ce.prototype = {}, Ce.prototype.write = function(e) {
				e.writeStructBegin("Event"), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", r.Type.STRING, 1), e.writeString(this.source), e.writeFieldEnd()), null !== this.action && void 0 !== this.action && (e.writeFieldBegin("action", r.Type.STRING, 2), e.writeString(this.action), e.writeFieldEnd()), null !== this.noun && void 0 !== this.noun && (e.writeFieldBegin("noun", r.Type.STRING, 3), e.writeString(this.noun), e.writeFieldEnd()), null !== this.endpoint_timestamp && void 0 !== this.endpoint_timestamp && (e.writeFieldBegin("endpoint_timestamp", r.Type.I64, 4), e.writeI64(this.endpoint_timestamp), e.writeFieldEnd()), null !== this.client_timestamp && void 0 !== this.client_timestamp && (e.writeFieldBegin("client_timestamp", r.Type.I64, 5), e.writeI64(this.client_timestamp), e.writeFieldEnd()), null !== this.uuid && void 0 !== this.uuid && (e.writeFieldBegin("uuid", r.Type.STRING, 6), e.writeString(this.uuid), e.writeFieldEnd()), null !== this.utc_offset && void 0 !== this.utc_offset && (e.writeFieldBegin("utc_offset", r.Type.DOUBLE, 7), e.writeDouble(this.utc_offset), e.writeFieldEnd()), null !== this.correlation_id && void 0 !== this.correlation_id && (e.writeFieldBegin("correlation_id", r.Type.STRING, 8), e.writeString(this.correlation_id), e.writeFieldEnd()), null !== this.screenview_id && void 0 !== this.screenview_id && (e.writeFieldBegin("screenview_id", r.Type.STRING, 9), e.writeString(this.screenview_id), e.writeFieldEnd()), null !== this.post && void 0 !== this.post && (e.writeFieldBegin("post", r.Type.STRUCT, 100), this.post.write(e), e.writeFieldEnd()), null !== this.listing && void 0 !== this.listing && (e.writeFieldBegin("listing", r.Type.STRUCT, 101), this.listing.write(e), e.writeFieldEnd()), null !== this.comment && void 0 !== this.comment && (e.writeFieldBegin("comment", r.Type.STRUCT, 102), this.comment.write(e), e.writeFieldEnd()), null !== this.notification && void 0 !== this.notification && (e.writeFieldBegin("notification", r.Type.STRUCT, 103), this.notification.write(e), e.writeFieldEnd()), null !== this.oauth && void 0 !== this.oauth && (e.writeFieldBegin("oauth", r.Type.STRUCT, 104), this.oauth.write(e), e.writeFieldEnd()), null !== this.screen && void 0 !== this.screen && (e.writeFieldBegin("screen", r.Type.STRUCT, 106), this.screen.write(e), e.writeFieldEnd()), null !== this.app && void 0 !== this.app && (e.writeFieldBegin("app", r.Type.STRUCT, 107), this.app.write(e), e.writeFieldEnd()), null !== this.platform && void 0 !== this.platform && (e.writeFieldBegin("platform", r.Type.STRUCT, 108), this.platform.write(e), e.writeFieldEnd()), null !== this.request && void 0 !== this.request && (e.writeFieldBegin("request", r.Type.STRUCT, 109), this.request.write(e), e.writeFieldEnd()), null !== this.referrer && void 0 !== this.referrer && (e.writeFieldBegin("referrer", r.Type.STRUCT, 110), this.referrer.write(e), e.writeFieldEnd()), null !== this.dom_timer && void 0 !== this.dom_timer && (e.writeFieldBegin("dom_timer", r.Type.STRUCT, 111), this.dom_timer.write(e), e.writeFieldEnd()), null !== this.user && void 0 !== this.user && (e.writeFieldBegin("user", r.Type.STRUCT, 112), this.user.write(e), e.writeFieldEnd()), null !== this.user_preferences && void 0 !== this.user_preferences && (e.writeFieldBegin("user_preferences", r.Type.STRUCT, 113), this.user_preferences.write(e), e.writeFieldEnd()), null !== this.subreddit && void 0 !== this.subreddit && (e.writeFieldBegin("subreddit", r.Type.STRUCT, 114), this.subreddit.write(e), e.writeFieldEnd()), null !== this.session && void 0 !== this.session && (e.writeFieldBegin("session", r.Type.STRUCT, 115), this.session.write(e), e.writeFieldEnd()), null !== this.action_info && void 0 !== this.action_info && (e.writeFieldBegin("action_info", r.Type.STRUCT, 116), this.action_info.write(e), e.writeFieldEnd()), null !== this.expand && void 0 !== this.expand && (e.writeFieldBegin("expand", r.Type.STRUCT, 117), this.expand.write(e), e.writeFieldEnd()), null !== this.media && void 0 !== this.media && (e.writeFieldBegin("media", r.Type.STRUCT, 118), this.media.write(e), e.writeFieldEnd()), null !== this.chat && void 0 !== this.chat && (e.writeFieldBegin("chat", r.Type.STRUCT, 119), this.chat.write(e), e.writeFieldEnd()), null !== this.post_composer && void 0 !== this.post_composer && (e.writeFieldBegin("post_composer", r.Type.STRUCT, 120), this.post_composer.write(e), e.writeFieldEnd()), null !== this.widget && void 0 !== this.widget && (e.writeFieldBegin("widget", r.Type.STRUCT, 121), this.widget.write(e), e.writeFieldEnd()), null !== this.profile && void 0 !== this.profile && (e.writeFieldBegin("profile", r.Type.STRUCT, 122), this.profile.write(e), e.writeFieldEnd()), null !== this.onboarding && void 0 !== this.onboarding && (e.writeFieldBegin("onboarding", r.Type.STRUCT, 123), this.onboarding.write(e), e.writeFieldEnd()), null !== this.timer && void 0 !== this.timer && (e.writeFieldBegin("timer", r.Type.STRUCT, 124), this.timer.write(e), e.writeFieldEnd()), null !== this.tfa && void 0 !== this.tfa && (e.writeFieldBegin("tfa", r.Type.STRUCT, 125), this.tfa.write(e), e.writeFieldEnd()), null !== this.api_response && void 0 !== this.api_response && (e.writeFieldBegin("api_response", r.Type.STRUCT, 126), this.api_response.write(e), e.writeFieldEnd()), null !== this.api && void 0 !== this.api && (e.writeFieldBegin("api", r.Type.STRUCT, 127), this.api.write(e), e.writeFieldEnd()), null !== this.discovery_unit && void 0 !== this.discovery_unit && (e.writeFieldBegin("discovery_unit", r.Type.STRUCT, 128), this.discovery_unit.write(e), e.writeFieldEnd()), null !== this.experiment && void 0 !== this.experiment && (e.writeFieldBegin("experiment", r.Type.STRUCT, 129), this.experiment.write(e), e.writeFieldEnd()), null !== this.share && void 0 !== this.share && (e.writeFieldBegin("share", r.Type.STRUCT, 130), this.share.write(e), e.writeFieldEnd()), null !== this.user_subreddit && void 0 !== this.user_subreddit && (e.writeFieldBegin("user_subreddit", r.Type.STRUCT, 131), this.user_subreddit.write(e), e.writeFieldEnd()), null !== this.notification_request && void 0 !== this.notification_request && (e.writeFieldBegin("notification_request", r.Type.STRUCT, 132), this.notification_request.write(e), e.writeFieldEnd()), null !== this.search && void 0 !== this.search && (e.writeFieldBegin("search", r.Type.STRUCT, 133), this.search.write(e), e.writeFieldEnd()), null !== this.message && void 0 !== this.message && (e.writeFieldBegin("message", r.Type.STRUCT, 134), this.message.write(e), e.writeFieldEnd()), null !== this.admin && void 0 !== this.admin && (e.writeFieldBegin("admin", r.Type.STRUCT, 135), this.admin.write(e), e.writeFieldEnd()), null !== this.ticket && void 0 !== this.ticket && (e.writeFieldBegin("ticket", r.Type.STRUCT, 136), this.ticket.write(e), e.writeFieldEnd()), null !== this.mailroom_request && void 0 !== this.mailroom_request && (e.writeFieldBegin("mailroom_request", r.Type.STRUCT, 137), this.mailroom_request.write(e), e.writeFieldEnd()), null !== this.comment_composer && void 0 !== this.comment_composer && (e.writeFieldBegin("comment_composer", r.Type.STRUCT, 138), this.comment_composer.write(e), e.writeFieldEnd()), null !== this.gold_purchase && void 0 !== this.gold_purchase && (e.writeFieldBegin("gold_purchase", r.Type.STRUCT, 139), this.gold_purchase.write(e), e.writeFieldEnd()), null !== this.payment && void 0 !== this.payment && (e.writeFieldBegin("payment", r.Type.STRUCT, 140), this.payment.write(e), e.writeFieldEnd()), null !== this.news && void 0 !== this.news && (e.writeFieldBegin("news", r.Type.STRUCT, 141), this.news.write(e), e.writeFieldEnd()), null !== this.outbound && void 0 !== this.outbound && (e.writeFieldBegin("outbound", r.Type.STRUCT, 142), this.outbound.write(e), e.writeFieldEnd()), null !== this.click_test && void 0 !== this.click_test && (e.writeFieldBegin("click_test", r.Type.STRUCT, 143), this.click_test.write(e), e.writeFieldEnd()), null !== this.carousel && void 0 !== this.carousel && (e.writeFieldBegin("carousel", r.Type.STRUCT, 144), this.carousel.write(e), e.writeFieldEnd()), null !== this.adblock && void 0 !== this.adblock && (e.writeFieldBegin("adblock", r.Type.STRUCT, 145), this.adblock.write(e), e.writeFieldEnd()), null !== this.email && void 0 !== this.email && (e.writeFieldBegin("email", r.Type.STRUCT, 146), this.email.write(e), e.writeFieldEnd()), null !== this.metaflair && void 0 !== this.metaflair && (e.writeFieldBegin("metaflair", r.Type.STRUCT, 147), this.metaflair.write(e), e.writeFieldEnd()), null !== this.post_draft && void 0 !== this.post_draft && (e.writeFieldBegin("post_draft", r.Type.STRUCT, 148), this.post_draft.write(e), e.writeFieldEnd()), null !== this.setting && void 0 !== this.setting && (e.writeFieldBegin("setting", r.Type.STRUCT, 149), this.setting.write(e), e.writeFieldEnd()), null !== this.visibility && void 0 !== this.visibility && (e.writeFieldBegin("visibility", r.Type.STRUCT, 150), this.visibility.write(e), e.writeFieldEnd()), null !== this.webhook && void 0 !== this.webhook && (e.writeFieldBegin("webhook", r.Type.STRUCT, 151), this.webhook.write(e), e.writeFieldEnd()), null !== this.relevance_model && void 0 !== this.relevance_model && (e.writeFieldBegin("relevance_model", r.Type.STRUCT, 152), this.relevance_model.write(e), e.writeFieldEnd()), null !== this.meta_search && void 0 !== this.meta_search && (e.writeFieldBegin("meta_search", r.Type.STRUCT, 153), this.meta_search.write(e), e.writeFieldEnd()), null !== this.post_flair && void 0 !== this.post_flair && (e.writeFieldBegin("post_flair", r.Type.STRUCT, 154), this.post_flair.write(e), e.writeFieldEnd()), null !== this.admin_action && void 0 !== this.admin_action && (e.writeFieldBegin("admin_action", r.Type.STRUCT, 155), this.admin_action.write(e), e.writeFieldEnd()), null !== this.zipkin && void 0 !== this.zipkin && (e.writeFieldBegin("zipkin", r.Type.STRUCT, 156), this.zipkin.write(e), e.writeFieldEnd()), null !== this.edit && void 0 !== this.edit && (e.writeFieldBegin("edit", r.Type.STRUCT, 157), this.edit.write(e), e.writeFieldEnd()), null !== this.post_event && void 0 !== this.post_event && (e.writeFieldBegin("post_event", r.Type.STRUCT, 158), this.post_event.write(e), e.writeFieldEnd()), null !== this.post_collection && void 0 !== this.post_collection && (e.writeFieldBegin("post_collection", r.Type.STRUCT, 159), this.post_collection.write(e), e.writeFieldEnd()), null !== this.third_party_badge && void 0 !== this.third_party_badge && (e.writeFieldBegin("third_party_badge", r.Type.STRUCT, 160), this.third_party_badge.write(e), e.writeFieldEnd()), null !== this.brand && void 0 !== this.brand && (e.writeFieldBegin("brand", r.Type.STRUCT, 161), this.brand.write(e), e.writeFieldEnd()), null !== this.messenger_request && void 0 !== this.messenger_request && (e.writeFieldBegin("messenger_request", r.Type.STRUCT, 162), this.messenger_request.write(e), e.writeFieldEnd()), null !== this.banner && void 0 !== this.banner && (e.writeFieldBegin("banner", r.Type.STRUCT, 163), this.banner.write(e), e.writeFieldEnd()), null !== this.tooltip && void 0 !== this.tooltip && (e.writeFieldBegin("tooltip", r.Type.STRUCT, 164), this.tooltip.write(e), e.writeFieldEnd()), null !== this.upload && void 0 !== this.upload && (e.writeFieldBegin("upload", r.Type.STRUCT, 165), this.upload.write(e), e.writeFieldEnd()), null !== this.csai_media && void 0 !== this.csai_media && (e.writeFieldBegin("csai_media", r.Type.STRUCT, 166), this.csai_media.write(e), e.writeFieldEnd()), null !== this.category_header && void 0 !== this.category_header && (e.writeFieldBegin("category_header", r.Type.STRUCT, 167), this.category_header.write(e), e.writeFieldEnd()), null !== this.report && void 0 !== this.report && (e.writeFieldBegin("report", r.Type.STRUCT, 168), this.report.write(e), e.writeFieldEnd()), null !== this.live_thread && void 0 !== this.live_thread && (e.writeFieldBegin("live_thread", r.Type.STRUCT, 169), this.live_thread.write(e), e.writeFieldEnd()), null !== this.ad_request && void 0 !== this.ad_request && (e.writeFieldBegin("ad_request", r.Type.STRUCT, 170), this.ad_request.write(e), e.writeFieldEnd()), null !== this.ad_decision && void 0 !== this.ad_decision && (e.writeFieldBegin("ad_decision", r.Type.STRUCT, 171), this.ad_decision.write(e), e.writeFieldEnd()), null !== this.ad_push && void 0 !== this.ad_push && (e.writeFieldBegin("ad_push", r.Type.STRUCT, 172), this.ad_push.write(e), e.writeFieldEnd()), null !== this.vote && void 0 !== this.vote && (e.writeFieldBegin("vote", r.Type.STRUCT, 173), this.vote.write(e), e.writeFieldEnd()), null !== this.popup && void 0 !== this.popup && (e.writeFieldBegin("popup", r.Type.STRUCT, 174), this.popup.write(e), e.writeFieldEnd()), null !== this.mod_action && void 0 !== this.mod_action && (e.writeFieldBegin("mod_action", r.Type.STRUCT, 175), this.mod_action.write(e), e.writeFieldEnd()), null !== this.user_flair && void 0 !== this.user_flair && (e.writeFieldBegin("user_flair", r.Type.STRUCT, 176), this.user_flair.write(e), e.writeFieldEnd()), null !== this.topic_tag && void 0 !== this.topic_tag && (e.writeFieldBegin("topic_tag", r.Type.STRUCT, 177), this.topic_tag.write(e), e.writeFieldEnd()), null !== this.res && void 0 !== this.res && (e.writeFieldBegin("res", r.Type.STRUCT, 178), this.res.write(e), e.writeFieldEnd()), null !== this.ad && void 0 !== this.ad && (e.writeFieldBegin("ad", r.Type.STRUCT, 179), this.ad.write(e), e.writeFieldEnd()), null !== this.ad_campaign && void 0 !== this.ad_campaign && (e.writeFieldBegin("ad_campaign", r.Type.STRUCT, 180), this.ad_campaign.write(e), e.writeFieldEnd()), null !== this.ad_group && void 0 !== this.ad_group && (e.writeFieldBegin("ad_group", r.Type.STRUCT, 181), this.ad_group.write(e), e.writeFieldEnd()), null !== this.ad_targeting && void 0 !== this.ad_targeting && (e.writeFieldBegin("ad_targeting", r.Type.STRUCT, 182), this.ad_targeting.write(e), e.writeFieldEnd()), null !== this.business_info && void 0 !== this.business_info && (e.writeFieldBegin("business_info", r.Type.STRUCT, 183), this.business_info.write(e), e.writeFieldEnd()), null !== this.billing_info && void 0 !== this.billing_info && (e.writeFieldBegin("billing_info", r.Type.STRUCT, 184), this.billing_info.write(e), e.writeFieldEnd()), null !== this.reddar_ticket && void 0 !== this.reddar_ticket && (e.writeFieldBegin("reddar_ticket", r.Type.STRUCT, 185), this.reddar_ticket.write(e), e.writeFieldEnd()), null !== this.zendesk_ticket && void 0 !== this.zendesk_ticket && (e.writeFieldBegin("zendesk_ticket", r.Type.STRUCT, 186), this.zendesk_ticket.write(e), e.writeFieldEnd()), null !== this.target_user && void 0 !== this.target_user && (e.writeFieldBegin("target_user", r.Type.STRUCT, 187), this.target_user.write(e), e.writeFieldEnd()), null !== this.crawler && void 0 !== this.crawler && (e.writeFieldBegin("crawler", r.Type.STRUCT, 188), this.crawler.write(e), e.writeFieldEnd()), null !== this.response && void 0 !== this.response && (e.writeFieldBegin("response", r.Type.STRUCT, 189), this.response.write(e), e.writeFieldEnd()), null !== this.custom_feed && void 0 !== this.custom_feed && (e.writeFieldBegin("custom_feed", r.Type.STRUCT, 190), this.custom_feed.write(e), e.writeFieldEnd()), null !== this.pwa && void 0 !== this.pwa && (e.writeFieldBegin("pwa", r.Type.STRUCT, 191), this.pwa.write(e), e.writeFieldEnd()), null !== this.seo && void 0 !== this.seo && (e.writeFieldBegin("seo", r.Type.STRUCT, 192), this.seo.write(e), e.writeFieldEnd()), null !== this.ncmec_report && void 0 !== this.ncmec_report && (e.writeFieldBegin("ncmec_report", r.Type.STRUCT, 193), this.ncmec_report.write(e), e.writeFieldEnd()), null !== this.funding_instrument && void 0 !== this.funding_instrument && (e.writeFieldBegin("funding_instrument", r.Type.STRUCT, 194), this.funding_instrument.write(e), e.writeFieldEnd()), null !== this.grapeshot_classification && void 0 !== this.grapeshot_classification && (e.writeFieldBegin("grapeshot_classification", r.Type.STRUCT, 195), this.grapeshot_classification.write(e), e.writeFieldEnd()), null !== this.perspective && void 0 !== this.perspective && (e.writeFieldBegin("perspective", r.Type.STRUCT, 196), this.perspective.write(e), e.writeFieldEnd()), null !== this.comment_draft && void 0 !== this.comment_draft && (e.writeFieldBegin("comment_draft", r.Type.STRUCT, 197), this.comment_draft.write(e), e.writeFieldEnd()), null !== this.target_post && void 0 !== this.target_post && (e.writeFieldBegin("target_post", r.Type.STRUCT, 198), this.target_post.write(e), e.writeFieldEnd()), null !== this.ml_model && void 0 !== this.ml_model && (e.writeFieldBegin("ml_model", r.Type.STRUCT, 199), this.ml_model.write(e), e.writeFieldEnd()), null !== this.topic_metadata && void 0 !== this.topic_metadata && (e.writeFieldBegin("topic_metadata", r.Type.STRUCT, 200), this.topic_metadata.write(e), e.writeFieldEnd()), null !== this.chat_home_feed_boosting && void 0 !== this.chat_home_feed_boosting && (e.writeFieldBegin("chat_home_feed_boosting", r.Type.STRUCT, 201), this.chat_home_feed_boosting.write(e), e.writeFieldEnd()), null !== this.domain_ban && void 0 !== this.domain_ban && (e.writeFieldBegin("domain_ban", r.Type.STRUCT, 202), this.domain_ban.write(e), e.writeFieldEnd()), null !== this.legal_export_request && void 0 !== this.legal_export_request && (e.writeFieldBegin("legal_export_request", r.Type.STRUCT, 203), this.legal_export_request.write(e), e.writeFieldEnd()), null !== this.post_requirement && void 0 !== this.post_requirement && (e.writeFieldBegin("post_requirement", r.Type.STRUCT, 204), this.post_requirement.write(e), e.writeFieldEnd()), null !== this.target_ip && void 0 !== this.target_ip && (e.writeFieldBegin("target_ip", r.Type.STRUCT, 205), this.target_ip.write(e), e.writeFieldEnd()), null !== this.crowd_control && void 0 !== this.crowd_control && (e.writeFieldBegin("crowd_control", r.Type.STRUCT, 206), this.crowd_control.write(e), e.writeFieldEnd()), null !== this.reddar_ticket_content && void 0 !== this.reddar_ticket_content && (e.writeFieldBegin("reddar_ticket_content", r.Type.STRUCT, 207), this.reddar_ticket_content.write(e), e.writeFieldEnd()), null !== this.scheduled_post && void 0 !== this.scheduled_post && (e.writeFieldBegin("scheduled_post", r.Type.STRUCT, 208), this.scheduled_post.write(e), e.writeFieldEnd()), null !== this.poll && void 0 !== this.poll && (e.writeFieldBegin("poll", r.Type.STRUCT, 209), this.poll.write(e), e.writeFieldEnd()), null !== this.reddar_audit && void 0 !== this.reddar_audit && (e.writeFieldBegin("reddar_audit", r.Type.STRUCT, 210), this.reddar_audit.write(e), e.writeFieldEnd()), null !== this.reddar_audit_ticket && void 0 !== this.reddar_audit_ticket && (e.writeFieldBegin("reddar_audit_ticket", r.Type.STRUCT, 211), this.reddar_audit_ticket.write(e), e.writeFieldEnd()), null !== this.target_subreddit && void 0 !== this.target_subreddit && (e.writeFieldBegin("target_subreddit", r.Type.STRUCT, 212), this.target_subreddit.write(e), e.writeFieldEnd()), null !== this.spamurai_action && void 0 !== this.spamurai_action && (e.writeFieldBegin("spamurai_action", r.Type.STRUCT, 213), this.spamurai_action.write(e), e.writeFieldEnd()), null !== this.ad_brand_safety && void 0 !== this.ad_brand_safety && (e.writeFieldBegin("ad_brand_safety", r.Type.STRUCT, 214), this.ad_brand_safety.write(e), e.writeFieldEnd()), null !== this.bulk_action_job && void 0 !== this.bulk_action_job && (e.writeFieldBegin("bulk_action_job", r.Type.STRUCT, 215), this.bulk_action_job.write(e), e.writeFieldEnd()), null !== this.target_comment && void 0 !== this.target_comment && (e.writeFieldBegin("target_comment", r.Type.STRUCT, 216), this.target_comment.write(e), e.writeFieldEnd()), null !== this.target_message && void 0 !== this.target_message && (e.writeFieldBegin("target_message", r.Type.STRUCT, 217), this.target_message.write(e), e.writeFieldEnd()), null !== this.reroute_rule && void 0 !== this.reroute_rule && (e.writeFieldBegin("reroute_rule", r.Type.STRUCT, 218), this.reroute_rule.write(e), e.writeFieldEnd()), null !== this.reddar_queue && void 0 !== this.reddar_queue && (e.writeFieldBegin("reddar_queue", r.Type.STRUCT, 219), this.reddar_queue.write(e), e.writeFieldEnd()), null !== this.geo_block && void 0 !== this.geo_block && (e.writeFieldBegin("geo_block", r.Type.STRUCT, 220), this.geo_block.write(e), e.writeFieldEnd()), null !== this.programmatic && void 0 !== this.programmatic && (e.writeFieldBegin("programmatic", r.Type.STRUCT, 221), this.programmatic.write(e), e.writeFieldEnd()), null !== this.csai_content_report && void 0 !== this.csai_content_report && (e.writeFieldBegin("csai_content_report", r.Type.STRUCT, 222), this.csai_content_report.write(e), e.writeFieldEnd()), null !== this.imposter && void 0 !== this.imposter && (e.writeFieldBegin("imposter", r.Type.STRUCT, 223), this.imposter.write(e), e.writeFieldEnd()), null !== this.broadcast && void 0 !== this.broadcast && (e.writeFieldBegin("broadcast", r.Type.STRUCT, 224), this.broadcast.write(e), e.writeFieldEnd()), null !== this.survey && void 0 !== this.survey && (e.writeFieldBegin("survey", r.Type.STRUCT, 225), this.survey.write(e), e.writeFieldEnd()), null !== this.playback && void 0 !== this.playback && (e.writeFieldBegin("playback", r.Type.STRUCT, 226), this.playback.write(e), e.writeFieldEnd()), null !== this.bot_detection && void 0 !== this.bot_detection && (e.writeFieldBegin("bot_detection", r.Type.STRUCT, 227), this.bot_detection.write(e), e.writeFieldEnd()), null !== this.crowd_source && void 0 !== this.crowd_source && (e.writeFieldBegin("crowd_source", r.Type.STRUCT, 228), this.crowd_source.write(e), e.writeFieldEnd()), null !== this.announcement && void 0 !== this.announcement && (e.writeFieldBegin("announcement", r.Type.STRUCT, 229), this.announcement.write(e), e.writeFieldEnd()), null !== this.purchase && void 0 !== this.purchase && (e.writeFieldBegin("purchase", r.Type.STRUCT, 230), this.purchase.write(e), e.writeFieldEnd()), null !== this.powerups && void 0 !== this.powerups && (e.writeFieldBegin("powerups", r.Type.STRUCT, 231), this.powerups.write(e), e.writeFieldEnd()), null !== this.geo && void 0 !== this.geo && (e.writeFieldBegin("geo", r.Type.STRUCT, 500), this.geo.write(e), e.writeFieldEnd()), null !== this.user_legacy_id && void 0 !== this.user_legacy_id && (e.writeFieldBegin("user_legacy_id", r.Type.STRING, 502), e.writeString(this.user_legacy_id), e.writeFieldEnd()), null !== this.content_metadata && void 0 !== this.content_metadata && (e.writeFieldBegin("content_metadata", r.Type.STRUCT, 503), this.content_metadata.write(e), e.writeFieldEnd()), null !== this.url_parsed && void 0 !== this.url_parsed && (e.writeFieldBegin("url_parsed", r.Type.STRUCT, 504), this.url_parsed.write(e), e.writeFieldEnd()), null !== this.link_sharing && void 0 !== this.link_sharing && (e.writeFieldBegin("link_sharing", r.Type.STRUCT, 505), this.link_sharing.write(e), e.writeFieldEnd()), null !== this.create_request_timestamp && void 0 !== this.create_request_timestamp && (e.writeFieldBegin("create_request_timestamp", r.Type.I64, 506), e.writeI64(this.create_request_timestamp), e.writeFieldEnd()), null !== this.inferred && void 0 !== this.inferred && (e.writeFieldBegin("inferred", r.Type.STRUCT, 507), this.inferred.write(e), e.writeFieldEnd()), null !== this.event_hmac_key && void 0 !== this.event_hmac_key && (e.writeFieldBegin("event_hmac_key", r.Type.STRING, 508), e.writeString(this.event_hmac_key), e.writeFieldEnd()), null !== this.batch_load_id && void 0 !== this.batch_load_id && (e.writeFieldBegin("batch_load_id", r.Type.STRING, 509), e.writeString(this.batch_load_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var Ne = e.exports.EventBatch = function(e) {
				if (this.events = null, e) {
					if (void 0 === e.events || null === e.events) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field events is unset!");
					this.events = r.copyList(e.events, [ke.Event])
				}
			};
			Ne.prototype = {}, Ne.prototype.write = function(e) {
				if (e.writeStructBegin("EventBatch"), null !== this.events && void 0 !== this.events) {
					for (var t in e.writeFieldBegin("events", r.Type.LIST, 1), e.writeListBegin(r.Type.STRUCT, this.events.length), this.events) this.events.hasOwnProperty(t) && (t = this.events[t]).write(e);
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/experiment_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Experiment = function(e) {
					if (this.id = null, this.name = null, this.owner = null, this.variant = null, this.start_timestamp = null, this.end_timestamp = null, this.bucketing_key = null, this.version = null, this.bucketing_value = null, this.is_override = null, this.variant_names = null, this.variant_percentages = null, this.active = null, this.github_link = null, this.info = null, this.qa_proxy_event = null, this.bucketing_type = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.owner && null !== e.owner && (this.owner = e.owner), void 0 !== e.variant && null !== e.variant && (this.variant = e.variant), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.bucketing_key && null !== e.bucketing_key && (this.bucketing_key = e.bucketing_key), void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.bucketing_value && null !== e.bucketing_value && (this.bucketing_value = e.bucketing_value), void 0 !== e.is_override && null !== e.is_override && (this.is_override = e.is_override), void 0 !== e.variant_names && null !== e.variant_names && (this.variant_names = r.copyList(e.variant_names, [null])), void 0 !== e.variant_percentages && null !== e.variant_percentages && (this.variant_percentages = r.copyList(e.variant_percentages, [null])), void 0 !== e.active && null !== e.active && (this.active = e.active), void 0 !== e.github_link && null !== e.github_link && (this.github_link = e.github_link), void 0 !== e.info && null !== e.info && (this.info = e.info), void 0 !== e.qa_proxy_event && null !== e.qa_proxy_event && (this.qa_proxy_event = e.qa_proxy_event), void 0 !== e.bucketing_type && null !== e.bucketing_type && (this.bucketing_type = e.bucketing_type)
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Experiment"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.owner && void 0 !== this.owner && (e.writeFieldBegin("owner", r.Type.STRING, 3), e.writeString(this.owner), e.writeFieldEnd()), null !== this.variant && void 0 !== this.variant && (e.writeFieldBegin("variant", r.Type.STRING, 4), e.writeString(this.variant), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", r.Type.I64, 5), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", r.Type.I64, 6), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.bucketing_key && void 0 !== this.bucketing_key && (e.writeFieldBegin("bucketing_key", r.Type.STRING, 7), e.writeString(this.bucketing_key), e.writeFieldEnd()), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", r.Type.STRING, 8), e.writeString(this.version), e.writeFieldEnd()), null !== this.bucketing_value && void 0 !== this.bucketing_value && (e.writeFieldBegin("bucketing_value", r.Type.STRING, 9), e.writeString(this.bucketing_value), e.writeFieldEnd()), null !== this.is_override && void 0 !== this.is_override && (e.writeFieldBegin("is_override", r.Type.BOOL, 10), e.writeBool(this.is_override), e.writeFieldEnd()), null !== this.variant_names && void 0 !== this.variant_names) {
					for (var t in e.writeFieldBegin("variant_names", r.Type.LIST, 11), e.writeListBegin(r.Type.STRING, this.variant_names.length), this.variant_names) this.variant_names.hasOwnProperty(t) && (t = this.variant_names[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.variant_percentages && void 0 !== this.variant_percentages) {
					for (var i in e.writeFieldBegin("variant_percentages", r.Type.LIST, 12), e.writeListBegin(r.Type.DOUBLE, this.variant_percentages.length), this.variant_percentages) this.variant_percentages.hasOwnProperty(i) && (i = this.variant_percentages[i], e.writeDouble(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.active && void 0 !== this.active && (e.writeFieldBegin("active", r.Type.BOOL, 13), e.writeBool(this.active), e.writeFieldEnd()), null !== this.github_link && void 0 !== this.github_link && (e.writeFieldBegin("github_link", r.Type.STRING, 15), e.writeString(this.github_link), e.writeFieldEnd()), null !== this.info && void 0 !== this.info && (e.writeFieldBegin("info", r.Type.STRING, 16), e.writeString(this.info), e.writeFieldEnd()), null !== this.qa_proxy_event && void 0 !== this.qa_proxy_event && (e.writeFieldBegin("qa_proxy_event", r.Type.STRING, 17), e.writeString(this.qa_proxy_event), e.writeFieldEnd()), null !== this.bucketing_type && void 0 !== this.bucketing_type && (e.writeFieldBegin("bucketing_type", r.Type.STRING, 18), e.writeString(this.bucketing_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.ClickTest = function(e) {
				if (this.id = null, this.name = null, this.owner = null, this.variant = null, this.prompt = null, this.response = null, this.page_type = null, e) {
					if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					this.id = e.id, void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.owner && null !== e.owner && (this.owner = e.owner), void 0 !== e.variant && null !== e.variant && (this.variant = e.variant), void 0 !== e.prompt && null !== e.prompt && (this.prompt = e.prompt), void 0 !== e.response && null !== e.response && (this.response = e.response), void 0 !== e.page_type && null !== e.page_type && (this.page_type = e.page_type)
				}
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("ClickTest"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.owner && void 0 !== this.owner && (e.writeFieldBegin("owner", r.Type.STRING, 3), e.writeString(this.owner), e.writeFieldEnd()), null !== this.variant && void 0 !== this.variant && (e.writeFieldBegin("variant", r.Type.STRING, 4), e.writeString(this.variant), e.writeFieldEnd()), null !== this.prompt && void 0 !== this.prompt && (e.writeFieldBegin("prompt", r.Type.STRING, 5), e.writeString(this.prompt), e.writeFieldEnd()), null !== this.response && void 0 !== this.response && (e.writeFieldBegin("response", r.Type.STRING, 6), e.writeString(this.response), e.writeFieldEnd()), null !== this.page_type && void 0 !== this.page_type && (e.writeFieldBegin("page_type", r.Type.STRING, 7), e.writeString(this.page_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/funding_instrument_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/adtypedefs_types.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.FundingInstrument = function(e) {
					this.id = null, this.created_timestamp = null, this.last_modified_timestamp = null, this.user_id = null, this.type = null, this.start_timestamp = null, this.end_timestamp = null, this.name = null, this.line_item_id = null, this.authorize_payment_profile_id = null, this.authorize_profile_id = null, this.servable = null, this.admin_id = null, this.credit_line_micros = null, this.balance_micros = null, this.billing_threshold_micros = null, this.total_spending_micros = null, this.total_payment_micros = null, this.spent_freebies_micros = null, this.available_freebies_micros = null, this.overdelivery_micros = null, this.total_refund_micros = null, this.overwrite = null, this.payment_id = null, this.original_payment_id = null, this.legacy_transaction_id = null, this.active = null, this.is_effective = null, this.level = null, this.netsuite_customer_internal_id = null, this.max_billing_threshold_micros = null, this.estimated_spending_micros = null, this.writeoff_micros = null, this.adzerk_lifetime_micros = null, this.rollup_timestamp = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.last_modified_timestamp && null !== e.last_modified_timestamp && (this.last_modified_timestamp = e.last_modified_timestamp), void 0 !== e.user_id && null !== e.user_id && (this.user_id = e.user_id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.line_item_id && null !== e.line_item_id && (this.line_item_id = e.line_item_id), void 0 !== e.authorize_payment_profile_id && null !== e.authorize_payment_profile_id && (this.authorize_payment_profile_id = e.authorize_payment_profile_id), void 0 !== e.authorize_profile_id && null !== e.authorize_profile_id && (this.authorize_profile_id = e.authorize_profile_id), void 0 !== e.servable && null !== e.servable && (this.servable = e.servable), void 0 !== e.admin_id && null !== e.admin_id && (this.admin_id = e.admin_id), void 0 !== e.credit_line_micros && null !== e.credit_line_micros && (this.credit_line_micros = e.credit_line_micros), void 0 !== e.balance_micros && null !== e.balance_micros && (this.balance_micros = e.balance_micros), void 0 !== e.billing_threshold_micros && null !== e.billing_threshold_micros && (this.billing_threshold_micros = e.billing_threshold_micros), void 0 !== e.total_spending_micros && null !== e.total_spending_micros && (this.total_spending_micros = e.total_spending_micros), void 0 !== e.total_payment_micros && null !== e.total_payment_micros && (this.total_payment_micros = e.total_payment_micros), void 0 !== e.spent_freebies_micros && null !== e.spent_freebies_micros && (this.spent_freebies_micros = e.spent_freebies_micros), void 0 !== e.available_freebies_micros && null !== e.available_freebies_micros && (this.available_freebies_micros = e.available_freebies_micros), void 0 !== e.overdelivery_micros && null !== e.overdelivery_micros && (this.overdelivery_micros = e.overdelivery_micros), void 0 !== e.total_refund_micros && null !== e.total_refund_micros && (this.total_refund_micros = e.total_refund_micros), void 0 !== e.overwrite && null !== e.overwrite && (this.overwrite = e.overwrite), void 0 !== e.payment_id && null !== e.payment_id && (this.payment_id = e.payment_id), void 0 !== e.original_payment_id && null !== e.original_payment_id && (this.original_payment_id = e.original_payment_id), void 0 !== e.legacy_transaction_id && null !== e.legacy_transaction_id && (this.legacy_transaction_id = e.legacy_transaction_id), void 0 !== e.active && null !== e.active && (this.active = e.active), void 0 !== e.is_effective && null !== e.is_effective && (this.is_effective = e.is_effective), void 0 !== e.level && null !== e.level && (this.level = e.level), void 0 !== e.netsuite_customer_internal_id && null !== e.netsuite_customer_internal_id && (this.netsuite_customer_internal_id = e.netsuite_customer_internal_id), void 0 !== e.max_billing_threshold_micros && null !== e.max_billing_threshold_micros && (this.max_billing_threshold_micros = e.max_billing_threshold_micros), void 0 !== e.estimated_spending_micros && null !== e.estimated_spending_micros && (this.estimated_spending_micros = e.estimated_spending_micros), void 0 !== e.writeoff_micros && null !== e.writeoff_micros && (this.writeoff_micros = e.writeoff_micros), void 0 !== e.adzerk_lifetime_micros && null !== e.adzerk_lifetime_micros && (this.adzerk_lifetime_micros = e.adzerk_lifetime_micros), void 0 !== e.rollup_timestamp && null !== e.rollup_timestamp && (this.rollup_timestamp = e.rollup_timestamp))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("FundingInstrument"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 2), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.last_modified_timestamp && void 0 !== this.last_modified_timestamp && (e.writeFieldBegin("last_modified_timestamp", r.Type.I64, 3), e.writeI64(this.last_modified_timestamp), e.writeFieldEnd()), null !== this.user_id && void 0 !== this.user_id && (e.writeFieldBegin("user_id", r.Type.STRING, 4), e.writeString(this.user_id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 5), e.writeString(this.type), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", r.Type.I64, 6), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", r.Type.I64, 7), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 8), e.writeString(this.name), e.writeFieldEnd()), null !== this.line_item_id && void 0 !== this.line_item_id && (e.writeFieldBegin("line_item_id", r.Type.STRING, 9), e.writeString(this.line_item_id), e.writeFieldEnd()), null !== this.authorize_payment_profile_id && void 0 !== this.authorize_payment_profile_id && (e.writeFieldBegin("authorize_payment_profile_id", r.Type.STRING, 10), e.writeString(this.authorize_payment_profile_id), e.writeFieldEnd()), null !== this.authorize_profile_id && void 0 !== this.authorize_profile_id && (e.writeFieldBegin("authorize_profile_id", r.Type.STRING, 11), e.writeString(this.authorize_profile_id), e.writeFieldEnd()), null !== this.servable && void 0 !== this.servable && (e.writeFieldBegin("servable", r.Type.BOOL, 12), e.writeBool(this.servable), e.writeFieldEnd()), null !== this.admin_id && void 0 !== this.admin_id && (e.writeFieldBegin("admin_id", r.Type.STRING, 13), e.writeString(this.admin_id), e.writeFieldEnd()), null !== this.credit_line_micros && void 0 !== this.credit_line_micros && (e.writeFieldBegin("credit_line_micros", r.Type.I64, 14), e.writeI64(this.credit_line_micros), e.writeFieldEnd()), null !== this.balance_micros && void 0 !== this.balance_micros && (e.writeFieldBegin("balance_micros", r.Type.I64, 15), e.writeI64(this.balance_micros), e.writeFieldEnd()), null !== this.billing_threshold_micros && void 0 !== this.billing_threshold_micros && (e.writeFieldBegin("billing_threshold_micros", r.Type.I64, 16), e.writeI64(this.billing_threshold_micros), e.writeFieldEnd()), null !== this.total_spending_micros && void 0 !== this.total_spending_micros && (e.writeFieldBegin("total_spending_micros", r.Type.I64, 17), e.writeI64(this.total_spending_micros), e.writeFieldEnd()), null !== this.total_payment_micros && void 0 !== this.total_payment_micros && (e.writeFieldBegin("total_payment_micros", r.Type.I64, 18), e.writeI64(this.total_payment_micros), e.writeFieldEnd()), null !== this.spent_freebies_micros && void 0 !== this.spent_freebies_micros && (e.writeFieldBegin("spent_freebies_micros", r.Type.I64, 19), e.writeI64(this.spent_freebies_micros), e.writeFieldEnd()), null !== this.available_freebies_micros && void 0 !== this.available_freebies_micros && (e.writeFieldBegin("available_freebies_micros", r.Type.I64, 20), e.writeI64(this.available_freebies_micros), e.writeFieldEnd()), null !== this.overdelivery_micros && void 0 !== this.overdelivery_micros && (e.writeFieldBegin("overdelivery_micros", r.Type.I64, 21), e.writeI64(this.overdelivery_micros), e.writeFieldEnd()), null !== this.total_refund_micros && void 0 !== this.total_refund_micros && (e.writeFieldBegin("total_refund_micros", r.Type.I64, 22), e.writeI64(this.total_refund_micros), e.writeFieldEnd()), null !== this.overwrite && void 0 !== this.overwrite && (e.writeFieldBegin("overwrite", r.Type.BOOL, 23), e.writeBool(this.overwrite), e.writeFieldEnd()), null !== this.payment_id && void 0 !== this.payment_id && (e.writeFieldBegin("payment_id", r.Type.STRING, 24), e.writeString(this.payment_id), e.writeFieldEnd()), null !== this.original_payment_id && void 0 !== this.original_payment_id && (e.writeFieldBegin("original_payment_id", r.Type.STRING, 25), e.writeString(this.original_payment_id), e.writeFieldEnd()), null !== this.legacy_transaction_id && void 0 !== this.legacy_transaction_id && (e.writeFieldBegin("legacy_transaction_id", r.Type.STRING, 26), e.writeString(this.legacy_transaction_id), e.writeFieldEnd()), null !== this.active && void 0 !== this.active && (e.writeFieldBegin("active", r.Type.BOOL, 27), e.writeBool(this.active), e.writeFieldEnd()), null !== this.is_effective && void 0 !== this.is_effective && (e.writeFieldBegin("is_effective", r.Type.BOOL, 28), e.writeBool(this.is_effective), e.writeFieldEnd()), null !== this.level && void 0 !== this.level && (e.writeFieldBegin("level", r.Type.STRING, 29), e.writeString(this.level), e.writeFieldEnd()), null !== this.netsuite_customer_internal_id && void 0 !== this.netsuite_customer_internal_id && (e.writeFieldBegin("netsuite_customer_internal_id", r.Type.STRING, 30), e.writeString(this.netsuite_customer_internal_id), e.writeFieldEnd()), null !== this.max_billing_threshold_micros && void 0 !== this.max_billing_threshold_micros && (e.writeFieldBegin("max_billing_threshold_micros", r.Type.I64, 31), e.writeI64(this.max_billing_threshold_micros), e.writeFieldEnd()), null !== this.estimated_spending_micros && void 0 !== this.estimated_spending_micros && (e.writeFieldBegin("estimated_spending_micros", r.Type.I64, 32), e.writeI64(this.estimated_spending_micros), e.writeFieldEnd()), null !== this.writeoff_micros && void 0 !== this.writeoff_micros && (e.writeFieldBegin("writeoff_micros", r.Type.I64, 33), e.writeI64(this.writeoff_micros), e.writeFieldEnd()), null !== this.adzerk_lifetime_micros && void 0 !== this.adzerk_lifetime_micros && (e.writeFieldBegin("adzerk_lifetime_micros", r.Type.I64, 34), e.writeI64(this.adzerk_lifetime_micros), e.writeFieldEnd()), null !== this.rollup_timestamp && void 0 !== this.rollup_timestamp && (e.writeFieldBegin("rollup_timestamp", r.Type.I64, 35), e.writeI64(this.rollup_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/geo_block_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.GeoBlock = function(e) {
					this.countries = null, this.reason = null, this.public_note = null, e && (void 0 !== e.countries && null !== e.countries && (this.countries = r.copyList(e.countries, [null])), void 0 !== e.reason && null !== e.reason && (this.reason = e.reason), void 0 !== e.public_note && null !== e.public_note && (this.public_note = e.public_note))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("GeoBlock"), null !== this.countries && void 0 !== this.countries) {
					for (var t in e.writeFieldBegin("countries", r.Type.LIST, 1), e.writeListBegin(r.Type.STRING, this.countries.length), this.countries) this.countries.hasOwnProperty(t) && (t = this.countries[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.reason && void 0 !== this.reason && (e.writeFieldBegin("reason", r.Type.STRING, 2), e.writeString(this.reason), e.writeFieldEnd()), null !== this.public_note && void 0 !== this.public_note && (e.writeFieldBegin("public_note", r.Type.STRING, 3), e.writeString(this.public_note), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/gold_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.GoldPurchase = function(e) {
					this.type = null, this.number_months = null, this.one_time_type = null, this.gift_user_id = null, this.gift_anonymous = null, this.gift_message = null, this.gift_message_length = null, this.number_creddits = null, this.subscription_type = null, this.gilded_content = null, this.source = null, this.number_coins = null, this.number_coins_monthly = null, this.number_coins_bonus = null, this.transaction_id = null, this.content_type = null, this.default_option = null, this.default_anonymous = null, this.purchased_coins = null, this.proxy_for_user_id = null, this.award_id = null, this.award_name = null, this.is_mod_award = null, this.available_award_ids = null, this.number_coins_to_recipient = null, this.number_coins_to_community = null, this.start_timestamp = null, this.end_timestamp = null, this.gift_public = null, this.number_free_coins = null, this.number_paid_coins = null, this.paid_coins_revenue_pennies = null, this.coin_package_id = null, this.is_temporary_award = null, this.is_sale_enabled = null, this.coin_bonus_percentage = null, this.coin_sale_percentage = null, this.offer_context = null, this.offer_type = null, this.award_col_position = null, this.award_row_position = null, this.awarder_karma_earned = null, this.awardee_karma_earned = null, this.user_post_award_karma = null, this.user_comment_award_karma = null, this.target_user_post_karma = null, this.target_user_comment_karma = null, this.user_subreddit_post_karma = null, this.user_subreddit_comment_karma = null, this.award_affects_awardee_karma = null, this.award_affects_awarder_karma = null, this.filter_name = null, this.filter_id = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.number_months && null !== e.number_months && (this.number_months = e.number_months), void 0 !== e.one_time_type && null !== e.one_time_type && (this.one_time_type = e.one_time_type), void 0 !== e.gift_user_id && null !== e.gift_user_id && (this.gift_user_id = e.gift_user_id), void 0 !== e.gift_anonymous && null !== e.gift_anonymous && (this.gift_anonymous = e.gift_anonymous), void 0 !== e.gift_message && null !== e.gift_message && (this.gift_message = e.gift_message), void 0 !== e.gift_message_length && null !== e.gift_message_length && (this.gift_message_length = e.gift_message_length), void 0 !== e.number_creddits && null !== e.number_creddits && (this.number_creddits = e.number_creddits), void 0 !== e.subscription_type && null !== e.subscription_type && (this.subscription_type = e.subscription_type), void 0 !== e.gilded_content && null !== e.gilded_content && (this.gilded_content = e.gilded_content), void 0 !== e.source && null !== e.source && (this.source = e.source), void 0 !== e.number_coins && null !== e.number_coins && (this.number_coins = e.number_coins), void 0 !== e.number_coins_monthly && null !== e.number_coins_monthly && (this.number_coins_monthly = e.number_coins_monthly), void 0 !== e.number_coins_bonus && null !== e.number_coins_bonus && (this.number_coins_bonus = e.number_coins_bonus), void 0 !== e.transaction_id && null !== e.transaction_id && (this.transaction_id = e.transaction_id), void 0 !== e.content_type && null !== e.content_type && (this.content_type = e.content_type), void 0 !== e.default_option && null !== e.default_option && (this.default_option = e.default_option), void 0 !== e.default_anonymous && null !== e.default_anonymous && (this.default_anonymous = e.default_anonymous), void 0 !== e.purchased_coins && null !== e.purchased_coins && (this.purchased_coins = e.purchased_coins), void 0 !== e.proxy_for_user_id && null !== e.proxy_for_user_id && (this.proxy_for_user_id = e.proxy_for_user_id), void 0 !== e.award_id && null !== e.award_id && (this.award_id = e.award_id), void 0 !== e.award_name && null !== e.award_name && (this.award_name = e.award_name), void 0 !== e.is_mod_award && null !== e.is_mod_award && (this.is_mod_award = e.is_mod_award), void 0 !== e.available_award_ids && null !== e.available_award_ids && (this.available_award_ids = r.copyList(e.available_award_ids, [null])), void 0 !== e.number_coins_to_recipient && null !== e.number_coins_to_recipient && (this.number_coins_to_recipient = e.number_coins_to_recipient), void 0 !== e.number_coins_to_community && null !== e.number_coins_to_community && (this.number_coins_to_community = e.number_coins_to_community), void 0 !== e.start_timestamp && null !== e.start_timestamp && (this.start_timestamp = e.start_timestamp), void 0 !== e.end_timestamp && null !== e.end_timestamp && (this.end_timestamp = e.end_timestamp), void 0 !== e.gift_public && null !== e.gift_public && (this.gift_public = e.gift_public), void 0 !== e.number_free_coins && null !== e.number_free_coins && (this.number_free_coins = e.number_free_coins), void 0 !== e.number_paid_coins && null !== e.number_paid_coins && (this.number_paid_coins = e.number_paid_coins), void 0 !== e.paid_coins_revenue_pennies && null !== e.paid_coins_revenue_pennies && (this.paid_coins_revenue_pennies = e.paid_coins_revenue_pennies), void 0 !== e.coin_package_id && null !== e.coin_package_id && (this.coin_package_id = e.coin_package_id), void 0 !== e.is_temporary_award && null !== e.is_temporary_award && (this.is_temporary_award = e.is_temporary_award), void 0 !== e.is_sale_enabled && null !== e.is_sale_enabled && (this.is_sale_enabled = e.is_sale_enabled), void 0 !== e.coin_bonus_percentage && null !== e.coin_bonus_percentage && (this.coin_bonus_percentage = e.coin_bonus_percentage), void 0 !== e.coin_sale_percentage && null !== e.coin_sale_percentage && (this.coin_sale_percentage = e.coin_sale_percentage), void 0 !== e.offer_context && null !== e.offer_context && (this.offer_context = e.offer_context), void 0 !== e.offer_type && null !== e.offer_type && (this.offer_type = e.offer_type), void 0 !== e.award_col_position && null !== e.award_col_position && (this.award_col_position = e.award_col_position), void 0 !== e.award_row_position && null !== e.award_row_position && (this.award_row_position = e.award_row_position), void 0 !== e.awarder_karma_earned && null !== e.awarder_karma_earned && (this.awarder_karma_earned = e.awarder_karma_earned), void 0 !== e.awardee_karma_earned && null !== e.awardee_karma_earned && (this.awardee_karma_earned = e.awardee_karma_earned), void 0 !== e.user_post_award_karma && null !== e.user_post_award_karma && (this.user_post_award_karma = e.user_post_award_karma), void 0 !== e.user_comment_award_karma && null !== e.user_comment_award_karma && (this.user_comment_award_karma = e.user_comment_award_karma), void 0 !== e.target_user_post_karma && null !== e.target_user_post_karma && (this.target_user_post_karma = e.target_user_post_karma), void 0 !== e.target_user_comment_karma && null !== e.target_user_comment_karma && (this.target_user_comment_karma = e.target_user_comment_karma), void 0 !== e.user_subreddit_post_karma && null !== e.user_subreddit_post_karma && (this.user_subreddit_post_karma = e.user_subreddit_post_karma), void 0 !== e.user_subreddit_comment_karma && null !== e.user_subreddit_comment_karma && (this.user_subreddit_comment_karma = e.user_subreddit_comment_karma), void 0 !== e.award_affects_awardee_karma && null !== e.award_affects_awardee_karma && (this.award_affects_awardee_karma = e.award_affects_awardee_karma), void 0 !== e.award_affects_awarder_karma && null !== e.award_affects_awarder_karma && (this.award_affects_awarder_karma = e.award_affects_awarder_karma), void 0 !== e.filter_name && null !== e.filter_name && (this.filter_name = e.filter_name), void 0 !== e.filter_id && null !== e.filter_id && (this.filter_id = e.filter_id))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("GoldPurchase"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.number_months && void 0 !== this.number_months && (e.writeFieldBegin("number_months", r.Type.I32, 2), e.writeI32(this.number_months), e.writeFieldEnd()), null !== this.one_time_type && void 0 !== this.one_time_type && (e.writeFieldBegin("one_time_type", r.Type.STRING, 3), e.writeString(this.one_time_type), e.writeFieldEnd()), null !== this.gift_user_id && void 0 !== this.gift_user_id && (e.writeFieldBegin("gift_user_id", r.Type.STRING, 4), e.writeString(this.gift_user_id), e.writeFieldEnd()), null !== this.gift_anonymous && void 0 !== this.gift_anonymous && (e.writeFieldBegin("gift_anonymous", r.Type.BOOL, 5), e.writeBool(this.gift_anonymous), e.writeFieldEnd()), null !== this.gift_message && void 0 !== this.gift_message && (e.writeFieldBegin("gift_message", r.Type.BOOL, 6), e.writeBool(this.gift_message), e.writeFieldEnd()), null !== this.gift_message_length && void 0 !== this.gift_message_length && (e.writeFieldBegin("gift_message_length", r.Type.I32, 7), e.writeI32(this.gift_message_length), e.writeFieldEnd()), null !== this.number_creddits && void 0 !== this.number_creddits && (e.writeFieldBegin("number_creddits", r.Type.I32, 8), e.writeI32(this.number_creddits), e.writeFieldEnd()), null !== this.subscription_type && void 0 !== this.subscription_type && (e.writeFieldBegin("subscription_type", r.Type.STRING, 9), e.writeString(this.subscription_type), e.writeFieldEnd()), null !== this.gilded_content && void 0 !== this.gilded_content && (e.writeFieldBegin("gilded_content", r.Type.BOOL, 10), e.writeBool(this.gilded_content), e.writeFieldEnd()), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", r.Type.STRING, 11), e.writeString(this.source), e.writeFieldEnd()), null !== this.number_coins && void 0 !== this.number_coins && (e.writeFieldBegin("number_coins", r.Type.I32, 12), e.writeI32(this.number_coins), e.writeFieldEnd()), null !== this.number_coins_monthly && void 0 !== this.number_coins_monthly && (e.writeFieldBegin("number_coins_monthly", r.Type.I32, 13), e.writeI32(this.number_coins_monthly), e.writeFieldEnd()), null !== this.number_coins_bonus && void 0 !== this.number_coins_bonus && (e.writeFieldBegin("number_coins_bonus", r.Type.I32, 14), e.writeI32(this.number_coins_bonus), e.writeFieldEnd()), null !== this.transaction_id && void 0 !== this.transaction_id && (e.writeFieldBegin("transaction_id", r.Type.STRING, 15), e.writeString(this.transaction_id), e.writeFieldEnd()), null !== this.content_type && void 0 !== this.content_type && (e.writeFieldBegin("content_type", r.Type.STRING, 16), e.writeString(this.content_type), e.writeFieldEnd()), null !== this.default_option && void 0 !== this.default_option && (e.writeFieldBegin("default_option", r.Type.STRING, 17), e.writeString(this.default_option), e.writeFieldEnd()), null !== this.default_anonymous && void 0 !== this.default_anonymous && (e.writeFieldBegin("default_anonymous", r.Type.BOOL, 18), e.writeBool(this.default_anonymous), e.writeFieldEnd()), null !== this.purchased_coins && void 0 !== this.purchased_coins && (e.writeFieldBegin("purchased_coins", r.Type.BOOL, 19), e.writeBool(this.purchased_coins), e.writeFieldEnd()), null !== this.proxy_for_user_id && void 0 !== this.proxy_for_user_id && (e.writeFieldBegin("proxy_for_user_id", r.Type.STRING, 20), e.writeString(this.proxy_for_user_id), e.writeFieldEnd()), null !== this.award_id && void 0 !== this.award_id && (e.writeFieldBegin("award_id", r.Type.STRING, 21), e.writeString(this.award_id), e.writeFieldEnd()), null !== this.award_name && void 0 !== this.award_name && (e.writeFieldBegin("award_name", r.Type.STRING, 22), e.writeString(this.award_name), e.writeFieldEnd()), null !== this.is_mod_award && void 0 !== this.is_mod_award && (e.writeFieldBegin("is_mod_award", r.Type.BOOL, 23), e.writeBool(this.is_mod_award), e.writeFieldEnd()), null !== this.available_award_ids && void 0 !== this.available_award_ids) {
					for (var t in e.writeFieldBegin("available_award_ids", r.Type.LIST, 24), e.writeListBegin(r.Type.STRING, this.available_award_ids.length), this.available_award_ids) this.available_award_ids.hasOwnProperty(t) && (t = this.available_award_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_coins_to_recipient && void 0 !== this.number_coins_to_recipient && (e.writeFieldBegin("number_coins_to_recipient", r.Type.I32, 25), e.writeI32(this.number_coins_to_recipient), e.writeFieldEnd()), null !== this.number_coins_to_community && void 0 !== this.number_coins_to_community && (e.writeFieldBegin("number_coins_to_community", r.Type.I32, 26), e.writeI32(this.number_coins_to_community), e.writeFieldEnd()), null !== this.start_timestamp && void 0 !== this.start_timestamp && (e.writeFieldBegin("start_timestamp", r.Type.I64, 27), e.writeI64(this.start_timestamp), e.writeFieldEnd()), null !== this.end_timestamp && void 0 !== this.end_timestamp && (e.writeFieldBegin("end_timestamp", r.Type.I64, 28), e.writeI64(this.end_timestamp), e.writeFieldEnd()), null !== this.gift_public && void 0 !== this.gift_public && (e.writeFieldBegin("gift_public", r.Type.BOOL, 29), e.writeBool(this.gift_public), e.writeFieldEnd()), null !== this.number_free_coins && void 0 !== this.number_free_coins && (e.writeFieldBegin("number_free_coins", r.Type.I32, 30), e.writeI32(this.number_free_coins), e.writeFieldEnd()), null !== this.number_paid_coins && void 0 !== this.number_paid_coins && (e.writeFieldBegin("number_paid_coins", r.Type.I32, 31), e.writeI32(this.number_paid_coins), e.writeFieldEnd()), null !== this.paid_coins_revenue_pennies && void 0 !== this.paid_coins_revenue_pennies && (e.writeFieldBegin("paid_coins_revenue_pennies", r.Type.I32, 32), e.writeI32(this.paid_coins_revenue_pennies), e.writeFieldEnd()), null !== this.coin_package_id && void 0 !== this.coin_package_id && (e.writeFieldBegin("coin_package_id", r.Type.STRING, 33), e.writeString(this.coin_package_id), e.writeFieldEnd()), null !== this.is_temporary_award && void 0 !== this.is_temporary_award && (e.writeFieldBegin("is_temporary_award", r.Type.BOOL, 34), e.writeBool(this.is_temporary_award), e.writeFieldEnd()), null !== this.is_sale_enabled && void 0 !== this.is_sale_enabled && (e.writeFieldBegin("is_sale_enabled", r.Type.BOOL, 35), e.writeBool(this.is_sale_enabled), e.writeFieldEnd()), null !== this.coin_bonus_percentage && void 0 !== this.coin_bonus_percentage && (e.writeFieldBegin("coin_bonus_percentage", r.Type.DOUBLE, 36), e.writeDouble(this.coin_bonus_percentage), e.writeFieldEnd()), null !== this.coin_sale_percentage && void 0 !== this.coin_sale_percentage && (e.writeFieldBegin("coin_sale_percentage", r.Type.DOUBLE, 37), e.writeDouble(this.coin_sale_percentage), e.writeFieldEnd()), null !== this.offer_context && void 0 !== this.offer_context && (e.writeFieldBegin("offer_context", r.Type.STRING, 38), e.writeString(this.offer_context), e.writeFieldEnd()), null !== this.offer_type && void 0 !== this.offer_type && (e.writeFieldBegin("offer_type", r.Type.STRING, 39), e.writeString(this.offer_type), e.writeFieldEnd()), null !== this.award_col_position && void 0 !== this.award_col_position && (e.writeFieldBegin("award_col_position", r.Type.I32, 40), e.writeI32(this.award_col_position), e.writeFieldEnd()), null !== this.award_row_position && void 0 !== this.award_row_position && (e.writeFieldBegin("award_row_position", r.Type.I32, 41), e.writeI32(this.award_row_position), e.writeFieldEnd()), null !== this.awarder_karma_earned && void 0 !== this.awarder_karma_earned && (e.writeFieldBegin("awarder_karma_earned", r.Type.I64, 42), e.writeI64(this.awarder_karma_earned), e.writeFieldEnd()), null !== this.awardee_karma_earned && void 0 !== this.awardee_karma_earned && (e.writeFieldBegin("awardee_karma_earned", r.Type.I64, 43), e.writeI64(this.awardee_karma_earned), e.writeFieldEnd()), null !== this.user_post_award_karma && void 0 !== this.user_post_award_karma && (e.writeFieldBegin("user_post_award_karma", r.Type.I64, 44), e.writeI64(this.user_post_award_karma), e.writeFieldEnd()), null !== this.user_comment_award_karma && void 0 !== this.user_comment_award_karma && (e.writeFieldBegin("user_comment_award_karma", r.Type.I64, 45), e.writeI64(this.user_comment_award_karma), e.writeFieldEnd()), null !== this.target_user_post_karma && void 0 !== this.target_user_post_karma && (e.writeFieldBegin("target_user_post_karma", r.Type.I64, 46), e.writeI64(this.target_user_post_karma), e.writeFieldEnd()), null !== this.target_user_comment_karma && void 0 !== this.target_user_comment_karma && (e.writeFieldBegin("target_user_comment_karma", r.Type.I64, 47), e.writeI64(this.target_user_comment_karma), e.writeFieldEnd()), null !== this.user_subreddit_post_karma && void 0 !== this.user_subreddit_post_karma && (e.writeFieldBegin("user_subreddit_post_karma", r.Type.I64, 48), e.writeI64(this.user_subreddit_post_karma), e.writeFieldEnd()), null !== this.user_subreddit_comment_karma && void 0 !== this.user_subreddit_comment_karma && (e.writeFieldBegin("user_subreddit_comment_karma", r.Type.I64, 49), e.writeI64(this.user_subreddit_comment_karma), e.writeFieldEnd()), null !== this.award_affects_awardee_karma && void 0 !== this.award_affects_awardee_karma && (e.writeFieldBegin("award_affects_awardee_karma", r.Type.BOOL, 50), e.writeBool(this.award_affects_awardee_karma), e.writeFieldEnd()), null !== this.award_affects_awarder_karma && void 0 !== this.award_affects_awarder_karma && (e.writeFieldBegin("award_affects_awarder_karma", r.Type.BOOL, 51), e.writeBool(this.award_affects_awarder_karma), e.writeFieldEnd()), null !== this.filter_name && void 0 !== this.filter_name && (e.writeFieldBegin("filter_name", r.Type.STRING, 52), e.writeString(this.filter_name), e.writeFieldEnd()), null !== this.filter_id && void 0 !== this.filter_id && (e.writeFieldBegin("filter_id", r.Type.STRING, 53), e.writeString(this.filter_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/grapeshot_classification_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.GrapeshotClassification = function(e) {
					this.categories = null, e && void 0 !== e.categories && null !== e.categories && (this.categories = r.copyList(e.categories, [null]))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("GrapeshotClassification"), null !== this.categories && void 0 !== this.categories) {
					for (var t in e.writeFieldBegin("categories", r.Type.LIST, 1), e.writeListBegin(r.Type.STRING, this.categories.length), this.categories) this.categories.hasOwnProperty(t) && (t = this.categories[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/imposter_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Imposter = function(e) {
					this.game_id = null, this.note_text = null, this.note_id = null, this.notes_blob = null, this.success = null, this.imposter_id = null, this.note_ignore = null, e && (void 0 !== e.game_id && null !== e.game_id && (this.game_id = e.game_id), void 0 !== e.note_text && null !== e.note_text && (this.note_text = e.note_text), void 0 !== e.note_id && null !== e.note_id && (this.note_id = e.note_id), void 0 !== e.notes_blob && null !== e.notes_blob && (this.notes_blob = e.notes_blob), void 0 !== e.success && null !== e.success && (this.success = e.success), void 0 !== e.imposter_id && null !== e.imposter_id && (this.imposter_id = e.imposter_id), void 0 !== e.note_ignore && null !== e.note_ignore && (this.note_ignore = e.note_ignore))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Imposter"), null !== this.game_id && void 0 !== this.game_id && (e.writeFieldBegin("game_id", r.Type.STRING, 1), e.writeString(this.game_id), e.writeFieldEnd()), null !== this.note_text && void 0 !== this.note_text && (e.writeFieldBegin("note_text", r.Type.STRING, 2), e.writeString(this.note_text), e.writeFieldEnd()), null !== this.note_id && void 0 !== this.note_id && (e.writeFieldBegin("note_id", r.Type.STRING, 3), e.writeString(this.note_id), e.writeFieldEnd()), null !== this.notes_blob && void 0 !== this.notes_blob && (e.writeFieldBegin("notes_blob", r.Type.STRING, 4), e.writeString(this.notes_blob), e.writeFieldEnd()), null !== this.success && void 0 !== this.success && (e.writeFieldBegin("success", r.Type.BOOL, 5), e.writeBool(this.success), e.writeFieldEnd()), null !== this.imposter_id && void 0 !== this.imposter_id && (e.writeFieldBegin("imposter_id", r.Type.STRING, 6), e.writeString(this.imposter_id), e.writeFieldEnd()), null !== this.note_ignore && void 0 !== this.note_ignore && (e.writeFieldBegin("note_ignore", r.Type.BOOL, 7), e.writeBool(this.note_ignore), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/legal_export_request_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.LegalExportRequest = function(e) {
					this.user_ids = null, this.type = null, this.requested_information = null, this.status = null, this.due_timestamp = null, this.received_timestamp = null, this.started_timestamp = null, this.ended_timestamp = null, this.ads_data_status = null, this.gifts_data_status = null, this.has_ndo = null, e && (void 0 !== e.user_ids && null !== e.user_ids && (this.user_ids = r.copyList(e.user_ids, [null])), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.requested_information && null !== e.requested_information && (this.requested_information = r.copyList(e.requested_information, [null])), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.due_timestamp && null !== e.due_timestamp && (this.due_timestamp = e.due_timestamp), void 0 !== e.received_timestamp && null !== e.received_timestamp && (this.received_timestamp = e.received_timestamp), void 0 !== e.started_timestamp && null !== e.started_timestamp && (this.started_timestamp = e.started_timestamp), void 0 !== e.ended_timestamp && null !== e.ended_timestamp && (this.ended_timestamp = e.ended_timestamp), void 0 !== e.ads_data_status && null !== e.ads_data_status && (this.ads_data_status = e.ads_data_status), void 0 !== e.gifts_data_status && null !== e.gifts_data_status && (this.gifts_data_status = e.gifts_data_status), void 0 !== e.has_ndo && null !== e.has_ndo && (this.has_ndo = e.has_ndo))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("LegalExportRequest"), null !== this.user_ids && void 0 !== this.user_ids) {
					for (var t in e.writeFieldBegin("user_ids", r.Type.LIST, 1), e.writeListBegin(r.Type.STRING, this.user_ids.length), this.user_ids) this.user_ids.hasOwnProperty(t) && (t = this.user_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.requested_information && void 0 !== this.requested_information) {
					for (var i in e.writeFieldBegin("requested_information", r.Type.LIST, 3), e.writeListBegin(r.Type.STRING, this.requested_information.length), this.requested_information) this.requested_information.hasOwnProperty(i) && (i = this.requested_information[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 4), e.writeString(this.status), e.writeFieldEnd()), null !== this.due_timestamp && void 0 !== this.due_timestamp && (e.writeFieldBegin("due_timestamp", r.Type.I64, 5), e.writeI64(this.due_timestamp), e.writeFieldEnd()), null !== this.received_timestamp && void 0 !== this.received_timestamp && (e.writeFieldBegin("received_timestamp", r.Type.I64, 6), e.writeI64(this.received_timestamp), e.writeFieldEnd()), null !== this.started_timestamp && void 0 !== this.started_timestamp && (e.writeFieldBegin("started_timestamp", r.Type.I64, 7), e.writeI64(this.started_timestamp), e.writeFieldEnd()), null !== this.ended_timestamp && void 0 !== this.ended_timestamp && (e.writeFieldBegin("ended_timestamp", r.Type.I64, 8), e.writeI64(this.ended_timestamp), e.writeFieldEnd()), null !== this.ads_data_status && void 0 !== this.ads_data_status && (e.writeFieldBegin("ads_data_status", r.Type.STRING, 9), e.writeString(this.ads_data_status), e.writeFieldEnd()), null !== this.gifts_data_status && void 0 !== this.gifts_data_status && (e.writeFieldBegin("gifts_data_status", r.Type.STRING, 10), e.writeString(this.gifts_data_status), e.writeFieldEnd()), null !== this.has_ndo && void 0 !== this.has_ndo && (e.writeFieldBegin("has_ndo", r.Type.BOOL, 11), e.writeBool(this.has_ndo), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/live_thread_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.LiveThread = function(e) {
					this.id = null, this.is_announcement = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.is_announcement && null !== e.is_announcement && (this.is_announcement = e.is_announcement))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("LiveThread"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.is_announcement && void 0 !== this.is_announcement && (e.writeFieldBegin("is_announcement", r.Type.BOOL, 2), e.writeBool(this.is_announcement), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/metaflair_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.MetaFlair = function(e) {
					if (this.id = null, this.title = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.title && null !== e.title && (this.title = e.title)
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("MetaFlair"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/metasearch_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.MetaSearch = function(e) {
					if (this.display_query = null, this.raw_query = null, this.structure_type = null, this.sort = null, this.range = null, this.subreddit_id = null, this.subreddit_name = null, this.post_flair_name = null, this.meta_flair_id = null, this.meta_flair_name = null, e) {
						if (void 0 !== e.display_query && null !== e.display_query && (this.display_query = e.display_query), void 0 !== e.raw_query && null !== e.raw_query && (this.raw_query = e.raw_query), void 0 === e.structure_type || null === e.structure_type) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field structure_type is unset!");
						this.structure_type = e.structure_type, void 0 !== e.sort && null !== e.sort && (this.sort = e.sort), void 0 !== e.range && null !== e.range && (this.range = e.range), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name), void 0 !== e.post_flair_name && null !== e.post_flair_name && (this.post_flair_name = e.post_flair_name), void 0 !== e.meta_flair_id && null !== e.meta_flair_id && (this.meta_flair_id = e.meta_flair_id), void 0 !== e.meta_flair_name && null !== e.meta_flair_name && (this.meta_flair_name = e.meta_flair_name)
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("MetaSearch"), null !== this.display_query && void 0 !== this.display_query && (e.writeFieldBegin("display_query", r.Type.STRING, 1), e.writeString(this.display_query), e.writeFieldEnd()), null !== this.raw_query && void 0 !== this.raw_query && (e.writeFieldBegin("raw_query", r.Type.STRING, 2), e.writeString(this.raw_query), e.writeFieldEnd()), null !== this.structure_type && void 0 !== this.structure_type && (e.writeFieldBegin("structure_type", r.Type.STRING, 3), e.writeString(this.structure_type), e.writeFieldEnd()), null !== this.sort && void 0 !== this.sort && (e.writeFieldBegin("sort", r.Type.STRING, 4), e.writeString(this.sort), e.writeFieldEnd()), null !== this.range && void 0 !== this.range && (e.writeFieldBegin("range", r.Type.STRING, 5), e.writeString(this.range), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", r.Type.STRING, 6), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", r.Type.STRING, 7), e.writeString(this.subreddit_name), e.writeFieldEnd()), null !== this.post_flair_name && void 0 !== this.post_flair_name && (e.writeFieldBegin("post_flair_name", r.Type.STRING, 8), e.writeString(this.post_flair_name), e.writeFieldEnd()), null !== this.meta_flair_id && void 0 !== this.meta_flair_id && (e.writeFieldBegin("meta_flair_id", r.Type.STRING, 9), e.writeString(this.meta_flair_id), e.writeFieldEnd()), null !== this.meta_flair_name && void 0 !== this.meta_flair_name && (e.writeFieldBegin("meta_flair_name", r.Type.STRING, 10), e.writeString(this.meta_flair_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/midas_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ContentMetadata = function(e) {
					this.is_quarantined = null, this.is_nsfw = null, this.categories = null, e && (void 0 !== e.is_quarantined && null !== e.is_quarantined && (this.is_quarantined = e.is_quarantined), void 0 !== e.is_nsfw && null !== e.is_nsfw && (this.is_nsfw = e.is_nsfw), void 0 !== e.categories && null !== e.categories && (this.categories = r.copyList(e.categories, [null])))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("ContentMetadata"), null !== this.is_quarantined && void 0 !== this.is_quarantined && (e.writeFieldBegin("is_quarantined", r.Type.BOOL, 1), e.writeBool(this.is_quarantined), e.writeFieldEnd()), null !== this.is_nsfw && void 0 !== this.is_nsfw && (e.writeFieldBegin("is_nsfw", r.Type.BOOL, 2), e.writeBool(this.is_nsfw), e.writeFieldEnd()), null !== this.categories && void 0 !== this.categories) {
					for (var t in e.writeFieldBegin("categories", r.Type.LIST, 3), e.writeListBegin(r.Type.STRING, this.categories.length), this.categories) this.categories.hasOwnProperty(t) && (t = this.categories[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Geo = function(e) {
				this.country_code = null, this.region = null, this.city = null, this.time_zone = null, this.anonymous = null, this.anonymous_vpn = null, this.hosting_provider = null, this.public_proxy = null, this.tor_exit_node = null, this.metro_code = null, e && (void 0 !== e.country_code && null !== e.country_code && (this.country_code = e.country_code), void 0 !== e.region && null !== e.region && (this.region = e.region), void 0 !== e.city && null !== e.city && (this.city = e.city), void 0 !== e.time_zone && null !== e.time_zone && (this.time_zone = e.time_zone), void 0 !== e.anonymous && null !== e.anonymous && (this.anonymous = e.anonymous), void 0 !== e.anonymous_vpn && null !== e.anonymous_vpn && (this.anonymous_vpn = e.anonymous_vpn), void 0 !== e.hosting_provider && null !== e.hosting_provider && (this.hosting_provider = e.hosting_provider), void 0 !== e.public_proxy && null !== e.public_proxy && (this.public_proxy = e.public_proxy), void 0 !== e.tor_exit_node && null !== e.tor_exit_node && (this.tor_exit_node = e.tor_exit_node), void 0 !== e.metro_code && null !== e.metro_code && (this.metro_code = e.metro_code))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Geo"), null !== this.country_code && void 0 !== this.country_code && (e.writeFieldBegin("country_code", r.Type.STRING, 1), e.writeString(this.country_code), e.writeFieldEnd()), null !== this.region && void 0 !== this.region && (e.writeFieldBegin("region", r.Type.STRING, 2), e.writeString(this.region), e.writeFieldEnd()), null !== this.city && void 0 !== this.city && (e.writeFieldBegin("city", r.Type.STRING, 3), e.writeString(this.city), e.writeFieldEnd()), null !== this.time_zone && void 0 !== this.time_zone && (e.writeFieldBegin("time_zone", r.Type.STRING, 4), e.writeString(this.time_zone), e.writeFieldEnd()), null !== this.anonymous && void 0 !== this.anonymous && (e.writeFieldBegin("anonymous", r.Type.BOOL, 5), e.writeBool(this.anonymous), e.writeFieldEnd()), null !== this.anonymous_vpn && void 0 !== this.anonymous_vpn && (e.writeFieldBegin("anonymous_vpn", r.Type.BOOL, 6), e.writeBool(this.anonymous_vpn), e.writeFieldEnd()), null !== this.hosting_provider && void 0 !== this.hosting_provider && (e.writeFieldBegin("hosting_provider", r.Type.BOOL, 7), e.writeBool(this.hosting_provider), e.writeFieldEnd()), null !== this.public_proxy && void 0 !== this.public_proxy && (e.writeFieldBegin("public_proxy", r.Type.BOOL, 8), e.writeBool(this.public_proxy), e.writeFieldEnd()), null !== this.tor_exit_node && void 0 !== this.tor_exit_node && (e.writeFieldBegin("tor_exit_node", r.Type.BOOL, 9), e.writeBool(this.tor_exit_node), e.writeFieldEnd()), null !== this.metro_code && void 0 !== this.metro_code && (e.writeFieldBegin("metro_code", r.Type.I64, 10), e.writeI64(this.metro_code), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.UrlParsed = function(e) {
				this.shared_timestamp = null, this.utm_source = null, this.utm_name = null, this.shared_hash = null, this.utm_campaign = null, this.utm_content = null, this.utm_medium = null, this.utm_term = null, e && (void 0 !== e.shared_timestamp && null !== e.shared_timestamp && (this.shared_timestamp = e.shared_timestamp), void 0 !== e.utm_source && null !== e.utm_source && (this.utm_source = e.utm_source), void 0 !== e.utm_name && null !== e.utm_name && (this.utm_name = e.utm_name), void 0 !== e.shared_hash && null !== e.shared_hash && (this.shared_hash = e.shared_hash), void 0 !== e.utm_campaign && null !== e.utm_campaign && (this.utm_campaign = e.utm_campaign), void 0 !== e.utm_content && null !== e.utm_content && (this.utm_content = e.utm_content), void 0 !== e.utm_medium && null !== e.utm_medium && (this.utm_medium = e.utm_medium), void 0 !== e.utm_term && null !== e.utm_term && (this.utm_term = e.utm_term))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("UrlParsed"), null !== this.shared_timestamp && void 0 !== this.shared_timestamp && (e.writeFieldBegin("shared_timestamp", r.Type.I64, 1), e.writeI64(this.shared_timestamp), e.writeFieldEnd()), null !== this.utm_source && void 0 !== this.utm_source && (e.writeFieldBegin("utm_source", r.Type.STRING, 2), e.writeString(this.utm_source), e.writeFieldEnd()), null !== this.utm_name && void 0 !== this.utm_name && (e.writeFieldBegin("utm_name", r.Type.STRING, 3), e.writeString(this.utm_name), e.writeFieldEnd()), null !== this.shared_hash && void 0 !== this.shared_hash && (e.writeFieldBegin("shared_hash", r.Type.STRING, 4), e.writeString(this.shared_hash), e.writeFieldEnd()), null !== this.utm_campaign && void 0 !== this.utm_campaign && (e.writeFieldBegin("utm_campaign", r.Type.STRING, 5), e.writeString(this.utm_campaign), e.writeFieldEnd()), null !== this.utm_content && void 0 !== this.utm_content && (e.writeFieldBegin("utm_content", r.Type.STRING, 6), e.writeString(this.utm_content), e.writeFieldEnd()), null !== this.utm_medium && void 0 !== this.utm_medium && (e.writeFieldBegin("utm_medium", r.Type.STRING, 7), e.writeString(this.utm_medium), e.writeFieldEnd()), null !== this.utm_term && void 0 !== this.utm_term && (e.writeFieldBegin("utm_term", r.Type.STRING, 8), e.writeString(this.utm_term), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.LinkSharing = function(e) {
				this.shared_at_timestamp = null, e && void 0 !== e.shared_at_timestamp && null !== e.shared_at_timestamp && (this.shared_at_timestamp = e.shared_at_timestamp)
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("LinkSharing"), null !== this.shared_at_timestamp && void 0 !== this.shared_at_timestamp && (e.writeFieldBegin("shared_at_timestamp", r.Type.I64, 1), e.writeI64(this.shared_at_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var a = e.exports.Inferred = function(e) {
				this.app_name = null, this.client_ip = null, this.user_agent_web_crawler = null, this.post_impression_id = null, this.json_byte_size = null, this.isp_organization = null, e && (void 0 !== e.app_name && null !== e.app_name && (this.app_name = e.app_name), void 0 !== e.client_ip && null !== e.client_ip && (this.client_ip = e.client_ip), void 0 !== e.user_agent_web_crawler && null !== e.user_agent_web_crawler && (this.user_agent_web_crawler = e.user_agent_web_crawler), void 0 !== e.post_impression_id && null !== e.post_impression_id && (this.post_impression_id = e.post_impression_id), void 0 !== e.json_byte_size && null !== e.json_byte_size && (this.json_byte_size = e.json_byte_size), void 0 !== e.isp_organization && null !== e.isp_organization && (this.isp_organization = e.isp_organization))
			};
			a.prototype = {}, a.prototype.write = function(e) {
				e.writeStructBegin("Inferred"), null !== this.app_name && void 0 !== this.app_name && (e.writeFieldBegin("app_name", r.Type.STRING, 1), e.writeString(this.app_name), e.writeFieldEnd()), null !== this.client_ip && void 0 !== this.client_ip && (e.writeFieldBegin("client_ip", r.Type.STRING, 2), e.writeString(this.client_ip), e.writeFieldEnd()), null !== this.user_agent_web_crawler && void 0 !== this.user_agent_web_crawler && (e.writeFieldBegin("user_agent_web_crawler", r.Type.BOOL, 3), e.writeBool(this.user_agent_web_crawler), e.writeFieldEnd()), null !== this.post_impression_id && void 0 !== this.post_impression_id && (e.writeFieldBegin("post_impression_id", r.Type.I64, 4), e.writeI64(this.post_impression_id), e.writeFieldEnd()), null !== this.json_byte_size && void 0 !== this.json_byte_size && (e.writeFieldBegin("json_byte_size", r.Type.I64, 5), e.writeI64(this.json_byte_size), e.writeFieldEnd()), null !== this.isp_organization && void 0 !== this.isp_organization && (e.writeFieldBegin("isp_organization", r.Type.STRING, 6), e.writeString(this.isp_organization), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/ml_model_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.MLModel = function(e) {
					this.name = null, this.version = null, this.owner = null, this.prediction = null, this.features = null, this.prediction_id = null, this.client_name = null, this.prediction_scores = null, this.type = null, e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.owner && null !== e.owner && (this.owner = e.owner), void 0 !== e.prediction && null !== e.prediction && (this.prediction = e.prediction), void 0 !== e.features && null !== e.features && (this.features = e.features), void 0 !== e.prediction_id && null !== e.prediction_id && (this.prediction_id = e.prediction_id), void 0 !== e.client_name && null !== e.client_name && (this.client_name = e.client_name), void 0 !== e.prediction_scores && null !== e.prediction_scores && (this.prediction_scores = e.prediction_scores), void 0 !== e.type && null !== e.type && (this.type = e.type))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("MLModel"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", r.Type.STRING, 2), e.writeString(this.version), e.writeFieldEnd()), null !== this.owner && void 0 !== this.owner && (e.writeFieldBegin("owner", r.Type.STRING, 3), e.writeString(this.owner), e.writeFieldEnd()), null !== this.prediction && void 0 !== this.prediction && (e.writeFieldBegin("prediction", r.Type.STRING, 4), e.writeString(this.prediction), e.writeFieldEnd()), null !== this.features && void 0 !== this.features && (e.writeFieldBegin("features", r.Type.STRING, 5), e.writeString(this.features), e.writeFieldEnd()), null !== this.prediction_id && void 0 !== this.prediction_id && (e.writeFieldBegin("prediction_id", r.Type.STRING, 6), e.writeString(this.prediction_id), e.writeFieldEnd()), null !== this.client_name && void 0 !== this.client_name && (e.writeFieldBegin("client_name", r.Type.STRING, 7), e.writeString(this.client_name), e.writeFieldEnd()), null !== this.prediction_scores && void 0 !== this.prediction_scores && (e.writeFieldBegin("prediction_scores", r.Type.STRING, 8), e.writeString(this.prediction_scores), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 9), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/moderator_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ModAction = function(e) {
					this.target_user_id = null, this.is_automoderator = null, this.is_target_removed_by_steward = null, e && (void 0 !== e.target_user_id && null !== e.target_user_id && (this.target_user_id = e.target_user_id), void 0 !== e.is_automoderator && null !== e.is_automoderator && (this.is_automoderator = e.is_automoderator), void 0 !== e.is_target_removed_by_steward && null !== e.is_target_removed_by_steward && (this.is_target_removed_by_steward = e.is_target_removed_by_steward))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("ModAction"), null !== this.target_user_id && void 0 !== this.target_user_id && (e.writeFieldBegin("target_user_id", r.Type.STRING, 1), e.writeString(this.target_user_id), e.writeFieldEnd()), null !== this.is_automoderator && void 0 !== this.is_automoderator && (e.writeFieldBegin("is_automoderator", r.Type.BOOL, 2), e.writeBool(this.is_automoderator), e.writeFieldEnd()), null !== this.is_target_removed_by_steward && void 0 !== this.is_target_removed_by_steward && (e.writeFieldBegin("is_target_removed_by_steward", r.Type.BOOL, 3), e.writeBool(this.is_target_removed_by_steward), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/notification_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.MailroomRequest = function(e) {
					this.message_id = null, this.message_type = null, this.dropped_by = null, this.delivery_queue_name = null, this.notification_transport = null, this.notification_target = null, this.message_variant = null, this.region = null, this.region_num = null, e && (void 0 !== e.message_id && null !== e.message_id && (this.message_id = e.message_id), void 0 !== e.message_type && null !== e.message_type && (this.message_type = e.message_type), void 0 !== e.dropped_by && null !== e.dropped_by && (this.dropped_by = e.dropped_by), void 0 !== e.delivery_queue_name && null !== e.delivery_queue_name && (this.delivery_queue_name = e.delivery_queue_name), void 0 !== e.notification_transport && null !== e.notification_transport && (this.notification_transport = e.notification_transport), void 0 !== e.notification_target && null !== e.notification_target && (this.notification_target = e.notification_target), void 0 !== e.message_variant && null !== e.message_variant && (this.message_variant = e.message_variant), void 0 !== e.region && null !== e.region && (this.region = e.region), void 0 !== e.region_num && null !== e.region_num && (this.region_num = e.region_num))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("MailroomRequest"), null !== this.message_id && void 0 !== this.message_id && (e.writeFieldBegin("message_id", r.Type.STRING, 1), e.writeString(this.message_id), e.writeFieldEnd()), null !== this.message_type && void 0 !== this.message_type && (e.writeFieldBegin("message_type", r.Type.STRING, 2), e.writeString(this.message_type), e.writeFieldEnd()), null !== this.dropped_by && void 0 !== this.dropped_by && (e.writeFieldBegin("dropped_by", r.Type.STRING, 3), e.writeString(this.dropped_by), e.writeFieldEnd()), null !== this.delivery_queue_name && void 0 !== this.delivery_queue_name && (e.writeFieldBegin("delivery_queue_name", r.Type.STRING, 4), e.writeString(this.delivery_queue_name), e.writeFieldEnd()), null !== this.notification_transport && void 0 !== this.notification_transport && (e.writeFieldBegin("notification_transport", r.Type.STRING, 5), e.writeString(this.notification_transport), e.writeFieldEnd()), null !== this.notification_target && void 0 !== this.notification_target && (e.writeFieldBegin("notification_target", r.Type.STRING, 6), e.writeString(this.notification_target), e.writeFieldEnd()), null !== this.message_variant && void 0 !== this.message_variant && (e.writeFieldBegin("message_variant", r.Type.STRING, 7), e.writeString(this.message_variant), e.writeFieldEnd()), null !== this.region && void 0 !== this.region && (e.writeFieldBegin("region", r.Type.STRING, 8), e.writeString(this.region), e.writeFieldEnd()), null !== this.region_num && void 0 !== this.region_num && (e.writeFieldBegin("region_num", r.Type.I32, 9), e.writeI32(this.region_num), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.MessengerRequest = function(e) {
				this.message_type = null, this.dropped_reason = null, this.queue_name = null, e && (void 0 !== e.message_type && null !== e.message_type && (this.message_type = e.message_type), void 0 !== e.dropped_reason && null !== e.dropped_reason && (this.dropped_reason = e.dropped_reason), void 0 !== e.queue_name && null !== e.queue_name && (this.queue_name = e.queue_name))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("MessengerRequest"), null !== this.message_type && void 0 !== this.message_type && (e.writeFieldBegin("message_type", r.Type.STRING, 1), e.writeString(this.message_type), e.writeFieldEnd()), null !== this.dropped_reason && void 0 !== this.dropped_reason && (e.writeFieldBegin("dropped_reason", r.Type.STRING, 2), e.writeString(this.dropped_reason), e.writeFieldEnd()), null !== this.queue_name && void 0 !== this.queue_name && (e.writeFieldBegin("queue_name", r.Type.STRING, 3), e.writeString(this.queue_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.NotificationRequest = function(e) {
				this.message_id = null, this.status = null, this.platform = null, this.failure_reason = null, this.source_queue_name = null, this.recipient_app_name = null, this.recipient_device_id = null, e && (void 0 !== e.message_id && null !== e.message_id && (this.message_id = e.message_id), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.platform && null !== e.platform && (this.platform = e.platform), void 0 !== e.failure_reason && null !== e.failure_reason && (this.failure_reason = e.failure_reason), void 0 !== e.source_queue_name && null !== e.source_queue_name && (this.source_queue_name = e.source_queue_name), void 0 !== e.recipient_app_name && null !== e.recipient_app_name && (this.recipient_app_name = e.recipient_app_name), void 0 !== e.recipient_device_id && null !== e.recipient_device_id && (this.recipient_device_id = e.recipient_device_id))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("NotificationRequest"), null !== this.message_id && void 0 !== this.message_id && (e.writeFieldBegin("message_id", r.Type.STRING, 1), e.writeString(this.message_id), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 2), e.writeString(this.status), e.writeFieldEnd()), null !== this.platform && void 0 !== this.platform && (e.writeFieldBegin("platform", r.Type.STRING, 3), e.writeString(this.platform), e.writeFieldEnd()), null !== this.failure_reason && void 0 !== this.failure_reason && (e.writeFieldBegin("failure_reason", r.Type.STRING, 4), e.writeString(this.failure_reason), e.writeFieldEnd()), null !== this.source_queue_name && void 0 !== this.source_queue_name && (e.writeFieldBegin("source_queue_name", r.Type.STRING, 5), e.writeString(this.source_queue_name), e.writeFieldEnd()), null !== this.recipient_app_name && void 0 !== this.recipient_app_name && (e.writeFieldBegin("recipient_app_name", r.Type.STRING, 6), e.writeString(this.recipient_app_name), e.writeFieldEnd()), null !== this.recipient_device_id && void 0 !== this.recipient_device_id && (e.writeFieldBegin("recipient_device_id", r.Type.STRING, 7), e.writeString(this.recipient_device_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/outbound_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Outbound = function(e) {
					if (this.url = null, this.post_id = null, this.subreddit_id = null, this.comment_id = null, this.subreddit_name = null, this.source_element = null, e) {
						if (void 0 === e.url || null === e.url) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field url is unset!");
						this.url = e.url, void 0 !== e.post_id && null !== e.post_id && (this.post_id = e.post_id), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.comment_id && null !== e.comment_id && (this.comment_id = e.comment_id), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name), void 0 !== e.source_element && null !== e.source_element && (this.source_element = e.source_element)
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Outbound"), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", r.Type.STRING, 1), e.writeString(this.url), e.writeFieldEnd()), null !== this.post_id && void 0 !== this.post_id && (e.writeFieldBegin("post_id", r.Type.STRING, 2), e.writeString(this.post_id), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", r.Type.STRING, 3), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.comment_id && void 0 !== this.comment_id && (e.writeFieldBegin("comment_id", r.Type.STRING, 4), e.writeString(this.comment_id), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", r.Type.STRING, 5), e.writeString(this.subreddit_name), e.writeFieldEnd()), null !== this.source_element && void 0 !== this.source_element && (e.writeFieldBegin("source_element", r.Type.STRING, 6), e.writeString(this.source_element), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/payment_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Payment = function(e) {
					this.method = null, this.currency = null, this.amount_in_smallest_denom = null, this.default_option = null, this.stored_credit_card_state = null, e && (void 0 !== e.method && null !== e.method && (this.method = e.method), void 0 !== e.currency && null !== e.currency && (this.currency = e.currency), void 0 !== e.amount_in_smallest_denom && null !== e.amount_in_smallest_denom && (this.amount_in_smallest_denom = e.amount_in_smallest_denom), void 0 !== e.default_option && null !== e.default_option && (this.default_option = e.default_option), void 0 !== e.stored_credit_card_state && null !== e.stored_credit_card_state && (this.stored_credit_card_state = e.stored_credit_card_state))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Payment"), null !== this.method && void 0 !== this.method && (e.writeFieldBegin("method", r.Type.STRING, 1), e.writeString(this.method), e.writeFieldEnd()), null !== this.currency && void 0 !== this.currency && (e.writeFieldBegin("currency", r.Type.STRING, 2), e.writeString(this.currency), e.writeFieldEnd()), null !== this.amount_in_smallest_denom && void 0 !== this.amount_in_smallest_denom && (e.writeFieldBegin("amount_in_smallest_denom", r.Type.I64, 3), e.writeI64(this.amount_in_smallest_denom), e.writeFieldEnd()), null !== this.default_option && void 0 !== this.default_option && (e.writeFieldBegin("default_option", r.Type.STRING, 4), e.writeString(this.default_option), e.writeFieldEnd()), null !== this.stored_credit_card_state && void 0 !== this.stored_credit_card_state && (e.writeFieldBegin("stored_credit_card_state", r.Type.STRING, 5), e.writeString(this.stored_credit_card_state), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/perspective_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Perspective = function(e) {
					this.collapse_reasons = null, this.toxicity = null, this.severe_toxicity = null, this.insult = null, this.profanity = null, this.sexually_explicit = null, this.threat = null, this.flirtation = null, this.attack_on_author = null, this.attack_on_commenter = null, this.incoherent = null, this.inflammatory = null, this.likely_to_reject = null, this.obscene = null, this.spam = null, this.unsubstantial = null, this.identity_attack = null, e && (void 0 !== e.collapse_reasons && null !== e.collapse_reasons && (this.collapse_reasons = r.copyList(e.collapse_reasons, [null])), void 0 !== e.toxicity && null !== e.toxicity && (this.toxicity = e.toxicity), void 0 !== e.severe_toxicity && null !== e.severe_toxicity && (this.severe_toxicity = e.severe_toxicity), void 0 !== e.insult && null !== e.insult && (this.insult = e.insult), void 0 !== e.profanity && null !== e.profanity && (this.profanity = e.profanity), void 0 !== e.sexually_explicit && null !== e.sexually_explicit && (this.sexually_explicit = e.sexually_explicit), void 0 !== e.threat && null !== e.threat && (this.threat = e.threat), void 0 !== e.flirtation && null !== e.flirtation && (this.flirtation = e.flirtation), void 0 !== e.attack_on_author && null !== e.attack_on_author && (this.attack_on_author = e.attack_on_author), void 0 !== e.attack_on_commenter && null !== e.attack_on_commenter && (this.attack_on_commenter = e.attack_on_commenter), void 0 !== e.incoherent && null !== e.incoherent && (this.incoherent = e.incoherent), void 0 !== e.inflammatory && null !== e.inflammatory && (this.inflammatory = e.inflammatory), void 0 !== e.likely_to_reject && null !== e.likely_to_reject && (this.likely_to_reject = e.likely_to_reject), void 0 !== e.obscene && null !== e.obscene && (this.obscene = e.obscene), void 0 !== e.spam && null !== e.spam && (this.spam = e.spam), void 0 !== e.unsubstantial && null !== e.unsubstantial && (this.unsubstantial = e.unsubstantial), void 0 !== e.identity_attack && null !== e.identity_attack && (this.identity_attack = e.identity_attack))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Perspective"), null !== this.collapse_reasons && void 0 !== this.collapse_reasons) {
					for (var t in e.writeFieldBegin("collapse_reasons", r.Type.LIST, 1), e.writeListBegin(r.Type.STRING, this.collapse_reasons.length), this.collapse_reasons) this.collapse_reasons.hasOwnProperty(t) && (t = this.collapse_reasons[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.toxicity && void 0 !== this.toxicity && (e.writeFieldBegin("toxicity", r.Type.DOUBLE, 50), e.writeDouble(this.toxicity), e.writeFieldEnd()), null !== this.severe_toxicity && void 0 !== this.severe_toxicity && (e.writeFieldBegin("severe_toxicity", r.Type.DOUBLE, 51), e.writeDouble(this.severe_toxicity), e.writeFieldEnd()), null !== this.insult && void 0 !== this.insult && (e.writeFieldBegin("insult", r.Type.DOUBLE, 53), e.writeDouble(this.insult), e.writeFieldEnd()), null !== this.profanity && void 0 !== this.profanity && (e.writeFieldBegin("profanity", r.Type.DOUBLE, 54), e.writeDouble(this.profanity), e.writeFieldEnd()), null !== this.sexually_explicit && void 0 !== this.sexually_explicit && (e.writeFieldBegin("sexually_explicit", r.Type.DOUBLE, 55), e.writeDouble(this.sexually_explicit), e.writeFieldEnd()), null !== this.threat && void 0 !== this.threat && (e.writeFieldBegin("threat", r.Type.DOUBLE, 56), e.writeDouble(this.threat), e.writeFieldEnd()), null !== this.flirtation && void 0 !== this.flirtation && (e.writeFieldBegin("flirtation", r.Type.DOUBLE, 57), e.writeDouble(this.flirtation), e.writeFieldEnd()), null !== this.attack_on_author && void 0 !== this.attack_on_author && (e.writeFieldBegin("attack_on_author", r.Type.DOUBLE, 58), e.writeDouble(this.attack_on_author), e.writeFieldEnd()), null !== this.attack_on_commenter && void 0 !== this.attack_on_commenter && (e.writeFieldBegin("attack_on_commenter", r.Type.DOUBLE, 59), e.writeDouble(this.attack_on_commenter), e.writeFieldEnd()), null !== this.incoherent && void 0 !== this.incoherent && (e.writeFieldBegin("incoherent", r.Type.DOUBLE, 60), e.writeDouble(this.incoherent), e.writeFieldEnd()), null !== this.inflammatory && void 0 !== this.inflammatory && (e.writeFieldBegin("inflammatory", r.Type.DOUBLE, 61), e.writeDouble(this.inflammatory), e.writeFieldEnd()), null !== this.likely_to_reject && void 0 !== this.likely_to_reject && (e.writeFieldBegin("likely_to_reject", r.Type.DOUBLE, 62), e.writeDouble(this.likely_to_reject), e.writeFieldEnd()), null !== this.obscene && void 0 !== this.obscene && (e.writeFieldBegin("obscene", r.Type.DOUBLE, 63), e.writeDouble(this.obscene), e.writeFieldEnd()), null !== this.spam && void 0 !== this.spam && (e.writeFieldBegin("spam", r.Type.DOUBLE, 64), e.writeDouble(this.spam), e.writeFieldEnd()), null !== this.unsubstantial && void 0 !== this.unsubstantial && (e.writeFieldBegin("unsubstantial", r.Type.DOUBLE, 65), e.writeDouble(this.unsubstantial), e.writeFieldEnd()), null !== this.identity_attack && void 0 !== this.identity_attack && (e.writeFieldBegin("identity_attack", r.Type.DOUBLE, 66), e.writeDouble(this.identity_attack), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/playback_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Playback = function(e) {
					this.id = null, this.scrubbing_start_ms = null, this.scrubbing_end_ms = null, this.session_duration_ms = null, this.watch_duration_ms = null, this.heartbeat_duration_ms = null, this.is_live = null, this.playhead_offset_ms = null, this.timestamp_ms = null, this.start_time_ms = null, this.volume = null, this.chat_state = null, this.player_type = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.scrubbing_start_ms && null !== e.scrubbing_start_ms && (this.scrubbing_start_ms = e.scrubbing_start_ms), void 0 !== e.scrubbing_end_ms && null !== e.scrubbing_end_ms && (this.scrubbing_end_ms = e.scrubbing_end_ms), void 0 !== e.session_duration_ms && null !== e.session_duration_ms && (this.session_duration_ms = e.session_duration_ms), void 0 !== e.watch_duration_ms && null !== e.watch_duration_ms && (this.watch_duration_ms = e.watch_duration_ms), void 0 !== e.heartbeat_duration_ms && null !== e.heartbeat_duration_ms && (this.heartbeat_duration_ms = e.heartbeat_duration_ms), void 0 !== e.is_live && null !== e.is_live && (this.is_live = e.is_live), void 0 !== e.playhead_offset_ms && null !== e.playhead_offset_ms && (this.playhead_offset_ms = e.playhead_offset_ms), void 0 !== e.timestamp_ms && null !== e.timestamp_ms && (this.timestamp_ms = e.timestamp_ms), void 0 !== e.start_time_ms && null !== e.start_time_ms && (this.start_time_ms = e.start_time_ms), void 0 !== e.volume && null !== e.volume && (this.volume = e.volume), void 0 !== e.chat_state && null !== e.chat_state && (this.chat_state = e.chat_state), void 0 !== e.player_type && null !== e.player_type && (this.player_type = e.player_type))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Playback"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.scrubbing_start_ms && void 0 !== this.scrubbing_start_ms && (e.writeFieldBegin("scrubbing_start_ms", r.Type.I64, 2), e.writeI64(this.scrubbing_start_ms), e.writeFieldEnd()), null !== this.scrubbing_end_ms && void 0 !== this.scrubbing_end_ms && (e.writeFieldBegin("scrubbing_end_ms", r.Type.I64, 3), e.writeI64(this.scrubbing_end_ms), e.writeFieldEnd()), null !== this.session_duration_ms && void 0 !== this.session_duration_ms && (e.writeFieldBegin("session_duration_ms", r.Type.I64, 4), e.writeI64(this.session_duration_ms), e.writeFieldEnd()), null !== this.watch_duration_ms && void 0 !== this.watch_duration_ms && (e.writeFieldBegin("watch_duration_ms", r.Type.I64, 5), e.writeI64(this.watch_duration_ms), e.writeFieldEnd()), null !== this.heartbeat_duration_ms && void 0 !== this.heartbeat_duration_ms && (e.writeFieldBegin("heartbeat_duration_ms", r.Type.I64, 6), e.writeI64(this.heartbeat_duration_ms), e.writeFieldEnd()), null !== this.is_live && void 0 !== this.is_live && (e.writeFieldBegin("is_live", r.Type.BOOL, 7), e.writeBool(this.is_live), e.writeFieldEnd()), null !== this.playhead_offset_ms && void 0 !== this.playhead_offset_ms && (e.writeFieldBegin("playhead_offset_ms", r.Type.I64, 8), e.writeI64(this.playhead_offset_ms), e.writeFieldEnd()), null !== this.timestamp_ms && void 0 !== this.timestamp_ms && (e.writeFieldBegin("timestamp_ms", r.Type.I64, 9), e.writeI64(this.timestamp_ms), e.writeFieldEnd()), null !== this.start_time_ms && void 0 !== this.start_time_ms && (e.writeFieldBegin("start_time_ms", r.Type.I64, 10), e.writeI64(this.start_time_ms), e.writeFieldEnd()), null !== this.volume && void 0 !== this.volume && (e.writeFieldBegin("volume", r.Type.I64, 11), e.writeI64(this.volume), e.writeFieldEnd()), null !== this.chat_state && void 0 !== this.chat_state && (e.writeFieldBegin("chat_state", r.Type.STRING, 12), e.writeString(this.chat_state), e.writeFieldEnd()), null !== this.player_type && void 0 !== this.player_type && (e.writeFieldBegin("player_type", r.Type.STRING, 13), e.writeString(this.player_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/poll_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), e.exports = {}, e.exports.Poll = function(e) {
					this.options_length = null, this.options = null, this.user_vote_text = null, this.vote_affects_score = null, this.vote_affects_score_reason = null, this.options_vote_totals = null, e && (void 0 !== e.options_length && null !== e.options_length && (this.options_length = e.options_length), void 0 !== e.options && null !== e.options && (this.options = r.copyList(e.options, [null])), void 0 !== e.user_vote_text && null !== e.user_vote_text && (this.user_vote_text = e.user_vote_text), void 0 !== e.vote_affects_score && null !== e.vote_affects_score && (this.vote_affects_score = e.vote_affects_score), void 0 !== e.vote_affects_score_reason && null !== e.vote_affects_score_reason && (this.vote_affects_score_reason = e.vote_affects_score_reason), void 0 !== e.options_vote_totals && null !== e.options_vote_totals && (this.options_vote_totals = r.copyList(e.options_vote_totals, [null])))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Poll"), null !== this.options_length && void 0 !== this.options_length && (e.writeFieldBegin("options_length", r.Type.I32, 1), e.writeI32(this.options_length), e.writeFieldEnd()), null !== this.options && void 0 !== this.options) {
					for (var t in e.writeFieldBegin("options", r.Type.LIST, 2), e.writeListBegin(r.Type.STRING, this.options.length), this.options) this.options.hasOwnProperty(t) && (t = this.options[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.user_vote_text && void 0 !== this.user_vote_text && (e.writeFieldBegin("user_vote_text", r.Type.STRING, 4), e.writeString(this.user_vote_text), e.writeFieldEnd()), null !== this.vote_affects_score && void 0 !== this.vote_affects_score && (e.writeFieldBegin("vote_affects_score", r.Type.BOOL, 5), e.writeBool(this.vote_affects_score), e.writeFieldEnd()), null !== this.vote_affects_score_reason && void 0 !== this.vote_affects_score_reason && (e.writeFieldBegin("vote_affects_score_reason", r.Type.STRING, 6), e.writeString(this.vote_affects_score_reason), e.writeFieldEnd()), null !== this.options_vote_totals && void 0 !== this.options_vote_totals) {
					for (var i in e.writeFieldBegin("options_vote_totals", r.Type.LIST, 7), e.writeListBegin(r.Type.I32, this.options_vote_totals.length), this.options_vote_totals) this.options_vote_totals.hasOwnProperty(i) && (i = this.options_vote_totals[i], e.writeI32(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/popup_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Popup = function(e) {
					this.id = null, this.button_text = null, this.text = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.button_text && null !== e.button_text && (this.button_text = e.button_text), void 0 !== e.text && null !== e.text && (this.text = e.text))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Popup"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.button_text && void 0 !== this.button_text && (e.writeFieldBegin("button_text", r.Type.STRING, 2), e.writeString(this.button_text), e.writeFieldEnd()), null !== this.text && void 0 !== this.text && (e.writeFieldBegin("text", r.Type.STRING, 3), e.writeString(this.text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/post_draft_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.PostDraft = function(e) {
					this.id = null, this.type = null, this.author_id = null, this.created_timestamp = null, this.title_length = null, this.url_length = null, this.body_text_length = null, this.nsfw = null, this.spoiler = null, this.original_content = null, this.flair = null, this.number_rte_images = null, this.number_rte_videos = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.author_id && null !== e.author_id && (this.author_id = e.author_id), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.title_length && null !== e.title_length && (this.title_length = e.title_length), void 0 !== e.url_length && null !== e.url_length && (this.url_length = e.url_length), void 0 !== e.body_text_length && null !== e.body_text_length && (this.body_text_length = e.body_text_length), void 0 !== e.nsfw && null !== e.nsfw && (this.nsfw = e.nsfw), void 0 !== e.spoiler && null !== e.spoiler && (this.spoiler = e.spoiler), void 0 !== e.original_content && null !== e.original_content && (this.original_content = e.original_content), void 0 !== e.flair && null !== e.flair && (this.flair = e.flair), void 0 !== e.number_rte_images && null !== e.number_rte_images && (this.number_rte_images = e.number_rte_images), void 0 !== e.number_rte_videos && null !== e.number_rte_videos && (this.number_rte_videos = e.number_rte_videos))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("PostDraft"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.author_id && void 0 !== this.author_id && (e.writeFieldBegin("author_id", r.Type.STRING, 3), e.writeString(this.author_id), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 4), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.title_length && void 0 !== this.title_length && (e.writeFieldBegin("title_length", r.Type.I32, 5), e.writeI32(this.title_length), e.writeFieldEnd()), null !== this.url_length && void 0 !== this.url_length && (e.writeFieldBegin("url_length", r.Type.I32, 6), e.writeI32(this.url_length), e.writeFieldEnd()), null !== this.body_text_length && void 0 !== this.body_text_length && (e.writeFieldBegin("body_text_length", r.Type.I32, 7), e.writeI32(this.body_text_length), e.writeFieldEnd()), null !== this.nsfw && void 0 !== this.nsfw && (e.writeFieldBegin("nsfw", r.Type.BOOL, 8), e.writeBool(this.nsfw), e.writeFieldEnd()), null !== this.spoiler && void 0 !== this.spoiler && (e.writeFieldBegin("spoiler", r.Type.BOOL, 9), e.writeBool(this.spoiler), e.writeFieldEnd()), null !== this.original_content && void 0 !== this.original_content && (e.writeFieldBegin("original_content", r.Type.BOOL, 10), e.writeBool(this.original_content), e.writeFieldEnd()), null !== this.flair && void 0 !== this.flair && (e.writeFieldBegin("flair", r.Type.STRING, 11), e.writeString(this.flair), e.writeFieldEnd()), null !== this.number_rte_images && void 0 !== this.number_rte_images && (e.writeFieldBegin("number_rte_images", r.Type.I32, 12), e.writeI32(this.number_rte_images), e.writeFieldEnd()), null !== this.number_rte_videos && void 0 !== this.number_rte_videos && (e.writeFieldBegin("number_rte_videos", r.Type.I32, 13), e.writeI32(this.number_rte_videos), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/post_requirement_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.PostRequirement = function(e) {
					this.title_required_strings = null, this.title_blacklisted_strings = null, this.title_text_min_length = null, this.title_text_max_length = null, this.body_restriction_policy = null, this.body_required_strings = null, this.body_blacklisted_strings = null, this.link_whitelisted_domains_length = null, this.link_blacklisted_domains_length = null, this.number_repost_frequency_days = null, this.require_post_flair = null, this.title_regex_patterns = null, this.body_regex_patterns = null, e && (void 0 !== e.title_required_strings && null !== e.title_required_strings && (this.title_required_strings = r.copyList(e.title_required_strings, [null])), void 0 !== e.title_blacklisted_strings && null !== e.title_blacklisted_strings && (this.title_blacklisted_strings = r.copyList(e.title_blacklisted_strings, [null])), void 0 !== e.title_text_min_length && null !== e.title_text_min_length && (this.title_text_min_length = e.title_text_min_length), void 0 !== e.title_text_max_length && null !== e.title_text_max_length && (this.title_text_max_length = e.title_text_max_length), void 0 !== e.body_restriction_policy && null !== e.body_restriction_policy && (this.body_restriction_policy = e.body_restriction_policy), void 0 !== e.body_required_strings && null !== e.body_required_strings && (this.body_required_strings = r.copyList(e.body_required_strings, [null])), void 0 !== e.body_blacklisted_strings && null !== e.body_blacklisted_strings && (this.body_blacklisted_strings = r.copyList(e.body_blacklisted_strings, [null])), void 0 !== e.link_whitelisted_domains_length && null !== e.link_whitelisted_domains_length && (this.link_whitelisted_domains_length = e.link_whitelisted_domains_length), void 0 !== e.link_blacklisted_domains_length && null !== e.link_blacklisted_domains_length && (this.link_blacklisted_domains_length = e.link_blacklisted_domains_length), void 0 !== e.number_repost_frequency_days && null !== e.number_repost_frequency_days && (this.number_repost_frequency_days = e.number_repost_frequency_days), void 0 !== e.require_post_flair && null !== e.require_post_flair && (this.require_post_flair = e.require_post_flair), void 0 !== e.title_regex_patterns && null !== e.title_regex_patterns && (this.title_regex_patterns = r.copyList(e.title_regex_patterns, [null])), void 0 !== e.body_regex_patterns && null !== e.body_regex_patterns && (this.body_regex_patterns = r.copyList(e.body_regex_patterns, [null])))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("PostRequirement"), null !== this.title_required_strings && void 0 !== this.title_required_strings) {
					for (var t in e.writeFieldBegin("title_required_strings", r.Type.LIST, 1), e.writeListBegin(r.Type.STRING, this.title_required_strings.length), this.title_required_strings) this.title_required_strings.hasOwnProperty(t) && (t = this.title_required_strings[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.title_blacklisted_strings && void 0 !== this.title_blacklisted_strings) {
					for (var i in e.writeFieldBegin("title_blacklisted_strings", r.Type.LIST, 2), e.writeListBegin(r.Type.STRING, this.title_blacklisted_strings.length), this.title_blacklisted_strings) this.title_blacklisted_strings.hasOwnProperty(i) && (i = this.title_blacklisted_strings[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.title_text_min_length && void 0 !== this.title_text_min_length && (e.writeFieldBegin("title_text_min_length", r.Type.I32, 3), e.writeI32(this.title_text_min_length), e.writeFieldEnd()), null !== this.title_text_max_length && void 0 !== this.title_text_max_length && (e.writeFieldBegin("title_text_max_length", r.Type.I32, 4), e.writeI32(this.title_text_max_length), e.writeFieldEnd()), null !== this.body_restriction_policy && void 0 !== this.body_restriction_policy && (e.writeFieldBegin("body_restriction_policy", r.Type.STRING, 5), e.writeString(this.body_restriction_policy), e.writeFieldEnd()), null !== this.body_required_strings && void 0 !== this.body_required_strings) {
					for (var n in e.writeFieldBegin("body_required_strings", r.Type.LIST, 6), e.writeListBegin(r.Type.STRING, this.body_required_strings.length), this.body_required_strings) this.body_required_strings.hasOwnProperty(n) && (n = this.body_required_strings[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.body_blacklisted_strings && void 0 !== this.body_blacklisted_strings) {
					for (var s in e.writeFieldBegin("body_blacklisted_strings", r.Type.LIST, 7), e.writeListBegin(r.Type.STRING, this.body_blacklisted_strings.length), this.body_blacklisted_strings) this.body_blacklisted_strings.hasOwnProperty(s) && (s = this.body_blacklisted_strings[s], e.writeString(s));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.link_whitelisted_domains_length && void 0 !== this.link_whitelisted_domains_length && (e.writeFieldBegin("link_whitelisted_domains_length", r.Type.I32, 8), e.writeI32(this.link_whitelisted_domains_length), e.writeFieldEnd()), null !== this.link_blacklisted_domains_length && void 0 !== this.link_blacklisted_domains_length && (e.writeFieldBegin("link_blacklisted_domains_length", r.Type.I32, 9), e.writeI32(this.link_blacklisted_domains_length), e.writeFieldEnd()), null !== this.number_repost_frequency_days && void 0 !== this.number_repost_frequency_days && (e.writeFieldBegin("number_repost_frequency_days", r.Type.I32, 10), e.writeI32(this.number_repost_frequency_days), e.writeFieldEnd()), null !== this.require_post_flair && void 0 !== this.require_post_flair && (e.writeFieldBegin("require_post_flair", r.Type.BOOL, 11), e.writeBool(this.require_post_flair), e.writeFieldEnd()), null !== this.title_regex_patterns && void 0 !== this.title_regex_patterns) {
					for (var o in e.writeFieldBegin("title_regex_patterns", r.Type.LIST, 12), e.writeListBegin(r.Type.STRING, this.title_regex_patterns.length), this.title_regex_patterns) this.title_regex_patterns.hasOwnProperty(o) && (o = this.title_regex_patterns[o], e.writeString(o));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.body_regex_patterns && void 0 !== this.body_regex_patterns) {
					for (var d in e.writeFieldBegin("body_regex_patterns", r.Type.LIST, 13), e.writeListBegin(r.Type.STRING, this.body_regex_patterns.length), this.body_regex_patterns) this.body_regex_patterns.hasOwnProperty(d) && (d = this.body_regex_patterns[d], e.writeString(d));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/postflair_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.PostFlair = function(e) {
					this.id = null, this.title = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("PostFlair"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/powerups_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Powerups = function(e) {
					this.subscription_id = null, this.count = null, this.free_count = null, this.paid_count = null, this.tier = null, this.current_subreddit_powerups = null, this.is_grace_period = null, this.automatic = null, e && (void 0 !== e.subscription_id && null !== e.subscription_id && (this.subscription_id = e.subscription_id), void 0 !== e.count && null !== e.count && (this.count = e.count), void 0 !== e.free_count && null !== e.free_count && (this.free_count = e.free_count), void 0 !== e.paid_count && null !== e.paid_count && (this.paid_count = e.paid_count), void 0 !== e.tier && null !== e.tier && (this.tier = e.tier), void 0 !== e.current_subreddit_powerups && null !== e.current_subreddit_powerups && (this.current_subreddit_powerups = e.current_subreddit_powerups), void 0 !== e.is_grace_period && null !== e.is_grace_period && (this.is_grace_period = e.is_grace_period), void 0 !== e.automatic && null !== e.automatic && (this.automatic = e.automatic))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Powerups"), null !== this.subscription_id && void 0 !== this.subscription_id && (e.writeFieldBegin("subscription_id", r.Type.STRING, 1), e.writeString(this.subscription_id), e.writeFieldEnd()), null !== this.count && void 0 !== this.count && (e.writeFieldBegin("count", r.Type.I32, 2), e.writeI32(this.count), e.writeFieldEnd()), null !== this.free_count && void 0 !== this.free_count && (e.writeFieldBegin("free_count", r.Type.I32, 3), e.writeI32(this.free_count), e.writeFieldEnd()), null !== this.paid_count && void 0 !== this.paid_count && (e.writeFieldBegin("paid_count", r.Type.I32, 4), e.writeI32(this.paid_count), e.writeFieldEnd()), null !== this.tier && void 0 !== this.tier && (e.writeFieldBegin("tier", r.Type.I32, 5), e.writeI32(this.tier), e.writeFieldEnd()), null !== this.current_subreddit_powerups && void 0 !== this.current_subreddit_powerups && (e.writeFieldBegin("current_subreddit_powerups", r.Type.I32, 6), e.writeI32(this.current_subreddit_powerups), e.writeFieldEnd()), null !== this.is_grace_period && void 0 !== this.is_grace_period && (e.writeFieldBegin("is_grace_period", r.Type.BOOL, 7), e.writeBool(this.is_grace_period), e.writeFieldEnd()), null !== this.automatic && void 0 !== this.automatic && (e.writeFieldBegin("automatic", r.Type.BOOL, 8), e.writeBool(this.automatic), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/pwa_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.PWA = function(e) {
					this.installable = null, this.installed = null, this.install_timestamp = null, e && (void 0 !== e.installable && null !== e.installable && (this.installable = e.installable), void 0 !== e.installed && null !== e.installed && (this.installed = e.installed), void 0 !== e.install_timestamp && null !== e.install_timestamp && (this.install_timestamp = e.install_timestamp))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("PWA"), null !== this.installable && void 0 !== this.installable && (e.writeFieldBegin("installable", r.Type.BOOL, 1), e.writeBool(this.installable), e.writeFieldEnd()), null !== this.installed && void 0 !== this.installed && (e.writeFieldBegin("installed", r.Type.BOOL, 2), e.writeBool(this.installed), e.writeFieldEnd()), null !== this.install_timestamp && void 0 !== this.install_timestamp && (e.writeFieldBegin("install_timestamp", r.Type.I64, 3), e.writeI64(this.install_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/relevance_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), e.exports = {}, e.exports.RelevanceModel = function(e) {
					this.number_max_recommendations = null, this.feature_blob = null, this.result_blob = null, this.result_duration = null, this.version = null, this.family = null, this.identifier = null, e && (void 0 !== e.number_max_recommendations && null !== e.number_max_recommendations && (this.number_max_recommendations = e.number_max_recommendations), void 0 !== e.feature_blob && null !== e.feature_blob && (this.feature_blob = e.feature_blob), void 0 !== e.result_blob && null !== e.result_blob && (this.result_blob = e.result_blob), void 0 !== e.result_duration && null !== e.result_duration && (this.result_duration = e.result_duration), void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.family && null !== e.family && (this.family = e.family), void 0 !== e.identifier && null !== e.identifier && (this.identifier = e.identifier))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("RelevanceModel"), null !== this.number_max_recommendations && void 0 !== this.number_max_recommendations && (e.writeFieldBegin("number_max_recommendations", r.Type.I32, 3), e.writeI32(this.number_max_recommendations), e.writeFieldEnd()), null !== this.feature_blob && void 0 !== this.feature_blob && (e.writeFieldBegin("feature_blob", r.Type.STRING, 5), e.writeString(this.feature_blob), e.writeFieldEnd()), null !== this.result_blob && void 0 !== this.result_blob && (e.writeFieldBegin("result_blob", r.Type.STRING, 6), e.writeString(this.result_blob), e.writeFieldEnd()), null !== this.result_duration && void 0 !== this.result_duration && (e.writeFieldBegin("result_duration", r.Type.I64, 7), e.writeI64(this.result_duration), e.writeFieldEnd()), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", r.Type.STRING, 9), e.writeString(this.version), e.writeFieldEnd()), null !== this.family && void 0 !== this.family && (e.writeFieldBegin("family", r.Type.STRING, 10), e.writeString(this.family), e.writeFieldEnd()), null !== this.identifier && void 0 !== this.identifier && (e.writeFieldBegin("identifier", r.Type.STRING, 11), e.writeString(this.identifier), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/report_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Report = function(e) {
					this.reason_code = null, this.id = null, e && (void 0 !== e.reason_code && null !== e.reason_code && (this.reason_code = e.reason_code), void 0 !== e.id && null !== e.id && (this.id = e.id))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Report"), null !== this.reason_code && void 0 !== this.reason_code && (e.writeFieldBegin("reason_code", r.Type.STRING, 1), e.writeString(this.reason_code), e.writeFieldEnd()), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 2), e.writeString(this.id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/request_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Request = function(e) {
					this.user_agent = null, this.domain = null, this.base_url = null, this.client_ip = null, this.known_bot = null, this.header_signature = null, this.cookies_present = null, this.accept_encoding = null, this.accept_language = null, this.reddaid = null, this.google_aaid = null, this.amazon_aid = null, this.apple_ios_aid = null, this.isp_organization = null, this.accept_language_header = null, this.parameters = null, this.canonical_url = null, this.loginbot = null, this.robots_meta_tag = null, e && (void 0 !== e.user_agent && null !== e.user_agent && (this.user_agent = e.user_agent), void 0 !== e.domain && null !== e.domain && (this.domain = e.domain), void 0 !== e.base_url && null !== e.base_url && (this.base_url = e.base_url), void 0 !== e.client_ip && null !== e.client_ip && (this.client_ip = e.client_ip), void 0 !== e.known_bot && null !== e.known_bot && (this.known_bot = e.known_bot), void 0 !== e.header_signature && null !== e.header_signature && (this.header_signature = e.header_signature), void 0 !== e.cookies_present && null !== e.cookies_present && (this.cookies_present = e.cookies_present), void 0 !== e.accept_encoding && null !== e.accept_encoding && (this.accept_encoding = e.accept_encoding), void 0 !== e.accept_language && null !== e.accept_language && (this.accept_language = e.accept_language), void 0 !== e.reddaid && null !== e.reddaid && (this.reddaid = e.reddaid), void 0 !== e.google_aaid && null !== e.google_aaid && (this.google_aaid = e.google_aaid), void 0 !== e.amazon_aid && null !== e.amazon_aid && (this.amazon_aid = e.amazon_aid), void 0 !== e.apple_ios_aid && null !== e.apple_ios_aid && (this.apple_ios_aid = e.apple_ios_aid), void 0 !== e.isp_organization && null !== e.isp_organization && (this.isp_organization = e.isp_organization), void 0 !== e.accept_language_header && null !== e.accept_language_header && (this.accept_language_header = e.accept_language_header), void 0 !== e.parameters && null !== e.parameters && (this.parameters = e.parameters), void 0 !== e.canonical_url && null !== e.canonical_url && (this.canonical_url = e.canonical_url), void 0 !== e.loginbot && null !== e.loginbot && (this.loginbot = e.loginbot), void 0 !== e.robots_meta_tag && null !== e.robots_meta_tag && (this.robots_meta_tag = e.robots_meta_tag))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Request"), null !== this.user_agent && void 0 !== this.user_agent && (e.writeFieldBegin("user_agent", r.Type.STRING, 1), e.writeString(this.user_agent), e.writeFieldEnd()), null !== this.domain && void 0 !== this.domain && (e.writeFieldBegin("domain", r.Type.STRING, 2), e.writeString(this.domain), e.writeFieldEnd()), null !== this.base_url && void 0 !== this.base_url && (e.writeFieldBegin("base_url", r.Type.STRING, 3), e.writeString(this.base_url), e.writeFieldEnd()), null !== this.client_ip && void 0 !== this.client_ip && (e.writeFieldBegin("client_ip", r.Type.STRING, 4), e.writeString(this.client_ip), e.writeFieldEnd()), null !== this.known_bot && void 0 !== this.known_bot && (e.writeFieldBegin("known_bot", r.Type.STRING, 5), e.writeString(this.known_bot), e.writeFieldEnd()), null !== this.header_signature && void 0 !== this.header_signature && (e.writeFieldBegin("header_signature", r.Type.STRING, 6), e.writeString(this.header_signature), e.writeFieldEnd()), null !== this.cookies_present && void 0 !== this.cookies_present && (e.writeFieldBegin("cookies_present", r.Type.BOOL, 7), e.writeBool(this.cookies_present), e.writeFieldEnd()), null !== this.accept_encoding && void 0 !== this.accept_encoding && (e.writeFieldBegin("accept_encoding", r.Type.BOOL, 8), e.writeBool(this.accept_encoding), e.writeFieldEnd()), null !== this.accept_language && void 0 !== this.accept_language && (e.writeFieldBegin("accept_language", r.Type.BOOL, 9), e.writeBool(this.accept_language), e.writeFieldEnd()), null !== this.reddaid && void 0 !== this.reddaid && (e.writeFieldBegin("reddaid", r.Type.STRING, 10), e.writeString(this.reddaid), e.writeFieldEnd()), null !== this.google_aaid && void 0 !== this.google_aaid && (e.writeFieldBegin("google_aaid", r.Type.STRING, 11), e.writeString(this.google_aaid), e.writeFieldEnd()), null !== this.amazon_aid && void 0 !== this.amazon_aid && (e.writeFieldBegin("amazon_aid", r.Type.STRING, 12), e.writeString(this.amazon_aid), e.writeFieldEnd()), null !== this.apple_ios_aid && void 0 !== this.apple_ios_aid && (e.writeFieldBegin("apple_ios_aid", r.Type.STRING, 13), e.writeString(this.apple_ios_aid), e.writeFieldEnd()), null !== this.isp_organization && void 0 !== this.isp_organization && (e.writeFieldBegin("isp_organization", r.Type.STRING, 14), e.writeString(this.isp_organization), e.writeFieldEnd()), null !== this.accept_language_header && void 0 !== this.accept_language_header && (e.writeFieldBegin("accept_language_header", r.Type.STRING, 15), e.writeString(this.accept_language_header), e.writeFieldEnd()), null !== this.parameters && void 0 !== this.parameters && (e.writeFieldBegin("parameters", r.Type.STRING, 16), e.writeString(this.parameters), e.writeFieldEnd()), null !== this.canonical_url && void 0 !== this.canonical_url && (e.writeFieldBegin("canonical_url", r.Type.STRING, 17), e.writeString(this.canonical_url), e.writeFieldEnd()), null !== this.loginbot && void 0 !== this.loginbot && (e.writeFieldBegin("loginbot", r.Type.BOOL, 18), e.writeBool(this.loginbot), e.writeFieldEnd()), null !== this.robots_meta_tag && void 0 !== this.robots_meta_tag && (e.writeFieldBegin("robots_meta_tag", r.Type.STRING, 19), e.writeString(this.robots_meta_tag), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Referrer = function(e) {
				this.domain = null, this.url = null, this.element = null, e && (void 0 !== e.domain && null !== e.domain && (this.domain = e.domain), void 0 !== e.url && null !== e.url && (this.url = e.url), void 0 !== e.element && null !== e.element && (this.element = e.element))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Referrer"), null !== this.domain && void 0 !== this.domain && (e.writeFieldBegin("domain", r.Type.STRING, 1), e.writeString(this.domain), e.writeFieldEnd()), null !== this.url && void 0 !== this.url && (e.writeFieldBegin("url", r.Type.STRING, 2), e.writeString(this.url), e.writeFieldEnd()), null !== this.element && void 0 !== this.element && (e.writeFieldBegin("element", r.Type.STRING, 3), e.writeString(this.element), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.Oauth = function(e) {
				this.client_app_type = null, this.client_name = null, this.client_id = null, this.scopes = null, e && (void 0 !== e.client_app_type && null !== e.client_app_type && (this.client_app_type = e.client_app_type), void 0 !== e.client_name && null !== e.client_name && (this.client_name = e.client_name), void 0 !== e.client_id && null !== e.client_id && (this.client_id = e.client_id), void 0 !== e.scopes && null !== e.scopes && (this.scopes = r.copyList(e.scopes, [null])))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				if (e.writeStructBegin("Oauth"), null !== this.client_app_type && void 0 !== this.client_app_type && (e.writeFieldBegin("client_app_type", r.Type.STRING, 1), e.writeString(this.client_app_type), e.writeFieldEnd()), null !== this.client_name && void 0 !== this.client_name && (e.writeFieldBegin("client_name", r.Type.STRING, 2), e.writeString(this.client_name), e.writeFieldEnd()), null !== this.client_id && void 0 !== this.client_id && (e.writeFieldBegin("client_id", r.Type.STRING, 3), e.writeString(this.client_id), e.writeFieldEnd()), null !== this.scopes && void 0 !== this.scopes) {
					for (var t in e.writeFieldBegin("scopes", r.Type.LIST, 4), e.writeListBegin(r.Type.STRING, this.scopes.length), this.scopes) this.scopes.hasOwnProperty(t) && (t = this.scopes[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.Api = function(e) {
				this.name = null, this.address = null, this.endpoint = null, e && (void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.address && null !== e.address && (this.address = e.address), void 0 !== e.endpoint && null !== e.endpoint && (this.endpoint = e.endpoint))
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("Api"), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 1), e.writeString(this.name), e.writeFieldEnd()), null !== this.address && void 0 !== this.address && (e.writeFieldBegin("address", r.Type.STRING, 2), e.writeString(this.address), e.writeFieldEnd()), null !== this.endpoint && void 0 !== this.endpoint && (e.writeFieldBegin("endpoint", r.Type.STRING, 3), e.writeString(this.endpoint), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var a = e.exports.ApiResponse = function(e) {
				this.response_code = null, this.error_name = null, this.error = null, this.content = null, e && (void 0 !== e.response_code && null !== e.response_code && (this.response_code = e.response_code), void 0 !== e.error_name && null !== e.error_name && (this.error_name = e.error_name), void 0 !== e.error && null !== e.error && (this.error = e.error), void 0 !== e.content && null !== e.content && (this.content = e.content))
			};
			a.prototype = {}, a.prototype.write = function(e) {
				e.writeStructBegin("ApiResponse"), null !== this.response_code && void 0 !== this.response_code && (e.writeFieldBegin("response_code", r.Type.I32, 1), e.writeI32(this.response_code), e.writeFieldEnd()), null !== this.error_name && void 0 !== this.error_name && (e.writeFieldBegin("error_name", r.Type.STRING, 2), e.writeString(this.error_name), e.writeFieldEnd()), null !== this.error && void 0 !== this.error && (e.writeFieldBegin("error", r.Type.STRING, 3), e.writeString(this.error), e.writeFieldEnd()), null !== this.content && void 0 !== this.content && (e.writeFieldBegin("content", r.Type.STRING, 4), e.writeString(this.content), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var u = e.exports.Response = function(e) {
				this.last_modified_timestamp = null, this.code = null, e && (void 0 !== e.last_modified_timestamp && null !== e.last_modified_timestamp && (this.last_modified_timestamp = e.last_modified_timestamp), void 0 !== e.code && null !== e.code && (this.code = e.code))
			};
			u.prototype = {}, u.prototype.write = function(e) {
				e.writeStructBegin("Response"), null !== this.last_modified_timestamp && void 0 !== this.last_modified_timestamp && (e.writeFieldBegin("last_modified_timestamp", r.Type.I64, 1), e.writeI64(this.last_modified_timestamp), e.writeFieldEnd()), null !== this.code && void 0 !== this.code && (e.writeFieldBegin("code", r.Type.I32, 2), e.writeI32(this.code), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var c = e.exports.Zipkin = function(e) {
				this.trace_id = null, e && void 0 !== e.trace_id && null !== e.trace_id && (this.trace_id = e.trace_id)
			};
			c.prototype = {}, c.prototype.write = function(e) {
				e.writeStructBegin("Zipkin"), null !== this.trace_id && void 0 !== this.trace_id && (e.writeFieldBegin("trace_id", r.Type.STRING, 1), e.writeString(this.trace_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/res_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.RES = function(e) {
					this.version = null, this.night_mode = null, e && (void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.night_mode && null !== e.night_mode && (this.night_mode = e.night_mode))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("RES"), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", r.Type.STRING, 1), e.writeString(this.version), e.writeFieldEnd()), null !== this.night_mode && void 0 !== this.night_mode && (e.writeFieldBegin("night_mode", r.Type.BOOL, 2), e.writeBool(this.night_mode), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/scheduled_post_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ScheduledPost = function(e) {
					this.id = null, this.creator_user_id = null, this.last_modified_user_id = null, this.created_timestamp = null, this.submission_timestamp = null, this.timezone = null, this.is_recurring = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.creator_user_id && null !== e.creator_user_id && (this.creator_user_id = e.creator_user_id), void 0 !== e.last_modified_user_id && null !== e.last_modified_user_id && (this.last_modified_user_id = e.last_modified_user_id), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.submission_timestamp && null !== e.submission_timestamp && (this.submission_timestamp = e.submission_timestamp), void 0 !== e.timezone && null !== e.timezone && (this.timezone = e.timezone), void 0 !== e.is_recurring && null !== e.is_recurring && (this.is_recurring = e.is_recurring))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("ScheduledPost"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.creator_user_id && void 0 !== this.creator_user_id && (e.writeFieldBegin("creator_user_id", r.Type.STRING, 2), e.writeString(this.creator_user_id), e.writeFieldEnd()), null !== this.last_modified_user_id && void 0 !== this.last_modified_user_id && (e.writeFieldBegin("last_modified_user_id", r.Type.STRING, 3), e.writeString(this.last_modified_user_id), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 4), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.submission_timestamp && void 0 !== this.submission_timestamp && (e.writeFieldBegin("submission_timestamp", r.Type.I64, 5), e.writeI64(this.submission_timestamp), e.writeFieldEnd()), null !== this.timezone && void 0 !== this.timezone && (e.writeFieldBegin("timezone", r.Type.STRING, 6), e.writeString(this.timezone), e.writeFieldEnd()), null !== this.is_recurring && void 0 !== this.is_recurring && (e.writeFieldBegin("is_recurring", r.Type.BOOL, 7), e.writeBool(this.is_recurring), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/search_types.js": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.array.sort.js");
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Search = function(e) {
					this.query = null, this.sort = null, this.range = null, this.typeahead_active = null, this.subreddit_id = null, this.subreddit_name = null, this.post_flair_name = null, this.meta_flair_id = null, this.meta_flair_name = null, this.origin_page_type = null, this.origin_element = null, this.number_links = null, this.links = null, this.nsfw_reason = null, this.structure_type = null, this.query_id = null, this.subreddit_ids = null, this.number_subreddits = null, e && (void 0 !== e.query && null !== e.query && (this.query = e.query), void 0 !== e.sort && null !== e.sort && (this.sort = e.sort), void 0 !== e.range && null !== e.range && (this.range = e.range), void 0 !== e.typeahead_active && null !== e.typeahead_active && (this.typeahead_active = e.typeahead_active), void 0 !== e.subreddit_id && null !== e.subreddit_id && (this.subreddit_id = e.subreddit_id), void 0 !== e.subreddit_name && null !== e.subreddit_name && (this.subreddit_name = e.subreddit_name), void 0 !== e.post_flair_name && null !== e.post_flair_name && (this.post_flair_name = e.post_flair_name), void 0 !== e.meta_flair_id && null !== e.meta_flair_id && (this.meta_flair_id = e.meta_flair_id), void 0 !== e.meta_flair_name && null !== e.meta_flair_name && (this.meta_flair_name = e.meta_flair_name), void 0 !== e.origin_page_type && null !== e.origin_page_type && (this.origin_page_type = e.origin_page_type), void 0 !== e.origin_element && null !== e.origin_element && (this.origin_element = e.origin_element), void 0 !== e.number_links && null !== e.number_links && (this.number_links = e.number_links), void 0 !== e.links && null !== e.links && (this.links = r.copyList(e.links, [null])), void 0 !== e.nsfw_reason && null !== e.nsfw_reason && (this.nsfw_reason = e.nsfw_reason), void 0 !== e.structure_type && null !== e.structure_type && (this.structure_type = e.structure_type), void 0 !== e.query_id && null !== e.query_id && (this.query_id = e.query_id), void 0 !== e.subreddit_ids && null !== e.subreddit_ids && (this.subreddit_ids = r.copyList(e.subreddit_ids, [null])), void 0 !== e.number_subreddits && null !== e.number_subreddits && (this.number_subreddits = e.number_subreddits))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Search"), null !== this.query && void 0 !== this.query && (e.writeFieldBegin("query", r.Type.STRING, 1), e.writeString(this.query), e.writeFieldEnd()), null !== this.sort && void 0 !== this.sort && (e.writeFieldBegin("sort", r.Type.STRING, 2), e.writeString(this.sort), e.writeFieldEnd()), null !== this.range && void 0 !== this.range && (e.writeFieldBegin("range", r.Type.STRING, 3), e.writeString(this.range), e.writeFieldEnd()), null !== this.typeahead_active && void 0 !== this.typeahead_active && (e.writeFieldBegin("typeahead_active", r.Type.BOOL, 4), e.writeBool(this.typeahead_active), e.writeFieldEnd()), null !== this.subreddit_id && void 0 !== this.subreddit_id && (e.writeFieldBegin("subreddit_id", r.Type.STRING, 5), e.writeString(this.subreddit_id), e.writeFieldEnd()), null !== this.subreddit_name && void 0 !== this.subreddit_name && (e.writeFieldBegin("subreddit_name", r.Type.STRING, 6), e.writeString(this.subreddit_name), e.writeFieldEnd()), null !== this.post_flair_name && void 0 !== this.post_flair_name && (e.writeFieldBegin("post_flair_name", r.Type.STRING, 7), e.writeString(this.post_flair_name), e.writeFieldEnd()), null !== this.meta_flair_id && void 0 !== this.meta_flair_id && (e.writeFieldBegin("meta_flair_id", r.Type.STRING, 8), e.writeString(this.meta_flair_id), e.writeFieldEnd()), null !== this.meta_flair_name && void 0 !== this.meta_flair_name && (e.writeFieldBegin("meta_flair_name", r.Type.STRING, 9), e.writeString(this.meta_flair_name), e.writeFieldEnd()), null !== this.origin_page_type && void 0 !== this.origin_page_type && (e.writeFieldBegin("origin_page_type", r.Type.STRING, 10), e.writeString(this.origin_page_type), e.writeFieldEnd()), null !== this.origin_element && void 0 !== this.origin_element && (e.writeFieldBegin("origin_element", r.Type.STRING, 11), e.writeString(this.origin_element), e.writeFieldEnd()), null !== this.number_links && void 0 !== this.number_links && (e.writeFieldBegin("number_links", r.Type.I64, 12), e.writeI64(this.number_links), e.writeFieldEnd()), null !== this.links && void 0 !== this.links) {
					for (var t in e.writeFieldBegin("links", r.Type.LIST, 13), e.writeListBegin(r.Type.STRING, this.links.length), this.links) this.links.hasOwnProperty(t) && (t = this.links[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.nsfw_reason && void 0 !== this.nsfw_reason && (e.writeFieldBegin("nsfw_reason", r.Type.STRING, 14), e.writeString(this.nsfw_reason), e.writeFieldEnd()), null !== this.structure_type && void 0 !== this.structure_type && (e.writeFieldBegin("structure_type", r.Type.STRING, 15), e.writeString(this.structure_type), e.writeFieldEnd()), null !== this.query_id && void 0 !== this.query_id && (e.writeFieldBegin("query_id", r.Type.STRING, 16), e.writeString(this.query_id), e.writeFieldEnd()), null !== this.subreddit_ids && void 0 !== this.subreddit_ids) {
					for (var i in e.writeFieldBegin("subreddit_ids", r.Type.LIST, 17), e.writeListBegin(r.Type.STRING, this.subreddit_ids.length), this.subreddit_ids) this.subreddit_ids.hasOwnProperty(i) && (i = this.subreddit_ids[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_subreddits && void 0 !== this.number_subreddits && (e.writeFieldBegin("number_subreddits", r.Type.I64, 18), e.writeI64(this.number_subreddits), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/security_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.TwoFactorAuth = function(e) {
					this.device_previous_remaining_backup_codes = null, this.device_name = null, this.device_exists = null, this.device_algorithm = null, this.device_backup_codes_remaining = null, this.backup_code_used = null, this.otp_embedded_in_password = null, e && (void 0 !== e.device_previous_remaining_backup_codes && null !== e.device_previous_remaining_backup_codes && (this.device_previous_remaining_backup_codes = e.device_previous_remaining_backup_codes), void 0 !== e.device_name && null !== e.device_name && (this.device_name = e.device_name), void 0 !== e.device_exists && null !== e.device_exists && (this.device_exists = e.device_exists), void 0 !== e.device_algorithm && null !== e.device_algorithm && (this.device_algorithm = e.device_algorithm), void 0 !== e.device_backup_codes_remaining && null !== e.device_backup_codes_remaining && (this.device_backup_codes_remaining = e.device_backup_codes_remaining), void 0 !== e.backup_code_used && null !== e.backup_code_used && (this.backup_code_used = e.backup_code_used), void 0 !== e.otp_embedded_in_password && null !== e.otp_embedded_in_password && (this.otp_embedded_in_password = e.otp_embedded_in_password))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("TwoFactorAuth"), null !== this.device_previous_remaining_backup_codes && void 0 !== this.device_previous_remaining_backup_codes && (e.writeFieldBegin("device_previous_remaining_backup_codes", r.Type.I64, 1), e.writeI64(this.device_previous_remaining_backup_codes), e.writeFieldEnd()), null !== this.device_name && void 0 !== this.device_name && (e.writeFieldBegin("device_name", r.Type.STRING, 2), e.writeString(this.device_name), e.writeFieldEnd()), null !== this.device_exists && void 0 !== this.device_exists && (e.writeFieldBegin("device_exists", r.Type.BOOL, 3), e.writeBool(this.device_exists), e.writeFieldEnd()), null !== this.device_algorithm && void 0 !== this.device_algorithm && (e.writeFieldBegin("device_algorithm", r.Type.STRING, 4), e.writeString(this.device_algorithm), e.writeFieldEnd()), null !== this.device_backup_codes_remaining && void 0 !== this.device_backup_codes_remaining && (e.writeFieldBegin("device_backup_codes_remaining", r.Type.I32, 5), e.writeI32(this.device_backup_codes_remaining), e.writeFieldEnd()), null !== this.backup_code_used && void 0 !== this.backup_code_used && (e.writeFieldBegin("backup_code_used", r.Type.BOOL, 6), e.writeBool(this.backup_code_used), e.writeFieldEnd()), null !== this.otp_embedded_in_password && void 0 !== this.otp_embedded_in_password && (e.writeFieldBegin("otp_embedded_in_password", r.Type.BOOL, 7), e.writeBool(this.otp_embedded_in_password), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/seo_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.SEO = function(e) {
					this.internal_link_url = null, e && void 0 !== e.internal_link_url && null !== e.internal_link_url && (this.internal_link_url = e.internal_link_url)
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("SEO"), null !== this.internal_link_url && void 0 !== this.internal_link_url && (e.writeFieldBegin("internal_link_url", r.Type.STRING, 1), e.writeString(this.internal_link_url), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/session_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Session = function(e) {
					this.id = null, this.referrer_url = null, this.referrer_domain = null, this.version = null, this.type = null, this.created_timestamp = null, this.anonymous_browsing_mode = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.referrer_url && null !== e.referrer_url && (this.referrer_url = e.referrer_url), void 0 !== e.referrer_domain && null !== e.referrer_domain && (this.referrer_domain = e.referrer_domain), void 0 !== e.version && null !== e.version && (this.version = e.version), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.anonymous_browsing_mode && null !== e.anonymous_browsing_mode && (this.anonymous_browsing_mode = e.anonymous_browsing_mode))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Session"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.referrer_url && void 0 !== this.referrer_url && (e.writeFieldBegin("referrer_url", r.Type.STRING, 2), e.writeString(this.referrer_url), e.writeFieldEnd()), null !== this.referrer_domain && void 0 !== this.referrer_domain && (e.writeFieldBegin("referrer_domain", r.Type.STRING, 3), e.writeString(this.referrer_domain), e.writeFieldEnd()), null !== this.version && void 0 !== this.version && (e.writeFieldBegin("version", r.Type.STRING, 4), e.writeString(this.version), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 5), e.writeString(this.type), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 6), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.anonymous_browsing_mode && void 0 !== this.anonymous_browsing_mode && (e.writeFieldBegin("anonymous_browsing_mode", r.Type.BOOL, 7), e.writeBool(this.anonymous_browsing_mode), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/setting_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Setting = function(e) {
					if (this.value = null, this.old_value = null, this.scope = null, e) {
						if (void 0 === e.value || null === e.value) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field value is unset!");
						this.value = e.value, void 0 !== e.old_value && null !== e.old_value && (this.old_value = e.old_value), void 0 !== e.scope && null !== e.scope && (this.scope = e.scope)
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Setting"), null !== this.value && void 0 !== this.value && (e.writeFieldBegin("value", r.Type.STRING, 1), e.writeString(this.value), e.writeFieldEnd()), null !== this.old_value && void 0 !== this.old_value && (e.writeFieldBegin("old_value", r.Type.STRING, 2), e.writeString(this.old_value), e.writeFieldEnd()), null !== this.scope && void 0 !== this.scope && (e.writeFieldBegin("scope", r.Type.STRING, 3), e.writeString(this.scope), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/spamurai_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.SpamuraiAction = function(e) {
					this.task_name = null, this.task_version = null, this.thing_id = null, this.is_unapprovable = null, this.is_ban_all = null, this.is_mark_for_alt_tracking = null, this.is_unban_all = null, this.channel = null, e && (void 0 !== e.task_name && null !== e.task_name && (this.task_name = e.task_name), void 0 !== e.task_version && null !== e.task_version && (this.task_version = e.task_version), void 0 !== e.thing_id && null !== e.thing_id && (this.thing_id = e.thing_id), void 0 !== e.is_unapprovable && null !== e.is_unapprovable && (this.is_unapprovable = e.is_unapprovable), void 0 !== e.is_ban_all && null !== e.is_ban_all && (this.is_ban_all = e.is_ban_all), void 0 !== e.is_mark_for_alt_tracking && null !== e.is_mark_for_alt_tracking && (this.is_mark_for_alt_tracking = e.is_mark_for_alt_tracking), void 0 !== e.is_unban_all && null !== e.is_unban_all && (this.is_unban_all = e.is_unban_all), void 0 !== e.channel && null !== e.channel && (this.channel = e.channel))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("SpamuraiAction"), null !== this.task_name && void 0 !== this.task_name && (e.writeFieldBegin("task_name", r.Type.STRING, 1), e.writeString(this.task_name), e.writeFieldEnd()), null !== this.task_version && void 0 !== this.task_version && (e.writeFieldBegin("task_version", r.Type.STRING, 2), e.writeString(this.task_version), e.writeFieldEnd()), null !== this.thing_id && void 0 !== this.thing_id && (e.writeFieldBegin("thing_id", r.Type.STRING, 3), e.writeString(this.thing_id), e.writeFieldEnd()), null !== this.is_unapprovable && void 0 !== this.is_unapprovable && (e.writeFieldBegin("is_unapprovable", r.Type.BOOL, 4), e.writeBool(this.is_unapprovable), e.writeFieldEnd()), null !== this.is_ban_all && void 0 !== this.is_ban_all && (e.writeFieldBegin("is_ban_all", r.Type.BOOL, 5), e.writeBool(this.is_ban_all), e.writeFieldEnd()), null !== this.is_mark_for_alt_tracking && void 0 !== this.is_mark_for_alt_tracking && (e.writeFieldBegin("is_mark_for_alt_tracking", r.Type.BOOL, 6), e.writeBool(this.is_mark_for_alt_tracking), e.writeFieldEnd()), null !== this.is_unban_all && void 0 !== this.is_unban_all && (e.writeFieldBegin("is_unban_all", r.Type.BOOL, 7), e.writeBool(this.is_unban_all), e.writeFieldEnd()), null !== this.channel && void 0 !== this.channel && (e.writeFieldBegin("channel", r.Type.STRING, 8), e.writeString(this.channel), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/subreddit_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Subreddit = function(e) {
					this.id = null, this.name = null, this.category_name = null, this.whitelist_status = null, this.access_type = null, this.quarantined = null, this.nsfw = null, this.topic_tag_ids = null, this.topic_tag_contents = null, this.topic_tag_types = null, this.number_coins = null, this.public_description = null, this.post_difficulty_rating = null, this.topic_tag_primary_id = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.category_name && null !== e.category_name && (this.category_name = e.category_name), void 0 !== e.whitelist_status && null !== e.whitelist_status && (this.whitelist_status = e.whitelist_status), void 0 !== e.access_type && null !== e.access_type && (this.access_type = e.access_type), void 0 !== e.quarantined && null !== e.quarantined && (this.quarantined = e.quarantined), void 0 !== e.nsfw && null !== e.nsfw && (this.nsfw = e.nsfw), void 0 !== e.topic_tag_ids && null !== e.topic_tag_ids && (this.topic_tag_ids = r.copyList(e.topic_tag_ids, [null])), void 0 !== e.topic_tag_contents && null !== e.topic_tag_contents && (this.topic_tag_contents = r.copyList(e.topic_tag_contents, [null])), void 0 !== e.topic_tag_types && null !== e.topic_tag_types && (this.topic_tag_types = r.copyList(e.topic_tag_types, [null])), void 0 !== e.number_coins && null !== e.number_coins && (this.number_coins = e.number_coins), void 0 !== e.public_description && null !== e.public_description && (this.public_description = e.public_description), void 0 !== e.post_difficulty_rating && null !== e.post_difficulty_rating && (this.post_difficulty_rating = e.post_difficulty_rating), void 0 !== e.topic_tag_primary_id && null !== e.topic_tag_primary_id && (this.topic_tag_primary_id = e.topic_tag_primary_id))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Subreddit"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.category_name && void 0 !== this.category_name && (e.writeFieldBegin("category_name", r.Type.STRING, 3), e.writeString(this.category_name), e.writeFieldEnd()), null !== this.whitelist_status && void 0 !== this.whitelist_status && (e.writeFieldBegin("whitelist_status", r.Type.STRING, 4), e.writeString(this.whitelist_status), e.writeFieldEnd()), null !== this.access_type && void 0 !== this.access_type && (e.writeFieldBegin("access_type", r.Type.STRING, 5), e.writeString(this.access_type), e.writeFieldEnd()), null !== this.quarantined && void 0 !== this.quarantined && (e.writeFieldBegin("quarantined", r.Type.BOOL, 6), e.writeBool(this.quarantined), e.writeFieldEnd()), null !== this.nsfw && void 0 !== this.nsfw && (e.writeFieldBegin("nsfw", r.Type.BOOL, 7), e.writeBool(this.nsfw), e.writeFieldEnd()), null !== this.topic_tag_ids && void 0 !== this.topic_tag_ids) {
					for (var t in e.writeFieldBegin("topic_tag_ids", r.Type.LIST, 8), e.writeListBegin(r.Type.STRING, this.topic_tag_ids.length), this.topic_tag_ids) this.topic_tag_ids.hasOwnProperty(t) && (t = this.topic_tag_ids[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.topic_tag_contents && void 0 !== this.topic_tag_contents) {
					for (var i in e.writeFieldBegin("topic_tag_contents", r.Type.LIST, 9), e.writeListBegin(r.Type.STRING, this.topic_tag_contents.length), this.topic_tag_contents) this.topic_tag_contents.hasOwnProperty(i) && (i = this.topic_tag_contents[i], e.writeString(i));
					e.writeListEnd(), e.writeFieldEnd()
				}
				if (null !== this.topic_tag_types && void 0 !== this.topic_tag_types) {
					for (var n in e.writeFieldBegin("topic_tag_types", r.Type.LIST, 10), e.writeListBegin(r.Type.STRING, this.topic_tag_types.length), this.topic_tag_types) this.topic_tag_types.hasOwnProperty(n) && (n = this.topic_tag_types[n], e.writeString(n));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_coins && void 0 !== this.number_coins && (e.writeFieldBegin("number_coins", r.Type.I32, 11), e.writeI32(this.number_coins), e.writeFieldEnd()), null !== this.public_description && void 0 !== this.public_description && (e.writeFieldBegin("public_description", r.Type.STRING, 12), e.writeString(this.public_description), e.writeFieldEnd()), null !== this.post_difficulty_rating && void 0 !== this.post_difficulty_rating && (e.writeFieldBegin("post_difficulty_rating", r.Type.STRING, 13), e.writeString(this.post_difficulty_rating), e.writeFieldEnd()), null !== this.topic_tag_primary_id && void 0 !== this.topic_tag_primary_id && (e.writeFieldBegin("topic_tag_primary_id", r.Type.STRING, 14), e.writeString(this.topic_tag_primary_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Profile = function(e) {
				if (this.id = null, this.name = null, this.type = null, this.display_name = null, this.about = null, this.avatar_url = null, this.cover_url = null, this.nsfw = null, this.content_visible = null, this.communities_visible = null, e) {
					if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
					if (this.id = e.id, void 0 === e.name || null === e.name) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
					this.name = e.name, void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.display_name && null !== e.display_name && (this.display_name = e.display_name), void 0 !== e.about && null !== e.about && (this.about = e.about), void 0 !== e.avatar_url && null !== e.avatar_url && (this.avatar_url = e.avatar_url), void 0 !== e.cover_url && null !== e.cover_url && (this.cover_url = e.cover_url), void 0 !== e.nsfw && null !== e.nsfw && (this.nsfw = e.nsfw), void 0 !== e.content_visible && null !== e.content_visible && (this.content_visible = e.content_visible), void 0 !== e.communities_visible && null !== e.communities_visible && (this.communities_visible = e.communities_visible)
				}
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Profile"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 2), e.writeString(this.name), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), null !== this.display_name && void 0 !== this.display_name && (e.writeFieldBegin("display_name", r.Type.STRING, 4), e.writeString(this.display_name), e.writeFieldEnd()), null !== this.about && void 0 !== this.about && (e.writeFieldBegin("about", r.Type.STRING, 5), e.writeString(this.about), e.writeFieldEnd()), null !== this.avatar_url && void 0 !== this.avatar_url && (e.writeFieldBegin("avatar_url", r.Type.STRING, 6), e.writeString(this.avatar_url), e.writeFieldEnd()), null !== this.cover_url && void 0 !== this.cover_url && (e.writeFieldBegin("cover_url", r.Type.STRING, 7), e.writeString(this.cover_url), e.writeFieldEnd()), null !== this.nsfw && void 0 !== this.nsfw && (e.writeFieldBegin("nsfw", r.Type.BOOL, 8), e.writeBool(this.nsfw), e.writeFieldEnd()), null !== this.content_visible && void 0 !== this.content_visible && (e.writeFieldBegin("content_visible", r.Type.BOOL, 9), e.writeBool(this.content_visible), e.writeFieldEnd()), null !== this.communities_visible && void 0 !== this.communities_visible && (e.writeFieldBegin("communities_visible", r.Type.BOOL, 11), e.writeBool(this.communities_visible), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/survey_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Survey = function(e) {
					this.type = null, this.min = null, this.max = null, this.score = null, this.text = null, this.experiment_name = null, this.experiment_variant = null, this.experiment_version = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.min && null !== e.min && (this.min = e.min), void 0 !== e.max && null !== e.max && (this.max = e.max), void 0 !== e.score && null !== e.score && (this.score = e.score), void 0 !== e.text && null !== e.text && (this.text = e.text), void 0 !== e.experiment_name && null !== e.experiment_name && (this.experiment_name = e.experiment_name), void 0 !== e.experiment_variant && null !== e.experiment_variant && (this.experiment_variant = e.experiment_variant), void 0 !== e.experiment_version && null !== e.experiment_version && (this.experiment_version = e.experiment_version))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Survey"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.min && void 0 !== this.min && (e.writeFieldBegin("min", r.Type.I32, 2), e.writeI32(this.min), e.writeFieldEnd()), null !== this.max && void 0 !== this.max && (e.writeFieldBegin("max", r.Type.I32, 3), e.writeI32(this.max), e.writeFieldEnd()), null !== this.score && void 0 !== this.score && (e.writeFieldBegin("score", r.Type.I32, 4), e.writeI32(this.score), e.writeFieldEnd()), null !== this.text && void 0 !== this.text && (e.writeFieldBegin("text", r.Type.STRING, 5), e.writeString(this.text), e.writeFieldEnd()), null !== this.experiment_name && void 0 !== this.experiment_name && (e.writeFieldBegin("experiment_name", r.Type.STRING, 6), e.writeString(this.experiment_name), e.writeFieldEnd()), null !== this.experiment_variant && void 0 !== this.experiment_variant && (e.writeFieldBegin("experiment_variant", r.Type.STRING, 7), e.writeString(this.experiment_variant), e.writeFieldEnd()), null !== this.experiment_version && void 0 !== this.experiment_version && (e.writeFieldBegin("experiment_version", r.Type.STRING, 8), e.writeString(this.experiment_version), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/target_ip_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.TargetIP = function(e) {
					this.address = null, e && void 0 !== e.address && null !== e.address && (this.address = e.address)
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("TargetIP"), null !== this.address && void 0 !== this.address && (e.writeFieldBegin("address", r.Type.STRING, 1), e.writeString(this.address), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/thirdpartybadge_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.ThirdPartyBadge = function(e) {
					this.id = null, this.title = null, this.target_user_id = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title), void 0 !== e.target_user_id && null !== e.target_user_id && (this.target_user_id = e.target_user_id))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("ThirdPartyBadge"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), null !== this.target_user_id && void 0 !== this.target_user_id && (e.writeFieldBegin("target_user_id", r.Type.STRING, 3), e.writeString(this.target_user_id), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/ticket_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Ticket = function(e) {
					if (this.id = null, this.type = null, this.queue_id = null, this.status = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						this.id = e.id, void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.queue_id && null !== e.queue_id && (this.queue_id = e.queue_id), void 0 !== e.status && null !== e.status && (this.status = e.status)
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Ticket"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.queue_id && void 0 !== this.queue_id && (e.writeFieldBegin("queue_id", r.Type.STRING, 3), e.writeString(this.queue_id), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 4), e.writeString(this.status), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.ReddarTicket = function(e) {
				this.id = null, this.type = null, this.queue_id = null, this.status = null, this.report_source = null, this.requestor_id = null, this.requestor_name = null, this.copyright_owner = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.queue_id && null !== e.queue_id && (this.queue_id = e.queue_id), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.report_source && null !== e.report_source && (this.report_source = e.report_source), void 0 !== e.requestor_id && null !== e.requestor_id && (this.requestor_id = e.requestor_id), void 0 !== e.requestor_name && null !== e.requestor_name && (this.requestor_name = e.requestor_name), void 0 !== e.copyright_owner && null !== e.copyright_owner && (this.copyright_owner = e.copyright_owner))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("ReddarTicket"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), null !== this.queue_id && void 0 !== this.queue_id && (e.writeFieldBegin("queue_id", r.Type.STRING, 3), e.writeString(this.queue_id), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 4), e.writeString(this.status), e.writeFieldEnd()), null !== this.report_source && void 0 !== this.report_source && (e.writeFieldBegin("report_source", r.Type.STRING, 5), e.writeString(this.report_source), e.writeFieldEnd()), null !== this.requestor_id && void 0 !== this.requestor_id && (e.writeFieldBegin("requestor_id", r.Type.STRING, 6), e.writeString(this.requestor_id), e.writeFieldEnd()), null !== this.requestor_name && void 0 !== this.requestor_name && (e.writeFieldBegin("requestor_name", r.Type.STRING, 7), e.writeString(this.requestor_name), e.writeFieldEnd()), null !== this.copyright_owner && void 0 !== this.copyright_owner && (e.writeFieldBegin("copyright_owner", r.Type.STRING, 8), e.writeString(this.copyright_owner), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.ReddarTicketContent = function(e) {
				this.id = null, this.reported_url = null, this.target_id = null, this.target_type = null, this.status = null, this.status_reason = null, this.post_nsfw = null, this.removed_by_moderator = null, this.content_type = null, this.target_created_timestamp = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.reported_url && null !== e.reported_url && (this.reported_url = e.reported_url), void 0 !== e.target_id && null !== e.target_id && (this.target_id = e.target_id), void 0 !== e.target_type && null !== e.target_type && (this.target_type = e.target_type), void 0 !== e.status && null !== e.status && (this.status = e.status), void 0 !== e.status_reason && null !== e.status_reason && (this.status_reason = e.status_reason), void 0 !== e.post_nsfw && null !== e.post_nsfw && (this.post_nsfw = e.post_nsfw), void 0 !== e.removed_by_moderator && null !== e.removed_by_moderator && (this.removed_by_moderator = e.removed_by_moderator), void 0 !== e.content_type && null !== e.content_type && (this.content_type = e.content_type), void 0 !== e.target_created_timestamp && null !== e.target_created_timestamp && (this.target_created_timestamp = e.target_created_timestamp))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("ReddarTicketContent"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.reported_url && void 0 !== this.reported_url && (e.writeFieldBegin("reported_url", r.Type.STRING, 2), e.writeString(this.reported_url), e.writeFieldEnd()), null !== this.target_id && void 0 !== this.target_id && (e.writeFieldBegin("target_id", r.Type.STRING, 3), e.writeString(this.target_id), e.writeFieldEnd()), null !== this.target_type && void 0 !== this.target_type && (e.writeFieldBegin("target_type", r.Type.STRING, 4), e.writeString(this.target_type), e.writeFieldEnd()), null !== this.status && void 0 !== this.status && (e.writeFieldBegin("status", r.Type.STRING, 5), e.writeString(this.status), e.writeFieldEnd()), null !== this.status_reason && void 0 !== this.status_reason && (e.writeFieldBegin("status_reason", r.Type.STRING, 6), e.writeString(this.status_reason), e.writeFieldEnd()), null !== this.post_nsfw && void 0 !== this.post_nsfw && (e.writeFieldBegin("post_nsfw", r.Type.BOOL, 7), e.writeBool(this.post_nsfw), e.writeFieldEnd()), null !== this.removed_by_moderator && void 0 !== this.removed_by_moderator && (e.writeFieldBegin("removed_by_moderator", r.Type.BOOL, 8), e.writeBool(this.removed_by_moderator), e.writeFieldEnd()), null !== this.content_type && void 0 !== this.content_type && (e.writeFieldBegin("content_type", r.Type.STRING, 9), e.writeString(this.content_type), e.writeFieldEnd()), null !== this.target_created_timestamp && void 0 !== this.target_created_timestamp && (e.writeFieldBegin("target_created_timestamp", r.Type.I64, 10), e.writeI64(this.target_created_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var l = e.exports.ZendeskTicket = function(e) {
				this.id = null, this.source = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.source && null !== e.source && (this.source = e.source))
			};
			l.prototype = {}, l.prototype.write = function(e) {
				e.writeStructBegin("ZendeskTicket"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.I64, 1), e.writeI64(this.id), e.writeFieldEnd()), null !== this.source && void 0 !== this.source && (e.writeFieldBegin("source", r.Type.STRING, 2), e.writeString(this.source), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/timer_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.DOMTimers = function(e) {
					this.request = null, this.loading = null, this.loaded = null, e && (void 0 !== e.request && null !== e.request && (this.request = e.request), void 0 !== e.loading && null !== e.loading && (this.loading = e.loading), void 0 !== e.loaded && null !== e.loaded && (this.loaded = e.loaded))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("DOMTimers"), null !== this.request && void 0 !== this.request && (e.writeFieldBegin("request", r.Type.I64, 1), e.writeI64(this.request), e.writeFieldEnd()), null !== this.loading && void 0 !== this.loading && (e.writeFieldBegin("loading", r.Type.I64, 2), e.writeI64(this.loading), e.writeFieldEnd()), null !== this.loaded && void 0 !== this.loaded && (e.writeFieldBegin("loaded", r.Type.I64, 3), e.writeI64(this.loaded), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.Timer = function(e) {
				this.type = null, this.millis = null, this.time_to_first_byte = null, this.first_contentful_paint = null, this.first_meaningful_paint = null, this.first_input_delay = null, e && (void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.millis && null !== e.millis && (this.millis = e.millis), void 0 !== e.time_to_first_byte && null !== e.time_to_first_byte && (this.time_to_first_byte = e.time_to_first_byte), void 0 !== e.first_contentful_paint && null !== e.first_contentful_paint && (this.first_contentful_paint = e.first_contentful_paint), void 0 !== e.first_meaningful_paint && null !== e.first_meaningful_paint && (this.first_meaningful_paint = e.first_meaningful_paint), void 0 !== e.first_input_delay && null !== e.first_input_delay && (this.first_input_delay = e.first_input_delay))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("Timer"), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 1), e.writeString(this.type), e.writeFieldEnd()), null !== this.millis && void 0 !== this.millis && (e.writeFieldBegin("millis", r.Type.I64, 2), e.writeI64(this.millis), e.writeFieldEnd()), null !== this.time_to_first_byte && void 0 !== this.time_to_first_byte && (e.writeFieldBegin("time_to_first_byte", r.Type.I64, 3), e.writeI64(this.time_to_first_byte), e.writeFieldEnd()), null !== this.first_contentful_paint && void 0 !== this.first_contentful_paint && (e.writeFieldBegin("first_contentful_paint", r.Type.I64, 4), e.writeI64(this.first_contentful_paint), e.writeFieldEnd()), null !== this.first_meaningful_paint && void 0 !== this.first_meaningful_paint && (e.writeFieldBegin("first_meaningful_paint", r.Type.I64, 5), e.writeI64(this.first_meaningful_paint), e.writeFieldEnd()), null !== this.first_input_delay && void 0 !== this.first_input_delay && (e.writeFieldBegin("first_input_delay", r.Type.I64, 6), e.writeI64(this.first_input_delay), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/tooltip_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Tooltip = function(e) {
					if (this.id = null, this.text = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						if (this.id = e.id, void 0 === e.text || null === e.text) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field text is unset!");
						this.text = e.text
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Tooltip"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.text && void 0 !== this.text && (e.writeFieldBegin("text", r.Type.STRING, 2), e.writeString(this.text), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/topic_metadata_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.TopicMetadata = function(e) {
					this.id = null, this.display_name = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.display_name && null !== e.display_name && (this.display_name = e.display_name))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("TopicMetadata"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.display_name && void 0 !== this.display_name && (e.writeFieldBegin("display_name", r.Type.STRING, 2), e.writeString(this.display_name), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/topic_tag_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.TopicTag = function(e) {
					this.id = null, this.content = null, this.type = null, this.is_primary = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.content && null !== e.content && (this.content = e.content), void 0 !== e.type && null !== e.type && (this.type = e.type), void 0 !== e.is_primary && null !== e.is_primary && (this.is_primary = e.is_primary))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("TopicTag"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.content && void 0 !== this.content && (e.writeFieldBegin("content", r.Type.STRING, 2), e.writeString(this.content), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 3), e.writeString(this.type), e.writeFieldEnd()), null !== this.is_primary && void 0 !== this.is_primary && (e.writeFieldBegin("is_primary", r.Type.BOOL, 4), e.writeBool(this.is_primary), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/typedefs_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js");
			n.Thrift, n.Q, i("./node_modules/node-int64/Int64.js"), e.exports = {}
		},
		"./src/telemetry/eventSchemas/upload_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Upload = function(e) {
					this.file_size = null, this.category = null, this.optimization_type = null, e && (void 0 !== e.file_size && null !== e.file_size && (this.file_size = e.file_size), void 0 !== e.category && null !== e.category && (this.category = e.category), void 0 !== e.optimization_type && null !== e.optimization_type && (this.optimization_type = e.optimization_type))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Upload"), null !== this.file_size && void 0 !== this.file_size && (e.writeFieldBegin("file_size", r.Type.I64, 1), e.writeI64(this.file_size), e.writeFieldEnd()), null !== this.category && void 0 !== this.category && (e.writeFieldBegin("category", r.Type.STRING, 2), e.writeString(this.category), e.writeFieldEnd()), null !== this.optimization_type && void 0 !== this.optimization_type && (e.writeFieldBegin("optimization_type", r.Type.STRING, 3), e.writeString(this.optimization_type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/user_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.User = function(e) {
					this.id = null, this.created_timestamp = null, this.logged_in = null, this.cookie_created_timestamp = null, this.suspect = null, this.disenfranchised = null, this.in_timeout = null, this.neutered = null, this.number_creddits = null, this.is_admin = null, this.has_premium = null, this.number_coins = null, this.number_premium_days_remaining = null, this.is_employee = null, this.is_premium_subscriber = null, this.post_karma = null, this.comment_karma = null, this.name = null, this.email = null, this.previous_id = null, this.masked_email = null, this.masked_email_user = null, this.email_domain = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.created_timestamp && null !== e.created_timestamp && (this.created_timestamp = e.created_timestamp), void 0 !== e.logged_in && null !== e.logged_in && (this.logged_in = e.logged_in), void 0 !== e.cookie_created_timestamp && null !== e.cookie_created_timestamp && (this.cookie_created_timestamp = e.cookie_created_timestamp), void 0 !== e.suspect && null !== e.suspect && (this.suspect = e.suspect), void 0 !== e.disenfranchised && null !== e.disenfranchised && (this.disenfranchised = e.disenfranchised), void 0 !== e.in_timeout && null !== e.in_timeout && (this.in_timeout = e.in_timeout), void 0 !== e.neutered && null !== e.neutered && (this.neutered = e.neutered), void 0 !== e.number_creddits && null !== e.number_creddits && (this.number_creddits = e.number_creddits), void 0 !== e.is_admin && null !== e.is_admin && (this.is_admin = e.is_admin), void 0 !== e.has_premium && null !== e.has_premium && (this.has_premium = e.has_premium), void 0 !== e.number_coins && null !== e.number_coins && (this.number_coins = e.number_coins), void 0 !== e.number_premium_days_remaining && null !== e.number_premium_days_remaining && (this.number_premium_days_remaining = e.number_premium_days_remaining), void 0 !== e.is_employee && null !== e.is_employee && (this.is_employee = e.is_employee), void 0 !== e.is_premium_subscriber && null !== e.is_premium_subscriber && (this.is_premium_subscriber = e.is_premium_subscriber), void 0 !== e.post_karma && null !== e.post_karma && (this.post_karma = e.post_karma), void 0 !== e.comment_karma && null !== e.comment_karma && (this.comment_karma = e.comment_karma), void 0 !== e.name && null !== e.name && (this.name = e.name), void 0 !== e.email && null !== e.email && (this.email = e.email), void 0 !== e.previous_id && null !== e.previous_id && (this.previous_id = e.previous_id), void 0 !== e.masked_email && null !== e.masked_email && (this.masked_email = e.masked_email), void 0 !== e.masked_email_user && null !== e.masked_email_user && (this.masked_email_user = e.masked_email_user), void 0 !== e.email_domain && null !== e.email_domain && (this.email_domain = e.email_domain))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("User"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.created_timestamp && void 0 !== this.created_timestamp && (e.writeFieldBegin("created_timestamp", r.Type.I64, 2), e.writeI64(this.created_timestamp), e.writeFieldEnd()), null !== this.logged_in && void 0 !== this.logged_in && (e.writeFieldBegin("logged_in", r.Type.BOOL, 3), e.writeBool(this.logged_in), e.writeFieldEnd()), null !== this.cookie_created_timestamp && void 0 !== this.cookie_created_timestamp && (e.writeFieldBegin("cookie_created_timestamp", r.Type.I64, 4), e.writeI64(this.cookie_created_timestamp), e.writeFieldEnd()), null !== this.suspect && void 0 !== this.suspect && (e.writeFieldBegin("suspect", r.Type.BOOL, 6), e.writeBool(this.suspect), e.writeFieldEnd()), null !== this.disenfranchised && void 0 !== this.disenfranchised && (e.writeFieldBegin("disenfranchised", r.Type.BOOL, 8), e.writeBool(this.disenfranchised), e.writeFieldEnd()), null !== this.in_timeout && void 0 !== this.in_timeout && (e.writeFieldBegin("in_timeout", r.Type.BOOL, 9), e.writeBool(this.in_timeout), e.writeFieldEnd()), null !== this.neutered && void 0 !== this.neutered && (e.writeFieldBegin("neutered", r.Type.BOOL, 10), e.writeBool(this.neutered), e.writeFieldEnd()), null !== this.number_creddits && void 0 !== this.number_creddits && (e.writeFieldBegin("number_creddits", r.Type.I64, 11), e.writeI64(this.number_creddits), e.writeFieldEnd()), null !== this.is_admin && void 0 !== this.is_admin && (e.writeFieldBegin("is_admin", r.Type.BOOL, 12), e.writeBool(this.is_admin), e.writeFieldEnd()), null !== this.has_premium && void 0 !== this.has_premium && (e.writeFieldBegin("has_premium", r.Type.BOOL, 13), e.writeBool(this.has_premium), e.writeFieldEnd()), null !== this.number_coins && void 0 !== this.number_coins && (e.writeFieldBegin("number_coins", r.Type.I64, 14), e.writeI64(this.number_coins), e.writeFieldEnd()), null !== this.number_premium_days_remaining && void 0 !== this.number_premium_days_remaining && (e.writeFieldBegin("number_premium_days_remaining", r.Type.I64, 15), e.writeI64(this.number_premium_days_remaining), e.writeFieldEnd()), null !== this.is_employee && void 0 !== this.is_employee && (e.writeFieldBegin("is_employee", r.Type.BOOL, 16), e.writeBool(this.is_employee), e.writeFieldEnd()), null !== this.is_premium_subscriber && void 0 !== this.is_premium_subscriber && (e.writeFieldBegin("is_premium_subscriber", r.Type.BOOL, 17), e.writeBool(this.is_premium_subscriber), e.writeFieldEnd()), null !== this.post_karma && void 0 !== this.post_karma && (e.writeFieldBegin("post_karma", r.Type.I64, 18), e.writeI64(this.post_karma), e.writeFieldEnd()), null !== this.comment_karma && void 0 !== this.comment_karma && (e.writeFieldBegin("comment_karma", r.Type.I64, 19), e.writeI64(this.comment_karma), e.writeFieldEnd()), null !== this.name && void 0 !== this.name && (e.writeFieldBegin("name", r.Type.STRING, 20), e.writeString(this.name), e.writeFieldEnd()), null !== this.email && void 0 !== this.email && (e.writeFieldBegin("email", r.Type.STRING, 21), e.writeString(this.email), e.writeFieldEnd()), null !== this.previous_id && void 0 !== this.previous_id && (e.writeFieldBegin("previous_id", r.Type.STRING, 22), e.writeString(this.previous_id), e.writeFieldEnd()), null !== this.masked_email && void 0 !== this.masked_email && (e.writeFieldBegin("masked_email", r.Type.STRING, 23), e.writeString(this.masked_email), e.writeFieldEnd()), null !== this.masked_email_user && void 0 !== this.masked_email_user && (e.writeFieldBegin("masked_email_user", r.Type.STRING, 24), e.writeString(this.masked_email_user), e.writeFieldEnd()), null !== this.email_domain && void 0 !== this.email_domain && (e.writeFieldBegin("email_domain", r.Type.STRING, 25), e.writeString(this.email_domain), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var o = e.exports.UserPreferences = function(e) {
				this.in_beta = null, this.language = null, this.hide_nsfw = null, this.expando = null, this.hide_previously_seen_posts = null, e && (void 0 !== e.in_beta && null !== e.in_beta && (this.in_beta = e.in_beta), void 0 !== e.language && null !== e.language && (this.language = e.language), void 0 !== e.hide_nsfw && null !== e.hide_nsfw && (this.hide_nsfw = e.hide_nsfw), void 0 !== e.expando && null !== e.expando && (this.expando = e.expando), void 0 !== e.hide_previously_seen_posts && null !== e.hide_previously_seen_posts && (this.hide_previously_seen_posts = e.hide_previously_seen_posts))
			};
			o.prototype = {}, o.prototype.write = function(e) {
				e.writeStructBegin("UserPreferences"), null !== this.in_beta && void 0 !== this.in_beta && (e.writeFieldBegin("in_beta", r.Type.BOOL, 1), e.writeBool(this.in_beta), e.writeFieldEnd()), null !== this.language && void 0 !== this.language && (e.writeFieldBegin("language", r.Type.STRING, 2), e.writeString(this.language), e.writeFieldEnd()), null !== this.hide_nsfw && void 0 !== this.hide_nsfw && (e.writeFieldBegin("hide_nsfw", r.Type.BOOL, 3), e.writeBool(this.hide_nsfw), e.writeFieldEnd()), null !== this.expando && void 0 !== this.expando && (e.writeFieldBegin("expando", r.Type.STRING, 4), e.writeString(this.expando), e.writeFieldEnd()), null !== this.hide_previously_seen_posts && void 0 !== this.hide_previously_seen_posts && (e.writeFieldBegin("hide_previously_seen_posts", r.Type.BOOL, 5), e.writeBool(this.hide_previously_seen_posts), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			};
			var d = e.exports.UserSubreddit = function(e) {
				this.is_mod = null, this.mod_full = null, this.mod_access = null, this.mod_config = null, this.mod_flair = null, this.mod_mail = null, this.mod_post = null, this.mod_wiki = null, this.mod_none = null, this.is_favorite = null, this.is_subscriber = null, this.post_karma = null, this.comment_karma = null, this.is_steward = null, e && (void 0 !== e.is_mod && null !== e.is_mod && (this.is_mod = e.is_mod), void 0 !== e.mod_full && null !== e.mod_full && (this.mod_full = e.mod_full), void 0 !== e.mod_access && null !== e.mod_access && (this.mod_access = e.mod_access), void 0 !== e.mod_config && null !== e.mod_config && (this.mod_config = e.mod_config), void 0 !== e.mod_flair && null !== e.mod_flair && (this.mod_flair = e.mod_flair), void 0 !== e.mod_mail && null !== e.mod_mail && (this.mod_mail = e.mod_mail), void 0 !== e.mod_post && null !== e.mod_post && (this.mod_post = e.mod_post), void 0 !== e.mod_wiki && null !== e.mod_wiki && (this.mod_wiki = e.mod_wiki), void 0 !== e.mod_none && null !== e.mod_none && (this.mod_none = e.mod_none), void 0 !== e.is_favorite && null !== e.is_favorite && (this.is_favorite = e.is_favorite), void 0 !== e.is_subscriber && null !== e.is_subscriber && (this.is_subscriber = e.is_subscriber), void 0 !== e.post_karma && null !== e.post_karma && (this.post_karma = e.post_karma), void 0 !== e.comment_karma && null !== e.comment_karma && (this.comment_karma = e.comment_karma), void 0 !== e.is_steward && null !== e.is_steward && (this.is_steward = e.is_steward))
			};
			d.prototype = {}, d.prototype.write = function(e) {
				e.writeStructBegin("UserSubreddit"), null !== this.is_mod && void 0 !== this.is_mod && (e.writeFieldBegin("is_mod", r.Type.BOOL, 1), e.writeBool(this.is_mod), e.writeFieldEnd()), null !== this.mod_full && void 0 !== this.mod_full && (e.writeFieldBegin("mod_full", r.Type.BOOL, 2), e.writeBool(this.mod_full), e.writeFieldEnd()), null !== this.mod_access && void 0 !== this.mod_access && (e.writeFieldBegin("mod_access", r.Type.BOOL, 3), e.writeBool(this.mod_access), e.writeFieldEnd()), null !== this.mod_config && void 0 !== this.mod_config && (e.writeFieldBegin("mod_config", r.Type.BOOL, 4), e.writeBool(this.mod_config), e.writeFieldEnd()), null !== this.mod_flair && void 0 !== this.mod_flair && (e.writeFieldBegin("mod_flair", r.Type.BOOL, 5), e.writeBool(this.mod_flair), e.writeFieldEnd()), null !== this.mod_mail && void 0 !== this.mod_mail && (e.writeFieldBegin("mod_mail", r.Type.BOOL, 6), e.writeBool(this.mod_mail), e.writeFieldEnd()), null !== this.mod_post && void 0 !== this.mod_post && (e.writeFieldBegin("mod_post", r.Type.BOOL, 7), e.writeBool(this.mod_post), e.writeFieldEnd()), null !== this.mod_wiki && void 0 !== this.mod_wiki && (e.writeFieldBegin("mod_wiki", r.Type.BOOL, 8), e.writeBool(this.mod_wiki), e.writeFieldEnd()), null !== this.mod_none && void 0 !== this.mod_none && (e.writeFieldBegin("mod_none", r.Type.BOOL, 9), e.writeBool(this.mod_none), e.writeFieldEnd()), null !== this.is_favorite && void 0 !== this.is_favorite && (e.writeFieldBegin("is_favorite", r.Type.BOOL, 10), e.writeBool(this.is_favorite), e.writeFieldEnd()), null !== this.is_subscriber && void 0 !== this.is_subscriber && (e.writeFieldBegin("is_subscriber", r.Type.BOOL, 11), e.writeBool(this.is_subscriber), e.writeFieldEnd()), null !== this.post_karma && void 0 !== this.post_karma && (e.writeFieldBegin("post_karma", r.Type.I64, 12), e.writeI64(this.post_karma), e.writeFieldEnd()), null !== this.comment_karma && void 0 !== this.comment_karma && (e.writeFieldBegin("comment_karma", r.Type.I64, 13), e.writeI64(this.comment_karma), e.writeFieldEnd()), null !== this.is_steward && void 0 !== this.is_steward && (e.writeFieldBegin("is_steward", r.Type.BOOL, 14), e.writeBool(this.is_steward), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/userflair_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.UserFlair = function(e) {
					this.id = null, this.title = null, e && (void 0 !== e.id && null !== e.id && (this.id = e.id), void 0 !== e.title && null !== e.title && (this.title = e.title))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("UserFlair"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.title && void 0 !== this.title && (e.writeFieldBegin("title", r.Type.STRING, 2), e.writeString(this.title), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/visibility_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Visibility = function(e) {
					this.seen = null, this.seen_items = null, this.number_items = null, this.number_seen_items = null, this.number_scrolled_pages = null, this.on_screen_timestamp = null, this.off_screen_timestamp = null, e && (void 0 !== e.seen && null !== e.seen && (this.seen = e.seen), void 0 !== e.seen_items && null !== e.seen_items && (this.seen_items = r.copyList(e.seen_items, [null])), void 0 !== e.number_items && null !== e.number_items && (this.number_items = e.number_items), void 0 !== e.number_seen_items && null !== e.number_seen_items && (this.number_seen_items = e.number_seen_items), void 0 !== e.number_scrolled_pages && null !== e.number_scrolled_pages && (this.number_scrolled_pages = e.number_scrolled_pages), void 0 !== e.on_screen_timestamp && null !== e.on_screen_timestamp && (this.on_screen_timestamp = e.on_screen_timestamp), void 0 !== e.off_screen_timestamp && null !== e.off_screen_timestamp && (this.off_screen_timestamp = e.off_screen_timestamp))
				});
			s.prototype = {}, s.prototype.write = function(e) {
				if (e.writeStructBegin("Visibility"), null !== this.seen && void 0 !== this.seen && (e.writeFieldBegin("seen", r.Type.BOOL, 1), e.writeBool(this.seen), e.writeFieldEnd()), null !== this.seen_items && void 0 !== this.seen_items) {
					for (var t in e.writeFieldBegin("seen_items", r.Type.LIST, 4), e.writeListBegin(r.Type.STRING, this.seen_items.length), this.seen_items) this.seen_items.hasOwnProperty(t) && (t = this.seen_items[t], e.writeString(t));
					e.writeListEnd(), e.writeFieldEnd()
				}
				null !== this.number_items && void 0 !== this.number_items && (e.writeFieldBegin("number_items", r.Type.I64, 5), e.writeI64(this.number_items), e.writeFieldEnd()), null !== this.number_seen_items && void 0 !== this.number_seen_items && (e.writeFieldBegin("number_seen_items", r.Type.I64, 6), e.writeI64(this.number_seen_items), e.writeFieldEnd()), null !== this.number_scrolled_pages && void 0 !== this.number_scrolled_pages && (e.writeFieldBegin("number_scrolled_pages", r.Type.I64, 7), e.writeI64(this.number_scrolled_pages), e.writeFieldEnd()), null !== this.on_screen_timestamp && void 0 !== this.on_screen_timestamp && (e.writeFieldBegin("on_screen_timestamp", r.Type.I64, 8), e.writeI64(this.on_screen_timestamp), e.writeFieldEnd()), null !== this.off_screen_timestamp && void 0 !== this.off_screen_timestamp && (e.writeFieldBegin("off_screen_timestamp", r.Type.I64, 9), e.writeI64(this.off_screen_timestamp), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/eventSchemas/webhook_types.js": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js"),
				r = n.Thrift,
				s = (n.Q, i("./node_modules/node-int64/Int64.js"), i("./src/telemetry/eventSchemas/typedefs_types.js"), e.exports = {}, e.exports.Webhook = function(e) {
					if (this.id = null, this.type = null, e) {
						if (void 0 === e.id || null === e.id) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
						if (this.id = e.id, void 0 === e.type || null === e.type) throw new r.TProtocolException(r.TProtocolExceptionType.UNKNOWN, "Required field type is unset!");
						this.type = e.type
					}
				});
			s.prototype = {}, s.prototype.write = function(e) {
				e.writeStructBegin("Webhook"), null !== this.id && void 0 !== this.id && (e.writeFieldBegin("id", r.Type.STRING, 1), e.writeString(this.id), e.writeFieldEnd()), null !== this.type && void 0 !== this.type && (e.writeFieldBegin("type", r.Type.STRING, 2), e.writeString(this.type), e.writeFieldEnd()), e.writeFieldStop(), e.writeStructEnd()
			}
		},
		"./src/telemetry/helpers/ThriftSerializer.ts": function(e, t, i) {
			"use strict";
			(function(e) {
				i.d(t, "a", (function() {
					return a
				}));
				i("./node_modules/core-js/modules/es6.regexp.to-string.js");
				var n = i("./node_modules/thrift/lib/nodejs/lib/thrift/int64_util.js"),
					r = i.n(n),
					s = i("./node_modules/node-int64/Int64.js"),
					o = i.n(s),
					d = i("./node_modules/thrift/lib/nodejs/lib/thrift/browser.js");
				const l = {
					[d.Thrift.Type.BOOL]: "tf",
					[d.Thrift.Type.BYTE]: "i8",
					[d.Thrift.Type.I16]: "i16",
					[d.Thrift.Type.I32]: "i32",
					[d.Thrift.Type.I64]: "i64",
					[d.Thrift.Type.DOUBLE]: "dbl",
					[d.Thrift.Type.STRUCT]: "rec",
					[d.Thrift.Type.STRING]: "str",
					[d.Thrift.Type.MAP]: "map",
					[d.Thrift.Type.LIST]: "lst",
					[d.Thrift.Type.SET]: "set"
				};
				class a {
					constructor() {
						this.stack = []
					}
					writeFieldBegin(e, t, i) {
						this.stack.push(e => ({
							[i]: {
								[l[t]]: e
							}
						}))
					}
					writeFieldEnd() {
						const e = this.stack.pop(),
							t = this.stack.pop();
						this.stack.push(t(e))
					}
					writeFieldStop() {}
					writeStructBegin(e) {
						this.stack.push("structStart")
					}
					writeStructEnd() {
						let e = {};
						for (;;) {
							const t = this.stack.pop();
							if ("structStart" === t) break;
							e = Object.assign({}, e, t)
						}
						this.stack.push(e)
					}
					writeListBegin() {
						this.stack.push("listStart")
					}
					writeListEnd() {
						const e = [];
						for (;;) {
							const t = this.stack.pop();
							if ("listStart" === t) break;
							e.push(t)
						}
						this.stack.push(["rec", e.length, ...e])
					}
					writeSetBegin() {
						this.stack.push("setStart")
					}
					writeSetEnd() {
						const e = [];
						for (;;) {
							const t = this.stack.pop();
							if ("setStart" === t) break;
							e.push(t)
						}
						this.stack.push(["rec", e.length, ...e])
					}
					writeMapStart() {
						throw new Error("Maps not implemented. Contact Niranjan Ramadas")
					}
					writeMapEnd() {
						throw new Error("Maps not implemented. Contact Niranjan Ramadas")
					}
					writeBool(e) {
						this.stack.push(e ? 1 : 0)
					}
					writeByte(e) {
						this.stack.push(e)
					}
					writeI16(e) {
						this.stack.push(e)
					}
					writeI32(e) {
						this.stack.push(e)
					}
					writeI64(e) {
						e instanceof o.a ? this.stack.push(r.a.toDecimalString(e)) : this.stack.push(e)
					}
					writeDouble(e) {
						this.stack.push(e)
					}
					writeString(e) {
						null === e ? this.stack.push(null) : this.stack.push(JSON.stringify(e).slice(1, -1))
					}
					writeBinary(t) {
						let i;
						if ("string" == typeof t) i = e.from(t, "binary");
						else {
							if (!(t instanceof e || "[object Uint8Array]" === Object.prototype.toString.call(t))) throw new Error("writeBinary called without a string/Buffer argument: " + t);
							i = t
						}
						this.stack.push(i.toString("base64"))
					}
					getString() {
						if (this.stack.length > 1) throw new Error("Did not correctly serialize Thrift Event");
						return JSON.stringify(this.stack.pop())
					}
				}
			}).call(this, i("./node_modules/buffer/index.js").Buffer)
		},
		"./src/telemetry/helpers/sendEvent.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return h
			})), i.d(t, "b", (function() {
				return w
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/Base64/base64.js"),
				r = i("./node_modules/crypto-js/hmac-sha256.js"),
				s = i.n(r),
				o = i("./node_modules/lodash/throttle.js"),
				d = i.n(o),
				l = i("./src/lib/constants/index.ts"),
				a = i("./src/lib/makeRequest/index.ts"),
				u = i("./src/lib/scheduler/index.ts"),
				c = i("./src/telemetry/eventSchemas/event_types.js"),
				_ = i("./src/telemetry/models/Event.ts"),
				m = i("./src/telemetry/helpers/ThriftSerializer.ts");
			let p;
			const h = e => {
				p = e
			};
			let f = [],
				g = !1,
				b = !1;
			const w = Object(u.b)();
			let y = !1;
			const v = window && window.fetch;
			t.a = e => {
				b || (window.addEventListener("beforeunload", () => {
					w.flush(), g || T(!0)
				}), b = !0);
				const t = _.f(e);
				if (f = f.concat([t]), p) {
					const e = p.getState();
					e.push(t);
					const {
						length: i
					} = e;
					i > 250 && e.splice(0, 250 - i), p.setState(e)
				}
				g || S()
			};
			const T = e => {
					if (!f.length) return;
					const t = [...f],
						i = new c.EventBatch({
							events: t
						}),
						r = new m.a,
						o = Object(n.atob)("YWVjYWltMnNlaTlzZXNoNmVpQ2hhZXJ1dW03dHU4");
					f = [], g = !0, i.write(r);
					const d = r.getString(),
						u = s()(d, o).toString(),
						_ = "https://www.reddit.com"; {
						const t = {
								"X-Signature-v2": "key=".concat("Desktop2x3", ", mac=").concat(u)
							},
							i = () => {
								f.length ? e ? T() : S() : g = !1
							};
						y && e && !window.chrome && v ? v(_, {
							body: d,
							headers: Object.assign({}, t, {
								"Content-Type": "text/plain"
							}),
							keepalive: !0,
							method: l.bb.POST
						}).then(i) : Object(a.b)({
							data: d,
							endpoint: _,
							sync: e,
							method: l.bb.POST,
							type: "text/plain",
							headers: t
						}).then(i)
					}
				},
				S = d()(T, 1e3, {
					leading: !1,
					trailing: !0
				})
		},
		"./src/telemetry/helpers/sendTiming.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			var n = i("./node_modules/Base64/base64.js"),
				r = i("./src/lib/logs/timing.js"),
				s = i("./src/lib/makeRequest/index.ts");
			const o = e => {
					switch (e.type) {
						case "rum":
							return "/timings/rum";
						case "route":
							return "/timings/route";
						case "mount":
							return "/timings/mount";
						case "gql":
							return "/timings/gql";
						case "perf":
							return "/timings/perf";
						case "scrollfps":
							return "/timings/scrollfps"
					}
				},
				d = e => {
					switch (e.type) {
						case "rum":
							return {
								page: e.page, timings: Object(r.a)()
							};
						case "route":
							return {
								page: e.page, duration: e.duration
							};
						case "mount":
							return {
								component: e.component, duration: e.duration
							};
						case "gql":
							return {
								responseName: e.responseName, duration: e.duration
							};
						case "perf":
						case "scrollfps":
							return {
								meta: e.meta, data: e.data
							}
					}
				},
				l = .25;

			function a(e, t) {
				if (!(Math.random() > l)) return Object(s.b)({
					method: "post",
					type: "json",
					endpoint: o(t),
					data: {
						time: Object(n.btoa)(JSON.stringify(Object.assign({
							appName: e
						}, d(t))))
					}
				})
			}
		},
		"./src/telemetry/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r.a
			})), i.d(t, "b", (function() {
				return s.a
			})), i.d(t, "c", (function() {
				return n
			}));
			var n = {};
			i.r(n), i.d(n, "start", (function() {
				return c
			})), i.d(n, "getTime", (function() {
				return _
			})), i.d(n, "end", (function() {
				return m
			})), i.d(n, "cancel", (function() {
				return p
			})), i.d(n, "has", (function() {
				return h
			}));
			var r = i("./src/telemetry/helpers/sendEvent.ts"),
				s = i("./src/telemetry/helpers/sendTiming.ts");
			const o = {},
				d = "timer - too many created. is there a memory leak?",
				l = e => "timer - none found with id: ".concat(e, ".\n    Make sure you check for its existence before trying to stop.");
			let a = 0,
				u = 0;
			const c = e => {
					const t = e || a++;
					return u > 100 && console.error(d), o[t] = Date.now(), u++, t
				},
				_ = e => {
					const t = o[e];
					return t ? Date.now() - t : (console.error(l(e)), -1)
				},
				m = e => {
					const t = o[e];
					if (!t) return console.error(l(e)), -1;
					const i = Date.now() - t;
					return delete o[e], u--, i
				},
				p = e => !!o[e] && (delete o[e], u--, !0),
				h = e => !!o[e]
		},
		"./src/telemetry/models/App.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "TelemetryAppName", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return s
			}));
			var n, r = i("./src/telemetry/eventSchemas/device_types.js");
			! function(e) {
				e.desktop2x = "desktop2x", e.desktop2xDev = "desktop2x_dev", e.web = "web", e.webDev = "web_dev", e.web2x = "web2x", e.web2xDev = "web2x_dev"
			}(n || (n = {}));
			const s = e => new r.App({
				version: e.version,
				name: e.name,
				install_timestamp: e.installTimestamp
			})
		},
		"./src/telemetry/models/Event.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return kt
			})), i.d(t, "e", (function() {
				return Ct
			})), i.d(t, "c", (function() {
				return Nt
			})), i.d(t, "d", (function() {
				return Pt
			})), i.d(t, "b", (function() {
				return Lt
			})), i.d(t, "f", (function() {
				return At
			}));
			var n = {};
			i.r(n), i.d(n, "toThrift", (function() {
				return Z
			}));
			var r = {};
			i.r(r), i.d(r, "toThrift", (function() {
				return ee
			}));
			var s = {};
			i.r(s), i.d(s, "toThrift", (function() {
				return ie
			}));
			var o = {};
			i.r(o), i.d(o, "toThrift", (function() {
				return se
			}));
			var d = {};
			i.r(d), i.d(d, "toThrift", (function() {
				return de
			}));
			var l = {};
			i.r(l), i.d(l, "toThrift", (function() {
				return ae
			}));
			var a = {};
			i.r(a), i.d(a, "toThrift", (function() {
				return ce
			}));
			var u = {};
			i.r(u), i.d(u, "toThrift", (function() {
				return _e
			}));
			var c = {};
			i.r(c), i.d(c, "toThrift", (function() {
				return pe
			}));
			var _ = {};
			i.r(_), i.d(_, "toThrift", (function() {
				return fe
			}));
			var m = {};
			i.r(m), i.d(m, "toThrift", (function() {
				return ge
			}));
			var p = {};
			i.r(p), i.d(p, "toThrift", (function() {
				return ye
			}));
			var h = {};
			i.r(h), i.d(h, "toThrift", (function() {
				return ve
			}));
			var f = {};
			i.r(f), i.d(f, "toThrift", (function() {
				return Se
			}));
			var g = {};
			i.r(g), i.d(g, "toThrift", (function() {
				return Fe
			}));
			var b = {};
			i.r(b), i.d(b, "toThrift", (function() {
				return je
			}));
			var w = {};
			i.r(w), i.d(w, "toThrift", (function() {
				return Be
			}));
			var y = {};
			i.r(y), i.d(y, "toThrift", (function() {
				return Re
			}));
			var v = {};
			i.r(v), i.d(v, "toThrift", (function() {
				return ke
			}));
			var T = {};
			i.r(T), i.d(T, "toThrift", (function() {
				return Le
			}));
			var S = {};
			i.r(S), i.d(S, "toThrift", (function() {
				return De
			}));
			var E = {};
			i.r(E), i.d(E, "toThrift", (function() {
				return Me
			}));
			var F = {};
			i.r(F), i.d(F, "toThrift", (function() {
				return Ue
			}));
			var I = {};
			i.r(I), i.d(I, "toThrift", (function() {
				return qe
			}));
			var O = {};
			i.r(O), i.d(O, "toThrift", (function() {
				return We
			}));
			var j = {};
			i.r(j), i.d(j, "toThrift", (function() {
				return Ke
			}));
			var B = {};
			i.r(B), i.d(B, "toThrift", (function() {
				return Ye
			}));
			var x = {};
			i.r(x), i.d(x, "toThrift", (function() {
				return Ze
			}));
			var R = {};
			i.r(R), i.d(R, "toThrift", (function() {
				return et
			}));
			var k = {};
			i.r(k), i.d(k, "toThrift", (function() {
				return tt
			}));
			var C = {};
			i.r(C), i.d(C, "toThrift", (function() {
				return it
			}));
			var N = {};
			i.r(N), i.d(N, "toThrift", (function() {
				return nt
			}));
			var P = {};
			i.r(P), i.d(P, "toThrift", (function() {
				return st
			}));
			var L = {};
			i.r(L), i.d(L, "toThrift", (function() {
				return ut
			}));
			var A = {};
			i.r(A), i.d(A, "toThrift", (function() {
				return _t
			}));
			var D = {};
			i.r(D), i.d(D, "toThrift", (function() {
				return pt
			}));
			var G = {};
			i.r(G), i.d(G, "toThrift", (function() {
				return ft
			}));
			var M = {};
			i.r(M), i.d(M, "toThrift", (function() {
				return bt
			}));
			var U = {};
			i.r(U), i.d(U, "toThrift", (function() {
				return Tt
			}));
			var q = {};
			i.r(q), i.d(q, "toThrift", (function() {
				return Et
			}));
			var H = {};
			i.r(H), i.d(H, "toThrift", (function() {
				return It
			}));
			var V = {};
			i.r(V), i.d(V, "toThrift", (function() {
				return jt
			}));
			var W = {};
			i.r(W), i.d(W, "toThrift", (function() {
				return Bt
			}));
			var z = {};
			i.r(z), i.d(z, "toThrift", (function() {
				return xt
			}));
			var K = {};
			i.r(K), i.d(K, "toThrift", (function() {
				return Rt
			}));
			i("./node_modules/core-js/modules/es6.regexp.search.js");
			var Q = i("./node_modules/uuid/v4.js"),
				J = i.n(Q),
				Y = i("./src/telemetry/eventSchemas/event_types.js"),
				X = i("./src/telemetry/eventSchemas/action_types.js");
			const Z = e => new X.ActionInfo({
				count: e.count,
				page_type: e.pageType || null,
				pane_name: e.paneName,
				position: e.position,
				reason: e.reason,
				setting_value: e.settingValue,
				success: e.success,
				relative_position: e.relativePosition,
				type: e.type
			});
			var $ = i("./src/telemetry/eventSchemas/adblock_types.js");
			const ee = e => new $.Adblock({
				enabled: e.enabled,
				acceptable_ads: e.acceptableAds
			});
			var te = i("./src/telemetry/eventSchemas/announcement_types.js");
			const ie = e => {
				let {
					id: t,
					title: i,
					body: n
				} = e;
				return new te.Announcement({
					id: t,
					title: i,
					body: n
				})
			};
			var ne = i("./src/telemetry/models/App.ts"),
				re = i("./src/telemetry/eventSchemas/banner_types.js");
			const se = e => new re.Banner({
				button_text: e.buttonText,
				id: e.id
			});
			var oe = i("./src/telemetry/eventSchemas/chat_types.js");
			const de = e => new oe.Chat({
				blocked_user_id: e.blocked_user_id,
				id: e.id,
				type: e.type,
				existing_channel: e.existing_channel,
				image_upload_method: e.image_upload_method,
				user_added_method: e.user_added_method,
				invitation_id: e.invitation_id,
				invitation_type: e.invitation_type,
				members: e.members,
				invitation_preview_type: e.invitation_preview_type,
				message_type: e.message_type,
				number_channels: e.number_channels,
				number_pending_invites: e.number_pending_invites,
				number_members: e.number_members,
				number_unreads: e.number_unreads,
				reported_user_id: e.reported_user_id,
				sender_user_id: e.sender_user_id,
				invitation_timestamp: e.invitation_timestamp,
				blocked_members: e.blocked_members,
				recipient_user_id: e.recipient_user_id,
				number_blocked_users: e.number_blocked_users,
				is_member: e.is_member,
				shown_history: e.shown_history,
				message_id: e.message_id,
				report_reason: e.report_reason
			});
			var le = i("./src/telemetry/eventSchemas/experiment_types.js");
			const ae = e => new le.ClickTest({
				id: e.id,
				name: e.name,
				owner: e.owner,
				variant: e.variant,
				prompt: e.prompt,
				response: e.response,
				page_type: e.pageType
			});
			var ue = i("./src/telemetry/eventSchemas/content_types.js");
			const ce = e => new ue.Comment({
					id: e.id,
					post_id: e.postId,
					parent_id: e.parentId,
					body_text: e.bodyText,
					author_id: e.authorId,
					number_gildings: e.numberGildings,
					score: e.score,
					upvote_ratio: e.upvoteRatio,
					created_timestamp: e.created,
					type: e.type
				}),
				_e = e => new ue.CommentComposer({
					editor_mode: e.editorMode
				});
			var me = i("./src/telemetry/eventSchemas/crawler_types.js");
			const pe = e => new me.Crawler({
				name: e.name
			});
			var he = i("./src/telemetry/eventSchemas/custom_feed_types.js");
			const fe = e => new he.CustomFeed({
					id: e.id,
					is_nsfw: e.isNsfw,
					number_followers: e.numberFollowers,
					number_subreddits: e.numberSubreddits,
					owner_id: e.ownerId,
					visibility: e.visibility
				}),
				ge = e => new ue.DiscoveryUnit({
					id: e.id,
					type: e.type,
					title: e.title,
					name: e.name,
					items: e.items
				});
			var be = i("./src/telemetry/eventSchemas/timer_types.js");
			const we = (e, t) => e && t ? t - e == 0 ? null : t - e : null,
				ye = e => {
					if (!performance || !performance.timing) return null;
					const t = performance.timing;
					return new be.DOMTimers({
						request: we(t.requestStart, t.responseStart),
						loading: we(t.domLoading, t.domInteractive),
						loaded: we(t.domContentLoadedEventStart, t.domContentLoadedEventEnd)
					})
				},
				ve = e => new le.Experiment({
					id: e.id,
					is_override: e.isOverride,
					name: e.name,
					variant: e.variant,
					version: e.version
				});
			var Te = i("./src/telemetry/models/GoldPurchase.ts");
			i("./node_modules/core-js/modules/es6.array.sort.js");
			const Se = e => new ue.Listing({
				length: e.length,
				links: e.links,
				sort: e.sort,
				sort_time_filter: e.sortTime,
				source: e.source,
				old_sort: e.oldSort,
				depth: e.depth
			});
			var Ee = i("./src/telemetry/eventSchemas/live_thread_types.js");
			const Fe = e => new Ee.LiveThread({
				id: e.id,
				is_announcement: e.isAnnouncement
			});
			var Ie = i("./src/telemetry/models/Media.ts"),
				Oe = i("./src/telemetry/eventSchemas/metasearch_types.js");
			const je = e => new Oe.MetaSearch({
					display_query: e.displayQuery,
					raw_query: e.rawQuery,
					structure_type: e.structureType,
					sort: e.sort,
					range: e.range,
					subreddit_id: e.subredditId,
					subreddit_name: e.subredditName,
					post_flair_name: e.postFlairName,
					meta_flair_id: e.metaFlairId,
					meta_flair_name: e.metaFlairName
				}),
				Be = e => new ue.Notification({
					id: e.id,
					type: e.type
				});
			var xe = i("./src/telemetry/eventSchemas/request_types.js");
			const Re = e => new xe.Oauth({
					client_app_type: "web"
				}),
				ke = e => new ue.Onboarding({
					id: e.id,
					action_source: e.actionSource,
					process_notes: e.processNotes,
					number_subreddits_selected: e.numberSubredditsSelected,
					subreddits_selected: e.subredditsSelected,
					user_name: e.userName,
					recommended_user_name: e.recommendedUserName,
					start_timestamp: e.startTimestamp,
					end_timestamp: e.endTimestamp,
					category_position: e.categoryPosition,
					category_name: e.categoryName,
					subreddit_name: e.subredditName,
					subreddit_position: e.subredditPosition,
					subreddit_is_selected: e.subredditIsSelected,
					subreddits_already_selected: e.subredditsAlreadySelected,
					successful: e.successful,
					semantic_version: e.semanticVersion,
					valid_email_submitted: e.validEmailSubmitted,
					pre_selected: e.preSelected,
					passed_captcha: e.passedCaptcha,
					captcha_num_screens: e.captchaNumScreens,
					personalized_subreddits: e.personalizedSubreddits,
					similar_subreddits: e.similarSubreddits,
					number_subreddits: e.numberSubreddits,
					is_similar_subreddit: e.isSimilarSubreddit
				});
			var Ce = i("./src/telemetry/models/Outbound.ts"),
				Ne = i("./src/telemetry/models/Payment.ts"),
				Pe = i("./src/telemetry/eventSchemas/playback_types.js");
			const Le = e => new Pe.Playback({
				chat_state: e.chatState,
				heartbeat_duration_ms: e.heartbeatDurationMs,
				id: e.id,
				is_live: e.isLive,
				playhead_offset_ms: e.playheadOffsetMs,
				scrubbing_end_ms: e.scrubbingEndMs,
				scrubbing_start_ms: e.scrubbingStartMs,
				session_duration_ms: e.sessionDurationMs,
				start_time_ms: e.startTimeMs,
				timestamp_ms: e.timestampMs,
				volume: e.volume,
				watch_duration_ms: e.watchDurationMs,
				player_type: e.playerType
			});
			var Ae = i("./src/telemetry/eventSchemas/poll_types.js");
			const De = e => new Ae.Poll({
				options: e.options,
				options_length: e.optionsLength,
				user_vote: e.userVote
			});
			var Ge = i("./src/telemetry/eventSchemas/popup_types.js");
			const Me = e => new Ge.Popup({
					button_text: e.buttonText,
					id: e.id,
					text: e.text
				}),
				Ue = e => new ue.Post({
					comment_type: e.commentType,
					content_duration: e.contentDuration,
					created_timestamp: e.createdTimestamp,
					domain: e.domain,
					id: e.id,
					impression_id: e.impressionId,
					nsfw: e.nsfw,
					number_posts_from_ad: e.numberPostsFromAd,
					score: e.score,
					spoiler: e.spoiler,
					title: e.title,
					type: e.type,
					upvote_ratio: e.upvoteRatio,
					url: e.url,
					promoted: e.promoted
				}),
				qe = e => new ue.PostCollection({
					id: e.id,
					title: e.title,
					author_id: e.authorId,
					post_ids: e.postIds,
					display_layout: e.displayLayout
				});
			var He = i("./src/telemetry/models/PostComposer.ts"),
				Ve = i("./src/telemetry/models/PostDraft.ts");
			const We = e => new ue.PostEvent({
				type: e.type,
				event_state: e.eventState,
				event_start_timestamp: e.eventStartTimestamp,
				event_end_timestamp: e.eventEndTimestamp
			});
			var ze = i("./src/telemetry/eventSchemas/postflair_types.js");
			const Ke = e => new ze.PostFlair({
				id: e.id,
				title: e.title
			});
			var Qe = i("./src/telemetry/models/PostRequirement.ts"),
				Je = i("./src/telemetry/eventSchemas/subreddit_types.js");
			const Ye = e => new Je.Profile({
				id: e.id,
				name: e.name,
				type: e.type || "default",
				display_name: e.display_name,
				about: e.about,
				avatar_url: e.avatar_url,
				cover_url: e.cover_url,
				nsfw: e.nsfw,
				content_visible: e.content_visible,
				communities_visible: e.communities_visible
			});
			var Xe = i("./src/telemetry/eventSchemas/ad_types.js");
			const Ze = e => new Xe.Programmatic({
				ad_unit: e.adUnit,
				count: e.count,
				partner: e.partner,
				type: e.type
			});
			var $e = i("./src/telemetry/eventSchemas/pwa_types.js");
			const et = e => new $e.PWA({
					installable: e.installable,
					installed: e.installed,
					install_timestamp: e.installTimestamp
				}),
				tt = e => new xe.Referrer({
					domain: e.domain,
					element: e.element,
					url: e.url
				}),
				it = e => new xe.Request({
					base_url: e.base_url,
					domain: e.domain,
					reddaid: e.reddaid,
					parameters: e.parameters,
					user_agent: e.user_agent,
					canonical_url: e.canonical_url,
					robots_meta_tag: e.robots_meta_tag
				}),
				nt = e => new xe.Response({
					last_modified_timestamp: e.lastModifiedTimestamp,
					code: e.code
				});
			var rt = i("./src/telemetry/eventSchemas/scheduled_post_types.js");
			const st = e => new rt.ScheduledPost({
				id: e.id,
				creator_user_id: e.owner,
				last_modified_user_id: e.lastModifiedUserId,
				created_timestamp: e.createdTimestamp,
				submission_timestamp: e.publishAt,
				timezone: e.clientTimezone,
				is_recurring: e.isRecurring
			});
			var ot = i("./src/reddit/constants/postLayout.ts"),
				dt = i("./src/telemetry/eventSchemas/device_types.js");
			const lt = J()(),
				at = e => e ? ot.e[e] : void 0,
				ut = e => new dt.Screen({
					browser_tab_id: lt,
					in_focus: "undefined" != typeof window && document.hasFocus ? document.hasFocus() : null,
					theme: e.theme,
					width: "undefined" != typeof window ? window.screen.width : null,
					height: "undefined" != typeof window ? window.screen.height : null,
					scroll_position: e.scrollPosition,
					viewport_width: "undefined" != typeof window ? window.innerWidth : null,
					viewport_height: "undefined" != typeof window ? window.innerHeight : null,
					view_type: e.viewType || at(e.layout)
				});
			var ct = i("./src/telemetry/eventSchemas/search_types.js");
			const _t = e => new ct.Search({
				origin_element: e.originElement,
				origin_page_type: e.originPageType,
				post_flair_name: e.postFlairName,
				query: e.query,
				range: e.range,
				sort: e.sort,
				structure_type: e.structureType,
				subreddit_name: e.subredditName,
				subreddit_id: e.subredditId,
				typeahead_active: e.typeaheadActive
			});
			var mt = i("./src/telemetry/eventSchemas/seo_types.js");
			const pt = e => new mt.SEO({
				internal_link_url: e.internalLinkUrl
			});
			var ht = i("./src/telemetry/eventSchemas/session_types.js");
			const ft = e => new ht.Session({
				id: e.id,
				referrer_url: e.referrerUrl,
				referrer_domain: e.referrerDomain,
				version: e.version,
				type: e.type,
				created_timestamp: e.createdTimestamp
			});
			var gt = i("./src/telemetry/eventSchemas/setting_types.js");
			const bt = e => new gt.Setting({
				value: e.value,
				old_value: e.oldValue
			});
			var wt = i("./src/telemetry/models/Subreddit.ts"),
				yt = i("./src/telemetry/models/Timer.ts"),
				vt = i("./src/telemetry/eventSchemas/tooltip_types.js");
			const Tt = e => new vt.Tooltip({
				id: e.id,
				text: e.text
			});
			var St = i("./src/telemetry/eventSchemas/topic_metadata_types.js");
			const Et = e => new St.TopicMetadata({
				id: e.id,
				display_name: e.displayName
			});
			var Ft = i("./src/telemetry/eventSchemas/topic_tag_types.js");
			const It = e => new Ft.TopicTag({
				id: e.id,
				content: e.content,
				type: e.type ? e.type.toLowerCase() : e.type,
				is_primary: e.isPrimary
			});
			var Ot = i("./src/telemetry/eventSchemas/user_types.js");
			const jt = e => new Ot.User({
					id: e.id,
					is_admin: e.isAdmin,
					created_timestamp: e.createdTimestamp,
					logged_in: e.isLoggedIn,
					cookie_created_timestamp: e.cookieCreatedTimestamp,
					has_gold: e.hasGold,
					has_premium: e.hasPremium,
					is_premium_subscriber: e.isPremiumSubscriber,
					number_coins: e.numberCoins,
					number_premium_days_remaining: e.numberPremiumDaysRemaining
				}),
				Bt = e => new Ot.UserPreferences({
					in_beta: e.inBeta,
					language: e.language,
					hide_nsfw: e.hideNsfw,
					expando: e.expando
				}),
				xt = e => new Ot.UserSubreddit({
					is_mod: e.isMod,
					mod_access: e.modAccess,
					mod_config: e.modConfig,
					mod_flair: e.modFlair,
					mod_full: e.modFull,
					mod_mail: e.modMail,
					mod_none: e.modNone,
					mod_post: e.modPost,
					mod_wiki: e.modWiki,
					is_subscriber: e.isSubscriber
				}),
				Rt = e => new X.Widget({
					type: e.type,
					target_subreddit_name: e.targetSubredditName,
					target_subreddit_id: e.targetSubredditId
				});
			var kt, Ct, Nt, Pt, Lt;
			! function(e) {
				e.Ban = "ban", e.Click = "click", e.Dismiss = "dismiss", e.Heartbeat = "heartbeat", e.Kick = "kick", e.Load = "load", e.ModDelete = "mod_delete", e.OptOut = "opt_out", e.Submit = "submit", e.View = "view"
			}(kt || (kt = {})),
			function(e) {
				e.Experiment = "experiment", e.Page = "page"
			}(Ct || (Ct = {})),
			function(e) {
				e.Expose = "expose", e.Load = "load"
			}(Nt || (Nt = {})),
			function(e) {
				e.UserId = "user_id", e.CanonicalUrl = "canonical_url"
			}(Pt || (Pt = {})),
			function(e) {
				e.Chat = "chat", e.ChatKeyboard = "chat_keyboard", e.ChatPerformance = "chat_performance", e.ChatPreview = "chat_preview", e.ChatSettings = "chat_settings", e.ChatSetup = "chat_setup", e.ChatSidebarModal = "chat_sidebar_modal", e.ChatSidebarWidget = "chat_sidebar_widget", e.ChatView = "chat_view", e.ContactsList = "contacts_list", e.Global = "global", e.InvitationInbox = "invitation_inbox", e.MessageInbox = "messages_inbox", e.Nav = "nav", e.UserHovercard = "user_hovercard"
			}(Lt || (Lt = {}));
			const At = e => new Y.Event({
					action: e.action,
					source: e.source,
					noun: e.noun,
					client_timestamp: Date.now(),
					uuid: J()(),
					correlation_id: e.correlationId || null,
					action_info: Dt(e.actionInfo, n),
					announcement: Dt(e.announcement, s),
					app: Dt(e.app, ne),
					banner: Dt(e.banner, o),
					chat: Dt(e.chat, d),
					click_test: Dt(e.clickTest, l),
					comment: Dt(e.comment, a),
					comment_composer: Dt(e.commentComposer, u),
					crawler: Dt(e.crawler, c),
					custom_feed: Dt(e.customFeed, _),
					dom_timer: Dt(e.domTimer, p),
					experiment: Dt(e.experiment, h),
					gold_purchase: Dt(e.goldPurchase, Te),
					listing: Dt(e.listing, f),
					live_thread: Dt(e.liveThread, g),
					media: Dt(e.media, Ie),
					meta_search: Dt(e.metaSearch, b),
					notification: Dt(e.notification, w),
					oauth: Dt(e.oauth, y),
					onboarding: Dt(e.onboarding, v),
					outbound: Dt(e.outbound, Ce),
					payment: Dt(e.payment, Ne),
					playback: Dt(e.playback, T),
					poll: Dt(e.poll, S),
					popup: Dt(e.popup, E),
					post: Dt(e.post, F),
					post_draft: Dt(e.postDraft, Ve),
					post_collection: Dt(e.postCollection, I),
					post_composer: Dt(e.postComposer, He),
					post_event: Dt(e.postEvent, O),
					post_flair: Dt(e.postFlair, j),
					post_requirement: Dt(e.postRequirement, Qe),
					profile: Dt(e.profile, B),
					programmatic: Dt(e.programmatic, x),
					pwa: Dt(e.pwa, R),
					referrer: Dt(e.referrer, k),
					request: Dt(e.request, C),
					response: Dt(e.response, N),
					scheduled_post: Dt(e.scheduledPost, P),
					screen: Dt(e.screen, L),
					search: Dt(e.search, A),
					seo: Dt(e.seo, D),
					session: Dt(e.session, G),
					setting: Dt(e.setting, M),
					subreddit: Dt(e.subreddit, wt),
					target_post: Dt(e.targetPost, F),
					target_subreddit: Dt(e.targetSubreddit, wt),
					timer: Dt(e.timer, yt),
					tooltip: Dt(e.tooltip, U),
					topic_metadata: Dt(e.topicMetadata, q),
					topic_tag: Dt(e.topicTag, H),
					user: Dt(e.user, V),
					user_preferences: Dt(e.userPreferences, W),
					user_subreddit: Dt(e.userSubreddit, z),
					widget: Dt(e.widget, K),
					adblock: Dt(e.adblock, r),
					discovery_unit: Dt(e.discoveryUnit, m)
				}),
				Dt = (e, t) => e ? t.toThrift(e) : null
		},
		"./src/telemetry/models/GoldPurchase.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "New", (function() {
				return r
			})), i.d(t, "Renew", (function() {
				return s
			})), i.d(t, "GiftCode", (function() {
				return o
			})), i.d(t, "GetPremium", (function() {
				return d
			})), i.d(t, "Cancel", (function() {
				return l
			})), i.d(t, "Gid1", (function() {
				return a
			})), i.d(t, "Gid2", (function() {
				return u
			})), i.d(t, "Gid3", (function() {
				return c
			})), i.d(t, "GidAppreciation", (function() {
				return _
			})), i.d(t, "GidPremium", (function() {
				return m
			})), i.d(t, "GidCommunity", (function() {
				return p
			})), i.d(t, "GidMod", (function() {
				return h
			})), i.d(t, "CoinsGid1", (function() {
				return f
			})), i.d(t, "CoinsGid2", (function() {
				return g
			})), i.d(t, "CoinsGid3", (function() {
				return b
			})), i.d(t, "CoinsGidCommunity", (function() {
				return w
			})), i.d(t, "CoinsGidMod", (function() {
				return y
			})), i.d(t, "Premium", (function() {
				return v
			})), i.d(t, "Coins", (function() {
				return T
			})), i.d(t, "HideAds", (function() {
				return S
			})), i.d(t, "PremiumMarketing", (function() {
				return E
			})), i.d(t, "CoinsMarketing", (function() {
				return F
			})), i.d(t, "GiveGold", (function() {
				return I
			})), i.d(t, "toThrift", (function() {
				return O
			}));
			var n = i("./src/telemetry/eventSchemas/gold_types.js");
			const r = "new",
				s = "renew",
				o = "gift_code",
				d = "get_premium",
				l = "cancel",
				a = "gid_1",
				u = "gid_2",
				c = "gid_3",
				_ = "gid_appreciation",
				m = "gid_premium",
				p = "gid_community",
				h = "gid_mod",
				f = "coins_gid_1",
				g = "coins_gid_2",
				b = "coins_gid_3",
				w = "coins_gid_community",
				y = "coins_gid_mod",
				v = "premium",
				T = "coins",
				S = "hide_ads",
				E = "premium_marketing",
				F = "coins_marketing",
				I = "give_gold",
				O = e => new n.GoldPurchase({
					default_option: e.defaultOption,
					default_anonymous: e.defaultAnonymous,
					gilded_content: e.gildedContent,
					number_coins: e.numberCoins,
					source: e.source,
					transaction_id: e.transactionId,
					type: e.type,
					content_type: e.contentType,
					awardee_karma_earned: e.awardeeKarmaEarned,
					awarder_karma_earned: e.awarderKarmaEarned,
					award_id: e.awardId,
					award_name: e.awardName,
					is_mod_award: e.isModAward,
					number_coins_to_community: e.numberCoinsToCommunity,
					number_coins_to_recipient: e.numberCoinsToRecipient,
					number_months: e.numberMonths,
					offer_type: e.offerType,
					offer_context: e.offerContext,
					award_col_position: e.awardColPosition,
					award_row_position: e.awardRowPosition,
					filter_id: e.filterId,
					filter_name: e.filterName
				})
		},
		"./src/telemetry/models/Media.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "FileSource", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return s
			}));
			var n, r = i("./src/telemetry/eventSchemas/content_types.js");
			! function(e) {
				e.FileSelector = "fileselector", e.Clipboard = "clipboard", e.DragAndDrop = "drag_and_drop"
			}(n || (n = {}));
			const s = e => new r.Media({
				height: e.height,
				load_time: e.loadTime,
				width: e.width,
				id: e.id,
				duration: e.duration,
				mimetype: e.mimetype,
				size: e.size,
				url: e.url,
				source: e.source,
				upload_duration: e.uploadDuration,
				file_name: e.fileName,
				sound: e.sound,
				type: e.type,
				thumbnail_url: e.thumbnailUrl,
				time: e.time,
				orientation: e.orientation,
				max_time_served: e.maxTimeServed,
				cdn_name: e.cdnName,
				cdn_region: e.cdnRegion,
				destination_region: e.destinationRegion,
				stream_public_id: e.streamPublicId,
				stream_private_id: e.streamPrivateId,
				stream_ended_timestamp: e.streamEndedTimestamp
			})
		},
		"./src/telemetry/models/Outbound.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "SourceElement", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return s
			}));
			var n, r = i("./src/telemetry/eventSchemas/outbound_types.js");
			! function(e) {
				e.ListingPostImage = "listing_post_image", e.ListingPostLink = "listing_post_link", e.ListingPostDetail = "listing_post_detail", e.PostImage = "post_image", e.PostLink = "post_link", e.PostDetail = "post_detail", e.Comment = "comment"
			}(n || (n = {}));
			const s = e => new r.Outbound({
				url: e.url,
				post_id: e.postId,
				subreddit_id: e.subredditId,
				comment_id: e.commentId,
				subreddit_name: e.subredditName,
				source_element: e.sourceElement
			})
		},
		"./src/telemetry/models/Payment.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "PaymentMethod", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return s
			}));
			var n, r = i("./src/telemetry/eventSchemas/payment_types.js");
			! function(e) {
				e.CreditCard = "credit_card", e.Paypal = "paypal"
			}(n || (n = {}));
			const s = e => new r.Payment({
				amount_in_smallest_denom: e.amountInSmallestDenom,
				currency: e.currency,
				default_option: e.defaultOption,
				method: e.method
			})
		},
		"./src/telemetry/models/PostComposer.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "toThrift", (function() {
				return r
			})), i.d(t, "ToggleAction", (function() {
				return s
			})), i.d(t, "getToggleAction", (function() {
				return o
			})), i.d(t, "ToggleNoun", (function() {
				return d
			}));
			var n = i("./src/telemetry/eventSchemas/content_types.js");
			const r = e => new n.PostComposer({
				editor_mode: e.editorMode,
				final_status: e.finalStatus,
				input_type: e.inputType,
				text_type: e.textType,
				type: e.type,
				post_scheduled: e.postScheduled,
				submit_scheduled_timestamp: e.submitScheduledTime
			});
			var s;
			! function(e) {
				e.DESELECT = "deselect", e.SELECT = "select"
			}(s || (s = {}));
			const o = e => e ? s.SELECT : s.DESELECT;
			var d;
			! function(e) {
				e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "original_content", e.SPOILER = "spoiler", e.CHAT = "chat"
			}(d || (d = {}))
		},
		"./src/telemetry/models/PostDraft.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "DraftType", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return s
			}));
			var n, r = i("./src/telemetry/eventSchemas/post_draft_types.js");
			! function(e) {
				e.Self = "self", e.RichText = "multi_media", e.Link = "link", e.Image = "image", e.Video = "video"
			}(n || (n = {}));
			const s = e => new r.PostDraft({
				author_id: e.authorId,
				body_text_length: e.bodyTextLength,
				created_timestamp: e.createdTimestamp,
				flair: e.flair,
				id: e.id,
				nsfw: e.nsfw,
				number_rte_images: e.numberRteImages,
				number_rte_videos: e.numberRteVideos,
				original_content: e.originalContent,
				spoiler: e.spoiler,
				title_length: e.titleLength,
				type: e.type,
				url_length: e.urlLength
			})
		},
		"./src/telemetry/models/PostRequirement.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "BodyRestrictionPolicy", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return a
			}));
			var n, r = i("./node_modules/lodash/mapKeys.js"),
				s = i.n(r),
				o = i("./node_modules/lodash/snakeCase.js"),
				d = i.n(o),
				l = i("./src/telemetry/eventSchemas/post_requirement_types.js");
			! function(e) {
				e.Optional = "optional", e.Required = "required", e.Disabled = "disabled"
			}(n || (n = {}));
			const a = e => new l.PostRequirement(s()(e, (e, t) => d()(t)))
		},
		"./src/telemetry/models/Subreddit.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "toThrift", (function() {
				return s
			})), i.d(t, "getSubscribeEventNoun", (function() {
				return o
			}));
			var n = i("./src/reddit/constants/posts.ts"),
				r = i("./src/telemetry/eventSchemas/subreddit_types.js");
			const s = e => new r.Subreddit({
					access_type: e.accessType,
					nsfw: e.nsfw,
					public_description: e.publicDescription,
					number_coins: e.numberCoins,
					id: e.id,
					name: e.name,
					category_name: e.categoryName,
					topic_tag_ids: e.topicTagIds,
					topic_tag_contents: e.topicTagContents,
					topic_tag_types: e.topicTagTypes,
					topic_tag_primary_id: e.topicTagPrimaryId
				}),
				o = (e, t) => e === n.a.PROFILE ? t ? "unfollow" : "follow" : t ? "unsubscribe" : "subscribe"
		},
		"./src/telemetry/models/Timer.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "TimerType", (function() {
				return n
			})), i.d(t, "toThrift", (function() {
				return s
			}));
			var n, r = i("./src/telemetry/eventSchemas/timer_types.js");
			! function(e) {
				e.GoodVisit = "good_visit", e.Initial = "initial_page_load", e.InApp = "in_app_navigation", e.UserCancelled = "user_cancelled", e.HeartbeatIdleTime = "heartbeat_idle_time", e.ChatLoadInboxNew = "chat_performance_load_inbox_new", e.ChatLoadInboxCached = "chat_performance_load_inbox_cached", e.ChatLoadChannelNew = "chat_performance_load_channel_new", e.ChatLoadChannelCached = "chat_performance_load_channel_cached", e.VideoFirstFrame = "video_first_frame"
			}(n || (n = {}));
			const s = e => new r.Timer({
				type: e.type,
				millis: e.millis,
				time_to_first_byte: e.timeToFirstByte,
				first_contentful_paint: e.firstContentfulPaint,
				first_meaningful_paint: e.firstMeaningfulPaint,
				first_input_delay: e.firstInputDelay
			})
		},
		"ignored /drone/src/node_modules/bn.js/lib buffer": function(e, t) {},
		"ignored /drone/src/node_modules/brorand crypto": function(e, t) {},
		"ignored /drone/src/node_modules/readable-stream/lib util": function(e, t) {},
		"ignored /drone/src/node_modules/readable-stream/lib/internal/streams util": function(e, t) {}
	}
]);
//# sourceMappingURL=Chat~Governance~Reddit.7168cb34769cb7ce2825.js.map