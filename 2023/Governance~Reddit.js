// https://www.redditstatic.com/desktop2x/Governance~Reddit.c271f9cf3c10082e58d2.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
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
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = n.n(s);
			t.a = function(e) {
				var t;
				const {
					source: n,
					isSponsored: s,
					domainOverride: c,
					callToAction: o
				} = e;
				let i = "";
				if (s) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == o ? void 0 : o.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					i = c || Object(r.E)(e)
				} else i = Object(r.E)(e);
				const d = a.a.parse(i),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
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
				return b
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
				e.PageLoad = "PAGE_LOAD", e.PostSubmit = "post_submit", e.CommentSubmit = "comment_submit"
			}(u || (u = {}));
			var b = u;
			const h = new class {
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
			t.b = h
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, n) {},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const a = [s.yc, s.ub, s.D, s.U, s.pb, s.Xb],
				c = {
					[s.Xb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.pb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.U]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.D]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.ub]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.yc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[s.Xb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.U]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.D]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.ub]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.yc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.ub]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.yc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const i = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.yc]: "",
						[s.ub]: "",
						[s.D]: "",
						[s.U]: "",
						[s.pb]: "",
						[s.Xb]: ""
					};
				let u = d - i;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of a) {
					const e = Math.floor(u / r);
					e && (l[r] = (t ? o : c)[r](e).toString()), u -= e * r
				}
				const p = a.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? p : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
			}
		},
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
		"./src/reddit/actions/activeCommunitiesOnProfile/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "ACTIVE_COMMUNITIES_PROFILE__FETCH_PENDING",
				s = "ACTIVE_COMMUNITIES_PROFILE__FETCH_SUCCESS",
				a = "ACTIVE_COMMUNITIES_PROFILE__FETCH_FAILURE"
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
				b = Object(r.a)(c),
				h = Object(r.a)(o),
				y = (Object(r.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(r.a)(i)),
				m = Object(r.a)(d),
				g = Object(r.a)(l),
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
							e(b({
								badgeIds: t,
								subredditId: n,
								userId: d.id
							}));
							const u = await Object(a.a)(o(), n, c, l);
							u.ok || (e(h({
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
						e(g({
							subredditId: t
						}));
						const o = await Object(a.b)(c(), t, n);
						o.ok ? e(y({
							...o.body,
							subredditId: t
						})) : e(m({
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
				return b
			})), n.d(t, "g", (function() {
				return g
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
				b = Object(r.a)(d),
				h = Object(r.a)(l),
				y = Object(r.a)(u),
				m = Object(r.a)(p),
				g = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t(),
						a = Object(o.a)(s);
					if (Object(o.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let i = !1,
						d = "";
					do {
						e(m());
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
							e(h({
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
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/chat.ts");
			const i = "CHAT__SET_LIVECHAT_TOOLTIP_SHOW_STATE",
				d = e => Object(r.c)(s.q.CHAT, s.z.CHAT_LIVECHAT_ANNOUNCEMENT_TOOLTIP_SHOW_STATE, e),
				l = Object(a.a)(i),
				u = (e, t) => async (n, s) => {
					const a = s(),
						i = Object(o.b)(a);
					if (!c.a[i].includes(e)) return;
					const u = d(t);
					Object(r.d)(u, e, r.a), n(l(e))
				}
		},
		"./src/reddit/actions/chat/showChatChannelDiscoveryTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			}));
			var r = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/SubredditChatChannelRecommendations.json");
			const d = "CHAT__SET_SHOW_CHAT_CHANNEL_DISCOVERY_TOOLTIP",
				l = e => Object(r.c)(s.q.CHAT, s.z.CHAT_CHANNEL_DISCOVERY_TOOLTIP_SHOWN, e),
				u = Object(a.a)(d),
				p = e => {
					const t = l(e);
					Object(r.d)(t, !0, r.a)
				},
				f = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const d = l(e);
					if (Object(r.b)(d)) return;
					const p = await (async e => {
						const t = await Object(c.a)(e, i);
						if (Object(o.c)(t) && !t.error) return t.body.data.chatChannelRecommendations
					})(a());
					(null == p ? void 0 : p.edges) && p.edges.length > 0 && (await new Promise(e => setTimeout(e, 2e3)), t(u(!0)))
				}
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
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
				b = Object(s.a)(f),
				h = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					e(u());
					const s = await Object(c.b)(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(b({
							invitePolicy: l.a[t.invite_policy]
						}))
					} else e(p(s.error))
				}, y = Object(s.a)("USER_SETTINGS__SAVE_PENDING"), m = Object(s.a)("USER_SETTINGS__SAVE_FAILURE"), g = e => Object.keys(l.a).find(t => l.a[t] === e), v = e => async (t, n, s) => {
					let {
						apiContext: u
					} = s;
					const p = n(),
						{
							invitePolicy: f
						} = e,
						h = g(f);
					if (h) {
						t(y());
						const e = g(p.user.chatSettings.invitePolicy),
							n = await Object(c.e)(h, u());
						if (Object(d.a)(((e, t) => n => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: t
								},
								...Object(o.q)(n)
							}))(h, e)(p)), n.ok) {
							const e = l.a[h];
							t(b({
								invitePolicy: e
							})), t(Object(a.f)({
								kind: i.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "4eTtdy"
								})
							}))
						} else t(m(n.error))
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
				return h
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const a = {
				query: 'mutation GetPersonalizedTimer{\n  act(\n    input: {actionName: "r/replace:get_user_cooldown"}\n  ) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on GetUserCooldownResponseMessageData {\n            nextAvailablePixelTimestamp\n          }\n        }\n      }\n    }\n  }\n}\n\n\nsubscription SUBSCRIBE_TO_CONFIG_UPDATE {\n  subscribe(input: {channel: {teamOwner: GARLICBREAD, category: CONFIG}}) {\n    id\n    ... on BasicMessage {\n      data {\n        ... on ConfigurationMessageData {\n          __typename\n          colorPalette {\n            colors {\n              hex\n              index\n            }\n          }\n          canvasConfigurations {\n            dx\n            dy\n            index\n          }\n          canvasWidth\n          canvasHeight\n        }\n      }\n    }\n  }\n}\n\n\nsubscription SUBSCRIBE_TO_CANVAS_UPDATE {\n  subscribe(\n    input: {channel: {teamOwner: GARLICBREAD, category: CANVAS, tag: "0"}}\n  ) {\n    id\n    ... on BasicMessage {\n      id\n      data {\n        __typename\n        ... on DiffFrameMessageData {\n          currentTimestamp\n          previousTimestamp\n          name\n        }\n        ... on FullFrameMessageData {\n          __typename\n          name\n          timestamp\n        }\n      }\n    }\n  }\n}\n\n\n\n\nmutation SET_PIXEL {\n  act(\n    input: {actionName: "r/replace:set_pixel", PixelMessageData: {coordinate: { x: 53, y: 35}, colorIndex: 3, canvasIndex: 0}}\n  ) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on SetPixelResponseMessageData {\n            timestamp\n          }\n        }\n      }\n    }\n  }\n}\n\n\n\n\n# subscription configuration($input: SubscribeInput!) {\n#     subscribe(input: $input) {\n#       id\n#       ... on BasicMessage {\n#         data {\n#           __typename\n#           ... on RReplaceConfigurationMessageData {\n#             colorPalette {\n#               colors {\n#                 hex\n#                 index\n#               }\n#             }\n#             canvasConfigurations {\n#               index\n#               dx\n#               dy\n#             }\n#             canvasWidth\n#             canvasHeight\n#           }\n#         }\n#       }\n#     }\n#   }\n\n# subscription replace($input: SubscribeInput!) {\n#   subscribe(input: $input) {\n#     id\n#     ... on BasicMessage {\n#       data {\n#         __typename\n#         ... on RReplaceFullFrameMessageData {\n#           name\n#           timestamp\n#         }\n#         ... on RReplaceDiffFrameMessageData {\n#           name\n#           currentTimestamp\n#           previousTimestamp\n#         }\n#       }\n#     }\n#   }\n# }\n',
				variables: {
					input: {
						channel: {
							teamOwner: "GARLICBREAD",
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
				o = n("./src/reddit/selectors/experiments/garlicBread.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const d = "FETCH_COOLDOWN_TIMER__PENDING",
				l = "FETCH_COOLDOWN_TIMER__SUCCESS",
				u = "FETCH_COOLDOWN_TIMER__FAILED",
				p = Object(r.a)(d),
				f = Object(r.a)(l),
				b = Object(r.a)(u),
				h = "SET__COOLDOWN_TIMER",
				y = Object(r.a)(h),
				m = () => async (e, t, n) => {
					let {
						gqlRealtime2Context: r
					} = n;
					const s = t(),
						a = Object(i.S)(s),
						d = !!Object(o.b)(s),
						{
							expiresAt: l,
							api: {
								pending: u
							}
						} = s.cooldownTimer,
						h = l <= Date.now();
					if (!a || !r || !h || !d || u) return;
					e(p());
					const m = await c(r());
					if (m.ok && m.body) {
						const t = m.body.data.act.data.find(e => e.data.nextAvailablePixelTimestamp),
							n = (null == t ? void 0 : t.data.nextAvailablePixelTimestamp) || null;
						e(y({
							expiresAt: n
						})), e(f())
					} else e(b({
						error: null == m ? void 0 : m.error
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
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
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
				return D
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "o", (function() {
				return M
			})), n.d(t, "n", (function() {
				return B
			})), n.d(t, "k", (function() {
				return G
			})), n.d(t, "l", (function() {
				return q
			})), n.d(t, "i", (function() {
				return H
			})), n.d(t, "j", (function() {
				return V
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
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/getGenericUploadError.ts"),
				y = n("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				m = n("./src/reddit/helpers/media/index.ts"),
				g = n("./src/reddit/models/Emoji/index.ts"),
				v = n("./src/reddit/models/Image/index.tsx"),
				E = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/emojis.ts"),
				O = n("./src/reddit/selectors/subreddit.ts");
			const I = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				S = Object(p.a)(I),
				T = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				D = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				w = Object(p.a)(T),
				C = Object(p.a)(D),
				j = "GET_ALL_EMOJIS_PENDING",
				A = "GET_ALL_EMOJIS_LOADED",
				P = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(j),
				N = Object(p.a)(A),
				L = Object(p.a)(P),
				x = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				k = Object(p.a)(x),
				U = e => ({
					text: r.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: r.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: B(e)
				}),
				M = e => {
					let {
						imageData: t,
						subredditId: n
					} = e;
					return async (e, r, s) => {
						const a = r(),
							u = Object(O.X)(a, {
								subredditId: n
							}).name;
						e(Object(f.k)(t));
						const p = t.file,
							b = await Object(m.h)(p),
							h = await (async (e, t, n, r) => Object(o.a)(Object(i.a)(e, [l.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: c.ob.POST,
								data: {
									filepath: n,
									mimetype: r
								}
							}))(s.apiContext(), u, p.name, b);
						let y = !1;
						if (h.ok) {
							const n = await (async (e, t, n) => Object(d.a)(n, t))(s.apiContext(), h.body.s3UploadLease, p);
							if (n.ok) {
								if (!r().imageUploads[t.id]) return Object(v.d)(t), !1;
								const s = decodeURIComponent(n.body.PostResponse.Location),
									a = h.body.websocketUrl,
									c = Object(v.n)(t, s, a);
								e(Object(f.j)(c)), y = !0
							} else {
								const r = Object(v.k)(t, n.error);
								e(Object(f.i)(r))
							}
						} else {
							const n = Object(v.k)(t, h.error);
							e(Object(f.i)(n))
						}
						return y
					}
				},
				F = (e, t) => async (n, r, s) => {
					const {
						imageData: a,
						subredditId: d,
						emojiName: u,
						settings: p
					} = e, h = Object(y.a)(a.url), m = r(), g = Object(O.X)(m, {
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
					}))(s.apiContext(), g, h, u, p);
					if (!E.ok) {
						const r = Object(v.k)(a, E.error);
						n(Object(f.i)(r)), n(Object(b.f)(U(e))), t && t.close()
					}
					return E.ok
				}, B = e => async (t, n, s) => {
					const {
						imageData: a,
						subredditId: c,
						emojiName: o,
						settings: i
					} = e;
					if (t(Object(f.k)(a)), !a.websocketUrl) return t(Object(b.f)({
						text: r.fbt._("Could not upload emoji", null, {
							hk: "29nzfh"
						})
					}));
					let d;
					const l = new WebSocket(a.websocketUrl);
					return l.onopen = async () => {
						d = await F(e, l)(t, n, s)
					}, l.onmessage = n => {
						const r = JSON.parse(n.data);
						if ("success" === r.type) {
							d = !0;
							const e = r.payload.emoji_url,
								n = Object(v.o)(a, e);
							t(Object(f.l)(n));
							const s = Object(g.e)(o, n.url, c, i);
							t(S(s)), t(G(c))
						} else {
							const n = Object(h.a)(o),
								r = Object(v.k)(a, n);
							t(Object(f.i)(r)), t(Object(b.f)(U(e)))
						}
						l.close()
					}, l.onerror = n => {
						d = !1;
						const r = Object(h.a)(o),
							s = Object(v.k)(a, r);
						t(Object(f.i)(s)), t(Object(b.f)(U(e))), l.close()
					}, d
				}, G = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n();
					if (Object(_.a)(a, e)) return;
					const c = Object(O.X)(a, {
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
					} else t(L({
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
						p = Object(O.X)(u, {
							subredditId: t
						}).name,
						f = await (async (e, t, n) => Object(o.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/v1/${n}/emoji/${t}`,
							method: c.ob.DELETE,
							type: "json"
						}))(d(), e, p);
					if (f.ok) {
						n(w({
							emojiName: e,
							subredditId: t
						})), n(b.f({
							kind: E.b.SuccessCommunityGreen,
							text: r.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else n(C(f.error)), n(b.f({
						kind: E.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, V = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const u = s(),
						p = Object(O.X)(u, {
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
					} else n(b.f({
						kind: E.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, W = "EMOJI_PERMISSIONS_UPDATED", Q = Object(p.a)(W), K = (e, t, n, s) => async (a, d, u) => {
					let {
						apiContext: p
					} = u;
					const f = d(),
						h = Object(O.X)(f, {
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
					}))(p(), e, h, n)).ok ? (a(Q({
						emojiName: e,
						isSnoomoji: t,
						settings: n,
						subredditId: s
					})), a(b.f({
						kind: E.b.SuccessCommunityGreen,
						text: r.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(b.f({
						kind: E.b.Error,
						text: r.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				a = "MOD_PAGE_EVENT_POSTS_PENDING",
				c = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				o = "START_EVENT_NOW_SUCCESS",
				i = "EDIT_EVENT_TIME_SUCCESS"
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
			n("./src/lib/sentry/index.ts"), n("./src/reddit/endpoints/user/index.ts"), n("./src/reddit/models/Post/index.ts"), n("./src/reddit/selectors/telemetry.ts");
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
				return _
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
				b = Object(a.a)(u),
				h = Object(a.a)(p),
				y = Object(a.a)(f),
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				g = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				v = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				E = e => async (t, a) => {
					t(b());
					const c = a(),
						i = Object(l.X)(c, {
							subredditId: e
						}).name,
						u = c.structuredStyles.models[e],
						p = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ExportTheme")]).then(n.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						f = await p(u, i);
					f.ok ? (t(h()), t(Object(o.f)({
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
				}, _ = e => async (t, a) => {
					t(m());
					const l = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ImportTheme")]).then(n.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						u = await l(e);
					u.ok ? (t(g()), t(Object(o.f)({
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
				return b
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "A", (function() {
				return I
			})), n.d(t, "B", (function() {
				return S
			})), n.d(t, "z", (function() {
				return T
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "v", (function() {
				return w
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "d", (function() {
				return A
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
				b = "MULTIREDDIT__DUPLICATE_PENDING",
				h = "MULTIREDDIT__DUPLICATE_SUCCESS",
				y = "MULTIREDDIT__DUPLICATE_FAILURE",
				m = "MULTIREDDIT__EDIT_FAILURE",
				g = "MULTIREDDIT__EDIT_PENDING",
				v = "MULTIREDDIT__EDIT_SUCCESS",
				E = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				_ = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				O = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				I = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				T = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				D = 10,
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				C = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				j = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var A;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(A || (A = {}))
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
				return b
			})), n.d(t, "a", (function() {
				return h
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
				b = "NPS__URL_LOADED",
				h = "NPS__URL_FAILED",
				y = Object(r.a)(f),
				m = Object(r.a)(b),
				g = Object(r.a)(h);
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
					t.dest ? (e(m(t)), p(t.dest), v = !0) : e(g())
				} else e(g())
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
			n.d(t, "e", (function() {
				return S
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "f", (function() {
				return A
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/reddit/actions/pages/subreddit/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/config.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/endpoints/me/index.ts"),
				u = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = n("./src/reddit/selectors/experiments/appeals.ts"),
				f = n("./src/reddit/actions/pages/appeal/constants.ts");
			const b = `${o.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				h = Object(i.a)(f.b),
				y = Object(i.a)(f.a),
				m = async e => {
					const t = b;
					window.location.href = t
				};
			var g = n("./src/reddit/actions/redditEmbed.ts"),
				v = n("./src/reddit/actions/users.ts"),
				E = n("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				O = n("./src/lib/makeListingKey/index.ts"),
				I = n("./src/lib/matchRoute/index.ts");
			const S = e => async t => {
				await t(Object(g.c)(e, !0))
			}, T = () => async e => {
				await e((() => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const s = t(),
						a = await Object(l.a)(r());
					a.ok && a.body ? a.body.account ? s.user.account && s.user.account.isFPR ? m(e) : e(h(a.body)) : Object(u.a)(e, s) : e(y(a.error))
				})())
			}, D = e => async e => {
				await e((e => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const a = t(),
						c = Object(p.a)(a),
						o = await Object(l.a)(s());
					o.ok && o.body ? o.body.account ? c ? a.user.account && a.user.account.isFPR ? m(e) : e(h(o.body)) : e(Object(r.c)("/appeals")) : Object(u.a)(e, a) : e(y(o.error))
				})())
			}, w = (e, t, n) => async (c, o, i) => {
				let {
					routes: d
				} = i;
				const l = o(),
					u = (t || l.platform.currentPage).routeMatch.match,
					p = Object(I.a)(u.url, d);
				if (!p) return;
				const f = e.metaKey || e.ctrlKey || 1 === e.button;
				if (p.route && p.route.meta && (p.route.meta.name === a.Tb.INDEX || p.route.meta.name === a.Tb.MULTIREDDIT || p.route.meta.name === a.Tb.SUBREDDIT)) f ? window.open(u.url) : n ? c(Object(r.b)(u.url)) : await c(p.route.action(u, !0));
				else if (p.match && p.match.params && p.match.params.subredditName) {
					const {
						subredditName: e
					} = p.match.params, t = `/r/${e}/`;
					if (f) window.open(t);
					else if (n) c(Object(r.b)(t));
					else {
						const n = Object(O.a)(e, a.bb.HOT);
						await c(Object(r.b)(t)), c(Object(s.subredditDataRequested)(n, e, {}))
					}
				}
			}, C = () => async (e, t) => {
				const n = t();
				Object(E.d)(n) ? window.location.replace("https://reddithelp.com/hc/articles/360043034252") : (e(d.n({
					title: c.b()
				})), Object(_.S)(n) || await e(v.s()))
			}, j = () => async (e, t) => {
				const n = t();
				Object(E.d)(n) ? window.location.replace("https://reddithelp.com/hc/articles/360043034252") : e(d.n({
					title: c.b()
				}))
			}, A = e => async (t, r) => {
				const s = r();
				t(d.n({
					title: c.k()
				})), Object(_.S)(s) || await t(v.s());
				const a = Object(_.S)(s);
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
					const r = [t(s.z()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(r);
					const l = Object(d.m)(n());
					l ? (await t(Object(a.b)(Object(i.e)(l))), t(u()), Object(o.o)(n(), !0)) : Object(c.a)(t, n())
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
				b = Object(r.a)(u),
				h = Object(r.a)(p),
				y = () => async (e, t, n) => {
					let {
						apiContext: r,
						gqlContext: l
					} = n;
					const u = t(),
						p = Object(i.m)(u),
						y = Object(d.b)(u);
					if (p && y.success) return;
					e(f());
					const m = await Object(s.a)(r());
					if (!m.ok || !m.body) return void e(h(m.error));
					if (!m.body.account) return void Object(o.a)(e, u);
					const g = await (e => Object(a.a)(e, {
						...c
					}))(l());
					if (!g.ok) return void e(h());
					const v = m.body,
						E = g.body;
					e(b({
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
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "o", (function() {
				return O
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				a = "CREATE_COLLECTION_FAILED",
				c = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				o = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				i = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				f = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				h = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				y = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				m = "REORDER_COLLECTION_PENDING",
				g = "REORDER_COLLECTION_SUCCESS",
				v = "REORDER_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_LAYOUT_PENDING",
				_ = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				O = "UPDATE_COLLECTION_LAYOUT_FAILED"
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
				return m
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
				b = (Object(r.a)(o), Object(r.a)(i)),
				h = Object(r.a)(d),
				y = Object(r.a)(l),
				m = (Object(r.a)(u), Object(r.a)(p), Object(r.a)(f), e => {
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
									e(b({
										product: d,
										badges: t,
										userOwnedBadges: s,
										wallet: n.body.wallet
									}))
								}
							} else e(h({
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
				return h
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			}));
			var r = n("./src/lib/asyncActions/index.ts"),
				s = n("./src/lib/constants/euCookiePolicy.ts"),
				a = n("./src/lib/reCaptchaEnterprise/index.ts"),
				c = n("./src/lib/sentry/index.ts");

			function o(e) {
				return t => async (n, r, s) => {
					const a = r();
					if (e(a)) return t(n, r, s)
				}
			}
			var i = n("./node_modules/lodash/every.js"),
				d = n.n(i),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/featureFlags/utils.ts"),
				p = n("./src/reddit/helpers/chooseVariant/index.ts");
			const f = e => l.d.reCaptchaEnterprise(e),
				b = (e, t) => !!Object(p.c)(e, {
					experimentEligibilitySelector: Object(u.d)(Object(u.b)(...s.c)),
					experimentName: t
				}),
				h = Object(r.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				y = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return o(t => d()([f(t), b(t, e), e => e.tracking.reCaptchaEnterprise.load === r.a.New], Boolean))(async e => {
						e(h.requested());
						try {
							await a.b.loadScript(), e(h.succeeded())
						} catch (n) {
							if (e(h.failed()), !t) throw n;
							c.c.withScope(e => {
								Object(c.a)(e, {
									serverLogging: !1
								}), c.c.captureException(n)
							})
						}
					})
				},
				m = Object(r.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				g = e => o(t => d()([f(t), b(t, e.experiment), e => e.tracking.reCaptchaEnterprise.load === r.a.Succeeded], Boolean))(async t => {
					t(m.requested());
					try {
						const n = await a.b.execute({
							action: e.action,
							fast: e.fast
						});
						return t(m.succeeded({
							token: n
						})), n
					} catch (n) {
						if (t(m.failed()), e.catchAndLogError) return c.c.withScope(e => {
							Object(c.a)(e, {
								serverLogging: !1
							}), c.c.captureException(n)
						}), "";
						throw n
					}
				}),
				v = Object(r.b)("SEND_RECAPTCHA_TOKEN")
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
				return b
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
				b = "RECAP_ABILITY_CARD_AVATAR_TOGGLE"
		},
		"./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_PENDING",
				s = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_SUCCESS",
				a = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_FAILURE"
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
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			const d = "SITEWIDE_RULES_LOADED",
				l = Object(s.a)(d),
				u = () => async (e, t, n) => {
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
							n = p(t.sitewide_rules);
						e(l(n))
					}
				}, p = e => {
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
				return E
			})), n.d(t, "b", (function() {
				return O
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				a = n("./src/lib/constants/index.ts"),
				c = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/extractQueryParams/index.ts"));

			function o() {
				return Object(c.a)(window.location.href)
			}
			var i = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = n("./src/reddit/models/Search/index.ts");
			var f = n("./src/lib/makeGqlRequest/index.ts"),
				b = n("./src/redditGQL/operations/TrendingSearches.json"),
				h = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			var y = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				m = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/helpers/chooseVariant/index.ts");
			var v = n("./src/reddit/selectors/telemetry.ts");
			const E = "PAGE__TRENDING_SEARCHES_LOADED",
				_ = Object(r.a)(E),
				O = e => async (t, n, r) => {
					let {
						apiContext: c,
						gqlContext: E
					} = r;
					const O = n();
					if (function(e) {
							return Object(g.c)(e, {
								experimentEligibilitySelector: g.a,
								experimentName: m.Vc
							}) === m.Zd
						}(O) && e === p.d.dropdown) {
						const n = (e => {
							var t, n;
							const {
								data: r
							} = e;
							return (null === (t = r.recommendation) || void 0 === t ? void 0 : t.trendingQueries) && 0 !== (null === (n = r.recommendation.trendingQueries.edges) || void 0 === n ? void 0 : n.length) ? r.recommendation.trendingQueries.edges.reduce((e, t) => {
								var n, r, a, c;
								if ("TrendingSearchElement" === (null === (n = null == t ? void 0 : t.node) || void 0 === n ? void 0 : n.__typename)) {
									const {
										contextPostInfo: n,
										queryString: o,
										id: i
									} = null == t ? void 0 : t.node;
									e.push({
										id: Object(s.a)(),
										post: n ? Object(h.f)(n) : null,
										rawQuery: o,
										searchQuery: i,
										section: p.c.trending,
										subredditInfo: "SubredditPost" === (null == n ? void 0 : n.__typename) && (null == n ? void 0 : n.subreddit) ? {
											icon: (null === (r = n.subreddit.styles) || void 0 === r ? void 0 : r.icon) || (null === (c = null === (a = n.subreddit.styles) || void 0 === a ? void 0 : a.legacyIcon) || void 0 === c ? void 0 : c.url),
											displayText: "r/" + n.subreddit.name
										} : null,
										type: p.b.text
									})
								}
								return e
							}, []) : []
						})((await (async (e, t, n) => {
							const r = {
								searchInput: {
									queryId: t,
									originPageType: n,
									ad: o().get("ad")
								}
							};
							return await Object(f.a)(e, {
								...b,
								variables: r
							}, {
								traceRequestName: "search_trending"
							})
						})(E(), v.hb(O, y.a.SERP), O.platform.currentPage ? v.x(O.platform.currentPage) : void 0)).body);
						if (n.length > 0) return t(_({
							items: n,
							subplacement: e
						})), n
					} else {
						const n = await ((e, t) => {
							const n = {
								withAds: 1,
								ad: o().get("ad"),
								subplacement: t
							};
							return Object(i.a)(Object(d.a)(e, [l.a]), {
								endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
								method: a.ob.GET,
								data: n
							})
						})(c(), e);
						if (n.ok) {
							const r = (e => {
								const t = [];
								if (e.body && e.body.trending_searches) {
									const n = e.body.trending_searches.length;
									for (let r = 0; r < n; r++) {
										const n = e.body.trending_searches[r],
											a = n.results.data.children.length > 0 ? n.results.data.children[0].data : null,
											c = {
												id: Object(s.a)(),
												post: a ? Object(u.a)(a) : null,
												rawQuery: n.query_string,
												searchQuery: n.display_string,
												section: p.c.trending,
												isWhitelisted: n.is_subreddit_whitelisted,
												subredditInfo: a ? {
													icon: a.sr_detail.community_icon || a.sr_detail.icon_img,
													displayText: a.sr_detail.display_name_prefixed
												} : null,
												subredditOccurrences: n.subreddit_occurences - 1,
												type: p.b.text
											};
										t.push(c)
									}
								}
								return t
							})(n);
							return t(_({
								items: r,
								subplacement: e
							})), r
						}
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
				var f, b;
				if (i().subreddits.carousel.pending) return;
				const h = await ((e, t) => Object(s.a)(e, {
					...a,
					variables: t
				}))(u(), {
					subredditIds: e,
					hasNames: t || !1,
					subredditNames: n || [],
					hasPostIds: r || !1,
					postIds: c || []
				});
				if (!h.ok) return;
				const y = h.body;
				y.data && y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && o(d(null === (f = y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === f ? void 0 : f.reduce((e, n) => ((null == n ? void 0 : n.id) && (e[t ? n.name.toLowerCase() : n.id] = n), e), {}))), (null === (b = y.data) || void 0 === b ? void 0 : b.postsInfoByIds) && o(p(y.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
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
				return h
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
				b = Object(r.a)(p),
				h = () => async (e, t, n) => {
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
					} else e(b({
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
				return b
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
				b = e => async (t, n, r) => {
					const i = e.toLowerCase(),
						d = n(),
						{
							api: l,
							topContent: b
						} = d.subreddits;
					if (l.topContent.pending[i] || b[i]) return;
					t(u({
						subredditName: i
					})), t(Object(s.z)());
					const h = await ((e, t) => Object(a.a)(e, {
						...c,
						variables: t
					}))(r.gqlContext(), {
						subredditName: i
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const n = Object(o.c)(e);
							n && t(p({
								...n,
								subredditName: i
							}))
						}
					} else t(f({
						subredditName: i,
						error: h.error
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
				return b
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
				b = (e, t, n) => async (a, c) => {
					const f = c(),
						b = Object(i.F)(),
						g = Date.now(),
						v = b && g - b < 18e4,
						E = Object(u.c)(f, {
							postId: e
						}),
						_ = f.upvotePromptCountPerSess,
						O = (() => {
							const e = Object(i.E)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !E || v || _ >= 4 || O.length >= 1) return;
					const I = y(f, t);
					if (!I) return;
					a(Object(o.f)({
						text: I,
						buttonText: r.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${s.a.assetPath}/img/snoo-upvote.png`,
						duration: u.a,
						buttonAction: h(e),
						onClose: () => Object(p.a)((e => ({
							source: l,
							action: "click",
							noun: "close",
							...Object(d.q)(e)
						}))(f))
					}));
					const S = [...O, Date.now()].slice(Math.max(O.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: l,
						action: "view",
						noun: l,
						...Object(d.q)(e)
					}))(f)), Object(i.Kb)(), Object(i.Jb)(S), a(m()), n && n()
				}, h = e => async (t, n) => {
					Object(p.a)((e => ({
						source: l,
						action: "click",
						noun: "upvote",
						...Object(d.q)(e)
					}))(n())), Object(u.c)(n(), {
						postId: e
					}) && t(Object(c.ib)(e))
				}, y = (e, t) => {
					return t ? r.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : r.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})
				}, m = Object(a.a)(f)
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
				return m
			})), n.d(t, "c", (function() {
				return g
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
				b = Object(s.a)(u),
				h = Object(s.a)(p),
				y = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					var l, u;
					if (n().blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const p = await Object(o.a)(d(), e),
						m = `error-block-${e}`;
					if (p.ok) p.body.name && t(b(p.body)), p.body.id && t(Object(a.f)(p.body.id)), t(c.g(m)), t(c.f({
						kind: i.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: p.error ? p.error.type : "Unknown error",
							username: e
						};
						t(h(n)), "REBLOCK_RATE_LIMIT" === (null === (l = p.body) || void 0 === l ? void 0 : l.reason) ? t(c.f({
							id: m,
							kind: i.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: y(e)
						})) : "BLOCK_MAXIMUM" === (null === (u = p.body) || void 0 === u ? void 0 : u.reason) ? t(c.f({
							id: m,
							kind: i.b.Error,
							text: r.fbt._("You cannot block more than 1000 users.", null, {
								hk: "1G5SbN"
							})
						})) : t(c.f({
							id: m,
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
				}, m = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", v = "USER_UNBLOCK__FAILED", E = Object(s.a)(m), _ = Object(s.a)(g), O = Object(s.a)(v), I = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const u = n(),
						p = Object(d.m)(u),
						f = p ? p.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					f && (t(E({
						name: e
					})), (await Object(o.c)(l(), f, e)).ok ? (t(_({
						name: e
					})), b && b.id && t(Object(a.h)(b.id)), t(c.f({
						kind: i.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(c.f({
						kind: i.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(O({
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
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "h", (function() {
				return _
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
				b = e => async (t, n, s) => {
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
				}, h = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", m = "USER_UNWHITELIST__FAILED", g = Object(s.a)(h), v = Object(s.a)(y), E = Object(s.a)(m), _ = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					t(g({
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
				return b
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
				b = e => {
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
					thumbnailContainerClassName: b,
					url: h,
					usePreview: y
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.thumbnailContainer, t)
				}, s.a.createElement(c.b, {
					className: Object(a.a)(i.a.thumbnail, n),
					containerClassName: b,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: p,
					templatePlaceholderImage: f,
					url: p ? void 0 : h,
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
				b = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				m = n.n(y);
			const g = Object(l.a)(p.a),
				v = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(i.a)(e => {
				const t = Object(c.e)(h.d),
					n = v,
					i = Object(c.d)(),
					l = e => {
						e.stopPropagation(), i(Object(d.h)({
							tooltipId: n
						}))
					};
				return Object(s.useEffect)(() => {
					e.isOpen ? setTimeout(() => Object(f.a)(), 500) : setTimeout(() => Object(f.b)(), 500)
				}, [i, e.isOpen]), t ? a.a.createElement(g, {
					className: m.a.Tooltip,
					isOpen: e.isOpen,
					targetPosition: ["left", "top"],
					tooltipPosition: ["right", "top"],
					tooltipId: n,
					componentWrapper: t => a.a.createElement("div", {
						className: Object(o.a)(m.a.Overlay, {
							[m.a.isOverlayOpen]: e.isOpen
						}),
						onClick: l
					}, a.a.createElement("div", {
						className: Object(o.a)(m.a.DropdownPadding, {
							[m.a.isOverlayOpen]: e.isOpen
						}),
						onClick: l
					}), t)
				}, a.a.createElement("div", {
					className: m.a.TooltipContent
				}, a.a.createElement("div", {
					className: m.a.Title
				}, r.fbt._("Welcome to your community, r/{subredditName}!", [r.fbt._param("subredditName", t)], {
					hk: "e3rbC"
				})), a.a.createElement("div", {
					className: m.a.Description
				}, r.fbt._("We’ll walk you through how to get started here, and you can get more tips and advice through Reddit’s", null, {
					hk: "lffxe"
				}), " ", a.a.createElement("a", {
					className: m.a.modLink,
					style: {
						color: Object(b.a)(e).linkText
					},
					href: "https://www.reddit.com/r/ModCertification101/",
					rel: "noopener noreferrer",
					target: "_blank"
				}, r.fbt._("Mod Certification Program", null, {
					hk: "1FTpvR"
				})), "."), a.a.createElement(u.t, {
					className: m.a.Button,
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
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/HumanDate/index.tsx"),
				a = n("./src/lib/timeUntil/index.ts"),
				c = n("./node_modules/react/index.js"),
				o = n.n(c);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? i._("Voting closed {timeAgo}", [i._param("timeAgo", o.a.createElement(s.d, {
					seconds: e.poll.endsAt / r.Xb
				}))], {
					hk: "3OERID"
				}) : Object(a.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				blur: "_1Y3R-LNfq0EOkZUcePSt1j",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return M
			})), n.d(t, "a", (function() {
				return z
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = n("./src/reddit/actions/post.ts"),
				g = n("./src/reddit/constants/adEvents.ts"),
				v = n("./src/reddit/helpers/path/index.ts"),
				E = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				O = n("./src/reddit/hooks/usePostContext.ts"),
				I = n("./src/reddit/hooks/useTheme.ts"),
				S = n("./src/reddit/icons/fonts/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				D = n("./src/reddit/models/Media/index.ts"),
				w = n("./src/reddit/models/Post/index.ts"),
				C = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				A = n("./src/lib/getShortenedLink.ts"),
				P = n("./src/reddit/components/FlairWrapper/index.tsx"),
				R = n("./node_modules/fbt/lib/FbtPublic.js"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				L = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				x = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				k = n.n(x);
			const U = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var M, F = Object(o.b)(U)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return Object(_.a)() ? null : c.a.createElement("div", {
						className: Object(u.a)(e.className, k.a.proposalMetaData)
					}, c.a.createElement("span", null, R.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [R.fbt._param("count", Object(N.a)(r)), R.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && c.a.createElement(L.a, {
						className: k.a.proposalExpiry,
						poll: t
					}))
				})),
				B = n("./src/reddit/components/SEOTitle/index.tsx"),
				G = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				q = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				V = n("./src/telemetry/models/Outbound.ts"),
				W = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				Q = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				K = n("./src/reddit/components/PostTitle/index.m.less"),
				Y = n.n(K);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(M || (M = {}));
			const z = e => {
					let {
						size: t,
						titleColor: n,
						titleType: r,
						nowrap: s,
						children: a,
						className: o,
						redditStyle: i,
						shouldBlurTitle: d
					} = e;
					const l = Object(I.a)();
					let p = "";
					switch (t) {
						case M.ExtraLarge:
							p = Y.a.ExtraLarge;
							break;
						case M.Large:
							p = Y.a.Large;
							break;
						case M.Medium:
							p = Y.a.Medium;
							break;
						case M.Small:
							p = Y.a.Small;
							break;
						case M.ExtraSmall:
							p = Y.a.ExtraSmall;
							break;
						case M.Metadata:
							p = Y.a.Metadata
					}
					return c.a.createElement("div", {
						className: Object(u.a)(Y.a.Title, o, p, {
							[Y.a.isNoWrap]: s,
							[Y.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(j.a)({
								redditStyle: i,
								theme: l
							}).titleText
						}
					}, r ? c.a.createElement(B.b, {
						type: r
					}, a) : a)
				},
				X = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: r,
						children: s,
						...a
					} = e;
					return c.a.createElement(i.a, $({}, a, {
						className: Object(u.a)(t, Y.a.styledLink, {
							[Y.a.isVisitedEnabled]: !n
						})
					}), s)
				},
				J = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: r,
						children: s
					} = e;
					return c.a.createElement("div", {
						className: Object(u.a)(Y.a.titleContainer, r, {
							[Y.a.isNoWrap]: n,
							[Y.a.isVisitedEnabled]: !t
						})
					}, s)
				},
				Z = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(f.r)(e, {
							pageLayer: n
						})
					},
					isNsfwBlurSubreddit: q.e,
					shouldOpenPostInNewTab: H.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: n
					} = t, r = Object(o.d)(), s = Object(E.a)(), a = Object(o.e)(G.b), i = Object(o.e)(G.c), d = e => {
						(a || i) && (e.preventDefault(), r(Object(m.Z)(Object(v.b)(t.permalink), t.id))), t.isSponsored && Object(w.A)(t) && r(Object(m.y)(t, g.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return c.a.createElement(J, {
						nowrap: e.nowrap
					}, c.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return c.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, c.a.createElement(te, e)); {
						const r = t.permalink,
							a = e.isCommentPermalink ? Object(v.b)(r) : Object(y.a)(r, void 0, s);
						return c.a.createElement(J, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n && !Object(w.A)(t) ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? c.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, c.a.createElement(te, t)) : c.a.createElement(te, t)
						})(t, e) : c.a.createElement(X, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a,
							onClick: d
						}, c.a.createElement(te, e)))
					}
				},
				te = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const a = e.isCommentsPage ? B.a.PostComments : B.a.PostItem,
						o = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return c.a.createElement(z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: o,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && c.a.createElement(P.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), s)
				},
				ne = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: r
					} = e, {
						isSponsored: s
					} = r, a = e.isCommentsPage ? V.SourceElement.PostLink : V.SourceElement.ListingPostLink;
					if (Object(_.a)()) return null;
					if (n && r.isNSFW) return null;
					const o = !t && !e.isCrosspost && e.size !== M.Large && !r.isSponsored && (r.source || r.media && (r.media.type === D.o.GIFVIDEO || r.media.type === D.o.IMAGE || r.media.type === D.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return c.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(D.E)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: a
						}, Object(A.a)(r), !r.isSponsored && c.a.createElement(S.a, {
							name: "external_link",
							className: Y.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== M.Large && e.size !== M.ExtraLarge) return c.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: a
					}, Object(A.a)(r), !r.isSponsored && c.a.createElement(S.a, {
						name: "external_link",
						className: Y.a.outboundLinkIcon
					}));
					return null
				};
			class re extends c.a.Component {
				getDynamicStyleTags() {
					return c.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${Y.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(j.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(j.a)(this.props).titleText,Object(j.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(s.c)(.45,Object(j.a)(this.props).bodyText,Object(j.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: s,
						isOverlay: a,
						poll: o,
						post: i,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: p
					} = this.props, f = n === T.b.Left, b = Object(P.b)(i), {
						leftFlair: h,
						rightFlair: y
					} = Object(W.a)({
						flair: b,
						isFlairPositionedLeft: f,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), m = !a && !s && !t, g = m && h && h.length > 0, v = m && y && y.length > 0;
					return c.a.createElement("div", {
						className: Object(u.a)(Y.a.Component, e, i.id),
						ref: this.props.innerRef,
						"data-adclicklocation": Q.a.TITLE,
						onClick: p
					}, !d && g && c.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), !Object(C.b)(i) && c.a.createElement(ee, $({}, this.props, {
						leftFlair: d ? h : void 0
					})), o && c.a.createElement(F, {
						className: Y.a.pollMeta,
						pollId: o.id
					}), c.a.createElement(ne, this.props), v && c.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: y,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), c.a.createElement("div", {
						className: Y.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${r.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = c.a.memo((function(e) {
				const t = Object(f.ib)(),
					n = Object(f.x)(t),
					r = Object(O.a)(),
					s = Object(o.e)(s => Z(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(I.a)(),
					i = Object(p.b)();
				return r ? c.a.createElement(re, $({
					pageLayer: t,
					isCommentPermalink: n
				}, r, s, e, {
					theme: a,
					sendEvent: i
				})) : null
			}))
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
				return ve
			})), n.d(t, "a", (function() {
				return Ee
			})), n.d(t, "d", (function() {
				return _e
			})), n.d(t, "c", (function() {
				return Ie
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
				f = n("./src/reddit/helpers/clickSourceData/index.ts"),
				b = n("./src/reddit/helpers/getSearchUrl/index.ts");
			var h = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				y = n("./src/reddit/helpers/trackers/searchResults.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/models/Search/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts");
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

			function O(e) {
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
				}) : s.a.createElement(g.a, {
					name: "community",
					isFilled: !n,
					className: Object(o.a)(r.defaultCommunityIcon, n && r.mNightmode)
				})
			}
			var I = n("./src/reddit/components/SearchDropdown/index.m.less"),
				S = n.n(I);
			const T = Object(c.a)(p.b);

			function D(e) {
				let {
					activeTooltipId: t,
					className: n,
					focusedItem: a,
					nightmode: c,
					recentSearch: p,
					searchOriginPage: _,
					indexOfItem: I,
					toggleTooltip: D,
					onClearSearchQuery: w,
					onRemoveRecentSearch: C,
					onUpdateSearchQuery: j,
					onSendSearchClickRecentEvent: A,
					onCloseDropdown: P
				} = e;
				var R;
				const N = Object(m.a)();
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: p.searchQuery,
						originElement: E.a.SearchBar,
						rawQuery: p.rawQuery || p.searchQuery,
						searchQuery: p.searchQuery,
						structureType: E.c.Recent,
						telemetrySource: h.a.Typeahead
					};
					N(Object(y.A)(y.a.RECENT, e, I, I, p))
				}, []);
				const L = e => {
						var t;
						const n = (null === (t = e.displayInfo) || void 0 === t ? void 0 : t.subredditOrProfileName) || e.searchQuery;
						return e.subredditOrProfileRestrictedName ? `${function(e){return e.split("/").slice(-3,-1).join("/")}(e.subredditOrProfileRestrictedName)} ${n}` : n
					},
					{
						url: x,
						qs: k
					} = Object(b.a)({
						searchItem: p,
						searchOptions: {
							source: u.a.Recent
						}
					}),
					U = L(p);
				let M;
				a && (M = L(a));
				return s.a.createElement(d.a, {
					"aria-label": U,
					className: Object(o.a)(S.a.listItem, S.a.spaceBetween, n, !((null == a ? void 0 : a.section) !== v.c.recent || M !== U) && S.a.backgroundFocused),
					onClick: () => {
						p.isTypeaheadSuggestion ? w() : j(p.searchQuery), A(p.searchQuery, p, I), P()
					},
					key: U,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: x && Object(l.a)(x) || "",
						search: k,
						state: Object(f.c)(f.a.SEARCH_DROPDOWN, _, p.isProfile || p.isSubreddit)
					}
				}, s.a.createElement("div", {
					className: S.a.flexAlignCenter
				}, p.displayInfo && p.isTypeaheadSuggestion ? s.a.createElement(O, {
					searchItem: p,
					nightmode: c,
					styles: S.a
				}) : s.a.createElement(g.a, {
					name: "search",
					className: S.a.searchIcon
				}), s.a.createElement("div", {
					className: S.a.column
				}, s.a.createElement("p", {
					className: Object(o.a)(S.a.marginLeft2, S.a.titleFontH5)
				}, U), (null === (R = p.displayInfo) || void 0 === R ? void 0 : R.isQuarantined) ? s.a.createElement("p", {
					className: Object(o.a)(S.a.marginLeft2, S.a.metaTextFont, S.a.metaTextColor, S.a.paddingTop1)
				}, i.fbt._("Quarantined", null, {
					hk: "4t1Oq4"
				})) : null)), s.a.createElement("div", {
					className: S.a.flexAlignCenter,
					onMouseEnter: () => D(null != U ? U : null),
					onMouseLeave: () => D(null),
					id: U
				}, s.a.createElement(g.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), C(p)
					},
					"data-testid": U
				}), s.a.createElement(T, {
					className: S.a.fixedTextTooltip,
					isOpen: t === U,
					text: i.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: U,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var w = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				C = n("./src/reddit/components/PostTitle/index.tsx"),
				j = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				A = n("./src/reddit/constants/adEvents.ts"),
				P = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				R = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				N = n("./src/reddit/helpers/correlationIdTracker.ts"),
				L = n("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				x = n("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function k(e) {
				let {
					className: t,
					focusedItem: n,
					id: r,
					trendingItem: c,
					searchOriginPage: p,
					onUpdateSearchQuery: y,
					onCloseDropdown: m,
					onSetRecentSearch: _,
					fireAdPixelsOfType: O
				} = e;
				const I = Object(a.d)(),
					T = !(!c.post || !c.post.isSponsored),
					{
						url: D,
						qs: k
					} = Object(b.a)({
						searchItem: c,
						searchOptions: {
							source: T ? u.a.PromotedTrend : u.a.Trending
						}
					}),
					U = s.a.createElement(d.a, {
						id: r,
						"aria-label": c.searchQuery,
						className: Object(o.a)(S.a.listItem, S.a.borderBottom, S.a.spaceBetween, t, !((null == n ? void 0 : n.section) !== v.c.trending || c.searchQuery !== n.searchQuery) && S.a.backgroundFocused),
						onClick: () => {
							y(c.searchQuery);
							const e = (() => {
								const {
									post: e,
									subredditInfo: t,
									subredditOccurrences: n,
									...r
								} = c;
								return r
							})();
							if (_(e), Object(N.d)(N.a.SearchResults), L.a.set(E.a.SearchDropdown), (e => I((t, n) => Object(x.o)({
									state: n(),
									trendingSearch: e,
									telemetrySource: h.a.Typeahead
								})))(c), T) {
								const {
									post: e
								} = c;
								e && O(e, A.a.Click)
							}
							m()
						},
						key: `trending-${c.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: D && Object(l.a)(D) || "",
							search: k,
							state: Object(f.c)(f.a.SEARCH_DROPDOWN, p)
						}
					}, s.a.createElement("div", null, T && s.a.createElement("div", {
						className: Object(o.a)(S.a.active, S.a.labelsFont, S.a.marginBottom2)
					}, i.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), s.a.createElement("div", null, s.a.createElement(g.a, {
						name: "popular",
						className: S.a.trendingIcon
					}), s.a.createElement("span", null, s.a.createElement(C.a, {
						className: S.a.marginLeft2,
						redditStyle: !0,
						size: C.b.Small
					}, c.searchQuery)), c.post && s.a.createElement("div", {
						className: Object(o.a)(S.a.postTitle, S.a.titleFontH5, S.a.trendingSpacer)
					}, c.post.title)), c.subredditInfo && s.a.createElement(P.a, {
						className: Object(o.a)(S.a.metaTextColor, S.a.trendingSpacer, !c.post && S.a.marginTop2),
						iconUrl: c.subredditInfo.icon || void 0,
						suffix: i.fbt._("{subreddit name} and more", [i.fbt._param("subreddit name", c.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), c.post && Object(R.a)(c.post) && s.a.createElement(w.a, {
						post: c.post,
						removeLink: !0,
						usePreview: T
					}));
				return T ? s.a.createElement(j.a, {
					post: c.post
				}, U) : U
			}
			var U = n("./src/reddit/selectors/user.ts"),
				M = n("./src/lib/prettyPrintNumber/index.ts"),
				F = n("./src/reddit/components/Flair/index.tsx"),
				B = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				G = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				q = n("./src/reddit/models/Flair/index.ts"),
				H = n("./src/reddit/constants/experiments.ts"),
				V = n("./src/reddit/selectors/experiments/search/searchSingleVariant.ts");

			function W(e) {
				let {
					className: t,
					focusedItem: n,
					item: c,
					indexOfItem: l,
					nightmode: u,
					searchOriginPage: p,
					onSendSearchClickTypeaheadEvent: g,
					onSetRecentSearch: v,
					onClearSearchQuery: _,
					onCloseDropdown: I,
					relativePosition: T
				} = e;
				var D, w, C, j, A, P;
				const R = Object(a.e)(e => Object(V.a)(e, H.Lf)),
					N = Object(m.a)(),
					x = (null === (D = c.displayInfo) || void 0 === D ? void 0 : D.karma) || 0,
					k = (null === (w = c.displayInfo) || void 0 === w ? void 0 : w.subscribers) || 0,
					U = c.isProfile ? i.fbt._({
						"*": "{karma count} karma",
						_1: "1 karma"
					}, [i.fbt._plural(x, "karma count", Object(M.b)(x))], {
						hk: "2KlIGI"
					}) : i.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [i.fbt._plural(k, "members count", Object(M.b)(k))], {
						hk: "1uMCes"
					});
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: c.searchQuery,
						isTypeaheadActive: !0,
						originElement: E.a.SearchDropdown,
						rawQuery: c.rawQuery || c.searchQuery,
						searchQuery: c.searchQuery,
						structureType: E.c.Search,
						telemetrySource: h.a.Typeahead
					};
					N(Object(y.A)(y.a.TYPEAHEAD, e, l, T, c))
				}, []);
				const W = (null === (C = c.displayInfo) || void 0 === C ? void 0 : C.subredditOrProfileName) || "";
				return s.a.createElement(d.a, {
					"aria-label": W,
					className: Object(o.a)(S.a.listItem, S.a.typeaheadPadding, R && S.a.typeaheadByTypePadding, t, !((null == n ? void 0 : n.id) !== c.id) && S.a.backgroundFocused),
					onClick: () => {
						L.a.set(E.a.SearchDropdown), v(c), g(c.searchQuery, c, l, T), _(!1), I(!1), Object(B.e)(f.a.SEARCH_DROPDOWN)
					},
					key: W,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: Object(b.b)(c),
						state: Object(f.c)(f.a.SEARCH_DROPDOWN, p)
					}
				}, s.a.createElement(O, {
					searchItem: c,
					nightmode: u,
					styles: S.a
				}), s.a.createElement("div", null, (null === (j = c.displayInfo) || void 0 === j ? void 0 : j.subredditOrProfileName) && s.a.createElement("div", {
					className: Object(o.a)(S.a.marginLeft2, S.a.titleFontH5)
				}, c.displayInfo.subredditOrProfileName), s.a.createElement("div", {
					className: Object(o.a)(S.a.flexAlignCenter, S.a.marginLeft2, S.a.flexWrap)
				}, (null === (A = c.displayInfo) || void 0 === A ? void 0 : A.isQuarantined) && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(o.a)(S.a.metaTextColor, S.a.metaTextFont)
				}, i.fbt._("Quarantined", null, {
					hk: "4t1Oq4"
				})), s.a.createElement(G.a, {
					className: Object(o.a)(S.a.metaDataSeparator)
				})), s.a.createElement("div", {
					className: Object(o.a)(S.a.metaTextColor, S.a.metaTextFont)
				}, c.isProfile ? i.fbt._("User", null, {
					hk: "3KLiZZ"
				}) : i.fbt._("Community", null, {
					hk: "18dohI"
				})), x || k ? s.a.createElement(s.a.Fragment, null, s.a.createElement(G.a, {
					className: Object(o.a)(S.a.metaDataSeparator)
				}), s.a.createElement("div", {
					className: Object(o.a)(S.a.metaTextColor, S.a.metaTextFont)
				}, U)) : null, (null === (P = c.displayInfo) || void 0 === P ? void 0 : P.isNSFW) && s.a.createElement(F.c, {
					className: S.a.marginLeft1,
					flair: {
						type: q.f.Nsfw,
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
				const p = Object(a.e)(U.mb),
					f = [];
				let b = [];
				p ? t.forEach(e => {
					var t;
					(null === (t = e.displayInfo) || void 0 === t ? void 0 : t.isNSFW) ? f.push(e): b.push(e)
				}) : b = t;
				const h = b.length,
					y = [...b, ...f][n];
				return s.a.createElement(s.a.Fragment, null, b.map((e, t) => s.a.createElement(W, {
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
				})), s.a.createElement(X, {
					nsfwTypeaheads: f,
					focusedItem: y,
					searchItem: c,
					startPosition: h,
					onCloseDropdown: d,
					onClearSearchQuery: i,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: r,
					searchOriginPage: o
				}))
			}
			var K = n("./src/reddit/hooks/useLocalStorage.ts");
			var Y = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				$ = n("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = e => {
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
				const b = Object(m.a)(),
					h = Object(a.e)(e => Object(V.a)(e, H.Lf)),
					g = Object(a.e)(U.mb),
					{
						nsfwTypeaheadExpanded: v,
						setNsfwTypeaheadExpanded: E
					} = (() => {
						const [e, t] = Object(K.a)("nsfw_typeahead_expanded", !1);
						return {
							get nsfwTypeaheadExpanded() {
								return e
							},
							setNsfwTypeaheadExpanded: e => {
								t(e)
							}
						}
					})();
				return g && t.length > 0 ? s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
					className: Object(o.a)(S.a.nsfwSection, !v && S.a.borderBottom),
					"data-testid": "typeahead_nsfw_toggle",
					onClick: () => (e => {
						const t = v ? y.a.COLLAPSE_NSFW : y.a.EXPAND_NSFW;
						b(Object(y.t)(t, e)), E(!v)
					})(r)
				}, s.a.createElement("p", {
					className: h ? S.a.titleFontH5 : void 0
				}, z._("NSFW results", null, {
					hk: "17BDhb"
				})), s.a.createElement("p", {
					className: S.a.listItemButton
				}, v ? s.a.createElement(s.a.Fragment, null, z._("Collapse", null, {
					hk: "4nBun"
				}), s.a.createElement($.a, {
					className: S.a.chevron
				})) : s.a.createElement(s.a.Fragment, null, z._("Expand", null, {
					hk: "11NQXp"
				}), s.a.createElement(Y.a, {
					className: S.a.chevron
				})))), v && t.map((e, t) => s.a.createElement(W, {
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

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ee(e) {
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
					className: S.a.section
				}, s.a.createElement("p", {
					className: S.a.sectionTitle
				}, Z._("Communities", null, {
					hk: "3GTB0"
				})), t.communities.map((e, t) => s.a.createElement(W, J({
					key: e.id,
					indexOfItem: t,
					relativePosition: t,
					item: e
				}, p)))), t.people.length > 0 && s.a.createElement("div", {
					className: S.a.section
				}, s.a.createElement("p", {
					className: S.a.sectionTitle
				}, Z._("People", null, {
					hk: "3qVb3c"
				})), t.people.map((e, n) => s.a.createElement(W, J({
					key: e.id,
					indexOfItem: t.communities.length + n,
					relativePosition: n,
					item: e
				}, p)))), s.a.createElement(X, J({
					nsfwTypeaheads: t.nsfw,
					searchItem: c,
					startPosition: n.length - t.nsfw.length
				}, p)))
			}
			var te = n("./src/reddit/constants/zIndex.ts"),
				ne = n("./src/reddit/controls/Dropdown/index.tsx"),
				re = n("./src/reddit/selectors/searchResults.ts"),
				se = n("./node_modules/lodash/pick.js"),
				ae = n.n(se),
				ce = n("./node_modules/history/esm/history.js"),
				oe = n("./node_modules/react-router-redux/es/index.js"),
				ie = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				de = n.n(ie),
				le = n("./src/reddit/constants/parameters.ts"),
				ue = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				pe = n("./src/reddit/controls/Search/SearchScopePill/index.tsx"),
				fe = n("./src/reddit/hooks/usePageLayer.ts"),
				be = n("./src/reddit/selectors/platform.ts");
			const he = "search-trigger-item";

			function ye(e) {
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
					O = Object(m.a)(),
					I = Object(fe.a)(),
					T = Object(ue.bb)(I),
					D = Object(a.d)(),
					w = Object(a.e)(re.j),
					C = Object(a.e)(be.r),
					j = Object(a.e)(be.d),
					A = Object(pe.c)(w),
					P = Object(u.e)({
						...ae()(T || {}, le.y),
						q: n.searchQuery,
						restrict_sr: w.enabled ? "1" : ""
					});
				return Object(r.useEffect)(() => {
					O(Object(y.u)(P, c, I || void 0))
				}, []), s.a.createElement("button", {
					type: "submit",
					onClick: function(e) {
						L.a.set(E.a.SearchDropdown), O(Object(y.o)(y.a.FULL_SEARCH_BUTTON, P, h.a.Typeahead, I || void 0)), p(e),
							function() {
								const {
									url: e,
									qs: t
								} = Object(b.a)({
									searchItem: n,
									searchOptions: {},
									activeSearchScope: w
								}), r = {
									...Object(f.c)(f.a.SEARCH_DROPDOWN, d),
									routeName: C,
									subredditName: j
								};
								D(Object(oe.b)(Object(ce.c)({
									pathname: e,
									search: t,
									state: r
								})))
							}()
					},
					className: Object(o.a)(S.a.listItem, de.a.item, S.a.triggerItem, l && S.a.backgroundFocused, t),
					"data-testid": he
				}, s.a.createElement(g.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: de.a.text
				}, i.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), i.fbt._("{search query}", [i.fbt._param("search query", _)], {
					hk: "4vP3YT"
				}), "”", A && s.a.createElement(s.a.Fragment, null, " ", i.fbt._("in {scope}", [i.fbt._param("scope", null == A ? void 0 : A.title)], {
					hk: "4jMNCg"
				}))))
			}

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ve = "SearchDropdown", Ee = "SearchDropdownContent", _e = 5, Oe = Object(c.a)(ne.a);

			function Ie(e) {
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
					typeaheadByTypeSuggestions: b,
					focusedItemIndex: y,
					nightmode: m,
					searchItem: g,
					searchOriginPage: v,
					isFixed: E = !0,
					isOverlay: _ = !0,
					fireAdPixelsOfType: O,
					onClearSearchQuery: I,
					onClose: T,
					onRemoveRecentSearch: w,
					onSendSearchClickRecentEvent: C,
					onSetRecentSearch: j,
					onUpdateSearchQuery: A
				} = e, P = Object(a.d)(), [R, N] = Object(r.useState)(null), [L, U] = Object(r.useState)(n), [M, F] = Object(r.useState)(new Array(_e).fill(!1)), {
					enabled: B
				} = Object(a.e)(re.j), G = Object(a.e)(e => Object(V.a)(e, H.Lf)), q = !!(null === (t = g.searchQuery) || void 0 === t ? void 0 : t.trim()), W = l || i, K = B, Y = [...b.communities, ...b.people, ...b.nsfw], $ = !l && (!q || y >= 0) && (G ? 0 === Y.length : 0 === f.length) && !K, z = {
					width: L ? `${L}px` : "inherit",
					overflow: "auto"
				};
				E && (z.zIndex = te.g), Object(r.useEffect)(() => {
					U(n)
				}, [n]), Object(r.useLayoutEffect)(() => {
					if (!i && d && document.getElementById(Ee)) {
						const e = X();
						F(e), c.forEach((t, n) => {
							e[n] && P((e, n) => Object(x.p)({
								state: n(),
								trendingSearch: t,
								telemetrySource: h.a.Typeahead
							}))
						})
					}
				}, [i, d, P]);
				const X = () => {
					const e = new Array(c.length).fill(!1);
					return c.forEach((t, n) => {
						if (t.id) {
							const r = document.getElementById(`${ve}-${t.id}`),
								s = document.getElementById(Ee);
							if (r && s) {
								const t = r.getBoundingClientRect(),
									a = s.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[n] = !0)
							}
						}
					}), e
				};
				const J = !l && !K;
				return s.a.createElement(Oe, {
					className: Object(o.a)(S.a.bodyBackgroundColor, S.a.bodyTextColor, S.a.borderTop1Line, S.a.sdListContainer),
					id: Ee,
					isFixed: E,
					isOpen: d,
					isOverlay: _,
					tooltipId: ve,
					noFocus: !0,
					style: z,
					onDropdownMounted: () => {
						if (!i && c.length > 0) {
							const e = X();
							F(e), c.forEach((t, n) => {
								e[n] && P((e, n) => Object(x.p)({
									state: n(),
									trendingSearch: t,
									telemetrySource: h.a.Typeahead,
									offset: p.length
								}))
							})
						}
					},
					onScroll: () => {
						const e = X();
						c.forEach((t, n) => {
							M[n] || !e[n] || t.post && t.post.isSponsored || P((e, n) => Object(x.p)({
								state: n(),
								trendingSearch: t,
								telemetrySource: h.a.Typeahead,
								offset: p.length
							}))
						}), F(e)
					}
				}, $ && s.a.createElement(s.a.Fragment, null, p.map((e, t) => s.a.createElement(D, {
					searchOriginPage: v,
					activeTooltipId: R,
					focusedItem: u[y],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: I,
					onRemoveRecentSearch: w,
					onSendSearchClickRecentEvent: C,
					onSetRecentSearch: j,
					onUpdateSearchQuery: A,
					recentSearch: e,
					toggleTooltip: N,
					nightmode: m,
					onCloseDropdown: T
				})), !i && c.length ? s.a.createElement("div", {
					className: Object(o.a)(S.a.labelsFont, S.a.dropdownPadding, S.a.metaTextColor, S.a.titlePadding, !!p.length && S.a.borderTop2Line)
				}, ge._("Trending today", null, {
					hk: "3nAMpY"
				})) : null, c.map(e => s.a.createElement(k, {
					id: `${ve}-${e.id}`,
					key: e.id,
					focusedItem: u[y],
					searchOriginPage: v,
					fireAdPixelsOfType: O,
					onCloseDropdown: T,
					onSetRecentSearch: j,
					onUpdateSearchQuery: A,
					trendingItem: e
				}))), W && !K && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(o.a)(S.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(o.a)(S.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(o.a)(S.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(o.a)(S.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(o.a)(S.a.loadingItem)
				})), !$ && q && s.a.createElement(s.a.Fragment, null, J && G ? s.a.createElement(ee, me({}, e, {
					typeaheadByTypeList: Y
				})) : s.a.createElement(Q, e), s.a.createElement(ye, {
					className: Object(o.a)(S.a.borderTop2Line, S.a.triggerItem),
					key: g.searchQuery,
					searchItem: g,
					position: f.length,
					searchOriginPage: v,
					onTriggerSearch: T,
					isFocused: y === u.length - 1
				})))
			}
		},
		"./src/reddit/components/SubredditForkingCTA/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return C
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
				b = n("./node_modules/reselect/es/index.js"),
				h = n("./src/lib/cache/index.ts"),
				y = n("./src/lib/makeCommentsPageKey/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditForking.ts"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx");
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
				_ = "subreddit-forking.dismissals",
				O = (e, t) => {
					const n = Object(f.m)(e),
						r = Object(y.a)(t.postId),
						s = Object(p.F)(e, t),
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
					let t = Object(h.b)(_);
					const n = Object.entries(t || {});
					n.length >= 99 && (t = n.sort((e, t) => {
						let [, n] = e, [, r] = t;
						return r - n
					}).splice(0, 99).reduce((e, t) => {
						let [n, r] = t;
						return e[n] = r, e
					}, {})), Object(h.d)(_, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				S = (e, t) => {
					var n;
					if (!Object(f.S)(e)) return !1;
					if (null === (n = Object(h.b)(_)) || void 0 === n ? void 0 : n[t.postId]) return !1;
					const r = Object(p.F)(e, t),
						s = Object(p.U)(e, {
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
					return !(!a || !r.numComments || a.threshold > r.numComments) && !!O(e, t)
				},
				T = () => Object(b.c)({
					shouldLoadCTA: S
				}),
				D = Object(i.b)(T),
				w = e => {
					let {
						shouldLoadCTA: t,
						postId: n,
						sendEvent: r
					} = e;
					const [s, a] = Object(c.useState)(!1);
					return s || !t ? null : o.a.createElement(v, {
						onClose: () => {
							I(n), a(!0), r(Object(m.b)(n))
						},
						postId: n
					})
				},
				C = Object(c.memo)(D(Object(g.c)(w)))
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
			n.d(t, "b", (function() {
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
				b = n("./src/reddit/controls/Search/index.m.less"),
				h = n.n(b);
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
				className: Object(o.a)(f.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(l.b, {
				className: Object(o.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(l.b, {
				className: Object(o.a)(h.a.subredditIcon, e.iconClassName),
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
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/lodash/debounce.js"),
				c = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/controls/Search/SearchScopePill/index.tsx"),
				p = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				f = n.n(p);
			const b = "search-bar-dismiss-button",
				h = "header-search-bar",
				y = e => {
					let {
						inputRef: t,
						isOpen: n,
						onChange: a,
						onClearSearchQuery: o,
						onClickDismissSearchScopePill: p,
						onFocusSearchBar: y,
						onFormSubmit: m,
						onKeyDown: g,
						searchQuery: v,
						showSearchScopePill: E,
						searchScopePill: _
					} = e;
					var O;
					const I = r.fbt._("Search Reddit", null, {
							hk: "2daMjM"
						}),
						S = E && _ ? r.fbt._("Search within {subredditName}", [r.fbt._param("subredditName", _.title)], {
							hk: "2B6J3t"
						}) : r.fbt._("Search all of Reddit", null, {
							hk: "1Fi1f5"
						});
					return i.a.createElement("div", {
						className: Object(s.a)(f.a.searchBar, n && f.a.isOpen)
					}, i.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						className: f.a.form,
						method: "get",
						onSubmit: m,
						onFocus: y,
						role: "search"
					}, i.a.createElement("label", {
						className: f.a.inputLabel,
						htmlFor: "header-search-bar"
					}, i.a.createElement("div", {
						"aria-hidden": !0,
						className: f.a.iconContainer
					}, i.a.createElement(l.a, {
						name: "search",
						className: f.a.icon
					})), i.a.createElement(d.a, {
						"aria-live": "assertive"
					}, S)), E && _ && i.a.createElement(u.b, {
						onClickDismiss: function() {
							var e;
							null === (e = t.current) || void 0 === e || e.focus(), p()
						},
						content: _
					}), i.a.createElement("input", {
						className: f.a.input,
						defaultValue: v,
						id: h,
						name: "q",
						onChange: c()((function() {
							var e;
							a((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
						}), 200),
						onKeyDown: g,
						placeholder: I,
						ref: t,
						type: "search"
					})), (null === (O = null == t ? void 0 : t.current) || void 0 === O ? void 0 : O.value) ? i.a.createElement("button", {
						"aria-label": r.fbt._("Remove search bar text", null, {
							hk: "4twCsS"
						}),
						id: b,
						className: f.a.dismissButton,
						"data-testid": b,
						onClick: function() {
							var e;
							null === (e = t.current) || void 0 === e || e.focus(), o()
						}
					}, i.a.createElement(l.a, {
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
				b = e => {
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
			var h = n("./src/reddit/components/SubredditIcon/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/controls/Search/index.m.less"),
				v = n.n(g),
				E = n("./src/lib/constants/index.ts"),
				_ = n("./src/reddit/controls/Search/SearchScopePill/index.m.less"),
				O = n.n(_);
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
				const a = Object(o.e)(m.fb);
				return c.a.createElement(d.a, {
					className: O.a.SearchScopePill,
					"data-testid": "search-scope-pill"
				}, c.a.createElement(b, {
					className: O.a.pillText,
					"data-testid": "search-scope-pill-text",
					variant: a ? r.NIGHT : r.DAY
				}, c.a.createElement(h.b, {
					className: Object(i.a)(v.a.subredditIcon, O.a.subredditIcon),
					iconUrl: n.icon
				}), n.title, c.a.createElement("button", {
					"aria-label": s.fbt._("Remove community search filter", null, {
						hk: "1zezc9"
					}),
					className: Object(i.a)(O.a.dismissButton, a ? O.a.dismissButtonNight : O.a.dismissButtonDay),
					"data-testid": I,
					onClick: t,
					onFocus: e => {
						e.stopPropagation()
					},
					id: I,
					type: "button"
				}, c.a.createElement(y.a, {
					className: O.a.dismissIcon,
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
				return b
			})), n.d(t, "d", (function() {
				return h
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
				b = async (e, t) => Object(a.a)(Object(o.a)(t, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.ob.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), h = (e, t) => {
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
							customType: u.c.Direct
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
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/thumbnails.ts"),
				s = n("./src/reddit/models/Media/index.ts");

			function a(e, t) {
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === r.a.SELF || e.thumbnail.url === r.a.NSFW || e.media && Object(s.H)(e.media) || t)
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
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
					activeSearchScope: l
				} = e;
				var u;
				let p;
				const f = [];
				if (t.isTypeaheadSuggestion) p = i(t);
				else {
					if (f.push(`${a.w}=${Object(s.b)(t.rawQuery||t.searchQuery)}`), p = `/${d}`, t.section !== c.c.trending && t.section !== c.c.recent || n && n.source && f.push(`source=${n.source}`), null == l ? void 0 : l.enabled) switch (l.type) {
						case r.dc.Subreddit:
							p = `${l.payload.url}${d}`, f.push(`${a.x}=1`);
							break;
						case r.dc.Multireddit:
							p = `${l.payload.url}${d}`, f.push(`${a.x}=1`), f.push(`${a.m}=1`);
							break;
						case r.dc.SyntaxScoped:
							p = `/${Object(o.a)(null===(u=l.payload)||void 0===u?void 0:u.title)}${d}`, f.push(`${a.x}=1`)
					} else t.subredditOrProfileRestrictedName && (p = `${t.subredditOrProfileRestrictedName}${d}`, f.push(`${a.x}=1`));
					(null == n ? void 0 : n.t) && n.t !== r.oc.ALL && f.push(`${a.H}=${n.t}`), (null == n ? void 0 : n.sort) && f.push(`${a.D}=${n.sort}`), (null == n ? void 0 : n.type) && (n.type.includes(r.ic.Posts) || f.push(`${a.I}=${n.type[0]}`))
				}
				return {
					url: p,
					qs: f.join("&")
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
				b = n("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const n = s.a.parse(t.endpoint, !0),
					{
						host: r,
						protocol: o
					} = n;
				if (`${o}//${r}` === a.a.gatewayUrl) {
					const r = {},
						s = e.getState();
					Object(b.mb)(s) && (r.allow_over18 = 1), Object(b.q)(s) && (r.gated_optin = 1), Object(b.pb)(s) && (r.quarantine_optin = 1), r.include = f(e.getState(), n, t), t.endpoint = Object(c.a)(t.endpoint, r)
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
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				c = n("./src/reddit/models/Vote/index.ts"),
				o = e => !0 === e ? c.a.upvoted : !1 === e ? c.a.downvoted : c.a.notVoted,
				i = n("./src/reddit/models/Comment/index.ts");
			t.a = e => {
				const t = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: l(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === r.G,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: d(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(s.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: o(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(a.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(a.b)(e.associated_award)), t
			};
			const d = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== r.G ? null : e.body === r.H ? i.c.User : e.body === r.Rb ? i.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.K.NO_STRIPE_SUBSCRIPTION:
							case r.K.USER_DOESNT_EXIST:
							case r.K.USER_REQUIRED_ERROR:
							case r.K.VALIDATION_ERROR:
								return e;
							case r.K.NO_USER:
							case r.K.NO_TEXT:
							case r.K.NO_URL:
								return r.K.VALIDATION_ERROR;
							case r.K.CREDIT_CARD_FAILURE:
							case r.K.CREDIT_CARD_FAILURE_GENERIC:
								return r.K.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.K.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.K.VALIDATION_ERROR
				},
				a = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				c = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: a(e)
					} : e
				};
			t.a = a
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
					...s.q(e),
					listing: s.B(e, t),
					subreddit: s.nb(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "p", (function() {
				return D
			})), n.d(t, "u", (function() {
				return A
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "n", (function() {
				return R
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "j", (function() {
				return L
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "s", (function() {
				return U
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "l", (function() {
				return B
			})), n.d(t, "g", (function() {
				return V
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "e", (function() {
				return Q
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "h", (function() {
				return Y
			})), n.d(t, "q", (function() {
				return $
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
				b = n("./src/reddit/selectors/widgets.ts"),
				h = n("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(r || (r = {}));
			const y = "discovery_unit",
				m = (e, t, n) => ({
					...p.q(e),
					source: y,
					screen: p.eb(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				g = (e, t, n) => ({
					...m(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				v = (e, t) => {
					Object(h.a)(E(t)(e))
				},
				E = (e, t) => n => g(n, e, t),
				_ = (e, t, n, r) => "unitName" in t ? m(e, t, r) : ((e, t, n) => ({
					...p.q(e),
					source: "search",
					screen: p.eb(e),
					search: n ? {
						...p.fb(e, n, o.a.SERP),
						structureType: p.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				O = (e, t, n, s, a) => ({
					..._(e, t, s, a),
					action: "view",
					noun: r.ITEM_POST,
					post: p.M(e, n)
				}),
				I = e => {
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
			var S;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(S || (S = {}));
			const T = e => {
					Object(h.a)(j({
						...e,
						action: c.c.CLICK
					}))
				},
				D = e => {
					Object(h.a)(j({
						...e,
						action: c.c.VIEW
					}))
				},
				w = {
					[o.a.Popular]: S.POPULAR_CAROUSEL,
					[o.a.Typeahead]: S.SEARCH_DROPDOWN
				},
				C = {
					[o.a.Popular]: l.d.tile,
					[o.a.Typeahead]: l.d.dropdown
				},
				j = e => {
					let {
						action: t,
						offset: n = 0,
						state: s,
						telemetrySource: a,
						trendingSearch: c
					} = e;
					const o = w[a],
						i = C[a],
						l = Object(f.a)(s, i).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === c.id) + n;
					return {
						...p.q(s),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: I(c),
						discoveryUnit: o === S.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: p.d(s, {
							paneName: o,
							position: l
						}),
						search: p.gb(s, {
							searchQuery: c.rawQuery,
							structureType: p.c.Trending,
							originElement: o === S.SEARCH_DROPDOWN ? p.a.SearchDropdown : void 0,
							telemetrySource: a
						})
					}
				},
				A = (e, t, n, r, s, a, o) => {
					Object(h.a)({
						...p.q(e),
						...Object(i.l)({
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
				P = (e, t, n, r) => {
					Object(h.a)(O(e, t, n, r))
				},
				R = (e, t, n, r) => s => O(s, e, t, n, r),
				N = (e, t) => {
					Object(h.a)({
						...m(e, t),
						source: y,
						action: c.c.CLICK,
						noun: "show_less_often"
					})
				},
				L = (e, t, n, r) => {
					Object(h.a)(x(t, n, r)(e))
				},
				x = (e, t, n, s) => a => {
					return {
						..._(a, e, n, s),
						source: y,
						action: c.c.CLICK,
						noun: r.ITEM_POST,
						post: p.M(a, t)
					}
				},
				k = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => Object(i.r)(e, ...t)
				},
				U = (e, t, n, r) => s => a => Object(i.j)({
					action: c.c.CLICK,
					state: a,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: n,
					postId: s,
					discoveryUnit: r
				}),
				M = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => n => ({
						...k(...t)(e)(n),
						noun: "ad"
					})
				},
				F = (e, t) => n => s => ({
					...e ? m(s, e, t) : {},
					source: y,
					action: c.c.CLICK,
					noun: r.ITEM_POST,
					post: p.M(s, n)
				}),
				B = (e, t, n, r) => {
					Object(h.a)(G(t, n, r)(e))
				},
				G = (e, t, n, r) => s => {
					const a = Object(u.c)(s, {
							postId: t
						}),
						o = a ? Object(b.b)(s, a) : void 0;
					return {
						..._(s, e, n, r),
						...o,
						source: y,
						action: c.c.CLICK,
						noun: "item_post_subreddit",
						post: p.M(s, t)
					}
				},
				q = () => ({
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
				H = (e, t, n) => p.d(e, {
					position: n
				}),
				V = (e, t, n) => {
					const s = q();
					return e => ({
						...m(e, s),
						actionInfo: H(e, 0, n),
						subreddit: p.ob(e, t) || null,
						source: y,
						action: c.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				W = (e, t, n) => {
					const s = q();
					return e => ({
						...m(e, s),
						actionInfo: H(e, 0, n),
						subreddit: p.ob(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				Q = (e, t, n, s) => {
					const a = q();
					return e => ({
						...m(e, a),
						actionInfo: H(e, 0, n),
						subreddit: p.ob(e, t) || null,
						post: s ? p.M(e, s) : null,
						source: y,
						action: c.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				K = (e, t, n, s) => {
					const a = q();
					return e => ({
						...m(e, a),
						actionInfo: H(e, 0, n),
						subreddit: p.ob(e, t) || null,
						post: s ? p.M(e, s) : null,
						source: y,
						action: c.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Y = (e, t) => n => ({
					...m(n, e),
					...t && Object(b.b)(n, t),
					source: y,
					action: c.c.CLICK,
					noun: "item"
				}),
				$ = e => t => ({
					...m(t, e),
					source: y,
					action: c.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return o
			})), n.d(t, "y", (function() {
				return i
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "x", (function() {
				return w
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "s", (function() {
				return A
			})), n.d(t, "v", (function() {
				return P
			})), n.d(t, "w", (function() {
				return R
			}));
			var r = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...s.q(e),
					screen: s.eb(e),
					subreddit: s.nb(e),
					userSubreddit: s.wb(e)
				}),
				c = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.q)(e)
				}),
				o = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...a(e)
				}),
				i = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...a(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...a(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...a(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...a(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...a(e)
				}),
				f = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...a(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...a(t),
					scheduledPost: c(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...a(t),
					scheduledPost: c(e)
				}),
				y = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...a(e)
				}),
				m = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...a(e)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...a(e)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...a(e)
				}),
				E = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...a(t),
					actionInfo: s.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				_ = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				O = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : _[e],
					...a(t)
				}),
				I = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...a(e)
				}),
				S = (e, t, n) => c => ({
					source: "post",
					action: "click",
					noun: Object(r.m)(e),
					...a(c),
					actionInfo: s.d(c, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				T = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...a(e)
				}),
				D = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...a(e)
				}),
				w = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...a(e)
				}),
				C = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...a(e),
					scheduledPost: c(t)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...a(e)
				}),
				A = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...a(e),
					scheduledPost: c(t)
				}),
				P = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...a(e)
				}),
				R = () => (e, t) => {
					const n = a(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: c(t)
					}
				}
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
					...s.q(t),
					actionInfo: s.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				c = (e, t, n) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.q(a),
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
					...s.q(e),
					actionInfo: s.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				i = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.q(n),
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
					...s.q(e),
					actionInfo: s.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.q(e),
					actionInfo: s.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.q(e),
					actionInfo: s.d(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.q(e),
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
					...r.q(e),
					actionInfo: r.d(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "dismiss",
					...r.q(e),
					actionInfo: r.d(e)
				}),
				c = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...r.q(e),
					actionInfo: r.d(e)
				})
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/removedPosts.ts");
			const a = () => Object(r.e)(e => Object(s.d)(e))
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/helpers/localStorage/index.ts");
			const a = {},
				c = (e, t, n) => (a[e] || (a[e] = {
					callbacks: [],
					value: n
				}), a[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: n
						} = a[e], r = n.indexOf(t);
						r > -1 && n.splice(r, 1)
					},
					emit: n => {
						a[e].value !== n && (a[e].value = n, a[e].callbacks.forEach(e => {
							e !== t && e(n)
						}))
					}
				});

			function o(e, t) {
				const n = Object(r.useRef)(null);
				let a;
				a = Object(s.G)(e);
				const [o, i] = Object(r.useState)(null != a ? a : t);
				return Object(r.useEffect)(() => (n.current = c(e, i, t), () => {
					var e;
					return null === (e = n.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(r.useEffect)(() => {
					var e;
					null === (e = n.current) || void 0 === e || e.emit(o)
				}, [o]), [o, function(t) {
					Object(s.Lb)(e, t), i(t)
				}]
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function a() {
				return Object(r.useContext)(s.b)
			}
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			}));
			var r, s, a = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const c = {
					[r.Loyalty]: a.a.First,
					[r.Achievement]: a.a.Second,
					[r.Cosmetic]: void 0
				},
				o = e => e === a.a.First ? r.Loyalty : e === a.a.Second ? r.Achievement : r.Cosmetic
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
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "r", (function() {
				return m
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "q", (function() {
				return D
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				a = n("./src/reddit/models/User/index.ts");
			const c = "scheduledposts";
			var o, i, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(o || (o = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(i || (i = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === a.c.AvailableRedditor,
				p = e => e.__typename === s.a.Subreddit;
			var f, b, h, y;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(f || (f = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(y || (y = {}));
			const m = e => b[y[e]],
				g = e => y[b[e]],
				v = e => h[b[e]],
				E = e => b[h[e]],
				_ = e => y[h[e]];
			var O;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(O || (O = {}));
			const I = e => {
					switch (e) {
						case O.Hourly:
						case O.Daily:
						case O.Weekly:
						case O.Monthly:
							return !0
					}
					return !1
				},
				S = "custom",
				T = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(r.a)(e)
					}
				},
				D = e => "frequency" in e && !!e.frequency
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
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const a = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				a = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				c = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let a;
						(a = e.placement ? e.placement === o.a.First ? r[i.a.Loyalty][s] : r[i.a.Achievement][s] : l(e) ? r[i.a.Cosmetic][i.c.MyBadges][s] : r[i.a.Cosmetic][i.c.Gallery][s]) && (l(e) ? n.has(e.id) && a.unlocked.push(e) : t.has(e.id) || a.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(c.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function f(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(p).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(c.b)(r, s)
				})
			}

			function b(e) {
				const t = {
					[i.a.Loyalty]: {},
					[i.a.Achievement]: {},
					[i.a.Cosmetic]: {
						[i.c.Gallery]: {},
						[i.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[i.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[i.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[i.a.Cosmetic][i.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[i.a.Cosmetic][i.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[i.a.Loyalty]: f(t[i.a.Loyalty], e.collections),
						[i.a.Achievement]: f(t[i.a.Achievement], e.collections),
						[i.a.Cosmetic]: {
							[i.c.Gallery]: f(t[i.a.Cosmetic][i.c.Gallery], e.collections),
							[i.c.MyBadges]: f(t[i.a.Cosmetic][i.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case a.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case a.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
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
			var b = function() {
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
				h = Object(r.c)({
					error: l,
					loaded: p,
					pending: b
				}),
				y = Object(r.c)({
					list: i,
					subreddits: h
				}),
				m = n("./node_modules/lodash/isEmpty.js"),
				g = n.n(m);
			const v = [];
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b: {
						const {
							categoryIds: n
						} = t.payload;
						return g()(n) ? e : n
					}
					default:
						return e
				}
			};
			const _ = {};
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b: {
							const {
								categories: n
							} = t.payload;
							return g()(n) ? e : {
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
			const D = {};
			var w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b: {
							const {
								categories: n
							} = t.payload;
							if (g()(n)) return e;
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
				C = n("./src/reddit/actions/global/constants.ts"),
				j = n("./src/reddit/constants/localStorage.ts");
			const A = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.a:
						return t.payload[j.b.CATEGORIES_RANKING_STORE] || e;
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
				models: O,
				nameToId: w,
				ranking: P
			})
		},
		"./src/reddit/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return fD
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
				b = n("./src/reddit/constants/modals.ts");
			var h = function() {
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
							return t.type === l.b && (null == e ? void 0 : e.id) === b.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
						case f.e:
							return (null == e ? void 0 : e.id) === b.a.BLADE_UNSAVED_CHANGES ? null : e;
						case f.d:
							return (null == e ? void 0 : e.id) === b.a.BLADE_NIGHTMODE ? null : e;
						case c.a:
							return (null == e ? void 0 : e.id) === b.a.USER_FLAIR_MODAL_ID ? null : {
								id: b.a.USER_FLAIR_MODAL_ID
							};
						case u.b:
							return {
								id: b.a.BADGE_PURCHASE
							};
						case i.d:
							return {
								id: b.a.GOVERNANCE_OPT_OUT
							};
						case i.r:
							return {
								id: b.a.TRANSFER_POINTS
							};
						case i.o:
							return {
								id: b.a.GOVERNANCE_RELEASE_NOTES
							};
						case d.e:
							return {
								id: b.a.HARBERGER_TAX_BANNER_PURCHASE
							};
						case d.c:
							return {
								id: b.a.HARBERGER_TAX_BANNER_MANAGE
							};
						case d.b:
							return {
								id: b.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE
							};
						case d.a:
							return {
								id: b.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE
							};
						case i.x:
							return {
								id: b.a.WALLET_REGISTRATION_MODAL
							};
						case o.c:
							return {
								id: b.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				y = n("./src/reddit/actions/ads/constants.ts"),
				m = n("./src/reddit/actions/unload/constants.ts");
			const g = {};

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
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
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
						case m.b:
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
				_ = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniqBy.js")),
				O = n.n(_),
				I = n("./src/reddit/actions/adsSignals.ts"),
				S = n("./src/reddit/actions/economics/predictions/constants.ts"),
				T = n("./src/reddit/actions/eventPosts/constants.ts"),
				D = n("./src/reddit/actions/frontpage/constants.ts"),
				w = n("./src/reddit/actions/linkedPosts/constants.ts"),
				C = n("./src/reddit/actions/multireddit/constants.ts"),
				j = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				A = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				P = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				R = n("./src/reddit/actions/pages/modListing/constants.ts"),
				N = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				L = n("./src/reddit/actions/pages/postCreation.ts"),
				x = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				k = n("./src/reddit/actions/pages/subreddit/index.ts"),
				U = n("./src/reddit/actions/pages/topic.ts"),
				M = n("./src/reddit/actions/profileConversations.ts"),
				F = n("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				B = n("./src/lib/makeActionCreator/index.ts"),
				G = (n("./src/config.ts"), n("./src/lib/constants/index.ts"));
			n("./src/lib/makeApiRequest/index.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(B.a)("RECOMMENDED_POSTS_LOADED"), Object(B.a)("RECOMMENDED_POSTS_FAILED");
			var q = n("./src/reddit/actions/session.ts"),
				H = n("./src/reddit/actions/subreddit.ts"),
				V = n("./src/reddit/actions/subreddit/constants.ts"),
				W = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				Q = n("./src/reddit/actions/pages/profilePosts.ts");
			const K = {
				adsSeenCount: 0,
				totalPostsSeenCount: 0,
				sessionStartTime: ""
			};
			var Y = function() {
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
						case L.PAGE_LOADED:
						case w.b:
						case j.b:
						case R.e:
						case R.h:
						case W.b:
						case W.e:
						case x.e:
						case x.b:
						case Q.PROFILE_POSTS_LOADED:
						case Q.MORE_POSTS_LOADED:
						case k.SUBREDDIT_LOADED:
						case D.c:
						case N.b:
						case A.b:
						case C.r:
						case D.g:
						case M.e:
						case "RECOMMENDED_POSTS_LOADED":
						case V.o:
						case H.i:
						case F.b:
						case U.TOPIC_DATA_LOADED:
						case U.MORE_POSTS_LOADED:
						case T.c:
						case T.d:
						case S.n:
						case V.w: {
							const r = (null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || [],
								s = O()(Object.values(r), "postId"),
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
				$ = n("./src/reddit/actions/apiRequestState.ts");
			const z = {};
			var X = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.d:
						case $.a:
						case $.b: {
							const n = t.payload;
							return {
								...e,
								[n.apiRequestId]: n
							}
						}
						case $.c: {
							const n = t.payload;
							if (!(n in e)) return e;
							if (1 === Object.keys(e).length) return z;
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
				be = n("./src/reddit/actions/pages/constants.ts"),
				he = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				ye = n("./src/reddit/actions/pages/search/index.ts"),
				me = n("./src/reddit/actions/userFlair/constants.ts"),
				ge = n("./src/reddit/models/User/index.ts");
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
					case he.c:
					case he.i:
					case he.e:
					case he.g:
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
					case be.f:
					case W.b:
					case W.e:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case M.e:
					case H.i:
						return _e(e, t.payload);
					case fe.i:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A:
						return _e(e, t.payload.response);
					case me.s: {
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
					case me.a: {
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
			const _e = (e, t) => {
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
					i = Object(ge.e)(n),
					d = o.applied,
					l = o.displaySettings && o.displaySettings.isUserEnabled;
				return i && d && l ? Object(oe.merge)(a, {
					[c]: {
						[i]: d
					}
				}) : a
			};
			var Oe = Object(J.c)({
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
				De = n("./src/reddit/actions/reactionAwards/constants.ts");
			const we = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.b: {
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
			const je = {},
				Ae = (e, t, n) => ({
					...e,
					[t]: n
				});
			var Pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.e:
						case De.h: {
							const {
								awardId: n,
								commentId: r
							} = t.payload;
							return {
								...e,
								[r]: {
									...Ae(e[r] || {}, n, !0)
								}
							}
						}
						case De.f:
						case De.d:
						case De.i:
						case De.g: {
							const {
								awardId: n,
								commentId: r
							} = t.payload;
							return {
								...e,
								[r]: {
									...Ae(e[r] || {}, n, !1)
								}
							}
						}
						default:
							return e
					}
				},
				Re = Object(J.c)({
					availability: Ce,
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
			var Le = function() {
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
				xe = Object(J.c)({
					error: Ne,
					pending: Le
				}),
				ke = Object(J.c)({
					api: xe
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
			var Fe = function() {
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
				Be = Object(J.c)({
					error: Ue,
					pending: Fe
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
			var Ve = function() {
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
					api: Be,
					availability: qe,
					order: Ve
				}),
				Qe = n("./node_modules/lodash/merge.js"),
				Ke = n.n(Qe);
			const Ye = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const n = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${n}`
			};
			var $e = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : Ye(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : Ye(e.endsAt)), e),
				ze = n("./src/reddit/models/Gold/Award.ts"),
				Xe = n("./src/reddit/actions/discoveryUnit.ts"),
				Je = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Ze = n("./src/reddit/actions/search.ts");
			const et = ze.n,
				tt = (e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				})([$e]),
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
					case De.b: {
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
					case be.b:
					case le.y:
					case ue.b:
					case P.b:
					case P.f:
					case L.PAGE_LOADED:
					case Xe.e:
					case D.g:
					case R.e:
					case R.h:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A:
					case C.r:
					case be.f:
					case D.c:
					case N.b:
					case ye.c:
					case W.b:
					case W.e:
					case M.b:
					case M.e:
					case x.b:
					case x.e:
					case F.b:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case he.c:
					case he.e:
					case he.i:
					case he.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ze.e:
					case H.i:
					case k.SUBREDDIT_LOADED: {
						const n = {},
							r = t.payload.posts || [],
							s = t.payload.comments || [];
						for (const e in r) {
							const t = r[e].allAwardings || [];
							for (const e of t) n[e.id] = tt(Object(ze.i)(e))
						}
						for (const e in s) {
							const t = s[e],
								{
									associatedAward: r,
									allAwardings: a = []
								} = t;
							for (const e of a) n[e.id] = tt(Object(ze.i)(e));
							r && (n[r.id] = tt(r))
						}
						return Object.keys(n).forEach(t => {
							var r;
							0 === (null === (r = e[t]) || void 0 === r ? void 0 : r.coinPrice) && delete n[t]
						}), Ke()({
							...e
						}, n)
					}
					case Ie.pb: {
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
				bt = n("./src/reddit/actions/badge.ts");
			const ht = {};
			var yt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ht,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bt.d:
					case bt.e: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case bt.c: {
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
			const mt = {};
			var gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bt.d: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case bt.e:
						case bt.c: {
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
					pending: gt
				});
			const Et = {};
			var _t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bt.g:
					case bt.h: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case bt.f: {
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
			const Ot = {};
			var It = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bt.g: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case bt.h:
						case bt.f: {
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
					error: _t,
					pending: It
				}),
				Tt = Object(J.c)({
					subreddit: vt,
					user: St
				});
			const Dt = {};
			var wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.i:
						case bt.e:
						case bt.h:
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
				Ct = Object(J.c)({
					api: Tt,
					models: wt
				}),
				jt = n("./src/reddit/actions/blockedRedditors.ts");
			const At = {
				message: ""
			};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jt.c:
					case jt.d:
						return e;
					case jt.b:
						return t.payload;
					default:
						return e
				}
			};
			var Rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jt.d:
							return !0;
						case jt.c:
						case jt.b:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(J.c)({
					error: Pt,
					pending: Rt
				});
			const Lt = {
				ids: []
			};
			var xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case jt.e:
							const n = e.ids.slice();
							return n.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: n
							};
						case jt.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				kt = Object(J.c)({
					api: Nt,
					list: xt
				}),
				Ut = n("./src/reddit/actions/userBlocks.ts");
			const Mt = {};
			var Ft = function() {
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
			const Bt = {};
			var Gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bt,
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
					error: Ft,
					pending: Gt
				}),
				Ht = Object(J.c)({
					api: qt
				});
			const Vt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var Wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vt,
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
						case D.d:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Qt = n("./src/lib/activeUserCountByLiveChatId/reducers/index.ts"),
				Kt = n("./src/reddit/actions/chat/sendbirdChat.ts");
			var Yt = n("./src/reddit/actions/chat/init.ts");
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yt.a:
							return !0;
						default:
							return e
					}
				},
				zt = n("./src/reddit/actions/chat/liveChatTooltipShowState.ts");
			const Xt = n("./src/reddit/constants/chat.ts").b.NEVER_SHOWN;
			var Jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zt.a:
							return t.payload;
						default:
							return e
					}
				},
				Zt = n("./src/reddit/actions/chat/showChatChannelDiscoveryTooltip.ts");
			var en, tn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zt.a:
							return t.payload;
						default:
							return e
					}
				},
				nn = (n("./src/chat/actions/message/unreadCount.ts"), n("./src/chat/endpoints/sendbird/index.ts"), n("./src/reddit/actions/tabBadging.ts"));
			n("./src/reddit/selectors/chat.ts"), n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(en || (en = {}));
			const {
				REQUEST_FAILED: rn,
				REQUEST_PENDING: sn,
				REQUEST_SUCCESS: an
			} = en;
			Object(B.a)(rn), Object(B.a)(sn), Object(B.a)(an);
			G.pb;
			const cn = {
				apiError: null
			};
			var on = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case en.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...cn,
							apiError: e
						}
					}
					case en.REQUEST_SUCCESS:
					case en.REQUEST_PENDING:
						return cn;
					default:
						return e
				}
			};
			var dn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case en.REQUEST_PENDING:
							return !0;
						case en.REQUEST_FAILED:
						case en.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				ln = Object(J.c)({
					error: on,
					pending: dn
				});
			const un = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : un,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case en.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				fn = Object(J.c)({
					api: ln,
					count: pn
				}),
				bn = Object(J.c)({
					isInited: $t,
					unread: fn,
					liveChatTooltipShowState: Jt,
					showChatChannelDiscoveryTooltip: tn,
					activeUserCountByLiveChatId: Qt.a,
					hasSendbirdChats: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Kt.a:
								return t.payload;
							default:
								return e
						}
					}
				}),
				hn = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			var yn = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hn.a:
							return !1;
						case hn.b:
							return !0;
						default:
							return e
					}
				},
				mn = n("./src/reddit/actions/communityFlairs/constants.ts");
			const gn = {};
			var vn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mn.a: {
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
				En = n("./src/reddit/actions/connection/constants.ts");
			const _n = {
				showBanner: !1,
				online: !0
			};
			var On = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _n,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case En.a:
							return {
								online: !1, showBanner: !0
							};
						case En.b:
							return {
								online: !0, showBanner: !0
							};
						case En.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				In = n("./src/lib/omitKey/index.ts"),
				Sn = n("./src/reddit/actions/contentControls/constants.ts");
			const Tn = {};
			var Dn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sn.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Sn.c:
					case Sn.b: {
						const {
							subredditName: n
						} = t.payload;
						return Object(In.a)(e, n)
					}
					default:
						return e
				}
			};
			const wn = {};
			var Cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Sn.c:
						case Sn.a:
						case Sn.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === Sn.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				jn = Object(J.c)({
					error: Dn,
					pending: Cn
				}),
				An = Object(J.c)({
					fetch: jn
				}),
				Pn = n("./src/lib/safeGet/index.ts");
			const Rn = {};
			var Nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Sn.b: {
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
						case Sn.d: {
							const {
								subredditName: n,
								partialUpdates: r
							} = t.payload, s = Object(Pn.a)(e, n);
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
				Ln = Object(J.c)({
					api: An,
					models: Nn
				}),
				xn = n("./src/reddit/actions/contentGate.ts"),
				kn = n("./src/reddit/actions/preferences.ts");
			const Un = {};
			var Mn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xn.b: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(Pn.a)(e, n)) {
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
					case xn.c: {
						const {
							subredditDescription: n,
							subredditName: r,
							isContributorRequestsDisabled: s,
							isContributorRequestTimestamp: a,
							subredditId: c
						} = t.payload;
						if (r) {
							if (Object(Pn.a)(e, r)) {
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
					case xn.h: {
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
								...Object(Pn.a)(e, n) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: r,
								quarantineMessage: s,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case xn.a: {
						const {
							interstitialWarningMessage: n,
							interstitialWarningMessageHtml: r,
							interstitialWarningMessageRTJson: s,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(Pn.a)(e, a) || {},
								interstitialWarningMessage: n,
								interstitialWarningMessageHtml: r,
								interstitialWarningMessageRTJson: s
							}
						} : e
					}
					case xn.l: {
						const {
							subredditName: n,
							banMessage: r,
							banTitle: s
						} = t.payload;
						if (n) {
							if (Object(Pn.a)(e, n)) {
								const t = {
									[n]: {
										subredditBanned: !0,
										subredditBanMessage: r,
										subredditBanTitle: s
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
									subredditBanMessage: r,
									subredditBanTitle: s
								}
							}
						}
						return e
					}
					case xn.m: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(Pn.a)(e, n)) {
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
					case xn.n: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(Pn.a)(e, n)) {
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
					case xn.d:
					case xn.e:
					case xn.f:
					case xn.g: {
						const {
							profileName: n
						} = t.payload, r = G.qc + n.toLocaleLowerCase(), s = Object(Pn.a)(e, r) || {}, a = {
							profileDeleted: t.type === xn.e,
							profileDoesNotExist: t.type === xn.f,
							profileSuspended: t.type === xn.g,
							profileBlockedForLegalReason: t.type === xn.d
						};
						return {
							...e,
							[r]: {
								...s,
								...a
							}
						}
					}
					case kn.p:
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
			const Fn = {};
			var Bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case le.y:
						case be.b:
						case be.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Gn = Object(J.c)({
					models: Bn
				}),
				qn = n("./src/reddit/actions/cooldownTime.ts");
			var Hn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qn.b:
					case qn.c:
						return null;
					case qn.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Vn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qn.b:
							return !0;
						case qn.a:
						case qn.c:
							return !1;
						default:
							return e
					}
				},
				Wn = Object(J.c)({
					error: Hn,
					pending: Vn
				});
			var Qn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qn.d: {
							const {
								expiresAt: n
							} = t.payload;
							return "number" == typeof n && n !== e ? n : e
						}
						default:
							return e
					}
				},
				Kn = Object(J.c)({
					api: Wn,
					expiresAt: Qn
				}),
				Yn = n("./src/reddit/actions/postCollection/constants.ts");
			var $n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
					case Yn.d:
					case Yn.c:
					case Yn.s:
					case Yn.r:
						return null;
					case Yn.b:
					case Yn.n:
						return t.payload;
					default:
						return e
				}
			};
			var zn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yn.c:
						case Yn.r:
							return !0;
						case Yn.d:
						case Yn.b:
						case Yn.s:
						case Yn.n:
							return !1;
						default:
							return e
					}
				},
				Xn = Object(J.c)({
					error: $n,
					pending: zn
				}),
				Jn = Object(J.c)({
					createOrUpdate: Xn
				}),
				Zn = n("./src/reddit/actions/postDraft.ts");
			const er = {};
			var tr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : er,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zn.c:
					case Zn.b: {
						const {
							draftId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Zn.a: {
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
			const nr = {};
			var rr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zn.b: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Zn.c:
						case Zn.a: {
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
				sr = Object(J.c)({
					error: tr,
					pending: rr
				});
			var ar = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zn.d:
						return t.payload;
					case Zn.f:
					case Zn.e:
						return null;
					default:
						return e
				}
			};
			var cr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zn.f:
							return !0;
						case Zn.e:
						case Zn.d:
							return !1;
						default:
							return e
					}
				},
				or = Object(J.c)({
					error: ar,
					pending: cr
				});
			const ir = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var dr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zn.l:
					case Zn.j:
						return ir;
					case Zn.i: {
						const e = t.payload;
						return {
							...ir,
							apiError: e
						}
					}
					case Zn.m: {
						const e = t.payload;
						return {
							...ir,
							validationError: e
						}
					}
					case Zn.k: {
						const e = t.payload;
						return {
							...ir,
							submitValidationError: e
						}
					}
					case Zn.h:
						return {
							...ir, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var lr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zn.j:
							return !0;
						case Zn.l:
						case Zn.i:
						case Zn.m:
						case Zn.k:
						case Zn.h:
							return !1;
						default:
							return e
					}
				},
				ur = Object(J.c)({
					error: dr,
					pending: lr
				}),
				pr = Object(J.c)({
					deleteDraft: sr,
					listing: or,
					save: ur
				}),
				fr = n("./src/reddit/actions/postCreation/constants.ts");
			const br = {};
			var hr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : br,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.H: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case fr.p: {
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
				yr = Object(J.c)({
					pending: hr
				});
			var mr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.u:
					case fr.v:
					case fr.d:
					case fr.e:
					case fr.f:
					case fr.i:
					case fr.j:
					case fr.n:
					case fr.P:
						return null;
					case fr.t:
						return t.payload;
					default:
						return e
				}
			};
			var gr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.u:
							return !0;
						case fr.v:
						case fr.t:
							return !1;
						default:
							return e
					}
				},
				vr = Object(J.c)({
					error: mr,
					pending: gr
				}),
				Er = Object(J.c)({
					converting: yr,
					mediaUpload: vr
				});
			const _r = {};
			var Or = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.PAGE_LOADED:
					case L.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case L.PAGE_FAILED: {
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
			const Ir = {};
			var Sr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ir,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case L.PAGE_LOADED: {
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
			const Tr = {};
			var Dr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.PAGE_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case L.PAGE_LOADED:
						case L.PAGE_FAILED: {
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
				wr = Object(J.c)({
					error: Or,
					fetched: Sr,
					pending: Dr
				}),
				Cr = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const jr = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Ar = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.Q:
					case Cr.h:
					case Cr.k:
					case Cr.b:
					case Cr.d:
					case fr.w:
					case fr.c:
					case fr.d:
					case fr.e:
					case fr.f:
					case fr.i:
					case fr.j:
					case fr.n:
					case fr.P:
					case fr.F:
						return jr;
					case fr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? jr : e
					}
					case fr.o: {
						const e = t.payload;
						return {
							...jr,
							apiError: e
						}
					}
					case fr.eb: {
						const e = t.payload;
						return {
							...jr,
							validationError: e
						}
					}
					case fr.L:
					case fr.K: {
						const e = t.payload;
						return {
							...jr,
							submitValidationError: e
						}
					}
					case fr.a:
						return {
							...jr, needsCaptcha: !0
						};
					case fr.y:
						return {
							...jr, pollError: t.payload
						};
					default:
						return e
				}
			};
			var Pr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.w:
							return !0;
						case fr.Q:
						case Cr.h:
						case fr.o:
						case fr.eb:
						case fr.K:
						case fr.L:
						case fr.y:
						case fr.a:
							return !1;
						default:
							return e
					}
				},
				Rr = Object(J.c)({
					error: Ar,
					pending: Pr
				});
			var Nr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.x:
					case fr.I:
						return null;
					case fr.m:
						return t.payload;
					default:
						return e
				}
			};
			var Lr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.x:
							return !0;
						case fr.m:
						case fr.l:
							return !1;
						default:
							return e
					}
				},
				xr = Object(J.c)({
					error: Nr,
					pending: Lr
				}),
				kr = Object(J.c)({
					submit: Rr,
					update: xr
				});
			var Ur = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.P:
					case fr.N:
					case fr.O:
						return null;
					default:
						return e
				}
			};
			var Mr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.O:
							return !0;
						case fr.N:
						case fr.P:
							return !1;
						default:
							return e
					}
				},
				Fr = Object(J.c)({
					error: Ur,
					pending: Mr
				}),
				Br = Object(J.c)({
					change: Fr
				}),
				Gr = Object(J.c)({
					collection: Jn,
					draft: pr,
					editor: Er,
					page: wr,
					post: kr,
					subreddit: Br
				}),
				qr = n("./node_modules/lodash/omit.js"),
				Hr = n.n(qr),
				Vr = n("./src/reddit/actions/pages/postDraft.ts");
			const Wr = {};
			var Qr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zn.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Wr
					}
					case Zn.c: {
						const n = e,
							{
								draftId: r
							} = t.payload;
						return Hr()(n, r)
					}
					case fr.Q: {
						const {
							draftId: n
						} = t.payload;
						return n ? Hr()(e, n) : e
					}
					case Vr.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Kr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Yr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				$r = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var zr = n("./src/reddit/models/PostDraft/index.ts");
			var Xr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.d:
							return t.payload || "";
						case fr.F:
							return "";
						case l.b: {
							if (Kr(t) !== G.Tb.POST_CREATION) return "";
							const n = Yr(t);
							return n && n.url ? n.url || "" : e
						}
						case Zn.g: {
							const e = t.payload;
							return e.kind === zr.b.Link && e.body || ""
						}
						case Cr.b:
						case Cr.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Jr = n("./src/reddit/models/PostCreationForm/index.ts"),
				Zr = n("./src/reddit/models/ScheduledPost/index.ts");
			const es = e => e ? e.replace(/\+/g, " ") : "";
			var ts = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.e:
						return t.payload || "";
					case fr.F:
					case fr.J:
						return "";
					case fr.R:
						return t.payload.editorMode === Jr.i.MARKDOWN ? t.payload.content || "" : e;
					case l.b: {
						if (Kr(t) !== G.Tb.POST_CREATION) return "";
						const n = Yr(t);
						return n && n.text ? es(n.text) : e
					}
					case Zn.g: {
						const e = t.payload;
						return e.kind === zr.b.Markdown && e.body || ""
					}
					case Cr.b:
					case Cr.n: {
						const e = t.payload;
						return e.contentType === Zr.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const ns = {
				items: [],
				selectedKey: null
			};
			var rs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ns,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.f:
							return t.payload || ns;
						case fr.F:
							return ns;
						case l.b:
							return Kr(t) !== G.Tb.POST_CREATION ? ns : e;
						case Zn.g:
							return ns;
						case Cr.b:
						case Cr.n:
							return ns;
						default:
							return e
					}
				},
				ss = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				as = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				cs = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const os = ss.a.createInitial;
			var is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : os(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case fr.F:
							return ss.a.createInitial();
						case fr.R: {
							const n = t.payload;
							return n.editorMode === Jr.i.RICH_TEXT && n.editorKey === Jr.h.POST_CREATION ? ss.a.createInitial(n.content) : e
						}
						case l.b:
							return Kr(t) !== G.Tb.POST_CREATION ? ss.a.createInitial() : e;
						case Zn.g: {
							const e = t.payload;
							return e.kind === zr.b.RichText ? ss.a.createInitial(e.body) : ss.a.createInitial()
						}
						case Cr.b:
						case Cr.n: {
							const e = t.payload,
								n = Object(as.c)(e.mediaAssets);
							return ss.a.createInitial(e.contentType === Zr.a.RTJSON ? Object(cs.b)(e.body) : void 0, n || void 0)
						}
						default:
							return e
					}
				},
				ds = Object(J.c)({
					link: Xr,
					markdown: ts,
					media: rs,
					rte: is
				});
			var ls = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.b:
							return t.payload || null;
						case fr.F:
						case Zn.g:
						case Cr.b:
						case Cr.n:
						case fr.P:
							return null;
						case l.b:
							return Kr(t) === G.Tb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				us = n("./src/reddit/selectors/scheduledPosts/index.ts");
			var ps = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.c:
						return t.payload || null;
					case Cr.b:
					case Cr.n: {
						const e = t.payload;
						return Object(us.n)({
							scheduledPost: e
						}) || null
					}
					case fr.F:
						return null;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION ? e : null;
					case Zn.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.q:
						return t.payload.type || null;
					case Cr.b:
					case Cr.n:
					case fr.i:
					case fr.F:
					case l.b:
						return null;
					default:
						return e
				}
			};
			var bs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.T:
						return t.payload || !1;
					case Cr.b:
					case Cr.n:
						return "CHAT" === t.payload.discussionType;
					case fr.F:
						return !1;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					case Zn.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var hs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.bb: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case fr.F:
						return !1;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					case Cr.b:
					case Cr.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.V:
						return t.payload || !1;
					case fr.F:
						return !1;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					case Zn.g:
						return t.payload.isNSFW || !1;
					case Cr.b:
					case Cr.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var ms = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.W:
						return t.payload || !1;
					case fr.F:
						return !1;
					case fr.P: {
						const {
							name: n
						} = t.payload;
						return !!n && e
					}
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					case Zn.g:
						return t.payload.isOriginalContent || !1;
					case Cr.b:
					case Cr.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.X:
						return t.payload || !1;
					case Cr.b:
					case Cr.n:
						return !!t.payload.poll;
					case fr.F:
						return !1;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					default:
						return e
				}
			};
			var vs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.bb: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case fr.F:
						return !1;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					case Cr.b:
					case Cr.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var Es = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cr.b:
					case Cr.n:
					case fr.F:
						return !1;
					case Zn.n:
						return t.payload;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					case Zn.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var _s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.Y:
						return t.payload || !1;
					case fr.F:
						return !1;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					case Zn.g:
						return t.payload.isSpoiler || !1;
					case Cr.b:
					case Cr.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var Os = function() {
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
					case fr.i:
					case fr.q:
					case fr.F:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var Is = function() {
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
					case fr.i:
					case fr.q:
					case fr.F:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var Ss = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.O:
						case fr.P:
							return t.payload;
						case fr.N:
						case l.b:
							return null;
						default:
							return e
					}
				},
				Ts = n("./src/reddit/actions/polls.ts");
			var Ds = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ts.a:
							return {
								...t.payload
							};
						case Cr.b:
						case Cr.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case i.h:
						case fr.F:
							return null;
						case l.b:
							return Kr(t) !== G.Tb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				ws = n("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				Cs = n("./src/reddit/helpers/scheduledPosts/index.ts");
			var js = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r, s, a;
				switch (t.type) {
					case fr.bb: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case fr.F:
					case Zn.g:
					case fr.P:
						return null;
					case l.b:
						if (Kr(t) === G.Tb.POST_CREATION) {
							const c = null === (a = (null !== (s = null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.match.queryParams) && void 0 !== s ? s : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(Zr.n)(c)) {
								const t = Object(ws.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...ws.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(ws.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case Cr.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case Cr.b: {
						const e = t.payload;
						return {
							...Object(Cs.h)(e)
						}
					}
					default:
						return e
				}
			};
			var As = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: n,
					payload: r
				} = t;
				switch (n) {
					case fr.Z:
						return r || !1;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION && e;
					case Cr.b:
					case Cr.n:
					case Zn.g:
						return !1;
					default:
						return e
				}
			};
			var Ps = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.g:
						return t.payload || "";
					case l.b:
						return Kr(t) !== G.Tb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Rs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						return Kr(t) !== G.Tb.POST_CREATION ? null : e;
					case fr.F:
						return null;
					case Cr.b:
					case Cr.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Ns = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.F:
						return !0;
					case fr.ab:
						return t.payload;
					case l.b:
						return Kr(t) !== G.Tb.POST_CREATION || e;
					case Zn.g:
						return t.payload.sendReplies;
					case Cr.b:
					case Cr.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Ls = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.bb: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case fr.F:
					case Zn.g:
					case fr.P:
						return null;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION ? e : null;
					case Cr.b:
					case Cr.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const xs = G.bc.POST;
			var ks = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.F:
						return xs;
					case fr.r:
						return G.bc.CROSSPOST;
					case fr.i:
						return t.payload.submissionType || xs;
					case l.b: {
						if (Kr(t) !== G.Tb.POST_CREATION) return xs;
						const n = Yr(t);
						if (!n) return e;
						const {
							title: r = "",
							url: s,
							text: a = "",
							media: c = !1,
							selftext: o = !1,
							type: i = ""
						} = n, d = r && !a && !o;
						return c ? G.bc.MEDIA : void 0 !== s || d ? G.bc.LINK_ONLY : a || o ? G.bc.POST : i === G.Db ? G.bc.POLL : e
					}
					case Zn.g: {
						const e = t.payload;
						return zr.a[e.kind]
					}
					case Cr.b:
					case Cr.n: {
						const e = t.payload;
						return e.poll ? G.bc.POLL : e.url ? G.bc.LINK_ONLY : G.bc.POST
					}
					default:
						return e
				}
			};
			var Us, Ms = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.bb: {
						const {
							suggestedSort: e
						} = t.payload;
						return e || null
					}
					case fr.F:
					case Zn.g:
					case fr.P:
						return null;
					case l.b:
						return Kr(t) === G.Tb.POST_CREATION ? e : null;
					case Cr.b:
					case Cr.n:
						return t.payload.suggestedCommentSort || null;
					default:
						return e
				}
			};
			! function(e) {
				e.PERIWINKLE = "periwinkle", e.ORANGERED = "orangered", e.MANGO = "mango", e.KIWI = "kiwi", e.ALIEN = "alien"
			}(Us || (Us = {}));
			const Fs = {
				theme: Us.PERIWINKLE,
				topics: [],
				isUpcoming: !1
			};
			var Bs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.cb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Gs = n("./src/reddit/models/Poll/index.ts");
			const qs = e => e ? e.replace(/\+/g, " ") : "",
				Hs = e => `Should ${e||"username"} become the top moderator?`,
				Vs = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Ws = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.r:
						return t.payload.postTitle || "";
					case fr.j:
						return t.payload || "";
					case fr.E: {
						const {
							title: n
						} = t.payload;
						return e || (n || "")
					}
					case fr.F:
						return "";
					case l.b: {
						if (Kr(t) !== G.Tb.POST_CREATION) return "";
						const n = Yr(t);
						return n && n.title ? qs(n.title) : e
					}
					case Zn.g:
						return t.payload.title;
					case fr.q: {
						const {
							oldType: n,
							type: r
						} = t.payload;
						return r === Gs.a.ReplaceTopMod ? Hs("") : r === Gs.a.Spinoff ? Vs("") : n === Gs.a.ReplaceTopMod || n === Gs.a.Spinoff ? "" : e
					}
					case i.c: {
						const {
							username: e
						} = t.payload;
						return Hs(e)
					}
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return Vs(e)
					}
					case fr.i: {
						const {
							extra: n
						} = t.payload;
						return !n || n.govType !== Gs.a.ReplaceTopMod && n.govType !== Gs.a.Spinoff ? e : ""
					}
					case Cr.b:
					case Cr.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Qs = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Ks = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.db:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Ys = Object(J.c)({
					body: ds,
					eventSchedule: ls,
					flair: ps,
					govType: fs,
					isChatPost: bs,
					isContestMode: hs,
					isNSFW: ys,
					isOC: ms,
					isPostAsMetaMod: vs,
					isPoll: gs,
					isPublicLink: Es,
					isSpoiler: _s,
					newSubreddit: Os,
					newTopMod: Is,
					nextSubreddit: Ss,
					polls: Ds,
					postSchedule: js,
					postToTwitter: As,
					recaptcha: Ps,
					scheduledPostId: Rs,
					sendReplies: Ns,
					stickyPosition: Ls,
					submissionType: ks,
					suggestedSort: Ms,
					title: Ws,
					tournament: Ks,
					talk: Bs
				});
			const $s = e => e ? e.replace(/\+/g, " ") : "";
			var zs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b: {
						if (Kr(t) !== G.Tb.POST_CREATION) return null;
						const n = Yr(t);
						return n && n.text && $s(n.text) ? Jr.i.MARKDOWN : e
					}
					case fr.I: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case fr.J:
						return null;
					case fr.R: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Cr.b:
					case Cr.n:
						return t.payload.contentType === Zr.a.RTJSON ? Jr.i.RICH_TEXT : Jr.i.MARKDOWN;
					default:
						return e
				}
			};
			const Xs = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				Js = (e, t) => {
					const n = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(Jr.w)(t)
					});
					if (!n.length) return e;
					const r = n.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return {
						...e,
						...r
					}
				};
			var Zs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.c:
					case fr.d:
					case fr.e:
						return e[G.Cb.BODY] ? {
							...e,
							[G.Cb.BODY]: []
						} : e;
					case fr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return e[G.Cb.BODY] && n ? {
							...e,
							[G.Cb.BODY]: []
						} : e
					}
					case fr.j:
						return e[G.Cb.TITLE] ? {
							...e,
							[G.Cb.TITLE]: []
						} : e;
					case fr.M: {
						const n = t.payload;
						return {
							...e,
							[n]: []
						}
					}
					case fr.n: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: []
						} : Xs
					}
					case fr.L:
					case fr.K: {
						const n = t.payload;
						return Js(e, n)
					}
					case l.b:
						return Kr(t) !== G.Tb.POST_CREATION ? Xs : e;
					default:
						return e
				}
			};
			var ea = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.b:
						case fr.c:
						case fr.d:
						case fr.e:
						case fr.f:
						case fr.j:
						case fr.i:
						case fr.V:
						case fr.W:
						case fr.Y:
						case Zn.n:
						case fr.ab:
						case fr.bb:
							return !0;
						case fr.h: {
							const {
								isContentChanged: n
							} = t.payload;
							return !!n || e
						}
						case fr.Q:
						case Cr.h:
							return !1;
						case fr.S:
							return t.payload;
						case l.b:
							return Kr(t) === G.Tb.POST_CREATION && e;
						case fr.F:
						case Zn.l:
						case Zn.g:
							return !1;
						default:
							return e
					}
				},
				ta = n("./src/redditGQL/types.ts");
			const na = {
				uniqueRules: [],
				titleTriggeredRules: [],
				bodyTriggeredRules: [],
				isBlockRuleTriggered: !1,
				errors: null
			};
			var ra = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : na,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r, s, a, c;
				switch (t.type) {
					case fr.D:
						return {
							...e, ...t.payload, titleTriggeredRules: null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.triggeredRules) || void 0 === r ? void 0 : r.filter(e => e.triggeredLocation === ta.P.Title || e.triggeredLocation === ta.P.All), bodyTriggeredRules: null === (a = null === (s = t.payload) || void 0 === s ? void 0 : s.triggeredRules) || void 0 === a ? void 0 : a.filter(e => e.triggeredLocation === ta.P.Body || e.triggeredLocation === ta.P.All), uniqueRules: [...e.uniqueRules, ...null === (c = t.payload) || void 0 === c ? void 0 : c.triggeredRules.map(e => e.guidanceId).filter(t => {
								if (!e.uniqueRules.includes(t)) return t
							})]
						};
					case fr.i:
					case l.b:
						return na;
					default:
						return e
				}
			};
			const sa = Jr.r.Post;
			var aa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.w:
							return Jr.r.Post;
						case fr.G:
							return t.payload;
						case Zn.j:
							return Jr.r.Draft;
						case l.b:
							return Kr(t) !== G.Tb.POST_CREATION ? sa : e;
						default:
							return e
					}
				},
				ca = Object(J.c)({
					editorMode: zs,
					fieldValidation: Zs,
					isChanged: ea,
					submitMode: aa,
					postGuidance: ra
				});
			var oa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.I:
						return t.payload.editorMode === Jr.i.MARKDOWN ? t.payload.postContent || "" : e;
					case fr.J:
						return "";
					case fr.R:
						return t.payload.editorMode === Jr.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const ia = ss.a.createInitial;
			var da = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ia(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.J:
							return ss.a.createInitial();
						case fr.I: {
							const n = t.payload;
							return n.editorMode === Jr.i.RICH_TEXT && "object" == typeof n.postContent ? ss.a.createInitial(n.postContent, n.mediaMetadata) : e
						}
						case fr.R: {
							const n = t.payload;
							return n.editorMode === Jr.i.RICH_TEXT && n.editorKey === Jr.h.POST_EDITING ? ss.a.createInitial(n.content) : e
						}
						default:
							return e
					}
				},
				la = Object(J.c)({
					markdown: oa,
					rte: da
				});
			var ua = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.I: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case fr.J:
							return null;
						default:
							return e
					}
				},
				pa = Object(J.c)({
					draft: la,
					postId: ua
				});
			var fa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.C:
					case fr.B:
						return !1;
					case fr.z:
						return !0;
					default:
						return e
				}
			};
			var ba = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.z:
						case fr.B:
							return !1;
						case fr.C:
							return !0;
						default:
							return e
					}
				},
				ha = Object(J.c)({
					error: fa,
					pending: ba
				});
			var ya = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case fr.j:
					case fr.d:
					case fr.e:
					case fr.i:
					case fr.r:
					case Zn.g:
						return !0;
					case fr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					default:
						return e
				}
			};
			const ma = {};
			var ga = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ma,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fr.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const va = [];
			var Ea = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : va,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fr.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				_a = Object(J.c)({
					api: ha,
					isInputChanged: ya,
					model: ga,
					order: Ea
				}),
				Oa = Object(J.c)({
					api: Gr,
					drafts: Qr,
					formData: Ys,
					formState: ca,
					postEditing: pa,
					subredditRec: _a
				}),
				Ia = n("./src/reddit/actions/dashboard/constants.ts");
			const Sa = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var Ta = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ia.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Ia.d: {
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
					case Ia.c: {
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
			var Da = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.b:
					case Xe.c:
						return null;
					case Xe.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var wa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.c:
						return !1;
					case Xe.b:
						return !0;
					default:
						return e
				}
			};
			var Ca = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.c:
							return !0;
						case Xe.b:
						case Xe.a:
							return !1;
						default:
							return e
					}
				},
				ja = Object(J.c)({
					error: Da,
					loaded: wa,
					pending: Ca
				}),
				Aa = Object(J.c)({
					list: ja
				}),
				Pa = n("./node_modules/lodash/isEmpty.js"),
				Ra = n.n(Pa);
			const Na = {};
			var La = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Na,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							return Ra()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				xa = n("./node_modules/lodash/forOwn.js"),
				ka = n.n(xa),
				Ua = n("./src/reddit/helpers/name/index.ts");
			const Ma = {};
			var Fa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ma,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							if (Ra()(n)) return e;
							const r = {};
							return ka()(n, e => {
								r[Object(Ua.i)(e.unitName)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Ba = Object(J.c)({
					api: Aa,
					models: La,
					nameToId: Fa
				}),
				Ga = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const qa = [];
			var Ha = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ga.a: {
							const {
								subredditId: n
							} = t.payload;
							return [...e, n]
						}
						default:
							return e
					}
				},
				Va = n("./src/reddit/actions/economics/banners/constants.ts");
			const Wa = {
				dismissedBanners: {}
			};
			var Qa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Va.c: {
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
						case Va.d: {
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
						case Va.a:
						case Va.b: {
							const {
								subredditId: n,
								bannerType: r
							} = t.payload, s = e.dismissedBanners[n] || {}, a = t.type === Va.a;
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
				Ka = n("./src/reddit/models/Badge/managementPage.ts");
			const Ya = {
				badgeType: Ka.a.Cosmetic,
				view: Ka.c.Gallery
			};
			var $a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ya,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c: {
						const {
							badge: n,
							initialView: r
						} = t.payload;
						return n || r ? {
							...e,
							badgeType: n ? Object(Ka.d)(n.placement) : e.badgeType,
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
						return Ya;
					default:
						return e
				}
			};
			var za = function() {
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
				Xa = n("./src/reddit/actions/economics/powerups/constants.ts");

			function Ja(e, t) {
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

			function Za(e) {
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
						emotes: s.map(e => Ja(e, n))
					}
				}), t
			}
			const ec = {};

			function tc(e, t, n) {
				if (!e[t]) return e;
				const r = e[t].findIndex(e => e.title === t);
				return -1 === r ? e : {
					...e,
					[t]: e[t].map((e, s) => s !== r ? e : {
						title: e.title,
						emotes: {
							...e.emotes,
							[n.name]: Ja(n, t)
						}
					})
				}
			}
			var nc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec,
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
								[s]: e[s] ? O()([...e[s], ...t], e => {
									let {
										title: t
									} = e;
									return t
								}) : t
							}
						}
						return e
					}
					case Xa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload;
						return tc(e, n, r)
					}
					default:
						return e
				}
			};
			const rc = {};
			var sc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rc,
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
				ac = n("./src/reddit/actions/economics/me/constants.ts");
			const cc = {
				fetched: !1,
				data: {}
			};
			var oc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ac.a:
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
				ic = n("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const dc = {
				fetched: !1,
				data: null
			};
			var lc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ac.b:
							return {
								fetched: !0, data: e.data
							};
						case ac.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				uc = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				pc = Object(J.c)({
					banners: Qa,
					currentBadgeManagementScreen: $a,
					currentModalArgs: za,
					emotes: nc,
					gifs: sc,
					me: oc,
					paymentSystems: ic.b,
					pointsCopy: lc,
					subredditPremium: uc.b
				}),
				fc = n("./src/reddit/actions/emailVerificationTooltip.ts");
			const bc = {
				isShowing: !1
			};
			var hc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fc.a:
							return {
								...e, isShowing: !e.isShowing
							};
						default:
							return e
					}
				},
				yc = n("./src/reddit/actions/emoji.ts");
			const mc = {};
			var gc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yc.g: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case yc.f:
						case yc.e: {
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
				vc = Object(J.c)({
					pending: gc
				}),
				Ec = Object(J.c)({
					list: vc
				});
			const _c = {};
			var Oc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yc.e:
						case yc.b:
							return e;
						case yc.f: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case yc.c: {
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
						case yc.h: {
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
						case yc.d: {
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
				Ic = Object(J.c)({
					api: Ec,
					models: Oc
				}),
				Sc = n("./src/reddit/actions/experiments.ts");
			const Tc = /^experiment_(.*)$/i,
				Dc = e => {
					const t = e.match(Tc);
					if (null !== t) return t[1]
				},
				wc = {};
			var Cc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Yr(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = Dc(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return Ra()(r) ? e : {
								...e,
								...r
							}
						}
						case Sc.b: {
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
				jc = n("./src/reddit/actions/externalAccount.ts");
			const Ac = {};
			var Pc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ac,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jc.e:
					case jc.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case jc.d: {
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
			const Rc = {};
			var Nc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jc.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case jc.f:
						case jc.d: {
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
				Lc = Object(J.c)({
					error: Pc,
					pending: Nc
				});
			const xc = {};
			var kc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jc.l:
					case jc.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case jc.j: {
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
			const Uc = {};
			var Mc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jc.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case jc.c:
						case jc.a: {
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
				Fc = Object(J.c)({
					error: kc,
					pending: Mc
				});
			const Bc = {};
			var Gc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jc.i:
					case jc.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case jc.g: {
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
			const qc = {};
			var Hc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jc.h: {
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
			const Vc = {};
			var Wc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jc.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case jc.h:
						case jc.g: {
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
				Qc = Object(J.c)({
					error: Gc,
					fetched: Hc,
					pending: Wc
				});
			const Kc = {};
			var Yc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jc.l:
					case jc.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case jc.j: {
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
			const $c = {};
			var zc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jc.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case jc.k:
						case jc.j: {
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
				Xc = Object(J.c)({
					error: Yc,
					pending: zc
				}),
				Jc = Object(J.c)({
					connect: Lc,
					disconnect: Fc,
					user: Xc,
					subreddit: Qc
				});
			const Zc = {};
			var eo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jc.h: {
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
			const to = {};
			var no = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : to,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jc.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case jc.c: {
							const {
								username: n,
								provider: r
							} = t.payload, s = e[n];
							return s && s[r] ? {
								...e,
								[n]: Hr()(s, r)
							} : e
						}
						default:
							return e
					}
				},
				ro = Object(J.c)({
					api: Jc,
					user: no,
					subreddit: eo
				}),
				so = n("./src/reddit/featureFlags/index.ts");
			const ao = new Set(["0", "disabled", "false", "off", ""]);
			var co = e => !ao.has(e.toLowerCase());
			const oo = so.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				io = so.a.reduce((e, t) => (e[t] = null, e), {});
			var lo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : io,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Yr(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(so.g)(e);
									if (r) {
										const s = oo[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || co(r);
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
						case so.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case so.c: {
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
				uo = Object(J.c)({
					overrides: lo
				}),
				po = n("./src/reddit/actions/firstPost/constants.ts");
			const fo = {
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
			var bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case po.e:
							return {
								...e, firstFormEditEvent: t.payload
							};
						case po.d:
							return {
								...e, postTitle: t.payload
							};
						case po.b:
							return {
								...e, postBody: t.payload
							};
						case po.c:
							return {
								...e, subreddit: t.payload
							};
						case po.a:
							return {
								...e, currentPromptIndex: t.payload
							};
						case po.f:
							return {
								...e, selectedPredicatesInt: t.payload
							};
						case fr.Q:
							return {
								...e, postSubmitted: !0
							};
						case fr.eb:
						case fr.K:
							return {
								...e, postSubmitted: !1
							};
						default:
							return e
					}
				},
				ho = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const yo = {
				focusedVerticalGqlError: null
			};
			var mo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ho.g:
					case ho.f:
					case ho.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case ho.d:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const go = {
				focusedVerticalGqlPending: !1
			};
			var vo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : go,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ho.g:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case ho.d:
						case ho.f:
						case ho.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Eo = Object(J.c)({
					error: mo,
					pending: vo
				});
			var _o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ho.f:
					case ho.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Oo = {
				dismissed: !0
			};
			var Io = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ho.i:
						return {
							dismissed: !1
						};
					case ho.h:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var So = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ho.f:
					case ho.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var To = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ho.f:
					case ho.c:
					case ho.e:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Do = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ho.f:
						case ho.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				wo = Object(J.c)({
					api: Eo,
					components: Io,
					interactedSubredditIds: So,
					recommendedSubredditIds: Do,
					category: _o,
					lastLoadedEnv: To
				});
			Object(B.a)("FONTS_FONT_FILES_PARSED");
			const Co = [];
			var jo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Co,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Ao = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.b:
						return t.payload;
					default:
						return e
				}
			};
			var Po = function() {
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
			var Ro = function() {
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
			var No = function() {
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
				Lo = Object(J.c)({
					error: Po,
					pending: Ro,
					showLoader: No
				});
			var xo = function() {
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
			var ko = function() {
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
			var Uo = function() {
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
			var Mo = function() {
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
			var Fo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.H:
						return !0;
					default:
						return e
				}
			};
			var Bo = function() {
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
			const Go = ze.o;
			var qo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Go,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.eb:
							return t.payload;
						case Ie.I: {
							const {
								award: e
							} = t.payload;
							return e || Go
						}
						default:
							return e
					}
				},
				Ho = Object(J.c)({
					api: Lo,
					correlationId: xo,
					gildModalThingId: Uo,
					isAnonymous: Mo,
					isIframed: Fo,
					message: Bo,
					gildedThing: ko,
					selectedAward: qo
				});
			var Vo = function() {
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
			var Wo = function() {
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
				Qo = Object(J.c)({
					error: Vo,
					pending: Wo
				});
			var Ko = function() {
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
				Yo = Object(J.c)({
					api: Qo,
					givePremiumModalAccountName: Ko
				}),
				$o = n("./src/reddit/actions/header.ts"),
				zo = n("./src/reddit/actions/overlayEvents.ts");
			var Xo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $o.a:
							return !1;
						case $o.b:
							return !0;
						case $o.c:
							return !e;
						case zo.b:
							return !1;
						default:
							return e
					}
				},
				Jo = Object(J.c)({
					isSubscriptionsDropdownOpen: Xo
				});
			var Zo = function() {
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
				ei = n("./src/reddit/actions/imageUploads.ts");
			const ti = {};
			var ni = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ti,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ei.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case ei.c:
					case ei.e:
					case ei.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case ei.a: {
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
			const ri = {};
			var si = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ri,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.e:
						case R.h:
						case D.c:
						case k.SUBREDDIT_LOADED:
						case D.g:
						case M.e:
						case "RECOMMENDED_POSTS_LOADED":
						case H.i:
						case Ze.e:
						case ye.c: {
							const n = {
									...e
								},
								{
									postInstances: r,
									posts: s
								} = t.payload;
							return r && s && Object.values(r).flat().forEach(e => {
								const t = s[e].impressionId;
								t && (n[t] = e)
							}), n
						}
						default:
							return e
					}
				},
				ai = n("./src/reddit/actions/interceptedAction.ts");
			var ci = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ai.a:
							return t.payload;
						case ai.b:
							return null;
						default:
							return e
					}
				},
				oi = n("./src/reddit/actions/changeUsername.ts");
			var ii = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oi.CHANGE_USERNAME_TOOLTIP_CLOSED:
							return !1;
						case oi.CHANGE_USERNAME_TOOLTIP_OPENED:
							return !0;
						default:
							return e
					}
				},
				di = n("./src/reddit/actions/moderatingSubreddits.ts");
			var li = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case di.a: {
							if (e) return e;
							const n = t.payload;
							return Object.keys(n).some(e => !0 === n[e].posts)
						}
						case k.SUBREDDIT_LOADED:
						case be.b:
						case be.f:
						case L.PAGE_LOADED: {
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
				ui = n("./src/reddit/actions/jsApi.ts");
			const pi = [];
			var fi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ui.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				bi = n("./src/reddit/actions/langSite/index.ts");
			const hi = {
				bannerClosedTime: 0
			};
			var yi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				mi = n("./src/reddit/actions/leaderboard/constants.ts");
			const gi = {};
			var vi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mi.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case mi.b:
					case mi.c: {
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
			const Ei = {};
			var _i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ei,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mi.a:
						case mi.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case mi.b: {
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
				Oi = Object(J.c)({
					error: vi,
					pending: _i
				});
			const Ii = {};
			var Si = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ii,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mi.c: {
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
				Ti = Object(J.c)({
					api: Oi,
					models: Si
				});
			var Di = function() {
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
			const wi = {};
			var Ci = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wi,
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
			const ji = {};
			var Ai = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji,
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
				Pi = Object(J.c)({
					error: Ci,
					pending: Ai
				});
			const Ri = {};
			var Ni = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri,
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
			const Li = {};
			var xi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Li,
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
			const ki = {};
			var Ui = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ki,
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
							} : Object(In.a)(e, n)
						}
						default:
							return e
					}
				},
				Mi = Object(J.c)({
					api: Pi,
					identifiers: xi,
					fetchedTokens: Ni,
					loadMore: Ui
				});
			const Fi = {};
			var Bi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi,
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
			const Gi = {};
			var qi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gi,
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
				Hi = Object(J.c)({
					error: Bi,
					pending: qi
				});
			const Vi = {};
			var Wi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vi,
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
			var Ki = function() {
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
			const Yi = {};
			var $i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yi,
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
							} : Object(In.a)(e, n)
						}
						default:
							return e
					}
				},
				zi = Object(J.c)({
					api: Hi,
					identifiers: Ki,
					fetchedTokens: Wi,
					loadMore: $i
				});
			const Xi = {};
			var Ji = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xi,
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
			const Zi = {};
			var ed = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zi,
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
				td = Object(J.c)({
					error: Ji,
					pending: ed
				});
			const nd = {};
			var rd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nd,
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
			const sd = {};
			var ad = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sd,
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
			const cd = {};
			var od = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cd,
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
							} : Object(In.a)(e, n)
						}
						default:
							return e
					}
				},
				id = Object(J.c)({
					api: td,
					identifiers: ad,
					fetchedTokens: rd,
					loadMore: od
				});
			const dd = {};
			var ld = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dd,
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
					case Xe.f:
					case Xe.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Xe.d: {
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
			const ud = {};
			var pd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ud,
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
						case Xe.f: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Xe.e:
						case Xe.d: {
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
				fd = Object(J.c)({
					error: ld,
					pending: pd
				});
			const bd = {};
			var hd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bd,
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
					case Xe.e: {
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
			const yd = {};
			var md = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yd,
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
			const gd = {};
			var vd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gd,
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
							} : Object(In.a)(e, n)
						}
						case Xe.e: {
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
				Ed = Object(J.c)({
					api: fd,
					identifiers: md,
					fetchedTokens: hd,
					loadMore: vd
				});
			const _d = {};
			var Od = n("./src/reddit/actions/pages/postSetPage/constants.ts");
			const Id = {};
			var Sd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Id,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.c:
					case P.b:
					case P.g:
					case P.f:
					case D.d:
					case D.c:
					case N.c:
					case N.b:
					case k.SUBREDDIT_PENDING:
					case k.SUBREDDIT_LOADED:
					case w.c:
					case D.h:
					case D.g:
					case R.e:
					case R.f:
					case R.i:
					case R.h:
					case C.s:
					case C.r:
					case A.b:
					case A.c:
					case Od.b:
					case Od.c:
					case Q.PROFILE_POSTS_PENDING:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_PENDING:
					case Q.MORE_POSTS_LOADED:
					case M.f:
					case M.e:
					case x.f:
					case x.e:
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
					case D.a:
					case N.a:
					case k.SUBREDDIT_FAILED:
					case D.f:
					case R.g:
					case C.q:
					case A.a:
					case H.h:
					case Od.a:
					case M.d:
					case x.d:
					case Q.PROFILE_POSTS_FAILED:
					case Q.MORE_POSTS_FAILED:
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
			const Td = {};
			var Dd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Td,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.c:
						case P.g:
						case D.d:
						case w.c:
						case N.c:
						case Q.PROFILE_POSTS_PENDING:
						case x.f:
						case k.SUBREDDIT_PENDING:
						case D.h:
						case R.f:
						case R.i:
						case C.s:
						case A.c:
						case Od.c:
						case M.f:
						case Q.MORE_POSTS_PENDING:
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
						case D.c:
						case D.a:
						case N.a:
						case N.b:
						case Od.a:
						case Od.b:
						case x.d:
						case x.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED:
						case k.SUBREDDIT_LOADED:
						case k.SUBREDDIT_FAILED:
						case D.g:
						case D.f:
						case w.a:
						case w.b:
						case R.e:
						case R.d:
						case R.h:
						case R.g:
						case C.r:
						case C.q:
						case M.d:
						case M.e:
						case Q.MORE_POSTS_FAILED:
						case Q.MORE_POSTS_LOADED:
						case j.a:
						case j.b:
						case V.o:
						case A.b:
						case A.a:
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
						case V.w: {
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
				wd = Object(J.c)({
					error: Sd,
					pending: Dd
				});
			const Cd = {};
			var jd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case D.c:
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
				Ad = n("./src/reddit/actions/postList.ts"),
				Pd = n("./node_modules/lodash/omitBy.js"),
				Rd = n.n(Pd);

			function Nd(e, t) {
				return t = t.toLowerCase(), Rd()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const Ld = {};
			var xd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ld,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ad.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Ad.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Hr()(e, [n]) : e
					}
					case k.SUBREDDIT_INVALIDATE_LISTING:
						return Nd(e, t.payload);
					default:
						return e
				}
			};
			const kd = {};
			var Ud = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.b:
						case R.e:
						case D.c:
						case N.b:
						case k.SUBREDDIT_LOADED:
						case Q.PROFILE_POSTS_LOADED:
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
						case D.g:
						case R.h:
						case C.r:
						case M.e:
						case Q.MORE_POSTS_LOADED:
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
							return Nd(e, t.payload);
						default:
							return e
					}
				},
				Md = n("./src/reddit/actions/post.ts");
			const Fd = {};
			var Bd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.c:
						case D.d:
						case R.f:
						case N.c:
						case Q.PROFILE_POSTS_PENDING:
						case k.SUBREDDIT_PENDING:
						case Od.c:
						case x.f:
						case Q.PROFILE_POSTS_PENDING:
						case U.TOPIC_DATA_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: []
							}
						}
						case Xe.e:
						case w.b:
						case R.e:
						case j.b:
						case D.c:
						case P.b:
						case N.b:
						case k.SUBREDDIT_LOADED:
						case V.o:
						case A.b:
						case Od.b:
						case x.e:
						case Q.PROFILE_POSTS_LOADED:
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
						case V.w: {
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
						case D.g:
						case R.h:
						case C.r:
						case Q.MORE_POSTS_LOADED:
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
						case Md.o: {
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
							return Nd(e, t.payload);
						default:
							return e
					}
				},
				Gd = n("./src/lib/makeListingKey/index.ts");
			const qd = {};
			var Hd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(Gd.b)(n) ? {
							...e,
							[n]: {
								sort: r,
								hasChanged: !1
							}
						} : e
					}
					case kn.a:
					case kn.p: {
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
			const Vd = {};
			var Wd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.b:
					case P.f:
					case D.c:
					case N.b:
					case k.SUBREDDIT_LOADED:
					case x.e:
					case Q.PROFILE_POSTS_LOADED:
					case D.g:
					case R.e:
					case R.h:
					case C.r:
					case M.e:
					case Q.MORE_POSTS_LOADED:
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
						} : Object(In.a)(e, n)
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
						} : Object(In.a)(e, n)
					}
					case k.SUBREDDIT_INVALIDATE_LISTING:
						return Nd(e, t.payload);
					default:
						return e
				}
			};
			const Qd = {};
			var Kd = function() {
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
				Yd = Object(J.c)({
					api: wd,
					correlationIds: jd,
					endMarkers: xd,
					fetchedTokens: Ud,
					ids: Bd,
					listingSort: Hd,
					loadMore: Wd,
					pageInfo: Kd,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _d,
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
				$d = Object(J.c)({
					activeKey: Di,
					authorOrder: Mi,
					commentOrder: zi,
					communityOrder: id,
					listingOrder: Ed,
					postOrder: Yd
				});
			var zd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c: {
						const n = t.payload;
						return Ra()(n.announcements) ? e : n.announcements || null
					}
					default:
						return e
				}
			};
			var Xd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c: {
						const n = t.payload;
						return Ra()(n.featuredLiveThread) ? e : n.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Jd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c:
						return !0;
					default:
						return e
				}
			};
			var Zd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				el = Object(J.c)({
					announcements: zd,
					featured: Xd,
					isFrontpageLoaded: Jd,
					shouldShowAnnouncements: Zd
				}),
				tl = n("./src/reddit/actions/media.ts");
			const nl = {},
				rl = {};
			var sl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tl.b: {
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
			const al = {};
			var cl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : al,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tl.e: {
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
				ol = Object(J.c)({
					currentSlideIndex: sl,
					isGalleryTileLayout: cl
				});
			var il = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tl.c:
						return t.payload;
					default:
						return e
				}
			};
			var dl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tl.d:
							return t.payload;
						default:
							return e
					}
				},
				ll = Object(J.c)({
					isMuted: il,
					volume: dl
				}),
				ul = n("./src/reddit/actions/merchandisingUnitAnnouncements/constants.ts");
			const pl = [];
			var fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case D.c: {
							const r = t.payload;
							return Ra()(r.merchandisingUnitAnnouncements) ? e : null !== (n = r.merchandisingUnitAnnouncements) && void 0 !== n ? n : pl
						}
						case ul.a: {
							const n = t.payload;
							return e.filter(e => e.feedElement.id !== n.id)
						}
						default:
							return e
					}
				},
				bl = n("./src/reddit/actions/meta.ts");
			const hl = {
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
				userAgent: "",
				edgebucket: void 0
			};
			var yl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bl.b:
							return t.payload;
						case bl.a:
							return {
								...e, ...t.payload
							};
						case bl.e:
							return {
								...e, locale: t.payload
							};
						case bl.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case bl.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case bl.d:
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
				ml = n("./src/reddit/actions/subredditModeration/constants.ts");
			const gl = {};
			var vl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case be.b:
					case be.f:
					case L.PAGE_LOADED: {
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
					case ml.kb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(In.a)(e, n)
					}
					case ml.db: {
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
			var El = function() {
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
			var _l = function() {
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
				Ol = Object(J.c)({
					error: El,
					pending: _l
				});
			const Il = [];
			var Sl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Il,
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
				Tl = Object(J.c)({
					api: Ol,
					names: Sl
				}),
				Dl = Object(J.c)({
					filteredSubreddits: Tl
				}),
				wl = n("./src/reddit/actions/modMode.ts");
			var Cl = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wl.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const jl = {};
			var Al = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jl,
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
			const Pl = {};
			var Rl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pl,
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
				Nl = Object(J.c)({
					error: Al,
					pending: Rl
				});
			const Ll = {};
			var xl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ll,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case le.y:
						case be.b:
						case be.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				kl = Object(J.c)({
					api: Nl,
					models: xl
				});
			var Ul = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.b:
					case C.c:
						return null;
					case C.a:
						return t.payload;
					default:
						return e
				}
			};
			var Ml = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.a:
					case C.c:
						return !0;
					case C.b:
						return !1;
					default:
						return e
				}
			};
			var Fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.b:
						case C.a:
						case C.c:
							return null;
						case C.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Bl = Object(J.c)({
					error: Ul,
					fetched: Ml,
					pending: Fl
				});
			var Gl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.f:
					case C.g:
						return null;
					case C.e:
						return t.payload;
					default:
						return e
				}
			};
			var ql = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.e:
					case C.g:
						return !0;
					case C.f:
						return !1;
					default:
						return e
				}
			};
			var Hl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.e:
						case C.g:
							return !1;
						case C.f:
							return !0;
						default:
							return e
					}
				},
				Vl = Object(J.c)({
					error: Gl,
					fetched: ql,
					pending: Hl
				});
			var Wl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.i:
					case C.j:
						return null;
					case C.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ql = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.h:
					case C.j:
						return !0;
					case C.i:
						return !1;
					default:
						return e
				}
			};
			var Kl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.h:
						case C.j:
							return !1;
						case C.i:
							return !0;
						default:
							return e
					}
				},
				Yl = Object(J.c)({
					error: Wl,
					fetched: Ql,
					pending: Kl
				});
			var $l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.l:
					case C.m:
						return null;
					case C.k:
						return t.payload;
					default:
						return e
				}
			};
			var zl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.k:
					case C.m:
						return !0;
					case C.l:
						return !1;
					default:
						return e
				}
			};
			var Xl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.k:
						case C.m:
							return !1;
						case C.l:
							return !0;
						default:
							return e
					}
				},
				Jl = Object(J.c)({
					error: $l,
					fetched: zl,
					pending: Xl
				});
			var Zl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.o:
					case C.p:
						return null;
					case C.n:
						return t.payload;
					default:
						return e
				}
			};
			var eu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.n:
					case C.p:
						return !0;
					case C.o:
						return !1;
					default:
						return e
				}
			};
			var tu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.n:
						case C.p:
							return !1;
						case C.o:
							return !0;
						default:
							return e
					}
				},
				nu = Object(J.c)({
					error: Zl,
					fetched: eu,
					pending: tu
				});
			var ru = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.t:
						return !1;
					case C.u:
						return !0;
					default:
						return e
				}
			};
			var su = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.t:
							return !0;
						case C.u:
							return !1;
						default:
							return e
					}
				},
				au = Object(J.c)({
					fetched: ru,
					pending: su
				});
			var cu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.A:
					case C.B:
						return null;
					case C.z:
						return t.payload;
					default:
						return e
				}
			};
			var ou = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.A:
					case C.z:
						return !1;
					case C.B:
						return !0;
					default:
						return e
				}
			};
			var iu = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.A:
							return !0;
						case C.B:
						case C.z:
							return !1;
						default:
							return e
					}
				},
				du = Object(J.c)({
					error: cu,
					fetched: ou,
					pending: iu
				});
			var lu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.w:
					case C.x:
						return null;
					case C.v:
						return t.payload;
					default:
						return e
				}
			};
			var uu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.v:
					case C.x:
						return !0;
					case C.w:
						return !1;
					default:
						return e
				}
			};
			var pu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.v:
						case C.x:
							return null;
						case C.w:
							const {
								id: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				fu = Object(J.c)({
					error: lu,
					fetched: uu,
					pending: pu
				}),
				bu = Object(J.c)({
					addSubreddit: Bl,
					create: Vl,
					deleteMulti: Yl,
					duplicate: Jl,
					edit: nu,
					forUser: au,
					recommendations: du,
					removeSubreddit: fu
				}),
				hu = n("./node_modules/lodash/isEqual.js"),
				yu = n.n(hu),
				mu = n("./node_modules/lodash/union.js"),
				gu = n.n(mu);

			function vu(e, t, n) {
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
			var Eu = n("./src/reddit/actions/profile/constants.ts");
			const _u = {};
			var Ou = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.b:
						case C.r:
						case C.u:
						case Eu.h: {
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
								a[t] = gu()(s, n).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return yu()(e, a) ? e : a
						}
						case C.g:
						case C.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = vu(s, r.url, (e, t) => e > t ? 1 : -1);
							return s.splice(a, 0, r.url), {
								...e,
								[n]: s
							}
						}
						case C.j: {
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
				Iu = n("./src/reddit/actions/subscription/constants.ts"),
				Su = n("./src/reddit/models/Multireddit/index.ts");
			const Tu = {};
			var Du = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.b:
					case C.r:
					case C.u:
					case Eu.h:
					case ye.c: {
						let n = {};
						for (const r in t.payload.multireddits) {
							const s = {
									...t.payload.multireddits[r]
								},
								a = e[r];
							a && !Object(Su.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && yu()(e[s.url], s) || (n = {
								...n,
								[r]: s
							})
						}
						return Ra()(n) ? e : {
							...e,
							...n
						}
					}
					case C.g:
					case C.m: {
						const {
							multireddit: n
						} = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case C.j: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n], r
					}
					case C.p: {
						const n = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case C.x: {
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
					case Iu.d: {
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
					case Iu.e: {
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
					case C.c: {
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
			const wu = {};
			var Cu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.B: {
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
				ju = Object(J.c)({
					api: bu,
					byUserId: Ou,
					models: Du,
					recommendations: Cu
				}),
				Au = n("./src/reddit/actions/notificationBanner.ts");
			var Pu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Au.b:
							return t.payload.notificationBannerId;
						case Au.a:
							return null;
						default:
							return e
					}
				},
				Ru = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var Nu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ru.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Ru.e:
					case Ru.b:
						return !1;
					default:
						return e
				}
			};
			var Lu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ru.e:
							return !0;
						case Ru.a:
						case Ru.b:
							return !1;
						default:
							return e
					}
				},
				xu = Object(J.c)({
					error: Nu,
					pending: Lu
				}),
				ku = n("./src/reddit/actions/inboxBanner/constants.ts"),
				Uu = n("./src/reddit/models/inboxBanner/index.ts");
			const Mu = {
				banners: [],
				dismissedBanners: []
			};
			var Fu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ku.b:
						return {
							...e, banners: t.payload.reduce((e, t) => t.applicablePlatforms.find(e => e.platform === Uu.b.DESKTOP) ? [...e, t] : e, [])
						};
					case ku.a:
						return {
							...e, dismissedBanners: [...e.dismissedBanners || [], t.payload]
						};
					default:
						return e
				}
			};
			var Bu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ru.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var Gu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ru.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const qu = [];
			var Hu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ru.b: {
						const n = t.payload && t.payload.notifications;
						return [...e, ...n]
					}
					case Ru.f: {
						const n = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== n)
					}
					case Ru.d: {
						const n = t.payload && t.payload.id,
							r = t.payload && t.payload.now,
							s = e.findIndex(e => e.id === n);
						return -1 === s ? e : [...e.slice(0, s), {
							...e[s],
							readAt: r
						}, ...e.slice(s + 1)]
					}
					case Ru.c: {
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
			var Vu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ru.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Wu = Object(J.c)({
					api: xu,
					banner: Fu,
					earlierDividerIndex: Bu,
					notifications: Hu,
					pageInfo: Vu,
					markAllAsReadTimestamp: Gu
				}),
				Qu = n("./src/reddit/actions/nps.ts");
			const Ku = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Yu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ku,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qu.c:
							return {
								...Ku, pending: !0
							};
						case Qu.a:
							return Ku;
						case Qu.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...Ku,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				$u = n("./src/reddit/actions/accountGender/constants.ts"),
				zu = n("./src/reddit/actions/onboarding/constants.ts");
			const Xu = {
				success: !1,
				failure: !1
			};
			var Ju = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $u.b:
						return {
							...Xu, success: !0
						};
					case $u.c:
						return {
							...Xu, failure: !0
						};
					case zu.a:
						return {
							...Xu
						};
					default:
						return e
				}
			};
			var Zu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case D.c:
					case zu.c: {
						const e = t.payload;
						return (null == e ? void 0 : e.interestTopicRecommendations) && !Ra()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
					}
					default:
						return e
				}
			};
			var ep = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zu.b:
							return !0;
						default:
							return e
					}
				},
				tp = Object(J.c)({
					genderUpdateState: Ju,
					interestTopicRecommendationsState: Zu,
					shouldSkipOnboardingState: ep
				});
			const np = e => {
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
			const rp = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = np(n);
					return t
				},
				sp = {};
			var ap = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sc.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return rp(n)
					}
					default:
						return e
				}
			};
			var cp = Object(J.c)({
					byName: ap,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Sc.a: {
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
				op = Object(J.c)({
					experiments: cp
				}),
				ip = n("./node_modules/history/esm/history.js"),
				dp = n("./src/reddit/constants/history.ts");
			n("./src/reddit/helpers/isRobotIndexableMeta.ts");
			const lp = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				up = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				pp = (e, t, n, r) => {
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
			var fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case l.b: {
						const r = (null === (n = e.currentPage) || void 0 === n ? void 0 : n.isInitialPage) ? null : e.currentPage,
							s = t.payload,
							{
								routeMatch: a,
								location: c
							} = s,
							{
								key: o
							} = c;
						if (void 0 === o) return e;
						const i = Object(ip.e)(c),
							d = a ? pp(o, i, a, c) : up(o, i);
						let {
							referrers: l
						} = e;
						if ("PUSH" === s.action) {
							const e = r && r.url || "";
							l = {
								...l,
								[o]: e
							}
						} else if ("REPLACE" === s.action && r && l[r.key]) {
							const {
								[r.key]: e, ...t
							} = l;
							l = {
								...t,
								[o]: e
							}
						}
						return {
							...e,
							referrers: l,
							currentPage: d,
							lastPage: r
						}
					}
					case l.g: {
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
					case l.c: {
						const {
							routeMatch: n,
							location: r
						} = t.payload, {
							key: s
						} = r;
						if (void 0 === s) return e;
						const a = Object(ip.e)(r),
							c = n ? pp(s, a, n, r) : up(s, a);
						return {
							...e,
							currentPage: {
								...e.currentPage,
								...c,
								isInitialPage: !0
							}
						}
					}
					case l.h: {
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
					case be.b:
					case be.f:
						return !e.currentPage || t.payload.postMeta, e;
					case l.d:
						return e;
					case l.f: {
						const {
							allowNavigationCallback: n
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: n
						}
					}
					case l.e:
						return {
							...e, allowNavigationCallback: null
						};
					case D.c:
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
									[dp.b.FeedCorrelationId]: n
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const bp = {};
			var hp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bp,
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
			const yp = {};
			var mp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yp,
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
				gp = Object(J.c)({
					error: hp,
					pending: mp
				}),
				vp = Object(J.c)({
					voting: gp
				}),
				Ep = n("./node_modules/lodash/mapValues.js"),
				_p = n.n(Ep),
				Op = n("./src/reddit/reducers/posts/models/helpers.ts");
			const Ip = e => {
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
			var Sp = e => {
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
							userSelection: b,
							userWonAmount: h,
							voteUpdatesRemained: y,
							votingEndTimestamp: m,
							predictionStatus: g
						}
					} = e;
					if (i) {
						return {
							id: t,
							createdAt: s,
							creatorId: n,
							subredditId: r.id,
							endsAt: m,
							voteUpdatesRemained: y,
							postId: t,
							title: a,
							options: d,
							totalVoters: p,
							type: Gs.a.GA,
							isNSFW: c,
							isPrediction: i,
							isSpoiler: o,
							totalStakeAmount: u || 0,
							tournamentId: f,
							userSelection: b,
							userWonAmount: h,
							resolvedOptionId: l,
							predictionStatus: g,
							totalVoteCount: p
						}
					}
					return {
						id: t,
						createdAt: s,
						creatorId: n,
						subredditId: r.id,
						endsAt: m,
						postId: t,
						options: d,
						totalVoters: p,
						type: Gs.a.GA,
						isPrediction: i,
						userSelection: b
					}
				},
				Tp = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Dp = n("./src/reddit/models/Prediction/index.ts");

			function wp(e, t) {
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
			const Cp = {};
			var jp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cp,
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
					case D.c:
					case k.SUBREDDIT_LOADED:
					case H.i:
					case D.g:
					case be.b:
					case be.f:
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
						const r = _p()(t.payload.posts, Object(Op.i)([Op.q])),
							s = {};
						return Object.keys(r).forEach(e => {
							var t, n;
							const a = r[e];
							if (a.pollData && (s[e] = Sp(a)), null === (n = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									s[t.id] = wp(t, {
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
						return e[n] && Object(Dp.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(Tp.b)(r)
							}
						} : e
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
					case i.k: {
						const {
							[Gs.b.ByVoters]: n, pollId: r
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
					case D.c:
					case k.SUBREDDIT_LOADED:
					case H.i:
					case D.g:
					case be.b:
					case be.f: {
						const {
							governance: n,
							posts: r
						} = t.payload;
						if (n) {
							const t = Object.keys(n).reduce((e, t) => {
								const r = n[t],
									{
										[Gs.b.ByVoters]: s,
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
							const s = Ip(r[t].pollData);
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
			const Rp = {};
			var Np = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								[Gs.b.ByVotingPower]: n, pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: n
							}
						}
						case D.c:
						case k.SUBREDDIT_LOADED:
						case H.i:
						case D.g:
						case be.b:
						case be.f: {
							const {
								governance: n
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t],
										{
											[Gs.b.ByVotingPower]: s,
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
				Lp = Object(J.c)({
					byVoters: Pp,
					byVotingPower: Np
				});
			const xp = {};
			var kp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xp,
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
				Up = Object(J.c)({
					api: vp,
					models: jp,
					results: Lp,
					rewards: kp
				});
			const Mp = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yn.i:
					case Yn.j:
						return {
							...e, reorderError: null
						};
					case Yn.h:
						return {
							...e, reorderError: t.payload
						};
					case Yn.l:
					case Yn.m:
						return {
							...e, updateDescriptionError: null
						};
					case Yn.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Yn.p:
					case Yn.q:
						return {
							...e, updateLayoutError: null
						};
					case Yn.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Bp = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Gp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yn.i:
							return {
								...e, reorderPending: !0
							};
						case Yn.h:
						case Yn.j:
							return {
								...e, reorderPending: !1
							};
						case Yn.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Yn.k:
						case Yn.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Yn.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Yn.o:
						case Yn.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				qp = Object(J.c)({
					error: Fp,
					pending: Gp
				}),
				Hp = n("./src/reddit/helpers/path/index.ts");
			const Vp = {},
				Wp = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Hp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var Qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.b:
					case P.f:
					case L.PAGE_LOADED:
					case R.e:
					case R.h:
					case W.b:
					case W.e:
					case x.e:
					case x.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case k.SUBREDDIT_LOADED:
					case D.c:
					case N.b:
					case k.SUBREDDIT_LOADED:
					case be.b:
					case be.f:
					case Md.j:
					case C.r:
					case D.g:
					case M.e:
					case "RECOMMENDED_POSTS_LOADED":
					case H.i:
					case Ze.e:
					case F.b:
					case ye.c:
					case Yn.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = Wp(r);
							s = _p()(n, e)
						}
						return {
							...e,
							...s
						}
					}
					case Yn.d: {
						const {
							collection: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						const s = n.id;
						let a = n;
						if (r) {
							a = Wp(r)(n)
						}
						return {
							...e,
							[s]: a
						}
					}
					case Yn.g: {
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
					case Yn.a: {
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
					case Yn.e: {
						const {
							collectionId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case Yn.s: {
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
					case Yn.j: {
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
					case Yn.m: {
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
					case Yn.q: {
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
			const Kp = {};
			var Yp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.PAGE_LOADED:
						case Yn.f: {
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
						case Yn.d: {
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
						case Yn.e: {
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
				$p = Object(J.c)({
					models: Qp,
					subredditToIds: Yp,
					api: qp
				}),
				zp = n("./src/reddit/actions/postFlair.ts"),
				Xp = n("./src/reddit/models/Flair/index.ts");
			const Jp = {},
				Zp = {
					displaySettings: {
						isEnabled: !1,
						position: Xp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				ef = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					return 0 === n.length ? e : n.reduce((e, n) => (e[n] = {
						...Zp,
						...e[n],
						...t[n]
					}, e), {
						...e
					})
				};
			var tf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.b:
						case P.f:
						case L.PAGE_LOADED:
						case D.g:
						case R.e:
						case R.h:
						case C.r:
						case A.b:
						case be.b:
						case be.f:
						case D.c:
						case N.b:
						case ye.c:
						case k.SUBREDDIT_LOADED:
						case W.b:
						case W.e:
						case he.c:
						case he.i:
						case he.e:
						case he.g:
						case M.e:
						case F.b:
						case F.b:
						case x.b:
						case x.e:
						case Q.MORE_POSTS_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ze.e:
						case Ze.e:
						case H.i:
							return ef(e, t.payload.postFlair);
						case zp.c: {
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
						case zp.a: {
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
						case zp.f: {
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
						case zp.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: c
							} = s, o = Hr()(a, r), i = c.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: o,
									templateIds: i
								}
							}
						}
						case zp.e:
						case zp.d: {
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
							return ef(e, n.postFlair)
						}
						default:
							return e
					}
				},
				nf = n("./src/reddit/actions/postGuidance/constants.ts");
			const rf = {};
			var sf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nf.a:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const af = {};
			var cf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : af,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nf.b: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case nf.d:
					case nf.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(In.a)(e, n)
					}
					default:
						return e
				}
			};
			const of = {};
			var df = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : of ,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nf.d:
						case nf.b:
						case nf.c: {
							const {
								subredditName: n
							} = t.payload, r = t.type === nf.d;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				lf = Object(J.c)({
					error: cf,
					pending: df
				}),
				uf = Object(J.c)({
					fetch: lf
				});
			const pf = {};
			var ff = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nf.c: {
							const {
								subredditName: n,
								postGuidanceConfig: r
							} = t.payload;
							return {
								...e,
								[n]: {
									postGuidanceConfig: r
								}
							}
						}
						default:
							return e
					}
				},
				bf = Object(J.c)({
					api: uf,
					models: ff,
					allowlist: sf
				}),
				hf = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const yf = {
				pending: !1,
				items: {}
			};
			var mf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hf.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case hf.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var gf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Md.c:
							return t.payload;
						default:
							return e
					}
				},
				vf = n("./src/reddit/actions/embedAndImage.ts");
			const Ef = {};
			var _f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ef,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vf.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case vf.a: {
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
				Of = Object(J.c)({
					loadable: _f
				});
			const If = {};
			var Sf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : If,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Md.d: {
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
			var Tf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Md.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Df = [];
			var wf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Df,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Md.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case Md.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case Md.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Cf = {};
			var jf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.e:
					case R.h:
					case D.c:
					case k.SUBREDDIT_LOADED:
					case D.g:
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
			var Af = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Md.a:
							return t.payload;
						default:
							return e
					}
				},
				Pf = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const Rf = {};
			var Nf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pf.a: {
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
			const Lf = {};
			var xf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lf,
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
						case D.c:
						case k.SUBREDDIT_LOADED:
						case H.i:
						case D.g:
						case be.b:
						case be.f:
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
				kf = n("./src/reddit/actions/bulkActions/constants.ts"),
				Uf = n("./src/reddit/actions/constants.ts"),
				Mf = n("./src/reddit/actions/flairManagement/constants.ts"),
				Ff = n("./src/reddit/actions/googleQASchema/constants.ts"),
				Bf = n("./src/reddit/actions/happeningNow/constants.ts"),
				Gf = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				qf = n("./src/reddit/actions/subredditTopContent.ts"),
				Hf = n("./src/reddit/helpers/isPost.ts"),
				Vf = n("./node_modules/lodash/pickBy.js"),
				Wf = n.n(Vf);

			function Qf(e, t) {
				const n = Wf()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !yu()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var Kf = n("./src/reddit/models/Gold/Gild/index.tsx"),
				Yf = n("./src/reddit/models/Media/index.ts"),
				$f = n("./src/reddit/models/ModQueue/index.ts"),
				zf = n("./src/reddit/models/Post/index.ts"),
				Xf = n("./src/reddit/models/Vote/index.ts"),
				Jf = n("./src/reddit/actions/subredditDuplicates.ts"),
				Zf = n("./src/reddit/helpers/localStorage/index.ts");
			const eb = {};
			var tb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						if (Kr(t) === (G.Tb.COMMENTS || G.Tb.DUPLICATES)) {
							const n = Yr(t),
								r = $r(t),
								s = (null == n ? void 0 : n.impressionid) ? Object(Zf.u)(null == n ? void 0 : n.impressionid) : null == n ? void 0 : n.instanceId;
							if (s && r && r.partialPostId) {
								const t = Object(zf.y)(r.partialPostId);
								if (e[t] && e[s]) return {
									...e,
									[t]: Object(Op.c)(e[t], e[s])
								}
							}
						}
						return e;
					case be.b:
					case be.f: {
						const n = Object(Op.h)(t.payload.meta);
						return {
							...e,
							..._p()(t.payload.posts, Object(Op.i)([n, Op.d, Op.o, Op.p, Op.q, Object(Op.a)(e), Object(Op.b)(e), Object(Op.l)(e), Object(Op.m)(e), Object(Op.k)(e), Object(Op.j)(e)]))
						}
					}
					case Md.j:
						return Qf(e, t.payload);
					case Jf.a:
						return Qf(e, t.payload.posts);
					case P.b:
					case P.f:
					case L.PAGE_LOADED:
					case w.b:
					case j.b:
					case R.e:
					case R.h:
					case W.b:
					case W.e:
					case x.e:
					case x.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case k.SUBREDDIT_LOADED:
					case D.c:
					case N.b:
					case A.b:
					case C.r:
					case D.g:
					case M.e:
					case "RECOMMENDED_POSTS_LOADED":
					case V.o:
					case H.i:
					case F.b:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_LOADED:
					case T.c:
					case T.d:
					case S.n: {
						const n = Object(Op.h)(t.payload.meta);
						return {
							...e,
							..._p()(t.payload.posts, Object(Op.i)([n, Op.d, Op.o, Op.p, Op.q, Object(Op.n)(e), Object(Op.l)(e)]))
						}
					}
					case V.w: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(Op.h)(t.meta);
							Object.assign(n, _p()(t.posts, Object(Op.i)([s, Op.d, Op.o, Op.p, Object(Op.n)(e), Object(Op.l)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case A.b: {
						const n = Object(Op.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							..._p()(t.payload.posts, Object(Op.i)([n, Op.d, Op.o, Op.p, Object(Op.n)(e), Object(Op.l)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case Xe.e:
					case Ze.e:
					case ye.c: {
						const n = Object(Op.h)(t.payload.meta),
							r = _p()(t.payload.posts, Object(Op.i)([n, Op.o, Op.d, Op.p]));
						return de()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case Md.k: {
						const n = t.payload;
						return de()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case Uf.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(Xf.c)(s, r)
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
					case Md.h: {
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
					case Md.i: {
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
					case Ie.pb: {
						const {
							topAwardedPosts: n
						} = t.payload;
						return {
							...e,
							...n.reduce((e, t) => (e[t.post.id] = Object(Op.i)([Op.o])(Object(as.f)(t.post)), e), {})
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
								...Object(Kf.a)(c, r, s),
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
							[r]: Object(Kf.b)(s, n)
						} : e
					}
					case ml.r: {
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
							..._p()(r, Object(Op.i)([Op.o, Op.p]))
						}
					}
					case kf.b:
					case fe.x: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, c = r.filter(e => Object(Hf.a)(e)), o = Object($f.d)(e, n, c, s, a);
						return de()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Yn.t: {
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
					case Yn.e: {
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
					case Yn.g: {
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
					case ho.f: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							..._p()(n.posts, Object(Op.i)([Op.o, Op.p])),
							...e
						} : e
					}
					case Od.b:
					case he.c:
					case he.i:
					case he.e:
					case he.g:
					case qf.b:
						return {
							..._p()(t.payload.posts, Object(Op.i)([Op.o, Op.p])), ...e
						};
					case Md.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(Yf.M)(s.media) ? {
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
					case Mf.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case Mf.b: {
						const n = t.payload;
						return Object(In.a)(e, n)
					}
					case y.u: {
						const n = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...n
						}
					}
					case Gf.b: {
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
						return a[r] && (a[r] = Object(Op.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(Op.f)({
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
							[n]: Object(Op.r)(e[n], Object(Tp.a)(r))
						}
					}
					case Gf.a:
						return {
							...e
						};
					case Ff.b: {
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
					case Ff.a:
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
					case Bf.c: {
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
			var nb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Md.g:
							return t.payload;
						default:
							return e
					}
				},
				rb = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const sb = {};
			var ab = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rb.a: {
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
			const cb = [];
			var ob = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Md.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case D.c:
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
				ib = n("./node_modules/uuid/dist/esm-browser/v4.js");
			const db = Object(ib.a)();
			var lb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : db,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.PAGE_LOADED:
					case Cr.h:
					case Cr.a:
					case Cr.m:
					case Cr.f:
						return Object(ib.a)();
					default:
						return e
				}
			};
			var ub = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cr.d:
					case Cr.o:
					case Cr.k:
					case Cr.g:
					case Cr.a:
					case Cr.m:
					case Cr.f:
						return null;
					case Cr.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case Cr.e:
						return "error";
					default:
						return e
				}
			};
			var pb = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cr.g:
						return !0;
					case Cr.m:
					case Cr.a:
					case Cr.f:
					case Cr.e:
						return !1;
					default:
						return e
				}
			};
			var fb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cr.k:
							return !0;
						case Cr.j:
						case Cr.e:
						case Cr.o:
						case Cr.d:
							return !1;
						default:
							return e
					}
				},
				bb = Object(J.c)({
					creationToken: lb,
					error: ub,
					pending: pb,
					pendingUpdate: fb
				});
			const hb = {};
			var yb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cr.c: {
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
			const mb = {
				standalonePosts: {
					POSTS_LOADED: Cr.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: Cr.o
				},
				recurringPosts: {
					POSTS_LOADED: Cr.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: Cr.d
				}
			};

			function gb(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case mb[e].POSTS_LOADED:
						case Cr.f: {
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
						case Cr.i:
						case Cr.l: {
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
						case Cr.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(n).reduce((t, r) => (r !== e && (t[r] = n[r]), t), {})
						}
						case mb[e].MUTATION_SUCCEEDED: {
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
			const vb = {};

			function Eb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vb,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case mb[e].POSTS_LOADED:
						case Cr.f: {
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
						case Cr.h: {
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
			var _b = n("./node_modules/lodash/uniq.js"),
				Ob = n.n(_b);
			const Ib = {};

			function Sb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ib,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case mb[e].POSTS_LOADED:
						case Cr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[mb[e].postIdsKey];
							return {
								...t,
								[s]: Ob()([...t[s] || [], ...a])
							}
						}
						case Cr.i:
						case Cr.l: {
							const {
								subredditId: e,
								scheduledPostId: r
							} = n.payload, s = t[e] || [];
							return {
								...t,
								[e]: s.filter(e => e !== r)
							}
						}
						case Cr.h: {
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
			var Tb = Object(J.c)({
					models: gb("recurringPosts"),
					pageInfo: Eb("recurringPosts"),
					postOrder: Sb("recurringPosts"),
					editModal: yb
				}),
				Db = Object(J.c)({
					models: gb("standalonePosts"),
					pageInfo: Eb("standalonePosts"),
					postOrder: Sb("standalonePosts")
				}),
				wb = Object(J.c)({
					api: bb,
					standalonePosts: Db,
					recurringPosts: Tb
				});
			var Cb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.ob:
						return t.payload;
					case Ie.qb:
					case Ie.pb:
						return null;
					default:
						return e
				}
			};
			var jb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.pb:
						case Ie.ob:
							return !1;
						case Ie.qb:
							return !0;
						default:
							return e
					}
				},
				Ab = Object(J.c)({
					error: Cb,
					pending: jb
				});
			const Pb = [];
			var Rb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.pb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case Ie.ob:
						case Ie.qb:
							return Pb;
						default:
							return e
					}
				},
				Nb = Object(J.c)({
					api: Ab,
					list: Rb
				}),
				Lb = n("./src/reddit/actions/video.ts");
			const xb = {};
			var kb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.e: {
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
			const Ub = {};
			var Mb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.a: {
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
			const Fb = {};
			var Bb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.b: {
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
			const Gb = {};
			var qb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.c: {
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
			const Hb = {
				mutedInFeed: !0
			};
			var Vb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Wb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Lb.d:
						return null;
					default:
						return e
				}
			};
			const Qb = {};
			var Kb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case Lb.e: {
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
			const Yb = {};
			var $b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.h: {
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
					case Lb.f: {
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
			const zb = {};
			var Xb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.j: {
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
			const Jb = {};
			var Zb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case Lb.g: {
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
			const eh = {};
			var th = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lb.i: {
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
			const nh = {};
			var rh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lb.m: {
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
				sh = n("./src/reddit/constants/video.ts");
			const ah = {};
			var ch = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ah,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lb.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < sh.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				oh = Object(J.c)({
					autoPlayed: kb,
					buffering: Mb,
					consumed: Bb,
					continuousViewStartedAt: qb,
					feed: Vb,
					fullscreen: Wb,
					loadable: Kb,
					loadTimes: $b,
					metadata: Xb,
					paused: Zb,
					playing: th,
					started: rh,
					time: ch
				}),
				ih = Object(J.c)({
					embedAndImage: Of,
					expanded: Sf,
					focus: Tf,
					followed: wf,
					instances: jf,
					isAnimatingUpvote: Af,
					isTrackingCrossposts: Nf,
					metaMap: xf,
					models: tb,
					modToMemberShare: nb,
					crowdControl: gf,
					postLevelCrowdControl: ab,
					recent: ob,
					scheduledPosts: wb,
					topAwarded: Nb,
					video: oh,
					carousel: mf
				}),
				dh = n("./src/lib/reducers/addAuthentication/index.ts");
			const lh = {};
			var uh = Object(dh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.b:
						case be.f: {
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
				}), lh),
				ph = Object(J.c)({
					data: uh
				});
			const fh = {};
			var bh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fh,
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
			const hh = {};
			var yh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hh,
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
				mh = Object(J.c)({
					error: bh,
					pending: yh
				});
			const gh = {};
			var vh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gh,
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
			const Eh = {};
			var _h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eh,
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
				Oh = Object(J.c)({
					error: vh,
					pending: _h
				}),
				Ih = Object(J.c)({
					fetch: mh,
					purchase: Oh
				});
			var Sh = function() {
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
			const Th = {};
			var Dh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Th,
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
				wh = Object(J.c)({
					api: Ih,
					currentlyPurchasing: Sh,
					models: Dh
				});
			const Ch = {};
			var jh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ch,
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
			const Ah = {};
			var Ph = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ah,
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
				Rh = Object(J.c)({
					error: jh,
					pending: Ph
				});
			const Nh = {};
			var Lh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nh,
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
				xh = n("./src/reddit/actions/comment/list.ts");
			const kh = {};
			var Uh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xh.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case xh.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Hr()(e, n) : e
					}
					default:
						return e
				}
			};
			const Mh = {};
			var Fh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mh,
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
			const Bh = {};
			var Gh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bh,
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
							} : Object(In.a)(e, n)
						}
						default:
							return e
					}
				},
				qh = Object(J.c)({
					api: Rh,
					endMarkers: Uh,
					fetchedTokens: Fh,
					commentIds: Lh,
					loadMore: Gh
				}),
				Hh = n("./src/reddit/actions/pages/profileModSettings.ts");
			var Vh = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hh.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Wh = Object(J.c)({
					pending: Vh
				}),
				Qh = Object(J.c)({
					api: Wh
				});
			const Kh = {};
			var Yh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const $h = {};
			var zh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $h,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case he.a:
					case he.d: {
						const {
							listingKey: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case he.b:
					case he.c:
					case he.i:
					case he.f:
					case he.e:
					case he.g: {
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
			const Xh = {};
			var Jh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case he.b:
						case he.f: {
							const {
								listingKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case he.a:
						case he.d:
						case he.c:
						case he.i:
						case he.e:
						case he.g: {
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
				Zh = Object(J.c)({
					error: zh,
					pending: Jh
				});
			const ey = {};
			var ty = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case he.c:
					case he.i:
					case he.e:
					case he.g: {
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
			const ny = {};
			var ry = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ny,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case he.i:
						case he.c:
						case he.e:
						case he.g: {
							const {
								pageInfo: n,
								listingKey: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : ny
						}
						default:
							return e
					}
				},
				sy = Object(J.c)({
					api: Zh,
					ids: ty,
					pageInfo: ry
				}),
				ay = n("./src/reddit/constants/posts.ts");
			const cy = {};
			var oy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ye.c:
					case Ze.e:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case Eu.l: {
						const n = t.payload;
						return n.profile ? {
							...e,
							[n.profile.id]: n.about
						} : e
					}
					case Iu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === ay.a.PROFILE);
						return s.length ? s.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: r
						}, e), {
							...e
						}) : e
					}
					case kn.n: {
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
			const iy = {};
			var dy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.b:
					case P.f:
					case D.g:
					case be.b:
					case be.f:
					case D.c:
					case W.b:
					case W.e:
					case he.c:
					case he.i:
					case he.e:
					case he.g:
					case x.b:
					case x.e:
					case Q.PROFILE_POSTS_LOADED:
					case F.b:
					case R.e:
					case R.h:
					case C.u:
					case Eu.h:
					case A.b:
					case Ze.e:
					case H.i:
					case Eu.o:
					case M.b:
					case M.e:
					case ye.c:
					case L.PAGE_LOADED:
					case Zn.e:
					case Vr.PAGE_LOADED:
					case k.SUBREDDIT_LOADED:
					case N.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Iu.c:
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
					case Eu.n:
					case Eu.l: {
						const {
							profile: n
						} = t.payload;
						return n ? Object(oe.merge)(e, {
							[n.id]: n
						}) : e
					}
					case kn.n: {
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
					case kn.l:
					case kn.k: {
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
			const ly = {};
			var uy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ly,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eu.c:
						case Eu.f: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !0
							}
						}
						case Eu.a:
						case Eu.b:
						case Eu.d:
						case Eu.e: {
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
				py = Object(J.c)({
					pending: uy
				});
			const fy = {};
			var by = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eu.b: {
						const {
							profileName: n,
							data: r
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[(n || "").toLowerCase()]: s
						}
					}
					case Eu.e:
					case he.c:
					case he.i:
					case he.e:
					case he.g: {
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
			const hy = {};
			var yy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eu.e: {
							const {
								pageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case he.c:
						case he.i: {
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
				my = Object(J.c)({
					api: py,
					models: by,
					pageInfo: yy
				});
			const gy = {};
			var vy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eu.i: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case Eu.g:
						case Eu.h: {
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
				Ey = Object(J.c)({
					pending: vy
				});
			const _y = {};
			var Oy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _y,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eu.h: {
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
				Iy = Object(J.c)({
					api: Ey,
					pageInfo: Oy
				}),
				Sy = n("./src/reddit/actions/pinnedPost.ts");
			const Ty = {};
			var Dy = Object(dh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ty,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sy.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case Sy.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-G.hb)
						}
					}
					case Sy.g: {
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
			}), Ty);
			const wy = {};
			var Cy = Object(dh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sy.a: {
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
			}), wy);
			const jy = {};
			var Ay = Object(dh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Sy.c:
						case Sy.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case Sy.b:
						case Sy.e:
						case Sy.d:
						case Sy.g: {
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
				}), jy),
				Py = Object(J.c)({
					data: Dy,
					initialData: Cy,
					pending: Ay
				}),
				Ry = n("./src/reddit/actions/trophyCase.ts");
			const Ny = {};
			var Ly, xy, ky = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ny,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ry.a: {
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
				Uy = Object(J.c)({
					about: oy,
					models: dy,
					moderated: my,
					multireddits: Iy,
					pinnedPosts: Py,
					trophyCases: ky
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Ly || (Ly = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(xy || (xy = {}));
			var My, Fy, By;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(My || (My = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Fy || (Fy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(By || (By = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(My || (My = {}));
			Object(B.a)("PROMO__SHOW_PROMO"), Object(B.a)("PROMO__HIDE_PROMO");
			const Gy = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var qy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gy,
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
				Hy = n("./src/reddit/actions/recap/constants.ts");
			const Vy = {
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
			var Wy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hy.k:
							return {
								...e, shareCardWasOpened: !e.shareCardWasOpened
							};
						case Hy.g:
							return {
								...e, isImageLoading: !1
							};
						case Hy.h:
							return {
								...e, isImageLoading: !0
							};
						case Hy.f:
							return {
								...e, isCardsLoading: !0
							};
						case Hy.e: {
							const {
								cards: n
							} = t.payload;
							return {
								...e,
								cards: n,
								isCardsLoading: !1
							}
						}
						case Hy.d: {
							const {
								error: n
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: n
							}
						}
						case Hy.i:
							return {
								...e, ...Vy
							};
						case Hy.j: {
							const {
								index: n
							} = t.payload;
							return {
								...e,
								isImageLoading: !1,
								currentCardIndex: n
							}
						}
						case Hy.c:
							return {
								...e, bannerSeen: t.payload
							};
						case Hy.l:
							return {
								...e, shouldShowShareModal: !e.shouldShowShareModal
							};
						case Hy.b:
							return {
								...e, shouldHideAbilityCardUsername: !e.shouldHideAbilityCardUsername
							};
						case Hy.a:
							return {
								...e, shouldHideAbilityCardAvatar: !e.shouldHideAbilityCardAvatar
							};
						default:
							return e
					}
				},
				Qy = n("./src/reddit/actions/recentSubreddits/constants.ts");
			const Ky = [],
				Yy = (e, t) => yu()(e, t) ? e : t;
			var $y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ky,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.c:
					case q.d:
						return Ky;
					case Qy.d:
						return Yy(e, t.subreddits);
					case Qy.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, Qy.c)
					}
					case Qy.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Qy.c)
					}
					default:
						return e
				}
			};
			const zy = {};
			var Xy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zy,
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
				Jy = n("./src/reddit/actions/pages/report/constants.ts");
			var Zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jy.a:
						return t.payload;
					default:
						return e
				}
			};
			var em = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jy.b:
						return t.payload;
					case Jy.c:
					case Jy.d:
						return !1;
					default:
						return e
				}
			};
			var tm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jy.d:
						return !0;
					case Jy.c:
					case Jy.b:
						return !1;
					default:
						return e
				}
			};
			var nm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jy.c:
							return !0;
						case Jy.b:
						case Jy.d:
							return !1;
						default:
							return e
					}
				},
				rm = Object(J.c)({
					error: em,
					pending: tm,
					success: nm
				}),
				sm = n("./src/reddit/actions/reportPageRules/constants.ts");
			const am = [];
			var cm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : am,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sm.a:
							return t.payload;
						default:
							return e
					}
				},
				om = Object(J.c)({
					reportPageApi: rm,
					reportPageRules: cm,
					initialReason: Zy
				}),
				im = n("./src/reddit/actions/reportRules.ts");
			const dm = {
				sitewideRules: []
			};
			var lm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case im.a:
						return {
							...e, sitewideRules: t.payload
						};
					default:
						return e
				}
			};
			Object(B.a)("REQUEST_HOST_SET");
			var um = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const pm = "RUN_TIME_ENV_VARS__IS_STAGING",
				fm = (Object(B.a)(pm), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var bm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pm:
						return {
							...e, staging: !0
						};
					default:
						return e
				}
			};
			const hm = {};
			var ym = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hm,
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
				mm = n("./src/reddit/components/SearchDropdown/index.tsx"),
				gm = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				vm = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const Em = [vm.a, gm.b],
				_m = [mm.b, mm.a];
			var Om = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.g:
						return !0;
					case zo.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = !!Em.find(e => {
							var t;
							return r && ((null === (t = r.parentElement) || void 0 === t ? void 0 : t.id) === e || r.id === e)
						});
						return !(!!!_m.find(e => {
							var t;
							return r && (null === (t = document.getElementById(e)) || void 0 === t ? void 0 : t.contains(r))
						}) && !s) && e
					}
					case Ze.f:
					case zo.a:
					case zo.c:
						return !1;
					default:
						return e
				}
			};
			const Im = {},
				Sm = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Hp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				},
				Tm = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				Dm = e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				};
			var wm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Im,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const n = Sm(t.payload.meta),
								r = _p()(t.payload.searchPosts, Dm([n, Tm]));
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
				Cm = Object(J.c)({
					models: wm
				});
			var jm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ye.c:
					case Ze.k: {
						const {
							searchQuery: e
						} = t.payload;
						return e || ""
					}
					default:
						return e
				}
			};
			const Am = {
					enabled: !1
				},
				Pm = Object.create(null);
			var Rm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Ze.j: {
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
			const Nm = {};
			var Lm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.j:
							return {
								...e, ...t.payload.typeaheadSuggestions
							};
						default:
							return e
					}
				},
				xm = Object(J.c)({
					idsByQuery: Rm,
					models: Lm
				});
			const km = Object.create(null);
			var Um = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : km,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Ze.j: {
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
			const Mm = {};
			var Fm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.j:
							return {
								...e, ...t.payload.typeaheadByTypeSuggestions
							};
						default:
							return e
					}
				},
				Bm = Object(J.c)({
					idsByQuery: Um,
					models: Fm
				});
			const Gm = {};
			var qm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gm,
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
				Hm = Object(J.c)({
					appliedSort: ym,
					isDropdownOpen: Om,
					posts: Cm,
					searchScope: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Am,
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
							case Ze.i:
								return {
									...e, enabled: t.payload.enabled, type: t.payload.type, payload: t.payload.payload
								};
							default:
								return e
						}
					},
					searchQuery: jm,
					typeahead: xm,
					typeaheadByType: Bm,
					viewTreatment: qm
				}),
				Vm = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Wm = {};
			var Qm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wm,
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
						if (i === Vm.c.Trending) {
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
			const Km = {};
			var Ym = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Km,
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
			const $m = {};
			var zm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $m,
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
							} : $m
						}
						default:
							return e
					}
				},
				Xm = Object(J.c)({
					headerContent: Qm,
					models: Ym,
					order: zm
				}),
				Jm = n("./src/reddit/actions/searchQueryId/index.tsx");
			const Zm = {};
			Object(B.a)("SEO__CRAWLER_RECEIVED");
			var eg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				tg = n("./src/reddit/actions/seo/linksModule.ts");
			const ng = {};
			var rg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ng,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tg.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case tg.c:
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
				sg = n("./src/reddit/actions/seo/topicLinks.ts");
			const ag = {};
			var cg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ag,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sg.a:
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
				og = Object(J.c)({
					crawler: eg,
					linksModule: rg,
					topicLinks: cg
				}),
				ig = n("./src/reddit/actions/shortcuts/constants.ts");
			var dg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ig.a:
						return t.payload;
					case l.b:
						return null;
					default:
						return e
				}
			};
			var lg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ig.b:
							return t.payload || null;
						default:
							return e
					}
				},
				ug = n("./src/reddit/constants/shortcuts.ts"),
				pg = n("./src/reddit/helpers/history/index.ts");
			const fg = ug.d.Global,
				bg = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(pg.b)(dp.b.IsOverlay) ? ug.d.Lightbox : ug.d.CommentPage;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return ug.d.Listing;
						case "modQueuePages":
							return ug.d.Modqueue;
						default:
							return fg
					}
				};
			var hg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return bg(e)
							}
							return fg;
						default:
							return e
					}
				},
				yg = Object(J.c)({
					activeCommentId: dg,
					activePostId: lg,
					namespace: hg
				});
			var mg = function() {
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
				gg = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				vg = Object(J.c)({
					firstFetch: mg,
					models: gg.b
				}),
				Eg = n("./src/reddit/models/StructuredStyles/index.ts");
			const _g = {};
			var Og = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _g,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.h:
						case f.b:
						case f.d:
							return t.payload.styles;
						case f.e:
							return _g;
						case f.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case f.k: {
							const e = t.payload;
							return Object(Eg.h)(e.styles)
						}
						default:
							return e
					}
				},
				Ig = n("./src/reddit/actions/exportImportStyles.ts");
			var Sg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ig.c:
					case Ig.b:
						return null;
					case Ig.a:
						return t.payload;
					default:
						return e
				}
			};
			var Tg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ig.c:
							return !0;
						case Ig.b:
						case Ig.a:
							return !1;
						default:
							return e
					}
				},
				Dg = Object(J.c)({
					error: Sg,
					pending: Tg
				}),
				wg = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				Cg = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const jg = {};
			var Ag = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case be.b:
						case be.f:
						case ye.c:
						case Ze.e:
						case L.PAGE_LOADED:
						case Vr.PAGE_LOADED: {
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
						case wg.b: {
							const {
								flairId: n,
								template: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case wg.a: {
							const {
								flairId: n
							} = t.payload;
							return Object(In.a)(e, n)
						}
						case zp.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(In.a)(e, n)
						}
						case f.k:
							return jg;
						case Cg.b: {
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
				Pg = Object(J.c)({
					models: Ag
				});
			const Rg = {};
			var Ng = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rg,
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
						return Rg;
					default:
						return e
				}
			};
			var Lg = function() {
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
			var xg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.d:
						return t.payload.subredditId;
					case f.e:
						return null;
					case l.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case kn.g:
						return null;
					default:
						return e
				}
			};
			const kg = {};
			var Ug = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case be.b:
						case be.f:
						case L.PAGE_LOADED:
						case Vr.PAGE_LOADED: {
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
							if (ka()(n.subreddits, (e, t) => {
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
								r = Object(Eg.h)(n.styles);
							return {
								...e,
								[n.subredditId]: r
							}
						}
						case Eu.l: {
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
						case kn.l: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return Qf(e, {
									[n.subredditId]: {
										bannerBackgroundImage: n.imageUrl
									}
								})
							}
							return e
						}
						case kn.k: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return Qf(e, {
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
				Mg = Object(J.c)({
					draft: Og,
					exportStyles: Dg,
					flairTemplate: Pg,
					imagePreviews: Ng,
					isBladeEditorDirty: Lg,
					isEditing: xg,
					models: Ug
				});
			Object(B.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var Fg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				Bg = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const Gg = {};
			var qg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bg.c:
					case Bg.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Bg.a: {
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
			const Hg = {};
			var Vg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bg.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Bg.b:
						case Bg.a: {
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
				Wg = Object(J.c)({
					error: qg,
					pending: Vg
				});
			const Qg = {};
			var Kg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bg.b: {
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
				Yg = Object(J.c)({
					api: Wg,
					models: Kg
				}),
				$g = n("./src/reddit/actions/activeCommunitiesOnProfile/constants.ts"),
				zg = n("./src/reddit/actions/category/constants.ts"),
				Xg = n("./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts"),
				Jg = n("./src/reddit/actions/subredditMention/constants.ts");
			const Zg = {};
			var ev = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jg.d:
					case be.b:
					case be.f:
					case ye.c:
					case k.SUBREDDIT_FAILED:
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case Vr.PAGE_LOADED:
					case W.b:
					case W.e:
					case x.b:
					case x.a:
					case x.e:
					case x.d:
					case Q.PROFILE_POSTS_LOADED:
					case M.b:
					case M.e:
					case Xg.c:
					case $g.c:
					case Ze.e:
					case U.TOPIC_DATA_LOADED:
					case V.z: {
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
					case yc.a: {
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
					case Iu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === ay.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(oe.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case ho.f:
					case zg.f:
					case V.l:
					case V.t:
					case fr.B: {
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
					case Bg.b: {
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
			const tv = {};
			var nv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tv,
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
			var rv = function() {
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
				sv = Object(J.c)({
					error: nv,
					pending: rv
				}),
				av = n("./src/reddit/actions/subredditCreation.ts");
			const cv = {
				apiError: null
			};
			var ov = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case av.b: {
						const {
							error: n
						} = t.payload;
						return {
							...e,
							apiError: n
						}
					}
					case av.a:
					case av.c:
					case av.e:
						return cv;
					default:
						return e
				}
			};
			var iv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case av.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case av.a:
					case av.c:
					case av.e:
						return null;
					default:
						return e
				}
			};
			var dv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case av.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case av.c:
					case av.b:
						return null;
					default:
						return e
				}
			};
			var lv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case av.c:
							return !0;
						case av.e:
						case av.b:
							return !1;
						default:
							return e
					}
				},
				uv = Object(J.c)({
					error: ov,
					lastCreatedSubredditId: dv,
					initialCrosspost: iv,
					pending: lv
				});
			var pv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.B:
							return !0;
						case V.C:
						case V.A:
							return !1;
						default:
							return e
					}
				},
				fv = Object(J.c)({
					pending: pv
				});
			const bv = {};
			var hv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bv,
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
			const yv = {};
			var mv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yv,
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
				gv = Object(J.c)({
					error: hv,
					pending: mv
				});
			const vv = {};
			var Ev = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.k:
						case V.l:
							return {
								...e, [t.payload.key]: !1
							};
						case V.m:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				_v = Object(J.c)({
					pending: Ev
				});
			var Ov = function() {
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
			var Iv = function() {
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
				Sv = Object(J.c)({
					error: Ov,
					pending: Iv
				});
			var Tv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.p: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case V.r:
					case V.q:
						return null;
					default:
						return e
				}
			};
			var Dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.r:
							return !0;
						case V.q:
						case V.p:
							return !1;
						default:
							return e
					}
				},
				wv = Object(J.c)({
					error: Tv,
					pending: Dv
				}),
				Cv = n("./src/reddit/actions/subredditRules/constants.ts");
			var jv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cv.c:
							return !0;
						case Cv.a:
						case Cv.b:
							return !1;
						default:
							return e
					}
				},
				Av = n("./src/reddit/actions/subredditSettings.ts");
			var Pv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Av.e:
							return !0;
						case Av.f:
						case Av.d:
							return !1;
						default:
							return e
					}
				},
				Rv = Object(J.c)({
					pending: Pv
				});
			const Nv = {};
			var Lv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.s:
						case V.t:
							return {
								...e, [t.payload.key]: !1
							};
						case V.u:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				xv = Object(J.c)({
					pending: Lv
				}),
				kv = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const Uv = {};
			var Mv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kv.c:
					case kv.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case kv.a: {
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
			const Fv = {};
			var Bv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kv.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case kv.b:
						case kv.a: {
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
				Gv = Object(J.c)({
					error: Mv,
					pending: Bv
				});
			const qv = {};
			var Hv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qf.c:
					case qf.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case qf.a: {
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
			const Vv = {};
			var Wv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qf.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case qf.b:
						case qf.a: {
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
				Qv = Object(J.c)({
					error: Hv,
					pending: Wv
				}),
				Kv = Object(J.c)({
					about: sv,
					create: uv,
					inlineEditing: fv,
					models: gv,
					onboarding: _v,
					productOffers: Sv,
					rankings: wv,
					rules: jv,
					settings: Rv,
					similar: xv,
					topContent: Qv,
					wiki: Gv
				}),
				Yv = n("./node_modules/lodash/isNil.js"),
				$v = n.n(Yv);
			const zv = {};
			var Xv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: $v()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				Jv = Object(J.c)({
					meta: Xv
				});
			const Zv = {};
			var eE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zg.f: {
						const {
							categoryId: n,
							subredditIds: r
						} = t.payload;
						return Ra()(r) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const tE = {
				pending: !1,
				items: {}
			};
			var nE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hf.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case hf.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const rE = {};
			var sE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.c: {
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
				aE = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const cE = {};
			var oE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case aE.b:
						case aE.c:
						case aE.a: {
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
				iE = n("./src/reddit/actions/subredditCrosspostable.ts");
			var dE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case iE.c:
					case iE.b:
						return null;
					default:
						return e
				}
			};
			var lE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iE.c:
							return !0;
						case iE.b:
						case iE.a:
							return !1;
						default:
							return e
					}
				},
				uE = Object(J.c)({
					errors: dE,
					pending: lE
				});
			const pE = {};
			var fE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iE.b: {
							const {
								subredditIds: n
							} = t.payload;
							return yu()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				bE = Object(J.c)({
					api: uE,
					ids: fE
				});
			const hE = {};
			var yE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jf.a: {
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
							return Qf(c, {
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
				mE = Object(J.c)({
					models: yE
				});
			const gE = {};
			var vE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gE,
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
			const EE = {};
			var _E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EE,
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
			const OE = {};
			var IE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OE,
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
			const SE = {};
			var TE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SE,
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
				DE = Object(J.c)({
					assets: vE,
					communityRaw: _E,
					distributions: IE,
					releaseNotes: TE
				}),
				wE = n("./node_modules/lodash/isEqualWith.js"),
				CE = n.n(wE),
				jE = n("./src/lib/forceHttps/index.ts");
			const AE = {},
				PE = (e, t) => {
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
						return a.icon.url ? c.icon.url = Object(jE.a)(a.icon.url) : s && s.icon.url ? c.icon = s.icon : c.icon.url = "", s && s.allowChatPostCreation && (c.allowChatPostCreation = !0), s && s.devPlatformMetadata && (c.devPlatformMetadata = s.devPlatformMetadata), Object(oe.set)(n, r, c)
					}, e) : e
				},
				RE = (e, t) => {
					return !CE()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				NE = (e, t, n) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let a = 0; a < r.length; a++) {
						const c = r[a],
							o = e[c],
							i = t[c];
						o && !RE(o, i) || (s[c] = {
							...o,
							...i
						}, n && (null == o ? void 0 : o.devPlatformMetadata) && (s[c].devPlatformMetadata = o.devPlatformMetadata))
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var LE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Iu.c:
						return PE(e, t.payload.subreddits || {});
					case $g.c:
					case P.b:
					case P.f:
					case Jg.d:
					case zg.f:
					case D.g:
					case ho.f:
					case w.b:
					case j.b:
					case R.e:
					case R.h:
					case fe.n:
					case C.r:
					case C.u:
					case Eu.h:
					case A.b:
					case be.b:
					case be.f:
					case D.c:
					case N.b:
					case W.b:
					case W.e:
					case he.c:
					case he.i:
					case he.e:
					case he.g:
					case x.b:
					case x.e:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case Eu.e:
					case ye.c:
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case Zn.e:
					case Vr.PAGE_LOADED:
					case Eu.o:
					case M.b:
					case M.e:
					case F.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Xg.c:
					case Ze.e:
					case H.c:
					case H.f:
					case H.i:
					case V.a:
					case V.l:
					case V.t:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_LOADED:
					case fr.B:
						return NE(e, t.payload.subreddits || {});
					case Qy.b:
						return NE(e, t.payload.subreddits, !0);
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
						return NE(e, r)
					}
					case C.B: {
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
						return NE(e, n)
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
					case Av.f: {
						const {
							settings: n
						} = t.payload, {
							subredditId: r,
							title: s,
							over18: a = e[r].isNSFW
						} = n;
						return e[r] && void 0 !== s ? {
							...e,
							[r]: {
								...e[r],
								title: s,
								isNSFW: a
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
					case Bg.b: {
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
					case Bf.c: {
						const {
							subreddits: n
						} = t.payload;
						return NE(e, n)
					}
					default:
						return e
				}
			};
			var xE = function() {
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
			var kE = function() {
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
			var UE = function() {
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
				ME = Object(J.c)({
					errors: xE,
					fetched: kE,
					pending: UE
				});
			var FE = function() {
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
				BE = Object(J.c)({
					api: ME,
					order: FE
				});
			const GE = e => {
					var t, n, r, s;
					return (null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url) || (null === (n = null == e ? void 0 : e.styles) || void 0 === n ? void 0 : n.icon) || (null === (s = null === (r = null == e ? void 0 : e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === s ? void 0 : s.url)
				},
				qE = e => ({
					icon_img: GE(e),
					id: e.id,
					name: e.name
				}),
				HE = e => e.map(qE),
				VE = {
					ids: [],
					subreddits: []
				};
			var WE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.f:
						const n = HE(t.payload);
						return {
							subreddits: [...e.subreddits, ...n], ids: [...e.ids, ...n.map(e => e.id)]
						};
					case V.g:
						const r = e.ids.filter(e => e !== t.payload),
							s = e.subreddits.filter(e => e.id !== t.payload);
						return {
							...e, subreddits: s, ids: r
						};
					case V.i:
						const a = t.payload.nodes,
							c = a.map(e => e.id);
						return {
							subreddits: HE(a), ids: c
						};
					default:
						return e
				}
			};
			const QE = {};
			var KE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Av.a: {
						const n = t.payload;
						return Object(oe.merge)(e, n)
					}
					case Av.b: {
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
			const YE = {};
			var $E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.l: {
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
			const zE = {};
			var XE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.mb: {
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
			const JE = {};
			var ZE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.nb:
					case Ie.mb: {
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
			const e_ = {},
				t_ = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = Ja(n, t),
						c = [...s, a];
					return {
						...e,
						[t]: {
							...r,
							emotes: c
						}
					}
				},
				n_ = (e, t, n) => {
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
			var r_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_,
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
									...Za(c),
									isEnabled: a
								}
							}
						}
						case Xa.b: {
							const {
								subredditId: n,
								emoji: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: t_(s, n, r)
							}
						}
						case Xa.c: {
							const {
								subredditId: n,
								emojiId: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: n_(s, n, r)
							}
						}
						default:
							return e
					}
				},
				s_ = n("./src/lib/makeProductOfferKey/index.ts");
			const a_ = {};
			var c_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.V: {
						const {
							subredditId: n,
							productOffers: r
						} = t.payload;
						if (!(null == r ? void 0 : r.length)) return e;
						const s = r.reduce((e, t) => {
							const r = Object(s_.a)(t.type, n);
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
			const o_ = {};
			var i_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o_,
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
				d_ = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const l_ = {},
				u_ = e => e.filter(e => {
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
						return d_.e.includes(t)
					})
				});
			var p_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.D: {
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
						const s = u_(r.cards);
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
			const f_ = {};
			var b_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case V.D: {
						const {
							id: n,
							questions: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case D.g:
					case D.c: {
						const {
							subreddits: r
						} = t.payload, s = {};
						for (const e of Object.keys(r)) {
							const t = r[e];
							((null === (n = t.answerableQuestions) || void 0 === n ? void 0 : n.length) || 0) > 0 && (s[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(s).length ? e : Object(oe.assign)(e, s)
					}
					case V.d: {
						const {
							subredditId: n,
							questionId: s
						} = t.payload, a = null !== (r = e[n]) && void 0 !== r ? r : [];
						return Object(oe.setIn)(e, [n], a.filter(e => e.id !== s))
					}
					case V.e:
						return f_;
					default:
						return e
				}
			};
			const h_ = {};
			var y_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.b: {
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
			const m_ = {};
			var g_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.c: {
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
				v_ = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const E_ = {};
			var __ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case v_.a: {
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
			const O_ = {};
			var I_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cv.b: {
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
					case Cv.e: {
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
					case Cv.f: {
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
					case Cv.g:
					case Cv.d: {
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
			const S_ = {};
			var T_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Av.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case Av.f: {
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
					case kn.n: {
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
			const D_ = {};
			var w_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.t: {
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
			const C_ = {};
			var j_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.D: {
						const {
							id: n,
							survey: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case V.E: {
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
			const A_ = {};
			var P_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ho.f: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case qf.b: {
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
			const R_ = [];
			var N_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c:
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
			const L_ = {};
			var x_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jg.d:
						case fr.B:
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
				k_ = Object(J.c)({
					about: ev,
					api: Kv,
					appliedFilters: Jv,
					byCategory: eE,
					carousel: nE,
					communityInfo: sE,
					countrySiteSettings: oE,
					crosspostable: bE,
					duplicates: mE,
					gov: DE,
					models: LE,
					moderated: BE,
					notificationSettings: KE,
					onboarding: $E,
					powerupRecentSupporters: XE,
					powerups: ZE,
					powerupsEmojis: r_,
					productOffers: c_,
					products: i_,
					progressModule: p_,
					questions: b_,
					rankings: y_,
					rankingsPageInfo: g_,
					related: __,
					rules: I_,
					settings: T_,
					similar: w_,
					mutedSubreddits: WE,
					survey: j_,
					topContent: P_,
					trending: N_,
					unavailableModels: x_
				});
			const U_ = {};
			var M_ = Object(dh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U_,
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
						case Md.o: {
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
				}), U_),
				F_ = Object(J.c)({
					data: M_
				}),
				B_ = n("./node_modules/lodash/values.js"),
				G_ = n.n(B_);
			const q_ = [];
			var H_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Iu.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = vu(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case C.u: {
						const {
							multireddits: e
						} = t.payload;
						return G_()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Iu.e: {
						const {
							follow: n,
							multiredditPath: r
						} = t.payload;
						return n ? e : e.filter(e => e !== r)
					}
					case C.j: {
						const n = t.payload;
						return e.filter(e => e !== n)
					}
					default:
						return e
				}
			};
			var V_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Iu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Iu.b:
					case Iu.c:
						return null;
					default:
						return e
				}
			};
			var W_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Iu.b:
					case Iu.c:
						return !0;
					case Iu.a:
						return !1;
					default:
						return e
				}
			};
			var Q_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Iu.b:
							return !0;
						case Iu.c:
						case Iu.a:
							return !1;
						default:
							return e
					}
				},
				K_ = Object(J.c)({
					errors: V_,
					fetched: W_,
					pending: Q_
				});
			const Y_ = [];
			var $_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Iu.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case Iu.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: c
						} = r;
						if (c !== ay.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (n) {
							const e = vu(o, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Iu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === ay.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const z_ = [];
			var X_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Iu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case Iu.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: c
						} = r;
						if (c !== ay.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (n) {
							const e = vu(o, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Iu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === ay.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const J_ = [],
				Z_ = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var eO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.u: {
							const {
								multireddits: n
							} = t.payload, r = G_()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(Z_(n));
							return yu()(e, r) ? e : r
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
								i = gu()(e, c).sort(Z_(o));
							return yu()(e, i) ? e : i
						}
						case Iu.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(Z_(s)) : e.filter(e => e !== r)
						}
						case C.j: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						case C.g:
						case C.m: {
							const {
								multireddit: n,
								multiredditsModelsState: r
							} = t.payload, s = {
								...r,
								[n.url]: n
							};
							return [...e, n.url].sort(Z_(s))
						}
						default:
							return e
					}
				},
				tO = n("./node_modules/lodash/difference.js"),
				nO = n.n(tO);
			const rO = [];
			var sO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eu.p: {
						const {
							profileOrder: n
						} = t.payload;
						return Ob()([...e, ...n])
					}
					case Iu.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case Iu.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === ay.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return s ? Ob()([...e, ...c]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : nO()(e, c)
					}
					default:
						return e
				}
			};
			const aO = [];
			var cO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eu.p: {
							const {
								subredditOrder: n
							} = t.payload;
							return Ob()([...e, ...n])
						}
						case Iu.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case Iu.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === ay.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return s ? Ob()([...e, ...c]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : nO()(e, c)
						}
						default:
							return e
					}
				},
				oO = Object(J.c)({
					api: K_,
					favoriteMultiOrder: H_,
					favoriteProfileOrder: $_,
					favoriteSubredditOrder: X_,
					multiredditOrder: eO,
					profileOrder: sO,
					subredditOrder: cO
				}),
				iO = n("./src/reddit/actions/survey/constants.ts");
			var dO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iO.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var lO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iO.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var uO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iO.b:
						return !e;
					default:
						return e
				}
			};
			var pO = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iO.i:
						return !e;
					default:
						return e
				}
			};
			var fO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iO.m:
							return t.payload || "";
						default:
							return e
					}
				},
				bO = Object(J.c)({
					activeDemoTrigger: dO,
					demoTriggerThreshold: lO,
					isDemoEnabled: uO,
					isSampleFactorEnabled: pO,
					surveyNameCalledImmediately: fO
				});
			var hO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nn.a:
							const {
								hasUnreadMessages: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				yO = n("./src/reddit/actions/tags/constants.ts");
			const mO = {
				pending: !1,
				error: !1
			};
			var gO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.l:
						return {
							...e, pending: !0
						};
					case yO.m:
						return {
							error: !1, pending: !1
						};
					case yO.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const vO = {
				pending: !1,
				error: !1
			};
			var EO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.o:
						return {
							...e, pending: !0
						};
					case yO.p:
						return {
							error: !1, pending: !1
						};
					case yO.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const _O = {
				pending: !1,
				error: !1
			};
			var OO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.t:
						return {
							...e, pending: !0
						};
					case yO.s:
					case yO.r:
					case yO.e:
					case yO.j:
						return {
							error: !1, pending: !1
						};
					case yO.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const IO = {
				pending: !1,
				error: !1
			};
			var SO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yO.v:
						return {
							...e, pending: !0
						};
					case yO.w:
						return {
							error: !1, pending: !1
						};
					case yO.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const TO = {
				pending: !1,
				error: !1
			};
			var DO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yO.g:
							return {
								...e, pending: !0
							};
						case yO.h:
							return {
								error: !1, pending: !1
							};
						case yO.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				wO = Object(J.c)({
					create: gO,
					deleteTag: EO,
					fetch: OO,
					update: SO,
					updatePrimaryTag: DO
				});
			const CO = {
				global: [],
				recommendedGlobal: []
			};
			var jO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yO.w:
						case yO.r:
						case yO.e:
						case yO.j: {
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
				AO = n("./node_modules/lodash/uniqWith.js"),
				PO = n.n(AO),
				RO = n("./src/reddit/models/Option/index.ts");
			const NO = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var LO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yO.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: PO()([...e.selectedOptions || [], {
									...n
								}], RO.a)
							}
						}
						case yO.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(RO.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case yO.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case yO.a: {
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
				xO = n("./src/reddit/helpers/tags/index.ts");
			const kO = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var UO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yO.j: {
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
						case yO.w:
						case yO.s:
						case yO.r: {
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
									[o]: Object(xO.a)(a[o] || {})
								}
							}
						}
						case yO.p: {
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
						case yO.e: {
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
						case yO.h: {
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
				MO = n("./src/reddit/reducers/tags/selected/index.ts"),
				FO = Object(J.c)({
					api: wO,
					availableGlobalTagOrder: jO,
					models: UO,
					selected: MO.b,
					creation: LO
				}),
				BO = n("./src/reddit/actions/redditEmbed.ts"),
				GO = n("./src/reddit/actions/theme.ts"),
				qO = n("./src/reddit/actions/users.ts"),
				HO = n("./src/reddit/models/Theme/index.ts");
			const VO = {
				current: HO.c,
				cached: {}
			};
			var WO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case GO.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? HO.b : HO.c,
								cached: {}
							}
						}
						case xn.b:
						case xn.c:
						case xn.l:
						case xn.m:
						case xn.h:
						case xn.a:
						case xn.n:
						case P.b:
						case P.f:
						case R.e:
						case R.h:
						case be.a:
						case be.e:
						case be.b:
						case be.f:
						case be.d:
						case be.h:
						case D.c:
						case k.SUBREDDIT_LOADED:
						case N.b:
						case N.a:
						case D.g:
						case BO.b:
						case H.i:
						case Ze.e:
						case ye.c:
						case kn.j:
						case L.PAGE_LOADED:
						case Vr.PAGE_LOADED:
						case qO.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: HO.b,
									cached: {}
								} : {
									current: HO.c,
									cached: {}
								}
							}
							return e;
						case W.d:
						case W.e:
						case x.a:
						case x.b:
						case x.d:
						case x.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED: {
							const {
								account: n
							} = t.payload;
							return n ? n.nightmode ? {
								current: HO.b,
								cached: {}
							} : {
								current: HO.c,
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
									current: HO.b,
									cached: {}
								} : {
									current: HO.c,
									cached: {}
								}
							}
							return e;
						case kn.i: {
							if (!t.payload) return e;
							const {
								nightmode: n
							} = t.payload;
							return n ? {
								current: HO.b,
								cached: {}
							} : {
								current: HO.c,
								cached: {}
							}
						}
						case f.d:
							return {
								current: HO.c, cached: {}
							};
						case f.e:
							return t.payload.nightmodeTempUpdated ? {
								current: HO.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				QO = n("./src/reddit/actions/toaster.ts");
			const KO = [];
			var YO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case QO.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case QO.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				$O = n("./src/reddit/actions/tooltip.ts");
			var zO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $O.c:
						case $O.b:
						case $O.e:
						case $O.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				XO = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var JO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $O.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case $O.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case $O.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case $O.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case Ie.I:
						case $O.d:
						case l.b:
						case zo.b:
						case zo.c:
						case zo.a:
							return t.type === l.b && e === XO.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				ZO = Object(J.c)({
					params: zO,
					tooltipId: JO
				}),
				eI = n("./src/reddit/actions/tracing.ts");
			const tI = {
				traceId: void 0
			};
			var nI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				rI = n("./src/lib/asyncActions/index.ts"),
				sI = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const aI = Object(rI.c)(sI.c.requestedActionType, sI.c.succeededActionType, sI.c.failedActionType),
				cI = Object(rI.c)(sI.a.requestedActionType, sI.a.succeededActionType, sI.a.failedActionType),
				oI = Object(rI.c)(sI.e.requestedActionType, sI.e.succeededActionType, sI.e.failedActionType);
			var iI = Object(J.c)({
					load: aI,
					execute: cI,
					send: oI,
					reCaptchaEnterpriseToken: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case sI.a.succeededActionType:
								return t.payload.token
						}
						return e
					}
				}),
				dI = n("./src/reddit/actions/tracking.ts");
			const lI = {};
			var uI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dI.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case dI.b: {
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
				pI = Object(J.c)({
					reCaptchaEnterprise: iI,
					viewportDataLoaded: uI
				}),
				fI = n("./src/reddit/actions/trafficStats/constants.ts");
			var bI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fI.c:
						return !0;
					case fI.b:
					case fI.a:
						return !1;
					default:
						return e
				}
			};
			var hI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case fI.c:
							return null;
						default:
							return e
					}
				},
				yI = Object(J.c)({
					pending: bI,
					trafficStats: hI
				});
			var mI = function() {
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
			var gI = function() {
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
				vI = Object(J.c)({
					error: mI,
					pending: gI
				});
			var EI = function() {
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
			var _I = function() {
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
			var OI = function() {
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
				II = Object(J.c)({
					api: vI,
					contentId: EI,
					initialRecipient: _I,
					publicAddress: OI
				}),
				SI = Object(J.c)({
					communityPoints: II
				}),
				TI = n("./src/reddit/actions/search/trending.ts");
			const DI = {};
			var wI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case TI.a: {
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
				CI = Object(J.c)({
					models: wI
				});
			var jI = n("./src/reddit/routes/premium/index.ts");
			const AI = {};
			var PI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ry.a: {
							const {
								trophies: n
							} = t.payload;
							return Object.values(n).forEach(e => {
								"t6_bf" === e.awardId && (e.url = jI.b)
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				RI = n("./src/reddit/actions/upload.ts"),
				NI = n("./src/reddit/models/Upload/index.ts");
			const LI = {};
			var xI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case RI.d: {
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
									status: NI.a.PENDING
								}
							}
						}
						case RI.h: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: NI.a.UPLOADING
								}
							}
						}
						case RI.c: {
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
						case RI.e: {
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
						case RI.g: {
							const {
								key: n,
								url: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: NI.a.SUCCESS,
									url: r
								}
							}
						}
						case RI.b: {
							const {
								key: n,
								error: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: NI.a.FAILED,
									error: r
								}
							}
						}
						case RI.a: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: NI.a.CANCELED
								}
							}
						}
						case RI.f: {
							const {
								key: n
							} = t.payload, r = e[n];
							return r.metadata.localUrl && window.URL.revokeObjectURL(r.metadata.localUrl), Hr()(e, n)
						}
						default:
							return e
					}
				},
				kI = n("./src/reddit/actions/upvotePrompt.ts");
			var UI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kI.a:
						return ++e;
					default:
						return e
				}
			};
			const MI = {};

			function FI(e, t) {
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
			var BI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.d:
					case i.a:
					case o.f:
					case i.t: {
						const {
							wallet: n
						} = t.payload;
						return FI(e, n)
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
			Object(B.a)("INBOX__COUNT_UPDATE");
			var GI = n("./src/reddit/actions/pages/appeal/constants.ts"),
				qI = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				HI = n("./src/reddit/actions/sso/constants.ts"),
				VI = n("./src/reddit/endpoints/profile/info.ts");
			const WI = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || yu()(r, t)) return e;
				const {
					karma: s
				} = t;
				return {
					...t,
					karma: {
						...VI.a,
						...null == r ? void 0 : r.karma,
						...s
					},
					gender: n
				}
			};
			var QI = Object(dh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case GI.a:
					case GI.b:
					case Jy.b:
					case Jy.c:
					case xn.b:
					case xn.c:
					case xn.h:
					case xn.a:
					case xn.l:
					case xn.m:
					case xn.n:
					case R.e:
					case R.h:
					case R.g:
					case C.q:
					case C.r:
					case be.a:
					case be.e:
					case be.b:
					case be.f:
					case D.a:
					case D.c:
					case N.a:
					case N.b:
					case k.SUBREDDIT_FAILED:
					case Eu.n:
					case W.b:
					case W.a:
					case W.e:
					case W.d:
					case he.c:
					case he.i:
					case x.e:
					case x.d:
					case x.b:
					case x.a:
					case Q.PROFILE_POSTS_LOADED:
					case Q.PROFILE_POSTS_FAILED:
					case k.SUBREDDIT_LOADED:
					case ye.a:
					case ye.c:
					case L.PAGE_LOADED:
					case Vr.PAGE_LOADED:
					case Ze.c:
					case Ze.e:
					case BO.a:
					case BO.b:
					case kn.j:
					case qI.b:
					case qO.c:
					case U.TOPIC_DATA_LOADED:
						return WI(e, t.payload.account);
					case qO.n:
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
						return n ? WI(e, n.account) : e
					}
					case qO.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case r.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case kn.l:
					case kn.k: {
						const n = t.payload;
						return e && "profileIcon" === n.key ? {
							...e,
							accountIcon: n.imageUrl
						} : e
					}
					case Ie.B:
					case Eu.j: {
						const {
							coins: n
						} = t.payload;
						return e ? {
							...e,
							coins: n
						} : e
					}
					case Eu.m: {
						const {
							userName: n,
							karma: r
						} = t.payload;
						return n.toLowerCase() !== (e && Object(ge.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...VI.a,
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
					case HI.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case HI.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case oi.SAVE_USERNAME_SUCCESS: {
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
					case $u.a:
					case $u.b: {
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
					case qO.k: {
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
			var KI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qO.m:
					case qO.n:
						return null;
					case qO.l:
						return t.payload;
					default:
						return e
				}
			};
			var YI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qO.m:
							return !0;
						case qO.n:
						case qO.l:
							return !1;
						default:
							return e
					}
				},
				$I = Object(J.c)({
					error: KI,
					pending: YI
				}),
				zI = Object(J.c)({
					api: $I
				});
			var XI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qO.i:
						return !0;
					default:
						return e
				}
			};
			var JI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qO.h:
							return !0;
						case qO.i:
						case qO.g:
							return !1;
						default:
							return e
					}
				},
				ZI = Object(J.c)({
					pending: JI,
					emailSent: XI
				}),
				eS = Object(J.c)({
					api: ZI
				}),
				tS = Object(J.c)({
					changeEmail: zI,
					sendResetEmail: eS
				}),
				nS = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const rS = {};
			var sS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ut.f:
						return {
							...e, new: nS.a.pending
						};
					case Ut.d:
						return {
							...e, new: nS.a.error
						};
					case Ut.e:
						return {
							...e, new: nS.a.waitingForRequest
						};
					case Ut.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: nS.a.pending
						}
					}
					case Ut.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: nS.a.error
						}
					}
					case Ut.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: nS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const aS = [];
			var cS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ut.e:
							return [t.payload, ...e];
						case Ut.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case kn.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				oS = Object(J.c)({
					api: sS,
					data: cS
				}),
				iS = n("./src/reddit/actions/chat/constants.ts"),
				dS = n("./src/reddit/actions/chat/userSettings.ts");
			const lS = iS.a.anybody;
			var uS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dS.a:
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
				pS = Object(J.c)({
					invitePolicy: uS
				});
			const fS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var bS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && yu()(e, n) ? e : {
							...e,
							...n
						}
					}
					case fr.Q: {
						const {
							response: {
								draftsCount: n
							}
						} = t.payload;
						return fS(e, n)
					}
					case Zn.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return fS(e, n.length)
					}
					case Zn.c:
					case Zn.l: {
						const {
							draftsCount: n
						} = t.payload;
						return fS(e, n)
					}
					default:
						return e
				}
			};
			const hS = {};
			var yS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Sc.a: {
							const e = t.payload.experimentVariants;
							return rp(e)
						}
						default:
							return e
					}
				},
				mS = n("./src/reddit/actions/global/constants.ts");
			const gS = {};
			var vS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mS.a: {
							const n = t.payload;
							return null === n.local_persisted_experiments_store || void 0 === n.local_persisted_experiments_store ? e : n.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				ES = Object(J.c)({
					byName: yS,
					localPersisted: vS
				});
			var _S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kn.f:
						return !0;
					case kn.e:
						return !1;
					default:
						return e
				}
			};
			var OS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kn.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const IS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var SS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qO.b:
							return t.payload;
						default:
							return e
					}
				},
				TS = n("./src/reddit/actions/notifications/constants.ts"),
				DS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var wS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case DS.a:
					case DS.d:
					case DS.h:
					case TS.a:
						return t.payload && t.payload.error || null;
					case DS.c:
					case DS.f:
					case DS.j:
					case TS.c:
					case TS.b:
						return null;
					default:
						return e
				}
			};
			var CS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TS.c:
						return !1;
					case TS.b:
						return !0;
					default:
						return e
				}
			};
			var jS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TS.c:
						case DS.j:
							return !0;
						case TS.b:
						case TS.a:
						case DS.i:
						case DS.h:
							return !1;
						default:
							return e
					}
				},
				AS = Object(J.c)({
					error: wS,
					loaded: CS,
					pending: jS
				});
			var PS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case TS.f:
					case TS.e:
						return null;
					default:
						return e
				}
			};
			var RS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TS.f:
						return !1;
					case TS.e:
						return !0;
					default:
						return e
				}
			};
			var NS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TS.f:
							return !0;
						case TS.e:
						case TS.d:
							return !1;
						default:
							return e
					}
				},
				LS = Object(J.c)({
					error: PS,
					loaded: RS,
					pending: NS
				}),
				xS = Object(J.c)({
					getPreferences: AS,
					setPreferences: LS
				}),
				kS = n("./src/lib/notifications/constants.ts");
			var US = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kS.k:
						return !0;
					case kS.b:
						return !1;
					default:
						return e
				}
			};
			const MS = {
				byId: {},
				allIds: []
			};
			var FS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case DS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case DS.g: {
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
			const BS = {
				byId: {},
				allIds: []
			};
			var GS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case DS.b: {
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
				qS = Object(J.c)({
					sections: GS,
					rows: FS
				});
			var HS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kS.l:
						return !0;
					case kS.c:
					case kS.e:
					case kS.f:
						return !1;
					default:
						return e
				}
			};
			const VS = {
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
			var WS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TS.b:
					case TS.f:
					case TS.d: {
						const {
							preferences: n
						} = t.payload;
						return Ra()(n) ? e : n
					}
					default:
						return e
				}
			};
			const QS = {
				byId: {},
				allIds: []
			};
			var KS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case DS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case DS.g: {
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
			const YS = {
				byId: {},
				allIds: []
			};
			var $S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case DS.e: {
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
				zS = Object(J.c)({
					sections: $S,
					rows: KS
				});
			var XS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case DS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const JS = [];
			var ZS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case DS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case DS.k: {
							if (!t.payload) return [];
							const n = t.payload && t.payload.subredditId,
								r = t.payload && t.payload.notificationLevel,
								s = e.findIndex(e => e.id === n);
							return -1 === s ? e : [...e.slice(0, s), {
								...e[s],
								notificationLevel: r
							}, ...e.slice(s + 1)]
						}
						case V.G: {
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
				eT = Object(J.c)({
					subreddits: ZS,
					pageInfo: XS
				}),
				tT = Object(J.c)({
					api: xS,
					subscribedSubredditsSettings: eT,
					emailSettingsLayout: qS,
					isAskNotificationPromptVisible: US,
					isNotificationPromptVisible: HS,
					preferences: WS,
					pushSettingsLayout: zS
				});
			const nT = {};
			var rT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.i:
					case bt.h: {
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
			var sT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.wb: {
						const n = t.payload.powerups;
						return n ? Hr()({
							...e,
							...n
						}, "allocation") : e
					}
					case Ie.mb: {
						const {
							userPowerups: n
						} = t.payload;
						return n ? Hr()({
							...e,
							...n
						}, "allocation") : e
					}
					default:
						return e
				}
			};
			var aT, cT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.vb:
						case Ie.xb:
							return !1;
						case Ie.wb:
							return !0;
						default:
							return e
					}
				},
				oT = Object(J.c)({
					data: sT,
					fetched: cT
				}),
				iT = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(aT || (aT = {}));
			const dT = {
				status: aT.UNFETCHED,
				subscriptions: []
			};
			var lT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.Ab:
						return {
							...e, status: aT.PENDING
						};
					case Ie.zb: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: aT.LOADED
						} : e
					}
					case Ie.yb:
						return {
							...e, status: aT.FAILED
						};
					default:
						return e
				}
			};
			var uT = function() {
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
			var pT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.f:
						return !0;
					default:
						return e
				}
			};
			var fT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qO.j:
						return t.payload;
					default:
						return e
				}
			};
			var bT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sc.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var hT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Sc.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				yT = Object(J.c)({
					isEmployee: bT,
					isLoggedIn: hT
				});
			var mT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kn.q: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && yu()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				gT = n("./src/reddit/actions/userWhitelist.ts");
			const vT = {};
			var ET = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gT.e:
						return {
							...e, new: nS.a.pending
						};
					case gT.d:
						return {
							...e, new: nS.a.error
						};
					case gT.f:
						return {
							...e, new: nS.a.waitingForRequest
						};
					case gT.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: nS.a.pending
						}
					}
					case gT.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: nS.a.error
						}
					}
					case gT.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: nS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const _T = [];
			var OT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gT.f:
							return [t.payload, ...e];
						case gT.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case kn.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				IT = Object(J.c)({
					api: ET,
					data: OT
				}),
				ST = Object(J.c)({
					account: QI,
					accountSettings: tS,
					blocked: oS,
					chatSettings: pS,
					drafts: bS,
					experiments: ES,
					isCustomizeFlyoutShowing: _S,
					topContentDismissalPrefsSet: mT,
					language: OS,
					loid: SS,
					notificationPrefs: tT,
					ownedBadges: rT,
					powerups: oT,
					prefs: iT.c,
					productOfferSubscriptions: lT,
					session: uT,
					sessionRefreshFailed: pT,
					sessionTracker: fT,
					temporaryGQL: yT,
					wallets: BI,
					whitelist: IT
				});
			var TT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qI.a:
						return t.payload || null;
					case qI.b:
					case qI.c:
						return null;
					default:
						return e
				}
			};
			var DT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qI.c:
						return !0;
					case qI.b:
					case qI.a:
						return !1;
					default:
						return e
				}
			};
			var wT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qI.b:
						return !0;
					case qI.a:
					case qI.c:
						return !1;
					default:
						return e
				}
			};
			var CT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qI.b:
							return t.payload.userDataExportEligibility;
						case qI.a:
						case qI.c:
							return !1;
						default:
							return e
					}
				},
				jT = Object(J.c)({
					error: TT,
					pending: DT,
					success: wT,
					userDataExportEligibility: CT
				}),
				AT = Object(J.c)({
					userDataRequestPageApi: jT
				});
			const PT = {};
			var RT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qO.f:
					case qO.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case qO.d: {
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
			var NT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qO.f:
							return !0;
						case qO.e:
						case qO.d:
							return !1;
						default:
							return e
					}
				},
				LT = Object(J.c)({
					error: RT,
					pending: NT
				});
			const xT = {};
			var kT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bt.e: {
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
					case bt.b: {
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
					case bt.a: {
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
			const UT = {},
				MT = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && yu()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var FT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qO.e: {
							const {
								data: n
							} = t.payload;
							return MT(e, n)
						}
						case fe.k:
							return MT(e, t.payload || {});
						case Eu.l: {
							const {
								user: n
							} = t.payload;
							return MT(e, {
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
							return c ? MT(e, {
								[n.toLowerCase()]: {
									...r,
									awardedLastMonth: {
										totalCount: a,
										topAward: c
									}
								}
							}) : e
						}
						case Eu.m: {
							const {
								userName: n,
								karma: r
							} = t.payload, s = e[n.toLowerCase()];
							if (!s) return e;
							const a = {
								...VI.a,
								...r
							};
							return MT(e, {
								[n.toLowerCase()]: {
									...s,
									karma: a
								}
							})
						}
						case kn.l:
						case kn.k: {
							const {
								imageUrl: n,
								key: r,
								username: s
							} = t.payload;
							if ("profileIcon" !== r) return e;
							const a = s.toLowerCase(),
								c = e[a];
							return c ? MT(e, {
								[a]: {
									...c,
									accountIcon: n
								}
							}) : e
						}
						case qO.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object(ge.e)(n).toLowerCase(),
								s = e[r];
							return s ? MT(e, {
								[r]: {
									...s,
									accountIcon: n.accountIcon,
									snoovatarFullBodyAsset: n.snoovatarFullBodyAsset
								}
							}) : e;
						case kn.n: {
							const {
								additional: n,
								settings: r
							} = t.payload;
							if (n.enableFollowers === n.prevEnableFollowers) return e;
							const s = r.currentUserName.toLowerCase(),
								a = e[s];
							return a ? MT(e, {
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
				BT = n("./src/reddit/actions/usernameAvailable.ts");
			const GT = {};
			var qT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case BT.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: BT.b.Available
						}
					}
					case BT.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: BT.b.Error
						}
					}
					case BT.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: BT.b.Pending
						}
					}
					case BT.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: BT.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			var HT = function() {
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
				VT = Object(J.c)({
					fetched: HT
				});
			var WT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.rb:
						return t.payload;
					case Ie.tb:
					case Ie.sb:
						return null;
					default:
						return e
				}
			};
			var QT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.sb:
						case Ie.rb:
							return !1;
						case Ie.tb:
							return !0;
						default:
							return e
					}
				},
				KT = Object(J.c)({
					error: WT,
					pending: QT
				});
			var YT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.ub:
						return t.payload.postId;
					default:
						return e
				}
			};
			const $T = {};
			var zT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $T,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.sb: {
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
			const XT = {};
			var JT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.sb: {
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
							return Hr()(e, [n])
						}
						default:
							return e
					}
				},
				ZT = Object(J.c)({
					api: KT,
					currentPostId: YT,
					currentRank: zT,
					list: JT
				}),
				eD = Object(J.c)({
					api: LT,
					appliedBadges: kT,
					models: FT,
					nameAvailable: qT,
					topAwarders: ZT,
					powerups: VT
				});
			const tD = {};
			var nD = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tD,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case be.b:
						case be.f:
						case k.SUBREDDIT_LOADED:
						case H.i:
						case ye.c:
						case L.PAGE_LOADED:
						case Vr.PAGE_LOADED: {
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
				rD = n("./src/reddit/actions/widgets/constants.ts");
			const sD = {};
			var aD = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sD,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case be.b:
						case be.f:
						case ye.c:
						case H.i:
						case k.SUBREDDIT_LOADED:
						case L.PAGE_LOADED: {
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
						case rD.g: {
							const n = t.payload;
							return "menu" !== n.widget.kind ? e : {
								...e,
								[n.subredditId]: n.widgetId
							}
						}
						case rD.h: {
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
				cD = n("./src/reddit/helpers/widgets/index.tsx");
			const oD = {};
			var iD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oD,
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
					case rD.b: {
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
								styles: Object(cD.g)()
							}
						}), t
					}
					case rD.e: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case rD.i:
					case rD.g: {
						const n = t.payload;
						return {
							...e,
							[n.widget.id]: n.widget
						}
					}
					case rD.h: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n.widgetId], r
					}
					case be.b:
					case be.f:
					case k.SUBREDDIT_LOADED:
					case ye.c:
					case L.PAGE_LOADED:
					case Vr.PAGE_LOADED: {
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
					case Iu.h: {
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
					case Av.f: {
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
			const dD = {};
			var lD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case be.f:
					case H.i:
					case L.PAGE_LOADED: {
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
			const uD = {};
			var pD = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uD,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case Vr.PAGE_LOADED: {
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
					case rD.e:
					case rD.b: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgets.layout.sidebar.order
						}
					}
					case rD.f: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgetIds
						}
					}
					case rD.g: {
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
					case rD.h: {
						const n = t.payload;
						if (!e[n.subredditId]) return e;
						const r = e[n.subredditId].filter(e => e !== n.widgetId);
						return {
							...e,
							[n.subredditId]: r
						}
					}
					case be.b:
					case be.f:
					case k.SUBREDDIT_LOADED:
					case ye.c:
					case H.i:
					case L.PAGE_LOADED:
					case Vr.PAGE_LOADED: {
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
			const fD = {
				accountManagerModalData: a,
				activeModal: h,
				ads: E,
				adsSignals: Y,
				apiRequestState: X,
				appBadges: ae,
				authorFlair: Oe,
				awards: ft,
				badges: Ct,
				blockedRedditors: kt,
				blockUser: Ht,
				brandSafety: Wt,
				chat: bn,
				cooldownTimer: Kn,
				commentsListTruncated: yn,
				communityFlairs: vn,
				connection: On,
				contentControls: Ln,
				contentGate: Mn,
				continueThreads: Gn,
				creations: Oa,
				dashboard: Ta,
				discoveryUnits: Ba,
				dismissedTruncationList: Ha,
				economics: pc,
				emailVerificationTooltip: hc,
				emojis: Ic,
				experimentOverrides: Cc,
				externalAccount: ro,
				featureFlags: uo,
				firstPost: bo,
				focusedVerticals: wo,
				fontFiles: jo,
				frontPageFirstLoaded: Ao,
				gild: Ho,
				header: Jo,
				htmlResponseStreaming: Zo,
				imageUploads: ni,
				impressionMap: si,
				interceptedAction: ci,
				isChangeUsernameTooltipShowing: ii,
				isModeratorWithPostPerms: li,
				jsApi: fi,
				langSite: yi,
				leaderboard: Ti,
				listings: $d,
				live: el,
				mediaEmbed: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tl.a:
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
				mediaGalleries: ol,
				mediaPlayback: ll,
				merchandisingUnitAnnouncements: fl,
				meta: yl,
				moderatingSubreddits: vl,
				modListingPage: Dl,
				modModeEnabled: Cl,
				moreComments: kl,
				multireddits: ju,
				notificationBannerId: Pu,
				notificationsInbox: Wu,
				nps: Yu,
				onboarding: tp,
				page: op,
				platform: fp,
				postCollection: $p,
				polls: Up,
				postFlair: tf,
				posts: ih,
				postGuidance: bf,
				postStickiedComments: ph,
				givePremium: Yo,
				products: wh,
				profileCommentsPage: qh,
				profilePrivatePage: sy,
				profileModSettingsPage: Qh,
				profilePostsPage: Yh,
				profiles: Uy,
				promos: qy,
				recap: Wy,
				recentSubreddits: $y,
				recommendations: Xy,
				reportPage: om,
				reportRules: lm,
				requestHost: um,
				runTimeEnvVars: bm,
				search: Hm,
				searchDiscoveryUnits: Xm,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jm.a:
							return t.payload;
						case Jm.b:
							return Zm;
						default:
							return e
					}
				},
				seo: og,
				shortcuts: yg,
				sidebarPromotedPosts: vg,
				structuredStyles: Mg,
				stylesheets: Fg,
				subredditAutocomplete: Yg,
				subreddits: k_,
				subredditStickyPosts: F_,
				subscriptions: oO,
				survey: bO,
				tabBadged: hO,
				tags: FO,
				themes: WO,
				toaster: YO,
				tooltip: ZO,
				tracing: nI,
				tracking: pI,
				trafficStats: yI,
				transfers: SI,
				trending: CI,
				trophies: PI,
				uploads: xI,
				user: ST,
				userDataRequestPage: AT,
				upvotePromptCountPerSess: UI,
				users: eD,
				widgets: Object(J.c)({
					idCardIds: nD,
					menuIds: aD,
					models: iD,
					moderatorIds: lD,
					sidebar: pD
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
					action: a.f,
					chunk: s.t.PREMIUM,
					component: o,
					exact: !0,
					meta: {
						name: s.Tb.PREMIUM,
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
		"./src/reddit/selectors/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "a", (function() {
				return m
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
				b = (e, t) => Object(i.z)(e, {
					subredditName: t
				}).emojisEnabled,
				h = {
					emojis: {},
					snoomojis: {}
				},
				y = (e, t) => {
					let {
						subredditId: n
					} = t;
					return l(e)[n] || h
				},
				m = (e, t) => !!e.emojis.api.list.pending[t]
		},
		"./src/reddit/selectors/experiments/appeals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(s.a)(r.wb)
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./node_modules/reselect/es/index.js");
			const c = Object(a.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: r.Bb
			}), e => ({
				bucketed: e === r.hd.ExpandedSearch || e === r.hd.CollapsedSearch,
				collapsed: e === r.hd.CollapsedSearch,
				expanded: e === r.hd.ExpandedSearch
			}))
		},
		"./src/reddit/selectors/experiments/garlicBread.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(r.a)(d.Z, d.Q, (e, t) => !(e || t)),
				p = e => {
					if (!u(e)) return;
					const t = Object(c.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: a.he,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				f = e => {
					var t;
					const n = p(e);
					if (!n) return !1;
					let r = Object(i.r)(e),
						a = Object(i.d)(e);
					if ("undefined" != typeof window && (!a || r !== s.Tb.SUBREDDIT)) {
						const e = Object(o.a)("subreddit", window.location.href);
						(a = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Tb.SUBREDDIT)
					}
					if (a && n) {
						const e = (null == a ? void 0 : a.toLocaleLowerCase()) === n;
						return r === s.Tb.SUBREDDIT && e
					}
					return !1
				},
				b = e => !!p(e) && Object(c.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: a.ie,
					expEventOverride: !1
				}) !== a.oe.Readonly
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				c = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				o = n("./src/reddit/models/Media/index.ts"),
				i = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = new Set([i.g.AntiEvilOps, i.g.AutomodFiltered, i.g.CommunityOps, i.g.ContentTakedown, i.g.CopyrightTakedown, i.g.Moderator, i.g.Reddit]),
				u = new Set([i.g.Author, i.g.AuthorDeleted]),
				p = Object(s.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let s = Object(c.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== o.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				f = Object(s.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let s = Object(c.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== o.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				b = Object(s.a)(a.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				h = Object(s.a)(d.m, a.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				y = Object(s.a)(a.a, e => !(!e || !1 !== e.isRobotIndexable))
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
					const n = Object(c.F)(e, t),
						r = Object(o.R)(e);
					let i = !1;
					const d = Object(o.m)(e);
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
		"./src/redditGQL/operations/SubredditChatChannelRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"d10c19519bc0"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"abcab38cb71c"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"c80367dee46a"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		},
		"./src/redditGQL/operations/TrendingSearches.json": function(e) {
			e.exports = JSON.parse('{"id":"7dfebe087245"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		},
		"./src/redditGQL/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.c271f9cf3c10082e58d2.js.map