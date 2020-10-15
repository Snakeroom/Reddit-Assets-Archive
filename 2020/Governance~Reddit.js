// https://www.redditstatic.com/desktop2x/Governance~Reddit.662a8dde135b9728443f.js
// Retrieved at 10/15/2020, 2:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, s) {},
		"./src/graphql/operations/CrowdControlLevelInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"975a7920607d"}')
		},
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/FetchSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"df4f7fe92d1f"}')
		},
		"./src/graphql/operations/GetPostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"4231b7734ef9"}')
		},
		"./src/graphql/operations/GetSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"63d6a697b823"}')
		},
		"./src/graphql/operations/ProfileTrophies.json": function(e) {
			e.exports = JSON.parse('{"id":"3c59e5ed6f14"}')
		},
		"./src/graphql/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"050ae396c8ed"}')
		},
		"./src/graphql/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
		},
		"./src/graphql/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/graphql/operations/UpdateSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"bdb05b8c7a65"}')
		},
		"./src/graphql/operations/UpdateSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"1f690708b8b1"}')
		},
		"./src/graphql/operations/VerifyRecaptchaToken.json": function(e) {
			e.exports = JSON.parse('{"id":"c1242f999b6c"}')
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(n.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/asyncActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const a = e => "".concat(e, "_REQUESTED"),
				r = e => "".concat(e, "_SUCCEEDED"),
				c = e => "".concat(e, "_FAILED");

			function i(e) {
				const t = a(e),
					s = r(e),
					i = c(e);
				return {
					requestedActionType: t,
					requested: Object(n.a)(t),
					succeededActionType: s,
					succeeded: Object(n.a)(s),
					failedActionType: i,
					failed: Object(n.a)(i)
				}
			}
			var o;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(o || (o = {}));
			const d = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.New,
					a = arguments.length > 1 ? arguments[1] : void 0;
				switch (a.type) {
					case e:
						return n === o.New ? o.Pending : n;
					case t:
						return n === o.Pending ? o.Succeeded : n;
					case s:
						return n === o.Pending ? o.Failed : n;
					default:
						return n
				}
			})
		},
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			t.a = function(e, t, s) {
				let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					a = "collectionCommentsPage--[collection:'".concat(e, "']");
				return t && (a += "--[post:'".concat(t, "']")), s && (a += "--[rootComment:'".concat(s, "']")), n && (n.sort && n.hasSortParam && (a += "--[sort:'".concat(n.sort, "']")), n.context && (a += "--[context:".concat(n.context, "]")), n.depth && (a += "--[depth:".concat(n.depth, "]"))), a
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return "overviewConversations--[profile:'".concat(t, "']--[post:'").concat(e, "']")
			}
		},
		"./src/lib/omitKey/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};

			function a(e, t) {
				if (t in e) {
					const s = e,
						a = t;
					s[a];
					return n(s, ["symbol" == typeof a ? a : a + ""])
				}
				return e
			}
		},
		"./src/lib/reCaptchaEnterprise/ReCaptchaEnterpriseClient.ts": function(e, t) {},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			s("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var n = s("./src/config.ts"),
				a = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const r = e => "object" == typeof e && null !== e,
				c = () => "undefined" != typeof window && r(window) && r(window.grecaptcha) && r(window.grecaptcha.enterprise),
				i = () => c() ? window.grecaptcha.enterprise : void 0,
				o = e => "https://www.google.com/recaptcha/enterprise.js?render=".concat(e),
				d = e => Object(a.a)(o(e), c),
				l = e => new Promise(t => e.ready(t));
			var u, b = s("./node_modules/ts-error/lib/cjs.js"),
				g = s.n(b);
			class MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError extends g.a {
				constructor() {
					super("reCaptcha Enterprise site key is not set")
				}
			}
			class ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError extends g.a {
				constructor() {
					super("reCaptcha Enterprise client is not ready")
				}
			}
			class ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError extends g.a {
				constructor() {
					super("reCaptcha Enterprise client is not available")
				}
			}! function(e) {
				e.PageLoad = "PAGE_LOAD"
			}(u || (u = {}));
			var p = u;
			s("./src/lib/reCaptchaEnterprise/ReCaptchaEnterpriseClient.ts");
			const O = new class {
				constructor() {
					var e = this;
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.a.reCaptchaEnterprise.siteKey,
						s = arguments.length > 1 ? arguments[1] : void 0;
					this.siteKey = t, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => o(this.siteKey), this.ensureSiteKey = () => {
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
							const t = i();
							if (!t) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							e.setInstance(t)
						}
						e.isReady || await e.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							s = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(s)[1]
						}
						return s
					}, this.setInstance(s || i())
				}
			};
			t.b = O
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, s) {},
		"./src/reddit/actions/apiRequestHeaders.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const a = "API_REQUEST_HEADERS__set";
			Object(n.a)(a)
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const a = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				r = Object(n.a)(a)
		},
		"./src/reddit/actions/badge.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "i", (function() {
				return b
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "k", (function() {
				return I
			})), s.d(t, "l", (function() {
				return w
			})), s.d(t, "m", (function() {
				return S
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/governance/errorToast.ts"),
				r = s("./src/reddit/endpoints/governance/badges.ts");
			const c = "BADGE__BADGE_MODAL_OPENED",
				i = "BADGE__BADGE_APPLICATION_SUCCESS",
				o = "BADGE__BADGE_APPLICATION_FAILURE",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				l = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				b = "BADGE__USER_BADGES_FETCH_SUCCESS",
				g = "BADGE__USER_BADGES_FETCH_FAILURE",
				p = "BADGE__USER_BADGES_FETCH_PENDING",
				O = Object(n.a)(c),
				f = Object(n.a)(i),
				j = Object(n.a)(o),
				y = (Object(n.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(n.a)(d)),
				h = Object(n.a)(l),
				m = Object(n.a)(u),
				v = Object(n.a)(b),
				_ = Object(n.a)(g),
				E = Object(n.a)(p),
				I = e => {
					let {
						badgeIds: t,
						subredditId: s
					} = e;
					return async (e, n, c) => {
						let {
							apiContext: i
						} = c;
						const o = n(),
							d = o.user.account;
						if (d) {
							const n = (o.users.appliedBadges[d.id] || {})[s] || [],
								c = t.length ? t[0] : n[0],
								l = !!t.length;
							e(f({
								badgeIds: t,
								subredditId: s,
								userId: d.id
							}));
							const u = await Object(r.a)(i(), s, c, l);
							u.ok || (e(j({
								badgeIds: t,
								subredditId: s,
								error: u.error,
								previousBadgeIds: n,
								userId: d.id
							})), Object(a.a)(e, u.error))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						userIds: s
					} = e;
					return async (e, n, a) => {
						let {
							apiContext: c
						} = a;
						e(m({
							subredditId: t
						}));
						const i = await Object(r.b)(c(), t, s);
						i.ok ? e(y(Object.assign(Object.assign({}, i.body), {
							subredditId: t
						}))) : e(h({
							subredditId: t,
							error: i.error
						}))
					}
				},
				S = e => {
					let {
						subredditId: t
					} = e;
					return async (e, s, n) => {
						let {
							apiContext: a
						} = n;
						const c = s().user.account;
						if (c) {
							e(E({
								subredditId: t
							}));
							const s = await Object(r.c)(a(), t, c.id);
							s.ok ? e(v(Object.assign(Object.assign({}, s.body), {
								subredditId: t
							}))) : e(_({
								subredditId: t,
								error: s.error
							}))
						}
					}
				}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "g", (function() {
				return y
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				r = s("./src/lib/makeGqlRequest/index.ts");
			const c = (e, t) => Object(r.a)(e, Object.assign(Object.assign({}, a), {
				variables: t
			}), {
				traceRequestName: "get_blocked_redditors_info"
			});
			var i = s("./src/reddit/selectors/blockedRedditors.ts");
			const o = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				b = "BLOCKED_REDDITORS_LIST__PENDING",
				g = Object(n.a)(o),
				p = Object(n.a)(d),
				O = Object(n.a)(l),
				f = Object(n.a)(u),
				j = Object(n.a)(b),
				y = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const a = t(),
						r = Object(i.a)(a);
					if (Object(i.b)(a) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let o = !1,
						d = "";
					do {
						e(j());
						const t = {
								after: d,
								pageSize: 100
							},
							s = await c(n(), t);
						if (s && s.ok) {
							const {
								data: {
									identity: t
								}
							} = s.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: s,
									edges: n
								} = t.blockedRedditorsInfo;
								if (e(f(n.map(e => e.node.id))), s) {
									const {
										hasNextPage: e,
										endCursor: t
									} = s;
									o = e, d = t || ""
								}
							} else o = !1
						} else {
							o = !1;
							const t = s.error ? s.error.type : "unknown error";
							e(O({
								message: t
							}))
						}
					} while (o)
				}
		},
		"./src/reddit/actions/bulkActions/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "BULKACTION_PENDING",
				a = "BULKACTION_LOADED",
				r = "BULKACTION_FAILED"
		},
		"./src/reddit/actions/chat/constants.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
				}(n || (n = {}))
		},
		"./src/reddit/actions/chat/subredditChannel.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "j", (function() {
				return w
			})), s.d(t, "b", (function() {
				return T
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/endpoints/chat/index.ts"),
				r = s("./src/reddit/models/SubredditChannel/index.ts"),
				c = s("./src/reddit/selectors/chat.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const o = "SUBREDDIT_CHANNELS__REQUESTED",
				d = "SUBREDDIT_CHANNELS__ADDED",
				l = "SUBREDDIT_CHANNELS__FAILED",
				u = "SUBREDDIT_CHANNEL__ADDED",
				b = "SUBREDDIT_CHANNEL__SELECTED",
				g = "SUBREDDIT_CHANNEL__EDITED",
				p = "SUBREDDIT_CHANNEL__REMOVED",
				O = Object(n.a)(b),
				f = Object(n.a)(o),
				j = Object(n.a)(l),
				y = Object(n.a)(d),
				h = Object(n.a)(u),
				m = Object(n.a)("SUBREDDIT_CHANNEL__FAILED"),
				v = e => async (t, s, n) => {
					let {
						apiContext: i
					} = n;
					const {
						user: {
							account: o,
							session: d
						}
					} = s();
					if (!o || !d) return;
					t(f({
						subredditId: e
					}));
					const l = Object(c.e)(s(), {
							subredditId: e
						}),
						u = await Object(a.i)(i(), e, l);
					if (u.ok) {
						const {
							rooms: s,
							subreddit_chat_enabled: n,
							user_subreddit_chat_enabled: a
						} = u.body, c = Object(r.d)(s);
						t(y({
							collection: c,
							subredditId: e,
							isSubredditWhitelisted: !!n,
							isUserSubredditChatEnabled: !!a
						}))
					} else if (u.error) {
						const {
							error: s
						} = u;
						t(j({
							error: s,
							subredditId: e
						}))
					}
				}, _ = (e, t) => async (s, n, c) => {
					let {
						apiContext: i
					} = c;
					const {
						user: {
							account: o,
							session: d
						}
					} = n();
					if (!o || !d) return;
					const l = await Object(a.d)(i(), d, t);
					if (l.ok) {
						const n = Object(r.e)(Object.assign(Object.assign({}, l.body), t));
						return await s(h({
							channel: n,
							subredditId: e
						})), n
					}
					s(m(l.error))
				}, E = (e, t) => async (s, n, r) => {
					let {
						apiContext: c
					} = r;
					const {
						channelSendbirdUrl: i
					} = e, {
						user: {
							session: o
						}
					} = n();
					if (!o) return;
					const d = await Object(a.f)(c(), i, o, t);
					d.ok ? s(I({
						channel: e,
						editedSubredditChannelData: t
					})) : s(m(d.error))
				}, I = Object(n.a)(g), w = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const {
						channelId: c,
						channelSendbirdUrl: o
					} = e, d = s();
					if (!Object(i.I)(d)) return;
					const l = await Object(a.e)(r(), o);
					l.ok ? t(S(c)) : t(m(l.error))
				}, S = Object(n.a)(p), T = "SUBREDDIT_CHANNELS__ENABLED";
			Object(n.a)(T)
		},
		"./src/reddit/actions/chat/subredditSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/endpoints/chat/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const c = "CHAT_SUBREDDIT_SETTINGS__SET",
				i = Object(n.a)(c),
				o = Object(n.a)("CHAT_SUBREDDIT_SETTINGS__SET_FAILED"),
				d = async (e, t, s) => {
					try {
						if (s) return await e(i(Object.assign({
							subredditId: t
						}, s))), s
					} catch (n) {
						o(n)
					}
				}, l = e => async (t, s, n) => {
					let {
						apiContext: c
					} = n;
					try {
						const n = s();
						if (!Object(r.I)(n)) return;
						const i = await Object(a.g)(c(), e);
						return d(t, e, i)
					} catch (i) {
						o(i)
					}
				}, u = (e, t) => async (s, n, c) => {
					let {
						apiContext: i
					} = c;
					try {
						const c = n();
						if (!Object(r.I)(c)) return;
						const o = await Object(a.j)(i(), e, t);
						o.ok && d(s, e, o.body)
					} catch (l) {
						o(l)
					}
				}
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts");
			var u = s("./src/reddit/helpers/trackers/chat.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/telemetry/index.ts"),
				p = s("./src/reddit/actions/chat/constants.ts");
			const O = Object(a.a)("USER_SETTINGS__FETCH_PENDING"),
				f = Object(a.a)("USER_SETTINGS__FETCH_FAILURE"),
				j = "USER_SETTINGS__UPDATE_SUCCESS",
				y = Object(a.a)(j),
				h = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					e(O());
					const a = await (e => Object(o.a)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(c.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/me/settings"),
						method: i.db.GET
					}))(n());
					if (a.ok) {
						const t = Object.assign({}, a.body);
						e(y({
							invitePolicy: p.a[t.invite_policy]
						}))
					} else e(f(a.error))
				}, m = Object(a.a)("USER_SETTINGS__SAVE_PENDING"), v = Object(a.a)("USER_SETTINGS__SAVE_FAILURE"), _ = e => async (t, s, a) => {
					let {
						apiContext: O
					} = a;
					const f = s(),
						{
							invitePolicy: j
						} = e,
						h = Object.keys(p.a).find(e => p.a[e] === j);
					if (h) {
						t(m());
						const e = await (async (e, t) => Object(o.a)(Object(d.a)(t, [l.a]), {
							endpoint: "".concat(c.a.sendbirdServiceUrl, "/").concat("api/v1", "/chat/me/settings"),
							method: i.db.PUT,
							data: JSON.stringify({
								invite_policy: e
							})
						}))(h, O());
						if (Object(g.a)(Object(u.f)(h)(f)), e.ok) {
							const e = p.a[h];
							t(y({
								invitePolicy: e
							})), t(Object(r.e)({
								kind: b.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "4eTtdy"
								})
							}))
						} else t(v(e.error))
					}
				}
		},
		"./src/reddit/actions/claimgold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return O
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "h", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/models/Toast/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var b = async (e, t) => {
				const {
					code: s
				} = t, n = {
					api_type: "json",
					code: s,
					raw_json: 1
				};
				return Object(o.a)(Object(d.a)(e, [l.a]), {
					method: i.db.POST,
					endpoint: "".concat(e.apiUrl, "/api/claimgold"),
					data: n
				}).then(e => e.ok ? Object.assign({}, e) : Object.assign(Object.assign({}, e), {
					error: Object(u.a)(e)
				}))
			}, g = s("./src/reddit/helpers/genericServerError/index.ts"), p = s("./src/reddit/selectors/claimgold.ts");
			const O = "CLAIMGOLD__OPEN_CLAIMGOLD_MODAL",
				f = "CLAIMGOLD__CLOSE_CLAIMGOLD_MODAL",
				j = Object(a.a)(O),
				y = Object(a.a)(f),
				h = () => async (e, t) => {
					const s = t();
					Object(p.b)(s) ? e(y()) : e(j())
				}, m = "CLAIMGOLD_UPDATE_CODE", v = Object(a.a)(m), _ = "CLAIM_GOLD__TRIGGER_LOADER", E = "CLAIM_GOLD__CLAIM_GOLD_PENDING", I = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", w = "CLAIM_GOLD__CLAIM_GOLD_FAILED", S = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const a = {
						code: t().claimGold.code
					};
					e(A());
					try {
						const t = await b(n(), a);
						t.error ? e(D(t)) : e(k())
					} catch (r) {
						e(D(r))
					}
				}, T = Object(a.a)(_), C = Object(a.a)(E), A = () => async (e, t) => {
					e(C()), window.setTimeout(() => {
						t().claimGold.api.pending && e(T())
					}, 2e3)
				}, P = Object(a.a)(w), D = e => async (t, s) => {
					await t(P(Object.assign(Object.assign({}, e), {
						error: e.error || Object(g.a)()
					})));
					const n = s().claimGold.api.error;
					n && t(Object(r.e)({
						kind: c.b.Error,
						duration: r.a,
						text: n
					}))
				}, R = Object(a.a)(I), k = () => async (e, t) => {
					e(R()), e(Object(r.e)({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("You have redeemed your gift code successfully", null, {
							hk: "18mkH2"
						})
					}))
				}
		},
		"./src/reddit/actions/comment/list.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/helpers/trackers/commentList.ts");
			const r = "COMMENTLIST__MARKED_END",
				c = "COMMENTLIST__UNMARKED_END",
				i = Object(n.a)(r),
				o = Object(n.a)(c),
				d = (e, t) => async (s, n) => {
					const r = n();
					e in r.profileCommentsPage.fetchedTokens ? e in r.profileCommentsPage.commentIds ? s(o({
						listingKey: e
					})) : Object(a.a)(r, e) : s(i({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/comment/websocket/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			}));
			const n = "COMMENT__LIVECOMMENTS__NEWCOMMENT",
				a = "COMMENT__LIVECOMMENTS__UPDATECOMMENT",
				r = "COMMENT__LIVECOMMENTS_DELETECOMMENT",
				c = "COMMENT__LIVECOMMENTS__USERJOIN"
		},
		"./src/reddit/actions/commentsListTruncated/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = "COMMENTS_LIST__EXPANDED",
				a = "COMMENTS_LIST__TRUNCATED"
		},
		"./src/reddit/actions/dismissedTruncationList/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "DISMISSED_TRUNCATION_LIST__ADD_SUBREDDIT_ID"
		},
		"./src/reddit/actions/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return v
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "j", (function() {
				return N
			})), s.d(t, "h", (function() {
				return L
			})), s.d(t, "i", (function() {
				return x
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/chat/toggle.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				o = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/constants/headers.ts");
			const g = "".concat("api/v1", "/sendbird");
			var p = s("./src/reddit/helpers/parseUrl.ts"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/telemetry/models/Event.ts");
			var j = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/selectors/downToChat.ts"),
				h = s("./src/telemetry/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = "FETCH_DOWN_TO_CHAT_AVAILABILITY__PENDING", _ = "FETCH_DOWN_TO_CHAT_AVAILABILITY__SUCCESS", E = "FETCH_DOWN_TO_CHAT_AVAILABILITY__FAILED", I = "DISMISS_DOWN_TO_CHAT_BANNER__PENDING", w = "DISMISS_DOWN_TO_CHAT_BANNER__SUCCESS", S = "DISMISS_DOWN_TO_CHAT_BANNER__FAILED", T = "DISMISS_EACH_SUBREDDIT_BANNER", C = Object(n.a)(v), A = Object(n.a)(_), P = Object(n.a)(E), D = Object(n.a)(I), R = Object(n.a)(w), k = (Object(n.a)(S), Object(n.a)(T)), N = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				const r = s();
				if (Object(y.a)(r, e)) return;
				t(C({
					subredditId: e
				}));
				const c = await (async (e, t) => Object(l.a)(Object(u.a)(e, [b.a]), {
					endpoint: "".concat(o.a.sendbirdServiceUrl, "/").concat(g, "/down_to_chat/availability"),
					method: d.db.GET,
					type: "json",
					data: {
						subreddit_id: t
					}
				}))(a(), e);
				if (c.ok && c.body) {
					const {
						feature_enabled: s,
						experiment_enabled: n
					} = c.body;
					if (t(A({
							subredditId: e,
							bannerEnabled: s,
							buttonEnabled: n
						})), s) {
						const e = (e => Object.assign({
							source: f.b.Chat,
							action: f.a.View,
							noun: "down_to_chat_subreddit_entry",
							subreddit: Object(O.subreddit)(e)
						}, Object(O.defaults)(e)))(r);
						Object(h.a)(e)
					}
				} else t(P({
					subredditId: e,
					error: "Failed to fetch subreddit's down to chat availability data"
				}))
			}, L = e => async (t, s, n) => {
				let {
					apiContext: a
				} = n;
				t(D({
					subredditId: e
				}));
				const r = await (async (e, t) => Object(l.a)(Object(u.a)(e, [b.a]), {
					endpoint: "".concat(o.a.sendbirdServiceUrl, "/").concat(g, "/down_to_chat/availability"),
					method: d.db.DELETE,
					data: {
						subreddit_id: t
					}
				}))(a(), e);
				if (r.ok && r.body) {
					const {
						feature_enabled: s,
						experiment_enabled: n
					} = r.body;
					t(R({
						subredditId: e,
						bannerEnabled: s,
						buttonEnabled: n
					})), s || t(k())
				}
				const c = (e => Object.assign({
					source: f.b.Chat,
					action: f.a.Dismiss,
					noun: "down_to_chat_subreddit_entry",
					subreddit: Object(O.subreddit)(e)
				}, Object(O.defaults)(e)))(s());
				Object(h.a)(c)
			}, x = e => async (t, s, n) => {
				let {
					apiContext: y
				} = n;
				const v = await (async (e, t) => Object(l.a)(Object(u.a)(e, [b.a]), {
					endpoint: "".concat(o.a.sendbirdServiceUrl, "/").concat(g, "/down_to_chat/join"),
					method: d.db.POST,
					type: "json",
					data: {
						subreddit_id: t
					}
				}))(y(), e);
				if (v.ok && v.body) {
					t(Object(r.i)(i.a.DOWN_TO_CHAT_PENDING_MODAL));
					const {
						deeplink_url: e
					} = v.body, s = Object(p.a)(e);
					s && s.pathname && t(Object(a.c)({
						channelUrl: s.pathname
					}))
				} else t(Object(c.e)({
					kind: j.b.Error,
					duration: c.a,
					text: m._("Failed to join a subreddit channel", null, {
						hk: "mZam3"
					})
				}));
				setTimeout(() => t(Object(r.f)()), 1e3);
				const _ = (e => Object.assign({
					source: f.b.Chat,
					action: f.a.Click,
					noun: "down_to_chat_subreddit_entry",
					subreddit: Object(O.subreddit)(e)
				}, Object(O.defaults)(e)))(s());
				Object(h.a)(_)
			}
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			}));
			const n = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				a = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				r = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				c = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				a = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				a = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				r = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/predictions/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "PREDICTION_VOTE_SUCCESS"
		},
		"./src/reddit/actions/emoji.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return E
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "h", (function() {
				return A
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "f", (function() {
				return D
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "q", (function() {
				return U
			})), s.d(t, "p", (function() {
				return G
			})), s.d(t, "l", (function() {
				return B
			})), s.d(t, "m", (function() {
				return q
			})), s.d(t, "j", (function() {
				return K
			})), s.d(t, "k", (function() {
				return V
			})), s.d(t, "b", (function() {
				return H
			})), s.d(t, "n", (function() {
				return Q
			})), s.d(t, "e", (function() {
				return J
			})), s.d(t, "o", (function() {
				return Y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/forEach.js"),
				r = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/lib/uploadToS3/index.ts"),
				l = s("./src/reddit/constants/headers.ts");
			const u = async (e, t) => Object(i.a)(Object(o.a)(e, [l.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/emojis/all"),
				method: c.db.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const s = r()(e, (e, s) => ("snoomojis" !== s && (t = s), r()(e, (t, s) => {
					e[s] = {
						name: s,
						userFlairAllowed: t.user_flair_allowed,
						postFlairAllowed: t.post_flair_allowed,
						modFlairOnly: t.mod_flair_only,
						url: t.url
					}
				})));
				return {
					[t]: {
						emojis: s[t],
						snoomojis: s.snoomojis
					}
				}
			})(e.body)), e));
			var b = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/reddit/actions/imageUploads.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				O = s("./src/reddit/helpers/getGenericUploadError.ts"),
				f = s("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				j = s("./src/reddit/helpers/media/index.ts"),
				y = s("./src/reddit/models/Emoji/index.ts"),
				h = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/emojis.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts");
			const E = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				I = Object(b.a)(E),
				w = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				S = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				T = Object(b.a)(w),
				C = Object(b.a)(S),
				A = "GET_ALL_EMOJIS_PENDING",
				P = "GET_ALL_EMOJIS_LOADED",
				D = "GET_ALL_EMOJIS_FAILED",
				R = Object(b.a)(A),
				k = Object(b.a)(P),
				N = Object(b.a)(D),
				L = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				x = Object(b.a)(L),
				M = e => ({
					text: n.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: G(e)
				}),
				U = e => {
					let {
						imageData: t,
						subredditId: s
					} = e;
					return async (e, n, a) => {
						const r = n(),
							u = Object(_.S)(r, {
								subredditId: s
							}).name;
						e(Object(g.k)(t));
						const b = t.file,
							p = await Object(j.g)(b),
							O = await (async (e, t, s, n) => Object(i.a)(Object(o.a)(e, [l.a]), {
								endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/emoji_asset_upload_s3.json"),
								method: c.db.POST,
								data: {
									filepath: s,
									mimetype: n
								}
							}))(a.apiContext(), u, b.name, p);
						let f = !1;
						if (O.ok) {
							const s = await (async (e, t, s) => Object(d.a)(s, t))(a.apiContext(), O.body.s3UploadLease, b);
							if (s.ok) {
								if (!n().imageUploads[t.id]) return Object(h.d)(t), !1;
								const a = decodeURIComponent(s.body.PostResponse.Location),
									r = O.body.websocketUrl,
									c = Object(h.n)(t, a, r);
								e(Object(g.j)(c)), f = !0
							} else {
								const n = Object(h.k)(t, s.error);
								e(Object(g.i)(n))
							}
						} else {
							const s = Object(h.k)(t, O.error);
							e(Object(g.i)(s))
						}
						return f
					}
				},
				F = (e, t) => async (s, n, a) => {
					const {
						imageData: r,
						subredditId: d,
						emojiName: u,
						settings: b
					} = e, O = Object(f.a)(r.url), j = n(), y = Object(_.S)(j, {
						subredditId: d
					}).name, m = await (async (e, t, s, n, a) => Object(i.a)(Object(o.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/emoji.json"),
						method: c.db.POST,
						data: {
							s3_key: s,
							name: n,
							mod_flair_only: a.modFlairOnly,
							post_flair_allowed: a.postFlairAllowed,
							user_flair_allowed: a.userFlairAllowed
						}
					}))(a.apiContext(), y, O, u, b);
					if (!m.ok) {
						const n = Object(h.k)(r, m.error);
						s(Object(g.i)(n)), s(Object(p.e)(M(e))), t && t.close()
					}
					return m.ok
				}, G = e => async (t, s, n) => {
					const {
						imageData: a,
						subredditId: r,
						emojiName: c,
						settings: i
					} = e;
					if (t(Object(g.k)(a)), !a.websocketUrl) return t(Object(p.e)({
						text: "Could not upload emoji"
					}));
					let o;
					const d = new WebSocket(a.websocketUrl);
					return d.onopen = async () => {
						o = await F(e, d)(t, s, n)
					}, d.onmessage = s => {
						const n = JSON.parse(s.data);
						if ("success" === n.type) {
							o = !0;
							const e = n.payload.emoji_url,
								s = Object(h.o)(a, e);
							t(Object(g.l)(s));
							const d = Object(y.e)(c, s.url, r, i);
							t(I(d)), t(B(r))
						} else {
							const s = Object(O.a)(c),
								n = Object(h.k)(a, s);
							t(Object(g.i)(n)), t(Object(p.e)(M(e)))
						}
						d.close()
					}, d.onerror = s => {
						o = !1;
						const n = Object(O.a)(c),
							r = Object(h.k)(a, n);
						t(Object(g.i)(r)), t(Object(p.e)(M(e))), d.close()
					}, o
				}, B = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const r = s();
					if (Object(v.a)(r, e)) return;
					const c = Object(_.S)(r, {
						subredditId: e
					}).name;
					t(R(e));
					const i = await u(a(), c);
					if (i.ok) {
						const s = i.body;
						t(k({
							subredditId: e,
							data: s
						}))
					} else t(N({
						subredditId: e,
						error: i.error
					}))
				}, q = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					s().emojis[e] || await t(B(e))
				}, K = (e, t) => async (s, a, r) => {
					let {
						apiContext: d
					} = r;
					const u = a(),
						b = Object(_.S)(u, {
							subredditId: t
						}).name,
						g = await (async (e, t, s) => Object(i.a)(Object(o.a)(e, [l.a]), {
							endpoint: "".concat(e.apiUrl, "/api/v1/").concat(s, "/emoji/").concat(t),
							method: c.db.DELETE,
							type: "json"
						}))(d(), e, b);
					if (g.ok) {
						s(T({
							emojiName: e,
							subredditId: t
						})), s(p.e({
							kind: m.b.SuccessCommunityGreen,
							text: n.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else s(C(g.error)), s(p.e({
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, V = (e, t) => async (s, a, r) => {
					let {
						apiContext: d
					} = r;
					const u = a(),
						b = Object(_.S)(u, {
							subredditId: e
						}).name;
					if ((await (async (e, t, s) => Object(i.a)(Object(o.a)(e, [l.a]), {
							endpoint: "".concat(e.apiUrl, "/api/enable_emojis_in_sr.json"),
							method: c.db.POST,
							data: {
								subreddit: t,
								enable: s
							}
						}))(d(), b, t)).ok) {
						s(x({
							subredditId: e,
							emojisEnabled: t
						}))
					} else s(p.e({
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, H = "EMOJI_CUSTOM_SIZE_UPDATED", W = Object(b.a)(H), Q = (e, t) => async (s, a, r) => {
					let {
						apiContext: d
					} = r;
					const u = a(),
						b = Object(_.S)(u, {
							subredditId: e
						}).name;
					(await (async (e, t, s) => Object(i.a)(Object(o.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/emoji_custom_size"),
						method: c.db.POST,
						data: s
					}))(d(), b, t)).ok ? s(W({
						subredditId: e,
						emojiCustomSize: t
					})) : s(p.e({
						kind: m.b.Error,
						text: n.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, J = "EMOJI_PERMISSIONS_UPDATED", z = Object(b.a)(J), Y = (e, t, s, a) => async (r, d, u) => {
					let {
						apiContext: b
					} = u;
					const g = d(),
						O = Object(_.S)(g, {
							subredditId: a
						}).name;
					(await (async (e, t, s, n) => Object(i.a)(Object(o.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(s, "/emoji_permissions.json"),
						method: c.db.POST,
						data: {
							name: t,
							post_flair_allowed: n.postFlairAllowed,
							user_flair_allowed: n.userFlairAllowed,
							mod_flair_only: n.modFlairOnly
						}
					}))(b(), e, O, s)).ok ? (r(z({
						emojiName: e,
						isSnoomoji: t,
						settings: s,
						subredditId: a
					})), r(p.e({
						kind: m.b.SuccessCommunityGreen,
						text: n.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : r(p.e({
						kind: m.b.Error,
						text: n.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
		},
		"./src/reddit/actions/experiments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./src/lib/makeActionCreator/index.ts");
			s("./src/reddit/endpoints/user/index.ts"), s("./src/reddit/models/Post/index.ts"), s("./src/reddit/selectors/telemetry.ts");
			const a = "EXPERIMENTS__REQUEST_LOADED",
				r = (Object(n.a)("EXPERIMENTS__REQUEST_PENDING"), Object(n.a)("EXPERIMENTS__REQUEST_FAILED"), Object(n.a)(a), "EXPERIMENTS__SET_EXPERIMENT_OVERRIDE"),
				c = Object(n.a)(r)
		},
		"./src/reddit/actions/exportImportStyles.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/structuredStyles/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/reddit/models/StructuredStyles/index.ts"),
				d = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const u = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				b = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				g = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				p = Object(r.a)(u),
				O = Object(r.a)(b),
				f = Object(r.a)(g),
				j = Object(r.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				y = Object(r.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				h = Object(r.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				m = e => async (t, r) => {
					t(p());
					const c = r(),
						o = Object(l.S)(c, {
							subredditId: e
						}).name,
						u = c.structuredStyles.models[e],
						b = await Object(a.a)(() => Promise.all([s.e("vendors~ExportTheme~ImportTheme"), s.e("ExportTheme")]).then(s.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						g = await b(u, o);
					g.ok ? (t(O()), t(Object(i.e)({
						kind: d.b.SuccessMod,
						text: n.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(f(g.error)), t(Object(i.e)({
						kind: d.b.Error,
						text: n.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, v = e => async (t, r) => {
					t(j());
					const l = await Object(a.a)(() => Promise.all([s.e("vendors~ExportTheme~ImportTheme"), s.e("ImportTheme")]).then(s.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						u = await l(e);
					u.ok ? (t(y()), t(Object(i.e)({
						kind: d.b.SuccessMod,
						text: n.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(u.attributes).length && t(Object(c.d)(Object(o.j)(u.attributes)))) : (t(h(u.error)), t(Object(i.e)({
						kind: d.b.Error,
						text: n.fbt._("Sorry, theme failed to import", null, {
							hk: "4BqW32"
						})
					})))
				}
		},
		"./src/reddit/actions/flairManagement/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = "FLAIR_PREVIEW_EXAMPLE_POST_CREATED",
				a = "FLAIR_PREVIEW_EXAMPLE_POST_DELETED"
		},
		"./src/reddit/actions/frontpage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "e", (function() {
				return T
			}));
			var n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				r = s("./src/lib/getParsedUserAgent/index.ts"),
				c = s("./src/reddit/actions/page.ts"),
				i = s("./src/reddit/constants/parameters.ts"),
				o = s("./src/reddit/endpoints/page/frontpage.ts"),
				d = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				l = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				u = s("./src/lib/makeActionCreator/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/constants/page.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/filterListingResponse/index.ts"),
				y = s("./src/reddit/selectors/frontpage.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const m = "FRONTPAGE__MORE_POSTS_PENDING",
				v = "FRONTPAGE__MORE_POSTS_LOADED",
				_ = "FRONTPAGE__MORE_POSTS_FAILED",
				E = Object(u.a)(m),
				I = Object(u.a)(v),
				w = Object(u.a)(_),
				S = e => async (t, s, n) => {
					let {
						apiContext: c,
						gqlContext: u
					} = n;
					const m = s(),
						v = Object(y.a)(m),
						{
							sort: _ = v
						} = e,
						S = m.platform.currentPage ? m.platform.currentPage.queryParams : {},
						T = Object(b.a)(p.a, _, S),
						C = m.listings.postOrder.loadMore[T],
						A = S[i.x] ? S[i.x].toUpperCase() : "",
						P = A in g.Sb && g.Sb[A];
					if (C) {
						const e = m.listings.postOrder.api.pending[T],
							s = m.listings.postOrder.fetchedTokens,
							n = !(!s[T] || !s[T][C.token]);
						if (!e && !n) {
							t(E({
								key: T,
								fetchedToken: C.token
							}));
							const e = !!m.platform.currentPage && !!m.platform.currentPage.queryParams.useMockData,
								s = Object(d.a)(m),
								n = O.a,
								c = [Object(d.c)(s)],
								b = Object.assign(Object.assign({
									after: C.token,
									dist: C.dist
								}, a()(S, i.l)), {
									isMobile: Object(r.e)(m.meta.userAgent),
									limit: n,
									sort: _,
									t: Object(l.a)(_, P),
									layout: O.e[Object(f.N)(m, {})],
									useMockData: e
								}); {
								const e = m.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							const g = () => Object(o.a)(u(), Object(o.b)(m, b), Object(h.P)(m), c),
								p = await g(),
								y = Object.assign(Object.assign({}, p.body), Object(j.a)(m, T, p.body));
							p.ok ? t(I(Object.assign({
								key: T,
								fetchedToken: C.token,
								meta: m.meta
							}, y))) : t(w(Object.assign({
								key: T,
								error: p.error,
								fetchedToken: C.token
							}, y)))
						}
					}
				}, T = e => async (t, s) => {
					const n = s(),
						a = Object(y.a)(n),
						{
							sort: r = a
						} = e,
						o = n.platform.currentPage ? n.platform.currentPage.queryParams : {},
						u = Object(b.a)(p.a, r, o),
						O = o[i.x] ? o[i.x].toUpperCase() : "",
						f = O in g.Sb && g.Sb[O],
						j = Object(d.a)(n),
						h = Object(d.b)(j);
					await t(Object(c.w)(u, {
						limit: h,
						sort: r,
						t: Object(l.a)(r, f)
					}))
				}
		},
		"./src/reddit/actions/googleOneTap/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/login.ts"),
				r = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/activeModalId.ts"),
				o = s("./src/reddit/selectors/experiments/googleOneTap.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = "GOOGLE_ONE_TAP_ENABLED",
				u = Object(n.a)(l),
				b = () => async (e, t) => {
					const s = t(),
						n = Object(d.I)(s),
						a = Object(o.b)(s);
					n && Object(o.d)(a) && e(u())
				}, g = () => async (e, t) => {
					const s = t(),
						n = Object(d.I)(s),
						r = Object(o.b)(s),
						c = !!Object(i.a)(s);
					n || c || !Object(o.e)(r) && !Object(o.d)(r) || e(Object(a.e)())
				}, p = e => {
					Object(c.d)(e, {
						experimentName: r.H
					})
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "l", (function() {
				return p
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "n", (function() {
				return f
			})), s.d(t, "o", (function() {
				return j
			})), s.d(t, "p", (function() {
				return y
			})), s.d(t, "q", (function() {
				return h
			})), s.d(t, "r", (function() {
				return m
			})), s.d(t, "s", (function() {
				return v
			})), s.d(t, "t", (function() {
				return _
			})), s.d(t, "u", (function() {
				return E
			})), s.d(t, "v", (function() {
				return I
			})), s.d(t, "w", (function() {
				return w
			})), s.d(t, "x", (function() {
				return S
			}));
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				a = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				r = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				c = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				i = "POLL_VOTE_SUCCESS",
				o = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				g = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				O = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				j = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				y = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				h = "GOVERNANCE__TRANSFER_FAILURE",
				m = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				v = "GOVERNANCE__TRANSFER_PENDING",
				_ = "GOVERNANCE__TRANSFER_SUCCESS",
				E = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				I = "GOVERNANCE__WALLETS_FETCH_PENDING",
				w = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				S = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				r = s("./src/reddit/models/Toast/index.ts");

			function c(e, t) {
				e(Object(n.e)({
					duration: 5e3,
					kind: r.b.Error,
					text: Object(a.a)(t)
				}))
			}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return n
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "l", (function() {
				return c
			})), s.d(t, "k", (function() {
				return i
			})), s.d(t, "j", (function() {
				return o
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return p
			}));
			const n = "SUBREDDIT__FLAIRED_USERS_PENDING",
				a = "SUBREDDIT__FLAIRED_USERS_LOADED",
				r = "SUBREDDIT__FLAIRED_USERS_FAILED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				o = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				g = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/harbergerTax/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return b
			}));
			const n = "HARBERGER_TAX__BANNER_MANAGE_MODAL_OPENED",
				a = "HARBERGER_TAX__BANNER_PURCHASE_MODAL_OPENED",
				r = "HARBERGER_TAX__BANNER_CRYPTO_MANAGE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				i = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
				o = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				d = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
				l = "HARBERGER_TAX__BANNER_UPDATE_FAILURE",
				u = "HARBERGER_TAX__BANNER_UPDATE_PENDING",
				b = "HARBERGER_TAX__BANNER_UPDATE_SUCCESS"
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const a = "INCONTEXT__BANNED",
				r = "INCONTEXT__MUTED",
				c = Object(n.a)(a),
				i = Object(n.a)(r)
		},
		"./src/reddit/actions/inboxNotifications/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "INBOX_NOTIFICATIONS__PENDING",
				a = "INBOX_NOTIFICATIONS__LOADED",
				r = "INBOX_NOTIFICATIONS__FAILED"
		},
		"./src/reddit/actions/isTrackingCrossposts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/endpoints/post/index.tsx");
			const r = "TRACKING_CROSSPOSTS_LOADED",
				c = Object(n.a)(r),
				i = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					const i = await Object(a.e)(r(), {
						postId: e
					});
					if (i.ok) {
						const {
							isTrackingCrossposts: s
						} = i.body.data.postInfoById;
						t(c({
							[e]: s
						}))
					}
				}
		},
		"./src/reddit/actions/leaderboard/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				a = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				r = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
		},
		"./src/reddit/actions/meta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const a = "META__GEO_CHANGED",
				r = Object(n.a)(a),
				c = "META__META_RECEIVED";
			Object(n.a)(c)
		},
		"./src/reddit/actions/modMode.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/@reddit/onetrust-integration/dist/esm/index.js"),
				a = s("./node_modules/js-cookie/src/js.cookie.js"),
				r = s.n(a),
				c = s("./src/config.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/constants/cookie.ts");
			const d = "MOD_MODE_TOGGLED",
				l = Object(i.a)(d),
				u = e => async (t, s, a) => {
					let i, {
						apiContext: d
					} = a;
					if (void 0 !== e) i = e;
					else {
						i = "false" === r.a.get(o.c)
					}
					Object(n.b)(o.c, i, {
						domain: c.a.cookieDomain
					}), (document.cookie.match(/mod_mode_enabled=/g) || []).length > 1 && Object(n.b)(o.c, "", {
						expires: 0,
						path: "/"
					});
					t(l({
						enabled: i
					}))
				}
		},
		"./src/reddit/actions/modQueue/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "j", (function() {
				return n
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return r
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "q", (function() {
				return b
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "w", (function() {
				return O
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "u", (function() {
				return j
			})), s.d(t, "t", (function() {
				return y
			})), s.d(t, "s", (function() {
				return h
			})), s.d(t, "r", (function() {
				return m
			})), s.d(t, "k", (function() {
				return v
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return w
			}));
			const n = "MODQUEUE_PENDING",
				a = "MODQUEUE_LOADED",
				r = "MODQUEUE_FAILED",
				c = "EDITED_PENDING",
				i = "EDITED_LOADED",
				o = "EDITED_FAILED",
				d = "REPORTS_PENDING",
				l = "REPORTS_LOADED",
				u = "REPORTS_FAILED",
				b = "SPAM_PENDING",
				g = "SPAM_LOADED",
				p = "SPAM_FAILED",
				O = "UNMODERATED_PENDING",
				f = "UNMODERATED_LOADED",
				j = "UNMODERATED_FAILED",
				y = "UNDOACTION_PENDING",
				h = "UNDOACTION_LOADED",
				m = "UNDOACTION_FAILED",
				v = "MORE_MODERATED_SUBREDDITS_LOADED",
				_ = "ALL_MODERATED_COMMUNITIES_LOADED",
				E = "ADD_SELECTED_ITEMS",
				I = "BULK_SELECT_ITEMS",
				w = "BULK_UNSELECT_ITEMS"
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/profile/index.ts"),
				r = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				c = s("./src/reddit/selectors/user.ts");
			const i = "MOD_PERMS__REQUEST_LOADED",
				o = (Object(n.a)("MOD_PERMS__REQUEST_PENDING"), Object(n.a)(i), Object(n.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(c.i)(t());
					if (s) {
						const t = Object(r.e)(s);
						await e(Object(a.b)(t))
					}
				})
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = "SUBREDDIT__MODERATION_LOG_LOADED",
				a = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			}));
			const n = "NOTIFICATION_SETTINGS_LAYOUT__PENDING",
				a = "NOTIFICATION_SETTINGS_LAYOUT__LOADED",
				r = "NOTIFICATION_SETTINGS_LAYOUT__FAILED",
				c = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED"
		},
		"./src/reddit/actions/notifications/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			}));
			const n = "PUSH__GET_PREFERENCES_PENDING",
				a = "PUSH__GET_PREFERENCES_LOADED",
				r = "PUSH__GET_PREFERENCES_FAILED",
				c = "PUSH__SET_PREFERENCES_PENDING",
				i = "PUSH__SET_PREFERENCES_LOADED",
				o = "PUSH__SET_PREFERENCES_FAILED"
		},
		"./src/reddit/actions/nps.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return g
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "d", (function() {
				return m
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/config.ts"),
				r = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts");
			var d = s("./node_modules/@r/frames/compiled.js"),
				l = s("./node_modules/lodash/debounce.js"),
				u = s.n(l),
				b = function(e) {
					document.body.appendChild(function(e) {
						let t;
						const s = u()((function() {
							t && t.contentWindow && d.postMessage(t.contentWindow, "resize.asknicely")
						}), 500);
						return function() {
							return t = function() {
								const t = document.createElement("iframe");
								return t.src = e, t.setAttribute("allowTransparency", "true"), t.style.display = "block", t.style.width = "100%", t.style.height = "1px", t.style.background = "transparent", t.style.border = "none", t
							}(), d.listen("embedjail"), d.receiveMessage(t.contentWindow, "open.embedjail", (function(e) {
								var n;
								n = e.detail, t.style.width = n.dimensions.width, t.style.height = n.dimensions.height, t.style.display = "block", t.style.position = "fixed", t.style.bottom = 0, t.style.zIndex = 2147483647, window.addEventListener("resize", s)
							})), d.receiveMessage(t.contentWindow, "close.embedjail", (function(e) {
								t.parentElement.removeChild(t), d.stopListening("asknicely"), window.removeEventListener("resize", s), t = void 0
							})), window.addEventListener("message", (function(e) {
								"https://live.asknice.ly" !== e.origin && "https://reddit.asknice.ly" !== e.origin || e.data && t && t.contentWindow && d.postMessage(t.contentWindow, e.data + ".asknicely")
							})), t
						}
					}(e)())
				};
			const g = "NPS__URL_PENDING",
				p = "NPS__URL_LOADED",
				O = "NPS__URL_FAILED",
				f = Object(n.a)(g),
				j = Object(n.a)(p),
				y = Object(n.a)(O);
			let h = !1;
			const m = () => async (e, t, s) => {
				const n = t();
				if (n.nps.pending) return;
				if (h) return;
				e(f());
				const d = n.platform.currentPage && n.platform.currentPage.queryParams.feature || "",
					l = !!n.user.account,
					u = await ((e, t, s) => Object(c.a)(Object(i.a)(e, [o.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: "".concat(s ? a.a.oauthUrl : a.a.apiUrl, "/api/jail/asknicely").concat(s ? "" : ".json"),
						method: r.db.GET,
						traceRequestName: "get_nps_survey"
					}))(s.apiContext(), d, l);
				if (u.ok) {
					const t = u.body;
					t.dest ? (e(j(t)), b(t.dest), h = !0) : e(y())
				} else e(y())
			}
		},
		"./src/reddit/actions/pages/chatSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "f", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/difference.js"),
				r = s.n(a),
				c = s("./src/telemetry/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/graphql/operations/GetSubredditChatSettings.json"),
				b = s("./src/lib/makeGqlRequest/index.ts");
			var g = (e, t) => Object(b.a)(e, Object.assign(Object.assign({}, u), {
					variables: t
				})),
				p = s("./src/graphql/operations/UpdateSubredditChatSettings.json");
			var O = (e, t) => Object(b.a)(e, Object.assign(Object.assign({}, p), {
					variables: t
				})),
				f = s("./src/reddit/selectors/telemetry.ts"),
				j = s("./src/telemetry/models/Event.ts");
			var y = s("./src/reddit/models/ChatSettingsPage/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/chatSettingsPage.ts");
			const _ = "FETCH_CHAT_SETTINGS__LOADED",
				E = "FETCH_CHAT_SETTINGS__FAILED",
				I = "FETCH_CHAT_SETTINGS__PENDING",
				w = "UPDATE_CHAT_SETTINGS__LOADED",
				S = Object(o.a)(_),
				T = Object(o.a)(E),
				C = Object(o.a)(I),
				A = Object(o.a)(w),
				P = e => async (t, s) => {
					const n = {
						subredditId: e
					};
					return !!Object(v.b)(s(), n) || (t(C(n)), !1)
				}, D = e => async (t, s, n) => {
					let {
						gqlContext: a
					} = n;
					const r = {
						subredditId: e
					};
					if (await t(P(e))) return;
					let c = null;
					const o = await g(a(), r);
					if (o.ok) {
						const t = o.body || {},
							n = t.data && t.data.subredditInfoById,
							a = n && n.chatSettings,
							i = !Object(m.e)(s(), r),
							d = Object(y.c)(a, e, i);
						c = Object.assign(Object.assign({}, r), {
							chatSettings: d
						})
					}
					if (c) t(S(c));
					else {
						const s = o.error || {
							type: i.E.UNKNOWN_ERROR
						};
						t(T(Object.assign(Object.assign({}, r), {
							error: s
						}))), d.c.withScope(t => {
							t.setExtra("info", {
								subredditId: e,
								responseBody: o.body,
								responseOk: o.ok
							}), d.c.captureMessage("Missing subreddit chat settings!")
						})
					}
				}, R = (e, t, s) => async (a, c, o) => {
					let {
						gqlContext: d
					} = o;
					if (await a(P(e))) return [];
					let u, b = !1;
					const g = r()(s, t),
						p = Object(y.b)(g);
					if (p && p.length) {
						const t = {
								subredditId: e,
								subredditChatSettings: p
							},
							s = await O(d(), {
								input: t
							});
						if (s.ok) {
							const e = (s.body || {}).data.updateSubredditChatSettings;
							b = !!e && e.ok
						} else u = s && s.error || {
							type: i.E.UNKNOWN_ERROR
						}
					}
					return b ? (a(A({
						subredditId: e,
						chatSettings: s
					})), a(N(t, g)), s) : (u && a(T({
						subredditId: e,
						error: u
					})), a(A({
						subredditId: e,
						chatSettings: t
					})), a(Object(l.e)({
						duration: l.a,
						id: "CHAT_SETTING_UPDATE_ERROR",
						kind: h.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3HpR6h"
						})
					})), t)
				}, k = {
					start_chatting_opt_out: (e, t, s) => Object.assign({
						source: j.b.Chat,
						action: j.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(f.subreddit)(e),
						setting: {
							oldValue: t,
							value: s
						}
					}, Object(f.defaults)(e))
				}, N = (e, t) => async (s, n) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const s = k[t.settingId],
								a = e.find(e => e.settingId === t.settingId);
							if (s && a) {
								const e = s(n(), a.state, t.state);
								Object(c.a)(e)
							}
						}
					})
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return G
			})), s.d(t, "b", (function() {
				return B
			})), s.d(t, "a", (function() {
				return q
			})), s.d(t, "e", (function() {
				return W
			})), s.d(t, "c", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				r = s("./src/lib/pageTitle.ts"),
				c = s("./src/lib/truncateText/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				o = s("./src/reddit/actions/economics/helpers/async.ts"),
				d = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				b = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/profile/index.ts"),
				p = s("./src/reddit/actions/shortcuts/active.ts"),
				O = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/actions/toaster.ts"),
				j = s("./src/reddit/constants/adEvents.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/constants/postCollection.ts"),
				m = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/endpoints/governance/posts.ts"),
				_ = s("./src/config.ts"),
				E = s("./src/lib/constants/index.ts"),
				I = s("./src/lib/makeApiRequest/index.ts"),
				w = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function S(e, t, s) {
				const n = "".concat(_.a.gatewayUrl, "/desktopapi/v1/collection_postcomments");
				return s ? Object(w.a)("".concat(n, "/").concat(e, "/").concat(t, "/").concat(s)) : t ? Object(w.a)("".concat(n, "/").concat(e, "/").concat(t)) : Object(w.a)("".concat(n, "/").concat(e))
			}
			var T = (e, t, s, n, a) => Object(I.a)(e, {
					data: a,
					endpoint: S(t, s, n),
					method: E.db.GET
				}),
				C = s("./src/reddit/endpoints/page/subredditPage.ts"),
				A = s("./src/reddit/helpers/canonicalUrls.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				D = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				R = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				k = s("./src/reddit/models/Comment/index.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				L = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				x = s("./src/reddit/selectors/platform.ts"),
				M = s("./src/reddit/selectors/postCollection.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/selectors/subreddit.ts");
			const G = "PAGE__COLLECTIONCOMMENTSPAGE_PENDING",
				B = "PAGE__COLLECTIONCOMMENTSPAGE_LOADED",
				q = "PAGE__COLLECTIONCOMMENTSPAGE_FAILED",
				K = Object(n.a)(G),
				V = Object(n.a)(B),
				H = Object(n.a)(q),
				W = e => async (t, s) => {
					const {
						collectionId: n,
						partialPostId: a,
						partialCommentId: i,
						subredditName: o = "",
						routePrefix: d
					} = e.params, l = a ? Object(N.m)(a) : "", f = i && Object(k.f)(i), {
						queryParams: j
					} = e, v = s(), {
						instanceId: _
					} = j, E = {
						id: n,
						type: m.b[d]
					}, I = m.b[d] === m.a.PROFILE, {
						hasSortParam: w,
						sortToUse: S
					} = Object(D.a)(v, l), T = ["context", "depth", "limit", y.f].reduce((e, t) => {
						const s = parseInt(j[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: o,
						hasSortParam: w,
						instanceId: _
					});
					w && (T.sort = S), t(b.l(l)), await Promise.all([I ? t(g.d(o)) : Promise.resolve(), t(Y(n, l, f, T))]);
					const C = ((e, t) => {
						const s = Object(M.r)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const n = Object(F.M)(e, {
								identifier: t
							}),
							a = Object(r.b)(s.title, n.name).toString();
						return Object(c.a)(a, h.c, " …")
					})(s(), E) || Object(r.c)();
					t(u.l({
						title: C
					}));
					const P = s().posts.models[l];
					if (P) {
						const n = Object(F.M)(s(), {
							identifier: P.belongsTo
						});
						if (!P.isSponsored)
							if (P.belongsTo.type === m.a.SUBREDDIT) {
								!!Object(F.R)(v, {
									subredditId: P.belongsTo.id
								}) || await t(O.o(n.name))
							} else await t(g.d(n.name));
						const a = s().posts.instances[l] ? e.queryParams.instanceId : P.postId;
						t(Object(p.b)(a))
					}
					I ? Object(A.d)(s(), t, e) : Object(A.e)(s(), t, e)
				}, Q = "PAGE__COLLECTIONCOMMENTSPAGE_LOADED_FULL", J = Object(n.a)(Q), z = (e, t, s, n) => async (r, c, i) => {
					const o = Object(a.a)(e, t, s, n),
						d = c();
					t = t || Object(M.q)(d, {
						collectionId: e
					});
					const l = await T(i.apiContext(), e, t, s, n);
					if (r(Object(u.m)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(P.a)(l.body, t, d);
						r(V(Object.assign({
							key: o,
							collectionId: e,
							meta: d.meta,
							postId: t,
							shouldCollapse: s
						}, l.body)));
						const n = d.user.prefs.commentMode;
						r(J({
							commentMode: n,
							key: o,
							postId: t
						}))
					} else r(H(Object.assign({
						error: l.error,
						key: o
					}, l.body)))
				}, Y = (e, t, s, n, r) => async (c, g, p) => {
					const O = Object(a.a)(e, t, s, n),
						y = g();
					t = t || Object(M.q)(y, {
						collectionId: e
					});
					const {
						subredditName: h
					} = n, m = y.commentsPage.keyToHeadCommentId.hasOwnProperty(O), _ = y.commentsPage.api.fullyLoaded[O], E = y.commentsPage.api.error[O];
					if (y.commentsPage.api.pending[O] || m && !E) {
						if (m && !y.sidebarPromotedPosts.firstFetch) {
							const e = Object(x.i)(y) ? L.a.COMMENTS_OVERLAY : L.a.COMMENTS;
							window.addEventListener("load", () => {
								c(Object(i.b)(e))
							})
						}
						return void(_ || r || c(z(e, t, s, n)))
					}
					const I = y.user.prefs.commentMode;
					c(K({
						key: O,
						collectionId: e,
						commentMode: I,
						postId: t
					}));
					const w = Object.assign({}, n); {
						const e = t && Object(U.N)(g(), {
							postId: t
						});
						e && e.numComments && e.numComments > d.i && (w.truncate = d.m)
					}
					let S, A = await Object(R.a)("comments", () => T(p.apiContext(), e, t, s, w));
					if (c(Object(u.m)(A.status)), A.ok && (t = t || A.body.collections[e].primaryPostId)) {
						const e = Object.keys(A.body.posts).filter(e => !!A.body.posts[e].isMeta),
							s = Object(U.N)(g(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(v.a)(p.apiContext(), s.belongsTo.id, e);
							t.ok && (S = t.body)
						}
					}
					if (!r) {
						const a = t ? Object(U.N)(g(), {
							postId: t
						}) : null;
						a && A.body.comments && Object.keys(A.body.comments).length < a.numComments ? c(z(e, t, s, n)) : A.ok && c(J({
							commentMode: I,
							key: O,
							postId: t
						}));
						const r = Object(x.i)(y) ? L.a.COMMENTS_OVERLAY : L.a.COMMENTS;
						c(Object(i.b)(r))
					}
					if (A.ok) {
						if (!t) return;
						const e = Object(P.a)(A.body, t, y);
						c(Object(d.s)(Object.assign({
							commentMode: I,
							key: O,
							postId: t,
							meta: y.meta,
							governance: S,
							shouldCollapse: e
						}, A.body))), c(f.f(O));
						const s = Object(U.N)(y, {
							postId: t
						});
						c(b.t(s, j.a.CommentsView)), !r && s && "subreddit" === s.belongsTo.type && A.body.comments && await c(Object(o.a)({
							commentIds: Object.keys(A.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else h && (c(Object(l.k)({
						key: O
					})), A = await Object(R.a)("subreddit", () => Object(C.a)(p.apiContext(), h, {})), c(Object(u.m)(A.status))), c(Object(l.f)(A, h)), c(H(Object.assign({
						error: A.error,
						key: O
					}, A.body)))
				}
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return x
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "d", (function() {
				return K
			})), s.d(t, "e", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/filterQueryParams/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makePostCreationPageKey/index.ts"),
				d = s("./src/lib/pageTitle.ts"),
				l = s("./src/reddit/actions/economics/helpers/async.ts"),
				u = s("./src/reddit/actions/externalAccount.ts"),
				b = s("./src/reddit/actions/gold/powerups.ts"),
				g = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/postCreation/general.ts"),
				f = s("./src/reddit/actions/postRequirements/index.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				y = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/actions/subredditDuplicates.ts"),
				m = s("./src/config.ts"),
				v = s("./src/lib/makeApiRequest/index.ts"),
				_ = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				I = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				w = s("./src/reddit/helpers/trackers/postComposer.ts"),
				S = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				A = s("./src/reddit/selectors/postCreations.ts"),
				P = s("./src/reddit/selectors/postRequirements.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/profile.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/user.ts");
			const L = e => {
					const t = e.platform.currentPage;
					let s = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, a = Object(k.B)(e, {
							subredditName: n
						});
						a && (s = a.name)
					}
					return Object(d.i)(s)
				},
				x = "POST_CREATION__PAGE_PENDING",
				M = "POST_CREATION__PAGE_LOADED",
				U = "POST_CREATION__PAGE_FAILED",
				F = Object(i.a)(x),
				G = Object(i.a)(M),
				B = Object(i.a)(U),
				q = () => async (e, t) => {
					const s = t(),
						n = Object(A.a)(s);
					n !== Object(A.gb)(s) && e(Object(O.g)({
						submissionType: n
					}))
				}, K = e => async (t, s, n) => {
					const {
						collectionId: r,
						profileName: i,
						subredditName: d
					} = e, l = Object(o.a)(e), g = s(), p = g.creations.api.page.pending[l], O = g.creations.api.page.fetched[l], h = g.creations.api.page.error[l];
					if (p) return;
					if (O && !h) return void t(q());
					const E = [];
					t(F({
						key: l
					}));
					let w = d;
					!d && i && (w = "u_".concat(i)), E.push(((e, t) => Object(v.a)(e, {
						method: a.db.GET,
						endpoint: Object(_.a)("".concat(m.a.gatewayUrl, "/desktopapi/v1/submitpage")),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: w,
						collectionId: r
					})), i && (E.push(t(j.d(i))), E.push(t(j.b(i))));
					const [C] = await Object(I.a)("postCreation", () => Promise.all(E));
					if (C.ok) {
						const e = C.body,
							{
								posts: n = {},
								subredditAboutInfo: a
							} = e;
						if (t(G(Object.assign(Object.assign({
								key: l,
								meta: g.meta
							}, e), {
								posts: n
							}))), !Object(N.I)(s())) return;
						if (a && Object(T.a)(g)) {
							const e = Object.keys(a)[0];
							await t(Object(b.f)(e, {
								fullData: !0
							}))
						}
						t(q());
						const r = [];
						r.push(t(u.o()));
						const i = Object(N.i)(s());
						if (i && i.hasUserProfile && r.push(t(j.d(Object(S.e)(i)))), d && !Object(c.a)(d)) {
							r.push(t(y.o(d))), !!Object(P.b)(s(), {
								subredditName: d
							}) || r.push(t(Object(f.a)(d)))
						}
						await Promise.all(r)
					} else t(B({
						error: C.error,
						key: l
					}))
				}, V = e => async (t, s) => {
					const {
						subredditName: c,
						profileName: i
					} = e.params, o = e.queryParams, d = o.collection;
					if (await t(K({
							collectionId: d,
							profileName: i,
							subredditName: c
						})), !Object(N.I)(s())) return void Object(E.a)(t, s());
					let u;
					if (c ? (u = Object(k.B)(s(), {
							subredditName: c
						}), await t(Object(l.a)({
							subredditName: c
						}))) : i && (u = Object(R.j)(s(), {
							profileName: i
						})), o.source_id) await t(((e, t) => async (s, n) => {
						const {
							subredditName: a,
							profileName: r
						} = e, c = [];
						let i;
						a ? i = Object(k.G)(n(), a) : r && (i = Object(N.ab)(n(), {
							userName: r
						})), i && c.push(s(Object(h.b)(i, t))), c.push(s(Object(p.I)(t))), await Promise.all(c);
						const o = Object(D.f)(n(), {
							postId: t
						});
						s(Object(O.k)({
							postId: t,
							postTitle: o ? o.title : ""
						}))
					})(e.params, o.source_id));
					else if (d) {
						const a = Object(C.r)(s(), {
							collectionId: d
						});
						u && a && a.subredditId === u.id || t(Object(n.c)(Object(r.a)(e.url, ["collection"])))
					}((e, t) => {
						const s = e.platform.lastPage;
						t && s && s.meta && s.meta.name === a.Bb.POST_CREATION && w.x(e)
					})(s(), c), t(g.l({
						title: L(s())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makePostDraftPageKey/index.ts"),
				r = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				u = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = s("./src/reddit/helpers/timeApiRoute/index.ts");
			const g = "POST_DRAFT__PAGE_LOADED",
				p = (Object(n.a)("POST_DRAFT__PAGE_PENDING"), Object(n.a)(g)),
				O = Object(n.a)("POST_DRAFT__PAGE_FAILED"),
				f = e => async (t, s, n) => {
					const {
						draftId: g,
						profileName: f
					} = e, j = Object(a.a)(e), y = s(), h = y.creations.api.page.pending[j], m = y.creations.api.page.fetched[j], v = y.creations.api.page.error[j];
					if (h || m && !v || !g) return;
					t(r.d(f));
					const _ = await Object(b.a)("postDraft", () => ((e, t, s) => Object(o.a)(e, {
						endpoint: Object(d.a)(Object(l.a)("".concat(c.a.gatewayUrl, "/desktopapi/v1/draftpreviewpage/").concat(s, "/").concat(t))),
						method: i.db.GET
					}))(n.apiContext(), g, f));
					if (_.ok) {
						const e = _.body;
						e.drafts[g].kind = Object(u.b)(e.drafts[g].kind), t(p(Object.assign(Object.assign({}, e), {
							key: j
						})))
					} else t(O({
						error: _.error,
						key: j
					}))
				}, j = e => async (t, s, n) => {
					await t(f(e.params))
				}
		},
		"./src/reddit/actions/pages/profileComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return D
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "h", (function() {
				return M
			})), s.d(t, "c", (function() {
				return U
			})), s.d(t, "b", (function() {
				return F
			})), s.d(t, "a", (function() {
				return G
			})), s.d(t, "g", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/lodash/difference.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/pick.js"),
				c = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				u = s("./src/reddit/actions/moderatingSubreddits.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				O = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/constants/errors.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/config.ts"),
				m = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				v = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				I = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const w = (e, t, s, n) => {
				let a = Object(m.a)(Object(I.a)("".concat(h.a.gatewayUrl, "/desktopapi/v1/user/").concat(t, "/comments")));
				return n && (a = Object(E.a)(a)), Object(_.a)(e, {
					data: s,
					endpoint: a,
					method: v.db.GET
				})
			};
			var S = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				A = s("./src/reddit/selectors/profile.ts"),
				P = s("./src/reddit/selectors/profileComments.ts");
			const D = "PAGE__PROFILE_COMMENTS_PENDING",
				R = "PAGE__PROFILE_COMMENTS_LOADED",
				k = "PAGE__PROFILE_COMMENTS_FAILED",
				N = Object(i.a)(D),
				L = Object(i.a)(R),
				x = Object(i.a)(k),
				M = e => async (t, s, n) => {
					const {
						queryParams: a,
						params: r
					} = e, {
						sort: i,
						t: y
					} = Object(b.b)(a), {
						profileName: h
					} = r, m = Object(o.a)("u_".concat(h), i, e.queryParams), {
						profileCommentsPage: v
					} = s(), _ = v.commentIds[m], E = v.api.error[m], I = v.api.pending[m];
					if (await t(p.d(h)), I || _ && !E) {
						if (_) {
							const e = Object(A.q)(s(), {
								profileName: h
							});
							t(g.l({
								title: e
							}))
						}
						return
					}
					const P = Object.assign(Object.assign({}, c()(e.queryParams, [...j.l, j.h])), {
						sort: i,
						t: Object(S.a)(i, y)
					});
					t(N({
						key: m
					}));
					const D = await Object(T.a)("profileComments", () => w(n.apiContext(), h, P, Object(C.a)(s())));
					if (!D.ok) return t(x({
						account: D.body.data ? D.body.data.account : null,
						error: D.body.reason ? {
							type: D.body.reason
						} : D.error,
						key: m
					})), D.body.reason === f.a.DeletedProfile && t(Object(d.p)({
						profileName: h
					})), void t(g.m(D.status));
					const R = D.body;
					t(L(Object.assign({
						key: m,
						meta: s().meta
					}, R))), await Promise.all([t(Object(b.c)(h)), t(Object(O.q)()), t(Object(u.b)()), t(l.o(h))])
				}, U = "PROFILE_COMMENTS__MORE_ITEMS_PENDING", F = "PROFILE_COMMENTS__MORE_ITEMS_LOADED", G = "PROFILE_COMMENTS__MORE_ITEMS_FAILED", B = Object(i.a)(U), q = Object(i.a)(F), K = Object(i.a)(G), V = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const r = t(),
						{
							currentPage: i
						} = r.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: d,
						params: l
					} = i.routeMatch.match, {
						sort: u,
						t: g
					} = Object(b.b)(d), {
						profileName: p
					} = l, O = Object(o.a)("u_".concat(p), u, d), f = Object(P.d)(r, {
						listingKey: O
					});
					if (!f) return;
					const h = Object(P.b)(r, {
							listingKey: O
						}),
						m = Object(P.c)(r, {
							listingKey: O
						}),
						v = m && m[f.token];
					if (h || v) return;
					e(B({
						key: O,
						fetchedToken: f.token
					}));
					const _ = await w(n(), p, Object.assign(Object.assign({
						after: f.token,
						dist: f.dist,
						sort: u,
						t: g
					}, c()(d, j.l)), {
						layout: Object(y.N)(r, {}).toLowerCase()
					}), Object(C.a)(r));
					if (_.ok) {
						const t = Object(P.f)(r, {
								listingKey: O
							}),
							s = Object.assign(Object.assign({}, _.body), {
								commentIds: a()(_.body.commentIds, t)
							});
						e(q(Object.assign({
							fetchedToken: f.token,
							key: O,
							meta: r.meta
						}, s)))
					} else e(K({
						account: _.body.data ? _.body.data.account : null,
						error: _.error,
						fetchedToken: f.token,
						key: O
					}))
				}
		},
		"./src/reddit/actions/pages/profileModSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/preferences.ts"),
				r = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				i = s("./src/reddit/models/User/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const d = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				l = Object(n.a)(d),
				u = e => async (t, s) => {
					const n = [t(a.z()), t(Object(r.d)(e.params.profileName))];
					await Promise.all(n);
					const d = Object(o.i)(s());
					d ? (await t(Object(r.b)(Object(i.e)(d))), t(l())) : Object(c.a)(t, s())
				}
		},
		"./src/reddit/actions/pages/profileOverview.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return P
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "g", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				r = s("./src/reddit/actions/moderatingSubreddits.ts"),
				c = s("./src/reddit/actions/pages/profileShared.ts"),
				i = s("./src/reddit/actions/subreddit.ts"),
				o = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				p = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				h = s("./src/reddit/actions/changeUsername.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				v = s("./src/reddit/actions/externalAccount.ts"),
				_ = s("./src/reddit/actions/gold/powerups.ts"),
				E = s("./src/reddit/actions/pinnedPost.ts"),
				I = s("./src/reddit/actions/platform.ts"),
				w = s("./src/reddit/actions/profile/index.ts"),
				S = s("./src/reddit/actions/trophyCase.ts"),
				T = s("./src/reddit/constants/errors.ts"),
				C = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				A = s("./src/reddit/helpers/timeApiRoute/index.ts");
			const P = "PAGE__PROFILE_OVERVIEW_CONVERSATIONS_PENDING",
				D = "PAGE__PROFILE_OVERVIEW_CONVERSATIONS_LOADED",
				R = "PAGE__PROFILE_OVERVIEW_CONVERSATIONS_FAILED",
				k = "PAGE__PROFILE_OVERVIEW_CHRONO_PENDING",
				N = "PAGE__PROFILE_OVERVIEW_CHRONO_LOADED",
				L = "PAGE__PROFILE_OVERVIEW_CHRONO_FAILED",
				x = Object(y.a)(P),
				M = Object(y.a)(D),
				U = Object(y.a)(R),
				F = Object(y.a)(k),
				G = Object(y.a)(N),
				B = Object(y.a)(L),
				q = e => async (t, s, n) => {
					const {
						queryParams: y,
						params: P
					} = e, {
						sort: D,
						t: R
					} = Object(c.a)(s(), y), {
						profileName: k
					} = P;
					let N = !1;
					const L = l.e[Object(b.N)(s(), {})],
						q = k.toLowerCase(),
						V = Object.assign(Object.assign({}, a()(e.queryParams, u.l)), {
							sort: D,
							layout: L,
							t: R
						}),
						H = [t(w.d(q))];
					if (L === l.e[l.g.Compact]) {
						const n = Object(C.a)(q, d.kb, D, e.queryParams);
						s().profileOverviewPage.chrono.ids[n] ? N = !0 : H.push(t(((e, t, s, n) => async (n, a, r) => {
							const c = a(),
								i = !!Object(f.f)(c, {
									listingKey: e
								}).length,
								d = !!Object(f.a)(c, {
									listingKey: e
								});
							if (!!Object(f.b)(c, {
									listingKey: e
								}) || i && !d) return;
							n(F({
								key: e
							}));
							const l = await Object(A.a)("profile", () => Object(o.a)(r.apiContext(), t, s)),
								u = l.body,
								{
									pinned: b
								} = u;
							if (l.ok) {
								n(G(Object.assign({
									key: e,
									meta: c.meta
								}, u)));
								const s = Object(O.m)(c, t);
								n(Object(E.h)({
									profileId: s,
									pinned: b
								}))
							} else n(B({
								account: l.body.data ? l.body.data.account : null,
								error: l.body.reason ? {
									type: l.body.reason
								} : l.error,
								key: e
							})), l.body.reason === T.a.DeletedProfile && n(Object(m.p)({
								profileName: t
							})), n(Object(I.m)(l.status))
						})(n, q, V)))
					} else {
						const n = Object(C.a)(q, d.lb, D, e.queryParams);
						s().listings.postOrder.ids[n] && !s().listings.postOrder.api.error[n] ? N = !0 : H.push(t(((e, t, s, n) => async (n, a, r) => {
							const c = a(),
								i = !!c.listings.postOrder.ids[e],
								d = !!Object(p.c)(c, {
									listingKey: e
								});
							if (!!Object(p.d)(c, {
									listingKey: e
								}) || i && !d) return;
							n(x({
								key: e
							}));
							const l = await Object(A.a)("profile", () => Object(o.b)(r.apiContext(), t, s)),
								u = l.body,
								{
									pinned: b,
									postIds: g
								} = u;
							if (l.ok) {
								n(M(Object.assign(Object.assign({
									key: e,
									meta: c.meta,
									profileName: t
								}, u), {
									postIds: g
								})));
								const s = Object(O.m)(c, t);
								n(Object(E.h)({
									profileId: s,
									pinned: b
								}))
							} else n(U({
								account: l.body.data ? l.body.data.account : null,
								error: l.body.reason ? {
									type: l.body.reason
								} : l.error,
								key: e
							})), l.body.reason === T.a.DeletedProfile && n(Object(m.p)({
								profileName: t
							})), n(Object(I.m)(l.status))
						})(n, q, V)))
					}
					if (H.push(t(Object(r.b)())), await Promise.all(H), N) return;
					const W = s();
					if (!W.platform.currentPage) return;
					if (200 !== W.platform.currentPage.status) return;
					const Q = Object(O.m)(s(), q),
						J = Object(j.hb)(W, {
							userName: k
						}).id;
					t(I.l({
						title: K(s(), k)
					})), Object(j.K)(W) && Object(j.M)(W, k) && t(Object(h.f)());
					const z = Object(g.a)(W),
						Y = [t(Object(i.q)()), t(S.b(q, Q)), t(w.b(q)), t(v.o(k)), t(w.g(k))];
					z && Y.push(t(_.e(k, J))), await Promise.all(Y)
				}, K = (e, t) => Object(O.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return C
			})), s.d(t, "e", (function() {
				return A
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "g", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				r = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				i = s("./src/reddit/actions/contentGate.ts"),
				o = s("./src/reddit/actions/externalAccount.ts"),
				d = s("./src/reddit/actions/moderatingSubreddits.ts"),
				l = s("./src/reddit/actions/pages/profileShared.ts"),
				u = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				g = s("./src/reddit/actions/profile/index.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/constants/errors.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/config.ts"),
				h = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/makeApiRequest/index.ts"),
				_ = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const E = (e, t, s) => Object(v.a)(e, {
				data: s,
				endpoint: Object(h.a)(Object(_.a)("".concat(y.a.gatewayUrl, "/desktopapi/v1/user/").concat(t, "/posts"))),
				method: m.db.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? Object.assign(Object.assign({}, e), {
				body: Object.assign(Object.assign({}, e.body), {
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				})
			}) : e);
			var I = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				w = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = s("./src/reddit/selectors/listings.ts"),
				T = s("./src/reddit/selectors/profile.ts");
			const C = "PAGE__PROFILE_POSTS_PENDING",
				A = "PAGE__PROFILE_POSTS_LOADED",
				P = "PAGE__PROFILE_POSTS_FAILED",
				D = Object(r.a)(C),
				R = Object(r.a)(A),
				k = Object(r.a)(P),
				N = e => async (t, s, n) => {
					const {
						queryParams: r,
						params: y
					} = e, {
						sort: h,
						t: m
					} = Object(l.b)(r), {
						profileName: v
					} = y, _ = Object(c.a)("u_".concat(v), h, r), C = s(), A = C.listings.postOrder.ids[_], P = Object(S.c)(C, {
						listingKey: _
					}), N = Object(S.d)(C, {
						listingKey: _
					});
					if (await t(g.d(v)), N || A && !P) {
						if (A) {
							const e = Object(T.q)(s(), {
								profileName: v
							});
							t(b.l({
								title: e
							}))
						}
						return
					}
					const L = Object.assign(Object.assign({}, a()(e.queryParams, [...f.l, ...f.k, f.h])), {
						layout: Object(j.N)(C, {}).toLowerCase(),
						sort: h,
						t: Object(I.a)(h, m)
					});
					t(D({
						key: _
					}));
					const x = await Object(w.a)("profilePosts", () => E(n.apiContext(), v, L));
					if (!x.ok) return t(k({
						account: x.body.data ? x.body.data.account : null,
						error: x.body.reason ? {
							type: x.body.reason
						} : x.error,
						key: _
					})), x.body.reason === O.a.DeletedProfile && t(Object(i.p)({
						profileName: v
					})), void t(b.m(x.status));
					const M = x.body;
					t(R(Object.assign({
						key: _,
						meta: s().meta
					}, M)));
					const U = Object(T.m)(s(), v),
						{
							pinned: F
						} = M;
					t(Object(u.h)({
						profileId: U,
						pinned: F
					})), await Promise.all([t(Object(l.c)(v)), t(Object(p.q)()), t(Object(d.b)()), t(o.o(v))])
				}, L = "PROFILE_POSTS__MORE_POSTS_PENDING", x = "PROFILE_POSTS__MORE_POSTS_LOADED", M = "PROFILE_POSTS__MORE_POSTS_FAILED", U = Object(r.a)(L), F = Object(r.a)(x), G = Object(r.a)(M), B = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const r = t(),
						{
							currentPage: i
						} = r.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: o,
						params: d
					} = i.routeMatch.match, {
						sort: u,
						t: b
					} = Object(l.b)(o), {
						profileName: g
					} = d, p = Object(c.a)("u_".concat(g), u, o), O = Object(S.g)(r, {
						listingKey: p
					});
					if (!O) return;
					const y = Object(S.d)(r, {
							listingKey: p
						}),
						h = Object(S.e)(r, {
							listingKey: p,
							token: O.token
						});
					if (y || h) return;
					e(U({
						key: p,
						fetchedToken: O.token
					}));
					const m = Object.assign(Object.assign({
							after: O.token,
							dist: O.dist,
							sort: u,
							t: b
						}, a()(o, f.l)), {
							layout: Object(j.N)(r, {}).toLowerCase()
						}),
						v = await E(n(), g, m),
						_ = r.listings.postOrder.ids[p],
						I = v.body.postIds || [],
						w = Object.assign(Object.assign({}, v.body), {
							postIds: I.filter(e => !_ || !_.includes(e))
						});
					v.ok ? (e(F(Object.assign({
						fetchedToken: O.token,
						key: p,
						meta: r.meta
					}, w))), await e(Object(l.c)(g))) : e(G({
						account: v.body.data ? v.body.data.account : null,
						error: v.error,
						fetchedToken: O.token,
						key: p
					}))
				}
		},
		"./src/reddit/actions/pages/profileShared.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/defaults.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/pick.js"),
				c = s.n(r),
				i = s("./src/reddit/actions/platform.ts"),
				o = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/actions/trophyCase.ts"),
				l = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/lib/constants/index.ts");
			const b = {
				sort: u.ub,
				t: u.vb
			};

			function g(e) {
				return a()(c()(e, ["t", "sort"]), b)
			}

			function p(e, t) {
				return g(t)
			}
			const O = e => async (t, s, n) => {
				const a = [t(f(e)), t(j(e)), t(Object(o.g)(e))];
				await Promise.all(a)
			}, f = e => async (t, s, n) => {
				const a = Object(l.m)(s(), e);
				await t(d.b(e, a))
			}, j = e => async (t, s, n) => {
				const a = Object(l.q)(s(), {
					profileName: e
				});
				t(i.l({
					title: a
				})), await t(o.b(e))
			}
		},
		"./src/reddit/actions/pages/report/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "REPORT_PAGE__FAILED",
				a = "REPORT_PAGE__PENDING",
				r = "REPORT_PAGE__LOADED",
				c = "REPORT_PAGE_INITIAL_REASON__SET"
		},
		"./src/reddit/actions/pages/subredditWiki/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "PAGE__SUBREDDIT_WIKI_PAGE_PENDING",
				a = "PAGE__SUBREDDIT_WIKI_PAGE_LOADED",
				r = "PAGE__SUBREDDIT_WIKI_PAGE_FAILED"
		},
		"./src/reddit/actions/polls.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const a = "POLLS__POLL_CREATION_UPDATED",
				r = Object(n.a)(a)
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return S
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/filterQueryParams/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/pages/postCreation.ts"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				g = s("./src/reddit/routes/postCreation/index.ts"),
				p = s("./src/reddit/routes/postCreation/constants.ts"),
				O = s("./src/reddit/selectors/postCreations.ts"),
				f = s("./src/reddit/selectors/platform.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/actions/postCreation/constants.ts"),
				h = s("./src/reddit/actions/postCreation/general.ts");
			const m = Object(i.a)(y.N),
				v = Object(i.a)(y.O),
				_ = Object(i.a)(y.M),
				E = (e, t) => async (s, n, a) => {
					let {
						apiContext: c
					} = a, i = n();
					const {
						name: g,
						isProfile: p
					} = e, y = Object(f.f)(i), h = y && !p && Object(u.a)(y.name, g), v = i.creations.api.subreddit.change.pending;
					if (h || v) return;
					const _ = Object(l.u)(t);
					if (!g) return void s(I(e, _));
					s(m(e));
					const E = p ? {
						profileName: g
					} : {
						subredditName: g
					};
					if (await s(Object(d.d)(E)), p || !Object(O.y)(i)) return s(I(e, _));
					const w = e.allowedPostTypes || Object(j.A)(n(), {
						subredditName: g
					});
					if (!w) return void s(I(e, _));
					let S;
					i = n();
					const T = Object(O.gb)(i),
						C = Object(O.y)(i);
					if (T === r.Jb.MEDIA && C) {
						const e = Object(O.P)(i),
							t = Object(b.v)(e),
							s = Object(O.H)(i) && e.items.length > 1,
							n = !t && !s;
						if (s && !w.galleries) S = b.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (n && !w.images) S = b.p.ImageWillBeRemoved;
						else if (t && !w.videos) {
							const t = i.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							w.images ? s > r.Z && (S = b.p.VideoWillBeRemovedTooLongForGif) : S = b.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(S ? Object(o.i)(S) : I(Object.assign(Object.assign({}, e), {
						allowedPostTypes: w
					}), _))
				}, I = function(e, t) {
					let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (r, c) => {
						const {
							name: i,
							isProfile: o
						} = e, d = c().platform.currentPage, l = d.queryParams, u = o ? g.b : g.c;
						let b = "";
						b = i ? u(i) : p.b, b = Object(a.a)(b, Object.assign(Object.assign({}, l), {
							draft: t || l.draft
						})), (t || d.url.toLowerCase() !== b.toLowerCase()) && (r(v(e)), s && r(Object(h.r)(!0)), r(Object(h.i)()), r(Object(n.c)(b)))
					}
				}, w = e => async (t, s) => {
					const r = s().platform.currentPage,
						c = r.queryParams,
						i = Object(a.a)(r.url, Object.assign(Object.assign({}, c), {
							collection: e
						}));
					t(Object(n.c)(i))
				}, S = () => async (e, t) => {
					const s = t().platform.currentPage,
						a = Object(c.a)(s.url, ["collection"]);
					e(Object(n.c)(a))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return P
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "p", (function() {
				return x
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "l", (function() {
				return U
			})), s.d(t, "i", (function() {
				return F
			})), s.d(t, "m", (function() {
				return G
			})), s.d(t, "k", (function() {
				return B
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "n", (function() {
				return K
			})), s.d(t, "s", (function() {
				return Y
			})), s.d(t, "r", (function() {
				return X
			})), s.d(t, "g", (function() {
				return Z
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return ne
			})), s.d(t, "o", (function() {
				return ie
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/formatApiError/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/postCreation/general.ts"),
				i = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var g = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/models/PostDraft/index.ts"),
				f = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				j = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts");
			const h = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: O.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: O.b.Markdown,
							body: e.body || void 0
						} : {
							kind: O.b.RichText,
							body: e.body || void 0
						}, Object.assign({
							subredditId: e.subreddit || void 0,
							contentCategory: e.content_category || void 0,
							created: e.created,
							flair: e.flair,
							id: e.id,
							isChatPost: !!e.discussion_type,
							isNSFW: !!e.nsfw,
							isOriginalContent: !!e.original_content,
							isSpoiler: !!e.spoiler,
							modified: e.modified || void 0,
							sendReplies: !!e.send_replies,
							isPublicLink: !!e.is_public_link,
							title: e.title || ""
						}, t)
					})(t);
					return e.postDraftIds.push(s.id), e.postDrafts[s.id] = s, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === y.e.User) {
						const s = Object(f.a)(t, Object(p.f)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(j.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var m = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				v = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/models/User/index.ts"),
				w = s("./src/reddit/selectors/postCreations.ts"),
				S = s("./src/reddit/selectors/postDraft.ts"),
				T = s("./src/reddit/selectors/profile.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts");
			const P = "POST_DRAFT__LIST_PENDING",
				D = "POST_DRAFT__LIST_LOADED",
				R = "POST_DRAFT__LIST_FAILED",
				k = Object(r.a)(P),
				N = Object(r.a)(D),
				L = Object(r.a)(R),
				x = () => async (e, t, s) => {
					let {
						apiContext: a
					} = s;
					const r = t();
					if (!Object(A.i)(r) || Object(S.b)(r)) return;
					e(k());
					const c = await (e => Object(l.a)(Object(u.a)(e, [g.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/drafts.json"),
						method: n.db.GET
					}))(a());
					c.ok ? e(N(h(c.body))) : e(L(c.error))
				}, M = "POST_DRAFT__SAVE_DRAFT_PENDING", U = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", F = "POST_DRAFT__SAVE_DRAFT_FAILED", G = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", K = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", V = Object(r.a)(M), H = Object(r.a)(U), W = Object(r.a)(F), Q = Object(r.a)(G), J = Object(r.a)(B), z = Object(r.a)(q), Y = Object(r.a)(K), X = e => async (t, s, r) => {
					let {
						apiContext: c
					} = r;
					const d = s(),
						b = Object(S.g)(d),
						p = Object(w.V)(d);
					if (b || p) return;
					const O = Object(S.h)(d, e);
					if (!O) return;
					t(V(O)), _.e(d, O);
					const f = await ((e, t, s) => Object(l.a)(Object(u.a)(e, [g.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/draft"),
						method: s ? n.db.PUT : n.db.POST,
						data: Object(m.a)(t)
					}).then(e => e.body.fields && Object(v.u)(e.body.fields[0]) ? Object.assign(Object.assign({}, e), {
						body: {},
						error: {
							type: n.E.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					}) : e))(c(), O, e);
					if (f.ok) {
						const {
							id: s,
							draftsCount: n
						} = Object(m.c)(f.body);
						t(H({
							draftId: s,
							draftsCount: n
						})), e || t(Object(i.a)(O.destSubreddit, s, !1))
					} else {
						const e = f.error;
						e.type === n.E.BAD_CAPTCHA_ERROR ? t(z()) : e.type === n.E.VALIDATION_ERROR ? t(Q(e)) : e.type === n.E.SUBMIT_VALIDATION_ERROR ? t(J(e)) : t(W(e)), t(Object(o.e)({
							duration: o.a,
							kind: E.b.Error,
							text: Object(a.a)(e)
						}))
					}
				}, Z = "POST_DRAFT__LOAD_DRAFT", $ = Object(r.a)(Z), ee = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					t($(e));
					let r = v.e;
					const c = s();
					if (e.subredditId) {
						const t = Object(C.S)(c, {
								subredditId: e.subredditId
							}),
							s = Object(T.p)(c, {
								profileId: e.subredditId
							}),
							n = Object(A.i)(c);
						t ? r = {
							isProfile: !1,
							name: t.name
						} : s && n && (r = {
							isProfile: !0,
							name: Object(I.e)(n)
						})
					}
					await t(Object(i.a)(r, e.id, !1));
					const o = Object(S.h)(s(), e.id);
					o && _.h(s(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", ne = "POST_DELETE_DRAFT_PENDING", ae = Object(r.a)(te), re = Object(r.a)(se), ce = Object(r.a)(ne), ie = (e, t) => async (s, r, i) => {
					let {
						apiContext: g
					} = i;
					const p = r();
					if (Object(S.a)(p, e)) return;
					const O = Object(S.d)(p, {
						draftId: e
					});
					O && _.f(p, O), s(ce({
						draftId: e
					}));
					const f = await (async (e, t) => Object(l.a)(Object(u.a)(e, [b.g]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/draft?draft_id=").concat(t),
						method: n.db.DELETE
					}))(g(), e);
					if (f.ok) {
						const {
							draftsCount: n
						} = Object(m.c)(f.body);
						s(ae({
							draftId: e,
							draftsCount: n
						}));
						const a = Object(d.u)(t);
						e === a && s(Object(c.p)(!0, t))
					} else {
						const t = f.error;
						s(re({
							draftId: e,
							apiError: t
						})), s(Object(o.e)({
							duration: o.a,
							kind: E.b.Error,
							text: Object(a.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/postLevelCrowdControl.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/endpoints/crowdControl/index.ts");
			const r = "POST_LEVEL_CC_LOADED",
				c = Object(n.a)(r),
				i = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					const i = await Object(a.b)(r(), e);
					if (i.ok) {
						const s = i.body.data.postInfoById.crowdControlLevel;
						t(c({
							[e]: s
						}))
					}
				}
		},
		"./src/reddit/actions/postRequirements/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			}));
			const n = "POST_REQUIREMENTS_FAILED",
				a = "POST_REQUIREMENTS_LOADED",
				r = "POST_REQUIREMENTS_PENDING",
				c = "POST_REQUIREMENTS_UPDATED"
		},
		"./src/reddit/actions/postRequirements/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/camelCase.js"),
				r = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/graphql/operations/GetPostRequirements.json"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/graphql/operations/UpdatePostRequirements.json"),
				g = s("./src/reddit/endpoints/subreddit/about.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/postRequirements.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/actions/postRequirements/constants.ts");
			const y = Object(i.a)(j.b),
				h = Object(i.a)(j.c),
				m = Object(i.a)(j.a),
				v = e => async (t, s, n) => {
					let {
						gqlContext: a
					} = n;
					const r = {
						subredditName: e.toLowerCase()
					};
					if (Object(O.a)(s(), r)) return;
					t(h(r));
					let i = Object(f.G)(s(), e);
					if (!i) {
						const s = await Object(g.a)(a(), e, !1);
						if (s.ok) {
							i = s.body.data.subreddit.id
						}
						if (!i) {
							const e = s.error || {
								type: c.E.NOT_FOUND_ERROR
							};
							return void t(m(Object.assign(Object.assign({}, r), {
								error: e
							})))
						}
					}
					let d = null;
					const b = await ((e, t) => Object(u.a)(e, Object.assign(Object.assign({}, l), {
						variables: t
					})))(a(), {
						subredditId: i
					});
					if (b.ok) {
						const e = b.body;
						d = e.data.subreddit && e.data.subreddit.postRequirements
					}
					if (d) t(y(Object.assign(Object.assign({}, r), {
						requirements: d
					})));
					else {
						const s = b.error || {
							type: c.E.UNKNOWN_ERROR
						};
						t(m(Object.assign(Object.assign({}, r), {
							error: s
						}))), o.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: b.body,
								responseOk: b.ok
							}), o.c.captureMessage("Missing post requirements data!")
						})
					}
				}, _ = Object(i.a)(j.d), E = (e, t) => async (s, a, r) => {
					let {
						gqlContext: c
					} = r;
					const i = e.toLowerCase(),
						o = Object(f.G)(a(), e);
					if (!o) return {
						success: !1
					};
					const l = Object.assign({
							subredditId: o
						}, t),
						g = await ((e, t) => Object(u.a)(e, Object.assign(Object.assign({}, b), {
							variables: t
						})))(c(), {
							input: l
						});
					let O = !1,
						j = null;
					if (g.ok) {
						const e = g.body;
						O = e.data.updatePostRequirements.ok, j = I(e.data.updatePostRequirements.fieldErrors)
					}
					return O ? (s(_({
						subredditName: i,
						partialRequirements: t
					})), {
						success: !0
					}) : (s(Object(d.e)({
						duration: d.a,
						id: "REQUIREMENTS_SAVE_ERROR",
						kind: p.b.Error,
						text: j && j.length ? j[0].message : n.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						})
					})), {
						success: !1,
						errors: j || void 0
					})
				}, I = e => e && e.map(e => Object.assign(Object.assign({}, e), {
					field: r()(e.field)
				}))
		},
		"./src/reddit/actions/product.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return _
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/governance/errorToast.ts"),
				r = s("./src/reddit/endpoints/governance/badges.ts"),
				c = s("./src/reddit/endpoints/governance/products/badges.ts");
			const i = "PRODUCT__BADGE_PURCHASE_OPENED",
				o = "PRODUCT__BADGE_PURCHASE_SUCCESS",
				d = "PRODUCT__BADGE_PURCHASE_FAILURE",
				l = "PRODUCT__BADGE_PURCHASE_PENDING",
				u = "PRODUCT__FETCH_SUCCESS",
				b = "PRODUCT__FETCH_FAILURE",
				g = "PRODUCT__FETCH_PENDING",
				p = Object(n.a)(i),
				O = Object(n.a)(o),
				f = Object(n.a)(d),
				j = Object(n.a)(l),
				y = Object(n.a)(u),
				h = Object(n.a)(b),
				m = Object(n.a)(g),
				v = e => {
					let {
						productId: t
					} = e;
					return async (e, s, n) => {
						let {
							apiContext: i
						} = n;
						const o = s(),
							d = o.products.models[t],
							l = o.user.account,
							u = !!o.products.api.purchase.pending[t];
						if (d && d.price && !u) {
							e(j({
								productId: t
							}));
							const s = await Object(c.c)(i(), {
								price: d.price,
								products: [{
									productId: t,
									quantity: "1"
								}],
								subredditId: d.subredditId
							});
							let n;
							if (s.ok && l && (n = await Object(r.c)(i(), d.subredditId, l.id)), s.ok) {
								if (n && n.ok) {
									const {
										badges: t,
										userOwnedBadges: a
									} = n.body;
									e(O({
										product: d,
										badges: t,
										userOwnedBadges: a,
										wallet: s.body.wallet
									}))
								}
							} else e(f({
								productId: t,
								error: s.error
							})), Object(a.a)(e, s.error)
						}
					}
				},
				_ = e => {
					let {
						subredditId: t
					} = e;
					return async (e, s, n) => {
						let {
							apiContext: a
						} = n;
						e(m({
							subredditId: t
						}));
						const r = await Object(c.a)(a(), t);
						r.ok ? e(y({
							subredditId: t,
							products: r.body
						})) : e(h({
							subredditId: t,
							error: r.error
						}))
					}
				}
		},
		"./src/reddit/actions/profileConversations.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return y
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "g", (function() {
				return D
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/difference.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/pick.js"),
				c = s.n(r),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/pages/profileShared.ts"),
				l = s("./src/reddit/constants/parameters.ts"),
				u = s("./src/reddit/constants/things.ts"),
				b = s("./src/config.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				O = s("./src/reddit/models/Comment/addProfileImgParam.ts");
			var f = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				j = s("./src/reddit/selectors/experiments/avatarsInComments.ts");
			const y = "PROFILE_OVERVIEW_CONVERSATIONS__MORE_POSTS_PENDING",
				h = "PROFILE_OVERVIEW_CONVERSATIONS__MORE_POSTS_LOADED",
				m = "PROFILE_OVERVIEW_CONVERSATIONS__MORE_POSTS_FAILED",
				v = "PROFILE__EXTRACOMMENTS_PENDING",
				_ = "PROFILE__EXTRACOMMENTS_LOADED",
				E = "PROFILE__EXTRACOMMENTS_FAILED",
				I = Object(o.a)(y),
				w = Object(o.a)(h),
				S = Object(o.a)(m),
				T = Object(o.a)(_),
				C = Object(o.a)(v),
				A = Object(o.a)(E),
				P = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const r = t(),
						{
							currentPage: o
						} = r.platform;
					if (!o || !o.routeMatch) return;
					const {
						queryParams: u,
						params: O
					} = o.routeMatch.match, {
						sort: j,
						t: y
					} = Object(d.a)(r, u), {
						profileName: h
					} = O, m = h.toLowerCase(), v = Object(f.a)(m, i.lb, j, u), _ = r.listings.postOrder.loadMore[v];
					if (!_) return;
					const E = r.listings.postOrder.api.pending[v],
						{
							fetchedTokens: T
						} = r.listings.postOrder,
						C = !(!T[v] || !T[v][_.token]);
					if (E || C) return;
					e(I({
						key: v,
						fetchedToken: _.token
					}));
					const A = await ((e, t, s) => Object(g.a)(e, {
						data: s,
						endpoint: Object(p.a)("".concat(b.a.gatewayUrl, "/desktopapi/v1/user/").concat(t, "/conversations")),
						method: i.db.GET,
						traceRequestName: "get_profile_page"
					}))(n(), h, Object.assign({
						after: _.token,
						dist: _.dist,
						sort: j,
						t: y
					}, c()(u, l.l)));
					if (A.ok) {
						const t = r.listings.postOrder.ids[v],
							s = Object.assign(Object.assign({}, A.body), {
								postIds: a()(A.body.postIds, t)
							});
						e(w(Object.assign({
							fetchedToken: _.token,
							key: v,
							meta: r.meta,
							profileName: h
						}, s)))
					} else e(S({
						error: A.error,
						fetchedToken: _.token,
						key: v,
						account: A.body.data ? A.body.data.account : null
					}))
				}, D = (e, t, s) => async (n, a, r) => {
					let {
						apiContext: c
					} = r;
					const o = a();
					if (o.profileOverviewPage.conversations.extraComments.api.pending[s]) return;
					n(C({
						extraCommentsId: s
					}));
					let d = t;
					t.startsWith(u.b) && (d = t.slice(u.b.length));
					const l = s.split("-")[1],
						f = await ((e, t, s, n, a) => {
							let r = Object(p.a)("".concat(b.a.gatewayUrl, "/desktopapi/v1/user/").concat(t, "/morecomments/").concat(s));
							return a && (r = Object(O.a)(r)), Object(g.a)(e, {
								endpoint: r,
								method: i.db.GET,
								type: "json",
								data: {
									after: n,
									limit: 14
								}
							})
						})(c(), e, d, l, Object(j.a)(o));
					f.ok ? n(T(Object.assign({
						profileName: e,
						extraCommentsId: s
					}, f.body))) : n(A(f.body))
				}
		},
		"./src/reddit/actions/profileOverviewChrono.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/difference.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/pick.js"),
				c = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				d = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/endpoints/page/profileOverviewPage.ts");
			const p = "PROFILE_OVERVIEW_CHRONO__MORE_ITEMS_PENDING",
				O = "PROFILE_OVERVIEW_CHRONO__MORE_ITEMS_LOADED",
				f = "PROFILE_OVERVIEW_CHRONO__MORE_ITEMS_FAILED",
				j = Object(i.a)(p),
				y = Object(i.a)(O),
				h = Object(i.a)(f),
				m = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const r = t(),
						{
							currentPage: i
						} = r.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: p,
						params: O
					} = i.routeMatch.match, {
						sort: f,
						t: m
					} = Object(b.a)(r, p), {
						profileName: v
					} = O, _ = Object(o.a)(v, l.kb, f, p), E = Object(d.d)(r, {
						listingKey: _
					});
					if (!E) return;
					const I = Object(d.b)(r, {
							listingKey: _
						}),
						w = Object(d.c)(r, {
							listingKey: _
						}),
						S = w && w[E.token];
					if (I || S) return;
					e(j({
						key: _,
						fetchedToken: E.token
					}));
					const T = await Object(g.a)(n(), v, Object.assign({
						after: E.token,
						dist: E.dist,
						sort: f,
						t: m
					}, c()(p, u.l)));
					if (T.ok) {
						const t = Object(d.f)(r, {
								listingKey: _
							}),
							s = Object.assign(Object.assign({}, T.body), {
								overviewIds: a()(T.body.overviewIds, t)
							});
						e(y(Object.assign({
							fetchedToken: E.token,
							key: _,
							meta: r.meta
						}, s)))
					} else e(h({
						error: T.error,
						fetchedToken: E.token,
						key: _,
						account: T.body.data ? T.body.data.account : null
					}))
				}
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "b", (function() {
				return L
			}));
			var n = s("./src/lib/asyncActions/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/constants/euCookiePolicy.ts"),
				c = s("./node_modules/ts-error/lib/cjs.js"),
				i = s.n(c);
			class GraphQLRequestError_GraphQLRequestError extends i.a {
				constructor(e) {
					super("An error occurred during a GraphQL request. The following response was received:\n\n".concat(JSON.stringify(e, void 0, 2))), this.response = e
				}
			}
			var o = s("./src/lib/reCaptchaEnterprise/index.ts"),
				d = s("./src/lib/sentry/index.ts");

			function l(e) {
				return t => async (s, n, a) => {
					const r = n();
					if (e(r)) return t(s, n, a)
				}
			}
			var u = s("./node_modules/lodash/every.js"),
				b = s.n(u),
				g = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/graphql/operations/VerifyRecaptchaToken.json"),
				O = (s("./node_modules/core-js/modules/es7.symbol.async-iterator.js"), s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/os-browserify/browser.js")),
				f = s.n(O);
			const j = /\s+at.*(?:\(|\s)(.*)\)?/,
				y = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				h = void 0 === f.a.homedir ? "" : f.a.homedir();
			const m = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError("Expected input to be an Array, got ".concat(typeof e));
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? m(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return t = Object.assign({
							pretty: !1
						}, t), e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(j);
							if (null === t || !t[1]) return !0;
							const s = t[1];
							return !s.includes(".app/Contents/Resources/electron.asar") && !s.includes(".app/Contents/Resources/default_app.asar") && !y.test(s)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(j, (e, t) => e.replace(t, t.replace(h, "~"))) : e).join("\n")
					}(e.stack)) : String(e)).join("\n");
					super(t = "\n" + function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
							s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						const n = Object.assign({
							indent: " ",
							includeEmptyLines: !1
						}, s);
						if ("string" != typeof e) throw new TypeError("Expected `input` to be a `string`, got `".concat(typeof e, "`"));
						if ("number" != typeof t) throw new TypeError("Expected `count` to be a `number`, got `".concat(typeof t, "`"));
						if ("string" != typeof n.indent) throw new TypeError("Expected `options.indent` to be a `string`, got `".concat(typeof n.indent, "`"));
						if (0 === t) return e;
						const a = n.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
						return e.replace(a, n.indent.repeat(t))
					}(t, 4)), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
						value: e
					})
				}*[Symbol.iterator]() {
					for (const e of this._errors) yield e
				}
			}
			var v = s("./src/lib/makeGqlRequest/index.ts");
			class MissingDataError_MissingDataError extends i.a {
				constructor() {
					super("Missing data in GraphQL response")
				}
			}
			class RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError extends i.a {
				constructor() {
					super("GraphQL request failed without errors")
				}
			}
			var _ = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/featureFlags/utils.ts"),
				I = s("./src/reddit/helpers/chooseVariant/index.ts"),
				w = s("./src/reddit/selectors/meta.ts");
			const S = e => _.d.reCaptchaEnterprise(e) && !Object(w.d)(e),
				T = e => !!Object(I.c)(e, {
					experimentEligibilitySelector: Object(E.d)(Object(E.b)(...r.b)),
					experimentName: g.Xb
				}),
				C = Object(n.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				A = () => l(e => b()([S, T, e => e.tracking.reCaptchaEnterprise.load === n.a.New], t => t(e)))(async e => {
					e(C.requested());
					try {
						await o.b.loadScript(), e(C.succeeded())
					} catch (t) {
						throw e(C.failed()), t
					}
				}),
				P = Object(n.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				D = e => l(e => b()([S, T, e => e.tracking.reCaptchaEnterprise.load === n.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === n.a.New], t => t(e)))(async t => {
					t(P.requested());
					try {
						const s = await o.b.execute(e);
						return t(P.succeeded({
							token: s
						})), s
					} catch (s) {
						throw t(P.failed()), s
					}
				}),
				R = Object(n.b)("SEND_RECAPTCHA_TOKEN"),
				k = e => l(e => b()([S, T, e => e.tracking.reCaptchaEnterprise.send === n.a.New && e.tracking.reCaptchaEnterprise.execute === n.a.Succeeded && e.tracking.reCaptchaEnterprise.load === n.a.Succeeded], t => t(e)))(async (t, s, n) => {
					let {
						gqlContext: a
					} = n;
					t(R.requested());
					try {
						await (async (e, t) => {
							const s = await Object(v.a)(e, Object.assign(Object.assign({}, p), {
								variables: {
									input: {
										token: t
									}
								}
							}));
							if (!s.ok) throw new GraphQLRequestError_GraphQLRequestError(s);
							if (!("data" in s.body)) throw new MissingDataError_MissingDataError;
							const {
								ok: n,
								errors: a
							} = s.body.data.verifyRecaptchaToken;
							if (a && a.length > 0) throw new AggregateError_AggregateError(a);
							if (!n) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(a(), e), t(R.succeeded())
					} catch (r) {
						throw t(R.failed()), r
					}
				}),
				N = (e, t) => Object(E.g)(t) ? (e => "".concat("STAGING__").concat(e))(e) : e,
				L = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.a.PageLoad;
					return l(e => b()([S, T, e => e.tracking.reCaptchaEnterprise.load === n.a.New], t => t(e)))(async (t, s) => {
						const n = s();
						try {
							await t(A());
							const s = await t(D({
								action: N(e, n)
							}));
							s && await t(k(s))
						} catch (r) {
							if (r instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof r.response.error && null !== r.response.error && r.response.error.type === a.i) return;
							d.c.withScope(e => {
								Object(d.a)(e, {
									serverLogging: !1
								}), d.c.captureException(r)
							})
						}
					})
				}
		},
		"./src/reddit/actions/removalReasons/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return n
			})), s.d(t, "l", (function() {
				return a
			})), s.d(t, "j", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "r", (function() {
				return O
			})), s.d(t, "s", (function() {
				return f
			})), s.d(t, "q", (function() {
				return j
			})), s.d(t, "n", (function() {
				return y
			})), s.d(t, "o", (function() {
				return h
			})), s.d(t, "p", (function() {
				return m
			})), s.d(t, "m", (function() {
				return v
			})), s.d(t, "t", (function() {
				return _
			}));
			const n = "REMOVALREASONS__LOAD_PENDING",
				a = "REMOVALREASONS__LOAD_SUCCESS",
				r = "REMOVALREASONS__LOAD_FAILED",
				c = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				o = "REMOVALREASONS__ADD_FAILED",
				d = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				b = "REMOVALREASONS__DELETE_PENDING",
				g = "REMOVALREASONS__DELETE_SUCCESS",
				p = "REMOVALREASONS__DELETE_FAILED",
				O = "REMOVALREASONS__SUBMIT_PENDING",
				f = "REMOVALREASONS__SUBMIT_SUCCESS",
				j = "REMOVALREASONS__SUBMIT_FAILED",
				y = "REMOVALREASONS__MESSAGE_PENDING",
				h = "REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS",
				m = "REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS",
				v = "REMOVALREASONS__MESSAGE_FAILED",
				_ = "REMOVALREASONS__REMOVEDITEMS_SELECTED"
		},
		"./src/reddit/actions/reportPageRules/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "REPORT_PAGE_RULES__LOADED"
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return a
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "l", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "o", (function() {
				return g
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "r", (function() {
				return h
			})), s.d(t, "u", (function() {
				return m
			})), s.d(t, "p", (function() {
				return v
			})), s.d(t, "q", (function() {
				return _
			})), s.d(t, "v", (function() {
				return E
			})), s.d(t, "s", (function() {
				return I
			})), s.d(t, "x", (function() {
				return w
			})), s.d(t, "w", (function() {
				return S
			})), s.d(t, "t", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const a = "SCHEDULED_POSTS_REQUESTED",
				r = "SCHEDULED_POSTS_LOADED",
				c = "STANDALONE_SCHEDULED_POSTS_LOADED",
				i = "RECURRING_SCHEDULED_POSTS_LOADED",
				o = "SCHEDULED_POSTS_FAILED",
				d = "SCHEDULED_POST_CREATION_SUCCEEDED",
				l = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				u = "SCHEDULED_POST_MUTATE_REQUESTED",
				b = "SCHEDULED_POST_MUTATE_FAILED",
				g = "STANDALONE_POST_MUTATE_SUCCESS",
				p = "RECURRING_POST_MUTATE_SUCCESS",
				O = "RECURRING_POST__EDIT_MODAL_LOAD",
				f = "RECURRING_POST__EDIT_LOAD",
				j = "STANDALONE_POST__EDIT_LOAD",
				y = "SCHEDULED_POST__DELETE_SUCCESS",
				h = () => n.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				m = () => n.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				v = () => n.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				_ = () => n.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				E = () => n.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				I = () => n.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				w = () => n.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				S = () => n.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				T = () => n.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/search/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./node_modules/uuid/v4.js"),
				r = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/extractQueryParams/index.ts"));
			var o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				b = s("./src/reddit/models/Search/index.ts");
			var g = e => {
				const t = {
					withAds: 1,
					ad: Object(i.a)(window.location.href).get("ad")
				};
				return Object(o.a)(Object(d.a)(e, [l.a]), {
					endpoint: "".concat(e.apiUrl, "/api/trending_searches_v1.json"),
					method: c.db.GET,
					data: t
				})
			};
			const p = "PAGE__TRENDING_SEARCHES_LOADED",
				O = Object(n.a)(p),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const a = await g(n());
					if (a.ok) {
						const t = (e => {
							const t = [];
							if (e.body && e.body.trending_searches) {
								const s = e.body.trending_searches.length;
								for (let n = 0; n < s; n++) {
									const s = e.body.trending_searches[n],
										a = s.results.data.children.length > 0 ? s.results.data.children[0].data : null,
										c = {
											id: r()(),
											post: a ? Object(u.a)(a) : null,
											rawQuery: s.query_string,
											searchQuery: s.display_string,
											section: b.c.trending,
											isWhitelisted: s.is_subreddit_whitelisted,
											subredditInfo: a ? {
												icon: a.sr_detail.community_icon || a.sr_detail.icon_img,
												displayText: a.sr_detail.display_name_prefixed
											} : null,
											subredditOccurrences: s.subreddit_occurences - 1,
											type: b.b.text
										};
									t.push(c)
								}
							}
							return t
						})(a);
						return e(O({
							items: t
						})), t
					}
					return null
				}
		},
		"./src/reddit/actions/sso/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = "LINKED_IDENTITY__ADD",
				a = "LINKED_IDENTITY__REMOVE"
		},
		"./src/reddit/actions/streaming/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "SUBREDDIT__STREAMING_MOD_SETTINGS_LOADED"
		},
		"./src/reddit/actions/streaming/modSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "e", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/streaming/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/graphql/operations/FetchSubredditStreamingModSettings.json"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/UpdateSubredditStreamingModSettings.json"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");
			const b = Object(a.a)(r.a),
				g = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				p = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				O = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				f = Object(a.a)(g),
				j = Object(a.a)(p),
				y = Object(a.a)(O),
				h = e => async (t, s, a) => {
					let {
						gqlContext: r
					} = a;
					const d = Object(u.S)(s(), {
						subredditId: e
					});
					if (void 0 === d) {
						const e = n.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							s = Object(c.d)(e, l.b.Error);
						return await t(Object(c.e)(Object.assign(Object.assign({}, s), {
							duration: c.a
						}))), {
							reason: e
						}
					}
					const g = await ((e, t) => Object(o.a)(e, Object.assign(Object.assign({}, i), {
						variables: {
							subredditId: t
						}
					})))(r(), e);
					if (!g.ok) {
						const e = n.fbt._("Could not fetch settings for {subredditName}", [n.fbt._param("subredditName", d.name)], {
								hk: "2G8rnU"
							}),
							s = Object(c.d)(e, l.b.Error);
						return await t(Object(c.e)(Object.assign(Object.assign({}, s), {
							duration: c.a
						}))), {
							reason: e
						}
					}
					const p = g.body.data.subredditInfoById;
					return await t(b({
						subredditId: e,
						modSettings: p.liveStreamingInfo
					})), {}
				}, m = (e, t) => async (s, n, a) => {
					let {
						gqlContext: r
					} = a;
					await s(v(t, e, r())), s(h(t))
				}, v = (e, t, s) => async (s, a, r) => {
					let {
						gqlContext: i
					} = r;
					s(f({
						subredditId: e
					}));
					const u = await ((e, t) => Object(o.a)(e, Object.assign(Object.assign({}, d), {
						variables: t
					})))(i(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!u.ok || !u.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = u.error && u.error.fields ? u.error.fields[0].msg : n.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							a = Object(c.d)(t, l.b.Error);
						await s(Object(c.e)(Object.assign(Object.assign({}, a), {
							duration: c.a
						}))), s(y({
							subredditId: e
						}))
					}
					const b = n.fbt._("Community broadcasting settings saved", null, {
							hk: "GTwrg"
						}),
						g = Object(c.d)(b, l.b.SuccessCommunity);
					await s(Object(c.e)(Object.assign(Object.assign({}, g), {
						duration: c.a
					}))), s(j({
						subredditId: e
					}))
				}, _ = (e, t, s) => async (n, a, r) => {
					let {
						gqlContext: c
					} = r;
					const i = [...s.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await n(v(e, {
						whitelistedRedditors: i
					}, c())), await n(h(e))
				}, E = (e, t, s) => async (n, a, r) => {
					let {
						gqlContext: c
					} = r;
					const i = s.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await n(v(e, {
						whitelistedRedditors: i
					}, c())), await n(h(e))
				}
		},
		"./src/reddit/actions/subredditAutocomplete.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return j
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/graphql/operations/SubredditTypeaheadSearch.json"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				c = (e, t) => Object(r.a)(e, Object.assign(Object.assign({}, a), {
					variables: t
				})),
				i = s("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				o = e => {
					let {
						allowedPostTypes: t,
						id: s,
						isCrosspostDestination: n,
						isNsfw: a,
						name: r,
						styles: c,
						subscribersCount: o
					} = e;
					return {
						allowedPostTypes: Object(i.a)(t),
						communityIcon: c && c.icon || "",
						icon: c && c.legacyIcon && c.legacyIcon.url || "",
						id: s,
						isCrosspostDestination: n,
						isNsfw: a,
						name: r,
						primaryColor: c && c.primaryColor || "",
						subscribers: o
					}
				},
				d = s("./src/reddit/helpers/name/index.ts"),
				l = s("./src/reddit/selectors/subredditAutocomplete.ts");
			const u = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				b = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				g = "SUBREDDIT_AUTOCOMPLETE__FAILED",
				p = Object(n.a)(u),
				O = Object(n.a)(b),
				f = Object(n.a)(g),
				j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, n, a) => {
						let {
							gqlContext: r
						} = a;
						const i = Object(d.f)(e);
						if (!i) return;
						const u = n(),
							b = u.subredditAutocomplete;
						if (b.api.pending[i] || b.models[i]) return;
						if (Object(l.b)(u, {
								substring: i
							})) return;
						s(p({
							key: i
						}));
						const g = await c(r(), {
							query: i,
							includeNsfw: t
						});
						if (g.ok) {
							const e = g.body.data.subredditTypeahead.subreddits.edges.map(e => o(e.node));
							s(O({
								key: i,
								subreddits: e
							}))
						} else s(f({
							key: i,
							error: g.error
						}))
					}
				}
		},
		"./src/reddit/actions/subredditCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "f", (function() {
				return _
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const l = e => ({
				public_description: e.publicDescription,
				name: e.name,
				type: e.type,
				over_18: e.over18,
				restrict_commenting: e.restrictCommenting,
				restrict_posting: e.restrictPosting,
				existing_tags: e.existingTags.join(","),
				new_tags: e.newTags.join(","),
				primary_tag: e.primaryTagId
			});
			var u = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/telemetry/index.ts");
			const p = "SUBREDDIT__CREATE_PENDING",
				O = "SUBREDDIT__CREATE_SUCCEEDED",
				f = "SUBREDDIT__CREATE_FAILED",
				j = "SUBREDDIT__CREATE_CLEARED",
				y = Object(a.a)(p),
				h = Object(a.a)(O),
				m = Object(a.a)(f),
				v = Object(a.a)(j),
				_ = e => async (t, s, a) => {
					let {
						apiContext: p
					} = a;
					const O = s(),
						{
							name: f,
							type: j
						} = e;
					if (Object(b.l)(O)) return;
					t(y({
						subredditName: f
					}));
					const v = await ((e, t) => Object(c.a)(Object(i.a)(e, [o.a]), {
						endpoint: Object(d.a)("".concat(e.apiUrl, "/api/v1/subreddit/create_subreddit")),
						method: r.db.POST,
						data: l(t)
					}))(p(), e);
					if (v.ok) {
						const s = v.body,
							a = s.fullname;
						Object(g.a)(Object(u.c)(j, e, a)(O)), t(h({
							subredditName: f
						})), window.location.href = "".concat(n.a.redditUrl).concat(s.path, "new")
					} else v.error && Object(g.a)(Object(u.d)(v.error.type)(O)), t(m({
						subredditName: f,
						error: v.error
					}))
				}
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "d", (function() {
				return O
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/subscription/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts"),
				d = s("./src/reddit/selectors/subreddit.ts");
			const l = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				u = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				b = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				g = (Object(n.a)(l), Object(n.a)(u)),
				p = Object(n.a)(b),
				O = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					await e(a.e());
					const {
						api: l,
						ids: u
					} = t().subreddits.crosspostable;
					if (l.pending || Object.keys(u).length) return;
					const b = await ((e, t) => Object(c.a)(Object(i.a)(e, [o.a]), {
						data: t,
						endpoint: "".concat(e.apiUrl, "/api/crosspostable_subreddits.json"),
						method: r.db.GET
					}))(n(), {
						sr_detail: !1
					});
					if (b.ok) {
						const s = t(),
							n = b.body && b.body.length ? b.body.map(e => Object(d.G)(s, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(g({
							subredditIds: n
						}))
					} else e(p({
						error: b.error
					}))
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/config.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/reddit/models/Post/index.ts");
			var o = s("./src/reddit/models/Duplicates/index.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				g = (Object(n.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(n.a)(b)),
				p = (e, t) => async (s, n, b) => {
					let {
						apiContext: p
					} = b;
					const O = Object(u.S)(n(), {
						subredditId: e
					}) || Object(l.p)(n(), {
						profileId: e
					});
					if (!O) return;
					const f = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(d.g)(O) ? a.Ub + O.name : O.name
						},
						j = await ((e, t, s) => Object(c.a)(e, {
							data: s,
							endpoint: "".concat(r.a.gatewayUrl, "/desktopapi/v1/duplicates/").concat(Object(i.n)(t)),
							method: a.db.GET
						}))(p(), t, f);
					if (j.ok) {
						const n = j.body;
						s(g({
							distinguishKey: Object(o.a)(t, f),
							postIds: n.postIds,
							posts: n.posts,
							profiles: n.profiles,
							subreddits: n.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/subredditMention/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "SUBREDDIT_MENTION_LOADED",
				a = "SUBREDDIT__MODEL_SUCCEEDED",
				r = "SUBREDDIT__MODEL_PENDING",
				c = "SUBREDDIT__MODEL_FAILED"
		},
		"./src/reddit/actions/subredditTopContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/preferences.ts"),
				r = s("./src/graphql/operations/SubredditTopContent.json"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const o = "SUBREDDIT_TOP_CONTENT__PENDING",
				d = "SUBREDDIT_TOP_CONTENT__LOADED",
				l = "SUBREDDIT_TOP_CONTENT__FAILED",
				u = Object(n.a)(o),
				b = Object(n.a)(d),
				g = Object(n.a)(l),
				p = e => async (t, s, n) => {
					const o = e.toLowerCase(),
						d = s(),
						{
							api: l,
							topContent: p
						} = d.subreddits;
					if (l.topContent.pending[o] || p[o]) return;
					t(u({
						subredditName: o
					})), t(Object(a.z)());
					const O = await ((e, t) => Object(c.a)(e, Object.assign(Object.assign({}, r), {
						variables: t
					})))(n.gqlContext(), {
						subredditName: o
					});
					if (O.ok) {
						const e = O.body.data.subreddit;
						if (e) {
							const s = Object(i.c)(e);
							s && t(b(Object.assign(Object.assign({}, s), {
								subredditName: o
							})))
						}
					} else t(g({
						subredditName: o,
						error: O.error
					}))
				}
		},
		"./src/reddit/actions/theme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const a = "THEME_CHANGED",
				r = (Object(n.a)(a), "BOOTUP_THEME"),
				c = Object(n.a)(r)
		},
		"./src/reddit/actions/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const a = "TRACKING__VIEWPORT_DATA_LOADED",
				r = "TRACKING__VIEWPORT_DATA_UNLOADED",
				c = Object(n.a)(a);
			Object(n.a)(r)
		},
		"./src/reddit/actions/trafficStats/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "SUBREDDIT__TRAFFIC_STATS_LOADED",
				a = "SUBREDDIT__TRAFFIC_STATS_PENDING",
				r = "SUBREDDIT__TRAFFIC_STATS_FAILED"
		},
		"./src/reddit/actions/trophyCase.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/graphql/operations/ProfileTrophies.json"),
				r = s("./src/lib/makeGqlRequest/index.ts");
			s("./node_modules/core-js/modules/es6.symbol.js");
			var c = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const i = "TROPHYCASE__FETCH_SUCCESS",
				o = Object(n.a)(i),
				d = Object(n.a)("TROPHYCASE__FETCH_FAILED"),
				l = (e, t) => async (s, n, i) => {
					let {
						gqlContext: l
					} = i;
					const u = await ((e, t) => Object(r.a)(e, Object.assign(Object.assign({}, a), {
							variables: t
						}), {
							traceRequestName: "get_profile_trophies"
						}))(l(), {
							profileName: e
						}),
						b = u.body.data;
					if (u.ok && b) {
						const n = {},
							a = [];
						b.redditor && b.redditor.trophies && b.redditor.trophies.map(e => {
							const t = (e => {
									var {
										icon40Url: t,
										trophyId: s
									} = e, n = c(e, ["icon40Url", "trophyId"]);
									return Object.assign({
										icon: t,
										id: s
									}, n)
								})(e),
								{
									id: s
								} = t;
							n[s] = t, a.push(s)
						}), s(o({
							profileId: t,
							profileName: e,
							trophies: n,
							trophyIds: a
						}))
					} else s(d({
						profileId: t,
						error: u.error
					}))
				}
		},
		"./src/reddit/actions/upload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "m", (function() {
				return m
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "l", (function() {
				return A
			})), s.d(t, "i", (function() {
				return P
			})), s.d(t, "j", (function() {
				return D
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/get.js"),
				a = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				c = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/uploadToS3/index.ts"),
				d = s("./src/reddit/models/Upload/index.ts");
			const l = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				b = "UPLOAD_METADATA_CHANGED",
				g = "UPLOAD_PROGRESS",
				p = "UPLOAD_SUCCESS",
				O = "UPLOAD_FAILED",
				f = "UPLOAD_CANCELED",
				j = "UPLOAD_REMOVED",
				y = Object(i.a)(l),
				h = Object(i.a)(u),
				m = Object(i.a)(b),
				v = Object(i.a)(g),
				_ = Object(i.a)(p),
				E = Object(i.a)(O),
				I = Object(i.a)(f),
				w = Object(i.a)(j),
				S = new Map,
				T = (e, t) => {
					const s = S.get(e) || [];
					s.push(t), S.set(e, s)
				},
				C = (e, t) => {
					const s = S.get(e);
					s && s.forEach(s => s(e, t)), S.delete(e)
				},
				A = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (r, i, l) => {
						let {
							apiContext: u
						} = l;
						const b = t;
						if (i().uploads[b] && Object(d.c)(i().uploads[b])) return;
						const g = c()(),
							p = () => {
								const e = i().uploads[b];
								return !e || e.id !== g || e.status === d.a.CANCELED
							};
						r(y({
							key: b,
							id: g,
							file: e
						}));
						const {
							uploadLease: O,
							error: f
						} = await s(i().uploads[b]);
						if (p()) return;
						if (f || !O) return void r(E({
							key: b,
							error: f
						}));
						let j;
						T(g, () => {
							j && j.abort()
						}), r(h({
							key: b
						}));
						const m = await Object(o.a)(e, O, e => (j = e, n && e.on("progress", e => {
							if (!p() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								r(v({
									key: b,
									progress: t
								}))
							}
						}), e));
						if (j = null, !p())
							if (m.ok) {
								const e = decodeURIComponent(m.body.PostResponse.Location);
								r(_({
									key: b,
									url: e
								}))
							} else {
								const e = a()(m, "body.Error.Message.0"),
									t = Object.assign({
										type: "ERROR"
									}, e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {});
								r(E({
									key: b,
									error: t
								}))
							}
					}
				},
				P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (s, n) => {
						const a = n().uploads[e];
						a && (C(a.id, t), s(t ? w({
							key: e
						}) : I({
							key: e
						})))
					}
				},
				D = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (s, n) => {
						Object.keys(n().uploads).forEach(n => {
							n.startsWith(e) && s(P(n, t))
						})
					}
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/blockedRedditors.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/endpoints/accounts/index.ts"),
				o = s("./src/reddit/models/Toast/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				b = "USER_BLOCK__FAILED",
				g = Object(a.a)(l),
				p = Object(a.a)(u),
				O = Object(a.a)(b),
				f = e => async (t, s, a) => {
					let {
						apiContext: d
					} = a;
					if (s().blockUser.api.pending[e]) return;
					t(g({
						username: e
					}));
					const l = await Object(i.a)(d(), e),
						u = "error-block-".concat(e);
					if (l.ok) l.body.name && t(p(l.body)), l.body.id && t(Object(r.f)(l.body.id)), t(c.f(u)), t(c.e({
						kind: o.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const s = {
							type: l.error ? l.error.type : "Unknown error",
							username: e
						};
						t(O(s)), t(c.e({
							id: u,
							kind: o.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: f(e)
						}))
					}
				}, j = "USER_UNBLOCK__PENDING", y = "USER_UNBLOCK__SUCCESS", h = "USER_UNBLOCK__FAILED", m = Object(a.a)(j), v = Object(a.a)(y), _ = Object(a.a)(h), E = e => async (t, s, a) => {
					let {
						apiContext: l
					} = a;
					const u = s(),
						b = Object(d.i)(u),
						g = b ? b.id : void 0,
						p = u.user.blocked.data.filter(t => t.name === e)[0];
					g && (t(m({
						name: e
					})), (await Object(i.c)(l(), g, e)).ok ? (t(v({
						name: e
					})), p && p.id && t(Object(r.h)(p.id)), t(c.e({
						kind: o.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(c.e({
						kind: o.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(_({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "o", (function() {
				return K
			})), s.d(t, "n", (function() {
				return V
			})), s.d(t, "m", (function() {
				return H
			})), s.d(t, "l", (function() {
				return W
			})), s.d(t, "j", (function() {
				return Q
			})), s.d(t, "k", (function() {
				return J
			})), s.d(t, "p", (function() {
				return z
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./node_modules/lodash/isEmpty.js"),
				c = s.n(r),
				i = s("./src/reddit/actions/authorFlair.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/flair/index.ts"),
				l = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/userFlair.ts");
			const f = "USER_FLAIR_DATA__MUTATED",
				j = "AUTHOR_FLAIR_DATA__MUTATED",
				y = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				h = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING"),
				m = Object(a.a)(y),
				v = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED"),
				_ = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				E = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				I = Object(a.a)(_),
				w = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				T = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(a.a)(S),
				A = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED"),
				P = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				D = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING"),
				R = Object(a.a)(P),
				k = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED"),
				N = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				L = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				x = Object(a.a)(N),
				M = Object(a.a)("STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS"),
				U = Object(a.a)(L),
				F = "USERFLAIR_FETCH_SUCCESS",
				G = Object(a.a)(F),
				B = Object(a.a)(f),
				q = Object(a.a)(j),
				K = (e, t, s, n, a) => async (r, c, i) => {
					let {
						apiContext: o
					} = i;
					const u = c(),
						b = u.user.account,
						f = b ? Object(g.e)(b) : void 0,
						j = Object(O.c)(u, {
							subredditId: a
						}),
						y = Object.assign(Object.assign({}, j.displaySettings), {
							isUserEnabled: s
						}),
						h = {
							userName: n,
							subredditId: a,
							applied: e,
							displaySettings: y
						};
					r(n === f ? B(h) : q(h));
					const m = Object(p.S)(u, {
							subredditId: a
						}),
						v = t && e ? Object(l.g)(e) : void 0;
					Object(d.g)(o(), n, m.name, t, v), Object(d.i)(o(), s, m.name)
				}, V = (e, t) => async (s, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n(),
						i = Object(p.S)(c, {
							subredditId: e
						}).name;
					s(h());
					const o = await Object(d.l)(r(), i, t);
					if (o.ok) {
						s(m({
							subredditId: e,
							isEnabled: t
						}))
					} else s(v());
					return o.ok
				}, H = (e, t) => async (s, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n(),
						i = Object(p.S)(c, {
							subredditId: e
						}).name;
					s(E());
					const o = await Object(d.j)(r(), t, u.d.UserFlair, i);
					if (o.ok) {
						s(I({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(w());
					return o.ok
				}, W = (e, t) => async (s, a, r) => {
					let {
						apiContext: c
					} = r;
					const i = a(),
						l = Object(p.S)(i, {
							subredditId: t
						}).name;
					s(T());
					const g = await Object(d.f)(c(), e, l, u.d.UserFlair),
						O = g.ok && !(g.body && !1 === g.body.success);
					if (O) {
						const e = {
							subredditId: t,
							template: g.body
						};
						s(C(e));
						const a = Object(o.d)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), b.b.SuccessMod);
						s(Object(o.e)(a))
					} else {
						s(A());
						const a = Object(o.d)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), W(e, t));
						s(Object(o.e)(a))
					}
					return O
				}, Q = (e, t) => async (s, a, r) => {
					let {
						apiContext: c
					} = r;
					const i = a(),
						l = Object(p.S)(i, {
							subredditId: t
						}).name;
					if (s(D()), (await Object(d.b)(c(), e, l)).ok) {
						s(R({
							subredditId: t,
							templateId: e
						}));
						const a = Object(o.d)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), b.b.SuccessMod);
						s(Object(o.e)(a))
					} else {
						s(k());
						const a = Object(o.d)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), Q(e, t));
						s(Object(o.e)(a))
					}
				}, J = (e, t) => async (s, a, r) => {
					let {
						apiContext: c
					} = r;
					const i = a(),
						l = Object(p.S)(i, {
							subredditId: t
						}).name,
						g = Object(O.c)(i, {
							subredditId: t
						}).templateIds;
					if (s(x({
							subredditId: t,
							templateIds: e
						})), (await Object(d.e)(c(), l, u.d.UserFlair, e)).ok) {
						s(M());
						const e = Object(o.d)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						s(Object(o.e)(e))
					} else {
						s(U({
							subredditId: t,
							templateIds: g
						}));
						const a = Object(o.d)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), J(e, t));
						s(Object(o.e)(a))
					}
				}, z = (e, t) => async (s, a, r) => {
					let {
						apiContext: l
					} = r;
					const u = a(),
						g = u.userFlair;
					if (g && g[e] && g[e].displaySettings.isEnabled && c()(g[e].templateIds)) {
						const a = Object(p.S)(u, {
								subredditId: e
							}).name,
							r = await Object(d.d)(l(), a);
						if (r.ok) s(G(r.body)), s(Object(i.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(o.d)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), b.b.Error);
							s(Object(o.e)(e))
						}
					} else s(Object(i.b)({
						username: t,
						subredditId: e
					}))
				}
		},
		"./src/reddit/actions/userWhitelist.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "h", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/accounts/index.ts"),
				i = s("./src/reddit/models/Toast/index.ts");
			const o = "USER_WHITELIST__PENDING",
				d = "USER_WHITELIST__SUCCESS",
				l = "USER_WHITELIST__FAILED",
				u = Object(a.a)(o),
				b = Object(a.a)(d),
				g = Object(a.a)(l),
				p = e => async (t, s, a) => {
					let {
						apiContext: o
					} = a;
					t(u());
					const d = await Object(c.e)(o(), e);
					d.ok ? d.body.name && (t(b(d.body)), t(r.e({
						kind: i.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(g()), t(r.e({
						kind: i.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, O = "USER_UNWHITELIST__PENDING", f = "USER_UNWHITELIST__SUCCESS", j = "USER_UNWHITELIST__FAILED", y = Object(a.a)(O), h = Object(a.a)(f), m = Object(a.a)(j), v = e => async (t, s, a) => {
					let {
						apiContext: o
					} = a;
					t(y({
						name: e
					})), (await Object(c.d)(o(), e)).ok ? (t(h({
						name: e
					})), t(r.e({
						kind: i.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(m({
						name: e
					})), t(r.e({
						kind: i.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}
		},
		"./src/reddit/actions/usernameAvailable.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "f", (function() {
				return p
			}));
			var n, a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/endpoints/usernameAvailable/index.ts");
			! function(e) {
				e[e.Available = 0] = "Available", e[e.Error = 1] = "Error", e[e.Pending = 2] = "Pending", e[e.Unavailable = 3] = "Unavailable"
			}(n || (n = {}));
			const c = "USERNAME_AVAILABLE__AVAILABLE",
				i = "USERNAME_AVAILABLE__FAILURE",
				o = "USERNAME_AVAILABLE__PENDING",
				d = "USERNAME_AVAILABLE__UNAVAILABLE",
				l = Object(a.a)(c),
				u = Object(a.a)(i),
				b = Object(a.a)(o),
				g = Object(a.a)(d),
				p = e => {
					let {
						username: t
					} = e;
					return async (e, s, a) => {
						let {
							apiContext: c
						} = a;
						const i = s().users.nameAvailable;
						if (!i[t] || i[t] === n.Error) {
							e(b({
								username: t
							}));
							const s = await Object(r.a)(c(), {
								username: t
							});
							s.ok ? s.body ? e(l({
								username: t
							})) : e(g({
								username: t
							})) : e(u({
								username: t
							}))
						}
					}
				}
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var n, a;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(n || (n = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(a || (a = {}))
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts");
			const o = async (e, t) => Object(r.a)(Object(c.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/block_user"),
				method: a.db.POST
			}), d = async (e, t, s) => Object(r.a)(Object(c.a)(e, [i.a]), {
				data: {
					name: s,
					container: t,
					type: "enemy"
				},
				endpoint: "".concat(e.apiUrl, "/api/unfriend"),
				method: a.db.POST
			}), l = async (e, t) => Object(r.a)(Object(c.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/add_whitelisted?include_model"),
				method: a.db.POST
			}), u = async (e, t) => Object(r.a)(Object(c.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/remove_whitelisted"),
				method: a.db.POST
			}), b = async (e, t) => Object(r.a)(Object(c.a)(e, [i.a]), {
				endpoint: "".concat(n.a.oauthUrl, "/user/").concat(t, "/about"),
				method: a.db.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/chat/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "j", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts");
			const o = "api/v1",
				d = "".concat(o, "/sendbird");
			var l;
			! function(e) {
				e.PUBLIC = "all"
			}(l || (l = {}));
			const u = 10,
				b = 10;
			class ChatEndpointError extends Error {
				constructor(e, t) {
					super(e), this.response = t
				}
			}
			const g = async (e, t, s) => {
				const d = {};
				return s && (d.public_mode = l.PUBLIC), Object(r.a)(Object(c.a)(e, [i.a]), {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(o, "/subreddit/").concat(t, "/channels"),
					method: a.db.GET,
					data: d
				})
			}, p = async (e, t, s) => Object(r.a)(Object(c.a)(e, [i.a]), {
				endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(o, "/subreddit/channels/create"),
				method: a.db.POST,
				data: JSON.stringify({
					room: s.room,
					room_type: s.roomType,
					description: s.description,
					subreddit: s.subreddit,
					automute_account_age_threshold: s.minimumAcctAge,
					automute_on_join_duration: s.newMemberAge
				})
			}), O = async (e, t, s, d) => Object(r.a)(Object(c.a)(e, [i.a]), {
				endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(o, "/subreddit/channels/").concat(t),
				method: a.db.PUT,
				data: JSON.stringify({
					room: d.room,
					description: d.description,
					automute_account_age_threshold: d.minimumAcctAge,
					automute_on_join_duration: d.newMemberAge
				})
			}), f = async (e, t) => Object(r.a)(Object(c.a)(e, [i.a]), {
				endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(o, "/subreddit/channels/").concat(t),
				method: a.db.DELETE
			}), j = async e => Object(r.a)(Object(c.a)(e, [i.a]), {
				endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(d, "/config"),
				method: a.db.GET
			});
			var y, h;

			function m(e) {
				const t = {
					bannedWords: e.profanity_filter && e.profanity_filter.keywords,
					regexes: e.profanity_filter && e.profanity_filter.regex_filters,
					rateLimit: e.user_messages_per_channel,
					domains: e.domain_filter && e.domain_filter.domains && e.domain_filter.domains.join(", "),
					useDefaultProfanityFilter: e.profanity_filter && e.profanity_filter.should_check_global,
					domainFilterOption: void 0
				};
				if (!1 === e.allow_links) t.domainFilterOption = h.BLOCK_ALL_DOMAINS;
				else {
					const {
						domain_filter: {
							type: s
						} = {
							type: void 0
						}
					} = e;
					s === y.BLOCK_MODE ? t.domainFilterOption = h.BLOCK_BANNED_DOMAINS : s === y.ALLOW_MODE ? t.domainFilterOption = h.ALLOW_APPROVED_DOMAINS : t.domainFilterOption = h.ALLOW_ALL_DOMAINS
				}
				return t
			}

			function v(e) {
				const t = {};
				return e.rateLimit && e.rateLimit > 0 && (t.user_messages_per_channel = e.rateLimit, t.user_messages_per_channel_duration = b), void 0 === e.bannedWords && void 0 === e.regexes && void 0 === e.useDefaultProfanityFilter || (t.profanity_filter = {
					keywords: e.bannedWords,
					regex_filters: e.regexes,
					should_check_global: e.useDefaultProfanityFilter
				}), e.domainFilterOption === h.BLOCK_ALL_DOMAINS ? (t.allow_links = !1, t.domain_filter = {
					type: y.DISABLE
				}) : e.domainFilterOption === h.ALLOW_ALL_DOMAINS ? (t.allow_links = !0, t.domain_filter = {
					type: y.DISABLE
				}) : e.domainFilterOption === h.ALLOW_APPROVED_DOMAINS && e.domains ? (t.allow_links = !0, t.domain_filter = {
					type: y.ALLOW_MODE,
					domains: e.domains.split(",")
				}) : e.domainFilterOption === h.BLOCK_BANNED_DOMAINS && e.domains && (t.allow_links = !0, t.domain_filter = {
					type: y.BLOCK_MODE,
					domains: e.domains.split(",")
				}), t
			}
			async function _(e, t) {
				const s = await Object(r.a)(Object(c.a)(e, [i.a]), {
					endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(o, "/chat/subreddit/").concat(t, "/settings"),
					method: a.db.GET
				});
				if (s.ok && s.body) return m(s.body)
			}
			async function E(e, t, s) {
					const d = await Object(r.a)(Object(c.a)(e, [i.a]), {
						endpoint: "".concat(n.a.sendbirdServiceUrl, "/").concat(o, "/chat/subreddit/").concat(t, "/settings"),
						method: a.db.PUT,
						data: JSON.stringify(v(s))
					});
					if (d.ok && d.body) return Object.assign(Object.assign({}, d), {
						body: m(d.body)
					});
					throw new ChatEndpointError("Failed to update subreddit chat settings", d)
				}! function(e) {
					e[e.BLOCK_MODE = 2] = "BLOCK_MODE", e[e.ALLOW_MODE = 1] = "ALLOW_MODE", e[e.DISABLE = 0] = "DISABLE"
				}(y || (y = {})),
				function(e) {
					e.ALLOW_ALL_DOMAINS = "Allow all domains", e.ALLOW_APPROVED_DOMAINS = "Allow links to approved domains", e.BLOCK_BANNED_DOMAINS = "Block links to banned domains", e.BLOCK_ALL_DOMAINS = "Block all domains"
				}(h || (h = {}))
		},
		"./src/reddit/endpoints/crowdControl/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return c
			}));
			var n, a = s("./src/graphql/operations/CrowdControlLevelInfo.json"),
				r = s("./src/lib/makeGqlRequest/index.ts");
			! function(e) {
				e.Off = "OFF", e.Lenient = "LENIENT", e.Medium = "MEDIUM", e.Strict = "STRICT"
			}(n || (n = {}));
			const c = (e, t) => Object(r.a)(e, Object.assign(Object.assign({}, a), {
				variables: {
					postId: t
				}
			}))
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			async function r(e, t, s) {
				const r = Object(a.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: "".concat(n.a.metaUrl, "/badges/").concat(t),
						data: {
							selected: !0,
							users: s
						}
					}),
					c = await r;
				if (c.ok) {
					const e = {},
						t = {},
						s = c.body;
					return Object.keys(s).forEach(n => {
						const a = s[n];
						t[n] = a, e[a.userId] || (e[a.userId] = []), e[a.userId].push(a.id)
					}), Object.assign(Object.assign({}, c), {
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					})
				}
				return c
			}
			async function c(e, t, s) {
				const r = await Object(a.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/badges/").concat(t, "?users=").concat(s)
				});
				if (r.ok) {
					const e = {},
						t = [],
						s = r.body;
					return Object.keys(s).forEach(n => {
						const a = s[n];
						e[n] = a, t.push(a.id)
					}), Object.assign(Object.assign({}, r), {
						body: {
							badges: e,
							userOwnedBadges: t
						}
					})
				}
				return r
			}

			function i(e, t, s) {
				let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(a.a)(e, {
					method: "patch",
					endpoint: "".concat(n.a.metaUrl, "/badges/").concat(t, "/").concat(s),
					data: {
						selected: r
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: a.db.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/products/").concat(t, "?types=badge")
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/products/").concat(t, "?types=badge,membership")
				})
			}

			function i(e, t) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/orders"),
					data: t
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/orders"),
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
		"./src/reddit/endpoints/page/profileOverviewPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				a = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const o = (e, t, s) => Object(c.a)(e, {
					data: s,
					endpoint: Object(a.a)(Object(i.a)("".concat(n.a.gatewayUrl, "/desktopapi/v1/user/").concat(t, "/conversations"))),
					traceRequestName: "get_profile_conversations",
					method: r.db.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? Object.assign(Object.assign({}, e), {
					body: Object.assign(Object.assign({}, e.body), {
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					})
				}) : e),
				d = (e, t, s) => Object(c.a)(e, {
					data: s,
					endpoint: Object(a.a)(Object(i.a)("".concat(n.a.gatewayUrl, "/desktopapi/v1/user/").concat(t, "/overview"))),
					method: r.db.GET
				}).then(e => "pinned" in e.body ? e : "overviewIds" in e.body ? Object.assign(Object.assign({}, e), {
					body: Object.assign(Object.assign({}, e.body), {
						pinned: e.body.overviewIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					})
				}) : e)
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				a = s("./src/reddit/models/PostDraft/index.ts");
			const r = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				c = e => {
					switch (e.kind) {
						case a.b.Link:
							return "link";
						case a.b.Markdown:
							return "markdown";
						case a.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				i = e => {
					switch (e) {
						case "link":
							return a.b.Link;
						case "markdown":
							return a.b.Markdown;
						case "richtext":
							return a.b.RichText;
						default:
							return "self"
					}
				},
				o = e => e.title.substring(0, 300),
				d = e => {
					switch (e.kind) {
						case a.b.Link:
						case a.b.Markdown:
							return e.body;
						case a.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => Object.assign(Object.assign(Object.assign(Object.assign({
					id: e.draftId || void 0
				}, (e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {})(e)), {
					kind: c(e),
					title: o(e),
					body: d(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC
				}), (e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(n.g)(e) || null,
					flair_text_color: e.textColor || null,
					flair_background_color: e.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				})(e.flair)), {
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
				})
		},
		"./src/reddit/endpoints/usernameAvailable/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				r = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts");
			const i = (e, t) => Object(a.a)(Object(r.a)(e, [c.a]), {
				method: n.db.GET,
				endpoint: "".concat(e.apiUrl, "/api/username_available.json?user=").concat(t.username),
				type: "json"
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js");

			function a(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function r(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(a).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function c(e) {
				const t = "".concat(e.type, " (").concat(e.code, ")");
				return "message" in e ? "".concat(t, ": ").concat(e.message) : t
			}
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/xorWith.js"),
				c = s.n(r);
			t.a = (e, t) => {
				const s = c()(e, t, a.a);
				return !(!s || 0 !== s.length)
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./src/lib/fastdom/index.ts");
			const r = "https://js.stripe.com/v3/",
				c = "https://www.paypalobjects.com/api/checkout.js",
				i = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: "https://www.paypal.com/sdk/js?client-id=".concat(n.a.paypal.braintreeApiKey) + "&currency=USD&vault=true"
				};

			function o(e, t) {
				return t() ? Promise.resolve() : new Promise((s, n) => a.a.write(() => {
					t() && s();
					const n = document.head;
					let a = n.querySelector("script[src='".concat(e, "']"));
					a || ((a = document.createElement("script")).src = e, n.appendChild(a)), a.addEventListener("load", (function e() {
						this.removeEventListener("load", e), s()
					}))
				}))
			}

			function d() {
				return o(r, () => "undefined" != typeof Stripe)
			}

			function l() {
				return o(c, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(i).map(e => {
					const t = "__" + e;
					return o(i[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/onBeforeRequestFactory/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n),
				r = s("./src/config.ts"),
				c = s("./src/lib/addQueryParams/index.ts"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./src/reddit/selectors/subreddit.ts"));
			const o = new RegExp("^/desktopapi/v1/(duplicates/[^/]+|frontpage|news|search|subreddits/(all|popular))(/|$)"),
				d = new RegExp("^/desktopapi/v1/(search|subreddits|postcomments|collection_postcomments|submitpage)(/|$)"),
				l = new RegExp("^/desktopapi/v1/(subreddits|postcomments|collection_postcomments)/?$"),
				u = (new RegExp("^/desktopapi/v1/(postcomments)(/+|$)"), new RegExp("^/desktopapi/v1/frontpage/?$")),
				b = new RegExp("^/desktopapi/v1/submitpage(/|$)");
			var g = (e, t, s) => {
					const n = new Set;
					e.user.session && !e.user.session.unsafeLoggedOut && (e.user.account || (n.add("identity"), n.add("prefs"), n.add("prefsAccount")), (e => !o.test(e.pathname || ""))(t) && n.add("identity")), !e.live.isFrontpageLoaded && (e => u.test(e.pathname || ""))(t) && n.add("featuredLiveThread");
					const a = t.pathname || "";
					if (d.test(a) || l.test(a)) {
						const a = ((e, t) => {
								if (b.test(e.pathname || "")) {
									const {
										subreddit: e
									} = t.data;
									return e
								}
							})(t, s),
							r = e.platform.currentPage,
							c = r && r.urlParams.subredditName,
							o = a || c || "",
							d = Object(i.G)(e, o);
						d && e.structuredStyles.models[d] || n.add("structuredStyles"), e.user.prefs.subreddit[d] || n.add("prefsSubreddit")
					}
					return [...n].join(",")
				},
				p = s("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const s = a.a.parse(t.endpoint, !0),
					{
						host: n,
						protocol: i
					} = s;
				if ("".concat(i, "//").concat(n) === r.a.gatewayUrl) {
					const n = {},
						a = Object(p.Y)(e.getState()) ? "1" : "";
					n.allow_over18 = a, n.include = g(e.getState(), s, t), t.endpoint = Object(c.a)(t.endpoint, n)
				}
			}
		},
		"./src/reddit/helpers/ordinal/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				const t = ["th", "st", "nd", "rd"],
					s = e % 100;
				return e + (t[(s - 20) % 10] || t[s] || t[0])
			}
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "g", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			s("./node_modules/react/index.js");
			const a = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function r(e, t) {
				for (var s = arguments.length, n = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++) n[r - 2] = arguments[r];
				if (a(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let s = 0;
						(e = new Error(t.replace(/%s/g, () => String(n[s++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const c = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				i = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var o = function(e, t, s) {
					const a = e.length;
					if (0 === a) return "";
					if (1 === a) return e[0];
					const o = e[a - 1];
					let d = e[0];
					for (let r = 1; r < a - 1; ++r) switch (s) {
						case i.SEMICOLON:
							d = n.fbt._("{previous items}; {following items}", [n.fbt._param("previous items", d), n.fbt._param("following items", e[r])], {
								hk: "4hs4xq"
							});
							break;
						default:
							d = n.fbt._("{previous items}, {following items}", [n.fbt._param("previous items", d), n.fbt._param("following items", e[r])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, s, a) {
						switch (s) {
							case c.AND:
								return n.fbt._("{list of items} and {last item }", [n.fbt._param("list of items", e), n.fbt._param("last item ", t)], {
									hk: "1ylan1"
								});
							case c.OR:
								return n.fbt._("{list of items} or {last item}", [n.fbt._param("list of items", e), n.fbt._param("last item", t)], {
									hk: "3q8AmB"
								});
							case c.NONE:
								switch (a) {
									case i.SEMICOLON:
										return n.fbt._("{previous item}; {last item}", [n.fbt._param("previous item", e), n.fbt._param("last item", t)], {
											hk: "1h77rJ"
										});
									default:
										return n.fbt._("{list of items}, {last item}", [n.fbt._param("list of items", e), n.fbt._param("last item", t)], {
											hk: "3Q0iaX"
										})
								}
								default:
									r(!1, "Invalid conjunction %s provided to intlList", s)
						}
					}(d, o, t || c.AND, s || i.COMMA)
				},
				d = s("./src/lib/timezone/index.ts"),
				l = s("./src/reddit/helpers/isArrayEqual.ts"),
				u = s("./src/reddit/helpers/ordinal/index.ts"),
				b = s("./src/reddit/models/ScheduledPost/index.ts");
			const g = e => {
					const t = e.toLocaleDateString(void 0, {
							month: "numeric",
							day: "numeric"
						}),
						s = e.toLocaleTimeString(void 0, {
							hour: "numeric",
							minute: "numeric"
						});
					return "".concat(t, " @ ").concat(s.replace(" ", "").toLowerCase())
				},
				p = (e, t) => {
					if (e && t) {
						const s = Object(d.f)(f(e, t)),
							a = g(s);
						return n.fbt._("Submit post at {time}", [n.fbt._param("time", a)], {
							hk: "IZ3L"
						})
					}
					return n.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				O = e => e.slice(0, 5),
				f = (e, t) => "".concat(e, "T").concat(O(t), ":00"),
				j = e => {
					const [t, s] = e.split("T");
					return [t, O(s)]
				},
				y = e => {
					const [t, s] = j(e);
					if (t && s) {
						const e = Object(d.f)(f(t, s));
						return g(e)
					}
					return ""
				},
				h = e => {
					const t = Object(d.d)(e);
					let s, n = e;
					if (t) {
						s = t.offset;
						const a = Object(d.e)(t.offset),
							r = e.replace("/", " - ").replace(/_/g, " ");
						n = "(GMT".concat(a, ") ").concat(r)
					}
					return {
						name: e,
						displayText: n,
						offset: s
					}
				},
				m = e => "string" == typeof e,
				v = e => {
					const t = new Date,
						s = e - t.getDay();
					return t.setDate(t.getDate() + s), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				_ = e => {
					const t = (e => {
						const [t, s] = j(e);
						if (t && s) {
							return Object(d.f)(f(t, s)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === b.d.Hourly) return 2 === e.interval ? n.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? n.fbt._("Every {hour interval} hours", [n.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : n.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === b.d.Daily) return 2 === e.interval ? n.fbt._("Every other day at {start time}", [n.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? n.fbt._("Every {day interval} days at {start time}", [n.fbt._param("day interval", e.interval.toString()), n.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : n.fbt._("Every day at {start time}", [n.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === b.d.Weekly) {
						const s = (e => o(e.map(b.k).sort((e, t) => e - t).map(v), c.AND, i.COMMA))(e.byWeekDays);
						return 2 === e.interval ? n.fbt._("Every other week on {days of week } at {start time}", [n.fbt._param("days of week ", s), n.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? n.fbt._("Every {interval} weeks on {days of week} at {start time}", [n.fbt._param("interval", e.interval.toString()), n.fbt._param("days of week", s), n.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : n.fbt._("Every week on {days of week} at {start time}", [n.fbt._param("days of week", s), n.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const s = (e => o(e.sort((e, t) => e - t).map(u.a), c.AND, i.COMMA))(e.byMonthDays);
					return 2 === e.interval ? n.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [n.fbt._param("days of month", s), n.fbt._plural(e.byMonthDays.length), n.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? n.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [n.fbt._param("interval", e.interval.toString()), n.fbt._param("days of month", s), n.fbt._plural(e.byMonthDays.length), n.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : n.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [n.fbt._param("days of month", s), n.fbt._plural(e.byMonthDays.length), n.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				E = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = b.b);
					const s = Object(d.f)(e.publishAt),
						n = Object(b.p)(s.getDay()),
						a = s.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== n && (t = b.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== a && (t = b.b), {
						recurrenceInfo: e.frequency ? {
							frequency: e.frequency,
							byMonthDays: e.byMonthDays,
							byWeekDays: e.byWeekDays,
							interval: e.interval
						} : null,
						frequencyOption: t,
						submitDate: e.publishAt,
						timezoneName: e.clientTimezone
					}
				},
				I = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const s in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(s)) {
							if (Array.isArray(e[s]) && (!Array.isArray(t[s]) || !Object(l.a)(e[s], t[s]))) return !1;
							if (e[s] !== t[s]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/helpers/trackers/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return i
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "f", (function() {
				return h
			}));
			var n = s("./src/reddit/constants/chat.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const c = e => ({
					screen: Object(a.screen)(e),
					subreddit: Object(a.subreddit)(e)
				}),
				i = () => e => Object.assign({
					source: r.b.ChatSidebarWidget,
					action: "view",
					noun: "chat_rooms",
					chat: Object(a.numberChannels)(e)
				}, c(e)),
				o = e => t => Object.assign({
					source: r.b.ChatSidebarWidget,
					action: "click",
					noun: "view_room",
					chat: Object(a.channel)(t, e)
				}, c(t)),
				d = e => t => Object.assign({
					source: r.b.ChatSidebarWidget,
					action: "click",
					noun: "join_room",
					chat: Object(a.channel)(t, e)
				}, c(t)),
				l = () => e => Object.assign({
					source: r.b.ChatSidebarWidget,
					action: "click",
					noun: "view_all_rooms",
					chat: Object(a.numberChannels)(e)
				}, c(e)),
				u = e => t => Object.assign({
					source: r.b.ChatSidebarModal,
					action: "click",
					noun: "view_room",
					chat: Object(a.channel)(t, e)
				}, c(t)),
				b = e => t => Object.assign({
					source: r.b.ChatSidebarModal,
					action: "click",
					noun: "join_room",
					chat: Object(a.channel)(t, e)
				}, c(t)),
				g = () => e => Object.assign({
					source: r.b.ChatSetup,
					action: "view",
					noun: "create_chat_room"
				}, c(e)),
				p = e => t => {
					const {
						channelSendbirdUrl: s,
						type: a
					} = e;
					return Object.assign({
						source: r.b.ChatSetup,
						action: "submit",
						noun: "create_chat_room",
						chat: {
							id: s,
							type: n.e[a]
						}
					}, c(t))
				},
				O = () => e => Object.assign({
					source: r.b.ChatSetup,
					action: "view",
					noun: "edit_chat_room"
				}, c(e)),
				f = e => t => {
					const {
						channelSendbirdUrl: s,
						type: a
					} = e;
					return Object.assign({
						source: r.b.ChatSetup,
						action: "submit",
						noun: "edit_chat_room",
						chat: {
							id: s,
							type: n.e[a]
						}
					}, c(t))
				},
				j = e => t => {
					const {
						channelSendbirdUrl: s,
						type: a
					} = e;
					return Object.assign({
						source: r.b.ChatSetup,
						action: "submit",
						noun: "delete_chat_room",
						chat: {
							id: s,
							type: n.e[a]
						}
					}, c(t))
				},
				y = () => e => Object.assign({
					source: r.b.Nav,
					action: "view",
					noun: "orangered_06"
				}, c(e)),
				h = e => t => Object.assign({
					source: "settings_privacy",
					action: "save",
					noun: "receive_chat_invites",
					setting: {
						value: e,
						oldValue: e
					}
				}, Object(a.defaults)(t))
		},
		"./src/reddit/helpers/trackers/commentList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/telemetry/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => {
				Object(n.a)(Object.assign(Object.assign({
					action: "view",
					source: "commentlist",
					noun: "bottom"
				}, a.defaults(e)), {
					listing: a.listing(e, t),
					subreddit: a.subreddit(e)
				}))
			}
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => t => Object.assign(Object.assign({
					source: e,
					noun: "create_community_button",
					action: "click"
				}, n.defaults(t)), {
					actionInfo: n.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				r = (e, t, s) => a => Object.assign(Object.assign({
					source: "community_form",
					noun: "save_community_button",
					action: "click"
				}, n.defaults(a)), {
					actionInfo: n.actionInfo(a, {
						settingValue: e
					}),
					subreddit: {
						id: s,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					}
				}),
				c = () => e => Object.assign(Object.assign({
					source: "community_form",
					noun: "cancel",
					action: "click"
				}, n.defaults(e)), {
					actionInfo: n.actionInfo(e)
				}),
				i = e => t => Object.assign(Object.assign({
					source: "community_form",
					noun: "error_message",
					action: "view"
				}, n.defaults(t)), {
					actionInfo: n.actionInfo(t, {
						reason: e
					})
				})
		},
		"./src/reddit/models/ChatSettingsPage/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "c", (function() {
					return a
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Unknown = "unknown", e.Toggle = "BOOLEAN"
				}(n || (n = {}));
			const a = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return e && Array.isArray(e) && e.length ? e.reduce((e, a) => {
						if (a && a.id && a.type && a.title && a.hasOwnProperty("state")) switch (a.type) {
							case n.Toggle:
								e.push({
									settingType: n.Toggle,
									settingId: a.id,
									subredditId: t,
									description: a.description,
									descriptionUrl: a.descriptionUrl,
									groupName: a.groupName,
									isEditable: !s && a.isEditable,
									state: "true" === String(a.state).toLowerCase(),
									title: a.title
								});
								break;
							default:
								e.push({
									settingType: n.Unknown,
									settingId: a.id,
									subredditId: t,
									description: a.description,
									descriptionUrl: a.descriptionUrl,
									groupName: a.groupName,
									isEditable: !s && a.isEditable,
									state: a.state,
									title: a.title
								})
						}
						return e
					}, []) : []
				},
				r = e => e.reduce((e, t) => (t.isEditable && e.push({
					id: t.settingId,
					state: String(t.state)
				}), e), [])
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js");

			function n(e, t) {
				return "".concat(e, "-sort[").concat(t.sort, "]-crossposts_only[").concat(t.crossposts_only, "]")
			}
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = 24,
				a = 64e3,
				r = 128,
				c = 128,
				i = (e, t, s, n) => Object.assign({
					name: e,
					url: t,
					subredditId: s
				}, n)
		},
		"./src/reddit/models/ModQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/reddit/models/Flair/index.ts");
			const r = 1;
			var c;
			! function(e) {
				e.Approve = "approve", e.Flair = "flair", e.IgnoreReports = "ignore_reports", e.Lock = "lock", e.MarkNSFW = "mark_nsfw", e.RemovalReason = "removal_reason", e.Remove = "remove", e.Spam = "spam", e.Spoiler = "spoiler", e.UnignoreReports = "unignore_reports", e.Unlock = "unlock", e.UnmarkNSFW = "unmark_nsfw", e.Unspoiler = "unspoiler"
			}(c || (c = {}));
			const i = {},
				o = {
					ignore_reports: c.UnignoreReports,
					lock: c.Unlock,
					mark_nsfw: c.UnmarkNSFW,
					remove: c.Approve,
					spam: c.Approve,
					spoiler: c.Unspoiler,
					unignore_reports: c.IgnoreReports,
					unlock: c.Lock,
					unmark_nsfw: c.MarkNSFW,
					unspoiler: c.Spoiler
				},
				d = (e, t, s, r, o) => {
					switch (t) {
						case "approve": {
							const e = {};
							return s.forEach(t => {
								e[t] = {
									approvedBy: r,
									isApproved: !0,
									isRemoved: !1,
									isSpam: !1,
									bannedBy: null,
									modNote: null,
									modReasonBy: null,
									modRemovalReason: null,
									numReports: 0
								}
							}), e
						}
						case "flair": {
							const t = {};
							return s.forEach(s => {
								if (Object(n.a)(s)) {
									const n = e[s].flair.filter(e => e.type === a.f.Nsfw || e.type === a.f.Spoiler);
									o && o.flair && n.push(o.flair), t[s] = {
										flair: n
									}
								}
							}), t
						}
						case "ignore_reports": {
							const e = {};
							return s.forEach(t => {
								e[t] = {
									ignoreReports: !0
								}
							}), e
						}
						case "lock": {
							const e = {};
							return s.forEach(t => {
								e[t] = {
									isLocked: !0
								}
							}), e
						}
						case "mark_nsfw": {
							const t = {},
								r = {
									text: "nsfw",
									type: a.f.Nsfw
								};
							return s.forEach(s => {
								if (Object(n.a)(s)) {
									const n = e[s],
										a = n.isNSFW ? n.flair : n.flair ? [...n.flair, r] : {
											[s]: r
										};
									t[s] = {
										isNSFW: !0,
										flair: a
									}
								}
							}), t
						}
						case "remove": {
							const e = {};
							return s.forEach(t => {
								e[t] = {
									approvedBy: null,
									isApproved: !1,
									isRemoved: !0,
									isSpam: !1,
									bannedBy: r
								}
							}), e
						}
						case "spam": {
							const e = {};
							return s.forEach(t => {
								e[t] = {
									approvedBy: null,
									isApproved: !1,
									isRemoved: !1,
									isSpam: !0,
									bannedBy: r
								}
							}), e
						}
						case "spoiler": {
							const t = {},
								r = {
									text: "spoiler",
									type: a.f.Spoiler
								};
							return s.forEach(s => {
								if (Object(n.a)(s)) {
									const n = e[s],
										a = n.isSpoiler ? n.flair : n.flair ? [...n.flair, r] : {
											[s]: r
										};
									t[s] = {
										isSpoiler: !0,
										flair: a
									}
								}
							}), t
						}
						case "unignore_reports": {
							const e = {};
							return s.forEach(t => {
								e[t] = {
									ignoreReports: !1
								}
							}), e
						}
						case "unlock": {
							const e = {};
							return s.forEach(t => {
								e[t] = {
									isLocked: !1
								}
							}), e
						}
						case "unmark_nsfw": {
							const t = {};
							return s.forEach(s => {
								if (Object(n.a)(s)) {
									const n = e[s],
										r = n.flair ? n.flair.filter(e => e.type !== a.f.Nsfw) : null;
									t[s] = {
										isNSFW: !1,
										flair: r
									}
								}
							}), t
						}
						case "unspoiler": {
							const t = {};
							return s.forEach(s => {
								if (Object(n.a)(s)) {
									const n = e[s],
										r = n.flair ? n.flair.filter(e => e.type !== a.f.Spoiler) : null;
									t[s] = {
										isSpoiler: !1,
										flair: r
									}
								}
							}), t
						}
						case c.RemovalReason: {
							const e = {};
							return s.forEach(t => {
								e[t] = {
									modNote: o && o.modNote,
									modReasonBy: r,
									modRemovalReason: o && o.removalReason
								}
							}), e
						}
						default:
							return i
					}
				}
		},
		"./src/reddit/models/SubredditChannel/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return o
			}));
			var n, a, r = s("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts");
			! function(e) {
				e.Public = "public", e.Private = "private"
			}(n || (n = {})),
			function(e) {
				e.Joined = "joined", e.Invited = "invited", e.Unsorted = "none"
			}(a || (a = {}));
			const c = {
					channelId: "",
					channelSendbirdUrl: "",
					subredditId: "",
					name: "",
					description: "",
					membersCount: 0,
					type: n.Public,
					channelState: a.Unsorted,
					minimumAcctAge: 0,
					newMemberAge: 0,
					isModQueue: !1
				},
				i = e => {
					const t = {};
					return e.length && e.forEach(e => {
						const s = (e => ({
							channelId: Object(r.a)(e.url),
							channelSendbirdUrl: e.url,
							channelState: e.member_state,
							subredditId: e.subreddit.id,
							isModQueue: e.is_modqueue,
							name: e.name,
							type: e.type,
							description: e.description,
							membersCount: e.member_count,
							minimumAcctAge: e.automute_account_age_threshold || 0,
							newMemberAge: e.automute_on_join_duration || 0
						}))(e);
						t[s.channelId] = s
					}), t
				},
				o = e => ({
					channelId: Object(r.a)(e.channel_url),
					channelSendbirdUrl: e.channel_url,
					channelState: a.Joined,
					subredditId: e.subreddit_id,
					isModQueue: !1,
					name: e.room,
					type: e.roomType,
					description: e.description,
					membersCount: 1,
					minimumAcctAge: e.automute_account_age_threshold,
					newMemberAge: e.automute_on_join_duration
				})
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(n || (n = {}))
		},
		"./src/reddit/reducers/comments/visitHighlightingFilter/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n, a = s("./src/reddit/actions/comment/index.ts"),
				r = s("./src/reddit/actions/platform.ts");
			! function(e) {
				e.First = "First", e.Last = "Last", e.None = "None"
			}(n || (n = {}));
			const c = n.Last;
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						return c;
					case a.a:
						return t.payload.sort;
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return dD
			}));
			var n = s("./src/reddit/actions/modal.ts");
			const a = {};
			var r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.e:
							if (!t.payload.actionSource && !t.payload.redirectUrl) return a;
							return Object.assign(Object.assign({}, e), t.payload);
						default:
							return e
					}
				},
				c = s("./src/reddit/actions/authorFlair.ts"),
				i = s("./src/reddit/actions/badge.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				d = s("./src/reddit/actions/governance/constants.ts"),
				l = s("./src/reddit/actions/harbergerTax/constants.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				b = s("./src/reddit/actions/postCreation/constants.ts"),
				g = s("./src/reddit/actions/product.ts"),
				p = s("./src/reddit/actions/reportFlow.ts"),
				O = s("./src/reddit/actions/structuredStyles/constants.ts"),
				f = s("./src/reddit/constants/modals.ts");
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.c: {
							const s = t.payload;
							return e === s ? null : s
						}
						case n.b:
						case b.z:
						case n.d:
						case u.a:
						case p.f:
							return null;
						case O.e:
							return e === f.a.BLADE_UNSAVED_CHANGES ? null : e;
						case O.d:
							return e === f.a.BLADE_NIGHTMODE ? null : e;
						case c.a:
							return e === f.a.USER_FLAIR_MODAL_ID ? null : f.a.USER_FLAIR_MODAL_ID;
						case i.c:
							return f.a.BADGE_PICKER;
						case g.b:
							return f.a.BADGE_PURCHASE;
						case d.d:
							return f.a.GOVERNANCE_OPT_OUT;
						case d.r:
							return f.a.TRANSFER_POINTS;
						case d.o:
							return f.a.GOVERNANCE_RELEASE_NOTES;
						case l.e:
							return f.a.HARBERGER_TAX_BANNER_PURCHASE;
						case l.c:
							return f.a.HARBERGER_TAX_BANNER_MANAGE;
						case l.b:
							return f.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE;
						case l.a:
							return f.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE;
						case d.x:
							return f.a.WALLET_REGISTRATION_MODAL;
						case o.c:
							return f.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT;
						case o.j:
							return f.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL;
						default:
							return e
					}
				},
				y = s("./src/reddit/actions/ads/constants.ts"),
				h = s("./src/reddit/actions/unload/constants.ts");
			const m = {};

			function v(e, t, s, n) {
				const a = e[t];
				return Object.assign(Object.assign({}, e), {
					[t]: Object.assign(Object.assign({}, a), {
						[n]: s
					})
				})
			}
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (!t.payload) return e;
					switch (t.type) {
						case y.c:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case y.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case y.m:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case y.j:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case y.d:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case y.i:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case y.h:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case y.f:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case y.e:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case y.g:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case y.k: {
							const {
								postId: s,
								eventType: n,
								vendorMetadata: a
							} = t.payload;
							return v(e, s, a, "adVideoWatchedPercent".concat(n))
						}
						case y.l: {
							const {
								postId: s,
								eventType: n,
								vendorMetadata: a
							} = t.payload;
							return v(e, s, a, "adVideoWatchedSeconds".concat(n))
						}
						case y.v:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case y.x:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case y.w:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case h.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case y.r:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						default:
							return e
					}
				},
				E = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/apiRequestState.ts"));
			const I = {};
			var w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.d:
						case E.a:
						case E.b: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.apiRequestId]: s
							})
						}
						case E.c: {
							const s = t.payload;
							if (!(s in e)) return e;
							if (1 === Object.keys(e).length) return I;
							const n = Object.assign({}, e);
							return delete n[s], n
						}
						default:
							return e
					}
				},
				S = s("./node_modules/redux/es/redux.js"),
				T = s("./src/reddit/actions/subredditModeration.ts");
			var C = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.e:
						case T.d:
							return null;
						case T.c:
							return t.payload;
						default:
							return e
					}
				},
				A = s("./src/reddit/models/SubredditModeration/index.ts");
			const P = {};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.e: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(A.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !0
							})
						}
						case T.d:
						case T.c: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(A.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !1
							})
						}
						default:
							return e
					}
				},
				R = Object(S.c)({
					error: C,
					pending: D
				});
			const k = {};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.d: {
						const {
							fetchedToken: s,
							subredditId: n
						} = t.payload, a = Object(A.d)(n, s);
						return Object.assign(Object.assign({}, e), {
							[a]: !0
						})
					}
					default:
						return e
				}
			};
			const L = {};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.d: {
							const {
								subredditId: e,
								after: s
							} = t.payload;
							return {
								[e]: s
							}
						}
						default:
							return e
					}
				},
				M = s("./node_modules/icepick/icepick.js");
			const U = {};
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.b:
					case T.d: {
						const {
							subredditId: s,
							approvedSubmitters: n
						} = t.payload, a = {
							[s]: n
						};
						return Object(M.merge)(e, a)
					}
					case T.i: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(M.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			var G = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.h:
					case T.g:
						return null;
					case T.f:
						return t.payload;
					default:
						return e
				}
			};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.h:
							return !0;
						case T.g:
						case T.f:
							return !1;
						default:
							return e
					}
				},
				q = Object(S.c)({
					error: G,
					pending: B
				});
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.h:
							return null;
						case T.g: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				V = Object(S.c)({
					api: q,
					result: K
				});
			const H = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.d: {
							const {
								subredditId: s,
								approvedSubmitterIds: n
							} = t.payload;
							return e[s] ? Object.assign(Object.assign({}, e), {
								[s]: [...e[s], ...n]
							}) : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case T.i: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== n)
							}
						}
						case T.b: {
							const {
								subredditId: s,
								approvedSubmitterIds: n
							} = t.payload, a = n[0];
							return a && e[s] && -1 === e[s].indexOf(a) ? {
								[s]: [a, ...e[s]]
							} : e
						}
						default:
							return e
					}
				},
				Q = Object(S.c)({
					api: R,
					fetchedTokens: N,
					loadMore: x,
					models: F,
					search: V,
					userOrder: W
				});
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.a:
							return t.payload;
						default:
							return e
					}
				},
				z = s("./node_modules/lodash/mergeWith.js"),
				Y = s.n(z),
				X = s("./src/reddit/actions/comment/index.ts"),
				Z = s("./src/reddit/actions/comment/websocket/constants.ts"),
				$ = s("./src/reddit/actions/grantUserFlair/constants.ts"),
				ee = s("./src/reddit/actions/modQueue/constants.ts"),
				te = s("./src/reddit/actions/page.ts"),
				se = s("./src/reddit/actions/pages/profileComments.ts"),
				ne = s("./src/reddit/actions/pages/profilePosts.ts"),
				ae = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				re = s("./src/reddit/actions/pages/search.ts"),
				ce = s("./src/reddit/actions/pages/subreddit.ts"),
				ie = s("./src/reddit/actions/profileConversations.ts"),
				oe = s("./src/reddit/actions/subreddit.ts"),
				de = s("./src/reddit/actions/userFlair.ts"),
				le = s("./src/reddit/models/User/index.ts");
			const ue = {};
			var be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z.b:
					case Z.c: {
						const s = t.payload,
							{
								authorFlair: n,
								isChatSort: a
							} = s;
						if (n && a) {
							return Y()(Object.assign({}, e), n, (e, t, s) => {
								if ("richtext" === s) return t
							})
						}
						return e
					}
					case ae.c:
					case ae.i:
					case ae.e:
					case ae.g:
					case re.c: {
						const {
							authorFlair: s
						} = t.payload;
						if (s) {
							return Object(M.merge)(e, s)
						}
						return e
					}
					case X.u:
					case ce.c:
					case te.b:
					case se.b:
					case se.e:
					case ne.e:
					case ne.b:
					case ie.e:
					case oe.i:
						return ge(e, t.payload);
					case ee.i:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v:
						return ge(e, t.payload.response);
					case de.i: {
						const {
							subredditId: s,
							userName: n,
							applied: a,
							displaySettings: {
								isUserEnabled: r
							}
						} = t.payload;
						return Object(M.setIn)(e, [s, n], r ? a : null)
					}
					case $.h:
					case $.b: {
						const {
							subredditId: s,
							userName: n,
							applied: a
						} = t.payload;
						return e[s] && e[s][n] ? Object(M.setIn)(e, [s, n], a) : e
					}
					case de.a: {
						const {
							subredditId: s,
							userName: n,
							applied: a,
							displaySettings: {
								isEnabled: r
							}
						} = t.payload;
						return Object(M.setIn)(e, [s, n], r ? a : null)
					}
					default:
						return e
				}
			};
			const ge = (e, t) => {
				let {
					account: s,
					authorFlair: n,
					userFlair: a
				} = t;
				const r = Object(M.merge)(e, n);
				if (!a || !s) return r;
				const c = Object.keys(a)[0];
				if (!c) return r;
				const i = a[c],
					o = Object(le.e)(s),
					d = i.applied,
					l = i.displaySettings && i.displaySettings.isUserEnabled;
				return o && d && l ? Object(M.merge)(r, {
					[c]: {
						[o]: d
					}
				}) : r
			};
			var pe = Object(S.c)({
					inContext: J,
					models: be
				}),
				Oe = s("./src/reddit/actions/gold/constants.ts");
			const fe = {};
			var je = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.e: {
						const {
							disabled: s,
							subredditOrProfileId: n
						} = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[n]: s
						}) : e
					}
					default:
						return e
				}
			};
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.i:
					case Oe.j:
						return null;
					case Oe.h:
						return t.payload;
					default:
						return e
				}
			};
			var he = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.a:
						case Oe.j:
						case Oe.h:
							return !1;
						case Oe.i:
							return !0;
						default:
							return e
					}
				},
				me = Object(S.c)({
					error: ye,
					pending: he
				}),
				ve = Object(S.c)({
					api: me
				});
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.K:
					case Oe.J:
						return null;
					case Oe.I:
						return t.payload;
					default:
						return e
				}
			};
			const Ee = {};
			var Ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.K: {
							const {
								subredditOrProfileId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Oe.e:
						case Oe.J:
						case Oe.O:
						case Oe.I: {
							const {
								subredditOrProfileId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				we = Object(S.c)({
					error: _e,
					pending: Ie
				});
			const Se = {};
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.O: {
						const {
							awards: s,
							subredditOrProfileId: n
						} = t.payload, a = {};
						return s.forEach(e => {
							a[e.id] = e.isEnabled
						}), Object.assign(Object.assign({}, e), {
							[n]: a
						})
					}
					case Oe.m: {
						const {
							awardId: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								[s]: !1
							})
						})
					}
					case Oe.p: {
						const {
							awardId: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								[s]: !0
							})
						})
					}
					default:
						return e
				}
			};
			const Ce = {};
			var Ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.J: {
							const {
								awards: s,
								subredditOrProfileId: n
							} = t.payload, a = s.map(e => e.id);
							return Object.assign(Object.assign({}, e), {
								[n]: a
							})
						}
						case Oe.j: {
							const {
								award: s,
								subredditId: n
							} = t.payload;
							if (s && s.id) {
								if (!e[n]) return Object.assign(Object.assign({}, e), {
									[n]: [s.id]
								});
								if (-1 === e[n].indexOf(s.id)) return Object.assign(Object.assign({}, e), {
									[n]: [s.id, ...e[n]]
								})
							}
							return e
						}
						default:
							return e
					}
				},
				Pe = Object(S.c)({
					api: we,
					availability: Te,
					order: Ae
				}),
				De = s("./node_modules/lodash/merge.js"),
				Re = s.n(De);
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			const ke = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const s = "".concat(t[1].substring(0, 2), ":").concat(t[1].substring(2));
				return "".concat(t[0], "+").concat(s)
			};
			var Ne = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : ke(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : ke(e.endsAt)), e),
				Le = s("./src/reddit/models/Gold/Award.ts"),
				xe = s("./src/reddit/actions/discoveryUnit.ts"),
				Me = s("./src/reddit/actions/frontpage.ts"),
				Ue = s("./src/reddit/actions/multireddit/constants.ts"),
				Fe = s("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				Ge = s("./src/reddit/actions/pages/modListing/constants.ts"),
				Be = s("./src/reddit/actions/pages/postCreation.ts"),
				qe = s("./src/reddit/actions/pages/profileOverview.ts"),
				Ke = s("./src/reddit/actions/profileOverviewChrono.ts"),
				Ve = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/makeActionCreator/index.ts")),
				He = (s("./src/config.ts"), s("./src/lib/constants/index.ts"));
			s("./src/lib/makeApiRequest/index.ts"), s("./src/reddit/helpers/addRedesignIdentifier/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ve.a)("RECOMMENDED_POSTS_LOADED"), Object(Ve.a)("RECOMMENDED_POSTS_FAILED");
			var We = s("./src/reddit/actions/search.ts");
			const Qe = {},
				Je = (e => t => {
					for (let s = 0; s < e.length; s++) t = e[s](t);
					return t
				})([Ne]);
			var ze = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.J:
					case Oe.ub: {
						const {
							awards: s
						} = t.payload, n = s.reduce((e, t) => (e[t.id] = Je(t), e), {});
						return Re()(Object.assign({}, e), n)
					}
					case Oe.O: {
						const s = t.payload.awards.reduce((e, t) => (e[t.id] = Object.assign(Object.assign({}, Je(t)), {
							isEnabled: !0
						}), e), {});
						return Re()(Object.assign({}, e), s)
					}
					case Oe.c: {
						const {
							awards: s
						} = t.payload, n = s.reduce((e, t) => (e[t.award.id] = Je(t.award), e), {});
						return Re()(Object.assign({}, e), n)
					}
					case Oe.j: {
						const {
							award: s
						} = t.payload;
						return s && s.id ? e[s.id] ? Re()(Object.assign({}, e), {
							[s.id]: Je(s)
						}) : Object.assign(Object.assign({}, e), {
							[s.id]: Je(s)
						}) : e
					}
					case Oe.fb: {
						const {
							awardId: s
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								isEnabled: !1
							})
						}) : e
					}
					case Fe.b:
					case X.u:
					case Z.b:
					case Be.b:
					case xe.e:
					case Me.b:
					case Ge.e:
					case Ge.h:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v:
					case Ue.r:
					case te.b:
					case te.g:
					case te.k:
					case re.c:
					case se.b:
					case se.e:
					case ie.b:
					case ie.e:
					case qe.b:
					case qe.e:
					case Ke.b:
					case ne.b:
					case ne.e:
					case ae.c:
					case ae.e:
					case ae.i:
					case ae.g:
					case "RECOMMENDED_POSTS_LOADED":
					case We.c:
					case oe.i:
					case ce.c: {
						const s = {},
							n = t.payload.posts || [],
							a = t.payload.comments || [];
						for (const e in n) {
							const t = n[e].allAwardings || [];
							for (const e of t) s[e.id] = Je(Object(Le.h)(e))
						}
						for (const e in a) {
							const t = a[e],
								{
									associatedAward: n,
									allAwardings: r = []
								} = t;
							for (const e of r) s[e.id] = Je(Object(Le.h)(e));
							n && (s[n.id] = Je(n))
						}
						return Re()(Object.assign({}, e), s)
					}
					case Oe.ob: {
						const s = {},
							{
								topAwardedPosts: n
							} = t.payload;
						return n.map(e => {
							const {
								post: t
							} = e, n = t.awardings || [];
							for (const a of n) {
								const e = a.award;
								s[e.id] = e
							}
						}), Re()(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const Ye = {};
			var Xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.d: {
							const {
								subredditOrProfileId: s,
								thingId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									[n]: !0
								})
							})
						}
						case Oe.c:
						case Oe.b: {
							const {
								subredditOrProfileId: s,
								thingId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									[n]: !1
								})
							})
						}
						default:
							return e
					}
				},
				Ze = Object(S.c)({
					pending: Xe
				});
			const $e = {};
			var et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.c: {
							const {
								awards: s,
								subredditOrProfileId: n,
								thingId: a
							} = t.payload, r = s.map(e => {
								let {
									award: t,
									total: s
								} = e;
								return {
									award: {
										id: t.id
									},
									total: s
								}
							});
							return Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign({}, e[n]), {
									[a]: r
								})
							})
						}
						default:
							return e
					}
				},
				tt = Object(S.c)({
					api: Ze,
					order: et
				});
			const st = {};
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.c: {
							const {
								tags: s,
								subredditOrProfileId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						default:
							return e
					}
				},
				at = Object(S.c)({
					order: nt
				});
			const rt = {};
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.ub: {
							const {
								awards: s,
								subredditOrProfileId: n
							} = t.payload, a = s.map(e => e.id);
							return Object.assign(Object.assign({}, e), {
								[n]: a
							})
						}
						default:
							return e
					}
				},
				it = Object(S.c)({
					order: ct
				}),
				ot = Object(S.c)({
					blacklist: je,
					create: ve,
					manageable: Pe,
					models: ze,
					sortedUsable: tt,
					tags: at,
					usable: it
				});
			const dt = {};
			var lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.e:
					case i.f: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: void 0
						})
					}
					case i.d: {
						const {
							subredditId: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const ut = {};
			var bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.e: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case i.f:
						case i.d: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				gt = Object(S.c)({
					error: lt,
					pending: bt
				});
			const pt = {};
			var Ot = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.h:
					case i.i: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: void 0
						})
					}
					case i.g: {
						const {
							subredditId: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const ft = {};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.h: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case i.i:
						case i.g: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				yt = Object(S.c)({
					error: Ot,
					pending: jt
				}),
				ht = Object(S.c)({
					subreddit: gt,
					user: yt
				});
			const mt = {};
			var vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.i:
						case i.f:
						case i.i:
						case g.d: {
							const {
								badges: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				_t = Object(S.c)({
					api: ht,
					models: vt
				});
			var Et = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.m:
					case T.l:
						return null;
					case T.k:
						return t.payload;
					default:
						return e
				}
			};
			const It = {};
			var wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : It,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.m: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(A.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !0
							})
						}
						case T.l:
						case T.k: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(A.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !1
							})
						}
						default:
							return e
					}
				},
				St = Object(S.c)({
					error: Et,
					pending: wt
				});
			const Tt = {};
			var Ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.l: {
							const {
								fetchedToken: s,
								subredditId: n
							} = t.payload, a = Object(A.d)(n, s);
							return Object.assign(Object.assign({}, e), {
								[a]: !0
							})
						}
						default:
							return e
					}
				},
				At = s("./src/reddit/actions/inContextModeration.ts");
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case At.a:
						return t.payload;
					default:
						return e
				}
			};
			const Dt = {};
			var Rt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.l: {
						const {
							subredditId: e,
							after: s
						} = t.payload;
						return {
							[e]: s
						}
					}
					default:
						return e
				}
			};
			const kt = {};
			var Nt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.j:
					case T.l: {
						const {
							subredditId: s,
							bannedUsers: n
						} = t.payload;
						return Object(M.merge)(e, {
							[s]: n
						})
					}
					case T.q: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(M.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			var Lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.p:
					case T.o:
						return null;
					case T.n:
						return t.payload;
					default:
						return e
				}
			};
			var xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.p:
							return !0;
						case T.o:
						case T.n:
							return !1;
						default:
							return e
					}
				},
				Mt = Object(S.c)({
					error: Lt,
					pending: xt
				});
			var Ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.p:
						case T.n:
							return null;
						case T.o: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				Ft = Object(S.c)({
					api: Mt,
					result: Ut
				});
			const Gt = {};
			var Bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.l: {
							const {
								subredditId: s,
								bannedUserIds: n
							} = t.payload;
							return e[s] ? Object.assign(Object.assign({}, e), {
								[s]: [...e[s], ...n]
							}) : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case T.q: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== n)
							}
						}
						case T.j: {
							const {
								subredditId: s,
								bannedUserIds: n
							} = t.payload, a = n[0];
							return a && e[s] && -1 === e[s].indexOf(a) ? {
								[s]: [a, ...e[s]]
							} : e
						}
						default:
							return e
					}
				},
				qt = Object(S.c)({
					api: St,
					fetchedTokens: Ct,
					inContext: Pt,
					loadMore: Rt,
					models: Nt,
					search: Ft,
					userOrder: Bt
				}),
				Kt = s("./src/reddit/actions/blockedRedditors.ts");
			const Vt = {
				message: ""
			};
			var Ht = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Kt.c:
					case Kt.d:
						return e;
					case Kt.b:
						return t.payload;
					default:
						return e
				}
			};
			var Wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kt.d:
							return !0;
						case Kt.c:
						case Kt.b:
							return !1;
						default:
							return e
					}
				},
				Qt = Object(S.c)({
					error: Ht,
					pending: Wt
				});
			const Jt = {
				ids: []
			};
			var zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case Kt.e:
							const s = e.ids.slice();
							return s.splice(e.ids.indexOf(t.payload), 1), Object.assign(Object.assign({}, e), {
								ids: s
							});
						case Kt.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				Yt = Object(S.c)({
					api: Qt,
					list: zt
				}),
				Xt = s("./src/reddit/actions/userBlocks.ts");
			const Zt = {};
			var $t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xt.f:
					case Xt.e: {
						const {
							userId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Xt.d: {
						const {
							userId: s,
							type: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const es = {};
			var ts = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : es,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xt.f: {
							const {
								userId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Xt.e:
						case Xt.d: {
							const {
								userId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				ss = Object(S.c)({
					error: $t,
					pending: ts
				}),
				ns = Object(S.c)({
					api: ss
				});
			const as = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var rs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : as,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : Object.assign(Object.assign({}, e), {
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							});
						case ce.d:
						case te.l:
						case te.h:
							return e.hasBrandSafetyBeenAssessed ? Object.assign(Object.assign({}, e), {
								hasBrandSafetyBeenAssessed: !1
							}) : e;
						default:
							return e
					}
				},
				cs = s("./src/reddit/actions/downToChat.ts");
			var is = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cs.f:
					case cs.g:
						return null;
					case cs.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var os = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cs.b:
						case cs.f:
							return !0;
						case cs.a:
						case cs.c:
						case cs.e:
						case cs.g:
							return !1;
						default:
							return e
					}
				},
				ds = Object(S.c)({
					error: is,
					pending: os
				}),
				ls = s("./node_modules/lodash/mapValues.js"),
				us = s.n(ls);
			const bs = {};
			var gs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cs.f:
						case cs.e:
						case cs.g: {
							const {
								subredditId: s,
								bannerEnabled: n,
								buttonEnabled: a
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: {
									bannerEnabled: n,
									buttonEnabled: a
								}
							})
						}
						case cs.c: {
							const {
								subredditId: s,
								bannerEnabled: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									bannerEnabled: n
								})
							})
						}
						case cs.d:
							return Object.assign({}, us()(e, e => ({
								bannerEnabled: !1,
								buttonEnabled: e.buttonEnabled
							})));
						case cs.a:
						case cs.b:
						default:
							return e
					}
				},
				ps = Object(S.c)({
					api: ds,
					subreddits: gs
				}),
				Os = s("./src/reddit/actions/chat/init.ts");
			var fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Os.a:
						return !0;
					default:
						return e
				}
			};
			s("./src/reddit/endpoints/chat/index.ts");
			Object(Ve.a)("SENDBIRD_PROXY__SET_CONFIG");
			var js = s("./src/reddit/actions/chat/subredditChannel.ts");
			var ys = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case js.b:
						case js.a:
							return !!t.payload.isUserSubredditChatEnabled;
						case "SENDBIRD_PROXY__SET_CONFIG":
							const {
								user_subreddit_chat_enabled: s
							} = t.payload;
							return s;
						default:
							return e
					}
				},
				hs = s("./src/chat/actions/promo/constants.ts");
			const ms = {
				displaySubredditChatFtux: !1
			};
			var vs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ms,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hs.a: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case hs.b: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				_s = s("./src/reddit/actions/chat/subredditSettings.ts");
			const Es = {
				subredditId: null,
				bannedWords: "",
				domains: "",
				rateLimit: -1,
				regexes: []
			};
			var Is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Es,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _s.a:
							return Object.assign({}, t.payload);
						default:
							return e
					}
				},
				ws = s("./src/lib/omitKey/index.ts"),
				Ss = s("./src/reddit/actions/pages/chatSettings.ts");
			const Ts = {};
			var Cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ts,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ss.b: {
						const {
							subredditId: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case Ss.a:
					case Ss.c:
					case Ss.d: {
						const {
							subredditId: s
						} = t.payload;
						return Object(ws.a)(e, s)
					}
					default:
						return e
				}
			};
			const As = {};
			var Ps = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : As,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ss.a:
						case Ss.b:
						case Ss.c:
						case Ss.d: {
							const {
								subredditId: s
							} = t.payload, n = t.type === Ss.c;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				Ds = Object(S.c)({
					error: Cs,
					pending: Ps
				}),
				Rs = Object(S.c)({
					fetch: Ds
				});
			const ks = {};
			var Ns = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ks,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ss.a:
						case Ss.d: {
							const {
								subredditId: s,
								chatSettings: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				Ls = Object(S.c)({
					api: Rs,
					models: Ns
				}),
				xs = s("./src/reddit/actions/chat/unreadCount.ts");
			const Ms = {
				apiError: null
			};
			var Us = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ms,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xs.a.REQUEST_FAILED: {
						const e = t.payload;
						return Object.assign(Object.assign({}, Ms), {
							apiError: e
						})
					}
					case xs.a.REQUEST_SUCCESS:
					case xs.a.REQUEST_PENDING:
						return Ms;
					default:
						return e
				}
			};
			var Fs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xs.a.REQUEST_PENDING:
							return !0;
						case xs.a.REQUEST_FAILED:
						case xs.a.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				Gs = Object(S.c)({
					error: Us,
					pending: Fs
				});
			const Bs = {
				basicChannelCount: 0,
				subredditChannelCount: 0
			};
			var qs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xs.a.SYNC:
						case xs.a.REQUEST_SUCCESS: {
							const e = t.payload;
							return Object.assign({}, e)
						}
						default:
							return e
					}
				},
				Ks = Object(S.c)({
					api: Gs,
					count: qs
				}),
				Vs = Object(S.c)({
					downToChat: ps,
					isInited: fs,
					isUserSubredditChatEnabled: ys,
					promos: vs,
					subredditSettings: Is,
					subredditSettingsPage: Ls,
					unread: Ks
				}),
				Hs = s("./src/reddit/actions/claimgold.ts");
			var Ws = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hs.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case Hs.d:
					case Hs.e:
					case Hs.c:
						return null;
					default:
						return e
				}
			};
			var Qs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hs.d:
					case Hs.c:
					case Hs.a:
						return !1;
					case Hs.b:
						return !0;
					default:
						return e
				}
			};
			var Js = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hs.b:
						case Hs.d:
						case Hs.c:
						case Hs.a:
							return !1;
						case Hs.f:
							return !0;
						default:
							return e
					}
				},
				zs = Object(S.c)({
					error: Ws,
					pending: Qs,
					showLoader: Js
				});
			var Ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hs.g:
						return t.payload;
					case Hs.e:
						return "";
					default:
						return e
				}
			};
			var Xs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hs.e:
							return !0;
						case Hs.c:
						case Hs.d:
							return !1;
						default:
							return e
					}
				},
				Zs = Object(S.c)({
					api: zs,
					code: Ys,
					showModal: Xs
				}),
				$s = s("./node_modules/lodash/get.js"),
				en = s.n($s);
			const tn = {};
			var sn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.d: {
							const {
								commentsPageKey: s,
								commentId: n,
								isCollapsed: a
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									[n]: !en()(e, [s, n], a)
								})
							})
						}
						case X.e: {
							const {
								commentsPageKey: s,
								commentId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									[n]: !1
								})
							})
						}
						case X.u:
						case Fe.b:
						case te.b: {
							const {
								key: s,
								shouldCollapse: n
							} = t.payload;
							if (!n) return e;
							const a = n.reduce((e, t) => Object.assign(Object.assign({}, e), {
								[t]: !0
							}), {});
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), a)
							})
						}
						default:
							return e
					}
				},
				nn = s("./src/lib/makeDraftKey/index.ts"),
				an = s("./src/reddit/models/PostCreationForm/index.ts"),
				rn = s("./src/reddit/models/PostDraft/index.ts");
			const cn = {};
			var on = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.q: {
						const {
							draftKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								autofocusDisabled: !0
							})
						})
					}
					case X.j: {
						const {
							draftKey: s,
							hasFocus: n
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								hasFocus: n
							})
						}) : e
					}
					case te.e: {
						const {
							draftKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: {
								rteState: null,
								draftType: rn.c.replyToPost
							}
						})
					}
					case Fe.b:
					case Fe.c:
					case te.d: {
						const {
							postId: s,
							commentMode: n
						} = t.payload, a = Object(nn.a)(rn.c.replyToPost, s);
						return Object.assign(Object.assign({}, e), {
							[a]: {
								commentMode: n,
								draftType: rn.c.replyToPost,
								hasFocus: !1,
								rteState: null,
								text: ""
							}
						})
					}
					case te.b: {
						const {
							postId: s,
							preferences: n
						} = t.payload;
						if (!n || void 0 === n.useMarkdown) return e;
						const a = Object(nn.a)(rn.c.replyToPost, s),
							r = n.useMarkdown ? an.h.MARKDOWN : an.h.RICH_TEXT;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, e[a]), {
								commentMode: r
							})
						})
					}
					case X.l:
						const {
							draftKey: s, content: n, editorMode: a
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								commentMode: a,
								rteState: null,
								text: a === an.h.MARKDOWN ? n : "",
								rtJson: a === an.h.RICH_TEXT ? n : null
							})
						}) : e;
					case X.r:
					case X.p: {
						const {
							draftKey: s,
							formData: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								hasFocus: !0
							})
						})
					}
					case X.k: {
						const {
							draftKey: s,
							formData: n
						} = t.payload;
						return null === e[s] ? e : Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), n)
						})
					}
					case X.f: {
						const {
							draftKey: s
						} = t.payload, n = e[s];
						return n && n.draftType === rn.c.replyToPost ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								rteState: null,
								text: ""
							})
						}) : Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case X.G: {
						const {
							draftKey: s
						} = t.payload, n = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								rteState: null,
								text: ""
							})
						})
					}
					case X.F:
					case X.B: {
						const {
							draftKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case X.E: {
						const {
							draftKey: s,
							draft: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const dn = {};
			var ln = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.h: {
						const {
							commentListNodeId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case X.i: {
						const {
							commentListNodeId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !e[s]
						})
					}
					default:
						return e
				}
			};
			const un = {};
			var bn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : un,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.c: {
						const {
							commentListNodeIds: s,
							commentsPageKey: n
						} = t.payload, a = s.reduce((t, s) => (t[s] = !en()(e, [n, s], !1), t), {});
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), a)
						})
					}
					case X.b: {
						const {
							commentListNodeIds: s,
							commentsPageKey: n
						} = t.payload, a = s.reduce((e, t) => (e[t] = !0, e), {});
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), a)
						})
					}
					case X.u:
					case Fe.b:
					case te.b: {
						const {
							key: s,
							shouldHide: n
						} = t.payload;
						if (!n) return e;
						const a = n.reduce((e, t) => (e[t] = !0, e), {});
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), a)
						})
					}
					default:
						return e
				}
			};
			const gn = {};
			var pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.r: {
							const {
								commentId: s,
								commentsPageKey: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign({}, e[n]), {
									[s]: !0
								})
							})
						}
						case X.g:
						case X.z:
						case X.B: {
							const {
								commentId: s,
								commentsPageKey: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign({}, e[n]), {
									[s]: !1
								})
							})
						}
						default:
							return e
					}
				},
				On = s("./node_modules/lodash/isEqual.js"),
				fn = s.n(On),
				jn = s("./node_modules/lodash/omit.js"),
				yn = s.n(jn),
				hn = s("./src/reddit/actions/bulkActions/constants.ts"),
				mn = s("./src/reddit/actions/modMode.ts"),
				vn = s("./src/reddit/actions/vote.ts"),
				_n = s("./src/reddit/helpers/isComment.ts"),
				En = s("./src/reddit/models/Comment/index.ts");
			const In = (e, t, s) => {
					const n = {};
					for (const r of t) n[r.award.id] = r.total;
					const a = s ? e.awarders && e.awarders.length ? e.awarders.includes(s) ? e.awarders : [s, ...e.awarders] : [s] : e.awarders;
					return Object.assign(Object.assign({}, e), {
						awarders: a,
						awardCountsById: n
					})
				},
				wn = (e, t) => Object.assign(Object.assign({}, e), {
					awardCountsById: Object.assign(Object.assign({}, e.awardCountsById), {
						[t]: 0
					})
				});
			var Sn = s("./src/reddit/models/ModQueue/index.ts"),
				Tn = s("./src/reddit/models/Vote/index.ts"),
				Cn = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const An = {},
				Pn = e => t => {
					for (let s = 0; s < e.length; s++) t = e[s](t);
					return t
				},
				Dn = ["next", "prev", "depth"],
				Rn = e => yn()(e, Dn),
				kn = e => {
					const {
						allAwardings: t,
						associatedAward: s
					} = e, n = Cn(e, ["allAwardings", "associatedAward"]), a = Object.assign({}, n);
					if (t) {
						const e = {};
						for (const s of t) e[s.id] = s.count;
						a.awardCountsById = e
					}
					return s && (a.associatedAwardId = s.id), a
				};
			var Nn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : An,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z.b:
					case Z.c:
					case Z.d:
					case X.F:
					case X.G: {
						const {
							comment: s,
							originId: n,
							isChatSort: a
						} = t.payload, r = Pn([kn]);
						return !1 === a ? n ? Object.assign(Object.assign({}, e), {
							[s.id]: Object.assign(Object.assign({}, r(s)), {
								originId: n
							})
						}) : e : Object.assign(Object.assign({}, e), {
							[s.id]: r(s)
						})
					}
					case X.u:
					case Fe.b:
					case te.b:
					case se.b:
					case se.e:
					case qe.b:
					case qe.e:
					case ie.b:
					case ie.e:
					case Ke.b:
					case ae.i:
					case ae.g:
					case ae.c:
					case ae.e: {
						const s = Object.assign({}, e),
							n = Pn([Rn, kn]);
						for (const a in t.payload.comments) {
							const r = e[a],
								c = t.payload.comments[a];
							r ? fn()(r, c) || (c.postAuthor || (c.postAuthor = r.postAuthor), c.postTitle || (c.postTitle = r.postTitle), s[a] = n(c)) : s[a] = n(c)
						}
						return s
					}
					case Z.a:
					case X.y: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								isDeleted: !0,
								deletedBy: En.b.User
							})
						})
					}
					case X.n: {
						const s = t.payload;
						return Y()(Object.assign({}, e), s, (e, t) => Object.assign(Object.assign({}, e), t))
					}
					case vn.a: {
						const {
							id: s,
							vote: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object(Tn.c)(a, n)
						}) : e
					}
					case Oe.t: {
						const {
							awardings: s,
							id: n,
							gilder: a,
							treatmentTags: r
						} = t.payload, c = e[n];
						return c ? Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, In(c, s, a)), {
								treatmentTags: r
							})
						}) : e
					}
					case Oe.G: {
						const {
							awardId: s,
							thingId: n
						} = t.payload, a = e[n];
						return a ? Object.assign(Object.assign({}, e), {
							[n]: wn(a, s)
						}) : e
					}
					case T.l: {
						const {
							comments: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case ee.i:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v: {
						const {
							response: s
						} = t.payload, {
							comments: n
						} = s, a = Pn([kn]);
						return Object.assign(Object.assign({}, e), us()(n, a))
					}
					case hn.b:
					case ee.s: {
						const {
							operation: s,
							ids: n,
							username: a,
							options: r
						} = t.payload, c = n.filter(e => Object(_n.a)(e)), i = Object(Sn.d)(e, s, c, a, r);
						return Y()(Object.assign({}, e), i, (e, t) => Object.assign(Object.assign({}, e), t))
					}
					case re.c: {
						const {
							comments: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case mn.a: {
						const s = Object.assign({}, e);
						for (const n in e)
							if (e.hasOwnProperty(n)) {
								const a = e[n];
								s[n].computedCollapsed = a.collapsedBecauseCrowdControl ? !t.payload.enabled : a.collapsed
							} return s
					}
					case X.m: {
						const {
							commentId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								collapsedBecauseCrowdControl: !1
							})
						})
					}
					default:
						return e
				}
			};
			const Ln = {};
			var xn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z.b: {
						const {
							comment: s,
							depth: n,
							originId: a,
							isChatSort: r
						} = t.payload;
						if (!r && !n && !a) {
							const t = s.postId;
							return Object.assign(Object.assign({}, e), {
								[t]: e[t] ? e[t] + 1 : 1
							})
						}
						return e
					}
					case te.b: {
						const {
							postId: s
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: 0
						}) : e
					}
					default:
						return e
				}
			};
			const Mn = {};
			var Un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.p: {
						const {
							parentCommentId: s,
							commentsPageKey: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								[s]: !0
							})
						})
					}
					case X.o:
					case X.F: {
						const {
							parentCommentId: s,
							commentsPageKey: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								[s]: !1
							})
						})
					}
					default:
						return e
				}
			};
			const Fn = {};
			var Gn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.o:
					case X.E:
					case X.A:
					case X.G:
					case X.F:
					case X.B: {
						const {
							draftKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case X.D:
					case X.z: {
						const {
							draftKey: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case X.w: {
						const {
							id: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case X.x:
					case X.y: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					default:
						return e
				}
			};
			const Bn = {};
			var qn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.E:
						case X.A: {
							const {
								draftKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case X.F:
						case X.G:
						case X.B:
						case X.D:
						case X.z: {
							const {
								draftKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case X.x: {
							const {
								id: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case X.y:
						case X.w: {
							const {
								id: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Kn = Object(S.c)({
					error: Gn,
					pending: qn
				}),
				Vn = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				Hn = Object(S.c)({
					collapsed: sn,
					drafts: on,
					focused: ln,
					hidden: bn,
					isEditing: pn,
					models: Nn,
					replyFormOpen: Un,
					submit: Kn,
					visitHighlightFilter: Vn.b,
					newCommentsCount: xn
				}),
				Wn = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			var Qn = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wn.a:
						return !1;
					case Wn.b:
						return !0;
					default:
						return e
				}
			};
			const Jn = [];
			var zn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case y.n:
						return t.payload;
					case y.o:
					default:
						return e
				}
			};
			const Yn = {};
			var Xn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.d:
					case Fe.b:
					case te.d:
					case te.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Fe.a:
					case te.a: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n || {}
						})
					}
					default:
						return e
				}
			};
			const Zn = {};
			var $n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.c:
					case te.c: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					default:
						return e
				}
			};
			const ea = {};
			var ta = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ea,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.d:
						case te.d: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Fe.b:
						case Fe.a:
						case te.b:
						case te.a: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				sa = Object(S.c)({
					error: Xn,
					fullyLoaded: $n,
					pending: ta
				}),
				na = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/lodash/uniqBy.js")),
				aa = s.n(na),
				ra = s("./node_modules/lodash/values.js"),
				ca = s.n(ra);
			const ia = {};

			function oa(e, t) {
				return ca()(e).map(e => {
					const s = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
					return {
						id: e.id,
						created: s,
						stickied: e.isStickied,
						authorId: e.authorId
					}
				})
			}

			function da(e) {
				return aa()(e, "id").sort((e, t) => e.created - t.created)
			}
			var la = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ia,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.b:
						case X.u:
						case Fe.b: {
							const {
								comments: s,
								key: n
							} = t.payload, a = e[n] ? e[n] : [], r = oa(s, a.find(e => e.stickied)), c = da([...a, ...r]);
							return Object.assign(Object.assign({}, e), {
								[n]: [...c]
							})
						}
						case Z.b:
						case Z.c:
						case Z.d:
						case X.G:
						case X.F: {
							const {
								comment: {
									id: s,
									created: n,
									isStickied: a,
									authorId: r
								},
								commentsPageKey: c,
								isChatSort: i
							} = t.payload;
							return !1 === i ? e : Object.assign(Object.assign({}, e), {
								[c]: [...da([...e[c] ? e[c] : [], {
									id: s,
									created: n,
									stickied: a,
									authorId: r
								}])]
							})
						}
						default:
							return e
					}
				},
				ua = s("./src/reddit/helpers/commentList/index.ts");
			const ba = {};

			function ga(e) {
				const t = e;
				return us()(t, e => {
					let {
						depth: t,
						next: s,
						prev: n
					} = e;
					return {
						depth: t,
						next: s,
						prev: n
					}
				})
			}
			var pa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ba,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.u: {
						const {
							comments: s,
							commentLists: n,
							continueThreads: a,
							key: r,
							moreCommentsItem: c,
							moreComments: i
						} = t.payload, o = n[c.postId], d = e[r], l = {}, u = d[c.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = Object.assign(Object.assign({}, d[e]), {
								next: o.head || u.next
							})
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = Object.assign(Object.assign({}, d[e]), {
								prev: o.tail || u.prev
							})
						}
						if (o.head && o.tail) {
							const e = Object(ua.c)({
									commentLink: o.head,
									commentsDict: s,
									moreCommentsDict: i,
									continueThreadDict: a
								}),
								t = Object(ua.c)({
									commentLink: o.tail,
									commentsDict: s,
									moreCommentsDict: i,
									continueThreadDict: a
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return Object.assign(Object.assign({}, e), {
							[r]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e[r]), ga(s)), ga(a)), ga(i)), l)
						})
					}
					case Fe.b:
					case te.b: {
						const {
							comments: s,
							continueThreads: n,
							key: a,
							moreComments: r
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign(Object.assign(Object.assign({}, e[a]), ga(s)), ga(n)), ga(r))
						})
					}
					case Z.b:
						const {
							comment: s, commentsPageKey: n, depth: a, headCommentId: r, originId: c, isChatSort: i
						} = t.payload, o = e[n], d = {};
						let l = null;
						if (i) return r && (d[r] = Object.assign(Object.assign({}, o[r]), {
							prev: Object(En.g)(s.id)
						}), l = Object(En.g)(r)), Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign(Object.assign({}, e[n]), d), {
								[s.id]: {
									depth: 0,
									next: l,
									prev: null
								}
							})
						}); {
							let t = null;
							const r = s.parentId;
							if (c && r) {
								const s = "moreComments-" + c;
								if (o[r] && !o[s]) {
									const c = o[r].next;
									return c && (d[c.id] = Object.assign(Object.assign({}, o[c.id]), {
										prev: Object(En.h)(s)
									}), l = c), d[r] = Object.assign(Object.assign({}, o[r]), {
										next: Object(En.h)(s)
									}), t = Object(En.g)(r), Object.assign(Object.assign({}, e), {
										[n]: Object.assign(Object.assign(Object.assign({}, e[n]), d), {
											[s]: {
												depth: a || 0,
												next: l,
												prev: t
											}
										})
									})
								}
							}
							return e
						}
						case X.G: {
							const {
								comment: s,
								commentsPageKey: n,
								headCommentId: a
							} = t.payload, r = e[n], c = {};
							let i = null;
							return a && (c[a] = Object.assign(Object.assign({}, r[a]), {
								prev: Object(En.g)(s.id)
							}), i = Object(En.g)(a)), Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign(Object.assign({}, e[n]), c), {
									[s.id]: {
										depth: 0,
										next: i,
										prev: null
									}
								})
							})
						}
						case X.F: {
							const {
								comment: s,
								commentsPageKey: n,
								parentCommentId: a,
								depth: r
							} = t.payload, c = e[n], i = {};
							let o = null;
							if (!c[a]) return e;
							const d = c[a].next;
							return d && (i[d.id] = Object.assign(Object.assign({}, c[d.id]), {
								prev: Object(En.g)(s.id)
							}), o = d), i[a] = Object.assign(Object.assign({}, c[a]), {
								next: Object(En.g)(s.id)
							}), Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign(Object.assign({}, e[n]), i), {
									[s.id]: {
										depth: r,
										next: o,
										prev: Object(En.g)(a)
									}
								})
							})
						}
						default:
							return e
				}
			};
			const Oa = {};
			var fa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z.b:
					case Z.c:
					case X.G: {
						const {
							comment: s,
							commentsPageKey: n,
							isChatSort: a
						} = t.payload;
						return !1 === a ? e : Object.assign(Object.assign({}, e), {
							[n]: s.id
						})
					}
					case Fe.b:
					case te.b: {
						const {
							commentLists: s,
							key: n,
							postId: a
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s[a] && s[a].head ? s[a].head.id : null
						})
					}
					default:
						return e
				}
			};
			const ja = {};
			var ya = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ja,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.d:
						case Fe.b:
						case Fe.c:
						case te.d: {
							const {
								key: s,
								postId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case X.G: {
							const {
								parentId: s,
								commentsPageKey: n
							} = t.payload;
							return e[n] ? e : Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						default:
							return e
					}
				},
				ha = Object(S.c)({
					api: sa,
					keyToChatCommentLinks: la,
					keyToCommentThreadLinkSets: pa,
					keyToHeadCommentId: fa,
					keyToPostId: ya,
					ads: zn
				}),
				ma = s("./src/reddit/actions/communityFlairs/constants.ts");
			const va = {};
			var _a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : va,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ma.a: {
							const {
								models: s,
								sortedKeys: n,
								subredditId: a
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[a]: {
									sortedKeys: n,
									models: s
								}
							})
						}
						default:
							return e
					}
				},
				Ea = s("./src/reddit/actions/contentGate.ts");
			const Ia = {};
			var wa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ia,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ea.a: {
						const {
							subredditName: s
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										goldSubreddit: !0
									}
								};
								return Y()(Object.assign({}, e), Object.assign({}, t))
							}
							return Object.assign(Object.assign({}, e), {
								[s]: {
									goldSubreddit: !0
								}
							})
						}
						return e
					}
					case Ea.b: {
						const {
							subredditDescription: s,
							subredditName: n
						} = t.payload;
						if (n) {
							if (e[n]) {
								const t = {
									[n]: {
										privateSubreddit: !0,
										subredditDescription: s
									}
								};
								return Y()(Object.assign({}, e), Object.assign({}, t))
							}
							return Object.assign(Object.assign({}, e), {
								[n]: {
									privateSubreddit: !0,
									subredditDescription: s
								}
							})
						}
						return e
					}
					case Ea.f: {
						const {
							subredditName: s,
							quarantineRequiresEmail: n,
							quarantineMessage: a,
							quarantineMessageHtml: r,
							quarantineMessageRTJson: c
						} = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: n,
								quarantineMessage: a,
								quarantineMessageHtml: r,
								quarantineMessageRTJson: c
							})
						}) : e
					}
					case Ea.h: {
						const {
							subredditName: s,
							banMessage: n
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										subredditBanned: !0,
										subredditBanMessage: n
									}
								};
								return Y()(Object.assign({}, e), Object.assign({}, t))
							}
							return Object.assign(Object.assign({}, e), {
								[s]: {
									subredditBanned: !0,
									subredditBanMessage: n
								}
							})
						}
						return e
					}
					case Ea.i: {
						const {
							subredditName: s
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										subredditBlockedForLegalReason: !0
									}
								};
								return Y()(Object.assign({}, e), Object.assign({}, t))
							}
							return Object.assign(Object.assign({}, e), {
								[s]: {
									subredditBlockedForLegalReason: !0
								}
							})
						}
						return e
					}
					case Ea.j: {
						const {
							subredditName: s
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										subredditDoesNotExist: !0
									}
								};
								return Y()(Object.assign({}, e), Object.assign({}, t))
							}
							return Object.assign(Object.assign({}, e), {
								[s]: {
									subredditDoesNotExist: !0
								}
							})
						}
						return e
					}
					case Ea.c:
					case Ea.d:
					case Ea.e: {
						const {
							profileName: s
						} = t.payload, n = He.Ub + s.toLocaleLowerCase(), a = e[n] || {}, r = {
							profileDeleted: t.type === Ea.d,
							profileSuspended: t.type === Ea.e,
							profileBlockedForLegalReason: t.type === Ea.c
						};
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, a), r)
						})
					}
					default:
						return e
				}
			};
			const Sa = {};
			var Ta = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.u:
						case Fe.b:
						case te.b:
							return Object.assign(Object.assign({}, e), t.payload.continueThreads);
						default:
							return e
					}
				},
				Ca = Object(S.c)({
					models: Ta
				}),
				Aa = s("./src/reddit/actions/postCollection/constants.ts");
			var Pa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.c:
					case Aa.d:
					case Aa.c:
					case Aa.s:
					case Aa.r:
						return null;
					case Aa.b:
					case Aa.n:
						return t.payload;
					default:
						return e
				}
			};
			var Da = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Aa.c:
						case Aa.r:
							return !0;
						case Aa.d:
						case Aa.b:
						case Aa.s:
						case Aa.n:
							return !1;
						default:
							return e
					}
				},
				Ra = Object(S.c)({
					error: Pa,
					pending: Da
				}),
				ka = Object(S.c)({
					createOrUpdate: Ra
				}),
				Na = s("./src/reddit/actions/postDraft.ts");
			const La = {};
			var xa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : La,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Na.c:
					case Na.b: {
						const {
							draftId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Na.a: {
						const {
							apiError: s,
							draftId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					default:
						return e
				}
			};
			const Ma = {};
			var Ua = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ma,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Na.b: {
							const {
								draftId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Na.c:
						case Na.a: {
							const {
								draftId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Fa = Object(S.c)({
					error: xa,
					pending: Ua
				});
			var Ga = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Na.d:
						return t.payload;
					case Na.f:
					case Na.e:
						return null;
					default:
						return e
				}
			};
			var Ba = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Na.f:
							return !0;
						case Na.e:
						case Na.d:
							return !1;
						default:
							return e
					}
				},
				qa = Object(S.c)({
					error: Ga,
					pending: Ba
				});
			const Ka = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var Va = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ka,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Na.l:
					case Na.j:
						return Ka;
					case Na.i: {
						const e = t.payload;
						return Object.assign(Object.assign({}, Ka), {
							apiError: e
						})
					}
					case Na.m: {
						const e = t.payload;
						return Object.assign(Object.assign({}, Ka), {
							validationError: e
						})
					}
					case Na.k: {
						const e = t.payload;
						return Object.assign(Object.assign({}, Ka), {
							submitValidationError: e
						})
					}
					case Na.h:
						return Object.assign(Object.assign({}, Ka), {
							needsCaptcha: !0
						});
					default:
						return e
				}
			};
			var Ha = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Na.j:
							return !0;
						case Na.l:
						case Na.i:
						case Na.m:
						case Na.k:
						case Na.h:
							return !1;
						default:
							return e
					}
				},
				Wa = Object(S.c)({
					error: Va,
					pending: Ha
				}),
				Qa = Object(S.c)({
					deleteDraft: Fa,
					listing: qa,
					save: Wa
				});
			const Ja = {};
			var za = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ja,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.G: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case b.s: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Ya = Object(S.c)({
					pending: za
				});
			var Xa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.x:
					case b.y:
					case b.d:
					case b.e:
					case b.f:
					case b.k:
					case b.m:
					case b.q:
					case b.O:
						return null;
					case b.w:
						return t.payload;
					default:
						return e
				}
			};
			var Za = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.x:
							return !0;
						case b.y:
						case b.w:
							return !1;
						default:
							return e
					}
				},
				$a = Object(S.c)({
					error: Xa,
					pending: Za
				}),
				er = Object(S.c)({
					converting: Ya,
					mediaUpload: $a
				});
			const tr = {};
			var sr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Be.b:
					case Be.c: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Be.a: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const nr = {};
			var ar = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Be.c: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !1
						})
					}
					case Be.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					default:
						return e
				}
			};
			const rr = {};
			var cr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Be.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Be.b:
						case Be.a: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				ir = Object(S.c)({
					error: sr,
					fetched: ar,
					pending: cr
				}),
				or = s("./src/reddit/actions/scheduledPosts/constants.ts");
			const dr = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var lr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.P:
					case or.h:
					case b.A:
					case b.c:
					case b.d:
					case b.e:
					case b.f:
					case b.k:
					case b.m:
					case b.q:
					case b.O:
					case b.E:
						return dr;
					case b.i: {
						const {
							isContentChanged: s
						} = t.payload;
						return s ? dr : e
					}
					case b.r: {
						const e = t.payload;
						return Object.assign(Object.assign({}, dr), {
							apiError: e
						})
					}
					case b.bb: {
						const e = t.payload;
						return Object.assign(Object.assign({}, dr), {
							validationError: e
						})
					}
					case b.K:
					case b.J: {
						const e = t.payload;
						return Object.assign(Object.assign({}, dr), {
							submitValidationError: e
						})
					}
					case b.a:
						return Object.assign(Object.assign({}, dr), {
							needsCaptcha: !0
						});
					case b.C:
						return Object.assign(Object.assign({}, dr), {
							pollError: t.payload
						});
					default:
						return e
				}
			};
			var ur = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.A:
							return !0;
						case b.P:
						case or.h:
						case b.r:
						case b.bb:
						case b.J:
						case b.K:
						case b.C:
						case b.a:
							return !1;
						default:
							return e
					}
				},
				br = Object(S.c)({
					error: lr,
					pending: ur
				});
			var gr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.B:
					case b.H:
						return null;
					case b.p:
						return t.payload;
					default:
						return e
				}
			};
			var pr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.B:
							return !0;
						case b.p:
						case b.o:
							return !1;
						default:
							return e
					}
				},
				Or = Object(S.c)({
					error: gr,
					pending: pr
				}),
				fr = Object(S.c)({
					submit: br,
					update: Or
				});
			var jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.O:
					case b.M:
					case b.N:
						return null;
					default:
						return e
				}
			};
			var yr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.N:
							return !0;
						case b.M:
						case b.O:
							return !1;
						default:
							return e
					}
				},
				hr = Object(S.c)({
					error: jr,
					pending: yr
				}),
				mr = Object(S.c)({
					change: hr
				}),
				vr = Object(S.c)({
					collection: ka,
					draft: Qa,
					editor: er,
					page: ir,
					post: fr,
					subreddit: mr
				}),
				_r = s("./src/reddit/actions/pages/postDraft.ts");
			const Er = {};
			var Ir = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Er,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Na.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Er
					}
					case Na.c: {
						const s = e,
							{
								draftId: n
							} = t.payload;
						return yn()(s, n)
					}
					case b.P: {
						const {
							draftId: s
						} = t.payload;
						return s ? yn()(e, s) : e
					}
					case _r.a: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			const wr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Sr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				Tr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var Cr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.d:
							return t.payload || "";
						case b.E:
							return "";
						case u.a: {
							if (wr(t) !== He.Bb.POST_CREATION) return "";
							const s = Sr(t);
							return s && s.url ? s.url || "" : e
						}
						case Na.g: {
							const e = t.payload;
							return e.kind === rn.b.Link && e.body || ""
						}
						case or.b:
						case or.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Ar = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/reddit/models/ScheduledPost/index.ts"));
			const Pr = e => e ? e.replace(/\+/g, " ") : "";
			var Dr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.e:
						return t.payload || "";
					case b.E:
					case b.I:
						return "";
					case b.Q:
						return t.payload.editorMode === an.h.MARKDOWN ? t.payload.content || "" : e;
					case u.a: {
						if (wr(t) !== He.Bb.POST_CREATION) return "";
						const s = Sr(t);
						return s && s.text ? Pr(s.text) : e
					}
					case Na.g: {
						const e = t.payload;
						return e.kind === rn.b.Markdown && e.body || ""
					}
					case or.b:
					case or.n: {
						const e = t.payload;
						return e.contentType === Ar.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Rr = {
				items: [],
				selectedKey: null
			};
			var kr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.f:
							return t.payload || Rr;
						case b.E:
							return Rr;
						case u.a:
							return wr(t) !== He.Bb.POST_CREATION ? Rr : e;
						case Na.g:
							return Rr;
						case or.b:
						case or.n:
							return Rr;
						default:
							return e
					}
				},
				Nr = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Lr = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				xr = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Mr = Nr.a.createInitial;
			var Ur = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mr(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.i: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case b.E:
							return Nr.a.createInitial();
						case b.Q: {
							const s = t.payload;
							return s.editorMode === an.h.RICH_TEXT && s.editorKey === an.g.POST_CREATION ? Nr.a.createInitial(s.content) : e
						}
						case u.a:
							return wr(t) !== He.Bb.POST_CREATION ? Nr.a.createInitial() : e;
						case Na.g: {
							const e = t.payload;
							return e.kind === rn.b.RichText ? Nr.a.createInitial(e.body) : Nr.a.createInitial()
						}
						case or.b:
						case or.n: {
							const e = t.payload,
								s = Object(Lr.c)(e.mediaAssets);
							return Nr.a.createInitial(e.contentType === Ar.a.RTJSON ? Object(xr.b)(e.body) : void 0, s || void 0)
						}
						default:
							return e
					}
				},
				Fr = Object(S.c)({
					link: Cr,
					markdown: Dr,
					media: kr,
					rte: Ur
				});
			var Gr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.b:
							return t.payload || null;
						case b.E:
						case Na.g:
						case or.b:
						case or.n:
						case b.O:
							return null;
						case u.a:
							return wr(t) === He.Bb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				Br = s("./src/reddit/selectors/scheduledPosts/index.ts");
			var qr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.c:
						return t.payload || null;
					case or.b:
					case or.n: {
						const e = t.payload;
						return Object(Br.n)({
							scheduledPost: e
						}) || null
					}
					case b.E:
						return null;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION ? e : null;
					case Na.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var Kr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.t:
						return t.payload.type || null;
					case or.b:
					case or.n:
					case b.k:
					case b.E:
					case u.a:
						return null;
					default:
						return e
				}
			};
			var Vr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.S:
						return t.payload || !1;
					case or.b:
					case or.n:
						return "CHAT" === t.payload.discussionType;
					case b.E:
						return !1;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					case Na.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var Hr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.T:
						return t.payload || !1;
					case b.E:
						return !1;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					case or.b:
					case or.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var Wr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.V:
						return t.payload || !1;
					case b.E:
						return !1;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					case Na.g:
						return t.payload.isNSFW || !1;
					case or.b:
					case or.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var Qr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.W:
						return t.payload || !1;
					case b.E:
						return !1;
					case b.O: {
						const {
							name: s
						} = t.payload;
						return !!s && e
					}
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					case Na.g:
						return t.payload.isOriginalContent || !1;
					case or.b:
					case or.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var Jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.X:
						return t.payload || !1;
					case or.b:
					case or.n:
						return !!t.payload.poll;
					case b.E:
						return !1;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					default:
						return e
				}
			};
			var zr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case or.b:
					case or.n:
					case b.E:
						return !1;
					case Na.n:
						return t.payload;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					case Na.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var Yr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.Y:
						return t.payload || !1;
					case b.E:
						return !1;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					case Na.g:
						return t.payload.isSpoiler || !1;
					case or.b:
					case or.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var Xr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.a:
					case b.k:
					case b.t:
					case b.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var Zr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.a:
					case b.k:
					case b.t:
					case b.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var $r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.N:
						case b.O:
							return t.payload;
						case b.M:
						case u.a:
							return null;
						default:
							return e
					}
				},
				ec = s("./src/reddit/actions/polls.ts");
			var tc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ec.a:
							return Object.assign({}, t.payload);
						case or.b:
						case or.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case b.E:
							return null;
						case u.a:
							return wr(t) !== He.Bb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				sc = s("./src/reddit/helpers/scheduledPosts/index.ts");
			var nc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.g:
						return t.payload || null;
					case b.E:
					case Na.g:
					case b.O:
						return null;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION ? e : null;
					case or.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case or.b: {
						const e = t.payload;
						return Object.assign({}, Object(sc.h)(e))
					}
					default:
						return e
				}
			};
			var ac = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: s,
					payload: n
				} = t;
				switch (s) {
					case b.Z:
						return n || !1;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					case or.b:
					case or.n:
					case Na.g:
						return !1;
					default:
						return e
				}
			};
			var rc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.h:
						return t.payload || "";
					case u.a:
						return wr(t) !== He.Bb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var cc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.a:
						return wr(t) !== He.Bb.POST_CREATION ? null : e;
					case b.E:
						return null;
					case or.b:
					case or.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var ic = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.E:
						return !0;
					case b.ab:
						return t.payload;
					case u.a:
						return wr(t) !== He.Bb.POST_CREATION || e;
					case Na.g:
						return t.payload.sendReplies;
					case or.b:
					case or.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var oc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: s,
					payload: n
				} = t;
				switch (s) {
					case b.j:
						return n || null;
					case b.E:
					case Na.g:
					case b.O:
						return null;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION ? e : null;
					case or.b:
					case or.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const dc = He.Jb.POST;
			var lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.E:
						return dc;
					case b.u:
						return He.Jb.CROSSPOST;
					case b.k:
						return t.payload.submissionType || dc;
					case u.a: {
						if (wr(t) !== He.Bb.POST_CREATION) return dc;
						const s = Sr(t);
						if (!s) return e;
						const {
							title: n = "",
							url: a,
							text: r = "",
							media: c = !1,
							selftext: i = !1
						} = s, o = n && !r && !i;
						return c ? He.Jb.MEDIA : void 0 !== a || o ? He.Jb.LINK_ONLY : r || i ? He.Jb.POST : e
					}
					case Na.g: {
						const e = t.payload;
						return rn.a[e.kind]
					}
					case or.b:
					case or.n: {
						const e = t.payload;
						return e.poll ? He.Jb.POLL : e.url ? He.Jb.LINK_ONLY : He.Jb.POST
					}
					default:
						return e
				}
			};
			var uc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					const {
						type: s,
						payload: n
					} = t;
					switch (s) {
						case b.l:
							return n || null;
						case b.E:
						case Na.g:
						case b.O:
							return null;
						case u.a:
							return wr(t) === He.Bb.POST_CREATION ? e : null;
						case or.b:
						case or.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				bc = s("./src/reddit/models/Poll/index.ts");
			const gc = e => e ? e.replace(/\+/g, " ") : "",
				pc = e => "Should ".concat(e || "username", " become the top moderator?"),
				Oc = e => e ? "Should we spin-off to r/".concat(e, "?") : "Should we spin-off to a new community?";
			var fc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.u:
							return t.payload.postTitle || "";
						case b.m:
							return t.payload || "";
						case b.D: {
							const {
								title: s
							} = t.payload;
							return e || (s || "")
						}
						case b.E:
							return "";
						case u.a: {
							if (wr(t) !== He.Bb.POST_CREATION) return "";
							const s = Sr(t);
							return s && s.title ? gc(s.title) : e
						}
						case Na.g:
							return t.payload.title;
						case b.t: {
							const {
								oldType: s,
								type: n
							} = t.payload;
							return n === bc.a.ReplaceTopMod ? pc("") : n === bc.a.Spinoff ? Oc("") : s === bc.a.ReplaceTopMod || s === bc.a.Spinoff ? "" : e
						}
						case d.c: {
							const {
								username: e
							} = t.payload;
							return pc(e)
						}
						case d.b: {
							const {
								subredditName: e
							} = t.payload;
							return Oc(e)
						}
						case b.k: {
							const {
								extra: s
							} = t.payload;
							return !s || s.govType !== bc.a.ReplaceTopMod && s.govType !== bc.a.Spinoff ? e : ""
						}
						case or.b:
						case or.n:
							return t.payload.title;
						default:
							return e
					}
				},
				jc = Object(S.c)({
					body: Fr,
					eventSchedule: Gr,
					flair: qr,
					govType: Kr,
					isChatPost: Vr,
					isContestMode: Hr,
					isNSFW: Wr,
					isOC: Qr,
					isPoll: Jr,
					isPublicLink: zr,
					isSpoiler: Yr,
					newSubreddit: Xr,
					newTopMod: Zr,
					nextSubreddit: $r,
					polls: tc,
					postSchedule: nc,
					postToTwitter: ac,
					recaptcha: rc,
					scheduledPostId: cc,
					sendReplies: ic,
					stickyPosition: oc,
					submissionType: lc,
					suggestedSort: uc,
					title: fc
				});
			const yc = e => e ? e.replace(/\+/g, " ") : "";
			var hc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.a: {
						if (wr(t) !== He.Bb.POST_CREATION) return null;
						const s = Sr(t);
						return s && s.text && yc(s.text) ? an.h.MARKDOWN : e
					}
					case b.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case b.I:
						return null;
					case b.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case or.b:
					case or.n:
						return t.payload.contentType === Ar.a.RTJSON ? an.h.RICH_TEXT : an.h.MARKDOWN;
					default:
						return e
				}
			};
			const mc = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				vc = (e, t) => {
					const s = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(an.u)(t)
					});
					if (!s.length) return e;
					const n = s.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return Object.assign(Object.assign({}, e), n)
				};
			var _c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.c:
					case b.d:
					case b.e:
						return e[He.nb.BODY] ? Object.assign(Object.assign({}, e), {
							[He.nb.BODY]: []
						}) : e;
					case b.i: {
						const {
							isContentChanged: s
						} = t.payload;
						return e[He.nb.BODY] && s ? Object.assign(Object.assign({}, e), {
							[He.nb.BODY]: []
						}) : e
					}
					case b.m:
						return e[He.nb.TITLE] ? Object.assign(Object.assign({}, e), {
							[He.nb.TITLE]: []
						}) : e;
					case b.L: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: []
						})
					}
					case b.q: {
						const s = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[s]: []
						}) : mc
					}
					case b.K:
					case b.J: {
						const s = t.payload;
						return vc(e, s)
					}
					case u.a:
						return wr(t) !== He.Bb.POST_CREATION ? mc : e;
					default:
						return e
				}
			};
			var Ec = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.b:
					case b.c:
					case b.d:
					case b.e:
					case b.f:
					case b.g:
					case b.j:
					case b.l:
					case b.m:
					case b.k:
					case b.T:
					case b.V:
					case b.W:
					case b.Y:
					case Na.n:
					case b.ab:
						return !0;
					case b.i: {
						const {
							isContentChanged: s
						} = t.payload;
						return !!s || e
					}
					case b.P:
					case or.h:
						return !1;
					case b.R:
						return t.payload;
					case u.a:
						return wr(t) === He.Bb.POST_CREATION && e;
					case b.E:
					case Na.l:
					case Na.g:
						return !1;
					default:
						return e
				}
			};
			var Ic = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.z:
						return e === t.payload ? null : t.payload || null;
					case n.c:
						return t.payload ? null : e;
					case u.a:
						return wr(t) !== He.Bb.POST_CREATION ? null : e;
					default:
						return e
				}
			};
			const wc = an.q.Post;
			var Sc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.A:
							return an.q.Post;
						case b.F:
							return t.payload;
						case Na.j:
							return an.q.Draft;
						case u.a:
							return wr(t) !== He.Bb.POST_CREATION ? wc : e;
						default:
							return e
					}
				},
				Tc = Object(S.c)({
					editorMode: hc,
					fieldValidation: _c,
					isChanged: Ec,
					modalId: Ic,
					submitMode: Sc
				});
			var Cc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.H:
						return t.payload.editorMode === an.h.MARKDOWN ? t.payload.postContent || "" : e;
					case b.I:
						return "";
					case b.Q:
						return t.payload.editorMode === an.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Ac = Nr.a.createInitial;
			var Pc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ac(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.I:
							return Nr.a.createInitial();
						case b.H: {
							const s = t.payload;
							return s.editorMode === an.h.RICH_TEXT && "object" == typeof s.postContent ? Nr.a.createInitial(s.postContent, s.mediaMetadata) : e
						}
						case b.Q: {
							const s = t.payload;
							return s.editorMode === an.h.RICH_TEXT && s.editorKey === an.g.POST_EDITING ? Nr.a.createInitial(s.content) : e
						}
						default:
							return e
					}
				},
				Dc = Object(S.c)({
					markdown: Cc,
					rte: Pc
				});
			var Rc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case b.I:
							return null;
						default:
							return e
					}
				},
				kc = Object(S.c)({
					draft: Dc,
					postId: Rc
				}),
				Nc = Object(S.c)({
					api: vr,
					drafts: Ir,
					formData: jc,
					formState: Tc,
					postEditing: kc
				}),
				Lc = s("./src/reddit/actions/dashboard.ts");
			const xc = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var Mc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lc.a:
						return Object.assign(Object.assign({}, e), {
							selectedComponent: t.payload
						});
					case Lc.c: {
						const s = t.payload,
							n = e.subredditLoaded[s];
						return Object.assign(Object.assign({}, e), {
							subredditPending: !n,
							subredditLoaded: Object.assign(Object.assign({}, e.subredditLoaded), {
								[s]: n || !1
							})
						})
					}
					case Lc.b: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							subredditPending: !1,
							subredditLoaded: Object.assign(Object.assign({}, e.subredditLoaded), {
								[s]: !0
							})
						})
					}
					default:
						return e
				}
			};
			var Uc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xe.b:
					case xe.c:
						return null;
					case xe.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var Fc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xe.c:
						return !1;
					case xe.b:
						return !0;
					default:
						return e
				}
			};
			var Gc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xe.c:
							return !0;
						case xe.b:
						case xe.a:
							return !1;
						default:
							return e
					}
				},
				Bc = Object(S.c)({
					error: Uc,
					loaded: Fc,
					pending: Gc
				}),
				qc = Object(S.c)({
					list: Bc
				}),
				Kc = s("./node_modules/lodash/isEmpty.js"),
				Vc = s.n(Kc);
			const Hc = {};
			var Wc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xe.b: {
							const {
								discoveryUnits: s
							} = t.payload;
							return Vc()(s) ? e : Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				Qc = s("./node_modules/lodash/forOwn.js"),
				Jc = s.n(Qc),
				zc = s("./src/reddit/helpers/name/index.ts");
			const Yc = {};
			var Xc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xe.b: {
							const {
								discoveryUnits: s
							} = t.payload;
							if (Vc()(s)) return e;
							const n = {};
							return Jc()(s, e => {
								n[Object(zc.f)(e.unitName)] = e.id
							}), Object.assign(Object.assign({}, e), n)
						}
						default:
							return e
					}
				},
				Zc = Object(S.c)({
					api: qc,
					models: Wc,
					nameToId: Xc
				}),
				$c = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const ei = [];
			var ti = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $c.a: {
							const {
								subredditId: s
							} = t.payload;
							return [...e, s]
						}
						default:
							return e
					}
				},
				si = s("./src/reddit/actions/economics/banners/constants.ts");
			const ni = {
				dismissedBanners: {}
			};
			var ai = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ni,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case si.c: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								dismissedBanners: Object.assign(Object.assign({}, e.dismissedBanners), {
									[s]: Object.assign(Object.assign({}, e.dismissedBanners[s]), {
										pending: !0
									})
								})
							})
						}
						case si.d: {
							const {
								subredditId: s,
								data: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								dismissedBanners: Object.assign(Object.assign({}, e.dismissedBanners), {
									[s]: Object.assign(Object.assign({}, e.dismissedBanners[s]), {
										pending: !1,
										data: n
									})
								})
							})
						}
						case si.a:
						case si.b: {
							const {
								subredditId: s,
								bannerType: n
							} = t.payload, a = e.dismissedBanners[s] || {}, r = t.type === si.a;
							return Object.assign(Object.assign({}, e), {
								dismissedBanners: Object.assign(Object.assign({}, e.dismissedBanners), {
									[s]: Object.assign(Object.assign({}, a), {
										data: Object.assign(Object.assign({}, a.data), {
											[n]: r
										})
									})
								})
							})
						}
						default:
							return e
					}
				},
				ri = s("./src/reddit/actions/economics/claims/constants.ts");
			const ci = {};
			var ii = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ci,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ri.b:
						case ri.a:
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									isClaiming: t.type === ri.b
								})
							});
						default:
							return e
					}
				},
				oi = s("./src/reddit/models/Badge/managementPage.ts");
			const di = {
				badgeType: oi.a.Cosmetic,
				view: oi.c.Gallery
			};
			var li = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : di,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c: {
						const {
							badge: s,
							initialView: n
						} = t.payload;
						return s || n ? Object.assign(Object.assign({}, e), {
							badgeType: s ? Object(oi.d)(s.placement) : e.badgeType,
							view: n
						}) : e
					}
					case o.b: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							badgeType: s
						})
					}
					case o.d: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							view: s
						})
					}
					case n.b:
						return di;
					default:
						return e
				}
			};
			var ui = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c:
						return {
							badge: t.payload.badge
						};
					case n.b:
						return null;
					case o.j:
						return t.payload || null;
					default:
						return e
				}
			};
			const bi = {};
			var gi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.e: {
						const {
							emotes: s,
							emoteCollections: n
						} = t.payload.products, a = {};
						return s.forEach(e => {
							const t = e.extra && e.extra.assets,
								s = Object.keys(e.collections || {})[0] || e.title,
								r = n[s];
							a[s] || (a[s] = {
								emotes: {},
								position: r ? r.position : 0,
								title: r ? r.title : e.title
							}), t && Object.keys(t).forEach(n => {
								const r = t[n];
								a[s].emotes[n] = {
									id: n,
									emoji: r.emoji,
									extra: {
										rtDescription: e.extra && e.extra.rtDescription
									},
									fullId: "emote|".concat(e.id, "|").concat(n),
									imageType: r.emoji.type,
									sticker: r.sticker
								}
							})
						}), Object.assign(Object.assign({}, e), {
							[t.payload.subredditId]: Object.keys(a).map(e => a[e]).sort((e, t) => e.position - t.position)
						})
					}
					case Oe.kb: {
						const {
							powerups: s,
							subredditId: n
						} = t.payload;
						if (s && s.mediaPacks) {
							const t = s.mediaPacks.map(e => ({
								title: e.name,
								emotes: e.emotes.reduce((t, s) => Object.assign(Object.assign({}, t), {
									[s.name]: {
										id: s.name,
										fullId: "emote|".concat(e.id, "|").concat(s.name),
										imageType: s.emojiIcon.mimeType,
										emoji: {
											x: s.emojiIcon.x,
											y: s.emojiIcon.y,
											path: s.emojiIcon.url,
											type: s.emojiIcon.mimeType
										},
										sticker: {
											x: s.stickerIcon.x,
											y: s.stickerIcon.y,
											path: s.stickerIcon.url,
											type: s.stickerIcon.mimeType
										}
									}
								}), {})
							}));
							return Object.assign(Object.assign({}, e), {
								[n]: e[n] ? [...e[n], ...t] : t
							})
						}
						return e
					}
					default:
						return e
				}
			};
			const pi = {};
			var Oi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.e: {
							const s = t.payload.products.giphy.length > 0;
							return Object.assign(Object.assign({}, e), {
								[t.payload.subredditId]: {
									hasGifProduct: s
								}
							})
						}
						default:
							return e
					}
				},
				fi = s("./src/reddit/actions/economics/me/constants.ts");
			const ji = {
				fetched: !1,
				data: {}
			};
			var yi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fi.a:
							return {
								fetched: !0, data: t.payload
							};
						case o.h: {
							const {
								subredditId: s
							} = t.payload;
							return e.data.specialMemberships && e.data.specialMemberships[s] ? Object.assign(Object.assign({}, e), {
								data: Object.assign(Object.assign({}, e.data), {
									specialMemberships: Object.assign(Object.assign({}, e.data.specialMemberships), {
										[s]: Object.assign(Object.assign({}, e.data[s]), {
											settings: {
												renew: !1
											}
										})
									})
								})
							}) : e
						}
						default:
							return e
					}
				},
				hi = s("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const mi = {
				fetched: !1,
				data: null
			};
			var vi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fi.b:
							return {
								fetched: !0, data: e.data
							};
						case fi.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				_i = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Ei = Object(S.c)({
					banners: ai,
					claims: ii,
					currentBadgeManagementScreen: li,
					currentModalArgs: ui,
					emotes: gi,
					gifs: Oi,
					me: yi,
					paymentSystems: hi.b,
					pointsCopy: vi,
					subredditPremium: _i.b
				}),
				Ii = s("./src/reddit/actions/emoji.ts"),
				wi = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Si = {};
			var Ti = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Si,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ii.h: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Ii.g: {
							const {
								subredditId: s
							} = t.payload, n = e, a = s;
							n[a];
							return wi(n, ["symbol" == typeof a ? a : a + ""])
						}
						case Ii.f: {
							const {
								subredditId: s
							} = t.payload, n = e, a = s;
							n[a];
							return wi(n, ["symbol" == typeof a ? a : a + ""])
						}
						default:
							return e
					}
				},
				Ci = Object(S.c)({
					pending: Ti
				}),
				Ai = Object(S.c)({
					list: Ci
				}),
				Pi = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Di = {};
			var Ri = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Di,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ii.f:
						case Ii.c:
							return e;
						case Ii.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Ii.d: {
							const {
								emojiName: s,
								subredditId: n
							} = t.payload, a = e[n].emojis, r = s, c = (a[r], Pi(a, ["symbol" == typeof r ? r : r + ""]));
							return Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign({}, e[n]), {
									emojis: c
								})
							})
						}
						case Ii.i: {
							const s = t.payload,
								n = e[s.subredditId].emojis,
								a = {
									url: s.url,
									name: s.name,
									userFlairAllowed: s.userFlairAllowed,
									postFlairAllowed: s.postFlairAllowed,
									modFlairOnly: s.modFlairOnly
								},
								r = Object.assign(Object.assign({}, n), {
									[s.name]: a
								});
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: Object.assign(Object.assign({}, e[s.subredditId]), {
									emojis: r
								})
							})
						}
						case Ii.e: {
							const {
								emojiName: s,
								isSnoomoji: n,
								settings: a,
								subredditId: r
							} = t.payload, c = n ? "snoomojis" : "emojis", i = e[r][c], o = Object.assign(Object.assign({}, i), {
								[s]: Object.assign(Object.assign({}, i[s]), a)
							});
							return Object.assign(Object.assign({}, e), {
								[r]: Object.assign(Object.assign({}, e[r]), {
									[c]: o
								})
							})
						}
						default:
							return e
					}
				},
				ki = Object(S.c)({
					api: Ai,
					models: Ri
				}),
				Ni = s("./src/reddit/actions/experiments.ts");
			const Li = /^experiment_(.*)$/i,
				xi = e => {
					const t = e.match(Li);
					if (null !== t) return t[1]
				},
				Mi = {};
			var Ui = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.a: {
							const s = Sr(t);
							if (!s) return e;
							const n = {};
							for (const e in s) {
								const t = xi(e);
								t && (n[t.toLowerCase()] = s[e] || "")
							}
							return Vc()(n) ? e : Object.assign(Object.assign({}, e), n)
						}
						case Ni.b: {
							const {
								experimentName: s,
								override: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[s]: n || ""
							}) : e
						}
						default:
							return e
					}
				},
				Fi = s("./src/reddit/actions/externalAccount.ts");
			const Gi = {};
			var Bi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fi.e:
					case Fi.f: {
						const {
							provider: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Fi.d: {
						const {
							provider: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const qi = {};
			var Ki = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fi.e: {
							const {
								provider: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Fi.f:
						case Fi.d: {
							const {
								provider: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Vi = Object(S.c)({
					error: Bi,
					pending: Ki
				});
			const Hi = {};
			var Wi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fi.l:
					case Fi.k: {
						const {
							provider: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Fi.j: {
						const {
							provider: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Qi = {};
			var Ji = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fi.b: {
							const {
								provider: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Fi.c:
						case Fi.a: {
							const {
								provider: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				zi = Object(S.c)({
					error: Wi,
					pending: Ji
				});
			const Yi = {};
			var Xi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fi.i:
					case Fi.h: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Fi.g: {
						const {
							subredditName: s,
							apiError: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Zi = {};
			var $i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fi.h: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					default:
						return e
				}
			};
			const eo = {};
			var to = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fi.i: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Fi.h:
						case Fi.g: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				so = Object(S.c)({
					error: Xi,
					fetched: $i,
					pending: to
				});
			const no = {};
			var ao = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : no,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fi.l:
					case Fi.k: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Fi.j: {
						const {
							username: s,
							apiError: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const ro = {};
			var co = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ro,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fi.l: {
							const {
								username: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Fi.k:
						case Fi.j: {
							const {
								username: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				io = Object(S.c)({
					error: ao,
					pending: co
				}),
				oo = Object(S.c)({
					connect: Vi,
					disconnect: zi,
					user: io,
					subreddit: so
				});
			const lo = {};
			var uo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fi.h: {
						const {
							subredditName: s,
							accountsData: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const bo = {};
			var go = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fi.k: {
							const {
								username: s,
								accountsData: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case Fi.c: {
							const {
								username: s,
								provider: n
							} = t.payload, a = e[s];
							return a && a[n] ? Object.assign(Object.assign({}, e), {
								[s]: yn()(a, n)
							}) : e
						}
						default:
							return e
					}
				},
				po = Object(S.c)({
					api: oo,
					user: go,
					subreddit: uo
				}),
				Oo = s("./src/reddit/featureFlags/index.ts");
			const fo = new Set(["0", "disabled", "false", "off", ""]);
			var jo = e => !fo.has(e.toLowerCase());
			const yo = Oo.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				ho = Oo.a.reduce((e, t) => (e[t] = null, e), {});
			var mo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ho,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.a: {
							const s = Sr(t);
							if (void 0 !== s) {
								const t = {};
								for (const e in s) {
									const n = Object(Oo.g)(e);
									if (n) {
										const a = yo[n.toLowerCase()];
										if (a) {
											const n = s[e],
												r = "string" != typeof n || jo(n);
											t[a] = r
										}
									}
								}
								if (Object.keys(t).length > 0) return Object.assign(Object.assign({}, e), t)
							}
							return e
						}
						case Oo.b: {
							const {
								featureName: s,
								currentValue: n
							} = t.payload;
							return n === e[s] ? e : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case Oo.c: {
							const {
								featureName: s,
								currentValue: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !n
							})
						}
						default:
							return e
					}
				},
				vo = Object(S.c)({
					overrides: mo
				});
			var _o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.g:
					case $.i:
						return null;
					case $.f:
						return t.payload;
					default:
						return e
				}
			};
			var Eo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.i:
							return !0;
						case $.g:
						case $.f:
							return !1;
						default:
							return e
					}
				},
				Io = Object(S.c)({
					error: _o,
					pending: Eo
				});
			const wo = {};
			var So = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.g:
					case $.k: {
						const {
							subredditId: s,
							flairedUsers: n
						} = t.payload;
						return Re()(Object.assign({}, e), {
							[s]: n
						})
					}
					case $.c: {
						const {
							subredditId: s,
							userName: n
						} = t.payload, a = yn()(e[s], n);
						return Object.assign(Object.assign({}, e), {
							[s]: a
						})
					}
					case $.a:
					case $.b:
					case $.h:
						const {
							subredditId: s, userName: n, applied: a
						} = t.payload;
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								[n]: a
							})
						}) : e;
					default:
						return e
				}
			};
			const To = {};
			var Co = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : To,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.g: {
						const {
							key: s,
							pageInfo: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			var Ao = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.l:
					case $.k:
						return null;
					case $.j:
						return t.payload;
					default:
						return e
				}
			};
			var Po = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.l:
							return !0;
						case $.k:
						case $.j:
							return !1;
						default:
							return e
					}
				},
				Do = Object(S.c)({
					error: Ao,
					pending: Po
				});
			var Ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case $.c: {
							const {
								userName: s
							} = t.payload;
							return e === s ? null : e
						}
						default:
							return e
					}
				},
				ko = Object(S.c)({
					api: Do,
					result: Ro
				});
			const No = {};
			var Lo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : No,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.g: {
							const {
								key: s,
								userOrder: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case $.a: {
							const {
								key: s,
								userName: n
							} = t.payload;
							if (!s) return e;
							if (!e[s].includes(n)) {
								const t = [...e[s], n];
								return Object.assign(Object.assign({}, e), {
									[s]: t
								})
							}
							return e
						}
						case $.c: {
							const {
								userName: s
							} = t.payload, n = {};
							for (const t in e) n[t] = e[t].filter(e => e !== s);
							return n
						}
						default:
							return e
					}
				},
				xo = Object(S.c)({
					api: Io,
					models: So,
					pageInfo: Co,
					search: ko,
					userOrder: Lo
				}),
				Mo = s("./src/reddit/actions/focusedVerticals/constants.ts");
			const Uo = {
				focusedVerticalGqlError: null
			};
			var Fo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mo.h:
					case Mo.g:
					case Mo.c:
						return Object.assign(Object.assign({}, e), {
							focusedVerticalGqlError: null
						});
					case Mo.e:
						return Object.assign(Object.assign({}, e), {
							focusedVerticalGqlError: t.payload
						});
					default:
						return e
				}
			};
			const Go = {
				focusedVerticalGqlPending: !1
			};
			var Bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Go,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mo.h:
							return Object.assign(Object.assign({}, e), {
								focusedVerticalGqlPending: !0
							});
						case Mo.e:
						case Mo.g:
						case Mo.c:
							return Object.assign(Object.assign({}, e), {
								focusedVerticalGqlPending: !1
							});
						default:
							return e
					}
				},
				qo = Object(S.c)({
					error: Fo,
					pending: Bo
				});
			var Ko = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mo.g:
					case Mo.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Vo = {
				dismissed: !0
			};
			var Ho = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mo.j:
						return {
							dismissed: !1
						};
					case Mo.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Wo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mo.g:
					case Mo.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Qo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mo.g:
					case Mo.c:
					case Mo.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Jo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mo.g:
						case Mo.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				zo = Object(S.c)({
					api: qo,
					components: Ho,
					interactedSubredditIds: Wo,
					recommendedSubredditIds: Jo,
					category: Ko,
					lastLoadedEnv: Qo
				});
			Object(Ve.a)("FONTS_FONT_FILES_PARSED");
			const Yo = [];
			var Xo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Zo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.q:
						return t.payload;
					case Oe.f:
					case u.a:
					case Oe.M:
					case Oe.t:
						return null;
					default:
						return e
				}
			};
			var $o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.f:
					case u.a:
					case Oe.t:
					case Oe.q:
						return !1;
					case Oe.r:
						return !0;
					default:
						return e
				}
			};
			var ed = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.r:
						case Oe.f:
						case u.a:
						case Oe.t:
						case Oe.q:
							return !1;
						case Oe.v:
							return !0;
						default:
							return e
					}
				},
				td = Object(S.c)({
					error: Zo,
					pending: $o,
					showLoader: ed
				});
			var sd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.N:
					case Oe.M: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case Oe.g:
					case Oe.f:
						return null;
					default:
						return e
				}
			};
			var nd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.u: {
						const {
							id: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var ad = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const s = t.payload;
				switch (t.type) {
					case Oe.L:
					case Oe.M:
						return s.thingId;
					case Oe.t:
					case u.a:
					case Oe.f:
						return null;
					default:
						return e
				}
			};
			var rd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.y:
						return t.payload;
					case Oe.x:
					case Oe.M:
						return null;
					default:
						return e
				}
			};
			var cd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.s:
						return t.payload;
					case Oe.M:
						return !1;
					default:
						return e
				}
			};
			var id = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.L:
						return !0;
					default:
						return e
				}
			};
			var od = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.w:
						return t.payload;
					case Oe.M:
						return "";
					default:
						return e
				}
			};
			const dd = Le.m;
			var ld = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.hb:
							return t.payload;
						case Oe.M: {
							const {
								award: e
							} = t.payload;
							return e || dd
						}
						default:
							return e
					}
				},
				ud = Object(S.c)({
					api: td,
					correlationId: sd,
					gildModalThingId: ad,
					isAnonymous: cd,
					isIframed: id,
					message: od,
					gildedThing: nd,
					giveAwardTooltipThingId: rd,
					selectedAward: ld
				});
			var bd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.z:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case Oe.g:
					case u.a:
					case Oe.N:
					case Oe.E:
						return null;
					default:
						return e
				}
			};
			var gd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.g:
						case u.a:
						case Oe.E:
						case Oe.z:
							return !1;
						case Oe.A:
							return !0;
						default:
							return e
					}
				},
				pd = Object(S.c)({
					error: bd,
					pending: gd
				});
			var Od = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.N: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case u.a:
						case Oe.g:
						case Oe.E:
							return "";
						default:
							return e
					}
				},
				fd = Object(S.c)({
					api: pd,
					givePremiumModalAccountName: Od
				}),
				jd = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			var yd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.b: {
						const {
							cardName: e
						} = t.payload;
						return e
					}
					case jd.x:
						return t.payload !== He.wb ? "" : e;
					case jd.c:
					case jd.d:
					case jd.e:
					case jd.f:
					case u.a:
						return "";
					default:
						return e
				}
			};
			var hd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.A: {
						const {
							error: s,
							elementType: n
						} = t.payload;
						return "cardCvc" === n ? s && s.message || "" : e
					}
					case jd.x:
						return t.payload !== He.wb ? "" : e;
					case jd.c:
					case jd.d:
					case jd.e:
					case jd.f:
					case u.a:
						return "";
					default:
						return e
				}
			};
			var md = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.A: {
						const {
							error: s,
							elementType: n
						} = t.payload;
						return "cardExpiry" === n ? s && s.message || "" : e
					}
					case jd.x:
						return t.payload !== He.wb ? "" : e;
					case jd.c:
					case jd.d:
					case jd.e:
					case jd.f:
					case u.a:
						return "";
					default:
						return e
				}
			};
			var vd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.A: {
						const {
							error: s,
							elementType: n
						} = t.payload;
						return "cardNumber" === n ? s && s.message || "" : e
					}
					case jd.x:
						return t.payload !== He.wb ? "" : e;
					case jd.c:
					case jd.d:
					case jd.e:
					case jd.f:
					case u.a:
						return "";
					default:
						return e
				}
			};
			var _d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.a:
						return t.payload.message || e;
					case jd.b:
						return "";
					case jd.x:
						return t.payload !== He.wb ? "" : e;
					case jd.c:
					case jd.d:
					case jd.e:
					case jd.f:
					case u.a:
						return "";
					default:
						return e
				}
			};
			var Ed = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.A: {
							const {
								error: s,
								elementType: n
							} = t.payload;
							return "postalCode" === n ? s && s.message || "" : e
						}
						case jd.x:
							return t.payload !== He.wb ? "" : e;
						case jd.c:
						case jd.d:
						case jd.e:
						case jd.f:
						case u.a:
							return "";
						default:
							return e
					}
				},
				Id = Object(S.c)({
					cardCvc: hd,
					cardExpiry: md,
					cardNumber: vd,
					nameOnCard: _d,
					postalCode: Ed
				});
			const wd = He.xb;
			var Sd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.o:
					case jd.p:
					case jd.r:
						return wd;
					case jd.x:
						return t.payload;
					default:
						return e
				}
			};
			var Td = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.u:
							return t.payload || e;
						case jd.x: {
							const {
								method: s
							} = t.payload;
							return s === He.xb ? null : e
						}
						case jd.o:
						case jd.p:
						case jd.r:
						case Oe.M:
							return null;
						default:
							return e
					}
				},
				Cd = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts");
			var Ad = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.r:
							return "";
						case Cd.a: {
							const e = t.payload;
							return e.body && e.body.passthrough ? e.body.passthrough : ""
						}
						default:
							return e
					}
				},
				Pd = Object(S.c)({
					errorMessage: Td,
					passthrough: Ad
				});
			var Dd = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.D:
						return !e;
					case jd.x:
						return t.payload !== He.wb || e;
					case jd.c:
					case jd.d:
					case jd.e:
					case u.a:
						return !0;
					default:
						return e
				}
			};
			const Rd = [];
			var kd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.w:
						return t.payload;
					case jd.g: {
						const s = t.payload;
						return e.filter(e => e.cardId !== s)
					}
					default:
						return e
				}
			};
			var Nd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.v:
						return !0;
					case jd.w:
						return !1;
					default:
						return e
				}
			};
			var Ld = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.a:
					case jd.B:
						return t.payload.message || e;
					case jd.z:
						return t.payload;
					case jd.A:
					case jd.b:
					case jd.C:
						return null;
					case jd.x:
						return t.payload === He.wb ? null : e;
					default:
						return e
				}
			};
			var xd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.c:
						case jd.a:
						case jd.z:
						case jd.B:
							return !1;
						case jd.x:
							return t.payload !== He.wb && e;
						case jd.C:
							return !0;
						default:
							return e
					}
				},
				Md = Object(S.c)({
					errorMessage: Ld,
					pending: xd
				});
			var Ud = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.y:
							return t.payload;
						case jd.g:
							return t.payload === e ? null : e;
						default:
							return e
					}
				},
				Fd = Object(S.c)({
					cardName: yd,
					cardValidation: Id,
					paymentMethod: Sd,
					paypal: Pd,
					rememberCard: Dd,
					savedCards: kd,
					savedCardsPending: Nd,
					stripeToken: Md,
					useSavedCard: Ud
				});
			const Gd = {
				pending: !1,
				successful: !1,
				error: !1
			};
			var Bd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.V:
						return {
							pending: !0, successful: !1, error: !1
						};
					case Oe.W:
						return {
							pending: !1, successful: !0, error: !1
						};
					case Oe.U:
						return {
							pending: !1, successful: !1, error: !0
						};
					case n.c:
						return Gd;
					default:
						return e
				}
			};
			var qd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.H:
						return t.payload || !1;
					case n.c:
						return !1;
					default:
						return e
				}
			};
			var Kd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.S:
						return t.payload || 1;
					case n.c:
						return 1;
					default:
						return e
				}
			};
			var Vd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.c:
							return !1;
						case Oe.W:
						case Oe.T:
							return !0;
						default:
							return e
					}
				},
				Hd = Object(S.c)({
					freeReallocation: Bd,
					powerupsCount: Kd,
					isAnonymous: qd,
					purchaseCompleted: Vd
				});
			var Wd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "selectPayment",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.r:
						return "selectPayment";
					case jd.t:
						return "paymentCompleted";
					default:
						return e
				}
			};
			var Qd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.r:
							return !0;
						case u.a:
						case jd.e:
							return !1;
						default:
							return e
					}
				},
				Jd = Object(S.c)({
					activePage: Wd,
					showModal: Qd
				});
			var zd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.h:
					case jd.k: {
						const {
							activeSaleConfig: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Yd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.n:
					case jd.m:
					case jd.k:
					case jd.j:
						return null;
					case jd.l:
					case jd.i:
						return t.payload;
					default:
						return e
				}
			};
			var Xd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.l:
					case jd.n:
						return !1;
					case jd.m:
						return !0;
					default:
						return e
				}
			};
			var Zd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.i:
						case jd.k:
							return !1;
						case jd.j:
							return !0;
						default:
							return e
					}
				},
				$d = Object(S.c)({
					errorMessage: Yd,
					recommendedPending: Xd,
					storefrontPending: Zd
				});
			const el = [];
			var tl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.k: {
						const {
							dealCoinPackages: e
						} = t.payload;
						return e.map(e => e.mobileId)
					}
					default:
						return e
				}
			};
			const sl = {};
			var nl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.n: {
						const {
							coinPackages: s
						} = t.payload, n = s.reduce((e, t) => (e[t.mobileId] = t, e), {});
						return Object.assign(Object.assign({}, e), n)
					}
					case jd.k: {
						const {
							coinPackages: s,
							dealCoinPackages: n
						} = t.payload, a = [...s, ...n].reduce((e, t) => (e[t.mobileId] = t, e), {});
						return Object.assign(Object.assign({}, e), a)
					}
					default:
						return e
				}
			};
			const al = [];
			var rl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : al,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.n: {
						const {
							coinPackages: e
						} = t.payload;
						return e.map(e => e.mobileId)
					}
					case jd.m:
						return al;
					default:
						return e
				}
			};
			const cl = [];
			var il = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.k: {
							const {
								coinPackages: e
							} = t.payload;
							return e.map(e => e.mobileId)
						}
						default:
							return e
					}
				},
				ol = Object(S.c)({
					models: nl,
					dealPackageIds: tl,
					recommendedPackageIds: rl,
					storefrontPackageIds: il
				});
			const dl = [];
			var ll = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.k:
							return t.payload.premiumPackages;
						default:
							return e
					}
				},
				ul = Object(S.c)({
					activeSaleConfig: zd,
					api: $d,
					coinPackages: ol,
					premiumPackages: ll
				});
			var bl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "selectPayment",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.o:
					case jd.p:
						return "selectPayment";
					case jd.t:
						return "paymentCompleted";
					default:
						return e
				}
			};
			var gl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.r:
					case jd.s:
					case jd.o:
					case jd.p: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case jd.e:
					case jd.c:
					case jd.d:
					case jd.t:
						return null;
					default:
						return e
				}
			};
			var pl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.c:
					case jd.d:
					case Oe.f:
					case Oe.t:
						return null;
					case jd.o: {
						const {
							thingId: e
						} = t.payload;
						return e || null
					}
					case jd.q:
						return t.payload && t.payload.thingId ? t.payload.thingId : e;
					default:
						return e
				}
			};
			var Ol = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jd.o: {
						const {
							packageId: e
						} = t.payload;
						return e
					}
					case jd.t:
					case jd.c:
						return null;
					default:
						return e
				}
			};
			var fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.o:
						case jd.p:
							return !0;
						case Oe.M:
						case u.a:
						case jd.c:
						case jd.d:
							return !1;
						default:
							return e
					}
				},
				jl = Object(S.c)({
					activePage: bl,
					correlationId: gl,
					gildThingId: pl,
					packageId: Ol,
					showModal: fl
				});
			var yl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.s: {
							const {
								packageId: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				hl = Object(S.c)({
					packageId: yl
				});
			var ml = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jd.E:
						case jd.G:
							return !1;
						case jd.F:
							return !0;
						default:
							return e
					}
				},
				vl = Object(S.c)({
					pending: ml
				}),
				_l = Object(S.c)({
					payment: Fd,
					powerupsPurchaseModal: Hd,
					premiumPurchaseModal: Jd,
					purchaseCatalog: ul,
					purchaseModal: jl,
					targetedOffer: hl,
					updateCardModal: vl
				}),
				El = s("./src/reddit/actions/header.ts"),
				Il = s("./src/reddit/actions/overlayEvents.ts");
			var wl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case El.a:
							return !1;
						case El.b:
							return !0;
						case El.c:
							return !e;
						case Il.b:
							return !1;
						default:
							return e
					}
				},
				Sl = Object(S.c)({
					isSubscriptionsDropdownOpen: wl
				});
			var Tl = function() {
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
				Cl = s("./src/reddit/actions/imageUploads.ts");
			const Al = {};
			var Pl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Al,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cl.d: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.id]: s
							})
						}
						case Cl.c:
						case Cl.e:
						case Cl.b: {
							const s = t.payload;
							return e[s.id] ? Object.assign(Object.assign({}, e), {
								[s.id]: s
							}) : e
						}
						case Cl.a: {
							const s = t.payload;
							if (!e[s.id]) return e;
							const n = Object.assign({}, e);
							return delete n[s.id], n
						}
						default:
							return e
					}
				},
				Dl = s("./src/reddit/actions/inboxNotifications/constants.ts");
			var Rl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dl.a: {
						const {
							data: e
						} = t.payload;
						return e
					}
					case Dl.c:
					case Dl.b:
						return !1;
					default:
						return e
				}
			};
			var kl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Dl.c:
							return !0;
						case Dl.a:
						case Dl.b:
							return !1;
						default:
							return e
					}
				},
				Nl = Object(S.c)({
					error: Rl,
					pending: kl
				});
			const Ll = [];
			var xl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ll,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Dl.b:
							return t.payload;
						default:
							return e
					}
				},
				Ml = Object(S.c)({
					api: Nl,
					notifications: xl
				}),
				Ul = s("./src/reddit/actions/interceptedAction.ts");
			var Fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ul.a:
							return t.payload;
						case Ul.b:
							return null;
						default:
							return e
					}
				},
				Gl = s("./src/reddit/actions/changeUsername.ts");
			var Bl = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gl.a:
							return !1;
						case Gl.b:
							return !0;
						default:
							return e
					}
				},
				ql = s("./src/reddit/actions/emailVerificationTooltip.ts");
			var Kl = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ql.a:
							return !e;
						default:
							return e
					}
				},
				Vl = s("./src/reddit/actions/moderatingSubreddits.ts");
			var Hl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vl.a: {
							if (e) return e;
							const s = t.payload;
							return Object.keys(s).some(e => !0 === s[e].posts)
						}
						case ce.c:
						case Fe.b:
						case te.b:
						case Be.b: {
							if (e) return e;
							const {
								payload: s
							} = t;
							return s.subredditPermissions && s.subreddits ? s.subredditPermissions.posts : e
						}
						case ee.i:
						case ee.f:
						case ee.m:
						case ee.p:
						case ee.v: {
							if (e) return e;
							const {
								response: s
							} = t.payload, {
								moderatingSubreddits: n,
								moderatingProfiles: a
							} = s;
							let r = Object.keys(n).some(e => !0 === n[e].posts);
							if (!r) {
								r = Object.keys(a).some(e => !0 === n[e].posts)
							}
							return r
						}
						default:
							return e
					}
				},
				Wl = s("./src/reddit/actions/jsApi.ts");
			const Ql = [];
			var Jl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ql,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wl.a: {
							const s = t.payload;
							return -1 === e.indexOf(s) && (e = [...e, s]).sort(), e
						}
						default:
							return e
					}
				},
				zl = s("./src/reddit/actions/leaderboard/constants.ts"),
				Yl = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Xl = {};
			var Zl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zl.a: {
							const {
								subredditId: s,
								data: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case zl.b:
						case zl.c: {
							const {
								subredditId: s
							} = t.payload, n = e, a = s;
							n[a];
							return Yl(n, ["symbol" == typeof a ? a : a + ""])
						}
						default:
							return e
					}
				},
				$l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const eu = {};
			var tu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zl.a:
						case zl.c: {
							const {
								subredditId: s
							} = t.payload, n = e, a = s;
							n[a];
							return $l(n, ["symbol" == typeof a ? a : a + ""])
						}
						case zl.b: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						default:
							return e
					}
				},
				su = Object(S.c)({
					error: Zl,
					pending: tu
				});
			const nu = {};
			var au = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zl.c: {
							const {
								subredditId: s,
								data: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				ru = Object(S.c)({
					api: su,
					models: au
				});
			var cu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.a: {
						const {
							listingKey: s
						} = t.payload;
						return s || e
					}
					default:
						return e
				}
			};
			const iu = {};
			var ou = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case We.b:
					case We.c:
					case re.b:
					case re.c: {
						const {
							key: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(He.Nb.Subreddits) && -1 === n.indexOf(He.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case We.a:
					case re.a: {
						const {
							key: s,
							error: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(He.Nb.Subreddits) && -1 === a.indexOf(He.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case xe.f:
					case xe.e: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case xe.d: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const du = {};
			var lu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : du,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case We.b:
						case re.b: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(He.Nb.Subreddits) && -1 === n.indexOf(He.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case We.c:
						case We.a:
						case re.c:
						case re.a: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(He.Nb.Subreddits) && -1 === n.indexOf(He.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case xe.f: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case xe.e:
						case xe.d: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				uu = Object(S.c)({
					error: ou,
					pending: lu
				});
			const bu = {};
			var gu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case We.c: {
						const {
							fetchedToken: s,
							key: n,
							type: a
						} = t.payload;
						if (-1 === a.indexOf(He.Nb.Subreddits) && -1 === a.indexOf(He.Nb.Users)) return e;
						const r = e[n];
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, r), {
								[s]: !0
							})
						})
					}
					case xe.e: {
						const {
							fetchedToken: s,
							key: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								[s]: !0
							})
						})
					}
					default:
						return e
				}
			};
			const pu = {};
			var Ou = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case We.c: {
						const {
							key: s,
							listingOrder: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(He.Nb.Subreddits) && -1 === a.indexOf(He.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
							[s]: e[s].concat(n)
						})
					}
					case re.c: {
						const {
							key: s,
							listingOrder: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(He.Nb.Subreddits) && -1 === a.indexOf(He.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const fu = {};
			var ju = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case We.c:
						case re.c: {
							const {
								key: s,
								tokens: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(He.Nb.Subreddits) && -1 === a.indexOf(He.Nb.Users) ? e : n.listings ? Object.assign(Object.assign({}, e), {
								[s]: {
									token: n.listings
								}
							}) : Object(ws.a)(e, s)
						}
						case xe.e: {
							const {
								key: s,
								token: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: {
									token: n
								}
							})
						}
						default:
							return e
					}
				},
				yu = Object(S.c)({
					api: uu,
					identifiers: Ou,
					fetchedTokens: gu,
					loadMore: ju
				}),
				hu = s("./src/reddit/actions/eventPosts/constants.ts"),
				mu = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				vu = s("./src/reddit/actions/pages/topic.ts");
			const _u = {};
			var Eu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.h:
						case te.g:
						case te.l:
						case te.k:
						case ce.d:
						case ce.c:
						case Me.c:
						case Me.b:
						case Ge.e:
						case Ge.f:
						case Ge.i:
						case Ge.h:
						case Ue.s:
						case Ue.r:
						case mu.b:
						case mu.c:
						case ne.f:
						case ne.e:
						case ne.c:
						case ne.b:
						case ie.f:
						case ie.e:
						case qe.f:
						case qe.e:
						case oe.j:
						case vu.f:
						case vu.e:
						case vu.c:
						case vu.b:
						case oe.i:
						case hu.e:
						case hu.c:
						case hu.d: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: null
							})
						}
						case re.b:
						case re.c:
						case We.b:
						case We.c: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(He.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: null
							})
						}
						case te.f:
						case te.j:
						case ce.a:
						case Me.a:
						case Ge.g:
						case Ue.q:
						case mu.a:
						case oe.h:
						case ie.d:
						case qe.d:
						case ne.d:
						case ne.a:
						case vu.d:
						case vu.a:
						case hu.b: {
							const {
								key: s,
								error: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case re.a:
						case We.a: {
							const {
								error: s,
								key: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(He.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						default:
							return e
					}
				},
				Iu = s("./src/reddit/actions/linkedPosts/constants.ts"),
				wu = s("./src/reddit/actions/subreddit/constants.ts");
			const Su = {};
			var Tu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Su,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.h:
						case te.l:
						case ne.f:
						case qe.f:
						case ce.d:
						case Me.c:
						case Ge.f:
						case Ge.i:
						case Ue.s:
						case mu.c:
						case ie.f:
						case ne.c:
						case oe.j:
						case vu.c:
						case hu.e: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case re.b:
						case We.b: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(He.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case te.g:
						case te.f:
						case te.j:
						case te.k:
						case qe.d:
						case qe.e:
						case ne.d:
						case ne.e:
						case ce.c:
						case ce.a:
						case Me.b:
						case Me.a:
						case Iu.a:
						case Iu.b:
						case Ge.e:
						case Ge.d:
						case Ge.h:
						case Ge.g:
						case Ue.r:
						case Ue.q:
						case ie.d:
						case ie.e:
						case ne.a:
						case ne.b:
						case wu.h:
						case mu.b:
						case mu.a:
						case oe.i:
						case oe.h:
						case vu.b:
						case vu.a:
						case hu.c:
						case hu.b:
						case hu.d: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case wu.p: {
							if (!t.payload || !t.payload.length) return e;
							const s = {};
							for (const e of t.payload) {
								s[e.key] = !1
							}
							return Object.assign(Object.assign({}, e), s)
						}
						case re.c:
						case re.a:
						case We.c:
						case We.a: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(He.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Cu = Object(S.c)({
					error: Eu,
					pending: Tu
				}),
				Au = s("./src/reddit/actions/postList.ts"),
				Pu = s("./node_modules/lodash/omitBy.js"),
				Du = s.n(Pu);

			function Ru(e, t) {
				return t = t.toLowerCase(), Du()(e, (e, s) => s === t || s.startsWith("".concat(t, "--[")))
			}
			const ku = {};
			var Nu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ku,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Au.a: {
						const {
							listingKey: s,
							listingName: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case Au.b: {
						const {
							listingKey: s
						} = t.payload;
						return s in e ? yn()(e, [s]) : e
					}
					case ce.b:
						return Ru(e, t.payload);
					default:
						return e
				}
			};
			const Lu = {};
			var xu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ge.e:
						case te.g:
						case te.k:
						case ce.c:
						case ne.e:
						case vu.e: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: {}
							})
						}
						case Me.b:
						case Ge.h:
						case Ue.r:
						case ie.e:
						case ne.b:
						case oe.i:
						case vu.b: {
							const {
								key: s,
								fetchedToken: n
							} = t.payload, a = e[s];
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, a), {
									[n]: !0
								})
							})
						}
						case We.c: {
							const {
								fetchedToken: s,
								key: n,
								type: a
							} = t.payload;
							if (a.indexOf(He.Nb.Posts) > -1) {
								const t = e[n];
								return Object.assign(Object.assign({}, e), {
									[n]: Object.assign(Object.assign({}, t), {
										[s]: !0
									})
								})
							}
							return e
						}
						case ce.b:
							return Ru(e, t.payload);
						default:
							return e
					}
				},
				Mu = s("./src/reddit/actions/post.ts");
			const Uu = {};
			var Fu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.h:
						case Ge.f:
						case te.l:
						case ne.f:
						case ce.d:
						case qe.f:
						case ne.f:
						case vu.f: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: []
							})
						}
						case xe.e:
						case Iu.b:
						case Ge.e:
						case te.g:
						case te.k:
						case ce.c:
						case wu.h:
						case mu.b:
						case qe.e:
						case ne.e:
						case "RECOMMENDED_POSTS_LOADED":
						case vu.e:
						case hu.c: {
							const {
								key: s,
								postIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case wu.p: {
							if (!t.payload || !t.payload.length) return e;
							const s = {};
							for (const e of t.payload) {
								const t = e;
								s[t.key] = t.postIds
							}
							return Object.assign(Object.assign({}, e), s)
						}
						case Me.b:
						case Ge.h:
						case Ue.r:
						case ne.b:
						case ie.e:
						case oe.i:
						case vu.b:
						case hu.d: {
							const {
								key: s,
								postIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: e[s].concat(n)
							})
						}
						case re.c: {
							const {
								key: s,
								postOrder: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(He.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case We.c: {
							const {
								key: s,
								postOrder: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(He.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: e[s].concat(n)
							})
						}
						case Mu.k: {
							const {
								newStickiedPostList: s,
								listingKey: n
							} = t.payload;
							if (!e[n]) return e;
							const a = [...e[n]].filter(e => !s.includes(e));
							return a.unshift(...s), Object.assign(Object.assign({}, e), {
								[n]: a
							})
						}
						case ce.b:
							return Ru(e, t.payload);
						default:
							return e
					}
				},
				Gu = s("./src/lib/makeListingKey/index.ts"),
				Bu = s("./src/reddit/actions/preferences.ts");
			const qu = {};
			var Ku = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c: {
						const {
							key: s,
							listingSort: n
						} = t.payload;
						return n && !Object(Gu.b)(s) ? Object.assign(Object.assign({}, e), {
							[s]: {
								sort: n,
								hasChanged: !1
							}
						}) : e
					}
					case Bu.a:
					case Bu.q: {
						const t = {};
						return Object.keys(e).forEach(s => {
							t[s] = Object.assign(Object.assign({}, e[s]), {
								hasChanged: !0
							})
						}), t
					}
					default:
						return e
				}
			};
			const Vu = {};
			var Hu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.g:
					case te.k:
					case ce.c:
					case qe.e:
					case ne.e:
					case Me.b:
					case Ge.e:
					case Ge.h:
					case Ue.r:
					case ie.e:
					case ne.b:
					case oe.i:
					case vu.e:
					case vu.b: {
						const {
							key: s,
							token: n,
							dist: a
						} = t.payload;
						return n ? Object.assign(Object.assign({}, e), {
							[s]: {
								token: n,
								dist: a
							}
						}) : Object(ws.a)(e, s)
					}
					case We.c:
					case re.c: {
						const {
							key: s,
							tokens: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(He.Nb.Posts) ? e : n.posts ? Object.assign(Object.assign({}, e), {
							[s]: {
								token: n.posts
							}
						}) : Object(ws.a)(e, s)
					}
					case ce.b:
						return Ru(e, t.payload);
					default:
						return e
				}
			};
			const Wu = {};
			var Qu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hu.c:
						case hu.d: {
							const {
								pageInfo: s,
								key: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						default:
							return e
					}
				},
				Ju = Object(S.c)({
					api: Cu,
					endMarkers: Nu,
					fetchedTokens: xu,
					ids: Fu,
					listingSort: Ku,
					loadMore: Hu,
					pageInfo: Qu
				}),
				zu = Object(S.c)({
					activeKey: cu,
					listingOrder: yu,
					postOrder: Ju
				});
			var Yu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.g: {
						const s = t.payload;
						return Vc()(s.announcements) ? e : s.announcements || null
					}
					default:
						return e
				}
			};
			var Xu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.g: {
						const s = t.payload;
						return Vc()(s.featuredLiveThread) ? e : s.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Zu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.g:
							return !0;
						default:
							return e
					}
				},
				$u = Object(S.c)({
					announcements: Yu,
					featured: Xu,
					isFrontpageLoaded: Zu
				}),
				eb = s("./src/reddit/actions/media.ts");
			const tb = {};
			var sb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eb.b: {
						const {
							postId: s,
							index: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const nb = {};
			var ab = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eb.e: {
							const {
								postId: s,
								isTileLayout: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				rb = Object(S.c)({
					currentSlideIndex: sb,
					isGalleryTileLayout: ab
				});
			var cb = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eb.c:
						return t.payload;
					default:
						return e
				}
			};
			var ib = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eb.d:
							return t.payload;
						default:
							return e
					}
				},
				ob = Object(S.c)({
					isMuted: cb,
					volume: ib
				}),
				db = s("./src/reddit/actions/meta.ts");
			const lb = {
				ampCid: void 0,
				city: "",
				country: "",
				crawler: void 0,
				domain: "",
				isBot: !1,
				isSessionSeo: !1,
				method: "",
				platform: void 0,
				protocol: "",
				region: "",
				sessionReferrerDomain: "",
				userAgent: "",
				pageloadServerTime: 0
			};
			var ub = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case db.b:
						return t.payload;
					case db.a:
						return Object.assign(Object.assign({}, e), t.payload);
					default:
						return e
				}
			};
			const bb = {};
			var gb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case Fe.b:
						case te.b:
						case Be.b: {
							const {
								payload: s
							} = t;
							if (!s.subredditPermissions || !s.subreddits) return e;
							const n = Object.keys(s.subredditAboutInfo || {});
							if (1 !== n.length) return e;
							const a = n[0];
							return Object.assign(Object.assign({}, e), {
								[a]: s.subredditPermissions
							})
						}
						case ee.i:
						case ee.f:
						case ee.m:
						case ee.p:
						case ee.v: {
							const {
								response: s
							} = t.payload, {
								moderatingSubreddits: n,
								moderatingProfiles: a
							} = s;
							return Object.assign(Object.assign(Object.assign({}, e), n), a)
						}
						case oe.f:
						case Ge.e:
						case ee.k: {
							const s = t.payload,
								{
									moderatingSubreddits: n,
									moderatingProfiles: a
								} = s;
							return Object.assign(Object.assign(Object.assign({}, e), n), a)
						}
						case T.R: {
							const {
								subredditId: s
							} = t.payload;
							return Object(ws.a)(e, s)
						}
						case T.O: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				pb = s("./src/reddit/actions/moderationLog/constants.ts");
			const Ob = {};
			var fb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ob,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pb.b: {
						const {
							actionIds: s,
							key: n,
							subredditId: a
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, e[a] || {}), {
								[n]: s
							})
						})
					}
					default:
						return e
				}
			};
			const jb = {};
			var yb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pb.b: {
							const {
								normalizedModerationLog: s,
								subredditId: n
							} = t.payload, a = {};
							s.forEach(e => {
								a[e.id] = e
							});
							const r = {
								[n]: a
							};
							return Re()(Object.assign({}, e), r)
						}
						default:
							return e
					}
				},
				hb = Object(S.c)({
					itemOrder: fb,
					models: yb
				});
			var mb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pb.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const vb = {};
			var _b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pb.b: {
						const {
							hasNextPage: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					default:
						return e
				}
			};
			const Eb = {};
			var Ib = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pb.b: {
						const {
							hasPreviousPage: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					default:
						return e
				}
			};
			const wb = [];
			var Sb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pb.a: {
						const {
							normalizedModerators: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					default:
						return e
				}
			};
			var Tb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pb.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Cb = Object(S.c)({
					actions: hb,
					endCursor: mb,
					hasNextPage: _b,
					hasPreviousPage: Ib,
					moderators: Sb,
					startCursor: Tb
				});
			var Ab = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mu.e:
						return t.payload;
					case Mu.d:
						return null
				}
				return e
			};
			const Pb = {};
			var Db = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.E:
					case T.s: {
						const {
							subredditId: s,
							moderators: n
						} = t.payload.response || t.payload, a = {
							[s]: n
						};
						return Object(M.merge)(e, a)
					}
					case T.u: {
						const {
							subredditId: s,
							userId: n,
							permissions: a
						} = t.payload;
						return Object(M.setIn)(e, [s, n, "modPermissions"], a)
					}
					case T.Q: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(M.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			const Rb = {};
			var kb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.t:
					case T.s: {
						const {
							key: s,
							subredditId: n
						} = t.payload;
						return n ? Object.assign(Object.assign({}, e), {
							[s]: null
						}) : e
					}
					case T.r: {
						const {
							error: s,
							key: n,
							subredditId: a
						} = t.payload;
						return a ? Object.assign(Object.assign({}, e), {
							[n]: s
						}) : e
					}
					default:
						return e
				}
			};
			const Nb = {};
			var Lb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.r:
						case T.s: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: !1
							}) : e
						}
						case T.t: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: !0
							}) : e
						}
						default:
							return e
					}
				},
				xb = Object(S.c)({
					error: kb,
					pending: Lb
				});
			const Mb = {};
			var Ub = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.s: {
							const {
								subredditId: s,
								response: n,
								key: a
							} = t.payload;
							return Object(M.setIn)(e, [s, a], n.moderatorIds)
						}
						case T.Q: {
							const {
								subredditId: s,
								userId: n,
								key: a
							} = t.payload, r = e[s][a].filter(e => e !== n);
							return Object(M.setIn)(e, [s, a], r)
						}
						default:
							return e
					}
				},
				Fb = Object(S.c)({
					data: Ub,
					api: xb
				});
			var Gb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.x:
					case T.w:
						return null;
					case T.v:
						return t.payload;
					default:
						return e
				}
			};
			var Bb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.w:
						case T.v:
							return !1;
						case T.x:
							return !0;
						default:
							return e
					}
				},
				qb = Object(S.c)({
					error: Gb,
					pending: Bb
				});
			const Kb = {};
			var Vb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.w: {
						const {
							subredditId: s,
							moderators: n
						} = t.payload;
						return Object(M.set)(e, s, n)
					}
					case T.P: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(M.unsetIn)(e, [s, n])
					}
					case T.a: {
						const s = t.payload,
							{
								subredditId: n,
								moderators: a
							} = s,
							r = {
								[n]: a
							};
						return Object(M.merge)(e, r)
					}
					default:
						return e
				}
			};
			const Hb = {};
			var Wb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.w: {
							const {
								subredditId: s,
								moderatorIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case T.P: {
							const {
								subredditId: s,
								userId: n
							} = t.payload, a = e[s].filter(e => e !== n);
							return Object.assign(Object.assign({}, e), {
								[s]: a
							})
						}
						case T.a: {
							const s = t.payload,
								{
									subredditId: n,
									moderatorIds: a
								} = s,
								r = [...e[n] || [], ...a];
							return Object.assign(Object.assign({}, e), {
								[n]: r
							})
						}
						default:
							return e
					}
				},
				Qb = Object(S.c)({
					api: qb,
					models: Vb,
					userOrder: Wb
				});
			const Jb = {};
			var zb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.B: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							invitePending: a
						} = n, r = {
							[s]: a
						};
						return Object(M.merge)(e, r)
					}
					case T.y:
					case T.z: {
						const {
							subredditId: s
						} = t.payload;
						return Object(M.unset)(e, s)
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
					case T.s: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Zb = {};
			var $b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.B: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const eg = {};
			var tg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.B: {
						const {
							response: s
						} = t.payload, n = {
							[s.subredditId]: s.moderators
						};
						return Object(M.merge)(Object.assign({}, e), n)
					}
					case T.u: {
						const s = t.payload,
							{
								subredditId: n,
								userId: a,
								permissions: r
							} = s;
						return e[n] && e[n][a] ? Object(M.setIn)(e, [n, a, "modPermissions"], r) : e
					}
					default:
						return e
				}
			};
			var sg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.F:
					case T.E:
						return null;
					case T.D:
						return t.payload;
					default:
						return e
				}
			};
			var ng = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.F:
							return !0;
						case T.E:
						case T.D:
							return !1;
						default:
							return e
					}
				},
				ag = Object(S.c)({
					error: sg,
					pending: ng
				});
			var rg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.F:
						case T.D:
						case T.Q:
							return null;
						case T.E: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case T.u: {
							const {
								userId: s,
								permissions: n
							} = t.payload;
							return e && e.id === s && !fn()(e.modPermissions, n) ? Object.assign(Object.assign({}, e), {
								modPermissions: n
							}) : e
						}
						default:
							return e
					}
				},
				cg = Object(S.c)({
					api: ag,
					result: rg
				});
			const ig = {};
			var og = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ig,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.C:
					case T.B: {
						const {
							subredditId: s,
							key: n
						} = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[n]: null
						}) : e
					}
					case T.A: {
						const {
							error: s,
							subredditId: n,
							key: a
						} = t.payload;
						return n ? Object.assign(Object.assign({}, e), {
							[a]: s
						}) : e
					}
					default:
						return e
				}
			};
			const dg = {};
			var lg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.A:
						case T.B: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: !1
							}) : e
						}
						case T.C: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: !0
							}) : e
						}
						default:
							return e
					}
				},
				ug = Object(S.c)({
					error: og,
					pending: lg
				});
			const bg = {};
			var gg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.B: {
							const {
								response: s,
								subredditId: n,
								key: a
							} = t.payload, {
								moderatorIds: r
							} = s;
							return Object(M.merge)(e, {
								[n]: {
									[a]: r
								}
							})
						}
						case T.Q: {
							const {
								subredditId: s,
								userId: n
							} = t.payload, a = Object.assign({}, e[s]);
							return Object.keys(e[s]).forEach(t => {
								const r = e[s][t].filter(e => e !== n);
								a[t] = r
							}), Object(M.set)(e, s, a)
						}
						default:
							return e
					}
				},
				pg = Object(S.c)({
					data: gg,
					api: ug
				}),
				Og = Object(S.c)({
					editableModerators: Db,
					editableUserOrder: Fb,
					invitedModerators: Qb,
					invitePending: zb,
					loadMoreModerators: $b,
					loadMoreEditableModerators: Xb,
					models: tg,
					search: cg,
					userOrder: pg
				});
			var fg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ge.b:
					case Ge.k:
						return null;
					case Ge.a:
					case Ge.j:
						return t.payload;
					default:
						return e
				}
			};
			var jg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ge.b:
						case Ge.k:
							return !0;
						case Ge.c:
						case Ge.a:
						case Ge.l:
						case Ge.j:
							return !1;
						default:
							return e
					}
				},
				yg = Object(S.c)({
					error: fg,
					pending: jg
				});
			const hg = [];
			var mg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ge.e: {
							const s = t.payload,
								{
									filteredSubreddits: n
								} = s;
							return n || e
						}
						case Ge.j: {
							const s = t.payload;
							return [...e, s]
						}
						case Ge.k:
						case Ge.a: {
							const s = t.payload;
							return e.filter(e => e !== s)
						}
						default:
							return e
					}
				},
				vg = Object(S.c)({
					api: yg,
					names: mg
				}),
				_g = Object(S.c)({
					filteredSubreddits: vg
				});
			var Eg = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mn.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			var Ig = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hn.c:
					case hn.b:
						return null;
					case hn.a:
						return t.payload;
					default:
						return e
				}
			};
			var wg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hn.c:
							return !0;
						case hn.b:
						case hn.a:
						case ee.s:
						case ee.r:
							return !1;
						default:
							return e
					}
				},
				Sg = Object(S.c)({
					error: Ig,
					pending: wg
				});
			const Tg = {};
			var Cg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.a: {
						const {
							ids: s
						} = t.payload, n = {};
						return s.forEach(e => n[e] = !0), Object.assign(Object.assign({}, e), n)
					}
					case ee.d: {
						const {
							ids: s
						} = t.payload;
						return yn()(e, s)
					}
					case ee.c: {
						const {
							ids: e
						} = t.payload, s = {};
						return e.forEach(e => s[e] = !0), s
					}
					default:
						return e
				}
			};
			const Ag = {};
			var Pg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ag,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hn.b: {
							const {
								operation: e,
								ids: s
							} = t.payload;
							return "approve" === e ? Ag : {
								[Sn.c[e]]: s
							}
						}
						default:
							return e
					}
				},
				Dg = Object(S.c)({
					api: Sg,
					selectedItems: Cg,
					undoLastAction: Pg
				});
			var Rg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.g:
					case ee.f:
						return null;
					case ee.e:
						return t.payload;
					default:
						return e
				}
			};
			var kg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.g:
							return !0;
						case ee.f:
						case ee.e:
							return !1;
						default:
							return e
					}
				},
				Ng = Object(S.c)({
					error: Rg,
					pending: kg
				});
			const Lg = {};
			var xg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.f: {
						const {
							listingKey: s,
							page: n,
							response: a
						} = t.payload, {
							modqueue: r
						} = a;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s] || {}), {
								[n]: r
							})
						})
					}
					default:
						return e
				}
			};
			const Mg = {};
			var Ug = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.f: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: a
							} = n, r = a[a.length - 1] || null;
							return Object.assign(Object.assign({}, e), {
								[s]: r
							})
						}
						default:
							return e
					}
				},
				Fg = Object(S.c)({
					api: Ng,
					itemOrder: xg,
					loadMore: Ug
				});
			var Gg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ge.e: {
						const s = t.payload,
							{
								moderatingSubreddits: n
							} = s;
						return n ? null : e
					}
					case ee.i:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: s
						} = e;
						return s
					}
					case ee.k: {
						const e = t.payload,
							{
								moderatedAfter: s
							} = e;
						return s
					}
					default:
						return e
				}
			};
			const Bg = [];
			var qg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.i:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: s
						} = e;
						return s
					}
					case ee.k: {
						const s = t.payload,
							{
								listingOrder: n
							} = s;
						return [...e, ...n]
					}
					case Ge.e: {
						const s = t.payload,
							{
								listingOrder: n
							} = s;
						return n || e
					}
					default:
						return e
				}
			};
			var Kg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.b:
						return !0;
					default:
						return e
				}
			};
			var Vg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.k:
							return !0;
						case ee.b:
							return !1;
						default:
							return e
					}
				},
				Hg = Object(S.c)({
					after: Gg,
					data: qg,
					loaded: Kg,
					pending: Vg
				});
			var Wg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.j:
					case ee.i:
						return null;
					case ee.h:
						return t.payload;
					default:
						return e
				}
			};
			var Qg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.j:
							return !0;
						case ee.i:
						case ee.h:
							return !1;
						default:
							return e
					}
				},
				Jg = Object(S.c)({
					error: Wg,
					pending: Qg
				});
			const zg = {};
			var Yg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.i: {
						const {
							listingKey: s,
							page: n,
							response: a
						} = t.payload, {
							modqueue: r
						} = a;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s] || {}), {
								[n]: r
							})
						})
					}
					default:
						return e
				}
			};
			const Xg = {};
			var Zg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.i: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: a
							} = n, r = a[a.length - 1] || null;
							return Object.assign(Object.assign({}, e), {
								[s]: r
							})
						}
						default:
							return e
					}
				},
				$g = Object(S.c)({
					api: Jg,
					itemOrder: Yg,
					loadMore: Zg
				});
			var ep = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.n:
					case ee.m:
						return null;
					case ee.l:
						return t.payload;
					default:
						return e
				}
			};
			var tp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.n:
							return !0;
						case ee.m:
						case ee.l:
							return !1;
						default:
							return e
					}
				},
				sp = Object(S.c)({
					error: ep,
					pending: tp
				});
			const np = {};
			var ap = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : np,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.m: {
						const {
							listingKey: s,
							page: n,
							response: a
						} = t.payload, {
							modqueue: r
						} = a;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s] || {}), {
								[n]: r
							})
						})
					}
					default:
						return e
				}
			};
			const rp = {};
			var cp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.m: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: a
							} = n, r = a[a.length - 1] || null;
							return Object.assign(Object.assign({}, e), {
								[s]: r
							})
						}
						default:
							return e
					}
				},
				ip = Object(S.c)({
					api: sp,
					itemOrder: ap,
					loadMore: cp
				});
			var op = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.q:
					case ee.p:
						return null;
					case ee.o:
						return t.payload;
					default:
						return e
				}
			};
			var dp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.q:
							return !0;
						case ee.p:
						case ee.o:
							return !1;
						default:
							return e
					}
				},
				lp = Object(S.c)({
					error: op,
					pending: dp
				});
			const up = {};
			var bp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : up,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.p: {
						const {
							listingKey: s,
							page: n,
							response: a
						} = t.payload, {
							modqueue: r
						} = a;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s] || {}), {
								[n]: r
							})
						})
					}
					default:
						return e
				}
			};
			const gp = {};
			var pp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.p: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: a
							} = n, r = a[a.length - 1] || null;
							return Object.assign(Object.assign({}, e), {
								[s]: r
							})
						}
						default:
							return e
					}
				},
				Op = Object(S.c)({
					api: lp,
					itemOrder: bp,
					loadMore: pp
				});
			var fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.w:
					case ee.v:
						return null;
					case ee.u:
						return t.payload;
					default:
						return e
				}
			};
			var jp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.w:
							return !0;
						case ee.v:
						case ee.u:
							return !1;
						default:
							return e
					}
				},
				yp = Object(S.c)({
					error: fp,
					pending: jp
				});
			const hp = {};
			var mp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.v: {
						const {
							listingKey: s,
							page: n,
							response: a
						} = t.payload, {
							modqueue: r
						} = a;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s] || {}), {
								[n]: r
							})
						})
					}
					default:
						return e
				}
			};
			const vp = {};
			var _p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.v: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: a
							} = n, r = a[a.length - 1] || null;
							return Object.assign(Object.assign({}, e), {
								[s]: r
							})
						}
						default:
							return e
					}
				},
				Ep = Object(S.c)({
					api: yp,
					itemOrder: mp,
					loadMore: _p
				}),
				Ip = Object(S.c)({
					bulkAction: Dg,
					edited: Fg,
					moderatedCommunitiesOrder: Hg,
					modqueue: $g,
					reports: ip,
					spam: Op,
					unmoderated: Ep
				}),
				wp = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Sp = {};
			var Tp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.v: {
						const {
							moreCommentsId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case X.u: {
						const {
							moreCommentsItem: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: null
						})
					}
					case X.t: {
						const s = t.payload,
							{
								moreCommentsItem: n
							} = s,
							a = wp(s, ["moreCommentsItem"]);
						return Object.assign(Object.assign({}, e), {
							[n.id]: a || {}
						})
					}
					default:
						return e
				}
			};
			const Cp = {};
			var Ap = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.v: {
							const {
								moreCommentsId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case X.t:
						case X.u: {
							const {
								moreCommentsItem: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.id]: !1
							})
						}
						default:
							return e
					}
				},
				Pp = Object(S.c)({
					error: Tp,
					pending: Ap
				});
			const Dp = {};
			var Rp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z.b:
							const {
								comment: s, parentCommentId: n, depth: a, originId: r, isChatSort: c
							} = t.payload;
							if (!c) {
								if (r) {
									const t = "moreComments-" + r,
										c = e[t],
										i = s.id.split("_")[1];
									if (c) {
										const s = c.numComments + 1;
										if (c.depth && a === c.depth) {
											const n = atob(c.token).concat(", ", i);
											return Object.assign(Object.assign({}, e), {
												[t]: Object.assign(Object.assign({}, c), {
													numComments: s,
													token: btoa(n)
												})
											})
										}
										return Object.assign(Object.assign({}, e), {
											[t]: Object.assign(Object.assign({}, c), {
												numComments: s
											})
										})
									}
									return Object.assign(Object.assign({}, e), {
										[t]: {
											id: t,
											depth: a,
											parentId: n,
											token: btoa(i),
											numComments: 1,
											next: null,
											prev: Object(En.g)(n),
											postId: s.postId,
											isFromLiveWebSocket: !0
										}
									})
								}
								return e
							}
							return Object.assign(Object.assign({}, e), t.payload.moreComments);
						case X.u:
						case Fe.b:
						case te.b:
							return Object.assign(Object.assign({}, e), t.payload.moreComments);
						default:
							return e
					}
				},
				kp = Object(S.c)({
					api: Pp,
					models: Rp
				});
			var Np = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.b:
					case Ue.c:
						return null;
					case Ue.a:
						return t.payload;
					default:
						return e
				}
			};
			var Lp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.a:
					case Ue.c:
						return !0;
					case Ue.b:
						return !1;
					default:
						return e
				}
			};
			var xp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.k:
						case Ue.a:
						case Ue.c:
							return null;
						case Ue.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Mp = Object(S.c)({
					error: Np,
					fetched: Lp,
					pending: xp
				});
			var Up = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.f:
					case Ue.g:
						return null;
					case Ue.e:
						return t.payload;
					default:
						return e
				}
			};
			var Fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e:
					case Ue.g:
						return !0;
					case Ue.f:
						return !1;
					default:
						return e
				}
			};
			var Gp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.e:
						case Ue.g:
							return !1;
						case Ue.f:
							return !0;
						default:
							return e
					}
				},
				Bp = Object(S.c)({
					error: Up,
					fetched: Fp,
					pending: Gp
				});
			var qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.i:
					case Ue.j:
						return null;
					case Ue.h:
						return t.payload;
					default:
						return e
				}
			};
			var Kp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.h:
					case Ue.j:
						return !0;
					case Ue.i:
						return !1;
					default:
						return e
				}
			};
			var Vp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.h:
						case Ue.j:
							return !1;
						case Ue.i:
							return !0;
						default:
							return e
					}
				},
				Hp = Object(S.c)({
					error: qp,
					fetched: Kp,
					pending: Vp
				});
			var Wp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.l:
					case Ue.m:
						return null;
					case Ue.k:
						return t.payload;
					default:
						return e
				}
			};
			var Qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.k:
					case Ue.m:
						return !0;
					case Ue.l:
						return !1;
					default:
						return e
				}
			};
			var Jp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.k:
						case Ue.m:
							return !1;
						case Ue.l:
							return !0;
						default:
							return e
					}
				},
				zp = Object(S.c)({
					error: Wp,
					fetched: Qp,
					pending: Jp
				});
			var Yp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.o:
					case Ue.p:
						return null;
					case Ue.n:
						return t.payload;
					default:
						return e
				}
			};
			var Xp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.n:
					case Ue.p:
						return !0;
					case Ue.o:
						return !1;
					default:
						return e
				}
			};
			var Zp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.n:
						case Ue.p:
							return !1;
						case Ue.o:
							return !0;
						default:
							return e
					}
				},
				$p = Object(S.c)({
					error: Yp,
					fetched: Xp,
					pending: Zp
				});
			var eO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.t:
						return !1;
					case Ue.u:
						return !0;
					default:
						return e
				}
			};
			var tO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.t:
							return !0;
						case Ue.u:
							return !1;
						default:
							return e
					}
				},
				sO = Object(S.c)({
					fetched: eO,
					pending: tO
				});
			var nO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.A:
					case Ue.B:
						return null;
					case Ue.z:
						return t.payload;
					default:
						return e
				}
			};
			var aO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.A:
					case Ue.z:
						return !1;
					case Ue.B:
						return !0;
					default:
						return e
				}
			};
			var rO = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.A:
							return !0;
						case Ue.B:
						case Ue.z:
							return !1;
						default:
							return e
					}
				},
				cO = Object(S.c)({
					error: nO,
					fetched: aO,
					pending: rO
				});
			var iO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.w:
					case Ue.x:
						return null;
					case Ue.v:
						return t.payload;
					default:
						return e
				}
			};
			var oO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.v:
					case Ue.x:
						return !0;
					case Ue.w:
						return !1;
					default:
						return e
				}
			};
			var dO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.v:
						case Ue.x:
							return null;
						case Ue.w:
							const {
								id: s
							} = t.payload;
							return s;
						default:
							return e
					}
				},
				lO = Object(S.c)({
					error: iO,
					fetched: oO,
					pending: dO
				}),
				uO = Object(S.c)({
					addSubreddit: Mp,
					create: Bp,
					deleteMulti: Hp,
					duplicate: zp,
					edit: $p,
					forUser: sO,
					recommendations: cO,
					removeSubreddit: lO
				}),
				bO = s("./node_modules/lodash/union.js"),
				gO = s.n(bO);

			function pO(e, t, s) {
				let n, a, r = e.length - 1,
					c = 0;
				for (; c <= r;) {
					const i = s(n = e[a = (c + r) / 2 | 0], t);
					if (i < 0) {
						if ((c = a + 1) > r) return c
					} else {
						if (!(i > 0)) return a;
						if ((r = a - 1) < c) return r + 1
					}
				}
				return (c + r) / 2 | 0
			}
			var OO = s("./src/reddit/actions/profile/constants.ts");
			const fO = {};
			var jO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.k:
						case Ue.r:
						case Ue.u:
						case OO.h: {
							const {
								multireddits: s,
								multiredditsByUser: n,
								multiredditsModelsState: a
							} = t.payload, r = Object.assign({}, e), c = Object.assign(Object.assign({}, s), a);
							for (const t in n) {
								const s = n[t],
									a = e[t];
								r[t] = gO()(a, s).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return fn()(e, r) ? e : r
						}
						case Ue.g:
						case Ue.m: {
							const {
								userId: s,
								multireddit: n
							} = t.payload, a = e[s] ? e[s].slice() : [], r = pO(a, n.url, (e, t) => e > t ? 1 : -1);
							return a.splice(r, 0, n.url), Object.assign(Object.assign({}, e), {
								[s]: a
							})
						}
						case Ue.j: {
							const s = t.payload;
							for (const t in e) {
								const n = e[t];
								if (n.indexOf(s) > -1) return Object.assign(Object.assign({}, e), {
									[t]: n.filter(e => e !== s)
								})
							}
							return e
						}
						default:
							return e
					}
				},
				yO = s("./src/reddit/actions/subscription/constants.ts"),
				hO = s("./src/reddit/models/Multireddit/index.ts");
			const mO = {};
			var vO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.k:
					case Ue.r:
					case Ue.u:
					case OO.h: {
						let s = {};
						for (const n in t.payload.multireddits) {
							const a = Object.assign({}, t.payload.multireddits[n]),
								r = e[n];
							r && !Object(hO.g)(a) && (a.subredditIds = r.subredditIds, a.profileIds = r.profileIds), n in e && fn()(e[a.url], a) || (s = Object.assign(Object.assign({}, s), {
								[n]: a
							}))
						}
						return Vc()(s) ? e : Object.assign(Object.assign({}, e), s)
					}
					case Ue.g:
					case Ue.m: {
						const {
							multireddit: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.url]: s
						})
					}
					case Ue.j: {
						const s = t.payload,
							n = Object.assign({}, e);
						return delete n[s], n
					}
					case Ue.p: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.url]: s
						})
					}
					case Ue.x: {
						const {
							id: s,
							multipath: n,
							type: a
						} = t.payload, r = e[n], c = "subreddit" === a ? (r.subredditIds || []).filter(e => e !== s) : r.subredditIds, i = "profile" === a ? (r.profileIds || []).filter(e => e !== s) : r.profileIds;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, r), {
								profileIds: i,
								subredditIds: c
							})
						})
					}
					case yO.d: {
						const {
							makeFavorite: s,
							multiredditPath: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								isFavorited: s
							})
						})
					}
					case yO.e: {
						const {
							follow: s,
							multiredditPath: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								isFollowed: s,
								isFavorited: !1
							})
						})
					}
					case Ue.c: {
						const {
							id: s,
							multipaths: n,
							type: a
						} = t.payload, r = n.reduce((t, n) => {
							const r = e[n],
								c = "subreddit" === a ? [...r.subredditIds || [], s] : r.subredditIds,
								i = "profile" === a ? [...r.profileIds || [], s] : r.profileIds;
							return Object.assign(Object.assign({}, t), {
								[n]: Object.assign(Object.assign({}, r), {
									subredditIds: c,
									profileIds: i
								})
							})
						}, {});
						return Object.assign(Object.assign({}, e), r)
					}
					default:
						return e
				}
			};
			const _O = {};
			var EO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _O,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.B: {
							const {
								multipath: s,
								subreddits: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.keys(n)
							})
						}
						default:
							return e
					}
				},
				IO = Object(S.c)({
					api: uO,
					byUserId: jO,
					models: vO,
					recommendations: EO
				});
			var wO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.J:
					case T.H:
						return null;
					case T.G:
						return t.payload;
					default:
						return e
				}
			};
			const SO = {};
			var TO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.J: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(A.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !0
							})
						}
						case T.H:
						case T.G: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(A.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !1
							})
						}
						default:
							return e
					}
				},
				CO = Object(S.c)({
					error: wO,
					pending: TO
				});
			const AO = {};
			var PO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.H: {
						const {
							fetchedToken: s,
							subredditId: n
						} = t.payload, a = Object(A.d)(n, s);
						return Object.assign(Object.assign({}, e), {
							[a]: !0
						})
					}
					default:
						return e
				}
			};
			var DO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case At.b:
						return t.payload;
					default:
						return e
				}
			};
			const RO = {};
			var kO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.H: {
						const {
							subredditId: e,
							after: s
						} = t.payload;
						return {
							[e]: s
						}
					}
					default:
						return e
				}
			};
			const NO = {};
			var LO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.I:
					case T.H: {
						const {
							subredditId: s,
							mutedUsers: n
						} = t.payload, a = {
							[s]: n
						};
						return Object(M.merge)(e, a)
					}
					case T.N: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(M.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			var xO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.M:
					case T.L:
						return null;
					case T.K:
						return t.payload;
					default:
						return e
				}
			};
			var MO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.M:
							return !0;
						case T.L:
						case T.K:
							return !1;
						default:
							return e
					}
				},
				UO = Object(S.c)({
					error: xO,
					pending: MO
				});
			var FO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.M:
						case T.K:
							return null;
						case T.L: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				GO = Object(S.c)({
					api: UO,
					result: FO
				});
			const BO = {};
			var qO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.H: {
							const {
								subredditId: s,
								mutedUserIds: n
							} = t.payload;
							return e[s] ? Object.assign(Object.assign({}, e), {
								[s]: [...e[s], ...n]
							}) : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case T.N: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== n)
							}
						}
						case T.I: {
							const {
								subredditId: s,
								mutedUserIds: n
							} = t.payload, a = n[0];
							return a && e[s] && -1 === e[s].indexOf(a) ? {
								[s]: [a, ...e[s]]
							} : e
						}
						default:
							return e
					}
				},
				KO = Object(S.c)({
					api: CO,
					fetchedTokens: PO,
					inContext: DO,
					loadMore: kO,
					models: LO,
					search: GO,
					userOrder: qO
				}),
				VO = s("./src/reddit/actions/notificationBanner.ts");
			var HO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VO.b:
							return t.payload.notificationBannerId;
						case VO.a:
							return null;
						default:
							return e
					}
				},
				WO = s("./src/reddit/actions/nps.ts");
			const QO = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var JO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case WO.c:
							return Object.assign(Object.assign({}, QO), {
								pending: !0
							});
						case WO.a:
							return QO;
						case WO.b: {
							const {
								dest: e
							} = t.payload;
							return Object.assign(Object.assign({}, QO), {
								success: !0,
								dest: e
							})
						}
						default:
							return e
					}
				},
				zO = s("./src/reddit/actions/oldSiteRules.ts");
			const YO = [];
			var XO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zO.a:
						return t.payload.oldSiteRules;
					default:
						return e
				}
			};
			const ZO = e => {
				const {
					id: t,
					experimentName: s,
					name: n,
					version: a
				} = e;
				return {
					id: parseInt(t),
					name: s,
					variant: n || void 0,
					version: a
				}
			};
			const $O = e => {
					const t = {};
					for (const s of e) t[s.experimentName.toLowerCase()] = ZO(s);
					return t
				},
				ef = {};
			var tf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ni.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, s = e ? e.experiments : [];
						return $O(s)
					}
					default:
						return e
				}
			};
			var sf = Object(S.c)({
					byName: tf,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Ni.a: {
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
				nf = Object(S.c)({
					experiments: sf
				}),
				af = s("./node_modules/history/esm/history.js"),
				rf = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const cf = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				of = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				df = (e, t, s, n) => {
					const a = s.route,
						{
							action: r
						} = a,
						c = rf(a, ["action"]);
					return {
						key: e,
						locationState: n.state,
						meta: s.route.meta,
						queryParams: s.match.queryParams,
						routeMatch: Object.assign(Object.assign({}, s), {
							route: c
						}),
						status: 200,
						url: t,
						urlParams: s.match.params
					}
				};
			var lf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.a: {
							const s = e.currentPage,
								n = t.payload,
								{
									routeMatch: a,
									location: r
								} = n,
								{
									key: c
								} = r;
							if (void 0 === c) return e;
							const i = Object(af.e)(r),
								o = a ? df(c, i, a, r) : of (c, i);
							let {
								referrers: d
							} = e;
							if ("PUSH" === n.action) {
								const e = s && s.url || "";
								d = Object.assign(Object.assign({}, d), {
									[c]: e
								})
							} else if ("REPLACE" === n.action && s && d[s.key]) {
								const e = d,
									t = s.key,
									n = e[t],
									a = rf(e, ["symbol" == typeof t ? t : t + ""]);
								d = Object.assign(Object.assign({}, a), {
									[c]: n
								})
							}
							return Object.assign(Object.assign({}, e), {
								referrers: d,
								currentPage: o,
								lastPage: s
							})
						}
						case u.e: {
							const s = t.payload,
								{
									key: n,
									meta: a
								} = s;
							return Object.assign(Object.assign({}, e), {
								metas: Object.assign(Object.assign({}, e.metas), {
									[n]: a
								})
							})
						}
						case u.f: {
							if (!e.currentPage) return e;
							const s = t.payload,
								n = Object.assign(Object.assign({}, e.currentPage), {
									status: s
								});
							return Object.assign(Object.assign({}, e), {
								currentPage: n
							})
						}
						case Fe.b:
						case te.b:
							return !e.currentPage || t.payload.postMeta, e;
						case u.b:
							return e;
						case u.d: {
							const {
								allowNavigationCallback: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								allowNavigationCallback: s
							})
						}
						case u.c:
							return Object.assign(Object.assign({}, e), {
								allowNavigationCallback: null
							});
						default:
							return e
					}
				},
				uf = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const bf = {};
			var gf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.k: {
						const {
							pollId: s
						} = t.payload.pollResults, n = e, a = s;
						n[a];
						return uf(n, ["symbol" == typeof a ? a : a + ""])
					}
					case d.j: {
						const {
							pollId: s
						} = t.payload, n = e, a = s;
						n[a];
						return uf(n, ["symbol" == typeof a ? a : a + ""])
					}
					case d.i: {
						const {
							pollId: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const pf = {};
			var Of = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.k: {
							const {
								pollId: s
							} = t.payload.pollResults;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case d.i: {
							const {
								pollId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case d.j: {
							const {
								pollId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						default:
							return e
					}
				},
				ff = Object(S.c)({
					error: gf,
					pending: Of
				}),
				jf = Object(S.c)({
					voting: ff
				}),
				yf = s("./src/reddit/actions/economics/predictions/constants.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const hf = e => {
				const {
					options: t,
					totalVoteCount: s,
					userSelection: n
				} = e;
				return {
					options: t.reduce((e, t) => {
						let {
							id: s,
							voteCount: a
						} = t;
						return Object.assign(Object.assign({}, e), {
							[s.toString()]: {
								id: s,
								votes: (a || 0).toString(),
								userSelected: s === n
							}
						})
					}, {}),
					totalVotes: s.toString()
				}
			};
			var mf = e => {
					if (!e.pollData) return null;
					const {
						id: t,
						authorId: s,
						belongsTo: n,
						created: a,
						pollData: {
							isPrediction: r,
							options: c,
							resolvedOptionId: i,
							totalStakeAmount: o,
							totalVoteCount: d,
							userSelection: l,
							userWonAmount: u,
							votingEndTimestamp: b
						}
					} = e;
					return {
						id: t,
						createdAt: a,
						creatorId: s,
						subredditId: n.id,
						endsAt: b,
						postId: t,
						options: c,
						totalVoters: d,
						type: bc.a.GA,
						isPrediction: r,
						totalStakeAmount: o,
						userSelection: l,
						userWonAmount: u,
						resolvedOptionId: i
					}
				},
				vf = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const _f = {};
			var Ef = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.h: {
						const {
							poll: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: s
						})
					}
					case te.g:
					case ce.c:
					case oe.i:
					case Me.b:
					case Fe.b:
					case te.b: {
						const {
							governance: s,
							posts: n
						} = t.payload;
						if (s) {
							const t = Object.keys(s).reduce((e, t) => {
								const n = s[t].poll;
								return e[n.id] = n, e
							}, {});
							return Object.assign(Object.assign({}, e), t)
						}
						const a = {};
						return Object.keys(n).forEach(e => {
							n[e].pollData && (a[e] = mf(n[e]))
						}), Object.assign(Object.assign({}, e), a)
					}
					case yf.a:
						const s = t.payload,
							{
								pollId: n
							} = s,
							a = s.prediction,
							{
								options: r,
								selectedOptionId: c
							} = a,
							i = vf(a, ["options", "selectedOptionId"]);
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign(Object.assign({}, e[n]), i), {
								userSelection: c,
								options: r.map(t => {
									let {
										id: s,
										redditorStakeAmount: a,
										totalStakeAmount: r
									} = t;
									return Object.assign(Object.assign({}, e[n].options.find(e => e.id === s)), {
										totalStakeAmount: r,
										userStakeAmount: a
									})
								})
							})
						});
					default:
						return e
				}
			};
			const If = {};
			var wf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : If,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.k: {
						const {
							[bc.b.ByVoters]: s, pollId: n
						} = t.payload.pollResults;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case d.e: {
						const {
							pollId: s,
							optionId: n,
							options: a
						} = t.payload;
						let r = 0;
						const c = {};
						for (const e of a) r += e.voteCount, c[e.id] = {
							id: "number" == typeof e.id ? e.id : parseInt(e.id),
							userSelected: e.id === n,
							votes: e.voteCount.toString()
						};
						return Object.assign(Object.assign({}, e), {
							[s]: {
								options: c,
								totalVotes: r.toString()
							}
						})
					}
					case te.g:
					case ce.c:
					case oe.i:
					case Me.b:
					case Fe.b:
					case te.b: {
						const {
							governance: s,
							posts: n
						} = t.payload;
						if (s) {
							const t = Object.keys(s).reduce((e, t) => {
								const n = s[t],
									{
										[bc.b.ByVoters]: a,
										pollId: r
									} = n.pollResults;
								return e[r] = a, e
							}, {});
							return Object.assign(Object.assign({}, e), t)
						}
						const a = Object.keys(n).reduce((e, t) => {
							if (!n[t].pollData) return e;
							const s = hf(n[t].pollData);
							return s ? (e[t] = s, e) : e
						}, {});
						return Object.keys(a).length ? Object.assign(Object.assign({}, e), a) : e
					}
					default:
						return e
				}
			};
			const Sf = {};
			var Tf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.k: {
							const {
								[bc.b.ByVotingPower]: s, pollId: n
							} = t.payload.pollResults;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						case te.g:
						case ce.c:
						case oe.i:
						case Me.b:
						case Fe.b:
						case te.b: {
							const {
								governance: s
							} = t.payload;
							if (s) {
								const t = Object.keys(s).reduce((e, t) => {
									const n = s[t],
										{
											[bc.b.ByVotingPower]: a,
											pollId: r
										} = n.pollResults;
									return e[r] = a, e
								}, {});
								return Object.assign(Object.assign({}, e), t)
							}
							return e
						}
						default:
							return e
					}
				},
				Cf = Object(S.c)({
					byVoters: wf,
					byVotingPower: Tf
				});
			const Af = {};
			var Pf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Af,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.k: {
							const {
								pollId: s,
								rewardPoints: n
							} = t.payload.pollResults;
							return n ? Object.assign(Object.assign({}, e), {
								[s]: n
							}) : e
						}
						default:
							return e
					}
				},
				Df = Object(S.c)({
					api: jf,
					models: Ef,
					results: Cf,
					rewards: Pf
				});
			const Rf = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var kf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Aa.i:
					case Aa.j:
						return Object.assign(Object.assign({}, e), {
							reorderError: null
						});
					case Aa.h:
						return Object.assign(Object.assign({}, e), {
							reorderError: t.payload
						});
					case Aa.l:
					case Aa.m:
						return Object.assign(Object.assign({}, e), {
							updateDescriptionError: null
						});
					case Aa.k:
						return Object.assign(Object.assign({}, e), {
							updateDescriptionError: t.payload
						});
					case Aa.p:
					case Aa.q:
						return Object.assign(Object.assign({}, e), {
							updateLayoutError: null
						});
					case Aa.o:
						return Object.assign(Object.assign({}, e), {
							updateLayoutError: t.payload
						});
					default:
						return e
				}
			};
			const Nf = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Lf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Aa.i:
							return Object.assign(Object.assign({}, e), {
								reorderPending: !0
							});
						case Aa.h:
						case Aa.j:
							return Object.assign(Object.assign({}, e), {
								reorderPending: !1
							});
						case Aa.l:
							return Object.assign(Object.assign({}, e), {
								updateDescriptionPending: !0
							});
						case Aa.k:
						case Aa.m:
							return Object.assign(Object.assign({}, e), {
								updateDescriptionPending: !1
							});
						case Aa.p:
							return Object.assign(Object.assign({}, e), {
								updateLayoutPending: !0
							});
						case Aa.o:
						case Aa.q:
							return Object.assign(Object.assign({}, e), {
								updateLayoutPending: !1
							});
						default:
							return e
					}
				},
				xf = Object(S.c)({
					error: kf,
					pending: Lf
				}),
				Mf = s("./src/reddit/helpers/path/index.ts");
			const Uf = {},
				Ff = e => {
					const {
						protocol: t,
						domain: s
					} = e;
					return e => {
						const n = Object(Mf.b)(e.permalink);
						return Object.assign(Object.assign({}, e), {
							permalink: "".concat(t, "://").concat(s).concat(n)
						})
					}
				};
			var Gf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Be.b:
					case Ge.e:
					case Ge.h:
					case se.b:
					case se.e:
					case qe.e:
					case qe.b:
					case ne.e:
					case ne.b:
					case ce.c:
					case te.g:
					case te.k:
					case ce.c:
					case Fe.b:
					case te.b:
					case Mu.g:
					case Ue.r:
					case Me.b:
					case ie.e:
					case "RECOMMENDED_POSTS_LOADED":
					case oe.i:
					case We.c:
					case Ke.b:
					case re.c:
					case Aa.f: {
						const {
							collections: s,
							meta: n
						} = t.payload;
						if (!s) return e;
						let a = s;
						if (n) {
							const e = Ff(n);
							a = us()(s, e)
						}
						return Object.assign(Object.assign({}, e), a)
					}
					case Aa.d: {
						const {
							collection: s,
							meta: n
						} = t.payload;
						if (!s) return e;
						const a = s.id;
						let r = s;
						if (n) {
							r = Ff(n)(s)
						}
						return Object.assign(Object.assign({}, e), {
							[a]: r
						})
					}
					case Aa.g: {
						const {
							collectionId: s,
							postId: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								postIds: a.postIds.filter(e => e !== n)
							})
						}) : e
					}
					case Aa.a: {
						const {
							collectionId: s,
							postId: n
						} = t.payload, a = e[s];
						return a && n ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								postIds: [...a.postIds, n]
							})
						}) : e
					}
					case Aa.e: {
						const {
							collectionId: s
						} = t.payload, n = Object.assign({}, e);
						return delete n[s], n
					}
					case Aa.s: {
						const {
							collectionId: s,
							newTitle: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								title: n
							})
						}) : e
					}
					case Aa.j: {
						const {
							collectionId: s,
							postIds: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								postIds: [...n]
							})
						}) : e
					}
					case Aa.m: {
						const {
							collectionId: s,
							newDescription: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								description: n
							})
						}) : e
					}
					case Aa.q: {
						const {
							collectionId: s,
							newLayout: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								displayLayout: n
							})
						}) : e
					}
					default:
						return e
				}
			};
			const Bf = {};
			var qf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Be.b:
						case Aa.f: {
							const {
								collections: s
							} = t.payload;
							if (!s) return e;
							const n = Object.keys(s);
							if (!n.length) return e;
							const {
								subredditId: a
							} = s[n[0]];
							return Object.assign(Object.assign({}, e), {
								[a]: n
							})
						}
						case Aa.d: {
							const {
								collection: s
							} = t.payload, {
								subredditId: n
							} = s, a = e[n] || [];
							return Object.assign(Object.assign({}, e), {
								[n]: [...a, s.id]
							})
						}
						case Aa.e: {
							const {
								collectionId: s,
								collection: n
							} = t.payload;
							if (!n) return e;
							const a = n && e[n.subredditId];
							return a ? Object.assign(Object.assign({}, e), {
								[n.subredditId]: a.filter(e => e !== s)
							}) : e
						}
						default:
							return e
					}
				},
				Kf = Object(S.c)({
					models: Gf,
					subredditToIds: qf,
					api: xf
				}),
				Vf = s("./src/reddit/actions/postFlair.ts"),
				Hf = s("./src/reddit/models/Flair/index.ts");
			const Wf = {},
				Qf = {
					displaySettings: {
						isEnabled: !1,
						position: Hf.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				Jf = (e, t) => {
					if (!t) return e;
					const s = Object.keys(t);
					return 0 === s.length ? e : s.reduce((e, s) => (e[s] = Object.assign(Object.assign(Object.assign({}, Qf), e[s]), t[s]), e), Object.assign({}, e))
				};
			var zf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Be.b:
						case Me.b:
						case Ge.e:
						case Ge.h:
						case Ue.r:
						case mu.b:
						case Fe.b:
						case te.b:
						case te.g:
						case te.k:
						case re.c:
						case ce.c:
						case se.b:
						case se.e:
						case ae.c:
						case ae.i:
						case ae.e:
						case ae.g:
						case ie.e:
						case Ke.b:
						case Ke.b:
						case qe.b:
						case qe.e:
						case ne.b:
						case ne.e:
						case "RECOMMENDED_POSTS_LOADED":
						case We.c:
						case We.c:
						case oe.i:
							return Jf(e, t.payload.postFlair);
						case Vf.c: {
							const {
								subredditId: s,
								isEnabled: n
							} = t.payload, a = e[s].displaySettings, r = Object.assign(Object.assign({}, a), {
								isEnabled: n
							});
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									displaySettings: r
								})
							})
						}
						case Vf.a: {
							const {
								subredditId: s,
								canAssignOwn: n
							} = t.payload, a = e[s].permissions, r = Object.assign(Object.assign({}, a), {
								canAssignOwn: n
							});
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									permissions: r
								})
							})
						}
						case Vf.f: {
							const {
								subredditId: s,
								template: n
							} = t.payload, a = e[s], {
								templates: r,
								templateIds: c
							} = a, i = Object.assign(Object.assign({}, r), {
								[n.id]: n
							}), o = [...c];
							return o.includes(n.id) || o.push(n.id), Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, a), {
									templates: i,
									templateIds: o
								})
							})
						}
						case Vf.b: {
							const {
								subredditId: s,
								templateId: n
							} = t.payload, a = e[s], {
								templates: r,
								templateIds: c
							} = a, i = yn()(r, n), o = c.filter(e => e !== n);
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, a), {
									templates: i,
									templateIds: o
								})
							})
						}
						case Vf.e:
						case Vf.d: {
							const s = t.payload,
								n = e[s.subredditId];
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: Object.assign(Object.assign({}, n), {
									templateIds: s.templateIds
								})
							})
						}
						case ee.i:
						case ee.f:
						case ee.m:
						case ee.p:
						case ee.v: {
							const {
								response: s
							} = t.payload;
							return Jf(e, s.postFlair)
						}
						default:
							return e
					}
				},
				Yf = s("./src/reddit/actions/postRequirements/constants.ts");
			const Xf = {};
			var Zf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yf.a: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case Yf.c:
					case Yf.b: {
						const {
							subredditName: s
						} = t.payload;
						return Object(ws.a)(e, s)
					}
					default:
						return e
				}
			};
			const $f = {};
			var ej = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $f,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yf.c:
						case Yf.a:
						case Yf.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === Yf.c;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				tj = Object(S.c)({
					error: Zf,
					pending: ej
				}),
				sj = Object(S.c)({
					fetch: tj
				});
			const nj = {};
			var aj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yf.b: {
							const {
								subredditName: s,
								requirements: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case Yf.d: {
							const {
								subredditName: s,
								partialRequirements: n
							} = t.payload, a = e[s];
							return a ? Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, a), n)
							}) : e
						}
						default:
							return e
					}
				},
				rj = Object(S.c)({
					api: sj,
					models: aj
				}),
				cj = s("./src/reddit/actions/inFeedChaining.ts");
			var ij = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cj.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const oj = {};
			var dj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cj.c: {
						const {
							isDismissed: s,
							listingKey: n,
							postId: a
						} = t.payload;
						if (s) return Object.assign(Object.assign({}, e), {
							[a]: n
						});
						const r = Object.assign({}, e);
						return delete r[a], r
					}
					default:
						return e
				}
			};
			const lj = {};
			var uj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cj.b:
							return Object.assign(Object.assign({}, e), {
								[t.payload.postId]: t.payload.listingKey
							});
						default:
							return e
					}
				},
				bj = Object(S.c)({
					dismissed: ij,
					dismissedIdToListingKey: dj,
					idToListingKey: uj
				});
			var gj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mu.a:
							return t.payload;
						default:
							return e
					}
				},
				pj = s("./src/reddit/actions/embedAndImage.ts");
			const Oj = {};
			var fj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pj.b: {
							const {
								postId: s
							} = t.payload;
							return e[s] ? Object.assign(Object.assign({}, e), {
								[s]: !1
							}) : e
						}
						case pj.a: {
							const {
								postId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
					}
					return e
				},
				jj = Object(S.c)({
					loadable: fj
				});
			const yj = {};
			var hj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mu.b: {
						const {
							postId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !e[s]
						})
					}
					default:
						return e
				}
			};
			var mj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mu.c: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const vj = {};
			var _j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ge.e:
						case Ge.h:
						case te.g:
						case ce.c:
						case Me.b:
						case ie.e:
						case "RECOMMENDED_POSTS_LOADED":
						case oe.i:
						case We.c:
						case re.c:
							return Y()(Object.assign({}, e), t.payload.postInstances, (e, t) => {
								if (e) return e.concat(t)
							});
						default:
							return e
					}
				},
				Ej = s("./src/reddit/actions/isTrackingCrossposts.ts");
			const Ij = {};
			var wj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ij,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ej.a: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const Sj = {};
			var Tj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.h: {
							const {
								poll: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.postId]: s.id
							})
						}
						case te.g:
						case ce.c:
						case oe.i:
						case Me.b:
						case Fe.b:
						case te.b: {
							const {
								governance: s,
								posts: n
							} = t.payload;
							if (s) {
								const t = Object.keys(s).reduce((e, t) => {
									const n = s[t];
									return e[t] = n.poll.id, e
								}, {});
								return Object.assign(Object.assign({}, e), t)
							}
							const a = Object.keys(n).reduce((e, t) => n[t].pollData ? (e[t] = t, e) : e, {});
							return Object.assign(Object.assign({}, e), a)
						}
						default:
							return e
					}
				},
				Cj = s("./src/reddit/actions/flairManagement/constants.ts"),
				Aj = s("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Pj = s("./src/reddit/actions/subredditTopContent.ts"),
				Dj = s("./src/reddit/helpers/isPost.ts"),
				Rj = s("./node_modules/lodash/pickBy.js"),
				kj = s.n(Rj);

			function Nj(e, t) {
				const s = kj()(t, (function(t) {
					let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[s] || !fn()(e[s], t)
				}));
				return Object.keys(s).length > 0 ? Object.assign(Object.assign({}, e), s) : e
			}
			var Lj = s("./src/reddit/models/Media/index.ts"),
				xj = s("./src/reddit/models/Post/index.ts"),
				Mj = s("./src/reddit/actions/subredditDuplicates.ts"),
				Uj = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Fj = {},
				Gj = e => {
					const {
						protocol: t,
						domain: s
					} = e;
					return e => {
						const n = Object(Mf.b)(e.permalink);
						return Object.assign(Object.assign({}, e), {
							permalink: "".concat(t, "://").concat(s).concat(n)
						})
					}
				},
				Bj = e => t => {
					const s = e[t.id];
					return s && s.events && (t.events = s.events, t.source = s.source), t
				},
				qj = e => t => {
					const s = e[t.id];
					return s && s.isSponsored && (t.isSponsored = s.isSponsored), t
				},
				Kj = e => e.media && Object(Lj.F)(e.media) ? Object.assign({}, Object(M.unsetIn)(e, ["source"])) : e,
				Vj = e => t => {
					const s = e[t.id];
					return t && t.media && s && s.media && Object(Lj.I)(t.media) && t.media.isRichtextPreview && Object(Lj.I)(s.media) && !s.media.isRichtextPreview && (t.media.richtextContent = s.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				Hj = e => t => {
					const s = e[t.id];
					return s && s.numDuplicates && (t.numDuplicates = s.numDuplicates), t
				},
				Wj = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = Object.assign(Object.assign({}, t), {
						outboundUrlReceived: Date.now()
					}), e.source = t), e
				},
				Qj = e => {
					const {
						allAwardings: t
					} = e, s = Uj(e, ["allAwardings"]), n = {};
					return t && t.forEach(e => {
						n[e.id] = e.count
					}), Object.assign(Object.assign({}, s), {
						awardCountsById: n
					})
				},
				Jj = e => t => {
					for (let s = 0; s < e.length; s++) t = e[s](t);
					return t
				},
				zj = (e, t) => Object.assign(Object.assign({}, e), {
					events: t.events,
					source: t.source
				});
			var Yj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.a:
						if (wr(t) === (He.Bb.COMMENTS || He.Bb.DUPLICATES)) {
							const s = Sr(t),
								n = Tr(t);
							if (s && s.instanceId && n && n.partialPostId) {
								const t = s.instanceId,
									a = Object(xj.m)(n.partialPostId);
								if (e[a] && e[t]) return Object.assign(Object.assign({}, e), {
									[a]: zj(e[a], e[t])
								})
							}
						}
						return e;
					case Fe.b:
					case te.b: {
						const s = Gj(t.payload.meta);
						return Object.assign(Object.assign({}, e), us()(t.payload.posts, Jj([s, Wj, Qj, Kj, Bj(e), qj(e), Hj(e)])))
					}
					case Mu.g:
						return Nj(e, t.payload);
					case Mj.a:
						return Nj(e, t.payload.posts);
					case Be.b:
					case Iu.b:
					case Ge.e:
					case Ge.h:
					case se.b:
					case se.e:
					case qe.e:
					case qe.b:
					case ne.e:
					case ne.b:
					case ce.c:
					case te.g:
					case te.k:
					case ce.c:
					case mu.b:
					case Ue.r:
					case Me.b:
					case ie.e:
					case "RECOMMENDED_POSTS_LOADED":
					case wu.h:
					case oe.i:
					case Ke.b:
					case vu.e:
					case vu.b:
					case hu.c:
					case hu.d: {
						const s = Gj(t.payload.meta);
						return Object.assign(Object.assign({}, e), us()(t.payload.posts, Jj([s, Wj, Qj, Kj, Vj(e), Hj(e)])))
					}
					case wu.p: {
						if (!t.payload || !t.payload.length) return e;
						const s = {};
						for (const n of t.payload) {
							const t = n,
								a = Gj(t.meta);
							Object.assign(s, us()(t.posts, Jj([a, Wj, Qj, Kj, Vj(e), Hj(e)])))
						}
						return Object.assign(Object.assign({}, e), s)
					}
					case mu.b: {
						const s = Gj(t.payload.meta),
							n = e[t.payload.postId];
						return Object.assign(Object.assign(Object.assign({}, e), us()(t.payload.posts, Jj([s, Wj, Qj, Kj, Vj(e), Hj(e)]))), {
							[t.payload.postId]: Object.assign(Object.assign({}, n), {
								numDuplicates: t.payload.count
							})
						})
					}
					case xe.e:
					case We.c:
					case re.c: {
						const s = Gj(t.payload.meta),
							n = us()(t.payload.posts, Jj([s, Qj, Wj, Kj]));
						return Y()(Object.assign({}, e), n, (e, t) => Object.assign(Object.assign({}, t), e))
					}
					case Mu.h: {
						const s = t.payload;
						return Y()(Object.assign({}, e), s, (e, t) => Object.assign(Object.assign({}, e), t))
					}
					case vn.a: {
						const {
							id: s,
							vote: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object(Tn.c)(a, n)
						}) : e
					}
					case Z.b:
					case X.G: {
						const s = t.payload.comment.postId,
							n = e[s];
						if (n) {
							const a = void 0 !== t.payload.numComments ? t.payload.numComments : n.numComments + 1;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, n), {
									numComments: a
								})
							})
						}
						return e
					}
					case X.y: {
						const s = t.payload.postId,
							n = e[s];
						return n ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								numComments: n.numComments - 1
							})
						}) : e
					}
					case Oe.ob: {
						const {
							topAwardedPosts: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s.reduce((e, t) => (e[t.post.id] = Jj([Qj])(Object(Lr.e)(t.post)), e), {}))
					}
					case Oe.t: {
						const {
							id: s,
							awardings: n,
							gilder: a,
							treatmentTags: r
						} = t.payload, c = e[s];
						return c ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, In(c, n, a)), {
								treatmentTags: r
							})
						}) : e
					}
					case Oe.G: {
						const {
							awardId: s,
							thingId: n
						} = t.payload, a = e[n];
						return a ? Object.assign(Object.assign({}, e), {
							[n]: wn(a, s)
						}) : e
					}
					case T.l: {
						const {
							posts: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case ee.i:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v: {
						const {
							response: s
						} = t.payload, {
							posts: n
						} = s;
						return Object.assign(Object.assign({}, e), us()(n, Jj([Qj, Kj])))
					}
					case hn.b:
					case ee.s: {
						const {
							operation: s,
							ids: n,
							username: a,
							options: r
						} = t.payload, c = n.filter(e => Object(Dj.a)(e)), i = Object(Sn.d)(e, s, c, a, r);
						return Y()(Object.assign({}, e), i, (e, t) => Object.assign(Object.assign({}, e), t))
					}
					case Aa.t: {
						const {
							postId: s,
							collectionId: n
						} = t.payload, a = e[s];
						if (a && n) {
							const t = a.collectionIds || [];
							return t.push(n), Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, a), {
									collectionIds: [...t]
								})
							})
						}
						return e
					}
					case Aa.e: {
						const {
							collectionId: s,
							collection: n
						} = t.payload, a = n && n.postIds || [], r = {};
						return a.forEach(t => {
							const n = e[t],
								a = n && n.collectionIds;
							if (a) {
								const e = a.filter(e => e !== s);
								r[t] = Object.assign(Object.assign({}, n), {
									collectionIds: e
								})
							}
						}), Object.assign(Object.assign({}, e), r)
					}
					case Aa.g: {
						const {
							collectionId: s,
							postId: n
						} = t.payload;
						if (!s || !n) return e;
						const a = e[n],
							r = a && a.collectionIds;
						if (!r) return e;
						const c = r.filter(e => e !== s);
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, a), {
								collectionIds: c
							})
						})
					}
					case hu.f: {
						const {
							postId: s
						} = t.payload;
						if (!s) return e;
						const n = e[s];
						if (!n || !n.eventInfo) return e;
						const a = n.eventInfo;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								eventInfo: Object.assign(Object.assign({}, a), {
									eventIsLive: !0
								})
							})
						})
					}
					case hu.a: {
						const {
							postId: s,
							eventInfo: n
						} = t.payload;
						if (!s || !n) return e;
						const a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								eventInfo: Object.assign({}, n)
							})
						}) : e
					}
					case Mo.g: {
						const s = t.payload.subredditTopContent;
						return s && s.posts && Object.keys(s.posts) ? Object.assign(Object.assign({}, us()(s.posts, Jj([Qj, Kj]))), e) : e
					}
					case ae.c:
					case ae.i:
					case ae.e:
					case ae.g:
					case Pj.b:
						return Object.assign(Object.assign({}, us()(t.payload.posts, Jj([Qj, Kj]))), e);
					case Mu.j: {
						const {
							postId: s,
							richtextContent: n
						} = t.payload, a = e[s];
						return a && a.media && Object(Lj.I)(a.media) ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								media: Object.assign(Object.assign({}, a.media), {
									richtextContent: n,
									isRichtextPreview: !1
								})
							})
						}) : e
					}
					case Cj.a: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: s
						})
					}
					case Cj.b: {
						const s = t.payload;
						return Object(ws.a)(e, s)
					}
					case eb.a: {
						const {
							isDeleted: s,
							height: n,
							postId: a
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, e[a]), {
								media: Object.assign(Object.assign({}, e[a].media), {
									height: n,
									isDeleted: s
								})
							})
						})
					}
					case y.n: {
						const s = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign(Object.assign({}, e), s)
					}
					case Aj.b: {
						const {
							altText: s,
							postId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								media: Object.assign(Object.assign({}, e[n].media), {
									altText: s
								})
							})
						})
					}
					case Aj.a:
						return Object.assign({}, e);
					default:
						return e
				}
			};
			var Xj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mu.f:
							return t.payload;
						default:
							return e
					}
				},
				Zj = s("./src/reddit/actions/postLevelCrowdControl.ts");
			const $j = {};
			var ey = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $j,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zj.a: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const ty = [];
			var sy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ty,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mu.i: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case te.g:
						case ce.c: {
							const {
								recentPostIds: s
							} = t.payload;
							return s && s.length ? s : e
						}
						default:
							return e
					}
				},
				ny = s("./node_modules/uuid/v4.js"),
				ay = s.n(ny);
			const ry = ay()();
			var cy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ry,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Be.b:
					case or.h:
					case or.a:
					case or.m:
					case or.f:
						return ay()();
					default:
						return e
				}
			};
			var iy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case or.d:
					case or.o:
					case or.k:
					case or.g:
					case or.a:
					case or.m:
					case or.f:
						return null;
					case or.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case or.e:
						return "error";
					default:
						return e
				}
			};
			var oy = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case or.g:
						return !0;
					case or.m:
					case or.a:
					case or.f:
					case or.e:
						return !1;
					default:
						return e
				}
			};
			var dy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case or.k:
							return !0;
						case or.j:
						case or.e:
						case or.o:
						case or.d:
							return !1;
						default:
							return e
					}
				},
				ly = Object(S.c)({
					creationToken: cy,
					error: iy,
					pending: oy,
					pendingUpdate: dy
				});
			const uy = {};
			var by = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case or.c: {
						const {
							subredditId: e,
							id: s
						} = t.payload;
						return {
							subredditId: e,
							scheduledPostId: s
						}
					}
					default:
						return e
				}
			};
			const gy = {
				standalonePosts: {
					POSTS_LOADED: or.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: or.o
				},
				recurringPosts: {
					POSTS_LOADED: or.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: or.d
				}
			};

			function py(e) {
				const t = {};
				return function() {
					let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case gy[e].POSTS_LOADED:
						case or.f: {
							const {
								subredditInfoById: t
							} = n.payload, {
								id: a
							} = t, r = t.scheduledPosts[e].models.reduce((e, t) => (e[t.id] = t, e), {});
							return Object.assign(Object.assign({}, s), {
								[a]: Object.assign(Object.assign({}, s[a] || {}), r)
							})
						}
						case or.i:
						case or.l: {
							const {
								subredditId: e,
								scheduledPostId: t
							} = n.payload, a = s[e] || {};
							return Object.assign(Object.assign({}, s), {
								[e]: Object.assign({}, Object.keys(a).filter(e => e !== t).reduce((e, t) => (e[t] = a[t], e), {}))
							})
						}
						case or.h: {
							const {
								subredditId: e
							} = n.payload;
							return Object.keys(s).reduce((t, n) => (n !== e && (t[n] = s[n]), t), {})
						}
						case gy[e].MUTATION_SUCCEEDED: {
							let t;
							switch (e) {
								case "recurringPosts":
									t = n.payload.scheduledPost;
									break;
								case "standalonePosts":
								default:
									t = n.payload.scheduledPost
							}
							const a = t.subreddit.id,
								r = s[a][t.id],
								c = {
									[t.id]: Object.assign(Object.assign({}, r), t)
								};
							return Object.assign(Object.assign({}, s), {
								[a]: Object.assign(Object.assign({}, s[a] || {}), c)
							})
						}
						default:
							return s
					}
				}
			}
			const Oy = {};

			function fy(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oy,
						s = arguments.length > 1 ? arguments[1] : void 0;
					switch (s.type) {
						case gy[e].POSTS_LOADED:
						case or.f: {
							const {
								subredditInfoById: n
							} = s.payload, a = n.id, {
								pageInfo: r
							} = n.scheduledPosts[e];
							return Object.assign(Object.assign({}, t), {
								[a]: Object.assign({}, r)
							})
						}
						case or.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(t).reduce((s, n) => (n !== e && (s[n] = t[n]), s), {})
						}
						default:
							return t
					}
				}
			}
			var jy = s("./node_modules/lodash/uniq.js"),
				yy = s.n(jy);
			const hy = {};

			function my(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hy,
						s = arguments.length > 1 ? arguments[1] : void 0;
					switch (s.type) {
						case gy[e].POSTS_LOADED:
						case or.f: {
							const {
								subredditInfoById: n
							} = s.payload, a = n.id, r = n.scheduledPosts[gy[e].postIdsKey];
							return Object.assign(Object.assign({}, t), {
								[a]: yy()([...t[a] || [], ...r])
							})
						}
						case or.i:
						case or.l: {
							const {
								subredditId: e,
								scheduledPostId: n
							} = s.payload, a = t[e] || [];
							return Object.assign(Object.assign({}, t), {
								[e]: a.filter(e => e !== n)
							})
						}
						case or.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.assign(Object.assign({}, t), {
								[e]: []
							})
						}
						default:
							return t
					}
				}
			}
			var vy = Object(S.c)({
					models: py("recurringPosts"),
					pageInfo: fy("recurringPosts"),
					postOrder: my("recurringPosts"),
					editModal: by
				}),
				_y = Object(S.c)({
					models: py("standalonePosts"),
					pageInfo: fy("standalonePosts"),
					postOrder: my("standalonePosts")
				}),
				Ey = Object(S.c)({
					api: ly,
					standalonePosts: _y,
					recurringPosts: vy
				});
			var Iy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.nb:
						return t.payload;
					case Oe.pb:
					case Oe.ob:
						return null;
					default:
						return e
				}
			};
			var wy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.ob:
						case Oe.nb:
							return !1;
						case Oe.pb:
							return !0;
						default:
							return e
					}
				},
				Sy = Object(S.c)({
					error: Iy,
					pending: wy
				});
			const Ty = [];
			var Cy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ty,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.ob: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case Oe.nb:
						case Oe.pb:
							return Ty;
						default:
							return e
					}
				},
				Ay = Object(S.c)({
					api: Sy,
					list: Cy
				}),
				Py = s("./src/reddit/actions/video.ts");
			const Dy = {};
			var Ry = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.e: {
						const {
							auto: s,
							postId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					default:
						return e
				}
			};
			const ky = {};
			var Ny = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ky,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.a: {
						const {
							postId: s,
							isBuffering: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Ly = {};
			var xy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ly,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.b: {
						const {
							postId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					default:
						return e
				}
			};
			const My = {};
			var Uy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : My,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.c: {
						const {
							postId: s,
							time: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Fy = {
				mutedInFeed: !0
			};
			var Gy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.l:
						return Object.assign(Object.assign({}, e), {
							mutedInFeed: t.payload
						});
					default:
						return e
				}
			};
			var By = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Py.d:
						return null;
					default:
						return e
				}
			};
			const qy = {};
			var Ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.o: {
						const {
							postId: s
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: !1
						}) : e
					}
					case Py.e: {
						const {
							postId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
				}
				return e
			};
			const Vy = {};
			var Hy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.h: {
						const {
							postId: s,
							time: n
						} = t.payload, a = e[s] || {
							cached: !0,
							start: n
						};
						return n < a.start ? e : Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								playable: n
							})
						})
					}
					case Py.f: {
						const {
							postId: s,
							time: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: {
								cached: !1,
								start: n
							}
						})
					}
					default:
						return e
				}
			};
			const Wy = {};
			var Qy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.j: {
						const {
							postId: s,
							metadata: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Jy = {};
			var zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.p: {
						const {
							postId: s
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: !1
						}) : e
					}
					case Py.g: {
						const {
							postId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
				}
				return e
			};
			const Yy = {};
			var Xy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Py.i: {
						const {
							postId: s,
							isPlaying: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Zy = {};
			var $y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Py.m: {
							const {
								postId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						default:
							return e
					}
				},
				eh = s("./src/reddit/constants/video.ts");
			const th = {};
			var sh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Py.n: {
							const {
								postId: s,
								time: n
							} = t.payload;
							return e[s] && Math.abs(Math.floor(n.currentTime) - Math.floor(e[s].currentTime)) < eh.k ? e : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				nh = Object(S.c)({
					autoPlayed: Ry,
					buffering: Ny,
					consumed: xy,
					continuousViewStartedAt: Uy,
					feed: Gy,
					fullscreen: By,
					loadable: Ky,
					loadTimes: Hy,
					metadata: Qy,
					paused: zy,
					playing: Xy,
					started: $y,
					time: sh
				}),
				ah = Object(S.c)({
					chained: bj,
					embedAndImage: jj,
					expanded: hj,
					focus: mj,
					instances: _j,
					isTrackingCrossposts: wj,
					metaMap: Tj,
					models: Yj,
					modToMemberShare: Xj,
					crowdControl: gj,
					postLevelCrowdControl: ey,
					recent: sy,
					scheduledPosts: Ey,
					topAwarded: Ay,
					video: nh
				}),
				rh = s("./src/lib/reducers/addAuthentication/index.ts");
			const ch = {};
			var ih = Object(rh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ch,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.b:
						case te.b: {
							const {
								postId: s,
								commentLists: n,
								comments: a
							} = t.payload, r = n[s] && n[s].head;
							return r && a[r.id] && a[r.id].isStickied ? Object.assign(Object.assign({}, e), {
								[s]: r.id
							}) : e
						}
						case X.C: {
							const {
								id: e,
								postId: s
							} = t.payload;
							return {
								[s]: e
							}
						}
						default:
							return e
					}
				}), ch),
				oh = Object(S.c)({
					data: ih
				});
			const dh = {};
			var lh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case g.f:
					case g.g: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: void 0
						})
					}
					case g.e: {
						const {
							subredditId: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const uh = {};
			var bh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case g.f: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case g.g:
						case g.e: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				gh = Object(S.c)({
					error: lh,
					pending: bh
				});
			const ph = {};
			var Oh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ph,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case g.d: {
						const {
							product: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: void 0
						})
					}
					case g.c:
					case l.f:
					case l.g:
					case l.i:
					case l.j: {
						const {
							productId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: void 0
						})
					}
					case g.a:
					case l.d:
					case l.h: {
						const {
							productId: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const fh = {};
			var jh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case g.c:
						case l.f: {
							const {
								productId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case g.d: {
							const {
								product: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.id]: !1
							})
						}
						case g.a:
						case l.d:
						case l.g: {
							const {
								productId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				yh = Object(S.c)({
					error: Oh,
					pending: jh
				}),
				hh = Object(S.c)({
					fetch: gh,
					purchase: yh
				});
			var mh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case g.b:
						return t.payload.productId;
					case n.b:
						return null;
					default:
						return e
				}
			};
			const vh = {};
			var _h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.i:
						case g.g: {
							const {
								products: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				Eh = Object(S.c)({
					api: hh,
					currentlyPurchasing: mh,
					models: _h
				});
			const Ih = {};
			var wh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ih,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.f:
					case se.e:
					case se.c:
					case se.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case se.d:
					case se.a: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
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
						case se.f:
						case se.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case se.e:
						case se.d:
						case se.b:
						case se.a: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Ch = Object(S.c)({
					error: wh,
					pending: Th
				});
			const Ah = {};
			var Ph = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ah,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case se.e: {
							const {
								key: s,
								commentIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case se.b: {
							const {
								key: s,
								commentIds: n
							} = t.payload, a = e[s] || [];
							return Object.assign(Object.assign({}, e), {
								[s]: a.concat(n)
							})
						}
						default:
							return e
					}
				},
				Dh = s("./src/reddit/actions/comment/list.ts");
			const Rh = {};
			var kh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dh.a: {
						const {
							listingKey: s,
							listingName: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case Dh.b: {
						const {
							listingKey: s
						} = t.payload;
						return s in e ? yn()(e, s) : e
					}
					default:
						return e
				}
			};
			const Nh = {};
			var Lh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.e: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: {}
						})
					}
					case se.b: {
						const {
							key: s,
							fetchedToken: n
						} = t.payload, a = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								[n]: !0
							})
						})
					}
					default:
						return e
				}
			};
			const xh = {};
			var Mh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case se.e:
						case se.b: {
							const {
								key: s,
								dist: n,
								token: a
							} = t.payload;
							return a ? Object.assign(Object.assign({}, e), {
								[s]: {
									dist: n,
									token: a
								}
							}) : Object(ws.a)(e, s)
						}
						default:
							return e
					}
				},
				Uh = Object(S.c)({
					api: Ch,
					endMarkers: kh,
					fetchedTokens: Lh,
					commentIds: Ph,
					loadMore: Mh
				}),
				Fh = s("./src/reddit/actions/pages/profileModSettings.ts");
			var Gh = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fh.a:
							return !1;
						default:
							return e
					}
				},
				Bh = Object(S.c)({
					pending: Gh
				}),
				qh = Object(S.c)({
					api: Bh
				});
			const Kh = {};
			var Vh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qe.c:
					case qe.b:
					case Ke.c:
					case Ke.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case qe.a:
					case Ke.a: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Hh = {};
			var Wh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qe.c:
						case Ke.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case qe.b:
						case qe.a:
						case Ke.b:
						case Ke.a: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Qh = Object(S.c)({
					error: Vh,
					pending: Wh
				});
			const Jh = {};
			var zh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qe.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: {}
						})
					}
					case Ke.b: {
						const {
							key: s,
							fetchedToken: n
						} = t.payload, a = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								[n]: !0
							})
						})
					}
					default:
						return e
				}
			};
			const Yh = {};
			var Xh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qe.b:
					case Ke.b: {
						const {
							key: s,
							overviewIds: n
						} = t.payload, a = e[s] || [];
						return Object.assign(Object.assign({}, e), {
							[s]: [...a, ...n]
						})
					}
					default:
						return e
				}
			};
			const Zh = {};
			var $h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qe.b:
						case Ke.b: {
							const {
								key: s,
								dist: n,
								token: a
							} = t.payload;
							return a ? Object.assign(Object.assign({}, e), {
								[s]: {
									dist: n,
									token: a
								}
							}) : Object(ws.a)(e, s)
						}
						default:
							return e
					}
				},
				em = Object(S.c)({
					api: Qh,
					fetchedTokens: zh,
					ids: Xh,
					loadMore: $h
				});
			const tm = {};
			var sm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qe.f:
					case qe.e: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case qe.d: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n || {}
						})
					}
					default:
						return e
				}
			};
			const nm = {};
			var am = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qe.f: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case qe.e:
						case qe.d: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				rm = Object(S.c)({
					error: sm,
					pending: am
				});
			const cm = {};
			var im = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ie.c:
					case ie.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case ie.a: {
						const {
							extraCommentsId: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n || {}
						})
					}
					default:
						return e
				}
			};
			const om = {};
			var dm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : om,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ie.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ie.b:
						case ie.a: {
							const {
								extraCommentsId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				lm = Object(S.c)({
					error: im,
					pending: dm
				});
			const um = {};
			var bm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : um,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qe.e:
						case ie.b:
						case ie.e:
							return Object.assign(Object.assign({}, e), t.payload.extraComments);
						default:
							return e
					}
				},
				gm = Object(S.c)({
					api: lm,
					models: bm
				}),
				pm = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				Om = s("./src/reddit/constants/comments.ts");
			const fm = {};

			function jm(e) {
				const t = e;
				return us()(t, e => {
					let {
						depth: t,
						next: s,
						prev: n
					} = e;
					return {
						depth: t,
						next: s,
						prev: n
					}
				})
			}
			const ym = (e, t, s) => {
				const n = {};
				for (const a in t) {
					const e = t[a],
						s = e.postId;
					n.hasOwnProperty(s) ? n[s] = Object.assign(Object.assign({}, n[s]), {
						[a]: e
					}) : n[s] = {
						[a]: e
					}
				}
				for (const a in s) {
					const e = s[a],
						t = e.postId;
					n.hasOwnProperty(t) ? n[t] = Object.assign(Object.assign({}, n[t]), {
						[a]: e
					}) : n[t] = {
						[t]: e
					}
				}
				return n
			};
			var hm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qe.e:
					case ie.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: a,
							profileName: r
						} = t.payload, c = ym(a, s, n), i = {};
						for (const e of a) {
							i[Object(pm.a)(e, r)] = c.hasOwnProperty(e) ? jm(c[e]) : {}
						}
						return Object.assign(Object.assign({}, e), i)
					}
					case ie.b: {
						const {
							comments: s,
							commentLists: n,
							extraComments: a,
							extraCommentsId: r,
							postIds: c,
							profileName: i
						} = t.payload;
						if (0 === c.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][r]);
							if (!t) return e;
							const s = Object.assign({}, e[t])[r].prev,
								n = s && s.id || "";
							return Object.assign(Object.assign({}, e), {
								[t]: Object.assign(Object.assign({}, e[t]), {
									[n]: Object.assign(Object.assign({}, e[t][n]), {
										next: null
									})
								})
							})
						}
						const o = c[0],
							d = jm(ym(c, s, a)[o]),
							l = Object(pm.a)(o, i),
							u = Object.assign({}, e[l]),
							b = u[r].prev,
							g = b && b.id || "",
							p = n[o].head,
							O = p && p.id || "",
							f = {
								id: O,
								type: Om.a.Comment
							},
							j = Object.assign(Object.assign(Object.assign(Object.assign({}, u), {
								[g]: Object.assign(Object.assign({}, u[g]), {
									next: f
								})
							}), d), {
								[O]: Object.assign(Object.assign({}, d[O]), {
									prev: b
								})
							});
						return Object.assign(Object.assign({}, e), {
							[l]: j
						})
					}
					default:
						return e
				}
			};
			const mm = {};
			var vm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qe.e:
					case ie.e: {
						const {
							commentLists: s,
							postIds: n,
							profileName: a
						} = t.payload, r = {};
						for (const e of n) {
							r[Object(pm.a)(e, a)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return Object.assign(Object.assign({}, e), r)
					}
					default:
						return e
				}
			};
			const _m = {};
			var Em = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qe.e:
						case ie.e: {
							const {
								postIds: s,
								profileName: n
							} = t.payload, a = {};
							for (const e of s) {
								a[Object(pm.a)(e, n)] = e
							}
							return Object.assign(Object.assign({}, e), a)
						}
						default:
							return e
					}
				},
				Im = Object(S.c)({
					api: rm,
					extraComments: gm,
					keyToCommentThreadLinkSets: hm,
					keyToHeadCommentId: vm,
					keyToPostId: Em
				}),
				wm = Object(S.c)({
					chrono: em,
					conversations: Im
				});
			const Sm = {};
			var Tm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const Cm = {};
			var Am = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ae.a:
					case ae.d: {
						const {
							listingKey: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case ae.b:
					case ae.c:
					case ae.i:
					case ae.f:
					case ae.e:
					case ae.g: {
						const {
							listingKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					default:
						return e
				}
			};
			const Pm = {};
			var Dm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ae.b:
						case ae.f: {
							const {
								listingKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ae.a:
						case ae.d:
						case ae.c:
						case ae.i:
						case ae.e:
						case ae.g: {
							const {
								listingKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Rm = Object(S.c)({
					error: Am,
					pending: Dm
				});
			const km = {};
			var Nm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : km,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ae.c:
					case ae.i:
					case ae.e:
					case ae.g: {
						const {
							listingKey: s,
							itemIds: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: [...e[s] || [], ...n]
						})
					}
					default:
						return e
				}
			};
			const Lm = {};
			var xm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ae.i:
						case ae.c:
						case ae.e:
						case ae.g: {
							const {
								pageInfo: s,
								listingKey: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: s
							}) : Lm
						}
						default:
							return e
					}
				},
				Mm = Object(S.c)({
					api: Rm,
					ids: Nm,
					pageInfo: xm
				}),
				Um = s("./src/reddit/constants/posts.ts");
			const Fm = {};
			var Gm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.c:
					case We.c:
						return Object.assign(Object.assign({}, e), t.payload.profileAboutInfo);
					case OO.k: {
						const s = t.payload;
						return s.profile ? Object.assign(Object.assign({}, e), {
							[s.profile.id]: s.about
						}) : e
					}
					case yO.h: {
						const {
							identifiers: s,
							userIsSubscriber: n
						} = t.payload, a = s.filter(e => e.type === Um.a.PROFILE);
						return a.length ? a.reduce((e, t) => (e[t.id] = Object.assign(Object.assign({}, e[t.id]), {
							userIsSubscriber: n
						}), e), Object.assign({}, e)) : e
					}
					case Bu.n: {
						const s = t.payload,
							n = e[s.subredditId];
						if (!n) return e;
						if (n.publicDescription === s.settings.publicDescription) return e;
						const a = Object.assign(Object.assign({}, n), {
							publicDescription: s.settings.publicDescription
						});
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: a
						})
					}
					default:
						return e
				}
			};
			const Bm = {},
				qm = (e, t) => {
					if (!t) return e;
					const s = Object.keys(t);
					if (!s.length) return e;
					const n = {};
					return s.forEach(s => {
						const a = e[s],
							r = Object.assign({}, t[s]);
						a && fn()(a, r) || (n[s] = r)
					}), Object.keys(n).length ? Object.assign(Object.assign({}, e), n) : e
				};
			var Km = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Me.b:
					case Fe.b:
					case te.b:
					case te.g:
					case se.b:
					case se.e:
					case ae.c:
					case ae.i:
					case ae.e:
					case ae.g:
					case qe.b:
					case qe.e:
					case ne.e:
					case Ke.b:
					case Me.b:
					case Ge.e:
					case Ge.h:
					case Ue.u:
					case OO.h:
					case mu.b:
					case We.c:
					case oe.i:
					case OO.m:
					case ie.b:
					case ie.e:
					case re.c:
					case Be.b:
					case Na.e:
					case _r.a:
					case ce.c:
					case te.k:
					case "RECOMMENDED_POSTS_LOADED":
					case yO.c:
						return qm(e, t.payload.profiles);
					case We.e: {
						const {
							typeaheadSuggestions: s
						} = t.payload;
						return Object.keys(s).length ? qm(e, s.profiles) : e
					}
					case ee.i:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v:
					case ee.k: {
						const {
							response: s
						} = t.payload, n = s && s.profiles;
						return qm(e, n)
					}
					case OO.l:
					case OO.k: {
						const {
							profile: s
						} = t.payload;
						return s ? qm(e, {
							[s.id]: s
						}) : e
					}
					case Bu.n: {
						const s = t.payload,
							{
								title: n,
								over18: a
							} = s.settings,
							r = e[s.subredditId];
						return !r || r.title === n && r.isNSFW === a ? e : Object.assign(Object.assign({}, e), {
							[s.subredditId]: Object.assign(Object.assign({}, r), {
								id: s.subredditId,
								title: n,
								isNSFW: a
							})
						})
					}
					case Bu.l:
					case Bu.k: {
						const {
							imageUrl: s,
							key: n,
							subredditId: a
						} = t.payload;
						if ("profileIcon" !== n) return e;
						const r = e[a];
						return r ? Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, r), {
								icon: {
									height: null,
									url: s,
									width: null
								}
							})
						}) : e
					}
					default:
						return e
				}
			};
			const Vm = {};
			var Hm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case OO.c:
						case OO.f: {
							const {
								profileName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[(s || "").toLowerCase()]: !0
							})
						}
						case OO.a:
						case OO.b:
						case OO.d:
						case OO.e: {
							const {
								profileName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[(s || "").toLowerCase()]: !1
							})
						}
						default:
							return e
					}
				},
				Wm = Object(S.c)({
					pending: Hm
				});
			const Qm = {};
			var Jm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case OO.b: {
						const {
							profileName: s,
							data: n
						} = t.payload, a = n.map(e => e.id);
						return Object.assign(Object.assign({}, e), {
							[(s || "").toLowerCase()]: a
						})
					}
					case OO.e:
					case ae.c:
					case ae.i:
					case ae.e:
					case ae.g: {
						const {
							profileName: s,
							moderatedSubredditIds: n
						} = t.payload;
						return n ? Object.assign(Object.assign({}, e), {
							[s]: [...e[s] || [], ...n]
						}) : e
					}
					default:
						return e
				}
			};
			const zm = {};
			var Ym = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case OO.e: {
							const {
								pageInfo: s,
								profileName: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						case ae.c:
						case ae.i: {
							const {
								moderatedPageInfo: s,
								profileName: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						default:
							return e
					}
				},
				Xm = Object(S.c)({
					api: Wm,
					models: Jm,
					pageInfo: Ym
				});
			const Zm = {};
			var $m = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case OO.i: {
							const {
								profileName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !0
							})
						}
						case OO.g:
						case OO.h: {
							const {
								profileName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !1
							})
						}
						default:
							return e
					}
				},
				ev = Object(S.c)({
					pending: $m
				});
			const tv = {};
			var sv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case OO.h: {
							const {
								pageInfo: s,
								profileName: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						default:
							return e
					}
				},
				nv = Object(S.c)({
					api: ev,
					pageInfo: sv
				}),
				av = s("./src/reddit/actions/pinnedPost.ts");
			const rv = {};
			var cv = Object(rh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case av.a: {
						const {
							pinned: s,
							profileId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case av.d: {
						const {
							postId: s,
							profileId: n
						} = t.payload, a = e[n] || [];
						return Object.assign(Object.assign({}, e), {
							[n]: [...a, s].slice(-He.V)
						})
					}
					case av.g: {
						const {
							postId: s,
							profileId: n
						} = t.payload, a = e[n] || [];
						return Object.assign(Object.assign({}, e), {
							[n]: a.filter(e => e !== s)
						})
					}
					default:
						return e
				}
			}), rv);
			const iv = {};
			var ov = Object(rh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case av.a: {
						const {
							pinned: s,
							profileId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					default:
						return e
				}
			}), iv);
			const dv = {};
			var lv = Object(rh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case av.c:
						case av.f: {
							const {
								postId: s,
								profileId: n
							} = t.payload, a = e[n] || [];
							return Object.assign(Object.assign({}, e), {
								[n]: [...a, s]
							})
						}
						case av.b:
						case av.e:
						case av.d:
						case av.g: {
							const {
								postId: s,
								profileId: n
							} = t.payload, a = e[n] || [];
							return Object.assign(Object.assign({}, e), {
								[n]: a.filter(e => e !== s)
							})
						}
						default:
							return e
					}
				}), dv),
				uv = Object(S.c)({
					data: cv,
					initialData: ov,
					pending: lv
				}),
				bv = s("./src/reddit/actions/trophyCase.ts");
			const gv = {};
			var pv, Ov, fv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bv.a: {
							const {
								profileId: s,
								trophyIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				jv = Object(S.c)({
					about: Gm,
					models: Km,
					moderated: Xm,
					multireddits: nv,
					pinnedPosts: uv,
					trophyCases: fv
				});
			s("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(pv || (pv = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Ov || (Ov = {}));
			var yv, hv, mv;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(yv || (yv = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(hv || (hv = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(mv || (mv = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(yv || (yv = {}));
			Object(Ve.a)("PROMO__SHOW_PROMO"), Object(Ve.a)("PROMO__HIDE_PROMO");
			const vv = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var _v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "PROMO__SHOW_PROMO": {
							const {
								promoType: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case "PROMO__HIDE_PROMO": {
							const {
								promoType: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Ev = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Iv = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Ev.d,
					viewer_streams_refresh: Ev.c,
					viewer_streams_refresh_slop: Ev.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var wv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ev.w:
							return Object.assign(Object.assign({}, e), {
								isError: !1,
								isPending: !1,
								global: Object.assign({}, t.payload)
							});
						case Ev.x: {
							const s = t.payload.name.toLowerCase();
							return Object.assign(Object.assign({}, e), {
								isError: !1,
								isPending: !1,
								subreddits: Object.assign(Object.assign({}, e.subreddits), {
									[s]: Object.assign({}, t.payload.config)
								})
							})
						}
						case Ev.G:
							return Object.assign(Object.assign({}, e), {
								isPending: !0
							});
						case Ev.I:
							return Object.assign(Object.assign({}, e), {
								isError: !0,
								isPending: !1
							});
						case Ev.H:
							return Object.assign(Object.assign({}, e), {
								isPermanentlyCanceled: !0,
								isPending: !1
							});
						default:
							return e
					}
				},
				Sv = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			var Tv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.L:
						return Object.assign(Object.assign({}, e), {
							[Ev.b]: t.payload.error
						});
					case Ev.M:
						return Object.assign(Object.assign({}, e), {
							[t.payload.streamId]: t.payload.error
						});
					case Ev.z: {
						const t = e,
							s = Ev.b;
						t[s];
						return Sv(t, ["symbol" == typeof s ? s : s + ""])
					}
					case Ev.y: {
						const s = e,
							n = t.payload.model.post.id;
						s[n];
						return Sv(s, ["symbol" == typeof n ? n : n + ""])
					}
					default:
						return e
				}
			};
			const Cv = (e, t, s, n) => Object.assign(Object.assign({}, e), {
				[t]: Object.assign(Object.assign(Object.assign({}, e[t]), {
					isPending: s
				}), n && {
					utcTimeStamp: n
				})
			});
			var Av = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.N:
						return Cv(e, t.payload, !0);
					case Ev.O:
						return Cv(e, Ev.b, !0);
					case Ev.y:
						return Cv(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Ev.z:
						return Cv(e, Ev.b, !1, t.payload.utcTimeStamp);
					case Ev.M:
						return Cv(e, t.payload.streamId, !1);
					case Ev.L:
						return Cv(e, Ev.b, !1);
					default:
						return e
				}
			};
			const Pv = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var Dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ev.v:
							return Object.assign(Object.assign({}, e), {
								isError: !1,
								isPending: !1,
								subreddits: t.payload.subreddits
							});
						case Ev.J:
							return Object.assign(Object.assign({}, e), {
								isError: !1,
								isPending: !0
							});
						case Ev.K:
							return Object.assign(Object.assign({}, e), {
								isError: !0,
								isPending: !1
							});
						default:
							return e
					}
				},
				Rv = Object(S.c)({
					config: wv,
					error: Tv,
					pending: Av,
					recommendedViewerSubreddits: Dv
				});
			const kv = {};
			var Nv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.r:
						return Object.assign(Object.assign({}, e), {
							[t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						});
					case Ev.F:
						return Object.assign(Object.assign({}, e), {
							[t.payload]: {
								level: 0,
								error: !0
							}
						});
					default:
						return e
				}
			};
			const Lv = {
				cursor: Ev.W,
				timestamps: {},
				visitOrder: []
			};
			var xv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.P:
						return Lv;
					case Ev.X: {
						const s = t.payload,
							n = e.visitOrder.includes(s) ? e.visitOrder : [...e.visitOrder, s],
							a = n.indexOf(s);
						return n === e.visitOrder && a === e.cursor ? e : Object.assign(Object.assign({}, e), {
							visitOrder: n,
							cursor: a
						})
					}
					case p.d:
						return Mv(e, t.payload.id);
					case Ev.E:
						return Mv(e, t.payload);
					case Mu.h: {
						const s = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Uv(e, s)
					}
					case Ev.V: {
						const {
							streamId: s,
							timestamp: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							timestamps: Object.assign(Object.assign({}, e.timestamps), {
								[s]: n
							})
						})
					}
					default:
						return e
				}
			};
			const Mv = (e, t) => {
					const s = e.visitOrder.indexOf(t);
					if (-1 === s) return e;
					const n = s > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return Object.assign(Object.assign({}, e), {
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: n
					})
				},
				Uv = (e, t) => {
					const s = e.visitOrder[e.cursor],
						n = new Set(t),
						a = e.visitOrder.filter(e => !n.has(e)),
						r = a.indexOf(s),
						c = r > -1 ? r : Math.max(e.cursor - 1, 0);
					return a.length !== e.visitOrder.length ? Object.assign(Object.assign({}, e), {
						cursor: c,
						visitOrder: a
					}) : e
				},
				Fv = {
					ended: [],
					removed: []
				};

			function Gv(e) {
				return [...new Set(e)]
			}
			var Bv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.t:
						return Object.assign(Object.assign({}, e), {
							ended: Gv(e.ended.concat(t.payload))
						});
					case Ev.u:
						return Object.assign(Object.assign({}, e), {
							removed: Gv(e.removed.concat(t.payload))
						});
					default:
						return e
				}
			};
			const qv = {};
			var Kv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.z:
						const {
							listingName: s, models: n
						} = t.payload;
						if (!s) return e;
						const a = n.map(e => e.post.id),
							r = e[s] || [],
							c = [...new Set([...a, ...r])];
						return Object.assign(Object.assign({}, e), {
							[s]: c
						});
					default:
						return e
				}
			};
			const Vv = {},
				Hv = (e, t) => {
					const s = Object.keys(e).reduce((t, s) => Object.assign(Object.assign({}, t), {
						[s]: Object.assign(Object.assign({}, e[s]), {
							rank: Ev.m
						})
					}), {});
					return t.reduce((e, t, s) => Object.assign(Object.assign({}, e), {
						[t.post.id]: Object.assign(Object.assign({}, t), {
							rank: Ev.l - s
						})
					}), s)
				},
				Wv = (e, t) => {
					const s = t.post.id,
						n = e[s] ? e[s].rank : Ev.m;
					return Object.assign(Object.assign({}, e), {
						[t.post.id]: Object.assign(Object.assign({}, t), {
							rank: n
						})
					})
				};
			var Qv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.y:
						return Wv(e, t.payload.model);
					case Ev.z:
						return Hv(e, t.payload.models);
					case Ev.D: {
						const s = t.payload.streamId,
							n = t.payload.isUnsetting ? -1 : 1,
							a = (t.payload.isUp ? 1 : 0) * n,
							r = (t.payload.isUp ? 0 : 1) * n;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								downvotes: e[s].downvotes + r,
								upvotes: e[s].upvotes + a
							})
						})
					}
					default:
						return e
				}
			};
			const Jv = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var zv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.s:
						return Object.assign(Object.assign({}, e), {
							discoveryUnitThumbnails: Object.assign({}, t.payload.reduce((e, t) => Object.assign(Object.assign({}, e), {
								[t.postId]: t.imageUrl
							}), {}))
						});
					case Ev.A:
						return Object.assign(Object.assign({}, e), {
							streamPreviews: Object.assign(Object.assign({}, e.streamPreviews), t.payload.reduce((e, t) => Object.assign(Object.assign({}, e), {
								[t.postId]: t.imageUrl
							}), {}))
						});
					default:
						return e
				}
			};
			const Yv = {
				reported: []
			};
			var Xv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.d:
						return Object.assign(Object.assign({}, e), {
							reported: [...e.reported, t.payload.id]
						});
					default:
						return e
				}
			};
			const Zv = {
				isIntroFinished: !1
			};
			var $v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.B:
						return Object.assign(Object.assign({}, e), t.payload);
					default:
						return e
				}
			};
			const e_ = {
				isMuted: !0,
				reportedStreams: [],
				shouldShowOnboardingModal: !0
			};
			var t_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ev.C:
							return Object.assign(Object.assign({}, e), t.payload);
						case p.d: {
							const s = t.payload.id;
							return e.reportedStreams.includes(s) ? e : Object.assign(Object.assign({}, e), {
								reportedStreams: [...e.reportedStreams, s]
							})
						}
						default:
							return e
					}
				},
				s_ = Object(S.c)({
					api: Rv,
					history: xv,
					hlsStreams: Bv,
					listings: Kv,
					models: Qv,
					preloads: zv,
					reports: Xv,
					theaterSettings: $v,
					userSettings: t_,
					automuteLevels: Nv
				});
			const n_ = {};
			var a_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "RECOMMENDED_POSTS_LOADED":
							return Object.assign(Object.assign({}, e), t.payload);
						case "RECOMMENDED_POSTS_FAILED":
						default:
							return e
					}
				},
				r_ = s("./src/reddit/actions/removalReasons/constants.ts");
			var c_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r_.k:
					case r_.l:
					case r_.b:
					case r_.c:
					case r_.h:
					case r_.i:
					case r_.e:
					case r_.f:
						return null;
					case r_.j:
					case r_.a:
					case r_.g:
					case r_.d:
						return t.payload;
					default:
						return e
				}
			};
			var i_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r_.k:
						case r_.b:
						case r_.h:
						case r_.e:
							return !0;
						case r_.l:
						case r_.j:
						case r_.c:
						case r_.a:
						case r_.i:
						case r_.g:
						case r_.f:
						case r_.d:
							return !1;
						default:
							return e
					}
				},
				o_ = Object(S.c)({
					error: c_,
					pending: i_
				}),
				d_ = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const l_ = {};
			var u_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r_.l: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return Object.assign(Object.assign({}, e), n)
					}
					case r_.c:
					case r_.i: {
						const {
							reason: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: s
						})
					}
					case r_.f: {
						const {
							reasonId: s
						} = t.payload, n = e, a = s;
						n[a];
						return d_(n, ["symbol" == typeof a ? a : a + ""])
					}
					default:
						return e
				}
			};
			const b_ = {};
			var g_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r_.l: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: a
						} = n;
						return Object.assign(Object.assign({}, e), {
							[s]: a
						})
					}
					case r_.c: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: [...e[s], n.id]
						})
					}
					case r_.f: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, a = [...e[s]].filter(e => e !== n);
						return Object.assign(Object.assign({}, e), {
							[s]: a
						})
					}
					default:
						return e
				}
			};
			var p_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r_.t: {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				O_ = Object(S.c)({
					api: o_,
					models: u_,
					reasonOrder: g_,
					removedItemIds: p_
				});
			const f_ = {};
			var j_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.e:
					case p.d: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !1
						})
					}
					case p.c: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case p.f: {
						const s = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[s]: !1
						}) : e
					}
					default:
						return e
				}
			};
			const y_ = {};
			var h_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.e: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case p.d:
					case p.c: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !1
						})
					}
					case p.f: {
						const s = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[s]: !1
						}) : e
					}
					default:
						return e
				}
			};
			const m_ = {};
			var v_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case p.d: {
							const {
								id: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case p.e:
						case p.c: {
							const {
								id: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case p.f: {
							const s = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[s]: !1
							}) : e
						}
						default:
							return e
					}
				},
				__ = Object(S.c)({
					error: j_,
					pending: h_,
					success: v_
				});
			var E_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.a:
						return t.payload;
					case n.c:
						return !t.payload && e;
					case u.a:
						return !1;
					case p.f:
						return !!t.payload && e;
					default:
						return e
				}
			};
			var I_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.f:
						return t.payload;
					case n.c:
						return t.payload ? null : e;
					case u.a:
						return null;
					default:
						return e
				}
			};
			var w_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.g:
						return t.payload;
					case p.f:
						return !1;
					default:
						return e
				}
			};
			var S_ = Object(S.c)({
					api: __,
					openedFromModalPage: E_,
					postOrCommentId: I_,
					userIsMod: w_,
					rulesCategory: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case p.b:
								return t.payload
						}
						return e
					}
				}),
				T_ = s("./src/reddit/actions/pages/report/constants.ts");
			var C_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T_.a:
						return t.payload;
					default:
						return e
				}
			};
			var A_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T_.b:
						return t.payload;
					case T_.c:
					case T_.d:
						return !1;
					default:
						return e
				}
			};
			var P_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T_.d:
						return !0;
					case T_.c:
					case T_.b:
						return !1;
					default:
						return e
				}
			};
			var D_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T_.c:
							return !0;
						case T_.b:
						case T_.d:
							return !1;
						default:
							return e
					}
				},
				R_ = Object(S.c)({
					error: A_,
					pending: P_,
					success: D_
				}),
				k_ = s("./src/reddit/actions/reportPageRules/constants.ts");
			const N_ = [];
			var L_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k_.a:
							return t.payload;
						default:
							return e
					}
				},
				x_ = Object(S.c)({
					reportPageApi: R_,
					reportPageRules: L_,
					initialReason: C_
				}),
				M_ = s("./src/reddit/actions/reportRules.ts");
			const U_ = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var F_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M_.b:
						return Object.assign(Object.assign({}, e), {
							sitewideRules: t.payload
						});
					case M_.a:
						return Object.assign(Object.assign({}, e), {
							liveStreamingRules: t.payload
						});
					default:
						return e
				}
			};
			Object(Ve.a)("REQUEST_HOST_SET");
			var G_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const B_ = "RUN_TIME_ENV_VARS__IS_STAGING",
				q_ = (Object(Ve.a)(B_), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var K_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B_:
						return Object.assign(Object.assign({}, e), {
							staging: !0
						});
					default:
						return e
				}
			};
			const V_ = Object.create(null);
			var H_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case We.d: {
						const {
							relatedQueries: s,
							query: n
						} = t.payload;
						if (s) {
							const t = n ? n.toLowerCase() : "";
							return Object.assign(Object.create(null), e, {
								[t]: s
							})
						}
						return e
					}
					default:
						return e
				}
			};
			var W_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.c:
					case We.f: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const Q_ = Object.create(null);
			var J_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case We.e: {
							const {
								order: s,
								searchQuery: n
							} = t.payload;
							return Object.assign(Object.create(null), e, Object.assign(Object.assign({}, e), {
								[n.toLowerCase()]: s
							}))
						}
						default:
							return e
					}
				},
				z_ = s("./src/reddit/models/Search/index.ts");
			const Y_ = {};
			var X_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case We.e: {
							const {
								typeaheadSuggestions: s
							} = t.payload, n = {};
							return Object.keys(s).forEach(e => {
								const t = s[e];
								return n[e] = Object(z_.d)(t)
							}), Object.assign(Object.assign({}, e), n)
						}
						default:
							return e
					}
				},
				Z_ = Object(S.c)({
					idsByQuery: J_,
					models: X_
				});
			const $_ = {};
			var eE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case re.c: {
							const {
								viewTreatment: s,
								key: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: s
							}) : e
						}
						default:
							return e
					}
				},
				tE = Object(S.c)({
					relatedQueries: H_,
					searchQuery: W_,
					typeahead: Z_,
					viewTreatment: eE
				}),
				sE = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const nE = {};
			var aE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.c: {
						const {
							categoryName: s,
							key: n,
							listingOrder: a,
							postOrder: r,
							posts: c,
							searchQuery: i,
							subreddits: o,
							viewTreatment: d
						} = t.payload, l = {
							subredditIcons: [],
							displayText: null,
							subredditOccurrences: 0,
							searchQuery: i
						};
						if (d === sE.c.Trending || s) {
							const e = [];
							if (a && a.map(t => {
									!e.includes(t.id) && o[t.id] && (e.push(t.id), l.subredditIcons.push({
										url: o[t.id].icon.url,
										subredditName: o[t.id].name
									}), l.displayText || (l.displayText = o[t.id].displayText))
								}), r)
								for (let t = 0; t < r.length; t++) {
									const s = c[r[t]],
										n = s && s.belongsTo ? s.belongsTo.id : void 0;
									n && !e.includes(n) && o[n] && (e.push(n), l.subredditIcons.push({
										url: o[n].icon.url,
										subredditName: o[n].name
									}))
								}
							o && (l.subredditOccurrences = Object.keys(o).length - 1)
						}
						return Object.assign(Object.assign({}, e), {
							[n]: l
						})
					}
					default:
						return e
				}
			};
			const rE = {};
			var cE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.c: {
						const {
							key: s,
							searchDiscoveryUnits: n
						} = t.payload;
						return n && Object.keys(n).length ? Object.assign(Object.assign({}, e), {
							[s]: n
						}) : e
					}
					default:
						return e
				}
			};
			const iE = {};
			var oE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case re.c: {
							const {
								key: s,
								searchDiscoveryUnitOrder: n
							} = t.payload;
							return n ? Object.assign(Object.assign({}, e), {
								[s]: n
							}) : iE
						}
						default:
							return e
					}
				},
				dE = Object(S.c)({
					headerContent: aE,
					models: cE,
					order: oE
				});
			Object(Ve.a)("SEO__CRAWLER_RECEIVED");
			var lE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				uE = s("./src/reddit/actions/seo/linksModule.ts");
			const bE = {};
			var gE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case uE.a:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? Object.assign(Object.assign({}, e), {
								frontpage: t.payload
							}) : e;
						case uE.b:
							return t.payload && t.payload.id && t.payload.data ? Object.assign(Object.assign({}, e), {
								subreddits: Object.assign(Object.assign({}, e.subreddits), {
									[t.payload.id]: t.payload.data
								})
							}) : e;
						default:
							return e
					}
				},
				pE = Object(S.c)({
					crawler: lE,
					linksModule: gE
				}),
				OE = s("./src/reddit/actions/shortcuts/constants.ts");
			var fE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case OE.a:
						return t.payload;
					case u.a:
						return null;
					default:
						return e
				}
			};
			var jE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case OE.b:
							return t.payload || null;
						default:
							return e
					}
				},
				yE = s("./src/reddit/constants/history.ts"),
				hE = s("./src/reddit/constants/shortcuts.ts"),
				mE = s("./src/reddit/helpers/history/index.ts");
			const vE = hE.d.Global,
				_E = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(mE.b)(yE.a.IsOverlay) ? hE.d.Lightbox : hE.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(mE.b)(yE.a.IsOverlay) ? hE.d.Lightbox : vE;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return hE.d.Listing;
						case "modQueuePages":
							return hE.d.Modqueue;
						default:
							return vE
					}
				};
			var EE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.a:
							const s = t.payload;
							if (s.routeMatch) {
								const e = s.routeMatch.route.meta;
								return _E(e)
							}
							return vE;
						default:
							return e
					}
				},
				IE = Object(S.c)({
					activeCommentId: fE,
					activePostId: jE,
					namespace: EE
				});
			var wE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (e) return e;
					switch (t.type) {
						case y.p:
						case y.q:
							return !0;
						default:
							return e
					}
				},
				SE = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				TE = Object(S.c)({
					firstFetch: wE,
					models: SE.b
				}),
				CE = s("./src/reddit/actions/streaming/modSettings.ts");
			var AE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case CE.b:
					case CE.c:
						return null;
					case CE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var PE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case CE.b:
							return !0;
						case CE.c:
						case CE.a:
							return !1;
						default:
							return e
					}
				},
				DE = Object(S.c)({
					error: AE,
					pending: PE
				}),
				RE = s("./src/reddit/actions/streaming/constants.ts");
			const kE = {};
			var NE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case RE.a: {
							const {
								subredditId: s,
								modSettings: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				LE = Object(S.c)({
					api: DE,
					modSettings: NE
				}),
				xE = s("./src/reddit/models/StructuredStyles/index.ts");
			const ME = {};
			var UE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ME,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case O.h:
						case O.b:
						case O.d:
							return t.payload.styles;
						case O.e:
							return ME;
						case O.c: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						case O.k: {
							const e = t.payload;
							return Object(xE.h)(e.styles)
						}
						default:
							return e
					}
				},
				FE = s("./src/reddit/actions/exportImportStyles.ts");
			var GE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case FE.c:
					case FE.b:
						return null;
					case FE.a:
						return t.payload;
					default:
						return e
				}
			};
			var BE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case FE.c:
							return !0;
						case FE.b:
						case FE.a:
							return !1;
						default:
							return e
					}
				},
				qE = Object(S.c)({
					error: GE,
					pending: BE
				}),
				KE = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				VE = s("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const HE = {};
			var WE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case Fe.b:
						case te.b:
						case re.c:
						case We.c:
						case Be.b:
						case _r.a: {
							const {
								payload: s
							} = t;
							if (!s.structuredStyles || !s.structuredStyles.data) return e;
							const n = s.structuredStyles.data.flairTemplate;
							return Object.assign(Object.assign({}, e), n)
						}
						case KE.b: {
							const {
								flairId: s,
								template: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case KE.a: {
							const {
								flairId: s
							} = t.payload;
							return Object(ws.a)(e, s)
						}
						case Vf.b: {
							const {
								templateId: s
							} = t.payload;
							return Object(ws.a)(e, s)
						}
						case O.k:
							return HE;
						case VE.b: {
							const {
								templates: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				QE = Object(S.c)({
					models: WE
				});
			const JE = {};
			var zE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case O.f: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.imageKey]: s.uploadId
						})
					}
					case O.k:
					case O.e:
						return JE;
					default:
						return e
				}
			};
			var YE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case O.n:
					case O.e:
						return !1;
					case O.a:
						return !0;
					default:
						return e
				}
			};
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var XE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case O.d:
						return t.payload.subredditId;
					case O.e:
						return null;
					case u.a:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Bu.f:
						return null;
					default:
						return e
				}
			};
			const ZE = {};
			var $E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case Fe.b:
						case te.b:
						case Be.b:
						case _r.a: {
							const {
								payload: s
							} = t;
							if (!s.structuredStyles || !s.structuredStyles.data) return e;
							const n = Object.keys(s.subredditAboutInfo || {});
							if (1 !== n.length) return e;
							const a = n[0],
								r = s.structuredStyles.data.style;
							return Object.assign(Object.assign({}, e), {
								[a]: r
							})
						}
						case We.c:
						case re.c: {
							const {
								payload: s
							} = t;
							if (!s.structuredStyles || !s.structuredStyles.data) return e;
							if (!s.subredditName) return e;
							let n;
							if (Jc()(s.subreddits, (e, t) => {
									if (e.name.toLowerCase() === s.subredditName.toLowerCase()) return n = t, !1
								}), !n) return e;
							const a = s.structuredStyles.data.style;
							return Object.assign(Object.assign({}, e), {
								[n]: a
							})
						}
						case O.m: {
							const s = t.payload,
								n = e[s.subredditId];
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: Object.assign(Object.assign({}, n), s.styles)
							})
						}
						case O.h: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: s.styles
							})
						}
						case O.k: {
							const s = t.payload,
								n = Object(xE.h)(s.styles);
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: n
							})
						}
						case OO.k: {
							const s = t.payload,
								{
									banner: n,
									profile: a
								} = s;
							if (!n || !a) return e;
							const r = e[a.id];
							return Object.assign(Object.assign({}, e), {
								[a.id]: Object.assign(Object.assign({}, r), {
									bannerBackgroundImage: n.url
								})
							})
						}
						case Bu.l: {
							const s = t.payload;
							if ("profileBanner" === s.key) {
								return Nj(e, {
									[s.subredditId]: {
										bannerBackgroundImage: s.imageUrl
									}
								})
							}
							return e
						}
						case Bu.k: {
							const s = t.payload;
							if ("profileBanner" === s.key) {
								return Nj(e, {
									[s.subredditId]: {
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
				eI = Object(S.c)({
					draft: UE,
					exportStyles: qE,
					flairTemplate: QE,
					imagePreviews: zE,
					isBladeEditorDirty: YE,
					isEditing: XE,
					models: $E
				});
			Object(Ve.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var tI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				sI = s("./src/reddit/actions/subredditAutocomplete.ts");
			const nI = {};
			var aI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sI.c:
					case sI.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case sI.a: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const rI = {};
			var cI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sI.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case sI.b:
						case sI.a: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				iI = Object(S.c)({
					error: aI,
					pending: cI
				});
			const oI = {};
			var dI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sI.b: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: t.payload
							})
						}
						default:
							return e
					}
				},
				lI = Object(S.c)({
					api: iI,
					models: dI
				});
			const uI = {};
			var bI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case js.c: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case js.a:
					case js.d: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !1
						})
					}
					default:
						return e
				}
			};
			const gI = {};
			var pI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case js.d: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case js.a:
					case js.c: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !1
						})
					}
					default:
						return e
				}
			};
			const OI = {};
			var fI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case js.d: {
							const {
								subredditId: s
							} = t.payload;
							return e[s] ? e : Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case js.a: {
							const {
								subredditId: s,
								isSubredditWhitelisted: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case js.c: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				jI = Object(S.c)({
					error: bI,
					pending: pI,
					whitelist: fI
				}),
				yI = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const hI = {};
			var mI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case js.a:
						return Object.assign(Object.assign({}, e), t.payload.collection);
					case js.e: {
						const {
							channel: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.channelId]: Object.assign({}, s)
						})
					}
					case js.f: {
						const {
							channel: s,
							editedSubredditChannelData: n
						} = t.payload;
						return s.name = n.room, s.description = n.description, s.minimumAcctAge = s.minimumAcctAge, s.newMemberAge = s.newMemberAge, Object.assign(Object.assign({}, e), {
							[s.channelId]: Object.assign({}, s)
						})
					}
					case js.g: {
						const s = e,
							n = t.payload;
						s[n];
						return yI(s, ["symbol" == typeof n ? n : n + ""])
					}
					default:
						return e
				}
			};
			var vI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case js.h:
							return t.payload.channelId;
						case js.g:
							return e === t.payload ? null : e;
						default:
							return e
					}
				},
				_I = Object(S.c)({
					api: jI,
					models: mI,
					selected: vI
				}),
				EI = s("./src/reddit/actions/category/constants.ts"),
				II = s("./src/reddit/actions/subredditMention/constants.ts");
			const wI = {};
			var SI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case II.d:
					case Fe.b:
					case te.b:
					case re.c:
					case ce.a:
					case ce.c:
					case Be.b:
					case _r.a:
					case se.b:
					case se.e:
					case qe.b:
					case qe.a:
					case qe.e:
					case qe.d:
					case ne.e:
					case ie.b:
					case ie.e:
					case We.c:
					case vu.e: {
						const s = t.payload.subredditAboutInfo;
						if (!s) return e;
						const n = Object.keys(s);
						return 0 === n.length ? e : n.reduce((e, t) => (s[t] && (e[t] ? e[t] = Object.assign(Object.assign({}, e[t]), s[t]) : e[t] = s[t]), e), Object.assign({}, e))
					}
					case Ii.a: {
						const {
							subredditId: s,
							emojisEnabled: n
						} = t.payload, a = e[s], r = Object.assign(Object.assign({}, a), {
							emojisEnabled: n
						});
						return Object.assign(Object.assign({}, e), {
							[s]: r
						})
					}
					case yO.h: {
						const {
							identifiers: s,
							userIsSubscriber: n
						} = t.payload, a = s.filter(e => e.type === Um.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(M.setIn)(e, [t.id, "userIsSubscriber"], n), e) : e
					}
					case Mo.g:
					case EI.f:
					case wu.e:
					case wu.m: {
						const {
							subredditsAboutInfo: s
						} = t.payload;
						if (!s) return e;
						const n = Object.keys(s);
						return 0 === n.length ? e : n.reduce((e, t) => (s[t] && (e[t] = e[t] ? Object.assign(Object.assign({}, e[t]), s[t]) : s[t]), e), Object.assign({}, e))
					}
					case Ii.b: {
						const s = t.payload,
							{
								emojiCustomSize: n,
								subredditId: a
							} = s,
							r = e[a];
						if (!r) return e;
						const c = Object.assign({}, r);
						if (n) {
							const {
								width: e,
								height: t
							} = n;
							c.emojisCustomSize = [e, t]
						} else delete c.emojisCustomSize;
						return Object.assign(Object.assign({}, e), {
							[a]: c
						})
					}
					case oe.c: {
						const {
							data: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case Oe.t: {
						const {
							subredditId: s,
							subredditCoins: n
						} = t.payload;
						if (!s || !n) return e;
						const a = e[s];
						if (!a) return e;
						const r = Object.assign(Object.assign({}, a), {
							coins: n
						});
						return Object.assign(Object.assign({}, e), {
							[s]: r
						})
					}
					default:
						return e
				}
			};
			const TI = {};
			var CI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oe.b:
					case oe.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: null
						})
					}
					case oe.a: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: n
						})
					}
					default:
						return e
				}
			};
			var AI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.b:
							return !0;
						case oe.c:
						case oe.a:
							return !1;
						default:
							return e
					}
				},
				PI = Object(S.c)({
					error: CI,
					pending: AI
				}),
				DI = s("./src/reddit/actions/subredditCreation.ts");
			const RI = {
				apiError: null
			};
			var kI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case DI.b: {
						const {
							error: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							apiError: s
						})
					}
					case DI.a:
					case DI.c:
					case DI.d:
						return RI;
					default:
						return e
				}
			};
			var NI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case DI.d: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case DI.c:
					case DI.b:
						return null;
					default:
						return e
				}
			};
			var LI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case DI.c:
							return !0;
						case DI.d:
						case DI.b:
							return !1;
						default:
							return e
					}
				},
				xI = Object(S.c)({
					error: kI,
					lastCreatedSubredditId: NI,
					pending: LI
				});
			var MI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wu.r:
							return !0;
						case wu.s:
						case wu.q:
							return !1;
						default:
							return e
					}
				},
				UI = Object(S.c)({
					pending: MI
				});
			const FI = {};
			var GI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oe.l:
					case oe.m: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: null
						})
					}
					case oe.k: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: n
						})
					}
					default:
						return e
				}
			};
			const BI = {};
			var qI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.l: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !0
							})
						}
						case oe.m:
						case oe.k: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !1
							})
						}
						default:
							return e
					}
				},
				KI = Object(S.c)({
					error: GI,
					pending: qI
				});
			const VI = {};
			var HI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wu.d:
						case wu.e:
							return Object.assign(Object.assign({}, e), {
								[t.payload.key]: !1
							});
						case wu.f:
							return Object.assign(Object.assign({}, e), {
								[t.payload.key]: !0
							});
						default:
							return e
					}
				},
				WI = Object(S.c)({
					pending: HI
				});
			var QI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.X:
						return t.payload || null;
					case Oe.Z:
					case Oe.Y:
						return null;
					default:
						return e
				}
			};
			var JI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.Z:
							return !0;
						case Oe.Y:
						case Oe.X:
							return !1;
						default:
							return e
					}
				},
				zI = Object(S.c)({
					error: QI,
					pending: JI
				});
			var YI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.i: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case wu.k:
					case wu.j:
						return null;
					default:
						return e
				}
			};
			var XI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wu.k:
							return !0;
						case wu.j:
						case wu.i:
							return !1;
						default:
							return e
					}
				},
				ZI = Object(S.c)({
					error: YI,
					pending: XI
				}),
				$I = s("./src/reddit/actions/subredditRules/constants.ts");
			var ew = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $I.c:
							return !0;
						case $I.a:
						case $I.b:
							return !1;
						default:
							return e
					}
				},
				tw = s("./src/reddit/actions/subredditSettings.ts");
			var sw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tw.e:
							return !0;
						case tw.f:
						case tw.d:
							return !1;
						default:
							return e
					}
				},
				nw = Object(S.c)({
					pending: sw
				});
			const aw = {};
			var rw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wu.l:
						case wu.m:
							return Object.assign(Object.assign({}, e), {
								[t.payload.key]: !1
							});
						case wu.n:
							return Object.assign(Object.assign({}, e), {
								[t.payload.key]: !0
							});
						default:
							return e
					}
				},
				cw = Object(S.c)({
					pending: rw
				}),
				iw = s("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const ow = {};
			var dw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ow,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iw.c:
					case iw.b: {
						const s = t.payload,
							{
								subredditName: n
							} = s.options;
						return Object.assign(Object.assign({}, e), {
							[n.toLowerCase()]: null
						})
					}
					case iw.a: {
						const s = t.payload,
							{
								options: n,
								error: a
							} = s,
							{
								subredditName: r
							} = n;
						return Object.assign(Object.assign({}, e), {
							[r.toLowerCase()]: a
						})
					}
					default:
						return e
				}
			};
			const lw = {};
			var uw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iw.c: {
							const s = t.payload,
								{
									subredditName: n
								} = s.options;
							return Object.assign(Object.assign({}, e), {
								[n.toLowerCase()]: !0
							})
						}
						case iw.b:
						case iw.a: {
							const s = t.payload,
								{
									subredditName: n
								} = s.options;
							return Object.assign(Object.assign({}, e), {
								[n.toLowerCase()]: !1
							})
						}
						default:
							return e
					}
				},
				bw = Object(S.c)({
					error: dw,
					pending: uw
				});
			const gw = {};
			var pw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pj.c:
					case Pj.b: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: null
						})
					}
					case Pj.a: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: n
						})
					}
					default:
						return e
				}
			};
			const Ow = {};
			var fw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pj.c: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !0
							})
						}
						case Pj.b:
						case Pj.a: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !1
							})
						}
						default:
							return e
					}
				},
				jw = Object(S.c)({
					error: pw,
					pending: fw
				}),
				yw = Object(S.c)({
					about: PI,
					create: xI,
					inlineEditing: UI,
					models: KI,
					onboarding: WI,
					productOffers: zI,
					rankings: ZI,
					rules: ew,
					settings: nw,
					similar: cw,
					topContent: jw,
					wiki: bw
				}),
				hw = s("./node_modules/lodash/isNil.js"),
				mw = s.n(hw);
			const vw = {};
			var _w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.d: {
							const {
								subredditId: s,
								forceState: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: mw()(n) ? !e[s] : n
							})
						}
						default:
							return e
					}
				},
				Ew = Object(S.c)({
					meta: _w
				});
			const Iw = {};
			var ww = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case EI.f: {
						const {
							categoryId: s,
							subredditIds: n
						} = t.payload;
						return Vc()(n) ? e : Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Sw = {};
			var Tw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.c: {
							const {
								communityInfo: s,
								id: n,
								type: a
							} = t.payload;
							return s && "subreddit" === a ? Object.assign(Object.assign({}, e), {
								[n]: s
							}) : e
						}
						default:
							return e
					}
				},
				Cw = s("./src/reddit/actions/subredditCrosspostable.ts");
			var Aw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cw.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Cw.c:
					case Cw.b:
						return null;
					default:
						return e
				}
			};
			var Pw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cw.c:
							return !0;
						case Cw.b:
						case Cw.a:
							return !1;
						default:
							return e
					}
				},
				Dw = Object(S.c)({
					errors: Aw,
					pending: Pw
				});
			const Rw = {};
			var kw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cw.b: {
							const {
								subredditIds: s
							} = t.payload;
							return fn()(e, s) ? e : s
						}
						default:
							return e
					}
				},
				Nw = Object(S.c)({
					api: Dw,
					ids: kw
				});
			const Lw = {};
			var xw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mj.a: {
							const s = t.payload,
								{
									subredditId: n,
									distinguishKey: a,
									postIds: r
								} = s;
							if (!(n in e)) return Object.assign(Object.assign({}, e), {
								[n]: {
									[a]: r
								}
							});
							const c = e[n];
							return Nj(c, {
								[a]: r
							}) === c ? e : Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign({}, c), {
									[a]: r
								})
							})
						}
						default:
							return e
					}
				},
				Mw = Object(S.c)({
					models: xw
				});
			const Uw = {};
			var Fw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							assets: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case l.g:
					case l.j: {
						const {
							subredditId: s,
							mainHeader: n
						} = t.payload, a = e[s] || {};
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								mainHeader: n
							})
						})
					}
					default:
						return e
				}
			};
			const Gw = {};
			var Bw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: t.payload
						})
					}
					case o.i: {
						const {
							communityRaw: s,
							subredditId: n
						} = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[n]: s
						}) : e
					}
					default:
						return e
				}
			};
			const qw = {};
			var Kw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							subredditId: s,
							distribution: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Vw = {};
			var Hw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							subredditId: s,
							meta: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Ww = {};
			var Qw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ww,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.p: {
							const {
								subredditId: s,
								releaseNotes: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				Jw = Object(S.c)({
					assets: Fw,
					communityRaw: Bw,
					distributions: Kw,
					meta: Hw,
					releaseNotes: Qw
				}),
				zw = s("./node_modules/lodash/isEqualWith.js"),
				Yw = s.n(zw),
				Xw = s("./src/lib/forceHttps/index.ts");
			const Zw = {},
				$w = (e, t) => {
					const s = Object.keys(t);
					return s.length ? s.reduce((s, n) => {
						const a = e[n],
							r = t[n],
							c = a ? Object.assign(Object.assign({}, a), r) : Object.assign({}, r);
						return r.icon.url ? c.icon.url = Object(Xw.a)(r.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(M.set)(s, n, c)
					}, e) : e
				},
				eS = (e, t) => {
					return !Yw()(e, t, (e, t, s) => {
						if ("subscribers" === s) return !0
					})
				},
				tS = (e, t) => {
					if (!t) return e;
					const s = Object.keys(t);
					if (!s.length) return e;
					const n = {};
					for (let a = 0; a < s.length; a++) {
						const r = s[a],
							c = e[r],
							i = t[r];
						c && !eS(c, i) || (n[r] = i)
					}
					return Object.keys(n).length ? Object.assign(Object.assign({}, e), n) : e
				};
			var sS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.c:
						return $w(e, t.payload.subreddits || {});
					case II.d:
					case EI.f:
					case Me.b:
					case Mo.g:
					case Iu.b:
					case Ge.e:
					case Ge.h:
					case ee.k:
					case Ue.r:
					case Ue.u:
					case OO.h:
					case mu.b:
					case Fe.b:
					case te.b:
					case te.g:
					case te.k:
					case se.b:
					case se.e:
					case ae.c:
					case ae.i:
					case ae.e:
					case ae.g:
					case qe.b:
					case qe.e:
					case ne.b:
					case ne.e:
					case OO.e:
					case re.c:
					case ce.c:
					case Be.b:
					case Na.e:
					case _r.a:
					case OO.m:
					case ie.b:
					case ie.e:
					case Ke.b:
					case "RECOMMENDED_POSTS_LOADED":
					case We.c:
					case oe.c:
					case oe.f:
					case oe.i:
					case wu.a:
					case wu.e:
					case wu.m:
					case vu.e:
					case vu.b:
						return tS(e, t.payload.subreddits || {});
					case ee.f:
					case ee.i:
					case ee.m:
					case ee.p:
					case ee.v: {
						const {
							response: s
						} = t.payload, {
							subreddits: n
						} = s;
						return tS(e, n)
					}
					case We.e: {
						const {
							typeaheadSuggestions: s
						} = t.payload;
						return tS(e, s.subreddits || {})
					}
					case Ue.B: {
						const {
							subreddits: s
						} = t.payload;
						return Object.assign(Object.assign({}, s), e)
					}
					case o.g: {
						const s = t.payload;
						return tS(e, s)
					}
					case O.m: {
						const s = t.payload,
							{
								subredditId: n,
								styles: a
							} = s;
						return "communityIcon" in a && e[n] && "string" == typeof a.communityIcon ? Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								communityIcon: a.communityIcon
							})
						}) : e
					}
					case tw.f: {
						const {
							settings: s
						} = t.payload, {
							subredditId: n,
							title: a
						} = s;
						return e[n] && void 0 !== a ? Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								title: a
							})
						}) : e
					}
					default:
						return e
				}
			};
			var nS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oe.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case oe.g:
					case oe.f:
						return null;
					default:
						return e
				}
			};
			var aS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oe.g:
					case oe.f:
						return !0;
					case oe.e:
						return !1;
					default:
						return e
				}
			};
			var rS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.g:
							return !0;
						case oe.f:
						case oe.e:
							return !1;
						default:
							return e
					}
				},
				cS = Object(S.c)({
					errors: nS,
					fetched: aS,
					pending: rS
				});
			var iS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.f: {
							const {
								subreddits: e
							} = t.payload, s = Object.keys(e);
							return s.sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), s
						}
						default:
							return e
					}
				},
				oS = Object(S.c)({
					api: cS,
					order: iS
				});
			const dS = {};
			var lS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tw.a: {
						const s = t.payload;
						return Object(M.merge)(e, s)
					}
					case tw.b: {
						const {
							subredditId: s,
							notificationSettings: n
						} = t.payload;
						return Object(M.merge)(e, {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const uS = {};
			var bS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.e: {
						const {
							key: s,
							subredditIds: n
						} = t.payload;
						return 0 === n.length ? e : Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const gS = {};
			var pS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.kb: {
						const {
							recentSupporters: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case Oe.T:
					case Oe.W: {
						const {
							subredditId: s,
							powerupsCount: n,
							user: a
						} = t.payload;
						if (n > 0) {
							const t = {
								score: n,
								lastSupportedAt: (new Date).toString(),
								supporterInfo: {
									id: a.id,
									name: Object(le.e)(a),
									icon: {
										url: a.accountIcon
									},
									profile: {
										isNsfw: a.isNSFW
									}
								}
							};
							return Object.assign(Object.assign({}, e), {
								[s]: [t, ...e[s]]
							})
						}
						return e
					}
					default:
						return e
				}
			};
			const OS = {};
			var fS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var s;
				switch (t.type) {
					case Oe.lb:
					case Oe.kb: {
						const {
							powerups: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case Oe.T:
					case Oe.W: {
						const {
							subredditId: n,
							powerupsCount: a
						} = t.payload;
						if (e[n] && a > 0) {
							const t = e[n],
								r = t.tier + 1,
								c = t.tiersInfo[r - 1],
								i = c && c.benefits;
							return Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign({}, e[n]), {
									benefits: i || (null === (s = e[n]) || void 0 === s ? void 0 : s.benefits),
									count: t.count + a,
									supportersCount: t.supportersCount + 1
								})
							})
						}
						return e
					}
					default:
						return e
				}
			};
			const jS = {},
				yS = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var hS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.kb: {
							const {
								topSupporters: s,
								subredditId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s.sort(yS)
							})
						}
						case Oe.T:
						case Oe.W: {
							const {
								subredditId: s,
								powerupsCount: n,
								user: a,
								isAnonymous: r
							} = t.payload;
							if (n > 0) {
								let t = !1;
								const c = e[s].map(e => {
									var s;
									return r && !e.supporterInfo || !r && (null === (s = e.supporterInfo) || void 0 === s ? void 0 : s.id) === a.id ? (t = !0, Object.assign(Object.assign({}, e), {
										lastSupportedAt: (new Date).toString(),
										score: e.score + n
									})) : e
								});
								if (t) return Object.assign(Object.assign({}, e), {
									[s]: c.sort(yS)
								});
								const i = {
									score: n,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: r ? null : {
										id: a.id,
										name: Object(le.e)(a),
										icon: {
											url: a.accountIcon
										},
										profile: {
											isNsfw: a.isNSFW
										}
									}
								};
								return Object.assign(Object.assign({}, e), {
									[s]: [i, ...e[s]].sort(yS)
								})
							}
							return e
						}
						default:
							return e
					}
				},
				mS = s("./src/lib/makeProductOfferKey/index.ts");
			const vS = {};
			var _S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.Y: {
						const {
							type: s,
							subredditId: n,
							productOffers: a
						} = t.payload, r = Object(mS.a)(n, s);
						return a && 0 !== a.length ? Object.assign(Object.assign({}, e), {
							[r]: a
						}) : e
					}
					default:
						return e
				}
			};
			const ES = {};
			var IS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ES,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case g.g: {
							const {
								subredditId: s,
								products: n
							} = t.payload, a = Object.keys(n).reduce((e, t) => (e[t] = !0, e), {});
							return Object.assign(Object.assign({}, e), {
								[s]: a
							})
						}
						default:
							return e
					}
				},
				wS = s("./src/reddit/actions/subreddit/questions.ts");
			const SS = {};
			var TS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wS.a: {
						const {
							id: s,
							questions: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const CS = {};
			var AS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.b: {
						const {
							categoryRankingsKey: s
						} = t.payload, n = e[s], a = n && n.length ? [...n, ...t.payload.rankings] : t.payload.rankings;
						return Object.assign(Object.assign({}, e), {
							[s]: a
						})
					}
					default:
						return e
				}
			};
			const PS = {};
			var DS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.c: {
						const {
							categoryRankingsKey: s,
							pageInfo: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const RS = {};
			var kS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $I.b: {
						const {
							rules: s,
							subredditId: n
						} = t.payload, a = {
							[n]: {
								rules: s.rules
							}
						};
						return Object.assign(Object.assign({}, e), a)
					}
					case $I.e: {
						const {
							rules: s,
							subredditId: n
						} = t.payload, a = {
							[n]: {
								rules: [...e[n].rules, ...s.rules]
							}
						};
						return Object.assign(Object.assign({}, e), a)
					}
					case $I.f: {
						const {
							rules: s,
							subredditId: n,
							oldName: a
						} = t.payload;
						s.rules.shortName !== a && (e[n].rules = e[n].rules.filter(e => e.shortName !== a));
						const r = {
							[n]: {
								rules: [...s.rules, ...e[n].rules]
							}
						};
						return r[n].rules.sort((e, t) => e.priority - t.priority), Object.assign(Object.assign({}, e), r)
					}
					case $I.g:
					case $I.d: {
						const {
							rules: s,
							subredditId: n
						} = t.payload, a = {
							[n]: {
								rules: s.rules
							}
						};
						return Object.assign(Object.assign({}, e), a)
					}
					default:
						return e
				}
			};
			const NS = {};
			var LS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tw.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case tw.f: {
						const s = t.payload.settings,
							n = e[s.subredditId] || {};
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: Object.assign(Object.assign({}, n), s)
						})
					}
					case Bu.n: {
						const s = t.payload,
							n = e[s.subredditId] || {},
							a = Object.assign(Object.assign({}, n), s.settings);
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: a
						})
					}
					default:
						return e
				}
			};
			const xS = {};
			var MS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.m: {
						const {
							key: s,
							subredditIds: n
						} = t.payload;
						return 0 === n.length ? e : Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const US = {};
			var FS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : US,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wS.a: {
						const {
							id: s,
							survey: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case wS.b: {
						const {
							id: s,
							response: n
						} = t.payload, a = Object(M.setIn)(e, [s, "response"], n);
						return Object(M.setIn)(a, [s, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const GS = {};
			var BS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mo.g: {
						const {
							subredditTopContent: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s.subredditTopContent)
					}
					case Pj.b: {
						const {
							subredditTopContent: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const qS = [];
			var KS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.g:
					case ce.c: {
						const {
							trendingSubredditIds: s
						} = t.payload;
						return s && s.length ? s : e
					}
					default:
						return e
				}
			};
			const VS = {};
			var HS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case II.d:
							const {
								unavailableSubreddits: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s);
						default:
							return e
					}
				},
				WS = Object(S.c)({
					about: SI,
					api: yw,
					appliedFilters: Ew,
					byCategory: ww,
					communityInfo: Tw,
					crosspostable: Nw,
					duplicates: Mw,
					gov: Jw,
					models: sS,
					moderated: oS,
					notificationSettings: lS,
					onboarding: bS,
					powerupRecentSupporters: pS,
					powerups: fS,
					powerupTopSupporters: hS,
					productOffers: _S,
					products: IS,
					questions: TS,
					rankings: AS,
					rankingsPageInfo: DS,
					rules: kS,
					settings: LS,
					similar: MS,
					survey: FS,
					topContent: BS,
					trending: KS,
					unavailableModels: HS
				});
			const QS = {};
			var JS = Object(rh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c: {
							const {
								postIds: s,
								posts: n
							} = t.payload, a = s.slice(0, 2).reduce((e, t) => {
								if (n[t].isStickied) {
									const s = n[t].belongsTo.id;
									e[s] ? e[s].push(t) : e[s] = [t]
								}
								return e
							}, {});
							return Re()(Object.assign({}, e), a)
						}
						case Mu.k: {
							const {
								newStickiedPostList: s,
								subredditId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						default:
							return e
					}
				}), QS),
				zS = Object(S.c)({
					data: JS
				});
			const YS = [];
			var XS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.d: {
						const {
							makeFavorite: s,
							multiredditsModelsState: n,
							multiredditPath: a
						} = t.payload;
						if (s) {
							const t = [...e],
								s = pO(t, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(s, 0, a), t
						}
						return e.filter(e => e !== a)
					}
					case Ue.u: {
						const {
							multireddits: e
						} = t.payload;
						return ca()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case yO.e: {
						const {
							follow: s,
							multiredditPath: n
						} = t.payload;
						return s ? e : e.filter(e => e !== n)
					}
					case Ue.j: {
						const s = t.payload;
						return e.filter(e => e !== s)
					}
					default:
						return e
				}
			};
			var ZS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case yO.b:
					case yO.c:
						return null;
					default:
						return e
				}
			};
			var $S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.b:
					case yO.c:
						return !0;
					case yO.a:
						return !1;
					default:
						return e
				}
			};
			var eT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yO.b:
							return !0;
						case yO.c:
						case yO.a:
							return !1;
						default:
							return e
					}
				},
				tT = Object(S.c)({
					errors: ZS,
					fetched: $S,
					pending: eT
				});
			const sT = [];
			var nT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.c: {
						const {
							profiles: e,
							favoriteProfileIds: s,
							favoriteSubredditIds: n
						} = t.payload;
						let a;
						return (a = s && s.length ? s : n ? n.filter(t => !!e[t]) : []).sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), a
					}
					case yO.f: {
						const {
							makeFavorite: s,
							identifier: n,
							profileModels: a
						} = t.payload, {
							id: r,
							type: c
						} = n;
						if (c !== Um.a.PROFILE) return e;
						const i = e ? e.slice() : [];
						if (s) {
							const e = pO(i, r, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							i.splice(e, 0, r)
						} else {
							const e = i.indexOf(r);
							i.splice(e, 1)
						}
						return i
					}
					case yO.h: {
						const {
							identifiers: s,
							userIsSubscriber: n
						} = t.payload, a = s.filter(t => t.type === Um.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || n ? e : a.reduce((e, t) => {
							const s = e.indexOf(t.id);
							return e.splice(s, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const aT = [];
			var rT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: s
						} = t.payload, n = s ? s.filter(t => !!e[t]) : [];
						return n.sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), n
					}
					case yO.f: {
						const {
							makeFavorite: s,
							identifier: n,
							subredditModels: a
						} = t.payload, {
							id: r,
							type: c
						} = n;
						if (c !== Um.a.SUBREDDIT) return e;
						const i = e ? e.slice() : [];
						if (s) {
							const e = pO(i, r, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							i.splice(e, 0, r)
						} else {
							const e = i.indexOf(r);
							i.splice(e, 1)
						}
						return i
					}
					case yO.h: {
						const {
							identifiers: s,
							userIsSubscriber: n
						} = t.payload, a = s.filter(t => t.type === Um.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || n ? e : a.reduce((e, t) => {
							const s = e.indexOf(t.id);
							return e.splice(s, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const cT = [],
				iT = e => (t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1;
			var oT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.u: {
							const {
								multireddits: s
							} = t.payload, n = ca()(s).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(iT(s));
							return fn()(e, n) ? e : n
						}
						case te.k: {
							const {
								account: s,
								multireddits: n,
								multiredditsByUser: a,
								multiredditsModelsState: r
							} = t.payload;
							if (!s) return e;
							const c = a[s.id];
							if (!c || !c.length) return e;
							const i = Object.assign(Object.assign({}, r), n),
								o = gO()(e, c).sort(iT(i));
							return fn()(e, o) ? e : o
						}
						case yO.e: {
							const {
								follow: s,
								multiredditPath: n,
								multiredditsModelsState: a
							} = t.payload;
							return s ? [...e, n].sort(iT(a)) : e.filter(e => e !== n)
						}
						case Ue.j: {
							const s = t.payload;
							return e.filter(e => e !== s)
						}
						case Ue.g:
						case Ue.m: {
							const {
								multireddit: s,
								multiredditsModelsState: n
							} = t.payload, a = Object.assign(Object.assign({}, n), {
								[s.url]: s
							});
							return [...e, s.url].sort(iT(a))
						}
						default:
							return e
					}
				},
				dT = s("./node_modules/lodash/difference.js"),
				lT = s.n(dT);
			const uT = [];
			var bT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case OO.n: {
						const {
							profileOrder: s
						} = t.payload;
						return yy()([...e, ...s])
					}
					case yO.c: {
						const {
							profiles: e
						} = t.payload, s = Object.keys(e);
						return s.sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), s
					}
					case yO.h: {
						const {
							identifiers: s,
							profileModels: n,
							userIsSubscriber: a
						} = t.payload, r = s.filter(e => e.type === Um.a.PROFILE);
						if (!r.length) return e;
						const c = r.map(e => e.id);
						return a ? yy()([...e, ...c]).sort((e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1) : lT()(e, c)
					}
					default:
						return e
				}
			};
			const gT = [];
			var pT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case OO.n: {
							const {
								subredditOrder: s
							} = t.payload;
							return yy()([...e, ...s])
						}
						case yO.c: {
							const {
								subreddits: e
							} = t.payload, s = Object.keys(e);
							return s.sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), s
						}
						case yO.h: {
							const {
								identifiers: s,
								subredditModels: n,
								userIsSubscriber: a
							} = t.payload, r = s.filter(e => e.type === Um.a.SUBREDDIT && !!e.id);
							if (!r.length) return e;
							const c = r.map(e => e.id);
							return a ? yy()([...e, ...c]).sort((e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1) : lT()(e, c)
						}
						default:
							return e
					}
				},
				OT = Object(S.c)({
					api: tT,
					favoriteMultiOrder: XS,
					favoriteProfileOrder: nT,
					favoriteSubredditOrder: rT,
					multiredditOrder: oT,
					profileOrder: bT,
					subredditOrder: pT
				}),
				fT = s("./src/reddit/actions/tabBadging.ts");
			var jT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fT.a:
							const {
								hasUnreadMessages: s
							} = t.payload;
							return s;
						default:
							return e
					}
				},
				yT = s("./src/reddit/actions/tags/constants.ts");
			const hT = {
				pending: !1,
				error: !1
			};
			var mT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yT.l:
						return Object.assign(Object.assign({}, e), {
							pending: !0
						});
					case yT.m:
						return {
							error: !1, pending: !1
						};
					case yT.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const vT = {
				pending: !1,
				error: !1
			};
			var _T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yT.o:
						return Object.assign(Object.assign({}, e), {
							pending: !0
						});
					case yT.p:
						return {
							error: !1, pending: !1
						};
					case yT.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const ET = {
				pending: !1,
				error: !1
			};
			var IT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ET,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yT.t:
						return Object.assign(Object.assign({}, e), {
							pending: !0
						});
					case yT.s:
					case yT.r:
					case yT.e:
					case yT.j:
						return {
							error: !1, pending: !1
						};
					case yT.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const wT = {
				pending: !1,
				error: !1
			};
			var ST = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yT.v:
						return Object.assign(Object.assign({}, e), {
							pending: !0
						});
					case yT.w:
						return {
							error: !1, pending: !1
						};
					case yT.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const TT = {
				pending: !1,
				error: !1
			};
			var CT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yT.g:
							return Object.assign(Object.assign({}, e), {
								pending: !0
							});
						case yT.h:
							return {
								error: !1, pending: !1
							};
						case yT.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				AT = Object(S.c)({
					create: mT,
					deleteTag: _T,
					fetch: IT,
					update: ST,
					updatePrimaryTag: CT
				});
			const PT = {
				global: [],
				recommendedGlobal: []
			};
			var DT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yT.w:
						case yT.r:
						case yT.e:
						case yT.j: {
							const {
								globalSubredditTags: e
							} = t.payload, s = Object.keys(e), n = s.filter(t => e[t].isRecommended);
							return {
								global: s,
								recommendedGlobal: n
							}
						}
						default:
							return e
					}
				},
				RT = s("./node_modules/lodash/uniqWith.js"),
				kT = s.n(RT),
				NT = s("./src/reddit/models/Option/index.ts");
			const LT = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var xT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yT.d: {
							const {
								option: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								selectedOptions: kT()([...e.selectedOptions || [], Object.assign({}, s)], NT.a)
							})
						}
						case yT.c: {
							const {
								option: s
							} = t.payload, n = e.selectedOptions.findIndex(e => Object(NT.a)(e, s));
							return e.selectedOptions.splice(n, 1), Object.assign(Object.assign({}, e), {
								selectedOptions: e.selectedOptions
							})
						}
						case yT.b: {
							const {
								input: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								tagInput: s
							})
						}
						case yT.a: {
							const {
								primaryTagId: s
							} = t.payload, n = e.selectedOptions.findIndex(e => e.id === s), a = [...e.selectedOptions];
							return n >= 0 && a.splice(n, 1), Object.assign(Object.assign({}, e), {
								selectedPrimaryTagId: s,
								selectedOptions: a
							})
						}
						default:
							return e
					}
				},
				MT = s("./src/reddit/helpers/tags/index.ts");
			const UT = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var FT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yT.j: {
							const {
								globalSubredditTags: s,
								subredditScopedTags: n,
								subredditId: a
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								globalSubredditTags: Object.assign(Object.assign({}, e.globalSubredditTags), s),
								subredditScopedTags: Object.assign(Object.assign({}, e.subredditScopedTags), {
									[a]: Object.assign(Object.assign({}, e.subredditScopedTags[a] || {}), n[a] || {})
								})
							})
						}
						case yT.w:
						case yT.s:
						case yT.r: {
							const {
								primaryTag: s,
								globalSubredditTags: n,
								subredditScopedTags: a,
								itemTags: r,
								suggestedItemTags: c,
								subredditId: i,
								geoPlace: o
							} = t.payload, d = Object.assign({}, e.subredditPrimaryTagId);
							return s ? d[i] = s.tag.id : delete d[i], {
								subredditPrimaryTagId: d,
								globalSubredditTags: Object.assign(Object.assign({}, e.globalSubredditTags), n),
								subredditScopedTags: Object.assign(Object.assign({}, e.subredditScopedTags), {
									[i]: Object.assign(Object.assign({}, e.subredditScopedTags[i] || {}), a[i] || {})
								}),
								itemTags: Object.assign(Object.assign({}, e.itemTags), {
									[i]: Object.assign({}, r[i] || {})
								}),
								geoPlaces: o ? Object(M.set)(e.geoPlaces, i, o) : e.geoPlaces,
								suggestedItemTags: Object.assign(Object.assign({}, e.suggestedItemTags), {
									[i]: Object.assign({}, c[i] || {})
								}),
								sortedItemTags: Object.assign(Object.assign({}, e.sortedItemTags), {
									[i]: Object(MT.a)(r[i] || {})
								})
							}
						}
						case yT.p: {
							const {
								subredditId: s,
								tags: n
							} = t.payload, a = n.reduce((e, t) => {
								let {
									tagId: s
								} = t;
								return delete e[s], e
							}, Object.assign({}, e.subredditScopedTags[s] || {}));
							return Object.assign(Object.assign({}, e), {
								subredditScopedTags: Object.assign(Object.assign({}, e.subredditScopedTags), {
									[s]: a
								})
							})
						}
						case yT.e: {
							const {
								globalSubredditTags: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								globalSubredditTags: Object.assign(Object.assign({}, e.globalSubredditTags), s)
							})
						}
						case yT.h: {
							const {
								subredditId: s,
								primaryTagId: n,
								secondaryTags: a
							} = t.payload;
							return n && s ? Object.assign(Object.assign({}, e), {
								subredditPrimaryTagId: Object.assign(Object.assign({}, e.subredditPrimaryTagId), {
									[s]: n
								}),
								itemTags: Object.assign(Object.assign({}, e.itemTags), {
									[s]: Object.assign({}, a || {})
								})
							}) : e
						}
						case yT.i: {
							const {
								subredditId: s,
								primaryTagId: n
							} = t.payload;
							return n && s ? Object.assign(Object.assign({}, e), {
								subredditPrimaryTagId: Object.assign(Object.assign({}, e.subredditPrimaryTagId), {
									[s]: n
								})
							}) : e
						}
						default:
							return e
					}
				},
				GT = s("./src/reddit/reducers/tags/selected/index.ts"),
				BT = Object(S.c)({
					api: AT,
					availableGlobalTagOrder: DT,
					models: FT,
					selected: GT.b,
					creation: xT
				}),
				qT = s("./src/reddit/actions/redditEmbed.ts"),
				KT = s("./src/reddit/actions/theme.ts"),
				VT = s("./src/reddit/actions/users.ts"),
				HT = s("./src/reddit/models/Theme/index.ts");
			const WT = {
				current: HT.c,
				cached: {}
			};
			var QT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case KT.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? HT.b : HT.c,
								cached: {}
							}
						}
						case Ea.a:
						case Ea.b:
						case Ea.h:
						case Ea.i:
						case Ea.f:
						case Ea.j:
						case Ge.e:
						case Ge.h:
						case Fe.a:
						case te.a:
						case Fe.b:
						case te.b:
						case Fe.d:
						case te.d:
						case te.g:
						case ce.c:
						case te.k:
						case te.j:
						case Me.b:
						case qT.b:
						case oe.i:
						case We.c:
						case re.c:
						case Bu.j:
						case Be.b:
						case _r.a:
						case VT.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: HT.b,
									cached: {}
								} : {
									current: HT.c,
									cached: {}
								}
							}
							return e;
						case se.d:
						case se.e:
						case qe.a:
						case qe.b:
						case qe.d:
						case qe.e:
						case ne.d:
						case ne.e: {
							const {
								account: s
							} = t.payload;
							return s ? s.nightmode ? {
								current: HT.b,
								cached: {}
							} : {
								current: HT.c,
								cached: {}
							} : e
						}
						case ee.h:
						case ee.j:
						case ee.i:
						case ee.g:
						case ee.f:
						case ee.n:
						case ee.m:
						case ee.p:
						case ee.q:
						case ee.w:
						case ee.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: HT.b,
									cached: {}
								} : {
									current: HT.c,
									cached: {}
								}
							}
							return e;
						case Bu.i: {
							if (!t.payload) return e;
							const {
								nightmode: s
							} = t.payload;
							return s ? {
								current: HT.b,
								cached: {}
							} : {
								current: HT.c,
								cached: {}
							}
						}
						case O.d:
							return {
								current: HT.c, cached: {}
							};
						case O.e:
							return t.payload.nightmodeTempUpdated ? {
								current: HT.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				JT = s("./src/reddit/actions/toaster.ts");
			const zT = [];
			var YT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case JT.c: {
							const s = t.payload,
								n = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === s.id ? s : t;
								n.push(e), a = a || e === s
							}
							return a || n.push(s), n
						}
						case JT.b: {
							const s = t.payload;
							return e.filter(e => e.id !== s)
						}
						default:
							return e
					}
				},
				XT = s("./src/reddit/actions/tooltip.ts");
			var ZT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XT.c: {
							const {
								tooltipId: s
							} = t.payload;
							return e === s ? null : s
						}
						case XT.a: {
							const {
								tooltipId: s
							} = t.payload;
							return e === s ? e : s
						}
						case XT.b: {
							const {
								tooltipId: s
							} = t.payload;
							return null !== e ? e : s || null
						}
						case XT.e: {
							const {
								tooltipId: s
							} = t.payload;
							return e === s ? null : e
						}
						case Oe.M:
						case XT.d:
						case u.a:
						case Il.b:
						case Il.c:
						case Il.a:
							return null;
						default:
							return e
					}
				},
				$T = s("./src/reddit/actions/tracing.ts");
			const eC = {
				traceId: void 0
			};
			var tC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $T.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				sC = s("./src/lib/asyncActions/index.ts"),
				nC = s("./src/reddit/actions/reCaptchaEnterprise.ts");
			const aC = Object(sC.c)(nC.c.requestedActionType, nC.c.succeededActionType, nC.c.failedActionType),
				rC = Object(sC.c)(nC.a.requestedActionType, nC.a.succeededActionType, nC.a.failedActionType),
				cC = Object(sC.c)(nC.d.requestedActionType, nC.d.succeededActionType, nC.d.failedActionType);
			var iC = Object(S.c)({
					load: aC,
					execute: rC,
					send: cC
				}),
				oC = s("./src/reddit/actions/tracking.ts");
			const dC = {};
			var lC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oC.a: {
							const {
								routeKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case oC.b: {
							const {
								routeKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				uC = Object(S.c)({
					reCaptchaEnterprise: iC,
					viewportDataLoaded: lC
				}),
				bC = s("./src/reddit/actions/trafficStats/constants.ts");
			var gC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bC.c:
						return !0;
					case bC.b:
					case bC.a:
						return !1;
					default:
						return e
				}
			};
			var pC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bC.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case bC.c:
							return null;
						default:
							return e
					}
				},
				OC = Object(S.c)({
					pending: gC,
					trafficStats: pC
				});
			var fC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.s:
					case d.t:
						return null;
					case d.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var jC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.s:
							return !0;
						case d.q:
						case d.t:
							return !1;
						default:
							return e
					}
				},
				yC = Object(S.c)({
					error: fC,
					pending: jC
				});
			var hC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case n.b:
					case d.t:
						return null;
					default:
						return e
				}
			};
			var mC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var vC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.r:
							return t.payload && t.payload.publicAddress || null;
						case n.b:
						case d.t:
							return null;
						default:
							return e
					}
				},
				_C = Object(S.c)({
					api: yC,
					contentId: hC,
					initialRecipient: mC,
					publicAddress: vC
				}),
				EC = Object(S.c)({
					communityPoints: _C
				}),
				IC = s("./src/reddit/actions/search/trending.ts");
			const wC = [];
			var SC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case IC.a: {
							const {
								items: s
							} = t.payload;
							return s || e
						}
						default:
							return e
					}
				},
				TC = Object(S.c)({
					models: SC
				});
			const CC = {};
			var AC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bv.a: {
							const {
								trophies: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				PC = s("./src/reddit/actions/upload.ts"),
				DC = s("./src/reddit/models/Upload/index.ts");
			const RC = {};
			var kC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RC,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case PC.d: {
						const {
							key: s,
							id: n,
							file: a
						} = t.payload, r = e[s], c = r && r.file === a ? Object.assign({}, r.metadata) : {};
						return Object.assign(Object.assign({}, e), {
							[s]: {
								key: s,
								id: n,
								file: a,
								metadata: c,
								url: void 0,
								status: DC.a.PENDING
							}
						})
					}
					case PC.h: {
						const {
							key: s
						} = t.payload, n = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								status: DC.a.UPLOADING
							})
						})
					}
					case PC.c: {
						const {
							key: s,
							metadata: n
						} = t.payload, a = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								metadata: n
							})
						})
					}
					case PC.e: {
						const {
							key: s,
							progress: n
						} = t.payload, a = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								progress: n
							})
						})
					}
					case PC.g: {
						const {
							key: s,
							url: n
						} = t.payload, a = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								status: DC.a.SUCCESS,
								url: n
							})
						})
					}
					case PC.b: {
						const {
							key: s,
							error: n
						} = t.payload, a = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								status: DC.a.FAILED,
								error: n
							})
						})
					}
					case PC.a: {
						const {
							key: s
						} = t.payload, n = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								status: DC.a.CANCELED
							})
						})
					}
					case PC.f: {
						const {
							key: s
						} = t.payload, n = e[s];
						return n.metadata.localUrl && window.URL.revokeObjectURL(n.metadata.localUrl), yn()(e, s)
					}
					default:
						return e
				}
			};
			const NC = {};

			function LC(e, t) {
				if (!t) return e;
				const {
					subredditId: s
				} = t, n = e[s] || {};
				return Object.assign(Object.assign({}, e), {
					[s]: {
						latest: t,
						byDate: Object.assign(Object.assign({}, n.byDate || {}), {
							[t.at]: t
						})
					}
				})
			}
			var xC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case g.d:
						case d.a:
						case o.f:
						case d.t: {
							const {
								wallet: s
							} = t.payload;
							return LC(e, s)
						}
						case d.w: {
							const s = t.payload,
								n = Object.assign({}, e);
							return Object.keys(s).forEach(t => {
								const a = s[t],
									r = e[t],
									c = {
										latest: r ? r.latest.at <= a.at ? a : r.latest : a,
										byDate: Object.assign(Object.assign({}, r ? r.byDate : {}), {
											[a.at]: a
										})
									};
								n[t] = c
							}), n
						}
						default:
							return e
					}
				},
				MC = s("./src/reddit/actions/inbox.ts"),
				UC = s("./src/reddit/actions/pages/appeal/constants.ts"),
				FC = s("./src/reddit/actions/pages/userDataRequest/index.ts"),
				GC = s("./src/reddit/actions/sso/constants.ts");
			const BC = (e, t) => {
				if (!t || fn()(e, t)) return e;
				const {
					awardeeKarma: s,
					awarderKarma: n,
					commentKarma: a,
					postKarma: r,
					totalKarma: c
				} = t, i = e ? e.awardeeKarma : 0, o = e ? e.awarderKarma : 0, d = s || i, l = n || o, u = c || d + l + r + a;
				return Object.assign(Object.assign({}, t), {
					awardeeKarma: d,
					awarderKarma: l,
					totalKarma: u
				})
			};
			var qC = Object(rh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case UC.a:
					case UC.b:
					case T_.b:
					case T_.c:
					case Ea.a:
					case Ea.b:
					case Ea.f:
					case Ea.h:
					case Ea.i:
					case Ea.j:
					case Ge.e:
					case Ge.h:
					case Ge.g:
					case Ue.q:
					case Ue.r:
					case Fe.a:
					case te.a:
					case Fe.b:
					case te.b:
					case te.f:
					case te.g:
					case te.j:
					case te.k:
					case ce.a:
					case OO.l:
					case se.b:
					case se.a:
					case se.e:
					case se.d:
					case ae.c:
					case ae.i:
					case qe.e:
					case qe.d:
					case qe.b:
					case qe.a:
					case ne.e:
					case ne.d:
					case ce.c:
					case re.a:
					case re.c:
					case Be.b:
					case _r.a:
					case We.a:
					case We.c:
					case qT.a:
					case qT.b:
					case Bu.j:
					case FC.b:
					case VT.c:
					case vu.e:
						return BC(e, t.payload.account);
					case VT.n:
						return e ? Object.assign(Object.assign({}, e), {
							email: t.payload
						}) : e;
					case ee.i:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v:
					case ee.h:
					case ee.e:
					case ee.l:
					case ee.o:
					case ee.u: {
						const {
							response: s
						} = t.payload;
						return s ? BC(e, s.account) : e
					}
					case VT.a:
						return e ? Object.assign(Object.assign({}, e), {
							seenLayoutSwitch: !0
						}) : e;
					case n.d:
						return e ? Object.assign(Object.assign({}, e), {
							seenRedesignModal: !0
						}) : e;
					case Oe.y:
						return e ? Object.assign(Object.assign({}, e), {
							seenGiveAwardTooltip: !0
						}) : e;
					case Bu.l:
					case Bu.k: {
						const s = t.payload;
						return e && "profileIcon" === s.key ? Object.assign(Object.assign({}, e), {
							accountIcon: s.imageUrl
						}) : e
					}
					case Oe.E:
					case Oe.t: {
						const {
							coins: s
						} = t.payload;
						return e ? Object.assign(Object.assign({}, e), {
							coins: s
						}) : e
					}
					case Oe.a: {
						const {
							userName: s,
							awarderKarma: n,
							awardeeKarma: a
						} = t.payload;
						if (s.toLowerCase() !== (e && Object(le.e)(e).toLowerCase())) return e;
						const r = a || (e ? e.awardeeKarma : 0) || 0,
							c = n || (e ? e.awarderKarma : 0) || 0,
							i = r + c + (e ? e.postKarma : 0) + (e ? e.commentKarma : 0);
						return e && Object.assign(Object.assign({}, e), {
							awardeeKarma: r,
							awarderKarma: c,
							totalKarma: i
						})
					}
					case jd.t: {
						const {
							coins: s
						} = t.payload;
						return s && e ? Object.assign(Object.assign({}, e), {
							coins: s
						}) : e
					}
					case MC.a: {
						const {
							inboxCount: s
						} = t.payload;
						return e ? Object.assign(Object.assign({}, e), {
							inboxCount: s
						}) : e
					}
					case GC.a: {
						const {
							linkedIdentity: s
						} = t.payload, n = e && e.linkedIdentities || [];
						return e ? Object.assign(Object.assign({}, e), {
							linkedIdentities: [...n, s]
						}) : e
					}
					case GC.b: {
						const {
							linkedIdentity: s
						} = t.payload, n = e && e.linkedIdentities || [];
						return e ? Object.assign(Object.assign({}, e), {
							linkedIdentities: n.filter(e => e !== s)
						}) : e
					}
					case Gl.c: {
						const {
							username: s
						} = t.payload;
						return e ? Object.assign(Object.assign({}, e), {
							displayText: s,
							isNameEditable: !1,
							url: "/user/".concat(s),
							username: s
						}) : e
					}
					default:
						return e
				}
			}), null);
			var KC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case VT.m:
					case VT.n:
						return null;
					case VT.l:
						return t.payload;
					default:
						return e
				}
			};
			var VC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VT.m:
							return !0;
						case VT.n:
						case VT.l:
							return !1;
						default:
							return e
					}
				},
				HC = Object(S.c)({
					error: KC,
					pending: VC
				}),
				WC = Object(S.c)({
					api: HC
				});
			var QC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case VT.j:
						return !0;
					default:
						return e
				}
			};
			var JC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VT.i:
							return !0;
						case VT.j:
						case VT.h:
							return !1;
						default:
							return e
					}
				},
				zC = Object(S.c)({
					pending: JC,
					emailSent: QC
				}),
				YC = Object(S.c)({
					api: zC
				}),
				XC = Object(S.c)({
					changeEmail: WC,
					sendResetEmail: YC
				}),
				ZC = s("./src/reddit/models/WhitelistAndBlocked.ts");
			const $C = {};
			var eA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $C,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xt.f:
						return Object.assign(Object.assign({}, e), {
							new: ZC.a.pending
						});
					case Xt.d:
						return Object.assign(Object.assign({}, e), {
							new: ZC.a.error
						});
					case Xt.e:
						return Object.assign(Object.assign({}, e), {
							new: ZC.a.waitingForRequest
						});
					case Xt.b: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: ZC.a.pending
						})
					}
					case Xt.a: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: ZC.a.error
						})
					}
					case Xt.c: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: ZC.a.waitingForRequest
						})
					}
					default:
						return e
				}
			};
			const tA = [];
			var sA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xt.e:
							return [t.payload, ...e];
						case Xt.c: {
							const s = t.payload.name;
							return e.filter(e => e.name !== s)
						}
						case Bu.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				nA = Object(S.c)({
					api: eA,
					data: sA
				}),
				aA = s("./src/reddit/actions/chat/constants.ts"),
				rA = s("./src/reddit/actions/chat/userSettings.ts");
			const cA = aA.a.anybody;
			var iA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rA.a:
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
				oA = Object(S.c)({
					invitePolicy: iA
				});
			const dA = (e, t) => void 0 === t || e && t === e.count ? e : Object.assign(Object.assign({}, e), {
				count: t
			});
			var lA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Be.b: {
						const {
							drafts: s
						} = t.payload;
						return e && fn()(e, s) ? e : Object.assign(Object.assign({}, e), s)
					}
					case b.P: {
						const {
							response: {
								draftsCount: s
							}
						} = t.payload;
						return dA(e, s)
					}
					case Na.e: {
						const {
							postDraftIds: s
						} = t.payload;
						return dA(e, s.length)
					}
					case Na.c:
					case Na.l: {
						const {
							draftsCount: s
						} = t.payload;
						return dA(e, s)
					}
					default:
						return e
				}
			};
			const uA = {};
			var bA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ni.a: {
							const e = t.payload.experimentVariants;
							return $O(e)
						}
						default:
							return e
					}
				},
				gA = s("./src/reddit/actions/global/constants.ts");
			const pA = {};
			var OA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gA.a: {
							const s = t.payload;
							return null === s.local_persisted_experiments_store || void 0 === s.local_persisted_experiments_store ? e : s.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				fA = Object(S.c)({
					byName: bA,
					localPersisted: OA
				}),
				jA = s("./src/reddit/actions/googleOneTap/index.ts");
			var yA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jA.a:
						return !0;
					default:
						return e
				}
			};
			var hA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bu.e:
						return !0;
					case Bu.d:
						return !1;
					default:
						return e
				}
			};
			var mA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bu.g:
						return t.payload;
					case Bu.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const vA = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var _A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VT.b:
							return t.payload;
						default:
							return e
					}
				},
				EA = s("./src/reddit/actions/notifications/constants.ts"),
				IA = s("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var wA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case IA.a:
					case EA.a:
						return t.payload && t.payload.error || null;
					case IA.c:
					case IA.a:
					case EA.c:
					case EA.b:
						return null;
					default:
						return e
				}
			};
			var SA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case EA.c:
						return !1;
					case EA.b:
						return !0;
					default:
						return e
				}
			};
			var TA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case EA.c:
							return !0;
						case EA.b:
						case EA.a:
							return !1;
						default:
							return e
					}
				},
				CA = Object(S.c)({
					error: wA,
					loaded: SA,
					pending: TA
				});
			var AA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case EA.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case EA.f:
					case EA.e:
						return null;
					default:
						return e
				}
			};
			var PA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case EA.f:
						return !1;
					case EA.e:
						return !0;
					default:
						return e
				}
			};
			var DA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case EA.f:
							return !0;
						case EA.e:
						case EA.d:
							return !1;
						default:
							return e
					}
				},
				RA = Object(S.c)({
					error: AA,
					loaded: PA,
					pending: DA
				}),
				kA = Object(S.c)({
					getPreferences: CA,
					setPreferences: RA
				}),
				NA = s("./src/lib/notifications/constants.ts");
			var LA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case NA.j:
						return !0;
					case NA.b:
					case NA.d:
					case NA.e:
						return !1;
					default:
						return e
				}
			};
			const xA = {
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
			var MA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xA,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case EA.b:
					case EA.f:
					case EA.d: {
						const {
							preferences: s
						} = t.payload;
						return Vc()(s) ? e : s
					}
					default:
						return e
				}
			};
			const UA = {
				byId: {},
				allIds: []
			};
			var FA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UA,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case IA.b: {
						const {
							rows: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case IA.d: {
						const s = t.payload && t.payload.messageType;
						return Object.assign(Object.assign({}, e), {
							byId: Object.assign(Object.assign({}, e.byId), {
								[s]: Object.assign(Object.assign({}, e.byId[s]), t.payload)
							})
						})
					}
					default:
						return e
				}
			};
			const GA = {
				byId: {},
				allIds: []
			};
			var BA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case IA.b: {
							const {
								sections: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				qA = Object(S.c)({
					sections: BA,
					rows: FA
				}),
				KA = Object(S.c)({
					api: kA,
					isNotificationPromptVisible: LA,
					preferences: MA,
					preferencesLayout: qA
				});
			const VA = {};
			var HA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VA,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.i:
					case i.i: {
						const {
							subredditId: s,
							userOwnedBadges: n
						} = t.payload, a = n.reduce((e, t) => (e[t] = !0, e), {});
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s] || {}), a)
						})
					}
					case g.d: {
						const {
							userOwnedBadges: s,
							product: n
						} = t.payload, a = s.reduce((e, t) => (e[t] = !0, e), {});
						return Object.assign(Object.assign({}, e), {
							[n.subredditId]: Object.assign(Object.assign({}, e[n.subredditId] || {}), a)
						})
					}
					default:
						return e
				}
			};
			const WA = {},
				QA = (e, t) => "".concat(e, "_").concat(t || new Date, "}");
			var JA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WA,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.wb: {
						const s = t.payload.powerups;
						if (s) {
							const {
								allocation: t
							} = s, n = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => Object.assign(Object.assign({}, e), {
								[QA(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return Object.assign(Object.assign({}, e), n)
						}
						return e
					}
					case Oe.V: {
						const {
							subredditId: s,
							powerupsCount: n,
							allocatedAt: a
						} = t.payload;
						if (n < 0) {
							const t = QA(s, a),
								r = e[t];
							if (r && r.isPremium) return Object.assign(Object.assign({}, e), {
								[t]: Object.assign(Object.assign({}, r), {
									powerups: r.powerups + n,
									isActive: !1,
									isDeallocationAllowed: !1
								})
							})
						}
						return e
					}
					case Oe.Q: {
						const {
							subredditId: s,
							allocatedAt: n
						} = t.payload, a = QA(s, n), r = e[a];
						return r && !r.isPremium ? Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, r), {
								isActive: !1,
								isDeallocationAllowed: !1
							})
						}) : e
					}
					default:
						return e
				}
			};
			var zA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.wb: {
						const s = t.payload.powerups;
						return s ? yn()(Object.assign(Object.assign({}, e), s), "allocation") : e
					}
					case Oe.V: {
						const {
							powerupsCount: s
						} = t.payload;
						if (s < 0) {
							const t = Math.max((e.freeCount || 0) - s, 0);
							if (e) return Object.assign(Object.assign({}, e), {
								freeCount: t
							})
						}
						return e
					}
					case Oe.W: {
						const {
							powerupsCount: s
						} = t.payload;
						if (s > 0) {
							const t = Math.max((e.freeCount || 0) - s, 0);
							if (e) return Object.assign(Object.assign({}, e), {
								freeCount: t
							})
						}
						return e
					}
					default:
						return e
				}
			};
			var YA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.vb:
						case Oe.xb:
							return !1;
						case Oe.wb:
							return !0;
						default:
							return e
					}
				},
				XA = Object(S.c)({
					allocationByKey: JA,
					data: zA,
					fetched: YA
				}),
				ZA = s("./src/reddit/reducers/user/prefs/index.ts");
			var $A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VT.d:
							return t.payload;
						default:
							return e
					}
				},
				eP = s("./src/reddit/actions/session.ts");
			var tP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eP.a:
					case eP.b:
					case eP.c:
					case eP.e:
						return t.payload;
					case eP.d:
						return null;
					default:
						return e
				}
			};
			var sP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eP.f:
						return !0;
					default:
						return e
				}
			};
			var nP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case VT.k:
						return t.payload;
					default:
						return e
				}
			};
			var aP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ni.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var rP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ni.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				cP = Object(S.c)({
					isEmployee: aP,
					isLoggedIn: rP
				});
			var iP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bu.r: {
							const {
								topContentDismissal: s
							} = t.payload;
							return e && fn()(e, s) ? e : Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				oP = s("./src/reddit/actions/userWhitelist.ts");
			const dP = {};
			var lP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oP.e:
						return Object.assign(Object.assign({}, e), {
							new: ZC.a.pending
						});
					case oP.d:
						return Object.assign(Object.assign({}, e), {
							new: ZC.a.error
						});
					case oP.f:
						return Object.assign(Object.assign({}, e), {
							new: ZC.a.waitingForRequest
						});
					case oP.b: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: ZC.a.pending
						})
					}
					case oP.a: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: ZC.a.error
						})
					}
					case oP.c: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: ZC.a.waitingForRequest
						})
					}
					default:
						return e
				}
			};
			const uP = [];
			var bP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uP,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oP.f:
							return [t.payload, ...e];
						case oP.c: {
							const s = t.payload.name;
							return e.filter(e => e.name !== s)
						}
						case Bu.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				gP = Object(S.c)({
					api: lP,
					data: bP
				}),
				pP = Object(S.c)({
					account: qC,
					accountSettings: XC,
					blocked: nA,
					chatSettings: oA,
					drafts: lA,
					experiments: fA,
					googleOneTapEnabled: yA,
					isCustomizeFlyoutShowing: hA,
					topContentDismissalPrefsSet: iP,
					language: mA,
					loid: _A,
					notificationPrefs: KA,
					ownedBadges: HA,
					powerups: XA,
					prefs: ZA.c,
					reddaid: $A,
					session: tP,
					sessionRefreshFailed: sP,
					sessionTracker: nP,
					temporaryGQL: cP,
					wallets: xC,
					whitelist: gP
				});
			var OP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case FC.a:
						return t.payload || null;
					case FC.b:
					case FC.c:
						return null;
					default:
						return e
				}
			};
			var fP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case FC.c:
						return !0;
					case FC.b:
					case FC.a:
						return !1;
					default:
						return e
				}
			};
			var jP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case FC.b:
						return !0;
					case FC.a:
					case FC.c:
						return !1;
					default:
						return e
				}
			};
			var yP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case FC.b:
							return t.payload.userDataExportEligibility;
						case FC.a:
						case FC.c:
							return !1;
						default:
							return e
					}
				},
				hP = Object(S.c)({
					error: OP,
					pending: fP,
					success: jP,
					userDataExportEligibility: yP
				}),
				mP = Object(S.c)({
					userDataRequestPageApi: hP
				});
			const vP = {};
			var _P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c:
					case Be.b:
					case _r.a:
					case Fe.b:
					case te.b:
					case de.e:
						return Object.assign(Object.assign({}, e), t.payload.userFlair);
					case ee.i:
					case ee.f:
					case ee.m:
					case ee.p:
					case ee.v: {
						const {
							response: s
						} = t.payload, {
							userFlair: n
						} = s, a = Object.assign({}, e);
						return Object.keys(n).forEach(e => {
							a[e] || (a[e] = n[e])
						}), a
					}
					case de.i: {
						const {
							subredditId: s,
							applied: n,
							displaySettings: a
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								applied: n,
								displaySettings: a
							})
						})
					}
					case $.h: {
						const {
							subredditId: s,
							applied: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								applied: n
							})
						})
					}
					case de.d: {
						const {
							subredditId: s,
							isEnabled: n
						} = t.payload, a = e[s].displaySettings, r = Object.assign(Object.assign({}, a), {
							isEnabled: n
						});
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								displaySettings: r
							})
						})
					}
					case de.b: {
						const {
							subredditId: s,
							canAssignOwn: n
						} = t.payload, a = e[s].permissions, r = Object.assign(Object.assign({}, a), {
							canAssignOwn: n
						});
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								permissions: r
							})
						})
					}
					case de.h: {
						const s = t.payload,
							n = e[s.subredditId],
							a = e[s.subredditId].templates,
							r = e[s.subredditId].templateIds,
							c = Object.assign(Object.assign({}, a), {
								[s.template.id]: s.template
							}),
							i = [...r];
						return i.includes(s.template.id) || i.push(s.template.id), Object.assign(Object.assign({}, e), {
							[s.subredditId]: Object.assign(Object.assign({}, n), {
								templates: c,
								templateIds: i
							})
						})
					}
					case de.c: {
						const s = t.payload,
							n = e[s.subredditId],
							a = e[s.subredditId].templates,
							r = e[s.subredditId].templateIds,
							c = yn()(a, s.templateId),
							i = r.filter(e => e !== s.templateId);
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: Object.assign(Object.assign({}, n), {
								templates: Object.assign({}, c),
								templateIds: i
							})
						})
					}
					case de.g:
					case de.f: {
						const s = t.payload,
							n = e[s.subredditId];
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: Object.assign(Object.assign({}, n), {
								templateIds: s.templateIds
							})
						})
					}
					default:
						return e
				}
			};
			const EP = {};
			var IP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case VT.g:
					case VT.f: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: null
						})
					}
					case VT.e: {
						const {
							username: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: n
						})
					}
					default:
						return e
				}
			};
			var wP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VT.g:
							return !0;
						case VT.f:
						case VT.e:
							return !1;
						default:
							return e
					}
				},
				SP = Object(S.c)({
					error: IP,
					pending: wP
				});
			const TP = {};
			var CP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.f: {
						const {
							subredditId: s,
							usersAppliedBadges: n
						} = t.payload, a = Object.keys(n).reduce((t, a) => {
							const r = n[a];
							return t[a] = Object.assign(Object.assign({}, e[a] || {}), {
								[s]: r
							}), t
						}, {});
						return Object.assign(Object.assign({}, e), a)
					}
					case i.b: {
						const {
							badgeIds: s,
							subredditId: n,
							userId: a
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, e[a] || {}), {
								[n]: s
							})
						})
					}
					case i.a: {
						const {
							previousBadgeIds: s,
							subredditId: n,
							userId: a
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, e[a] || {}), {
								[n]: s
							})
						})
					}
					case o.a: {
						const {
							badge: s,
							currentAppliedBadges: n,
							placement: a,
							subredditId: r,
							userId: c
						} = t.payload, i = n.filter(e => e.placement !== a).concat(s).filter(Boolean).map(e => e.id);
						return Object.assign(Object.assign({}, e), {
							[c]: Object.assign(Object.assign({}, e[c] || {}), {
								[r]: i
							})
						})
					}
					default:
						return e
				}
			};
			const AP = {},
				PP = (e, t) => {
					const s = Object.keys(t);
					if (!s.length) return e;
					const n = {};
					return s.forEach(s => {
						const a = e[s],
							r = t[s];
						a && fn()(a, r) || (n[s.toLowerCase()] = r)
					}), Object.keys(n).length ? Object.assign(Object.assign({}, e), n) : e
				};
			var DP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AP,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VT.f: {
							const {
								data: s
							} = t.payload;
							return PP(e, s)
						}
						case OO.k: {
							const {
								user: s
							} = t.payload;
							return PP(e, {
								[s.username]: s
							})
						}
						case Oe.t: {
							const {
								gildee: s
							} = t.payload;
							if (!s) return e;
							const n = e[s.toLowerCase()];
							if (!n) return e;
							const a = n.awardedLastMonth,
								r = a ? a.totalCount + 1 : 1,
								c = a && a.topAward;
							return c ? PP(e, {
								[s.toLowerCase()]: Object.assign(Object.assign({}, n), {
									awardedLastMonth: {
										totalCount: r,
										topAward: c
									}
								})
							}) : e
						}
						case Oe.a: {
							const {
								userName: s,
								awardeeKarma: n,
								awarderKarma: a
							} = t.payload, r = e[s.toLowerCase()];
							if (!r) return e;
							const c = n || r.awardeeKarma,
								i = a || r.awarderKarma;
							return PP(e, {
								[s.toLowerCase()]: Object.assign(Object.assign({}, r), {
									awardeeKarma: c,
									awarderKarma: i,
									totalKarma: c + i + r.postKarma + r.commentKarma
								})
							})
						}
						case Bu.l:
						case Bu.k: {
							const {
								imageUrl: s,
								key: n,
								username: a
							} = t.payload;
							if ("profileIcon" !== n) return e;
							const r = a.toLowerCase(),
								c = e[r];
							return c ? PP(e, {
								[r]: Object.assign(Object.assign({}, c), {
									accountIcon: s
								})
							}) : e
						}
						default:
							return e
					}
				},
				RP = s("./src/reddit/actions/usernameAvailable.ts");
			const kP = {};
			var NP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case RP.a: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: RP.b.Available
						})
					}
					case RP.c: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: RP.b.Error
						})
					}
					case RP.d: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: RP.b.Pending
						})
					}
					case RP.e: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: RP.b.Unavailable
						})
					}
					default:
						return e
				}
			};
			const LP = {};
			var xP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.bb: {
						const {
							userId: s,
							supportedSubreddits: n
						} = t.payload, a = {
							[s]: n
						};
						return Object.assign(Object.assign({}, e), a)
					}
					default:
						return e
				}
			};
			var MP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.ab:
						case Oe.cb:
							return !1;
						case Oe.bb:
							return !0;
						default:
							return e
					}
				},
				UP = Object(S.c)({
					allocationByKey: xP,
					fetched: MP
				});
			const FP = {};
			var GP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.n: {
						const {
							subredditId: s,
							wallets: n
						} = t.payload, a = Object.keys(n).reduce((t, a) => {
							const r = e[a] || {},
								c = Object.assign(Object.assign({}, r), {
									[s]: n[a]
								});
							return Object.assign(Object.assign({}, t), {
								[a]: c
							})
						}, {});
						return Object.assign(Object.assign({}, e), a)
					}
					default:
						return e
				}
			};
			var BP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.qb:
						return t.payload;
					case Oe.sb:
					case Oe.rb:
						return null;
					default:
						return e
				}
			};
			var qP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.rb:
						case Oe.qb:
							return !1;
						case Oe.sb:
							return !0;
						default:
							return e
					}
				},
				KP = Object(S.c)({
					error: BP,
					pending: qP
				});
			var VP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.tb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const HP = {};
			var WP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Oe.rb: {
						const {
							postId: s,
							currentRank: n
						} = t.payload;
						return n ? Object.assign(Object.assign({}, e), {
							[s]: n
						}) : e
					}
					default:
						return e
				}
			};
			const QP = {};
			var JP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QP,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oe.rb: {
							const {
								postId: s,
								topAwardersRank: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: (n || []).sort((e, t) => e.rank - t.rank)
							})
						}
						case Oe.t: {
							const {
								id: s
							} = t.payload;
							return yn()(e, [s])
						}
						default:
							return e
					}
				},
				zP = Object(S.c)({
					api: KP,
					currentPostId: VP,
					currentRank: WP,
					list: JP
				}),
				YP = Object(S.c)({
					api: SP,
					appliedBadges: CP,
					models: DP,
					nameAvailable: NP,
					publicWallets: GP,
					topAwarders: zP,
					powerups: UP
				});
			const XP = {};
			var ZP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XP,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.b:
						case te.b:
						case ce.c:
						case oe.i:
						case re.c:
						case Be.b:
						case _r.a: {
							const {
								structuredStyles: s
							} = t.payload;
							if (!(s && s.data && s.data.content)) return e;
							const n = s.data.content.widgets.layout.idCardWidget,
								a = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== a.length) return e;
							const r = a[0];
							return Object.assign(Object.assign({}, e), {
								[r]: n
							})
						}
						default:
							return e
					}
				},
				$P = s("./src/reddit/actions/widgets/constants.ts");
			const eD = {};
			var tD = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.b:
						case te.b:
						case re.c:
						case oe.i:
						case ce.c:
						case Be.b: {
							const {
								structuredStyles: s
							} = t.payload;
							if (!(s && s.data && s.data.content)) return e;
							const n = s.data.content.widgets.items,
								a = s.data.content.widgets.layout.topbar.order.filter(e => n[e] && "menu" === n[e].kind);
							if (!a.length) return e;
							const r = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== r.length) return e;
							const c = r[0];
							return Object.assign(Object.assign({}, e), {
								[c]: a[0]
							})
						}
						case $P.g: {
							const s = t.payload;
							return "menu" !== s.widget.kind ? e : Object.assign(Object.assign({}, e), {
								[s.subredditId]: s.widgetId
							})
						}
						case $P.h: {
							const s = t.payload;
							return e[s.subredditId] === s.widgetId ? Object.assign(Object.assign({}, e), {
								[s.subredditId]: null
							}) : e
						}
						default:
							return e
					}
				},
				sD = s("./src/reddit/models/Widgets/index.ts");
			const nD = {};
			var aD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c: {
						const s = t.payload,
							n = s.structuredStyles && s.structuredStyles.data && s.structuredStyles.data.content;
						if (!n) return e;
						const a = n.widgets;
						return Object.assign(Object.assign({}, e), a.items)
					}
					case $P.b: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), s.widgets.items)
					}
					case O.k: {
						const t = Object.assign({}, e);
						return Object.keys(t).forEach(e => {
							t[e] = Object.assign(Object.assign({}, t[e]), {
								styles: Object(sD.m)()
							})
						}), t
					}
					case $P.e: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), s.widgets.items)
					}
					case $P.i:
					case $P.g: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.widget.id]: s.widget
						})
					}
					case $P.h: {
						const s = t.payload,
							n = Object.assign({}, e);
						return delete n[s.widgetId], n
					}
					case Fe.b:
					case te.b:
					case ce.c:
					case oe.i:
					case re.c:
					case Be.b:
					case _r.a: {
						const {
							structuredStyles: s
						} = t.payload;
						if (!(s && s.data && s.data.content)) return e;
						const n = s.data.content.widgets;
						return Object.assign(Object.assign({}, e), n.items)
					}
					case yO.h: {
						const {
							userIsSubscriber: s,
							nameIdentifiers: n,
							widgetId: a
						} = t.payload;
						if (!a || !e[a] || "community-list" !== e[a].kind) return Object.assign({}, e);
						const r = s,
							c = e[a],
							i = c.data.map(e => {
								const t = Object.assign({}, e);
								return n.some(e => e.name === t.name) && (t.isSubscribed = r), t
							});
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, c), {
								data: i
							})
						})
					}
					case tw.f: {
						const {
							settings: s,
							idCardWidgetId: n
						} = t.payload;
						return n && e[n] && "publicDescription" in s && s.publicDescription !== e[n].description ? Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								description: s.publicDescription || ""
							})
						}) : e
					}
					default:
						return e
				}
			};
			const rD = {};
			var cD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c:
					case te.b:
					case oe.i:
					case Be.b: {
						const {
							structuredStyles: s
						} = t.payload;
						if (!(s && s.data && s.data.content)) return e;
						const n = s.data.content.widgets.layout.moderatorWidget,
							a = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const r = a[0];
						return Object.assign(Object.assign({}, e), {
							[r]: n
						})
					}
					default:
						return e
				}
			};
			const iD = {};
			var oD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c:
					case Be.b:
					case _r.a: {
						const s = t.payload,
							n = s.structuredStyles && s.structuredStyles.data && s.structuredStyles.data.content;
						if (!n) return e;
						const a = Object.keys(s.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const r = a[0],
							c = n.widgets.layout.sidebar.order;
						return Object.assign(Object.assign({}, e), {
							[r]: c
						})
					}
					case $P.e:
					case $P.b: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: s.widgets.layout.sidebar.order
						})
					}
					case $P.f: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: s.widgetIds
						})
					}
					case $P.g: {
						const s = t.payload;
						if ("menu" === s.widget.kind) return e;
						if (!e[s.subredditId]) return Object.assign(Object.assign({}, e), {
							[s.subredditId]: [s.widgetId]
						});
						const n = e[s.subredditId].concat(s.widgetId);
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: n
						})
					}
					case $P.h: {
						const s = t.payload;
						if (!e[s.subredditId]) return e;
						const n = e[s.subredditId].filter(e => e !== s.widgetId);
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: n
						})
					}
					case Fe.b:
					case te.b:
					case ce.c:
					case re.c:
					case oe.i:
					case Be.b:
					case _r.a: {
						const {
							structuredStyles: s
						} = t.payload;
						if (!(s && s.data && s.data.content)) return e;
						const n = s.data.content.widgets.layout.sidebar.order,
							a = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const r = a[0];
						return Object.assign(Object.assign({}, e), {
							[r]: n
						})
					}
					default:
						return e
				}
			};
			const dD = {
				accountManagerModalData: r,
				activeModalId: j,
				ads: _,
				apiRequestState: w,
				approvedSubmitters: Q,
				authorFlair: pe,
				awards: ot,
				badges: _t,
				banned: qt,
				blockedRedditors: Yt,
				blockUser: ns,
				brandSafety: rs,
				chat: Vs,
				claimGold: Zs,
				comments: Hn,
				commentsListTruncated: Qn,
				commentsPage: ha,
				communityFlairs: _a,
				contentGate: wa,
				continueThreads: Ca,
				creations: Nc,
				dashboard: Mc,
				discoveryUnits: Zc,
				dismissedTruncationList: ti,
				economics: Ei,
				emojis: ki,
				experimentOverrides: Ui,
				externalAccount: po,
				featureFlags: vo,
				flairedUsers: xo,
				focusedVerticals: zo,
				fontFiles: Xo,
				gild: ud,
				goldPurchase: _l,
				header: Sl,
				htmlResponseStreaming: Tl,
				imageUploads: Pl,
				inboxNotifications: Ml,
				interceptedAction: Fl,
				isChangeUsernameTooltipShowing: Bl,
				isEmailVerificationTooltipShowing: Kl,
				isModeratorWithPostPerms: Hl,
				jsApi: Jl,
				leaderboard: ru,
				listings: zu,
				live: $u,
				mediaGalleries: rb,
				mediaPlayback: ob,
				meta: ub,
				moderatingSubreddits: gb,
				moderationLog: Cb,
				moderationPromptId: Ab,
				moderators: Og,
				modListingPage: _g,
				modModeEnabled: Eg,
				modQueue: Ip,
				moreComments: kp,
				multireddits: IO,
				muted: KO,
				notificationBannerId: HO,
				nps: JO,
				oldSiteRules: XO,
				page: nf,
				platform: lf,
				postCollection: Kf,
				postRequirements: rj,
				polls: Df,
				postFlair: zf,
				posts: ah,
				postStickiedComments: oh,
				givePremium: fd,
				products: Eh,
				profileCommentsPage: Uh,
				profilePrivatePage: Mm,
				profileModSettingsPage: qh,
				profileOverviewPage: wm,
				profilePostsPage: Tm,
				profiles: jv,
				promos: _v,
				publicAccessNetwork: s_,
				recommendations: a_,
				removalReasons: O_,
				reportFlow: S_,
				reportPage: x_,
				reportRules: F_,
				requestHost: G_,
				runTimeEnvVars: K_,
				search: tE,
				searchDiscoveryUnits: dE,
				seo: pE,
				shortcuts: IE,
				sidebarPromotedPosts: TE,
				streaming: LE,
				structuredStyles: eI,
				stylesheets: tI,
				subredditAutocomplete: lI,
				subredditChannels: _I,
				subreddits: WS,
				subredditStickyPosts: zS,
				subscriptions: OT,
				tabBadged: jT,
				tags: BT,
				themes: QT,
				toaster: YT,
				tooltipId: ZT,
				tracing: tC,
				tracking: uC,
				trafficStats: OC,
				transfers: EC,
				trending: TC,
				trophies: AC,
				uploads: kC,
				user: pP,
				userDataRequestPage: mP,
				userFlair: _P,
				users: YP,
				widgets: Object(S.c)({
					idCardIds: ZP,
					menuIds: tD,
					models: aD,
					moderatorIds: cD,
					sidebar: oD
				})
			}
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, a, r = s("./node_modules/lodash/isEqual.js"),
				c = s.n(r),
				i = s("./node_modules/lodash/merge.js"),
				o = s.n(i),
				d = s("./node_modules/lodash/pick.js"),
				l = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/frontpage.ts"),
				O = s("./src/reddit/actions/header.ts"),
				f = s("./src/reddit/actions/modQueue/constants.ts"),
				j = s("./src/reddit/actions/page.ts"),
				y = s("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				h = s("./src/reddit/actions/pages/modListing/constants.ts"),
				m = s("./src/reddit/actions/pages/postCreation.ts"),
				v = s("./src/reddit/actions/pages/postDraft.ts"),
				_ = s("./src/reddit/actions/pages/profileComments.ts"),
				E = s("./src/reddit/actions/pages/profileOverview.ts"),
				I = s("./src/reddit/actions/pages/profilePosts.ts"),
				w = s("./src/reddit/actions/pages/search.ts"),
				S = s("./src/reddit/actions/pages/subreddit.ts"),
				T = s("./src/reddit/actions/pages/topic.ts"),
				C = s("./src/reddit/actions/postCreation/constants.ts"),
				A = s("./src/reddit/actions/postDraft.ts"),
				P = s("./src/reddit/actions/preferences.ts"),
				D = s("./src/reddit/actions/redditEmbed.ts"),
				R = s("./src/reddit/actions/search.ts"),
				k = s("./src/reddit/actions/structuredStyles/constants.ts"),
				N = s("./src/reddit/actions/subreddit.ts"),
				L = s("./src/reddit/actions/users.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				M = s("./src/reddit/constants/preferences.ts"),
				U = s("./src/reddit/constants/theme.ts"),
				F = s("./src/reddit/models/PostCreationForm/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				B = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(n || (n = {})),
			function(e) {
				e.Whitelisted = "nobody", e.Everyone = "everyone"
			}(a || (a = {}));
			const q = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", ...M.a, "loginOtpEnabled"],
				K = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: B.a,
					commentMode: F.h.RICH_TEXT,
					layout: x.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: u.r.CONFIDENCE,
					editorMode: F.h.RICH_TEXT,
					geopopular: void 0,
					globalTheme: U.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					loginOtpEnabled: !1,
					markMessagesRead: !0,
					nightmode: !1,
					openPostInNewTab: !1,
					over18: !1,
					profileLayout: void 0,
					reduceAnimationsFromAwards: !1,
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showRpanDu: !0,
					showTwitter: !1,
					sort: u.Q.Hot,
					stylesEnabled: !0,
					subreddit: {},
					subscriptionsPinned: void 0,
					surveyLastSeenTime: void 0,
					thirdPartyDataPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedContent: !0,
					showLocationBasedRecommendations: !0,
					topContentDismissalTime: 0,
					topContentTimesDismissed: 0,
					rememberCommunitySort: !1,
					useMarkdown: !1
				},
				V = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				H = (e, t) => {
					if (!t) return e;
					const s = l()(Object.assign(Object.assign({}, t.account), t), q),
						n = t.subreddit,
						a = Object.assign({}, e.subreddit);
					Object.keys(n || {}).forEach(e => {
						a[e] = Object.assign(Object.assign({}, V), n && n[e])
					});
					const r = Object.assign(Object.assign(Object.assign({}, e), s), {
						subreddit: a
					});
					if (r.useMarkdown !== e.useMarkdown) {
						const e = r.useMarkdown ? F.h.MARKDOWN : F.h.RICH_TEXT;
						r.editorMode = e, r.commentMode = e
					}
					return c()(r, e) ? e : r
				},
				W = (e, t, s) => H(e, {
					subreddit: {
						[t]: Object.assign(Object.assign(Object.assign({}, V), e.subreddit[t]), s)
					}
				});
			t.c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.l:
					case b.s: {
						const {
							editorMode: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							commentMode: s
						})
					}
					case C.v:
					case C.Q: {
						const {
							editorMode: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							editorMode: s
						})
					}
					case O.d:
						return Object.assign(Object.assign({}, e), {
							subscriptionsPinned: !0
						});
					case O.e:
						return Object.assign(Object.assign({}, e), {
							subscriptionsPinned: !1
						});
					case A.g: {
						const {
							kind: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							editorMode: s === G.b.Markdown ? F.h.MARKDOWN : F.h.RICH_TEXT
						})
					}
					case P.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : Object.assign(Object.assign({}, e), {
							layout: s
						})
					}
					case P.o:
						return void 0 !== t.payload ? Object.assign(Object.assign({}, e), {
							rpanDuDismissalTime: t.payload
						}) : e;
					case P.p: {
						const {
							layout: s,
							subredditId: n
						} = t.payload;
						return W(e, n, {
							layout: s
						})
					}
					case P.e:
						return Object.assign(Object.assign({}, e), {
							hasSeenCustomizeFlyout: !0
						});
					case P.m:
						return e.profileLayout === t.payload.profileLayout ? e : Object.assign(Object.assign({}, e), {
							profileLayout: t.payload.profileLayout
						});
					case g.g:
						return Object.assign(Object.assign({}, e), {
							over18: !0
						});
					case P.b:
						return void 0 !== t.payload ? Object.assign(Object.assign({}, e), {
							autoplayVideo: t.payload.autoplayVideo
						}) : e;
					case P.i:
						return void 0 !== t.payload ? Object.assign(Object.assign({}, e), {
							nightmode: t.payload.nightmode
						}) : e;
					case P.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								topContentDismissalTime: s,
								topContentTimesDismissed: n
							})
						}
						return e;
					case k.d:
						return t.payload.isNightmodeOn ? Object.assign(Object.assign({}, e), {
							nightmode: !1,
							nightmodeTempUpdated: !0
						}) : e;
					case k.e:
						return t.payload.nightmodeTempUpdated ? Object.assign(Object.assign({}, e), {
							nightmode: !0,
							nightmodeTempUpdated: !1
						}) : e;
					case P.f:
						return void 0 !== t.payload ? Object.assign(Object.assign({}, e), {
							hamburgerTray: t.payload.set
						}) : Object.assign(Object.assign({}, e), {
							hamburgerTray: !e.hamburgerTray
						});
					case P.c:
						return void 0 !== t.payload ? Object.assign(Object.assign({}, e), {
							collapsedTraySections: o()({}, e.collapsedTraySections, t.payload)
						}) : e;
					case g.a:
					case g.b:
					case g.h:
					case g.i:
					case g.f:
					case g.j:
					case h.e:
					case h.h:
					case y.a:
					case j.a:
					case y.b:
					case j.b:
					case y.d:
					case j.d:
					case j.g:
					case S.c:
					case j.k:
					case j.j:
					case _.e:
					case E.e:
					case E.b:
					case I.e:
					case p.b:
					case N.i:
					case R.c:
					case D.b:
					case m.b:
					case v.a:
					case P.j:
					case w.c:
					case P.a:
					case L.c:
					case T.e:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case P.q: {
						const {
							subredditId: s,
							prefs: n
						} = t.payload;
						return W(e, s, n)
					}
					case _.d:
					case E.d:
					case E.a:
					case I.d:
						if (t.payload && t.payload.account) {
							const {
								nightmode: s
							} = t.payload.account;
							if (e.nightmode !== s) return Object.assign(Object.assign({}, e), {
								nightmode: s
							})
						}
						return e;
					case f.h:
					case f.j:
					case f.i:
					case f.g:
					case f.f:
					case f.n:
					case f.m:
					case f.p:
					case f.q:
					case f.w:
					case f.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case P.n: {
						const s = t.payload,
							{
								showActiveCommunities: n
							} = s.additional;
						return e.showActiveCommunities !== n ? Object.assign(Object.assign({}, e), {
							showActiveCommunities: n
						}) : e
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/core-js/modules/es6.regexp.replace.js"),
				a = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/pages/postCreation.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const d = [o.b, o.c, o.a],
				l = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~StandalonePostPage~Subreddit"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), s.e("vendors~PostCreation~RichTextEditor"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				u = e => "/".concat(e, "/submit"),
				b = (e, t) => {
					return o.c.replace(/:subredditName/, e) + (t ? "?collection=".concat(t) : "")
				},
				g = e => o.a.replace(/:profileName/, e),
				p = {
					action: i.e,
					component: l,
					chunk: c.p.POST_CREATION,
					exact: !0,
					meta: {
						name: c.Bb.POST_CREATION
					},
					path: d,
					prefetches: [c.p.COMMENTS_PAGE]
				};
			t.a = p
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = e => e.blockedRedditors.api.pending,
				a = e => e.blockedRedditors.list,
				r = (e, t) => {
					const s = (e => {
						const t = a(e);
						return t && t.ids
					})(e);
					return !!s && s.includes(t)
				}
		},
		"./src/reddit/selectors/chatSettingsPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/ChatSettingsPage/index.ts");
			const a = (e, t) => {
					let {
						subredditId: s
					} = t;
					return !!e.chat.subredditSettingsPage.api.fetch.pending[s]
				},
				r = (e, t) => {
					let {
						subredditId: s
					} = t;
					return (e.chat.subredditSettingsPage.models[s] || []).filter(e => e && e.settingType !== n.a.Unknown)
				}
		},
		"./src/reddit/selectors/claimgold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = e => e.claimGold.code,
				a = e => e.claimGold.showModal
		},
		"./src/reddit/selectors/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = (e, t) => e.chat.downToChat.subreddits[t] && e.chat.downToChat.subreddits[t].bannerEnabled,
				a = (e, t) => e.chat.downToChat.subreddits[t] && e.chat.downToChat.subreddits[t].buttonEnabled,
				r = (e, t) => !!e.chat.downToChat.subreddits[t]
		},
		"./src/reddit/selectors/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "a", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/values.js"),
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/models/Flair/index.ts"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			const d = [],
				l = e => e.emojis.models,
				u = Object(r.a)(l, (e, t) => t.subredditId, (e, t) => {
					const s = e[t];
					return s ? [...a()(s.emojis), ...a()(s.snoomojis)] : d
				}),
				b = Object(r.a)(u, i.g, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, s, n) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !s) && (!(!e.userFlairAllowed && n === c.d.UserFlair) && !(!e.postFlairAllowed && n === c.d.LinkFlair)))),
				g = Object(r.a)(l, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				p = (e, t) => Object(o.y)(e, {
					subredditName: t
				}).emojisEnabled,
				O = {
					emojis: {},
					snoomojis: {}
				},
				f = (e, t) => {
					let {
						subredditId: s
					} = t;
					return l(e)[s] || O
				},
				j = (e, t) => !!e.emojis.api.list.pending[t]
		},
		"./src/reddit/selectors/experiments/googleOneTap.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				c = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const o = Object(n.a)(c.c, e => !e),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => o(e),
					experimentName: a.H,
					expEventOverride: !1
				}), e => e),
				l = e => e === a.z.Onetap,
				u = e => e === a.z.OnetapAuto,
				b = e => e.user.googleOneTapEnabled,
				g = Object(n.a)(i.I, d, (e, t) => !e && !!t),
				p = Object(n.a)(i.I, d, (e, t) => !e && !!t && !Object(a.Gc)(t))
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/models/Flair/index.ts"),
				r = s("./src/reddit/models/PostCreationForm/index.ts");
			a.f.Text, a.f.Spoiler, a.f.Text, a.f.Spoiler, r.h.RICH_TEXT, a.f.Text, a.f.Spoiler, r.h.RICH_TEXT, a.f.Text, a.f.Spoiler, r.h.RICH_TEXT;
			var c = s("./src/reddit/helpers/isComment.ts");
			const i = Object(n.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models;
					return o(e, {
						listingKey: s
					}).filter(e => {
						if (Object(c.a)(e)) return !0; {
							const t = n[e];
							return t && !t.hidden
						}
					})
				}),
				o = Object(n.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.profileOverviewPage.chrono.ids[s];
					return n ? [...n] : []
				}),
				d = Object(n.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return i(e, {
						listingKey: s
					}).reduce((t, s) => {
						const n = Object(c.a)(s) ? e.comments.models[s].postId : s;
						return t[s] = n, t
					}, {})
				}),
				l = (Object(n.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models;
					return l(e, {
						listingKey: s
					}).filter(e => {
						const t = n[e];
						return t && !t.hidden
					})
				}), Object(n.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return i(e, {
						listingKey: s
					}).map(t => Object(c.a)(t) ? e.comments.models[t].postId : t)
				})),
				u = Object(n.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models,
						a = l(e, {
							listingKey: s
						}),
						r = {};
					return a.forEach(e => r[e] = n[e]), r
				}),
				b = Object(n.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.comments.models,
						a = i(e, {
							listingKey: s
						}),
						r = {};
					return a.forEach(e => !!Object(c.a)(e) && (r[e] = n[e])), r
				}),
				g = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profileOverviewPage.chrono.api.error[s]
				},
				p = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profileOverviewPage.chrono.api.pending[s]
				},
				O = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profileOverviewPage.chrono.loadMore[s]
				},
				f = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profileOverviewPage.chrono.fetchedTokens[s]
				}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return c
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "j", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "q", (function() {
				return p
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "r", (function() {
				return m
			})), s.d(t, "m", (function() {
				return v
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "b", (function() {
				return S
			}));
			var n = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				a = s("./src/reddit/models/Flair/index.ts"),
				r = s("./src/reddit/models/ScheduledPost/index.ts");
			const c = (e, t) => {
					let {
						subredditId: s
					} = t;
					return ((e, t) => {
						let {
							subredditId: s,
							type: n
						} = t;
						return !!e.posts.scheduledPosts[n].models[s]
					})(e, {
						subredditId: s,
						type: r.f.standalonePosts
					})
				},
				i = (e, t) => {
					let {
						subredditId: s,
						type: n
					} = t;
					return !!e.posts.scheduledPosts[n].pageInfo[s] && e.posts.scheduledPosts[n].pageInfo[s].hasNextPage
				},
				o = (e, t) => {
					let {
						subredditId: s,
						type: n
					} = t;
					return e.posts.scheduledPosts[n].pageInfo[s] ? e.posts.scheduledPosts[n].pageInfo[s].endCursor : null
				},
				d = e => e.posts.scheduledPosts.api.pending,
				l = e => e.posts.scheduledPosts.api.pendingUpdate,
				u = e => e.posts.scheduledPosts.api.error,
				b = {},
				g = [],
				p = (e, t) => {
					let {
						subredditId: s
					} = t;
					return (e.posts.scheduledPosts.standalonePosts.postOrder[s] || g).filter(t => !!(e.posts.scheduledPosts.standalonePosts.models[s] || b)[t]).map(t => e.posts.scheduledPosts.standalonePosts.models[s][t])
				},
				O = (e, t) => {
					let {
						subredditId: s
					} = t;
					return (e.posts.scheduledPosts.recurringPosts.postOrder[s] || g).filter(t => !!(e.posts.scheduledPosts.recurringPosts.models[s] || b)[t]).map(t => e.posts.scheduledPosts.recurringPosts.models[s][t])
				},
				f = (e, t) => {
					let {
						subredditId: s,
						scheduledPostId: n,
						type: a
					} = t;
					return (e.posts.scheduledPosts[a].models[s] || b)[n] || void 0
				},
				j = (e, t) => {
					let {
						subredditId: s,
						scheduledPostId: n
					} = t;
					return f(e, {
						subredditId: s,
						scheduledPostId: n,
						type: r.f.standalonePosts
					})
				},
				y = (e, t) => {
					let {
						subredditId: s,
						scheduledPostId: n
					} = t;
					const a = f(e, {
						subredditId: s,
						scheduledPostId: n,
						type: r.f.recurringPosts
					});
					return a || a
				},
				h = (e, t) => {
					let {
						subredditId: s,
						scheduledPostId: n
					} = t;
					return j(e, {
						subredditId: s,
						scheduledPostId: n
					}) || y(e, {
						subredditId: s,
						scheduledPostId: n
					})
				},
				m = e => e.creations.formData.scheduledPostId,
				v = e => {
					let {
						scheduledPost: t
					} = e;
					return (e => {
						let {
							flair: t,
							isNsfw: s,
							isSpoiler: r,
							isOriginalContent: c
						} = e;
						const i = [];
						return c && i.push({
							text: "OC",
							type: a.f.Oc
						}), t && i.push(...Object(n.b)(t)), r && i.push({
							text: "spoiler",
							type: a.f.Spoiler
						}), s && i.push({
							text: "nsfw",
							type: a.f.Nsfw
						}), i
					})(t)
				},
				_ = e => {
					let {
						scheduledPost: t
					} = e;
					const s = v({
							scheduledPost: t
						}),
						n = s.find(e => e.type === a.f.Richtext);
					return n || (s.find(e => e.type === a.f.Text) || null)
				},
				E = e => e.posts.scheduledPosts[r.f.recurringPosts].editModal.scheduledPostId,
				I = e => e.posts.scheduledPosts[r.f.recurringPosts].editModal.subredditId,
				w = e => e.posts.scheduledPosts.api.pendingUpdate,
				S = e => e.posts.scheduledPosts.api.creationToken
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.662a8dde135b9728443f.js.map