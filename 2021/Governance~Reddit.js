// https://www.redditstatic.com/desktop2x/Governance~Reddit.b7832bde95d625fd7ab3.js
// Retrieved at 9/15/2021, 4:10:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, r) {},
		"./src/lib/asyncActions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = e => `${e}_REQUESTED`,
				a = e => `${e}_SUCCEEDED`,
				c = e => `${e}_FAILED`;

			function o(e) {
				const t = n(e),
					r = a(e),
					o = c(e);
				return {
					requestedActionType: t,
					requested: Object(s.a)(t),
					succeededActionType: r,
					succeeded: Object(s.a)(r),
					failedActionType: o,
					failed: Object(s.a)(o)
				}
			}
			var d;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(d || (d = {}));
			const i = (e, t, r) => (s = d.New, n) => {
				switch (n.type) {
					case e:
						return s === d.New ? d.Pending : s;
					case t:
						return s === d.Pending ? d.Succeeded : s;
					case r:
						return s === d.Pending ? d.Failed : s;
					default:
						return s
				}
			}
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/bignumber.js/bignumber.js");

			function n(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t),
					a = new s.BigNumber(r.dividedBy(n)),
					c = new s.BigNumber("100").multipliedBy(a);
				return new s.BigNumber(c).toNumber()
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/models/Media/index.ts"),
				n = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = r.n(n);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: r,
					domainOverride: n
				} = e;
				let c = "";
				if (r) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					c = n || Object(s.D)(e)
				} else c = Object(s.D)(e);
				const o = a.a.parse(c),
					d = o.path || "",
					i = d.length > 7 ? d.substring(0, 7) + "..." : d;
				return (o.hostname ? o.hostname.replace("www.", "") : "") + i
			}
		},
		"./src/lib/omitKey/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				if (t in e) {
					const {
						[t]: r, ...s
					} = e;
					return s
				}
				return e
			}
			r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			r("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var s = r("./src/config.ts"),
				n = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = e => "object" == typeof e && null !== e,
				c = () => "undefined" != typeof window && a(window) && a(window.grecaptcha) && a(window.grecaptcha.enterprise),
				o = () => c() ? window.grecaptcha.enterprise : void 0,
				d = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				i = e => Object(n.a)(d(e), c),
				u = e => new Promise(t => e.ready(t));
			var l, p = r("./node_modules/ts-error/lib/cjs.js"),
				b = r.n(p);
			class MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError extends b.a {
				constructor() {
					super("reCaptcha Enterprise site key is not set")
				}
			}
			class ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError extends b.a {
				constructor() {
					super("reCaptcha Enterprise client is not ready")
				}
			}
			class ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError extends b.a {
				constructor() {
					super("reCaptcha Enterprise client is not available")
				}
			}! function(e) {
				e.PageLoad = "PAGE_LOAD"
			}(l || (l = {}));
			var f = l;
			const m = new class {
				constructor(e = s.a.reCaptchaEnterprise.siteKey, t) {
					this.siteKey = e, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => d(this.siteKey), this.ensureSiteKey = () => {
						if (!this.hasSiteKey) throw new MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError
					}, this.ensureClient = () => {
						const e = this.instance;
						if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
						return e
					}, this.waitUntilClientIsReady = async () => {
						const e = this.ensureClient();
						return await u(e), this.isReady = !0, e
					}, this.ensureClientIsReady = () => {
						const e = this.ensureClient();
						if (!this.isReady) throw new ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError;
						return e
					}, this.loadScript = async (e = !1) => {
						if (!this.instance || e) {
							this.ensureSiteKey(), await i(this.siteKey);
							const e = o();
							if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							this.setInstance(e)
						}
						this.isReady || await this.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							r = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(r)[1]
						}
						return r
					}, this.setInstance(t || o())
				}
			};
			t.b = m
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, r) {},
		"./src/lib/timeUntil/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");
			const a = [n.mc, n.ob, n.A, n.P, n.jb, n.Pb],
				c = {
					[n.Pb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.jb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.P]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.A]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.ob]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[n.mc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[n.Pb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[n.jb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.P]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.A]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.mc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.mc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function d(e, t = !1, r = !1) {
				const d = Date.now(),
					i = new Date(e).getTime(),
					u = {
						[n.mc]: "",
						[n.ob]: "",
						[n.A]: "",
						[n.P]: "",
						[n.jb]: "",
						[n.Pb]: ""
					};
				let l = i - d;
				if (l <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of a) {
					const e = Math.floor(l / s);
					e && (u[s] = (t ? o : c)[s](e).toString()), l -= e * s
				}
				const p = a.map(e => u[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || r ? p : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/accountGender/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "ACCOUNT_GENDER_LOADED",
				n = "ACCOUNT_GENDER_UPDATED"
		},
		"./src/reddit/actions/apiRequestHeaders.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "API_REQUEST_HEADERS__set";
			Object(s.a)(n)
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				a = Object(s.a)(n)
		},
		"./src/reddit/actions/badge.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "j", (function() {
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/governance/errorToast.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts");
			const c = "BADGE__BADGE_APPLICATION_SUCCESS",
				o = "BADGE__BADGE_APPLICATION_FAILURE",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				l = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				b = "BADGE__USER_BADGES_FETCH_PENDING",
				f = Object(s.a)(c),
				m = Object(s.a)(o),
				y = (Object(s.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(s.a)(d)),
				E = Object(s.a)(i),
				_ = Object(s.a)(u),
				O = (Object(s.a)(l), Object(s.a)(p), Object(s.a)(b), ({
					badgeIds: e,
					subredditId: t
				}) => async (r, s, {
					apiContext: c
				}) => {
					const o = s(),
						d = o.user.account;
					if (d) {
						const s = (o.users.appliedBadges[d.id] || {})[t] || [],
							i = e.length ? e[0] : s[0],
							u = !!e.length;
						r(f({
							badgeIds: e,
							subredditId: t,
							userId: d.id
						}));
						const l = await Object(a.a)(c(), t, i, u);
						l.ok || (r(m({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: s,
							userId: d.id
						})), Object(n.a)(r, l.error))
					}
				}),
				h = ({
					subredditId: e,
					userIds: t
				}) => async (r, s, {
					apiContext: n
				}) => {
					r(_({
						subredditId: e
					}));
					const c = await Object(a.b)(n(), e, t);
					c.ok ? r(y({
						...c.body,
						subredditId: e
					})) : r(E({
						subredditId: e,
						error: c.error
					}))
				}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "g", (function() {
				return _
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const c = (e, t) => Object(n.a)(e, {
				...a,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var o = r("./src/reddit/selectors/blockedRedditors.ts");
			const d = "BLOCKED_REDDITORS_LIST__ADD",
				i = "BLOCKED_REDDITORS_LIST__REMOVE",
				u = "BLOCKED_REDDITORS_LIST__FAILED",
				l = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				b = Object(s.a)(d),
				f = Object(s.a)(i),
				m = Object(s.a)(u),
				y = Object(s.a)(l),
				E = Object(s.a)(p),
				_ = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t(),
						n = Object(o.a)(s);
					if (Object(o.b)(s) || n.timestamp && Date.now() - n.timestamp < 36e6) return;
					let a = !1,
						d = "";
					do {
						e(E());
						const t = {
								after: d,
								pageSize: 100
							},
							s = await c(r(), t);
						if (s && s.ok) {
							const {
								data: {
									identity: t
								}
							} = s.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: r,
									edges: s
								} = t.blockedRedditorsInfo;
								if (e(y(s.map(e => e.node.id))), r) {
									const {
										hasNextPage: e,
										endCursor: t
									} = r;
									a = e, d = t || ""
								}
							} else a = !1
						} else {
							a = !1;
							const t = s.error ? s.error.type : "unknown error";
							e(m({
								message: t
							}))
						}
					} while (a)
				}
		},
		"./src/reddit/actions/celebratoryMoments/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "CELEBRATORY_MOMENT__START_RENDER",
				n = "CELEBRATORY_MOMENT__STOP_RENDER"
		},
		"./src/reddit/actions/chat/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			var s, n = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
			}(s || (s = {}));
			const a = {
					[s.anybody]: () => n.fbt._("Everyone", null, {
						hk: "YHmqV"
					}),
					[s.account_age_30_days]: () => n.fbt._("Accounts older than 30 days", null, {
						hk: "1g4Gwx"
					}),
					[s.nobody]: () => n.fbt._("Nobody", null, {
						hk: "2m0XS"
					})
				},
				c = e => {
					const t = a[e];
					return t && t()
				}
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return S
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			var l = r("./src/reddit/selectors/telemetry.ts");
			var p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/chat/constants.ts");
			const m = Object(n.a)("USER_SETTINGS__FETCH_PENDING"),
				y = Object(n.a)("USER_SETTINGS__FETCH_FAILURE"),
				E = "USER_SETTINGS__UPDATE_SUCCESS",
				_ = Object(n.a)(E),
				O = () => async (e, t, {
					apiContext: r
				}) => {
					e(m());
					const s = await (e => Object(d.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
						method: o.ib.GET
					}))(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(_({
							invitePolicy: f.a[t.invite_policy]
						}))
					} else e(y(s.error))
				}, h = Object(n.a)("USER_SETTINGS__SAVE_PENDING"), I = Object(n.a)("USER_SETTINGS__SAVE_FAILURE"), S = e => async (t, r, {
					apiContext: n
				}) => {
					const m = r(),
						{
							invitePolicy: y
						} = e,
						E = Object.keys(f.a).find(e => f.a[e] === y);
					if (E) {
						t(h());
						const e = await (async (e, t) => Object(d.a)(Object(i.a)(t, [u.a]), {
							endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
							method: o.ib.PUT,
							data: JSON.stringify({
								invite_policy: e
							})
						}))(E, n());
						if (Object(b.a)((e => t => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: e
								},
								...Object(l.defaults)(t)
							}))(E)(m)), e.ok) {
							const e = f.a[E];
							t(_({
								invitePolicy: e
							})), t(Object(a.f)({
								kind: p.b.SuccessCommunity,
								text: s.fbt._("Changes saved", null, {
									hk: "4eTtdy"
								})
							}))
						} else t(I(e.error))
					}
				}
		},
		"./src/reddit/actions/claimgold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "h", (function() {
				return j
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var p = async (e, t) => {
				const {
					code: r
				} = t, s = {
					api_type: "json",
					code: r,
					raw_json: 1
				};
				return Object(d.a)(Object(i.a)(e, [u.a]), {
					method: o.ib.POST,
					endpoint: `${e.apiUrl}/api/claimgold`,
					data: s
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
			}, b = r("./src/reddit/helpers/genericServerError/index.ts"), f = r("./src/reddit/selectors/claimgold.ts");
			const m = "CLAIMGOLD__OPEN_CLAIMGOLD_MODAL",
				y = "CLAIMGOLD__CLOSE_CLAIMGOLD_MODAL",
				E = Object(n.a)(m),
				_ = Object(n.a)(y),
				O = () => async (e, t) => {
					const r = t();
					Object(f.b)(r) ? e(_()) : e(E())
				}, h = "CLAIMGOLD_UPDATE_CODE", I = Object(n.a)(h), S = "CLAIM_GOLD__TRIGGER_LOADER", g = "CLAIM_GOLD__CLAIM_GOLD_PENDING", T = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", D = "CLAIM_GOLD__CLAIM_GOLD_FAILED", j = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(w());
					try {
						const t = await p(r(), s);
						t.error ? e(C(t)) : e(L())
					} catch (n) {
						e(C(n))
					}
				}, v = Object(n.a)(S), A = Object(n.a)(g), w = () => async (e, t) => {
					e(A()), window.setTimeout(() => {
						t().claimGold.api.pending && e(v())
					}, 2e3)
				}, R = Object(n.a)(D), C = e => async (t, r) => {
					await t(R({
						...e,
						error: e.error || Object(b.a)()
					}));
					const s = r().claimGold.api.error;
					s && t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: s
					}))
				}, P = Object(n.a)(T), L = () => async (e, t) => {
					e(P()), e(Object(a.f)({
						kind: c.b.SuccessCommunity,
						text: s.fbt._("You have redeemed your gift code successfully", null, {
							hk: "18mkH2"
						})
					}))
				}
		},
		"./src/reddit/actions/comment/list.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/helpers/trackers/commentList.ts");
			const a = "COMMENTLIST__MARKED_END",
				c = "COMMENTLIST__UNMARKED_END",
				o = Object(s.a)(a),
				d = Object(s.a)(c),
				i = (e, t) => async (r, s) => {
					const a = s();
					e in a.profileCommentsPage.fetchedTokens ? e in a.profileCommentsPage.commentIds ? r(d({
						listingKey: e
					})) : Object(n.a)(a, e) : r(o({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/commentsListTruncated/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "COMMENTS_LIST__EXPANDED",
				n = "COMMENTS_LIST__TRUNCATED"
		},
		"./src/reddit/actions/connection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = "CONNECTION__GO_ONLINE",
				n = "CONNECTION__GO_OFFLINE",
				a = "CONNECTION__HIDE_BANNER"
		},
		"./src/reddit/actions/dismissedTruncationList/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "DISMISSED_TRUNCATION_LIST__ADD_SUBREDDIT_ID"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			}));
			const s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				n = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				a = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				c = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				n = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				n = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				a = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				n = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			}));
			const s = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				a = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				o = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				d = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				i = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				u = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/emoji.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return g
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "q", (function() {
				return M
			})), r.d(t, "p", (function() {
				return G
			})), r.d(t, "l", (function() {
				return B
			})), r.d(t, "m", (function() {
				return H
			})), r.d(t, "j", (function() {
				return V
			})), r.d(t, "k", (function() {
				return q
			})), r.d(t, "b", (function() {
				return K
			})), r.d(t, "n", (function() {
				return $
			})), r.d(t, "e", (function() {
				return Q
			})), r.d(t, "o", (function() {
				return z
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/forEach.js"),
				a = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/lib/uploadToS3/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(o.a)(Object(d.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: c.ib.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const r = a()(e, (e, r) => ("snoomojis" !== r && (t = r), a()(e, (t, r) => {
					e[r] = {
						name: r,
						userFlairAllowed: t.user_flair_allowed,
						postFlairAllowed: t.post_flair_allowed,
						modFlairOnly: t.mod_flair_only,
						url: t.url
					}
				})));
				return {
					[t]: {
						emojis: r[t],
						snoomojis: r.snoomojis
					}
				}
			})(e.body)), e));
			var p = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/actions/imageUploads.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/helpers/getGenericUploadError.ts"),
				y = r("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				E = r("./src/reddit/helpers/media/index.ts"),
				_ = r("./src/reddit/models/Emoji/index.ts"),
				O = r("./src/reddit/models/Image/index.tsx"),
				h = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/emojis.ts"),
				S = r("./src/reddit/selectors/subreddit.ts");
			const g = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				T = Object(p.a)(g),
				D = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				j = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				v = Object(p.a)(D),
				A = Object(p.a)(j),
				w = "GET_ALL_EMOJIS_PENDING",
				R = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				P = Object(p.a)(w),
				L = Object(p.a)(R),
				N = Object(p.a)(C),
				k = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				x = Object(p.a)(k),
				U = e => ({
					text: s.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: G(e)
				}),
				M = ({
					imageData: e,
					subredditId: t
				}) => async (r, s, n) => {
					const a = s(),
						l = Object(S.Q)(a, {
							subredditId: t
						}).name;
					r(Object(b.k)(e));
					const p = e.file,
						f = await Object(E.g)(p),
						m = await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
							method: c.ib.POST,
							data: {
								filepath: r,
								mimetype: s
							}
						}))(n.apiContext(), l, p.name, f);
					let y = !1;
					if (m.ok) {
						const t = await (async (e, t, r) => Object(i.a)(r, t))(n.apiContext(), m.body.s3UploadLease, p);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(O.d)(e), !1;
							const n = decodeURIComponent(t.body.PostResponse.Location),
								a = m.body.websocketUrl,
								c = Object(O.n)(e, n, a);
							r(Object(b.j)(c)), y = !0
						} else {
							const s = Object(O.k)(e, t.error);
							r(Object(b.i)(s))
						}
					} else {
						const t = Object(O.k)(e, m.error);
						r(Object(b.i)(t))
					}
					return y
				}, F = (e, t) => async (r, s, n) => {
					const {
						imageData: a,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, m = Object(y.a)(a.url), E = s(), _ = Object(S.Q)(E, {
						subredditId: i
					}).name, h = await (async (e, t, r, s, n) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.ib.POST,
						data: {
							s3_key: r,
							name: s,
							mod_flair_only: n.modFlairOnly,
							post_flair_allowed: n.postFlairAllowed,
							user_flair_allowed: n.userFlairAllowed
						}
					}))(n.apiContext(), _, m, l, p);
					if (!h.ok) {
						const s = Object(O.k)(a, h.error);
						r(Object(b.i)(s)), r(Object(f.f)(U(e))), t && t.close()
					}
					return h.ok
				}, G = e => async (t, r, s) => {
					const {
						imageData: n,
						subredditId: a,
						emojiName: c,
						settings: o
					} = e;
					if (t(Object(b.k)(n)), !n.websocketUrl) return t(Object(f.f)({
						text: "Could not upload emoji"
					}));
					let d;
					const i = new WebSocket(n.websocketUrl);
					return i.onopen = async () => {
						d = await F(e, i)(t, r, s)
					}, i.onmessage = r => {
						const s = JSON.parse(r.data);
						if ("success" === s.type) {
							d = !0;
							const e = s.payload.emoji_url,
								r = Object(O.o)(n, e);
							t(Object(b.l)(r));
							const i = Object(_.e)(c, r.url, a, o);
							t(T(i)), t(B(a))
						} else {
							const r = Object(m.a)(c),
								s = Object(O.k)(n, r);
							t(Object(b.i)(s)), t(Object(f.f)(U(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(m.a)(c),
							a = Object(O.k)(n, s);
						t(Object(b.i)(a)), t(Object(f.f)(U(e))), i.close()
					}, d
				}, B = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r();
					if (Object(I.a)(n, e)) return;
					const a = Object(S.Q)(n, {
						subredditId: e
					}).name;
					t(P(e));
					const c = await l(s(), a);
					if (c.ok) {
						const r = c.body;
						t(L({
							subredditId: e,
							data: r
						}))
					} else t(N({
						subredditId: e,
						error: c.error
					}))
				}, H = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(B(e))
				}, V = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(S.Q)(i, {
							subredditId: t
						}).name,
						p = await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${r}/emoji/${t}`,
							method: c.ib.DELETE,
							type: "json"
						}))(a(), e, l);
					if (p.ok) {
						r(v({
							emojiName: e,
							subredditId: t
						})), r(f.f({
							kind: h.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else r(A(p.error)), r(f.f({
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, q = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(S.Q)(i, {
							subredditId: e
						}).name;
					if ((await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: c.ib.POST,
							data: {
								subreddit: t,
								enable: r
							}
						}))(a(), l, t)).ok) {
						r(x({
							subredditId: e,
							emojisEnabled: t
						}))
					} else r(f.f({
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, K = "EMOJI_CUSTOM_SIZE_UPDATED", W = Object(p.a)(K), $ = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(S.Q)(i, {
							subredditId: e
						}).name;
					(await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: c.ib.POST,
						data: r
					}))(a(), l, t)).ok ? r(W({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.f({
						kind: h.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, Q = "EMOJI_PERMISSIONS_UPDATED", Y = Object(p.a)(Q), z = (e, t, r, n) => async (a, i, {
					apiContext: l
				}) => {
					const p = i(),
						b = Object(S.Q)(p, {
							subredditId: n
						}).name;
					(await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${r}/emoji_permissions.json`,
						method: c.ib.POST,
						data: {
							name: t,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed,
							mod_flair_only: s.modFlairOnly
						}
					}))(l(), e, b, r)).ok ? (a(Y({
						emojiName: e,
						isSnoomoji: t,
						settings: r,
						subredditId: n
					})), a(f.f({
						kind: h.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(f.f({
						kind: h.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				n = "MOD_PAGE_EVENT_POSTS_FAILED",
				a = "MOD_PAGE_EVENT_POSTS_PENDING",
				c = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				o = "START_EVENT_NOW_SUCCESS",
				d = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/experiments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			r("./src/reddit/endpoints/user/index.ts"), r("./src/reddit/models/Post/index.ts"), r("./src/reddit/selectors/telemetry.ts");
			const n = "EXPERIMENTS__REQUEST_LOADED",
				a = (Object(s.a)("EXPERIMENTS__REQUEST_PENDING"), Object(s.a)("EXPERIMENTS__REQUEST_FAILED"), Object(s.a)(n), "EXPERIMENTS__SET_EXPERIMENT_OVERRIDE"),
				c = Object(s.a)(a)
		},
		"./src/reddit/actions/exportImportStyles.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return I
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/loadWithRetries/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/structuredStyles/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/StructuredStyles/index.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/selectors/subreddit.ts");
			const l = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				b = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				f = Object(a.a)(l),
				m = Object(a.a)(p),
				y = Object(a.a)(b),
				E = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				_ = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				O = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				h = e => async (t, a) => {
					t(f());
					const c = a(),
						d = Object(u.Q)(c, {
							subredditId: e
						}).name,
						l = c.structuredStyles.models[e],
						p = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ExportTheme")]).then(r.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, d);
					b.ok ? (t(m()), t(Object(o.f)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(y(b.error)), t(Object(o.f)({
						kind: i.b.Error,
						text: s.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, I = e => async (t, a) => {
					t(E());
					const u = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ImportTheme")]).then(r.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(_()), t(Object(o.f)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(c.d)(Object(d.j)(l.attributes)))) : (t(O(l.error)), t(Object(o.f)({
						kind: i.b.Error,
						text: s.fbt._("Sorry, theme failed to import", null, {
							hk: "4BqW32"
						})
					})))
				}
		},
		"./src/reddit/actions/flairManagement/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "FLAIR_PREVIEW_EXAMPLE_POST_CREATED",
				n = "FLAIR_PREVIEW_EXAMPLE_POST_DELETED"
		},
		"./src/reddit/actions/googleOneTap/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/constants/experiments.ts"),
				c = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/activeModalId.ts"),
				d = r("./src/reddit/selectors/experiments/googleOneTap.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "GOOGLE_ONE_TAP_ENABLED",
				l = Object(s.a)(u),
				p = () => async (e, t) => {
					const r = t(),
						s = Object(i.K)(r),
						n = Object(d.b)(r);
					s && Object(d.d)(n) && e(l())
				}, b = () => async (e, t) => {
					const r = t(),
						s = Object(i.K)(r),
						a = Object(d.b)(r),
						c = !!Object(o.a)(r);
					s || c || !Object(d.e)(a) && !Object(d.d)(a) || e(Object(n.f)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: a.ab
					})
				}
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				n = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "n", (function() {
				return y
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "t", (function() {
				return S
			})), r.d(t, "u", (function() {
				return g
			})), r.d(t, "v", (function() {
				return T
			})), r.d(t, "w", (function() {
				return D
			})), r.d(t, "x", (function() {
				return j
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				n = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				a = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				c = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				i = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				y = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				E = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				_ = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				O = "GOVERNANCE__TRANSFER_FAILURE",
				h = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				S = "GOVERNANCE__TRANSFER_SUCCESS",
				g = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				T = "GOVERNANCE__WALLETS_FETCH_PENDING",
				D = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				j = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/actions/toaster.ts"),
				n = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = r("./src/reddit/models/Toast/index.ts");

			function c(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(n.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "f", (function() {
				return A
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "h", (function() {
				return U
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/config.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/reddit/models/Poll/index.ts"),
				p = r("./src/redditGQL/operations/PollVote.json"),
				b = r("./src/reddit/endpoints/governance/requester.ts");
			var f = r("./src/reddit/endpoints/governance/wallet.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/Vote/index.ts"),
				E = r("./src/reddit/selectors/crypto/points.ts"),
				_ = r("./src/reddit/actions/governance/constants.ts"),
				O = r("./src/reddit/actions/governance/errorToast.ts");
			const h = Object(n.a)(_.b),
				I = Object(n.a)(_.c),
				S = Object(n.a)(_.e),
				g = (Object(n.a)(_.f), Object(n.a)(_.g), Object(n.a)(_.h)),
				T = Object(n.a)(_.i),
				D = Object(n.a)(_.j),
				j = Object(n.a)(_.k),
				v = Object(n.a)(_.q),
				A = Object(n.a)(_.r),
				w = Object(n.a)(_.s),
				R = Object(n.a)(_.t),
				C = Object(n.a)(_.u),
				P = Object(n.a)(_.v),
				L = Object(n.a)(_.w),
				N = Object(n.a)(_.x),
				k = (e, t) => async (r, s, {
					apiContext: n,
					gqlContext: a
				}) => {
					let c, d = s().polls.models[e];
					if (r(D({
							pollId: e
						})), (c = d.type === l.a.GA ? await ((e, t, r) => Object(u.a)(e, {
								...p,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(a(), e, t) : await
							function(e, t, r, s) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${i.a.metaUrl}/polls/${t}/${r}/votes/me/${s}`
								})
							}(n(), d.subredditId, e, t)).ok) {
						if (d.type === l.a.GA) {
							const {
								options: e
							} = c.body.data.updatePostPollVoteState.poll;
							r(S({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else r(j(c.body));
						const n = s();
						if ((d = n.polls.models[e]) && Object(l.d)(d)) {
							const {
								postId: e
							} = d, t = n.posts.models[e];
							t && t.voteState === y.a.notVoted && r(Object(o.db)(e))
						}
					} else r(T({
						pollId: e,
						error: c.error || c.errors[0].message
					})), Object(O.a)(r, c.error || c.errors[0].messsage)
				}, x = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					var u;
					r(w());
					const l = n().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(b.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${i.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(o(), {
						...e,
						contentId: l
					});
					p.ok ? (r(R({
						...p.body,
						subredditId: e.subredditId
					})), r(Object(d.f)({
						kind: m.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(a.a)(e.amount)), s.fbt._param("tokenName", (null === (u = Object(E.b)(n(), e.subredditId)) || void 0 === u ? void 0 : u.name) || ""), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(c.f)())) : (r(v({
						error: p.error
					})), Object(O.a)(r, p.error))
				}, U = e => async (t, r, {
					apiContext: s
				}) => {
					t(P());
					const n = await Object(f.a)(s(), e);
					n.ok ? t(L(n.body)) : t(C({
						error: n.error
					}))
				}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return s
			})), r.d(t, "g", (function() {
				return n
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "l", (function() {
				return c
			})), r.d(t, "k", (function() {
				return o
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			}));
			const s = "SUBREDDIT__FLAIRED_USERS_PENDING",
				n = "SUBREDDIT__FLAIRED_USERS_LOADED",
				a = "SUBREDDIT__FLAIRED_USERS_FAILED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				o = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				d = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				i = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				f = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/harbergerTax/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			}));
			const s = "HARBERGER_TAX__BANNER_MANAGE_MODAL_OPENED",
				n = "HARBERGER_TAX__BANNER_PURCHASE_MODAL_OPENED",
				a = "HARBERGER_TAX__BANNER_CRYPTO_MANAGE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				o = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
				d = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				i = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
				u = "HARBERGER_TAX__BANNER_UPDATE_FAILURE",
				l = "HARBERGER_TAX__BANNER_UPDATE_PENDING",
				p = "HARBERGER_TAX__BANNER_UPDATE_SUCCESS"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "IMAGE_OCR_ALT_TEXT__LOADED",
				n = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/isTrackingCrossposts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/post/index.tsx");
			const a = "TRACKING_CROSSPOSTS_LOADED",
				c = Object(s.a)(a),
				o = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = await Object(n.e)(s(), {
						postId: e
					});
					if (a.ok) {
						const {
							isTrackingCrossposts: r
						} = a.body.data.postInfoById;
						t(c({
							[e]: r
						}))
					}
				}
		},
		"./src/reddit/actions/leaderboard/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				n = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				a = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				n = "LINKED_POSTS__POSTS_FAILED",
				a = "LINKED_POSTS__ELIGIBILITY_LOADED"
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return s
			})), r.d(t, "r", (function() {
				return n
			})), r.d(t, "s", (function() {
				return a
			})), r.d(t, "t", (function() {
				return c
			})), r.d(t, "u", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "A", (function() {
				return g
			})), r.d(t, "B", (function() {
				return T
			})), r.d(t, "z", (function() {
				return D
			})), r.d(t, "y", (function() {
				return j
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "w", (function() {
				return A
			})), r.d(t, "x", (function() {
				return w
			})), r.d(t, "d", (function() {
				return R
			}));
			const s = "MULTIREDDIT__MORE_POSTS_FAILED",
				n = "MULTIREDDIT__MORE_POSTS_LOADED",
				a = "MULTIREDDIT__MORE_POSTS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				d = "MULTIREDDIT__CREATE_FAILURE",
				i = "MULTIREDDIT__CREATE_PENDING",
				u = "MULTIREDDIT__CREATE_SUCCESS",
				l = "MULTIREDDIT__DELETE_PENDING",
				p = "MULTIREDDIT__DELETE_SUCCESS",
				b = "MULTIREDDIT__DELETE_FAILURE",
				f = "MULTIREDDIT__DUPLICATE_PENDING",
				m = "MULTIREDDIT__DUPLICATE_SUCCESS",
				y = "MULTIREDDIT__DUPLICATE_FAILURE",
				E = "MULTIREDDIT__EDIT_FAILURE",
				_ = "MULTIREDDIT__EDIT_PENDING",
				O = "MULTIREDDIT__EDIT_SUCCESS",
				h = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				S = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				g = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				T = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				D = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				j = 10,
				v = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				A = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var R;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(R || (R = {}))
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			}));
			const s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				n = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				d = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				i = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED"
		},
		"./src/reddit/actions/notifications/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			const s = "PUSH__GET_PREFERENCES_PENDING",
				n = "PUSH__GET_PREFERENCES_LOADED",
				a = "PUSH__GET_PREFERENCES_FAILED",
				c = "PUSH__SET_PREFERENCES_PENDING",
				o = "PUSH__SET_PREFERENCES_LOADED",
				d = "PUSH__SET_PREFERENCES_FAILED"
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			}));
			const s = "INBOX_NOTIFICATIONS__PENDING",
				n = "INBOX_NOTIFICATIONS__LOADED",
				a = "INBOX_NOTIFICATIONS__FAILED",
				c = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				o = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				d = "INBOX_NOTIFS__MARK_AS_READ",
				i = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX",
				u = "INBOX_NOTIFS_MARK_ALL_AS_READ"
		},
		"./src/reddit/actions/nps.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "d", (function() {
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/config.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts");
			var i = r("./node_modules/@r/frames/compiled.js"),
				u = r("./node_modules/lodash/debounce.js"),
				l = r.n(u),
				p = function(e) {
					document.body.appendChild(function(e) {
						let t;
						const r = l()((function() {
							t && t.contentWindow && i.postMessage(t.contentWindow, "resize.asknicely")
						}), 500);
						return function() {
							return t = function() {
								const t = document.createElement("iframe");
								return t.src = e, t.setAttribute("allowTransparency", "true"), t.style.display = "block", t.style.width = "100%", t.style.height = "1px", t.style.background = "transparent", t.style.border = "none", t
							}(), i.listen("embedjail"), i.receiveMessage(t.contentWindow, "open.embedjail", (function(e) {
								var s;
								s = e.detail, t.style.width = s.dimensions.width, t.style.height = s.dimensions.height, t.style.display = "block", t.style.position = "fixed", t.style.bottom = 0, t.style.zIndex = 2147483647, window.addEventListener("resize", r)
							})), i.receiveMessage(t.contentWindow, "close.embedjail", (function(e) {
								t.parentElement.removeChild(t), i.stopListening("asknicely"), window.removeEventListener("resize", r), t = void 0
							})), window.addEventListener("message", (function(e) {
								"https://live.asknice.ly" !== e.origin && "https://reddit.asknice.ly" !== e.origin || e.data && t && t.contentWindow && i.postMessage(t.contentWindow, e.data + ".asknicely")
							})), t
						}
					}(e)())
				};
			const b = "NPS__URL_PENDING",
				f = "NPS__URL_LOADED",
				m = "NPS__URL_FAILED",
				y = Object(s.a)(b),
				E = Object(s.a)(f),
				_ = Object(s.a)(m);
			let O = !1;
			const h = () => async (e, t, r) => {
				const s = t();
				if (s.nps.pending) return;
				if (O) return;
				e(y());
				const i = s.platform.currentPage && s.platform.currentPage.queryParams.feature || "",
					u = !!s.user.account,
					l = await ((e, t, r) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${r?n.a.oauthUrl:n.a.apiUrl}/api/jail/asknicely${r?"":".json"}`,
						method: a.ib.GET,
						traceRequestName: "get_nps_survey"
					}))(r.apiContext(), i, u);
				if (l.ok) {
					const t = l.body;
					t.dest ? (e(E(t)), p(t.dest), O = !0) : e(_())
				} else e(_())
			}
		},
		"./src/reddit/actions/nsfwLinkedPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "NSFW_LINKED_POSTS__POSTS_LOADED",
				n = "NSFW_LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/page.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return I
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "e", (function() {
				return j
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/reddit/actions/pages/subreddit.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/pageTitle.ts"),
				o = r("./src/config.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				u = r("./src/reddit/endpoints/me/index.ts"),
				l = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = r("./src/reddit/actions/pages/appeal/constants.ts");
			const b = `${o.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				f = Object(d.a)(p.b),
				m = Object(d.a)(p.a);
			var y = r("./src/reddit/actions/redditEmbed.ts"),
				E = r("./src/reddit/actions/users.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				O = r("./src/lib/makeListingKey/index.ts"),
				h = r("./src/lib/matchRoute/index.ts");
			const I = e => async t => {
				await t(Object(y.c)(e, !0))
			}, S = () => async e => {
				await e((() => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						n = await Object(u.a)(r());
					if (n.ok && n.body)
						if (n.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = b;
								window.location.href = e
							} else e(f(n.body));
					else Object(l.a)(e, s);
					else e(m(n.error))
				})())
			}, g = (e, t, r) => async (c, o, {
				routes: d
			}) => {
				const i = o(),
					u = (t || i.platform.currentPage).routeMatch.match,
					l = Object(h.a)(u.url, d);
				if (!l) return;
				const p = e.metaKey || e.ctrlKey || 1 === e.button;
				if (l.route && l.route.meta && (l.route.meta.name === a.Kb.INDEX || l.route.meta.name === a.Kb.MULTIREDDIT || l.route.meta.name === a.Kb.SUBREDDIT)) p ? window.open(u.url) : r ? c(Object(s.b)(u.url)) : await c(l.route.action(u, !0));
				else if (l.match && l.match.params && l.match.params.subredditName) {
					const {
						subredditName: e
					} = l.match.params, t = `/r/${e}/`;
					if (p) window.open(t);
					else if (r) c(Object(s.b)(t));
					else {
						const r = Object(O.a)(e, a.V.HOT);
						await c(Object(s.b)(t)), c(Object(n.subredditDataRequested)(r, e, {}))
					}
				}
			}, T = () => async (e, t) => {
				const r = t();
				e(i.l({
					title: c.b()
				})), Object(_.K)(r) || await e(E.s())
			}, D = () => async e => e(i.l({
				title: c.b()
			})), j = e => async (t, s) => {
				const n = s();
				t(i.l({
					title: c.h()
				})), Object(_.K)(n) || await t(E.s());
				const a = Object(_.K)(n);
				if (e.queryParams.thanks && a) {
					const e = await r.e("GoldPurchasePaymentActions").then(r.bind(null, "./src/reddit/actions/goldPurchaseModals/payment.ts")).then(e => e.paymentCompleted),
						s = await r.e("GoldPurchasePaymentActions").then(r.bind(null, "./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts")).then(e => e.openPremiumPurchaseModal);
					setTimeout(() => {
						t(s()), t(e({
							confirmed: !1
						}))
					}, 1e3)
				}
			}
		},
		"./src/reddit/actions/pages/appeal/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "APPEAL_PAGE_LOADED",
				n = "APPEAL_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/chatSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return S
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "f", (function() {
				return P
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/difference.js"),
				a = r.n(n),
				c = r("./src/telemetry/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/redditGQL/operations/GetSubredditChatSettings.json"),
				p = r("./src/lib/makeGqlRequest/index.ts");
			var b = (e, t) => Object(p.a)(e, {
					...l,
					variables: t
				}),
				f = r("./src/redditGQL/operations/UpdateSubredditChatSettings.json");
			var m = (e, t) => Object(p.a)(e, {
					...f,
					variables: t
				}),
				y = r("./src/reddit/selectors/telemetry.ts"),
				E = r("./src/telemetry/models/Event.ts");
			var _ = r("./src/reddit/models/ChatSettingsPage/index.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/chat.ts"),
				I = r("./src/reddit/selectors/chatSettingsPage.ts");
			const S = "FETCH_CHAT_SETTINGS__LOADED",
				g = "FETCH_CHAT_SETTINGS__FAILED",
				T = "FETCH_CHAT_SETTINGS__PENDING",
				D = "UPDATE_CHAT_SETTINGS__LOADED",
				j = Object(d.a)(S),
				v = Object(d.a)(g),
				A = Object(d.a)(T),
				w = Object(d.a)(D),
				R = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(A(s)), !1)
				}, C = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = {
						subredditId: e
					};
					if (await t(R(e))) return;
					let a = null;
					const c = await b(s(), n);
					if (c.ok) {
						const t = c.body || {},
							s = t.data && t.data.subredditInfoById,
							o = s && s.chatSettings,
							d = !Object(h.c)(r(), n),
							i = Object(_.c)(o, e, d);
						a = {
							...n,
							chatSettings: i
						}
					}
					if (a) t(j(a));
					else {
						const r = c.error || {
							type: o.H.UNKNOWN_ERROR
						};
						t(v({
							...n,
							error: r
						})), i.c.withScope(t => {
							t.setExtra("info", {
								subredditId: e,
								responseBody: c.body,
								responseOk: c.ok
							}), i.c.captureMessage("Missing subreddit chat settings!")
						})
					}
				}, P = (e, t, r) => async (n, c, {
					gqlContext: d
				}) => {
					if (await n(R(e))) return [];
					let i, l = !1;
					const p = a()(r, t),
						b = Object(_.b)(p);
					if (b && b.length) {
						const t = {
								subredditId: e,
								subredditChatSettings: b
							},
							r = await m(d(), {
								input: t
							});
						if (r.ok) {
							const e = (r.body || {}).data.updateSubredditChatSettings;
							l = !!e && e.ok
						} else i = r && r.error || {
							type: o.H.UNKNOWN_ERROR
						}
					}
					return l ? (n(w({
						subredditId: e,
						chatSettings: r
					})), n(N(t, p)), r) : (i && n(v({
						subredditId: e,
						error: i
					})), n(w({
						subredditId: e,
						chatSettings: t
					})), n(Object(u.f)({
						duration: u.a,
						id: "CHAT_SETTING_UPDATE_ERROR",
						kind: O.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3HpR6h"
						})
					})), t)
				}, L = {
					start_chatting_opt_out: (e, t, r) => ({
						source: E.b.Chat,
						action: E.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(y.subreddit)(e),
						setting: {
							oldValue: t,
							value: r
						},
						...Object(y.defaults)(e)
					})
				}, N = (e, t) => async (r, s) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const r = L[t.settingId],
								n = e.find(e => e.settingId === t.settingId);
							if (r && n) {
								const e = r(s(), n.state, t.state);
								Object(c.a)(e)
							}
						}
					})
				}
		},
		"./src/reddit/actions/pages/profileModSettings.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PROFILE_MOD_SETTINGS_LOADED", (function() {
				return u
			})), r.d(t, "profileModSettingsRequested", (function() {
				return p
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/preferences.ts"),
				a = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				o = r("./src/reddit/helpers/trackers/screenview.ts"),
				d = r("./src/reddit/models/User/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				l = Object(s.a)(u),
				p = e => async (t, r) => {
					const s = [t(n.x()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(s);
					const u = Object(i.k)(r());
					u ? (await t(Object(a.b)(Object(d.e)(u))), t(l()), Object(o.p)(r(), !0)) : Object(c.a)(t, r())
				}
		},
		"./src/reddit/actions/pages/report/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "REPORT_PAGE__FAILED",
				n = "REPORT_PAGE__PENDING",
				a = "REPORT_PAGE__LOADED",
				c = "REPORT_PAGE_INITIAL_REASON__SET"
		},
		"./src/reddit/actions/pages/subredditWiki/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_PENDING",
				n = "PAGE__SUBREDDIT_WIKI_PAGE_LOADED",
				a = "PAGE__SUBREDDIT_WIKI_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/userDataRequest/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "d", (function() {
				return y
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/me/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/UserDataExportEligibility.json"),
				o = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/selectors/userDataRequest.ts");
			const u = "USER_DATA_REQUEST_PAGE_LOADING",
				l = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				b = Object(s.a)(u),
				f = Object(s.a)(l),
				m = Object(s.a)(p),
				y = () => async (e, t, {
					apiContext: r,
					gqlContext: s
				}) => {
					const u = t(),
						l = Object(d.k)(u),
						p = Object(i.b)(u);
					if (l && p.success) return;
					e(b());
					const y = await Object(n.a)(r());
					if (!y.ok || !y.body) return void e(m(y.error));
					if (!y.body.account) return void Object(o.a)(e, u);
					const E = await (e => Object(a.a)(e, {
						...c
					}))(s());
					if (!E.ok) return void e(m());
					const _ = y.body,
						O = E.body;
					e(f({
						account: _.account,
						userDataExportEligibility: O.data.identity.userDataExportEligibility.isUserEligibleForDataExport
					}))
				}
		},
		"./src/reddit/actions/polls.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "POLLS__POLL_CREATION_UPDATED",
				a = Object(s.a)(n)
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "t", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "r", (function() {
				return l
			})), r.d(t, "s", (function() {
				return p
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "o", (function() {
				return S
			}));
			const s = "CREATE_COLLECTION_PENDING",
				n = "CREATE_COLLECTION_SUCCESS",
				a = "CREATE_COLLECTION_FAILED",
				c = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				o = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				i = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				b = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				m = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				y = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				E = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				S = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return L
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "d", (function() {
				return G
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/uuid/v4.js"),
				a = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/actions/upload.ts"),
				l = r("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts");
			var m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				y = r("./src/reddit/helpers/imagePreview/index.ts"),
				E = r("./src/reddit/helpers/media/index.ts"),
				_ = r("./src/reddit/models/Upload/index.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				h = r("./src/telemetry/index.ts");
			const I = e => ({
				...O.defaults(e),
				screen: O.screen(e),
				profile: O.profile(e),
				subreddit: O.subreddit(e)
			});
			var S = r("./src/reddit/helpers/trackers/postComposer.ts"),
				g = r("./src/reddit/models/Gold/Powerups/index.ts"),
				T = r("./src/reddit/models/PostCreationForm/index.ts"),
				D = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/gold/powerups/index.ts"),
				v = r("./src/reddit/selectors/postCreations.ts"),
				A = r("./src/reddit/actions/postCreation/constants.ts"),
				w = r("./src/reddit/actions/postCreation/general.ts");
			const R = Object(d.a)(A.u),
				C = Object(d.a)(A.v),
				P = Object(d.a)(A.t),
				L = e => async (t, r) => {
					t(R());
					const s = e.map(({
						url: e,
						uploadKey: r
					}) => {
						const s = Object(E.a)(Object(E.c)(e), "poster.png");
						return t(U(s, r))
					});
					await Promise.all(s);
					const n = r().uploads,
						a = e.map(({
							uploadKey: e
						}) => n[e]).find(e => e.status !== _.a.SUCCESS);
					t(a ? P(a.error) : C())
				}, N = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const k = "RTE",
				x = "GALLERY",
				U = (e, t, r, n) => async (a, o, {
					apiContext: d
				}) => {
					const i = Object(v.h)(o()),
						l = Date.now();
					let T = null,
						D = !1,
						A = !1,
						w = !1;
					const R = e => {
						if (!w && r && D) {
							w = !0;
							const s = o(),
								n = Date.now() - l,
								a = Object(m.c)(m.a.PostComposer);
							A ? (async ({
								state: e,
								uploadKey: t,
								assetId: r,
								isCanceled: s,
								fileSource: n,
								uploadDuration: a,
								correlationId: c
							}) => {
								const o = e.uploads[t],
									d = s || o.status === _.a.CANCELED,
									{
										file: i,
										url: u,
										metadata: l,
										error: p
									} = o,
									b = l.mimetype || i.type,
									f = b.startsWith("video/"),
									m = o.status === _.a.SUCCESS;
								let y = "";
								p ? y = JSON.stringify(p) : d && (y = "canceled");
								const E = {
									width: l.width,
									height: l.height,
									duration: l.videoDuration && Math.round(1e3 * l.videoDuration)
								};
								Object(h.a)({
									source: f ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: c,
									noun: f ? "video" : "image",
									...I(e),
									actionInfo: {
										...O.actionInfo(e),
										success: m,
										...y ? {
											reason: y
										} : {}
									},
									media: {
										mimetype: b,
										uploadDuration: a,
										source: n,
										fileName: i.name,
										size: i.size,
										type: f ? "video" : "image",
										...r ? {
											id: r
										} : {},
										...u ? {
											url: u
										} : {},
										...E
									}
								})
							})({
								state: s,
								uploadKey: t,
								assetId: T,
								isCanceled: e,
								fileSource: r,
								uploadDuration: n,
								correlationId: a
							}) : S.u(s, t)
						}
					};
					return await a(Object(u.l)(e, t, async l => {
						D = !0, Object(u.k)(l.id, () => {
							R(!0)
						});
						const {
							error: m,
							metadata: _
						} = await async function(e, t, r) {
							const n = r && r.allowedPostTypes,
								a = r && r.name,
								o = await Object(E.g)(t) || t.type,
								d = Object(E.b)(t) || void 0;
							if (!d) return N("UNSUPPORTED_BROWSER");
							const i = {
								localUrl: d,
								mimetype: o
							};
							if (!o || !Object(E.i)(o)) return {
								error: {
									type: c.S
								}
							};
							if (o.startsWith("image/")) {
								if (n && !n.images) {
									const e = s.fbt._("Images are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return N(c.S, e)
								}
								if ("image/gif" === o) {
									if (t.size > c.Y) return N(c.K)
								} else if (t.size > c.ab) return N(c.Q);
								const e = await Object(y.a)(d);
								i.width = e.width, i.height = e.height
							} else if (o.startsWith("video/")) {
								const o = !(null == r || !r.id) && Object(j.o)(e, {
										subredditId: r.id,
										benefit: g.a.HdVideo
									}),
									l = o ? 2 * c.eb : c.eb;
								if (t.size > l) return N(c.jc);
								let p;
								try {
									p = await Object(E.h)(d, !0)
								} catch (u) {
									return N(c.S)
								}
								if (n) {
									const {
										videos: e,
										images: t
									} = n;
									if (t && !e && p.duration > c.fb) {
										const e = s.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [s.fbt._param("subredditName", a)], {
											hk: "46ULiz"
										});
										return N(c.S, e)
									}
									if (!t && !e) {
										const e = s.fbt._("Videos are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return N(c.S, e)
									}
								}
								const b = o ? 2 * c.db : c.db;
								if (p.duration > b) {
									const e = s.fbt._("Video is too long. Maximum video length is {duration} minutes.", [s.fbt._param("duration", (b / 60).toString())], {
										hk: "20nB6Q"
									});
									return N(c.S, e)
								}
								if (p.duration < c.lb) {
									const e = s.fbt._("Video is too short. Minimum video length is {duration} seconds.", [s.fbt._param("duration", c.lb.toString())], {
										hk: "49PSW8"
									});
									return N(c.S, e)
								}
								if (p.height < c.mb || p.width < c.nb) {
									const e = s.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [s.fbt._param("min_video_width", c.nb.toString()), s.fbt._param("min_video_height", c.mb.toString())], {
										hk: "2HSUGl"
									});
									return N(c.S, e)
								}
								if (t.size / p.duration < c.kb) {
									const e = s.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [s.fbt._param("min_bitrate", (c.kb / c.T).toString())], {
										hk: "1ehgDE"
									});
									return N(c.S, e)
								}
								i.height = p.height, i.width = p.width, i.videoDuration = p.duration, i.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: i
							}
						}(o(), e, i);
						if (m || !_) return {
							error: m
						};
						a(Object(u.m)({
							key: t,
							metadata: {
								fileSource: r,
								..._
							}
						})), A = !0, n && n();
						const O = e.name,
							h = await (async (e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: c.ib.POST,
								data: {
									filepath: t,
									mimetype: r
								}
							}))(d(), O, _.mimetype);
						return h.ok ? (T = h.body.asset.asset_id, {
							uploadLease: h.body.args
						}) : {
							error: h.error || void 0
						}
					}, !0)), R(!1), o().uploads[t] || null
				}, M = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r().uploads[e];
					n && !Object(_.c)(n) && await t(U(n.file, n.key, n.metadata.fileSource, void 0))
				}, F = (e, t, r) => async (n, c) => {
					const d = e.map((e, s) => new Promise(async s => {
							const c = Object(_.d)(r, a()().slice(-6));
							await n(U(e, c, t, () => s({
								uploadKey: c,
								isValid: !0
							}))), s({
								uploadKey: c,
								isValid: !1
							})
						})),
						u = await Promise.all(d),
						l = u.map(e => e.uploadKey);
					return n(((e, t = 3) => async (r, n) => {
						const {
							uploads: a
						} = n(), c = e.map(e => a[e]).filter(e => e.status === _.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = c.length > t ? t - 1 : c.length, u = c.length - d;
						c.slice(0, d).forEach(e => r(Object(i.f)({
							duration: i.a,
							kind: D.b.Error,
							text: Object(o.a)(e)
						}))), u > 0 && r(Object(i.f)({
							duration: i.a,
							kind: D.b.Error,
							text: s.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [s.fbt._plural(u, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(l)), u.filter(e => e.isValid).map(e => e.uploadKey)
				}, G = (e, t) => async (r, n) => {
					const a = n(),
						c = Object(v.U)(a),
						{
							items: o
						} = c,
						d = !o.length && 1 === e.length,
						p = Object(v.L)(a) && !d;
					let b = !1,
						f = e;
					if (p) {
						if (Object(T.v)(c)) return void r(Object(i.f)({
							kind: D.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(E.l)(e.type)) && r(Object(i.f)({
							kind: D.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(E.k)(e.type));
						const e = Math.max(0, l.b - o.length);
						f.length > e && (r(Object(i.f)({
							kind: D.b.Error,
							text: s.fbt._("You have hit the limit of {images_limit} images", [s.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), f = f.slice(0, e))
					} else f = f.slice(0, 1), b = !0, r(Object(u.j)(x, !0));
					const m = await r(F(f, t, x));
					if (!m.length) return;
					const y = m.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						_ = 0 === o.length;
					r(Object(w.d)({
						...c,
						items: b ? y : [...o, ...y],
						selectedKey: _ ? m[0] : m[m.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return Z
			})), r.d(t, "a", (function() {
				return ae
			})), r.d(t, "b", (function() {
				return de
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/telemetry/index.ts"),
				c = r("./src/reddit/actions/governance/index.ts"),
				o = r("./src/reddit/actions/pages/subreddit.ts"),
				d = r("./src/reddit/actions/postDraft.ts"),
				i = r("./src/reddit/actions/scheduledPosts/index.ts"),
				u = r("./src/reddit/actions/urlRequested.ts"),
				l = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = r("./src/config.ts"),
				b = r("./src/lib/convertToCamelCase/index.ts"),
				f = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				y = r("./src/lib/omitHeaders/index.ts"),
				E = r("./src/reddit/constants/headers.ts"),
				_ = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = r("./src/reddit/helpers/flair.ts"),
				h = r("./src/reddit/helpers/name/index.ts"),
				I = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = r("./src/reddit/models/Poll/index.ts"),
				g = r("./src/reddit/models/Post/index.ts"),
				T = r("./src/reddit/models/PostCreationForm/index.ts"),
				D = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function j(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const v = e => {
					switch (e.kind) {
						case T.o.CROSSPOST:
							return T.o.CROSSPOST;
						case T.o.LINK:
							return T.o.LINK;
						case T.o.POLL:
							return T.o.POLL;
						case T.o.MEDIA:
							return e.makeGif ? T.o.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				A = e => {
					switch (e.kind) {
						case T.o.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case T.o.MARKDOWN:
							return {
								text: e.markdown
							};
						case T.o.LINK:
						case T.o.MEDIA:
							return {
								url: e.url
							};
						case T.o.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case T.o.POLL:
							return e.poll.type === S.a.Prediction ? {
								duration: 999999,
								end_timestamp: j(e.poll.endDate),
								options: e.poll.options.map(e => e.text),
								prediction: !0,
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							} : {
								duration: Math.floor(e.poll.duration / 864e5),
								options: e.poll.options.map(e => e.text),
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							}
					}
				},
				w = e => {
					const t = Object(h.g)(e.destSubreddit.name);
					return {
						...e.destSubreddit.isProfile ? {
							sr: `u_${t}`,
							submit_type: "profile"
						} : {
							sr: t,
							submit_type: "subreddit"
						},
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? g.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== T.o.POLL ? {
							kind: v(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...A(e),
						...e.kind === T.o.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === T.o.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(O.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === T.i.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				R = async (e, t) => {
					if (!e.ok) return Object(I.b)(e);
					const r = e.body.json.data;
					let n = r.url;
					n || t.kind !== T.o.MEDIA || (n = await ((e, t) => new Promise(r => {
						const s = new WebSocket(e),
							n = e => {
								s.close(), clearTimeout(a), r(e)
							},
							a = setTimeout(() => {
								n("")
							}, t);
						s.onmessage = e => {
							const t = JSON.parse(e.data),
								r = "success" === t.type ? t.payload.redirect : "";
							n(r)
						}, s.onerror = e => {
							n("")
						}
					}))(r.websocket_url, 3e4));
					const a = r.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								r = t && t[1];
							return r ? `${s.Gb.Post}_${r}` : ""
						})(n),
						c = Object(m.parse)(n).path,
						o = r.drafts_count;
					return {
						...e,
						body: {
							id: a,
							path: c,
							draftsCount: o
						}
					}
				};
			var C = (e, t) => Object(f.a)(Object(y.a)(e, [E.a]), {
				endpoint: Object(D.a)(Object(_.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.ib.POST,
				data: w(t)
			}).then(async e => await R(e, t));
			var P = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				L = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				N = r("./src/reddit/featureFlags/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				x = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				U = r("./src/reddit/helpers/trackers/postComposer.ts"),
				M = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				F = r("./src/reddit/models/User/index.ts"),
				G = r("./src/reddit/selectors/postCreations.ts"),
				B = r("./src/reddit/selectors/postDraft.ts"),
				H = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				V = r("./src/reddit/selectors/user.ts"),
				q = r("./src/reddit/models/ScheduledPost/index.ts"),
				K = r("./src/reddit/actions/postCreation/constants.ts"),
				W = r("./src/reddit/actions/postCreation/general.ts"),
				$ = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const Q = Object(n.a)(K.w),
				Y = Object(n.a)(K.L),
				z = Object(n.a)(K.o),
				X = Object(n.a)(K.y),
				J = Object(n.a)(K.X),
				Z = Object(n.a)(K.F),
				ee = Object(n.a)(K.a),
				te = Object(n.a)(K.B),
				re = e => `/r/${e}/about/${q.r}`,
				se = (e, t) => {
					const r = e || {
							duration: s.A,
							options: []
						},
						{
							govType: n,
							newSubreddit: a,
							newTopMod: c
						} = Object(G.s)(t),
						o = {
							...r
						};
					return n && (o.type = n), o.type === S.a.ReplaceTopMod ? (o.params = {
						userName: c
					}, o.options = S.f[S.a.ReplaceTopMod]()) : o.type === S.a.Spinoff ? (o.params = {
						subreddit: a
					}, o.options = S.f[S.a.Spinoff](a)) : o.options = o.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), o
				},
				ne = e => {
					const t = e.uploads,
						r = Object(G.U)(e),
						n = Object(G.a)(e),
						a = Object(G.eb)(e);
					if (n === s.Tb.POST) return l.a.getPendingThumbnailUploads(a, t);
					if (n === s.Tb.MEDIA && r && r.items.length) {
						const {
							video: e
						} = r.items[0];
						if (e && e.thumbnail && !t[T.m]) return [{
							...e.thumbnail,
							uploadKey: T.m
						}]
					}
				},
				ae = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					let c = n();
					const {
						pending: o
					} = c.creations.api.post.submit, i = Object(B.g)(c);
					if (o || i) return;
					r(te(e)), c = n();
					const u = Object(G.a)(c),
						l = N.d.rteVideoPoster(c),
						p = ne(c),
						b = u === s.Tb.MEDIA;
					p && (l || b) && (await r($.f(p)), ne(n())) || (e === T.q.Draft ? await r(Object(d.r)(t.draftId)) : e === T.q.ScheduledPost && Object(H.r)(c) ? await r(ce(t)) : e === T.q.ScheduledPost ? await r(oe(t)) : await r(de(t)))
				}, ce = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						c = Object(G.bb)(n),
						o = Object(G.cb)(n, e),
						d = Object(G.h)(n),
						l = Object(H.r)(n);
					if (!(o && d.id && c && Object(x.f)(l))) return;
					const p = d.id,
						b = Object(H.a)(n, {
							subredditId: p,
							scheduledPostId: l
						});
					if (b && Object(a.a)(Object(M.r)(b)(n)), t(Q(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(G.v)(r()))) return;
					const {
						isPoll: f,
						polls: m
					} = Object(G.s)(n), y = se(m, n), E = {
						...Object(P.e)({
							poll: f ? y : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id,
							scheduledPostId: l
						})
					}, _ = await Object(L.a)(s(), E);
					if (_.ok) return t(Object(i.e)({
						subredditId: d.id
					})), void t(Object(u.a)(re(d.name), !1));
					const O = _.error;
					t(z(O))
				}, oe = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						c = Object(G.bb)(n),
						o = Object(G.cb)(n, e),
						d = Object(G.h)(n),
						l = Object(H.b)(n);
					if (!o || !d.id || !c) return;
					if (t(Q(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(G.v)(r()))) return;
					const {
						isPoll: p,
						polls: b
					} = Object(G.s)(n), f = se(b, n), m = {
						duration: f.duration,
						options: f.options
					}, y = {
						...Object(P.d)({
							poll: p ? m : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id
						}),
						creationToken: l
					}, E = await Object(P.a)(s(), y);
					if (E.ok) {
						t(Object(i.e)({
							subredditId: d.id
						}));
						const e = E.body.data.createScheduledPost.scheduledPost;
						return e && Object(a.a)(Object(M.o)(Object(k.d)(e))(n)), void t(Object(u.a)(re(d.name), !1))
					}
					const _ = E.error;
					t(z(_))
				}, de = e => async (t, r, {
					apiContext: n
				}) => {
					const a = r(),
						d = Object(G.cb)(a, e),
						{
							isPoll: i,
							polls: l
						} = Object(G.s)(a),
						m = se(l, a);
					if (!d) return;
					if (t(Q(d)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(G.v)(r()))) return;
					let O;
					const h = i && N.d.spPolls(a);
					if ((O = h ? await
							function(e, t, r) {
								const n = t.destSubreddit.id;
								return Object(f.a)(e, {
									method: s.ib.POST,
									endpoint: `${p.a.metaUrl}/polls/${n}`,
									type: "json",
									data: {
										poll: r,
										subredditId: n,
										...Object(b.a)(w(t))
									}
								}).then(async e => {
									const r = e.ok ? {
											...e,
											body: {
												json: {
													data: e.body
												}
											}
										} : e,
										s = await R(r, t);
									if (s.ok) {
										return {
											body: {
												...s.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: s.body,
										ok: !1,
										status: e.status
									}
								})
							}(n(), d, m) : i ? await ((e, t) => Object(f.a)(Object(y.a)(e, [E.a]), {
								endpoint: Object(D.a)(Object(_.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: s.ib.POST,
								data: w(t),
								type: "json"
							}).then(e => R(e, t)))(n(), {
								...d,
								kind: T.o.POLL,
								poll: m
							}) : d.kind === T.o.GALLERY ? await ((e, t) => Object(f.a)(Object(y.a)(e, [E.a]), {
								endpoint: Object(D.a)(Object(_.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: s.ib.POST,
								data: {
									...w(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => R(e, t)))(n(), d) : await C(n(), d)).ok) {
						const e = Object(V.k)(a),
							r = O.body;
						t(Y({
							draftId: d.draftId,
							response: r
						})), h && t(Object(c.c)({
							poll: r.poll
						}));
						const s = (r.path || `/user/${Object(F.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(o.subredditInvalidateListing)(d.destSubreddit.name)), t(Object(u.a)(s, !1))
					} else {
						if (i) {
							const e = O.error;
							t(X(e))
						}
						const e = O.error;
						e.type === s.H.BAD_CAPTCHA_ERROR ? t(ee()) : e.type === s.H.VALIDATION_ERROR ? t(J(e)) : e.type === s.H.SUBMIT_VALIDATION_ERROR ? t(Z(e)) : t(z(e))
					}
					const I = Object(W.m)(d.kind),
						S = O.ok && O.body && O.body.id && Object(g.s)(O.body.id),
						j = r();
					U.s(j, I, S)
				}
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "j", (function() {
				return U
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "i", (function() {
				return F
			})), r.d(t, "h", (function() {
				return G
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/endpoints/flair/index.ts"),
				i = r("./src/reddit/helpers/flair.ts"),
				u = r("./src/reddit/models/Flair/index.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/postFlair.ts"),
				b = r("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				m = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				y = Object(n.a)(f),
				E = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				_ = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				h = Object(n.a)(_),
				I = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				g = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				T = Object(n.a)(S),
				D = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				j = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				v = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				A = Object(n.a)(j),
				w = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				R = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				C = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(n.a)(R),
				L = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				N = Object(n.a)(C),
				k = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const a = s(),
						c = Object(b.Q)(a, {
							subredditId: e
						}).name;
					r(m());
					const o = await Object(d.k)(n(), c, t);
					if (o.ok) {
						r(y({
							subredditId: e,
							isEnabled: t
						}))
					} else r(E());
					return o.ok
				}, x = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const a = s(),
						c = Object(b.Q)(a, {
							subredditId: e
						}).name;
					r(O());
					const o = await Object(d.j)(n(), t, u.d.LinkFlair, c);
					if (o.ok) {
						r(h({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(I());
					return o.ok
				}, U = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						p = Object(b.Q)(i, {
							subredditId: t
						}).name;
					r(g());
					const f = await Object(d.f)(a(), e, p, u.d.LinkFlair);
					let m = f.ok && !(f.body && !1 === f.body.success);
					if (m) {
						const s = f.body;
						if (r(T({
								subredditId: t,
								template: s
							})), s.id) {
							const n = e.styleTemplate,
								a = i.structuredStyles.flairTemplate.models[s.id];
							n ? m = await r(Object(c.d)(t, s.id, n)) : a && (m = await r(Object(c.c)(t, s.id)))
						}
					}
					if (m) {
						const e = Object(o.e)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						r(Object(o.f)(e))
					} else {
						r(D());
						const n = Object(o.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						r(Object(o.f)(n))
					}
					return m
				}, M = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const c = n(),
						i = Object(b.Q)(c, {
							subredditId: t
						}).name;
					if (r(v()), (await Object(d.b)(a(), e, i)).ok) {
						r(A({
							subredditId: t,
							templateId: e
						}));
						const n = Object(o.e)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						r(Object(o.f)(n))
					} else {
						r(w());
						const n = Object(o.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						r(Object(o.f)(n))
					}
				}, F = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const c = n(),
						i = Object(p.d)(c, {
							subredditId: t
						}).templateIds,
						f = Object(b.Q)(c, {
							subredditId: t
						}).name;
					if (r(P({
							subredditId: t,
							templateIds: e
						})), (await Object(d.e)(a(), f, u.d.LinkFlair, e)).ok) {
						r(L());
						const e = Object(o.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						r(Object(o.f)(e))
					} else {
						r(N({
							subredditId: t,
							templateIds: i
						}));
						const n = Object(o.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						r(Object(o.f)(n))
					}
				}, G = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: r
				}) => async (s, n, {
					apiContext: c
				}) => {
					const o = e.flair.filter(e => !Object(i.q)(e.type));
					if (t && o.unshift(t), s(Object(a.R)({
							[e.id]: {
								flair: o
							}
						})), t) {
						const s = Object(i.g)(t);
						Object(d.h)(c(), e.id, r, s)
					} else Object(d.h)(c(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "c", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/forEach.js"),
				n = r.n(s),
				a = r("./node_modules/lodash/isEqual.js"),
				c = r.n(a),
				o = r("./node_modules/lodash/values.js"),
				d = r.n(o),
				i = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/reddit/actions/imageUploads.ts"),
				l = r("./src/reddit/helpers/media/index.ts"),
				p = r("./src/lib/constants/index.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				m = r("./src/reddit/constants/headers.ts");
			var y = r("./src/reddit/helpers/trackers/blade.ts"),
				E = r("./src/reddit/models/Image/index.tsx"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/telemetry/index.ts");
			const h = ({
				subredditId: e,
				flairId: t,
				imageKey: r,
				imageData: s
			}) => async (n, a, c) => {
				const o = a(),
					d = Object(_.Q)(o, {
						subredditId: e
					});
				if (!d) return !1;
				n(Object(u.k)(s));
				const i = await (async (e, t, r, s, n, a) => Object(b.a)(Object(f.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${r}`,
					method: p.ib.POST,
					data: {
						filepath: s,
						imagetype: n,
						mimetype: a
					}
				}))(c.apiContext(), d.name, t, s.file.name, r, await Object(l.g)(s.file));
				let y = !1;
				try {
					const e = await Object(u.g)(a(), i, s, E.a.FlairTemplates);
					e && n(Object(u.j)(e)), y = !0
				} catch (O) {
					if (O instanceof Error) throw O;
					n(Object(u.i)(O))
				}
				return y
			}, I = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", S = Object(i.a)(I), g = (e, t, r) => async (s, a, o) => {
				const {
					apiContext: i
				} = o;
				let l = a();
				const {
					pendingImages: I,
					...g
				} = r;
				let T = g;
				const D = Object(_.Q)(l, {
					subredditId: e
				});
				if (!D) return !1;
				const j = l.structuredStyles.flairTemplate.models[t];
				if (j && c()(j, T)) return !0;
				if (I) {
					const r = [];
					if (n()(I, (n, a) => {
							n && r.push(s(h({
								flairId: t,
								imageData: Object(E.m)(n),
								imageKey: a,
								subredditId: e
							})))
						}), !(await Promise.all(r)).every(e => e)) return !1;
					T = ((e, t, r) => {
						const s = {
							...e
						};
						return n()(t, (e, t) => {
							const n = e && r.imageUploads[e.id];
							n && n.kind === E.b.TempUploaded && (s[t] = n.url)
						}), s
					})(T, I, a())
				}
				l = a();
				let v = null,
					A = null;
				const w = [];
				try {
					(v = await Object(u.f)(l, E.a.FlairTemplates)) && (A = Object(u.m)(v)(s, a, o), w.push(...d()(v.imagesByKey)))
				} catch (L) {
					return !1
				}
				const R = await (async (e, t, r, s) => Object(b.a)(Object(f.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${r}`,
						method: p.ib.PUT,
						data: s
					}))(i(), D.name, t, T),
					C = j ? "edit_post_flair_template" : "save_post_flair_template",
					P = Object(y.e)(l, C);
				if (R.ok) {
					let e;
					if (A) try {
						await A, e = ((e, t, r) => {
							const s = {
								...e
							};
							return t.forEach(e => {
								const t = r.imageUploads[e.id];
								t && t.kind === E.b.Uploaded && (e.url === s.postBackgroundImage ? s.postBackgroundImage = t.url : e.url === s.postPlaceholderImage && (s.postPlaceholderImage = t.url))
							}), s
						})(T, w, a())
					} catch (L) {
						e = null
					} else e = T;
					s(S({
						flairId: t,
						template: e || T
					}))
				} else v && v.websocket.close();
				return Object(O.a)({
					...P,
					actionInfo: {
						...P.actionInfo,
						success: R.ok
					}
				}), R.ok
			}, T = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", D = Object(i.a)(T), j = (e, t) => async (r, s, {
				apiContext: n
			}) => {
				const a = s(),
					c = Object(_.Q)(a, {
						subredditId: e
					});
				if (!c) return !1;
				const o = await (async (e, t, r) => Object(b.a)(Object(f.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${r}`,
						method: p.ib.DELETE
					}))(n(), c.name, t),
					d = Object(y.e)(a, "delete_flair_template");
				return o.ok && r(D({
					flairId: t
				})), Object(O.a)({
					...d,
					actionInfo: {
						...d.actionInfo,
						success: o.ok
					}
				}), o.ok
			}
		},
		"./src/reddit/actions/postLevelCrowdControl.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/crowdControl/index.ts");
			const a = "POST_LEVEL_CC_LOADED",
				c = Object(s.a)(a),
				o = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = await Object(n.a)(s(), e);
					if (a.ok) {
						const r = a.body.data.postInfoById.crowdControlLevel;
						t(c({
							[e]: r
						}))
					}
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var i = r("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const u = "PRESENCE__PRESENTUSERS_LOADED",
				l = Object(s.a)(u),
				p = (e, t, r) => async (s, u, {
					apiContext: p
				}) => {
					const b = u();
					if (!Object(i.a)(b)) return;
					const f = new Set;
					e && Object.values(e).map(e => {
						e.authorId && f.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && f.add(e.authorId)
					});
					const m = await (async (e, t, r) => Object(a.a)(Object(c.a)(e, [o.a]), {
						endpoint: Object(d.a)(`${e.apiUrl}/api/presence`),
						method: n.ib.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: r || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const r = e.body.present_user_fullnames || [],
							s = new Set(r),
							n = {};
						return t.forEach(e => {
							n[e] = s.has(e)
						}), {
							presentUsers: n
						}
					}))(p(), Array.from(f), r);
					s(l(m))
				}
		},
		"./src/reddit/actions/product.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "h", (function() {
				return E
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/governance/errorToast.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts"),
				c = r("./src/reddit/endpoints/governance/products/badges.ts");
			const o = "PRODUCT__BADGE_PURCHASE_OPENED",
				d = "PRODUCT__BADGE_PURCHASE_SUCCESS",
				i = "PRODUCT__BADGE_PURCHASE_FAILURE",
				u = "PRODUCT__BADGE_PURCHASE_PENDING",
				l = "PRODUCT__FETCH_SUCCESS",
				p = "PRODUCT__FETCH_FAILURE",
				b = "PRODUCT__FETCH_PENDING",
				f = (Object(s.a)(o), Object(s.a)(d)),
				m = Object(s.a)(i),
				y = Object(s.a)(u),
				E = (Object(s.a)(l), Object(s.a)(p), Object(s.a)(b), ({
					productId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					const o = r(),
						d = o.products.models[e],
						i = o.user.account,
						u = !!o.products.api.purchase.pending[e];
					if (d && d.price && !u) {
						t(y({
							productId: e
						}));
						const r = await Object(c.c)(s(), {
							price: d.price,
							products: [{
								productId: e,
								quantity: "1"
							}],
							subredditId: d.subredditId
						});
						let o;
						if (r.ok && i && (o = await Object(a.c)(s(), d.subredditId, i.id)), r.ok) {
							if (o && o.ok) {
								const {
									badges: e,
									userOwnedBadges: s
								} = o.body;
								t(f({
									product: d,
									badges: e,
									userOwnedBadges: s,
									wallet: r.body.wallet
								}))
							}
						} else t(m({
							productId: e,
							error: r.error
						})), Object(n.a)(t, r.error)
					}
				})
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "b", (function() {
				return L
			}));
			var s = r("./src/lib/asyncActions/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/constants/euCookiePolicy.ts"),
				c = r("./node_modules/ts-error/lib/cjs.js"),
				o = r.n(c);
			class GraphQLRequestError_GraphQLRequestError extends o.a {
				constructor(e) {
					super(`An error occurred during a GraphQL request. The following response was received:\n\n${JSON.stringify(e,void 0,2)}`), this.response = e
				}
			}
			var d = r("./src/lib/reCaptchaEnterprise/index.ts"),
				i = r("./src/lib/sentry/index.ts");

			function u(e) {
				return t => async (r, s, n) => {
					const a = s();
					if (e(a)) return t(r, s, n)
				}
			}
			var l = r("./node_modules/lodash/every.js"),
				p = r.n(l),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./node_modules/os-browserify/browser.js"),
				m = r.n(f);
			const y = /\s+at.*(?:\(|\s)(.*)\)?/,
				E = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				_ = void 0 === m.a.homedir ? "" : m.a.homedir();
			const O = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? O(function(e, t = {}) {
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(y);
							if (null === t || !t[1]) return !0;
							const r = t[1];
							return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !E.test(r)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(y, (e, t) => e.replace(t, t.replace(_, "~"))) : e).join("\n")
					}(e.stack)) : String(e)).join("\n");
					super(t = "\n" + function(e, t = 1, r = {}) {
						const s = {
							indent: " ",
							includeEmptyLines: !1,
							...r
						};
						if ("string" != typeof e) throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
						if ("number" != typeof t) throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
						if ("string" != typeof s.indent) throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof s.indent}\``);
						if (0 === t) return e;
						const n = s.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
						return e.replace(n, s.indent.repeat(t))
					}(t, 4)), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
						value: e
					})
				}*[Symbol.iterator]() {
					for (const e of this._errors) yield e
				}
			}
			var h = r("./src/lib/makeGqlRequest/index.ts"),
				I = r("./src/redditGQL/operations/VerifyRecaptchaToken.json");
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
			var S = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/featureFlags/utils.ts"),
				T = r("./src/reddit/helpers/chooseVariant/index.ts"),
				D = r("./src/reddit/selectors/meta.ts");
			const j = e => S.d.reCaptchaEnterprise(e) && !Object(D.d)(e),
				v = e => !!Object(T.c)(e, {
					experimentEligibilitySelector: Object(g.d)(Object(g.b)(...a.d)),
					experimentName: b.Cd
				}),
				A = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				w = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				R = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				C = e => u(e => p()([j, v, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
					gqlContext: s
				}) => {
					t(R.requested());
					try {
						await (async (e, t) => {
							const r = await Object(h.a)(e, {
								...I,
								variables: {
									input: {
										token: t
									}
								}
							});
							if (!r.ok) throw new GraphQLRequestError_GraphQLRequestError(r);
							if (!("data" in r.body)) throw new MissingDataError_MissingDataError;
							const {
								ok: s,
								errors: n
							} = r.body.data.verifyRecaptchaToken;
							if (n && n.length > 0) throw new AggregateError_AggregateError(n);
							if (!s) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(s(), e), t(R.succeeded())
					} catch (n) {
						throw t(R.failed()), n
					}
				}),
				P = (e, t) => Object(g.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				L = (e = d.a.PageLoad) => u(e => p()([j, v, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
					const a = r();
					try {
						await t((() => u(e => p()([j, v, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async e => {
							e(A.requested());
							try {
								await d.b.loadScript(), e(A.succeeded())
							} catch (t) {
								throw e(A.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([j, v, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
							t(w.requested());
							try {
								const r = await d.b.execute(e);
								return t(w.succeeded({
									token: r
								})), r
							} catch (r) {
								throw t(w.failed()), r
							}
						}))({
							action: P(e, a)
						}));
						r && await t(C(r))
					} catch (c) {
						if (c instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof c.response.error && null !== c.response.error && c.response.error.type === n.i) return;
						i.c.withScope(e => {
							Object(i.a)(e, {
								serverLogging: !1
							}), i.c.captureException(c)
						})
					}
				})
		},
		"./src/reddit/actions/recentSubreddits/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "f", (function() {
				return n
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			const s = "SET_RECENT_SUBREDDITS",
				n = "SUBREDDIT_VISITED",
				a = "SUBREDDIT_SAVED",
				c = "COPY_SAVED_SUBREDDITS",
				o = "COPY_SAVED_ID_SUBREDDITS",
				d = 10
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			}));
			const s = "REPORT__PENDING",
				n = "REPORT__LOADED",
				a = "REPORT__FAILED",
				c = "REPORT_FLOW__TARGET_SET",
				o = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				d = "REPORT_FLOW__OPEN_CATEGORY",
				i = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportPageRules/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "REPORT_PAGE_RULES__LOADED"
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts");
			const i = "SITEWIDE_RULES_LOADED",
				u = "LIVESTREAMING_RULES_LOADED",
				l = Object(n.a)(i),
				p = Object(n.a)(u),
				b = () => async (e, t, {
					apiContext: r
				}) => {
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: a.ib.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							r = m(t.sitewide_rules);
						e(l(r))
					}
				}, f = () => async (e, t, {
					apiContext: r
				}) => {
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: a.ib.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							r = m(t.livestream_rules);
						e(p(r))
					}
				}, m = e => {
					let t = [];
					if (e && e.length > 2) {
						const r = {
							reasonTextToShow: s.fbt._("It's spam or abuse", null, {
								hk: "21rHqk"
							}),
							nextStepReasons: [e[0], e[1], e[2]]
						};
						4 === e.length && r.nextStepReasons && r.nextStepReasons.push(e[3]), t.push(r), t = t.concat(e.slice(e.length - 1))
					}
					return t
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return n
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "r", (function() {
				return O
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "x", (function() {
				return D
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "t", (function() {
				return v
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const n = "SCHEDULED_POSTS_REQUESTED",
				a = "SCHEDULED_POSTS_LOADED",
				c = "STANDALONE_SCHEDULED_POSTS_LOADED",
				o = "RECURRING_SCHEDULED_POSTS_LOADED",
				d = "SCHEDULED_POSTS_FAILED",
				i = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				p = "SCHEDULED_POST_MUTATE_FAILED",
				b = "STANDALONE_POST_MUTATE_SUCCESS",
				f = "RECURRING_POST_MUTATE_SUCCESS",
				m = "RECURRING_POST__EDIT_MODAL_LOAD",
				y = "RECURRING_POST__EDIT_LOAD",
				E = "STANDALONE_POST__EDIT_LOAD",
				_ = "SCHEDULED_POST__DELETE_SUCCESS",
				O = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				h = () => s.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				I = () => s.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				S = () => s.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				g = () => s.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				T = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				D = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				j = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				v = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "a", (function() {
				return I
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/telemetry/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/scheduledPosts/index.ts"),
				d = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				p = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				b = r("./src/reddit/models/ScheduledPost/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/routes/postCreation/index.ts"),
				y = r("./src/reddit/selectors/scheduledPosts/index.ts");
			const E = Object(c.a)(d.n),
				_ = Object(c.a)(d.b),
				O = (e, t) => async (r, s, a) => {
					const c = Object(y.a)(s(), {
						scheduledPostId: t,
						subredditId: e
					});
					c && (await r(Object(n.b)(Object(m.c)(c.subreddit.name, c.collectionId))), r((Object(b.p)(c) ? _ : E)(c)))
				}, h = (e, t) => {
					Object(b.p)(t) ? e(Object(o.d)({
						scheduledPost: t
					})) : e(Object(o.h)({
						scheduledPost: t
					}))
				}, I = (e, t, r) => async (n, c, {
					gqlContext: m
				}) => {
					n(Object(o.g)());
					const E = Object(y.a)(c(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (E && Object(b.p)(E) && Object(a.a)(Object(p.u)()(c(), E)), !E) return void n(Object(o.f)({
						message: s.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void h(n, E);
					const _ = await Object(u.a)(m(), {
							...r,
							id: t
						}),
						O = _.body;
					if (!(_.ok && O && O.data && O.data.updateScheduledPost && O.data.updateScheduledPost.ok && O.data.updateScheduledPost.scheduledPost)) return n(Object(o.f)({
						message: _.error && _.error.fields && _.error.fields.length && _.error.fields[0].msg || s.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void n(Object(i.f)(Object(i.e)(d.t(), f.b.Error, d.s(), I(e, t, r))));
					n(Object(i.f)(Object(i.e)(d.w(), f.b.SuccessCommunity))), h(n, Object(l.d)(O.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return y
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "b", (function() {
				return R
			}));
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				c = r("./src/reddit/actions/scheduledPosts/edit.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				i = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = r("./src/reddit/models/ScheduledPost/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				f = r("./src/telemetry/index.ts");
			const m = Object(n.a)(a.g),
				y = Object(n.a)(a.k),
				E = Object(n.a)(a.j),
				_ = Object(n.a)(a.o),
				O = Object(n.a)(a.d),
				h = Object(n.a)(a.f),
				I = Object(n.a)(a.m),
				S = Object(n.a)(a.a),
				g = Object(n.a)(a.c),
				T = Object(n.a)(a.e),
				D = Object(n.a)(a.h),
				j = (e, t) => {
					e(T()), e(Object(o.f)(Object(o.e)(a.r(), p.b.Error, a.s(), v(t))))
				},
				v = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: r = {
						recurringFirst: 1e4
					},
					...s
				}) => async (n, a, {
					gqlContext: c
				}) => {
					if (Object(b.h)(a(), {
							subredditId: e
						})) return;
					n(m());
					const o = {
							subredditId: e,
							includeRecurring: r,
							includeStandalone: t,
							...s
						},
						u = await Object(d.b)(c(), o);
					Object(d.f)(u, o) ? w(n, Object(i.e)(u.body.data), o) : j(n, o)
				}, A = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r();
					if (!Object(b.h)(n, {
							subredditId: e
						})) return t(v({
						subredditId: e
					}));
					if (!Object(b.g)(n, {
							subredditId: e,
							type: l.f.standalonePosts
						})) return;
					const a = Object(b.c)(n, {
						subredditId: e,
						type: l.f.standalonePosts
					});
					if (!a) return;
					t(m());
					const c = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: a
							}
						},
						o = await Object(d.b)(s(), c);
					o.ok ? w(t, Object(i.e)(o.body.data), c) : t(T())
				}, w = (e, t, r) => {
					Object(i.b)(t) ? e(h(t)) : Object(i.a)(t) ? e(S(t)) : Object(i.c)(t) ? e(I(t)) : j(e, r)
				}, R = (e, t) => async (r, n, a) => {
					const o = {},
						d = n();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							o[e] = !t[e];
							break;
						case "isSticky":
							const r = !!t.sticky && "NONE" !== t.sticky;
							o.sticky = r ? "NONE" : "SECOND";
							break;
						default:
							return Object(s.a)(e)
					}
					Object(f.a)(Object(u.t)(e, o[e], Object(l.p)(t))(d)), r(Object(c.a)(t.subreddit.id, t.id, o))
				}
		},
		"./src/reddit/actions/search/trending.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return y
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./node_modules/uuid/v4.js"),
				a = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/extractQueryParams/index.ts"));
			var d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts"),
				l = r("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = r("./src/reddit/models/Search/index.ts");
			var b = e => {
				const t = {
					withAds: 1,
					ad: Object(o.a)(window.location.href).get("ad")
				};
				return Object(d.a)(Object(i.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: c.ib.GET,
					data: t
				})
			};
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				m = Object(s.a)(f),
				y = () => async (e, t, {
					apiContext: r
				}) => {
					const s = await b(r());
					if (s.ok) {
						const t = (e => {
							const t = [];
							if (e.body && e.body.trending_searches) {
								const r = e.body.trending_searches.length;
								for (let s = 0; s < r; s++) {
									const r = e.body.trending_searches[s],
										n = r.results.data.children.length > 0 ? r.results.data.children[0].data : null,
										c = {
											id: a()(),
											post: n ? Object(l.a)(n) : null,
											rawQuery: r.query_string,
											searchQuery: r.display_string,
											section: p.c.trending,
											isWhitelisted: r.is_subreddit_whitelisted,
											subredditInfo: n ? {
												icon: n.sr_detail.community_icon || n.sr_detail.icon_img,
												displayText: n.sr_detail.display_name_prefixed
											} : null,
											subredditOccurrences: r.subreddit_occurences - 1,
											type: p.b.text
										};
									t.push(c)
								}
							}
							return t
						})(s);
						return e(m({
							items: t
						})), t
					}
					return null
				}
		},
		"./src/reddit/actions/shortcuts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "SHORTCUTS__ACTIVE_COMMENT_SET",
				n = "SHORTCUTS__ACTIVE_POST_SET"
		},
		"./src/reddit/actions/sso/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "LINKED_IDENTITY__ADD",
				n = "LINKED_IDENTITY__REMOVE"
		},
		"./src/reddit/actions/streaming/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "SUBREDDIT__STREAMING_MOD_SETTINGS_LOADED"
		},
		"./src/reddit/actions/streaming/modSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return g
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/streaming/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				i = r("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = Object(n.a)(a.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				m = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				y = Object(n.a)(b),
				E = Object(n.a)(f),
				_ = Object(n.a)(m),
				O = e => async (t, r, {
					gqlContext: n
				}) => {
					const a = Object(l.Q)(r(), {
						subredditId: e
					});
					if (void 0 === a) {
						const e = s.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							r = Object(c.e)(e, u.b.Error);
						return await t(Object(c.f)({
							...r,
							duration: c.a
						})), {
							reason: e
						}
					}
					const i = await ((e, t) => Object(o.a)(e, {
						...d,
						variables: {
							subredditId: t
						}
					}))(n(), e);
					if (!i.ok) {
						const e = s.fbt._("Could not fetch settings for {subredditName}", [s.fbt._param("subredditName", a.name)], {
								hk: "2G8rnU"
							}),
							r = Object(c.e)(e, u.b.Error);
						return await t(Object(c.f)({
							...r,
							duration: c.a
						})), {
							reason: e
						}
					}
					const b = i.body.data.subredditInfoById;
					return await t(p({
						subredditId: e,
						modSettings: b.liveStreamingInfo
					})), {}
				}, h = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					await r(I(t, e, n())), r(O(t))
				}, I = (e, t, r) => async (r, n, {
					gqlContext: a
				}) => {
					r(y({
						subredditId: e
					}));
					const d = await ((e, t) => Object(o.a)(e, {
						...i,
						variables: t
					}))(a(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!d.ok || !d.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = d.error && d.error.fields ? d.error.fields[0].msg : s.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							n = Object(c.e)(t, u.b.Error);
						await r(Object(c.f)({
							...n,
							duration: c.a
						})), r(_({
							subredditId: e
						}))
					}
					const l = s.fbt._("Community broadcasting settings saved", null, {
							hk: "GTwrg"
						}),
						p = Object(c.e)(l, u.b.SuccessCommunity);
					await r(Object(c.f)({
						...p,
						duration: c.a
					})), r(E({
						subredditId: e
					}))
				}, S = (e, t, r) => async (s, n, {
					gqlContext: a
				}) => {
					const c = [...r.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await s(I(e, {
						whitelistedRedditors: c
					}, a())), await s(O(e))
				}, g = (e, t, r) => async (s, n, {
					gqlContext: a
				}) => {
					const c = r.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await s(I(e, {
						whitelistedRedditors: c
					}, a())), await s(O(e))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				n = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				a = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return g
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "h", (function() {
				return L
			})), r.d(t, "i", (function() {
				return N
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/postCreation/general.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/postCreation/submit.ts"),
				i = r("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				u = r("./src/reddit/constants/modals.ts"),
				l = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const m = e => ({
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
			var y = r("./src/lib/makeGqlRequest/index.ts"),
				E = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var _ = r("./src/reddit/helpers/correlationIdTracker.ts"),
				O = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/telemetry/index.ts");
			const g = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				T = "SUBREDDIT__CREATE_PENDING",
				D = "SUBREDDIT__CREATE_SUCCEEDED",
				j = "SUBREDDIT__CREATE_FAILED",
				v = "SUBREDDIT__CREATE_CLEARED",
				A = Object(a.a)(T),
				w = Object(a.a)(D),
				R = Object(a.a)(j),
				C = Object(a.a)(v),
				P = Object(a.a)(g),
				L = e => async (t, r, {
					apiContext: a
				}) => {
					const y = r(),
						{
							name: E,
							type: g,
							crosspostId: T
						} = e;
					if (Object(I.k)(y)) return;
					t(A({
						subredditName: E
					}));
					const D = await ((e, t) => Object(l.a)(Object(p.a)(e, [b.a]), {
						endpoint: Object(f.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: n.ib.POST,
						data: m(t)
					}))(a(), e);
					if (D.ok) {
						const r = D.body,
							a = r.fullname;
						if (Object(S.a)(Object(O.d)(g, e, a)(y)), t(w({
								subredditName: E
							})), T) {
							const e = Object(h.H)(y, {
								postId: T
							});
							t(Object(c.h)(e.title)), t(Object(c.g)({
								submissionType: n.Tb.CROSSPOST
							})), await t(Object(d.b)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: T,
								postFieldValidationPending: Promise.resolve()
							})), Object(i.b)(T)
						}
						await t(Object(s.b)(`${r.path}`)), t(Object(o.h)(u.a.POST_FLOW_UPSELL_MODAL_ID)), Object(S.a)(Object(O.g)()(y)), Object(_.b)(_.a.SubredditCreation)
					} else D.error && Object(S.a)(Object(O.h)(D.error.type, E)(y)), t(R({
						subredditName: E,
						error: D.error
					}))
				}, N = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						a = {
							name: e
						},
						c = await ((e, t) => Object(y.a)(e, {
							...E,
							variables: t
						}))(s(), {
							input: a
						});
					let o = null;
					if (c.ok) {
						o = c.body.data.validateCreateSubredditInput.fieldErrors
					}
					if (o) {
						const r = {
							fields: [{
								field: o[0].field,
								msg: o[0].message
							}],
							type: o[0].code
						};
						t(R({
							subredditName: e,
							error: r
						})), r && Object(S.a)(Object(O.h)(r.type, e)(n))
					} else await t(C())
				}
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/subscription/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/selectors/subreddit.ts");
			const u = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				l = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				p = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				b = (Object(s.a)(u), Object(s.a)(l)),
				f = Object(s.a)(p),
				m = () => async (e, t, {
					apiContext: r
				}) => {
					await e(n.e());
					const {
						api: s,
						ids: u
					} = t().subreddits.crosspostable;
					if (s.pending || Object.keys(u).length) return;
					const l = await ((e, t) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: a.ib.GET
					}))(r(), {
						sr_detail: !1
					});
					if (l.ok) {
						const r = t(),
							s = l.body && l.body.length ? l.body.map(e => Object(i.B)(r, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(b({
							subredditIds: s
						}))
					} else e(f({
						error: l.error
					}))
				}
		},
		"./src/reddit/actions/subredditMention/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "SUBREDDIT_MENTION_LOADED",
				n = "SUBREDDIT__MODEL_SUCCEEDED",
				a = "SUBREDDIT__MODEL_PENDING",
				c = "SUBREDDIT__MODEL_FAILED"
		},
		"./src/reddit/actions/subredditTopContent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/preferences.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/SubredditTopContent.json"),
				o = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const d = "SUBREDDIT_TOP_CONTENT__PENDING",
				i = "SUBREDDIT_TOP_CONTENT__LOADED",
				u = "SUBREDDIT_TOP_CONTENT__FAILED",
				l = Object(s.a)(d),
				p = Object(s.a)(i),
				b = Object(s.a)(u),
				f = e => async (t, r, s) => {
					const d = e.toLowerCase(),
						i = r(),
						{
							api: u,
							topContent: f
						} = i.subreddits;
					if (u.topContent.pending[d] || f[d]) return;
					t(l({
						subredditName: d
					})), t(Object(n.x)());
					const m = await ((e, t) => Object(a.a)(e, {
						...c,
						variables: t
					}))(s.gqlContext(), {
						subredditName: d
					});
					if (m.ok) {
						const e = m.body.data.subreddit;
						if (e) {
							const r = Object(o.c)(e);
							r && t(p({
								...r,
								subredditName: d
							}))
						}
					} else t(b({
						subredditName: d,
						error: m.error
					}))
				}
		},
		"./src/reddit/actions/theme.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "THEME_CHANGED",
				a = (Object(s.a)(n), "BOOTUP_THEME"),
				c = Object(s.a)(a)
		},
		"./src/reddit/actions/tracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "TRACKING__VIEWPORT_DATA_LOADED",
				a = "TRACKING__VIEWPORT_DATA_UNLOADED",
				c = Object(s.a)(n);
			Object(s.a)(a)
		},
		"./src/reddit/actions/trafficStats/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "SUBREDDIT__TRAFFIC_STATS_LOADED",
				n = "SUBREDDIT__TRAFFIC_STATS_PENDING",
				a = "SUBREDDIT__TRAFFIC_STATS_FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return R
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/get.js"),
				n = r.n(s),
				a = r("./node_modules/uuid/v4.js"),
				c = r.n(a),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/uploadToS3/index.ts"),
				i = r("./src/reddit/models/Upload/index.ts");
			const u = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				p = "UPLOAD_METADATA_CHANGED",
				b = "UPLOAD_PROGRESS",
				f = "UPLOAD_SUCCESS",
				m = "UPLOAD_FAILED",
				y = "UPLOAD_CANCELED",
				E = "UPLOAD_REMOVED",
				_ = Object(o.a)(u),
				O = Object(o.a)(l),
				h = Object(o.a)(p),
				I = Object(o.a)(b),
				S = Object(o.a)(f),
				g = Object(o.a)(m),
				T = Object(o.a)(y),
				D = Object(o.a)(E),
				j = new Map,
				v = (e, t) => {
					const r = j.get(e) || [];
					r.push(t), j.set(e, r)
				},
				A = (e, t, r, s = !1) => async (a, o, {
					apiContext: u
				}) => {
					const l = t;
					if (o().uploads[l] && Object(i.c)(o().uploads[l])) return;
					const p = c()(),
						b = () => {
							const e = o().uploads[l];
							return !e || e.id !== p || e.status === i.a.CANCELED
						};
					a(_({
						key: l,
						id: p,
						file: e
					}));
					const {
						uploadLease: f,
						error: m
					} = await r(o().uploads[l]);
					if (b()) return;
					if (m || !f) return void a(g({
						key: l,
						error: m
					}));
					let y;
					v(p, () => {
						y && y.abort()
					}), a(O({
						key: l
					}));
					const E = await Object(d.a)(e, f, e => (y = e, s && e.on("progress", e => {
						if (!b() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							a(I({
								key: l,
								progress: t
							}))
						}
					}), e));
					if (y = null, !b())
						if (E.ok) {
							const e = decodeURIComponent(E.body.PostResponse.Location);
							a(S({
								key: l,
								url: e
							}))
						} else {
							const e = n()(E, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							a(g({
								key: l,
								error: t
							}))
						}
				}, w = (e, t = !1) => (r, s) => {
					const n = s().uploads[e];
					n && (((e, t) => {
						const r = j.get(e);
						r && r.forEach(r => r(e, t)), j.delete(e)
					})(n.id, t), r(t ? D({
						key: e
					}) : T({
						key: e
					})))
				}, R = (e, t = !1) => (r, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && r(w(s, t))
					})
				}
		},
		"./src/reddit/actions/upvotePrompt.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return y
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/config.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/post.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/localStorage/index.ts"),
				u = r("./src/reddit/selectors/telemetry.ts");
			const l = "upvote_prompt";
			var p = r("./src/reddit/selectors/experiments/index.ts"),
				b = r("./src/reddit/selectors/experiments/upvotePrompt.ts"),
				f = r("./src/telemetry/index.ts");
			const m = "INCREMENT_SEEN_COUNT_PER_SESS",
				y = (e, t, r) => async (a, c) => {
					const d = c(),
						p = Object(i.z)(),
						m = Date.now(),
						y = p && m - p < 18e4,
						h = Object(b.c)(d, {
							postId: e
						}),
						I = d.upvotePromptCountPerSess,
						S = (() => {
							const e = Object(i.y)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !h || y || I >= 4 || S.length >= 3) return;
					const g = _(d, t);
					if (!g) return;
					a(Object(o.f)({
						text: g,
						buttonText: s.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${n.a.assetPath}/img/snoo-upvote.png`,
						duration: b.a,
						buttonAction: E(e),
						onClose: () => Object(f.a)((e => ({
							source: l,
							action: "click",
							noun: "close",
							...Object(u.defaults)(e)
						}))(d))
					}));
					const T = [...S, Date.now()].slice(Math.max(S.length + 1 - 3, 0));
					Object(f.a)((e => ({
						source: l,
						action: "view",
						noun: l,
						...Object(u.defaults)(e)
					}))(d)), Object(i.Bb)(), Object(i.Ab)(T), a(O()), r && r()
				}, E = e => async (t, r) => {
					Object(f.a)((e => ({
						source: l,
						action: "click",
						noun: "upvote",
						...Object(u.defaults)(e)
					}))(r())), Object(b.c)(r(), {
						postId: e
					}) && t(Object(c.db)(e))
				}, _ = (e, t) => {
					const r = Object(p.d)(e, {
						experimentName: d.ie
					});
					let n = "";
					return (null == r ? void 0 : r.variant) === d.je.Variant1 ? n = t ? s.fbt._("Was that a good post? Upvote it so it gets seen by more people", null, {
						hk: "2NOllx"
					}) : s.fbt._("Was this a good post? Upvote it so it gets seen by more people", null, {
						hk: "K1yBi"
					}) : (null == r ? void 0 : r.variant) === d.je.Variant2 && (n = t ? s.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : s.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})), n
				}, O = Object(a.a)(m)
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/lib/matchRoute/index.ts"),
				n = r("./src/lib/opener/index.ts"),
				a = r("./node_modules/react-router-redux/es/index.js");
			const c = (e, t = !0) => async (r, c, {
				routes: o
			}) => {
				const d = c();
				Object(s.a)(e, o, d) ? r(Object(a.b)(e)) : t ? Object(n.e)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "g", (function() {
				return g
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/blockedRedditors.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/endpoints/accounts/index.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				l = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				b = Object(n.a)(u),
				f = Object(n.a)(l),
				m = Object(n.a)(p),
				y = e => async (t, r, {
					apiContext: n
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const i = await Object(o.a)(n(), e),
						u = `error-block-${e}`;
					if (i.ok) i.body.name && t(f(i.body)), i.body.id && t(Object(a.f)(i.body.id)), t(c.g(u)), t(c.f({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("{username} is now blocked", [s.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const r = {
							type: i.error ? i.error.type : "Unknown error",
							username: e
						};
						t(m(r)), t(c.f({
							id: u,
							kind: d.b.Error,
							text: s.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: y(e)
						}))
					}
				}, E = "USER_UNBLOCK__PENDING", _ = "USER_UNBLOCK__SUCCESS", O = "USER_UNBLOCK__FAILED", h = Object(n.a)(E), I = Object(n.a)(_), S = Object(n.a)(O), g = e => async (t, r, {
					apiContext: n
				}) => {
					const u = r(),
						l = Object(i.k)(u),
						p = l ? l.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(h({
						name: e
					})), (await Object(o.c)(n(), p, e)).ok ? (t(I({
						name: e
					})), b && b.id && t(Object(a.h)(b.id)), t(c.f({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("{username} is now unblocked", [s.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(c.f({
						kind: d.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(S({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return l
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "m", (function() {
				return E
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "k", (function() {
				return h
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				n = "AUTHOR_FLAIR_DATA__MUTATED",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				y = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				h = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userWhitelist.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "h", (function() {
				return I
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/accounts/index.ts"),
				o = r("./src/reddit/models/Toast/index.ts");
			const d = "USER_WHITELIST__PENDING",
				i = "USER_WHITELIST__SUCCESS",
				u = "USER_WHITELIST__FAILED",
				l = Object(n.a)(d),
				p = Object(n.a)(i),
				b = Object(n.a)(u),
				f = e => async (t, r, {
					apiContext: n
				}) => {
					t(l());
					const d = await Object(c.e)(n(), e);
					d.ok ? d.body.name && (t(p(d.body)), t(a.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(b()), t(a.f({
						kind: o.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, m = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", E = "USER_UNWHITELIST__FAILED", _ = Object(n.a)(m), O = Object(n.a)(y), h = Object(n.a)(E), I = e => async (t, r, {
					apiContext: n
				}) => {
					t(_({
						name: e
					})), (await Object(c.d)(n(), e)).ok ? (t(O({
						name: e
					})), t(a.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(h({
						name: e
					})), t(a.f({
						kind: o.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}
		},
		"./src/reddit/actions/usernameAvailable.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return f
			}));
			var s, n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/usernameAvailable/index.ts");
			! function(e) {
				e[e.Available = 0] = "Available", e[e.Error = 1] = "Error", e[e.Pending = 2] = "Pending", e[e.Unavailable = 3] = "Unavailable"
			}(s || (s = {}));
			const c = "USERNAME_AVAILABLE__AVAILABLE",
				o = "USERNAME_AVAILABLE__FAILURE",
				d = "USERNAME_AVAILABLE__PENDING",
				i = "USERNAME_AVAILABLE__UNAVAILABLE",
				u = Object(n.a)(c),
				l = Object(n.a)(o),
				p = Object(n.a)(d),
				b = Object(n.a)(i),
				f = ({
					username: e
				}) => async (t, r, {
					apiContext: n
				}) => {
					const c = r().users.nameAvailable;
					if (!c[e] || c[e] === s.Error) {
						t(p({
							username: e
						}));
						const r = await Object(a.a)(n(), {
							username: e
						});
						r.ok ? r.body ? t(u({
							username: e
						})) : t(b({
							username: e
						})) : t(l({
							username: e
						}))
					}
				}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "BlankPost", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/connectors/PostViewable/index.ts"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/contexts/Post/index.tsx");
			const i = Object(c.a)(null),
				u = ({
					className: e,
					post: t
				}) => t.isSponsored ? n.a.createElement(a.a, {
					post: t,
					trackDisplay: !0
				}, n.a.createElement("div", {
					className: Object(o.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(d.b)(i(u))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Thumbnail/index.tsx"),
				o = r("./src/reddit/components/ClassicPost/index.m.less"),
				d = r.n(o);
			t.a = ({
				className: e,
				classNameInnerThumbnail: t,
				crosspost: r,
				forceShowNSFW: s,
				isMeta: o,
				post: i,
				redditStyle: u,
				removeLink: l,
				templatePlaceholderImage: p,
				thumbnailContainerClassName: b,
				url: f,
				usePreview: m
			}) => n.a.createElement("div", {
				className: Object(a.a)(d.a.thumbnailContainer, e)
			}, n.a.createElement(c.a, {
				className: Object(a.a)(d.a.thumbnail, t),
				containerClassName: b,
				crosspost: r,
				forceShowNSFW: s,
				isMeta: o,
				post: i,
				redditStyle: u,
				removeLink: l,
				templatePlaceholderImage: p,
				url: l ? void 0 : f,
				usePreview: m
			}))
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, r) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
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
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, r) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				icon: "_3HTtcITrR-crvsRovLrijl",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, r) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				containerExp: "_11HXvp3b_PzyK6RcoEr4bJ",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy",
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY"
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/components/HumanDate/index.tsx"),
				a = r("./src/lib/timeUntil/index.ts"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function i(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? d._("Voting closed {timeAgo}", [d._param("timeAgo", o.a.createElement(n.d, {
					seconds: e.poll.endsAt / s.Pb
				}))], {
					hk: "3OERID"
				}) : Object(a.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, r) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = 20,
				n = 180
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, r) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
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
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return P
			})), r.d(t, "a", (function() {
				return K
			}));
			var s = r("./node_modules/polished/dist/polished.es.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/ads/index.ts"),
				u = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/controls/OutboundLink/index.tsx"),
				m = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				E = r("./src/reddit/helpers/flair.ts"),
				_ = r("./src/reddit/helpers/path/index.ts"),
				O = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				I = r("./src/reddit/models/Flair/index.ts"),
				S = r("./src/reddit/models/Media/index.ts"),
				g = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = r("./src/lib/getShortenedLink.ts"),
				D = r("./src/reddit/components/FlairWrapper/index.tsx"),
				j = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./src/lib/prettyPrintNumber/index.ts"),
				A = r("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				w = r("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				R = r.n(w);
			const C = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var P, L = Object(c.b)(C)((function(e) {
					const {
						poll: t,
						resultsByVoters: r
					} = e, s = r ? r.totalVotes : "0";
					return a.a.createElement("div", {
						className: Object(u.a)(e.className, R.a.proposalMetaData)
					}, a.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(v.a)(s)), j.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(A.a, {
						className: R.a.proposalExpiry,
						poll: t
					}))
				})),
				N = r("./src/reddit/components/SEOTitle/index.tsx"),
				k = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/components/PostTitle/index.m.less"),
				U = r.n(x),
				M = r("./src/config.ts"),
				F = r("./src/reddit/hooks/useClickSourceData.ts"),
				G = r("./src/reddit/hooks/useExperimentVariant.ts"),
				B = r("./src/reddit/hooks/usePostContext.ts"),
				H = r("./src/reddit/hooks/useTheme.ts"),
				V = r("./src/telemetry/models/Outbound.ts");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(P || (P = {}));
			const K = ({
					size: e,
					titleColor: t,
					titleType: r,
					nowrap: s,
					children: n,
					className: c,
					redditStyle: o
				}) => {
					const d = Object(H.a)();
					let i = "";
					switch (e) {
						case P.ExtraLarge:
							i = U.a.ExtraLarge;
							break;
						case P.Large:
							i = U.a.Large;
							break;
						case P.Medium:
							i = U.a.Medium;
							break;
						case P.Small:
							i = U.a.Small;
							break;
						case P.ExtraSmall:
							i = U.a.ExtraSmall
					}
					return a.a.createElement("div", {
						className: Object(u.a)(U.a.Title, c, i, {
							[U.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(g.a)({
								redditStyle: o,
								theme: d
							}).titleText
						}
					}, r ? a.a.createElement(N.b, {
						type: r
					}, n) : n)
				},
				W = ({
					className: e,
					disableVisited: t,
					titleColor: r,
					children: s,
					...n
				}) => a.a.createElement(o.a, q({}, n, {
					className: Object(u.a)(e, U.a.styledLink, {
						[U.a.isVisitedEnabled]: !t
					})
				}), s),
				$ = ({
					disableVisited: e,
					nowrap: t,
					className: r,
					children: s
				}) => a.a.createElement("div", {
					className: Object(u.a)(U.a.titleContainer, r, {
						[U.a.isNoWrap]: t,
						[U.a.isVisitedEnabled]: !e
					})
				}, s),
				Q = Object(d.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(b.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: k.db
				}),
				Y = e => {
					const {
						post: t,
						subreddit: r
					} = e, {
						isSponsored: s
					} = t, n = Object(F.a)(), c = Object(G.a)(p.yc) === p.Cc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement($, {
						nowrap: e.nowrap
					}, a.a.createElement(z, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, a.a.createElement(z, e)); {
						const o = t.media && Object(S.G)(t.media) ? Object(O.c)(t.id, r.name) : t.permalink,
							d = e.isCommentPermalink ? Object(_.b)(o) : c ? Object(y.a)(o, void 0, n) : Object(y.a)(o);
						return a.a.createElement($, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: r
							} = Object(i.t)(e, t.imageGalleryCurrentItem);
							return r ? a.a.createElement(f.b, {
								href: r.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: r
							}, a.a.createElement(z, t)) : a.a.createElement(z, t)
						})(t, e) : a.a.createElement(W, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: d
						}, a.a.createElement(z, e)))
					}
				},
				z = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: r,
						post: s
					} = e;
					let n = e.format ? e.format(s) : s.title;
					r && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const c = e.isCommentsPage ? N.a.PostComments : N.a.PostItem;
					return a.a.createElement(K, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: c
					}, t && a.a.createElement(D.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), n)
				},
				X = e => {
					const {
						hideSourceLink: t,
						post: r
					} = e, {
						isSponsored: s
					} = r, n = e.isCommentsPage ? V.SourceElement.PostLink : V.SourceElement.ListingPostLink, c = !t && !e.isCrosspost && e.size !== P.Large && !r.isSponsored && !(r.media && Object(S.G)(r.media)) && (r.source || r.media && (r.media.type === S.o.GIFVIDEO || r.media.type === S.o.IMAGE || r.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (c) return a.a.createElement(m.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: n
						}, Object(T.a)(r), !r.isSponsored && a.a.createElement(h.a, {
							name: "external_link",
							className: U.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== P.Large && e.size !== P.ExtraLarge) return a.a.createElement(m.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: n
					}, Object(T.a)(r), !r.isSponsored && a.a.createElement(h.a, {
						name: "external_link",
						className: U.a.outboundLinkIcon
					}));
					return null
				};
			class J extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${U.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(g.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(g.a)(this.props).titleText,Object(g.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: r,
						isCommentsPage: s,
						isOverlay: n,
						poll: c,
						post: o,
						showNSFWSpoilerFlairsOnly: d
					} = this.props, i = r === I.b.Left, l = Object(D.b)(o), p = d ? l.filter(e => e.type === I.f.Nsfw || e.type === I.f.Spoiler) : i ? l.filter(e => Object(E.q)(e.type)) : [], b = d ? [] : i ? l.filter(e => !Object(E.q)(e.type)) : l, f = !n && !s, m = !t && p && p.length > 0 && f, y = !t && b && b.length > 0 && f;
					return a.a.createElement("div", {
						className: Object(u.a)(U.a.Component, e, o.id)
					}, !d && m && a.a.createElement(D.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), a.a.createElement(Y, q({}, this.props, {
						leftFlair: d ? p : void 0
					})), c && a.a.createElement(L, {
						className: U.a.pollMeta,
						pollId: c.id
					}), a.a.createElement(X, this.props), y && a.a.createElement(D.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), a.a.createElement("div", {
						className: U.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${M.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(b.db)(),
					r = Object(b.w)(t),
					s = Object(B.a)(),
					n = Object(c.e)(n => Q(n, {
						...s,
						...e,
						isCommentPermalink: r,
						pageLayer: t
					})),
					o = Object(H.a)(),
					d = Object(l.b)();
				return a.a.createElement(J, q({
					pageLayer: t,
					isCommentPermalink: r
				}, s, n, e, {
					theme: o,
					sendEvent: d
				}))
			}))
		},
		"./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/timezone/index.ts"),
				n = r("./src/reddit/models/ScheduledPost/index.ts");
			const a = {
					frequency: n.d.Hourly,
					interval: 1,
					byMonthDays: [],
					byWeekDays: []
				},
				c = () => {
					const e = new Date;
					return e.setMinutes(60), {
						submitDate: Object(s.g)(e),
						timezoneName: Object(s.b)() || s.a,
						frequencyOption: null,
						recurrenceInfo: null
					}
				},
				o = (e, t, r = a) => {
					const s = Object(n.q)(e.getDay()),
						c = e.getDate();
					let o = r ? {
						...r
					} : null;
					switch (t) {
						case n.d.Monthly:
							o = {
								...a,
								...r,
								frequency: t,
								byMonthDays: [c]
							};
							break;
						case n.d.Weekly:
							o = {
								...a,
								...r,
								frequency: t,
								byWeekDays: [s]
							};
							break;
						case n.d.Daily:
						case n.d.Hourly:
							o = {
								...a,
								...r,
								frequency: t
							};
							break;
						case null:
							return null
					}
					return o
				}
		},
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, r) {
			e.exports = {
				listItemIcon: "fcDVF0HYfR8ZcZgQVT0oo",
				mTrending: "cuK0QQebBI_tpWwN_YN9M",
				listItemTitle: "_3HPgggOIyY0x9kiADxwwaj",
				mWithBorder: "_2Uets9AVOC4pygPHGHCAAM",
				listItem: "_20OHBqoDD71_8fv7tuG6u6",
				mHoverable: "_1IJwm0Qscr8yPuyii8YsSS",
				mFocused: "_1NDuQGNA_7Cuo411jRXLVg",
				mTypeahead: "_3NseKdP3_1HONmKk_kK3_l",
				listItemText: "_17mZueOafzj0Dlja0Wc9os",
				listItemSubtext: "_1CCbYggNpm1_k3lDTmKgSW",
				mNoPostTitle: "_3etfe7dx7ViSNcYo4Q--LD",
				loadingItem: "_3wwag2ZgVLfNKLCuEuXF7h",
				dropdown: "_1HnfZtTmYelxTj6QL6aaXS",
				fixedTextTooltip: "_1U-nknzRP43RdLab5D4_lK",
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
				postTitle: "YeMwUP22Up8CVxmgTayyQ",
				trendingIcon: "_2VyZLE_5g-CDpUucbfHyOg",
				defaultCommunityIcon: "nltZBKTbnoPZEcEaIufmh",
				mNightmode: "TiWmxUzfBQADxToVGHQeM"
			}
		},
		"./src/reddit/components/SearchDropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return Z
			})), r.d(t, "a", (function() {
				return ee
			})), r.d(t, "c", (function() {
				return se
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = e => e.endsWith("/") ? e : `${e}/`,
				l = r("./src/lib/makeSearchKey/index.ts"),
				p = r("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				b = r.n(p),
				f = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = r("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				y = r("./src/reddit/constants/history.ts"),
				E = r("./src/reddit/helpers/getSearchUrl/index.ts"),
				_ = r("./src/reddit/icons/fonts/index.tsx"),
				O = r("./src/reddit/models/Search/index.ts"),
				h = r("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				S = r("./node_modules/uuid/v4.js"),
				g = r.n(S),
				T = r("./src/reddit/components/SearchDropdown/index.m.less"),
				D = r.n(T);
			const j = Object(c.a)(f.b);

			function v({
				activeTooltipId: e,
				className: t,
				focusedItem: r,
				nightmode: s,
				recentSearch: c,
				searchOriginPage: p,
				indexOfItem: f,
				toggleTooltip: S,
				onClearSearchQuery: T,
				onRemoveRecentSearch: v,
				onUpdateSearchQuery: A,
				onSendSearchClickRecentEvent: w,
				onCloseDropdown: R
			}) {
				const {
					nsfwSessionSetting: C,
					refreshNsfwSessionSettingExpiryTime: P
				} = Object(m.a)(), L = Object(a.e)(h.b), N = Object(a.e)(I.eb), k = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery, x = Object(E.a)({
					includeNsfwResults: L && N && C,
					multireddit: null,
					searchItem: c,
					searchOptions: {
						source: l.a.Recent
					},
					subreddit: null
				}), U = null == x ? void 0 : x.url, M = null == x ? void 0 : x.qs, F = k(c);
				let G;
				r && (G = k(r));
				const B = c.isProfile || c.isSubreddit ? {
					[y.a.ClickSource]: "search_dropdown",
					[y.a.ClickId]: g()()
				} : void 0;
				return n.a.createElement(i.a, {
					"aria-label": c.searchQuery,
					className: Object(o.a)(D.a.listItem, b.a.item, t, {
						[D.a.mFocused]: !(!r || r.section !== O.c.recent || G !== F)
					}),
					onClick: () => {
						c.isTypeaheadSuggestion ? T() : A(c.searchQuery), w(c.searchQuery, c, f), R(), P()
					},
					key: F,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: U && u(U) || "",
						state: {
							...B,
							[y.a.SearchOriginPage]: p
						},
						search: M
					}
				}, c.displayInfo && c.isTypeaheadSuggestion ? c.displayInfo.iconUrl ? n.a.createElement("div", {
					className: D.a.subredditIcon,
					style: {
						backgroundImage: `url('${c.displayInfo.iconUrl}')`
					}
				}) : n.a.createElement(_.a, {
					name: "community",
					isFilled: !s,
					className: Object(o.a)(D.a.defaultCommunityIcon, {
						[D.a.mNightmode]: s
					})
				}) : n.a.createElement(_.a, {
					name: "search"
				}), n.a.createElement("span", {
					className: b.a.text
				}, F), n.a.createElement("div", {
					onMouseEnter: () => S(F),
					onMouseLeave: () => S(null),
					id: F
				}, n.a.createElement(_.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), v(c)
					}
				}), n.a.createElement(j, {
					className: D.a.fixedTextTooltip,
					isOpen: e === F,
					text: d.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: F,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var A = r("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				w = r("./src/reddit/components/PostTitle/index.tsx"),
				R = r("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				C = r("./src/reddit/constants/adEvents.ts"),
				P = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				L = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				N = r("./src/reddit/helpers/correlationIdTracker.ts"),
				k = r("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function x({
				className: e,
				focusedItem: t,
				id: r,
				trendingItem: s,
				searchOriginPage: c,
				onUpdateSearchQuery: p,
				onCloseDropdown: f,
				onSetRecentSearch: m,
				fireAdPixelsOfType: h
			}) {
				const I = Object(a.d)(),
					S = !(!s.post || !s.post.isSponsored),
					g = Object(E.a)({
						multireddit: null,
						searchItem: s,
						searchOptions: {
							source: S ? l.a.PromotedTrend : l.a.Trending
						},
						subreddit: null
					}),
					T = null == g ? void 0 : g.url,
					j = null == g ? void 0 : g.qs,
					v = n.a.createElement(i.a, {
						id: r,
						"aria-label": s.searchQuery,
						className: Object(o.a)(D.a.listItem, D.a.mTrending, b.a.item, b.a.trending, e, {
							[D.a.mFocused]: !(!t || t.section !== O.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: () => {
							p(s.searchQuery);
							const e = (() => {
								const {
									post: e,
									subredditInfo: t,
									subredditOccurrences: r,
									...n
								} = s;
								return n
							})();
							if (m(e), Object(N.d)(N.a.SearchResults), (e => I((t, r) => Object(k.x)(r(), e, k.a.SEARCH_DROPDOWN)))(s), S) {
								const {
									post: e
								} = s;
								e && h(e, C.a.Click)
							}
							f()
						},
						key: `trending-${s.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: T && u(T) || "",
							state: {
								[y.a.SearchOriginPage]: c
							},
							search: j
						}
					}, n.a.createElement("div", {
						className: b.a.trendingContent
					}, S && n.a.createElement("div", {
						className: b.a.promoted
					}, d.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), n.a.createElement("div", null, n.a.createElement(_.a, {
						name: "popular",
						className: D.a.trendingIcon
					}), n.a.createElement("span", null, n.a.createElement(w.a, {
						className: Object(o.a)(D.a.listItemText, D.a.mTrending, b.a.text, b.a.trending),
						redditStyle: !0,
						size: w.b.Small
					}, s.searchQuery)), s.post && n.a.createElement("div", {
						className: D.a.postTitle
					}, s.post.title)), s.subredditInfo && n.a.createElement(P.a, {
						className: Object(o.a)(b.a.relatedSubredditMetaData, D.a.listItemSubtext, {
							[D.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: d.fbt._("{subreddit name} and more", [d.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(L.a)(s.post) && n.a.createElement(A.a, {
						post: s.post,
						removeLink: !0,
						usePreview: S
					}));
				return S ? n.a.createElement(R.a, {
					post: s.post
				}, v) : v
			}
			var U = r("./src/reddit/components/Flair/index.tsx"),
				M = r("./src/reddit/models/Flair/index.ts");

			function F({
				className: e,
				focusedItem: t,
				item: r,
				indexOfItem: s,
				nightmode: a,
				subredditSuggestions: c,
				onSendSearchClickTypeaheadEvent: l,
				onSetRecentSearch: p,
				onClearSearchQuery: f,
				onCloseDropdown: m
			}) {
				const E = !r.isProfile || r.enableFollowers;
				return n.a.createElement(i.a, {
					"aria-label": r.searchQuery,
					className: Object(o.a)(D.a.listItem, D.a.mTypeahead, b.a.item, e, {
						[D.a.mFocused]: !(!t || t.searchQuery !== r.searchQuery)
					}),
					onClick: () => {
						p(r), l(r.searchQuery, r, s, c), f(), m()
					},
					key: r.searchQuery,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: `/${u(r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery)}`,
						state: {
							[y.a.ClickSource]: "typeahead",
							[y.a.ClickId]: g()()
						}
					}
				}, r.displayInfo && r.displayInfo.iconUrl ? n.a.createElement("div", {
					className: D.a.subredditIcon,
					style: {
						backgroundImage: `url('${r.displayInfo.iconUrl}')`
					}
				}) : n.a.createElement(_.a, {
					name: "community",
					isFilled: !a,
					className: Object(o.a)(D.a.defaultCommunityIcon, {
						[D.a.mNightmode]: a
					})
				}), n.a.createElement("div", null, r.displayInfo && r.displayInfo.subredditOrProfileName && n.a.createElement("div", {
					className: Object(o.a)(D.a.listItemText, D.a.mTypeahead, b.a.text)
				}, r.displayInfo.subredditOrProfileName), n.a.createElement("div", null, r.displayInfo && null != r.displayInfo.subscribers && E && n.a.createElement("div", {
					className: Object(o.a)(D.a.listItemSubtext, b.a.subText)
				}, d.fbt._({
					"*": "{members count} members",
					_1: "1 member"
				}, [d.fbt._plural(r.displayInfo.subscribers, "members count")], {
					hk: "1uMCes"
				})), r.displayInfo && r.displayInfo.isNSFW && n.a.createElement(U.b, {
					flair: {
						type: M.f.Nsfw,
						text: "nsfw"
					}
				}))))
			}
			var G = r("./src/reddit/constants/zIndex.ts"),
				B = r("./src/reddit/controls/Dropdown/index.tsx"),
				H = r("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				V = r.n(H),
				q = r("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				K = r.n(q),
				W = r("./node_modules/reselect/es/index.js"),
				$ = r("./src/reddit/constants/experiments.ts"),
				Q = r("./src/reddit/helpers/chooseVariant/index.ts");
			const Y = Object(W.a)(e => Object(Q.c)(e, {
				experimentEligibilitySelector: Q.a,
				experimentName: $.mb
			}), e => e === $.yb.Enabled);
			var z = r("./src/reddit/constants/parameters.ts");

			function X({
				searchOriginPage: e,
				searchQuery: t,
				onCloseDropdown: r
			}) {
				return n.a.createElement(i.a, {
					onClick: r,
					to: {
						pathname: "/search/",
						state: {
							[y.a.SearchOriginPage]: e
						},
						search: `${z.p}=${encodeURI(t)}`
					},
					className: Object(o.a)(D.a.listItem, b.a.item)
				}, n.a.createElement(_.a, {
					name: "search"
				}), n.a.createElement("span", {
					className: b.a.text
				}, d.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), d.fbt._("{search query}", [d.fbt._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = "SearchDropdown", ee = "SearchDropdownContent", te = 5, re = Object(c.a)(B.a);

			function se({
				container: e,
				trendingItems: t,
				isTrendingPending: r,
				isInTrendingExperiment: c,
				isInUISimplificationI18NExperiment: d,
				isOpen: i,
				isTypeaheadPending: u,
				itemList: l,
				recentSearches: p,
				typeaheadSuggestions: f,
				focusedItemIndex: m,
				nightmode: y,
				searchQuery: E,
				searchOriginPage: _,
				isFixed: O = !0,
				isOverlay: h = !0,
				fireAdPixelsOfType: I,
				onClearSearchQuery: S,
				onClose: g,
				onRemoveRecentSearch: T,
				onSendSearchClickRecentEvent: j,
				onSendSearchClickTypeaheadEvent: A,
				onSetRecentSearch: w,
				onUpdateSearchQuery: R
			}) {
				const C = Object(a.d)(),
					[P, L] = Object(s.useState)(null),
					N = Object(a.e)(Y),
					U = function(e) {
						const [t, r] = Object(s.useState)(null), n = Object(s.useCallback)(() => {
							e && r(e.offsetWidth)
						}, [e]);
						return Object(s.useLayoutEffect)(n, [n]), Object(s.useEffect)(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), [n]), t
					}(e),
					M = t.slice(0, te),
					[B, H] = Object(s.useState)(new Array(te).fill(!1)),
					q = N && E,
					W = 0 === f.length && !u && !q;
				Object(s.useLayoutEffect)(() => {
					if (!r && i && document.getElementById(ee)) {
						const e = $();
						H(e), M.forEach((t, r) => {
							e[r] && C((e, r) => Object(k.y)(r(), t, k.a.SEARCH_DROPDOWN))
						})
					}
				}, [r, i, C]);
				const $ = () => {
						const e = new Array(M.length).fill(!1);
						return M.forEach((t, r) => {
							if (t.id) {
								const s = document.getElementById(`${Z}-${t.id}`),
									n = document.getElementById(ee);
								if (s && n) {
									const t = s.getBoundingClientRect(),
										a = n.getBoundingClientRect();
									t.top < a.bottom && t.bottom > a.top && (e[r] = !0)
								}
							}
						}), e
					},
					Q = {
						width: U ? `${U}px` : "inherit",
						marginTop: "7px",
						overflow: "auto"
					};
				O && (Q.zIndex = G.g);
				const z = Object(s.useMemo)(() => f.filter(e => e.isSubreddit), [f]);
				return n.a.createElement(re, {
					className: Object(o.a)(D.a.dropdown, V.a.listContainer),
					id: ee,
					isFixed: O,
					isOpen: i,
					isOverlay: h,
					tooltipId: Z,
					noFocus: !0,
					renderContentsHidden: !0,
					style: Q,
					onDropdownMounted: () => {
						if (!r && M.length > 0) {
							const e = $();
							H(e), M.forEach((t, r) => {
								e[r] && C((e, r) => Object(k.y)(r(), t, k.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = $();
						M.forEach((t, r) => {
							B[r] || !e[r] || t.post && t.post.isSponsored || C((e, r) => Object(k.y)(r(), t, k.a.SEARCH_DROPDOWN))
						}), H(e)
					}
				}, f.map((e, t) => n.a.createElement(F, {
					focusedItem: f[m],
					indexOfItem: t,
					subredditSuggestions: z,
					item: e,
					key: e.id,
					onClearSearchQuery: S,
					onSendSearchClickTypeaheadEvent: A,
					onSetRecentSearch: w,
					nightmode: y,
					onCloseDropdown: g
				})), W && p.map((e, t) => n.a.createElement(v, {
					searchOriginPage: _,
					activeTooltipId: P,
					focusedItem: l[m],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: S,
					onRemoveRecentSearch: T,
					onSendSearchClickRecentEvent: j,
					onSetRecentSearch: w,
					onUpdateSearchQuery: R,
					recentSearch: e,
					toggleTooltip: L,
					nightmode: y,
					onCloseDropdown: g
				})), W && !d && c && !r && t && n.a.createElement("div", {
					className: Object(o.a)(b.a.title, D.a.listItemTitle, {
						[D.a.mWithBorder]: !!p.length
					})
				}, J._("Trending today", null, {
					hk: "3nAMpY"
				})), (u || !d && r) && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, K.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, K.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, K.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, K.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, K.a.item)
				})), W && !d && c && M.map(e => n.a.createElement(x, {
					id: `${Z}-${e.id}`,
					key: e.id,
					focusedItem: l[m],
					searchOriginPage: _,
					fireAdPixelsOfType: I,
					onCloseDropdown: g,
					onSetRecentSearch: w,
					onUpdateSearchQuery: R,
					trendingItem: e
				})), q && n.a.createElement(X, {
					searchOriginPage: _,
					searchQuery: E,
					onCloseDropdown: g
				}))
			}
		},
		"./src/reddit/components/SearchNSFWToggle/hooks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/hooks/useLocalStorage.ts");
			const a = 30 * s.jb,
				c = () => Date.now() + a,
				o = () => ({
					allowNsfwSearchResults: !1,
					expires: c()
				}),
				d = () => {
					const [e, t] = Object(n.a)("allow-nsfw-search-results", o());
					return {
						get nsfwSessionSetting() {
							if (e.expires < Date.now()) {
								const e = o();
								return t(e), e.allowNsfwSearchResults
							}
							return e.allowNsfwSearchResults
						},
						refreshNsfwSessionSettingExpiryTime: () => {
							t({
								allowNsfwSearchResults: e.allowNsfwSearchResults,
								expires: c()
							})
						},
						setNsfwSessionSetting: e => {
							t({
								allowNsfwSearchResults: e,
								expires: c()
							})
						}
					}
				}
		},
		"./src/reddit/components/SubredditForkingCTA/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return g
			})), r.d(t, "a", (function() {
				return A
			}));
			var s = r("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = r.n(s),
				a = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				d = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/constants/comments.ts"),
				u = r("./src/reddit/models/Subreddit/index.ts"),
				l = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				f = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/cache/index.ts"),
				y = r("./src/lib/makeCommentsPageKey/index.ts"),
				E = r("./src/reddit/helpers/trackers/subredditForking.ts"),
				_ = r("./src/reddit/components/TrackingHelper/index.tsx");
			const O = Object(a.a)({
					resolved: {},
					chunkName: () => "SubredditForkingCTA",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("SubredditForkingCTA").then(r.bind(null, "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx"
					}
				}),
				h = [{
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
				I = "subreddit-forking.dismissals",
				S = (e, t) => {
					const r = Object(b.k)(e),
						s = Object(y.a)(t.postId),
						n = Object(p.H)(e, t),
						a = Object(l.o)(e, {
							...t,
							commentsPageKey: s
						}),
						c = Object(l.k)(e, {
							...t,
							commentsPageKey: s
						}).reduce((t, r) => {
							var s;
							const n = Object(l.l)(e, {
								commentLink: r
							});
							return r.type !== i.a.Comment && 0 !== (null === (s = a[r.id]) || void 0 === s ? void 0 : s.depth) || t.push(n), t
						}, []).sort((e, t) => t.score - e.score).slice(0, 5);
					return (null == r ? void 0 : r.id) === n.authorId || !!c.find(e => e.authorId === (null == r ? void 0 : r.id))
				},
				g = e => {
					let t = Object(m.b)(I);
					const r = Object.entries(t || {});
					r.length >= 99 && (t = r.sort(([, e], [, t]) => t - e).splice(0, 99).reduce((e, [t, r]) => (e[t] = r, e), {})), Object(m.d)(I, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				T = (e, t) => {
					var r;
					if (!Object(b.K)(e)) return !1;
					if (null === (r = Object(m.b)(I)) || void 0 === r ? void 0 : r[t.postId]) return !1;
					const s = Object(p.H)(e, t),
						n = Object(p.U)(e, {
							...t,
							disallowProfile: !0
						});
					if ((null == n ? void 0 : n.type) !== u.f.Public || n.isNSFW || n.isQuarantined || (null == s ? void 0 : s.isNSFW) || (null == s ? void 0 : s.source)) return !1;
					const a = h.find(({
						low: e,
						high: t
					}) => t >= n.subscribers && n.subscribers > e);
					return !(!a || !s.numComments || a.threshold > s.numComments) && !!S(e, t)
				},
				D = () => Object(f.c)({
					shouldLoadCTA: T
				}),
				j = Object(d.b)(D),
				v = ({
					shouldLoadCTA: e,
					postId: t,
					sendEvent: r
				}) => {
					const [s, n] = Object(c.useState)(!1);
					return s || !e ? null : o.a.createElement(O, {
						onClose: () => {
							g(t), n(!0), r(Object(E.b)(t))
						},
						postId: t
					})
				},
				A = Object(c.memo)(j(Object(_.c)(v)))
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/components/BlankPost/index.tsx"),
				o = r("./src/reddit/connectors/PostViewable/index.ts");
			const d = Object(o.a)(null);
			class i extends n.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: r
					} = this.props;
					if (t) return t.isBlank ? n.a.createElement(c.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: r
					}) : n.a.createElement(a.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = d(i)
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/objectSelector/index.ts"),
				i = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				u = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				p = r("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				b = r.n(p),
				f = r("./src/reddit/controls/Search/index.m.less"),
				m = r.n(f);
			const y = Object(a.b)(() => Object(c.c)({
				subredditsByName: Object(d.a)((e, t) => {
					const r = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						r[t.subredditName] = Object(l.w)(e, {
							subredditName: t.subredditName
						})
					}), r
				})
			}))(e => n.a.createElement("div", {
				className: Object(o.a)(b.a.subText, m.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => n.a.createElement(i.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, n.a.createElement(u.b, {
				className: Object(o.a)(m.a.subredditIcon, m.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : n.a.createElement(u.b, {
				className: Object(o.a)(m.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && n.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, r) {
			e.exports = {
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4"
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const i = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: n.ib.POST
			}), u = async (e, t, r) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: n.ib.POST
			}), l = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: n.ib.POST
			}), p = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: n.ib.POST
			}), b = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				endpoint: Object(d.a)(`${s.a.oauthUrl}/user/${t}/about`),
				method: n.ib.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/crowdControl/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s, n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/CrowdControlLevelInfo.json");
			! function(e) {
				e.Off = "OFF", e.Lenient = "LENIENT", e.Medium = "MEDIUM", e.Strict = "STRICT"
			}(s || (s = {}));
			const c = (e, t) => Object(n.a)(e, {
				...a,
				variables: {
					postId: t
				}
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, r) {
				const a = Object(n.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${s.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: r
						}
					}),
					c = await a;
				if (c.ok) {
					const e = {},
						t = {},
						r = c.body;
					return Object.keys(r).forEach(s => {
						const n = r[s];
						t[s] = n, e[n.userId] || (e[n.userId] = []), e[n.userId].push(n.id)
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
			async function c(e, t, r) {
				const a = await Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (a.ok) {
					const e = {},
						t = [],
						r = a.body;
					return Object.keys(r).forEach(s => {
						const n = r[s];
						e[s] = n, t.push(n.id)
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

			function o(e, t, r, a = !0) {
				return Object(n.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: a
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "n", (function() {
				return _
			}));
			var s, n = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function o(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case s.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function d(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby";
					case s.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function i(e) {
				return e === s.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function p(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(s || (s = {}));
			const b = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				f = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				m = e => ({
					type: "claim",
					subredditId: e
				}),
				y = e => ({
					type: "subscribe",
					subredditId: e
				}),
				E = (e, t, r, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: s
				});
			async function _(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${n.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function c(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function o(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
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
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/config.ts"),
				n = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(a.a)(e, {
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: n.ib.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							s = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: s
						}
					}
					return e
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}`,
					method: n.ib.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "a", (function() {
				return S
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/reddit/helpers/flair.ts"),
				a = r("./src/reddit/helpers/richTextJson/index.ts"),
				c = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
				d = r("./src/reddit/models/ScheduledPost/index.ts"),
				i = r("./src/redditGQL/operations/CreateScheduledPost.json"),
				u = r("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const l = (e, t) => Object(s.a)(e, {
					...u,
					variables: {
						...t,
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					}
				}),
				p = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const r = e.body;
					return !!(r.data && r.data.subredditInfoById && r.data.subredditInfoById.scheduledPosts && r.data.subredditInfoById.scheduledPosts[t] && r.data.subredditInfoById.scheduledPosts[t].edges)
				},
				b = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => p(e, d.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => p(e, d.f.recurringPosts))(e))),
				f = ({
					poll: e,
					schedule: t,
					submission: r,
					subredditId: s
				}) => ({
					collectionId: r.collectionId || "",
					discussionType: r.isChatPost ? c.b.Chat : c.b.Comment,
					isContestMode: r.isContestMode,
					isPostAsMetaMod: r.isPostAsMetaMod,
					isSpoiler: r.isSpoiler,
					isNsfw: r.isNSFW,
					poll: e && I(e),
					title: r.title,
					isOriginalContent: r.isOC,
					flair: r.flair ? {
						id: r.flair.templateId,
						text: Object(n.g)(r.flair)
					} : {},
					sticky: r.sticky,
					subredditId: s,
					suggestedCommentSort: r.suggestedSort,
					isSendReplies: r.sendReplies,
					...m(t),
					...O(r),
					assetIds: h(r)
				}),
				m = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				y = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				E = ({
					poll: e,
					schedule: t,
					scheduledPostId: r,
					submission: s,
					subredditId: n
				}) => {
					const a = f({
						poll: e,
						schedule: t,
						submission: s,
						subredditId: n
					});
					return {
						id: r,
						...a,
						flair: Object.keys(a.flair || {}).length ? {
							...a.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				_ = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				O = e => {
					switch (e.kind) {
						case o.o.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case o.o.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case o.o.LINK:
							return {
								content: {}, link: {
									url: _(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				h = e => {
					let t = [];
					if (e.document) {
						const r = e.document || [];
						t = Object(a.c)(r)
					}
					return t
				},
				I = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				S = (e, t) => Object(s.a)(e, {
					...i,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/redditGQL/operations/UpdateScheduledPost.json"),
				n = r("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(n.a)(e, {
				...s,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/endpoints/usernameAvailable/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts");
			const o = (e, t) => Object(n.a)(Object(a.a)(e, [c.a]), {
				method: s.ib.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/thumbnails.ts"),
				n = r("./src/reddit/models/Media/index.ts");

			function a(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW || e.media && Object(n.E)(e.media))
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function n(e) {
				return [...e].sort(s)
			}
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: n.H.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/getSearchUrl/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/lib/search/index.ts"),
				n = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/models/Search/index.ts");
			const c = ({
				subreddit: e,
				multireddit: t,
				searchItem: r,
				searchOptions: c,
				shouldSearchSubreddit: o,
				includeNsfwResults: d
			}) => {
				let i, u;
				if ("" !== r.searchQuery) {
					if (r.isTypeaheadSuggestion) i = `/${r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery}`;
					else {
						if (u = `${n.p}=${Object(s.b)(r.rawQuery||r.searchQuery)}`, i = "/search/", r.section !== a.c.trending && r.section !== a.c.recent || c && c.source && (u += `&source=${c.source}`), e && o ? (i = `/r/${e.name}${i}`, u = `${u}&${n.s}=1`) : !e && r.subredditOrProfileRestrictedName && (i = `/${r.subredditOrProfileRestrictedName}${i}`, u = `${u}&${n.s}=1`), t) {
							i = `/user/${t.url.split("/")[2]}/m/${t.name}${i}`, u = `${u}&${n.s}=1&${n.j}=1`
						}
						c && c.category && (u = `${u}&${n.b}=${c.category}`), d && (u = `${u}&${n.i}=1`)
					}
					return {
						url: i,
						qs: u
					}
				}
			};
			t.a = c
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");

			function n(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function a(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(n).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function c(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			const s = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: b(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				n = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: l(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				a = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...s(e),
							...n(e)
						}
					}
				}),
				c = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				o = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				d = e => c(e) && o(e),
				i = e => !c(e) && o(e),
				u = e => c(e) && !o(e),
				l = e => e.map(e => p(e.node)),
				p = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					collectionId: e.collections.edges.length ? e.collections.edges[0].node.id : void 0,
					discussionType: e.discussionType,
					isContestMode: e.isContestMode,
					isPostAsMetaMod: e.isPostAsMetaMod,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					isSticky: !!e.sticky && "NONE" !== e.sticky,
					mediaAssets: e.mediaAssets,
					subreddit: {
						...e.subreddit
					},
					suggestedCommentSort: e.suggestedCommentSort,
					owner: {
						...e.owner
					},
					poll: e.poll,
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? {
						...e.flair
					} : void 0,
					sticky: e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				b = e => e.map(e => f(e.node)),
				f = e => ({
					...p(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				m = e => (e => !!e.frequency && !!e.interval)(e) ? f(e) : p(e)
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./src/lib/fastdom/index.ts");
			const a = "https://js.stripe.com/v3/",
				c = "https://www.paypalobjects.com/api/checkout.js",
				o = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${s.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function d(e, t) {
				return t() ? Promise.resolve() : new Promise((r, s) => n.a.write(() => {
					t() && r();
					const n = document.head;
					let a = n.querySelector(`script[src='${e}']`);

					function c() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), r()
					}

					function o() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), a && n.removeChild(a), s()
					}
					a || ((a = document.createElement("script")).src = e, n.appendChild(a)), a.addEventListener("load", c), a.addEventListener("error", o)
				}))
			}

			function i() {
				return d(a, () => "undefined" != typeof Stripe)
			}

			function u() {
				return d(c, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function l() {
				return Promise.all(Object.keys(o).map(e => {
					const t = "__" + e;
					return d(o[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/onBeforeRequestFactory/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				n = r.n(s),
				a = r("./src/config.ts"),
				c = r("./src/lib/addQueryParams/index.ts"),
				o = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/selectors/subreddit.ts"));
			const d = new RegExp("^/desktopapi/v1/(duplicates/[^/]+|frontpage|news|search|subreddits/(all|popular))(/|$)"),
				i = new RegExp("^/desktopapi/v1/(search|subreddits|postcomments|collection_postcomments|submitpage)(/|$)"),
				u = new RegExp("^/desktopapi/v1/(subreddits|postcomments|collection_postcomments)/?$"),
				l = (new RegExp("^/desktopapi/v1/(postcomments)(/+|$)"), new RegExp("^/desktopapi/v1/frontpage/?$")),
				p = new RegExp("^/desktopapi/v1/submitpage(/|$)");
			var b = (e, t, r) => {
					const s = new Set;
					e.user.session && !e.user.session.unsafeLoggedOut && (e.user.account || (s.add("identity"), s.add("prefs"), s.add("prefsAccount")), (e => !d.test(e.pathname || ""))(t) && s.add("identity")), !e.live.isFrontpageLoaded && (e => l.test(e.pathname || ""))(t) && s.add("featuredLiveThread");
					const n = t.pathname || "";
					if (i.test(n) || u.test(n)) {
						const n = ((e, t) => {
								if (p.test(e.pathname || "")) {
									const {
										subreddit: e
									} = t.data;
									return e
								}
							})(t, r),
							a = e.platform.currentPage,
							c = a && a.urlParams.subredditName,
							d = n || c || "",
							i = Object(o.B)(e, d);
						i && e.structuredStyles.models[i] || s.add("structuredStyles"), e.user.prefs.subreddit[i] || s.add("prefsSubreddit")
					}
					return [...s].join(",")
				},
				f = r("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const r = n.a.parse(t.endpoint, !0),
					{
						host: s,
						protocol: o
					} = r;
				if (`${o}//${s}` === a.a.gatewayUrl) {
					const s = {},
						n = Object(f.eb)(e.getState()) ? "1" : "";
					s.allow_over18 = n, s.include = b(e.getState(), r, t), t.endpoint = Object(c.a)(t.endpoint, s)
				}
			}
		},
		"./src/reddit/helpers/ordinal/index.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				const t = ["th", "st", "nd", "rd"],
					r = e % 100;
				return e + (t[(r - 20) % 10] || t[r] || t[0])
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.H.NO_STRIPE_SUBSCRIPTION:
							case s.H.USER_DOESNT_EXIST:
							case s.H.USER_REQUIRED_ERROR:
							case s.H.VALIDATION_ERROR:
								return e;
							case s.H.NO_USER:
							case s.H.NO_TEXT:
							case s.H.NO_URL:
								return s.H.VALIDATION_ERROR;
							case s.H.CREDIT_CARD_FAILURE:
							case s.H.CREDIT_CARD_FAILURE_GENERIC:
								return s.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.H.VALIDATION_ERROR
				},
				a = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
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
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "g", (function() {
				return T
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			r("./node_modules/react/index.js");
			const n = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function a(e, t, ...r) {
				if (n(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let s = 0;
						(e = new Error(t.replace(/%s/g, () => String(r[s++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const c = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				o = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var d = function(e, t, r) {
					const n = e.length;
					if (0 === n) return "";
					if (1 === n) return e[0];
					const d = e[n - 1];
					let i = e[0];
					for (let a = 1; a < n - 1; ++a) switch (r) {
						case o.SEMICOLON:
							i = s.fbt._("{previous items}; {following items}", [s.fbt._param("previous items", i), s.fbt._param("following items", e[a])], {
								hk: "4hs4xq"
							});
							break;
						default:
							i = s.fbt._("{previous items}, {following items}", [s.fbt._param("previous items", i), s.fbt._param("following items", e[a])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, r, n) {
						switch (r) {
							case c.AND:
								return s.fbt._("{list of items} and {last item }", [s.fbt._param("list of items", e), s.fbt._param("last item ", t)], {
									hk: "1ylan1"
								});
							case c.OR:
								return s.fbt._("{list of items} or {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
									hk: "3q8AmB"
								});
							case c.NONE:
								switch (n) {
									case o.SEMICOLON:
										return s.fbt._("{previous item}; {last item}", [s.fbt._param("previous item", e), s.fbt._param("last item", t)], {
											hk: "1h77rJ"
										});
									default:
										return s.fbt._("{list of items}, {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
											hk: "3Q0iaX"
										})
								}
								default:
									a(!1, "Invalid conjunction %s provided to intlList", r)
						}
					}(i, d, t || c.AND, r || o.COMMA)
				},
				i = r("./src/lib/timezone/index.ts"),
				u = r("./src/reddit/helpers/isArrayEqual.ts"),
				l = r("./src/reddit/helpers/ordinal/index.ts"),
				p = r("./src/reddit/models/ScheduledPost/index.ts");
			const b = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				f = (e, t) => {
					if (e && t) {
						const r = Object(i.f)(y(e, t)),
							n = b(r);
						return s.fbt._("Submit post at {time}", [s.fbt._param("time", n)], {
							hk: "IZ3L"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				m = e => e.slice(0, 5),
				y = (e, t) => `${e}T${m(t)}:00`,
				E = e => {
					const [t, r] = e.split("T");
					return [t, m(r)]
				},
				_ = e => {
					const [t, r] = E(e);
					if (t && r) {
						const e = Object(i.f)(y(t, r));
						return b(e)
					}
					return ""
				},
				O = e => {
					const t = Object(i.d)(e);
					let r, s = e;
					if (t) {
						r = t.offset, s = `(GMT${Object(i.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: s,
						offset: r
					}
				},
				h = e => "string" == typeof e,
				I = e => {
					const t = new Date,
						r = e - t.getDay();
					return t.setDate(t.getDate() + r), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				S = e => {
					const t = (e => {
						const [t, r] = E(e);
						if (t && r) {
							return Object(i.f)(y(t, r)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === p.d.Hourly) return 2 === e.interval ? s.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? s.fbt._("Every {hour interval} hours", [s.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : s.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === p.d.Daily) return 2 === e.interval ? s.fbt._("Every other day at {start time}", [s.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? s.fbt._("Every {day interval} days at {start time}", [s.fbt._param("day interval", e.interval.toString()), s.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : s.fbt._("Every day at {start time}", [s.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === p.d.Weekly) {
						const r = (e => d(e.map(p.k).sort((e, t) => e - t).map(I), c.AND, o.COMMA))(e.byWeekDays);
						return 2 === e.interval ? s.fbt._("Every other week on {days of week } at {start time}", [s.fbt._param("days of week ", r), s.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? s.fbt._("Every {interval} weeks on {days of week} at {start time}", [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of week", r), s.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : s.fbt._("Every week on {days of week} at {start time}", [s.fbt._param("days of week", r), s.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const r = (e => d(e.sort((e, t) => e - t).map(l.a), c.AND, o.COMMA))(e.byMonthDays);
					return 2 === e.interval ? s.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? s.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : s.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				g = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = p.b);
					const r = Object(i.f)(e.publishAt),
						s = Object(p.q)(r.getDay()),
						n = r.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== s && (t = p.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== n && (t = p.b), {
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
				T = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const r in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(r)) {
							if (Array.isArray(e[r]) && (!Array.isArray(t[r]) || !Object(u.a)(e[r], t[r]))) return !1;
							if (e[r] !== t[r]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/helpers/trackers/commentList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/telemetry/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => {
				Object(s.a)({
					action: "view",
					source: "commentlist",
					noun: "bottom",
					...n.defaults(e),
					listing: n.listing(e, t),
					subreddit: n.subreddit(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "x", (function() {
				return g
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "E", (function() {
				return j
			})), r.d(t, "u", (function() {
				return v
			})), r.d(t, "v", (function() {
				return A
			})), r.d(t, "w", (function() {
				return w
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "D", (function() {
				return L
			})), r.d(t, "C", (function() {
				return N
			})), r.d(t, "A", (function() {
				return k
			})), r.d(t, "q", (function() {
				return x
			})), r.d(t, "t", (function() {
				return U
			})), r.d(t, "F", (function() {
				return F
			})), r.d(t, "B", (function() {
				return G
			})), r.d(t, "o", (function() {
				return B
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "h", (function() {
				return K
			})), r.d(t, "m", (function() {
				return W
			})), r.d(t, "f", (function() {
				return $
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "i", (function() {
				return Y
			})), r.d(t, "k", (function() {
				return z
			})), r.d(t, "l", (function() {
				return X
			})), r.d(t, "j", (function() {
				return J
			})), r.d(t, "e", (function() {
				return Z
			})), r.d(t, "p", (function() {
				return ee
			})), r.d(t, "z", (function() {
				return te
			}));
			var s, n = r("./src/lib/stringInterpolate/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = (r("./src/reddit/constants/categories.tsx"), r("./src/reddit/constants/tracking.ts")),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/helpers/trackers/searchResults.ts"),
				i = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = (r("./src/reddit/models/Widgets/index.ts"), r("./src/reddit/selectors/posts.ts")),
				l = r("./src/reddit/selectors/telemetry.ts"),
				p = r("./src/reddit/selectors/widgets.ts"),
				b = r("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const f = "discovery_unit",
				m = (e, t, r) => ({
					...l.defaults(e),
					source: f,
					screen: l.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && r ? Object(n.a)(t.title, {
							subredditName: r.name
						}) : t.title,
						name: t.unitName
					}
				}),
				y = (e, t, r) => ({
					...m(e, t, r),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				E = (e, t) => {
					Object(b.a)(_(t)(e))
				},
				_ = (e, t) => r => y(r, e, t),
				O = (e, t, r, s) => "unitName" in t ? m(e, t, s) : ((e, t, r) => ({
					...l.defaults(e),
					source: "search",
					screen: l.screen(e),
					search: r ? {
						...l.search(e, r),
						structureType: l.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, r),
				h = (e, t, r, n, a) => ({
					...O(e, t, n, a),
					action: "view",
					noun: s.ITEM_POST,
					post: l.post(e, r)
				}),
				I = ({
					post: e,
					rawQuery: t,
					searchQuery: r
				}) => ({
					displayQuery: decodeURIComponent(r),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? l.StructureType.PromotedTrend : l.StructureType.Trending
				});
			var S;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(S || (S = {}));
			const g = (e, t, r) => {
					Object(b.a)(D(e, t, r, c.c.CLICK))
				},
				T = (e, t, r) => {
					Object(b.a)(D(e, t, r, c.c.VIEW))
				},
				D = (e, t, r, s) => {
					const n = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...l.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: I(t),
						discoveryUnit: r === S.POPULAR_CAROUSEL ? {
							name: i.l,
							id: i.l,
							title: i.l,
							type: "query"
						} : void 0,
						actionInfo: l.actionInfo(e, {
							paneName: r,
							position: n
						}),
						search: {
							originPageType: e.platform.currentPage ? l.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: l.StructureType.Trending,
							queryId: s === c.c.CLICK ? Object(o.c)(o.a.SearchResults) : void 0
						}
					}
				},
				j = (e, t, r, s, n, a, o) => {
					Object(b.a)({
						...l.defaults(e),
						...Object(d.f)(e, r, s, n, a, t),
						action: c.c.VIEW,
						noun: o ? "ad" : "post"
					})
				},
				v = (e, t, r, s) => {
					Object(b.a)(h(e, t, r, s))
				},
				A = (e, t, r, s) => n => h(n, e, t, r, s),
				w = (e, t, r, n) => {
					const a = O(e, t, n);
					Object(b.a)({
						...a,
						...Object(p.b)(e, r),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				R = (e, t) => {
					Object(b.a)({
						...m(e, t),
						source: f,
						action: c.c.CLICK,
						noun: "show_less_often"
					})
				},
				C = (e, t, r, s) => {
					Object(b.a)(P(t, r, s)(e))
				},
				P = (e, t, r, n) => a => {
					return {
						...O(a, e, r, n),
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_POST,
						post: l.post(a, t)
					}
				},
				L = (e, t, r, s) => n => a => Object(d.f)(a, n, e, t, r, s),
				N = (e, t, r, s) => n => a => Object(d.e)(a, e, t, void 0, r, n, s),
				k = (e, t, r, s) => n => a => ({
					...Object(d.f)(a, n, e, t, r, s),
					noun: "ad"
				}),
				x = (e, t) => r => n => ({
					...e ? m(n, e, t) : {},
					source: f,
					action: c.c.CLICK,
					noun: s.ITEM_POST,
					post: l.post(n, r)
				}),
				U = (e, t, r, s) => {
					Object(b.a)(M(t, r, s)(e))
				},
				M = (e, t, r, s) => n => {
					const a = Object(u.c)(n, {
							postId: t
						}),
						o = a ? Object(p.b)(n, a) : void 0;
					return {
						...O(n, e, r, s),
						...o,
						source: f,
						action: c.c.CLICK,
						noun: "item_post_subreddit",
						post: l.post(n, t)
					}
				},
				F = (e, t, r) => {
					const s = O(e, t);
					Object(b.a)({
						...s,
						...Object(p.b)(e, r),
						source: "search",
						action: c.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				G = (e, t, r, s, n, a) => {
					Object(b.a)({
						...l.defaults(e),
						...Object(d.e)(e, t, r, s, n, void 0, a)
					})
				},
				B = (e, t, r) => {
					const s = O(e, t);
					Object(b.a)({
						...s,
						...Object(p.b)(e, r),
						source: f,
						action: c.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				H = () => ({
					id: "xd_focus_verticals",
					unitType: i.e.Listing,
					experiment: "",
					title: a.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: i.c.Large,
					surface: i.d.Frontpage,
					url: "gql.reddit.com"
				}),
				V = (e, t, r) => l.actionInfo(e, {
					position: r
				}),
				q = (e, t, r) => {
					const s = H();
					return e => ({
						...y(e, s),
						actionInfo: V(e, 0, r),
						subreddit: l.subredditById(e, t)
					})
				},
				K = (e, t, r) => {
					const s = H();
					return e => ({
						...h(e, s, t),
						actionInfo: V(e, 0, r)
					})
				},
				W = (e, t, r) => {
					const n = H();
					return e => ({
						...m(e, n),
						actionInfo: V(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						source: f,
						action: c.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				$ = (e, t, r) => {
					const n = H();
					return e => ({
						...m(e, n),
						actionInfo: V(e, 0, r),
						post: l.post(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				Q = (e, t, r, n) => {
					const a = H();
					return e => ({
						...m(e, a),
						actionInfo: V(e, 0, n),
						subreddit: l.subredditById(e, r) || null,
						post: l.post(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				Y = (e, t, r) => {
					const n = H();
					return e => ({
						...m(e, n),
						actionInfo: V(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				z = (e, t, r, n) => {
					const a = H();
					return e => ({
						...m(e, a),
						actionInfo: V(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						post: n ? l.post(e, n) : null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				X = (e, t, r, n) => {
					const a = H();
					return e => ({
						...m(e, a),
						actionInfo: V(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						post: n ? l.post(e, n) : null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				J = (e, t, r) => {
					const n = H();
					return e => ({
						...m(e, n),
						actionInfo: V(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				Z = (e, t, r) => {
					const n = H();
					return e => ({
						...m(e, n),
						actionInfo: V(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				ee = (e, t) => r => ({
					...m(r, e),
					...t && Object(p.b)(r, t),
					source: f,
					action: c.c.CLICK,
					noun: "item"
				}),
				te = e => t => ({
					...m(t, e),
					source: f,
					action: c.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return o
			})), r.d(t, "y", (function() {
				return d
			})), r.d(t, "m", (function() {
				return i
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "q", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "r", (function() {
				return m
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "t", (function() {
				return T
			})), r.d(t, "j", (function() {
				return D
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "x", (function() {
				return v
			})), r.d(t, "u", (function() {
				return A
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "s", (function() {
				return R
			})), r.d(t, "v", (function() {
				return C
			})), r.d(t, "w", (function() {
				return P
			}));
			var s = r("./src/reddit/models/ScheduledPost/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...n.defaults(e),
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				c = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				o = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...a(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...a(e)
				}),
				i = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...a(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...a(e)
				}),
				l = () => e => ({
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
				b = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...a(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...a(t),
					scheduledPost: c(e)
				}),
				m = e => t => ({
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
				E = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...a(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...a(e)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...a(e)
				}),
				h = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...a(t),
					actionInfo: n.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				I = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				S = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : I[e],
					...a(t)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...a(e)
				}),
				T = (e, t, r) => c => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...a(c),
					actionInfo: n.actionInfo(c, {
						settingValue: t ? "true" : "false",
						pageType: r ? "recurring_posts" : "scheduled_posts"
					})
				}),
				D = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...a(e)
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...a(e)
				}),
				v = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...a(e)
				}),
				A = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...a(e),
					scheduledPost: c(t)
				}),
				w = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...a(e)
				}),
				R = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...a(e),
					scheduledPost: c(t)
				}),
				C = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...a(e)
				}),
				P = () => (e, t) => {
					const r = a(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: c(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return p
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...n.defaults(t),
					actionInfo: n.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				c = (e, t, r) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...n.defaults(a),
					actionInfo: n.actionInfo(a, {
						settingValue: e
					}),
					subreddit: {
						id: r,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				o = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...n.defaults(e),
					actionInfo: n.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = (e, t) => r => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...n.defaults(r),
					actionInfo: n.actionInfo(r, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...n.defaults(e),
					actionInfo: n.actionInfo(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...n.defaults(e),
					actionInfo: n.actionInfo(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...n.defaults(e),
					actionInfo: n.actionInfo(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...n.defaults(e),
					actionInfo: n.actionInfo(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditForking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/reddit/selectors/telemetry.ts");
			const n = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "click",
					...s.defaults(e),
					actionInfo: s.actionInfo(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "dismiss",
					...s.defaults(e),
					actionInfo: s.actionInfo(e)
				}),
				c = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...s.defaults(e),
					actionInfo: s.actionInfo(e)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");

			function a(e, t = n.a) {
				return Object(s.e)(r => Object(n.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				n = r("./src/reddit/helpers/localStorage/index.ts");
			const a = {},
				c = (e, t, r) => (a[e] || (a[e] = {
					callbacks: [],
					value: r
				}), a[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: r
						} = a[e], s = r.indexOf(t);
						s > -1 && r.splice(s, 1)
					},
					emit: r => {
						a[e].value !== r && (a[e].value = r, a[e].callbacks.forEach(e => {
							e !== t && e(r)
						}))
					}
				});

			function o(e, t) {
				const r = Object(s.useRef)(null);
				let a;
				a = Object(n.A)(e);
				const [o, d] = Object(s.useState)(null != a ? a : t);
				return Object(s.useEffect)(() => (r.current = c(e, d, t), () => {
					var e;
					return null === (e = r.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(s.useEffect)(() => {
					var e;
					null === (e = r.current) || void 0 === e || e.emit(o)
				}, [o]), [o, function(t) {
					Object(n.Cb)(e, t), d(t)
				}]
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			}));
			var s, n, a = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(n || (n = {}));
			const c = {
					[s.Loyalty]: a.a.First,
					[s.Achievement]: a.a.Second,
					[s.Cosmetic]: void 0
				},
				o = e => e === a.a.First ? s.Loyalty : e === a.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/ChatSettingsPage/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "c", (function() {
					return n
				})), r.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Unknown = "unknown", e.Toggle = "BOOLEAN"
				}(s || (s = {}));
			const n = (e, t, r = !1) => e && Array.isArray(e) && e.length ? e.reduce((e, n) => {
					if (n && n.id && n.type && n.title && n.hasOwnProperty("state")) switch (n.type) {
						case s.Toggle:
							e.push({
								settingType: s.Toggle,
								settingId: n.id,
								subredditId: t,
								description: n.description,
								descriptionUrl: n.descriptionUrl,
								groupName: n.groupName,
								isEditable: !r && n.isEditable,
								state: "true" === String(n.state).toLowerCase(),
								title: n.title
							});
							break;
						default:
							e.push({
								settingType: s.Unknown,
								settingId: n.id,
								subredditId: t,
								description: n.description,
								descriptionUrl: n.descriptionUrl,
								groupName: n.groupName,
								isEditable: !r && n.isEditable,
								state: n.state,
								title: n.title
							})
					}
					return e
				}, []) : [],
				a = e => e.reduce((e, t) => (t.isEditable && e.push({
					id: t.settingId,
					state: String(t.state)
				}), e), [])
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			}));
			const s = 24,
				n = 64e3,
				a = 128,
				c = 128,
				o = (e, t, r, s) => ({
					name: e,
					url: t,
					subredditId: r,
					...s
				})
		},
		"./src/reddit/models/NewCommunityProgress/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			const s = "new_community_setup",
				n = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var a, c, o;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(a || (a = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(c || (c = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(o || (o = {}))
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "o", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "p", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/reddit/models/GqlTopLevelField.ts"),
				a = r("./src/reddit/models/User/index.ts");
			const c = "scheduledposts";
			var o, d, i;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(o || (o = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(d || (d = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(i || (i = {}));
			const u = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				l = e => e.__typename === a.c.AvailableRedditor,
				p = e => e.__typename === n.a.Subreddit;
			var b, f, m, y;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(b || (b = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(m || (m = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(y || (y = {}));
			const E = e => f[y[e]],
				_ = e => y[f[e]],
				O = e => m[f[e]],
				h = e => f[m[e]],
				I = e => y[m[e]];
			var S;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(S || (S = {}));
			const g = e => {
					switch (e) {
						case S.Hourly:
						case S.Daily:
						case S.Weekly:
						case S.Monthly:
							return !0
					}
					return !1
				},
				T = "custom",
				D = e => {
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
							return Object(s.a)(e)
					}
				},
				j = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(s || (s = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, n = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const a = {
				status: s.NotFetched
			};
			t.b = (e = a, t) => {
				switch (t.type) {
					case n.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: s,
									...n
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: n
									}
								}
							}
						}
						return e;
					case n.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: s,
									...n
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: n
									}
								}
							}
						}
						return e;
					case n.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case n.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case n.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n = r("./src/lib/constants/specialMembership.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				c = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const i = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, r, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(n => {
						let a;
						(a = e.placement ? e.placement === o.a.First ? s[d.a.Loyalty][n] : s[d.a.Achievement][n] : u(e) ? s[d.a.Cosmetic][d.c.MyBadges][n] : s[d.a.Cosmetic][d.c.Gallery][n]) && (u(e) ? r.has(e.id) && a.unlocked.push(e) : t.has(e.id) || a.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return r === s ? Object(c.b)(e, t) : r - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === n.a).map(p).sort((e, r) => {
					const s = t[e.id],
						n = t[r.id];
					return Object(c.b)(s, n)
				})
			}

			function f(e) {
				const t = {
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const s = e.collections[r],
						n = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[d.a.Loyalty][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][r] = {
						...n,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && r.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), r, s, t), l(Object.keys(e.products).map(t => e.products[t]), r, s, t), {
					collections: {
						[d.a.Loyalty]: b(t[d.a.Loyalty], e.collections),
						[d.a.Achievement]: b(t[d.a.Achievement], e.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: b(t[d.a.Cosmetic][d.c.Gallery], e.collections),
							[d.c.MyBadges]: b(t[d.a.Cosmetic][d.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = i, t) => {
				switch (t.type) {
					case a.a: {
						const {
							subredditId: r
						} = t.payload, n = e[r];
						return n && n.status === s.Fetched ? {
							...e,
							[r]: {
								...n,
								data: {
									...n.data
								},
								raw: {
									...n.raw
								}
							}
						} : e
					}
					case a.h: {
						const {
							subredditId: r
						} = t.payload, n = e[r];
						return n && n.status === s.Fetched ? {
							...e,
							[r]: {
								...n,
								data: {
									...n.data,
									subscription: {
										...n.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...n.raw,
									subscription: {
										...n.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case a.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: f(r),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				a = r("./src/reddit/actions/economics/me/constants.ts");
			const c = {};
			var o = (e = c, t) => {
					switch (t.type) {
						case a.a: {
							const r = t.payload.claimPoints || {},
								s = Object.keys(r).reduce((t, s) => (t[s] = {
									...e[s],
									availableClaims: r[s]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (s[t] = s[t] || {
									availableClaims: []
								}, s[t].isClaiming = !0)
							}), s
						}
						case n.b:
						case n.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === n.b
								}
							};
						default:
							return e
					}
				},
				d = r("./src/reddit/actions/governance/constants.ts");
			const i = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, r, s, n, a;
				const c = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					o = null == c ? void 0 : c.contracts,
					d = null == o ? void 0 : o.unlocked,
					i = null !== (s = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== s ? s : e.provider,
					l = !!(null === (n = e.walletProvider) || void 0 === n ? void 0 : n.inTransition),
					p = (null == d ? void 0 : d.decimals) || 0,
					b = "1" + "0".repeat(p);
				return {
					blockchainProvider: i,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: o,
					decimals: p,
					displayConversion: b,
					images: e.images || u,
					inTransition: l,
					name: e.name,
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: (null == d ? void 0 : d.token) || ""
				}
			}
			var p = (e = i, t) => {
				switch (t.type) {
					case d.a: {
						const {
							subredditId: r,
							meta: s
						} = t.payload;
						return {
							...e,
							[r]: l(s)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var f = (e = b, t) => {
				switch (t.type) {
					case d.n: {
						const {
							subredditId: r,
							wallets: s
						} = t.payload, n = Object.keys(s).reduce((t, n) => {
							return {
								...t,
								[n]: {
									...e[n] || {},
									[r]: s[n]
								}
							}
						}, {});
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				claims: o,
				points: p,
				publicWallets: f
			})
		},
		"./src/reddit/reducers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return MT
			}));
			var s = r("./src/reddit/actions/modal.ts");
			const n = {};
			var a = (e = n, t) => {
					switch (t.type) {
						case s.e:
							if (!t.payload.actionSource && !t.payload.redirectUrl) return n;
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				c = r("./src/reddit/actions/authorFlair.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				d = r("./src/reddit/actions/governance/constants.ts"),
				i = r("./src/reddit/actions/harbergerTax/constants.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				l = r("./src/reddit/actions/product.ts"),
				p = r("./src/reddit/actions/reportFlow/constants.ts"),
				b = r("./src/reddit/actions/structuredStyles/constants.ts"),
				f = r("./src/reddit/constants/modals.ts");
			var m = (e = null, t) => {
					switch (t.type) {
						case s.c: {
							const {
								id: r,
								args: s
							} = t.payload;
							return (null == e ? void 0 : e.id) === r ? null : {
								id: r,
								args: s
							}
						}
						case s.b:
						case s.d:
						case u.a:
						case p.f:
							return t.type === u.a && (null == e ? void 0 : e.id) === f.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
						case b.e:
							return (null == e ? void 0 : e.id) === f.a.BLADE_UNSAVED_CHANGES ? null : e;
						case b.d:
							return (null == e ? void 0 : e.id) === f.a.BLADE_NIGHTMODE ? null : e;
						case c.a:
							return (null == e ? void 0 : e.id) === f.a.USER_FLAIR_MODAL_ID ? null : {
								id: f.a.USER_FLAIR_MODAL_ID
							};
						case l.b:
							return {
								id: f.a.BADGE_PURCHASE
							};
						case d.d:
							return {
								id: f.a.GOVERNANCE_OPT_OUT
							};
						case d.r:
							return {
								id: f.a.TRANSFER_POINTS
							};
						case d.o:
							return {
								id: f.a.GOVERNANCE_RELEASE_NOTES
							};
						case i.e:
							return {
								id: f.a.HARBERGER_TAX_BANNER_PURCHASE
							};
						case i.c:
							return {
								id: f.a.HARBERGER_TAX_BANNER_MANAGE
							};
						case i.b:
							return {
								id: f.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE
							};
						case i.a:
							return {
								id: f.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE
							};
						case d.x:
							return {
								id: f.a.WALLET_REGISTRATION_MODAL
							};
						case o.c:
							return {
								id: f.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				y = r("./src/reddit/actions/ads/constants.ts"),
				E = r("./src/reddit/actions/unload/constants.ts");
			const _ = {};

			function O(e, t, r, s) {
				const n = e[t];
				return {
					...e,
					[t]: {
						...n,
						[s]: r
					}
				}
			}
			var h = (e = _, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case y.d:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case y.b:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case y.n:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case y.k:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case y.e:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case y.j:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case y.i:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case y.g:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case y.f:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case y.h:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case y.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return O(e, r, n, `adVideoWatchedPercent${s}`)
						}
						case y.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return O(e, r, n, `adVideoWatchedSeconds${s}`)
						}
						case y.w:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case y.y:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case y.x:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case E.b:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case y.s:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case y.c: {
							const {
								postId: r,
								vendorMetadata: s,
								eventType: n
							} = t.payload;
							return O(e, r, s, `adGalleryItemImpression${n}`)
						}
						default:
							return e
					}
				},
				I = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/apiRequestState.ts"));
			const S = {};
			var g = (e = S, t) => {
					switch (t.type) {
						case I.d:
						case I.a:
						case I.b: {
							const r = t.payload;
							return {
								...e,
								[r.apiRequestId]: r
							}
						}
						case I.c: {
							const r = t.payload;
							if (!(r in e)) return e;
							if (1 === Object.keys(e).length) return S;
							const s = {
								...e
							};
							return delete s[r], s
						}
						default:
							return e
					}
				},
				T = r("./node_modules/redux/es/redux.js"),
				D = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var j = (e = null, t) => {
				switch (t.type) {
					case D.a:
						return t.payload && t.payload.error || null;
					case D.b:
					case D.c:
						return null;
					default:
						return e
				}
			};
			var v = (e = !1, t) => {
					switch (t.type) {
						case D.c:
							return !0;
						case D.a:
						case D.b:
							return !1;
						default:
							return e
					}
				},
				A = Object(T.c)({
					error: j,
					pending: v
				});
			const w = {};
			var R = (e = w, t) => {
					switch (t.type) {
						case D.d:
						case D.b: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case D.c:
						case D.a:
						default:
							return e
					}
				},
				C = Object(T.c)({
					api: A,
					badges: R
				});
			var P = (e = null, t) => {
					switch (t.type) {
						case c.a:
							return t.payload;
						default:
							return e
					}
				},
				L = r("./node_modules/icepick/icepick.js"),
				N = r("./node_modules/lodash/mergeWith.js"),
				k = r.n(N),
				x = r("./src/reddit/actions/comment/constants.ts"),
				U = r("./src/reddit/actions/comment/websocket/constants.ts"),
				M = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				F = r("./src/reddit/actions/modQueue/constants.ts"),
				G = r("./src/reddit/actions/pages/constants.ts"),
				B = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				H = r("./src/reddit/actions/pages/profilePosts.ts"),
				V = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				q = r("./src/reddit/actions/pages/search.ts"),
				K = r("./src/reddit/actions/pages/subreddit.ts"),
				W = r("./src/reddit/actions/profileConversations.ts"),
				$ = r("./src/reddit/actions/subreddit.ts"),
				Q = r("./src/reddit/actions/userFlair/constants.ts"),
				Y = r("./src/reddit/models/User/index.ts");
			const z = {};
			var X = (e = z, t) => {
				switch (t.type) {
					case U.b:
					case U.c: {
						const r = t.payload,
							{
								authorFlair: s
							} = r;
						if (s) {
							return k()({
								...e
							}, s, (e, t, r) => {
								if ("richtext" === r) return t
							})
						}
						return e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							authorFlair: r
						} = t.payload;
						if (r) {
							return Object(L.merge)(e, r)
						}
						return e
					}
					case x.w:
					case K.SUBREDDIT_LOADED:
					case G.f:
					case B.b:
					case B.e:
					case H.PROFILE_POSTS_LOADED:
					case H.MORE_POSTS_LOADED:
					case W.e:
					case $.i:
						return J(e, t.payload);
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
						return J(e, t.payload.response);
					case Q.r: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isUserEnabled: a
							}
						} = t.payload;
						return Object(L.setIn)(e, [r, s], a ? n : null)
					}
					case M.h:
					case M.b: {
						const {
							subredditId: r,
							userName: s,
							applied: n
						} = t.payload;
						return e[r] && e[r][s] ? Object(L.setIn)(e, [r, s], n) : e
					}
					case Q.a: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isEnabled: a
							}
						} = t.payload;
						return Object(L.setIn)(e, [r, s], a ? n : null)
					}
					default:
						return e
				}
			};
			const J = (e, {
				account: t,
				authorFlair: r,
				userFlair: s
			}) => {
				const n = Object(L.merge)(e, r);
				if (!s || !t) return n;
				const a = Object.keys(s)[0];
				if (!a) return n;
				const c = s[a],
					o = Object(Y.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(L.merge)(n, {
					[a]: {
						[o]: d
					}
				}) : n
			};
			var Z = Object(T.c)({
					inContext: P,
					models: X
				}),
				ee = r("./src/reddit/actions/gold/constants.ts");
			const te = {};
			var re = (e = te, t) => {
				switch (t.type) {
					case ee.d: {
						const {
							disabled: r,
							subredditOrProfileId: s
						} = t.payload;
						return r ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			var se = (e = null, t) => {
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
			var ne = (e = !1, t) => {
					switch (t.type) {
						case u.a:
						case ee.i:
						case ee.g:
							return !1;
						case ee.h:
							return !0;
						default:
							return e
					}
				},
				ae = Object(T.c)({
					error: se,
					pending: ne
				}),
				ce = Object(T.c)({
					api: ae
				});
			var oe = (e = null, t) => {
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
			const de = {};
			var ie = (e = de, t) => {
					switch (t.type) {
						case ee.H: {
							const {
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ee.d:
						case ee.G:
						case ee.M:
						case ee.F: {
							const {
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				ue = Object(T.c)({
					error: oe,
					pending: ie
				});
			const le = {};
			var pe = (e = le, t) => {
				switch (t.type) {
					case ee.M: {
						const {
							awards: r,
							subredditOrProfileId: s
						} = t.payload, n = {};
						return r.forEach(e => {
							n[e.id] = e.isEnabled
						}), {
							...e,
							[s]: n
						}
					}
					case ee.l: {
						const {
							awardId: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								[r]: !1
							}
						}
					}
					case ee.o: {
						const {
							awardId: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const be = {};
			var fe = (e = be, t) => {
					switch (t.type) {
						case ee.G: {
							const {
								awards: r,
								subredditOrProfileId: s
							} = t.payload, n = r.map(e => e.id);
							return {
								...e,
								[s]: n
							}
						}
						case ee.i: {
							const {
								award: r,
								subredditId: s
							} = t.payload;
							if (r && r.id) {
								if (!e[s]) return {
									...e,
									[s]: [r.id]
								};
								if (-1 === e[s].indexOf(r.id)) return {
									...e,
									[s]: [r.id, ...e[s]]
								}
							}
							return e
						}
						default:
							return e
					}
				},
				me = Object(T.c)({
					api: ue,
					availability: pe,
					order: fe
				}),
				ye = r("./node_modules/lodash/merge.js"),
				Ee = r.n(ye);
			const _e = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var Oe = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : _e(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : _e(e.endsAt)), e),
				he = r("./src/reddit/models/Gold/Award.ts"),
				Ie = r("./src/reddit/actions/discoveryUnit.ts"),
				Se = r("./src/reddit/actions/frontpage/constants.ts"),
				ge = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Te = r("./src/reddit/actions/multireddit/constants.ts"),
				De = r("./src/reddit/actions/pages/modListing/constants.ts"),
				je = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				ve = r("./src/reddit/actions/pages/postCreation.ts"),
				Ae = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				we = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Re = r("./src/lib/makeActionCreator/index.ts"),
				Ce = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Re.a)("RECOMMENDED_POSTS_LOADED"), Object(Re.a)("RECOMMENDED_POSTS_FAILED");
			var Pe = r("./src/reddit/actions/search.ts");
			const Le = he.m,
				Ne = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([Oe]),
				ke = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Ne(t), e), {});
					return Ee()({
						...e
					}, r)
				};
			var xe = (e = Le, t) => {
				var r;
				switch (t.type) {
					case ee.G: {
						const {
							awards: r
						} = t.payload;
						return ke(e, r)
					}
					case ee.M: {
						const r = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...Ne(t),
							isEnabled: !0
						}, e), {});
						return Ee()({
							...e
						}, r)
					}
					case ee.b: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = Ne(t.award), e), {});
						return Ee()({
							...e
						}, s)
					}
					case ee.i: {
						const {
							award: r
						} = t.payload;
						return r && r.id ? e[r.id] ? Ee()({
							...e
						}, {
							[r.id]: Ne(r)
						}) : {
							...e,
							[r.id]: Ne(r)
						} : e
					}
					case ee.kb: {
						const {
							awardId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: {
								...e[r],
								isEnabled: !1
							}
						} : e
					}
					case G.b:
					case x.w:
					case U.b:
					case ve.PAGE_LOADED:
					case Ie.e:
					case Se.f:
					case De.e:
					case De.h:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case Te.r:
					case G.f:
					case Se.b:
					case je.b:
					case q.SEARCH_RESULTS_RECEIVED:
					case B.b:
					case B.e:
					case W.b:
					case W.e:
					case Ae.b:
					case Ae.e:
					case we.b:
					case H.MORE_POSTS_LOADED:
					case H.PROFILE_POSTS_LOADED:
					case V.c:
					case V.e:
					case V.i:
					case V.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Pe.g:
					case $.i:
					case K.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							n = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Ne(Object(he.h)(e))
						}
						for (const e in n) {
							const t = n[e],
								{
									associatedAward: s,
									allAwardings: a = []
								} = t;
							for (const e of a) r[e.id] = Ne(Object(he.h)(e));
							s && (r[s.id] = Ne(s))
						}
						return Object.keys(r).forEach(t => {
							var s;
							0 === (null === (s = e[t]) || void 0 === s ? void 0 : s.coinPrice) && delete r[t]
						}), Ee()({
							...e
						}, r)
					}
					case ee.tb: {
						const r = {},
							{
								topAwardedPosts: s
							} = t.payload;
						return s.map(e => {
							const {
								post: t
							} = e, s = t.awardings || [];
							for (const n of s) {
								const e = n.award;
								r[e.id] = e
							}
						}), Ee()({
							...e
						}, r)
					}
					case ge.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return ke(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case ge.h: {
						const {
							awards: r
						} = t.payload;
						return ke(e, r || [])
					}
					default:
						return e
				}
			};
			const Ue = {};
			var Me = (e = Ue, t) => {
					switch (t.type) {
						case ee.c: {
							const {
								subredditOrProfileId: r,
								thingId: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									[s]: !0
								}
							}
						}
						case ee.b:
						case ee.a: {
							const {
								subredditOrProfileId: r,
								thingId: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									[s]: !1
								}
							}
						}
						default:
							return e
					}
				},
				Fe = Object(T.c)({
					pending: Me
				});
			const Ge = {};
			var Be = (e = Ge, t) => {
					switch (t.type) {
						case ee.b: {
							const {
								awards: r,
								subredditOrProfileId: s,
								thingId: n
							} = t.payload, a = r.map(({
								award: e,
								total: t
							}) => ({
								award: {
									id: e.id
								},
								total: t
							}));
							return {
								...e,
								[s]: {
									...e[s],
									[n]: a
								}
							}
						}
						default:
							return e
					}
				},
				He = Object(T.c)({
					api: Fe,
					order: Be
				});
			const Ve = {};
			var qe = (e = Ve, t) => {
					switch (t.type) {
						case ee.b: {
							const {
								tags: r,
								subredditOrProfileId: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Ke = Object(T.c)({
					order: qe
				}),
				We = Object(T.c)({
					blacklist: re,
					create: ce,
					manageable: me,
					models: xe,
					sortedUsable: He,
					tags: Ke
				}),
				$e = r("./src/reddit/actions/badge.ts");
			const Qe = {};
			var Ye = (e = Qe, t) => {
				switch (t.type) {
					case $e.d:
					case $e.e: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case $e.c: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const ze = {};
			var Xe = (e = ze, t) => {
					switch (t.type) {
						case $e.d: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $e.e:
						case $e.c: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Je = Object(T.c)({
					error: Ye,
					pending: Xe
				});
			const Ze = {};
			var et = (e = Ze, t) => {
				switch (t.type) {
					case $e.g:
					case $e.h: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case $e.f: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const tt = {};
			var rt = (e = tt, t) => {
					switch (t.type) {
						case $e.g: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $e.h:
						case $e.f: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				st = Object(T.c)({
					error: et,
					pending: rt
				}),
				nt = Object(T.c)({
					subreddit: Je,
					user: st
				});
			const at = {};
			var ct = (e = at, t) => {
					switch (t.type) {
						case o.i:
						case $e.e:
						case $e.h:
						case l.d: {
							const {
								badges: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ot = Object(T.c)({
					api: nt,
					models: ct
				}),
				dt = r("./src/reddit/actions/blockedRedditors.ts");
			const it = {
				message: ""
			};
			var ut = (e = it, t) => {
				switch (t.type) {
					case dt.c:
					case dt.d:
						return e;
					case dt.b:
						return t.payload;
					default:
						return e
				}
			};
			var lt = (e = !1, t) => {
					switch (t.type) {
						case dt.d:
							return !0;
						case dt.c:
						case dt.b:
							return !1;
						default:
							return e
					}
				},
				pt = Object(T.c)({
					error: ut,
					pending: lt
				});
			const bt = {
				ids: []
			};
			var ft = (e = bt, t) => {
					switch (t.type) {
						case dt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case dt.e:
							const r = e.ids.slice();
							return r.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: r
							};
						case dt.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				mt = Object(T.c)({
					api: pt,
					list: ft
				}),
				yt = r("./src/reddit/actions/userBlocks.ts");
			const Et = {};
			var _t = (e = Et, t) => {
				switch (t.type) {
					case yt.f:
					case yt.e: {
						const {
							userId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case yt.d: {
						const {
							userId: r,
							type: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ot = {};
			var ht = (e = Ot, t) => {
					switch (t.type) {
						case yt.f: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case yt.e:
						case yt.d: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				It = Object(T.c)({
					error: _t,
					pending: ht
				}),
				St = Object(T.c)({
					api: It
				});
			const gt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var Tt = (e = gt, t) => {
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case K.SUBREDDIT_PENDING:
						case je.c:
						case Se.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Dt = r("./src/reddit/actions/celebratoryMoments/constants.ts");
			const jt = {
				isRenderCelebratoryMoment: !1
			};
			var vt = (e = jt, t) => {
					switch (t.type) {
						case Dt.a: {
							const {
								isUpvote: e,
								postId: r
							} = t.payload;
							return {
								isRenderCelebratoryMoment: !0,
								isUpvote: e,
								postId: r
							}
						}
						case Dt.b:
							return jt;
						default:
							return e
					}
				},
				At = r("./src/reddit/actions/downToChat.ts");
			var wt = (e = null, t) => {
				switch (t.type) {
					case At.f:
					case At.g:
						return null;
					case At.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Rt = (e = !1, t) => {
					switch (t.type) {
						case At.b:
						case At.f:
							return !0;
						case At.a:
						case At.c:
						case At.e:
						case At.g:
							return !1;
						default:
							return e
					}
				},
				Ct = Object(T.c)({
					error: wt,
					pending: Rt
				}),
				Pt = r("./node_modules/lodash/mapValues.js"),
				Lt = r.n(Pt);
			const Nt = {};
			var kt = (e = Nt, t) => {
					switch (t.type) {
						case At.f:
						case At.e:
						case At.g: {
							const {
								subredditId: r,
								bannerEnabled: s,
								buttonEnabled: n
							} = t.payload;
							return {
								...e,
								[r]: {
									bannerEnabled: s,
									buttonEnabled: n
								}
							}
						}
						case At.c: {
							const {
								subredditId: r,
								bannerEnabled: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									bannerEnabled: s
								}
							}
						}
						case At.d:
							return {
								...Lt()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case At.a:
						case At.b:
						default:
							return e
					}
				},
				xt = Object(T.c)({
					api: Ct,
					subreddits: kt
				}),
				Ut = r("./src/reddit/actions/chat/init.ts");
			var Mt = (e = !1, t) => {
					switch (t.type) {
						case Ut.a:
							return !0;
						default:
							return e
					}
				},
				Ft = r("./src/lib/omitKey/index.ts"),
				Gt = r("./src/reddit/actions/pages/chatSettings.ts");
			const Bt = {};
			var Ht = (e = Bt, t) => {
				switch (t.type) {
					case Gt.b: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Gt.a:
					case Gt.c:
					case Gt.d: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Ft.a)(e, r)
					}
					default:
						return e
				}
			};
			const Vt = {};
			var qt = (e = Vt, t) => {
					switch (t.type) {
						case Gt.a:
						case Gt.b:
						case Gt.c:
						case Gt.d: {
							const {
								subredditId: r
							} = t.payload, s = t.type === Gt.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Kt = Object(T.c)({
					error: Ht,
					pending: qt
				}),
				Wt = Object(T.c)({
					fetch: Kt
				});
			const $t = {};
			var Qt = (e = $t, t) => {
					switch (t.type) {
						case Gt.a:
						case Gt.d: {
							const {
								subredditId: r,
								chatSettings: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Yt = Object(T.c)({
					api: Wt,
					models: Qt
				}),
				zt = r("./src/reddit/actions/chat/unreadCount.ts");
			const Xt = {
				apiError: null
			};
			var Jt = (e = Xt, t) => {
				switch (t.type) {
					case zt.a.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...Xt,
							apiError: e
						}
					}
					case zt.a.REQUEST_SUCCESS:
					case zt.a.REQUEST_PENDING:
						return Xt;
					default:
						return e
				}
			};
			var Zt = (e = !1, t) => {
					switch (t.type) {
						case zt.a.REQUEST_PENDING:
							return !0;
						case zt.a.REQUEST_FAILED:
						case zt.a.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				er = Object(T.c)({
					error: Jt,
					pending: Zt
				});
			const tr = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var rr = (e = tr, t) => {
					switch (t.type) {
						case zt.a.SYNC:
						case zt.a.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				sr = Object(T.c)({
					api: er,
					count: rr
				}),
				nr = Object(T.c)({
					downToChat: xt,
					isInited: Mt,
					subredditSettingsPage: Yt,
					unread: sr
				}),
				ar = r("./src/reddit/actions/claimgold.ts");
			var cr = (e = null, t) => {
				switch (t.type) {
					case ar.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case ar.d:
					case ar.e:
					case ar.c:
						return null;
					default:
						return e
				}
			};
			var or = (e = !1, t) => {
				switch (t.type) {
					case ar.d:
					case ar.c:
					case ar.a:
						return !1;
					case ar.b:
						return !0;
					default:
						return e
				}
			};
			var dr = (e = !1, t) => {
					switch (t.type) {
						case ar.b:
						case ar.d:
						case ar.c:
						case ar.a:
							return !1;
						case ar.f:
							return !0;
						default:
							return e
					}
				},
				ir = Object(T.c)({
					error: cr,
					pending: or,
					showLoader: dr
				});
			var ur = (e = "", t) => {
				switch (t.type) {
					case ar.g:
						return t.payload;
					case ar.e:
						return "";
					default:
						return e
				}
			};
			var lr = (e = !1, t) => {
					switch (t.type) {
						case ar.e:
							return !0;
						case ar.c:
						case ar.d:
							return !1;
						default:
							return e
					}
				},
				pr = Object(T.c)({
					api: ir,
					code: ur,
					showModal: lr
				}),
				br = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var fr = (e = !0, t) => {
					switch (t.type) {
						case br.a:
							return !1;
						case br.b:
							return !0;
						default:
							return e
					}
				},
				mr = r("./src/reddit/actions/communityFlairs/constants.ts");
			const yr = {};
			var Er = (e = yr, t) => {
					switch (t.type) {
						case mr.a: {
							const {
								models: r,
								sortedKeys: s,
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: {
									sortedKeys: s,
									models: r
								}
							}
						}
						default:
							return e
					}
				},
				_r = r("./src/reddit/actions/connection/constants.ts");
			const Or = {
				showBanner: !1,
				online: !0
			};
			var hr = (e = Or, t) => {
					switch (t.type) {
						case _r.a:
							return {
								online: !1, showBanner: !0
							};
						case _r.b:
							return {
								online: !0, showBanner: !0
							};
						case _r.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				Ir = r("./src/reddit/actions/contentControls/constants.ts");
			const Sr = {};
			var gr = (e = Sr, t) => {
				switch (t.type) {
					case Ir.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Ir.c:
					case Ir.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(Ft.a)(e, r)
					}
					default:
						return e
				}
			};
			const Tr = {};
			var Dr = (e = Tr, t) => {
					switch (t.type) {
						case Ir.c:
						case Ir.a:
						case Ir.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === Ir.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				jr = Object(T.c)({
					error: gr,
					pending: Dr
				}),
				vr = Object(T.c)({
					fetch: jr
				});
			const Ar = {};
			var wr = (e = Ar, t) => {
					switch (t.type) {
						case Ir.b: {
							const {
								subredditName: r,
								postRequirements: s,
								automatedReporting: n
							} = t.payload;
							return {
								...e,
								[r]: {
									automatedReporting: n,
									postRequirements: s
								}
							}
						}
						case Ir.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, n = e[r];
							return n ? {
								...e,
								[r]: {
									automatedReporting: {
										...n.automatedReporting,
										...s.automatedReporting || {}
									},
									postRequirements: {
										...n.postRequirements,
										...s.postRequirements || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				Rr = Object(T.c)({
					api: vr,
					models: wr
				}),
				Cr = r("./src/reddit/actions/contentGate.ts"),
				Pr = r("./src/reddit/actions/preferences.ts");
			const Lr = {};
			var Nr = (e = Lr, t) => {
				switch (t.type) {
					case Cr.a: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (e[r]) {
								const t = {
									[r]: {
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
								[r]: {
									goldSubreddit: !0
								}
							}
						}
						return e
					}
					case Cr.b: {
						const {
							subredditDescription: r,
							subredditName: s,
							isContributorRequestsDisabled: n,
							isContributorRequestTimestamp: a,
							subredditId: c
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										privateSubreddit: !0,
										subredditDescription: r,
										isContributorRequestsDisabled: n,
										isContributorRequestTimestamp: a,
										subredditId: c
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
								[s]: {
									privateSubreddit: !0,
									subredditDescription: r,
									isContributorRequestsDisabled: n,
									isContributorRequestTimestamp: a,
									subredditId: c
								}
							}
						}
						return e
					}
					case Cr.f: {
						const {
							subredditName: r,
							quarantineRequiresEmail: s,
							quarantineMessage: n,
							quarantineMessageHtml: a,
							quarantineMessageRTJson: c
						} = t.payload;
						return r ? {
							...e,
							[r]: {
								...e[r],
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: n,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case Cr.h: {
						const {
							subredditName: r,
							banMessage: s
						} = t.payload;
						if (r) {
							if (e[r]) {
								const t = {
									[r]: {
										subredditBanned: !0,
										subredditBanMessage: s
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
									subredditBanned: !0,
									subredditBanMessage: s
								}
							}
						}
						return e
					}
					case Cr.i: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (e[r]) {
								const t = {
									[r]: {
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
								[r]: {
									subredditBlockedForLegalReason: !0
								}
							}
						}
						return e
					}
					case Cr.j: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (e[r]) {
								const t = {
									[r]: {
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
								[r]: {
									subredditDoesNotExist: !0
								}
							}
						}
						return e
					}
					case Cr.c:
					case Cr.d:
					case Cr.e: {
						const {
							profileName: r
						} = t.payload, s = Ce.fc + r.toLocaleLowerCase(), n = e[s] || {}, a = {
							profileDeleted: t.type === Cr.d,
							profileSuspended: t.type === Cr.e,
							profileBlockedForLegalReason: t.type === Cr.c
						};
						return {
							...e,
							[s]: {
								...n,
								...a
							}
						}
					}
					case Pr.p:
						const {
							subredditId: r, prefs: s
						} = t.payload;
						if (s.isContributorRequestTimestamp || 0 === s.isContributorRequestTimestamp)
							for (const t in e)
								if (e[t].subredditId === r) {
									const r = e[t];
									return {
										...e,
										[t]: {
											...r,
											isContributorRequestTimestamp: s.isContributorRequestTimestamp
										}
									}
								} return e;
					default:
						return e
				}
			};
			const kr = {};
			var xr = (e = kr, t) => {
					switch (t.type) {
						case x.w:
						case G.b:
						case G.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Ur = Object(T.c)({
					models: xr
				}),
				Mr = r("./src/reddit/actions/postCollection/constants.ts");
			var Fr = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Mr.d:
					case Mr.c:
					case Mr.s:
					case Mr.r:
						return null;
					case Mr.b:
					case Mr.n:
						return t.payload;
					default:
						return e
				}
			};
			var Gr = (e = !1, t) => {
					switch (t.type) {
						case Mr.c:
						case Mr.r:
							return !0;
						case Mr.d:
						case Mr.b:
						case Mr.s:
						case Mr.n:
							return !1;
						default:
							return e
					}
				},
				Br = Object(T.c)({
					error: Fr,
					pending: Gr
				}),
				Hr = Object(T.c)({
					createOrUpdate: Br
				}),
				Vr = r("./src/reddit/actions/postDraft.ts");
			const qr = {};
			var Kr = (e = qr, t) => {
				switch (t.type) {
					case Vr.c:
					case Vr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Vr.a: {
						const {
							apiError: r,
							draftId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const Wr = {};
			var $r = (e = Wr, t) => {
					switch (t.type) {
						case Vr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Vr.c:
						case Vr.a: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Qr = Object(T.c)({
					error: Kr,
					pending: $r
				});
			var Yr = (e = null, t) => {
				switch (t.type) {
					case Vr.d:
						return t.payload;
					case Vr.f:
					case Vr.e:
						return null;
					default:
						return e
				}
			};
			var zr = (e = !1, t) => {
					switch (t.type) {
						case Vr.f:
							return !0;
						case Vr.e:
						case Vr.d:
							return !1;
						default:
							return e
					}
				},
				Xr = Object(T.c)({
					error: Yr,
					pending: zr
				});
			const Jr = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var Zr = (e = Jr, t) => {
				switch (t.type) {
					case Vr.l:
					case Vr.j:
						return Jr;
					case Vr.i: {
						const e = t.payload;
						return {
							...Jr,
							apiError: e
						}
					}
					case Vr.m: {
						const e = t.payload;
						return {
							...Jr,
							validationError: e
						}
					}
					case Vr.k: {
						const e = t.payload;
						return {
							...Jr,
							submitValidationError: e
						}
					}
					case Vr.h:
						return {
							...Jr, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var es = (e = !1, t) => {
					switch (t.type) {
						case Vr.j:
							return !0;
						case Vr.l:
						case Vr.i:
						case Vr.m:
						case Vr.k:
						case Vr.h:
							return !1;
						default:
							return e
					}
				},
				ts = Object(T.c)({
					error: Zr,
					pending: es
				}),
				rs = Object(T.c)({
					deleteDraft: Qr,
					listing: Xr,
					save: ts
				}),
				ss = r("./src/reddit/actions/postCreation/constants.ts");
			const ns = {};
			var as = (e = ns, t) => {
					switch (t.type) {
						case ss.C: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ss.p: {
							const r = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				cs = Object(T.c)({
					pending: as
				});
			var os = (e = null, t) => {
				switch (t.type) {
					case ss.u:
					case ss.v:
					case ss.d:
					case ss.e:
					case ss.f:
					case ss.i:
					case ss.j:
					case ss.n:
					case ss.K:
						return null;
					case ss.t:
						return t.payload;
					default:
						return e
				}
			};
			var ds = (e = !1, t) => {
					switch (t.type) {
						case ss.u:
							return !0;
						case ss.v:
						case ss.t:
							return !1;
						default:
							return e
					}
				},
				is = Object(T.c)({
					error: os,
					pending: ds
				}),
				us = Object(T.c)({
					converting: cs,
					mediaUpload: is
				});
			const ls = {};
			var ps = (e = ls, t) => {
				switch (t.type) {
					case ve.PAGE_LOADED:
					case ve.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case ve.PAGE_FAILED: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const bs = {};
			var fs = (e = bs, t) => {
				switch (t.type) {
					case ve.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case ve.PAGE_LOADED: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const ms = {};
			var ys = (e = ms, t) => {
					switch (t.type) {
						case ve.PAGE_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ve.PAGE_LOADED:
						case ve.PAGE_FAILED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Es = Object(T.c)({
					error: ps,
					fetched: fs,
					pending: ys
				}),
				_s = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const Os = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var hs = (e = Os, t) => {
				switch (t.type) {
					case ss.L:
					case _s.h:
					case _s.k:
					case _s.b:
					case _s.d:
					case ss.w:
					case ss.c:
					case ss.d:
					case ss.e:
					case ss.f:
					case ss.i:
					case ss.j:
					case ss.n:
					case ss.K:
					case ss.A:
						return Os;
					case ss.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? Os : e
					}
					case ss.o: {
						const e = t.payload;
						return {
							...Os,
							apiError: e
						}
					}
					case ss.X: {
						const e = t.payload;
						return {
							...Os,
							validationError: e
						}
					}
					case ss.G:
					case ss.F: {
						const e = t.payload;
						return {
							...Os,
							submitValidationError: e
						}
					}
					case ss.a:
						return {
							...Os, needsCaptcha: !0
						};
					case ss.y:
						return {
							...Os, pollError: t.payload
						};
					default:
						return e
				}
			};
			var Is = (e = !1, t) => {
					switch (t.type) {
						case ss.w:
							return !0;
						case ss.L:
						case _s.h:
						case ss.o:
						case ss.X:
						case ss.F:
						case ss.G:
						case ss.y:
						case ss.a:
							return !1;
						default:
							return e
					}
				},
				Ss = Object(T.c)({
					error: hs,
					pending: Is
				});
			var gs = (e = null, t) => {
				switch (t.type) {
					case ss.x:
					case ss.D:
						return null;
					case ss.m:
						return t.payload;
					default:
						return e
				}
			};
			var Ts = (e = !1, t) => {
					switch (t.type) {
						case ss.x:
							return !0;
						case ss.m:
						case ss.l:
							return !1;
						default:
							return e
					}
				},
				Ds = Object(T.c)({
					error: gs,
					pending: Ts
				}),
				js = Object(T.c)({
					submit: Ss,
					update: Ds
				});
			var vs = (e = null, t) => {
				switch (t.type) {
					case ss.K:
					case ss.I:
					case ss.J:
						return null;
					default:
						return e
				}
			};
			var As = (e = !1, t) => {
					switch (t.type) {
						case ss.J:
							return !0;
						case ss.I:
						case ss.K:
							return !1;
						default:
							return e
					}
				},
				ws = Object(T.c)({
					error: vs,
					pending: As
				}),
				Rs = Object(T.c)({
					change: ws
				}),
				Cs = Object(T.c)({
					collection: Hr,
					draft: rs,
					editor: us,
					page: Es,
					post: js,
					subreddit: Rs
				}),
				Ps = r("./node_modules/lodash/omit.js"),
				Ls = r.n(Ps),
				Ns = r("./src/reddit/actions/pages/postDraft.ts");
			const ks = {};
			var xs = (e = ks, t) => {
				switch (t.type) {
					case Vr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || ks
					}
					case Vr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return Ls()(r, s)
					}
					case ss.L: {
						const {
							draftId: r
						} = t.payload;
						return r ? Ls()(e, r) : e
					}
					case Ns.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Us = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Ms = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var Fs = r("./src/reddit/models/PostDraft/index.ts");
			var Gs = (e = "", t) => {
					switch (t.type) {
						case ss.d:
							return t.payload || "";
						case ss.A:
							return "";
						case u.a: {
							if (Us(t) !== Ce.Kb.POST_CREATION) return "";
							const r = Ms(t);
							return r && r.url ? r.url || "" : e
						}
						case Vr.g: {
							const e = t.payload;
							return e.kind === Fs.b.Link && e.body || ""
						}
						case _s.b:
						case _s.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Bs = r("./src/reddit/models/PostCreationForm/index.ts"),
				Hs = r("./src/reddit/models/ScheduledPost/index.ts");
			var Vs = (e = "", t) => {
				switch (t.type) {
					case ss.e:
						return t.payload || "";
					case ss.A:
					case ss.E:
						return "";
					case ss.M:
						return t.payload.editorMode === Bs.h.MARKDOWN ? t.payload.content || "" : e;
					case u.a: {
						if (Us(t) !== Ce.Kb.POST_CREATION) return "";
						const r = Ms(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case Vr.g: {
						const e = t.payload;
						return e.kind === Fs.b.Markdown && e.body || ""
					}
					case _s.b:
					case _s.n: {
						const e = t.payload;
						return e.contentType === Hs.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const qs = {
				items: [],
				selectedKey: null
			};
			var Ks = (e = qs, t) => {
					switch (t.type) {
						case ss.f:
							return t.payload || qs;
						case ss.A:
							return qs;
						case u.a:
							return Us(t) !== Ce.Kb.POST_CREATION ? qs : e;
						case Vr.g:
							return qs;
						case _s.b:
						case _s.n:
							return qs;
						default:
							return e
					}
				},
				Ws = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				$s = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Qs = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Ys = Ws.a.createInitial;
			var zs = (e = Ys(), t) => {
					switch (t.type) {
						case ss.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case ss.A:
							return Ws.a.createInitial();
						case ss.M: {
							const r = t.payload;
							return r.editorMode === Bs.h.RICH_TEXT && r.editorKey === Bs.g.POST_CREATION ? Ws.a.createInitial(r.content) : e
						}
						case u.a:
							return Us(t) !== Ce.Kb.POST_CREATION ? Ws.a.createInitial() : e;
						case Vr.g: {
							const e = t.payload;
							return e.kind === Fs.b.RichText ? Ws.a.createInitial(e.body) : Ws.a.createInitial()
						}
						case _s.b:
						case _s.n: {
							const e = t.payload,
								r = Object($s.c)(e.mediaAssets);
							return Ws.a.createInitial(e.contentType === Hs.a.RTJSON ? Object(Qs.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				Xs = Object(T.c)({
					link: Gs,
					markdown: Vs,
					media: Ks,
					rte: zs
				});
			var Js = (e = null, t) => {
					switch (t.type) {
						case ss.b:
							return t.payload || null;
						case ss.A:
						case Vr.g:
						case _s.b:
						case _s.n:
						case ss.K:
							return null;
						case u.a:
							return Us(t) === Ce.Kb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				Zs = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var en = (e = null, t) => {
				switch (t.type) {
					case ss.c:
						return t.payload || null;
					case _s.b:
					case _s.n: {
						const e = t.payload;
						return Object(Zs.n)({
							scheduledPost: e
						}) || null
					}
					case ss.A:
						return null;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION ? e : null;
					case Vr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var tn = (e = null, t) => {
				switch (t.type) {
					case ss.q:
						return t.payload.type || null;
					case _s.b:
					case _s.n:
					case ss.i:
					case ss.A:
					case u.a:
						return null;
					default:
						return e
				}
			};
			var rn = (e = !1, t) => {
				switch (t.type) {
					case ss.O:
						return t.payload || !1;
					case _s.b:
					case _s.n:
						return "CHAT" === t.payload.discussionType;
					case ss.A:
						return !1;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case Vr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var sn = (e = !1, t) => {
				switch (t.type) {
					case ss.W: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case ss.A:
						return !1;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case _s.b:
					case _s.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var nn = (e = !1, t) => {
				switch (t.type) {
					case ss.Q:
						return t.payload || !1;
					case ss.A:
						return !1;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case Vr.g:
						return t.payload.isNSFW || !1;
					case _s.b:
					case _s.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var an = (e = !1, t) => {
				switch (t.type) {
					case ss.R:
						return t.payload || !1;
					case ss.A:
						return !1;
					case ss.K: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case Vr.g:
						return t.payload.isOriginalContent || !1;
					case _s.b:
					case _s.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var cn = (e = !1, t) => {
				switch (t.type) {
					case ss.S:
						return t.payload || !1;
					case _s.b:
					case _s.n:
						return !!t.payload.poll;
					case ss.A:
						return !1;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					default:
						return e
				}
			};
			var on = (e = !1, t) => {
				switch (t.type) {
					case ss.W: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case ss.A:
						return !1;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case _s.b:
					case _s.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var dn = (e = !1, t) => {
				switch (t.type) {
					case _s.b:
					case _s.n:
					case ss.A:
						return !1;
					case Vr.n:
						return t.payload;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case Vr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var un = (e = !1, t) => {
				switch (t.type) {
					case ss.T:
						return t.payload || !1;
					case ss.A:
						return !1;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case Vr.g:
						return t.payload.isSpoiler || !1;
					case _s.b:
					case _s.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var ln = (e = "", t) => {
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.a:
					case ss.i:
					case ss.q:
					case ss.A:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var pn = (e = "", t) => {
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.a:
					case ss.i:
					case ss.q:
					case ss.A:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var bn = (e = null, t) => {
					switch (t.type) {
						case ss.J:
						case ss.K:
							return t.payload;
						case ss.I:
						case u.a:
							return null;
						default:
							return e
					}
				},
				fn = r("./src/reddit/actions/polls.ts");
			var mn = (e = null, t) => {
					switch (t.type) {
						case fn.a:
							return {
								...t.payload
							};
						case _s.b:
						case _s.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case ss.A:
							return null;
						case u.a:
							return Us(t) !== Ce.Kb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				yn = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				En = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var _n = (e = null, t) => {
				var r, s, n, a;
				switch (t.type) {
					case ss.W: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case ss.A:
					case Vr.g:
					case ss.K:
						return null;
					case u.a:
						if (Us(t) === Ce.Kb.POST_CREATION) {
							const c = null === (a = (null !== (n = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== n ? n : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(Hs.m)(c)) {
								const t = Object(yn.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...yn.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(yn.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case _s.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case _s.b: {
						const e = t.payload;
						return {
							...Object(En.h)(e)
						}
					}
					default:
						return e
				}
			};
			var On = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case ss.U:
						return s || !1;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case _s.b:
					case _s.n:
					case Vr.g:
						return !1;
					default:
						return e
				}
			};
			var hn = (e = "", t) => {
				switch (t.type) {
					case ss.g:
						return t.payload || "";
					case u.a:
						return Us(t) !== Ce.Kb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var In = (e = null, t) => {
				switch (t.type) {
					case u.a:
						return Us(t) !== Ce.Kb.POST_CREATION ? null : e;
					case ss.A:
						return null;
					case _s.b:
					case _s.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Sn = (e = !0, t) => {
				switch (t.type) {
					case ss.A:
						return !0;
					case ss.V:
						return t.payload;
					case u.a:
						return Us(t) !== Ce.Kb.POST_CREATION || e;
					case Vr.g:
						return t.payload.sendReplies;
					case _s.b:
					case _s.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var gn = (e = null, t) => {
				switch (t.type) {
					case ss.W: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case ss.A:
					case Vr.g:
					case ss.K:
						return null;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION ? e : null;
					case _s.b:
					case _s.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Tn = Ce.Tb.POST;
			var Dn = (e = Tn, t) => {
				switch (t.type) {
					case ss.A:
						return Tn;
					case ss.r:
						return Ce.Tb.CROSSPOST;
					case ss.i:
						return t.payload.submissionType || Tn;
					case u.a: {
						if (Us(t) !== Ce.Kb.POST_CREATION) return Tn;
						const r = Ms(t);
						if (!r) return e;
						const {
							title: s = "",
							url: n,
							text: a = "",
							media: c = !1,
							selftext: o = !1
						} = r, d = s && !a && !o;
						return c ? Ce.Tb.MEDIA : void 0 !== n || d ? Ce.Tb.LINK_ONLY : a || o ? Ce.Tb.POST : e
					}
					case Vr.g: {
						const e = t.payload;
						return Fs.a[e.kind]
					}
					case _s.b:
					case _s.n: {
						const e = t.payload;
						return e.poll ? Ce.Tb.POLL : e.url ? Ce.Tb.LINK_ONLY : Ce.Tb.POST
					}
					default:
						return e
				}
			};
			var jn = (e = null, t) => {
					switch (t.type) {
						case ss.W: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case ss.A:
						case Vr.g:
						case ss.K:
							return null;
						case u.a:
							return Us(t) === Ce.Kb.POST_CREATION ? e : null;
						case _s.b:
						case _s.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				vn = r("./src/reddit/models/Poll/index.ts");
			const An = e => `Should ${e||"username"} become the top moderator?`,
				wn = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Rn = (e = "", t) => {
					switch (t.type) {
						case ss.r:
							return t.payload.postTitle || "";
						case ss.j:
							return t.payload || "";
						case ss.z: {
							const {
								title: r
							} = t.payload;
							return e || (r || "")
						}
						case ss.A:
							return "";
						case u.a: {
							if (Us(t) !== Ce.Kb.POST_CREATION) return "";
							const r = Ms(t);
							return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
						}
						case Vr.g:
							return t.payload.title;
						case ss.q: {
							const {
								oldType: r,
								type: s
							} = t.payload;
							return s === vn.a.ReplaceTopMod ? An("") : s === vn.a.Spinoff ? wn("") : r === vn.a.ReplaceTopMod || r === vn.a.Spinoff ? "" : e
						}
						case d.c: {
							const {
								username: e
							} = t.payload;
							return An(e)
						}
						case d.b: {
							const {
								subredditName: e
							} = t.payload;
							return wn(e)
						}
						case ss.i: {
							const {
								extra: r
							} = t.payload;
							return !r || r.govType !== vn.a.ReplaceTopMod && r.govType !== vn.a.Spinoff ? e : ""
						}
						case _s.b:
						case _s.n:
							return t.payload.title;
						default:
							return e
					}
				},
				Cn = Object(T.c)({
					body: Xs,
					eventSchedule: Js,
					flair: en,
					govType: tn,
					isChatPost: rn,
					isContestMode: sn,
					isNSFW: nn,
					isOC: an,
					isPostAsMetaMod: on,
					isPoll: cn,
					isPublicLink: dn,
					isSpoiler: un,
					newSubreddit: ln,
					newTopMod: pn,
					nextSubreddit: bn,
					polls: mn,
					postSchedule: _n,
					postToTwitter: On,
					recaptcha: hn,
					scheduledPostId: In,
					sendReplies: Sn,
					stickyPosition: gn,
					submissionType: Dn,
					suggestedSort: jn,
					title: Rn
				});
			var Pn = (e = null, t) => {
				switch (t.type) {
					case u.a: {
						if (Us(t) !== Ce.Kb.POST_CREATION) return null;
						const r = Ms(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? Bs.h.MARKDOWN : e
					}
					case ss.D: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case ss.E:
						return null;
					case ss.M: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case _s.b:
					case _s.n:
						return t.payload.contentType === Hs.a.RTJSON ? Bs.h.RICH_TEXT : Bs.h.MARKDOWN;
					default:
						return e
				}
			};
			const Ln = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var Nn = (e = Ln, t) => {
				switch (t.type) {
					case ss.c:
					case ss.d:
					case ss.e:
						return e[Ce.vb.BODY] ? {
							...e,
							[Ce.vb.BODY]: []
						} : e;
					case ss.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Ce.vb.BODY] && r ? {
							...e,
							[Ce.vb.BODY]: []
						} : e
					}
					case ss.j:
						return e[Ce.vb.TITLE] ? {
							...e,
							[Ce.vb.TITLE]: []
						} : e;
					case ss.H: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case ss.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : Ln
					}
					case ss.G:
					case ss.F:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(Bs.u)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case u.a:
						return Us(t) !== Ce.Kb.POST_CREATION ? Ln : e;
					default:
						return e
				}
			};
			var kn = (e = !1, t) => {
				switch (t.type) {
					case ss.b:
					case ss.c:
					case ss.d:
					case ss.e:
					case ss.f:
					case ss.j:
					case ss.i:
					case ss.Q:
					case ss.R:
					case ss.T:
					case Vr.n:
					case ss.V:
					case ss.W:
						return !0;
					case ss.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case ss.L:
					case _s.h:
						return !1;
					case ss.N:
						return t.payload;
					case u.a:
						return Us(t) === Ce.Kb.POST_CREATION && e;
					case ss.A:
					case Vr.l:
					case Vr.g:
						return !1;
					default:
						return e
				}
			};
			const xn = Bs.q.Post;
			var Un = (e = xn, t) => {
					switch (t.type) {
						case ss.w:
							return Bs.q.Post;
						case ss.B:
							return t.payload;
						case Vr.j:
							return Bs.q.Draft;
						case u.a:
							return Us(t) !== Ce.Kb.POST_CREATION ? xn : e;
						default:
							return e
					}
				},
				Mn = Object(T.c)({
					editorMode: Pn,
					fieldValidation: Nn,
					isChanged: kn,
					submitMode: Un
				});
			var Fn = (e = "", t) => {
				switch (t.type) {
					case ss.D:
						return t.payload.editorMode === Bs.h.MARKDOWN ? t.payload.postContent || "" : e;
					case ss.E:
						return "";
					case ss.M:
						return t.payload.editorMode === Bs.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Gn = Ws.a.createInitial;
			var Bn = (e = Gn(), t) => {
					switch (t.type) {
						case ss.E:
							return Ws.a.createInitial();
						case ss.D: {
							const r = t.payload;
							return r.editorMode === Bs.h.RICH_TEXT && "object" == typeof r.postContent ? Ws.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case ss.M: {
							const r = t.payload;
							return r.editorMode === Bs.h.RICH_TEXT && r.editorKey === Bs.g.POST_EDITING ? Ws.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Hn = Object(T.c)({
					markdown: Fn,
					rte: Bn
				});
			var Vn = (e = null, t) => {
					switch (t.type) {
						case ss.D: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case ss.E:
							return null;
						default:
							return e
					}
				},
				qn = Object(T.c)({
					draft: Hn,
					postId: Vn
				}),
				Kn = Object(T.c)({
					api: Cs,
					drafts: xs,
					formData: Cn,
					formState: Mn,
					postEditing: qn
				}),
				Wn = r("./src/reddit/actions/dashboard/constants.ts");
			const $n = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var Qn = (e = $n, t) => {
				switch (t.type) {
					case Wn.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Wn.d: {
						const r = t.payload,
							s = e.subredditLoaded[r];
						return {
							...e,
							subredditPending: !s,
							subredditLoaded: {
								...e.subredditLoaded,
								[r]: s || !1
							}
						}
					}
					case Wn.c: {
						const r = t.payload;
						return {
							...e,
							subredditPending: !1,
							subredditLoaded: {
								...e.subredditLoaded,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			var Yn = (e = null, t) => {
				switch (t.type) {
					case Ie.b:
					case Ie.c:
						return null;
					case Ie.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var zn = (e = !1, t) => {
				switch (t.type) {
					case Ie.c:
						return !1;
					case Ie.b:
						return !0;
					default:
						return e
				}
			};
			var Xn = (e = !1, t) => {
					switch (t.type) {
						case Ie.c:
							return !0;
						case Ie.b:
						case Ie.a:
							return !1;
						default:
							return e
					}
				},
				Jn = Object(T.c)({
					error: Yn,
					loaded: zn,
					pending: Xn
				}),
				Zn = Object(T.c)({
					list: Jn
				}),
				ea = r("./node_modules/lodash/isEmpty.js"),
				ta = r.n(ea);
			const ra = {};
			var sa = (e = ra, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return ta()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				na = r("./node_modules/lodash/forOwn.js"),
				aa = r.n(na),
				ca = r("./src/reddit/helpers/name/index.ts");
			const oa = {};
			var da = (e = oa, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (ta()(r)) return e;
							const s = {};
							return aa()(r, e => {
								s[Object(ca.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				ia = Object(T.c)({
					api: Zn,
					models: sa,
					nameToId: da
				}),
				ua = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const la = [];
			var pa = (e = la, t) => {
					switch (t.type) {
						case ua.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				ba = r("./src/reddit/actions/economics/banners/constants.ts");
			const fa = {
				dismissedBanners: {}
			};
			var ma = (e = fa, t) => {
					switch (t.type) {
						case ba.c: {
							const r = t.payload;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[r]: {
										...e.dismissedBanners[r],
										pending: !0
									}
								}
							}
						}
						case ba.d: {
							const {
								subredditId: r,
								data: s
							} = t.payload;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[r]: {
										...e.dismissedBanners[r],
										pending: !1,
										data: s
									}
								}
							}
						}
						case ba.a:
						case ba.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, n = e.dismissedBanners[r] || {}, a = t.type === ba.a;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[r]: {
										...n,
										data: {
											...n.data,
											[s]: a
										}
									}
								}
							}
						}
						default:
							return e
					}
				},
				ya = r("./src/reddit/models/Badge/managementPage.ts");
			const Ea = {
				badgeType: ya.a.Cosmetic,
				view: ya.c.Gallery
			};
			var _a = (e = Ea, t) => {
				switch (t.type) {
					case o.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(ya.d)(r.placement) : e.badgeType,
							view: s
						} : e
					}
					case o.b: {
						const r = t.payload;
						return {
							...e,
							badgeType: r
						}
					}
					case o.d: {
						const r = t.payload;
						return {
							...e,
							view: r
						}
					}
					case s.b:
						return Ea;
					default:
						return e
				}
			};
			var Oa = (e = null, t) => {
					switch (t.type) {
						case o.c:
							return {
								badge: t.payload.badge
							};
						case s.b:
							return null;
						default:
							return e
					}
				},
				ha = r("./src/reddit/actions/economics/powerups/constants.ts");

			function Ia(e, t) {
				const {
					name: r,
					emojiIcon: s,
					stickerIcon: n
				} = e;
				return {
					id: r,
					fullId: `emote|${t}|${r}`,
					imageType: s.mimeType,
					emoji: {
						x: s.x,
						y: s.y,
						path: s.url,
						type: s.mimeType
					},
					sticker: {
						x: n.x,
						y: n.y,
						path: n.url,
						type: n.mimeType
					}
				}
			}

			function Sa(e) {
				if (!e) return e;
				const {
					mediaPacks: t
				} = e, r = {};
				return null == t || t.forEach(e => {
					const {
						id: t,
						name: s,
						emotes: n
					} = e;
					r[t] = {
						id: t,
						name: s,
						emotes: n.map(e => Ia(e, t))
					}
				}), r
			}
			const ga = {};
			var Ta = (e = ga, t) => {
				switch (t.type) {
					case o.e: {
						const {
							emotes: r,
							emoteCollections: s
						} = t.payload.products, n = {};
						return r.forEach(e => {
							const t = e.extra && e.extra.assets,
								r = Object.keys(e.collections || {})[0] || e.title,
								a = s[r];
							n[r] || (n[r] = {
								emotes: {},
								position: a ? a.position : 0,
								title: a ? a.title : e.title
							}), t && Object.keys(t).forEach(s => {
								const a = t[s];
								n[r].emotes[s] = {
									id: s,
									emoji: a.emoji,
									extra: {
										rtDescription: e.extra && e.extra.rtDescription
									},
									fullId: `emote|${e.id}|${s}`,
									imageType: a.emoji.type,
									sticker: a.sticker
								}
							})
						}), {
							...e,
							[t.payload.subredditId]: Object.keys(n).map(e => n[e]).sort((e, t) => e.position - t.position)
						}
					}
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						if (r && r.mediaPacks) {
							const t = r.mediaPacks.map(e => ({
								title: e.name,
								emotes: e.emotes.reduce((t, r) => ({
									...t,
									[r.name]: {
										id: r.name,
										fullId: `emote|${e.id}|${r.name}`,
										imageType: r.emojiIcon.mimeType,
										emoji: {
											x: r.emojiIcon.x,
											y: r.emojiIcon.y,
											path: r.emojiIcon.url,
											type: r.emojiIcon.mimeType
										},
										sticker: {
											x: r.stickerIcon.x,
											y: r.stickerIcon.y,
											path: r.stickerIcon.url,
											type: r.stickerIcon.mimeType
										}
									}
								}), {})
							}));
							return {
								...e,
								[s]: e[s] ? [...e[s], ...t] : t
							}
						}
						return e
					}
					case ha.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload;
						return function(e, t, r) {
							if (!e[t]) return e;
							const s = e[t].findIndex(e => e.title === t);
							return -1 === s ? e : {
								...e,
								[t]: e[t].map((e, n) => n !== s ? e : {
									title: e.title,
									emotes: {
										...e.emotes,
										[r.name]: Ia(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const Da = {};
			var ja = (e = Da, t) => {
					switch (t.type) {
						case o.e: {
							const r = t.payload.products.giphy.length > 0;
							return {
								...e,
								[t.payload.subredditId]: {
									hasGifProduct: r
								}
							}
						}
						default:
							return e
					}
				},
				va = r("./src/reddit/actions/economics/me/constants.ts");
			const Aa = {
				fetched: !1,
				data: {}
			};
			var wa = (e = Aa, t) => {
					switch (t.type) {
						case va.a:
							return {
								fetched: !0, data: t.payload
							};
						case o.h: {
							const {
								subredditId: r
							} = t.payload;
							return e.data.specialMemberships && e.data.specialMemberships[r] ? {
								...e,
								data: {
									...e.data,
									specialMemberships: {
										...e.data.specialMemberships,
										[r]: {
											...e.data[r],
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
				Ra = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Ca = {
				fetched: !1,
				data: null
			};
			var Pa = (e = Ca, t) => {
					switch (t.type) {
						case va.b:
							return {
								fetched: !0, data: e.data
							};
						case va.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				La = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Na = Object(T.c)({
					banners: ma,
					currentBadgeManagementScreen: _a,
					currentModalArgs: Oa,
					emotes: Ta,
					gifs: ja,
					me: wa,
					paymentSystems: Ra.b,
					pointsCopy: Pa,
					subredditPremium: La.b
				}),
				ka = r("./src/reddit/actions/emoji.ts");
			const xa = {};
			var Ua = (e = xa, t) => {
					switch (t.type) {
						case ka.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ka.g:
						case ka.f: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						default:
							return e
					}
				},
				Ma = Object(T.c)({
					pending: Ua
				}),
				Fa = Object(T.c)({
					list: Ma
				});
			const Ga = {};
			var Ba = (e = Ga, t) => {
					switch (t.type) {
						case ka.f:
						case ka.c:
							return e;
						case ka.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case ka.d: {
							const {
								emojiName: r,
								subredditId: s
							} = t.payload, n = e[s].emojis, {
								[r]: a,
								...c
							} = n;
							return {
								...e,
								[s]: {
									...e[s],
									emojis: c
								}
							}
						}
						case ka.i: {
							const r = t.payload,
								s = e[r.subredditId].emojis,
								n = {
									url: r.url,
									name: r.name,
									userFlairAllowed: r.userFlairAllowed,
									postFlairAllowed: r.postFlairAllowed,
									modFlairOnly: r.modFlairOnly
								},
								a = {
									...s,
									[r.name]: n
								};
							return {
								...e,
								[r.subredditId]: {
									...e[r.subredditId],
									emojis: a
								}
							}
						}
						case ka.e: {
							const {
								emojiName: r,
								isSnoomoji: s,
								settings: n,
								subredditId: a
							} = t.payload, c = s ? "snoomojis" : "emojis", o = e[a][c], d = {
								...o,
								[r]: {
									...o[r],
									...n
								}
							};
							return {
								...e,
								[a]: {
									...e[a],
									[c]: d
								}
							}
						}
						default:
							return e
					}
				},
				Ha = Object(T.c)({
					api: Fa,
					models: Ba
				}),
				Va = r("./src/reddit/actions/experiments.ts");
			const qa = /^experiment_(.*)$/i,
				Ka = e => {
					const t = e.match(qa);
					if (null !== t) return t[1]
				},
				Wa = {};
			var $a = (e = Wa, t) => {
					switch (t.type) {
						case u.a: {
							const r = Ms(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Ka(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return ta()(s) ? e : {
								...e,
								...s
							}
						}
						case Va.b: {
							const {
								experimentName: r,
								override: s
							} = t.payload;
							return r ? {
								...e,
								[r]: s || ""
							} : e
						}
						default:
							return e
					}
				},
				Qa = r("./src/reddit/actions/externalAccount.ts");
			const Ya = {};
			var za = (e = Ya, t) => {
				switch (t.type) {
					case Qa.e:
					case Qa.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Qa.d: {
						const {
							provider: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Xa = {};
			var Ja = (e = Xa, t) => {
					switch (t.type) {
						case Qa.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Qa.f:
						case Qa.d: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Za = Object(T.c)({
					error: za,
					pending: Ja
				});
			const ec = {};
			var tc = (e = ec, t) => {
				switch (t.type) {
					case Qa.l:
					case Qa.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Qa.j: {
						const {
							provider: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const rc = {};
			var sc = (e = rc, t) => {
					switch (t.type) {
						case Qa.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Qa.c:
						case Qa.a: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				nc = Object(T.c)({
					error: tc,
					pending: sc
				});
			const ac = {};
			var cc = (e = ac, t) => {
				switch (t.type) {
					case Qa.i:
					case Qa.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Qa.g: {
						const {
							subredditName: r,
							apiError: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const oc = {};
			var dc = (e = oc, t) => {
				switch (t.type) {
					case Qa.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const ic = {};
			var uc = (e = ic, t) => {
					switch (t.type) {
						case Qa.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Qa.h:
						case Qa.g: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				lc = Object(T.c)({
					error: cc,
					fetched: dc,
					pending: uc
				});
			const pc = {};
			var bc = (e = pc, t) => {
				switch (t.type) {
					case Qa.l:
					case Qa.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Qa.j: {
						const {
							username: r,
							apiError: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const fc = {};
			var mc = (e = fc, t) => {
					switch (t.type) {
						case Qa.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Qa.k:
						case Qa.j: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				yc = Object(T.c)({
					error: bc,
					pending: mc
				}),
				Ec = Object(T.c)({
					connect: Za,
					disconnect: nc,
					user: yc,
					subreddit: lc
				});
			const _c = {};
			var Oc = (e = _c, t) => {
				switch (t.type) {
					case Qa.h: {
						const {
							subredditName: r,
							accountsData: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const hc = {};
			var Ic = (e = hc, t) => {
					switch (t.type) {
						case Qa.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Qa.c: {
							const {
								username: r,
								provider: s
							} = t.payload, n = e[r];
							return n && n[s] ? {
								...e,
								[r]: Ls()(n, s)
							} : e
						}
						default:
							return e
					}
				},
				Sc = Object(T.c)({
					api: Ec,
					user: Ic,
					subreddit: Oc
				}),
				gc = r("./src/reddit/featureFlags/index.ts");
			const Tc = new Set(["0", "disabled", "false", "off", ""]);
			var Dc = e => !Tc.has(e.toLowerCase());
			const jc = gc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				vc = gc.a.reduce((e, t) => (e[t] = null, e), {});
			var Ac = (e = vc, t) => {
					switch (t.type) {
						case u.a: {
							const r = Ms(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(gc.g)(e);
									if (s) {
										const n = jc[s.toLowerCase()];
										if (n) {
											const s = r[e],
												a = "string" != typeof s || Dc(s);
											t[n] = a
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
						case gc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case gc.c: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return {
								...e,
								[r]: !s
							}
						}
						default:
							return e
					}
				},
				wc = Object(T.c)({
					overrides: Ac
				}),
				Rc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Cc = {
				focusedVerticalGqlError: null
			};
			var Pc = (e = Cc, t) => {
				switch (t.type) {
					case Rc.h:
					case Rc.g:
					case Rc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Rc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Lc = {
				focusedVerticalGqlPending: !1
			};
			var Nc = (e = Lc, t) => {
					switch (t.type) {
						case Rc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Rc.e:
						case Rc.g:
						case Rc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				kc = Object(T.c)({
					error: Pc,
					pending: Nc
				});
			var xc = (e = "", t) => {
				switch (t.type) {
					case Rc.g:
					case Rc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Uc = {
				dismissed: !0
			};
			var Mc = (e = Uc, t) => {
				switch (t.type) {
					case Rc.j:
						return {
							dismissed: !1
						};
					case Rc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Fc = (e = null, t) => {
				switch (t.type) {
					case Rc.g:
					case Rc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Gc = (e = null, t) => {
				switch (t.type) {
					case Rc.g:
					case Rc.c:
					case Rc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Bc = (e = null, t) => {
					switch (t.type) {
						case Rc.g:
						case Rc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Hc = Object(T.c)({
					api: kc,
					components: Mc,
					interactedSubredditIds: Fc,
					recommendedSubredditIds: Bc,
					category: xc,
					lastLoadedEnv: Gc
				});
			Object(Re.a)("FONTS_FONT_FILES_PARSED");
			const Vc = [];
			var qc = (e = Vc, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Kc = (e = null, t) => {
				switch (t.type) {
					case ee.p:
						return t.payload;
					case ee.e:
					case u.a:
					case ee.K:
					case ee.s:
						return null;
					default:
						return e
				}
			};
			var Wc = (e = !1, t) => {
				switch (t.type) {
					case ee.e:
					case u.a:
					case ee.s:
					case ee.p:
						return !1;
					case ee.q:
						return !0;
					default:
						return e
				}
			};
			var $c = (e = !1, t) => {
					switch (t.type) {
						case ee.q:
						case ee.e:
						case u.a:
						case ee.s:
						case ee.p:
							return !1;
						case ee.u:
							return !0;
						default:
							return e
					}
				},
				Qc = Object(T.c)({
					error: Kc,
					pending: Wc,
					showLoader: $c
				});
			var Yc = (e = null, t) => {
				switch (t.type) {
					case ee.L:
					case ee.K: {
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
			var zc = (e = null, t) => {
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
			var Xc = (e = null, t) => {
				const r = t.payload;
				switch (t.type) {
					case ee.J:
					case ee.K:
						return r.thingId;
					case ee.s:
					case u.a:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var Jc = (e = !1, t) => {
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var Zc = (e = !1, t) => {
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var eo = (e = "", t) => {
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const to = he.n;
			var ro = (e = to, t) => {
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || to
						}
						default:
							return e
					}
				},
				so = Object(T.c)({
					api: Qc,
					correlationId: Yc,
					gildModalThingId: Xc,
					isAnonymous: Jc,
					isIframed: Zc,
					message: eo,
					gildedThing: zc,
					selectedAward: ro
				});
			var no = (e = null, t) => {
				switch (t.type) {
					case ee.w:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case ee.f:
					case u.a:
					case ee.L:
					case ee.B:
						return null;
					default:
						return e
				}
			};
			var ao = (e = !1, t) => {
					switch (t.type) {
						case ee.f:
						case u.a:
						case ee.B:
						case ee.w:
							return !1;
						case ee.x:
							return !0;
						default:
							return e
					}
				},
				co = Object(T.c)({
					error: no,
					pending: ao
				});
			var oo = (e = "", t) => {
					switch (t.type) {
						case ee.L: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case u.a:
						case ee.f:
						case ee.B:
							return "";
						default:
							return e
					}
				},
				io = Object(T.c)({
					api: co,
					givePremiumModalAccountName: oo
				}),
				uo = r("./src/reddit/actions/header.ts"),
				lo = r("./src/reddit/actions/overlayEvents.ts");
			var po = (e = !1, t) => {
					switch (t.type) {
						case uo.a:
							return !1;
						case uo.b:
							return !0;
						case uo.c:
							return !e;
						case lo.b:
							return !1;
						default:
							return e
					}
				},
				bo = Object(T.c)({
					isSubscriptionsDropdownOpen: po
				});
			var fo = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				mo = r("./src/reddit/actions/imageUploads.ts");
			const yo = {};
			var Eo = (e = yo, t) => {
					switch (t.type) {
						case mo.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case mo.c:
						case mo.e:
						case mo.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case mo.a: {
							const r = t.payload;
							if (!e[r.id]) return e;
							const s = {
								...e
							};
							return delete s[r.id], s
						}
						default:
							return e
					}
				},
				_o = r("./src/reddit/actions/interceptedAction.ts");
			var Oo = (e = null, t) => {
					switch (t.type) {
						case _o.a:
							return t.payload;
						case _o.b:
							return null;
						default:
							return e
					}
				},
				ho = r("./src/reddit/actions/changeUsername.ts");
			var Io = (e = !0, t) => {
					switch (t.type) {
						case ho.a:
							return !1;
						case ho.b:
							return !0;
						default:
							return e
					}
				},
				So = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var go = (e = !1, t) => {
					switch (t.type) {
						case So.a:
							return !e;
						default:
							return e
					}
				},
				To = r("./src/reddit/actions/moderatingSubreddits.ts");
			var Do = (e = !1, t) => {
					switch (t.type) {
						case To.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case K.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case ve.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: r
							} = t;
							return r.subredditPermissions && r.subreddits ? !!r.subredditPermissions.posts : e
						}
						case F.i:
						case F.f:
						case F.m:
						case F.p:
						case F.v: {
							if (e) return e;
							const {
								response: r
							} = t.payload, {
								moderatingSubreddits: s,
								moderatingProfiles: n
							} = r;
							let a = Object.keys(s).some(e => !0 === s[e].posts);
							if (!a) {
								a = Object.keys(n).some(e => !0 === s[e].posts)
							}
							return a
						}
						default:
							return e
					}
				},
				jo = r("./src/reddit/actions/jsApi.ts");
			const vo = [];
			var Ao = (e = vo, t) => {
					switch (t.type) {
						case jo.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				wo = r("./src/reddit/actions/leaderboard/constants.ts");
			const Ro = {};
			var Co = (e = Ro, t) => {
				switch (t.type) {
					case wo.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case wo.b:
					case wo.c: {
						const {
							subredditId: r
						} = t.payload, {
							[r]: s,
							...n
						} = e;
						return n
					}
					default:
						return e
				}
			};
			const Po = {};
			var Lo = (e = Po, t) => {
					switch (t.type) {
						case wo.a:
						case wo.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						case wo.b: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				No = Object(T.c)({
					error: Co,
					pending: Lo
				});
			const ko = {};
			var xo = (e = ko, t) => {
					switch (t.type) {
						case wo.c: {
							const {
								subredditId: r,
								data: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Uo = Object(T.c)({
					api: No,
					models: xo
				});
			var Mo = (e = "", t) => {
				switch (t.type) {
					case u.a: {
						const {
							listingKey: r
						} = t.payload;
						return r || e
					}
					default:
						return e
				}
			};
			const Fo = {};
			var Go = (e = Fo, t) => {
				switch (t.type) {
					case Pe.f:
					case Pe.g:
					case q.SEARCH_PENDING:
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ce.Xb.Subreddits) && -1 === s.indexOf(Ce.Xb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Pe.e:
					case q.SEARCH_FAILED: {
						const {
							key: r,
							error: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Xb.Subreddits) && -1 === n.indexOf(Ce.Xb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					case Ie.f:
					case Ie.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ie.d: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Bo = {};
			var Ho = (e = Bo, t) => {
					switch (t.type) {
						case Pe.f:
						case q.SEARCH_PENDING: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Xb.Subreddits) && -1 === s.indexOf(Ce.Xb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Pe.g:
						case Pe.e:
						case q.SEARCH_RESULTS_RECEIVED:
						case q.SEARCH_FAILED: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Xb.Subreddits) && -1 === s.indexOf(Ce.Xb.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						case Ie.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ie.e:
						case Ie.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Vo = Object(T.c)({
					error: Go,
					pending: Ho
				});
			const qo = {};
			var Ko = (e = qo, t) => {
				switch (t.type) {
					case Pe.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Ce.Xb.Subreddits) && -1 === n.indexOf(Ce.Xb.Users)) return e;
						const a = e[s];
						return {
							...e,
							[s]: {
								...a,
								[r]: !0
							}
						}
					}
					case Ie.e: {
						const {
							fetchedToken: r,
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const Wo = {};
			var $o = (e = Wo, t) => {
				switch (t.type) {
					case Pe.g: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Xb.Subreddits) && -1 === n.indexOf(Ce.Xb.Users) ? e : {
							...e,
							[r]: e[r].concat(s)
						}
					}
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Xb.Subreddits) && -1 === n.indexOf(Ce.Xb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Qo = {};
			var Yo = (e = Qo, t) => {
					switch (t.type) {
						case Pe.g:
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Xb.Subreddits) && -1 === n.indexOf(Ce.Xb.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(Ft.a)(e, r)
						}
						case Ie.e: {
							const {
								key: r,
								token: s
							} = t.payload;
							return {
								...e,
								[r]: {
									token: s
								}
							}
						}
						default:
							return e
					}
				},
				zo = Object(T.c)({
					api: Vo,
					identifiers: $o,
					fetchedTokens: Ko,
					loadMore: Yo
				}),
				Xo = r("./src/reddit/actions/eventPosts/constants.ts"),
				Jo = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				Zo = r("./src/reddit/actions/pages/topic.ts");
			const ed = {};
			var td = (e = ed, t) => {
					switch (t.type) {
						case Se.c:
						case Se.b:
						case je.c:
						case je.b:
						case K.SUBREDDIT_PENDING:
						case K.SUBREDDIT_LOADED:
						case Se.g:
						case Se.f:
						case De.e:
						case De.f:
						case De.i:
						case De.h:
						case Te.s:
						case Te.r:
						case Jo.b:
						case Jo.c:
						case H.PROFILE_POSTS_PENDING:
						case H.PROFILE_POSTS_LOADED:
						case H.MORE_POSTS_PENDING:
						case H.MORE_POSTS_LOADED:
						case W.f:
						case W.e:
						case Ae.f:
						case Ae.e:
						case $.j:
						case Zo.TOPIC_DATA_PENDING:
						case Zo.TOPIC_DATA_LOADED:
						case Zo.MORE_POSTS_PENDING:
						case Zo.MORE_POSTS_LOADED:
						case $.i:
						case Xo.e:
						case Xo.c:
						case Xo.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: null
							}
						}
						case q.SEARCH_PENDING:
						case q.SEARCH_RESULTS_RECEIVED:
						case Pe.f:
						case Pe.g: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Xb.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case Se.a:
						case je.a:
						case K.SUBREDDIT_FAILED:
						case Se.e:
						case De.g:
						case Te.q:
						case Jo.a:
						case $.h:
						case W.d:
						case Ae.d:
						case H.PROFILE_POSTS_FAILED:
						case H.MORE_POSTS_FAILED:
						case Zo.TOPIC_DATA_FAILED:
						case Zo.MORE_POSTS_FAILED:
						case Xo.b: {
							const {
								key: r,
								error: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case q.SEARCH_FAILED:
						case Pe.e: {
							const {
								error: r,
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Xb.Posts) ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				rd = r("./src/reddit/actions/linkedPosts/constants.ts"),
				sd = r("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				nd = r("./src/reddit/actions/subreddit/constants.ts");
			const ad = {};
			var cd = (e = ad, t) => {
					switch (t.type) {
						case Se.c:
						case je.c:
						case H.PROFILE_POSTS_PENDING:
						case Ae.f:
						case K.SUBREDDIT_PENDING:
						case Se.g:
						case De.f:
						case De.i:
						case Te.s:
						case Jo.c:
						case W.f:
						case H.MORE_POSTS_PENDING:
						case $.j:
						case Zo.MORE_POSTS_PENDING:
						case Xo.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case q.SEARCH_PENDING:
						case Pe.f: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Xb.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case Se.b:
						case Se.a:
						case je.a:
						case je.b:
						case Ae.d:
						case Ae.e:
						case H.PROFILE_POSTS_FAILED:
						case H.PROFILE_POSTS_LOADED:
						case K.SUBREDDIT_LOADED:
						case K.SUBREDDIT_FAILED:
						case Se.f:
						case Se.e:
						case rd.b:
						case rd.c:
						case De.e:
						case De.d:
						case De.h:
						case De.g:
						case Te.r:
						case Te.q:
						case W.d:
						case W.e:
						case H.MORE_POSTS_FAILED:
						case H.MORE_POSTS_LOADED:
						case sd.a:
						case sd.b:
						case nd.j:
						case Jo.b:
						case Jo.a:
						case $.i:
						case $.h:
						case Zo.MORE_POSTS_LOADED:
						case Zo.MORE_POSTS_FAILED:
						case Xo.c:
						case Xo.b:
						case Xo.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case nd.r: {
							if (!t.payload || !t.payload.length) return e;
							const r = {};
							for (const e of t.payload) {
								r[e.key] = !1
							}
							return {
								...e,
								...r
							}
						}
						case q.SEARCH_RESULTS_RECEIVED:
						case q.SEARCH_FAILED:
						case Pe.g:
						case Pe.e: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Xb.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				od = Object(T.c)({
					error: td,
					pending: cd
				}),
				dd = r("./src/reddit/actions/postList.ts"),
				id = r("./node_modules/lodash/omitBy.js"),
				ud = r.n(id);

			function ld(e, t) {
				return t = t.toLowerCase(), ud()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const pd = {};
			var bd = (e = pd, t) => {
				switch (t.type) {
					case dd.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case dd.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Ls()(e, [r]) : e
					}
					case K.SUBREDDIT_INVALIDATE_LISTING:
						return ld(e, t.payload);
					default:
						return e
				}
			};
			const fd = {};
			var md = (e = fd, t) => {
					switch (t.type) {
						case De.e:
						case Se.b:
						case je.b:
						case K.SUBREDDIT_LOADED:
						case H.PROFILE_POSTS_LOADED:
						case Zo.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case Se.f:
						case De.h:
						case Te.r:
						case W.e:
						case H.MORE_POSTS_LOADED:
						case $.i:
						case Zo.MORE_POSTS_LOADED: {
							const {
								key: r,
								fetchedToken: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									[s]: !0
								}
							}
						}
						case Pe.g: {
							const {
								fetchedToken: r,
								key: s,
								type: n
							} = t.payload;
							if (n.indexOf(Ce.Xb.Posts) > -1) {
								const t = e[s];
								return {
									...e,
									[s]: {
										...t,
										[r]: !0
									}
								}
							}
							return e
						}
						case K.SUBREDDIT_INVALIDATE_LISTING:
							return ld(e, t.payload);
						default:
							return e
					}
				},
				yd = r("./src/reddit/actions/post.ts");
			const Ed = {};
			var _d = (e = Ed, t) => {
					switch (t.type) {
						case Se.c:
						case De.f:
						case je.c:
						case H.PROFILE_POSTS_PENDING:
						case K.SUBREDDIT_PENDING:
						case Ae.f:
						case H.PROFILE_POSTS_PENDING:
						case Zo.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ie.e:
						case rd.c:
						case De.e:
						case sd.b:
						case Se.b:
						case je.b:
						case K.SUBREDDIT_LOADED:
						case nd.j:
						case Jo.b:
						case Ae.e:
						case H.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Zo.TOPIC_DATA_LOADED:
						case Xo.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case nd.r: {
							if (!t.payload || !t.payload.length) return e;
							const r = {};
							for (const e of t.payload) {
								const t = e;
								r[t.key] = t.postIds
							}
							return {
								...e,
								...r
							}
						}
						case Se.f:
						case De.h:
						case Te.r:
						case H.MORE_POSTS_LOADED:
						case W.e:
						case $.i:
						case Zo.MORE_POSTS_LOADED:
						case Xo.d: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Xb.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Pe.g: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Xb.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case yd.o: {
							const {
								newStickiedPostList: r,
								listingKey: s
							} = t.payload;
							if (!e[s]) return e;
							const n = [...e[s]].filter(e => !r.includes(e));
							return n.unshift(...r), {
								...e,
								[s]: n
							}
						}
						case K.SUBREDDIT_INVALIDATE_LISTING:
							return ld(e, t.payload);
						default:
							return e
					}
				},
				Od = r("./src/lib/makeListingKey/index.ts");
			const hd = {};
			var Id = (e = hd, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(Od.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case Pr.a:
					case Pr.p: {
						const t = {};
						return Object.keys(e).forEach(r => {
							t[r] = {
								...e[r],
								hasChanged: !0
							}
						}), t
					}
					default:
						return e
				}
			};
			const Sd = {};
			var gd = (e = Sd, t) => {
				switch (t.type) {
					case Se.b:
					case je.b:
					case K.SUBREDDIT_LOADED:
					case Ae.e:
					case H.PROFILE_POSTS_LOADED:
					case Se.f:
					case De.e:
					case De.h:
					case Te.r:
					case W.e:
					case H.MORE_POSTS_LOADED:
					case $.i:
					case Zo.TOPIC_DATA_LOADED:
					case Zo.MORE_POSTS_LOADED: {
						const {
							key: r,
							token: s,
							dist: n
						} = t.payload;
						return s ? {
							...e,
							[r]: {
								token: s,
								dist: n
							}
						} : Object(Ft.a)(e, r)
					}
					case Pe.g:
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							tokens: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Xb.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(Ft.a)(e, r)
					}
					case K.SUBREDDIT_INVALIDATE_LISTING:
						return ld(e, t.payload);
					default:
						return e
				}
			};
			const Td = {};
			var Dd = (e = Td, t) => {
					switch (t.type) {
						case Xo.c:
						case Xo.d: {
							const {
								pageInfo: r,
								key: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				jd = Object(T.c)({
					api: od,
					endMarkers: bd,
					fetchedTokens: md,
					ids: _d,
					listingSort: Id,
					loadMore: gd,
					pageInfo: Dd
				}),
				vd = Object(T.c)({
					activeKey: Mo,
					listingOrder: zo,
					postOrder: jd
				});
			var Ad = (e = null, t) => {
				switch (t.type) {
					case Se.b: {
						const r = t.payload;
						return ta()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var wd = (e = null, t) => {
				switch (t.type) {
					case Se.b: {
						const r = t.payload;
						return ta()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Rd = (e = !1, t) => {
				switch (t.type) {
					case Se.b:
						return !0;
					default:
						return e
				}
			};
			var Cd = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Pd = Object(T.c)({
					announcements: Ad,
					featured: wd,
					isFrontpageLoaded: Rd,
					shouldShowAnnouncements: Cd
				}),
				Ld = r("./src/reddit/actions/media.ts");
			const Nd = {},
				kd = {};
			var xd = (e = kd, t) => {
				switch (t.type) {
					case Ld.b: {
						const {
							postId: r,
							index: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ud = {};
			var Md = (e = Ud, t) => {
					switch (t.type) {
						case Ld.e: {
							const {
								postId: r,
								isTileLayout: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Fd = Object(T.c)({
					currentSlideIndex: xd,
					isGalleryTileLayout: Md
				});
			var Gd = (e = !0, t) => {
				switch (t.type) {
					case Ld.c:
						return t.payload;
					default:
						return e
				}
			};
			var Bd = (e = .5, t) => {
					switch (t.type) {
						case Ld.d:
							return t.payload;
						default:
							return e
					}
				},
				Hd = Object(T.c)({
					isMuted: Gd,
					volume: Bd
				}),
				Vd = r("./src/reddit/actions/meta.ts");
			const qd = {
				ampCid: void 0,
				city: "",
				country: "",
				crawler: void 0,
				domain: "",
				isBot: !1,
				isSessionSeo: !1,
				locale: "",
				method: "",
				platform: void 0,
				popularGeoFilter: void 0,
				protocol: "",
				region: "",
				sessionReferrerDomain: "",
				shredditExpBucket: "",
				userAgent: "",
				pageloadServerTime: 0
			};
			var Kd = (e = qd, t) => {
					switch (t.type) {
						case Vd.b:
							return t.payload;
						case Vd.a:
							return {
								...e, ...t.payload
							};
						case Vd.e:
							return {
								...e, locale: t.payload
							};
						case Vd.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case Vd.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case Vd.d:
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
				Wd = r("./src/reddit/actions/subredditModeration/constants.ts");
			const $d = {};
			var Qd = (e = $d, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED:
					case G.b:
					case G.f:
					case ve.PAGE_LOADED: {
						const {
							payload: r
						} = t;
						if (!r.subredditPermissions || !r.subreddits) return e;
						const s = Object.keys(r.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const n = s[0];
						return {
							...e,
							[n]: r.subredditPermissions
						}
					}
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v: {
						const {
							response: r
						} = t.payload, {
							moderatingSubreddits: s,
							moderatingProfiles: n
						} = r;
						return {
							...e,
							...s,
							...n
						}
					}
					case $.f:
					case De.e:
					case F.k: {
						const r = t.payload,
							{
								moderatingSubreddits: s,
								moderatingProfiles: n
							} = r;
						return {
							...e,
							...s,
							...n
						}
					}
					case Wd.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Ft.a)(e, r)
					}
					case Wd.S: {
						const r = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			var Yd = (e = null, t) => {
				switch (t.type) {
					case De.b:
					case De.k:
						return null;
					case De.a:
					case De.j:
						return t.payload;
					default:
						return e
				}
			};
			var zd = (e = !1, t) => {
					switch (t.type) {
						case De.b:
						case De.k:
							return !0;
						case De.c:
						case De.a:
						case De.l:
						case De.j:
							return !1;
						default:
							return e
					}
				},
				Xd = Object(T.c)({
					error: Yd,
					pending: zd
				});
			const Jd = [];
			var Zd = (e = Jd, t) => {
					switch (t.type) {
						case De.e: {
							const r = t.payload,
								{
									filteredSubreddits: s
								} = r;
							return s || e
						}
						case De.j: {
							const r = t.payload;
							return [...e, r]
						}
						case De.k:
						case De.a: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						default:
							return e
					}
				},
				ei = Object(T.c)({
					api: Xd,
					names: Zd
				}),
				ti = Object(T.c)({
					filteredSubreddits: ei
				}),
				ri = r("./src/reddit/actions/modMode.ts");
			var si = (e = !0, t) => {
				switch (t.type) {
					case ri.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const ni = {};
			var ai = (e = ni, t) => {
				switch (t.type) {
					case x.x: {
						const {
							moreCommentsId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case x.w: {
						const {
							moreCommentsItem: r
						} = t.payload;
						return {
							...e,
							[r.id]: null
						}
					}
					case x.v: {
						const {
							moreCommentsItem: r,
							...s
						} = t.payload;
						return {
							...e,
							[r.id]: s || {}
						}
					}
					default:
						return e
				}
			};
			const ci = {};
			var oi = (e = ci, t) => {
					switch (t.type) {
						case x.x: {
							const {
								moreCommentsId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case x.v:
						case x.w: {
							const {
								moreCommentsItem: r
							} = t.payload;
							return {
								...e,
								[r.id]: !1
							}
						}
						default:
							return e
					}
				},
				di = Object(T.c)({
					error: ai,
					pending: oi
				});
			const ii = {};
			var ui = (e = ii, t) => {
					switch (t.type) {
						case x.w:
						case G.b:
						case G.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				li = Object(T.c)({
					api: di,
					models: ui
				});
			var pi = (e = null, t) => {
				switch (t.type) {
					case Te.b:
					case Te.c:
						return null;
					case Te.a:
						return t.payload;
					default:
						return e
				}
			};
			var bi = (e = !1, t) => {
				switch (t.type) {
					case Te.a:
					case Te.c:
						return !0;
					case Te.b:
						return !1;
					default:
						return e
				}
			};
			var fi = (e = null, t) => {
					switch (t.type) {
						case je.b:
						case Te.a:
						case Te.c:
							return null;
						case Te.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				mi = Object(T.c)({
					error: pi,
					fetched: bi,
					pending: fi
				});
			var yi = (e = null, t) => {
				switch (t.type) {
					case Te.f:
					case Te.g:
						return null;
					case Te.e:
						return t.payload;
					default:
						return e
				}
			};
			var Ei = (e = !1, t) => {
				switch (t.type) {
					case Te.e:
					case Te.g:
						return !0;
					case Te.f:
						return !1;
					default:
						return e
				}
			};
			var _i = (e = !1, t) => {
					switch (t.type) {
						case Te.e:
						case Te.g:
							return !1;
						case Te.f:
							return !0;
						default:
							return e
					}
				},
				Oi = Object(T.c)({
					error: yi,
					fetched: Ei,
					pending: _i
				});
			var hi = (e = null, t) => {
				switch (t.type) {
					case Te.i:
					case Te.j:
						return null;
					case Te.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ii = (e = !1, t) => {
				switch (t.type) {
					case Te.h:
					case Te.j:
						return !0;
					case Te.i:
						return !1;
					default:
						return e
				}
			};
			var Si = (e = !1, t) => {
					switch (t.type) {
						case Te.h:
						case Te.j:
							return !1;
						case Te.i:
							return !0;
						default:
							return e
					}
				},
				gi = Object(T.c)({
					error: hi,
					fetched: Ii,
					pending: Si
				});
			var Ti = (e = null, t) => {
				switch (t.type) {
					case Te.l:
					case Te.m:
						return null;
					case Te.k:
						return t.payload;
					default:
						return e
				}
			};
			var Di = (e = !1, t) => {
				switch (t.type) {
					case Te.k:
					case Te.m:
						return !0;
					case Te.l:
						return !1;
					default:
						return e
				}
			};
			var ji = (e = !1, t) => {
					switch (t.type) {
						case Te.k:
						case Te.m:
							return !1;
						case Te.l:
							return !0;
						default:
							return e
					}
				},
				vi = Object(T.c)({
					error: Ti,
					fetched: Di,
					pending: ji
				});
			var Ai = (e = null, t) => {
				switch (t.type) {
					case Te.o:
					case Te.p:
						return null;
					case Te.n:
						return t.payload;
					default:
						return e
				}
			};
			var wi = (e = !1, t) => {
				switch (t.type) {
					case Te.n:
					case Te.p:
						return !0;
					case Te.o:
						return !1;
					default:
						return e
				}
			};
			var Ri = (e = !1, t) => {
					switch (t.type) {
						case Te.n:
						case Te.p:
							return !1;
						case Te.o:
							return !0;
						default:
							return e
					}
				},
				Ci = Object(T.c)({
					error: Ai,
					fetched: wi,
					pending: Ri
				});
			var Pi = (e = !1, t) => {
				switch (t.type) {
					case Te.t:
						return !1;
					case Te.u:
						return !0;
					default:
						return e
				}
			};
			var Li = (e = !1, t) => {
					switch (t.type) {
						case Te.t:
							return !0;
						case Te.u:
							return !1;
						default:
							return e
					}
				},
				Ni = Object(T.c)({
					fetched: Pi,
					pending: Li
				});
			var ki = (e = null, t) => {
				switch (t.type) {
					case Te.A:
					case Te.B:
						return null;
					case Te.z:
						return t.payload;
					default:
						return e
				}
			};
			var xi = (e = !1, t) => {
				switch (t.type) {
					case Te.A:
					case Te.z:
						return !1;
					case Te.B:
						return !0;
					default:
						return e
				}
			};
			var Ui = (e = !0, t) => {
					switch (t.type) {
						case Te.A:
							return !0;
						case Te.B:
						case Te.z:
							return !1;
						default:
							return e
					}
				},
				Mi = Object(T.c)({
					error: ki,
					fetched: xi,
					pending: Ui
				});
			var Fi = (e = null, t) => {
				switch (t.type) {
					case Te.w:
					case Te.x:
						return null;
					case Te.v:
						return t.payload;
					default:
						return e
				}
			};
			var Gi = (e = !1, t) => {
				switch (t.type) {
					case Te.v:
					case Te.x:
						return !0;
					case Te.w:
						return !1;
					default:
						return e
				}
			};
			var Bi = (e = null, t) => {
					switch (t.type) {
						case Te.v:
						case Te.x:
							return null;
						case Te.w:
							const {
								id: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				Hi = Object(T.c)({
					error: Fi,
					fetched: Gi,
					pending: Bi
				}),
				Vi = Object(T.c)({
					addSubreddit: mi,
					create: Oi,
					deleteMulti: gi,
					duplicate: vi,
					edit: Ci,
					forUser: Ni,
					recommendations: Mi,
					removeSubreddit: Hi
				}),
				qi = r("./node_modules/lodash/isEqual.js"),
				Ki = r.n(qi),
				Wi = r("./node_modules/lodash/union.js"),
				$i = r.n(Wi);

			function Qi(e, t, r) {
				let s, n, a = e.length - 1,
					c = 0;
				for (; c <= a;) {
					const o = r(s = e[n = (c + a) / 2 | 0], t);
					if (o < 0) {
						if ((c = n + 1) > a) return c
					} else {
						if (!(o > 0)) return n;
						if ((a = n - 1) < c) return a + 1
					}
				}
				return (c + a) / 2 | 0
			}
			var Yi = r("./src/reddit/actions/profile/constants.ts");
			const zi = {};
			var Xi = (e = zi, t) => {
					switch (t.type) {
						case je.b:
						case Te.r:
						case Te.u:
						case Yi.h: {
							const {
								multireddits: r,
								multiredditsByUser: s,
								multiredditsModelsState: n
							} = t.payload, a = {
								...e
							}, c = {
								...r,
								...n
							};
							for (const t in s) {
								const r = s[t],
									n = e[t];
								a[t] = $i()(n, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Ki()(e, a) ? e : a
						}
						case Te.g:
						case Te.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, n = e[r] ? e[r].slice() : [], a = Qi(n, s.url, (e, t) => e > t ? 1 : -1);
							return n.splice(a, 0, s.url), {
								...e,
								[r]: n
							}
						}
						case Te.j: {
							const r = t.payload;
							for (const t in e) {
								const s = e[t];
								if (s.indexOf(r) > -1) return {
									...e,
									[t]: s.filter(e => e !== r)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				Ji = r("./src/reddit/actions/subscription/constants.ts"),
				Zi = r("./src/reddit/models/Multireddit/index.ts");
			const eu = {};
			var tu = (e = eu, t) => {
				switch (t.type) {
					case je.b:
					case Te.r:
					case Te.u:
					case Yi.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const n = {
									...t.payload.multireddits[s]
								},
								a = e[s];
							a && !Object(Zi.g)(n) && (n.subredditIds = a.subredditIds, n.profileIds = a.profileIds), s in e && Ki()(e[n.url], n) || (r = {
								...r,
								[s]: n
							})
						}
						return ta()(r) ? e : {
							...e,
							...r
						}
					}
					case Te.g:
					case Te.m: {
						const {
							multireddit: r
						} = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Te.j: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r], s
					}
					case Te.p: {
						const r = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Te.x: {
						const {
							id: r,
							multipath: s,
							type: n
						} = t.payload, a = e[s], c = "subreddit" === n ? (a.subredditIds || []).filter(e => e !== r) : a.subredditIds, o = "profile" === n ? (a.profileIds || []).filter(e => e !== r) : a.profileIds;
						return {
							...e,
							[s]: {
								...a,
								profileIds: o,
								subredditIds: c
							}
						}
					}
					case Ji.d: {
						const {
							makeFavorite: r,
							multiredditPath: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								isFavorited: r
							}
						}
					}
					case Ji.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								isFollowed: r,
								isFavorited: !1
							}
						}
					}
					case Te.c: {
						const {
							id: r,
							multipaths: s,
							type: n
						} = t.payload, a = s.reduce((t, s) => {
							const a = e[s],
								c = "subreddit" === n ? [...a.subredditIds || [], r] : a.subredditIds,
								o = "profile" === n ? [...a.profileIds || [], r] : a.profileIds;
							return {
								...t,
								[s]: {
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
			const ru = {};
			var su = (e = ru, t) => {
					switch (t.type) {
						case Te.B: {
							const {
								multipath: r,
								subreddits: s
							} = t.payload;
							return {
								...e,
								[r]: Object.keys(s)
							}
						}
						default:
							return e
					}
				},
				nu = Object(T.c)({
					api: Vi,
					byUserId: Xi,
					models: tu,
					recommendations: su
				}),
				au = r("./src/reddit/actions/notificationBanner.ts");
			var cu = (e = null, t) => {
					switch (t.type) {
						case au.b:
							return t.payload.notificationBannerId;
						case au.a:
							return null;
						default:
							return e
					}
				},
				ou = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var du = (e = !1, t) => {
				switch (t.type) {
					case ou.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case ou.e:
					case ou.b:
						return !1;
					default:
						return e
				}
			};
			var iu = (e = !1, t) => {
					switch (t.type) {
						case ou.e:
							return !0;
						case ou.a:
						case ou.b:
							return !1;
						default:
							return e
					}
				},
				uu = Object(T.c)({
					error: du,
					pending: iu
				});
			var lu = (e = null, t) => {
				switch (t.type) {
					case ou.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var pu = (e = null, t) => {
				switch (t.type) {
					case ou.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const bu = [];
			var fu = (e = bu, t) => {
				switch (t.type) {
					case ou.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case ou.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case ou.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							n = e.findIndex(e => e.id === r);
						return -1 === n ? e : [...e.slice(0, n), {
							...e[n],
							readAt: s
						}, ...e.slice(n + 1)]
					}
					case ou.c: {
						const r = t.payload && t.payload.now;
						return e.map(e => e.readAt ? e : {
							...e,
							readAt: r
						})
					}
					default:
						return e
				}
			};
			var mu = (e = null, t) => {
					switch (t.type) {
						case ou.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				yu = Object(T.c)({
					api: uu,
					earlierDividerIndex: lu,
					notifications: fu,
					pageInfo: mu,
					markAllAsReadTimestamp: pu
				}),
				Eu = r("./src/reddit/actions/nps.ts");
			const _u = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Ou = (e = _u, t) => {
				switch (t.type) {
					case Eu.c:
						return {
							..._u, pending: !0
						};
					case Eu.a:
						return _u;
					case Eu.b: {
						const {
							dest: e
						} = t.payload;
						return {
							..._u,
							success: !0,
							dest: e
						}
					}
					default:
						return e
				}
			};
			const hu = e => {
				const {
					id: t,
					experimentName: r,
					name: s,
					version: n
				} = e;
				return {
					id: parseInt(t),
					name: r,
					variant: s || void 0,
					version: n
				}
			};
			const Iu = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = hu(r);
					return t
				},
				Su = {};
			var gu = (e = Su, t) => {
				switch (t.type) {
					case Va.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return Iu(r)
					}
					default:
						return e
				}
			};
			var Tu = Object(T.c)({
					byName: gu,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case Va.a: {
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
				Du = Object(T.c)({
					experiments: Tu
				}),
				ju = r("./node_modules/history/esm/history.js");
			const vu = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Au = (e = vu, t) => {
				switch (t.type) {
					case u.a: {
						const r = e.currentPage,
							s = t.payload,
							{
								routeMatch: n,
								location: a
							} = s,
							{
								key: c
							} = a;
						if (void 0 === c) return e;
						const o = Object(ju.e)(a),
							d = n ? ((e, t, r, s) => {
								const {
									action: n,
									...a
								} = r.route;
								return {
									key: e,
									locationState: s.state,
									meta: r.route.meta,
									queryParams: r.match.queryParams,
									routeMatch: {
										...r,
										route: a
									},
									status: 200,
									url: t,
									urlParams: r.match.params
								}
							})(c, o, n, a) : ((e, t) => ({
								key: e,
								locationState: {},
								meta: null,
								queryParams: {},
								routeMatch: null,
								status: 404,
								url: t,
								urlParams: {}
							}))(c, o);
						let {
							referrers: i
						} = e;
						if ("PUSH" === s.action) {
							const e = r && r.url || "";
							i = {
								...i,
								[c]: e
							}
						} else if ("REPLACE" === s.action && r && i[r.key]) {
							const {
								[r.key]: e, ...t
							} = i;
							i = {
								...t,
								[c]: e
							}
						}
						return {
							...e,
							referrers: i,
							currentPage: d,
							lastPage: r
						}
					}
					case u.e: {
						const r = t.payload,
							{
								key: s,
								meta: n
							} = r;
						return {
							...e,
							metas: {
								...e.metas,
								[s]: n
							}
						}
					}
					case u.f: {
						if (!e.currentPage) return e;
						const r = t.payload,
							s = {
								...e.currentPage,
								status: r
							};
						return {
							...e,
							currentPage: s
						}
					}
					case G.b:
					case G.f:
						return !e.currentPage || t.payload.postMeta, e;
					case u.b:
						return e;
					case u.d: {
						const {
							allowNavigationCallback: r
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: r
						}
					}
					case u.c:
						return {
							...e, allowNavigationCallback: null
						};
					default:
						return e
				}
			};
			const wu = {};
			var Ru = (e = wu, t) => {
				switch (t.type) {
					case d.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...n
						} = e;
						return n
					}
					case d.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...n
						} = e;
						return n
					}
					case d.i: {
						const {
							pollId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Cu = {};
			var Pu = (e = Cu, t) => {
					switch (t.type) {
						case d.k: {
							const {
								pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: !1
							}
						}
						case d.i: {
							const {
								pollId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case d.j: {
							const {
								pollId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				Lu = Object(T.c)({
					error: Ru,
					pending: Pu
				}),
				Nu = Object(T.c)({
					voting: Lu
				}),
				ku = r("./src/reddit/actions/economics/predictions/constants.ts");
			var xu = r("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Uu = r("./src/reddit/models/Prediction/index.ts");
			const Mu = {};
			var Fu = (e = Mu, t) => {
				switch (t.type) {
					case d.h: {
						const {
							poll: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Se.b:
					case K.SUBREDDIT_LOADED:
					case $.i:
					case Se.f:
					case G.b:
					case G.f:
					case ku.g: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t].poll;
								return e[s.id] = s, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const n = {};
						return Object.keys(s).forEach(e => {
							var t, r;
							const a = s[e];
							if (a.pollData && (n[e] = (e => {
									if (!e.pollData) return null;
									const {
										id: t,
										authorId: r,
										belongsTo: s,
										created: n,
										pollData: {
											isPrediction: a,
											options: c,
											resolvedOptionId: o,
											totalStakeAmount: d,
											totalVoteCount: i,
											tournamentId: u,
											userSelection: l,
											userWonAmount: p,
											voteUpdatesRemained: b,
											votingEndTimestamp: f,
											predictionStatus: m
										}
									} = e;
									return {
										id: t,
										createdAt: n,
										creatorId: r,
										subredditId: s.id,
										endsAt: f,
										voteUpdatesRemained: b,
										postId: t,
										options: c,
										totalVoters: i,
										type: vn.a.GA,
										isPrediction: a,
										totalStakeAmount: d,
										tournamentId: u,
										userSelection: l,
										userWonAmount: p,
										resolvedOptionId: o,
										predictionStatus: m
									}
								})(a)), null === (r = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									n[t.id] = function({
										wonAmount: e,
										endsAt: t,
										id: r,
										totalVoteCount: s,
										totalStakeAmount: n,
										status: a,
										...c
									}, {
										tournamentId: o,
										subredditId: d,
										creatorId: i,
										createdAt: u
									}) {
										return {
											id: r,
											isPrediction: !0,
											predictionStatus: a,
											createdAt: u,
											creatorId: i,
											tournamentId: o,
											subredditId: d,
											userWonAmount: e,
											votingEndTimestamp: t,
											endsAt: t,
											postId: r,
											totalStakeAmount: n || 0,
											totalVoteCount: s || 0,
											totalVoters: s || 0,
											...c
										}
									}(t, {
										tournamentId: e,
										creatorId: a.author,
										createdAt: a.created,
										subredditId: a.belongsTo.id
									})
								})
							}
						}), {
							...e,
							...n
						}
					}
					case ku.i:
					case ku.h: {
						const {
							pollId: r,
							prediction: {
								options: s,
								selectedOptionId: n,
								totalVoteCount: a,
								...c
							}
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...c,
								userSelection: n,
								options: s.map(({
									id: t,
									redditorStakeAmount: s,
									totalStakeAmount: n,
									voteCount: a
								}) => ({
									...e[r].options.find(e => e.id === t),
									totalStakeAmount: n,
									userStakeAmount: s,
									voteCount: a
								})),
								totalVoters: a
							}
						}
					}
					case ku.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return e[r] && Object(Uu.c)(e[r]) ? {
							...e,
							[r]: {
								...e[r],
								...Object(xu.b)(s)
							}
						} : e
					}
					default:
						return e
				}
			};
			const Gu = {};
			var Bu = (e = Gu, t) => {
				switch (t.type) {
					case d.k: {
						const {
							[vn.b.ByVoters]: r, pollId: s
						} = t.payload.pollResults;
						return {
							...e,
							[s]: r
						}
					}
					case d.e: {
						const {
							pollId: r,
							optionId: s,
							options: n
						} = t.payload;
						let a = 0;
						const c = {};
						for (const e of n) a += e.voteCount, c[e.id] = {
							id: "number" == typeof e.id ? e.id : parseInt(e.id),
							userSelected: e.id === s,
							votes: e.voteCount.toString()
						};
						return {
							...e,
							[r]: {
								options: c,
								totalVotes: a.toString()
							}
						}
					}
					case Se.b:
					case K.SUBREDDIT_LOADED:
					case $.i:
					case Se.f:
					case G.b:
					case G.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t],
									{
										[vn.b.ByVoters]: n,
										pollId: a
									} = s.pollResults;
								return e[a] = n, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const n = Object.keys(s).reduce((e, t) => {
							var r;
							if (!(null === (r = s[t]) || void 0 === r ? void 0 : r.pollData)) return e;
							const n = (e => {
								const {
									options: t,
									totalVoteCount: r,
									userSelection: s
								} = e;
								return {
									options: t.reduce((e, {
										id: t,
										voteCount: r
									}) => ({
										...e,
										[t.toString()]: {
											id: t,
											votes: (r || 0).toString(),
											userSelected: t === s
										}
									}), {}),
									totalVotes: r.toString()
								}
							})(s[t].pollData);
							return n ? (e[t] = n, e) : e
						}, {});
						return Object.keys(n).length ? {
							...e,
							...n
						} : e
					}
					default:
						return e
				}
			};
			const Hu = {};
			var Vu = (e = Hu, t) => {
					switch (t.type) {
						case d.k: {
							const {
								[vn.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case Se.b:
						case K.SUBREDDIT_LOADED:
						case $.i:
						case Se.f:
						case G.b:
						case G.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[vn.b.ByVotingPower]: n,
											pollId: a
										} = s.pollResults;
									return e[a] = n, e
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
				qu = Object(T.c)({
					byVoters: Bu,
					byVotingPower: Vu
				});
			const Ku = {};
			var Wu = (e = Ku, t) => {
					switch (t.type) {
						case d.k: {
							const {
								pollId: r,
								rewardPoints: s
							} = t.payload.pollResults;
							return s ? {
								...e,
								[r]: s
							} : e
						}
						default:
							return e
					}
				},
				$u = Object(T.c)({
					api: Nu,
					models: Fu,
					results: qu,
					rewards: Wu
				});
			const Qu = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Yu = (e = Qu, t) => {
				switch (t.type) {
					case Mr.i:
					case Mr.j:
						return {
							...e, reorderError: null
						};
					case Mr.h:
						return {
							...e, reorderError: t.payload
						};
					case Mr.l:
					case Mr.m:
						return {
							...e, updateDescriptionError: null
						};
					case Mr.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Mr.p:
					case Mr.q:
						return {
							...e, updateLayoutError: null
						};
					case Mr.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const zu = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Xu = (e = zu, t) => {
					switch (t.type) {
						case Mr.i:
							return {
								...e, reorderPending: !0
							};
						case Mr.h:
						case Mr.j:
							return {
								...e, reorderPending: !1
							};
						case Mr.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Mr.k:
						case Mr.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Mr.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Mr.o:
						case Mr.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				Ju = Object(T.c)({
					error: Yu,
					pending: Xu
				}),
				Zu = r("./src/reddit/helpers/path/index.ts");
			const el = {},
				tl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Zu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var rl = (e = el, t) => {
				switch (t.type) {
					case ve.PAGE_LOADED:
					case De.e:
					case De.h:
					case B.b:
					case B.e:
					case Ae.e:
					case Ae.b:
					case H.PROFILE_POSTS_LOADED:
					case H.MORE_POSTS_LOADED:
					case K.SUBREDDIT_LOADED:
					case Se.b:
					case je.b:
					case K.SUBREDDIT_LOADED:
					case G.b:
					case G.f:
					case yd.j:
					case Te.r:
					case Se.f:
					case W.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Pe.g:
					case we.b:
					case q.SEARCH_RESULTS_RECEIVED:
					case Mr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let n = r;
						if (s) {
							const e = tl(s);
							n = Lt()(r, e)
						}
						return {
							...e,
							...n
						}
					}
					case Mr.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const n = r.id;
						let a = r;
						if (s) {
							a = tl(s)(r)
						}
						return {
							...e,
							[n]: a
						}
					}
					case Mr.g: {
						const {
							collectionId: r,
							postId: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								postIds: n.postIds.filter(e => e !== s)
							}
						} : e
					}
					case Mr.a: {
						const {
							collectionId: r,
							postId: s
						} = t.payload, n = e[r];
						return n && s ? {
							...e,
							[r]: {
								...n,
								postIds: [...n.postIds, s]
							}
						} : e
					}
					case Mr.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Mr.s: {
						const {
							collectionId: r,
							newTitle: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								title: s
							}
						} : e
					}
					case Mr.j: {
						const {
							collectionId: r,
							postIds: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								postIds: [...s]
							}
						} : e
					}
					case Mr.m: {
						const {
							collectionId: r,
							newDescription: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								description: s
							}
						} : e
					}
					case Mr.q: {
						const {
							collectionId: r,
							newLayout: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								displayLayout: s
							}
						} : e
					}
					default:
						return e
				}
			};
			const sl = {};
			var nl = (e = sl, t) => {
					switch (t.type) {
						case ve.PAGE_LOADED:
						case Mr.f: {
							const {
								collections: r
							} = t.payload;
							if (!r) return e;
							const s = Object.keys(r);
							if (!s.length) return e;
							const {
								subredditId: n
							} = r[s[0]];
							return {
								...e,
								[n]: s
							}
						}
						case Mr.d: {
							const {
								collection: r
							} = t.payload, {
								subredditId: s
							} = r, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r.id]
							}
						}
						case Mr.e: {
							const {
								collectionId: r,
								collection: s
							} = t.payload;
							if (!s) return e;
							const n = s && e[s.subredditId];
							return n ? {
								...e,
								[s.subredditId]: n.filter(e => e !== r)
							} : e
						}
						default:
							return e
					}
				},
				al = Object(T.c)({
					models: rl,
					subredditToIds: nl,
					api: Ju
				}),
				cl = r("./src/reddit/actions/postFlair.ts"),
				ol = r("./src/reddit/models/Flair/index.ts");
			const dl = {},
				il = {
					displaySettings: {
						isEnabled: !1,
						position: ol.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				ul = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...il,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var ll = (e = dl, t) => {
				switch (t.type) {
					case ve.PAGE_LOADED:
					case Se.f:
					case De.e:
					case De.h:
					case Te.r:
					case Jo.b:
					case G.b:
					case G.f:
					case Se.b:
					case je.b:
					case q.SEARCH_RESULTS_RECEIVED:
					case K.SUBREDDIT_LOADED:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case W.e:
					case we.b:
					case we.b:
					case Ae.b:
					case Ae.e:
					case H.MORE_POSTS_LOADED:
					case H.PROFILE_POSTS_LOADED:
					case "RECOMMENDED_POSTS_LOADED":
					case Pe.g:
					case Pe.g:
					case $.i:
						return ul(e, t.payload.postFlair);
					case cl.c: {
						const {
							subredditId: r,
							isEnabled: s
						} = t.payload, n = {
							...e[r].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: n
							}
						}
					}
					case cl.a: {
						const {
							subredditId: r,
							canAssignOwn: s
						} = t.payload, n = {
							...e[r].permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[r]: {
								...e[r],
								permissions: n
							}
						}
					}
					case cl.f: {
						const {
							subredditId: r,
							template: s
						} = t.payload, n = e[r], {
							templates: a,
							templateIds: c
						} = n, o = {
							...a,
							[s.id]: s
						}, d = [...c];
						return d.includes(s.id) || d.push(s.id), {
							...e,
							[r]: {
								...n,
								templates: o,
								templateIds: d
							}
						}
					}
					case cl.b: {
						const {
							subredditId: r,
							templateId: s
						} = t.payload, n = e[r], {
							templates: a,
							templateIds: c
						} = n, o = Ls()(a, s), d = c.filter(e => e !== s);
						return {
							...e,
							[r]: {
								...n,
								templates: o,
								templateIds: d
							}
						}
					}
					case cl.e:
					case cl.d: {
						const r = t.payload,
							s = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...s,
								templateIds: r.templateIds
							}
						}
					}
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v: {
						const {
							response: r
						} = t.payload;
						return ul(e, r.postFlair)
					}
					default:
						return e
				}
			};
			var pl = (e = null, t) => {
					switch (t.type) {
						case yd.c:
							return t.payload;
						default:
							return e
					}
				},
				bl = r("./src/reddit/actions/embedAndImage.ts");
			const fl = {};
			var ml = (e = fl, t) => {
					switch (t.type) {
						case bl.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case bl.a: {
							const {
								postId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
					}
					return e
				},
				yl = Object(T.c)({
					loadable: ml
				});
			const El = {};
			var _l = (e = El, t) => {
				switch (t.type) {
					case yd.d: {
						const {
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: !e[r]
						}
					}
					default:
						return e
				}
			};
			var Ol = (e = null, t) => {
				switch (t.type) {
					case yd.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const hl = [];
			var Il = (e = hl, t) => {
				switch (t.type) {
					case yd.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case yd.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case yd.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Sl = {};
			var gl = (e = Sl, t) => {
				switch (t.type) {
					case De.e:
					case De.h:
					case Se.b:
					case K.SUBREDDIT_LOADED:
					case Se.f:
					case W.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Pe.g:
					case q.SEARCH_RESULTS_RECEIVED:
						return k()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var Tl = (e = null, t) => {
					switch (t.type) {
						case yd.a:
							return t.payload;
						default:
							return e
					}
				},
				Dl = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const jl = {};
			var vl = (e = jl, t) => {
				switch (t.type) {
					case Dl.a: {
						const r = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const Al = {};
			var wl = (e = Al, t) => {
					switch (t.type) {
						case d.h: {
							const {
								poll: r
							} = t.payload;
							return {
								...e,
								[r.postId]: r.id
							}
						}
						case Se.b:
						case K.SUBREDDIT_LOADED:
						case $.i:
						case Se.f:
						case G.b:
						case G.f:
						case ku.g: {
							const {
								governance: r,
								posts: s
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t];
									return e[t] = s.poll.id, e
								}, {});
								return {
									...e,
									...t
								}
							}
							const n = Object.keys(s).reduce((e, t) => {
								var r, n;
								const a = s[t];
								if ((null == a ? void 0 : a.pollData) && (e[t] = t), null === (n = null === (r = a.predictionTournament) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.length) {
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
								...n
							}
						}
						default:
							return e
					}
				},
				Rl = r("./src/reddit/actions/bulkActions/constants.ts"),
				Cl = r("./src/reddit/actions/constants.ts"),
				Pl = r("./src/reddit/actions/flairManagement/constants.ts"),
				Ll = r("./src/reddit/actions/googleQASchema/constants.ts"),
				Nl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				kl = r("./src/reddit/actions/subredditTopContent.ts"),
				xl = r("./src/reddit/helpers/isPost.ts"),
				Ul = r("./node_modules/lodash/pickBy.js"),
				Ml = r.n(Ul);

			function Fl(e, t) {
				const r = Ml()(t, (t, r = "") => !e[r] || !Ki()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Gl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Bl = r("./src/reddit/models/Media/index.ts"),
				Hl = r("./src/reddit/models/ModQueue/index.ts"),
				Vl = r("./src/reddit/models/Post/index.ts"),
				ql = r("./src/reddit/models/Vote/index.ts"),
				Kl = r("./src/reddit/actions/subredditDuplicates.ts");

			function Wl({
				tournamentId: e,
				name: t,
				status: r,
				totalParticipants: s,
				predictions: n
			}) {
				return {
					tournamentId: e,
					name: t,
					status: r,
					totalParticipantsCount: s,
					predictions: n.map($l)
				}
			}

			function $l({
				id: e,
				title: t,
				predictionStatus: r,
				resolvedOptionId: s,
				votingEndTimestamp: n,
				userWonAmount: a,
				totalStakeAmount: c,
				totalVoteCount: o,
				userSelection: d,
				isNSFW: i,
				isSpoiler: u,
				options: l
			}) {
				return {
					id: e,
					title: t,
					endsAt: n,
					status: r,
					voteUpdatesRemained: null,
					isNSFW: i,
					isSpoiler: u,
					totalVoteCount: o,
					totalStakeAmount: c,
					wonAmount: a,
					resolvedOptionId: s,
					selectedOptionId: d,
					options: l.map(Ql)
				}
			}

			function Ql({
				userAmount: e,
				...t
			}) {
				return {
					...t,
					userStakeAmount: e
				}
			}
			const Yl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Zu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				},
				zl = e => t => {
					const r = e[t.id];
					return r && r.events && (t.events = r.events, t.source = r.source), t
				},
				Xl = e => t => {
					const r = e[t.id];
					return r && r.isSponsored && (t.isSponsored = r.isSponsored), t
				},
				Jl = (e, t) => e.pollData ? {
					...e,
					pollData: {
						...e.pollData,
						...t
					}
				} : e,
				Zl = ({
					tournamentData: e,
					...t
				}) => e ? {
					...t,
					predictionTournament: Wl(e)
				} : t,
				ep = e => e.media && Object(Bl.E)(e.media) ? {
					...Object(L.unsetIn)(e, ["source"])
				} : e,
				tp = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(Bl.I)(t.media) && t.media.isRichtextPreview && Object(Bl.I)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				rp = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				sp = e => t => {
					const r = e[t.id];
					return r && void 0 !== r.isEligibleForLinkedPosts && (t.isEligibleForLinkedPosts = r.isEligibleForLinkedPosts), t
				},
				np = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				ap = e => {
					const {
						allAwardings: t,
						...r
					} = e, s = {};
					return t && t.forEach(e => {
						s[e.id] = e.count
					}), {
						...r,
						awardCountsById: s
					}
				},
				cp = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				op = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				}),
				dp = {};
			var ip = (e = dp, t) => {
				switch (t.type) {
					case u.a:
						if (Us(t) === (Ce.Kb.COMMENTS || Ce.Kb.DUPLICATES)) {
							const r = Ms(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									n = Object(Vl.s)(s.partialPostId);
								if (e[n] && e[t]) return {
									...e,
									[n]: op(e[n], e[t])
								}
							}
						}
						return e;
					case G.b:
					case G.f: {
						const r = Yl(t.payload.meta);
						return {
							...e,
							...Lt()(t.payload.posts, cp([r, np, ap, ep, Zl, zl(e), Xl(e), rp(e), sp(e)]))
						}
					}
					case yd.j:
						return Fl(e, t.payload);
					case Kl.a:
						return Fl(e, t.payload.posts);
					case ve.PAGE_LOADED:
					case rd.c:
					case sd.b:
					case De.e:
					case De.h:
					case B.b:
					case B.e:
					case Ae.e:
					case Ae.b:
					case H.PROFILE_POSTS_LOADED:
					case H.MORE_POSTS_LOADED:
					case K.SUBREDDIT_LOADED:
					case Se.b:
					case je.b:
					case Jo.b:
					case Te.r:
					case Se.f:
					case W.e:
					case "RECOMMENDED_POSTS_LOADED":
					case nd.j:
					case $.i:
					case we.b:
					case Zo.TOPIC_DATA_LOADED:
					case Zo.MORE_POSTS_LOADED:
					case Xo.c:
					case Xo.d:
					case ku.g: {
						const r = Yl(t.payload.meta);
						return {
							...e,
							...Lt()(t.payload.posts, cp([r, np, ap, ep, Zl, tp(e), rp(e), sp(e)]))
						}
					}
					case nd.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								n = Yl(t.meta);
							Object.assign(r, Lt()(t.posts, cp([n, np, ap, ep, tp(e), rp(e), sp(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Jo.b: {
						const r = Yl(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...Lt()(t.payload.posts, cp([r, np, ap, ep, tp(e), rp(e), sp(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Pe.g:
					case q.SEARCH_RESULTS_RECEIVED: {
						const r = Yl(t.payload.meta),
							s = Lt()(t.payload.posts, cp([r, ap, np, ep, sp(e)]));
						return k()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case yd.k: {
						const r = t.payload;
						return k()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Cl.a: {
						const {
							id: r,
							vote: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: Object(ql.c)(n, s)
						} : e
					}
					case U.b:
					case x.J: {
						const r = t.payload.comment.postId,
							s = e[r];
						if (s) {
							const n = void 0 !== t.payload.numComments ? t.payload.numComments : s.numComments + 1;
							return {
								...e,
								[r]: {
									...s,
									numComments: n
								}
							}
						}
						return e
					}
					case yd.h: {
						const {
							postId: r,
							delta: s
						} = t.payload, n = e[r];
						if (n) {
							let t = n.numComments + s;
							return t < 0 && (t = 0), {
								...e,
								[r]: {
									...n,
									numComments: t
								}
							}
						}
						return e
					}
					case yd.i: {
						const {
							postId: r,
							delta: s
						} = t.payload, n = e[r];
						if (n) {
							let t = n.score + s;
							return t < 0 && (t = 0), {
								...e,
								[r]: {
									...n,
									score: t
								}
							}
						}
						return e
					}
					case x.A: {
						const r = t.payload.postId,
							s = e[r];
						return s ? {
							...e,
							[r]: {
								...s,
								numComments: s.numComments - 1
							}
						} : e
					}
					case ee.tb: {
						const {
							topAwardedPosts: r
						} = t.payload;
						return {
							...e,
							...r.reduce((e, t) => (e[t.post.id] = cp([ap])(Object($s.e)(t.post)), e), {})
						}
					}
					case ee.s: {
						const {
							id: r,
							awardings: s,
							gilder: n,
							treatmentTags: a
						} = t.payload, c = e[r];
						return c ? {
							...e,
							[r]: {
								...Object(Gl.a)(c, s, n),
								treatmentTags: a
							}
						} : e
					}
					case ee.D: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, n = e[s];
						return n ? {
							...e,
							[s]: Object(Gl.b)(n, r)
						} : e
					}
					case Wd.n: {
						const {
							posts: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v: {
						const {
							response: r
						} = t.payload, {
							posts: s
						} = r;
						return {
							...e,
							...Lt()(s, cp([ap, ep]))
						}
					}
					case Rl.b:
					case F.s: {
						const {
							operation: r,
							ids: s,
							username: n,
							options: a
						} = t.payload, c = s.filter(e => Object(xl.a)(e)), o = Object(Hl.d)(e, r, c, n, a);
						return k()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Mr.t: {
						const {
							postId: r,
							collectionId: s
						} = t.payload, n = e[r];
						if (n && s) {
							const t = n.collectionIds || [];
							return t.push(s), {
								...e,
								[r]: {
									...n,
									collectionIds: [...t]
								}
							}
						}
						return e
					}
					case Mr.e: {
						const {
							collectionId: r,
							collection: s
						} = t.payload, n = s && s.postIds || [], a = {};
						return n.forEach(t => {
							const s = e[t],
								n = s && s.collectionIds;
							if (n) {
								const e = n.filter(e => e !== r);
								a[t] = {
									...s,
									collectionIds: e
								}
							}
						}), {
							...e,
							...a
						}
					}
					case Mr.g: {
						const {
							collectionId: r,
							postId: s
						} = t.payload;
						if (!r || !s) return e;
						const n = e[s],
							a = n && n.collectionIds;
						if (!a) return e;
						const c = a.filter(e => e !== r);
						return {
							...e,
							[s]: {
								...n,
								collectionIds: c
							}
						}
					}
					case Xo.f: {
						const {
							postId: r
						} = t.payload;
						if (!r) return e;
						const s = e[r];
						if (!s || !s.eventInfo) return e;
						const n = s.eventInfo;
						return {
							...e,
							[r]: {
								...s,
								eventInfo: {
									...n,
									eventIsLive: !0
								}
							}
						}
					}
					case Xo.a: {
						const {
							postId: r,
							eventInfo: s
						} = t.payload;
						if (!r || !s) return e;
						const n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								eventInfo: {
									...s
								}
							}
						} : e
					}
					case Rc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...Lt()(r.posts, cp([ap, ep])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case kl.b:
						return {
							...Lt()(t.payload.posts, cp([ap, ep])), ...e
						};
					case yd.m: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, n = e[r];
						return n && n.media && Object(Bl.I)(n.media) ? {
							...e,
							[r]: {
								...n,
								media: {
									...n.media,
									richtextContent: s,
									isRichtextPreview: !1
								}
							}
						} : e
					}
					case Pl.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Pl.b: {
						const r = t.payload;
						return Object(Ft.a)(e, r)
					}
					case y.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case Nl.b: {
						const {
							altText: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								media: {
									...e[s].media,
									altText: r
								}
							}
						}
					}
					case ku.l: {
						const {
							tournamentPostId: r,
							predictionId: s,
							selectedOptionId: n
						} = t.payload;
						if (!e[s] && !e[r]) return e;
						const a = {
							...e
						};
						return a[s] && (a[s] = (({
							post: e,
							selectedOptionId: t
						}) => Jl(e, {
							userSelection: t
						}))({
							post: e[s],
							selectedOptionId: n
						})), a[r] && (a[r] = (({
							post: e,
							selectedOptionId: t,
							predictionId: r
						}) => {
							var s, n;
							if (e.predictionTournament) return {
								...e,
								predictionTournament: {
									...e.predictionTournament,
									predictions: null === (n = null === (s = e.predictionTournament) || void 0 === s ? void 0 : s.predictions) || void 0 === n ? void 0 : n.map(e => e.id === r ? {
										...e,
										selectedOptionId: t
									} : e)
								}
							}
						})({
							post: e[r],
							selectedOptionId: n,
							predictionId: s
						})), a
					}
					case ku.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return {
							...e,
							[r]: Jl(e[r], Object(xu.a)(s))
						}
					}
					case Nl.a:
						return {
							...e
						};
					case Ll.b: {
						const {
							postId: r,
							isEligibleForQASchema: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isEligibleForQASchema: s
							}
						}
					}
					case Ll.a:
						return {
							...e
						};
					case rd.a: {
						const {
							postId: r,
							isEligibleForLinkedPosts: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isEligibleForLinkedPosts: s
							}
						}
					}
					default:
						return e
				}
			};
			var up = (e = null, t) => {
					switch (t.type) {
						case yd.g:
							return t.payload;
						default:
							return e
					}
				},
				lp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const pp = {};
			var bp = (e = pp, t) => {
				switch (t.type) {
					case lp.a: {
						const r = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const fp = [];
			var mp = (e = fp, t) => {
					switch (t.type) {
						case yd.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case Se.b:
						case K.SUBREDDIT_LOADED: {
							const {
								recentPostIds: r
							} = t.payload;
							return r && r.length ? r : e
						}
						default:
							return e
					}
				},
				yp = r("./node_modules/uuid/v4.js"),
				Ep = r.n(yp);
			const _p = Ep()();
			var Op = (e = _p, t) => {
				switch (t.type) {
					case ve.PAGE_LOADED:
					case _s.h:
					case _s.a:
					case _s.m:
					case _s.f:
						return Ep()();
					default:
						return e
				}
			};
			var hp = (e = null, t) => {
				switch (t.type) {
					case _s.d:
					case _s.o:
					case _s.k:
					case _s.g:
					case _s.a:
					case _s.m:
					case _s.f:
						return null;
					case _s.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case _s.e:
						return "error";
					default:
						return e
				}
			};
			var Ip = (e = !0, t) => {
				switch (t.type) {
					case _s.g:
						return !0;
					case _s.m:
					case _s.a:
					case _s.f:
					case _s.e:
						return !1;
					default:
						return e
				}
			};
			var Sp = (e = !1, t) => {
					switch (t.type) {
						case _s.k:
							return !0;
						case _s.j:
						case _s.e:
						case _s.o:
						case _s.d:
							return !1;
						default:
							return e
					}
				},
				gp = Object(T.c)({
					creationToken: Op,
					error: hp,
					pending: Ip,
					pendingUpdate: Sp
				});
			const Tp = {};
			var Dp = (e = Tp, t) => {
				switch (t.type) {
					case _s.c: {
						const {
							subredditId: e,
							id: r
						} = t.payload;
						return {
							subredditId: e,
							scheduledPostId: r
						}
					}
					default:
						return e
				}
			};
			const jp = {
				standalonePosts: {
					POSTS_LOADED: _s.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: _s.o
				},
				recurringPosts: {
					POSTS_LOADED: _s.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: _s.d
				}
			};

			function vp(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case jp[e].POSTS_LOADED:
						case _s.f: {
							const {
								subredditInfoById: t
							} = s.payload, {
								id: n
							} = t, a = t.scheduledPosts[e].models.reduce((e, t) => (e[t.id] = t, e), {});
							return {
								...r,
								[n]: {
									...r[n] || {},
									...a
								}
							}
						}
						case _s.i:
						case _s.l: {
							const {
								subredditId: e,
								scheduledPostId: t
							} = s.payload, n = r[e] || {};
							return {
								...r,
								[e]: {
									...Object.keys(n).filter(e => e !== t).reduce((e, t) => (e[t] = n[t], e), {})
								}
							}
						}
						case _s.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case jp[e].MUTATION_SUCCEEDED: {
							let t;
							switch (e) {
								case "recurringPosts":
									t = s.payload.scheduledPost;
									break;
								case "standalonePosts":
								default:
									t = s.payload.scheduledPost
							}
							const n = t.subreddit.id,
								a = r[n][t.id],
								c = {
									[t.id]: {
										...a,
										...t
									}
								};
							return {
								...r,
								[n]: {
									...r[n] || {},
									...c
								}
							}
						}
						default:
							return r
					}
				}
			}
			const Ap = {};

			function wp(e) {
				return (t = Ap, r) => {
					switch (r.type) {
						case jp[e].POSTS_LOADED:
						case _s.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, {
								pageInfo: a
							} = s.scheduledPosts[e];
							return {
								...t,
								[n]: {
									...a
								}
							}
						}
						case _s.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(t).reduce((r, s) => (s !== e && (r[s] = t[s]), r), {})
						}
						default:
							return t
					}
				}
			}
			var Rp = r("./node_modules/lodash/uniq.js"),
				Cp = r.n(Rp);
			const Pp = {};

			function Lp(e) {
				return (t = Pp, r) => {
					switch (r.type) {
						case jp[e].POSTS_LOADED:
						case _s.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, a = s.scheduledPosts[jp[e].postIdsKey];
							return {
								...t,
								[n]: Cp()([...t[n] || [], ...a])
							}
						}
						case _s.i:
						case _s.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, n = t[e] || [];
							return {
								...t,
								[e]: n.filter(e => e !== s)
							}
						}
						case _s.h: {
							const {
								subredditId: e
							} = r.payload;
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
			var Np = Object(T.c)({
					models: vp("recurringPosts"),
					pageInfo: wp("recurringPosts"),
					postOrder: Lp("recurringPosts"),
					editModal: Dp
				}),
				kp = Object(T.c)({
					models: vp("standalonePosts"),
					pageInfo: wp("standalonePosts"),
					postOrder: Lp("standalonePosts")
				}),
				xp = Object(T.c)({
					api: gp,
					standalonePosts: kp,
					recurringPosts: Np
				});
			var Up = (e = null, t) => {
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
			var Mp = (e = !1, t) => {
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
				Fp = Object(T.c)({
					error: Up,
					pending: Mp
				});
			const Gp = [];
			var Bp = (e = Gp, t) => {
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
							return Gp;
						default:
							return e
					}
				},
				Hp = Object(T.c)({
					api: Fp,
					list: Bp
				}),
				Vp = r("./src/reddit/actions/video.ts");
			const qp = {};
			var Kp = (e = qp, t) => {
				switch (t.type) {
					case Vp.e: {
						const {
							auto: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const Wp = {};
			var $p = (e = Wp, t) => {
				switch (t.type) {
					case Vp.a: {
						const {
							postId: r,
							isBuffering: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Qp = {};
			var Yp = (e = Qp, t) => {
				switch (t.type) {
					case Vp.b: {
						const {
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const zp = {};
			var Xp = (e = zp, t) => {
				switch (t.type) {
					case Vp.c: {
						const {
							postId: r,
							time: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Jp = {
				mutedInFeed: !0
			};
			var Zp = (e = Jp, t) => {
				switch (t.type) {
					case Vp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var eb = (e = null, t) => {
				switch (t.type) {
					case Vp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Vp.d:
						return null;
					default:
						return e
				}
			};
			const tb = {};
			var rb = (e = tb, t) => {
				switch (t.type) {
					case Vp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Vp.e: {
						const {
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
				}
				return e
			};
			const sb = {};
			var nb = (e = sb, t) => {
				switch (t.type) {
					case Vp.h: {
						const {
							postId: r,
							time: s
						} = t.payload, n = e[r] || {
							cached: !0,
							start: s
						};
						return s < n.start ? e : {
							...e,
							[r]: {
								...n,
								playable: s
							}
						}
					}
					case Vp.f: {
						const {
							postId: r,
							time: s
						} = t.payload;
						return {
							...e,
							[r]: {
								cached: !1,
								start: s
							}
						}
					}
					default:
						return e
				}
			};
			const ab = {};
			var cb = (e = ab, t) => {
				switch (t.type) {
					case Vp.j: {
						const {
							postId: r,
							metadata: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const ob = {};
			var db = (e = ob, t) => {
				switch (t.type) {
					case Vp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Vp.g: {
						const {
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
				}
				return e
			};
			const ib = {};
			var ub = (e = ib, t) => {
				switch (t.type) {
					case Vp.i: {
						const {
							postId: r,
							isPlaying: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const lb = {};
			var pb = (e = lb, t) => {
					switch (t.type) {
						case Vp.m: {
							const {
								postId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				bb = r("./src/reddit/constants/video.ts");
			const fb = {};
			var mb = (e = fb, t) => {
					switch (t.type) {
						case Vp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < bb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				yb = Object(T.c)({
					autoPlayed: Kp,
					buffering: $p,
					consumed: Yp,
					continuousViewStartedAt: Xp,
					feed: Zp,
					fullscreen: eb,
					loadable: rb,
					loadTimes: nb,
					metadata: cb,
					paused: db,
					playing: ub,
					started: pb,
					time: mb
				}),
				Eb = Object(T.c)({
					embedAndImage: yl,
					expanded: _l,
					focus: Ol,
					followed: Il,
					instances: gl,
					isAnimatingUpvote: Tl,
					isTrackingCrossposts: vl,
					metaMap: wl,
					models: ip,
					modToMemberShare: up,
					crowdControl: pl,
					postLevelCrowdControl: bp,
					recent: mp,
					scheduledPosts: xp,
					topAwarded: Hp,
					video: yb
				}),
				_b = r("./src/lib/reducers/addAuthentication/index.ts");
			const Ob = {};
			var hb = Object(_b.a)((e = Ob, t) => {
					switch (t.type) {
						case G.b:
						case G.f: {
							const {
								postId: r,
								commentLists: s,
								comments: n
							} = t.payload, a = s[r] && s[r].head;
							return a && n[a.id] && n[a.id].isStickied ? {
								...e,
								[r]: a.id
							} : e
						}
						case x.F: {
							const {
								id: e,
								postId: r
							} = t.payload;
							return {
								[r]: e
							}
						}
						default:
							return e
					}
				}, Ob),
				Ib = Object(T.c)({
					data: hb
				});
			const Sb = {};
			var gb = (e = Sb, t) => {
				switch (t.type) {
					case l.f:
					case l.g: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case l.e: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Tb = {};
			var Db = (e = Tb, t) => {
					switch (t.type) {
						case l.f: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case l.g:
						case l.e: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				jb = Object(T.c)({
					error: gb,
					pending: Db
				});
			const vb = {};
			var Ab = (e = vb, t) => {
				switch (t.type) {
					case l.d: {
						const {
							product: r
						} = t.payload;
						return {
							...e,
							[r.id]: void 0
						}
					}
					case l.c:
					case i.f:
					case i.g:
					case i.i:
					case i.j: {
						const {
							productId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case l.a:
					case i.d:
					case i.h: {
						const {
							productId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const wb = {};
			var Rb = (e = wb, t) => {
					switch (t.type) {
						case l.c:
						case i.f: {
							const {
								productId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case l.d: {
							const {
								product: r
							} = t.payload;
							return {
								...e,
								[r.id]: !1
							}
						}
						case l.a:
						case i.d:
						case i.g: {
							const {
								productId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Cb = Object(T.c)({
					error: Ab,
					pending: Rb
				}),
				Pb = Object(T.c)({
					fetch: jb,
					purchase: Cb
				});
			var Lb = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Nb = {};
			var kb = (e = Nb, t) => {
					switch (t.type) {
						case o.i:
						case l.g: {
							const {
								products: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				xb = Object(T.c)({
					api: Pb,
					currentlyPurchasing: Lb,
					models: kb
				});
			const Ub = {};
			var Mb = (e = Ub, t) => {
				switch (t.type) {
					case B.f:
					case B.e:
					case B.c:
					case B.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case B.d:
					case B.a: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Fb = {};
			var Gb = (e = Fb, t) => {
					switch (t.type) {
						case B.f:
						case B.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case B.e:
						case B.d:
						case B.b:
						case B.a: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Bb = Object(T.c)({
					error: Mb,
					pending: Gb
				});
			const Hb = {};
			var Vb = (e = Hb, t) => {
					switch (t.type) {
						case B.e: {
							const {
								key: r,
								commentIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case B.b: {
							const {
								key: r,
								commentIds: s
							} = t.payload, n = e[r] || [];
							return {
								...e,
								[r]: n.concat(s)
							}
						}
						default:
							return e
					}
				},
				qb = r("./src/reddit/actions/comment/list.ts");
			const Kb = {};
			var Wb = (e = Kb, t) => {
				switch (t.type) {
					case qb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case qb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Ls()(e, r) : e
					}
					default:
						return e
				}
			};
			const $b = {};
			var Qb = (e = $b, t) => {
				switch (t.type) {
					case B.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case B.b: {
						const {
							key: r,
							fetchedToken: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								[s]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const Yb = {};
			var zb = (e = Yb, t) => {
					switch (t.type) {
						case B.e:
						case B.b: {
							const {
								key: r,
								dist: s,
								token: n
							} = t.payload;
							return n ? {
								...e,
								[r]: {
									dist: s,
									token: n
								}
							} : Object(Ft.a)(e, r)
						}
						default:
							return e
					}
				},
				Xb = Object(T.c)({
					api: Bb,
					endMarkers: Wb,
					fetchedTokens: Qb,
					commentIds: Vb,
					loadMore: zb
				}),
				Jb = r("./src/reddit/actions/pages/profileModSettings.ts");
			var Zb = (e = !0, t) => {
					switch (t.type) {
						case Jb.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				ef = Object(T.c)({
					pending: Zb
				}),
				tf = Object(T.c)({
					api: ef
				});
			const rf = {};
			var sf = (e = rf, t) => (t.type, e);
			const nf = {};
			var af = (e = nf, t) => {
				switch (t.type) {
					case V.a:
					case V.d: {
						const {
							listingKey: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case V.b:
					case V.c:
					case V.i:
					case V.f:
					case V.e:
					case V.g: {
						const {
							listingKey: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					default:
						return e
				}
			};
			const cf = {};
			var of = (e = cf, t) => {
				switch (t.type) {
					case V.b:
					case V.f: {
						const {
							listingKey: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					case V.a:
					case V.d:
					case V.c:
					case V.i:
					case V.e:
					case V.g: {
						const {
							listingKey: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					default:
						return e
				}
			}, df = Object(T.c)({
				error: af,
				pending: of
			});
			const uf = {};
			var lf = (e = uf, t) => {
				switch (t.type) {
					case V.c:
					case V.i:
					case V.e:
					case V.g: {
						const {
							listingKey: r,
							itemIds: s
						} = t.payload;
						return {
							...e,
							[r]: [...e[r] || [], ...s]
						}
					}
					default:
						return e
				}
			};
			const pf = {};
			var bf = (e = pf, t) => {
					switch (t.type) {
						case V.i:
						case V.c:
						case V.e:
						case V.g: {
							const {
								pageInfo: r,
								listingKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : pf
						}
						default:
							return e
					}
				},
				ff = Object(T.c)({
					api: df,
					ids: lf,
					pageInfo: bf
				}),
				mf = r("./src/reddit/constants/posts.ts");
			const yf = {};
			var Ef = (e = yf, t) => {
					switch (t.type) {
						case q.SEARCH_RESULTS_RECEIVED:
						case Pe.g:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case Yi.k: {
							const r = t.payload;
							return r.profile ? {
								...e,
								[r.profile.id]: r.about
							} : e
						}
						case Ji.h: {
							const {
								identifiers: r,
								userIsSubscriber: s
							} = t.payload, n = r.filter(e => e.type === mf.a.PROFILE);
							return n.length ? n.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: s
							}, e), {
								...e
							}) : e
						}
						case Pr.m: {
							const r = t.payload,
								s = e[r.subredditId];
							if (!s) return e;
							if (s.publicDescription === r.settings.publicDescription) return e;
							const n = {
								...s,
								publicDescription: r.settings.publicDescription
							};
							return {
								...e,
								[r.subredditId]: n
							}
						}
						default:
							return e
					}
				},
				_f = r("./src/reddit/models/Subreddit/index.ts");
			const Of = {};
			var hf = (e = Of, t) => {
				switch (t.type) {
					case Se.f:
					case G.b:
					case G.f:
					case Se.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Ae.b:
					case Ae.e:
					case H.PROFILE_POSTS_LOADED:
					case we.b:
					case De.e:
					case De.h:
					case Te.u:
					case Yi.h:
					case Jo.b:
					case Pe.g:
					case $.i:
					case Yi.m:
					case W.b:
					case W.e:
					case q.SEARCH_RESULTS_RECEIVED:
					case ve.PAGE_LOADED:
					case Vr.e:
					case Ns.PAGE_LOADED:
					case K.SUBREDDIT_LOADED:
					case je.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ji.c:
						return Object(L.merge)(e, t.payload.profiles);
					case Pe.i: {
						const {
							typeaheadSuggestions: r
						} = t.payload, s = Object.values(r).reduce((e, t) => Object(_f.h)(t) ? {
							...e,
							[t.id]: t
						} : e, {});
						return Object.keys(s).length ? Object(L.merge)(e, s) : e
					}
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case F.k: {
						const {
							response: r
						} = t.payload, s = r && r.profiles;
						return Object(L.merge)(e, s)
					}
					case Yi.l:
					case Yi.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(L.merge)(e, {
							[r.id]: r
						}) : e
					}
					case Pr.m: {
						const r = t.payload,
							{
								title: s,
								over18: n
							} = r.settings,
							a = e[r.subredditId];
						return !a || a.title === s && a.isNSFW === n ? e : {
							...e,
							[r.subredditId]: {
								...a,
								id: r.subredditId,
								title: s,
								isNSFW: n
							}
						}
					}
					case Pr.k:
					case Pr.j: {
						const {
							imageUrl: r,
							key: s,
							subredditId: n
						} = t.payload;
						if ("profileIcon" !== s) return e;
						const a = e[n];
						return a ? {
							...e,
							[n]: {
								...a,
								icon: {
									height: null,
									url: r,
									width: null
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const If = {};
			var Sf = (e = If, t) => {
					switch (t.type) {
						case Yi.c:
						case Yi.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case Yi.a:
						case Yi.b:
						case Yi.d:
						case Yi.e: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				gf = Object(T.c)({
					pending: Sf
				});
			const Tf = {};
			var Df = (e = Tf, t) => {
				switch (t.type) {
					case Yi.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, n = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: n
						}
					}
					case Yi.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g: {
						const {
							profileName: r,
							moderatedSubredditIds: s
						} = t.payload;
						return s ? {
							...e,
							[r]: [...e[r] || [], ...s]
						} : e
					}
					default:
						return e
				}
			};
			const jf = {};
			var vf = (e = jf, t) => {
					switch (t.type) {
						case Yi.e: {
							const {
								pageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case V.c:
						case V.i: {
							const {
								moderatedPageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Af = Object(T.c)({
					api: gf,
					models: Df,
					pageInfo: vf
				});
			const wf = {};
			var Rf = (e = wf, t) => {
					switch (t.type) {
						case Yi.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Yi.g:
						case Yi.h: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				Cf = Object(T.c)({
					pending: Rf
				});
			const Pf = {};
			var Lf = (e = Pf, t) => {
					switch (t.type) {
						case Yi.h: {
							const {
								pageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Nf = Object(T.c)({
					api: Cf,
					pageInfo: Lf
				}),
				kf = r("./src/reddit/actions/pinnedPost.ts");
			const xf = {};
			var Uf = Object(_b.a)((e = xf, t) => {
				switch (t.type) {
					case kf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case kf.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: [...n, r].slice(-Ce.bb)
						}
					}
					case kf.g: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: n.filter(e => e !== r)
						}
					}
					default:
						return e
				}
			}, xf);
			const Mf = {};
			var Ff = Object(_b.a)((e = Mf, t) => {
				switch (t.type) {
					case kf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			}, Mf);
			const Gf = {};
			var Bf = Object(_b.a)((e = Gf, t) => {
					switch (t.type) {
						case kf.c:
						case kf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r]
							}
						}
						case kf.b:
						case kf.e:
						case kf.d:
						case kf.g: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: n.filter(e => e !== r)
							}
						}
						default:
							return e
					}
				}, Gf),
				Hf = Object(T.c)({
					data: Uf,
					initialData: Ff,
					pending: Bf
				}),
				Vf = r("./src/reddit/actions/trophyCase.ts");
			const qf = {};
			var Kf, Wf, $f = (e = qf, t) => {
					switch (t.type) {
						case Vf.a: {
							const {
								profileId: r,
								trophyIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Qf = Object(T.c)({
					about: Ef,
					models: hf,
					moderated: Af,
					multireddits: Nf,
					pinnedPosts: Hf,
					trophyCases: $f
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Kf || (Kf = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Wf || (Wf = {}));
			var Yf, zf, Xf;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Yf || (Yf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(zf || (zf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Xf || (Xf = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Yf || (Yf = {}));
			Object(Re.a)("PROMO__SHOW_PROMO"), Object(Re.a)("PROMO__HIDE_PROMO");
			const Jf = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Zf = (e = Jf, t) => {
					switch (t.type) {
						case "PROMO__SHOW_PROMO": {
							const {
								promoType: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case "PROMO__HIDE_PROMO": {
							const {
								promoType: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				em = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const tm = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: em.d,
					viewer_streams_refresh: em.c,
					viewer_streams_refresh_slop: em.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var rm = (e = tm, t) => {
				switch (t.type) {
					case em.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case em.x: {
						const r = t.payload.name.toLowerCase();
						return {
							...e,
							isError: !1,
							isPending: !1,
							subreddits: {
								...e.subreddits,
								[r]: {
									...t.payload.config
								}
							}
						}
					}
					case em.G:
						return {
							...e, isPending: !0
						};
					case em.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case em.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var sm = (e = {}, t) => {
				switch (t.type) {
					case em.L:
						return {
							...e, [em.b]: t.payload.error
						};
					case em.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case em.z: {
						const {
							[em.b]: t, ...r
						} = e;
						return r
					}
					case em.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const nm = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var am = (e = {}, t) => {
				switch (t.type) {
					case em.N:
						return nm(e, t.payload, !0);
					case em.O:
						return nm(e, em.b, !0);
					case em.y:
						return nm(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case em.z:
						return nm(e, em.b, !1, t.payload.utcTimeStamp);
					case em.M:
						return nm(e, t.payload.streamId, !1);
					case em.L:
						return nm(e, em.b, !1);
					default:
						return e
				}
			};
			const cm = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var om = (e = cm, t) => {
					switch (t.type) {
						case em.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case em.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case em.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				dm = Object(T.c)({
					config: rm,
					error: sm,
					pending: am,
					recommendedViewerSubreddits: om
				});
			const im = {};
			var um = (e = im, t) => {
				switch (t.type) {
					case em.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case em.F:
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
			const lm = {
				cursor: em.W,
				timestamps: {},
				visitOrder: []
			};
			var pm = (e = lm, t) => {
				switch (t.type) {
					case em.P:
						return lm;
					case em.X: {
						const r = t.payload,
							s = e.visitOrder.includes(r) ? e.visitOrder : [...e.visitOrder, r],
							n = s.indexOf(r);
						return s === e.visitOrder && n === e.cursor ? e : {
							...e,
							visitOrder: s,
							cursor: n
						}
					}
					case p.d:
						return bm(e, t.payload.id);
					case em.E:
						return bm(e, t.payload);
					case yd.k: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return fm(e, r)
					}
					case em.V: {
						const {
							streamId: r,
							timestamp: s
						} = t.payload;
						return {
							...e,
							timestamps: {
								...e.timestamps,
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const bm = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				fm = (e, t) => {
					const r = e.visitOrder[e.cursor],
						s = new Set(t),
						n = e.visitOrder.filter(e => !s.has(e)),
						a = n.indexOf(r),
						c = a > -1 ? a : Math.max(e.cursor - 1, 0);
					return n.length !== e.visitOrder.length ? {
						...e,
						cursor: c,
						visitOrder: n
					} : e
				},
				mm = {
					ended: [],
					removed: []
				};

			function ym(e) {
				return [...new Set(e)]
			}
			var Em = (e = mm, t) => {
				switch (t.type) {
					case em.t:
						return {
							...e, ended: ym(e.ended.concat(t.payload))
						};
					case em.u:
						return {
							...e, removed: ym(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const _m = {};
			var Om = (e = _m, t) => {
				switch (t.type) {
					case em.z:
						const {
							listingName: r, models: s
						} = t.payload;
						if (!r) return e;
						const n = s.map(e => e.post.id),
							a = e[r] || [],
							c = [...new Set([...n, ...a])];
						return {
							...e, [r]: c
						};
					default:
						return e
				}
			};
			const hm = {},
				Im = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: em.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: em.l - r
						}
					}), r)
				},
				Sm = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : em.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var gm = (e = hm, t) => {
				switch (t.type) {
					case em.y:
						return Sm(e, t.payload.model);
					case em.z:
						return Im(e, t.payload.models);
					case em.D: {
						const r = t.payload.streamId,
							s = t.payload.isUnsetting ? -1 : 1,
							n = (t.payload.isUp ? 1 : 0) * s,
							a = (t.payload.isUp ? 0 : 1) * s;
						return {
							...e,
							[r]: {
								...e[r],
								downvotes: e[r].downvotes + a,
								upvotes: e[r].upvotes + n
							}
						}
					}
					default:
						return e
				}
			};
			const Tm = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Dm = (e = Tm, t) => {
				switch (t.type) {
					case em.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case em.A:
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
			const jm = {
				reported: []
			};
			var vm = (e = jm, t) => {
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const Am = {
				isIntroFinished: !1
			};
			var wm = (e = Am, t) => {
				switch (t.type) {
					case em.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Rm = {
				reportedStreams: []
			};
			var Cm = (e = Rm, t) => {
					switch (t.type) {
						case em.C:
							return {
								...e, ...t.payload
							};
						case p.d: {
							const r = t.payload.id;
							return e.reportedStreams.includes(r) ? e : {
								...e,
								reportedStreams: [...e.reportedStreams, r]
							}
						}
						default:
							return e
					}
				},
				Pm = Object(T.c)({
					api: dm,
					history: pm,
					hlsStreams: Em,
					listings: Om,
					models: gm,
					preloads: Dm,
					reports: vm,
					theaterSettings: wm,
					userSettings: Cm,
					automuteLevels: um
				}),
				Lm = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				Nm = r("./src/reddit/actions/session.ts");
			const km = [];
			var xm = (e = km, t) => {
				switch (t.type) {
					case Nm.c:
					case Nm.d:
						return km;
					case Lm.d:
						return ((e, t) => Ki()(e, t) ? e : t)(e, t.subreddits);
					case Lm.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, Lm.c)
					}
					case Lm.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Lm.c)
					}
					default:
						return e
				}
			};
			const Um = {};
			var Mm = (e = Um, t) => {
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
				Fm = r("./src/reddit/actions/pages/report/constants.ts");
			var Gm = (e = null, t) => {
				switch (t.type) {
					case Fm.a:
						return t.payload;
					default:
						return e
				}
			};
			var Bm = (e = null, t) => {
				switch (t.type) {
					case Fm.b:
						return t.payload;
					case Fm.c:
					case Fm.d:
						return !1;
					default:
						return e
				}
			};
			var Hm = (e = !1, t) => {
				switch (t.type) {
					case Fm.d:
						return !0;
					case Fm.c:
					case Fm.b:
						return !1;
					default:
						return e
				}
			};
			var Vm = (e = !1, t) => {
					switch (t.type) {
						case Fm.c:
							return !0;
						case Fm.b:
						case Fm.d:
							return !1;
						default:
							return e
					}
				},
				qm = Object(T.c)({
					error: Bm,
					pending: Hm,
					success: Vm
				}),
				Km = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Wm = [];
			var $m = (e = Wm, t) => {
					switch (t.type) {
						case Km.a:
							return t.payload;
						default:
							return e
					}
				},
				Qm = Object(T.c)({
					reportPageApi: qm,
					reportPageRules: $m,
					initialReason: Gm
				}),
				Ym = r("./src/reddit/actions/reportRules.ts");
			const zm = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var Xm = (e = zm, t) => {
				switch (t.type) {
					case Ym.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Ym.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Re.a)("REQUEST_HOST_SET");
			var Jm = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Re.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Zm = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var ey = (e = Zm, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				ty = r("./src/reddit/components/SearchDropdown/index.tsx");
			var ry = (e = !1, t) => {
				switch (t.type) {
					case Pe.c:
						return !e;
					case lo.b: {
						const {
							event: r
						} = t.payload, s = r.target, n = document.getElementById(ty.b), a = document.getElementById(ty.a);
						return !(!s || !((null == n ? void 0 : n.contains(s)) || (null == a ? void 0 : a.contains(s)))) && e
					}
					case Pe.b:
					case lo.a:
					case lo.c:
						return !1;
					default:
						return e
				}
			};
			const sy = Object.create(null);
			var ny = (e = sy, t) => {
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Pe.h: {
						const {
							relatedQueries: r,
							query: s
						} = t.payload;
						if (r) {
							const t = s ? s.toLowerCase() : "";
							return Object.assign(Object.create(null), e, {
								[t]: r
							})
						}
						return e
					}
					default:
						return e
				}
			};
			var ay = (e = null, t) => {
				switch (t.type) {
					case q.SEARCH_RESULTS_RECEIVED:
					case Pe.j: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const cy = Object.create(null);
			var oy = (e = cy, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Pe.i: {
							const {
								order: r,
								searchQuery: s
							} = t.payload;
							return Object.assign(Object.create(null), e, {
								...e,
								[s.toLowerCase()]: r
							})
						}
						default:
							return e
					}
				},
				dy = r("./src/reddit/models/Search/index.ts");
			const iy = {};
			var uy = (e = iy, t) => {
					switch (t.type) {
						case Pe.i: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(dy.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				ly = Object(T.c)({
					idsByQuery: oy,
					models: uy
				});
			const py = {};
			var by = (e = py, t) => {
					switch (t.type) {
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								viewTreatment: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : e
						}
						default:
							return e
					}
				},
				fy = Object(T.c)({
					isDropdownOpen: ry,
					isSubredditSearchEnabled: (e = !0, t) => {
						switch (t.type) {
							case Pe.a:
								return !1;
							case Pe.d:
								return !0;
							default:
								return e
						}
					},
					relatedQueries: ny,
					searchQuery: ay,
					typeahead: ly,
					viewTreatment: by
				}),
				my = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const yy = {};
			var Ey = (e = yy, t) => {
				switch (t.type) {
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							categoryName: r,
							key: s,
							listingOrder: n,
							postOrder: a,
							posts: c,
							searchQuery: o,
							subreddits: d,
							viewTreatment: i
						} = t.payload, u = {
							subredditIcons: [],
							displayText: null,
							subredditOccurrences: 0,
							searchQuery: o
						};
						if (i === my.c.Trending || r) {
							const e = [];
							if (n && n.map(t => {
									!e.includes(t.id) && d[t.id] && (e.push(t.id), u.subredditIcons.push({
										url: d[t.id].icon.url,
										subredditName: d[t.id].name
									}), u.displayText || (u.displayText = d[t.id].displayText))
								}), a)
								for (let t = 0; t < a.length; t++) {
									const r = c[a[t]],
										s = r && r.belongsTo ? r.belongsTo.id : void 0;
									s && !e.includes(s) && d[s] && (e.push(s), u.subredditIcons.push({
										url: d[s].icon.url,
										subredditName: d[s].name
									}))
								}
							d && (u.subredditOccurrences = Object.keys(d).length - 1)
						}
						return {
							...e,
							[s]: u
						}
					}
					default:
						return e
				}
			};
			const _y = {};
			var Oy = (e = _y, t) => {
				switch (t.type) {
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							searchDiscoveryUnits: s
						} = t.payload;
						return s && Object.keys(s).length ? {
							...e,
							[r]: s
						} : e
					}
					default:
						return e
				}
			};
			const hy = {};
			var Iy = (e = hy, t) => {
					switch (t.type) {
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : hy
						}
						default:
							return e
					}
				},
				Sy = Object(T.c)({
					headerContent: Ey,
					models: Oy,
					order: Iy
				});
			Object(Re.a)("SEO__CRAWLER_RECEIVED");
			var gy = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Ty = r("./src/reddit/actions/seo/linksModule.ts");
			const Dy = {};
			var jy = (e = Dy, t) => {
					switch (t.type) {
						case Ty.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Ty.c:
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
				vy = r("./src/reddit/actions/seo/topicLinks.ts");
			const Ay = {};
			var wy = (e = Ay, t) => {
					switch (t.type) {
						case vy.a:
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
				Ry = Object(T.c)({
					crawler: gy,
					linksModule: jy,
					topicLinks: wy
				}),
				Cy = r("./src/reddit/actions/shortcuts/constants.ts");
			var Py = (e = null, t) => {
				switch (t.type) {
					case Cy.a:
						return t.payload;
					case u.a:
						return null;
					default:
						return e
				}
			};
			var Ly = (e = null, t) => {
					switch (t.type) {
						case Cy.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Ny = r("./src/reddit/constants/history.ts"),
				ky = r("./src/reddit/constants/shortcuts.ts"),
				xy = r("./src/reddit/helpers/history/index.ts");
			const Uy = ky.d.Global,
				My = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(xy.b)(Ny.a.IsOverlay) ? ky.d.Lightbox : ky.d.CommentPage;
						case "rpan":
							return Object(xy.b)(Ny.a.IsOverlay) ? ky.d.Lightbox : Uy;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return ky.d.Listing;
						case "modQueuePages":
							return ky.d.Modqueue;
						default:
							return Uy
					}
				};
			var Fy = (e = Uy, t) => {
					switch (t.type) {
						case u.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return My(e)
							}
							return Uy;
						default:
							return e
					}
				},
				Gy = Object(T.c)({
					activeCommentId: Py,
					activePostId: Ly,
					namespace: Fy
				});
			var By = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case y.q:
						case y.r:
							return !0;
						default:
							return e
					}
				},
				Hy = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Vy = Object(T.c)({
					firstFetch: By,
					models: Hy.b
				}),
				qy = r("./src/reddit/actions/streaming/modSettings.ts");
			var Ky = (e = null, t) => {
				switch (t.type) {
					case qy.b:
					case qy.c:
						return null;
					case qy.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Wy = (e = !1, t) => {
					switch (t.type) {
						case qy.b:
							return !0;
						case qy.c:
						case qy.a:
							return !1;
						default:
							return e
					}
				},
				$y = Object(T.c)({
					error: Ky,
					pending: Wy
				}),
				Qy = r("./src/reddit/actions/streaming/constants.ts");
			const Yy = {};
			var zy = (e = Yy, t) => {
					switch (t.type) {
						case Qy.a: {
							const {
								subredditId: r,
								modSettings: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Xy = Object(T.c)({
					api: $y,
					modSettings: zy
				}),
				Jy = r("./src/reddit/models/StructuredStyles/index.ts");
			const Zy = {};
			var eE = (e = Zy, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return Zy;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(Jy.h)(e.styles)
						}
						default:
							return e
					}
				},
				tE = r("./src/reddit/actions/exportImportStyles.ts");
			var rE = (e = null, t) => {
				switch (t.type) {
					case tE.c:
					case tE.b:
						return null;
					case tE.a:
						return t.payload;
					default:
						return e
				}
			};
			var sE = (e = !1, t) => {
					switch (t.type) {
						case tE.c:
							return !0;
						case tE.b:
						case tE.a:
							return !1;
						default:
							return e
					}
				},
				nE = Object(T.c)({
					error: rE,
					pending: sE
				}),
				aE = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				cE = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const oE = {};
			var dE = (e = oE, t) => {
					switch (t.type) {
						case K.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case q.SEARCH_RESULTS_RECEIVED:
						case Pe.g:
						case ve.PAGE_LOADED:
						case Ns.PAGE_LOADED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							const s = r.structuredStyles.data.flairTemplate;
							return {
								...e,
								...s
							}
						}
						case aE.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case aE.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Ft.a)(e, r)
						}
						case cl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Ft.a)(e, r)
						}
						case b.k:
							return oE;
						case cE.b: {
							const {
								templates: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				iE = Object(T.c)({
					models: dE
				});
			const uE = {};
			var lE = (e = uE, t) => {
				switch (t.type) {
					case b.f: {
						const r = t.payload;
						return {
							...e,
							[r.imageKey]: r.uploadId
						}
					}
					case b.k:
					case b.e:
						return uE;
					default:
						return e
				}
			};
			var pE = (e = !1, t) => {
				switch (t.type) {
					case b.n:
					case b.e:
						return !1;
					case b.a:
						return !0;
					default:
						return e
				}
			};
			var bE = (e = null, t) => {
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.a:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Pr.f:
						return null;
					default:
						return e
				}
			};
			const fE = {};
			var mE = (e = fE, t) => {
					switch (t.type) {
						case K.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case ve.PAGE_LOADED:
						case Ns.PAGE_LOADED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							const s = Object.keys(r.subredditAboutInfo || {});
							if (1 !== s.length) return e;
							const n = s[0],
								a = r.structuredStyles.data.style;
							return {
								...e,
								[n]: a
							}
						}
						case Pe.g:
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (aa()(r.subreddits, (e, t) => {
									if (e.name.toLowerCase() === r.subredditName.toLowerCase()) return s = t, !1
								}), !s) return e;
							const n = r.structuredStyles.data.style;
							return {
								...e,
								[s]: n
							}
						}
						case b.m: {
							const r = t.payload,
								s = e[r.subredditId];
							return {
								...e,
								[r.subredditId]: {
									...s,
									...r.styles
								}
							}
						}
						case b.h: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.styles
							}
						}
						case b.k: {
							const r = t.payload,
								s = Object(Jy.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Yi.k: {
							const r = t.payload,
								{
									banner: s,
									profile: n
								} = r;
							if (!s || !n) return e;
							const a = e[n.id];
							return {
								...e,
								[n.id]: {
									...a,
									bannerBackgroundImage: s.url
								}
							}
						}
						case Pr.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Fl(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case Pr.j: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Fl(e, {
									[r.subredditId]: {
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
				yE = Object(T.c)({
					draft: eE,
					exportStyles: nE,
					flairTemplate: iE,
					imagePreviews: lE,
					isBladeEditorDirty: pE,
					isEditing: bE,
					models: mE
				});
			Object(Re.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var EE = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				_E = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const OE = {};
			var hE = (e = OE, t) => {
				switch (t.type) {
					case _E.c:
					case _E.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case _E.a: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const IE = {};
			var SE = (e = IE, t) => {
					switch (t.type) {
						case _E.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case _E.b:
						case _E.a: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				gE = Object(T.c)({
					error: hE,
					pending: SE
				});
			const TE = {};
			var DE = (e = TE, t) => {
					switch (t.type) {
						case _E.b: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: t.payload
							}
						}
						default:
							return e
					}
				},
				jE = Object(T.c)({
					api: gE,
					models: DE
				}),
				vE = r("./src/reddit/actions/category/constants.ts"),
				AE = r("./src/reddit/actions/subredditMention/constants.ts");
			const wE = {};
			var RE = (e = wE, t) => {
				switch (t.type) {
					case AE.d:
					case G.b:
					case G.f:
					case q.SEARCH_RESULTS_RECEIVED:
					case K.SUBREDDIT_FAILED:
					case K.SUBREDDIT_LOADED:
					case ve.PAGE_LOADED:
					case Ns.PAGE_LOADED:
					case B.b:
					case B.e:
					case Ae.b:
					case Ae.a:
					case Ae.e:
					case Ae.d:
					case H.PROFILE_POSTS_LOADED:
					case W.b:
					case W.e:
					case Pe.g:
					case Zo.TOPIC_DATA_LOADED:
					case nd.u: {
						const r = t.payload.subredditAboutInfo;
						if (!r) return e;
						const s = Object.keys(r);
						return 0 === s.length ? e : s.reduce((e, t) => (r[t] && (e[t] ? e[t] = {
							...e[t],
							...r[t]
						} : e[t] = r[t]), e), {
							...e
						})
					}
					case ka.a: {
						const {
							subredditId: r,
							emojisEnabled: s
						} = t.payload, n = {
							...e[r],
							emojisEnabled: s
						};
						return {
							...e,
							[r]: n
						}
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(e => e.type === mf.a.SUBREDDIT);
						return n.length ? n.reduce((e, t) => Object(L.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Rc.g:
					case vE.f:
					case nd.g:
					case nd.o: {
						const {
							subredditsAboutInfo: r
						} = t.payload;
						if (!r) return e;
						const s = Object.keys(r);
						return 0 === s.length ? e : s.reduce((e, t) => (r[t] && (e[t] = e[t] ? {
							...e[t],
							...r[t]
						} : r[t]), e), {
							...e
						})
					}
					case ka.b: {
						const r = t.payload,
							{
								emojiCustomSize: s,
								subredditId: n
							} = r,
							a = e[n];
						if (!a) return e;
						const c = {
							...a
						};
						if (s) {
							const {
								width: e,
								height: t
							} = s;
							c.emojisCustomSize = [e, t]
						} else delete c.emojisCustomSize;
						return {
							...e,
							[n]: c
						}
					}
					case $.c: {
						const {
							data: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case ee.s: {
						const {
							subredditId: r,
							subredditCoins: s
						} = t.payload;
						if (!r || !s) return e;
						const n = e[r];
						if (!n) return e;
						const a = {
							...n,
							coins: s
						};
						return {
							...e,
							[r]: a
						}
					}
					default:
						return e
				}
			};
			const CE = {};
			var PE = (e = CE, t) => {
				switch (t.type) {
					case $.b:
					case $.c: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case $.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			var LE = (e = !1, t) => {
					switch (t.type) {
						case $.b:
							return !0;
						case $.c:
						case $.a:
							return !1;
						default:
							return e
					}
				},
				NE = Object(T.c)({
					error: PE,
					pending: LE
				}),
				kE = r("./src/reddit/actions/subredditCreation.ts");
			const xE = {
				apiError: null
			};
			var UE = (e = xE, t) => {
				switch (t.type) {
					case kE.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case kE.a:
					case kE.c:
					case kE.e:
						return xE;
					default:
						return e
				}
			};
			var ME = (e = null, t) => {
				switch (t.type) {
					case kE.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case kE.a:
					case kE.c:
					case kE.e:
						return null;
					default:
						return e
				}
			};
			var FE = (e = null, t) => {
				switch (t.type) {
					case kE.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case kE.c:
					case kE.b:
						return null;
					default:
						return e
				}
			};
			var GE = (e = !1, t) => {
					switch (t.type) {
						case kE.c:
							return !0;
						case kE.e:
						case kE.b:
							return !1;
						default:
							return e
					}
				},
				BE = Object(T.c)({
					error: UE,
					lastCreatedSubredditId: FE,
					initialCrosspost: ME,
					pending: GE
				});
			var HE = (e = !1, t) => {
					switch (t.type) {
						case nd.w:
							return !0;
						case nd.x:
						case nd.v:
							return !1;
						default:
							return e
					}
				},
				VE = Object(T.c)({
					pending: HE
				});
			const qE = {};
			var KE = (e = qE, t) => {
				switch (t.type) {
					case $.l:
					case $.m: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case $.k: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			const WE = {};
			var $E = (e = WE, t) => {
					switch (t.type) {
						case $.l: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case $.m:
						case $.k: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				QE = Object(T.c)({
					error: KE,
					pending: $E
				});
			const YE = {};
			var zE = (e = YE, t) => {
					switch (t.type) {
						case nd.f:
						case nd.g:
							return {
								...e, [t.payload.key]: !1
							};
						case nd.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				XE = Object(T.c)({
					pending: zE
				});
			var JE = (e = null, t) => {
				switch (t.type) {
					case ee.bb:
						return t.payload || null;
					case ee.db:
					case ee.cb:
						return null;
					default:
						return e
				}
			};
			var ZE = (e = !1, t) => {
					switch (t.type) {
						case ee.db:
							return !0;
						case ee.cb:
						case ee.bb:
							return !1;
						default:
							return e
					}
				},
				e_ = Object(T.c)({
					error: JE,
					pending: ZE
				});
			var t_ = (e = null, t) => {
				switch (t.type) {
					case nd.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case nd.m:
					case nd.l:
						return null;
					default:
						return e
				}
			};
			var r_ = (e = !1, t) => {
					switch (t.type) {
						case nd.m:
							return !0;
						case nd.l:
						case nd.k:
							return !1;
						default:
							return e
					}
				},
				s_ = Object(T.c)({
					error: t_,
					pending: r_
				}),
				n_ = r("./src/reddit/actions/subredditRules/constants.ts");
			var a_ = (e = !1, t) => {
					switch (t.type) {
						case n_.c:
							return !0;
						case n_.a:
						case n_.b:
							return !1;
						default:
							return e
					}
				},
				c_ = r("./src/reddit/actions/subredditSettings.ts");
			var o_ = (e = !1, t) => {
					switch (t.type) {
						case c_.e:
							return !0;
						case c_.f:
						case c_.d:
							return !1;
						default:
							return e
					}
				},
				d_ = Object(T.c)({
					pending: o_
				});
			const i_ = {};
			var u_ = (e = i_, t) => {
					switch (t.type) {
						case nd.n:
						case nd.o:
							return {
								...e, [t.payload.key]: !1
							};
						case nd.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				l_ = Object(T.c)({
					pending: u_
				}),
				p_ = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const b_ = {};
			var f_ = (e = b_, t) => {
				switch (t.type) {
					case p_.c:
					case p_.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case p_.a: {
						const r = t.payload,
							{
								options: s,
								error: n
							} = r,
							{
								subredditName: a
							} = s;
						return {
							...e,
							[a.toLowerCase()]: n
						}
					}
					default:
						return e
				}
			};
			const m_ = {};
			var y_ = (e = m_, t) => {
					switch (t.type) {
						case p_.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case p_.b:
						case p_.a: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				E_ = Object(T.c)({
					error: f_,
					pending: y_
				});
			const __ = {};
			var O_ = (e = __, t) => {
				switch (t.type) {
					case kl.c:
					case kl.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case kl.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			const h_ = {};
			var I_ = (e = h_, t) => {
					switch (t.type) {
						case kl.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case kl.b:
						case kl.a: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				S_ = Object(T.c)({
					error: O_,
					pending: I_
				}),
				g_ = Object(T.c)({
					about: NE,
					create: BE,
					inlineEditing: VE,
					models: QE,
					onboarding: XE,
					productOffers: e_,
					rankings: s_,
					rules: a_,
					settings: d_,
					similar: l_,
					topContent: S_,
					wiki: E_
				}),
				T_ = r("./node_modules/lodash/isNil.js"),
				D_ = r.n(T_);
			const j_ = {};
			var v_ = (e = j_, t) => {
					switch (t.type) {
						case $.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: D_()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				A_ = Object(T.c)({
					meta: v_
				});
			const w_ = {};
			var R_ = (e = w_, t) => {
				switch (t.type) {
					case vE.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return ta()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const C_ = {};
			var P_ = (e = C_, t) => {
					switch (t.type) {
						case Te.c: {
							const {
								communityInfo: r,
								id: s,
								type: n
							} = t.payload;
							return r && "subreddit" === n ? {
								...e,
								[s]: r
							} : e
						}
						default:
							return e
					}
				},
				L_ = r("./src/reddit/actions/subredditCrosspostable.ts");
			var N_ = (e = null, t) => {
				switch (t.type) {
					case L_.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case L_.c:
					case L_.b:
						return null;
					default:
						return e
				}
			};
			var k_ = (e = !1, t) => {
					switch (t.type) {
						case L_.c:
							return !0;
						case L_.b:
						case L_.a:
							return !1;
						default:
							return e
					}
				},
				x_ = Object(T.c)({
					errors: N_,
					pending: k_
				});
			const U_ = {};
			var M_ = (e = U_, t) => {
					switch (t.type) {
						case L_.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Ki()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				F_ = Object(T.c)({
					api: x_,
					ids: M_
				});
			const G_ = {};
			var B_ = (e = G_, t) => {
					switch (t.type) {
						case Kl.a: {
							const r = t.payload,
								{
									subredditId: s,
									distinguishKey: n,
									postIds: a
								} = r;
							if (!(s in e)) return {
								...e,
								[s]: {
									[n]: a
								}
							};
							const c = e[s];
							return Fl(c, {
								[n]: a
							}) === c ? e : {
								...e,
								[s]: {
									...c,
									[n]: a
								}
							}
						}
						default:
							return e
					}
				},
				H_ = Object(T.c)({
					models: B_
				});
			const V_ = {};
			var q_ = (e = V_, t) => {
				switch (t.type) {
					case d.a: {
						const {
							assets: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case i.g:
					case i.j: {
						const {
							subredditId: r,
							mainHeader: s
						} = t.payload, n = e[r] || {};
						return {
							...e,
							[r]: {
								...n,
								mainHeader: s
							}
						}
					}
					default:
						return e
				}
			};
			const K_ = {};
			var W_ = (e = K_, t) => {
				switch (t.type) {
					case d.a: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: t.payload
						}
					}
					case o.i: {
						const {
							communityRaw: r,
							subredditId: s
						} = t.payload;
						return r ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			const $_ = {};
			var Q_ = (e = $_, t) => {
				switch (t.type) {
					case d.a: {
						const {
							subredditId: r,
							distribution: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Y_ = {};
			var z_ = (e = Y_, t) => {
					switch (t.type) {
						case d.p: {
							const {
								subredditId: r,
								releaseNotes: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				X_ = Object(T.c)({
					assets: q_,
					communityRaw: W_,
					distributions: Q_,
					releaseNotes: z_
				}),
				J_ = r("./node_modules/lodash/isEqualWith.js"),
				Z_ = r.n(J_),
				eO = r("./src/lib/forceHttps/index.ts");
			const tO = {},
				rO = (e, t) => {
					return !Z_()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				sO = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let n = 0; n < r.length; n++) {
						const a = r[n],
							c = e[a],
							o = t[a];
						c && !rO(c, o) || (s[a] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var nO = (e = tO, t) => {
				switch (t.type) {
					case Ji.c:
						return ((e, t) => {
							const r = Object.keys(t);
							return r.length ? r.reduce((r, s) => {
								const n = e[s],
									a = t[s],
									c = n ? {
										...n,
										...a
									} : {
										...a
									};
								return a.icon.url ? c.icon.url = Object(eO.a)(a.icon.url) : n && n.icon.url ? c.icon = n.icon : c.icon.url = "", n && n.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(L.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case Lm.b:
					case AE.d:
					case vE.f:
					case Se.f:
					case Rc.g:
					case rd.c:
					case sd.b:
					case De.e:
					case De.h:
					case F.k:
					case Te.r:
					case Te.u:
					case Yi.h:
					case Jo.b:
					case G.b:
					case G.f:
					case Se.b:
					case je.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Ae.b:
					case Ae.e:
					case H.MORE_POSTS_LOADED:
					case H.PROFILE_POSTS_LOADED:
					case Yi.e:
					case q.SEARCH_RESULTS_RECEIVED:
					case K.SUBREDDIT_LOADED:
					case ve.PAGE_LOADED:
					case Vr.e:
					case Ns.PAGE_LOADED:
					case Yi.m:
					case W.b:
					case W.e:
					case we.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Pe.g:
					case $.c:
					case $.f:
					case $.i:
					case nd.a:
					case nd.g:
					case nd.o:
					case Zo.TOPIC_DATA_LOADED:
					case Zo.MORE_POSTS_LOADED:
						return sO(e, t.payload.subreddits || {});
					case F.f:
					case F.i:
					case F.m:
					case F.p:
					case F.v: {
						const {
							response: r
						} = t.payload, {
							subreddits: s
						} = r;
						return sO(e, s)
					}
					case Pe.i: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return sO(e, r.subreddits || {})
					}
					case Te.B: {
						const {
							subreddits: r
						} = t.payload;
						return {
							...r,
							...e
						}
					}
					case o.g: {
						const r = t.payload;
						return sO(e, r)
					}
					case b.m: {
						const r = t.payload,
							{
								subredditId: s,
								styles: n
							} = r;
						return "communityIcon" in n && e[s] && "string" == typeof n.communityIcon ? {
							...e,
							[s]: {
								...e[s],
								communityIcon: n.communityIcon
							}
						} : e
					}
					case c_.f: {
						const {
							settings: r
						} = t.payload, {
							subredditId: s,
							title: n
						} = r;
						return e[s] && void 0 !== n ? {
							...e,
							[s]: {
								...e[s],
								title: n
							}
						} : e
					}
					case _E.b: {
						const r = t.payload,
							{
								subreddits: s
							} = r,
							n = {};
						for (const e of s) n[e.id] = {
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
						return Object(L.merge)(e, n)
					}
					default:
						return e
				}
			};
			var aO = (e = null, t) => {
				switch (t.type) {
					case $.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case $.g:
					case $.f:
						return null;
					default:
						return e
				}
			};
			var cO = (e = !1, t) => {
				switch (t.type) {
					case $.g:
					case $.f:
						return !0;
					case $.e:
						return !1;
					default:
						return e
				}
			};
			var oO = (e = !1, t) => {
					switch (t.type) {
						case $.g:
							return !0;
						case $.f:
						case $.e:
							return !1;
						default:
							return e
					}
				},
				dO = Object(T.c)({
					errors: aO,
					fetched: cO,
					pending: oO
				});
			var iO = (e = null, t) => {
					switch (t.type) {
						case $.f: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						default:
							return e
					}
				},
				uO = Object(T.c)({
					api: dO,
					order: iO
				});
			const lO = {};
			var pO = (e = lO, t) => {
				switch (t.type) {
					case c_.a: {
						const r = t.payload;
						return Object(L.merge)(e, r)
					}
					case c_.b: {
						const {
							subredditId: r,
							notificationSettings: s
						} = t.payload;
						return Object(L.merge)(e, {
							[r]: s
						})
					}
					default:
						return e
				}
			};
			const bO = {};
			var fO = (e = bO, t) => {
				switch (t.type) {
					case nd.g: {
						const {
							key: r,
							subredditIds: s
						} = t.payload;
						return 0 === s.length ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const mO = {};
			var yO = (e = mO, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							recentSupporters: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case ee.S:
					case ee.V: {
						const {
							subredditId: r,
							powerupsCount: s,
							user: n
						} = t.payload;
						if (s > 0) {
							const t = {
								score: s,
								lastSupportedAt: (new Date).toString(),
								supporterInfo: {
									id: n.id,
									displayName: Object(Y.e)(n),
									icon: {
										url: n.accountIcon
									},
									profile: {
										isNsfw: n.isNSFW
									}
								}
							};
							return {
								...e,
								[r]: [t, ...e[r]]
							}
						}
						return e
					}
					default:
						return e
				}
			};
			const EO = {};
			var _O = (e = EO, t) => {
				var r;
				switch (t.type) {
					case ee.qb:
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						let n = null;
						if (r) {
							const {
								mediaPacks: e,
								...t
							} = r;
							n = t
						}
						return {
							...e,
							[s]: n
						}
					}
					case ee.I: {
						const {
							subredditsPowerupsInfo: r
						} = t.payload, s = r.reduce((e, {
							id: t,
							powerups: r
						}) => ({
							...e,
							[t]: r
						}), {});
						return {
							...e,
							...s
						}
					}
					case ee.S:
					case ee.V: {
						const {
							subredditId: s,
							powerupsCount: n
						} = t.payload;
						if (e[s] && n > 0) {
							const t = e[s],
								a = t.tier + 1,
								c = t.tiersInfo[a - 1],
								o = c && c.benefits;
							return {
								...e,
								[s]: {
									...e[s],
									benefits: o || (null === (r = e[s]) || void 0 === r ? void 0 : r.benefits),
									count: t.count + n,
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
			const OO = {},
				hO = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						n = null == s ? void 0 : s.emotes;
					if (!n) return e;
					const a = Ia(r, t),
						c = [...n, a];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				IO = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						n = null == s ? void 0 : s.emotes;
					if (!n) return e;
					const a = n.filter(e => e.id !== r);
					return {
						...e,
						[t]: {
							...s,
							emotes: a
						}
					}
				};
			var SO = (e = OO, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: Sa(r)
						}
					}
					case ha.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: hO(n, r, s)
						}
					}
					case ha.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: IO(n, r, s)
						}
					}
					default:
						return e
				}
			};
			const gO = {},
				TO = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var DO = (e = gO, t) => {
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(TO)
							}
						}
						case ee.S:
						case ee.V: {
							const {
								subredditId: r,
								powerupsCount: s,
								user: n,
								isAnonymous: a
							} = t.payload;
							if (!e[r] && s < 0) return e;
							let c = !1;
							const o = e[r].map(e => {
								var t;
								return a && !e.supporterInfo || !a && (null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.id) === n.id ? (c = !0, {
									...e,
									lastSupportedAt: s > 0 ? (new Date).toString() : e.lastSupportedAt,
									score: e.score + s
								}) : e
							}).filter(e => e.score > 0);
							if (c) return {
								...e,
								[r]: o.sort(TO)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: a ? null : {
										id: n.id,
										displayName: Object(Y.e)(n),
										icon: {
											url: n.accountIcon
										},
										profile: {
											isNsfw: n.isNSFW
										}
									}
								};
								return {
									...e,
									[r]: [t, ...e[r]].sort(TO)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				jO = r("./src/lib/makeProductOfferKey/index.ts");
			const vO = {};
			var AO = (e = vO, t) => {
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const n = s.reduce((e, t) => {
							const s = Object(jO.a)(t.type, r);
							return e[s] = e[s] ? [...e[s], t] : [t], e
						}, {});
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const wO = {};
			var RO = (e = wO, t) => {
					switch (t.type) {
						case l.g: {
							const {
								subredditId: r,
								products: s
							} = t.payload, n = Object.keys(s).reduce((e, t) => (e[t] = !0, e), {});
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				CO = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const PO = {};
			var LO = (e = PO, t) => {
				switch (t.type) {
					case nd.y: {
						const {
							id: r,
							progressModule: s
						} = t.payload;
						if (!s) {
							const t = {
								...e
							};
							return delete t[r], t
						}
						const n = (e => e.filter(({
							id: e
						}) => "invite_contributor" !== e).filter(({
							buttons: e
						}) => e.every(({
							__typename: e
						}) => CO.d.includes(e))))(s.cards);
						return {
							...e,
							[r]: {
								...s,
								cards: n
							}
						}
					}
					default:
						return e
				}
			};
			const NO = {};
			var kO = (e = NO, t) => {
				var r, s;
				switch (t.type) {
					case nd.y: {
						const {
							id: r,
							questions: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Se.f:
					case Se.b: {
						const {
							subreddits: s
						} = t.payload, n = {};
						for (const e of Object.keys(s)) {
							const t = s[e];
							((null === (r = t.answerableQuestions) || void 0 === r ? void 0 : r.length) || 0) > 0 && (n[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(n).length ? e : Object(L.assign)(e, n)
					}
					case nd.d: {
						const {
							subredditId: r,
							questionId: n
						} = t.payload, a = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(L.setIn)(e, [r], a.filter(e => e.id !== n))
					}
					case nd.e:
						return NO;
					default:
						return e
				}
			};
			const xO = {};
			var UO = (e = xO, t) => {
				switch (t.type) {
					case nd.b: {
						const {
							categoryRankingsKey: r
						} = t.payload, s = e[r], n = s && s.length ? [...s, ...t.payload.rankings] : t.payload.rankings;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const MO = {};
			var FO = (e = MO, t) => {
				switch (t.type) {
					case nd.c: {
						const {
							categoryRankingsKey: r,
							pageInfo: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const GO = {};
			var BO = (e = GO, t) => {
				switch (t.type) {
					case n_.b: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, n = {
							[s]: {
								rules: r.rules
							}
						};
						return {
							...e,
							...n
						}
					}
					case n_.e: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, n = {
							[s]: {
								rules: [...e[s].rules, ...r.rules]
							}
						};
						return {
							...e,
							...n
						}
					}
					case n_.f: {
						const {
							rules: r,
							subredditId: s,
							oldName: n
						} = t.payload;
						r.rules.shortName !== n && (e[s].rules = e[s].rules.filter(e => e.shortName !== n));
						const a = {
							[s]: {
								rules: [...r.rules, ...e[s].rules]
							}
						};
						return a[s].rules.sort((e, t) => e.priority - t.priority), {
							...e,
							...a
						}
					}
					case n_.g:
					case n_.d: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, n = {
							[s]: {
								rules: r.rules
							}
						};
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const HO = {};
			var VO = (e = HO, t) => {
				switch (t.type) {
					case c_.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case c_.f: {
						const r = t.payload.settings,
							s = e[r.subredditId] || {};
						return {
							...e,
							[r.subredditId]: {
								...s,
								...r
							}
						}
					}
					case Pr.m: {
						const r = t.payload,
							s = {
								...e[r.subredditId] || {},
								...r.settings
							};
						return {
							...e,
							[r.subredditId]: s
						}
					}
					default:
						return e
				}
			};
			const qO = {};
			var KO = (e = qO, t) => {
				switch (t.type) {
					case nd.o: {
						const {
							key: r,
							subredditIds: s
						} = t.payload;
						return 0 === s.length ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const WO = {};
			var $O = (e = WO, t) => {
				switch (t.type) {
					case nd.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case nd.z: {
						const {
							id: r,
							response: s
						} = t.payload, n = Object(L.setIn)(e, [r, "response"], s);
						return Object(L.setIn)(n, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const QO = {};
			var YO = (e = QO, t) => {
				switch (t.type) {
					case Rc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case kl.b: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const zO = [];
			var XO = (e = zO, t) => {
				switch (t.type) {
					case Se.b:
					case K.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: r
						} = t.payload;
						return r && r.length ? r : e
					}
					default:
						return e
				}
			};
			const JO = {};
			var ZO = (e = JO, t) => {
					switch (t.type) {
						case AE.d:
							const {
								unavailableSubreddits: r
							} = t.payload;
							return {
								...e, ...r
							};
						default:
							return e
					}
				},
				eh = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const th = {};
			var rh = (e = th, t) => {
					switch (t.type) {
						case eh.a: {
							const {
								welcomeMessage: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				sh = Object(T.c)({
					about: RE,
					api: g_,
					appliedFilters: A_,
					byCategory: R_,
					communityInfo: P_,
					crosspostable: F_,
					duplicates: H_,
					gov: X_,
					models: nO,
					moderated: uO,
					notificationSettings: pO,
					onboarding: fO,
					powerupRecentSupporters: yO,
					powerups: _O,
					powerupsEmojis: SO,
					powerupTopSupporters: DO,
					productOffers: AO,
					products: RO,
					progressModule: LO,
					questions: kO,
					rankings: UO,
					rankingsPageInfo: FO,
					rules: BO,
					settings: VO,
					similar: KO,
					survey: $O,
					topContent: YO,
					trending: XO,
					unavailableModels: ZO,
					welcomeMessage: rh
				});
			const nh = {};
			var ah = Object(_b.a)((e = nh, t) => {
					switch (t.type) {
						case K.SUBREDDIT_LOADED: {
							const {
								postIds: r,
								posts: s
							} = t.payload, n = r.slice(0, 2).reduce((e, t) => {
								if (s[t].isStickied) {
									const r = s[t].belongsTo.id;
									e[r] ? e[r].push(t) : e[r] = [t]
								}
								return e
							}, {});
							return Ee()({
								...e
							}, n)
						}
						case yd.o: {
							const {
								newStickiedPostList: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				}, nh),
				ch = Object(T.c)({
					data: ah
				}),
				oh = r("./node_modules/lodash/values.js"),
				dh = r.n(oh);
			const ih = [];
			var uh = (e = ih, t) => {
				switch (t.type) {
					case Ji.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: n
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Qi(t, n, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, n), t
						}
						return e.filter(e => e !== n)
					}
					case Te.u: {
						const {
							multireddits: e
						} = t.payload;
						return dh()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Ji.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return r ? e : e.filter(e => e !== s)
					}
					case Te.j: {
						const r = t.payload;
						return e.filter(e => e !== r)
					}
					default:
						return e
				}
			};
			var lh = (e = null, t) => {
				switch (t.type) {
					case Ji.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Ji.b:
					case Ji.c:
						return null;
					default:
						return e
				}
			};
			var ph = (e = !1, t) => {
				switch (t.type) {
					case Ji.b:
					case Ji.c:
						return !0;
					case Ji.a:
						return !1;
					default:
						return e
				}
			};
			var bh = (e = !1, t) => {
					switch (t.type) {
						case Ji.b:
							return !0;
						case Ji.c:
						case Ji.a:
							return !1;
						default:
							return e
					}
				},
				fh = Object(T.c)({
					errors: lh,
					fetched: ph,
					pending: bh
				});
			const mh = [];
			var yh = (e = mh, t) => {
				switch (t.type) {
					case Ji.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let n;
						return (n = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), n
					}
					case Ji.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== mf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Qi(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === mf.a.PROFILE && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const Eh = [];
			var _h = (e = Eh, t) => {
				switch (t.type) {
					case Ji.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case Ji.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== mf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Qi(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === mf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const Oh = [],
				hh = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var Ih = (e = Oh, t) => {
					switch (t.type) {
						case Te.u: {
							const {
								multireddits: r
							} = t.payload, s = dh()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(hh(r));
							return Ki()(e, s) ? e : s
						}
						case je.b: {
							const {
								account: r,
								multireddits: s,
								multiredditsByUser: n,
								multiredditsModelsState: a
							} = t.payload;
							if (!r) return e;
							const c = n[r.id];
							if (!c || !c.length) return e;
							const o = {
									...a,
									...s
								},
								d = $i()(e, c).sort(hh(o));
							return Ki()(e, d) ? e : d
						}
						case Ji.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: n
							} = t.payload;
							return r ? [...e, s].sort(hh(n)) : e.filter(e => e !== s)
						}
						case Te.j: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						case Te.g:
						case Te.m: {
							const {
								multireddit: r,
								multiredditsModelsState: s
							} = t.payload, n = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(hh(n))
						}
						default:
							return e
					}
				},
				Sh = r("./node_modules/lodash/difference.js"),
				gh = r.n(Sh);
			const Th = [];
			var Dh = (e = Th, t) => {
				switch (t.type) {
					case Yi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return Cp()([...e, ...r])
					}
					case Ji.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case Ji.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: n
						} = t.payload, a = r.filter(e => e.type === mf.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return n ? Cp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : gh()(e, c)
					}
					default:
						return e
				}
			};
			const jh = [];
			var vh = (e = jh, t) => {
					switch (t.type) {
						case Yi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return Cp()([...e, ...r])
						}
						case Ji.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case Ji.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: n
							} = t.payload, a = r.filter(e => e.type === mf.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return n ? Cp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : gh()(e, c)
						}
						default:
							return e
					}
				},
				Ah = Object(T.c)({
					api: fh,
					favoriteMultiOrder: uh,
					favoriteProfileOrder: yh,
					favoriteSubredditOrder: _h,
					multiredditOrder: Ih,
					profileOrder: Dh,
					subredditOrder: vh
				}),
				wh = r("./src/reddit/actions/survey/constants.ts");
			var Rh = (e = null, t) => {
				switch (t.type) {
					case wh.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var Ch = (e = 1, t) => {
				switch (t.type) {
					case wh.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var Ph = (e = !1, t) => {
				switch (t.type) {
					case wh.b:
						return !e;
					default:
						return e
				}
			};
			var Lh = (e = !0, t) => {
					switch (t.type) {
						case wh.h:
							return !e;
						default:
							return e
					}
				},
				Nh = Object(T.c)({
					activeDemoTrigger: Rh,
					demoTriggerThreshold: Ch,
					isDemoEnabled: Ph,
					isSampleFactorEnabled: Lh
				}),
				kh = r("./src/reddit/actions/tabBadging.ts");
			var xh = (e = !1, t) => {
					switch (t.type) {
						case kh.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				Uh = r("./src/reddit/actions/tags/constants.ts");
			const Mh = {
				pending: !1,
				error: !1
			};
			var Fh = (e = Mh, t) => {
				switch (t.type) {
					case Uh.l:
						return {
							...e, pending: !0
						};
					case Uh.m:
						return {
							error: !1, pending: !1
						};
					case Uh.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Gh = {
				pending: !1,
				error: !1
			};
			var Bh = (e = Gh, t) => {
				switch (t.type) {
					case Uh.o:
						return {
							...e, pending: !0
						};
					case Uh.p:
						return {
							error: !1, pending: !1
						};
					case Uh.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Hh = {
				pending: !1,
				error: !1
			};
			var Vh = (e = Hh, t) => {
				switch (t.type) {
					case Uh.t:
						return {
							...e, pending: !0
						};
					case Uh.s:
					case Uh.r:
					case Uh.e:
					case Uh.j:
						return {
							error: !1, pending: !1
						};
					case Uh.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const qh = {
				pending: !1,
				error: !1
			};
			var Kh = (e = qh, t) => {
				switch (t.type) {
					case Uh.v:
						return {
							...e, pending: !0
						};
					case Uh.w:
						return {
							error: !1, pending: !1
						};
					case Uh.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Wh = {
				pending: !1,
				error: !1
			};
			var $h = (e = Wh, t) => {
					switch (t.type) {
						case Uh.g:
							return {
								...e, pending: !0
							};
						case Uh.h:
							return {
								error: !1, pending: !1
							};
						case Uh.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				Qh = Object(T.c)({
					create: Fh,
					deleteTag: Bh,
					fetch: Vh,
					update: Kh,
					updatePrimaryTag: $h
				});
			const Yh = {
				global: [],
				recommendedGlobal: []
			};
			var zh = (e = Yh, t) => {
					switch (t.type) {
						case Uh.w:
						case Uh.r:
						case Uh.e:
						case Uh.j: {
							const {
								globalSubredditTags: e
							} = t.payload, r = Object.keys(e), s = r.filter(t => e[t].isRecommended);
							return {
								global: r,
								recommendedGlobal: s
							}
						}
						default:
							return e
					}
				},
				Xh = r("./node_modules/lodash/uniqWith.js"),
				Jh = r.n(Xh),
				Zh = r("./src/reddit/models/Option/index.ts");
			const eI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var tI = (e = eI, t) => {
					switch (t.type) {
						case Uh.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: Jh()([...e.selectedOptions || [], {
									...r
								}], Zh.a)
							}
						}
						case Uh.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(Zh.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case Uh.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case Uh.a: {
							const {
								primaryTagId: r
							} = t.payload, s = e.selectedOptions.findIndex(e => e.id === r), n = [...e.selectedOptions];
							return s >= 0 && n.splice(s, 1), {
								...e,
								selectedPrimaryTagId: r,
								selectedOptions: n
							}
						}
						default:
							return e
					}
				},
				rI = r("./src/reddit/helpers/tags/index.ts");
			const sI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var nI = (e = sI, t) => {
					switch (t.type) {
						case Uh.j: {
							const {
								globalSubredditTags: r,
								subredditScopedTags: s,
								subredditId: n
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[n]: {
										...e.subredditScopedTags[n] || {},
										...s[n] || {}
									}
								}
							}
						}
						case Uh.w:
						case Uh.s:
						case Uh.r: {
							const {
								primaryTag: r,
								globalSubredditTags: s,
								subredditScopedTags: n,
								itemTags: a,
								suggestedItemTags: c,
								subredditId: o,
								geoPlace: d
							} = t.payload, i = {
								...e.subredditPrimaryTagId
							};
							return r ? i[o] = r.tag.id : delete i[o], {
								subredditPrimaryTagId: i,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...s
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[o]: {
										...e.subredditScopedTags[o] || {},
										...n[o] || {}
									}
								},
								itemTags: {
									...e.itemTags,
									[o]: {
										...a[o] || {}
									}
								},
								geoPlaces: d ? Object(L.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(rI.a)(a[o] || {})
								}
							}
						}
						case Uh.p: {
							const {
								subredditId: r,
								tags: s
							} = t.payload, n = s.reduce((e, {
								tagId: t
							}) => (delete e[t], e), {
								...e.subredditScopedTags[r] || {}
							});
							return {
								...e,
								subredditScopedTags: {
									...e.subredditScopedTags,
									[r]: n
								}
							}
						}
						case Uh.e: {
							const {
								globalSubredditTags: r
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								}
							}
						}
						case Uh.h: {
							const {
								subredditId: r,
								primaryTagId: s,
								secondaryTags: n
							} = t.payload;
							return s && r ? {
								...e,
								subredditPrimaryTagId: {
									...e.subredditPrimaryTagId,
									[r]: s
								},
								itemTags: {
									...e.itemTags,
									[r]: {
										...n || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				aI = r("./src/reddit/reducers/tags/selected/index.ts"),
				cI = Object(T.c)({
					api: Qh,
					availableGlobalTagOrder: zh,
					models: nI,
					selected: aI.b,
					creation: tI
				}),
				oI = r("./src/reddit/actions/redditEmbed.ts"),
				dI = r("./src/reddit/actions/theme.ts"),
				iI = r("./src/reddit/actions/users.ts"),
				uI = r("./src/reddit/models/Theme/index.ts");
			const lI = {
				current: uI.c,
				cached: {}
			};
			var pI = (e = lI, t) => {
					switch (t.type) {
						case dI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? uI.b : uI.c,
								cached: {}
							}
						}
						case Cr.a:
						case Cr.b:
						case Cr.h:
						case Cr.i:
						case Cr.f:
						case Cr.j:
						case De.e:
						case De.h:
						case G.a:
						case G.e:
						case G.b:
						case G.f:
						case G.d:
						case G.h:
						case Se.b:
						case K.SUBREDDIT_LOADED:
						case je.b:
						case je.a:
						case Se.f:
						case oI.b:
						case $.i:
						case Pe.g:
						case q.SEARCH_RESULTS_RECEIVED:
						case Pr.i:
						case ve.PAGE_LOADED:
						case Ns.PAGE_LOADED:
						case iI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: uI.b,
									cached: {}
								} : {
									current: uI.c,
									cached: {}
								}
							}
							return e;
						case B.d:
						case B.e:
						case Ae.a:
						case Ae.b:
						case Ae.d:
						case Ae.e:
						case H.PROFILE_POSTS_FAILED:
						case H.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: uI.b,
								cached: {}
							} : {
								current: uI.c,
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
									current: uI.b,
									cached: {}
								} : {
									current: uI.c,
									cached: {}
								}
							}
							return e;
						case Pr.h: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: uI.b,
								cached: {}
							} : {
								current: uI.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: uI.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: uI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				bI = r("./src/reddit/actions/toaster.ts");
			const fI = [];
			var mI = (e = fI, t) => {
					switch (t.type) {
						case bI.c: {
							const r = t.payload,
								s = [];
							let n = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), n = n || e === r
							}
							return n || s.push(r), s
						}
						case bI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				yI = r("./src/reddit/actions/tooltip.ts");
			var EI = (e = null, t) => {
					switch (t.type) {
						case yI.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case yI.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case yI.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case yI.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ee.K:
						case yI.d:
						case u.a:
						case lo.b:
						case lo.c:
						case lo.a:
							return null;
						default:
							return e
					}
				},
				_I = r("./src/reddit/actions/tracing.ts");
			const OI = {
				traceId: void 0
			};
			var hI = (e = OI, t) => {
					switch (t.type) {
						case _I.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				II = r("./src/lib/asyncActions/index.ts"),
				SI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const gI = Object(II.c)(SI.c.requestedActionType, SI.c.succeededActionType, SI.c.failedActionType),
				TI = Object(II.c)(SI.a.requestedActionType, SI.a.succeededActionType, SI.a.failedActionType),
				DI = Object(II.c)(SI.d.requestedActionType, SI.d.succeededActionType, SI.d.failedActionType);
			var jI = Object(T.c)({
					load: gI,
					execute: TI,
					send: DI
				}),
				vI = r("./src/reddit/actions/tracking.ts");
			const AI = {};
			var wI = (e = AI, t) => {
					switch (t.type) {
						case vI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case vI.b: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				RI = Object(T.c)({
					reCaptchaEnterprise: jI,
					viewportDataLoaded: wI
				}),
				CI = r("./src/reddit/actions/trafficStats/constants.ts");
			var PI = (e = !1, t) => {
				switch (t.type) {
					case CI.c:
						return !0;
					case CI.b:
					case CI.a:
						return !1;
					default:
						return e
				}
			};
			var LI = (e = null, t) => {
					switch (t.type) {
						case CI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case CI.c:
							return null;
						default:
							return e
					}
				},
				NI = Object(T.c)({
					pending: PI,
					trafficStats: LI
				});
			var kI = (e = null, t) => {
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
			var xI = (e = !1, t) => {
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
				UI = Object(T.c)({
					error: kI,
					pending: xI
				});
			var MI = (e = null, t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case s.b:
					case d.t:
						return null;
					default:
						return e
				}
			};
			var FI = (e = "", t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var GI = (e = null, t) => {
					switch (t.type) {
						case d.r:
							return t.payload && t.payload.publicAddress || null;
						case s.b:
						case d.t:
							return null;
						default:
							return e
					}
				},
				BI = Object(T.c)({
					api: UI,
					contentId: MI,
					initialRecipient: FI,
					publicAddress: GI
				}),
				HI = Object(T.c)({
					communityPoints: BI
				}),
				VI = r("./src/reddit/actions/search/trending.ts");
			const qI = [];
			var KI = (e = qI, t) => {
					switch (t.type) {
						case K.SUBREDDIT_LOADED:
						case VI.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				WI = Object(T.c)({
					models: KI
				});
			var $I = r("./src/reddit/routes/premium/index.ts");
			const QI = {};
			var YI = (e = QI, t) => {
					switch (t.type) {
						case Vf.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = $I.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				zI = r("./src/reddit/actions/upload.ts"),
				XI = r("./src/reddit/models/Upload/index.ts");
			const JI = {};
			var ZI = (e = JI, t) => {
					switch (t.type) {
						case zI.d: {
							const {
								key: r,
								id: s,
								file: n
							} = t.payload, a = e[r], c = a && a.file === n ? {
								...a.metadata
							} : {};
							return {
								...e,
								[r]: {
									key: r,
									id: s,
									file: n,
									metadata: c,
									url: void 0,
									status: XI.a.PENDING
								}
							}
						}
						case zI.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: XI.a.UPLOADING
								}
							}
						}
						case zI.c: {
							const {
								key: r,
								metadata: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									metadata: s
								}
							}
						}
						case zI.e: {
							const {
								key: r,
								progress: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									progress: s
								}
							}
						}
						case zI.g: {
							const {
								key: r,
								url: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: XI.a.SUCCESS,
									url: s
								}
							}
						}
						case zI.b: {
							const {
								key: r,
								error: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: XI.a.FAILED,
									error: s
								}
							}
						}
						case zI.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: XI.a.CANCELED
								}
							}
						}
						case zI.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Ls()(e, r)
						}
						default:
							return e
					}
				},
				eS = r("./src/reddit/actions/upvotePrompt.ts");
			var tS = (e = 0, t) => {
				switch (t.type) {
					case eS.a:
						return ++e;
					default:
						return e
				}
			};
			const rS = {};
			var sS = (e = rS, t) => {
					switch (t.type) {
						case l.d:
						case d.a:
						case o.f:
						case d.t: {
							const {
								wallet: r
							} = t.payload;
							return function(e, t) {
								if (!t) return e;
								const {
									subredditId: r
								} = t, s = e[r] || {};
								return {
									...e,
									[r]: {
										latest: t,
										byDate: {
											...s.byDate || {},
											[t.at]: t
										}
									}
								}
							}(e, r)
						}
						case d.w: {
							const r = t.payload,
								s = {
									...e
								};
							return Object.keys(r).forEach(t => {
								const n = r[t],
									a = e[t],
									c = {
										latest: a ? a.latest.at <= n.at ? n : a.latest : n,
										byDate: {
											...a ? a.byDate : {},
											[n.at]: n
										}
									};
								s[t] = c
							}), s
						}
						default:
							return e
					}
				},
				nS = r("./src/reddit/actions/accountGender/constants.ts"),
				aS = r("./src/reddit/actions/inbox.ts"),
				cS = r("./src/reddit/actions/pages/appeal/constants.ts"),
				oS = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				dS = r("./src/reddit/actions/sso/constants.ts"),
				iS = r("./src/reddit/endpoints/profile/info.ts");
			const uS = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || Ki()(s, t)) return e;
				const {
					karma: n
				} = t;
				return {
					...t,
					karma: {
						...iS.a,
						...null == s ? void 0 : s.karma,
						...n
					},
					gender: r
				}
			};
			var lS = Object(_b.a)((e = null, t) => {
				switch (t.type) {
					case cS.a:
					case cS.b:
					case Fm.b:
					case Fm.c:
					case Cr.a:
					case Cr.b:
					case Cr.f:
					case Cr.h:
					case Cr.i:
					case Cr.j:
					case De.e:
					case De.h:
					case De.g:
					case Te.q:
					case Te.r:
					case G.a:
					case G.e:
					case G.b:
					case G.f:
					case Se.a:
					case Se.b:
					case je.a:
					case je.b:
					case K.SUBREDDIT_FAILED:
					case Yi.l:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
					case V.c:
					case V.i:
					case Ae.e:
					case Ae.d:
					case Ae.b:
					case Ae.a:
					case H.PROFILE_POSTS_LOADED:
					case H.PROFILE_POSTS_FAILED:
					case K.SUBREDDIT_LOADED:
					case q.SEARCH_FAILED:
					case q.SEARCH_RESULTS_RECEIVED:
					case ve.PAGE_LOADED:
					case Ns.PAGE_LOADED:
					case Pe.e:
					case Pe.g:
					case oI.a:
					case oI.b:
					case Pr.i:
					case oS.b:
					case iI.c:
					case Zo.TOPIC_DATA_LOADED:
						return uS(e, t.payload.account);
					case iI.n:
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
							response: r
						} = t.payload;
						return r ? uS(e, r.account) : e
					}
					case iI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case Pr.k:
					case Pr.j: {
						const r = t.payload;
						return e && "profileIcon" === r.key ? {
							...e,
							accountIcon: r.imageUrl
						} : e
					}
					case ee.B:
					case ee.s: {
						const {
							coins: r
						} = t.payload;
						return e ? {
							...e,
							coins: r
						} : e
					}
					case ee.eb: {
						const {
							userName: r,
							karma: s
						} = t.payload;
						return r.toLowerCase() !== (e && Object(Y.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...iS.a,
								...null == e ? void 0 : e.karma,
								...s
							}
						}
					}
					case ge.w: {
						const {
							coins: r
						} = t.payload;
						return r && e ? {
							...e,
							coins: r
						} : e
					}
					case ku.i: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case aS.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case dS.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case dS.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case ho.c: {
						const {
							username: r
						} = t.payload;
						return e ? {
							...e,
							displayText: r,
							isNameEditable: !1,
							url: `/user/${r}`,
							username: r
						} : e
					}
					case nS.a:
					case nS.b: {
						if (!(null == t ? void 0 : t.payload)) return e;
						const r = t.payload;
						return e ? {
							...e,
							gender: {
								genderCategory: r.genderCategory,
								definedGender: r.definedGender
							}
						} : e
					}
					default:
						return e
				}
			}, null);
			var pS = (e = null, t) => {
				switch (t.type) {
					case iI.m:
					case iI.n:
						return null;
					case iI.l:
						return t.payload;
					default:
						return e
				}
			};
			var bS = (e = !1, t) => {
					switch (t.type) {
						case iI.m:
							return !0;
						case iI.n:
						case iI.l:
							return !1;
						default:
							return e
					}
				},
				fS = Object(T.c)({
					error: pS,
					pending: bS
				}),
				mS = Object(T.c)({
					api: fS
				});
			var yS = (e = !1, t) => {
				switch (t.type) {
					case iI.j:
						return !0;
					default:
						return e
				}
			};
			var ES = (e = !1, t) => {
					switch (t.type) {
						case iI.i:
							return !0;
						case iI.j:
						case iI.h:
							return !1;
						default:
							return e
					}
				},
				_S = Object(T.c)({
					pending: ES,
					emailSent: yS
				}),
				OS = Object(T.c)({
					api: _S
				}),
				hS = Object(T.c)({
					changeEmail: mS,
					sendResetEmail: OS
				}),
				IS = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const SS = {};
			var gS = (e = SS, t) => {
				switch (t.type) {
					case yt.f:
						return {
							...e, new: IS.a.pending
						};
					case yt.d:
						return {
							...e, new: IS.a.error
						};
					case yt.e:
						return {
							...e, new: IS.a.waitingForRequest
						};
					case yt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: IS.a.pending
						}
					}
					case yt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: IS.a.error
						}
					}
					case yt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: IS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const TS = [];
			var DS = (e = TS, t) => {
					switch (t.type) {
						case yt.e:
							return [t.payload, ...e];
						case yt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Pr.i:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				jS = Object(T.c)({
					api: gS,
					data: DS
				}),
				vS = r("./src/reddit/actions/chat/constants.ts"),
				AS = r("./src/reddit/actions/chat/userSettings.ts");
			const wS = vS.a.anybody;
			var RS = (e = wS, t) => {
					switch (t.type) {
						case AS.a:
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
				CS = Object(T.c)({
					invitePolicy: RS
				});
			const PS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var LS = (e = null, t) => {
				switch (t.type) {
					case ve.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Ki()(e, r) ? e : {
							...e,
							...r
						}
					}
					case ss.L: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return PS(e, r)
					}
					case Vr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return PS(e, r.length)
					}
					case Vr.c:
					case Vr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return PS(e, r)
					}
					default:
						return e
				}
			};
			const NS = {};
			var kS = (e = NS, t) => {
					switch (t.type) {
						case Va.a: {
							const e = t.payload.experimentVariants;
							return Iu(e)
						}
						default:
							return e
					}
				},
				xS = r("./src/reddit/actions/global/constants.ts");
			const US = {};
			var MS = (e = US, t) => {
					switch (t.type) {
						case xS.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				FS = Object(T.c)({
					byName: kS,
					localPersisted: MS
				}),
				GS = r("./src/reddit/actions/googleOneTap/index.ts");
			var BS = (e = !1, t) => {
				switch (t.type) {
					case GS.a:
						return !0;
					default:
						return e
				}
			};
			var HS = (e = !1, t) => {
				switch (t.type) {
					case Pr.e:
						return !0;
					case Pr.d:
						return !1;
					default:
						return e
				}
			};
			var VS = (e = "", t) => {
				switch (t.type) {
					case Pr.i:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const qS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var KS = (e = qS, t) => {
					switch (t.type) {
						case iI.b:
							return t.payload;
						default:
							return e
					}
				},
				WS = r("./src/reddit/actions/notifications/constants.ts"),
				$S = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var QS = (e = null, t) => {
				switch (t.type) {
					case $S.a:
					case $S.d:
					case WS.a:
						return t.payload && t.payload.error || null;
					case $S.c:
					case $S.f:
					case $S.a:
					case WS.c:
					case WS.b:
						return null;
					default:
						return e
				}
			};
			var YS = (e = !1, t) => {
				switch (t.type) {
					case WS.c:
						return !1;
					case WS.b:
						return !0;
					default:
						return e
				}
			};
			var zS = (e = !1, t) => {
					switch (t.type) {
						case WS.c:
							return !0;
						case WS.b:
						case WS.a:
							return !1;
						default:
							return e
					}
				},
				XS = Object(T.c)({
					error: QS,
					loaded: YS,
					pending: zS
				});
			var JS = (e = null, t) => {
				switch (t.type) {
					case WS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case WS.f:
					case WS.e:
						return null;
					default:
						return e
				}
			};
			var ZS = (e = !1, t) => {
				switch (t.type) {
					case WS.f:
						return !1;
					case WS.e:
						return !0;
					default:
						return e
				}
			};
			var eg = (e = !1, t) => {
					switch (t.type) {
						case WS.f:
							return !0;
						case WS.e:
						case WS.d:
							return !1;
						default:
							return e
					}
				},
				tg = Object(T.c)({
					error: JS,
					loaded: ZS,
					pending: eg
				}),
				rg = Object(T.c)({
					getPreferences: XS,
					setPreferences: tg
				});
			const sg = {
				byId: {},
				allIds: []
			};
			var ng = (e = sg, t) => {
				switch (t.type) {
					case $S.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case $S.g: {
						const r = t.payload && t.payload.messageType;
						return {
							...e,
							byId: {
								...e.byId,
								[r]: {
									...e.byId[r],
									...t.payload
								}
							}
						}
					}
					default:
						return e
				}
			};
			const ag = {
				byId: {},
				allIds: []
			};
			var cg = (e = ag, t) => {
					switch (t.type) {
						case $S.b: {
							const {
								sections: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				og = Object(T.c)({
					sections: cg,
					rows: ng
				}),
				dg = r("./src/lib/notifications/constants.ts");
			var ig = (e = !1, t) => {
				switch (t.type) {
					case dg.j:
						return !0;
					case dg.b:
					case dg.d:
					case dg.e:
						return !1;
					default:
						return e
				}
			};
			const ug = {
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
			var lg = (e = ug, t) => {
				switch (t.type) {
					case WS.b:
					case WS.f:
					case WS.d: {
						const {
							preferences: r
						} = t.payload;
						return ta()(r) ? e : r
					}
					default:
						return e
				}
			};
			const pg = {
				byId: {},
				allIds: []
			};
			var bg = (e = pg, t) => {
				switch (t.type) {
					case $S.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case $S.g: {
						const r = t.payload && t.payload.messageType;
						return {
							...e,
							byId: {
								...e.byId,
								[r]: {
									...e.byId[r],
									...t.payload
								}
							}
						}
					}
					default:
						return e
				}
			};
			const fg = {
				byId: {},
				allIds: []
			};
			var mg = (e = fg, t) => {
					switch (t.type) {
						case $S.e: {
							const {
								sections: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				yg = Object(T.c)({
					sections: mg,
					rows: bg
				}),
				Eg = Object(T.c)({
					api: rg,
					emailSettingsLayout: og,
					isNotificationPromptVisible: ig,
					preferences: lg,
					pushSettingsLayout: yg
				});
			const _g = {};
			var Og = (e = _g, t) => {
				switch (t.type) {
					case o.i:
					case $e.h: {
						const {
							subredditId: r,
							userOwnedBadges: s
						} = t.payload, n = s.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[r]: {
								...e[r] || {},
								...n
							}
						}
					}
					case l.d: {
						const {
							userOwnedBadges: r,
							product: s
						} = t.payload, n = r.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[s.subredditId]: {
								...e[s.subredditId] || {},
								...n
							}
						}
					}
					default:
						return e
				}
			};
			const hg = {},
				Ig = (e, t) => `${e}_${t||new Date}`;
			var Sg = (e = hg, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[Ig(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...s
							}
						}
						return e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload, s = ((null == r ? void 0 : r.allocation) || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
							...e,
							[Ig(t.subredditInfo.id, t.allocatedAt)]: t
						}), {});
						return {
							...e,
							...s
						}
					}
					case ee.U: {
						const {
							subredditId: r,
							powerupsCount: s,
							allocatedAt: n
						} = t.payload;
						if (s < 0) {
							const t = Ig(r, n),
								a = e[t];
							if (a && a.isPremium) return {
								...e,
								[t]: {
									...a,
									powerups: a.powerups + s,
									isActive: !1,
									isDeallocationAllowed: !1
								}
							}
						}
						return e
					}
					case ee.P: {
						const {
							subredditId: r,
							allocatedAt: s
						} = t.payload, n = Ig(r, s), a = e[n];
						return a && !a.isPremium ? {
							...e,
							[n]: {
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
			var gg = (e = null, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						return r ? Ls()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Ls()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.U: {
						const {
							powerupsCount: r
						} = t.payload;
						if (r < 0) {
							const t = Math.max((e.freeCount || 0) - r, 0);
							if (e) return {
								...e,
								freeCount: t
							}
						}
						return e
					}
					case ee.V: {
						const {
							powerupsCount: r
						} = t.payload;
						if (r > 0) {
							const t = Math.max((e.freeCount || 0) - r, 0);
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
			var Tg, Dg = (e = !1, t) => {
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
				jg = Object(T.c)({
					allocationByKey: Sg,
					data: gg,
					fetched: Dg
				}),
				vg = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(Tg || (Tg = {}));
			const Ag = {
				status: Tg.UNFETCHED,
				subscriptions: []
			};
			var wg = (e = Ag, t) => {
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: Tg.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: Tg.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: Tg.FAILED
						};
					default:
						return e
				}
			};
			var Rg = (e = "", t) => {
				switch (t.type) {
					case iI.d:
						return t.payload;
					default:
						return e
				}
			};
			var Cg = (e = null, t) => {
				switch (t.type) {
					case Nm.a:
					case Nm.b:
					case Nm.c:
					case Nm.e:
						return t.payload;
					case Nm.d:
						return null;
					default:
						return e
				}
			};
			var Pg = (e = !1, t) => {
				switch (t.type) {
					case Nm.f:
						return !0;
					default:
						return e
				}
			};
			var Lg = (e = "", t) => {
				switch (t.type) {
					case iI.k:
						return t.payload;
					default:
						return e
				}
			};
			var Ng = (e = null, t) => {
				switch (t.type) {
					case Va.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var kg = (e = null, t) => {
					switch (t.type) {
						case Va.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				xg = Object(T.c)({
					isEmployee: Ng,
					isLoggedIn: kg
				});
			var Ug = (e = null, t) => {
					switch (t.type) {
						case Pr.q: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Ki()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Mg = r("./src/reddit/actions/userWhitelist.ts");
			const Fg = {};
			var Gg = (e = Fg, t) => {
				switch (t.type) {
					case Mg.e:
						return {
							...e, new: IS.a.pending
						};
					case Mg.d:
						return {
							...e, new: IS.a.error
						};
					case Mg.f:
						return {
							...e, new: IS.a.waitingForRequest
						};
					case Mg.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: IS.a.pending
						}
					}
					case Mg.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: IS.a.error
						}
					}
					case Mg.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: IS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const Bg = [];
			var Hg = (e = Bg, t) => {
					switch (t.type) {
						case Mg.f:
							return [t.payload, ...e];
						case Mg.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Pr.i:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				Vg = Object(T.c)({
					api: Gg,
					data: Hg
				}),
				qg = Object(T.c)({
					account: lS,
					accountSettings: hS,
					blocked: jS,
					chatSettings: CS,
					drafts: LS,
					experiments: FS,
					googleOneTapEnabled: BS,
					isCustomizeFlyoutShowing: HS,
					topContentDismissalPrefsSet: Ug,
					language: VS,
					loid: KS,
					notificationPrefs: Eg,
					ownedBadges: Og,
					powerups: jg,
					prefs: vg.c,
					productOfferSubscriptions: wg,
					reddaid: Rg,
					session: Cg,
					sessionRefreshFailed: Pg,
					sessionTracker: Lg,
					temporaryGQL: xg,
					wallets: sS,
					whitelist: Vg
				});
			var Kg = (e = null, t) => {
				switch (t.type) {
					case oS.a:
						return t.payload || null;
					case oS.b:
					case oS.c:
						return null;
					default:
						return e
				}
			};
			var Wg = (e = !1, t) => {
				switch (t.type) {
					case oS.c:
						return !0;
					case oS.b:
					case oS.a:
						return !1;
					default:
						return e
				}
			};
			var $g = (e = !1, t) => {
				switch (t.type) {
					case oS.b:
						return !0;
					case oS.a:
					case oS.c:
						return !1;
					default:
						return e
				}
			};
			var Qg = (e = !1, t) => {
					switch (t.type) {
						case oS.b:
							return t.payload.userDataExportEligibility;
						case oS.a:
						case oS.c:
							return !1;
						default:
							return e
					}
				},
				Yg = Object(T.c)({
					error: Kg,
					pending: Wg,
					success: $g,
					userDataExportEligibility: Qg
				}),
				zg = Object(T.c)({
					userDataRequestPageApi: Yg
				});
			const Xg = {};
			var Jg = (e = Xg, t) => {
				switch (t.type) {
					case iI.g:
					case iI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case iI.e: {
						const {
							username: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			var Zg = (e = !1, t) => {
					switch (t.type) {
						case iI.g:
							return !0;
						case iI.f:
						case iI.e:
							return !1;
						default:
							return e
					}
				},
				eT = Object(T.c)({
					error: Jg,
					pending: Zg
				});
			const tT = {};
			var rT = (e = tT, t) => {
				switch (t.type) {
					case $e.e: {
						const {
							subredditId: r,
							usersAppliedBadges: s
						} = t.payload, n = Object.keys(s).reduce((t, n) => {
							const a = s[n];
							return t[n] = {
								...e[n] || {},
								[r]: a
							}, t
						}, {});
						return {
							...e,
							...n
						}
					}
					case $e.b: {
						const {
							badgeIds: r,
							subredditId: s,
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: r
							}
						}
					}
					case $e.a: {
						const {
							previousBadgeIds: r,
							subredditId: s,
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: r
							}
						}
					}
					case o.a: {
						const {
							badge: r,
							currentAppliedBadges: s,
							placement: n,
							subredditId: a,
							userId: c
						} = t.payload, o = s.filter(e => e.placement !== n).concat(r).filter(Boolean).map(e => e.id);
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
			const sT = {},
				nT = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const n = e[r],
							a = t[r];
						n && Ki()(n, a) || (s[r.toLowerCase()] = a)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var aT = (e = sT, t) => {
					switch (t.type) {
						case iI.f: {
							const {
								data: r
							} = t.payload;
							return nT(e, r)
						}
						case Yi.k: {
							const {
								user: r
							} = t.payload;
							return nT(e, {
								[r.username]: r
							})
						}
						case ee.s: {
							const {
								gildee: r
							} = t.payload;
							if (!r) return e;
							const s = e[r.toLowerCase()];
							if (!s) return e;
							const n = s.awardedLastMonth,
								a = n ? n.totalCount + 1 : 1,
								c = n && n.topAward;
							return c ? nT(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: a,
										topAward: c
									}
								}
							}) : e
						}
						case ee.eb: {
							const {
								userName: r,
								karma: s
							} = t.payload, n = e[r.toLowerCase()];
							if (!n) return e;
							const a = {
								...iS.a,
								...s
							};
							return nT(e, {
								[r.toLowerCase()]: {
									...n,
									karma: a
								}
							})
						}
						case Pr.k:
						case Pr.j: {
							const {
								imageUrl: r,
								key: s,
								username: n
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const a = n.toLowerCase(),
								c = e[a];
							return c ? nT(e, {
								[a]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						case Pr.m: {
							const {
								additional: r,
								settings: s
							} = t.payload;
							if (r.enableFollowers === r.prevEnableFollowers) return e;
							const n = s.currentUserName.toLowerCase(),
								a = e[n];
							return a ? nT(e, {
								[n]: {
									...a,
									enableFollowers: r.enableFollowers
								}
							}) : e
						}
						default:
							return e
					}
				},
				cT = r("./src/reddit/actions/usernameAvailable.ts");
			const oT = {};
			var dT = (e = oT, t) => {
				switch (t.type) {
					case cT.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: cT.b.Available
						}
					}
					case cT.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: cT.b.Error
						}
					}
					case cT.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: cT.b.Pending
						}
					}
					case cT.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: cT.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const iT = {};
			var uT = (e = iT, t) => {
				switch (t.type) {
					case ee.gb: {
						const {
							userId: r,
							supportedSubreddits: s
						} = t.payload, n = {
							[r]: s
						};
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			var lT = (e = !1, t) => {
					switch (t.type) {
						case ee.fb:
						case ee.hb:
							return !1;
						case ee.gb:
							return !0;
						default:
							return e
					}
				},
				pT = Object(T.c)({
					allocationByKey: uT,
					fetched: lT
				}),
				bT = r("./src/reddit/actions/presence.ts");
			const fT = {};
			var mT = (e = fT, t) => {
				switch (t.type) {
					case bT.a:
						return {
							...e, ...t.payload.presentUsers
						};
					default:
						return e
				}
			};
			var yT = (e = null, t) => {
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
			var ET = (e = !1, t) => {
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
				_T = Object(T.c)({
					error: yT,
					pending: ET
				});
			var OT = (e = null, t) => {
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const hT = {};
			var IT = (e = hT, t) => {
				switch (t.type) {
					case ee.wb: {
						const {
							postId: r,
							currentRank: s
						} = t.payload;
						return s ? {
							...e,
							[r]: s
						} : e
					}
					default:
						return e
				}
			};
			const ST = {};
			var gT = (e = ST, t) => {
					switch (t.type) {
						case ee.wb: {
							const {
								postId: r,
								topAwardersRank: s
							} = t.payload;
							return {
								...e,
								[r]: (s || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case ee.s: {
							const {
								id: r
							} = t.payload;
							return Ls()(e, [r])
						}
						default:
							return e
					}
				},
				TT = Object(T.c)({
					api: _T,
					currentPostId: OT,
					currentRank: IT,
					list: gT
				}),
				DT = Object(T.c)({
					api: eT,
					appliedBadges: rT,
					models: aT,
					nameAvailable: dT,
					topAwarders: TT,
					powerups: pT,
					presence: mT
				});
			const jT = {};
			var vT = (e = jT, t) => {
					switch (t.type) {
						case G.b:
						case G.f:
						case K.SUBREDDIT_LOADED:
						case $.i:
						case q.SEARCH_RESULTS_RECEIVED:
						case ve.PAGE_LOADED:
						case Ns.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = r.data.content.widgets.layout.idCardWidget,
								n = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== n.length) return e;
							const a = n[0];
							return {
								...e,
								[a]: s
							}
						}
						default:
							return e
					}
				},
				AT = r("./src/reddit/actions/widgets/constants.ts");
			const wT = {};
			var RT = (e = wT, t) => {
					switch (t.type) {
						case G.b:
						case G.f:
						case q.SEARCH_RESULTS_RECEIVED:
						case $.i:
						case K.SUBREDDIT_LOADED:
						case ve.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = r.data.content.widgets.items,
								n = r.data.content.widgets.layout.topbar.order.filter(e => s[e] && "menu" === s[e].kind);
							if (!n.length) return e;
							const a = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== a.length) return e;
							const c = a[0];
							return {
								...e,
								[c]: n[0]
							}
						}
						case AT.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case AT.h: {
							const r = t.payload;
							return e[r.subredditId] === r.widgetId ? {
								...e,
								[r.subredditId]: null
							} : e
						}
						default:
							return e
					}
				},
				CT = r("./src/reddit/models/Widgets/index.ts");
			const PT = {};
			var LT = (e = PT, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const n = s.widgets;
						return {
							...e,
							...n.items
						}
					}
					case AT.b: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case b.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object(CT.m)()
							}
						}), t
					}
					case AT.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case AT.i:
					case AT.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case AT.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case G.b:
					case G.f:
					case K.SUBREDDIT_LOADED:
					case $.i:
					case q.SEARCH_RESULTS_RECEIVED:
					case ve.PAGE_LOADED:
					case Ns.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets;
						return {
							...e,
							...s.items
						}
					}
					case Ji.h: {
						const {
							userIsSubscriber: r,
							nameIdentifiers: s,
							widgetId: n
						} = t.payload;
						if (!n || !e[n] || "community-list" !== e[n].kind) return {
							...e
						};
						const a = r,
							c = e[n],
							o = c.data.map(e => {
								const t = {
									...e
								};
								return s.some(e => e.name === t.name) && (t.isSubscribed = a), t
							});
						return {
							...e,
							[n]: {
								...c,
								data: o
							}
						}
					}
					case c_.f: {
						const {
							settings: r,
							idCardWidgetId: s
						} = t.payload;
						return s && e[s] && "publicDescription" in r && r.publicDescription !== e[s].description ? {
							...e,
							[s]: {
								...e[s],
								description: r.publicDescription || ""
							}
						} : e
					}
					default:
						return e
				}
			};
			const NT = {};
			var kT = (e = NT, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED:
					case G.f:
					case $.i:
					case ve.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets.layout.moderatorWidget,
							n = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== n.length) return e;
						const a = n[0];
						return {
							...e,
							[a]: s
						}
					}
					default:
						return e
				}
			};
			const xT = {};
			var UT = (e = xT, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED:
					case ve.PAGE_LOADED:
					case Ns.PAGE_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const n = Object.keys(r.subredditAboutInfo || {});
						if (1 !== n.length) return e;
						const a = n[0],
							c = s.widgets.layout.sidebar.order;
						return {
							...e,
							[a]: c
						}
					}
					case AT.e:
					case AT.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case AT.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case AT.g: {
						const r = t.payload;
						if ("menu" === r.widget.kind) return e;
						if (!e[r.subredditId]) return {
							...e,
							[r.subredditId]: [r.widgetId]
						};
						const s = e[r.subredditId].concat(r.widgetId);
						return {
							...e,
							[r.subredditId]: s
						}
					}
					case AT.h: {
						const r = t.payload;
						if (!e[r.subredditId]) return e;
						const s = e[r.subredditId].filter(e => e !== r.widgetId);
						return {
							...e,
							[r.subredditId]: s
						}
					}
					case G.b:
					case G.f:
					case K.SUBREDDIT_LOADED:
					case q.SEARCH_RESULTS_RECEIVED:
					case $.i:
					case ve.PAGE_LOADED:
					case Ns.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets.layout.sidebar.order,
							n = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== n.length) return e;
						const a = n[0];
						return {
							...e,
							[a]: s
						}
					}
					default:
						return e
				}
			};
			const MT = {
				accountManagerModalData: a,
				activeModal: m,
				ads: h,
				apiRequestState: g,
				appBadges: C,
				authorFlair: Z,
				awards: We,
				badges: ot,
				blockedRedditors: mt,
				blockUser: St,
				brandSafety: Tt,
				celebratoryMoments: vt,
				chat: nr,
				claimGold: pr,
				commentsListTruncated: fr,
				communityFlairs: Er,
				connection: hr,
				contentControls: Rr,
				contentGate: Nr,
				continueThreads: Ur,
				creations: Kn,
				dashboard: Qn,
				discoveryUnits: ia,
				dismissedTruncationList: pa,
				economics: Na,
				emojis: Ha,
				experimentOverrides: $a,
				externalAccount: Sc,
				featureFlags: wc,
				focusedVerticals: Hc,
				fontFiles: qc,
				gild: so,
				header: bo,
				htmlResponseStreaming: fo,
				imageUploads: Eo,
				interceptedAction: Oo,
				isChangeUsernameTooltipShowing: Io,
				isEmailVerificationTooltipShowing: go,
				isModeratorWithPostPerms: Do,
				jsApi: Ao,
				leaderboard: Uo,
				listings: vd,
				live: Pd,
				mediaEmbed: (e = Nd, t) => {
					switch (t.type) {
						case Ld.a:
							const {
								isDeleted: r, height: s, postId: n
							} = t.payload;
							return {
								...e, [n]: {
									height: s,
									isDeleted: r
								}
							};
						default:
							return e
					}
				},
				mediaGalleries: Fd,
				mediaPlayback: Hd,
				meta: Kd,
				moderatingSubreddits: Qd,
				modListingPage: ti,
				modModeEnabled: si,
				moreComments: li,
				multireddits: nu,
				notificationBannerId: cu,
				notificationsInbox: yu,
				nps: Ou,
				page: Du,
				platform: Au,
				postCollection: al,
				polls: $u,
				postFlair: ll,
				posts: Eb,
				postStickiedComments: Ib,
				givePremium: io,
				products: xb,
				profileCommentsPage: Xb,
				profilePrivatePage: ff,
				profileModSettingsPage: tf,
				profilePostsPage: sf,
				profiles: Qf,
				promos: Zf,
				publicAccessNetwork: Pm,
				recentSubreddits: xm,
				recommendations: Mm,
				reportPage: Qm,
				reportRules: Xm,
				requestHost: Jm,
				runTimeEnvVars: ey,
				search: fy,
				searchDiscoveryUnits: Sy,
				seo: Ry,
				shortcuts: Gy,
				sidebarPromotedPosts: Vy,
				streaming: Xy,
				structuredStyles: yE,
				stylesheets: EE,
				subredditAutocomplete: jE,
				subreddits: sh,
				subredditStickyPosts: ch,
				subscriptions: Ah,
				survey: Nh,
				tabBadged: xh,
				tags: cI,
				themes: pI,
				toaster: mI,
				tooltipId: EI,
				tracing: hI,
				tracking: RI,
				trafficStats: NI,
				transfers: HI,
				trending: WI,
				trophies: YI,
				uploads: ZI,
				user: qg,
				userDataRequestPage: zg,
				upvotePromptCountPerSess: tS,
				users: DT,
				widgets: Object(T.c)({
					idCardIds: vT,
					menuIds: RT,
					models: LT,
					moderatorIds: kT,
					sidebar: UT
				})
			}
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/actions/page.ts");
			const c = "/premium",
				o = Object(s.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), r.e("Premium")]).then(r.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				d = {
					action: a.e,
					chunk: n.r.PREMIUM,
					component: o,
					exact: !0,
					meta: {
						name: n.Kb.PREMIUM
					},
					path: c
				};
			t.a = d
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			}));
			var s = r("./src/reddit/selectors/user.ts");
			const n = e => e.blockedRedditors.api.pending,
				a = e => e.blockedRedditors.list,
				c = (e, t) => {
					const r = (e => {
						const t = a(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				},
				o = (e, t) => {
					const r = Object(s.ob)(e, {
						userName: t
					});
					return !!r && c(e, r.id)
				}
		},
		"./src/reddit/selectors/chatSettingsPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/models/ChatSettingsPage/index.ts");
			const n = (e, {
					subredditId: t
				}) => !!e.chat.subredditSettingsPage.api.fetch.pending[t],
				a = (e, {
					subredditId: t
				}) => {
					return (e.chat.subredditSettingsPage.models[t] || []).filter(e => e && e.settingType !== s.a.Unknown)
				}
		},
		"./src/reddit/selectors/claimgold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = e => e.claimGold.code,
				n = e => e.claimGold.showModal
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				c = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(c.a)({
				features: {
					crypto: o.a
				}
			});
			const d = (e, t) => {
				var r, s, n;
				return t ? null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t] : void 0
			};

			function i() {
				const e = Object(n.db)(),
					t = Object(s.e)(t => Object(n.r)(t, {
						pageLayer: e
					})),
					r = Object(s.e)(e => d(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const u = (e, t) => {
				var r;
				const s = null === (r = d(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return s === a.a.Ethereum || s === a.a.Rinkeby || s === a.a.EthTraderEthereum || s === a.a.EthTraderRinkeby || s === a.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/emojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "a", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/values.js"),
				n = r.n(s),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				d = r("./src/reddit/selectors/subreddit.ts");
			const i = [],
				u = e => e.emojis.models,
				l = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => {
					const r = e[t];
					return r ? [...n()(r.emojis), ...n()(r.snoomojis)] : i
				}),
				p = Object(a.a)(l, o.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, r, s) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !r) && (!(!e.userFlairAllowed && s === c.d.UserFlair) && !(!e.postFlairAllowed && s === c.d.LinkFlair)))),
				b = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				f = (e, t) => Object(d.t)(e, {
					subredditName: t
				}).emojisEnabled,
				m = {
					emojis: {},
					snoomojis: {}
				},
				y = (e, {
					subredditId: t
				}) => u(e)[t] || m,
				E = (e, t) => !!e.emojis.api.list.pending[t]
		},
		"./src/reddit/selectors/experiments/googleOneTap.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/meta.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(c.c, e => !e),
				i = Object(s.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e),
					experimentName: n.ab,
					expEventOverride: !1
				}), e => e),
				u = e => e === n.S.Onetap,
				l = e => e === n.S.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.K, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.K, i, (e, t) => !e && !!t && !Object(n.qe)(t))
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.nd
					}) === s.yd.Enabled
				},
				c = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.md
					}) === s.xd.Enabled
				}
		},
		"./src/reddit/selectors/experiments/upvotePrompt.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/models/Vote/index.ts"),
				c = r("./src/reddit/selectors/posts.ts");
			const o = 5e3,
				d = 12e3,
				i = (e, t) => {
					const r = Object(c.H)(e, t);
					return r && (1 === (null == r ? void 0 : r.score) || 0 === (null == r ? void 0 : r.score)) && (null == r ? void 0 : r.voteState) === a.a.notVoted
				},
				u = (e, t) => {
					if (!i(e, t)) return !1;
					const r = Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.ie
					});
					return r === s.je.Variant1 || r === s.je.Variant2
				}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return c
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "q", (function() {
				return f
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "n", (function() {
				return S
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "o", (function() {
				return D
			})), r.d(t, "b", (function() {
				return j
			}));
			var s = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
				a = r("./src/reddit/models/ScheduledPost/index.ts");
			const c = (e, {
					subredditId: t
				}) => ((e, {
					subredditId: t,
					type: r
				}) => !!e.posts.scheduledPosts[r].models[t])(e, {
					subredditId: t,
					type: a.f.standalonePosts
				}),
				o = (e, {
					subredditId: t,
					type: r
				}) => !!e.posts.scheduledPosts[r].pageInfo[t] && e.posts.scheduledPosts[r].pageInfo[t].hasNextPage,
				d = (e, {
					subredditId: t,
					type: r
				}) => e.posts.scheduledPosts[r].pageInfo[t] ? e.posts.scheduledPosts[r].pageInfo[t].endCursor : null,
				i = e => e.posts.scheduledPosts.api.pending,
				u = e => e.posts.scheduledPosts.api.pendingUpdate,
				l = e => e.posts.scheduledPosts.api.error,
				p = {},
				b = [],
				f = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.standalonePosts.postOrder[t] || b).filter(r => !!(e.posts.scheduledPosts.standalonePosts.models[t] || p)[r]).map(r => e.posts.scheduledPosts.standalonePosts.models[t][r]),
				m = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || b).filter(r => !!(e.posts.scheduledPosts.recurringPosts.models[t] || p)[r]).map(r => e.posts.scheduledPosts.recurringPosts.models[t][r]),
				y = (e, {
					subredditId: t,
					scheduledPostId: r,
					type: s
				}) => {
					return (e.posts.scheduledPosts[s].models[t] || p)[r] || void 0
				},
				E = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => y(e, {
					subredditId: t,
					scheduledPostId: r,
					type: a.f.standalonePosts
				}),
				_ = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => {
					const s = y(e, {
						subredditId: t,
						scheduledPostId: r,
						type: a.f.recurringPosts
					});
					return s || s
				},
				O = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => E(e, {
					subredditId: t,
					scheduledPostId: r
				}) || _(e, {
					subredditId: t,
					scheduledPostId: r
				}),
				h = e => e.creations.formData.scheduledPostId,
				I = ({
					scheduledPost: e
				}) => (({
					flair: e,
					isNsfw: t,
					isSpoiler: r,
					isOriginalContent: a
				}) => {
					const c = [];
					return a && c.push({
						text: "OC",
						type: n.f.Oc
					}), e && c.push(...Object(s.b)(e)), r && c.push({
						text: "spoiler",
						type: n.f.Spoiler
					}), t && c.push({
						text: "nsfw",
						type: n.f.Nsfw
					}), c
				})(e),
				S = ({
					scheduledPost: e
				}) => {
					const t = I({
							scheduledPost: e
						}),
						r = t.find(e => e.type === n.f.Richtext);
					return r || (t.find(e => e.type === n.f.Text) || null)
				},
				g = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.scheduledPostId,
				T = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.subredditId,
				D = e => e.posts.scheduledPosts.api.pendingUpdate,
				j = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/userDataRequest.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = e => e.userDataRequestPage.userDataRequestPageApi.userDataExportEligibility,
				n = e => e.userDataRequestPage.userDataRequestPageApi
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/CrowdControlLevelInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"975a7920607d"}')
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
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"dd38535e7dd7"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
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
		"./src/redditGQL/operations/ValidateCreateSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"4c43ed06b3c2"}')
		},
		"./src/redditGQL/operations/VerifyRecaptchaToken.json": function(e) {
			e.exports = JSON.parse('{"id":"c1242f999b6c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.b7832bde95d625fd7ab3.js.map