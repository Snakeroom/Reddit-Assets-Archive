// https://www.redditstatic.com/desktop2x/Governance~Reddit.a9ac8eb5faa727742e46.js
// Retrieved at 10/27/2020, 4:00:06 PM by Reddit Dataminer v1.0.0
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
			e.exports = JSON.parse('{"id":"7f4b3a58cc5e"}')
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
		"./src/lib/makeProductOfferKey/index.ts": function(e, t, s) {
			"use strict";

			function n(e, t) {
				return "".concat(e, "_").concat(t)
			}
			s.d(t, "a", (function() {
				return n
			}))
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
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = "FETCH_SUBREDDIT_TOP_PREDICTORS_SUCCESS",
				a = "PREDICTION_VOTE_SUCCESS"
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
				return B
			})), s.d(t, "l", (function() {
				return G
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
				return X
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
					buttonAction: B(e)
				}),
				U = e => {
					let {
						imageData: t,
						subredditId: s
					} = e;
					return async (e, n, a) => {
						const r = n(),
							u = Object(_.T)(r, {
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
					} = e, O = Object(f.a)(r.url), j = n(), y = Object(_.T)(j, {
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
				}, B = e => async (t, s, n) => {
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
							t(I(d)), t(G(r))
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
				}, G = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const r = s();
					if (Object(v.a)(r, e)) return;
					const c = Object(_.T)(r, {
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
					s().emojis[e] || await t(G(e))
				}, K = (e, t) => async (s, a, r) => {
					let {
						apiContext: d
					} = r;
					const u = a(),
						b = Object(_.T)(u, {
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
						b = Object(_.T)(u, {
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
						b = Object(_.T)(u, {
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
				}, J = "EMOJI_PERMISSIONS_UPDATED", z = Object(b.a)(J), X = (e, t, s, a) => async (r, d, u) => {
					let {
						apiContext: b
					} = u;
					const g = d(),
						O = Object(_.T)(g, {
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
						o = Object(l.T)(c, {
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
				return E
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "e", (function() {
				return P
			}));
			var n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				r = s("./src/lib/getParsedUserAgent/index.ts"),
				c = s("./src/reddit/actions/actionBarAnimation/index.ts"),
				i = s("./src/reddit/actions/page.ts"),
				o = s("./src/reddit/components/CountAnimation/helpers.ts"),
				d = s("./src/reddit/constants/parameters.ts"),
				l = s("./src/reddit/endpoints/page/frontpage.ts"),
				u = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				b = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				g = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				p = s("./src/lib/makeActionCreator/index.ts"),
				O = s("./src/lib/makeListingKey/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				j = s("./src/reddit/constants/page.ts"),
				y = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/filterListingResponse/index.ts"),
				v = s("./src/reddit/selectors/frontpage.ts"),
				_ = s("./src/reddit/selectors/user.ts");
			const E = "FRONTPAGE__MORE_POSTS_PENDING",
				I = "FRONTPAGE__MORE_POSTS_LOADED",
				w = "FRONTPAGE__MORE_POSTS_FAILED",
				S = Object(p.a)(E),
				T = Object(p.a)(I),
				C = Object(p.a)(w),
				A = e => async (t, s, n) => {
					let {
						apiContext: i,
						gqlContext: p
					} = n;
					const E = s(),
						I = Object(v.a)(E),
						{
							sort: w = I
						} = e,
						A = E.platform.currentPage ? E.platform.currentPage.queryParams : {},
						P = Object(O.a)(j.a, w, A),
						D = E.listings.postOrder.loadMore[P],
						R = A[d.x] ? A[d.x].toUpperCase() : "",
						k = R in f.Sb && f.Sb[R];
					if (D) {
						const e = E.listings.postOrder.api.pending[P],
							s = E.listings.postOrder.fetchedTokens,
							n = !(!s[P] || !s[P][D.token]);
						if (!e && !n) {
							t(S({
								key: P,
								fetchedToken: D.token
							}));
							const e = !!E.platform.currentPage && !!E.platform.currentPage.queryParams.useMockData,
								s = Object(u.a)(E),
								n = y.a,
								i = [Object(u.c)(s)],
								O = Object.assign(Object.assign({
									after: D.token,
									dist: D.dist
								}, a()(A, d.l)), {
									isMobile: Object(r.e)(E.meta.userAgent),
									limit: n,
									sort: w,
									t: Object(b.a)(w, k),
									layout: y.e[Object(h.N)(E, {})],
									useMockData: e
								}); {
								const e = E.platform.lastPage,
									t = e && e.url;
								t && (O.clickUrl = t)
							}
							const f = () => Object(l.a)(p(), Object(l.b)(E, O), Object(_.P)(E), i),
								j = await f(),
								v = Object.assign(Object.assign({}, j.body), Object(m.a)(E, P, j.body));
							if (j.ok) {
								if (t(T(Object.assign({
										key: P,
										fetchedToken: D.token,
										meta: E.meta
									}, v))), Object(g.b)(E)) {
									const {
										postIds: e,
										posts: s
									} = v;
									t(Object(c.a)(Object(o.b)(e, s)))
								}
							} else t(C(Object.assign({
								key: P,
								error: j.error,
								fetchedToken: D.token
							}, v)))
						}
					}
				}, P = e => async (t, s) => {
					const n = s(),
						a = Object(v.a)(n),
						{
							sort: r = a
						} = e,
						c = n.platform.currentPage ? n.platform.currentPage.queryParams : {},
						o = Object(O.a)(j.a, r, c),
						l = c[d.x] ? c[d.x].toUpperCase() : "",
						g = l in f.Sb && f.Sb[l],
						p = Object(u.a)(n),
						y = Object(u.b)(p);
					await t(Object(i.w)(o, {
						limit: y,
						sort: r,
						t: Object(b.a)(r, g)
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
						experimentName: r.O
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
				return q
			})), s.d(t, "a", (function() {
				return K
			})), s.d(t, "e", (function() {
				return Q
			})), s.d(t, "c", (function() {
				return J
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
				k = s("./src/reddit/helpers/trackers/screenview.ts"),
				N = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				M = s("./src/reddit/selectors/platform.ts"),
				U = s("./src/reddit/selectors/postCollection.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/subreddit.ts");
			const G = "PAGE__COLLECTIONCOMMENTSPAGE_PENDING",
				q = "PAGE__COLLECTIONCOMMENTSPAGE_LOADED",
				K = "PAGE__COLLECTIONCOMMENTSPAGE_FAILED",
				V = Object(n.a)(G),
				H = Object(n.a)(q),
				W = Object(n.a)(K),
				Q = e => async (t, s) => {
					const {
						collectionId: n,
						partialPostId: a,
						partialCommentId: i,
						subredditName: o = "",
						routePrefix: d
					} = e.params, l = a ? Object(L.m)(a) : "", f = i && Object(N.f)(i), {
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
						const s = Object(U.r)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const n = Object(B.M)(e, {
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
						const n = Object(B.M)(s(), {
							identifier: P.belongsTo
						});
						if (!P.isSponsored)
							if (P.belongsTo.type === m.a.SUBREDDIT) {
								!!Object(B.S)(v, {
									subredditId: P.belongsTo.id
								}) || await t(O.o(n.name))
							} else await t(g.d(n.name));
						const a = s().posts.instances[l] ? e.queryParams.instanceId : P.postId;
						t(Object(p.b)(a))
					}
					I ? Object(A.d)(s(), t, e) : Object(A.e)(s(), t, e), Object(k.t)(s(), !0)
				}, J = "PAGE__COLLECTIONCOMMENTSPAGE_LOADED_FULL", z = Object(n.a)(J), X = (e, t, s, n) => async (r, c, i) => {
					const o = Object(a.a)(e, t, s, n),
						d = c();
					t = t || Object(U.q)(d, {
						collectionId: e
					});
					const l = await T(i.apiContext(), e, t, s, n);
					if (r(Object(u.m)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(P.a)(l.body, t, d);
						r(H(Object.assign({
							key: o,
							collectionId: e,
							meta: d.meta,
							postId: t,
							shouldCollapse: s
						}, l.body)));
						const n = d.user.prefs.commentMode;
						r(z({
							commentMode: n,
							key: o,
							postId: t
						}))
					} else r(W(Object.assign({
						error: l.error,
						key: o
					}, l.body)))
				}, Y = (e, t, s, n, r) => async (c, g, p) => {
					const O = Object(a.a)(e, t, s, n),
						y = g();
					t = t || Object(U.q)(y, {
						collectionId: e
					});
					const {
						subredditName: h
					} = n, m = y.commentsPage.keyToHeadCommentId.hasOwnProperty(O), _ = y.commentsPage.api.fullyLoaded[O], E = y.commentsPage.api.error[O];
					if (y.commentsPage.api.pending[O] || m && !E) {
						if (m && !y.sidebarPromotedPosts.firstFetch) {
							const e = Object(M.i)(y) ? x.a.COMMENTS_OVERLAY : x.a.COMMENTS;
							window.addEventListener("load", () => {
								c(Object(i.b)(e))
							})
						}
						return void(_ || r || c(X(e, t, s, n)))
					}
					const I = y.user.prefs.commentMode;
					c(V({
						key: O,
						collectionId: e,
						commentMode: I,
						postId: t
					}));
					const w = Object.assign({}, n); {
						const e = t && Object(F.O)(g(), {
							postId: t
						});
						e && e.numComments && e.numComments > d.i && (w.truncate = d.m)
					}
					let S, A = await Object(R.a)("comments", () => T(p.apiContext(), e, t, s, w));
					if (c(Object(u.m)(A.status)), A.ok && (t = t || A.body.collections[e].primaryPostId)) {
						const e = Object.keys(A.body.posts).filter(e => !!A.body.posts[e].isMeta),
							s = Object(F.O)(g(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(v.a)(p.apiContext(), s.belongsTo.id, e);
							t.ok && (S = t.body)
						}
					}
					if (!r) {
						const a = t ? Object(F.O)(g(), {
							postId: t
						}) : null;
						a && A.body.comments && Object.keys(A.body.comments).length < a.numComments ? c(X(e, t, s, n)) : A.ok && c(z({
							commentMode: I,
							key: O,
							postId: t
						}));
						const r = Object(M.i)(y) ? x.a.COMMENTS_OVERLAY : x.a.COMMENTS;
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
						const s = Object(F.O)(y, {
							postId: t
						});
						c(b.t(s, j.a.CommentsView)), !r && s && "subreddit" === s.belongsTo.type && A.body.comments && await c(Object(o.a)({
							commentIds: Object.keys(A.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else h && (c(Object(l.k)({
						key: O
					})), A = await Object(R.a)("subreddit", () => Object(C.a)(p.apiContext(), h, {})), c(Object(u.m)(A.status))), c(Object(l.f)(A, h)), c(W(Object.assign({
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
				B = Object(i.a)(M),
				G = Object(i.a)(U),
				q = () => async (e, t) => {
					const s = t(),
						n = Object(A.a)(s);
					n !== Object(A.hb)(s) && e(Object(O.g)({
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
						if (t(B(Object.assign(Object.assign({
								key: l,
								meta: g.meta
							}, e), {
								posts: n
							}))), !Object(N.I)(s())) return;
						if (a && Object(T.a)(g)) {
							const e = Object.keys(a)[0];
							await t(Object(b.f)(e, {
								fullData: !0,
								includeIdentity: !1
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
					} else t(G({
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
				return B
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
				}, U = "PROFILE_COMMENTS__MORE_ITEMS_PENDING", F = "PROFILE_COMMENTS__MORE_ITEMS_LOADED", B = "PROFILE_COMMENTS__MORE_ITEMS_FAILED", G = Object(i.a)(U), q = Object(i.a)(F), K = Object(i.a)(B), V = () => async (e, t, s) => {
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
					e(G({
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
				return l
			})), s.d(t, "b", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/preferences.ts"),
				r = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				i = s("./src/reddit/helpers/trackers/screenview.ts"),
				o = s("./src/reddit/models/User/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				u = Object(n.a)(l),
				b = e => async (t, s) => {
					const n = [t(a.z()), t(Object(r.d)(e.params.profileName))];
					await Promise.all(n);
					const l = Object(d.i)(s());
					l ? (await t(Object(r.b)(Object(o.e)(l))), t(u()), Object(i.n)(s(), !0)) : Object(c.a)(t, s())
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
				B = Object(y.a)(N),
				G = Object(y.a)(L),
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
								n(B(Object.assign({
									key: e,
									meta: c.meta
								}, u)));
								const s = Object(O.m)(c, t);
								n(Object(E.h)({
									profileId: s,
									pinned: b
								}))
							} else n(G({
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
						X = [t(Object(i.q)()), t(S.b(q, Q)), t(w.b(q)), t(v.o(k)), t(w.g(k))];
					z && X.push(t(_.e(k, J))), await Promise.all(X)
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
				return G
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
				}, L = "PROFILE_POSTS__MORE_POSTS_PENDING", x = "PROFILE_POSTS__MORE_POSTS_LOADED", M = "PROFILE_POSTS__MORE_POSTS_FAILED", U = Object(r.a)(L), F = Object(r.a)(x), B = Object(r.a)(M), G = () => async (e, t, s) => {
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
					}, w))), await e(Object(l.c)(g))) : e(B({
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
			const m = Object(i.a)(y.K),
				v = Object(i.a)(y.L),
				_ = Object(i.a)(y.J),
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
					const T = Object(O.hb)(i),
						C = Object(O.y)(i);
					if (T === r.Jb.MEDIA && C) {
						const e = Object(O.Q)(i),
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
				return B
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "n", (function() {
				return K
			})), s.d(t, "s", (function() {
				return X
			})), s.d(t, "r", (function() {
				return Y
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
						const s = Object(f.a)(t, Object(p.g)(t.display_name_prefixed));
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
				}, M = "POST_DRAFT__SAVE_DRAFT_PENDING", U = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", F = "POST_DRAFT__SAVE_DRAFT_FAILED", B = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", K = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", V = Object(r.a)(M), H = Object(r.a)(U), W = Object(r.a)(F), Q = Object(r.a)(B), J = Object(r.a)(G), z = Object(r.a)(q), X = Object(r.a)(K), Y = e => async (t, s, r) => {
					let {
						apiContext: c
					} = r;
					const d = s(),
						b = Object(S.g)(d),
						p = Object(w.W)(d);
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
						const t = Object(C.T)(c, {
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
					experimentName: g.tc
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
					const d = Object(u.T)(s(), {
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
						const i = Object(d.g)(e);
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
					const O = Object(u.T)(n(), {
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
				B = Object(a.a)(F),
				G = Object(a.a)(f),
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
					r(n === f ? G(h) : q(h));
					const m = Object(p.T)(u, {
							subredditId: a
						}),
						v = t && e ? Object(l.g)(e) : void 0;
					Object(d.g)(o(), n, m.name, t, v), Object(d.i)(o(), s, m.name)
				}, V = (e, t) => async (s, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n(),
						i = Object(p.T)(c, {
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
						i = Object(p.T)(c, {
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
						l = Object(p.T)(i, {
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
						l = Object(p.T)(i, {
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
						l = Object(p.T)(i, {
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
						const a = Object(p.T)(u, {
								subredditId: e
							}).name,
							r = await Object(d.d)(l(), a);
						if (r.ok) s(B(r.body)), s(Object(i.b)({
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
				return vD
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
				c = s("./node_modules/redux/es/redux.js"),
				i = s("./src/reddit/actions/actionBarAnimation/constants.ts");
			const o = {};
			var d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							commentDiscount: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const l = {};
			var u = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.a: {
							const {
								upvoteDiscount: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				b = Object(c.c)({
					commentDiscount: d,
					upvoteDiscount: u
				}),
				g = s("./src/reddit/actions/authorFlair.ts"),
				p = s("./src/reddit/actions/badge.ts"),
				O = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				f = s("./src/reddit/actions/governance/constants.ts"),
				j = s("./src/reddit/actions/harbergerTax/constants.ts"),
				y = s("./src/reddit/actions/platform.ts"),
				h = s("./src/reddit/actions/postCreation/constants.ts"),
				m = s("./src/reddit/actions/product.ts"),
				v = s("./src/reddit/actions/reportFlow.ts"),
				_ = s("./src/reddit/actions/structuredStyles/constants.ts"),
				E = s("./src/reddit/constants/modals.ts");
			var I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.c: {
							const s = t.payload;
							return e === s ? null : s
						}
						case n.b:
						case h.w:
						case n.d:
						case y.a:
						case v.f:
							return null;
						case _.e:
							return e === E.a.BLADE_UNSAVED_CHANGES ? null : e;
						case _.d:
							return e === E.a.BLADE_NIGHTMODE ? null : e;
						case g.a:
							return e === E.a.USER_FLAIR_MODAL_ID ? null : E.a.USER_FLAIR_MODAL_ID;
						case p.c:
							return E.a.BADGE_PICKER;
						case m.b:
							return E.a.BADGE_PURCHASE;
						case f.d:
							return E.a.GOVERNANCE_OPT_OUT;
						case f.r:
							return E.a.TRANSFER_POINTS;
						case f.o:
							return E.a.GOVERNANCE_RELEASE_NOTES;
						case j.e:
							return E.a.HARBERGER_TAX_BANNER_PURCHASE;
						case j.c:
							return E.a.HARBERGER_TAX_BANNER_MANAGE;
						case j.b:
							return E.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE;
						case j.a:
							return E.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE;
						case f.x:
							return E.a.WALLET_REGISTRATION_MODAL;
						case O.c:
							return E.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT;
						case O.j:
							return E.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL;
						default:
							return e
					}
				},
				w = s("./src/reddit/actions/ads/constants.ts"),
				S = s("./src/reddit/actions/unload/constants.ts");
			const T = {};

			function C(e, t, s, n) {
				const a = e[t];
				return Object.assign(Object.assign({}, e), {
					[t]: Object.assign(Object.assign({}, a), {
						[n]: s
					})
				})
			}
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (!t.payload) return e;
					switch (t.type) {
						case w.c:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case w.b:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case w.m:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case w.j:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case w.d:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case w.i:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case w.h:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case w.f:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case w.e:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case w.g:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case w.k: {
							const {
								postId: s,
								eventType: n,
								vendorMetadata: a
							} = t.payload;
							return C(e, s, a, "adVideoWatchedPercent".concat(n))
						}
						case w.l: {
							const {
								postId: s,
								eventType: n,
								vendorMetadata: a
							} = t.payload;
							return C(e, s, a, "adVideoWatchedSeconds".concat(n))
						}
						case w.v:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case w.x:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case w.w:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case S.b:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case w.r:
							return C(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						default:
							return e
					}
				},
				P = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/apiRequestState.ts"));
			const D = {};
			var R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.d:
						case P.a:
						case P.b: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.apiRequestId]: s
							})
						}
						case P.c: {
							const s = t.payload;
							if (!(s in e)) return e;
							if (1 === Object.keys(e).length) return D;
							const n = Object.assign({}, e);
							return delete n[s], n
						}
						default:
							return e
					}
				},
				k = s("./src/reddit/actions/subredditModeration.ts");
			var N = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.e:
						case k.d:
							return null;
						case k.c:
							return t.payload;
						default:
							return e
					}
				},
				L = s("./src/reddit/models/SubredditModeration/index.ts");
			const x = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.e: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(L.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !0
							})
						}
						case k.d:
						case k.c: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(L.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !1
							})
						}
						default:
							return e
					}
				},
				U = Object(c.c)({
					error: N,
					pending: M
				});
			const F = {};
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.d: {
						const {
							fetchedToken: s,
							subredditId: n
						} = t.payload, a = Object(L.d)(n, s);
						return Object.assign(Object.assign({}, e), {
							[a]: !0
						})
					}
					default:
						return e
				}
			};
			const G = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.d: {
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
				K = s("./node_modules/icepick/icepick.js");
			const V = {};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.b:
					case k.d: {
						const {
							subredditId: s,
							approvedSubmitters: n
						} = t.payload, a = {
							[s]: n
						};
						return Object(K.merge)(e, a)
					}
					case k.i: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(K.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.h:
					case k.g:
						return null;
					case k.f:
						return t.payload;
					default:
						return e
				}
			};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.h:
							return !0;
						case k.g:
						case k.f:
							return !1;
						default:
							return e
					}
				},
				J = Object(c.c)({
					error: W,
					pending: Q
				});
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.h:
							return null;
						case k.g: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				X = Object(c.c)({
					api: J,
					result: z
				});
			const Y = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.d: {
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
						case k.i: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== n)
							}
						}
						case k.b: {
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
				$ = Object(c.c)({
					api: U,
					fetchedTokens: B,
					loadMore: q,
					models: H,
					search: X,
					userOrder: Z
				});
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case g.a:
							return t.payload;
						default:
							return e
					}
				},
				te = s("./node_modules/lodash/mergeWith.js"),
				se = s.n(te),
				ne = s("./src/reddit/actions/comment/index.ts"),
				ae = s("./src/reddit/actions/comment/websocket/constants.ts"),
				re = s("./src/reddit/actions/grantUserFlair/constants.ts"),
				ce = s("./src/reddit/actions/modQueue/constants.ts"),
				ie = s("./src/reddit/actions/page.ts"),
				oe = s("./src/reddit/actions/pages/profileComments.ts"),
				de = s("./src/reddit/actions/pages/profilePosts.ts"),
				le = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				ue = s("./src/reddit/actions/pages/search.ts"),
				be = s("./src/reddit/actions/pages/subreddit.ts"),
				ge = s("./src/reddit/actions/profileConversations.ts"),
				pe = s("./src/reddit/actions/subreddit.ts"),
				Oe = s("./src/reddit/actions/userFlair.ts"),
				fe = s("./src/reddit/models/User/index.ts");
			const je = {};
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ae.b:
					case ae.c: {
						const s = t.payload,
							{
								authorFlair: n,
								isChatSort: a
							} = s;
						if (n && a) {
							return se()(Object.assign({}, e), n, (e, t, s) => {
								if ("richtext" === s) return t
							})
						}
						return e
					}
					case le.c:
					case le.i:
					case le.e:
					case le.g:
					case ue.c: {
						const {
							authorFlair: s
						} = t.payload;
						if (s) {
							return Object(K.merge)(e, s)
						}
						return e
					}
					case ne.u:
					case be.c:
					case ie.b:
					case oe.b:
					case oe.e:
					case de.e:
					case de.b:
					case ge.e:
					case pe.i:
						return he(e, t.payload);
					case ce.i:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v:
						return he(e, t.payload.response);
					case Oe.i: {
						const {
							subredditId: s,
							userName: n,
							applied: a,
							displaySettings: {
								isUserEnabled: r
							}
						} = t.payload;
						return Object(K.setIn)(e, [s, n], r ? a : null)
					}
					case re.h:
					case re.b: {
						const {
							subredditId: s,
							userName: n,
							applied: a
						} = t.payload;
						return e[s] && e[s][n] ? Object(K.setIn)(e, [s, n], a) : e
					}
					case Oe.a: {
						const {
							subredditId: s,
							userName: n,
							applied: a,
							displaySettings: {
								isEnabled: r
							}
						} = t.payload;
						return Object(K.setIn)(e, [s, n], r ? a : null)
					}
					default:
						return e
				}
			};
			const he = (e, t) => {
				let {
					account: s,
					authorFlair: n,
					userFlair: a
				} = t;
				const r = Object(K.merge)(e, n);
				if (!a || !s) return r;
				const c = Object.keys(a)[0];
				if (!c) return r;
				const i = a[c],
					o = Object(fe.e)(s),
					d = i.applied,
					l = i.displaySettings && i.displaySettings.isUserEnabled;
				return o && d && l ? Object(K.merge)(r, {
					[c]: {
						[o]: d
					}
				}) : r
			};
			var me = Object(c.c)({
					inContext: ee,
					models: ye
				}),
				ve = s("./src/reddit/actions/gold/constants.ts");
			const _e = {};
			var Ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.e: {
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
			var Ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.i:
					case ve.j:
						return null;
					case ve.h:
						return t.payload;
					default:
						return e
				}
			};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a:
						case ve.j:
						case ve.h:
							return !1;
						case ve.i:
							return !0;
						default:
							return e
					}
				},
				Se = Object(c.c)({
					error: Ie,
					pending: we
				}),
				Te = Object(c.c)({
					api: Se
				});
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.K:
					case ve.J:
						return null;
					case ve.I:
						return t.payload;
					default:
						return e
				}
			};
			const Ae = {};
			var Pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.K: {
							const {
								subredditOrProfileId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ve.e:
						case ve.J:
						case ve.O:
						case ve.I: {
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
				De = Object(c.c)({
					error: Ce,
					pending: Pe
				});
			const Re = {};
			var ke = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.O: {
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
					case ve.m: {
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
					case ve.p: {
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
			const Ne = {};
			var Le = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.J: {
							const {
								awards: s,
								subredditOrProfileId: n
							} = t.payload, a = s.map(e => e.id);
							return Object.assign(Object.assign({}, e), {
								[n]: a
							})
						}
						case ve.j: {
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
				xe = Object(c.c)({
					api: De,
					availability: ke,
					order: Le
				}),
				Me = s("./node_modules/lodash/merge.js"),
				Ue = s.n(Me);
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			const Fe = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const s = "".concat(t[1].substring(0, 2), ":").concat(t[1].substring(2));
				return "".concat(t[0], "+").concat(s)
			};
			var Be = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : Fe(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : Fe(e.endsAt)), e),
				Ge = s("./src/reddit/models/Gold/Award.ts"),
				qe = s("./src/reddit/actions/discoveryUnit.ts"),
				Ke = s("./src/reddit/actions/frontpage.ts"),
				Ve = s("./src/reddit/actions/multireddit/constants.ts"),
				He = s("./src/reddit/actions/pages/collectionCommentsPage.ts"),
				We = s("./src/reddit/actions/pages/modListing/constants.ts"),
				Qe = s("./src/reddit/actions/pages/postCreation.ts"),
				Je = s("./src/reddit/actions/pages/profileOverview.ts"),
				ze = s("./src/reddit/actions/profileOverviewChrono.ts"),
				Xe = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/makeActionCreator/index.ts")),
				Ye = (s("./src/config.ts"), s("./src/lib/constants/index.ts"));
			s("./src/lib/makeApiRequest/index.ts"), s("./src/reddit/helpers/addRedesignIdentifier/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Xe.a)("RECOMMENDED_POSTS_LOADED"), Object(Xe.a)("RECOMMENDED_POSTS_FAILED");
			var Ze = s("./src/reddit/actions/search.ts");
			const $e = {},
				et = (e => t => {
					for (let s = 0; s < e.length; s++) t = e[s](t);
					return t
				})([Be]);
			var tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.J:
					case ve.ub: {
						const {
							awards: s
						} = t.payload, n = s.reduce((e, t) => (e[t.id] = et(t), e), {});
						return Ue()(Object.assign({}, e), n)
					}
					case ve.O: {
						const s = t.payload.awards.reduce((e, t) => (e[t.id] = Object.assign(Object.assign({}, et(t)), {
							isEnabled: !0
						}), e), {});
						return Ue()(Object.assign({}, e), s)
					}
					case ve.c: {
						const {
							awards: s
						} = t.payload, n = s.reduce((e, t) => (e[t.award.id] = et(t.award), e), {});
						return Ue()(Object.assign({}, e), n)
					}
					case ve.j: {
						const {
							award: s
						} = t.payload;
						return s && s.id ? e[s.id] ? Ue()(Object.assign({}, e), {
							[s.id]: et(s)
						}) : Object.assign(Object.assign({}, e), {
							[s.id]: et(s)
						}) : e
					}
					case ve.fb: {
						const {
							awardId: s
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								isEnabled: !1
							})
						}) : e
					}
					case He.b:
					case ne.u:
					case ae.b:
					case Qe.b:
					case qe.e:
					case Ke.b:
					case We.e:
					case We.h:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v:
					case Ve.r:
					case ie.b:
					case ie.g:
					case ie.k:
					case ue.c:
					case oe.b:
					case oe.e:
					case ge.b:
					case ge.e:
					case Je.b:
					case Je.e:
					case ze.b:
					case de.b:
					case de.e:
					case le.c:
					case le.e:
					case le.i:
					case le.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ze.c:
					case pe.i:
					case be.c: {
						const s = {},
							n = t.payload.posts || [],
							a = t.payload.comments || [];
						for (const e in n) {
							const t = n[e].allAwardings || [];
							for (const e of t) s[e.id] = et(Object(Ge.h)(e))
						}
						for (const e in a) {
							const t = a[e],
								{
									associatedAward: n,
									allAwardings: r = []
								} = t;
							for (const e of r) s[e.id] = et(Object(Ge.h)(e));
							n && (s[n.id] = et(n))
						}
						return Ue()(Object.assign({}, e), s)
					}
					case ve.ob: {
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
						}), Ue()(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const st = {};
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.d: {
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
						case ve.c:
						case ve.b: {
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
				at = Object(c.c)({
					pending: nt
				});
			const rt = {};
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.c: {
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
				it = Object(c.c)({
					api: at,
					order: ct
				});
			const ot = {};
			var dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.c: {
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
				lt = Object(c.c)({
					order: dt
				});
			const ut = {};
			var bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.ub: {
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
				gt = Object(c.c)({
					order: bt
				}),
				pt = Object(c.c)({
					blacklist: Ee,
					create: Te,
					manageable: xe,
					models: tt,
					sortedUsable: it,
					tags: lt,
					usable: gt
				});
			const Ot = {};
			var ft = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.e:
					case p.f: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: void 0
						})
					}
					case p.d: {
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
			const jt = {};
			var yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case p.e: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case p.f:
						case p.d: {
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
				ht = Object(c.c)({
					error: ft,
					pending: yt
				});
			const mt = {};
			var vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.h:
					case p.i: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: void 0
						})
					}
					case p.g: {
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
			const _t = {};
			var Et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case p.h: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case p.i:
						case p.g: {
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
				It = Object(c.c)({
					error: vt,
					pending: Et
				}),
				wt = Object(c.c)({
					subreddit: ht,
					user: It
				});
			const St = {};
			var Tt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case O.i:
						case p.f:
						case p.i:
						case m.d: {
							const {
								badges: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				Ct = Object(c.c)({
					api: wt,
					models: Tt
				});
			var At = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.m:
					case k.l:
						return null;
					case k.k:
						return t.payload;
					default:
						return e
				}
			};
			const Pt = {};
			var Dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.m: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(L.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !0
							})
						}
						case k.l:
						case k.k: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(L.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !1
							})
						}
						default:
							return e
					}
				},
				Rt = Object(c.c)({
					error: At,
					pending: Dt
				});
			const kt = {};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.l: {
							const {
								fetchedToken: s,
								subredditId: n
							} = t.payload, a = Object(L.d)(n, s);
							return Object.assign(Object.assign({}, e), {
								[a]: !0
							})
						}
						default:
							return e
					}
				},
				Lt = s("./src/reddit/actions/inContextModeration.ts");
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lt.a:
						return t.payload;
					default:
						return e
				}
			};
			const Mt = {};
			var Ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.l: {
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
			const Ft = {};
			var Bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.j:
					case k.l: {
						const {
							subredditId: s,
							bannedUsers: n
						} = t.payload;
						return Object(K.merge)(e, {
							[s]: n
						})
					}
					case k.q: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(K.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			var Gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.p:
					case k.o:
						return null;
					case k.n:
						return t.payload;
					default:
						return e
				}
			};
			var qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.p:
							return !0;
						case k.o:
						case k.n:
							return !1;
						default:
							return e
					}
				},
				Kt = Object(c.c)({
					error: Gt,
					pending: qt
				});
			var Vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.p:
						case k.n:
							return null;
						case k.o: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				Ht = Object(c.c)({
					api: Kt,
					result: Vt
				});
			const Wt = {};
			var Qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.l: {
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
						case k.q: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== n)
							}
						}
						case k.j: {
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
				Jt = Object(c.c)({
					api: Rt,
					fetchedTokens: Nt,
					inContext: xt,
					loadMore: Ut,
					models: Bt,
					search: Ht,
					userOrder: Qt
				}),
				zt = s("./src/reddit/actions/blockedRedditors.ts");
			const Xt = {
				message: ""
			};
			var Yt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zt.c:
					case zt.d:
						return e;
					case zt.b:
						return t.payload;
					default:
						return e
				}
			};
			var Zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zt.d:
							return !0;
						case zt.c:
						case zt.b:
							return !1;
						default:
							return e
					}
				},
				$t = Object(c.c)({
					error: Yt,
					pending: Zt
				});
			const es = {
				ids: []
			};
			var ts = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : es,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case zt.e:
							const s = e.ids.slice();
							return s.splice(e.ids.indexOf(t.payload), 1), Object.assign(Object.assign({}, e), {
								ids: s
							});
						case zt.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				ss = Object(c.c)({
					api: $t,
					list: ts
				}),
				ns = s("./src/reddit/actions/userBlocks.ts");
			const as = {};
			var rs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : as,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ns.f:
					case ns.e: {
						const {
							userId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case ns.d: {
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
			const cs = {};
			var is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ns.f: {
							const {
								userId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ns.e:
						case ns.d: {
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
				os = Object(c.c)({
					error: rs,
					pending: is
				}),
				ds = Object(c.c)({
					api: os
				});
			const ls = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var us = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ls,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case w.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : Object.assign(Object.assign({}, e), {
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							});
						case be.d:
						case ie.l:
						case ie.h:
							return e.hasBrandSafetyBeenAssessed ? Object.assign(Object.assign({}, e), {
								hasBrandSafetyBeenAssessed: !1
							}) : e;
						default:
							return e
					}
				},
				bs = s("./src/reddit/actions/downToChat.ts");
			var gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bs.f:
					case bs.g:
						return null;
					case bs.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var ps = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bs.b:
						case bs.f:
							return !0;
						case bs.a:
						case bs.c:
						case bs.e:
						case bs.g:
							return !1;
						default:
							return e
					}
				},
				Os = Object(c.c)({
					error: gs,
					pending: ps
				}),
				fs = s("./node_modules/lodash/mapValues.js"),
				js = s.n(fs);
			const ys = {};
			var hs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ys,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bs.f:
						case bs.e:
						case bs.g: {
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
						case bs.c: {
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
						case bs.d:
							return Object.assign({}, js()(e, e => ({
								bannerEnabled: !1,
								buttonEnabled: e.buttonEnabled
							})));
						case bs.a:
						case bs.b:
						default:
							return e
					}
				},
				ms = Object(c.c)({
					api: Os,
					subreddits: hs
				}),
				vs = s("./src/reddit/actions/chat/init.ts");
			var _s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vs.a:
						return !0;
					default:
						return e
				}
			};
			s("./src/reddit/endpoints/chat/index.ts");
			Object(Xe.a)("SENDBIRD_PROXY__SET_CONFIG");
			var Es = s("./src/reddit/actions/chat/subredditChannel.ts");
			var Is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Es.b:
						case Es.a:
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
				ws = s("./src/chat/actions/promo/constants.ts");
			const Ss = {
				displaySubredditChatFtux: !1
			};
			var Ts = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ss,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ws.a: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ws.b: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				Cs = s("./src/reddit/actions/chat/subredditSettings.ts");
			const As = {
				subredditId: null,
				bannedWords: "",
				domains: "",
				rateLimit: -1,
				regexes: []
			};
			var Ps = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : As,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cs.a:
							return Object.assign({}, t.payload);
						default:
							return e
					}
				},
				Ds = s("./src/lib/omitKey/index.ts"),
				Rs = s("./src/reddit/actions/pages/chatSettings.ts");
			const ks = {};
			var Ns = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ks,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rs.b: {
						const {
							subredditId: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case Rs.a:
					case Rs.c:
					case Rs.d: {
						const {
							subredditId: s
						} = t.payload;
						return Object(Ds.a)(e, s)
					}
					default:
						return e
				}
			};
			const Ls = {};
			var xs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ls,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rs.a:
						case Rs.b:
						case Rs.c:
						case Rs.d: {
							const {
								subredditId: s
							} = t.payload, n = t.type === Rs.c;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				Ms = Object(c.c)({
					error: Ns,
					pending: xs
				}),
				Us = Object(c.c)({
					fetch: Ms
				});
			const Fs = {};
			var Bs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rs.a:
						case Rs.d: {
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
				Gs = Object(c.c)({
					api: Us,
					models: Bs
				}),
				qs = s("./src/reddit/actions/chat/unreadCount.ts");
			const Ks = {
				apiError: null
			};
			var Vs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ks,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qs.a.REQUEST_FAILED: {
						const e = t.payload;
						return Object.assign(Object.assign({}, Ks), {
							apiError: e
						})
					}
					case qs.a.REQUEST_SUCCESS:
					case qs.a.REQUEST_PENDING:
						return Ks;
					default:
						return e
				}
			};
			var Hs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qs.a.REQUEST_PENDING:
							return !0;
						case qs.a.REQUEST_FAILED:
						case qs.a.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				Ws = Object(c.c)({
					error: Vs,
					pending: Hs
				});
			const Qs = {
				basicChannelCount: 0,
				subredditChannelCount: 0
			};
			var Js = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qs.a.SYNC:
						case qs.a.REQUEST_SUCCESS: {
							const e = t.payload;
							return Object.assign({}, e)
						}
						default:
							return e
					}
				},
				zs = Object(c.c)({
					api: Ws,
					count: Js
				}),
				Xs = Object(c.c)({
					downToChat: ms,
					isInited: _s,
					isUserSubredditChatEnabled: Is,
					promos: Ts,
					subredditSettings: Ps,
					subredditSettingsPage: Gs,
					unread: zs
				}),
				Ys = s("./src/reddit/actions/claimgold.ts");
			var Zs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ys.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case Ys.d:
					case Ys.e:
					case Ys.c:
						return null;
					default:
						return e
				}
			};
			var $s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ys.d:
					case Ys.c:
					case Ys.a:
						return !1;
					case Ys.b:
						return !0;
					default:
						return e
				}
			};
			var en = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ys.b:
						case Ys.d:
						case Ys.c:
						case Ys.a:
							return !1;
						case Ys.f:
							return !0;
						default:
							return e
					}
				},
				tn = Object(c.c)({
					error: Zs,
					pending: $s,
					showLoader: en
				});
			var sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ys.g:
						return t.payload;
					case Ys.e:
						return "";
					default:
						return e
				}
			};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ys.e:
							return !0;
						case Ys.c:
						case Ys.d:
							return !1;
						default:
							return e
					}
				},
				an = Object(c.c)({
					api: tn,
					code: sn,
					showModal: nn
				}),
				rn = s("./node_modules/lodash/get.js"),
				cn = s.n(rn);
			const on = {};
			var dn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : on,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.d: {
							const {
								commentsPageKey: s,
								commentId: n,
								isCollapsed: a
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									[n]: !cn()(e, [s, n], a)
								})
							})
						}
						case ne.e: {
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
						case ne.u:
						case He.b:
						case ie.b: {
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
				ln = s("./src/lib/makeDraftKey/index.ts"),
				un = s("./src/reddit/models/PostCreationForm/index.ts"),
				bn = s("./src/reddit/models/PostDraft/index.ts");
			const gn = {};
			var pn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.q: {
						const {
							draftKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								autofocusDisabled: !0
							})
						})
					}
					case ne.j: {
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
					case ie.e: {
						const {
							draftKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: {
								rteState: null,
								draftType: bn.c.replyToPost
							}
						})
					}
					case He.b:
					case He.c:
					case ie.d: {
						const {
							postId: s,
							commentMode: n
						} = t.payload, a = Object(ln.a)(bn.c.replyToPost, s);
						return Object.assign(Object.assign({}, e), {
							[a]: {
								commentMode: n,
								draftType: bn.c.replyToPost,
								hasFocus: !1,
								rteState: null,
								text: ""
							}
						})
					}
					case ie.b: {
						const {
							postId: s,
							preferences: n
						} = t.payload;
						if (!n || void 0 === n.useMarkdown) return e;
						const a = Object(ln.a)(bn.c.replyToPost, s),
							r = n.useMarkdown ? un.h.MARKDOWN : un.h.RICH_TEXT;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, e[a]), {
								commentMode: r
							})
						})
					}
					case ne.l:
						const {
							draftKey: s, content: n, editorMode: a
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								commentMode: a,
								rteState: null,
								text: a === un.h.MARKDOWN ? n : "",
								rtJson: a === un.h.RICH_TEXT ? n : null
							})
						}) : e;
					case ne.r:
					case ne.p: {
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
					case ne.k: {
						const {
							draftKey: s,
							formData: n
						} = t.payload;
						return null === e[s] ? e : Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), n)
						})
					}
					case ne.f: {
						const {
							draftKey: s
						} = t.payload, n = e[s];
						return n && n.draftType === bn.c.replyToPost ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								rteState: null,
								text: ""
							})
						}) : Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case ne.G: {
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
					case ne.F:
					case ne.B: {
						const {
							draftKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case ne.E: {
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
			const On = {};
			var fn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.h: {
						const {
							commentListNodeId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case ne.i: {
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
			const jn = {};
			var yn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							commentListNodeIds: s,
							commentsPageKey: n
						} = t.payload, a = s.reduce((t, s) => (t[s] = !cn()(e, [n, s], !1), t), {});
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), a)
						})
					}
					case ne.b: {
						const {
							commentListNodeIds: s,
							commentsPageKey: n
						} = t.payload, a = s.reduce((e, t) => (e[t] = !0, e), {});
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), a)
						})
					}
					case ne.u:
					case He.b:
					case ie.b: {
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
			const hn = {};
			var mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.r: {
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
						case ne.g:
						case ne.z:
						case ne.B: {
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
				vn = s("./node_modules/lodash/isEqual.js"),
				_n = s.n(vn),
				En = s("./node_modules/lodash/omit.js"),
				In = s.n(En),
				wn = s("./src/reddit/actions/bulkActions/constants.ts"),
				Sn = s("./src/reddit/actions/modMode.ts"),
				Tn = s("./src/reddit/actions/vote.ts"),
				Cn = s("./src/reddit/helpers/isComment.ts"),
				An = s("./src/reddit/models/Comment/index.ts");
			const Pn = (e, t, s) => {
					const n = {};
					for (const r of t) n[r.award.id] = r.total;
					const a = s ? e.awarders && e.awarders.length ? e.awarders.includes(s) ? e.awarders : [s, ...e.awarders] : [s] : e.awarders;
					return Object.assign(Object.assign({}, e), {
						awarders: a,
						awardCountsById: n
					})
				},
				Dn = (e, t) => Object.assign(Object.assign({}, e), {
					awardCountsById: Object.assign(Object.assign({}, e.awardCountsById), {
						[t]: 0
					})
				});
			var Rn = s("./src/reddit/models/ModQueue/index.ts"),
				kn = s("./src/reddit/models/Vote/index.ts"),
				Nn = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Ln = {},
				xn = e => t => {
					for (let s = 0; s < e.length; s++) t = e[s](t);
					return t
				},
				Mn = ["next", "prev", "depth"],
				Un = e => In()(e, Mn),
				Fn = e => {
					const {
						allAwardings: t,
						associatedAward: s
					} = e, n = Nn(e, ["allAwardings", "associatedAward"]), a = Object.assign({}, n);
					if (t) {
						const e = {};
						for (const s of t) e[s.id] = s.count;
						a.awardCountsById = e
					}
					return s && (a.associatedAwardId = s.id), a
				};
			var Bn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ae.b:
					case ae.c:
					case ae.d:
					case ne.F:
					case ne.G: {
						const {
							comment: s,
							originId: n,
							isChatSort: a
						} = t.payload, r = xn([Fn]);
						return !1 === a ? n ? Object.assign(Object.assign({}, e), {
							[s.id]: Object.assign(Object.assign({}, r(s)), {
								originId: n
							})
						}) : e : Object.assign(Object.assign({}, e), {
							[s.id]: r(s)
						})
					}
					case ne.u:
					case He.b:
					case ie.b:
					case oe.b:
					case oe.e:
					case Je.b:
					case Je.e:
					case ge.b:
					case ge.e:
					case ze.b:
					case le.i:
					case le.g:
					case le.c:
					case le.e: {
						const s = Object.assign({}, e),
							n = xn([Un, Fn]);
						for (const a in t.payload.comments) {
							const r = e[a],
								c = t.payload.comments[a];
							r ? _n()(r, c) || (c.postAuthor || (c.postAuthor = r.postAuthor), c.postTitle || (c.postTitle = r.postTitle), s[a] = n(c)) : s[a] = n(c)
						}
						return s
					}
					case ae.a:
					case ne.y: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								isDeleted: !0,
								deletedBy: An.b.User
							})
						})
					}
					case ne.n: {
						const s = t.payload;
						return se()(Object.assign({}, e), s, (e, t) => Object.assign(Object.assign({}, e), t))
					}
					case Tn.a: {
						const {
							id: s,
							vote: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object(kn.c)(a, n)
						}) : e
					}
					case ve.t: {
						const {
							awardings: s,
							id: n,
							gilder: a,
							treatmentTags: r
						} = t.payload, c = e[n];
						return c ? Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, Pn(c, s, a)), {
								treatmentTags: r
							})
						}) : e
					}
					case ve.G: {
						const {
							awardId: s,
							thingId: n
						} = t.payload, a = e[n];
						return a ? Object.assign(Object.assign({}, e), {
							[n]: Dn(a, s)
						}) : e
					}
					case k.l: {
						const {
							comments: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case ce.i:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v: {
						const {
							response: s
						} = t.payload, {
							comments: n
						} = s, a = xn([Fn]);
						return Object.assign(Object.assign({}, e), js()(n, a))
					}
					case wn.b:
					case ce.s: {
						const {
							operation: s,
							ids: n,
							username: a,
							options: r
						} = t.payload, c = n.filter(e => Object(Cn.a)(e)), i = Object(Rn.d)(e, s, c, a, r);
						return se()(Object.assign({}, e), i, (e, t) => Object.assign(Object.assign({}, e), t))
					}
					case ue.c: {
						const {
							comments: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case Sn.a: {
						const s = Object.assign({}, e);
						for (const n in e)
							if (e.hasOwnProperty(n)) {
								const a = e[n];
								s[n].computedCollapsed = a.collapsedBecauseCrowdControl ? !t.payload.enabled : a.collapsed
							} return s
					}
					case ne.m: {
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
			const Gn = {};
			var qn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ae.b: {
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
					case ie.b: {
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
			const Kn = {};
			var Vn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.p: {
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
					case ne.o:
					case ne.F: {
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
			const Hn = {};
			var Wn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.o:
					case ne.E:
					case ne.A:
					case ne.G:
					case ne.F:
					case ne.B: {
						const {
							draftKey: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case ne.D:
					case ne.z: {
						const {
							draftKey: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case ne.w: {
						const {
							id: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case ne.x:
					case ne.y: {
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
			const Qn = {};
			var Jn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.E:
						case ne.A: {
							const {
								draftKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ne.F:
						case ne.G:
						case ne.B:
						case ne.D:
						case ne.z: {
							const {
								draftKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case ne.x: {
							const {
								id: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ne.y:
						case ne.w: {
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
				zn = Object(c.c)({
					error: Wn,
					pending: Jn
				}),
				Xn = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				Yn = Object(c.c)({
					collapsed: dn,
					drafts: pn,
					focused: fn,
					hidden: yn,
					isEditing: mn,
					models: Bn,
					replyFormOpen: Vn,
					submit: zn,
					visitHighlightFilter: Xn.b,
					newCommentsCount: qn
				}),
				Zn = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			var $n = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zn.a:
						return !1;
					case Zn.b:
						return !0;
					default:
						return e
				}
			};
			const ea = [];
			var ta = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ea,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case w.n:
						return t.payload;
					case w.o:
					default:
						return e
				}
			};
			const sa = {};
			var na = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case He.d:
					case He.b:
					case ie.d:
					case ie.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case He.a:
					case ie.a: {
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
			const aa = {};
			var ra = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case He.c:
					case ie.c: {
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
			const ca = {};
			var ia = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ca,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case He.d:
						case ie.d: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case He.b:
						case He.a:
						case ie.b:
						case ie.a: {
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
				oa = Object(c.c)({
					error: na,
					fullyLoaded: ra,
					pending: ia
				}),
				da = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/lodash/uniqBy.js")),
				la = s.n(da),
				ua = s("./node_modules/lodash/values.js"),
				ba = s.n(ua);
			const ga = {};

			function pa(e, t) {
				return ba()(e).map(e => {
					const s = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
					return {
						id: e.id,
						created: s,
						stickied: e.isStickied,
						authorId: e.authorId
					}
				})
			}

			function Oa(e) {
				return la()(e, "id").sort((e, t) => e.created - t.created)
			}
			var fa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ga,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ie.b:
						case ne.u:
						case He.b: {
							const {
								comments: s,
								key: n
							} = t.payload, a = e[n] ? e[n] : [], r = pa(s, a.find(e => e.stickied)), c = Oa([...a, ...r]);
							return Object.assign(Object.assign({}, e), {
								[n]: [...c]
							})
						}
						case ae.b:
						case ae.c:
						case ae.d:
						case ne.G:
						case ne.F: {
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
								[c]: [...Oa([...e[c] ? e[c] : [], {
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
				ja = s("./src/reddit/helpers/commentList/index.ts");
			const ya = {};

			function ha(e) {
				const t = e;
				return js()(t, e => {
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
			var ma = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ya,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.u: {
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
							const e = Object(ja.c)({
									commentLink: o.head,
									commentsDict: s,
									moreCommentsDict: i,
									continueThreadDict: a
								}),
								t = Object(ja.c)({
									commentLink: o.tail,
									commentsDict: s,
									moreCommentsDict: i,
									continueThreadDict: a
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return Object.assign(Object.assign({}, e), {
							[r]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e[r]), ha(s)), ha(a)), ha(i)), l)
						})
					}
					case He.b:
					case ie.b: {
						const {
							comments: s,
							continueThreads: n,
							key: a,
							moreComments: r
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign(Object.assign(Object.assign({}, e[a]), ha(s)), ha(n)), ha(r))
						})
					}
					case ae.b:
						const {
							comment: s, commentsPageKey: n, depth: a, headCommentId: r, originId: c, isChatSort: i
						} = t.payload, o = e[n], d = {};
						let l = null;
						if (i) return r && (d[r] = Object.assign(Object.assign({}, o[r]), {
							prev: Object(An.g)(s.id)
						}), l = Object(An.g)(r)), Object.assign(Object.assign({}, e), {
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
										prev: Object(An.h)(s)
									}), l = c), d[r] = Object.assign(Object.assign({}, o[r]), {
										next: Object(An.h)(s)
									}), t = Object(An.g)(r), Object.assign(Object.assign({}, e), {
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
						case ne.G: {
							const {
								comment: s,
								commentsPageKey: n,
								headCommentId: a
							} = t.payload, r = e[n], c = {};
							let i = null;
							return a && (c[a] = Object.assign(Object.assign({}, r[a]), {
								prev: Object(An.g)(s.id)
							}), i = Object(An.g)(a)), Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign(Object.assign({}, e[n]), c), {
									[s.id]: {
										depth: 0,
										next: i,
										prev: null
									}
								})
							})
						}
						case ne.F: {
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
								prev: Object(An.g)(s.id)
							}), o = d), i[a] = Object.assign(Object.assign({}, c[a]), {
								next: Object(An.g)(s.id)
							}), Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign(Object.assign({}, e[n]), i), {
									[s.id]: {
										depth: r,
										next: o,
										prev: Object(An.g)(a)
									}
								})
							})
						}
						default:
							return e
				}
			};
			const va = {};
			var _a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : va,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ae.b:
					case ae.c:
					case ne.G: {
						const {
							comment: s,
							commentsPageKey: n,
							isChatSort: a
						} = t.payload;
						return !1 === a ? e : Object.assign(Object.assign({}, e), {
							[n]: s.id
						})
					}
					case He.b:
					case ie.b: {
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
			const Ea = {};
			var Ia = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ea,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case He.d:
						case He.b:
						case He.c:
						case ie.d: {
							const {
								key: s,
								postId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case ne.G: {
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
				wa = Object(c.c)({
					api: oa,
					keyToChatCommentLinks: fa,
					keyToCommentThreadLinkSets: ma,
					keyToHeadCommentId: _a,
					keyToPostId: Ia,
					ads: ta
				}),
				Sa = s("./src/reddit/actions/communityFlairs/constants.ts");
			const Ta = {};
			var Ca = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ta,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Sa.a: {
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
				Aa = s("./src/reddit/actions/contentGate.ts");
			const Pa = {};
			var Da = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Aa.a: {
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
								return se()(Object.assign({}, e), Object.assign({}, t))
							}
							return Object.assign(Object.assign({}, e), {
								[s]: {
									goldSubreddit: !0
								}
							})
						}
						return e
					}
					case Aa.b: {
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
								return se()(Object.assign({}, e), Object.assign({}, t))
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
					case Aa.f: {
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
					case Aa.h: {
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
								return se()(Object.assign({}, e), Object.assign({}, t))
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
					case Aa.i: {
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
								return se()(Object.assign({}, e), Object.assign({}, t))
							}
							return Object.assign(Object.assign({}, e), {
								[s]: {
									subredditBlockedForLegalReason: !0
								}
							})
						}
						return e
					}
					case Aa.j: {
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
								return se()(Object.assign({}, e), Object.assign({}, t))
							}
							return Object.assign(Object.assign({}, e), {
								[s]: {
									subredditDoesNotExist: !0
								}
							})
						}
						return e
					}
					case Aa.c:
					case Aa.d:
					case Aa.e: {
						const {
							profileName: s
						} = t.payload, n = Ye.Ub + s.toLocaleLowerCase(), a = e[n] || {}, r = {
							profileDeleted: t.type === Aa.d,
							profileSuspended: t.type === Aa.e,
							profileBlockedForLegalReason: t.type === Aa.c
						};
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, a), r)
						})
					}
					default:
						return e
				}
			};
			const Ra = {};
			var ka = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ra,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.u:
						case He.b:
						case ie.b:
							return Object.assign(Object.assign({}, e), t.payload.continueThreads);
						default:
							return e
					}
				},
				Na = Object(c.c)({
					models: ka
				}),
				La = s("./src/reddit/actions/postCollection/constants.ts");
			var xa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.c:
					case La.d:
					case La.c:
					case La.s:
					case La.r:
						return null;
					case La.b:
					case La.n:
						return t.payload;
					default:
						return e
				}
			};
			var Ma = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case La.c:
						case La.r:
							return !0;
						case La.d:
						case La.b:
						case La.s:
						case La.n:
							return !1;
						default:
							return e
					}
				},
				Ua = Object(c.c)({
					error: xa,
					pending: Ma
				}),
				Fa = Object(c.c)({
					createOrUpdate: Ua
				}),
				Ba = s("./src/reddit/actions/postDraft.ts");
			const Ga = {};
			var qa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ga,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ba.c:
					case Ba.b: {
						const {
							draftId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Ba.a: {
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
			const Ka = {};
			var Va = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ka,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ba.b: {
							const {
								draftId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Ba.c:
						case Ba.a: {
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
				Ha = Object(c.c)({
					error: qa,
					pending: Va
				});
			var Wa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ba.d:
						return t.payload;
					case Ba.f:
					case Ba.e:
						return null;
					default:
						return e
				}
			};
			var Qa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ba.f:
							return !0;
						case Ba.e:
						case Ba.d:
							return !1;
						default:
							return e
					}
				},
				Ja = Object(c.c)({
					error: Wa,
					pending: Qa
				});
			const za = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var Xa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : za,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ba.l:
					case Ba.j:
						return za;
					case Ba.i: {
						const e = t.payload;
						return Object.assign(Object.assign({}, za), {
							apiError: e
						})
					}
					case Ba.m: {
						const e = t.payload;
						return Object.assign(Object.assign({}, za), {
							validationError: e
						})
					}
					case Ba.k: {
						const e = t.payload;
						return Object.assign(Object.assign({}, za), {
							submitValidationError: e
						})
					}
					case Ba.h:
						return Object.assign(Object.assign({}, za), {
							needsCaptcha: !0
						});
					default:
						return e
				}
			};
			var Ya = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ba.j:
							return !0;
						case Ba.l:
						case Ba.i:
						case Ba.m:
						case Ba.k:
						case Ba.h:
							return !1;
						default:
							return e
					}
				},
				Za = Object(c.c)({
					error: Xa,
					pending: Ya
				}),
				$a = Object(c.c)({
					deleteDraft: Ha,
					listing: Ja,
					save: Za
				});
			const er = {};
			var tr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : er,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.D: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case h.p: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				sr = Object(c.c)({
					pending: tr
				});
			var nr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.u:
					case h.v:
					case h.d:
					case h.e:
					case h.f:
					case h.i:
					case h.j:
					case h.n:
					case h.L:
						return null;
					case h.t:
						return t.payload;
					default:
						return e
				}
			};
			var ar = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.u:
							return !0;
						case h.v:
						case h.t:
							return !1;
						default:
							return e
					}
				},
				rr = Object(c.c)({
					error: nr,
					pending: ar
				}),
				cr = Object(c.c)({
					converting: sr,
					mediaUpload: rr
				});
			const ir = {};
			var or = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qe.b:
					case Qe.c: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Qe.a: {
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
			const dr = {};
			var lr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qe.c: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !1
						})
					}
					case Qe.b: {
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
			const ur = {};
			var br = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ur,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Qe.b:
						case Qe.a: {
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
				gr = Object(c.c)({
					error: or,
					fetched: lr,
					pending: br
				}),
				pr = s("./src/reddit/actions/scheduledPosts/constants.ts");
			const Or = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var fr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Or,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.M:
					case pr.h:
					case h.x:
					case h.c:
					case h.d:
					case h.e:
					case h.f:
					case h.i:
					case h.j:
					case h.n:
					case h.L:
					case h.B:
						return Or;
					case h.h: {
						const {
							isContentChanged: s
						} = t.payload;
						return s ? Or : e
					}
					case h.o: {
						const e = t.payload;
						return Object.assign(Object.assign({}, Or), {
							apiError: e
						})
					}
					case h.Y: {
						const e = t.payload;
						return Object.assign(Object.assign({}, Or), {
							validationError: e
						})
					}
					case h.H:
					case h.G: {
						const e = t.payload;
						return Object.assign(Object.assign({}, Or), {
							submitValidationError: e
						})
					}
					case h.a:
						return Object.assign(Object.assign({}, Or), {
							needsCaptcha: !0
						});
					case h.z:
						return Object.assign(Object.assign({}, Or), {
							pollError: t.payload
						});
					default:
						return e
				}
			};
			var jr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.x:
							return !0;
						case h.M:
						case pr.h:
						case h.o:
						case h.Y:
						case h.G:
						case h.H:
						case h.z:
						case h.a:
							return !1;
						default:
							return e
					}
				},
				yr = Object(c.c)({
					error: fr,
					pending: jr
				});
			var hr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.y:
					case h.E:
						return null;
					case h.m:
						return t.payload;
					default:
						return e
				}
			};
			var mr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.y:
							return !0;
						case h.m:
						case h.l:
							return !1;
						default:
							return e
					}
				},
				vr = Object(c.c)({
					error: hr,
					pending: mr
				}),
				_r = Object(c.c)({
					submit: yr,
					update: vr
				});
			var Er = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.L:
					case h.J:
					case h.K:
						return null;
					default:
						return e
				}
			};
			var Ir = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.K:
							return !0;
						case h.J:
						case h.L:
							return !1;
						default:
							return e
					}
				},
				wr = Object(c.c)({
					error: Er,
					pending: Ir
				}),
				Sr = Object(c.c)({
					change: wr
				}),
				Tr = Object(c.c)({
					collection: Fa,
					draft: $a,
					editor: cr,
					page: gr,
					post: _r,
					subreddit: Sr
				}),
				Cr = s("./src/reddit/actions/pages/postDraft.ts");
			const Ar = {};
			var Pr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ar,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ba.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Ar
					}
					case Ba.c: {
						const s = e,
							{
								draftId: n
							} = t.payload;
						return In()(s, n)
					}
					case h.M: {
						const {
							draftId: s
						} = t.payload;
						return s ? In()(e, s) : e
					}
					case Cr.a: {
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
			const Dr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Rr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				kr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var Nr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.d:
							return t.payload || "";
						case h.B:
							return "";
						case y.a: {
							if (Dr(t) !== Ye.Bb.POST_CREATION) return "";
							const s = Rr(t);
							return s && s.url ? s.url || "" : e
						}
						case Ba.g: {
							const e = t.payload;
							return e.kind === bn.b.Link && e.body || ""
						}
						case pr.b:
						case pr.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Lr = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/reddit/models/ScheduledPost/index.ts"));
			const xr = e => e ? e.replace(/\+/g, " ") : "";
			var Mr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.e:
						return t.payload || "";
					case h.B:
					case h.F:
						return "";
					case h.N:
						return t.payload.editorMode === un.h.MARKDOWN ? t.payload.content || "" : e;
					case y.a: {
						if (Dr(t) !== Ye.Bb.POST_CREATION) return "";
						const s = Rr(t);
						return s && s.text ? xr(s.text) : e
					}
					case Ba.g: {
						const e = t.payload;
						return e.kind === bn.b.Markdown && e.body || ""
					}
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return e.contentType === Lr.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Ur = {
				items: [],
				selectedKey: null
			};
			var Fr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ur,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.f:
							return t.payload || Ur;
						case h.B:
							return Ur;
						case y.a:
							return Dr(t) !== Ye.Bb.POST_CREATION ? Ur : e;
						case Ba.g:
							return Ur;
						case pr.b:
						case pr.n:
							return Ur;
						default:
							return e
					}
				},
				Br = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Gr = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				qr = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Kr = Br.a.createInitial;
			var Vr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kr(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case h.B:
							return Br.a.createInitial();
						case h.N: {
							const s = t.payload;
							return s.editorMode === un.h.RICH_TEXT && s.editorKey === un.g.POST_CREATION ? Br.a.createInitial(s.content) : e
						}
						case y.a:
							return Dr(t) !== Ye.Bb.POST_CREATION ? Br.a.createInitial() : e;
						case Ba.g: {
							const e = t.payload;
							return e.kind === bn.b.RichText ? Br.a.createInitial(e.body) : Br.a.createInitial()
						}
						case pr.b:
						case pr.n: {
							const e = t.payload,
								s = Object(Gr.c)(e.mediaAssets);
							return Br.a.createInitial(e.contentType === Lr.a.RTJSON ? Object(qr.b)(e.body) : void 0, s || void 0)
						}
						default:
							return e
					}
				},
				Hr = Object(c.c)({
					link: Nr,
					markdown: Mr,
					media: Fr,
					rte: Vr
				});
			var Wr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b:
							return t.payload || null;
						case h.B:
						case Ba.g:
						case pr.b:
						case pr.n:
						case h.L:
							return null;
						case y.a:
							return Dr(t) === Ye.Bb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				Qr = s("./src/reddit/selectors/scheduledPosts/index.ts");
			var Jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.c:
						return t.payload || null;
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return Object(Qr.n)({
							scheduledPost: e
						}) || null
					}
					case h.B:
						return null;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION ? e : null;
					case Ba.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var zr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.q:
						return t.payload.type || null;
					case pr.b:
					case pr.n:
					case h.i:
					case h.B:
					case y.a:
						return null;
					default:
						return e
				}
			};
			var Xr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.P:
						return t.payload || !1;
					case pr.b:
					case pr.n:
						return "CHAT" === t.payload.discussionType;
					case h.B:
						return !1;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case Ba.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var Yr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.X: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case h.B:
						return !1;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case pr.b:
					case pr.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var Zr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.R:
						return t.payload || !1;
					case h.B:
						return !1;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case Ba.g:
						return t.payload.isNSFW || !1;
					case pr.b:
					case pr.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var $r = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.S:
						return t.payload || !1;
					case h.B:
						return !1;
					case h.L: {
						const {
							name: s
						} = t.payload;
						return !!s && e
					}
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case Ba.g:
						return t.payload.isOriginalContent || !1;
					case pr.b:
					case pr.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var ec = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.T:
						return t.payload || !1;
					case pr.b:
					case pr.n:
						return !!t.payload.poll;
					case h.B:
						return !1;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					default:
						return e
				}
			};
			var tc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.X: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case h.B:
						return !1;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case pr.b:
					case pr.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var sc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.b:
					case pr.n:
					case h.B:
						return !1;
					case Ba.n:
						return t.payload;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case Ba.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var nc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.U:
						return t.payload || !1;
					case h.B:
						return !1;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case Ba.g:
						return t.payload.isSpoiler || !1;
					case pr.b:
					case pr.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var ac = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case y.a:
					case h.i:
					case h.q:
					case h.B:
					case f.h:
						return "";
					default:
						return e
				}
			};
			var rc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case y.a:
					case h.i:
					case h.q:
					case h.B:
					case f.h:
						return "";
					default:
						return e
				}
			};
			var cc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.K:
						case h.L:
							return t.payload;
						case h.J:
						case y.a:
							return null;
						default:
							return e
					}
				},
				ic = s("./src/reddit/actions/polls.ts");
			var oc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ic.a:
							return Object.assign({}, t.payload);
						case pr.b:
						case pr.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case f.h:
						case h.B:
							return null;
						case y.a:
							return Dr(t) !== Ye.Bb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				dc = s("./src/reddit/helpers/scheduledPosts/index.ts");
			var lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.X: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case h.B:
					case Ba.g:
					case h.L:
						return null;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION ? e : null;
					case pr.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case pr.b: {
						const e = t.payload;
						return Object.assign({}, Object(dc.h)(e))
					}
					default:
						return e
				}
			};
			var uc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: s,
					payload: n
				} = t;
				switch (s) {
					case h.V:
						return n || !1;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case pr.b:
					case pr.n:
					case Ba.g:
						return !1;
					default:
						return e
				}
			};
			var bc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.g:
						return t.payload || "";
					case y.a:
						return Dr(t) !== Ye.Bb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var gc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case y.a:
						return Dr(t) !== Ye.Bb.POST_CREATION ? null : e;
					case h.B:
						return null;
					case pr.b:
					case pr.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var pc = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.B:
						return !0;
					case h.W:
						return t.payload;
					case y.a:
						return Dr(t) !== Ye.Bb.POST_CREATION || e;
					case Ba.g:
						return t.payload.sendReplies;
					case pr.b:
					case pr.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Oc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.X: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case h.B:
					case Ba.g:
					case h.L:
						return null;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION ? e : null;
					case pr.b:
					case pr.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const fc = Ye.Jb.POST;
			var jc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.B:
						return fc;
					case h.r:
						return Ye.Jb.CROSSPOST;
					case h.i:
						return t.payload.submissionType || fc;
					case y.a: {
						if (Dr(t) !== Ye.Bb.POST_CREATION) return fc;
						const s = Rr(t);
						if (!s) return e;
						const {
							title: n = "",
							url: a,
							text: r = "",
							media: c = !1,
							selftext: i = !1
						} = s, o = n && !r && !i;
						return c ? Ye.Jb.MEDIA : void 0 !== a || o ? Ye.Jb.LINK_ONLY : r || i ? Ye.Jb.POST : e
					}
					case Ba.g: {
						const e = t.payload;
						return bn.a[e.kind]
					}
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return e.poll ? Ye.Jb.POLL : e.url ? Ye.Jb.LINK_ONLY : Ye.Jb.POST
					}
					default:
						return e
				}
			};
			var yc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.X: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case h.B:
						case Ba.g:
						case h.L:
							return null;
						case y.a:
							return Dr(t) === Ye.Bb.POST_CREATION ? e : null;
						case pr.b:
						case pr.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				hc = s("./src/reddit/models/Poll/index.ts");
			const mc = e => e ? e.replace(/\+/g, " ") : "",
				vc = e => "Should ".concat(e || "username", " become the top moderator?"),
				_c = e => e ? "Should we spin-off to r/".concat(e, "?") : "Should we spin-off to a new community?";
			var Ec = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.r:
							return t.payload.postTitle || "";
						case h.j:
							return t.payload || "";
						case h.A: {
							const {
								title: s
							} = t.payload;
							return e || (s || "")
						}
						case h.B:
							return "";
						case y.a: {
							if (Dr(t) !== Ye.Bb.POST_CREATION) return "";
							const s = Rr(t);
							return s && s.title ? mc(s.title) : e
						}
						case Ba.g:
							return t.payload.title;
						case h.q: {
							const {
								oldType: s,
								type: n
							} = t.payload;
							return n === hc.a.ReplaceTopMod ? vc("") : n === hc.a.Spinoff ? _c("") : s === hc.a.ReplaceTopMod || s === hc.a.Spinoff ? "" : e
						}
						case f.c: {
							const {
								username: e
							} = t.payload;
							return vc(e)
						}
						case f.b: {
							const {
								subredditName: e
							} = t.payload;
							return _c(e)
						}
						case h.i: {
							const {
								extra: s
							} = t.payload;
							return !s || s.govType !== hc.a.ReplaceTopMod && s.govType !== hc.a.Spinoff ? e : ""
						}
						case pr.b:
						case pr.n:
							return t.payload.title;
						default:
							return e
					}
				},
				Ic = Object(c.c)({
					body: Hr,
					eventSchedule: Wr,
					flair: Jr,
					govType: zr,
					isChatPost: Xr,
					isContestMode: Yr,
					isNSFW: Zr,
					isOC: $r,
					isPostAsMetaMod: tc,
					isPoll: ec,
					isPublicLink: sc,
					isSpoiler: nc,
					newSubreddit: ac,
					newTopMod: rc,
					nextSubreddit: cc,
					polls: oc,
					postSchedule: lc,
					postToTwitter: uc,
					recaptcha: bc,
					scheduledPostId: gc,
					sendReplies: pc,
					stickyPosition: Oc,
					submissionType: jc,
					suggestedSort: yc,
					title: Ec
				});
			const wc = e => e ? e.replace(/\+/g, " ") : "";
			var Sc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case y.a: {
						if (Dr(t) !== Ye.Bb.POST_CREATION) return null;
						const s = Rr(t);
						return s && s.text && wc(s.text) ? un.h.MARKDOWN : e
					}
					case h.E: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case h.F:
						return null;
					case h.N: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case pr.b:
					case pr.n:
						return t.payload.contentType === Lr.a.RTJSON ? un.h.RICH_TEXT : un.h.MARKDOWN;
					default:
						return e
				}
			};
			const Tc = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				Cc = (e, t) => {
					const s = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(un.u)(t)
					});
					if (!s.length) return e;
					const n = s.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return Object.assign(Object.assign({}, e), n)
				};
			var Ac = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.c:
					case h.d:
					case h.e:
						return e[Ye.nb.BODY] ? Object.assign(Object.assign({}, e), {
							[Ye.nb.BODY]: []
						}) : e;
					case h.h: {
						const {
							isContentChanged: s
						} = t.payload;
						return e[Ye.nb.BODY] && s ? Object.assign(Object.assign({}, e), {
							[Ye.nb.BODY]: []
						}) : e
					}
					case h.j:
						return e[Ye.nb.TITLE] ? Object.assign(Object.assign({}, e), {
							[Ye.nb.TITLE]: []
						}) : e;
					case h.I: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: []
						})
					}
					case h.n: {
						const s = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[s]: []
						}) : Tc
					}
					case h.H:
					case h.G: {
						const s = t.payload;
						return Cc(e, s)
					}
					case y.a:
						return Dr(t) !== Ye.Bb.POST_CREATION ? Tc : e;
					default:
						return e
				}
			};
			var Pc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.b:
					case h.c:
					case h.d:
					case h.e:
					case h.f:
					case h.j:
					case h.i:
					case h.R:
					case h.S:
					case h.U:
					case Ba.n:
					case h.W:
					case h.X:
						return !0;
					case h.h: {
						const {
							isContentChanged: s
						} = t.payload;
						return !!s || e
					}
					case h.M:
					case pr.h:
						return !1;
					case h.O:
						return t.payload;
					case y.a:
						return Dr(t) === Ye.Bb.POST_CREATION && e;
					case h.B:
					case Ba.l:
					case Ba.g:
						return !1;
					default:
						return e
				}
			};
			var Dc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.w:
						return e === t.payload ? null : t.payload || null;
					case n.c:
						return t.payload ? null : e;
					case y.a:
						return Dr(t) !== Ye.Bb.POST_CREATION ? null : e;
					default:
						return e
				}
			};
			const Rc = un.q.Post;
			var kc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.x:
							return un.q.Post;
						case h.C:
							return t.payload;
						case Ba.j:
							return un.q.Draft;
						case y.a:
							return Dr(t) !== Ye.Bb.POST_CREATION ? Rc : e;
						default:
							return e
					}
				},
				Nc = Object(c.c)({
					editorMode: Sc,
					fieldValidation: Ac,
					isChanged: Pc,
					modalId: Dc,
					submitMode: kc
				});
			var Lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h.E:
						return t.payload.editorMode === un.h.MARKDOWN ? t.payload.postContent || "" : e;
					case h.F:
						return "";
					case h.N:
						return t.payload.editorMode === un.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const xc = Br.a.createInitial;
			var Mc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xc(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.F:
							return Br.a.createInitial();
						case h.E: {
							const s = t.payload;
							return s.editorMode === un.h.RICH_TEXT && "object" == typeof s.postContent ? Br.a.createInitial(s.postContent, s.mediaMetadata) : e
						}
						case h.N: {
							const s = t.payload;
							return s.editorMode === un.h.RICH_TEXT && s.editorKey === un.g.POST_EDITING ? Br.a.createInitial(s.content) : e
						}
						default:
							return e
					}
				},
				Uc = Object(c.c)({
					markdown: Lc,
					rte: Mc
				});
			var Fc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.E: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case h.F:
							return null;
						default:
							return e
					}
				},
				Bc = Object(c.c)({
					draft: Uc,
					postId: Fc
				}),
				Gc = Object(c.c)({
					api: Tr,
					drafts: Pr,
					formData: Ic,
					formState: Nc,
					postEditing: Bc
				}),
				qc = s("./src/reddit/actions/dashboard.ts");
			const Kc = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var Vc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qc.a:
						return Object.assign(Object.assign({}, e), {
							selectedComponent: t.payload
						});
					case qc.c: {
						const s = t.payload,
							n = e.subredditLoaded[s];
						return Object.assign(Object.assign({}, e), {
							subredditPending: !n,
							subredditLoaded: Object.assign(Object.assign({}, e.subredditLoaded), {
								[s]: n || !1
							})
						})
					}
					case qc.b: {
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
			var Hc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qe.b:
					case qe.c:
						return null;
					case qe.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var Wc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qe.c:
						return !1;
					case qe.b:
						return !0;
					default:
						return e
				}
			};
			var Qc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qe.c:
							return !0;
						case qe.b:
						case qe.a:
							return !1;
						default:
							return e
					}
				},
				Jc = Object(c.c)({
					error: Hc,
					loaded: Wc,
					pending: Qc
				}),
				zc = Object(c.c)({
					list: Jc
				}),
				Xc = s("./node_modules/lodash/isEmpty.js"),
				Yc = s.n(Xc);
			const Zc = {};
			var $c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qe.b: {
							const {
								discoveryUnits: s
							} = t.payload;
							return Yc()(s) ? e : Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				ei = s("./node_modules/lodash/forOwn.js"),
				ti = s.n(ei),
				si = s("./src/reddit/helpers/name/index.ts");
			const ni = {};
			var ai = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ni,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qe.b: {
							const {
								discoveryUnits: s
							} = t.payload;
							if (Yc()(s)) return e;
							const n = {};
							return ti()(s, e => {
								n[Object(si.g)(e.unitName)] = e.id
							}), Object.assign(Object.assign({}, e), n)
						}
						default:
							return e
					}
				},
				ri = Object(c.c)({
					api: zc,
					models: $c,
					nameToId: ai
				}),
				ci = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const ii = [];
			var oi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ii,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ci.a: {
							const {
								subredditId: s
							} = t.payload;
							return [...e, s]
						}
						default:
							return e
					}
				},
				di = s("./src/reddit/actions/economics/banners/constants.ts");
			const li = {
				dismissedBanners: {}
			};
			var ui = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : li,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case di.c: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								dismissedBanners: Object.assign(Object.assign({}, e.dismissedBanners), {
									[s]: Object.assign(Object.assign({}, e.dismissedBanners[s]), {
										pending: !0
									})
								})
							})
						}
						case di.d: {
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
						case di.a:
						case di.b: {
							const {
								subredditId: s,
								bannerType: n
							} = t.payload, a = e.dismissedBanners[s] || {}, r = t.type === di.a;
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
				bi = s("./src/reddit/actions/economics/claims/constants.ts");
			const gi = {};
			var pi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.b:
						case bi.a:
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									isClaiming: t.type === bi.b
								})
							});
						default:
							return e
					}
				},
				Oi = s("./src/reddit/models/Badge/managementPage.ts");
			const fi = {
				badgeType: Oi.a.Cosmetic,
				view: Oi.c.Gallery
			};
			var ji = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case O.c: {
						const {
							badge: s,
							initialView: n
						} = t.payload;
						return s || n ? Object.assign(Object.assign({}, e), {
							badgeType: s ? Object(Oi.d)(s.placement) : e.badgeType,
							view: n
						}) : e
					}
					case O.b: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							badgeType: s
						})
					}
					case O.d: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							view: s
						})
					}
					case n.b:
						return fi;
					default:
						return e
				}
			};
			var yi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case O.c:
						return {
							badge: t.payload.badge
						};
					case n.b:
						return null;
					case O.j:
						return t.payload || null;
					default:
						return e
				}
			};
			const hi = {};
			var mi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case O.e: {
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
					case ve.kb: {
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
			const vi = {};
			var _i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case O.e: {
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
				Ei = s("./src/reddit/actions/economics/me/constants.ts");
			const Ii = {
				fetched: !1,
				data: {}
			};
			var wi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ii,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ei.a:
							return {
								fetched: !0, data: t.payload
							};
						case O.h: {
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
				Si = s("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Ti = {
				fetched: !1,
				data: null
			};
			var Ci = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ti,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ei.b:
							return {
								fetched: !0, data: e.data
							};
						case Ei.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Ai = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Pi = Object(c.c)({
					banners: ui,
					claims: pi,
					currentBadgeManagementScreen: ji,
					currentModalArgs: yi,
					emotes: mi,
					gifs: _i,
					me: wi,
					paymentSystems: Si.b,
					pointsCopy: Ci,
					subredditPremium: Ai.b
				}),
				Di = s("./src/reddit/actions/emoji.ts"),
				Ri = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const ki = {};
			var Ni = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ki,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Di.h: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Di.g: {
							const {
								subredditId: s
							} = t.payload, n = e, a = s;
							n[a];
							return Ri(n, ["symbol" == typeof a ? a : a + ""])
						}
						case Di.f: {
							const {
								subredditId: s
							} = t.payload, n = e, a = s;
							n[a];
							return Ri(n, ["symbol" == typeof a ? a : a + ""])
						}
						default:
							return e
					}
				},
				Li = Object(c.c)({
					pending: Ni
				}),
				xi = Object(c.c)({
					list: Li
				}),
				Mi = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Ui = {};
			var Fi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ui,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Di.f:
						case Di.c:
							return e;
						case Di.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Di.d: {
							const {
								emojiName: s,
								subredditId: n
							} = t.payload, a = e[n].emojis, r = s, c = (a[r], Mi(a, ["symbol" == typeof r ? r : r + ""]));
							return Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign({}, e[n]), {
									emojis: c
								})
							})
						}
						case Di.i: {
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
						case Di.e: {
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
				Bi = Object(c.c)({
					api: xi,
					models: Fi
				}),
				Gi = s("./src/reddit/actions/experiments.ts");
			const qi = /^experiment_(.*)$/i,
				Ki = e => {
					const t = e.match(qi);
					if (null !== t) return t[1]
				},
				Vi = {};
			var Hi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a: {
							const s = Rr(t);
							if (!s) return e;
							const n = {};
							for (const e in s) {
								const t = Ki(e);
								t && (n[t.toLowerCase()] = s[e] || "")
							}
							return Yc()(n) ? e : Object.assign(Object.assign({}, e), n)
						}
						case Gi.b: {
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
				Wi = s("./src/reddit/actions/externalAccount.ts");
			const Qi = {};
			var Ji = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wi.e:
					case Wi.f: {
						const {
							provider: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Wi.d: {
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
			const zi = {};
			var Xi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wi.e: {
							const {
								provider: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Wi.f:
						case Wi.d: {
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
				Yi = Object(c.c)({
					error: Ji,
					pending: Xi
				});
			const Zi = {};
			var $i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wi.l:
					case Wi.k: {
						const {
							provider: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Wi.j: {
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
			const eo = {};
			var to = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wi.b: {
							const {
								provider: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Wi.c:
						case Wi.a: {
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
				so = Object(c.c)({
					error: $i,
					pending: to
				});
			const no = {};
			var ao = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : no,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wi.i:
					case Wi.h: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Wi.g: {
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
			const ro = {};
			var co = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ro,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wi.h: {
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
			const io = {};
			var oo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : io,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wi.i: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Wi.h:
						case Wi.g: {
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
				lo = Object(c.c)({
					error: ao,
					fetched: co,
					pending: oo
				});
			const uo = {};
			var bo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wi.l:
					case Wi.k: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Wi.j: {
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
			const go = {};
			var po = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : go,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wi.l: {
							const {
								username: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Wi.k:
						case Wi.j: {
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
				Oo = Object(c.c)({
					error: bo,
					pending: po
				}),
				fo = Object(c.c)({
					connect: Yi,
					disconnect: so,
					user: Oo,
					subreddit: lo
				});
			const jo = {};
			var yo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wi.h: {
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
			const ho = {};
			var mo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ho,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wi.k: {
							const {
								username: s,
								accountsData: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case Wi.c: {
							const {
								username: s,
								provider: n
							} = t.payload, a = e[s];
							return a && a[n] ? Object.assign(Object.assign({}, e), {
								[s]: In()(a, n)
							}) : e
						}
						default:
							return e
					}
				},
				vo = Object(c.c)({
					api: fo,
					user: mo,
					subreddit: yo
				}),
				_o = s("./src/reddit/featureFlags/index.ts");
			const Eo = new Set(["0", "disabled", "false", "off", ""]);
			var Io = e => !Eo.has(e.toLowerCase());
			const wo = _o.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				So = _o.a.reduce((e, t) => (e[t] = null, e), {});
			var To = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : So,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a: {
							const s = Rr(t);
							if (void 0 !== s) {
								const t = {};
								for (const e in s) {
									const n = Object(_o.g)(e);
									if (n) {
										const a = wo[n.toLowerCase()];
										if (a) {
											const n = s[e],
												r = "string" != typeof n || Io(n);
											t[a] = r
										}
									}
								}
								if (Object.keys(t).length > 0) return Object.assign(Object.assign({}, e), t)
							}
							return e
						}
						case _o.b: {
							const {
								featureName: s,
								currentValue: n
							} = t.payload;
							return n === e[s] ? e : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case _o.c: {
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
				Co = Object(c.c)({
					overrides: To
				});
			var Ao = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.g:
					case re.i:
						return null;
					case re.f:
						return t.payload;
					default:
						return e
				}
			};
			var Po = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case re.i:
							return !0;
						case re.g:
						case re.f:
							return !1;
						default:
							return e
					}
				},
				Do = Object(c.c)({
					error: Ao,
					pending: Po
				});
			const Ro = {};
			var ko = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ro,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.g:
					case re.k: {
						const {
							subredditId: s,
							flairedUsers: n
						} = t.payload;
						return Ue()(Object.assign({}, e), {
							[s]: n
						})
					}
					case re.c: {
						const {
							subredditId: s,
							userName: n
						} = t.payload, a = In()(e[s], n);
						return Object.assign(Object.assign({}, e), {
							[s]: a
						})
					}
					case re.a:
					case re.b:
					case re.h:
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
			const No = {};
			var Lo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : No,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.g: {
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
			var xo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.l:
					case re.k:
						return null;
					case re.j:
						return t.payload;
					default:
						return e
				}
			};
			var Mo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case re.l:
							return !0;
						case re.k:
						case re.j:
							return !1;
						default:
							return e
					}
				},
				Uo = Object(c.c)({
					error: xo,
					pending: Mo
				});
			var Fo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case re.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case re.c: {
							const {
								userName: s
							} = t.payload;
							return e === s ? null : e
						}
						default:
							return e
					}
				},
				Bo = Object(c.c)({
					api: Uo,
					result: Fo
				});
			const Go = {};
			var qo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Go,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case re.g: {
							const {
								key: s,
								userOrder: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case re.a: {
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
						case re.c: {
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
				Ko = Object(c.c)({
					api: Do,
					models: ko,
					pageInfo: Lo,
					search: Bo,
					userOrder: qo
				}),
				Vo = s("./src/reddit/actions/focusedVerticals/constants.ts");
			const Ho = {
				focusedVerticalGqlError: null
			};
			var Wo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ho,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vo.h:
					case Vo.g:
					case Vo.c:
						return Object.assign(Object.assign({}, e), {
							focusedVerticalGqlError: null
						});
					case Vo.e:
						return Object.assign(Object.assign({}, e), {
							focusedVerticalGqlError: t.payload
						});
					default:
						return e
				}
			};
			const Qo = {
				focusedVerticalGqlPending: !1
			};
			var Jo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vo.h:
							return Object.assign(Object.assign({}, e), {
								focusedVerticalGqlPending: !0
							});
						case Vo.e:
						case Vo.g:
						case Vo.c:
							return Object.assign(Object.assign({}, e), {
								focusedVerticalGqlPending: !1
							});
						default:
							return e
					}
				},
				zo = Object(c.c)({
					error: Wo,
					pending: Jo
				});
			var Xo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vo.g:
					case Vo.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Yo = {
				dismissed: !0
			};
			var Zo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vo.j:
						return {
							dismissed: !1
						};
					case Vo.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var $o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vo.g:
					case Vo.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var ed = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vo.g:
					case Vo.c:
					case Vo.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var td = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vo.g:
						case Vo.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				sd = Object(c.c)({
					api: zo,
					components: Zo,
					interactedSubredditIds: $o,
					recommendedSubredditIds: td,
					category: Xo,
					lastLoadedEnv: ed
				});
			Object(Xe.a)("FONTS_FONT_FILES_PARSED");
			const nd = [];
			var ad = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var rd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.q:
						return t.payload;
					case ve.f:
					case y.a:
					case ve.M:
					case ve.t:
						return null;
					default:
						return e
				}
			};
			var cd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.f:
					case y.a:
					case ve.t:
					case ve.q:
						return !1;
					case ve.r:
						return !0;
					default:
						return e
				}
			};
			var id = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.r:
						case ve.f:
						case y.a:
						case ve.t:
						case ve.q:
							return !1;
						case ve.v:
							return !0;
						default:
							return e
					}
				},
				od = Object(c.c)({
					error: rd,
					pending: cd,
					showLoader: id
				});
			var dd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.N:
					case ve.M: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case ve.g:
					case ve.f:
						return null;
					default:
						return e
				}
			};
			var ld = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.u: {
						const {
							id: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var ud = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const s = t.payload;
				switch (t.type) {
					case ve.L:
					case ve.M:
						return s.thingId;
					case ve.t:
					case y.a:
					case ve.f:
						return null;
					default:
						return e
				}
			};
			var bd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.y:
						return t.payload;
					case ve.x:
					case ve.M:
						return null;
					default:
						return e
				}
			};
			var gd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.s:
						return t.payload;
					case ve.M:
						return !1;
					default:
						return e
				}
			};
			var pd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.L:
						return !0;
					default:
						return e
				}
			};
			var Od = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.w:
						return t.payload;
					case ve.M:
						return "";
					default:
						return e
				}
			};
			const fd = Ge.m;
			var jd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.hb:
							return t.payload;
						case ve.M: {
							const {
								award: e
							} = t.payload;
							return e || fd
						}
						default:
							return e
					}
				},
				yd = Object(c.c)({
					api: od,
					correlationId: dd,
					gildModalThingId: ud,
					isAnonymous: gd,
					isIframed: pd,
					message: Od,
					gildedThing: ld,
					giveAwardTooltipThingId: bd,
					selectedAward: jd
				});
			var hd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.z:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case ve.g:
					case y.a:
					case ve.N:
					case ve.E:
						return null;
					default:
						return e
				}
			};
			var md = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.g:
						case y.a:
						case ve.E:
						case ve.z:
							return !1;
						case ve.A:
							return !0;
						default:
							return e
					}
				},
				vd = Object(c.c)({
					error: hd,
					pending: md
				});
			var _d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.N: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case y.a:
						case ve.g:
						case ve.E:
							return "";
						default:
							return e
					}
				},
				Ed = Object(c.c)({
					api: vd,
					givePremiumModalAccountName: _d
				}),
				Id = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			var wd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.b: {
						const {
							cardName: e
						} = t.payload;
						return e
					}
					case Id.x:
						return t.payload !== Ye.wb ? "" : e;
					case Id.c:
					case Id.d:
					case Id.e:
					case Id.f:
					case y.a:
						return "";
					default:
						return e
				}
			};
			var Sd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.A: {
						const {
							error: s,
							elementType: n
						} = t.payload;
						return "cardCvc" === n ? s && s.message || "" : e
					}
					case Id.x:
						return t.payload !== Ye.wb ? "" : e;
					case Id.c:
					case Id.d:
					case Id.e:
					case Id.f:
					case y.a:
						return "";
					default:
						return e
				}
			};
			var Td = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.A: {
						const {
							error: s,
							elementType: n
						} = t.payload;
						return "cardExpiry" === n ? s && s.message || "" : e
					}
					case Id.x:
						return t.payload !== Ye.wb ? "" : e;
					case Id.c:
					case Id.d:
					case Id.e:
					case Id.f:
					case y.a:
						return "";
					default:
						return e
				}
			};
			var Cd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.A: {
						const {
							error: s,
							elementType: n
						} = t.payload;
						return "cardNumber" === n ? s && s.message || "" : e
					}
					case Id.x:
						return t.payload !== Ye.wb ? "" : e;
					case Id.c:
					case Id.d:
					case Id.e:
					case Id.f:
					case y.a:
						return "";
					default:
						return e
				}
			};
			var Ad = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.a:
						return t.payload.message || e;
					case Id.b:
						return "";
					case Id.x:
						return t.payload !== Ye.wb ? "" : e;
					case Id.c:
					case Id.d:
					case Id.e:
					case Id.f:
					case y.a:
						return "";
					default:
						return e
				}
			};
			var Pd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.A: {
							const {
								error: s,
								elementType: n
							} = t.payload;
							return "postalCode" === n ? s && s.message || "" : e
						}
						case Id.x:
							return t.payload !== Ye.wb ? "" : e;
						case Id.c:
						case Id.d:
						case Id.e:
						case Id.f:
						case y.a:
							return "";
						default:
							return e
					}
				},
				Dd = Object(c.c)({
					cardCvc: Sd,
					cardExpiry: Td,
					cardNumber: Cd,
					nameOnCard: Ad,
					postalCode: Pd
				});
			const Rd = Ye.xb;
			var kd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.o:
					case Id.p:
					case Id.r:
						return Rd;
					case Id.x:
						return t.payload;
					default:
						return e
				}
			};
			var Nd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.u:
							return t.payload || e;
						case Id.x: {
							const {
								method: s
							} = t.payload;
							return s === Ye.xb ? null : e
						}
						case Id.o:
						case Id.p:
						case Id.r:
						case ve.M:
							return null;
						default:
							return e
					}
				},
				Ld = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts");
			var xd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.r:
							return "";
						case Ld.a: {
							const e = t.payload;
							return e.body && e.body.passthrough ? e.body.passthrough : ""
						}
						default:
							return e
					}
				},
				Md = Object(c.c)({
					errorMessage: Nd,
					passthrough: xd
				});
			var Ud = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.D:
						return !e;
					case Id.x:
						return t.payload !== Ye.wb || e;
					case Id.c:
					case Id.d:
					case Id.e:
					case y.a:
						return !0;
					default:
						return e
				}
			};
			const Fd = [];
			var Bd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.w:
						return t.payload;
					case Id.g: {
						const s = t.payload;
						return e.filter(e => e.cardId !== s)
					}
					default:
						return e
				}
			};
			var Gd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.v:
						return !0;
					case Id.w:
						return !1;
					default:
						return e
				}
			};
			var qd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.a:
					case Id.B:
						return t.payload.message || e;
					case Id.z:
						return t.payload;
					case Id.A:
					case Id.b:
					case Id.C:
						return null;
					case Id.x:
						return t.payload === Ye.wb ? null : e;
					default:
						return e
				}
			};
			var Kd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.c:
						case Id.a:
						case Id.z:
						case Id.B:
							return !1;
						case Id.x:
							return t.payload !== Ye.wb && e;
						case Id.C:
							return !0;
						default:
							return e
					}
				},
				Vd = Object(c.c)({
					errorMessage: qd,
					pending: Kd
				});
			var Hd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.y:
							return t.payload;
						case Id.g:
							return t.payload === e ? null : e;
						default:
							return e
					}
				},
				Wd = Object(c.c)({
					cardName: wd,
					cardValidation: Dd,
					paymentMethod: kd,
					paypal: Md,
					rememberCard: Ud,
					savedCards: Bd,
					savedCardsPending: Gd,
					stripeToken: Vd,
					useSavedCard: Hd
				});
			const Qd = {
				pending: !1,
				successful: !1,
				error: !1
			};
			var Jd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.V:
						return {
							pending: !0, successful: !1, error: !1
						};
					case ve.W:
						return {
							pending: !1, successful: !0, error: !1
						};
					case ve.U:
						return {
							pending: !1, successful: !1, error: !0
						};
					case n.c:
						return Qd;
					default:
						return e
				}
			};
			var zd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.H:
						return t.payload || !1;
					case n.c:
						return !1;
					default:
						return e
				}
			};
			var Xd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.S:
						return t.payload || 1;
					case n.c:
						return 1;
					default:
						return e
				}
			};
			var Yd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.c:
							return !1;
						case ve.W:
						case ve.T:
							return !0;
						default:
							return e
					}
				},
				Zd = Object(c.c)({
					freeReallocation: Jd,
					powerupsCount: Xd,
					isAnonymous: zd,
					purchaseCompleted: Yd
				});
			var $d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "selectPayment",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.r:
						return "selectPayment";
					case Id.t:
						return "paymentCompleted";
					default:
						return e
				}
			};
			var el = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.r: {
						if (!t.payload) return e;
						const {
							packageId: s
						} = t.payload;
						return s
					}
					case Id.e:
						return null;
					default:
						return e
				}
			};
			var tl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.r:
							return !0;
						case y.a:
						case Id.e:
							return !1;
						default:
							return e
					}
				},
				sl = Object(c.c)({
					activePage: $d,
					showModal: tl,
					packageId: el
				});
			var nl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.h:
					case Id.k: {
						const {
							activeSaleConfig: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var al = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.n:
					case Id.m:
					case Id.k:
					case Id.j:
						return null;
					case Id.l:
					case Id.i:
						return t.payload;
					default:
						return e
				}
			};
			var rl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.l:
					case Id.n:
						return !1;
					case Id.m:
						return !0;
					default:
						return e
				}
			};
			var cl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.i:
						case Id.k:
							return !1;
						case Id.j:
							return !0;
						default:
							return e
					}
				},
				il = Object(c.c)({
					errorMessage: al,
					recommendedPending: rl,
					storefrontPending: cl
				});
			const ol = [];
			var dl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ol,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.k: {
						const {
							dealCoinPackages: e
						} = t.payload;
						return e.map(e => e.mobileId)
					}
					default:
						return e
				}
			};
			const ll = {};
			var ul = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ll,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.n: {
						const {
							coinPackages: s
						} = t.payload, n = s.reduce((e, t) => (e[t.mobileId] = t, e), {});
						return Object.assign(Object.assign({}, e), n)
					}
					case Id.k: {
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
			const bl = [];
			var gl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.n: {
						const {
							coinPackages: e
						} = t.payload;
						return e.map(e => e.mobileId)
					}
					case Id.m:
						return bl;
					default:
						return e
				}
			};
			const pl = [];
			var Ol = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.k: {
							const {
								coinPackages: e
							} = t.payload;
							return e.map(e => e.mobileId)
						}
						default:
							return e
					}
				},
				fl = Object(c.c)({
					models: ul,
					dealPackageIds: dl,
					recommendedPackageIds: gl,
					storefrontPackageIds: Ol
				});
			const jl = [];
			var yl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.k:
							return t.payload.premiumPackages;
						default:
							return e
					}
				},
				hl = Object(c.c)({
					activeSaleConfig: nl,
					api: il,
					coinPackages: fl,
					premiumPackages: yl
				});
			var ml = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "selectPayment",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.o:
					case Id.p:
						return "selectPayment";
					case Id.t:
						return "paymentCompleted";
					default:
						return e
				}
			};
			var vl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.r:
					case Id.s:
					case Id.o:
					case Id.p: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case Id.e:
					case Id.c:
					case Id.d:
					case Id.t:
						return null;
					default:
						return e
				}
			};
			var _l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.c:
					case Id.d:
					case ve.f:
					case ve.t:
						return null;
					case Id.o: {
						const {
							thingId: e
						} = t.payload;
						return e || null
					}
					case Id.q:
						return t.payload && t.payload.thingId ? t.payload.thingId : e;
					default:
						return e
				}
			};
			var El = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Id.o: {
						const {
							packageId: e
						} = t.payload;
						return e
					}
					case Id.t:
					case Id.c:
						return null;
					default:
						return e
				}
			};
			var Il = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.o:
						case Id.p:
							return !0;
						case ve.M:
						case y.a:
						case Id.c:
						case Id.d:
							return !1;
						default:
							return e
					}
				},
				wl = Object(c.c)({
					activePage: ml,
					correlationId: vl,
					gildThingId: _l,
					packageId: El,
					showModal: Il
				});
			var Sl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.s: {
							const {
								packageId: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Tl = Object(c.c)({
					packageId: Sl
				});
			var Cl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Id.E:
						case Id.G:
							return !1;
						case Id.F:
							return !0;
						default:
							return e
					}
				},
				Al = Object(c.c)({
					pending: Cl
				}),
				Pl = Object(c.c)({
					payment: Wd,
					powerupsPurchaseModal: Zd,
					premiumPurchaseModal: sl,
					purchaseCatalog: hl,
					purchaseModal: wl,
					targetedOffer: Tl,
					updateCardModal: Al
				}),
				Dl = s("./src/reddit/actions/header.ts"),
				Rl = s("./src/reddit/actions/overlayEvents.ts");
			var kl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Dl.a:
							return !1;
						case Dl.b:
							return !0;
						case Dl.c:
							return !e;
						case Rl.b:
							return !1;
						default:
							return e
					}
				},
				Nl = Object(c.c)({
					isSubscriptionsDropdownOpen: kl
				});
			var Ll = function() {
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
				xl = s("./src/reddit/actions/imageUploads.ts");
			const Ml = {};
			var Ul = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ml,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xl.d: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.id]: s
							})
						}
						case xl.c:
						case xl.e:
						case xl.b: {
							const s = t.payload;
							return e[s.id] ? Object.assign(Object.assign({}, e), {
								[s.id]: s
							}) : e
						}
						case xl.a: {
							const s = t.payload;
							if (!e[s.id]) return e;
							const n = Object.assign({}, e);
							return delete n[s.id], n
						}
						default:
							return e
					}
				},
				Fl = s("./src/reddit/actions/inboxNotifications/constants.ts");
			var Bl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fl.a: {
						const {
							data: e
						} = t.payload;
						return e
					}
					case Fl.c:
					case Fl.b:
						return !1;
					default:
						return e
				}
			};
			var Gl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fl.c:
							return !0;
						case Fl.a:
						case Fl.b:
							return !1;
						default:
							return e
					}
				},
				ql = Object(c.c)({
					error: Bl,
					pending: Gl
				});
			const Kl = [];
			var Vl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fl.b:
							return t.payload;
						default:
							return e
					}
				},
				Hl = Object(c.c)({
					api: ql,
					notifications: Vl
				}),
				Wl = s("./src/reddit/actions/interceptedAction.ts");
			var Ql = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wl.a:
							return t.payload;
						case Wl.b:
							return null;
						default:
							return e
					}
				},
				Jl = s("./src/reddit/actions/changeUsername.ts");
			var zl = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jl.a:
							return !1;
						case Jl.b:
							return !0;
						default:
							return e
					}
				},
				Xl = s("./src/reddit/actions/emailVerificationTooltip.ts");
			var Yl = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xl.a:
							return !e;
						default:
							return e
					}
				},
				Zl = s("./src/reddit/actions/moderatingSubreddits.ts");
			var $l = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zl.a: {
							if (e) return e;
							const s = t.payload;
							return Object.keys(s).some(e => !0 === s[e].posts)
						}
						case be.c:
						case He.b:
						case ie.b:
						case Qe.b: {
							if (e) return e;
							const {
								payload: s
							} = t;
							return s.subredditPermissions && s.subreddits ? !!s.subredditPermissions.posts : e
						}
						case ce.i:
						case ce.f:
						case ce.m:
						case ce.p:
						case ce.v: {
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
				eu = s("./src/reddit/actions/jsApi.ts");
			const tu = [];
			var su = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eu.a: {
							const s = t.payload;
							return -1 === e.indexOf(s) && (e = [...e, s]).sort(), e
						}
						default:
							return e
					}
				},
				nu = s("./src/reddit/actions/leaderboard/constants.ts"),
				au = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const ru = {};
			var cu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ru,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nu.a: {
							const {
								subredditId: s,
								data: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case nu.b:
						case nu.c: {
							const {
								subredditId: s
							} = t.payload, n = e, a = s;
							n[a];
							return au(n, ["symbol" == typeof a ? a : a + ""])
						}
						default:
							return e
					}
				},
				iu = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const ou = {};
			var du = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ou,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nu.a:
						case nu.c: {
							const {
								subredditId: s
							} = t.payload, n = e, a = s;
							n[a];
							return iu(n, ["symbol" == typeof a ? a : a + ""])
						}
						case nu.b: {
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
				lu = Object(c.c)({
					error: cu,
					pending: du
				});
			const uu = {};
			var bu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nu.c: {
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
				gu = Object(c.c)({
					api: lu,
					models: bu
				});
			var pu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case y.a: {
						const {
							listingKey: s
						} = t.payload;
						return s || e
					}
					default:
						return e
				}
			};
			const Ou = {};
			var fu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ou,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.b:
					case Ze.c:
					case ue.b:
					case ue.c: {
						const {
							key: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ye.Nb.Subreddits) && -1 === n.indexOf(Ye.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Ze.a:
					case ue.a: {
						const {
							key: s,
							error: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ye.Nb.Subreddits) && -1 === a.indexOf(Ye.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
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
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const ju = {};
			var yu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ju,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.b:
						case ue.b: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ye.Nb.Subreddits) && -1 === n.indexOf(Ye.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Ze.c:
						case Ze.a:
						case ue.c:
						case ue.a: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ye.Nb.Subreddits) && -1 === n.indexOf(Ye.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
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
				hu = Object(c.c)({
					error: fu,
					pending: yu
				});
			const mu = {};
			var vu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.c: {
						const {
							fetchedToken: s,
							key: n,
							type: a
						} = t.payload;
						if (-1 === a.indexOf(Ye.Nb.Subreddits) && -1 === a.indexOf(Ye.Nb.Users)) return e;
						const r = e[n];
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, r), {
								[s]: !0
							})
						})
					}
					case qe.e: {
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
			const _u = {};
			var Eu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.c: {
						const {
							key: s,
							listingOrder: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ye.Nb.Subreddits) && -1 === a.indexOf(Ye.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
							[s]: e[s].concat(n)
						})
					}
					case ue.c: {
						const {
							key: s,
							listingOrder: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ye.Nb.Subreddits) && -1 === a.indexOf(Ye.Nb.Users) ? e : Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Iu = {};
			var wu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.c:
						case ue.c: {
							const {
								key: s,
								tokens: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ye.Nb.Subreddits) && -1 === a.indexOf(Ye.Nb.Users) ? e : n.listings ? Object.assign(Object.assign({}, e), {
								[s]: {
									token: n.listings
								}
							}) : Object(Ds.a)(e, s)
						}
						case qe.e: {
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
				Su = Object(c.c)({
					api: hu,
					identifiers: Eu,
					fetchedTokens: vu,
					loadMore: wu
				}),
				Tu = s("./src/reddit/actions/eventPosts/constants.ts"),
				Cu = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				Au = s("./src/reddit/actions/pages/topic.ts");
			const Pu = {};
			var Du = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ie.h:
						case ie.g:
						case ie.l:
						case ie.k:
						case be.d:
						case be.c:
						case Ke.c:
						case Ke.b:
						case We.e:
						case We.f:
						case We.i:
						case We.h:
						case Ve.s:
						case Ve.r:
						case Cu.b:
						case Cu.c:
						case de.f:
						case de.e:
						case de.c:
						case de.b:
						case ge.f:
						case ge.e:
						case Je.f:
						case Je.e:
						case pe.j:
						case Au.f:
						case Au.e:
						case Au.c:
						case Au.b:
						case pe.i:
						case Tu.e:
						case Tu.c:
						case Tu.d: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: null
							})
						}
						case ue.b:
						case ue.c:
						case Ze.b:
						case Ze.c: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ye.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: null
							})
						}
						case ie.f:
						case ie.j:
						case be.a:
						case Ke.a:
						case We.g:
						case Ve.q:
						case Cu.a:
						case pe.h:
						case ge.d:
						case Je.d:
						case de.d:
						case de.a:
						case Au.d:
						case Au.a:
						case Tu.b: {
							const {
								key: s,
								error: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case ue.a:
						case Ze.a: {
							const {
								error: s,
								key: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ye.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						default:
							return e
					}
				},
				Ru = s("./src/reddit/actions/linkedPosts/constants.ts"),
				ku = s("./src/reddit/actions/subreddit/constants.ts");
			const Nu = {};
			var Lu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ie.h:
						case ie.l:
						case de.f:
						case Je.f:
						case be.d:
						case Ke.c:
						case We.f:
						case We.i:
						case Ve.s:
						case Cu.c:
						case ge.f:
						case de.c:
						case pe.j:
						case Au.c:
						case Tu.e: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ue.b:
						case Ze.b: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ye.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ie.g:
						case ie.f:
						case ie.j:
						case ie.k:
						case Je.d:
						case Je.e:
						case de.d:
						case de.e:
						case be.c:
						case be.a:
						case Ke.b:
						case Ke.a:
						case Ru.a:
						case Ru.b:
						case We.e:
						case We.d:
						case We.h:
						case We.g:
						case Ve.r:
						case Ve.q:
						case ge.d:
						case ge.e:
						case de.a:
						case de.b:
						case ku.h:
						case Cu.b:
						case Cu.a:
						case pe.i:
						case pe.h:
						case Au.b:
						case Au.a:
						case Tu.c:
						case Tu.b:
						case Tu.d: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case ku.p: {
							if (!t.payload || !t.payload.length) return e;
							const s = {};
							for (const e of t.payload) {
								s[e.key] = !1
							}
							return Object.assign(Object.assign({}, e), s)
						}
						case ue.c:
						case ue.a:
						case Ze.c:
						case Ze.a: {
							const {
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ye.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						default:
							return e
					}
				},
				xu = Object(c.c)({
					error: Du,
					pending: Lu
				}),
				Mu = s("./src/reddit/actions/postList.ts"),
				Uu = s("./node_modules/lodash/omitBy.js"),
				Fu = s.n(Uu);

			function Bu(e, t) {
				return t = t.toLowerCase(), Fu()(e, (e, s) => s === t || s.startsWith("".concat(t, "--[")))
			}
			const Gu = {};
			var qu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mu.a: {
						const {
							listingKey: s,
							listingName: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case Mu.b: {
						const {
							listingKey: s
						} = t.payload;
						return s in e ? In()(e, [s]) : e
					}
					case be.b:
						return Bu(e, t.payload);
					default:
						return e
				}
			};
			const Ku = {};
			var Vu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ku,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case We.e:
						case ie.g:
						case ie.k:
						case be.c:
						case de.e:
						case Au.e: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: {}
							})
						}
						case Ke.b:
						case We.h:
						case Ve.r:
						case ge.e:
						case de.b:
						case pe.i:
						case Au.b: {
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
						case Ze.c: {
							const {
								fetchedToken: s,
								key: n,
								type: a
							} = t.payload;
							if (a.indexOf(Ye.Nb.Posts) > -1) {
								const t = e[n];
								return Object.assign(Object.assign({}, e), {
									[n]: Object.assign(Object.assign({}, t), {
										[s]: !0
									})
								})
							}
							return e
						}
						case be.b:
							return Bu(e, t.payload);
						default:
							return e
					}
				},
				Hu = s("./src/reddit/actions/post.ts");
			const Wu = {};
			var Qu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ie.h:
						case We.f:
						case ie.l:
						case de.f:
						case be.d:
						case Je.f:
						case de.f:
						case Au.f: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: []
							})
						}
						case qe.e:
						case Ru.b:
						case We.e:
						case ie.g:
						case ie.k:
						case be.c:
						case ku.h:
						case Cu.b:
						case Je.e:
						case de.e:
						case "RECOMMENDED_POSTS_LOADED":
						case Au.e:
						case Tu.c: {
							const {
								key: s,
								postIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case ku.p: {
							if (!t.payload || !t.payload.length) return e;
							const s = {};
							for (const e of t.payload) {
								const t = e;
								s[t.key] = t.postIds
							}
							return Object.assign(Object.assign({}, e), s)
						}
						case Ke.b:
						case We.h:
						case Ve.r:
						case de.b:
						case ge.e:
						case pe.i:
						case Au.b:
						case Tu.d: {
							const {
								key: s,
								postIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: e[s].concat(n)
							})
						}
						case ue.c: {
							const {
								key: s,
								postOrder: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ye.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case Ze.c: {
							const {
								key: s,
								postOrder: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ye.Nb.Posts) ? e : Object.assign(Object.assign({}, e), {
								[s]: e[s].concat(n)
							})
						}
						case Hu.k: {
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
						case be.b:
							return Bu(e, t.payload);
						default:
							return e
					}
				},
				Ju = s("./src/lib/makeListingKey/index.ts"),
				zu = s("./src/reddit/actions/preferences.ts");
			const Xu = {};
			var Yu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case be.c: {
						const {
							key: s,
							listingSort: n
						} = t.payload;
						return n && !Object(Ju.b)(s) ? Object.assign(Object.assign({}, e), {
							[s]: {
								sort: n,
								hasChanged: !1
							}
						}) : e
					}
					case zu.a:
					case zu.q: {
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
			const Zu = {};
			var $u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ie.g:
					case ie.k:
					case be.c:
					case Je.e:
					case de.e:
					case Ke.b:
					case We.e:
					case We.h:
					case Ve.r:
					case ge.e:
					case de.b:
					case pe.i:
					case Au.e:
					case Au.b: {
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
						}) : Object(Ds.a)(e, s)
					}
					case Ze.c:
					case ue.c: {
						const {
							key: s,
							tokens: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ye.Nb.Posts) ? e : n.posts ? Object.assign(Object.assign({}, e), {
							[s]: {
								token: n.posts
							}
						}) : Object(Ds.a)(e, s)
					}
					case be.b:
						return Bu(e, t.payload);
					default:
						return e
				}
			};
			const eb = {};
			var tb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tu.c:
						case Tu.d: {
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
				sb = Object(c.c)({
					api: xu,
					endMarkers: qu,
					fetchedTokens: Vu,
					ids: Qu,
					listingSort: Yu,
					loadMore: $u,
					pageInfo: tb
				}),
				nb = Object(c.c)({
					activeKey: pu,
					listingOrder: Su,
					postOrder: sb
				});
			var ab = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ie.g: {
						const s = t.payload;
						return Yc()(s.announcements) ? e : s.announcements || null
					}
					default:
						return e
				}
			};
			var rb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ie.g: {
						const s = t.payload;
						return Yc()(s.featuredLiveThread) ? e : s.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var cb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ie.g:
							return !0;
						default:
							return e
					}
				},
				ib = Object(c.c)({
					announcements: ab,
					featured: rb,
					isFrontpageLoaded: cb
				}),
				ob = s("./src/reddit/actions/media.ts");
			const db = {};
			var lb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : db,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ob.b: {
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
			const ub = {};
			var bb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ub,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ob.e: {
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
				gb = Object(c.c)({
					currentSlideIndex: lb,
					isGalleryTileLayout: bb
				});
			var pb = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ob.c:
						return t.payload;
					default:
						return e
				}
			};
			var Ob = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ob.d:
							return t.payload;
						default:
							return e
					}
				},
				fb = Object(c.c)({
					isMuted: pb,
					volume: Ob
				}),
				jb = s("./src/reddit/actions/meta.ts");
			const yb = {
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
			var hb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jb.b:
						return t.payload;
					case jb.a:
						return Object.assign(Object.assign({}, e), t.payload);
					default:
						return e
				}
			};
			const mb = {};
			var vb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.c:
						case He.b:
						case ie.b:
						case Qe.b: {
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
						case ce.i:
						case ce.f:
						case ce.m:
						case ce.p:
						case ce.v: {
							const {
								response: s
							} = t.payload, {
								moderatingSubreddits: n,
								moderatingProfiles: a
							} = s;
							return Object.assign(Object.assign(Object.assign({}, e), n), a)
						}
						case pe.f:
						case We.e:
						case ce.k: {
							const s = t.payload,
								{
									moderatingSubreddits: n,
									moderatingProfiles: a
								} = s;
							return Object.assign(Object.assign(Object.assign({}, e), n), a)
						}
						case k.R: {
							const {
								subredditId: s
							} = t.payload;
							return Object(Ds.a)(e, s)
						}
						case k.O: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				_b = s("./src/reddit/actions/moderationLog/constants.ts");
			const Eb = {};
			var Ib = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _b.b: {
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
			const wb = {};
			var Sb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _b.b: {
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
							return Ue()(Object.assign({}, e), r)
						}
						default:
							return e
					}
				},
				Tb = Object(c.c)({
					itemOrder: Ib,
					models: Sb
				});
			var Cb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _b.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Ab = {};
			var Pb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ab,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _b.b: {
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
			const Db = {};
			var Rb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Db,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _b.b: {
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
			const kb = [];
			var Nb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _b.a: {
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
			var Lb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _b.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				xb = Object(c.c)({
					actions: Tb,
					endCursor: Cb,
					hasNextPage: Pb,
					hasPreviousPage: Rb,
					moderators: Nb,
					startCursor: Lb
				});
			var Mb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hu.e:
						return t.payload;
					case Hu.d:
						return null
				}
				return e
			};
			const Ub = {};
			var Fb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.E:
					case k.s: {
						const {
							subredditId: s,
							moderators: n
						} = t.payload.response || t.payload, a = {
							[s]: n
						};
						return Object(K.merge)(e, a)
					}
					case k.u: {
						const {
							subredditId: s,
							userId: n,
							permissions: a
						} = t.payload;
						return Object(K.setIn)(e, [s, n, "modPermissions"], a)
					}
					case k.Q: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(K.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			const Bb = {};
			var Gb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.t:
					case k.s: {
						const {
							key: s,
							subredditId: n
						} = t.payload;
						return n ? Object.assign(Object.assign({}, e), {
							[s]: null
						}) : e
					}
					case k.r: {
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
			const qb = {};
			var Kb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.r:
						case k.s: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: !1
							}) : e
						}
						case k.t: {
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
				Vb = Object(c.c)({
					error: Gb,
					pending: Kb
				});
			const Hb = {};
			var Wb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.s: {
							const {
								subredditId: s,
								response: n,
								key: a
							} = t.payload;
							return Object(K.setIn)(e, [s, a], n.moderatorIds)
						}
						case k.Q: {
							const {
								subredditId: s,
								userId: n,
								key: a
							} = t.payload, r = e[s][a].filter(e => e !== n);
							return Object(K.setIn)(e, [s, a], r)
						}
						default:
							return e
					}
				},
				Qb = Object(c.c)({
					data: Wb,
					api: Vb
				});
			var Jb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.x:
					case k.w:
						return null;
					case k.v:
						return t.payload;
					default:
						return e
				}
			};
			var zb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.w:
						case k.v:
							return !1;
						case k.x:
							return !0;
						default:
							return e
					}
				},
				Xb = Object(c.c)({
					error: Jb,
					pending: zb
				});
			const Yb = {};
			var Zb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.w: {
						const {
							subredditId: s,
							moderators: n
						} = t.payload;
						return Object(K.set)(e, s, n)
					}
					case k.P: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(K.unsetIn)(e, [s, n])
					}
					case k.a: {
						const s = t.payload,
							{
								subredditId: n,
								moderators: a
							} = s,
							r = {
								[n]: a
							};
						return Object(K.merge)(e, r)
					}
					default:
						return e
				}
			};
			const $b = {};
			var eg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $b,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.w: {
							const {
								subredditId: s,
								moderatorIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case k.P: {
							const {
								subredditId: s,
								userId: n
							} = t.payload, a = e[s].filter(e => e !== n);
							return Object.assign(Object.assign({}, e), {
								[s]: a
							})
						}
						case k.a: {
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
				tg = Object(c.c)({
					api: Xb,
					models: Zb,
					userOrder: eg
				});
			const sg = {};
			var ng = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.B: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							invitePending: a
						} = n, r = {
							[s]: a
						};
						return Object(K.merge)(e, r)
					}
					case k.y:
					case k.z: {
						const {
							subredditId: s
						} = t.payload;
						return Object(K.unset)(e, s)
					}
					default:
						return e
				}
			};
			const ag = {};
			var rg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ag,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.s: {
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
			const cg = {};
			var ig = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.B: {
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
			const og = {};
			var dg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : og,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.B: {
						const {
							response: s
						} = t.payload, n = {
							[s.subredditId]: s.moderators
						};
						return Object(K.merge)(Object.assign({}, e), n)
					}
					case k.u: {
						const s = t.payload,
							{
								subredditId: n,
								userId: a,
								permissions: r
							} = s;
						return e[n] && e[n][a] ? Object(K.setIn)(e, [n, a, "modPermissions"], r) : e
					}
					default:
						return e
				}
			};
			var lg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.F:
					case k.E:
						return null;
					case k.D:
						return t.payload;
					default:
						return e
				}
			};
			var ug = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.F:
							return !0;
						case k.E:
						case k.D:
							return !1;
						default:
							return e
					}
				},
				bg = Object(c.c)({
					error: lg,
					pending: ug
				});
			var gg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.F:
						case k.D:
						case k.Q:
							return null;
						case k.E: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case k.u: {
							const {
								userId: s,
								permissions: n
							} = t.payload;
							return e && e.id === s && !_n()(e.modPermissions, n) ? Object.assign(Object.assign({}, e), {
								modPermissions: n
							}) : e
						}
						default:
							return e
					}
				},
				pg = Object(c.c)({
					api: bg,
					result: gg
				});
			const Og = {};
			var fg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.C:
					case k.B: {
						const {
							subredditId: s,
							key: n
						} = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[n]: null
						}) : e
					}
					case k.A: {
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
			const jg = {};
			var yg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.A:
						case k.B: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: !1
							}) : e
						}
						case k.C: {
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
				hg = Object(c.c)({
					error: fg,
					pending: yg
				});
			const mg = {};
			var vg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.B: {
							const {
								response: s,
								subredditId: n,
								key: a
							} = t.payload, {
								moderatorIds: r
							} = s;
							return Object(K.merge)(e, {
								[n]: {
									[a]: r
								}
							})
						}
						case k.Q: {
							const {
								subredditId: s,
								userId: n
							} = t.payload, a = Object.assign({}, e[s]);
							return Object.keys(e[s]).forEach(t => {
								const r = e[s][t].filter(e => e !== n);
								a[t] = r
							}), Object(K.set)(e, s, a)
						}
						default:
							return e
					}
				},
				_g = Object(c.c)({
					data: vg,
					api: hg
				}),
				Eg = Object(c.c)({
					editableModerators: Fb,
					editableUserOrder: Qb,
					invitedModerators: tg,
					invitePending: ng,
					loadMoreModerators: ig,
					loadMoreEditableModerators: rg,
					models: dg,
					search: pg,
					userOrder: _g
				});
			var Ig = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case We.b:
					case We.k:
						return null;
					case We.a:
					case We.j:
						return t.payload;
					default:
						return e
				}
			};
			var wg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case We.b:
						case We.k:
							return !0;
						case We.c:
						case We.a:
						case We.l:
						case We.j:
							return !1;
						default:
							return e
					}
				},
				Sg = Object(c.c)({
					error: Ig,
					pending: wg
				});
			const Tg = [];
			var Cg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case We.e: {
							const s = t.payload,
								{
									filteredSubreddits: n
								} = s;
							return n || e
						}
						case We.j: {
							const s = t.payload;
							return [...e, s]
						}
						case We.k:
						case We.a: {
							const s = t.payload;
							return e.filter(e => e !== s)
						}
						default:
							return e
					}
				},
				Ag = Object(c.c)({
					api: Sg,
					names: Cg
				}),
				Pg = Object(c.c)({
					filteredSubreddits: Ag
				});
			var Dg = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sn.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			var Rg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wn.c:
					case wn.b:
						return null;
					case wn.a:
						return t.payload;
					default:
						return e
				}
			};
			var kg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wn.c:
							return !0;
						case wn.b:
						case wn.a:
						case ce.s:
						case ce.r:
							return !1;
						default:
							return e
					}
				},
				Ng = Object(c.c)({
					error: Rg,
					pending: kg
				});
			const Lg = {};
			var xg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.a: {
						const {
							ids: s
						} = t.payload, n = {};
						return s.forEach(e => n[e] = !0), Object.assign(Object.assign({}, e), n)
					}
					case ce.d: {
						const {
							ids: s
						} = t.payload;
						return In()(e, s)
					}
					case ce.c: {
						const {
							ids: e
						} = t.payload, s = {};
						return e.forEach(e => s[e] = !0), s
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
						case wn.b: {
							const {
								operation: e,
								ids: s
							} = t.payload;
							return "approve" === e ? Mg : {
								[Rn.c[e]]: s
							}
						}
						default:
							return e
					}
				},
				Fg = Object(c.c)({
					api: Ng,
					selectedItems: xg,
					undoLastAction: Ug
				});
			var Bg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.g:
					case ce.f:
						return null;
					case ce.e:
						return t.payload;
					default:
						return e
				}
			};
			var Gg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.g:
							return !0;
						case ce.f:
						case ce.e:
							return !1;
						default:
							return e
					}
				},
				qg = Object(c.c)({
					error: Bg,
					pending: Gg
				});
			const Kg = {};
			var Vg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.f: {
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
			const Hg = {};
			var Wg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.f: {
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
				Qg = Object(c.c)({
					api: qg,
					itemOrder: Vg,
					loadMore: Wg
				});
			var Jg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case We.e: {
						const s = t.payload,
							{
								moderatingSubreddits: n
							} = s;
						return n ? null : e
					}
					case ce.i:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: s
						} = e;
						return s
					}
					case ce.k: {
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
			const zg = [];
			var Xg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.i:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: s
						} = e;
						return s
					}
					case ce.k: {
						const s = t.payload,
							{
								listingOrder: n
							} = s;
						return [...e, ...n]
					}
					case We.e: {
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
			var Yg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.b:
						return !0;
					default:
						return e
				}
			};
			var Zg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.k:
							return !0;
						case ce.b:
							return !1;
						default:
							return e
					}
				},
				$g = Object(c.c)({
					after: Jg,
					data: Xg,
					loaded: Yg,
					pending: Zg
				});
			var ep = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.j:
					case ce.i:
						return null;
					case ce.h:
						return t.payload;
					default:
						return e
				}
			};
			var tp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.j:
							return !0;
						case ce.i:
						case ce.h:
							return !1;
						default:
							return e
					}
				},
				sp = Object(c.c)({
					error: ep,
					pending: tp
				});
			const np = {};
			var ap = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : np,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.i: {
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
						case ce.i: {
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
				ip = Object(c.c)({
					api: sp,
					itemOrder: ap,
					loadMore: cp
				});
			var op = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.n:
					case ce.m:
						return null;
					case ce.l:
						return t.payload;
					default:
						return e
				}
			};
			var dp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.n:
							return !0;
						case ce.m:
						case ce.l:
							return !1;
						default:
							return e
					}
				},
				lp = Object(c.c)({
					error: op,
					pending: dp
				});
			const up = {};
			var bp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : up,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.m: {
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
						case ce.m: {
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
				Op = Object(c.c)({
					api: lp,
					itemOrder: bp,
					loadMore: pp
				});
			var fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.q:
					case ce.p:
						return null;
					case ce.o:
						return t.payload;
					default:
						return e
				}
			};
			var jp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.q:
							return !0;
						case ce.p:
						case ce.o:
							return !1;
						default:
							return e
					}
				},
				yp = Object(c.c)({
					error: fp,
					pending: jp
				});
			const hp = {};
			var mp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.p: {
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
						case ce.p: {
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
				Ep = Object(c.c)({
					api: yp,
					itemOrder: mp,
					loadMore: _p
				});
			var Ip = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.w:
					case ce.v:
						return null;
					case ce.u:
						return t.payload;
					default:
						return e
				}
			};
			var wp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.w:
							return !0;
						case ce.v:
						case ce.u:
							return !1;
						default:
							return e
					}
				},
				Sp = Object(c.c)({
					error: Ip,
					pending: wp
				});
			const Tp = {};
			var Cp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.v: {
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
			const Ap = {};
			var Pp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ap,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.v: {
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
				Dp = Object(c.c)({
					api: Sp,
					itemOrder: Cp,
					loadMore: Pp
				}),
				Rp = Object(c.c)({
					bulkAction: Fg,
					edited: Qg,
					moderatedCommunitiesOrder: $g,
					modqueue: ip,
					reports: Op,
					spam: Ep,
					unmoderated: Dp
				}),
				kp = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Np = {};
			var Lp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Np,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.v: {
						const {
							moreCommentsId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case ne.u: {
						const {
							moreCommentsItem: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: null
						})
					}
					case ne.t: {
						const s = t.payload,
							{
								moreCommentsItem: n
							} = s,
							a = kp(s, ["moreCommentsItem"]);
						return Object.assign(Object.assign({}, e), {
							[n.id]: a || {}
						})
					}
					default:
						return e
				}
			};
			const xp = {};
			var Mp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.v: {
							const {
								moreCommentsId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ne.t:
						case ne.u: {
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
				Up = Object(c.c)({
					error: Lp,
					pending: Mp
				});
			const Fp = {};
			var Bp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ae.b:
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
											prev: Object(An.g)(n),
											postId: s.postId,
											isFromLiveWebSocket: !0
										}
									})
								}
								return e
							}
							return Object.assign(Object.assign({}, e), t.payload.moreComments);
						case ne.u:
						case He.b:
						case ie.b:
							return Object.assign(Object.assign({}, e), t.payload.moreComments);
						default:
							return e
					}
				},
				Gp = Object(c.c)({
					api: Up,
					models: Bp
				});
			var qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.b:
					case Ve.c:
						return null;
					case Ve.a:
						return t.payload;
					default:
						return e
				}
			};
			var Kp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.a:
					case Ve.c:
						return !0;
					case Ve.b:
						return !1;
					default:
						return e
				}
			};
			var Vp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ie.k:
						case Ve.a:
						case Ve.c:
							return null;
						case Ve.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Hp = Object(c.c)({
					error: qp,
					fetched: Kp,
					pending: Vp
				});
			var Wp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.f:
					case Ve.g:
						return null;
					case Ve.e:
						return t.payload;
					default:
						return e
				}
			};
			var Qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.e:
					case Ve.g:
						return !0;
					case Ve.f:
						return !1;
					default:
						return e
				}
			};
			var Jp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.e:
						case Ve.g:
							return !1;
						case Ve.f:
							return !0;
						default:
							return e
					}
				},
				zp = Object(c.c)({
					error: Wp,
					fetched: Qp,
					pending: Jp
				});
			var Xp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.i:
					case Ve.j:
						return null;
					case Ve.h:
						return t.payload;
					default:
						return e
				}
			};
			var Yp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.h:
					case Ve.j:
						return !0;
					case Ve.i:
						return !1;
					default:
						return e
				}
			};
			var Zp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.h:
						case Ve.j:
							return !1;
						case Ve.i:
							return !0;
						default:
							return e
					}
				},
				$p = Object(c.c)({
					error: Xp,
					fetched: Yp,
					pending: Zp
				});
			var eO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.l:
					case Ve.m:
						return null;
					case Ve.k:
						return t.payload;
					default:
						return e
				}
			};
			var tO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.k:
					case Ve.m:
						return !0;
					case Ve.l:
						return !1;
					default:
						return e
				}
			};
			var sO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.k:
						case Ve.m:
							return !1;
						case Ve.l:
							return !0;
						default:
							return e
					}
				},
				nO = Object(c.c)({
					error: eO,
					fetched: tO,
					pending: sO
				});
			var aO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.o:
					case Ve.p:
						return null;
					case Ve.n:
						return t.payload;
					default:
						return e
				}
			};
			var rO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.n:
					case Ve.p:
						return !0;
					case Ve.o:
						return !1;
					default:
						return e
				}
			};
			var cO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.n:
						case Ve.p:
							return !1;
						case Ve.o:
							return !0;
						default:
							return e
					}
				},
				iO = Object(c.c)({
					error: aO,
					fetched: rO,
					pending: cO
				});
			var oO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.t:
						return !1;
					case Ve.u:
						return !0;
					default:
						return e
				}
			};
			var dO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.t:
							return !0;
						case Ve.u:
							return !1;
						default:
							return e
					}
				},
				lO = Object(c.c)({
					fetched: oO,
					pending: dO
				});
			var uO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.A:
					case Ve.B:
						return null;
					case Ve.z:
						return t.payload;
					default:
						return e
				}
			};
			var bO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.A:
					case Ve.z:
						return !1;
					case Ve.B:
						return !0;
					default:
						return e
				}
			};
			var gO = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.A:
							return !0;
						case Ve.B:
						case Ve.z:
							return !1;
						default:
							return e
					}
				},
				pO = Object(c.c)({
					error: uO,
					fetched: bO,
					pending: gO
				});
			var OO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.w:
					case Ve.x:
						return null;
					case Ve.v:
						return t.payload;
					default:
						return e
				}
			};
			var fO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ve.v:
					case Ve.x:
						return !0;
					case Ve.w:
						return !1;
					default:
						return e
				}
			};
			var jO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.v:
						case Ve.x:
							return null;
						case Ve.w:
							const {
								id: s
							} = t.payload;
							return s;
						default:
							return e
					}
				},
				yO = Object(c.c)({
					error: OO,
					fetched: fO,
					pending: jO
				}),
				hO = Object(c.c)({
					addSubreddit: Hp,
					create: zp,
					deleteMulti: $p,
					duplicate: nO,
					edit: iO,
					forUser: lO,
					recommendations: pO,
					removeSubreddit: yO
				}),
				mO = s("./node_modules/lodash/union.js"),
				vO = s.n(mO);

			function _O(e, t, s) {
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
			var EO = s("./src/reddit/actions/profile/constants.ts");
			const IO = {};
			var wO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ie.k:
						case Ve.r:
						case Ve.u:
						case EO.h: {
							const {
								multireddits: s,
								multiredditsByUser: n,
								multiredditsModelsState: a
							} = t.payload, r = Object.assign({}, e), c = Object.assign(Object.assign({}, s), a);
							for (const t in n) {
								const s = n[t],
									a = e[t];
								r[t] = vO()(a, s).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return _n()(e, r) ? e : r
						}
						case Ve.g:
						case Ve.m: {
							const {
								userId: s,
								multireddit: n
							} = t.payload, a = e[s] ? e[s].slice() : [], r = _O(a, n.url, (e, t) => e > t ? 1 : -1);
							return a.splice(r, 0, n.url), Object.assign(Object.assign({}, e), {
								[s]: a
							})
						}
						case Ve.j: {
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
				SO = s("./src/reddit/actions/subscription/constants.ts"),
				TO = s("./src/reddit/models/Multireddit/index.ts");
			const CO = {};
			var AO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ie.k:
					case Ve.r:
					case Ve.u:
					case EO.h: {
						let s = {};
						for (const n in t.payload.multireddits) {
							const a = Object.assign({}, t.payload.multireddits[n]),
								r = e[n];
							r && !Object(TO.g)(a) && (a.subredditIds = r.subredditIds, a.profileIds = r.profileIds), n in e && _n()(e[a.url], a) || (s = Object.assign(Object.assign({}, s), {
								[n]: a
							}))
						}
						return Yc()(s) ? e : Object.assign(Object.assign({}, e), s)
					}
					case Ve.g:
					case Ve.m: {
						const {
							multireddit: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.url]: s
						})
					}
					case Ve.j: {
						const s = t.payload,
							n = Object.assign({}, e);
						return delete n[s], n
					}
					case Ve.p: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.url]: s
						})
					}
					case Ve.x: {
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
					case SO.d: {
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
					case SO.e: {
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
					case Ve.c: {
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
			const PO = {};
			var DO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.B: {
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
				RO = Object(c.c)({
					api: hO,
					byUserId: wO,
					models: AO,
					recommendations: DO
				});
			var kO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.J:
					case k.H:
						return null;
					case k.G:
						return t.payload;
					default:
						return e
				}
			};
			const NO = {};
			var LO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.J: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(L.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !0
							})
						}
						case k.H:
						case k.G: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, a = Object(L.d)(s, n);
							return Object.assign(Object.assign({}, e), {
								[a]: !1
							})
						}
						default:
							return e
					}
				},
				xO = Object(c.c)({
					error: kO,
					pending: LO
				});
			const MO = {};
			var UO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.H: {
						const {
							fetchedToken: s,
							subredditId: n
						} = t.payload, a = Object(L.d)(n, s);
						return Object.assign(Object.assign({}, e), {
							[a]: !0
						})
					}
					default:
						return e
				}
			};
			var FO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lt.b:
						return t.payload;
					default:
						return e
				}
			};
			const BO = {};
			var GO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.H: {
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
			const qO = {};
			var KO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.I:
					case k.H: {
						const {
							subredditId: s,
							mutedUsers: n
						} = t.payload, a = {
							[s]: n
						};
						return Object(K.merge)(e, a)
					}
					case k.N: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(K.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			var VO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.M:
					case k.L:
						return null;
					case k.K:
						return t.payload;
					default:
						return e
				}
			};
			var HO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.M:
							return !0;
						case k.L:
						case k.K:
							return !1;
						default:
							return e
					}
				},
				WO = Object(c.c)({
					error: VO,
					pending: HO
				});
			var QO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.M:
						case k.K:
							return null;
						case k.L: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				JO = Object(c.c)({
					api: WO,
					result: QO
				});
			const zO = {};
			var XO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.H: {
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
						case k.N: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== n)
							}
						}
						case k.I: {
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
				YO = Object(c.c)({
					api: xO,
					fetchedTokens: UO,
					inContext: FO,
					loadMore: GO,
					models: KO,
					search: JO,
					userOrder: XO
				}),
				ZO = s("./src/reddit/actions/notificationBanner.ts");
			var $O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ZO.b:
							return t.payload.notificationBannerId;
						case ZO.a:
							return null;
						default:
							return e
					}
				},
				ef = s("./src/reddit/actions/nps.ts");
			const tf = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var sf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ef.c:
							return Object.assign(Object.assign({}, tf), {
								pending: !0
							});
						case ef.a:
							return tf;
						case ef.b: {
							const {
								dest: e
							} = t.payload;
							return Object.assign(Object.assign({}, tf), {
								success: !0,
								dest: e
							})
						}
						default:
							return e
					}
				},
				nf = s("./src/reddit/actions/oldSiteRules.ts");
			const af = [];
			var rf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : af,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nf.a:
						return t.payload.oldSiteRules;
					default:
						return e
				}
			};
			const cf = e => {
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
			const of = e => {
				const t = {};
				for (const s of e) t[s.experimentName.toLowerCase()] = cf(s);
				return t
			}, df = {};
			var lf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : df,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gi.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, s = e ? e.experiments : [];
						return of(s)
					}
					default:
						return e
				}
			};
			var uf = Object(c.c)({
					byName: lf,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Gi.a: {
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
				bf = Object(c.c)({
					experiments: uf
				}),
				gf = s("./node_modules/history/esm/history.js"),
				pf = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Of = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				ff = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				jf = (e, t, s, n) => {
					const a = s.route,
						{
							action: r
						} = a,
						c = pf(a, ["action"]);
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
			var yf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Of,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a: {
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
							const i = Object(gf.e)(r),
								o = a ? jf(c, i, a, r) : ff(c, i);
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
									a = pf(e, ["symbol" == typeof t ? t : t + ""]);
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
						case y.e: {
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
						case y.f: {
							if (!e.currentPage) return e;
							const s = t.payload,
								n = Object.assign(Object.assign({}, e.currentPage), {
									status: s
								});
							return Object.assign(Object.assign({}, e), {
								currentPage: n
							})
						}
						case He.b:
						case ie.b:
							return !e.currentPage || t.payload.postMeta, e;
						case y.b:
							return e;
						case y.d: {
							const {
								allowNavigationCallback: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								allowNavigationCallback: s
							})
						}
						case y.c:
							return Object.assign(Object.assign({}, e), {
								allowNavigationCallback: null
							});
						default:
							return e
					}
				},
				hf = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const mf = {};
			var vf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.k: {
						const {
							pollId: s
						} = t.payload.pollResults, n = e, a = s;
						n[a];
						return hf(n, ["symbol" == typeof a ? a : a + ""])
					}
					case f.j: {
						const {
							pollId: s
						} = t.payload, n = e, a = s;
						n[a];
						return hf(n, ["symbol" == typeof a ? a : a + ""])
					}
					case f.i: {
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
			const _f = {};
			var Ef = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _f,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.k: {
							const {
								pollId: s
							} = t.payload.pollResults;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case f.i: {
							const {
								pollId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case f.j: {
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
				If = Object(c.c)({
					error: vf,
					pending: Ef
				}),
				wf = Object(c.c)({
					voting: If
				}),
				Sf = s("./src/reddit/actions/economics/predictions/constants.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const Tf = e => {
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
			var Cf = e => {
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
						type: hc.a.GA,
						isPrediction: r,
						totalStakeAmount: o,
						userSelection: l,
						userWonAmount: u,
						resolvedOptionId: i
					}
				},
				Af = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Pf = {};
			var Df = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.h: {
						const {
							poll: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: s
						})
					}
					case ie.g:
					case be.c:
					case pe.i:
					case Ke.b:
					case He.b:
					case ie.b: {
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
							n[e].pollData && (a[e] = Cf(n[e]))
						}), Object.assign(Object.assign({}, e), a)
					}
					case Sf.b:
						const s = t.payload,
							{
								pollId: n
							} = s,
							a = s.prediction,
							{
								options: r,
								selectedOptionId: c
							} = a,
							i = Af(a, ["options", "selectedOptionId"]);
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
			const Rf = {};
			var kf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.k: {
						const {
							[hc.b.ByVoters]: s, pollId: n
						} = t.payload.pollResults;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case f.e: {
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
					case ie.g:
					case be.c:
					case pe.i:
					case Ke.b:
					case He.b:
					case ie.b: {
						const {
							governance: s,
							posts: n
						} = t.payload;
						if (s) {
							const t = Object.keys(s).reduce((e, t) => {
								const n = s[t],
									{
										[hc.b.ByVoters]: a,
										pollId: r
									} = n.pollResults;
								return e[r] = a, e
							}, {});
							return Object.assign(Object.assign({}, e), t)
						}
						const a = Object.keys(n).reduce((e, t) => {
							if (!n[t].pollData) return e;
							const s = Tf(n[t].pollData);
							return s ? (e[t] = s, e) : e
						}, {});
						return Object.keys(a).length ? Object.assign(Object.assign({}, e), a) : e
					}
					default:
						return e
				}
			};
			const Nf = {};
			var Lf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.k: {
							const {
								[hc.b.ByVotingPower]: s, pollId: n
							} = t.payload.pollResults;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						case ie.g:
						case be.c:
						case pe.i:
						case Ke.b:
						case He.b:
						case ie.b: {
							const {
								governance: s
							} = t.payload;
							if (s) {
								const t = Object.keys(s).reduce((e, t) => {
									const n = s[t],
										{
											[hc.b.ByVotingPower]: a,
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
				xf = Object(c.c)({
					byVoters: kf,
					byVotingPower: Lf
				});
			const Mf = {};
			var Uf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.k: {
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
				Ff = Object(c.c)({
					api: wf,
					models: Df,
					results: xf,
					rewards: Uf
				});
			const Bf = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Gf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case La.i:
					case La.j:
						return Object.assign(Object.assign({}, e), {
							reorderError: null
						});
					case La.h:
						return Object.assign(Object.assign({}, e), {
							reorderError: t.payload
						});
					case La.l:
					case La.m:
						return Object.assign(Object.assign({}, e), {
							updateDescriptionError: null
						});
					case La.k:
						return Object.assign(Object.assign({}, e), {
							updateDescriptionError: t.payload
						});
					case La.p:
					case La.q:
						return Object.assign(Object.assign({}, e), {
							updateLayoutError: null
						});
					case La.o:
						return Object.assign(Object.assign({}, e), {
							updateLayoutError: t.payload
						});
					default:
						return e
				}
			};
			const qf = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Kf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case La.i:
							return Object.assign(Object.assign({}, e), {
								reorderPending: !0
							});
						case La.h:
						case La.j:
							return Object.assign(Object.assign({}, e), {
								reorderPending: !1
							});
						case La.l:
							return Object.assign(Object.assign({}, e), {
								updateDescriptionPending: !0
							});
						case La.k:
						case La.m:
							return Object.assign(Object.assign({}, e), {
								updateDescriptionPending: !1
							});
						case La.p:
							return Object.assign(Object.assign({}, e), {
								updateLayoutPending: !0
							});
						case La.o:
						case La.q:
							return Object.assign(Object.assign({}, e), {
								updateLayoutPending: !1
							});
						default:
							return e
					}
				},
				Vf = Object(c.c)({
					error: Gf,
					pending: Kf
				}),
				Hf = s("./src/reddit/helpers/path/index.ts");
			const Wf = {},
				Qf = e => {
					const {
						protocol: t,
						domain: s
					} = e;
					return e => {
						const n = Object(Hf.b)(e.permalink);
						return Object.assign(Object.assign({}, e), {
							permalink: "".concat(t, "://").concat(s).concat(n)
						})
					}
				};
			var Jf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qe.b:
					case We.e:
					case We.h:
					case oe.b:
					case oe.e:
					case Je.e:
					case Je.b:
					case de.e:
					case de.b:
					case be.c:
					case ie.g:
					case ie.k:
					case be.c:
					case He.b:
					case ie.b:
					case Hu.g:
					case Ve.r:
					case Ke.b:
					case ge.e:
					case "RECOMMENDED_POSTS_LOADED":
					case pe.i:
					case Ze.c:
					case ze.b:
					case ue.c:
					case La.f: {
						const {
							collections: s,
							meta: n
						} = t.payload;
						if (!s) return e;
						let a = s;
						if (n) {
							const e = Qf(n);
							a = js()(s, e)
						}
						return Object.assign(Object.assign({}, e), a)
					}
					case La.d: {
						const {
							collection: s,
							meta: n
						} = t.payload;
						if (!s) return e;
						const a = s.id;
						let r = s;
						if (n) {
							r = Qf(n)(s)
						}
						return Object.assign(Object.assign({}, e), {
							[a]: r
						})
					}
					case La.g: {
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
					case La.a: {
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
					case La.e: {
						const {
							collectionId: s
						} = t.payload, n = Object.assign({}, e);
						return delete n[s], n
					}
					case La.s: {
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
					case La.j: {
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
					case La.m: {
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
					case La.q: {
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
			const zf = {};
			var Xf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.b:
						case La.f: {
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
						case La.d: {
							const {
								collection: s
							} = t.payload, {
								subredditId: n
							} = s, a = e[n] || [];
							return Object.assign(Object.assign({}, e), {
								[n]: [...a, s.id]
							})
						}
						case La.e: {
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
				Yf = Object(c.c)({
					models: Jf,
					subredditToIds: Xf,
					api: Vf
				}),
				Zf = s("./src/reddit/actions/postFlair.ts"),
				$f = s("./src/reddit/models/Flair/index.ts");
			const ej = {},
				tj = {
					displaySettings: {
						isEnabled: !1,
						position: $f.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				sj = (e, t) => {
					if (!t) return e;
					const s = Object.keys(t);
					return 0 === s.length ? e : s.reduce((e, s) => (e[s] = Object.assign(Object.assign(Object.assign({}, tj), e[s]), t[s]), e), Object.assign({}, e))
				};
			var nj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.b:
						case Ke.b:
						case We.e:
						case We.h:
						case Ve.r:
						case Cu.b:
						case He.b:
						case ie.b:
						case ie.g:
						case ie.k:
						case ue.c:
						case be.c:
						case oe.b:
						case oe.e:
						case le.c:
						case le.i:
						case le.e:
						case le.g:
						case ge.e:
						case ze.b:
						case ze.b:
						case Je.b:
						case Je.e:
						case de.b:
						case de.e:
						case "RECOMMENDED_POSTS_LOADED":
						case Ze.c:
						case Ze.c:
						case pe.i:
							return sj(e, t.payload.postFlair);
						case Zf.c: {
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
						case Zf.a: {
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
						case Zf.f: {
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
						case Zf.b: {
							const {
								subredditId: s,
								templateId: n
							} = t.payload, a = e[s], {
								templates: r,
								templateIds: c
							} = a, i = In()(r, n), o = c.filter(e => e !== n);
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, a), {
									templates: i,
									templateIds: o
								})
							})
						}
						case Zf.e:
						case Zf.d: {
							const s = t.payload,
								n = e[s.subredditId];
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: Object.assign(Object.assign({}, n), {
									templateIds: s.templateIds
								})
							})
						}
						case ce.i:
						case ce.f:
						case ce.m:
						case ce.p:
						case ce.v: {
							const {
								response: s
							} = t.payload;
							return sj(e, s.postFlair)
						}
						default:
							return e
					}
				},
				aj = s("./src/reddit/actions/postRequirements/constants.ts");
			const rj = {};
			var cj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case aj.a: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case aj.c:
					case aj.b: {
						const {
							subredditName: s
						} = t.payload;
						return Object(Ds.a)(e, s)
					}
					default:
						return e
				}
			};
			const ij = {};
			var oj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ij,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case aj.c:
						case aj.a:
						case aj.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === aj.c;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				dj = Object(c.c)({
					error: cj,
					pending: oj
				}),
				lj = Object(c.c)({
					fetch: dj
				});
			const uj = {};
			var bj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case aj.b: {
							const {
								subredditName: s,
								requirements: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case aj.d: {
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
				gj = Object(c.c)({
					api: lj,
					models: bj
				}),
				pj = s("./src/reddit/actions/inFeedChaining.ts");
			var Oj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pj.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const fj = {};
			var jj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pj.c: {
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
			const yj = {};
			var hj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pj.b:
							return Object.assign(Object.assign({}, e), {
								[t.payload.postId]: t.payload.listingKey
							});
						default:
							return e
					}
				},
				mj = Object(c.c)({
					dismissed: Oj,
					dismissedIdToListingKey: jj,
					idToListingKey: hj
				});
			var vj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hu.a:
							return t.payload;
						default:
							return e
					}
				},
				_j = s("./src/reddit/actions/embedAndImage.ts");
			const Ej = {};
			var Ij = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ej,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _j.b: {
							const {
								postId: s
							} = t.payload;
							return e[s] ? Object.assign(Object.assign({}, e), {
								[s]: !1
							}) : e
						}
						case _j.a: {
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
				wj = Object(c.c)({
					loadable: Ij
				});
			const Sj = {};
			var Tj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hu.b: {
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
			var Cj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hu.c: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Aj = {};
			var Pj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Aj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case We.e:
						case We.h:
						case ie.g:
						case be.c:
						case Ke.b:
						case ge.e:
						case "RECOMMENDED_POSTS_LOADED":
						case pe.i:
						case Ze.c:
						case ue.c:
							return se()(Object.assign({}, e), t.payload.postInstances, (e, t) => {
								if (e) return e.concat(t)
							});
						default:
							return e
					}
				},
				Dj = s("./src/reddit/actions/isTrackingCrossposts.ts");
			const Rj = {};
			var kj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dj.a: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const Nj = {};
			var Lj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.h: {
							const {
								poll: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.postId]: s.id
							})
						}
						case ie.g:
						case be.c:
						case pe.i:
						case Ke.b:
						case He.b:
						case ie.b: {
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
				xj = s("./src/reddit/actions/flairManagement/constants.ts"),
				Mj = s("./src/reddit/actions/googleQASchema/constants.ts"),
				Uj = s("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Fj = s("./src/reddit/actions/subredditTopContent.ts"),
				Bj = s("./src/reddit/helpers/isPost.ts"),
				Gj = s("./node_modules/lodash/pickBy.js"),
				qj = s.n(Gj);

			function Kj(e, t) {
				const s = qj()(t, (function(t) {
					let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[s] || !_n()(e[s], t)
				}));
				return Object.keys(s).length > 0 ? Object.assign(Object.assign({}, e), s) : e
			}
			var Vj = s("./src/reddit/models/Media/index.ts"),
				Hj = s("./src/reddit/models/Post/index.ts"),
				Wj = s("./src/reddit/actions/subredditDuplicates.ts"),
				Qj = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const Jj = {},
				zj = e => {
					const {
						protocol: t,
						domain: s
					} = e;
					return e => {
						const n = Object(Hf.b)(e.permalink);
						return Object.assign(Object.assign({}, e), {
							permalink: "".concat(t, "://").concat(s).concat(n)
						})
					}
				},
				Xj = e => t => {
					const s = e[t.id];
					return s && s.events && (t.events = s.events, t.source = s.source), t
				},
				Yj = e => t => {
					const s = e[t.id];
					return s && s.isSponsored && (t.isSponsored = s.isSponsored), t
				},
				Zj = e => e.media && Object(Vj.F)(e.media) ? Object.assign({}, Object(K.unsetIn)(e, ["source"])) : e,
				$j = e => t => {
					const s = e[t.id];
					return t && t.media && s && s.media && Object(Vj.I)(t.media) && t.media.isRichtextPreview && Object(Vj.I)(s.media) && !s.media.isRichtextPreview && (t.media.richtextContent = s.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				ey = e => t => {
					const s = e[t.id];
					return s && s.numDuplicates && (t.numDuplicates = s.numDuplicates), t
				},
				ty = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = Object.assign(Object.assign({}, t), {
						outboundUrlReceived: Date.now()
					}), e.source = t), e
				},
				sy = e => {
					const {
						allAwardings: t
					} = e, s = Qj(e, ["allAwardings"]), n = {};
					return t && t.forEach(e => {
						n[e.id] = e.count
					}), Object.assign(Object.assign({}, s), {
						awardCountsById: n
					})
				},
				ny = e => t => {
					for (let s = 0; s < e.length; s++) t = e[s](t);
					return t
				},
				ay = (e, t) => Object.assign(Object.assign({}, e), {
					events: t.events,
					source: t.source
				});
			var ry = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case y.a:
						if (Dr(t) === (Ye.Bb.COMMENTS || Ye.Bb.DUPLICATES)) {
							const s = Rr(t),
								n = kr(t);
							if (s && s.instanceId && n && n.partialPostId) {
								const t = s.instanceId,
									a = Object(Hj.m)(n.partialPostId);
								if (e[a] && e[t]) return Object.assign(Object.assign({}, e), {
									[a]: ay(e[a], e[t])
								})
							}
						}
						return e;
					case He.b:
					case ie.b: {
						const s = zj(t.payload.meta);
						return Object.assign(Object.assign({}, e), js()(t.payload.posts, ny([s, ty, sy, Zj, Xj(e), Yj(e), ey(e)])))
					}
					case Hu.g:
						return Kj(e, t.payload);
					case Wj.a:
						return Kj(e, t.payload.posts);
					case Qe.b:
					case Ru.b:
					case We.e:
					case We.h:
					case oe.b:
					case oe.e:
					case Je.e:
					case Je.b:
					case de.e:
					case de.b:
					case be.c:
					case ie.g:
					case ie.k:
					case be.c:
					case Cu.b:
					case Ve.r:
					case Ke.b:
					case ge.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ku.h:
					case pe.i:
					case ze.b:
					case Au.e:
					case Au.b:
					case Tu.c:
					case Tu.d: {
						const s = zj(t.payload.meta);
						return Object.assign(Object.assign({}, e), js()(t.payload.posts, ny([s, ty, sy, Zj, $j(e), ey(e)])))
					}
					case ku.p: {
						if (!t.payload || !t.payload.length) return e;
						const s = {};
						for (const n of t.payload) {
							const t = n,
								a = zj(t.meta);
							Object.assign(s, js()(t.posts, ny([a, ty, sy, Zj, $j(e), ey(e)])))
						}
						return Object.assign(Object.assign({}, e), s)
					}
					case Cu.b: {
						const s = zj(t.payload.meta),
							n = e[t.payload.postId];
						return Object.assign(Object.assign(Object.assign({}, e), js()(t.payload.posts, ny([s, ty, sy, Zj, $j(e), ey(e)]))), {
							[t.payload.postId]: Object.assign(Object.assign({}, n), {
								numDuplicates: t.payload.count
							})
						})
					}
					case qe.e:
					case Ze.c:
					case ue.c: {
						const s = zj(t.payload.meta),
							n = js()(t.payload.posts, ny([s, sy, ty, Zj]));
						return se()(Object.assign({}, e), n, (e, t) => Object.assign(Object.assign({}, t), e))
					}
					case Hu.h: {
						const s = t.payload;
						return se()(Object.assign({}, e), s, (e, t) => Object.assign(Object.assign({}, e), t))
					}
					case Tn.a: {
						const {
							id: s,
							vote: n
						} = t.payload, a = e[s];
						return a ? Object.assign(Object.assign({}, e), {
							[s]: Object(kn.c)(a, n)
						}) : e
					}
					case ae.b:
					case ne.G: {
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
					case ne.y: {
						const s = t.payload.postId,
							n = e[s];
						return n ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								numComments: n.numComments - 1
							})
						}) : e
					}
					case ve.ob: {
						const {
							topAwardedPosts: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s.reduce((e, t) => (e[t.post.id] = ny([sy])(Object(Gr.e)(t.post)), e), {}))
					}
					case ve.t: {
						const {
							id: s,
							awardings: n,
							gilder: a,
							treatmentTags: r
						} = t.payload, c = e[s];
						return c ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, Pn(c, n, a)), {
								treatmentTags: r
							})
						}) : e
					}
					case ve.G: {
						const {
							awardId: s,
							thingId: n
						} = t.payload, a = e[n];
						return a ? Object.assign(Object.assign({}, e), {
							[n]: Dn(a, s)
						}) : e
					}
					case k.l: {
						const {
							posts: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case ce.i:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v: {
						const {
							response: s
						} = t.payload, {
							posts: n
						} = s;
						return Object.assign(Object.assign({}, e), js()(n, ny([sy, Zj])))
					}
					case wn.b:
					case ce.s: {
						const {
							operation: s,
							ids: n,
							username: a,
							options: r
						} = t.payload, c = n.filter(e => Object(Bj.a)(e)), i = Object(Rn.d)(e, s, c, a, r);
						return se()(Object.assign({}, e), i, (e, t) => Object.assign(Object.assign({}, e), t))
					}
					case La.t: {
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
					case La.e: {
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
					case La.g: {
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
					case Tu.f: {
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
					case Tu.a: {
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
					case Vo.g: {
						const s = t.payload.subredditTopContent;
						return s && s.posts && Object.keys(s.posts) ? Object.assign(Object.assign({}, js()(s.posts, ny([sy, Zj]))), e) : e
					}
					case le.c:
					case le.i:
					case le.e:
					case le.g:
					case Fj.b:
						return Object.assign(Object.assign({}, js()(t.payload.posts, ny([sy, Zj]))), e);
					case Hu.j: {
						const {
							postId: s,
							richtextContent: n
						} = t.payload, a = e[s];
						return a && a.media && Object(Vj.I)(a.media) ? Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								media: Object.assign(Object.assign({}, a.media), {
									richtextContent: n,
									isRichtextPreview: !1
								})
							})
						}) : e
					}
					case xj.a: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: s
						})
					}
					case xj.b: {
						const s = t.payload;
						return Object(Ds.a)(e, s)
					}
					case ob.a: {
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
					case w.n: {
						const s = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign(Object.assign({}, e), s)
					}
					case Uj.b: {
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
					case Uj.a:
						return Object.assign({}, e);
					case Mj.b: {
						const {
							postId: s,
							isEligibleForQASchema: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), {
								isEligibleForQASchema: n
							})
						})
					}
					case Mj.a:
						return Object.assign({}, e);
					default:
						return e
				}
			};
			var cy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hu.f:
							return t.payload;
						default:
							return e
					}
				},
				iy = s("./src/reddit/actions/postLevelCrowdControl.ts");
			const oy = {};
			var dy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iy.a: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const ly = [];
			var uy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ly,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hu.i: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case ie.g:
						case be.c: {
							const {
								recentPostIds: s
							} = t.payload;
							return s && s.length ? s : e
						}
						default:
							return e
					}
				},
				by = s("./node_modules/uuid/v4.js"),
				gy = s.n(by);
			const py = gy()();
			var Oy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : py,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qe.b:
					case pr.h:
					case pr.a:
					case pr.m:
					case pr.f:
						return gy()();
					default:
						return e
				}
			};
			var fy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.d:
					case pr.o:
					case pr.k:
					case pr.g:
					case pr.a:
					case pr.m:
					case pr.f:
						return null;
					case pr.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case pr.e:
						return "error";
					default:
						return e
				}
			};
			var jy = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.g:
						return !0;
					case pr.m:
					case pr.a:
					case pr.f:
					case pr.e:
						return !1;
					default:
						return e
				}
			};
			var yy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pr.k:
							return !0;
						case pr.j:
						case pr.e:
						case pr.o:
						case pr.d:
							return !1;
						default:
							return e
					}
				},
				hy = Object(c.c)({
					creationToken: Oy,
					error: fy,
					pending: jy,
					pendingUpdate: yy
				});
			const my = {};
			var vy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : my,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.c: {
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
			const _y = {
				standalonePosts: {
					POSTS_LOADED: pr.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: pr.o
				},
				recurringPosts: {
					POSTS_LOADED: pr.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: pr.d
				}
			};

			function Ey(e) {
				const t = {};
				return function() {
					let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case _y[e].POSTS_LOADED:
						case pr.f: {
							const {
								subredditInfoById: t
							} = n.payload, {
								id: a
							} = t, r = t.scheduledPosts[e].models.reduce((e, t) => (e[t.id] = t, e), {});
							return Object.assign(Object.assign({}, s), {
								[a]: Object.assign(Object.assign({}, s[a] || {}), r)
							})
						}
						case pr.i:
						case pr.l: {
							const {
								subredditId: e,
								scheduledPostId: t
							} = n.payload, a = s[e] || {};
							return Object.assign(Object.assign({}, s), {
								[e]: Object.assign({}, Object.keys(a).filter(e => e !== t).reduce((e, t) => (e[t] = a[t], e), {}))
							})
						}
						case pr.h: {
							const {
								subredditId: e
							} = n.payload;
							return Object.keys(s).reduce((t, n) => (n !== e && (t[n] = s[n]), t), {})
						}
						case _y[e].MUTATION_SUCCEEDED: {
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
			const Iy = {};

			function wy(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iy,
						s = arguments.length > 1 ? arguments[1] : void 0;
					switch (s.type) {
						case _y[e].POSTS_LOADED:
						case pr.f: {
							const {
								subredditInfoById: n
							} = s.payload, a = n.id, {
								pageInfo: r
							} = n.scheduledPosts[e];
							return Object.assign(Object.assign({}, t), {
								[a]: Object.assign({}, r)
							})
						}
						case pr.h: {
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
			var Sy = s("./node_modules/lodash/uniq.js"),
				Ty = s.n(Sy);
			const Cy = {};

			function Ay(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cy,
						s = arguments.length > 1 ? arguments[1] : void 0;
					switch (s.type) {
						case _y[e].POSTS_LOADED:
						case pr.f: {
							const {
								subredditInfoById: n
							} = s.payload, a = n.id, r = n.scheduledPosts[_y[e].postIdsKey];
							return Object.assign(Object.assign({}, t), {
								[a]: Ty()([...t[a] || [], ...r])
							})
						}
						case pr.i:
						case pr.l: {
							const {
								subredditId: e,
								scheduledPostId: n
							} = s.payload, a = t[e] || [];
							return Object.assign(Object.assign({}, t), {
								[e]: a.filter(e => e !== n)
							})
						}
						case pr.h: {
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
			var Py = Object(c.c)({
					models: Ey("recurringPosts"),
					pageInfo: wy("recurringPosts"),
					postOrder: Ay("recurringPosts"),
					editModal: vy
				}),
				Dy = Object(c.c)({
					models: Ey("standalonePosts"),
					pageInfo: wy("standalonePosts"),
					postOrder: Ay("standalonePosts")
				}),
				Ry = Object(c.c)({
					api: hy,
					standalonePosts: Dy,
					recurringPosts: Py
				});
			var ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.nb:
						return t.payload;
					case ve.pb:
					case ve.ob:
						return null;
					default:
						return e
				}
			};
			var Ny = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.ob:
						case ve.nb:
							return !1;
						case ve.pb:
							return !0;
						default:
							return e
					}
				},
				Ly = Object(c.c)({
					error: ky,
					pending: Ny
				});
			const xy = [];
			var My = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.ob: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case ve.nb:
						case ve.pb:
							return xy;
						default:
							return e
					}
				},
				Uy = Object(c.c)({
					api: Ly,
					list: My
				}),
				Fy = s("./src/reddit/actions/video.ts");
			const By = {};
			var Gy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : By,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.e: {
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
			const qy = {};
			var Ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.a: {
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
			const Vy = {};
			var Hy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.b: {
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
			const Wy = {};
			var Qy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.c: {
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
			const Jy = {
				mutedInFeed: !0
			};
			var zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.l:
						return Object.assign(Object.assign({}, e), {
							mutedInFeed: t.payload
						});
					default:
						return e
				}
			};
			var Xy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Fy.d:
						return null;
					default:
						return e
				}
			};
			const Yy = {};
			var Zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.o: {
						const {
							postId: s
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: !1
						}) : e
					}
					case Fy.e: {
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
			const $y = {};
			var eh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.h: {
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
					case Fy.f: {
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
			const th = {};
			var sh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.j: {
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
			const nh = {};
			var ah = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.p: {
						const {
							postId: s
						} = t.payload;
						return e[s] ? Object.assign(Object.assign({}, e), {
							[s]: !1
						}) : e
					}
					case Fy.g: {
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
			const rh = {};
			var ch = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.i: {
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
			const ih = {};
			var oh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ih,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fy.m: {
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
				dh = s("./src/reddit/constants/video.ts");
			const lh = {};
			var uh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fy.n: {
							const {
								postId: s,
								time: n
							} = t.payload;
							return e[s] && Math.abs(Math.floor(n.currentTime) - Math.floor(e[s].currentTime)) < dh.k ? e : Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				bh = Object(c.c)({
					autoPlayed: Gy,
					buffering: Ky,
					consumed: Hy,
					continuousViewStartedAt: Qy,
					feed: zy,
					fullscreen: Xy,
					loadable: Zy,
					loadTimes: eh,
					metadata: sh,
					paused: ah,
					playing: ch,
					started: oh,
					time: uh
				}),
				gh = Object(c.c)({
					chained: mj,
					embedAndImage: wj,
					expanded: Tj,
					focus: Cj,
					instances: Pj,
					isTrackingCrossposts: kj,
					metaMap: Lj,
					models: ry,
					modToMemberShare: cy,
					crowdControl: vj,
					postLevelCrowdControl: dy,
					recent: uy,
					scheduledPosts: Ry,
					topAwarded: Uy,
					video: bh
				}),
				ph = s("./src/lib/reducers/addAuthentication/index.ts");
			const Oh = {};
			var fh = Object(ph.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case He.b:
						case ie.b: {
							const {
								postId: s,
								commentLists: n,
								comments: a
							} = t.payload, r = n[s] && n[s].head;
							return r && a[r.id] && a[r.id].isStickied ? Object.assign(Object.assign({}, e), {
								[s]: r.id
							}) : e
						}
						case ne.C: {
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
				}), Oh),
				jh = Object(c.c)({
					data: fh
				});
			const yh = {};
			var hh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case m.f:
					case m.g: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: void 0
						})
					}
					case m.e: {
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
			const mh = {};
			var vh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case m.f: {
							const {
								subredditId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case m.g:
						case m.e: {
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
				_h = Object(c.c)({
					error: hh,
					pending: vh
				});
			const Eh = {};
			var Ih = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case m.d: {
						const {
							product: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: void 0
						})
					}
					case m.c:
					case j.f:
					case j.g:
					case j.i:
					case j.j: {
						const {
							productId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: void 0
						})
					}
					case m.a:
					case j.d:
					case j.h: {
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
			const wh = {};
			var Sh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case m.c:
						case j.f: {
							const {
								productId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case m.d: {
							const {
								product: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.id]: !1
							})
						}
						case m.a:
						case j.d:
						case j.g: {
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
				Th = Object(c.c)({
					error: Ih,
					pending: Sh
				}),
				Ch = Object(c.c)({
					fetch: _h,
					purchase: Th
				});
			var Ah = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case m.b:
						return t.payload.productId;
					case n.b:
						return null;
					default:
						return e
				}
			};
			const Ph = {};
			var Dh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ph,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case O.i:
						case m.g: {
							const {
								products: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				Rh = Object(c.c)({
					api: Ch,
					currentlyPurchasing: Ah,
					models: Dh
				});
			const kh = {};
			var Nh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oe.f:
					case oe.e:
					case oe.c:
					case oe.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case oe.d:
					case oe.a: {
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
			const Lh = {};
			var xh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.f:
						case oe.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case oe.e:
						case oe.d:
						case oe.b:
						case oe.a: {
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
				Mh = Object(c.c)({
					error: Nh,
					pending: xh
				});
			const Uh = {};
			var Fh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.e: {
							const {
								key: s,
								commentIds: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case oe.b: {
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
				Bh = s("./src/reddit/actions/comment/list.ts");
			const Gh = {};
			var qh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bh.a: {
						const {
							listingKey: s,
							listingName: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case Bh.b: {
						const {
							listingKey: s
						} = t.payload;
						return s in e ? In()(e, s) : e
					}
					default:
						return e
				}
			};
			const Kh = {};
			var Vh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oe.e: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: {}
						})
					}
					case oe.b: {
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
			const Hh = {};
			var Wh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.e:
						case oe.b: {
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
							}) : Object(Ds.a)(e, s)
						}
						default:
							return e
					}
				},
				Qh = Object(c.c)({
					api: Mh,
					endMarkers: qh,
					fetchedTokens: Vh,
					commentIds: Fh,
					loadMore: Wh
				}),
				Jh = s("./src/reddit/actions/pages/profileModSettings.ts");
			var zh = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jh.a:
							return !1;
						default:
							return e
					}
				},
				Xh = Object(c.c)({
					pending: zh
				}),
				Yh = Object(c.c)({
					api: Xh
				});
			const Zh = {};
			var $h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.c:
					case Je.b:
					case ze.c:
					case ze.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Je.a:
					case ze.a: {
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
			const em = {};
			var tm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Je.c:
						case ze.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Je.b:
						case Je.a:
						case ze.b:
						case ze.a: {
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
				sm = Object(c.c)({
					error: $h,
					pending: tm
				});
			const nm = {};
			var am = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: {}
						})
					}
					case ze.b: {
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
			const rm = {};
			var cm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.b:
					case ze.b: {
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
			const im = {};
			var om = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : im,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Je.b:
						case ze.b: {
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
							}) : Object(Ds.a)(e, s)
						}
						default:
							return e
					}
				},
				dm = Object(c.c)({
					api: sm,
					fetchedTokens: am,
					ids: cm,
					loadMore: om
				});
			const lm = {};
			var um = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.f:
					case Je.e: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case Je.d: {
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
			const bm = {};
			var gm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Je.f: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case Je.e:
						case Je.d: {
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
				pm = Object(c.c)({
					error: um,
					pending: gm
				});
			const Om = {};
			var fm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Om,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ge.c:
					case ge.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case ge.a: {
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
			const jm = {};
			var ym = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ge.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case ge.b:
						case ge.a: {
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
				hm = Object(c.c)({
					error: fm,
					pending: ym
				});
			const mm = {};
			var vm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Je.e:
						case ge.b:
						case ge.e:
							return Object.assign(Object.assign({}, e), t.payload.extraComments);
						default:
							return e
					}
				},
				_m = Object(c.c)({
					api: hm,
					models: vm
				}),
				Em = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				Im = s("./src/reddit/constants/comments.ts");
			const wm = {};

			function Sm(e) {
				const t = e;
				return js()(t, e => {
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
			const Tm = (e, t, s) => {
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
			var Cm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.e:
					case ge.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: a,
							profileName: r
						} = t.payload, c = Tm(a, s, n), i = {};
						for (const e of a) {
							i[Object(Em.a)(e, r)] = c.hasOwnProperty(e) ? Sm(c[e]) : {}
						}
						return Object.assign(Object.assign({}, e), i)
					}
					case ge.b: {
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
							d = Sm(Tm(c, s, a)[o]),
							l = Object(Em.a)(o, i),
							u = Object.assign({}, e[l]),
							b = u[r].prev,
							g = b && b.id || "",
							p = n[o].head,
							O = p && p.id || "",
							f = {
								id: O,
								type: Im.a.Comment
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
			const Am = {};
			var Pm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Am,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.e:
					case ge.e: {
						const {
							commentLists: s,
							postIds: n,
							profileName: a
						} = t.payload, r = {};
						for (const e of n) {
							r[Object(Em.a)(e, a)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return Object.assign(Object.assign({}, e), r)
					}
					default:
						return e
				}
			};
			const Dm = {};
			var Rm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Je.e:
						case ge.e: {
							const {
								postIds: s,
								profileName: n
							} = t.payload, a = {};
							for (const e of s) {
								a[Object(Em.a)(e, n)] = e
							}
							return Object.assign(Object.assign({}, e), a)
						}
						default:
							return e
					}
				},
				km = Object(c.c)({
					api: pm,
					extraComments: _m,
					keyToCommentThreadLinkSets: Cm,
					keyToHeadCommentId: Pm,
					keyToPostId: Rm
				}),
				Nm = Object(c.c)({
					chrono: dm,
					conversations: km
				});
			const Lm = {};
			var xm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const Mm = {};
			var Um = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case le.a:
					case le.d: {
						const {
							listingKey: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case le.b:
					case le.c:
					case le.i:
					case le.f:
					case le.e:
					case le.g: {
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
			const Fm = {};
			var Bm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case le.b:
						case le.f: {
							const {
								listingKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case le.a:
						case le.d:
						case le.c:
						case le.i:
						case le.e:
						case le.g: {
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
				Gm = Object(c.c)({
					error: Um,
					pending: Bm
				});
			const qm = {};
			var Km = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case le.c:
					case le.i:
					case le.e:
					case le.g: {
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
			const Vm = {};
			var Hm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case le.i:
						case le.c:
						case le.e:
						case le.g: {
							const {
								pageInfo: s,
								listingKey: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: s
							}) : Vm
						}
						default:
							return e
					}
				},
				Wm = Object(c.c)({
					api: Gm,
					ids: Km,
					pageInfo: Hm
				}),
				Qm = s("./src/reddit/constants/posts.ts");
			const Jm = {};
			var zm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ue.c:
					case Ze.c:
						return Object.assign(Object.assign({}, e), t.payload.profileAboutInfo);
					case EO.k: {
						const s = t.payload;
						return s.profile ? Object.assign(Object.assign({}, e), {
							[s.profile.id]: s.about
						}) : e
					}
					case SO.h: {
						const {
							identifiers: s,
							userIsSubscriber: n
						} = t.payload, a = s.filter(e => e.type === Qm.a.PROFILE);
						return a.length ? a.reduce((e, t) => (e[t.id] = Object.assign(Object.assign({}, e[t.id]), {
							userIsSubscriber: n
						}), e), Object.assign({}, e)) : e
					}
					case zu.n: {
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
			const Xm = {},
				Ym = (e, t) => {
					if (!t) return e;
					const s = Object.keys(t);
					if (!s.length) return e;
					const n = {};
					return s.forEach(s => {
						const a = e[s],
							r = Object.assign({}, t[s]);
						a && _n()(a, r) || (n[s] = r)
					}), Object.keys(n).length ? Object.assign(Object.assign({}, e), n) : e
				};
			var Zm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ke.b:
					case He.b:
					case ie.b:
					case ie.g:
					case oe.b:
					case oe.e:
					case le.c:
					case le.i:
					case le.e:
					case le.g:
					case Je.b:
					case Je.e:
					case de.e:
					case ze.b:
					case Ke.b:
					case We.e:
					case We.h:
					case Ve.u:
					case EO.h:
					case Cu.b:
					case Ze.c:
					case pe.i:
					case EO.m:
					case ge.b:
					case ge.e:
					case ue.c:
					case Qe.b:
					case Ba.e:
					case Cr.a:
					case be.c:
					case ie.k:
					case "RECOMMENDED_POSTS_LOADED":
					case SO.c:
						return Ym(e, t.payload.profiles);
					case Ze.e: {
						const {
							typeaheadSuggestions: s
						} = t.payload;
						return Object.keys(s).length ? Ym(e, s.profiles) : e
					}
					case ce.i:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v:
					case ce.k: {
						const {
							response: s
						} = t.payload, n = s && s.profiles;
						return Ym(e, n)
					}
					case EO.l:
					case EO.k: {
						const {
							profile: s
						} = t.payload;
						return s ? Ym(e, {
							[s.id]: s
						}) : e
					}
					case zu.n: {
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
					case zu.l:
					case zu.k: {
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
			const $m = {};
			var ev = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case EO.c:
						case EO.f: {
							const {
								profileName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[(s || "").toLowerCase()]: !0
							})
						}
						case EO.a:
						case EO.b:
						case EO.d:
						case EO.e: {
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
				tv = Object(c.c)({
					pending: ev
				});
			const sv = {};
			var nv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case EO.b: {
						const {
							profileName: s,
							data: n
						} = t.payload, a = n.map(e => e.id);
						return Object.assign(Object.assign({}, e), {
							[(s || "").toLowerCase()]: a
						})
					}
					case EO.e:
					case le.c:
					case le.i:
					case le.e:
					case le.g: {
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
			const av = {};
			var rv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : av,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case EO.e: {
							const {
								pageInfo: s,
								profileName: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s
							})
						}
						case le.c:
						case le.i: {
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
				cv = Object(c.c)({
					api: tv,
					models: nv,
					pageInfo: rv
				});
			const iv = {};
			var ov = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case EO.i: {
							const {
								profileName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !0
							})
						}
						case EO.g:
						case EO.h: {
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
				dv = Object(c.c)({
					pending: ov
				});
			const lv = {};
			var uv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case EO.h: {
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
				bv = Object(c.c)({
					api: dv,
					pageInfo: uv
				}),
				gv = s("./src/reddit/actions/pinnedPost.ts");
			const pv = {};
			var Ov = Object(ph.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gv.a: {
						const {
							pinned: s,
							profileId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case gv.d: {
						const {
							postId: s,
							profileId: n
						} = t.payload, a = e[n] || [];
						return Object.assign(Object.assign({}, e), {
							[n]: [...a, s].slice(-Ye.V)
						})
					}
					case gv.g: {
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
			}), pv);
			const fv = {};
			var jv = Object(ph.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gv.a: {
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
			}), fv);
			const yv = {};
			var hv = Object(ph.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gv.c:
						case gv.f: {
							const {
								postId: s,
								profileId: n
							} = t.payload, a = e[n] || [];
							return Object.assign(Object.assign({}, e), {
								[n]: [...a, s]
							})
						}
						case gv.b:
						case gv.e:
						case gv.d:
						case gv.g: {
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
				}), yv),
				mv = Object(c.c)({
					data: Ov,
					initialData: jv,
					pending: hv
				}),
				vv = s("./src/reddit/actions/trophyCase.ts");
			const _v = {};
			var Ev, Iv, wv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _v,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vv.a: {
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
				Sv = Object(c.c)({
					about: zm,
					models: Zm,
					moderated: cv,
					multireddits: bv,
					pinnedPosts: mv,
					trophyCases: wv
				});
			s("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Ev || (Ev = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Iv || (Iv = {}));
			var Tv, Cv, Av;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Tv || (Tv = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Cv || (Cv = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Av || (Av = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Tv || (Tv = {}));
			Object(Xe.a)("PROMO__SHOW_PROMO"), Object(Xe.a)("PROMO__HIDE_PROMO");
			const Pv = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pv,
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
				Rv = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const kv = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Rv.d,
					viewer_streams_refresh: Rv.c,
					viewer_streams_refresh_slop: Rv.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Nv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rv.w:
							return Object.assign(Object.assign({}, e), {
								isError: !1,
								isPending: !1,
								global: Object.assign({}, t.payload)
							});
						case Rv.x: {
							const s = t.payload.name.toLowerCase();
							return Object.assign(Object.assign({}, e), {
								isError: !1,
								isPending: !1,
								subreddits: Object.assign(Object.assign({}, e.subreddits), {
									[s]: Object.assign({}, t.payload.config)
								})
							})
						}
						case Rv.G:
							return Object.assign(Object.assign({}, e), {
								isPending: !0
							});
						case Rv.I:
							return Object.assign(Object.assign({}, e), {
								isError: !0,
								isPending: !1
							});
						case Rv.H:
							return Object.assign(Object.assign({}, e), {
								isPermanentlyCanceled: !0,
								isPending: !1
							});
						default:
							return e
					}
				},
				Lv = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			var xv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.L:
						return Object.assign(Object.assign({}, e), {
							[Rv.b]: t.payload.error
						});
					case Rv.M:
						return Object.assign(Object.assign({}, e), {
							[t.payload.streamId]: t.payload.error
						});
					case Rv.z: {
						const t = e,
							s = Rv.b;
						t[s];
						return Lv(t, ["symbol" == typeof s ? s : s + ""])
					}
					case Rv.y: {
						const s = e,
							n = t.payload.model.post.id;
						s[n];
						return Lv(s, ["symbol" == typeof n ? n : n + ""])
					}
					default:
						return e
				}
			};
			const Mv = (e, t, s, n) => Object.assign(Object.assign({}, e), {
				[t]: Object.assign(Object.assign(Object.assign({}, e[t]), {
					isPending: s
				}), n && {
					utcTimeStamp: n
				})
			});
			var Uv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.N:
						return Mv(e, t.payload, !0);
					case Rv.O:
						return Mv(e, Rv.b, !0);
					case Rv.y:
						return Mv(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Rv.z:
						return Mv(e, Rv.b, !1, t.payload.utcTimeStamp);
					case Rv.M:
						return Mv(e, t.payload.streamId, !1);
					case Rv.L:
						return Mv(e, Rv.b, !1);
					default:
						return e
				}
			};
			const Fv = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var Bv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rv.v:
							return Object.assign(Object.assign({}, e), {
								isError: !1,
								isPending: !1,
								subreddits: t.payload.subreddits
							});
						case Rv.J:
							return Object.assign(Object.assign({}, e), {
								isError: !1,
								isPending: !0
							});
						case Rv.K:
							return Object.assign(Object.assign({}, e), {
								isError: !0,
								isPending: !1
							});
						default:
							return e
					}
				},
				Gv = Object(c.c)({
					config: Nv,
					error: xv,
					pending: Uv,
					recommendedViewerSubreddits: Bv
				});
			const qv = {};
			var Kv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.r:
						return Object.assign(Object.assign({}, e), {
							[t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						});
					case Rv.F:
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
			const Vv = {
				cursor: Rv.W,
				timestamps: {},
				visitOrder: []
			};
			var Hv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.P:
						return Vv;
					case Rv.X: {
						const s = t.payload,
							n = e.visitOrder.includes(s) ? e.visitOrder : [...e.visitOrder, s],
							a = n.indexOf(s);
						return n === e.visitOrder && a === e.cursor ? e : Object.assign(Object.assign({}, e), {
							visitOrder: n,
							cursor: a
						})
					}
					case v.d:
						return Wv(e, t.payload.id);
					case Rv.E:
						return Wv(e, t.payload);
					case Hu.h: {
						const s = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Qv(e, s)
					}
					case Rv.V: {
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
			const Wv = (e, t) => {
					const s = e.visitOrder.indexOf(t);
					if (-1 === s) return e;
					const n = s > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return Object.assign(Object.assign({}, e), {
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: n
					})
				},
				Qv = (e, t) => {
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
				Jv = {
					ended: [],
					removed: []
				};

			function zv(e) {
				return [...new Set(e)]
			}
			var Xv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.t:
						return Object.assign(Object.assign({}, e), {
							ended: zv(e.ended.concat(t.payload))
						});
					case Rv.u:
						return Object.assign(Object.assign({}, e), {
							removed: zv(e.removed.concat(t.payload))
						});
					default:
						return e
				}
			};
			const Yv = {};
			var Zv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.z:
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
			const $v = {},
				e_ = (e, t) => {
					const s = Object.keys(e).reduce((t, s) => Object.assign(Object.assign({}, t), {
						[s]: Object.assign(Object.assign({}, e[s]), {
							rank: Rv.m
						})
					}), {});
					return t.reduce((e, t, s) => Object.assign(Object.assign({}, e), {
						[t.post.id]: Object.assign(Object.assign({}, t), {
							rank: Rv.l - s
						})
					}), s)
				},
				t_ = (e, t) => {
					const s = t.post.id,
						n = e[s] ? e[s].rank : Rv.m;
					return Object.assign(Object.assign({}, e), {
						[t.post.id]: Object.assign(Object.assign({}, t), {
							rank: n
						})
					})
				};
			var s_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.y:
						return t_(e, t.payload.model);
					case Rv.z:
						return e_(e, t.payload.models);
					case Rv.D: {
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
			const n_ = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var a_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.s:
						return Object.assign(Object.assign({}, e), {
							discoveryUnitThumbnails: Object.assign({}, t.payload.reduce((e, t) => Object.assign(Object.assign({}, e), {
								[t.postId]: t.imageUrl
							}), {}))
						});
					case Rv.A:
						return Object.assign(Object.assign({}, e), {
							streamPreviews: Object.assign(Object.assign({}, e.streamPreviews), t.payload.reduce((e, t) => Object.assign(Object.assign({}, e), {
								[t.postId]: t.imageUrl
							}), {}))
						});
					default:
						return e
				}
			};
			const r_ = {
				reported: []
			};
			var c_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case v.d:
						return Object.assign(Object.assign({}, e), {
							reported: [...e.reported, t.payload.id]
						});
					default:
						return e
				}
			};
			const i_ = {
				isIntroFinished: !1
			};
			var o_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.B:
						return Object.assign(Object.assign({}, e), t.payload);
					default:
						return e
				}
			};
			const d_ = {
				isMuted: !0,
				reportedStreams: [],
				shouldShowOnboardingModal: !0
			};
			var l_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rv.C:
							return Object.assign(Object.assign({}, e), t.payload);
						case v.d: {
							const s = t.payload.id;
							return e.reportedStreams.includes(s) ? e : Object.assign(Object.assign({}, e), {
								reportedStreams: [...e.reportedStreams, s]
							})
						}
						default:
							return e
					}
				},
				u_ = Object(c.c)({
					api: Gv,
					history: Hv,
					hlsStreams: Xv,
					listings: Zv,
					models: s_,
					preloads: a_,
					reports: c_,
					theaterSettings: o_,
					userSettings: l_,
					automuteLevels: Kv
				});
			const b_ = {};
			var g_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "RECOMMENDED_POSTS_LOADED":
							return Object.assign(Object.assign({}, e), t.payload);
						case "RECOMMENDED_POSTS_FAILED":
						default:
							return e
					}
				},
				p_ = s("./src/reddit/actions/removalReasons/constants.ts");
			var O_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p_.k:
					case p_.l:
					case p_.b:
					case p_.c:
					case p_.h:
					case p_.i:
					case p_.e:
					case p_.f:
						return null;
					case p_.j:
					case p_.a:
					case p_.g:
					case p_.d:
						return t.payload;
					default:
						return e
				}
			};
			var f_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case p_.k:
						case p_.b:
						case p_.h:
						case p_.e:
							return !0;
						case p_.l:
						case p_.j:
						case p_.c:
						case p_.a:
						case p_.i:
						case p_.g:
						case p_.f:
						case p_.d:
							return !1;
						default:
							return e
					}
				},
				j_ = Object(c.c)({
					error: O_,
					pending: f_
				}),
				y_ = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const h_ = {};
			var m_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p_.l: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return Object.assign(Object.assign({}, e), n)
					}
					case p_.c:
					case p_.i: {
						const {
							reason: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.id]: s
						})
					}
					case p_.f: {
						const {
							reasonId: s
						} = t.payload, n = e, a = s;
						n[a];
						return y_(n, ["symbol" == typeof a ? a : a + ""])
					}
					default:
						return e
				}
			};
			const v_ = {};
			var __ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p_.l: {
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
					case p_.c: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: [...e[s], n.id]
						})
					}
					case p_.f: {
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
			var E_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case p_.t: {
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
				I_ = Object(c.c)({
					api: j_,
					models: m_,
					reasonOrder: __,
					removedItemIds: E_
				});
			const w_ = {};
			var S_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case v.e:
					case v.d: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !1
						})
					}
					case v.c: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case v.f: {
						const s = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[s]: !1
						}) : e
					}
					default:
						return e
				}
			};
			const T_ = {};
			var C_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case v.e: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case v.d:
					case v.c: {
						const {
							id: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !1
						})
					}
					case v.f: {
						const s = t.payload;
						return s ? Object.assign(Object.assign({}, e), {
							[s]: !1
						}) : e
					}
					default:
						return e
				}
			};
			const A_ = {};
			var P_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case v.d: {
							const {
								id: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case v.e:
						case v.c: {
							const {
								id: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case v.f: {
							const s = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[s]: !1
							}) : e
						}
						default:
							return e
					}
				},
				D_ = Object(c.c)({
					error: S_,
					pending: C_,
					success: P_
				});
			var R_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case v.a:
						return t.payload;
					case n.c:
						return !t.payload && e;
					case y.a:
						return !1;
					case v.f:
						return !!t.payload && e;
					default:
						return e
				}
			};
			var k_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case v.f:
						return t.payload;
					case n.c:
						return t.payload ? null : e;
					case y.a:
						return null;
					default:
						return e
				}
			};
			var N_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case v.g:
						return t.payload;
					case v.f:
						return !1;
					default:
						return e
				}
			};
			var L_ = Object(c.c)({
					api: D_,
					openedFromModalPage: R_,
					postOrCommentId: k_,
					userIsMod: N_,
					rulesCategory: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case v.b:
								return t.payload
						}
						return e
					}
				}),
				x_ = s("./src/reddit/actions/pages/report/constants.ts");
			var M_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case x_.a:
						return t.payload;
					default:
						return e
				}
			};
			var U_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case x_.b:
						return t.payload;
					case x_.c:
					case x_.d:
						return !1;
					default:
						return e
				}
			};
			var F_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case x_.d:
						return !0;
					case x_.c:
					case x_.b:
						return !1;
					default:
						return e
				}
			};
			var B_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x_.c:
							return !0;
						case x_.b:
						case x_.d:
							return !1;
						default:
							return e
					}
				},
				G_ = Object(c.c)({
					error: U_,
					pending: F_,
					success: B_
				}),
				q_ = s("./src/reddit/actions/reportPageRules/constants.ts");
			const K_ = [];
			var V_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case q_.a:
							return t.payload;
						default:
							return e
					}
				},
				H_ = Object(c.c)({
					reportPageApi: G_,
					reportPageRules: V_,
					initialReason: M_
				}),
				W_ = s("./src/reddit/actions/reportRules.ts");
			const Q_ = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var J_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W_.b:
						return Object.assign(Object.assign({}, e), {
							sitewideRules: t.payload
						});
					case W_.a:
						return Object.assign(Object.assign({}, e), {
							liveStreamingRules: t.payload
						});
					default:
						return e
				}
			};
			Object(Xe.a)("REQUEST_HOST_SET");
			var z_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const X_ = "RUN_TIME_ENV_VARS__IS_STAGING",
				Y_ = (Object(Xe.a)(X_), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var Z_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X_:
						return Object.assign(Object.assign({}, e), {
							staging: !0
						});
					default:
						return e
				}
			};
			const $_ = Object.create(null);
			var eE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Ze.d: {
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
			var tE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ue.c:
					case Ze.f: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const sE = Object.create(null);
			var nE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Ze.e: {
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
				aE = s("./src/reddit/models/Search/index.ts");
			const rE = {};
			var cE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e: {
							const {
								typeaheadSuggestions: s
							} = t.payload, n = {};
							return Object.keys(s).forEach(e => {
								const t = s[e];
								return n[e] = Object(aE.d)(t)
							}), Object.assign(Object.assign({}, e), n)
						}
						default:
							return e
					}
				},
				iE = Object(c.c)({
					idsByQuery: nE,
					models: cE
				});
			const oE = {};
			var dE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ue.c: {
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
				lE = Object(c.c)({
					relatedQueries: eE,
					searchQuery: tE,
					typeahead: iE,
					viewTreatment: dE
				}),
				uE = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const bE = {};
			var gE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ue.c: {
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
						if (d === uE.c.Trending || s) {
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
			const pE = {};
			var OE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ue.c: {
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
			const fE = {};
			var jE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ue.c: {
							const {
								key: s,
								searchDiscoveryUnitOrder: n
							} = t.payload;
							return n ? Object.assign(Object.assign({}, e), {
								[s]: n
							}) : fE
						}
						default:
							return e
					}
				},
				yE = Object(c.c)({
					headerContent: gE,
					models: OE,
					order: jE
				});
			Object(Xe.a)("SEO__CRAWLER_RECEIVED");
			var hE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				mE = s("./src/reddit/actions/seo/linksModule.ts");
			const vE = {};
			var _E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mE.a:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? Object.assign(Object.assign({}, e), {
								frontpage: t.payload
							}) : e;
						case mE.b:
							return t.payload && t.payload.id && t.payload.data ? Object.assign(Object.assign({}, e), {
								subreddits: Object.assign(Object.assign({}, e.subreddits), {
									[t.payload.id]: t.payload.data
								})
							}) : e;
						default:
							return e
					}
				},
				EE = Object(c.c)({
					crawler: hE,
					linksModule: _E
				}),
				IE = s("./src/reddit/actions/shortcuts/constants.ts");
			var wE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case IE.a:
						return t.payload;
					case y.a:
						return null;
					default:
						return e
				}
			};
			var SE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case IE.b:
							return t.payload || null;
						default:
							return e
					}
				},
				TE = s("./src/reddit/constants/history.ts"),
				CE = s("./src/reddit/constants/shortcuts.ts"),
				AE = s("./src/reddit/helpers/history/index.ts");
			const PE = CE.d.Global,
				DE = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(AE.b)(TE.a.IsOverlay) ? CE.d.Lightbox : CE.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(AE.b)(TE.a.IsOverlay) ? CE.d.Lightbox : PE;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return CE.d.Listing;
						case "modQueuePages":
							return CE.d.Modqueue;
						default:
							return PE
					}
				};
			var RE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a:
							const s = t.payload;
							if (s.routeMatch) {
								const e = s.routeMatch.route.meta;
								return DE(e)
							}
							return PE;
						default:
							return e
					}
				},
				kE = Object(c.c)({
					activeCommentId: wE,
					activePostId: SE,
					namespace: RE
				});
			var NE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (e) return e;
					switch (t.type) {
						case w.p:
						case w.q:
							return !0;
						default:
							return e
					}
				},
				LE = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				xE = Object(c.c)({
					firstFetch: NE,
					models: LE.b
				}),
				ME = s("./src/reddit/actions/streaming/modSettings.ts");
			var UE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ME.b:
					case ME.c:
						return null;
					case ME.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var FE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ME.b:
							return !0;
						case ME.c:
						case ME.a:
							return !1;
						default:
							return e
					}
				},
				BE = Object(c.c)({
					error: UE,
					pending: FE
				}),
				GE = s("./src/reddit/actions/streaming/constants.ts");
			const qE = {};
			var KE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case GE.a: {
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
				VE = Object(c.c)({
					api: BE,
					modSettings: KE
				}),
				HE = s("./src/reddit/models/StructuredStyles/index.ts");
			const WE = {};
			var QE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.h:
						case _.b:
						case _.d:
							return t.payload.styles;
						case _.e:
							return WE;
						case _.c: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						case _.k: {
							const e = t.payload;
							return Object(HE.h)(e.styles)
						}
						default:
							return e
					}
				},
				JE = s("./src/reddit/actions/exportImportStyles.ts");
			var zE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case JE.c:
					case JE.b:
						return null;
					case JE.a:
						return t.payload;
					default:
						return e
				}
			};
			var XE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case JE.c:
							return !0;
						case JE.b:
						case JE.a:
							return !1;
						default:
							return e
					}
				},
				YE = Object(c.c)({
					error: zE,
					pending: XE
				}),
				ZE = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				$E = s("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const eI = {};
			var tI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.c:
						case He.b:
						case ie.b:
						case ue.c:
						case Ze.c:
						case Qe.b:
						case Cr.a: {
							const {
								payload: s
							} = t;
							if (!s.structuredStyles || !s.structuredStyles.data) return e;
							const n = s.structuredStyles.data.flairTemplate;
							return Object.assign(Object.assign({}, e), n)
						}
						case ZE.b: {
							const {
								flairId: s,
								template: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case ZE.a: {
							const {
								flairId: s
							} = t.payload;
							return Object(Ds.a)(e, s)
						}
						case Zf.b: {
							const {
								templateId: s
							} = t.payload;
							return Object(Ds.a)(e, s)
						}
						case _.k:
							return eI;
						case $E.b: {
							const {
								templates: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				sI = Object(c.c)({
					models: tI
				});
			const nI = {};
			var aI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.f: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.imageKey]: s.uploadId
						})
					}
					case _.k:
					case _.e:
						return nI;
					default:
						return e
				}
			};
			var rI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.n:
					case _.e:
						return !1;
					case _.a:
						return !0;
					default:
						return e
				}
			};
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var cI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.d:
						return t.payload.subredditId;
					case _.e:
						return null;
					case y.a:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case zu.f:
						return null;
					default:
						return e
				}
			};
			const iI = {};
			var oI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.c:
						case He.b:
						case ie.b:
						case Qe.b:
						case Cr.a: {
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
						case Ze.c:
						case ue.c: {
							const {
								payload: s
							} = t;
							if (!s.structuredStyles || !s.structuredStyles.data) return e;
							if (!s.subredditName) return e;
							let n;
							if (ti()(s.subreddits, (e, t) => {
									if (e.name.toLowerCase() === s.subredditName.toLowerCase()) return n = t, !1
								}), !n) return e;
							const a = s.structuredStyles.data.style;
							return Object.assign(Object.assign({}, e), {
								[n]: a
							})
						}
						case _.m: {
							const s = t.payload,
								n = e[s.subredditId];
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: Object.assign(Object.assign({}, n), s.styles)
							})
						}
						case _.h: {
							const s = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: s.styles
							})
						}
						case _.k: {
							const s = t.payload,
								n = Object(HE.h)(s.styles);
							return Object.assign(Object.assign({}, e), {
								[s.subredditId]: n
							})
						}
						case EO.k: {
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
						case zu.l: {
							const s = t.payload;
							if ("profileBanner" === s.key) {
								return Kj(e, {
									[s.subredditId]: {
										bannerBackgroundImage: s.imageUrl
									}
								})
							}
							return e
						}
						case zu.k: {
							const s = t.payload;
							if ("profileBanner" === s.key) {
								return Kj(e, {
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
				dI = Object(c.c)({
					draft: QE,
					exportStyles: YE,
					flairTemplate: sI,
					imagePreviews: aI,
					isBladeEditorDirty: rI,
					isEditing: cI,
					models: oI
				});
			Object(Xe.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var lI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				uI = s("./src/reddit/actions/subredditAutocomplete.ts");
			const bI = {};
			var gI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case uI.c:
					case uI.b: {
						const {
							key: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: null
						})
					}
					case uI.a: {
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
			const pI = {};
			var OI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case uI.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case uI.b:
						case uI.a: {
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
				fI = Object(c.c)({
					error: gI,
					pending: OI
				});
			const jI = {};
			var yI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case uI.b: {
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
				hI = Object(c.c)({
					api: fI,
					models: yI
				});
			const mI = {};
			var vI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Es.c: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case Es.a:
					case Es.d: {
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
			const _I = {};
			var EI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _I,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Es.d: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: !0
						})
					}
					case Es.a:
					case Es.c: {
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
			const II = {};
			var wI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : II,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Es.d: {
							const {
								subredditId: s
							} = t.payload;
							return e[s] ? e : Object.assign(Object.assign({}, e), {
								[s]: !1
							})
						}
						case Es.a: {
							const {
								subredditId: s,
								isSubredditWhitelisted: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						case Es.c: {
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
				SI = Object(c.c)({
					error: vI,
					pending: EI,
					whitelist: wI
				}),
				TI = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
					}
					return s
				};
			const CI = {};
			var AI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Es.a:
						return Object.assign(Object.assign({}, e), t.payload.collection);
					case Es.e: {
						const {
							channel: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.channelId]: Object.assign({}, s)
						})
					}
					case Es.f: {
						const {
							channel: s,
							editedSubredditChannelData: n
						} = t.payload;
						return s.name = n.room, s.description = n.description, s.minimumAcctAge = s.minimumAcctAge, s.newMemberAge = s.newMemberAge, Object.assign(Object.assign({}, e), {
							[s.channelId]: Object.assign({}, s)
						})
					}
					case Es.g: {
						const s = e,
							n = t.payload;
						s[n];
						return TI(s, ["symbol" == typeof n ? n : n + ""])
					}
					default:
						return e
				}
			};
			var PI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Es.h:
							return t.payload.channelId;
						case Es.g:
							return e === t.payload ? null : e;
						default:
							return e
					}
				},
				DI = Object(c.c)({
					api: SI,
					models: AI,
					selected: PI
				}),
				RI = s("./src/reddit/actions/category/constants.ts"),
				kI = s("./src/reddit/actions/subredditMention/constants.ts");
			const NI = {};
			var LI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kI.d:
					case He.b:
					case ie.b:
					case ue.c:
					case be.a:
					case be.c:
					case Qe.b:
					case Cr.a:
					case oe.b:
					case oe.e:
					case Je.b:
					case Je.a:
					case Je.e:
					case Je.d:
					case de.e:
					case ge.b:
					case ge.e:
					case Ze.c:
					case Au.e: {
						const s = t.payload.subredditAboutInfo;
						if (!s) return e;
						const n = Object.keys(s);
						return 0 === n.length ? e : n.reduce((e, t) => (s[t] && (e[t] ? e[t] = Object.assign(Object.assign({}, e[t]), s[t]) : e[t] = s[t]), e), Object.assign({}, e))
					}
					case Di.a: {
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
					case SO.h: {
						const {
							identifiers: s,
							userIsSubscriber: n
						} = t.payload, a = s.filter(e => e.type === Qm.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(K.setIn)(e, [t.id, "userIsSubscriber"], n), e) : e
					}
					case Vo.g:
					case RI.f:
					case ku.e:
					case ku.m: {
						const {
							subredditsAboutInfo: s
						} = t.payload;
						if (!s) return e;
						const n = Object.keys(s);
						return 0 === n.length ? e : n.reduce((e, t) => (s[t] && (e[t] = e[t] ? Object.assign(Object.assign({}, e[t]), s[t]) : s[t]), e), Object.assign({}, e))
					}
					case Di.b: {
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
					case pe.c: {
						const {
							data: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case ve.t: {
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
			const xI = {};
			var MI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pe.b:
					case pe.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: null
						})
					}
					case pe.a: {
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
			var UI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pe.b:
							return !0;
						case pe.c:
						case pe.a:
							return !1;
						default:
							return e
					}
				},
				FI = Object(c.c)({
					error: MI,
					pending: UI
				}),
				BI = s("./src/reddit/actions/subredditCreation.ts");
			const GI = {
				apiError: null
			};
			var qI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case BI.b: {
						const {
							error: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							apiError: s
						})
					}
					case BI.a:
					case BI.c:
					case BI.d:
						return GI;
					default:
						return e
				}
			};
			var KI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case BI.d: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case BI.c:
					case BI.b:
						return null;
					default:
						return e
				}
			};
			var VI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case BI.c:
							return !0;
						case BI.d:
						case BI.b:
							return !1;
						default:
							return e
					}
				},
				HI = Object(c.c)({
					error: qI,
					lastCreatedSubredditId: KI,
					pending: VI
				});
			var WI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ku.r:
							return !0;
						case ku.s:
						case ku.q:
							return !1;
						default:
							return e
					}
				},
				QI = Object(c.c)({
					pending: WI
				});
			const JI = {};
			var zI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pe.l:
					case pe.m: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: null
						})
					}
					case pe.k: {
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
			const XI = {};
			var YI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pe.l: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !0
							})
						}
						case pe.m:
						case pe.k: {
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
				ZI = Object(c.c)({
					error: zI,
					pending: YI
				});
			const $I = {};
			var ew = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $I,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ku.d:
						case ku.e:
							return Object.assign(Object.assign({}, e), {
								[t.payload.key]: !1
							});
						case ku.f:
							return Object.assign(Object.assign({}, e), {
								[t.payload.key]: !0
							});
						default:
							return e
					}
				},
				tw = Object(c.c)({
					pending: ew
				});
			var sw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.X:
						return t.payload || null;
					case ve.Z:
					case ve.Y:
						return null;
					default:
						return e
				}
			};
			var nw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.Z:
							return !0;
						case ve.Y:
						case ve.X:
							return !1;
						default:
							return e
					}
				},
				aw = Object(c.c)({
					error: sw,
					pending: nw
				});
			var rw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ku.i: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case ku.k:
					case ku.j:
						return null;
					default:
						return e
				}
			};
			var cw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ku.k:
							return !0;
						case ku.j:
						case ku.i:
							return !1;
						default:
							return e
					}
				},
				iw = Object(c.c)({
					error: rw,
					pending: cw
				}),
				ow = s("./src/reddit/actions/subredditRules/constants.ts");
			var dw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ow.c:
							return !0;
						case ow.a:
						case ow.b:
							return !1;
						default:
							return e
					}
				},
				lw = s("./src/reddit/actions/subredditSettings.ts");
			var uw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lw.e:
							return !0;
						case lw.f:
						case lw.d:
							return !1;
						default:
							return e
					}
				},
				bw = Object(c.c)({
					pending: uw
				});
			const gw = {};
			var pw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ku.l:
						case ku.m:
							return Object.assign(Object.assign({}, e), {
								[t.payload.key]: !1
							});
						case ku.n:
							return Object.assign(Object.assign({}, e), {
								[t.payload.key]: !0
							});
						default:
							return e
					}
				},
				Ow = Object(c.c)({
					pending: pw
				}),
				fw = s("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const jw = {};
			var yw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fw.c:
					case fw.b: {
						const s = t.payload,
							{
								subredditName: n
							} = s.options;
						return Object.assign(Object.assign({}, e), {
							[n.toLowerCase()]: null
						})
					}
					case fw.a: {
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
			const hw = {};
			var mw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fw.c: {
							const s = t.payload,
								{
									subredditName: n
								} = s.options;
							return Object.assign(Object.assign({}, e), {
								[n.toLowerCase()]: !0
							})
						}
						case fw.b:
						case fw.a: {
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
				vw = Object(c.c)({
					error: yw,
					pending: mw
				});
			const _w = {};
			var Ew = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _w,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fj.c:
					case Fj.b: {
						const {
							subredditName: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: null
						})
					}
					case Fj.a: {
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
			const Iw = {};
			var ww = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fj.c: {
							const {
								subredditName: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s.toLowerCase()]: !0
							})
						}
						case Fj.b:
						case Fj.a: {
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
				Sw = Object(c.c)({
					error: Ew,
					pending: ww
				}),
				Tw = Object(c.c)({
					about: FI,
					create: HI,
					inlineEditing: QI,
					models: ZI,
					onboarding: tw,
					productOffers: aw,
					rankings: iw,
					rules: dw,
					settings: bw,
					similar: Ow,
					topContent: Sw,
					wiki: vw
				}),
				Cw = s("./node_modules/lodash/isNil.js"),
				Aw = s.n(Cw);
			const Pw = {};
			var Dw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pe.d: {
							const {
								subredditId: s,
								forceState: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Aw()(n) ? !e[s] : n
							})
						}
						default:
							return e
					}
				},
				Rw = Object(c.c)({
					meta: Dw
				});
			const kw = {};
			var Nw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case RI.f: {
						const {
							categoryId: s,
							subredditIds: n
						} = t.payload;
						return Yc()(n) ? e : Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Lw = {};
			var xw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.c: {
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
				Mw = s("./src/reddit/actions/subredditCrosspostable.ts");
			var Uw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mw.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Mw.c:
					case Mw.b:
						return null;
					default:
						return e
				}
			};
			var Fw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mw.c:
							return !0;
						case Mw.b:
						case Mw.a:
							return !1;
						default:
							return e
					}
				},
				Bw = Object(c.c)({
					errors: Uw,
					pending: Fw
				});
			const Gw = {};
			var qw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mw.b: {
							const {
								subredditIds: s
							} = t.payload;
							return _n()(e, s) ? e : s
						}
						default:
							return e
					}
				},
				Kw = Object(c.c)({
					api: Bw,
					ids: qw
				});
			const Vw = {};
			var Hw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wj.a: {
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
							return Kj(c, {
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
				Ww = Object(c.c)({
					models: Hw
				});
			const Qw = {};
			var Jw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.a: {
						const {
							assets: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case j.g:
					case j.j: {
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
			const zw = {};
			var Xw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.a: {
						const {
							subredditId: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: t.payload
						})
					}
					case O.i: {
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
			const Yw = {};
			var Zw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.a: {
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
			const $w = {};
			var eS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $w,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.a: {
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
			const tS = {};
			var sS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.p: {
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
				nS = Object(c.c)({
					assets: Jw,
					communityRaw: Xw,
					distributions: Zw,
					meta: eS,
					releaseNotes: sS
				}),
				aS = s("./node_modules/lodash/isEqualWith.js"),
				rS = s.n(aS),
				cS = s("./src/lib/forceHttps/index.ts");
			const iS = {},
				oS = (e, t) => {
					const s = Object.keys(t);
					return s.length ? s.reduce((s, n) => {
						const a = e[n],
							r = t[n],
							c = a ? Object.assign(Object.assign({}, a), r) : Object.assign({}, r);
						return r.icon.url ? c.icon.url = Object(cS.a)(r.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(K.set)(s, n, c)
					}, e) : e
				},
				dS = (e, t) => {
					return !rS()(e, t, (e, t, s) => {
						if ("subscribers" === s) return !0
					})
				},
				lS = (e, t) => {
					if (!t) return e;
					const s = Object.keys(t);
					if (!s.length) return e;
					const n = {};
					for (let a = 0; a < s.length; a++) {
						const r = s[a],
							c = e[r],
							i = t[r];
						c && !dS(c, i) || (n[r] = i)
					}
					return Object.keys(n).length ? Object.assign(Object.assign({}, e), n) : e
				};
			var uS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.c:
						return oS(e, t.payload.subreddits || {});
					case kI.d:
					case RI.f:
					case Ke.b:
					case Vo.g:
					case Ru.b:
					case We.e:
					case We.h:
					case ce.k:
					case Ve.r:
					case Ve.u:
					case EO.h:
					case Cu.b:
					case He.b:
					case ie.b:
					case ie.g:
					case ie.k:
					case oe.b:
					case oe.e:
					case le.c:
					case le.i:
					case le.e:
					case le.g:
					case Je.b:
					case Je.e:
					case de.b:
					case de.e:
					case EO.e:
					case ue.c:
					case be.c:
					case Qe.b:
					case Ba.e:
					case Cr.a:
					case EO.m:
					case ge.b:
					case ge.e:
					case ze.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ze.c:
					case pe.c:
					case pe.f:
					case pe.i:
					case ku.a:
					case ku.e:
					case ku.m:
					case Au.e:
					case Au.b:
						return lS(e, t.payload.subreddits || {});
					case ce.f:
					case ce.i:
					case ce.m:
					case ce.p:
					case ce.v: {
						const {
							response: s
						} = t.payload, {
							subreddits: n
						} = s;
						return lS(e, n)
					}
					case Ze.e: {
						const {
							typeaheadSuggestions: s
						} = t.payload;
						return lS(e, s.subreddits || {})
					}
					case Ve.B: {
						const {
							subreddits: s
						} = t.payload;
						return Object.assign(Object.assign({}, s), e)
					}
					case O.g: {
						const s = t.payload;
						return lS(e, s)
					}
					case _.m: {
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
					case lw.f: {
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
			var bS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pe.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case pe.g:
					case pe.f:
						return null;
					default:
						return e
				}
			};
			var gS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pe.g:
					case pe.f:
						return !0;
					case pe.e:
						return !1;
					default:
						return e
				}
			};
			var pS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pe.g:
							return !0;
						case pe.f:
						case pe.e:
							return !1;
						default:
							return e
					}
				},
				OS = Object(c.c)({
					errors: bS,
					fetched: gS,
					pending: pS
				});
			var fS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pe.f: {
							const {
								subreddits: e
							} = t.payload, s = Object.keys(e);
							return s.sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), s
						}
						default:
							return e
					}
				},
				jS = Object(c.c)({
					api: OS,
					order: fS
				});
			const yS = {};
			var hS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lw.a: {
						const s = t.payload;
						return Object(K.merge)(e, s)
					}
					case lw.b: {
						const {
							subredditId: s,
							notificationSettings: n
						} = t.payload;
						return Object(K.merge)(e, {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const mS = {};
			var vS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ku.e: {
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
			const _S = {};
			var ES = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.kb: {
						const {
							recentSupporters: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case ve.T:
					case ve.W: {
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
									name: Object(fe.e)(a),
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
			const IS = {};
			var wS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var s;
				switch (t.type) {
					case ve.lb:
					case ve.kb: {
						const {
							powerups: s,
							subredditId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case ve.T:
					case ve.W: {
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
			const SS = {},
				TS = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var CS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.kb: {
							const {
								topSupporters: s,
								subredditId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n]: s.sort(TS)
							})
						}
						case ve.T:
						case ve.W: {
							const {
								subredditId: s,
								powerupsCount: n,
								user: a,
								isAnonymous: r
							} = t.payload;
							if (!e[s] && n < 0) return e;
							let c = !1;
							const i = e[s].map(e => {
								var t;
								return r && !e.supporterInfo || !r && (null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.id) === a.id ? (c = !0, Object.assign(Object.assign({}, e), {
									lastSupportedAt: n > 0 ? (new Date).toString() : e.lastSupportedAt,
									score: e.score + n
								})) : e
							});
							if (c) return Object.assign(Object.assign({}, e), {
								[s]: i.sort(TS)
							});
							if (n > 0) {
								const t = {
									score: n,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: r ? null : {
										id: a.id,
										name: Object(fe.e)(a),
										icon: {
											url: a.accountIcon
										},
										profile: {
											isNsfw: a.isNSFW
										}
									}
								};
								return Object.assign(Object.assign({}, e), {
									[s]: [t, ...e[s]].sort(TS)
								})
							}
							return e
						}
						default:
							return e
					}
				},
				AS = s("./src/lib/makeProductOfferKey/index.ts");
			const PS = {};
			var DS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.Y:
					case ve.kb: {
						const {
							subredditId: s,
							productOffers: n
						} = t.payload;
						if (!n || 0 === n.length) return e;
						const a = n.reduce((e, t) => {
							const n = Object(AS.a)(s, t.type);
							return e[n] = e[n] ? [...e[n], t] : [t], e
						}, {});
						return Object.assign(Object.assign({}, e), a)
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
						case m.g: {
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
				NS = s("./src/reddit/actions/subreddit/questions.ts");
			const LS = ["CommunityProgressShareButton", "CommunityProgressUrlButton"],
				xS = {};
			var MS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case NS.b: {
						const {
							id: s,
							progressModule: n
						} = t.payload;
						if (!n) return e;
						const a = n.cards.filter(e => {
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
								return LS.includes(t)
							})
						});
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								cards: a
							})
						})
					}
					case NS.a: {
						const {
							subredditId: s,
							cardId: n
						} = t.payload;
						return Object(K.updateIn)(e, [s, "cards"], e => e.filter(e => e.id !== n))
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
					case NS.b: {
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
			const BS = {};
			var GS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ku.b: {
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
			const qS = {};
			var KS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ku.c: {
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
			const VS = {};
			var HS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ow.b: {
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
					case ow.e: {
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
					case ow.f: {
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
					case ow.g:
					case ow.d: {
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
			const WS = {};
			var QS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lw.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case lw.f: {
						const s = t.payload.settings,
							n = e[s.subredditId] || {};
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: Object.assign(Object.assign({}, n), s)
						})
					}
					case zu.n: {
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
			const JS = {};
			var zS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ku.m: {
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
			const XS = {};
			var YS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case NS.b: {
						const {
							id: s,
							survey: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case NS.c: {
						const {
							id: s,
							response: n
						} = t.payload, a = Object(K.setIn)(e, [s, "response"], n);
						return Object(K.setIn)(a, [s, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const ZS = {};
			var $S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vo.g: {
						const {
							subredditTopContent: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s.subredditTopContent)
					}
					case Fj.b: {
						const {
							subredditTopContent: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					default:
						return e
				}
			};
			const eT = [];
			var tT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ie.g:
					case be.c: {
						const {
							trendingSubredditIds: s
						} = t.payload;
						return s && s.length ? s : e
					}
					default:
						return e
				}
			};
			const sT = {};
			var nT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kI.d:
							const {
								unavailableSubreddits: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s);
						default:
							return e
					}
				},
				aT = Object(c.c)({
					about: LI,
					api: Tw,
					appliedFilters: Rw,
					byCategory: Nw,
					communityInfo: xw,
					crosspostable: Kw,
					duplicates: Ww,
					gov: nS,
					models: uS,
					moderated: jS,
					notificationSettings: hS,
					onboarding: vS,
					powerupRecentSupporters: ES,
					powerups: wS,
					powerupTopSupporters: CS,
					productOffers: DS,
					products: kS,
					progressModule: MS,
					questions: FS,
					rankings: GS,
					rankingsPageInfo: KS,
					rules: HS,
					settings: QS,
					similar: zS,
					survey: YS,
					topContent: $S,
					trending: tT,
					unavailableModels: nT
				});
			const rT = {};
			var cT = Object(ph.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.c: {
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
							return Ue()(Object.assign({}, e), a)
						}
						case Hu.k: {
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
				}), rT),
				iT = Object(c.c)({
					data: cT
				});
			const oT = [];
			var dT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.d: {
						const {
							makeFavorite: s,
							multiredditsModelsState: n,
							multiredditPath: a
						} = t.payload;
						if (s) {
							const t = [...e],
								s = _O(t, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(s, 0, a), t
						}
						return e.filter(e => e !== a)
					}
					case Ve.u: {
						const {
							multireddits: e
						} = t.payload;
						return ba()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case SO.e: {
						const {
							follow: s,
							multiredditPath: n
						} = t.payload;
						return s ? e : e.filter(e => e !== n)
					}
					case Ve.j: {
						const s = t.payload;
						return e.filter(e => e !== s)
					}
					default:
						return e
				}
			};
			var lT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case SO.b:
					case SO.c:
						return null;
					default:
						return e
				}
			};
			var uT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.b:
					case SO.c:
						return !0;
					case SO.a:
						return !1;
					default:
						return e
				}
			};
			var bT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SO.b:
							return !0;
						case SO.c:
						case SO.a:
							return !1;
						default:
							return e
					}
				},
				gT = Object(c.c)({
					errors: lT,
					fetched: uT,
					pending: bT
				});
			const pT = [];
			var OT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.c: {
						const {
							profiles: e,
							favoriteProfileIds: s,
							favoriteSubredditIds: n
						} = t.payload;
						let a;
						return (a = s && s.length ? s : n ? n.filter(t => !!e[t]) : []).sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), a
					}
					case SO.f: {
						const {
							makeFavorite: s,
							identifier: n,
							profileModels: a
						} = t.payload, {
							id: r,
							type: c
						} = n;
						if (c !== Qm.a.PROFILE) return e;
						const i = e ? e.slice() : [];
						if (s) {
							const e = _O(i, r, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							i.splice(e, 0, r)
						} else {
							const e = i.indexOf(r);
							i.splice(e, 1)
						}
						return i
					}
					case SO.h: {
						const {
							identifiers: s,
							userIsSubscriber: n
						} = t.payload, a = s.filter(t => t.type === Qm.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || n ? e : a.reduce((e, t) => {
							const s = e.indexOf(t.id);
							return e.splice(s, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const fT = [];
			var jT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: s
						} = t.payload, n = s ? s.filter(t => !!e[t]) : [];
						return n.sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), n
					}
					case SO.f: {
						const {
							makeFavorite: s,
							identifier: n,
							subredditModels: a
						} = t.payload, {
							id: r,
							type: c
						} = n;
						if (c !== Qm.a.SUBREDDIT) return e;
						const i = e ? e.slice() : [];
						if (s) {
							const e = _O(i, r, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							i.splice(e, 0, r)
						} else {
							const e = i.indexOf(r);
							i.splice(e, 1)
						}
						return i
					}
					case SO.h: {
						const {
							identifiers: s,
							userIsSubscriber: n
						} = t.payload, a = s.filter(t => t.type === Qm.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || n ? e : a.reduce((e, t) => {
							const s = e.indexOf(t.id);
							return e.splice(s, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const yT = [],
				hT = e => (t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1;
			var mT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ve.u: {
							const {
								multireddits: s
							} = t.payload, n = ba()(s).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(hT(s));
							return _n()(e, n) ? e : n
						}
						case ie.k: {
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
								o = vO()(e, c).sort(hT(i));
							return _n()(e, o) ? e : o
						}
						case SO.e: {
							const {
								follow: s,
								multiredditPath: n,
								multiredditsModelsState: a
							} = t.payload;
							return s ? [...e, n].sort(hT(a)) : e.filter(e => e !== n)
						}
						case Ve.j: {
							const s = t.payload;
							return e.filter(e => e !== s)
						}
						case Ve.g:
						case Ve.m: {
							const {
								multireddit: s,
								multiredditsModelsState: n
							} = t.payload, a = Object.assign(Object.assign({}, n), {
								[s.url]: s
							});
							return [...e, s.url].sort(hT(a))
						}
						default:
							return e
					}
				},
				vT = s("./node_modules/lodash/difference.js"),
				_T = s.n(vT);
			const ET = [];
			var IT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ET,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case EO.n: {
						const {
							profileOrder: s
						} = t.payload;
						return Ty()([...e, ...s])
					}
					case SO.c: {
						const {
							profiles: e
						} = t.payload, s = Object.keys(e);
						return s.sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), s
					}
					case SO.h: {
						const {
							identifiers: s,
							profileModels: n,
							userIsSubscriber: a
						} = t.payload, r = s.filter(e => e.type === Qm.a.PROFILE);
						if (!r.length) return e;
						const c = r.map(e => e.id);
						return a ? Ty()([...e, ...c]).sort((e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1) : _T()(e, c)
					}
					default:
						return e
				}
			};
			const wT = [];
			var ST = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case EO.n: {
							const {
								subredditOrder: s
							} = t.payload;
							return Ty()([...e, ...s])
						}
						case SO.c: {
							const {
								subreddits: e
							} = t.payload, s = Object.keys(e);
							return s.sort((t, s) => e[t].displayText.toLowerCase() > e[s].displayText.toLowerCase() ? 1 : -1), s
						}
						case SO.h: {
							const {
								identifiers: s,
								subredditModels: n,
								userIsSubscriber: a
							} = t.payload, r = s.filter(e => e.type === Qm.a.SUBREDDIT && !!e.id);
							if (!r.length) return e;
							const c = r.map(e => e.id);
							return a ? Ty()([...e, ...c]).sort((e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1) : _T()(e, c)
						}
						default:
							return e
					}
				},
				TT = Object(c.c)({
					api: gT,
					favoriteMultiOrder: dT,
					favoriteProfileOrder: OT,
					favoriteSubredditOrder: jT,
					multiredditOrder: mT,
					profileOrder: IT,
					subredditOrder: ST
				}),
				CT = s("./src/reddit/actions/tabBadging.ts");
			var AT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case CT.a:
							const {
								hasUnreadMessages: s
							} = t.payload;
							return s;
						default:
							return e
					}
				},
				PT = s("./src/reddit/actions/tags/constants.ts");
			const DT = {
				pending: !1,
				error: !1
			};
			var RT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case PT.l:
						return Object.assign(Object.assign({}, e), {
							pending: !0
						});
					case PT.m:
						return {
							error: !1, pending: !1
						};
					case PT.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const kT = {
				pending: !1,
				error: !1
			};
			var NT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case PT.o:
						return Object.assign(Object.assign({}, e), {
							pending: !0
						});
					case PT.p:
						return {
							error: !1, pending: !1
						};
					case PT.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const LT = {
				pending: !1,
				error: !1
			};
			var xT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case PT.t:
						return Object.assign(Object.assign({}, e), {
							pending: !0
						});
					case PT.s:
					case PT.r:
					case PT.e:
					case PT.j:
						return {
							error: !1, pending: !1
						};
					case PT.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const MT = {
				pending: !1,
				error: !1
			};
			var UT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case PT.v:
						return Object.assign(Object.assign({}, e), {
							pending: !0
						});
					case PT.w:
						return {
							error: !1, pending: !1
						};
					case PT.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const FT = {
				pending: !1,
				error: !1
			};
			var BT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case PT.g:
							return Object.assign(Object.assign({}, e), {
								pending: !0
							});
						case PT.h:
							return {
								error: !1, pending: !1
							};
						case PT.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				GT = Object(c.c)({
					create: RT,
					deleteTag: NT,
					fetch: xT,
					update: UT,
					updatePrimaryTag: BT
				});
			const qT = {
				global: [],
				recommendedGlobal: []
			};
			var KT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case PT.w:
						case PT.r:
						case PT.e:
						case PT.j: {
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
				VT = s("./node_modules/lodash/uniqWith.js"),
				HT = s.n(VT),
				WT = s("./src/reddit/models/Option/index.ts");
			const QT = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var JT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case PT.d: {
							const {
								option: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								selectedOptions: HT()([...e.selectedOptions || [], Object.assign({}, s)], WT.a)
							})
						}
						case PT.c: {
							const {
								option: s
							} = t.payload, n = e.selectedOptions.findIndex(e => Object(WT.a)(e, s));
							return e.selectedOptions.splice(n, 1), Object.assign(Object.assign({}, e), {
								selectedOptions: e.selectedOptions
							})
						}
						case PT.b: {
							const {
								input: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								tagInput: s
							})
						}
						case PT.a: {
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
				zT = s("./src/reddit/helpers/tags/index.ts");
			const XT = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var YT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case PT.j: {
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
						case PT.w:
						case PT.s:
						case PT.r: {
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
								geoPlaces: o ? Object(K.set)(e.geoPlaces, i, o) : e.geoPlaces,
								suggestedItemTags: Object.assign(Object.assign({}, e.suggestedItemTags), {
									[i]: Object.assign({}, c[i] || {})
								}),
								sortedItemTags: Object.assign(Object.assign({}, e.sortedItemTags), {
									[i]: Object(zT.a)(r[i] || {})
								})
							}
						}
						case PT.p: {
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
						case PT.e: {
							const {
								globalSubredditTags: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								globalSubredditTags: Object.assign(Object.assign({}, e.globalSubredditTags), s)
							})
						}
						case PT.h: {
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
						case PT.i: {
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
				ZT = s("./src/reddit/reducers/tags/selected/index.ts"),
				$T = Object(c.c)({
					api: GT,
					availableGlobalTagOrder: KT,
					models: YT,
					selected: ZT.b,
					creation: JT
				}),
				eC = s("./src/reddit/actions/redditEmbed.ts"),
				tC = s("./src/reddit/actions/theme.ts"),
				sC = s("./src/reddit/actions/users.ts"),
				nC = s("./src/reddit/models/Theme/index.ts");
			const aC = {
				current: nC.c,
				cached: {}
			};
			var rC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tC.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? nC.b : nC.c,
								cached: {}
							}
						}
						case Aa.a:
						case Aa.b:
						case Aa.h:
						case Aa.i:
						case Aa.f:
						case Aa.j:
						case We.e:
						case We.h:
						case He.a:
						case ie.a:
						case He.b:
						case ie.b:
						case He.d:
						case ie.d:
						case ie.g:
						case be.c:
						case ie.k:
						case ie.j:
						case Ke.b:
						case eC.b:
						case pe.i:
						case Ze.c:
						case ue.c:
						case zu.j:
						case Qe.b:
						case Cr.a:
						case sC.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: nC.b,
									cached: {}
								} : {
									current: nC.c,
									cached: {}
								}
							}
							return e;
						case oe.d:
						case oe.e:
						case Je.a:
						case Je.b:
						case Je.d:
						case Je.e:
						case de.d:
						case de.e: {
							const {
								account: s
							} = t.payload;
							return s ? s.nightmode ? {
								current: nC.b,
								cached: {}
							} : {
								current: nC.c,
								cached: {}
							} : e
						}
						case ce.h:
						case ce.j:
						case ce.i:
						case ce.g:
						case ce.f:
						case ce.n:
						case ce.m:
						case ce.p:
						case ce.q:
						case ce.w:
						case ce.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: nC.b,
									cached: {}
								} : {
									current: nC.c,
									cached: {}
								}
							}
							return e;
						case zu.i: {
							if (!t.payload) return e;
							const {
								nightmode: s
							} = t.payload;
							return s ? {
								current: nC.b,
								cached: {}
							} : {
								current: nC.c,
								cached: {}
							}
						}
						case _.d:
							return {
								current: nC.c, cached: {}
							};
						case _.e:
							return t.payload.nightmodeTempUpdated ? {
								current: nC.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				cC = s("./src/reddit/actions/toaster.ts");
			const iC = [];
			var oC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cC.c: {
							const s = t.payload,
								n = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === s.id ? s : t;
								n.push(e), a = a || e === s
							}
							return a || n.push(s), n
						}
						case cC.b: {
							const s = t.payload;
							return e.filter(e => e.id !== s)
						}
						default:
							return e
					}
				},
				dC = s("./src/reddit/actions/tooltip.ts");
			var lC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dC.c: {
							const {
								tooltipId: s
							} = t.payload;
							return e === s ? null : s
						}
						case dC.a: {
							const {
								tooltipId: s
							} = t.payload;
							return e === s ? e : s
						}
						case dC.b: {
							const {
								tooltipId: s
							} = t.payload;
							return null !== e ? e : s || null
						}
						case dC.e: {
							const {
								tooltipId: s
							} = t.payload;
							return e === s ? null : e
						}
						case ve.M:
						case dC.d:
						case y.a:
						case Rl.b:
						case Rl.c:
						case Rl.a:
							return null;
						default:
							return e
					}
				},
				uC = s("./src/reddit/actions/tracing.ts");
			const bC = {
				traceId: void 0
			};
			var gC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case uC.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				pC = s("./src/lib/asyncActions/index.ts"),
				OC = s("./src/reddit/actions/reCaptchaEnterprise.ts");
			const fC = Object(pC.c)(OC.c.requestedActionType, OC.c.succeededActionType, OC.c.failedActionType),
				jC = Object(pC.c)(OC.a.requestedActionType, OC.a.succeededActionType, OC.a.failedActionType),
				yC = Object(pC.c)(OC.d.requestedActionType, OC.d.succeededActionType, OC.d.failedActionType);
			var hC = Object(c.c)({
					load: fC,
					execute: jC,
					send: yC
				}),
				mC = s("./src/reddit/actions/tracking.ts");
			const vC = {};
			var _C = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mC.a: {
							const {
								routeKey: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: !0
							})
						}
						case mC.b: {
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
				EC = Object(c.c)({
					reCaptchaEnterprise: hC,
					viewportDataLoaded: _C
				}),
				IC = s("./src/reddit/actions/trafficStats/constants.ts");
			var wC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case IC.c:
						return !0;
					case IC.b:
					case IC.a:
						return !1;
					default:
						return e
				}
			};
			var SC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case IC.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case IC.c:
							return null;
						default:
							return e
					}
				},
				TC = Object(c.c)({
					pending: wC,
					trafficStats: SC
				});
			var CC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.s:
					case f.t:
						return null;
					case f.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var AC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.s:
							return !0;
						case f.q:
						case f.t:
							return !1;
						default:
							return e
					}
				},
				PC = Object(c.c)({
					error: CC,
					pending: AC
				});
			var DC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case n.b:
					case f.t:
						return null;
					default:
						return e
				}
			};
			var RC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case f.t:
						return "";
					default:
						return e
				}
			};
			var kC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.r:
							return t.payload && t.payload.publicAddress || null;
						case n.b:
						case f.t:
							return null;
						default:
							return e
					}
				},
				NC = Object(c.c)({
					api: PC,
					contentId: DC,
					initialRecipient: RC,
					publicAddress: kC
				}),
				LC = Object(c.c)({
					communityPoints: NC
				}),
				xC = s("./src/reddit/actions/search/trending.ts");
			const MC = [];
			var UC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.c:
						case xC.a: {
							const {
								items: s
							} = t.payload;
							return s || e
						}
						default:
							return e
					}
				},
				FC = Object(c.c)({
					models: UC
				});
			const BC = {};
			var GC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vv.a: {
							const {
								trophies: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				qC = s("./src/reddit/actions/upload.ts"),
				KC = s("./src/reddit/models/Upload/index.ts");
			const VC = {};
			var HC = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VC,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qC.d: {
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
								status: KC.a.PENDING
							}
						})
					}
					case qC.h: {
						const {
							key: s
						} = t.payload, n = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								status: KC.a.UPLOADING
							})
						})
					}
					case qC.c: {
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
					case qC.e: {
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
					case qC.g: {
						const {
							key: s,
							url: n
						} = t.payload, a = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								status: KC.a.SUCCESS,
								url: n
							})
						})
					}
					case qC.b: {
						const {
							key: s,
							error: n
						} = t.payload, a = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, a), {
								status: KC.a.FAILED,
								error: n
							})
						})
					}
					case qC.a: {
						const {
							key: s
						} = t.payload, n = e[s];
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, n), {
								status: KC.a.CANCELED
							})
						})
					}
					case qC.f: {
						const {
							key: s
						} = t.payload, n = e[s];
						return n.metadata.localUrl && window.URL.revokeObjectURL(n.metadata.localUrl), In()(e, s)
					}
					default:
						return e
				}
			};
			const WC = {};

			function QC(e, t) {
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
			var JC = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WC,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case m.d:
						case f.a:
						case O.f:
						case f.t: {
							const {
								wallet: s
							} = t.payload;
							return QC(e, s)
						}
						case f.w: {
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
				zC = s("./src/reddit/actions/inbox.ts"),
				XC = s("./src/reddit/actions/pages/appeal/constants.ts"),
				YC = s("./src/reddit/actions/pages/userDataRequest/index.ts"),
				ZC = s("./src/reddit/actions/sso/constants.ts");
			const $C = (e, t) => {
				if (!t || _n()(e, t)) return e;
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
			var eA = Object(ph.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XC.a:
					case XC.b:
					case x_.b:
					case x_.c:
					case Aa.a:
					case Aa.b:
					case Aa.f:
					case Aa.h:
					case Aa.i:
					case Aa.j:
					case We.e:
					case We.h:
					case We.g:
					case Ve.q:
					case Ve.r:
					case He.a:
					case ie.a:
					case He.b:
					case ie.b:
					case ie.f:
					case ie.g:
					case ie.j:
					case ie.k:
					case be.a:
					case EO.l:
					case oe.b:
					case oe.a:
					case oe.e:
					case oe.d:
					case le.c:
					case le.i:
					case Je.e:
					case Je.d:
					case Je.b:
					case Je.a:
					case de.e:
					case de.d:
					case be.c:
					case ue.a:
					case ue.c:
					case Qe.b:
					case Cr.a:
					case Ze.a:
					case Ze.c:
					case eC.a:
					case eC.b:
					case zu.j:
					case YC.b:
					case sC.c:
					case Au.e:
						return $C(e, t.payload.account);
					case sC.n:
						return e ? Object.assign(Object.assign({}, e), {
							email: t.payload
						}) : e;
					case ce.i:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v:
					case ce.h:
					case ce.e:
					case ce.l:
					case ce.o:
					case ce.u: {
						const {
							response: s
						} = t.payload;
						return s ? $C(e, s.account) : e
					}
					case sC.a:
						return e ? Object.assign(Object.assign({}, e), {
							seenLayoutSwitch: !0
						}) : e;
					case n.d:
						return e ? Object.assign(Object.assign({}, e), {
							seenRedesignModal: !0
						}) : e;
					case ve.y:
						return e ? Object.assign(Object.assign({}, e), {
							seenGiveAwardTooltip: !0
						}) : e;
					case zu.l:
					case zu.k: {
						const s = t.payload;
						return e && "profileIcon" === s.key ? Object.assign(Object.assign({}, e), {
							accountIcon: s.imageUrl
						}) : e
					}
					case ve.E:
					case ve.t: {
						const {
							coins: s
						} = t.payload;
						return e ? Object.assign(Object.assign({}, e), {
							coins: s
						}) : e
					}
					case ve.a: {
						const {
							userName: s,
							awarderKarma: n,
							awardeeKarma: a
						} = t.payload;
						if (s.toLowerCase() !== (e && Object(fe.e)(e).toLowerCase())) return e;
						const r = a || (e ? e.awardeeKarma : 0) || 0,
							c = n || (e ? e.awarderKarma : 0) || 0,
							i = r + c + (e ? e.postKarma : 0) + (e ? e.commentKarma : 0);
						return e && Object.assign(Object.assign({}, e), {
							awardeeKarma: r,
							awarderKarma: c,
							totalKarma: i
						})
					}
					case Id.t: {
						const {
							coins: s
						} = t.payload;
						return s && e ? Object.assign(Object.assign({}, e), {
							coins: s
						}) : e
					}
					case Sf.b: {
						const {
							price: s
						} = t.payload;
						return (null == e ? void 0 : e.coins) && s ? Object.assign(Object.assign({}, e), {
							coins: e.coins - s
						}) : e
					}
					case zC.a: {
						const {
							inboxCount: s
						} = t.payload;
						return e ? Object.assign(Object.assign({}, e), {
							inboxCount: s
						}) : e
					}
					case ZC.a: {
						const {
							linkedIdentity: s
						} = t.payload, n = e && e.linkedIdentities || [];
						return e ? Object.assign(Object.assign({}, e), {
							linkedIdentities: [...n, s]
						}) : e
					}
					case ZC.b: {
						const {
							linkedIdentity: s
						} = t.payload, n = e && e.linkedIdentities || [];
						return e ? Object.assign(Object.assign({}, e), {
							linkedIdentities: n.filter(e => e !== s)
						}) : e
					}
					case Jl.c: {
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
			var tA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sC.m:
					case sC.n:
						return null;
					case sC.l:
						return t.payload;
					default:
						return e
				}
			};
			var sA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sC.m:
							return !0;
						case sC.n:
						case sC.l:
							return !1;
						default:
							return e
					}
				},
				nA = Object(c.c)({
					error: tA,
					pending: sA
				}),
				aA = Object(c.c)({
					api: nA
				});
			var rA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sC.j:
						return !0;
					default:
						return e
				}
			};
			var cA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sC.i:
							return !0;
						case sC.j:
						case sC.h:
							return !1;
						default:
							return e
					}
				},
				iA = Object(c.c)({
					pending: cA,
					emailSent: rA
				}),
				oA = Object(c.c)({
					api: iA
				}),
				dA = Object(c.c)({
					changeEmail: aA,
					sendResetEmail: oA
				}),
				lA = s("./src/reddit/models/WhitelistAndBlocked.ts");
			const uA = {};
			var bA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uA,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ns.f:
						return Object.assign(Object.assign({}, e), {
							new: lA.a.pending
						});
					case ns.d:
						return Object.assign(Object.assign({}, e), {
							new: lA.a.error
						});
					case ns.e:
						return Object.assign(Object.assign({}, e), {
							new: lA.a.waitingForRequest
						});
					case ns.b: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: lA.a.pending
						})
					}
					case ns.a: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: lA.a.error
						})
					}
					case ns.c: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: lA.a.waitingForRequest
						})
					}
					default:
						return e
				}
			};
			const gA = [];
			var pA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ns.e:
							return [t.payload, ...e];
						case ns.c: {
							const s = t.payload.name;
							return e.filter(e => e.name !== s)
						}
						case zu.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				OA = Object(c.c)({
					api: bA,
					data: pA
				}),
				fA = s("./src/reddit/actions/chat/constants.ts"),
				jA = s("./src/reddit/actions/chat/userSettings.ts");
			const yA = fA.a.anybody;
			var hA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jA.a:
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
				mA = Object(c.c)({
					invitePolicy: hA
				});
			const vA = (e, t) => void 0 === t || e && t === e.count ? e : Object.assign(Object.assign({}, e), {
				count: t
			});
			var _A = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qe.b: {
						const {
							drafts: s
						} = t.payload;
						return e && _n()(e, s) ? e : Object.assign(Object.assign({}, e), s)
					}
					case h.M: {
						const {
							response: {
								draftsCount: s
							}
						} = t.payload;
						return vA(e, s)
					}
					case Ba.e: {
						const {
							postDraftIds: s
						} = t.payload;
						return vA(e, s.length)
					}
					case Ba.c:
					case Ba.l: {
						const {
							draftsCount: s
						} = t.payload;
						return vA(e, s)
					}
					default:
						return e
				}
			};
			const EA = {};
			var IA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gi.a: {
							const e = t.payload.experimentVariants;
							return of(e)
						}
						default:
							return e
					}
				},
				wA = s("./src/reddit/actions/global/constants.ts");
			const SA = {};
			var TA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wA.a: {
							const s = t.payload;
							return null === s.local_persisted_experiments_store || void 0 === s.local_persisted_experiments_store ? e : s.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				CA = Object(c.c)({
					byName: IA,
					localPersisted: TA
				}),
				AA = s("./src/reddit/actions/googleOneTap/index.ts");
			var PA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case AA.a:
						return !0;
					default:
						return e
				}
			};
			var DA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zu.e:
						return !0;
					case zu.d:
						return !1;
					default:
						return e
				}
			};
			var RA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zu.g:
						return t.payload;
					case zu.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const kA = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var NA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sC.b:
							return t.payload;
						default:
							return e
					}
				},
				LA = s("./src/reddit/actions/notifications/constants.ts"),
				xA = s("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var MA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xA.a:
					case LA.a:
						return t.payload && t.payload.error || null;
					case xA.c:
					case xA.a:
					case LA.c:
					case LA.b:
						return null;
					default:
						return e
				}
			};
			var UA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case LA.c:
						return !1;
					case LA.b:
						return !0;
					default:
						return e
				}
			};
			var FA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case LA.c:
							return !0;
						case LA.b:
						case LA.a:
							return !1;
						default:
							return e
					}
				},
				BA = Object(c.c)({
					error: MA,
					loaded: UA,
					pending: FA
				});
			var GA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case LA.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case LA.f:
					case LA.e:
						return null;
					default:
						return e
				}
			};
			var qA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case LA.f:
						return !1;
					case LA.e:
						return !0;
					default:
						return e
				}
			};
			var KA = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case LA.f:
							return !0;
						case LA.e:
						case LA.d:
							return !1;
						default:
							return e
					}
				},
				VA = Object(c.c)({
					error: GA,
					loaded: qA,
					pending: KA
				}),
				HA = Object(c.c)({
					getPreferences: BA,
					setPreferences: VA
				}),
				WA = s("./src/lib/notifications/constants.ts");
			var QA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case WA.j:
						return !0;
					case WA.b:
					case WA.d:
					case WA.e:
						return !1;
					default:
						return e
				}
			};
			const JA = {
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
			var zA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JA,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case LA.b:
					case LA.f:
					case LA.d: {
						const {
							preferences: s
						} = t.payload;
						return Yc()(s) ? e : s
					}
					default:
						return e
				}
			};
			const XA = {
				byId: {},
				allIds: []
			};
			var YA = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XA,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xA.b: {
						const {
							rows: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), s)
					}
					case xA.d: {
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
			const ZA = {
				byId: {},
				allIds: []
			};
			var $A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZA,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xA.b: {
							const {
								sections: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				eP = Object(c.c)({
					sections: $A,
					rows: YA
				}),
				tP = Object(c.c)({
					api: HA,
					isNotificationPromptVisible: QA,
					preferences: zA,
					preferencesLayout: eP
				});
			const sP = {};
			var nP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case O.i:
					case p.i: {
						const {
							subredditId: s,
							userOwnedBadges: n
						} = t.payload, a = n.reduce((e, t) => (e[t] = !0, e), {});
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s] || {}), a)
						})
					}
					case m.d: {
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
			const aP = {},
				rP = (e, t) => "".concat(e, "_").concat(t || new Date, "}");
			var cP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.wb: {
						const s = t.payload.powerups;
						if (s) {
							const {
								allocation: t
							} = s, n = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => Object.assign(Object.assign({}, e), {
								[rP(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return Object.assign(Object.assign({}, e), n)
						}
						return e
					}
					case ve.V: {
						const {
							subredditId: s,
							powerupsCount: n,
							allocatedAt: a
						} = t.payload;
						if (n < 0) {
							const t = rP(s, a),
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
					case ve.Q: {
						const {
							subredditId: s,
							allocatedAt: n
						} = t.payload, a = rP(s, n), r = e[a];
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
			var iP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.wb: {
						const s = t.payload.powerups;
						return s ? In()(Object.assign(Object.assign({}, e), s), "allocation") : e
					}
					case ve.kb: {
						const {
							userPowerups: s
						} = t.payload;
						return s ? In()(Object.assign(Object.assign({}, e), s), "allocation") : e
					}
					case ve.V: {
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
					case ve.W: {
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
			var oP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.vb:
						case ve.xb:
							return !1;
						case ve.wb:
							return !0;
						default:
							return e
					}
				},
				dP = Object(c.c)({
					allocationByKey: cP,
					data: iP,
					fetched: oP
				}),
				lP = s("./src/reddit/reducers/user/prefs/index.ts");
			var uP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sC.d:
							return t.payload;
						default:
							return e
					}
				},
				bP = s("./src/reddit/actions/session.ts");
			var gP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bP.a:
					case bP.b:
					case bP.c:
					case bP.e:
						return t.payload;
					case bP.d:
						return null;
					default:
						return e
				}
			};
			var pP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bP.f:
						return !0;
					default:
						return e
				}
			};
			var OP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sC.k:
						return t.payload;
					default:
						return e
				}
			};
			var fP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gi.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var jP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gi.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				yP = Object(c.c)({
					isEmployee: fP,
					isLoggedIn: jP
				});
			var hP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zu.r: {
							const {
								topContentDismissal: s
							} = t.payload;
							return e && _n()(e, s) ? e : Object.assign(Object.assign({}, e), s)
						}
						default:
							return e
					}
				},
				mP = s("./src/reddit/actions/userWhitelist.ts");
			const vP = {};
			var _P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mP.e:
						return Object.assign(Object.assign({}, e), {
							new: lA.a.pending
						});
					case mP.d:
						return Object.assign(Object.assign({}, e), {
							new: lA.a.error
						});
					case mP.f:
						return Object.assign(Object.assign({}, e), {
							new: lA.a.waitingForRequest
						});
					case mP.b: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: lA.a.pending
						})
					}
					case mP.a: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: lA.a.error
						})
					}
					case mP.c: {
						const s = t.payload.name;
						return Object.assign(Object.assign({}, e), {
							[s]: lA.a.waitingForRequest
						})
					}
					default:
						return e
				}
			};
			const EP = [];
			var IP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EP,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mP.f:
							return [t.payload, ...e];
						case mP.c: {
							const s = t.payload.name;
							return e.filter(e => e.name !== s)
						}
						case zu.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				wP = Object(c.c)({
					api: _P,
					data: IP
				}),
				SP = Object(c.c)({
					account: eA,
					accountSettings: dA,
					blocked: OA,
					chatSettings: mA,
					drafts: _A,
					experiments: CA,
					googleOneTapEnabled: PA,
					isCustomizeFlyoutShowing: DA,
					topContentDismissalPrefsSet: hP,
					language: RA,
					loid: NA,
					notificationPrefs: tP,
					ownedBadges: nP,
					powerups: dP,
					prefs: lP.c,
					reddaid: uP,
					session: gP,
					sessionRefreshFailed: pP,
					sessionTracker: OP,
					temporaryGQL: yP,
					wallets: JC,
					whitelist: wP
				});
			var TP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YC.a:
						return t.payload || null;
					case YC.b:
					case YC.c:
						return null;
					default:
						return e
				}
			};
			var CP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YC.c:
						return !0;
					case YC.b:
					case YC.a:
						return !1;
					default:
						return e
				}
			};
			var AP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YC.b:
						return !0;
					case YC.a:
					case YC.c:
						return !1;
					default:
						return e
				}
			};
			var PP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case YC.b:
							return t.payload.userDataExportEligibility;
						case YC.a:
						case YC.c:
							return !1;
						default:
							return e
					}
				},
				DP = Object(c.c)({
					error: TP,
					pending: CP,
					success: AP,
					userDataExportEligibility: PP
				}),
				RP = Object(c.c)({
					userDataRequestPageApi: DP
				});
			const kP = {};
			var NP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case be.c:
					case Qe.b:
					case Cr.a:
					case He.b:
					case ie.b:
					case Oe.e:
						return Object.assign(Object.assign({}, e), t.payload.userFlair);
					case ce.i:
					case ce.f:
					case ce.m:
					case ce.p:
					case ce.v: {
						const {
							response: s
						} = t.payload, {
							userFlair: n
						} = s, a = Object.assign({}, e);
						return Object.keys(n).forEach(e => {
							a[e] || (a[e] = n[e])
						}), a
					}
					case Oe.i: {
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
					case re.h: {
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
					case Oe.d: {
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
					case Oe.b: {
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
					case Oe.h: {
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
					case Oe.c: {
						const s = t.payload,
							n = e[s.subredditId],
							a = e[s.subredditId].templates,
							r = e[s.subredditId].templateIds,
							c = In()(a, s.templateId),
							i = r.filter(e => e !== s.templateId);
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: Object.assign(Object.assign({}, n), {
								templates: Object.assign({}, c),
								templateIds: i
							})
						})
					}
					case Oe.g:
					case Oe.f: {
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
			const LP = {};
			var xP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sC.g:
					case sC.f: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.toLowerCase()]: null
						})
					}
					case sC.e: {
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
			var MP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sC.g:
							return !0;
						case sC.f:
						case sC.e:
							return !1;
						default:
							return e
					}
				},
				UP = Object(c.c)({
					error: xP,
					pending: MP
				});
			const FP = {};
			var BP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.f: {
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
					case p.b: {
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
					case p.a: {
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
					case O.a: {
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
			const GP = {},
				qP = (e, t) => {
					const s = Object.keys(t);
					if (!s.length) return e;
					const n = {};
					return s.forEach(s => {
						const a = e[s],
							r = t[s];
						a && _n()(a, r) || (n[s.toLowerCase()] = r)
					}), Object.keys(n).length ? Object.assign(Object.assign({}, e), n) : e
				};
			var KP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GP,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sC.f: {
							const {
								data: s
							} = t.payload;
							return qP(e, s)
						}
						case EO.k: {
							const {
								user: s
							} = t.payload;
							return qP(e, {
								[s.username]: s
							})
						}
						case ve.t: {
							const {
								gildee: s
							} = t.payload;
							if (!s) return e;
							const n = e[s.toLowerCase()];
							if (!n) return e;
							const a = n.awardedLastMonth,
								r = a ? a.totalCount + 1 : 1,
								c = a && a.topAward;
							return c ? qP(e, {
								[s.toLowerCase()]: Object.assign(Object.assign({}, n), {
									awardedLastMonth: {
										totalCount: r,
										topAward: c
									}
								})
							}) : e
						}
						case ve.a: {
							const {
								userName: s,
								awardeeKarma: n,
								awarderKarma: a
							} = t.payload, r = e[s.toLowerCase()];
							if (!r) return e;
							const c = n || r.awardeeKarma,
								i = a || r.awarderKarma;
							return qP(e, {
								[s.toLowerCase()]: Object.assign(Object.assign({}, r), {
									awardeeKarma: c,
									awarderKarma: i,
									totalKarma: c + i + r.postKarma + r.commentKarma
								})
							})
						}
						case zu.l:
						case zu.k: {
							const {
								imageUrl: s,
								key: n,
								username: a
							} = t.payload;
							if ("profileIcon" !== n) return e;
							const r = a.toLowerCase(),
								c = e[r];
							return c ? qP(e, {
								[r]: Object.assign(Object.assign({}, c), {
									accountIcon: s
								})
							}) : e
						}
						default:
							return e
					}
				},
				VP = s("./src/reddit/actions/usernameAvailable.ts");
			const HP = {};
			var WP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case VP.a: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: VP.b.Available
						})
					}
					case VP.c: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: VP.b.Error
						})
					}
					case VP.d: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: VP.b.Pending
						})
					}
					case VP.e: {
						const {
							username: s
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: VP.b.Unavailable
						})
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
					case ve.bb: {
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
			var zP = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.ab:
						case ve.cb:
							return !1;
						case ve.bb:
							return !0;
						default:
							return e
					}
				},
				XP = Object(c.c)({
					allocationByKey: JP,
					fetched: zP
				});
			const YP = {};
			var ZP = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YP,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.n: {
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
			var $P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.qb:
						return t.payload;
					case ve.sb:
					case ve.rb:
						return null;
					default:
						return e
				}
			};
			var eD = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.rb:
						case ve.qb:
							return !1;
						case ve.sb:
							return !0;
						default:
							return e
					}
				},
				tD = Object(c.c)({
					error: $P,
					pending: eD
				});
			var sD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.tb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const nD = {};
			var aD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ve.rb: {
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
			const rD = {};
			var cD = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ve.rb: {
							const {
								postId: s,
								topAwardersRank: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: (n || []).sort((e, t) => e.rank - t.rank)
							})
						}
						case ve.t: {
							const {
								id: s
							} = t.payload;
							return In()(e, [s])
						}
						default:
							return e
					}
				},
				iD = Object(c.c)({
					api: tD,
					currentPostId: sD,
					currentRank: aD,
					list: cD
				}),
				oD = Object(c.c)({
					api: UP,
					appliedBadges: BP,
					models: KP,
					nameAvailable: WP,
					publicWallets: ZP,
					topAwarders: iD,
					powerups: XP
				});
			const dD = {};
			var lD = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dD,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case He.b:
						case ie.b:
						case be.c:
						case pe.i:
						case ue.c:
						case Qe.b:
						case Cr.a: {
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
				uD = s("./src/reddit/actions/widgets/constants.ts");
			const bD = {};
			var gD = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bD,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case He.b:
						case ie.b:
						case ue.c:
						case pe.i:
						case be.c:
						case Qe.b: {
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
						case uD.g: {
							const s = t.payload;
							return "menu" !== s.widget.kind ? e : Object.assign(Object.assign({}, e), {
								[s.subredditId]: s.widgetId
							})
						}
						case uD.h: {
							const s = t.payload;
							return e[s.subredditId] === s.widgetId ? Object.assign(Object.assign({}, e), {
								[s.subredditId]: null
							}) : e
						}
						default:
							return e
					}
				},
				pD = s("./src/reddit/models/Widgets/index.ts");
			const OD = {};
			var fD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case be.c: {
						const s = t.payload,
							n = s.structuredStyles && s.structuredStyles.data && s.structuredStyles.data.content;
						if (!n) return e;
						const a = n.widgets;
						return Object.assign(Object.assign({}, e), a.items)
					}
					case uD.b: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), s.widgets.items)
					}
					case _.k: {
						const t = Object.assign({}, e);
						return Object.keys(t).forEach(e => {
							t[e] = Object.assign(Object.assign({}, t[e]), {
								styles: Object(pD.m)()
							})
						}), t
					}
					case uD.e: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), s.widgets.items)
					}
					case uD.i:
					case uD.g: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.widget.id]: s.widget
						})
					}
					case uD.h: {
						const s = t.payload,
							n = Object.assign({}, e);
						return delete n[s.widgetId], n
					}
					case He.b:
					case ie.b:
					case be.c:
					case pe.i:
					case ue.c:
					case Qe.b:
					case Cr.a: {
						const {
							structuredStyles: s
						} = t.payload;
						if (!(s && s.data && s.data.content)) return e;
						const n = s.data.content.widgets;
						return Object.assign(Object.assign({}, e), n.items)
					}
					case SO.h: {
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
					case lw.f: {
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
			const jD = {};
			var yD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case be.c:
					case ie.b:
					case pe.i:
					case Qe.b: {
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
			const hD = {};
			var mD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case be.c:
					case Qe.b:
					case Cr.a: {
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
					case uD.e:
					case uD.b: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: s.widgets.layout.sidebar.order
						})
					}
					case uD.f: {
						const s = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: s.widgetIds
						})
					}
					case uD.g: {
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
					case uD.h: {
						const s = t.payload;
						if (!e[s.subredditId]) return e;
						const n = e[s.subredditId].filter(e => e !== s.widgetId);
						return Object.assign(Object.assign({}, e), {
							[s.subredditId]: n
						})
					}
					case He.b:
					case ie.b:
					case be.c:
					case ue.c:
					case pe.i:
					case Qe.b:
					case Cr.a: {
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
			const vD = {
				accountManagerModalData: r,
				actionBarCountAnimation: b,
				activeModalId: I,
				ads: A,
				apiRequestState: R,
				approvedSubmitters: $,
				authorFlair: me,
				awards: pt,
				badges: Ct,
				banned: Jt,
				blockedRedditors: ss,
				blockUser: ds,
				brandSafety: us,
				chat: Xs,
				claimGold: an,
				comments: Yn,
				commentsListTruncated: $n,
				commentsPage: wa,
				communityFlairs: Ca,
				contentGate: Da,
				continueThreads: Na,
				creations: Gc,
				dashboard: Vc,
				discoveryUnits: ri,
				dismissedTruncationList: oi,
				economics: Pi,
				emojis: Bi,
				experimentOverrides: Hi,
				externalAccount: vo,
				featureFlags: Co,
				flairedUsers: Ko,
				focusedVerticals: sd,
				fontFiles: ad,
				gild: yd,
				goldPurchase: Pl,
				header: Nl,
				htmlResponseStreaming: Ll,
				imageUploads: Ul,
				inboxNotifications: Hl,
				interceptedAction: Ql,
				isChangeUsernameTooltipShowing: zl,
				isEmailVerificationTooltipShowing: Yl,
				isModeratorWithPostPerms: $l,
				jsApi: su,
				leaderboard: gu,
				listings: nb,
				live: ib,
				mediaGalleries: gb,
				mediaPlayback: fb,
				meta: hb,
				moderatingSubreddits: vb,
				moderationLog: xb,
				moderationPromptId: Mb,
				moderators: Eg,
				modListingPage: Pg,
				modModeEnabled: Dg,
				modQueue: Rp,
				moreComments: Gp,
				multireddits: RO,
				muted: YO,
				notificationBannerId: $O,
				nps: sf,
				oldSiteRules: rf,
				page: bf,
				platform: yf,
				postCollection: Yf,
				postRequirements: gj,
				polls: Ff,
				postFlair: nj,
				posts: gh,
				postStickiedComments: jh,
				givePremium: Ed,
				products: Rh,
				profileCommentsPage: Qh,
				profilePrivatePage: Wm,
				profileModSettingsPage: Yh,
				profileOverviewPage: Nm,
				profilePostsPage: xm,
				profiles: Sv,
				promos: Dv,
				publicAccessNetwork: u_,
				recommendations: g_,
				removalReasons: I_,
				reportFlow: L_,
				reportPage: H_,
				reportRules: J_,
				requestHost: z_,
				runTimeEnvVars: Z_,
				search: lE,
				searchDiscoveryUnits: yE,
				seo: EE,
				shortcuts: kE,
				sidebarPromotedPosts: xE,
				streaming: VE,
				structuredStyles: dI,
				stylesheets: lI,
				subredditAutocomplete: hI,
				subredditChannels: DI,
				subreddits: aT,
				subredditStickyPosts: iT,
				subscriptions: TT,
				tabBadged: AT,
				tags: $T,
				themes: rC,
				toaster: oC,
				tooltipId: lC,
				tracing: gC,
				tracking: EC,
				trafficStats: TC,
				transfers: LC,
				trending: FC,
				trophies: GC,
				uploads: HC,
				user: SP,
				userDataRequestPage: RP,
				userFlair: NP,
				users: oD,
				widgets: Object(c.c)({
					idCardIds: lD,
					menuIds: gD,
					models: fD,
					moderatorIds: yD,
					sidebar: mD
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
				B = s("./src/reddit/models/PostDraft/index.ts"),
				G = s("./src/reddit/models/User/index.ts");
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
					collapsedTraySections: G.a,
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
					case C.s:
					case C.N: {
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
							editorMode: s === B.b.Markdown ? F.h.MARKDOWN : F.h.RICH_TEXT
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
					experimentName: a.O,
					expEventOverride: !1
				}), e => e),
				l = e => e === a.G.Onetap,
				u = e => e === a.G.OnetapAuto,
				b = e => e.user.googleOneTapEnabled,
				g = Object(n.a)(i.I, d, (e, t) => !e && !!t),
				p = Object(n.a)(i.I, d, (e, t) => !e && !!t && !Object(a.ad)(t))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.a9ac8eb5faa727742e46.js.map