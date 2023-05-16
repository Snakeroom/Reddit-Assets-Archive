// https://www.redditstatic.com/desktop2x/Governance~Reddit.6933e06b7aab7cf27e23.js
// Retrieved at 5/16/2023, 5:50:03 PM by Reddit Dataminer v1.0.0
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
					i = o || Object(r.E)(e)
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
			const a = [s.zc, s.vb, s.E, s.V, s.qb, s.Yb],
				o = {
					[s.Yb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.qb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.V]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.E]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.vb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.zc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[s.Yb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.qb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.V]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.E]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.vb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.zc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.vb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.zc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const i = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.zc]: "",
						[s.vb]: "",
						[s.E]: "",
						[s.V]: "",
						[s.qb]: "",
						[s.Yb]: ""
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
				m = Object(r.a)(d),
				g = Object(r.a)(l),
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
						e(g({
							subredditId: t
						}));
						const c = await Object(a.b)(o(), t, n);
						c.ok ? e(y({
							...c.body,
							subredditId: t
						})) : e(m({
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
				return g
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
				m = Object(r.a)(p),
				g = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t(),
						a = Object(c.a)(s);
					if (Object(c.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let i = !1,
						d = "";
					do {
						e(m());
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
				o = n("./src/reddit/constants/chat.ts"),
				c = n("./src/reddit/selectors/chat.ts");
			const i = "CHAT__SET_LIVECHAT_TOOLTIP_SHOW_STATE",
				d = e => Object(r.c)(s.r.CHAT, s.A.CHAT_LIVECHAT_ANNOUNCEMENT_TOOLTIP_SHOW_STATE, e),
				l = Object(a.a)(i),
				u = (e, t) => async (n, s) => {
					const a = s(),
						i = Object(c.b)(a);
					if (!o.a[i].includes(e)) return;
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
							n = await Object(o.e)(h, u());
						if (Object(d.a)(((e, t) => n => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: t
								},
								...Object(c.o)(n)
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
			var o = e => Object(s.a)(e, {
					...a
				}),
				c = n("./src/reddit/selectors/experiments/garlicBread.ts"),
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
					const m = await o(r());
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
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				a = "EMBEDS__LOADABLE",
				o = Object(r.a)(s),
				c = Object(r.a)(a)
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
				return C
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "a", (function() {
				return x
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
				return V
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "m", (function() {
				return K
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
				method: o.pb.GET,
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
				j = Object(p.a)(D),
				C = "GET_ALL_EMOJIS_PENDING",
				A = "GET_ALL_EMOJIS_LOADED",
				P = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(C),
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
					buttonAction: F(e)
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
							h = await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [l.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: o.pb.POST,
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
				B = (e, t) => async (n, r, s) => {
					const {
						imageData: a,
						subredditId: d,
						emojiName: u,
						settings: p
					} = e, h = Object(y.a)(a.url), m = r(), g = Object(O.X)(m, {
						subredditId: d
					}).name, E = await (async (e, t, n, r, s) => Object(c.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: o.pb.POST,
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
				}, F = e => async (t, n, s) => {
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
						d = await B(e, l)(t, n, s)
					}, l.onmessage = n => {
						const r = JSON.parse(n.data);
						if ("success" === r.type) {
							d = !0;
							const e = r.payload.emoji_url,
								n = Object(v.o)(a, e);
							t(Object(f.l)(n));
							const s = Object(g.e)(c, n.url, o, i);
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
					if (Object(_.a)(a, e)) return;
					const o = Object(O.X)(a, {
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
						p = Object(O.X)(u, {
							subredditId: t
						}).name,
						f = await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/v1/${n}/emoji/${t}`,
							method: o.pb.DELETE,
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
					} else n(j(f.error)), n(b.f({
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
					if ((await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: o.pb.POST,
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
					(await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/v1/${n}/emoji_permissions.json`,
						method: o.pb.POST,
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
			n("./src/lib/sentry/index.ts"), n("./src/reddit/endpoints/user/index.ts"), n("./src/reddit/models/Post/index.ts"), n("./src/reddit/selectors/telemetry.ts");
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
				return _
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
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				g = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				v = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				E = e => async (t, a) => {
					t(b());
					const o = a(),
						i = Object(l.X)(o, {
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
				}, _ = e => async (t, a) => {
					t(m());
					const l = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ImportTheme")]).then(n.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						u = await l(e);
					u.ok ? (t(g()), t(Object(c.f)({
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
		"./src/reddit/actions/firstPost/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			}));
			const r = "SET_CURRENT_PROMPT_INDEX",
				s = "SET_FORM_FIRST_EDIT_EVENT",
				a = "SET_FIRST_POST_TITLE",
				o = "SET_FIRST_POST_SUBREDDIT",
				c = "SET_FIRST_POST_BODY",
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
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			}));
			const r = "HAPPENING_NOW__SET_LATEST_UNREAD_CONTENT_TIMESTAMP",
				s = "HAPPENING_NOW__LAST_READ_TIMESTAMP",
				a = "HAPPENING_NOW__SET_SHOULD_SHOW_FIRST_TIME_TOOLTIP",
				o = "HAPPENING_NOW__FETCH_LIVE_DISCOVERY_CONTENT_PENDING",
				c = "HAPPENING_NOW__FETCH_LIVE_DISCOVERY_CONTENT_SUCCESS",
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
					const c = await Object(s.c)(a(), {
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
				return j
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "d", (function() {
				return A
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
				j = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				C = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
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
					u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [i.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${n?s.a.oauthUrl:s.a.apiUrl}/api/jail/asknicely${n?"":".json"}`,
						method: a.pb.GET,
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
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "e", (function() {
				return D
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
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
				m = n("./src/reddit/actions/users.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				v = n("./src/lib/makeListingKey/index.ts"),
				E = n("./src/lib/matchRoute/index.ts");
			const _ = e => async t => {
				await t(Object(y.c)(e, !0))
			}, O = () => async e => {
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
				if (p.route && p.route.meta && (p.route.meta.name === a.Tb.INDEX || p.route.meta.name === a.Tb.MULTIREDDIT || p.route.meta.name === a.Tb.SUBREDDIT)) f ? window.open(u.url) : n ? o(Object(r.b)(u.url)) : await o(p.route.action(u, !0));
				else if (p.match && p.match.params && p.match.params.subredditName) {
					const {
						subredditName: e
					} = p.match.params, t = `/r/${e}/`;
					if (f) window.open(t);
					else if (n) o(Object(r.b)(t));
					else {
						const n = Object(v.a)(e, a.cb.HOT);
						await o(Object(r.b)(t)), o(Object(s.subredditDataRequested)(n, e, {}))
					}
				}
			}, S = () => async (e, t) => {
				const n = t();
				e(d.n({
					title: o.b()
				})), Object(g.S)(n) || await e(m.s())
			}, T = () => async e => e(d.n({
				title: o.b()
			})), D = e => async (t, r) => {
				const s = r();
				t(d.n({
					title: o.k()
				})), Object(g.S)(s) || await t(m.s());
				const a = Object(g.S)(s);
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
				o = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/helpers/trackers/screenview.ts"),
				i = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				u = Object(r.a)(l),
				p = e => async (t, n) => {
					const r = [t(s.z()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(r);
					const l = Object(d.m)(n());
					l ? (await t(Object(a.b)(Object(i.e)(l))), t(u()), Object(c.o)(n(), !0)) : Object(o.a)(t, n())
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
						p = Object(i.m)(u),
						y = Object(d.b)(u);
					if (p && y.success) return;
					e(f());
					const m = await Object(s.a)(r());
					if (!m.ok || !m.body) return void e(h(m.error));
					if (!m.body.account) return void Object(c.a)(e, u);
					const g = await (e => Object(a.a)(e, {
						...o
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
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const a = "POSTLIST__MARKED_END",
				o = "POSTLIST__UNMARKED_END",
				c = Object(r.a)(a),
				i = Object(r.a)(o),
				d = (e, t) => async (n, r) => {
					const a = r();
					e in a.listings.postOrder.fetchedTokens ? e in a.listings.postOrder.ids ? n(i({
						listingKey: e
					})) : s.l(a, e) : n(c({
						listingKey: e,
						listingName: t
					}))
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
				return m
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
				m = (Object(r.a)(u), Object(r.a)(p), Object(r.a)(f), e => {
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
				return A
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "b", (function() {
				return x
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
				m = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				g = void 0 === h.a.homedir ? "" : h.a.homedir();
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
							return !n.includes(".app/Contents/Resources/electron.asar") && !n.includes(".app/Contents/Resources/default_app.asar") && !m.test(n)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(y, (e, t) => e.replace(t, t.replace(g, "~"))) : e).join("\n")
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
				_ = n("./src/redditGQL/operations/VerifyRecaptchaToken.json");
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
			var O = n("./src/reddit/featureFlags/index.ts"),
				I = n("./src/reddit/featureFlags/utils.ts"),
				S = n("./src/reddit/helpers/chooseVariant/index.ts"),
				T = n("./src/reddit/selectors/meta.ts");
			const D = e => O.d.reCaptchaEnterprise(e) && !Object(T.d)(e),
				w = e => !!Object(S.c)(e, {
					experimentEligibilitySelector: Object(I.d)(Object(I.b)(...a.c)),
					experimentName: f.qf
				}),
				j = Object(r.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				C = () => l(e => p()([D, w, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async e => {
					e(j.requested());
					try {
						await i.b.loadScript(), e(j.succeeded())
					} catch (t) {
						throw e(j.failed()), t
					}
				}),
				A = Object(r.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				P = e => l(e => p()([D, w, e => e.tracking.reCaptchaEnterprise.load === r.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === r.a.New], t => t(e)))(async t => {
					t(A.requested());
					try {
						const n = await i.b.execute(e);
						return t(A.succeeded({
							token: n
						})), n
					} catch (n) {
						throw t(A.failed()), n
					}
				}),
				R = Object(r.b)("SEND_RECAPTCHA_TOKEN"),
				N = e => l(e => p()([D, w, e => e.tracking.reCaptchaEnterprise.send === r.a.New && e.tracking.reCaptchaEnterprise.execute === r.a.Succeeded && e.tracking.reCaptchaEnterprise.load === r.a.Succeeded], t => t(e)))(async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					t(R.requested());
					try {
						await (async (e, t) => {
							const n = await Object(E.a)(e, {
								..._,
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
				x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.a.PageLoad;
					return l(e => p()([D, w, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async (t, n) => {
						const r = n();
						try {
							await t(C());
							const n = await t(P({
								action: L(e, r)
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
				return o
			})), n.d(t, "k", (function() {
				return c
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
				o = "RECAP_RESET",
				c = "RECAP_SHARE_CARD_WAS_OPENED",
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
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			const d = "SITEWIDE_RULES_LOADED",
				l = Object(s.a)(d),
				u = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					if (!t().user) return;
					const s = await (e => Object(o.a)(Object(c.a)(e, [i.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: a.pb.GET
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
				o = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/extractQueryParams/index.ts"));

			function c() {
				return Object(o.a)(window.location.href)
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
						apiContext: o,
						gqlContext: E
					} = r;
					const O = n();
					if (function(e) {
							return Object(g.c)(e, {
								experimentEligibilitySelector: g.a,
								experimentName: m.Pc
							}) === m.Sd
						}(O) && e === p.d.dropdown) {
						const n = (e => {
							var t, n;
							const {
								data: r
							} = e;
							return (null === (t = r.recommendation) || void 0 === t ? void 0 : t.trendingQueries) && 0 !== (null === (n = r.recommendation.trendingQueries.edges) || void 0 === n ? void 0 : n.length) ? r.recommendation.trendingQueries.edges.reduce((e, t) => {
								var n, r, a, o;
								if ("TrendingSearchElement" === (null === (n = null == t ? void 0 : t.node) || void 0 === n ? void 0 : n.__typename)) {
									const {
										contextPostInfo: n,
										queryString: c,
										id: i
									} = null == t ? void 0 : t.node;
									e.push({
										id: Object(s.a)(),
										post: n ? Object(h.f)(n) : null,
										rawQuery: c,
										searchQuery: i,
										section: p.c.trending,
										subredditInfo: "SubredditPost" === (null == n ? void 0 : n.__typename) && (null == n ? void 0 : n.subreddit) ? {
											icon: (null === (r = n.subreddit.styles) || void 0 === r ? void 0 : r.icon) || (null === (o = null === (a = n.subreddit.styles) || void 0 === a ? void 0 : a.legacyIcon) || void 0 === o ? void 0 : o.url),
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
									ad: c().get("ad")
								}
							};
							return await Object(f.a)(e, {
								...b,
								variables: r
							}, {
								traceRequestName: "search_trending"
							})
						})(E(), v.fb(O, y.a.SERP), O.platform.currentPage ? v.v(O.platform.currentPage) : void 0)).body);
						if (n.length > 0) return t(_({
							items: n,
							subplacement: e
						})), n
					} else {
						const n = await ((e, t) => {
							const n = {
								withAds: 1,
								ad: c().get("ad"),
								subplacement: t
							};
							return Object(i.a)(Object(d.a)(e, [l.a]), {
								endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
								method: a.pb.GET,
								data: n
							})
						})(o(), e);
						if (n.ok) {
							const r = (e => {
								const t = [];
								if (e.body && e.body.trending_searches) {
									const n = e.body.trending_searches.length;
									for (let r = 0; r < n; r++) {
										const n = e.body.trending_searches[r],
											a = n.results.data.children.length > 0 ? n.results.data.children[0].data : null,
											o = {
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
										t.push(o)
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
						method: a.pb.GET
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
					})), t(Object(s.z)());
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
						b = Object(i.E)(),
						g = Date.now(),
						v = b && g - b < 18e4,
						E = Object(u.c)(f, {
							postId: e
						}),
						_ = f.upvotePromptCountPerSess,
						O = (() => {
							const e = Object(i.D)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !E || v || _ >= 4 || O.length >= 1) return;
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
							...Object(d.o)(e)
						}))(f))
					}));
					const S = [...O, Date.now()].slice(Math.max(O.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: l,
						action: "view",
						noun: l,
						...Object(d.o)(e)
					}))(f)), Object(i.Ib)(), Object(i.Hb)(S), a(m()), n && n()
				}, h = e => async (t, n) => {
					Object(p.a)((e => ({
						source: l,
						action: "click",
						noun: "upvote",
						...Object(d.o)(e)
					}))(n())), Object(u.c)(n(), {
						postId: e
					}) && t(Object(o.ib)(e))
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
				return o
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				a = n("./node_modules/react-router-redux/es/index.js");
			const o = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, o, c) => {
					let {
						routes: i
					} = c;
					const d = o();
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
					var l, u;
					if (n().blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const p = await Object(c.a)(d(), e),
						m = `error-block-${e}`;
					if (p.ok) p.body.name && t(b(p.body)), p.body.id && t(Object(a.f)(p.body.id)), t(o.g(m)), t(o.f({
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
						t(h(n)), "REBLOCK_RATE_LIMIT" === (null === (l = p.body) || void 0 === l ? void 0 : l.reason) ? t(o.f({
							id: m,
							kind: i.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: y(e)
						})) : "BLOCK_MAXIMUM" === (null === (u = p.body) || void 0 === u ? void 0 : u.reason) ? t(o.f({
							id: m,
							kind: i.b.Error,
							text: r.fbt._("You cannot block more than 1000 users.", null, {
								hk: "1G5SbN"
							})
						})) : t(o.f({
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
					})), (await Object(c.c)(l(), f, e)).ok ? (t(_({
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
				}, h = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", m = "USER_UNWHITELIST__FAILED", g = Object(s.a)(h), v = Object(s.a)(y), E = Object(s.a)(m), _ = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					t(g({
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
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/connectors/PostViewable/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(o.a)(null),
				l = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? s.a.createElement(a.a, {
						post: n,
						trackDisplay: !0
					}, s.a.createElement("div", {
						className: Object(c.a)(t, `Blank ${n.id}`)
					})) : null
				};
			t.default = Object(i.b)(d(l))
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
				}, s.a.createElement(o.b, {
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
				m = n.n(y);
			const g = Object(l.a)(p.a),
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
				}, [i, e.isOpen]), t ? a.a.createElement(g, {
					className: m.a.Tooltip,
					isOpen: e.isOpen,
					targetPosition: ["left", "top"],
					tooltipPosition: ["right", "top"],
					tooltipId: n,
					componentWrapper: t => a.a.createElement("div", {
						className: Object(c.a)(m.a.Overlay, {
							[m.a.isOverlayOpen]: e.isOpen
						}),
						onClick: l
					}, a.a.createElement("div", {
						className: Object(c.a)(m.a.DropdownPadding, {
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
				o = n("./src/reddit/components/Pill/index.m.less"),
				c = n.n(o);

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
					className: Object(a.a)(c.a.pillContainer, n)
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
					seconds: e.poll.endsAt / r.Yb
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
				j = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
			var M, B = Object(c.b)(U)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return Object(_.a)() ? null : o.a.createElement("div", {
						className: Object(u.a)(e.className, k.a.proposalMetaData)
					}, o.a.createElement("span", null, R.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [R.fbt._param("count", Object(N.a)(r)), R.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(L.a, {
						className: k.a.proposalExpiry,
						poll: t
					}))
				})),
				F = n("./src/reddit/components/SEOTitle/index.tsx"),
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
						className: c,
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
					return o.a.createElement("div", {
						className: Object(u.a)(Y.a.Title, c, p, {
							[Y.a.isNoWrap]: s,
							[Y.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(C.a)({
								redditStyle: i,
								theme: l
							}).titleText
						}
					}, r ? o.a.createElement(F.b, {
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
					return o.a.createElement(i.a, $({}, a, {
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
					return o.a.createElement("div", {
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
					} = t, r = Object(c.d)(), s = Object(E.a)(), a = Object(c.e)(G.b), i = Object(c.e)(G.c), d = e => {
						(a || i) && (e.preventDefault(), r(Object(m.Z)(Object(v.b)(t.permalink), t.id))), t.isSponsored && Object(w.A)(t) && r(Object(m.y)(t, g.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(J, {
						nowrap: e.nowrap
					}, o.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement(te, e)); {
						const r = t.permalink,
							a = e.isCommentPermalink ? Object(v.b)(r) : Object(y.a)(r, void 0, s);
						return o.a.createElement(J, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n && !Object(w.A)(t) ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? o.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, o.a.createElement(te, t)) : o.a.createElement(te, t)
						})(t, e) : o.a.createElement(X, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a,
							onClick: d
						}, o.a.createElement(te, e)))
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
					const a = e.isCommentsPage ? F.a.PostComments : F.a.PostItem,
						c = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return o.a.createElement(z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: c,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(P.a, {
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
					const c = !t && !e.isCrosspost && e.size !== M.Large && !r.isSponsored && (r.source || r.media && (r.media.type === D.o.GIFVIDEO || r.media.type === D.o.IMAGE || r.media.type === D.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (c) return o.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(D.E)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: a
						}, Object(A.a)(r), !r.isSponsored && o.a.createElement(S.a, {
							name: "external_link",
							className: Y.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== M.Large && e.size !== M.ExtraLarge) return o.a.createElement(h.a, {
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
			class re extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${Y.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(C.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(C.a)(this.props).titleText,Object(C.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(s.c)(.45,Object(C.a)(this.props).bodyText,Object(C.a)(this.props).body)};\n        }\n      `
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
					} = this.props, f = n === T.b.Left, b = Object(P.b)(i), {
						leftFlair: h,
						rightFlair: y
					} = Object(W.a)({
						flair: b,
						isFlairPositionedLeft: f,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), m = !a && !s && !t, g = m && h && h.length > 0, v = m && y && y.length > 0;
					return o.a.createElement("div", {
						className: Object(u.a)(Y.a.Component, e, i.id),
						ref: this.props.innerRef,
						"data-adclicklocation": Q.a.TITLE,
						onClick: p
					}, !d && g && o.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), !Object(j.b)(i) && o.a.createElement(ee, $({}, this.props, {
						leftFlair: d ? h : void 0
					})), c && o.a.createElement(B, {
						className: Y.a.pollMeta,
						pollId: c.id
					}), o.a.createElement(ne, this.props), v && o.a.createElement(P.a, {
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
				const t = Object(f.ib)(),
					n = Object(f.x)(t),
					r = Object(O.a)(),
					s = Object(c.e)(s => Z(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(I.a)(),
					i = Object(p.b)();
				return r ? o.a.createElement(re, $({
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
				return Ee
			})), n.d(t, "a", (function() {
				return _e
			})), n.d(t, "d", (function() {
				return Oe
			})), n.d(t, "c", (function() {
				return Se
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/reddit/helpers/ensureEndSlash/index.ts"),
				u = n("./src/lib/makeSearchKey/index.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				f = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				b = n("./src/reddit/helpers/clickSourceData/index.ts"),
				h = n("./src/reddit/helpers/getSearchUrl/index.ts");
			var y = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				m = n("./src/reddit/helpers/trackers/searchResults.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/models/Search/index.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/user.ts");
			var I = e => {
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

			function S(e) {
				let {
					searchItem: t,
					nightmode: n,
					styles: r
				} = e;
				var a, o, i;
				return (null === (a = null == t ? void 0 : t.displayInfo) || void 0 === a ? void 0 : a.isQuarantined) ? s.a.createElement(I, {
					className: Object(c.a)(r.subredditIcon, r.quarantineIcon)
				}) : (null === (o = null == t ? void 0 : t.displayInfo) || void 0 === o ? void 0 : o.iconUrl) ? s.a.createElement("div", {
					className: r.subredditIcon,
					style: {
						backgroundImage: `url('${null===(i=null==t?void 0:t.displayInfo)||void 0===i?void 0:i.iconUrl}')`
					}
				}) : s.a.createElement(v.a, {
					name: "community",
					isFilled: !n,
					className: Object(c.a)(r.defaultCommunityIcon, n && r.mNightmode)
				})
			}
			var T = n("./src/reddit/components/SearchDropdown/index.m.less"),
				D = n.n(T);
			const w = Object(o.a)(p.b);

			function j(e) {
				let {
					activeTooltipId: t,
					className: n,
					focusedItem: o,
					nightmode: p,
					recentSearch: I,
					searchOriginPage: T,
					indexOfItem: j,
					toggleTooltip: C,
					onClearSearchQuery: A,
					onRemoveRecentSearch: P,
					onUpdateSearchQuery: R,
					onSendSearchClickRecentEvent: N,
					onCloseDropdown: L
				} = e;
				var x;
				const k = Object(g.a)(),
					{
						nsfwSessionSetting: U
					} = Object(f.b)(),
					M = Object(a.e)(O.mb);
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: I.searchQuery,
						originElement: _.a.SearchBar,
						rawQuery: I.rawQuery || I.searchQuery,
						searchQuery: I.searchQuery,
						structureType: _.c.Recent,
						telemetrySource: y.a.Typeahead
					};
					k(Object(m.A)(m.a.RECENT, e, j, j, I))
				}, []);
				const B = e => {
						var t;
						const n = (null === (t = e.displayInfo) || void 0 === t ? void 0 : t.subredditOrProfileName) || e.searchQuery;
						return e.subredditOrProfileRestrictedName ? `${function(e){return e.split("/").slice(-3,-1).join("/")}(e.subredditOrProfileRestrictedName)} ${n}` : n
					},
					{
						url: F,
						qs: G
					} = Object(h.a)({
						includeNsfwResults: M && U,
						searchItem: I,
						searchOptions: {
							source: u.a.Recent
						}
					}),
					q = B(I);
				let H;
				o && (H = B(o));
				return s.a.createElement(d.a, {
					"aria-label": q,
					className: Object(c.a)(D.a.listItem, D.a.spaceBetween, n, !((null == o ? void 0 : o.section) !== E.c.recent || H !== q) && D.a.backgroundFocused),
					onClick: () => {
						I.isTypeaheadSuggestion ? A() : R(I.searchQuery), N(I.searchQuery, I, j), L()
					},
					key: q,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: F && Object(l.a)(F) || "",
						search: G,
						state: Object(b.c)(b.a.SEARCH_DROPDOWN, T, I.isProfile || I.isSubreddit)
					}
				}, s.a.createElement("div", {
					className: D.a.flexAlignCenter
				}, I.displayInfo && I.isTypeaheadSuggestion ? s.a.createElement(S, {
					searchItem: I,
					nightmode: p,
					styles: D.a
				}) : s.a.createElement(v.a, {
					name: "search",
					className: D.a.searchIcon
				}), s.a.createElement("div", {
					className: D.a.column
				}, s.a.createElement("p", {
					className: Object(c.a)(D.a.marginLeft2, D.a.titleFontH5)
				}, q), (null === (x = I.displayInfo) || void 0 === x ? void 0 : x.isQuarantined) ? s.a.createElement("p", {
					className: Object(c.a)(D.a.marginLeft2, D.a.metaTextFont, D.a.metaTextColor, D.a.paddingTop1)
				}, i.fbt._("Quarantined", null, {
					hk: "4t1Oq4"
				})) : null)), s.a.createElement("div", {
					className: D.a.flexAlignCenter,
					onMouseEnter: () => C(null != q ? q : null),
					onMouseLeave: () => C(null),
					id: q
				}, s.a.createElement(v.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), P(I)
					},
					"data-testid": q
				}), s.a.createElement(w, {
					className: D.a.fixedTextTooltip,
					isOpen: t === q,
					text: i.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: q,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var C = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				A = n("./src/reddit/components/PostTitle/index.tsx"),
				P = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				R = n("./src/reddit/constants/adEvents.ts"),
				N = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				L = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				x = n("./src/reddit/helpers/correlationIdTracker.ts"),
				k = n("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				U = n("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function M(e) {
				let {
					className: t,
					focusedItem: n,
					id: r,
					trendingItem: o,
					searchOriginPage: p,
					onUpdateSearchQuery: f,
					onCloseDropdown: m,
					onSetRecentSearch: g,
					fireAdPixelsOfType: O
				} = e;
				const I = Object(a.d)(),
					S = !(!o.post || !o.post.isSponsored),
					{
						url: T,
						qs: w
					} = Object(h.a)({
						searchItem: o,
						searchOptions: {
							source: S ? u.a.PromotedTrend : u.a.Trending
						}
					}),
					j = s.a.createElement(d.a, {
						id: r,
						"aria-label": o.searchQuery,
						className: Object(c.a)(D.a.listItem, D.a.borderBottom, D.a.spaceBetween, t, !((null == n ? void 0 : n.section) !== E.c.trending || o.searchQuery !== n.searchQuery) && D.a.backgroundFocused),
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
							if (g(e), Object(x.d)(x.a.SearchResults), k.a.set(_.a.SearchDropdown), (e => I((t, n) => Object(U.o)({
									state: n(),
									trendingSearch: e,
									telemetrySource: y.a.Typeahead
								})))(o), S) {
								const {
									post: e
								} = o;
								e && O(e, R.a.Click)
							}
							m()
						},
						key: `trending-${o.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: T && Object(l.a)(T) || "",
							search: w,
							state: Object(b.c)(b.a.SEARCH_DROPDOWN, p)
						}
					}, s.a.createElement("div", null, S && s.a.createElement("div", {
						className: Object(c.a)(D.a.active, D.a.labelsFont, D.a.marginBottom2)
					}, i.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), s.a.createElement("div", null, s.a.createElement(v.a, {
						name: "popular",
						className: D.a.trendingIcon
					}), s.a.createElement("span", null, s.a.createElement(A.a, {
						className: D.a.marginLeft2,
						redditStyle: !0,
						size: A.b.Small
					}, o.searchQuery)), o.post && s.a.createElement("div", {
						className: Object(c.a)(D.a.postTitle, D.a.titleFontH5, D.a.trendingSpacer)
					}, o.post.title)), o.subredditInfo && s.a.createElement(N.a, {
						className: Object(c.a)(D.a.metaTextColor, D.a.trendingSpacer, !o.post && D.a.marginTop2),
						iconUrl: o.subredditInfo.icon || void 0,
						suffix: i.fbt._("{subreddit name} and more", [i.fbt._param("subreddit name", o.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), o.post && Object(L.a)(o.post) && s.a.createElement(C.a, {
						post: o.post,
						removeLink: !0,
						usePreview: S
					}));
				return S ? s.a.createElement(P.a, {
					post: o.post
				}, j) : j
			}
			var B = n("./src/lib/prettyPrintNumber/index.ts"),
				F = n("./src/reddit/components/Flair/index.tsx"),
				G = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				q = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				H = n("./src/reddit/models/Flair/index.ts"),
				V = n("./src/reddit/constants/experiments.ts"),
				W = n("./src/reddit/selectors/experiments/search/searchSingleVariant.ts");

			function Q(e) {
				let {
					className: t,
					focusedItem: n,
					item: o,
					indexOfItem: l,
					nightmode: u,
					searchOriginPage: p,
					onSendSearchClickTypeaheadEvent: f,
					onSetRecentSearch: v,
					onClearSearchQuery: E,
					onCloseDropdown: O,
					relativePosition: I
				} = e;
				var T, w, j, C, A, P;
				const R = Object(a.e)(e => Object(W.a)(e, V.Bf)),
					N = Object(g.a)(),
					L = (null === (T = o.displayInfo) || void 0 === T ? void 0 : T.karma) || 0,
					x = (null === (w = o.displayInfo) || void 0 === w ? void 0 : w.subscribers) || 0,
					U = o.isProfile ? i.fbt._({
						"*": "{karma count} karma",
						_1: "1 karma"
					}, [i.fbt._plural(L, "karma count", Object(B.b)(L))], {
						hk: "2KlIGI"
					}) : i.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [i.fbt._plural(x, "members count", Object(B.b)(x))], {
						hk: "1uMCes"
					});
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: o.searchQuery,
						isTypeaheadActive: !0,
						originElement: _.a.SearchDropdown,
						rawQuery: o.rawQuery || o.searchQuery,
						searchQuery: o.searchQuery,
						structureType: _.c.Search,
						telemetrySource: y.a.Typeahead
					};
					N(Object(m.A)(m.a.TYPEAHEAD, e, l, I, o))
				}, []);
				const M = (null === (j = o.displayInfo) || void 0 === j ? void 0 : j.subredditOrProfileName) || "";
				return s.a.createElement(d.a, {
					"aria-label": M,
					className: Object(c.a)(D.a.listItem, D.a.typeaheadPadding, R && D.a.typeaheadByTypePadding, t, !((null == n ? void 0 : n.id) !== o.id) && D.a.backgroundFocused),
					onClick: () => {
						k.a.set(_.a.SearchDropdown), v(o), f(o.searchQuery, o, l, I), E(!1), O(!1), Object(G.e)(b.a.SEARCH_DROPDOWN)
					},
					key: M,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: Object(h.b)(o),
						state: Object(b.c)(b.a.SEARCH_DROPDOWN, p)
					}
				}, s.a.createElement(S, {
					searchItem: o,
					nightmode: u,
					styles: D.a
				}), s.a.createElement("div", null, (null === (C = o.displayInfo) || void 0 === C ? void 0 : C.subredditOrProfileName) && s.a.createElement("div", {
					className: Object(c.a)(D.a.marginLeft2, D.a.titleFontH5)
				}, o.displayInfo.subredditOrProfileName), s.a.createElement("div", {
					className: Object(c.a)(D.a.flexAlignCenter, D.a.marginLeft2, D.a.flexWrap)
				}, (null === (A = o.displayInfo) || void 0 === A ? void 0 : A.isQuarantined) && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(c.a)(D.a.metaTextColor, D.a.metaTextFont)
				}, i.fbt._("Quarantined", null, {
					hk: "4t1Oq4"
				})), s.a.createElement(q.a, {
					className: Object(c.a)(D.a.metaDataSeparator)
				})), s.a.createElement("div", {
					className: Object(c.a)(D.a.metaTextColor, D.a.metaTextFont)
				}, o.isProfile ? i.fbt._("User", null, {
					hk: "3KLiZZ"
				}) : i.fbt._("Community", null, {
					hk: "18dohI"
				})), L || x ? s.a.createElement(s.a.Fragment, null, s.a.createElement(q.a, {
					className: Object(c.a)(D.a.metaDataSeparator)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.metaTextColor, D.a.metaTextFont)
				}, U)) : null, (null === (P = o.displayInfo) || void 0 === P ? void 0 : P.isNSFW) && s.a.createElement(F.c, {
					className: D.a.marginLeft1,
					flair: {
						type: H.f.Nsfw,
						text: i.fbt._("nsfw", null, {
							hk: "2nrY5X"
						})
					}
				}))))
			}

			function K(e) {
				let {
					typeaheadSuggestions: t,
					focusedItemIndex: n,
					nightmode: r,
					searchItem: o,
					searchOriginPage: c,
					onClearSearchQuery: i,
					onClose: d,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u
				} = e;
				const p = Object(a.e)(O.mb),
					f = [];
				let b = [];
				p ? t.forEach(e => {
					var t;
					(null === (t = e.displayInfo) || void 0 === t ? void 0 : t.isNSFW) ? f.push(e): b.push(e)
				}) : b = t;
				const h = b.length,
					y = [...b, ...f][n];
				return s.a.createElement(s.a.Fragment, null, b.map((e, t) => s.a.createElement(Q, {
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
					searchOriginPage: c
				})), s.a.createElement(J, {
					nsfwTypeaheads: f,
					focusedItem: y,
					searchItem: o,
					startPosition: h,
					onCloseDropdown: d,
					onClearSearchQuery: i,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: r,
					searchOriginPage: c
				}))
			}
			var Y = n("./src/reddit/hooks/useLocalStorage.ts");
			var $ = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				z = n("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = e => {
				let {
					nsfwTypeaheads: t,
					focusedItem: n,
					searchItem: r,
					startPosition: o,
					onCloseDropdown: i,
					onClearSearchQuery: d,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: p,
					searchOriginPage: f
				} = e;
				const b = Object(g.a)(),
					h = Object(a.e)(e => Object(W.a)(e, V.Bf)),
					y = Object(a.e)(O.mb),
					{
						nsfwTypeaheadExpanded: v,
						setNsfwTypeaheadExpanded: E
					} = (() => {
						const [e, t] = Object(Y.a)("nsfw_typeahead_expanded", !1);
						return {
							get nsfwTypeaheadExpanded() {
								return e
							},
							setNsfwTypeaheadExpanded: e => {
								t(e)
							}
						}
					})();
				return y && t.length > 0 ? s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
					className: Object(c.a)(D.a.nsfwSection, !v && D.a.borderBottom),
					"data-testid": "typeahead_nsfw_toggle",
					onClick: () => (e => {
						const t = v ? m.a.COLLAPSE_NSFW : m.a.EXPAND_NSFW;
						b(Object(m.t)(t, e)), E(!v)
					})(r)
				}, s.a.createElement("p", {
					className: h ? D.a.titleFontH5 : void 0
				}, X._("NSFW results", null, {
					hk: "17BDhb"
				})), s.a.createElement("p", {
					className: D.a.listItemButton
				}, v ? s.a.createElement(s.a.Fragment, null, X._("Collapse", null, {
					hk: "4nBun"
				}), s.a.createElement(z.a, {
					className: D.a.chevron
				})) : s.a.createElement(s.a.Fragment, null, X._("Expand", null, {
					hk: "11NQXp"
				}), s.a.createElement($.a, {
					className: D.a.chevron
				})))), v && t.map((e, t) => s.a.createElement(Q, {
					focusedItem: n,
					indexOfItem: o + t,
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

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function te(e) {
				let {
					typeaheadByTypeSuggestions: t,
					typeaheadByTypeList: n,
					focusedItemIndex: r,
					nightmode: a,
					searchItem: o,
					searchOriginPage: c,
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
					searchOriginPage: c
				};
				return s.a.createElement(s.a.Fragment, null, t.communities.length > 0 && s.a.createElement("div", {
					className: D.a.section
				}, s.a.createElement("p", {
					className: D.a.sectionTitle
				}, ee._("Communities", null, {
					hk: "3GTB0"
				})), t.communities.map((e, t) => s.a.createElement(Q, Z({
					key: e.id,
					indexOfItem: t,
					relativePosition: t,
					item: e
				}, p)))), t.people.length > 0 && s.a.createElement("div", {
					className: D.a.section
				}, s.a.createElement("p", {
					className: D.a.sectionTitle
				}, ee._("People", null, {
					hk: "3qVb3c"
				})), t.people.map((e, n) => s.a.createElement(Q, Z({
					key: e.id,
					indexOfItem: t.communities.length + n,
					relativePosition: n,
					item: e
				}, p)))), s.a.createElement(J, Z({
					nsfwTypeaheads: t.nsfw,
					searchItem: o,
					startPosition: n.length - t.nsfw.length
				}, p)))
			}
			var ne = n("./src/reddit/constants/zIndex.ts"),
				re = n("./src/reddit/controls/Dropdown/index.tsx"),
				se = n("./src/reddit/selectors/searchResults.ts"),
				ae = n("./node_modules/lodash/pick.js"),
				oe = n.n(ae),
				ce = n("./node_modules/history/esm/history.js"),
				ie = n("./node_modules/react-router-redux/es/index.js"),
				de = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				le = n.n(de),
				ue = n("./src/reddit/constants/parameters.ts"),
				pe = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				fe = n("./src/reddit/controls/Search/SearchScopePill/index.tsx"),
				be = n("./src/reddit/hooks/usePageLayer.ts"),
				he = n("./src/reddit/selectors/platform.ts");
			const ye = "search-trigger-item";

			function me(e) {
				let {
					className: t,
					searchItem: n,
					position: o,
					searchOriginPage: d,
					isFocused: l,
					onTriggerSearch: p
				} = e;
				var E;
				const I = (null === (E = n.searchQuery) || void 0 === E ? void 0 : E.trim()) || "",
					S = Object(g.a)(),
					T = Object(be.a)(),
					w = Object(pe.bb)(T),
					j = Object(a.d)(),
					C = Object(a.e)(se.j),
					A = Object(a.e)(O.mb),
					{
						nsfwSessionSetting: P
					} = Object(f.b)(),
					R = Object(a.e)(he.r),
					N = Object(a.e)(he.d),
					L = Object(fe.c)(C),
					x = Object(u.e)({
						...oe()(w || {}, ue.z),
						q: n.searchQuery,
						restrict_sr: C.enabled ? "1" : ""
					});
				return Object(r.useEffect)(() => {
					S(Object(m.u)(x, o, T || void 0))
				}, []), s.a.createElement("button", {
					type: "submit",
					onClick: function(e) {
						k.a.set(_.a.SearchDropdown), S(Object(m.o)(m.a.FULL_SEARCH_BUTTON, x, y.a.Typeahead, T || void 0)), p(e),
							function() {
								const {
									url: e,
									qs: t
								} = Object(h.a)({
									searchItem: n,
									searchOptions: {},
									activeSearchScope: C,
									includeNsfwResults: A && P
								}), r = {
									...Object(b.c)(b.a.SEARCH_DROPDOWN, d),
									routeName: R,
									subredditName: N
								};
								j(Object(ie.b)(Object(ce.c)({
									pathname: e,
									search: t,
									state: r
								})))
							}()
					},
					className: Object(c.a)(D.a.listItem, le.a.item, D.a.triggerItem, l && D.a.backgroundFocused, t),
					"data-testid": ye
				}, s.a.createElement(v.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: le.a.text
				}, i.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), i.fbt._("{search query}", [i.fbt._param("search query", I)], {
					hk: "4vP3YT"
				}), "”", L && s.a.createElement(s.a.Fragment, null, " ", i.fbt._("in {scope}", [i.fbt._param("scope", null == L ? void 0 : L.title)], {
					hk: "4jMNCg"
				}))))
			}

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ve
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = "SearchDropdown", _e = "SearchDropdownContent", Oe = 5, Ie = Object(o.a)(re.a);

			function Se(e) {
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
					typeaheadByTypeSuggestions: b,
					focusedItemIndex: h,
					nightmode: m,
					searchItem: g,
					searchOriginPage: v,
					isFixed: E = !0,
					isOverlay: _ = !0,
					fireAdPixelsOfType: O,
					onClearSearchQuery: I,
					onClose: S,
					onRemoveRecentSearch: T,
					onSendSearchClickRecentEvent: w,
					onSetRecentSearch: C,
					onUpdateSearchQuery: A
				} = e, P = Object(a.d)(), [R, N] = Object(r.useState)(null), [L, x] = Object(r.useState)(n), [k, B] = Object(r.useState)(new Array(Oe).fill(!1)), {
					enabled: F
				} = Object(a.e)(se.j), G = Object(a.e)(e => Object(W.a)(e, V.Bf)), q = !!(null === (t = g.searchQuery) || void 0 === t ? void 0 : t.trim()), H = l || i, Q = F, Y = [...b.communities, ...b.people, ...b.nsfw], $ = !l && (!q || h >= 0) && (G ? 0 === Y.length : 0 === f.length) && !Q, z = {
					width: L ? `${L}px` : "inherit",
					overflow: "auto"
				};
				E && (z.zIndex = ne.g), Object(r.useEffect)(() => {
					x(n)
				}, [n]), Object(r.useLayoutEffect)(() => {
					if (!i && d && document.getElementById(_e)) {
						const e = X();
						B(e), o.forEach((t, n) => {
							e[n] && P((e, n) => Object(U.p)({
								state: n(),
								trendingSearch: t,
								telemetrySource: y.a.Typeahead
							}))
						})
					}
				}, [i, d, P]);
				const X = () => {
					const e = new Array(o.length).fill(!1);
					return o.forEach((t, n) => {
						if (t.id) {
							const r = document.getElementById(`${Ee}-${t.id}`),
								s = document.getElementById(_e);
							if (r && s) {
								const t = r.getBoundingClientRect(),
									a = s.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[n] = !0)
							}
						}
					}), e
				};
				const J = !l && !Q;
				return s.a.createElement(Ie, {
					className: Object(c.a)(D.a.bodyBackgroundColor, D.a.bodyTextColor, D.a.borderTop1Line, D.a.sdListContainer),
					id: _e,
					isFixed: E,
					isOpen: d,
					isOverlay: _,
					tooltipId: Ee,
					noFocus: !0,
					style: z,
					onDropdownMounted: () => {
						if (!i && o.length > 0) {
							const e = X();
							B(e), o.forEach((t, n) => {
								e[n] && P((e, n) => Object(U.p)({
									state: n(),
									trendingSearch: t,
									telemetrySource: y.a.Typeahead,
									offset: p.length
								}))
							})
						}
					},
					onScroll: () => {
						const e = X();
						o.forEach((t, n) => {
							k[n] || !e[n] || t.post && t.post.isSponsored || P((e, n) => Object(U.p)({
								state: n(),
								trendingSearch: t,
								telemetrySource: y.a.Typeahead,
								offset: p.length
							}))
						}), B(e)
					}
				}, $ && s.a.createElement(s.a.Fragment, null, p.map((e, t) => s.a.createElement(j, {
					searchOriginPage: v,
					activeTooltipId: R,
					focusedItem: u[h],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: I,
					onRemoveRecentSearch: T,
					onSendSearchClickRecentEvent: w,
					onSetRecentSearch: C,
					onUpdateSearchQuery: A,
					recentSearch: e,
					toggleTooltip: N,
					nightmode: m,
					onCloseDropdown: S
				})), !i && o.length ? s.a.createElement("div", {
					className: Object(c.a)(D.a.labelsFont, D.a.dropdownPadding, D.a.metaTextColor, D.a.titlePadding, !!p.length && D.a.borderTop2Line)
				}, ve._("Trending today", null, {
					hk: "3nAMpY"
				})) : null, o.map(e => s.a.createElement(M, {
					id: `${Ee}-${e.id}`,
					key: e.id,
					focusedItem: u[h],
					searchOriginPage: v,
					fireAdPixelsOfType: O,
					onCloseDropdown: S,
					onSetRecentSearch: C,
					onUpdateSearchQuery: A,
					trendingItem: e
				}))), H && !Q && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				})), !$ && q && s.a.createElement(s.a.Fragment, null, J && G ? s.a.createElement(te, ge({}, e, {
					typeaheadByTypeList: Y
				})) : s.a.createElement(K, e), s.a.createElement(me, {
					className: Object(c.a)(D.a.borderTop2Line, D.a.triggerItem),
					key: g.searchQuery,
					searchItem: g,
					position: f.length,
					searchOriginPage: v,
					onTriggerSearch: S,
					isFocused: h === u.length - 1
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
					const [s, a] = Object(o.useState)(!1);
					return s || !t ? null : c.a.createElement(v, {
						onClose: () => {
							I(n), a(!0), r(Object(m.b)(n))
						},
						postId: n
					})
				},
				j = Object(o.memo)(D(Object(g.c)(w)))
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/components/BlankPost/index.tsx"),
				c = n("./src/reddit/connectors/PostViewable/index.ts");
			const i = Object(c.a)(null);
			class d extends s.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? s.a.createElement(o.BlankPost, {
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
				return o
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
			const o = {
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
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				f = n.n(p),
				b = n("./src/reddit/controls/Search/index.m.less"),
				h = n.n(b);
			const y = Object(a.b)(() => Object(o.c)({
				subredditsByName: Object(i.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.C)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}))(e => s.a.createElement("div", {
				className: Object(c.a)(f.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(l.b, {
				className: Object(c.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(l.b, {
				className: Object(c.a)(h.a.subredditIcon, e.iconClassName),
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
				o = n.n(a),
				c = n("./node_modules/react/index.js"),
				i = n.n(c),
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
						onClearSearchQuery: c,
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
						onChange: o()((function() {
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
							null === (e = t.current) || void 0 === e || e.focus(), c()
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
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
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
					return o.a.createElement("div", p({}, s, {
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
					case E.ec.Subreddit:
						const n = e.payload;
						return {
							icon: n.communityIcon || (null === (t = n.icon) || void 0 === t ? void 0 : t.url), title: n.displayText, key: `${n.id}-${n.name}`
						};
					case E.ec.Multireddit:
						const r = e.payload;
						return {
							icon: r.icon, title: r.displayText, key: `${r.ownerId}-${r.displayText}`
						};
					case E.ec.SyntaxScoped:
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
				const a = Object(c.e)(m.fb);
				return o.a.createElement(d.a, {
					className: O.a.SearchScopePill,
					"data-testid": "search-scope-pill"
				}, o.a.createElement(b, {
					className: O.a.pillText,
					"data-testid": "search-scope-pill-text",
					variant: a ? r.NIGHT : r.DAY
				}, o.a.createElement(h.b, {
					className: Object(i.a)(v.a.subredditIcon, O.a.subredditIcon),
					iconUrl: n.icon
				}), n.title, o.a.createElement("button", {
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
				}, o.a.createElement(y.a, {
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
				o = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.pb.POST
			}), l = async (e, t, n) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.pb.POST
			}), u = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.pb.POST
			}), p = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.pb.POST
			}), f = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				endpoint: Object(i.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: s.pb.GET,
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
					method: s.pb.GET
				}),
				b = async (e, t) => Object(a.a)(Object(c.a)(t, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.pb.PUT,
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
				method: r.pb.GET,
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
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === r.a.SELF || e.thumbnail.url === r.a.NSFW || e.media && Object(s.G)(e.media) || t)
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
				o = n("./src/reddit/models/Search/index.ts"),
				c = n("./src/reddit/helpers/ensureEndSlash/index.ts");
			const i = e => {
					var t;
					const n = (null === (t = e.displayInfo) || void 0 === t ? void 0 : t.subredditOrProfileName) || "";
					return `/${Object(c.a)(e.isProfile?n.replace("u/","user/"):n)}`
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
				const b = [];
				if (t.isTypeaheadSuggestion) f = i(t);
				else {
					if (b.push(`${a.x}=${Object(s.b)(t.rawQuery||t.searchQuery)}`), f = `/${d}`, t.section !== o.c.trending && t.section !== o.c.recent || n && n.source && b.push(`source=${n.source}`), null == l ? void 0 : l.enabled) switch (l.type) {
						case r.ec.Subreddit:
							const e = l.payload;
							f = `${e.url}${d}`, b.push(`${a.y}=1`), b.push(`${a.H}=${e.isNSFW?"1":""}`);
							break;
						case r.ec.Multireddit:
							const t = l.payload;
							f = `${t.url}${d}`, b.push(`${a.y}=1`), b.push(`${a.H}=${t.isNSFW?"1":""}`), b.push(`${a.n}=1`);
							break;
						case r.ec.SyntaxScoped:
							f = `/${Object(c.a)(null===(p=l.payload)||void 0===p?void 0:p.title)}${d}`, b.push(`${a.y}=1`)
					} else t.subredditOrProfileRestrictedName && (f = `${t.subredditOrProfileRestrictedName}${d}`, b.push(`${a.y}=1`));
					u && b.push(`${a.m}=1`), (null == n ? void 0 : n.t) && n.t !== r.pc.ALL && b.push(`${a.J}=${n.t}`), (null == n ? void 0 : n.sort) && b.push(`${a.E}=${n.sort}`), (null == n ? void 0 : n.type) && (n.type.includes(r.jc.Posts) || b.push(`${a.K}=${n.type[0]}`))
				}
				return {
					url: f,
					qs: b.join("&")
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
				o = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(a.map((function(e) {
					return e + ".reddit.com"
				}))).concat(a.map((function(e) {
					return e + ".reddit.local"
				}))),
				c = ["mod.reddit.com"],
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
						hostnames: o.concat("redd.it"),
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
						hostnames: c,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: c,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e, t) {
				const n = i[e];
				if (!i) throw new Error("Could not find reddit URL spec: " + e);
				const r = Object(s.a)(t);
				if (!r) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || o).indexOf(r.hostname)) return;
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
							d = Object(c.I)(e, i);
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
					Object(b.mb)(s) && (r.allow_over18 = 1), Object(b.q)(s) && (r.gated_optin = 1), Object(b.pb)(s) && (r.quarantine_optin = 1), r.include = f(e.getState(), n, t), t.endpoint = Object(o.a)(t.endpoint, r)
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
				o = n("./src/reddit/models/Vote/index.ts"),
				c = e => !0 === e ? o.a.upvoted : !1 === e ? o.a.downvoted : o.a.notVoted,
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
					isDeleted: e.author === r.H,
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
					voteState: c(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(a.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(a.b)(e.associated_award)), t
			};
			const d = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== r.H ? null : e.body === r.I ? i.c.User : e.body === r.Rb ? i.c.Moderator : null
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
							case r.L.NO_STRIPE_SUBSCRIPTION:
							case r.L.USER_DOESNT_EXIST:
							case r.L.USER_REQUIRED_ERROR:
							case r.L.VALIDATION_ERROR:
								return e;
							case r.L.NO_USER:
							case r.L.NO_TEXT:
							case r.L.NO_URL:
								return r.L.VALIDATION_ERROR;
							case r.L.CREDIT_CARD_FAILURE:
							case r.L.CREDIT_CARD_FAILURE_GENERIC:
								return r.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.L.VALIDATION_ERROR
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
					...s.o(e),
					listing: s.z(e, t),
					subreddit: s.lb(e)
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
				return B
			})), n.d(t, "l", (function() {
				return F
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
				o = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				c = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
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
					...p.o(e),
					source: y,
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
					...p.o(e),
					source: "search",
					screen: p.cb(e),
					search: n ? {
						...p.db(e, n, c.a.SERP),
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
					post: p.K(e, n)
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
					Object(h.a)(C({
						...e,
						action: o.c.CLICK
					}))
				},
				D = e => {
					Object(h.a)(C({
						...e,
						action: o.c.VIEW
					}))
				},
				w = {
					[c.a.Popular]: S.POPULAR_CAROUSEL,
					[c.a.Typeahead]: S.SEARCH_DROPDOWN
				},
				j = {
					[c.a.Popular]: l.d.tile,
					[c.a.Typeahead]: l.d.dropdown
				},
				C = e => {
					let {
						action: t,
						offset: n = 0,
						state: s,
						telemetrySource: a,
						trendingSearch: o
					} = e;
					const c = w[a],
						i = j[a],
						l = Object(f.a)(s, i).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === o.id) + n;
					return {
						...p.o(s),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: I(o),
						discoveryUnit: c === S.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: p.d(s, {
							paneName: c,
							position: l
						}),
						search: p.eb(s, {
							searchQuery: o.rawQuery,
							structureType: p.c.Trending,
							originElement: c === S.SEARCH_DROPDOWN ? p.a.SearchDropdown : void 0,
							telemetrySource: a
						})
					}
				},
				A = (e, t, n, r, s, a, c) => {
					Object(h.a)({
						...p.o(e),
						...Object(i.l)({
							state: e,
							postId: n,
							searchOptions: r,
							pageLayer: s,
							key: a,
							discoveryUnit: t
						}),
						action: o.c.VIEW,
						noun: c ? "ad" : "post"
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
						action: o.c.CLICK,
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
						action: o.c.CLICK,
						noun: r.ITEM_POST,
						post: p.K(a, t)
					}
				},
				k = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => Object(i.r)(e, ...t)
				},
				U = (e, t, n, r) => s => a => Object(i.j)({
					action: o.c.CLICK,
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
				B = (e, t) => n => s => ({
					...e ? m(s, e, t) : {},
					source: y,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: p.K(s, n)
				}),
				F = (e, t, n, r) => {
					Object(h.a)(G(t, n, r)(e))
				},
				G = (e, t, n, r) => s => {
					const a = Object(u.c)(s, {
							postId: t
						}),
						c = a ? Object(b.b)(s, a) : void 0;
					return {
						..._(s, e, n, r),
						...c,
						source: y,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: p.K(s, t)
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
						subreddit: p.mb(e, t) || null,
						source: y,
						action: o.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				W = (e, t, n) => {
					const s = q();
					return e => ({
						...m(e, s),
						actionInfo: H(e, 0, n),
						subreddit: p.mb(e, t) || null,
						source: y,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				Q = (e, t, n, s) => {
					const a = q();
					return e => ({
						...m(e, a),
						actionInfo: H(e, 0, n),
						subreddit: p.mb(e, t) || null,
						post: s ? p.K(e, s) : null,
						source: y,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				K = (e, t, n, s) => {
					const a = q();
					return e => ({
						...m(e, a),
						actionInfo: H(e, 0, n),
						subreddit: p.mb(e, t) || null,
						post: s ? p.K(e, s) : null,
						source: y,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Y = (e, t) => n => ({
					...m(n, e),
					...t && Object(b.b)(n, t),
					source: y,
					action: o.c.CLICK,
					noun: "item"
				}),
				$ = e => t => ({
					...m(t, e),
					source: y,
					action: o.c.CLICK,
					noun: "see_all"
				})
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
				return j
			})), n.d(t, "a", (function() {
				return C
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
					...s.o(e),
					screen: s.cb(e),
					subreddit: s.lb(e),
					userSubreddit: s.ub(e)
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
				j = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...a(e),
					scheduledPost: o(t)
				}),
				C = () => e => ({
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
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
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
				o = (e, t, n) => a => ({
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
				c = () => e => ({
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
				return o
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
				o = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...r.o(e),
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
				j = n("./src/reddit/actions/global/constants.ts"),
				C = n("./src/reddit/constants/localStorage.ts");
			const A = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.a:
						return t.payload[C.b.CATEGORIES_RANKING_STORE] || e;
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
				return $T
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
				j = n("./src/reddit/actions/multireddit/constants.ts"),
				C = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				A = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				P = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				R = n("./src/reddit/actions/pages/modListing/constants.ts"),
				N = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				L = n("./src/reddit/actions/pages/postCreation.ts"),
				x = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
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
						case C.b:
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
						case j.r:
						case D.g:
						case M.e:
						case "RECOMMENDED_POSTS_LOADED":
						case V.o:
						case H.i:
						case B.b:
						case U.TOPIC_DATA_LOADED:
						case U.MORE_POSTS_LOADED:
						case T.c:
						case T.d:
						case S.n:
						case V.w: {
							const r = (null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || [],
								s = O()(Object.values(r), "postId"),
								a = s.length,
								o = s.filter(e => e.isSponsored).length;
							return {
								...e,
								adsSeenCount: e.adsSeenCount + o,
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
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.a:
							return t.payload;
						default:
							return e
					}
				},
				ce = n("./node_modules/icepick/icepick.js"),
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
							return Object(ce.merge)(e, n)
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
						return Object(ce.setIn)(e, [n, r], a ? s : null)
					}
					case pe.h:
					case pe.b: {
						const {
							subredditId: n,
							userName: r,
							applied: s
						} = t.payload;
						return e[n] && e[n][r] ? Object(ce.setIn)(e, [n, r], s) : e
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
						return Object(ce.setIn)(e, [n, r], a ? s : null)
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
				const a = Object(ce.merge)(e, r);
				if (!s || !n) return a;
				const o = Object.keys(s)[0];
				if (!o) return a;
				const c = s[o],
					i = Object(ge.e)(n),
					d = c.applied,
					l = c.displaySettings && c.displaySettings.isUserEnabled;
				return i && d && l ? Object(ce.merge)(a, {
					[o]: {
						[i]: d
					}
				}) : a
			};
			var Oe = Object(J.c)({
					inContext: oe,
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
			var je = function() {
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
			const Ce = {},
				Ae = (e, t, n) => ({
					...e,
					[t]: n
				});
			var Pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
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
					api: Fe,
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
					case j.r:
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
					case B.b:
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
				ot = Object(J.c)({
					pending: at
				});
			const ct = {};
			var it = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct,
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
					api: ot,
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
						case c.i:
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
				jt = Object(J.c)({
					api: Tt,
					models: wt
				}),
				Ct = n("./src/reddit/actions/blockedRedditors.ts");
			const At = {
				message: ""
			};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ct.c:
					case Ct.d:
						return e;
					case Ct.b:
						return t.payload;
					default:
						return e
				}
			};
			var Rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ct.d:
							return !0;
						case Ct.c:
						case Ct.b:
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
						case Ct.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case Ct.e:
							const n = e.ids.slice();
							return n.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: n
							};
						case Ct.c:
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
			var Jt, Zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zt.a:
							return t.payload;
						default:
							return e
					}
				},
				en = (n("./src/chat/actions/message/unreadCount.ts"), n("./src/chat/endpoints/sendbird/index.ts"), n("./src/reddit/actions/tabBadging.ts"));
			n("./src/reddit/selectors/chat.ts"), n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Jt || (Jt = {}));
			const {
				REQUEST_FAILED: tn,
				REQUEST_PENDING: nn,
				REQUEST_SUCCESS: rn
			} = Jt;
			Object(F.a)(tn), Object(F.a)(nn), Object(F.a)(rn);
			G.qb;
			const sn = {
				apiError: null
			};
			var an = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jt.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...sn,
							apiError: e
						}
					}
					case Jt.REQUEST_SUCCESS:
					case Jt.REQUEST_PENDING:
						return sn;
					default:
						return e
				}
			};
			var on = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jt.REQUEST_PENDING:
							return !0;
						case Jt.REQUEST_FAILED:
						case Jt.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				cn = Object(J.c)({
					error: an,
					pending: on
				});
			const dn = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var ln = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jt.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				un = Object(J.c)({
					api: cn,
					count: ln
				}),
				pn = Object(J.c)({
					isInited: $t,
					unread: un,
					liveChatTooltipShowState: Zt,
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
				fn = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			var bn = function() {
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
				hn = n("./src/reddit/actions/communityFlairs/constants.ts");
			const yn = {};
			var mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hn.a: {
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
				gn = n("./src/reddit/actions/connection/constants.ts");
			const vn = {
				showBanner: !1,
				online: !0
			};
			var En = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gn.a:
							return {
								online: !1, showBanner: !0
							};
						case gn.b:
							return {
								online: !0, showBanner: !0
							};
						case gn.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				_n = n("./src/lib/omitKey/index.ts"),
				On = n("./src/reddit/actions/contentControls/constants.ts");
			const In = {};
			var Sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case On.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case On.c:
					case On.b: {
						const {
							subredditName: n
						} = t.payload;
						return Object(_n.a)(e, n)
					}
					default:
						return e
				}
			};
			const Tn = {};
			var Dn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case On.c:
						case On.a:
						case On.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === On.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				wn = Object(J.c)({
					error: Sn,
					pending: Dn
				}),
				jn = Object(J.c)({
					fetch: wn
				}),
				Cn = n("./src/lib/safeGet/index.ts");
			const An = {};
			var Pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : An,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case On.b: {
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
						case On.d: {
							const {
								subredditName: n,
								partialUpdates: r
							} = t.payload, s = Object(Cn.a)(e, n);
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
				Ln = n("./src/reddit/actions/preferences.ts");
			const xn = {};
			var kn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nn.b: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(Cn.a)(e, n)) {
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
							subredditId: o
						} = t.payload;
						if (r) {
							if (Object(Cn.a)(e, r)) {
								const t = {
									[r]: {
										privateSubreddit: !0,
										subredditDescription: n,
										isContributorRequestsDisabled: s,
										isContributorRequestTimestamp: a,
										subredditId: o
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
									subredditId: o
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
							quarantineMessageRTJson: o
						} = t.payload;
						return n ? {
							...e,
							[n]: {
								...Object(Cn.a)(e, n) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: r,
								quarantineMessage: s,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: o
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
								...Object(Cn.a)(e, a) || {},
								interstitialWarningMessage: n,
								interstitialWarningMessageHtml: r,
								interstitialWarningMessageRTJson: s
							}
						} : e
					}
					case Nn.l: {
						const {
							subredditName: n,
							banMessage: r,
							banTitle: s
						} = t.payload;
						if (n) {
							if (Object(Cn.a)(e, n)) {
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
					case Nn.m: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(Cn.a)(e, n)) {
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
							if (Object(Cn.a)(e, n)) {
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
						} = t.payload, r = G.rc + n.toLocaleLowerCase(), s = Object(Cn.a)(e, r) || {}, a = {
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
					case Ln.p:
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
						case be.b:
						case be.f:
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
			var Vn = function() {
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
					expiresAt: Vn
				}),
				Qn = n("./src/reddit/actions/postCollection/constants.ts");
			var Kn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
					case Qn.d:
					case Qn.c:
					case Qn.s:
					case Qn.r:
						return null;
					case Qn.b:
					case Qn.n:
						return t.payload;
					default:
						return e
				}
			};
			var Yn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qn.c:
						case Qn.r:
							return !0;
						case Qn.d:
						case Qn.b:
						case Qn.s:
						case Qn.n:
							return !1;
						default:
							return e
					}
				},
				$n = Object(J.c)({
					error: Kn,
					pending: Yn
				}),
				zn = Object(J.c)({
					createOrUpdate: $n
				}),
				Xn = n("./src/reddit/actions/postDraft.ts");
			const Jn = {};
			var Zn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.c:
					case Xn.b: {
						const {
							draftId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Xn.a: {
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
						case Xn.b: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Xn.c:
						case Xn.a: {
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
					case Xn.d:
						return t.payload;
					case Xn.f:
					case Xn.e:
						return null;
					default:
						return e
				}
			};
			var sr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.f:
							return !0;
						case Xn.e:
						case Xn.d:
							return !1;
						default:
							return e
					}
				},
				ar = Object(J.c)({
					error: rr,
					pending: sr
				});
			const or = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var cr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : or,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.l:
					case Xn.j:
						return or;
					case Xn.i: {
						const e = t.payload;
						return {
							...or,
							apiError: e
						}
					}
					case Xn.m: {
						const e = t.payload;
						return {
							...or,
							validationError: e
						}
					}
					case Xn.k: {
						const e = t.payload;
						return {
							...or,
							submitValidationError: e
						}
					}
					case Xn.h:
						return {
							...or, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var ir = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.j:
							return !0;
						case Xn.l:
						case Xn.i:
						case Xn.m:
						case Xn.k:
						case Xn.h:
							return !1;
						default:
							return e
					}
				},
				dr = Object(J.c)({
					error: cr,
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
				br = Object(J.c)({
					pending: fr
				});
			var hr = function() {
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
				mr = Object(J.c)({
					error: hr,
					pending: yr
				}),
				gr = Object(J.c)({
					converting: br,
					mediaUpload: mr
				});
			const vr = {};
			var Er = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vr,
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
			const _r = {};
			var Or = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _r,
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
				Tr = Object(J.c)({
					error: Er,
					fetched: Or,
					pending: Sr
				}),
				Dr = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const wr = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.P:
					case Dr.h:
					case Dr.k:
					case Dr.b:
					case Dr.d:
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
						return wr;
					case ur.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? wr : e
					}
					case ur.o: {
						const e = t.payload;
						return {
							...wr,
							apiError: e
						}
					}
					case ur.db: {
						const e = t.payload;
						return {
							...wr,
							validationError: e
						}
					}
					case ur.K:
					case ur.J: {
						const e = t.payload;
						return {
							...wr,
							submitValidationError: e
						}
					}
					case ur.a:
						return {
							...wr, needsCaptcha: !0
						};
					case ur.y:
						return {
							...wr, pollError: t.payload
						};
					default:
						return e
				}
			};
			var Cr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.w:
							return !0;
						case ur.P:
						case Dr.h:
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
				Ar = Object(J.c)({
					error: jr,
					pending: Cr
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
				Lr = Object(J.c)({
					submit: Ar,
					update: Nr
				});
			var xr = function() {
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
					error: xr,
					pending: kr
				}),
				Mr = Object(J.c)({
					change: Ur
				}),
				Br = Object(J.c)({
					collection: zn,
					draft: lr,
					editor: gr,
					page: Tr,
					post: Lr,
					subreddit: Mr
				}),
				Fr = n("./node_modules/lodash/omit.js"),
				Gr = n.n(Fr),
				qr = n("./src/reddit/actions/pages/postDraft.ts");
			const Hr = {};
			var Vr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Hr
					}
					case Xn.c: {
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
				Qr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				Kr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var Yr = n("./src/reddit/models/PostDraft/index.ts");
			var $r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.d:
							return t.payload || "";
						case ur.E:
							return "";
						case l.b: {
							if (Wr(t) !== G.Tb.POST_CREATION) return "";
							const n = Qr(t);
							return n && n.url ? n.url || "" : e
						}
						case Xn.g: {
							const e = t.payload;
							return e.kind === Yr.b.Link && e.body || ""
						}
						case Dr.b:
						case Dr.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				zr = n("./src/reddit/models/PostCreationForm/index.ts"),
				Xr = n("./src/reddit/models/ScheduledPost/index.ts");
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
						return t.payload.editorMode === zr.i.MARKDOWN ? t.payload.content || "" : e;
					case l.b: {
						if (Wr(t) !== G.Tb.POST_CREATION) return "";
						const n = Qr(t);
						return n && n.text ? Jr(n.text) : e
					}
					case Xn.g: {
						const e = t.payload;
						return e.kind === Yr.b.Markdown && e.body || ""
					}
					case Dr.b:
					case Dr.n: {
						const e = t.payload;
						return e.contentType === Xr.a.TEXT ? e.body : ""
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
							return Wr(t) !== G.Tb.POST_CREATION ? es : e;
						case Xn.g:
							return es;
						case Dr.b:
						case Dr.n:
							return es;
						default:
							return e
					}
				},
				ns = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				rs = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				ss = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const as = ns.a.createInitial;
			var os = function() {
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
							return n.editorMode === zr.i.RICH_TEXT && n.editorKey === zr.h.POST_CREATION ? ns.a.createInitial(n.content) : e
						}
						case l.b:
							return Wr(t) !== G.Tb.POST_CREATION ? ns.a.createInitial() : e;
						case Xn.g: {
							const e = t.payload;
							return e.kind === Yr.b.RichText ? ns.a.createInitial(e.body) : ns.a.createInitial()
						}
						case Dr.b:
						case Dr.n: {
							const e = t.payload,
								n = Object(rs.c)(e.mediaAssets);
							return ns.a.createInitial(e.contentType === Xr.a.RTJSON ? Object(ss.b)(e.body) : void 0, n || void 0)
						}
						default:
							return e
					}
				},
				cs = Object(J.c)({
					link: $r,
					markdown: Zr,
					media: ts,
					rte: os
				});
			var is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.b:
							return t.payload || null;
						case ur.E:
						case Xn.g:
						case Dr.b:
						case Dr.n:
						case ur.O:
							return null;
						case l.b:
							return Wr(t) === G.Tb.POST_CREATION ? e : null;
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
					case Dr.b:
					case Dr.n: {
						const e = t.payload;
						return Object(ds.n)({
							scheduledPost: e
						}) || null
					}
					case ur.E:
						return null;
					case l.b:
						return Wr(t) === G.Tb.POST_CREATION ? e : null;
					case Xn.g:
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
					case Dr.b:
					case Dr.n:
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
					case Dr.b:
					case Dr.n:
						return "CHAT" === t.payload.discussionType;
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Tb.POST_CREATION && e;
					case Xn.g:
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
						return Wr(t) === G.Tb.POST_CREATION && e;
					case Dr.b:
					case Dr.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var bs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.U:
						return t.payload || !1;
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Tb.POST_CREATION && e;
					case Xn.g:
						return t.payload.isNSFW || !1;
					case Dr.b:
					case Dr.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var hs = function() {
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
						return Wr(t) === G.Tb.POST_CREATION && e;
					case Xn.g:
						return t.payload.isOriginalContent || !1;
					case Dr.b:
					case Dr.n:
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
					case Dr.b:
					case Dr.n:
						return !!t.payload.poll;
					case ur.E:
						return !1;
					case l.b:
						return Wr(t) === G.Tb.POST_CREATION && e;
					default:
						return e
				}
			};
			var ms = function() {
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
						return Wr(t) === G.Tb.POST_CREATION && e;
					case Dr.b:
					case Dr.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dr.b:
					case Dr.n:
					case ur.E:
						return !1;
					case Xn.n:
						return t.payload;
					case l.b:
						return Wr(t) === G.Tb.POST_CREATION && e;
					case Xn.g:
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
						return Wr(t) === G.Tb.POST_CREATION && e;
					case Xn.g:
						return t.payload.isSpoiler || !1;
					case Dr.b:
					case Dr.n:
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
			var _s = function() {
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
			var Os = function() {
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
						case Dr.b:
						case Dr.n: {
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
							return Wr(t) !== G.Tb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				Ts = n("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				Ds = n("./src/reddit/helpers/scheduledPosts/index.ts");
			var ws = function() {
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
					case Xn.g:
					case ur.O:
						return null;
					case l.b:
						if (Wr(t) === G.Tb.POST_CREATION) {
							const o = null === (a = (null !== (s = null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.match.queryParams) && void 0 !== s ? s : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (o && Object(Xr.n)(o)) {
								const t = Object(Ts.c)();
								return {
									...e,
									...t,
									frequencyOption: o,
									recurrenceInfo: {
										...Ts.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(Ts.b)(new Date(t.submitDate), o)
									}
								}
							}
							return e
						}
						return null;
					case Dr.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case Dr.b: {
						const e = t.payload;
						return {
							...Object(Ds.h)(e)
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
						return Wr(t) === G.Tb.POST_CREATION && e;
					case Dr.b:
					case Dr.n:
					case Xn.g:
						return !1;
					default:
						return e
				}
			};
			var Cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.g:
						return t.payload || "";
					case l.b:
						return Wr(t) !== G.Tb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var As = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						return Wr(t) !== G.Tb.POST_CREATION ? null : e;
					case ur.E:
						return null;
					case Dr.b:
					case Dr.n:
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
						return Wr(t) !== G.Tb.POST_CREATION || e;
					case Xn.g:
						return t.payload.sendReplies;
					case Dr.b:
					case Dr.n:
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
					case Xn.g:
					case ur.O:
						return null;
					case l.b:
						return Wr(t) === G.Tb.POST_CREATION ? e : null;
					case Dr.b:
					case Dr.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Ns = G.cc.POST;
			var Ls = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ns,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.E:
						return Ns;
					case ur.r:
						return G.cc.CROSSPOST;
					case ur.i:
						return t.payload.submissionType || Ns;
					case l.b: {
						if (Wr(t) !== G.Tb.POST_CREATION) return Ns;
						const n = Qr(t);
						if (!n) return e;
						const {
							title: r = "",
							url: s,
							text: a = "",
							media: o = !1,
							selftext: c = !1,
							type: i = ""
						} = n, d = r && !a && !c;
						return o ? G.cc.MEDIA : void 0 !== s || d ? G.cc.LINK_ONLY : a || c ? G.cc.POST : i === G.Db ? G.cc.POLL : e
					}
					case Xn.g: {
						const e = t.payload;
						return Yr.a[e.kind]
					}
					case Dr.b:
					case Dr.n: {
						const e = t.payload;
						return e.poll ? G.cc.POLL : e.url ? G.cc.LINK_ONLY : G.cc.POST
					}
					default:
						return e
				}
			};
			var xs, ks = function() {
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
					case Xn.g:
					case ur.O:
						return null;
					case l.b:
						return Wr(t) === G.Tb.POST_CREATION ? e : null;
					case Dr.b:
					case Dr.n:
						return t.payload.suggestedCommentSort || null;
					default:
						return e
				}
			};
			! function(e) {
				e.PERIWINKLE = "periwinkle", e.ORANGERED = "orangered", e.MANGO = "mango", e.KIWI = "kiwi", e.ALIEN = "alien"
			}(xs || (xs = {}));
			const Us = {
				theme: xs.PERIWINKLE,
				topics: [],
				isUpcoming: !1
			};
			var Ms = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Us,
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
				Bs = n("./src/reddit/models/Poll/index.ts");
			const Fs = e => e ? e.replace(/\+/g, " ") : "",
				Gs = e => `Should ${e||"username"} become the top moderator?`,
				qs = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Hs = function() {
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
						if (Wr(t) !== G.Tb.POST_CREATION) return "";
						const n = Qr(t);
						return n && n.title ? Fs(n.title) : e
					}
					case Xn.g:
						return t.payload.title;
					case ur.q: {
						const {
							oldType: n,
							type: r
						} = t.payload;
						return r === Bs.a.ReplaceTopMod ? Gs("") : r === Bs.a.Spinoff ? qs("") : n === Bs.a.ReplaceTopMod || n === Bs.a.Spinoff ? "" : e
					}
					case i.c: {
						const {
							username: e
						} = t.payload;
						return Gs(e)
					}
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return qs(e)
					}
					case ur.i: {
						const {
							extra: n
						} = t.payload;
						return !n || n.govType !== Bs.a.ReplaceTopMod && n.govType !== Bs.a.Spinoff ? e : ""
					}
					case Dr.b:
					case Dr.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Vs = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Ws = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vs,
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
				Qs = Object(J.c)({
					body: cs,
					eventSchedule: is,
					flair: ls,
					govType: us,
					isChatPost: ps,
					isContestMode: fs,
					isNSFW: bs,
					isOC: hs,
					isPostAsMetaMod: ms,
					isPoll: ys,
					isPublicLink: gs,
					isSpoiler: vs,
					newSubreddit: Es,
					newTopMod: _s,
					nextSubreddit: Os,
					polls: Ss,
					postSchedule: ws,
					postToTwitter: js,
					recaptcha: Cs,
					scheduledPostId: As,
					sendReplies: Ps,
					stickyPosition: Rs,
					submissionType: Ls,
					suggestedSort: ks,
					title: Hs,
					tournament: Ws,
					talk: Ms
				});
			const Ks = e => e ? e.replace(/\+/g, " ") : "";
			var Ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b: {
						if (Wr(t) !== G.Tb.POST_CREATION) return null;
						const n = Qr(t);
						return n && n.text && Ks(n.text) ? zr.i.MARKDOWN : e
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
					case Dr.b:
					case Dr.n:
						return t.payload.contentType === Xr.a.RTJSON ? zr.i.RICH_TEXT : zr.i.MARKDOWN;
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
				zs = (e, t) => {
					const n = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(zr.w)(t)
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
						return e[G.Cb.BODY] ? {
							...e,
							[G.Cb.BODY]: []
						} : e;
					case ur.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return e[G.Cb.BODY] && n ? {
							...e,
							[G.Cb.BODY]: []
						} : e
					}
					case ur.j:
						return e[G.Cb.TITLE] ? {
							...e,
							[G.Cb.TITLE]: []
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
						return zs(e, n)
					}
					case l.b:
						return Wr(t) !== G.Tb.POST_CREATION ? $s : e;
					default:
						return e
				}
			};
			var Js = function() {
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
					case Xn.n:
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
					case Dr.h:
						return !1;
					case ur.R:
						return t.payload;
					case l.b:
						return Wr(t) === G.Tb.POST_CREATION && e;
					case ur.E:
					case Xn.l:
					case Xn.g:
						return !1;
					default:
						return e
				}
			};
			const Zs = zr.r.Post;
			var ea = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.w:
							return zr.r.Post;
						case ur.F:
							return t.payload;
						case Xn.j:
							return zr.r.Draft;
						case l.b:
							return Wr(t) !== G.Tb.POST_CREATION ? Zs : e;
						default:
							return e
					}
				},
				ta = Object(J.c)({
					editorMode: Ys,
					fieldValidation: Xs,
					isChanged: Js,
					submitMode: ea
				});
			var na = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ur.H:
						return t.payload.editorMode === zr.i.MARKDOWN ? t.payload.postContent || "" : e;
					case ur.I:
						return "";
					case ur.Q:
						return t.payload.editorMode === zr.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const ra = ns.a.createInitial;
			var sa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ra(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ur.I:
							return ns.a.createInitial();
						case ur.H: {
							const n = t.payload;
							return n.editorMode === zr.i.RICH_TEXT && "object" == typeof n.postContent ? ns.a.createInitial(n.postContent, n.mediaMetadata) : e
						}
						case ur.Q: {
							const n = t.payload;
							return n.editorMode === zr.i.RICH_TEXT && n.editorKey === zr.h.POST_EDITING ? ns.a.createInitial(n.content) : e
						}
						default:
							return e
					}
				},
				aa = Object(J.c)({
					markdown: na,
					rte: sa
				});
			var oa = function() {
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
					draft: aa,
					postId: oa
				});
			var ia = function() {
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
			var da = function() {
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
				la = Object(J.c)({
					error: ia,
					pending: da
				});
			var ua = function() {
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
					case Xn.g:
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
			const pa = {};
			var fa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pa,
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
			const ba = [];
			var ha = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ba,
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
				ya = Object(J.c)({
					api: la,
					isInputChanged: ua,
					model: fa,
					order: ha
				}),
				ma = Object(J.c)({
					api: Br,
					drafts: Vr,
					formData: Qs,
					formState: ta,
					postEditing: ca,
					subredditRec: ya
				}),
				ga = n("./src/reddit/actions/dashboard/constants.ts");
			const va = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var Ea = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : va,
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
			var _a = function() {
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
			var Oa = function() {
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
			var Ia = function() {
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
				Sa = Object(J.c)({
					error: _a,
					loaded: Oa,
					pending: Ia
				}),
				Ta = Object(J.c)({
					list: Sa
				}),
				Da = n("./node_modules/lodash/isEmpty.js"),
				wa = n.n(Da);
			const ja = {};
			var Ca = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ja,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.b: {
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
				Pa = n.n(Aa),
				Ra = n("./src/reddit/helpers/name/index.ts");
			const Na = {};
			var La = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Na,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							if (wa()(n)) return e;
							const r = {};
							return Pa()(n, e => {
								r[Object(Ra.i)(e.unitName)] = e.id
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
					api: Ta,
					models: Ca,
					nameToId: La
				}),
				ka = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const Ua = [];
			var Ma = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ua,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ka.a: {
							const {
								subredditId: n
							} = t.payload;
							return [...e, n]
						}
						default:
							return e
					}
				},
				Ba = n("./src/reddit/actions/economics/banners/constants.ts");
			const Fa = {
				dismissedBanners: {}
			};
			var Ga = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ba.c: {
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
						case Ba.d: {
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
						case Ba.a:
						case Ba.b: {
							const {
								subredditId: n,
								bannerType: r
							} = t.payload, s = e.dismissedBanners[n] || {}, a = t.type === Ba.a;
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
				qa = n("./src/reddit/models/Badge/managementPage.ts");
			const Ha = {
				badgeType: qa.a.Cosmetic,
				view: qa.c.Gallery
			};
			var Va = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ha,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.c: {
						const {
							badge: n,
							initialView: r
						} = t.payload;
						return n || r ? {
							...e,
							badgeType: n ? Object(qa.d)(n.placement) : e.badgeType,
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
						return Ha;
					default:
						return e
				}
			};
			var Wa = function() {
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
				Qa = n("./src/reddit/actions/economics/powerups/constants.ts");

			function Ka(e, t) {
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

			function Ya(e) {
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
						emotes: s.map(e => Ka(e, n))
					}
				}), t
			}
			const $a = {};

			function za(e, t, n) {
				if (!e[t]) return e;
				const r = e[t].findIndex(e => e.title === t);
				return -1 === r ? e : {
					...e,
					[t]: e[t].map((e, s) => s !== r ? e : {
						title: e.title,
						emotes: {
							...e.emotes,
							[n.name]: Ka(n, t)
						}
					})
				}
			}
			var Xa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $a,
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
					case Ie.jb: {
						const {
							customEmojisStatus: n,
							customEmojis: r,
							subredditId: s
						} = t.payload, {
							isEnabled: a
						} = n, {
							mediaPacks: o
						} = r;
						if (a && o) {
							const t = o.map(e => ({
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
					case Qa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload;
						return za(e, n, r)
					}
					default:
						return e
				}
			};
			const Ja = {};
			var Za = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ja,
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
				eo = n("./src/reddit/actions/economics/me/constants.ts");
			const to = {
				fetched: !1,
				data: {}
			};
			var no = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : to,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eo.a:
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
				ro = n("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const so = {
				fetched: !1,
				data: null
			};
			var ao = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : so,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eo.b:
							return {
								fetched: !0, data: e.data
							};
						case eo.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				oo = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				co = Object(J.c)({
					banners: Ga,
					currentBadgeManagementScreen: Va,
					currentModalArgs: Wa,
					emotes: Xa,
					gifs: Za,
					me: no,
					paymentSystems: ro.b,
					pointsCopy: ao,
					subredditPremium: oo.b
				}),
				io = n("./src/reddit/actions/emailVerificationTooltip.ts");
			const lo = {
				isShowing: !1
			};
			var uo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case io.a:
							return {
								...e, isShowing: !e.isShowing
							};
						default:
							return e
					}
				},
				po = n("./src/reddit/actions/emoji.ts");
			const fo = {};
			var bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case po.g: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case po.f:
						case po.e: {
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
				ho = Object(J.c)({
					pending: bo
				}),
				yo = Object(J.c)({
					list: ho
				});
			const mo = {};
			var go = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case po.e:
						case po.b:
							return e;
						case po.f: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case po.c: {
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
						case po.h: {
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
						case po.d: {
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
				vo = Object(J.c)({
					api: yo,
					models: go
				}),
				Eo = n("./src/reddit/actions/experiments.ts");
			const _o = /^experiment_(.*)$/i,
				Oo = e => {
					const t = e.match(_o);
					if (null !== t) return t[1]
				},
				Io = {};
			var So = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Io,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Qr(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = Oo(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return wa()(r) ? e : {
								...e,
								...r
							}
						}
						case Eo.b: {
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
				To = n("./src/reddit/actions/externalAccount.ts");
			const Do = {};
			var wo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Do,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case To.e:
					case To.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case To.d: {
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
			const jo = {};
			var Co = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case To.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case To.f:
						case To.d: {
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
				Ao = Object(J.c)({
					error: wo,
					pending: Co
				});
			const Po = {};
			var Ro = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Po,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case To.l:
					case To.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case To.j: {
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
			const No = {};
			var Lo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : No,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case To.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case To.c:
						case To.a: {
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
				xo = Object(J.c)({
					error: Ro,
					pending: Lo
				});
			const ko = {};
			var Uo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ko,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case To.i:
					case To.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case To.g: {
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
			const Mo = {};
			var Bo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case To.h: {
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
			const Fo = {};
			var Go = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case To.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case To.h:
						case To.g: {
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
				qo = Object(J.c)({
					error: Uo,
					fetched: Bo,
					pending: Go
				});
			const Ho = {};
			var Vo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ho,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case To.l:
					case To.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case To.j: {
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
			const Wo = {};
			var Qo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case To.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case To.k:
						case To.j: {
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
				Ko = Object(J.c)({
					error: Vo,
					pending: Qo
				}),
				Yo = Object(J.c)({
					connect: Ao,
					disconnect: xo,
					user: Ko,
					subreddit: qo
				});
			const $o = {};
			var zo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case To.h: {
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
			const Xo = {};
			var Jo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case To.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case To.c: {
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
				Zo = Object(J.c)({
					api: Yo,
					user: Jo,
					subreddit: zo
				}),
				ec = n("./src/reddit/featureFlags/index.ts");
			const tc = new Set(["0", "disabled", "false", "off", ""]);
			var nc = e => !tc.has(e.toLowerCase());
			const rc = ec.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				sc = ec.a.reduce((e, t) => (e[t] = null, e), {});
			var ac = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Qr(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(ec.g)(e);
									if (r) {
										const s = rc[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || nc(r);
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
						case ec.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case ec.c: {
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
				oc = Object(J.c)({
					overrides: ac
				}),
				cc = n("./src/reddit/actions/firstPost/constants.ts");
			const ic = {
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
			var dc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ic,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cc.e:
							return {
								...e, firstFormEditEvent: t.payload
							};
						case cc.d:
							return {
								...e, postTitle: t.payload
							};
						case cc.b:
							return {
								...e, postBody: t.payload
							};
						case cc.c:
							return {
								...e, subreddit: t.payload
							};
						case cc.a:
							return {
								...e, currentPromptIndex: t.payload
							};
						case cc.f:
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
				lc = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const uc = {
				focusedVerticalGqlError: null
			};
			var pc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lc.g:
					case lc.f:
					case lc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case lc.d:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const fc = {
				focusedVerticalGqlPending: !1
			};
			var bc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lc.g:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case lc.d:
						case lc.f:
						case lc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				hc = Object(J.c)({
					error: pc,
					pending: bc
				});
			var yc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lc.f:
					case lc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const mc = {
				dismissed: !0
			};
			var gc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lc.i:
						return {
							dismissed: !1
						};
					case lc.h:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var vc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lc.f:
					case lc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Ec = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lc.f:
					case lc.c:
					case lc.e:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var _c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lc.f:
						case lc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Oc = Object(J.c)({
					api: hc,
					components: gc,
					interactedSubredditIds: vc,
					recommendedSubredditIds: _c,
					category: yc,
					lastLoadedEnv: Ec
				});
			Object(F.a)("FONTS_FONT_FILES_PARSED");
			const Ic = [];
			var Sc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ic,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Tc = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.b:
						return t.payload;
					default:
						return e
				}
			};
			var Dc = function() {
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
			var wc = function() {
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
			var jc = function() {
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
				Cc = Object(J.c)({
					error: Dc,
					pending: wc,
					showLoader: jc
				});
			var Ac = function() {
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
			var Pc = function() {
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
			var Rc = function() {
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
			var Nc = function() {
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
			var Lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.H:
						return !0;
					default:
						return e
				}
			};
			var xc = function() {
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
			const kc = ze.o;
			var Uc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.eb:
							return t.payload;
						case Ie.I: {
							const {
								award: e
							} = t.payload;
							return e || kc
						}
						default:
							return e
					}
				},
				Mc = Object(J.c)({
					api: Cc,
					correlationId: Ac,
					gildModalThingId: Rc,
					isAnonymous: Nc,
					isIframed: Lc,
					message: xc,
					gildedThing: Pc,
					selectedAward: Uc
				});
			var Bc = function() {
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
			var Fc = function() {
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
				Gc = Object(J.c)({
					error: Bc,
					pending: Fc
				});
			var qc = function() {
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
				Hc = Object(J.c)({
					api: Gc,
					givePremiumModalAccountName: qc
				}),
				Vc = n("./src/reddit/actions/header.ts"),
				Wc = n("./src/reddit/actions/overlayEvents.ts");
			var Qc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vc.a:
							return !1;
						case Vc.b:
							return !0;
						case Vc.c:
							return !e;
						case Wc.b:
							return !1;
						default:
							return e
					}
				},
				Kc = Object(J.c)({
					isSubscriptionsDropdownOpen: Qc
				});
			var Yc = function() {
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
				$c = n("./src/reddit/actions/imageUploads.ts");
			const zc = {};
			var Xc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $c.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case $c.c:
					case $c.e:
					case $c.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case $c.a: {
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
			const Jc = {};
			var Zc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jc,
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
				ei = n("./src/reddit/actions/interceptedAction.ts");
			var ti = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ei.a:
							return t.payload;
						case ei.b:
							return null;
						default:
							return e
					}
				},
				ni = n("./src/reddit/actions/changeUsername.ts");
			var ri = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ni.CHANGE_USERNAME_TOOLTIP_CLOSED:
							return !1;
						case ni.CHANGE_USERNAME_TOOLTIP_OPENED:
							return !0;
						default:
							return e
					}
				},
				si = n("./src/reddit/actions/moderatingSubreddits.ts");
			var ai = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case si.a: {
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
				oi = n("./src/reddit/actions/jsApi.ts");
			const ci = [];
			var ii = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ci,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oi.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				di = n("./src/reddit/actions/langSite/index.ts");
			const li = {
				bannerClosedTime: 0
			};
			var ui = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : li,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case di.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				pi = n("./src/reddit/actions/leaderboard/constants.ts");
			const fi = {};
			var bi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pi.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case pi.b:
					case pi.c: {
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
			const hi = {};
			var yi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pi.a:
						case pi.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case pi.b: {
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
				mi = Object(J.c)({
					error: bi,
					pending: yi
				});
			const gi = {};
			var vi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pi.c: {
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
				Ei = Object(J.c)({
					api: mi,
					models: vi
				});
			var _i = function() {
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
			const Oi = {};
			var Ii = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oi,
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
						return -1 === r.indexOf(G.jc.Users) ? e : {
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
						return -1 === a.indexOf(G.jc.Users) || s && s.authors ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Si = {};
			var Ti = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Si,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.d:
						case ye.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.jc.Users) ? e : {
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
							return -1 === r.indexOf(G.jc.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Di = Object(J.c)({
					error: Ii,
					pending: Ti
				});
			const wi = {};
			var ji = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(G.jc.Users)) return e;
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
			const Ci = {};
			var Ai = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ci,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(G.jc.Users) && e[n] ? {
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
						return -1 === s.indexOf(G.jc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Pi = {};
			var Ri = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.jc.Users) ? e : r.authors ? {
								...e,
								[n]: {
									token: r.authors
								}
							} : Object(_n.a)(e, n)
						}
						default:
							return e
					}
				},
				Ni = Object(J.c)({
					api: Di,
					identifiers: Ai,
					fetchedTokens: ji,
					loadMore: Ri
				});
			const Li = {};
			var xi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Li,
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
						return -1 === r.indexOf(G.jc.Comments) ? e : {
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
						return -1 === a.indexOf(G.jc.Comments) || s && s.comments ? e : {
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
						case Ze.d:
						case ye.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.jc.Comments) ? e : {
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
							return -1 === r.indexOf(G.jc.Comments) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Mi = Object(J.c)({
					error: xi,
					pending: Ui
				});
			const Bi = {};
			var Fi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(G.jc.Comments)) return e;
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
			const Gi = {};
			var qi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(G.jc.Comments) && e[n] ? {
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
						return -1 === s.indexOf(G.jc.Comments) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Hi = {};
			var Vi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.jc.Comments) ? e : r.comments ? {
								...e,
								[n]: {
									token: r.comments
								}
							} : Object(_n.a)(e, n)
						}
						default:
							return e
					}
				},
				Wi = Object(J.c)({
					api: Mi,
					identifiers: qi,
					fetchedTokens: Fi,
					loadMore: Vi
				});
			const Qi = {};
			var Ki = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qi,
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
						return -1 === r.indexOf(G.jc.Subreddits) ? e : {
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
						return -1 === a.indexOf(G.jc.Subreddits) || s && s.communities ? e : {
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
						case Ze.d:
						case ye.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.jc.Subreddits) ? e : {
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
							return -1 === r.indexOf(G.jc.Subreddits) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				zi = Object(J.c)({
					error: Ki,
					pending: $i
				});
			const Xi = {};
			var Ji = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(G.jc.Subreddits)) return e;
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
			const Zi = {};
			var ed = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(G.jc.Subreddits) && e[n] ? {
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
						return -1 === s.indexOf(G.jc.Subreddits) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const td = {};
			var nd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : td,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.jc.Subreddits) ? e : r.communities ? {
								...e,
								[n]: {
									token: r.communities
								}
							} : Object(_n.a)(e, n)
						}
						default:
							return e
					}
				},
				rd = Object(J.c)({
					api: zi,
					identifiers: ed,
					fetchedTokens: Ji,
					loadMore: nd
				});
			const sd = {};
			var ad = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sd,
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
						return -1 === r.indexOf(G.jc.Subreddits) && -1 === r.indexOf(G.jc.Users) ? e : {
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
						return -1 === s.indexOf(G.jc.Subreddits) && -1 === s.indexOf(G.jc.Users) ? e : {
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
			const od = {};
			var cd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : od,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.d:
						case ye.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(G.jc.Subreddits) && -1 === r.indexOf(G.jc.Users) ? e : {
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
							return -1 === r.indexOf(G.jc.Subreddits) && -1 === r.indexOf(G.jc.Users) ? e : {
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
				id = Object(J.c)({
					error: ad,
					pending: cd
				});
			const dd = {};
			var ld = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(G.jc.Subreddits) && -1 === s.indexOf(G.jc.Users)) return e;
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
			const ud = {};
			var pd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ud,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.e: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.jc.Subreddits) && -1 === s.indexOf(G.jc.Users) ? e : {
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
						return -1 === s.indexOf(G.jc.Subreddits) && -1 === s.indexOf(G.jc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const fd = {};
			var bd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(G.jc.Subreddits) && -1 === s.indexOf(G.jc.Users) ? e : r.listings ? {
								...e,
								[n]: {
									token: r.listings
								}
							} : Object(_n.a)(e, n)
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
				hd = Object(J.c)({
					api: id,
					identifiers: pd,
					fetchedTokens: ld,
					loadMore: bd
				});
			const yd = {};
			var md = n("./src/reddit/actions/pages/postSetPage/constants.ts");
			const gd = {};
			var vd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gd,
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
					case j.s:
					case j.r:
					case A.b:
					case A.c:
					case md.b:
					case md.c:
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
						return -1 === r.indexOf(G.jc.Posts) ? e : {
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
					case j.q:
					case A.a:
					case H.h:
					case md.a:
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
						return -1 === a.indexOf(G.jc.Posts) || s && s.posts ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const Ed = {};
			var _d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ed,
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
						case j.s:
						case A.c:
						case md.c:
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
							return -1 === r.indexOf(G.jc.Posts) ? e : {
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
						case md.a:
						case md.b:
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
						case j.r:
						case j.q:
						case M.d:
						case M.e:
						case Q.MORE_POSTS_FAILED:
						case Q.MORE_POSTS_LOADED:
						case C.a:
						case C.b:
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
							return -1 === r.indexOf(G.jc.Posts) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Od = Object(J.c)({
					error: vd,
					pending: _d
				});
			const Id = {};
			var Sd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Id,
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
				Td = n("./src/reddit/actions/postList.ts"),
				Dd = n("./node_modules/lodash/omitBy.js"),
				wd = n.n(Dd);

			function jd(e, t) {
				return t = t.toLowerCase(), wd()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const Cd = {};
			var Ad = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cd,
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
						return n in e ? Gr()(e, [n]) : e
					}
					case k.SUBREDDIT_INVALIDATE_LISTING:
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
						case j.r:
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
							if (s.indexOf(G.jc.Posts) > -1) {
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
							return jd(e, t.payload);
						default:
							return e
					}
				},
				Nd = n("./src/reddit/actions/post.ts");
			const Ld = {};
			var xd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ld,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.c:
						case D.d:
						case R.f:
						case N.c:
						case Q.PROFILE_POSTS_PENDING:
						case k.SUBREDDIT_PENDING:
						case md.c:
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
						case C.b:
						case D.c:
						case P.b:
						case N.b:
						case k.SUBREDDIT_LOADED:
						case V.o:
						case A.b:
						case md.b:
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
						case j.r:
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
							return -1 === s.indexOf(G.jc.Posts) ? e : {
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
							return -1 === s.indexOf(G.jc.Posts) ? e : {
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
						case k.SUBREDDIT_INVALIDATE_LISTING:
							return jd(e, t.payload);
						default:
							return e
					}
				},
				kd = n("./src/lib/makeListingKey/index.ts");
			const Ud = {};
			var Md = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ud,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(kd.b)(n) ? {
							...e,
							[n]: {
								sort: r,
								hasChanged: !1
							}
						} : e
					}
					case Ln.a:
					case Ln.p: {
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
			const Bd = {};
			var Fd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bd,
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
					case j.r:
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
						} : Object(_n.a)(e, n)
					}
					case Ze.e:
					case ye.c: {
						const {
							key: n,
							tokens: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(G.jc.Posts) ? e : r.posts ? {
							...e,
							[n]: {
								token: r.posts
							}
						} : Object(_n.a)(e, n)
					}
					case k.SUBREDDIT_INVALIDATE_LISTING:
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
				Hd = Object(J.c)({
					api: Od,
					correlationIds: Sd,
					endMarkers: Ad,
					fetchedTokens: Rd,
					ids: xd,
					listingSort: Md,
					loadMore: Fd,
					pageInfo: qd,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yd,
							r = arguments.length > 1 ? arguments[1] : void 0;
						switch (r.type) {
							case ye.c:
							case Ze.e: {
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
					}))(G.jc.Posts, G.ic.Posts)
				}),
				Vd = Object(J.c)({
					activeKey: _i,
					authorOrder: Ni,
					commentOrder: Wi,
					communityOrder: rd,
					listingOrder: hd,
					postOrder: Hd
				});
			var Wd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c: {
						const n = t.payload;
						return wa()(n.announcements) ? e : n.announcements || null
					}
					default:
						return e
				}
			};
			var Qd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c: {
						const n = t.payload;
						return wa()(n.featuredLiveThread) ? e : n.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Kd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c:
						return !0;
					default:
						return e
				}
			};
			var Yd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				$d = Object(J.c)({
					announcements: Wd,
					featured: Qd,
					isFrontpageLoaded: Kd,
					shouldShowAnnouncements: Yd
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
				nl = Object(J.c)({
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
				al = Object(J.c)({
					isMuted: rl,
					volume: sl
				}),
				ol = n("./src/reddit/actions/merchandisingUnitAnnouncements/constants.ts");
			const cl = [];
			var il = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case D.c: {
							const r = t.payload;
							return wa()(r.merchandisingUnitAnnouncements) ? e : null !== (n = r.merchandisingUnitAnnouncements) && void 0 !== n ? n : cl
						}
						case ol.a: {
							const n = t.payload;
							return e.filter(e => e.feedElement.id !== n.id)
						}
						default:
							return e
					}
				},
				dl = n("./src/reddit/actions/meta.ts");
			const ll = {
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
			var ul = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ll,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dl.b:
							return t.payload;
						case dl.a:
							return {
								...e, ...t.payload
							};
						case dl.e:
							return {
								...e, locale: t.payload
							};
						case dl.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case dl.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case dl.d:
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
				pl = n("./src/reddit/actions/subredditModeration/constants.ts");
			const fl = {};
			var bl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fl,
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
					case pl.kb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(_n.a)(e, n)
					}
					case pl.db: {
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
			var hl = function() {
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
			var yl = function() {
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
				ml = Object(J.c)({
					error: hl,
					pending: yl
				});
			const gl = [];
			var vl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gl,
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
				El = Object(J.c)({
					api: ml,
					names: vl
				}),
				_l = Object(J.c)({
					filteredSubreddits: El
				}),
				Ol = n("./src/reddit/actions/modMode.ts");
			var Il = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ol.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const Sl = {};
			var Tl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sl,
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
			const Dl = {};
			var wl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dl,
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
				jl = Object(J.c)({
					error: Tl,
					pending: wl
				});
			const Cl = {};
			var Al = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cl,
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
				Pl = Object(J.c)({
					api: jl,
					models: Al
				});
			var Rl = function() {
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
			var Nl = function() {
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
			var Ll = function() {
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
				xl = Object(J.c)({
					error: Rl,
					fetched: Nl,
					pending: Ll
				});
			var kl = function() {
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
			var Ul = function() {
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
			var Ml = function() {
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
				Bl = Object(J.c)({
					error: kl,
					fetched: Ul,
					pending: Ml
				});
			var Fl = function() {
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
			var Gl = function() {
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
			var ql = function() {
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
				Hl = Object(J.c)({
					error: Fl,
					fetched: Gl,
					pending: ql
				});
			var Vl = function() {
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
			var Wl = function() {
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
			var Ql = function() {
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
				Kl = Object(J.c)({
					error: Vl,
					fetched: Wl,
					pending: Ql
				});
			var Yl = function() {
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
			var $l = function() {
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
			var zl = function() {
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
				Xl = Object(J.c)({
					error: Yl,
					fetched: $l,
					pending: zl
				});
			var Jl = function() {
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
			var Zl = function() {
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
				eu = Object(J.c)({
					fetched: Jl,
					pending: Zl
				});
			var tu = function() {
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
			var nu = function() {
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
			var ru = function() {
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
				su = Object(J.c)({
					error: tu,
					fetched: nu,
					pending: ru
				});
			var au = function() {
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
			var ou = function() {
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
			var cu = function() {
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
				iu = Object(J.c)({
					error: au,
					fetched: ou,
					pending: cu
				}),
				du = Object(J.c)({
					addSubreddit: xl,
					create: Bl,
					deleteMulti: Hl,
					duplicate: Kl,
					edit: Xl,
					forUser: eu,
					recommendations: su,
					removeSubreddit: iu
				}),
				lu = n("./node_modules/lodash/isEqual.js"),
				uu = n.n(lu),
				pu = n("./node_modules/lodash/union.js"),
				fu = n.n(pu);

			function bu(e, t, n) {
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
			var hu = n("./src/reddit/actions/profile/constants.ts");
			const yu = {};
			var mu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.b:
						case j.r:
						case j.u:
						case hu.h: {
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
								a[t] = fu()(s, n).sort((e, t) => o[e].displayText.toLowerCase() > o[t].displayText.toLowerCase() ? 1 : -1)
							}
							return uu()(e, a) ? e : a
						}
						case j.g:
						case j.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = bu(s, r.url, (e, t) => e > t ? 1 : -1);
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
				gu = n("./src/reddit/actions/subscription/constants.ts"),
				vu = n("./src/reddit/models/Multireddit/index.ts");
			const Eu = {};
			var _u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.b:
					case j.r:
					case j.u:
					case hu.h:
					case ye.c: {
						let n = {};
						for (const r in t.payload.multireddits) {
							const s = {
									...t.payload.multireddits[r]
								},
								a = e[r];
							a && !Object(vu.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && uu()(e[s.url], s) || (n = {
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
					case gu.d: {
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
					case gu.e: {
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
			const Ou = {};
			var Iu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ou,
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
				Su = Object(J.c)({
					api: du,
					byUserId: mu,
					models: _u,
					recommendations: Iu
				}),
				Tu = n("./src/reddit/actions/notificationBanner.ts");
			var Du = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tu.b:
							return t.payload.notificationBannerId;
						case Tu.a:
							return null;
						default:
							return e
					}
				},
				wu = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var ju = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case wu.e:
					case wu.b:
						return !1;
					default:
						return e
				}
			};
			var Cu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wu.e:
							return !0;
						case wu.a:
						case wu.b:
							return !1;
						default:
							return e
					}
				},
				Au = Object(J.c)({
					error: ju,
					pending: Cu
				}),
				Pu = n("./src/reddit/actions/inboxBanner/constants.ts"),
				Ru = n("./src/reddit/models/inboxBanner/index.ts");
			const Nu = {
				banners: [],
				dismissedBanners: []
			};
			var Lu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pu.b:
						return {
							...e, banners: t.payload.reduce((e, t) => t.applicablePlatforms.find(e => e.platform === Ru.b.DESKTOP) ? [...e, t] : e, [])
						};
					case Pu.a:
						return {
							...e, dismissedBanners: [...e.dismissedBanners || [], t.payload]
						};
					default:
						return e
				}
			};
			var xu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var ku = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const Uu = [];
			var Mu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wu.b: {
						const n = t.payload && t.payload.notifications;
						return [...e, ...n]
					}
					case wu.f: {
						const n = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== n)
					}
					case wu.d: {
						const n = t.payload && t.payload.id,
							r = t.payload && t.payload.now,
							s = e.findIndex(e => e.id === n);
						return -1 === s ? e : [...e.slice(0, s), {
							...e[s],
							readAt: r
						}, ...e.slice(s + 1)]
					}
					case wu.c: {
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
			var Bu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Fu = Object(J.c)({
					api: Au,
					banner: Lu,
					earlierDividerIndex: xu,
					notifications: Mu,
					pageInfo: Bu,
					markAllAsReadTimestamp: ku
				}),
				Gu = n("./src/reddit/actions/nps.ts");
			const qu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Hu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gu.c:
							return {
								...qu, pending: !0
							};
						case Gu.a:
							return qu;
						case Gu.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...qu,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				Vu = n("./src/reddit/actions/accountGender/constants.ts"),
				Wu = n("./src/reddit/actions/onboarding/constants.ts");
			const Qu = {
				success: !1,
				failure: !1
			};
			var Ku = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vu.b:
						return {
							...Qu, success: !0
						};
					case Vu.c:
						return {
							...Qu, failure: !0
						};
					case Wu.a:
						return {
							...Qu
						};
					default:
						return e
				}
			};
			var Yu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case D.c:
					case Wu.c: {
						const e = t.payload;
						return (null == e ? void 0 : e.interestTopicRecommendations) && !wa()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
					}
					default:
						return e
				}
			};
			var $u = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wu.b:
							return !0;
						default:
							return e
					}
				},
				zu = Object(J.c)({
					genderUpdateState: Ku,
					interestTopicRecommendationsState: Yu,
					shouldSkipOnboardingState: $u
				});
			const Xu = e => {
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
			const Ju = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = Xu(n);
					return t
				},
				Zu = {};
			var ep = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eo.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return Ju(n)
					}
					default:
						return e
				}
			};
			var tp = Object(J.c)({
					byName: ep,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Eo.a: {
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
				np = Object(J.c)({
					experiments: tp
				}),
				rp = n("./node_modules/history/esm/history.js"),
				sp = n("./src/reddit/constants/history.ts");
			n("./src/reddit/helpers/isRobotIndexableMeta.ts");
			const ap = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				op = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				cp = (e, t, n, r) => {
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
			var ip = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ap,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case l.b: {
						const r = (null === (n = e.currentPage) || void 0 === n ? void 0 : n.isInitialPage) ? null : e.currentPage,
							s = t.payload,
							{
								routeMatch: a,
								location: o
							} = s,
							{
								key: c
							} = o;
						if (void 0 === c) return e;
						const i = Object(rp.e)(o),
							d = a ? cp(c, i, a, o) : op(c, i);
						let {
							referrers: l
						} = e;
						if ("PUSH" === s.action) {
							const e = r && r.url || "";
							l = {
								...l,
								[c]: e
							}
						} else if ("REPLACE" === s.action && r && l[r.key]) {
							const {
								[r.key]: e, ...t
							} = l;
							l = {
								...t,
								[c]: e
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
						const a = Object(rp.e)(r),
							o = n ? cp(s, a, n, r) : op(s, a);
						return {
							...e,
							currentPage: {
								...e.currentPage,
								...o,
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
									[sp.b.FeedCorrelationId]: n
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const dp = {};
			var lp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dp,
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
			const up = {};
			var pp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : up,
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
				fp = Object(J.c)({
					error: lp,
					pending: pp
				}),
				bp = Object(J.c)({
					voting: fp
				}),
				hp = n("./node_modules/lodash/mapValues.js"),
				yp = n.n(hp),
				mp = n("./src/reddit/reducers/posts/models/helpers.ts");
			const gp = e => {
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
			var vp = e => {
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
							type: Bs.a.GA,
							isNSFW: o,
							isPrediction: i,
							isSpoiler: c,
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
						type: Bs.a.GA,
						isPrediction: i,
						userSelection: b
					}
				},
				Ep = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				_p = n("./src/reddit/models/Prediction/index.ts");

			function Op(e, t) {
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
			const Ip = {};
			var Sp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip,
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
						const r = yp()(t.payload.posts, Object(mp.i)([mp.q])),
							s = {};
						return Object.keys(r).forEach(e => {
							var t, n;
							const a = r[e];
							if (a.pollData && (s[e] = vp(a)), null === (n = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									s[t.id] = Op(t, {
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
					case S.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return e[n] && Object(_p.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(Ep.b)(r)
							}
						} : e
					}
					default:
						return e
				}
			};
			const Tp = {};
			var Dp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.k: {
						const {
							[Bs.b.ByVoters]: n, pollId: r
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
										[Bs.b.ByVoters]: s,
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
							const s = gp(r[t].pollData);
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
			const wp = {};
			var jp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								[Bs.b.ByVotingPower]: n, pollId: r
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
											[Bs.b.ByVotingPower]: s,
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
				Cp = Object(J.c)({
					byVoters: Dp,
					byVotingPower: jp
				});
			const Ap = {};
			var Pp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ap,
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
				Rp = Object(J.c)({
					api: bp,
					models: Sp,
					results: Cp,
					rewards: Pp
				});
			const Np = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Lp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Np,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qn.i:
					case Qn.j:
						return {
							...e, reorderError: null
						};
					case Qn.h:
						return {
							...e, reorderError: t.payload
						};
					case Qn.l:
					case Qn.m:
						return {
							...e, updateDescriptionError: null
						};
					case Qn.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Qn.p:
					case Qn.q:
						return {
							...e, updateLayoutError: null
						};
					case Qn.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const xp = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var kp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qn.i:
							return {
								...e, reorderPending: !0
							};
						case Qn.h:
						case Qn.j:
							return {
								...e, reorderPending: !1
							};
						case Qn.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Qn.k:
						case Qn.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Qn.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Qn.o:
						case Qn.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				Up = Object(J.c)({
					error: Lp,
					pending: kp
				}),
				Mp = n("./src/reddit/helpers/path/index.ts");
			const Bp = {},
				Fp = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Mp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var Gp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bp,
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
					case Nd.j:
					case j.r:
					case D.g:
					case M.e:
					case "RECOMMENDED_POSTS_LOADED":
					case H.i:
					case Ze.e:
					case B.b:
					case ye.c:
					case Qn.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = Fp(r);
							s = yp()(n, e)
						}
						return {
							...e,
							...s
						}
					}
					case Qn.d: {
						const {
							collection: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						const s = n.id;
						let a = n;
						if (r) {
							a = Fp(r)(n)
						}
						return {
							...e,
							[s]: a
						}
					}
					case Qn.g: {
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
					case Qn.a: {
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
					case Qn.e: {
						const {
							collectionId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case Qn.s: {
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
					case Qn.j: {
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
					case Qn.m: {
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
					case Qn.q: {
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
			const qp = {};
			var Hp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.PAGE_LOADED:
						case Qn.f: {
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
						case Qn.d: {
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
						case Qn.e: {
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
				Vp = Object(J.c)({
					models: Gp,
					subredditToIds: Hp,
					api: Up
				}),
				Wp = n("./src/reddit/actions/postFlair.ts"),
				Qp = n("./src/reddit/models/Flair/index.ts");
			const Kp = {},
				Yp = {
					displaySettings: {
						isEnabled: !1,
						position: Qp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				$p = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					return 0 === n.length ? e : n.reduce((e, n) => (e[n] = {
						...Yp,
						...e[n],
						...t[n]
					}, e), {
						...e
					})
				};
			var zp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.b:
						case P.f:
						case L.PAGE_LOADED:
						case D.g:
						case R.e:
						case R.h:
						case j.r:
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
						case B.b:
						case B.b:
						case x.b:
						case x.e:
						case Q.MORE_POSTS_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ze.e:
						case Ze.e:
						case H.i:
							return $p(e, t.payload.postFlair);
						case Wp.c: {
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
						case Wp.a: {
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
						case Wp.f: {
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
						case Wp.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = Gr()(a, r), i = o.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: i
								}
							}
						}
						case Wp.e:
						case Wp.d: {
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
							return $p(e, n.postFlair)
						}
						default:
							return e
					}
				},
				Xp = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const Jp = {
				pending: !1,
				items: {}
			};
			var Zp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xp.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Xp.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var ef = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nd.c:
							return t.payload;
						default:
							return e
					}
				},
				tf = n("./src/reddit/actions/embedAndImage.ts");
			const nf = {};
			var rf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tf.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case tf.a: {
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
				sf = Object(J.c)({
					loadable: rf
				});
			const af = {};
			var of = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : af,
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
			var cf = function() {
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
			const df = [];
			var lf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : df,
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
			const uf = {};
			var pf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uf,
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
			var ff = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nd.a:
							return t.payload;
						default:
							return e
					}
				},
				bf = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const hf = {};
			var yf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bf.a: {
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
			const mf = {};
			var gf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mf,
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
				vf = n("./src/reddit/actions/bulkActions/constants.ts"),
				Ef = n("./src/reddit/actions/constants.ts"),
				_f = n("./src/reddit/actions/flairManagement/constants.ts"),
				Of = n("./src/reddit/actions/googleQASchema/constants.ts"),
				If = n("./src/reddit/actions/happeningNow/constants.ts"),
				Sf = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Tf = n("./src/reddit/actions/subredditTopContent.ts"),
				Df = n("./src/reddit/helpers/isPost.ts"),
				wf = n("./node_modules/lodash/pickBy.js"),
				jf = n.n(wf);

			function Cf(e, t) {
				const n = jf()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !uu()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var Af = n("./src/reddit/models/Gold/Gild/index.tsx"),
				Pf = n("./src/reddit/models/Media/index.ts"),
				Rf = n("./src/reddit/models/ModQueue/index.ts"),
				Nf = n("./src/reddit/models/Post/index.ts"),
				Lf = n("./src/reddit/models/Vote/index.ts"),
				xf = n("./src/reddit/actions/subredditDuplicates.ts"),
				kf = n("./src/reddit/helpers/localStorage/index.ts");
			const Uf = {};
			var Mf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						if (Wr(t) === (G.Tb.COMMENTS || G.Tb.DUPLICATES)) {
							const n = Qr(t),
								r = Kr(t),
								s = (null == n ? void 0 : n.impressionid) ? Object(kf.u)(null == n ? void 0 : n.impressionid) : null == n ? void 0 : n.instanceId;
							if (s && r && r.partialPostId) {
								const t = Object(Nf.y)(r.partialPostId);
								if (e[t] && e[s]) return {
									...e,
									[t]: Object(mp.c)(e[t], e[s])
								}
							}
						}
						return e;
					case be.b:
					case be.f: {
						const n = Object(mp.h)(t.payload.meta);
						return {
							...e,
							...yp()(t.payload.posts, Object(mp.i)([n, mp.d, mp.o, mp.p, mp.q, Object(mp.a)(e), Object(mp.b)(e), Object(mp.l)(e), Object(mp.m)(e), Object(mp.k)(e), Object(mp.j)(e)]))
						}
					}
					case Nd.j:
						return Cf(e, t.payload);
					case xf.a:
						return Cf(e, t.payload.posts);
					case P.b:
					case P.f:
					case L.PAGE_LOADED:
					case w.b:
					case C.b:
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
					case j.r:
					case D.g:
					case M.e:
					case "RECOMMENDED_POSTS_LOADED":
					case V.o:
					case H.i:
					case B.b:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_LOADED:
					case T.c:
					case T.d:
					case S.n: {
						const n = Object(mp.h)(t.payload.meta);
						return {
							...e,
							...yp()(t.payload.posts, Object(mp.i)([n, mp.d, mp.o, mp.p, mp.q, Object(mp.n)(e), Object(mp.l)(e)]))
						}
					}
					case V.w: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(mp.h)(t.meta);
							Object.assign(n, yp()(t.posts, Object(mp.i)([s, mp.d, mp.o, mp.p, Object(mp.n)(e), Object(mp.l)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case A.b: {
						const n = Object(mp.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							...yp()(t.payload.posts, Object(mp.i)([n, mp.d, mp.o, mp.p, Object(mp.n)(e), Object(mp.l)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case Xe.e:
					case Ze.e:
					case ye.c: {
						const n = Object(mp.h)(t.payload.meta),
							r = yp()(t.payload.posts, Object(mp.i)([n, mp.o, mp.d, mp.p]));
						return de()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case Nd.k: {
						const n = t.payload;
						return de()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case Ef.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(Lf.c)(s, r)
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
							...n.reduce((e, t) => (e[t.post.id] = Object(mp.i)([mp.o])(Object(rs.f)(t.post)), e), {})
						}
					}
					case Ie.s: {
						const {
							id: n,
							awardings: r,
							gilder: s,
							treatmentTags: a
						} = t.payload, o = e[n];
						return o ? {
							...e,
							[n]: {
								...Object(Af.a)(o, r, s),
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
							[r]: Object(Af.b)(s, n)
						} : e
					}
					case pl.r: {
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
							...yp()(r, Object(mp.i)([mp.o, mp.p]))
						}
					}
					case vf.b:
					case fe.x: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, o = r.filter(e => Object(Df.a)(e)), c = Object(Rf.d)(e, n, o, s, a);
						return de()({
							...e
						}, c, (e, t) => ({
							...e,
							...t
						}))
					}
					case Qn.t: {
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
					case Qn.e: {
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
					case Qn.g: {
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
					case lc.f: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							...yp()(n.posts, Object(mp.i)([mp.o, mp.p])),
							...e
						} : e
					}
					case md.b:
					case he.c:
					case he.i:
					case he.e:
					case he.g:
					case Tf.b:
						return {
							...yp()(t.payload.posts, Object(mp.i)([mp.o, mp.p])), ...e
						};
					case Nd.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(Pf.L)(s.media) ? {
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
					case _f.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case _f.b: {
						const n = t.payload;
						return Object(_n.a)(e, n)
					}
					case y.u: {
						const n = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...n
						}
					}
					case Sf.b: {
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
						return a[r] && (a[r] = Object(mp.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(mp.f)({
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
							[n]: Object(mp.r)(e[n], Object(Ep.a)(r))
						}
					}
					case Sf.a:
						return {
							...e
						};
					case Of.b: {
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
					case Of.a:
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
					case If.c: {
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
			var Bf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nd.g:
							return t.payload;
						default:
							return e
					}
				},
				Ff = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const Gf = {};
			var qf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ff.a: {
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
			const Hf = [];
			var Vf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nd.l: {
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
				Wf = n("./node_modules/uuid/dist/esm-browser/v4.js");
			const Qf = Object(Wf.a)();
			var Kf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.PAGE_LOADED:
					case Dr.h:
					case Dr.a:
					case Dr.m:
					case Dr.f:
						return Object(Wf.a)();
					default:
						return e
				}
			};
			var Yf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dr.d:
					case Dr.o:
					case Dr.k:
					case Dr.g:
					case Dr.a:
					case Dr.m:
					case Dr.f:
						return null;
					case Dr.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case Dr.e:
						return "error";
					default:
						return e
				}
			};
			var $f = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dr.g:
						return !0;
					case Dr.m:
					case Dr.a:
					case Dr.f:
					case Dr.e:
						return !1;
					default:
						return e
				}
			};
			var zf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Dr.k:
							return !0;
						case Dr.j:
						case Dr.e:
						case Dr.o:
						case Dr.d:
							return !1;
						default:
							return e
					}
				},
				Xf = Object(J.c)({
					creationToken: Kf,
					error: Yf,
					pending: $f,
					pendingUpdate: zf
				});
			const Jf = {};
			var Zf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dr.c: {
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
			const eb = {
				standalonePosts: {
					POSTS_LOADED: Dr.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: Dr.o
				},
				recurringPosts: {
					POSTS_LOADED: Dr.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: Dr.d
				}
			};

			function tb(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case eb[e].POSTS_LOADED:
						case Dr.f: {
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
						case Dr.i:
						case Dr.l: {
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
						case Dr.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(n).reduce((t, r) => (r !== e && (t[r] = n[r]), t), {})
						}
						case eb[e].MUTATION_SUCCEEDED: {
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
			const nb = {};

			function rb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nb,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case eb[e].POSTS_LOADED:
						case Dr.f: {
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
						case Dr.h: {
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
			var sb = n("./node_modules/lodash/uniq.js"),
				ab = n.n(sb);
			const ob = {};

			function cb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ob,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case eb[e].POSTS_LOADED:
						case Dr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[eb[e].postIdsKey];
							return {
								...t,
								[s]: ab()([...t[s] || [], ...a])
							}
						}
						case Dr.i:
						case Dr.l: {
							const {
								subredditId: e,
								scheduledPostId: r
							} = n.payload, s = t[e] || [];
							return {
								...t,
								[e]: s.filter(e => e !== r)
							}
						}
						case Dr.h: {
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
			var ib = Object(J.c)({
					models: tb("recurringPosts"),
					pageInfo: rb("recurringPosts"),
					postOrder: cb("recurringPosts"),
					editModal: Zf
				}),
				db = Object(J.c)({
					models: tb("standalonePosts"),
					pageInfo: rb("standalonePosts"),
					postOrder: cb("standalonePosts")
				}),
				lb = Object(J.c)({
					api: Xf,
					standalonePosts: db,
					recurringPosts: ib
				});
			var ub = function() {
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
			var pb = function() {
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
				fb = Object(J.c)({
					error: ub,
					pending: pb
				});
			const bb = [];
			var hb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bb,
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
							return bb;
						default:
							return e
					}
				},
				yb = Object(J.c)({
					api: fb,
					list: hb
				}),
				mb = n("./src/reddit/actions/video.ts");
			const gb = {};
			var vb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.e: {
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
			const Eb = {};
			var _b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.a: {
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
			const Ob = {};
			var Ib = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ob,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.b: {
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
			const Sb = {};
			var Tb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.c: {
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
			const Db = {
				mutedInFeed: !0
			};
			var wb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Db,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var jb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case mb.d:
						return null;
					default:
						return e
				}
			};
			const Cb = {};
			var Ab = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case mb.e: {
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
			const Pb = {};
			var Rb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.h: {
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
					case mb.f: {
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
			const Nb = {};
			var Lb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.j: {
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
			const xb = {};
			var kb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case mb.g: {
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
			const Ub = {};
			var Mb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.i: {
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
			const Bb = {};
			var Fb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mb.m: {
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
				Gb = n("./src/reddit/constants/video.ts");
			const qb = {};
			var Hb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mb.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < Gb.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Vb = Object(J.c)({
					autoPlayed: vb,
					buffering: _b,
					consumed: Ib,
					continuousViewStartedAt: Tb,
					feed: wb,
					fullscreen: jb,
					loadable: Ab,
					loadTimes: Rb,
					metadata: Lb,
					paused: kb,
					playing: Mb,
					started: Fb,
					time: Hb
				}),
				Wb = Object(J.c)({
					embedAndImage: sf,
					expanded: of ,
					focus: cf,
					followed: lf,
					instances: pf,
					isAnimatingUpvote: ff,
					isTrackingCrossposts: yf,
					metaMap: gf,
					models: Mf,
					modToMemberShare: Bf,
					crowdControl: ef,
					postLevelCrowdControl: qf,
					recent: Vf,
					scheduledPosts: lb,
					topAwarded: yb,
					video: Vb,
					carousel: Zp
				}),
				Qb = n("./src/lib/reducers/addAuthentication/index.ts");
			const Kb = {};
			var Yb = Object(Qb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kb,
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
				}), Kb),
				$b = Object(J.c)({
					data: Yb
				});
			const zb = {};
			var Xb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zb,
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
			const Jb = {};
			var Zb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jb,
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
				eh = Object(J.c)({
					error: Xb,
					pending: Zb
				});
			const th = {};
			var nh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
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
			const rh = {};
			var sh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rh,
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
				ah = Object(J.c)({
					error: nh,
					pending: sh
				}),
				oh = Object(J.c)({
					fetch: eh,
					purchase: ah
				});
			var ch = function() {
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
			const ih = {};
			var dh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ih,
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
				lh = Object(J.c)({
					api: oh,
					currentlyPurchasing: ch,
					models: dh
				});
			const uh = {};
			var ph = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uh,
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
			const fh = {};
			var bh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fh,
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
				hh = Object(J.c)({
					error: ph,
					pending: bh
				});
			const yh = {};
			var mh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yh,
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
				gh = n("./src/reddit/actions/comment/list.ts");
			const vh = {};
			var Eh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case gh.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Gr()(e, n) : e
					}
					default:
						return e
				}
			};
			const _h = {};
			var Oh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _h,
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
			const Ih = {};
			var Sh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ih,
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
							} : Object(_n.a)(e, n)
						}
						default:
							return e
					}
				},
				Th = Object(J.c)({
					api: hh,
					endMarkers: Eh,
					fetchedTokens: Oh,
					commentIds: mh,
					loadMore: Sh
				}),
				Dh = n("./src/reddit/actions/pages/profileModSettings.ts");
			var wh = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Dh.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				jh = Object(J.c)({
					pending: wh
				}),
				Ch = Object(J.c)({
					api: jh
				});
			const Ah = {};
			var Ph = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ah,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const Rh = {};
			var Nh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rh,
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
			const Lh = {};
			var xh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lh,
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
				kh = Object(J.c)({
					error: Nh,
					pending: xh
				});
			const Uh = {};
			var Mh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uh,
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
			const Bh = {};
			var Fh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bh,
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
							} : Bh
						}
						default:
							return e
					}
				},
				Gh = Object(J.c)({
					api: kh,
					ids: Mh,
					pageInfo: Fh
				}),
				qh = n("./src/reddit/constants/posts.ts");
			const Hh = {};
			var Vh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ye.c:
					case Ze.e:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case hu.l: {
						const n = t.payload;
						return n.profile ? {
							...e,
							[n.profile.id]: n.about
						} : e
					}
					case gu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === qh.a.PROFILE);
						return s.length ? s.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: r
						}, e), {
							...e
						}) : e
					}
					case Ln.n: {
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
			const Wh = {};
			var Qh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wh,
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
					case B.b:
					case R.e:
					case R.h:
					case j.u:
					case hu.h:
					case A.b:
					case Ze.e:
					case H.i:
					case hu.o:
					case M.b:
					case M.e:
					case ye.c:
					case L.PAGE_LOADED:
					case Xn.e:
					case qr.PAGE_LOADED:
					case k.SUBREDDIT_LOADED:
					case N.b:
					case "RECOMMENDED_POSTS_LOADED":
					case gu.c:
						return Object(ce.merge)(e, t.payload.profiles);
					case fe.i:
					case fe.f:
					case fe.r:
					case fe.u:
					case fe.A:
					case fe.n: {
						const {
							response: n
						} = t.payload, r = n && n.profiles;
						return Object(ce.merge)(e, r)
					}
					case hu.n:
					case hu.l: {
						const {
							profile: n
						} = t.payload;
						return n ? Object(ce.merge)(e, {
							[n.id]: n
						}) : e
					}
					case Ln.n: {
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
					case Ln.l:
					case Ln.k: {
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
			const Kh = {};
			var Yh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hu.c:
						case hu.f: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !0
							}
						}
						case hu.a:
						case hu.b:
						case hu.d:
						case hu.e: {
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
				$h = Object(J.c)({
					pending: Yh
				});
			const zh = {};
			var Xh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hu.b: {
						const {
							profileName: n,
							data: r
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[(n || "").toLowerCase()]: s
						}
					}
					case hu.e:
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
			const Jh = {};
			var Zh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hu.e: {
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
				ey = Object(J.c)({
					api: $h,
					models: Xh,
					pageInfo: Zh
				});
			const ty = {};
			var ny = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ty,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hu.i: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case hu.g:
						case hu.h: {
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
				ry = Object(J.c)({
					pending: ny
				});
			const sy = {};
			var ay = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hu.h: {
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
				oy = Object(J.c)({
					api: ry,
					pageInfo: ay
				}),
				cy = n("./src/reddit/actions/pinnedPost.ts");
			const iy = {};
			var dy = Object(Qb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case cy.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-G.ib)
						}
					}
					case cy.g: {
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
			}), iy);
			const ly = {};
			var uy = Object(Qb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ly,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.a: {
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
			}), ly);
			const py = {};
			var fy = Object(Qb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : py,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cy.c:
						case cy.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case cy.b:
						case cy.e:
						case cy.d:
						case cy.g: {
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
				}), py),
				by = Object(J.c)({
					data: dy,
					initialData: uy,
					pending: fy
				}),
				hy = n("./src/reddit/actions/trophyCase.ts");
			const yy = {};
			var my, gy, vy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hy.a: {
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
				Ey = Object(J.c)({
					about: Vh,
					models: Qh,
					moderated: ey,
					multireddits: oy,
					pinnedPosts: by,
					trophyCases: vy
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(my || (my = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(gy || (gy = {}));
			var _y, Oy, Iy;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(_y || (_y = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Oy || (Oy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Iy || (Iy = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(_y || (_y = {}));
			Object(F.a)("PROMO__SHOW_PROMO"), Object(F.a)("PROMO__HIDE_PROMO");
			const Sy = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Ty = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sy,
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
				Dy = n("./src/reddit/actions/recap/constants.ts");
			const wy = {
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
			var jy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Dy.k:
							return {
								...e, shareCardWasOpened: !e.shareCardWasOpened
							};
						case Dy.g:
							return {
								...e, isImageLoading: !1
							};
						case Dy.h:
							return {
								...e, isImageLoading: !0
							};
						case Dy.f:
							return {
								...e, isCardsLoading: !0
							};
						case Dy.e: {
							const {
								cards: n
							} = t.payload;
							return {
								...e,
								cards: n,
								isCardsLoading: !1
							}
						}
						case Dy.d: {
							const {
								error: n
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: n
							}
						}
						case Dy.i:
							return {
								...e, ...wy
							};
						case Dy.j: {
							const {
								index: n
							} = t.payload;
							return {
								...e,
								isImageLoading: !1,
								currentCardIndex: n
							}
						}
						case Dy.c:
							return {
								...e, bannerSeen: t.payload
							};
						case Dy.l:
							return {
								...e, shouldShowShareModal: !e.shouldShowShareModal
							};
						case Dy.b:
							return {
								...e, shouldHideAbilityCardUsername: !e.shouldHideAbilityCardUsername
							};
						case Dy.a:
							return {
								...e, shouldHideAbilityCardAvatar: !e.shouldHideAbilityCardAvatar
							};
						default:
							return e
					}
				},
				Cy = n("./src/reddit/actions/recentSubreddits/constants.ts");
			const Ay = [],
				Py = (e, t) => uu()(e, t) ? e : t;
			var Ry = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ay,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.c:
					case q.d:
						return Ay;
					case Cy.d:
						return Py(e, t.subreddits);
					case Cy.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, Cy.c)
					}
					case Cy.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Cy.c)
					}
					default:
						return e
				}
			};
			const Ny = {};
			var Ly = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ny,
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
				xy = n("./src/reddit/actions/pages/report/constants.ts");
			var ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xy.a:
						return t.payload;
					default:
						return e
				}
			};
			var Uy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xy.b:
						return t.payload;
					case xy.c:
					case xy.d:
						return !1;
					default:
						return e
				}
			};
			var My = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xy.d:
						return !0;
					case xy.c:
					case xy.b:
						return !1;
					default:
						return e
				}
			};
			var By = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xy.c:
							return !0;
						case xy.b:
						case xy.d:
							return !1;
						default:
							return e
					}
				},
				Fy = Object(J.c)({
					error: Uy,
					pending: My,
					success: By
				}),
				Gy = n("./src/reddit/actions/reportPageRules/constants.ts");
			const qy = [];
			var Hy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gy.a:
							return t.payload;
						default:
							return e
					}
				},
				Vy = Object(J.c)({
					reportPageApi: Fy,
					reportPageRules: Hy,
					initialReason: ky
				}),
				Wy = n("./src/reddit/actions/reportRules.ts");
			const Qy = {
				sitewideRules: []
			};
			var Ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wy.a:
						return {
							...e, sitewideRules: t.payload
						};
					default:
						return e
				}
			};
			Object(F.a)("REQUEST_HOST_SET");
			var Yy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const $y = "RUN_TIME_ENV_VARS__IS_STAGING",
				zy = (Object(F.a)($y), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var Xy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $y:
						return {
							...e, staging: !0
						};
					default:
						return e
				}
			};
			const Jy = {};
			var Zy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jy,
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
				em = n("./src/reddit/components/SearchDropdown/index.tsx"),
				tm = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				nm = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const rm = [nm.a, tm.b],
				sm = [em.b, em.a];
			var am = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.g:
						return !0;
					case Wc.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = !!rm.find(e => {
							var t;
							return r && ((null === (t = r.parentElement) || void 0 === t ? void 0 : t.id) === e || r.id === e)
						});
						return !(!!!sm.find(e => {
							var t;
							return r && (null === (t = document.getElementById(e)) || void 0 === t ? void 0 : t.contains(r))
						}) && !s) && e
					}
					case Ze.f:
					case Wc.a:
					case Wc.c:
						return !1;
					default:
						return e
				}
			};
			const om = {},
				cm = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Mp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				},
				im = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				dm = e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				};
			var lm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : om,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const n = cm(t.payload.meta),
								r = yp()(t.payload.searchPosts, dm([n, im]));
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
				um = Object(J.c)({
					models: lm
				});
			var pm = function() {
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
			const fm = {
					enabled: !1
				},
				bm = Object.create(null);
			var hm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bm,
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
			const ym = {};
			var mm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ym,
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
				gm = Object(J.c)({
					idsByQuery: hm,
					models: mm
				});
			const vm = Object.create(null);
			var Em = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vm,
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
			const _m = {};
			var Om = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _m,
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
				Im = Object(J.c)({
					idsByQuery: Em,
					models: Om
				});
			const Sm = {};
			var Tm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm,
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
				Dm = Object(J.c)({
					appliedSort: Zy,
					isDropdownOpen: am,
					posts: um,
					searchScope: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fm,
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
					searchQuery: pm,
					typeahead: gm,
					typeaheadByType: Im,
					viewTreatment: Tm
				}),
				wm = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const jm = {};
			var Cm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ye.c: {
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
						if (i === wm.c.Trending) {
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
			const Am = {};
			var Pm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Am,
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
			const Rm = {};
			var Nm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rm,
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
							} : Rm
						}
						default:
							return e
					}
				},
				Lm = Object(J.c)({
					headerContent: Cm,
					models: Pm,
					order: Nm
				}),
				xm = n("./src/reddit/actions/searchQueryId/index.tsx");
			const km = {};
			Object(F.a)("SEO__CRAWLER_RECEIVED");
			var Um = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Mm = n("./src/reddit/actions/seo/linksModule.ts");
			const Bm = {};
			var Fm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Mm.c:
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
				Gm = n("./src/reddit/actions/seo/topicLinks.ts");
			const qm = {};
			var Hm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gm.a:
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
				Vm = Object(J.c)({
					crawler: Um,
					linksModule: Fm,
					topicLinks: Hm
				}),
				Wm = n("./src/reddit/actions/shortcuts/constants.ts");
			var Qm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wm.a:
						return t.payload;
					case l.b:
						return null;
					default:
						return e
				}
			};
			var Km = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wm.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Ym = n("./src/reddit/constants/shortcuts.ts"),
				$m = n("./src/reddit/helpers/history/index.ts");
			const zm = Ym.d.Global,
				Xm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object($m.b)(sp.b.IsOverlay) ? Ym.d.Lightbox : Ym.d.CommentPage;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Ym.d.Listing;
						case "modQueuePages":
							return Ym.d.Modqueue;
						default:
							return zm
					}
				};
			var Jm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return Xm(e)
							}
							return zm;
						default:
							return e
					}
				},
				Zm = Object(J.c)({
					activeCommentId: Qm,
					activePostId: Km,
					namespace: Jm
				});
			var eg = function() {
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
				tg = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ng = Object(J.c)({
					firstFetch: eg,
					models: tg.b
				}),
				rg = n("./src/reddit/models/StructuredStyles/index.ts");
			const sg = {};
			var ag = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.h:
						case f.b:
						case f.d:
							return t.payload.styles;
						case f.e:
							return sg;
						case f.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case f.k: {
							const e = t.payload;
							return Object(rg.h)(e.styles)
						}
						default:
							return e
					}
				},
				og = n("./src/reddit/actions/exportImportStyles.ts");
			var cg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case og.c:
					case og.b:
						return null;
					case og.a:
						return t.payload;
					default:
						return e
				}
			};
			var ig = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case og.c:
							return !0;
						case og.b:
						case og.a:
							return !1;
						default:
							return e
					}
				},
				dg = Object(J.c)({
					error: cg,
					pending: ig
				}),
				lg = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				ug = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const pg = {};
			var fg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case be.b:
						case be.f:
						case ye.c:
						case Ze.e:
						case L.PAGE_LOADED:
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
						case lg.b: {
							const {
								flairId: n,
								template: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case lg.a: {
							const {
								flairId: n
							} = t.payload;
							return Object(_n.a)(e, n)
						}
						case Wp.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(_n.a)(e, n)
						}
						case f.k:
							return pg;
						case ug.b: {
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
				bg = Object(J.c)({
					models: fg
				});
			const hg = {};
			var yg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg,
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
						return hg;
					default:
						return e
				}
			};
			var mg = function() {
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
			var gg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.d:
						return t.payload.subredditId;
					case f.e:
						return null;
					case l.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Ln.g:
						return null;
					default:
						return e
				}
			};
			const vg = {};
			var Eg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case be.b:
						case be.f:
						case L.PAGE_LOADED:
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
							if (Pa()(n.subreddits, (e, t) => {
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
								r = Object(rg.h)(n.styles);
							return {
								...e,
								[n.subredditId]: r
							}
						}
						case hu.l: {
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
						case Ln.l: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return Cf(e, {
									[n.subredditId]: {
										bannerBackgroundImage: n.imageUrl
									}
								})
							}
							return e
						}
						case Ln.k: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return Cf(e, {
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
				_g = Object(J.c)({
					draft: ag,
					exportStyles: dg,
					flairTemplate: bg,
					imagePreviews: yg,
					isBladeEditorDirty: mg,
					isEditing: gg,
					models: Eg
				});
			Object(F.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var Og = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				Ig = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const Sg = {};
			var Tg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ig.c:
					case Ig.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Ig.a: {
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
			const Dg = {};
			var wg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ig.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ig.b:
						case Ig.a: {
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
				jg = Object(J.c)({
					error: Tg,
					pending: wg
				});
			const Cg = {};
			var Ag = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ig.b: {
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
				Pg = Object(J.c)({
					api: jg,
					models: Ag
				}),
				Rg = n("./src/reddit/actions/category/constants.ts"),
				Ng = n("./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts"),
				Lg = n("./src/reddit/actions/subredditMention/constants.ts");
			const xg = {};
			var kg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lg.d:
					case be.b:
					case be.f:
					case ye.c:
					case k.SUBREDDIT_FAILED:
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case qr.PAGE_LOADED:
					case W.b:
					case W.e:
					case x.b:
					case x.a:
					case x.e:
					case x.d:
					case Q.PROFILE_POSTS_LOADED:
					case M.b:
					case M.e:
					case Ng.c:
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
					case po.a: {
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
					case gu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === qh.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(ce.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case lc.f:
					case Rg.f:
					case V.l:
					case V.t:
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
					case Ig.b: {
						const {
							subreddits: n
						} = t.payload, r = n.reduce((e, t) => (t.allowedPostTypes && (e[t.id] = {
							allowedPostTypes: t.allowedPostTypes
						}), e), {});
						return Object(ce.merge)(e, r)
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
			const Ug = {};
			var Mg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ug,
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
			var Bg = function() {
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
				Fg = Object(J.c)({
					error: Mg,
					pending: Bg
				}),
				Gg = n("./src/reddit/actions/subredditCreation.ts");
			const qg = {
				apiError: null
			};
			var Hg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gg.b: {
						const {
							error: n
						} = t.payload;
						return {
							...e,
							apiError: n
						}
					}
					case Gg.a:
					case Gg.c:
					case Gg.e:
						return qg;
					default:
						return e
				}
			};
			var Vg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gg.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case Gg.a:
					case Gg.c:
					case Gg.e:
						return null;
					default:
						return e
				}
			};
			var Wg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gg.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case Gg.c:
					case Gg.b:
						return null;
					default:
						return e
				}
			};
			var Qg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gg.c:
							return !0;
						case Gg.e:
						case Gg.b:
							return !1;
						default:
							return e
					}
				},
				Kg = Object(J.c)({
					error: Hg,
					lastCreatedSubredditId: Wg,
					initialCrosspost: Vg,
					pending: Qg
				});
			var Yg = function() {
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
				$g = Object(J.c)({
					pending: Yg
				});
			const zg = {};
			var Xg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zg,
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
			const Jg = {};
			var Zg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jg,
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
				ev = Object(J.c)({
					error: Xg,
					pending: Zg
				});
			const tv = {};
			var nv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tv,
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
				rv = Object(J.c)({
					pending: nv
				});
			var sv = function() {
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
			var av = function() {
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
				ov = Object(J.c)({
					error: sv,
					pending: av
				});
			var cv = function() {
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
			var iv = function() {
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
				dv = Object(J.c)({
					error: cv,
					pending: iv
				}),
				lv = n("./src/reddit/actions/subredditRules/constants.ts");
			var uv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lv.c:
							return !0;
						case lv.a:
						case lv.b:
							return !1;
						default:
							return e
					}
				},
				pv = n("./src/reddit/actions/subredditSettings.ts");
			var fv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pv.e:
							return !0;
						case pv.f:
						case pv.d:
							return !1;
						default:
							return e
					}
				},
				bv = Object(J.c)({
					pending: fv
				});
			const hv = {};
			var yv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hv,
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
				mv = Object(J.c)({
					pending: yv
				}),
				gv = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const vv = {};
			var Ev = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gv.c:
					case gv.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case gv.a: {
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
			const _v = {};
			var Ov = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _v,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gv.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case gv.b:
						case gv.a: {
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
				Iv = Object(J.c)({
					error: Ev,
					pending: Ov
				});
			const Sv = {};
			var Tv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tf.c:
					case Tf.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case Tf.a: {
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
			const Dv = {};
			var wv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tf.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case Tf.b:
						case Tf.a: {
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
				jv = Object(J.c)({
					error: Tv,
					pending: wv
				}),
				Cv = Object(J.c)({
					about: Fg,
					create: Kg,
					inlineEditing: $g,
					models: ev,
					onboarding: rv,
					productOffers: ov,
					rankings: dv,
					rules: uv,
					settings: bv,
					similar: mv,
					topContent: jv,
					wiki: Iv
				}),
				Av = n("./node_modules/lodash/isNil.js"),
				Pv = n.n(Av);
			const Rv = {};
			var Nv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: Pv()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				Lv = Object(J.c)({
					meta: Nv
				});
			const xv = {};
			var kv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rg.f: {
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
			const Uv = {
				pending: !1,
				items: {}
			};
			var Mv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xp.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Xp.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const Bv = {};
			var Fv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bv,
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
				Gv = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const qv = {};
			var Hv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gv.b:
						case Gv.c:
						case Gv.a: {
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
				Vv = n("./src/reddit/actions/subredditCrosspostable.ts");
			var Wv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vv.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Vv.c:
					case Vv.b:
						return null;
					default:
						return e
				}
			};
			var Qv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vv.c:
							return !0;
						case Vv.b:
						case Vv.a:
							return !1;
						default:
							return e
					}
				},
				Kv = Object(J.c)({
					errors: Wv,
					pending: Qv
				});
			const Yv = {};
			var $v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vv.b: {
							const {
								subredditIds: n
							} = t.payload;
							return uu()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				zv = Object(J.c)({
					api: Kv,
					ids: $v
				});
			const Xv = {};
			var Jv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xf.a: {
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
							return Cf(o, {
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
				Zv = Object(J.c)({
					models: Jv
				});
			const eE = {};
			var tE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE,
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
			const nE = {};
			var rE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nE,
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
			const sE = {};
			var aE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sE,
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
			const oE = {};
			var cE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oE,
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
				iE = Object(J.c)({
					assets: tE,
					communityRaw: rE,
					distributions: aE,
					releaseNotes: cE
				}),
				dE = n("./node_modules/lodash/isEqualWith.js"),
				lE = n.n(dE),
				uE = n("./src/lib/forceHttps/index.ts");
			const pE = {},
				fE = (e, t) => {
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
						return a.icon.url ? o.icon.url = Object(uE.a)(a.icon.url) : s && s.icon.url ? o.icon = s.icon : o.icon.url = "", s && s.allowChatPostCreation && (o.allowChatPostCreation = !0), s && s.devPlatformMetadata && (o.devPlatformMetadata = s.devPlatformMetadata), Object(ce.set)(n, r, o)
					}, e) : e
				},
				bE = (e, t) => {
					return !lE()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				hE = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					for (let s = 0; s < n.length; s++) {
						const a = n[s],
							o = e[a],
							c = t[a];
						o && !bE(o, c) || (r[a] = {
							...o,
							...c
						})
					}
					return Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var yE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gu.c:
						return fE(e, t.payload.subreddits || {});
					case P.b:
					case P.f:
					case Cy.b:
					case Lg.d:
					case Rg.f:
					case D.g:
					case lc.f:
					case w.b:
					case C.b:
					case R.e:
					case R.h:
					case fe.n:
					case j.r:
					case j.u:
					case hu.h:
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
					case hu.e:
					case ye.c:
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case Xn.e:
					case qr.PAGE_LOADED:
					case hu.o:
					case M.b:
					case M.e:
					case B.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ng.c:
					case Ze.e:
					case H.c:
					case H.f:
					case H.i:
					case V.a:
					case V.l:
					case V.t:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_LOADED:
					case ur.B:
						return hE(e, t.payload.subreddits || {});
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
						return hE(e, r)
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
					case c.g: {
						const n = t.payload;
						return hE(e, n)
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
					case pv.f: {
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
					case Ig.b: {
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
						return Object(ce.merge)(e, s)
					}
					case If.c: {
						const {
							subreddits: n
						} = t.payload;
						return hE(e, n)
					}
					default:
						return e
				}
			};
			var mE = function() {
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
			var gE = function() {
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
			var vE = function() {
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
				EE = Object(J.c)({
					errors: mE,
					fetched: gE,
					pending: vE
				});
			var _E = function() {
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
				OE = Object(J.c)({
					api: EE,
					order: _E
				});
			const IE = e => {
					var t, n, r, s;
					return (null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url) || (null === (n = null == e ? void 0 : e.styles) || void 0 === n ? void 0 : n.icon) || (null === (s = null === (r = null == e ? void 0 : e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === s ? void 0 : s.url)
				},
				SE = e => ({
					icon_img: IE(e),
					id: e.id,
					name: e.name
				}),
				TE = e => e.map(SE),
				DE = {
					ids: [],
					subreddits: []
				};
			var wE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.f:
						const n = TE(t.payload);
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
							o = a.map(e => e.id);
						return {
							subreddits: TE(a), ids: o
						};
					default:
						return e
				}
			};
			const jE = {};
			var CE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pv.a: {
						const n = t.payload;
						return Object(ce.merge)(e, n)
					}
					case pv.b: {
						const {
							subredditId: n,
							notificationSettings: r
						} = t.payload;
						return Object(ce.merge)(e, {
							[n]: r
						})
					}
					default:
						return e
				}
			};
			const AE = {};
			var PE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AE,
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
			const RE = {};
			var NE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RE,
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
			const LE = {};
			var xE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LE,
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
			const kE = {},
				UE = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = Ka(n, t),
						o = [...s, a];
					return {
						...e,
						[t]: {
							...r,
							emotes: o
						}
					}
				},
				ME = (e, t, n) => {
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
			var BE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kE,
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
								mediaPacks: o
							} = r;
							return {
								...e,
								[s]: {
									...e[s],
									...Ya(o),
									isEnabled: a
								}
							}
						}
						case Qa.b: {
							const {
								subredditId: n,
								emoji: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: UE(s, n, r)
							}
						}
						case Qa.c: {
							const {
								subredditId: n,
								emojiId: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: ME(s, n, r)
							}
						}
						default:
							return e
					}
				},
				FE = n("./src/lib/makeProductOfferKey/index.ts");
			const GE = {};
			var qE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.V: {
						const {
							subredditId: n,
							productOffers: r
						} = t.payload;
						if (!(null == r ? void 0 : r.length)) return e;
						const s = r.reduce((e, t) => {
							const r = Object(FE.a)(t.type, n);
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
			const HE = {};
			var VE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HE,
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
				WE = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const QE = {},
				KE = e => e.filter(e => {
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
						return WE.e.includes(t)
					})
				});
			var YE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QE,
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
						const s = KE(r.cards);
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
			const $E = {};
			var zE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $E,
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
						return 0 === Object.keys(s).length ? e : Object(ce.assign)(e, s)
					}
					case V.d: {
						const {
							subredditId: n,
							questionId: s
						} = t.payload, a = null !== (r = e[n]) && void 0 !== r ? r : [];
						return Object(ce.setIn)(e, [n], a.filter(e => e.id !== s))
					}
					case V.e:
						return $E;
					default:
						return e
				}
			};
			const XE = {};
			var JE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XE,
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
			const ZE = {};
			var e_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZE,
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
				t_ = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const n_ = {};
			var r_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case t_.a: {
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
			const s_ = {};
			var a_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lv.b: {
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
					case lv.e: {
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
					case lv.f: {
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
					case lv.g:
					case lv.d: {
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
			const o_ = {};
			var c_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pv.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case pv.f: {
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
					case Ln.n: {
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
			const i_ = {};
			var d_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i_,
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
			const l_ = {};
			var u_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l_,
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
						} = t.payload, s = Object(ce.setIn)(e, [n, "response"], r);
						return Object(ce.setIn)(s, [n, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const p_ = {};
			var f_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lc.f: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case Tf.b: {
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
			const b_ = [];
			var h_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b_,
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
			const y_ = {};
			var m_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lg.d:
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
				g_ = Object(J.c)({
					about: kg,
					api: Cv,
					appliedFilters: Lv,
					byCategory: kv,
					carousel: Mv,
					communityInfo: Fv,
					countrySiteSettings: Hv,
					crosspostable: zv,
					duplicates: Zv,
					gov: iE,
					models: yE,
					moderated: OE,
					notificationSettings: CE,
					onboarding: PE,
					powerupRecentSupporters: NE,
					powerups: xE,
					powerupsEmojis: BE,
					productOffers: qE,
					products: VE,
					progressModule: YE,
					questions: zE,
					rankings: JE,
					rankingsPageInfo: e_,
					related: r_,
					rules: a_,
					settings: c_,
					similar: d_,
					mutedSubreddits: wE,
					survey: u_,
					topContent: f_,
					trending: h_,
					unavailableModels: m_
				});
			const v_ = {};
			var E_ = Object(Qb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v_,
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
				}), v_),
				__ = Object(J.c)({
					data: E_
				}),
				O_ = n("./node_modules/lodash/values.js"),
				I_ = n.n(O_);
			const S_ = [];
			var T_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gu.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = bu(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case j.u: {
						const {
							multireddits: e
						} = t.payload;
						return I_()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case gu.e: {
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
			var D_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case gu.b:
					case gu.c:
						return null;
					default:
						return e
				}
			};
			var w_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gu.b:
					case gu.c:
						return !0;
					case gu.a:
						return !1;
					default:
						return e
				}
			};
			var j_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gu.b:
							return !0;
						case gu.c:
						case gu.a:
							return !1;
						default:
							return e
					}
				},
				C_ = Object(J.c)({
					errors: D_,
					fetched: w_,
					pending: j_
				});
			const A_ = [];
			var P_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gu.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case gu.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== qh.a.PROFILE) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = bu(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case gu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === qh.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
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
					case gu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case gu.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== qh.a.SUBREDDIT) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = bu(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case gu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === qh.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const L_ = [],
				x_ = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var k_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.u: {
							const {
								multireddits: n
							} = t.payload, r = I_()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(x_(n));
							return uu()(e, r) ? e : r
						}
						case N.b: {
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
								i = fu()(e, o).sort(x_(c));
							return uu()(e, i) ? e : i
						}
						case gu.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(x_(s)) : e.filter(e => e !== r)
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
							return [...e, n.url].sort(x_(s))
						}
						default:
							return e
					}
				},
				U_ = n("./node_modules/lodash/difference.js"),
				M_ = n.n(U_);
			const B_ = [];
			var F_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hu.p: {
						const {
							profileOrder: n
						} = t.payload;
						return ab()([...e, ...n])
					}
					case gu.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case gu.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === qh.a.PROFILE);
						if (!a.length) return e;
						const o = a.map(e => e.id);
						return s ? ab()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : M_()(e, o)
					}
					default:
						return e
				}
			};
			const G_ = [];
			var q_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hu.p: {
							const {
								subredditOrder: n
							} = t.payload;
							return ab()([...e, ...n])
						}
						case gu.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case gu.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === qh.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const o = a.map(e => e.id);
							return s ? ab()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : M_()(e, o)
						}
						default:
							return e
					}
				},
				H_ = Object(J.c)({
					api: C_,
					favoriteMultiOrder: T_,
					favoriteProfileOrder: P_,
					favoriteSubredditOrder: N_,
					multiredditOrder: k_,
					profileOrder: F_,
					subredditOrder: q_
				}),
				V_ = n("./src/reddit/actions/survey/constants.ts");
			var W_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V_.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var Q_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V_.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var K_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V_.b:
						return !e;
					default:
						return e
				}
			};
			var Y_ = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V_.i:
						return !e;
					default:
						return e
				}
			};
			var $_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V_.m:
							return t.payload || "";
						default:
							return e
					}
				},
				z_ = Object(J.c)({
					activeDemoTrigger: W_,
					demoTriggerThreshold: Q_,
					isDemoEnabled: K_,
					isSampleFactorEnabled: Y_,
					surveyNameCalledImmediately: $_
				});
			var X_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case en.a:
							const {
								hasUnreadMessages: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				J_ = n("./src/reddit/actions/tags/constants.ts");
			const Z_ = {
				pending: !1,
				error: !1
			};
			var eO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J_.l:
						return {
							...e, pending: !0
						};
					case J_.m:
						return {
							error: !1, pending: !1
						};
					case J_.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const tO = {
				pending: !1,
				error: !1
			};
			var nO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J_.o:
						return {
							...e, pending: !0
						};
					case J_.p:
						return {
							error: !1, pending: !1
						};
					case J_.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const rO = {
				pending: !1,
				error: !1
			};
			var sO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J_.t:
						return {
							...e, pending: !0
						};
					case J_.s:
					case J_.r:
					case J_.e:
					case J_.j:
						return {
							error: !1, pending: !1
						};
					case J_.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const aO = {
				pending: !1,
				error: !1
			};
			var oO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J_.v:
						return {
							...e, pending: !0
						};
					case J_.w:
						return {
							error: !1, pending: !1
						};
					case J_.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const cO = {
				pending: !1,
				error: !1
			};
			var iO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J_.g:
							return {
								...e, pending: !0
							};
						case J_.h:
							return {
								error: !1, pending: !1
							};
						case J_.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				dO = Object(J.c)({
					create: eO,
					deleteTag: nO,
					fetch: sO,
					update: oO,
					updatePrimaryTag: iO
				});
			const lO = {
				global: [],
				recommendedGlobal: []
			};
			var uO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J_.w:
						case J_.r:
						case J_.e:
						case J_.j: {
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
				pO = n("./node_modules/lodash/uniqWith.js"),
				fO = n.n(pO),
				bO = n("./src/reddit/models/Option/index.ts");
			const hO = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var yO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J_.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: fO()([...e.selectedOptions || [], {
									...n
								}], bO.a)
							}
						}
						case J_.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(bO.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case J_.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case J_.a: {
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
				mO = n("./src/reddit/helpers/tags/index.ts");
			const gO = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var vO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J_.j: {
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
						case J_.w:
						case J_.s:
						case J_.r: {
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
								geoPlaces: i ? Object(ce.set)(e.geoPlaces, c, i) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[c]: {
										...o[c] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[c]: Object(mO.a)(a[c] || {})
								}
							}
						}
						case J_.p: {
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
						case J_.e: {
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
						case J_.h: {
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
				EO = n("./src/reddit/reducers/tags/selected/index.ts"),
				_O = Object(J.c)({
					api: dO,
					availableGlobalTagOrder: uO,
					models: vO,
					selected: EO.b,
					creation: yO
				}),
				OO = n("./src/reddit/actions/redditEmbed.ts"),
				IO = n("./src/reddit/actions/theme.ts"),
				SO = n("./src/reddit/actions/users.ts"),
				TO = n("./src/reddit/models/Theme/index.ts");
			const DO = {
				current: TO.c,
				cached: {}
			};
			var wO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case IO.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? TO.b : TO.c,
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
						case OO.b:
						case H.i:
						case Ze.e:
						case ye.c:
						case Ln.j:
						case L.PAGE_LOADED:
						case qr.PAGE_LOADED:
						case SO.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: TO.b,
									cached: {}
								} : {
									current: TO.c,
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
								current: TO.b,
								cached: {}
							} : {
								current: TO.c,
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
									current: TO.b,
									cached: {}
								} : {
									current: TO.c,
									cached: {}
								}
							}
							return e;
						case Ln.i: {
							if (!t.payload) return e;
							const {
								nightmode: n
							} = t.payload;
							return n ? {
								current: TO.b,
								cached: {}
							} : {
								current: TO.c,
								cached: {}
							}
						}
						case f.d:
							return {
								current: TO.c, cached: {}
							};
						case f.e:
							return t.payload.nightmodeTempUpdated ? {
								current: TO.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				jO = n("./src/reddit/actions/toaster.ts");
			const CO = [];
			var AO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jO.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case jO.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				PO = n("./src/reddit/actions/tooltip.ts");
			var RO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case PO.c:
						case PO.b:
						case PO.e:
						case PO.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				NO = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var LO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case PO.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case PO.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case PO.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case PO.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case Ie.I:
						case PO.d:
						case l.b:
						case Wc.b:
						case Wc.c:
						case Wc.a:
							return t.type === l.b && e === NO.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				xO = Object(J.c)({
					params: RO,
					tooltipId: LO
				}),
				kO = n("./src/reddit/actions/tracing.ts");
			const UO = {
				traceId: void 0
			};
			var MO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kO.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				BO = n("./src/lib/asyncActions/index.ts"),
				FO = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const GO = Object(BO.c)(FO.c.requestedActionType, FO.c.succeededActionType, FO.c.failedActionType),
				qO = Object(BO.c)(FO.a.requestedActionType, FO.a.succeededActionType, FO.a.failedActionType),
				HO = Object(BO.c)(FO.d.requestedActionType, FO.d.succeededActionType, FO.d.failedActionType);
			var VO = Object(J.c)({
					load: GO,
					execute: qO,
					send: HO
				}),
				WO = n("./src/reddit/actions/tracking.ts");
			const QO = {};
			var KO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case WO.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case WO.b: {
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
				YO = Object(J.c)({
					reCaptchaEnterprise: VO,
					viewportDataLoaded: KO
				}),
				$O = n("./src/reddit/actions/trafficStats/constants.ts");
			var zO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $O.c:
						return !0;
					case $O.b:
					case $O.a:
						return !1;
					default:
						return e
				}
			};
			var XO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $O.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case $O.c:
							return null;
						default:
							return e
					}
				},
				JO = Object(J.c)({
					pending: zO,
					trafficStats: XO
				});
			var ZO = function() {
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
			var eI = function() {
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
				tI = Object(J.c)({
					error: ZO,
					pending: eI
				});
			var nI = function() {
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
			var rI = function() {
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
			var sI = function() {
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
				aI = Object(J.c)({
					api: tI,
					contentId: nI,
					initialRecipient: rI,
					publicAddress: sI
				}),
				oI = Object(J.c)({
					communityPoints: aI
				}),
				cI = n("./src/reddit/actions/search/trending.ts");
			const iI = {};
			var dI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case cI.a: {
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
				lI = Object(J.c)({
					models: dI
				});
			var uI = n("./src/reddit/routes/premium/index.ts");
			const pI = {};
			var fI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hy.a: {
							const {
								trophies: n
							} = t.payload;
							return Object.values(n).forEach(e => {
								"t6_bf" === e.awardId && (e.url = uI.b)
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				bI = n("./src/reddit/actions/upload.ts"),
				hI = n("./src/reddit/models/Upload/index.ts");
			const yI = {};
			var mI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bI.d: {
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
									status: hI.a.PENDING
								}
							}
						}
						case bI.h: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: hI.a.UPLOADING
								}
							}
						}
						case bI.c: {
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
						case bI.e: {
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
						case bI.g: {
							const {
								key: n,
								url: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: hI.a.SUCCESS,
									url: r
								}
							}
						}
						case bI.b: {
							const {
								key: n,
								error: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: hI.a.FAILED,
									error: r
								}
							}
						}
						case bI.a: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: hI.a.CANCELED
								}
							}
						}
						case bI.f: {
							const {
								key: n
							} = t.payload, r = e[n];
							return r.metadata.localUrl && window.URL.revokeObjectURL(r.metadata.localUrl), Gr()(e, n)
						}
						default:
							return e
					}
				},
				gI = n("./src/reddit/actions/upvotePrompt.ts");
			var vI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gI.a:
						return ++e;
					default:
						return e
				}
			};
			const EI = {};

			function _I(e, t) {
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
			var OI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.d:
					case i.a:
					case c.f:
					case i.t: {
						const {
							wallet: n
						} = t.payload;
						return _I(e, n)
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
			Object(F.a)("INBOX__COUNT_UPDATE");
			var II = n("./src/reddit/actions/pages/appeal/constants.ts"),
				SI = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				TI = n("./src/reddit/actions/sso/constants.ts"),
				DI = n("./src/reddit/endpoints/profile/info.ts");
			const wI = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || uu()(r, t)) return e;
				const {
					karma: s
				} = t;
				return {
					...t,
					karma: {
						...DI.a,
						...null == r ? void 0 : r.karma,
						...s
					},
					gender: n
				}
			};
			var jI = Object(Qb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case II.a:
					case II.b:
					case xy.b:
					case xy.c:
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
					case be.a:
					case be.e:
					case be.b:
					case be.f:
					case D.a:
					case D.c:
					case N.a:
					case N.b:
					case k.SUBREDDIT_FAILED:
					case hu.n:
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
					case qr.PAGE_LOADED:
					case Ze.c:
					case Ze.e:
					case OO.a:
					case OO.b:
					case Ln.j:
					case SI.b:
					case SO.c:
					case U.TOPIC_DATA_LOADED:
						return wI(e, t.payload.account);
					case SO.n:
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
						return n ? wI(e, n.account) : e
					}
					case SO.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case r.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case Ln.l:
					case Ln.k: {
						const n = t.payload;
						return e && "profileIcon" === n.key ? {
							...e,
							accountIcon: n.imageUrl
						} : e
					}
					case Ie.B:
					case hu.j: {
						const {
							coins: n
						} = t.payload;
						return e ? {
							...e,
							coins: n
						} : e
					}
					case hu.m: {
						const {
							userName: n,
							karma: r
						} = t.payload;
						return n.toLowerCase() !== (e && Object(ge.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...DI.a,
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
					case TI.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case TI.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case ni.SAVE_USERNAME_SUCCESS: {
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
					case Vu.a:
					case Vu.b: {
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
					case SO.k: {
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
			var CI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.m:
					case SO.n:
						return null;
					case SO.l:
						return t.payload;
					default:
						return e
				}
			};
			var AI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SO.m:
							return !0;
						case SO.n:
						case SO.l:
							return !1;
						default:
							return e
					}
				},
				PI = Object(J.c)({
					error: CI,
					pending: AI
				}),
				RI = Object(J.c)({
					api: PI
				});
			var NI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.i:
						return !0;
					default:
						return e
				}
			};
			var LI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SO.h:
							return !0;
						case SO.i:
						case SO.g:
							return !1;
						default:
							return e
					}
				},
				xI = Object(J.c)({
					pending: LI,
					emailSent: NI
				}),
				kI = Object(J.c)({
					api: xI
				}),
				UI = Object(J.c)({
					changeEmail: RI,
					sendResetEmail: kI
				}),
				MI = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const BI = {};
			var FI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ut.f:
						return {
							...e, new: MI.a.pending
						};
					case Ut.d:
						return {
							...e, new: MI.a.error
						};
					case Ut.e:
						return {
							...e, new: MI.a.waitingForRequest
						};
					case Ut.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.pending
						}
					}
					case Ut.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.error
						}
					}
					case Ut.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const GI = [];
			var qI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ut.e:
							return [t.payload, ...e];
						case Ut.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case Ln.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				HI = Object(J.c)({
					api: FI,
					data: qI
				}),
				VI = n("./src/reddit/actions/chat/constants.ts"),
				WI = n("./src/reddit/actions/chat/userSettings.ts");
			const QI = VI.a.anybody;
			var KI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case WI.a:
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
				YI = Object(J.c)({
					invitePolicy: KI
				});
			const $I = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var zI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && uu()(e, n) ? e : {
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
						return $I(e, n)
					}
					case Xn.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return $I(e, n.length)
					}
					case Xn.c:
					case Xn.l: {
						const {
							draftsCount: n
						} = t.payload;
						return $I(e, n)
					}
					default:
						return e
				}
			};
			const XI = {};
			var JI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eo.a: {
							const e = t.payload.experimentVariants;
							return Ju(e)
						}
						default:
							return e
					}
				},
				ZI = n("./src/reddit/actions/global/constants.ts");
			const eS = {};
			var tS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ZI.a: {
							const n = t.payload;
							return null === n.local_persisted_experiments_store || void 0 === n.local_persisted_experiments_store ? e : n.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				nS = Object(J.c)({
					byName: JI,
					localPersisted: tS
				});
			var rS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ln.f:
						return !0;
					case Ln.e:
						return !1;
					default:
						return e
				}
			};
			var sS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ln.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const aS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var oS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SO.b:
							return t.payload;
						default:
							return e
					}
				},
				cS = n("./src/reddit/actions/notifications/constants.ts"),
				iS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var dS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iS.a:
					case iS.d:
					case iS.h:
					case cS.a:
						return t.payload && t.payload.error || null;
					case iS.c:
					case iS.f:
					case iS.j:
					case cS.c:
					case cS.b:
						return null;
					default:
						return e
				}
			};
			var lS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.c:
						return !1;
					case cS.b:
						return !0;
					default:
						return e
				}
			};
			var uS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cS.c:
						case iS.j:
							return !0;
						case cS.b:
						case cS.a:
						case iS.i:
						case iS.h:
							return !1;
						default:
							return e
					}
				},
				pS = Object(J.c)({
					error: dS,
					loaded: lS,
					pending: uS
				});
			var fS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case cS.f:
					case cS.e:
						return null;
					default:
						return e
				}
			};
			var bS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.f:
						return !1;
					case cS.e:
						return !0;
					default:
						return e
				}
			};
			var hS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cS.f:
							return !0;
						case cS.e:
						case cS.d:
							return !1;
						default:
							return e
					}
				},
				yS = Object(J.c)({
					error: fS,
					loaded: bS,
					pending: hS
				}),
				mS = Object(J.c)({
					getPreferences: pS,
					setPreferences: yS
				}),
				gS = n("./src/lib/notifications/constants.ts");
			var vS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gS.k:
						return !0;
					case gS.b:
						return !1;
					default:
						return e
				}
			};
			const ES = {
				byId: {},
				allIds: []
			};
			var _S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ES,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case iS.g: {
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
			const OS = {
				byId: {},
				allIds: []
			};
			var IS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iS.b: {
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
				SS = Object(J.c)({
					sections: IS,
					rows: _S
				});
			var TS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gS.l:
						return !0;
					case gS.c:
					case gS.e:
					case gS.f:
						return !1;
					default:
						return e
				}
			};
			const DS = {
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
			var wS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.b:
					case cS.f:
					case cS.d: {
						const {
							preferences: n
						} = t.payload;
						return wa()(n) ? e : n
					}
					default:
						return e
				}
			};
			const jS = {
				byId: {},
				allIds: []
			};
			var CS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case iS.g: {
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
			const AS = {
				byId: {},
				allIds: []
			};
			var PS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iS.e: {
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
				RS = Object(J.c)({
					sections: PS,
					rows: CS
				});
			var NS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const LS = [];
			var xS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case iS.k: {
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
				kS = Object(J.c)({
					subreddits: xS,
					pageInfo: NS
				}),
				US = Object(J.c)({
					api: mS,
					subscribedSubredditsSettings: kS,
					emailSettingsLayout: SS,
					isAskNotificationPromptVisible: vS,
					isNotificationPromptVisible: TS,
					preferences: wS,
					pushSettingsLayout: RS
				});
			const MS = {};
			var BS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.i:
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
			var FS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.wb: {
						const n = t.payload.powerups;
						return n ? Gr()({
							...e,
							...n
						}, "allocation") : e
					}
					case Ie.mb: {
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
			var GS, qS = function() {
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
				HS = Object(J.c)({
					data: FS,
					fetched: qS
				}),
				VS = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(GS || (GS = {}));
			const WS = {
				status: GS.UNFETCHED,
				subscriptions: []
			};
			var QS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.Ab:
						return {
							...e, status: GS.PENDING
						};
					case Ie.zb: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: GS.LOADED
						} : e
					}
					case Ie.yb:
						return {
							...e, status: GS.FAILED
						};
					default:
						return e
				}
			};
			var KS = function() {
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
			var YS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.f:
						return !0;
					default:
						return e
				}
			};
			var $S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.j:
						return t.payload;
					default:
						return e
				}
			};
			var zS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eo.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var XS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eo.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				JS = Object(J.c)({
					isEmployee: zS,
					isLoggedIn: XS
				});
			var ZS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ln.q: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && uu()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				eT = n("./src/reddit/actions/userWhitelist.ts");
			const tT = {};
			var nT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eT.e:
						return {
							...e, new: MI.a.pending
						};
					case eT.d:
						return {
							...e, new: MI.a.error
						};
					case eT.f:
						return {
							...e, new: MI.a.waitingForRequest
						};
					case eT.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.pending
						}
					}
					case eT.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.error
						}
					}
					case eT.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const rT = [];
			var sT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eT.f:
							return [t.payload, ...e];
						case eT.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case Ln.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				aT = Object(J.c)({
					api: nT,
					data: sT
				}),
				oT = Object(J.c)({
					account: jI,
					accountSettings: UI,
					blocked: HI,
					chatSettings: YI,
					drafts: zI,
					experiments: nS,
					isCustomizeFlyoutShowing: rS,
					topContentDismissalPrefsSet: ZS,
					language: sS,
					loid: oS,
					notificationPrefs: US,
					ownedBadges: BS,
					powerups: HS,
					prefs: VS.c,
					productOfferSubscriptions: QS,
					session: KS,
					sessionRefreshFailed: YS,
					sessionTracker: $S,
					temporaryGQL: JS,
					wallets: OI,
					whitelist: aT
				});
			var cT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SI.a:
						return t.payload || null;
					case SI.b:
					case SI.c:
						return null;
					default:
						return e
				}
			};
			var iT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SI.c:
						return !0;
					case SI.b:
					case SI.a:
						return !1;
					default:
						return e
				}
			};
			var dT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SI.b:
						return !0;
					case SI.a:
					case SI.c:
						return !1;
					default:
						return e
				}
			};
			var lT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SI.b:
							return t.payload.userDataExportEligibility;
						case SI.a:
						case SI.c:
							return !1;
						default:
							return e
					}
				},
				uT = Object(J.c)({
					error: cT,
					pending: iT,
					success: dT,
					userDataExportEligibility: lT
				}),
				pT = Object(J.c)({
					userDataRequestPageApi: uT
				});
			const fT = {};
			var bT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SO.f:
					case SO.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case SO.d: {
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
			var hT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SO.f:
							return !0;
						case SO.e:
						case SO.d:
							return !1;
						default:
							return e
					}
				},
				yT = Object(J.c)({
					error: bT,
					pending: hT
				});
			const mT = {};
			var gT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mT,
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
			const vT = {},
				ET = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && uu()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var _T = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SO.e: {
							const {
								data: n
							} = t.payload;
							return ET(e, n)
						}
						case fe.k:
							return ET(e, t.payload || {});
						case hu.l: {
							const {
								user: n
							} = t.payload;
							return ET(e, {
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
								o = s && s.topAward;
							return o ? ET(e, {
								[n.toLowerCase()]: {
									...r,
									awardedLastMonth: {
										totalCount: a,
										topAward: o
									}
								}
							}) : e
						}
						case hu.m: {
							const {
								userName: n,
								karma: r
							} = t.payload, s = e[n.toLowerCase()];
							if (!s) return e;
							const a = {
								...DI.a,
								...r
							};
							return ET(e, {
								[n.toLowerCase()]: {
									...s,
									karma: a
								}
							})
						}
						case Ln.l:
						case Ln.k: {
							const {
								imageUrl: n,
								key: r,
								username: s
							} = t.payload;
							if ("profileIcon" !== r) return e;
							const a = s.toLowerCase(),
								o = e[a];
							return o ? ET(e, {
								[a]: {
									...o,
									accountIcon: n
								}
							}) : e
						}
						case SO.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object(ge.e)(n).toLowerCase(),
								s = e[r];
							return s ? ET(e, {
								[r]: {
									...s,
									accountIcon: n.accountIcon,
									snoovatarFullBodyAsset: n.snoovatarFullBodyAsset
								}
							}) : e;
						case Ln.n: {
							const {
								additional: n,
								settings: r
							} = t.payload;
							if (n.enableFollowers === n.prevEnableFollowers) return e;
							const s = r.currentUserName.toLowerCase(),
								a = e[s];
							return a ? ET(e, {
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
				OT = n("./src/reddit/actions/usernameAvailable.ts");
			const IT = {};
			var ST = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case OT.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: OT.b.Available
						}
					}
					case OT.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: OT.b.Error
						}
					}
					case OT.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: OT.b.Pending
						}
					}
					case OT.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: OT.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			var TT = function() {
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
				DT = Object(J.c)({
					fetched: TT
				});
			var wT = function() {
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
			var jT = function() {
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
				CT = Object(J.c)({
					error: wT,
					pending: jT
				});
			var AT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.ub:
						return t.payload.postId;
					default:
						return e
				}
			};
			const PT = {};
			var RT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PT,
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
			const NT = {};
			var LT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NT,
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
							return Gr()(e, [n])
						}
						default:
							return e
					}
				},
				xT = Object(J.c)({
					api: CT,
					currentPostId: AT,
					currentRank: RT,
					list: LT
				}),
				kT = Object(J.c)({
					api: yT,
					appliedBadges: gT,
					models: _T,
					nameAvailable: ST,
					topAwarders: xT,
					powerups: DT
				});
			const UT = {};
			var MT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case be.b:
						case be.f:
						case k.SUBREDDIT_LOADED:
						case H.i:
						case ye.c:
						case L.PAGE_LOADED:
						case qr.PAGE_LOADED: {
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
				BT = n("./src/reddit/actions/widgets/constants.ts");
			const FT = {};
			var GT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FT,
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
							const o = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== o.length) return e;
							const c = o[0];
							return {
								...e,
								[c]: a[0]
							}
						}
						case BT.g: {
							const n = t.payload;
							return "menu" !== n.widget.kind ? e : {
								...e,
								[n.subredditId]: n.widgetId
							}
						}
						case BT.h: {
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
				qT = n("./src/reddit/helpers/widgets/index.tsx");
			const HT = {};
			var VT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HT,
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
					case BT.b: {
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
								styles: Object(qT.g)()
							}
						}), t
					}
					case BT.e: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case BT.i:
					case BT.g: {
						const n = t.payload;
						return {
							...e,
							[n.widget.id]: n.widget
						}
					}
					case BT.h: {
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
					case gu.h: {
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
					case pv.f: {
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
			const WT = {};
			var QT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT,
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
			const KT = {};
			var YT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case qr.PAGE_LOADED: {
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
					case BT.e:
					case BT.b: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgets.layout.sidebar.order
						}
					}
					case BT.f: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgetIds
						}
					}
					case BT.g: {
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
					case BT.h: {
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
			const $T = {
				accountManagerModalData: a,
				activeModal: h,
				ads: E,
				adsSignals: Y,
				apiRequestState: X,
				appBadges: ae,
				authorFlair: Oe,
				awards: ft,
				badges: jt,
				blockedRedditors: kt,
				blockUser: Ht,
				brandSafety: Wt,
				chat: pn,
				cooldownTimer: Wn,
				commentsListTruncated: bn,
				communityFlairs: mn,
				connection: En,
				contentControls: Rn,
				contentGate: kn,
				continueThreads: Bn,
				creations: ma,
				dashboard: Ea,
				discoveryUnits: xa,
				dismissedTruncationList: Ma,
				economics: co,
				emailVerificationTooltip: uo,
				emojis: vo,
				experimentOverrides: So,
				externalAccount: Zo,
				featureFlags: oc,
				firstPost: dc,
				focusedVerticals: Oc,
				fontFiles: Sc,
				frontPageFirstLoaded: Tc,
				gild: Mc,
				header: Kc,
				htmlResponseStreaming: Yc,
				imageUploads: Xc,
				impressionMap: Zc,
				interceptedAction: ti,
				isChangeUsernameTooltipShowing: ri,
				isModeratorWithPostPerms: ai,
				jsApi: ii,
				langSite: ui,
				leaderboard: Ei,
				listings: Vd,
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
				merchandisingUnitAnnouncements: il,
				meta: ul,
				moderatingSubreddits: bl,
				modListingPage: _l,
				modModeEnabled: Il,
				moreComments: Pl,
				multireddits: Su,
				notificationBannerId: Du,
				notificationsInbox: Fu,
				nps: Hu,
				onboarding: zu,
				page: np,
				platform: ip,
				postCollection: Vp,
				polls: Rp,
				postFlair: zp,
				posts: Wb,
				postStickiedComments: $b,
				givePremium: Hc,
				products: lh,
				profileCommentsPage: Th,
				profilePrivatePage: Gh,
				profileModSettingsPage: Ch,
				profilePostsPage: Ph,
				profiles: Ey,
				promos: Ty,
				recap: jy,
				recentSubreddits: Ry,
				recommendations: Ly,
				reportPage: Vy,
				reportRules: Ky,
				requestHost: Yy,
				runTimeEnvVars: Xy,
				search: Dm,
				searchDiscoveryUnits: Lm,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : km,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xm.a:
							return t.payload;
						case xm.b:
							return km;
						default:
							return e
					}
				},
				seo: Vm,
				shortcuts: Zm,
				sidebarPromotedPosts: ng,
				structuredStyles: _g,
				stylesheets: Og,
				subredditAutocomplete: Pg,
				subreddits: g_,
				subredditStickyPosts: __,
				subscriptions: H_,
				survey: z_,
				tabBadged: X_,
				tags: _O,
				themes: wO,
				toaster: AO,
				tooltip: xO,
				tracing: MO,
				tracking: YO,
				trafficStats: JO,
				transfers: oI,
				trending: lI,
				trophies: fI,
				uploads: mI,
				user: oT,
				userDataRequestPage: pT,
				upvotePromptCountPerSess: vI,
				users: kT,
				widgets: Object(J.c)({
					idCardIds: MT,
					menuIds: GT,
					models: VT,
					moderatorIds: QT,
					sidebar: YT
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
					chunk: s.u.PREMIUM,
					component: c,
					exact: !0,
					meta: {
						name: s.Tb.PREMIUM,
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
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./node_modules/reselect/es/index.js");
			const o = Object(a.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: r.yb
			}), e => ({
				bucketed: e === r.ad.ExpandedSearch || e === r.ad.CollapsedSearch,
				collapsed: e === r.ad.CollapsedSearch,
				expanded: e === r.ad.ExpandedSearch
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
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(r.a)(d.Z, d.Q, (e, t) => !(e || t)),
				p = e => {
					if (!u(e)) return;
					const t = Object(o.c)(e, {
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
					let r = Object(i.r)(e),
						a = Object(i.d)(e);
					if ("undefined" != typeof window && !a) {
						const e = Object(c.a)("subreddit", window.location.href);
						(a = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Tb.SUBREDDIT)
					}
					if (a && n) {
						const e = (null == a ? void 0 : a.toLocaleLowerCase()) === n;
						return r === s.Tb.SUBREDDIT && e
					}
					return !1
				},
				b = e => !!p(e) && Object(o.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: a.be,
					expEventOverride: !1
				}) !== a.he.Readonly
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
				o = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const i = 5e3,
				d = 12e3,
				l = 6 * r.vb,
				u = (e, t) => {
					const n = Object(o.F)(e, t),
						r = Object(c.R)(e);
					let i = !1;
					const d = Object(c.m)(e);
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
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"abcab38cb71c"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"ad9eaf74b08b"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		},
		"./src/redditGQL/operations/TrendingSearches.json": function(e) {
			e.exports = JSON.parse('{"id":"1db34ea43211"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		},
		"./src/redditGQL/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		},
		"./src/redditGQL/operations/VerifyRecaptchaToken.json": function(e) {
			e.exports = JSON.parse('{"id":"c1242f999b6c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.6933e06b7aab7cf27e23.js.map