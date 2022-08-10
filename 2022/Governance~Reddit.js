// https://www.redditstatic.com/desktop2x/Governance~Reddit.623ac8a6f89985d3a2a7.js
// Retrieved at 8/10/2022, 7:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, n) {},
		"./src/lib/asyncActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = e => `${e}_REQUESTED`,
				a = e => `${e}_SUCCEEDED`,
				o = e => `${e}_FAILED`;

			function c(e) {
				const t = s(e),
					n = a(e),
					c = o(e);
				return {
					requestedActionType: t,
					requested: Object(r.a)(t),
					succeededActionType: n,
					succeeded: Object(r.a)(n),
					failedActionType: c,
					failed: Object(r.a)(c)
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
					domainOverride: o,
					callToAction: c
				} = e;
				let i = "";
				if (s) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == c ? void 0 : c.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					i = o || Object(r.D)(e)
				} else i = Object(r.D)(e);
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
				o = () => "undefined" != typeof window && a(window) && a(window.grecaptcha) && a(window.grecaptcha.enterprise),
				c = () => o() ? window.grecaptcha.enterprise : void 0,
				i = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				d = e => Object(s.a)(i(e), o),
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
							const t = c();
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
					}, this.setInstance(n || c())
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
			const a = [s.sc, s.pb, s.B, s.Q, s.kb, s.Sb],
				o = {
					[s.Sb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.kb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.Q]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.B]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.pb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.sc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[s.Sb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.kb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.Q]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.B]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.sc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.sc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const i = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.sc]: "",
						[s.pb]: "",
						[s.B]: "",
						[s.Q]: "",
						[s.kb]: "",
						[s.Sb]: ""
					};
				let u = d - i;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of a) {
					const e = Math.floor(u / r);
					e && (l[r] = (t ? c : o)[r](e).toString()), u -= e * r
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
				return o
			})), n.d(t, "a", (function() {
				return c
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
			const o = "BADGE__BADGE_APPLICATION_SUCCESS",
				c = "BADGE__BADGE_APPLICATION_FAILURE",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				l = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				u = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				f = "BADGE__USER_BADGES_FETCH_PENDING",
				b = Object(r.a)(o),
				h = Object(r.a)(c),
				y = (Object(r.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(r.a)(i)),
				g = Object(r.a)(d),
				m = Object(r.a)(l),
				v = (Object(r.a)(u), Object(r.a)(p), Object(r.a)(f), e => {
					let {
						badgeIds: t,
						subredditId: n
					} = e;
					return async (e, r, o) => {
						let {
							apiContext: c
						} = o;
						const i = r(),
							d = i.user.account;
						if (d) {
							const r = (i.users.appliedBadges[d.id] || {})[n] || [],
								o = t.length ? t[0] : r[0],
								l = !!t.length;
							e(b({
								badgeIds: t,
								subredditId: n,
								userId: d.id
							}));
							const u = await Object(a.a)(c(), n, o, l);
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
							apiContext: o
						} = s;
						e(m({
							subredditId: t
						}));
						const c = await Object(a.b)(o(), t, n);
						c.ok ? e(y({
							...c.body,
							subredditId: t
						})) : e(g({
							subredditId: t,
							error: c.error
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
				return m
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const o = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var c = n("./src/reddit/selectors/blockedRedditors.ts");
			const i = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				f = Object(r.a)(i),
				b = Object(r.a)(d),
				h = Object(r.a)(l),
				y = Object(r.a)(u),
				g = Object(r.a)(p),
				m = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t(),
						a = Object(c.a)(s);
					if (Object(c.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let i = !1,
						d = "";
					do {
						e(g());
						const t = {
								after: d,
								pageSize: 100
							},
							n = await o(r(), t);
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
				return o
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			const r = "CATEGORY__LIST_PENDING",
				s = "CATEGORY__LIST_LOADED",
				a = "CATEGORY__LIST_FAILED",
				o = "CATEGORY__SUBREDDITS_PENDING",
				c = "CATEGORY__SUBREDDITS_LOADED",
				i = "CATEGORY__SUBREDDITS_FAILED",
				d = "CATEGORY__RANK_SET"
		},
		"./src/reddit/actions/chat/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
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
				o = e => {
					const t = a[e];
					return t && t()
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
				o = n("./src/reddit/endpoints/chat/userSettings.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
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
					const s = await Object(o.b)(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(b({
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
						h = m(f);
					if (h) {
						t(y());
						const e = m(p.user.chatSettings.invitePolicy),
							n = await Object(o.e)(h, u());
						if (Object(d.a)(((e, t) => n => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: t
								},
								...Object(c.n)(n)
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
						} else t(g(n.error))
					}
				}, E = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					await Object(o.d)(r(), [])
				}
		},
		"./src/reddit/actions/comment/list.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/helpers/trackers/commentList.ts");
			const a = "COMMENTLIST__MARKED_END",
				o = "COMMENTLIST__UNMARKED_END",
				c = Object(r.a)(a),
				i = Object(r.a)(o),
				d = (e, t) => async (n, r) => {
					const a = r();
					e in a.profileCommentsPage.fetchedTokens ? e in a.profileCommentsPage.commentIds ? n(i({
						listingKey: e
					})) : Object(s.a)(a, e) : n(c({
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
			var o = e => Object(s.a)(e, {
					...a
				}),
				c = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const d = "FETCH_COOLDOWN_TIMER__PENDING",
				l = "FETCH_COOLDOWN_TIMER__SUCCESS",
				u = "FETCH_COOLDOWN_TIMER__FAILED",
				p = Object(r.a)(d),
				f = Object(r.a)(l),
				b = Object(r.a)(u),
				h = "SET__COOLDOWN_TIMER",
				y = Object(r.a)(h),
				g = () => async (e, t, n) => {
					let {
						gqlRealtime2Context: r
					} = n;
					const s = t(),
						a = Object(i.Q)(s),
						d = !!Object(c.b)(s),
						{
							expiresAt: l,
							api: {
								pending: u
							}
						} = s.cooldownTimer,
						h = l <= Date.now();
					if (!a || !r || !h || !d || u) return;
					e(p());
					const g = await o(r());
					if (g.ok && g.body) {
						const t = g.body.data.act.data.find(e => e.data.nextAvailablePixelTimestamp),
							n = (null == t ? void 0 : t.data.nextAvailablePixelTimestamp) || null;
						e(y({
							expiresAt: n
						})), e(f())
					} else e(b({
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
			var o = n("./src/lib/initializeClient/installReducer.ts");
			var c = function() {
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
			Object(o.a)({
				features: {
					shouldTryToShowCrosspostModal: c
				}
			});
			const i = Object(r.a)("CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER"),
				d = Object(r.a)("CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER"),
				l = e => async (t, n) => {
					const r = n();
					if (!Object(a.b)(r)) return;
					const o = e.title,
						c = Object(a.d)(e),
						i = Object(a.c)(e);
					t(Object(s.j)(o, c, i, t => {
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
				return o
			}));
			const r = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				a = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				o = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
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
				return o
			})), n.d(t, "d", (function() {
				return c
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
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
				return o
			})), n.d(t, "e", (function() {
				return c
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
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
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
				return k
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
				return Q
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "m", (function() {
				return Y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/forEach.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/lib/uploadToS3/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			const u = async (e, t) => Object(c.a)(Object(i.a)(e, [l.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: o.jb.GET,
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
				L = Object(p.a)(P),
				k = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				x = Object(p.a)(k),
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
							u = Object(_.V)(a, {
								subredditId: n
							}).name;
						e(Object(f.k)(t));
						const p = t.file,
							b = await Object(g.h)(p),
							h = await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [l.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: o.jb.POST,
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
									o = Object(v.n)(t, s, a);
								e(Object(f.j)(o)), y = !0
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
					} = e, h = Object(y.a)(a.url), g = r(), m = Object(_.V)(g, {
						subredditId: d
					}).name, E = await (async (e, t, n, r, s) => Object(c.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: o.jb.POST,
						data: {
							s3_key: n,
							name: r,
							mod_flair_only: s.modFlairOnly,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed
						}
					}))(s.apiContext(), m, h, u, p);
					if (!E.ok) {
						const r = Object(v.k)(a, E.error);
						n(Object(f.i)(r)), n(Object(b.f)(U(e))), t && t.close()
					}
					return E.ok
				}, B = e => async (t, n, s) => {
					const {
						imageData: a,
						subredditId: o,
						emojiName: c,
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
							const s = Object(m.e)(c, n.url, o, i);
							t(S(s)), t(G(o))
						} else {
							const n = Object(h.a)(c),
								r = Object(v.k)(a, n);
							t(Object(f.i)(r)), t(Object(b.f)(U(e)))
						}
						l.close()
					}, l.onerror = n => {
						d = !1;
						const r = Object(h.a)(c),
							s = Object(v.k)(a, r);
						t(Object(f.i)(s)), t(Object(b.f)(U(e))), l.close()
					}, d
				}, G = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n();
					if (Object(O.a)(a, e)) return;
					const o = Object(_.V)(a, {
						subredditId: e
					}).name;
					t(R(e));
					const c = await u(s(), o);
					if (c.ok) {
						const n = c.body;
						t(N({
							subredditId: e,
							data: n
						}))
					} else t(L({
						subredditId: e,
						error: c.error
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
						p = Object(_.V)(u, {
							subredditId: t
						}).name,
						f = await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/v1/${n}/emoji/${t}`,
							method: o.jb.DELETE,
							type: "json"
						}))(d(), e, p);
					if (f.ok) {
						n(D({
							emojiName: e,
							subredditId: t
						})), n(b.f({
							kind: E.b.SuccessCommunityGreen,
							text: r.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else n(j(f.error)), n(b.f({
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
						p = Object(_.V)(u, {
							subredditId: e
						}).name;
					if ((await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: o.jb.POST,
							data: {
								subreddit: t,
								enable: n
							}
						}))(d(), p, t)).ok) {
						n(x({
							subredditId: e,
							emojisEnabled: t
						}))
					} else n(b.f({
						kind: E.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, W = "EMOJI_PERMISSIONS_UPDATED", V = Object(p.a)(W), Y = (e, t, n, s) => async (a, d, u) => {
					let {
						apiContext: p
					} = u;
					const f = d(),
						h = Object(_.V)(f, {
							subredditId: s
						}).name;
					(await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/v1/${n}/emoji_permissions.json`,
						method: o.jb.POST,
						data: {
							name: t,
							post_flair_allowed: r.postFlairAllowed,
							user_flair_allowed: r.userFlairAllowed,
							mod_flair_only: r.modFlairOnly
						}
					}))(p(), e, h, n)).ok ? (a(V({
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
				return o
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				a = "MOD_PAGE_EVENT_POSTS_PENDING",
				o = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				i = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/experiments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			n("./src/reddit/endpoints/user/index.ts"), n("./src/reddit/models/Post/index.ts"), n("./src/reddit/selectors/telemetry.ts");
			const s = "EXPERIMENTS__REQUEST_LOADED",
				a = (Object(r.a)("EXPERIMENTS__REQUEST_PENDING"), Object(r.a)("EXPERIMENTS__REQUEST_FAILED"), Object(r.a)(s), "EXPERIMENTS__SET_EXPERIMENT_OVERRIDE"),
				o = Object(r.a)(a)
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
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/models/StructuredStyles/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
			const u = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				f = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				b = Object(a.a)(u),
				h = Object(a.a)(p),
				y = Object(a.a)(f),
				g = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				v = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				E = e => async (t, a) => {
					t(b());
					const o = a(),
						i = Object(l.V)(o, {
							subredditId: e
						}).name,
						u = o.structuredStyles.models[e],
						p = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ExportTheme")]).then(n.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						f = await p(u, i);
					f.ok ? (t(h()), t(Object(c.f)({
						kind: d.b.SuccessMod,
						text: r.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(y(f.error)), t(Object(c.f)({
						kind: d.b.Error,
						text: r.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, O = e => async (t, a) => {
					t(g());
					const l = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ImportTheme")]).then(n.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						u = await l(e);
					u.ok ? (t(m()), t(Object(c.f)({
						kind: d.b.SuccessMod,
						text: r.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(u.attributes).length && t(Object(o.d)(Object(i.j)(u.attributes)))) : (t(v(u.error)), t(Object(c.f)({
						kind: d.b.Error,
						text: r.fbt._("Sorry, theme failed to import", null, {
							hk: "4BqW32"
						})
					})))
				}
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
		"./src/reddit/actions/harbergerTax/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
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
				o = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
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
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/post/index.tsx");
			const a = "TRACKING_CROSSPOSTS_LOADED",
				o = Object(r.a)(a),
				c = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					const c = await Object(s.d)(a(), {
						postId: e
					});
					if (c.ok) {
						const {
							isTrackingCrossposts: n
						} = c.body.data.postInfoById;
						t(o({
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
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return r
			})), n.d(t, "r", (function() {
				return s
			})), n.d(t, "s", (function() {
				return a
			})), n.d(t, "t", (function() {
				return o
			})), n.d(t, "u", (function() {
				return c
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
				o = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				i = "MULTIREDDIT__CREATE_FAILURE",
				d = "MULTIREDDIT__CREATE_PENDING",
				l = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				p = "MULTIREDDIT__DELETE_SUCCESS",
				f = "MULTIREDDIT__DELETE_FAILURE",
				b = "MULTIREDDIT__DUPLICATE_PENDING",
				h = "MULTIREDDIT__DUPLICATE_SUCCESS",
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
				return o
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "PUSH__GET_PREFERENCES_PENDING",
				s = "PUSH__GET_PREFERENCES_LOADED",
				a = "PUSH__GET_PREFERENCES_FAILED",
				o = "PUSH__SET_PREFERENCES_PENDING",
				c = "PUSH__SET_PREFERENCES_LOADED",
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
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
				g = Object(r.a)(b),
				m = Object(r.a)(h);
			let v = !1;
			const E = () => async (e, t, n) => {
				const r = t();
				if (r.nps.pending) return;
				if (v) return;
				e(y());
				const d = r.platform.currentPage && r.platform.currentPage.queryParams.feature || "",
					l = !!r.user.account,
					u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [i.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${n?s.a.oauthUrl:s.a.apiUrl}/api/jail/asknicely${n?"":".json"}`,
						method: a.jb.GET,
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
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/pageTitle/index.ts"),
				c = n("./src/config.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/endpoints/me/index.ts"),
				u = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = n("./src/reddit/actions/pages/appeal/constants.ts");
			const f = `${c.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				b = Object(i.a)(p.b),
				h = Object(i.a)(p.a);
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
							} else e(b(a.body));
					else Object(u.a)(e, s);
					else e(h(a.error))
				})())
			}, I = (e, t, n) => async (o, c, i) => {
				let {
					routes: d
				} = i;
				const l = c(),
					u = (t || l.platform.currentPage).routeMatch.match,
					p = Object(E.a)(u.url, d);
				if (!p) return;
				const f = e.metaKey || e.ctrlKey || 1 === e.button;
				if (p.route && p.route.meta && (p.route.meta.name === a.Nb.INDEX || p.route.meta.name === a.Nb.MULTIREDDIT || p.route.meta.name === a.Nb.SUBREDDIT)) f ? window.open(u.url) : n ? o(Object(r.b)(u.url)) : await o(p.route.action(u, !0));
				else if (p.match && p.match.params && p.match.params.subredditName) {
					const {
						subredditName: e
					} = p.match.params, t = `/r/${e}/`;
					if (f) window.open(t);
					else if (n) o(Object(r.b)(t));
					else {
						const n = Object(v.a)(e, a.W.HOT);
						await o(Object(r.b)(t)), o(Object(s.subredditDataRequested)(n, e, {}))
					}
				}
			}, S = () => async (e, t) => {
				const n = t();
				e(d.m({
					title: o.b()
				})), Object(m.Q)(n) || await e(g.t())
			}, T = () => async e => e(d.m({
				title: o.b()
			})), w = e => async (t, r) => {
				const s = r();
				t(d.m({
					title: o.k()
				})), Object(m.Q)(s) || await t(g.t());
				const a = Object(m.Q)(s);
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
		"./src/reddit/actions/pages/chatSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "f", (function() {
				return R
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/difference.js"),
				a = n.n(s),
				o = n("./src/telemetry/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/redditGQL/operations/GetSubredditChatSettings.json"),
				p = n("./src/lib/makeGqlRequest/index.ts");
			var f = (e, t) => Object(p.a)(e, {
					...u,
					variables: t
				}),
				b = n("./src/redditGQL/operations/UpdateSubredditChatSettings.json");
			var h = (e, t) => Object(p.a)(e, {
					...b,
					variables: t
				}),
				y = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/telemetry/models/Event.ts");
			var m = n("./src/reddit/models/ChatSettingsPage/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/chat.ts"),
				O = n("./src/reddit/selectors/chatSettingsPage.ts");
			const _ = "FETCH_CHAT_SETTINGS__LOADED",
				I = "FETCH_CHAT_SETTINGS__FAILED",
				S = "FETCH_CHAT_SETTINGS__PENDING",
				T = "UPDATE_CHAT_SETTINGS__LOADED",
				w = Object(i.a)(_),
				D = Object(i.a)(I),
				j = Object(i.a)(S),
				A = Object(i.a)(T),
				C = e => async (t, n) => {
					const r = {
						subredditId: e
					};
					return !!Object(O.b)(n(), r) || (t(j(r)), !1)
				}, P = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = {
						subredditId: e
					};
					if (await t(C(e))) return;
					let o = null;
					const i = await f(s(), a);
					if (i.ok) {
						const t = i.body || {},
							r = t.data && t.data.subredditInfoById,
							s = r && r.chatSettings,
							c = !Object(E.a)(n(), a),
							d = Object(m.c)(s, e, c);
						o = {
							...a,
							chatSettings: d
						}
					}
					if (o) t(w(o));
					else {
						const n = i.error || {
							type: c.I.UNKNOWN_ERROR
						};
						t(D({
							...a,
							error: n
						})), d.c.withScope(t => {
							t.setExtra("info", {
								subredditId: e,
								responseBody: i.body,
								responseOk: i.ok
							}), d.c.captureMessage("Missing subreddit chat settings!")
						})
					}
				}, R = (e, t, n) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					if (await s(C(e))) return [];
					let u, p = !1;
					const f = a()(n, t),
						b = Object(m.b)(f);
					if (b && b.length) {
						const t = {
								subredditId: e,
								subredditChatSettings: b
							},
							n = await h(d(), {
								input: t
							});
						if (n.ok) {
							const e = (n.body || {}).data.updateSubredditChatSettings;
							p = !!e && e.ok
						} else u = n && n.error || {
							type: c.I.UNKNOWN_ERROR
						}
					}
					return p ? (s(A({
						subredditId: e,
						chatSettings: n
					})), s(L(t, f)), n) : (u && s(D({
						subredditId: e,
						error: u
					})), s(A({
						subredditId: e,
						chatSettings: t
					})), s(Object(l.f)({
						duration: l.a,
						id: "CHAT_SETTING_UPDATE_ERROR",
						kind: v.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "3HpR6h"
						})
					})), t)
				}, N = {
					start_chatting_opt_out: (e, t, n) => ({
						source: g.b.Chat,
						action: g.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(y.ib)(e),
						setting: {
							oldValue: t,
							value: n
						},
						...Object(y.n)(e)
					})
				}, L = (e, t) => async (n, r) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const n = N[t.settingId],
								s = e.find(e => e.settingId === t.settingId);
							if (n && s) {
								const e = n(r(), s.state, t.state);
								Object(o.a)(e)
							}
						}
					})
				}
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
				o = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/helpers/trackers/screenview.ts"),
				i = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				u = Object(r.a)(l),
				p = e => async (t, n) => {
					const r = [t(s.A()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(r);
					const l = Object(d.k)(n());
					l ? (await t(Object(a.b)(Object(i.e)(l))), t(u()), Object(c.p)(n(), !0)) : Object(o.a)(t, n())
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
				return o
			}));
			const r = "REPORT_PAGE__FAILED",
				s = "REPORT_PAGE__PENDING",
				a = "REPORT_PAGE__LOADED",
				o = "REPORT_PAGE_INITIAL_REASON__SET"
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
				o = n("./src/redditGQL/operations/UserDataExportEligibility.json"),
				c = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
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
						p = Object(i.k)(u),
						y = Object(d.b)(u);
					if (p && y.success) return;
					e(f());
					const g = await Object(s.a)(r());
					if (!g.ok || !g.body) return void e(h(g.error));
					if (!g.body.account) return void Object(c.a)(e, u);
					const m = await (e => Object(a.a)(e, {
						...o
					}))(l());
					if (!m.ok) return void e(h());
					const v = g.body,
						E = m.body;
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
				return o
			})), n.d(t, "g", (function() {
				return c
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
				return g
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "o", (function() {
				return _
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				a = "CREATE_COLLECTION_FAILED",
				o = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				i = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				f = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				h = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				y = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				g = "REORDER_COLLECTION_PENDING",
				m = "REORDER_COLLECTION_SUCCESS",
				v = "REORDER_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				_ = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postLevelCrowdControl.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/crowdControl/index.ts");
			const a = "POST_LEVEL_CC_LOADED",
				o = Object(r.a)(a),
				c = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					const c = await Object(s.a)(a(), e);
					if (c.ok) {
						const n = c.body.data.postInfoById.crowdControlLevel;
						t(o({
							[e]: n
						}))
					}
				}
		},
		"./src/reddit/actions/product.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
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
				o = n("./src/reddit/endpoints/governance/products/badges.ts");
			const c = "PRODUCT__BADGE_PURCHASE_OPENED",
				i = "PRODUCT__BADGE_PURCHASE_SUCCESS",
				d = "PRODUCT__BADGE_PURCHASE_FAILURE",
				l = "PRODUCT__BADGE_PURCHASE_PENDING",
				u = "PRODUCT__FETCH_SUCCESS",
				p = "PRODUCT__FETCH_FAILURE",
				f = "PRODUCT__FETCH_PENDING",
				b = (Object(r.a)(c), Object(r.a)(i)),
				h = Object(r.a)(d),
				y = Object(r.a)(l),
				g = (Object(r.a)(u), Object(r.a)(p), Object(r.a)(f), e => {
					let {
						productId: t
					} = e;
					return async (e, n, r) => {
						let {
							apiContext: c
						} = r;
						const i = n(),
							d = i.products.models[t],
							l = i.user.account,
							u = !!i.products.api.purchase.pending[t];
						if (d && d.price && !u) {
							e(y({
								productId: t
							}));
							const n = await Object(o.c)(c(), {
								price: d.price,
								products: [{
									productId: t,
									quantity: "1"
								}],
								subredditId: d.subredditId
							});
							let r;
							if (n.ok && l && (r = await Object(a.c)(c(), d.subredditId, l.id)), n.ok) {
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
				return j
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "b", (function() {
				return k
			}));
			var r = n("./src/lib/asyncActions/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/constants/euCookiePolicy.ts"),
				o = n("./node_modules/ts-error/lib/cjs.js"),
				c = n.n(o);
			class GraphQLRequestError_GraphQLRequestError extends c.a {
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
				b = n("./node_modules/os-browserify/browser.js"),
				h = n.n(b);
			const y = /\s+at.*(?:\(|\s)(.*)\)?/,
				g = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				m = void 0 === h.a.homedir ? "" : h.a.homedir();
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
			class MissingDataError_MissingDataError extends c.a {
				constructor() {
					super("Missing data in GraphQL response")
				}
			}
			class RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError extends c.a {
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
					experimentEligibilitySelector: Object(I.d)(Object(I.b)(...a.d)),
					experimentName: f.lf
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
				L = (e, t) => Object(I.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.a.PageLoad;
					return l(e => p()([w, D, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async (t, n) => {
						const r = n();
						try {
							await t(A());
							const n = await t(P({
								action: L(e, r)
							}));
							n && await t(N(n))
						} catch (a) {
							if (a instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof a.response.error && null !== a.response.error && a.response.error.type === s.i) return;
							d.c.withScope(e => {
								Object(d.a)(e, {
									serverLogging: !1
								}), d.c.captureException(a)
							})
						}
					})
				}
		},
		"./src/reddit/actions/recommendations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			n("./src/config.ts"), n("./src/lib/constants/index.ts"), n("./src/lib/makeApiRequest/index.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const s = "RECOMMENDED_POSTS_FAILED",
				a = "RECOMMENDED_POSTS_LOADED";
			Object(r.a)(a), Object(r.a)(s)
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
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			}));
			const r = "REPORT__PENDING",
				s = "REPORT__LOADED",
				a = "REPORT__FAILED",
				o = "REPORT_FLOW__TARGET_SET",
				c = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
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
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
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
					const s = await (e => Object(o.a)(Object(c.a)(e, [i.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: a.jb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							n = h(t.sitewide_rules);
						e(u(n))
					}
				}, b = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					if (!t().user) return;
					const s = await (e => Object(o.a)(Object(c.a)(e, [i.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: a.jb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							n = h(t.livestream_rules);
						e(p(n))
					}
				}, h = e => {
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
				return b
			})), n.d(t, "b", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./node_modules/uuid/v4.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/extractQueryParams/index.ts"));
			var i = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = n("./src/reddit/models/Search/index.ts");
			var f = (e, t) => {
				const n = {
					withAds: 1,
					ad: Object(c.a)(window.location.href).get("ad"),
					subplacement: t
				};
				return Object(i.a)(Object(d.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: o.jb.GET,
					data: n
				})
			};
			const b = "PAGE__TRENDING_SEARCHES_LOADED",
				h = Object(r.a)(b),
				y = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const o = await f(s(), e);
					if (o.ok) {
						const n = (e => {
							const t = [];
							if (e.body && e.body.trending_searches) {
								const n = e.body.trending_searches.length;
								for (let r = 0; r < n; r++) {
									const n = e.body.trending_searches[r],
										s = n.results.data.children.length > 0 ? n.results.data.children[0].data : null,
										o = {
											id: a()(),
											post: s ? Object(u.a)(s) : null,
											rawQuery: n.query_string,
											searchQuery: n.display_string,
											section: p.c.trending,
											isWhitelisted: n.is_subreddit_whitelisted,
											subredditInfo: s ? {
												icon: s.sr_detail.community_icon || s.sr_detail.icon_img,
												displayText: s.sr_detail.display_name_prefixed
											} : null,
											subredditOccurrences: n.subreddit_occurences - 1,
											type: p.b.text
										};
									t.push(o)
								}
							}
							return t
						})(o);
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
				return b
			})), n.d(t, "a", (function() {
				return h
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
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				d = n("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				l = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts");
			const p = Object(s.a)(a.a),
				f = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				b = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				h = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				y = Object(s.a)(f),
				g = Object(s.a)(b),
				m = Object(s.a)(h),
				v = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const d = Object(u.V)(n(), {
						subredditId: e
					});
					if (void 0 === d) {
						const e = r.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							n = Object(o.e)(e, l.b.Error);
						return await t(Object(o.f)({
							...n,
							duration: o.a
						})), {
							reason: e
						}
					}
					const f = await ((e, t) => Object(c.a)(e, {
						...i,
						variables: {
							subredditId: t
						}
					}))(a(), e);
					if (!f.ok) {
						const e = r.fbt._("Could not fetch settings for {subredditName}", [r.fbt._param("subredditName", d.name)], {
								hk: "2G8rnU"
							}),
							n = Object(o.e)(e, l.b.Error);
						return await t(Object(o.f)({
							...n,
							duration: o.a
						})), {
							reason: e
						}
					}
					const b = f.body.data.subredditInfoById;
					return await t(p({
						subredditId: e,
						modSettings: b.liveStreamingInfo
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
					const u = await ((e, t) => Object(c.a)(e, {
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
							s = Object(o.e)(t, l.b.Error);
						await n(Object(o.f)({
							...s,
							duration: o.a
						})), n(m({
							subredditId: e
						}))
					}
					const p = r.fbt._("Community broadcasting settings saved", null, {
							hk: "GTwrg"
						}),
						f = Object(o.e)(p, l.b.SuccessCommunity);
					await n(Object(o.f)({
						...f,
						duration: o.a
					})), n(g({
						subredditId: e
					}))
				}, _ = (e, t, n) => async (r, s, a) => {
					let {
						gqlContext: o
					} = a;
					const c = [...n.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await r(O(e, {
						whitelistedRedditors: c
					}, o())), await r(v(e))
				}, I = (e, t, n) => async (r, s, a) => {
					let {
						gqlContext: o
					} = a;
					const c = n.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await r(O(e, {
						whitelistedRedditors: c
					}, o())), await r(v(e))
				}
		},
		"./src/reddit/actions/subreddit/relatedSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/subreddit/recommendations.ts");
			const a = (e, t) => async (n, r, a) => {
				let {
					gqlContext: o
				} = a;
				var i;
				const d = await Object(s.a)(o(), {
					subredditIds: [e],
					count: t
				});
				if (!d.ok) return;
				const l = d.body;
				(null === (i = l.data.subredditRecommendations.recommendations) || void 0 === i ? void 0 : i.length) && n(c({
					subredditId: e,
					relatedSubreddits: l.data.subredditRecommendations.recommendations.reduce((e, t) => {
						let {
							id: n
						} = t;
						return n && e.push(n), e
					}, [])
				}))
			}, o = "RELATED_SUBREDDITS__LOADED", c = Object(r.a)(o)
		},
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
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
			const o = (e, t, n, r, o) => async (c, i, l) => {
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
					postIds: o || []
				});
				if (!h.ok) return;
				const y = h.body;
				y.data && y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && c(d(null === (f = y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === f ? void 0 : f.reduce((e, n) => ((null == n ? void 0 : n.id) && (e[t ? n.name.toLowerCase() : n.id] = n), e), {}))), (null === (b = y.data) || void 0 === b ? void 0 : b.postsInfoByIds) && c(p(y.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
			}, c = "SUBREDDITS_CAROUSEL__LOADED", i = "SUBREDDITS_CAROUSEL__PENDING", d = Object(r.a)(c), l = (Object(r.a)(i), "POST_CAROUSEL__LOADED"), u = "POST_CAROUSEL__PENDING", p = Object(r.a)(l);
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
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
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
					const p = await ((e, t) => Object(o.a)(Object(c.a)(e, [i.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: a.jb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (p.ok) {
						const n = t(),
							r = p.body && p.body.length ? p.body.map(e => Object(d.G)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
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
				return o
			}));
			const r = "SUBREDDIT_MENTION_LOADED",
				s = "SUBREDDIT__MODEL_SUCCEEDED",
				a = "SUBREDDIT__MODEL_PENDING",
				o = "SUBREDDIT__MODEL_FAILED"
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
				o = n("./src/redditGQL/operations/SubredditTopContent.json"),
				c = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
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
					})), t(Object(s.A)());
					const h = await ((e, t) => Object(a.a)(e, {
						...o,
						variables: t
					}))(r.gqlContext(), {
						subredditName: i
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const n = Object(c.c)(e);
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
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "THEME_CHANGED",
				a = (Object(r.a)(s), "BOOTUP_THEME"),
				o = Object(r.a)(a)
		},
		"./src/reddit/actions/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "TRACKING__VIEWPORT_DATA_LOADED",
				a = "TRACKING__VIEWPORT_DATA_UNLOADED",
				o = Object(r.a)(s);
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
				o = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/selectors/telemetry.ts");
			const l = "upvote_prompt";
			var u = n("./src/reddit/selectors/upvotePrompt.ts"),
				p = n("./src/telemetry/index.ts");
			const f = "INCREMENT_SEEN_COUNT_PER_SESS",
				b = (e, t, n) => async (a, o) => {
					const f = o(),
						b = Object(i.z)(),
						m = Date.now(),
						v = b && m - b < 18e4,
						E = Object(u.c)(f, {
							postId: e
						}),
						O = f.upvotePromptCountPerSess,
						_ = (() => {
							const e = Object(i.y)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !E || v || O >= 4 || _.length >= 1) return;
					const I = y(f, t);
					if (!I) return;
					a(Object(c.f)({
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
							...Object(d.n)(e)
						}))(f))
					}));
					const S = [..._, Date.now()].slice(Math.max(_.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: l,
						action: "view",
						noun: l,
						...Object(d.n)(e)
					}))(f)), Object(i.Db)(), Object(i.Cb)(S), a(g()), n && n()
				}, h = e => async (t, n) => {
					Object(p.a)((e => ({
						source: l,
						action: "click",
						noun: "upvote",
						...Object(d.n)(e)
					}))(n())), Object(u.c)(n(), {
						postId: e
					}) && t(Object(o.kb)(e))
				}, y = (e, t) => {
					return t ? r.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : r.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})
				}, g = Object(a.a)(f)
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
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/accounts/index.ts"),
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
					var l;
					if (n().blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const u = await Object(c.a)(d(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(b(u.body)), u.body.id && t(Object(a.f)(u.body.id)), t(o.g(p)), t(o.f({
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
						t(h(n)), "REBLOCK_RATE_LIMIT" === (null === (l = u.body) || void 0 === l ? void 0 : l.reason) ? t(o.f({
							id: p,
							kind: i.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: y(e)
						})) : t(o.f({
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
						p = Object(d.k)(u),
						f = p ? p.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					f && (t(E({
						name: e
					})), (await Object(c.c)(l(), f, e)).ok ? (t(O({
						name: e
					})), b && b.id && t(Object(a.h)(b.id)), t(o.f({
						kind: i.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(o.f({
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
				return b
			})), n.d(t, "b", (function() {
				return h
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
				o = n("./src/reddit/endpoints/accounts/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts");
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
					const d = await Object(o.e)(i(), e);
					d.ok ? d.body.name && (t(p(d.body)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(f()), t(a.f({
						kind: c.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, h = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", g = "USER_UNWHITELIST__FAILED", m = Object(s.a)(h), v = Object(s.a)(y), E = Object(s.a)(g), O = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					t(m({
						name: e
					})), (await Object(o.d)(i(), e)).ok ? (t(v({
						name: e
					})), t(a.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(E({
						name: e
					})), t(a.f({
						kind: c.b.Error,
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
				return o
			})), n.d(t, "c", (function() {
				return c
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
			const o = "USERNAME_AVAILABLE__AVAILABLE",
				c = "USERNAME_AVAILABLE__FAILURE",
				i = "USERNAME_AVAILABLE__PENDING",
				d = "USERNAME_AVAILABLE__UNAVAILABLE",
				l = Object(s.a)(o),
				u = Object(s.a)(c),
				p = Object(s.a)(i),
				f = Object(s.a)(d),
				b = e => {
					let {
						username: t
					} = e;
					return async (e, n, s) => {
						let {
							apiContext: o
						} = s;
						const c = n().users.nameAvailable;
						if (!c[t] || c[t] === r.Error) {
							e(p({
								username: t
							}));
							const n = await Object(a.a)(o(), {
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
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Thumbnail/index.tsx"),
				c = n("./src/reddit/components/ClassicPost/index.m.less"),
				i = n.n(c);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: r,
					forceShowNSFW: c,
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
				}, s.a.createElement(o.a, {
					className: Object(a.a)(i.a.thumbnail, n),
					containerClassName: b,
					crosspost: r,
					forceShowNSFW: c,
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
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
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
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				b = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				g = n.n(y);
			const m = Object(l.a)(p.a),
				v = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(i.a)(e => {
				const t = Object(o.e)(h.d),
					n = v,
					i = Object(o.d)(),
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
						className: Object(c.a)(g.a.Overlay, {
							[g.a.isOverlayOpen]: e.isOpen
						}),
						onClick: l
					}, a.a.createElement("div", {
						className: Object(c.a)(g.a.DropdownPadding, {
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
						color: Object(b.a)(e).linkText
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
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/HumanDate/index.tsx"),
				a = n("./src/lib/timeUntil/index.ts"),
				o = n("./node_modules/react/index.js"),
				c = n.n(o);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: e.className
				}, t ? i._("Voting closed {timeAgo}", [i._param("timeAgo", c.a.createElement(s.d, {
					seconds: e.poll.endsAt / r.Sb
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
				return U
			})), n.d(t, "a", (function() {
				return $
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				E = n("./src/reddit/hooks/useClickSourceData.ts"),
				O = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				_ = n("./src/reddit/hooks/usePostContext.ts"),
				I = n("./src/reddit/hooks/useTheme.ts"),
				S = n("./src/reddit/icons/fonts/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				w = n("./src/reddit/models/Media/index.ts"),
				D = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				A = n("./src/lib/getShortenedLink.ts"),
				C = n("./src/reddit/components/FlairWrapper/index.tsx"),
				P = n("./node_modules/fbt/lib/FbtPublic.js"),
				R = n("./src/lib/prettyPrintNumber/index.ts"),
				N = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				L = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				k = n.n(L);
			const x = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var U, M = Object(c.b)(x)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return Object(O.a)() ? null : o.a.createElement("div", {
						className: Object(u.a)(e.className, k.a.proposalMetaData)
					}, o.a.createElement("span", null, P.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [P.fbt._param("count", Object(R.a)(r)), P.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(N.a, {
						className: k.a.proposalExpiry,
						poll: t
					}))
				})),
				F = n("./src/reddit/components/SEOTitle/index.tsx"),
				B = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				G = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				q = n("./src/reddit/selectors/user.ts"),
				H = n("./src/telemetry/models/Outbound.ts"),
				Q = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				W = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				V = n("./src/reddit/components/PostTitle/index.m.less"),
				Y = n.n(V);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(U || (U = {}));
			const $ = e => {
					let {
						size: t,
						titleColor: n,
						titleType: r,
						nowrap: s,
						children: a,
						className: c,
						redditStyle: i,
						shouldBlurTitle: d
					} = e;
					const l = Object(I.a)();
					let p = "";
					switch (t) {
						case U.ExtraLarge:
							p = Y.a.ExtraLarge;
							break;
						case U.Large:
							p = Y.a.Large;
							break;
						case U.Medium:
							p = Y.a.Medium;
							break;
						case U.Small:
							p = Y.a.Small;
							break;
						case U.ExtraSmall:
							p = Y.a.ExtraSmall;
							break;
						case U.Metadata:
							p = Y.a.Metadata
					}
					return o.a.createElement("div", {
						className: Object(u.a)(Y.a.Title, c, p, {
							[Y.a.isNoWrap]: s,
							[Y.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(j.a)({
								redditStyle: i,
								theme: l
							}).titleText
						}
					}, r ? o.a.createElement(F.b, {
						type: r
					}, a) : a)
				},
				z = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: r,
						children: s,
						...a
					} = e;
					return o.a.createElement(i.a, K({}, a, {
						className: Object(u.a)(t, Y.a.styledLink, {
							[Y.a.isVisitedEnabled]: !n
						})
					}), s)
				},
				X = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: r,
						children: s
					} = e;
					return o.a.createElement("div", {
						className: Object(u.a)(Y.a.titleContainer, r, {
							[Y.a.isNoWrap]: n,
							[Y.a.isVisitedEnabled]: !t
						})
					}, s)
				},
				J = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(f.q)(e, {
							pageLayer: n
						})
					},
					isNsfwBlurSubreddit: G.e,
					shouldOpenPostInNewTab: q.jb
				}),
				Z = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: r
					} = t, s = Object(c.d)(), a = Object(E.a)(), i = Object(c.e)(B.b), d = Object(c.e)(B.c), u = e => {
						!i && !d || t.media && Object(w.H)(t.media) || (e.preventDefault(), s(Object(g.bb)(Object(m.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(X, {
						nowrap: e.nowrap
					}, o.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, o.a.createElement(ee, e)); {
						const s = t.media && Object(w.H)(t.media) ? Object(v.c)(t.id, n.name) : t.permalink,
							c = e.isCommentPermalink ? Object(m.b)(s) : Object(y.a)(s, void 0, a);
						return o.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? o.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, o.a.createElement(ee, t)) : o.a.createElement(ee, t)
						})(t, e) : o.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c,
							onClick: u
						}, o.a.createElement(ee, e)))
					}
				},
				ee = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const a = e.isCommentsPage ? F.a.PostComments : F.a.PostItem,
						c = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return o.a.createElement($, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: c,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(C.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), s)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: r
					} = e, {
						isSponsored: s
					} = r, a = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink;
					if (Object(O.a)()) return null;
					if (n && r.isNSFW) return null;
					const c = !t && !e.isCrosspost && e.size !== U.Large && !r.isSponsored && !(r.media && Object(w.H)(r.media)) && (r.source || r.media && (r.media.type === w.o.GIFVIDEO || r.media.type === w.o.IMAGE || r.media.type === w.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (c) return o.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(w.D)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: a
						}, Object(A.a)(r), !r.isSponsored && o.a.createElement(S.a, {
							name: "external_link",
							className: Y.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== U.Large && e.size !== U.ExtraLarge) return o.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: a
					}, Object(A.a)(r), !r.isSponsored && o.a.createElement(S.a, {
						name: "external_link",
						className: Y.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
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
						poll: c,
						post: i,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: p
					} = this.props, f = n === T.b.Left, b = Object(C.b)(i), {
						leftFlair: h,
						rightFlair: y
					} = Object(Q.a)({
						flair: b,
						isFlairPositionedLeft: f,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), g = !a && !s && !t, m = g && h && h.length > 0, v = g && y && y.length > 0;
					return o.a.createElement("div", {
						className: Object(u.a)(Y.a.Component, e, i.id),
						ref: this.props.innerRef,
						"data-adclicklocation": W.a.TITLE,
						onClick: p
					}, !d && m && o.a.createElement(C.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), !Object(D.b)(i) && o.a.createElement(Z, K({}, this.props, {
						leftFlair: d ? h : void 0
					})), c && o.a.createElement(M, {
						className: Y.a.pollMeta,
						pollId: c.id
					}), o.a.createElement(te, this.props), v && o.a.createElement(C.a, {
						isFlairFilter: !0,
						titleFlair: y,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: Y.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${r.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(f.gb)(),
					n = Object(f.w)(t),
					r = Object(_.a)(),
					s = Object(c.e)(s => J(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(I.a)(),
					i = Object(p.b)();
				return r ? o.a.createElement(ne, K({
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
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/models/ScheduledPost/index.ts");
			const a = {
					frequency: s.d.Hourly,
					interval: 1,
					byMonthDays: [],
					byWeekDays: []
				},
				o = () => {
					const e = new Date;
					return e.setMinutes(60), {
						submitDate: Object(r.g)(e),
						timezoneName: Object(r.b)() || r.a,
						frequencyOption: null,
						recurrenceInfo: null
					}
				},
				c = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
					const r = Object(s.r)(e.getDay()),
						o = e.getDate();
					let c = n ? {
						...n
					} : null;
					switch (t) {
						case s.d.Monthly:
							c = {
								...a,
								...n,
								frequency: t,
								byMonthDays: [o]
							};
							break;
						case s.d.Weekly:
							c = {
								...a,
								...n,
								frequency: t,
								byWeekDays: [r]
							};
							break;
						case s.d.Daily:
						case s.d.Hourly:
							c = {
								...a,
								...n,
								frequency: t
							};
							break;
						case null:
							return null
					}
					return c
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
				borderTop4Line: "yZCsWy2xxecACvzPbQ_Ge",
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
				listItemButton: "_1jKZytiaP074XAKQIdEzzq",
				loadingItem: "_3wwag2ZgVLfNKLCuEuXF7h",
				marginBottom2: "F6UjYfPpQi9ycdulmJnnf",
				marginLeft1: "_3vubwQI518j2qoj8dYdhwW",
				marginLeft2: "_1QVrieUoti9cxiQSRw314E",
				marginTop2: "_3iXUDNuLPuwiYhJfqGPJEg",
				metaDataSeparator: "_33A2uwwTbNBE44RwzNWbk6",
				metaTextColor: "_3C9CntSKG4Z9k6ul3_ugNH",
				metaTextFont: "_3X3sIziqqmPSvYCMJmkipO",
				nsfwSection: "_1f4QVsU6jdEkvigYTcqIG7",
				paddingTop1: "_39RbKXGDidws2W3278Lj1A",
				postTitle: "YeMwUP22Up8CVxmgTayyQ",
				sdListContainer: "_3MnH55IylwBZcJD46S4KFO",
				spaceBetween: "_1H3lgd1i4NTn9aM5VR9BQX",
				titleFontH5: "sb9GBNKICO504iABZENf3",
				titlePadding: "_2NH7qxA8P_UowZKF4-LUNe",
				trendingSpacer: "uSWMIsxB2_3C40ulyecE-",
				triggerItem: "_4V8jUxy7iuElvae9SRoVI",
				typeaheadPadding: "_3tgXQ-cvqUY_NlKDJgdSdy",
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
				return ie
			})), n.d(t, "a", (function() {
				return de
			})), n.d(t, "d", (function() {
				return le
			})), n.d(t, "c", (function() {
				return fe
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = e => e.endsWith("/") ? e : `${e}/`,
				u = n("./src/lib/makeSearchKey/index.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				f = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				b = n("./src/reddit/helpers/clickSourceData/index.ts"),
				h = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				y = n("./src/reddit/helpers/trackers/searchResults.ts"),
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
				var a, o, i;
				return (null === (a = null == t ? void 0 : t.displayInfo) || void 0 === a ? void 0 : a.isQuarantined) ? s.a.createElement(_, {
					className: Object(c.a)(r.subredditIcon, r.quarantineIcon)
				}) : (null === (o = null == t ? void 0 : t.displayInfo) || void 0 === o ? void 0 : o.iconUrl) ? s.a.createElement("div", {
					className: r.subredditIcon,
					style: {
						backgroundImage: `url('${null===(i=null==t?void 0:t.displayInfo)||void 0===i?void 0:i.iconUrl}')`
					}
				}) : s.a.createElement(m.a, {
					name: "community",
					isFilled: !n,
					className: Object(c.a)(r.defaultCommunityIcon, n && r.mNightmode)
				})
			}
			var S = n("./src/reddit/components/SearchDropdown/index.m.less"),
				T = n.n(S);
			const w = Object(o.a)(p.b);

			function D(e) {
				let {
					activeTooltipId: t,
					className: n,
					focusedItem: o,
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
				var L;
				const k = Object(g.a)(),
					{
						nsfwSessionSetting: x,
						refreshNsfwSessionSettingExpiryTime: U
					} = Object(f.b)(),
					M = Object(a.e)(O.kb);
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: _.searchQuery,
						rawQuery: _.rawQuery || _.searchQuery,
						searchQuery: _.searchQuery,
						structureType: E.c.Recent
					};
					k(Object(y.A)(y.a.RECENT, e, D, D, _))
				}, []);
				const F = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery,
					{
						url: B,
						qs: G
					} = Object(h.a)({
						includeNsfwResults: M && x,
						multireddit: null,
						searchItem: _,
						searchOptions: {
							source: u.a.Recent
						},
						subreddit: null
					}),
					q = F(_);
				let H;
				o && (H = F(o));
				return s.a.createElement(d.a, {
					"aria-label": _.searchQuery,
					className: Object(c.a)(T.a.listItem, T.a.spaceBetween, n, !((null == o ? void 0 : o.section) !== v.c.recent || H !== q) && T.a.backgroundFocused),
					onClick: () => {
						_.isTypeaheadSuggestion ? A() : P(_.searchQuery), R(_.searchQuery, _, D), N(), U()
					},
					key: q,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: B && l(B) || "",
						search: G,
						state: Object(b.c)(b.a.SEARCH_DROPDOWN, S, _.isProfile || _.isSubreddit)
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
					className: Object(c.a)(T.a.marginLeft2, T.a.titleFontH5)
				}, q), (null === (L = _.displayInfo) || void 0 === L ? void 0 : L.isQuarantined) ? s.a.createElement("p", {
					className: Object(c.a)(T.a.marginLeft2, T.a.metaTextFont, T.a.metaTextColor, T.a.paddingTop1)
				}, i.fbt._("Quarantined", null, {
					hk: "4t1Oq4"
				})) : null)), s.a.createElement("div", {
					className: T.a.flexAlignCenter,
					onMouseEnter: () => j(q),
					onMouseLeave: () => j(null),
					id: q
				}, s.a.createElement(m.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), C(_)
					}
				}), s.a.createElement(w, {
					className: T.a.fixedTextTooltip,
					isOpen: t === q,
					text: i.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: q,
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
				L = n("./src/reddit/helpers/correlationIdTracker.ts"),
				k = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				x = n("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function U(e) {
				let {
					className: t,
					focusedItem: n,
					id: r,
					trendingItem: o,
					searchOriginPage: p,
					onUpdateSearchQuery: f,
					onCloseDropdown: y,
					onSetRecentSearch: g,
					fireAdPixelsOfType: E
				} = e;
				const O = Object(a.d)(),
					_ = !(!o.post || !o.post.isSponsored),
					{
						url: I,
						qs: S
					} = Object(h.a)({
						multireddit: null,
						searchItem: o,
						searchOptions: {
							source: _ ? u.a.PromotedTrend : u.a.Trending
						},
						subreddit: null
					}),
					w = s.a.createElement(d.a, {
						id: r,
						"aria-label": o.searchQuery,
						className: Object(c.a)(T.a.listItem, T.a.borderBottom, T.a.spaceBetween, t, !((null == n ? void 0 : n.section) !== v.c.trending || o.searchQuery !== n.searchQuery) && T.a.backgroundFocused),
						onClick: () => {
							f(o.searchQuery);
							const e = (() => {
								const {
									post: e,
									subredditInfo: t,
									subredditOccurrences: n,
									...r
								} = o;
								return r
							})();
							if (g(e), Object(L.d)(L.a.SearchResults), (e => O((t, n) => Object(x.u)({
									state: n(),
									trendingSearch: e,
									telemetrySource: k.a.Typeahead
								})))(o), _) {
								const {
									post: e
								} = o;
								e && E(e, P.a.Click)
							}
							y()
						},
						key: `trending-${o.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: I && l(I) || "",
							search: S,
							state: Object(b.c)(b.a.TYPEAHEAD, p)
						}
					}, s.a.createElement("div", null, _ && s.a.createElement("div", {
						className: Object(c.a)(T.a.active, T.a.labelsFont, T.a.marginBottom2)
					}, i.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), s.a.createElement("div", null, s.a.createElement(m.a, {
						name: "popular",
						className: T.a.trendingIcon
					}), s.a.createElement("span", null, s.a.createElement(A.a, {
						className: T.a.marginLeft2,
						redditStyle: !0,
						size: A.b.Small
					}, o.searchQuery)), o.post && s.a.createElement("div", {
						className: Object(c.a)(T.a.postTitle, T.a.titleFontH5, T.a.trendingSpacer)
					}, o.post.title)), o.subredditInfo && s.a.createElement(R.a, {
						className: Object(c.a)(T.a.metaTextColor, T.a.trendingSpacer, !o.post && T.a.marginTop2),
						iconUrl: o.subredditInfo.icon || void 0,
						suffix: i.fbt._("{subreddit name} and more", [i.fbt._param("subreddit name", o.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), o.post && Object(N.a)(o.post) && s.a.createElement(j.a, {
						post: o.post,
						removeLink: !0,
						usePreview: _
					}));
				return _ ? s.a.createElement(C.a, {
					post: o.post
				}, w) : w
			}
			var M = n("./src/lib/prettyPrintNumber/index.ts"),
				F = n("./src/reddit/components/Flair/index.tsx"),
				B = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts");

			function q(e) {
				let {
					className: t,
					focusedItem: n,
					item: a,
					indexOfItem: o,
					nightmode: u,
					searchOriginPage: p,
					subredditSuggestions: f,
					onSendSearchClickTypeaheadEvent: h,
					onSetRecentSearch: m,
					onClearSearchQuery: v,
					onCloseDropdown: O,
					relativePosition: _
				} = e;
				var S, w, D, j, A;
				const C = Object(g.a)(),
					P = (null === (S = a.displayInfo) || void 0 === S ? void 0 : S.karma) || 0,
					R = (null === (w = a.displayInfo) || void 0 === w ? void 0 : w.subscribers) || 0,
					N = a.isProfile ? i.fbt._({
						"*": "{karma count} karma",
						_1: "1 karma"
					}, [i.fbt._plural(P, "karma count", Object(M.b)(P))], {
						hk: "2KlIGI"
					}) : i.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [i.fbt._plural(R, "members count", Object(M.b)(R))], {
						hk: "1uMCes"
					});
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: a.searchQuery,
						rawQuery: a.rawQuery || a.searchQuery,
						searchQuery: a.searchQuery,
						structureType: E.c.Search
					};
					C(Object(y.A)(y.a.TYPEAHEAD, e, o, _, a))
				}, []);
				return s.a.createElement(d.a, {
					"aria-label": a.searchQuery,
					className: Object(c.a)(T.a.listItem, T.a.typeaheadPadding, t, !((null == n ? void 0 : n.searchQuery) !== a.searchQuery) && T.a.backgroundFocused),
					onClick: () => {
						m(a), h(a.searchQuery, a, o, _, f), v(!1), O(!1)
					},
					key: a.searchQuery,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: `/${l(a.isProfile?a.searchQuery.replace("u/","user/"):a.searchQuery)}`,
						state: Object(b.c)(b.a.TYPEAHEAD, p)
					}
				}, s.a.createElement(I, {
					searchItem: a,
					nightmode: u,
					styles: T.a
				}), s.a.createElement("div", null, (null === (D = a.displayInfo) || void 0 === D ? void 0 : D.subredditOrProfileName) && s.a.createElement("div", {
					className: Object(c.a)(T.a.marginLeft2, T.a.titleFontH5)
				}, a.displayInfo.subredditOrProfileName), s.a.createElement("div", {
					className: Object(c.a)(T.a.flexAlignCenter, T.a.marginLeft2, T.a.flexWrap)
				}, (null === (j = a.displayInfo) || void 0 === j ? void 0 : j.isQuarantined) && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(c.a)(T.a.metaTextColor, T.a.metaTextFont)
				}, i.fbt._("Quarantined", null, {
					hk: "4t1Oq4"
				})), s.a.createElement(B.a, {
					className: Object(c.a)(T.a.metaDataSeparator)
				})), s.a.createElement("div", {
					className: Object(c.a)(T.a.metaTextColor, T.a.metaTextFont)
				}, a.isProfile ? i.fbt._("User", null, {
					hk: "3KLiZZ"
				}) : i.fbt._("Community", null, {
					hk: "18dohI"
				})), P || R ? s.a.createElement(s.a.Fragment, null, s.a.createElement(B.a, {
					className: Object(c.a)(T.a.metaDataSeparator)
				}), s.a.createElement("div", {
					className: Object(c.a)(T.a.metaTextColor, T.a.metaTextFont)
				}, N)) : null, (null === (A = a.displayInfo) || void 0 === A ? void 0 : A.isNSFW) && s.a.createElement(F.b, {
					className: T.a.marginLeft1,
					flair: {
						type: G.f.Nsfw,
						text: i.fbt._("nsfw", null, {
							hk: "2nrY5X"
						})
					}
				}))))
			}
			var H = n("./src/reddit/constants/zIndex.ts"),
				Q = n("./src/reddit/controls/Dropdown/index.tsx"),
				W = n("./src/reddit/hooks/useLocalStorage.ts");
			const V = () => {
				const [e, t] = Object(W.a)("nsfw_typeahead_expanded", !1);
				return {
					get nsfwTypeaheadExpanded() {
						return e
					},
					setNsfwTypeaheadExpanded: e => {
						t(e)
					}
				}
			};
			var Y = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				K = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				$ = n("./node_modules/lodash/pick.js"),
				z = n.n($),
				X = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				J = n.n(X),
				Z = n("./src/reddit/constants/history.ts"),
				ee = n("./src/reddit/constants/parameters.ts"),
				te = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				ne = n("./src/reddit/hooks/usePageLayer.ts"),
				re = n("./src/reddit/selectors/experiments/serpTabPreserved.ts");
			const se = "search-trigger-item";

			function ae(e) {
				let {
					className: t,
					searchOriginPage: n,
					searchItem: o,
					position: l,
					onTriggerSearch: p
				} = e;
				var b;
				const v = (null === (b = o.searchQuery) || void 0 === b ? void 0 : b.trim()) || "",
					_ = Object(g.a)(),
					I = Object(ne.a)(),
					S = Object(te.Z)(I),
					w = Object(a.e)(e => Object(te.eb)(e, {
						pageLayer: I
					})),
					D = Object(a.e)(e => Object(te.db)(e, {
						pageLayer: I
					})),
					j = Object(a.e)(e => Object(te.t)(e, {
						pageLayer: I
					})),
					A = Object(a.e)(e => Object(te.e)(e, {
						pageLayer: I
					})),
					C = Object(a.e)(e => Object(re.a)(e)),
					P = Object(a.e)(O.kb),
					{
						nsfwSessionSetting: R
					} = Object(f.b)(),
					N = Object(u.e)({
						...z()(S || {}, ee.t),
						q: o.searchQuery,
						restrict_sr: w ? "1" : ""
					}),
					{
						url: L,
						qs: x
					} = Object(h.a)({
						subreddit: j,
						multireddit: A,
						searchItem: o,
						...C ? {
							searchOptions: N
						} : {},
						shouldSearchSubreddit: w,
						shouldSearchMultireddit: D,
						includeNsfwResults: P && R
					}),
					U = {
						...N,
						id: (null == j ? void 0 : j.id) || "",
						eventType: Boolean(w) ? "subreddit" : void 0
					};
				return Object(r.useEffect)(() => {
					_(Object(y.v)(U, w, l, I || void 0))
				}, []), s.a.createElement(d.a, {
					onClick: function(e) {
						_(Object(y.p)(E.a.FullSearchButton, U, w, k.a.Typeahead, I || void 0)), p(e)
					},
					to: {
						pathname: L,
						state: {
							[Z.b.SearchOriginPage]: n
						},
						search: x
					},
					className: Object(c.a)(T.a.listItem, J.a.item, t),
					"data-testid": se
				}, s.a.createElement(m.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: J.a.text
				}, i.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), i.fbt._("{search query}", [i.fbt._param("search query", v)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ce = "typeahead_nsfw_toggle", ie = "SearchDropdown", de = "SearchDropdownContent", le = 5, ue = Object(o.a)(Q.a);

			function pe(e) {
				let {
					typeaheadSuggestions: t,
					focusedItemIndex: n,
					nightmode: o,
					searchItem: i,
					searchOriginPage: d,
					onClearSearchQuery: l,
					onClose: u,
					onSendSearchClickTypeaheadEvent: p,
					onSetRecentSearch: f
				} = e;
				const b = Object(g.a)(),
					h = Object(r.useMemo)(() => t.filter(e => e.isSubreddit), [t]),
					m = Object(a.e)(O.kb),
					{
						nsfwTypeaheadExpanded: v,
						setNsfwTypeaheadExpanded: E
					} = V(),
					_ = [];
				let I = [],
					S = !1;
				m ? (t.forEach(e => {
					var t;
					(null === (t = e.displayInfo) || void 0 === t ? void 0 : t.isNSFW) ? _.push(e): I.push(e)
				}), S = _.length > 0) : I = t;
				const w = I.length;
				return s.a.createElement(s.a.Fragment, null, I.map((e, r) => s.a.createElement(q, {
					focusedItem: t[n],
					indexOfItem: r,
					relativePosition: r,
					subredditSuggestions: h,
					item: e,
					key: e.id,
					onClearSearchQuery: l,
					onSendSearchClickTypeaheadEvent: p,
					onSetRecentSearch: f,
					nightmode: o,
					onCloseDropdown: u,
					searchOriginPage: d
				})), S && s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
					className: Object(c.a)(T.a.nsfwSection, !v && T.a.borderBottom),
					"data-testid": ce,
					onClick: () => (e => {
						const t = v ? y.a.COLLAPSE_NSFW : y.a.EXPAND_NSFW;
						b(Object(y.u)(t, e)), E(!v)
					})(i)
				}, s.a.createElement("p", {
					className: Object(c.a)(T.a.listItemText, T.a.mTypeahead)
				}, oe._("NSFW results", null, {
					hk: "17BDhb"
				})), s.a.createElement("p", {
					className: T.a.listItemButton
				}, v ? s.a.createElement(s.a.Fragment, null, oe._("Collapse", null, {
					hk: "4nBun"
				}), s.a.createElement(K.a, {
					className: T.a.chevron
				})) : s.a.createElement(s.a.Fragment, null, oe._("Expand", null, {
					hk: "11NQXp"
				}), s.a.createElement(Y.a, {
					className: T.a.chevron
				})))), v && _.map((e, r) => s.a.createElement(q, {
					focusedItem: t[n],
					indexOfItem: w + r,
					relativePosition: r,
					subredditSuggestions: h,
					item: e,
					key: e.id,
					onClearSearchQuery: l,
					onSendSearchClickTypeaheadEvent: p,
					onSetRecentSearch: f,
					nightmode: o,
					onCloseDropdown: u,
					searchOriginPage: d
				}))))
			}

			function fe(e) {
				var t;
				const {
					containerWidth: n,
					trendingItems: o,
					isTrendingPending: i,
					isOpen: d,
					isTypeaheadPending: l,
					itemList: u,
					recentSearches: p,
					typeaheadSuggestions: f,
					focusedItemIndex: b,
					nightmode: h,
					searchItem: y,
					searchOriginPage: g,
					isFixed: m = !0,
					isOverlay: v = !0,
					fireAdPixelsOfType: E,
					onClearSearchQuery: O,
					onClose: _,
					onRemoveRecentSearch: I,
					onSendSearchClickRecentEvent: S,
					onSetRecentSearch: w,
					onUpdateSearchQuery: j
				} = e, A = Object(a.d)(), [C, P] = Object(r.useState)(null), [R, N] = Object(r.useState)(n), [L, M] = Object(r.useState)(new Array(le).fill(!1)), F = !!(null === (t = y.searchQuery) || void 0 === t ? void 0 : t.trim()), B = l || i, G = 0 === f.length && !l && (!F || b >= 0), q = {
					width: R ? `${R}px` : "inherit",
					marginTop: "7px",
					overflow: "auto"
				};
				m && (q.zIndex = H.g), Object(r.useEffect)(() => {
					N(n)
				}, [n]), Object(r.useLayoutEffect)(() => {
					if (!i && d && document.getElementById(de)) {
						const e = Q();
						M(e), o.forEach((t, n) => {
							e[n] && A((e, n) => Object(x.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: k.a.Typeahead
							}))
						})
					}
				}, [i, d, A]);
				const Q = () => {
					const e = new Array(o.length).fill(!1);
					return o.forEach((t, n) => {
						if (t.id) {
							const r = document.getElementById(`${ie}-${t.id}`),
								s = document.getElementById(de);
							if (r && s) {
								const t = r.getBoundingClientRect(),
									a = s.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[n] = !0)
							}
						}
					}), e
				};
				return s.a.createElement(ue, {
					className: Object(c.a)(T.a.bodyBackgroundColor, T.a.bodyTextColor, T.a.borderTop1Line, T.a.sdListContainer),
					id: de,
					isFixed: m,
					isOpen: d,
					isOverlay: v,
					tooltipId: ie,
					noFocus: !0,
					style: q,
					onDropdownMounted: () => {
						if (!i && o.length > 0) {
							const e = Q();
							M(e), o.forEach((t, n) => {
								e[n] && A((e, n) => Object(x.v)({
									state: n(),
									trendingSearch: t,
									telemetrySource: k.a.Typeahead,
									offset: p.length
								}))
							})
						}
					},
					onScroll: () => {
						const e = Q();
						o.forEach((t, n) => {
							L[n] || !e[n] || t.post && t.post.isSponsored || A((e, n) => Object(x.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: k.a.Typeahead,
								offset: p.length
							}))
						}), M(e)
					}
				}, G && s.a.createElement(s.a.Fragment, null, p.map((e, t) => s.a.createElement(D, {
					searchOriginPage: g,
					activeTooltipId: C,
					focusedItem: u[b],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: O,
					onRemoveRecentSearch: I,
					onSendSearchClickRecentEvent: S,
					onSetRecentSearch: w,
					onUpdateSearchQuery: j,
					recentSearch: e,
					toggleTooltip: P,
					nightmode: h,
					onCloseDropdown: _
				})), !i && o.length ? s.a.createElement("div", {
					className: Object(c.a)(T.a.labelsFont, T.a.dropdownPadding, T.a.metaTextColor, T.a.titlePadding, !!p.length && T.a.borderTop4Line)
				}, oe._("Trending today", null, {
					hk: "3nAMpY"
				})) : null, o.map(e => s.a.createElement(U, {
					id: `${ie}-${e.id}`,
					key: e.id,
					focusedItem: u[b],
					searchOriginPage: g,
					fireAdPixelsOfType: E,
					onCloseDropdown: _,
					onSetRecentSearch: w,
					onUpdateSearchQuery: j,
					trendingItem: e
				}))), B && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(c.a)(T.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(T.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(T.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(T.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(T.a.loadingItem)
				})), F && s.a.createElement(s.a.Fragment, null, !l && s.a.createElement(pe, e), s.a.createElement(ae, {
					className: Object(c.a)(T.a.borderTop4Line, T.a.triggerItem),
					key: y.searchQuery,
					searchOriginPage: g,
					searchItem: y,
					position: f.length,
					onTriggerSearch: _
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
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/constants/comments.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/selectors/comments.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				b = n("./node_modules/reselect/es/index.js"),
				h = n("./src/lib/cache/index.ts"),
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
					const n = Object(f.k)(e),
						r = Object(y.a)(t.postId),
						s = Object(p.G)(e, t),
						a = Object(u.o)(e, {
							...t,
							commentsPageKey: r
						}),
						o = Object(u.k)(e, {
							...t,
							commentsPageKey: r
						}).reduce((t, n) => {
							var r;
							const s = Object(u.l)(e, {
								commentLink: n
							});
							return n.type !== d.a.Comment && 0 !== (null === (r = a[n.id]) || void 0 === r ? void 0 : r.depth) || t.push(s), t
						}, []).sort((e, t) => t.score - e.score).slice(0, 5);
					return (null == n ? void 0 : n.id) === s.authorId || !!o.find(e => e.authorId === (null == n ? void 0 : n.id))
				},
				I = e => {
					let t = Object(h.b)(O);
					const n = Object.entries(t || {});
					n.length >= 99 && (t = n.sort((e, t) => {
						let [, n] = e, [, r] = t;
						return r - n
					}).splice(0, 99).reduce((e, t) => {
						let [n, r] = t;
						return e[n] = r, e
					}, {})), Object(h.d)(O, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				S = (e, t) => {
					var n;
					if (!Object(f.Q)(e)) return !1;
					if (null === (n = Object(h.b)(O)) || void 0 === n ? void 0 : n[t.postId]) return !1;
					const r = Object(p.G)(e, t),
						s = Object(p.V)(e, {
							...t,
							disallowProfile: !0
						});
					if ((null == s ? void 0 : s.type) !== l.f.Public || s.isNSFW || s.isQuarantined || (null == r ? void 0 : r.isNSFW) || (null == r ? void 0 : r.source)) return !1;
					const a = E.find(e => {
						let {
							low: t,
							high: n
						} = e;
						return n >= s.subscribers && s.subscribers > t
					});
					return !(!a || !r.numComments || a.threshold > r.numComments) && !!_(e, t)
				},
				T = () => Object(b.c)({
					shouldLoadCTA: S
				}),
				w = Object(i.b)(T),
				D = e => {
					let {
						shouldLoadCTA: t,
						postId: n,
						sendEvent: r
					} = e;
					const [s, a] = Object(o.useState)(!1);
					return s || !t ? null : c.a.createElement(v, {
						onClose: () => {
							I(n), a(!0), r(Object(g.b)(n))
						},
						postId: n
					})
				},
				j = Object(o.memo)(w(Object(m.c)(D)))
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
				o = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.jb.POST
			}), l = async (e, t, n) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.jb.POST
			}), u = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.jb.POST
			}), p = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.jb.POST
			}), f = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				endpoint: Object(i.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: s.jb.GET,
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
				o = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				d = n("./src/reddit/constants/headers.ts"),
				l = n("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				u = n("./src/redditGQL/types.ts");
			const p = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				f = e => Object(a.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.GET
				}),
				b = async (e, t) => Object(a.a)(Object(c.a)(t, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), h = (e, t) => {
					const n = {
						channels: t
					};
					return Object(o.a)(e, {
						...i,
						variables: {
							input: n
						}
					})
				}, y = e => Object(o.a)(e, {
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
				return o
			}));
			var r, s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/CrowdControlLevelInfo.json");
			! function(e) {
				e.Off = "OFF", e.Lenient = "LENIENT", e.Medium = "MEDIUM", e.Strict = "STRICT"
			}(r || (r = {}));
			const o = (e, t) => Object(s.a)(e, {
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
				return o
			})), n.d(t, "a", (function() {
				return c
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
					o = await a;
				if (o.ok) {
					const e = {},
						t = {},
						n = o.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						t[r] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...o,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return o
			}
			async function o(e, t, n) {
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

			function c(e, t, n) {
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
				return o
			})), n.d(t, "c", (function() {
				return c
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

			function o(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function c(e, t) {
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
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts");
			const c = (e, t) => Object(s.a)(Object(a.a)(e, [o.a]), {
				method: r.jb.GET,
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
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === r.a.SELF || e.thumbnail.url === r.a.NSFW || e.media && Object(s.E)(e.media) || t)
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
		"./src/reddit/helpers/getSearchUrl/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/search/index.ts"),
				a = n("./src/reddit/constants/parameters.ts"),
				o = n("./src/reddit/models/Search/index.ts");

			function c(e) {
				let t, {
					subreddit: n,
					multireddit: c,
					searchItem: i,
					searchOptions: d,
					shouldSearchSubreddit: l,
					shouldSearchMultireddit: u,
					includeNsfwResults: p
				} = e;
				const f = [];
				if (i.isTypeaheadSuggestion) t = `/${i.isProfile?i.searchQuery.replace("u/","user/"):i.searchQuery}`;
				else {
					if (f.push(`${a.p}=${Object(s.b)(i.rawQuery||i.searchQuery)}`), t = "/search/", i.section !== o.c.trending && i.section !== o.c.recent || d && d.source && f.push(`source=${d.source}`), n && l ? (t = `/r/${n.name}${t}`, f.push(`${a.s}=1`), f.push(`${a.A}=${n.isNSFW?"1":""}`)) : !n && i.subredditOrProfileRestrictedName && (t = `/${i.subredditOrProfileRestrictedName}${t}`, f.push(`${a.s}=1`)), c && u) {
						t = `/user/${c.url.split("/")[2]}/m/${c.name}${t}`, f.push(`${a.s}=1`), f.push(`${a.A}=${c.isNSFW?"1":""}`), f.push(`${a.i}=1`)
					}
					p && f.push(`${a.h}=1`), (null == d ? void 0 : d.t) && d.t !== r.ic.ALL && f.push(`${a.C}=${d.t}`), (null == d ? void 0 : d.sort) && f.push(`${a.y}=${d.sort}`), (null == d ? void 0 : d.type) && (d.type.includes(r.cc.Posts) || f.push(`${a.D}=${d.type[0]}`))
				}
				return {
					url: t,
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
				o = "https://www.paypalobjects.com/api/checkout.js",
				c = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${r.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function i(e, t) {
				return t() ? Promise.resolve() : new Promise((n, r) => s.a.write(() => {
					t() && n();
					const s = document.head;
					let a = s.querySelector(`script[src='${e}']`);

					function o() {
						this.removeEventListener("load", o), this.removeEventListener("error", c), n()
					}

					function c() {
						this.removeEventListener("load", o), this.removeEventListener("error", c), a && s.removeChild(a), r()
					}
					a || ((a = document.createElement("script")).src = e, s.appendChild(a)), a.addEventListener("load", o), a.addEventListener("error", c)
				}))
			}

			function d() {
				return i(a, () => "undefined" != typeof Stripe)
			}

			function l() {
				return i(o, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(c).map(e => {
					const t = "__" + e;
					return i(c[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/onBeforeRequestFactory/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				o = n("./src/lib/addQueryParams/index.ts"),
				c = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/subreddit.ts"));
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
							o = a && a.urlParams.subredditName,
							i = s || o || "",
							d = Object(c.G)(e, i);
						d && e.structuredStyles.models[d] || r.add("structuredStyles"), e.user.prefs.subreddit[d] || r.add("prefsSubreddit")
					}
					return [...r].join(",")
				},
				b = n("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const n = s.a.parse(t.endpoint, !0),
					{
						host: r,
						protocol: c
					} = n;
				if (`${c}//${r}` === a.a.gatewayUrl) {
					const r = {},
						s = e.getState();
					Object(b.kb)(s) && (r.allow_over18 = 1), Object(b.o)(s) && (r.gated_optin = 1), Object(b.nb)(s) && (r.quarantine_optin = 1), r.include = f(e.getState(), n, t), t.endpoint = Object(o.a)(t.endpoint, r)
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
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.I.NO_STRIPE_SUBSCRIPTION:
							case r.I.USER_DOESNT_EXIST:
							case r.I.USER_REQUIRED_ERROR:
							case r.I.VALIDATION_ERROR:
								return e;
							case r.I.NO_USER:
							case r.I.NO_TEXT:
							case r.I.NO_URL:
								return r.I.VALIDATION_ERROR;
							case r.I.CREDIT_CARD_FAILURE:
							case r.I.CREDIT_CARD_FAILURE_GENERIC:
								return r.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.I.VALIDATION_ERROR
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
				o = e => {
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
					...s.n(e),
					listing: s.y(e, t),
					subreddit: s.ib(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
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
				return g
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "x", (function() {
				return D
			})), n.d(t, "u", (function() {
				return j
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "v", (function() {
				return P
			})), n.d(t, "w", (function() {
				return R
			}));
			var r = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...s.n(e),
					screen: s.ab(e),
					subreddit: s.ib(e),
					userSubreddit: s.sb(e)
				}),
				o = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.q)(e)
				}),
				c = () => e => ({
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
					scheduledPost: o(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...a(t),
					scheduledPost: o(e)
				}),
				y = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...a(e)
				}),
				g = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...a(e)
				}),
				m = () => e => ({
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
				O = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				_ = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : O[e],
					...a(t)
				}),
				I = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...a(e)
				}),
				S = (e, t, n) => o => ({
					source: "post",
					action: "click",
					noun: Object(r.m)(e),
					...a(o),
					actionInfo: s.d(o, {
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
				w = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...a(e)
				}),
				D = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...a(e)
				}),
				j = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...a(e),
					scheduledPost: o(t)
				}),
				A = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...a(e)
				}),
				C = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...a(e),
					scheduledPost: o(t)
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
						scheduledPost: o(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/subredditForking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "click",
					...r.n(e),
					actionInfo: r.d(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "dismiss",
					...r.n(e),
					actionInfo: r.d(e)
				}),
				o = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...r.n(e),
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
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
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
				o = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				c = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(c.a.circle, e.className),
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
				return o
			})), n.d(t, "d", (function() {
				return c
			}));
			var r, s, a = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const o = {
					[r.Loyalty]: a.a.First,
					[r.Achievement]: a.a.Second,
					[r.Cosmetic]: void 0
				},
				c = e => e === a.a.First ? r.Loyalty : e === a.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/ChatSettingsPage/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Unknown = "unknown", e.Toggle = "BOOLEAN"
				}(r || (r = {}));
			const s = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return e && Array.isArray(e) && e.length ? e.reduce((e, s) => {
						if (s && s.id && s.type && s.title && s.hasOwnProperty("state")) switch (s.type) {
							case r.Toggle:
								e.push({
									settingType: r.Toggle,
									settingId: s.id,
									subredditId: t,
									description: s.description,
									descriptionUrl: s.descriptionUrl,
									groupName: s.groupName,
									isEditable: !n && s.isEditable,
									state: "true" === String(s.state).toLowerCase(),
									title: s.title
								});
								break;
							default:
								e.push({
									settingType: r.Unknown,
									settingId: s.id,
									subredditId: t,
									description: s.description,
									descriptionUrl: s.descriptionUrl,
									groupName: s.groupName,
									isEditable: !n && s.isEditable,
									state: s.state,
									title: s.title
								})
						}
						return e
					}, []) : []
				},
				a = e => e.reduce((e, t) => (t.isEditable && e.push({
					id: t.settingId,
					state: String(t.state)
				}), e), [])
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
				return o
			})), n.d(t, "e", (function() {
				return c
			}));
			const r = 24,
				s = 64e3,
				a = 128,
				o = 128,
				c = (e, t, n, r) => ({
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
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			const r = "new_community_setup",
				s = "ncp_v3_module",
				a = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var o, c, i;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(o || (o = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(c || (c = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(i || (i = {}))
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return o
			})), n.d(t, "e", (function() {
				return c
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
				return g
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "q", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				a = n("./src/reddit/models/User/index.ts");
			const o = "scheduledposts";
			var c, i, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(c || (c = {})),
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
			const g = e => b[y[e]],
				m = e => y[b[e]],
				v = e => h[b[e]],
				E = e => b[h[e]],
				O = e => y[h[e]];
			var _;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(_ || (_ = {}));
			const I = e => {
					switch (e) {
						case _.Hourly:
						case _.Daily:
						case _.Weekly:
						case _.Monthly:
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
				w = e => "frequency" in e && !!e.frequency
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
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
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
						(a = e.placement ? e.placement === c.a.First ? r[i.a.Loyalty][s] : r[i.a.Achievement][s] : l(e) ? r[i.a.Cosmetic][i.c.MyBadges][s] : r[i.a.Cosmetic][i.c.Gallery][s]) && (l(e) ? n.has(e.id) && a.unlocked.push(e) : t.has(e.id) || a.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(o.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function f(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(p).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(o.b)(r, s)
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
			var o = function() {
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
			var c = function() {
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
					loaded: o,
					pending: c
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
								r[Object(T.h)(e.name)] = e.id
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
				return uw
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
				o = n("./src/reddit/actions/authorFlair.ts"),
				c = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
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
						case o.a:
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
						case c.c:
							return {
								id: b.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
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
						case y.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
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
				O = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/apiRequestState.ts"));
			const _ = {};
			var I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case O.d:
						case O.a:
						case O.b: {
							const n = t.payload;
							return {
								...e,
								[n.apiRequestId]: n
							}
						}
						case O.c: {
							const n = t.payload;
							if (!(n in e)) return e;
							if (1 === Object.keys(e).length) return _;
							const r = {
								...e
							};
							return delete r[n], r
						}
						default:
							return e
					}
				},
				S = n("./node_modules/redux/es/redux.js"),
				T = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.a:
						return t.payload && t.payload.error || null;
					case T.b:
					case T.c:
						return null;
					default:
						return e
				}
			};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.c:
							return !0;
						case T.a:
						case T.b:
							return !1;
						default:
							return e
					}
				},
				j = Object(S.c)({
					error: w,
					pending: D
				});
			const A = {};
			var C = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.d:
						case T.b: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case T.c:
						case T.a:
						default:
							return e
					}
				},
				P = Object(S.c)({
					api: j,
					badges: C
				});
			var R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.a:
							return t.payload;
						default:
							return e
					}
				},
				N = n("./node_modules/icepick/icepick.js"),
				L = n("./node_modules/lodash/mergeWith.js"),
				k = n.n(L),
				x = n("./src/reddit/actions/comment/constants.ts"),
				U = n("./src/reddit/actions/comment/websocket/constants.ts"),
				M = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				F = n("./src/reddit/actions/modQueue/constants.ts"),
				B = n("./src/reddit/actions/pages/constants.ts"),
				G = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				q = n("./src/reddit/actions/pages/profilePosts.ts"),
				H = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				Q = n("./src/reddit/actions/pages/search/index.ts"),
				W = n("./src/reddit/actions/pages/subreddit.ts"),
				V = n("./src/reddit/actions/profileConversations.ts"),
				Y = n("./src/reddit/actions/subreddit.ts"),
				K = n("./src/reddit/actions/userFlair/constants.ts"),
				$ = n("./src/reddit/models/User/index.ts");
			const z = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.b:
					case U.c: {
						const n = t.payload,
							{
								authorFlair: r
							} = n;
						if (r) {
							return k()({
								...e
							}, r, (e, t, n) => {
								if ("richtext" === n) return t
							})
						}
						return e
					}
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case Q.c: {
						const {
							authorFlair: n
						} = t.payload;
						if (n) {
							return Object(N.merge)(e, n)
						}
						return e
					}
					case x.y:
					case W.SUBREDDIT_LOADED:
					case B.f:
					case G.b:
					case G.e:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case V.e:
					case Y.i:
						return J(e, t.payload);
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
						return J(e, t.payload.response);
					case K.r: {
						const {
							subredditId: n,
							userName: r,
							applied: s,
							displaySettings: {
								isUserEnabled: a
							}
						} = t.payload;
						return Object(N.setIn)(e, [n, r], a ? s : null)
					}
					case M.h:
					case M.b: {
						const {
							subredditId: n,
							userName: r,
							applied: s
						} = t.payload;
						return e[n] && e[n][r] ? Object(N.setIn)(e, [n, r], s) : e
					}
					case K.a: {
						const {
							subredditId: n,
							userName: r,
							applied: s,
							displaySettings: {
								isEnabled: a
							}
						} = t.payload;
						return Object(N.setIn)(e, [n, r], a ? s : null)
					}
					default:
						return e
				}
			};
			const J = (e, t) => {
				let {
					account: n,
					authorFlair: r,
					userFlair: s
				} = t;
				const a = Object(N.merge)(e, r);
				if (!s || !n) return a;
				const o = Object.keys(s)[0];
				if (!o) return a;
				const c = s[o],
					i = Object($.e)(n),
					d = c.applied,
					l = c.displaySettings && c.displaySettings.isUserEnabled;
				return i && d && l ? Object(N.merge)(a, {
					[o]: {
						[i]: d
					}
				}) : a
			};
			var Z = Object(S.c)({
					inContext: R,
					models: X
				}),
				ee = n("./src/reddit/actions/gold/constants.ts");
			const te = {};
			var ne = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.d: {
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
				re = n("./src/reddit/actions/reactionAwards/constants.ts");
			const se = {};
			var ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.b: {
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
			const oe = {},
				ce = (e, t, n) => ({
					...e,
					[t]: n
				});
			var ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case re.e:
						case re.h: {
							const {
								awardId: n,
								commentId: r
							} = t.payload;
							return {
								...e,
								[r]: {
									...ce(e[r] || {}, n, !0)
								}
							}
						}
						case re.f:
						case re.d:
						case re.i:
						case re.g: {
							const {
								awardId: n,
								commentId: r
							} = t.payload;
							return {
								...e,
								[r]: {
									...ce(e[r] || {}, n, !1)
								}
							}
						}
						default:
							return e
					}
				},
				de = Object(S.c)({
					availability: ae,
					pending: ie
				});
			var le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.h:
					case ee.i:
						return null;
					case ee.g:
						return t.payload;
					default:
						return e
				}
			};
			var ue = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b:
						case ee.i:
						case ee.g:
							return !1;
						case ee.h:
							return !0;
						default:
							return e
					}
				},
				pe = Object(S.c)({
					error: le,
					pending: ue
				}),
				fe = Object(S.c)({
					api: pe
				});
			var be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.H:
					case ee.G:
						return null;
					case ee.F:
						return t.payload;
					default:
						return e
				}
			};
			const he = {};
			var ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.H: {
							const {
								subredditOrProfileId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ee.d:
						case ee.G:
						case ee.L:
						case ee.F: {
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
				ge = Object(S.c)({
					error: be,
					pending: ye
				});
			const me = {};
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.L: {
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
					case ee.l: {
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
					case ee.o: {
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
			const Ee = {};
			var Oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.G: {
							const {
								awards: n,
								subredditOrProfileId: r
							} = t.payload, s = n.map(e => e.id);
							return {
								...e,
								[r]: s
							}
						}
						case ee.i: {
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
				_e = Object(S.c)({
					api: ge,
					availability: ve,
					order: Oe
				}),
				Ie = n("./node_modules/lodash/merge.js"),
				Se = n.n(Ie);
			const Te = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const n = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${n}`
			};
			var we = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : Te(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : Te(e.endsAt)), e),
				De = n("./src/reddit/models/Gold/Award.ts"),
				je = n("./src/reddit/actions/discoveryUnit.ts"),
				Ae = n("./src/reddit/actions/frontpage/constants.ts"),
				Ce = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Pe = n("./src/reddit/actions/multireddit/constants.ts"),
				Re = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				Ne = n("./src/reddit/actions/pages/modListing/constants.ts"),
				Le = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				ke = n("./src/reddit/actions/pages/postCreation.ts"),
				xe = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Ue = n("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Me = n("./src/reddit/actions/recommendations.ts"),
				Fe = n("./src/reddit/actions/search.ts");
			const Be = De.o,
				Ge = (e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				})([we]),
				qe = (e, t) => {
					const n = t.reduce((e, t) => (e[t.id] = Ge(t), e), {});
					return Se()({
						...e
					}, n)
				};
			var He = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case re.b: {
						const {
							availableAwards: n = []
						} = t.payload;
						return qe({
							...e
						}, n)
					}
					case ee.G: {
						const {
							awards: n
						} = t.payload;
						return qe(e, n)
					}
					case ee.L: {
						const n = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...Ge(t),
							isEnabled: !0
						}, e), {});
						return Se()({
							...e
						}, n)
					}
					case ee.b: {
						const {
							awards: n
						} = t.payload, r = n.reduce((e, t) => (e[t.award.id] = Ge(t.award), e), {});
						return Se()({
							...e
						}, r)
					}
					case ee.i: {
						const {
							award: n
						} = t.payload;
						return n && n.id ? e[n.id] ? Se()({
							...e
						}, {
							[n.id]: Ge(n)
						}) : {
							...e,
							[n.id]: Ge(n)
						} : e
					}
					case ee.hb: {
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
					case B.b:
					case x.y:
					case U.b:
					case Re.b:
					case Re.f:
					case ke.PAGE_LOADED:
					case je.e:
					case Ae.g:
					case Ne.e:
					case Ne.h:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case Pe.r:
					case B.f:
					case Ae.c:
					case Le.b:
					case Q.c:
					case G.b:
					case G.e:
					case V.b:
					case V.e:
					case xe.b:
					case xe.e:
					case Ue.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case H.c:
					case H.e:
					case H.i:
					case H.g:
					case Me.b:
					case Fe.e:
					case Y.i:
					case W.SUBREDDIT_LOADED: {
						const n = {},
							r = t.payload.posts || [],
							s = t.payload.comments || [];
						for (const e in r) {
							const t = r[e].allAwardings || [];
							for (const e of t) n[e.id] = Ge(Object(De.j)(e))
						}
						for (const e in s) {
							const t = s[e],
								{
									associatedAward: r,
									allAwardings: a = []
								} = t;
							for (const e of a) n[e.id] = Ge(Object(De.j)(e));
							r && (n[r.id] = Ge(r))
						}
						return Object.keys(n).forEach(t => {
							var r;
							0 === (null === (r = e[t]) || void 0 === r ? void 0 : r.coinPrice) && delete n[t]
						}), Se()({
							...e
						}, n)
					}
					case ee.tb: {
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
						}), Se()({
							...e
						}, n)
					}
					case Ce.s: {
						const {
							freeAwardEvent: r
						} = t.payload;
						return qe(e, (null === (n = null == r ? void 0 : r.freeAwards) || void 0 === n ? void 0 : n.awards) || [])
					}
					case Ce.h: {
						const {
							awards: n
						} = t.payload;
						return qe(e, n || [])
					}
					default:
						return e
				}
			};
			const Qe = {};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.c: {
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
						case ee.b:
						case ee.a: {
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
				Ve = Object(S.c)({
					pending: We
				});
			const Ye = {};
			var Ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.b: {
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
				$e = Object(S.c)({
					api: Ve,
					order: Ke
				});
			const ze = {};
			var Xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ze,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.b: {
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
				Je = Object(S.c)({
					order: Xe
				}),
				Ze = Object(S.c)({
					blacklist: ne,
					create: fe,
					manageable: _e,
					models: He,
					sortedUsable: $e,
					tags: Je,
					chatReactions: de
				}),
				et = n("./src/reddit/actions/badge.ts");
			const tt = {};
			var nt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case et.d:
					case et.e: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case et.c: {
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
			const rt = {};
			var st = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case et.d: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case et.e:
						case et.c: {
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
				at = Object(S.c)({
					error: nt,
					pending: st
				});
			const ot = {};
			var ct = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case et.g:
					case et.h: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case et.f: {
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
			const it = {};
			var dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case et.g: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case et.h:
						case et.f: {
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
				lt = Object(S.c)({
					error: ct,
					pending: dt
				}),
				ut = Object(S.c)({
					subreddit: at,
					user: lt
				});
			const pt = {};
			var ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i:
						case et.e:
						case et.h:
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
				bt = Object(S.c)({
					api: ut,
					models: ft
				}),
				ht = n("./src/reddit/actions/blockedRedditors.ts");
			const yt = {
				message: ""
			};
			var gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ht.c:
					case ht.d:
						return e;
					case ht.b:
						return t.payload;
					default:
						return e
				}
			};
			var mt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ht.d:
							return !0;
						case ht.c:
						case ht.b:
							return !1;
						default:
							return e
					}
				},
				vt = Object(S.c)({
					error: gt,
					pending: mt
				});
			const Et = {
				ids: []
			};
			var Ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ht.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case ht.e:
							const n = e.ids.slice();
							return n.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: n
							};
						case ht.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				_t = Object(S.c)({
					api: vt,
					list: Ot
				}),
				It = n("./src/reddit/actions/userBlocks.ts");
			const St = {};
			var Tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case It.f:
					case It.e: {
						const {
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case It.d: {
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
			const wt = {};
			var Dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case It.f: {
							const {
								userId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case It.e:
						case It.d: {
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
				jt = Object(S.c)({
					error: Tt,
					pending: Dt
				}),
				At = Object(S.c)({
					api: jt
				});
			const Ct = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var Pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case W.SUBREDDIT_PENDING:
						case Le.c:
						case Ae.d:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Rt = n("./src/reddit/actions/chat/init.ts");
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rt.a:
							return !0;
						default:
							return e
					}
				},
				Lt = n("./src/lib/omitKey/index.ts"),
				kt = n("./src/reddit/actions/pages/chatSettings.ts");
			const xt = {};
			var Ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kt.b: {
						const {
							subredditId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case kt.a:
					case kt.c:
					case kt.d: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Lt.a)(e, n)
					}
					default:
						return e
				}
			};
			const Mt = {};
			var Ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kt.a:
						case kt.b:
						case kt.c:
						case kt.d: {
							const {
								subredditId: n
							} = t.payload, r = t.type === kt.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Bt = Object(S.c)({
					error: Ut,
					pending: Ft
				}),
				Gt = Object(S.c)({
					fetch: Bt
				});
			const qt = {};
			var Ht, Qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kt.a:
						case kt.d: {
							const {
								subredditId: n,
								chatSettings: r
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
				Wt = Object(S.c)({
					api: Gt,
					models: Qt
				}),
				Vt = n("./src/lib/constants/index.ts"),
				Yt = n("./src/lib/makeActionCreator/index.ts"),
				Kt = (n("./src/chat/actions/message/unreadCount.ts"), n("./src/chat/endpoints/sendbird/index.ts"), n("./src/reddit/actions/tabBadging.ts"));
			n("./src/reddit/selectors/chat.ts"), n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Ht || (Ht = {}));
			const {
				SYNC: $t,
				REQUEST_FAILED: zt,
				REQUEST_PENDING: Xt,
				REQUEST_SUCCESS: Jt
			} = Ht;
			Object(Yt.a)($t), Object(Yt.a)(zt), Object(Yt.a)(Xt), Object(Yt.a)(Jt);
			Vt.kb;
			const Zt = {
				apiError: null
			};
			var en = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ht.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...Zt,
							apiError: e
						}
					}
					case Ht.REQUEST_SUCCESS:
					case Ht.REQUEST_PENDING:
						return Zt;
					default:
						return e
				}
			};
			var tn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ht.REQUEST_PENDING:
							return !0;
						case Ht.REQUEST_FAILED:
						case Ht.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				nn = Object(S.c)({
					error: en,
					pending: tn
				});
			const rn = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var sn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ht.SYNC:
						case Ht.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				an = Object(S.c)({
					api: nn,
					count: sn
				}),
				on = Object(S.c)({
					isInited: Nt,
					subredditSettingsPage: Wt,
					unread: an
				}),
				cn = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			var dn = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cn.a:
							return !1;
						case cn.b:
							return !0;
						default:
							return e
					}
				},
				ln = n("./src/reddit/actions/communityFlairs/constants.ts");
			const un = {};
			var pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : un,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ln.a: {
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
				fn = n("./src/reddit/actions/connection/constants.ts");
			const bn = {
				showBanner: !1,
				online: !0
			};
			var hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fn.a:
							return {
								online: !1, showBanner: !0
							};
						case fn.b:
							return {
								online: !0, showBanner: !0
							};
						case fn.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				yn = n("./src/reddit/actions/contentControls/constants.ts");
			const gn = {};
			var mn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yn.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case yn.c:
					case yn.b: {
						const {
							subredditName: n
						} = t.payload;
						return Object(Lt.a)(e, n)
					}
					default:
						return e
				}
			};
			const vn = {};
			var En = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yn.c:
						case yn.a:
						case yn.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === yn.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				On = Object(S.c)({
					error: mn,
					pending: En
				}),
				_n = Object(S.c)({
					fetch: On
				}),
				In = n("./src/lib/safeGet/index.ts");
			const Sn = {};
			var Tn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yn.b: {
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
						case yn.d: {
							const {
								subredditName: n,
								partialUpdates: r
							} = t.payload, s = Object(In.a)(e, n);
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
				wn = Object(S.c)({
					api: _n,
					models: Tn
				}),
				Dn = n("./src/reddit/actions/contentGate.ts"),
				jn = n("./src/reddit/actions/preferences.ts");
			const An = {};
			var Cn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : An,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dn.b: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(In.a)(e, n)) {
								const t = {
									[n]: {
										goldSubreddit: !0
									}
								};
								return k()({
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
					case Dn.c: {
						const {
							subredditDescription: n,
							subredditName: r,
							isContributorRequestsDisabled: s,
							isContributorRequestTimestamp: a,
							subredditId: o
						} = t.payload;
						if (r) {
							if (Object(In.a)(e, r)) {
								const t = {
									[r]: {
										privateSubreddit: !0,
										subredditDescription: n,
										isContributorRequestsDisabled: s,
										isContributorRequestTimestamp: a,
										subredditId: o
									}
								};
								return k()({
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
									subredditId: o
								}
							}
						}
						return e
					}
					case Dn.g: {
						const {
							subredditName: n,
							quarantineRequiresEmail: r,
							quarantineMessage: s,
							quarantineMessageHtml: a,
							quarantineMessageRTJson: o
						} = t.payload;
						return n ? {
							...e,
							[n]: {
								...Object(In.a)(e, n) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: r,
								quarantineMessage: s,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: o
							}
						} : e
					}
					case Dn.a: {
						const {
							interstitialWarningMessage: n,
							interstitialWarningMessageHtml: r,
							interstitialWarningMessageRTJson: s,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(In.a)(e, a) || {},
								interstitialWarningMessage: n,
								interstitialWarningMessageHtml: r,
								interstitialWarningMessageRTJson: s
							}
						} : e
					}
					case Dn.k: {
						const {
							subredditName: n,
							banMessage: r
						} = t.payload;
						if (n) {
							if (Object(In.a)(e, n)) {
								const t = {
									[n]: {
										subredditBanned: !0,
										subredditBanMessage: r
									}
								};
								return k()({
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
					case Dn.l: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(In.a)(e, n)) {
								const t = {
									[n]: {
										subredditBlockedForLegalReason: !0
									}
								};
								return k()({
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
					case Dn.m: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(In.a)(e, n)) {
								const t = {
									[n]: {
										subredditDoesNotExist: !0
									}
								};
								return k()({
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
					case Dn.d:
					case Dn.e:
					case Dn.f: {
						const {
							profileName: n
						} = t.payload, r = Vt.kc + n.toLocaleLowerCase(), s = Object(In.a)(e, r) || {}, a = {
							profileDeleted: t.type === Dn.e,
							profileSuspended: t.type === Dn.f,
							profileBlockedForLegalReason: t.type === Dn.d
						};
						return {
							...e,
							[r]: {
								...s,
								...a
							}
						}
					}
					case jn.q:
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
			const Pn = {};
			var Rn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x.y:
						case B.b:
						case B.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Nn = Object(S.c)({
					models: Rn
				}),
				Ln = n("./src/reddit/actions/cooldownTime.ts");
			var kn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ln.b:
					case Ln.c:
						return null;
					case Ln.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var xn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ln.b:
							return !0;
						case Ln.a:
						case Ln.c:
							return !1;
						default:
							return e
					}
				},
				Un = Object(S.c)({
					error: kn,
					pending: xn
				});
			var Mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ln.d: {
							const {
								expiresAt: n
							} = t.payload;
							return "number" == typeof n && n !== e ? n : e
						}
						default:
							return e
					}
				},
				Fn = Object(S.c)({
					api: Un,
					expiresAt: Mn
				}),
				Bn = n("./src/reddit/actions/postCollection/constants.ts");
			var Gn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
					case Bn.d:
					case Bn.c:
					case Bn.s:
					case Bn.r:
						return null;
					case Bn.b:
					case Bn.n:
						return t.payload;
					default:
						return e
				}
			};
			var qn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bn.c:
						case Bn.r:
							return !0;
						case Bn.d:
						case Bn.b:
						case Bn.s:
						case Bn.n:
							return !1;
						default:
							return e
					}
				},
				Hn = Object(S.c)({
					error: Gn,
					pending: qn
				}),
				Qn = Object(S.c)({
					createOrUpdate: Hn
				}),
				Wn = n("./src/reddit/actions/postDraft.ts");
			const Vn = {};
			var Yn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wn.c:
					case Wn.b: {
						const {
							draftId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Wn.a: {
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
			const Kn = {};
			var $n = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wn.b: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Wn.c:
						case Wn.a: {
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
				zn = Object(S.c)({
					error: Yn,
					pending: $n
				});
			var Xn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wn.d:
						return t.payload;
					case Wn.f:
					case Wn.e:
						return null;
					default:
						return e
				}
			};
			var Jn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wn.f:
							return !0;
						case Wn.e:
						case Wn.d:
							return !1;
						default:
							return e
					}
				},
				Zn = Object(S.c)({
					error: Xn,
					pending: Jn
				});
			const er = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var tr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : er,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wn.l:
					case Wn.j:
						return er;
					case Wn.i: {
						const e = t.payload;
						return {
							...er,
							apiError: e
						}
					}
					case Wn.m: {
						const e = t.payload;
						return {
							...er,
							validationError: e
						}
					}
					case Wn.k: {
						const e = t.payload;
						return {
							...er,
							submitValidationError: e
						}
					}
					case Wn.h:
						return {
							...er, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var nr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wn.j:
							return !0;
						case Wn.l:
						case Wn.i:
						case Wn.m:
						case Wn.k:
						case Wn.h:
							return !1;
						default:
							return e
					}
				},
				rr = Object(S.c)({
					error: tr,
					pending: nr
				}),
				sr = Object(S.c)({
					deleteDraft: zn,
					listing: Zn,
					save: rr
				}),
				ar = n("./src/reddit/actions/postCreation/constants.ts");
			const or = {};
			var cr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : or,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.G: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ar.p: {
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
				ir = Object(S.c)({
					pending: cr
				});
			var dr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.u:
					case ar.v:
					case ar.d:
					case ar.e:
					case ar.f:
					case ar.i:
					case ar.j:
					case ar.n:
					case ar.O:
						return null;
					case ar.t:
						return t.payload;
					default:
						return e
				}
			};
			var lr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.u:
							return !0;
						case ar.v:
						case ar.t:
							return !1;
						default:
							return e
					}
				},
				ur = Object(S.c)({
					error: dr,
					pending: lr
				}),
				pr = Object(S.c)({
					converting: ir,
					mediaUpload: ur
				});
			const fr = {};
			var br = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ke.PAGE_LOADED:
					case ke.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case ke.PAGE_FAILED: {
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
			const hr = {};
			var yr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ke.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case ke.PAGE_LOADED: {
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
			const gr = {};
			var mr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ke.PAGE_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ke.PAGE_LOADED:
						case ke.PAGE_FAILED: {
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
				vr = Object(S.c)({
					error: br,
					fetched: yr,
					pending: mr
				}),
				Er = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const Or = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var _r = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Or,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.P:
					case Er.h:
					case Er.k:
					case Er.b:
					case Er.d:
					case ar.w:
					case ar.c:
					case ar.d:
					case ar.e:
					case ar.f:
					case ar.i:
					case ar.j:
					case ar.n:
					case ar.O:
					case ar.E:
						return Or;
					case ar.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? Or : e
					}
					case ar.o: {
						const e = t.payload;
						return {
							...Or,
							apiError: e
						}
					}
					case ar.db: {
						const e = t.payload;
						return {
							...Or,
							validationError: e
						}
					}
					case ar.K:
					case ar.J: {
						const e = t.payload;
						return {
							...Or,
							submitValidationError: e
						}
					}
					case ar.a:
						return {
							...Or, needsCaptcha: !0
						};
					case ar.y:
						return {
							...Or, pollError: t.payload
						};
					default:
						return e
				}
			};
			var Ir = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.w:
							return !0;
						case ar.P:
						case Er.h:
						case ar.o:
						case ar.db:
						case ar.J:
						case ar.K:
						case ar.y:
						case ar.a:
							return !1;
						default:
							return e
					}
				},
				Sr = Object(S.c)({
					error: _r,
					pending: Ir
				});
			var Tr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.x:
					case ar.H:
						return null;
					case ar.m:
						return t.payload;
					default:
						return e
				}
			};
			var wr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.x:
							return !0;
						case ar.m:
						case ar.l:
							return !1;
						default:
							return e
					}
				},
				Dr = Object(S.c)({
					error: Tr,
					pending: wr
				}),
				jr = Object(S.c)({
					submit: Sr,
					update: Dr
				});
			var Ar = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.O:
					case ar.M:
					case ar.N:
						return null;
					default:
						return e
				}
			};
			var Cr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.N:
							return !0;
						case ar.M:
						case ar.O:
							return !1;
						default:
							return e
					}
				},
				Pr = Object(S.c)({
					error: Ar,
					pending: Cr
				}),
				Rr = Object(S.c)({
					change: Pr
				}),
				Nr = Object(S.c)({
					collection: Qn,
					draft: sr,
					editor: pr,
					page: vr,
					post: jr,
					subreddit: Rr
				}),
				Lr = n("./node_modules/lodash/omit.js"),
				kr = n.n(Lr),
				xr = n("./src/reddit/actions/pages/postDraft.ts");
			const Ur = {};
			var Mr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ur,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wn.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Ur
					}
					case Wn.c: {
						const n = e,
							{
								draftId: r
							} = t.payload;
						return kr()(n, r)
					}
					case ar.P: {
						const {
							draftId: n
						} = t.payload;
						return n ? kr()(e, n) : e
					}
					case xr.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Fr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Br = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				Gr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var qr = n("./src/reddit/models/PostDraft/index.ts");
			var Hr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.d:
							return t.payload || "";
						case ar.E:
							return "";
						case l.b: {
							if (Fr(t) !== Vt.Nb.POST_CREATION) return "";
							const n = Br(t);
							return n && n.url ? n.url || "" : e
						}
						case Wn.g: {
							const e = t.payload;
							return e.kind === qr.b.Link && e.body || ""
						}
						case Er.b:
						case Er.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Qr = n("./src/reddit/models/PostCreationForm/index.ts"),
				Wr = n("./src/reddit/models/ScheduledPost/index.ts");
			const Vr = e => e ? e.replace(/\+/g, " ") : "";
			var Yr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.e:
						return t.payload || "";
					case ar.E:
					case ar.I:
						return "";
					case ar.Q:
						return t.payload.editorMode === Qr.i.MARKDOWN ? t.payload.content || "" : e;
					case l.b: {
						if (Fr(t) !== Vt.Nb.POST_CREATION) return "";
						const n = Br(t);
						return n && n.text ? Vr(n.text) : e
					}
					case Wn.g: {
						const e = t.payload;
						return e.kind === qr.b.Markdown && e.body || ""
					}
					case Er.b:
					case Er.n: {
						const e = t.payload;
						return e.contentType === Wr.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Kr = {
				items: [],
				selectedKey: null
			};
			var $r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.f:
							return t.payload || Kr;
						case ar.E:
							return Kr;
						case l.b:
							return Fr(t) !== Vt.Nb.POST_CREATION ? Kr : e;
						case Wn.g:
							return Kr;
						case Er.b:
						case Er.n:
							return Kr;
						default:
							return e
					}
				},
				zr = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Xr = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Jr = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Zr = zr.a.createInitial;
			var es = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zr(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case ar.E:
							return zr.a.createInitial();
						case ar.Q: {
							const n = t.payload;
							return n.editorMode === Qr.i.RICH_TEXT && n.editorKey === Qr.h.POST_CREATION ? zr.a.createInitial(n.content) : e
						}
						case l.b:
							return Fr(t) !== Vt.Nb.POST_CREATION ? zr.a.createInitial() : e;
						case Wn.g: {
							const e = t.payload;
							return e.kind === qr.b.RichText ? zr.a.createInitial(e.body) : zr.a.createInitial()
						}
						case Er.b:
						case Er.n: {
							const e = t.payload,
								n = Object(Xr.c)(e.mediaAssets);
							return zr.a.createInitial(e.contentType === Wr.a.RTJSON ? Object(Jr.b)(e.body) : void 0, n || void 0)
						}
						default:
							return e
					}
				},
				ts = Object(S.c)({
					link: Hr,
					markdown: Yr,
					media: $r,
					rte: es
				});
			var ns = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.b:
							return t.payload || null;
						case ar.E:
						case Wn.g:
						case Er.b:
						case Er.n:
						case ar.O:
							return null;
						case l.b:
							return Fr(t) === Vt.Nb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				rs = n("./src/reddit/selectors/scheduledPosts/index.ts");
			var ss = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.c:
						return t.payload || null;
					case Er.b:
					case Er.n: {
						const e = t.payload;
						return Object(rs.n)({
							scheduledPost: e
						}) || null
					}
					case ar.E:
						return null;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION ? e : null;
					case Wn.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var as = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.q:
						return t.payload.type || null;
					case Er.b:
					case Er.n:
					case ar.i:
					case ar.E:
					case l.b:
						return null;
					default:
						return e
				}
			};
			var os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.S:
						return t.payload || !1;
					case Er.b:
					case Er.n:
						return "CHAT" === t.payload.discussionType;
					case ar.E:
						return !1;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case Wn.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case ar.E:
						return !1;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case Er.b:
					case Er.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var is = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.U:
						return t.payload || !1;
					case ar.E:
						return !1;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case Wn.g:
						return t.payload.isNSFW || !1;
					case Er.b:
					case Er.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var ds = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.V:
						return t.payload || !1;
					case ar.E:
						return !1;
					case ar.O: {
						const {
							name: n
						} = t.payload;
						return !!n && e
					}
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case Wn.g:
						return t.payload.isOriginalContent || !1;
					case Er.b:
					case Er.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var ls = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.W:
						return t.payload || !1;
					case Er.b:
					case Er.n:
						return !!t.payload.poll;
					case ar.E:
						return !1;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					default:
						return e
				}
			};
			var us = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case ar.E:
						return !1;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case Er.b:
					case Er.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var ps = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Er.b:
					case Er.n:
					case ar.E:
						return !1;
					case Wn.n:
						return t.payload;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case Wn.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.X:
						return t.payload || !1;
					case ar.E:
						return !1;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case Wn.g:
						return t.payload.isSpoiler || !1;
					case Er.b:
					case Er.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var bs = function() {
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
					case ar.i:
					case ar.q:
					case ar.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var hs = function() {
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
					case ar.i:
					case ar.q:
					case ar.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var ys = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.N:
						case ar.O:
							return t.payload;
						case ar.M:
						case l.b:
							return null;
						default:
							return e
					}
				},
				gs = n("./src/reddit/actions/polls.ts");
			var ms = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gs.a:
							return {
								...t.payload
							};
						case Er.b:
						case Er.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case i.h:
						case ar.E:
							return null;
						case l.b:
							return Fr(t) !== Vt.Nb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				vs = n("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				Es = n("./src/reddit/helpers/scheduledPosts/index.ts");
			var Os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r, s, a;
				switch (t.type) {
					case ar.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case ar.E:
					case Wn.g:
					case ar.O:
						return null;
					case l.b:
						if (Fr(t) === Vt.Nb.POST_CREATION) {
							const o = null === (a = (null !== (s = null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.match.queryParams) && void 0 !== s ? s : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (o && Object(Wr.n)(o)) {
								const t = Object(vs.c)();
								return {
									...e,
									...t,
									frequencyOption: o,
									recurrenceInfo: {
										...vs.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(vs.b)(new Date(t.submitDate), o)
									}
								}
							}
							return e
						}
						return null;
					case Er.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case Er.b: {
						const e = t.payload;
						return {
							...Object(Es.h)(e)
						}
					}
					default:
						return e
				}
			};
			var _s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: n,
					payload: r
				} = t;
				switch (n) {
					case ar.Y:
						return r || !1;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case Er.b:
					case Er.n:
					case Wn.g:
						return !1;
					default:
						return e
				}
			};
			var Is = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.g:
						return t.payload || "";
					case l.b:
						return Fr(t) !== Vt.Nb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Ss = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						return Fr(t) !== Vt.Nb.POST_CREATION ? null : e;
					case ar.E:
						return null;
					case Er.b:
					case Er.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Ts = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.E:
						return !0;
					case ar.Z:
						return t.payload;
					case l.b:
						return Fr(t) !== Vt.Nb.POST_CREATION || e;
					case Wn.g:
						return t.payload.sendReplies;
					case Er.b:
					case Er.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var ws = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case ar.E:
					case Wn.g:
					case ar.O:
						return null;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION ? e : null;
					case Er.b:
					case Er.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Ds = Vt.Wb.POST;
			var js = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ds,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.E:
						return Ds;
					case ar.r:
						return Vt.Wb.CROSSPOST;
					case ar.i:
						return t.payload.submissionType || Ds;
					case l.b: {
						if (Fr(t) !== Vt.Nb.POST_CREATION) return Ds;
						const n = Br(t);
						if (!n) return e;
						const {
							title: r = "",
							url: s,
							text: a = "",
							media: o = !1,
							selftext: c = !1,
							type: i = ""
						} = n, d = r && !a && !c;
						return o ? Vt.Wb.MEDIA : void 0 !== s || d ? Vt.Wb.LINK_ONLY : a || c ? Vt.Wb.POST : i === Vt.xb ? Vt.Wb.POLL : e
					}
					case Wn.g: {
						const e = t.payload;
						return qr.a[e.kind]
					}
					case Er.b:
					case Er.n: {
						const e = t.payload;
						return e.poll ? Vt.Wb.POLL : e.url ? Vt.Wb.LINK_ONLY : Vt.Wb.POST
					}
					default:
						return e
				}
			};
			var As = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.ab: {
						const {
							suggestedSort: e
						} = t.payload;
						return e || null
					}
					case ar.E:
					case Wn.g:
					case ar.O:
						return null;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION ? e : null;
					case Er.b:
					case Er.n:
						return t.payload.suggestedCommentSort || null;
					default:
						return e
				}
			};
			const Cs = {
				theme: n("./src/reddit/models/Talk/index.ts").a.PERIWINKLE,
				topics: []
			};
			var Ps = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Rs = n("./src/reddit/models/Poll/index.ts");
			const Ns = e => e ? e.replace(/\+/g, " ") : "",
				Ls = e => `Should ${e||"username"} become the top moderator?`,
				ks = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var xs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.r:
						return t.payload.postTitle || "";
					case ar.j:
						return t.payload || "";
					case ar.D: {
						const {
							title: n
						} = t.payload;
						return e || (n || "")
					}
					case ar.E:
						return "";
					case l.b: {
						if (Fr(t) !== Vt.Nb.POST_CREATION) return "";
						const n = Br(t);
						return n && n.title ? Ns(n.title) : e
					}
					case Wn.g:
						return t.payload.title;
					case ar.q: {
						const {
							oldType: n,
							type: r
						} = t.payload;
						return r === Rs.a.ReplaceTopMod ? Ls("") : r === Rs.a.Spinoff ? ks("") : n === Rs.a.ReplaceTopMod || n === Rs.a.Spinoff ? "" : e
					}
					case i.c: {
						const {
							username: e
						} = t.payload;
						return Ls(e)
					}
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return ks(e)
					}
					case ar.i: {
						const {
							extra: n
						} = t.payload;
						return !n || n.govType !== Rs.a.ReplaceTopMod && n.govType !== Rs.a.Spinoff ? e : ""
					}
					case Er.b:
					case Er.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Us = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Ms = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Us,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.cb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Fs = Object(S.c)({
					body: ts,
					eventSchedule: ns,
					flair: ss,
					govType: as,
					isChatPost: os,
					isContestMode: cs,
					isNSFW: is,
					isOC: ds,
					isPostAsMetaMod: us,
					isPoll: ls,
					isPublicLink: ps,
					isSpoiler: fs,
					newSubreddit: bs,
					newTopMod: hs,
					nextSubreddit: ys,
					polls: ms,
					postSchedule: Os,
					postToTwitter: _s,
					recaptcha: Is,
					scheduledPostId: Ss,
					sendReplies: Ts,
					stickyPosition: ws,
					submissionType: js,
					suggestedSort: As,
					title: xs,
					tournament: Ms,
					talk: Ps
				});
			const Bs = e => e ? e.replace(/\+/g, " ") : "";
			var Gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b: {
						if (Fr(t) !== Vt.Nb.POST_CREATION) return null;
						const n = Br(t);
						return n && n.text && Bs(n.text) ? Qr.i.MARKDOWN : e
					}
					case ar.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case ar.I:
						return null;
					case ar.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Er.b:
					case Er.n:
						return t.payload.contentType === Wr.a.RTJSON ? Qr.i.RICH_TEXT : Qr.i.MARKDOWN;
					default:
						return e
				}
			};
			const qs = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				Hs = (e, t) => {
					const n = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(Qr.w)(t)
					});
					if (!n.length) return e;
					const r = n.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return {
						...e,
						...r
					}
				};
			var Qs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.c:
					case ar.d:
					case ar.e:
						return e[Vt.wb.BODY] ? {
							...e,
							[Vt.wb.BODY]: []
						} : e;
					case ar.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return e[Vt.wb.BODY] && n ? {
							...e,
							[Vt.wb.BODY]: []
						} : e
					}
					case ar.j:
						return e[Vt.wb.TITLE] ? {
							...e,
							[Vt.wb.TITLE]: []
						} : e;
					case ar.L: {
						const n = t.payload;
						return {
							...e,
							[n]: []
						}
					}
					case ar.n: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: []
						} : qs
					}
					case ar.K:
					case ar.J: {
						const n = t.payload;
						return Hs(e, n)
					}
					case l.b:
						return Fr(t) !== Vt.Nb.POST_CREATION ? qs : e;
					default:
						return e
				}
			};
			var Ws = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.b:
					case ar.c:
					case ar.d:
					case ar.e:
					case ar.f:
					case ar.j:
					case ar.i:
					case ar.U:
					case ar.V:
					case ar.X:
					case Wn.n:
					case ar.Z:
					case ar.ab:
						return !0;
					case ar.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					case ar.P:
					case Er.h:
						return !1;
					case ar.R:
						return t.payload;
					case l.b:
						return Fr(t) === Vt.Nb.POST_CREATION && e;
					case ar.E:
					case Wn.l:
					case Wn.g:
						return !1;
					default:
						return e
				}
			};
			const Vs = Qr.r.Post;
			var Ys = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.w:
							return Qr.r.Post;
						case ar.F:
							return t.payload;
						case Wn.j:
							return Qr.r.Draft;
						case l.b:
							return Fr(t) !== Vt.Nb.POST_CREATION ? Vs : e;
						default:
							return e
					}
				},
				Ks = Object(S.c)({
					editorMode: Gs,
					fieldValidation: Qs,
					isChanged: Ws,
					submitMode: Ys
				});
			var $s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.H:
						return t.payload.editorMode === Qr.i.MARKDOWN ? t.payload.postContent || "" : e;
					case ar.I:
						return "";
					case ar.Q:
						return t.payload.editorMode === Qr.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const zs = zr.a.createInitial;
			var Xs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zs(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.I:
							return zr.a.createInitial();
						case ar.H: {
							const n = t.payload;
							return n.editorMode === Qr.i.RICH_TEXT && "object" == typeof n.postContent ? zr.a.createInitial(n.postContent, n.mediaMetadata) : e
						}
						case ar.Q: {
							const n = t.payload;
							return n.editorMode === Qr.i.RICH_TEXT && n.editorKey === Qr.h.POST_EDITING ? zr.a.createInitial(n.content) : e
						}
						default:
							return e
					}
				},
				Js = Object(S.c)({
					markdown: $s,
					rte: Xs
				});
			var Zs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case ar.I:
							return null;
						default:
							return e
					}
				},
				ea = Object(S.c)({
					draft: Js,
					postId: Zs
				});
			var ta = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.C:
					case ar.B:
						return !1;
					case ar.z:
						return !0;
					default:
						return e
				}
			};
			var na = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.z:
						case ar.B:
							return !1;
						case ar.C:
							return !0;
						default:
							return e
					}
				},
				ra = Object(S.c)({
					error: ta,
					pending: na
				});
			var sa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case ar.j:
					case ar.d:
					case ar.e:
					case ar.i:
					case ar.r:
					case Wn.g:
						return !0;
					case ar.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					default:
						return e
				}
			};
			const aa = {};
			var oa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ar.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const ca = [];
			var ia = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ca,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ar.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				da = Object(S.c)({
					api: ra,
					isInputChanged: sa,
					model: oa,
					order: ia
				}),
				la = Object(S.c)({
					api: Nr,
					drafts: Mr,
					formData: Fs,
					formState: Ks,
					postEditing: ea,
					subredditRec: da
				}),
				ua = n("./src/reddit/actions/dashboard/constants.ts");
			const pa = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var fa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ua.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ua.d: {
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
					case ua.c: {
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
			var ba = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b:
					case je.c:
						return null;
					case je.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var ha = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
						return !1;
					case je.b:
						return !0;
					default:
						return e
				}
			};
			var ya = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
							return !0;
						case je.b:
						case je.a:
							return !1;
						default:
							return e
					}
				},
				ga = Object(S.c)({
					error: ba,
					loaded: ha,
					pending: ya
				}),
				ma = Object(S.c)({
					list: ga
				}),
				va = n("./node_modules/lodash/isEmpty.js"),
				Ea = n.n(va);
			const Oa = {};
			var _a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							return Ea()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				Ia = n("./node_modules/lodash/forOwn.js"),
				Sa = n.n(Ia),
				Ta = n("./src/reddit/helpers/name/index.ts");
			const wa = {};
			var Da = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							if (Ea()(n)) return e;
							const r = {};
							return Sa()(n, e => {
								r[Object(Ta.h)(e.unitName)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ja = Object(S.c)({
					api: ma,
					models: _a,
					nameToId: Da
				}),
				Aa = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const Ca = [];
			var Pa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ca,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Aa.a: {
							const {
								subredditId: n
							} = t.payload;
							return [...e, n]
						}
						default:
							return e
					}
				},
				Ra = n("./src/reddit/actions/economics/banners/constants.ts");
			const Na = {
				dismissedBanners: {}
			};
			var La = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Na,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ra.c: {
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
						case Ra.d: {
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
						case Ra.a:
						case Ra.b: {
							const {
								subredditId: n,
								bannerType: r
							} = t.payload, s = e.dismissedBanners[n] || {}, a = t.type === Ra.a;
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
				ka = n("./src/reddit/models/Badge/managementPage.ts");
			const xa = {
				badgeType: ka.a.Cosmetic,
				view: ka.c.Gallery
			};
			var Ua = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.c: {
						const {
							badge: n,
							initialView: r
						} = t.payload;
						return n || r ? {
							...e,
							badgeType: n ? Object(ka.d)(n.placement) : e.badgeType,
							view: r
						} : e
					}
					case c.b: {
						const n = t.payload;
						return {
							...e,
							badgeType: n
						}
					}
					case c.d: {
						const n = t.payload;
						return {
							...e,
							view: n
						}
					}
					case r.b:
						return xa;
					default:
						return e
				}
			};
			var Ma = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.c:
							return {
								badge: t.payload.badge
							};
						case r.b:
							return null;
						default:
							return e
					}
				},
				Fa = n("./src/reddit/actions/economics/powerups/constants.ts");

			function Ba(e, t) {
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

			function Ga(e) {
				if (!e) return e;
				const {
					mediaPacks: t
				} = e, n = {};
				return null == t || t.forEach(e => {
					const {
						id: t,
						name: r,
						emotes: s
					} = e;
					n[t] = {
						id: t,
						name: r,
						emotes: s.map(e => Ba(e, t))
					}
				}), n
			}
			const qa = {};

			function Ha(e, t, n) {
				if (!e[t]) return e;
				const r = e[t].findIndex(e => e.title === t);
				return -1 === r ? e : {
					...e,
					[t]: e[t].map((e, s) => s !== r ? e : {
						title: e.title,
						emotes: {
							...e.emotes,
							[n.name]: Ba(n, t)
						}
					})
				}
			}
			var Qa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.e: {
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
					case ee.pb: {
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
								[r]: e[r] ? [...e[r], ...t] : t
							}
						}
						return e
					}
					case Fa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload;
						return Ha(e, n, r)
					}
					default:
						return e
				}
			};
			const Wa = {};
			var Va = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.e: {
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
				Ya = n("./src/reddit/actions/economics/me/constants.ts");
			const Ka = {
				fetched: !1,
				data: {}
			};
			var $a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ka,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ya.a:
							return {
								fetched: !0, data: t.payload
							};
						case c.h: {
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
				za = n("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Xa = {
				fetched: !1,
				data: null
			};
			var Ja = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ya.b:
							return {
								fetched: !0, data: e.data
							};
						case Ya.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Za = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				eo = Object(S.c)({
					banners: La,
					currentBadgeManagementScreen: Ua,
					currentModalArgs: Ma,
					emotes: Qa,
					gifs: Va,
					me: $a,
					paymentSystems: za.b,
					pointsCopy: Ja,
					subredditPremium: Za.b
				}),
				to = n("./src/reddit/actions/emailVerificationTooltip.ts");
			const no = {
				isShowing: !1,
				triggerSource: "none"
			};
			var ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : no,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case to.b:
							return {
								...e, isShowing: !e.isShowing
							};
						case to.a:
							return {
								...e, triggerSource: t.payload
							};
						default:
							return e
					}
				},
				so = n("./src/reddit/actions/emoji.ts");
			const ao = {};
			var oo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ao,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.g: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.f:
						case so.e: {
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
				co = Object(S.c)({
					pending: oo
				}),
				io = Object(S.c)({
					list: co
				});
			const lo = {};
			var uo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.e:
						case so.b:
							return e;
						case so.f: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case so.c: {
							const {
								emojiName: n,
								subredditId: r
							} = t.payload, s = e[r].emojis, {
								[n]: a,
								...o
							} = s;
							return {
								...e,
								[r]: {
									...e[r],
									emojis: o
								}
							}
						}
						case so.h: {
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
						case so.d: {
							const {
								emojiName: n,
								isSnoomoji: r,
								settings: s,
								subredditId: a
							} = t.payload, o = r ? "snoomojis" : "emojis", c = e[a][o], i = {
								...c,
								[n]: {
									...c[n],
									...s
								}
							};
							return {
								...e,
								[a]: {
									...e[a],
									[o]: i
								}
							}
						}
						default:
							return e
					}
				},
				po = Object(S.c)({
					api: io,
					models: uo
				}),
				fo = n("./src/reddit/actions/experiments.ts");
			const bo = /^experiment_(.*)$/i,
				ho = e => {
					const t = e.match(bo);
					if (null !== t) return t[1]
				},
				yo = {};
			var go = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Br(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = ho(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return Ea()(r) ? e : {
								...e,
								...r
							}
						}
						case fo.b: {
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
				mo = n("./src/reddit/actions/externalAccount.ts");
			const vo = {};
			var Eo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mo.e:
					case mo.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case mo.d: {
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
			const Oo = {};
			var _o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mo.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case mo.f:
						case mo.d: {
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
				Io = Object(S.c)({
					error: Eo,
					pending: _o
				});
			const So = {};
			var To = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : So,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mo.l:
					case mo.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case mo.j: {
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
			const wo = {};
			var Do = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mo.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case mo.c:
						case mo.a: {
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
				jo = Object(S.c)({
					error: To,
					pending: Do
				});
			const Ao = {};
			var Co = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ao,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mo.i:
					case mo.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case mo.g: {
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
			const Po = {};
			var Ro = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Po,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mo.h: {
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
			const No = {};
			var Lo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : No,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mo.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case mo.h:
						case mo.g: {
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
				ko = Object(S.c)({
					error: Co,
					fetched: Ro,
					pending: Lo
				});
			const xo = {};
			var Uo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mo.l:
					case mo.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case mo.j: {
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
			const Mo = {};
			var Fo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mo.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case mo.k:
						case mo.j: {
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
				Bo = Object(S.c)({
					error: Uo,
					pending: Fo
				}),
				Go = Object(S.c)({
					connect: Io,
					disconnect: jo,
					user: Bo,
					subreddit: ko
				});
			const qo = {};
			var Ho = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mo.h: {
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
			const Qo = {};
			var Wo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mo.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case mo.c: {
							const {
								username: n,
								provider: r
							} = t.payload, s = e[n];
							return s && s[r] ? {
								...e,
								[n]: kr()(s, r)
							} : e
						}
						default:
							return e
					}
				},
				Vo = Object(S.c)({
					api: Go,
					user: Wo,
					subreddit: Ho
				}),
				Yo = n("./src/reddit/featureFlags/index.ts");
			const Ko = new Set(["0", "disabled", "false", "off", ""]);
			var $o = e => !Ko.has(e.toLowerCase());
			const zo = Yo.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Xo = Yo.a.reduce((e, t) => (e[t] = null, e), {});
			var Jo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Br(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(Yo.g)(e);
									if (r) {
										const s = zo[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || $o(r);
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
						case Yo.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case Yo.c: {
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
				Zo = Object(S.c)({
					overrides: Jo
				}),
				ec = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const tc = {
				focusedVerticalGqlError: null
			};
			var nc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ec.h:
					case ec.g:
					case ec.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case ec.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const rc = {
				focusedVerticalGqlPending: !1
			};
			var sc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ec.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case ec.e:
						case ec.g:
						case ec.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				ac = Object(S.c)({
					error: nc,
					pending: sc
				});
			var oc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ec.g:
					case ec.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const cc = {
				dismissed: !0
			};
			var ic = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ec.j:
						return {
							dismissed: !1
						};
					case ec.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var dc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ec.g:
					case ec.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ec.g:
					case ec.c:
					case ec.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var uc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ec.g:
						case ec.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				pc = Object(S.c)({
					api: ac,
					components: ic,
					interactedSubredditIds: dc,
					recommendedSubredditIds: uc,
					category: oc,
					lastLoadedEnv: lc
				});
			Object(Yt.a)("FONTS_FONT_FILES_PARSED");
			const fc = [];
			var bc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var hc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ae.b:
						return t.payload;
					default:
						return e
				}
			};
			var yc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.p:
						return t.payload;
					case ee.e:
					case l.b:
					case ee.J:
					case ee.s:
						return null;
					default:
						return e
				}
			};
			var gc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.e:
					case l.b:
					case ee.s:
					case ee.p:
						return !1;
					case ee.q:
						return !0;
					default:
						return e
				}
			};
			var mc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.q:
						case ee.e:
						case l.b:
						case ee.s:
						case ee.p:
							return !1;
						case ee.u:
							return !0;
						default:
							return e
					}
				},
				vc = Object(S.c)({
					error: yc,
					pending: gc,
					showLoader: mc
				});
			var Ec = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.K:
					case ee.J: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case ee.f:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var Oc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.t: {
						const {
							id: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var _c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const n = t.payload;
				switch (t.type) {
					case ee.I:
					case ee.J:
						return n.thingId;
					case ee.s:
					case l.b:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var Ic = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.J:
						return !1;
					default:
						return e
				}
			};
			var Sc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.I:
						return !0;
					default:
						return e
				}
			};
			var Tc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.J:
						return "";
					default:
						return e
				}
			};
			const wc = De.p;
			var Dc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.jb:
							return t.payload;
						case ee.J: {
							const {
								award: e
							} = t.payload;
							return e || wc
						}
						default:
							return e
					}
				},
				jc = Object(S.c)({
					api: vc,
					correlationId: Ec,
					gildModalThingId: _c,
					isAnonymous: Ic,
					isIframed: Sc,
					message: Tc,
					gildedThing: Oc,
					selectedAward: Dc
				});
			var Ac = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.w:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case ee.f:
					case l.b:
					case ee.K:
					case ee.B:
						return null;
					default:
						return e
				}
			};
			var Cc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.f:
						case l.b:
						case ee.B:
						case ee.w:
							return !1;
						case ee.x:
							return !0;
						default:
							return e
					}
				},
				Pc = Object(S.c)({
					error: Ac,
					pending: Cc
				});
			var Rc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.K: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case l.b:
						case ee.f:
						case ee.B:
							return "";
						default:
							return e
					}
				},
				Nc = Object(S.c)({
					api: Pc,
					givePremiumModalAccountName: Rc
				}),
				Lc = n("./src/reddit/actions/header.ts"),
				kc = n("./src/reddit/actions/overlayEvents.ts");
			var xc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lc.a:
							return !1;
						case Lc.b:
							return !0;
						case Lc.c:
							return !e;
						case kc.b:
							return !1;
						default:
							return e
					}
				},
				Uc = Object(S.c)({
					isSubscriptionsDropdownOpen: xc
				});
			var Mc = function() {
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
				Fc = n("./src/reddit/actions/imageUploads.ts");
			const Bc = {};
			var Gc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fc.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case Fc.c:
					case Fc.e:
					case Fc.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case Fc.a: {
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
			var qc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case Ae.c: {
						const r = t.payload;
						return Ea()(r) ? e : (null === (n = r.notifications) || void 0 === n ? void 0 : n.position) || null
					}
					default:
						return e
				}
			};
			const Hc = {
				notifications: null,
				id: null
			};
			var Qc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r;
					switch (t.type) {
						case Ae.c: {
							const s = t.payload;
							return Ea()(s) ? e : {
								...e,
								notifications: (null === (n = s.notifications) || void 0 === n ? void 0 : n.notifications) || null,
								id: null === (r = s.notifications) || void 0 === r ? void 0 : r.id
							}
						}
						default:
							return e
					}
				},
				Wc = n("./src/reddit/actions/inAppNotifications/constants.ts");
			var Vc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wc.a:
							return !0;
						default:
							return e
					}
				},
				Yc = Object(S.c)({
					inFeedPosition: qc,
					notifications: Qc,
					shouldHideInAppNotifications: Vc
				}),
				Kc = n("./src/reddit/actions/interceptedAction.ts");
			var $c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kc.a:
							return t.payload;
						case Kc.b:
							return null;
						default:
							return e
					}
				},
				zc = n("./src/reddit/actions/changeUsername.ts");
			var Xc = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zc.CHANGE_USERNAME_TOOLTIP_CLOSED:
							return !1;
						case zc.CHANGE_USERNAME_TOOLTIP_OPENED:
							return !0;
						default:
							return e
					}
				},
				Jc = n("./src/reddit/actions/moderatingSubreddits.ts");
			var Zc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jc.a: {
							if (e) return e;
							const n = t.payload;
							return Object.keys(n).some(e => !0 === n[e].posts)
						}
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.f:
						case ke.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: n
							} = t;
							return n.subredditPermissions && n.subreddits ? !!n.subredditPermissions.posts : e
						}
						case F.i:
						case F.f:
						case F.m:
						case F.p:
						case F.v: {
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
				ei = n("./src/reddit/actions/jsApi.ts");
			const ti = [];
			var ni = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ti,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ei.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				ri = n("./src/reddit/actions/langSite/index.ts");
			const si = {
				bannerClosedTime: 0
			};
			var ai = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : si,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ri.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				oi = n("./src/reddit/actions/leaderboard/constants.ts");
			const ci = {};
			var ii = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ci,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oi.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case oi.b:
					case oi.c: {
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
			const di = {};
			var li = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : di,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oi.a:
						case oi.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case oi.b: {
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
				ui = Object(S.c)({
					error: ii,
					pending: li
				});
			const pi = {};
			var fi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oi.c: {
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
				bi = Object(S.c)({
					api: ui,
					models: fi
				});
			var hi = function() {
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
			const yi = {};
			var gi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.d:
					case Fe.e:
					case Q.b:
					case Q.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Vt.cc.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Fe.c:
					case Q.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Vt.cc.Users) || s && s.authors ? e : {
							...e,
							[n]: r
						}
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
						case Fe.d:
						case Q.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Fe.e:
						case Fe.c:
						case Q.c:
						case Q.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Ei = Object(S.c)({
					error: gi,
					pending: vi
				});
			const Oi = {};
			var _i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Vt.cc.Users)) return e;
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
			const Ii = {};
			var Si = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ii,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.e: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Vt.cc.Users) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case Q.c: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Vt.cc.Users) ? e : {
							...e,
							[n]: r
						}
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
						case Fe.e:
						case Q.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Vt.cc.Users) ? e : r.authors ? {
								...e,
								[n]: {
									token: r.authors
								}
							} : Object(Lt.a)(e, n)
						}
						default:
							return e
					}
				},
				Di = Object(S.c)({
					api: Ei,
					identifiers: Si,
					fetchedTokens: _i,
					loadMore: wi
				});
			const ji = {};
			var Ai = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.d:
					case Fe.e:
					case Q.b:
					case Q.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Vt.cc.Comments) ? e : {
							...e,
							[n]: null
						}
					}
					case Fe.c:
					case Q.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Vt.cc.Comments) || s && s.comments ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Ci = {};
			var Pi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ci,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.d:
						case Q.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Comments) ? e : {
								...e,
								[n]: !0
							}
						}
						case Fe.e:
						case Fe.c:
						case Q.c:
						case Q.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Comments) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Ri = Object(S.c)({
					error: Ai,
					pending: Pi
				});
			const Ni = {};
			var Li = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ni,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Vt.cc.Comments)) return e;
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
			const ki = {};
			var xi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ki,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.e: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Vt.cc.Comments) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case Q.c: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Vt.cc.Comments) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Ui = {};
			var Mi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ui,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.e:
						case Q.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Vt.cc.Comments) ? e : r.comments ? {
								...e,
								[n]: {
									token: r.comments
								}
							} : Object(Lt.a)(e, n)
						}
						default:
							return e
					}
				},
				Fi = Object(S.c)({
					api: Ri,
					identifiers: xi,
					fetchedTokens: Li,
					loadMore: Mi
				});
			const Bi = {};
			var Gi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.d:
					case Fe.e:
					case Q.b:
					case Q.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Vt.cc.Subreddits) ? e : {
							...e,
							[n]: null
						}
					}
					case Fe.c:
					case Q.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Vt.cc.Subreddits) || s && s.communities ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const qi = {};
			var Hi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.d:
						case Q.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Subreddits) ? e : {
								...e,
								[n]: !0
							}
						}
						case Fe.e:
						case Fe.c:
						case Q.c:
						case Q.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Subreddits) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Qi = Object(S.c)({
					error: Gi,
					pending: Hi
				});
			const Wi = {};
			var Vi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Vt.cc.Subreddits)) return e;
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
			const Yi = {};
			var Ki = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.e: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Vt.cc.Subreddits) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case Q.c: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Vt.cc.Subreddits) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const $i = {};
			var zi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.e:
						case Q.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Vt.cc.Subreddits) ? e : r.communities ? {
								...e,
								[n]: {
									token: r.communities
								}
							} : Object(Lt.a)(e, n)
						}
						default:
							return e
					}
				},
				Xi = Object(S.c)({
					api: Qi,
					identifiers: Ki,
					fetchedTokens: Vi,
					loadMore: zi
				});
			const Ji = {};
			var Zi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ji,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.d:
					case Fe.e:
					case Q.b:
					case Q.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Vt.cc.Subreddits) && -1 === r.indexOf(Vt.cc.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Fe.c:
					case Q.a: {
						const {
							key: n,
							error: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Vt.cc.Subreddits) && -1 === s.indexOf(Vt.cc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					case je.f:
					case je.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case je.d: {
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
			const ed = {};
			var td = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.d:
						case Q.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Subreddits) && -1 === r.indexOf(Vt.cc.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Fe.e:
						case Fe.c:
						case Q.c:
						case Q.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Subreddits) && -1 === r.indexOf(Vt.cc.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						case je.f: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case je.e:
						case je.d: {
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
				nd = Object(S.c)({
					error: Zi,
					pending: td
				});
			const rd = {};
			var sd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Vt.cc.Subreddits) && -1 === s.indexOf(Vt.cc.Users)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					case je.e: {
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
			const ad = {};
			var od = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ad,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.e: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Vt.cc.Subreddits) && -1 === s.indexOf(Vt.cc.Users) ? e : {
							...e,
							[n]: e[n].concat(r)
						}
					}
					case Q.c: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Vt.cc.Subreddits) && -1 === s.indexOf(Vt.cc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const cd = {};
			var id = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.e:
						case Q.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Vt.cc.Subreddits) && -1 === s.indexOf(Vt.cc.Users) ? e : r.listings ? {
								...e,
								[n]: {
									token: r.listings
								}
							} : Object(Lt.a)(e, n)
						}
						case je.e: {
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
				dd = Object(S.c)({
					api: nd,
					identifiers: od,
					fetchedTokens: sd,
					loadMore: id
				});
			const ld = {};
			var ud = n("./src/reddit/actions/eventPosts/constants.ts"),
				pd = n("./src/reddit/actions/linkedPosts/constants.ts"),
				fd = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				bd = n("./src/reddit/actions/pages/postSetPage/constants.ts"),
				hd = n("./src/reddit/actions/pages/topic.ts");
			const yd = {};
			var gd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Re.c:
						case Re.b:
						case Re.g:
						case Re.f:
						case Ae.d:
						case Ae.c:
						case Le.c:
						case Le.b:
						case W.SUBREDDIT_PENDING:
						case W.SUBREDDIT_LOADED:
						case pd.c:
						case Ae.h:
						case Ae.g:
						case Ne.e:
						case Ne.f:
						case Ne.i:
						case Ne.h:
						case Pe.s:
						case Pe.r:
						case fd.b:
						case fd.c:
						case bd.b:
						case bd.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case V.f:
						case V.e:
						case xe.f:
						case xe.e:
						case Y.j:
						case hd.TOPIC_DATA_PENDING:
						case hd.TOPIC_DATA_LOADED:
						case hd.MORE_POSTS_PENDING:
						case hd.MORE_POSTS_LOADED:
						case Y.i:
						case ud.e:
						case ud.c:
						case ud.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: null
							}
						}
						case Q.b:
						case Q.c:
						case Fe.d:
						case Fe.e: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Posts) ? e : {
								...e,
								[n]: null
							}
						}
						case Re.a:
						case Re.e:
						case Ae.a:
						case Le.a:
						case W.SUBREDDIT_FAILED:
						case Ae.f:
						case Ne.g:
						case Pe.q:
						case fd.a:
						case Y.h:
						case bd.a:
						case V.d:
						case xe.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case hd.TOPIC_DATA_FAILED:
						case hd.MORE_POSTS_FAILED:
						case ud.b: {
							const {
								key: n,
								error: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case Q.a:
						case Fe.c: {
							const {
								error: n,
								key: r,
								success: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Vt.cc.Posts) || s && s.posts ? e : {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				md = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				vd = n("./src/reddit/actions/subreddit/constants.ts");
			const Ed = {};
			var Od = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ed,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Re.c:
						case Re.g:
						case Ae.d:
						case pd.c:
						case Le.c:
						case q.PROFILE_POSTS_PENDING:
						case xe.f:
						case W.SUBREDDIT_PENDING:
						case Ae.h:
						case Ne.f:
						case Ne.i:
						case Pe.s:
						case fd.c:
						case bd.c:
						case V.f:
						case q.MORE_POSTS_PENDING:
						case Y.j:
						case hd.MORE_POSTS_PENDING:
						case ud.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Q.b:
						case Fe.d: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Posts) ? e : {
								...e,
								[n]: !0
							}
						}
						case Re.b:
						case Re.a:
						case Re.f:
						case Re.e:
						case Ae.c:
						case Ae.a:
						case Le.a:
						case Le.b:
						case bd.a:
						case bd.b:
						case xe.d:
						case xe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case W.SUBREDDIT_LOADED:
						case W.SUBREDDIT_FAILED:
						case Ae.g:
						case Ae.f:
						case pd.a:
						case pd.b:
						case Ne.e:
						case Ne.d:
						case Ne.h:
						case Ne.g:
						case Pe.r:
						case Pe.q:
						case V.d:
						case V.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case md.a:
						case md.b:
						case vd.k:
						case fd.b:
						case fd.a:
						case Y.i:
						case Y.h:
						case hd.MORE_POSTS_LOADED:
						case hd.MORE_POSTS_FAILED:
						case ud.c:
						case ud.b:
						case ud.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case vd.s: {
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
						case Q.c:
						case Q.a:
						case Fe.e:
						case Fe.c: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Vt.cc.Posts) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				_d = Object(S.c)({
					error: gd,
					pending: Od
				});
			const Id = {};
			var Sd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Id,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ae.c:
						case W.SUBREDDIT_LOADED: {
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
				Td = n("./src/reddit/actions/postList.ts"),
				wd = n("./node_modules/lodash/omitBy.js"),
				Dd = n.n(wd);

			function jd(e, t) {
				return t = t.toLowerCase(), Dd()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const Ad = {};
			var Cd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ad,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Td.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Td.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? kr()(e, [n]) : e
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return jd(e, t.payload);
					default:
						return e
				}
			};
			const Pd = {};
			var Rd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Re.b:
						case Ne.e:
						case Ae.c:
						case Le.b:
						case W.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case hd.TOPIC_DATA_LOADED: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: {}
							}
						}
						case Re.f:
						case Ae.g:
						case Ne.h:
						case Pe.r:
						case V.e:
						case q.MORE_POSTS_LOADED:
						case Y.i:
						case hd.MORE_POSTS_LOADED: {
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
						case Fe.e: {
							const {
								fetchedToken: n,
								key: r,
								type: s
							} = t.payload;
							if (s.indexOf(Vt.cc.Posts) > -1) {
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
						case W.SUBREDDIT_INVALIDATE_LISTING:
							return jd(e, t.payload);
						default:
							return e
					}
				},
				Nd = n("./src/reddit/actions/post.ts");
			const Ld = {};
			var kd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ld,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Re.c:
						case Ae.d:
						case Ne.f:
						case Le.c:
						case q.PROFILE_POSTS_PENDING:
						case W.SUBREDDIT_PENDING:
						case bd.c:
						case xe.f:
						case q.PROFILE_POSTS_PENDING:
						case hd.TOPIC_DATA_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: []
							}
						}
						case je.e:
						case pd.b:
						case Ne.e:
						case md.b:
						case Ae.c:
						case Re.b:
						case Le.b:
						case W.SUBREDDIT_LOADED:
						case vd.k:
						case fd.b:
						case bd.b:
						case xe.e:
						case q.PROFILE_POSTS_LOADED:
						case Me.b:
						case hd.TOPIC_DATA_LOADED:
						case ud.c: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case vd.s: {
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
						case Re.f:
						case Ae.g:
						case Ne.h:
						case Pe.r:
						case q.MORE_POSTS_LOADED:
						case V.e:
						case Y.i:
						case hd.MORE_POSTS_LOADED:
						case ud.d: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case Q.c: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Vt.cc.Posts) ? e : {
								...e,
								[n]: r
							}
						}
						case Fe.e: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Vt.cc.Posts) ? e : {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case Nd.o: {
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
						case W.SUBREDDIT_INVALIDATE_LISTING:
							return jd(e, t.payload);
						default:
							return e
					}
				},
				xd = n("./src/lib/makeListingKey/index.ts");
			const Ud = {};
			var Md = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ud,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(xd.b)(n) ? {
							...e,
							[n]: {
								sort: r,
								hasChanged: !1
							}
						} : e
					}
					case jn.a:
					case jn.q: {
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
			const Fd = {};
			var Bd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Re.b:
					case Re.f:
					case Ae.c:
					case Le.b:
					case W.SUBREDDIT_LOADED:
					case xe.e:
					case q.PROFILE_POSTS_LOADED:
					case Ae.g:
					case Ne.e:
					case Ne.h:
					case Pe.r:
					case V.e:
					case q.MORE_POSTS_LOADED:
					case Y.i:
					case hd.TOPIC_DATA_LOADED:
					case hd.MORE_POSTS_LOADED: {
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
						} : Object(Lt.a)(e, n)
					}
					case Fe.e:
					case Q.c: {
						const {
							key: n,
							tokens: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Vt.cc.Posts) ? e : r.posts ? {
							...e,
							[n]: {
								token: r.posts
							}
						} : Object(Lt.a)(e, n)
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return jd(e, t.payload);
					default:
						return e
				}
			};
			const Gd = {};
			var qd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ud.c:
						case ud.d: {
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
				Hd = Object(S.c)({
					api: _d,
					correlationIds: Sd,
					endMarkers: Cd,
					fetchedTokens: Rd,
					ids: kd,
					listingSort: Md,
					loadMore: Bd,
					pageInfo: qd,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ld,
							r = arguments.length > 1 ? arguments[1] : void 0;
						switch (r.type) {
							case Q.c:
							case Fe.e: {
								const {
									key: s,
									treatment: a,
									type: o
								} = r.payload;
								return -1 === o.indexOf(e) ? n : {
									...n,
									[s]: a[t]
								}
							}
							default:
								return n
						}
					}))(Vt.cc.Posts, Vt.bc.Posts)
				}),
				Qd = Object(S.c)({
					activeKey: hi,
					authorOrder: Di,
					commentOrder: Fi,
					communityOrder: Xi,
					listingOrder: dd,
					postOrder: Hd
				});
			var Wd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ae.c: {
						const n = t.payload;
						return Ea()(n.announcements) ? e : n.announcements || null
					}
					default:
						return e
				}
			};
			var Vd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ae.c: {
						const n = t.payload;
						return Ea()(n.featuredLiveThread) ? e : n.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Yd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ae.c:
						return !0;
					default:
						return e
				}
			};
			var Kd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				$d = Object(S.c)({
					announcements: Wd,
					featured: Vd,
					isFrontpageLoaded: Yd,
					shouldShowAnnouncements: Kd
				}),
				zd = n("./src/reddit/actions/media.ts");
			const Xd = {},
				Jd = {};
			var Zd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zd.b: {
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
			const el = {};
			var tl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zd.e: {
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
				nl = Object(S.c)({
					currentSlideIndex: Zd,
					isGalleryTileLayout: tl
				});
			var rl = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zd.c:
						return t.payload;
					default:
						return e
				}
			};
			var sl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zd.d:
							return t.payload;
						default:
							return e
					}
				},
				al = Object(S.c)({
					isMuted: rl,
					volume: sl
				}),
				ol = n("./src/reddit/actions/meta.ts");
			const cl = {
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
			var il = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ol.b:
							return t.payload;
						case ol.a:
							return {
								...e, ...t.payload
							};
						case ol.e:
							return {
								...e, locale: t.payload
							};
						case ol.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case ol.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case ol.d:
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
				dl = n("./src/reddit/actions/subredditModeration/constants.ts");
			const ll = {};
			var ul = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ll,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case B.b:
					case B.f:
					case ke.PAGE_LOADED: {
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
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v: {
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
					case Y.f:
					case Ne.e:
					case F.k: {
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
					case dl.kb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Lt.a)(e, n)
					}
					case dl.db: {
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
			var pl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.b:
					case Ne.k:
						return null;
					case Ne.a:
					case Ne.j:
						return t.payload;
					default:
						return e
				}
			};
			var fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.b:
						case Ne.k:
							return !0;
						case Ne.c:
						case Ne.a:
						case Ne.l:
						case Ne.j:
							return !1;
						default:
							return e
					}
				},
				bl = Object(S.c)({
					error: pl,
					pending: fl
				});
			const hl = [];
			var yl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e: {
							const n = t.payload,
								{
									filteredSubreddits: r
								} = n;
							return r || e
						}
						case Ne.j: {
							const n = t.payload;
							return [...e, n]
						}
						case Ne.k:
						case Ne.a: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						default:
							return e
					}
				},
				gl = Object(S.c)({
					api: bl,
					names: yl
				}),
				ml = Object(S.c)({
					filteredSubreddits: gl
				}),
				vl = n("./src/reddit/actions/modMode.ts");
			var El = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vl.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const Ol = {};
			var _l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ol,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case x.z: {
						const {
							moreCommentsId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case x.y: {
						const {
							moreCommentsItem: n
						} = t.payload;
						return {
							...e,
							[n.id]: null
						}
					}
					case x.x: {
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
			const Il = {};
			var Sl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Il,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x.z: {
							const {
								moreCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case x.x:
						case x.y: {
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
				Tl = Object(S.c)({
					error: _l,
					pending: Sl
				});
			const wl = {};
			var Dl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x.y:
						case B.b:
						case B.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				jl = Object(S.c)({
					api: Tl,
					models: Dl
				});
			var Al = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.b:
					case Pe.c:
						return null;
					case Pe.a:
						return t.payload;
					default:
						return e
				}
			};
			var Cl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.a:
					case Pe.c:
						return !0;
					case Pe.b:
						return !1;
					default:
						return e
				}
			};
			var Pl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Le.b:
						case Pe.a:
						case Pe.c:
							return null;
						case Pe.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Rl = Object(S.c)({
					error: Al,
					fetched: Cl,
					pending: Pl
				});
			var Nl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.f:
					case Pe.g:
						return null;
					case Pe.e:
						return t.payload;
					default:
						return e
				}
			};
			var Ll = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.e:
					case Pe.g:
						return !0;
					case Pe.f:
						return !1;
					default:
						return e
				}
			};
			var kl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.e:
						case Pe.g:
							return !1;
						case Pe.f:
							return !0;
						default:
							return e
					}
				},
				xl = Object(S.c)({
					error: Nl,
					fetched: Ll,
					pending: kl
				});
			var Ul = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.i:
					case Pe.j:
						return null;
					case Pe.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ml = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.h:
					case Pe.j:
						return !0;
					case Pe.i:
						return !1;
					default:
						return e
				}
			};
			var Fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.h:
						case Pe.j:
							return !1;
						case Pe.i:
							return !0;
						default:
							return e
					}
				},
				Bl = Object(S.c)({
					error: Ul,
					fetched: Ml,
					pending: Fl
				});
			var Gl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.l:
					case Pe.m:
						return null;
					case Pe.k:
						return t.payload;
					default:
						return e
				}
			};
			var ql = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.k:
					case Pe.m:
						return !0;
					case Pe.l:
						return !1;
					default:
						return e
				}
			};
			var Hl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.k:
						case Pe.m:
							return !1;
						case Pe.l:
							return !0;
						default:
							return e
					}
				},
				Ql = Object(S.c)({
					error: Gl,
					fetched: ql,
					pending: Hl
				});
			var Wl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.o:
					case Pe.p:
						return null;
					case Pe.n:
						return t.payload;
					default:
						return e
				}
			};
			var Vl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.n:
					case Pe.p:
						return !0;
					case Pe.o:
						return !1;
					default:
						return e
				}
			};
			var Yl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.n:
						case Pe.p:
							return !1;
						case Pe.o:
							return !0;
						default:
							return e
					}
				},
				Kl = Object(S.c)({
					error: Wl,
					fetched: Vl,
					pending: Yl
				});
			var $l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.t:
						return !1;
					case Pe.u:
						return !0;
					default:
						return e
				}
			};
			var zl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.t:
							return !0;
						case Pe.u:
							return !1;
						default:
							return e
					}
				},
				Xl = Object(S.c)({
					fetched: $l,
					pending: zl
				});
			var Jl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.A:
					case Pe.B:
						return null;
					case Pe.z:
						return t.payload;
					default:
						return e
				}
			};
			var Zl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.A:
					case Pe.z:
						return !1;
					case Pe.B:
						return !0;
					default:
						return e
				}
			};
			var eu = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.A:
							return !0;
						case Pe.B:
						case Pe.z:
							return !1;
						default:
							return e
					}
				},
				tu = Object(S.c)({
					error: Jl,
					fetched: Zl,
					pending: eu
				});
			var nu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.w:
					case Pe.x:
						return null;
					case Pe.v:
						return t.payload;
					default:
						return e
				}
			};
			var ru = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.v:
					case Pe.x:
						return !0;
					case Pe.w:
						return !1;
					default:
						return e
				}
			};
			var su = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.v:
						case Pe.x:
							return null;
						case Pe.w:
							const {
								id: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				au = Object(S.c)({
					error: nu,
					fetched: ru,
					pending: su
				}),
				ou = Object(S.c)({
					addSubreddit: Rl,
					create: xl,
					deleteMulti: Bl,
					duplicate: Ql,
					edit: Kl,
					forUser: Xl,
					recommendations: tu,
					removeSubreddit: au
				}),
				cu = n("./node_modules/lodash/isEqual.js"),
				iu = n.n(cu),
				du = n("./node_modules/lodash/union.js"),
				lu = n.n(du);

			function uu(e, t, n) {
				let r, s, a = e.length - 1,
					o = 0;
				for (; o <= a;) {
					const c = n(r = e[s = (o + a) / 2 | 0], t);
					if (c < 0) {
						if ((o = s + 1) > a) return o
					} else {
						if (!(c > 0)) return s;
						if ((a = s - 1) < o) return a + 1
					}
				}
				return (o + a) / 2 | 0
			}
			var pu = n("./src/reddit/actions/profile/constants.ts");
			const fu = {};
			var bu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Le.b:
						case Pe.r:
						case Pe.u:
						case pu.h: {
							const {
								multireddits: n,
								multiredditsByUser: r,
								multiredditsModelsState: s
							} = t.payload, a = {
								...e
							}, o = {
								...n,
								...s
							};
							for (const t in r) {
								const n = r[t],
									s = e[t];
								a[t] = lu()(s, n).sort((e, t) => o[e].displayText.toLowerCase() > o[t].displayText.toLowerCase() ? 1 : -1)
							}
							return iu()(e, a) ? e : a
						}
						case Pe.g:
						case Pe.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = uu(s, r.url, (e, t) => e > t ? 1 : -1);
							return s.splice(a, 0, r.url), {
								...e,
								[n]: s
							}
						}
						case Pe.j: {
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
				hu = n("./src/reddit/actions/subscription/constants.ts"),
				yu = n("./src/reddit/models/Multireddit/index.ts");
			const gu = {};
			var mu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Le.b:
					case Pe.r:
					case Pe.u:
					case pu.h:
					case Q.c: {
						let n = {};
						for (const r in t.payload.multireddits) {
							const s = {
									...t.payload.multireddits[r]
								},
								a = e[r];
							a && !Object(yu.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && iu()(e[s.url], s) || (n = {
								...n,
								[r]: s
							})
						}
						return Ea()(n) ? e : {
							...e,
							...n
						}
					}
					case Pe.g:
					case Pe.m: {
						const {
							multireddit: n
						} = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case Pe.j: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n], r
					}
					case Pe.p: {
						const n = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case Pe.x: {
						const {
							id: n,
							multipath: r,
							type: s
						} = t.payload, a = e[r], o = "subreddit" === s ? (a.subredditIds || []).filter(e => e !== n) : a.subredditIds, c = "profile" === s ? (a.profileIds || []).filter(e => e !== n) : a.profileIds;
						return {
							...e,
							[r]: {
								...a,
								profileIds: c,
								subredditIds: o
							}
						}
					}
					case hu.d: {
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
					case hu.e: {
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
					case Pe.c: {
						const {
							id: n,
							multipaths: r,
							type: s
						} = t.payload, a = r.reduce((t, r) => {
							const a = e[r],
								o = "subreddit" === s ? [...a.subredditIds || [], n] : a.subredditIds,
								c = "profile" === s ? [...a.profileIds || [], n] : a.profileIds;
							return {
								...t,
								[r]: {
									...a,
									subredditIds: o,
									profileIds: c
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
			const vu = {};
			var Eu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.B: {
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
				Ou = Object(S.c)({
					api: ou,
					byUserId: bu,
					models: mu,
					recommendations: Eu
				}),
				_u = n("./src/reddit/actions/notificationBanner.ts");
			var Iu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _u.b:
							return t.payload.notificationBannerId;
						case _u.a:
							return null;
						default:
							return e
					}
				},
				Su = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var Tu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Su.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Su.e:
					case Su.b:
						return !1;
					default:
						return e
				}
			};
			var wu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Su.e:
							return !0;
						case Su.a:
						case Su.b:
							return !1;
						default:
							return e
					}
				},
				Du = Object(S.c)({
					error: Tu,
					pending: wu
				});
			var ju = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Su.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var Au = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Su.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const Cu = [];
			var Pu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Su.b: {
						const n = t.payload && t.payload.nodes;
						return [...e, ...n]
					}
					case Su.f: {
						const n = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== n)
					}
					case Su.d: {
						const n = t.payload && t.payload.id,
							r = t.payload && t.payload.now,
							s = e.findIndex(e => e.id === n);
						return -1 === s ? e : [...e.slice(0, s), {
							...e[s],
							readAt: r
						}, ...e.slice(s + 1)]
					}
					case Su.c: {
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
			var Ru = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Su.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Nu = Object(S.c)({
					api: Du,
					earlierDividerIndex: ju,
					notifications: Pu,
					pageInfo: Ru,
					markAllAsReadTimestamp: Au
				}),
				Lu = n("./src/reddit/actions/nps.ts");
			const ku = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var xu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ku,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lu.c:
							return {
								...ku, pending: !0
							};
						case Lu.a:
							return ku;
						case Lu.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...ku,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				Uu = n("./src/reddit/actions/accountGender/constants.ts"),
				Mu = n("./src/reddit/actions/onboarding/constants.ts");
			const Fu = {
				success: !1,
				failure: !1
			};
			var Bu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Uu.b:
						return {
							...Fu, success: !0
						};
					case Uu.c:
						return {
							...Fu, failure: !0
						};
					case Mu.a:
						return {
							...Fu
						};
					default:
						return e
				}
			};
			var Gu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case Ae.c:
					case Mu.c: {
						const e = t.payload;
						return (null == e ? void 0 : e.interestTopicRecommendations) && !Ea()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
					}
					default:
						return e
				}
			};
			var qu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mu.b:
							return !0;
						default:
							return e
					}
				},
				Hu = Object(S.c)({
					genderUpdateState: Bu,
					interestTopicRecommendationsState: Gu,
					shouldSkipOnboardingState: qu
				});
			const Qu = e => {
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
			const Wu = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = Qu(n);
					return t
				},
				Vu = {};
			var Yu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fo.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return Wu(n)
					}
					default:
						return e
				}
			};
			var Ku = Object(S.c)({
					byName: Yu,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case fo.a: {
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
				$u = Object(S.c)({
					experiments: Ku
				}),
				zu = n("./node_modules/history/esm/history.js"),
				Xu = n("./src/reddit/constants/history.ts");
			n("./src/reddit/helpers/isRobotIndexableMeta.ts");
			const Ju = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				Zu = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				ep = (e, t, n, r) => {
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
			var tp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ju,
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
								key: o
							} = a;
						if (void 0 === o) return e;
						const c = Object(zu.e)(a),
							i = s ? ep(o, c, s, a) : Zu(o, c);
						let {
							referrers: d
						} = e;
						if ("PUSH" === r.action) {
							const e = n && n.url || "";
							d = {
								...d,
								[o]: e
							}
						} else if ("REPLACE" === r.action && n && d[n.key]) {
							const {
								[n.key]: e, ...t
							} = d;
							d = {
								...t,
								[o]: e
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
					case B.b:
					case B.f:
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
					case Ae.c:
					case l.a:
					case W.SUBREDDIT_LOADED: {
						const {
							correlationId: n
						} = t.payload;
						return e.currentPage ? {
							...e,
							currentPage: {
								...e.currentPage,
								locationState: {
									...e.currentPage.locationState,
									[Xu.b.FeedCorrelationId]: n
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const np = {};
			var rp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : np,
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
			const sp = {};
			var ap = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sp,
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
				op = Object(S.c)({
					error: rp,
					pending: ap
				}),
				cp = Object(S.c)({
					voting: op
				}),
				ip = n("./node_modules/lodash/mapValues.js"),
				dp = n.n(ip),
				lp = n("./src/reddit/reducers/posts/models/helpers.ts"),
				up = n("./src/reddit/actions/economics/predictions/constants.ts");
			const pp = e => {
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
			var fp = e => {
					if (!e.pollData) return null;
					const {
						id: t,
						authorId: n,
						belongsTo: r,
						created: s,
						title: a,
						isNSFW: o,
						isSpoiler: c,
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
							type: Rs.a.GA,
							isNSFW: o,
							isPrediction: i,
							isSpoiler: c,
							totalStakeAmount: u || 0,
							tournamentId: f,
							userSelection: b,
							userWonAmount: h,
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
						type: Rs.a.GA,
						isPrediction: i,
						userSelection: b
					}
				},
				bp = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				hp = n("./src/reddit/models/Prediction/index.ts");

			function yp(e, t) {
				let {
					wonAmount: n,
					id: r,
					title: s,
					totalVoteCount: a,
					totalStakeAmount: o,
					status: c,
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
					predictionStatus: c,
					title: s || "",
					creatorId: p,
					tournamentId: l,
					subredditId: u,
					userSelection: i,
					userWonAmount: n,
					postId: r,
					totalStakeAmount: o || 0,
					totalVoteCount: a || 0,
					totalVoters: a || 0,
					...d
				}
			}
			const gp = {};
			var mp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gp,
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
					case Ae.c:
					case W.SUBREDDIT_LOADED:
					case Y.i:
					case Ae.g:
					case B.b:
					case B.f:
					case up.o: {
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
						const r = dp()(t.payload.posts, Object(lp.i)([lp.o])),
							s = {};
						return Object.keys(r).forEach(e => {
							var t, n;
							const a = r[e];
							if (a.pollData && (s[e] = fp(a)), null === (n = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									s[t.id] = yp(t, {
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
					case up.q:
					case up.p: {
						const {
							pollId: n,
							prediction: {
								options: r,
								selectedOptionId: s,
								totalVoteCount: a,
								...o
							}
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...o,
								userSelection: s,
								options: r.map(t => {
									let {
										id: r,
										redditorStakeAmount: s,
										totalStakeAmount: a,
										voteCount: o
									} = t;
									return {
										...e[n].options.find(e => e.id === r),
										totalStakeAmount: a,
										userStakeAmount: s,
										voteCount: o
									}
								}),
								totalVoters: a
							}
						}
					}
					case up.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return e[n] && Object(hp.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(bp.b)(r)
							}
						} : e
					}
					default:
						return e
				}
			};
			const vp = {};
			var Ep = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.k: {
						const {
							[Rs.b.ByVoters]: n, pollId: r
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
						const o = {};
						for (const e of s) a += e.voteCount, o[e.id] = {
							id: "number" == typeof e.id ? e.id : parseInt(e.id),
							userSelected: e.id === r,
							votes: e.voteCount.toString()
						};
						return {
							...e,
							[n]: {
								options: o,
								totalVotes: a.toString()
							}
						}
					}
					case Ae.c:
					case W.SUBREDDIT_LOADED:
					case Y.i:
					case Ae.g:
					case B.b:
					case B.f: {
						const {
							governance: n,
							posts: r
						} = t.payload;
						if (n) {
							const t = Object.keys(n).reduce((e, t) => {
								const r = n[t],
									{
										[Rs.b.ByVoters]: s,
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
							const s = pp(r[t].pollData);
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
			const Op = {};
			var _p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Op,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								[Rs.b.ByVotingPower]: n, pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: n
							}
						}
						case Ae.c:
						case W.SUBREDDIT_LOADED:
						case Y.i:
						case Ae.g:
						case B.b:
						case B.f: {
							const {
								governance: n
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t],
										{
											[Rs.b.ByVotingPower]: s,
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
				Ip = Object(S.c)({
					byVoters: Ep,
					byVotingPower: _p
				});
			const Sp = {};
			var Tp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp,
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
				wp = Object(S.c)({
					api: cp,
					models: mp,
					results: Ip,
					rewards: Tp
				});
			const Dp = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var jp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bn.i:
					case Bn.j:
						return {
							...e, reorderError: null
						};
					case Bn.h:
						return {
							...e, reorderError: t.payload
						};
					case Bn.l:
					case Bn.m:
						return {
							...e, updateDescriptionError: null
						};
					case Bn.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Bn.p:
					case Bn.q:
						return {
							...e, updateLayoutError: null
						};
					case Bn.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Ap = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Cp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ap,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bn.i:
							return {
								...e, reorderPending: !0
							};
						case Bn.h:
						case Bn.j:
							return {
								...e, reorderPending: !1
							};
						case Bn.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Bn.k:
						case Bn.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Bn.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Bn.o:
						case Bn.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				Pp = Object(S.c)({
					error: jp,
					pending: Cp
				}),
				Rp = n("./src/reddit/helpers/path/index.ts");
			const Np = {},
				Lp = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Rp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var kp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Np,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Re.b:
					case Re.f:
					case ke.PAGE_LOADED:
					case Ne.e:
					case Ne.h:
					case G.b:
					case G.e:
					case xe.e:
					case xe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case Ae.c:
					case Le.b:
					case W.SUBREDDIT_LOADED:
					case B.b:
					case B.f:
					case Nd.j:
					case Pe.r:
					case Ae.g:
					case V.e:
					case Me.b:
					case Y.i:
					case Fe.e:
					case Ue.b:
					case Q.c:
					case Bn.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = Lp(r);
							s = dp()(n, e)
						}
						return {
							...e,
							...s
						}
					}
					case Bn.d: {
						const {
							collection: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						const s = n.id;
						let a = n;
						if (r) {
							a = Lp(r)(n)
						}
						return {
							...e,
							[s]: a
						}
					}
					case Bn.g: {
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
					case Bn.a: {
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
					case Bn.e: {
						const {
							collectionId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case Bn.s: {
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
					case Bn.j: {
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
					case Bn.m: {
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
					case Bn.q: {
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
			const xp = {};
			var Up = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ke.PAGE_LOADED:
						case Bn.f: {
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
						case Bn.d: {
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
						case Bn.e: {
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
				Mp = Object(S.c)({
					models: kp,
					subredditToIds: Up,
					api: Pp
				}),
				Fp = n("./src/reddit/actions/postFlair.ts"),
				Bp = n("./src/reddit/models/Flair/index.ts");
			const Gp = {},
				qp = {
					displaySettings: {
						isEnabled: !1,
						position: Bp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				Hp = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					return 0 === n.length ? e : n.reduce((e, n) => (e[n] = {
						...qp,
						...e[n],
						...t[n]
					}, e), {
						...e
					})
				};
			var Qp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Re.b:
						case Re.f:
						case ke.PAGE_LOADED:
						case Ae.g:
						case Ne.e:
						case Ne.h:
						case Pe.r:
						case fd.b:
						case B.b:
						case B.f:
						case Ae.c:
						case Le.b:
						case Q.c:
						case W.SUBREDDIT_LOADED:
						case G.b:
						case G.e:
						case H.c:
						case H.i:
						case H.e:
						case H.g:
						case V.e:
						case Ue.b:
						case Ue.b:
						case xe.b:
						case xe.e:
						case q.MORE_POSTS_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case Me.b:
						case Fe.e:
						case Fe.e:
						case Y.i:
							return Hp(e, t.payload.postFlair);
						case Fp.c: {
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
						case Fp.a: {
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
						case Fp.f: {
							const {
								subredditId: n,
								template: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = {
								...a,
								[r.id]: r
							}, i = [...o];
							return i.includes(r.id) || i.push(r.id), {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: i
								}
							}
						}
						case Fp.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = kr()(a, r), i = o.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: i
								}
							}
						}
						case Fp.e:
						case Fp.d: {
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
						case F.i:
						case F.f:
						case F.m:
						case F.p:
						case F.v: {
							const {
								response: n
							} = t.payload;
							return Hp(e, n.postFlair)
						}
						default:
							return e
					}
				},
				Wp = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const Vp = {
				pending: !1,
				items: {}
			};
			var Yp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wp.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Wp.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var Kp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nd.c:
							return t.payload;
						default:
							return e
					}
				},
				$p = n("./src/reddit/actions/embedAndImage.ts");
			const zp = {};
			var Xp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $p.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case $p.a: {
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
				Jp = Object(S.c)({
					loadable: Xp
				});
			const Zp = {};
			var ef = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nd.d: {
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
			var tf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nd.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const nf = [];
			var rf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nd.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case Nd.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case Nd.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const sf = {};
			var af = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e:
					case Ne.h:
					case Ae.c:
					case W.SUBREDDIT_LOADED:
					case Ae.g:
					case V.e:
					case Me.b:
					case Y.i:
					case Fe.e:
					case Q.c:
						return k()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var of = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nd.a:
						return t.payload;
					default:
						return e
				}
			}, cf = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const df = {};
			var lf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : df,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cf.a: {
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
			const uf = {};
			var pf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uf,
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
						case Ae.c:
						case W.SUBREDDIT_LOADED:
						case Y.i:
						case Ae.g:
						case B.b:
						case B.f:
						case up.o: {
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
				ff = n("./src/reddit/actions/bulkActions/constants.ts"),
				bf = n("./src/reddit/actions/constants.ts"),
				hf = n("./src/reddit/actions/flairManagement/constants.ts"),
				yf = n("./src/reddit/actions/googleQASchema/constants.ts"),
				gf = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				mf = n("./src/reddit/actions/subredditTopContent.ts"),
				vf = n("./src/reddit/helpers/isPost.ts"),
				Ef = n("./node_modules/lodash/pickBy.js"),
				Of = n.n(Ef);

			function _f(e, t) {
				const n = Of()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !iu()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var If = n("./src/reddit/models/Gold/Gild/index.tsx"),
				Sf = n("./src/reddit/models/Media/index.ts"),
				Tf = n("./src/reddit/models/ModQueue/index.ts"),
				wf = n("./src/reddit/models/Post/index.ts"),
				Df = n("./src/reddit/models/Vote/index.ts"),
				jf = n("./src/reddit/actions/subredditDuplicates.ts");
			const Af = {};
			var Cf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Af,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						if (Fr(t) === (Vt.Nb.COMMENTS || Vt.Nb.DUPLICATES)) {
							const n = Br(t),
								r = Gr(t);
							if (n && n.instanceId && r && r.partialPostId) {
								const t = n.instanceId,
									s = Object(wf.w)(r.partialPostId);
								if (e[s] && e[t]) return {
									...e,
									[s]: Object(lp.c)(e[s], e[t])
								}
							}
						}
						return e;
					case B.b:
					case B.f: {
						const n = Object(lp.h)(t.payload.meta);
						return {
							...e,
							...dp()(t.payload.posts, Object(lp.i)([n, lp.d, lp.m, lp.n, lp.o, Object(lp.a)(e), Object(lp.b)(e), Object(lp.j)(e), Object(lp.k)(e)]))
						}
					}
					case Nd.j:
						return _f(e, t.payload);
					case jf.a:
						return _f(e, t.payload.posts);
					case Re.b:
					case Re.f:
					case ke.PAGE_LOADED:
					case pd.b:
					case md.b:
					case Ne.e:
					case Ne.h:
					case G.b:
					case G.e:
					case xe.e:
					case xe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case Ae.c:
					case Le.b:
					case fd.b:
					case Pe.r:
					case Ae.g:
					case V.e:
					case Me.b:
					case vd.k:
					case Y.i:
					case Ue.b:
					case hd.TOPIC_DATA_LOADED:
					case hd.MORE_POSTS_LOADED:
					case ud.c:
					case ud.d:
					case up.o: {
						const n = Object(lp.h)(t.payload.meta);
						return {
							...e,
							...dp()(t.payload.posts, Object(lp.i)([n, lp.d, lp.m, lp.n, lp.o, Object(lp.l)(e), Object(lp.j)(e)]))
						}
					}
					case vd.s: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(lp.h)(t.meta);
							Object.assign(n, dp()(t.posts, Object(lp.i)([s, lp.d, lp.m, lp.n, Object(lp.l)(e), Object(lp.j)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case fd.b: {
						const n = Object(lp.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							...dp()(t.payload.posts, Object(lp.i)([n, lp.d, lp.m, lp.n, Object(lp.l)(e), Object(lp.j)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case je.e:
					case Fe.e:
					case Q.c: {
						const n = Object(lp.h)(t.payload.meta),
							r = dp()(t.payload.posts, Object(lp.i)([n, lp.m, lp.d, lp.n]));
						return k()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case Nd.k: {
						const n = t.payload;
						return k()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case bf.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(Df.c)(s, r)
						} : e
					}
					case U.b:
					case x.M: {
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
					case Nd.h: {
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
					case Nd.i: {
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
					case x.C: {
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
					case ee.tb: {
						const {
							topAwardedPosts: n
						} = t.payload;
						return {
							...e,
							...n.reduce((e, t) => (e[t.post.id] = Object(lp.i)([lp.m])(Object(Xr.f)(t.post)), e), {})
						}
					}
					case ee.s: {
						const {
							id: n,
							awardings: r,
							gilder: s,
							treatmentTags: a
						} = t.payload, o = e[n];
						return o ? {
							...e,
							[n]: {
								...Object(If.a)(o, r, s),
								treatmentTags: a
							}
						} : e
					}
					case ee.D: {
						const {
							awardId: n,
							thingId: r
						} = t.payload, s = e[r];
						return s ? {
							...e,
							[r]: Object(If.b)(s, n)
						} : e
					}
					case dl.r: {
						const {
							posts: n
						} = t.payload;
						return k()({
							...e
						}, n)
					}
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v: {
						const {
							response: n
						} = t.payload, {
							posts: r
						} = n;
						return {
							...e,
							...dp()(r, Object(lp.i)([lp.m, lp.n]))
						}
					}
					case ff.b:
					case F.s: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, o = r.filter(e => Object(vf.a)(e)), c = Object(Tf.d)(e, n, o, s, a);
						return k()({
							...e
						}, c, (e, t) => ({
							...e,
							...t
						}))
					}
					case Bn.t: {
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
					case Bn.e: {
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
					case Bn.g: {
						const {
							collectionId: n,
							postId: r
						} = t.payload;
						if (!n || !r) return e;
						const s = e[r],
							a = s && s.collectionIds;
						if (!a) return e;
						const o = a.filter(e => e !== n);
						return {
							...e,
							[r]: {
								...s,
								collectionIds: o
							}
						}
					}
					case ud.f: {
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
					case ud.a: {
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
					case ec.g: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							...dp()(n.posts, Object(lp.i)([lp.m, lp.n])),
							...e
						} : e
					}
					case bd.b:
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case mf.b:
						return {
							...dp()(t.payload.posts, Object(lp.i)([lp.m, lp.n])), ...e
						};
					case Nd.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(Sf.K)(s.media) ? {
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
					case hf.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case hf.b: {
						const n = t.payload;
						return Object(Lt.a)(e, n)
					}
					case y.u: {
						const n = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...n
						}
					}
					case gf.b: {
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
					case up.t: {
						const {
							tournamentPostId: n,
							predictionId: r,
							selectedOptionId: s
						} = t.payload;
						if (!e[r] && !e[n]) return e;
						const a = {
							...e
						};
						return a[r] && (a[r] = Object(lp.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(lp.f)({
							post: e[n],
							selectedOptionId: s,
							predictionId: r
						})), a
					}
					case up.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return {
							...e,
							[n]: Object(lp.p)(e[n], Object(bp.a)(r))
						}
					}
					case gf.a:
						return {
							...e
						};
					case yf.b: {
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
					case yf.a:
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
					default:
						return e
				}
			};
			var Pf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nd.g:
							return t.payload;
						default:
							return e
					}
				},
				Rf = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const Nf = {};
			var Lf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rf.a: {
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
			const kf = [];
			var xf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nd.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case Ae.c:
						case W.SUBREDDIT_LOADED: {
							const {
								recentPostIds: n
							} = t.payload;
							return n && n.length ? n : e
						}
						default:
							return e
					}
				},
				Uf = n("./node_modules/uuid/v4.js"),
				Mf = n.n(Uf);
			const Ff = Mf()();
			var Bf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ff,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ke.PAGE_LOADED:
					case Er.h:
					case Er.a:
					case Er.m:
					case Er.f:
						return Mf()();
					default:
						return e
				}
			};
			var Gf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Er.d:
					case Er.o:
					case Er.k:
					case Er.g:
					case Er.a:
					case Er.m:
					case Er.f:
						return null;
					case Er.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case Er.e:
						return "error";
					default:
						return e
				}
			};
			var qf = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Er.g:
						return !0;
					case Er.m:
					case Er.a:
					case Er.f:
					case Er.e:
						return !1;
					default:
						return e
				}
			};
			var Hf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Er.k:
							return !0;
						case Er.j:
						case Er.e:
						case Er.o:
						case Er.d:
							return !1;
						default:
							return e
					}
				},
				Qf = Object(S.c)({
					creationToken: Bf,
					error: Gf,
					pending: qf,
					pendingUpdate: Hf
				});
			const Wf = {};
			var Vf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Er.c: {
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
			const Yf = {
				standalonePosts: {
					POSTS_LOADED: Er.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: Er.o
				},
				recurringPosts: {
					POSTS_LOADED: Er.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: Er.d
				}
			};

			function Kf(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case Yf[e].POSTS_LOADED:
						case Er.f: {
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
						case Er.i:
						case Er.l: {
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
						case Er.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(n).reduce((t, r) => (r !== e && (t[r] = n[r]), t), {})
						}
						case Yf[e].MUTATION_SUCCEEDED: {
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
								o = {
									[t.id]: {
										...a,
										...t
									}
								};
							return {
								...n,
								[s]: {
									...n[s] || {},
									...o
								}
							}
						}
						default:
							return n
					}
				}
			}
			const $f = {};

			function zf(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $f,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case Yf[e].POSTS_LOADED:
						case Er.f: {
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
						case Er.h: {
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
			var Xf = n("./node_modules/lodash/uniq.js"),
				Jf = n.n(Xf);
			const Zf = {};

			function eb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zf,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case Yf[e].POSTS_LOADED:
						case Er.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[Yf[e].postIdsKey];
							return {
								...t,
								[s]: Jf()([...t[s] || [], ...a])
							}
						}
						case Er.i:
						case Er.l: {
							const {
								subredditId: e,
								scheduledPostId: r
							} = n.payload, s = t[e] || [];
							return {
								...t,
								[e]: s.filter(e => e !== r)
							}
						}
						case Er.h: {
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
			var tb = Object(S.c)({
					models: Kf("recurringPosts"),
					pageInfo: zf("recurringPosts"),
					postOrder: eb("recurringPosts"),
					editModal: Vf
				}),
				nb = Object(S.c)({
					models: Kf("standalonePosts"),
					pageInfo: zf("standalonePosts"),
					postOrder: eb("standalonePosts")
				}),
				rb = Object(S.c)({
					api: Qf,
					standalonePosts: nb,
					recurringPosts: tb
				});
			var sb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.sb:
						return t.payload;
					case ee.ub:
					case ee.tb:
						return null;
					default:
						return e
				}
			};
			var ab = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.tb:
						case ee.sb:
							return !1;
						case ee.ub:
							return !0;
						default:
							return e
					}
				},
				ob = Object(S.c)({
					error: sb,
					pending: ab
				});
			const cb = [];
			var ib = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.tb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case ee.sb:
						case ee.ub:
							return cb;
						default:
							return e
					}
				},
				db = Object(S.c)({
					api: ob,
					list: ib
				}),
				lb = n("./src/reddit/actions/video.ts");
			const ub = {};
			var pb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ub,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.e: {
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
			const fb = {};
			var bb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.a: {
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
			const hb = {};
			var yb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.b: {
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
			const gb = {};
			var mb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.c: {
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
			const vb = {
				mutedInFeed: !0
			};
			var Eb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Ob = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case lb.d:
						return null;
					default:
						return e
				}
			};
			const _b = {};
			var Ib = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case lb.e: {
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
			const Sb = {};
			var Tb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.h: {
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
					case lb.f: {
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
			const wb = {};
			var Db = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.j: {
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
			const jb = {};
			var Ab = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case lb.g: {
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
			const Cb = {};
			var Pb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.i: {
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
			const Rb = {};
			var Nb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lb.m: {
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
				Lb = n("./src/reddit/constants/video.ts");
			const kb = {};
			var xb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lb.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < Lb.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Ub = Object(S.c)({
					autoPlayed: pb,
					buffering: bb,
					consumed: yb,
					continuousViewStartedAt: mb,
					feed: Eb,
					fullscreen: Ob,
					loadable: Ib,
					loadTimes: Tb,
					metadata: Db,
					paused: Ab,
					playing: Pb,
					started: Nb,
					time: xb
				}),
				Mb = Object(S.c)({
					embedAndImage: Jp,
					expanded: ef,
					focus: tf,
					followed: rf,
					instances: af,
					isAnimatingUpvote: of ,
					isTrackingCrossposts: lf,
					metaMap: pf,
					models: Cf,
					modToMemberShare: Pf,
					crowdControl: Kp,
					postLevelCrowdControl: Lf,
					recent: xf,
					scheduledPosts: rb,
					topAwarded: db,
					video: Ub,
					carousel: Yp
				}),
				Fb = n("./src/lib/reducers/addAuthentication/index.ts");
			const Bb = {};
			var Gb = Object(Fb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.b:
						case B.f: {
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
						case x.I: {
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
				}), Bb),
				qb = Object(S.c)({
					data: Gb
				});
			const Hb = {};
			var Qb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb,
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
			const Wb = {};
			var Vb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wb,
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
				Yb = Object(S.c)({
					error: Qb,
					pending: Vb
				});
			const Kb = {};
			var $b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kb,
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
			const zb = {};
			var Xb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zb,
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
				Jb = Object(S.c)({
					error: $b,
					pending: Xb
				}),
				Zb = Object(S.c)({
					fetch: Yb,
					purchase: Jb
				});
			var eh = function() {
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
			const th = {};
			var nh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i:
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
				rh = Object(S.c)({
					api: Zb,
					currentlyPurchasing: eh,
					models: nh
				});
			const sh = {};
			var ah = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.f:
					case G.e:
					case G.c:
					case G.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case G.d:
					case G.a: {
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
			const oh = {};
			var ch = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.f:
						case G.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case G.e:
						case G.d:
						case G.b:
						case G.a: {
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
				ih = Object(S.c)({
					error: ah,
					pending: ch
				});
			const dh = {};
			var lh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.e: {
							const {
								key: n,
								commentIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case G.b: {
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
				uh = n("./src/reddit/actions/comment/list.ts");
			const ph = {};
			var fh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ph,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case uh.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case uh.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? kr()(e, n) : e
					}
					default:
						return e
				}
			};
			const bh = {};
			var hh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {}
						}
					}
					case G.b: {
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
			const yh = {};
			var gh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.e:
						case G.b: {
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
							} : Object(Lt.a)(e, n)
						}
						default:
							return e
					}
				},
				mh = Object(S.c)({
					api: ih,
					endMarkers: fh,
					fetchedTokens: hh,
					commentIds: lh,
					loadMore: gh
				}),
				vh = n("./src/reddit/actions/pages/profileModSettings.ts");
			var Eh = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vh.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Oh = Object(S.c)({
					pending: Eh
				}),
				_h = Object(S.c)({
					api: Oh
				});
			const Ih = {};
			var Sh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ih,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const Th = {};
			var wh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Th,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.a:
					case H.d: {
						const {
							listingKey: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case H.b:
					case H.c:
					case H.i:
					case H.f:
					case H.e:
					case H.g: {
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
			const Dh = {};
			var jh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.b:
						case H.f: {
							const {
								listingKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case H.a:
						case H.d:
						case H.c:
						case H.i:
						case H.e:
						case H.g: {
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
				Ah = Object(S.c)({
					error: wh,
					pending: jh
				});
			const Ch = {};
			var Ph = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ch,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.c:
					case H.i:
					case H.e:
					case H.g: {
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
			const Rh = {};
			var Nh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.i:
						case H.c:
						case H.e:
						case H.g: {
							const {
								pageInfo: n,
								listingKey: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : Rh
						}
						default:
							return e
					}
				},
				Lh = Object(S.c)({
					api: Ah,
					ids: Ph,
					pageInfo: Nh
				}),
				kh = n("./src/reddit/constants/posts.ts");
			const xh = {};
			var Uh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.c:
					case Fe.e:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case pu.l: {
						const n = t.payload;
						return n.profile ? {
							...e,
							[n.profile.id]: n.about
						} : e
					}
					case hu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === kh.a.PROFILE);
						return s.length ? s.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: r
						}, e), {
							...e
						}) : e
					}
					case jn.n: {
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
			const Mh = {};
			var Fh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Re.b:
					case Re.f:
					case Ae.g:
					case B.b:
					case B.f:
					case Ae.c:
					case G.b:
					case G.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case xe.b:
					case xe.e:
					case q.PROFILE_POSTS_LOADED:
					case Ue.b:
					case Ne.e:
					case Ne.h:
					case Pe.u:
					case pu.h:
					case fd.b:
					case Fe.e:
					case Y.i:
					case pu.o:
					case V.b:
					case V.e:
					case Q.c:
					case ke.PAGE_LOADED:
					case Wn.e:
					case xr.PAGE_LOADED:
					case W.SUBREDDIT_LOADED:
					case Le.b:
					case Me.b:
					case hu.c:
						return Object(N.merge)(e, t.payload.profiles);
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case F.k: {
						const {
							response: n
						} = t.payload, r = n && n.profiles;
						return Object(N.merge)(e, r)
					}
					case pu.n:
					case pu.l: {
						const {
							profile: n
						} = t.payload;
						return n ? Object(N.merge)(e, {
							[n.id]: n
						}) : e
					}
					case jn.n: {
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
					case jn.l:
					case jn.k: {
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
			const Bh = {};
			var Gh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pu.c:
						case pu.f: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !0
							}
						}
						case pu.a:
						case pu.b:
						case pu.d:
						case pu.e: {
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
				qh = Object(S.c)({
					pending: Gh
				});
			const Hh = {};
			var Qh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pu.b: {
						const {
							profileName: n,
							data: r
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[(n || "").toLowerCase()]: s
						}
					}
					case pu.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g: {
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
			const Wh = {};
			var Vh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pu.e: {
							const {
								pageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case H.c:
						case H.i: {
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
				Yh = Object(S.c)({
					api: qh,
					models: Qh,
					pageInfo: Vh
				});
			const Kh = {};
			var $h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pu.i: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case pu.g:
						case pu.h: {
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
				zh = Object(S.c)({
					pending: $h
				});
			const Xh = {};
			var Jh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pu.h: {
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
				Zh = Object(S.c)({
					api: zh,
					pageInfo: Jh
				}),
				ey = n("./src/reddit/actions/pinnedPost.ts");
			const ty = {};
			var ny = Object(Fb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ty,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ey.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case ey.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-Vt.cb)
						}
					}
					case ey.g: {
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
			}), ty);
			const ry = {};
			var sy = Object(Fb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ry,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ey.a: {
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
			}), ry);
			const ay = {};
			var oy = Object(Fb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ay,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ey.c:
						case ey.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case ey.b:
						case ey.e:
						case ey.d:
						case ey.g: {
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
				}), ay),
				cy = Object(S.c)({
					data: ny,
					initialData: sy,
					pending: oy
				}),
				iy = n("./src/reddit/actions/trophyCase.ts");
			const dy = {};
			var ly, uy, py = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iy.a: {
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
				fy = Object(S.c)({
					about: Uh,
					models: Fh,
					moderated: Yh,
					multireddits: Zh,
					pinnedPosts: cy,
					trophyCases: py
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(ly || (ly = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(uy || (uy = {}));
			var by, hy, yy;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(by || (by = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(hy || (hy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(yy || (yy = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(by || (by = {}));
			Object(Yt.a)("PROMO__SHOW_PROMO"), Object(Yt.a)("PROMO__HIDE_PROMO");
			const gy = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var my = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gy,
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
				vy = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Ey = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: vy.d,
					viewer_streams_refresh: vy.c,
					viewer_streams_refresh_slop: vy.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Oy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ey,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case vy.x: {
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
					case vy.G:
						return {
							...e, isPending: !0
						};
					case vy.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case vy.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var _y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.L:
						return {
							...e, [vy.b]: t.payload.error
						};
					case vy.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case vy.z: {
						const {
							[vy.b]: t, ...n
						} = e;
						return n
					}
					case vy.y: {
						const {
							[t.payload.model.post.id]: n, ...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const Iy = (e, t, n, r) => ({
				...e,
				[t]: {
					...e[t],
					isPending: n,
					...r && {
						utcTimeStamp: r
					}
				}
			});
			var Sy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.N:
						return Iy(e, t.payload, !0);
					case vy.O:
						return Iy(e, vy.b, !0);
					case vy.y:
						return Iy(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case vy.z:
						return Iy(e, vy.b, !1, t.payload.utcTimeStamp);
					case vy.M:
						return Iy(e, t.payload.streamId, !1);
					case vy.L:
						return Iy(e, vy.b, !1);
					default:
						return e
				}
			};
			const Ty = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var wy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ty,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vy.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case vy.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case vy.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				Dy = Object(S.c)({
					config: Oy,
					error: _y,
					pending: Sy,
					recommendedViewerSubreddits: wy
				});
			const jy = {};
			var Ay = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case vy.F:
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
			const Cy = {
				cursor: vy.W,
				timestamps: {},
				visitOrder: []
			};
			var Py = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.P:
						return Cy;
					case vy.X: {
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
						return Ry(e, t.payload.id);
					case vy.E:
						return Ry(e, t.payload);
					case Nd.k: {
						const n = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Ny(e, n)
					}
					case vy.V: {
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
			const Ry = (e, t) => {
					const n = e.visitOrder.indexOf(t);
					if (-1 === n) return e;
					const r = n > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: r
					}
				},
				Ny = (e, t) => {
					const n = e.visitOrder[e.cursor],
						r = new Set(t),
						s = e.visitOrder.filter(e => !r.has(e)),
						a = s.indexOf(n),
						o = a > -1 ? a : Math.max(e.cursor - 1, 0);
					return s.length !== e.visitOrder.length ? {
						...e,
						cursor: o,
						visitOrder: s
					} : e
				},
				Ly = {
					ended: [],
					removed: []
				};

			function ky(e) {
				return [...new Set(e)]
			}
			var xy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ly,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.t:
						return {
							...e, ended: ky(e.ended.concat(t.payload))
						};
					case vy.u:
						return {
							...e, removed: ky(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const Uy = {};
			var My = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.z:
						const {
							listingName: n, models: r
						} = t.payload;
						if (!n) return e;
						const s = r.map(e => e.post.id),
							a = e[n] || [],
							o = [...new Set([...s, ...a])];
						return {
							...e, [n]: o
						};
					default:
						return e
				}
			};
			const Fy = {},
				By = (e, t) => {
					const n = Object.keys(e).reduce((t, n) => ({
						...t,
						[n]: {
							...e[n],
							rank: vy.m
						}
					}), {});
					return t.reduce((e, t, n) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: vy.l - n
						}
					}), n)
				},
				Gy = (e, t) => {
					const n = t.post.id,
						r = e[n] ? e[n].rank : vy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: r
						}
					}
				};
			var qy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.y:
						return Gy(e, t.payload.model);
					case vy.z:
						return By(e, t.payload.models);
					case vy.D: {
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
			const Hy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Qy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case vy.A:
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
			const Wy = {
				reported: []
			};
			var Vy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wy,
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
			const Yy = {
				isIntroFinished: !1
			};
			var Ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const $y = {
				reportedStreams: []
			};
			var zy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $y,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vy.C:
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
				Xy = Object(S.c)({
					api: Dy,
					history: Py,
					hlsStreams: xy,
					listings: My,
					models: qy,
					preloads: Qy,
					reports: Vy,
					theaterSettings: Ky,
					userSettings: zy,
					automuteLevels: Ay
				}),
				Jy = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				Zy = n("./src/reddit/actions/session.ts");
			const eg = [],
				tg = (e, t) => iu()(e, t) ? e : t;
			var ng = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zy.c:
					case Zy.d:
						return eg;
					case Jy.d:
						return tg(e, t.subreddits);
					case Jy.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, Jy.c)
					}
					case Jy.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Jy.c)
					}
					default:
						return e
				}
			};
			const rg = {};
			var sg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Me.b:
							return {
								...e, ...t.payload
							};
						case Me.a:
						default:
							return e
					}
				},
				ag = n("./src/reddit/actions/pages/report/constants.ts");
			var og = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ag.a:
						return t.payload;
					default:
						return e
				}
			};
			var cg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ag.b:
						return t.payload;
					case ag.c:
					case ag.d:
						return !1;
					default:
						return e
				}
			};
			var ig = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ag.d:
						return !0;
					case ag.c:
					case ag.b:
						return !1;
					default:
						return e
				}
			};
			var dg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ag.c:
							return !0;
						case ag.b:
						case ag.d:
							return !1;
						default:
							return e
					}
				},
				lg = Object(S.c)({
					error: cg,
					pending: ig,
					success: dg
				}),
				ug = n("./src/reddit/actions/reportPageRules/constants.ts");
			const pg = [];
			var fg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ug.a:
							return t.payload;
						default:
							return e
					}
				},
				bg = Object(S.c)({
					reportPageApi: lg,
					reportPageRules: fg,
					initialReason: og
				}),
				hg = n("./src/reddit/actions/reportRules.ts");
			const yg = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var gg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hg.b:
						return {
							...e, sitewideRules: t.payload
						};
					case hg.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Yt.a)("REQUEST_HOST_SET");
			var mg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const vg = "RUN_TIME_ENV_VARS__IS_STAGING",
				Eg = (Object(Yt.a)(vg), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var Og = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vg:
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				_g = n("./src/reddit/components/SearchDropdown/index.tsx");
			var Ig = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.g:
						return !0;
					case kc.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = document.getElementById(_g.b), a = document.getElementById(_g.a);
						return !(!r || !((null == s ? void 0 : s.contains(r)) || (null == a ? void 0 : a.contains(r)))) && e
					}
					case Fe.f:
					case kc.a:
					case kc.c:
						return !1;
					default:
						return e
				}
			};
			var Sg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.c:
					case Fe.j: {
						const {
							searchQuery: e
						} = t.payload;
						return e || ""
					}
					default:
						return e
				}
			};
			const Tg = Object.create(null);
			var wg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Fe.i:
						case Fe.h: {
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
				},
				Dg = n("./src/reddit/models/Search/index.ts");
			const jg = {};
			var Ag = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fe.i: {
							const {
								typeaheadSuggestions: n
							} = t.payload, r = {};
							return Object.keys(n).forEach(e => {
								const t = n[e];
								return r[e] = Object(Dg.e)(t)
							}), {
								...e,
								...r
							}
						}
						case Fe.h: {
							const {
								typeaheadSuggestions: n
							} = t.payload, r = {};
							return Object.keys(n).forEach(e => {
								const t = n[e];
								return r[e] = Object(Dg.f)(t)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Cg = Object(S.c)({
					idsByQuery: wg,
					models: Ag
				});
			const Pg = {};
			var Rg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Q.c: {
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
				Ng = Object(S.c)({
					isDropdownOpen: Ig,
					isSubredditSearchEnabled: function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Fe.a:
								return !1;
							case Fe.b:
								return !0;
							default:
								return e
						}
					},
					searchQuery: Sg,
					typeahead: Cg,
					viewTreatment: Rg
				}),
				Lg = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const kg = {};
			var xg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.c: {
						const {
							key: n,
							listingOrder: r,
							postOrder: s,
							posts: a,
							searchQuery: o,
							subreddits: c,
							viewTreatment: i
						} = t.payload, d = {
							subredditIcons: [],
							displayText: null,
							subredditOccurrences: 0,
							searchQuery: o
						};
						if (i === Lg.c.Trending) {
							const e = [];
							if (r && r.map(t => {
									!e.includes(t.id) && c[t.id] && (e.push(t.id), d.subredditIcons.push({
										url: c[t.id].icon.url,
										subredditName: c[t.id].name
									}), d.displayText || (d.displayText = c[t.id].displayText))
								}), s)
								for (let t = 0; t < s.length; t++) {
									const n = a[s[t]],
										r = n && n.belongsTo ? n.belongsTo.id : void 0;
									r && !e.includes(r) && c[r] && (e.push(r), d.subredditIcons.push({
										url: c[r].icon.url,
										subredditName: c[r].name
									}))
								}
							c && (d.subredditOccurrences = Object.keys(c).length - 1)
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
			const Ug = {};
			var Mg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ug,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Q.c: {
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
			const Fg = {};
			var Bg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Q.c: {
							const {
								key: n,
								searchDiscoveryUnitOrder: r
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : Fg
						}
						default:
							return e
					}
				},
				Gg = Object(S.c)({
					headerContent: xg,
					models: Mg,
					order: Bg
				}),
				qg = n("./src/reddit/actions/searchQueryId/index.tsx");
			const Hg = {};
			Object(Yt.a)("SEO__CRAWLER_RECEIVED");
			var Qg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Wg = n("./src/reddit/actions/seo/linksModule.ts");
			const Vg = {};
			var Yg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wg.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Wg.c:
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
				Kg = n("./src/reddit/actions/seo/topicLinks.ts");
			const $g = {};
			var zg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $g,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kg.a:
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
				Xg = Object(S.c)({
					crawler: Qg,
					linksModule: Yg,
					topicLinks: zg
				}),
				Jg = n("./src/reddit/actions/shortcuts/constants.ts");
			var Zg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jg.a:
						return t.payload;
					case l.b:
						return null;
					default:
						return e
				}
			};
			var em = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jg.b:
							return t.payload || null;
						default:
							return e
					}
				},
				tm = n("./src/reddit/constants/shortcuts.ts"),
				nm = n("./src/reddit/helpers/history/index.ts");
			const rm = tm.d.Global,
				sm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(nm.b)(Xu.b.IsOverlay) ? tm.d.Lightbox : tm.d.CommentPage;
						case "rpan":
							return Object(nm.b)(Xu.b.IsOverlay) ? tm.d.Lightbox : rm;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return tm.d.Listing;
						case "modQueuePages":
							return tm.d.Modqueue;
						default:
							return rm
					}
				};
			var am = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return sm(e)
							}
							return rm;
						default:
							return e
					}
				},
				om = Object(S.c)({
					activeCommentId: Zg,
					activePostId: em,
					namespace: am
				});
			var cm = function() {
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
				im = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				dm = Object(S.c)({
					firstFetch: cm,
					models: im.b
				}),
				lm = n("./src/reddit/actions/streaming/modSettings.ts");
			var um = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lm.b:
					case lm.c:
						return null;
					case lm.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var pm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lm.b:
							return !0;
						case lm.c:
						case lm.a:
							return !1;
						default:
							return e
					}
				},
				fm = Object(S.c)({
					error: um,
					pending: pm
				}),
				bm = n("./src/reddit/actions/streaming/constants.ts");
			const hm = {};
			var ym = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bm.a: {
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
				gm = Object(S.c)({
					api: fm,
					modSettings: ym
				}),
				mm = n("./src/reddit/models/StructuredStyles/index.ts");
			const vm = {};
			var Em = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.h:
						case f.b:
						case f.d:
							return t.payload.styles;
						case f.e:
							return vm;
						case f.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case f.k: {
							const e = t.payload;
							return Object(mm.h)(e.styles)
						}
						default:
							return e
					}
				},
				Om = n("./src/reddit/actions/exportImportStyles.ts");
			var _m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Om.c:
					case Om.b:
						return null;
					case Om.a:
						return t.payload;
					default:
						return e
				}
			};
			var Im = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Om.c:
							return !0;
						case Om.b:
						case Om.a:
							return !1;
						default:
							return e
					}
				},
				Sm = Object(S.c)({
					error: _m,
					pending: Im
				}),
				Tm = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				wm = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const Dm = {};
			var jm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.f:
						case Q.c:
						case Fe.e:
						case ke.PAGE_LOADED:
						case xr.PAGE_LOADED: {
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
						case Tm.b: {
							const {
								flairId: n,
								template: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case Tm.a: {
							const {
								flairId: n
							} = t.payload;
							return Object(Lt.a)(e, n)
						}
						case Fp.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(Lt.a)(e, n)
						}
						case f.k:
							return Dm;
						case wm.b: {
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
				Am = Object(S.c)({
					models: jm
				});
			const Cm = {};
			var Pm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cm,
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
						return Cm;
					default:
						return e
				}
			};
			var Rm = function() {
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
			var Nm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.d:
						return t.payload.subredditId;
					case f.e:
						return null;
					case l.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case jn.g:
						return null;
					default:
						return e
				}
			};
			const Lm = {};
			var km = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.f:
						case ke.PAGE_LOADED:
						case xr.PAGE_LOADED: {
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
						case Fe.e:
						case Q.c: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							if (!n.subredditName) return e;
							let r;
							if (Sa()(n.subreddits, (e, t) => {
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
								r = Object(mm.h)(n.styles);
							return {
								...e,
								[n.subredditId]: r
							}
						}
						case pu.l: {
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
						case jn.l: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return _f(e, {
									[n.subredditId]: {
										bannerBackgroundImage: n.imageUrl
									}
								})
							}
							return e
						}
						case jn.k: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return _f(e, {
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
				xm = Object(S.c)({
					draft: Em,
					exportStyles: Sm,
					flairTemplate: Am,
					imagePreviews: Pm,
					isBladeEditorDirty: Rm,
					isEditing: Nm,
					models: km
				});
			Object(Yt.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var Um = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				Mm = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const Fm = {};
			var Bm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mm.c:
					case Mm.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Mm.a: {
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
			const Gm = {};
			var qm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mm.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Mm.b:
						case Mm.a: {
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
				Hm = Object(S.c)({
					error: Bm,
					pending: qm
				});
			const Qm = {};
			var Wm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mm.b: {
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
				Vm = Object(S.c)({
					api: Hm,
					models: Wm
				}),
				Ym = n("./src/reddit/actions/category/constants.ts"),
				Km = n("./src/reddit/actions/subredditMention/constants.ts");
			const $m = {};
			var zm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Km.d:
					case B.b:
					case B.f:
					case Q.c:
					case W.SUBREDDIT_FAILED:
					case W.SUBREDDIT_LOADED:
					case ke.PAGE_LOADED:
					case xr.PAGE_LOADED:
					case G.b:
					case G.e:
					case xe.b:
					case xe.a:
					case xe.e:
					case xe.d:
					case q.PROFILE_POSTS_LOADED:
					case V.b:
					case V.e:
					case Fe.e:
					case hd.TOPIC_DATA_LOADED:
					case vd.v: {
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
					case so.a: {
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
					case hu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === kh.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case ec.g:
					case Ym.f:
					case vd.h:
					case vd.p:
					case ar.B: {
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
					case Y.c: {
						const {
							data: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case Mm.b: {
						const {
							subreddits: n
						} = t.payload, r = n.reduce((e, t) => (t.allowedPostTypes && (e[t.id] = {
							allowedPostTypes: t.allowedPostTypes
						}), e), {});
						return Object(N.merge)(e, r)
					}
					case ee.s: {
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
			const Xm = {};
			var Jm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Y.b:
					case Y.c: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case Y.a: {
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
			var Zm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Y.b:
							return !0;
						case Y.c:
						case Y.a:
							return !1;
						default:
							return e
					}
				},
				ev = Object(S.c)({
					error: Jm,
					pending: Zm
				}),
				tv = n("./src/reddit/actions/subredditCreation.ts");
			const nv = {
				apiError: null
			};
			var rv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tv.b: {
						const {
							error: n
						} = t.payload;
						return {
							...e,
							apiError: n
						}
					}
					case tv.a:
					case tv.c:
					case tv.e:
						return nv;
					default:
						return e
				}
			};
			var sv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tv.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case tv.a:
					case tv.c:
					case tv.e:
						return null;
					default:
						return e
				}
			};
			var av = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tv.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case tv.c:
					case tv.b:
						return null;
					default:
						return e
				}
			};
			var ov = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tv.c:
							return !0;
						case tv.e:
						case tv.b:
							return !1;
						default:
							return e
					}
				},
				cv = Object(S.c)({
					error: rv,
					lastCreatedSubredditId: av,
					initialCrosspost: sv,
					pending: ov
				});
			var iv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vd.x:
							return !0;
						case vd.y:
						case vd.w:
							return !1;
						default:
							return e
					}
				},
				dv = Object(S.c)({
					pending: iv
				});
			const lv = {};
			var uv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Y.l:
					case Y.m: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case Y.k: {
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
			const pv = {};
			var fv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Y.l: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case Y.m:
						case Y.k: {
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
				bv = Object(S.c)({
					error: uv,
					pending: fv
				});
			const hv = {};
			var yv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vd.g:
						case vd.h:
							return {
								...e, [t.payload.key]: !1
							};
						case vd.i:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				gv = Object(S.c)({
					pending: yv
				});
			var mv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Z:
						return t.payload || null;
					case ee.bb:
					case ee.ab:
						return null;
					default:
						return e
				}
			};
			var vv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.bb:
							return !0;
						case ee.ab:
						case ee.Z:
							return !1;
						default:
							return e
					}
				},
				Ev = Object(S.c)({
					error: mv,
					pending: vv
				});
			var Ov = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vd.l: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case vd.n:
					case vd.m:
						return null;
					default:
						return e
				}
			};
			var _v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vd.n:
							return !0;
						case vd.m:
						case vd.l:
							return !1;
						default:
							return e
					}
				},
				Iv = Object(S.c)({
					error: Ov,
					pending: _v
				}),
				Sv = n("./src/reddit/actions/subredditRules/constants.ts");
			var Tv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Sv.c:
							return !0;
						case Sv.a:
						case Sv.b:
							return !1;
						default:
							return e
					}
				},
				wv = n("./src/reddit/actions/subredditSettings.ts");
			var Dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wv.e:
							return !0;
						case wv.f:
						case wv.d:
							return !1;
						default:
							return e
					}
				},
				jv = Object(S.c)({
					pending: Dv
				});
			const Av = {};
			var Cv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Av,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vd.o:
						case vd.p:
							return {
								...e, [t.payload.key]: !1
							};
						case vd.q:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				Pv = Object(S.c)({
					pending: Cv
				}),
				Rv = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const Nv = {};
			var Lv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rv.c:
					case Rv.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Rv.a: {
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
			const kv = {};
			var xv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rv.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Rv.b:
						case Rv.a: {
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
				Uv = Object(S.c)({
					error: Lv,
					pending: xv
				});
			const Mv = {};
			var Fv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mf.c:
					case mf.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case mf.a: {
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
			const Bv = {};
			var Gv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mf.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case mf.b:
						case mf.a: {
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
				qv = Object(S.c)({
					error: Fv,
					pending: Gv
				}),
				Hv = Object(S.c)({
					about: ev,
					create: cv,
					inlineEditing: dv,
					models: bv,
					onboarding: gv,
					productOffers: Ev,
					rankings: Iv,
					rules: Tv,
					settings: jv,
					similar: Pv,
					topContent: qv,
					wiki: Uv
				}),
				Qv = n("./node_modules/lodash/isNil.js"),
				Wv = n.n(Qv);
			const Vv = {};
			var Yv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Y.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: Wv()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				Kv = Object(S.c)({
					meta: Yv
				});
			const $v = {};
			var zv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ym.f: {
						const {
							categoryId: n,
							subredditIds: r
						} = t.payload;
						return Ea()(r) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Xv = {
				pending: !1,
				items: {}
			};
			var Jv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wp.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Wp.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const Zv = {};
			var eE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.c: {
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
				tE = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const nE = {};
			var rE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tE.b:
						case tE.c:
						case tE.a: {
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
				sE = n("./src/reddit/actions/subredditCrosspostable.ts");
			var aE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case sE.c:
					case sE.b:
						return null;
					default:
						return e
				}
			};
			var oE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sE.c:
							return !0;
						case sE.b:
						case sE.a:
							return !1;
						default:
							return e
					}
				},
				cE = Object(S.c)({
					errors: aE,
					pending: oE
				});
			const iE = {};
			var dE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sE.b: {
							const {
								subredditIds: n
							} = t.payload;
							return iu()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				lE = Object(S.c)({
					api: cE,
					ids: dE
				});
			const uE = {};
			var pE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jf.a: {
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
							const o = e[r];
							return _f(o, {
								[s]: a
							}) === o ? e : {
								...e,
								[r]: {
									...o,
									[s]: a
								}
							}
						}
						default:
							return e
					}
				},
				fE = Object(S.c)({
					models: pE
				});
			const bE = {};
			var hE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bE,
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
			const yE = {};
			var gE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yE,
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
					case c.i: {
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
			const mE = {};
			var vE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mE,
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
			const EE = {};
			var OE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EE,
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
				_E = Object(S.c)({
					assets: hE,
					communityRaw: gE,
					distributions: vE,
					releaseNotes: OE
				}),
				IE = n("./node_modules/lodash/isEqualWith.js"),
				SE = n.n(IE),
				TE = n("./src/lib/forceHttps/index.ts");
			const wE = {},
				DE = (e, t) => {
					const n = Object.keys(t);
					return n.length ? n.reduce((n, r) => {
						const s = e[r],
							a = t[r],
							o = s ? {
								...s,
								...a
							} : {
								...a
							};
						return a.icon.url ? o.icon.url = Object(TE.a)(a.icon.url) : s && s.icon.url ? o.icon = s.icon : o.icon.url = "", s && s.allowChatPostCreation && (o.allowChatPostCreation = !0), Object(N.set)(n, r, o)
					}, e) : e
				},
				jE = (e, t) => {
					return !SE()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				AE = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					for (let s = 0; s < n.length; s++) {
						const a = n[s],
							o = e[a],
							c = t[a];
						o && !jE(o, c) || (r[a] = {
							...o,
							...c
						})
					}
					return Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var CE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hu.c:
						return DE(e, t.payload.subreddits || {});
					case Re.b:
					case Re.f:
					case Jy.b:
					case Km.d:
					case Ym.f:
					case Ae.g:
					case ec.g:
					case pd.b:
					case md.b:
					case Ne.e:
					case Ne.h:
					case F.k:
					case Pe.r:
					case Pe.u:
					case pu.h:
					case fd.b:
					case B.b:
					case B.f:
					case Ae.c:
					case Le.b:
					case G.b:
					case G.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case xe.b:
					case xe.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case pu.e:
					case Q.c:
					case W.SUBREDDIT_LOADED:
					case ke.PAGE_LOADED:
					case Wn.e:
					case xr.PAGE_LOADED:
					case pu.o:
					case V.b:
					case V.e:
					case Ue.b:
					case Me.b:
					case Fe.e:
					case Y.c:
					case Y.f:
					case Y.i:
					case vd.a:
					case vd.h:
					case vd.p:
					case hd.TOPIC_DATA_LOADED:
					case hd.MORE_POSTS_LOADED:
					case ar.B:
						return AE(e, t.payload.subreddits || {});
					case F.f:
					case F.i:
					case F.m:
					case F.p:
					case F.v: {
						const {
							response: n
						} = t.payload, {
							subreddits: r
						} = n;
						return AE(e, r)
					}
					case Pe.B: {
						const {
							subreddits: n
						} = t.payload;
						return {
							...n,
							...e
						}
					}
					case c.g: {
						const n = t.payload;
						return AE(e, n)
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
					case wv.f: {
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
					case Mm.b: {
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
						return Object(N.merge)(e, s)
					}
					default:
						return e
				}
			};
			var PE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Y.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Y.g:
					case Y.f:
						return null;
					default:
						return e
				}
			};
			var RE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Y.g:
					case Y.f:
						return !0;
					case Y.e:
						return !1;
					default:
						return e
				}
			};
			var NE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Y.g:
							return !0;
						case Y.f:
						case Y.e:
							return !1;
						default:
							return e
					}
				},
				LE = Object(S.c)({
					errors: PE,
					fetched: RE,
					pending: NE
				});
			var kE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Y.f: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						default:
							return e
					}
				},
				xE = Object(S.c)({
					api: LE,
					order: kE
				});
			const UE = {};
			var ME = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wv.a: {
						const n = t.payload;
						return Object(N.merge)(e, n)
					}
					case wv.b: {
						const {
							subredditId: n,
							notificationSettings: r
						} = t.payload;
						return Object(N.merge)(e, {
							[n]: r
						})
					}
					default:
						return e
				}
			};
			const FE = {};
			var BE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vd.h: {
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
			const GE = {};
			var qE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.pb: {
						const {
							recentSupporters: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case ee.T: {
						const {
							subredditId: n,
							powerupsCount: r,
							user: s
						} = t.payload;
						if (r > 0) {
							const t = {
								score: r,
								lastSupportedAt: (new Date).toString(),
								supporterInfo: {
									id: s.id,
									displayName: Object($.e)(s),
									icon: {
										url: s.accountIcon
									},
									profile: {
										isNsfw: s.isNSFW
									}
								}
							};
							return {
								...e,
								[n]: [t, ...e[n]]
							}
						}
						return e
					}
					default:
						return e
				}
			};
			const HE = {};
			var QE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case ee.qb:
					case ee.pb: {
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
					case ee.T: {
						const {
							subredditId: r,
							powerupsCount: s
						} = t.payload;
						if (e[r] && s > 0) {
							const t = e[r],
								a = t.tier + 1,
								o = t.tiersInfo[a - 1],
								c = o && o.benefits;
							return {
								...e,
								[r]: {
									...e[r],
									benefits: c || (null === (n = e[r]) || void 0 === n ? void 0 : n.benefits),
									count: t.count + s,
									supportersCount: t.supportersCount + 1
								}
							}
						}
						return e
					}
					default:
						return e
				}
			};
			const WE = {},
				VE = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = Ba(n, t),
						o = [...s, a];
					return {
						...e,
						[t]: {
							...r,
							emotes: o
						}
					}
				},
				YE = (e, t, n) => {
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
			var KE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: Ga(n)
						}
					}
					case Fa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: VE(s, n, r)
						}
					}
					case Fa.c: {
						const {
							subredditId: n,
							emojiId: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: YE(s, n, r)
						}
					}
					default:
						return e
				}
			};
			const $E = {},
				zE = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var XE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: n,
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: n.sort(zE)
							}
						}
						case ee.T: {
							const {
								subredditId: n,
								powerupsCount: r,
								user: s,
								isAnonymous: a
							} = t.payload;
							if (!e[n] && r < 0) return e;
							let o = !1;
							const c = e[n].map(e => {
								var t;
								return a && !e.supporterInfo || !a && (null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.id) === s.id ? (o = !0, {
									...e,
									lastSupportedAt: r > 0 ? (new Date).toString() : e.lastSupportedAt,
									score: e.score + r
								}) : e
							}).filter(e => e.score > 0);
							if (o) return {
								...e,
								[n]: c.sort(zE)
							};
							if (r > 0) {
								const t = {
									score: r,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: a ? null : {
										id: s.id,
										displayName: Object($.e)(s),
										icon: {
											url: s.accountIcon
										},
										profile: {
											isNsfw: s.isNSFW
										}
									}
								};
								return {
									...e,
									[n]: [t, ...e[n]].sort(zE)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				JE = n("./src/lib/makeProductOfferKey/index.ts");
			const ZE = {};
			var eO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.ab:
					case ee.pb: {
						const {
							subredditId: n,
							productOffers: r
						} = t.payload;
						if (!(null == r ? void 0 : r.length)) return e;
						const s = r.reduce((e, t) => {
							const r = Object(JE.a)(t.type, n);
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
			const tO = {};
			var nO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tO,
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
				rO = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const sO = {},
				aO = e => e.filter(e => {
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
						return rO.e.includes(t)
					})
				});
			var oO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vd.z: {
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
						const s = aO(r.cards);
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
			const cO = {};
			var iO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case vd.z: {
						const {
							id: n,
							questions: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Ae.g:
					case Ae.c: {
						const {
							subreddits: r
						} = t.payload, s = {};
						for (const e of Object.keys(r)) {
							const t = r[e];
							((null === (n = t.answerableQuestions) || void 0 === n ? void 0 : n.length) || 0) > 0 && (s[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(s).length ? e : Object(N.assign)(e, s)
					}
					case vd.d: {
						const {
							subredditId: n,
							questionId: s
						} = t.payload, a = null !== (r = e[n]) && void 0 !== r ? r : [];
						return Object(N.setIn)(e, [n], a.filter(e => e.id !== s))
					}
					case vd.e:
						return cO;
					default:
						return e
				}
			};
			const dO = {};
			var lO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vd.b: {
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
			const uO = {};
			var pO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vd.c: {
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
				fO = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const bO = {};
			var hO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fO.a: {
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
			const yO = {};
			var gO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sv.b: {
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
					case Sv.e: {
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
					case Sv.f: {
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
					case Sv.g:
					case Sv.d: {
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
			const mO = {};
			var vO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wv.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case wv.f: {
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
					case jn.n: {
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
			const EO = {};
			var OO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vd.p: {
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
			const _O = {};
			var IO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vd.z: {
						const {
							id: n,
							survey: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case vd.A: {
						const {
							id: n,
							response: r
						} = t.payload, s = Object(N.setIn)(e, [n, "response"], r);
						return Object(N.setIn)(s, [n, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const SO = {};
			var TO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ec.g: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case mf.b: {
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
			const wO = [];
			var DO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ae.c:
					case W.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: n
						} = t.payload;
						return n && n.length ? n : e
					}
					default:
						return e
				}
			};
			const jO = {};
			var AO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Km.d:
						case ar.B:
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
				CO = Object(S.c)({
					about: zm,
					api: Hv,
					appliedFilters: Kv,
					byCategory: zv,
					carousel: Jv,
					communityInfo: eE,
					countrySiteSettings: rE,
					crosspostable: lE,
					duplicates: fE,
					gov: _E,
					models: CE,
					moderated: xE,
					notificationSettings: ME,
					onboarding: BE,
					powerupRecentSupporters: qE,
					powerups: QE,
					powerupsEmojis: KE,
					powerupTopSupporters: XE,
					productOffers: eO,
					products: nO,
					progressModule: oO,
					questions: iO,
					rankings: lO,
					rankingsPageInfo: pO,
					related: hO,
					rules: gO,
					settings: vO,
					similar: OO,
					survey: IO,
					topContent: TO,
					trending: DO,
					unavailableModels: AO
				});
			const PO = {};
			var RO = Object(Fb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED: {
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
							return Se()({
								...e
							}, s)
						}
						case Nd.o: {
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
				}), PO),
				NO = Object(S.c)({
					data: RO
				}),
				LO = n("./node_modules/lodash/values.js"),
				kO = n.n(LO);
			const xO = [];
			var UO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hu.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = uu(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case Pe.u: {
						const {
							multireddits: e
						} = t.payload;
						return kO()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case hu.e: {
						const {
							follow: n,
							multiredditPath: r
						} = t.payload;
						return n ? e : e.filter(e => e !== r)
					}
					case Pe.j: {
						const n = t.payload;
						return e.filter(e => e !== n)
					}
					default:
						return e
				}
			};
			var MO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case hu.b:
					case hu.c:
						return null;
					default:
						return e
				}
			};
			var FO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hu.b:
					case hu.c:
						return !0;
					case hu.a:
						return !1;
					default:
						return e
				}
			};
			var BO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hu.b:
							return !0;
						case hu.c:
						case hu.a:
							return !1;
						default:
							return e
					}
				},
				GO = Object(S.c)({
					errors: MO,
					fetched: FO,
					pending: BO
				});
			const qO = [];
			var HO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hu.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case hu.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== kh.a.PROFILE) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = uu(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case hu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === kh.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const QO = [];
			var WO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case hu.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== kh.a.SUBREDDIT) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = uu(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case hu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === kh.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const VO = [],
				YO = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var KO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.u: {
							const {
								multireddits: n
							} = t.payload, r = kO()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(YO(n));
							return iu()(e, r) ? e : r
						}
						case Le.b: {
							const {
								account: n,
								multireddits: r,
								multiredditsByUser: s,
								multiredditsModelsState: a
							} = t.payload;
							if (!n) return e;
							const o = s[n.id];
							if (!o || !o.length) return e;
							const c = {
									...a,
									...r
								},
								i = lu()(e, o).sort(YO(c));
							return iu()(e, i) ? e : i
						}
						case hu.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(YO(s)) : e.filter(e => e !== r)
						}
						case Pe.j: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						case Pe.g:
						case Pe.m: {
							const {
								multireddit: n,
								multiredditsModelsState: r
							} = t.payload, s = {
								...r,
								[n.url]: n
							};
							return [...e, n.url].sort(YO(s))
						}
						default:
							return e
					}
				},
				$O = n("./node_modules/lodash/difference.js"),
				zO = n.n($O);
			const XO = [];
			var JO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pu.p: {
						const {
							profileOrder: n
						} = t.payload;
						return Jf()([...e, ...n])
					}
					case hu.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case hu.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === kh.a.PROFILE);
						if (!a.length) return e;
						const o = a.map(e => e.id);
						return s ? Jf()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : zO()(e, o)
					}
					default:
						return e
				}
			};
			const ZO = [];
			var e_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pu.p: {
							const {
								subredditOrder: n
							} = t.payload;
							return Jf()([...e, ...n])
						}
						case hu.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case hu.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === kh.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const o = a.map(e => e.id);
							return s ? Jf()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : zO()(e, o)
						}
						default:
							return e
					}
				},
				t_ = Object(S.c)({
					api: GO,
					favoriteMultiOrder: UO,
					favoriteProfileOrder: HO,
					favoriteSubredditOrder: WO,
					multiredditOrder: KO,
					profileOrder: JO,
					subredditOrder: e_
				}),
				n_ = n("./src/reddit/actions/survey/constants.ts");
			var r_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n_.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var s_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n_.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var a_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n_.b:
						return !e;
					default:
						return e
				}
			};
			var o_ = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n_.i:
							return !e;
						default:
							return e
					}
				},
				c_ = Object(S.c)({
					activeDemoTrigger: r_,
					demoTriggerThreshold: s_,
					isDemoEnabled: a_,
					isSampleFactorEnabled: o_
				});
			var i_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kt.a:
							const {
								hasUnreadMessages: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				d_ = n("./src/reddit/actions/tags/constants.ts");
			const l_ = {
				pending: !1,
				error: !1
			};
			var u_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d_.l:
						return {
							...e, pending: !0
						};
					case d_.m:
						return {
							error: !1, pending: !1
						};
					case d_.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const p_ = {
				pending: !1,
				error: !1
			};
			var f_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d_.o:
						return {
							...e, pending: !0
						};
					case d_.p:
						return {
							error: !1, pending: !1
						};
					case d_.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const b_ = {
				pending: !1,
				error: !1
			};
			var h_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d_.t:
						return {
							...e, pending: !0
						};
					case d_.s:
					case d_.r:
					case d_.e:
					case d_.j:
						return {
							error: !1, pending: !1
						};
					case d_.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const y_ = {
				pending: !1,
				error: !1
			};
			var g_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d_.v:
						return {
							...e, pending: !0
						};
					case d_.w:
						return {
							error: !1, pending: !1
						};
					case d_.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const m_ = {
				pending: !1,
				error: !1
			};
			var v_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d_.g:
							return {
								...e, pending: !0
							};
						case d_.h:
							return {
								error: !1, pending: !1
							};
						case d_.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				E_ = Object(S.c)({
					create: u_,
					deleteTag: f_,
					fetch: h_,
					update: g_,
					updatePrimaryTag: v_
				});
			const O_ = {
				global: [],
				recommendedGlobal: []
			};
			var __ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d_.w:
						case d_.r:
						case d_.e:
						case d_.j: {
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
				I_ = n("./node_modules/lodash/uniqWith.js"),
				S_ = n.n(I_),
				T_ = n("./src/reddit/models/Option/index.ts");
			const w_ = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var D_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d_.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: S_()([...e.selectedOptions || [], {
									...n
								}], T_.a)
							}
						}
						case d_.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(T_.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case d_.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case d_.a: {
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
				j_ = n("./src/reddit/helpers/tags/index.ts");
			const A_ = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var C_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d_.j: {
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
						case d_.w:
						case d_.s:
						case d_.r: {
							const {
								primaryTag: n,
								globalSubredditTags: r,
								subredditScopedTags: s,
								itemTags: a,
								suggestedItemTags: o,
								subredditId: c,
								geoPlace: i
							} = t.payload, d = {
								...e.subredditPrimaryTagId
							};
							return n ? d[c] = n.tag.id : delete d[c], {
								subredditPrimaryTagId: d,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[c]: {
										...e.subredditScopedTags[c] || {},
										...s[c] || {}
									}
								},
								itemTags: {
									...e.itemTags,
									[c]: {
										...a[c] || {}
									}
								},
								geoPlaces: i ? Object(N.set)(e.geoPlaces, c, i) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[c]: {
										...o[c] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[c]: Object(j_.a)(a[c] || {})
								}
							}
						}
						case d_.p: {
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
						case d_.e: {
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
						case d_.h: {
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
				P_ = n("./src/reddit/reducers/tags/selected/index.ts"),
				R_ = Object(S.c)({
					api: E_,
					availableGlobalTagOrder: __,
					models: C_,
					selected: P_.b,
					creation: D_
				}),
				N_ = n("./src/reddit/actions/redditEmbed.ts"),
				L_ = n("./src/reddit/actions/theme.ts"),
				k_ = n("./src/reddit/actions/users.ts"),
				x_ = n("./src/reddit/models/Theme/index.ts");
			const U_ = {
				current: x_.c,
				cached: {}
			};
			var M_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L_.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? x_.b : x_.c,
								cached: {}
							}
						}
						case Dn.b:
						case Dn.c:
						case Dn.k:
						case Dn.l:
						case Dn.g:
						case Dn.a:
						case Dn.m:
						case Re.b:
						case Re.f:
						case Ne.e:
						case Ne.h:
						case B.a:
						case B.e:
						case B.b:
						case B.f:
						case B.d:
						case B.h:
						case Ae.c:
						case W.SUBREDDIT_LOADED:
						case Le.b:
						case Le.a:
						case Ae.g:
						case N_.b:
						case Y.i:
						case Fe.e:
						case Q.c:
						case jn.j:
						case ke.PAGE_LOADED:
						case xr.PAGE_LOADED:
						case k_.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: x_.b,
									cached: {}
								} : {
									current: x_.c,
									cached: {}
								}
							}
							return e;
						case G.d:
						case G.e:
						case xe.a:
						case xe.b:
						case xe.d:
						case xe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED: {
							const {
								account: n
							} = t.payload;
							return n ? n.nightmode ? {
								current: x_.b,
								cached: {}
							} : {
								current: x_.c,
								cached: {}
							} : e
						}
						case F.h:
						case F.j:
						case F.i:
						case F.g:
						case F.f:
						case F.n:
						case F.m:
						case F.p:
						case F.q:
						case F.w:
						case F.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: x_.b,
									cached: {}
								} : {
									current: x_.c,
									cached: {}
								}
							}
							return e;
						case jn.i: {
							if (!t.payload) return e;
							const {
								nightmode: n
							} = t.payload;
							return n ? {
								current: x_.b,
								cached: {}
							} : {
								current: x_.c,
								cached: {}
							}
						}
						case f.d:
							return {
								current: x_.c, cached: {}
							};
						case f.e:
							return t.payload.nightmodeTempUpdated ? {
								current: x_.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				F_ = n("./src/reddit/actions/toaster.ts");
			const B_ = [];
			var G_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F_.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case F_.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				q_ = n("./src/reddit/actions/tooltip.ts");
			var H_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case q_.c:
						case q_.b:
						case q_.e:
						case q_.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				Q_ = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var W_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case q_.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case q_.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case q_.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case q_.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case ee.J:
						case q_.d:
						case l.b:
						case kc.b:
						case kc.c:
						case kc.a:
							return t.type === l.b && e === Q_.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				V_ = Object(S.c)({
					params: H_,
					tooltipId: W_
				}),
				Y_ = n("./src/reddit/actions/tracing.ts");
			const K_ = {
				traceId: void 0
			};
			var $_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Y_.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				z_ = n("./src/lib/asyncActions/index.ts"),
				X_ = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const J_ = Object(z_.c)(X_.c.requestedActionType, X_.c.succeededActionType, X_.c.failedActionType),
				Z_ = Object(z_.c)(X_.a.requestedActionType, X_.a.succeededActionType, X_.a.failedActionType),
				eI = Object(z_.c)(X_.d.requestedActionType, X_.d.succeededActionType, X_.d.failedActionType);
			var tI = Object(S.c)({
					load: J_,
					execute: Z_,
					send: eI
				}),
				nI = n("./src/reddit/actions/tracking.ts");
			const rI = {};
			var sI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nI.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case nI.b: {
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
				aI = Object(S.c)({
					reCaptchaEnterprise: tI,
					viewportDataLoaded: sI
				}),
				oI = n("./src/reddit/actions/trafficStats/constants.ts");
			var cI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oI.c:
						return !0;
					case oI.b:
					case oI.a:
						return !1;
					default:
						return e
				}
			};
			var iI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case oI.c:
							return null;
						default:
							return e
					}
				},
				dI = Object(S.c)({
					pending: cI,
					trafficStats: iI
				});
			var lI = function() {
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
			var uI = function() {
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
				pI = Object(S.c)({
					error: lI,
					pending: uI
				});
			var fI = function() {
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
			var bI = function() {
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
			var hI = function() {
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
				yI = Object(S.c)({
					api: pI,
					contentId: fI,
					initialRecipient: bI,
					publicAddress: hI
				}),
				gI = Object(S.c)({
					communityPoints: yI
				}),
				mI = n("./src/reddit/actions/search/trending.ts");
			const vI = {};
			var EI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case mI.a: {
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
				OI = Object(S.c)({
					models: EI
				});
			var _I = n("./src/reddit/routes/premium/index.ts");
			const II = {};
			var SI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : II,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iy.a: {
							const {
								trophies: n
							} = t.payload;
							return Object.values(n).forEach(e => {
								"t6_bf" === e.awardId && (e.url = _I.b)
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				TI = n("./src/reddit/actions/upload.ts"),
				wI = n("./src/reddit/models/Upload/index.ts");
			const DI = {};
			var jI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TI.d: {
							const {
								key: n,
								id: r,
								file: s
							} = t.payload, a = e[n], o = a && a.file === s ? {
								...a.metadata
							} : {};
							return {
								...e,
								[n]: {
									key: n,
									id: r,
									file: s,
									metadata: o,
									url: void 0,
									status: wI.a.PENDING
								}
							}
						}
						case TI.h: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: wI.a.UPLOADING
								}
							}
						}
						case TI.c: {
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
						case TI.e: {
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
						case TI.g: {
							const {
								key: n,
								url: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: wI.a.SUCCESS,
									url: r
								}
							}
						}
						case TI.b: {
							const {
								key: n,
								error: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: wI.a.FAILED,
									error: r
								}
							}
						}
						case TI.a: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: wI.a.CANCELED
								}
							}
						}
						case TI.f: {
							const {
								key: n
							} = t.payload, r = e[n];
							return r.metadata.localUrl && window.URL.revokeObjectURL(r.metadata.localUrl), kr()(e, n)
						}
						default:
							return e
					}
				},
				AI = n("./src/reddit/actions/upvotePrompt.ts");
			var CI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case AI.a:
						return ++e;
					default:
						return e
				}
			};
			const PI = {};

			function RI(e, t) {
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
			var NI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.d:
					case i.a:
					case c.f:
					case i.t: {
						const {
							wallet: n
						} = t.payload;
						return RI(e, n)
					}
					case i.w: {
						const n = t.payload,
							r = {
								...e
							};
						return Object.keys(n).forEach(t => {
							const s = n[t],
								a = e[t],
								o = {
									latest: a ? a.latest.at <= s.at ? s : a.latest : s,
									byDate: {
										...a ? a.byDate : {},
										[s.at]: s
									}
								};
							r[t] = o
						}), r
					}
					default:
						return e
				}
			};
			Object(Yt.a)("INBOX__COUNT_UPDATE");
			var LI = n("./src/reddit/actions/pages/appeal/constants.ts"),
				kI = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				xI = n("./src/reddit/actions/sso/constants.ts"),
				UI = n("./src/reddit/endpoints/profile/info.ts");
			const MI = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || iu()(r, t)) return e;
				const {
					karma: s
				} = t;
				return {
					...t,
					karma: {
						...UI.a,
						...null == r ? void 0 : r.karma,
						...s
					},
					gender: n
				}
			};
			var FI = Object(Fb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case LI.a:
					case LI.b:
					case ag.b:
					case ag.c:
					case Dn.b:
					case Dn.c:
					case Dn.g:
					case Dn.a:
					case Dn.k:
					case Dn.l:
					case Dn.m:
					case Ne.e:
					case Ne.h:
					case Ne.g:
					case Pe.q:
					case Pe.r:
					case B.a:
					case B.e:
					case B.b:
					case B.f:
					case Ae.a:
					case Ae.c:
					case Le.a:
					case Le.b:
					case W.SUBREDDIT_FAILED:
					case pu.n:
					case G.b:
					case G.a:
					case G.e:
					case G.d:
					case H.c:
					case H.i:
					case xe.e:
					case xe.d:
					case xe.b:
					case xe.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case W.SUBREDDIT_LOADED:
					case Q.a:
					case Q.c:
					case ke.PAGE_LOADED:
					case xr.PAGE_LOADED:
					case Fe.c:
					case Fe.e:
					case N_.a:
					case N_.b:
					case jn.j:
					case kI.b:
					case k_.c:
					case hd.TOPIC_DATA_LOADED:
						return MI(e, t.payload.account);
					case k_.o:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case F.h:
					case F.e:
					case F.l:
					case F.o:
					case F.u: {
						const {
							response: n
						} = t.payload;
						return n ? MI(e, n.account) : e
					}
					case k_.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case r.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case jn.l:
					case jn.k: {
						const n = t.payload;
						return e && "profileIcon" === n.key ? {
							...e,
							accountIcon: n.imageUrl
						} : e
					}
					case ee.B:
					case pu.j: {
						const {
							coins: n
						} = t.payload;
						return e ? {
							...e,
							coins: n
						} : e
					}
					case pu.m: {
						const {
							userName: n,
							karma: r
						} = t.payload;
						return n.toLowerCase() !== (e && Object($.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...UI.a,
								...null == e ? void 0 : e.karma,
								...r
							}
						}
					}
					case Ce.A: {
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
					case up.q: {
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
					case xI.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case xI.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case zc.SAVE_USERNAME_SUCCESS: {
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
					case Uu.a:
					case Uu.b: {
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
					case k_.l: {
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
			var BI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k_.n:
					case k_.o:
						return null;
					case k_.m:
						return t.payload;
					default:
						return e
				}
			};
			var GI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k_.n:
							return !0;
						case k_.o:
						case k_.m:
							return !1;
						default:
							return e
					}
				},
				qI = Object(S.c)({
					error: BI,
					pending: GI
				}),
				HI = Object(S.c)({
					api: qI
				});
			var QI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k_.j:
						return !0;
					default:
						return e
				}
			};
			var WI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k_.i:
							return !0;
						case k_.j:
						case k_.h:
							return !1;
						default:
							return e
					}
				},
				VI = Object(S.c)({
					pending: WI,
					emailSent: QI
				}),
				YI = Object(S.c)({
					api: VI
				}),
				KI = Object(S.c)({
					changeEmail: HI,
					sendResetEmail: YI
				}),
				$I = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const zI = {};
			var XI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case It.f:
						return {
							...e, new: $I.a.pending
						};
					case It.d:
						return {
							...e, new: $I.a.error
						};
					case It.e:
						return {
							...e, new: $I.a.waitingForRequest
						};
					case It.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: $I.a.pending
						}
					}
					case It.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: $I.a.error
						}
					}
					case It.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: $I.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const JI = [];
			var ZI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case It.e:
							return [t.payload, ...e];
						case It.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case jn.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				eS = Object(S.c)({
					api: XI,
					data: ZI
				}),
				tS = n("./src/reddit/actions/chat/constants.ts"),
				nS = n("./src/reddit/actions/chat/userSettings.ts");
			const rS = tS.a.anybody;
			var sS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nS.a:
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
				aS = Object(S.c)({
					invitePolicy: sS
				});
			const oS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var cS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ke.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && iu()(e, n) ? e : {
							...e,
							...n
						}
					}
					case ar.P: {
						const {
							response: {
								draftsCount: n
							}
						} = t.payload;
						return oS(e, n)
					}
					case Wn.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return oS(e, n.length)
					}
					case Wn.c:
					case Wn.l: {
						const {
							draftsCount: n
						} = t.payload;
						return oS(e, n)
					}
					default:
						return e
				}
			};
			const iS = {};
			var dS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fo.a: {
							const e = t.payload.experimentVariants;
							return Wu(e)
						}
						default:
							return e
					}
				},
				lS = n("./src/reddit/actions/global/constants.ts");
			const uS = {};
			var pS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lS.a: {
							const n = t.payload;
							return null === n.local_persisted_experiments_store || void 0 === n.local_persisted_experiments_store ? e : n.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				fS = Object(S.c)({
					byName: dS,
					localPersisted: pS
				});
			var bS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jn.f:
						return !0;
					case jn.e:
						return !1;
					default:
						return e
				}
			};
			var hS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jn.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const yS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var gS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k_.b:
							return t.payload;
						default:
							return e
					}
				},
				mS = n("./src/reddit/actions/notifications/constants.ts"),
				vS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var ES = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vS.a:
					case vS.d:
					case vS.h:
					case mS.a:
						return t.payload && t.payload.error || null;
					case vS.c:
					case vS.f:
					case vS.j:
					case mS.c:
					case mS.b:
						return null;
					default:
						return e
				}
			};
			var OS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mS.c:
						return !1;
					case mS.b:
						return !0;
					default:
						return e
				}
			};
			var _S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mS.c:
						case vS.j:
							return !0;
						case mS.b:
						case mS.a:
						case vS.i:
						case vS.h:
							return !1;
						default:
							return e
					}
				},
				IS = Object(S.c)({
					error: ES,
					loaded: OS,
					pending: _S
				});
			var SS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case mS.f:
					case mS.e:
						return null;
					default:
						return e
				}
			};
			var TS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mS.f:
						return !1;
					case mS.e:
						return !0;
					default:
						return e
				}
			};
			var wS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mS.f:
							return !0;
						case mS.e:
						case mS.d:
							return !1;
						default:
							return e
					}
				},
				DS = Object(S.c)({
					error: SS,
					loaded: TS,
					pending: wS
				}),
				jS = Object(S.c)({
					getPreferences: IS,
					setPreferences: DS
				});
			const AS = {
				byId: {},
				allIds: []
			};
			var CS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case vS.g: {
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
			const PS = {
				byId: {},
				allIds: []
			};
			var RS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vS.b: {
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
				NS = Object(S.c)({
					sections: RS,
					rows: CS
				}),
				LS = n("./src/lib/notifications/constants.ts");
			var kS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case LS.j:
						return !0;
					case LS.b:
					case LS.d:
					case LS.e:
						return !1;
					default:
						return e
				}
			};
			const xS = {
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
			var US = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mS.b:
					case mS.f:
					case mS.d: {
						const {
							preferences: n
						} = t.payload;
						return Ea()(n) ? e : n
					}
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
					case vS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case vS.g: {
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
						case vS.e: {
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
				qS = Object(S.c)({
					sections: GS,
					rows: FS
				});
			var HS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const QS = [];
			var WS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case vS.k: {
							if (!t.payload) return [];
							const n = t.payload && t.payload.subredditId,
								r = t.payload && t.payload.notificationLevel,
								s = e.findIndex(e => e.id === n);
							return -1 === s ? e : [...e.slice(0, s), {
								...e[s],
								notificationLevel: r
							}, ...e.slice(s + 1)]
						}
						default:
							return e
					}
				},
				VS = Object(S.c)({
					subreddits: WS,
					pageInfo: HS
				}),
				YS = Object(S.c)({
					api: jS,
					subscribedSubredditsSettings: VS,
					emailSettingsLayout: NS,
					isNotificationPromptVisible: kS,
					preferences: US,
					pushSettingsLayout: qS
				});
			const KS = {};
			var $S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.i:
					case et.h: {
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
			const zS = {},
				XS = (e, t) => `${e}_${t||new Date}`;
			var JS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Ab: {
						const n = t.payload.powerups;
						if (n) {
							const {
								allocation: t
							} = n, r = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[XS(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...r
							}
						}
						return e
					}
					case ee.pb: {
						const {
							userPowerups: n
						} = t.payload, r = ((null == n ? void 0 : n.allocation) || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
							...e,
							[XS(t.subredditInfo.id, t.allocatedAt)]: t
						}), {});
						return {
							...e,
							...r
						}
					}
					case ee.S: {
						const {
							subredditId: n,
							powerupsCount: r,
							allocatedAt: s
						} = t.payload;
						if (r < 0) {
							const t = XS(n, s),
								a = e[t];
							if (a && a.isPremium) return {
								...e,
								[t]: {
									...a,
									powerups: a.powerups + r,
									isActive: !1,
									isDeallocationAllowed: !1
								}
							}
						}
						return e
					}
					case ee.O: {
						const {
							subredditId: n,
							allocatedAt: r
						} = t.payload, s = XS(n, r), a = e[s];
						return a && !a.isPremium ? {
							...e,
							[s]: {
								...a,
								isActive: !1,
								isDeallocationAllowed: !1
							}
						} : e
					}
					default:
						return e
				}
			};
			var ZS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Ab: {
						const n = t.payload.powerups;
						return n ? kr()({
							...e,
							...n
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: n
						} = t.payload;
						return n ? kr()({
							...e,
							...n
						}, "allocation") : e
					}
					case ee.S: {
						const {
							powerupsCount: n
						} = t.payload;
						if (n < 0) {
							const t = Math.max((e.freeCount || 0) - n, 0);
							if (e) return {
								...e,
								freeCount: t
							}
						}
						return e
					}
					case ee.T: {
						const {
							powerupsCount: n
						} = t.payload;
						if (n > 0) {
							const t = Math.max((e.freeCount || 0) - n, 0);
							if (e) return {
								...e,
								freeCount: t
							}
						}
						return e
					}
					default:
						return e
				}
			};
			var eT, tT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.zb:
						case ee.Bb:
							return !1;
						case ee.Ab:
							return !0;
						default:
							return e
					}
				},
				nT = Object(S.c)({
					allocationByKey: JS,
					data: ZS,
					fetched: tT
				}),
				rT = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(eT || (eT = {}));
			const sT = {
				status: eT.UNFETCHED,
				subscriptions: []
			};
			var aT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: eT.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: eT.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: eT.FAILED
						};
					default:
						return e
				}
			};
			var oT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k_.d:
						return t.payload;
					default:
						return e
				}
			};
			var cT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zy.a:
					case Zy.b:
					case Zy.c:
					case Zy.e:
						return t.payload;
					case Zy.d:
						return null;
					default:
						return e
				}
			};
			var iT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zy.f:
						return !0;
					default:
						return e
				}
			};
			var dT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k_.k:
						return t.payload;
					default:
						return e
				}
			};
			var lT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fo.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var uT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fo.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				pT = Object(S.c)({
					isEmployee: lT,
					isLoggedIn: uT
				});
			var fT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jn.r: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && iu()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				bT = n("./src/reddit/actions/userWhitelist.ts");
			const hT = {};
			var yT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bT.e:
						return {
							...e, new: $I.a.pending
						};
					case bT.d:
						return {
							...e, new: $I.a.error
						};
					case bT.f:
						return {
							...e, new: $I.a.waitingForRequest
						};
					case bT.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: $I.a.pending
						}
					}
					case bT.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: $I.a.error
						}
					}
					case bT.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: $I.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const gT = [];
			var mT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bT.f:
							return [t.payload, ...e];
						case bT.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case jn.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				vT = Object(S.c)({
					api: yT,
					data: mT
				}),
				ET = Object(S.c)({
					account: FI,
					accountSettings: KI,
					blocked: eS,
					chatSettings: aS,
					drafts: cS,
					experiments: fS,
					isCustomizeFlyoutShowing: bS,
					topContentDismissalPrefsSet: fT,
					language: hS,
					loid: gS,
					notificationPrefs: YS,
					ownedBadges: $S,
					powerups: nT,
					prefs: rT.c,
					productOfferSubscriptions: aT,
					reddaid: oT,
					session: cT,
					sessionRefreshFailed: iT,
					sessionTracker: dT,
					temporaryGQL: pT,
					wallets: NI,
					whitelist: vT
				});
			var OT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kI.a:
						return t.payload || null;
					case kI.b:
					case kI.c:
						return null;
					default:
						return e
				}
			};
			var _T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kI.c:
						return !0;
					case kI.b:
					case kI.a:
						return !1;
					default:
						return e
				}
			};
			var IT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kI.b:
						return !0;
					case kI.a:
					case kI.c:
						return !1;
					default:
						return e
				}
			};
			var ST = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kI.b:
							return t.payload.userDataExportEligibility;
						case kI.a:
						case kI.c:
							return !1;
						default:
							return e
					}
				},
				TT = Object(S.c)({
					error: OT,
					pending: _T,
					success: IT,
					userDataExportEligibility: ST
				}),
				wT = Object(S.c)({
					userDataRequestPageApi: TT
				});
			const DT = {};
			var jT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k_.g:
					case k_.f: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case k_.e: {
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
			var AT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k_.g:
							return !0;
						case k_.f:
						case k_.e:
							return !1;
						default:
							return e
					}
				},
				CT = Object(S.c)({
					error: jT,
					pending: AT
				});
			const PT = {};
			var RT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case et.e: {
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
					case et.b: {
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
					case et.a: {
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
					case c.a: {
						const {
							badge: n,
							currentAppliedBadges: r,
							placement: s,
							subredditId: a,
							userId: o
						} = t.payload, c = r.filter(e => e.placement !== s).concat(n).filter(Boolean).map(e => e.id);
						return {
							...e,
							[o]: {
								...e[o] || {},
								[a]: c
							}
						}
					}
					default:
						return e
				}
			};
			const NT = {},
				LT = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && iu()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var kT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k_.f: {
							const {
								data: n
							} = t.payload;
							return LT(e, n)
						}
						case pu.l: {
							const {
								user: n
							} = t.payload;
							return LT(e, {
								[n.username]: n
							})
						}
						case ee.s: {
							const {
								gildee: n
							} = t.payload;
							if (!n) return e;
							const r = e[n.toLowerCase()];
							if (!r) return e;
							const s = r.awardedLastMonth,
								a = s ? s.totalCount + 1 : 1,
								o = s && s.topAward;
							return o ? LT(e, {
								[n.toLowerCase()]: {
									...r,
									awardedLastMonth: {
										totalCount: a,
										topAward: o
									}
								}
							}) : e
						}
						case pu.m: {
							const {
								userName: n,
								karma: r
							} = t.payload, s = e[n.toLowerCase()];
							if (!s) return e;
							const a = {
								...UI.a,
								...r
							};
							return LT(e, {
								[n.toLowerCase()]: {
									...s,
									karma: a
								}
							})
						}
						case jn.l:
						case jn.k: {
							const {
								imageUrl: n,
								key: r,
								username: s
							} = t.payload;
							if ("profileIcon" !== r) return e;
							const a = s.toLowerCase(),
								o = e[a];
							return o ? LT(e, {
								[a]: {
									...o,
									accountIcon: n
								}
							}) : e
						}
						case k_.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object($.e)(n).toLowerCase(),
								s = e[r];
							return s ? LT(e, {
								[r]: {
									...s,
									accountIcon: n.accountIcon,
									snoovatarFullBodyAsset: n.snoovatarFullBodyAsset
								}
							}) : e;
						case jn.n: {
							const {
								additional: n,
								settings: r
							} = t.payload;
							if (n.enableFollowers === n.prevEnableFollowers) return e;
							const s = r.currentUserName.toLowerCase(),
								a = e[s];
							return a ? LT(e, {
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
				xT = n("./src/reddit/actions/usernameAvailable.ts");
			const UT = {};
			var MT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xT.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: xT.b.Available
						}
					}
					case xT.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: xT.b.Error
						}
					}
					case xT.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: xT.b.Pending
						}
					}
					case xT.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: xT.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const FT = {};
			var BT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.db: {
						const {
							userId: n,
							supportedSubreddits: r
						} = t.payload, s = {
							[n]: r
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
			var GT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.cb:
						case ee.eb:
							return !1;
						case ee.db:
							return !0;
						default:
							return e
					}
				},
				qT = Object(S.c)({
					allocationByKey: BT,
					fetched: GT
				});
			var HT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.vb:
						return t.payload;
					case ee.xb:
					case ee.wb:
						return null;
					default:
						return e
				}
			};
			var QT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.wb:
						case ee.vb:
							return !1;
						case ee.xb:
							return !0;
						default:
							return e
					}
				},
				WT = Object(S.c)({
					error: HT,
					pending: QT
				});
			var VT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const YT = {};
			var KT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.wb: {
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
			const $T = {};
			var zT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.wb: {
							const {
								postId: n,
								topAwardersRank: r
							} = t.payload;
							return {
								...e,
								[n]: (r || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case ee.s: {
							const {
								id: n
							} = t.payload;
							return kr()(e, [n])
						}
						default:
							return e
					}
				},
				XT = Object(S.c)({
					api: WT,
					currentPostId: VT,
					currentRank: KT,
					list: zT
				}),
				JT = Object(S.c)({
					api: CT,
					appliedBadges: RT,
					models: kT,
					nameAvailable: MT,
					topAwarders: XT,
					powerups: qT
				});
			const ZT = {};
			var ew = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case B.b:
						case B.f:
						case W.SUBREDDIT_LOADED:
						case Y.i:
						case Q.c:
						case ke.PAGE_LOADED:
						case xr.PAGE_LOADED: {
							const {
								structuredStyles: a
							} = t.payload;
							if (!(null === (s = null === (r = null === (n = null == a ? void 0 : a.data) || void 0 === n ? void 0 : n.content) || void 0 === r ? void 0 : r.widgets) || void 0 === s ? void 0 : s.layout)) return e;
							const o = a.data.content.widgets.layout.idCardWidget,
								c = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== c.length) return e;
							const i = c[0];
							return {
								...e,
								[i]: o
							}
						}
						default:
							return e
					}
				},
				tw = n("./src/reddit/actions/widgets/constants.ts");
			const nw = {};
			var rw = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nw,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case B.b:
						case B.f:
						case Q.c:
						case Y.i:
						case W.SUBREDDIT_LOADED:
						case ke.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = null === (n = r.data.content.widgets) || void 0 === n ? void 0 : n.items,
								a = r.data.content.widgets.layout.topbar.order.filter(e => s[e] && "menu" === s[e].kind);
							if (!a.length) return e;
							const o = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== o.length) return e;
							const c = o[0];
							return {
								...e,
								[c]: a[0]
							}
						}
						case tw.g: {
							const n = t.payload;
							return "menu" !== n.widget.kind ? e : {
								...e,
								[n.subredditId]: n.widgetId
							}
						}
						case tw.h: {
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
				sw = n("./src/reddit/helpers/widgets/index.tsx");
			const aw = {};
			var ow = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const n = t.payload,
							r = n.structuredStyles && n.structuredStyles.data && n.structuredStyles.data.content;
						if (!r) return e;
						const s = r.widgets;
						return {
							...e,
							...s.items
						}
					}
					case tw.b: {
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
								styles: Object(sw.g)()
							}
						}), t
					}
					case tw.e: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case tw.i:
					case tw.g: {
						const n = t.payload;
						return {
							...e,
							[n.widget.id]: n.widget
						}
					}
					case tw.h: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n.widgetId], r
					}
					case B.b:
					case B.f:
					case W.SUBREDDIT_LOADED:
					case Y.i:
					case Q.c:
					case ke.PAGE_LOADED:
					case xr.PAGE_LOADED: {
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
					case hu.h: {
						const {
							userIsSubscriber: n,
							nameIdentifiers: r,
							widgetId: s
						} = t.payload;
						if (!s || !e[s] || "community-list" !== e[s].kind) return {
							...e
						};
						const a = n,
							o = e[s],
							c = o.data.map(e => {
								const t = {
									...e
								};
								return r.some(e => e.name === t.name) && (t.isSubscribed = a), t
							});
						return {
							...e,
							[s]: {
								...o,
								data: c
							}
						}
					}
					case wv.f: {
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
			const cw = {};
			var iw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case B.f:
					case Y.i:
					case ke.PAGE_LOADED: {
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
			const dw = {};
			var lw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case ke.PAGE_LOADED:
					case xr.PAGE_LOADED: {
						const n = t.payload,
							r = n.structuredStyles && n.structuredStyles.data && n.structuredStyles.data.content;
						if (!r) return e;
						const s = Object.keys(n.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const a = s[0],
							o = r.widgets.layout.sidebar.order;
						return {
							...e,
							[a]: o
						}
					}
					case tw.e:
					case tw.b: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgets.layout.sidebar.order
						}
					}
					case tw.f: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgetIds
						}
					}
					case tw.g: {
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
					case tw.h: {
						const n = t.payload;
						if (!e[n.subredditId]) return e;
						const r = e[n.subredditId].filter(e => e !== n.widgetId);
						return {
							...e,
							[n.subredditId]: r
						}
					}
					case B.b:
					case B.f:
					case W.SUBREDDIT_LOADED:
					case Q.c:
					case Y.i:
					case ke.PAGE_LOADED:
					case xr.PAGE_LOADED: {
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
			const uw = {
				accountManagerModalData: a,
				activeModal: h,
				ads: E,
				apiRequestState: I,
				appBadges: P,
				authorFlair: Z,
				awards: Ze,
				badges: bt,
				blockedRedditors: _t,
				blockUser: At,
				brandSafety: Pt,
				chat: on,
				cooldownTimer: Fn,
				commentsListTruncated: dn,
				communityFlairs: pn,
				connection: hn,
				contentControls: wn,
				contentGate: Cn,
				continueThreads: Nn,
				creations: la,
				dashboard: fa,
				discoveryUnits: ja,
				dismissedTruncationList: Pa,
				economics: eo,
				emailVerificationTooltip: ro,
				emojis: po,
				experimentOverrides: go,
				externalAccount: Vo,
				featureFlags: Zo,
				focusedVerticals: pc,
				fontFiles: bc,
				frontPageFirstLoaded: hc,
				gild: jc,
				header: Uc,
				htmlResponseStreaming: Mc,
				imageUploads: Gc,
				inAppNotifications: Yc,
				interceptedAction: $c,
				isChangeUsernameTooltipShowing: Xc,
				isModeratorWithPostPerms: Zc,
				jsApi: ni,
				langSite: ai,
				leaderboard: bi,
				listings: Qd,
				live: $d,
				mediaEmbed: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zd.a:
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
				mediaGalleries: nl,
				mediaPlayback: al,
				meta: il,
				moderatingSubreddits: ul,
				modListingPage: ml,
				modModeEnabled: El,
				moreComments: jl,
				multireddits: Ou,
				notificationBannerId: Iu,
				notificationsInbox: Nu,
				nps: xu,
				onboarding: Hu,
				page: $u,
				platform: tp,
				postCollection: Mp,
				polls: wp,
				postFlair: Qp,
				posts: Mb,
				postStickiedComments: qb,
				givePremium: Nc,
				products: rh,
				profileCommentsPage: mh,
				profilePrivatePage: Lh,
				profileModSettingsPage: _h,
				profilePostsPage: Sh,
				profiles: fy,
				promos: my,
				publicAccessNetwork: Xy,
				recentSubreddits: ng,
				recommendations: sg,
				reportPage: bg,
				reportRules: gg,
				requestHost: mg,
				runTimeEnvVars: Og,
				search: Ng,
				searchDiscoveryUnits: Gg,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qg.a:
							return t.payload;
						case qg.b:
							return Hg;
						default:
							return e
					}
				},
				seo: Xg,
				shortcuts: om,
				sidebarPromotedPosts: dm,
				streaming: gm,
				structuredStyles: xm,
				stylesheets: Um,
				subredditAutocomplete: Vm,
				subreddits: CO,
				subredditStickyPosts: NO,
				subscriptions: t_,
				survey: c_,
				tabBadged: i_,
				tags: R_,
				themes: M_,
				toaster: G_,
				tooltip: V_,
				tracing: $_,
				tracking: aI,
				trafficStats: dI,
				transfers: gI,
				trending: OI,
				trophies: SI,
				uploads: jI,
				user: ET,
				userDataRequestPage: wT,
				upvotePromptCountPerSess: CI,
				users: JT,
				widgets: Object(S.c)({
					idCardIds: ew,
					menuIds: rw,
					models: ow,
					moderatorIds: iw,
					sidebar: lw
				})
			}
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/page.ts");
			const o = "/premium",
				c = Object(r.a)({
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
					chunk: s.r.PREMIUM,
					component: c,
					exact: !0,
					meta: {
						name: s.Nb.PREMIUM,
						isResponsive: !0
					},
					path: o
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
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				a = n("./src/reddit/selectors/moderatorPermissions.ts");
			Object(r.a)(e => e.chat.unread.count, e => e.unreadMessages);
			const o = e => !(e.chat.isInited || e.chat.unread.api.pending),
				c = (e, t) => {
					const {
						chatConfig: n
					} = s.c;
					return Object(a.b)(n)(e, t)
				}
		},
		"./src/reddit/selectors/chatSettingsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/models/ChatSettingsPage/index.ts");
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!e.chat.subredditSettingsPage.api.fetch.pending[n]
				},
				a = (e, t) => {
					let {
						subredditId: n
					} = t;
					return (e.chat.subredditSettingsPage.models[n] || []).filter(e => e && e.settingType !== r.a.Unknown)
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
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/models/Flair/index.ts"),
				c = n("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const d = [],
				l = e => e.emojis.models,
				u = Object(a.a)(l, (e, t) => t.subredditId, (e, t) => {
					const n = e[t];
					return n ? [...s()(n.emojis), ...s()(n.snoomojis)] : d
				}),
				p = Object(a.a)(u, c.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, n, r) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !n) && (!(!e.userFlairAllowed && r === o.d.UserFlair) && !(!e.postFlairAllowed && r === o.d.LinkFlair)))),
				f = Object(a.a)(l, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				b = (e, t) => Object(i.x)(e, {
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
				g = (e, t) => !!e.emojis.api.list.pending[t]
		},
		"./src/reddit/selectors/experiments/serpTabPreserved.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./node_modules/reselect/es/index.js");
			const o = Object(a.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: r.Ec
			}), e => e === r.Jd)
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
				o = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				c = n("./src/reddit/models/Media/index.ts"),
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
					let s = Object(o.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== c.o.TEXT || (s = e.media.markdownContent), s === n
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
					let s = Object(o.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== c.o.TEXT || (s = e.media.markdownContent), s === n
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
				h = Object(s.a)(d.k, a.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				y = Object(s.a)(a.a, e => !(!e || !1 !== e.isRobotIndexable))
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
				o = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const i = 5e3,
				d = 12e3,
				l = 6 * r.pb,
				u = (e, t) => {
					const n = Object(o.G)(e, t),
						r = Object(c.P)(e);
					let i = !1;
					const d = Object(c.k)(e);
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
		"./src/redditGQL/operations/GetSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"63d6a697b823"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"074eb98957ec"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"aaa4bab5d175"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		},
		"./src/redditGQL/operations/UpdateSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"bdb05b8c7a65"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.623ac8a6f89985d3a2a7.js.map