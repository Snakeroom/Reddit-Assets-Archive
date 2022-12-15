// https://www.redditstatic.com/desktop2x/Governance~Reddit.7590af495d183ce0f26d.js
// Retrieved at 12/15/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
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
				return h
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
			t.b = b
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, n) {},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const a = [s.yc, s.ub, s.E, s.U, s.pb, s.Xb],
				o = {
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
					[s.E]: e => r.fbt._({
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
				c = {
					[s.Xb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.U]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.E]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
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
						[s.E]: "",
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
				h = Object(r.a)(o),
				b = Object(r.a)(c),
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
							e(h({
								badgeIds: t,
								subredditId: n,
								userId: d.id
							}));
							const u = await Object(a.a)(c(), n, o, l);
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
				return h
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
				h = Object(r.a)(d),
				b = Object(r.a)(l),
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
				o = n("./src/reddit/endpoints/chat/userSettings.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
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
					const s = await Object(o.b)(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(h({
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
						b = g(f);
					if (b) {
						t(y());
						const e = g(p.user.chatSettings.invitePolicy),
							n = await Object(o.e)(b, u());
						if (Object(d.a)(((e, t) => n => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: t
								},
								...Object(c.o)(n)
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
				return b
			})), n.d(t, "e", (function() {
				return m
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
				h = Object(r.a)(u),
				b = "SET__COOLDOWN_TIMER",
				y = Object(r.a)(b),
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
						b = l <= Date.now();
					if (!a || !r || !b || !d || u) return;
					e(p());
					const m = await o(r());
					if (m.ok && m.body) {
						const t = m.body.data.act.data.find(e => e.data.nextAvailablePixelTimestamp),
							n = (null == t ? void 0 : t.data.nextAvailablePixelTimestamp) || null;
						e(y({
							expiresAt: n
						})), e(f())
					} else e(h({
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
				method: o.ob.GET,
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
							u = Object(O.Y)(a, {
								subredditId: n
							}).name;
						e(Object(f.k)(t));
						const p = t.file,
							h = await Object(m.h)(p),
							b = await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [l.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: o.ob.POST,
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
									o = Object(v.n)(t, s, a);
								e(Object(f.j)(o)), y = !0
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
					} = e, b = Object(y.a)(a.url), m = r(), g = Object(O.Y)(m, {
						subredditId: d
					}).name, E = await (async (e, t, n, r, s) => Object(c.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: o.ob.POST,
						data: {
							s3_key: n,
							name: r,
							mod_flair_only: s.modFlairOnly,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed
						}
					}))(s.apiContext(), g, b, u, p);
					if (!E.ok) {
						const r = Object(v.k)(a, E.error);
						n(Object(f.i)(r)), n(Object(h.f)(U(e))), t && t.close()
					}
					return E.ok
				}, F = e => async (t, n, s) => {
					const {
						imageData: a,
						subredditId: o,
						emojiName: c,
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
							const s = Object(g.e)(c, n.url, o, i);
							t(S(s)), t(G(o))
						} else {
							const n = Object(b.a)(c),
								r = Object(v.k)(a, n);
							t(Object(f.i)(r)), t(Object(h.f)(U(e)))
						}
						l.close()
					}, l.onerror = n => {
						d = !1;
						const r = Object(b.a)(c),
							s = Object(v.k)(a, r);
						t(Object(f.i)(s)), t(Object(h.f)(U(e))), l.close()
					}, d
				}, G = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n();
					if (Object(_.a)(a, e)) return;
					const o = Object(O.Y)(a, {
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
						p = Object(O.Y)(u, {
							subredditId: t
						}).name,
						f = await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/v1/${n}/emoji/${t}`,
							method: o.ob.DELETE,
							type: "json"
						}))(d(), e, p);
					if (f.ok) {
						n(w({
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
				}, V = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const u = s(),
						p = Object(O.Y)(u, {
							subredditId: e
						}).name;
					if ((await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: o.ob.POST,
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
				}, W = "EMOJI_PERMISSIONS_UPDATED", Q = Object(p.a)(W), Y = (e, t, n, s) => async (a, d, u) => {
					let {
						apiContext: p
					} = u;
					const f = d(),
						b = Object(O.Y)(f, {
							subredditId: s
						}).name;
					(await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/v1/${n}/emoji_permissions.json`,
						method: o.ob.POST,
						data: {
							name: t,
							post_flair_allowed: r.postFlairAllowed,
							user_flair_allowed: r.userFlairAllowed,
							mod_flair_only: r.modFlairOnly
						}
					}))(p(), e, b, n)).ok ? (a(Q({
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
				h = Object(a.a)(u),
				b = Object(a.a)(p),
				y = Object(a.a)(f),
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				g = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				v = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				E = e => async (t, a) => {
					t(h());
					const o = a(),
						i = Object(l.Y)(o, {
							subredditId: e
						}).name,
						u = o.structuredStyles.models[e],
						p = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ExportTheme")]).then(n.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						f = await p(u, i);
					f.ok ? (t(b()), t(Object(c.f)({
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
				return h
			})), n.d(t, "m", (function() {
				return b
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
				h = "MULTIREDDIT__DUPLICATE_PENDING",
				b = "MULTIREDDIT__DUPLICATE_SUCCESS",
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
				return h
			})), n.d(t, "a", (function() {
				return b
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
				h = "NPS__URL_LOADED",
				b = "NPS__URL_FAILED",
				y = Object(r.a)(f),
				m = Object(r.a)(h),
				g = Object(r.a)(b);
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
				h = Object(i.a)(p.b),
				b = Object(i.a)(p.a);
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
							} else e(h(a.body));
					else Object(u.a)(e, s);
					else e(b(a.error))
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
				if (p.route && p.route.meta && (p.route.meta.name === a.Sb.INDEX || p.route.meta.name === a.Sb.MULTIREDDIT || p.route.meta.name === a.Sb.SUBREDDIT)) f ? window.open(u.url) : n ? o(Object(r.b)(u.url)) : await o(p.route.action(u, !0));
				else if (p.match && p.match.params && p.match.params.subredditName) {
					const {
						subredditName: e
					} = p.match.params, t = `/r/${e}/`;
					if (f) window.open(t);
					else if (n) o(Object(r.b)(t));
					else {
						const n = Object(v.a)(e, a.bb.HOT);
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
					title: o.m()
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
				h = Object(r.a)(u),
				b = Object(r.a)(p),
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
					if (!m.ok || !m.body) return void e(b(m.error));
					if (!m.body.account) return void Object(c.a)(e, u);
					const g = await (e => Object(a.a)(e, {
						...o
					}))(l());
					if (!g.ok) return void e(b());
					const v = m.body,
						E = g.body;
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
				return h
			})), n.d(t, "m", (function() {
				return b
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
				h = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
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
				h = (Object(r.a)(c), Object(r.a)(i)),
				b = Object(r.a)(d),
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
				h = n("./node_modules/os-browserify/browser.js"),
				b = n.n(h);
			const y = /\s+at.*(?:\(|\s)(.*)\)?/,
				m = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				g = void 0 === b.a.homedir ? "" : b.a.homedir();
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
					experimentName: f.sf
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
				return h
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
				h = n("./src/redditGQL/operations/TrendingSearches.json"),
				b = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
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
								experimentName: m.Oc
							}) === m.Rd
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
										post: n ? Object(b.f)(n) : null,
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
								...h,
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
								method: a.ob.GET,
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
					postIds: o || []
				});
				if (!b.ok) return;
				const y = b.body;
				y.data && y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && c(d(null === (f = y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === f ? void 0 : f.reduce((e, n) => ((null == n ? void 0 : n.id) && (e[t ? n.name.toLowerCase() : n.id] = n), e), {}))), (null === (h = y.data) || void 0 === h ? void 0 : h.postsInfoByIds) && c(p(y.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
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
				return b
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
					const p = await ((e, t) => Object(o.a)(Object(c.a)(e, [i.a]), {
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
				return h
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
					})), t(Object(s.z)());
					const b = await ((e, t) => Object(a.a)(e, {
						...o,
						variables: t
					}))(r.gqlContext(), {
						subredditName: i
					});
					if (b.ok) {
						const e = b.body.data.subreddit;
						if (e) {
							const n = Object(c.c)(e);
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
				return h
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
				h = (e, t, n) => async (a, o) => {
					const f = o(),
						h = Object(i.z)(),
						g = Date.now(),
						v = h && g - h < 18e4,
						E = Object(u.c)(f, {
							postId: e
						}),
						_ = f.upvotePromptCountPerSess,
						O = (() => {
							const e = Object(i.y)();
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
						buttonAction: b(e),
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
					}))(f)), Object(i.yb)(), Object(i.xb)(S), a(m()), n && n()
				}, b = e => async (t, n) => {
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
				h = Object(s.a)(u),
				b = Object(s.a)(p),
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
					if (p.ok) p.body.name && t(h(p.body)), p.body.id && t(Object(a.f)(p.body.id)), t(o.g(m)), t(o.f({
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
						t(b(n)), "REBLOCK_RATE_LIMIT" === (null === (l = p.body) || void 0 === l ? void 0 : l.reason) ? t(o.f({
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
						h = u.user.blocked.data.filter(t => t.name === e)[0];
					f && (t(E({
						name: e
					})), (await Object(c.c)(l(), f, e)).ok ? (t(_({
						name: e
					})), h && h.id && t(Object(a.h)(h.id)), t(o.f({
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
				return h
			})), n.d(t, "b", (function() {
				return b
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
				h = e => async (t, n, s) => {
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
				}, b = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", m = "USER_UNWHITELIST__FAILED", g = Object(s.a)(b), v = Object(s.a)(y), E = Object(s.a)(m), _ = e => async (t, n, s) => {
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
				return h
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
				h = e => {
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
					thumbnailContainerClassName: h,
					url: b,
					usePreview: y
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.thumbnailContainer, t)
				}, s.a.createElement(o.b, {
					className: Object(a.a)(i.a.thumbnail, n),
					containerClassName: h,
					crosspost: r,
					forceShowNSFW: c,
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
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				m = n.n(y);
			const g = Object(l.a)(p.a),
				v = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(i.a)(e => {
				const t = Object(o.e)(b.d),
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
						color: Object(h.a)(e).linkText
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
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
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
				Y = n("./src/reddit/components/PostTitle/index.m.less"),
				K = n.n(Y);

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
							p = K.a.ExtraLarge;
							break;
						case M.Large:
							p = K.a.Large;
							break;
						case M.Medium:
							p = K.a.Medium;
							break;
						case M.Small:
							p = K.a.Small;
							break;
						case M.ExtraSmall:
							p = K.a.ExtraSmall;
							break;
						case M.Metadata:
							p = K.a.Metadata
					}
					return o.a.createElement("div", {
						className: Object(u.a)(K.a.Title, c, p, {
							[K.a.isNoWrap]: s,
							[K.a.blur]: d
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
						className: Object(u.a)(t, K.a.styledLink, {
							[K.a.isVisitedEnabled]: !n
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
						className: Object(u.a)(K.a.titleContainer, r, {
							[K.a.isNoWrap]: n,
							[K.a.isVisitedEnabled]: !t
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
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(h.b, {
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
							return n ? o.a.createElement(h.b, {
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
						if (c) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(D.D)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: a
						}, Object(A.a)(r), !r.isSponsored && o.a.createElement(S.a, {
							name: "external_link",
							className: K.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== M.Large && e.size !== M.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: a
					}, Object(A.a)(r), !r.isSponsored && o.a.createElement(S.a, {
						name: "external_link",
						className: K.a.outboundLinkIcon
					}));
					return null
				};
			class re extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${K.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(C.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(C.a)(this.props).titleText,Object(C.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(s.c)(.45,Object(C.a)(this.props).bodyText,Object(C.a)(this.props).body)};\n        }\n      `
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
					} = this.props, f = n === T.b.Left, h = Object(P.b)(i), {
						leftFlair: b,
						rightFlair: y
					} = Object(W.a)({
						flair: h,
						isFlairPositionedLeft: f,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), m = !a && !s && !t, g = m && b && b.length > 0, v = m && y && y.length > 0;
					return o.a.createElement("div", {
						className: Object(u.a)(K.a.Component, e, i.id),
						ref: this.props.innerRef,
						"data-adclicklocation": Q.a.TITLE,
						onClick: p
					}, !d && g && o.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), !Object(j.b)(i) && o.a.createElement(ee, $({}, this.props, {
						leftFlair: d ? b : void 0
					})), c && o.a.createElement(B, {
						className: K.a.pollMeta,
						pollId: c.id
					}), o.a.createElement(ne, this.props), v && o.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: y,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: K.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${r.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(f.gb)(),
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
				return ge
			})), n.d(t, "a", (function() {
				return ve
			})), n.d(t, "d", (function() {
				return Ee
			})), n.d(t, "c", (function() {
				return Oe
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
				h = n("./src/reddit/helpers/clickSourceData/index.ts"),
				b = n("./src/reddit/helpers/getSearchUrl/index.ts");
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
					} = Object(b.a)({
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
						state: Object(h.c)(h.a.SEARCH_DROPDOWN, T, I.isProfile || I.isSubreddit)
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
				k = n("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function U(e) {
				let {
					className: t,
					focusedItem: n,
					id: r,
					trendingItem: o,
					searchOriginPage: p,
					onUpdateSearchQuery: f,
					onCloseDropdown: m,
					onSetRecentSearch: g,
					fireAdPixelsOfType: _
				} = e;
				const O = Object(a.d)(),
					I = !(!o.post || !o.post.isSponsored),
					{
						url: S,
						qs: T
					} = Object(b.a)({
						searchItem: o,
						searchOptions: {
							source: I ? u.a.PromotedTrend : u.a.Trending
						}
					}),
					w = s.a.createElement(d.a, {
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
							if (g(e), Object(x.d)(x.a.SearchResults), (e => O((t, n) => Object(k.o)({
									state: n(),
									trendingSearch: e,
									telemetrySource: y.a.Typeahead
								})))(o), I) {
								const {
									post: e
								} = o;
								e && _(e, R.a.Click)
							}
							m()
						},
						key: `trending-${o.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: S && Object(l.a)(S) || "",
							search: T,
							state: Object(h.c)(h.a.TYPEAHEAD, p)
						}
					}, s.a.createElement("div", null, I && s.a.createElement("div", {
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
						usePreview: I
					}));
				return I ? s.a.createElement(P.a, {
					post: o.post
				}, w) : w
			}
			var M = n("./src/lib/prettyPrintNumber/index.ts"),
				B = n("./src/reddit/components/Flair/index.tsx"),
				F = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/constants/experiments.ts"),
				H = n("./src/reddit/selectors/experiments/searchSingleVariant.ts");

			function V(e) {
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
				const R = Object(a.e)(e => Object(H.a)(e, q.Af)),
					N = Object(g.a)(),
					L = (null === (T = o.displayInfo) || void 0 === T ? void 0 : T.karma) || 0,
					x = (null === (w = o.displayInfo) || void 0 === w ? void 0 : w.subscribers) || 0,
					k = o.isProfile ? i.fbt._({
						"*": "{karma count} karma",
						_1: "1 karma"
					}, [i.fbt._plural(L, "karma count", Object(M.b)(L))], {
						hk: "2KlIGI"
					}) : i.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [i.fbt._plural(x, "members count", Object(M.b)(x))], {
						hk: "1uMCes"
					});
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: o.searchQuery,
						isTypeaheadActive: !0,
						originElement: _.a.SearchBar,
						rawQuery: o.rawQuery || o.searchQuery,
						searchQuery: o.searchQuery,
						structureType: _.c.Search,
						telemetrySource: y.a.Typeahead
					};
					N(Object(m.A)(m.a.TYPEAHEAD, e, l, I, o))
				}, []);
				const U = (null === (j = o.displayInfo) || void 0 === j ? void 0 : j.subredditOrProfileName) || "";
				return s.a.createElement(d.a, {
					"aria-label": U,
					className: Object(c.a)(D.a.listItem, D.a.typeaheadPadding, R && D.a.typeaheadByTypePadding, t, !((null == n ? void 0 : n.id) !== o.id) && D.a.backgroundFocused),
					onClick: () => {
						v(o), f(o.searchQuery, o, l, I), E(!1), O(!1)
					},
					key: U,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: Object(b.b)(o),
						state: Object(h.c)(h.a.TYPEAHEAD, p)
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
				})), s.a.createElement(F.a, {
					className: Object(c.a)(D.a.metaDataSeparator)
				})), s.a.createElement("div", {
					className: Object(c.a)(D.a.metaTextColor, D.a.metaTextFont)
				}, o.isProfile ? i.fbt._("User", null, {
					hk: "3KLiZZ"
				}) : i.fbt._("Community", null, {
					hk: "18dohI"
				})), L || x ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.a, {
					className: Object(c.a)(D.a.metaDataSeparator)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.metaTextColor, D.a.metaTextFont)
				}, k)) : null, (null === (P = o.displayInfo) || void 0 === P ? void 0 : P.isNSFW) && s.a.createElement(B.b, {
					className: D.a.marginLeft1,
					flair: {
						type: G.f.Nsfw,
						text: i.fbt._("nsfw", null, {
							hk: "2nrY5X"
						})
					}
				}))))
			}

			function W(e) {
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
				let h = [];
				p ? t.forEach(e => {
					var t;
					(null === (t = e.displayInfo) || void 0 === t ? void 0 : t.isNSFW) ? f.push(e): h.push(e)
				}) : h = t;
				const b = h.length,
					y = [...h, ...f][n];
				return s.a.createElement(s.a.Fragment, null, h.map((e, t) => s.a.createElement(V, {
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
				})), s.a.createElement(z, {
					nsfwTypeaheads: f,
					focusedItem: y,
					searchItem: o,
					startPosition: b,
					onCloseDropdown: d,
					onClearSearchQuery: i,
					onSendSearchClickTypeaheadEvent: l,
					onSetRecentSearch: u,
					nightmode: r,
					searchOriginPage: c
				}))
			}
			var Q = n("./src/reddit/hooks/useLocalStorage.ts");
			var Y = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				K = n("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = e => {
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
				const h = Object(g.a)(),
					b = Object(a.e)(e => Object(H.a)(e, q.Af)),
					y = Object(a.e)(O.mb),
					{
						nsfwTypeaheadExpanded: v,
						setNsfwTypeaheadExpanded: E
					} = (() => {
						const [e, t] = Object(Q.a)("nsfw_typeahead_expanded", !1);
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
						h(Object(m.u)(t, e)), E(!v)
					})(r)
				}, s.a.createElement("p", {
					className: b ? D.a.titleFontH5 : void 0
				}, $._("NSFW results", null, {
					hk: "17BDhb"
				})), s.a.createElement("p", {
					className: D.a.listItemButton
				}, v ? s.a.createElement(s.a.Fragment, null, $._("Collapse", null, {
					hk: "4nBun"
				}), s.a.createElement(K.a, {
					className: D.a.chevron
				})) : s.a.createElement(s.a.Fragment, null, $._("Expand", null, {
					hk: "11NQXp"
				}), s.a.createElement(Y.a, {
					className: D.a.chevron
				})))), v && t.map((e, t) => s.a.createElement(V, {
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
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Z(e) {
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
				}, J._("Communities", null, {
					hk: "3GTB0"
				})), t.communities.map((e, t) => s.a.createElement(V, X({
					key: e.id,
					indexOfItem: t,
					relativePosition: t,
					item: e
				}, p)))), t.people.length > 0 && s.a.createElement("div", {
					className: D.a.section
				}, s.a.createElement("p", {
					className: D.a.sectionTitle
				}, J._("People", null, {
					hk: "3qVb3c"
				})), t.people.map((e, n) => s.a.createElement(V, X({
					key: e.id,
					indexOfItem: t.communities.length + n,
					relativePosition: n,
					item: e
				}, p)))), s.a.createElement(z, X({
					nsfwTypeaheads: t.nsfw,
					searchItem: o,
					startPosition: n.length - t.nsfw.length
				}, p)))
			}
			var ee = n("./src/reddit/constants/zIndex.ts"),
				te = n("./src/reddit/controls/Dropdown/index.tsx"),
				ne = n("./src/reddit/selectors/searchResults.ts"),
				re = n("./node_modules/lodash/pick.js"),
				se = n.n(re),
				ae = n("./node_modules/history/esm/history.js"),
				oe = n("./node_modules/react-router-redux/es/index.js"),
				ce = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				ie = n.n(ce),
				de = n("./src/reddit/constants/parameters.ts"),
				le = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				ue = n("./src/reddit/controls/Search/SearchScopePill/index.tsx"),
				pe = n("./src/reddit/hooks/usePageLayer.ts"),
				fe = n("./src/reddit/selectors/platform.ts");
			const he = "search-trigger-item";

			function be(e) {
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
					T = Object(pe.a)(),
					w = Object(le.bb)(T),
					j = Object(a.d)(),
					C = Object(a.e)(ne.j),
					A = Object(a.e)(O.mb),
					{
						nsfwSessionSetting: P
					} = Object(f.b)(),
					R = Object(a.e)(fe.s),
					N = Object(a.e)(fe.d),
					L = Object(ue.c)(C),
					x = Object(u.e)({
						...se()(w || {}, de.A),
						q: n.searchQuery,
						restrict_sr: C.enabled ? "1" : ""
					});
				return Object(r.useEffect)(() => {
					S(Object(m.v)(x, o, T || void 0))
				}, []), s.a.createElement("button", {
					type: "submit",
					onClick: function(e) {
						S(Object(m.p)(_.a.FullSearchButton, x, y.a.Typeahead, T || void 0)), p(e),
							function() {
								const {
									url: e,
									qs: t
								} = Object(b.a)({
									searchItem: n,
									searchOptions: {},
									activeSearchScope: C,
									includeNsfwResults: A && P
								}), r = {
									...Object(h.c)(h.a.TYPEAHEAD, d),
									routeName: R,
									subredditName: N
								};
								j(Object(oe.b)(Object(ae.c)({
									pathname: e,
									search: t,
									state: r
								})))
							}()
					},
					className: Object(c.a)(D.a.listItem, ie.a.item, D.a.triggerItem, l && D.a.backgroundFocused, t),
					"data-testid": he
				}, s.a.createElement(v.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: ie.a.text
				}, i.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), i.fbt._("{search query}", [i.fbt._param("search query", I)], {
					hk: "4vP3YT"
				}), "”", L && s.a.createElement(s.a.Fragment, null, " ", i.fbt._("in {scope}", [i.fbt._param("scope", null == L ? void 0 : L.title)], {
					hk: "4jMNCg"
				}))))
			}

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = "SearchDropdown", ve = "SearchDropdownContent", Ee = 5, _e = Object(o.a)(te.a);

			function Oe(e) {
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
					typeaheadByTypeSuggestions: h,
					focusedItemIndex: b,
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
				} = e, P = Object(a.d)(), [R, N] = Object(r.useState)(null), [L, x] = Object(r.useState)(n), [M, B] = Object(r.useState)(new Array(Ee).fill(!1)), {
					enabled: F
				} = Object(a.e)(ne.j), G = Object(a.e)(e => Object(H.a)(e, q.Af)), V = !!(null === (t = g.searchQuery) || void 0 === t ? void 0 : t.trim()), Q = l || i, Y = F, K = [...h.communities, ...h.people, ...h.nsfw], $ = !l && (!V || b >= 0) && (G ? 0 === K.length : 0 === f.length) && !Y, z = {
					width: L ? `${L}px` : "inherit",
					overflow: "auto"
				};
				E && (z.zIndex = ee.g), Object(r.useEffect)(() => {
					x(n)
				}, [n]), Object(r.useLayoutEffect)(() => {
					if (!i && d && document.getElementById(ve)) {
						const e = X();
						B(e), o.forEach((t, n) => {
							e[n] && P((e, n) => Object(k.p)({
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
							const r = document.getElementById(`${ge}-${t.id}`),
								s = document.getElementById(ve);
							if (r && s) {
								const t = r.getBoundingClientRect(),
									a = s.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[n] = !0)
							}
						}
					}), e
				};
				const J = !l && !Y;
				return s.a.createElement(_e, {
					className: Object(c.a)(D.a.bodyBackgroundColor, D.a.bodyTextColor, D.a.borderTop1Line, D.a.sdListContainer),
					id: ve,
					isFixed: E,
					isOpen: d,
					isOverlay: _,
					tooltipId: ge,
					noFocus: !0,
					style: z,
					onDropdownMounted: () => {
						if (!i && o.length > 0) {
							const e = X();
							B(e), o.forEach((t, n) => {
								e[n] && P((e, n) => Object(k.p)({
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
							M[n] || !e[n] || t.post && t.post.isSponsored || P((e, n) => Object(k.p)({
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
					focusedItem: u[b],
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
				}, me._("Trending today", null, {
					hk: "3nAMpY"
				})) : null, o.map(e => s.a.createElement(U, {
					id: `${ge}-${e.id}`,
					key: e.id,
					focusedItem: u[b],
					searchOriginPage: v,
					fireAdPixelsOfType: O,
					onCloseDropdown: S,
					onSetRecentSearch: C,
					onUpdateSearchQuery: A,
					trendingItem: e
				}))), Q && !Y && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				}), s.a.createElement("div", {
					className: Object(c.a)(D.a.loadingItem)
				})), !$ && V && s.a.createElement(s.a.Fragment, null, J && G ? s.a.createElement(Z, ye({}, e, {
					typeaheadByTypeList: K
				})) : s.a.createElement(W, e), s.a.createElement(be, {
					className: Object(c.a)(D.a.borderTop2Line, D.a.triggerItem),
					key: g.searchQuery,
					searchItem: g,
					position: f.length,
					searchOriginPage: v,
					onTriggerSearch: S,
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
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/constants/comments.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/selectors/comments.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./node_modules/reselect/es/index.js"),
				b = n("./src/lib/cache/index.ts"),
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
					let t = Object(b.b)(_);
					const n = Object.entries(t || {});
					n.length >= 99 && (t = n.sort((e, t) => {
						let [, n] = e, [, r] = t;
						return r - n
					}).splice(0, 99).reduce((e, t) => {
						let [n, r] = t;
						return e[n] = r, e
					}, {})), Object(b.d)(_, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				S = (e, t) => {
					var n;
					if (!Object(f.S)(e)) return !1;
					if (null === (n = Object(b.b)(_)) || void 0 === n ? void 0 : n[t.postId]) return !1;
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
					return !(!a || !r.numComments || a.threshold > r.numComments) && !!O(e, t)
				},
				T = () => Object(h.c)({
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
				h = n("./src/reddit/controls/Search/index.m.less"),
				b = n.n(h);
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
				className: Object(c.a)(f.a.subText, b.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(l.b, {
				className: Object(c.a)(b.a.subredditIcon, b.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(l.b, {
				className: Object(c.a)(b.a.subredditIcon, e.iconClassName),
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
				return O
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/lodash/debounce.js"),
				o = n.n(a),
				c = n("./node_modules/react/index.js"),
				i = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/chooseVariant/index.ts"),
				h = n("./node_modules/reselect/es/index.js");
			const b = Object(h.a)(e => Object(f.c)(e, {
				experimentEligibilitySelector: f.a,
				experimentName: p.ng
			}), e => ({
				promptBeforeClick: e === p.og.PromptBeforeClick,
				promptAfterClick: e === p.og.PromptAfterClick
			}));
			var y = n("./src/reddit/controls/Search/SearchScopePill/index.tsx"),
				m = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				g = n.n(m);
			const v = "Search Reddit",
				E = ["world news", "uplifting news", "wnba", "awws", "make me smile", "eye bleach", "dogecoin", "the bachelor", "catloaf", "blep", "wholesome memes", "history memes", "starter packs", "mildly interesting", "learn japanese", "learn programming", "vinyl", "houseplants", "skincare addicts", "nasa", "ask historians", "ask reddit", "100 years ago", "data is beautiful", "what is this thing"];
			class _ {
				static get() {
					if (_.showFirstValue) {
						_.showFirstValue = !1;
						const e = document.getElementById("header-search-bar").placeholder;
						if (e && e !== v) return e
					}
					_.showFirstValue = !1, 0 === _.queriesToBeShown.length && (_.queriesToBeShown = [...E]);
					const e = Math.floor(Math.random() * _.queriesToBeShown.length),
						t = _.queriesToBeShown[e];
					return _.queriesToBeShown.splice(e, 1), `Search "${t}"`
				}
			}
			_.queriesToBeShown = new Array(...E), _.showFirstValue = !0;
			const O = "search-bar-dismiss-button",
				I = "header-search-bar",
				S = e => {
					let {
						inputRef: t,
						isOpen: n,
						onChange: a,
						onClearSearchQuery: p,
						onClickDismissSearchScopePill: f,
						onFocusSearchBar: h,
						onFormSubmit: m,
						onKeyDown: E,
						searchQuery: S,
						showSearchScopePill: T,
						searchScopePill: D,
						searchOriginPage: w
					} = e;
					var j;
					const {
						promptBeforeClick: C,
						promptAfterClick: A
					} = Object(d.e)(b), [P, R] = Object(c.useState)();
					Object(c.useEffect)(() => {
						A && "home" === w && R(void 0)
					}, [A, w]);
					const N = Object(c.useMemo)(() => C && "home" === w && _.get(), [C, w]),
						L = "home" === w && (A && P || N),
						x = T && D ? r.fbt._("Search within {subredditName}", [r.fbt._param("subredditName", D.title)], {
							hk: "2B6J3t"
						}) : r.fbt._("Search all of Reddit", null, {
							hk: "1Fi1f5"
						});
					return i.a.createElement("div", {
						className: Object(s.a)(g.a.searchBar, n && g.a.isOpen)
					}, i.a.createElement("form", {
						action: "/search/",
						autoComplete: "off",
						className: g.a.form,
						method: "get",
						onSubmit: m,
						onFocus: h,
						role: "search"
					}, i.a.createElement("label", {
						className: g.a.inputLabel,
						htmlFor: "header-search-bar"
					}, i.a.createElement("div", {
						"aria-hidden": !0,
						className: g.a.iconContainer
					}, i.a.createElement(u.a, {
						name: "search",
						className: g.a.icon
					})), i.a.createElement(l.a, {
						"aria-live": "assertive"
					}, x)), T && D && i.a.createElement(y.b, {
						onClickDismiss: function() {
							var e;
							null === (e = t.current) || void 0 === e || e.focus(), f()
						},
						content: D
					}), i.a.createElement("input", {
						className: g.a.input,
						defaultValue: S,
						id: I,
						name: "q",
						onChange: o()((function() {
							var e;
							a((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
						}), 200),
						onKeyDown: E,
						onClick: A ? () => {
							"home" === w && R(_.get())
						} : void 0,
						placeholder: L ? r.fbt._("{query}", [r.fbt._param("query", L)], {
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
						id: O,
						className: g.a.dismissButton,
						"data-testid": O,
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
				h = e => {
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
			var b = n("./src/reddit/components/SubredditIcon/index.tsx"),
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
				const a = Object(c.e)(m.fb);
				return o.a.createElement(d.a, {
					className: O.a.SearchScopePill,
					"data-testid": "search-scope-pill"
				}, o.a.createElement(h, {
					className: O.a.pillText,
					"data-testid": "search-scope-pill-text",
					variant: a ? r.NIGHT : r.DAY
				}, o.a.createElement(b.b, {
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
				method: s.ob.POST
			}), l = async (e, t, n) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.ob.POST
			}), u = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.ob.POST
			}), p = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.ob.POST
			}), f = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
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
				o = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				d = n("./src/reddit/constants/headers.ts"),
				l = n("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				u = n("./src/redditGQL/types.ts");
			const p = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				f = e => Object(a.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.ob.GET
				}),
				h = async (e, t) => Object(a.a)(Object(c.a)(t, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.ob.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), b = (e, t) => {
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
							customType: u.d.Direct
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
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === r.a.SELF || e.thumbnail.url === r.a.NSFW || e.media && Object(s.F)(e.media) || t)
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
				const h = [];
				if (t.isTypeaheadSuggestion) f = i(t);
				else {
					if (h.push(`${a.y}=${Object(s.b)(t.rawQuery||t.searchQuery)}`), f = `/${d}`, t.section !== o.c.trending && t.section !== o.c.recent || n && n.source && h.push(`source=${n.source}`), null == l ? void 0 : l.enabled) switch (l.type) {
						case r.dc.Subreddit:
							const e = l.payload;
							f = `${e.url}${d}`, h.push(`${a.z}=1`), h.push(`${a.I}=${e.isNSFW?"1":""}`);
							break;
						case r.dc.Multireddit:
							const t = l.payload;
							f = `${t.url}${d}`, h.push(`${a.z}=1`), h.push(`${a.I}=${t.isNSFW?"1":""}`), h.push(`${a.m}=1`);
							break;
						case r.dc.SyntaxScoped:
							f = `/${Object(c.a)(null===(p=l.payload)||void 0===p?void 0:p.title)}${d}`, h.push(`${a.z}=1`)
					} else t.subredditOrProfileRestrictedName && (f = `${t.subredditOrProfileRestrictedName}${d}`, h.push(`${a.z}=1`));
					u && h.push(`${a.l}=1`), (null == n ? void 0 : n.t) && n.t !== r.oc.ALL && h.push(`${a.K}=${n.t}`), (null == n ? void 0 : n.sort) && h.push(`${a.F}=${n.sort}`), (null == n ? void 0 : n.type) && (n.type.includes(r.ic.Posts) || h.push(`${a.L}=${n.type[0]}`))
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
				h = n("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const n = s.a.parse(t.endpoint, !0),
					{
						host: r,
						protocol: c
					} = n;
				if (`${c}//${r}` === a.a.gatewayUrl) {
					const r = {},
						s = e.getState();
					Object(h.mb)(s) && (r.allow_over18 = 1), Object(h.q)(s) && (r.gated_optin = 1), Object(h.pb)(s) && (r.quarantine_optin = 1), r.include = f(e.getState(), n, t), t.endpoint = Object(o.a)(t.endpoint, r)
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
				l = e => e.author !== r.H ? null : e.body === r.I ? i.c.User : e.body === r.Qb ? i.c.Moderator : null
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
				return Y
			})), n.d(t, "h", (function() {
				return K
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
				h = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/telemetry/index.ts");
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
					Object(b.a)(E(t)(e))
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
					Object(b.a)(C({
						...e,
						action: o.c.CLICK
					}))
				},
				D = e => {
					Object(b.a)(C({
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
						action: o.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				P = (e, t, n, r) => {
					Object(b.a)(O(e, t, n, r))
				},
				R = (e, t, n, r) => s => O(s, e, t, n, r),
				N = (e, t) => {
					Object(b.a)({
						...m(e, t),
						source: y,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				L = (e, t, n, r) => {
					Object(b.a)(x(t, n, r)(e))
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
					return e => Object(i.s)(e, ...t)
				},
				U = (e, t, n, r) => s => a => Object(i.k)({
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
					Object(b.a)(G(t, n, r)(e))
				},
				G = (e, t, n, r) => s => {
					const a = Object(u.c)(s, {
							postId: t
						}),
						c = a ? Object(h.b)(s, a) : void 0;
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
				Y = (e, t, n, s) => {
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
				K = (e, t) => n => ({
					...m(n, e),
					...t && Object(h.b)(n, t),
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
				return h
			})), n.d(t, "r", (function() {
				return b
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
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...a(t),
					scheduledPost: o(e)
				}),
				b = e => t => ({
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
				return b
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
			var f, h, b, y;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(f || (f = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(y || (y = {}));
			const m = e => h[y[e]],
				g = e => y[h[e]],
				v = e => b[h[e]],
				E = e => h[b[e]],
				_ = e => y[b[e]];
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

			function h(e) {
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
								data: h(n),
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
				return XT
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
						case o.a:
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
						case c.c:
							return {
								id: h.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
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
			const Y = {
				adsSeenCount: 0,
				totalPostsSeenCount: 0,
				sessionStartTime: ""
			};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case I.a:
						case q.a:
						case q.c:
						case q.d:
							return {
								...Y, sessionStartTime: (new Date).toISOString()
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
				he = n("./src/reddit/actions/pages/constants.ts"),
				be = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
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
					case be.c:
					case be.i:
					case be.e:
					case be.g:
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
					case he.f:
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
				Ye = n.n(Qe);
			const Ke = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const n = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${n}`
			};
			var $e = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : Ke(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : Ke(e.endsAt)), e),
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
					return Ye()({
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
						return Ye()({
							...e
						}, n)
					}
					case Ie.b: {
						const {
							awards: n
						} = t.payload, r = n.reduce((e, t) => (e[t.award.id] = tt(t.award), e), {});
						return Ye()({
							...e
						}, r)
					}
					case Ie.i: {
						const {
							award: n
						} = t.payload;
						return n && n.id ? e[n.id] ? Ye()({
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
					case he.f:
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
						}), Ye()({
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
						}), Ye()({
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
			const mt = {};
			var gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
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
					pending: gt
				});
			const Et = {};
			var _t = function() {
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
			const Ot = {};
			var It = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
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
				Yt = n("./src/reddit/actions/chat/init.ts");
			var Kt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yt.a:
							return !0;
						default:
							return e
					}
				},
				$t = n("./src/reddit/actions/chat/liveChatTooltipShowState.ts");
			const zt = n("./src/reddit/constants/chat.ts").b.NEVER_SHOWN;
			var Xt, Jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $t.a:
							return t.payload;
						default:
							return e
					}
				},
				Zt = (n("./src/chat/actions/message/unreadCount.ts"), n("./src/chat/endpoints/sendbird/index.ts"), n("./src/reddit/actions/tabBadging.ts"));
			n("./src/reddit/selectors/chat.ts"), n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Xt || (Xt = {}));
			const {
				REQUEST_FAILED: en,
				REQUEST_PENDING: tn,
				REQUEST_SUCCESS: nn
			} = Xt;
			Object(F.a)(en), Object(F.a)(tn), Object(F.a)(nn);
			G.pb;
			const rn = {
				apiError: null
			};
			var sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xt.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...rn,
							apiError: e
						}
					}
					case Xt.REQUEST_SUCCESS:
					case Xt.REQUEST_PENDING:
						return rn;
					default:
						return e
				}
			};
			var an = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xt.REQUEST_PENDING:
							return !0;
						case Xt.REQUEST_FAILED:
						case Xt.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				on = Object(J.c)({
					error: sn,
					pending: an
				});
			const cn = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var dn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xt.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				ln = Object(J.c)({
					api: on,
					count: dn
				}),
				un = Object(J.c)({
					isInited: Kt,
					unread: ln,
					liveChatTooltipShowState: Jt,
					activeUserCountByLiveChatId: Qt.a
				}),
				pn = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			var fn = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pn.a:
							return !1;
						case pn.b:
							return !0;
						default:
							return e
					}
				},
				hn = n("./src/reddit/actions/communityFlairs/constants.ts");
			const bn = {};
			var yn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bn,
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
				mn = n("./src/reddit/actions/connection/constants.ts");
			const gn = {
				showBanner: !1,
				online: !0
			};
			var vn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
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
				En = n("./src/lib/omitKey/index.ts"),
				_n = n("./src/reddit/actions/contentControls/constants.ts");
			const On = {};
			var In = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On,
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
						return Object(En.a)(e, n)
					}
					default:
						return e
				}
			};
			const Sn = {};
			var Tn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn,
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
					error: In,
					pending: Tn
				}),
				wn = Object(J.c)({
					fetch: Dn
				}),
				jn = n("./src/lib/safeGet/index.ts");
			const Cn = {};
			var An = function() {
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
							} = t.payload, s = Object(jn.a)(e, n);
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
				Pn = Object(J.c)({
					api: wn,
					models: An
				}),
				Rn = n("./src/reddit/actions/contentGate.ts"),
				Nn = n("./src/reddit/actions/preferences.ts");
			const Ln = {};
			var xn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rn.b: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(jn.a)(e, n)) {
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
					case Rn.c: {
						const {
							subredditDescription: n,
							subredditName: r,
							isContributorRequestsDisabled: s,
							isContributorRequestTimestamp: a,
							subredditId: o
						} = t.payload;
						if (r) {
							if (Object(jn.a)(e, r)) {
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
					case Rn.h: {
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
								...Object(jn.a)(e, n) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: r,
								quarantineMessage: s,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: o
							}
						} : e
					}
					case Rn.a: {
						const {
							interstitialWarningMessage: n,
							interstitialWarningMessageHtml: r,
							interstitialWarningMessageRTJson: s,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(jn.a)(e, a) || {},
								interstitialWarningMessage: n,
								interstitialWarningMessageHtml: r,
								interstitialWarningMessageRTJson: s
							}
						} : e
					}
					case Rn.l: {
						const {
							subredditName: n,
							banMessage: r
						} = t.payload;
						if (n) {
							if (Object(jn.a)(e, n)) {
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
					case Rn.m: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(jn.a)(e, n)) {
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
					case Rn.n: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(jn.a)(e, n)) {
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
					case Rn.d:
					case Rn.e:
					case Rn.f:
					case Rn.g: {
						const {
							profileName: n
						} = t.payload, r = G.qc + n.toLocaleLowerCase(), s = Object(jn.a)(e, r) || {}, a = {
							profileDeleted: t.type === Rn.e,
							profileDoesNotExist: t.type === Rn.f,
							profileSuspended: t.type === Rn.g,
							profileBlockedForLegalReason: t.type === Rn.d
						};
						return {
							...e,
							[r]: {
								...s,
								...a
							}
						}
					}
					case Nn.p:
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
			const kn = {};
			var Un = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kn,
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
				Mn = Object(J.c)({
					models: Un
				}),
				Bn = n("./src/reddit/actions/cooldownTime.ts");
			var Fn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bn.b:
					case Bn.c:
						return null;
					case Bn.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Gn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bn.b:
							return !0;
						case Bn.a:
						case Bn.c:
							return !1;
						default:
							return e
					}
				},
				qn = Object(J.c)({
					error: Fn,
					pending: Gn
				});
			var Hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bn.d: {
							const {
								expiresAt: n
							} = t.payload;
							return "number" == typeof n && n !== e ? n : e
						}
						default:
							return e
					}
				},
				Vn = Object(J.c)({
					api: qn,
					expiresAt: Hn
				}),
				Wn = n("./src/reddit/actions/postCollection/constants.ts");
			var Qn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
					case Wn.d:
					case Wn.c:
					case Wn.s:
					case Wn.r:
						return null;
					case Wn.b:
					case Wn.n:
						return t.payload;
					default:
						return e
				}
			};
			var Yn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wn.c:
						case Wn.r:
							return !0;
						case Wn.d:
						case Wn.b:
						case Wn.s:
						case Wn.n:
							return !1;
						default:
							return e
					}
				},
				Kn = Object(J.c)({
					error: Qn,
					pending: Yn
				}),
				$n = Object(J.c)({
					createOrUpdate: Kn
				}),
				zn = n("./src/reddit/actions/postDraft.ts");
			const Xn = {};
			var Jn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xn,
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
			const Zn = {};
			var er = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zn,
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
				tr = Object(J.c)({
					error: Jn,
					pending: er
				});
			var nr = function() {
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
			var rr = function() {
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
				sr = Object(J.c)({
					error: nr,
					pending: rr
				});
			const ar = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var or = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ar,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zn.l:
					case zn.j:
						return ar;
					case zn.i: {
						const e = t.payload;
						return {
							...ar,
							apiError: e
						}
					}
					case zn.m: {
						const e = t.payload;
						return {
							...ar,
							validationError: e
						}
					}
					case zn.k: {
						const e = t.payload;
						return {
							...ar,
							submitValidationError: e
						}
					}
					case zn.h:
						return {
							...ar, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var cr = function() {
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
				ir = Object(J.c)({
					error: or,
					pending: cr
				}),
				dr = Object(J.c)({
					deleteDraft: tr,
					listing: sr,
					save: ir
				}),
				lr = n("./src/reddit/actions/postCreation/constants.ts");
			const ur = {};
			var pr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ur,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.G: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case lr.p: {
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
				fr = Object(J.c)({
					pending: pr
				});
			var hr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.u:
					case lr.v:
					case lr.d:
					case lr.e:
					case lr.f:
					case lr.i:
					case lr.j:
					case lr.n:
					case lr.O:
						return null;
					case lr.t:
						return t.payload;
					default:
						return e
				}
			};
			var br = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.u:
							return !0;
						case lr.v:
						case lr.t:
							return !1;
						default:
							return e
					}
				},
				yr = Object(J.c)({
					error: hr,
					pending: br
				}),
				mr = Object(J.c)({
					converting: fr,
					mediaUpload: yr
				});
			const gr = {};
			var vr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gr,
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
			const Er = {};
			var _r = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Er,
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
			const Or = {};
			var Ir = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Or,
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
				Sr = Object(J.c)({
					error: vr,
					fetched: _r,
					pending: Ir
				}),
				Tr = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const Dr = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var wr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.P:
					case Tr.h:
					case Tr.k:
					case Tr.b:
					case Tr.d:
					case lr.w:
					case lr.c:
					case lr.d:
					case lr.e:
					case lr.f:
					case lr.i:
					case lr.j:
					case lr.n:
					case lr.O:
					case lr.E:
						return Dr;
					case lr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? Dr : e
					}
					case lr.o: {
						const e = t.payload;
						return {
							...Dr,
							apiError: e
						}
					}
					case lr.db: {
						const e = t.payload;
						return {
							...Dr,
							validationError: e
						}
					}
					case lr.K:
					case lr.J: {
						const e = t.payload;
						return {
							...Dr,
							submitValidationError: e
						}
					}
					case lr.a:
						return {
							...Dr, needsCaptcha: !0
						};
					case lr.y:
						return {
							...Dr, pollError: t.payload
						};
					default:
						return e
				}
			};
			var jr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.w:
							return !0;
						case lr.P:
						case Tr.h:
						case lr.o:
						case lr.db:
						case lr.J:
						case lr.K:
						case lr.y:
						case lr.a:
							return !1;
						default:
							return e
					}
				},
				Cr = Object(J.c)({
					error: wr,
					pending: jr
				});
			var Ar = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.x:
					case lr.H:
						return null;
					case lr.m:
						return t.payload;
					default:
						return e
				}
			};
			var Pr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.x:
							return !0;
						case lr.m:
						case lr.l:
							return !1;
						default:
							return e
					}
				},
				Rr = Object(J.c)({
					error: Ar,
					pending: Pr
				}),
				Nr = Object(J.c)({
					submit: Cr,
					update: Rr
				});
			var Lr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.O:
					case lr.M:
					case lr.N:
						return null;
					default:
						return e
				}
			};
			var xr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.N:
							return !0;
						case lr.M:
						case lr.O:
							return !1;
						default:
							return e
					}
				},
				kr = Object(J.c)({
					error: Lr,
					pending: xr
				}),
				Ur = Object(J.c)({
					change: kr
				}),
				Mr = Object(J.c)({
					collection: $n,
					draft: dr,
					editor: mr,
					page: Sr,
					post: Nr,
					subreddit: Ur
				}),
				Br = n("./node_modules/lodash/omit.js"),
				Fr = n.n(Br),
				Gr = n("./src/reddit/actions/pages/postDraft.ts");
			const qr = {};
			var Hr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zn.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || qr
					}
					case zn.c: {
						const n = e,
							{
								draftId: r
							} = t.payload;
						return Fr()(n, r)
					}
					case lr.P: {
						const {
							draftId: n
						} = t.payload;
						return n ? Fr()(e, n) : e
					}
					case Gr.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Vr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Wr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				Qr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var Yr = n("./src/reddit/models/PostDraft/index.ts");
			var Kr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.d:
							return t.payload || "";
						case lr.E:
							return "";
						case l.b: {
							if (Vr(t) !== G.Sb.POST_CREATION) return "";
							const n = Wr(t);
							return n && n.url ? n.url || "" : e
						}
						case zn.g: {
							const e = t.payload;
							return e.kind === Yr.b.Link && e.body || ""
						}
						case Tr.b:
						case Tr.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				$r = n("./src/reddit/models/PostCreationForm/index.ts"),
				zr = n("./src/reddit/models/ScheduledPost/index.ts");
			const Xr = e => e ? e.replace(/\+/g, " ") : "";
			var Jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.e:
						return t.payload || "";
					case lr.E:
					case lr.I:
						return "";
					case lr.Q:
						return t.payload.editorMode === $r.i.MARKDOWN ? t.payload.content || "" : e;
					case l.b: {
						if (Vr(t) !== G.Sb.POST_CREATION) return "";
						const n = Wr(t);
						return n && n.text ? Xr(n.text) : e
					}
					case zn.g: {
						const e = t.payload;
						return e.kind === Yr.b.Markdown && e.body || ""
					}
					case Tr.b:
					case Tr.n: {
						const e = t.payload;
						return e.contentType === zr.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Zr = {
				items: [],
				selectedKey: null
			};
			var es = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.f:
							return t.payload || Zr;
						case lr.E:
							return Zr;
						case l.b:
							return Vr(t) !== G.Sb.POST_CREATION ? Zr : e;
						case zn.g:
							return Zr;
						case Tr.b:
						case Tr.n:
							return Zr;
						default:
							return e
					}
				},
				ts = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				ns = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				rs = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const ss = ts.a.createInitial;
			var as = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ss(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case lr.E:
							return ts.a.createInitial();
						case lr.Q: {
							const n = t.payload;
							return n.editorMode === $r.i.RICH_TEXT && n.editorKey === $r.h.POST_CREATION ? ts.a.createInitial(n.content) : e
						}
						case l.b:
							return Vr(t) !== G.Sb.POST_CREATION ? ts.a.createInitial() : e;
						case zn.g: {
							const e = t.payload;
							return e.kind === Yr.b.RichText ? ts.a.createInitial(e.body) : ts.a.createInitial()
						}
						case Tr.b:
						case Tr.n: {
							const e = t.payload,
								n = Object(ns.c)(e.mediaAssets);
							return ts.a.createInitial(e.contentType === zr.a.RTJSON ? Object(rs.b)(e.body) : void 0, n || void 0)
						}
						default:
							return e
					}
				},
				os = Object(J.c)({
					link: Kr,
					markdown: Jr,
					media: es,
					rte: as
				});
			var cs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.b:
							return t.payload || null;
						case lr.E:
						case zn.g:
						case Tr.b:
						case Tr.n:
						case lr.O:
							return null;
						case l.b:
							return Vr(t) === G.Sb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				is = n("./src/reddit/selectors/scheduledPosts/index.ts");
			var ds = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.c:
						return t.payload || null;
					case Tr.b:
					case Tr.n: {
						const e = t.payload;
						return Object(is.n)({
							scheduledPost: e
						}) || null
					}
					case lr.E:
						return null;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION ? e : null;
					case zn.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var ls = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.q:
						return t.payload.type || null;
					case Tr.b:
					case Tr.n:
					case lr.i:
					case lr.E:
					case l.b:
						return null;
					default:
						return e
				}
			};
			var us = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.S:
						return t.payload || !1;
					case Tr.b:
					case Tr.n:
						return "CHAT" === t.payload.discussionType;
					case lr.E:
						return !1;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var ps = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case lr.E:
						return !1;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case Tr.b:
					case Tr.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.U:
						return t.payload || !1;
					case lr.E:
						return !1;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isNSFW || !1;
					case Tr.b:
					case Tr.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var hs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.V:
						return t.payload || !1;
					case lr.E:
						return !1;
					case lr.O: {
						const {
							name: n
						} = t.payload;
						return !!n && e
					}
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isOriginalContent || !1;
					case Tr.b:
					case Tr.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var bs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.W:
						return t.payload || !1;
					case Tr.b:
					case Tr.n:
						return !!t.payload.poll;
					case lr.E:
						return !1;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					default:
						return e
				}
			};
			var ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case lr.E:
						return !1;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case Tr.b:
					case Tr.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var ms = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tr.b:
					case Tr.n:
					case lr.E:
						return !1;
					case zn.n:
						return t.payload;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.X:
						return t.payload || !1;
					case lr.E:
						return !1;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case zn.g:
						return t.payload.isSpoiler || !1;
					case Tr.b:
					case Tr.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var vs = function() {
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
					case lr.i:
					case lr.q:
					case lr.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var Es = function() {
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
					case lr.i:
					case lr.q:
					case lr.E:
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
						case lr.N:
						case lr.O:
							return t.payload;
						case lr.M:
						case l.b:
							return null;
						default:
							return e
					}
				},
				Os = n("./src/reddit/actions/polls.ts");
			var Is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Os.a:
							return {
								...t.payload
							};
						case Tr.b:
						case Tr.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case i.h:
						case lr.E:
							return null;
						case l.b:
							return Vr(t) !== G.Sb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				Ss = n("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				Ts = n("./src/reddit/helpers/scheduledPosts/index.ts");
			var Ds = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r, s, a;
				switch (t.type) {
					case lr.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case lr.E:
					case zn.g:
					case lr.O:
						return null;
					case l.b:
						if (Vr(t) === G.Sb.POST_CREATION) {
							const o = null === (a = (null !== (s = null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.match.queryParams) && void 0 !== s ? s : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (o && Object(zr.n)(o)) {
								const t = Object(Ss.c)();
								return {
									...e,
									...t,
									frequencyOption: o,
									recurrenceInfo: {
										...Ss.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(Ss.b)(new Date(t.submitDate), o)
									}
								}
							}
							return e
						}
						return null;
					case Tr.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case Tr.b: {
						const e = t.payload;
						return {
							...Object(Ts.h)(e)
						}
					}
					default:
						return e
				}
			};
			var ws = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: n,
					payload: r
				} = t;
				switch (n) {
					case lr.Y:
						return r || !1;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case Tr.b:
					case Tr.n:
					case zn.g:
						return !1;
					default:
						return e
				}
			};
			var js = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.g:
						return t.payload || "";
					case l.b:
						return Vr(t) !== G.Sb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						return Vr(t) !== G.Sb.POST_CREATION ? null : e;
					case lr.E:
						return null;
					case Tr.b:
					case Tr.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var As = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.E:
						return !0;
					case lr.Z:
						return t.payload;
					case l.b:
						return Vr(t) !== G.Sb.POST_CREATION || e;
					case zn.g:
						return t.payload.sendReplies;
					case Tr.b:
					case Tr.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Ps = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case lr.E:
					case zn.g:
					case lr.O:
						return null;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION ? e : null;
					case Tr.b:
					case Tr.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Rs = G.bc.POST;
			var Ns = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.E:
						return Rs;
					case lr.r:
						return G.bc.CROSSPOST;
					case lr.i:
						return t.payload.submissionType || Rs;
					case l.b: {
						if (Vr(t) !== G.Sb.POST_CREATION) return Rs;
						const n = Wr(t);
						if (!n) return e;
						const {
							title: r = "",
							url: s,
							text: a = "",
							media: o = !1,
							selftext: c = !1,
							type: i = ""
						} = n, d = r && !a && !c;
						return o ? G.bc.MEDIA : void 0 !== s || d ? G.bc.LINK_ONLY : a || c ? G.bc.POST : i === G.Cb ? G.bc.POLL : e
					}
					case zn.g: {
						const e = t.payload;
						return Yr.a[e.kind]
					}
					case Tr.b:
					case Tr.n: {
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
					case lr.ab: {
						const {
							suggestedSort: e
						} = t.payload;
						return e || null
					}
					case lr.E:
					case zn.g:
					case lr.O:
						return null;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION ? e : null;
					case Tr.b:
					case Tr.n:
						return t.payload.suggestedCommentSort || null;
					default:
						return e
				}
			};
			const xs = {
				theme: n("./src/reddit/models/Talk/index.ts").a.PERIWINKLE,
				topics: [],
				isUpcoming: !1
			};
			var ks = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Us = n("./src/reddit/models/Poll/index.ts");
			const Ms = e => e ? e.replace(/\+/g, " ") : "",
				Bs = e => `Should ${e||"username"} become the top moderator?`,
				Fs = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.r:
						return t.payload.postTitle || "";
					case lr.j:
						return t.payload || "";
					case lr.D: {
						const {
							title: n
						} = t.payload;
						return e || (n || "")
					}
					case lr.E:
						return "";
					case l.b: {
						if (Vr(t) !== G.Sb.POST_CREATION) return "";
						const n = Wr(t);
						return n && n.title ? Ms(n.title) : e
					}
					case zn.g:
						return t.payload.title;
					case lr.q: {
						const {
							oldType: n,
							type: r
						} = t.payload;
						return r === Us.a.ReplaceTopMod ? Bs("") : r === Us.a.Spinoff ? Fs("") : n === Us.a.ReplaceTopMod || n === Us.a.Spinoff ? "" : e
					}
					case i.c: {
						const {
							username: e
						} = t.payload;
						return Bs(e)
					}
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return Fs(e)
					}
					case lr.i: {
						const {
							extra: n
						} = t.payload;
						return !n || n.govType !== Us.a.ReplaceTopMod && n.govType !== Us.a.Spinoff ? e : ""
					}
					case Tr.b:
					case Tr.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const qs = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Hs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.cb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Vs = Object(J.c)({
					body: os,
					eventSchedule: cs,
					flair: ds,
					govType: ls,
					isChatPost: us,
					isContestMode: ps,
					isNSFW: fs,
					isOC: hs,
					isPostAsMetaMod: ys,
					isPoll: bs,
					isPublicLink: ms,
					isSpoiler: gs,
					newSubreddit: vs,
					newTopMod: Es,
					nextSubreddit: _s,
					polls: Is,
					postSchedule: Ds,
					postToTwitter: ws,
					recaptcha: js,
					scheduledPostId: Cs,
					sendReplies: As,
					stickyPosition: Ps,
					submissionType: Ns,
					suggestedSort: Ls,
					title: Gs,
					tournament: Hs,
					talk: ks
				});
			const Ws = e => e ? e.replace(/\+/g, " ") : "";
			var Qs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b: {
						if (Vr(t) !== G.Sb.POST_CREATION) return null;
						const n = Wr(t);
						return n && n.text && Ws(n.text) ? $r.i.MARKDOWN : e
					}
					case lr.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case lr.I:
						return null;
					case lr.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Tr.b:
					case Tr.n:
						return t.payload.contentType === zr.a.RTJSON ? $r.i.RICH_TEXT : $r.i.MARKDOWN;
					default:
						return e
				}
			};
			const Ys = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				Ks = (e, t) => {
					const n = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object($r.w)(t)
					});
					if (!n.length) return e;
					const r = n.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return {
						...e,
						...r
					}
				};
			var $s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ys,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.c:
					case lr.d:
					case lr.e:
						return e[G.Bb.BODY] ? {
							...e,
							[G.Bb.BODY]: []
						} : e;
					case lr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return e[G.Bb.BODY] && n ? {
							...e,
							[G.Bb.BODY]: []
						} : e
					}
					case lr.j:
						return e[G.Bb.TITLE] ? {
							...e,
							[G.Bb.TITLE]: []
						} : e;
					case lr.L: {
						const n = t.payload;
						return {
							...e,
							[n]: []
						}
					}
					case lr.n: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: []
						} : Ys
					}
					case lr.K:
					case lr.J: {
						const n = t.payload;
						return Ks(e, n)
					}
					case l.b:
						return Vr(t) !== G.Sb.POST_CREATION ? Ys : e;
					default:
						return e
				}
			};
			var zs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.b:
					case lr.c:
					case lr.d:
					case lr.e:
					case lr.f:
					case lr.j:
					case lr.i:
					case lr.U:
					case lr.V:
					case lr.X:
					case zn.n:
					case lr.Z:
					case lr.ab:
						return !0;
					case lr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					case lr.P:
					case Tr.h:
						return !1;
					case lr.R:
						return t.payload;
					case l.b:
						return Vr(t) === G.Sb.POST_CREATION && e;
					case lr.E:
					case zn.l:
					case zn.g:
						return !1;
					default:
						return e
				}
			};
			const Xs = $r.r.Post;
			var Js = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.w:
							return $r.r.Post;
						case lr.F:
							return t.payload;
						case zn.j:
							return $r.r.Draft;
						case l.b:
							return Vr(t) !== G.Sb.POST_CREATION ? Xs : e;
						default:
							return e
					}
				},
				Zs = Object(J.c)({
					editorMode: Qs,
					fieldValidation: $s,
					isChanged: zs,
					submitMode: Js
				});
			var ea = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.H:
						return t.payload.editorMode === $r.i.MARKDOWN ? t.payload.postContent || "" : e;
					case lr.I:
						return "";
					case lr.Q:
						return t.payload.editorMode === $r.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const ta = ts.a.createInitial;
			var na = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ta(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.I:
							return ts.a.createInitial();
						case lr.H: {
							const n = t.payload;
							return n.editorMode === $r.i.RICH_TEXT && "object" == typeof n.postContent ? ts.a.createInitial(n.postContent, n.mediaMetadata) : e
						}
						case lr.Q: {
							const n = t.payload;
							return n.editorMode === $r.i.RICH_TEXT && n.editorKey === $r.h.POST_EDITING ? ts.a.createInitial(n.content) : e
						}
						default:
							return e
					}
				},
				ra = Object(J.c)({
					markdown: ea,
					rte: na
				});
			var sa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case lr.I:
							return null;
						default:
							return e
					}
				},
				aa = Object(J.c)({
					draft: ra,
					postId: sa
				});
			var oa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.C:
					case lr.B:
						return !1;
					case lr.z:
						return !0;
					default:
						return e
				}
			};
			var ca = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.z:
						case lr.B:
							return !1;
						case lr.C:
							return !0;
						default:
							return e
					}
				},
				ia = Object(J.c)({
					error: oa,
					pending: ca
				});
			var da = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case lr.j:
					case lr.d:
					case lr.e:
					case lr.i:
					case lr.r:
					case zn.g:
						return !0;
					case lr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					default:
						return e
				}
			};
			const la = {};
			var ua = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : la,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lr.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const pa = [];
			var fa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lr.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ha = Object(J.c)({
					api: ia,
					isInputChanged: da,
					model: ua,
					order: fa
				}),
				ba = Object(J.c)({
					api: Mr,
					drafts: Hr,
					formData: Vs,
					formState: Zs,
					postEditing: aa,
					subredditRec: ha
				}),
				ya = n("./src/reddit/actions/dashboard/constants.ts");
			const ma = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var ga = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ma,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ya.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ya.d: {
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
					case ya.c: {
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
			var va = function() {
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
			var Ea = function() {
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
			var _a = function() {
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
				Oa = Object(J.c)({
					error: va,
					loaded: Ea,
					pending: _a
				}),
				Ia = Object(J.c)({
					list: Oa
				}),
				Sa = n("./node_modules/lodash/isEmpty.js"),
				Ta = n.n(Sa);
			const Da = {};
			var wa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Da,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							return Ta()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				ja = n("./node_modules/lodash/forOwn.js"),
				Ca = n.n(ja),
				Aa = n("./src/reddit/helpers/name/index.ts");
			const Pa = {};
			var Ra = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							if (Ta()(n)) return e;
							const r = {};
							return Ca()(n, e => {
								r[Object(Aa.i)(e.unitName)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Na = Object(J.c)({
					api: Ia,
					models: wa,
					nameToId: Ra
				}),
				La = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const xa = [];
			var ka = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xa,
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
				Ua = n("./src/reddit/actions/economics/banners/constants.ts");
			const Ma = {
				dismissedBanners: {}
			};
			var Ba = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ma,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ua.c: {
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
						case Ua.d: {
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
						case Ua.a:
						case Ua.b: {
							const {
								subredditId: n,
								bannerType: r
							} = t.payload, s = e.dismissedBanners[n] || {}, a = t.type === Ua.a;
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
				Fa = n("./src/reddit/models/Badge/managementPage.ts");
			const Ga = {
				badgeType: Fa.a.Cosmetic,
				view: Fa.c.Gallery
			};
			var qa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ga,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.c: {
						const {
							badge: n,
							initialView: r
						} = t.payload;
						return n || r ? {
							...e,
							badgeType: n ? Object(Fa.d)(n.placement) : e.badgeType,
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
						return Ga;
					default:
						return e
				}
			};
			var Ha = function() {
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
				Va = n("./src/reddit/actions/economics/powerups/constants.ts");

			function Wa(e, t) {
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

			function Qa(e) {
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
						emotes: s.map(e => Wa(e, n))
					}
				}), t
			}
			const Ya = {};

			function Ka(e, t, n) {
				if (!e[t]) return e;
				const r = e[t].findIndex(e => e.title === t);
				return -1 === r ? e : {
					...e,
					[t]: e[t].map((e, s) => s !== r ? e : {
						title: e.title,
						emotes: {
							...e.emotes,
							[n.name]: Wa(n, t)
						}
					})
				}
			}
			var $a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ya,
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
								[r]: e[r] ? O()([...e[r], ...t], e => {
									let {
										title: t
									} = e;
									return t
								}) : t
							}
						}
						return e
					}
					case Va.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload;
						return Ka(e, n, r)
					}
					default:
						return e
				}
			};
			const za = {};
			var Xa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : za,
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
				Ja = n("./src/reddit/actions/economics/me/constants.ts");
			const Za = {
				fetched: !1,
				data: {}
			};
			var eo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Za,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ja.a:
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
				to = n("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const no = {
				fetched: !1,
				data: null
			};
			var ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : no,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ja.b:
							return {
								fetched: !0, data: e.data
							};
						case Ja.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				so = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				ao = Object(J.c)({
					banners: Ba,
					currentBadgeManagementScreen: qa,
					currentModalArgs: Ha,
					emotes: $a,
					gifs: Xa,
					me: eo,
					paymentSystems: to.b,
					pointsCopy: ro,
					subredditPremium: so.b
				}),
				oo = n("./src/reddit/actions/emailVerificationTooltip.ts");
			const co = {
				isShowing: !1
			};
			var io = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : co,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oo.a:
							return {
								...e, isShowing: !e.isShowing
							};
						default:
							return e
					}
				},
				lo = n("./src/reddit/actions/emoji.ts");
			const uo = {};
			var po = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lo.g: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case lo.f:
						case lo.e: {
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
				fo = Object(J.c)({
					pending: po
				}),
				ho = Object(J.c)({
					list: fo
				});
			const bo = {};
			var yo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lo.e:
						case lo.b:
							return e;
						case lo.f: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case lo.c: {
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
						case lo.h: {
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
						case lo.d: {
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
				mo = Object(J.c)({
					api: ho,
					models: yo
				}),
				go = n("./src/reddit/actions/experiments.ts");
			const vo = /^experiment_(.*)$/i,
				Eo = e => {
					const t = e.match(vo);
					if (null !== t) return t[1]
				},
				_o = {};
			var Oo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Wr(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = Eo(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return Ta()(r) ? e : {
								...e,
								...r
							}
						}
						case go.b: {
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
				Io = n("./src/reddit/actions/externalAccount.ts");
			const So = {};
			var To = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : So,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Io.e:
					case Io.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Io.d: {
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
			const Do = {};
			var wo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Do,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Io.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Io.f:
						case Io.d: {
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
				jo = Object(J.c)({
					error: To,
					pending: wo
				});
			const Co = {};
			var Ao = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Co,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Io.l:
					case Io.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Io.j: {
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
			const Po = {};
			var Ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Po,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Io.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Io.c:
						case Io.a: {
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
				No = Object(J.c)({
					error: Ao,
					pending: Ro
				});
			const Lo = {};
			var xo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Io.i:
					case Io.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Io.g: {
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
			const ko = {};
			var Uo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ko,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Io.h: {
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
			const Mo = {};
			var Bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Io.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Io.h:
						case Io.g: {
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
				Fo = Object(J.c)({
					error: xo,
					fetched: Uo,
					pending: Bo
				});
			const Go = {};
			var qo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Go,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Io.l:
					case Io.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Io.j: {
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
			const Ho = {};
			var Vo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ho,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Io.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Io.k:
						case Io.j: {
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
				Wo = Object(J.c)({
					error: qo,
					pending: Vo
				}),
				Qo = Object(J.c)({
					connect: jo,
					disconnect: No,
					user: Wo,
					subreddit: Fo
				});
			const Yo = {};
			var Ko = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Io.h: {
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
			const $o = {};
			var zo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Io.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case Io.c: {
							const {
								username: n,
								provider: r
							} = t.payload, s = e[n];
							return s && s[r] ? {
								...e,
								[n]: Fr()(s, r)
							} : e
						}
						default:
							return e
					}
				},
				Xo = Object(J.c)({
					api: Qo,
					user: zo,
					subreddit: Ko
				}),
				Jo = n("./src/reddit/featureFlags/index.ts");
			const Zo = new Set(["0", "disabled", "false", "off", ""]);
			var ec = e => !Zo.has(e.toLowerCase());
			const tc = Jo.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				nc = Jo.a.reduce((e, t) => (e[t] = null, e), {});
			var rc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const n = Wr(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(Jo.g)(e);
									if (r) {
										const s = tc[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || ec(r);
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
						case Jo.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case Jo.c: {
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
				sc = Object(J.c)({
					overrides: rc
				}),
				ac = n("./src/reddit/actions/firstPost/constants.ts");
			const oc = {
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
			var cc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ac.e:
							return {
								...e, firstFormEditEvent: t.payload
							};
						case ac.d:
							return {
								...e, postTitle: t.payload
							};
						case ac.b:
							return {
								...e, postBody: t.payload
							};
						case ac.c:
							return {
								...e, subreddit: t.payload
							};
						case ac.a:
							return {
								...e, currentPromptIndex: t.payload
							};
						case ac.f:
							return {
								...e, selectedPredicatesInt: t.payload
							};
						case lr.P:
							return {
								...e, postSubmitted: !0
							};
						case lr.db:
						case lr.J:
							return {
								...e, postSubmitted: !1
							};
						default:
							return e
					}
				},
				ic = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const dc = {
				focusedVerticalGqlError: null
			};
			var lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ic.g:
					case ic.f:
					case ic.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case ic.d:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const uc = {
				focusedVerticalGqlPending: !1
			};
			var pc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ic.g:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case ic.d:
						case ic.f:
						case ic.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				fc = Object(J.c)({
					error: lc,
					pending: pc
				});
			var hc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ic.f:
					case ic.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const bc = {
				dismissed: !0
			};
			var yc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ic.i:
						return {
							dismissed: !1
						};
					case ic.h:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var mc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ic.f:
					case ic.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var gc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ic.f:
					case ic.c:
					case ic.e:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var vc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ic.f:
						case ic.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Ec = Object(J.c)({
					api: fc,
					components: yc,
					interactedSubredditIds: mc,
					recommendedSubredditIds: vc,
					category: hc,
					lastLoadedEnv: gc
				});
			Object(F.a)("FONTS_FONT_FILES_PARSED");
			const _c = [];
			var Oc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Ic = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.b:
						return t.payload;
					default:
						return e
				}
			};
			var Sc = function() {
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
			var Tc = function() {
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
			var Dc = function() {
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
				wc = Object(J.c)({
					error: Sc,
					pending: Tc,
					showLoader: Dc
				});
			var jc = function() {
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
			var Cc = function() {
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
			var Ac = function() {
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
			var Pc = function() {
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
			var Rc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.H:
						return !0;
					default:
						return e
				}
			};
			var Nc = function() {
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
			const Lc = ze.o;
			var xc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ie.eb:
							return t.payload;
						case Ie.I: {
							const {
								award: e
							} = t.payload;
							return e || Lc
						}
						default:
							return e
					}
				},
				kc = Object(J.c)({
					api: wc,
					correlationId: jc,
					gildModalThingId: Ac,
					isAnonymous: Pc,
					isIframed: Rc,
					message: Nc,
					gildedThing: Cc,
					selectedAward: xc
				});
			var Uc = function() {
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
			var Mc = function() {
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
				Bc = Object(J.c)({
					error: Uc,
					pending: Mc
				});
			var Fc = function() {
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
				Gc = Object(J.c)({
					api: Bc,
					givePremiumModalAccountName: Fc
				}),
				qc = n("./src/reddit/actions/header.ts"),
				Hc = n("./src/reddit/actions/overlayEvents.ts");
			var Vc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qc.a:
							return !1;
						case qc.b:
							return !0;
						case qc.c:
							return !e;
						case Hc.b:
							return !1;
						default:
							return e
					}
				},
				Wc = Object(J.c)({
					isSubscriptionsDropdownOpen: Vc
				});
			var Qc = function() {
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
				Yc = n("./src/reddit/actions/imageUploads.ts");
			const Kc = {};
			var $c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yc.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case Yc.c:
					case Yc.e:
					case Yc.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case Yc.a: {
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
			var zc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case D.c: {
						const r = t.payload;
						return Ta()(r) ? e : (null === (n = r.notifications) || void 0 === n ? void 0 : n.position) || null
					}
					default:
						return e
				}
			};
			const Xc = {
				notifications: null,
				id: null
			};
			var Jc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r;
					switch (t.type) {
						case D.c: {
							const s = t.payload;
							return Ta()(s) ? e : {
								...e,
								notifications: (null === (n = s.notifications) || void 0 === n ? void 0 : n.notifications) || null,
								id: null === (r = s.notifications) || void 0 === r ? void 0 : r.id
							}
						}
						default:
							return e
					}
				},
				Zc = n("./src/reddit/actions/inAppNotifications/constants.ts");
			var ei = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zc.a:
							return !0;
						default:
							return e
					}
				},
				ti = Object(J.c)({
					inFeedPosition: zc,
					notifications: Jc,
					shouldHideInAppNotifications: ei
				}),
				ni = n("./src/reddit/actions/interceptedAction.ts");
			var ri = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ni.a:
							return t.payload;
						case ni.b:
							return null;
						default:
							return e
					}
				},
				si = n("./src/reddit/actions/changeUsername.ts");
			var ai = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case si.CHANGE_USERNAME_TOOLTIP_CLOSED:
							return !1;
						case si.CHANGE_USERNAME_TOOLTIP_OPENED:
							return !0;
						default:
							return e
					}
				},
				oi = n("./src/reddit/actions/moderatingSubreddits.ts");
			var ci = function() {
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
				ii = n("./src/reddit/actions/jsApi.ts");
			const di = [];
			var li = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : di,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ii.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				ui = n("./src/reddit/actions/langSite/index.ts");
			const pi = {
				bannerClosedTime: 0
			};
			var fi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ui.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				hi = n("./src/reddit/actions/leaderboard/constants.ts");
			const bi = {};
			var yi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hi.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case hi.b:
					case hi.c: {
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
			var gi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hi.a:
						case hi.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case hi.b: {
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
				vi = Object(J.c)({
					error: yi,
					pending: gi
				});
			const Ei = {};
			var _i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ei,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hi.c: {
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
				Oi = Object(J.c)({
					api: vi,
					models: _i
				});
			var Ii = function() {
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
			const Si = {};
			var Ti = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Si,
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
			var wi = function() {
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
				ji = Object(J.c)({
					error: Ti,
					pending: wi
				});
			const Ci = {};
			var Ai = function() {
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
			const Pi = {};
			var Ri = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pi,
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
			const Ni = {};
			var Li = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ni,
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
							} : Object(En.a)(e, n)
						}
						default:
							return e
					}
				},
				xi = Object(J.c)({
					api: ji,
					identifiers: Ri,
					fetchedTokens: Ai,
					loadMore: Li
				});
			const ki = {};
			var Ui = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ki,
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
			const Mi = {};
			var Bi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mi,
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
				Fi = Object(J.c)({
					error: Ui,
					pending: Bi
				});
			const Gi = {};
			var qi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gi,
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
			const Hi = {};
			var Vi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hi,
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
			const Wi = {};
			var Qi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wi,
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
							} : Object(En.a)(e, n)
						}
						default:
							return e
					}
				},
				Yi = Object(J.c)({
					api: Fi,
					identifiers: Vi,
					fetchedTokens: qi,
					loadMore: Qi
				});
			const Ki = {};
			var $i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ki,
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
			var Xi = function() {
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
				Ji = Object(J.c)({
					error: $i,
					pending: Xi
				});
			const Zi = {};
			var ed = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zi,
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
			const td = {};
			var nd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : td,
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
			const rd = {};
			var sd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rd,
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
							} : Object(En.a)(e, n)
						}
						default:
							return e
					}
				},
				ad = Object(J.c)({
					api: Ji,
					identifiers: nd,
					fetchedTokens: ed,
					loadMore: sd
				});
			const od = {};
			var cd = function() {
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
			const id = {};
			var dd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : id,
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
				ld = Object(J.c)({
					error: cd,
					pending: dd
				});
			const ud = {};
			var pd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ud,
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
			const fd = {};
			var hd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fd,
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
			const bd = {};
			var yd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bd,
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
							} : Object(En.a)(e, n)
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
				md = Object(J.c)({
					api: ld,
					identifiers: hd,
					fetchedTokens: pd,
					loadMore: yd
				});
			const gd = {};
			var vd = n("./src/reddit/actions/pages/postSetPage/constants.ts");
			const Ed = {};
			var _d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ed,
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
					case vd.b:
					case vd.c:
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
					case j.q:
					case A.a:
					case H.h:
					case vd.a:
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
			const Od = {};
			var Id = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od,
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
						case vd.c:
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
						case vd.a:
						case vd.b:
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
							return -1 === r.indexOf(G.ic.Posts) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Sd = Object(J.c)({
					error: _d,
					pending: Id
				});
			const Td = {};
			var Dd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Td,
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
				wd = n("./src/reddit/actions/postList.ts"),
				jd = n("./node_modules/lodash/omitBy.js"),
				Cd = n.n(jd);

			function Ad(e, t) {
				return t = t.toLowerCase(), Cd()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const Pd = {};
			var Rd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wd.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case wd.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Fr()(e, [n]) : e
					}
					case k.SUBREDDIT_INVALIDATE_LISTING:
						return Ad(e, t.payload);
					default:
						return e
				}
			};
			const Nd = {};
			var Ld = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nd,
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
							return Ad(e, t.payload);
						default:
							return e
					}
				},
				xd = n("./src/reddit/actions/post.ts");
			const kd = {};
			var Ud = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.c:
						case D.d:
						case R.f:
						case N.c:
						case Q.PROFILE_POSTS_PENDING:
						case k.SUBREDDIT_PENDING:
						case vd.c:
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
						case vd.b:
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
						case xd.o: {
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
							return Ad(e, t.payload);
						default:
							return e
					}
				},
				Md = n("./src/lib/makeListingKey/index.ts");
			const Bd = {};
			var Fd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(Md.b)(n) ? {
							...e,
							[n]: {
								sort: r,
								hasChanged: !1
							}
						} : e
					}
					case Nn.a:
					case Nn.p: {
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
			const Gd = {};
			var qd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gd,
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
						} : Object(En.a)(e, n)
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
						} : Object(En.a)(e, n)
					}
					case k.SUBREDDIT_INVALIDATE_LISTING:
						return Ad(e, t.payload);
					default:
						return e
				}
			};
			const Hd = {};
			var Vd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hd,
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
				Wd = Object(J.c)({
					api: Sd,
					correlationIds: Dd,
					endMarkers: Rd,
					fetchedTokens: Ld,
					ids: Ud,
					listingSort: Fd,
					loadMore: qd,
					pageInfo: Vd,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gd,
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
					}))(G.ic.Posts, G.hc.Posts)
				}),
				Qd = Object(J.c)({
					activeKey: Ii,
					authorOrder: xi,
					commentOrder: Yi,
					communityOrder: ad,
					listingOrder: md,
					postOrder: Wd
				});
			var Yd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c: {
						const n = t.payload;
						return Ta()(n.announcements) ? e : n.announcements || null
					}
					default:
						return e
				}
			};
			var Kd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c: {
						const n = t.payload;
						return Ta()(n.featuredLiveThread) ? e : n.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var $d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.c:
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
				Xd = Object(J.c)({
					announcements: Yd,
					featured: Kd,
					isFrontpageLoaded: $d,
					shouldShowAnnouncements: zd
				}),
				Jd = n("./src/reddit/actions/media.ts");
			const Zd = {},
				el = {};
			var tl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jd.b: {
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
			const nl = {};
			var rl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jd.e: {
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
				sl = Object(J.c)({
					currentSlideIndex: tl,
					isGalleryTileLayout: rl
				});
			var al = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jd.c:
						return t.payload;
					default:
						return e
				}
			};
			var ol = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jd.d:
							return t.payload;
						default:
							return e
					}
				},
				cl = Object(J.c)({
					isMuted: al,
					volume: ol
				}),
				il = n("./src/reddit/actions/merchandisingUnitAnnouncements/constants.ts");
			const dl = [];
			var ll = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case D.c: {
							const r = t.payload;
							return Ta()(r.merchandisingUnitAnnouncements) ? e : null !== (n = r.merchandisingUnitAnnouncements) && void 0 !== n ? n : dl
						}
						case il.a: {
							const n = t.payload;
							return e.filter(e => e.feedElement.id !== n.id)
						}
						default:
							return e
					}
				},
				ul = n("./src/reddit/actions/meta.ts");
			const pl = {
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
			var fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ul.b:
							return t.payload;
						case ul.a:
							return {
								...e, ...t.payload
							};
						case ul.e:
							return {
								...e, locale: t.payload
							};
						case ul.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case ul.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case ul.d:
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
				hl = n("./src/reddit/actions/subredditModeration/constants.ts");
			const bl = {};
			var yl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case he.b:
					case he.f:
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
					case hl.kb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(En.a)(e, n)
					}
					case hl.db: {
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
			var gl = function() {
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
				vl = Object(J.c)({
					error: ml,
					pending: gl
				});
			const El = [];
			var _l = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : El,
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
				Ol = Object(J.c)({
					api: vl,
					names: _l
				}),
				Il = Object(J.c)({
					filteredSubreddits: Ol
				}),
				Sl = n("./src/reddit/actions/modMode.ts");
			var Tl = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sl.a:
						return t.payload.enabled;
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
			const jl = {};
			var Cl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jl,
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
				Al = Object(J.c)({
					error: wl,
					pending: Cl
				});
			const Pl = {};
			var Rl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pl,
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
				Nl = Object(J.c)({
					api: Al,
					models: Rl
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
			var xl = function() {
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
			var kl = function() {
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
				Ul = Object(J.c)({
					error: Ll,
					fetched: xl,
					pending: kl
				});
			var Ml = function() {
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
			var Bl = function() {
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
			var Fl = function() {
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
				Gl = Object(J.c)({
					error: Ml,
					fetched: Bl,
					pending: Fl
				});
			var ql = function() {
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
			var Hl = function() {
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
			var Vl = function() {
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
				Wl = Object(J.c)({
					error: ql,
					fetched: Hl,
					pending: Vl
				});
			var Ql = function() {
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
			var Yl = function() {
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
			var Kl = function() {
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
				$l = Object(J.c)({
					error: Ql,
					fetched: Yl,
					pending: Kl
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
			var Xl = function() {
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
			var Jl = function() {
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
				Zl = Object(J.c)({
					error: zl,
					fetched: Xl,
					pending: Jl
				});
			var eu = function() {
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
			var tu = function() {
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
				nu = Object(J.c)({
					fetched: eu,
					pending: tu
				});
			var ru = function() {
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
			var su = function() {
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
			var au = function() {
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
					error: ru,
					fetched: su,
					pending: au
				});
			var cu = function() {
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
			var iu = function() {
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
			var du = function() {
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
				lu = Object(J.c)({
					error: cu,
					fetched: iu,
					pending: du
				}),
				uu = Object(J.c)({
					addSubreddit: Ul,
					create: Gl,
					deleteMulti: Wl,
					duplicate: $l,
					edit: Zl,
					forUser: nu,
					recommendations: ou,
					removeSubreddit: lu
				}),
				pu = n("./node_modules/lodash/isEqual.js"),
				fu = n.n(pu),
				hu = n("./node_modules/lodash/union.js"),
				bu = n.n(hu);

			function yu(e, t, n) {
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
			var mu = n("./src/reddit/actions/profile/constants.ts");
			const gu = {};
			var vu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gu,
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
							}, o = {
								...n,
								...s
							};
							for (const t in r) {
								const n = r[t],
									s = e[t];
								a[t] = bu()(s, n).sort((e, t) => o[e].displayText.toLowerCase() > o[t].displayText.toLowerCase() ? 1 : -1)
							}
							return fu()(e, a) ? e : a
						}
						case j.g:
						case j.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = yu(s, r.url, (e, t) => e > t ? 1 : -1);
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
				Eu = n("./src/reddit/actions/subscription/constants.ts"),
				_u = n("./src/reddit/models/Multireddit/index.ts");
			const Ou = {};
			var Iu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ou,
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
							a && !Object(_u.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && fu()(e[s.url], s) || (n = {
								...n,
								[r]: s
							})
						}
						return Ta()(n) ? e : {
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
					case Eu.d: {
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
					case Eu.e: {
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
			const Su = {};
			var Tu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Su,
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
					api: uu,
					byUserId: vu,
					models: Iu,
					recommendations: Tu
				}),
				wu = n("./src/reddit/actions/notificationBanner.ts");
			var ju = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wu.b:
							return t.payload.notificationBannerId;
						case wu.a:
							return null;
						default:
							return e
					}
				},
				Cu = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var Au = function() {
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
			var Pu = function() {
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
				Ru = Object(J.c)({
					error: Au,
					pending: Pu
				}),
				Nu = n("./src/reddit/actions/inboxBanner/constants.ts"),
				Lu = n("./src/reddit/models/inboxBanner/index.ts");
			const xu = {
				banners: [],
				dismissedBanners: []
			};
			var ku = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nu.b:
						return {
							...e, banners: t.payload.reduce((e, t) => t.applicablePlatforms.find(e => e.platform === Lu.b.DESKTOP) ? [...e, t] : e, [])
						};
					case Nu.a:
						return {
							...e, dismissedBanners: [...e.dismissedBanners || [], t.payload]
						};
					default:
						return e
				}
			};
			var Uu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var Mu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const Bu = [];
			var Fu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bu,
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
			var Gu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				qu = Object(J.c)({
					api: Ru,
					banner: ku,
					earlierDividerIndex: Uu,
					notifications: Fu,
					pageInfo: Gu,
					markAllAsReadTimestamp: Mu
				}),
				Hu = n("./src/reddit/actions/nps.ts");
			const Vu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Wu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hu.c:
							return {
								...Vu, pending: !0
							};
						case Hu.a:
							return Vu;
						case Hu.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...Vu,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				Qu = n("./src/reddit/actions/accountGender/constants.ts"),
				Yu = n("./src/reddit/actions/onboarding/constants.ts");
			const Ku = {
				success: !1,
				failure: !1
			};
			var $u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ku,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qu.b:
						return {
							...Ku, success: !0
						};
					case Qu.c:
						return {
							...Ku, failure: !0
						};
					case Yu.a:
						return {
							...Ku
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
					case D.c:
					case Yu.c: {
						const e = t.payload;
						return (null == e ? void 0 : e.interestTopicRecommendations) && !Ta()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
					}
					default:
						return e
				}
			};
			var Xu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yu.b:
							return !0;
						default:
							return e
					}
				},
				Ju = Object(J.c)({
					genderUpdateState: $u,
					interestTopicRecommendationsState: zu,
					shouldSkipOnboardingState: Xu
				});
			const Zu = e => {
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
			const ep = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = Zu(n);
					return t
				},
				tp = {};
			var np = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case go.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return ep(n)
					}
					default:
						return e
				}
			};
			var rp = Object(J.c)({
					byName: np,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case go.a: {
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
				sp = Object(J.c)({
					experiments: rp
				}),
				ap = n("./node_modules/history/esm/history.js"),
				op = n("./src/reddit/constants/history.ts");
			n("./src/reddit/helpers/isRobotIndexableMeta.ts");
			const cp = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				ip = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				dp = (e, t, n, r) => {
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
			var lp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cp,
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
						const i = Object(ap.e)(o),
							d = a ? dp(c, i, a, o) : ip(c, i);
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
						const a = Object(ap.e)(r),
							o = n ? dp(s, a, n, r) : ip(s, a);
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
					case he.b:
					case he.f:
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
									[op.b.FeedCorrelationId]: n
								}
							}
						} : e
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
			const fp = {};
			var hp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fp,
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
				bp = Object(J.c)({
					error: pp,
					pending: hp
				}),
				yp = Object(J.c)({
					voting: bp
				}),
				mp = n("./node_modules/lodash/mapValues.js"),
				gp = n.n(mp),
				vp = n("./src/reddit/reducers/posts/models/helpers.ts");
			const Ep = e => {
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
						isNSFW: o,
						isSpoiler: c,
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
							type: Us.a.GA,
							isNSFW: o,
							isPrediction: i,
							isSpoiler: c,
							totalStakeAmount: u || 0,
							tournamentId: f,
							userSelection: h,
							userWonAmount: b,
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
						type: Us.a.GA,
						isPrediction: i,
						userSelection: h
					}
				},
				Op = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Ip = n("./src/reddit/models/Prediction/index.ts");

			function Sp(e, t) {
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
			const Tp = {};
			var Dp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tp,
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
						const r = gp()(t.payload.posts, Object(vp.i)([vp.q])),
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
									s[t.id] = Sp(t, {
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
						return e[n] && Object(Ip.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(Op.b)(r)
							}
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
							[Us.b.ByVoters]: n, pollId: r
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
										[Us.b.ByVoters]: s,
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
							const s = Ep(r[t].pollData);
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
			var Ap = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								[Us.b.ByVotingPower]: n, pollId: r
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
						case he.b:
						case he.f: {
							const {
								governance: n
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t],
										{
											[Us.b.ByVotingPower]: s,
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
				Pp = Object(J.c)({
					byVoters: jp,
					byVotingPower: Ap
				});
			const Rp = {};
			var Np = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rp,
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
					api: yp,
					models: Dp,
					results: Pp,
					rewards: Np
				});
			const xp = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var kp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wn.i:
					case Wn.j:
						return {
							...e, reorderError: null
						};
					case Wn.h:
						return {
							...e, reorderError: t.payload
						};
					case Wn.l:
					case Wn.m:
						return {
							...e, updateDescriptionError: null
						};
					case Wn.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Wn.p:
					case Wn.q:
						return {
							...e, updateLayoutError: null
						};
					case Wn.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Up = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Mp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Up,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wn.i:
							return {
								...e, reorderPending: !0
							};
						case Wn.h:
						case Wn.j:
							return {
								...e, reorderPending: !1
							};
						case Wn.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Wn.k:
						case Wn.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Wn.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Wn.o:
						case Wn.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				Bp = Object(J.c)({
					error: kp,
					pending: Mp
				}),
				Fp = n("./src/reddit/helpers/path/index.ts");
			const Gp = {},
				qp = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Fp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var Hp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gp,
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
					case he.b:
					case he.f:
					case xd.j:
					case j.r:
					case D.g:
					case M.e:
					case "RECOMMENDED_POSTS_LOADED":
					case H.i:
					case Ze.e:
					case B.b:
					case ye.c:
					case Wn.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = qp(r);
							s = gp()(n, e)
						}
						return {
							...e,
							...s
						}
					}
					case Wn.d: {
						const {
							collection: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						const s = n.id;
						let a = n;
						if (r) {
							a = qp(r)(n)
						}
						return {
							...e,
							[s]: a
						}
					}
					case Wn.g: {
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
					case Wn.a: {
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
					case Wn.e: {
						const {
							collectionId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case Wn.s: {
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
					case Wn.j: {
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
					case Wn.m: {
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
					case Wn.q: {
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
			const Vp = {};
			var Wp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.PAGE_LOADED:
						case Wn.f: {
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
						case Wn.d: {
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
						case Wn.e: {
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
				Qp = Object(J.c)({
					models: Hp,
					subredditToIds: Wp,
					api: Bp
				}),
				Yp = n("./src/reddit/actions/postFlair.ts"),
				Kp = n("./src/reddit/models/Flair/index.ts");
			const $p = {},
				zp = {
					displaySettings: {
						isEnabled: !1,
						position: Kp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				Xp = (e, t) => {
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
			var Jp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $p,
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
						case he.b:
						case he.f:
						case D.c:
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
						case x.b:
						case x.e:
						case Q.MORE_POSTS_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ze.e:
						case Ze.e:
						case H.i:
							return Xp(e, t.payload.postFlair);
						case Yp.c: {
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
						case Yp.a: {
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
						case Yp.f: {
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
						case Yp.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = Fr()(a, r), i = o.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: i
								}
							}
						}
						case Yp.e:
						case Yp.d: {
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
							return Xp(e, n.postFlair)
						}
						default:
							return e
					}
				},
				Zp = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const ef = {
				pending: !1,
				items: {}
			};
			var tf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zp.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Zp.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var nf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xd.c:
							return t.payload;
						default:
							return e
					}
				},
				rf = n("./src/reddit/actions/embedAndImage.ts");
			const sf = {};
			var af = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rf.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case rf.a: {
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
					loadable: af
				});
			const cf = {};
			var df = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xd.d: {
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
			var lf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xd.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const uf = [];
			var pf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xd.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case xd.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case xd.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const ff = {};
			var hf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ff,
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
			var bf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xd.a:
							return t.payload;
						default:
							return e
					}
				},
				yf = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const mf = {};
			var gf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yf.a: {
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
			const vf = {};
			var Ef = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vf,
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
				Of = n("./src/reddit/actions/constants.ts"),
				If = n("./src/reddit/actions/flairManagement/constants.ts"),
				Sf = n("./src/reddit/actions/googleQASchema/constants.ts"),
				Tf = n("./src/reddit/actions/happeningNow/constants.ts"),
				Df = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				wf = n("./src/reddit/actions/subredditTopContent.ts"),
				jf = n("./src/reddit/helpers/isPost.ts"),
				Cf = n("./node_modules/lodash/pickBy.js"),
				Af = n.n(Cf);

			function Pf(e, t) {
				const n = Af()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !fu()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var Rf = n("./src/reddit/models/Gold/Gild/index.tsx"),
				Nf = n("./src/reddit/models/Media/index.ts"),
				Lf = n("./src/reddit/models/ModQueue/index.ts"),
				xf = n("./src/reddit/models/Post/index.ts"),
				kf = n("./src/reddit/models/Vote/index.ts"),
				Uf = n("./src/reddit/actions/subredditDuplicates.ts");
			const Mf = {};
			var Bf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						if (Vr(t) === (G.Sb.COMMENTS || G.Sb.DUPLICATES)) {
							const n = Wr(t),
								r = Qr(t);
							if (n && n.instanceId && r && r.partialPostId) {
								const t = n.instanceId,
									s = Object(xf.y)(r.partialPostId);
								if (e[s] && e[t]) return {
									...e,
									[s]: Object(vp.c)(e[s], e[t])
								}
							}
						}
						return e;
					case he.b:
					case he.f: {
						const n = Object(vp.h)(t.payload.meta);
						return {
							...e,
							...gp()(t.payload.posts, Object(vp.i)([n, vp.d, vp.o, vp.p, vp.q, Object(vp.a)(e), Object(vp.b)(e), Object(vp.l)(e), Object(vp.m)(e), Object(vp.k)(e), Object(vp.j)(e)]))
						}
					}
					case xd.j:
						return Pf(e, t.payload);
					case Uf.a:
						return Pf(e, t.payload.posts);
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
						const n = Object(vp.h)(t.payload.meta);
						return {
							...e,
							...gp()(t.payload.posts, Object(vp.i)([n, vp.d, vp.o, vp.p, vp.q, Object(vp.n)(e), Object(vp.l)(e)]))
						}
					}
					case V.w: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(vp.h)(t.meta);
							Object.assign(n, gp()(t.posts, Object(vp.i)([s, vp.d, vp.o, vp.p, Object(vp.n)(e), Object(vp.l)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case A.b: {
						const n = Object(vp.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							...gp()(t.payload.posts, Object(vp.i)([n, vp.d, vp.o, vp.p, Object(vp.n)(e), Object(vp.l)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case Xe.e:
					case Ze.e:
					case ye.c: {
						const n = Object(vp.h)(t.payload.meta),
							r = gp()(t.payload.posts, Object(vp.i)([n, vp.o, vp.d, vp.p]));
						return de()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case xd.k: {
						const n = t.payload;
						return de()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case Of.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(kf.c)(s, r)
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
					case xd.h: {
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
					case xd.i: {
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
							...n.reduce((e, t) => (e[t.post.id] = Object(vp.i)([vp.o])(Object(ns.f)(t.post)), e), {})
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
								...Object(Rf.a)(o, r, s),
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
							[r]: Object(Rf.b)(s, n)
						} : e
					}
					case hl.r: {
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
							...gp()(r, Object(vp.i)([vp.o, vp.p]))
						}
					}
					case _f.b:
					case fe.x: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, o = r.filter(e => Object(jf.a)(e)), c = Object(Lf.d)(e, n, o, s, a);
						return de()({
							...e
						}, c, (e, t) => ({
							...e,
							...t
						}))
					}
					case Wn.t: {
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
					case Wn.e: {
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
					case Wn.g: {
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
					case ic.f: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							...gp()(n.posts, Object(vp.i)([vp.o, vp.p])),
							...e
						} : e
					}
					case vd.b:
					case be.c:
					case be.i:
					case be.e:
					case be.g:
					case wf.b:
						return {
							...gp()(t.payload.posts, Object(vp.i)([vp.o, vp.p])), ...e
						};
					case xd.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(Nf.K)(s.media) ? {
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
					case If.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case If.b: {
						const n = t.payload;
						return Object(En.a)(e, n)
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
						return a[r] && (a[r] = Object(vp.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(vp.f)({
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
							[n]: Object(vp.r)(e[n], Object(Op.a)(r))
						}
					}
					case Df.a:
						return {
							...e
						};
					case Sf.b: {
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
					case Sf.a:
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
					case Tf.c: {
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
			var Ff = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xd.g:
							return t.payload;
						default:
							return e
					}
				},
				Gf = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const qf = {};
			var Hf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gf.a: {
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
			const Vf = [];
			var Wf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xd.l: {
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
				Qf = n("./node_modules/uuid/dist/esm-browser/v4.js");
			const Yf = Object(Qf.a)();
			var Kf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.PAGE_LOADED:
					case Tr.h:
					case Tr.a:
					case Tr.m:
					case Tr.f:
						return Object(Qf.a)();
					default:
						return e
				}
			};
			var $f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tr.d:
					case Tr.o:
					case Tr.k:
					case Tr.g:
					case Tr.a:
					case Tr.m:
					case Tr.f:
						return null;
					case Tr.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case Tr.e:
						return "error";
					default:
						return e
				}
			};
			var zf = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tr.g:
						return !0;
					case Tr.m:
					case Tr.a:
					case Tr.f:
					case Tr.e:
						return !1;
					default:
						return e
				}
			};
			var Xf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tr.k:
							return !0;
						case Tr.j:
						case Tr.e:
						case Tr.o:
						case Tr.d:
							return !1;
						default:
							return e
					}
				},
				Jf = Object(J.c)({
					creationToken: Kf,
					error: $f,
					pending: zf,
					pendingUpdate: Xf
				});
			const Zf = {};
			var eh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tr.c: {
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
			const th = {
				standalonePosts: {
					POSTS_LOADED: Tr.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: Tr.o
				},
				recurringPosts: {
					POSTS_LOADED: Tr.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: Tr.d
				}
			};

			function nh(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case th[e].POSTS_LOADED:
						case Tr.f: {
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
						case Tr.i:
						case Tr.l: {
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
						case Tr.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(n).reduce((t, r) => (r !== e && (t[r] = n[r]), t), {})
						}
						case th[e].MUTATION_SUCCEEDED: {
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
			const rh = {};

			function sh(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rh,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case th[e].POSTS_LOADED:
						case Tr.f: {
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
						case Tr.h: {
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
			var ah = n("./node_modules/lodash/uniq.js"),
				oh = n.n(ah);
			const ch = {};

			function ih(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ch,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case th[e].POSTS_LOADED:
						case Tr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[th[e].postIdsKey];
							return {
								...t,
								[s]: oh()([...t[s] || [], ...a])
							}
						}
						case Tr.i:
						case Tr.l: {
							const {
								subredditId: e,
								scheduledPostId: r
							} = n.payload, s = t[e] || [];
							return {
								...t,
								[e]: s.filter(e => e !== r)
							}
						}
						case Tr.h: {
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
			var dh = Object(J.c)({
					models: nh("recurringPosts"),
					pageInfo: sh("recurringPosts"),
					postOrder: ih("recurringPosts"),
					editModal: eh
				}),
				lh = Object(J.c)({
					models: nh("standalonePosts"),
					pageInfo: sh("standalonePosts"),
					postOrder: ih("standalonePosts")
				}),
				uh = Object(J.c)({
					api: Jf,
					standalonePosts: lh,
					recurringPosts: dh
				});
			var ph = function() {
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
			var fh = function() {
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
				hh = Object(J.c)({
					error: ph,
					pending: fh
				});
			const bh = [];
			var yh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bh,
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
							return bh;
						default:
							return e
					}
				},
				mh = Object(J.c)({
					api: hh,
					list: yh
				}),
				gh = n("./src/reddit/actions/video.ts");
			const vh = {};
			var Eh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.e: {
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
			var Oh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _h,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.a: {
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
			const Ih = {};
			var Sh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ih,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.b: {
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
			const Th = {};
			var Dh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Th,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.c: {
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
			const wh = {
				mutedInFeed: !0
			};
			var jh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.l:
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
					case gh.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case gh.d:
						return null;
					default:
						return e
				}
			};
			const Ah = {};
			var Ph = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ah,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case gh.e: {
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
			const Rh = {};
			var Nh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.h: {
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
					case gh.f: {
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
			var xh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.j: {
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
			const kh = {};
			var Uh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case gh.g: {
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
			const Mh = {};
			var Bh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gh.i: {
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
			const Fh = {};
			var Gh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gh.m: {
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
				qh = n("./src/reddit/constants/video.ts");
			const Hh = {};
			var Vh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gh.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < qh.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Wh = Object(J.c)({
					autoPlayed: Eh,
					buffering: Oh,
					consumed: Sh,
					continuousViewStartedAt: Dh,
					feed: jh,
					fullscreen: Ch,
					loadable: Ph,
					loadTimes: Nh,
					metadata: xh,
					paused: Uh,
					playing: Bh,
					started: Gh,
					time: Vh
				}),
				Qh = Object(J.c)({
					embedAndImage: of ,
					expanded: df,
					focus: lf,
					followed: pf,
					instances: hf,
					isAnimatingUpvote: bf,
					isTrackingCrossposts: gf,
					metaMap: Ef,
					models: Bf,
					modToMemberShare: Ff,
					crowdControl: nf,
					postLevelCrowdControl: Hf,
					recent: Wf,
					scheduledPosts: uh,
					topAwarded: mh,
					video: Wh,
					carousel: tf
				}),
				Yh = n("./src/lib/reducers/addAuthentication/index.ts");
			const Kh = {};
			var $h = Object(Yh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kh,
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
				}), Kh),
				zh = Object(J.c)({
					data: $h
				});
			const Xh = {};
			var Jh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xh,
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
			const Zh = {};
			var eb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zh,
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
				tb = Object(J.c)({
					error: Jh,
					pending: eb
				});
			const nb = {};
			var rb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nb,
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
			const sb = {};
			var ab = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sb,
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
					error: rb,
					pending: ab
				}),
				cb = Object(J.c)({
					fetch: tb,
					purchase: ob
				});
			var ib = function() {
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
			const db = {};
			var lb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : db,
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
				ub = Object(J.c)({
					api: cb,
					currentlyPurchasing: ib,
					models: lb
				});
			const pb = {};
			var fb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pb,
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
			const hb = {};
			var bb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hb,
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
				yb = Object(J.c)({
					error: fb,
					pending: bb
				});
			const mb = {};
			var gb = function() {
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
				vb = n("./src/reddit/actions/comment/list.ts");
			const Eb = {};
			var _b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vb.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case vb.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Fr()(e, n) : e
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
			const Sb = {};
			var Tb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sb,
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
							} : Object(En.a)(e, n)
						}
						default:
							return e
					}
				},
				Db = Object(J.c)({
					api: yb,
					endMarkers: _b,
					fetchedTokens: Ib,
					commentIds: gb,
					loadMore: Tb
				}),
				wb = n("./src/reddit/actions/pages/profileModSettings.ts");
			var jb = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wb.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Cb = Object(J.c)({
					pending: jb
				}),
				Ab = Object(J.c)({
					api: Cb
				});
			const Pb = {};
			var Rb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const Nb = {};
			var Lb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nb,
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
			const xb = {};
			var kb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xb,
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
				Ub = Object(J.c)({
					error: Lb,
					pending: kb
				});
			const Mb = {};
			var Bb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mb,
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
			const Fb = {};
			var Gb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fb,
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
							} : Fb
						}
						default:
							return e
					}
				},
				qb = Object(J.c)({
					api: Ub,
					ids: Bb,
					pageInfo: Gb
				}),
				Hb = n("./src/reddit/constants/posts.ts");
			const Vb = {};
			var Wb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb,
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
					case Eu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === Hb.a.PROFILE);
						return s.length ? s.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: r
						}, e), {
							...e
						}) : e
					}
					case Nn.n: {
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
			const Qb = {};
			var Yb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.b:
					case P.f:
					case D.g:
					case he.b:
					case he.f:
					case D.c:
					case W.b:
					case W.e:
					case be.c:
					case be.i:
					case be.e:
					case be.g:
					case x.b:
					case x.e:
					case Q.PROFILE_POSTS_LOADED:
					case B.b:
					case R.e:
					case R.h:
					case j.u:
					case mu.h:
					case A.b:
					case Ze.e:
					case H.i:
					case mu.o:
					case M.b:
					case M.e:
					case ye.c:
					case L.PAGE_LOADED:
					case zn.e:
					case Gr.PAGE_LOADED:
					case k.SUBREDDIT_LOADED:
					case N.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Eu.c:
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
					case mu.n:
					case mu.l: {
						const {
							profile: n
						} = t.payload;
						return n ? Object(ce.merge)(e, {
							[n.id]: n
						}) : e
					}
					case Nn.n: {
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
					case Nn.l:
					case Nn.k: {
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
			const Kb = {};
			var $b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kb,
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
					pending: $b
				});
			const Xb = {};
			var Jb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xb,
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
			const Zb = {};
			var ey = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zb,
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
				ty = Object(J.c)({
					api: zb,
					models: Jb,
					pageInfo: ey
				});
			const ny = {};
			var ry = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ny,
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
				sy = Object(J.c)({
					pending: ry
				});
			const ay = {};
			var oy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ay,
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
				cy = Object(J.c)({
					api: sy,
					pageInfo: oy
				}),
				iy = n("./src/reddit/actions/pinnedPost.ts");
			const dy = {};
			var ly = Object(Yh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iy.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case iy.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-G.hb)
						}
					}
					case iy.g: {
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
			}), dy);
			const uy = {};
			var py = Object(Yh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iy.a: {
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
			}), uy);
			const fy = {};
			var hy = Object(Yh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iy.c:
						case iy.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case iy.b:
						case iy.e:
						case iy.d:
						case iy.g: {
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
				}), fy),
				by = Object(J.c)({
					data: ly,
					initialData: py,
					pending: hy
				}),
				yy = n("./src/reddit/actions/trophyCase.ts");
			const my = {};
			var gy, vy, Ey = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : my,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yy.a: {
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
					about: Wb,
					models: Yb,
					moderated: ty,
					multireddits: cy,
					pinnedPosts: by,
					trophyCases: Ey
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(gy || (gy = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(vy || (vy = {}));
			var Oy, Iy, Sy;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Oy || (Oy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Iy || (Iy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Sy || (Sy = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Oy || (Oy = {}));
			Object(F.a)("PROMO__SHOW_PROMO"), Object(F.a)("PROMO__HIDE_PROMO");
			const Ty = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Dy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ty,
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
				wy = n("./src/reddit/actions/recap/constants.ts");
			const jy = {
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
			var Cy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wy.k:
							return {
								...e, shareCardWasOpened: !e.shareCardWasOpened
							};
						case wy.g:
							return {
								...e, isImageLoading: !1
							};
						case wy.h:
							return {
								...e, isImageLoading: !0
							};
						case wy.f:
							return {
								...e, isCardsLoading: !0
							};
						case wy.e: {
							const {
								cards: n
							} = t.payload;
							return {
								...e,
								cards: n,
								isCardsLoading: !1
							}
						}
						case wy.d: {
							const {
								error: n
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: n
							}
						}
						case wy.i:
							return {
								...e, ...jy
							};
						case wy.j: {
							const {
								index: n
							} = t.payload;
							return {
								...e,
								isImageLoading: !1,
								currentCardIndex: n
							}
						}
						case wy.c:
							return {
								...e, bannerSeen: t.payload
							};
						case wy.l:
							return {
								...e, shouldShowShareModal: !e.shouldShowShareModal
							};
						case wy.b:
							return {
								...e, shouldHideAbilityCardUsername: !e.shouldHideAbilityCardUsername
							};
						case wy.a:
							return {
								...e, shouldHideAbilityCardAvatar: !e.shouldHideAbilityCardAvatar
							};
						default:
							return e
					}
				},
				Ay = n("./src/reddit/actions/recentSubreddits/constants.ts");
			const Py = [],
				Ry = (e, t) => fu()(e, t) ? e : t;
			var Ny = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Py,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.c:
					case q.d:
						return Py;
					case Ay.d:
						return Ry(e, t.subreddits);
					case Ay.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, Ay.c)
					}
					case Ay.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Ay.c)
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
						case "RECOMMENDED_POSTS_LOADED":
							return {
								...e, ...t.payload
							};
						case "RECOMMENDED_POSTS_FAILED":
						default:
							return e
					}
				},
				ky = n("./src/reddit/actions/pages/report/constants.ts");
			var Uy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ky.a:
						return t.payload;
					default:
						return e
				}
			};
			var My = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ky.b:
						return t.payload;
					case ky.c:
					case ky.d:
						return !1;
					default:
						return e
				}
			};
			var By = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ky.d:
						return !0;
					case ky.c:
					case ky.b:
						return !1;
					default:
						return e
				}
			};
			var Fy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ky.c:
							return !0;
						case ky.b:
						case ky.d:
							return !1;
						default:
							return e
					}
				},
				Gy = Object(J.c)({
					error: My,
					pending: By,
					success: Fy
				}),
				qy = n("./src/reddit/actions/reportPageRules/constants.ts");
			const Hy = [];
			var Vy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qy.a:
							return t.payload;
						default:
							return e
					}
				},
				Wy = Object(J.c)({
					reportPageApi: Gy,
					reportPageRules: Vy,
					initialReason: Uy
				}),
				Qy = n("./src/reddit/actions/reportRules.ts");
			const Yy = {
				sitewideRules: []
			};
			var Ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qy.a:
						return {
							...e, sitewideRules: t.payload
						};
					default:
						return e
				}
			};
			Object(F.a)("REQUEST_HOST_SET");
			var $y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const zy = "RUN_TIME_ENV_VARS__IS_STAGING",
				Xy = (Object(F.a)(zy), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var Jy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zy:
						return {
							...e, staging: !0
						};
					default:
						return e
				}
			};
			const Zy = {};
			var em = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy,
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
				tm = n("./src/reddit/components/SearchDropdown/index.tsx"),
				nm = n("./src/reddit/controls/Search/SearchBar/index.tsx"),
				rm = n("./src/reddit/controls/Search/SearchScopePill/index.tsx");
			const sm = [rm.a, nm.b],
				am = [tm.b, tm.a];
			var om = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.g:
						return !0;
					case Hc.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = !!sm.find(e => {
							var t;
							return r && ((null === (t = r.parentElement) || void 0 === t ? void 0 : t.id) === e || r.id === e)
						});
						return !(!!!am.find(e => {
							var t;
							return r && (null === (t = document.getElementById(e)) || void 0 === t ? void 0 : t.contains(r))
						}) && !s) && e
					}
					case Ze.f:
					case Hc.a:
					case Hc.c:
						return !1;
					default:
						return e
				}
			};
			const cm = {},
				im = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Fp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				},
				dm = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				lm = e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				};
			var um = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.e:
						case ye.c: {
							const n = im(t.payload.meta),
								r = gp()(t.payload.searchPosts, lm([n, dm]));
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
				pm = Object(J.c)({
					models: um
				});
			var fm = function() {
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
			const hm = {
					enabled: !1
				},
				bm = Object.create(null);
			var ym = function() {
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
			const mm = {};
			var gm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mm,
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
				vm = Object(J.c)({
					idsByQuery: ym,
					models: gm
				});
			const Em = Object.create(null);
			var _m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Em,
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
			const Om = {};
			var Im = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Om,
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
				Sm = Object(J.c)({
					idsByQuery: _m,
					models: Im
				});
			const Tm = {};
			var Dm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tm,
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
				wm = Object(J.c)({
					appliedSort: em,
					isDropdownOpen: om,
					posts: pm,
					searchScope: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hm,
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
					searchQuery: fm,
					typeahead: vm,
					typeaheadByType: Sm,
					viewTreatment: Dm
				}),
				jm = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Cm = {};
			var Am = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cm,
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
						if (i === jm.c.Trending) {
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
			const Pm = {};
			var Rm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pm,
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
			const Nm = {};
			var Lm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nm,
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
							} : Nm
						}
						default:
							return e
					}
				},
				xm = Object(J.c)({
					headerContent: Am,
					models: Rm,
					order: Lm
				}),
				km = n("./src/reddit/actions/searchQueryId/index.tsx");
			const Um = {};
			Object(F.a)("SEO__CRAWLER_RECEIVED");
			var Mm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Bm = n("./src/reddit/actions/seo/linksModule.ts");
			const Fm = {};
			var Gm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Bm.c:
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
				qm = n("./src/reddit/actions/seo/topicLinks.ts");
			const Hm = {};
			var Vm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qm.a:
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
				Wm = Object(J.c)({
					crawler: Mm,
					linksModule: Gm,
					topicLinks: Vm
				}),
				Qm = n("./src/reddit/actions/shortcuts/constants.ts");
			var Ym = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qm.a:
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
						case Qm.b:
							return t.payload || null;
						default:
							return e
					}
				},
				$m = n("./src/reddit/constants/shortcuts.ts"),
				zm = n("./src/reddit/helpers/history/index.ts"),
				Xm = n("./src/reddit/routes/subreddit/index.ts");
			const Jm = $m.d.Global,
				Zm = (e, t) => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(zm.b)(op.b.IsOverlay) ? $m.d.Lightbox : $m.d.CommentPage;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return t === Xm.a ? $m.d.CommunityChat : $m.d.Listing;
						case "modQueuePages":
							return $m.d.Modqueue;
						default:
							return Jm
					}
				};
			var eg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return Zm(e, n.routeMatch.match.path)
							}
							return Jm;
						default:
							return e
					}
				},
				tg = Object(J.c)({
					activeCommentId: Ym,
					activePostId: Km,
					namespace: eg
				});
			var ng = function() {
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
				rg = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				sg = Object(J.c)({
					firstFetch: ng,
					models: rg.b
				}),
				ag = n("./src/reddit/models/StructuredStyles/index.ts");
			const og = {};
			var cg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : og,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.h:
						case f.b:
						case f.d:
							return t.payload.styles;
						case f.e:
							return og;
						case f.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case f.k: {
							const e = t.payload;
							return Object(ag.h)(e.styles)
						}
						default:
							return e
					}
				},
				ig = n("./src/reddit/actions/exportImportStyles.ts");
			var dg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ig.c:
					case ig.b:
						return null;
					case ig.a:
						return t.payload;
					default:
						return e
				}
			};
			var lg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ig.c:
							return !0;
						case ig.b:
						case ig.a:
							return !1;
						default:
							return e
					}
				},
				ug = Object(J.c)({
					error: dg,
					pending: lg
				}),
				pg = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				fg = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const hg = {};
			var bg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case he.b:
						case he.f:
						case ye.c:
						case Ze.e:
						case L.PAGE_LOADED:
						case Gr.PAGE_LOADED: {
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
						case pg.b: {
							const {
								flairId: n,
								template: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case pg.a: {
							const {
								flairId: n
							} = t.payload;
							return Object(En.a)(e, n)
						}
						case Yp.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(En.a)(e, n)
						}
						case f.k:
							return hg;
						case fg.b: {
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
				yg = Object(J.c)({
					models: bg
				});
			const mg = {};
			var gg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mg,
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
						return mg;
					default:
						return e
				}
			};
			var vg = function() {
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
			var Eg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.d:
						return t.payload.subredditId;
					case f.e:
						return null;
					case l.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Nn.g:
						return null;
					default:
						return e
				}
			};
			const _g = {};
			var Og = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _g,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case he.b:
						case he.f:
						case L.PAGE_LOADED:
						case Gr.PAGE_LOADED: {
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
								r = Object(ag.h)(n.styles);
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
						case Nn.l: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return Pf(e, {
									[n.subredditId]: {
										bannerBackgroundImage: n.imageUrl
									}
								})
							}
							return e
						}
						case Nn.k: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return Pf(e, {
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
				Ig = Object(J.c)({
					draft: cg,
					exportStyles: ug,
					flairTemplate: yg,
					imagePreviews: gg,
					isBladeEditorDirty: vg,
					isEditing: Eg,
					models: Og
				});
			Object(F.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var Sg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				Tg = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const Dg = {};
			var wg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tg.c:
					case Tg.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Tg.a: {
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
			const jg = {};
			var Cg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tg.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Tg.b:
						case Tg.a: {
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
				Ag = Object(J.c)({
					error: wg,
					pending: Cg
				});
			const Pg = {};
			var Rg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tg.b: {
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
				Ng = Object(J.c)({
					api: Ag,
					models: Rg
				}),
				Lg = n("./src/reddit/actions/category/constants.ts"),
				xg = n("./src/reddit/actions/subredditMention/constants.ts");
			const kg = {};
			var Ug = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xg.d:
					case he.b:
					case he.f:
					case ye.c:
					case k.SUBREDDIT_FAILED:
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case Gr.PAGE_LOADED:
					case W.b:
					case W.e:
					case x.b:
					case x.a:
					case x.e:
					case x.d:
					case Q.PROFILE_POSTS_LOADED:
					case M.b:
					case M.e:
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
					case lo.a: {
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
					case Eu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === Hb.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(ce.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case ic.f:
					case Lg.f:
					case V.l:
					case V.t:
					case lr.B: {
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
					case Tg.b: {
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
			const Mg = {};
			var Bg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mg,
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
			var Fg = function() {
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
				Gg = Object(J.c)({
					error: Bg,
					pending: Fg
				}),
				qg = n("./src/reddit/actions/subredditCreation.ts");
			const Hg = {
				apiError: null
			};
			var Vg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qg.b: {
						const {
							error: n
						} = t.payload;
						return {
							...e,
							apiError: n
						}
					}
					case qg.a:
					case qg.c:
					case qg.e:
						return Hg;
					default:
						return e
				}
			};
			var Wg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qg.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case qg.a:
					case qg.c:
					case qg.e:
						return null;
					default:
						return e
				}
			};
			var Qg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qg.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case qg.c:
					case qg.b:
						return null;
					default:
						return e
				}
			};
			var Yg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qg.c:
							return !0;
						case qg.e:
						case qg.b:
							return !1;
						default:
							return e
					}
				},
				Kg = Object(J.c)({
					error: Vg,
					lastCreatedSubredditId: Qg,
					initialCrosspost: Wg,
					pending: Yg
				});
			var $g = function() {
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
				zg = Object(J.c)({
					pending: $g
				});
			const Xg = {};
			var Jg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xg,
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
			const Zg = {};
			var ev = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zg,
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
				tv = Object(J.c)({
					error: Jg,
					pending: ev
				});
			const nv = {};
			var rv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nv,
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
				sv = Object(J.c)({
					pending: rv
				});
			var av = function() {
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
			var ov = function() {
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
				cv = Object(J.c)({
					error: av,
					pending: ov
				});
			var iv = function() {
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
			var dv = function() {
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
				lv = Object(J.c)({
					error: iv,
					pending: dv
				}),
				uv = n("./src/reddit/actions/subredditRules/constants.ts");
			var pv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case uv.c:
							return !0;
						case uv.a:
						case uv.b:
							return !1;
						default:
							return e
					}
				},
				fv = n("./src/reddit/actions/subredditSettings.ts");
			var hv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fv.e:
							return !0;
						case fv.f:
						case fv.d:
							return !1;
						default:
							return e
					}
				},
				bv = Object(J.c)({
					pending: hv
				});
			const yv = {};
			var mv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yv,
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
				gv = Object(J.c)({
					pending: mv
				}),
				vv = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const Ev = {};
			var _v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ev,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vv.c:
					case vv.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case vv.a: {
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
			const Ov = {};
			var Iv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ov,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vv.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case vv.b:
						case vv.a: {
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
				Sv = Object(J.c)({
					error: _v,
					pending: Iv
				});
			const Tv = {};
			var Dv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wf.c:
					case wf.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case wf.a: {
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
			const wv = {};
			var jv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wf.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case wf.b:
						case wf.a: {
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
				Cv = Object(J.c)({
					error: Dv,
					pending: jv
				}),
				Av = Object(J.c)({
					about: Gg,
					create: Kg,
					inlineEditing: zg,
					models: tv,
					onboarding: sv,
					productOffers: cv,
					rankings: lv,
					rules: pv,
					settings: bv,
					similar: gv,
					topContent: Cv,
					wiki: Sv
				}),
				Pv = n("./node_modules/lodash/isNil.js"),
				Rv = n.n(Pv);
			const Nv = {};
			var Lv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: Rv()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				xv = Object(J.c)({
					meta: Lv
				});
			const kv = {};
			var Uv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lg.f: {
						const {
							categoryId: n,
							subredditIds: r
						} = t.payload;
						return Ta()(r) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Mv = {
				pending: !1,
				items: {}
			};
			var Bv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zp.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Zp.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const Fv = {};
			var Gv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fv,
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
				qv = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const Hv = {};
			var Vv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qv.b:
						case qv.c:
						case qv.a: {
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
				Wv = n("./src/reddit/actions/subredditCrosspostable.ts");
			var Qv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wv.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Wv.c:
					case Wv.b:
						return null;
					default:
						return e
				}
			};
			var Yv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wv.c:
							return !0;
						case Wv.b:
						case Wv.a:
							return !1;
						default:
							return e
					}
				},
				Kv = Object(J.c)({
					errors: Qv,
					pending: Yv
				});
			const $v = {};
			var zv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $v,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wv.b: {
							const {
								subredditIds: n
							} = t.payload;
							return fu()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				Xv = Object(J.c)({
					api: Kv,
					ids: zv
				});
			const Jv = {};
			var Zv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Uf.a: {
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
							return Pf(o, {
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
				eE = Object(J.c)({
					models: Zv
				});
			const tE = {};
			var nE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE,
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
			const rE = {};
			var sE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rE,
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
			const aE = {};
			var oE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aE,
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
			const cE = {};
			var iE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cE,
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
				dE = Object(J.c)({
					assets: nE,
					communityRaw: sE,
					distributions: oE,
					releaseNotes: iE
				}),
				lE = n("./node_modules/lodash/isEqualWith.js"),
				uE = n.n(lE),
				pE = n("./src/lib/forceHttps/index.ts");
			const fE = {},
				hE = (e, t) => {
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
						return a.icon.url ? o.icon.url = Object(pE.a)(a.icon.url) : s && s.icon.url ? o.icon = s.icon : o.icon.url = "", s && s.allowChatPostCreation && (o.allowChatPostCreation = !0), s && s.devPlatformMetadata && (o.devPlatformMetadata = s.devPlatformMetadata), Object(ce.set)(n, r, o)
					}, e) : e
				},
				bE = (e, t) => {
					return !uE()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				yE = (e, t) => {
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
			var mE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eu.c:
						return hE(e, t.payload.subreddits || {});
					case P.b:
					case P.f:
					case Ay.b:
					case xg.d:
					case Lg.f:
					case D.g:
					case ic.f:
					case w.b:
					case C.b:
					case R.e:
					case R.h:
					case fe.n:
					case j.r:
					case j.u:
					case mu.h:
					case A.b:
					case he.b:
					case he.f:
					case D.c:
					case N.b:
					case W.b:
					case W.e:
					case be.c:
					case be.i:
					case be.e:
					case be.g:
					case x.b:
					case x.e:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case mu.e:
					case ye.c:
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case zn.e:
					case Gr.PAGE_LOADED:
					case mu.o:
					case M.b:
					case M.e:
					case B.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ze.e:
					case H.c:
					case H.f:
					case H.i:
					case V.a:
					case V.l:
					case V.t:
					case U.TOPIC_DATA_LOADED:
					case U.MORE_POSTS_LOADED:
					case lr.B:
						return yE(e, t.payload.subreddits || {});
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
						return yE(e, r)
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
						return yE(e, n)
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
					case fv.f: {
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
					case Tg.b: {
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
					case Tf.c: {
						const {
							subreddits: n
						} = t.payload;
						return yE(e, n)
					}
					default:
						return e
				}
			};
			var gE = function() {
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
			var vE = function() {
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
			var EE = function() {
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
				_E = Object(J.c)({
					errors: gE,
					fetched: vE,
					pending: EE
				});
			var OE = function() {
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
				IE = Object(J.c)({
					api: _E,
					order: OE
				});
			const SE = e => {
					var t, n, r, s;
					return (null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url) || (null === (n = null == e ? void 0 : e.styles) || void 0 === n ? void 0 : n.icon) || (null === (s = null === (r = null == e ? void 0 : e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === s ? void 0 : s.url)
				},
				TE = e => ({
					icon_img: SE(e),
					id: e.id,
					name: e.name
				}),
				DE = e => e.map(TE),
				wE = {
					ids: [],
					subreddits: []
				};
			var jE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.f:
						const n = DE(t.payload);
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
							subreddits: DE(a), ids: o
						};
					default:
						return e
				}
			};
			const CE = {};
			var AE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fv.a: {
						const n = t.payload;
						return Object(ce.merge)(e, n)
					}
					case fv.b: {
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
			const PE = {};
			var RE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PE,
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
			const NE = {};
			var LE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NE,
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
			const xE = {};
			var kE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xE,
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
			const UE = {},
				ME = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = Wa(n, t),
						o = [...s, a];
					return {
						...e,
						[t]: {
							...r,
							emotes: o
						}
					}
				},
				BE = (e, t, n) => {
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
			var FE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UE,
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
									...Qa(o),
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
									...Qa(null == n ? void 0 : n.mediaPacks)
								}
							}
						}
						case Va.b: {
							const {
								subredditId: n,
								emoji: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: ME(s, n, r)
							}
						}
						case Va.c: {
							const {
								subredditId: n,
								emojiId: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: BE(s, n, r)
							}
						}
						default:
							return e
					}
				},
				GE = n("./src/lib/makeProductOfferKey/index.ts");
			const qE = {};
			var HE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qE,
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
							const r = Object(GE.a)(t.type, n);
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
			const VE = {};
			var WE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VE,
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
				QE = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const YE = {},
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
						return QE.e.includes(t)
					})
				});
			var $E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YE,
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
			const zE = {};
			var XE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zE,
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
						return zE;
					default:
						return e
				}
			};
			const JE = {};
			var ZE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JE,
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
			const e_ = {};
			var t_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_,
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
				n_ = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const r_ = {};
			var s_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n_.a: {
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
			const a_ = {};
			var o_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case uv.b: {
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
					case uv.e: {
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
					case uv.f: {
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
					case uv.g:
					case uv.d: {
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
			const c_ = {};
			var i_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fv.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case fv.f: {
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
					case Nn.n: {
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
			const d_ = {};
			var l_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d_,
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
			const u_ = {};
			var p_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u_,
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
			const f_ = {};
			var h_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ic.f: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case wf.b: {
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
			var y_ = function() {
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
			const m_ = {};
			var g_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xg.d:
						case lr.B:
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
				v_ = Object(J.c)({
					about: Ug,
					api: Av,
					appliedFilters: xv,
					byCategory: Uv,
					carousel: Bv,
					communityInfo: Gv,
					countrySiteSettings: Vv,
					crosspostable: Xv,
					duplicates: eE,
					gov: dE,
					models: mE,
					moderated: IE,
					notificationSettings: AE,
					onboarding: RE,
					powerupRecentSupporters: LE,
					powerups: kE,
					powerupsEmojis: FE,
					productOffers: HE,
					products: WE,
					progressModule: $E,
					questions: XE,
					rankings: ZE,
					rankingsPageInfo: t_,
					related: s_,
					rules: o_,
					settings: i_,
					similar: l_,
					mutedSubreddits: jE,
					survey: p_,
					topContent: h_,
					trending: y_,
					unavailableModels: g_
				});
			const E_ = {};
			var __ = Object(Yh.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E_,
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
							return Ye()({
								...e
							}, s)
						}
						case xd.o: {
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
				}), E_),
				O_ = Object(J.c)({
					data: __
				}),
				I_ = n("./node_modules/lodash/values.js"),
				S_ = n.n(I_);
			const T_ = [];
			var D_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eu.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = yu(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case j.u: {
						const {
							multireddits: e
						} = t.payload;
						return S_()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Eu.e: {
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
			var w_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Eu.b:
					case Eu.c:
						return null;
					default:
						return e
				}
			};
			var j_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eu.b:
					case Eu.c:
						return !0;
					case Eu.a:
						return !1;
					default:
						return e
				}
			};
			var C_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eu.b:
							return !0;
						case Eu.c:
						case Eu.a:
							return !1;
						default:
							return e
					}
				},
				A_ = Object(J.c)({
					errors: w_,
					fetched: j_,
					pending: C_
				});
			const P_ = [];
			var R_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eu.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case Eu.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== Hb.a.PROFILE) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = yu(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case Eu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Hb.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const N_ = [];
			var L_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Eu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case Eu.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== Hb.a.SUBREDDIT) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = yu(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case Eu.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Hb.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const x_ = [],
				k_ = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var U_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.u: {
							const {
								multireddits: n
							} = t.payload, r = S_()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(k_(n));
							return fu()(e, r) ? e : r
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
								i = bu()(e, o).sort(k_(c));
							return fu()(e, i) ? e : i
						}
						case Eu.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(k_(s)) : e.filter(e => e !== r)
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
							return [...e, n.url].sort(k_(s))
						}
						default:
							return e
					}
				},
				M_ = n("./node_modules/lodash/difference.js"),
				B_ = n.n(M_);
			const F_ = [];
			var G_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mu.p: {
						const {
							profileOrder: n
						} = t.payload;
						return oh()([...e, ...n])
					}
					case Eu.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case Eu.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === Hb.a.PROFILE);
						if (!a.length) return e;
						const o = a.map(e => e.id);
						return s ? oh()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : B_()(e, o)
					}
					default:
						return e
				}
			};
			const q_ = [];
			var H_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mu.p: {
							const {
								subredditOrder: n
							} = t.payload;
							return oh()([...e, ...n])
						}
						case Eu.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case Eu.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === Hb.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const o = a.map(e => e.id);
							return s ? oh()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : B_()(e, o)
						}
						default:
							return e
					}
				},
				V_ = Object(J.c)({
					api: A_,
					favoriteMultiOrder: D_,
					favoriteProfileOrder: R_,
					favoriteSubredditOrder: L_,
					multiredditOrder: U_,
					profileOrder: G_,
					subredditOrder: H_
				}),
				W_ = n("./src/reddit/actions/survey/constants.ts");
			var Q_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W_.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var Y_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W_.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var K_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W_.b:
						return !e;
					default:
						return e
				}
			};
			var $_ = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W_.i:
						return !e;
					default:
						return e
				}
			};
			var z_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W_.m:
							return t.payload || "";
						default:
							return e
					}
				},
				X_ = Object(J.c)({
					activeDemoTrigger: Q_,
					demoTriggerThreshold: Y_,
					isDemoEnabled: K_,
					isSampleFactorEnabled: $_,
					surveyNameCalledImmediately: z_
				});
			var J_ = function() {
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
				Z_ = n("./src/reddit/actions/tags/constants.ts");
			const eO = {
				pending: !1,
				error: !1
			};
			var tO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z_.l:
						return {
							...e, pending: !0
						};
					case Z_.m:
						return {
							error: !1, pending: !1
						};
					case Z_.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const nO = {
				pending: !1,
				error: !1
			};
			var rO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z_.o:
						return {
							...e, pending: !0
						};
					case Z_.p:
						return {
							error: !1, pending: !1
						};
					case Z_.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const sO = {
				pending: !1,
				error: !1
			};
			var aO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z_.t:
						return {
							...e, pending: !0
						};
					case Z_.s:
					case Z_.r:
					case Z_.e:
					case Z_.j:
						return {
							error: !1, pending: !1
						};
					case Z_.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const oO = {
				pending: !1,
				error: !1
			};
			var cO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z_.v:
						return {
							...e, pending: !0
						};
					case Z_.w:
						return {
							error: !1, pending: !1
						};
					case Z_.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const iO = {
				pending: !1,
				error: !1
			};
			var dO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z_.g:
							return {
								...e, pending: !0
							};
						case Z_.h:
							return {
								error: !1, pending: !1
							};
						case Z_.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				lO = Object(J.c)({
					create: tO,
					deleteTag: rO,
					fetch: aO,
					update: cO,
					updatePrimaryTag: dO
				});
			const uO = {
				global: [],
				recommendedGlobal: []
			};
			var pO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z_.w:
						case Z_.r:
						case Z_.e:
						case Z_.j: {
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
				fO = n("./node_modules/lodash/uniqWith.js"),
				hO = n.n(fO),
				bO = n("./src/reddit/models/Option/index.ts");
			const yO = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var mO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z_.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: hO()([...e.selectedOptions || [], {
									...n
								}], bO.a)
							}
						}
						case Z_.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(bO.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case Z_.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case Z_.a: {
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
				gO = n("./src/reddit/helpers/tags/index.ts");
			const vO = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var EO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z_.j: {
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
						case Z_.w:
						case Z_.s:
						case Z_.r: {
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
									[c]: Object(gO.a)(a[c] || {})
								}
							}
						}
						case Z_.p: {
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
						case Z_.e: {
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
						case Z_.h: {
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
				_O = n("./src/reddit/reducers/tags/selected/index.ts"),
				OO = Object(J.c)({
					api: lO,
					availableGlobalTagOrder: pO,
					models: EO,
					selected: _O.b,
					creation: mO
				}),
				IO = n("./src/reddit/actions/redditEmbed.ts"),
				SO = n("./src/reddit/actions/theme.ts"),
				TO = n("./src/reddit/actions/users.ts"),
				DO = n("./src/reddit/models/Theme/index.ts");
			const wO = {
				current: DO.c,
				cached: {}
			};
			var jO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case SO.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? DO.b : DO.c,
								cached: {}
							}
						}
						case Rn.b:
						case Rn.c:
						case Rn.l:
						case Rn.m:
						case Rn.h:
						case Rn.a:
						case Rn.n:
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
						case D.c:
						case k.SUBREDDIT_LOADED:
						case N.b:
						case N.a:
						case D.g:
						case IO.b:
						case H.i:
						case Ze.e:
						case ye.c:
						case Nn.j:
						case L.PAGE_LOADED:
						case Gr.PAGE_LOADED:
						case TO.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: DO.b,
									cached: {}
								} : {
									current: DO.c,
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
								current: DO.b,
								cached: {}
							} : {
								current: DO.c,
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
									current: DO.b,
									cached: {}
								} : {
									current: DO.c,
									cached: {}
								}
							}
							return e;
						case Nn.i: {
							if (!t.payload) return e;
							const {
								nightmode: n
							} = t.payload;
							return n ? {
								current: DO.b,
								cached: {}
							} : {
								current: DO.c,
								cached: {}
							}
						}
						case f.d:
							return {
								current: DO.c, cached: {}
							};
						case f.e:
							return t.payload.nightmodeTempUpdated ? {
								current: DO.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				CO = n("./src/reddit/actions/toaster.ts");
			const AO = [];
			var PO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case CO.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case CO.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				RO = n("./src/reddit/actions/tooltip.ts");
			var NO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case RO.c:
						case RO.b:
						case RO.e:
						case RO.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				LO = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var xO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case RO.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case RO.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case RO.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case RO.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case Ie.I:
						case RO.d:
						case l.b:
						case Hc.b:
						case Hc.c:
						case Hc.a:
							return t.type === l.b && e === LO.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				kO = Object(J.c)({
					params: NO,
					tooltipId: xO
				}),
				UO = n("./src/reddit/actions/tracing.ts");
			const MO = {
				traceId: void 0
			};
			var BO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case UO.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				FO = n("./src/lib/asyncActions/index.ts"),
				GO = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const qO = Object(FO.c)(GO.c.requestedActionType, GO.c.succeededActionType, GO.c.failedActionType),
				HO = Object(FO.c)(GO.a.requestedActionType, GO.a.succeededActionType, GO.a.failedActionType),
				VO = Object(FO.c)(GO.d.requestedActionType, GO.d.succeededActionType, GO.d.failedActionType);
			var WO = Object(J.c)({
					load: qO,
					execute: HO,
					send: VO
				}),
				QO = n("./src/reddit/actions/tracking.ts");
			const YO = {};
			var KO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case QO.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case QO.b: {
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
				$O = Object(J.c)({
					reCaptchaEnterprise: WO,
					viewportDataLoaded: KO
				}),
				zO = n("./src/reddit/actions/trafficStats/constants.ts");
			var XO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zO.c:
						return !0;
					case zO.b:
					case zO.a:
						return !1;
					default:
						return e
				}
			};
			var JO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zO.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case zO.c:
							return null;
						default:
							return e
					}
				},
				ZO = Object(J.c)({
					pending: XO,
					trafficStats: JO
				});
			var eI = function() {
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
			var tI = function() {
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
				nI = Object(J.c)({
					error: eI,
					pending: tI
				});
			var rI = function() {
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
			var sI = function() {
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
			var aI = function() {
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
				oI = Object(J.c)({
					api: nI,
					contentId: rI,
					initialRecipient: sI,
					publicAddress: aI
				}),
				cI = Object(J.c)({
					communityPoints: oI
				}),
				iI = n("./src/reddit/actions/search/trending.ts");
			const dI = {};
			var lI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.SUBREDDIT_LOADED:
						case iI.a: {
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
				uI = Object(J.c)({
					models: lI
				});
			var pI = n("./src/reddit/routes/premium/index.ts");
			const fI = {};
			var hI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yy.a: {
							const {
								trophies: n
							} = t.payload;
							return Object.values(n).forEach(e => {
								"t6_bf" === e.awardId && (e.url = pI.b)
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
				yI = n("./src/reddit/models/Upload/index.ts");
			const mI = {};
			var gI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mI,
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
									status: yI.a.PENDING
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
									status: yI.a.UPLOADING
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
									status: yI.a.SUCCESS,
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
									status: yI.a.FAILED,
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
									status: yI.a.CANCELED
								}
							}
						}
						case bI.f: {
							const {
								key: n
							} = t.payload, r = e[n];
							return r.metadata.localUrl && window.URL.revokeObjectURL(r.metadata.localUrl), Fr()(e, n)
						}
						default:
							return e
					}
				},
				vI = n("./src/reddit/actions/upvotePrompt.ts");
			var EI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vI.a:
						return ++e;
					default:
						return e
				}
			};
			const _I = {};

			function OI(e, t) {
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
			var II = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _I,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.d:
					case i.a:
					case c.f:
					case i.t: {
						const {
							wallet: n
						} = t.payload;
						return OI(e, n)
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
			var SI = n("./src/reddit/actions/pages/appeal/constants.ts"),
				TI = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				DI = n("./src/reddit/actions/sso/constants.ts"),
				wI = n("./src/reddit/endpoints/profile/info.ts");
			const jI = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || fu()(r, t)) return e;
				const {
					karma: s
				} = t;
				return {
					...t,
					karma: {
						...wI.a,
						...null == r ? void 0 : r.karma,
						...s
					},
					gender: n
				}
			};
			var CI = Object(Yh.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case SI.a:
					case SI.b:
					case ky.b:
					case ky.c:
					case Rn.b:
					case Rn.c:
					case Rn.h:
					case Rn.a:
					case Rn.l:
					case Rn.m:
					case Rn.n:
					case R.e:
					case R.h:
					case R.g:
					case j.q:
					case j.r:
					case he.a:
					case he.e:
					case he.b:
					case he.f:
					case D.a:
					case D.c:
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
					case Gr.PAGE_LOADED:
					case Ze.c:
					case Ze.e:
					case IO.a:
					case IO.b:
					case Nn.j:
					case TI.b:
					case TO.c:
					case U.TOPIC_DATA_LOADED:
						return jI(e, t.payload.account);
					case TO.n:
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
						return n ? jI(e, n.account) : e
					}
					case TO.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case r.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case Nn.l:
					case Nn.k: {
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
						return n.toLowerCase() !== (e && Object(ge.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...wI.a,
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
					case DI.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case DI.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case si.SAVE_USERNAME_SUCCESS: {
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
					case Qu.a:
					case Qu.b: {
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
					case TO.k: {
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
			var AI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TO.m:
					case TO.n:
						return null;
					case TO.l:
						return t.payload;
					default:
						return e
				}
			};
			var PI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TO.m:
							return !0;
						case TO.n:
						case TO.l:
							return !1;
						default:
							return e
					}
				},
				RI = Object(J.c)({
					error: AI,
					pending: PI
				}),
				NI = Object(J.c)({
					api: RI
				});
			var LI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TO.i:
						return !0;
					default:
						return e
				}
			};
			var xI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TO.h:
							return !0;
						case TO.i:
						case TO.g:
							return !1;
						default:
							return e
					}
				},
				kI = Object(J.c)({
					pending: xI,
					emailSent: LI
				}),
				UI = Object(J.c)({
					api: kI
				}),
				MI = Object(J.c)({
					changeEmail: NI,
					sendResetEmail: UI
				}),
				BI = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const FI = {};
			var GI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ut.f:
						return {
							...e, new: BI.a.pending
						};
					case Ut.d:
						return {
							...e, new: BI.a.error
						};
					case Ut.e:
						return {
							...e, new: BI.a.waitingForRequest
						};
					case Ut.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: BI.a.pending
						}
					}
					case Ut.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: BI.a.error
						}
					}
					case Ut.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: BI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const qI = [];
			var HI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ut.e:
							return [t.payload, ...e];
						case Ut.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case Nn.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				VI = Object(J.c)({
					api: GI,
					data: HI
				}),
				WI = n("./src/reddit/actions/chat/constants.ts"),
				QI = n("./src/reddit/actions/chat/userSettings.ts");
			const YI = WI.a.anybody;
			var KI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case QI.a:
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
				$I = Object(J.c)({
					invitePolicy: KI
				});
			const zI = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var XI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && fu()(e, n) ? e : {
							...e,
							...n
						}
					}
					case lr.P: {
						const {
							response: {
								draftsCount: n
							}
						} = t.payload;
						return zI(e, n)
					}
					case zn.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return zI(e, n.length)
					}
					case zn.c:
					case zn.l: {
						const {
							draftsCount: n
						} = t.payload;
						return zI(e, n)
					}
					default:
						return e
				}
			};
			const JI = {};
			var ZI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case go.a: {
							const e = t.payload.experimentVariants;
							return ep(e)
						}
						default:
							return e
					}
				},
				eS = n("./src/reddit/actions/global/constants.ts");
			const tS = {};
			var nS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eS.a: {
							const n = t.payload;
							return null === n.local_persisted_experiments_store || void 0 === n.local_persisted_experiments_store ? e : n.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				rS = n("./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts"),
				sS = Object(J.c)({
					byName: ZI,
					localPersisted: nS,
					shredditPDPExperimentHeader: rS.b
				});
			var aS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nn.f:
						return !0;
					case Nn.e:
						return !1;
					default:
						return e
				}
			};
			var oS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nn.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const cS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var iS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TO.b:
							return t.payload;
						default:
							return e
					}
				},
				dS = n("./src/reddit/actions/notifications/constants.ts"),
				lS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var uS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lS.a:
					case lS.d:
					case lS.h:
					case dS.a:
						return t.payload && t.payload.error || null;
					case lS.c:
					case lS.f:
					case lS.j:
					case dS.c:
					case dS.b:
						return null;
					default:
						return e
				}
			};
			var pS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dS.c:
						return !1;
					case dS.b:
						return !0;
					default:
						return e
				}
			};
			var fS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dS.c:
						case lS.j:
							return !0;
						case dS.b:
						case dS.a:
						case lS.i:
						case lS.h:
							return !1;
						default:
							return e
					}
				},
				hS = Object(J.c)({
					error: uS,
					loaded: pS,
					pending: fS
				});
			var bS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case dS.f:
					case dS.e:
						return null;
					default:
						return e
				}
			};
			var yS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dS.f:
						return !1;
					case dS.e:
						return !0;
					default:
						return e
				}
			};
			var mS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dS.f:
							return !0;
						case dS.e:
						case dS.d:
							return !1;
						default:
							return e
					}
				},
				gS = Object(J.c)({
					error: bS,
					loaded: yS,
					pending: mS
				}),
				vS = Object(J.c)({
					getPreferences: hS,
					setPreferences: gS
				}),
				ES = n("./src/lib/notifications/constants.ts");
			var _S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ES.k:
						return !0;
					case ES.b:
						return !1;
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
					case lS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case lS.g: {
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
			const SS = {
				byId: {},
				allIds: []
			};
			var TS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lS.b: {
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
				DS = Object(J.c)({
					sections: TS,
					rows: IS
				});
			var wS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ES.l:
						return !0;
					case ES.c:
					case ES.e:
					case ES.f:
						return !1;
					default:
						return e
				}
			};
			const jS = {
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
			var CS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dS.b:
					case dS.f:
					case dS.d: {
						const {
							preferences: n
						} = t.payload;
						return Ta()(n) ? e : n
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
					case lS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case lS.g: {
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
			const RS = {
				byId: {},
				allIds: []
			};
			var NS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lS.e: {
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
				LS = Object(J.c)({
					sections: NS,
					rows: PS
				});
			var xS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const kS = [];
			var US = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case lS.k: {
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
				MS = Object(J.c)({
					subreddits: US,
					pageInfo: xS
				}),
				BS = Object(J.c)({
					api: vS,
					subscribedSubredditsSettings: MS,
					emailSettingsLayout: DS,
					isAskNotificationPromptVisible: _S,
					isNotificationPromptVisible: wS,
					preferences: CS,
					pushSettingsLayout: LS
				});
			const FS = {};
			var GS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.i:
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
			var qS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.yb: {
						const n = t.payload.powerups;
						return n ? Fr()({
							...e,
							...n
						}, "allocation") : e
					}
					case Ie.nb: {
						const {
							userPowerups: n
						} = t.payload;
						return n ? Fr()({
							...e,
							...n
						}, "allocation") : e
					}
					default:
						return e
				}
			};
			var HS, VS = function() {
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
				WS = Object(J.c)({
					data: qS,
					fetched: VS
				}),
				QS = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(HS || (HS = {}));
			const YS = {
				status: HS.UNFETCHED,
				subscriptions: []
			};
			var KS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.Cb:
						return {
							...e, status: HS.PENDING
						};
					case Ie.Bb: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: HS.LOADED
						} : e
					}
					case Ie.Ab:
						return {
							...e, status: HS.FAILED
						};
					default:
						return e
				}
			};
			var $S = function() {
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
			var zS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.f:
						return !0;
					default:
						return e
				}
			};
			var XS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TO.j:
						return t.payload;
					default:
						return e
				}
			};
			var JS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case go.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var ZS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case go.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				eT = Object(J.c)({
					isEmployee: JS,
					isLoggedIn: ZS
				});
			var tT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nn.q: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && fu()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				nT = n("./src/reddit/actions/userWhitelist.ts");
			const rT = {};
			var sT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nT.e:
						return {
							...e, new: BI.a.pending
						};
					case nT.d:
						return {
							...e, new: BI.a.error
						};
					case nT.f:
						return {
							...e, new: BI.a.waitingForRequest
						};
					case nT.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: BI.a.pending
						}
					}
					case nT.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: BI.a.error
						}
					}
					case nT.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: BI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const aT = [];
			var oT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nT.f:
							return [t.payload, ...e];
						case nT.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case Nn.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				cT = Object(J.c)({
					api: sT,
					data: oT
				}),
				iT = Object(J.c)({
					account: CI,
					accountSettings: MI,
					blocked: VI,
					chatSettings: $I,
					drafts: XI,
					experiments: sS,
					isCustomizeFlyoutShowing: aS,
					topContentDismissalPrefsSet: tT,
					language: oS,
					loid: iS,
					notificationPrefs: BS,
					ownedBadges: GS,
					powerups: WS,
					prefs: QS.c,
					productOfferSubscriptions: KS,
					session: $S,
					sessionRefreshFailed: zS,
					sessionTracker: XS,
					temporaryGQL: eT,
					wallets: II,
					whitelist: cT
				});
			var dT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TI.a:
						return t.payload || null;
					case TI.b:
					case TI.c:
						return null;
					default:
						return e
				}
			};
			var lT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TI.c:
						return !0;
					case TI.b:
					case TI.a:
						return !1;
					default:
						return e
				}
			};
			var uT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TI.b:
						return !0;
					case TI.a:
					case TI.c:
						return !1;
					default:
						return e
				}
			};
			var pT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TI.b:
							return t.payload.userDataExportEligibility;
						case TI.a:
						case TI.c:
							return !1;
						default:
							return e
					}
				},
				fT = Object(J.c)({
					error: dT,
					pending: lT,
					success: uT,
					userDataExportEligibility: pT
				}),
				hT = Object(J.c)({
					userDataRequestPageApi: fT
				});
			const bT = {};
			var yT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case TO.f:
					case TO.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case TO.d: {
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
			var mT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TO.f:
							return !0;
						case TO.e:
						case TO.d:
							return !1;
						default:
							return e
					}
				},
				gT = Object(J.c)({
					error: yT,
					pending: mT
				});
			const vT = {};
			var ET = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vT,
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
			const _T = {},
				OT = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && fu()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var IT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case TO.e: {
							const {
								data: n
							} = t.payload;
							return OT(e, n)
						}
						case fe.k:
							return OT(e, t.payload || {});
						case mu.l: {
							const {
								user: n
							} = t.payload;
							return OT(e, {
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
							return o ? OT(e, {
								[n.toLowerCase()]: {
									...r,
									awardedLastMonth: {
										totalCount: a,
										topAward: o
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
								...wI.a,
								...r
							};
							return OT(e, {
								[n.toLowerCase()]: {
									...s,
									karma: a
								}
							})
						}
						case Nn.l:
						case Nn.k: {
							const {
								imageUrl: n,
								key: r,
								username: s
							} = t.payload;
							if ("profileIcon" !== r) return e;
							const a = s.toLowerCase(),
								o = e[a];
							return o ? OT(e, {
								[a]: {
									...o,
									accountIcon: n
								}
							}) : e
						}
						case TO.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object(ge.e)(n).toLowerCase(),
								s = e[r];
							return s ? OT(e, {
								[r]: {
									...s,
									accountIcon: n.accountIcon,
									snoovatarFullBodyAsset: n.snoovatarFullBodyAsset
								}
							}) : e;
						case Nn.n: {
							const {
								additional: n,
								settings: r
							} = t.payload;
							if (n.enableFollowers === n.prevEnableFollowers) return e;
							const s = r.currentUserName.toLowerCase(),
								a = e[s];
							return a ? OT(e, {
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
				ST = n("./src/reddit/actions/usernameAvailable.ts");
			const TT = {};
			var DT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ST.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: ST.b.Available
						}
					}
					case ST.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: ST.b.Error
						}
					}
					case ST.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: ST.b.Pending
						}
					}
					case ST.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: ST.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			var wT = function() {
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
				jT = Object(J.c)({
					fetched: wT
				});
			var CT = function() {
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
			var AT = function() {
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
				PT = Object(J.c)({
					error: CT,
					pending: AT
				});
			var RT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ie.wb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const NT = {};
			var LT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NT,
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
			const xT = {};
			var kT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xT,
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
							return Fr()(e, [n])
						}
						default:
							return e
					}
				},
				UT = Object(J.c)({
					api: PT,
					currentPostId: RT,
					currentRank: LT,
					list: kT
				}),
				MT = Object(J.c)({
					api: gT,
					appliedBadges: ET,
					models: IT,
					nameAvailable: DT,
					topAwarders: UT,
					powerups: jT
				});
			const BT = {};
			var FT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case he.b:
						case he.f:
						case k.SUBREDDIT_LOADED:
						case H.i:
						case ye.c:
						case L.PAGE_LOADED:
						case Gr.PAGE_LOADED: {
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
				GT = n("./src/reddit/actions/widgets/constants.ts");
			const qT = {};
			var HT = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qT,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case he.b:
						case he.f:
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
						case GT.g: {
							const n = t.payload;
							return "menu" !== n.widget.kind ? e : {
								...e,
								[n.subredditId]: n.widgetId
							}
						}
						case GT.h: {
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
				VT = n("./src/reddit/helpers/widgets/index.tsx");
			const WT = {};
			var QT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT,
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
					case GT.b: {
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
								styles: Object(VT.g)()
							}
						}), t
					}
					case GT.e: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case GT.i:
					case GT.g: {
						const n = t.payload;
						return {
							...e,
							[n.widget.id]: n.widget
						}
					}
					case GT.h: {
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
					case L.PAGE_LOADED:
					case Gr.PAGE_LOADED: {
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
					case Eu.h: {
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
					case fv.f: {
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
			const YT = {};
			var KT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YT,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case he.f:
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
			const $T = {};
			var zT = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $T,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.SUBREDDIT_LOADED:
					case L.PAGE_LOADED:
					case Gr.PAGE_LOADED: {
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
					case GT.e:
					case GT.b: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgets.layout.sidebar.order
						}
					}
					case GT.f: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgetIds
						}
					}
					case GT.g: {
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
					case GT.h: {
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
					case L.PAGE_LOADED:
					case Gr.PAGE_LOADED: {
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
			const XT = {
				accountManagerModalData: a,
				activeModal: b,
				ads: E,
				adsSignals: K,
				apiRequestState: X,
				appBadges: ae,
				authorFlair: Oe,
				awards: ft,
				badges: jt,
				blockedRedditors: kt,
				blockUser: Ht,
				brandSafety: Wt,
				chat: un,
				cooldownTimer: Vn,
				commentsListTruncated: fn,
				communityFlairs: yn,
				connection: vn,
				contentControls: Pn,
				contentGate: xn,
				continueThreads: Mn,
				creations: ba,
				dashboard: ga,
				discoveryUnits: Na,
				dismissedTruncationList: ka,
				economics: ao,
				emailVerificationTooltip: io,
				emojis: mo,
				experimentOverrides: Oo,
				externalAccount: Xo,
				featureFlags: sc,
				firstPost: cc,
				focusedVerticals: Ec,
				fontFiles: Oc,
				frontPageFirstLoaded: Ic,
				gild: kc,
				header: Wc,
				htmlResponseStreaming: Qc,
				imageUploads: $c,
				inAppNotifications: ti,
				interceptedAction: ri,
				isChangeUsernameTooltipShowing: ai,
				isModeratorWithPostPerms: ci,
				jsApi: li,
				langSite: fi,
				leaderboard: Oi,
				listings: Qd,
				live: Xd,
				mediaEmbed: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jd.a:
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
				mediaGalleries: sl,
				mediaPlayback: cl,
				merchandisingUnitAnnouncements: ll,
				meta: fl,
				moderatingSubreddits: yl,
				modListingPage: Il,
				modModeEnabled: Tl,
				moreComments: Nl,
				multireddits: Du,
				notificationBannerId: ju,
				notificationsInbox: qu,
				nps: Wu,
				onboarding: Ju,
				page: sp,
				platform: lp,
				postCollection: Qp,
				polls: Lp,
				postFlair: Jp,
				posts: Qh,
				postStickiedComments: zh,
				givePremium: Gc,
				products: ub,
				profileCommentsPage: Db,
				profilePrivatePage: qb,
				profileModSettingsPage: Ab,
				profilePostsPage: Rb,
				profiles: _y,
				promos: Dy,
				recap: Cy,
				recentSubreddits: Ny,
				recommendations: xy,
				reportPage: Wy,
				reportRules: Ky,
				requestHost: $y,
				runTimeEnvVars: Jy,
				search: wm,
				searchDiscoveryUnits: xm,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Um,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case km.a:
							return t.payload;
						case km.b:
							return Um;
						default:
							return e
					}
				},
				seo: Wm,
				shortcuts: tg,
				sidebarPromotedPosts: sg,
				structuredStyles: Ig,
				stylesheets: Sg,
				subredditAutocomplete: Ng,
				subreddits: v_,
				subredditStickyPosts: O_,
				subscriptions: V_,
				survey: X_,
				tabBadged: J_,
				tags: OO,
				themes: jO,
				toaster: PO,
				tooltip: kO,
				tracing: BO,
				tracking: $O,
				trafficStats: ZO,
				transfers: cI,
				trending: uI,
				trophies: hI,
				uploads: gI,
				user: iT,
				userDataRequestPage: hT,
				upvotePromptCountPerSess: EI,
				users: MT,
				widgets: Object(J.c)({
					idCardIds: FT,
					menuIds: HT,
					models: QT,
					moderatorIds: KT,
					sidebar: zT
				})
			}
		},
		"./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/sentry/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts");
			var a;
			Object(s.a)("SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION");
			! function(e) {
				e[e.Treatment = 0] = "Treatment", e[e.Control = 1] = "Control", e[e.Off = 2] = "Off"
			}(a || (a = {}));
			const o = a.Off;
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION":
						return r.c.captureException("PDP Experiment Header should only be set on the server."), e;
					default:
						return e
				}
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
						name: s.Sb.PREMIUM,
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
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/reselect/es/index.js");
			const s = e => !(e.chat.isInited || e.chat.unread.api.pending),
				a = e => e.chat.liveChatTooltipShowState,
				o = Object(r.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
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
				experimentName: r.sb
			}), e => ({
				bucketed: e === r.Zc.ExpandedSearch || e === r.Zc.CollapsedSearch,
				collapsed: e === r.Zc.CollapsedSearch,
				expanded: e === r.Zc.ExpandedSearch
			}))
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
						experimentName: a.ke,
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
						const e = Object(c.a)("subreddit", window.location.href);
						(a = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Sb.SUBREDDIT)
					}
					if (a && n) {
						const e = (null == a ? void 0 : a.toLocaleLowerCase()) === n;
						return r === s.Sb.SUBREDDIT && e
					}
					return !1
				},
				h = e => !!p(e) && Object(o.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: a.le,
					expEventOverride: !1
				}) !== a.me.Readonly
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return b
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
				h = Object(s.a)(a.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				b = Object(s.a)(d.m, a.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
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
				l = 6 * r.ub,
				u = (e, t) => {
					const n = Object(o.G)(e, t),
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
			e.exports = JSON.parse('{"id":"1ef306afabd0"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.7590af495d183ce0f26d.js.map