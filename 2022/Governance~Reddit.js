// https://www.redditstatic.com/desktop2x/Governance~Reddit.0fcd59ef73f61ae27210.js
// Retrieved at 11/15/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, n) {},
		"./src/lib/asyncActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = e => `${e}_REQUESTED`,
				a = e => `${e}_SUCCEEDED`,
				c = e => `${e}_FAILED`;

			function o(e) {
				const t = s(e),
					n = a(e),
					o = c(e);
				return {
					requestedActionType: t,
					requested: Object(r.a)(t),
					succeededActionType: n,
					succeeded: Object(r.a)(n),
					failedActionType: o,
					failed: Object(r.a)(o)
				}
			}
			var i;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(i || (i = {}));
			const d = (e, t, n) => (function() {
				let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.New,
					s = arguments.length > 1 ? arguments[1] : void 0;
				switch (s.type) {
					case e:
						return r === i.New ? i.Pending : r;
					case t:
						return r === i.Pending ? i.Succeeded : r;
					case n:
						return r === i.Pending ? i.Failed : r;
					default:
						return r
				}
			})
		},
		"./src/lib/omitKey/index.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (t in e) {
					const {
						[t]: n, ...r
					} = e;
					return r
				}
				return e
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			n("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = e => "object" == typeof e && null !== e,
				c = () => "undefined" != typeof window && a(window) && a(window.grecaptcha) && a(window.grecaptcha.enterprise),
				o = () => c() ? window.grecaptcha.enterprise : void 0,
				i = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				d = e => Object(s.a)(i(e), c),
				l = e => new Promise(t => e.ready(t));
			var u, p = n("./node_modules/ts-error/lib/cjs.js"),
				f = n.n(p);
			class MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError extends f.a {
				constructor() {
					super("reCaptcha Enterprise site key is not set")
				}
			}
			class ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError extends f.a {
				constructor() {
					super("reCaptcha Enterprise client is not ready")
				}
			}
			class ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError extends f.a {
				constructor() {
					super("reCaptcha Enterprise client is not available")
				}
			}! function(e) {
				e.PageLoad = "PAGE_LOAD"
			}(u || (u = {}));
			var h = u;
			const b = new class {
				constructor() {
					var e = this;
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.a.reCaptchaEnterprise.siteKey,
						n = arguments.length > 1 ? arguments[1] : void 0;
					this.siteKey = t, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => i(this.siteKey), this.ensureSiteKey = () => {
						if (!this.hasSiteKey) throw new MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError
					}, this.ensureClient = () => {
						const e = this.instance;
						if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
						return e
					}, this.waitUntilClientIsReady = async () => {
						const e = this.ensureClient();
						return await l(e), this.isReady = !0, e
					}, this.ensureClientIsReady = () => {
						const e = this.ensureClient();
						if (!this.isReady) throw new ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError;
						return e
					}, this.loadScript = async function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (!e.instance || t) {
							e.ensureSiteKey(), await d(e.siteKey);
							const t = o();
							if (!t) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							e.setInstance(t)
						}
						e.isReady || await e.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							n = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(n)[1]
						}
						return n
					}, this.setInstance(n || o())
				}
			};
			t.b = b
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, n) {},
		"./src/reddit/actions/accountGender/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "ACCOUNT_GENDER_LOADED",
				s = "ACCOUNT_GENDER_UPDATED",
				a = "ACCOUNT_GENDER_UPDATE_FAILED"
		},
		"./src/reddit/actions/adsSignals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "ADS_SIGNALS__RESET_SIGNALS",
				a = Object(r.a)(s)
		},
		"./src/reddit/actions/apiRequestHeaders.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "API_REQUEST_HEADERS__set",
				a = Object(r.a)(s)
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				a = Object(r.a)(s)
		},
		"./src/reddit/actions/badge.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts");
			const c = "BADGE__BADGE_APPLICATION_SUCCESS",
				o = "BADGE__BADGE_APPLICATION_FAILURE",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				l = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				u = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				f = "BADGE__USER_BADGES_FETCH_PENDING",
				h = Object(r.a)(c),
				b = Object(r.a)(o),
				y = (Object(r.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(r.a)(i)),
				g = Object(r.a)(d),
				m = Object(r.a)(l),
				v = (Object(r.a)(u), Object(r.a)(p), Object(r.a)(f), e => {
					let {
						badgeIds: t,
						subredditId: n
					} = e;
					return async (e, r, c) => {
						let {
							apiContext: o
						} = c;
						const i = r(),
							d = i.user.account;
						if (d) {
							const r = (i.users.appliedBadges[d.id] || {})[n] || [],
								c = t.length ? t[0] : r[0],
								l = !!t.length;
							e(h({
								badgeIds: t,
								subredditId: n,
								userId: d.id
							}));
							const u = await Object(a.a)(o(), n, c, l);
							u.ok || (e(b({
								badgeIds: t,
								subredditId: n,
								error: u.error,
								previousBadgeIds: r,
								userId: d.id
							})), Object(s.a)(e, u.error))
						}
					}
				}),
				E = e => {
					let {
						subredditId: t,
						userIds: n
					} = e;
					return async (e, r, s) => {
						let {
							apiContext: c
						} = s;
						e(m({
							subredditId: t
						}));
						const o = await Object(a.b)(c(), t, n);
						o.ok ? e(y({
							...o.body,
							subredditId: t
						})) : e(g({
							subredditId: t,
							error: o.error
						}))
					}
				}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "g", (function() {
				return m
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const c = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var o = n("./src/reddit/selectors/blockedRedditors.ts");
			const i = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				f = Object(r.a)(i),
				h = Object(r.a)(d),
				b = Object(r.a)(l),
				y = Object(r.a)(u),
				g = Object(r.a)(p),
				m = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t(),
						a = Object(o.a)(s);
					if (Object(o.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let i = !1,
						d = "";
					do {
						e(g());
						const t = {
								after: d,
								pageSize: 100
							},
							n = await c(r(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: n,
									edges: r
								} = t.blockedRedditorsInfo;
								if (e(y(r.map(e => e.node.id))), n) {
									const {
										hasNextPage: e,
										endCursor: t
									} = n;
									i = e, d = t || ""
								}
							} else i = !1
						} else {
							i = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (i)
				}
		},
		"./src/reddit/actions/category/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			const r = "CATEGORY__LIST_PENDING",
				s = "CATEGORY__LIST_LOADED",
				a = "CATEGORY__LIST_FAILED",
				c = "CATEGORY__SUBREDDITS_PENDING",
				o = "CATEGORY__SUBREDDITS_LOADED",
				i = "CATEGORY__SUBREDDITS_FAILED",
				d = "CATEGORY__RANK_SET"
		},
		"./src/reddit/actions/chat/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
			}(r || (r = {}));
			const a = {
					[r.anybody]: () => s.fbt._("Everyone", null, {
						hk: "YHmqV"
					}),
					[r.account_age_30_days]: () => s.fbt._("Accounts older than 30 days", null, {
						hk: "1g4Gwx"
					}),
					[r.nobody]: () => s.fbt._("Nobody", null, {
						hk: "2m0XS"
					})
				},
				c = e => {
					const t = a[e];
					return t && t()
				}
		},
		"./src/reddit/actions/chat/liveChatTooltipShowState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			var r = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/chat.ts");
			const i = "CHAT__SET_LIVECHAT_TOOLTIP_SHOW_STATE",
				d = e => Object(r.c)(s.r.CHAT, s.A.CHAT_LIVECHAT_ANNOUNCEMENT_TOOLTIP_SHOW_STATE, e),
				l = Object(a.a)(i),
				u = (e, t) => async (n, s) => {
					const a = s(),
						i = Object(o.b)(a);
					if (!c.a[i].includes(e)) return;
					const u = d(t);
					Object(r.d)(u, e, r.a), n(l(e))
				}, p = e => async t => {
					const n = d(e),
						s = Object(r.b)(n);
					s && t(l(s))
				}
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/chat/userSettings.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			var i = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/telemetry/index.ts"),
				l = n("./src/reddit/actions/chat/constants.ts");
			const u = Object(s.a)("USER_SETTINGS__FETCH_PENDING"),
				p = Object(s.a)("USER_SETTINGS__FETCH_FAILURE"),
				f = "USER_SETTINGS__UPDATE_SUCCESS",
				h = Object(s.a)(f),
				b = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					e(u());
					const s = await Object(c.b)(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(h({
							invitePolicy: l.a[t.invite_policy]
						}))
					} else e(p(s.error))
				}, y = Object(s.a)("USER_SETTINGS__SAVE_PENDING"), g = Object(s.a)("USER_SETTINGS__SAVE_FAILURE"), m = e => Object.keys(l.a).find(t => l.a[t] === e), v = e => async (t, n, s) => {
					let {
						apiContext: u
					} = s;
					const p = n(),
						{
							invitePolicy: f
						} = e,
						b = m(f);
					if (b) {
						t(y());
						const e = m(p.user.chatSettings.invitePolicy),
							n = await Object(c.e)(b, u());
						if (Object(d.a)(((e, t) => n => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: t
								},
								...Object(o.o)(n)
							}))(b, e)(p)), n.ok) {
							const e = l.a[b];
							t(h({
								invitePolicy: e
							})), t(Object(a.f)({
								kind: i.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "4eTtdy"
								})
							}))
						} else t(g(n.error))
					}
				}, E = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					await Object(c.d)(r(), [])
				}
		},
		"./src/reddit/actions/comment/list.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/helpers/trackers/commentList.ts");
			const a = "COMMENTLIST__MARKED_END",
				c = "COMMENTLIST__UNMARKED_END",
				o = Object(r.a)(a),
				i = Object(r.a)(c),
				d = (e, t) => async (n, r) => {
					const a = r();
					e in a.profileCommentsPage.fetchedTokens ? e in a.profileCommentsPage.commentIds ? n(i({
						listingKey: e
					})) : Object(s.a)(a, e) : n(o({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/commentsListTruncated/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "COMMENTS_LIST__EXPANDED",
				s = "COMMENTS_LIST__TRUNCATED"
		},
		"./src/reddit/actions/connection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "CONNECTION__GO_ONLINE",
				s = "CONNECTION__GO_OFFLINE",
				a = "CONNECTION__HIDE_BANNER"
		},
		"./src/reddit/actions/cooldownTime.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return g
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const a = {
				query: 'mutation GetPersonalizedTimer{\n  act(\n    input: {actionName: "r/replace:get_user_cooldown"}\n  ) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on GetUserCooldownResponseMessageData {\n            nextAvailablePixelTimestamp\n          }\n        }\n      }\n    }\n  }\n}\n\n\nsubscription SUBSCRIBE_TO_CONFIG_UPDATE {\n  subscribe(input: {channel: {teamOwner: AFD2022, category: CONFIG}}) {\n    id\n    ... on BasicMessage {\n      data {\n        ... on ConfigurationMessageData {\n          __typename\n          colorPalette {\n            colors {\n              hex\n              index\n            }\n          }\n          canvasConfigurations {\n            dx\n            dy\n            index\n          }\n          canvasWidth\n          canvasHeight\n        }\n      }\n    }\n  }\n}\n\n\nsubscription SUBSCRIBE_TO_CANVAS_UPDATE {\n  subscribe(\n    input: {channel: {teamOwner: AFD2022, category: CANVAS, tag: "0"}}\n  ) {\n    id\n    ... on BasicMessage {\n      id\n      data {\n        __typename\n        ... on DiffFrameMessageData {\n          currentTimestamp\n          previousTimestamp\n          name\n        }\n        ... on FullFrameMessageData {\n          __typename\n          name\n          timestamp\n        }\n      }\n    }\n  }\n}\n\n\n\n\nmutation SET_PIXEL {\n  act(\n    input: {actionName: "r/replace:set_pixel", PixelMessageData: {coordinate: { x: 53, y: 35}, colorIndex: 3, canvasIndex: 0}}\n  ) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on SetPixelResponseMessageData {\n            timestamp\n          }\n        }\n      }\n    }\n  }\n}\n\n\n\n\n# subscription configuration($input: SubscribeInput!) {\n#     subscribe(input: $input) {\n#       id\n#       ... on BasicMessage {\n#         data {\n#           __typename\n#           ... on RReplaceConfigurationMessageData {\n#             colorPalette {\n#               colors {\n#                 hex\n#                 index\n#               }\n#             }\n#             canvasConfigurations {\n#               index\n#               dx\n#               dy\n#             }\n#             canvasWidth\n#             canvasHeight\n#           }\n#         }\n#       }\n#     }\n#   }\n\n# subscription replace($input: SubscribeInput!) {\n#   subscribe(input: $input) {\n#     id\n#     ... on BasicMessage {\n#       data {\n#         __typename\n#         ... on RReplaceFullFrameMessageData {\n#           name\n#           timestamp\n#         }\n#         ... on RReplaceDiffFrameMessageData {\n#           name\n#           currentTimestamp\n#           previousTimestamp\n#         }\n#       }\n#     }\n#   }\n# }\n',
				variables: {
					input: {
						channel: {
							teamOwner: "GROWTH",
							category: "R_REPLACE",
							tag: "canvas:0:frames"
						}
					}
				},
				operationName: "GetPersonalizedTimer",
				id: null
			};
			var c = e => Object(s.a)(e, {
					...a
				}),
				o = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const d = "FETCH_COOLDOWN_TIMER__PENDING",
				l = "FETCH_COOLDOWN_TIMER__SUCCESS",
				u = "FETCH_COOLDOWN_TIMER__FAILED",
				p = Object(r.a)(d),
				f = Object(r.a)(l),
				h = Object(r.a)(u),
				b = "SET__COOLDOWN_TIMER",
				y = Object(r.a)(b),
				g = () => async (e, t, n) => {
					let {
						gqlRealtime2Context: r
					} = n;
					const s = t(),
						a = Object(i.R)(s),
						d = !!Object(o.b)(s),
						{
							expiresAt: l,
							api: {
								pending: u
							}
						} = s.cooldownTimer,
						b = l <= Date.now();
					if (!a || !r || !b || !d || u) return;
					e(p());
					const g = await c(r());
					if (g.ok && g.body) {
						const t = g.body.data.act.data.find(e => e.data.nextAvailablePixelTimestamp),
							n = (null == t ? void 0 : t.data.nextAvailablePixelTimestamp) || null;
						e(y({
							expiresAt: n
						})), e(f())
					} else e(h({
						error: null == g ? void 0 : g.error
					}))
				}
		},
		"./src/reddit/actions/crosspostSubredditRec/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/postCreation/general.ts"),
				a = n("./src/reddit/selectors/experiments/crosspostRecommendations.ts");
			var c = n("./src/lib/initializeClient/installReducer.ts");
			var o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER":
						return !0;
					case "CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER":
						return !1;
					default:
						return e
				}
			};
			Object(c.a)({
				features: {
					shouldTryToShowCrosspostModal: o
				}
			});
			const i = Object(r.a)("CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER"),
				d = Object(r.a)("CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER"),
				l = e => async (t, n) => {
					const r = n();
					if (!Object(a.b)(r)) return;
					const c = e.title,
						o = Object(a.d)(e),
						i = Object(a.c)(e);
					t(Object(s.j)(c, o, i, t => {
						const n = e.belongsTo.id === t.id,
							r = "isCrosspostDestination" in t && t.isCrosspostDestination;
						return n || !r
					}))
				}
		},
		"./src/reddit/actions/dismissedTruncationList/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "DISMISSED_TRUNCATION_LIST__ADD_SUBREDDIT_ID"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			const r = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				a = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				c = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				a = "EMBEDS__LOADABLE",
				c = Object(r.a)(s),
				o = Object(r.a)(a)
		},
		"./src/reddit/actions/emoji.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return I
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "o", (function() {
				return M
			})), n.d(t, "n", (function() {
				return F
			})), n.d(t, "k", (function() {
				return G
			})), n.d(t, "l", (function() {
				return q
			})), n.d(t, "i", (function() {
				return H
			})), n.d(t, "j", (function() {
				return Q
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "m", (function() {
				return K
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/forEach.js"),
				a = n.n(s),
				c = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/lib/uploadToS3/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			const u = async (e, t) => Object(o.a)(Object(i.a)(e, [l.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: c.ob.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const n = a()(e, (e, n) => ("snoomojis" !== n && (t = n), a()(e, (t, n) => {
					e[n] = {
						name: n,
						userFlairAllowed: t.user_flair_allowed,
						postFlairAllowed: t.post_flair_allowed,
						modFlairOnly: t.mod_flair_only,
						url: t.url
					}
				})));
				return {
					[t]: {
						emojis: n[t],
						snoomojis: n.snoomojis
					}
				}
			})(e.body)), e));
			var p = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./src/reddit/actions/imageUploads.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/helpers/getGenericUploadError.ts"),
				y = n("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/reddit/models/Emoji/index.ts"),
				v = n("./src/reddit/models/Image/index.tsx"),
				E = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/emojis.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts");
			const I = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				S = Object(p.a)(I),
				T = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				w = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				D = Object(p.a)(T),
				j = Object(p.a)(w),
				A = "GET_ALL_EMOJIS_PENDING",
				C = "GET_ALL_EMOJIS_LOADED",
				P = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(A),
				N = Object(p.a)(C),
				x = Object(p.a)(P),
				L = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				k = Object(p.a)(L),
				U = e => ({
					text: r.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: r.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: F(e)
				}),
				M = e => {
					let {
						imageData: t,
						subredditId: n
					} = e;
					return async (e, r, s) => {
						const a = r(),
							u = Object(_.Y)(a, {
								subredditId: n
							}).name;
						e(Object(f.k)(t));
						const p = t.file,
							h = await Object(g.h)(p),
							b = await (async (e, t, n, r) => Object(o.a)(Object(i.a)(e, [l.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: c.ob.POST,
								data: {
									filepath: n,
									mimetype: r
								}
							}))(s.apiContext(), u, p.name, h);
						let y = !1;
						if (b.ok) {
							const n = await (async (e, t, n) => Object(d.a)(n, t))(s.apiContext(), b.body.s3UploadLease, p);
							if (n.ok) {
								if (!r().imageUploads[t.id]) return Object(v.d)(t), !1;
								const s = decodeURIComponent(n.body.PostResponse.Location),
									a = b.body.websocketUrl,
									c = Object(v.n)(t, s, a);
								e(Object(f.j)(c)), y = !0
							} else {
								const r = Object(v.k)(t, n.error);
								e(Object(f.i)(r))
							}
						} else {
							const n = Object(v.k)(t, b.error);
							e(Object(f.i)(n))
						}
						return y
					}
				},
				B = (e, t) => async (n, r, s) => {
					const {
						imageData: a,
						subredditId: d,
						emojiName: u,
						settings: p
					} = e, b = Object(y.a)(a.url), g = r(), m = Object(_.Y)(g, {
						subredditId: d
					}).name, E = await (async (e, t, n, r, s) => Object(o.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.ob.POST,
						data: {
							s3_key: n,
							name: r,
							mod_flair_only: s.modFlairOnly,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed
						}
					}))(s.apiContext(), m, b, u, p);
					if (!E.ok) {
						const r = Object(v.k)(a, E.error);
						n(Object(f.i)(r)), n(Object(h.f)(U(e))), t && t.close()
					}
					return E.ok
				}, F = e => async (t, n, s) => {
					const {
						imageData: a,
						subredditId: c,
						emojiName: o,
						settings: i
					} = e;
					if (t(Object(f.k)(a)), !a.websocketUrl) return t(Object(h.f)({
						text: r.fbt._("Could not upload emoji", null, {
							hk: "29nzfh"
						})
					}));
					let d;
					const l = new WebSocket(a.websocketUrl);
					return l.onopen = async () => {
						d = await B(e, l)(t, n, s)
					}, l.onmessage = n => {
						const r = JSON.parse(n.data);
						if ("success" === r.type) {
							d = !0;
							const e = r.payload.emoji_url,
								n = Object(v.o)(a, e);
							t(Object(f.l)(n));
							const s = Object(m.e)(o, n.url, c, i);
							t(S(s)), t(G(c))
						} else {
							const n = Object(b.a)(o),
								r = Object(v.k)(a, n);
							t(Object(f.i)(r)), t(Object(h.f)(U(e)))
						}
						l.close()
					}, l.onerror = n => {
						d = !1;
						const r = Object(b.a)(o),
							s = Object(v.k)(a, r);
						t(Object(f.i)(s)), t(Object(h.f)(U(e))), l.close()
					}, d
				}, G = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n();
					if (Object(O.a)(a, e)) return;
					const c = Object(_.Y)(a, {
						subredditId: e
					}).name;
					t(R(e));
					const o = await u(s(), c);
					if (o.ok) {
						const n = o.body;
						t(N({
							subredditId: e,
							data: n
						}))
					} else t(x({
						subredditId: e,
						error: o.error
					}))
				}, q = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					n().emojis[e] || await t(G(e))
				}, H = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const u = s(),
						p = Object(_.Y)(u, {
							subredditId: t
						}).name,
						f = await (async (e, t, n) => Object(o.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/v1/${n}/emoji/${t}`,
							method: c.ob.DELETE,
							type: "json"
						}))(d(), e, p);
					if (f.ok) {
						n(D({
							emojiName: e,
							subredditId: t
						})), n(h.f({
							kind: E.b.SuccessCommunityGreen,
							text: r.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else n(j(f.error)), n(h.f({
						kind: E.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, Q = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const u = s(),
						p = Object(_.Y)(u, {
							subredditId: e
						}).name;
					if ((await (async (e, t, n) => Object(o.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: c.ob.POST,
							data: {
								subreddit: t,
								enable: n
							}
						}))(d(), p, t)).ok) {
						n(k({
							subredditId: e,
							emojisEnabled: t
						}))
					} else n(h.f({
						kind: E.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, W = "EMOJI_PERMISSIONS_UPDATED", V = Object(p.a)(W), K = (e, t, n, s) => async (a, d, u) => {
					let {
						apiContext: p
					} = u;
					const f = d(),
						b = Object(_.Y)(f, {
							subredditId: s
						}).name;
					(await (async (e, t, n, r) => Object(o.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/v1/${n}/emoji_permissions.json`,
						method: c.ob.POST,
						data: {
							name: t,
							post_flair_allowed: r.postFlairAllowed,
							user_flair_allowed: r.userFlairAllowed,
							mod_flair_only: r.modFlairOnly
						}
					}))(p(), e, b, n)).ok ? (a(V({
						emojiName: e,
						isSnoomoji: t,
						settings: n,
						subredditId: s
					})), a(h.f({
						kind: E.b.SuccessCommunityGreen,
						text: r.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(h.f({
						kind: E.b.Error,
						text: r.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
		},
		"./src/reddit/actions/experiments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			n("./src/reddit/endpoints/user/index.ts"), n("./src/reddit/models/Post/index.ts"), n("./src/reddit/selectors/telemetry.ts");
			const s = "EXPERIMENTS__REQUEST_LOADED",
				a = (Object(r.a)("EXPERIMENTS__REQUEST_PENDING"), Object(r.a)("EXPERIMENTS__REQUEST_FAILED"), Object(r.a)(s), "EXPERIMENTS__SET_EXPERIMENT_OVERRIDE"),
				c = Object(r.a)(a)
		},
		"./src/reddit/actions/exportImportStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/loadWithRetries/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/models/StructuredStyles/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
			const u = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				f = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				h = Object(a.a)(u),
				b = Object(a.a)(p),
				y = Object(a.a)(f),
				g = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				v = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				E = e => async (t, a) => {
					t(h());
					const c = a(),
						i = Object(l.Y)(c, {
							subredditId: e
						}).name,
						u = c.structuredStyles.models[e],
						p = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ExportTheme")]).then(n.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						f = await p(u, i);
					f.ok ? (t(b()), t(Object(o.f)({
						kind: d.b.SuccessMod,
						text: r.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(y(f.error)), t(Object(o.f)({
						kind: d.b.Error,
						text: r.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, O = e => async (t, a) => {
					t(g());
					const l = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ImportTheme")]).then(n.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						u = await l(e);
					u.ok ? (t(m()), t(Object(o.f)({
						kind: d.b.SuccessMod,
						text: r.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(u.attributes).length && t(Object(c.d)(Object(i.j)(u.attributes)))) : (t(v(u.error)), t(Object(o.f)({
						kind: d.b.Error,
						text: r.fbt._("Sorry, theme failed to import", null, {
							hk: "4BqW32"
						})
					})))
				}
		},
		"./src/reddit/actions/firstPost/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			}));
			const r = "SET_CURRENT_PROMPT_INDEX",
				s = "SET_FORM_FIRST_EDIT_EVENT",
				a = "SET_FIRST_POST_TITLE",
				c = "SET_FIRST_POST_SUBREDDIT",
				o = "SET_FIRST_POST_BODY",
				i = "SET_SELECTED_PREDICATES_INT"
		},
		"./src/reddit/actions/flairManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "FLAIR_PREVIEW_EXAMPLE_POST_CREATED",
				s = "FLAIR_PREVIEW_EXAMPLE_POST_DELETED"
		},
		"./src/reddit/actions/global/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "LOCAL_STORAGE_LOADED"
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/happeningNow/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			}));
			const r = "HAPPENING_NOW__SET_LATEST_UNREAD_CONTENT_TIMESTAMP",
				s = "HAPPENING_NOW__LAST_READ_TIMESTAMP",
				a = "HAPPENING_NOW__SET_SHOULD_SHOW_FIRST_TIME_TOOLTIP",
				c = "HAPPENING_NOW__FETCH_LIVE_DISCOVERY_CONTENT_PENDING",
				o = "HAPPENING_NOW__FETCH_LIVE_DISCOVERY_CONTENT_SUCCESS",
				i = "HAPPENING_NOW__FETCH_LIVE_DISCOVERY_CONTENT_FAILURE",
				d = "HAPPENING_NOW__SET_SELECTED_FILTER"
		},
		"./src/reddit/actions/harbergerTax/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			}));
			const r = "HARBERGER_TAX__BANNER_MANAGE_MODAL_OPENED",
				s = "HARBERGER_TAX__BANNER_PURCHASE_MODAL_OPENED",
				a = "HARBERGER_TAX__BANNER_CRYPTO_MANAGE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				o = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
				i = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				d = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
				l = "HARBERGER_TAX__BANNER_UPDATE_FAILURE",
				u = "HARBERGER_TAX__BANNER_UPDATE_PENDING",
				p = "HARBERGER_TAX__BANNER_UPDATE_SUCCESS"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "IMAGE_OCR_ALT_TEXT__LOADED",
				s = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inAppNotifications/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "IN_APP_NOTIFICATIONS__SHOULD_HIDE"
		},
		"./src/reddit/actions/isTrackingCrossposts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/post/index.tsx");
			const a = "TRACKING_CROSSPOSTS_LOADED",
				c = Object(r.a)(a),
				o = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					const o = await Object(s.c)(a(), {
						postId: e
					});
					if (o.ok) {
						const {
							isTrackingCrossposts: n
						} = o.body.data.postInfoById;
						t(c({
							[e]: n
						}))
					}
				}
		},
		"./src/reddit/actions/langSite/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "LANG_SITE_BANNER_CLOSED",
				a = Object(r.a)(s)
		},
		"./src/reddit/actions/leaderboard/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				s = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				a = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "LINKED_POSTS__POSTS_PENDING",
				s = "LINKED_POSTS__POSTS_LOADED",
				a = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/merchandisingUnitAnnouncements/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "MERCHANDISING_UNIT_ANNOUNCEMENTS__DISMISS"
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return r
			})), n.d(t, "r", (function() {
				return s
			})), n.d(t, "s", (function() {
				return a
			})), n.d(t, "t", (function() {
				return c
			})), n.d(t, "u", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "A", (function() {
				return I
			})), n.d(t, "B", (function() {
				return S
			})), n.d(t, "z", (function() {
				return T
			})), n.d(t, "y", (function() {
				return w
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "x", (function() {
				return A
			})), n.d(t, "d", (function() {
				return C
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				s = "MULTIREDDIT__MORE_POSTS_LOADED",
				a = "MULTIREDDIT__MORE_POSTS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				i = "MULTIREDDIT__CREATE_FAILURE",
				d = "MULTIREDDIT__CREATE_PENDING",
				l = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				p = "MULTIREDDIT__DELETE_SUCCESS",
				f = "MULTIREDDIT__DELETE_FAILURE",
				h = "MULTIREDDIT__DUPLICATE_PENDING",
				b = "MULTIREDDIT__DUPLICATE_SUCCESS",
				y = "MULTIREDDIT__DUPLICATE_FAILURE",
				g = "MULTIREDDIT__EDIT_FAILURE",
				m = "MULTIREDDIT__EDIT_PENDING",
				v = "MULTIREDDIT__EDIT_SUCCESS",
				E = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				O = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				_ = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				I = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				T = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				w = 10,
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				j = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				A = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var C;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(C || (C = {}))
		},
		"./src/reddit/actions/notifications/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "PUSH__GET_PREFERENCES_PENDING",
				s = "PUSH__GET_PREFERENCES_LOADED",
				a = "PUSH__GET_PREFERENCES_FAILED",
				c = "PUSH__SET_PREFERENCES_PENDING",
				o = "PUSH__SET_PREFERENCES_LOADED",
				i = "PUSH__SET_PREFERENCES_FAILED"
		},
		"./src/reddit/actions/nps.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return E
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			var d = n("./node_modules/@r/frames/compiled.js"),
				l = n("./node_modules/lodash/debounce.js"),
				u = n.n(l),
				p = function(e) {
					document.body.appendChild(function(e) {
						let t;
						const n = u()((function() {
							t && t.contentWindow && d.postMessage(t.contentWindow, "resize.asknicely")
						}), 500);
						return function() {
							return t = function() {
								const t = document.createElement("iframe");
								return t.src = e, t.setAttribute("allowTransparency", "true"), t.style.display = "block", t.style.width = "100%", t.style.height = "1px", t.style.background = "transparent", t.style.border = "none", t
							}(), d.listen("embedjail"), d.receiveMessage(t.contentWindow, "open.embedjail", (function(e) {
								var r;
								r = e.detail, t.style.width = r.dimensions.width, t.style.height = r.dimensions.height, t.style.display = "block", t.style.position = "fixed", t.style.bottom = 0, t.style.zIndex = 2147483647, window.addEventListener("resize", n)
							})), d.receiveMessage(t.contentWindow, "close.embedjail", (function(e) {
								t.parentElement.removeChild(t), d.stopListening("asknicely"), window.removeEventListener("resize", n), t = void 0
							})), window.addEventListener("message", (function(e) {
								"https://live.asknice.ly" !== e.origin && "https://reddit.asknice.ly" !== e.origin || e.data && t && t.contentWindow && d.postMessage(t.contentWindow, e.data + ".asknicely")
							})), t
						}
					}(e)())
				};
			const f = "NPS__URL_PENDING",
				h = "NPS__URL_LOADED",
				b = "NPS__URL_FAILED",
				y = Object(r.a)(f),
				g = Object(r.a)(h),
				m = Object(r.a)(b);
			let v = !1;
			const E = () => async (e, t, n) => {
				const r = t();
				if (r.nps.pending) return;
				if (v) return;
				e(y());
				const d = r.platform.currentPage && r.platform.currentPage.queryParams.feature || "",
					l = !!r.user.account,
					u = await ((e, t, n) => Object(c.a)(Object(o.a)(e, [i.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${n?s.a.oauthUrl:s.a.apiUrl}/api/jail/asknicely${n?"":".json"}`,
						method: a.ob.GET,
						traceRequestName: "get_nps_survey"
					}))(n.apiContext(), d, l);
				if (u.ok) {
					const t = u.body;
					t.dest ? (e(g(t)), p(t.dest), v = !0) : e(m())
				} else e(m())
			}
		},
		"./src/reddit/actions/nsfwLinkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "NSFW_LINKED_POSTS__POSTS_LOADED",
				s = "NSFW_LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/page.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return O
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "e", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/config.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/endpoints/me/index.ts"),
				u = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = n("./src/reddit/actions/pages/appeal/constants.ts");
			const f = `${o.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				h = Object(i.a)(p.b),
				b = Object(i.a)(p.a);
			var y = n("./src/reddit/actions/redditEmbed.ts"),
				g = n("./src/reddit/actions/users.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				v = n("./src/lib/makeListingKey/index.ts"),
				E = n("./src/lib/matchRoute/index.ts");
			const O = e => async t => {
				await t(Object(y.c)(e, !0))
			}, _ = () => async e => {
				await e((() => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const s = t(),
						a = await Object(l.a)(r());
					if (a.ok && a.body)
						if (a.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = f;
								window.location.href = e
							} else e(h(a.body));
					else Object(u.a)(e, s);
					else e(b(a.error))
				})())
			}, I = (e, t, n) => async (c, o, i) => {
				let {
					routes: d
				} = i;
				const l = o(),
					u = (t || l.platform.currentPage).routeMatch.match,
					p = Object(E.a)(u.url, d);
				if (!p) return;
				const f = e.metaKey || e.ctrlKey || 1 === e.button;
				if (p.route && p.route.meta && (p.route.meta.name === a.Sb.INDEX || p.route.meta.name === a.Sb.MULTIREDDIT || p.route.meta.name === a.Sb.SUBREDDIT)) f ? window.open(u.url) : n ? c(Object(r.b)(u.url)) : await c(p.route.action(u, !0));
				else if (p.match && p.match.params && p.match.params.subredditName) {
					const {
						subredditName: e
					} = p.match.params, t = `/r/${e}/`;
					if (f) window.open(t);
					else if (n) c(Object(r.b)(t));
					else {
						const n = Object(v.a)(e, a.bb.HOT);
						await c(Object(r.b)(t)), c(Object(s.subredditDataRequested)(n, e, {}))
					}
				}
			}, S = () => async (e, t) => {
				const n = t();
				e(d.m({
					title: c.b()
				})), Object(m.R)(n) || await e(g.s())
			}, T = () => async e => e(d.m({
				title: c.b()
			})), w = e => async (t, r) => {
				const s = r();
				t(d.m({
					title: c.m()
				})), Object(m.R)(s) || await t(g.s());
				const a = Object(m.R)(s);
				if (e.queryParams.thanks && a) {
					const e = await n.e("GoldPurchasePaymentActions").then(n.bind(null, "./src/reddit/actions/goldPurchaseModals/payment.ts")).then(e => e.paymentCompleted),
						r = await n.e("GoldPurchasePaymentActions").then(n.bind(null, "./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts")).then(e => e.openPremiumPurchaseModal);
					setTimeout(() => {
						t(r()), t(e({
							confirmed: !1
						}))
					}, 1e3)
				}
			}
		},
		"./src/reddit/actions/pages/appeal/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "APPEAL_PAGE_LOADED",
				s = "APPEAL_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/postSetPage/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "POST_SET__PAGE_LOADED",
				s = "POST_SET__PAGE_PENDING",
				a = "POST_SET__PAGE_FAILED"
		},
		"./src/reddit/actions/pages/profileModSettings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PROFILE_MOD_SETTINGS_LOADED", (function() {
				return l
			})), n.d(t, "profileModSettingsRequested", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				o = n("./src/reddit/helpers/trackers/screenview.ts"),
				i = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				u = Object(r.a)(l),
				p = e => async (t, n) => {
					const r = [t(s.B()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(r);
					const l = Object(d.l)(n());
					l ? (await t(Object(a.b)(Object(i.e)(l))), t(u()), Object(o.p)(n(), !0)) : Object(c.a)(t, n())
				}
		},
		"./src/reddit/actions/pages/report/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "REPORT_PAGE__FAILED",
				s = "REPORT_PAGE__PENDING",
				a = "REPORT_PAGE__LOADED",
				c = "REPORT_PAGE_INITIAL_REASON__SET"
		},
		"./src/reddit/actions/pages/subredditWiki/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "PAGE__SUBREDDIT_WIKI_PAGE_PENDING",
				s = "PAGE__SUBREDDIT_WIKI_PAGE_LOADED",
				a = "PAGE__SUBREDDIT_WIKI_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/userDataRequest/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "d", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/me/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/UserDataExportEligibility.json"),
				o = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userDataRequest.ts");
			const l = "USER_DATA_REQUEST_PAGE_LOADING",
				u = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				f = Object(r.a)(l),
				h = Object(r.a)(u),
				b = Object(r.a)(p),
				y = () => async (e, t, n) => {
					let {
						apiContext: r,
						gqlContext: l
					} = n;
					const u = t(),
						p = Object(i.l)(u),
						y = Object(d.b)(u);
					if (p && y.success) return;
					e(f());
					const g = await Object(s.a)(r());
					if (!g.ok || !g.body) return void e(b(g.error));
					if (!g.body.account) return void Object(o.a)(e, u);
					const m = await (e => Object(a.a)(e, {
						...c
					}))(l());
					if (!m.ok) return void e(b());
					const v = g.body,
						E = m.body;
					e(h({
						account: v.account,
						userDataExportEligibility: E.data.identity.userDataExportEligibility.isUserEligibleForDataExport
					}))
				}
		},
		"./src/reddit/actions/polls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "POLLS__POLL_CREATION_UPDATED",
				a = Object(r.a)(s)
		},
		"./src/reddit/actions/postLevelCrowdControl.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/crowdControl/index.ts");
			const a = "POST_LEVEL_CC_LOADED",
				c = Object(r.a)(a),
				o = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					const o = await Object(s.a)(a(), e);
					if (o.ok) {
						const n = o.body.data.postInfoById.crowdControlLevel;
						t(c({
							[e]: n
						}))
					}
				}
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const a = "POSTLIST__MARKED_END",
				c = "POSTLIST__UNMARKED_END",
				o = Object(r.a)(a),
				i = Object(r.a)(c),
				d = (e, t) => async (n, r) => {
					const a = r();
					e in a.listings.postOrder.fetchedTokens ? e in a.listings.postOrder.ids ? n(i({
						listingKey: e
					})) : s.l(a, e) : n(o({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/product.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts");
			const o = "PRODUCT__BADGE_PURCHASE_OPENED",
				i = "PRODUCT__BADGE_PURCHASE_SUCCESS",
				d = "PRODUCT__BADGE_PURCHASE_FAILURE",
				l = "PRODUCT__BADGE_PURCHASE_PENDING",
				u = "PRODUCT__FETCH_SUCCESS",
				p = "PRODUCT__FETCH_FAILURE",
				f = "PRODUCT__FETCH_PENDING",
				h = (Object(r.a)(o), Object(r.a)(i)),
				b = Object(r.a)(d),
				y = Object(r.a)(l),
				g = (Object(r.a)(u), Object(r.a)(p), Object(r.a)(f), e => {
					let {
						productId: t
					} = e;
					return async (e, n, r) => {
						let {
							apiContext: o
						} = r;
						const i = n(),
							d = i.products.models[t],
							l = i.user.account,
							u = !!i.products.api.purchase.pending[t];
						if (d && d.price && !u) {
							e(y({
								productId: t
							}));
							const n = await Object(c.c)(o(), {
								price: d.price,
								products: [{
									productId: t,
									quantity: "1"
								}],
								subredditId: d.subredditId
							});
							let r;
							if (n.ok && l && (r = await Object(a.c)(o(), d.subredditId, l.id)), n.ok) {
								if (r && r.ok) {
									const {
										badges: t,
										userOwnedBadges: s
									} = r.body;
									e(h({
										product: d,
										badges: t,
										userOwnedBadges: s,
										wallet: n.body.wallet
									}))
								}
							} else e(b({
								productId: t,
								error: n.error
							})), Object(s.a)(e, n.error)
						}
					}
				})
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return j
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "b", (function() {
				return L
			}));
			var r = n("./src/lib/asyncActions/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/constants/euCookiePolicy.ts"),
				c = n("./node_modules/ts-error/lib/cjs.js"),
				o = n.n(c);
			class GraphQLRequestError_GraphQLRequestError extends o.a {
				constructor(e) {
					super(`An error occurred during a GraphQL request. The following response was received:\n\n${JSON.stringify(e,void 0,2)}`), this.response = e
				}
			}
			var i = n("./src/lib/reCaptchaEnterprise/index.ts"),
				d = n("./src/lib/sentry/index.ts");

			function l(e) {
				return t => async (n, r, s) => {
					const a = r();
					if (e(a)) return t(n, r, s)
				}
			}
			var u = n("./node_modules/lodash/every.js"),
				p = n.n(u),
				f = n("./src/reddit/constants/experiments.ts"),
				h = n("./node_modules/os-browserify/browser.js"),
				b = n.n(h);
			const y = /\s+at.*(?:\(|\s)(.*)\)?/,
				g = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				m = void 0 === b.a.homedir ? "" : b.a.homedir();
			const v = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? v(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(y);
							if (null === t || !t[1]) return !0;
							const n = t[1];
							return !n.includes(".app/Contents/Resources/electron.asar") && !n.includes(".app/Contents/Resources/default_app.asar") && !g.test(n)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(y, (e, t) => e.replace(t, t.replace(m, "~"))) : e).join("\n")
					}(e.stack)) : String(e)).join("\n");
					super(t = "\n" + function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
						const n = {
							indent: " ",
							includeEmptyLines: !1,
							...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
						};
						if ("string" != typeof e) throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
						if ("number" != typeof t) throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
						if ("string" != typeof n.indent) throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);
						if (0 === t) return e;
						const r = n.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
						return e.replace(r, n.indent.repeat(t))
					}(t, 4)), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
						value: e
					})
				}*[Symbol.iterator]() {
					for (const e of this._errors) yield e
				}
			}
			var E = n("./src/lib/makeGqlRequest/index.ts"),
				O = n("./src/redditGQL/operations/VerifyRecaptchaToken.json");
			class MissingDataError_MissingDataError extends o.a {
				constructor() {
					super("Missing data in GraphQL response")
				}
			}
			class RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError extends o.a {
				constructor() {
					super("GraphQL request failed without errors")
				}
			}
			var _ = n("./src/reddit/featureFlags/index.ts"),
				I = n("./src/reddit/featureFlags/utils.ts"),
				S = n("./src/reddit/helpers/chooseVariant/index.ts"),
				T = n("./src/reddit/selectors/meta.ts");
			const w = e => _.d.reCaptchaEnterprise(e) && !Object(T.d)(e),
				D = e => !!Object(S.c)(e, {
					experimentEligibilitySelector: Object(I.d)(Object(I.b)(...a.c)),
					experimentName: f.if
				}),
				j = Object(r.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				A = () => l(e => p()([w, D, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async e => {
					e(j.requested());
					try {
						await i.b.loadScript(), e(j.succeeded())
					} catch (t) {
						throw e(j.failed()), t
					}
				}),
				C = Object(r.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				P = e => l(e => p()([w, D, e => e.tracking.reCaptchaEnterprise.load === r.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === r.a.New], t => t(e)))(async t => {
					t(C.requested());
					try {
						const n = await i.b.execute(e);
						return t(C.succeeded({
							token: n
						})), n
					} catch (n) {
						throw t(C.failed()), n
					}
				}),
				R = Object(r.b)("SEND_RECAPTCHA_TOKEN"),
				N = e => l(e => p()([w, D, e => e.tracking.reCaptchaEnterprise.send === r.a.New && e.tracking.reCaptchaEnterprise.execute === r.a.Succeeded && e.tracking.reCaptchaEnterprise.load === r.a.Succeeded], t => t(e)))(async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					t(R.requested());
					try {
						await (async (e, t) => {
							const n = await Object(E.a)(e, {
								...O,
								variables: {
									input: {
										token: t
									}
								}
							});
							if (!n.ok) throw new GraphQLRequestError_GraphQLRequestError(n);
							if (!("data" in n.body)) throw new MissingDataError_MissingDataError;
							const {
								ok: r,
								errors: s
							} = n.body.data.verifyRecaptchaToken;
							if (s && s.length > 0) throw new AggregateError_AggregateError(s);
							if (!r) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(s(), e), t(R.succeeded())
					} catch (a) {
						throw t(R.failed()), a
					}
				}),
				x = (e, t) => Object(I.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				L = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.a.PageLoad;
					return l(e => p()([w, D, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async (t, n) => {
						const r = n();
						try {
							await t(A());
							const n = await t(P({
								action: x(e, r)
							}));
							n && await t(N(n))
						} catch (a) {
							if (a instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof a.response.error && null !== a.response.error && a.response.error.type === s.k) return;
							d.c.withScope(e => {
								Object(d.a)(e, {
									serverLogging: !1
								}), d.c.captureException(a)
							})
						}
					})
				}
		},
		"./src/reddit/actions/recap/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "k", (function() {
				return o
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			}));
			const r = "RECAP_CARDS_PENDING",
				s = "RECAP_CARDS_LOADED",
				a = "RECAP_CARDS_FAILED",
				c = "RECAP_RESET",
				o = "RECAP_SHARE_CARD_WAS_OPENED",
				i = "RECAP_SET_CARD_INDEX",
				d = "RECAP_IMAGE_PENDING",
				l = "RECAP_IMAGE_LOADED",
				u = "RECAP_SHOW_SHARE_MODAL",
				p = "RECAP_BANNER_SEEN",
				f = "RECAP_ABILITY_CARD_USERNAME_TOGGLE",
				h = "RECAP_ABILITY_CARD_AVATAR_TOGGLE"
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			}));
			const r = "REPORT__PENDING",
				s = "REPORT__LOADED",
				a = "REPORT__FAILED",
				c = "REPORT_FLOW__TARGET_SET",
				o = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				i = "REPORT_FLOW__OPEN_CATEGORY",
				d = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportPageRules/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "REPORT_PAGE_RULES__LOADED"
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			const d = "SITEWIDE_RULES_LOADED",
				l = "LIVESTREAMING_RULES_LOADED",
				u = Object(s.a)(d),
				p = Object(s.a)(l),
				f = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [i.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: a.ob.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							n = b(t.sitewide_rules);
						e(u(n))
					}
				}, h = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [i.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: a.ob.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							n = b(t.livestream_rules);
						e(p(n))
					}
				}, b = e => {
					let t = [];
					if (e && e.length > 2) {
						const n = {
							reasonTextToShow: r.fbt._("It's spam or abuse", null, {
								hk: "21rHqk"
							}),
							nextStepReasons: [e[0], e[1], e[2]]
						};
						4 === e.length && n.nextStepReasons && n.nextStepReasons.push(e[3]), t.push(n), t = t.concat(e.slice(e.length - 1))
					}
					return t
				}
		},
		"./src/reddit/actions/search/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				a = n("./src/lib/constants/index.ts"),
				c = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/extractQueryParams/index.ts"));
			var o = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				u = n("./src/reddit/models/Search/index.ts");
			var p = (e, t) => {
				const n = {
					withAds: 1,
					ad: Object(c.a)(window.location.href).get("ad"),
					subplacement: t
				};
				return Object(o.a)(Object(i.a)(e, [d.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: a.ob.GET,
					data: n
				})
			};
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				h = Object(r.a)(f),
				b = e => async (t, n, r) => {
					let {
						apiContext: a
					} = r;
					const c = await p(a(), e);
					if (c.ok) {
						const n = (e => {
							const t = [];
							if (e.body && e.body.trending_searches) {
								const n = e.body.trending_searches.length;
								for (let r = 0; r < n; r++) {
									const n = e.body.trending_searches[r],
										a = n.results.data.children.length > 0 ? n.results.data.children[0].data : null,
										c = {
											id: Object(s.a)(),
											post: a ? Object(l.a)(a) : null,
											rawQuery: n.query_string,
											searchQuery: n.display_string,
											section: u.c.trending,
											isWhitelisted: n.is_subreddit_whitelisted,
											subredditInfo: a ? {
												icon: a.sr_detail.community_icon || a.sr_detail.icon_img,
												displayText: a.sr_detail.display_name_prefixed
											} : null,
											subredditOccurrences: n.subreddit_occurences - 1,
											type: u.b.text
										};
									t.push(c)
								}
							}
							return t
						})(c);
						return t(h({
							items: n,
							subplacement: e
						})), n
					}
					return null
				}
		},
		"./src/reddit/actions/shortcuts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "SHORTCUTS__ACTIVE_COMMENT_SET",
				s = "SHORTCUTS__ACTIVE_POST_SET"
		},
		"./src/reddit/actions/sso/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "LINKED_IDENTITY__ADD",
				s = "LINKED_IDENTITY__REMOVE"
		},
		"./src/reddit/actions/streaming/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "SUBREDDIT__STREAMING_MOD_SETTINGS_LOADED"
		},
		"./src/reddit/actions/streaming/modSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/streaming/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				d = n("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				l = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts");
			const p = Object(s.a)(a.a),
				f = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				h = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				b = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				y = Object(s.a)(f),
				g = Object(s.a)(h),
				m = Object(s.a)(b),
				v = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const d = Object(u.Y)(n(), {
						subredditId: e
					});
					if (void 0 === d) {
						const e = r.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							n = Object(c.e)(e, l.b.Error);
						return await t(Object(c.f)({
							...n,
							duration: c.a
						})), {
							reason: e
						}
					}
					const f = await ((e, t) => Object(o.a)(e, {
						...i,
						variables: {
							subredditId: t
						}
					}))(a(), e);
					if (!f.ok) {
						const e = r.fbt._("Could not fetch settings for {subredditName}", [r.fbt._param("subredditName", d.name)], {
								hk: "2G8rnU"
							}),
							n = Object(c.e)(e, l.b.Error);
						return await t(Object(c.f)({
							...n,
							duration: c.a
						})), {
							reason: e
						}
					}
					const h = f.body.data.subredditInfoById;
					return await t(p({
						subredditId: e,
						modSettings: h.liveStreamingInfo
					})), {}
				}, E = (e, t) => async (n, r, s) => {
					let {
						gqlContext: a
					} = s;
					await n(O(t, e, a())), n(v(t))
				}, O = (e, t, n) => async (n, s, a) => {
					let {
						gqlContext: i
					} = a;
					n(y({
						subredditId: e
					}));
					const u = await ((e, t) => Object(o.a)(e, {
						...d,
						variables: t
					}))(i(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!u.ok || !u.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = u.error && u.error.fields ? u.error.fields[0].msg : r.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							s = Object(c.e)(t, l.b.Error);
						await n(Object(c.f)({
							...s,
							duration: c.a
						})), n(m({
							subredditId: e
						}))
					}
					const p = r.fbt._("Community broadcasting settings saved", null, {
							hk: "GTwrg"
						}),
						f = Object(c.e)(p, l.b.SuccessCommunity);
					await n(Object(c.f)({
						...f,
						duration: c.a
					})), n(g({
						subredditId: e
					}))
				}, _ = (e, t, n) => async (r, s, a) => {
					let {
						gqlContext: c
					} = a;
					const o = [...n.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await r(O(e, {
						whitelistedRedditors: o
					}, c())), await r(v(e))
				}, I = (e, t, n) => async (r, s, a) => {
					let {
						gqlContext: c
					} = a;
					const o = n.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await r(O(e, {
						whitelistedRedditors: o
					}, c())), await r(v(e))
				}
		},
		"./src/reddit/actions/subreddit/relatedSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/subreddit/recommendations.ts");
			const a = (e, t) => async (n, r, a) => {
				let {
					gqlContext: c
				} = a;
				var i;
				const d = await Object(s.a)(c(), {
					subredditIds: [e],
					count: t
				});
				if (!d.ok) return;
				const l = d.body;
				(null === (i = l.data.subredditRecommendations.recommendations) || void 0 === i ? void 0 : i.length) && n(o({
					subredditId: e,
					relatedSubreddits: l.data.subredditRecommendations.recommendations.reduce((e, t) => {
						let {
							id: n
						} = t;
						return n && e.push(n), e
					}, [])
				}))
			}, c = "RELATED_SUBREDDITS__LOADED", o = Object(r.a)(c)
		},
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditsCarousel.json");
			const c = (e, t, n, r, c) => async (o, i, l) => {
				let {
					gqlContext: u
				} = l;
				var f, h;
				if (i().subreddits.carousel.pending) return;
				const b = await ((e, t) => Object(s.a)(e, {
					...a,
					variables: t
				}))(u(), {
					subredditIds: e,
					hasNames: t || !1,
					subredditNames: n || [],
					hasPostIds: r || !1,
					postIds: c || []
				});
				if (!b.ok) return;
				const y = b.body;
				y.data && y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && o(d(null === (f = y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === f ? void 0 : f.reduce((e, n) => ((null == n ? void 0 : n.id) && (e[t ? n.name.toLowerCase() : n.id] = n), e), {}))), (null === (h = y.data) || void 0 === h ? void 0 : h.postsInfoByIds) && o(p(y.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
			}, o = "SUBREDDITS_CAROUSEL__LOADED", i = "SUBREDDITS_CAROUSEL__PENDING", d = Object(r.a)(o), l = (Object(r.a)(i), "POST_CAROUSEL__LOADED"), u = "POST_CAROUSEL__PENDING", p = Object(r.a)(l);
			Object(r.a)(u)
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				s = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				a = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const l = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				u = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				p = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				f = (Object(r.a)(l), Object(r.a)(u)),
				h = Object(r.a)(p),
				b = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					await e(s.e());
					const {
						api: l,
						ids: u
					} = t().subreddits.crosspostable;
					if (l.pending || Object.keys(u).length) return;
					const p = await ((e, t) => Object(c.a)(Object(o.a)(e, [i.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: a.ob.GET
					}))(r(), {
						sr_detail: !1
					});
					if (p.ok) {
						const n = t(),
							r = p.body && p.body.length ? p.body.map(e => Object(d.I)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(f({
							subredditIds: r
						}))
					} else e(h({
						error: p.error
					}))
				}
		},
		"./src/reddit/actions/subredditMention/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "SUBREDDIT_MENTION_LOADED",
				s = "SUBREDDIT__MODEL_SUCCEEDED",
				a = "SUBREDDIT__MODEL_PENDING",
				c = "SUBREDDIT__MODEL_FAILED"
		},
		"./src/reddit/actions/subredditTopContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return h
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditTopContent.json"),
				o = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const i = "SUBREDDIT_TOP_CONTENT__PENDING",
				d = "SUBREDDIT_TOP_CONTENT__LOADED",
				l = "SUBREDDIT_TOP_CONTENT__FAILED",
				u = Object(r.a)(i),
				p = Object(r.a)(d),
				f = Object(r.a)(l),
				h = e => async (t, n, r) => {
					const i = e.toLowerCase(),
						d = n(),
						{
							api: l,
							topContent: h
						} = d.subreddits;
					if (l.topContent.pending[i] || h[i]) return;
					t(u({
						subredditName: i
					})), t(Object(s.B)());
					const b = await ((e, t) => Object(a.a)(e, {
						...c,
						variables: t
					}))(r.gqlContext(), {
						subredditName: i
					});
					if (b.ok) {
						const e = b.body.data.subreddit;
						if (e) {
							const n = Object(o.c)(e);
							n && t(p({
								...n,
								subredditName: i
							}))
						}
					} else t(f({
						subredditName: i,
						error: b.error
					}))
				}
		},
		"./src/reddit/actions/theme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "THEME_CHANGED",
				a = (Object(r.a)(s), "BOOTUP_THEME"),
				c = Object(r.a)(a)
		},
		"./src/reddit/actions/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "TRACKING__VIEWPORT_DATA_LOADED",
				a = "TRACKING__VIEWPORT_DATA_UNLOADED",
				c = Object(r.a)(s);
			Object(r.a)(a)
		},
		"./src/reddit/actions/trafficStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "SUBREDDIT__TRAFFIC_STATS_LOADED",
				s = "SUBREDDIT__TRAFFIC_STATS_PENDING",
				a = "SUBREDDIT__TRAFFIC_STATS_FAILED"
		},
		"./src/reddit/actions/upvotePrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/selectors/telemetry.ts");
			const l = "upvote_prompt";
			var u = n("./src/reddit/selectors/upvotePrompt.ts"),
				p = n("./src/telemetry/index.ts");
			const f = "INCREMENT_SEEN_COUNT_PER_SESS",
				h = (e, t, n) => async (a, c) => {
					const f = c(),
						h = Object(i.A)(),
						m = Date.now(),
						v = h && m - h < 18e4,
						E = Object(u.c)(f, {
							postId: e
						}),
						O = f.upvotePromptCountPerSess,
						_ = (() => {
							const e = Object(i.z)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !E || v || O >= 4 || _.length >= 1) return;
					const I = y(f, t);
					if (!I) return;
					a(Object(o.f)({
						text: I,
						buttonText: r.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${s.a.assetPath}/img/snoo-upvote.png`,
						duration: u.a,
						buttonAction: b(e),
						onClose: () => Object(p.a)((e => ({
							source: l,
							action: "click",
							noun: "close",
							...Object(d.o)(e)
						}))(f))
					}));
					const S = [..._, Date.now()].slice(Math.max(_.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: l,
						action: "view",
						noun: l,
						...Object(d.o)(e)
					}))(f)), Object(i.Hb)(), Object(i.Gb)(S), a(g()), n && n()
				}, b = e => async (t, n) => {
					Object(p.a)((e => ({
						source: l,
						action: "click",
						noun: "upvote",
						...Object(d.o)(e)
					}))(n())), Object(u.c)(n(), {
						postId: e
					}) && t(Object(c.jb)(e))
				}, y = (e, t) => {
					return t ? r.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : r.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})
				}, g = Object(a.a)(f)
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				a = n("./node_modules/react-router-redux/es/index.js");
			const c = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, c, o) => {
					let {
						routes: i
					} = o;
					const d = c();
					Object(r.a)(e, i, d) ? n(Object(a.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "g", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/blockedRedditors.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/accounts/index.ts"),
				i = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				f = Object(s.a)(l),
				h = Object(s.a)(u),
				b = Object(s.a)(p),
				y = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					var l;
					if (n().blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const u = await Object(o.a)(d(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(h(u.body)), u.body.id && t(Object(a.f)(u.body.id)), t(c.g(p)), t(c.f({
						kind: i.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: u.error ? u.error.type : "Unknown error",
							username: e
						};
						t(b(n)), "REBLOCK_RATE_LIMIT" === (null === (l = u.body) || void 0 === l ? void 0 : l.reason) ? t(c.f({
							id: p,
							kind: i.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: y(e)
						})) : t(c.f({
							id: p,
							kind: i.b.Error,
							text: r.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: y(e)
						}))
					}
				}, g = "USER_UNBLOCK__PENDING", m = "USER_UNBLOCK__SUCCESS", v = "USER_UNBLOCK__FAILED", E = Object(s.a)(g), O = Object(s.a)(m), _ = Object(s.a)(v), I = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const u = n(),
						p = Object(d.l)(u),
						f = p ? p.id : void 0,
						h = u.user.blocked.data.filter(t => t.name === e)[0];
					f && (t(E({
						name: e
					})), (await Object(o.c)(l(), f, e)).ok ? (t(O({
						name: e
					})), h && h.id && t(Object(a.h)(h.id)), t(c.f({
						kind: i.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(c.f({
						kind: i.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(_({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/userWhitelist.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "h", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/accounts/index.ts"),
				o = n("./src/reddit/models/Toast/index.ts");
			const i = "USER_WHITELIST__PENDING",
				d = "USER_WHITELIST__SUCCESS",
				l = "USER_WHITELIST__FAILED",
				u = Object(s.a)(i),
				p = Object(s.a)(d),
				f = Object(s.a)(l),
				h = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					t(u());
					const d = await Object(c.e)(i(), e);
					d.ok ? d.body.name && (t(p(d.body)), t(a.f({
						kind: o.b.SuccessCommunity,
						text: r.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(f()), t(a.f({
						kind: o.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, b = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", g = "USER_UNWHITELIST__FAILED", m = Object(s.a)(b), v = Object(s.a)(y), E = Object(s.a)(g), O = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					t(m({
						name: e
					})), (await Object(c.d)(i(), e)).ok ? (t(v({
						name: e
					})), t(a.f({
						kind: o.b.SuccessCommunity,
						text: r.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(E({
						name: e
					})), t(a.f({
						kind: o.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}
		},
		"./src/reddit/actions/usernameAvailable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return h
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/usernameAvailable/index.ts");
			! function(e) {
				e[e.Available = 0] = "Available", e[e.Error = 1] = "Error", e[e.Pending = 2] = "Pending", e[e.Unavailable = 3] = "Unavailable"
			}(r || (r = {}));
			const c = "USERNAME_AVAILABLE__AVAILABLE",
				o = "USERNAME_AVAILABLE__FAILURE",
				i = "USERNAME_AVAILABLE__PENDING",
				d = "USERNAME_AVAILABLE__UNAVAILABLE",
				l = Object(s.a)(c),
				u = Object(s.a)(o),
				p = Object(s.a)(i),
				f = Object(s.a)(d),
				h = e => {
					let {
						username: t
					} = e;
					return async (e, n, s) => {
						let {
							apiContext: c
						} = s;
						const o = n().users.nameAvailable;
						if (!o[t] || o[t] === r.Error) {
							e(p({
								username: t
							}));
							const n = await Object(a.a)(c(), {
								username: t
							});
							n.ok ? n.body ? e(l({
								username: t
							})) : e(f({
								username: t
							})) : e(u({
								username: t
							}))
						}
					}
				}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/connectors/PostViewable/index.ts"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(c.a)(null),
				l = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? s.a.createElement(a.a, {
						post: n,
						trackDisplay: !0
					}, s.a.createElement("div", {
						className: Object(o.a)(t, `Blank ${n.id}`)
					})) : null
				};
			t.default = Object(i.b)(d(l))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Thumbnail/index.tsx"),
				o = n("./src/reddit/components/ClassicPost/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: p,
					templatePlaceholderImage: f,
					thumbnailContainerClassName: h,
					url: b,
					usePreview: y
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.thumbnailContainer, t)
				}, s.a.createElement(c.b, {
					className: Object(a.a)(i.a.thumbnail, n),
					containerClassName: h,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: p,
					templatePlaceholderImage: f,
					url: p ? void 0 : b,
					usePreview: y
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				ctaExperiment: "_17HI1sHAGvXEekFXNNcehn",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				creatorStatsContainer: "_2I70Qhfz-GbGzP54PWXR3P",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistSeparator: "_1wDt70OnYnqsrm0XIsNn8v",
				horizontalVotes: "_3ytybPoFoY12sGn375PMy1",
				leftExpando: "_35zWJjb5RJMIMkexZ2Prus",
				mainBody: "_2XDITKxlj4y3M99thqyCsO",
				rightExpando: "_2Ddj1d6vOe9NlJqkdothNe",
				spacer: "iRkLLvxarfGu_2c7HxhW0",
				titleWithPoll: "_2FcpdQwjwRwk7X_NiZub8x",
				thumbnail: "_2e9Lv1I3dOmICVO9fg3uTG",
				thumbnailContainer: "_38EcSQ9jzVrdtzkXO1cydX",
				eventMeta: "rmPDRyja27ULjwD3rW14H",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				shouldShowOverflow: "_3FOlcZoWAvyAWZYSVd8-WD",
				shouldUseRoundedBorder: "_2g8Jz2obQVOELSfntlgVsJ",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/ModWelcomeTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_2PnG5snRqhlCLmlBFW9Dud",
				overlay: "_2PnG5snRqhlCLmlBFW9Dud",
				isOverlayOpen: "_1LKHMvN5rVxTXGRnTa9hrB",
				DropdownPadding: "_3GVs_x5BtyiLy35GpmGSyo",
				dropdownPadding: "_3GVs_x5BtyiLy35GpmGSyo",
				Tooltip: "_2EusAZo7A7uyI8gxC0nJdp",
				tooltip: "_2EusAZo7A7uyI8gxC0nJdp",
				TooltipContent: "_1BsafzE6q8PmCVU5uqiTWj",
				tooltipContent: "_1BsafzE6q8PmCVU5uqiTWj",
				Title: "_1BFO2H2-rybL94nyL7n-e_",
				title: "_1BFO2H2-rybL94nyL7n-e_",
				Description: "_2DnHuFoYoKwYaBvTkLrs0v",
				description: "_2DnHuFoYoKwYaBvTkLrs0v",
				modLink: "_16moQ9CB6asKjB-qTj8Tvf",
				Button: "_2x6OQ6vZfN3PNhM6Eh6FLq",
				button: "_2x6OQ6vZfN3PNhM6Eh6FLq"
			}
		},
		"./src/reddit/components/ModWelcomeTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MOD_WELCOME_TOOLTIP_ID", (function() {
				return v
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				g = n.n(y);
			const m = Object(l.a)(p.a),
				v = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(i.a)(e => {
				const t = Object(c.e)(b.d),
					n = v,
					i = Object(c.d)(),
					l = e => {
						e.stopPropagation(), i(Object(d.h)({
							tooltipId: n
						}))
					};
				return Object(s.useEffect)(() => {
					e.isOpen ? setTimeout(() => Object(f.a)(), 500) : setTimeout(() => Object(f.b)(), 500)
				}, [i, e.isOpen]), t ? a.a.createElement(m, {
					className: g.a.Tooltip,
					isOpen: e.isOpen,
					targetPosition: ["left", "top"],
					tooltipPosition: ["right", "top"],
					tooltipId: n,
					componentWrapper: t => a.a.createElement("div", {
						className: Object(o.a)(g.a.Overlay, {
							[g.a.isOverlayOpen]: e.isOpen
						}),
						onClick: l
					}, a.a.createElement("div", {
						className: Object(o.a)(g.a.DropdownPadding, {
							[g.a.isOverlayOpen]: e.isOpen
						}),
						onClick: l
					}), t)
				}, a.a.createElement("div", {
					className: g.a.TooltipContent
				}, a.a.createElement("div", {
					className: g.a.Title
				}, r.fbt._("Welcome to your community, r/{subredditName}!", [r.fbt._param("subredditName", t)], {
					hk: "e3rbC"
				})), a.a.createElement("div", {
					className: g.a.Description
				}, r.fbt._("We’ll walk you through how to get started here, and you can get more tips and advice through Reddit’s", null, {
					hk: "lffxe"
				}), " ", a.a.createElement("a", {
					className: g.a.modLink,
					style: {
						color: Object(h.a)(e).linkText
					},
					href: "https://www.reddit.com/r/ModCertification101/",
					rel: "noopener noreferrer",
					target: "_blank"
				}, r.fbt._("Mod Certification Program", null, {
					hk: "1FTpvR"
				})), "."), a.a.createElement(u.t, {
					className: g.a.Button,
					onClick: l
				}, r.fbt._("Let's go", null, {
					hk: "4hWwxv"
				})))) : null
			})
		},
		"./src/reddit/components/Pill/PillText/index.m.less": function(e, t, n) {
			e.exports = {
				pillText: "_3CUdiRoAXQxoYJ-UeFCjPS",
				pillTextVariantDay: "_2SVIoeexI3lRGCH0NAYAMx",
				pillTextVariantNight: "QRGfIrC3QhcjQPpbXOPJy"
			}
		},
		"./src/reddit/components/Pill/index.m.less": function(e, t, n) {
			e.exports = {
				pillContainer: "_3LO_LEpMLN8-uaedpg6nl4"
			}
		},
		"./src/reddit/components/Pill/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Pill/index.m.less"),
				o = n.n(c);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					children: t,
					className: n,
					...r
				} = e;
				return s.a.createElement("div", i({
					className: Object(a.a)(o.a.pillContainer, n)
				}, r), t)
			}
		},
		"./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/models/ScheduledPost/index.ts");
			const a = {
					frequency: s.d.Hourly,
					interval: 1,
					byMonthDays: [],
					byWeekDays: []
				},
				c = () => {
					const e = new Date;
					return e.setMinutes(60), {
						submitDate: Object(r.g)(e),
						timezoneName: Object(r.b)() || r.a,
						frequencyOption: null,
						recurrenceInfo: null
					}
				},
				o = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
					const r = Object(s.r)(e.getDay()),
						c = e.getDate();
					let o = n ? {
						...n
					} : null;
					switch (t) {
						case s.d.Monthly:
							o = {
								...a,
								...n,
								frequency: t,
								byMonthDays: [c]
							};
							break;
						case s.d.Weekly:
							o = {
								...a,
								...n,
								frequency: t,
								byWeekDays: [r]
							};
							break;
						case s.d.Daily:
						case s.d.Hourly:
							o = {
								...a,
								...n,
								frequency: t
							};
							break;
						case null:
							return null
					}
					return o
				}
		},
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				active: "_34xisDRo0OvDRw0vh1tu5F",
				backgroundFocused: "_2NHlJ2WAZ0u5ebeJE3NHhI",
				bodyBackgroundColor: "UQphgTZz-YLqJ1AJuwqmi",
				bodyFontH5: "_1l5ReXTNeGQXHe-jzoS0sd",
				bodyTextColor: "_2JmouYbCEI5jhxWIp44V_6",
				borderBottom: "_2TJNEv970Kn5chU69vgAB4",
				borderTop1Line: "_4y0ErgWHnHg-LqPeQoYKE",
				borderTop2Line: "_3R_dvs6bfcA-tygC7FL7kx",
				chevron: "_19DndzbKSqGxpzJ7gycTJL",
				column: "SGuQkxXoYRPmcIRKtJnQ",
				dropdown: "_1HnfZtTmYelxTj6QL6aaXS",
				dropdownPadding: "_37mWd5gyv2BM4g00nmlZuD",
				fixedTextTooltip: "_1U-nknzRP43RdLab5D4_lK",
				flexAlignCenter: "_3AhxoqURjuFZmaySn4D12W",
				flexGrow: "_2nLtz9ffUxNdVSXrwhsrDg",
				flexWrap: "_1jD48cwTYTTvOjusPtaja_",
				labelsFont: "_3LzqitwwvqMy0VShIuQwvX",
				listItem: "_20OHBqoDD71_8fv7tuG6u6",
				triggerItem: "_4V8jUxy7iuElvae9SRoVI",
				listItemButton: "_1jKZytiaP074XAKQIdEzzq",
				loadingItem: "_3wwag2ZgVLfNKLCuEuXF7h",
				marginBottom2: "F6UjYfPpQi9ycdulmJnnf",
				marginLeft1: "_3vubwQI518j2qoj8dYdhwW",
				marginLeft2: "_1QVrieUoti9cxiQSRw314E",
				marginTop2: "_3iXUDNuLPuwiYhJfqGPJEg",
				metaDataSeparator: "_33A2uwwTbNBE44RwzNWbk6",
				metaTextColor: "_3C9CntSKG4Z9k6ul3_ugNH",
				metaTextFont: "_3X3sIziqqmPSvYCMJmkipO",
				section: "_2JD4mokfQk2Qnin9rHTe6Y",
				sectionTitle: "_1wYvb87VusZUTcm5C6KC6U",
				nsfwSection: "_1f4QVsU6jdEkvigYTcqIG7",
				paddingTop1: "_39RbKXGDidws2W3278Lj1A",
				postTitle: "YeMwUP22Up8CVxmgTayyQ",
				sdListContainer: "_3MnH55IylwBZcJD46S4KFO",
				spaceBetween: "_1H3lgd1i4NTn9aM5VR9BQX",
				titleFontH5: "sb9GBNKICO504iABZENf3",
				titlePadding: "_2NH7qxA8P_UowZKF4-LUNe",
				trendingSpacer: "uSWMIsxB2_3C40ulyecE-",
				typeaheadPadding: "_3tgXQ-cvqUY_NlKDJgdSdy",
				typeaheadByTypePadding: "_2LJ9gkn2k4DlHhF8C1QhF6",
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
				defaultCommunityIcon: "nltZBKTbnoPZEcEaIufmh",
				quarantineIcon: "_36TN0XrEYqhIZ5kQ0uHWhu",
				trendingIcon: "_2VyZLE_5g-CDpUucbfHyOg",
				mNightmode: "TiWmxUzfBQADxToVGHQeM",
				searchIcon: "_20HzJOjpEAN2C311EILlL9"
			}
		},
		"./src/reddit/components/SearchDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return ge
			})), n.d(t, "a", (function() {
				return me
			})), n.d(t, "d", (function() {
				return ve
			})), n.d(t, "c", (function() {
				return Oe
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/reddit/helpers/ensureEndSlash/index.ts"),
				u = n("./src/lib/makeSearchKey/index.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				f = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				h = n("./src/reddit/helpers/clickSourceData/index.ts"),
				b = n("./src/reddit/helpers/getSearchUrl/index.ts");
			var y = n("./src/reddit/helpers/trackers/searchResults.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/models/Search/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/user.ts");
			var _ = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					width: "24",
					height: "25",
					viewBox: "0 0 24 25",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5Z",
					fill: "#FFA800"
				}), s.a.createElement("g", {
					clipPath: "url(#clip0_220_67789)"
				}, s.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M7.17695 17.925H16.8229H16.851C17.2013 17.9261 17.5458 17.8349 17.8498 17.6606C18.1537 17.4862 18.4064 17.2349 18.5824 16.932C18.7583 16.629 18.8514 16.285 18.8522 15.9346C18.853 15.5842 18.7615 15.2398 18.5869 14.936L13.764 6.49399C13.5906 6.18192 13.3369 5.92189 13.0292 5.74086C12.7215 5.55982 12.371 5.46436 12.014 5.46436C11.6569 5.46436 11.3064 5.55982 10.9987 5.74086C10.691 5.92189 10.4373 6.18192 10.264 6.49399L5.44095 14.936C5.26637 15.2398 5.17488 15.5842 5.17569 15.9346C5.17649 16.285 5.26957 16.629 5.44554 16.932C5.62152 17.2349 5.87419 17.4862 6.17813 17.6606C6.48207 17.8349 6.82657 17.9261 7.17695 17.925ZM12 13.3749C11.8704 13.3741 11.7455 13.326 11.6488 13.2397C11.5522 13.1533 11.4904 13.0346 11.475 12.9059L11.125 9.7559C11.1183 9.68274 11.1267 9.60898 11.1496 9.53916C11.1724 9.46934 11.2093 9.40494 11.258 9.3499C11.3073 9.29476 11.3677 9.25066 11.4353 9.2205C11.5029 9.19035 11.576 9.17481 11.65 9.1749H12.35C12.424 9.17481 12.4972 9.19035 12.5647 9.2205C12.6323 9.25066 12.6927 9.29476 12.742 9.3499C12.7907 9.40494 12.8276 9.46934 12.8504 9.53916C12.8733 9.60898 12.8817 9.68274 12.875 9.7559L12.525 12.9059C12.5097 13.0346 12.4478 13.1533 12.3512 13.2397C12.2545 13.326 12.1296 13.3741 12 13.3749ZM11.3813 15.7996C11.5454 15.9637 11.768 16.0559 12 16.0559C12.1128 16.0679 12.2268 16.0584 12.336 16.0279C12.4423 15.9866 12.538 15.922 12.616 15.8389C12.6992 15.7567 12.7657 15.6593 12.812 15.5519C12.8544 15.445 12.8758 15.3309 12.875 15.2159C12.8743 15.0871 12.8452 14.9601 12.7898 14.8439C12.7344 14.7277 12.654 14.6252 12.5544 14.5436C12.4548 14.462 12.3384 14.4035 12.2135 14.372C12.0886 14.3406 11.9584 14.3372 11.832 14.3619L11.664 14.4109C11.6114 14.432 11.5619 14.4603 11.517 14.4949C11.4669 14.5219 11.4219 14.5574 11.384 14.5999C11.354 14.6308 11.3259 14.6635 11.3 14.6979C11.2557 14.7455 11.2159 14.797 11.181 14.8519C11.1552 14.9028 11.1363 14.9569 11.125 15.0129C11.1216 15.0688 11.1216 15.1249 11.125 15.1809C11.125 15.413 11.2172 15.6355 11.3813 15.7996Z",
					fill: "white"
				})), s.a.createElement("defs", null, s.a.createElement("clipPath", {
					id: "clip0_220_67789"
				}, s.a.createElement("rect", {
					width: "14",
					height: "14",
					fill: "white",
					transform: "translate(5 5.5)"
				}))))
			};

			function I(e) {
				let {
					searchItem: t,
					nightmode: n,
					styles: r
				} = e;
				var a, c, i;
				return (null === (a = null == t ? void 0 : t.displayInfo) || void 0 === a ? void 0 : a.isQuarantined) ? s.a.createElement(_, {
					className: Object(o.a)(r.subredditIcon, r.quarantineIcon)
				}) : (null === (c = null == t ? void 0 : t.displayInfo) || void 0 === c ? void 0 : c.iconUrl) ? s.a.createElement("div", {
					className: r.subredditIcon,
					style: {
						backgroundImage: `url('${null===(i=null==t?void 0:t.displayInfo)||void 0===i?void 0:i.iconUrl}')`
					}
				}) : s.a.createElement(m.a, {
					name: "community",
					isFilled: !n,
					className: Object(o.a)(r.defaultCommunityIcon, n && r.mNightmode)
				})
			}
			var S = n("./src/reddit/components/SearchDropdown/index.m.less"),
				T = n.n(S);
			const w = Object(c.a)(p.b);

			function D(e) {
				let {
					activeTooltipId: t,
					className: n,
					focusedItem: c,
					nightmode: p,
					recentSearch: _,
					searchOriginPage: S,
					indexOfItem: D,
					toggleTooltip: j,
					onClearSearchQuery: A,
					onRemoveRecentSearch: C,
					onUpdateSearchQuery: P,
					onSendSearchClickRecentEvent: R,
					onCloseDropdown: N
				} = e;
				var x;
				const L = Object(g.a)(),
					{
						nsfwSessionSetting: k
					} = Object(f.b)(),
					U = Object(a.e)(O.lb);
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: _.searchQuery,
						rawQuery: _.rawQuery || _.searchQuery,
						searchQuery: _.searchQuery,
						structureType: E.c.Recent
					};
					L(Object(y.A)(y.a.RECENT, e, D, D, _))
				}, []);
				const M = e => {
						var t;
						const n = (null === (t = e.displayInfo) || void 0 === t ? void 0 : t.subredditOrProfileName) || e.searchQuery;
						return e.subredditOrProfileRestrictedName ? `${function(e){return e.split("/").slice(-3,-1).join("/")}(e.subredditOrProfileRestrictedName)} ${n}` : n
					},
					{
						url: B,
						qs: F
					} = Object(b.a)({
						includeNsfwResults: U && k,
						searchItem: _,
						searchOptions: {
							source: u.a.Recent
						}
					}),
					G = M(_);
				let q;
				c && (q = M(c));
				return s.a.createElement(d.a, {
					"aria-label": G,
					className: Object(o.a)(T.a.listItem, T.a.spaceBetween, n, !((null == c ? void 0 : c.section) !== v.c.recent || q !== G) && T.a.backgroundFocused),
					onClick: () => {
						_.isTypeaheadSuggestion ? A() : P(_.searchQuery), R(_.searchQuery, _, D), N()
					},
					key: G,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: B && Object(l.a)(B) || "",
						search: F,
						state: Object(h.c)(h.a.SEARCH_DROPDOWN, S, _.isProfile || _.isSubreddit)
					}
				}, s.a.createElement("div", {
					className: T.a.flexAlignCenter
				}, _.displayInfo && _.isTypeaheadSuggestion ? s.a.createElement(I, {
					searchItem: _,
					nightmode: p,
					styles: T.a
				}) : s.a.createElement(m.a, {
					name: "search",
					className: T.a.searchIcon
				}), s.a.createElement("div", {
					className: T.a.column
				}, s.a.createElement("p", {
					className: Object(o.a)(T.a.marginLeft2, T.a.titleFontH5)
				}, G), (null === (x = _.displayInfo) || void 0 === x ? void 0 : x.isQuarantined) ? s.a.createElement("p", {
					className: Object(o.a)(T.a.marginLeft2, T.a.metaTextFont, T.a.metaTextColor, T.a.paddingTop1)
				}, i.fbt._("Quarantined", null, {
					hk: "4t1Oq4"
				})) : null)), s.a.createElement("div", {
					className: T.a.flexAlignCenter,
					onMouseEnter: () => j(null != G ? G : null),
					onMouseLeave: () => j(null),
					id: G
				}, s.a.createElement(m.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), C(_)
					},
					"data-testid": G
				}), s.a.createElement(w, {
					className: T.a.fixedTextTooltip,
					isOpen: t === G,
					text: i.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: G,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var j = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				A = n("./src/reddit/components/PostTitle/index.tsx"),
				C = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				P = n("./src/reddit/constants/adEvents.ts"),
				R = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				N = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				x = n("./src/reddit/helpers/correlationIdTracker.ts"),
				L = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				k = n("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function U(e) {
				let {
					className: t,
					focusedItem: n,
					id: r,
					trendingItem: c,
					searchOriginPage: p,
					onUpdateSearchQuery: f,
					onCloseDropdown: y,
					onSetRecentSearch: g,
					fireAdPixelsOfType: E
				} = e;
				const O = Object(a.d)(),
					_ = !(!c.post || !c.post.isSponsored),
					{
						url: I,
						qs: S
					} = Object(b.a)({
						searchItem: c,
						searchOptions: {
							source: _ ? u.a.PromotedTrend : u.a.Trending
						}
					}),
					w = s.a.createElement(d.a, {
						id: r,
						"aria-label": c.searchQuery,
						className: Object(o.a)(T.a.listItem, T.a.borderBottom, T.a.spaceBetween, t, !((null == n ? void 0 : n.section) !== v.c.trending || c.searchQuery !== n.searchQuery) && T.a.backgroundFocused),
						onClick: () => {
							f(c.searchQuery);
							const e = (() => {
								const {
									post: e,
									subredditInfo: t,
									subredditOccurrences: n,
									...r
								} = c;
								return r
							})();
							if (g(e), Object(x.d)(x.a.SearchResults), (e => O((t, n) => Object(k.o)({
									state: n(),
									trendingSearch: e,
									telemetrySource: L.a.Typeahead
								})))(c), _) {
								const {
									post: e
								} = c;
								e && E(e, P.a.Click)
							}
							y()
						},
						key: `trending-${c.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: I && Object(l.a)(I) || "",
							search: S,
							state: Object(h.c)(h.a.TYPEAHEAD, p)
						}
					}, s.a.createElement("div", null, _ && s.a.createElement("div", {
						className: Object(o.a)(T.a.active, T.a.labelsFont, T.a.marginBottom2)
					}, i.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), s.a.createElement("div", null, s.a.createElement(m.a, {
						name: "popular",
						className: T.a.trendingIcon
					}), s.a.createElement("span", null, s.a.createElement(A.a, {
						className: T.a.marginLeft2,
						redditStyle: !0,
						size: A.b.Small
					}, c.searchQuery)), c.post && s.a.createElement("div", {
						className: Object(o.a)(T.a.postTitle, T.a.titleFontH5, T.a.trendingSpacer)
					}, c.post.title)), c.subredditInfo && s.a.createElement(R.a, {
						className: Object(o.a)(T.a.metaTextColor, T.a.trendingSpacer, !c.post && T.a.marginTop2),
						iconUrl: c.subredditInfo.icon || void 0,
						suffix: i.fbt._("{subreddit name} and more", [i.fbt._param("subreddit name", c.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), c.post && Object(N.a)(c.post) && s.a.createElement(j.a, {
						post: c.post,
						removeLink: !0,
						usePreview: _
					}));
				return _ ? s.a.createElement(C.a, {
					post: c.post
				}, w) : w
			}
			var M = n("./src/lib/prettyPrintNumber/index.ts"),
				B = n("./src/reddit/components/Flair/index.tsx"),
				F = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/selectors/experiments/searchTypeaheadByType.ts");

			function H(e) {
				let {
					className: t,
					focusedItem: n,
					item: c,
					indexOfItem: l,
					nightmode: u,
					searchOriginPage: p,
					onSendSearchClickTypeaheadEvent: f,
					onSetRecentSearch: m,
					onClearSearchQuery: v,
					onCloseDropdown: O,
					relativePosition: _
				} = e;
				var S, w, D, j, A, C;
				const P = Object(a.e)(q.a),
					R = Object(g.a)(),
					N = (null === (S = c.displayInfo) || void 0 === S ? void 0 : S.karma) || 0,
					x = (null === (w = c.displayInfo) || void 0 === w ? void 0 : w.subscribers) || 0,
					L = c.isProfile ? i.fbt._({
						"*": "{karma count} karma",
						_1: "1 karma"
					}, [i.fbt._plural(N, "karma count", Object(M.b)(N))], {
						hk: "2KlIGI"
					}) : i.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [i.fbt._plural(x, "members count", Object(M.b)(x))], {
						hk: "1uMCes"
					});
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: c.searchQuery,
						rawQuery: c.rawQuery || c.searchQuery,
						searchQuery: c.searchQuery,
						structureType: E.c.Search
					};
					R(Object(y.A)(y.a.TYPEAHEAD, e, l, _, c))
				}, []);
				const k = (null === (D = c.displayInfo) || void 0 === D ? void 0 : D.subredditOrProfileName) || "";
				return s.a.createElement(d.a, {
					"aria-label": k,
					className: Object(o.a)(T.a.listItem, T.a.typeaheadPadding, P && T.a.typeaheadByTypePadding, t, !((null == n ? void 0 : n.id) !== c.id) && T.a.backgroundFocused),
					onClick: () => {
						m(c), f(c.searchQuery, c, l, _), v(!1), O(!1)
					},
					key: k,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: Object(b.b)(c),
						state: Object(h.c)(h.a.TYPEAHEAD, p)
					}
				}, s.a.createElement(I, {
					searchItem: c,
					nightmode: u,
					styles: T.a
				}), s.a.createElement("div", null, (null === (j = c.displayInfo) || void 0 === j ? void 0 : j.subredditOrProfileName) && s.a.createElement("div", {
					className: Object(o.a)(T.a.marginLeft2, T.a.titleFontH5)
				}, c.displayInfo.subredditOrProfileName), s.a.createElement("div", {
					className: Object(o.a)(T.a.flexAlignCenter, T.a.marginLeft2, T.a.flexWrap)
				}, (null === (A = c.displayInfo) || void 0 === A ? void 0 : A.isQuarantined) && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(o.a)(T.a.metaTextColor, T.a.metaTextFont)
				}, i.fbt._("Quarantined", null, {
					hk: "4t1Oq4"
				})), s.a.createElement(F.a, {
					className: Object(o.a)(T.a.metaDataSeparator)
				})), s.a.createElement("div", {
					className: Object(o.a)(T.a.metaTextColor, T.a.metaTextFont)
				}, c.isProfile ? i.fbt._("User", null, {
					hk: "3KLiZZ"
				}) : i.fbt._("Community", null, {
					hk: "18dohI"
				})), N || x ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.a, {
					className: Object(o.a)(T.a.metaDataSeparator)
				}), s.a.createElement("div", {
					className: Object(o.a)(T.a.metaTextColor, T.a.metaTextFont)
				}, L)) : null, (null === (C = c.displayInfo) || void 0 === C ? void 0 : C.isNSFW) && s.a.createElement(B.b, {
					className: T.a.marginLeft1,
					flair: {
						type: G.f.Nsfw,
						text: i.fbt._("nsfw", null, {
							hk: "2nrY5X"
						})
					}
				}))))
			}

			function Q(e) {
				let {
					typeaheadSuggestions: t,
					focusedItemIndex: n,
					nightmode: r,
					searchItem: c,
					searchOriginPage: o,
					onClearSearchQuery: i,
					onClose: d,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u
				} = e;
				const p = Object(a.e)(O.lb),
					f = [];
				let h = [];
				p ? t.forEach(e => {
					var t;
					(null === (t = e.displayInfo) || void 0 === t ? void 0 : t.isNSFW) ? f.push(e): h.push(e)
				}) : h = t;
				const b = h.length,
					y = [...h, ...f][n];
				return s.a.createElement(s.a.Fragment, null, h.map((e, t) => s.a.createElement(H, {
					focusedItem: y,
					indexOfItem: t,
					relativePosition: t,
					item: e,
					key: e.id,
					onClearSearchQuery: i,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: r,
					onCloseDropdown: d,
					searchOriginPage: o
				})), s.a.createElement(Y, {
					nsfwTypeaheads: f,
					focusedItem: y,
					searchItem: c,
					startPosition: b,
					onCloseDropdown: d,
					onClearSearchQuery: i,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: r,
					searchOriginPage: o
				}))
			}
			var W = n("./src/reddit/hooks/useLocalStorage.ts");
			var V = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				K = n("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = e => {
				let {
					nsfwTypeaheads: t,
					focusedItem: n,
					searchItem: r,
					startPosition: c,
					onCloseDropdown: i,
					onClearSearchQuery: d,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: p,
					searchOriginPage: f
				} = e;
				const h = Object(g.a)(),
					b = Object(a.e)(q.a),
					m = Object(a.e)(O.lb),
					{
						nsfwTypeaheadExpanded: v,
						setNsfwTypeaheadExpanded: E
					} = (() => {
						const [e, t] = Object(W.a)("nsfw_typeahead_expanded", !1);
						return {
							get nsfwTypeaheadExpanded() {
								return e
							},
							setNsfwTypeaheadExpanded: e => {
								t(e)
							}
						}
					})();
				return m && t.length > 0 ? s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
					className: Object(o.a)(T.a.nsfwSection, !v && T.a.borderBottom),
					"data-testid": "typeahead_nsfw_toggle",
					onClick: () => (e => {
						const t = v ? y.a.COLLAPSE_NSFW : y.a.EXPAND_NSFW;
						h(Object(y.u)(t, e)), E(!v)
					})(r)
				}, s.a.createElement("p", {
					className: b ? T.a.titleFontH5 : void 0
				}, $._("NSFW results", null, {
					hk: "17BDhb"
				})), s.a.createElement("p", {
					className: T.a.listItemButton
				}, v ? s.a.createElement(s.a.Fragment, null, $._("Collapse", null, {
					hk: "4nBun"
				}), s.a.createElement(K.a, {
					className: T.a.chevron
				})) : s.a.createElement(s.a.Fragment, null, $._("Expand", null, {
					hk: "11NQXp"
				}), s.a.createElement(V.a, {
					className: T.a.chevron
				})))), v && t.map((e, t) => s.a.createElement(H, {
					focusedItem: n,
					indexOfItem: c + t,
					relativePosition: t,
					item: e,
					key: e.id,
					onClearSearchQuery: d,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: p,
					onCloseDropdown: i,
					searchOriginPage: f
				}))) : null
			};

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function J(e) {
				let {
					typeaheadByTypeSuggestions: t,
					typeaheadByTypeList: n,
					focusedItemIndex: r,
					nightmode: a,
					searchItem: c,
					searchOriginPage: o,
					onClearSearchQuery: i,
					onClose: d,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u
				} = e;
				const p = {
					focusedItem: n[r],
					onClearSearchQuery: i,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: a,
					onCloseDropdown: d,
					searchOriginPage: o
				};
				return s.a.createElement(s.a.Fragment, null, t.communities.length > 0 && s.a.createElement("div", {
					className: T.a.section
				}, s.a.createElement("p", {
					className: T.a.sectionTitle
				}, z._("Communities", null, {
					hk: "3GTB0"
				})), t.communities.map((e, t) => s.a.createElement(H, X({
					key: e.id,
					indexOfItem: t,
					relativePosition: t,
					item: e
				}, p)))), t.people.length > 0 && s.a.createElement("div", {
					className: T.a.section
				}, s.a.createElement("p", {
					className: T.a.sectionTitle
				}, z._("People", null, {
					hk: "3qVb3c"
				})), t.people.map((e, n) => s.a.createElement(H, X({
					key: e.id,
					indexOfItem: t.communities.length + n,
					relativePosition: n,
					item: e
				}, p)))), s.a.createElement(Y, X({
					nsfwTypeaheads: t.nsfw,
					searchItem: c,
					startPosition: n.length - t.nsfw.length
				}, p)))
			}
			var Z = n("./src/reddit/constants/zIndex.ts"),
				ee = n("./src/reddit/controls/Dropdown/index.tsx"),
				te = n("./src/reddit/selectors/searchResults.ts"),
				ne = n("./node_modules/lodash/pick.js"),
				re = n.n(ne),
				se = n("./node_modules/history/esm/history.js"),
				ae = n("./node_modules/react-router-redux/es/index.js"),
				ce = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				oe = n.n(ce),
				ie = n("./src/reddit/constants/parameters.ts"),
				de = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				le = n("./src/reddit/controls/Search/SearchScopePill/index.tsx"),
				ue = n("./src/reddit/hooks/usePageLayer.ts"),
				pe = n("./src/reddit/selectors/platform.ts");
			const fe = "search-trigger-item";

			function he(e) {
				let {
					className: t,
					searchItem: n,
					position: c,
					searchOriginPage: d,
					isFocused: l,
					onTriggerSearch: p
				} = e;
				var v;
				const _ = (null === (v = n.searchQuery) || void 0 === v ? void 0 : v.trim()) || "",
					I = Object(g.a)(),
					S = Object(ue.a)(),
					w = Object(de.bb)(S),
					D = Object(a.d)(),
					j = Object(a.e)(te.j),
					A = Object(a.e)(O.lb),
					{
						nsfwSessionSetting: C
					} = Object(f.b)(),
					P = Object(a.e)(pe.s),
					R = Object(a.e)(pe.d),
					N = Object(le.c)(j),
					x = Object(u.e)({
						...re()(w || {}, ie.D),
						q: n.searchQuery,
						restrict_sr: j.enabled ? "1" : ""
					});
				return Object(r.useEffect)(() => {
					I(Object(y.v)(x, c, S || void 0))
				}, []), s.a.createElement("button", {
					type: "submit",
					onClick: function(e) {
						I(Object(y.p)(E.a.FullSearchButton, x, L.a.Typeahead, S || void 0)), p(e),
							function() {
								const {
									url: e,
									qs: t
								} = Object(b.a)({
									searchItem: n,
									searchOptions: {},
									activeSearchScope: j,
									includeNsfwResults: A && C
								}), r = {
									...Object(h.c)(h.a.TYPEAHEAD, d),
									routeName: P,
									subredditName: R
								};
								D(Object(ae.b)(Object(se.c)({
									pathname: e,
									search: t,
									state: r
								})))
							}()
					},
					className: Object(o.a)(T.a.listItem, oe.a.item, T.a.triggerItem, l && T.a.backgroundFocused, t),
					"data-testid": fe
				}, s.a.createElement(m.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: oe.a.text
				}, i.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), i.fbt._("{search query}", [i.fbt._param("search query", _)], {
					hk: "4vP3YT"
				}), "”", N && s.a.createElement(s.a.Fragment, null, " ", i.fbt._("in {scope}", [i.fbt._param("scope", null == N ? void 0 : N.title)], {
					hk: "4jMNCg"
				}))))
			}

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = "SearchDropdown", me = "SearchDropdownContent", ve = 5, Ee = Object(c.a)(ee.a);

			function Oe(e) {
				var t;
				const {
					containerWidth: n,
					trendingItems: c,
					isTrendingPending: i,
					isOpen: d,
					isTypeaheadPending: l,
					itemList: u,
					recentSearches: p,
					typeaheadSuggestions: f,
					typeaheadByTypeSuggestions: h,
					focusedItemIndex: b,
					nightmode: y,
					searchItem: g,
					searchOriginPage: m,
					isFixed: v = !0,
					isOverlay: E = !0,
					fireAdPixelsOfType: O,
					onClearSearchQuery: _,
					onClose: I,
					onRemoveRecentSearch: S,
					onSendSearchClickRecentEvent: w,
					onSetRecentSearch: j,
					onUpdateSearchQuery: A
				} = e, C = Object(a.d)(), [P, R] = Object(r.useState)(null), [N, x] = Object(r.useState)(n), [M, B] = Object(r.useState)(new Array(ve).fill(!1)), {
					enabled: F
				} = Object(a.e)(te.j), G = Object(a.e)(q.a), H = !!(null === (t = g.searchQuery) || void 0 === t ? void 0 : t.trim()), W = l || i, V = F, K = [...h.communities, ...h.people, ...h.nsfw], $ = !l && (!H || b >= 0) && (G ? 0 === K.length : 0 === f.length) && !V, Y = {
					width: N ? `${N}px` : "inherit",
					overflow: "auto"
				};
				v && (Y.zIndex = Z.g), Object(r.useEffect)(() => {
					x(n)
				}, [n]), Object(r.useLayoutEffect)(() => {
					if (!i && d && document.getElementById(me)) {
						const e = X();
						B(e), c.forEach((t, n) => {
							e[n] && C((e, n) => Object(k.p)({
								state: n(),
								trendingSearch: t,
								telemetrySource: L.a.Typeahead
							}))
						})
					}
				}, [i, d, C]);
				const X = () => {
					const e = new Array(c.length).fill(!1);
					return c.forEach((t, n) => {
						if (t.id) {
							const r = document.getElementById(`${ge}-${t.id}`),
								s = document.getElementById(me);
							if (r && s) {
								const t = r.getBoundingClientRect(),
									a = s.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[n] = !0)
							}
						}
					}), e
				};
				const z = !l && !V;
				return s.a.createElement(Ee, {
					className: Object(o.a)(T.a.bodyBackgroundColor, T.a.bodyTextColor, T.a.borderTop1Line, T.a.sdListContainer),
					id: me,
					isFixed: v,
					isOpen: d,
					isOverlay: E,
					tooltipId: ge,
					noFocus: !0,
					style: Y,
					onDropdownMounted: () => {
						if (!i && c.length > 0) {
							const e = X();
							B(e), c.forEach((t, n) => {
								e[n] && C((e, n) => Object(k.p)({
									state: n(),
									trendingSearch: t,
									telemetrySource: L.a.Typeahead,
									offset: p.length
								}))
							})
						}
					},
					onScroll: () => {
						const e = X();
						c.forEach((t, n) => {
							M[n] || !e[n] || t.post && t.post.isSponsored || C((e, n) => Object(k.p)({
								state: n(),
								trendingSearch: t,
								telemetrySource: L.a.Typeahead,
								offset: p.length
							}))
						}), B(e)
					}
				}, $ && s.a.createElement(s.a.Fragment, null, p.map((e, t) => s.a.createElement(D, {
					searchOriginPage: m,
					activeTooltipId: P,
					focusedItem: u[b],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: _,
					onRemoveRecentSearch: S,
					onSendSearchClickRecentEvent: w,
					onSetRecentSearch: j,
					onUpdateSearchQuery: A,
					recentSearch: e,
					toggleTooltip: R,
					nightmode: y,
					onCloseDropdown: I
				})), !i && c.length ? s.a.createElement("div", {
					className: Object(o.a)(T.a.labelsFont, T.a.dropdownPadding, T.a.metaTextColor, T.a.titlePadding, !!p.length && T.a.borderTop2Line)
				}, ye._("Trending today", null, {
					hk: "3nAMpY"
				})) : null, c.map(e => s.a.createElement(U, {
					id: `${ge}-${e.id}`,
					key: e.id,
					focusedItem: u[b],
					searchOriginPage: m,
					fireAdPixelsOfType: O,
					onCloseDropdown: I,
					onSetRecentSearch: j,
					onUpdateSearchQuery: A,
					trendingItem: e
				}))), W && !V && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(o.a)(T.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(o.a)(T.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(o.a)(T.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(o.a)(T.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(o.a)(T.a.loadingItem)
				})), !$ && H && s.a.createElement(s.a.Fragment, null, z && G ? s.a.createElement(J, be({}, e, {
					typeaheadByTypeList: K
				})) : s.a.createElement(Q, e), s.a.createElement(he, {
					className: Object(o.a)(T.a.borderTop2Line, T.a.triggerItem),
					key: g.searchQuery,
					searchItem: g,
					position: f.length,
					searchOriginPage: m,
					onTriggerSearch: I,
					isFocused: b === u.length - 1
				})))
			}
		},
		"./src/reddit/components/SubredditForkingCTA/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				s = n.n(r),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				c = n("./node_modules/react/index.js"),
				o = n.n(c),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/constants/comments.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/selectors/comments.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./node_modules/reselect/es/index.js"),
				b = n("./src/lib/cache/index.ts"),
				y = n("./src/lib/makeCommentsPageKey/index.ts"),
				g = n("./src/reddit/helpers/trackers/subredditForking.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx");
			const v = Object(a.a)({
					resolved: {},
					chunkName: () => "SubredditForkingCTA",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("Governance~Reddit~SubredditForkingCTA"), n.e("SubredditForkingCTA")]).then(n.bind(null, "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx"
					}
				}),
				E = [{
					low: 0,
					high: 1e5,
					threshold: 100
				}, {
					low: 1e5,
					high: 3e5,
					threshold: 200
				}, {
					low: 3e5,
					high: 8e5,
					threshold: 300
				}, {
					low: 8e5,
					high: 1 / 0,
					threshold: 500
				}],
				O = "subreddit-forking.dismissals",
				_ = (e, t) => {
					const n = Object(f.l)(e),
						r = Object(y.a)(t.postId),
						s = Object(p.G)(e, t),
						a = Object(u.o)(e, {
							...t,
							commentsPageKey: r
						}),
						c = Object(u.k)(e, {
							...t,
							commentsPageKey: r
						}).reduce((t, n) => {
							var r;
							const s = Object(u.l)(e, {
								commentLink: n
							});
							return n.type !== d.a.Comment && 0 !== (null === (r = a[n.id]) || void 0 === r ? void 0 : r.depth) || t.push(s), t
						}, []).sort((e, t) => t.score - e.score).slice(0, 5);
					return (null == n ? void 0 : n.id) === s.authorId || !!c.find(e => e.authorId === (null == n ? void 0 : n.id))
				},
				I = e => {
					let t = Object(b.b)(O);
					const n = Object.entries(t || {});
					n.length >= 99 && (t = n.sort((e, t) => {
						let [, n] = e, [, r] = t;
						return r - n
					}).splice(0, 99).reduce((e, t) => {
						let [n, r] = t;
						return e[n] = r, e
					}, {})), Object(b.d)(O, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				S = (e, t) => {
					var n;
					if (!Object(f.R)(e)) return !1;
					if (null === (n = Object(b.b)(O)) || void 0 === n ? void 0 : n[t.postId]) return !1;
					const r = Object(p.G)(e, t),
						s = Object(p.V)(e, {
							...t,
							disallowProfile: !0
						});
					if ((null == s ? void 0 : s.type) !== l.g.Public || s.isNSFW || s.isQuarantined || (null == r ? void 0 : r.isNSFW) || (null == r ? void 0 : r.source)) return !1;
					const a = E.find(e => {
						let {
							low: t,
							high: n
						} = e;
						return n >= s.subscribers && s.subscribers > t
					});
					return !(!a || !r.numComments || a.threshold > r.numComments) && !!_(e, t)
				},
				T = () => Object(h.c)({
					shouldLoadCTA: S
				}),
				w = Object(i.b)(T),
				D = e => {
					let {
						shouldLoadCTA: t,
						postId: n,
						sendEvent: r
					} = e;
					const [s, a] = Object(c.useState)(!1);
					return s || !t ? null : o.a.createElement(v, {
						onClose: () => {
							I(n), a(!0), r(Object(g.b)(n))
						},
						postId: n
					})
				},
				j = Object(c.memo)(w(Object(m.c)(D)))
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/components/BlankPost/index.tsx"),
				o = n("./src/reddit/connectors/PostViewable/index.ts");
			const i = Object(o.a)(null);
			class d extends s.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? s.a.createElement(c.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : s.a.createElement(a.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = i(d)
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			var s, a;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(s || (s = {})),
			function(e) {
				e.NEVER_SHOWN = "never_shown", e.IS_SHOWING = "is_showing", e.DISMISSED = "dismissed"
			}(a || (a = {}));
			const c = {
				[a.NEVER_SHOWN]: [a.IS_SHOWING, a.DISMISSED],
				[a.IS_SHOWING]: [a.DISMISSED],
				[a.DISMISSED]: []
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, n) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				a = n.n(s);
			t.a = r.a.span("invisibleText", a.a)
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				f = n.n(p),
				h = n("./src/reddit/controls/Search/index.m.less"),
				b = n.n(h);
			const y = Object(a.b)(() => Object(c.c)({
				subredditsByName: Object(i.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.C)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}))(e => s.a.createElement("div", {
				className: Object(o.a)(f.a.subText, b.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(l.b, {
				className: Object(o.a)(b.a.subredditIcon, b.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(l.b, {
				className: Object(o.a)(b.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && s.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchBar: "_1DeR7_QiQnu2UK0e2dDfYD",
				form: "_1ugesNSGtWAUEmFe-hdnyI",
				input: "_1K7ubH9z5v9E6C19j2fjQU",
				isOpen: "h5AN6BnHrFmiSiSIKQbi0",
				dismissButton: "_3XsEUsC3uEaiEi63QWpAM",
				inputLabel: "_1t0x2fnX0IYp1-sp47CSHI",
				iconContainer: "cNtxQ5c1PdvcDe82u_yz9",
				icon: "_3ylUT2QX58nnEl8r4H26ys"
			}
		},
		"./src/reddit/controls/Search/SearchBar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/lodash/debounce.js"),
				c = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/chooseVariant/index.ts"),
				h = n("./node_modules/reselect/es/index.js");
			const b = Object(h.a)(e => Object(f.c)(e, {
				experimentEligibilitySelector: f.a,
				experimentName: p.kg
			}), e => ({
				promptBeforeClick: e === p.lg.PromptBeforeClick,
				promptAfterClick: e === p.lg.PromptAfterClick
			}));
			var y = n("./src/reddit/controls/Search/SearchScopePill/index.tsx"),
				g = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				m = n.n(g);
			const v = "Search Reddit",
				E = ["world news", "uplifting news", "wnba", "awws", "make me smile", "eye bleach", "dogecoin", "the bachelor", "catloaf", "blep", "wholesome memes", "history memes", "starter packs", "mildly interesting", "learn japanese", "learn programming", "vinyl", "houseplants", "skincare addicts", "nasa", "ask historians", "ask reddit", "100 years ago", "data is beautiful", "what is this thing"];
			class O {
				static get() {
					if (O.showFirstValue) {
						O.showFirstValue = !1;
						const e = document.getElementById("header-search-bar").placeholder;
						if (e && e !== v) return e
					}
					O.showFirstValue = !1, 0 === O.queriesToBeShown.length && (O.queriesToBeShown = [...E]);
					const e = Math.floor(Math.random() * O.queriesToBeShown.length),
						t = O.queriesToBeShown[e];
					return O.queriesToBeShown.splice(e, 1), `Search "${t}"`
				}
			}
			O.queriesToBeShown = new Array(...E), O.showFirstValue = !0;
			const _ = "search-bar-dismiss-button",
				I = "header-search-bar",
				S = e => {
					let {
						inputRef: t,
						isOpen: n,
						onChange: a,
						onClearSearchQuery: p,
						onClickDismissSearchScopePill: f,
						onFocusSearchBar: h,
						onFormSubmit: g,
						onKeyDown: E,
						searchQuery: S,
						showSearchScopePill: T,
						searchScopePill: w,
						searchOriginPage: D
					} = e;
					var j;
					const {
						promptBeforeClick: A,
						promptAfterClick: C
					} = Object(d.e)(b), [P, R] = Object(o.useState)();
					Object(o.useEffect)(() => {
						C && "home" === D && R(void 0)
					}, [C, D]);
					const N = Object(o.useMemo)(() => A && "home" === D && O.get(), [A, D]),
						x = "home" === D && (C && P || N),
						L = T && w ? r.fbt._("Search within {subredditName}", [r.fbt._param("subredditName", w.title)], {
							hk: "2B6J3t"
						}) : r.fbt._("Search all of Reddit", null, {
							hk: "1Fi1f5"
						});
					return i.a.createElement("div", {
						className: Object(s.a)(m.a.searchBar, n && m.a.isOpen)
					}, i.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						className: m.a.form,
						method: "get",
						onSubmit: g,
						onFocus: h,
						role: "search"
					}, i.a.createElement("label", {
						className: m.a.inputLabel,
						htmlFor: "header-search-bar"
					}, i.a.createElement("div", {
						"aria-hidden": !0,
						className: m.a.iconContainer
					}, i.a.createElement(u.a, {
						name: "search",
						className: m.a.icon
					})), i.a.createElement(l.a, {
						"aria-live": "assertive"
					}, L)), T && w && i.a.createElement(y.b, {
						onClickDismiss: function() {
							var e;
							null === (e = t.current) || void 0 === e || e.focus(), f()
						},
						content: w
					}), i.a.createElement("input", {
						className: m.a.input,
						defaultValue: S,
						id: I,
						name: "q",
						onChange: c()((function() {
							var e;
							a((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
						}), 200),
						onKeyDown: E,
						onClick: C ? () => {
							"home" === D && R(O.get())
						} : void 0,
						placeholder: x ? r.fbt._("{query}", [r.fbt._param("query", x)], {
							hk: "occSN"
						}) : r.fbt._("{Text}", [r.fbt._param("Text", v)], {
							hk: "DG9dX"
						}),
						ref: t,
						type: "search"
					})), (null === (j = null == t ? void 0 : t.current) || void 0 === j ? void 0 : j.value) ? i.a.createElement("button", {
						"aria-label": r.fbt._("Remove search bar text", null, {
							hk: "4twCsS"
						}),
						id: _,
						className: m.a.dismissButton,
						"data-testid": _,
						onClick: function() {
							var e;
							null === (e = t.current) || void 0 === e || e.focus(), p()
						}
					}, i.a.createElement(u.a, {
						name: "clear"
					})) : null)
				}
		},
		"./src/reddit/controls/Search/SearchScopePill/index.m.less": function(e, t, n) {
			e.exports = {
				SearchScopePill: "_2Xr7MVf-5monsBWevLifeW",
				searchScopePill: "_2Xr7MVf-5monsBWevLifeW",
				pillText: "XuI5nsPhP6eDNKSKFz-e4",
				subredditIcon: "_3WmD5z1Jh2YlJtFiczfOPQ",
				dismissIcon: "WBGmEslY0knAV_FJ6nxJG",
				dismissButton: "_1xMEc-Wt4Qb0j1YKfgnaV-",
				dismissButtonDay: "fHi-ixYo4c6B0nG6gLHfT",
				active: "_14dJJyNdhmM1o-aAiUtZu6",
				inactive: "_3s3sI85UQf8tQPFQZxjTzN",
				dismissButtonNight: "_1QDgUGnYSgM-nXLPnwcp6j"
			}
		},
		"./src/reddit/controls/Search/SearchScopePill/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "b", (function() {
				return T
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Pill/index.tsx"),
				l = n("./src/reddit/components/Pill/PillText/index.m.less"),
				u = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(r || (r = {}));
			const f = {
					[r.DAY]: u.a.pillTextVariantDay,
					[r.NIGHT]: u.a.pillTextVariantNight
				},
				h = e => {
					let {
						children: t,
						className: n,
						variant: r,
						...s
					} = e;
					return c.a.createElement("div", p({}, s, {
						className: Object(i.a)(u.a.pillText, f[r], n)
					}), t)
				};
			var b = n("./src/reddit/components/SubredditIcon/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/controls/Search/index.m.less"),
				v = n.n(m),
				E = n("./src/lib/constants/index.ts"),
				O = n("./src/reddit/controls/Search/SearchScopePill/index.m.less"),
				_ = n.n(O);
			const I = "search-scope-pill-button";

			function S(e) {
				var t;
				if (e.enabled) switch (e.type) {
					case E.dc.Subreddit:
						const n = e.payload;
						return {
							icon: n.communityIcon || (null === (t = n.icon) || void 0 === t ? void 0 : t.url), title: n.displayText, key: `${n.id}-${n.name}`
						};
					case E.dc.Multireddit:
						const r = e.payload;
						return {
							icon: r.icon, title: r.displayText, key: `${r.ownerId}-${r.displayText}`
						};
					case E.dc.SyntaxScoped:
						return e.payload;
					default:
						return
				}
			}
			const T = e => {
				let {
					onClickDismiss: t,
					content: n
				} = e;
				const a = Object(o.e)(g.eb);
				return c.a.createElement(d.a, {
					className: _.a.SearchScopePill,
					"data-testid": "search-scope-pill"
				}, c.a.createElement(h, {
					className: _.a.pillText,
					"data-testid": "search-scope-pill-text",
					variant: a ? r.NIGHT : r.DAY
				}, c.a.createElement(b.b, {
					className: Object(i.a)(v.a.subredditIcon, _.a.subredditIcon),
					iconUrl: n.icon
				}), n.title, c.a.createElement("button", {
					"aria-label": s.fbt._("Remove community search filter", null, {
						hk: "1zezc9"
					}),
					className: Object(i.a)(_.a.dismissButton, a ? _.a.dismissButtonNight : _.a.dismissButtonDay),
					"data-testid": I,
					onClick: t,
					onFocus: e => {
						e.stopPropagation()
					},
					id: I,
					type: "button"
				}, c.a.createElement(y.a, {
					className: _.a.dismissIcon,
					name: "clear"
				}))))
			}
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
			e.exports = {
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4"
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.ob.POST
			}), l = async (e, t, n) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.ob.POST
			}), u = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.ob.POST
			}), p = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.ob.POST
			}), f = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				endpoint: Object(i.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: s.ob.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/chat/userSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				d = n("./src/reddit/constants/headers.ts"),
				l = n("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				u = n("./src/redditGQL/types.ts");
			const p = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				f = e => Object(a.a)(Object(o.a)(e, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.ob.GET
				}),
				h = async (e, t) => Object(a.a)(Object(o.a)(t, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.ob.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), b = (e, t) => {
					const n = {
						channels: t
					};
					return Object(c.a)(e, {
						...i,
						variables: {
							input: n
						}
					})
				}, y = e => Object(c.a)(e, {
					...l,
					variables: {
						input: {
							customType: u.d.Direct
						}
					}
				})
		},
		"./src/reddit/endpoints/crowdControl/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r, s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/CrowdControlLevelInfo.json");
			! function(e) {
				e.Off = "OFF", e.Lenient = "LENIENT", e.Medium = "MEDIUM", e.Strict = "STRICT"
			}(r || (r = {}));
			const c = (e, t) => Object(s.a)(e, {
				...a,
				variables: {
					postId: t
				}
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, n) {
				const a = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${r.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					c = await a;
				if (c.ok) {
					const e = {},
						t = {},
						n = c.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						t[r] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...c,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return c
			}
			async function c(e, t, n) {
				const a = await Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (a.ok) {
					const e = {},
						t = [],
						n = a.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						e[r] = s, t.push(s.id)
					}), {
						...a,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return a
			}

			function o(e, t, n) {
				let a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${r.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: a
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function o(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: t
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/endpoints/subreddit/recommendations.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditRecommendations.json");
			t.a = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/endpoints/usernameAvailable/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts");
			const o = (e, t) => Object(s.a)(Object(a.a)(e, [c.a]), {
				method: r.ob.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/ensureEndSlash/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => e.endsWith("/") ? e : `${e}/`
		},
		"./src/reddit/helpers/getSearchUrl/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/search/index.ts"),
				a = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/models/Search/index.ts"),
				o = n("./src/reddit/helpers/ensureEndSlash/index.ts");
			const i = e => {
					var t;
					const n = (null === (t = e.displayInfo) || void 0 === t ? void 0 : t.subredditOrProfileName) || "";
					return `/${Object(o.a)(e.isProfile?n.replace("u/","user/"):n)}`
				},
				d = "search/";

			function l(e) {
				let {
					searchItem: t,
					searchOptions: n,
					activeSearchScope: l,
					includeNsfwResults: u
				} = e;
				var p;
				let f;
				const h = [];
				if (t.isTypeaheadSuggestion) f = i(t);
				else {
					if (h.push(`${a.z}=${Object(s.b)(t.rawQuery||t.searchQuery)}`), f = `/${d}`, t.section !== c.c.trending && t.section !== c.c.recent || n && n.source && h.push(`source=${n.source}`), null == l ? void 0 : l.enabled) switch (l.type) {
						case r.dc.Subreddit:
							const e = l.payload;
							f = `${e.url}${d}`, h.push(`${a.C}=1`), h.push(`${a.L}=${e.isNSFW?"1":""}`);
							break;
						case r.dc.Multireddit:
							const t = l.payload;
							f = `${t.url}${d}`, h.push(`${a.C}=1`), h.push(`${a.L}=${t.isNSFW?"1":""}`), h.push(`${a.n}=1`);
							break;
						case r.dc.SyntaxScoped:
							f = `/${Object(o.a)(null===(p=l.payload)||void 0===p?void 0:p.title)}${d}`, h.push(`${a.C}=1`)
					} else t.subredditOrProfileRestrictedName && (f = `${t.subredditOrProfileRestrictedName}${d}`, h.push(`${a.C}=1`));
					u && h.push(`${a.m}=1`), (null == n ? void 0 : n.t) && n.t !== r.oc.ALL && h.push(`${a.O}=${n.t}`), (null == n ? void 0 : n.sort) && h.push(`${a.I}=${n.sort}`), (null == n ? void 0 : n.type) && (n.type.includes(r.ic.Posts) || h.push(`${a.P}=${n.type[0]}`))
				}
				return {
					url: f,
					qs: h.join("&")
				}
			}
		},
		"./src/reddit/helpers/isRobotIndexableMeta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => {
				const n = e && e[t];
				return !n || n.isRobotIndexable
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts");
			const a = "https://js.stripe.com/v3/",
				c = "https://www.paypalobjects.com/api/checkout.js",
				o = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${r.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function i(e, t) {
				return t() ? Promise.resolve() : new Promise((n, r) => s.a.write(() => {
					t() && n();
					const s = document.head;
					let a = s.querySelector(`script[src='${e}']`);

					function c() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), n()
					}

					function o() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), a && s.removeChild(a), r()
					}
					a || ((a = document.createElement("script")).src = e, s.appendChild(a)), a.addEventListener("load", c), a.addEventListener("error", o)
				}))
			}

			function d() {
				return i(a, () => "undefined" != typeof Stripe)
			}

			function l() {
				return i(c, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(o).map(e => {
					const t = "__" + e;
					return i(o[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/env/index.ts"),
				s = n("./src/reddit/helpers/parseUrl.ts");
			const a = ["old", "new", "en", "www", "np", "m"],
				c = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(a.map((function(e) {
					return e + ".reddit.com"
				}))).concat(a.map((function(e) {
					return e + ".reddit.local"
				}))),
				o = ["mod.reddit.com"],
				i = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: c.concat("redd.it"),
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
						hostnames: o,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: o,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e, t) {
				const n = i[e];
				if (!i) throw new Error("Could not find reddit URL spec: " + e);
				const r = Object(s.a)(t);
				if (!r) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || c).indexOf(r.hostname)) return;
				const a = r.pathname.match(n.pathname);
				if (a) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = a[n + 1], e
						}), {})
					}
				}
			}

			function l(e) {
				return (e.match(new RegExp(s.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(i).some((function(n) {
						return t = d(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/onBeforeRequestFactory/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				c = n("./src/lib/addQueryParams/index.ts"),
				o = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/subreddit.ts"));
			const i = new RegExp("^/desktopapi/v1/(duplicates/[^/]+|frontpage|news|search|subreddits/(all|popular))(/|$)"),
				d = new RegExp("^/desktopapi/v1/(search|subreddits|postcomments|collection_postcomments|submitpage)(/|$)"),
				l = new RegExp("^/desktopapi/v1/(subreddits|postcomments|collection_postcomments)/?$"),
				u = (new RegExp("^/desktopapi/v1/(postcomments)(/+|$)"), new RegExp("^/desktopapi/v1/frontpage/?$")),
				p = new RegExp("^/desktopapi/v1/submitpage(/|$)");
			var f = (e, t, n) => {
					const r = new Set;
					e.user.session && !e.user.session.unsafeLoggedOut && (e.user.account || (r.add("identity"), r.add("prefs"), r.add("prefsAccount")), (e => !i.test(e.pathname || ""))(t) && r.add("identity")), !e.live.isFrontpageLoaded && (e => u.test(e.pathname || ""))(t) && r.add("featuredLiveThread");
					const s = t.pathname || "";
					if (d.test(s) || l.test(s)) {
						const s = ((e, t) => {
								if (p.test(e.pathname || "")) {
									const {
										subreddit: e
									} = t.data;
									return e
								}
							})(t, n),
							a = e.platform.currentPage,
							c = a && a.urlParams.subredditName,
							i = s || c || "",
							d = Object(o.I)(e, i);
						d && e.structuredStyles.models[d] || r.add("structuredStyles"), e.user.prefs.subreddit[d] || r.add("prefsSubreddit")
					}
					return [...r].join(",")
				},
				h = n("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const n = s.a.parse(t.endpoint, !0),
					{
						host: r,
						protocol: o
					} = n;
				if (`${o}//${r}` === a.a.gatewayUrl) {
					const r = {},
						s = e.getState();
					Object(h.lb)(s) && (r.allow_over18 = 1), Object(h.p)(s) && (r.gated_optin = 1), Object(h.ob)(s) && (r.quarantine_optin = 1), r.include = f(e.getState(), n, t), t.endpoint = Object(c.a)(t.endpoint, r)
				}
			}
		},
		"./src/reddit/helpers/ordinal/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				const t = ["th", "st", "nd", "rd"],
					n = e % 100;
				return e + (t[(n - 20) % 10] || t[n] || t[0])
			}
		},
		"./src/reddit/helpers/trackers/commentList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => {
				Object(r.a)({
					action: "view",
					source: "commentlist",
					noun: "bottom",
					...s.o(e),
					listing: s.z(e, t),
					subreddit: s.kb(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "p", (function() {
				return D
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "m", (function() {
				return R
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "j", (function() {
				return L
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "t", (function() {
				return U
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "l", (function() {
				return G
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "h", (function() {
				return Y
			})), n.d(t, "q", (function() {
				return X
			}));
			var r, s = n("./src/lib/stringInterpolate/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				o = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				i = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (n("./src/reddit/helpers/widgets/index.tsx"), n("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = n("./src/reddit/models/Search/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/reddit/selectors/trending.ts"),
				h = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/telemetry/index.ts"),
				y = n("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(r || (r = {}));
			const g = "discovery_unit",
				m = (e, t, n) => ({
					...p.o(e),
					source: g,
					screen: p.cb(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				v = (e, t, n) => ({
					...m(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				E = (e, t) => {
					Object(b.a)(O(t)(e))
				},
				O = (e, t) => n => v(n, e, t),
				_ = (e, t, n, r) => "unitName" in t ? m(e, t, r) : ((e, t, n) => ({
					...p.o(e),
					source: "search",
					screen: p.cb(e),
					search: n ? {
						...p.db(e, n, o.a.SERP),
						structureType: p.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				I = (e, t, n, s, a) => ({
					..._(e, t, s, a),
					action: "view",
					noun: r.ITEM_POST,
					post: p.K(e, n)
				}),
				S = e => {
					let {
						post: t,
						rawQuery: n,
						searchQuery: r
					} = e;
					return {
						displayQuery: decodeURIComponent(r),
						rawQuery: n ? decodeURIComponent(n) : void 0,
						structureType: t && t.isSponsored ? p.c.PromotedTrend : p.c.Trending
					}
				};
			var T;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(T || (T = {}));
			const w = e => {
					Object(b.a)(C({
						...e,
						action: c.c.CLICK
					}))
				},
				D = e => {
					Object(b.a)(C({
						...e,
						action: c.c.VIEW
					}))
				},
				j = {
					[o.a.Popular]: T.POPULAR_CAROUSEL,
					[o.a.Typeahead]: T.SEARCH_DROPDOWN
				},
				A = {
					[o.a.Popular]: l.d.tile,
					[o.a.Typeahead]: l.d.dropdown
				},
				C = e => {
					let {
						action: t,
						offset: n = 0,
						state: s,
						telemetrySource: a,
						trendingSearch: c
					} = e;
					const o = j[a],
						i = A[a],
						l = Object(f.a)(s, i).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === c.id) + n;
					return {
						...p.o(s),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: S(c),
						discoveryUnit: o === T.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: p.d(s, {
							paneName: o,
							position: l
						}),
						search: {
							originElement: o === T.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: s.platform.currentPage ? p.v(s.platform.currentPage) : void 0,
							query: c.rawQuery,
							structureType: p.c.Trending,
							impressionId: y.a.get(a),
							queryId: p.eb(s, a)
						}
					}
				},
				P = (e, t, n, r, s, a, o) => {
					Object(b.a)({
						...p.o(e),
						...Object(i.m)({
							state: e,
							postId: n,
							searchOptions: r,
							pageLayer: s,
							key: a,
							discoveryUnit: t
						}),
						action: c.c.VIEW,
						noun: o ? "ad" : "post"
					})
				},
				R = (e, t, n, r) => {
					Object(b.a)(I(e, t, n, r))
				},
				N = (e, t, n, r) => s => I(s, e, t, n, r),
				x = (e, t) => {
					Object(b.a)({
						...m(e, t),
						source: g,
						action: c.c.CLICK,
						noun: "show_less_often"
					})
				},
				L = (e, t, n, r) => {
					Object(b.a)(k(t, n, r)(e))
				},
				k = (e, t, n, s) => a => {
					return {
						..._(a, e, n, s),
						source: g,
						action: c.c.CLICK,
						noun: r.ITEM_POST,
						post: p.K(a, t)
					}
				},
				U = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => Object(i.s)(e, ...t)
				},
				M = (e, t, n, r) => s => a => Object(i.k)({
					action: c.c.CLICK,
					state: a,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: n,
					postId: s,
					discoveryUnit: r
				}),
				B = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => n => ({
						...U(...t)(e)(n),
						noun: "ad"
					})
				},
				F = (e, t) => n => s => ({
					...e ? m(s, e, t) : {},
					source: g,
					action: c.c.CLICK,
					noun: r.ITEM_POST,
					post: p.K(s, n)
				}),
				G = (e, t, n, r) => {
					Object(b.a)(q(t, n, r)(e))
				},
				q = (e, t, n, r) => s => {
					const a = Object(u.c)(s, {
							postId: t
						}),
						o = a ? Object(h.b)(s, a) : void 0;
					return {
						..._(s, e, n, r),
						...o,
						source: g,
						action: c.c.CLICK,
						noun: "item_post_subreddit",
						post: p.K(s, t)
					}
				},
				H = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: a.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				Q = (e, t, n) => p.d(e, {
					position: n
				}),
				W = (e, t, n) => {
					const s = H();
					return e => ({
						...m(e, s),
						actionInfo: Q(e, 0, n),
						subreddit: p.lb(e, t) || null,
						source: g,
						action: c.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				V = (e, t, n) => {
					const s = H();
					return e => ({
						...m(e, s),
						actionInfo: Q(e, 0, n),
						subreddit: p.lb(e, t) || null,
						source: g,
						action: c.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				K = (e, t, n, s) => {
					const a = H();
					return e => ({
						...m(e, a),
						actionInfo: Q(e, 0, n),
						subreddit: p.lb(e, t) || null,
						post: s ? p.K(e, s) : null,
						source: g,
						action: c.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				$ = (e, t, n, s) => {
					const a = H();
					return e => ({
						...m(e, a),
						actionInfo: Q(e, 0, n),
						subreddit: p.lb(e, t) || null,
						post: s ? p.K(e, s) : null,
						source: g,
						action: c.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Y = (e, t) => n => ({
					...m(n, e),
					...t && Object(h.b)(n, t),
					source: g,
					action: c.c.CLICK,
					noun: "item"
				}),
				X = e => t => ({
					...m(t, e),
					source: g,
					action: c.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...s.o(t),
					actionInfo: s.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				c = (e, t, n) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.o(a),
					actionInfo: s.d(a, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				o = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				i = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.o(n),
					actionInfo: s.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.o(e),
					actionInfo: s.d(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditForking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "click",
					...r.o(e),
					actionInfo: r.d(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "dismiss",
					...r.o(e),
					actionInfo: r.d(e)
				}),
				c = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...r.o(e),
					actionInfo: r.d(e)
				})
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				o = n.n(c);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(o.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, s.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, s.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			}));
			const r = 24,
				s = 64e3,
				a = 128,
				c = 128,
				o = (e, t, n, r) => ({
					name: e,
					url: t,
					subredditId: n,
					...r
				})
		},
		"./src/reddit/models/NewCommunityProgress/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			const r = "new_community_setup",
				s = "ncp_v3_module",
				a = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var c, o, i;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(c || (c = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(o || (o = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(i || (i = {}))
		},
		"./src/reddit/models/Talk/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PERIWINKLE = "periwinkle", e.ORANGERED = "orangered", e.MANGO = "mango", e.KIWI = "kiwi", e.ALIEN = "alien"
				}(r || (r = {}))
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(r || (r = {}))
		},
		"./src/reddit/models/inboxBanner/index.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.IOS = "IOS_APP", e.ANDROID = "ANDROID_APP", e.DESKTOP = "DESKTOP_APP"
				}(r || (r = {})),
				function(e) {
					e.GOTO = "goto", e.DISMISS = "dismiss"
				}(s || (s = {}))
		},
		"./src/reddit/reducers/features/categories/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/category/constants.ts");
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b:
					case s.c:
						return null;
					case s.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.c:
						return !1;
					case s.b:
						return !0;
					default:
						return e
				}
			};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.c:
							return !0;
						case s.b:
						case s.a:
							return !1;
						default:
							return e
					}
				},
				i = Object(r.c)({
					error: a,
					loaded: c,
					pending: o
				});
			const d = {};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.g:
					case s.f: {
						const {
							categoryId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case s.e: {
						const {
							categoryId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const u = {};
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.g: {
						const {
							categoryId: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case s.f: {
						const {
							categoryId: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const f = {};
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g: {
							const {
								categoryId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case s.f:
						case s.e: {
							const {
								categoryId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(r.c)({
					error: l,
					loaded: p,
					pending: h
				}),
				y = Object(r.c)({
					list: i,
					subreddits: b
				}),
				g = n("./node_modules/lodash/isEmpty.js"),
				m = n.n(g);
			const v = [];
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b: {
						const {
							categoryIds: n
						} = t.payload;
						return m()(n) ? e : n
					}
					default:
						return e
				}
			};
			const O = {};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b: {
							const {
								categories: n
							} = t.payload;
							return m()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				I = n("./node_modules/lodash/forOwn.js"),
				S = n.n(I),
				T = n("./src/reddit/helpers/name/index.ts");
			const w = {};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b: {
							const {
								categories: n
							} = t.payload;
							if (m()(n)) return e;
							const r = {};
							return S()(n, e => {
								r[Object(T.i)(e.name)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				j = n("./src/reddit/actions/global/constants.ts"),
				A = n("./src/reddit/constants/localStorage.ts");
			const C = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.a:
						return t.payload[A.b.CATEGORIES_RANKING_STORE] || e;
					case s.d: {
						const {
							categoryId: n,
							rank: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: y,
				ids: E,
				models: _,
				nameToId: D,
				ranking: P
			})
		},
		"./src/reddit/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return kw
			}));
			var r = n("./src/reddit/actions/modal.ts");
			const s = {};
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.e:
							if (!t.payload.actionSource && !t.payload.redirectUrl) return s;
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/authorFlair.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/actions/governance/constants.ts"),
				d = n("./src/reddit/actions/harbergerTax/constants.ts"),
				l = n("./src/reddit/actions/platform.ts"),
				u = n("./src/reddit/actions/product.ts"),
				p = n("./src/reddit/actions/reportFlow/constants.ts"),
				f = n("./src/reddit/actions/structuredStyles/constants.ts"),
				h = n("./src/reddit/constants/modals.ts");
			var b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.c: {
							const {
								id: n,
								args: r
							} = t.payload;
							return (null == e ? void 0 : e.id) === n ? null : {
								id: n,
								args: r
							}
						}
						case r.b:
						case r.d:
						case l.b:
						case p.f:
							return t.type === l.b && (null == e ? void 0 : e.id) === h.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
						case f.e:
							return (null == e ? void 0 : e.id) === h.a.BLADE_UNSAVED_CHANGES ? null : e;
						case f.d:
							return (null == e ? void 0 : e.id) === h.a.BLADE_NIGHTMODE ? null : e;
						case c.a:
							return (null == e ? void 0 : e.id) === h.a.USER_FLAIR_MODAL_ID ? null : {
								id: h.a.USER_FLAIR_MODAL_ID
							};
						case u.b:
							return {
								id: h.a.BADGE_PURCHASE
							};
						case i.d:
							return {
								id: h.a.GOVERNANCE_OPT_OUT
							};
						case i.r:
							return {
								id: h.a.TRANSFER_POINTS
							};
						case i.o:
							return {
								id: h.a.GOVERNANCE_RELEASE_NOTES
							};
						case d.e:
							return {
								id: h.a.HARBERGER_TAX_BANNER_PURCHASE
							};
						case d.c:
							return {
								id: h.a.HARBERGER_TAX_BANNER_MANAGE
							};
						case d.b:
							return {
								id: h.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE
							};
						case d.a:
							return {
								id: h.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE
							};
						case i.x:
							return {
								id: h.a.WALLET_REGISTRATION_MODAL
							};
						case o.c:
							return {
								id: h.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				y = n("./src/reddit/actions/ads/constants.ts"),
				g = n("./src/reddit/actions/unload/constants.ts");
			const m = {};

			function v(e, t, n, r) {
				const s = e[t];
				return {
					...e,
					[t]: {
						...s,
						[r]: n
					}
				}
			}
			var E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (!t.payload) return e;
					switch (t.type) {
						case y.i:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case y.b: {
							const {
								postId: n,
								vendorMetadata: r,
								currGallerySlideIdx: s
							} = t.payload;
							return v(e, n, r, Number.isInteger(s) ? `adClickSlide${s}` : "adClick")
						}
						case y.t:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case y.q:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case y.k:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case y.p:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case y.o:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case y.m:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case y.l:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case y.n:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case y.r: {
							const {
								postId: n,
								eventType: r,
								vendorMetadata: s
							} = t.payload;
							return v(e, n, s, `adVideoWatchedPercent${r}`)
						}
						case y.s: {
							const {
								postId: n,
								eventType: r,
								vendorMetadata: s
							} = t.payload;
							return v(e, n, s, `adVideoWatchedSeconds${r}`)
						}
						case y.C:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case y.E:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case y.D:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case g.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case y.y:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case y.h: {
							const {
								postId: n,
								vendorMetadata: r,
								eventType: s
							} = t.payload;
							return v(e, n, r, `adGalleryItemImpression${s}`)
						}
						case y.j: {
							const {
								postId: n,
								vendorMetadata: r
							} = t.payload;
							return v(e, n, r, "adUpvote")
						}
						case y.g: {
							const {
								postId: n,
								vendorMetadata: r
							} = t.payload;
							return v(e, n, r, "adDownvote")
						}
						case y.e: {
							const {
								postId: n,
								vendorMetadata: r
							} = t.payload;
							return v(e, n, r, "adCommentSubmitted")
						}
						case y.f: {
							const {
								postId: n,
								vendorMetadata: r
							} = t.payload;
							return v(e, n, r, "adCommentUpvote")
						}
						case y.d: {
							const {
								postId: n,
								vendorMetadata: r
							} = t.payload;
							return v(e, n, r, "adCommentDownvote")
						}
						case y.c: {
							const {
								postId: n,
								vendorMetadata: r
							} = t.payload;
							return v(e, n, r, "adCommentsView")
						}
						default:
							return e
					}
				},
				O = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniqBy.js")),
				_ = n.n(O),
				I = n("./src/reddit/actions/adsSignals.ts"),
				S = n("./src/reddit/actions/economics/predictions/constants.ts"),
				T = n("./src/reddit/actions/eventPosts/constants.ts"),
				w = n("./src/reddit/actions/frontpage/constants.ts"),
				D = n("./src/reddit/actions/linkedPosts/constants.ts"),
				j = n("./src/reddit/actions/multireddit/constants.ts"),
				A = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				C = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				P = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				R = n("./src/reddit/actions/pages/modListing/constants.ts"),
				N = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				x = n("./src/reddit/actions/pages/postCreation.ts"),
				L = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				k = n("./src/reddit/actions/pages/subreddit.ts"),
				U = n("./src/reddit/actions/pages/topic.ts"),
				M = n("./src/reddit/actions/profileConversations.ts"),
				B = n("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				F = n("./src/lib/makeActionCreator/index.ts"),
				G = (n("./src/config.ts"), n("./src/lib/constants/index.ts"));
			n("./src/lib/makeApiRequest/index.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(F.a)("RECOMMENDED_POSTS_LOADED"), Object(F.a)("RECOMMENDED_POSTS_FAILED");
			var q = n("./src/reddit/actions/session.ts"),
				H = n("./src/reddit/actions/subreddit.ts"),
				Q = n("./src/reddit/actions/subreddit/constants.ts"),
				W = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				V = n("./src/reddit/actions/pages/profilePosts.ts");
			const K = {
				adsSeenCount: 0,
				totalPostsSeenCount: 0,
				sessionStartTime: ""
			};
			var $ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case I.a:
						case q.a:
						case q.c:
						case q.d:
							return {
								...K, sessionStartTime: (new Date).toISOString()
							};
						case P.b:
						case P.f:
						case x.PAGE_LOADED:
						case D.b:
						case A.b:
						case R.e:
						case R.h:
						case W.b:
						case W.e:
						case L.e:
						case L.b:
						case V.PROFILE_POSTS_LOADED:
						case V.MORE_POSTS_LOADED:
						case k.SUBREDDIT_LOADED:
						case w.c:
						case N.b:
						case C.b:
						case j.r:
						case w.g:
						case M.e:
						case "RECOMMENDED_POSTS_LOADED":
						case Q.o:
						case H.i:
						case B.b:
						case U.TOPIC_DATA_LOADED:
						case U.MORE_POSTS_LOADED:
						case T.c:
						case T.d:
						case S.n:
						case Q.w: {
							const r = (null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || [],
								s = _()(Object.values(r), "postId"),
								a = s.length,
								c = s.filter(e => e.isSponsored).length;
							return {
								...e,
								adsSeenCount: e.adsSeenCount + c,
								totalPostsSeenCount: e.totalPostsSeenCount + a
							}
						}
						default:
							return e
					}
				},
				Y = n("./src/reddit/actions/apiRequestState.ts");
			const X = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Y.d:
						case Y.a:
						case Y.b: {
							const n = t.payload;
							return {
								...e,
								[n.apiRequestId]: n
							}
						}
						case Y.c: {
							const n = t.payload;
							if (!(n in e)) return e;
							if (1 === Object.keys(e).length) return X;
							const r = {
								...e
							};
							return delete r[n], r
						}
						default:
							return e
					}
				},
				J = n("./node_modules/redux/es/redux.js"),
				Z = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z.a:
						return t.payload && t.payload.error || null;
					case Z.b:
					case Z.c:
						return null;
					default:
						return e
				}
			};
			var te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z.c:
							return !0;
						case Z.a:
						case Z.b:
							return !1;
						default:
							return e
					}
				},
				ne = Object(J.c)({
					error: ee,
					pending: te
				});
			const re = {};
			var se = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z.d:
						case Z.b: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case Z.c:
						case Z.a:
						default:
							return e
					}
				},
				ae = Object(J.c)({
					api: ne,
					badges: se
				});
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.a:
							return t.payload;
						default:
							return e
					}
				},
				oe = n("./node_modules/icepick/icepick.js"),
				ie = n("./node_modules/lodash/mergeWith.js"),
				de = n.n(ie),
				le = n("./src/reddit/actions/comment/constants.ts"),
				ue = n("./src/reddit/actions/comment/websocket/constants.ts"),
				pe = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				fe = n("./src/reddit/actions/modQueue/constants.ts"),
				he = n("./src/reddit/actions/pages/constants.ts"),
				be = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				ye = n("./src/reddit/actions/pages/search/index.ts"),
				ge = n("./src/reddit/actions/userFlair/constants.ts"),
				me = n("./src/reddit/models/User/index.ts");
			const ve = {};
			var Ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ue.b:
					case ue.c: {
						const n = t.payload,
							{
								authorFlair: r
							} = n;
						if (r) {
							return de()({
								...e
							}, r, (e, t, n) => {
								if ("richtext" === n) return t
							})
						}
						return e
					}
					case be.c:
					case be.i:
					case be.e:
					case be.g:
					case ye.c: {
						const {
							authorFlair: n
						} = t.payload;
						if (n) {
							return Object(oe.merge)(e, n)
						}
						return e
					}
					case le.y:
					case k.SUBREDDIT_LOADED:
					case he.f:
					case W.b:
					case W.e:
					case V.PROFILE_POSTS_LOADED:
					case V.MORE_POSTS_LOADED:
					case M.e:
					case H.i:
						return Oe(e, t.payload);
					case fe.i:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A:
						return Oe(e, t.payload.response);
					case ge.r: {
						const {
							subredditId: n,
							userName: r,
							applied: s,
							displaySettings: {
								isUserEnabled: a
							}
						} = t.payload;
						return Object(oe.setIn)(e, [n, r], a ? s : null)
					}
					case pe.h:
					case pe.b: {
						const {
							subredditId: n,
							userName: r,
							applied: s
						} = t.payload;
						return e[n] && e[n][r] ? Object(oe.setIn)(e, [n, r], s) : e
					}
					case ge.a: {
						const {
							subredditId: n,
							userName: r,
							applied: s,
							displaySettings: {
								isEnabled: a
							}
						} = t.payload;
						return Object(oe.setIn)(e, [n, r], a ? s : null)
					}
					default:
						return e
				}
			};
			const Oe = (e, t) => {
				let {
					account: n,
					authorFlair: r,
					userFlair: s
				} = t;
				const a = Object(oe.merge)(e, r);
				if (!s || !n) return a;
				const c = Object.keys(s)[0];
				if (!c) return a;
				const o = s[c],
					i = Object(me.e)(n),
					d = o.applied,
					l = o.displaySettings && o.displaySettings.isUserEnabled;
				return i && d && l ? Object(oe.merge)(a, {
					[c]: {
						[i]: d
					}
				}) : a
			};
			var _e = Object(J.c)({
					inContext: ce,
					models: Ee
				}),
				Ie = n("./src/reddit/actions/gold/constants.ts");
			const Se = {};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.d: {
							const {
								disabled: n,
								subredditOrProfileId: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : e
						}
						default:
							return e
					}
				},
				we = n("./src/reddit/actions/reactionAwards/constants.ts");
			const De = {};
			var je = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case we.b: {
						const {
							subredditId: n,
							availableAwards: r = []
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const Ae = {},
				Ce = (e, t, n) => ({
					...e,
					[t]: n
				});
			var Pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case we.e:
						case we.h: {
							const {
								awardId: n,
								commentId: r
							} = t.payload;
							return {
								...e,
								[r]: {
									...Ce(e[r] || {}, n, !0)
								}
							}
						}
						case we.f:
						case we.d:
						case we.i:
						case we.g: {
							const {
								awardId: n,
								commentId: r
							} = t.payload;
							return {
								...e,
								[r]: {
									...Ce(e[r] || {}, n, !1)
								}
							}
						}
						default:
							return e
					}
				},
				Re = Object(J.c)({
					availability: je,
					pending: Pe
				});
			var Ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.h:
					case Ie.i:
						return null;
					case Ie.g:
						return t.payload;
					default:
						return e
				}
			};
			var xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b:
						case Ie.i:
						case Ie.g:
							return !1;
						case Ie.h:
							return !0;
						default:
							return e
					}
				},
				Le = Object(J.c)({
					error: Ne,
					pending: xe
				}),
				ke = Object(J.c)({
					api: Le
				});
			var Ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.G:
					case Ie.F:
						return null;
					case Ie.E:
						return t.payload;
					default:
						return e
				}
			};
			const Me = {};
			var Be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.G: {
							const {
								subredditOrProfileId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ie.d:
						case Ie.F:
						case Ie.K:
						case Ie.E: {
							const {
								subredditOrProfileId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Fe = Object(J.c)({
					error: Ue,
					pending: Be
				});
			const Ge = {};
			var qe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.K: {
						const {
							awards: n,
							subredditOrProfileId: r
						} = t.payload, s = {};
						return n.forEach(e => {
							s[e.id] = e.isEnabled
						}), {
							...e,
							[r]: s
						}
					}
					case Ie.l: {
						const {
							awardId: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								[n]: !1
							}
						}
					}
					case Ie.o: {
						const {
							awardId: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const He = {};
			var Qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.F: {
							const {
								awards: n,
								subredditOrProfileId: r
							} = t.payload, s = n.map(e => e.id);
							return {
								...e,
								[r]: s
							}
						}
						case Ie.i: {
							const {
								award: n,
								subredditId: r
							} = t.payload;
							if (n && n.id) {
								if (!e[r]) return {
									...e,
									[r]: [n.id]
								};
								if (-1 === e[r].indexOf(n.id)) return {
									...e,
									[r]: [n.id, ...e[r]]
								}
							}
							return e
						}
						default:
							return e
					}
				},
				We = Object(J.c)({
					api: Fe,
					availability: qe,
					order: Qe
				}),
				Ve = n("./node_modules/lodash/merge.js"),
				Ke = n.n(Ve);
			const $e = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const n = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${n}`
			};
			var Ye = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : $e(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : $e(e.endsAt)), e),
				Xe = n("./src/reddit/models/Gold/Award.ts"),
				ze = n("./src/reddit/actions/discoveryUnit.ts"),
				Je = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Ze = n("./src/reddit/actions/search.ts");
			const et = Xe.o,
				tt = (e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				})([Ye]),
				nt = (e, t) => {
					const n = t.reduce((e, t) => (e[t.id] = tt(t), e), {});
					return Ke()({
						...e
					}, n)
				};
			var rt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case we.b: {
						const {
							availableAwards: n = []
						} = t.payload;
						return nt({
							...e
						}, n)
					}
					case Ie.F: {
						const {
							awards: n
						} = t.payload;
						return nt(e, n)
					}
					case Ie.K: {
						const n = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...tt(t),
							isEnabled: !0
						}, e), {});
						return Ke()({
							...e
						}, n)
					}
					case Ie.b: {
						const {
							awards: n
						} = t.payload, r = n.reduce((e, t) => (e[t.award.id] = tt(t.award), e), {});
						return Ke()({
							...e
						}, r)
					}
					case Ie.i: {
						const {
							award: n
						} = t.payload;
						return n && n.id ? e[n.id] ? Ke()({
							...e
						}, {
							[n.id]: tt(n)
						}) : {
							...e,
							[n.id]: tt(n)
						} : e
					}
					case Ie.cb: {
						const {
							awardId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: {
								...e[n],
								isEnabled: !1
							}
						} : e
					}
					case he.b:
					case le.y:
					case ue.b:
					case P.b:
					case P.f:
					case x.PAGE_LOADED:
					case ze.e:
					case w.g:
					case R.e:
					case R.h:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A:
					case j.r:
					case he.f:
					case w.c:
					case N.b:
					case ye.c:
					case W.b:
					case W.e:
					case M.b:
					case M.e:
					case L.b:
					case L.e:
					case B.b:
					case V.MORE_POSTS_LOADED:
					case V.PROFILE_POSTS_LOADED:
					case be.c:
					case be.e:
					case be.i:
					case be.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ze.e:
					case H.i:
					case k.SUBREDDIT_LOADED: {
						const n = {},
							r = t.payload.posts || [],
							s = t.payload.comments || [];
						for (const e in r) {
							const t = r[e].allAwardings || [];
							for (const e of t) n[e.id] = tt(Object(Xe.j)(e))
						}
						for (const e in s) {
							const t = s[e],
								{
									associatedAward: r,
									allAwardings: a = []
								} = t;
							for (const e of a) n[e.id] = tt(Object(Xe.j)(e));
							r && (n[r.id] = tt(r))
						}
						return Object.keys(n).forEach(t => {
							var r;
							0 === (null === (r = e[t]) || void 0 === r ? void 0 : r.coinPrice) && delete n[t]
						}), Ke()({
							...e
						}, n)
					}
					case Ie.rb: {
						const n = {},
							{
								topAwardedPosts: r
							} = t.payload;
						return r.map(e => {
							const {
								post: t
							} = e, r = t.awardings || [];
							for (const s of r) {
								const e = s.award;
								n[e.id] = e
							}
						}), Ke()({
							...e
						}, n)
					}
					case Je.s: {
						const {
							freeAwardEvent: r
						} = t.payload;
						return nt(e, (null === (n = null == r ? void 0 : r.freeAwards) || void 0 === n ? void 0 : n.awards) || [])
					}
					case Je.h: {
						const {
							awards: n
						} = t.payload;
						return nt(e, n || [])
					}
					default:
						return e
				}
			};
			const st = {};
			var at = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.c: {
							const {
								subredditOrProfileId: n,
								thingId: r
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									[r]: !0
								}
							}
						}
						case Ie.b:
						case Ie.a: {
							const {
								subredditOrProfileId: n,
								thingId: r
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									[r]: !1
								}
							}
						}
						default:
							return e
					}
				},
				ct = Object(J.c)({
					pending: at
				});
			const ot = {};
			var it = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.b: {
							const {
								awards: n,
								subredditOrProfileId: r,
								thingId: s
							} = t.payload, a = n.map(e => {
								let {
									award: t,
									total: n
								} = e;
								return {
									award: {
										id: t.id
									},
									total: n
								}
							});
							return {
								...e,
								[r]: {
									...e[r],
									[s]: a
								}
							}
						}
						default:
							return e
					}
				},
				dt = Object(J.c)({
					api: ct,
					order: it
				});
			const lt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.b: {
							const {
								tags: n,
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				pt = Object(J.c)({
					order: ut
				}),
				ft = Object(J.c)({
					blacklist: Te,
					create: ke,
					manageable: We,
					models: rt,
					sortedUsable: dt,
					tags: pt,
					chatReactions: Re
				}),
				ht = n("./src/reddit/actions/badge.ts");
			const bt = {};
			var yt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ht.d:
					case ht.e: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case ht.c: {
						const {
							subredditId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const gt = {};
			var mt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ht.d: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ht.e:
						case ht.c: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				vt = Object(J.c)({
					error: yt,
					pending: mt
				});
			const Et = {};
			var Ot = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ht.g:
					case ht.h: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case ht.f: {
						const {
							subredditId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const _t = {};
			var It = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ht.g: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ht.h:
						case ht.f: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				St = Object(J.c)({
					error: Ot,
					pending: It
				}),
				Tt = Object(J.c)({
					subreddit: vt,
					user: St
				});
			const wt = {};
			var Dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.i:
						case ht.e:
						case ht.h:
						case u.d: {
							const {
								badges: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				jt = Object(J.c)({
					api: Tt,
					models: Dt
				}),
				At = n("./src/reddit/actions/blockedRedditors.ts");
			const Ct = {
				message: ""
			};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case At.c:
					case At.d:
						return e;
					case At.b:
						return t.payload;
					default:
						return e
				}
			};
			var Rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case At.d:
							return !0;
						case At.c:
						case At.b:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(J.c)({
					error: Pt,
					pending: Rt
				});
			const xt = {
				ids: []
			};
			var Lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case At.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case At.e:
							const n = e.ids.slice();
							return n.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: n
							};
						case At.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				kt = Object(J.c)({
					api: Nt,
					list: Lt
				}),
				Ut = n("./src/reddit/actions/userBlocks.ts");
			const Mt = {};
			var Bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ut.f:
					case Ut.e: {
						const {
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Ut.d: {
						const {
							userId: n,
							type: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Ft = {};
			var Gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ut.f: {
							const {
								userId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ut.e:
						case Ut.d: {
							const {
								userId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				qt = Object(J.c)({
					error: Bt,
					pending: Gt
				}),
				Ht = Object(J.c)({
					api: qt
				});
			const Qt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var Wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case k.SUBREDDIT_PENDING:
						case N.c:
						case w.d:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Vt = n("./src/lib/activeUserCountByLiveChatId/reducers/index.ts"),
				Kt = n("./src/reddit/actions/chat/init.ts");
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kt.a:
							return !0;
						default:
							return e
					}
				},
				Yt = n("./src/reddit/actions/chat/liveChatTooltipShowState.ts");
			const Xt = n("./src/reddit/constants/chat.ts").b.NEVER_SHOWN;
			var zt, Jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yt.a:
							return t.payload;
						default:
							return e
					}
				},
				Zt = (n("./src/chat/actions/message/unreadCount.ts"), n("./src/chat/endpoints/sendbird/index.ts"), n("./src/reddit/actions/tabBadging.ts"));
			n("./src/reddit/selectors/chat.ts"), n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(zt || (zt = {}));
			const {
				SYNC: en,
				REQUEST_FAILED: tn,
				REQUEST_PENDING: nn,
				REQUEST_SUCCESS: rn
			} = zt;
			Object(F.a)(en), Object(F.a)(tn), Object(F.a)(nn), Object(F.a)(rn);
			G.pb;
			const sn = {
				apiError: null
			};
			var an = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zt.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...sn,
							apiError: e
						}
					}
					case zt.REQUEST_SUCCESS:
					case zt.REQUEST_PENDING:
						return sn;
					default:
						return e
				}
			};
			var cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zt.REQUEST_PENDING:
							return !0;
						case zt.REQUEST_FAILED:
						case zt.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				on = Object(J.c)({
					error: an,
					pending: cn
				});
			const dn = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var ln = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zt.SYNC:
						case zt.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				un = Object(J.c)({
					api: on,
					count: ln
				}),
				pn = Object(J.c)({
					isInited: $t,
					unread: un,
					liveChatTooltipShowState: Jt,
					activeUserCountByLiveChatId: Vt.a
				}),
				fn = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			var hn = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fn.a:
							return !1;
						case fn.b:
							return !0;
						default:
							return e
					}
				},
				bn = n("./src/reddit/actions/communityFlairs/constants.ts");
			const yn = {};
			var gn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bn.a: {
							const {
								models: n,
								sortedKeys: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									sortedKeys: r,
									models: n
								}
							}
						}
						default:
							return e
					}
				},
				mn = n("./src/reddit/actions/connection/constants.ts");
			const vn = {
				showBanner: !1,
				online: !0
			};
			var En = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mn.a:
							return {
								online: !1, showBanner: !0
							};
						case mn.b:
							return {
								online: !0, showBanner: !0
							};
						case mn.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				On = n("./src/lib/omitKey/index.ts"),
				_n = n("./src/reddit/actions/contentControls/constants.ts");
			const In = {};
			var Sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _n.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case _n.c:
					case _n.b: {
						const {
							subredditName: n
						} = t.payload;
						return Object(On.a)(e, n)
					}
					default:
						return e
				}
			};
			const Tn = {};
			var wn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _n.c:
						case _n.a:
						case _n.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === _n.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Dn = Object(J.c)({
					error: Sn,
					pending: wn
				}),
				jn = Object(J.c)({
					fetch: Dn
				}),
				An = n("./src/lib/safeGet/index.ts");
			const Cn = {};
			var Pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _n.b: {
							const {
								subredditName: n,
								postRequirements: r,
								hatefulContentFilters: s
							} = t.payload;
							return {
								...e,
								[n]: {
									hatefulContentFilters: s,
									postRequirements: r
								}
							}
						}
						case _n.d: {
							const {
								subredditName: n,
								partialUpdates: r
							} = t.payload, s = Object(An.a)(e, n);
							return s ? {
								...e,
								[n]: {
									hatefulContentFilters: {
										...s.hatefulContentFilters,
										...r.hatefulContentFilters || {}
									},
									postRequirements: {
										...s.postRequirements,
										...r.postRequirements || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				Rn = Object(J.c)({
					api: jn,
					models: Pn
				}),
				Nn = n("./src/reddit/actions/contentGate.ts"),
				xn = n("./src/reddit/actions/preferences.ts");
			const Ln = {};
			var kn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nn.b: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(An.a)(e, n)) {
								const t = {
									[n]: {
										goldSubreddit: !0
									}
								};
								return de()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[n]: {
									goldSubreddit: !0
								}
							}
						}
						return e
					}
					case Nn.c: {
						const {
							subredditDescription: n,
							subredditName: r,
							isContributorRequestsDisabled: s,
							isContributorRequestTimestamp: a,
							subredditId: c
						} = t.payload;
						if (r) {
							if (Object(An.a)(e, r)) {
								const t = {
									[r]: {
										privateSubreddit: !0,
										subredditDescription: n,
										isContributorRequestsDisabled: s,
										isContributorRequestTimestamp: a,
										subredditId: c
									}
								};
								return de()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[r]: {
									privateSubreddit: !0,
									subredditDescription: n,
									isContributorRequestsDisabled: s,
									isContributorRequestTimestamp: a,
									subredditId: c
								}
							}
						}
						return e
					}
					case Nn.h: {
						const {
							subredditName: n,
							quarantineRequiresEmail: r,
							quarantineMessage: s,
							quarantineMessageHtml: a,
							quarantineMessageRTJson: c
						} = t.payload;
						return n ? {
							...e,
							[n]: {
								...Object(An.a)(e, n) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: r,
								quarantineMessage: s,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case Nn.a: {
						const {
							interstitialWarningMessage: n,
							interstitialWarningMessageHtml: r,
							interstitialWarningMessageRTJson: s,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(An.a)(e, a) || {},
								interstitialWarningMessage: n,
								interstitialWarningMessageHtml: r,
								interstitialWarningMessageRTJson: s
							}
						} : e
					}
					case Nn.l: {
						const {
							subredditName: n,
							banMessage: r
						} = t.payload;
						if (n) {
							if (Object(An.a)(e, n)) {
								const t = {
									[n]: {
										subredditBanned: !0,
										subredditBanMessage: r
									}
								};
								return de()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[n]: {
									subredditBanned: !0,
									subredditBanMessage: r
								}
							}
						}
						return e
					}
					case Nn.m: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(An.a)(e, n)) {
								const t = {
									[n]: {
										subredditBlockedForLegalReason: !0
									}
								};
								return de()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[n]: {
									subredditBlockedForLegalReason: !0
								}
							}
						}
						return e
					}
					case Nn.n: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(An.a)(e, n)) {
								const t = {
									[n]: {
										subredditDoesNotExist: !0
									}
								};
								return de()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[n]: {
									subredditDoesNotExist: !0
								}
							}
						}
						return e
					}
					case Nn.d:
					case Nn.e:
					case Nn.f:
					case Nn.g: {
						const {
							profileName: n
						} = t.payload, r = G.qc + n.toLocaleLowerCase(), s = Object(An.a)(e, r) || {}, a = {
							profileDeleted: t.type === Nn.e,
							profileDoesNotExist: t.type === Nn.f,
							profileSuspended: t.type === Nn.g,
							profileBlockedForLegalReason: t.type === Nn.d
						};
						return {
							...e,
							[r]: {
								...s,
								...a
							}
						}
					}
					case xn.q:
						const {
							subredditId: n, prefs: r
						} = t.payload;
						if (r.isContributorRequestTimestamp || 0 === r.isContributorRequestTimestamp)
							for (const t in e)
								if (e[t].subredditId === n) {
									const n = e[t];
									return {
										...e,
										[t]: {
											...n,
											isContributorRequestTimestamp: r.isContributorRequestTimestamp
										}
									}
								} return e;
					default:
						return e
				}
			};
			const Un = {};
			var Mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case le.y:
						case he.b:
						case he.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Bn = Object(J.c)({
					models: Mn
				}),
				Fn = n("./src/reddit/actions/cooldownTime.ts");
			var Gn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fn.b:
					case Fn.c:
						return null;
					case Fn.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var qn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fn.b:
							return !0;
						case Fn.a:
						case Fn.c:
							return !1;
						default:
							return e
					}
				},
				Hn = Object(J.c)({
					error: Gn,
					pending: qn
				});
			var Qn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fn.d: {
							const {
								expiresAt: n
							} = t.payload;
							return "number" == typeof n && n !== e ? n : e
						}
						default:
							return e
					}
				},
				Wn = Object(J.c)({
					api: Hn,
					expiresAt: Qn
				}),
				Vn = n("./src/reddit/actions/postCollection/constants.ts");
			var Kn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
					case Vn.d:
					case Vn.c:
					case Vn.s:
					case Vn.r:
						return null;
					case Vn.b:
					case Vn.n:
						return t.payload;
					default:
						return e
				}
			};
			var $n = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vn.c:
						case Vn.r:
							return !0;
						case Vn.d:
						case Vn.b:
						case Vn.s:
						case Vn.n:
							return !1;
						default:
							return e
					}
				},
				Yn = Object(J.c)({
					error: Kn,
					pending: $n
				}),
				Xn = Object(J.c)({
					createOrUpdate: Yn
				}),
				zn = n("./src/reddit/actions/postDraft.ts");
			const Jn = {};
			var Zn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zn.c:
					case zn.b: {
						const {
							draftId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case zn.a: {
						const {
							apiError: n,
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const er = {};
			var tr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : er,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zn.b: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case zn.c:
						case zn.a: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				nr = Object(J.c)({
					error: Zn,
					pending: tr
				});
			var rr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zn.d:
						return t.payload;
					case zn.f:
					case zn.e:
						return null;
					default:
						return e
				}
			};
			var sr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zn.f:
							return !0;
						case zn.e:
						case zn.d:
							return !1;
						default:
							return e
					}
				},
				ar = Object(J.c)({
					error: rr,
					pending: sr
				});
			const cr = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var or = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zn.l:
					case zn.j:
						return cr;
					case zn.i: {
						const e = t.payload;
						return {
							...cr,
							apiError: e
						}
					}
					case zn.m: {
						const e = t.payload;
						return {
							...cr,
							validationError: e
						}
					}
					case zn.k: {
						const e = t.payload;
						return {
							...cr,
							submitValidationError: e
						}
					}
					case zn.h:
						return {
							...cr, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var ir = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zn.j:
							return !0;
						case zn.l:
						case zn.i:
						case zn.m:
						case zn.k:
						case zn.h:
							return !1;
						default:
							return e
					}
				},
				dr = Object(J.c)({
					error: or,
					pending: ir
				}),
				lr = Object(J.c)({
					deleteDraft: nr,
					listing: ar,
					save: dr
				}),
				ur = n("./src/reddit/actions/postCreation/constants.ts");
			const pr = {};
			var fr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.G: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ur.p: {
							const n = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				hr = Object(J.c)({
					pending: fr
				});
			var br = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.u:
					case ur.v:
					case ur.d:
					case ur.e:
					case ur.f:
					case ur.i:
					case ur.j:
					case ur.n:
					case ur.O:
						return null;
					case ur.t:
						return t.payload;
					default:
						return e
				}
			};
			var yr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.u:
							return !0;
						case ur.v:
						case ur.t:
							return !1;
						default:
							return e
					}
				},
				gr = Object(J.c)({
					error: br,
					pending: yr
				}),
				mr = Object(J.c)({
					converting: hr,
					mediaUpload: gr
				});
			const vr = {};
			var Er = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case x.PAGE_LOADED:
					case x.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case x.PAGE_FAILED: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Or = {};
			var _r = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Or,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case x.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case x.PAGE_LOADED: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const Ir = {};
			var Sr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ir,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x.PAGE_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case x.PAGE_LOADED:
						case x.PAGE_FAILED: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Tr = Object(J.c)({
					error: Er,
					fetched: _r,
					pending: Sr
				}),
				wr = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const Dr = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.P:
					case wr.h:
					case wr.k:
					case wr.b:
					case wr.d:
					case ur.w:
					case ur.c:
					case ur.d:
					case ur.e:
					case ur.f:
					case ur.i:
					case ur.j:
					case ur.n:
					case ur.O:
					case ur.E:
						return Dr;
					case ur.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? Dr : e
					}
					case ur.o: {
						const e = t.payload;
						return {
							...Dr,
							apiError: e
						}
					}
					case ur.db: {
						const e = t.payload;
						return {
							...Dr,
							validationError: e
						}
					}
					case ur.K:
					case ur.J: {
						const e = t.payload;
						return {
							...Dr,
							submitValidationError: e
						}
					}
					case ur.a:
						return {
							...Dr, needsCaptcha: !0
						};
					case ur.y:
						return {
							...Dr, pollError: t.payload
						};
					default:
						return e
				}
			};
			var Ar = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.w:
							return !0;
						case ur.P:
						case wr.h:
						case ur.o:
						case ur.db:
						case ur.J:
						case ur.K:
						case ur.y:
						case ur.a:
							return !1;
						default:
							return e
					}
				},
				Cr = Object(J.c)({
					error: jr,
					pending: Ar
				});
			var Pr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.x:
					case ur.H:
						return null;
					case ur.m:
						return t.payload;
					default:
						return e
				}
			};
			var Rr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.x:
							return !0;
						case ur.m:
						case ur.l:
							return !1;
						default:
							return e
					}
				},
				Nr = Object(J.c)({
					error: Pr,
					pending: Rr
				}),
				xr = Object(J.c)({
					submit: Cr,
					update: Nr
				});
			var Lr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.O:
					case ur.M:
					case ur.N:
						return null;
					default:
						return e
				}
			};
			var kr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.N:
							return !0;
						case ur.M:
						case ur.O:
							return !1;
						default:
							return e
					}
				},
				Ur = Object(J.c)({
					error: Lr,
					pending: kr
				}),
				Mr = Object(J.c)({
					change: Ur
				}),
				Br = Object(J.c)({
					collection: Xn,
					draft: lr,
					editor: mr,
					page: Tr,
					post: xr,
					subreddit: Mr
				}),
				Fr = n("./node_modules/lodash/omit.js"),
				Gr = n.n(Fr),
				qr = n("./src/reddit/actions/pages/postDraft.ts");
			const Hr = {};
			var Qr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zn.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Hr
					}
					case zn.c: {
						const n = e,
							{
								draftId: r
							} = t.payload;
						return Gr()(n, r)
					}
					case ur.P: {
						const {
							draftId: n
						} = t.payload;
						return n ? Gr()(e, n) : e
					}
					case qr.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Wr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Vr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				Kr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var $r = n("./src/reddit/models/PostDraft/index.ts");
			var Yr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.d:
							return t.payload || "";
						case ur.E:
							return "";
						case l.b: {
							if (Wr(t) !== G.Sb.POST_CREATION) return "";
							const n = Vr(t);
							return n && n.url ? n.url || "" : e
						}
						case zn.g: {
							const e = t.payload;
							return e.kind === $r.b.Link && e.body || ""
						}
						case wr.b:
						case wr.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Xr = n("./src/reddit/models/PostCreationForm/index.ts"),
				zr = n("./src/reddit/models/ScheduledPost/index.ts");
			const Jr = e => e ? e.replace(/\+/g, " ") : "";
			var Zr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.e:
						return t.payload || "";
					case ur.E:
					case ur.I:
						return "";
					case ur.Q:
						return t.payload.editorMode === Xr.i.MARKDOWN ? t.payload.content || "" : e;
					case l.b: {
						if (Wr(t) !== G.Sb.POST_CREATION) return "";
						const n = Vr(t);
						return n && n.text ? Jr(n.text) : e
					}
					case zn.g: {
						const e = t.payload;
						return e.kind === $r.b.Markdown && e.body || ""
					}
					case wr.b:
					case wr.n: {
						const e = t.payload;
						return e.contentType === zr.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const es = {
				items: [],
				selectedKey: null
			};
			var ts = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : es,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.f:
							return t.payload || es;
						case ur.E:
							return es;
						case l.b:
							return Wr(t) !== G.Sb.POST_CREATION ? es : e;
						case zn.g:
							return es;
						case wr.b:
						case wr.n:
							return es;
						default:
							return e
					}
				},
				ns = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				rs = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				ss = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const as = ns.a.createInitial;
			var cs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : as(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case ur.E:
							return ns.a.createInitial();
						case ur.Q: {
							const n = t.payload;
							return n.editorMode === Xr.i.RICH_TEXT && n.editorKey === Xr.h.POST_CREATION ? ns.a.createInitial(n.content) : e
						}
						case l.b:
							return Wr(t) !== G.Sb.POST_CREATION ? ns.a.createInitial() : e;
						case zn.g: {
							const e = t.payload;
							return e.kind === $r.b.RichText ? ns.a.createInitial(e.body) : ns.a.createInitial()
						}
						case wr.b:
						case wr.n: {
							const e = t.payload,
								n = Object(rs.c)(e.mediaAssets);
							return ns.a.createInitial(e.contentType === zr.a.RTJSON ? Object(ss.b)(e.body) : void 0, n || void 0)
						}
						default:
							return e
					}
				},
				os = Object(J.c)({
					link: Yr,
					markdown: Zr,
					media: ts,
					rte: cs
				});
			var is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.b:
							return t.payload || null;
						case ur.E:
						case zn.g:
						case wr.b:
						case wr.n:
						case ur.O:
							return null;
						case l.b:
							return Wr(t) === G.Sb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				ds = n("./src/reddit/selectors/scheduledPosts/index.ts");
			var ls = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.c:
						return t.payload || null;
					case wr.b:
					case wr.n: {
						const e = t.payload;
						return Object(ds.n)({
							scheduledPost: e
						}) || null
					}
					case ur.E:
						return null;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION ? e : null;
					case zn.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var us = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.q:
						return t.payload.type || null;
					case wr.b:
					case wr.n:
					case ur.i:
					case ur.E:
					case l.b:
						return null;
					default:
						return e
				}
			};
			var ps = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.S:
						return t.payload || !1;
					case wr.b:
					case wr.n:
						return "CHAT" === t.payload.discussionType;
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case wr.b:
					case wr.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var hs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.U:
						return t.payload || !1;
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isNSFW || !1;
					case wr.b:
					case wr.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var bs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.V:
						return t.payload || !1;
					case ur.E:
						return !1;
					case ur.O: {
						const {
							name: n
						} = t.payload;
						return !!n && e
					}
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isOriginalContent || !1;
					case wr.b:
					case wr.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.W:
						return t.payload || !1;
					case wr.b:
					case wr.n:
						return !!t.payload.poll;
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					default:
						return e
				}
			};
			var gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case wr.b:
					case wr.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var ms = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wr.b:
					case wr.n:
					case ur.E:
						return !1;
					case zn.n:
						return t.payload;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var vs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.X:
						return t.payload || !1;
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isSpoiler || !1;
					case wr.b:
					case wr.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var Es = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case l.b:
					case ur.i:
					case ur.q:
					case ur.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var Os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case l.b:
					case ur.i:
					case ur.q:
					case ur.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var _s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.N:
						case ur.O:
							return t.payload;
						case ur.M:
						case l.b:
							return null;
						default:
							return e
					}
				},
				Is = n("./src/reddit/actions/polls.ts");
			var Ss = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Is.a:
							return {
								...t.payload
							};
						case wr.b:
						case wr.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case i.h:
						case ur.E:
							return null;
						case l.b:
							return Wr(t) !== G.Sb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				Ts = n("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				ws = n("./src/reddit/helpers/scheduledPosts/index.ts");
			var Ds = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r, s, a;
				switch (t.type) {
					case ur.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case ur.E:
					case zn.g:
					case ur.O:
						return null;
					case l.b:
						if (Wr(t) === G.Sb.POST_CREATION) {
							const c = null === (a = (null !== (s = null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.match.queryParams) && void 0 !== s ? s : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(zr.n)(c)) {
								const t = Object(Ts.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...Ts.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(Ts.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case wr.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case wr.b: {
						const e = t.payload;
						return {
							...Object(ws.h)(e)
						}
					}
					default:
						return e
				}
			};
			var js = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: n,
					payload: r
				} = t;
				switch (n) {
					case ur.Y:
						return r || !1;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case wr.b:
					case wr.n:
					case zn.g:
						return !1;
					default:
						return e
				}
			};
			var As = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.g:
						return t.payload || "";
					case l.b:
						return Wr(t) !== G.Sb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						return Wr(t) !== G.Sb.POST_CREATION ? null : e;
					case ur.E:
						return null;
					case wr.b:
					case wr.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Ps = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.E:
						return !0;
					case ur.Z:
						return t.payload;
					case l.b:
						return Wr(t) !== G.Sb.POST_CREATION || e;
					case zn.g:
						return t.payload.sendReplies;
					case wr.b:
					case wr.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Rs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case ur.E:
					case zn.g:
					case ur.O:
						return null;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION ? e : null;
					case wr.b:
					case wr.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Ns = G.bc.POST;
			var xs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ns,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.E:
						return Ns;
					case ur.r:
						return G.bc.CROSSPOST;
					case ur.i:
						return t.payload.submissionType || Ns;
					case l.b: {
						if (Wr(t) !== G.Sb.POST_CREATION) return Ns;
						const n = Vr(t);
						if (!n) return e;
						const {
							title: r = "",
							url: s,
							text: a = "",
							media: c = !1,
							selftext: o = !1,
							type: i = ""
						} = n, d = r && !a && !o;
						return c ? G.bc.MEDIA : void 0 !== s || d ? G.bc.LINK_ONLY : a || o ? G.bc.POST : i === G.Cb ? G.bc.POLL : e
					}
					case zn.g: {
						const e = t.payload;
						return $r.a[e.kind]
					}
					case wr.b:
					case wr.n: {
						const e = t.payload;
						return e.poll ? G.bc.POLL : e.url ? G.bc.LINK_ONLY : G.bc.POST
					}
					default:
						return e
				}
			};
			var Ls = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.ab: {
						const {
							suggestedSort: e
						} = t.payload;
						return e || null
					}
					case ur.E:
					case zn.g:
					case ur.O:
						return null;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION ? e : null;
					case wr.b:
					case wr.n:
						return t.payload.suggestedCommentSort || null;
					default:
						return e
				}
			};
			const ks = {
				theme: n("./src/reddit/models/Talk/index.ts").a.PERIWINKLE,
				topics: [],
				isUpcoming: !1
			};
			var Us = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ks,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Ms = n("./src/reddit/models/Poll/index.ts");
			const Bs = e => e ? e.replace(/\+/g, " ") : "",
				Fs = e => `Should ${e||"username"} become the top moderator?`,
				Gs = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var qs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.r:
						return t.payload.postTitle || "";
					case ur.j:
						return t.payload || "";
					case ur.D: {
						const {
							title: n
						} = t.payload;
						return e || (n || "")
					}
					case ur.E:
						return "";
					case l.b: {
						if (Wr(t) !== G.Sb.POST_CREATION) return "";
						const n = Vr(t);
						return n && n.title ? Bs(n.title) : e
					}
					case zn.g:
						return t.payload.title;
					case ur.q: {
						const {
							oldType: n,
							type: r
						} = t.payload;
						return r === Ms.a.ReplaceTopMod ? Fs("") : r === Ms.a.Spinoff ? Gs("") : n === Ms.a.ReplaceTopMod || n === Ms.a.Spinoff ? "" : e
					}
					case i.c: {
						const {
							username: e
						} = t.payload;
						return Fs(e)
					}
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return Gs(e)
					}
					case ur.i: {
						const {
							extra: n
						} = t.payload;
						return !n || n.govType !== Ms.a.ReplaceTopMod && n.govType !== Ms.a.Spinoff ? e : ""
					}
					case wr.b:
					case wr.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Hs = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Qs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.cb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Ws = Object(J.c)({
					body: os,
					eventSchedule: is,
					flair: ls,
					govType: us,
					isChatPost: ps,
					isContestMode: fs,
					isNSFW: hs,
					isOC: bs,
					isPostAsMetaMod: gs,
					isPoll: ys,
					isPublicLink: ms,
					isSpoiler: vs,
					newSubreddit: Es,
					newTopMod: Os,
					nextSubreddit: _s,
					polls: Ss,
					postSchedule: Ds,
					postToTwitter: js,
					recaptcha: As,
					scheduledPostId: Cs,
					sendReplies: Ps,
					stickyPosition: Rs,
					submissionType: xs,
					suggestedSort: Ls,
					title: qs,
					tournament: Qs,
					talk: Us
				});
			const Vs = e => e ? e.replace(/\+/g, " ") : "";
			var Ks = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b: {
						if (Wr(t) !== G.Sb.POST_CREATION) return null;
						const n = Vr(t);
						return n && n.text && Vs(n.text) ? Xr.i.MARKDOWN : e
					}
					case ur.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case ur.I:
						return null;
					case ur.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case wr.b:
					case wr.n:
						return t.payload.contentType === zr.a.RTJSON ? Xr.i.RICH_TEXT : Xr.i.MARKDOWN;
					default:
						return e
				}
			};
			const $s = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				Ys = (e, t) => {
					const n = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(Xr.w)(t)
					});
					if (!n.length) return e;
					const r = n.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return {
						...e,
						...r
					}
				};
			var Xs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.c:
					case ur.d:
					case ur.e:
						return e[G.Bb.BODY] ? {
							...e,
							[G.Bb.BODY]: []
						} : e;
					case ur.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return e[G.Bb.BODY] && n ? {
							...e,
							[G.Bb.BODY]: []
						} : e
					}
					case ur.j:
						return e[G.Bb.TITLE] ? {
							...e,
							[G.Bb.TITLE]: []
						} : e;
					case ur.L: {
						const n = t.payload;
						return {
							...e,
							[n]: []
						}
					}
					case ur.n: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: []
						} : $s
					}
					case ur.K:
					case ur.J: {
						const n = t.payload;
						return Ys(e, n)
					}
					case l.b:
						return Wr(t) !== G.Sb.POST_CREATION ? $s : e;
					default:
						return e
				}
			};
			var zs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.b:
					case ur.c:
					case ur.d:
					case ur.e:
					case ur.f:
					case ur.j:
					case ur.i:
					case ur.U:
					case ur.V:
					case ur.X:
					case zn.n:
					case ur.Z:
					case ur.ab:
						return !0;
					case ur.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					case ur.P:
					case wr.h:
						return !1;
					case ur.R:
						return t.payload;
					case l.b:
						return Wr(t) === G.Sb.POST_CREATION && e;
					case ur.E:
					case zn.l:
					case zn.g:
						return !1;
					default:
						return e
				}
			};
			const Js = Xr.r.Post;
			var Zs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Js,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.w:
							return Xr.r.Post;
						case ur.F:
							return t.payload;
						case zn.j:
							return Xr.r.Draft;
						case l.b:
							return Wr(t) !== G.Sb.POST_CREATION ? Js : e;
						default:
							return e
					}
				},
				ea = Object(J.c)({
					editorMode: Ks,
					fieldValidation: Xs,
					isChanged: zs,
					submitMode: Zs
				});
			var ta = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.H:
						return t.payload.editorMode === Xr.i.MARKDOWN ? t.payload.postContent || "" : e;
					case ur.I:
						return "";
					case ur.Q:
						return t.payload.editorMode === Xr.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const na = ns.a.createInitial;
			var ra = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : na(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.I:
							return ns.a.createInitial();
						case ur.H: {
							const n = t.payload;
							return n.editorMode === Xr.i.RICH_TEXT && "object" == typeof n.postContent ? ns.a.createInitial(n.postContent, n.mediaMetadata) : e
						}
						case ur.Q: {
							const n = t.payload;
							return n.editorMode === Xr.i.RICH_TEXT && n.editorKey === Xr.h.POST_EDITING ? ns.a.createInitial(n.content) : e
						}
						default:
							return e
					}
				},
				sa = Object(J.c)({
					markdown: ta,
					rte: ra
				});
			var aa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case ur.I:
							return null;
						default:
							return e
					}
				},
				ca = Object(J.c)({
					draft: sa,
					postId: aa
				});
			var oa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.C:
					case ur.B:
						return !1;
					case ur.z:
						return !0;
					default:
						return e
				}
			};
			var ia = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.z:
						case ur.B:
							return !1;
						case ur.C:
							return !0;
						default:
							return e
					}
				},
				da = Object(J.c)({
					error: oa,
					pending: ia
				});
			var la = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case ur.j:
					case ur.d:
					case ur.e:
					case ur.i:
					case ur.r:
					case zn.g:
						return !0;
					case ur.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					default:
						return e
				}
			};
			const ua = {};
			var pa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ua,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const fa = [];
			var ha = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ba = Object(J.c)({
					api: da,
					isInputChanged: la,
					model: pa,
					order: ha
				}),
				ya = Object(J.c)({
					api: Br,
					drafts: Qr,
					formData: Ws,
					formState: ea,
					postEditing: ca,
					subredditRec: ba
				}),
				ga = n("./src/reddit/actions/dashboard/constants.ts");
			const ma = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var va = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ma,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ga.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ga.d: {
						const n = t.payload,
							r = e.subredditLoaded[n];
						return {
							...e,
							subredditPending: !r,
							subredditLoaded: {
								...e.subredditLoaded,
								[n]: r || !1
							}
						}
					}
					case ga.c: {
						const n = t.payload;
						return {
							...e,
							subredditPending: !1,
							subredditLoaded: {
								...e.subredditLoaded,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			var Ea = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ze.b:
					case ze.c:
						return null;
					case ze.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var Oa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ze.c:
						return !1;
					case ze.b:
						return !0;
					default:
						return e
				}
			};
			var _a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.c:
							return !0;
						case ze.b:
						case ze.a:
							return !1;
						default:
							return e
					}
				},
				Ia = Object(J.c)({
					error: Ea,
					loaded: Oa,
					pending: _a
				}),
				Sa = Object(J.c)({
					list: Ia
				}),
				Ta = n("./node_modules/lodash/isEmpty.js"),
				wa = n.n(Ta);
			const Da = {};
			var ja = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Da,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							return wa()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				Aa = n("./node_modules/lodash/forOwn.js"),
				Ca = n.n(Aa),
				Pa = n("./src/reddit/helpers/name/index.ts");
			const Ra = {};
			var Na = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ra,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							if (wa()(n)) return e;
							const r = {};
							return Ca()(n, e => {
								r[Object(Pa.i)(e.unitName)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				xa = Object(J.c)({
					api: Sa,
					models: ja,
					nameToId: Na
				}),
				La = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const ka = [];
			var Ua = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ka,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case La.a: {
							const {
								subredditId: n
							} = t.payload;
							return [...e, n]
						}
						default:
							return e
					}
				},
				Ma = n("./src/reddit/actions/economics/banners/constants.ts");
			const Ba = {
				dismissedBanners: {}
			};
			var Fa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ba,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ma.c: {
							const n = t.payload;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[n]: {
										...e.dismissedBanners[n],
										pending: !0
									}
								}
							}
						}
						case Ma.d: {
							const {
								subredditId: n,
								data: r
							} = t.payload;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[n]: {
										...e.dismissedBanners[n],
										pending: !1,
										data: r
									}
								}
							}
						}
						case Ma.a:
						case Ma.b: {
							const {
								subredditId: n,
								bannerType: r
							} = t.payload, s = e.dismissedBanners[n] || {}, a = t.type === Ma.a;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[n]: {
										...s,
										data: {
											...s.data,
											[r]: a
										}
									}
								}
							}
						}
						default:
							return e
					}
				},
				Ga = n("./src/reddit/models/Badge/managementPage.ts");
			const qa = {
				badgeType: Ga.a.Cosmetic,
				view: Ga.c.Gallery
			};
			var Ha = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c: {
						const {
							badge: n,
							initialView: r
						} = t.payload;
						return n || r ? {
							...e,
							badgeType: n ? Object(Ga.d)(n.placement) : e.badgeType,
							view: r
						} : e
					}
					case o.b: {
						const n = t.payload;
						return {
							...e,
							badgeType: n
						}
					}
					case o.d: {
						const n = t.payload;
						return {
							...e,
							view: n
						}
					}
					case r.b:
						return qa;
					default:
						return e
				}
			};
			var Qa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.c:
							return {
								badge: t.payload.badge
							};
						case r.b:
							return null;
						default:
							return e
					}
				},
				Wa = n("./src/reddit/actions/economics/powerups/constants.ts");

			function Va(e, t) {
				const {
					name: n,
					emojiIcon: r,
					stickerIcon: s
				} = e;
				return {
					id: n,
					fullId: `emote|${t}|${n}`,
					imageType: r.mimeType,
					emoji: {
						x: r.x,
						y: r.y,
						path: r.url,
						type: r.mimeType
					},
					sticker: {
						x: s.x,
						y: s.y,
						path: s.url,
						type: s.mimeType
					}
				}
			}

			function Ka(e) {
				if (!e) return e;
				const t = {};
				return null == e || e.forEach(e => {
					const {
						id: n,
						name: r,
						emotes: s
					} = e;
					t[n] = {
						id: n,
						name: r,
						emotes: s.map(e => Va(e, n))
					}
				}), t
			}
			const $a = {};

			function Ya(e, t, n) {
				if (!e[t]) return e;
				const r = e[t].findIndex(e => e.title === t);
				return -1 === r ? e : {
					...e,
					[t]: e[t].map((e, s) => s !== r ? e : {
						title: e.title,
						emotes: {
							...e.emotes,
							[n.name]: Va(n, t)
						}
					})
				}
			}
			var Xa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.e: {
						const {
							emotes: n,
							emoteCollections: r
						} = t.payload.products, s = {};
						return n.forEach(e => {
							const t = e.extra && e.extra.assets,
								n = Object.keys(e.collections || {})[0] || e.title,
								a = r[n];
							s[n] || (s[n] = {
								emotes: {},
								position: a ? a.position : 0,
								title: a ? a.title : e.title
							}), t && Object.keys(t).forEach(r => {
								const a = t[r];
								s[n].emotes[r] = {
									id: r,
									emoji: a.emoji,
									extra: {
										rtDescription: e.extra && e.extra.rtDescription
									},
									fullId: `emote|${e.id}|${r}`,
									imageType: a.emoji.type,
									sticker: a.sticker
								}
							})
						}), {
							...e,
							[t.payload.subredditId]: Object.keys(s).map(e => s[e]).sort((e, t) => e.position - t.position)
						}
					}
					case Ie.jb: {
						const {
							customEmojisStatus: n,
							customEmojis: r,
							subredditId: s
						} = t.payload, {
							isEnabled: a
						} = n, {
							mediaPacks: c
						} = r;
						if (a && c) {
							const t = c.map(e => ({
								title: e.name,
								emotes: e.emotes.reduce((t, n) => ({
									...t,
									[n.name]: {
										id: n.name,
										fullId: `emote|${e.id}|${n.name}`,
										imageType: n.emojiIcon.mimeType,
										emoji: {
											x: n.emojiIcon.x,
											y: n.emojiIcon.y,
											path: n.emojiIcon.url,
											type: n.emojiIcon.mimeType
										},
										sticker: {
											x: n.stickerIcon.x,
											y: n.stickerIcon.y,
											path: n.stickerIcon.url,
											type: n.stickerIcon.mimeType
										}
									}
								}), {})
							}));
							return {
								...e,
								[s]: e[s] ? _()([...e[s], ...t], e => {
									let {
										title: t
									} = e;
									return t
								}) : t
							}
						}
						return e
					}
					case Ie.nb: {
						const {
							powerups: n,
							subredditId: r
						} = t.payload;
						if (n && n.mediaPacks) {
							const t = n.mediaPacks.map(e => ({
								title: e.name,
								emotes: e.emotes.reduce((t, n) => ({
									...t,
									[n.name]: {
										id: n.name,
										fullId: `emote|${e.id}|${n.name}`,
										imageType: n.emojiIcon.mimeType,
										emoji: {
											x: n.emojiIcon.x,
											y: n.emojiIcon.y,
											path: n.emojiIcon.url,
											type: n.emojiIcon.mimeType
										},
										sticker: {
											x: n.stickerIcon.x,
											y: n.stickerIcon.y,
											path: n.stickerIcon.url,
											type: n.stickerIcon.mimeType
										}
									}
								}), {})
							}));
							return {
								...e,
								[r]: e[r] ? _()([...e[r], ...t], e => {
									let {
										title: t
									} = e;
									return t
								}) : t
							}
						}
						return e
					}
					case Wa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload;
						return Ya(e, n, r)
					}
					default:
						return e
				}
			};
			const za = {};
			var Ja = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : za,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.e: {
							const n = t.payload.products.giphy.length > 0;
							return {
								...e,
								[t.payload.subredditId]: {
									hasGifProduct: n
								}
							}
						}
						default:
							return e
					}
				},
				Za = n("./src/reddit/actions/economics/me/constants.ts");
			const ec = {
				fetched: !1,
				data: {}
			};
			var tc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Za.a:
							return {
								fetched: !0, data: t.payload
							};
						case o.h: {
							const {
								subredditId: n
							} = t.payload;
							return e.data.specialMemberships && e.data.specialMemberships[n] ? {
								...e,
								data: {
									...e.data,
									specialMemberships: {
										...e.data.specialMemberships,
										[n]: {
											...e.data[n],
											settings: {
												renew: !1
											}
										}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				nc = n("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const rc = {
				fetched: !1,
				data: null
			};
			var sc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Za.b:
							return {
								fetched: !0, data: e.data
							};
						case Za.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				ac = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				cc = Object(J.c)({
					banners: Fa,
					currentBadgeManagementScreen: Ha,
					currentModalArgs: Qa,
					emotes: Xa,
					gifs: Ja,
					me: tc,
					paymentSystems: nc.b,
					pointsCopy: sc,
					subredditPremium: ac.b
				}),
				oc = n("./src/reddit/actions/emailVerificationTooltip.ts");
			const ic = {
				isShowing: !1
			};
			var dc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ic,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oc.a:
							return {
								...e, isShowing: !e.isShowing
							};
						default:
							return e
					}
				},
				lc = n("./src/reddit/actions/emoji.ts");
			const uc = {};
			var pc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lc.g: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case lc.f:
						case lc.e: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						default:
							return e
					}
				},
				fc = Object(J.c)({
					pending: pc
				}),
				hc = Object(J.c)({
					list: fc
				});
			const bc = {};
			var yc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lc.e:
						case lc.b:
							return e;
						case lc.f: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case lc.c: {
							const {
								emojiName: n,
								subredditId: r
							} = t.payload, s = e[r].emojis, {
								[n]: a,
								...c
							} = s;
							return {
								...e,
								[r]: {
									...e[r],
									emojis: c
								}
							}
						}
						case lc.h: {
							const n = t.payload,
								r = e[n.subredditId].emojis,
								s = {
									url: n.url,
									name: n.name,
									userFlairAllowed: n.userFlairAllowed,
									postFlairAllowed: n.postFlairAllowed,
									modFlairOnly: n.modFlairOnly
								},
								a = {
									...r,
									[n.name]: s
								};
							return {
								...e,
								[n.subredditId]: {
									...e[n.subredditId],
									emojis: a
								}
							}
						}
						case lc.d: {
							const {
								emojiName: n,
								isSnoomoji: r,
								settings: s,
								subredditId: a
							} = t.payload, c = r ? "snoomojis" : "emojis", o = e[a][c], i = {
								...o,
								[n]: {
									...o[n],
									...s
								}
							};
							return {
								...e,
								[a]: {
									...e[a],
									[c]: i
								}
							}
						}
						default:
							return e
					}
				},
				gc = Object(J.c)({
					api: hc,
					models: yc
				}),
				mc = n("./src/reddit/actions/experiments.ts");
			const vc = /^experiment_(.*)$/i,
				Ec = e => {
					const t = e.match(vc);
					if (null !== t) return t[1]
				},
				Oc = {};
			var _c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Vr(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = Ec(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return wa()(r) ? e : {
								...e,
								...r
							}
						}
						case mc.b: {
							const {
								experimentName: n,
								override: r
							} = t.payload;
							return n ? {
								...e,
								[n]: r || ""
							} : e
						}
						default:
							return e
					}
				},
				Ic = n("./src/reddit/actions/externalAccount.ts");
			const Sc = {};
			var Tc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ic.e:
					case Ic.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Ic.d: {
						const {
							provider: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const wc = {};
			var Dc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ic.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ic.f:
						case Ic.d: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				jc = Object(J.c)({
					error: Tc,
					pending: Dc
				});
			const Ac = {};
			var Cc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ac,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ic.l:
					case Ic.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Ic.j: {
						const {
							provider: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Pc = {};
			var Rc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ic.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ic.c:
						case Ic.a: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Nc = Object(J.c)({
					error: Cc,
					pending: Rc
				});
			const xc = {};
			var Lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ic.i:
					case Ic.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Ic.g: {
						const {
							subredditName: n,
							apiError: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const kc = {};
			var Uc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ic.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const Mc = {};
			var Bc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ic.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ic.h:
						case Ic.g: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Fc = Object(J.c)({
					error: Lc,
					fetched: Uc,
					pending: Bc
				});
			const Gc = {};
			var qc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ic.l:
					case Ic.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Ic.j: {
						const {
							username: n,
							apiError: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Hc = {};
			var Qc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ic.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ic.k:
						case Ic.j: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Wc = Object(J.c)({
					error: qc,
					pending: Qc
				}),
				Vc = Object(J.c)({
					connect: jc,
					disconnect: Nc,
					user: Wc,
					subreddit: Fc
				});
			const Kc = {};
			var $c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ic.h: {
						const {
							subredditName: n,
							accountsData: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Yc = {};
			var Xc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ic.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case Ic.c: {
							const {
								username: n,
								provider: r
							} = t.payload, s = e[n];
							return s && s[r] ? {
								...e,
								[n]: Gr()(s, r)
							} : e
						}
						default:
							return e
					}
				},
				zc = Object(J.c)({
					api: Vc,
					user: Xc,
					subreddit: $c
				}),
				Jc = n("./src/reddit/featureFlags/index.ts");
			const Zc = new Set(["0", "disabled", "false", "off", ""]);
			var eo = e => !Zc.has(e.toLowerCase());
			const to = Jc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				no = Jc.a.reduce((e, t) => (e[t] = null, e), {});
			var ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : no,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Vr(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(Jc.g)(e);
									if (r) {
										const s = to[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || eo(r);
											t[s] = a
										}
									}
								}
								if (Object.keys(t).length > 0) return {
									...e,
									...t
								}
							}
							return e
						}
						case Jc.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case Jc.c: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return {
								...e,
								[n]: !r
							}
						}
						default:
							return e
					}
				},
				so = Object(J.c)({
					overrides: ro
				}),
				ao = n("./src/reddit/actions/firstPost/constants.ts");
			const co = {
				currentPromptIndex: 0,
				firstFormEditEvent: !1,
				postBody: "",
				postSubmitted: !1,
				postTitle: "",
				selectedPredicatesInt: [],
				subreddit: {
					subredditId: "",
					subredditName: ""
				}
			};
			var oo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : co,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ao.e:
							return {
								...e, firstFormEditEvent: t.payload
							};
						case ao.d:
							return {
								...e, postTitle: t.payload
							};
						case ao.b:
							return {
								...e, postBody: t.payload
							};
						case ao.c:
							return {
								...e, subreddit: t.payload
							};
						case ao.a:
							return {
								...e, currentPromptIndex: t.payload
							};
						case ao.f:
							return {
								...e, selectedPredicatesInt: t.payload
							};
						case ur.P:
							return {
								...e, postSubmitted: !0
							};
						case ur.db:
						case ur.J:
							return {
								...e, postSubmitted: !1
							};
						default:
							return e
					}
				},
				io = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const lo = {
				focusedVerticalGqlError: null
			};
			var uo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case io.g:
					case io.f:
					case io.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case io.d:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const po = {
				focusedVerticalGqlPending: !1
			};
			var fo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : po,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case io.g:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case io.d:
						case io.f:
						case io.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				ho = Object(J.c)({
					error: uo,
					pending: fo
				});
			var bo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case io.f:
					case io.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const yo = {
				dismissed: !0
			};
			var go = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case io.i:
						return {
							dismissed: !1
						};
					case io.h:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var mo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case io.f:
					case io.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var vo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case io.f:
					case io.c:
					case io.e:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Eo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case io.f:
						case io.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Oo = Object(J.c)({
					api: ho,
					components: go,
					interactedSubredditIds: mo,
					recommendedSubredditIds: Eo,
					category: bo,
					lastLoadedEnv: vo
				});
			Object(F.a)("FONTS_FONT_FILES_PARSED");
			const _o = [];
			var Io = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var So = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case w.b:
						return t.payload;
					default:
						return e
				}
			};
			var To = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.p:
						return t.payload;
					case Ie.e:
					case l.b:
					case Ie.I:
					case Ie.s:
						return null;
					default:
						return e
				}
			};
			var wo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.e:
					case l.b:
					case Ie.s:
					case Ie.p:
						return !1;
					case Ie.q:
						return !0;
					default:
						return e
				}
			};
			var Do = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.q:
						case Ie.e:
						case l.b:
						case Ie.s:
						case Ie.p:
							return !1;
						case Ie.u:
							return !0;
						default:
							return e
					}
				},
				jo = Object(J.c)({
					error: To,
					pending: wo,
					showLoader: Do
				});
			var Ao = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.J:
					case Ie.I: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case Ie.f:
					case Ie.e:
						return null;
					default:
						return e
				}
			};
			var Co = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.t: {
						const {
							id: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Po = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const n = t.payload;
				switch (t.type) {
					case Ie.H:
					case Ie.I:
						return n.thingId;
					case Ie.s:
					case l.b:
					case Ie.e:
						return null;
					default:
						return e
				}
			};
			var Ro = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.r:
						return t.payload;
					case Ie.I:
						return !1;
					default:
						return e
				}
			};
			var No = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.H:
						return !0;
					default:
						return e
				}
			};
			var xo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.v:
						return t.payload;
					case Ie.I:
						return "";
					default:
						return e
				}
			};
			const Lo = Xe.p;
			var ko = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.eb:
							return t.payload;
						case Ie.I: {
							const {
								award: e
							} = t.payload;
							return e || Lo
						}
						default:
							return e
					}
				},
				Uo = Object(J.c)({
					api: jo,
					correlationId: Ao,
					gildModalThingId: Po,
					isAnonymous: Ro,
					isIframed: No,
					message: xo,
					gildedThing: Co,
					selectedAward: ko
				});
			var Mo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.w:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case Ie.f:
					case l.b:
					case Ie.J:
					case Ie.B:
						return null;
					default:
						return e
				}
			};
			var Bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.f:
						case l.b:
						case Ie.B:
						case Ie.w:
							return !1;
						case Ie.x:
							return !0;
						default:
							return e
					}
				},
				Fo = Object(J.c)({
					error: Mo,
					pending: Bo
				});
			var Go = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.J: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case l.b:
						case Ie.f:
						case Ie.B:
							return "";
						default:
							return e
					}
				},
				qo = Object(J.c)({
					api: Fo,
					givePremiumModalAccountName: Go
				}),
				Ho = n("./src/reddit/actions/header.ts"),
				Qo = n("./src/reddit/actions/overlayEvents.ts");
			var Wo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ho.a:
							return !1;
						case Ho.b:
							return !0;
						case Ho.c:
							return !e;
						case Qo.b:
							return !1;
						default:
							return e
					}
				},
				Vo = Object(J.c)({
					isSubscriptionsDropdownOpen: Wo
				});
			var Ko = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				$o = n("./src/reddit/actions/imageUploads.ts");
			const Yo = {};
			var Xo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $o.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case $o.c:
					case $o.e:
					case $o.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case $o.a: {
						const n = t.payload;
						if (!e[n.id]) return e;
						const r = {
							...e
						};
						return delete r[n.id], r
					}
					default:
						return e
				}
			};
			var zo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case w.c: {
						const r = t.payload;
						return wa()(r) ? e : (null === (n = r.notifications) || void 0 === n ? void 0 : n.position) || null
					}
					default:
						return e
				}
			};
			const Jo = {
				notifications: null,
				id: null
			};
			var Zo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r;
					switch (t.type) {
						case w.c: {
							const s = t.payload;
							return wa()(s) ? e : {
								...e,
								notifications: (null === (n = s.notifications) || void 0 === n ? void 0 : n.notifications) || null,
								id: null === (r = s.notifications) || void 0 === r ? void 0 : r.id
							}
						}
						default:
							return e
					}
				},
				ei = n("./src/reddit/actions/inAppNotifications/constants.ts");
			var ti = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ei.a:
							return !0;
						default:
							return e
					}
				},
				ni = Object(J.c)({
					inFeedPosition: zo,
					notifications: Zo,
					shouldHideInAppNotifications: ti
				}),
				ri = n("./src/reddit/actions/interceptedAction.ts");
			var si = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ri.a:
							return t.payload;
						case ri.b:
							return null;
						default:
							return e
					}
				},
				ai = n("./src/reddit/actions/changeUsername.ts");
			var ci = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ai.CHANGE_USERNAME_TOOLTIP_CLOSED:
							return !1;
						case ai.CHANGE_USERNAME_TOOLTIP_OPENED:
							return !0;
						default:
							return e
					}
				},
				oi = n("./src/reddit/actions/moderatingSubreddits.ts");
			var ii = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oi.a: {
							if (e) return e;
							const n = t.payload;
							return Object.keys(n).some(e => !0 === n[e].posts)
						}
						case k.SUBREDDIT_LOADED:
						case he.b:
						case he.f:
						case x.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: n
							} = t;
							return n.subredditPermissions && n.subreddits ? !!n.subredditPermissions.posts : e
						}
						case fe.i:
						case fe.f:
						case fe.r:
						case fe.u:
						case fe.A: {
							if (e) return e;
							const {
								response: n
							} = t.payload, {
								moderatingSubreddits: r,
								moderatingProfiles: s
							} = n;
							let a = Object.keys(r).some(e => !0 === r[e].posts);
							if (!a) {
								a = Object.keys(s).some(e => !0 === r[e].posts)
							}
							return a
						}
						default:
							return e
					}
				},
				di = n("./src/reddit/actions/jsApi.ts");
			const li = [];
			var ui = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : li,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case di.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				pi = n("./src/reddit/actions/langSite/index.ts");
			const fi = {
				bannerClosedTime: 0
			};
			var hi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pi.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				bi = n("./src/reddit/actions/leaderboard/constants.ts");
			const yi = {};
			var gi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bi.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case bi.b:
					case bi.c: {
						const {
							subredditId: n
						} = t.payload, {
							[n]: r,
							...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const mi = {};
			var vi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.a:
						case bi.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case bi.b: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				Ei = Object(J.c)({
					error: gi,
					pending: vi
				});
			const Oi = {};
			var _i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.c: {
							const {
								subredditId: n,
								data: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Ii = Object(J.c)({
					api: Ei,
					models: _i
				});
			var Si = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b: {
						const {
							listingKey: n
						} = t.payload;
						return n || e
					}
					default:
						return e
				}
			};
			const Ti = {};
			var wi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ti,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.d:
					case Ze.e:
					case ye.b:
					case ye.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(G.ic.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Ze.c:
					case ye.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(G.ic.Users) || s && s.authors ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Di = {};
			var ji = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Di,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.d:
						case ye.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ze.e:
						case Ze.c:
						case ye.c:
						case ye.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Ai = Object(J.c)({
					error: wi,
					pending: ji
				});
			const Ci = {};
			var Pi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ci,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(G.ic.Users)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const Ri = {};
			var Ni = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(G.ic.Users) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case ye.c: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.ic.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const xi = {};
			var Li = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.ic.Users) ? e : r.authors ? {
								...e,
								[n]: {
									token: r.authors
								}
							} : Object(On.a)(e, n)
						}
						default:
							return e
					}
				},
				ki = Object(J.c)({
					api: Ai,
					identifiers: Ni,
					fetchedTokens: Pi,
					loadMore: Li
				});
			const Ui = {};
			var Mi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ui,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.d:
					case Ze.e:
					case ye.b:
					case ye.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(G.ic.Comments) ? e : {
							...e,
							[n]: null
						}
					}
					case Ze.c:
					case ye.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(G.ic.Comments) || s && s.comments ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Bi = {};
			var Fi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.d:
						case ye.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Comments) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ze.e:
						case Ze.c:
						case ye.c:
						case ye.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Comments) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Gi = Object(J.c)({
					error: Mi,
					pending: Fi
				});
			const qi = {};
			var Hi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(G.ic.Comments)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const Qi = {};
			var Wi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(G.ic.Comments) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case ye.c: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.ic.Comments) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Vi = {};
			var Ki = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.ic.Comments) ? e : r.comments ? {
								...e,
								[n]: {
									token: r.comments
								}
							} : Object(On.a)(e, n)
						}
						default:
							return e
					}
				},
				$i = Object(J.c)({
					api: Gi,
					identifiers: Wi,
					fetchedTokens: Hi,
					loadMore: Ki
				});
			const Yi = {};
			var Xi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.d:
					case Ze.e:
					case ye.b:
					case ye.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(G.ic.Subreddits) ? e : {
							...e,
							[n]: null
						}
					}
					case Ze.c:
					case ye.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(G.ic.Subreddits) || s && s.communities ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const zi = {};
			var Ji = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.d:
						case ye.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Subreddits) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ze.e:
						case Ze.c:
						case ye.c:
						case ye.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Subreddits) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Zi = Object(J.c)({
					error: Xi,
					pending: Ji
				});
			const ed = {};
			var td = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(G.ic.Subreddits)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const nd = {};
			var rd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(G.ic.Subreddits) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case ye.c: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.ic.Subreddits) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const sd = {};
			var ad = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.ic.Subreddits) ? e : r.communities ? {
								...e,
								[n]: {
									token: r.communities
								}
							} : Object(On.a)(e, n)
						}
						default:
							return e
					}
				},
				cd = Object(J.c)({
					api: Zi,
					identifiers: rd,
					fetchedTokens: td,
					loadMore: ad
				});
			const od = {};
			var id = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : od,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.d:
					case Ze.e:
					case ye.b:
					case ye.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(G.ic.Subreddits) && -1 === r.indexOf(G.ic.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Ze.c:
					case ye.a: {
						const {
							key: n,
							error: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.ic.Subreddits) && -1 === s.indexOf(G.ic.Users) ? e : {
							...e,
							[n]: r
						}
					}
					case ze.f:
					case ze.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case ze.d: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const dd = {};
			var ld = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.d:
						case ye.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Subreddits) && -1 === r.indexOf(G.ic.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ze.e:
						case Ze.c:
						case ye.c:
						case ye.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Subreddits) && -1 === r.indexOf(G.ic.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						case ze.f: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ze.e:
						case ze.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ud = Object(J.c)({
					error: id,
					pending: ld
				});
			const pd = {};
			var fd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(G.ic.Subreddits) && -1 === s.indexOf(G.ic.Users)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					case ze.e: {
						const {
							fetchedToken: n,
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const hd = {};
			var bd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.ic.Subreddits) && -1 === s.indexOf(G.ic.Users) ? e : {
							...e,
							[n]: e[n].concat(r)
						}
					}
					case ye.c: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.ic.Subreddits) && -1 === s.indexOf(G.ic.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const yd = {};
			var gd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.ic.Subreddits) && -1 === s.indexOf(G.ic.Users) ? e : r.listings ? {
								...e,
								[n]: {
									token: r.listings
								}
							} : Object(On.a)(e, n)
						}
						case ze.e: {
							const {
								key: n,
								token: r
							} = t.payload;
							return {
								...e,
								[n]: {
									token: r
								}
							}
						}
						default:
							return e
					}
				},
				md = Object(J.c)({
					api: ud,
					identifiers: bd,
					fetchedTokens: fd,
					loadMore: gd
				});
			const vd = {};
			var Ed = n("./src/reddit/actions/pages/postSetPage/constants.ts");
			const Od = {};
			var _d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.c:
					case P.b:
					case P.g:
					case P.f:
					case w.d:
					case w.c:
					case N.c:
					case N.b:
					case k.SUBREDDIT_PENDING:
					case k.SUBREDDIT_LOADED:
					case D.c:
					case w.h:
					case w.g:
					case R.e:
					case R.f:
					case R.i:
					case R.h:
					case j.s:
					case j.r:
					case C.b:
					case C.c:
					case Ed.b:
					case Ed.c:
					case V.PROFILE_POSTS_PENDING:
					case V.PROFILE_POSTS_LOADED:
					case V.MORE_POSTS_PENDING:
					case V.MORE_POSTS_LOADED:
					case M.f:
					case M.e:
					case L.f:
					case L.e:
					case H.j:
					case U.TOPIC_DATA_PENDING:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_PENDING:
					case U.MORE_POSTS_LOADED:
					case H.i:
					case T.e:
					case T.c:
					case T.d: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case ye.b:
					case ye.c:
					case Ze.d:
					case Ze.e: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(G.ic.Posts) ? e : {
							...e,
							[n]: null
						}
					}
					case P.a:
					case P.e:
					case w.a:
					case N.a:
					case k.SUBREDDIT_FAILED:
					case w.f:
					case R.g:
					case j.q:
					case C.a:
					case H.h:
					case Ed.a:
					case M.d:
					case L.d:
					case V.PROFILE_POSTS_FAILED:
					case V.MORE_POSTS_FAILED:
					case U.TOPIC_DATA_FAILED:
					case U.MORE_POSTS_FAILED:
					case T.b: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case ye.a:
					case Ze.c: {
						const {
							error: n,
							key: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(G.ic.Posts) || s && s.posts ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const Id = {};
			var Sd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Id,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.c:
						case P.g:
						case w.d:
						case D.c:
						case N.c:
						case V.PROFILE_POSTS_PENDING:
						case L.f:
						case k.SUBREDDIT_PENDING:
						case w.h:
						case R.f:
						case R.i:
						case j.s:
						case C.c:
						case Ed.c:
						case M.f:
						case V.MORE_POSTS_PENDING:
						case H.j:
						case U.MORE_POSTS_PENDING:
						case T.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ye.b:
						case Ze.d: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Posts) ? e : {
								...e,
								[n]: !0
							}
						}
						case P.b:
						case P.a:
						case P.f:
						case P.e:
						case w.c:
						case w.a:
						case N.a:
						case N.b:
						case Ed.a:
						case Ed.b:
						case L.d:
						case L.e:
						case V.PROFILE_POSTS_FAILED:
						case V.PROFILE_POSTS_LOADED:
						case k.SUBREDDIT_LOADED:
						case k.SUBREDDIT_FAILED:
						case w.g:
						case w.f:
						case D.a:
						case D.b:
						case R.e:
						case R.d:
						case R.h:
						case R.g:
						case j.r:
						case j.q:
						case M.d:
						case M.e:
						case V.MORE_POSTS_FAILED:
						case V.MORE_POSTS_LOADED:
						case A.a:
						case A.b:
						case Q.o:
						case C.b:
						case C.a:
						case H.i:
						case H.h:
						case U.MORE_POSTS_LOADED:
						case U.MORE_POSTS_FAILED:
						case T.c:
						case T.b:
						case T.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case Q.w: {
							if (!t.payload || !t.payload.length) return e;
							const n = {};
							for (const e of t.payload) {
								n[e.key] = !1
							}
							return {
								...e,
								...n
							}
						}
						case ye.c:
						case ye.a:
						case Ze.e:
						case Ze.c: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.ic.Posts) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Td = Object(J.c)({
					error: _d,
					pending: Sd
				});
			const wd = {};
			var Dd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case w.c:
						case k.SUBREDDIT_LOADED: {
							const {
								key: n,
								correlationId: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				jd = n("./src/reddit/actions/postList.ts"),
				Ad = n("./node_modules/lodash/omitBy.js"),
				Cd = n.n(Ad);

			function Pd(e, t) {
				return t = t.toLowerCase(), Cd()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const Rd = {};
			var Nd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case jd.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Gr()(e, [n]) : e
					}
					case k.SUBREDDIT_INVALIDATE_LISTING:
						return Pd(e, t.payload);
					default:
						return e
				}
			};
			const xd = {};
			var Ld = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.b:
						case R.e:
						case w.c:
						case N.b:
						case k.SUBREDDIT_LOADED:
						case V.PROFILE_POSTS_LOADED:
						case U.TOPIC_DATA_LOADED: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: {}
							}
						}
						case P.f:
						case w.g:
						case R.h:
						case j.r:
						case M.e:
						case V.MORE_POSTS_LOADED:
						case H.i:
						case U.MORE_POSTS_LOADED: {
							const {
								key: n,
								fetchedToken: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									[r]: !0
								}
							}
						}
						case Ze.e: {
							const {
								fetchedToken: n,
								key: r,
								type: s
							} = t.payload;
							if (s.indexOf(G.ic.Posts) > -1) {
								const t = e[r];
								return {
									...e,
									[r]: {
										...t,
										[n]: !0
									}
								}
							}
							return e
						}
						case k.SUBREDDIT_INVALIDATE_LISTING:
							return Pd(e, t.payload);
						default:
							return e
					}
				},
				kd = n("./src/reddit/actions/post.ts");
			const Ud = {};
			var Md = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ud,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.c:
						case w.d:
						case R.f:
						case N.c:
						case V.PROFILE_POSTS_PENDING:
						case k.SUBREDDIT_PENDING:
						case Ed.c:
						case L.f:
						case V.PROFILE_POSTS_PENDING:
						case U.TOPIC_DATA_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: []
							}
						}
						case ze.e:
						case D.b:
						case R.e:
						case A.b:
						case w.c:
						case P.b:
						case N.b:
						case k.SUBREDDIT_LOADED:
						case Q.o:
						case C.b:
						case Ed.b:
						case L.e:
						case V.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case U.TOPIC_DATA_LOADED:
						case T.c: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case Q.w: {
							if (!t.payload || !t.payload.length) return e;
							const n = {};
							for (const e of t.payload) {
								const t = e;
								n[t.key] = t.postIds
							}
							return {
								...e,
								...n
							}
						}
						case P.f:
						case w.g:
						case R.h:
						case j.r:
						case V.MORE_POSTS_LOADED:
						case M.e:
						case H.i:
						case U.MORE_POSTS_LOADED:
						case T.d: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case ye.c: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.ic.Posts) ? e : {
								...e,
								[n]: r
							}
						}
						case Ze.e: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.ic.Posts) ? e : {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case kd.o: {
							const {
								newStickiedPostList: n,
								listingKey: r
							} = t.payload;
							if (!e[r]) return e;
							const s = [...e[r]].filter(e => !n.includes(e));
							return s.unshift(...n), {
								...e,
								[r]: s
							}
						}
						case k.SUBREDDIT_INVALIDATE_LISTING:
							return Pd(e, t.payload);
						default:
							return e
					}
				},
				Bd = n("./src/lib/makeListingKey/index.ts");
			const Fd = {};
			var Gd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(Bd.b)(n) ? {
							...e,
							[n]: {
								sort: r,
								hasChanged: !1
							}
						} : e
					}
					case xn.a:
					case xn.q: {
						const t = {};
						return Object.keys(e).forEach(n => {
							t[n] = {
								...e[n],
								hasChanged: !0
							}
						}), t
					}
					default:
						return e
				}
			};
			const qd = {};
			var Hd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.b:
					case P.f:
					case w.c:
					case N.b:
					case k.SUBREDDIT_LOADED:
					case L.e:
					case V.PROFILE_POSTS_LOADED:
					case w.g:
					case R.e:
					case R.h:
					case j.r:
					case M.e:
					case V.MORE_POSTS_LOADED:
					case H.i:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_LOADED: {
						const {
							key: n,
							token: r,
							dist: s
						} = t.payload;
						return r ? {
							...e,
							[n]: {
								token: r,
								dist: s
							}
						} : Object(On.a)(e, n)
					}
					case Ze.e:
					case ye.c: {
						const {
							key: n,
							tokens: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.ic.Posts) ? e : r.posts ? {
							...e,
							[n]: {
								token: r.posts
							}
						} : Object(On.a)(e, n)
					}
					case k.SUBREDDIT_INVALIDATE_LISTING:
						return Pd(e, t.payload);
					default:
						return e
				}
			};
			const Qd = {};
			var Wd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.c:
						case T.d: {
							const {
								pageInfo: n,
								key: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Vd = Object(J.c)({
					api: Td,
					correlationIds: Dd,
					endMarkers: Nd,
					fetchedTokens: Ld,
					ids: Md,
					listingSort: Gd,
					loadMore: Hd,
					pageInfo: Wd,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vd,
							r = arguments.length > 1 ? arguments[1] : void 0;
						switch (r.type) {
							case ye.c:
							case Ze.e: {
								const {
									key: s,
									treatment: a,
									type: c
								} = r.payload;
								return -1 === c.indexOf(e) ? n : {
									...n,
									[s]: a[t]
								}
							}
							default:
								return n
						}
					}))(G.ic.Posts, G.hc.Posts)
				}),
				Kd = Object(J.c)({
					activeKey: Si,
					authorOrder: ki,
					commentOrder: $i,
					communityOrder: cd,
					listingOrder: md,
					postOrder: Vd
				});
			var $d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case w.c: {
						const n = t.payload;
						return wa()(n.announcements) ? e : n.announcements || null
					}
					default:
						return e
				}
			};
			var Yd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case w.c: {
						const n = t.payload;
						return wa()(n.featuredLiveThread) ? e : n.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Xd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case w.c:
						return !0;
					default:
						return e
				}
			};
			var zd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Jd = Object(J.c)({
					announcements: $d,
					featured: Yd,
					isFrontpageLoaded: Xd,
					shouldShowAnnouncements: zd
				}),
				Zd = n("./src/reddit/actions/media.ts");
			const el = {},
				tl = {};
			var nl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zd.b: {
						const {
							postId: n,
							index: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const rl = {};
			var sl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zd.e: {
							const {
								postId: n,
								isTileLayout: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				al = Object(J.c)({
					currentSlideIndex: nl,
					isGalleryTileLayout: sl
				});
			var cl = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zd.c:
						return t.payload;
					default:
						return e
				}
			};
			var ol = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zd.d:
							return t.payload;
						default:
							return e
					}
				},
				il = Object(J.c)({
					isMuted: cl,
					volume: ol
				}),
				dl = n("./src/reddit/actions/merchandisingUnitAnnouncements/constants.ts");
			const ll = [];
			var ul = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ll,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case w.c: {
							const r = t.payload;
							return wa()(r.merchandisingUnitAnnouncements) ? e : null !== (n = r.merchandisingUnitAnnouncements) && void 0 !== n ? n : ll
						}
						case dl.a: {
							const n = t.payload;
							return e.filter(e => e.feedElement.id !== n.id)
						}
						default:
							return e
					}
				},
				pl = n("./src/reddit/actions/meta.ts");
			const fl = {
				ampCid: void 0,
				city: "",
				country: "",
				crawler: void 0,
				domain: "",
				isBot: !1,
				isSessionSeo: !1,
				locale: "",
				isOneTapSession: !1,
				method: "",
				pageloadServerTime: 0,
				platform: void 0,
				popularGeoFilter: void 0,
				protocol: "",
				region: "",
				samplingBucket: 0,
				sessionReferrerDomain: "",
				userAgent: ""
			};
			var hl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pl.b:
							return t.payload;
						case pl.a:
							return {
								...e, ...t.payload
							};
						case pl.e:
							return {
								...e, locale: t.payload
							};
						case pl.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case pl.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case pl.d:
							return {
								...e, platform: {
									...e.platform,
									pwa: !1
								}
							};
						default:
							return e
					}
				},
				bl = n("./src/reddit/actions/subredditModeration/constants.ts");
			const yl = {};
			var gl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case he.b:
					case he.f:
					case x.PAGE_LOADED: {
						const {
							payload: n
						} = t;
						if (!n.subredditPermissions || !n.subreddits) return e;
						const r = Object.keys(n.subredditAboutInfo || {});
						if (1 !== r.length) return e;
						const s = r[0];
						return {
							...e,
							[s]: n.subredditPermissions
						}
					}
					case fe.i:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A: {
						const {
							response: n
						} = t.payload, {
							moderatingSubreddits: r,
							moderatingProfiles: s
						} = n;
						return {
							...e,
							...r,
							...s
						}
					}
					case H.f:
					case R.e:
					case fe.n: {
						const n = t.payload,
							{
								moderatingSubreddits: r,
								moderatingProfiles: s
							} = n;
						return {
							...e,
							...r,
							...s
						}
					}
					case bl.kb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(On.a)(e, n)
					}
					case bl.db: {
						const n = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			var ml = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.b:
					case R.k:
						return null;
					case R.a:
					case R.j:
						return t.payload;
					default:
						return e
				}
			};
			var vl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.b:
						case R.k:
							return !0;
						case R.c:
						case R.a:
						case R.l:
						case R.j:
							return !1;
						default:
							return e
					}
				},
				El = Object(J.c)({
					error: ml,
					pending: vl
				});
			const Ol = [];
			var _l = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ol,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.e: {
							const n = t.payload,
								{
									filteredSubreddits: r
								} = n;
							return r || e
						}
						case R.j: {
							const n = t.payload;
							return [...e, n]
						}
						case R.k:
						case R.a: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						default:
							return e
					}
				},
				Il = Object(J.c)({
					api: El,
					names: _l
				}),
				Sl = Object(J.c)({
					filteredSubreddits: Il
				}),
				Tl = n("./src/reddit/actions/modMode.ts");
			var wl = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tl.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const Dl = {};
			var jl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case le.z: {
						const {
							moreCommentsId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case le.y: {
						const {
							moreCommentsItem: n
						} = t.payload;
						return {
							...e,
							[n.id]: null
						}
					}
					case le.x: {
						const {
							moreCommentsItem: n,
							...r
						} = t.payload;
						return {
							...e,
							[n.id]: r || {}
						}
					}
					default:
						return e
				}
			};
			const Al = {};
			var Cl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Al,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case le.z: {
							const {
								moreCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case le.x:
						case le.y: {
							const {
								moreCommentsItem: n
							} = t.payload;
							return {
								...e,
								[n.id]: !1
							}
						}
						default:
							return e
					}
				},
				Pl = Object(J.c)({
					error: jl,
					pending: Cl
				});
			const Rl = {};
			var Nl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case le.y:
						case he.b:
						case he.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				xl = Object(J.c)({
					api: Pl,
					models: Nl
				});
			var Ll = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.b:
					case j.c:
						return null;
					case j.a:
						return t.payload;
					default:
						return e
				}
			};
			var kl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.a:
					case j.c:
						return !0;
					case j.b:
						return !1;
					default:
						return e
				}
			};
			var Ul = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.b:
						case j.a:
						case j.c:
							return null;
						case j.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Ml = Object(J.c)({
					error: Ll,
					fetched: kl,
					pending: Ul
				});
			var Bl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.f:
					case j.g:
						return null;
					case j.e:
						return t.payload;
					default:
						return e
				}
			};
			var Fl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.e:
					case j.g:
						return !0;
					case j.f:
						return !1;
					default:
						return e
				}
			};
			var Gl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.e:
						case j.g:
							return !1;
						case j.f:
							return !0;
						default:
							return e
					}
				},
				ql = Object(J.c)({
					error: Bl,
					fetched: Fl,
					pending: Gl
				});
			var Hl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.i:
					case j.j:
						return null;
					case j.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ql = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.h:
					case j.j:
						return !0;
					case j.i:
						return !1;
					default:
						return e
				}
			};
			var Wl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.h:
						case j.j:
							return !1;
						case j.i:
							return !0;
						default:
							return e
					}
				},
				Vl = Object(J.c)({
					error: Hl,
					fetched: Ql,
					pending: Wl
				});
			var Kl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.l:
					case j.m:
						return null;
					case j.k:
						return t.payload;
					default:
						return e
				}
			};
			var $l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.k:
					case j.m:
						return !0;
					case j.l:
						return !1;
					default:
						return e
				}
			};
			var Yl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.k:
						case j.m:
							return !1;
						case j.l:
							return !0;
						default:
							return e
					}
				},
				Xl = Object(J.c)({
					error: Kl,
					fetched: $l,
					pending: Yl
				});
			var zl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.o:
					case j.p:
						return null;
					case j.n:
						return t.payload;
					default:
						return e
				}
			};
			var Jl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.n:
					case j.p:
						return !0;
					case j.o:
						return !1;
					default:
						return e
				}
			};
			var Zl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.n:
						case j.p:
							return !1;
						case j.o:
							return !0;
						default:
							return e
					}
				},
				eu = Object(J.c)({
					error: zl,
					fetched: Jl,
					pending: Zl
				});
			var tu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.t:
						return !1;
					case j.u:
						return !0;
					default:
						return e
				}
			};
			var nu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.t:
							return !0;
						case j.u:
							return !1;
						default:
							return e
					}
				},
				ru = Object(J.c)({
					fetched: tu,
					pending: nu
				});
			var su = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.A:
					case j.B:
						return null;
					case j.z:
						return t.payload;
					default:
						return e
				}
			};
			var au = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.A:
					case j.z:
						return !1;
					case j.B:
						return !0;
					default:
						return e
				}
			};
			var cu = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.A:
							return !0;
						case j.B:
						case j.z:
							return !1;
						default:
							return e
					}
				},
				ou = Object(J.c)({
					error: su,
					fetched: au,
					pending: cu
				});
			var iu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.w:
					case j.x:
						return null;
					case j.v:
						return t.payload;
					default:
						return e
				}
			};
			var du = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.v:
					case j.x:
						return !0;
					case j.w:
						return !1;
					default:
						return e
				}
			};
			var lu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.v:
						case j.x:
							return null;
						case j.w:
							const {
								id: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				uu = Object(J.c)({
					error: iu,
					fetched: du,
					pending: lu
				}),
				pu = Object(J.c)({
					addSubreddit: Ml,
					create: ql,
					deleteMulti: Vl,
					duplicate: Xl,
					edit: eu,
					forUser: ru,
					recommendations: ou,
					removeSubreddit: uu
				}),
				fu = n("./node_modules/lodash/isEqual.js"),
				hu = n.n(fu),
				bu = n("./node_modules/lodash/union.js"),
				yu = n.n(bu);

			function gu(e, t, n) {
				let r, s, a = e.length - 1,
					c = 0;
				for (; c <= a;) {
					const o = n(r = e[s = (c + a) / 2 | 0], t);
					if (o < 0) {
						if ((c = s + 1) > a) return c
					} else {
						if (!(o > 0)) return s;
						if ((a = s - 1) < c) return a + 1
					}
				}
				return (c + a) / 2 | 0
			}
			var mu = n("./src/reddit/actions/profile/constants.ts");
			const vu = {};
			var Eu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.b:
						case j.r:
						case j.u:
						case mu.h: {
							const {
								multireddits: n,
								multiredditsByUser: r,
								multiredditsModelsState: s
							} = t.payload, a = {
								...e
							}, c = {
								...n,
								...s
							};
							for (const t in r) {
								const n = r[t],
									s = e[t];
								a[t] = yu()(s, n).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return hu()(e, a) ? e : a
						}
						case j.g:
						case j.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = gu(s, r.url, (e, t) => e > t ? 1 : -1);
							return s.splice(a, 0, r.url), {
								...e,
								[n]: s
							}
						}
						case j.j: {
							const n = t.payload;
							for (const t in e) {
								const r = e[t];
								if (r.indexOf(n) > -1) return {
									...e,
									[t]: r.filter(e => e !== n)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				Ou = n("./src/reddit/actions/subscription/constants.ts"),
				_u = n("./src/reddit/models/Multireddit/index.ts");
			const Iu = {};
			var Su = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.b:
					case j.r:
					case j.u:
					case mu.h:
					case ye.c: {
						let n = {};
						for (const r in t.payload.multireddits) {
							const s = {
									...t.payload.multireddits[r]
								},
								a = e[r];
							a && !Object(_u.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && hu()(e[s.url], s) || (n = {
								...n,
								[r]: s
							})
						}
						return wa()(n) ? e : {
							...e,
							...n
						}
					}
					case j.g:
					case j.m: {
						const {
							multireddit: n
						} = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case j.j: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n], r
					}
					case j.p: {
						const n = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case j.x: {
						const {
							id: n,
							multipath: r,
							type: s
						} = t.payload, a = e[r], c = "subreddit" === s ? (a.subredditIds || []).filter(e => e !== n) : a.subredditIds, o = "profile" === s ? (a.profileIds || []).filter(e => e !== n) : a.profileIds;
						return {
							...e,
							[r]: {
								...a,
								profileIds: o,
								subredditIds: c
							}
						}
					}
					case Ou.d: {
						const {
							makeFavorite: n,
							multiredditPath: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isFavorited: n
							}
						}
					}
					case Ou.e: {
						const {
							follow: n,
							multiredditPath: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isFollowed: n,
								isFavorited: !1
							}
						}
					}
					case j.c: {
						const {
							id: n,
							multipaths: r,
							type: s
						} = t.payload, a = r.reduce((t, r) => {
							const a = e[r],
								c = "subreddit" === s ? [...a.subredditIds || [], n] : a.subredditIds,
								o = "profile" === s ? [...a.profileIds || [], n] : a.profileIds;
							return {
								...t,
								[r]: {
									...a,
									subredditIds: c,
									profileIds: o
								}
							}
						}, {});
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			const Tu = {};
			var wu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.B: {
							const {
								multipath: n,
								subreddits: r
							} = t.payload;
							return {
								...e,
								[n]: Object.keys(r)
							}
						}
						default:
							return e
					}
				},
				Du = Object(J.c)({
					api: pu,
					byUserId: Eu,
					models: Su,
					recommendations: wu
				}),
				ju = n("./src/reddit/actions/notificationBanner.ts");
			var Au = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ju.b:
							return t.payload.notificationBannerId;
						case ju.a:
							return null;
						default:
							return e
					}
				},
				Cu = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var Pu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Cu.e:
					case Cu.b:
						return !1;
					default:
						return e
				}
			};
			var Ru = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cu.e:
							return !0;
						case Cu.a:
						case Cu.b:
							return !1;
						default:
							return e
					}
				},
				Nu = Object(J.c)({
					error: Pu,
					pending: Ru
				}),
				xu = n("./src/reddit/actions/inboxBanner/constants.ts"),
				Lu = n("./src/reddit/models/inboxBanner/index.ts");
			const ku = {
				banners: [],
				dismissedBanners: []
			};
			var Uu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ku,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xu.b:
						return {
							...e, banners: t.payload.reduce((e, t) => t.applicablePlatforms.find(e => e.platform === Lu.b.DESKTOP) ? [...e, t] : e, [])
						};
					case xu.a:
						return {
							...e, dismissedBanners: [...e.dismissedBanners || [], t.payload]
						};
					default:
						return e
				}
			};
			var Mu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var Bu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const Fu = [];
			var Gu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cu.b: {
						const n = t.payload && t.payload.notifications;
						return [...e, ...n]
					}
					case Cu.f: {
						const n = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== n)
					}
					case Cu.d: {
						const n = t.payload && t.payload.id,
							r = t.payload && t.payload.now,
							s = e.findIndex(e => e.id === n);
						return -1 === s ? e : [...e.slice(0, s), {
							...e[s],
							readAt: r
						}, ...e.slice(s + 1)]
					}
					case Cu.c: {
						const n = t.payload && t.payload.now;
						return e.map(e => e.readAt ? e : {
							...e,
							readAt: n
						})
					}
					default:
						return e
				}
			};
			var qu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Hu = Object(J.c)({
					api: Nu,
					banner: Uu,
					earlierDividerIndex: Mu,
					notifications: Gu,
					pageInfo: qu,
					markAllAsReadTimestamp: Bu
				}),
				Qu = n("./src/reddit/actions/nps.ts");
			const Wu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Vu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qu.c:
							return {
								...Wu, pending: !0
							};
						case Qu.a:
							return Wu;
						case Qu.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...Wu,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				Ku = n("./src/reddit/actions/accountGender/constants.ts"),
				$u = n("./src/reddit/actions/onboarding/constants.ts");
			const Yu = {
				success: !1,
				failure: !1
			};
			var Xu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ku.b:
						return {
							...Yu, success: !0
						};
					case Ku.c:
						return {
							...Yu, failure: !0
						};
					case $u.a:
						return {
							...Yu
						};
					default:
						return e
				}
			};
			var zu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case w.c:
					case $u.c: {
						const e = t.payload;
						return (null == e ? void 0 : e.interestTopicRecommendations) && !wa()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
					}
					default:
						return e
				}
			};
			var Ju = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $u.b:
							return !0;
						default:
							return e
					}
				},
				Zu = Object(J.c)({
					genderUpdateState: Xu,
					interestTopicRecommendationsState: zu,
					shouldSkipOnboardingState: Ju
				});
			const ep = e => {
				const {
					id: t,
					experimentName: n,
					name: r,
					version: s
				} = e;
				return {
					id: parseInt(t),
					name: n,
					variant: r || void 0,
					version: s
				}
			};
			const tp = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = ep(n);
					return t
				},
				np = {};
			var rp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : np,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mc.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return tp(n)
					}
					default:
						return e
				}
			};
			var sp = Object(J.c)({
					byName: rp,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case mc.a: {
								const {
									pageExperimentVariants: e
								} = t.payload;
								return e && e.canonicalUrl ? e.canonicalUrl : null
							}
							default:
								return e
						}
					}
				}),
				ap = Object(J.c)({
					experiments: sp
				}),
				cp = n("./node_modules/history/esm/history.js"),
				op = n("./src/reddit/constants/history.ts");
			n("./src/reddit/helpers/isRobotIndexableMeta.ts");
			const ip = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				dp = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				lp = (e, t, n, r) => {
					const {
						action: s,
						...a
					} = n.route;
					return {
						key: e,
						locationState: r.state,
						meta: n.route.meta,
						queryParams: n.match.queryParams,
						routeMatch: {
							...n,
							route: a
						},
						status: 200,
						url: t,
						urlParams: n.match.params
					}
				};
			var up = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ip,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b: {
						const n = e.currentPage,
							r = t.payload,
							{
								routeMatch: s,
								location: a
							} = r,
							{
								key: c
							} = a;
						if (void 0 === c) return e;
						const o = Object(cp.e)(a),
							i = s ? lp(c, o, s, a) : dp(c, o);
						let {
							referrers: d
						} = e;
						if ("PUSH" === r.action) {
							const e = n && n.url || "";
							d = {
								...d,
								[c]: e
							}
						} else if ("REPLACE" === r.action && n && d[n.key]) {
							const {
								[n.key]: e, ...t
							} = d;
							d = {
								...t,
								[c]: e
							}
						}
						return {
							...e,
							referrers: d,
							currentPage: i,
							lastPage: n
						}
					}
					case l.f: {
						const n = t.payload,
							{
								key: r,
								meta: s
							} = n;
						return {
							...e,
							metas: {
								...e.metas,
								[r]: s
							}
						}
					}
					case l.g: {
						if (!e.currentPage) return e;
						const n = t.payload,
							r = {
								...e.currentPage,
								status: n
							};
						return {
							...e,
							currentPage: r
						}
					}
					case he.b:
					case he.f:
						return !e.currentPage || t.payload.postMeta, e;
					case l.c:
						return e;
					case l.e: {
						const {
							allowNavigationCallback: n
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: n
						}
					}
					case l.d:
						return {
							...e, allowNavigationCallback: null
						};
					case w.c:
					case l.a:
					case k.SUBREDDIT_LOADED: {
						const {
							correlationId: n
						} = t.payload;
						return e.currentPage ? {
							...e,
							currentPage: {
								...e.currentPage,
								locationState: {
									...e.currentPage.locationState,
									[op.b.FeedCorrelationId]: n
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const pp = {};
			var fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.k: {
						const {
							pollId: n
						} = t.payload.pollResults, {
							[n]: r,
							...s
						} = e;
						return s
					}
					case i.j: {
						const {
							pollId: n
						} = t.payload, {
							[n]: r,
							...s
						} = e;
						return s
					}
					case i.i: {
						const {
							pollId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const hp = {};
			var bp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								pollId: n
							} = t.payload.pollResults;
							return {
								...e,
								[n]: !1
							}
						}
						case i.i: {
							const {
								pollId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case i.j: {
							const {
								pollId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				yp = Object(J.c)({
					error: fp,
					pending: bp
				}),
				gp = Object(J.c)({
					voting: yp
				}),
				mp = n("./node_modules/lodash/mapValues.js"),
				vp = n.n(mp),
				Ep = n("./src/reddit/reducers/posts/models/helpers.ts");
			const Op = e => {
				const {
					options: t,
					totalVoteCount: n,
					userSelection: r
				} = e;
				return {
					options: t.reduce((e, t) => {
						let {
							id: n,
							voteCount: s
						} = t;
						return {
							...e,
							[n.toString()]: {
								id: n,
								votes: (s || 0).toString(),
								userSelected: n === r
							}
						}
					}, {}),
					totalVotes: n.toString()
				}
			};
			var _p = e => {
					if (!e.pollData) return null;
					const {
						id: t,
						authorId: n,
						belongsTo: r,
						created: s,
						title: a,
						isNSFW: c,
						isSpoiler: o,
						pollData: {
							isPrediction: i,
							options: d,
							resolvedOptionId: l,
							totalStakeAmount: u,
							totalVoteCount: p,
							tournamentId: f,
							userSelection: h,
							userWonAmount: b,
							voteUpdatesRemained: y,
							votingEndTimestamp: g,
							predictionStatus: m
						}
					} = e;
					if (i) {
						return {
							id: t,
							createdAt: s,
							creatorId: n,
							subredditId: r.id,
							endsAt: g,
							voteUpdatesRemained: y,
							postId: t,
							title: a,
							options: d,
							totalVoters: p,
							type: Ms.a.GA,
							isNSFW: c,
							isPrediction: i,
							isSpoiler: o,
							totalStakeAmount: u || 0,
							tournamentId: f,
							userSelection: h,
							userWonAmount: b,
							resolvedOptionId: l,
							predictionStatus: m,
							totalVoteCount: p
						}
					}
					return {
						id: t,
						createdAt: s,
						creatorId: n,
						subredditId: r.id,
						endsAt: g,
						postId: t,
						options: d,
						totalVoters: p,
						type: Ms.a.GA,
						isPrediction: i,
						userSelection: h
					}
				},
				Ip = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Sp = n("./src/reddit/models/Prediction/index.ts");

			function Tp(e, t) {
				let {
					wonAmount: n,
					id: r,
					title: s,
					totalVoteCount: a,
					totalStakeAmount: c,
					status: o,
					selectedOptionId: i,
					...d
				} = e, {
					tournamentId: l,
					subredditId: u,
					creatorId: p
				} = t;
				return {
					id: r,
					isPrediction: !0,
					predictionStatus: o,
					title: s || "",
					creatorId: p,
					tournamentId: l,
					subredditId: u,
					userSelection: i,
					userWonAmount: n,
					postId: r,
					totalStakeAmount: c || 0,
					totalVoteCount: a || 0,
					totalVoters: a || 0,
					...d
				}
			}
			const wp = {};
			var Dp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.h: {
						const {
							poll: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case w.c:
					case k.SUBREDDIT_LOADED:
					case H.i:
					case w.g:
					case he.b:
					case he.f:
					case S.n: {
						const {
							governance: n
						} = t.payload;
						if (n) {
							const t = Object.keys(n).reduce((e, t) => {
								const r = n[t].poll;
								return e[r.id] = r, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const r = vp()(t.payload.posts, Object(Ep.i)([Ep.q])),
							s = {};
						return Object.keys(r).forEach(e => {
							var t, n;
							const a = r[e];
							if (a.pollData && (s[e] = _p(a)), null === (n = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									s[t.id] = Tp(t, {
										tournamentId: e,
										creatorId: a.author,
										createdAt: a.created,
										subredditId: a.belongsTo.id
									})
								})
							}
						}), {
							...e,
							...s
						}
					}
					case S.p:
					case S.o: {
						const {
							pollId: n,
							prediction: {
								options: r,
								selectedOptionId: s,
								totalVoteCount: a,
								...c
							}
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...c,
								userSelection: s,
								options: r.map(t => {
									let {
										id: r,
										redditorStakeAmount: s,
										totalStakeAmount: a,
										voteCount: c
									} = t;
									return {
										...e[n].options.find(e => e.id === r),
										totalStakeAmount: a,
										userStakeAmount: s,
										voteCount: c
									}
								}),
								totalVoters: a
							}
						}
					}
					case S.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return e[n] && Object(Sp.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(Ip.b)(r)
							}
						} : e
					}
					default:
						return e
				}
			};
			const jp = {};
			var Ap = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.k: {
						const {
							[Ms.b.ByVoters]: n, pollId: r
						} = t.payload.pollResults;
						return {
							...e,
							[r]: n
						}
					}
					case i.e: {
						const {
							pollId: n,
							optionId: r,
							options: s
						} = t.payload;
						let a = 0;
						const c = {};
						for (const e of s) a += e.voteCount, c[e.id] = {
							id: "number" == typeof e.id ? e.id : parseInt(e.id),
							userSelected: e.id === r,
							votes: e.voteCount.toString()
						};
						return {
							...e,
							[n]: {
								options: c,
								totalVotes: a.toString()
							}
						}
					}
					case w.c:
					case k.SUBREDDIT_LOADED:
					case H.i:
					case w.g:
					case he.b:
					case he.f: {
						const {
							governance: n,
							posts: r
						} = t.payload;
						if (n) {
							const t = Object.keys(n).reduce((e, t) => {
								const r = n[t],
									{
										[Ms.b.ByVoters]: s,
										pollId: a
									} = r.pollResults;
								return e[a] = s, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const s = Object.keys(r).reduce((e, t) => {
							var n;
							if (!(null === (n = r[t]) || void 0 === n ? void 0 : n.pollData)) return e;
							const s = Op(r[t].pollData);
							return s ? (e[t] = s, e) : e
						}, {});
						return Object.keys(s).length ? {
							...e,
							...s
						} : e
					}
					default:
						return e
				}
			};
			const Cp = {};
			var Pp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								[Ms.b.ByVotingPower]: n, pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: n
							}
						}
						case w.c:
						case k.SUBREDDIT_LOADED:
						case H.i:
						case w.g:
						case he.b:
						case he.f: {
							const {
								governance: n
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t],
										{
											[Ms.b.ByVotingPower]: s,
											pollId: a
										} = r.pollResults;
									return e[a] = s, e
								}, {});
								return {
									...e,
									...t
								}
							}
							return e
						}
						default:
							return e
					}
				},
				Rp = Object(J.c)({
					byVoters: Ap,
					byVotingPower: Pp
				});
			const Np = {};
			var xp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Np,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								pollId: n,
								rewardPoints: r
							} = t.payload.pollResults;
							return r ? {
								...e,
								[n]: r
							} : e
						}
						default:
							return e
					}
				},
				Lp = Object(J.c)({
					api: gp,
					models: Dp,
					results: Rp,
					rewards: xp
				});
			const kp = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Up = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vn.i:
					case Vn.j:
						return {
							...e, reorderError: null
						};
					case Vn.h:
						return {
							...e, reorderError: t.payload
						};
					case Vn.l:
					case Vn.m:
						return {
							...e, updateDescriptionError: null
						};
					case Vn.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Vn.p:
					case Vn.q:
						return {
							...e, updateLayoutError: null
						};
					case Vn.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Mp = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Bp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vn.i:
							return {
								...e, reorderPending: !0
							};
						case Vn.h:
						case Vn.j:
							return {
								...e, reorderPending: !1
							};
						case Vn.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Vn.k:
						case Vn.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Vn.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Vn.o:
						case Vn.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				Fp = Object(J.c)({
					error: Up,
					pending: Bp
				}),
				Gp = n("./src/reddit/helpers/path/index.ts");
			const qp = {},
				Hp = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Gp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var Qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.b:
					case P.f:
					case x.PAGE_LOADED:
					case R.e:
					case R.h:
					case W.b:
					case W.e:
					case L.e:
					case L.b:
					case V.PROFILE_POSTS_LOADED:
					case V.MORE_POSTS_LOADED:
					case k.SUBREDDIT_LOADED:
					case w.c:
					case N.b:
					case k.SUBREDDIT_LOADED:
					case he.b:
					case he.f:
					case kd.j:
					case j.r:
					case w.g:
					case M.e:
					case "RECOMMENDED_POSTS_LOADED":
					case H.i:
					case Ze.e:
					case B.b:
					case ye.c:
					case Vn.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = Hp(r);
							s = vp()(n, e)
						}
						return {
							...e,
							...s
						}
					}
					case Vn.d: {
						const {
							collection: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						const s = n.id;
						let a = n;
						if (r) {
							a = Hp(r)(n)
						}
						return {
							...e,
							[s]: a
						}
					}
					case Vn.g: {
						const {
							collectionId: n,
							postId: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								postIds: s.postIds.filter(e => e !== r)
							}
						} : e
					}
					case Vn.a: {
						const {
							collectionId: n,
							postId: r
						} = t.payload, s = e[n];
						return s && r ? {
							...e,
							[n]: {
								...s,
								postIds: [...s.postIds, r]
							}
						} : e
					}
					case Vn.e: {
						const {
							collectionId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case Vn.s: {
						const {
							collectionId: n,
							newTitle: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								title: r
							}
						} : e
					}
					case Vn.j: {
						const {
							collectionId: n,
							postIds: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								postIds: [...r]
							}
						} : e
					}
					case Vn.m: {
						const {
							collectionId: n,
							newDescription: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								description: r
							}
						} : e
					}
					case Vn.q: {
						const {
							collectionId: n,
							newLayout: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								displayLayout: r
							}
						} : e
					}
					default:
						return e
				}
			};
			const Wp = {};
			var Vp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x.PAGE_LOADED:
						case Vn.f: {
							const {
								collections: n
							} = t.payload;
							if (!n) return e;
							const r = Object.keys(n);
							if (!r.length) return e;
							const {
								subredditId: s
							} = n[r[0]];
							return {
								...e,
								[s]: r
							}
						}
						case Vn.d: {
							const {
								collection: n
							} = t.payload, {
								subredditId: r
							} = n, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n.id]
							}
						}
						case Vn.e: {
							const {
								collectionId: n,
								collection: r
							} = t.payload;
							if (!r) return e;
							const s = r && e[r.subredditId];
							return s ? {
								...e,
								[r.subredditId]: s.filter(e => e !== n)
							} : e
						}
						default:
							return e
					}
				},
				Kp = Object(J.c)({
					models: Qp,
					subredditToIds: Vp,
					api: Fp
				}),
				$p = n("./src/reddit/actions/postFlair.ts"),
				Yp = n("./src/reddit/models/Flair/index.ts");
			const Xp = {},
				zp = {
					displaySettings: {
						isEnabled: !1,
						position: Yp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				Jp = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					return 0 === n.length ? e : n.reduce((e, n) => (e[n] = {
						...zp,
						...e[n],
						...t[n]
					}, e), {
						...e
					})
				};
			var Zp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.b:
						case P.f:
						case x.PAGE_LOADED:
						case w.g:
						case R.e:
						case R.h:
						case j.r:
						case C.b:
						case he.b:
						case he.f:
						case w.c:
						case N.b:
						case ye.c:
						case k.SUBREDDIT_LOADED:
						case W.b:
						case W.e:
						case be.c:
						case be.i:
						case be.e:
						case be.g:
						case M.e:
						case B.b:
						case B.b:
						case L.b:
						case L.e:
						case V.MORE_POSTS_LOADED:
						case V.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ze.e:
						case Ze.e:
						case H.i:
							return Jp(e, t.payload.postFlair);
						case $p.c: {
							const {
								subredditId: n,
								isEnabled: r
							} = t.payload, s = {
								...e[n].displaySettings,
								isEnabled: r
							};
							return {
								...e,
								[n]: {
									...e[n],
									displaySettings: s
								}
							}
						}
						case $p.a: {
							const {
								subredditId: n,
								canAssignOwn: r
							} = t.payload, s = {
								...e[n].permissions,
								canAssignOwn: r
							};
							return {
								...e,
								[n]: {
									...e[n],
									permissions: s
								}
							}
						}
						case $p.f: {
							const {
								subredditId: n,
								template: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: c
							} = s, o = {
								...a,
								[r.id]: r
							}, i = [...c];
							return i.includes(r.id) || i.push(r.id), {
								...e,
								[n]: {
									...s,
									templates: o,
									templateIds: i
								}
							}
						}
						case $p.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: c
							} = s, o = Gr()(a, r), i = c.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: o,
									templateIds: i
								}
							}
						}
						case $p.e:
						case $p.d: {
							const n = t.payload,
								r = e[n.subredditId];
							return {
								...e,
								[n.subredditId]: {
									...r,
									templateIds: n.templateIds
								}
							}
						}
						case fe.i:
						case fe.f:
						case fe.r:
						case fe.u:
						case fe.A: {
							const {
								response: n
							} = t.payload;
							return Jp(e, n.postFlair)
						}
						default:
							return e
					}
				},
				ef = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const tf = {
				pending: !1,
				items: {}
			};
			var nf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ef.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case ef.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var rf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kd.c:
							return t.payload;
						default:
							return e
					}
				},
				sf = n("./src/reddit/actions/embedAndImage.ts");
			const af = {};
			var cf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : af,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sf.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case sf.a: {
							const {
								postId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
					}
					return e
				},
				of = Object(J.c)({
					loadable: cf
				});
			const df = {};
			var lf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : df,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kd.d: {
						const {
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: !e[n]
						}
					}
					default:
						return e
				}
			};
			var uf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kd.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const pf = [];
			var ff = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kd.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case kd.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case kd.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const hf = {};
			var bf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.e:
					case R.h:
					case w.c:
					case k.SUBREDDIT_LOADED:
					case w.g:
					case M.e:
					case "RECOMMENDED_POSTS_LOADED":
					case H.i:
					case Ze.e:
					case ye.c:
						return de()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var yf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kd.a:
							return t.payload;
						default:
							return e
					}
				},
				gf = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const mf = {};
			var vf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gf.a: {
						const n = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const Ef = {};
			var Of = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ef,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.h: {
							const {
								poll: n
							} = t.payload;
							return {
								...e,
								[n.postId]: n.id
							}
						}
						case w.c:
						case k.SUBREDDIT_LOADED:
						case H.i:
						case w.g:
						case he.b:
						case he.f:
						case S.n: {
							const {
								governance: n,
								posts: r
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t];
									return e[t] = r.poll.id, e
								}, {});
								return {
									...e,
									...t
								}
							}
							const s = Object.keys(r).reduce((e, t) => {
								var n, s;
								const a = r[t];
								if ((null == a ? void 0 : a.pollData) && (e[t] = t), null === (s = null === (n = a.predictionTournament) || void 0 === n ? void 0 : n.predictions) || void 0 === s ? void 0 : s.length) {
									const {
										predictions: t
									} = a.predictionTournament;
									t.forEach(t => {
										e[t.id] = t.id
									})
								}
								return e
							}, {});
							return {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				_f = n("./src/reddit/actions/bulkActions/constants.ts"),
				If = n("./src/reddit/actions/constants.ts"),
				Sf = n("./src/reddit/actions/flairManagement/constants.ts"),
				Tf = n("./src/reddit/actions/googleQASchema/constants.ts"),
				wf = n("./src/reddit/actions/happeningNow/constants.ts"),
				Df = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				jf = n("./src/reddit/actions/subredditTopContent.ts"),
				Af = n("./src/reddit/helpers/isPost.ts"),
				Cf = n("./node_modules/lodash/pickBy.js"),
				Pf = n.n(Cf);

			function Rf(e, t) {
				const n = Pf()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !hu()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var Nf = n("./src/reddit/models/Gold/Gild/index.tsx"),
				xf = n("./src/reddit/models/Media/index.ts"),
				Lf = n("./src/reddit/models/ModQueue/index.ts"),
				kf = n("./src/reddit/models/Post/index.ts"),
				Uf = n("./src/reddit/models/Vote/index.ts"),
				Mf = n("./src/reddit/actions/subredditDuplicates.ts");
			const Bf = {};
			var Ff = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						if (Wr(t) === (G.Sb.COMMENTS || G.Sb.DUPLICATES)) {
							const n = Vr(t),
								r = Kr(t);
							if (n && n.instanceId && r && r.partialPostId) {
								const t = n.instanceId,
									s = Object(kf.z)(r.partialPostId);
								if (e[s] && e[t]) return {
									...e,
									[s]: Object(Ep.c)(e[s], e[t])
								}
							}
						}
						return e;
					case he.b:
					case he.f: {
						const n = Object(Ep.h)(t.payload.meta);
						return {
							...e,
							...vp()(t.payload.posts, Object(Ep.i)([n, Ep.d, Ep.o, Ep.p, Ep.q, Object(Ep.a)(e), Object(Ep.b)(e), Object(Ep.l)(e), Object(Ep.m)(e), Object(Ep.k)(e), Object(Ep.j)(e)]))
						}
					}
					case kd.j:
						return Rf(e, t.payload);
					case Mf.a:
						return Rf(e, t.payload.posts);
					case P.b:
					case P.f:
					case x.PAGE_LOADED:
					case D.b:
					case A.b:
					case R.e:
					case R.h:
					case W.b:
					case W.e:
					case L.e:
					case L.b:
					case V.PROFILE_POSTS_LOADED:
					case V.MORE_POSTS_LOADED:
					case k.SUBREDDIT_LOADED:
					case w.c:
					case N.b:
					case C.b:
					case j.r:
					case w.g:
					case M.e:
					case "RECOMMENDED_POSTS_LOADED":
					case Q.o:
					case H.i:
					case B.b:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_LOADED:
					case T.c:
					case T.d:
					case S.n: {
						const n = Object(Ep.h)(t.payload.meta);
						return {
							...e,
							...vp()(t.payload.posts, Object(Ep.i)([n, Ep.d, Ep.o, Ep.p, Ep.q, Object(Ep.n)(e), Object(Ep.l)(e)]))
						}
					}
					case Q.w: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(Ep.h)(t.meta);
							Object.assign(n, vp()(t.posts, Object(Ep.i)([s, Ep.d, Ep.o, Ep.p, Object(Ep.n)(e), Object(Ep.l)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case C.b: {
						const n = Object(Ep.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							...vp()(t.payload.posts, Object(Ep.i)([n, Ep.d, Ep.o, Ep.p, Object(Ep.n)(e), Object(Ep.l)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case ze.e:
					case Ze.e:
					case ye.c: {
						const n = Object(Ep.h)(t.payload.meta),
							r = vp()(t.payload.posts, Object(Ep.i)([n, Ep.o, Ep.d, Ep.p]));
						return de()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case kd.k: {
						const n = t.payload;
						return de()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case If.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(Uf.c)(s, r)
						} : e
					}
					case ue.b:
					case le.N: {
						const n = t.payload.comment.postId,
							r = e[n];
						if (r) {
							const s = void 0 !== t.payload.numComments ? t.payload.numComments : r.numComments + 1;
							return {
								...e,
								[n]: {
									...r,
									numComments: s
								}
							}
						}
						return e
					}
					case kd.h: {
						const {
							postId: n,
							delta: r
						} = t.payload, s = e[n];
						if (s) {
							let t = s.numComments + r;
							return t < 0 && (t = 0), {
								...e,
								[n]: {
									...s,
									numComments: t
								}
							}
						}
						return e
					}
					case kd.i: {
						const {
							postId: n,
							delta: r
						} = t.payload, s = e[n];
						if (s) {
							let t = s.score + r;
							return t < 0 && (t = 0), {
								...e,
								[n]: {
									...s,
									score: t
								}
							}
						}
						return e
					}
					case le.D: {
						const n = t.payload.postId,
							r = e[n];
						return r ? {
							...e,
							[n]: {
								...r,
								numComments: r.numComments - 1
							}
						} : e
					}
					case Ie.rb: {
						const {
							topAwardedPosts: n
						} = t.payload;
						return {
							...e,
							...n.reduce((e, t) => (e[t.post.id] = Object(Ep.i)([Ep.o])(Object(rs.f)(t.post)), e), {})
						}
					}
					case Ie.s: {
						const {
							id: n,
							awardings: r,
							gilder: s,
							treatmentTags: a
						} = t.payload, c = e[n];
						return c ? {
							...e,
							[n]: {
								...Object(Nf.a)(c, r, s),
								treatmentTags: a
							}
						} : e
					}
					case Ie.D: {
						const {
							awardId: n,
							thingId: r
						} = t.payload, s = e[r];
						return s ? {
							...e,
							[r]: Object(Nf.b)(s, n)
						} : e
					}
					case bl.r: {
						const {
							posts: n
						} = t.payload;
						return de()({
							...e
						}, n)
					}
					case fe.i:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A: {
						const {
							response: n
						} = t.payload, {
							posts: r
						} = n;
						return {
							...e,
							...vp()(r, Object(Ep.i)([Ep.o, Ep.p]))
						}
					}
					case _f.b:
					case fe.x: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, c = r.filter(e => Object(Af.a)(e)), o = Object(Lf.d)(e, n, c, s, a);
						return de()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Vn.t: {
						const {
							postId: n,
							collectionId: r
						} = t.payload, s = e[n];
						if (s && r) {
							const t = s.collectionIds || [];
							return t.push(r), {
								...e,
								[n]: {
									...s,
									collectionIds: [...t]
								}
							}
						}
						return e
					}
					case Vn.e: {
						const {
							collectionId: n,
							collection: r
						} = t.payload, s = r && r.postIds || [], a = {};
						return s.forEach(t => {
							const r = e[t],
								s = r && r.collectionIds;
							if (s) {
								const e = s.filter(e => e !== n);
								a[t] = {
									...r,
									collectionIds: e
								}
							}
						}), {
							...e,
							...a
						}
					}
					case Vn.g: {
						const {
							collectionId: n,
							postId: r
						} = t.payload;
						if (!n || !r) return e;
						const s = e[r],
							a = s && s.collectionIds;
						if (!a) return e;
						const c = a.filter(e => e !== n);
						return {
							...e,
							[r]: {
								...s,
								collectionIds: c
							}
						}
					}
					case T.f: {
						const {
							postId: n
						} = t.payload;
						if (!n) return e;
						const r = e[n];
						if (!r || !r.eventInfo) return e;
						const s = r.eventInfo;
						return {
							...e,
							[n]: {
								...r,
								eventInfo: {
									...s,
									eventIsLive: !0
								}
							}
						}
					}
					case T.a: {
						const {
							postId: n,
							eventInfo: r
						} = t.payload;
						if (!n || !r) return e;
						const s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								eventInfo: {
									...r
								}
							}
						} : e
					}
					case io.f: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							...vp()(n.posts, Object(Ep.i)([Ep.o, Ep.p])),
							...e
						} : e
					}
					case Ed.b:
					case be.c:
					case be.i:
					case be.e:
					case be.g:
					case jf.b:
						return {
							...vp()(t.payload.posts, Object(Ep.i)([Ep.o, Ep.p])), ...e
						};
					case kd.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(xf.L)(s.media) ? {
							...e,
							[n]: {
								...s,
								media: {
									...s.media,
									richtextContent: r,
									isRichtextPreview: !1
								}
							}
						} : e
					}
					case Sf.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case Sf.b: {
						const n = t.payload;
						return Object(On.a)(e, n)
					}
					case y.u: {
						const n = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...n
						}
					}
					case Df.b: {
						const {
							altText: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								media: {
									...e[r].media,
									altText: n
								}
							}
						}
					}
					case S.s: {
						const {
							tournamentPostId: n,
							predictionId: r,
							selectedOptionId: s
						} = t.payload;
						if (!e[r] && !e[n]) return e;
						const a = {
							...e
						};
						return a[r] && (a[r] = Object(Ep.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(Ep.f)({
							post: e[n],
							selectedOptionId: s,
							predictionId: r
						})), a
					}
					case S.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return {
							...e,
							[n]: Object(Ep.r)(e[n], Object(Ip.a)(r))
						}
					}
					case Df.a:
						return {
							...e
						};
					case Tf.b: {
						const {
							postId: n,
							isEligibleForQASchema: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								isEligibleForQASchema: r
							}
						}
					}
					case Tf.a:
						return {
							...e
						};
					case y.z:
					case y.w: {
						const n = {};
						for (const e in t.payload) {
							const r = t.payload[e];
							n[r.id] = r
						}
						return {
							...e,
							...n
						}
					}
					case wf.c: {
						const {
							posts: n
						} = t.payload;
						return de()({
							...e
						}, n)
					}
					default:
						return e
				}
			};
			var Gf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kd.g:
							return t.payload;
						default:
							return e
					}
				},
				qf = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const Hf = {};
			var Qf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qf.a: {
						const n = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const Wf = [];
			var Vf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kd.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case w.c:
						case k.SUBREDDIT_LOADED: {
							const {
								recentPostIds: n
							} = t.payload;
							return n && n.length ? n : e
						}
						default:
							return e
					}
				},
				Kf = n("./node_modules/uuid/dist/esm-browser/v4.js");
			const $f = Object(Kf.a)();
			var Yf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case x.PAGE_LOADED:
					case wr.h:
					case wr.a:
					case wr.m:
					case wr.f:
						return Object(Kf.a)();
					default:
						return e
				}
			};
			var Xf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wr.d:
					case wr.o:
					case wr.k:
					case wr.g:
					case wr.a:
					case wr.m:
					case wr.f:
						return null;
					case wr.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case wr.e:
						return "error";
					default:
						return e
				}
			};
			var zf = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wr.g:
						return !0;
					case wr.m:
					case wr.a:
					case wr.f:
					case wr.e:
						return !1;
					default:
						return e
				}
			};
			var Jf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wr.k:
							return !0;
						case wr.j:
						case wr.e:
						case wr.o:
						case wr.d:
							return !1;
						default:
							return e
					}
				},
				Zf = Object(J.c)({
					creationToken: Yf,
					error: Xf,
					pending: zf,
					pendingUpdate: Jf
				});
			const eh = {};
			var th = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wr.c: {
						const {
							subredditId: e,
							id: n
						} = t.payload;
						return {
							subredditId: e,
							scheduledPostId: n
						}
					}
					default:
						return e
				}
			};
			const nh = {
				standalonePosts: {
					POSTS_LOADED: wr.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: wr.o
				},
				recurringPosts: {
					POSTS_LOADED: wr.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: wr.d
				}
			};

			function rh(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case nh[e].POSTS_LOADED:
						case wr.f: {
							const {
								subredditInfoById: t
							} = r.payload, {
								id: s
							} = t, a = t.scheduledPosts[e].models.reduce((e, t) => (e[t.id] = t, e), {});
							return {
								...n,
								[s]: {
									...n[s] || {},
									...a
								}
							}
						}
						case wr.i:
						case wr.l: {
							const {
								subredditId: e,
								scheduledPostId: t
							} = r.payload, s = n[e] || {};
							return {
								...n,
								[e]: {
									...Object.keys(s).filter(e => e !== t).reduce((e, t) => (e[t] = s[t], e), {})
								}
							}
						}
						case wr.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(n).reduce((t, r) => (r !== e && (t[r] = n[r]), t), {})
						}
						case nh[e].MUTATION_SUCCEEDED: {
							let t;
							switch (e) {
								case "recurringPosts":
									t = r.payload.scheduledPost;
									break;
								case "standalonePosts":
								default:
									t = r.payload.scheduledPost
							}
							const s = t.subreddit.id,
								a = n[s][t.id],
								c = {
									[t.id]: {
										...a,
										...t
									}
								};
							return {
								...n,
								[s]: {
									...n[s] || {},
									...c
								}
							}
						}
						default:
							return n
					}
				}
			}
			const sh = {};

			function ah(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sh,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case nh[e].POSTS_LOADED:
						case wr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, {
								pageInfo: a
							} = r.scheduledPosts[e];
							return {
								...t,
								[s]: {
									...a
								}
							}
						}
						case wr.h: {
							const {
								subredditId: e
							} = n.payload;
							return Object.keys(t).reduce((n, r) => (r !== e && (n[r] = t[r]), n), {})
						}
						default:
							return t
					}
				}
			}
			var ch = n("./node_modules/lodash/uniq.js"),
				oh = n.n(ch);
			const ih = {};

			function dh(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ih,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case nh[e].POSTS_LOADED:
						case wr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[nh[e].postIdsKey];
							return {
								...t,
								[s]: oh()([...t[s] || [], ...a])
							}
						}
						case wr.i:
						case wr.l: {
							const {
								subredditId: e,
								scheduledPostId: r
							} = n.payload, s = t[e] || [];
							return {
								...t,
								[e]: s.filter(e => e !== r)
							}
						}
						case wr.h: {
							const {
								subredditId: e
							} = n.payload;
							return {
								...t,
								[e]: []
							}
						}
						default:
							return t
					}
				}
			}
			var lh = Object(J.c)({
					models: rh("recurringPosts"),
					pageInfo: ah("recurringPosts"),
					postOrder: dh("recurringPosts"),
					editModal: th
				}),
				uh = Object(J.c)({
					models: rh("standalonePosts"),
					pageInfo: ah("standalonePosts"),
					postOrder: dh("standalonePosts")
				}),
				ph = Object(J.c)({
					api: Zf,
					standalonePosts: uh,
					recurringPosts: lh
				});
			var fh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.qb:
						return t.payload;
					case Ie.sb:
					case Ie.rb:
						return null;
					default:
						return e
				}
			};
			var hh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.rb:
						case Ie.qb:
							return !1;
						case Ie.sb:
							return !0;
						default:
							return e
					}
				},
				bh = Object(J.c)({
					error: fh,
					pending: hh
				});
			const yh = [];
			var gh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.rb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case Ie.qb:
						case Ie.sb:
							return yh;
						default:
							return e
					}
				},
				mh = Object(J.c)({
					api: bh,
					list: gh
				}),
				vh = n("./src/reddit/actions/video.ts");
			const Eh = {};
			var Oh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.e: {
						const {
							auto: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const _h = {};
			var Ih = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _h,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.a: {
						const {
							postId: n,
							isBuffering: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Sh = {};
			var Th = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.b: {
						const {
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const wh = {};
			var Dh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.c: {
						const {
							postId: n,
							time: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const jh = {
				mutedInFeed: !0
			};
			var Ah = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Ch = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case vh.d:
						return null;
					default:
						return e
				}
			};
			const Ph = {};
			var Rh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ph,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case vh.e: {
						const {
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
				}
				return e
			};
			const Nh = {};
			var xh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.h: {
						const {
							postId: n,
							time: r
						} = t.payload, s = e[n] || {
							cached: !0,
							start: r
						};
						return r < s.start ? e : {
							...e,
							[n]: {
								...s,
								playable: r
							}
						}
					}
					case vh.f: {
						const {
							postId: n,
							time: r
						} = t.payload;
						return {
							...e,
							[n]: {
								cached: !1,
								start: r
							}
						}
					}
					default:
						return e
				}
			};
			const Lh = {};
			var kh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.j: {
						const {
							postId: n,
							metadata: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Uh = {};
			var Mh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case vh.g: {
						const {
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
				}
				return e
			};
			const Bh = {};
			var Fh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vh.i: {
						const {
							postId: n,
							isPlaying: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Gh = {};
			var qh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vh.m: {
							const {
								postId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				Hh = n("./src/reddit/constants/video.ts");
			const Qh = {};
			var Wh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vh.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < Hh.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Vh = Object(J.c)({
					autoPlayed: Oh,
					buffering: Ih,
					consumed: Th,
					continuousViewStartedAt: Dh,
					feed: Ah,
					fullscreen: Ch,
					loadable: Rh,
					loadTimes: xh,
					metadata: kh,
					paused: Mh,
					playing: Fh,
					started: qh,
					time: Wh
				}),
				Kh = Object(J.c)({
					embedAndImage: of ,
					expanded: lf,
					focus: uf,
					followed: ff,
					instances: bf,
					isAnimatingUpvote: yf,
					isTrackingCrossposts: vf,
					metaMap: Of,
					models: Ff,
					modToMemberShare: Gf,
					crowdControl: rf,
					postLevelCrowdControl: Qf,
					recent: Vf,
					scheduledPosts: ph,
					topAwarded: mh,
					video: Vh,
					carousel: nf
				}),
				$h = n("./src/lib/reducers/addAuthentication/index.ts");
			const Yh = {};
			var Xh = Object($h.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case he.b:
						case he.f: {
							const {
								postId: n,
								commentLists: r,
								comments: s
							} = t.payload, a = r[n] && r[n].head;
							return a && s[a.id] && s[a.id].isStickied ? {
								...e,
								[n]: a.id
							} : e
						}
						case le.J: {
							const {
								id: e,
								postId: n
							} = t.payload;
							return {
								[n]: e
							}
						}
						default:
							return e
					}
				}), Yh),
				zh = Object(J.c)({
					data: Xh
				});
			const Jh = {};
			var Zh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.f:
					case u.g: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case u.e: {
						const {
							subredditId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const eb = {};
			var tb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.f: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case u.g:
						case u.e: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				nb = Object(J.c)({
					error: Zh,
					pending: tb
				});
			const rb = {};
			var sb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.d: {
						const {
							product: n
						} = t.payload;
						return {
							...e,
							[n.id]: void 0
						}
					}
					case u.c:
					case d.f:
					case d.g:
					case d.i:
					case d.j: {
						const {
							productId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case u.a:
					case d.d:
					case d.h: {
						const {
							productId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const ab = {};
			var cb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ab,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.c:
						case d.f: {
							const {
								productId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case u.d: {
							const {
								product: n
							} = t.payload;
							return {
								...e,
								[n.id]: !1
							}
						}
						case u.a:
						case d.d:
						case d.g: {
							const {
								productId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ob = Object(J.c)({
					error: sb,
					pending: cb
				}),
				ib = Object(J.c)({
					fetch: nb,
					purchase: ob
				});
			var db = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b:
						return t.payload.productId;
					case r.b:
						return null;
					default:
						return e
				}
			};
			const lb = {};
			var ub = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.i:
						case u.g: {
							const {
								products: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				pb = Object(J.c)({
					api: ib,
					currentlyPurchasing: db,
					models: ub
				});
			const fb = {};
			var hb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.f:
					case W.e:
					case W.c:
					case W.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case W.d:
					case W.a: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const bb = {};
			var yb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.f:
						case W.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case W.e:
						case W.d:
						case W.b:
						case W.a: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				gb = Object(J.c)({
					error: hb,
					pending: yb
				});
			const mb = {};
			var vb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.e: {
							const {
								key: n,
								commentIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case W.b: {
							const {
								key: n,
								commentIds: r
							} = t.payload, s = e[n] || [];
							return {
								...e,
								[n]: s.concat(r)
							}
						}
						default:
							return e
					}
				},
				Eb = n("./src/reddit/actions/comment/list.ts");
			const Ob = {};
			var _b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ob,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eb.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Eb.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Gr()(e, n) : e
					}
					default:
						return e
				}
			};
			const Ib = {};
			var Sb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ib,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {}
						}
					}
					case W.b: {
						const {
							key: n,
							fetchedToken: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: {
								...s,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const Tb = {};
			var wb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.e:
						case W.b: {
							const {
								key: n,
								dist: r,
								token: s
							} = t.payload;
							return s ? {
								...e,
								[n]: {
									dist: r,
									token: s
								}
							} : Object(On.a)(e, n)
						}
						default:
							return e
					}
				},
				Db = Object(J.c)({
					api: gb,
					endMarkers: _b,
					fetchedTokens: Sb,
					commentIds: vb,
					loadMore: wb
				}),
				jb = n("./src/reddit/actions/pages/profileModSettings.ts");
			var Ab = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jb.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Cb = Object(J.c)({
					pending: Ab
				}),
				Pb = Object(J.c)({
					api: Cb
				});
			const Rb = {};
			var Nb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const xb = {};
			var Lb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case be.a:
					case be.d: {
						const {
							listingKey: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case be.b:
					case be.c:
					case be.i:
					case be.f:
					case be.e:
					case be.g: {
						const {
							listingKey: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					default:
						return e
				}
			};
			const kb = {};
			var Ub = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.b:
						case be.f: {
							const {
								listingKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case be.a:
						case be.d:
						case be.c:
						case be.i:
						case be.e:
						case be.g: {
							const {
								listingKey: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Mb = Object(J.c)({
					error: Lb,
					pending: Ub
				});
			const Bb = {};
			var Fb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case be.c:
					case be.i:
					case be.e:
					case be.g: {
						const {
							listingKey: n,
							itemIds: r
						} = t.payload;
						return {
							...e,
							[n]: [...e[n] || [], ...r]
						}
					}
					default:
						return e
				}
			};
			const Gb = {};
			var qb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.i:
						case be.c:
						case be.e:
						case be.g: {
							const {
								pageInfo: n,
								listingKey: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : Gb
						}
						default:
							return e
					}
				},
				Hb = Object(J.c)({
					api: Mb,
					ids: Fb,
					pageInfo: qb
				}),
				Qb = n("./src/reddit/constants/posts.ts");
			const Wb = {};
			var Vb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ye.c:
					case Ze.e:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case mu.l: {
						const n = t.payload;
						return n.profile ? {
							...e,
							[n.profile.id]: n.about
						} : e
					}
					case Ou.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === Qb.a.PROFILE);
						return s.length ? s.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: r
						}, e), {
							...e
						}) : e
					}
					case xn.n: {
						const n = t.payload,
							r = e[n.subredditId];
						if (!r) return e;
						if (r.publicDescription === n.settings.publicDescription) return e;
						const s = {
							...r,
							publicDescription: n.settings.publicDescription
						};
						return {
							...e,
							[n.subredditId]: s
						}
					}
					default:
						return e
				}
			};
			const Kb = {};
			var $b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.b:
					case P.f:
					case w.g:
					case he.b:
					case he.f:
					case w.c:
					case W.b:
					case W.e:
					case be.c:
					case be.i:
					case be.e:
					case be.g:
					case L.b:
					case L.e:
					case V.PROFILE_POSTS_LOADED:
					case B.b:
					case R.e:
					case R.h:
					case j.u:
					case mu.h:
					case C.b:
					case Ze.e:
					case H.i:
					case mu.o:
					case M.b:
					case M.e:
					case ye.c:
					case x.PAGE_LOADED:
					case zn.e:
					case qr.PAGE_LOADED:
					case k.SUBREDDIT_LOADED:
					case N.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ou.c:
						return Object(oe.merge)(e, t.payload.profiles);
					case fe.i:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A:
					case fe.n: {
						const {
							response: n
						} = t.payload, r = n && n.profiles;
						return Object(oe.merge)(e, r)
					}
					case mu.n:
					case mu.l: {
						const {
							profile: n
						} = t.payload;
						return n ? Object(oe.merge)(e, {
							[n.id]: n
						}) : e
					}
					case xn.n: {
						const n = t.payload,
							{
								title: r,
								over18: s
							} = n.settings,
							a = e[n.subredditId];
						return !a || a.title === r && a.isNSFW === s ? e : {
							...e,
							[n.subredditId]: {
								...a,
								id: n.subredditId,
								title: r,
								isNSFW: s
							}
						}
					}
					case xn.l:
					case xn.k: {
						const {
							imageUrl: n,
							key: r,
							subredditId: s
						} = t.payload;
						if ("profileIcon" !== r) return e;
						const a = e[s];
						return a ? {
							...e,
							[s]: {
								...a,
								icon: {
									height: null,
									url: n,
									width: null
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const Yb = {};
			var Xb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mu.c:
						case mu.f: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !0
							}
						}
						case mu.a:
						case mu.b:
						case mu.d:
						case mu.e: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				zb = Object(J.c)({
					pending: Xb
				});
			const Jb = {};
			var Zb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mu.b: {
						const {
							profileName: n,
							data: r
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[(n || "").toLowerCase()]: s
						}
					}
					case mu.e:
					case be.c:
					case be.i:
					case be.e:
					case be.g: {
						const {
							profileName: n,
							moderatedSubredditIds: r
						} = t.payload;
						return r ? {
							...e,
							[n]: [...e[n] || [], ...r]
						} : e
					}
					default:
						return e
				}
			};
			const ey = {};
			var ty = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mu.e: {
							const {
								pageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case be.c:
						case be.i: {
							const {
								moderatedPageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				ny = Object(J.c)({
					api: zb,
					models: Zb,
					pageInfo: ty
				});
			const ry = {};
			var sy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ry,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mu.i: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case mu.g:
						case mu.h: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				ay = Object(J.c)({
					pending: sy
				});
			const cy = {};
			var oy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mu.h: {
							const {
								pageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				iy = Object(J.c)({
					api: ay,
					pageInfo: oy
				}),
				dy = n("./src/reddit/actions/pinnedPost.ts");
			const ly = {};
			var uy = Object($h.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ly,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case dy.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-G.hb)
						}
					}
					case dy.g: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: s.filter(e => e !== n)
						}
					}
					default:
						return e
				}
			}), ly);
			const py = {};
			var fy = Object($h.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : py,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			}), py);
			const hy = {};
			var by = Object($h.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dy.c:
						case dy.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case dy.b:
						case dy.e:
						case dy.d:
						case dy.g: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: s.filter(e => e !== n)
							}
						}
						default:
							return e
					}
				}), hy),
				yy = Object(J.c)({
					data: uy,
					initialData: fy,
					pending: by
				}),
				gy = n("./src/reddit/actions/trophyCase.ts");
			const my = {};
			var vy, Ey, Oy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : my,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gy.a: {
							const {
								profileId: n,
								trophyIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				_y = Object(J.c)({
					about: Vb,
					models: $b,
					moderated: ny,
					multireddits: iy,
					pinnedPosts: yy,
					trophyCases: Oy
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(vy || (vy = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Ey || (Ey = {}));
			var Iy, Sy, Ty;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Iy || (Iy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Sy || (Sy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Ty || (Ty = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Iy || (Iy = {}));
			Object(F.a)("PROMO__SHOW_PROMO"), Object(F.a)("PROMO__HIDE_PROMO");
			const wy = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Dy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "PROMO__SHOW_PROMO": {
							const {
								promoType: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case "PROMO__HIDE_PROMO": {
							const {
								promoType: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				jy = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Ay = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: jy.d,
					viewer_streams_refresh: jy.c,
					viewer_streams_refresh_slop: jy.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Cy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ay,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case jy.x: {
						const n = t.payload.name.toLowerCase();
						return {
							...e,
							isError: !1,
							isPending: !1,
							subreddits: {
								...e.subreddits,
								[n]: {
									...t.payload.config
								}
							}
						}
					}
					case jy.G:
						return {
							...e, isPending: !0
						};
					case jy.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case jy.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var Py = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.L:
						return {
							...e, [jy.b]: t.payload.error
						};
					case jy.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case jy.z: {
						const {
							[jy.b]: t, ...n
						} = e;
						return n
					}
					case jy.y: {
						const {
							[t.payload.model.post.id]: n, ...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const Ry = (e, t, n, r) => ({
				...e,
				[t]: {
					...e[t],
					isPending: n,
					...r && {
						utcTimeStamp: r
					}
				}
			});
			var Ny = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.N:
						return Ry(e, t.payload, !0);
					case jy.O:
						return Ry(e, jy.b, !0);
					case jy.y:
						return Ry(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case jy.z:
						return Ry(e, jy.b, !1, t.payload.utcTimeStamp);
					case jy.M:
						return Ry(e, t.payload.streamId, !1);
					case jy.L:
						return Ry(e, jy.b, !1);
					default:
						return e
				}
			};
			const xy = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var Ly = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jy.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case jy.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case jy.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				ky = Object(J.c)({
					config: Cy,
					error: Py,
					pending: Ny,
					recommendedViewerSubreddits: Ly
				});
			const Uy = {};
			var My = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case jy.F:
						return {
							...e, [t.payload]: {
								level: 0,
								error: !0
							}
						};
					default:
						return e
				}
			};
			const By = {
				cursor: jy.W,
				timestamps: {},
				visitOrder: []
			};
			var Fy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : By,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.P:
						return By;
					case jy.X: {
						const n = t.payload,
							r = e.visitOrder.includes(n) ? e.visitOrder : [...e.visitOrder, n],
							s = r.indexOf(n);
						return r === e.visitOrder && s === e.cursor ? e : {
							...e,
							visitOrder: r,
							cursor: s
						}
					}
					case p.d:
						return Gy(e, t.payload.id);
					case jy.E:
						return Gy(e, t.payload);
					case kd.k: {
						const n = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return qy(e, n)
					}
					case jy.V: {
						const {
							streamId: n,
							timestamp: r
						} = t.payload;
						return {
							...e,
							timestamps: {
								...e.timestamps,
								[n]: r
							}
						}
					}
					default:
						return e
				}
			};
			const Gy = (e, t) => {
					const n = e.visitOrder.indexOf(t);
					if (-1 === n) return e;
					const r = n > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: r
					}
				},
				qy = (e, t) => {
					const n = e.visitOrder[e.cursor],
						r = new Set(t),
						s = e.visitOrder.filter(e => !r.has(e)),
						a = s.indexOf(n),
						c = a > -1 ? a : Math.max(e.cursor - 1, 0);
					return s.length !== e.visitOrder.length ? {
						...e,
						cursor: c,
						visitOrder: s
					} : e
				},
				Hy = {
					ended: [],
					removed: []
				};

			function Qy(e) {
				return [...new Set(e)]
			}
			var Wy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.t:
						return {
							...e, ended: Qy(e.ended.concat(t.payload))
						};
					case jy.u:
						return {
							...e, removed: Qy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const Vy = {};
			var Ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.z:
						const {
							listingName: n, models: r
						} = t.payload;
						if (!n) return e;
						const s = r.map(e => e.post.id),
							a = e[n] || [],
							c = [...new Set([...s, ...a])];
						return {
							...e, [n]: c
						};
					default:
						return e
				}
			};
			const $y = {},
				Yy = (e, t) => {
					const n = Object.keys(e).reduce((t, n) => ({
						...t,
						[n]: {
							...e[n],
							rank: jy.m
						}
					}), {});
					return t.reduce((e, t, n) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: jy.l - n
						}
					}), n)
				},
				Xy = (e, t) => {
					const n = t.post.id,
						r = e[n] ? e[n].rank : jy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: r
						}
					}
				};
			var zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.y:
						return Xy(e, t.payload.model);
					case jy.z:
						return Yy(e, t.payload.models);
					case jy.D: {
						const n = t.payload.streamId,
							r = t.payload.isUnsetting ? -1 : 1,
							s = (t.payload.isUp ? 1 : 0) * r,
							a = (t.payload.isUp ? 0 : 1) * r;
						return {
							...e,
							[n]: {
								...e[n],
								downvotes: e[n].downvotes + a,
								upvotes: e[n].upvotes + s
							}
						}
					}
					default:
						return e
				}
			};
			const Jy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case jy.A:
						return {
							...e, streamPreviews: {
								...e.streamPreviews,
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					default:
						return e
				}
			};
			const eg = {
				reported: []
			};
			var tg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const ng = {
				isIntroFinished: !1
			};
			var rg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ng,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const sg = {
				reportedStreams: []
			};
			var ag = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jy.C:
							return {
								...e, ...t.payload
							};
						case p.d: {
							const n = t.payload.id;
							return e.reportedStreams.includes(n) ? e : {
								...e,
								reportedStreams: [...e.reportedStreams, n]
							}
						}
						default:
							return e
					}
				},
				cg = Object(J.c)({
					api: ky,
					history: Fy,
					hlsStreams: Wy,
					listings: Ky,
					models: zy,
					preloads: Zy,
					reports: tg,
					theaterSettings: rg,
					userSettings: ag,
					automuteLevels: My
				}),
				og = n("./src/reddit/actions/recap/constants.ts");
			const ig = {
				isImageLoading: !1,
				isCardsLoading: !0,
				cardsLoadingError: null,
				cards: [],
				shareCardWasOpened: !1,
				currentCardIndex: 0,
				bannerSeen: !0,
				shouldShowShareModal: !1,
				shouldHideAbilityCardUsername: !1,
				shouldHideAbilityCardAvatar: !1
			};
			var dg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ig,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case og.k:
							return {
								...e, shareCardWasOpened: !e.shareCardWasOpened
							};
						case og.g:
							return {
								...e, isImageLoading: !1
							};
						case og.h:
							return {
								...e, isImageLoading: !0
							};
						case og.f:
							return {
								...e, isCardsLoading: !0
							};
						case og.e: {
							const {
								cards: n
							} = t.payload;
							return {
								...e,
								cards: n,
								isCardsLoading: !1
							}
						}
						case og.d: {
							const {
								error: n
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: n
							}
						}
						case og.i:
							return {
								...e, ...ig
							};
						case og.j: {
							const {
								index: n
							} = t.payload;
							return {
								...e,
								isImageLoading: !1,
								currentCardIndex: n
							}
						}
						case og.c:
							return {
								...e, bannerSeen: t.payload
							};
						case og.l:
							return {
								...e, shouldShowShareModal: !e.shouldShowShareModal
							};
						case og.b:
							return {
								...e, shouldHideAbilityCardUsername: !e.shouldHideAbilityCardUsername
							};
						case og.a:
							return {
								...e, shouldHideAbilityCardAvatar: !e.shouldHideAbilityCardAvatar
							};
						default:
							return e
					}
				},
				lg = n("./src/reddit/actions/recentSubreddits/constants.ts");
			const ug = [],
				pg = (e, t) => hu()(e, t) ? e : t;
			var fg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ug,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.c:
					case q.d:
						return ug;
					case lg.d:
						return pg(e, t.subreddits);
					case lg.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, lg.c)
					}
					case lg.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, lg.c)
					}
					default:
						return e
				}
			};
			const hg = {};
			var bg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "RECOMMENDED_POSTS_LOADED":
							return {
								...e, ...t.payload
							};
						case "RECOMMENDED_POSTS_FAILED":
						default:
							return e
					}
				},
				yg = n("./src/reddit/actions/pages/report/constants.ts");
			var gg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yg.a:
						return t.payload;
					default:
						return e
				}
			};
			var mg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yg.b:
						return t.payload;
					case yg.c:
					case yg.d:
						return !1;
					default:
						return e
				}
			};
			var vg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yg.d:
						return !0;
					case yg.c:
					case yg.b:
						return !1;
					default:
						return e
				}
			};
			var Eg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yg.c:
							return !0;
						case yg.b:
						case yg.d:
							return !1;
						default:
							return e
					}
				},
				Og = Object(J.c)({
					error: mg,
					pending: vg,
					success: Eg
				}),
				_g = n("./src/reddit/actions/reportPageRules/constants.ts");
			const Ig = [];
			var Sg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ig,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _g.a:
							return t.payload;
						default:
							return e
					}
				},
				Tg = Object(J.c)({
					reportPageApi: Og,
					reportPageRules: Sg,
					initialReason: gg
				}),
				wg = n("./src/reddit/actions/reportRules.ts");
			const Dg = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var jg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wg.b:
						return {
							...e, sitewideRules: t.payload
						};
					case wg.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(F.a)("REQUEST_HOST_SET");
			var Ag = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const Cg = "RUN_TIME_ENV_VARS__IS_STAGING",
				Pg = (Object(F.a)(Cg), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var Rg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cg:
						return {
							...e, staging: !0
						};
					default:
						return e
				}
			};
			const Ng = {};
			var xg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ng,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ye.c: {
							const {
								postSort: n,
								success: r,
								key: s
							} = t.payload;
							return n && (null == r ? void 0 : r.posts) ? {
								...e,
								[s]: n
							} : e
						}
						default:
							return e
					}
				},
				Lg = n("./src/reddit/components/SearchDropdown/index.tsx"),
				kg = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				Ug = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const Mg = [Ug.a, kg.b],
				Bg = [Lg.b, Lg.a];
			var Fg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.g:
						return !0;
					case Qo.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = !!Mg.find(e => {
							var t;
							return r && ((null === (t = r.parentElement) || void 0 === t ? void 0 : t.id) === e || r.id === e)
						});
						return !(!!!Bg.find(e => {
							var t;
							return r && (null === (t = document.getElementById(e)) || void 0 === t ? void 0 : t.contains(r))
						}) && !s) && e
					}
					case Ze.f:
					case Qo.a:
					case Qo.c:
						return !1;
					default:
						return e
				}
			};
			const Gg = {},
				qg = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Gp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				},
				Hg = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				Qg = e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				};
			var Wg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const n = qg(t.payload.meta),
								r = vp()(t.payload.searchPosts, Qg([n, Hg]));
							return de()({
								...e
							}, r, (e, t) => ({
								...t,
								...e
							}))
						}
						default:
							return e
					}
				},
				Vg = Object(J.c)({
					models: Wg
				});
			var Kg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ye.c:
					case Ze.j: {
						const {
							searchQuery: e
						} = t.payload;
						return e || ""
					}
					default:
						return e
				}
			};
			const $g = {
					enabled: !1
				},
				Yg = Object.create(null);
			var Xg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Ze.i: {
						const {
							order: n,
							searchQuery: r
						} = t.payload;
						return Object.assign(Object.create(null), e, {
							...e,
							[r.toLowerCase()]: n
						})
					}
					default:
						return e
				}
			};
			const zg = {};
			var Jg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.i:
							return {
								...e, ...t.payload.typeaheadSuggestions
							};
						default:
							return e
					}
				},
				Zg = Object(J.c)({
					idsByQuery: Xg,
					models: Jg
				});
			const em = Object.create(null);
			var tm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Ze.i: {
						const {
							orderByType: n,
							searchQuery: r
						} = t.payload;
						return Object.assign(Object.create(null), e, {
							...e,
							[r.toLowerCase()]: n
						})
					}
					default:
						return e
				}
			};
			const nm = {};
			var rm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.i:
							return {
								...e, ...t.payload.typeaheadByTypeSuggestions
							};
						default:
							return e
					}
				},
				sm = Object(J.c)({
					idsByQuery: tm,
					models: rm
				});
			const am = {};
			var cm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : am,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ye.c: {
							const {
								viewTreatment: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : e
						}
						default:
							return e
					}
				},
				om = Object(J.c)({
					appliedSort: xg,
					isDropdownOpen: Fg,
					posts: Vg,
					searchScope: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $g,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Ze.a:
								return {
									...e, enabled: !1
								};
							case Ze.b:
								return {
									...e, enabled: !0
								};
							case Ze.h:
								return {
									...e, enabled: t.payload.enabled, type: t.payload.type, payload: t.payload.payload
								};
							default:
								return e
						}
					},
					searchQuery: Kg,
					typeahead: Zg,
					typeaheadByType: sm,
					viewTreatment: cm
				}),
				im = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const dm = {};
			var lm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ye.c: {
						const {
							key: n,
							listingOrder: r,
							postOrder: s,
							posts: a,
							searchQuery: c,
							subreddits: o,
							viewTreatment: i
						} = t.payload, d = {
							subredditIcons: [],
							displayText: null,
							subredditOccurrences: 0,
							searchQuery: c
						};
						if (i === im.c.Trending) {
							const e = [];
							if (r && r.map(t => {
									!e.includes(t.id) && o[t.id] && (e.push(t.id), d.subredditIcons.push({
										url: o[t.id].icon.url,
										subredditName: o[t.id].name
									}), d.displayText || (d.displayText = o[t.id].displayText))
								}), s)
								for (let t = 0; t < s.length; t++) {
									const n = a[s[t]],
										r = n && n.belongsTo ? n.belongsTo.id : void 0;
									r && !e.includes(r) && o[r] && (e.push(r), d.subredditIcons.push({
										url: o[r].icon.url,
										subredditName: o[r].name
									}))
								}
							o && (d.subredditOccurrences = Object.keys(o).length - 1)
						}
						return {
							...e,
							[n]: d
						}
					}
					default:
						return e
				}
			};
			const um = {};
			var pm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : um,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ye.c: {
						const {
							key: n,
							searchDiscoveryUnits: r
						} = t.payload;
						return r && Object.keys(r).length ? {
							...e,
							[n]: r
						} : e
					}
					default:
						return e
				}
			};
			const fm = {};
			var hm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ye.c: {
							const {
								key: n,
								searchDiscoveryUnitOrder: r
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : fm
						}
						default:
							return e
					}
				},
				bm = Object(J.c)({
					headerContent: lm,
					models: pm,
					order: hm
				}),
				ym = n("./src/reddit/actions/searchQueryId/index.tsx");
			const gm = {};
			Object(F.a)("SEO__CRAWLER_RECEIVED");
			var mm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				vm = n("./src/reddit/actions/seo/linksModule.ts");
			const Em = {};
			var Om = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Em,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case vm.c:
							return t.payload && t.payload.id && t.payload.data ? {
								...e,
								subreddits: {
									...e.subreddits,
									[t.payload.id]: t.payload.data
								}
							} : e;
						default:
							return e
					}
				},
				_m = n("./src/reddit/actions/seo/topicLinks.ts");
			const Im = {};
			var Sm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Im,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _m.a:
							return t.payload && t.payload.id && t.payload.data ? {
								...e,
								subreddits: {
									...e.subreddits,
									[t.payload.id]: t.payload.data
								}
							} : e;
						default:
							return e
					}
				},
				Tm = Object(J.c)({
					crawler: mm,
					linksModule: Om,
					topicLinks: Sm
				}),
				wm = n("./src/reddit/actions/shortcuts/constants.ts");
			var Dm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wm.a:
						return t.payload;
					case l.b:
						return null;
					default:
						return e
				}
			};
			var jm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wm.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Am = n("./src/reddit/constants/shortcuts.ts"),
				Cm = n("./src/reddit/helpers/history/index.ts");
			const Pm = Am.d.Global,
				Rm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Cm.b)(op.b.IsOverlay) ? Am.d.Lightbox : Am.d.CommentPage;
						case "rpan":
							return Object(Cm.b)(op.b.IsOverlay) ? Am.d.Lightbox : Pm;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Am.d.Listing;
						case "modQueuePages":
							return Am.d.Modqueue;
						default:
							return Pm
					}
				};
			var Nm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return Rm(e)
							}
							return Pm;
						default:
							return e
					}
				},
				xm = Object(J.c)({
					activeCommentId: Dm,
					activePostId: jm,
					namespace: Nm
				});
			var Lm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (e) return e;
					switch (t.type) {
						case y.w:
						case y.x:
							return !0;
						default:
							return e
					}
				},
				km = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Um = Object(J.c)({
					firstFetch: Lm,
					models: km.b
				}),
				Mm = n("./src/reddit/actions/streaming/modSettings.ts");
			var Bm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mm.b:
					case Mm.c:
						return null;
					case Mm.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Fm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mm.b:
							return !0;
						case Mm.c:
						case Mm.a:
							return !1;
						default:
							return e
					}
				},
				Gm = Object(J.c)({
					error: Bm,
					pending: Fm
				}),
				qm = n("./src/reddit/actions/streaming/constants.ts");
			const Hm = {};
			var Qm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qm.a: {
							const {
								subredditId: n,
								modSettings: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Wm = Object(J.c)({
					api: Gm,
					modSettings: Qm
				}),
				Vm = n("./src/reddit/models/StructuredStyles/index.ts");
			const Km = {};
			var $m = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Km,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.h:
						case f.b:
						case f.d:
							return t.payload.styles;
						case f.e:
							return Km;
						case f.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case f.k: {
							const e = t.payload;
							return Object(Vm.h)(e.styles)
						}
						default:
							return e
					}
				},
				Ym = n("./src/reddit/actions/exportImportStyles.ts");
			var Xm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ym.c:
					case Ym.b:
						return null;
					case Ym.a:
						return t.payload;
					default:
						return e
				}
			};
			var zm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ym.c:
							return !0;
						case Ym.b:
						case Ym.a:
							return !1;
						default:
							return e
					}
				},
				Jm = Object(J.c)({
					error: Xm,
					pending: zm
				}),
				Zm = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				ev = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const tv = {};
			var nv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case he.b:
						case he.f:
						case ye.c:
						case Ze.e:
						case x.PAGE_LOADED:
						case qr.PAGE_LOADED: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							const r = n.structuredStyles.data.flairTemplate;
							return {
								...e,
								...r
							}
						}
						case Zm.b: {
							const {
								flairId: n,
								template: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case Zm.a: {
							const {
								flairId: n
							} = t.payload;
							return Object(On.a)(e, n)
						}
						case $p.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(On.a)(e, n)
						}
						case f.k:
							return tv;
						case ev.b: {
							const {
								templates: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				rv = Object(J.c)({
					models: nv
				});
			const sv = {};
			var av = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.f: {
						const n = t.payload;
						return {
							...e,
							[n.imageKey]: n.uploadId
						}
					}
					case f.k:
					case f.e:
						return sv;
					default:
						return e
				}
			};
			var cv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.n:
					case f.e:
						return !1;
					case f.a:
						return !0;
					default:
						return e
				}
			};
			var ov = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.d:
						return t.payload.subredditId;
					case f.e:
						return null;
					case l.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case xn.g:
						return null;
					default:
						return e
				}
			};
			const iv = {};
			var dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case he.b:
						case he.f:
						case x.PAGE_LOADED:
						case qr.PAGE_LOADED: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							const r = Object.keys(n.subredditAboutInfo || {});
							if (1 !== r.length) return e;
							const s = r[0],
								a = n.structuredStyles.data.style;
							return {
								...e,
								[s]: a
							}
						}
						case Ze.e:
						case ye.c: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							if (!n.subredditName) return e;
							let r;
							if (Ca()(n.subreddits, (e, t) => {
									if (e.name.toLowerCase() === n.subredditName.toLowerCase()) return r = t, !1
								}), !r) return e;
							const s = n.structuredStyles.data.style;
							return {
								...e,
								[r]: s
							}
						}
						case f.m: {
							const n = t.payload,
								r = e[n.subredditId];
							return {
								...e,
								[n.subredditId]: {
									...r,
									...n.styles
								}
							}
						}
						case f.h: {
							const n = t.payload;
							return {
								...e,
								[n.subredditId]: n.styles
							}
						}
						case f.k: {
							const n = t.payload,
								r = Object(Vm.h)(n.styles);
							return {
								...e,
								[n.subredditId]: r
							}
						}
						case mu.l: {
							const n = t.payload,
								{
									banner: r,
									profile: s
								} = n;
							if (!r || !s) return e;
							const a = e[s.id];
							return {
								...e,
								[s.id]: {
									...a,
									bannerBackgroundImage: r.url
								}
							}
						}
						case xn.l: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return Rf(e, {
									[n.subredditId]: {
										bannerBackgroundImage: n.imageUrl
									}
								})
							}
							return e
						}
						case xn.k: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return Rf(e, {
									[n.subredditId]: {
										bannerBackgroundImage: void 0
									}
								})
							}
							return e
						}
						default:
							return e
					}
				},
				lv = Object(J.c)({
					draft: $m,
					exportStyles: Jm,
					flairTemplate: rv,
					imagePreviews: av,
					isBladeEditorDirty: cv,
					isEditing: ov,
					models: dv
				});
			Object(F.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var uv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				pv = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const fv = {};
			var hv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pv.c:
					case pv.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case pv.a: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const bv = {};
			var yv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pv.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case pv.b:
						case pv.a: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				gv = Object(J.c)({
					error: hv,
					pending: yv
				});
			const mv = {};
			var vv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pv.b: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: t.payload
							}
						}
						default:
							return e
					}
				},
				Ev = Object(J.c)({
					api: gv,
					models: vv
				}),
				Ov = n("./src/reddit/actions/category/constants.ts"),
				_v = n("./src/reddit/actions/subredditMention/constants.ts");
			const Iv = {};
			var Sv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _v.d:
					case he.b:
					case he.f:
					case ye.c:
					case k.SUBREDDIT_FAILED:
					case k.SUBREDDIT_LOADED:
					case x.PAGE_LOADED:
					case qr.PAGE_LOADED:
					case W.b:
					case W.e:
					case L.b:
					case L.a:
					case L.e:
					case L.d:
					case V.PROFILE_POSTS_LOADED:
					case M.b:
					case M.e:
					case Ze.e:
					case U.TOPIC_DATA_LOADED:
					case Q.z: {
						const n = t.payload.subredditAboutInfo;
						if (!n) return e;
						const r = Object.keys(n);
						return 0 === r.length ? e : r.reduce((e, t) => (n[t] && (e[t] ? e[t] = {
							...e[t],
							...n[t],
							allowedPostTypes: {
								...e[t].allowedPostTypes,
								...n[t].allowedPostTypes
							}
						} : e[t] = n[t]), e), {
							...e
						})
					}
					case lc.a: {
						const {
							subredditId: n,
							emojisEnabled: r
						} = t.payload, s = {
							...e[n],
							emojisEnabled: r
						};
						return {
							...e,
							[n]: s
						}
					}
					case Ou.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === Qb.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(oe.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case io.f:
					case Ov.f:
					case Q.l:
					case Q.t:
					case ur.B: {
						const {
							subredditsAboutInfo: n
						} = t.payload;
						if (!n) return e;
						const r = Object.keys(n);
						return 0 === r.length ? e : r.reduce((e, t) => (n[t] && (e[t] = e[t] ? {
							...e[t],
							...n[t]
						} : n[t]), e), {
							...e
						})
					}
					case H.c: {
						const {
							data: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case pv.b: {
						const {
							subreddits: n
						} = t.payload, r = n.reduce((e, t) => (t.allowedPostTypes && (e[t.id] = {
							allowedPostTypes: t.allowedPostTypes
						}), e), {});
						return Object(oe.merge)(e, r)
					}
					case Ie.s: {
						const {
							subredditId: n,
							subredditCoins: r
						} = t.payload;
						if (!n || !r) return e;
						const s = e[n];
						if (!s) return e;
						const a = {
							...s,
							coins: r
						};
						return {
							...e,
							[n]: a
						}
					}
					default:
						return e
				}
			};
			const Tv = {};
			var wv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.b:
					case H.c: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case H.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: r
						}
					}
					default:
						return e
				}
			};
			var Dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.b:
							return !0;
						case H.c:
						case H.a:
							return !1;
						default:
							return e
					}
				},
				jv = Object(J.c)({
					error: wv,
					pending: Dv
				}),
				Av = n("./src/reddit/actions/subredditCreation.ts");
			const Cv = {
				apiError: null
			};
			var Pv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Av.b: {
						const {
							error: n
						} = t.payload;
						return {
							...e,
							apiError: n
						}
					}
					case Av.a:
					case Av.c:
					case Av.e:
						return Cv;
					default:
						return e
				}
			};
			var Rv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Av.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case Av.a:
					case Av.c:
					case Av.e:
						return null;
					default:
						return e
				}
			};
			var Nv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Av.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case Av.c:
					case Av.b:
						return null;
					default:
						return e
				}
			};
			var xv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Av.c:
							return !0;
						case Av.e:
						case Av.b:
							return !1;
						default:
							return e
					}
				},
				Lv = Object(J.c)({
					error: Pv,
					lastCreatedSubredditId: Nv,
					initialCrosspost: Rv,
					pending: xv
				});
			var kv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Q.B:
							return !0;
						case Q.C:
						case Q.A:
							return !1;
						default:
							return e
					}
				},
				Uv = Object(J.c)({
					pending: kv
				});
			const Mv = {};
			var Bv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.l:
					case H.m: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case H.k: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: r
						}
					}
					default:
						return e
				}
			};
			const Fv = {};
			var Gv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.l: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case H.m:
						case H.k: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				qv = Object(J.c)({
					error: Bv,
					pending: Gv
				});
			const Hv = {};
			var Qv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Q.k:
						case Q.l:
							return {
								...e, [t.payload.key]: !1
							};
						case Q.m:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				Wv = Object(J.c)({
					pending: Qv
				});
			var Vv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.U:
						return t.payload || null;
					case Ie.W:
					case Ie.V:
						return null;
					default:
						return e
				}
			};
			var Kv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.W:
							return !0;
						case Ie.V:
						case Ie.U:
							return !1;
						default:
							return e
					}
				},
				$v = Object(J.c)({
					error: Vv,
					pending: Kv
				});
			var Yv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.p: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Q.r:
					case Q.q:
						return null;
					default:
						return e
				}
			};
			var Xv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Q.r:
							return !0;
						case Q.q:
						case Q.p:
							return !1;
						default:
							return e
					}
				},
				zv = Object(J.c)({
					error: Yv,
					pending: Xv
				}),
				Jv = n("./src/reddit/actions/subredditRules/constants.ts");
			var Zv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jv.c:
							return !0;
						case Jv.a:
						case Jv.b:
							return !1;
						default:
							return e
					}
				},
				eE = n("./src/reddit/actions/subredditSettings.ts");
			var tE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eE.e:
							return !0;
						case eE.f:
						case eE.d:
							return !1;
						default:
							return e
					}
				},
				nE = Object(J.c)({
					pending: tE
				});
			const rE = {};
			var sE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Q.s:
						case Q.t:
							return {
								...e, [t.payload.key]: !1
							};
						case Q.u:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				aE = Object(J.c)({
					pending: sE
				}),
				cE = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const oE = {};
			var iE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cE.c:
					case cE.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case cE.a: {
						const n = t.payload,
							{
								options: r,
								error: s
							} = n,
							{
								subredditName: a
							} = r;
						return {
							...e,
							[a.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			const dE = {};
			var lE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cE.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case cE.b:
						case cE.a: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				uE = Object(J.c)({
					error: iE,
					pending: lE
				});
			const pE = {};
			var fE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jf.c:
					case jf.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case jf.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: r
						}
					}
					default:
						return e
				}
			};
			const hE = {};
			var bE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jf.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case jf.b:
						case jf.a: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				yE = Object(J.c)({
					error: fE,
					pending: bE
				}),
				gE = Object(J.c)({
					about: jv,
					create: Lv,
					inlineEditing: Uv,
					models: qv,
					onboarding: Wv,
					productOffers: $v,
					rankings: zv,
					rules: Zv,
					settings: nE,
					similar: aE,
					topContent: yE,
					wiki: uE
				}),
				mE = n("./node_modules/lodash/isNil.js"),
				vE = n.n(mE);
			const EE = {};
			var OE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: vE()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				_E = Object(J.c)({
					meta: OE
				});
			const IE = {};
			var SE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ov.f: {
						const {
							categoryId: n,
							subredditIds: r
						} = t.payload;
						return wa()(r) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const TE = {
				pending: !1,
				items: {}
			};
			var wE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ef.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case ef.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const DE = {};
			var jE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.c: {
							const {
								communityInfo: n,
								id: r,
								type: s
							} = t.payload;
							return n && "subreddit" === s ? {
								...e,
								[r]: n
							} : e
						}
						default:
							return e
					}
				},
				AE = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const CE = {};
			var PE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case AE.b:
						case AE.c:
						case AE.a: {
							const {
								subredditId: n,
								subredditCountrySite: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				RE = n("./src/reddit/actions/subredditCrosspostable.ts");
			var NE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case RE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case RE.c:
					case RE.b:
						return null;
					default:
						return e
				}
			};
			var xE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case RE.c:
							return !0;
						case RE.b:
						case RE.a:
							return !1;
						default:
							return e
					}
				},
				LE = Object(J.c)({
					errors: NE,
					pending: xE
				});
			const kE = {};
			var UE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case RE.b: {
							const {
								subredditIds: n
							} = t.payload;
							return hu()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				ME = Object(J.c)({
					api: LE,
					ids: UE
				});
			const BE = {};
			var FE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mf.a: {
							const n = t.payload,
								{
									subredditId: r,
									distinguishKey: s,
									postIds: a
								} = n;
							if (!(r in e)) return {
								...e,
								[r]: {
									[s]: a
								}
							};
							const c = e[r];
							return Rf(c, {
								[s]: a
							}) === c ? e : {
								...e,
								[r]: {
									...c,
									[s]: a
								}
							}
						}
						default:
							return e
					}
				},
				GE = Object(J.c)({
					models: FE
				});
			const qE = {};
			var HE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							assets: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case d.g:
					case d.j: {
						const {
							subredditId: n,
							mainHeader: r
						} = t.payload, s = e[n] || {};
						return {
							...e,
							[n]: {
								...s,
								mainHeader: r
							}
						}
					}
					default:
						return e
				}
			};
			const QE = {};
			var WE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: t.payload
						}
					}
					case o.i: {
						const {
							communityRaw: n,
							subredditId: r
						} = t.payload;
						return n ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const VE = {};
			var KE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							subredditId: n,
							distribution: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const $E = {};
			var YE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.p: {
							const {
								subredditId: n,
								releaseNotes: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				XE = Object(J.c)({
					assets: HE,
					communityRaw: WE,
					distributions: KE,
					releaseNotes: YE
				}),
				zE = n("./node_modules/lodash/isEqualWith.js"),
				JE = n.n(zE),
				ZE = n("./src/lib/forceHttps/index.ts");
			const eO = {},
				tO = (e, t) => {
					const n = Object.keys(t);
					return n.length ? n.reduce((n, r) => {
						const s = e[r],
							a = t[r],
							c = s ? {
								...s,
								...a
							} : {
								...a
							};
						return a.icon.url ? c.icon.url = Object(ZE.a)(a.icon.url) : s && s.icon.url ? c.icon = s.icon : c.icon.url = "", s && s.allowChatPostCreation && (c.allowChatPostCreation = !0), s && s.devPlatformMetadata && (c.devPlatformMetadata = s.devPlatformMetadata), Object(oe.set)(n, r, c)
					}, e) : e
				},
				nO = (e, t) => {
					return !JE()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				rO = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					for (let s = 0; s < n.length; s++) {
						const a = n[s],
							c = e[a],
							o = t[a];
						c && !nO(c, o) || (r[a] = {
							...c,
							...o
						})
					}
					return Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var sO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ou.c:
						return tO(e, t.payload.subreddits || {});
					case P.b:
					case P.f:
					case lg.b:
					case _v.d:
					case Ov.f:
					case w.g:
					case io.f:
					case D.b:
					case A.b:
					case R.e:
					case R.h:
					case fe.n:
					case j.r:
					case j.u:
					case mu.h:
					case C.b:
					case he.b:
					case he.f:
					case w.c:
					case N.b:
					case W.b:
					case W.e:
					case be.c:
					case be.i:
					case be.e:
					case be.g:
					case L.b:
					case L.e:
					case V.MORE_POSTS_LOADED:
					case V.PROFILE_POSTS_LOADED:
					case mu.e:
					case ye.c:
					case k.SUBREDDIT_LOADED:
					case x.PAGE_LOADED:
					case zn.e:
					case qr.PAGE_LOADED:
					case mu.o:
					case M.b:
					case M.e:
					case B.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ze.e:
					case H.c:
					case H.f:
					case H.i:
					case Q.a:
					case Q.l:
					case Q.t:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_LOADED:
					case ur.B:
						return rO(e, t.payload.subreddits || {});
					case fe.f:
					case fe.i:
					case fe.r:
					case fe.u:
					case fe.A: {
						const {
							response: n
						} = t.payload, {
							subreddits: r
						} = n;
						return rO(e, r)
					}
					case j.B: {
						const {
							subreddits: n
						} = t.payload;
						return {
							...n,
							...e
						}
					}
					case o.g: {
						const n = t.payload;
						return rO(e, n)
					}
					case f.m: {
						const n = t.payload,
							{
								subredditId: r,
								styles: s
							} = n;
						return "communityIcon" in s && e[r] && "string" == typeof s.communityIcon ? {
							...e,
							[r]: {
								...e[r],
								communityIcon: s.communityIcon
							}
						} : e
					}
					case eE.f: {
						const {
							settings: n
						} = t.payload, {
							subredditId: r,
							title: s
						} = n;
						return e[r] && void 0 !== s ? {
							...e,
							[r]: {
								...e[r],
								title: s
							}
						} : e
					}
					case fe.l: {
						const {
							subreddit: n
						} = t.payload;
						return {
							...e,
							[n.id]: {
								...e[n.id],
								...n
							}
						}
					}
					case pv.b: {
						const n = t.payload,
							{
								subreddits: r
							} = n,
							s = {};
						for (const e of r) s[e.id] = {
							id: e.id,
							communityIcon: e.communityIcon,
							icon: {
								url: e.icon || e.communityIcon,
								width: null,
								height: null
							},
							isNSFW: e.isNsfw,
							name: e.name,
							primaryColor: e.primaryColor,
							subscribers: e.subscribers
						};
						return Object(oe.merge)(e, s)
					}
					case wf.c: {
						const {
							subreddits: n
						} = t.payload;
						return rO(e, n)
					}
					default:
						return e
				}
			};
			var aO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case H.g:
					case H.f:
						return null;
					default:
						return e
				}
			};
			var cO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.g:
					case H.f:
						return !0;
					case H.e:
						return !1;
					default:
						return e
				}
			};
			var oO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.g:
							return !0;
						case H.f:
						case H.e:
							return !1;
						default:
							return e
					}
				},
				iO = Object(J.c)({
					errors: aO,
					fetched: cO,
					pending: oO
				});
			var dO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.f: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						default:
							return e
					}
				},
				lO = Object(J.c)({
					api: iO,
					order: dO
				});
			const uO = e => {
					var t, n, r, s;
					return (null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url) || (null === (n = null == e ? void 0 : e.styles) || void 0 === n ? void 0 : n.icon) || (null === (s = null === (r = null == e ? void 0 : e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === s ? void 0 : s.url)
				},
				pO = e => ({
					icon_img: uO(e),
					id: e.id,
					name: e.name
				}),
				fO = e => e.map(pO),
				hO = {
					ids: [],
					subreddits: []
				};
			var bO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.f:
						const n = fO(t.payload);
						return {
							subreddits: [...e.subreddits, ...n], ids: [...e.ids, ...n.map(e => e.id)]
						};
					case Q.g:
						const r = e.ids.filter(e => e !== t.payload),
							s = e.subreddits.filter(e => e.id !== t.payload);
						return {
							...e, subreddits: s, ids: r
						};
					case Q.i:
						const a = t.payload.nodes,
							c = a.map(e => e.id);
						return {
							subreddits: fO(a), ids: c
						};
					default:
						return e
				}
			};
			const yO = {};
			var gO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eE.a: {
						const n = t.payload;
						return Object(oe.merge)(e, n)
					}
					case eE.b: {
						const {
							subredditId: n,
							notificationSettings: r
						} = t.payload;
						return Object(oe.merge)(e, {
							[n]: r
						})
					}
					default:
						return e
				}
			};
			const mO = {};
			var vO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.l: {
						const {
							key: n,
							subredditIds: r
						} = t.payload;
						return 0 === r.length ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const EO = {};
			var OO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.nb: {
						const {
							recentSupporters: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const _O = {};
			var IO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.ob:
					case Ie.nb: {
						const {
							powerups: n,
							subredditId: r
						} = t.payload;
						let s = null;
						if (n) {
							const {
								mediaPacks: e,
								...t
							} = n;
							s = t
						}
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const SO = {},
				TO = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = Va(n, t),
						c = [...s, a];
					return {
						...e,
						[t]: {
							...r,
							emotes: c
						}
					}
				},
				wO = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = s.filter(e => e.id !== n);
					return {
						...e,
						[t]: {
							...r,
							emotes: a
						}
					}
				};
			var DO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.jb: {
							const {
								customEmojisStatus: n,
								customEmojis: r,
								subredditId: s
							} = t.payload, {
								isEnabled: a
							} = n, {
								mediaPacks: c
							} = r;
							return {
								...e,
								[s]: {
									...e[s],
									...Ka(c),
									isEnabled: a
								}
							}
						}
						case Ie.nb: {
							const {
								powerups: n,
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...Ka(null == n ? void 0 : n.mediaPacks)
								}
							}
						}
						case Wa.b: {
							const {
								subredditId: n,
								emoji: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: TO(s, n, r)
							}
						}
						case Wa.c: {
							const {
								subredditId: n,
								emojiId: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: wO(s, n, r)
							}
						}
						default:
							return e
					}
				},
				jO = n("./src/lib/makeProductOfferKey/index.ts");
			const AO = {};
			var CO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.V:
					case Ie.nb: {
						const {
							subredditId: n,
							productOffers: r
						} = t.payload;
						if (!(null == r ? void 0 : r.length)) return e;
						const s = r.reduce((e, t) => {
							const r = Object(jO.a)(t.type, n);
							return e[r] = e[r] ? [...e[r], t] : [t], e
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			const PO = {};
			var RO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.g: {
							const {
								subredditId: n,
								products: r
							} = t.payload, s = Object.keys(r).reduce((e, t) => (e[t] = !0, e), {});
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				NO = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const xO = {},
				LO = e => e.filter(e => {
					let {
						id: t
					} = e;
					return "invite_contributor" !== t
				}).filter(e => {
					let {
						buttons: t
					} = e;
					return t.every(e => {
						let {
							__typename: t
						} = e;
						return NO.e.includes(t)
					})
				});
			var kO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.D: {
						const {
							id: n,
							progressModule: r
						} = t.payload;
						if (!r) {
							const t = {
								...e
							};
							return delete t[n], t
						}
						const s = LO(r.cards);
						return {
							...e,
							[n]: {
								...r,
								cards: s
							}
						}
					}
					default:
						return e
				}
			};
			const UO = {};
			var MO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case Q.D: {
						const {
							id: n,
							questions: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case w.g:
					case w.c: {
						const {
							subreddits: r
						} = t.payload, s = {};
						for (const e of Object.keys(r)) {
							const t = r[e];
							((null === (n = t.answerableQuestions) || void 0 === n ? void 0 : n.length) || 0) > 0 && (s[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(s).length ? e : Object(oe.assign)(e, s)
					}
					case Q.d: {
						const {
							subredditId: n,
							questionId: s
						} = t.payload, a = null !== (r = e[n]) && void 0 !== r ? r : [];
						return Object(oe.setIn)(e, [n], a.filter(e => e.id !== s))
					}
					case Q.e:
						return UO;
					default:
						return e
				}
			};
			const BO = {};
			var FO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.b: {
						const {
							categoryRankingsKey: n
						} = t.payload, r = e[n], s = r && r.length ? [...r, ...t.payload.rankings] : t.payload.rankings;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const GO = {};
			var qO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Q.c: {
							const {
								categoryRankingsKey: n,
								pageInfo: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				HO = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const QO = {};
			var WO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case HO.a: {
						const {
							subredditId: n,
							relatedSubreddits: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const VO = {};
			var KO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jv.b: {
						const {
							rules: n,
							subredditId: r
						} = t.payload, s = {
							[r]: {
								rules: n.rules
							}
						};
						return {
							...e,
							...s
						}
					}
					case Jv.e: {
						const {
							rules: n,
							subredditId: r
						} = t.payload, s = {
							[r]: {
								rules: [...e[r].rules, ...n.rules]
							}
						};
						return {
							...e,
							...s
						}
					}
					case Jv.f: {
						const {
							rules: n,
							subredditId: r,
							oldName: s
						} = t.payload;
						n.rules.shortName !== s && (e[r].rules = e[r].rules.filter(e => e.shortName !== s));
						const a = {
							[r]: {
								rules: [...n.rules, ...e[r].rules]
							}
						};
						return a[r].rules.sort((e, t) => e.priority - t.priority), {
							...e,
							...a
						}
					}
					case Jv.g:
					case Jv.d: {
						const {
							rules: n,
							subredditId: r
						} = t.payload, s = {
							[r]: {
								rules: n.rules
							}
						};
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			const $O = {};
			var YO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eE.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case eE.f: {
						const n = t.payload.settings,
							r = e[n.subredditId] || {};
						return {
							...e,
							[n.subredditId]: {
								...r,
								...n
							}
						}
					}
					case xn.n: {
						const n = t.payload,
							r = {
								...e[n.subredditId] || {},
								...n.settings
							};
						return {
							...e,
							[n.subredditId]: r
						}
					}
					default:
						return e
				}
			};
			const XO = {};
			var zO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.t: {
						const {
							key: n,
							subredditIds: r
						} = t.payload;
						return 0 === r.length ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const JO = {};
			var ZO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.D: {
						const {
							id: n,
							survey: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Q.E: {
						const {
							id: n,
							response: r
						} = t.payload, s = Object(oe.setIn)(e, [n, "response"], r);
						return Object(oe.setIn)(s, [n, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const e_ = {};
			var t_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case io.f: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case jf.b: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const n_ = [];
			var r_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case w.c:
					case k.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: n
						} = t.payload;
						return n && n.length ? n : e
					}
					default:
						return e
				}
			};
			const s_ = {};
			var a_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _v.d:
						case ur.B:
							const {
								unavailableSubreddits: n
							} = t.payload;
							return {
								...e, ...n
							};
						default:
							return e
					}
				},
				c_ = Object(J.c)({
					about: Sv,
					api: gE,
					appliedFilters: _E,
					byCategory: SE,
					carousel: wE,
					communityInfo: jE,
					countrySiteSettings: PE,
					crosspostable: ME,
					duplicates: GE,
					gov: XE,
					models: sO,
					moderated: lO,
					notificationSettings: gO,
					onboarding: vO,
					powerupRecentSupporters: OO,
					powerups: IO,
					powerupsEmojis: DO,
					productOffers: CO,
					products: RO,
					progressModule: kO,
					questions: MO,
					rankings: FO,
					rankingsPageInfo: qO,
					related: WO,
					rules: KO,
					settings: YO,
					similar: zO,
					mutedSubreddits: bO,
					survey: ZO,
					topContent: t_,
					trending: r_,
					unavailableModels: a_
				});
			const o_ = {};
			var i_ = Object($h.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED: {
							const {
								postIds: n,
								posts: r
							} = t.payload, s = n.slice(0, 2).reduce((e, t) => {
								if (r[t].isStickied) {
									const n = r[t].belongsTo.id;
									e[n] ? e[n].push(t) : e[n] = [t]
								}
								return e
							}, {});
							return Ke()({
								...e
							}, s)
						}
						case kd.o: {
							const {
								newStickiedPostList: n,
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				}), o_),
				d_ = Object(J.c)({
					data: i_
				}),
				l_ = n("./node_modules/lodash/values.js"),
				u_ = n.n(l_);
			const p_ = [];
			var f_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ou.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = gu(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case j.u: {
						const {
							multireddits: e
						} = t.payload;
						return u_()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Ou.e: {
						const {
							follow: n,
							multiredditPath: r
						} = t.payload;
						return n ? e : e.filter(e => e !== r)
					}
					case j.j: {
						const n = t.payload;
						return e.filter(e => e !== n)
					}
					default:
						return e
				}
			};
			var h_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ou.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Ou.b:
					case Ou.c:
						return null;
					default:
						return e
				}
			};
			var b_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ou.b:
					case Ou.c:
						return !0;
					case Ou.a:
						return !1;
					default:
						return e
				}
			};
			var y_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ou.b:
							return !0;
						case Ou.c:
						case Ou.a:
							return !1;
						default:
							return e
					}
				},
				g_ = Object(J.c)({
					errors: h_,
					fetched: b_,
					pending: y_
				});
			const m_ = [];
			var v_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ou.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case Ou.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: c
						} = r;
						if (c !== Qb.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (n) {
							const e = gu(o, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Ou.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Qb.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const E_ = [];
			var O_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ou.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case Ou.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: c
						} = r;
						if (c !== Qb.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (n) {
							const e = gu(o, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Ou.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Qb.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const __ = [],
				I_ = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var S_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : __,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.u: {
							const {
								multireddits: n
							} = t.payload, r = u_()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(I_(n));
							return hu()(e, r) ? e : r
						}
						case N.b: {
							const {
								account: n,
								multireddits: r,
								multiredditsByUser: s,
								multiredditsModelsState: a
							} = t.payload;
							if (!n) return e;
							const c = s[n.id];
							if (!c || !c.length) return e;
							const o = {
									...a,
									...r
								},
								i = yu()(e, c).sort(I_(o));
							return hu()(e, i) ? e : i
						}
						case Ou.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(I_(s)) : e.filter(e => e !== r)
						}
						case j.j: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						case j.g:
						case j.m: {
							const {
								multireddit: n,
								multiredditsModelsState: r
							} = t.payload, s = {
								...r,
								[n.url]: n
							};
							return [...e, n.url].sort(I_(s))
						}
						default:
							return e
					}
				},
				T_ = n("./node_modules/lodash/difference.js"),
				w_ = n.n(T_);
			const D_ = [];
			var j_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mu.p: {
						const {
							profileOrder: n
						} = t.payload;
						return oh()([...e, ...n])
					}
					case Ou.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case Ou.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === Qb.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return s ? oh()([...e, ...c]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : w_()(e, c)
					}
					default:
						return e
				}
			};
			const A_ = [];
			var C_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mu.p: {
							const {
								subredditOrder: n
							} = t.payload;
							return oh()([...e, ...n])
						}
						case Ou.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case Ou.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === Qb.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return s ? oh()([...e, ...c]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : w_()(e, c)
						}
						default:
							return e
					}
				},
				P_ = Object(J.c)({
					api: g_,
					favoriteMultiOrder: f_,
					favoriteProfileOrder: v_,
					favoriteSubredditOrder: O_,
					multiredditOrder: S_,
					profileOrder: j_,
					subredditOrder: C_
				}),
				R_ = n("./src/reddit/actions/survey/constants.ts");
			var N_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R_.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var x_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R_.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var L_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R_.b:
						return !e;
					default:
						return e
				}
			};
			var k_ = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R_.i:
						return !e;
					default:
						return e
				}
			};
			var U_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R_.m:
							return t.payload || "";
						default:
							return e
					}
				},
				M_ = Object(J.c)({
					activeDemoTrigger: N_,
					demoTriggerThreshold: x_,
					isDemoEnabled: L_,
					isSampleFactorEnabled: k_,
					surveyNameCalledImmediately: U_
				});
			var B_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zt.a:
							const {
								hasUnreadMessages: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				F_ = n("./src/reddit/actions/tags/constants.ts");
			const G_ = {
				pending: !1,
				error: !1
			};
			var q_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F_.l:
						return {
							...e, pending: !0
						};
					case F_.m:
						return {
							error: !1, pending: !1
						};
					case F_.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const H_ = {
				pending: !1,
				error: !1
			};
			var Q_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F_.o:
						return {
							...e, pending: !0
						};
					case F_.p:
						return {
							error: !1, pending: !1
						};
					case F_.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const W_ = {
				pending: !1,
				error: !1
			};
			var V_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F_.t:
						return {
							...e, pending: !0
						};
					case F_.s:
					case F_.r:
					case F_.e:
					case F_.j:
						return {
							error: !1, pending: !1
						};
					case F_.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const K_ = {
				pending: !1,
				error: !1
			};
			var $_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F_.v:
						return {
							...e, pending: !0
						};
					case F_.w:
						return {
							error: !1, pending: !1
						};
					case F_.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Y_ = {
				pending: !1,
				error: !1
			};
			var X_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F_.g:
							return {
								...e, pending: !0
							};
						case F_.h:
							return {
								error: !1, pending: !1
							};
						case F_.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				z_ = Object(J.c)({
					create: q_,
					deleteTag: Q_,
					fetch: V_,
					update: $_,
					updatePrimaryTag: X_
				});
			const J_ = {
				global: [],
				recommendedGlobal: []
			};
			var Z_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F_.w:
						case F_.r:
						case F_.e:
						case F_.j: {
							const {
								globalSubredditTags: e
							} = t.payload, n = Object.keys(e), r = n.filter(t => e[t].isRecommended);
							return {
								global: n,
								recommendedGlobal: r
							}
						}
						default:
							return e
					}
				},
				eI = n("./node_modules/lodash/uniqWith.js"),
				tI = n.n(eI),
				nI = n("./src/reddit/models/Option/index.ts");
			const rI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var sI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F_.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: tI()([...e.selectedOptions || [], {
									...n
								}], nI.a)
							}
						}
						case F_.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(nI.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case F_.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case F_.a: {
							const {
								primaryTagId: n
							} = t.payload, r = e.selectedOptions.findIndex(e => e.id === n), s = [...e.selectedOptions];
							return r >= 0 && s.splice(r, 1), {
								...e,
								selectedPrimaryTagId: n,
								selectedOptions: s
							}
						}
						default:
							return e
					}
				},
				aI = n("./src/reddit/helpers/tags/index.ts");
			const cI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var oI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F_.j: {
							const {
								globalSubredditTags: n,
								subredditScopedTags: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...n
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[s]: {
										...e.subredditScopedTags[s] || {},
										...r[s] || {}
									}
								}
							}
						}
						case F_.w:
						case F_.s:
						case F_.r: {
							const {
								primaryTag: n,
								globalSubredditTags: r,
								subredditScopedTags: s,
								itemTags: a,
								suggestedItemTags: c,
								subredditId: o,
								geoPlace: i
							} = t.payload, d = {
								...e.subredditPrimaryTagId
							};
							return n ? d[o] = n.tag.id : delete d[o], {
								subredditPrimaryTagId: d,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[o]: {
										...e.subredditScopedTags[o] || {},
										...s[o] || {}
									}
								},
								itemTags: {
									...e.itemTags,
									[o]: {
										...a[o] || {}
									}
								},
								geoPlaces: i ? Object(oe.set)(e.geoPlaces, o, i) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(aI.a)(a[o] || {})
								}
							}
						}
						case F_.p: {
							const {
								subredditId: n,
								tags: r
							} = t.payload, s = r.reduce((e, t) => {
								let {
									tagId: n
								} = t;
								return delete e[n], e
							}, {
								...e.subredditScopedTags[n] || {}
							});
							return {
								...e,
								subredditScopedTags: {
									...e.subredditScopedTags,
									[n]: s
								}
							}
						}
						case F_.e: {
							const {
								globalSubredditTags: n
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...n
								}
							}
						}
						case F_.h: {
							const {
								subredditId: n,
								primaryTagId: r,
								secondaryTags: s
							} = t.payload;
							return r && n ? {
								...e,
								subredditPrimaryTagId: {
									...e.subredditPrimaryTagId,
									[n]: r
								},
								itemTags: {
									...e.itemTags,
									[n]: {
										...s || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				iI = n("./src/reddit/reducers/tags/selected/index.ts"),
				dI = Object(J.c)({
					api: z_,
					availableGlobalTagOrder: Z_,
					models: oI,
					selected: iI.b,
					creation: sI
				}),
				lI = n("./src/reddit/actions/redditEmbed.ts"),
				uI = n("./src/reddit/actions/theme.ts"),
				pI = n("./src/reddit/actions/users.ts"),
				fI = n("./src/reddit/models/Theme/index.ts");
			const hI = {
				current: fI.c,
				cached: {}
			};
			var bI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case uI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? fI.b : fI.c,
								cached: {}
							}
						}
						case Nn.b:
						case Nn.c:
						case Nn.l:
						case Nn.m:
						case Nn.h:
						case Nn.a:
						case Nn.n:
						case P.b:
						case P.f:
						case R.e:
						case R.h:
						case he.a:
						case he.e:
						case he.b:
						case he.f:
						case he.d:
						case he.h:
						case w.c:
						case k.SUBREDDIT_LOADED:
						case N.b:
						case N.a:
						case w.g:
						case lI.b:
						case H.i:
						case Ze.e:
						case ye.c:
						case xn.j:
						case x.PAGE_LOADED:
						case qr.PAGE_LOADED:
						case pI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: fI.b,
									cached: {}
								} : {
									current: fI.c,
									cached: {}
								}
							}
							return e;
						case W.d:
						case W.e:
						case L.a:
						case L.b:
						case L.d:
						case L.e:
						case V.PROFILE_POSTS_FAILED:
						case V.PROFILE_POSTS_LOADED: {
							const {
								account: n
							} = t.payload;
							return n ? n.nightmode ? {
								current: fI.b,
								cached: {}
							} : {
								current: fI.c,
								cached: {}
							} : e
						}
						case fe.h:
						case fe.j:
						case fe.i:
						case fe.g:
						case fe.f:
						case fe.s:
						case fe.r:
						case fe.u:
						case fe.v:
						case fe.B:
						case fe.A:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: fI.b,
									cached: {}
								} : {
									current: fI.c,
									cached: {}
								}
							}
							return e;
						case xn.i: {
							if (!t.payload) return e;
							const {
								nightmode: n
							} = t.payload;
							return n ? {
								current: fI.b,
								cached: {}
							} : {
								current: fI.c,
								cached: {}
							}
						}
						case f.d:
							return {
								current: fI.c, cached: {}
							};
						case f.e:
							return t.payload.nightmodeTempUpdated ? {
								current: fI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				yI = n("./src/reddit/actions/toaster.ts");
			const gI = [];
			var mI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yI.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case yI.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				vI = n("./src/reddit/actions/tooltip.ts");
			var EI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vI.c:
						case vI.b:
						case vI.e:
						case vI.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				OI = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var _I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vI.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case vI.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case vI.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case vI.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case Ie.I:
						case vI.d:
						case l.b:
						case Qo.b:
						case Qo.c:
						case Qo.a:
							return t.type === l.b && e === OI.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				II = Object(J.c)({
					params: EI,
					tooltipId: _I
				}),
				SI = n("./src/reddit/actions/tracing.ts");
			const TI = {
				traceId: void 0
			};
			var wI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				DI = n("./src/lib/asyncActions/index.ts"),
				jI = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const AI = Object(DI.c)(jI.c.requestedActionType, jI.c.succeededActionType, jI.c.failedActionType),
				CI = Object(DI.c)(jI.a.requestedActionType, jI.a.succeededActionType, jI.a.failedActionType),
				PI = Object(DI.c)(jI.d.requestedActionType, jI.d.succeededActionType, jI.d.failedActionType);
			var RI = Object(J.c)({
					load: AI,
					execute: CI,
					send: PI
				}),
				NI = n("./src/reddit/actions/tracking.ts");
			const xI = {};
			var LI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case NI.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case NI.b: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				kI = Object(J.c)({
					reCaptchaEnterprise: RI,
					viewportDataLoaded: LI
				}),
				UI = n("./src/reddit/actions/trafficStats/constants.ts");
			var MI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case UI.c:
						return !0;
					case UI.b:
					case UI.a:
						return !1;
					default:
						return e
				}
			};
			var BI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case UI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case UI.c:
							return null;
						default:
							return e
					}
				},
				FI = Object(J.c)({
					pending: MI,
					trafficStats: BI
				});
			var GI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.s:
					case i.t:
						return null;
					case i.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var qI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.s:
							return !0;
						case i.q:
						case i.t:
							return !1;
						default:
							return e
					}
				},
				HI = Object(J.c)({
					error: GI,
					pending: qI
				});
			var QI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case r.b:
					case i.t:
						return null;
					default:
						return e
				}
			};
			var WI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case i.t:
						return "";
					default:
						return e
				}
			};
			var VI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.r:
							return t.payload && t.payload.publicAddress || null;
						case r.b:
						case i.t:
							return null;
						default:
							return e
					}
				},
				KI = Object(J.c)({
					api: HI,
					contentId: QI,
					initialRecipient: WI,
					publicAddress: VI
				}),
				$I = Object(J.c)({
					communityPoints: KI
				}),
				YI = n("./src/reddit/actions/search/trending.ts");
			const XI = {};
			var zI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case YI.a: {
							const {
								items: n,
								subplacement: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : e
						}
						default:
							return e
					}
				},
				JI = Object(J.c)({
					models: zI
				});
			var ZI = n("./src/reddit/routes/premium/index.ts");
			const eS = {};
			var tS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gy.a: {
							const {
								trophies: n
							} = t.payload;
							return Object.values(n).forEach(e => {
								"t6_bf" === e.awardId && (e.url = ZI.b)
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				nS = n("./src/reddit/actions/upload.ts"),
				rS = n("./src/reddit/models/Upload/index.ts");
			const sS = {};
			var aS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nS.d: {
							const {
								key: n,
								id: r,
								file: s
							} = t.payload, a = e[n], c = a && a.file === s ? {
								...a.metadata
							} : {};
							return {
								...e,
								[n]: {
									key: n,
									id: r,
									file: s,
									metadata: c,
									url: void 0,
									status: rS.a.PENDING
								}
							}
						}
						case nS.h: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: rS.a.UPLOADING
								}
							}
						}
						case nS.c: {
							const {
								key: n,
								metadata: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									metadata: r
								}
							}
						}
						case nS.e: {
							const {
								key: n,
								progress: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									progress: r
								}
							}
						}
						case nS.g: {
							const {
								key: n,
								url: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: rS.a.SUCCESS,
									url: r
								}
							}
						}
						case nS.b: {
							const {
								key: n,
								error: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: rS.a.FAILED,
									error: r
								}
							}
						}
						case nS.a: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: rS.a.CANCELED
								}
							}
						}
						case nS.f: {
							const {
								key: n
							} = t.payload, r = e[n];
							return r.metadata.localUrl && window.URL.revokeObjectURL(r.metadata.localUrl), Gr()(e, n)
						}
						default:
							return e
					}
				},
				cS = n("./src/reddit/actions/upvotePrompt.ts");
			var oS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.a:
						return ++e;
					default:
						return e
				}
			};
			const iS = {};

			function dS(e, t) {
				if (!t) return e;
				const {
					subredditId: n
				} = t, r = e[n] || {};
				return {
					...e,
					[n]: {
						latest: t,
						byDate: {
							...r.byDate || {},
							[t.at]: t
						}
					}
				}
			}
			var lS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.d:
					case i.a:
					case o.f:
					case i.t: {
						const {
							wallet: n
						} = t.payload;
						return dS(e, n)
					}
					case i.w: {
						const n = t.payload,
							r = {
								...e
							};
						return Object.keys(n).forEach(t => {
							const s = n[t],
								a = e[t],
								c = {
									latest: a ? a.latest.at <= s.at ? s : a.latest : s,
									byDate: {
										...a ? a.byDate : {},
										[s.at]: s
									}
								};
							r[t] = c
						}), r
					}
					default:
						return e
				}
			};
			Object(F.a)("INBOX__COUNT_UPDATE");
			var uS = n("./src/reddit/actions/pages/appeal/constants.ts"),
				pS = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				fS = n("./src/reddit/actions/sso/constants.ts"),
				hS = n("./src/reddit/endpoints/profile/info.ts");
			const bS = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || hu()(r, t)) return e;
				const {
					karma: s
				} = t;
				return {
					...t,
					karma: {
						...hS.a,
						...null == r ? void 0 : r.karma,
						...s
					},
					gender: n
				}
			};
			var yS = Object($h.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case uS.a:
					case uS.b:
					case yg.b:
					case yg.c:
					case Nn.b:
					case Nn.c:
					case Nn.h:
					case Nn.a:
					case Nn.l:
					case Nn.m:
					case Nn.n:
					case R.e:
					case R.h:
					case R.g:
					case j.q:
					case j.r:
					case he.a:
					case he.e:
					case he.b:
					case he.f:
					case w.a:
					case w.c:
					case N.a:
					case N.b:
					case k.SUBREDDIT_FAILED:
					case mu.n:
					case W.b:
					case W.a:
					case W.e:
					case W.d:
					case be.c:
					case be.i:
					case L.e:
					case L.d:
					case L.b:
					case L.a:
					case V.PROFILE_POSTS_LOADED:
					case V.PROFILE_POSTS_FAILED:
					case k.SUBREDDIT_LOADED:
					case ye.a:
					case ye.c:
					case x.PAGE_LOADED:
					case qr.PAGE_LOADED:
					case Ze.c:
					case Ze.e:
					case lI.a:
					case lI.b:
					case xn.j:
					case pS.b:
					case pI.c:
					case U.TOPIC_DATA_LOADED:
						return bS(e, t.payload.account);
					case pI.n:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case fe.i:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A:
					case fe.h:
					case fe.e:
					case fe.q:
					case fe.t:
					case fe.z: {
						const {
							response: n
						} = t.payload;
						return n ? bS(e, n.account) : e
					}
					case pI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case r.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case xn.l:
					case xn.k: {
						const n = t.payload;
						return e && "profileIcon" === n.key ? {
							...e,
							accountIcon: n.imageUrl
						} : e
					}
					case Ie.B:
					case mu.j: {
						const {
							coins: n
						} = t.payload;
						return e ? {
							...e,
							coins: n
						} : e
					}
					case mu.m: {
						const {
							userName: n,
							karma: r
						} = t.payload;
						return n.toLowerCase() !== (e && Object(me.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...hS.a,
								...null == e ? void 0 : e.karma,
								...r
							}
						}
					}
					case Je.A: {
						const {
							coins: n,
							coinsDiff: r
						} = t.payload;
						return n && e ? {
							...e,
							coins: n
						} : r && e ? {
							...e,
							coins: e.coins + r
						} : e
					}
					case S.p: {
						const {
							price: n
						} = t.payload;
						return (null == e ? void 0 : e.coins) && n ? {
							...e,
							coins: e.coins - n
						} : e
					}
					case "INBOX__COUNT_UPDATE": {
						const {
							inboxCount: n
						} = t.payload;
						return e ? {
							...e,
							inboxCount: n
						} : e
					}
					case fS.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case fS.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case ai.SAVE_USERNAME_SUCCESS: {
						const {
							username: n
						} = t.payload;
						return e ? {
							...e,
							displayText: n,
							isNameEditable: !1,
							url: `/user/${n}`,
							username: n
						} : e
					}
					case Ku.a:
					case Ku.b: {
						if (!(null == t ? void 0 : t.payload)) return e;
						const n = t.payload;
						return e ? {
							...e,
							gender: {
								genderCategory: n.genderCategory,
								definedGender: n.definedGender
							}
						} : e
					}
					case pI.k: {
						if (!(null === (s = null === (n = null == t ? void 0 : t.payload) || void 0 === n ? void 0 : n.avatar) || void 0 === s ? void 0 : s.headshot_image_url) || !e) return e;
						const r = t.payload;
						return {
							...e,
							accountIcon: r.avatar.headshot_image_url,
							snoovatarFullBodyAsset: r.avatar.image_url
						}
					}
					default:
						return e
				}
			}), null);
			var gS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pI.m:
					case pI.n:
						return null;
					case pI.l:
						return t.payload;
					default:
						return e
				}
			};
			var mS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pI.m:
							return !0;
						case pI.n:
						case pI.l:
							return !1;
						default:
							return e
					}
				},
				vS = Object(J.c)({
					error: gS,
					pending: mS
				}),
				ES = Object(J.c)({
					api: vS
				});
			var OS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pI.i:
						return !0;
					default:
						return e
				}
			};
			var _S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pI.h:
							return !0;
						case pI.i:
						case pI.g:
							return !1;
						default:
							return e
					}
				},
				IS = Object(J.c)({
					pending: _S,
					emailSent: OS
				}),
				SS = Object(J.c)({
					api: IS
				}),
				TS = Object(J.c)({
					changeEmail: ES,
					sendResetEmail: SS
				}),
				wS = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const DS = {};
			var jS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ut.f:
						return {
							...e, new: wS.a.pending
						};
					case Ut.d:
						return {
							...e, new: wS.a.error
						};
					case Ut.e:
						return {
							...e, new: wS.a.waitingForRequest
						};
					case Ut.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: wS.a.pending
						}
					}
					case Ut.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: wS.a.error
						}
					}
					case Ut.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: wS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const AS = [];
			var CS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ut.e:
							return [t.payload, ...e];
						case Ut.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case xn.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				PS = Object(J.c)({
					api: jS,
					data: CS
				}),
				RS = n("./src/reddit/actions/chat/constants.ts"),
				NS = n("./src/reddit/actions/chat/userSettings.ts");
			const xS = RS.a.anybody;
			var LS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case NS.a:
							if (t.payload) {
								const {
									invitePolicy: e
								} = t.payload;
								return e
							}
							return e;
						default:
							return e
					}
				},
				kS = Object(J.c)({
					invitePolicy: LS
				});
			const US = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var MS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case x.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && hu()(e, n) ? e : {
							...e,
							...n
						}
					}
					case ur.P: {
						const {
							response: {
								draftsCount: n
							}
						} = t.payload;
						return US(e, n)
					}
					case zn.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return US(e, n.length)
					}
					case zn.c:
					case zn.l: {
						const {
							draftsCount: n
						} = t.payload;
						return US(e, n)
					}
					default:
						return e
				}
			};
			const BS = {};
			var FS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mc.a: {
							const e = t.payload.experimentVariants;
							return tp(e)
						}
						default:
							return e
					}
				},
				GS = n("./src/reddit/actions/global/constants.ts");
			const qS = {};
			var HS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case GS.a: {
							const n = t.payload;
							return null === n.local_persisted_experiments_store || void 0 === n.local_persisted_experiments_store ? e : n.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				QS = Object(J.c)({
					byName: FS,
					localPersisted: HS
				});
			var WS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xn.f:
						return !0;
					case xn.e:
						return !1;
					default:
						return e
				}
			};
			var VS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xn.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const KS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var $S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pI.b:
							return t.payload;
						default:
							return e
					}
				},
				YS = n("./src/reddit/actions/notifications/constants.ts"),
				XS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var zS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XS.a:
					case XS.d:
					case XS.h:
					case YS.a:
						return t.payload && t.payload.error || null;
					case XS.c:
					case XS.f:
					case XS.j:
					case YS.c:
					case YS.b:
						return null;
					default:
						return e
				}
			};
			var JS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YS.c:
						return !1;
					case YS.b:
						return !0;
					default:
						return e
				}
			};
			var ZS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case YS.c:
						case XS.j:
							return !0;
						case YS.b:
						case YS.a:
						case XS.i:
						case XS.h:
							return !1;
						default:
							return e
					}
				},
				eT = Object(J.c)({
					error: zS,
					loaded: JS,
					pending: ZS
				});
			var tT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case YS.f:
					case YS.e:
						return null;
					default:
						return e
				}
			};
			var nT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YS.f:
						return !1;
					case YS.e:
						return !0;
					default:
						return e
				}
			};
			var rT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case YS.f:
							return !0;
						case YS.e:
						case YS.d:
							return !1;
						default:
							return e
					}
				},
				sT = Object(J.c)({
					error: tT,
					loaded: nT,
					pending: rT
				}),
				aT = Object(J.c)({
					getPreferences: eT,
					setPreferences: sT
				});
			const cT = {
				byId: {},
				allIds: []
			};
			var oT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case XS.g: {
						const n = t.payload && t.payload.messageType;
						return {
							...e,
							byId: {
								...e.byId,
								[n]: {
									...e.byId[n],
									...t.payload
								}
							}
						}
					}
					default:
						return e
				}
			};
			const iT = {
				byId: {},
				allIds: []
			};
			var dT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XS.b: {
							const {
								sections: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				lT = Object(J.c)({
					sections: dT,
					rows: oT
				}),
				uT = n("./src/lib/notifications/constants.ts");
			var pT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case uT.j:
						return !0;
					case uT.b:
					case uT.d:
					case uT.e:
						return !1;
					default:
						return e
				}
			};
			const fT = {
				broadcastFollower: !1,
				broadcastRecommendation: !1,
				chatMessages: !1,
				chatRequests: !1,
				commentReplies: !1,
				communityRecommendations: !1,
				liveEvent: !1,
				newPinnedPost: !1,
				postFlairAdded: !1,
				postReplies: !1,
				privateMessages: !1,
				threadReplies: !1,
				topLevelComment: !1,
				trendingPosts: !1,
				upvotedComments: !1,
				upvotedPosts: !1,
				userFlairAdded: !1,
				usernameMentions: !1,
				userNewFollowers: !1
			};
			var hT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YS.b:
					case YS.f:
					case YS.d: {
						const {
							preferences: n
						} = t.payload;
						return wa()(n) ? e : n
					}
					default:
						return e
				}
			};
			const bT = {
				byId: {},
				allIds: []
			};
			var yT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case XS.g: {
						const n = t.payload && t.payload.messageType;
						return {
							...e,
							byId: {
								...e.byId,
								[n]: {
									...e.byId[n],
									...t.payload
								}
							}
						}
					}
					default:
						return e
				}
			};
			const gT = {
				byId: {},
				allIds: []
			};
			var mT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XS.e: {
							const {
								sections: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				vT = Object(J.c)({
					sections: mT,
					rows: yT
				});
			var ET = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const OT = [];
			var _T = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case XS.k: {
							if (!t.payload) return [];
							const n = t.payload && t.payload.subredditId,
								r = t.payload && t.payload.notificationLevel,
								s = e.findIndex(e => e.id === n);
							return -1 === s ? e : [...e.slice(0, s), {
								...e[s],
								notificationLevel: r
							}, ...e.slice(s + 1)]
						}
						case Q.G: {
							if (!t.payload) return [];
							const n = t.payload && t.payload.subredditId,
								r = t.payload && t.payload.notificationLevel,
								s = e.findIndex(e => e.id === n);
							return -1 === s ? e : [...e.slice(0, s), {
								...e[s],
								notificationLevel: r,
								isMuted: !1
							}, ...e.slice(s + 1)]
						}
						default:
							return e
					}
				},
				IT = Object(J.c)({
					subreddits: _T,
					pageInfo: ET
				}),
				ST = Object(J.c)({
					api: aT,
					subscribedSubredditsSettings: IT,
					emailSettingsLayout: lT,
					isNotificationPromptVisible: pT,
					preferences: hT,
					pushSettingsLayout: vT
				});
			const TT = {};
			var wT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.i:
					case ht.h: {
						const {
							subredditId: n,
							userOwnedBadges: r
						} = t.payload, s = r.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[n]: {
								...e[n] || {},
								...s
							}
						}
					}
					case u.d: {
						const {
							userOwnedBadges: n,
							product: r
						} = t.payload, s = n.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[r.subredditId]: {
								...e[r.subredditId] || {},
								...s
							}
						}
					}
					default:
						return e
				}
			};
			var DT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.yb: {
						const n = t.payload.powerups;
						return n ? Gr()({
							...e,
							...n
						}, "allocation") : e
					}
					case Ie.nb: {
						const {
							userPowerups: n
						} = t.payload;
						return n ? Gr()({
							...e,
							...n
						}, "allocation") : e
					}
					default:
						return e
				}
			};
			var jT, AT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.xb:
						case Ie.zb:
							return !1;
						case Ie.yb:
							return !0;
						default:
							return e
					}
				},
				CT = Object(J.c)({
					data: DT,
					fetched: AT
				}),
				PT = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(jT || (jT = {}));
			const RT = {
				status: jT.UNFETCHED,
				subscriptions: []
			};
			var NT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.Cb:
						return {
							...e, status: jT.PENDING
						};
					case Ie.Bb: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: jT.LOADED
						} : e
					}
					case Ie.Ab:
						return {
							...e, status: jT.FAILED
						};
					default:
						return e
				}
			};
			var xT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.a:
					case q.b:
					case q.c:
					case q.e:
						return t.payload;
					case q.d:
						return null;
					default:
						return e
				}
			};
			var LT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.f:
						return !0;
					default:
						return e
				}
			};
			var kT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pI.j:
						return t.payload;
					default:
						return e
				}
			};
			var UT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mc.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var MT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mc.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				BT = Object(J.c)({
					isEmployee: UT,
					isLoggedIn: MT
				});
			var FT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xn.r: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && hu()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				GT = n("./src/reddit/actions/userWhitelist.ts");
			const qT = {};
			var HT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case GT.e:
						return {
							...e, new: wS.a.pending
						};
					case GT.d:
						return {
							...e, new: wS.a.error
						};
					case GT.f:
						return {
							...e, new: wS.a.waitingForRequest
						};
					case GT.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: wS.a.pending
						}
					}
					case GT.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: wS.a.error
						}
					}
					case GT.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: wS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const QT = [];
			var WT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case GT.f:
							return [t.payload, ...e];
						case GT.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case xn.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				VT = Object(J.c)({
					api: HT,
					data: WT
				}),
				KT = Object(J.c)({
					account: yS,
					accountSettings: TS,
					blocked: PS,
					chatSettings: kS,
					drafts: MS,
					experiments: QS,
					isCustomizeFlyoutShowing: WS,
					topContentDismissalPrefsSet: FT,
					language: VS,
					loid: $S,
					notificationPrefs: ST,
					ownedBadges: wT,
					powerups: CT,
					prefs: PT.c,
					productOfferSubscriptions: NT,
					session: xT,
					sessionRefreshFailed: LT,
					sessionTracker: kT,
					temporaryGQL: BT,
					wallets: lS,
					whitelist: VT
				});
			var $T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pS.a:
						return t.payload || null;
					case pS.b:
					case pS.c:
						return null;
					default:
						return e
				}
			};
			var YT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pS.c:
						return !0;
					case pS.b:
					case pS.a:
						return !1;
					default:
						return e
				}
			};
			var XT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pS.b:
						return !0;
					case pS.a:
					case pS.c:
						return !1;
					default:
						return e
				}
			};
			var zT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pS.b:
							return t.payload.userDataExportEligibility;
						case pS.a:
						case pS.c:
							return !1;
						default:
							return e
					}
				},
				JT = Object(J.c)({
					error: $T,
					pending: YT,
					success: XT,
					userDataExportEligibility: zT
				}),
				ZT = Object(J.c)({
					userDataRequestPageApi: JT
				});
			const ew = {};
			var tw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pI.f:
					case pI.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case pI.d: {
						const {
							username: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: r
						}
					}
					default:
						return e
				}
			};
			var nw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pI.f:
							return !0;
						case pI.e:
						case pI.d:
							return !1;
						default:
							return e
					}
				},
				rw = Object(J.c)({
					error: tw,
					pending: nw
				});
			const sw = {};
			var aw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ht.e: {
						const {
							subredditId: n,
							usersAppliedBadges: r
						} = t.payload, s = Object.keys(r).reduce((t, s) => {
							const a = r[s];
							return t[s] = {
								...e[s] || {},
								[n]: a
							}, t
						}, {});
						return {
							...e,
							...s
						}
					}
					case ht.b: {
						const {
							badgeIds: n,
							subredditId: r,
							userId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: n
							}
						}
					}
					case ht.a: {
						const {
							previousBadgeIds: n,
							subredditId: r,
							userId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: n
							}
						}
					}
					case o.a: {
						const {
							badge: n,
							currentAppliedBadges: r,
							placement: s,
							subredditId: a,
							userId: c
						} = t.payload, o = r.filter(e => e.placement !== s).concat(n).filter(Boolean).map(e => e.id);
						return {
							...e,
							[c]: {
								...e[c] || {},
								[a]: o
							}
						}
					}
					default:
						return e
				}
			};
			const cw = {},
				ow = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && hu()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var iw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pI.e: {
							const {
								data: n
							} = t.payload;
							return ow(e, n)
						}
						case fe.k:
							return ow(e, t.payload || {});
						case mu.l: {
							const {
								user: n
							} = t.payload;
							return ow(e, {
								[n.username]: n
							})
						}
						case Ie.s: {
							const {
								gildee: n
							} = t.payload;
							if (!n) return e;
							const r = e[n.toLowerCase()];
							if (!r) return e;
							const s = r.awardedLastMonth,
								a = s ? s.totalCount + 1 : 1,
								c = s && s.topAward;
							return c ? ow(e, {
								[n.toLowerCase()]: {
									...r,
									awardedLastMonth: {
										totalCount: a,
										topAward: c
									}
								}
							}) : e
						}
						case mu.m: {
							const {
								userName: n,
								karma: r
							} = t.payload, s = e[n.toLowerCase()];
							if (!s) return e;
							const a = {
								...hS.a,
								...r
							};
							return ow(e, {
								[n.toLowerCase()]: {
									...s,
									karma: a
								}
							})
						}
						case xn.l:
						case xn.k: {
							const {
								imageUrl: n,
								key: r,
								username: s
							} = t.payload;
							if ("profileIcon" !== r) return e;
							const a = s.toLowerCase(),
								c = e[a];
							return c ? ow(e, {
								[a]: {
									...c,
									accountIcon: n
								}
							}) : e
						}
						case pI.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object(me.e)(n).toLowerCase(),
								s = e[r];
							return s ? ow(e, {
								[r]: {
									...s,
									accountIcon: n.accountIcon,
									snoovatarFullBodyAsset: n.snoovatarFullBodyAsset
								}
							}) : e;
						case xn.n: {
							const {
								additional: n,
								settings: r
							} = t.payload;
							if (n.enableFollowers === n.prevEnableFollowers) return e;
							const s = r.currentUserName.toLowerCase(),
								a = e[s];
							return a ? ow(e, {
								[s]: {
									...a,
									enableFollowers: n.enableFollowers
								}
							}) : e
						}
						default:
							return e
					}
				},
				dw = n("./src/reddit/actions/usernameAvailable.ts");
			const lw = {};
			var uw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dw.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: dw.b.Available
						}
					}
					case dw.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: dw.b.Error
						}
					}
					case dw.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: dw.b.Pending
						}
					}
					case dw.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: dw.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			var pw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.X:
						case Ie.Z:
							return !1;
						case Ie.Y:
							return !0;
						default:
							return e
					}
				},
				fw = Object(J.c)({
					fetched: pw
				});
			var hw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.tb:
						return t.payload;
					case Ie.vb:
					case Ie.ub:
						return null;
					default:
						return e
				}
			};
			var bw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.ub:
						case Ie.tb:
							return !1;
						case Ie.vb:
							return !0;
						default:
							return e
					}
				},
				yw = Object(J.c)({
					error: hw,
					pending: bw
				});
			var gw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.wb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const mw = {};
			var vw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.ub: {
						const {
							postId: n,
							currentRank: r
						} = t.payload;
						return r ? {
							...e,
							[n]: r
						} : e
					}
					default:
						return e
				}
			};
			const Ew = {};
			var Ow = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ew,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.ub: {
							const {
								postId: n,
								topAwardersRank: r
							} = t.payload;
							return {
								...e,
								[n]: (r || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case Ie.s: {
							const {
								id: n
							} = t.payload;
							return Gr()(e, [n])
						}
						default:
							return e
					}
				},
				_w = Object(J.c)({
					api: yw,
					currentPostId: gw,
					currentRank: vw,
					list: Ow
				}),
				Iw = Object(J.c)({
					api: rw,
					appliedBadges: aw,
					models: iw,
					nameAvailable: uw,
					topAwarders: _w,
					powerups: fw
				});
			const Sw = {};
			var Tw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case he.b:
						case he.f:
						case k.SUBREDDIT_LOADED:
						case H.i:
						case ye.c:
						case x.PAGE_LOADED:
						case qr.PAGE_LOADED: {
							const {
								structuredStyles: a
							} = t.payload;
							if (!(null === (s = null === (r = null === (n = null == a ? void 0 : a.data) || void 0 === n ? void 0 : n.content) || void 0 === r ? void 0 : r.widgets) || void 0 === s ? void 0 : s.layout)) return e;
							const c = a.data.content.widgets.layout.idCardWidget,
								o = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== o.length) return e;
							const i = o[0];
							return {
								...e,
								[i]: c
							}
						}
						default:
							return e
					}
				},
				ww = n("./src/reddit/actions/widgets/constants.ts");
			const Dw = {};
			var jw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case he.b:
						case he.f:
						case ye.c:
						case H.i:
						case k.SUBREDDIT_LOADED:
						case x.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = null === (n = r.data.content.widgets) || void 0 === n ? void 0 : n.items,
								a = r.data.content.widgets.layout.topbar.order.filter(e => s[e] && "menu" === s[e].kind);
							if (!a.length) return e;
							const c = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== c.length) return e;
							const o = c[0];
							return {
								...e,
								[o]: a[0]
							}
						}
						case ww.g: {
							const n = t.payload;
							return "menu" !== n.widget.kind ? e : {
								...e,
								[n.subredditId]: n.widgetId
							}
						}
						case ww.h: {
							const n = t.payload;
							return e[n.subredditId] === n.widgetId ? {
								...e,
								[n.subredditId]: null
							} : e
						}
						default:
							return e
					}
				},
				Aw = n("./src/reddit/helpers/widgets/index.tsx");
			const Cw = {};
			var Pw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED: {
						const n = t.payload,
							r = n.structuredStyles && n.structuredStyles.data && n.structuredStyles.data.content;
						if (!r) return e;
						const s = r.widgets;
						return {
							...e,
							...s.items
						}
					}
					case ww.b: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case f.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object(Aw.g)()
							}
						}), t
					}
					case ww.e: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case ww.i:
					case ww.g: {
						const n = t.payload;
						return {
							...e,
							[n.widget.id]: n.widget
						}
					}
					case ww.h: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n.widgetId], r
					}
					case he.b:
					case he.f:
					case k.SUBREDDIT_LOADED:
					case H.i:
					case ye.c:
					case x.PAGE_LOADED:
					case qr.PAGE_LOADED: {
						const {
							structuredStyles: n
						} = t.payload;
						if (!(n && n.data && n.data.content)) return e;
						const r = n.data.content.widgets;
						return {
							...e,
							...r.items
						}
					}
					case Ou.h: {
						const {
							userIsSubscriber: n,
							nameIdentifiers: r,
							widgetId: s
						} = t.payload;
						if (!s || !e[s] || "community-list" !== e[s].kind) return {
							...e
						};
						const a = n,
							c = e[s],
							o = c.data.map(e => {
								const t = {
									...e
								};
								return r.some(e => e.name === t.name) && (t.isSubscribed = a), t
							});
						return {
							...e,
							[s]: {
								...c,
								data: o
							}
						}
					}
					case eE.f: {
						const {
							settings: n,
							idCardWidgetId: r
						} = t.payload;
						return r && e[r] && "publicDescription" in n && n.publicDescription !== e[r].description ? {
							...e,
							[r]: {
								...e[r],
								description: n.publicDescription || ""
							}
						} : e
					}
					default:
						return e
				}
			};
			const Rw = {};
			var Nw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case he.f:
					case H.i:
					case x.PAGE_LOADED: {
						const {
							structuredStyles: n
						} = t.payload;
						if (!(n && n.data && n.data.content)) return e;
						const r = n.data.content.widgets.layout.moderatorWidget,
							s = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const a = s[0];
						return {
							...e,
							[a]: r
						}
					}
					default:
						return e
				}
			};
			const xw = {};
			var Lw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case x.PAGE_LOADED:
					case qr.PAGE_LOADED: {
						const n = t.payload,
							r = n.structuredStyles && n.structuredStyles.data && n.structuredStyles.data.content;
						if (!r) return e;
						const s = Object.keys(n.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const a = s[0],
							c = r.widgets.layout.sidebar.order;
						return {
							...e,
							[a]: c
						}
					}
					case ww.e:
					case ww.b: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgets.layout.sidebar.order
						}
					}
					case ww.f: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgetIds
						}
					}
					case ww.g: {
						const n = t.payload;
						if ("menu" === n.widget.kind) return e;
						if (!e[n.subredditId]) return {
							...e,
							[n.subredditId]: [n.widgetId]
						};
						const r = e[n.subredditId].concat(n.widgetId);
						return {
							...e,
							[n.subredditId]: r
						}
					}
					case ww.h: {
						const n = t.payload;
						if (!e[n.subredditId]) return e;
						const r = e[n.subredditId].filter(e => e !== n.widgetId);
						return {
							...e,
							[n.subredditId]: r
						}
					}
					case he.b:
					case he.f:
					case k.SUBREDDIT_LOADED:
					case ye.c:
					case H.i:
					case x.PAGE_LOADED:
					case qr.PAGE_LOADED: {
						const {
							structuredStyles: n
						} = t.payload;
						if (!(n && n.data && n.data.content)) return e;
						const r = n.data.content.widgets.layout.sidebar.order,
							s = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const a = s[0];
						return {
							...e,
							[a]: r
						}
					}
					default:
						return e
				}
			};
			const kw = {
				accountManagerModalData: a,
				activeModal: b,
				ads: E,
				adsSignals: $,
				apiRequestState: z,
				appBadges: ae,
				authorFlair: _e,
				awards: ft,
				badges: jt,
				blockedRedditors: kt,
				blockUser: Ht,
				brandSafety: Wt,
				chat: pn,
				cooldownTimer: Wn,
				commentsListTruncated: hn,
				communityFlairs: gn,
				connection: En,
				contentControls: Rn,
				contentGate: kn,
				continueThreads: Bn,
				creations: ya,
				dashboard: va,
				discoveryUnits: xa,
				dismissedTruncationList: Ua,
				economics: cc,
				emailVerificationTooltip: dc,
				emojis: gc,
				experimentOverrides: _c,
				externalAccount: zc,
				featureFlags: so,
				firstPost: oo,
				focusedVerticals: Oo,
				fontFiles: Io,
				frontPageFirstLoaded: So,
				gild: Uo,
				header: Vo,
				htmlResponseStreaming: Ko,
				imageUploads: Xo,
				inAppNotifications: ni,
				interceptedAction: si,
				isChangeUsernameTooltipShowing: ci,
				isModeratorWithPostPerms: ii,
				jsApi: ui,
				langSite: hi,
				leaderboard: Ii,
				listings: Kd,
				live: Jd,
				mediaEmbed: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zd.a:
							const {
								isDeleted: n, height: r, postId: s
							} = t.payload;
							return {
								...e, [s]: {
									height: r,
									isDeleted: n
								}
							};
						default:
							return e
					}
				},
				mediaGalleries: al,
				mediaPlayback: il,
				merchandisingUnitAnnouncements: ul,
				meta: hl,
				moderatingSubreddits: gl,
				modListingPage: Sl,
				modModeEnabled: wl,
				moreComments: xl,
				multireddits: Du,
				notificationBannerId: Au,
				notificationsInbox: Hu,
				nps: Vu,
				onboarding: Zu,
				page: ap,
				platform: up,
				postCollection: Kp,
				polls: Lp,
				postFlair: Zp,
				posts: Kh,
				postStickiedComments: zh,
				givePremium: qo,
				products: pb,
				profileCommentsPage: Db,
				profilePrivatePage: Hb,
				profileModSettingsPage: Pb,
				profilePostsPage: Nb,
				profiles: _y,
				promos: Dy,
				publicAccessNetwork: cg,
				recap: dg,
				recentSubreddits: fg,
				recommendations: bg,
				reportPage: Tg,
				reportRules: jg,
				requestHost: Ag,
				runTimeEnvVars: Rg,
				search: om,
				searchDiscoveryUnits: bm,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ym.a:
							return t.payload;
						case ym.b:
							return gm;
						default:
							return e
					}
				},
				seo: Tm,
				shortcuts: xm,
				sidebarPromotedPosts: Um,
				streaming: Wm,
				structuredStyles: lv,
				stylesheets: uv,
				subredditAutocomplete: Ev,
				subreddits: c_,
				subredditStickyPosts: d_,
				subscriptions: P_,
				survey: M_,
				tabBadged: B_,
				tags: dI,
				themes: bI,
				toaster: mI,
				tooltip: II,
				tracing: wI,
				tracking: kI,
				trafficStats: FI,
				transfers: $I,
				trending: JI,
				trophies: tS,
				uploads: aS,
				user: KT,
				userDataRequestPage: ZT,
				upvotePromptCountPerSess: oS,
				users: Iw,
				widgets: Object(J.c)({
					idCardIds: Tw,
					menuIds: jw,
					models: Pw,
					moderatorIds: Nw,
					sidebar: Lw
				})
			}
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/page.ts");
			const c = "/premium",
				o = Object(r.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), n.e("Premium")]).then(n.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				i = {
					action: a.e,
					chunk: s.u.PREMIUM,
					component: o,
					exact: !0,
					meta: {
						name: s.Sb.PREMIUM,
						isResponsive: !0
					},
					path: c
				};
			t.a = i
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			n("./src/reddit/selectors/user.ts");
			const r = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				a = (e, t) => {
					const n = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/reselect/es/index.js");
			Object(r.a)(e => e.chat.unread.count, e => e.unreadMessages);
			const s = e => !(e.chat.isInited || e.chat.unread.api.pending),
				a = e => e.chat.liveChatTooltipShowState,
				c = Object(r.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
		},
		"./src/reddit/selectors/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "a", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/models/Flair/index.ts"),
				o = n("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const d = [],
				l = e => e.emojis.models,
				u = Object(a.a)(l, (e, t) => t.subredditId, (e, t) => {
					const n = e[t];
					return n ? [...s()(n.emojis), ...s()(n.snoomojis)] : d
				}),
				p = Object(a.a)(u, o.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, n, r) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !n) && (!(!e.userFlairAllowed && r === c.d.UserFlair) && !(!e.postFlairAllowed && r === c.d.LinkFlair)))),
				f = Object(a.a)(l, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				h = (e, t) => Object(i.z)(e, {
					subredditName: t
				}).emojisEnabled,
				b = {
					emojis: {},
					snoomojis: {}
				},
				y = (e, t) => {
					let {
						subredditId: n
					} = t;
					return l(e)[n] || b
				},
				g = (e, t) => !!e.emojis.api.list.pending[t]
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(r.a)(d.Y, d.P, (e, t) => !(e || t)),
				p = e => {
					if (!u(e)) return;
					const t = Object(c.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: a.ae,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				f = e => {
					var t;
					const n = p(e);
					if (!n) return !1;
					let r = Object(i.s)(e),
						a = Object(i.d)(e);
					if ("undefined" != typeof window && !a) {
						const e = Object(o.a)("subreddit", window.location.href);
						(a = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Sb.SUBREDDIT)
					}
					if (a && n) {
						const e = (null == a ? void 0 : a.toLocaleLowerCase()) === n;
						return r === s.Sb.SUBREDDIT && e
					}
					return !1
				},
				h = e => !!p(e) && Object(c.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: a.be,
					expEventOverride: !1
				}) !== a.ce.Readonly
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = e => Object.keys(e.trending.models).reduce((t, n) => [...t, ...e.trending.models[n]], []),
				s = (e, t) => e.trending.models[t] || []
		},
		"./src/reddit/selectors/upvotePrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/User/index.ts"),
				a = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = 5e3,
				d = 12e3,
				l = 6 * r.ub,
				u = (e, t) => {
					const n = Object(c.G)(e, t),
						r = Object(o.Q)(e);
					let i = !1;
					const d = Object(o.l)(e);
					if (d) {
						i = (Object(s.d)(d) || (new Date).getTime()) > (new Date).getTime() - l
					}
					const u = n && !n.isArchived && (1 === (null == n ? void 0 : n.score) || 0 === (null == n ? void 0 : n.score)) && (null == n ? void 0 : n.voteState) === a.a.notVoted;
					return r && i && u
				}
		},
		"./src/reddit/selectors/userDataRequest.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => e.userDataRequestPage.userDataRequestPageApi.userDataExportEligibility,
				s = e => e.userDataRequestPage.userDataRequestPageApi
		},
		"./src/redditGQL/operations/CrowdControlLevelInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"0100b521f182"}')
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/FetchSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"df4f7fe92d1f"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"abcab38cb71c"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"8555d93ac177"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		},
		"./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"1f690708b8b1"}')
		},
		"./src/redditGQL/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		},
		"./src/redditGQL/operations/VerifyRecaptchaToken.json": function(e) {
			e.exports = JSON.parse('{"id":"c1242f999b6c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.0fcd59ef73f61ae27210.js.map